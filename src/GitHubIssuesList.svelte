<script>
  import { derived } from "svelte/store";

  import { categoriesStore } from "./storage/categories.store";
  import { issuesStore } from "./storage/issues.store";
  import { ghIssuesStore } from "./storage/github.store";

  let issueToTriage = {};

  function saveIssue(issue) {
    issuesStore.add(issue);
    issueToTriage = {};
  }

  const filteredGhIssues = derived(
    [issuesStore, ghIssuesStore],
    ([$issuesStore, $ghIssuesStore], set) => {
      const triagedIds = $issuesStore.map(i => i._id);

      const notTriaged = $ghIssuesStore.filter(
        ghi => triagedIds.indexOf(ghi.number) === -1
      );

      set(notTriaged);
    }
  );

  $: noOfIssuesToTriage = $filteredGhIssues.length;
</script>

Remaining to triage: {noOfIssuesToTriage}
<table class="table table-sm table-hover">
  <thead>
    <tr>
      <th>Url</th>
      <th>Title</th>
      <th>Operations</th>
    </tr>
  </thead>
  <tbody>
    {#each $filteredGhIssues as issue}
      <tr>
        <td>
          <a
            href="https://github.com/angular/angular/issues/{issue.number}"
            target="_blank">
            #{issue.number}
          </a>
        </td>
        <td>{issue.title}</td>
        <td>
          <button
            on:click={_ => (issueToTriage = { _id: issue.number, title: issue.title })}>
            T
          </button>
        </td>
      </tr>
      {#if issueToTriage._id === issue.number}
        <tr>
          <td colspan="3">
            Category:
            <select bind:value={issueToTriage.catId}>
              {#each $categoriesStore as category}
                <option value={category._id}>{category.title}</option>
              {/each}
            </select>
            <br />
            Type:
            <select bind:value={issueToTriage.type}>
              <option value="bug">bug</option>
              <option value="feature">feature</option>
              <option value="use-case">use-case</option>
              <option value="confusion">confusion</option>
              <option value="boilerplate">boilerplate</option>
              <option value="investigation">investigation</option>
            </select>
            <br />
            Technology:
            <select bind:value={issueToTriage.technology}>
              <option value={null}>-</option>
              <option value="svg">SVG</option>
              <option value="custom_el">Custom elements</option>
              <option value="csp">CSP</option>
            </select>
            <br />
            Title:
            <input type="text" bind:value={issueToTriage.title} />
            <br />
            <input type="checkbox" bind:checked={issueToTriage.ivy} />
            Ivy regression?
            <br />
            <input type="checkbox" bind:checked={issueToTriage.error_message} />
            Error message?
            <br />
            <button on:click={_ => saveIssue(issueToTriage)}>Save</button>
          </td>
        </tr>
      {/if}
    {/each}
  </tbody>
</table>

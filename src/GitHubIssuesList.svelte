<script>
  import { ghIssuesStore } from "./storage/github.store";
  import { categoriesStore } from "./storage/categories.store";
  import { issuesStore } from "./storage/issues.store";

  let issueToTriage = {};

  function saveIssue(issue) {
    issuesStore.add(issue);
    issueToTriage = {};
  }
</script>

<h1>GitHub issues to triage</h1>

<table class="table table-sm table-hover">
  <thead>
    <tr>
      <th>Url</th>
      <th>Title</th>
      <th>Operations</th>
    </tr>
  </thead>
  <tbody>
    {#each $ghIssuesStore as issue}
      <tr>
        <td>
          <a href={issue.url} target="_blank">#{issue.number}</a>
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
              <option value="investigation">investigation</option>
            </select>
            <br />
            Priority:
            <select bind:value={issueToTriage.priority}>
              <option value="P0">P0</option>
              <option value="P0">P1</option>
              <option value="P0">P2</option>
              <option value="P0">P3</option>
            </select>
            <br />
            Title:
            <input type="text" bind:value={issueToTriage.title} />
            <br />
            <button on:click={_ => saveIssue(issueToTriage)}>Save</button>
          </td>
        </tr>
      {/if}
    {/each}
  </tbody>
</table>

<script>
  import { issuesStore } from "./storage/issues.store";
  import IssueEdit from "./IssueEdit.svelte";

  export let category = null;

  let issuesInCategory = [];
  let selected = null;

  $: issuesInCategory = $issuesStore.filter(
    issue => category === null || issue.catId === category
  );
</script>

Total: {issuesInCategory.length}
<table class="table table-sm table-hover">
  <thead>
    <tr>
      <th>No</th>
      <th>Title</th>
      <th>Operations</th>
    </tr>
  </thead>
  <tbody>
    {#each issuesInCategory as issue}
      <tr>
        <td>
          <a
            href="https://github.com/angular/angular/issues/{issue._id}"
            target="_blank">
            #{issue._id}
          </a>
        </td>
        <td>{issue.title}</td>
        <td>
          <button on:click={() => (selected = issue)}>E</button>
        </td>
      </tr>
      {#if issue === selected}
        <tr>
          <td colspan="3">
            <IssueEdit issue={selected} />
          </td>
        </tr>
      {/if}
    {/each}
  </tbody>
</table>

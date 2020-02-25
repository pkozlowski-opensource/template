<script>
  import { issuesStore } from "./storage/issues.store";
  import IssueEdit from "./IssueEdit.svelte";
  import { remove } from "./storage/mongo-lab";

  export let category = null;

  let issuesInCategory = [];
  let selected = null;

  $: issuesInCategory = $issuesStore.filter(
    issue => category === null || issue.catId === category
  );

  function removeIssue(issue) {
    issuesStore.remove(issue);
  }

  function updateIssue(issue) {
    selected = null;
    issuesStore.updateIssue(issue);
  }
</script>

Total: {issuesInCategory.length}
<table class="table table-sm table-hover">
  <thead>
    <tr>
      <th>No</th>
      <th>Title</th>
      <th>Operations!</th>
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
          <button on:click={() => removeIssue(issue)}>D</button>
        </td>
      </tr>
      {#if issue === selected}
        <tr>
          <td colspan="3">
            <IssueEdit
              issue={selected}
              on:issueSave={e => updateIssue(e.detail)} />
          </td>
        </tr>
      {/if}
    {/each}
  </tbody>
</table>

<script>
  import Categories from "./Categories.svelte";
  import IssuesList from "./IssuesList.svelte";
  import GitHubIssuesList from "./GitHubIssuesList.svelte";

  let category = null;
  let triage = true;
</script>

<div class="container-fluid">
  <div class="row">
    <div class="col-12">
      <button on:click={() => (triage = true)}>Triage</button>
      <button on:click={() => (triage = false)}>Explore</button>
      <hr />
    </div>
  </div>
  {#if triage}
    <div class="row">
      <div class="col-12">
        <GitHubIssuesList />
      </div>
    </div>
  {:else}
    <div class="row">
      <div class="col-3">
        <Categories on:categorySelect={e => (category = e.detail)} />
      </div>
      <div class="col border-left">
        <IssuesList {category} />
      </div>
    </div>
  {/if}
</div>

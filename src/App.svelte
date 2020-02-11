<script>
  import { onMount } from "svelte";
  import { list } from "./storage/mongo-lab";

  import Categories from "./Categories.svelte";
  import IssuesList from "./IssuesList.svelte";
  import GitHubIssuesList from "./GitHubIssuesList.svelte";

  let category = null;
</script>

<div class="container-fluid">
  <div class="row">
    <div class="col-3">
      <Categories
        categoryId={null}
        on:categorySelect={e => (category = e.detail)} />
    </div>
    <div class="col border-left">
      <IssuesList {category} />
    </div>
  </div>
</div>

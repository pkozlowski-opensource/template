<script>
  import Categories from "./Categories.svelte";
  import IssuesList from "./IssuesList.svelte";
  import Dashboard from "./Dashboard.svelte";

  let category = null;
  let showDashboard = false;
</script>

<div class="container-fluid">
  <div class="row">
    <div class="col-12">
      <Dashboard />
    </div>
  </div>
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

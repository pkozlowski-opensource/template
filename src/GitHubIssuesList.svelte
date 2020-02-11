<script>
  import { ghIssuesStore } from "./storage/github.store";
</script>

<h1>GitHub issues</h1>

<ul>
  {#each $ghIssuesStore as issue}
    <li>{JSON.stringify(issue.url)}</li>
  {/each}
</ul>

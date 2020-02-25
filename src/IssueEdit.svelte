<script>
  import { createEventDispatcher } from "svelte";
  import { categoriesStore } from "./storage/categories.store";

  const dispatch = createEventDispatcher();
  export let issue = null;
</script>

<code>{JSON.stringify(issue)}</code>
Category:
<select bind:value={issue.catId}>
  {#each $categoriesStore as category}
    <option value={category._id}>{category.title}</option>
  {/each}
</select>
<br />
<button
  on:click={() => {
    dispatch('issueSave', issue);
  }}>
  Save
</button>

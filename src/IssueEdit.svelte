<script>
  import { createEventDispatcher } from "svelte";
  import { categoriesStore } from "./storage/categories.store";

  const dispatch = createEventDispatcher();
  export let issue = null;
</script>

<code>{JSON.stringify(issue)}</code>
<br />
Category:
<select bind:value={issue.catId}>
  {#each $categoriesStore as category}
    <option value={category._id}>{category.title}</option>
  {/each}
</select>
<br />
Title:
<input type="text" bind:value={issue.title} />
<br />

<button
  on:click={() => {
    dispatch('issueSave', issue);
  }}>
  Save
</button>

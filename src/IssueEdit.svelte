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
<!-- TODO: code duplication with GH triage form -->
Type:
<select bind:value={issue.type}>
  <option value={null}>-</option>
  <option value="bug">bug</option>
  <option value="feature">feature</option>
  <option value="use-case">use-case</option>
  <option value="confusion">confusion</option>
  <option value="boilerplate">boilerplate</option>
  <option value="investigation">investigation</option>
</select>
<br />
Technology:
<select bind:value={issue.technology}>
  <option value={null}>-</option>
  <option value="svg">SVG</option>
  <option value="custom_el">Custom elements</option>
  <option value="csp">CSP</option>
  <option value="observable">RxJS/Observable</option>
</select>
<br />

<button
  on:click={() => {
    dispatch('issueSave', issue);
  }}>
  Save
</button>
<button
  on:click={() => {
    dispatch('cancel');
  }}>
  Cancel
</button>

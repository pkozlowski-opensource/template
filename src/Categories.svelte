<script>
  import { createEventDispatcher, onMount } from "svelte";

  import { categoriesStore } from "./storage/categories.store";

  const dispatch = createEventDispatcher();

  export let categoryId;

  $: childCategories = $categoriesStore.filter(
    category => category.parentId === categoryId
  );

  function selectCategory(categoryId) {
    dispatch("categorySelect", categoryId);
  }
</script>

<ul>
  {#each childCategories as childCategory}
    <li>
      <a href="#" on:click={e => selectCategory(childCategory._id)}>
        {childCategory.title}
      </a>

      <svelte:self
        categoryId={childCategory._id}
        on:categorySelect={e => dispatch('categorySelect', e.detail)} />
    </li>
  {/each}
</ul>

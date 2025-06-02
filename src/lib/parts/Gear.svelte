<script>
  import { character } from '$lib/state.svelte.js'
</script>

<section class="section box">
  <h2 class="title has-text-primary">Gear</h2>
  {#each character.gearList as item, index}
    <div class="notification">
      <button class="delete" on:click={() => (character.gearList = character.gearList.filter((_, i) => i !== index))}></button>
      <div class="item-text" bind:textContent={item} contenteditable="true" />
    </div>
  {/each}
  <button class="button is-success" on:click={() => character.gearList.push('')}> Add Item </button>
</section>

<style>
  .item-text {
    margin-right: 1em;
  }

</style>
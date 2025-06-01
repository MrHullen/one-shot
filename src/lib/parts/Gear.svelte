<script>
  import { character } from '$lib/character.svelte.js'
</script>

<section class="section">
  <h2 class="title is-4">Gear</h2>
  <div class="columns is-multiline">
    {#each character.gearList as item}
      <div class="column is-3">
        <div>
          <label class="has-text-weight-bold">
            <input bind:value={item} />
          </label>
        </div>
      </div>
    {/each}
    <button class="button is-primary is-outlined is-fullwidth" on:click={() => character.gearList.push('')}> Add Item </button>
  </div>
</section>

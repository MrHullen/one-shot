<script>
  import { character } from '$lib/character.svelte.js'
</script>

<section class="section box">
  <h2 class="title is-4">Stats</h2>
  <div class="columns">
    {#each character.stats as stat}
      <div class="column has-text-centered has-text-weight-bold">
        {stat.name}:
        <input type="number" bind:value={stat.value} />
      </div>
    {/each}
  </div>
</section>

<style>
  input {
    background: transparent;
    border: none;
    width: 3em;
  }
</style>

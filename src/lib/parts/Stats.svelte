<script>
  import { character } from '$lib/state.svelte.js'
</script>

<section class="section box">
  <h2 class="title has-text-primary">Stats</h2>
  <div class="stats">
    {#each character.stats as stat}
      <div class="notification has-text-centered has-text-weight-bold">
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

  .stats {
    display: flex;
    flex-wrap: wrap ;
    justify-content: space-around;
  }

  .stats>div.notification {
    width: fit-content;
    padding: 0.75em;
  }

  .stats>div.notification:not(:last-child) {
    margin-bottom: 0;
  }
</style>

<script>
  import { character } from '$lib/character.svelte.js'
</script>

<header class="hero is-primary">
  <div class="hero-body">
    <input class="title" bind:value={character.name} />
    <div class="subtitle">
      <span>A wizard's apprentice, but formerly a</span>
      <input class="subtitle" bind:value={character.profession.name} />
    </div>
  </div>
</header>

<style>
  input {
    background: transparent;
    border: none;
    width: fit-content;
  }
</style>

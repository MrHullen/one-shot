<script>
  export let name
  export let profession

  let contenteditable = true
</script>

<header class="hero is-primary">
  <div class="hero-body">
    <input class="title" bind:value={name}>
    <div class="subtitle">
      <span>A wizard's apprentice, but formerly a</span>
      <input class="subtitle" bind:value={profession}>
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
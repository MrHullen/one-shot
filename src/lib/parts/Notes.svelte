<script>
  import { character } from '$lib/state.svelte.js'
</script>

<section class="section box">
  <h2 class="title has-text-primary">Notes</h2>
  <div>
    <div class="notification" bind:textContent={character.notes} contenteditable="true"/>
  </div>
</section>

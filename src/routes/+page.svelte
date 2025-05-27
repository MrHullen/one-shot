<script>
  import Header from '$lib/Header.svelte'
  import { getSpell } from '$lib/spells.js'

  let spell = ''
</script>

<Header />

<main class="content section">
  <div class="box">
    <p class="has-text-weight-bold">Generated Spell:</p>
    <p>{spell}</p>
  </div>
  <div class="box">
    <p class="has-text-weight-bold">Instructions:</p>
    <ul>
      <li>Click the button below to generate a random spell.</li>
      <li>Each click will produce a new spell description.</li>
      <li>Use the generated spell in your tabletop RPG sessions!</li>
    </ul>

  <button class="button is-primary" on:click={async () => { spell = "Channelling..."; spell = await getSpell() }}>Generate Spell</button>

</main>

<footer class="footer">
  <p class="has-text-centered">&copy; Dave Hullen 2025</p>
</footer>

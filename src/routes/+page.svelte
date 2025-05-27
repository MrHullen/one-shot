<script>
  import Header from '$lib/Header.svelte'
  import { getSpell, getSpellDescription } from '$lib/spells.js'
  import { getPotion } from '$lib/potions.js'

  let spellName = ''
  let spellDescription = ''
  let potion = ''
</script>

<Header />

<main class="content section">
  <div class="columns">
    <div class="column">
      <div class="box">
        <p class="has-text-weight-bold">Generated Spell:</p>
        <p>{spellName}</p>
        {#if spellDescription}
          <p class="has-text-weight-bold">Description:</p>
          <p>{spellDescription}</p>
        {/if}
      </div>
      <div class="box">
        <p class="has-text-weight-bold">Instructions:</p>
        <ul>
          <li>Click the button below to generate a random spell.</li>
          <li>Each click will produce a new spell description.</li>
          <li>Use the generated spell in your tabletop RPG sessions!</li>
        </ul>

        <button
          class="button is-primary"
          on:click={async () => {
            spellName = 'Channelling...'
            spellDescription
            spellName = await getSpell()
          }}>Discover Spell Name</button>
        <button
          class="button is-primary"
          on:click={async () => {
            spellDescription = 'Channelling...'
            spellDescription = await getSpellDescription(spellName)
          }}>Discover Spell Effect</button>
      </div>

      <div class="column">
        <div class="box">
          <p class="has-text-weight-bold">Brewed Potion:</p>
          <p>{potion}</p>
        </div>
        <div class="box">
          <p class="has-text-weight-bold">Instructions:</p>
          <ul>
            <li>Click the button below to generate a random potion.</li>
            <li>Each click will produce a new potion description.</li>
            <li>Use the generated potion in your tabletop RPG sessions!</li>
          </ul>

          <button
            class="button is-primary"
            on:click={async () => {
              potion = 'Brewing...'
              potion = await getPotion()
            }}>Generate Potion</button>
        </div>
      </div>
    </div>
  </div>
</main>

<footer class="footer">
  <p class="has-text-centered">&copy; Dave Hullen 2025</p>
</footer>

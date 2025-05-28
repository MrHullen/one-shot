<script>
  import Header from '$lib/Header.svelte'
  import { getSpell, getSpellDescription } from '$lib/spells.js'
  import { getPotion, getPotionDescription } from '$lib/potions.js'

  let counter = 0
  let spell = {
    name: '',
    description: '',
  }
  let potion = {
    name: '',
    description: '',
  }

  let spellList = []
  let potionList = []

  // function startIncrementing() {
  //   // Reset counter each time it starts
  //   counter = 0

  //   // Set an interval to run every 1000 milliseconds (1 second)
  //   intervalId = setInterval(() => {
  //     // Check if the counter has reached the maximum value (5)
  //     if (counter < 5) {
  //       // Increment the counter
  //       counter++
  //     } else {
  //       // If counter reaches 5, clear the interval to stop incrementing
  //       clearInterval(intervalId)
  //     }
  //   }, 1000)
  // }
</script>

<Header />

<main class="content section">
  <div class="columns">
    <div class="column">
      {#each spellList as spell}
        <div class="box">
          {#if counter > 0 && counter < 5}
            <progress class="progress is-primary" max="100">15%</progress>
          {:else}
            <p class="has-text-weight-bold">{spell.name}</p>
          {/if}

          {#if spell.description}
            <p>{spell.description}</p>
          {:else}
            <button
              class="button is-info"
              on:click={async () => {
                spell.description = 'Channelling...'
                spell.description = await getSpellDescription(spell.name)
              }}>Discover Spell Effect</button>
          {/if}
        </div>
      {/each}
      <button
        class="button is-success"
        on:click={async () => {
          spell.name = ''
          spell.description = ''
          // startIncrementing()
          spell.name = getSpell()
          spellList = [...spellList, { ...spell }]
        }}>Discover Spell Name</button>
    </div>

    <div class="column">
      {#each potionList as potion}
        <div class="box">
          <p class="has-text-weight-bold">{potion.name}</p>
          {#if potion.description}
            <p>{potion.description}</p>
          {:else}
            <button
              class="button is-info"
              on:click={async () => {
                potion.description = 'Brewing...'
                potion.description = await getPotionDescription(potion.name)
              }}>Discover Potion Effect</button>
          {/if}
        </div>
      {/each}
      <button
        class="button is-primary"
        on:click={async () => {
          potion.name = getPotion()
          potion.description = ''
          // startIncrementing()
          potionList = [...potionList, { ...potion }]
        }}>Generate Potion</button>
    </div>
  </div>
</main>

<footer class="footer">
  <p class="has-text-centered">&copy; Dave Hullen 2025</p>
</footer>

<script>
  import { character } from '$lib/state.svelte.js'
  import { getSpell, getSpellDescription } from './spells-data.js'

  let counter = 0
  let spell = {
    name: '',
    description: '',
  }

  function addSpell() {
    spell.name = ''
    spell.description = ''
    // random number between 2 and 6 inclusive
    spell.cost = Math.floor(Math.random() * 3) + 1 + Math.floor(Math.random() * 3) + 1
    counter = 1

    let interval = setInterval(() => {
      if (counter < 400) {
        counter++
      } else {
        clearInterval(interval)
        counter = 0
      }
    }, 10)
    spell.name = getSpell()
    character.spellList = [...character.spellList, { ...spell }]
  }
</script>

<section class="section box">
  <h2 class="title has-text-primary">Spell Grimoire</h2>

  {#each character.spellList as spell, index}
    <div class="notification">
      {#if counter > 0 && index == character.spellList.length - 1}
        <progress class="progress is-primary" max="400" value={counter}>15%</progress>
      {:else}
        <button class="delete" on:click={() => (character.spellList = character.spellList.filter((_, i) => i !== index))}></button>
    
        <p class="has-text-weight-bold">{spell.name} - {spell.cost}</p>
        {#if spell.description}
          <p>{spell.description}</p>
        {:else}
          <button
            class="button is-info"
            on:click={async () => {
              spell.description = 'Meditating and channelling...'
              spell.description = await getSpellDescription(spell.name)
            }}>Meditate on Spell Effect</button>
        {/if}
      {/if}
    </div>
  {/each}
  {#if character.spellList.length < 3}
    <button class="button is-success" on:click={addSpell}>Research New Spell</button>
  {/if}
</section>

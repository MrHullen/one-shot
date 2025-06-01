<script>
  import { character } from '$lib/character.svelte.js'
  import { getPotion, getPotionDescription } from './potions.js'

  let counter = 0
  let potion = {
    name: '',
    description: '',
  }

  function addPotion() {
    potion.name = ''
    potion.description = ''
    counter = 1

    let interval = setInterval(() => {
      if (counter < 400) {
        counter++
      } else {
        clearInterval(interval)
        counter = 0
      }
    }, 10)
    potion.name = getPotion()
    character.potionList = [...character.potionList, { ...potion }]
  }
</script>

<h2 class="title">Potion Bandolier</h2>

{#each character.potionList as potion, index}
  <div class="notification">
    {#if counter > 0 && index == character.potionList.length - 1}
    <progress class="progress is-primary" max="400" value="{counter}">15%</progress>
    {:else}
      <button class="delete"></button>
      <p class="has-text-weight-bold">{potion.name}</p>
      {#if potion.description}
        <p>{potion.description}</p>
      {:else}
      <button class="delete" on:click={() => character.potionList = character.potionList.filter((_, i) => i !== index)}></button>
        <button
          class="button is-info"
          on:click={async () => {
            potion.description = 'Testing, experimenting...'
            potion.description = await getPotionDescription(potion.name)
          }}>Test Potion Effect</button>
      {/if}
    {/if}

  </div>
{/each}

{#if character.potionList.length < 3}
  <button class="button is-success" on:click={addPotion}>Brew New Potion</button>
{/if}

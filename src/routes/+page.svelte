<script>
  import Header from '$lib/parts/Header.svelte'
  import Spells from '$lib/parts/Spells.svelte'
  import Potions from '$lib/parts/Potions.svelte'
  import Persistence from '$lib/parts/Persistence.svelte'
  import Footer from '$lib/parts/Footer.svelte'
  import { onMount } from 'svelte'

  import { character } from '$lib/character.svelte.js'

  // onMount(() => {
  //   if (localStorage.getItem('character')) {
  //     loadFromLocal()
  //   }
  // })
</script>

<Header />

<main class="content section">
  <button on:click={newCharacter}>New Character</button>
  <div class="columns box">
    {#each character.stats as stat}
      <div class="column has-text-centered has-text-weight-bold">
        {stat.name}:
        <input type="number" bind:value={stat.value}>
      </div>
    {/each}
  </div>
  {#each character.profession.items as item}
    <div class="notification">
      <p class="has-text-weight-bold">{item}</p>
    </div>
  {/each}
  <div class="columns is-8">
    <div class="column">
      <div class="box">
        <Spells bind:spellList={character.spellList} />
      </div>
    </div>
    <div class="column">
      <div class="box">
        <Potions bind:potionList={character.potionList} />
      </div>
    </div>
  </div>

  <Persistence />
</main>

<Footer />

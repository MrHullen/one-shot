<script>
  import Header from '$lib/parts/Header.svelte'
  import Stats from '$lib/parts/Stats.svelte'
  import Skills from '$lib/parts/Skills.svelte'
  import Gear from '$lib/parts/Gear.svelte'
  import Spells from '$lib/parts/Spells.svelte'
  import Potions from '$lib/parts/Potions.svelte'
  import Persistence from '$lib/parts/Persistence.svelte'
  import Footer from '$lib/parts/Footer.svelte'
  import { onMount } from 'svelte'

  import { character, setCharacter } from '$lib/character.svelte.js'

  onMount(() => {
    if (localStorage.getItem('character')) {
      setCharacter(JSON.parse(localStorage.getItem('character')))
    }
  })
</script>

<Header />

<main class="content section">

  <Stats />
  
  <Skills />

  <Gear />
  
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

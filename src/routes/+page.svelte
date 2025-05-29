<script>
  import Header from '$lib/Header.svelte'
  import Spells from '$lib/Spells.svelte'
  import Potions from '$lib/Potions.svelte'
  import Footer from '$lib/Footer.svelte'
  import { onMount } from 'svelte'

  let character = {
    name: 'Bob the Alchemist',
    profession: 'Barmaid',
    spellList: [],
    potionList: [],
  }

  function saveToLocal() {
    let data = JSON.stringify(character)
    localStorage.setItem('character', data)
  }

  function loadFromLocal() {
    if (localStorage.getItem('character')) {
      let data = localStorage.getItem('character')
      character = JSON.parse(data)
    } else {
      alert('No character data found in local storage.')
    }
  }

  function clearLocal() {
    if (!confirm('Are you sure you want to delete your character?')) return
    localStorage.clear()
    character = {
      name: 'Bob the Alchemist',
      profession: 'Barmaid',
      spellList: [],
      potionList: [],
    }
  }

  onMount(() => {
    if (localStorage.getItem('character')) {
      loadFromLocal()
    }
  })
</script>

<Header bind:name={character.name} bind:profession={character.profession} />

<main class="content section">
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

  <div class="buttons">
    <button class="button is-primary" on:click={saveToLocal}>Save Character</button>
    <button class="button is-secondary" on:click={loadFromLocal}>Load Character</button>
    <button class="button is-danger" on:click={clearLocal}>Delete Character</button>
  </div>
</main>

<Footer />

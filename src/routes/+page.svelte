<script>
  import Header from '$lib/parts/Header.svelte'
  import Stats from '$lib/parts/Stats.svelte'
  import Skills from '$lib/parts/Skills.svelte'
  import Notes from '$lib/parts/Notes.svelte'
  import Gear from '$lib/parts/Gear.svelte'
  import Spells from '$lib/parts/Spells.svelte'
  import Potions from '$lib/parts/Potions.svelte'
  import Footer from '$lib/parts/Footer.svelte'
  import { onMount } from 'svelte'
  import { user } from '$lib/state.svelte.js'
  import { getCharacter } from '$lib/data.js'

  onMount(() => {
    if (localStorage.getItem('user')) {
      let data = JSON.parse(localStorage.getItem('user'))
      console.log('Loading user from localStorage:', data)
      user.uid = data.uid
      user.email = data.email
      user.displayName = data.displayName
      user.photoURL = data.photoURL
      console.log('User loaded from localStorage:', user)
      getCharacter(data.uid)
    }
  })
</script>

<Header />

<main class="content section">

  <div class="columns">
    <div class="column is-one-third">
      <Stats />
    </div>
    <div class="column">
      <Notes />
    </div>
  </div>

  <Skills />

  <div class="columns is-8">
    <div class="column">
      <Gear />
    </div>
    <div class="column">
      <Spells />
    </div>
    <div class="column">
      <Potions />
    </div>
  </div>
</main>

<Footer />

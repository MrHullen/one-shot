<script>
  import Header from '$lib/parts/Header.svelte'
  import Stats from '$lib/parts/Stats.svelte'
  import Skills from '$lib/parts/Skills.svelte'
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
  <Stats />

  <Skills />

  <Gear />

  <div class="columns is-8">
    <div class="column">
      <div class="box">
        <Spells />
      </div>
    </div>
    <div class="column">
      <div class="box">
        <Potions />
      </div>
    </div>
  </div>
</main>

<Footer />

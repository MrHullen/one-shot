<script>
  import { character, setCharacter, resetCharacter } from '$lib/character.svelte.js'

  function saveToLocal() {
    let data = JSON.stringify(character)
    localStorage.setItem('character', data)
  }

  function loadFromLocal() {
    if (localStorage.getItem('character')) {
      let data = localStorage.getItem('character')
      setCharacter(JSON.parse(data))
    } else {
      alert('No character data found in local storage.')
    }
  }

  function clearLocal() {
    if (!confirm('Are you sure you want to delete your character?')) return
    resetCharacter()
    localStorage.clear()
  }
</script>

<div class="buttons">
  <button class="button is-primary" on:click={saveToLocal}>Save Character</button>
  <button class="button is-secondary" on:click={loadFromLocal}>Load Character</button>
  <button class="button is-danger" on:click={clearLocal}>Delete Character</button>
</div>

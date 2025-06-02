<script>
  import { user, character } from '$lib/state.svelte.js'
  import { setCharacter, getCharacter, login, logout } from '$lib/data.js'
</script>

<header class="hero is-primary">
  <div class="hero-body">
    <div class="level">
      <div class="level-left">
        <div class="level-item">
          <input class="title" bind:value={character.name} />
          <div class="subtitle">
            <span>A wizard's apprentice, but formerly a</span>
            <input class="subtitle" bind:value={character.profession} />
          </div>
        </div>
      </div>
      <div class="level-right">
        <div class="level-item">
          {#if user.uid}
            <div class="buttons">
              <button class="button is-primary" on:click={setCharacter}>Save Character</button>
              <button class="button is-secondary" on:click={getCharacter}>Load Character</button>
              <button class="button is-danger" on:click={logout}>Logout</button>
            </div>
          {:else}
            <div class="buttons">
              <button class="button is-success" on:click={login}>Login</button>
            </div>
          {/if}
        </div>
      </div>
    </div>
  </div>
</header>

<style>
  input {
    background: transparent;
    border: none;
    width: fit-content;
  }
</style>

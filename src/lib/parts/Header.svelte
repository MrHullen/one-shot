<script>
  import { user, character } from '$lib/state.svelte.js'
  import { setCharacter, getCharacter, login, logout } from '$lib/data.js'
</script>

<header class="hero is-primary ">
  <div class="hero-body">
    <div class="level">
      <div class="level-left">
        <div class="level-item columns">
          <input class="title has-text-light" bind:value={character.name} />
          <div class="subtitle">
            <span class="has-text-light">A wizard's apprentice, but formerly a</span>
            <input class="subtitle has-text-light" bind:value={character.profession} />
          </div>
        </div>
      </div>
      <div class="level-right">
        <div class="level-item">
          {#if user.uid}
            <div class="buttons">
              <button class="button is-success is-outlined" on:click={setCharacter}>Save</button>
              <button class="button is-secondary is-outlined" on:click={getCharacter}>Load</button>
              <button class="button is-danger is-outlined" on:click={logout}>Logout</button>
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
  input.title {
    display: block;
  }
</style>

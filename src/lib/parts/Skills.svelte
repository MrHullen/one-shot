<script>
  import { character } from '$lib/character.svelte.js'
</script>

<section class="section box">
  <h2 class="title is-4">Skills</h2>
  <div class="columns is-multiline">
    {#each character.skills as skill}
      <div class="column is-3">
        <div>
          <label class="has-text-weight-bold"
            >{skill.name}
            <input type="number" bind:value={skill.value} />
          </label>
        </div>
      </div>
    {/each}
  </div>
</section>

<style>
  input {
    background: transparent;
    border: none;
    width: 3em;
  }

  label {
    margin-left: 2em;
  }
</style>

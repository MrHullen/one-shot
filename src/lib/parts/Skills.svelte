<script>
  import { character } from '$lib/state.svelte.js'
</script>

<section class="section box">
  <h2 class="title has-text-primary">Skills</h2>
  <div class="grid is-col-min-10">
    {#each character.skills as skill}
          <label class="has-text-weight-bold"
            >{skill.name}
            <input type="number" bind:value={skill.value} />
          </label>
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

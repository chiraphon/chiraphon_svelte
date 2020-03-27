<script>
  import Userlist from "./Userlist.svelte";
  // export let name, user;
</script>

<style>
  h1 {
    color: #ff5e00;
    text-transform: uppercase;
    font-size: 3em;
    font-weight: 200;
		border-bottom: #fdb415 solid 0.1em;
  }
	 main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
		background-color:#f0e3c6;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  <h1>Userlist</h1>
</main>
	<br>
	<Userlist></Userlist>

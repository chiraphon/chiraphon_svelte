<script>
  let myTodo = getTodo();

  async function getTodo() {
    const response = await fetch("https://reqres.in/api/users");
    const todo = await response.json();

    if (response.ok) {
      return todo;
    } else {
      throw new Error(todo);
    }
  }
</script>


<style>
.card{
  margin-left: auto;
  margin-right: auto;
}
.card-body{
  background-color:#f3ede6;
}
</style>

  {#await myTodo}
    <p>...waiting</p>
  {:then myTodo}
		<div class="container-fluid">
    <div class="row justify-content-center text-center">
    {#each myTodo.data as data}
    <div class="col-10 col-sm-4 text-sm-center">
    <div class="card text-center" style="width: 17rem;">
		<img src={data.avatar} class="card-img-top" alt="image">
			<div class="card-body">
			<div class="card-title">{data.id}. <b>Name:</b> {data.first_name} {data.last_name}</div>
			<div class="card-title"><b>Email:</b> {data.email}</div>
			</div>
		</div>
    </div>
    {/each}
      </div>
    </div>
  {:catch error}
    <p style="color: red">{error.message}</p>
  {/await}

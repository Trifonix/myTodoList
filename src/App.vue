<template>
  <div class="wrapper-todo">
    <div class="title has-text-centered">My ToDo List!</div>
    <div class="field is-grouped">
      <p class="control is-expanded">
        <input class="input" type="text" placeholder="New task" />
      </p>
      <p class="control">
        <button class="button is-info">Add</button>
      </p>
    </div>
  </div>
</template>

<style>
@import "bulma/css/bulma.min.css";
.wrapper-todo {
  min-width: 400px;
  padding: 20px;
  margin: 0 auto;
}
</style>

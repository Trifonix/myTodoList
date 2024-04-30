<template>
  <div class="wrapper-todo">
    <div class="title has-text-centered">My ToDo List!</div>
    <div class="field is-grouped mb-5">
      <p class="control is-expanded">
        <input class="input" type="text" placeholder="New task" />
      </p>
      <p class="control">
        <button class="button is-info">Add</button>
      </p>
    </div>
    <div v-for="todo in todos" :key="todo.id" class="card mb-3">
      <div class="card-content">
        <div class="content">
          <div class="columns is-mobile is-vcentered">
            <div class="column">{{ todo.content }}</div>
            <div class="column is-5 has-text-right">
              <button class="button is-light">&check;</button>
              <button class="button is-danger ml-3">&cross;</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
/* import ref */
import { ref } from "vue";
/* todo data */
const todos = ref([
  {
    id: "id1",
    content: "do it later",
    done: false,
  },
  {
    id: "id2",
    content: "lets do it",
    done: false,
  },
]);
</script>


<style>
@import "bulma/css/bulma.min.css";
.wrapper-todo {
  min-width: 400px;
  padding: 20px;
  margin: 0 auto;
}
</style>

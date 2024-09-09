<template>
  <div class="home">

    <h1>This is My Nice Todo List version 2</h1>
    <TodoList/>
  
  </div>
</template>

<script>
// @ is an alias to /src

import TodoList from "@/views/TodoListView.vue";
export default {
  name: "HomeView",
  components: {
    TodoList
  },
};
</script>

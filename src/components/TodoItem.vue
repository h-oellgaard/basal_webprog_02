<template>
    <div>
      <input type="checkbox" :checked="item.completed" @change="toggleComplete">
      <span :class="{ completed: item.completed }">{{ item.text }}</span>
      <button @click="$emit('remove')">Delete</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      item: Object
    },
    methods: {
      toggleComplete() {
        this.$emit('update', { ...this.item, completed: !this.item.completed });
      }
    }
  };
  </script>
  
  <style scoped>
  .completed {
    text-decoration: line-through;
  }
  </style>
  
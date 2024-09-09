<template>
    <div>
      <input v-model="newItemText" @keyup.enter="addItem" placeholder="Add a new to-do">
      <button @click="addItem">Add</button>
      
      <div v-for="(item, index) in todoItems" :key="item.index">
        <TodoItem 
          :item="item" 
          @update="updateItem(index, $event)" 
          @remove="removeItem(index)">
        </TodoItem>

        </div>
    </div>
  </template>
  
  <script>
  import TodoItem from '@/components/TodoItem.vue';
  import TodoService from '@/services/todoService.js';
  export default {
    components: {
      TodoItem
    },
    data() {
      return {
        newItemText: '',
        todoItems: [/* har vi ikke brug for mere, da vi henter data fra Firestore */
            { text: "Learn Vue.js", completed: false },
            { text: "Build a to-do list app", completed: false } 
            { id: 1, text: "Learn Vue.js", completed: false },
            { id: 2, text: "Build a to-do list app", completed: false }*/
        ]
      };
    },
    async mounted() {
      try {
      this.todoItems = await TodoService.getTodoItems();
      console.log('mounted: ', this.todoItems); // Debugging: se om dataene bliver tilføjet til todoItems
      this.items = this.todoItems; 
    } catch (error) {
    console.error("Error fetching todo items: ", error);
  }
},
    methods: {
      // The .trim() method is a built-in JavaScript string method that removes whitespace from both ends of a string.
      addItem() {
        if (this.newItemText.trim()) {
        const newItem = {
          id: this.items.length + 1,
          text: this.newItemText,
          completed: false
        };
        this.items.push(newItem);
        this.newItemText = '';
        // Save the item to Firestore
        TodoService.addTodoItem(newItem)
          .then(docRef => {
            newItem.id = docRef.id; // Assign Firestore document ID to the item
            this.items.push(newItem);
            this.newItemText = '';
          })
          .catch(error => {
            console.error("Error adding document: ", error);
          });
      
      }
      },
      updateItem(index, updatedItem) {
        this.items[index] = updatedItem;
      },
      removeItem(index) {
        this.items.splice(index, 1);
      }
    }
  };
  </script>
  
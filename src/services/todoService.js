// src/services/todoService.js
import { db } from './firebaseConfig'; // Import the Firebase database

import { collection, addDoc, serverTimestamp, query, orderBy, getDocs } from 'firebase/firestore';  // Import Firestore functions

class TodoService {
  // Save a new TodoItem
  async addTodoItem(todoItem) {
    try {
      await addDoc(collection(db, 'todos'), {
        text: todoItem.text,
        completed: todoItem.completed || false,
        createdAt: serverTimestamp()  // Use the Firestore timestamp
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  // Get all TodoItems
  async getTodoItems() {
    const q = query(collection(db, 'todos'), orderBy('createdAt'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }
}

export default new TodoService();
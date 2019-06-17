import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      todos: [
        {name: "Buy shopping", priority: true},
        {name: "Clean bathroom", priority: false},
        {name: "Car's MOT", priority: true}
      ],
      newToDo: "",
      checked: ""
    },
    methods: {
      saveNewToDo: function(){
      if(this.checked === 'low'){
        this.todos.push({
          name: this.newToDo,
          priority: false
        });
      } else if(this.checked === 'high') {
        this.todos.push({
          name: this.newToDo,
          priority: true
        });
      } else {
        this.todos.push({
          name: this.newToDo,
          priority: false
        });
      }
        this.newToDo = "";
        this.checked = "";
      },
    },
});
});

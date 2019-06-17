import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      todos: ["Buy shopping", "Clean bathroom", "Car's MOT"],
      newToDo: ""
    },
    methods: {
      saveNewToDo: function(){
        this.todos.push(this.newToDo);
        this.newToDo = "";
      },
    },
  });


});

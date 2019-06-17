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

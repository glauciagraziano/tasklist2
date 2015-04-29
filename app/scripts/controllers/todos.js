'use strict';

app.controller('TodosCtrl', function ($scope, Todo) {
  $scope.todos = Todo.all
  
  $scope.todo = {name: '', importance: '', done: false, date: Firebase.ServerValue.TIMESTAMP};
  
  $scope.submitTodo = function() {
    Todo.create($scope.todo).then(function() {
      Todo.date = new Date();
      $scope.todo = {name: '', importance: '', done: false, date: Firebase.ServerValue.TIMESTAMP};
    });
  }
  $scope.deleteTodo = function(todo) {
    Todo.delete(todo);
  }
  $scope.archiveTodo = function(todo) {
    todo.done = true;
    Todo.update(todo);
    
    if(todo.done) {
      return true;
    } else {
      return false;
    }
  };
 $scope.expiredTodo = function(todo, date) {
   var expiredDate = date + 604800000;
   todo.expiredDate = true;
    if (todo.date > expiredDate) {
      return true;
    } else {
      return false;
    }
  };
});

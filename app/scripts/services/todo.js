'use strict';

app.factory('Todo', function($firebase, FIREBASE_URL) {
  var ref = new Firebase(FIREBASE_URL);
  /*var mySessionRef = ref.push();
  mySessionRef.onDisconnect().update({ endedAt: $firebase.ServerValue.TIMESTAMP });
  mySessionRef.update({ startedAt: $firebase.ServerValue.TIMESTAMP });*/
  var todos = $firebase(ref.child('todos')).$asArray();
  var archiveTodos = $firebase(ref.child('archiveTodos')).$asArray();
  
  var Todo = {
    all: todos, 
    create: function(todo) {
      return todos.$add(todo);
    },
    get: function(todoId) {
      return $firebase(ref.child('todos').child(todoId)).$asObject;
    },
    delete: function(todo) {
      return todos.$remove(todo);
    },
    update: function(todo) {
      return todos.$save(todo)
    },
    /*expired: function(todo) {
      return mySessionRef(todo)
    }*/
  };
  return Todo;
});
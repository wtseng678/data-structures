var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    for (var i = size; i > 0; i--) {
      someInstance[i] = someInstance[i - 1];
    }
    someInstance[0] = value;
    size++;
  };

  someInstance.dequeue = function() {
    var last = someInstance[size - 1];
    delete someInstance[size - 1];
    if (size > 0) {
      size--;      
    } 
    return last;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};

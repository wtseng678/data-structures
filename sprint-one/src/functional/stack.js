var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    for (var i = size; i > 0; i--) {
      someInstance[i] = someInstance[i - 1];
    }    
    someInstance[0] = value;
    size++;
  };

  someInstance.pop = function() {
    if (size === 0) {
      return undefined;
    } else {
      var top = someInstance[0];
      for (var i = 0; i < size - 1; i++) {
        someInstance[i] = someInstance[i + 1];
      }
      delete someInstance[size - 1];
      if (size > 0) {
        size--;
      }
      return top;
    }
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};

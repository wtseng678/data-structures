var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.someInstance = {};
  this.index = 0;
};

Queue.prototype.enqueue = function(value) {
	for (var i = this.index; i > 0; i--) {
		this[i] = this[i - 1];
	}
	this[0] = value;
	this.index++;	
}

Queue.prototype.dequeue = function() {
	var first = this[this.index - 1];
	delete this[this.index - 1];
	if (this.index > 0) {
		this.index--;
	}
	return first;
}

Queue.prototype.size = function() {
	return this.index;
}

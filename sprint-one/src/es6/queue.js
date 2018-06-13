class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.someInstance = {};
  	this.index = 0;
  }

  enqueue(value) {
	for (var i = this.index; i > 0; i--) {
		this[i] = this[i - 1];
	}
	this[0] = value;
	this.index++;  	
  }

  dequeue() {
	var first = this[this.index - 1];
	delete this[this.index - 1];
	if (this.index > 0) {
		this.index--;
	}
	return first;  	
  }

  size() {
  	return this.index;
  }
}
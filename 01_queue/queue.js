function Queue(){
  this.line = [];
  this.head = 0;
  this.tail = 0;
};
Queue.prototype.enqueue = function (item) {
  this.line[this.tail] = item;
  this.tail++;
};
Queue.prototype.dequeue = function () {

  var returny = this.line[this.head]
  this.head++;
  return returny;

};
Queue.prototype.size = function () {
  if (this.tail - this.head >= 0){
    return this.tail - this.head;
  }else{
    return 0
  }
};

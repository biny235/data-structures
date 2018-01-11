function Node(val, prev = null, next = null){
  this.value = val;
  this.next = next;
  this.previous = prev;
}

function LinkedList(){
  this.head;
  this.tail;
};

LinkedList.prototype.addToTail = function (val) {
  var newNode = new Node(val, this.tail);
  if (this.tail) this.tail.next = newNode;
  else this.head = newNode;
  this.tail = newNode;
};
LinkedList.prototype.addToHead = function (val) {
  var newNode = new Node(val, null, this.head);
  if (this.head) this.head.previous = newNode;
  else this.tail = newNode;
  this.head = newNode;

};
LinkedList.prototype.removeHead = function () {
  if(this.head){
    var returny = this.head.value;
    this.head = this.head.next;
    if(this.head === null){
      console.log("THIS IS THE END")
    }else{
      this.head.previous = null;
    }
    return returny;
  }else{
    this.head = null;
    this.tail = null;
  }
};
LinkedList.prototype.removeTail = function () {
  if(this.tail){
    var returny = this.tail.value;
    this.tail = this.tail.previous;
    if(this.tail === null){
      console.log("THIS IS THE END")
    }else{
      this.tail.next = null;
    }
    return returny;
  }else{
    this.head = null;
    this.tail = null
  }
};
LinkedList.prototype.search = function (val) {
//   if(typeof(val) === "function"){
//     if(val(this.head.value)){
//       return this.head.value;
//     }else{
//       current = this.head.next;
//     }while(current !== null){
//       if(val(current.value)){
//         return current.value;
//       }else{
//         current = current.next;
//       }
//     }
// }
    current = this.head;
    if(typeof(val) === "function"){
      while(current !== null){
        if(val(current.value)){
          return current.value;
        }else{
          current = current.next;
        }
      }
    }


    while(current !== null){
      if(current.value === val){
        return current.value;
      }else{
        current = current.next;
      }
    }

  return null
};

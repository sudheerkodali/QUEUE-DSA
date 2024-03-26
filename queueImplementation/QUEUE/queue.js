class Node {
  constructor(data) {
      this.data = data;
      this.next = null;
  }
}

class Queue {
  constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
  }

  add(data)  {
    if (this.head == null) {
        this.head = new Node(data);
        this.tail = this.head;
    }  
    else{
        let nn = new Node(data);
        this.tail.next = nn;
        this.tail = nn;
  }
}

remove() {
  if (this.head !== null) {
      this.head = this.head.next;
      if (this.head === null) {
          this.tail = null;
      }
       this.size--;
  }
}
  isEmpty() {
    return (this.size === 0);
 }

  peek() {
    if (this.head !== null) {
        return this.head.data;
  }
  
  }
        
}

module.export = Queue;




























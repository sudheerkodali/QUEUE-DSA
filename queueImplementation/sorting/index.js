const Queue = require('./queue/Queue');

q = new Queue();

q.add(5);
q.add(4);
q.add(6);


while (!q.isEmpty()) {
  console.log('Front element of the queue is ${q.peek()}');
  q.remove();

}


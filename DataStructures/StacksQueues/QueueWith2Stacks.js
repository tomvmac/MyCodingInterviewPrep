/*

1-2-3

Stack1  Stack2
3         1 
2         2
1         3

NewStack1
3
2
*/
class MyQueue {
    constructor(){
      this.stack1 = [];
      this.stack2 = [];
    }
  
    enQueue(num){
      // Adds to the end
      this.stack1.push(num);
    }
  
    deQueue(){
      // pop all items from stack1 to stack2
      this.stack2 = [];
      while (this.stack1.length >0){
        this.stack2.push(this.stack1.pop());
      }
      // pop stack2
      this.stack2.pop()
      // push all items to stack1 by popping stack two
      this.stack1 = [];
      while (this.stack2.length > 0){
        this.stack1.push(this.stack2.pop())
      }
    }
  
  
  }
  
  myQueue = new MyQueue();
  myQueue.enQueue(1)
  myQueue.enQueue(2)
  myQueue.enQueue(3)
  myQueue.deQueue()
  
  myQueue.enQueue(8)
  myQueue.enQueue(9)
  myQueue.enQueue(19)
  
  myQueue.deQueue()
  myQueue.deQueue()
  
  console.log(myQueue.stack1)
  
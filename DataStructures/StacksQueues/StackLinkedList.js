class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Stack {
    constructor(){
      this.top = null;
      this.bottom = null;
      this.length = 0;
    }
  
  
    peek(){
      return this.top;
    }
  
  
    push(value){
      let newNode = new Node(value);
      let tmpNode = new Node();
  
      if (this.length ==0){
        this.top = newNode;
        this.bottom = newNode;
      } else {
        tmpNode = this.top;
        this.top = newNode;
        this.top.next = tmpNode;
      }
      
      
      this.length++;
      
      return this;
    }
  
  
    pop(){
      if (!this.top){
        return null
      }
      
      if (this.top === this.bottom){
        this.bottom = null;
      }
  
      this.top = this.top.next;
      this.length--;
  
  
    }
  
    printStack(){
      let tmpNode = new Node();
      tmpNode = this.top;
      while (tmpNode!=null){
        console.log(tmpNode.value);
        tmpNode.next;
      }
    }
  
  }
  
  let myStack = new Stack();
  myStack.push('google');
  myStack.push('udemy');
  myStack.push('amazon');
  myStack.pop();
  myStack.pop();
  myStack.pop();
  console.log(myStack.peek());
  //myStack.printStack();
  console.log(myStack);
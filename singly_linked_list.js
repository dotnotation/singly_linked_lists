const { ConstructionRounded } = require("@mui/icons-material")

class Node{
    constructor(val){
        // a node is just a value
        this.val = val
        // it also has a reference to the next node
        // the value is null because at the beginning, there is nothing after the first node
        this.next = null
    }
}

// var first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")

class SinglyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val){
        // create a new node using the value
        // if there is no head, set the head and tail to be the new node
        // otherwise set the next property on the tail to be the new node
        // and set the tail property on the list to be the new node
        // increment the length by one
        const newNode = new Node(val)

        if (!this.head){ 
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++

        return this
    }
}
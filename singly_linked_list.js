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

    traverse(){
        let current = this.head
        while (current){
            current = current.next
        }
    }

    pop(){
        // remove a node from the end
        // remember that you can't just access the tail, you must start from the head
        // doesn't take in anything 
        // if there are no nodes in the list, return undefined
        // loop until you reach tail
        // set the next property of the 2nd to the last node to null
        // so need a temp and pre variable
        // set the tail to be the 2nd to last node
        // subtract one from the length 
        // return the value of the node that was removed
        // if there is only one item left, it will still leave a head even after the value is taken away
        if (!this.head){
            return undefined
        } 
        let current = this.head
        let newTail = current
        // newTail is always lagging behind current 
        // while current.next isn't null
        while (current.next){
           newTail = current
           current = current.next
        }
        this.tail = newTail
        this.tail.next = null
        // have to sever the connection by setting next to null
        this.length--
        return current
    }
}
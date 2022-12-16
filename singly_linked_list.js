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
        if (this.length === 0){
            this.head = null
            this.tail = null
        }
        return current
    }

    shift(){
        // if there are no nodes, return undefined
        // var = current head
        // take .next and make that the new head
        // length--
        // return the value of the node removed
        
        if (!this.head){
            return undefined
        }

        let oldHead = this.head
        this.head = oldHead.next
        this.length--
        if (this.length === 0){
            // need to account for when the head is null but the tail still has a node
            this.tail = null
        }
        return oldHead
    }

    unshift(val){
        // adding a new node to the beginning 
        // create a newNode using the value passed
        // if no head set the head and tail to the newNode
        // oldHead 
        // point the nextHead to the oldHead
        // move oldHead to be nextHead
        let newNode = new Node(val)

        if (!this.head){
            this.head = newNode
            this.tail = this.head
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }

    get(idx){
        // given an index, return that node
        // since there is no index, you have to manual count
        // loop until idx and return that node
        // count variable
        if (idx < 0 || idx >= this.length) return null

        let counter = 0
        let current = this.head

        while (counter !== idx){
            current = current.next
            counter++
        }
        return current
    }

    set(idx, val){
        // change the value of a node based on its position
        // takes in the index and a new value
        // use the get function to find the node
        // if node not found return false
        // if node is found, set the value to be the value passed to the function
        // return true

        let foundNode = this.get(idx)

        if (!foundNode) {
            return false
        } else {
            foundNode.val = val
        }
        return true
    }

    insert(idx, val){
        // add/ create a new node and the specified position
        // if this index is the same as the length, push a new node to the tail
        // if index is 0 unshift a new node to the start of the list
        // otherwise use get and access the node at the index - 1
        // set the next property on that node to be the new node
        // set the next property on the newNode to be the previous next
        // increment length
        // return true
        if (idx < 0 || idx > this.length) return false
        if (idx === this.length) return !!this.push(val)
        // using !! so that we can return either true or false as these methods return the list
        if (idx === 0) return !!this.unshift(val) 
        
        let newNode = new Node(val)
        let prevNode = this.get(idx - 1)
        let temp = prevNode.next
        prevNode.next = newNode
        newNode.next = temp
        this.length++
        return true
    }

    remove(idx){
        // remove a node from a specified index 
        // find node
        // take the prevNode and set its .next to the foundNode.next

        if (idx < 0 || idx >= this.length) return undefined 
        // we can't remove the last index
        if (idx === this.length - 1) return this.pop()
        if (idx === 0) return this.shift()

        let prevNode = this.get(idx - 1)
        let removeNode = prevNode.next 
        prevNode.next = removeNode.next
        this.length--
        return removeNode
    }

}
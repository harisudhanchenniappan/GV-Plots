class Node {
    constructor(data){
        this.data=data;
        this.next=null
    }
}

class LinkedList {
    constructor(){
        this.head=null;
    }

    toArray(){
        let nodes=[];
        while(list.head != null){
            nodes.push(list.head.data)
            list.head=list.head.next
        }

        return nodes
    }
}

let list=new LinkedList();

list.head=new Node(3)
list.head.next=new Node(4)
list.head.next.next=new Node(1)
list.head.next.next.next=new Node(5)
list.head.next.next.next.next=new Node(2)

console.log(list.toArray())
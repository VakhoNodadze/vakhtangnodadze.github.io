function LinkedList(){
    let head = null;
    let length = 0;
    let Node = function(value){
        this.value = value
        this.next = null;
        
    }

    this.length = () => length;
    this.head = () => head;
    // add new Node
    this.add = (value) => {
        let node = new Node(value);
        if( head === null){
            head = node;
        }
        else{
            let current = head;

            while(current.next){
                current = current.next;

            }
            current.next = node;

        }

        length++;
    }

    //Node remove
    this.remove = (index) => {
        let current = head;
        let prevNode;

        if( current.value === value){
            head = current.next
        }
        else{
            while( current.value !== value){
                prevNode = current;
                current = current.next

            }
            parentNode.next = current.next;

        }
        lengt--;

    }

    this.isEmpty = () => {
        return length === 0;
    }

    this.indexOf = (value) => {
        let current = head;
        let index = -1;
        while(current){
            index++;
            if(current.value === value){
                return index;
            }
            current = current.next;
        }
        return -1;
    }  
    
    this.valueaT = (index) => {
        let current = head;
        let counter = 0;
        while( current != null){
            counter++;
            if(counter === index){
                return current;
            }
            current = current.next;
        }
        return -1;
    }

    this.insertAt = (index, value) => {
        let prevNum = this.valueaT(index - 1);
        let curNum = this.valueaT(index);
        let number = new Node(value);
        number.value = value;
        number.next = curNum;
        prevNum.next = number;
    }
}
let list = new LinkedList()
list.add(1)
list.add(12)
list.add(18)
// list.add(20)
// console.log(list.valueaT(1));
console.log(list.insertAt(2,2));
// console.log(list.length())
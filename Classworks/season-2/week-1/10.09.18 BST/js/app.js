class BST {
    constructor(value){
        this.root = null;
    }

    add(value){
        let newNode = { value, left: null, right: null};

        if(!this.root){
            this.root = newNode;
        }

        let currentNode = this.root;

        while(currentNode){
            if(value > currentNode.value){
                if(!currentNode.right){
                    currentNode.right = newNode;
                }
                currentNode = currentNode.right;
            }else if(value < currentNode.value){
                if(!currentNode.left){
                    currentNode.left = newNode;
                }
                currentNode = currentNode.left;
            }else{break;}
        }
    }
    log(){
        console.log(this.root);
    }
}

let bst = new BST();
bst.add(5);
bst.add(2);
bst.add(20);
bst.add(22);
bst.add(15);
bst.add(0);
bst.add(3);
bst.log();
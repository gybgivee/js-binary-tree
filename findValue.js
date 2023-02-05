/*
Binary tree 
1.Exactly 1 root
2.Exactly 1 path (to any node)
Each node can has children 0-2 

*/
class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;

    }
}

const depthFirstValue = (root)=>{
    const stack = [root];
    while(stack.length > 0){
        const current = stack.pop();
        console.log(current.val);

        if(current.left) stack.push(current.left);
        if(current.right) stack.push(current.right);
    }
}
const depthFirstValueRecursion = (root)=>{
   if(root === null) return [];
   const leftValue = depthFirstValueRecursion(root.left);
   const rightValue = depthFirstValueRecursion(root.right);

   return [root.val,...leftValue, ...rightValue]
}
const breadthFirstValue = (root)=>{
    const queue = [root];
    while(queue.length > 0){
        const current = queue.shift();
        console.log(current.val);

        if(current.left) queue.push(current.left);
        if(current.right) queue.push(current.right);
    }
}
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

depthFirstValue(a);
console.log("--breadthFirstValue--");
breadthFirstValue(a);

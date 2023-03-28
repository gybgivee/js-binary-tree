/*
Write a function, treeMinValue, that takes in the root of a binary tree that contains number values. The function should return the minimum value within the tree.

You may assume that the input tree is non-empty.

*/

class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;

    }
}
const treeMinValueRecursion = (root)=>{
    if(root === null) return null;
  
    const leftValue = treeMinValueRecursion(root.left);
    const rightValue = treeMinValueRecursion(root.right);
    return Math.min(leftValue, rightValue,root.val);
}
const treeMinValueBreadthFirst = (root)=>{
    const queue = [root];
    let smallest = Infinity;

    while(queue.length > 0){
        const current = queue.pop();
        if(current.val < smallest) smallest = current.val;

        if(current.left) queue.push(current.left);
        if(current.right) queue.push(current.right);

    }
    return smallest;
}
const treeMinValueDepthFirstSearch = (root) => {
  const queue = [root];
  let smallest = Infinity;
    
  while (queue.length) {
    const current = queue.shift();
    if (current.val < smallest) smallest = current.val;

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return smallest;
};

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

console.log(treeMinValueRecursion(a)); // -> -2
console.log(treeMinValueBreadthFirst(a)); // -> -2

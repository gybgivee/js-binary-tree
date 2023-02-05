/*
Write a function, treeSum, that takes in the root of a binary tree that contains number values. 
The function should return the total sum of all values in the tree.
 */
class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;

    }
}
//Time:O(n) , Space:O(n) 
const treeSumRecursion = (root) => {
    if (root === null) return 0;
    return root.val + treeSumRecursion(root.left) + treeSumRecursion(root.right);
}
//Time:O(n) , Space:O(n) 
const treeSumBreadthFirst = (root) => {
    if (root === null) return 0;
    const queue = [root];
    let total = root.val;

    while (queue.length > 0) {
        const current = queue.shift();
        if(current.left){
            queue.push(current.left);
            total += current.left.val
        }
        if(current.right){
            queue.push(current.right);
            total += current.right.val;
        }
    }
    return total;
}




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

console.log(treeSumRecursion(a)); // -> 21
console.log(treeSumBreadthFirst(a)); // -> 21
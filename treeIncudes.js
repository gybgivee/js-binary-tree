/*
Write a function, treeIncludes, that takes in the root of a binary tree and a target value. 
The function should return a boolean indicating whether or not the value is contained in the tree.
*/
class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;

    }
}
const treeIncludesBreadthFirst = (root,target)=>{

    if(root === null) return false;

    const queue = [root];
    while(queue.length){
        const current = queue.shift();
        if(current.val === target) return true;

        if(current.left) queue.push(current.left);
        if(current.right) queue.push(current.right);
    }
    return false;

}
const treeIncludeDeptFirst = (root,target)=>{
    if(root === null) return false;
    if(root.val === target) return true;
    return treeIncludeDeptFirst(root.left,target) || treeIncludeDeptFirst(root.right,target);
}
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

console.log(treeIncludeDeptFirst(a, "e")); // -> true
console.log(treeIncludesBreadthFirst(a, "e")); // -> true
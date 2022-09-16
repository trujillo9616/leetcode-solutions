// 429. N-ary Tree Level Order Traversal
// Medium 

// Given an n-ary tree, return the level order traversal of its nodes' values.

// Nary-Tree input serialization is represented in their level order traversal, 
// each group of children is separated by the null value 

interface Node {
  val: number;
  children: Node[];
};

var levelOrder = function (root: Node | null): number[][] {
  const ans: number[][] = [];
  const queue: any[] = [root];

  while (queue.length) {
    const n: number = queue.length;
    const currentLevel: number[] = [];

    for (let i = 0; i < n; i++) {
      const node: Node = queue.shift();

      if (!node) continue;
      currentLevel.push(node.val);
      for (const child of node.children) {
        queue.push(child);
      }
    }
    if (currentLevel.length) ans.push(currentLevel);
  }

  return ans;
};

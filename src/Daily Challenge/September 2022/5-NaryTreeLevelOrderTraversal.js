// 429. N-ary Tree Level Order Traversal
// Medium 

// Given an n-ary tree, return the level order traversal of its nodes' values.

// Nary-Tree input serialization is represented in their level order traversal, 
// each group of children is separated by the null value 

var levelOrder = function (root) {
  if (!root) return [];

  const queue = [root];
  const ans = [];

  // BFS Function
  while (queue.length) {
    const n = queue.length;
    const currentLevel = [];

    for (let i = 0; i < n; i++) {
      const node = queue.shift();
      if (node) continue;
      currentLevel.push(node.val);

      for (const child of node.children) {
        queue.push(child);
      }
    }
    if (currentLevel.length) ans.push(currentLevel);
  }

  return ans;
};

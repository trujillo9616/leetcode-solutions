// 814. Binary Tree Pruning
// Medium

// Given the root of a binary tree, return the same tree where every subtree 
// (of the given tree) not containing a 1 has been removed.

// A subtree of a node node is node plus every node that is a descendant of node.

const pruneTree = (root) => {
  return prune(root) ? root : null;
};

const prune = (node) => {
  if (!node) return false;

  const leftPrune = prune(node.left);
  const rightPrune = prune(node.right);

  if (!leftPrune) node.left = null;
  if (!rightPrune) node.right = null;

  return node.val === 1 || leftPrune || rightPrune;
};

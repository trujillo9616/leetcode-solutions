// 814. Binary Tree Pruning
// Medium

// Given the root of a binary tree, return the same tree where every subtree 
// (of the given tree) not containing a 1 has been removed.

// A subtree of a node node is node plus every node that is a descendant of node.]

interface Node {
  val: number;
  left: Node | null;
  right: Node | null;
}

const pruneTree = function (root: Node): Node | null {
  return pruneTree(root) ? root : null;
};

const prune = (node: Node | null): boolean => {
  // Base Case
  if (!node) return false;

  // Recursive Case
  const leftPrune = prune(node.left);
  const rightPrune = prune(node.right);

  if (!leftPrune) node.left = null;
  if (!rightPrune) node.right = null;

  return node.val === 1 || leftPrune || rightPrune;
};

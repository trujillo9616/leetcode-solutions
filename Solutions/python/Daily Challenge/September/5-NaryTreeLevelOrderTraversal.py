# 429. N-ary Tree Level Order Traversal
# Medium

# Given an n-ary tree, return the level order traversal of its nodes' values.

# Nary-Tree input serialization is represented in their level order traversal,
# each group of children is separated by the null value
from collections import deque
from typing import List


class Node:
    def __init__(self, val=None, children=None):
        self.val = val
        self.children = children


class Solution:
    def levelOrder(self, root: 'Node') -> List[List[int]]:
        ans = []
        queue = deque(root)

        while (len(queue) > 0):
            n = len(queue)
            currentLevel = []
            for i in range(n):
                node = queue.popleft()
                if node:
                    currentLevel.append(node.val)
                    queue.extend(node.children)
            ans.append(currentLevel)
        return ans

import { TreeNode } from '../data-structures/BinaryTree'
import { bfs, dfs, areCousins } from '../algorithms/binaryTree'

describe("Binary Tree", () => {
  const tree1 = new TreeNode(1)
  tree1.left = new TreeNode(2)
  tree1.right = new TreeNode(3)
  tree1.right.right = new TreeNode(5)
  tree1.right.left = new TreeNode(8)
  tree1.right.left.left = new TreeNode(9)
  tree1.left.left = new TreeNode(7)
  tree1.left.right = new TreeNode(4)
  tree1.left.left.left = new TreeNode(6)
  /**
   *            1
   *         2     3
   *       7  4    8  5
   *     6        9
   * 
   */
  
  describe('Depth First Search', () => {
    test("returns truthiness", () => {
      expect(dfs(tree1, 5)).toBeTruthy()
      expect(dfs(tree1, 0)).toBeFalsy()
      expect(dfs(tree1, 1)).toBeTruthy()
      expect(dfs(tree1, 7)).toBeTruthy()
      expect(dfs(tree1, 8)).toBeTruthy()
    });
  });
  
  describe('Breadth First Search', () => {
    test("returns truthiness", () => {
      expect(bfs(tree1, 5)).toBeTruthy()
      expect(bfs(tree1, 0)).toBeFalsy()
      expect(bfs(tree1, 1)).toBeTruthy()
      expect(bfs(tree1, 7)).toBeTruthy()
      expect(bfs(tree1, 8)).toBeTruthy()
    });
  })
  
  describe('Cousins Leetcode #993', () => {
    test("returns truthiness", () => {
      expect(areCousins(tree1, 8, 4)).toBeTruthy()
      expect(areCousins(tree1, 6, 9)).toBeTruthy()
      expect(areCousins(tree1, 8, 7)).toBeTruthy()
      expect(areCousins(tree1, 7, 4)).toBeFalsy()
      expect(areCousins(tree1, 6, 5)).toBeFalsy()
      expect(areCousins(tree1, 2, 4)).toBeFalsy()
    });
  })
})

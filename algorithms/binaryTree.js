export function bfs (tree, n) {
  const queue = [tree] // FIFO
  while(queue.length > 0) {
    const node = queue.pop()
    
    if (node.val === n) {
      return true
    }
    if (node.left) {
      queue.unshift(node.left)
    }
    if (node.right) {
      queue.unshift(node.right)
    }
  }
  return false
}

export function dfs (tree, n) {
  const stack = [tree] // FILO
  while(stack.length > 0) {
    const node = stack.pop()
    
    if (node.val === n) {
      return true
    }
    if (node.left) {
      stack.push(node.left)
    }
    if (node.right) {
      stack.push(node.right)
    }
  }
  return false
}

export function areCousins(tree, n1, n2) {
  tree.level = 1
  const queue = [tree]
  const nodes = {}
  
  while(queue.length > 0) {
    const node = queue.pop()
    
    if (node.val === n1) {
      nodes[n1] = node
    }
    if (node.val === n2) {
      nodes[n2] = node
    }
    
    if (nodes[n1] && nodes[n2]) {
      return nodes[n1].level === nodes[n2].level && nodes[n1].parent !== nodes[n2].parent
    }
    
    if (node.left) {
      queue.unshift(node.left)
      node.left.level = node.level + 1
      node.left.parent = node
    }
    if (node.right) {
      queue.unshift(node.right)
      node.right.level = node.level + 1
      node.right.parent = node
    }
  }
}

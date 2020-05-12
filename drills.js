const BinarySearchTree = require('./bst');

function main() {
  const BST = new BinarySearchTree();

  BST.insert(3);
  BST.insert(1);
  BST.insert(4);
  BST.insert(6);
  BST.insert(9);
  BST.insert(2);
  BST.insert(5);
  BST.insert(7);

  function findHeight(t, height) {
    if (t.left && t.right) {
      let leftHeight = findHeight(t.left, height + 1);
      let rightHeight = findHeight(t.right, height + 1);
      if (leftHeight > rightHeight) {
        return leftHeight;
      } else {
        return rightHeight;
      }
    } else if (t.left) {
      let leftHeight = findHeight(t.left, height + 1);
      return leftHeight;
    } else if (t.right) {
      let rightHeight = findHeight(t.right, height + 1);
      return rightHeight;
    } else {
      return height;
    }
  }

  console.log(findHeight(BST, 0)); //start at 1 for 5, 0 for 4
}

main();

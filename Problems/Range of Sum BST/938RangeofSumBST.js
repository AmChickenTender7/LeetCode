/* Create a class to define the Tree Node (BST) that they reference in the question */
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

/* Create a function that requires the root, minimun, and maximum that are given by the question */
function rangeSumBST(root, low, high) {
    /* If the current node is null then base case has been reached. Return zero */
    if (!root) {
        return 0;
    }

    /* Create sum variable */
    let sum = 0;

    /* If the current node is within the range, add it too the sum */
    if (root.val >= low && root.val <= high) {
        sum += root.val;
    }

    /* Traverse the left and right subtrees with recursion */
    sum += rangeSumBST(root.left, low, high);
    sum += rangeSumBST(root.right, low, high);

    /* Return the total sum */
    return sum;
}

/* Test */
const root = new TreeNode(10,
    new TreeNode(5,
        new TreeNode(3),
        new TreeNode(7)
    ),
    new TreeNode(15,
        null,
        new TreeNode(18)
    )
);

const low = 7;
const high = 15;

const result = rangeSumBST(root, low, high);
console.log(result);
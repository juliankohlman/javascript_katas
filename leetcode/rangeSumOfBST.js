/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
const rangeSumBST = function(root, L, R) {
	if (root) {
		rangeSumBST(root.left, L, R);
		console.log(root.val);
		if (root.val >= L && root.val <= R) console.log('in range:', root.val);
		rangeSumBST(root.right, L, R);
	}
};

/*
let sum;

let rangeSumBST = function(root, L, R) {
	sum = 0;
	dfs(root, L, R);
	return sum;
};

let dfs = function(root, L, R) {
	if (root) {
		if (root.val >= L && root.val <= R) {
			sum += root.val;
		}
		if (root.val >= L) {
			dfs(root.left, L, R);
		}
		if (root.val <= R) {
			dfs(root.right, L, R);
		}
	}
};

*/

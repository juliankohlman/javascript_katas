/* 
Write a function to merge our arrays of orders into one sorted array.

For example:
const myArray = [3, 4, 6, 10, 11, 15];
const alicesArray = [1, 5, 8, 12, 14, 19];

console.log(mergeArrays(myArray, alicesArray));

logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]
*/

//* Merging sorted lists (array of linked list)
/* Linked list
start with 2 pointers (1 for each sorted linked list)

create a "dummy head node" called curr list gets built off this node(dummy eliminates null value issue)

compare l1 and l2 pointers (curr always points to the tail of the list)
  * (1) point dummy head's next pointer (curr.next) at whichever node is smallest (this will always be the tail of the list being built)
  * (2) increment lesser list's next pointer
  * When a list gets exhausted
    * remaining list is already sorted (greater than or equal to last item of merged list)
    * point curr to remaining lists pointer
    * 
    * M = length of list 1
    * N = length of list 2
    * Time = O(m + n)
    * Space = O(1)
  */
function mergeArrays(array1, array2) {}

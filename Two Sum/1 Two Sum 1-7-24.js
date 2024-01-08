/* Two Sum */
/* When given an array of integers and a target integer, return the two numbers */
/* indices that add to result in the target integer                             */

/* Nums = Array of integers  */
/* Target = Target integer for the sum */
function twoSum(nums, target) {
    
    /* Use a map (key:value pair array) in this implimentation of the solution in order to find target */
    /* Using a map allows us to store the array in which the value of the keys are the indices we are  */
    /* Looking for */
    const numMap = new Map();

    /* Now, we look through the array of numbers to find two the two numbers that add to be the sum.
       while we look, we have to acknowledge the number of the iteration that we are on as well as 
       the number that complements the number of the iteration. We do this by implementing a 
       map. This map will house the array as the value of the array and it's position. We will iterate
       over the array as well as make a map until we have found a value that whose complement is in the
       map that we create. */
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        
        if (numMap.has(complement)) {
            /* If the map that we have created includes the complement number then we are done, we have both values
                 */
            return [numMap.get(complement), i];
        }

        /* If the complement hasn't been found, add the number and it's index to the map and iterate again */
        numMap.set(nums[i], i);
    }

    /* If there is no two numbers that can return the sum simply return an empty array */
    return [];
}

/* Test */
const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result); /* The result output will be a small array with the two indices of the numbers whose sum equate to the target */
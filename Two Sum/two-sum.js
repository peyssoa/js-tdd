/**
 * Given an array of integers nums and an integer target, return indices of the
 * two numbers such that they add up to target.
 *
 * You may assume that each input would have exactly one solution, and you may
 * not use the same element twice.
 *
 * You can return the answer in any order.
 */

[2, 7, 11, 15];

const twoSum = (nums, target) => {
   if (!nums || nums.length <= 1 || !Array.isArray(nums))
      throw Error('Invalid array value passed in');

   for (let start = 0; start < nums.length; start++) {
      for (let index = 0; index < nums.length; index++) {
         if (target - nums[index] === nums[start]) return [start, index];
      }
   }

   throw Error('No Solution');
};

module.exports = twoSum;

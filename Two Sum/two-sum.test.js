const twoSum = require('./two-sum');

describe('Testing two sum', () => {
   it('should throw exception if array is invalid', () => {
      expect(() => twoSum()).toThrow('Invalid array value passed in');
   });

   it('should throw exception if array is empty', () => {
      expect(() => twoSum([], 4)).toThrow('Invalid array value passed in');
   });

   it('should throw if no solution', () => {
      expect(() => twoSum([2, 5], 20)).toThrow('No Solution');
   });

   it('should equal [0,1]', () => {
      expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
   });

   it('should equal [0,3]', () => {
      expect(twoSum([2, 5, 11, 15], 17)).toEqual([0, 3]);
   });

   it('should throw invalid array => ([2], 4)', () => {
      expect(() => twoSum([2], 4)).toThrow('Invalid array value passed in');
   });
});

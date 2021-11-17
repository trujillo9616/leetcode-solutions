// Naive-Brute Force Approach -----> Time Complexity = O(n^2) Quadratic
var twoSum1 = function(nums, target) {
  // Input validation
  if (nums.length < 2) {
        return 'Not enough elements.'
    }
  // Double Foor Loop
  for (i = 0; i < nums.length-1; i++) {
    for (j = 1; j < nums.length-1; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
}


// Optimized Solution using Hash Map -----> Time Complexity = O(n) Linear
var twoSum = function(nums, target) {
  //Input Validation
  if (nums.length < 2) {
    return 'Not enough elements.'
  }
  let map = new Map();
  // Single For Loop
  for (i = 0; i < nums.length; i++) {
    let num1 = nums[i];
    let num2 = target - num1;
    if (map.has(num2)) {
      return[i, map.get(num2)];
    }
    map.set(num1, i);
  }
}
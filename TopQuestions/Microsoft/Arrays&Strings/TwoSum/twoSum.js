// Time Complexity -> O(n^2)
// Space Complexity -> O(1)
const twoSumBF = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }

  return [-1, -1];
};

// Time Complexity -> O(n)
// Space Complexity -> O(n)
const twoSumOP = (nums, target) => {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (diff in map) return [map[diff], i];
    map[nums[i]] = i;
  }

  return [-1, -1];
};

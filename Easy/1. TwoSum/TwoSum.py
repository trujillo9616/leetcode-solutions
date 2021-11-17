# Naive-Brute Force Approach -----> Time Complexity = O(n^2) Quadratic
def twoSum1(nums, target):
  # Input validation
  if len(nums) < 2:
        return 'Not enough elements.'
  # Double Foor Loop
  for i in range(0, len(nums-1)):
    for j in range(1, len(nums)-1):
      if (nums[i] + nums[j] == target): 
        return [i, j]


# Optimized Solution using Hash Map -----> Time Complexity = O(n) Linear
def twoSum(nums, target):
  #Input Validation
  if len(nums)< 2: 
    return 'Not enough elements.'
  map = dict()
  # Single For Loop
  for i in range(0, len(nums)):
    num1 = nums[i];
    num2 = target - num1;
    if num2 in map: 
      return[i, map.get(num2)];
    map.setdefault(num1, i)
var twoSum = function (nums, target) {
  let result = [];

  for (let first = 0; first < nums.length; first++) {
    for (let second = first + 1; second < nums.length; second++) {
      if (nums[first] + nums[second] == target) {
        result.push(first);
        result.push(second);
      }
    }
  }

  return result;
};

console.log(twoSum([2, 7, 11, 15], 13));

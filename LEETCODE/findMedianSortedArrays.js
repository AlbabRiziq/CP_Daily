/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const arr = [...nums1, ...nums2].sort((a, b) => a - b);

  const med = (1 / 2) * (arr.length + 1);

  const res =
    arr[Math.floor(med) - 1] +
    0.5 * (arr[med.toFixed() - 1] - arr[Math.floor(med) - 1]);
  return res.toPrecision();
};

console.log(findMedianSortedArrays([2], [3, 6, 6]));

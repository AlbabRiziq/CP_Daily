/**
 * @param {string} s
 * @return {number}
 */

const lengthOfLongestSubstring = function (s) {
  let longest = 0;
  let current = 0;
  let start = 0;
  let map = {};

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] >= start) {
      start = map[s[i]] + 1;
      current = i - start;
    }
    map[s[i]] = i;
    current++;
    longest = Math.max(longest, current);
  }

  return longest;
};

console.log(lengthOfLongestSubstring("pwwkew"));

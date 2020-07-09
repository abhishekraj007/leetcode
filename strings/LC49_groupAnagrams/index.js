// https://leetcode.com/problems/group-anagrams/

/*
Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note:

All inputs will be in lowercase.
The order of your output does not matter.
*/


/*
SOLUTION STEPS:
1. loop through array and creat a hashmap of anagram
2. to check anagram we can sort and check if key is present we can push to it in an arrya
3. returtn values of map in array form
*/


function groupAnagrams(strs) {
    const map = {};

    // O(n)
    for(let i=0; i<strs.length; i++) {
        //O(mlogm)
        let key = strs[i].split('').sort().join('');
        if(!map[key]) {
            map[key] = []
        }
        map[key].push(strs[i]);
    }

    console.log(map)

    return Object.values(map);
}

// Time complexity: O(n*mlogm)
// Space complexity: O(n*m)

module.exports = groupAnagrams;

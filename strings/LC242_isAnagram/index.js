// https://leetcode.com/problems/valid-anagram/

/*

Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false

*/


function isAnagram(s, t) {
    // O(nlogn)
    // return s.split('').sort().join('') === t.split('').sort().join('');

    // Improvement
    // O(n)

    // Create a map of char count from s and check if it matches with t through loop
    const charMap = {};

    // First if both are of unequal length return false
    if(s.length !== t.length) return false;

    // Create a char count map of all char from s
    for(let i = 0; i<s.length; i++) {
        sChar = s[i];
        charMap[sChar] ? charMap[sChar] += 1 : charMap[sChar] = 1;
    }

    // Check if char from t are present in charMap and in equal quantity
    for(let i =0; i<t.length; i++) {
        tChar = t[i]
        if(!charMap[tChar]) return false
        else {
            charMap[tChar] -= 1;
        }
    }
    // if it passes all test it means it is anagram
    return true
}

module.exports = isAnagram;

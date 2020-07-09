// https://leetcode.com/problems/longest-palindromic-substring/
/*
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.

Example 2:

Input: "cbbd"
Output: "bb"

*/

function longestPalindrome(s) {

    if(s === null || s.length === 0) return "";

    let maxLength = 0;
    let start =0;

    function expandAroundCenter(left, right) {
        while(left>=0 && right < s.length && s[left] === s[right]) {
            let currentLen = right-left+1;
            if(maxLength < currentLen) {
                maxLength = currentLen;
                start = left;
            }
            left--;
            right++
        }
    }

    for(let i=0; i<s.length; i++) {
        expandAroundCenter(i, i);
        expandAroundCenter(i, i+1);
    }

    return s.slice(start, start + maxLength);

    
}

module.exports = longestPalindrome;

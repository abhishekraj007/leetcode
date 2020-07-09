// https://leetcode.com/problems/valid-palindrome/

function isPalindrome(s) {

    // Naive
    const withoutSpecialChars = s.replace(/[^\w]*_*/gi, "").toLowerCase();
    // return withoutSpecialChars === withoutSpecialChars.split('').reverse().join('');

    // Using pointer check if left half is mirror of right half
    // Time complexity: O(n/2)
    // Space complexity: O(1)
    let left = 0, right = withoutSpecialChars.length -1;
    for(let i=0; i< withoutSpecialChars.length/2; i++) {
        if(withoutSpecialChars[left] !== withoutSpecialChars[right])
            return false;
    }

    return true
}

module.exports = isPalindrome;

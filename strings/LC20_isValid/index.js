// https://leetcode.com/problems/valid-parentheses/

function isValid(s) {

    const stack = [];
    const charMap = {"(": ")", "{": "}", "[": "]"};

    /*
    Steps:
    1. if current char is left parenthesis, push to the stack
    2. if stack is not empty and top of stack is pair of current char, pop from stack
    3. If stack is not empty and top of stack is not pair of current char, push to the stack.
    4. After for loop if stack is not empty, parenthesis is not valid.
    */

    if(s.length%2 !== 0) return false

    for(char of s) {
        if(charMap[char]) {
            stack.push(char);
        }else {
            const topChar = stack[stack.length -1];
            if(char === charMap[topChar]) stack.pop();
            else stack.push(char)
        }
        
    }

    return stack.length === 0

}


/*



(
'(3)34[#34]{}'
([)]

(){}
*/

module.exports = isValid;

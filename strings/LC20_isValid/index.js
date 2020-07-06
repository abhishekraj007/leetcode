// https://leetcode.com/problems/valid-parentheses/

function isValid(s) {

    const stack = [];
    const charMap = {"(": ")", "{": "}", "[": "]"};
    const size = s.length;

    for(let i=0; i<size; i++) {
        const currentChar = s[i];

        if(charMap[currentChar]) {
            stack.push(currentChar);
        }else {

            const topChar = stack[stack.length -1];
            if(currentChar === charMap[topChar]) {
                stack.pop();
            }else {
                stack.push(currentChar)
            }
        }
    }

    return stack.length === 0

}


/*



(
'(3)34[#34]{}'
([)]
*/

module.exports = isValid;

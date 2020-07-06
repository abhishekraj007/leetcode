const lengthOfLongestSubstring = require('./index');

test("'abcabcbb' returns 3", () => {
	expect(lengthOfLongestSubstring('abcabcbb')).toEqual(3);
});

test("'pwwkew' returns 3", () => {
	expect(lengthOfLongestSubstring('pwwkew')).toEqual(3);
});

test("'dvdf' returns 3", () => {
	expect(lengthOfLongestSubstring('dvdf')).toEqual(3);
});

test("'qrsvbspk' returns 1", () => {
	expect(lengthOfLongestSubstring('qrsvbspk')).toEqual(5);
});

test("'abba' returns 2", () => {
	expect(lengthOfLongestSubstring('abba')).toEqual(2);
});

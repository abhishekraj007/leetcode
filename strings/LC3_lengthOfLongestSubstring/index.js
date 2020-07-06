function lengthOfLongestSubstring(s) {

  const map = new Map();
  const set = new Set();
  let longest = 0;
  let a_pointer = 0;
  let b_pointer = 0;

  // for(let b_pointer=0; b_pointer < s.length; b_pointer++) {
  //   currentChar = s[b_pointer];

  //   if(map.has(currentChar) && map.get(currentChar) >= a_pointer) {
  //     a_pointer = map.get(currentChar) + 1;
  //   }
  //   map.set(currentChar, b_pointer);
  //   longest = Math.max(longest, b_pointer-a_pointer+1);
  // }

  while(b_pointer < s.length) {
    if(set.has(s.charAt(b_pointer))) {
      set.delete(s.charAt(a_pointer));
      a_pointer++;
    }else {
      set.add(s.charAt(b_pointer));
      b_pointer++;
    }
    longest = Math.max(set.size, longest);
  }
  console.log(set)

  return longest;

}

module.exports = lengthOfLongestSubstring;

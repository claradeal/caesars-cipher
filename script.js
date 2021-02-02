function cipher(codeStr, shift) {
  if (!codeStr || typeof codeStr !== "string") {
    codeStr = "";
  }
  if (typeof shift !== "number") {
    shift = 13;
  }
  let newStr = "";
  // for each character in the string that is a letter, shift its unicode value, then convert to new character
  for (let i = 0; i < codeStr.length; i++) {
    if (codeStr.charCodeAt(i) < 65 || codeStr.charCodeAt(i) > 91) {
      newStr = newStr.concat(codeStr.charAt(i));
    } else if (codeStr.charCodeAt(i) > 64 && codeStr.charCodeAt(i) < 78) {
      let newIndex = codeStr.charCodeAt(i) + shift;
      let res = String.fromCharCode(newIndex);
      newStr = newStr.concat(res);
    } else if (codeStr.charCodeAt(i) > 77 && codeStr.charCodeAt(i) < 92) {
      let newIndex = codeStr.charCodeAt(i) - shift;
      let res = String.fromCharCode(newIndex);
      newStr = newStr.concat(res);
    }
  }
  return newStr;
}

// Code below is for running without UI
let output = cipher("SERR PBQR PNZC");
console.log("The answer is " + output);
console.log(
  "The next one is " + cipher("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT")
);
const reverseString = function(text) {
let reverseText = "";
for(let i = text.length-1; i >= 0; i--){
    reverseText += text.charAt(i);
}
return reverseText;
}

module.exports = reverseString

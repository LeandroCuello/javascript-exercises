const repeatString = function(text, nOfTimes) {
    let finalText = "";
if(nOfTimes <0){
    return "ERROR";
}
for(let i=0;i<nOfTimes;i++){
    finalText +=text;
}
return finalText;
}

module.exports = repeatString

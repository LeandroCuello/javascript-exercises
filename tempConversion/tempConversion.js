const ftoc = function(faTmp) {
let cTmp = (faTmp - 32)* (5/9);
return Math.round(cTmp * 10)/10;
}

const ctof = function(cTmp) {
let faTmp = cTmp * (9/5) + 32;
return Math.round(faTmp * 10)/10;
}

module.exports = {
  ftoc,
  ctof
}

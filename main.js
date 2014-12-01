
module.exports = function(prf,password,salts){
  var i,
      ret = [],
      prev = password;
  
  for(i = 0;i < salts.length;i++){
    prev = prf(prev,salts[i]);
    ret.push(prev);
  }
  
  return ret;
};


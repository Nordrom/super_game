function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function non_zero_random(min, max) {
  var num = Math.floor(Math.random() * (max - min + 1)) + min 
  if (num != 0)
    return num;
  return non_zero_random(min, max);  
  //return Math.floor(Math.random() * (max - min + 1)) + min;
}
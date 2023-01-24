

module.exports = function reverse (n) {
  let a = Math.abs(n).toString();
  let i = a.length - 1;
  let result = '';

  while ( i >= 0) {
    result = result + a[i];
    i-- ;
  }
  return (result);
}




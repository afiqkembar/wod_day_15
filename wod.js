function input(s){
  var sos="SOS";
  var count=0;
  var k=s.length;
  for(i=0 ; i<k ; i++){
    if(s.charAt(i) != sos.charAt(i%3))
    count++;
  }
  return count;
}

document.write(input("SOSSPSSQSSORSOSSOT"));

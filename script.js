function triangleTracker(){
  var sideQ = parseInt(document.getElementById("sideQ").value);
  var sideR = parseInt(document.getElementsById("sideR").value);
  var sideS = parseInt(document.getElementById("sideS").value);
  var side = [sideQ,sideR,sideS];

  if(side[0]+side[1]<=side[2]||side[0]+side[2]<=side[1]||side[2+side[1]<=side[0]){
    alert("can not form a triangle from this sides ");
      }
     else if(side[0]===side[1]&&side[1]===side[2]&&side[2]===side[0]){
      alert("This is an equilateral");
    }
    else if(side[0]+side[1]>side[2]||side[1]+side[2]>side[0]||side[0]+side[2]>side[1]){
      alert("This is a scalene");
    }
    else if(side[0]===side[1]||side[0]===side[2]||side[1]===side[2]){
      alert("This is an isosceles");
    }
  else{
    alert("invalid entry");
  }
}

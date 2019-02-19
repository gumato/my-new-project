function triangleTracker(){
  var sideQ = parseInt(document.getElementById("sideQ").value);
  var sideR = parseInt(document.getElementById("sideR").value);
  var sideS = parseInt(document.getElementById("sideS").value);
  var side = [sideQ,sideR,sideS];
  if (side[0]+side[1]>side[2]&&side[1]+side[2]>side[0]&&side[0]+side[2]>side[1]){
  else if(side[0]===side[1]&&side[0]===side[2]){
    alert("equilateral triangle");
  }
  else if(side[0]===side[1]||side[1]===side[2]||side[0]===side[2]){
    alert("isosceles triangle");
  }
  else if(side[0]!==side[1]||side[1]!==side[2]||side[0]!==side[2]){
    alert("scalene triangle");
  }
  else
  {
    alert("not a triangle");
  }
  }

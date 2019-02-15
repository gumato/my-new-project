function(triangleTracker){
  var sideQ = parseInt(document.getElementByid("sideQ").value);
  var sideR = parseInt(document.getElementsByid("sideR").value);
  var sideS = parseInt(document.getElementByid("sideS").value);
  var side = [sideQ,sideR,sideS]};
  if(side[0]+side[1]<=side[2]||side[0]+side[2]<=side[1]||side[2+side[1]<=side[0]{
    alert("This is not a triangle");
  }else if(side[0]===side[1]&&side[0]===side[2]){
    alert("This is an equilateral");
  }else if(side[0]===side[1]||side[0]===side[2]||side[2]===side[1]){
      alet("This is an isoscles triangle");
  }else if(side{0}+side{1}>side{2}&&side{0}+side{2}>side{1}&&side[2]+side[1]>side[0]){
    alert("This is a scalene");

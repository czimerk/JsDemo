"use strict";
//global scope (window kliens oldali programozásnál)
var p = 1;
console.log(p);
p = "hello";
console.log(p);

//block scope
{
  const c = "ez konstans";
  let loc = "local";

  console.log(c);
  console.log(loc);
}

function fun() {
  //function scope
  var t = 1;
  console.log(t);
  //nem lesz hiba
}

fun(); // függvény meghívása!

function getDataFromServer() {
  return [1, 2, 3, 4];
}

var dataFromServer = getDataFromServer();

//implicit típuskonverziók kihasználása nélkül (hosszan)
if (
  dataFromServer !== null &&
  dataFromServer !== undefined &&
  dataFromServer.length > 0
) {
  console.log(dataFromServer[1]);
}

//implicit típuskonverziókkal
if (dataFromServer && dataFromServer.length) {
  console.log(dataFromServer[1]);
}

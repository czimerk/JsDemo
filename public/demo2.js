(function demo2() {
  console.log("test demo 2");

  function fun(param1, param2) {
    var result = param1.v + param2;
    param1 = { v: 4 };
    return result;
  }

  var p1 = { v: 2 };

  var val = fun(p1, 4);

  console.log("val " + val);
  console.log("p1 " + p1.v);

  //függvény egy változóban
  var megtobbfun = fun;
  var val3 = megtobbfun(p1, 5);

  function demofun(func, numb) {
    var val4 = func(p1, 6);
    return val4 + numb;
  }

  console.log(demofun(fun, 7));
})();

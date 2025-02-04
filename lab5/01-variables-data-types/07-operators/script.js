console.log(1+2*2-3);
console.log((1+2)*2-3);

console.log(6%3);
console.log(6==3);
console.log(6>3);
console.log(6<3);
console.log(6||3);
console.log(2 == '2');
console.log(2 ==='2');
if (2 == '2') console.log("OK");
if (!(2 ==='2')) console.log("Not Tobe OK");

/*
and
0 && 0 = 0
0 && 1 = 0
1 && 0 = 0
1 && 1 = 1
or
0 && 0 = 0
0 && 1 = 1
1 && 0 = 1
1 && 1 = 1


*/


if (false && fale) console.log("OK");
if (true || fale) console.log("OK");

if ((1 == '1') && (2 === "2") && (3 === '3'))console.log("OK");
else console.log ("Not OK")

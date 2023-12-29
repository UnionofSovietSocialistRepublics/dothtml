//let a = 1;

//while(a>6){
//    console.log("sus");
//   a++;
//}


//do {
//    console.log("sus");
//    a++;
//}

//while(a>6);



//for (let a = 2; a<10; a++){
//    for (let i =1; i < 11; i++) {
//        document.write(a, "x", i, "=", a*i, "<br>");
//     }
//}

//var n = 10;
//for (let a = 1; a<=n; a++){
//    for (let i = 1; i<=n; i++){
//       document.write("*")
//    }
//    document.write("<br>")
//}

//let a = 1;
//let b = 2;
//let c = 3;
//const arr = [a,b,c,"frog"];
//console.log (arr);
//console.log("array length:", arr.length);
//arr.push("frog")
//console.log("Array added: ");
//arr.pop;
//console.log("Last array eaten: ", arr);
//arr.shift;
//console.log("First array eaten: ", arr);
//arr.splice(1,1)
//console.log("middle array eaten", arr);

//let d = {
//    a: "s",
//    b: "sus",
//    c: "sususu",
//    d: "sussy"
//}

//console.log(d);
//console.log(d.a);
//d.m = "n";
//console.log(d);
//d.a = "amog";
//console.log(d);

//delete d.c;
//console.log(d);


//const m = [
//    ["cat", [1,2]]
//    ["dog", [3,4]]
//]


//for (let i = 0; i < m.length; i++) {
//    document.write("I have " + m[i][1][0] + " " + m[i][1] + "<br>" )
//}

let z = [
    {
        a:"a",
        m:1
    },
    {
        a:"b",
        y:1
    }
]

//for (let i = 0; i<z.length; i++){
//    document.write("Ban Thu " + i+1 + " " + "Ten " +  z[i].a + "," + " " + z[i].y + "Tuoi " + "<br>");
//}

localStorage.setItem("L", JSON.stringify(z));

console.log(localStorage.getItem("L"));

document.write(JSON.parse(localStorage.getItem("L")));
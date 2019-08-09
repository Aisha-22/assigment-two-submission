var calcRadius = Number(document.getElementById("myRadius").value);
var pi =  3.14159;
//Area is equals to pi x r x r
var area = pi * (calcRadius * calcRadius);
var circumference;
var diameter;


function myCulculate(){
    alert(calcRadius);
    console.log(calcRadius);
    // document.getElementById("myArea").innerHTML = area;
}
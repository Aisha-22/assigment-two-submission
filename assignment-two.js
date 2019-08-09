const pi =  3.14159;

function calculateArea(){
    let calcRadius = Number(document.getElementById("myRadius").value);

//Area is equals to pi x radius x radius
let myArea = pi * (calcRadius * calcRadius);

    console.log(calcRadius);
    document.getElementById("myArea").innerHTML = myArea;

//Diameter is equals to 2 x radius
let myDiameter = calcRadius * 2;

document.getElementById("myDiameter").innerHTML = myDiameter;

//Circumference is equals to diameter * pi
let myCircumference = myDiameter * pi;

document.getElementById("myCircumference").innerHTML = myCircumference;
}

function convert(){

const value =parseFloat(document.getElementById("value").value);
const conversionType = document.getElementById("conversion-type").value;
let result = 0;
if(conversionType === "yardToSqft"){
    //1 Marla = 225 squaare feet
    result = value * 9;
}else{
    //1 Square foot = 0.00444444 Marla (rounded to 6 decimal places)
    result = value * 0.111111;
}
document.getElementById("result").textContent = `Result: ${result} ${conversionType === "yardToSqft" ? "Square Feet" : "Yard"}`;
}


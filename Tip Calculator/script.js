function calculateTip(){
    var billAmt = document.getElementById("billamt").value;
    var serqual = document.getElementById("quality").value;
    var num = document.getElementById("peopleamt").value;

if (billAmt === "" || serqual == 0) {
    alert("Please enter values");
    return;
}
if(num ==="" || num <=1){
    num = 1;
    document.getElementById("each").style.display = "none";
}else{
    document.getElementById("each").style.display = "block";
}

var total = (billAmt * serqual) / num;
total = Math.round(total * 100)/100;
total = total.toFixed(2);
document.getElementById("totalTip").style.display = "block";
document.getElementById("tip").innerHTML = total;

}

document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//click to call function
document.getElementById("calculate").onclick = function() {
  calculateTip();

};
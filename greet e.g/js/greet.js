/**
 * Created by mayan on 15-06-2016.
 */
window.addEventListener("load",inIt);
function inIt(){
    document.getElementById("greet").addEventListener("click",greet);
    document.getElementById("clear").addEventListener("click",clear);
}

function greet(){
    var fName = document.getElementById("fName").value;
    var fn = fName.charAt(0);
    var uFn = fn.toUpperCase();
    var rFn = fName.substring(1);
    var lFn = rFn.toLowerCase();
    var newFName = uFn+lFn;
    var lName = document.getElementById("lName").value;
    var ln = lName.charAt(0);
    var uln = ln.toUpperCase();
    var rln = lName.substring(1);
    var lln = rln.toLowerCase();
    var newLName = uln+lln;
    document.getElementById("msg").innerHTML="Welcome " + newFName + " " + newLName;
}
function clear(){
    document.getElementById("msg").innerHTML="";
    document.getElementById("name").value="";
}
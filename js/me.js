// <script>
function show(){
    document.getElementById("hidediv").style.display="block";
    document.getElementById("change").innerHTML="⇩";
    document.getElementById("change").href="javascript:hide()";
}
function hide(){
    document.getElementById("hidediv").style.display="none";
    document.getElementById("change").innerHTML="➩";
    document.getElementById("change").href="javascript:show()";
}
function show2(){
    document.getElementById("hidediv2").style.display="block";
    document.getElementById("change2").innerHTML="⇩";
    document.getElementById("change2").href="javascript:hide2()";
}
function hide2(){
    document.getElementById("hidediv2").style.display="none";
    document.getElementById("change2").innerHTML="➩";
    document.getElementById("change2").href="javascript:show2()";
}
// </script>
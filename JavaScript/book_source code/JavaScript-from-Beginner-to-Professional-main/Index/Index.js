window.onload = function donenow() {
    console.log("hi");
    document.getElementById("divvy").addEventListener("mousedown",
        function () { changeColor(this, "green"); });
    document.getElementById("divvy").addEventListener("mouseup",
        function () { changeColor(this, "yellow"); });
    document.getElementById("divvy").addEventListener("dblclick",
        function () { changeColor(this, "black"); });
    document.getElementById("divvy").addEventListener("mouseout",
        function () { changeColor(this, "blue"); });
}
console.log("hi2");
function changeColor(el, color) {
    el.style.backgroundColor = color;
}

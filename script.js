
const container = document.querySelector('#container');
let color = "white";



function createPad(size) {
    const sketchPad = document.createElement("DIV");
    sketchPad.style.height = size * 10 + "px";
    sketchPad.style.width = size * 10 + "px";
    sketchPad.setAttribute('id', 'sketchPadDiv')
    container.appendChild(sketchPad);



    for (let i = 0; i < size ** 2; i++ ) {

        let checkRainbow = document.querySelector("#rainbow");
        checkRainbow.addEventListener("change", (event) => {
            if (event.target.checked ){ 
                color = "rainbow";
        }
        })

        let pixel = document.createElement("DIV");
        pixel.style.backgroundColor = "darkgrey";
        pixel.style.height = "10px";
        pixel.style.width = "10px";
        pixel.setAttribute('id', 'pixel');
        if (color === "rainbow") {
            pixel.addEventListener('mouseenter', function( event ) {
                event.target.style.backgroundColor = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6);
                }, false);
                
            sketchPad.appendChild(pixel);
        } else {
            pixel.addEventListener('mouseenter', function( event ) {
                event.target.style.backgroundColor = "green";
                }, false);
                
            sketchPad.appendChild(pixel);
            }
    }
}
       
       
function reset() {
    const sketchPad = document.getElementById("sketchPadDiv");
    sketchPad.remove();
    let fields = prompt("How many fields? min = 1, max = 100");
    while (fields > 100 || fields < 1) {
        alert("wrong input!");
        fields = prompt("How many fields? min = 1, max = 100")}
        if (fields <= 100) { createPad(fields) };
    
    
};
createPad(8);
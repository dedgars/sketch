const container = document.querySelector('#container');

let toggleRainbow = false;
function rainbowOn () {
    if (toggleRainbow == true) {
        toggleRainbow = false;
    } else {
        toggleRainbow = true;
    };
};

function createPad (size) {
    const sketchPad = document.createElement("DIV");
    sketchPad.style.height = size * 10 + "px";
    sketchPad.style.width = size * 10 + "px";
    sketchPad.setAttribute('id', 'sketchPadDiv');
    container.appendChild(sketchPad);
    
    for (let i = 0; i < size ** 2; i++ ) {
        let pixel = document.createElement("DIV");
        pixel.setAttribute('id', 'pixel');
        pixel.addEventListener('mouseenter', function( event ) {
            event.target.style.backgroundColor = getRandomColor();
                }, false);
                
        sketchPad.appendChild(pixel);
    }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    if ( toggleRainbow == true ) {
        for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
        } 
    return color;
    } else {
        return "pink";
    };
  };

  function reset() {
    const sketchPad = document.getElementById("sketchPadDiv");
    sketchPad.remove();
    let fields = prompt("How many fields? min = 1, max = 100");
    while (fields > 100 || fields < 1) {
        alert("wrong input!");
        fields = prompt("How many fields? min = 1, max = 100")};
        if (fields <= 100) { createPad(fields) };
};


createPad(8);
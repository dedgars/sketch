

const container = document.querySelector('#container');

function createPad() {
    const sketchPad = document.createElement("DIV");
    sketchPad.setAttribute('id', 'sketchPadDiv')
    container.appendChild(sketchPad);

    for (let i = 0; i < 64; i++ ) {
        let pixel = document.createElement("DIV");
        pixel.setAttribute('id', 'pixel');

        pixel.addEventListener('mouseenter', function( event ) {
            event.target.style.backgroundColor = "lightgreen";
            console.log('hee')
        }, false);

        sketchPad.appendChild(pixel)};

};

function reset() {
    const sketchPad = document.getElementById("sketchPadDiv");
    sketchPad.remove();
    createPad()
};

createPad()


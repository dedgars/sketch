
let size = '320px'
const containerDiv = document.querySelector('#container');
containerDiv.style.height = size;
containerDiv.style.width = size;
containerDiv.style.backgroundColor = "green";






for (let i = 0; i < 8 * 8; i++){
    const pixel = document.createElement("div");
    pixel.style.height = '40px';
    pixel.style.width = '40px';
    pixel.style.backgroundColor = "lightGreen";
    pixel.style.display = "inline-block";
    pixel.style.verticalAlign = "top";
    
    pixel.addEventListener('mouseenter', function( event ) {
        event.target.style.backgroundColor = "grey";
        // setTimeout(function() {
        //     event.target.style.backgroundColor = "lightGreen";
        // }, 700);
    }, false);

    containerDiv.appendChild(pixel);

}




document.querySelector('button').addEventListener('click', function (e) {
    console.log(e)
})

window.addEventListener('keydown', function (e) {
    switch (e.code) {
        case "ArrowUp": console.log("UP");
            break;
        case "ArrowDown": console.log("DOWN");
            break;
        case "ArrowLeft": console.log("LEFT");
            break;
        case "ArrowRight": console.log("RIGHT");
            break;
        default: console.log("INVALID");
            break;
    }
})
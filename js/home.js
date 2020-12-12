const knowledge = {
    html: 84,
    python: 85,
    django: 88,
    react: 89,
    c: 90,
    angular: 50,
    sql: 95,
    nodejs: 46,
    php: 80,
    java: 71,
}

// const incrementNumberInElement = async (element, actualNumber, number) => {
//     if (actualNumber < number) {
//         element.innerHTML = actualNumber;
//         setTimeout(incrementNumberInElement(element, actualNumber + 0.1, number), 500);
//     }
// }

function animateprogress(element, val) {
    var getRequestAnimationFrame = function () {  /* <------- Declaro getRequestAnimationFrame intentando obtener la máxima compatibilidad con todos los navegadores */
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (callback) {
                window.setTimeout(enroute, 1000);
            };
    };

    var fpAnimationFrame = getRequestAnimationFrame();   /* <--- Declaro una instancia de getRequestAnimationFrame para llamar a la función animación */
    var i = 0;
    var animacion = function () {
        if (i <= val) {
            element.innerHTML = i;     /* <---- Incremento el porcentaje y lo muestro en la etiqueta span */
            i++;
            fpAnimationFrame(animacion);          /* <------------------ Mientras que el contador no llega al porcentaje fijado la función vuelve a llamarse con fpAnimationFrame     */
        }
    }
    fpAnimationFrame(animacion);   /*  <---- Llamo la función animación por primera vez usando fpAnimationFrame para que se ejecute a 60fps  */
}

window.addEventListener('load', () => {
    Object.keys(knowledge).forEach(key => {
        const element = document.querySelector(`#${key}`);
        // incrementNumberInElement(element, 0, knowledge[key]);
        animateprogress(element, knowledge[key])
    })
});

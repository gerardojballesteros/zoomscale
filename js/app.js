/*
    Zoom Over realizador por Gerardo Ballesteros - Frontend Developer
    Todos los derechos reservados.
*/

//Llamamos el controller del plugins
gsap.registerPlugin(ScrollTrigger);

//Definimos una varibles o un let para seleccionar la portada
// y hacer el efecto scale (zoom)

let portada = gsap.to("#portada", { //Seleccionamos el identificador
    scrollTrigger: { //Llamamos al plugins
        trigger: "#portada", //Seleccionamos la imagen
        start: "100px 100px", //Le decimos que empiece el efectos scroll desde el top
        markers: false, // Con el marker haciendo TRUE colocamos las guias para identificar donde empieza o termina la animacion
        end: "200%", //Aquí definimos en que parte queremos finalizar la animacion
        scrub: 2, //Con este atributo damos suavidad a al efecto
    },
    scale: "0.3", opacity:-0.5, //Proporcionamos la escala y opacidad
});


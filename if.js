function ConseguirTipoSuscripcion(suscripcion) {
    if(suscripcion == "free") {
        console.log("Solo puedes tener acceso a los cursos gratis");
        return;
    }

    if(suscripcion == "basic") {
        console.log("Tienes acceso a casi todos los cursos");
        return;
    }

    if(suscripcion == "Expert") {
        console.log("Tienes acceso a todos los cursos!");
        return;
    }

    console.warn("Escribe bien chamko pndjo");
}

const tipoDeSuscripciones = {
    free: "Solo puedes tomar los cursos gratis",
    basic: "Solo puedes tomar algunos cursos",
    expert: "puedes tomar todossss",
};

tipoDeSuscripciones[free]

const ejemploSuscripcion = "free"

function conseguirTipoSuscripcion(suscripcion) {
    if (tipoDeSuscripciones[suscripcion]){
        console.log(tipoDeSuscripciones[suscripcion])
        return;
    }

    
}
let persona;

function crearPersona() {
  const nombre = document.getElementById("nombre").value;
  const edad = document.getElementById("edad").value;

  persona = {
    nombre: nombre,
    edad: edad,
  };

  alert(
    "Persona creada:\nNombre: " + persona.nombre + "\nEdad: " + persona.edad
  );
}

function mostrarGeneracion() {
  if (persona) {
    // Lógica para determinar la generación según la edad
    // Aquí puedes agregar tu propia lógica según los rangos de edad
    alert("Generación: " + determinarGeneracion(persona.edad));
  } else {
    alert("Primero debes crear una persona.");
  }
}

function esMayorEdad() {
  if (persona) {
    const resultado =
      persona.edad >= 18 ? "Es mayor de edad." : "No es mayor de edad.";
    alert(resultado);
  } else {
    alert("Primero debes crear una persona.");
  }
}

function determinarGeneracion(edad) {
  // Lógica para determinar la generación según la edad
  // Puedes adaptar y agregar tus propias condiciones
  if (edad >= 0 && edad <= 28) {
    return "Generación Z";
  } else if (edad >= 28 && edad <= 36) {
    return "Generación Y";
  } else if (edad >= 37 && edad <= 42) {
    return "Generación X";
  } else if (edad >= 42 && edad <= 50) {
    return "Generación Baby Boom";
  } else if (edad >= 51 && edad <= 60) {
    return "Silent Generation: Austeridad";
  } else {
    return "Generacion no clasificada";
  }
}
import { Aguila, Leon, Lobo, Oso, Serpiente } from "./animales.mjs";
import { iife as functionAutoejecutable } from "./iife.mjs";

document.getElementById("btnRegistrar").addEventListener("click", async () => {
  let nombre_animal = document.getElementById("animal").value;
  let edad_animal = document.getElementById("edad").value;
  let comentario_animal = document.getElementById("comentarios").value;
  const { imagen, sonido } = await functionAutoejecutable.obtenerDataJson(
    nombre_animal
  );

  if (!nombre_animal || !edad_animal || !comentario_animal) {
    alert("Por favor, complete todos los campos.");
    return;
  }

  let animal;

  if (nombre_animal == "Leon") {
    animal = new Leon(
      nombre_animal,
      edad_animal,
      imagen,
      comentario_animal,
      sonido
    );
  } else if (nombre_animal == "Lobo") {
    animal = new Lobo(
      nombre_animal,
      edad_animal,
      imagen,
      comentario_animal,
      sonido
    );
  } else if (nombre_animal == "Oso") {
    animal = new Oso(
      nombre_animal,
      edad_animal,
      imagen,
      comentario_animal,
      sonido
    );
  } else if (nombre_animal == "Serpiente") {
    animal = new Serpiente(
      nombre_animal,
      edad_animal,
      imagen,
      comentario_animal,
      sonido
    );
  } else {
    animal = new Aguila(
      nombre_animal,
      edad_animal,
      imagen,
      comentario_animal,
      sonido
    );
  }
  functionAutoejecutable.addAnimal(animal);
  functionAutoejecutable.cardsAnimal(
    functionAutoejecutable.animalsArray,
    "Animales"
  );
  functionAutoejecutable.limpiar();
});

document.getElementById("animal").addEventListener("change", async (event) => {
  const { imagen, sonido } = await functionAutoejecutable.obtenerDataJson(
    event.target.value
  );
  const nombreAnimal = event.target.value;

  const preview = document.getElementById("preview");
  preview.innerHTML = "";
  const img = document.createElement("img");
  img.src = `assets/imgs/${imagen}`;
  img.className = "img-fluid rounded";
  img.alt = nombreAnimal;
  preview.appendChild(img);
});

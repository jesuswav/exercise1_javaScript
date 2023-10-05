/* importamos el arreglo de un archivo externo llamado libreria.js */
import peliculas from "./peliculas.js";
import series from "./series.js";
/* dom, guardamos en una constante el div html donde ingresamoes el arreglo */
const peliculaDiv = document.getElementById("peliculas");
const serieDiv = document.getElementById("series");
/* Integramos nuestro arreglo con la funcion Foreach con la referencia pelicula */
peliculas.forEach((pelicula) => {
  /* Agregael titulo h3 dentro de mi div contenedor */
  const peliculaContenedor = document.createElement("div");
  peliculaContenedor.className = "card";
  /* por cada iteracion crea un elemento h3 para el titulo */
  const peliculaTitulo = document.createElement("h3");
  peliculaContenedor.appendChild(peliculaTitulo);

  const infoPelicula = document.createElement("div");
  infoPelicula.className = "info";

  // Información de la pelicula que se va a mostrar
  const peliculaNombre = document.createElement("p");
  const peliculaAnio = document.createElement("p");
  const peliculaGenero = document.createElement("p");
  const peliculaDirector = document.createElement("p");

  peliculaNombre.textContent = `Nombre: ${pelicula.titulo}.`;
  peliculaGenero.textContent = `Genero: ${pelicula.genero}.`;
  peliculaAnio.textContent = `Año: ${pelicula.anio}`;
  peliculaDirector.textContent = `Director: ${pelicula.director}`;
  // Creamos el objeto de imagen
  const peliculaImg = document.createElement("img");
  peliculaImg.src = `${pelicula.img}`;

  peliculaContenedor.appendChild(peliculaImg);
  peliculaContenedor.appendChild(infoPelicula);
  infoPelicula.appendChild(peliculaNombre);
  infoPelicula.appendChild(peliculaGenero);
  infoPelicula.appendChild(peliculaAnio);
  infoPelicula.appendChild(peliculaDirector);
  /* Agrego al dom mi contenedor creado en js */
  peliculaDiv.appendChild(peliculaContenedor);
});

series.forEach((serie) => {
  /* Agregael titulo h3 dentro de mi div contenedor */
  const serieContenedor = document.createElement("div");
  serieContenedor.className = "card";
  /* por cada iteracion crea un elemento h3 para el titulo */
  const serieTitulo = document.createElement("h3");
  serieContenedor.appendChild(serieTitulo);

  const infoserie = document.createElement("div");
  infoserie.className = "info";

  // Información de la serie que se va a mostrar
  const serieNombre = document.createElement("p");
  const serieAnio = document.createElement("p");
  const serieGenero = document.createElement("p");
  const serieDirector = document.createElement("p");

  serieNombre.textContent = `Nombre: ${serie.titulo}.`;
  serieGenero.textContent = `Genero: ${serie.genero}.`;
  serieAnio.textContent = `Año: ${serie.anio}`;
  serieDirector.textContent = `Creador: ${serie.creador}`;
  // Creamos el objeto de imagen
  const serieImg = document.createElement("img");
  serieImg.src = `${serie.img}`;

  serieContenedor.appendChild(serieImg);
  serieContenedor.appendChild(infoserie);
  infoserie.appendChild(serieNombre);
  infoserie.appendChild(serieGenero);
  infoserie.appendChild(serieAnio);
  infoserie.appendChild(serieDirector);
  /* Agrego al dom mi contenedor creado en js */
  serieDiv.appendChild(serieContenedor);
});

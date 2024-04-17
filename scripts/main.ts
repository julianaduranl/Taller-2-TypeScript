
import { Serie } from './serie.js';
import { Series } from './data.js';
console.log(Series);
let tablaBody: HTMLElement = document.getElementById(`tablaBody`)!;
let promedio: HTMLElement = document.getElementById(`prom`)!;
let detalle: HTMLElement = document.getElementById(`detalle`)!;

mostrarTabla(Series);
mostrarPromedio(Series);
function mostrarTabla(s:Serie[]): void {
  s.forEach((serie) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${serie.id}</td>
    <td class="serie-name">${serie.name}</td>
                           <td>${serie.channel}</td>
                           <td>${serie.seasons}</td>`;
    tablaBody.appendChild(trElement);
  });
  
}
function mostrarPromedio(s:Serie[]) :void{
  let totalTemporadas = 0;
  for (let i = 0; i < s.length; i++) {
    totalTemporadas += s[i].seasons;}
  let prom = totalTemporadas / Series.length;
  let tbody = document.createElement("tbody");
  tbody.innerHTML = `Seasons average: ${prom.toFixed(2)}`;
  promedio.appendChild(tbody);

}
tablaBody.addEventListener('click', (event) => {
  const target = event.target as HTMLElement;
  if (target.classList.contains('serie-name')) {
      const seriesName = target.textContent!;
      const serie = Series.find(s => s.name === seriesName);
      if (serie) {
          detalle.innerHTML = `
              <div class="card" style="width: 18rem;">
                  <img class="card-img-top" src="${serie.image}" alt="${serie.name}">
                  <div class="card-body">
                      <h5 class="card-title" id="nombre">${serie.name}</h5>
                      <p class="card-text" id="descripcion">${serie.description}</p>
                      <a href="${serie.link}" class="btn btn-primary" id="link" target="_blank">More info</a>
                  </div>
              </div>
          `;
          console.log(serie.image)
      }
  }
});
// *********************Gandores Json***************

let x = new XMLHttpRequest();

x.open('GET', 'ganadores.json', true);
x.send();

x.addEventListener('readystatechange', () => {
    
    if (x.readyState === 4 && x.status === 200) {
        let ganadores = JSON.parse(x.response);
        mostrarGanadores(ganadores)
    }
    
});
function mostrarGanadores(ganadores) {

    for (ganadores of ganadores) {

        let nombre = ganadores.nombre;
        let apellido = ganadores.apellido;

        let item = document.createElement('li');
        item.innerHTML = `Los ganadores del mes son: <b>${nombre}</b> <b>${apellido}</b> !!!!!!!!`;
        lista.appendChild(item);
    }
}




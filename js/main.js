const fila = document.querySelector('.contenedor-carrusel');
const peliculas = document.querySelectorAll('.peliculas');
const flechaIzquierda= document.getElementById('flecha-izquierda');
const flechaDerecha= document.getElementById('flecha-derecha');


//-----------EVENTO LISTENER PARA FLECHA DERECHA e IZQUIERDA---------

flechaDerecha.addEventListener('click',()=>{
    fila.scrollLeft += fila.offsetWidth;

    const indicadorActivo = document.querySelector('.indicadores .activo');
    if(indicadorActivo.nextSibling){
        indicadorActivo.nextSibling.classList.add('activo');
        indicadorActivo.classList.remove('activo');
    }
});
flechaIzquierda.addEventListener('click',()=>{
    fila.scrollLeft -= fila.offsetWidth;

    const indicadorActivo = document.querySelector('.indicadores .activo');
	if(indicadorActivo.previousSibling){
		indicadorActivo.previousSibling.classList.add('activo');
        indicadorActivo.classList.remove('activo');
    }
});

//-----------PAGINACION INDICADORES ---------
//SIN EMBARGO ACLARO QUE EL PUTO CODIGO ABAJO  NO SIRVE PARA UNA PUTA  MIERDA NO FUNCIONA

  const numerodePaginas = Math.ceil(peliculas.lenght / 5);
for(let i = 0; i < numerodePaginas; i++) {
    const indicador =document.createElement('button');
    indicador.type='button';
    document.querySelector('.indicadores').appendChild(indicador);

    if( i === 0 ){
       indicador.classList.add('activo');
    }
   
    indicador.addEventListener('click', (e) => {
        fila.scrollLeft = i * fila.offsetWidth;
        document.querySelector('.indicadores .activo').classList.remove('activo');
        e.target.classList.add('activo');
    });
}
//  ----- ----- HOVER ----- -----
peliculas.forEach((pelicula) => {
	pelicula.addEventListener('mouseenter', (e) => {
		const elemento = e.currentTarget;
		setTimeout(() => {
			peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
			elemento.classList.add('hover');
		}, 300);
	});
});

fila.addEventListener('mouseleave', () => {
	peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
}); 

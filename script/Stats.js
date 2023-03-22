fetch('https://mindhub-xj03.onrender.com/api/amazing')
  .then(response => response.json())
  .then(data => {
    let eventos = data.eventos;
    let eventoMayorAsistencia = eventos[0];
    

    for (let i = 1; i < eventos.length; i++) {
        if (eventos[i].porcentajeAsistencia > eventoMayorAsistencia.porcentajeAsistencia) {
            eventoMayorAsistencia = eventos[i];
        }
    }
    
})
.catch(error => console.error(error));

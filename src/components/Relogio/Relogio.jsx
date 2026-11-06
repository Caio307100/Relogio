import './Relogio.css'

setInterval(() => {
    const Relogio = document.getElementById("Relogio"); let p = Relogio.querySelector("p")
    let data = new Date()
    let hora = data.getHours(); let minuto = data.getMinutes(); let segundo = data.getSeconds()
    let horario = `${hora < 10 ? `0${hora}` : hora}:${minuto < 10 ? `0${minuto}` : minuto > 59 ? `00` : minuto}:${segundo < 10 ? `0${segundo}` : segundo > 59 ? `00` : segundo}`
    p.innerText = horario
}, 1000)

function Relogio(){
    return(
        <>
            <div id="Relogio">
                <p>Carregando...</p>
            </div>
        </>
    )
}

export default Relogio
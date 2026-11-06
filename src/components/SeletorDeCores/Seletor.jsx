import './Seletor.css'

let mostrandoCor = false

function mostrarCores(){
    if (mostrandoCor){
    }
    else{
        mostrandoCor = true
        const seletor = document.querySelector("#Seletor"); let p = seletor.querySelector("p"); let div = seletor.querySelector("div"); const Alldiv = div.querySelectorAll("div")
        p.remove()
        div.remove()
        const seletorHeight = getComputedStyle(seletor).height
        const heightFinal = parseInt(seletorHeight.replace("px", ""))
        seletor.style.height = `${heightFinal * 2}px`
        seletor.style.cursor = "default"
        seletor.onClick = null
        for (let x of Alldiv){
            x.style.display = "block"
        }
        for (let x of Alldiv){
            seletor.appendChild(x)
        }
    }
}

function Seletor(){
    return(
        <>
            <div id='Seletor' onClick={() => mostrarCores()}>
                <p>Mudar cor principal</p>
                <div>
                    <div id='Preto' className='Padrao'></div>
                    <div id='Branco' className='Padrao'></div>
                </div>
            </div>
        </>
    )
}

export default Seletor
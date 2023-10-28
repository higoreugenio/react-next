export default function jsx4(){
    const subtitulo = 'Opa 👽'
    let outroSubtitulo = 'Bina 👽'

    return (
        
        <div>
        <h1>Integração JS e JSX</h1>
        <h2>{subtitulo}</h2>
        <h2>{entre(8,8,8)}</h2>
        </div>
    )

    function entre(valor, min, max) {
        if (valor >= min && valor <= max){
             return "Sim"
        }else{
            return "Não"
            }
        }      
}
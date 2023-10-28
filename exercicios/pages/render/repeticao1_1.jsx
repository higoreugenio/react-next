export default function repeticao1() {
    const listaAprovados = [
        'Higor',
        'Maria',
        'Paulo',
        'Ricardo',
        'Andréia',
        'Débora'
    ]

    function renderizarLista(){

        return listaAprovados.map((nome) => <li>{nome}</li>)
    }

    return(

        <>
        {renderizarLista()}
        </>
    )
}
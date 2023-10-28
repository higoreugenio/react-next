export default function(){
    let valorFinal = 10
    const valorSpan = []
    for (let i = 0; i <= valorFinal; i++) {
        valorSpan.push(<span>{i}</span>)
        
    }

    return (

    <>
        <span>{valorSpan}</span>
    </>
    )
}
export default SomentePar;
function SomentePar(props){
    if (props.numero % 2 == 0) {
        return <h1>{props.numero} Par</h1>
        
    }else{
        return <h1>{props.numero} Ímpar</h1>
    }
    
}


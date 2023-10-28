import Filho from "./Filho"
export default function Pai(props){
    return(

        <>
        <div>
            <Filho nome = "Higor" familia = "Eugenio"></Filho>
            <Filho nome = "Pedro" familia = "Santos"></Filho>
            <Filho nome = "Joana" familia = "Albuquerque" ></Filho>
            <Filho nome = "Maria" familia = "Santos"></Filho>
        </div>
        </>
    )
}
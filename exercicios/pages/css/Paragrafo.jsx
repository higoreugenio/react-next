
import styles from '../css/paragrafo'
export default function Paragrafo(){

    return(

        <>
        <div className={styles.paragrafo}>
            <p>O front-end é uma área da programação que se dedica a criar a parte visual e interativa de um site, aplicativo ou software. É o que o usuário vê e usa quando acessa uma plataforma digital. Por exemplo, quando você entra no Facebook, é o que permite que você veja as fotos, os vídeos, os comentários, as curtidas e os botões de ação. </p>
            <p>O Back-End trabalha em boa parte dos casos fazendo a ponte entre os dados que vem do navegador rumo ao banco de dados e vice-versa, sempre aplicando as devidas regras de negócio, validações e garantias num ambiente restrito ao usuário final (ou seja, onde ele não consegue acessar ou manipular algo).</p>
            <p>Full Stack é um tipo de profissional ligado à área de TI capaz de trabalhar nas mais diversas atividades que dizem respeito ao desenvolvimento e programação web, muito valorizado no mercado graças ao seu conhecimento em diferentes linguagens, códigos e tecnologias.</p>
        </div>
        </>
    )
}
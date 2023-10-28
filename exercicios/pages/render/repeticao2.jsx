import listaProdutos from "@/data/listaProdutos"

export default function repeticao2() {
    function renderizarLinhas() {
        return listaProdutos.map((produto) => {
            return (
                <tr key={produto.id}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>{produto.preco}</td>
                </tr>

            )
        }
        )
    }

        return (

            <>
                <table border={200}>
                    <thead>
                        <tr>
                            <th>código</th>
                            <th>Nome</th>
                            <th>Preço</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderizarLinhas()}
                    </tbody>
                </table>
            </>
        )
    }

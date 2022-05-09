function Sugestao(props){
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={`assets/img/${props.nome}.svg`}alt={props.alt}/>
                <div class="texto">
                    <div class="nome">{props.nome}</div>
                    <div class="razao">{props.razao}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
}

export default function Sugestoes(){
    const informacoes = [
        {nome: 'bad.vibes.memes', alt:'memes', razao: 'Segue você'},
        {nome: 'chibirdart', alt:'chibirdart', razao: 'Segue você'},
        {nome: 'razoesparaacreditar', alt:'razoes', razao: 'Novo no Instagram'},
        {nome: 'adorable_animals', alt:'adorable', razao: 'Segue você'},
        {nome: 'smallcutecats', alt:'small', razao: 'Segue você'},
    ]

    return (
        <div class="sugestoes">
            <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
            </div>

            {informacoes.map(item => {
                return <Sugestao 
                    nome={item.nome}
                    alt={item.alt}
                    razao={item.razao}
                />
            })}

        </div>
    )
}
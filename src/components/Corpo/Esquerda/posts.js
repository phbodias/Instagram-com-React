import Curtir from "./curtir";

function Acoes(){
  return (
    <div class="acoes">
      <div>
        <Curtir />
        <ion-icon name="chatbubble-outline"></ion-icon>
        <ion-icon name="paper-plane-outline"></ion-icon>
      </div>
      <div>
        <ion-icon name="bookmark-outline"></ion-icon>
      </div>
    </div>
  );
}

function Post(props){
  return (
    <div class="post">
      <div class="topo">
        <div class="usuario">
          <img src={`assets/img/${props.nome}.svg`}/>
          {props.nome}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
          <img src={`assets/${props.imagem}`}/>
      </div>

      <div class="fundo">
        <Acoes />

        <div class="curtidas">
          <img src={`assets/img/${props.curtido}.svg`}/>
          <div class="texto">
            Curtido por <strong>{props.curtido}</strong> e outras<strong>{props.Likes} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Posts(){
  const posts = [
    {nome: 'meowed', url: 'img/gato-telefone.svg', curtidoPor: 'respondeai', nLikes: '101.523'},
    {nome: 'barked', url: 'img/dog.svg', curtidoPor: 'adorable_animals', nLikes: '99.159'},
  ]

  return (
    <div class="posts">
      {posts.map(item => {
        return <Post nome={item.nome} 
        imagem={item.url} 
        curtido={item.curtidoPor} 
        likes={item.nLikes} />
      }) 
    }
    </div>
  );
}

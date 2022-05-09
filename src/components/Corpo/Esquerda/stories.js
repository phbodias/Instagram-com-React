function Story(props) {
  return(
    <div class="story">
        <div class="imagem">
          <img src={`assets/img/${props.nome}.svg`}  alt={props.nome}/>
        </div>
        <div class="usuario">
          {props.nome}
        </div>
    </div>
  )
}

export default function Stories() {
  const stories = ['9gag', 'meowed', 'barked', 'nathanwpylestrangeplanet', 'wawawicomics', 'respondeai', 'filomoderna', 'memeriagourmet']

  return (
    <div class="stories">
        {stories.map(nome => <Story nome={nome} />)}
        <div class="setinha">
          <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
    </div>
  )
}
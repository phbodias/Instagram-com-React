function User(props) {
    return (
        <div class="usuario">
            <img src={`assets/img/${props.userName}.svg`} alt={props.alt}/>
            <div class="texto">
                <strong>{props.userName}</strong>
                {props.user}
            </div>
        </div>
    )
}

export default function Usuario() {
    return (
        <User userName="catanacomics" alt="comics" user="Catana" />
    )
}
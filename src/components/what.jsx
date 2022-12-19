import estilos from './styles/chat.module.css'

const What =() => {
    return <a href="https://api.whatsapp.com/send?phone=5401158685179" target="_blank" rel="noopener noreferrer">
        <img className={estilos.img}  src="../img/whatsapp.png" alt=""></img>
    </a>
}

export default What ;
import '../../styles/ChatBubble.css'

const ChatBubble = (props) => {
    const bubbleStyle = props.local ? 'bubble': 'bubbleOpp'
    const punta = props.local ? 'punta': 'puntaOpp'
    const stylePrimero = !props.first ? {display:'none'}: {}


  return (
    <div className= {bubbleStyle}>
        {props.texto}
        <div className={punta} style={stylePrimero}/>
    </div>
  )
}

export default ChatBubble
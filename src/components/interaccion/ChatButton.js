import React from 'react'
import "../../styles/ChatButton.css"
import robot from '../../images/robot.svg'
import cgpt from '../../images/chatgpt.svg'

const ChatButton = (props) => {
  return (
    <div className = "chatbutton" onClick={props.onClick}>
      <div className='chatB'>
        <img src= {robot} alt="robo logo" width={80} height={80} className='chatBButton'/>
      </div>
      <div className='cGPT'>
       <img src= {cgpt} alt="cgpt logo" width={80} height={80} className='cGPTButton'/>
      </div>

    </div>
  )
}

export default ChatButton
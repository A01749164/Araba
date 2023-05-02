import React, {useState} from 'react'
import Draggable from "react-draggable";
import ChatButton from './ChatButton';
import {AiOutlineMinus} from 'react-icons/ai'
import '../../styles/Chat.css'
import ChatBubble from './ChatBubble';

function Chat () {
  const [isActive, setIsActive] = useState(false);

  const handleClick = event => {
    //toggle shown state
    setIsActive(current => !current);
  };

  return (
    <div>
      <ChatButton onClick={handleClick}/>

      {isActive && (
        <Draggable handle='.OptionBox'>
          <div className='ChatBox'>
            <div className='OptionBox'>
              <p onClick={handleClick}><AiOutlineMinus className='icons'/></p>
            </div>
            <div className='ChatBody'>
              <ChatBubble local = {true} texto = "BUSTED BITCHHHHHHHHHHHHHHHHHHHHhh"/>
              <ChatBubble local = {false} texto = "Valiendo madres xd"/>
              <ChatBubble local = {false} texto = "BUSTED BITCHHHHHHHHHHHHHHHHHHHHhh" />
              <ChatBubble local = {false} texto = "Valiendo madres xd" first = {true}/>
            </div>
            <input type='text' className='Textbox'>

            </input>
          </div>
        </Draggable>
      )}

    </div>

  );
}

export default Chat
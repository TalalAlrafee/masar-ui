import './message.css'
import Sani from "../../assets/Sani.svg"
function Message(prompts) {
  

  return (
  <div className="message">
    
    <p className='message-text'>
        {prompts.text}

    </p>
    <img src={Sani}  className='profile-img-message' />
 
  </div>

   
  )
}

export default Message

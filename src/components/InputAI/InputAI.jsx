import './input-ai.css'
import Arrow from "../../assets/Arrow.svg"
function InputAI(prompts) {
  

  return (<form className="input-block"  onSubmit={prompts.submitHandler}>
   <input onChange={prompts.onChange} value={prompts.userPrompts} placeholder='Type message' type="text" className='input' />
   <button type="submit" className='button'>
    <img src={Arrow}/>


   </button>
  </form>

   
  )
}

export default InputAI

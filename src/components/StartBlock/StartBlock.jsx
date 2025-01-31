import './start-block.css'
import stars from "../../assets/stars.svg"
import search_alt from "../../assets/search_alt.svg"
function StartBlock(prompts) {
  

  return (<div className="start-block">
    <div className='header-start-block'>
    <img src={stars} />
    <h1>
    What can I help with?
    </h1></div>
    <p>
    The AI feature in the platform provides intelligent analysis to help users improve customer experience. 
    Based on stored data from invoices and subscription history, 
    the system suggests appropriate strategies for you.
    </p>
    <button onClick={prompts.StartBlockButtonFunction} className='button-lower-churn'><img className='button-img' src={search_alt} /> How can I lower my churn rates?</button>


 
  </div>

   
  )
}

export default StartBlock

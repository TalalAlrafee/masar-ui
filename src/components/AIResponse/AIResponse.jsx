import './AI-response.css'

function AIResponse(prompts) {
  

  return (<div className="AI-response" dangerouslySetInnerHTML={{ __html: prompts.content }} >
  </div>

   
  )
}

export default AIResponse

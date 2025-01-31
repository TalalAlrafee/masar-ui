import './main-header.css'

function MainHeader(prompts) {
  

  return (<div className="main-header">
    <h1>
        {prompts.text}
    </h1>
  </div>

   
  )
}

export default MainHeader

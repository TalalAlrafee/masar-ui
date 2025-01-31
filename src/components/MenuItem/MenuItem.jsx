import './menu-item.css'

function MenuItem(prompts) {
  

  return (<div className="menu-item" style={prompts.style}>
    <img src={prompts.src}/>
    <h6 className='menu-item-text'>{prompts.text}</h6>

  
  </div>

   
  )
}

export default MenuItem

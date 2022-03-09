import React from 'react'

function Footer() {
    const year = new Date().getFullYear();
  return (
    <div className='footer'>
        <div className='footerContent' > Copyright &copy; {year} <br />  -Nitish Kumar</div>
    </div>
  )
}

export default Footer
import React from 'react'

const Ticket = ({icon,text1,text2, text3, text4, text5, text6,text7, text8}) => {
  return (
    <div className='col-md-4 col-sm-6 col-12 py-5'>
    <p className="pt-5 pb-2 fs-5 d-flex align-items-center gap-2">
      <i className={icon}></i>{text1}
    </p>
    <p><a href='' className="text-decoration-none ">{text2}</a></p>
    <p><a href='' className="text-decoration-none ">{text3}</a></p>
    <p><a href='' className="text-decoration-none ">{text4}</a></p>
    <p><a href='' className="text-decoration-none ">{text5}</a></p>
    <p><a href='' className="text-decoration-none ">{text6}</a></p>
    <p><a href='' className="text-decoration-none ">{text7}</a></p>
    <p><a href='' className="text-decoration-none ">{text8}</a></p>
  </div>
  )
}

export default Ticket
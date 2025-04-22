import React from 'react'

const ProductSection = ({flexDir, image,title,content,link,link2}) => {
  return (
    <div className='container pt-4'>
        <div className="row pt-4">
            <div className={`main d-flex align-items-center flex-column ${flexDir?"flex-md-row-reverse" : "flex-md-row" }`}>
            <div className="w-md-100 w-100 ">
                <img className='w-100' src={image} alt="" />
            </div>
            <div className="col-1"></div>
            <div className="w-md-50 w-100 p-5">
                <h1>{title}</h1>
                
                <p className='text-muted lh-5'>{content}</p>
                <p>
                <a className='text-decoration-none fw-semibold' href="">{link} {link? <i className="mx-2 fa-solid fa-arrow-right-long"></i>:""}</a>
                <a className=' text-decoration-none fw-semibold' href="">{link2}{link2? <i className="mx-2 fa-solid fa-arrow-right-long"></i>:""}</a>
                </p>

                <div>
                    <a href=""><img src="./src/assets/images/googlePlayBadge.svg" alt="" /></a>
                    <a className='mx-2' href=""><img src="./src/assets/images/appstoreBadge.svg" alt="" /></a>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default ProductSection
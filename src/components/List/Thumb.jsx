import React from 'react'

export const Thumb = ({ selected, onClick, drink }) => {
  return (
    <div className={'embla-thumbs__slide'.concat(selected ? ' embla-thumbs__slide--selected' : '')}>
      <button onClick={onClick} type="button" className="embla-thumbs__slide__number focus:outline-none bg-cover bg-center rounded-lg text-white flex items-center justify-center" style={{ backgroundImage: `url(${drink.image_url}/preview)` }}>
      </button>
    </div>
  )
}

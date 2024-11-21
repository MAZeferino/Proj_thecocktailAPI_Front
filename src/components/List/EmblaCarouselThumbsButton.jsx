import React from 'react'

export const Thumb = (props) => {
  const { selected, index, onClick, drink } = props

  return (
    <div className={'embla-thumbs__slide'.concat(selected ? ' embla-thumbs__slide--selected' : '')}>
      <button onClick={onClick} type="button" className="embla-thumbs__slide__number focus:outline-none w-40 h-16 bg-cover bg-center rounded-lg text-white flex items-center justify-center" style={{ backgroundImage: `url(${drink.image_url}/preview)` }}>
      </button>
    </div>
  )
}

import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Thumb } from './EmblaCarouselThumbsButton'
import { Card } from "./Card"

export function List(props) {
  const { slides, options, drinks } = props
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options)
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true
  })

  const onThumbClick = useCallback(
    (index) => {
      if (!emblaMainApi || !emblaThumbsApi) return
      emblaMainApi.scrollTo(index)
    },
    [emblaMainApi, emblaThumbsApi]
  )

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return
    setSelectedIndex(emblaMainApi.selectedScrollSnap())
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap())
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaMainApi) return
    onSelect()

    emblaMainApi.on('select', onSelect).on('reInit', onSelect)
  }, [emblaMainApi, onSelect])

  return (
    <section className="w-[80%]">
      <div className="mb-16 mt-12 flex">
        <h1 className="mr-8">Drinks</h1>
        <hr className="w-[100%] mt-[1.8%] border-2 border-white" />
      </div>
      <div className="embla mx-36">
        <div className="embla__viewport" ref={emblaMainRef}>
          <div className="embla__container">
            {drinks.data != undefined ? drinks.data.map((drink, index) => (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__number justify-items-start ">
                  <img src={`${drink.image_url}`} alt="imagem da bebida" className="rounded-3xl h-full" />
                  <div>
                    <h1 className="font-sevillana text-[10rem] ml-8 mt-12">{drink.name}</h1>
                    <p className="font-extralight text-[3rem] ml-12">{drink.name}</p>
                  </div>
                </div>
              </div>
            )) : null}


            {/* {slides.map((index) => (<div className="embla__slide" key={index}><div className="embla__slide__number">{index + 1}</div></div>))} */}
          </div>
        </div>

        <div className="embla-thumbs">
          <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
            <div className="embla-thumbs__container">
              {drinks.data != undefined ? drinks.data.map((drink, index) => (
                <Thumb
                  key={index}
                  onClick={() => onThumbClick(index)}
                  selected={index === selectedIndex}
                  index={index}
                  drink={drink}
                />
              )) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
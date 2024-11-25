import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import { Thumb } from './Thumb'
import { Card } from "./Card"

export function List({ options, drinks }) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options, [AutoScroll({ playOnInit: true, stopOnInteraction: false, stopOnMouseEnter: true })])
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true
  })
  const onThumbClick = useCallback(
    (index) => {
      if (!emblaMainApi || !emblaThumbsApi) return
      emblaMainApi.scrollTo(index)
    }, [emblaMainApi, emblaThumbsApi]
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
            {drinks != undefined ? drinks.map((drink, index) => (
              <Card
                key={index}
                image={drink.image_url}
                name={drink.name}
                ingredients={drink.ingredients}
                instructions={drink.instructions}
              />
            )) : null}
          </div>
        </div>

        <div className="embla-thumbs">
          <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
            <div className="embla-thumbs__container">
              {drinks != undefined ? drinks.map((drink, index) => (
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
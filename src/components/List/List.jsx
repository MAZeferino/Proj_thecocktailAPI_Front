import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import '../../css/loader.css'
import { Loader } from './Loader'
import { Carousel } from './Carousel'

export function List({ options, drinks, isLoading, closing }) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options, [AutoScroll({ playOnInit: true, stopOnInteraction: false, stopOnMouseEnter: true })])
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({ containScroll: 'keepSnaps', dragFree: true })

  //Não fui eu que fiz não sou eu que vou mexer from: EMBLA 
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
  //Até aq




  return (
    <section className={`w-[80%]`}>
      <div className="mb-16 mt-4 flex">
        <h1 className="mr-8">Drinks</h1>
        <hr className="w-[100%] mt-[1.8%] border-2 border-white" />
      </div>
      <div id="carousel" className={`transition-opacity duration-300 ${closing && !isLoading ? "opacity-0 pointer-events-none" : !closing && isLoading ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
        {isLoading ? <Loader /> : <Carousel drinks={drinks} emblaMainRef={emblaMainRef} emblaThumbsRef={emblaThumbsRef} selectedIndex={selectedIndex} onThumbClick={onThumbClick} />}
      </div>
    </section>
  )
}
import { Thumb } from './Thumb'
import { Card } from "./Card"
import { NoDrinksLabel } from "./NoDrinksLabel"

export function Carousel({ drinks, emblaMainRef, emblaThumbsRef, selectedIndex, onThumbClick }) {
  return (
    <>
      {drinks?.length < 1 ? <NoDrinksLabel /> : null}
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
    </>
  )
}
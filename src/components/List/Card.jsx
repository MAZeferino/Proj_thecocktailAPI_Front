export function Card({ image, name, ingredients, instructions }) {
  return (
    <div className="embla__slide">
      <div className="embla__slide__number justify-items-start bg-[#1A1A1A] pr-12 h-[650px]">
        <img src={image} alt="imagem da bebida" className="rounded-3xl h-full" />
        <div className="scrollbar-hide h-[650px] flex flex-col">
          <h1 className="font-sevillana text-[8rem] ml-8 mt-10 text-red-600">{name}</h1>
          <span className="min-h-[10%] max-h-[40%] mb-4" >
            <p className="font-bold text-[2.5rem] ml-12 mt-6 text-red-800">Ingredients:</p>
            <p className="font-semibold text-[2rem] ml-12 mt-2">{ingredients.slice(0, ingredients.length - 2)}.</p>
          </span>
          <span className="min-h-[30%] max-h-[60%]">
            <p className="font-bold text-[2.5rem] ml-12 mt-8 text-red-800">How to prepare:</p>
            <p className="font-normal text-justify text-[2rem] h-[80%] ml-12 overscroll-contain overflow-y-scroll scrollbar-hide">{instructions}</p>
          </span>
        </div>
      </div>
    </div>
  )
}
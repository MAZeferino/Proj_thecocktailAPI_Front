export function Card({ image, name, ingredients, instructions }) {
  return (
    <div className="embla__slide">
      <div className="embla__slide__number justify-items-start bg-[#0D0D0D] pr-12">
        <img src={image} alt="imagem da bebida" className="rounded-3xl h-full" />
        <div>
          <h1 className="font-sevillana text-[10rem] ml-8 mt-10 text-red-600">{name}</h1>
          <p className="font-extralight text-[4rem] ml-12 text-red-600">{name}</p>
          <p className="font-bold text-[2rem] ml-12 mt-6 text-red-800">Ingredients:</p>
          <p className="font-semibold text-[2rem] ml-12 mt-2">{ingredients}</p>
          <p className="font-bold text-[2rem] ml-12 mt-8 text-red-800">How to prepare:</p>
          <p className="font-normal text-[2rem] ml-12 mt-2">{instructions}</p>
        </div>
      </div>
    </div>
  )
}
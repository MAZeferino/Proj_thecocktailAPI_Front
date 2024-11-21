export function Card({ image, title }) {
  return (
    <div className="p-0 flex flex-col items-center justify-start bg-[#1A1A1A] rounded-lg shadow-2xl pb-2 min-w-44 min-h-56">
      <img src={image} alt="imagem da bebida" className="rounded-lg" />
      <h2>{title}</h2>
    </div>
  )
}
import "./Card.css"

export function Card({image, title}){
    return(
        <div className="card">
            <img src={`${image}/preview`} alt="imagem da bebida" />           
            <h2>{title}</h2>
        </div>
    )
}
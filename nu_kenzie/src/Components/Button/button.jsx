 
export default function Botao({func, value, className}){
    return(
        <div >
            <button className={className} onClick={func}>{value}</button>
        </div>
    )
}
export default function Button({type,name,onclick}){
  
    return(
        <button type={type} onClick={onclick}>
            {name}
        </button>
    )
}


export function Input({type,name,placholder}){

    return(
        <input type={type} placholder={placholder}/>
           
        
    )
}
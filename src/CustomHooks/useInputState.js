import { useState } from "react"

const useInputState=(defaultValue=null)=>{
    const [isValue,setValue]=useState(defaultValue);
    const onChange=e=>{
        setValue(e.target.value)
    }
    return{
        isValue,
        onChange,
    }
}
export default useInputState;

import { useEffect } from "react";

function useClickOutside(element, callback){
    useEffect(() => {
        const handleClickOutside = (event) => {
            if(!element.current.contains(event.target)){
                callback()
            }
        }
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    })
}

export  {useClickOutside};
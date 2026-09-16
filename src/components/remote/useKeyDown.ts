import { useEffect } from "react";
import checkKey from "./keys";

export type KeyDownProps = {
    isActive: boolean;
    keyNames: {
        [key: string]: (e: KeyboardEvent) => void 
    }
}


function useKeyDown (props:KeyDownProps) {

    useEffect(() => {

        let timeout = 0;

        const handleKeydown = (e:KeyboardEvent) => {

            let key = checkKey(e);

            if (props.keyNames[key]) {
                props.keyNames[key](e);
            }
        };

        if (props.isActive) {
            window.addEventListener("keydown", handleKeydown);
        } else {
            // console.log("useKeydown cleanup");
            window.removeEventListener("keydown", handleKeydown);
        }

        return () => {
            clearTimeout(timeout);
            window.removeEventListener("keydown", handleKeydown);
        };

    }, [props.isActive,props]);
}

export default useKeyDown
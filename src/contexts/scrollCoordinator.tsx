import { createContext, RefObject } from "react";
/* eslint-disable @typescript-eslint/no-explicit-any */

interface ScrollCoordinatorProps {
    children: JSX.Element, 
}

interface ContextProps {
    addRef: (ref: RefObject<HTMLDivElement>) => void,
    scrollDown: (currentRef: RefObject<HTMLDivElement>) => void,
}

const ScrollCoordinatorContext = createContext<ContextProps | null>({} as ContextProps);

export const ScrollCoordinatorProvider = ({ children }: ScrollCoordinatorProps) => {    

    const refArray: RefObject<HTMLDivElement>[] = [];

    const addRef = (ref: RefObject<HTMLDivElement>) => {
        if(ref.current !== null) {
            if(!refArray.includes(ref)) {
                refArray.push(ref);
            }
        }
    }

    const scrollDown = (currentRef: RefObject<HTMLDivElement>) => {
        const index = refArray.indexOf(currentRef);
        const nextRef = refArray[index + 1]; 
        if(nextRef !== undefined) {
            if(nextRef.current) {
                window.scrollTo({
                    top: nextRef.current.offsetTop,
                    behavior: 'smooth',
                });
            }     
        } else {
                window.scrollTo({
                    top: refArray[0].current?.offsetTop,
                    behavior: 'smooth',
                });
        }
    };
    

    const scroolCordinatorData = { scrollDown, addRef };
    return (
        <ScrollCoordinatorContext.Provider value={scroolCordinatorData}>
            {children}
        </ScrollCoordinatorContext.Provider>
    )
};

export default ScrollCoordinatorContext;
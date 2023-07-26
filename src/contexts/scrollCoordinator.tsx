// import { createContext, useRef} from "react";

// /* eslint-disable @typescript-eslint/no-explicit-any */
// const ScrollCoordinatorContext = createContext<any>({});
// export const ScrollCoordinatorProvider = ({ children }: any ) => {
//     const scrollableSectionRef = useRef(null)
//     const section1 = useRef(null)
//     const section2 = useRef(null)
    
//     const scrollDown = () => {
//         window.scrollTo({
//           top: section1.current.offsetTop,
//           behavior: 'smooth',
//         });
//     };
    

//     const scroolCordinatorData = { scrollDown, scrollableSectionRef, section1, section2 };
//     return (
//         <ScrollCoordinatorContext.Provider value={scroolCordinatorData}>
//             {children}
//         </ScrollCoordinatorContext.Provider>
//     )
// };

// export default ScrollCoordinatorContext;
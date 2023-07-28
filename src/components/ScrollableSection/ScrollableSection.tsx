import { useContext, useRef, useEffect } from 'react'
import Button from '../Button/Button';
import './ScrollableSection.scss';
import ScrollCoordinatorContext from '../../contexts/scrollCoordinator';

interface ScrollableSectionProps {
    children: JSX.Element,
    buttonDirection?: boolean | undefined,
}

const ScrollableSection = ({ children, buttonDirection }: ScrollableSectionProps) => {
    const scrollableSectionRef = useRef(null);
    const context = useContext(ScrollCoordinatorContext);

    useEffect(() => {
        context?.addRef(scrollableSectionRef)
    }, [])


    return (
    <section className='section-container' ref={scrollableSectionRef}>
        {children}
        <Button handleOnClick={() => context?.scrollDown(scrollableSectionRef)} buttonDirection={buttonDirection}/>
    </section>
  )
}

export default ScrollableSection;
import { RefObject } from 'react'
import AboutMeImg from '../../assets/undraw_reading_re_29f8.svg';
import Arrow from '../../svg/keyboard.svg';
import './AboutMe.scss';
import SlideArrow from '../../svg/slide-arrow.svg';
import Lamp from '../../svg/lamp.svg';
import Note from '../../svg/note.svg';
import UpArrow from '../../svg/up-arrow.svg';
import Macbook from '../../svg/macbook.svg';


interface AboutMeProps {
    scrollableSectionRef: RefObject<HTMLDivElement>,
    didClickArrow(): void 
}


const AboutMe = ({ scrollableSectionRef, didClickArrow }: AboutMeProps) => {
  return (
    <section className="aboutme-section" ref={scrollableSectionRef}>
        <div className="aboutme-information-container">
            <img src={Arrow} alt="arrow" className='arrow'/>
            <div className='title-container'>
                <img src={Note} alt="musical note" className='note-image'/>
                <h3 className="aboutme-title">About <span className=" aboutme-title green-text">me</span></h3>
                <img src={Lamp} alt="arrow" className='lamp-image'/>
            </div>
            <p className="aboutme-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. 
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                Curabitur tempus urna at turpis condimentum lobortis.... Read more
            </p>
            <div className='svg-container'>
                <img src={Macbook} alt="macbook" className='macbook-image'/>
                <img src={UpArrow} alt="up arrow" className='uparrow-image'/>
            </div>
        </div>
        <div className="image-container">
            <img src={AboutMeImg} alt="dasd" />
        </div>

        <div className='button-container'>
            <button className='next-button' onClick={() => didClickArrow()}>
                    <img src={SlideArrow} alt="go to next section arrow" />
            </button>
    </div>
    </section>
  )
}

export default AboutMe
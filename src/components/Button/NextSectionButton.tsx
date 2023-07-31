import SlideArrow from '../../svg/slide-arrow.svg';
import './NextSectionButton.scss';

interface ButtonProps {
    handleOnClick: () => void,
    buttonDirection: boolean | undefined,
}
const NextSectionButton = ({ handleOnClick, buttonDirection }: ButtonProps) => {
  return (
    <div className={!buttonDirection ? 'button-container' : 'button-container rotate-button'}>
        <button className='next-button' onClick={handleOnClick}>
            <img src={SlideArrow} alt="go to next section arrow" />
        </button>
    </div>
  )
}

export default NextSectionButton;
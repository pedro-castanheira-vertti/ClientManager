import backIcon from '../../../assets/backIcon.svg';
import './styleBackButton.css'

function BackButton() {
    return (
        <img className='backButton' src={backIcon} alt="Back Page Button" onClick={() => window.history.back()} />
    )
}
export default BackButton
import backIcon from '../../../assets/backIcon.svg';

function BackButton() {
    return (
        <div className='backButton'>
            <button onClick={() => window.history.back()}>
                {/* <img src={backIcon} alt="" /> */}
            </button>
        </div>
    )
}
export default BackButton
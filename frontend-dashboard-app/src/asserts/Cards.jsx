import profilePic from './image.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { faArrowUp, faArrowDown, faComment, faBookmark, faLink, faEllipsisH } from '@fortawesome/free-solid-svg-icons';  
import '../asserts-css/card.css'


function Cards() {

    return (
        <div class="card">
            <div className="title-div">
                <h2 className="card-title">E-commerce Webapp</h2> 
                <FontAwesomeIcon  icon={faEllipsisH} className="icon" />   
            </div> 
         
            <p className="card-description">This is a brief description of the card content.</p>  
            <img src={profilePic} alt="My profile" className="card-image" /> 
            <div className="card-reaction-content">
                <span className='icon-span'>
                <FontAwesomeIcon icon={faArrowUp} className="icon" />  
                <FontAwesomeIcon icon={faArrowDown} className="icon" /> 
                </span> 
                <FontAwesomeIcon icon={faComment} className="icon" />  
                <FontAwesomeIcon icon={faBookmark} className="icon" />  
                <FontAwesomeIcon icon={faLink} className="icon" />
            </div>  
        </div>
    )
}
export default Cards

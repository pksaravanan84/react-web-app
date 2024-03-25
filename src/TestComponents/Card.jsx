import PropTypes from 'prop-types'
import profilePic from './assets/sam.jpg';

function Card(props) {
    return (
        <div className="card">
            <img className='card-image' src={profilePic} alt="profile picture"></img>
            <h1>{props.name} </h1>
            <p>{props.description} </p>
            <p>Experience: {props.experience}</p>
        </div>
    );

}
Card.propTypes = {
    name: PropTypes.string,
    description:PropTypes.string,
    experience: PropTypes.number
}

Card.defaultProps = {
    name:"Saravanan K",
    description:"Description missing",
    experience: 40
}

export default Card;
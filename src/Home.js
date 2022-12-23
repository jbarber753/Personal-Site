import { Link } from 'react-router-dom';
import './style/Home.css';

const Home = ({current, setCurrent}) => {

    const changeCurrent = event => {
        setCurrent(event.target.id);
        sessionStorage.setItem('current', event.target.id);
    }

    return (
        <div id='home'>
            <div id='name-container'>
                <span id="name">Judah Barber</span>
                <span id='description'>Web Developer</span>
                <div id='link-wrapper'>
                    <Link to='/aboutme' className='about-link' id='link-2' onClick={changeCurrent}>More about me →</Link>
                    <Link to='/portfolio' className='about-link' id='link-3' onClick={changeCurrent}>See my portfolio →</Link>
                </div>
            </div>
            <img src='https://drive.google.com/uc?id=1ZMwv9HrcYOIwHDkuYPhcyQRliiW0anAZ' alt='Portrait' id='home-pic'></img>
        </div>
    )
}

export default Home;
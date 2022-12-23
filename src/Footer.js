import './style/Footer.css';

const Footer = () => {
    return (
        <div id="footer">
            <span id='email'>judahbarber@gmail.com</span>
            <div id='logo-wrapper-wrapper'>
                <a href="https://linkedin.com/in/judah-barber/" rel='noreferrer' target="_blank" className='logo-wrapper'>
                    <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="Linkedin" className='icon'/>
                </a>
                <a href="https://github.com/jbarber753" rel='noreferrer' target="_blank" className='logo-wrapper'>
                    <img src="https://www.pngkey.com/png/full/178-1787366_coming-soon-github-white-icon-png.png" alt="Github" className='icon'/>
                </a>
            </div>
        </div>
    )
}

export default Footer;
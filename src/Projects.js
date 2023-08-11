import React, { useState,Fragment } from 'react';
import './style/Projects.css';

const Projects = () => {
    const [view, setView] = useState(1);

    const forwardView = event => {
        if (view === 1){
            setView(2);
        }
        else if (view === 2){
            setView(3);
        }
        else if (view === 3){
            setView(4);
        }
        else {
            setView(1);
        }
    }

    const backView = event => {
        if (view === 1) {
            setView(4);
        }
        else if (view === 2)
            setView(1);
        else if (view === 3){
            setView(2)
        }
        else {
            setView(3);
        }
    }

    const checkView = (view) => {
        switch(view){
            case 1:
                return (
                    <Fragment>
                        <span id='intro'>Mock League:</span>
                        <div id='pic-container'>
                            <span className="material-symbols-outlined" id='arrows' onClick={backView}>arrow_back_ios</span>
                            <img src='https://lh3.googleusercontent.com/drive-viewer/AITFw-yljAUfqcTaP0Y-BaFc3LGH95E3IV8pJUGp_sI3KNY4WD6NQukoUjtq4GaqHe_Z2ZYc6WNkig1vRBZvekWQDxqoEsLwOQ=s1600' alt='football-app' className='project-pic'></img>
                            <span className="material-symbols-outlined" id='arrows' onClick={forwardView}>arrow_forward_ios</span>
                        </div>
                        <a className='site-link' href='http://3.145.111.135/' rel='noreferrer' target='_blank'>Link to site</a>
                        <a className='site-link' href='https://github.com/jbarber753/BP-Foundations-Capstone' rel='noreferrer' target='_blank'>Github repository</a>
                        <span className='project-description'>This is a mock fantasy football web app. It is built with HTML, CSS, and JavaScript. Additionally, it uses Axios, a PostgreSQL database, and Express.js. User passwords are hashed using bcrypt.</span>
                        <div id='counter'>
                            <span className="material-symbols-outlined" id='dots'>radio_button_checked</span>
                            <span className="material-symbols-outlined" id='dots'>radio_button_unchecked</span>
                            <span className="material-symbols-outlined" id='dots'>radio_button_unchecked</span>
                            <span className="material-symbols-outlined" id='dots'>radio_button_unchecked</span>
                        </div>
                    </Fragment>
                );
                case 2:
                return (
                    <Fragment>
                        <span id='intro'>camelCases:</span>
                        <div id='pic-container'>
                            <span className="material-symbols-outlined" id='arrows' onClick={backView}>arrow_back_ios</span>
                            <img src='https://drive.google.com/uc?id=1zmBpN-YnQ7UlJmB3mbc2TWNmJy1BTSG3' alt='camel art vendor' className='project-pic'></img>
                            <span className="material-symbols-outlined" id='arrows' onClick={forwardView}>arrow_forward_ios</span>
                        </div>
                        <a className='site-link' href='https://git-gud-grace-shopper.herokuapp.com/' rel='noreferrer' target='_blank'>Link to site</a>
                        <a className='site-link' href='https://github.com/Team-Git-Gud-Grace-Shopper/Grace-Shopper-2' rel='noreferrer' target='_blank'>Github repository</a>
                        <span className='project-description'>This is a demo e-commerce website built using JavaScript and the React library. Additionally, it uses a PostgreSQL database and a RESTful API built with Express.js.</span>
                        <div id='counter'>
                            <span className="material-symbols-outlined" id='dots'>radio_button_unchecked</span>
                            <span className="material-symbols-outlined" id='dots'>radio_button_checked</span>
                            <span className="material-symbols-outlined" id='dots'>radio_button_unchecked</span>
                            <span className="material-symbols-outlined" id='dots'>radio_button_unchecked</span>
                        </div>
                    </Fragment>
                );
            case 3:
                return (
                    <Fragment>
                        <span id='intro'>Stranger's Things:</span>
                        <div id='pic-container'>
                            <span className="material-symbols-outlined" id='arrows' onClick={backView}>arrow_back_ios</span>
                            <img src='https://drive.google.com/uc?id=1xL4bkgXFPAandcgFNqRYLGPDZtbL30gu' alt='craigslist-lite' className='project-pic'></img>
                            <span className="material-symbols-outlined" id='arrows' onClick={forwardView}>arrow_forward_ios</span>
                        </div>
                        <a className='site-link' href='https://gleeful-gumdrop-e05974.netlify.app/' rel='noreferrer' target='_blank'>Link to site</a>
                        <a className='site-link' href='https://github.com/jbarber753/StrangersThings' rel='noreferrer' target='_blank'>Github repository</a>
                        <span className='project-description'>This is a demo "Craigslist-lite" advertisement website. It is built using JavaScript and the React library, and it uses its own RESTful API.</span>
                        <div id='counter'>
                            <span className="material-symbols-outlined" id='dots'>radio_button_unchecked</span>
                            <span className="material-symbols-outlined" id='dots'>radio_button_unchecked</span>
                            <span className="material-symbols-outlined" id='dots'>radio_button_checked</span>
                            <span className="material-symbols-outlined" id='dots'>radio_button_unchecked</span>
                        </div>
                    </Fragment>
                );
                case 4:
                    return (
                        <Fragment>
                            <span id='intro'>Mancala:</span>
                            <div id='pic-container'>
                                <span className="material-symbols-outlined" id='arrows' onClick={backView}>arrow_back_ios</span>
                                <img src='https://drive.google.com/uc?id=1XoMjWqAIWQjofVpG2My_O5dWKOJyYHkv' alt='mancala' className='project-pic'></img>
                                <span className="material-symbols-outlined" id='arrows' onClick={forwardView}>arrow_forward_ios</span>
                            </div>
                            <a className='site-link' href='https://monumental-donut-f10ceb.netlify.app/' rel='noreferrer' target='_blank'>Link to site</a>
                            <a className='site-link' href='https://github.com/jbarber753/mancala' rel='noreferrer' target='_blank'>Github repository</a>
                            <span className='project-description'>This is a web-based mancala board game. It was built with vanilla JavaScript.</span>
                            <div id='counter'>
                                <span className="material-symbols-outlined" id='dots'>radio_button_unchecked</span>
                                <span className="material-symbols-outlined" id='dots'>radio_button_unchecked</span>
                                <span className="material-symbols-outlined" id='dots'>radio_button_unchecked</span>
                                <span className="material-symbols-outlined" id='dots'>radio_button_checked</span>
                            </div>
                        </Fragment>
                    );
            default:
                return (
                    <span>Uh oh: if you're reading this, something went terribly wrong!</span>
                )
        }
    }

    return (
        <div id='projects'>
            {checkView(view)}
        </div>
    )
}

export default Projects;
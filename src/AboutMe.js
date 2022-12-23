import React, { useState,Fragment } from 'react';
import './style/AboutMe.css';

const AboutMe = () => {
    const [view, setView] = useState(1);

    const forwardView = event => {
        if (view === 1){
            setView(2);
        }
        else if (view === 2){
            setView(3);
        }
        else {
            setView(1);
        }
    }

    const backView = event => {
        if (view === 1) {
            setView(3);
        }
        else if (view === 2)
            setView(1);
        else {
            setView(2);
        }
    }

    const checkView = (view) => {
        switch(view){
            case 1:
                return (
                    <Fragment>
                        <span id='intro'>Here are a few things about me:</span>
                        <div id='pic-container'>
                            <span className="material-symbols-outlined" id='arrows' onClick={backView}>arrow_back_ios</span>
                            <img src='https://images.pexels.com/photos/1550648/pexels-photo-1550648.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='books' className='about-pic'></img>
                            <span className="material-symbols-outlined" id='arrows' onClick={forwardView}>arrow_forward_ios</span>
                        </div>
                        <span className='aboutme-text'>I am an avid reader! Much of my time is spent enjoying works of fiction, particularly those of the science-fiction and fantasy genres. Among my favorite authors in this category are J.R.R. Tolkien, Robert Jordan, Brandon Sanderson, and Frank Herbert. I enjoy plenty of nonfiction as well. History, being the subject of my college degree, is my favorite topic in this category. In addition, I also spend time reading about philosphy, science, and current events. Any good reading with a cup of delicious coffee sounds like a great afternoon to me!</span>
                        <div id='counter'>
                            <span className="material-symbols-outlined" id='dots'>radio_button_checked</span>
                            <span className="material-symbols-outlined" id='dots'>radio_button_unchecked</span>
                            <span className="material-symbols-outlined" id='dots'>radio_button_unchecked</span>
                        </div>
                    </Fragment>
                );
            case 2:
                return (
                    <Fragment>
                        <span id='intro'>Here are a few things about me:</span>
                        <div id='pic-container'>
                            <span className="material-symbols-outlined" id='arrows' onClick={backView}>arrow_back_ios</span>
                            <img src='https://thumbs.dreamstime.com/b/sports-tools-balls-shoes-ground-108686133.jpg' alt='sports' className='about-pic'></img>
                            <span className="material-symbols-outlined" id='arrows' onClick={forwardView}>arrow_forward_ios</span>
                        </div>
                        <span className='aboutme-text'>Since I was very young, I have always enjoyed both watching and playing a variety of sports. I especially enjoy baseball and football, and I watch both every season (which conveniently means I have something to watch year-round!). To this day, I still play recreational softball and flag football whenever I can. I've also been known to play plenty of ultimate frisbee and disc golf when the opportunity presents itself!</span>
                        <div id='counter'>
                            <span className="material-symbols-outlined" id='dots'>radio_button_unchecked</span>
                            <span className="material-symbols-outlined" id='dots'>radio_button_checked</span>
                            <span className="material-symbols-outlined" id='dots'>radio_button_unchecked</span>
                        </div>
                    </Fragment>
                );
            case 3:
                return (
                    <Fragment>
                        <span id='intro'>Here are a few things about me:</span>
                        <div id='pic-container'>
                            <span className="material-symbols-outlined" id='arrows' onClick={backView}>arrow_back_ios</span>
                            <img src='https://media.istockphoto.com/photos/board-games-detail-picture-id471254945?b=1&k=20&m=471254945&s=612x612&w=0&h=4KFKjtXONfzHunfwrXnEceA8wxDtPUTpRUukx36TMNY=' alt='board games' className='about-pic'></img>
                            <span className="material-symbols-outlined" id='arrows' onClick={forwardView}>arrow_forward_ios</span>
                        </div>
                        <span className='aboutme-text'>These are all other longtime hobbies of mine. Video games in particular are perhaps what first cultivated my fascination with programming! I'm quite the fan of Halo, The Elder Scrolls, Minecraft, and a slew of strategy games. Aside from video games, I'm also quite the board game enthusiast. This is an interest that developed early on in my life with titles such as Clue, Ticket to Ride, and Catan. That list has since expanded to include games like Scythe, Terraforming Mars, Betrayal at House on the Hill, and many others! I'll also play just about any card game in existence, from poker or hearts to go-fish or solitaire.</span>
                        <div id='counter'>
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
        <div id='aboutme'>
            {checkView(view)}
        </div>
    )
}

export default AboutMe;
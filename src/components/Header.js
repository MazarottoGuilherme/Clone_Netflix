import React from "react";
import Header from './Header.css'

export default({black}) =>{
    return(
        <header className={black ? 'black' : ''}>
            <div className='header--logo'>
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/330px-Netflix_2015_logo.svg.png" alt="Netflix"/>
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F34%2F62%2Fd2%2F3462d27440aa255b1c314ff16f4032b4.png&f=1&nofb=1&ipt=a60e75acb73d3f27a560e9cf23b4c97bb0357b34b83d56151f56845659f16e66&ipo=images" alt="Usuário"/>
                </a>
            </div>
        </header>
    );
}
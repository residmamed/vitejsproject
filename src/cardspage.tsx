import React from 'react'

function Cardspage() {
    return (
        <div className='cardspage'>
            <div className='cardspage-titlezone'>
                <p className='cardspage-title'>THE BAND</p>
                <p className='cardspage-sentence'>We love music</p>
                <p className='cardspage-text'>We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br />tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco <br />laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum <br />dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit<br /> anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut<br /> enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className='cardspage-cards'>
                       <div className='cardspage-card'>
                          <p className='img-name'>Name</p>
                   <img className='cardspage-img' src="https://www.w3schools.com/w3images/bandmember.jpg" alt="" />
                 </div>
                <div className='cardspage-card'>
                    <p className='img-name'>Name</p>
                    <img className='cardspage-img' src="https://www.w3schools.com/w3images/bandmember.jpg" alt="" />
                </div>
                <div className='cardspage-card'>
                    <p className='img-name'>Name</p>
                    <img className='cardspage-img' src="https://www.w3schools.com/w3images/bandmember.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Cardspage

import React from 'react'

function Lastpage() {
    return (
        <div className='lastpage'>
            <p className='cardspage-title'>CONTACT</p>
            <p className='cardspage-sentence'>Fan? Drop a note!</p>
            <div className='form'>
                <div>
                    <p> Chicago, US</p>
                    <p> Phone: +00 151515</p>
                    <p> Email: mail@mail.com</p>
                </div>
                <div style={{paddingTop:'32px'}}>
<div className='inputs'>
    <input className='input'style={{marginRight:"16px "}} placeholder='Name' type="text" />
    <input className='input' placeholder='Email' type="text" />
</div>
                <input className='input2' placeholder="Message" type="text" />

             <div style={{display:'flex',justifyContent:"flex-end"}}>
                 <a className='lastpage-btn' href="">SEND</a>
                 </div>
                </div>
            </div>
        </div>
    )
}

export default Lastpage

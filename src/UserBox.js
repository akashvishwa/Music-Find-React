import React from 'react'

export default function UserBox({ userName }) {
    return (
        <div style={{position:'fixed',bottom:'20vh',width:'100%'}}>
        <div style={{display:'grid',justifyItems:'end'}}>
            <div style={{height:'5vh',width:'12vw'}}>
            <div style={{ display: 'grid', justifyContent: 'center', paddingBottom: '10px' }}>
                <img src='https://www.w3schools.com/howto/img_avatar.png' style={{ borderRadius: '50%', maxHeight: '50px' }}></img>
            </div>

            
            <div className="alert alert-secondary" role="alert" style={{marginLeft:'40px',marginRight:'20px'}}>
                Welcome {userName}!
                </div>
            </div>

        </div>
        </div>
    )
}

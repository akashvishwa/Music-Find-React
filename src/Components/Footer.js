import React from 'react'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Footerc(props) {
    return (
        <div>
        <div style={{position:'fixed',bottom:0,width:'100%',margin:0,padding:0}}>
        <div style={{display:'grid',gridTemplateColumns:'1fr', justifyContent:'center'}}>
            <div></div>
            <div className="alert" role="alert" 
            style={
                {width:'100%',
                margin:0,
                paddingLeft:'30px',
                padding:0,
                textAlign:'center',
                background:'#0d0d0d',
                color:'white',
                
                }}>
            &copy; : {props.yearCpright}  {props.tagLine} 

            </div>
            <div></div>
        </div>
        </div>
        </div>
    )
}

Footerc.defaultProps={
    tagLine:"Demo tagline",
    yearCpright:2000
}

Footerc.propTypes = {
    tagLine: PropTypes.string,
    yearCpright: PropTypes.number,
}
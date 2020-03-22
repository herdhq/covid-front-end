import React, { Component } from 'react';
import './Footer.scss'

class Footer extends Component {
    render() {
        return (
            <div style={{position:'fixed',bottom:'0',backgroundColor:'#000000',width:'100vw',textAlign:'center',height:'40px'}}>
                <div style={{paddingTop:'10px',fontSize:'18px',fontWeight:400, color:'#ffffff'}}>
                    Powered By | THE HERD LABS
                </div>
            </div>
        );
    }
}

export default Footer;


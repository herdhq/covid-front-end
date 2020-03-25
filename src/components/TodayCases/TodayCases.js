import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class TodayCases extends Component {
    render() {
        return (
            // <div style={{width:'100%', textAlign:'center', fontSize:'22px', marginBottom:'90px'}}>
            //     <button type='button' style={{borderRadius:'50%', backgroundColor:'#3CB371', width:'250px', height:'250px', textDecoration:'none', border:'none'}}>
            //         <div>
            //             <h3>Today's Cases</h3>
            //         </div>
            //         <div style={{color:'red', fontSize:'46px', fontWeight:600}}>29</div>
            //     </button>
            // </div>
            <div style={{height:'1300px'}}>
                {'Contagion Graph'}
                <div style={{height:'700px'}}>
                    <iframe src='https://cluster.covid19india.org/' width={'100%'} height={'100%'}></iframe>
                </div>
            </div>
        );
    }
}

export default TodayCases;
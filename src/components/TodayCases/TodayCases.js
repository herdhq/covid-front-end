import React, { Component } from 'react';

class TodayCases extends Component {
    render() {
        return (
            <div style={{width:'100%', textAlign:'center', fontSize:'22px', marginBottom:'90px'}}>
                <button type='button' style={{borderRadius:'50%', backgroundColor:'#3CB371', width:'250px', height:'250px', textDecoration:'none', border:'none'}}>
                    <div>
                        <h3>Today's Cases</h3>
                    </div>
                    <div style={{color:'red', fontSize:'46px', fontWeight:600}}>29</div>
                </button>
            </div>
        );
    }
}

export default TodayCases;


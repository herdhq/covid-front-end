import React, { Component } from 'react';
import { ResponsiveLine } from '@nivo/line'
import DATA from './constants.js';
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
                <div style={{height:'600px'}}>
                <ResponsiveLine
                    data={DATA}
                    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                    xScale={{ type: 'point' }}
                    yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                        orient: 'bottom',
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'transportation',
                        legendOffset: 36,
                        legendPosition: 'middle'
                    }}
                    axisLeft={{
                        orient: 'left',
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'count',
                        legendOffset: -40,
                        legendPosition: 'middle'
                    }}
                    colors={{ scheme: 'nivo' }}
                    pointSize={10}
                    pointColor={{ theme: 'background' }}
                    pointBorderWidth={2}
                    pointBorderColor={{ from: 'serieColor' }}
                    pointLabel="y"
                    pointLabelYOffset={-12}
                    useMesh={true}
                    legends={[
                        {
                            anchor: 'bottom-right',
                            direction: 'column',
                            justify: false,
                            translateX: 100,
                            translateY: 0,
                            itemsSpacing: 0,
                            itemDirection: 'left-to-right',
                            itemWidth: 80,
                            itemHeight: 20,
                            itemOpacity: 0.75,
                            symbolSize: 12,
                            symbolShape: 'circle',
                            symbolBorderColor: 'rgba(0, 0, 0, .5)',
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemBackground: 'rgba(0, 0, 0, .03)',
                                        itemOpacity: 1
                                    }
                                }
                            ]
                        }
                    ]}
                />
                </div>
            </div>
        );
    }
}

export default TodayCases;
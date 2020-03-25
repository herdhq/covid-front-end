import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ResponsiveLine } from '@nivo/line'
// import DATA from './constants.js';
import axios from 'axios';

class CountrywiseComparison extends Component {
    constructor() {
        super();
        this.state = {
          graph_india: [],
          graph_usa: [],
          graph_italy: []
        }
    }

    componentDidMount() {
        axios.get(`https://theherdlabs.com/api/v1/country/graph/india/date`)
            .then(res => {
                const graph_india = res.data;
                this.setState({ graph_india});
            })
        axios.get(`https://theherdlabs.com/api/v1/country/graph/usa/date`)
            .then(res => {
                const graph_usa = res.data;
                this.setState({graph_usa});
            })
        axios.get(`https://theherdlabs.com/api/v1/country/graph/italy/date`)
            .then(res => {
                const graph_italy = res.data;
                this.setState({graph_italy});
            })
    }

    render() {
        return (
            <div id='CountrywiseComparison' style={{margin:' 2px 20px 50px 20px'}}>
                <Row>
                    <Col xs={12}>
                        <h3 style={{paddingLeft:'5px'}}>Countrywise Comparison</h3>
                        <p>Weekly data of corona starting from 2020-01-22</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} lg={4}>
                        <div style={{height:'550px', fontSize:'20px', marginTop:'15px'}}>
                            {'India'}
                            <div style={{height:'480px', backgroundColor:'#ffffff', border:'1px solid #008000', boxShadow:'2px 2px 4px 2px #888888'}}>
                                <ResponsiveLine
                                    data={this.state.graph_india}
                                    margin={{ top: 30, right: 80, bottom: 60, left: 75 }}
                                    xScale={{ type: 'point' }}
                                    yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false, reverse: false }}
                                    axisTop={null}
                                    axisRight={null}
                                    axisBottom={{
                                        orient: 'bottom',
                                        tickSize: 5,
                                        tickPadding: 5,
                                        tickRotation: 0,
                                        legend: 'Weeks',
                                        legendOffset: 42,
                                        legendPosition: 'middle'
                                    }}
                                    axisLeft={{
                                        orient: 'left',
                                        tickSize: 5,
                                        tickPadding: 5,
                                        tickRotation: 0,
                                        legend: 'Infections',
                                        legendOffset: -60,
                                        legendPosition: 'middle'
                                    }}
                                    colors={{ scheme: 'nivo' }}
                                    pointSize={15}
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
                    </Col>
                    <Col xs={12} lg={4}>
                    <div style={{height:'550px', fontSize:'20px', marginTop:'15px'}}>
                            {'USA'}
                            <div style={{height:'480px', backgroundColor:'#ffffff', border:'1px solid #008000', boxShadow:'2px 2px 4px 2px #888888'}}>
                                <ResponsiveLine
                                    data={this.state.graph_usa}
                                    margin={{ top: 30, right: 80, bottom: 60, left: 75 }}
                                    xScale={{ type: 'point' }}
                                    yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false, reverse: false }}
                                    axisTop={null}
                                    axisRight={null}
                                    axisBottom={{
                                        orient: 'bottom',
                                        tickSize: 5,
                                        tickPadding: 5,
                                        tickRotation: 0,
                                        legend: 'Weeks',
                                        legendOffset: 42,
                                        legendPosition: 'middle'
                                    }}
                                    axisLeft={{
                                        orient: 'left',
                                        tickSize: 5,
                                        tickPadding: 5,
                                        tickRotation: 0,
                                        legend: 'Infections',
                                        legendOffset: -60,
                                        legendPosition: 'middle'
                                    }}
                                    colors={{ scheme: 'nivo' }}
                                    pointSize={15}
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
                    </Col>
                    <Col xs={12} lg={4}>
                        <div style={{height:'550px', fontSize:'20px', marginTop:'15px'}}>
                            {'Italy'}
                            <div style={{height:'480px', backgroundColor:'#ffffff', border:'1px solid #008000', boxShadow:'2px 2px 4px 2px #888888'}}>
                                <ResponsiveLine
                                    data={this.state.graph_italy}
                                    margin={{ top: 30, right: 80, bottom: 60, left: 75 }}
                                    xScale={{ type: 'point' }}
                                    yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false, reverse: false }}
                                    axisTop={null}
                                    axisRight={null}
                                    axisBottom={{
                                        orient: 'bottom',
                                        tickSize: 5,
                                        tickPadding: 5,
                                        tickRotation: 0,
                                        legend: 'Weeks',
                                        legendOffset: 42,
                                        legendPosition: 'middle'
                                    }}
                                    axisLeft={{
                                        orient: 'left',
                                        tickSize: 5,
                                        tickPadding: 5,
                                        tickRotation: 0,
                                        legend: 'Infections',
                                        legendOffset: -60,
                                        legendPosition: 'middle'
                                    }}
                                    colors={{ scheme: 'nivo' }}
                                    pointSize={15}
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
                    </Col>
                </Row>
            </div>
        );
    }
}

export default CountrywiseComparison;
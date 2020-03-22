import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import NEWS_NAMES from './constants.js';

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            news_stack : [],
        }
    }

    componentDidMount() {
        axios.get(`https://theherdlabs.com/api/v1/news/${this.state.count}`)
            .then(res => {
                const new_news_stack = res.data.data;
                const old_news_stack = this.state.news_stack;
                old_news_stack.push(...new_news_stack)
                this.setState({ news_stack: old_news_stack });
                this.setState({count: this.state.count + 1 })
            })
            .catch(error => {
                return (
                    <Alert variant='warning'>
                        Thats all folks...!
                    </Alert>
                )
            })
    }

    

    handleLoadMore = () => {
        this.componentDidMount()
    }

    render() {
        return (
            <div id='News' style={{margin:'30px 20px 150px 20px'}}>
                <Row>
                    <h3 style={{paddingLeft:'22px'}}>News</h3>
                </Row>
                <Row>
                    {this.state.news_stack.map((item, index) => (
                        <Col xs={12} md={6} lg={3} key={index}>
                            <Card bg='dark' text='white' style={{ boxShadow:'2px 2px 4px 4px #d9d9d9', marginBottom:'20px', height:'450px'}}>
                                <Card.Img variant="top" src={item.image} height={'200px'}/>
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>
                                        <div style={{fontSize:'12px'}}>
                                            Source: <span>{NEWS_NAMES[item.source]}</span>
                                            <br />
                                            Updated on: <span>{item.timestamp}</span>
                                        </div>
                                    </Card.Text>
                                    <Button variant="outline-primary" onClick={() => (window.open(item.url))}>Read More...</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <Row>
                    <Button  variant="secondary" size="lg" onClick={this.handleLoadMore}>Load More News ...</Button>
                </Row>
            </div>
        );
    }
}

export default News;


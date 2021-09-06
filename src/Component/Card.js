import { Component } from "react";
import {Card,ListGroup} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Ccard extends Component{
    render(){
        return(
            <>
            <Card style={{ width: '18rem', margin: '10px'}}>
              <Card.Header>{this.props.userid}</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>{this.props.id}</ListGroup.Item>
                <ListGroup.Item>{this.props.title}</ListGroup.Item>
                <ListGroup.Item>{this.props.body}</ListGroup.Item>
              </ListGroup>
            </Card>
            </>
        )
    }
}
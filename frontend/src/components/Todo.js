import React, { Component} from 'react';
import {Form,Col, Button} from 'react-bootstrap'
import '../App.css'
import styled from 'styled-components'
import Layout from './Layout'

const Styles = styled.div`
.button-submit{
	background-color: #0099ff;
	margin-top: 20px;
	margin-bottom: 50px;
	width: 300px;

}

  
`


class Todo extends Component {

    constructor(props) {
        super(props);
        this.state = {
        	formData: {
        		'task': '',
        		'date': '',
        		'complete': false
        	}
        }
    }
    handleChange = (event) => {
	    const value = event.target.value;
	    const name = event.target.name;
	    var formData = this.state.formData;
	    formData[name] = value;
	    this.setState({
	      formData
	    });
	}

	submitHandler = (event) => {
		
		const formData = this.state.formData;

		fetch('http://127.0.0.1:5000/todo', {
		  method: 'POST', // or 'PUT'
		  headers: {
		    'Content-Type': 'application/json',
		  },
		  body: JSON.stringify(formData),
		})
	}

    render() {
    	const formData = this.state.formData;
        return (
        	<React.Fragment>
        	<Layout>
        	<Styles>
        	<Form onSubmit={this.submitHandler}>
			  <Form.Row>
			    <Col>
			      <Form.Control placeholder="Task" name='task' value={formData.task} onChange={this.handleChange} />
			    </Col>
			    <Col>
			      <Form.Control placeholder="Deadline" name='date' value={formData.date} onChange={this.handleChange} />
			    </Col>
			  </Form.Row>
			  <div className='text-center'>
			  <Button className='button-submit' variant="primary" type="submit">
			    Submit
			  </Button>
			  </div>
			</Form>
			</Styles>
			</Layout>
			</React.Fragment>
            
        );
    }
}

export default Todo;


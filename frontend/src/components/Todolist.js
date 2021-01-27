import React, {Component} from 'react';
import Todo from './Todo.js'
import {Container, Row, Col, Button} from 'react-bootstrap'
import styled from 'styled-components'
import Layout from './Layout'

const Styles = styled.div`
.button-del{
  margin-left: 100px;
}
h1{
  text-align: center;
  margin-top:100px;
}

`


class TodoList extends Component {


    constructor(props) {
        super(props);
        this.state = {
          todolist: []
        }
    }
    componentDidMount() {
    fetch("http://0.0.0.0:5000/todolist")
      .then(res => res.json())
      .then(json => {
          this.setState({
            todolist: json.todoList
          })
        })
    }
    handleDelete(id){
      const url = 'http://127.0.0.1:5000/todo/'+id;
      fetch(url, {
      method: 'DELETE', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      }})
      const filtered = this.state.todolist.filter(todos => todos.id !== id)
      console.log(filtered);
      this.setState({
        todolist: filtered
      })
      

    }


    

    render() {
      var {todolist} = this.state;
        return (
          <React.Fragment>
          <Layout>
          <Styles>
            <h1> TODO LIST </h1>
            <Container className='container-body'>
              <Row lg={12}>
                <Col>
                  <Todo/>
                </Col>
              </Row>
              <Row lg={12}>
                <Col>
                  <ol>
                    {todolist.map(todo => (
                      <li key={todo.id}> {todo.task} - {todo.date}
                      <div className='text-right'>
                      <Button variant='danger' className='button-del' onClick={() => this.handleDelete(todo.id)}> Delete </Button>
                      </div>
                      <hr/>
                      </li>
                      )
                    )}
                  </ol>
                </Col>
              </Row>
            </Container>
            </Styles>
            </Layout>
          </React.Fragment>
            
        );
    }
}


export default TodoList;

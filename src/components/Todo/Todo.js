import React, { Component } from 'react';
import TodoItems from './TodoItems';

export default class Todo extends Component {
    constructor(props){
        super(props);
        this.state = {
          data: [
            {
              modalNum : "1",
              text : "Design a nice theme",
              badge : "4 mins",
              bdgColor : "danger"
            },
            {
              modalNum : "2",
              text:"Make the theme responsive",
              badge:"4 hours",
              bdgColor : "info"
            },
            {
              modalNum : "3",
              text:"Let theme shine like a star",
              badge:"1 day",
              bdgColor : "warning"
            },
            {
              modalNum : "4",
              text:"Check your messages and notifications",
              badge:"1 week",
              bdgColor : "primary"
            },
            {
              modalNum : "5",
              text:"Let theme shine like a star",
              badge:"2 month",
              bdgColor : "secondary"
            },
            {
              modalNum : "6",
              text:"Let's Go To the Market",
              badge:"2 month",
              bdgColor : "success"
            }
          ],
          todoTitle: ""
        }
        this.handleClick = this.handleClick.bind(this);
        this.todoTitleHandler = this.todoTitleHandler.bind(this);
    }
    handleClick(event){
      event.preventDefault();
      // console.log("clicked on add item");
      // console.log(event);
      // console.log("submited value : "+this.state.todoTitle);
      // console.log("this.state.data : "+(Number(this.state.data[this.state.data.length-1].modalNum)+1));
      this.setState(
        {
          data: [...this.state.data,{
            modalNum : (Number(this.state.data[this.state.data.length-1].modalNum)+1).toString(),
            text:this.state.todoTitle,
            badge:"no time",
            bdgColor : "success"
          }]
        }
      )
      this.setState({todoTitle: ""});
    }
    todoTitleHandler(event){
      this.setState({todoTitle: event.target.value});
    }
    render() {
        return (
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">
                  <i className="ion ion-clipboard mr-1" />
                  To Do List
                </h3>
                <div className="card-tools">
                  <ul className="pagination pagination-sm">
                    <li className="page-item"><a href="/" className="page-link">«</a></li>
                    <li className="page-item"><a href="/" className="page-link">1</a></li>
                    <li className="page-item"><a href="/" className="page-link">2</a></li>
                    <li className="page-item"><a href="/" className="page-link">3</a></li>
                    <li className="page-item"><a href="/" className="page-link">»</a></li>
                  </ul>
                </div>
              </div>
              {/* /.card-header */}
              <div className="card-body">
                <ul className="todo-list" data-widget="todo-list" id="todolist">
                  {this.state.data.map((element) => {
                    return <TodoItems 
                              key = {element.modalNum}
                              modalNum = {element.modalNum}
                              text = {element.text}
                              badge = {element.badge}
                              bdgColor = {element.bdgColor}
                            />
                  })}
                  
                </ul>
              </div>
              {/* /.card-body */}
              <div className="card-footer clearfix">
              <form action="#" method="post" onSubmit={this.handleClick}>
                <div className="input-group">
                  <input type="text" value={this.state.todoTitle} name="message" placeholder="What to do..." className="form-control" onChange={this.todoTitleHandler}/>
                  <span className="input-group-append">
                    <button type="submit" className="btn btn-primary" >
                      <i className="fas fa-plus mr-1"></i> 
                      ADD Item
                    </button>
                  </span>
                </div>
              </form>
              </div>
              
            </div>
        )
    }
}
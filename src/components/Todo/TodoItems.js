import React, { Component } from 'react';
import TodoDefaultModal from "./TodoDefaultModal";


export default class TodoItems extends Component {
    
    render() {
        return (
            <>
                
                <li>
                    {/* drag handle */}
                    <span className="handle">
                        <i className="fas fa-ellipsis-v" />
                        <i className="fas fa-ellipsis-v" />
                    </span>
                    {/* checkbox */}
                    <div className="icheck-primary d-inline ml-2">
                        <input type="checkbox" defaultValue name={`todo${this.props.modalNum.toString()}`} id={`todoCheck${this.props.modalNum.toString()}`}/>
                        <label htmlFor={`todoCheck${this.props.modalNum.toString()}`} />
                    </div>
                    {/* todo text */}
                    <span className="text" ref="text">{this.props.text}</span>
                    {/* Emphasis label */}
                    <small className={`badge badge-${this.props.bdgColor || 'danger'}`}><i className="far fa-clock" /> {this.props.badge}</small>
                    {/* General tools such as edit or delete*/}
                    <div className="tools">
                        <font style={{fontSize: "20px", cursor: "pointer"}}><i class="fas fa-info-circle" data-toggle="modal" data-target={`#modal-default-${this.props.modalNum}`}/></font>
                        <i className="fas fa-trash-o" />
                    </div>
                </li>
                <TodoDefaultModal text={this.props.text} modalNum={this.props.modalNum} color={this.props.bdgColor}/>
          </>
        )
    }
}

import React, { Component } from 'react';
import { InlineDatePicker } from "react-tempusdominus-bootstrap";

export default class Calendar extends Component {
    render() {
        return (
            <div className="card bg-gradient-success overflow-hidden">
              <div className="card-header border-0">
                <h3 className="card-title">
                  <i className="far fa-calendar-alt mr-1" />
                  Calendar
                </h3>
                {/* tools card */}
                <div className="card-tools">
                  {/* button with a dropdown */}
                  <div className="btn-group">
                    
                      <button className="btn btn-success btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fas fa-bars"></i>
                      </button>
                      <div className="dropdown-menu" role="menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="/">Add new event</a>
                        <a className="dropdown-item" href="/">Clear events</a>
                        <div class="dropdown-divider"></div>
                        <a className="dropdown-item" href="/">View calendar</a>
                      </div>
                    
                  </div>

                  <button type="button" className="btn btn-success btn-sm" data-card-widget="collapse">
                    <i className="fas fa-minus" />
                  </button>
                  <button type="button" className="btn btn-success btn-sm" data-card-widget="remove">
                    <i className="fas fa-times" />
                  </button>
                </div>
                {/* /. tools */}
              </div>
              {/* /.card-header */}
              <div className="card-body pt-0">
                {/*The calendar */}
                {/* <div id="calendar" style={{width: '100%'}} /> */}
                <InlineDatePicker id="calendar" format="L"/>
              </div>
              {/* /.card-body */}
            </div>
        )
    }
}


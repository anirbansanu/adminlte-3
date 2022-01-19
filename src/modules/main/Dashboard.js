import React, { Component } from 'react';
import Chartswithtabs from "../../components/Chartswithtabs/Chartswithtabs";
import Directchat from "../../components/Directchat/Directchat";
import Todo from "../../components/Todo/Todo";
import Map from "../../components/Map/Map";
import Calendar from "../../components/Calendar/Calendar";
import Salesgraph from "../../components/Salesgraph/Salesgraph";
import SmallBox from "../../components/SmallBox/SmallBox";

export default class Dashboard extends Component {
    render() {
        return (
            <div>
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">Dashboard</h1>
              </div>{/* /.col */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="/">Home</a></li>
                  <li className="breadcrumb-item active">Dashboard v1</li>
                </ol>
              </div>{/* /.col */}
            </div>{/* /.row */}
          </div>{/* /.container-fluid */}
        </div>
        {/* /.content-header */}
        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            {/* Small boxes (Stat box) */}
            <div className="row">
              <div className="col-lg-3 col-6">
                {/* small box */}
                  <SmallBox
                      count="150"
                      title="New Orders"
                      type="info"
                      icon="ion-android-people"
                      navigateTo="/"
                      info="More Info"
                  />
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-6">
                {/* small box */}
                <SmallBox
                      count="53"
                      sup="%"
                      title="Bounce Rate"
                      type="success"
                      icon="ion-stats-bars"
                      navigateTo="/"
                      info="More Info"
                  />
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-6">
                {/* small box */}
                
                <SmallBox
                      count="45"
                      title="User Registrations"
                      type="warning"
                      icon="ion-person-add"
                      navigateTo="/"
                      info="More Info"
                  />
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-6">
                {/* small box */}
                <SmallBox
                      count="66"
                      title="Unique Visitors"
                      type="danger"
                      icon="ion-pie-graph"
                      navigateTo="/"
                      info="More Info"
                  />
              </div>
              {/* ./col */}
            </div>
            {/* /.row */}
            {/* Main row */}
            <div className="row">
              {/* Left col */}
              <section className="col-lg-7 connectedSortable">
                
                {/* Custom tabs (Charts with tabs)*/}
                  <Chartswithtabs/>
                {/* /.Custom tabs (Charts with tabs) */}

                {/* DIRECT CHAT */}
                  <Directchat/>
                {/*/.direct-chat */}

                {/* TO DO List */}
                  <Todo/>
                {/* /.TO DO List */}
              </section>
              {/* /.Left col */}
              {/* right col (We are only adding the ID to make the widgets sortable)*/}
              <section className="col-lg-5 connectedSortable">
                {/* Map card */}
                  <Map/>
                {/* /.Map */}

                {/* solid sales graph */}
                  <Salesgraph/>
                {/* /.sales graph */}

                {/* Calendar */}
                  <Calendar/>
                {/* /.Calendar */}

              </section>
              {/* right col */}
            </div>
            {/* /.row (main row) */}
          </div>{/* /.container-fluid */}
        </section>
        {/* /.content */}
      </div>
    </div>

        )
    }
}

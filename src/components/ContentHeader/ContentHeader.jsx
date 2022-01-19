import React, { Component } from 'react';


export default class ContentHeader extends Component {
    render() {
        return (
            <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1>{this.props.title}</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="/">{this.props.url[0]}</a></li>
                            <li class="breadcrumb-item active">{this.props.url[1]}</li>
                        </ol>
                    </div>
                    </div>
                </div>
                {/* <!-- /.container-fluid --> */}
            </section>
        )
    }
}

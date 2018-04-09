import React from 'react';
import { Button, Input } from 'antd';

export default class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
        };
    }

  onChange(event){
    this.setState({
        [event.target.name]: event.target.value,
    });
  }

  onSubmit() {
    const response = this.props.mutate({
      variables: this.state,
    });
  }

  render() {
    return (
        <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="x_panel">
                <div className="x_title">
                    <h2>Ingresar </h2>
                    <ul className="nav navbar-right panel_toolbox">
                        <li><a className="collapse-link"><i className="fa fa-chevron-up"></i></a>
                        </li>
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-wrench"></i></a>
                        </li>
                        <li><a className="close-link"><i className="fa fa-close"></i></a>
                        </li>
                    </ul>
                    <div className="clearfix"></div>
                </div>
                <div className="x_content">
                    <br />
                    <form id="demo-form2" data-parsley-validate className="form-horizontal form-label-left">

                        <div className="form-group">
                            <label className="control-label col-md-3 col-sm-3 col-xs-12" for="first-name">Correo <span className="required">*</span>
                            </label>
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <input type="text" id="first-name" required="required" className="form-control col-md-7 col-xs-12" />
                        </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-md-3 col-sm-3 col-xs-12" for="last-name">Contraseña <span className="required">*</span>
                                </label>
                                <div className="col-md-6 col-sm-6 col-xs-12">
                                    <input type="text" id="last-name" name="last-name" required="required" className="form-control col-md-7 col-xs-12" />
                        </div>
                                </div>
                                                <div className="ln_solid"></div>
                                                <div className="form-group">
                                                    <div className="col-md-6 col-sm-6 col-xs-12 col-md-offset-3">
                                                        <button type="submit" className="btn btn-success">Ingresar</button>
                                                    </div>
                                                </div>

                    </form>
                                        </div>
                                    </div>
                                </div>
    );
  }
}
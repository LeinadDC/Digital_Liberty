import React from 'react';
import { Button, Input } from 'antd';
import Main from './Main';

export default class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            usuario: '',
            contrasena: '',
            error: {}
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

  handleChange(event){
    this.setState({
        [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
      var payload = {
          NombreUsuario: this.state.usuario,
      Password: this.state.contrasena}
      event.preventDefault();
      fetch('api/Users/LogIn',
          {
              method: 'post',
              headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json',
              },
              body: JSON.stringify(payload)
          }).then(response => {
              if (!response.is_error) {
                  this.props.history.push('/dashboard');
              } else {
                  this.setState({ error: response.error_content.error_description });
              }
          });
  }

  render() {
    return (
        <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="x_panel">
                <div className="x_title">
                    <h3>Ingresar</h3>
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
                    <form id="demo-form2" onSubmit={this.handleSubmit} className="form-horizontal form-label-left">

                        <div className="form-group">
                            <label className="control-label col-md-3 col-sm-3 col-xs-12" for="first-name">Usuario <span className="required">*</span>
                            </label>
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <input type="text" id="first-name" required="required" className="form-control col-md-7 col-xs-12" name="usuario" onChange={this.handleChange} />
                        </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-md-3 col-sm-3 col-xs-12" for="last-name">Contraseña <span className="required">*</span>
                                </label>
                                <div className="col-md-6 col-sm-6 col-xs-12">
                                <input type="text" id="last-name" name="contrasena" required="required" className="form-control col-md-7 col-xs-12" onChange={this.handleChange} />
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
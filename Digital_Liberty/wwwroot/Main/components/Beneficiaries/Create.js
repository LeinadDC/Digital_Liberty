import React from 'react';
import LocationList from './Locations/LocationList'

export default class Create extends React.Component {

    constructor() {
        super();
        this.state = {
            name: '',
            apellido: '',
            documentoDeIdentidad: '',
            telefono: '',
            fecha: '',
            gender: '',
            language: '',
            hasChildren: '',
            nationality: '',
            hasInsurance: '',
            hasGovernmentSubsidy: '',
            isActive: '',
            civilStatus: '',
            province: '',
            education: '',
            profesion: '',
            job: '',
            reffered : '',
            religion: '',
            location:'',
            error: {}
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getInitialState() {
        return { selectValue: 'otherDrug'}
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
            value : event.target.value
        });
    }

    setGender(event) {
        console.log(event.target.value);
    }

    setChildren(event) {
        console.log(event.target.value);
    }

    setInsurance(event) {
        console.log(event.target.value);
    }

    setGovernmentSubsidy(event) {
        console.log(event.target.value);
    }

    setActive(event) {
        console.log(event.target.value);
    }

    handleSubmit(event) {
        //BASE DE DATOS
        var payload = {
            Birthday: this.state.fecha,
            CivilStatus: this.state.civilStatus,
            Document: this.state.documentoDeIdentidad,
            Education : this.state.education,
            FirstName: this.state.name,
            Genre: this.state.gender,
            HasChildren: this.state.hasChildren,
            HasGovernmentSubsidy: this.state.hasGovernmentSubsidy,
            HasInsurance: this.state.hasInsurance,
            IsActive: this.state.isActive,
            Job: this.state.job,
            Language: this.state.language,
            LastName: this.state.apellido,
            //LeavingReason : 
            Nationality: this.state.nationality,
            PhoneNumber: this.state.telefono,
            Profession: this.state.profesion,
            Province : this.state.province,
            Referred: this.state.reffered,
            Religion: this.state.religion,
            Location: this.state.location,
            selectValue : this.state.value
        }
        event.preventDefault();
        fetch('api/People',
            {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(payload)
            }).then(response => response.json());
           
    }

    render() {
        return (
            <form class="form-horizontal form-label-left" novalidate onSubmit={this.handleSubmit}>
                <span class="section">Crear nuevo beneficiario</span>

                <div class="item form-group">
                    <label class="control-label col-md-3 col-sm-3 col-xs-12" for="name">Nombre: <span class="required">*</span>
                    </label>
                    <div class="col-md-6 col-sm-6 col-xs-12">
                        <input id="name" class="form-control col-md-7 col-xs-12" name="name" required="required" type="text" onChange={this.handleChange} />
                    </div>
                </div>

                <div class="item form-group">
                    <label class="control-label col-md-3 col-sm-3 col-xs-12" for="lastName">Apellido: <span class="required">*</span>
                    </label>
                    <div class="col-md-6 col-sm-6 col-xs-12">
                        <input id="apellido" class="form-control col-md-7 col-xs-12" name="apellido" required="required" type="text" onChange={this.handleChange}/>
                    </div>
                </div>

                <div class="item form-group">
                    <label class="control-label col-md-3 col-sm-3 col-xs-12" for="documentoDeIdentidad">Documento de identidad: <span class="required">*</span>
                    </label>
                    <div class="col-md-6 col-sm-6 col-xs-12">
                        <input id="documentoDeIdentidad" class="form-control col-md-7 col-xs-12" name="documentoDeIdentidad" required="required" type="text" onChange={this.handleChange} />
                    </div>
                </div>

                <div class="item form-group">
                    <label class="control-label col-md-3 col-sm-3 col-xs-12" for="telefono">Telefono: <span class="required">*</span>
                    </label>
                    <div class="col-md-6 col-sm-6 col-xs-12">
                        <input id="documentoDeIdentidad" class="form-control col-md-7 col-xs-12" name="telefono" required="required" type="text" onChange={this.handleChange} />
                    </div>
                </div>

                <div class="item form-group">
                    <label class="control-label col-md-3 col-sm-3 col-xs-12" for="name">Fecha de nacimiento: <span class="required">*</span>
                    </label>
                    <div class="col-md-6 col-sm-6 col-xs-12">
                        <input id="name" class="form-control col-md-7 col-xs-12" data-validate-length-range="10" name="fecha" placeholder="Formato: 01/01/2001" required="required" type="text" onChange={this.handleChange} />
                    </div>
                </div>

                <div class="item form-group" onChange={this.setGender.bind(this)}>
                    <label class="control-label col-md-3 col-sm-3 col-xs-12" for="gender">Género <span class="required">*</span>
                    </label>
                    <p>
                        &nbsp; Masculino:
            <input type="radio" class="flat" name="gender" id="genderM" value="Masculino"  /> 
                        &nbsp; Femenino:
            <input type="radio" class="flat" name="gender" id="genderF" value="Femenino" />
                    </p>
                </div>

                <div class="item form-group">
                    <label class="control-label col-md-3 col-sm-3 col-xs-12" for="language">Idioma materno: <span class="required">*</span>
                    </label>
                    <div class="col-md-6 col-sm-6 col-xs-12">
                        <input id="language" class="form-control col-md-7 col-xs-12" name="language" required="required" type="text" onChange={this.handleChange}/>
                    </div>
                </div>

                <div class="item form-group" onChange={this.setChildren.bind(this)}>
                    <label class="control-label col-md-3 col-sm-3 col-xs-12" for="hasChildren">Tiene hijos: <span class="required">*</span>
                    </label>
                    <p>
                        &nbsp; Si:
            <input type="radio" class="flat" name="hasChildren" id="childernYes" value="Si" onChange={this.handleChange} /> 
                        &nbsp; No:
            <input type="radio" class="flat" name="hasChildren" id="childernNo" value="No" onChange={this.handleChange}/>
                    </p>
                </div>

                <div class="item form-group">
                    <label class="control-label col-md-3 col-sm-3 col-xs-12" for="nationality">Nacionalidad: <span class="required">*</span>
                    </label>
                    <div class="col-md-6 col-sm-6 col-xs-12">
                        <input id="nationality" class="form-control col-md-7 col-xs-12" name="nationality" required="required" type="text" onChange={this.handleChange}/>
                    </div>
                </div>

                <div class="item form-group" onChange={this.setInsurance.bind(this)}>
                    <label class="control-label col-md-3 col-sm-3 col-xs-12" for="hasInsurance">Tiene seguro: <span class="required">*</span>
                    </label>
                    <p>
                        &nbsp; Si:
            <input type="radio" class="flat" name="hasInsurance" id="insuranceYes" value="Si" onChange={this.handleChange}/> &nbsp; No:
            <input type="radio" class="flat" name="hasInsurance" id="insuranceNo" value="No" onChange={this.handleChange}/>
                    </p>
                </div>

                <div class="item form-group" onChange={this.setGovernmentSubsidy.bind(this)}>
                    <label class="control-label col-md-3 col-sm-3 col-xs-12" for="hasGovernmentSubsidy">Tiene subsidio del gobierno: <span class="required">*</span>
                    </label>
                    <p>
                        &nbsp; Si:
            <input type="radio" class="flat" name="hasGovernmentSubsidy" id="hasGovernmentSubsidyYes" value="Si" onChange={this.handleChange}/> &nbsp; No:
            <input type="radio" class="flat" name="hasGovernmentSubsidy" id="hasGovernmentSubsidyNo" value="No" onChange={this.handleChange}/>
                    </p>
                </div>.
                <div class="item form-group" onChange={this.setActive.bind(this)}>
                    <label class="control-label col-md-3 col-sm-3 col-xs-12" for="isActive">Se encuentra activo en la organización<span class="required">*</span>
                    </label>
                    <p>
                        &nbsp; Si:
            <input type="radio" class="flat" name="isActive" id="isActiveYes" value="Si" onChange={this.handleChange} /> 
                        &nbsp; No:
            <input type="radio" class="flat" name="isActive" id="isActiveNo" value="No" onChange={this.handleChange} />
                    </p>
                </div>

                <div id="react-search"></div>

                <div class="item form-group">
                    <label class="control-label col-md-3 col-sm-3 col-xs-12" for="civilStatus">Estado civil: <span class="required">*</span>
                    </label>
                    <div class="col-md-6 col-sm-6 col-xs-12">
                        <select value="civilStatus" id="civilStatus" class="form-control" required onChange={this.handleChange}>
                            <option value="">Escoga...</option>
                            <option value="single">Soltero</option>
                            <option value="married">Casado</option>
                            <option value="divorced">Divorciado</option>
                            <option value="freeUnion">Unión Libre</option>
                            <option value="widowed">Viudo</option>
                        </select>
                    </div>
                </div>

                <div class="item form-group">
                    <label class="control-label col-md-3 col-sm-3 col-xs-12" for="province">Provincia de procedencia: <span class="required">*</span>
                    </label>
                    <div class="col-md-6 col-sm-6 col-xs-12">
                        <select value="province" id="province" class="form-control" required onChange={this.handleChange}>
                            <option value="">Escoga...</option>
                            <option value="sanJose">San José</option>
                            <option value="heredia">Heredia</option>
                            <option value="cartago">Cartago</option>
                            <option value="alajuela">Alajuela</option>
                            <option value="limon">Limón</option>
                            <option value="puntarenas">Puntarenas</option>
                            <option value="guanacaste">Guanacaste</option>
                        </select>
                    </div>
                </div>

                <div class="item form-group">
                    <label class="control-label col-md-3 col-sm-3 col-xs-12" for="education">Educación: <span class="required">*</span>
                    </label>
                    <div class="col-md-6 col-sm-6 col-xs-12">
                        <select value="education"  id="education" class="form-control" required onChange={this.handleChange}>
                            <option value="">Escoga...</option>
                            <option value="none">N/A</option>
                            <option value="primary">Primaria</option>
                            <option value="secondary">Secundaria</option>
                            <option value="bacheloreDone">Bachillerato concluido</option>
                            <option value="technicalDegree">Técnico</option>
                            <option value="collegeBachelore">Bachillerato Universitario</option>
                        </select>
                    </div>
                </div>

                <div class="item form-group">
                    <label class="control-label col-md-3 col-sm-3 col-xs-12" for="profession">Profesión: <span class="required">*</span>
                    </label>
                    <div class="col-md-6 col-sm-6 col-xs-12">
                        <select value="profession"  id="profession" class="form-control" required onChange={this.handleChange}>
                            <option value="">Escoga...</option>
                            <option value="none">N/A</option>
                            <option value="teacher">Profesor</option>
                            <option value="engineer">Ingeniero</option>
                            <option value="doctor">Doctor</option>
                            <option value="nurse">Enfermero</option>
                            <option value="administrator">Administrador</option>
                            <option value="other">Otro</option>
                        </select>
                    </div>
                </div>

                <div class="item form-group">
                    <label class="control-label col-md-3 col-sm-3 col-xs-12" for="job">Úlitmo empleo: <span class="required">*</span>
                    </label>
                    <div class="col-md-6 col-sm-6 col-xs-12">
                        <select value="job"  id="job" class="form-control" required onChange={this.handleChange}>
                            <option value="">Escoga...</option>
                            <option value="constructor">Construcción</option>
                            <option value="chef">Cocinero</option>
                            <option value="welding">Soldador</option>
                            <option value="security">Guarda de seguridad</option>
                            <option value="prostitution">Prostitución</option>
                            <option value="mechanic">Mecánico</option>
                            <option value="gardener">Jardinero</option>
                            <option value="streetSeller">Vendedor deambulandte</option>
                            <option value="farmer">Agricultor</option>
                            <option value="miscellaneous">Misceláneo</option>
                            <option value="carCare">Cuidador de carros</option>
                        </select>
                    </div>
                </div>

                <div class="item form-group">
                    <label class="control-label col-md-3 col-sm-3 col-xs-12" for="reffered">Referido por: <span class="required">*</span>
                    </label>
                    <div class="col-md-6 col-sm-6 col-xs-12">
                        <select value="reffered" id="reffered" class="form-control" required onChange={this.handleChange}>
                            <option value="">Escoga...</option>
                            <option value="VOLUNTEER">Voluntario</option>
                            <option value="FAMILY">Familiar</option>
                            <option value="HEALTHCENTER">Centro de cuido</option>
                            <option value="JUDICIALPOWER">Poder Judicial</option>
                            <option value="DETOXCENTER">Centro de desintoxicación</option>
                        </select>
                    </div>
                </div>

                <div class="item form-group">
                    <label class="control-label col-md-3 col-sm-3 col-xs-12" for="religion">Religión: <span class="required">*</span>
                    </label>
                    <div class="col-md-6 col-sm-6 col-xs-12">
                        <select value="religion"  id="religion" class="form-control" required onChange={this.handleChange}>
                            <option value="">Escoga...</option>
                            <option value="none">N/A</option>
                            <option value="catholic">Católico</option>
                            <option value="evangelic">Evangélico</option>
                            <option value="JehovahWitness">Testigos de Jehová</option>
                            <option value="Spiritual">Espiritual</option>
                            <option value="other">Otra</option>
                        </select>
                    </div>
                </div>

                <div class="item form-group">
                    <label class="control-label col-md-3 col-sm-3 col-xs-12" for="religion">Addiciones (marque todas las que apliquen): <span class="required">*</span>
                    </label>
                    <div class="col-md-6 col-sm-6 col-xs-12">
                        <select
                            value={this.state.selectValue}
                            onChange={this.handleChange}
                        >
                            <label class="container">Alcohol &nbsp;
                      <input type="checkbox" value="alcohol" checked="checked" />
                                <span class="checkmark"></span>
                            </label>
                            <label class="container">Crack &nbsp;
                      <input type="checkbox" value="crack" />
                                <span class="checkmark"></span>
                            </label>
                            <label class="container">Cocaina &nbsp;
                      <input type="checkbox" value="cocaina" />
                                <span class="checkmark"></span>
                            </label>
                            <label class="container">Marihuana &nbsp;
                      <input type="checkbox" value="weed" />
                                <span class="checkmark"></span>
                            </label>
                            <label class="container">Tabaco &nbsp;
                      <input type="checkbox" value="tabaco" />
                                <span class="checkmark"></span>
                            </label>
                            <label class="container">Otra droga &nbsp;
                      <input type="checkbox" value="otherDrug" />
                                <span class="checkmark"></span>
                            </label>
                        </select>
                    </div>
                </div>

                <div class="ln_solid"></div>
                <div class="form-group">
                    <div class="col-md-6 col-md-offset-3">
                        <button type="submit" class="btn btn-primary">Cancelar</button>
                        <button id="send" type="submit" class="btn btn-success">Crear</button>
                    </div>
                </div>

            </form>
        );
    }
}

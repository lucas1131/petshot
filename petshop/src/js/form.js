/* Light Theme stylesheet
 *
 * Giovanna Oliveira Guimarães 9293693
 * Lucas Alexandre Soares 9293265
 * Luca Gomes Urssi 10425396
 * Rafael do Fake News 9293095
 *
 */

import React from "react";
import { Button, Input } from 'react-materialize';

/*
<TextField
          name="name"
          hintText="Nome"
          value={this.state.name}
          onChange={e => this.change(e)}
          errorText={this.state.nameError}
          floatingLabelFixed
        />
        */
export default class Form extends React.Component {

  state = {
    name: "",
    nameError: "",
    race: "",
    raceError: "",
    scheduled: "",
    scheduledError: "",
    cost: "",
    costError: ""
  };

  change = e => {
    // this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  validate = () => {
    let isError = false;
    const errors = {
      nameError: "",
      raceError: "",
      scheduledError: "",
      costError: ""
    };


    // if (this.state.scheduled.length < 5) {
    //   isError = true;
    //   errors.scheduledError = "Username needs to be atleast 5 characters long";
    // }

    // if (this.state.cost.indexOf("@") === -1) {
    //   isError = true;
    //   errors.costError = "Requires valid cost";
    // }

    this.setState({
      ...this.state,
      ...errors
    });

    return isError;
  };

  onSubmit = e => {
    e.preventDefault();
    const err = this.validate();
    if (!err) {
      this.props.onSubmit(this.state);
      // clear form
      this.setState({
        name: "",
        nameError: "",
        race: "",
        raceError: "",
        scheduled: "",
        scheduledError: "",
        cost: "",
        costError: ""
      });
    }
  };
}

export class AnimalForm extends Form {
  render() {
    return (
      <form style={{marginTop: "10px"}}>
        
        <Input name="name" 
          className='input box-shadow' 
          label='Nome'
          value={this.state.name}
          onChange={e => this.change(e)} 
          validate 
          type="text" />

        <Input name="race" 
          className='input box-shadow' 
          label='Raça'
          value={this.state.race}
          onChange={e => this.change(e)} 
          validate 
          type="text" />

        <Input name="scheduled" 
          className='input box-shadow' 
          label='Agendamentos'
          value={this.state.scheduled}
          onChange={e => this.change(e)} 
          validate 
          type="text" />

        <Button className="btn form-btn" onClick={e => this.onSubmit(e)} waves="light">Enviar</Button>
      </form>
    );
  }
}

export class AddressessForm extends Form {
  render() {
    return (
      <form style={{marginTop: "10px"}}>
        
        <Input name="nickname" 
          className='input box-shadow' 
          label='Nome' 
          value={this.state.nickname}
          onChange={e => this.change(e)} 
          validate 
          type="text" />
        
        <Input name="street" 
          className='input box-shadow' 
          label='Rua' 
          value={this.state.street}
          onChange={e => this.change(e)} 
          validate 
          type="text" />
        
        <Input name="number" 
          className='input box-shadow' 
          label='N°' 
          value={this.state.number}
          onChange={e => this.change(e)} 
          validate 
          type="number" />
        
        <Input name="compl" 
          className='input box-shadow' 
          label='Complemento' 
          value={this.state.compl}
          onChange={e => this.change(e)}
          validate
          type="text" />
        
        <Button className="btn form-btn" onClick={e => this.onSubmit(e)} waves="light" primary>Enviar</Button>
      </form>
    );
  }
}

export class AdminClientsForm extends Form {
  render() {
    return (
      <form style={{marginTop: "10px"}}>
        
        <Input name="name" 
          className='input box-shadow' 
          label='Nome' 
          value={this.state.name}
          onChange={e => this.change(e)} 
          validate 
          type="text" />
        
        <Input name="surname" 
          className='input box-shadow' 
          label='Sobrenome' 
          value={this.state.surname}
          onChange={e => this.change(e)} 
          validate 
          type="text" />
        
        <Input name="services" 
          className='input box-shadow' 
          label='Serviços Agendados' 
          value={this.state.services}
          onChange={e => this.change(e)} 
          validate 
          type="text" />
        
        <Input name="animals" 
          className='input box-shadow' 
          label='Animais Registrados' 
          value={this.state.animals}
          onChange={e => this.change(e)}
          validate
          type="text" />

        <Input name="address" 
          className='input box-shadow' 
          label='Endereço' 
          value={this.state.address}
          onChange={e => this.change(e)}
          validate
          type="text" />
        
        <Button className="btn form-btn" onClick={e => this.onSubmit(e)} waves="light" primary>Enviar</Button>
      </form>
    );
  }
}

export class AdminProductsForm extends Form {
  render() {
    return (
      <form style={{marginTop: "10px"}}>
        
        <Input name="nickname" 
          className='input box-shadow' 
          label='Nome' 
          value={this.state.nickname}
          onChange={e => this.change(e)} 
          validate 
          type="text" />
        
        <Input name="street" 
          className='input box-shadow' 
          label='Rua' 
          value={this.state.street}
          onChange={e => this.change(e)} 
          validate 
          type="text" />
        
        <Input name="number" 
          className='input box-shadow' 
          label='N°' 
          value={this.state.number}
          onChange={e => this.change(e)} 
          validate 
          type="number" />
        
        <Input name="compl" 
          className='input box-shadow' 
          label='Complemento' 
          value={this.state.compl}
          onChange={e => this.change(e)}
          validate
          type="text" />
        
        <Button className="btn form-btn" onClick={e => this.onSubmit(e)} waves="light" primary>Enviar</Button>
      </form>
    );
  }
}

export class AdminServicesForm extends Form {
  render() {
    return (
      <form style={{marginTop: "10px"}}>
        
        <Input name="nickname" 
          className='input box-shadow' 
          label='Nome' 
          value={this.state.nickname}
          onChange={e => this.change(e)} 
          validate 
          type="text" />
        
        <Input name="street" 
          className='input box-shadow' 
          label='Rua' 
          value={this.state.street}
          onChange={e => this.change(e)} 
          validate 
          type="text" />
        
        <Input name="number" 
          className='input box-shadow' 
          label='N°' 
          value={this.state.number}
          onChange={e => this.change(e)} 
          validate 
          type="number" />
        
        <Input name="compl" 
          className='input box-shadow' 
          label='Complemento' 
          value={this.state.compl}
          onChange={e => this.change(e)}
          validate
          type="text" />
        
        <Button className="btn form-btn" onClick={e => this.onSubmit(e)} waves="light" primary>Enviar</Button>
      </form>
    );
  }
}
/* Light Theme stylesheet
 *
 * Giovanna Oliveira Guimarães 9293693
 * Lucas Alexandre Soares 9293265
 * Luca Gomes Urssi 10425396
 * Rafael do Fake News 9293095
 *
 */

import React from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
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

    for(let prop in this.state){
      console.log(prop)
    }

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

  render() {
    return (
      <form style={{marginTop: "10px"}}>
        <Input name="name" className='input box-shadow' label='Nome'  value={this.state.name}
          onChange={e => this.change(e)} validate type='text' />
        <Input name="race" className='input box-shadow' label='Raça' value={this.state.race}
          onChange={e => this.change(e)} validate type='text' />
        <Input name="scheduled" className='input box-shadow' label='Agendamentos' value={this.state.scheduled}
          onChange={e => this.change(e)} validate type='date' />
        <Input name="cost" className='input box-shadow' label='Custo' value={this.state.cost}
          onChange={e => this.change(e)} validate type='text' />
        <Button className="btn" onClick={e => this.onSubmit(e)} waves="light" primary>Enviar</Button>
      </form>
    );
  }
}

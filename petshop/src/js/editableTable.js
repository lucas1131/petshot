/* Light Theme stylesheet
 *
 * Giovanna Oliveira Guimarães 9293693
 * Lucas Alexandre Soares 9293265
 * Luca Gomes Urssi 10425396
 * Rafael do Fake News 9293095
 *
 */

import React, { Component } from "react";
import { Row, Col } from 'react-materialize';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import injectTapEventPlugin from "react-tap-event-plugin";

import Form from "./form";
import {  AnimalForm,
          AddressessForm,
          AdminClientsForm,
          AdminProductsForm,
          AdminServicesForm } from "./form";

import Table from "./table";
import StaticTable from "./staticTable";

import "../css/dateDisplay.css";
import "../css/general.css";

injectTapEventPlugin();

class EditableTable extends Component {

  constructor(props) {
    super(props)
    
    if(this.props.header){
      this.header = props.header
    } else {
      this.header = []
    }
  }

  state = {
    data: [],
    editIdx: -1
  };

  /* Handlers for edit & remove*/
  handleRemove = i => {
    this.setState(state => ({
      data: state.data.filter((row, j) => j !== i)
    }));
  };

  startEditing = i => {
    this.setState({ editIdx: i });
  };

  stopEditing = () => {
    this.setState({ editIdx: -1 });
  };

  handleChange = (e, name, i) => {
    const { value } = e.target;
    this.setState(state => ({
      data: state.data.map(
        (row, j) => (j === i ? { ...row, [name]: value } : row)
      )
    }));
  };

  /* Render table */
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Col>
            <Row>
              <Form onSubmit={submission => this.setState({
                    data: [...this.state.data, submission]
                  })}
                style={{height: "100px", width: "100%"}}
              />
            </Row>
            <Row>
              <div>
                <Table
                  handleRemove={this.handleRemove}
                  startEditing={this.startEditing}
                  editIdx={this.state.editIdx}
                  stopEditing={this.stopEditing}
                  handleChange={this.handleChange}
                  data={this.state.data}
                  header={this.header}
                  style={{overflowX: "scroll"}}
                />
              </div>
            </Row>
          </Col>
        </div>
      </MuiThemeProvider>
    );
  }
}

export class AnimalTable extends EditableTable {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Col>
            <Row>
              <AnimalForm onSubmit={submission => this.setState({
                    data: [...this.state.data, submission]
                  })}
                style={{height: "100px", width: "100%"}}
              />
            </Row>
            <Row>
              <div>
                <Table
                  handleRemove={this.handleRemove}
                  startEditing={this.startEditing}
                  editIdx={this.state.editIdx}
                  stopEditing={this.stopEditing}
                  handleChange={this.handleChange}
                  data={this.state.data}
                  header={this.header}
                  style={{overflowX: "scroll"}}
                />
              </div>
            </Row>
          </Col>
        </div>
      </MuiThemeProvider>
    );
  }
}

export class AddressessTable extends EditableTable {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Col>
            <Row>
              <AddressessForm onSubmit={submission => this.setState({
                    data: [...this.state.data, submission]
                  })}
                style={{height: "100px", width: "100%"}}
              />
            </Row>
            <Row>
              <div>
                <Table
                  handleRemove={this.handleRemove}
                  startEditing={this.startEditing}
                  editIdx={this.state.editIdx}
                  stopEditing={this.stopEditing}
                  handleChange={this.handleChange}
                  data={this.state.data}
                  header={this.header}
                  style={{overflowX: "scroll"}}
                />
              </div>
            </Row>
          </Col>
        </div>
      </MuiThemeProvider>
    );
  }
}

export class AdminClientsTable extends EditableTable {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Col>
            <Row>
              <AdminClientsForm onSubmit={submission => this.setState({
                    data: [...this.state.data, submission]
                  })}
                style={{height: "100px", width: "100%"}}
              />
            </Row>
            <Row>
              <div>
                <Table
                  handleRemove={this.handleRemove}
                  startEditing={this.startEditing}
                  editIdx={this.state.editIdx}
                  stopEditing={this.stopEditing}
                  handleChange={this.handleChange}
                  data={this.state.data}
                  header={this.header}
                  style={{overflowX: "scroll"}}
                />
              </div>
            </Row>
          </Col>
        </div>
      </MuiThemeProvider>
    );
  }
}

export class AdminProductsTable extends EditableTable {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Col>
            <Row>
              <AdminProductsForm onSubmit={submission => this.setState({
                    data: [...this.state.data, submission]
                  })}
                style={{height: "100px", width: "100%"}}
              />
            </Row>
            <Row>
              <div>
                <Table
                  handleRemove={this.handleRemove}
                  startEditing={this.startEditing}
                  editIdx={this.state.editIdx}
                  stopEditing={this.stopEditing}
                  handleChange={this.handleChange}
                  data={this.state.data}
                  header={this.header}
                  style={{overflowX: "scroll"}}
                />
              </div>
            </Row>
          </Col>
        </div>
      </MuiThemeProvider>
    );
  }
}

export class AdminServicesTable extends EditableTable {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Col>
            <Row>
              <AdminServicesForm onSubmit={submission => this.setState({
                    data: [...this.state.data, submission]
                  })}
                style={{height: "100px", width: "100%"}}
              />
            </Row>
            <Row>
              <div>
                <Table
                  handleRemove={this.handleRemove}
                  startEditing={this.startEditing}
                  editIdx={this.state.editIdx}
                  stopEditing={this.stopEditing}
                  handleChange={this.handleChange}
                  data={this.state.data}
                  header={this.header}
                  style={{overflowX: "scroll"}}
                />
              </div>
            </Row>
          </Col>
        </div>
      </MuiThemeProvider>
    );
  }
}


export class ShoppingCartTable extends Component {

  constructor(props) {

    super(props)
    
    if(this.props.header){
      this.header = props.header
    } else {
      this.header = []
    }

    this.onInit = props.onInit;
    this.onChange = props.onChange;
    this.onRemove = props.onRemove;

    let value = props.data ? props.data : [];

    this.state = {
      data: value,
      editIdx: -1
    }

    this.setState(state => ({
      children: value,
      batata: 5
    }))
    this.onInit(value)
  }

  /* Handlers for edit & remove*/
  handleRemove = i => {
    this.setState(state => ({
      data: state.data.filter((row, j) => j !== i)
    }));

    this.onRemove(i)
  };

  handleChange = (e, name, i) => {
    const value = e.target.value;
    const cost = this.state.data[i].cost;
    const qtd = value;
    let total = cost*qtd;

    this.setState(state => ({
      data: state.data.map(
        (row, j) => (j === i ? { ...row, [name]: value, ['totalCost']: total } : row)
      )
    }));

    this.onChange(i, name, parseInt(value), total)
  };

  /* Render table */
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Col>
            <Row>
              <div>
                <StaticTable
                  handleRemove={this.handleRemove}
                  editIdx={this.state.editIdx}
                  handleChange={this.handleChange}
                  data={this.state.data}
                  header={this.header}
                  style={{overflowX: "scroll"}}
                />
              </div>
            </Row>
          </Col>
        </div>
      </MuiThemeProvider>
    );
  }
}


export default EditableTable;

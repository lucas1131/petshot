/* 
 * Giovanna Oliveira Guimarães 9293693
 * Lucas Alexandre Soares 9293265
 * Luca Gomes Urssi 10425396
 * Rafael do Fake News 9293095
 *
 */

import React, { Component } from 'react'
import { Tabs, Tab } from 'react-materialize';
import { Row, Col } from 'react-materialize';

import { 	AnimalTable,
					AddressessTable,
					AdminClientsTable,
					AdminProductsTable,
					AdminServicesTable } from './editableTable'

import '../css/general.css';
import '../css/tabs.css';
import '../css/adminView.css'

class Cards extends Component {
	render() {
    return (
      <div>
        
      </div>
    );
  }
}

class Animals extends Component {
  render() {
    return (
      <div>
        <AnimalTable header={[
					{ name: "Nome", prop: "name", type: "text" },
					{ name: "Raça", prop: "race", type: "text" },
					{ name: "Agendamentos", prop: "scheduled", type: "text" },
					{ name: "Custo", prop: "cost", type: "number" }
				]}/>
      </div>
    );
  }
}

class AdminClientsView extends Component {
	render() {
    return (
      <div>
        <AdminClientsTable header={[
					{ name: "Nome", prop: "name", type: "text" },
					{ name: "Sobrenome", prop: "surname", type: "text" },
					{ name: "Serviços Agendados", prop: "services", type: "text" },
					{ name: "Animais Registrados", prop: "animals", type: "text" },
					{ name: "Endereço", prop: "address", type: "text" }
				]}/>
      </div>
    );
  }
}

class AdminProductsView extends Component {
	render() {
    return (
      <div>
        <AddressessTable header={[
					{ name: "ID", prop: "id", type: "number" },
					{ name: "Nome", prop: "name", type: "text" },
					{ name: "Descrição", prop: "description", type: "text" },
					{ name: "Preço", prop: "price", type: "number" },
					{ name: "Estoque", prop: "stock", type: "number" },
					{ name: "Vendas", prop: "sold", type: "number" }
				]}/>
      </div>
    );
  }
}

class AdminServicesView extends Component {
	render() {
    return (
      <div>
        <AddressessTable header={[
					{ name: "ID", prop: "id", type: "number" },
					{ name: "Nome", prop: "name", type: "text" },
					{ name: "Descrição", prop: "description", type: "text" },
					{ name: "Preço", prop: "price", type: "number" },
					{ name: "Vendas", prop: "sold", type: "number" }
				]}/>
      </div>
    );
  }
}

class AdminStatisticsView extends Component {
	render() {
    return (
    	<div name="statistics">
				<Row class="center">
					<h1 class="h1-admin">Estatísticas</h1>
				</Row>

				{/*<hr class="style0" />
				Placeholder hr*/}
				<hr/>

				<Row class="center">
					<h2 class="h2-admin">Vendas</h2>
				</Row>

				<div class="row-admin-card align-content">
					<div class="statistics_card-admin">
						<p class="text"><b>TODO: </b>Transformar isso aqui em props</p>
					</div>
					<div class="statistics_card-admin">
						<p class="text"><b>Produtos vendidos: </b>9</p>
					</div>
					<div class="statistics_card-admin">
						<p class="text"><b>Gastos: </b>R$ 1000,00</p>
					</div>
					<div class="statistics_card-admin">
						<p class="text"><b>Lucros: </b>R$ 200,00</p>
					</div>
					<div class="statistics_card-admin">
						<p class="text"><b>Saldo: </b>-R$ 800,00</p>
					</div>
				</div>
    	</div>
    );
  }
}

export default class AdminView extends Component {
	render() {
		return(
			<div className="container" style={{marginTop: "15px"}}>
				<Tabs className='z-depth-1'>
					<Tab title="Clientes" className="tab admin-tab" active>
						<AdminClientsView />
					</Tab>

					<Tab title="Produtos" className="tab admin-tab">
						<AdminProductsView />
					</Tab>

					<Tab title="Serviços" className="tab admin-tab">
						<AdminServicesView />
					</Tab>

					<Tab title="Estatísticas" className="tab admin-tab">
						<AdminStatisticsView />
					</Tab>
				</Tabs>
			</div>
		);
	}
}

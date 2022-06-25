import React, { Component } from 'react'
import TelaLogin from './components/TelaLogin'
import TelaLogado from './components/TelaLogado'
import styled from 'styled-components'
import { Footer, GridLayout, Header, Main } from './components/GridLayout'
import Labefy from '../src/assets/labefy.png'

const LogoLabefy = styled.img`
margin-top: 20px;
margin-bottom: 10px;
height: 10vh;
box-shadow: 5px;
`

export default class App extends Component {
  state = {
    nome: "",
    sobrenome: "",
    turma: "",
    logado: false
  }

  handleNome = (e) => {
    this.setState({ nome: e.target.value })
  }

  handleSobrenome = (e) => {
    this.setState({ sobrenome: e.target.value })
  }

  handleTurma = (e) => {
    this.setState({ turma: e.target.value })
  }

  handleLogin = () => {
    this.setState({ logado: !this.state.logado })
  }

  renderizaTela = () => {
    if (this.state.logado === false) {
      return <TelaLogin
        nome={this.state.nome}
        sobrenome={this.state.sobrenome}
        turma={this.state.turma}
        handleNome={this.handleNome}
        handleSobrenome={this.handleSobrenome}
        handleTurma={this.handleTurma}
        handleLogin={this.handleLogin}
      /> 
    } else {
      return <TelaLogado
      nome={this.state.nome}
      sobrenome={this.state.sobrenome}
      turma={this.state.turma}
    />
    }
  }


  render() {
    

    return (
      <GridLayout>
        <Header>
          <LogoLabefy src={Labefy}></LogoLabefy>
        </Header>
        <Main>{this.renderizaTela()}</Main>
        <Footer></Footer>
        </GridLayout>
    )
  }
}

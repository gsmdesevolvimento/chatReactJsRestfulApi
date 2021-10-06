import React from 'react';
import * as SigninService from '../services/Signin'

class Signin extends React.Component {

  constructor() {

    super();

    this.state = {
      nickname: '',
      password: ''
    };

    this.changeNicknameInput = this.changeNicknameInput.bind(this);
    this.changePasswordInput = this.changePasswordInput.bind(this);

    this.signin = this.signin.bind(this);

  }

  signin(event) {
    event.preventDefault();
    if (this.state.nickname === '') {
      return;
    }
    if (this.state.password === '') {
      return;
    }
    SigninService.signin(this.state.nickname, this.state.password, function (response) {
      localStorage.setItem("user_logged", JSON.stringify(response.data));
      window.location.href = "/#/chat";
    });
  }

  changeNicknameInput(e) {
    this.setState({
      nickname: e.target.value
    });
  }

  changePasswordInput(e) {
    this.setState({
      password: e.target.value
    });
  }

  render() {
    return (
      <div className="form-membership">
        <div className="form-wrapper">

          <h5>Entrar no chat</h5>

          <form
            onSubmit={this.signin}>

            <div className="form-group input-group-lg">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email ou celular"
                  ref="nicknameInput"
                  onChange={this.changeNicknameInput}
                  required
                  autoFocus />
            </div>

            <div className="form-group input-group-lg">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Senha"
                  ref="passwordInput"
                  onChange={this.changePasswordInput}
                  required />
            </div>

            <button className="btn btn-primary btn-lg btn-block">Acessar</button>

            <hr />

            <p className="text-muted">Não possui uma conta?</p>
            <a href="#signup" className="btn btn-outline-light btn-sm">Cadastre-aqui!</a>

          </form>

        </div>
      </div>
    )
  }

}

export default Signin

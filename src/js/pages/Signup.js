import React from 'react';
import * as SignupService from '../services/Signup'

class Signup extends React.Component {

  constructor() {

    super();

    this.state = {
      nickname: '',
      password: ''
    };

    this.changeNicknameInput = this.changeNicknameInput.bind(this);
    this.changePasswordInput = this.changePasswordInput.bind(this);

    this.signup = this.signup.bind(this);

  }

  signup(event) {
    event.preventDefault();
    if (this.state.nickname === '') {
      return;
    }
    if (this.state.password === '') {
      return;
    }
    SignupService.signup(this.state.nickname, this.state.password, function (response) {
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

          <h5>Criar conta no chat</h5>

          <form
            onSubmit={this.signup}>

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

            <p className="text-muted">Já possui uma conta?</p>
            <a href="#" className="btn btn-outline-light btn-sm">Acesse aqui!</a>

          </form>

        </div>
      </div>
    )
  }

}

export default Signup

import React from 'react';
import * as ChatService from '../services/Chat'

class Chat extends React.Component {

    constructor() {
        super();
        const user_logged = JSON.parse(localStorage.getItem("user_logged"));
        if (!localStorage.getItem("user_logged") || !typeof user_logged == "object") {
            return window.location = "/";
        }
        this.state = {
            messages: [],
            message_send: '',
            nickname: user_logged.nickname
        };
        this.getMessages = this.getMessages.bind(this); 
        this.sendMessage = this.sendMessage.bind(this); 
        this.changeMessageSendInput = this.changeMessageSendInput.bind(this); 
    }

    changeMessageSendInput(e) {
        this.setState({
            message_send: e.target.value
        });
    }

    getMessages() {
        var self = this;
        ChatService.getMessages(function (response) {

            self.setState({
                messages: response.data.reverse()
            });
        });
    }

    sendMessage(event) {
        event.preventDefault();
        if (this.state.message_send === '') {
            return;
        }
        const self = this;
        ChatService.sendMessage(this.state.message_send, function () {
            self.refs.messageSendInput.value = '';
            self.getMessages();
        });
    }

    logout () {
        localStorage.removeItem("user_logged");
        window.location = "/";
    }

    componentWillMount() {
        this.getMessages();
    }

    render() {
        return (
            <div className="layout">

                <div className="content">

                    <div className="chat">
                        <div className="chat-header">
                            <div className="chat-header-user">
                                <div>
                                    <h5>Olá, {this.state.nickname} - Últimas mensagens no chat</h5>
                                </div>
                            </div>
                            <div className="chat-header-action">
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <a onClick={this.logout} className="btn">
                                            <i className="fa fa-power-off" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="chat-body">

                            <div className="messages">

                            {this.state.messages.map(item => 
                                <div
                                    className=""
                                    className={item.nickname == this.state.nickname ? "message-item outgoing-message" : "message-item"}>
                                    <div className="message-content">
                                        {item.message}
                                    </div>
                                    <div className="message-action">
                                        {item.nickname}
                                    </div>
                                </div>
                            )}

                            </div>

                        </div>
                        <div className="chat-footer">
                            <form onSubmit={this.sendMessage}>

                                <input
                                type="text"
                                className="form-control"
                                placeholder="Escreva a mensagem"
                                aria-label="Escreva a mensagem"
                                ref="messageSendInput"
                                onChange={this.changeMessageSendInput} />

                                <div className="form-buttons">
                                    <button className="btn btn-primary btn-floating" type="submit">
                                        <i className="fa fa-send"></i>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>

            </div>
        )
    }

}

export default Chat
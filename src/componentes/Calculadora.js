import React from 'react';

export default class Calculadora extends React.Component {
    constructor(props) {
        super(props);
        // Array de botões
        this.botoes = [
            { id: 'btnAC', label: 'AC', class: 'AC' },
            { id: 'btnDivide', label: '/', class: 'operador' },
            { id: 'btnMultiply', label: '*', class: 'operador' },
            { id: 'btnSubtract', label: '-', class: 'operador' },
            { id: 'btn7', label: '7', class: 'numero' },
            { id: 'btn8', label: '8', class: 'numero' },
            { id: 'btn9', label: '9', class: 'numero' },
            { id: 'btnAdd', label: '+', class: 'operador' },
            { id: 'btn4', label: '4', class: 'numero' },
            { id: 'btn5', label: '5', class: 'numero' },
            { id: 'btn6', label: '6', class: 'numero' },
            { id: 'btnEquals', label: '=', class: 'igual' },
            { id: 'btn1', label: '1', class: 'numero' },
            { id: 'btn2', label: '2', class: 'numero' },
            { id: 'btn3', label: '3', class: 'numero' },
            { id: 'btn0', label: '0', class: 'numero' }
        ];
    }

    currentExpression(appendString) {
        let curString = this.props.expressao.replace('RESULTADO', '')
        curString = curString + appendString
        this.props.setExpressao(curString)
    }

    apagarExpressao() {
        this.props.setExpressao('')
    }

    calcularExpressao(expressao) {
    try {
        const resultado = eval(expressao);
        this.props.setExpressao(resultado)
    } catch (e) {
        this.props.setExpressao('Err');
    }
}

render() {
    return (
        <div className="container">
            <div className="Calculadora">
                <div className="versao">
                    Calculadora React.Js
                </div>
                <div className="Tela">
                    {this.props.expressao}
                </div>
                <div className="Buttons">
                    {/* Renderizando os botões dinamicamente */}
                    {this.botoes.map(botao => (
                        botao.id === 'btnAC' ?
                            <button key={botao.id} onClick={() => this.apagarExpressao()} className={botao.class}>{botao.label}</button>
                            :
                            (botao.id === 'btnEquals' ?
                                <button key={botao.id} onClick={() => this.calcularExpressao(this.props.expressao)} className={botao.class}>{botao.label}</button>
                                :
                                <button key={botao.id} onClick={() => this.currentExpression(botao.label)} className={botao.class}>{botao.label}</button>)
                    ))}
                </div>
                <div className="madeBy" href="https://github.com/EliaJunior">
                    <a href="https://github.com/EliaJunior" target="_blank">&copy;{new Date().getFullYear()} Elias Junior</a>
                </div>
            </div>
        </div>
    );
}
}
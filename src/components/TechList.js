import React, { Component } from 'react';
import TechItem from './TechItem'



//Método de importção de classe para compodentes
class TechList extends Component {
    static defalutProps = {
        teste: 'teste'
    }


    state = {

        newTech: '',

        techs: [
            'NodeJS',
            'React',
            'React Native',
            'ES6'
        ]
    };


    inputChange = event => {

        this.setState({ newTech: event.target.value })

        //console.log(this.props.teste)//Propriedades inportadas da classe
    }

    setValueChange = event => {
        event.preventDefault();

        if (this.state.newTech.length === 0) {
            return false;
        }

        this.setState({
            techs: [this.state.newTech, ... this.state.techs],
            newTech: ''
        });

    }

    removeTech = index => {
        let techsA = this.state.techs;
        techsA.splice(index, 1);
        this.setState({ techs: techsA });
    }




    //A criação do metodo render() é obrigatório
    render() {
        return (


            <form onSubmit={this.setValueChange}>

                <h1>{this.state.novoValor}</h1>
                <ul>
                    {this.state.techs.map((item, index) => <TechItem key={index} item={item} onDelete={() => this.removeTech(index)} />)}

                </ul>
                <input type="text" onChange={this.inputChange} value={this.state.newTech} />
                <button type="submit">Enviar</button>

            </form>


        )
    }

}

export default TechList;

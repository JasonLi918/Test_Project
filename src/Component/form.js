import React from "react";

class Gameform extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            name:'Li Cheuk Wing',
            year:'1995-09-18',
            title:'Front-End-Programmer'
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentDidMount(){
        console.log('ready to build');
    }

    componentDidUpdate(){
        console.log('updated');
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]:value
        })
    }

    render(){
        return(
            <React.Fragment>
                <input type="text" value={this.state.name} onChange={this.handleInputChange} name="name"></input>
            </React.Fragment>
        )
    }
}

export default Gameform;
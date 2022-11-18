import React from "react";

export default class Botones extends React.Component{
    render(){
        const alerta = this.props.alert
        return <div>
            <button onClick={() => alert(alerta.m1)}>Módulo 1</button>                
            <button onClick={() => alert(alerta.m2)}>Módulo 2</button>                
        </div>;
    }
}
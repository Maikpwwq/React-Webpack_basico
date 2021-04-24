import React from "react";

class SaludoBienvenida extends React.Component {
  render() {
    return (
      <div>
        Hola bienvenido {this.props.name}
      </div>
    );
  }
}

/*
* const HelloWorld = ({ text }) => (
  <h1>{text}</h1>
);
*/

export default SaludoBienvenida;
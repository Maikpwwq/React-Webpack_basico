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

export default SaludoBienvenida;
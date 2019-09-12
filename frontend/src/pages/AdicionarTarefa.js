import React, { Component } from "react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const styles = {
  textField: {
    width: "100%",
    marginBottom: "22px"
  }
};

class AdicionarTarefa extends Component {
  state = {
    descricaoTarefa: "",
    erroCampo: false
  };

  handleDescricao(event) {
    this.setState({
      descricaoTarefa: event.target.value,
      erroCampo: false
    });
  }

  inserirTarefa() {
    const { descricaoTarefa } = this.state;

    if (descricaoTarefa === "") {
      this.setState({
        erroCampo: true
      });
    }

    fetch("http://localhost:8000/api/adicionar-tarefa", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        description: descricaoTarefa
      })
    })
      .then(response => response.json())
      .then(data => {
        if (data && descricaoTarefa) {
          this.props.history.push("/");
        }
      });
  }

  render() {
    return (
      <div>
        <TextField
          error={this.state.erroCampo}
          label="Digite a descrição da tarefa"
          style={styles.textField}
          value={this.state.descricaoTarefa}
          onChange={event => this.handleDescricao(event)}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth={true}
          onClick={this.inserirTarefa.bind(this)}
        >
          Inserir Tarefa
        </Button>
      </div>
    );
  }
}

export default AdicionarTarefa;

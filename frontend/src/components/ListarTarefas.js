import React, { Component } from "react";

import {
  Typography,
  ListItem,
  List,
  ListItemText,
  Fab,
  Snackbar
} from "@material-ui/core";

import { Close, Check } from "@material-ui/icons";

const classes = {
  typography: {
    display: "flex",
    justifyContent: "center"
  },
  fab: {
    marginRight: "10px"
  },
  list: {
    display: "flex",
    flexDirection: "column",
    margin: "0 10%"
  }
};

class ListarTarefas extends Component {
  constructor() {
    super();
    this.state = {
      tarefas: [],
      abrirToastie: false,
      message: ""
    };
  }

  componentWillMount() {
    this.carregarTarefas();
  }

  carregarTarefas() {
    fetch("http://localhost:8000/api/tarefas-pendentes", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(response => response.json())
      .then(tarefas => {
        tarefas = tarefas.reverse();
        this.setState({
          tarefas
        });
      });
  }

  concluirTarefa(id) {
    fetch(`http://localhost:8000/api/concluir-tarefa/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data) {
          this.carregarTarefas();
          this.setState({
            abrirToastie: true,
            message: "Tarefa conclúida com sucesso"
          });
        }
      });
  }

  excluirTarefa(id) {
    fetch(`http://localhost:8000/api/excluir-tarefa/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data) {
          this.carregarTarefas();
          this.setState({
            abrirToastie: true,
            message: "Tarefa excluída com sucesso"
          });
        }
      });
  }

  render() {
    return (
      <div>
        <Snackbar
          open={this.state.abrirToastie}
          message={this.state.message}
          autoHideDuration={3000}
          onClose={() => {
            this.setState({
              abrirToastie: false
            });
          }}
        />
        <Typography variant="h4" style={classes.typography}>
          Lista de Tarefas
        </Typography>
        <List style={classes.list}>
          {this.state.tarefas.map((tarefa, index) => {
            return (
              <ListItem key={index} style={classes.listItem}>
                <ListItemText primary={tarefa.description} />
                <Fab
                  color="secondary"
                  onClick={() => this.excluirTarefa(tarefa.id)}
                  style={classes.fab}
                >
                  <Close />
                </Fab>
                <Fab
                  color="primary"
                  onClick={() => this.concluirTarefa(tarefa.id)}
                >
                  <Check />
                </Fab>
              </ListItem>
            );
          })}
        </List>
      </div>
    );
  }
}

export default ListarTarefas;

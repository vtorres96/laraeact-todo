import React, { Component } from "react";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import AddIcon from "@material-ui/icons/AddBox";

class Menu extends Component {
  render() {
    return (
      <Drawer open={this.props.aoAbrirMenu} onClose={this.props.aoFecharMenu}>
        <List>
          <ListItem button>
            <ListItemIcon>
              <AddIcon />
            </ListItemIcon>
            <ListItemText primary="Adicionar tarefa" />
          </ListItem>
        </List>
      </Drawer>
    );
  }
}

export default Menu;

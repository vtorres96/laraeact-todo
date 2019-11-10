import React, { Component } from "react";

import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import Menu from "./Menu";

class Header extends Component {
  state = {
    abrirMenu: false
  };

  openMenu() {
    this.setState({
      abrirMenu: true
    });
  }

  closeMenu() {
    this.setState({
      abrirMenu: false
    });
  }

  render() {
    return (
      <div>
        <Menu
          aoAbrirMenu={this.state.aoAbrirMenu}
          aoFecharMenu={this.closeMenu.bind(this)}
        />
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" onClick="">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">
              To Do List
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Header;

import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import withRoot from '../withRoot'

const styles = {
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
}

const menuList = [
  {
    text: '登陆',
    to: '/login'
  },
  {
    text: '首页',
    to: '/'
  },
  {
    text: '我的',
    to: '/my'
  }
]

class MMenu extends Component {
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  doCloseMenu = () => {
    this.setState({ anchorEl: null });
  };

  handlerMenuClick = (to) => {
    this.props.history.push(to)
    this.doCloseMenu()
  }

  render() {
    const { classes, location } = this.props;
    const { anchorEl } = this.state;

    return (
      <div>
        <IconButton onClick={this.handleClick} className={classes.menuButton} color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Menu
          id="lock-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.doCloseMenu}
        >
        {
          menuList.map(routeItem => (
            <MenuItem
            key={routeItem.to}
            disabled={location.pathname === routeItem.to}
            selected={location.pathname === routeItem.to}
            onClick={() => this.handlerMenuClick(routeItem.to)}
            >
              {routeItem.text}
            </MenuItem>
          ))
        }
        </Menu>
      </div>
    )
  }
}

export default withRoot(withStyles(styles)(MMenu))

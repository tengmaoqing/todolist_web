import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import NewIcon from '@material-ui/icons/AddCircle';
import HomeIcon from '@material-ui/icons/Home';
import withRoot from '../withRoot'
import Menu from './menu'

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  }
};

function ButtonAppBar(props) {

  const { classes, history } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Menu></Menu>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Todo，tengmaoqing
          </Typography>
          <IconButton onClick={() => history.push('/new')}>  
            <NewIcon></NewIcon>
          </IconButton>          
          <IconButton onClick={() => history.push('/my')}>  
            <HomeIcon></HomeIcon>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(ButtonAppBar));

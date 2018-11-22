import React, { Component } from 'react';
import Styles from './TopNavbarCss';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Badge,
} from '@material-ui/core';
import {
  MoreIcon,
  NotificationsIcon,
  MailIcon,
  AccountCircle,
  SearchIcon,
  MenuIcon
} from './IconStore';

/*import Icon from '@material-ui/icons';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
*/

class TopNavBar extends Component {
  state = {
    anchorEl: null,
    //mobileMoreAnchorEl: null,
  };
  render() {
    const { anchorEl, //mobileMoreAnchorEl
     } = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    //console.log(this.props);
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer">
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" color="inherit" noWrap>
              Dokki
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton color="inherit">
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {//renderMenu
        }
        {//renderMobileMenu
        }
      </div>
    );
  }
}

TopNavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(Styles)(TopNavBar);
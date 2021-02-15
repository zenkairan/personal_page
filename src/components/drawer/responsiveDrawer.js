import React from 'react';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { MdSubject, MdInbox } from 'react-icons/md'
import { useStyles } from '../../theme/global_styles';




function ResponsiveDrawer(props) {
  const classes = useStyles();
  

  return (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
          <ListItem button onClick={() => window.location.href = '/'}>
            <ListItemIcon> 
              <MdInbox className={classes.icons}/>
            </ListItemIcon>
            <ListItemText primary="Resumo" />
          </ListItem>
          <ListItem button onClick={() => window.location.href = '/xp'}>
            <ListItemIcon> 
              <MdSubject className={classes.icons}/>
            </ListItemIcon>
            <ListItemText primary="Experiência" />
          </ListItem>
      </List>
    </div>
  );

  

}


export default ResponsiveDrawer;
import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import { IconeFechar } from '../icons';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      position: 'relative',
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
  }),
);

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface TelaCheiaDialogProps {
  open: boolean
  setOpen: (value: boolean) => void
  textoBotao: string
  children: any
}

export default function TelaCheiaDialog({ open, setOpen, textoBotao, children }: TelaCheiaDialogProps) {
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        {textoBotao}
      </Button>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar className="bg-gray-800">
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              {IconeFechar()}
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {textoBotao.toUpperCase()}
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Salvar
            </Button>
          </Toolbar>
        </AppBar>
        {children}
      </Dialog>
    </div>
  );
}

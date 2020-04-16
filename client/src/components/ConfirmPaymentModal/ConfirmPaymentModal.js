import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
// import PersonIcon from '@material-ui/icons/Person';
// import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';


function ConfirmPaymentModal(props) {
    // const classes = useStyles();
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    // const handleListItemClick = (value) => {
    //     onClose(value);
    // };

    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
            <DialogTitle id="simple-dialog-title">Credit card information</DialogTitle>
            <input
                variant="outlined"
                label="Credit card"
                type="text"
                value="{creditCard}"
                // onChange={ev => setCreditCard(ev.currentTarget.value)}
                style={{ flex: 2 }}
            />
            {/* <Spacer size={16} /> */}

        </Dialog>
    );
}

ConfirmPayment.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
};

function ConfirmPayment() {
    const [open, setOpen] = React.useState(false);
    // const [selectedValue, setSelectedValue] = React.useState(emails[1]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
        // setSelectedValue(value);
    };

    return (
        <div>
            <Typography variant="subtitle1">Purchased:</Typography>
            <br />
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Confirm payment
      </Button>
            <Dialog open={open} onClose={handleClose} />
        </div>
    );
}

export default ConfirmPaymentModal;
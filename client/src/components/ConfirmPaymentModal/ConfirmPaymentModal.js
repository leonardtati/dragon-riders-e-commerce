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

// body: JSON.stringify({ order_summary: order }),

function ConfirmPaymentModal(props) {
    const order = props.cartStateArray.map((item) => {
        return { 'item_id': item.id, quantity: item.quantity }
    })


    console.log('order', order);
    console.log('props', props);
    // const classes = useStyles();
    const { open } = props;

    const handleSubmit = ev => {
        ev.preventDefault();

        fetch("/order", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                order_summary: order
            })
        })
            .then(res => res.json())
            .then(json => {
                console.log('json', json);
            })
            .catch(err => {
                console.log('message', err.message);
            });
    }
    return (

        <Dialog aria-labelledby="simple-dialog-title" open={open}>
            <form
                onSubmit={ev => {
                    handleSubmit(ev)

                }}

            >
                <input
                    variant="outlined"
                    label="Credit card"
                    type="submit"
                    value="CONFIRM"
                    // onChange={ev => setCreditCard(ev.currentTarget.value)}
                    style={{ flex: 2 }}
                /></form>
        </Dialog>
    );
}


export default ConfirmPaymentModal;
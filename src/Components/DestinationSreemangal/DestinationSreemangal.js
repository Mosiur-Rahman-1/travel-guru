import React from 'react';
import './DestinationSreemangal.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Button, Grid, Link } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

const Destination = () => {
    const classes = useStyles();
    return (
        <div className= "bg bg-image">
            <div className = "container-fluid p-0">
                <div className = "row d-flex align-items-center row-margin">
                    <div className ="col-5 hero-container-text">
                        <h1 className= "hero-heading">SREEMANGAL</h1>
                        <p className= "text-white">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas ab modi officiis architecto, cupiditate magni reiciendis perspiciatis maxime labore eaque! Quia voluptatum sit accusamus quas consequuntur blanditiis impedit doloribus praesentium?
                        </p>
                    </div>


                    <div className = "col-7 d-flex align-items-center pl-5">
                        <div className = "form-container">
                        <form className={classes.root} autoComplete="off">
                            <TextField id="outlined-basic" className= "full-width-input-field" label="Origin" variant="outlined" size ="medium"/>
                            <TextField id="outlined-basic" className= "full-width-input-field" label="Destination" variant="outlined" size ="medium"/>
                            <Grid container item xs={6}>
                            <Grid item >
                                <TextField
                                    id="date"
                                    label="From"
                                    type="date"
                                    defaultValue="2020-10-13"
                                    className={classes.textField}
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    id="date"
                                    label="To"
                                    type="date"
                                    defaultValue="2020-10-14"
                                    className={classes.textField}
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                                />
                            </Grid>
                            </Grid>
                            <Link href = "/hotels"><Button variant="contained" justifyContent="center" className = "btn-color">Start Booking</Button></Link>
                        </form>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default Destination;
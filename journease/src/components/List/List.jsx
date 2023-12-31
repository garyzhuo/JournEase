import React, {useState} from 'react';
import { CircularProgress, Grid, InputLabel, MenuItem, FormControl, Select, Typography } from '@material-ui/core';
import useStyles from './styles';

import PlaceDetails from '../PlaceDetails/PlaceDetails';


const List = () => {
    const classes = useStyles();
    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState('');

    const places = [
        { name: 'Cool place'},
        {name: 'Best Beer'},
        {name: 'Best Steak'},
        { name: 'Cool place'},
        {name: 'Best Beer'},
        {name: 'Best Steak'},
        { name: 'Cool place'},
        {name: 'Best Beer'},
        {name: 'Best Steak'},
    ];
    
    return (
        <div className={classes.container}>
            <Typography variant='h4'>
            Local Flavors, Comfy Stays, and Must-See Displays: 
            <br />
            Dive into the Best Nearby!
            </Typography>
            <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(e) => setType(e.target.value)}>
                    <MenuItem value="restaurants">Restaurants</MenuItem>
                    <MenuItem value="hotels">Hotels</MenuItem>
                    <MenuItem value="aatractions">Attractions</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel>Rating</InputLabel>
                <Select value={rating} onChange={(e) => setRating(e.target.value)}>
                    <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={3}>Above 3.0</MenuItem>
                    <MenuItem value={4}>Above 4.0</MenuItem>
                    <MenuItem value={4.5}>Above 4.5</MenuItem>
                    <MenuItem value={5}>Jonathan's Standard(Above 5.0)</MenuItem>
                </Select>
            </FormControl>
            <Grid container spacing={3} className={classes.list}>
            {places?.map((place, i) => (
                <Grid item key={i} xs={12}>
                    <PlaceDetails place={place}/>
                </Grid>
            ))}
            </Grid>
        </div>
    );
}

export default List;
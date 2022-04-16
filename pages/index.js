import * as React from 'react';
import { TextField, Grid, Box, Typography, Container } from '@mui/material'

import classes from '../public/eecs-renumbering.json'

const subjects = classes.subjects

export default function Index() {
  const [ searchStr, setSearchStr ] = React.useState('')

  const handleChange = (event) => {
    setSearchStr(event.target.value);
  };

  const filteredClasses = subjects.filter(subject => subject.oldnum.includes(searchStr) || 
    subject.newnum.includes(searchStr) || subject.title.includes(searchStr) || searchStr.length == 0)

  const classesElements = filteredClasses.map((element, index) => (
    <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
      <Box bgcolor="#d0f7c1" key={index} m={1} p={1}>
        <Typography variant="h5">{`${element.newnum}, formerly ${element.oldnum}`}</Typography>
        <Typography variant="h5"></Typography>
        <Typography variant="h6">{element.title}</Typography>
        <Typography>{`(${element.level}) ${element.subarea}`}</Typography>
      </Box>
    </Grid>
  ))

  return (
    <Container maxWidth="xl">
      <Box sx={{ my: 2 }}>
        <Typography variant="subtitle1">huangq@mit.edu</Typography>
        <Typography variant="h4" component="h1" gutterBottom>
          New Course 6 Classes Search
        </Typography>
        <TextField id="outlined-basic" fullWidth={true} label="Search (e.g. 6.033)" value={searchStr} variant="filled" onChange={handleChange}/>
        {/* {JSON.stringify(filteredClasses)} */}
        <Grid container>
          {classesElements}
        </Grid>
      </Box>
    </Container>
  );
}

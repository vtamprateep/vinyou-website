import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { AustinCapital, Sunset, GradPic } from '../assets/ExportImages';
import { Grid, List, ListItem, Typography, Box } from '@material-ui/core';
import { StickyContainer, Sticky } from 'react-sticky';
import { Parallax } from 'react-scroll-parallax';
import './pageCSS.scss';


const ResumeScreen = () => {




    return (
        <div style={{ height: "100vh" }}>
            <Grid container justify="space-evenly">
                <Grid item sm={6}>
                    <Typography variant="h3">WORK EXPERIENCE</Typography>
                    <Typography variant="h4">J.P. Morgan Chase &amp; Co.</Typography>
                    <Typography variant="h5"><Box fontStyle="italic">Technology Risk Associate</Box></Typography>
                    <List>
                        <ListItem><Typography variant="h6">Develop automated business reporting scripts</Typography></ListItem>
                        <ListItem><Typography variant="h6">Review data pipelines and business report production</Typography></ListItem>
                    </List>
                    <img src={Sunset} height="100vh" />
                </Grid>
                <Grid item justify="flex-end" sm={6}>
                    <Typography variant="h3">EDUCATION</Typography>
                    <Typography variant="h4">The University of Texas at Austin</Typography>
                    <List>
                        <ListItem><Typography variant="h5"><Box fontStyle="italic">B.B.A. Finance, Portfolio Management</Box></Typography></ListItem>
                        <ListItem><Typography variant="h5"><Box fontStyle="italic">Minor in Computer Science</Box></Typography></ListItem>
                    </List>
                    
                    
                    <img src={GradPic} height="100%" />
                </Grid>

            </Grid>
        </div>
    )
}

export default ResumeScreen;
import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { MalImage, StockImage } from '../assets/ExportProjects';
import { Grid, Card, CardContent, CardMedia, Typography, Box } from '@material-ui/core';
import { StickyContainer, Sticky } from 'react-sticky';
import { Parallax } from 'react-scroll-parallax';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './pageCSS.scss';

const ProjectScreen = () => {


    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100vh", width: "100vw" }}>
            <Grid container justify="space-evenly">
                <Grid item>
                    <div className="Project-div" >
                        <Typography>Anime List App</Typography>
                        <img src={MalImage} height="500px" className="Project-image"/>
                    </div>
                </Grid>
                <Grid item>
                    <div>
                        <img src={StockImage} />
                    </div>
                </Grid>
                
            </Grid>
            
        </div>
    )
}

export default ProjectScreen;
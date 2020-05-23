import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { MalImage, StockImage } from '../assets/ExportProjects';
import { Grid, Box, Button } from '@material-ui/core';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './pageCSS.scss';

const ProjectScreen = () => {

    const buttonClick = (url) => {
        window.open(
            url,
            '_blank' // <- This is what makes it open in a new window.
          );
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", marginTop: "5vh", marginBottom: "5vh", textAlign: "center" }}>
            <Grid container justify="space-evenly">
                <Grid item style={{ textAlign: "center" }}>
                    <div className="Project-mal" >
                        <Box className="Project-mal-title">ANIME LIST APP</Box>
                        <Box className="Project-mal-desc">Anime recommendation platform for enthusiasts</Box>
                        <img src={MalImage} className="Project-mal-image"/>
                    </div>
                    <Button variant="outlined" style={{ margin: "2%" }} onClick={ e => buttonClick("https://mal-app-98b37.firebaseapp.com/")}>Access Website</Button>
                    <Button variant="outlined" style={{ margin: "2%" }} disabled >View Github</Button>
                </Grid>
                <Grid item style={{ textAlign: "center" }}>
                    <div className="Project-stock">
                        <div className="Project-stock-image-container">
                            <img src={StockImage} className="Project-stock-image" />
                        </div>
                        <Box className="Project-stock-title">STOCK INFO APP</Box>
                        <Box className="Project-stock-desc">Stock search and price info for investors</Box>
                    </div>
                    <Button variant="outlined" style={{ margin: "2%" }} onClick={ e => buttonClick("https://stock-app-544c0.web.app/")}>Access Website</Button>
                    <Button variant="outlined" style={{ margin: "2%" }} onClick={ e => buttonClick("https://github.com/vtamprateep/stock-app")}>View Github</Button>
                </Grid>
                
            </Grid>
            
        </div>
    )
}

export default ProjectScreen;
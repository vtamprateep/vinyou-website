import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { FirebaseIcon, GitIcon, CloudIcon, MySQLIcon, NodeIcon, 
    PostgreSQLIcon, PythonIcon, ReactIcon, VBAIcon } from '../assets/ExportIcon';
import { Grid, Card, Typography, Box } from '@material-ui/core';
import { StickyContainer, Sticky } from 'react-sticky';
import { Parallax } from 'react-scroll-parallax';
import './pageCSS.scss';


const AboutScreen = () => {




    return (
        <div style={{ height: "100vh" }}>
            <Grid container justify="space-evenly">
                <Grid item>
                    <Typography><Box>Data Analyst</Box></Typography>
                    <ui>
                        <li>Visualization Tools</li>
                        <li>Report Automation</li>
                        <li>Data Streaming</li>
                        <li>Dashboard Development</li>
                    </ui>
                </Grid>
                <Grid item>
                    <Typography><Box>Developer</Box></Typography>
                    <ui>
                        <li>Data Pipelines</li>
                        <li>Responsive Websites</li>
                        <li>System Architecture</li>
                        <li>Cloud Platforms</li>
                    </ui>
                </Grid>
                <Grid item>
                    <Typography><Box>Risk Manager</Box></Typography>
                    <ui>
                        <li>Industry Leading Risk Framework</li>
                        <li>Global Risk Reviews</li>
                        <li>Fit-For-Purpose Asessments</li>
                        <li>Automation Testing</li>
                    </ui>
                </Grid>
            </Grid>
            <Grid container justify="center" spacing={5} style={{ paddingTop: "5%" }}>
                <Grid item><Card elevation={12} ><img src={FirebaseIcon} /></Card></Grid>
                <Grid item><img src={GitIcon} /></Grid>
                <Grid item><img src={CloudIcon} /></Grid>
                <Grid item><img src={MySQLIcon} /></Grid>
                <Grid item><img src={NodeIcon} /></Grid>
            </Grid>
            <Grid container justify="center" spacing={5} style={{ padding: "2%" }}>
                <Grid item><img src={PostgreSQLIcon} /></Grid>
                <Grid item><img src={PythonIcon} /></Grid>
                <Grid item><img src={ReactIcon} /></Grid>
                <Grid item><img src={VBAIcon} /></Grid>
            </Grid>
        </div>

    )
}

export default AboutScreen;
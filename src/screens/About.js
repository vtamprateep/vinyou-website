import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { FirebaseIcon, GitIcon, CloudIcon, MySQLIcon, NodeIcon, 
    PostgreSQLIcon, PythonIcon, ReactIcon, VBAIcon } from '../assets/ExportIcon';
import { Grid, Card, CardContent, Typography, Box } from '@material-ui/core';
import { CloudQueue, Functions, Warning } from '@material-ui/icons'
import { StickyContainer, Sticky } from 'react-sticky';
import { Parallax } from 'react-scroll-parallax';
import './pageCSS.scss';


const AboutScreen = () => {

    const techIcons = [[PythonIcon, "Python"], [NodeIcon, "Node"], [ReactIcon, "React"], [PostgreSQLIcon, "PostgreSQL"],
                    [FirebaseIcon, "Firebase"], [GitIcon, "Git"], [CloudIcon, "Google Cloud"], [MySQLIcon, "MySQL"], [VBAIcon, "Visual Basic"]]

    return (
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", marginTop: "5vh", marginBottom: "5vh" }}>
            <div>
                <Grid container justify="space-evenly" >
                    <Grid item className="About-section">
                        <Functions style={{ fontSize: "8vh", color: "grey"}} />
                        <Typography><Box className="About-section-title">Data Analyst</Box></Typography>
                        <ui className="About-section-list">
                            <li>Visualization Tools</li>
                            <li>Report Automation</li>
                            <li>Data Streaming</li>
                            <li>Dashboard Development</li>
                        </ui>
                    </Grid>
                    <Grid item className="About-section">
                        <CloudQueue style={{ fontSize: "8vh", color: "lightblue"}} />
                        <Typography><Box className="About-section-title">Developer</Box></Typography>
                        <ui className="About-section-list">
                            <li>Data Pipelines</li>
                            <li>Responsive Websites</li>
                            <li>System Design</li>
                            <li>Cloud Platforms</li>
                        </ui>
                    </Grid>
                    <Grid item className="About-section">
                        <Warning style={{ fontSize: "8vh", color: "red"}} />
                        <Typography><Box className="About-section-title">Risk Management</Box></Typography>
                        <ui className="About-section-list">
                            <li>Industry Risk Frameworks</li>
                            <li>Global Risk Reviews</li>
                            <li>Fit-For-Purpose Assessments</li>
                            <li>Automation Testing</li>
                        </ui>
                    </Grid>
                </Grid>
                <Grid container justify="center" spacing={4} style={{ paddingTop: "2%", margin: "auto", width: "70vw" }}>
                    {techIcons.map( item => (
                        <Grid item>
                            <Card elevation={2} className="About-card" >
                                <img src={item[0]} className="About-image" />
                                <CardContent >
                                    <Box className="About-card-title">{item[1]}</Box>
                                </CardContent>
                            </Card>
                    </Grid>
                    ))}
                </Grid>
            </div>
        </div>

    )
}

export default AboutScreen;
import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { CentralPark, Headshot } from '../assets/ExportImages';
import { Grid, Button } from '@material-ui/core';
import Typist from 'react-typist';
import './pageCSS.scss';


const LandingScreen = () => {

    const [renderSubheader, setSubheader] = useState(false);

    const onHeaderTyped = () => {
        setSubheader(true);
    }

    return (
        <div style={{ height: "100vh",
            backgroundImage: `url(${CentralPark})`,
            backgroundPosition: "center", backgroundRepeat: "no-repeat",
            backgroundSize: "cover" }}
        >
            <Grid container alignItems="center" style={{ height: "85%" }}>
                    <Grid item className="Landing-header-container">
                        <Typist className="Landing-header"
                            onTypingDone={onHeaderTyped}
                            cursor={{ hideWhenDone: true, hideWhenDoneDelay: 0 }}
                        >
                            Hi, I'm Vinyou
                            <Typist.Delay ms={1000} />
                        </Typist> 
                        {renderSubheader ? 
                            <Typist className="Landing-subheader" >
                                Welcome to my website.
                            </Typist> : null}
                        
                    </Grid>
                    <Grid item >
                        <CSSTransition
                            in={true}
                            appear={true}
                            timeout={2000}
                            classNames="fade"
                        >
                        <img src={Headshot} alt="mugshot" height="300vh" className="Landing-image"/>
                        </CSSTransition>
                    </Grid>        
            </Grid>
            <CSSTransition
                in={true}
                appear={true}
                timeout={2000}
                classNames="fade"
            >
                <Grid container direction="row" justify="space-evenly" aligntItems="center" >
                        <Grid item>
                            <Button variant="contained" className="Landing-button"><b>About</b></Button>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" className="Landing-button"><b>Resume</b></Button>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" className="Landing-button"><b>Projects</b></Button>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" className="Landing-button"><b>Contact</b></Button>
                        </Grid>
                </Grid>
            </CSSTransition>
        </div>
    )
}

export default LandingScreen;
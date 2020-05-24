import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { CentralPark, Headshot } from '../assets/ExportImages';
import { Grid } from '@material-ui/core';
import Typist from 'react-typist';
import './pageCSS.scss';


const LandingScreen = () => {

    const [renderSubheader, setSubheader] = useState(false);

    const onHeaderTyped = () => {
        setSubheader(true);
    }

    return (
        <div className="Landing-container" style={{ backgroundImage: `url(${CentralPark})` }} >
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
                        <img src={Headshot} alt="mugshot" className="Landing-image"/>
                        </CSSTransition>
                    </Grid>        
            </Grid>
            
        </div>
    )
}

export default LandingScreen;
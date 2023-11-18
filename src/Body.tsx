import React, { useEffect, useState } from 'react';
function welcome(){
    return (
        <div className="welcome">
            Hi there. 
            <br></br>
            My name is 
            <br></br>
            Michelle Ding.
            </div>
    )
}

function bio(){
    return(
        <div>
            I am a programmer, advocate, and creative who 
            envisions a culture of technology that centers 
            human rights through genuine and inclusive stakeholder 
            engagement at every step of the process from development 
            to post-deployment. My work aims to bridge the gap 
            between the technical and ethical, with a focus 
            on Responsible Artificial Intelligence (AI). 
            I am based in Providence, RI, studying Computer Science 
            @ Brown University.
        </div>
    )
}

export default function Body(){
    return(
        <div className="text">
            {welcome()}
            <br></br>
            {bio()}
        </div>
    )
}
import React, { useEffect, useState } from 'react';
function welcome(){
    return (
        <div className="welcome">
            <span>Hi there.</span>
            <br></br>
            <span>My name is </span>
            <br></br>
            <span>Michelle Ding.</span>
            </div>
    )
}

function bio(){
    return(
        <div>
            I am a programmer, advocate, and creative who 
            envisions a culture of technology that centers 
            human rights through genuine and inclusive stakeholder 
            engagement. My work aims to bridge the gap 
            between the technical and ethical, with a focus 
            on Responsible Artificial Intelligence (AI). 
            I am based in Providence, Rhode Island, studying Computer Science 
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
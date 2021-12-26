import React from "react";
import './cvMain.css'

class CvMain extends React.Component{
    render() {
        return(
            <div className="main-container">
              <h2>Gulzhan Begeyeva</h2> 
              <hr/>
              <h4>Education</h4>
              <ul>
                  <li>Codify Academy, Kyrgyzstan (JS Frontend)</li>
                  <li>OSCE Academy, Kyrgyzstan (MA in Politics)</li>
                  <li>University of Tsukuba, Japan (MA in International Studies)</li>
              </ul>
              <h4>Hard Skills</h4>
              <ul>
                  <li>HTML/CSS/Javascript/React/Git - junior level</li>
                  <li>English - near fluent (TOEFL iBT score: 118 out of 120)</li>
                  <li>Trained in Agile/Scrum (certificate)</li>
              </ul>
            </div>
            
        )
    }
}

export default CvMain
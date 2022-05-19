import * as React from "react"
import * as Styles from "./styles/index.module.scss"
import icraVideo from "../static/icra22.mp4"
import icraArch from "../static/arch2.png"

// styles
const pageStyles = {
  color: "#232129",
  padding: 50,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  textAlign: "center",
  width: "70%", 
  margin: "auto"

}

const headerStyle = {
  color: "black", 
  fontSize: 30,
  textAlign: "center"
}

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <header style={headerStyle}>
        Concurrent Policy Blending and System Identification for Generalized Assistive Control
      </header>
    <br />
      <div className={Styles.nameStyle}>
        <span>Luke Bhan</span> <span>Marcos Quinones-Grueiro</span> <span>Gautum Biswas</span>
      </div> 
    <br/>
      <div className={Styles.uniStyle}>
    Vanderbilt University
    </div>
    <div className={Styles.confStyle}>
    <span> <a href="https://www.icra2022.org/" className={Styles.links}> [ICRA 2022] </a> </span> <span> <a href="https://arxiv.org/" className={Styles.links}> [Arxiv] </a> </span> 
    </div>
    <div className={Styles.vid}>
  <video controls>
      <source src={icraVideo} type="video/mp4"/>
    </video>
    </div>
    <div className={Styles.abs}>
    <img src={icraArch} alt="Architecture" className={Styles.arch} /> 

    <div className={Styles.absText}>
    <div className={Styles.absHeader}>
    Abstract:
    </div> <br/>
      In this work, we address the problem of solving complex collaborative robotic tasks subject to multiple varying parameters. Our approach combines simultaneous policy blending with system identification to create generalized policies that are robust to changes in system parameters. We employ a blending network whose state space relies solely on parameter estimates from a system identification technique. As a result, this blending network learns how to handle parameter changes instead of trying to learn how to solve the task for a generalized parameter set simultaneously. We demonstrate our scheme's ability on a collaborative robot and human itching task in which the human has motor impairments. We then showcase our approach's efficiency with a variety of system identification techniques when compared to standard domain randomization. 
    </div>

    </div>
    
    </main>
  )
}

export default IndexPage

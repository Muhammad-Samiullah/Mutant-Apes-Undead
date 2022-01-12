import React from 'react';
import './Main.css'

class Main extends React.Component {
    render() { 
        return(
            <div className='main' id="main">
                <p className='main-p'>0 / 6666</p>
                <p className='main-p-link'><a target="_blank" href="">0xE94EB78Cd5f66...</a></p>
                <p className='main-p-same'>1 Mutant Ape Costs .02 eth</p>
                <p className='main-p-same'>First 500 Mutant Apes are free!</p>
                <p className='main-p-simple'>Excluding gas fees.</p>
                <p className='main-p-simple'>Connect to the Ethereum network</p>
                <button className='main-button'>CONNECT</button>
            </div>
        );
    }
}
 
export default Main;
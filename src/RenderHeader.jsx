import React from 'react';
import './RenderHeader.css';

class RenderHeader extends React.Component {
    render() { 
        return (
            <div className='render-header'>
                <img src={this.props.Header} alt="Logo" style={{'width': '100%'}} />
                <a href="#main">Mint</a>
            </div>
        );
    }
}
 
export default RenderHeader;
import React, { Component } from 'react';

class HexEntry extends Component {

    render() {
        let offset= "0x" + Number(parseInt(this.props.offset)).toString(16).substring(1);
        let hex = Number(0x100 + parseInt(this.props.value)).toString(16).substring(1);

        return(
            <div className="Hex-entry">
                <span className = "Offset" >{offset}</span>
                <span className = "Value" >{hex}</span>
            </div>
        );
    }
}

export default HexEntry;
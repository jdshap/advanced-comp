import React, { Component } from 'react';
import HexEntry from '../HexEntry';

class HexTable extends Component {
    hex=[];

    render() {
        let data = this.props.data;
        this.hex = [];
        for(let i = 0; i < data.length; i++) {
            this.hex.push(
                <HexEntry offset={i} value={data[i]} />
            );
        }

        return (
            <div className = "Hex-table">
                {this.hex}
            </div>
        );
    }
}

export default HexTable;
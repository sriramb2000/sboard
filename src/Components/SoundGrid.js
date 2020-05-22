import { chunk } from 'lodash';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SoundSquare from './SoundSquare';


const Grid = styled.div`
    
`;

const Row = styled.div`
    display: flex;
`;

const Col = styled.div`
    flex: ${(props) => props.size};
`;

const GenerateGrid = (props) => {
    const {rows, cols, data} = props;
    const colors = ['red', 'yellow', 'green', 'cyan', 'purple'];
    const colorArr = Array(rows).fill(0).reduce((p, c, j) => {
        let i = Math.floor(Math.random()*colors.length);
        let color = colors[i];
        colors.splice(i,1);
        p.push(Array(cols).fill(color).map((el, k) => {
            console.log(j*cols+k);
            return { "color" : el, "data" : data[j*cols + k] };
        }));
        return p;
    }, []);
    console.log(colorArr);

    return (
        <Grid>
            {colorArr.map((cols) => (
                <Row>
                {cols.map((val) => (
                    <Col size={1}>
                        <SoundSquare color={val.color} soundUrl={val.data}/>
                    </Col>
                ))}
                </Row>
            ))}
        </Grid>
    );
}

export default function SoundGrid(props) {
    return (
        <GenerateGrid rows={props.rows} cols={props.cols} data={props.data}/>
    );
} 
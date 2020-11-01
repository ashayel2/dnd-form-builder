import React from 'react'

import styled from 'styled-components';

import DropDownSurvey from './DropDownSurvey'

const Card = styled.div`
    padding: 15px 25px;
    background-color: #f3f3f3;
    border: 1px solid black;
    cursor: pointer;
    margin-bottom: 15px;
    z-index: 1;
` 


const Module = (props) => {

    const dragStart = e => {
        const target = e.target;

        e.dataTransfer.setData('card_id', target.id);

        setTimeout(() => {
            target.style.display = 'none';
        })
    }

    const dragOver = (e) => {
        e.stopPropagation();
    }

    return (
        <Card
            id ={props.id}
            className={props.className}
            draggable={props.draggable}
            onDragStart={dragStart}
            onDragOver={dragOver}
        >
            {/* {props.children} */}
            <DropDownSurvey />
        </Card>
    )
}

export default Module;
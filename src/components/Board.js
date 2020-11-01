import React from 'react'
import styled from 'styled-components'

const DropBoard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  height: 60vh;
  background-color: white;
  padding: 15px;
  margin-right: 10px;
  margin-top: 0;
  z-index: 1;
`

export const Board = (props) => {
    const drop = e => {
        e.preventDefault();
        const card_id = e.dataTransfer.getData('card_id');
        console.log('card_id');

        const card = document.getElementById(card_id);
        card.style.display = 'block';

        e.target.appendChild(card);
    }

    const dragOver = e => {
        e.preventDefault();
    }

    return (
        <DropBoard 
            id={props.id}
            className={props.className}
            onDrop={drop}
            onDragOver = {dragOver}
        >
            {props.children}
        </DropBoard>
    )
}
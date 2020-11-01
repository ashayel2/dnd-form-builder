import React from 'react'

import styled from 'styled-components'

import {Board} from './Board'
// import Module  from './Module'
import {ModuleBar} from './ModuleBar'

const MainBlock = styled.div`
    background: red;
    display: flex;
    justify-content: space-between;
    max-width: 1000px;
    height: 100vh;
    overflow: hidden;
    margin: 0 auto;
    padding-right: 15px;
`

const Span = styled.div`
    display: flex;
    justify-content: center;
    /* border: 1px solid black; */
    width: 100%;
    height: 100vh;
    overflow: hidden;
    margin: 0 auto;
    padding: 15px;
    /* padding-top: 15px; */
    /* padding-left: 0; */
`

export const FormBuilder = () => {
    return (
        <MainBlock>
            
            <Span>
                <Board id='board-1'>
                    {/* <Module id="card-1" draggable="true">
                    <p>Card one</p>
                    </Module> */}
                </Board>
            </Span>


            <ModuleBar />

            {/* <ModuleBar id='board-2'>
                <Module id="card-1" draggable="true">
                    <p>Card one</p>
                </Module>
                <Module id="card-2" draggable="true">
                    <p>Card two</p>
                </Module>
                <Module id="card-3" draggable="true">
                    <p>Card three</p>
                </Module>
            </ModuleBar> */}

            
        
        </MainBlock>
    )
}

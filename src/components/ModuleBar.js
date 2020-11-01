import React from 'react'

import Module  from './Module'
import DropDownSurvey from './DropDownSurvey'




import styled from 'styled-components';



const CardList = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    background-color: #313131;
    padding: 15px;
`

// const ListStyle = styled.li`
//     list-style: none;
// `


export const ModuleBar = (props) => {

    return (
        <CardList>
            {/* <ListStyle> */}
                <Module id="card-1" draggable="true">
                    {/* <DropDownSurvey /> */}
                </Module>
            {/* </ListStyle>
            <ListStyle> */}
                <Module id="card-2" draggable="true">
                    <p>Card two</p>
                </Module>
            {/* </ListStyle>
            <ListStyle> */}
                <Module id="card-3" draggable="true">
                    <p>Card three</p>
                </Module>
            {/* </ListStyle> */}
        </CardList>
        
    )
}

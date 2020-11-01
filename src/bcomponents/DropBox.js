import React from 'react'

import initialData from './initial-data'

class DropBox extends React.Component{
    state = initialData;

    render() {
        return this.columnOrder.map(columnId => {
            const column = this.state.columns[columnId];
            const tasks = column.taskIds.map()
        })
    }
}
import React from 'react'
import { TaskProvider } from './TaskContext'
import Task from './Task'

function Wrapo() {
  return (
    <TaskProvider>
        <Task />
    </TaskProvider>
  )
}

export default Wrapo
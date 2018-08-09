import React from 'react';
import style from "./main.scss";
import TaskList from "./TaskList";
import {tasks} from "./constants"
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

const description = `
  We need a to-do list to track the progress of our tasks and we created a
static version. However, the items cannot be reordered or updated, which 
bothers us a lot.

  Could you help refine this to-do list. The detailed action items are 
listed within the list itself. Thank you very much!
`;

const Description = () => 
<div className={style.description}>{description}</div>

const Template = () =>
  <div className={style.preview}>
    <div className={style['preview-title']}>
      Sample result
          </div>
    <img src="https://media.giphy.com/media/24m649DLWjmspI75ZY/giphy.gif" alt="Preview Expected result" />
  </div>

const App = () =>
  <div>
    <Description />
    <TaskList tasks={tasks} />
    <Template />
  </div>

// render the elements
export default DragDropContext(HTML5Backend)(App);


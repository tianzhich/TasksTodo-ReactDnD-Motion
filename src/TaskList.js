import React, { Component } from "react";
import style from "./main.scss";
import { progressStyle } from "./constants";
import TaskItem from "./TaskItem";
import { spring, Motion } from "react-motion";
import StatusBar from "./StatusBar";

const ItemCollection = ({ children }) => <div className={style['item-list']}>{children}</div>;



class TaskList extends Component {
  constructor(props) {
    super(props);
    this.onMove = this.onMove.bind(this);
    this.onToggleStatus = this.onToggleStatus.bind(this);
    const tasks = props.tasks.map((task, index) => ({
      ...task,
      order: index
    }));
    this.state = {
      tasks
    }
  }

  onMove(dragId, hoverId) {
    const dragIndex = this.state.tasks.findIndex(task => task.id === dragId);
    const hoverIndex = this.state.tasks.findIndex(task => task.id === hoverId);
    const dragOrder = this.state.tasks[dragIndex].order;
    const hoverOrder = this.state.tasks[hoverIndex].order;


    this.setState({
      tasks: this.state.tasks.map(task =>
        task.id === dragId ? { ...task, order: hoverOrder } :
          task.id === hoverId ? { ...task, order: dragOrder } :
            task
      )
    });
  }

  onToggleStatus(dragId, status) {
    this.setState({
      tasks: this.state.tasks.map(task => 
        task.id === dragId ? {...task, progress: status} : task
      )
    });
  }

  render() {
    const progress = {
      Finished: 0,
      Working: 0,
      Preparing: 0,
      Cancelled: 0
    };

    const { tasks } = this.state;
    tasks.forEach(task => {
      progress[task.progress]++;
    });

    return (
      <div className={style.collection}>
        <ItemCollection >
          {
            tasks.map((task, index) => {
              let styleProps = progressStyle[task.progress];
              return (
                <Motion
                  key={index}
                  style={{ y: spring(task.order * 27, { stiffness: 1200, damping: 50 }) }}
                >
                  {({ y }) =>
                    <TaskItem
                      styleProps={
                        {
                          ...styleProps,
                          transform: `translate3d(0,${y}px,0)`
                        }
                      }
                      content={task.description}
                      detail={task.details}
                      id={task.id}
                      order={task.order}
                      onMove={this.onMove}
                      progress={task.progress}
                    />
                  }
                </Motion>
              );
            })
          }
        </ItemCollection>
        <StatusBar onToggleStatus={this.onToggleStatus} progress={progress} />
      </div>
    );
  }
}

export default TaskList;
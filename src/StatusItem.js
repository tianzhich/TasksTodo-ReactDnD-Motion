import React, { Component } from "react";
import { DropTarget } from "react-dnd";
import { ItemTypes } from "./constants";

const statusItemTarget = {
  drop(props, monitor, component) {
    let dragId = monitor.getItem().id;
    props.onToggleStatus(dragId, props.content);
  },
}

@DropTarget(ItemTypes.TASK_ITEM, statusItemTarget, (connect, monitor) => ({
  isOver: monitor.isOver(),
  connectDropTarget: connect.dropTarget()
}))
export default class StatusItem extends Component {
  render() {
    const { content, progress, isOver, connectDropTarget } = this.props;
    let background = isOver ? "#acacac" : "";
    return connectDropTarget(
      <div style={{ background }}>
        {`${content} (${progress})`}
      </div>
    );
  }


}
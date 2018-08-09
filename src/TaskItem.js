import React, { Component } from "react";
import { findDOMNode } from "react-dom"
import { DragSource, DropTarget } from "react-dnd";
import { ItemTypes } from "./constants"
import propTypes from "prop-types";
import style from "./main.scss";

const taskItemSource = {
  beginDrag(props) {
    return { id: props.id, order: props.order };
  }
}

const taskItemTarget = {
  hover(props, monitor, component) {
    const dragId = monitor.getItem().id;
    const hoverId = props.id;
    const dragOrder = monitor.getItem().order;
    const hoverOrder = props.order;

    if (dragId === hoverId) {
      return;
    }

    // 下面步骤实时获取drop条件，忽略也可以，但是会造成不必要的setState()，有一些bug
    // You can access the coordinates if you need them
    const clientOffset = monitor.getClientOffset();
    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();
    // 当前停留taskItem的正中间位置
    const hoverMiddleY = hoverBoundingRect.top + (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
    // 当前hover指针的位置
    const hoverPointerY = clientOffset.y;

    // 以下两种情况无需move，只有当指针位置过中点才需要move
    if (dragOrder < hoverOrder && hoverPointerY < hoverMiddleY) {
      return;
    }
    if (dragOrder > hoverOrder && hoverPointerY > hoverMiddleY) {
      return;
    }
    props.onMove(dragId, hoverId);
  }
}

@DragSource(ItemTypes.TASK_ITEM, taskItemSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))
@DropTarget(ItemTypes.TASK_ITEM, taskItemTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget()
}))
export default class TaskItem extends Component {
  static propTypes = {
    connectDragSource: propTypes.func.isRequired,
    connectDropTarget: propTypes.func.isRequired,
    isDragging: propTypes.bool.isRequired,
    styleProps: propTypes.object.isRequired,
    content: propTypes.string.isRequired,
    id: propTypes.number.isRequired,
    order: propTypes.number.isRequired,
    onMove: propTypes.func.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false
    };
    this.onToggleDetail = this.onToggleDetail.bind(this);
  }
  onToggleDetail() {
    this.setState({ isFlipped: !this.state.isFlipped });
  }
  render() {
    const { id, styleProps, connectDragSource, connectDropTarget, isDragging } = this.props;

    const content = this.state.isFlipped ?
      `${this.props.progress}: ${this.props.detail}` :
      `${id}. ${this.props.content}`;
    const opacity = isDragging ? 0 : 1;
    const zIndex = isDragging ? 2 : 1;
    const backgroundColor = this.state.isFlipped ? "rgb(194, 228, 254)" : "rgb(247, 247, 247)";
    return connectDragSource(connectDropTarget(
      <div
        style={{ ...styleProps, backgroundColor, zIndex, opacity }}
        className={style.item}
        onClick={this.onToggleDetail}>
        {content}
      </div>
    ));
  }
}

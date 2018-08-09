export const FINISHED = "Finished";
export const WORKING = "Working";
export const PREPARING = "Preparing";
export const CANCELLED = "Cancelled";

export const progressStyle = {
  [FINISHED]: {
    color: "red",
    textDecoration: "line-through"
  },
  [WORKING]: {
    color: "blue"
  },
  [PREPARING]: {
    color: "green",
    fontStyle: "italic"
  },
  [CANCELLED]: {
    color: "grey",
    textDecoration: "line-through"
  },

}

export const tasks = [
  {
    id: 1,
    description: "Each item should have an index number",
    details: "We need a to-do list to track the progress of our tasks and we created a static version.",
    progress: PREPARING
  },
  {
    id: 2,
    description: "After click an item, it should be flipped to its backside, in which the detailed descriptions (randomly generated) are shown",
    details: "We need a to-do list to track the progress of our tasks and we created a static version.",
    progress: PREPARING
  },
  {
    id: 3,
    description: "The order of items can be arranged by drag & drop",
    details: "We need a to-do list to track the progress of our tasks and we created a static version.",
    progress: PREPARING
  },
  {
    id: 4,
    description: "The index number should be maintained during reordering",
    details: "We need a to-do list to track the progress of our tasks and we created a static version.",
    progress: PREPARING
  },
  {
    id: 5,
    description: "Each item is in one of the following state, indicated with font color",
    details: "We need a to-do list to track the progress of our tasks and we created a static version.",
    progress: PREPARING
  },
  {
    id: 6,
    description: "Drag an item and drop it to the following state block will change its state",
    details: "We need a to-do list to track the progress of our tasks and we created a static version.",
    progress: PREPARING
  },
  {
    id: 7,
    description: "Show a count number besides the following blocks",
    details: "We need a to-do list to track the progress of our tasks and we created a static version.",
    progress: PREPARING
  },
  {
    id: 8,
    description: "The item under the cursor should be highlighted",
    details: "We need a to-do list to track the progress of our tasks and we created a static version.",
    progress: PREPARING
  }
];

// Draggable item types defination
export const ItemTypes = {
  TASK_ITEM: "task",
  STATUS_ITEM: "status"
}

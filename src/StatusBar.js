import React from "react";
import style from "./main.scss"
import { FINISHED, WORKING, PREPARING, CANCELLED } from "./constants"
import StatusItem from "./StatusItem";

export default ({ progress, onToggleStatus }) =>
  <div className={style['drop-action-zone']}>
    <StatusItem onToggleStatus={onToggleStatus} content={FINISHED} progress={progress.Finished} />
    <StatusItem onToggleStatus={onToggleStatus} content={WORKING} progress={progress.Working} />
    <StatusItem onToggleStatus={onToggleStatus} content={PREPARING} progress={progress.Preparing} />
    <StatusItem onToggleStatus={onToggleStatus} content={CANCELLED} progress={progress.Cancelled} />
  </div>
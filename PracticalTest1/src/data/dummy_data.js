import React from "react";
import { TaskCardItem } from "../components";

export const PROJECTS = [
  { id: "1", label: "All" },
  { id: "2", label: "Project One" },
  { id: "3", label: "Project Two" },
  { id: "4", label: "Project Three" },
];

export const TASK_ASSIGNED_TO = [
  { id: "1", name: "All" },
  { id: "2", name: "Marian" },
  { id: "3", name: "Robert" },
  { id: "4", name: "Pamela" },
  { id: "5", name: "Willie" },
  { id: "6", name: "Maximillian" },
];

export const TASK_LIST = [
  {
    id: "1",
    taskItem: (
      <TaskCardItem
        taskTime="2h"
        status="Due"
        iconClockShow={false}
        deadlineTime="2 days"
        priorityType="High"
        taskDone={false}
        isLate={false}
        assignedByName="Sarah H."
      />
    ),
  },
  {
    id: "2",
    taskItem: (
      <TaskCardItem
        taskTime="3:50"
        status="Working"
        iconClockShow={true}
        deadlineTime={null}
        priorityType="Normal"
        taskDone={false}
        isLate={false}
        assignedByName="Sarah H."
      />
    ),
  },
  {
    id: "3",
    taskItem: (
      <TaskCardItem
        taskTime="1:30/2h"
        status={null}
        iconClockShow={false}
        deadlineTime={null}
        priorityType={null}
        taskDone={true}
        isLate={false}
        assignedByName="You"
      />
    ),
  },
  {
    id: "4",
    taskItem: (
      <TaskCardItem
        taskTime="2:30/2h"
        status={null}
        iconClockShow={false}
        deadlineTime={null}
        priorityType={null}
        taskDone={true}
        isLate={true}
        assignedByName={null}
      />
    ),
  },
  {
    id: "5",
    taskItem: (
      <TaskCardItem
        taskTime="1:50"
        status="Working"
        iconClockShow={true}
        deadlineTime={null}
        priorityType="High"
        taskDone={false}
        isLate={false}
        assignedByName="You"
      />
    ),
  },
  {
    id: "6",
    taskItem: (
      <TaskCardItem
        taskTime="6h"
        status="Due"
        iconClockShow={false}
        deadlineTime="10 days"
        priorityType="Normal"
        taskDone={false}
        isLate={false}
        assignedByName="Trevor M."
      />
    ),
  },
];

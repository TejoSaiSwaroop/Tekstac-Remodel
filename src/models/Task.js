export class Task {
  constructor(id, title, status, owner, dueDate, priority, notes, files, timeline, lastUpdated) {
    this.id = id;
    this.title = title;
    this.status = status;
    this.owner = owner;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.files = files;
    this.timeline = timeline;
    this.lastUpdated = lastUpdated;
  }
}

export const TaskStatus = {
  COMPLETED: 'Completed',
  NOT_APPLICABLE: 'Not Applicable',
  INTERIM_COMPLETED: 'Interim Completed',
  READY_FOR_FINAL: 'Ready For Final Eval',
  WORKING_ON_IT: 'Working on it',
  STUCK: 'Stuck',
  NOT_STARTED: 'Not Started'
};

export const Priority = {
  LOW: 'Low',
  MEDIUM: 'Medium',
  HIGH: 'High'
};

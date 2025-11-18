export class Board {
  constructor(id, name, description, icon, workspace, tasks = []) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.icon = icon;
    this.workspace = workspace;
    this.tasks = tasks;
  }
}

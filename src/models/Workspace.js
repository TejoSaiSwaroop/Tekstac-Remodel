export class Workspace {
  constructor(id, name, icon, type, boards = []) {
    this.id = id;
    this.name = name;
    this.icon = icon;
    this.type = type;
    this.boards = boards;
  }
}

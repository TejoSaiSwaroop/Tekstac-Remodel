import { Task, TaskStatus, Priority } from '../models/Task';
import { Board } from '../models/Board';
import { Workspace } from '../models/Workspace';

// Mock data controller for managing application state
class DataController {
  constructor() {
    this.workspaces = this.initializeWorkspaces();
    this.boards = this.initializeBoards();
    this.tasks = this.initializeTasks();
  }

  initializeWorkspaces() {
    return [
      new Workspace('interviews', 'Interviews', 'I', 'work management'),
      new Workspace('cohorts', 'Cohorts Details', 'C', 'work management'),
      new Workspace('attendance', 'Attendance Tracking', 'A', 'work management')
    ];
  }

  initializeBoards() {
    return [
      new Board('QEA25SDGN002', 'QEA25SDGN002 - QEA SDET V4', 'QEA board for tracking tasks', '📊', 'interviews'),
      new Board('honor-hour', 'Honor Hour', 'Time tracking dashboard', '📊', 'attendance'),
      new Board('attendance', 'Attendance Sheet', 'Employee attendance tracking', '📊', 'attendance')
    ];
  }

  initializeTasks() {
    return [
      new Task(1, 'Welcome Mail Coach', TaskStatus.COMPLETED, null, 'Sep 3', null, '', 1, 'Sep 1 - 3', '13 minutes ago'),
      new Task(2, 'Software Check', TaskStatus.COMPLETED, null, 'Sep 3', null, 'Delayed Due to System', 0, 'Sep 1 - 3', '13 minutes ago'),
      new Task(3, 'Platform Access', TaskStatus.COMPLETED, null, 'Oct 3', null, '', 0, 'Sep 1 - 3', '13 minutes ago'),
      new Task(4, 'Platform Orientation', TaskStatus.COMPLETED, null, '', null, '', 0, 'Sep 1 - 3', '2 hours ago'),
      new Task(5, 'Solution Walkthrough', TaskStatus.COMPLETED, null, '', null, '', 0, 'Oct 3', '2 hours ago'),
      new Task(6, 'Profile Assessment', TaskStatus.NOT_APPLICABLE, null, '', null, '', 0, '-', '2 hours ago'),
      new Task(7, 'Delta Assessment', TaskStatus.COMPLETED, null, '', null, '', 0, 'Sep 12', '2 hours ago'),
      new Task(8, 'BH Mock', TaskStatus.COMPLETED, null, '', null, '', 0, 'Oct 1 - 3', '2 hours ago'),
      new Task(9, 'Hacker Rank Assessment', TaskStatus.NOT_APPLICABLE, null, '', null, '', 0, '-', '2 hours ago'),
      new Task(10, 'Interim Evaluation', TaskStatus.INTERIM_COMPLETED, '👤', 'Oct 13', Priority.LOW, 'Action items', 1, 'Oct 13 - 14', '1 minute ago'),
      new Task(11, 'ICT', TaskStatus.COMPLETED, null, 'Oct 14', Priority.HIGH, 'Meeting notes', 0, 'Oct 15 - 16', '4 hours ago'),
      new Task(12, 'Final Evaluation', TaskStatus.READY_FOR_FINAL, null, 'Oct 15', Priority.MEDIUM, 'Other', 0, 'Oct 17 - 18', 'Just now')
    ];
  }

  // Get all workspaces
  getWorkspaces() {
    return this.workspaces;
  }

  // Get workspace by ID
  getWorkspaceById(id) {
    return this.workspaces.find(ws => ws.id === id);
  }

  // Get all boards
  getBoards() {
    return this.boards;
  }

  // Get board by ID
  getBoardById(id) {
    return this.boards.find(board => board.id === id);
  }

  // Get boards by workspace
  getBoardsByWorkspace(workspaceId) {
    return this.boards.filter(board => board.workspace === workspaceId);
  }

  // Get all tasks
  getTasks() {
    return this.tasks;
  }

  // Get task by ID
  getTaskById(id) {
    return this.tasks.find(task => task.id === id);
  }

  // Add new task
  addTask(task) {
    this.tasks.push(task);
    return task;
  }

  // Update task
  updateTask(id, updates) {
    const taskIndex = this.tasks.findIndex(task => task.id === id);
    if (taskIndex !== -1) {
      this.tasks[taskIndex] = { ...this.tasks[taskIndex], ...updates };
      return this.tasks[taskIndex];
    }
    return null;
  }

  // Delete task
  deleteTask(id) {
    const taskIndex = this.tasks.findIndex(task => task.id === id);
    if (taskIndex !== -1) {
      this.tasks.splice(taskIndex, 1);
      return true;
    }
    return false;
  }

  // Filter tasks by status
  getTasksByStatus(status) {
    return this.tasks.filter(task => task.status === status);
  }
}

// Export singleton instance
const dataController = new DataController();
export default dataController;

# Work Management Dashboard - Monday.com Clone

A React-based work management dashboard inspired by Monday.com, featuring task boards, attendance tracking, and team collaboration tools.

## Features

- **Dashboard Home**: Overview of recent boards, workspaces, and updates
- **Task Board**: Kanban-style board with task management, status tracking, and priorities
- **Attendance Sheet**: Employee attendance tracking with weekly views
- **Honor Hour**: Time tracking across multiple boards
- **Responsive Design**: Clean, minimalistic UI following Monday.com's design principles

## Architecture

This project follows the MVC (Model-View-Controller) architecture:

```
src/
├── models/          # Data models (Task, Board, Workspace)
├── views/           # React view components (HomeView, BoardView, etc.)
├── controllers/     # Business logic and data management
├── components/      # Reusable UI components (Layout, Sidebar, Header)
└── styles/          # CSS styling files
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open your browser and navigate to:
```
http://localhost:3000
```

## Project Structure

### Models
- **Task.js**: Task data model with status and priority enums
- **Board.js**: Board data model for organizing tasks
- **Workspace.js**: Workspace model for grouping boards

### Views
- **HomeView**: Dashboard with recent boards and workspaces
- **BoardView**: Task management board with To-Do and Completed sections
- **AttendanceView**: Employee attendance tracking grid
- **HonorHourView**: Time tracking dashboard

### Components
- **Layout**: Main layout wrapper with sidebar and header
- **Sidebar**: Navigation sidebar with workspaces and boards
- **Header**: Top navigation bar with actions and user menu

### Controllers
- **DataController**: Manages application state and data operations

## Styling

The project uses a minimalistic design inspired by Monday.com with:
- Clean color palette (blues, greens, grays)
- Smooth transitions and hover effects
- Responsive grid layouts
- Custom scrollbars

## Available Scripts

- `npm start` - Run development server
- `npm build` - Build for production
- `npm test` - Run tests
- `npm eject` - Eject from Create React App

## Technologies Used

- React 18
- React Router DOM 6
- CSS3 with custom styling
- Create React App

## Future Enhancements

- Backend integration with REST API
- Real-time collaboration features
- Advanced filtering and sorting
- Custom automation workflows
- Mobile responsive design improvements
- User authentication and authorization

## License

This is a demonstration project created for educational purposes.

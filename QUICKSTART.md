# Quick Start Guide

## Installation & Setup

Follow these steps to get your Work Management Dashboard running:

### 1. Install Dependencies

Open PowerShell in the project directory and run:

```powershell
npm install
```

This will install all required packages including React, React Router, and other dependencies.

### 2. Start Development Server

```powershell
npm start
```

The application will automatically open in your default browser at `http://localhost:3000`

### 3. Navigate the Application

#### Home Page (/)
- View recently visited boards
- See workspace overview
- Check update feed

#### Board View (/board/QEA25SDGN002)
- Task management with status tracking
- Drag and drop functionality
- Filter and sort tasks
- Update task properties

#### Attendance Sheet (/attendance)
- Track employee attendance by week
- Color-coded status (Present, Absent, Vacation, Sick)
- Monthly grouping

#### Honor Hour (/honor-hour)
- Time tracking dashboard
- Multiple board widgets
- Filter and search capabilities

## Key Features

### Status Colors
- 🟢 **Green**: Completed, Present
- 🔵 **Blue**: Not Applicable
- 🟡 **Yellow**: Ready for Final, Sick Day
- 🟠 **Orange**: Interim Completed, Vacation
- 🔴 **Red**: Stuck, Absent

### Priority Levels
- 🔵 **Low**: Blue
- 🟣 **Medium**: Purple
- 🟣 **High**: Dark Purple

## Customization

### Adding New Tasks
1. Click "New task" button in Board view
2. Fill in task details
3. Set status, priority, and due date

### Creating Workspaces
1. Click "+ Add workspace" in sidebar
2. Enter workspace name and choose icon
3. Add boards to the workspace

### Modifying Styles
Edit CSS files in `src/styles/` and component-specific CSS files to customize appearance.

## Troubleshooting

### Port Already in Use
If port 3000 is already in use:
```powershell
# Set a different port
$env:PORT=3001; npm start
```

### Clear Cache
```powershell
npm cache clean --force
Remove-Item -Path node_modules -Recurse -Force
npm install
```

## Development Tips

- Components are in `src/components/`
- Views (pages) are in `src/views/`
- Data models are in `src/models/`
- Business logic is in `src/controllers/`

## Next Steps

1. Explore the codebase structure
2. Customize colors and styling
3. Add new features or views
4. Integrate with a backend API
5. Deploy to production

Happy coding! 🚀

## **Enterprise Integration Dashboard**

This is a web application, built in React, that displays widgets with simulated fetched data. It is designed to be quickly modified for use with real API data. It allows users to manage widgets, each dedicated to a program an enterprise may be using, switch data displays, and toggle from light to dark mode. 

## **Features**

  - Dynamic Widgets: Add, remove, and reposition widgets to customize the dashboard.  
  - Multiple Display Options: Switch between text-based data, graphs, and pie charts for visualization.  
  - Dark Mode: Toggle between light and dark themes for a personalized user experience.  
  - Drag-and-Drop Interface: Reorder widgets dynamically using an intuitive drag-and-drop system.  
  - API-Ready: Designed to be easily integrated with real API data instead of mock data.  

## **Tech Stack**

Frontend:
  - React – Component-based UI framework for rendering widgets and managing state.
  - Chart.js – For rendering interactive graphs and pie charts.
  - React Beautiful DnD – Enables drag-and-drop functionality for customizable widget positioning.
  - CSS – Styles the UI for responsiveness and a modern look.
Backend:
  - Node.js – JavaScript runtime for executing backend logic.
  - Express – Lightweight backend framework for handling API routes and data retrieval.  
API: Currently fetching mock data (can be configured for external data sources).

## **Deployment**

To run the application locally, install dependencies for both the frontend and backend, then start each service separately.

1. Clone the repository: git clone https://github.com/Jerem-Dough/Enterprise-Integration-Project.git
2. Ensure JavaScript, React, and Node.js are all installed and environment variables are configured.
3. Navigate to the project directory:
   - cd your-directory
   - npm install
   - cd your-backend-directory
   - node index.js
   - cd your-frontend-directory
   - npm start
   - The application will be accessible at http://localhost:3000, with backend at http://localhost:3001 (Unless changed by user).

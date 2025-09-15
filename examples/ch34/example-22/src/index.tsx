import { Route, RouteSectionProps, Router } from "@solidjs/router";
import { Component } from "solid-js";
import { render } from "solid-js/web";

type Project = {
  id: number;
  name: string;
  description: string;
}

type Task = {
  id: number;
  name: string;
  status: string;
}

const projects: Array<Project> = [
  {
    id: 1,
    name: "Build Website",
    description: "A project to create a responsive website."
  },
  {
    id: 2,
    name: "Design App",
    description: "Design the UI/UX for a mobile application."
  },
  {
    id: 3,
    name: "Write Documentation",
    description: "Comprehensive docs for our API."
  },
];

const tasks: Record<number, Array<Task>> = {
  1: [
    { id: 101, name: "Create Wireframes", status: "In Progress" },
    { id: 102, name: "Develop Homepage", status: "Not Started" },
    { id: 103, name: "Implement Responsive Design", status: "Not Started" },
    { id: 104, name: "Test Website", status: "Pending Review" },
  ],
  2: [
    { id: 201, name: "Create Mockups", status: "Completed" },
    { id: 202, name: "Review Prototypes", status: "In Progress" },
    { id: 203, name: "Finalize Color Scheme", status: "Not Started" },
    { id: 204, name: "Create Animation Effects", status: "In Progress" },
  ],
  3: [
    { id: 301, name: "Draft API Documentation", status: "In Progress" },
    { id: 302, name: "Review Drafts with Team", status: "Pending Review" },
    { id: 303, name: "Publish Final Documentation", status: "Not Started" },
    { id: 304, name: "Create FAQ Section", status: "Not Started" },
  ],
};

const ProjectsLayout: Component<RouteSectionProps> = (props) => (
  <div>
    <h1>Project Management Dashboard</h1>
    <nav>
      <a href="/projects">All Projects</a>
    </nav>
    <div>{props.children}</div>
  </div>
);

const Projects: Component<RouteSectionProps> = () => (
  <div>
    <h2>All Projects</h2>
    <ul>
      {projects.map((project) => (
        <li>
          <h3>
            <a href={`/projects/${project.id}`}>{project.name}</a>
          </h3>
          <p>{project.description}</p>
        </li>
      ))}
    </ul>
  </div>
);

const ProjectLayout: Component<RouteSectionProps> = (props) => {
  const projectId = props.params.projectId;

  const project = projects.find((p) => {
    return p.id === parseInt(projectId);
  });

  if (!project) {
    return <p>Project not found.</p>;
  }

  return (
    <div>
      <h2>Project: {project.name}</h2>
      <nav>
        <a href={`/projects/${projectId}`}>Overview</a>
        {` | `}
        <a href={`/projects/${projectId}/tasks`}>Tasks</a>
      </nav>
      <div>{props.children}</div>
    </div>
  );
};

const ProjectOverview: Component<RouteSectionProps> = (props) => {
  const projectId = props.params.projectId;

  const project = projects.find((p) => {
    return p.id === parseInt(projectId)
  });

  return (
    <div>
      <h3>Project Overview</h3>
      <p>{project?.description}</p>
      <p>Status: {project ? "Active" : "N/A"}</p>
    </div>
  );
};

const TaskList: Component<RouteSectionProps> = (props) => {
  const projectId = props.params.projectId;
  const projectTasks: Array<Task> = tasks[parseInt(projectId)] || [];

  return (
    <div>
      <h3>Task List</h3>
      <ul>
        {projectTasks.map((task) => (
          <li>
            <a href={`/projects/${projectId}/tasks/${task.id}`}>
              {task.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const TaskDetails: Component<RouteSectionProps> = (props) => {
  const projectId = props.params.projectId;
  const taskId = props.params.taskId;
  const projectTasks = tasks[parseInt(projectId)] || [];
  const task = projectTasks.find((t) => t.id === parseInt(taskId));

  return (
    <div>
      <h3>Task Details</h3>
      {task ? (
        <p>
          Task Name: {task.name} <br />
          Status: {task.status}
        </p>
      ) : (
        <p>Task not found.</p>
      )}
    </div>
  );
};

const Home: Component<RouteSectionProps> = () => {
  return (
    <main>
      <h1>Welcome to Project Manager</h1>
      <p>This app helps you organize projects and track tasks efficiently.</p>

      <section>
        <h2>How to Get Started</h2>
        <ul>
          <li>Visit the <a href="/projects">Projects page</a> to browse all active projects.</li>
          <li>Click on a project to view its details and task list.</li>
          <li>Select a task to view more information about its status and progress.</li>
        </ul>
      </section>
    </main>
  );
};

function App() {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/projects" component={ProjectsLayout}>
        <Route path="/" component={Projects} />
        <Route path="/:projectId" component={ProjectLayout}>
          <Route path="/" component={ProjectOverview} />
          <Route path="/tasks" component={TaskList} />
          <Route path="/tasks/:taskId" component={TaskDetails} />
        </Route>
      </Route>
    </Router>
  );
}

render(() => <App />, document.body);
import { createContext, useContext, useReducer } from 'react';

const ProjectsContext = createContext(null);

const STORAGE_KEY = 'projects_data';

const DEFAULT_PROJECTS = [
    { id: 1, title: 'Project Name', description: 'You can also add in this description the type of the project, if it was for web, mobile, electron.', image: '/assets/project3.png' },
    { id: 2, title: 'Project Name', description: 'You can also add in this description the type of the project, if it was for web, mobile, electron.', image: '/assets/project1.png' },
    { id: 3, title: 'Project Name', description: 'You can also add in this description the type of the project, if it was for web, mobile, electron.', image: '/assets/project2.png' },
];

function save(state) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    return state;
}

function projectsReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            return save([...state, { ...action.payload, id: Date.now() }]);
        case 'UPDATE':
            return save(state.map((p) => p.id === action.payload.id ? action.payload : p));
        case 'DELETE':
            return save(state.filter((p) => p.id !== action.payload));
        default:
            return state;
    }
}

export function ProjectsProvider({ children }) {
    const [projects, dispatch] = useReducer(
        projectsReducer,
        JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? DEFAULT_PROJECTS
    );

    const addProject = (project) => dispatch({ type: 'ADD', payload: project });
    const updateProject = (project) => dispatch({ type: 'UPDATE', payload: project });
    const deleteProject = (id) => dispatch({ type: 'DELETE', payload: id });

    return (
        <ProjectsContext.Provider value={{ projects, addProject, updateProject, deleteProject }}>
            {children}
        </ProjectsContext.Provider>
    );
}

export function useProjects() {
    return useContext(ProjectsContext);
}

import { createContext, useContext, useReducer } from 'react';
import useLocalStorage from '../hooks/useLocalStorage.js';

const ProjectsContext = createContext(null);

const DEFAULT_PROJECTS = [
    { id: 1, title: 'Project Name', description: 'You can also add in this description the type of the project, if it was for web, mobile, electron.', image: '/assets/project3.png' },
    { id: 2, title: 'Project Name', description: 'You can also add in this description the type of the project, if it was for web, mobile, electron.', image: '/assets/project1.png' },
    { id: 3, title: 'Project Name', description: 'You can also add in this description the type of the project, if it was for web, mobile, electron.', image: '/assets/project2.png' },
];

function projectsReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            return [...state, { ...action.payload, id: Date.now() }];
        case 'UPDATE':
            return state.map((p) => p.id === action.payload.id ? action.payload : p);
        case 'DELETE':
            return state.filter((p) => p.id !== action.payload);
        default:
            return state;
    }
}

export function ProjectsProvider({ children }) {
    const [stored, setStored] = useLocalStorage('projects_data', DEFAULT_PROJECTS);

    const [projects, dispatch] = useReducer(projectsReducer, stored);

    const addProject = (project) => {
        const next = [...projects, { ...project, id: Date.now() }];
        setStored(next);
        dispatch({ type: 'ADD', payload: project });
    };

    const updateProject = (project) => {
        const next = projects.map((p) => p.id === project.id ? project : p);
        setStored(next);
        dispatch({ type: 'UPDATE', payload: project });
    };

    const deleteProject = (id) => {
        const next = projects.filter((p) => p.id !== id);
        setStored(next);
        dispatch({ type: 'DELETE', payload: id });
    };

    return (
        <ProjectsContext.Provider value={{ projects, addProject, updateProject, deleteProject }}>
            {children}
        </ProjectsContext.Provider>
    );
}

export function useProjects() {
    return useContext(ProjectsContext);
}

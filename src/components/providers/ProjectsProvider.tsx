// src/components/providers/ProjectsProvider.tsx
import { createContext } from 'react';

const ProjectsContext = createContext({});

const ProjectsProvider = ({ children }) => {
    // Mock provider - la lógica real vendría aquí
    return (
        <ProjectsContext.Provider value={{}}>
            {children}
        </ProjectsContext.Provider>
    );
};

export default ProjectsProvider;
const { v4: uuidv4 } = require('uuid');
let projects = [
    {
      id: "a12345a1-bcde-4b01-9ef2-1234567890ab",
      name: "Sistema de Gestión de Producción",
      description: "Desarrollar un sistema para gestionar procesos de producción.",
      startDate: "2024-09-15",
      endDate: "2025-03-15",
      status: "en progreso",
      teamMembers: ["Andrés Silva", "Beatriz Rodríguez", "Carmen Díaz"],
      budget: 65000
    },
    {
      id: "b23456b2-cdef-4b12-9ef3-2345678901bc",
      name: "Plataforma de E-commerce",
      description: "Crear una plataforma de comercio electrónico para la venta de productos.",
      startDate: "2024-10-20",
      endDate: "2025-04-20",
      status: "planificado",
      teamMembers: ["Diego López", "Eva García", "Fernando Morales"],
      budget: 90000
    },
    {
      id: "c34567c3-def0-4b23-9ef4-3456789012cd",
      name: "App de Servicios Médicos",
      description: "Desarrollar una aplicación móvil para gestionar citas médicas.",
      startDate: "2024-11-25",
      endDate: "2025-05-25",
      status: "en progreso",
      teamMembers: ["Gabriela Ruiz", "Héctor Mendoza", "Isabel Ortega"],
      budget: 72000
    },
    {
      id: "d45678d4-ef01-4b34-9ef5-4567890123de",
      name: "Sistema de Recursos Humanos",
      description: "Implementar un sistema para gestionar recursos humanos y nómina.",
      startDate: "2024-12-10",
      endDate: "2025-06-10",
      status: "completado",
      teamMembers: ["Jorge Ramos", "Karla Vega", "Luis Delgado"],
      budget: 85000
    }
  ];
  
function getAllProjects(){
    return projects;
}

function getProjectById(id){
    return projects.find(project => project.id === id);
}

function createProject(name, description,startDate,endDate,status,teamMembers,budget){
    const newProject = {
        id: uuidv4(),
        name,
        description,
        startDate,
        endDate,
        status,
        teamMembers,
        budget
    }
    projects.push(newProject);
    return newProject;
}

function updateProject(projectToUpdated){
    projects = projects.map((t) => (t.id === projectToUpdated.id ? projectToUpdated : t));
    const foundProject = projects.find((t) => t.id === projectToUpdated.id);
    return foundProject;
}

function deleteProject(id){
    const projectToDelete = getProjectById(id);
    console.log("project to delete: " + projectToDelete);
    projects = projects.filter((project) => project.id !== id);
    return projectToDelete;
}

module.exports = {
    getAllProjects,
    getProjectById,
    createProject,
    updateProject,
    deleteProject
}
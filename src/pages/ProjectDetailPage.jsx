import { useParams, useNavigate } from 'react-router-dom';
import { useProjects } from '../context/ProjectsContext.jsx';

function ProjectDetailPage() {
    const { id } = useParams();
    const { projects } = useProjects();
    const navigate = useNavigate();

    const project = projects.find((p) => p.id === Number(id));

    if (!project) {
        navigate('/404', { replace: true });
        return null;
    }

    return (
        <div className="min-h-screen bg-[var(--color-bg-gray)]">
            <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col gap-10">

                <button
                    onClick={() => navigate(-1)}
                    className="self-start font-[Nunito] text-sm text-[var(--color-font-medium-emphasis)] hover:text-[var(--color-font-high-emphasis)] transition-colors"
                >
                    ← Retour
                </button>

                <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden flex flex-col md:flex-row md:h-[524px]">
                    {project.image && (
                        <div className="w-full md:w-1/2 h-[300px] md:h-full">
                            <img
                                src={project.image}
                                alt={`Aperçu du projet ${project.title}`}
                                className="w-full h-full object-cover object-top"
                            />
                        </div>
                    )}
                    <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center gap-6">
                        <h1 className="font-[Playfair_Display] text-4xl md:text-5xl font-bold text-[var(--color-font-high-emphasis)]">
                            {project.title}
                        </h1>
                        <p className="font-[Nunito] text-[var(--color-font-medium-emphasis)] text-lg leading-relaxed">
                            {project.description}
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ProjectDetailPage;

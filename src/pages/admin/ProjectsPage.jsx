import { useState } from 'react';
import { useProjects } from '../../context/ProjectsContext.jsx';
import AdminLayout from '../../layouts/AdminLayout.jsx';
import ConfirmModal from '../../components/ConfirmModal.jsx';

const EMPTY_FORM = { title: '', description: '', image: '' };

function ProjectsPage() {
    const { projects, addProject, updateProject, deleteProject } = useProjects();
    const [form, setForm] = useState(EMPTY_FORM);
    const [editingId, setEditingId] = useState(null);
    const [confirmId, setConfirmId] = useState(null);

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingId !== null) {
            updateProject({ ...form, id: editingId });
            setEditingId(null);
        } else {
            addProject(form);
        }
        setForm(EMPTY_FORM);
    };

    const handleEdit = (project) => {
        setEditingId(project.id);
        setForm({ title: project.title, description: project.description, image: project.image });
    };

    const handleCancel = () => {
        setEditingId(null);
        setForm(EMPTY_FORM);
    };

    return (
        <>
        {confirmId !== null && (
            <ConfirmModal
                message="Êtes-vous sûr de vouloir supprimer ce projet ?"
                onConfirm={() => { deleteProject(confirmId); setConfirmId(null); }}
                onCancel={() => setConfirmId(null)}
            />
        )}
        <AdminLayout>
            <div className="max-w-4xl mx-auto flex flex-col gap-8">
                <h1 className="font-[Playfair_Display] text-3xl font-bold text-[var(--color-font-high-emphasis)]">
                    Gestion des Projets
                </h1>

                <div className="bg-white rounded-2xl shadow p-6 flex flex-col gap-4">
                    <h2 className="font-[Playfair_Display] text-xl font-bold text-[var(--color-font-high-emphasis)]">
                        {editingId !== null ? 'Modifier le projet' : 'Ajouter un projet'}
                    </h2>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <div className="flex flex-col gap-1">
                            <label className="font-[Nunito] text-sm text-[var(--color-font-medium-emphasis)]">Titre</label>
                            <input
                                name="title"
                                value={form.title}
                                onChange={handleChange}
                                required
                                placeholder="Nom du projet"
                                className="border border-gray-200 rounded-lg px-4 py-2 font-[Nunito] text-sm outline-none focus:border-[var(--color-brand-yellow)] transition-colors"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="font-[Nunito] text-sm text-[var(--color-font-medium-emphasis)]">Description</label>
                            <textarea
                                name="description"
                                value={form.description}
                                onChange={handleChange}
                                required
                                rows={3}
                                placeholder="Description du projet"
                                className="border border-gray-200 rounded-lg px-4 py-2 font-[Nunito] text-sm outline-none focus:border-[var(--color-brand-yellow)] transition-colors resize-none"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="font-[Nunito] text-sm text-[var(--color-font-medium-emphasis)]">Image (chemin ou URL)</label>
                            <input
                                name="image"
                                value={form.image}
                                onChange={handleChange}
                                placeholder="/assets/project1.png"
                                className="border border-gray-200 rounded-lg px-4 py-2 font-[Nunito] text-sm outline-none focus:border-[var(--color-brand-yellow)] transition-colors"
                            />
                        </div>
                        <div className="flex gap-3 justify-end">
                            {editingId !== null && (
                                <button
                                    type="button"
                                    onClick={handleCancel}
                                    className="px-6 py-2 font-[Nunito] text-sm text-[var(--color-font-medium-emphasis)] hover:text-[var(--color-font-high-emphasis)] transition-colors"
                                >
                                    Annuler
                                </button>
                            )}
                            <button
                                type="submit"
                                className="bg-[var(--color-brand-yellow)] text-[var(--color-font-high-emphasis)] font-[Nunito] font-semibold px-6 py-2 rounded-lg hover:opacity-90 transition-opacity"
                            >
                                {editingId !== null ? 'Enregistrer' : 'Ajouter'}
                            </button>
                        </div>
                    </form>
                </div>

                <div className="flex flex-col gap-4">
                    {projects.length === 0 && (
                        <div className="bg-white rounded-2xl shadow p-8 text-center text-[var(--color-font-medium-emphasis)] font-[Nunito]">
                            Aucun projet pour l'instant.
                        </div>
                    )}
                    {projects.map((project) => (
                        <div key={project.id} className="bg-white rounded-2xl shadow p-5 flex items-center gap-5">
                            {project.image && (
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-20 h-20 object-cover rounded-xl flex-shrink-0"
                                />
                            )}
                            <div className="flex-1 min-w-0">
                                <p className="font-[Playfair_Display] font-bold text-[var(--color-font-high-emphasis)] truncate">
                                    {project.title}
                                </p>
                                <p className="font-[Nunito] text-sm text-[var(--color-font-medium-emphasis)] mt-1 line-clamp-2">
                                    {project.description}
                                </p>
                            </div>
                            <div className="flex gap-3 flex-shrink-0">
                                <button
                                    onClick={() => handleEdit(project)}
                                    className="font-[Nunito] text-sm text-[var(--color-font-medium-emphasis)] hover:text-[var(--color-font-high-emphasis)] transition-colors"
                                >
                                    Modifier
                                </button>
                                <button
                                    onClick={() => setConfirmId(project.id)}
                                    className="font-[Nunito] text-sm text-red-400 hover:text-red-600 transition-colors"
                                >
                                    Supprimer
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </AdminLayout>
        </>
    );
}

export default ProjectsPage;

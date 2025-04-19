import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github: string;
  liveDemo?: string;
  features: string[];
  challenges: string[];
  outcome: string;
}

const ProjectManager = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [projects, setProjects] = useState<Project[]>([]);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [isFeatured, setIsFeatured] = useState(false);
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState<Project>({
    title: '',
    description: '',
    technologies: [],
    image: '',
    github: '',
    liveDemo: '',
    features: [],
    challenges: [],
    outcome: ''
  });

  useEffect(() => {
    // Load projects from localStorage on component mount
    const savedProjects = localStorage.getItem('portfolioProjects');
    if (savedProjects) {
      setProjects(JSON.parse(savedProjects));
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace these with your actual credentials
    if (username === 'admin' && password === 'your-secure-password') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid credentials');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate('/');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleArrayInput = (e: React.ChangeEvent<HTMLTextAreaElement>, field: keyof Project) => {
    const values = e.target.value.split('\n').filter(item => item.trim() !== '');
    setFormData(prev => ({ ...prev, [field]: values }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      // Create a temporary URL for the image
      const imageUrl = URL.createObjectURL(file);
      setFormData(prev => ({ ...prev, image: imageUrl }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingProject) {
      // Update existing project
      const updatedProjects = projects.map(project => 
        project.title === editingProject.title ? formData : project
      );
      setProjects(updatedProjects);
      localStorage.setItem('portfolioProjects', JSON.stringify(updatedProjects));
    } else {
      // Add new project
      const newProjects = isFeatured ? [formData, ...projects] : [...projects, formData];
      setProjects(newProjects);
      localStorage.setItem('portfolioProjects', JSON.stringify(newProjects));
    }

    // Reset form
    setFormData({
      title: '',
      description: '',
      technologies: [],
      image: '',
      github: '',
      liveDemo: '',
      features: [],
      challenges: [],
      outcome: ''
    });
    setEditingProject(null);
    setIsFeatured(false);
  };

  const handleEdit = (project: Project) => {
    setEditingProject(project);
    setFormData(project);
  };

  const handleDelete = (title: string) => {
    const updatedProjects = projects.filter(project => project.title !== title);
    setProjects(updatedProjects);
    localStorage.setItem('portfolioProjects', JSON.stringify(updatedProjects));
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="max-w-md w-full space-y-8 p-8 bg-card rounded-lg shadow-lg">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-secondary">
              Admin Login
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            {error && (
              <div className="text-red-500 text-center">{error}</div>
            )}
            <div className="rounded-md shadow-sm space-y-4">
              <div>
                <label htmlFor="username" className="sr-only">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-secondary focus:border-secondary focus:z-10 sm:text-sm"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-secondary focus:border-secondary focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-secondary hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate('/')}
            className="text-secondary hover:text-secondary/80 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          <h2 className="text-3xl font-bold text-secondary">Manage Projects</h2>
        </div>
        <button
          onClick={handleLogout}
          className="text-secondary hover:text-secondary/80 transition-colors"
        >
          Logout
        </button>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6 mb-8 bg-card p-6 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2 text-textSecondary">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full p-2 border rounded bg-background text-text"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2 text-textSecondary">GitHub URL</label>
            <input
              type="url"
              name="github"
              value={formData.github}
              onChange={handleInputChange}
              className="w-full p-2 border rounded bg-background text-text"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-textSecondary">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="w-full p-2 border rounded bg-background text-text"
            rows={3}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-textSecondary">Technologies (one per line)</label>
          <textarea
            value={formData.technologies.join('\n')}
            onChange={(e) => handleArrayInput(e, 'technologies')}
            className="w-full p-2 border rounded bg-background text-text"
            rows={3}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-textSecondary">Project Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full p-2 border rounded bg-background text-text"
            required={!editingProject}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-textSecondary">Features (one per line)</label>
          <textarea
            value={formData.features.join('\n')}
            onChange={(e) => handleArrayInput(e, 'features')}
            className="w-full p-2 border rounded bg-background text-text"
            rows={4}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-textSecondary">Challenges (one per line)</label>
          <textarea
            value={formData.challenges.join('\n')}
            onChange={(e) => handleArrayInput(e, 'challenges')}
            className="w-full p-2 border rounded bg-background text-text"
            rows={4}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-textSecondary">Outcome</label>
          <textarea
            name="outcome"
            value={formData.outcome}
            onChange={handleInputChange}
            className="w-full p-2 border rounded bg-background text-text"
            rows={3}
            required
          />
        </div>

        <div className="flex items-center space-x-4">
          <label className="flex items-center text-textSecondary">
            <input
              type="checkbox"
              checked={isFeatured}
              onChange={(e) => setIsFeatured(e.target.checked)}
              className="mr-2"
            />
            <span>Featured Project</span>
          </label>
        </div>

        <button
          type="submit"
          className="bg-secondary text-white px-4 py-2 rounded hover:bg-secondary/80 transition-colors"
        >
          {editingProject ? 'Update Project' : 'Add Project'}
        </button>
      </form>

      <div className="mt-8">
        <h3 className="text-2xl font-bold mb-4 text-secondary">Current Projects</h3>
        <div className="space-y-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="border p-4 rounded bg-card"
            >
              <div className="flex justify-between items-start">
                <h4 className="text-xl font-bold text-secondary">{project.title}</h4>
                <div className="space-x-2">
                  <button
                    onClick={() => handleEdit(project)}
                    className="text-secondary hover:text-secondary/80 transition-colors"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      if (window.confirm('Are you sure you want to delete this project?')) {
                        handleDelete(project.title);
                      }
                    }}
                    className="text-red-500 hover:text-red-700 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
              <p className="text-textSecondary mt-2">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectManager; 
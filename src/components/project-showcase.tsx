import SectionTitle from '@/components/shared/section-title';
import ProjectCard from '@/components/project-card';

const projects = [
  {
    title: 'Futuristic Dashboard UI',
    description: 'A sleek, animated dashboard interface for data visualization, built with Next.js and Recharts, showcasing real-time analytics.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'dashboard analytics',
    tags: ['Next.js', 'TypeScript', 'TailwindCSS', 'Recharts', 'UI/UX'],
    liveLink: '#',
    repoLink: '#',
  },
  {
    title: 'AI-Powered Mobile App',
    description: 'Cross-platform mobile application integrating machine learning models for personalized user experiences. Developed using Kotlin and Python backend.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'mobile app',
    tags: ['Kotlin', 'Python', 'TensorFlow Lite', 'Firebase', 'Mobile UI'],
    liveLink: '#',
  },
  {
    title: 'Interactive Web Tool',
    description: 'A collaborative web-based tool for developers, featuring real-time code editing and project management capabilities with a focus on performance.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'web tool',
    tags: ['React', 'WebSockets', 'Node.js', 'MongoDB', 'DevTools'],
    repoLink: '#',
  },
   {
    title: 'E-commerce Platform Modernization',
    description: 'Led the redesign and migration of a legacy e-commerce system to a microservices architecture using Spring Boot and Kafka, improving scalability and performance.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'ecommerce shopping',
    tags: ['Java', 'Spring Boot', 'Kafka', 'Microservices', 'AWS'],
    liveLink: '#',
  },
];

const ProjectShowcase: React.FC = () => {
  return (
    <section className="py-12">
      <SectionTitle title="Featured Projects" description="A selection of my recent work, demonstrating diverse skills and technologies." />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectShowcase;

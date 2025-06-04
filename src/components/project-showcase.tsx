import SectionTitle from '@/components/shared/section-title';
import ProjectCard from '@/components/project-card';

const projects = [
  {
    title: 'Android Chat Application',
    description: 'An Android application built with Java and XML, utilizing Firebase for real-time chat functionalities including adding, deleting, and updating messages.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'chat mobile',
    tags: ['Java', 'XML', 'Firebase', 'Android'],
    // liveLink: '#', // Add live link if available
    // repoLink: '#', // Add repo link if available
  },
  {
    title: 'SleepWell: AI-Powered Sleep Assistant',
    description: 'An Android app developed with Kotlin and Jetpack Compose, featuring melodic sleep sounds, phone scheduling (black & white mode, alarms), AI-driven sleep analysis, and story reading. Built with RoomDB, Firebase Auth, API integration, and MVVM.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'sleep mobile',
    tags: ['Kotlin', 'Jetpack Compose', 'RoomDB', 'Firebase Auth', 'MVVM', 'Android', 'AI', 'API Integration'],
    // liveLink: '#',
    // repoLink: '#',
  },
  {
    title: 'Desktop Weather Forecaster',
    description: 'A desktop application created using Python and a weather API, providing 7-day weather forecasts for any specified city.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'weather desktop',
    tags: ['Python', 'Weather API', 'Desktop App'],
    // liveLink: '#',
    // repoLink: '#',
  },
   {
    title: 'MyFinance Tracker Website',
    description: 'A web application for tracking personal finances, built with Flask (backend), HTML/CSS (frontend), and SQL (database). Features include managing bank details, recording expenses, and viewing aggregated expense data.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'finance web',
    tags: ['Flask', 'Python', 'HTML', 'CSS', 'SQL', 'Web App'],
    // liveLink: '#',
    // repoLink: '#',
  },
  {
    title: 'Console-Based Learning Management System',
    description: 'A Learning Management System (LMS) developed purely in Java, running in the console. It allows teachers to add/assign courses, enroll students, assign work, and manage various educational tasks.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'console code',
    tags: ['Java', 'Console App', 'LMS'],
    // liveLink: '#',
    // repoLink: '#',
  }
];

const ProjectShowcase: React.FC = () => {
  return (
    <section className="py-12">
      <SectionTitle title="Featured Projects" description="A selection of my work, demonstrating diverse skills and technologies." />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectShowcase;

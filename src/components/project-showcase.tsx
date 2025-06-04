
import SectionTitle from '@/components/shared/section-title';
import ProjectCard from '@/components/project-card';

const projects = [
  {
    title: 'Android Note Taking App',
    description: 'An Android application built with Java and XML, utilizing Firebase for functionalities like adding, deleting, and updating notes.',
    imageUrl: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    imageHint: 'note mobile',
    tags: ['Java', 'XML', 'Firebase', 'Android'],
    repoLink: 'https://github.com/Amit-kumar80844/Androd_Note_app',
  },
  {
    title: 'SleepWell: AI-Powered Sleep Assistant',
    description: 'An Android app developed with Kotlin and Jetpack Compose, featuring melodic sleep sounds, phone scheduling (black & white mode, alarms), AI-driven sleep analysis, and story reading. Built with RoomDB, Firebase Auth, API integration, and MVVM.',
    imageUrl: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    imageHint: 'sleep mobile',
    tags: ['Kotlin', 'Jetpack Compose', 'RoomDB', 'Firebase Auth', 'MVVM', 'Android', 'AI', 'API Integration'],
    repoLink: 'https://github.com/Amit-kumar80844/SleepHelperApp',
  },
  {
    title: 'Desktop Weather Forecaster',
    description: 'A desktop application created using Python and a weather API, providing 7-day weather forecasts for any specified city.',
    imageUrl: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    imageHint: 'weather desktop',
    tags: ['Python', 'Weather API', 'Desktop App'],
    repoLink: 'https://github.com/Amit-kumar80844/Weather-app',
  },
   {
    title: 'MyFinance Tracker Website',
    description: 'A web application for tracking personal finances, built with Flask (backend), HTML/CSS (frontend), and SQL (database). Features include managing bank details, recording expenses, and viewing aggregated expense data.',
    imageUrl: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    imageHint: 'finance web',
    tags: ['Flask', 'Python', 'HTML', 'CSS', 'SQL', 'Web App'],
    repoLink: 'https://github.com/Amit-kumar80844/Personal-Finance-tracker',
  },
  {
    title: 'Console-Based Learning Management System',
    description: 'A Learning Management System (LMS) developed purely in Java, running in the console. It allows teachers to add/assign courses, enroll students, assign work, and manage various educational tasks.',
    imageUrl: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    imageHint: 'console code',
    tags: ['Java', 'Console App', 'LMS'],
    repoLink: 'https://github.com/Amit-kumar80844/LMS_in_java',
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

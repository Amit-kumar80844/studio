import SectionTitle from '@/components/shared/section-title';
import SkillCard from '@/components/skill-card';
import { Code2, Smartphone, Database, Shell, FileCode, Palette, PenTool, BrainCircuit } from 'lucide-react'; // Updated imports

const skills = [
  { title: 'Android Development', icon: <Smartphone /> },
  { title: 'Kotlin', icon: <Code2 /> },
  { title: 'Jetpack Compose', icon: <Smartphone /> },
  { title: 'Java', icon: <Code2 /> },
  { title: 'Python', icon: <Code2 /> },
  { title: 'C/C++', icon: <Code2 /> },
  { title: 'SQL', icon: <Database /> },
  { title: 'Firebase', icon: <Database /> },
  { title: 'Room Database', icon: <Database /> },
  { title: 'Linux Shell', icon: <Shell /> },
  { title: 'HTML', icon: <FileCode /> },
  { title: 'CSS', icon: <Palette /> },
  { title: 'XML', icon: <FileCode /> },
  { title: 'Figma', icon: <PenTool /> },
  { title: 'DSA (200+ problems)', icon: <BrainCircuit /> },
];

const SkillPanels: React.FC = () => {
  return (
    <section className="py-12">
      <SectionTitle title="My Skill Arsenal" description="A glimpse into the technologies and tools I wield." />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
        {skills.map((skill) => (
          <SkillCard key={skill.title} icon={skill.icon} title={skill.title} />
        ))}
      </div>
    </section>
  );
};

export default SkillPanels;

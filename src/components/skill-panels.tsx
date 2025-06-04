import SectionTitle from '@/components/shared/section-title';
import SkillCard from '@/components/skill-card';
import { Code2, Palette, Server, Cloud, Smartphone, Database, Wand2, Brain } from 'lucide-react'; // Added Wand2 for UI/UX, Brain for AI/ML

const skills = [
  { title: 'Kotlin', icon: <Code2 />, category: 'Languages & Frameworks' },
  { title: 'Python', icon: <Code2 />, category: 'Languages & Frameworks' },
  { title: 'JavaScript/TypeScript', icon: <Code2 />, category: 'Languages & Frameworks' },
  { title: 'React/Next.js', icon: <Smartphone />, category: 'Frontend' },
  { title: 'Node.js/Express', icon: <Server />, category: 'Backend' },
  { title: 'UI/UX Design', icon: <Palette />, category: 'Design' },
  { title: 'Responsive Design', icon: <Wand2 />, category: 'Design' },
  { title: 'Databases (SQL/NoSQL)', icon: <Database />, category: 'Backend' },
  { title: 'Cloud Platforms (AWS/GCP)', icon: <Cloud />, category: 'DevOps & Cloud' },
  { title: 'AI/ML Integration', icon: <Brain />, category: 'Specialized Skills' },
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

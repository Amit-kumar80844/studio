import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { AtSign, Github, Linkedin, Briefcase, Mail } from 'lucide-react';

const ProfileSection: React.FC = () => {
  return (
    <aside className="w-full md:w-80 lg:w-96 bg-card/50 backdrop-blur-sm p-6 md:border-r border-border flex-shrink-0">
      <Card className="bg-transparent border-0 md:border shadow-none md:shadow-lg md:shadow-primary/10 sticky top-6">
        <CardHeader className="items-center text-center p-4 md:p-6">
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-primary shadow-glow-primary mb-4">
            <Image
              src="https://placehold.co/200x200.png"
              alt="Profile Photo - Amit Kumar"
              width={200}
              height={200}
              className="object-cover"
              data-ai-hint="professional portrait"
            />
          </div>
          <CardTitle className="text-2xl font-headline text-primary">Amit Kumar</CardTitle>
          <CardDescription className="text-accent font-medium">IIIT Kottayam Student - 3rd Year</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-sm">
          <p className="text-center text-muted-foreground leading-relaxed">
            Passionate developer specializing in Android development and Kotlin Multiplatform. Creating innovative and dynamic digital experiences.
          </p>
          <div className="space-y-2 pt-4">
            <a href="mailto:amitsingh80020@gmail.com" className="flex items-center gap-3 hover:text-primary transition-colors group">
              <AtSign className="w-5 h-5 text-accent group-hover:text-primary transition-colors" />
              <span>amitsingh80020@gmail.com</span>
            </a>
            <a href="mailto:amit23bcs210@iiitkottayam.ac.in" className="flex items-center gap-3 hover:text-primary transition-colors group">
              <Mail className="w-5 h-5 text-accent group-hover:text-primary transition-colors" />
              <span>amit23bcs210@iiitkottayam.ac.in</span>
            </a>
            <a href="https://github.com/Amit-kumar80844" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-primary transition-colors group">
              <Github className="w-5 h-5 text-accent group-hover:text-primary transition-colors" />
              <span>github.com/Amit-kumar80844</span>
            </a>
            <a href="https://www.linkedin.com/in/amit-kumar-859b57295/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-primary transition-colors group">
              <Linkedin className="w-5 h-5 text-accent group-hover:text-primary transition-colors" />
              <span>linkedin.com/in/amit-kumar-859b57295</span>
            </a>
             <div className="flex items-center gap-3">
                <Briefcase className="w-5 h-5 text-accent"/>
                <span>Exploring opportunities</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </aside>
  );
};

export default ProfileSection;

import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  className?: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, className }) => {
  return (
    <Card className={cn("text-center bg-card/70 backdrop-blur-sm hover:shadow-glow-primary transition-all duration-300 group transform hover:-translate-y-1", className)}>
      <CardHeader className="items-center pb-2 pt-6">
        <div className="p-3 rounded-full bg-primary/10 mb-3 text-primary group-hover:text-accent transition-colors duration-300">
          {React.cloneElement(icon as React.ReactElement, { className: "w-8 h-8" })}
        </div>
        <CardTitle className="text-lg font-medium group-hover:text-primary transition-colors duration-300">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pb-6">
        {/* Optional: Add a short description here if needed */}
      </CardContent>
    </Card>
  );
};

export default SkillCard;

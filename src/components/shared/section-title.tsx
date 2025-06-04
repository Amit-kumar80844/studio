import * as React from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  description?: string;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, description, className }) => {
  return (
    <div className={cn("mb-8 md:mb-12", className)}>
      <h2 className="text-3xl sm:text-4xl font-headline text-primary mb-2 text-center md:text-left">{title}</h2>
      {description && <p className="text-md sm:text-lg text-muted-foreground text-center md:text-left">{description}</p>}
    </div>
  );
};

export default SectionTitle;

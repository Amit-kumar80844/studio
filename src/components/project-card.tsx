import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  tags: string[];
  liveLink?: string;
  repoLink?: string;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  imageHint,
  tags,
  liveLink,
  repoLink,
  className,
}) => {
  return (
    <Card className={cn("bg-card/60 backdrop-blur-md shadow-xl shadow-primary/10 hover:shadow-glow-accent transition-all duration-300 flex flex-col overflow-hidden group transform hover:-translate-y-1", className)}>
      <CardHeader className="p-0">
        <div className="aspect-[16/10] overflow-hidden relative">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            data-ai-hint={imageHint}
          />
           <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70 group-hover:opacity-30 transition-opacity duration-300" />
        </div>
      </CardHeader>
      <CardContent className="p-4 md:p-6 flex-grow">
        <CardTitle className="text-xl font-headline text-primary mb-2 group-hover:text-accent transition-colors">{title}</CardTitle>
        <CardDescription className="text-muted-foreground text-sm mb-3 leading-relaxed line-clamp-3">{description}</CardDescription>
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="font-code text-xs bg-primary/20 text-primary border-primary/30 group-hover:bg-accent/20 group-hover:text-accent group-hover:border-accent/30 transition-colors">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 md:p-6 pt-0 flex gap-2">
        {liveLink && (
          <Button asChild variant="outline" size="sm" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground hover:shadow-glow-accent transition-all">
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
            </a>
          </Button>
        )}
        {repoLink && (
          <Button asChild variant="ghost" size="sm" className="text-muted-foreground hover:text-primary transition-colors">
            <a href={repoLink} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> Source Code
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;

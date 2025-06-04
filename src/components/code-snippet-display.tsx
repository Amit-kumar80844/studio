import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area'; // For long code snippets
import { cn } from '@/lib/utils';

interface CodeSnippetDisplayProps {
  language: string;
  code: string;
  title: string;
  className?: string;
}

const CodeSnippetDisplay: React.FC<CodeSnippetDisplayProps> = ({ language, code, title, className }) => {
  // Basic styling for a "live activity" feel, like a subtle pulse on the border or background.
  // This could be enhanced with more complex CSS animations.
  const animatedStyle = "animate-pulse-glow";
  
  return (
    <Card className={cn("bg-card/80 backdrop-blur-md shadow-lg shadow-accent/10 overflow-hidden", className, animatedStyle)}>
      <CardHeader className="pb-2 pt-4 px-4">
        <CardTitle className="font-code text-sm text-accent">{title}</CardTitle>
        <CardDescription className="font-code text-xs text-muted-foreground">Language: {language}</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-64 md:h-72"> {/* Adjust height as needed */}
          <pre className="p-4 text-sm font-code bg-black/30 text-primary overflow-x-auto">
            <code className={`language-${language}`}>
              {code.trim()}
            </code>
          </pre>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default CodeSnippetDisplay;

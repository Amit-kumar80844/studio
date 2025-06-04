import AppLayout from '@/components/layout/app-layout';
import ProjectShowcase from '@/components/project-showcase';
import SkillPanels from '@/components/skill-panels';
import CodeSnippetDisplay from '@/components/code-snippet-display';
import SectionTitle from '@/components/shared/section-title'; // For the welcome message
import { Button } from '@/components/ui/button';
import { ArrowDownToLine } from 'lucide-react';

const kotlinSnippet = `
data class User(val id: Long, val name: String, val email: String?)

suspend fun fetchUserData(userId: Long): User {
    // Simulate network call
    delay(1000)
    return User(userId, "Kotlin Coder", "kotlin@example.dev")
}

fun main() {
    runBlocking {
        val user = fetchUserData(1)
        println("Fetched User: \${user.name}")
    }
}
`;

const pythonSnippet = `
import asyncio

async def generate_report(data_source):
    print(f"Connecting to {data_source}...")
    await asyncio.sleep(1)  # Simulate I/O
    report_data = {"source": data_source, "items": [1, 2, 3], "status": "completed"}
    print("Report generated.")
    return report_data

async def main():
    report = await generate_report("Sales DB")
    print(f"Final Report: {report}")

if __name__ == "__main__":
    asyncio.run(main())
`;

const javascriptSnippet = `
const animateElement = (element, animationName, duration = '1s') => {
  if (!element) return;
  element.style.animation = \`\${animationName} \${duration} ease-out\`;
  element.addEventListener('animationend', () => {
    element.style.animation = ''; // Reset after animation
  }, { once: true });
};

// Usage:
// const myButton = document.getElementById('myCoolButton');
// animateElement(myButton, 'fadeInUp');
`;


export default function HomePage() {
  return (
    <AppLayout>
      <div className="space-y-16 md:space-y-24">
        <section className="text-center pt-8 md:pt-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-headline mb-4">
            Welcome to <span className="text-primary">DevPort</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            A futuristic digital workspace showcasing innovation, skill, and a passion for software development. Explore my projects and journey into the world of code.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground hover:shadow-glow-primary transition-all">
             <ArrowDownToLine className="mr-2 h-5 w-5" /> Explore My Work
          </Button>
        </section>

        <ProjectShowcase />
        <SkillPanels />

        <section className="py-12">
          <SectionTitle title="Code Craftsmanship" description="Snippets from my daily coding adventures." />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            <CodeSnippetDisplay language="kotlin" code={kotlinSnippet} title="Async Kotlin Example" />
            <CodeSnippetDisplay language="python" code={pythonSnippet} title="Python Async Report" />
            <CodeSnippetDisplay language="javascript" code={javascriptSnippet} title="JS DOM Animation" />
          </div>
        </section>
        
      </div>
    </AppLayout>
  );
}

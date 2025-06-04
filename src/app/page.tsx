
import AppLayout from '@/components/layout/app-layout';
import ProjectShowcase from '@/components/project-showcase';
import SkillPanels from '@/components/skill-panels';
import CodeSnippetDisplay from '@/components/code-snippet-display';
import SectionTitle from '@/components/shared/section-title'; // For the welcome message
import { Button } from '@/components/ui/button';
import { ArrowDownToLine } from 'lucide-react';

const kotlinCoroutinesSnippet = `
import kotlinx.coroutines.*
import kotlinx.serialization.Serializable
import kotlinx.serialization.json.Json

@Serializable
data class Post(val userId: Int, val id: Int, val title: String, val body: String)

suspend fun fetchAndProcessPost(postId: Int): Post {
    // Simulate a network call
    delay(1000)
    val mockJsonResponse = """
        {
            "userId": 1,
            "id": $postId,
            "title": "Fetched Post Title",
            "body": "This is the body of post $postId."
        }
    """.trimIndent()
    return Json.decodeFromString<Post>(mockJsonResponse)
}

fun main() = runBlocking {
    val post = fetchAndProcessPost(5)
    println("Title: \${post.title}")
    println("Body: \${post.body}")
}
`;

const kotlinDesktopSnippet = `
import androidx.compose.desktop.ui.tooling.preview.Preview
import androidx.compose.material.Button
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.runtime.*
import androidx.compose.ui.window.Window
import androidx.compose.ui.window.application

fun main() = application {
    Window(onCloseRequest = ::exitApplication, title = "My Kotlin Desktop App") {
        var text by remember { mutableStateOf("Hello, Desktop!") }

        MaterialTheme {
            Button(onClick = {
                text = "Button Clicked!"
            }) {
                Text(text)
            }
        }
    }
}

@Preview
@Composable
fun AppPreview() {
    // This is a preview for Jetpack Compose for Desktop
    // It might not render directly in all IDEs without specific setup
    MaterialTheme {
        Text("Hello, Desktop Preview!")
    }
}
`;

const cppDsaSnippet = `
#include <iostream>
#include <string>
#include <algorithm> // For std::reverse

// Function to check if a string is a palindrome
bool isPalindrome(const std::string& str) {
    std::string reversed_str = str;
    std::reverse(reversed_str.begin(), reversed_str.end());
    return str == reversed_str;
}

int main() {
    std.string testStr1 = "madam";
    std.string testStr2 = "hello";

    if (isPalindrome(testStr1)) {
        std.cout << testStr1 << " is a palindrome." << std.endl;
    } else {
        std.cout << testStr1 << " is not a palindrome." << std.endl;
    }

    if (isPalindrome(testStr2)) {
        std.cout << testStr2 << " is a palindrome." << std.endl;
    } else {
        std.cout << testStr2 << " is not a palindrome." << std.endl;
    }
    // Expected output:
    // madam is a palindrome.
    // hello is not a palindrome.
    return 0;
}
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
            <CodeSnippetDisplay language="kotlin" code={kotlinCoroutinesSnippet} title="Kotlin Coroutines & Serialization" />
            <CodeSnippetDisplay language="kotlin" code={kotlinDesktopSnippet} title="Kotlin Desktop App (Compose)" />
            <CodeSnippetDisplay language="cpp" code={cppDsaSnippet} title="C++ DSA: Palindrome Check" />
          </div>
        </section>
        
      </div>
    </AppLayout>
  );
}

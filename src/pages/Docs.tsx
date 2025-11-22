// src/pages/Docs.tsx
import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { BrutalCard } from '@/components/ui/brutal-card';
import { Terminal, Key, Code2, Cloud, Database, Shield } from 'lucide-react';

const Docs = () => {
    const [activeSection, setActiveSection] = useState('quick-start');

    const sections = [
        { id: 'quick-start', label: 'Quick Start', icon: Terminal },
        { id: 'ssh', label: 'SSH Connection', icon: Shield },
        { id: 'api-keys', label: 'API Keys', icon: Key },
        { id: 'sdk-python', label: 'Python SDK', icon: Code2 },
        { id: 'sdk-node', label: 'Node.js SDK', icon: Code2 },
        { id: 'sdk-go', label: 'Go SDK', icon: Code2 },
        { id: 'sdk-java', label: 'Java SDK', icon: Code2 },
        { id: 'deployment', label: 'Deployment', icon: Cloud },
        { id: 'environment', label: 'Environment', icon: Database }
    ];

    const scrollToSection = (id: string) => {
        setActiveSection(id);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <Layout showSidebar={false}>
            <div className="flex min-h-screen bg-background">
                {/* Sidebar de navegación */}
                <aside className="hidden lg:block w-64 border-r-4 border-black bg-muted p-6 sticky top-[70px] h-[calc(100vh-70px)] overflow-y-auto">
                    <h2 className="text-xl font-black mb-6 pb-3 border-b-2 border-black">Documentation</h2>
                    <nav className="space-y-2">
                        {sections.map((section) => {
                            const Icon = section.icon;
                            return (
                                <button
                                    key={section.id}
                                    onClick={() => scrollToSection(section.id)}
                                    className={`w-full text-left px-4 py-3 font-bold text-sm transition-all brutal-border ${
                                        activeSection === section.id
                                            ? 'bg-brutal-yellow'
                                            : 'bg-white hover:bg-brutal-cyan'
                                    }`}
                                >
                                    <div className="flex items-center gap-2">
                                        <Icon size={18} />
                                        {section.label}
                                    </div>
                                </button>
                            );
                        })}
                    </nav>
                </aside>

                {/* Contenido principal */}
                <main className="flex-1 p-6 md:p-10 font-mono">
                    <div className="max-w-4xl mx-auto space-y-12">
                        {/* Quick Start */}
                        <section id="quick-start" className="scroll-mt-24">
                            <h1 className="text-4xl md:text-5xl font-black mb-6 border-b-4 border-black pb-4">
                                Quick Start Guide
                            </h1>
                            <BrutalCard className="mb-6">
                                <h2 className="text-2xl font-bold mb-4">Get started in 5 minutes</h2>
                                <p className="mb-4 leading-relaxed">
                                    ShipIt makes CI/CD deployment as simple as possible. Follow these steps to deploy your first project.
                                </p>
                                <ol className="space-y-4 list-decimal list-inside">
                                    <li className="font-bold">
                                        Connect your GitHub repository
                                        <p className="ml-6 mt-2 font-normal text-sm text-muted-foreground">
                                            Authorize ShipIt via OAuth to access your repos
                                        </p>
                                    </li>
                                    <li className="font-bold">
                                        Select your project
                                        <p className="ml-6 mt-2 font-normal text-sm text-muted-foreground">
                                            We'll auto-detect your stack (Python, Node.js, Go, etc.)
                                        </p>
                                    </li>
                                    <li className="font-bold">
                                        Configure deployment target
                                        <p className="ml-6 mt-2 font-normal text-sm text-muted-foreground">
                                            Choose Render, Railway, Vercel, or custom
                                        </p>
                                    </li>
                                    <li className="font-bold">
                                        Deploy!
                                        <p className="ml-6 mt-2 font-normal text-sm text-muted-foreground">
                                            Watch your pipeline run in real-time
                                        </p>
                                    </li>
                                </ol>
                            </BrutalCard>
                        </section>

                        {/* SSH Connection */}
                        <section id="ssh" className="scroll-mt-24">
                            <h2 className="text-3xl font-black mb-6 border-b-4 border-black pb-3 inline-block">
                                SSH Connection
                            </h2>
                            <BrutalCard status="neutral">
                                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                    <Shield size={24} />
                                    Secure Shell Access
                                </h3>
                                <p className="mb-4">
                                    Connect to ShipIt's deployment servers via SSH for advanced debugging and configuration.
                                </p>

                                <div className="bg-black text-brutal-green p-6 brutal-border font-mono text-sm mb-4">
                                    <div className="space-y-2">
                                        <p className="text-white"># Generate SSH key pair</p>
                                        <p>$ ssh-keygen -t ed25519 -C "your_email@example.com"</p>
                                        <p className="text-white mt-4"># Add public key to ShipIt</p>
                                        <p>$ cat ~/.ssh/id_ed25519.pub</p>
                                        <p className="text-white mt-4"># Copy the output and add it in Settings → SSH Keys</p>
                                    </div>
                                </div>

                                <h4 className="font-bold mt-6 mb-3">Connect to deployment environment:</h4>
                                <div className="bg-black text-brutal-green p-6 brutal-border font-mono text-sm">
                                    <p>$ ssh deploy@shipit.cloud -p 2222</p>
                                    <p className="text-brutal-yellow mt-2"># Or use your project-specific endpoint:</p>
                                    <p>$ ssh deploy@your-project.shipit.cloud</p>
                                </div>
                            </BrutalCard>
                        </section>

                        {/* API Keys */}
                        <section id="api-keys" className="scroll-mt-24">
                            <h2 className="text-3xl font-black mb-6 border-b-4 border-black pb-3 inline-block">
                                API Keys
                            </h2>
                            <BrutalCard status="warning">
                                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                    <Key size={24} />
                                    Managing API Keys
                                </h3>
                                <p className="mb-4">
                                    API keys allow programmatic access to ShipIt's deployment pipeline.
                                </p>

                                <h4 className="font-bold mt-6 mb-3">Generate an API key:</h4>
                                <ol className="list-decimal list-inside space-y-2 mb-4">
                                    <li>Go to Settings → Security → API Keys</li>
                                    <li>Click "Create New Key"</li>
                                    <li>Name your key (e.g., "Production CI")</li>
                                    <li>Copy and store it securely (shown only once)</li>
                                </ol>

                                <h4 className="font-bold mt-6 mb-3">Use your API key:</h4>
                                <div className="bg-black text-brutal-green p-6 brutal-border font-mono text-sm">
                                    <p className="text-white"># Set as environment variable</p>
                                    <p>$ export SHIPIT_API_KEY="sk_live_abc123..."</p>
                                    <p className="text-white mt-4"># Or in your requests:</p>
                                    <p>$ curl -H "Authorization: Bearer sk_live_abc123..." \</p>
                                    <p className="ml-4">https://api.shipit.dev/v1/deploy</p>
                                </div>

                                <div className="mt-6 p-4 bg-brutal-red/10 brutal-border border-brutal-red">
                                    <p className="font-bold text-sm">⚠️ Security Best Practices:</p>
                                    <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                                        <li>Never commit API keys to version control</li>
                                        <li>Rotate keys regularly (every 90 days)</li>
                                        <li>Use separate keys for different environments</li>
                                        <li>Revoke unused keys immediately</li>
                                    </ul>
                                </div>
                            </BrutalCard>
                        </section>

                        {/* Python SDK */}
                        <section id="sdk-python" className="scroll-mt-24">
                            <h2 className="text-3xl font-black mb-6 border-b-4 border-black pb-3 inline-block">
                                Python SDK
                            </h2>
                            <BrutalCard>
                                <h3 className="text-xl font-bold mb-4">Python Client Library</h3>

                                <h4 className="font-bold mt-6 mb-3">Installation:</h4>
                                <div className="bg-black text-brutal-green p-6 brutal-border font-mono text-sm mb-4">
                                    <p>$ pip install shipit-sdk</p>
                                </div>

                                <h4 className="font-bold mt-6 mb-3">Basic Usage:</h4>
                                <div className="bg-black text-brutal-green p-6 brutal-border font-mono text-sm">
                                    <pre className="whitespace-pre-wrap">
{`from shipit import ShipIt

# Initialize client
client = ShipIt(api_key="sk_live_abc123...")

# Trigger deployment
deployment = client.deploy(
    project="my-api-project",
    branch="main",
    environment="production"
)

# Check status
print(f"Deploy ID: {deployment.id}")
print(f"Status: {deployment.status}")

# Stream logs
for log in client.logs(deployment.id):
    print(log.message)

# Wait for completion
deployment.wait()
print(f"Final status: {deployment.status}")`}
                                    </pre>
                                </div>

                                <h4 className="font-bold mt-6 mb-3">Advanced Features:</h4>
                                <div className="bg-black text-brutal-green p-6 brutal-border font-mono text-sm">
                                    <pre className="whitespace-pre-wrap">
{`# Custom environment variables
deployment = client.deploy(
    project="my-api-project",
    env_vars={
        "DATABASE_URL": "postgresql://...",
        "REDIS_URL": "redis://..."
    }
)

# Rollback to previous deployment
client.rollback(project="my-api-project", to_deploy_id=142)

# Get deployment history
history = client.get_deploys(project="my-api-project", limit=10)
for deploy in history:
    print(f"{deploy.id}: {deploy.status} - {deploy.created_at}")`}
                                    </pre>
                                </div>
                            </BrutalCard>
                        </section>

                        {/* Node.js SDK */}
                        <section id="sdk-node" className="scroll-mt-24">
                            <h2 className="text-3xl font-black mb-6 border-b-4 border-black pb-3 inline-block">
                                Node.js SDK
                            </h2>
                            <BrutalCard>
                                <h3 className="text-xl font-bold mb-4">Node.js Client Library</h3>

                                <h4 className="font-bold mt-6 mb-3">Installation:</h4>
                                <div className="bg-black text-brutal-green p-6 brutal-border font-mono text-sm mb-4">
                                    <p>$ npm install @shipit/sdk</p>
                                    <p className="mt-2"># or</p>
                                    <p>$ yarn add @shipit/sdk</p>
                                </div>

                                <h4 className="font-bold mt-6 mb-3">Basic Usage:</h4>
                                <div className="bg-black text-brutal-green p-6 brutal-border font-mono text-sm">
                                    <pre className="whitespace-pre-wrap">
{`const { ShipIt } = require('@shipit/sdk');

// Initialize client
const client = new ShipIt({
  apiKey: 'sk_live_abc123...'
});

// Trigger deployment
async function deploy() {
  const deployment = await client.deploy({
    project: 'my-api-project',
    branch: 'main',
    environment: 'production'
  });

  console.log(\`Deploy ID: \${deployment.id}\`);
  console.log(\`Status: \${deployment.status}\`);

  // Stream logs
  deployment.on('log', (log) => {
    console.log(log.message);
  });

  // Wait for completion
  await deployment.wait();
  console.log(\`Final status: \${deployment.status}\`);
}

deploy();`}
                                    </pre>
                                </div>

                                <h4 className="font-bold mt-6 mb-3">TypeScript Support:</h4>
                                <div className="bg-black text-brutal-green p-6 brutal-border font-mono text-sm">
                                    <pre className="whitespace-pre-wrap">
{`import { ShipIt, DeploymentOptions } from '@shipit/sdk';

const client = new ShipIt({ apiKey: process.env.SHIPIT_API_KEY });

const options: DeploymentOptions = {
  project: 'my-api-project',
  branch: 'main',
  environment: 'production',
  envVars: {
    NODE_ENV: 'production',
    DATABASE_URL: process.env.DATABASE_URL
  }
};

const deployment = await client.deploy(options);`}
                                    </pre>
                                </div>
                            </BrutalCard>
                        </section>

                        {/* Go SDK */}
                        <section id="sdk-go" className="scroll-mt-24">
                            <h2 className="text-3xl font-black mb-6 border-b-4 border-black pb-3 inline-block">
                                Go SDK
                            </h2>
                            <BrutalCard>
                                <h3 className="text-xl font-bold mb-4">Go Client Library</h3>

                                <h4 className="font-bold mt-6 mb-3">Installation:</h4>
                                <div className="bg-black text-brutal-green p-6 brutal-border font-mono text-sm mb-4">
                                    <p>$ go get github.com/shipit/shipit-go</p>
                                </div>

                                <h4 className="font-bold mt-6 mb-3">Basic Usage:</h4>
                                <div className="bg-black text-brutal-green p-6 brutal-border font-mono text-sm">
                                    <pre className="whitespace-pre-wrap">
{`package main

import (
    "fmt"
    "log"
    "github.com/shipit/shipit-go"
)

func main() {
    // Initialize client
    client := shipit.New("sk_live_abc123...")

    // Trigger deployment
    deploy, err := client.Deploy(&shipit.DeployOptions{
        Project:     "my-api-project",
        Branch:      "main",
        Environment: "production",
    })
    if err != nil {
        log.Fatal(err)
    }

    fmt.Printf("Deploy ID: %s\\n", deploy.ID)
    fmt.Printf("Status: %s\\n", deploy.Status)

    // Stream logs
    logs, err := client.Logs(deploy.ID)
    if err != nil {
        log.Fatal(err)
    }

    for log := range logs {
        fmt.Println(log.Message)
    }

    // Wait for completion
    finalDeploy, err := deploy.Wait()
    if err != nil {
        log.Fatal(err)
    }

    fmt.Printf("Final status: %s\\n", finalDeploy.Status)
}`}
                                    </pre>
                                </div>
                            </BrutalCard>
                        </section>

                        {/* Java SDK */}
                        <section id="sdk-java" className="scroll-mt-24">
                            <h2 className="text-3xl font-black mb-6 border-b-4 border-black pb-3 inline-block">
                                Java SDK
                            </h2>
                            <BrutalCard>
                                <h3 className="text-xl font-bold mb-4">Java Client Library</h3>

                                <h4 className="font-bold mt-6 mb-3">Maven Dependency:</h4>
                                <div className="bg-black text-brutal-green p-6 brutal-border font-mono text-sm mb-4">
                                    <pre className="whitespace-pre-wrap">
{`<dependency>
    <groupId>dev.shipit</groupId>
    <artifactId>shipit-java</artifactId>
    <version>1.0.0</version>
</dependency>`}
                                    </pre>
                                </div>

                                <h4 className="font-bold mt-6 mb-3">Gradle:</h4>
                                <div className="bg-black text-brutal-green p-6 brutal-border font-mono text-sm mb-4">
                                    <p>implementation 'dev.shipit:shipit-java:1.0.0'</p>
                                </div>

                                <h4 className="font-bold mt-6 mb-3">Basic Usage:</h4>
                                <div className="bg-black text-brutal-green p-6 brutal-border font-mono text-sm">
                                    <pre className="whitespace-pre-wrap">
{`import dev.shipit.ShipIt;
import dev.shipit.models.Deployment;
import dev.shipit.models.DeployOptions;

public class Main {
    public static void main(String[] args) {
        // Initialize client
        ShipIt client = new ShipIt("sk_live_abc123...");

        // Create deployment options
        DeployOptions options = DeployOptions.builder()
            .project("my-api-project")
            .branch("main")
            .environment("production")
            .build();

        // Trigger deployment
        Deployment deployment = client.deploy(options);

        System.out.println("Deploy ID: " + deployment.getId());
        System.out.println("Status: " + deployment.getStatus());

        // Stream logs
        client.streamLogs(deployment.getId(), log -> {
            System.out.println(log.getMessage());
        });

        // Wait for completion
        Deployment finalDeployment = deployment.waitForCompletion();
        System.out.println("Final status: " + finalDeployment.getStatus());
    }
}`}
                                    </pre>
                                </div>
                            </BrutalCard>
                        </section>

                        {/* Deployment */}
                        <section id="deployment" className="scroll-mt-24">
                            <h2 className="text-3xl font-black mb-6 border-b-4 border-black pb-3 inline-block">
                                Deployment Configuration
                            </h2>
                            <BrutalCard>
                                <h3 className="text-xl font-bold mb-4">Configuring Your Deployment</h3>

                                <h4 className="font-bold mt-6 mb-3">Auto-Detection:</h4>
                                <p className="mb-4">
                                    ShipIt automatically detects your project stack and suggests an optimal pipeline:
                                </p>
                                <ul className="list-disc list-inside space-y-2 mb-6">
                                    <li><span className="font-bold">Python:</span> Detects requirements.txt, pipfile, poetry.lock</li>
                                    <li><span className="font-bold">Node.js:</span> Detects package.json, yarn.lock</li>
                                    <li><span className="font-bold">Go:</span> Detects go.mod</li>
                                    <li><span className="font-bold">Java:</span> Detects pom.xml, build.gradle</li>
                                    <li><span className="font-bold">Docker:</span> Detects Dockerfile</li>
                                </ul>

                                <h4 className="font-bold mt-6 mb-3">Manual Configuration:</h4>
                                <p className="mb-4">Create a <code className="bg-muted px-2 py-1 font-mono">shipit.yml</code> file in your repo root:</p>
                                <div className="bg-black text-brutal-green p-6 brutal-border font-mono text-sm">
                                    <pre className="whitespace-pre-wrap">
{`version: 1

# Build configuration
build:
  install: npm install
  test: npm test
  build: npm run build
  
# Deployment targets
deploy:
  production:
    target: render
    app_name: my-api-production
    region: us-west-2
    
  staging:
    target: railway
    app_name: my-api-staging

# Environment variables
env:
  - NODE_ENV
  - DATABASE_URL
  - REDIS_URL

# Triggers
triggers:
  - branch: main
    environment: production
  - branch: develop
    environment: staging`}
                                    </pre>
                                </div>
                            </BrutalCard>
                        </section>

                        {/* Environment Variables */}
                        <section id="environment" className="scroll-mt-24">
                            <h2 className="text-3xl font-black mb-6 border-b-4 border-black pb-3 inline-block">
                                Environment Variables
                            </h2>
                            <BrutalCard status="success">
                                <h3 className="text-xl font-bold mb-4">Managing Secrets & Config</h3>

                                <h4 className="font-bold mt-6 mb-3">Adding Environment Variables:</h4>
                                <ol className="list-decimal list-inside space-y-2 mb-6">
                                    <li>Navigate to your project settings</li>
                                    <li>Click "Environment Variables"</li>
                                    <li>Add key-value pairs</li>
                                    <li>Mark sensitive values as "Secret"</li>
                                </ol>

                                <h4 className="font-bold mt-6 mb-3">Via CLI:</h4>
                                <div className="bg-black text-brutal-green p-6 brutal-border font-mono text-sm mb-6">
                                    <p className="text-white"># Set environment variable</p>
                                    <p>$ shipit env:set DATABASE_URL="postgresql://..."</p>
                                    <p className="text-white mt-4"># Set multiple variables</p>
                                    <p>$ shipit env:set -f .env.production</p>
                                    <p className="text-white mt-4"># List all variables</p>
                                    <p>$ shipit env:list</p>
                                    <p className="text-white mt-4"># Delete a variable</p>
                                    <p>$ shipit env:unset DATABASE_URL</p>
                                </div>

                                <div className="p-4 bg-brutal-green/10 brutal-border border-brutal-green">
                                    <p className="font-bold text-sm">✓ Best Practices:</p>
                                    <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                                        <li>Use different values for different environments</li>
                                        <li>Never hardcode secrets in your code</li>
                                        <li>Rotate credentials regularly</li>
                                        <li>Use the "Secret" flag for sensitive data</li>
                                    </ul>
                                </div>
                            </BrutalCard>
                        </section>

                        {/* Support */}
                        <section className="scroll-mt-24 pb-12">
                            <BrutalCard className="bg-muted">
                                <h2 className="text-2xl font-black mb-4">Need Help?</h2>
                                <p className="mb-4">
                                    Can't find what you're looking for? We're here to help.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <a
                                        href="mailto:support@shipit.dev"
                                        className="brutal-border bg-black text-white hover:bg-brutal-yellow hover:text-black transition-all px-6 py-3 font-bold text-center"
                                    >
                                        Email Support
                                    </a>
                                    <a
                                        href="https://discord.gg/shipit"
                                        className="brutal-border bg-white hover:bg-brutal-cyan transition-all px-6 py-3 font-bold text-center"
                                    >
                                        Join Discord
                                    </a>
                                </div>
                            </BrutalCard>
                        </section>
                    </div>
                </main>
            </div>
        </Layout>
    );
};

export default Docs;
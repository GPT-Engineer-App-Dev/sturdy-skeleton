import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Github } from "lucide-react";

export default function Index() {
  return (
    <div className="container mx-auto p-4">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">My Application</h1>
        <p className="text-gray-600">Welcome to your new project!</p>
      </header>

      <main>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Getting Started</CardTitle>
            <CardDescription>Here are some steps to help you get started:</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Modify this component in src/pages/Index.jsx</li>
              <li>Add new components in the src/components directory</li>
              <li>Customize the styling using Tailwind classes</li>
              <li>Integrate with a backend API if needed</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button>Learn More</Button>
          </CardFooter>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Feature 1</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Description of feature 1 goes here.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Feature 2</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Description of feature 2 goes here.</p>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="mt-8 text-center">
        <p className="text-gray-600">© 2023 My Application. All rights reserved.</p>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 hover:underline mt-2">
          <Github className="mr-1" size={16} />
          View on GitHub
        </a>
      </footer>
    </div>
  );
}
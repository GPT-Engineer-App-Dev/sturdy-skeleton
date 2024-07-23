import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Github, Moon, Sun, Bell, BellOff } from "lucide-react";

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 500 },
];

export default function Index() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100'}`}>
      <div className="container mx-auto p-4">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold">Fancy Dashboard</h1>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Welcome to your enhanced project!</p>
          </div>
          <div className="flex items-center space-x-4">
            <Switch
              checked={darkMode}
              onCheckedChange={setDarkMode}
              className="data-[state=checked]:bg-blue-600"
            />
            <Label htmlFor="dark-mode" className="cursor-pointer">
              {darkMode ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Label>
          </div>
        </header>

        <main>
          <Tabs defaultValue="dashboard" className="mb-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            <TabsContent value="dashboard">
              <Card>
                <CardHeader>
                  <CardTitle>Overview</CardTitle>
                  <CardDescription>Your key metrics at a glance</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="value" fill="#3b82f6" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="analytics">
              <Card>
                <CardHeader>
                  <CardTitle>Detailed Analytics</CardTitle>
                  <CardDescription>In-depth analysis of your data</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Detailed analytics content goes here.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="settings">
              <Card>
                <CardHeader>
                  <CardTitle>User Settings</CardTitle>
                  <CardDescription>Manage your account preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" placeholder="Enter your username" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="notifications"
                      checked={notifications}
                      onCheckedChange={setNotifications}
                      className="data-[state=checked]:bg-green-600"
                    />
                    <Label htmlFor="notifications">
                      {notifications ? (
                        <span className="flex items-center">
                          <Bell className="mr-2 h-4 w-4" /> Notifications enabled
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <BellOff className="mr-2 h-4 w-4" /> Notifications disabled
                        </span>
                      )}
                    </Label>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save Changes</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button className="w-full">Create New Project</Button>
                <Button className="w-full" variant="outline">Invite Team Member</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>Project X updated</li>
                  <li>New team member joined</li>
                  <li>Milestone achieved</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </main>

        <footer className="mt-8 text-center">
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>© 2023 Fancy Dashboard. All rights reserved.</p>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 hover:underline mt-2">
            <Github className="mr-1" size={16} />
            View on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
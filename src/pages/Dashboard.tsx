import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, BookOpen, TrendingUp, Calendar, Activity } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const weeklyMood = [
  { day: "Mon", mood: 4 },
  { day: "Tue", mood: 3 },
  { day: "Wed", mood: 5 },
  { day: "Thu", mood: 4 },
  { day: "Fri", mood: 3 },
  { day: "Sat", mood: 4 },
  { day: "Sun", mood: 5 },
];

const recentChats = [
  { id: 1, preview: "Discussed anxiety management techniques...", time: "2 hours ago" },
  { id: 2, preview: "Talked about improving sleep habits...", time: "1 day ago" },
  { id: 3, preview: "Explored mindfulness practices...", time: "3 days ago" },
];

const suggestedArticles = [
  { id: 1, title: "5 Mindfulness Techniques for Daily Stress Relief", category: "Mindfulness" },
  { id: 2, title: "Building Healthy Sleep Habits", category: "Wellness" },
  { id: 3, title: "The Power of Gratitude Journaling", category: "Self-Care" },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Header */}
          <div className="animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Welcome back, <span className="text-primary">Alex</span>
            </h1>
            <p className="text-muted-foreground">
              Here's your mental wellness overview for this week
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="hover:shadow-lg transition-all animate-fade-in">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Mood Check-ins</p>
                    <p className="text-2xl font-bold">7/7</p>
                    <p className="text-xs text-green-600 mt-1">All days logged!</p>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/20">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all animate-fade-in" style={{ animationDelay: "100ms" }}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Average Mood</p>
                    <p className="text-2xl font-bold">4.0</p>
                    <p className="text-xs text-muted-foreground mt-1">Good this week</p>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/20">
                    <Activity className="h-6 w-6 text-accent" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all animate-fade-in" style={{ animationDelay: "200ms" }}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Chat Sessions</p>
                    <p className="text-2xl font-bold">12</p>
                    <p className="text-xs text-muted-foreground mt-1">This month</p>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/50">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all animate-fade-in" style={{ animationDelay: "300ms" }}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Articles Read</p>
                    <p className="text-2xl font-bold">8</p>
                    <p className="text-xs text-muted-foreground mt-1">This month</p>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-muted">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Weekly Mood Trend */}
            <Card className="lg:col-span-2 shadow-lg animate-fade-in" style={{ animationDelay: "400ms" }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Your Weekly Mood Trend
                </CardTitle>
                <CardDescription>Track your emotional patterns over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[250px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={weeklyMood}>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                      <XAxis 
                        dataKey="day" 
                        tick={{ fill: 'hsl(var(--muted-foreground))' }}
                      />
                      <YAxis 
                        domain={[1, 5]} 
                        ticks={[1, 2, 3, 4, 5]}
                        tick={{ fill: 'hsl(var(--muted-foreground))' }}
                      />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'hsl(var(--card))',
                          border: '1px solid hsl(var(--border))',
                          borderRadius: 'var(--radius)',
                        }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="mood" 
                        stroke="hsl(var(--primary))" 
                        strokeWidth={3}
                        dot={{ fill: 'hsl(var(--primary))', r: 6 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4">
                  <Link to="/mood-tracker">
                    <Button variant="outline" className="w-full">
                      View Full Mood History
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-lg animate-fade-in" style={{ animationDelay: "500ms" }}>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Start your wellness activity</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link to="/mood-tracker">
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <Heart className="h-4 w-4" />
                    Log Today's Mood
                  </Button>
                </Link>
                <Link to="/chatbot">
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <MessageCircle className="h-4 w-4" />
                    Chat with AI Bot
                  </Button>
                </Link>
                <Link to="/articles">
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <BookOpen className="h-4 w-4" />
                    Browse Articles
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Recent Chats */}
            <Card className="shadow-lg animate-fade-in" style={{ animationDelay: "600ms" }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  Recent Chats
                </CardTitle>
                <CardDescription>Your latest conversations with MindEase Bot</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentChats.map((chat) => (
                  <div
                    key={chat.id}
                    className="p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors cursor-pointer"
                  >
                    <p className="text-sm line-clamp-1">{chat.preview}</p>
                    <p className="text-xs text-muted-foreground mt-1">{chat.time}</p>
                  </div>
                ))}
                <Link to="/chatbot">
                  <Button variant="outline" className="w-full mt-2">
                    View All Conversations
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Suggested Articles */}
            <Card className="shadow-lg animate-fade-in" style={{ animationDelay: "700ms" }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Suggested for You
                </CardTitle>
                <CardDescription>Articles based on your interests</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {suggestedArticles.map((article) => (
                  <div
                    key={article.id}
                    className="p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors cursor-pointer space-y-2"
                  >
                    <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-md">
                      {article.category}
                    </span>
                    <p className="text-sm font-medium line-clamp-2">{article.title}</p>
                  </div>
                ))}
                <Link to="/articles">
                  <Button variant="outline" className="w-full mt-2">
                    Explore More Articles
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;

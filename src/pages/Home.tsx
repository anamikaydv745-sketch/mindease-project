import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Brain, MessageCircle, TrendingUp, Shield, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Home = () => {
  const features = [
    {
      icon: Heart,
      title: "Mood Tracking",
      description: "Track your daily emotions and discover patterns in your mental wellness journey.",
    },
    {
      icon: Brain,
      title: "AI Companion",
      description: "Chat with our empathetic AI bot for support and guidance whenever you need it.",
    },
    {
      icon: TrendingUp,
      title: "Progress Insights",
      description: "Visualize your emotional trends and celebrate your growth over time.",
    },
    {
      icon: MessageCircle,
      title: "Wellness Articles",
      description: "Access curated content on mindfulness, stress management, and self-care.",
    },
    {
      icon: Shield,
      title: "Private & Secure",
      description: "Your mental health data is encrypted and completely confidential.",
    },
    {
      icon: Sparkles,
      title: "Personalized Care",
      description: "Get recommendations tailored to your unique wellness needs and goals.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Your Safe Space for{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Calm & Clarity
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              MindEase is your personal mental wellness companion. Track your moods, access helpful resources, 
              and chat with our AI companion to support your journey toward better mental health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link to="/signup">
                <Button size="lg" className="gap-2 shadow-lg hover:shadow-xl transition-all">
                  <Sparkles className="h-5 w-5" />
                  Get Started Free
                </Button>
              </Link>
              <Link to="/chatbot">
                <Button size="lg" variant="outline" className="gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Try AI Chat
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Everything You Need for{" "}
            <span className="text-primary">Mental Wellness</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive tools designed to support your emotional wellbeing every day
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 space-y-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in border-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <Card className="p-8 md:p-12 text-center space-y-6 border-2">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Start Your Wellness Journey?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of people who are taking control of their mental health with MindEase.
              It's free to start, and your privacy is our priority.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link to="/signup">
                <Button size="lg" className="gap-2">
                  <Heart className="h-5 w-5" />
                  Create Free Account
                </Button>
              </Link>
              <Link to="/articles">
                <Button size="lg" variant="outline">
                  Explore Articles
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;

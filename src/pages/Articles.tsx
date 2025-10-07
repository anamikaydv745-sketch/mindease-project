import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const articles = [
  {
    id: 1,
    title: "5 Mindfulness Techniques for Daily Stress Relief",
    description: "Discover simple yet powerful mindfulness exercises you can practice anywhere to reduce stress and find inner peace.",
    category: "Mindfulness",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Understanding Anxiety: A Beginner's Guide",
    description: "Learn about the science behind anxiety, common symptoms, and evidence-based strategies to manage it effectively.",
    category: "Mental Health",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "The Power of Gratitude Journaling",
    description: "Explore how keeping a gratitude journal can transform your mindset and improve your overall well-being.",
    category: "Self-Care",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Building Healthy Sleep Habits",
    description: "Quality sleep is essential for mental health. Learn practical tips to improve your sleep hygiene tonight.",
    category: "Wellness",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1511295742362-92c96b1cf484?w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Breathing Exercises for Instant Calm",
    description: "Master these simple breathing techniques to quickly reduce stress and regain emotional balance.",
    category: "Techniques",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Social Connection and Mental Health",
    description: "Understand the vital role of social connections in maintaining good mental health and how to nurture them.",
    category: "Relationships",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop",
  },
];

const Articles = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-2 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold">
              Wellness <span className="text-primary">Articles</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Curated mental health resources, tips, and guides to support your wellbeing journey
            </p>
          </div>

          {/* Featured Article */}
          <Card className="overflow-hidden shadow-xl border-2 animate-fade-in">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-auto">
                <img
                  src={articles[0].image}
                  alt={articles[0].title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="bg-accent text-accent-foreground px-2 py-1 rounded-md">
                    {articles[0].category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {articles[0].readTime}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">{articles[0].title}</h2>
                <p className="text-muted-foreground">{articles[0].description}</p>
                <Button className="w-fit gap-2">
                  Read Article
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.slice(1).map((article, index) => (
              <Card
                key={article.id}
                className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="relative h-48">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-xs font-medium">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {article.readTime}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{article.title}</CardTitle>
                  <CardDescription>{article.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full gap-2">
                    <BookOpen className="h-4 w-4" />
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-2 animate-fade-in">
            <CardContent className="p-8 text-center space-y-4">
              <h3 className="text-2xl font-bold">Want Personalized Recommendations?</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Create an account to receive article suggestions tailored to your interests and wellness goals.
              </p>
              <Button size="lg" className="gap-2">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Articles;

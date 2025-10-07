import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const moods = [
  { emoji: "😊", label: "Great", value: 5, color: "from-green-400 to-emerald-500" },
  { emoji: "🙂", label: "Good", value: 4, color: "from-blue-400 to-cyan-500" },
  { emoji: "😐", label: "Okay", value: 3, color: "from-yellow-400 to-amber-500" },
  { emoji: "😞", label: "Not Good", value: 2, color: "from-orange-400 to-red-500" },
  { emoji: "😢", label: "Difficult", value: 1, color: "from-red-500 to-rose-600" },
];

// Dummy data for the chart
const moodData = [
  { date: "Mon", mood: 4 },
  { date: "Tue", mood: 3 },
  { date: "Wed", mood: 5 },
  { date: "Thu", mood: 4 },
  { date: "Fri", mood: 3 },
  { date: "Sat", mood: 4 },
  { date: "Sun", mood: 5 },
];

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);

  const handleMoodSelect = (value: number, label: string) => {
    setSelectedMood(value);
    toast.success(`Mood logged: ${label}`, {
      description: "Your mood has been recorded for today.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-2 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold">
              Mood <span className="text-primary">Tracker</span>
            </h1>
            <p className="text-muted-foreground">
              How are you feeling today? Track your emotions and discover patterns.
            </p>
          </div>

          {/* Mood Selection */}
          <Card className="shadow-lg animate-fade-in" style={{ animationDelay: "100ms" }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Log Today's Mood
              </CardTitle>
              <CardDescription>
                Select the emoji that best describes how you're feeling right now
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                {moods.map((mood) => (
                  <Button
                    key={mood.value}
                    variant={selectedMood === mood.value ? "default" : "outline"}
                    className={`h-32 flex flex-col gap-3 transition-all hover:scale-105 ${
                      selectedMood === mood.value ? `bg-gradient-to-br ${mood.color}` : ""
                    }`}
                    onClick={() => handleMoodSelect(mood.value, mood.label)}
                  >
                    <span className="text-5xl">{mood.emoji}</span>
                    <span className="text-sm font-medium">{mood.label}</span>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Mood Trend Chart */}
          <Card className="shadow-lg animate-fade-in" style={{ animationDelay: "200ms" }}>
            <CardHeader>
              <CardTitle>Your Weekly Mood Trend</CardTitle>
              <CardDescription>
                Visualize your emotional patterns over the past week
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={moodData}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis 
                      dataKey="date" 
                      className="text-sm"
                      tick={{ fill: 'hsl(var(--muted-foreground))' }}
                    />
                    <YAxis 
                      domain={[1, 5]} 
                      ticks={[1, 2, 3, 4, 5]}
                      className="text-sm"
                      tick={{ fill: 'hsl(var(--muted-foreground))' }}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: 'var(--radius)',
                      }}
                      formatter={(value: number) => {
                        const mood = moods.find(m => m.value === value);
                        return [mood?.label || value, 'Mood'];
                      }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="mood" 
                      stroke="hsl(var(--primary))" 
                      strokeWidth={3}
                      dot={{ fill: 'hsl(var(--primary))', r: 6 }}
                      activeDot={{ r: 8 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-6 grid grid-cols-2 sm:grid-cols-5 gap-4">
                {moods.map((mood) => (
                  <div key={mood.value} className="flex items-center gap-2 text-sm">
                    <span className="text-2xl">{mood.emoji}</span>
                    <span className="text-muted-foreground">{mood.label}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Insights Card */}
          <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-2 animate-fade-in" style={{ animationDelay: "300ms" }}>
            <CardHeader>
              <CardTitle>Mood Insights</CardTitle>
              <CardDescription>Understanding your emotional patterns</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20">
                  <span className="text-xl">📈</span>
                </div>
                <div>
                  <h4 className="font-semibold">Positive Trend</h4>
                  <p className="text-sm text-muted-foreground">
                    Your mood has been improving over the past week. Keep up the great work!
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/20">
                  <span className="text-xl">💡</span>
                </div>
                <div>
                  <h4 className="font-semibold">Pattern Detected</h4>
                  <p className="text-sm text-muted-foreground">
                    Weekends seem to boost your mood. Consider incorporating more leisure activities during weekdays.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MoodTracker;

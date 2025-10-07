import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Bot, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm MindEase Bot, your mental wellness companion. How are you feeling today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes("anxious") || lowerMessage.includes("anxiety")) {
      return "I hear that you're feeling anxious. That's a completely valid feeling. Have you tried any breathing exercises? Taking slow, deep breaths can help calm your nervous system. Would you like me to guide you through one?";
    } else if (lowerMessage.includes("sad") || lowerMessage.includes("depressed")) {
      return "I'm sorry you're feeling this way. Remember, it's okay to feel sad sometimes. Have you been able to connect with anyone today? Sometimes talking to a friend or doing a small activity you enjoy can help lift your mood.";
    } else if (lowerMessage.includes("stressed") || lowerMessage.includes("stress")) {
      return "Stress can be overwhelming. Let's break it down together. What's the main thing causing you stress right now? Sometimes identifying the source helps us find solutions. Also, have you taken any breaks today?";
    } else if (lowerMessage.includes("sleep") || lowerMessage.includes("tired")) {
      return "Sleep is so important for mental health. Are you having trouble falling asleep or staying asleep? I can suggest some relaxation techniques or sleep hygiene tips that might help.";
    } else if (lowerMessage.includes("thank") || lowerMessage.includes("thanks")) {
      return "You're very welcome! I'm here whenever you need support. Remember, taking care of your mental health is a journey, and you're doing great by reaching out. 💜";
    } else if (lowerMessage.includes("good") || lowerMessage.includes("great") || lowerMessage.includes("happy")) {
      return "That's wonderful to hear! I'm so glad you're feeling good. What's been contributing to your positive mood today? It's great to acknowledge and celebrate the good moments.";
    } else {
      return "Thank you for sharing that with me. I'm here to listen and support you. Could you tell me more about how you're feeling or what's on your mind? Remember, there's no judgment here – this is your safe space.";
    }
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    // Simulate bot response after a delay
    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        text: getBotResponse(inputValue),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto h-[calc(100vh-12rem)] flex flex-col">
          {/* Header */}
          <div className="text-center mb-6 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              AI <span className="text-primary">Companion</span>
            </h1>
            <p className="text-muted-foreground">
              Your 24/7 mental wellness support - always here to listen
            </p>
          </div>

          {/* Chat Container */}
          <Card className="flex-1 flex flex-col shadow-xl animate-fade-in" style={{ animationDelay: "100ms" }}>
            <CardHeader className="border-b">
              <CardTitle className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent">
                  <Bot className="h-6 w-6 text-white" />
                </div>
                MindEase Bot
                <span className="ml-auto flex items-center gap-2 text-sm font-normal text-muted-foreground">
                  <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
                  Online
                </span>
              </CardTitle>
            </CardHeader>

            {/* Messages */}
            <CardContent className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${
                    message.sender === "user" ? "flex-row-reverse" : ""
                  } animate-fade-in`}
                >
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-2xl flex-shrink-0 ${
                      message.sender === "bot"
                        ? "bg-gradient-to-br from-primary to-accent"
                        : "bg-secondary"
                    }`}
                  >
                    {message.sender === "bot" ? (
                      <Bot className="h-5 w-5 text-white" />
                    ) : (
                      <User className="h-5 w-5 text-secondary-foreground" />
                    )}
                  </div>
                  <div
                    className={`max-w-[70%] rounded-2xl px-4 py-3 ${
                      message.sender === "bot"
                        ? "bg-muted"
                        : "bg-primary text-primary-foreground"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                    <span className="text-xs opacity-60 mt-1 block">
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </CardContent>

            {/* Input */}
            <div className="border-t p-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Type your message..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1"
                />
                <Button onClick={handleSend} size="icon" className="flex-shrink-0">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-center">
                This is a demo chatbot. Real AI support coming soon!
              </p>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Chatbot;

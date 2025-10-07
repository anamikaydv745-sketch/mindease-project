import { Link } from "react-router-dom";
import { Brain, Heart, Mail, Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-card/50 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-lg">MindEase</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your safe space for calm and clarity. Mental wellness made accessible.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3 text-sm">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/mood-tracker" className="text-muted-foreground hover:text-primary transition-colors">
                  Mood Tracker
                </Link>
              </li>
              <li>
                <Link to="/articles" className="text-muted-foreground hover:text-primary transition-colors">
                  Articles
                </Link>
              </li>
              <li>
                <Link to="/chatbot" className="text-muted-foreground hover:text-primary transition-colors">
                  Chatbot
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-3 text-sm">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <Shield className="h-3 w-3" />
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <Heart className="h-3 w-3" />
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <Mail className="h-3 w-3" />
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Crisis Support */}
          <div>
            <h3 className="font-semibold mb-3 text-sm">Crisis Support</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="text-destructive font-medium">If you're in crisis:</p>
              <p>National Suicide Prevention Lifeline: 988</p>
              <p>Crisis Text Line: Text HOME to 741741</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} MindEase. All rights reserved. Built with care for your wellbeing.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

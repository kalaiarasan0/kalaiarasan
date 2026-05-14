import React, { useState, useEffect } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { motion } from "framer-motion";

// Error Boundary prevents a calendar crash from wiping the whole page
class CalendarErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return (
        <p className="text-center text-sm text-gray-400 dark:text-gray-600 py-8">
          Could not load GitHub contribution data.
        </p>
      );
    }
    return this.props.children;
  }
}

export default function GithubCalendarSection() {
  const [isDark, setIsDark] = useState(false);

  // Sync with the global dark mode class on <html>
  useEffect(() => {
    const root = document.documentElement;
    const check = () => setIsDark(root.classList.contains("dark"));
    check();
    const observer = new MutationObserver(check);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  // v5 theme format: { light: [5 colors], dark: [5 colors] }
  const calendarTheme = {
    light: ["#ebedf0", "#bfdbfe", "#60a5fa", "#2563eb", "#1d4ed8"],
    dark:  ["#161b22", "#1e3a5f", "#1d4ed8", "#3b82f6", "#60a5fa"],
  };

  return (
    <section
      id="github"
      className="py-24 bg-white dark:bg-[#0d0d0d] transition-colors"
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
            GitHub Contributions
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full" />
          {/* <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm">
            A snapshot of my open-source activity over the past year
          </p> */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="bg-gray-50 dark:bg-[#111] rounded-2xl p-6 md:p-10 shadow-sm border border-gray-100 dark:border-gray-800 overflow-x-auto"
        >
          <CalendarErrorBoundary>
            <GitHubCalendar
              username="kalaiarasan0"
              colorScheme={isDark ? "dark" : "light"}
              theme={calendarTheme}
              blockSize={13}
              blockMargin={4}
              fontSize={12}
            />
          </CalendarErrorBoundary>
        </motion.div>
      </div>
    </section>
  );
}
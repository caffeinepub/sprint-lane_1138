import { Layers, LayoutGrid, Users } from "lucide-react";
import { motion } from "motion/react";
import type React from "react";

interface LandingPageProps {
  onLogin: () => void;
  isLoggingIn: boolean;
}

export const LandingPage: React.FC<LandingPageProps> = ({
  onLogin,
  isLoggingIn,
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-sprint-bg-primary flex flex-col">
      {/* Navigation */}
      <nav className="w-full px-6 py-5 flex items-center justify-between max-w-6xl mx-auto">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 flex items-center justify-center">
            <div className="grid grid-cols-2 gap-[3px]">
              <div className="w-2.5 h-2.5 bg-sprint-text-primary rounded-[2px]" />
              <div className="w-2.5 h-2.5 bg-sprint-text-primary rounded-[2px]" />
              <div className="w-2.5 h-2.5 bg-sprint-text-primary rounded-[2px]" />
              <div className="w-2.5 h-2.5 bg-sprint-text-primary rounded-[2px]" />
            </div>
          </div>
          <span className="font-semibold text-sprint-text-primary text-base tracking-tight">
            SprintLane
          </span>
        </div>
      </nav>

      {/* Hero */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center pb-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-2xl mx-auto"
        >
          {/* Eyebrow */}
          <p className="text-xs uppercase tracking-[0.18em] text-sprint-text-tertiary mb-6 font-medium">
            Project Management
          </p>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-sprint-text-primary leading-[1.1] tracking-tight mb-6">
            Organize, execute,
            <br />
            deliver seamlessly.
          </h1>

          {/* Subtitle */}
          <p className="text-sprint-text-secondary text-base sm:text-lg max-w-md mx-auto mb-10 leading-relaxed">
            Streamline your team&apos;s workflow with boards, sprints, and
            real-time collaboration.
          </p>

          {/* CTA */}
          <button
            type="button"
            onClick={onLogin}
            disabled={isLoggingIn}
            data-ocid="landing.primary_button"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-sprint-text-primary text-sprint-bg-primary font-semibold text-sm rounded-lg hover:bg-sprint-text-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoggingIn ? (
              <>
                <svg
                  className="animate-spin h-4 w-4"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Signing in...
              </>
            ) : (
              "Sign in with Internet Identity"
            )}
          </button>
        </motion.div>

        {/* Features Strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="w-full max-w-4xl mx-auto mt-24 pt-12 border-t border-sprint-border"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-2">
              <LayoutGrid
                className="w-5 h-5 text-sprint-text-secondary"
                strokeWidth={1.5}
              />
              <p className="text-sm font-medium text-sprint-text-primary">
                Kanban Boards
              </p>
              <p className="text-sm text-sprint-text-tertiary leading-relaxed">
                Visualize work across stages
              </p>
            </div>
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-2">
              <Layers
                className="w-5 h-5 text-sprint-text-secondary"
                strokeWidth={1.5}
              />
              <p className="text-sm font-medium text-sprint-text-primary">
                Sprint Cards
              </p>
              <p className="text-sm text-sprint-text-tertiary leading-relaxed">
                Assign, track, and deliver tasks
              </p>
            </div>
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-2">
              <Users
                className="w-5 h-5 text-sprint-text-secondary"
                strokeWidth={1.5}
              />
              <p className="text-sm font-medium text-sprint-text-primary">
                Team Collaboration
              </p>
              <p className="text-sm text-sprint-text-tertiary leading-relaxed">
                Work together in real-time
              </p>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="px-6 py-5 flex items-center justify-between max-w-6xl mx-auto w-full">
        <p className="text-xs text-sprint-text-tertiary">
          &copy; {currentYear}.{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sprint-text-secondary transition-colors"
          >
            Built with love using caffeine.ai
          </a>
        </p>
        <div className="flex items-center gap-2">
          <span className="text-xs text-sprint-text-tertiary">Powered by</span>
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded rotate-45" />
            <span className="text-xs font-semibold text-sprint-text-primary">
              ICP
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

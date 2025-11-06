import { GradientOrb } from "@/components/GradientOrb";
import { ThemeToggle } from "@/components/ThemeToggle";
import { SocialProfileCard } from "@/components/SocialProfileCard";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-[hsl(var(--gradient-start))] to-[hsl(var(--gradient-end))] -z-10" />

      {/* Animated gradient orbs */}
      <GradientOrb variant="orb1" />
      <GradientOrb variant="orb2" />
      <GradientOrb variant="orb3" />
      <GradientOrb variant="orb4" />

      {/* Header */}
      <header className="relative z-10 flex justify-between items-center p-6 md:p-8">
        <div className="text-lg font-medium tracking-widest text-foreground drop-shadow-lg">
          Soumya Swet
        </div>
        <ThemeToggle />
      </header>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-[0.3em] uppercase text-foreground animate-fade-in-up animate-glow mb-8">
          Live Soon....
        </h1>
      </section>

      {/* Social Profiles Section */}
      <section className="relative z-10 px-4 pb-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12 tracking-wider drop-shadow-lg">
          Connect on Socials
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-8 max-w-5xl mx-auto">
          <SocialProfileCard
            platform="LinkedIn"
            handle="@soumyaswet"
            url="https://www.linkedin.com/in/soumyaswet/"
            variant="linkedin"
            icon={
              <svg width="50" height="50" viewBox="0 0 24 24" fill="white">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            }
          />

          <SocialProfileCard
            platform="Instagram"
            handle="@soumyaswet"
            url="https://www.instagram.com/soumyaswet/"
            variant="instagram"
            icon={
              <svg width="50" height="50" viewBox="0 0 24 24" fill="white">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            }
          />

          <SocialProfileCard
            platform="X (Twitter)"
            handle="@SoumyaSwet"
            url="https://x.com/SoumyaSwet"
            variant="x"
            icon={
              <svg width="45" height="45" viewBox="0 0 24 24" className="fill-white dark:fill-black">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            }
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 text-center py-8 text-muted-foreground text-sm">
        <p>&copy; 2025 Soumya Swet. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;

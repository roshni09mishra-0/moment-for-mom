import "./App.css";
import { FloatingHearts } from "./components/FloatingHearts";
import { Hero } from "./components/Hero";
import { TopBar } from "./components/TopBar";
import { Section } from "./components/Section";
import { MemoryGallery } from "./components/MemoryGallery";
import { Reasons } from "./components/Reasons";
import { MemoryTimeline } from "./components/MemoryTimeline";
import { VoiceMessage } from "./components/VoiceMessage";
import { AIPoem } from "./components/AIPoem";
import { GreetingCard } from "./components/GreetingCard";
import { FinalMessage } from "./components/FinalMessage";
import { Footer } from "./components/Footer";
import { useTheme } from "./hooks/useTheme";
import { useAmbientMusic } from "./hooks/useAmbientMusic";

function App() {
  const { theme, toggleTheme } = useTheme();
  const music = useAmbientMusic();

  return (
    <div className="relative overflow-hidden">
      <FloatingHearts />

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-24 -top-32 h-80 w-80 rounded-full bg-blush-400/20 blur-3xl dark:bg-blush-400/10" />
        <div className="absolute -right-28 top-24 h-96 w-96 rounded-full bg-lavender-400/20 blur-3xl dark:bg-lavender-400/10" />
        <div className="absolute left-1/2 top-[70vh] h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-mint-400/16 blur-3xl dark:bg-mint-400/10" />
      </div>

      <TopBar
        theme={theme}
        toggleTheme={toggleTheme}
        music={music}
        onToggleMusic={music.toggleEnabled}
        onToggleMute={() => music.setMuted((m) => !m)}
      />

      <Hero />

      <main>
        <Section
          id="gallery"
          eyebrow="Memory gallery"
          title="A collection of moments that feel like home"
          subtitle="Upload photos, relive them in a lightbox, and let the little details do the speaking."
        >
          <MemoryGallery />
        </Section>

        <Section
          id="reasons"
          eyebrow="Love notes"
          title="Reasons I love my mom"
          subtitle="Animated cards with warm glow, gentle motion, and room for your own words."
          className="pt-0"
        >
          <Reasons />
        </Section>

        <Section
          id="timeline"
          eyebrow="Time & tenderness"
          title="A timeline of the memories that shaped us"
          subtitle="Add your own milestones — the story becomes uniquely yours."
          className="pt-0"
        >
          <MemoryTimeline />
        </Section>

        <Section
          id="voice"
          eyebrow="Voice hugs"
          title="A voice message she can replay anytime"
          subtitle="Record directly or upload audio — perfect for a quick “I love you.”"
          className="pt-0"
        >
          <VoiceMessage />
        </Section>

        <Section
          id="poem"
          eyebrow="Poetry, softly"
          title="An AI‑inspired poem from your heart"
          subtitle="Personalize with her name and a memory — then copy it into your card."
          className="pt-0"
        >
          <AIPoem />
        </Section>

        <Section
          id="card"
          eyebrow="Make it official"
          title="A digital greeting card with confetti"
          subtitle="Design a premium card, download it, or share it right away."
          className="pt-0"
        >
          <GreetingCard />
        </Section>

        <Section
          id="final"
          eyebrow="For her"
          title="The part you’ll always mean to say"
          subtitle="Because love deserves to be spoken — and remembered."
          className="pt-0"
        >
          <FinalMessage />
        </Section>
      </main>

      <Footer />
    </div>
  );
}

export default App;

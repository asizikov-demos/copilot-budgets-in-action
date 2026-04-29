import { StrictMode, useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { slides } from './components/slides';
import type { TutorialSlide } from './components/slides/types';
import './styles.css';

const getSlideHash = (slug: string) => `#${slug}`;

function getSlugFromHash(hash: string) {
  return hash.startsWith('#') ? hash.slice(1) : '';
}

function useCurrentSlide() {
  const [hash, setHash] = useState(() => window.location.hash);

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash);

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return useMemo(() => {
    const slug = getSlugFromHash(hash);
    const index = slides.findIndex((slide) => slide.slug === slug);

    return index >= 0 ? { slide: slides[index], index } : null;
  }, [hash]);
}

type SlideProps = {
  slide: TutorialSlide;
  totalSlides: number;
};

function Slide({ slide, totalSlides }: SlideProps) {
  return (
    <article className="slide" aria-labelledby={`slide-${slide.slug}-title`}>
      <p className="slide-kicker">
        Slide {slide.number} of {totalSlides} - {slide.eyebrow}
      </p>
      <h2 id={`slide-${slide.slug}-title`}>{slide.title}</h2>
      <div className="slide-content">{slide.content}</div>
    </article>
  );
}

type SlideNavigationProps = {
  currentIndex: number;
};

function SlideNavigation({ currentIndex }: SlideNavigationProps) {
  const previousSlide = slides[currentIndex - 1];
  const nextSlide = slides[currentIndex + 1];

  return (
    <nav className="slide-navigation" aria-label="Tutorial slide navigation">
      {previousSlide ? (
        <a className="nav-button secondary" href={getSlideHash(previousSlide.slug)}>
          <span>Back</span>
          <strong>{previousSlide.name}</strong>
        </a>
      ) : (
        <a className="nav-button secondary" href="#">
          <span>Back</span>
          <strong>Title</strong>
        </a>
      )}
      {nextSlide ? (
        <a className="nav-button primary" href={getSlideHash(nextSlide.slug)}>
          <span>Next</span>
          <strong>{nextSlide.name}</strong>
        </a>
      ) : (
        <a className="nav-button primary" href="#">
          <span>Finish</span>
          <strong>Back to title</strong>
        </a>
      )}
    </nav>
  );
}

function StartButton() {
  return (
    <a className="start-button" href={getSlideHash(slides[0].slug)}>
      Start
    </a>
  );
}

function App() {
  const currentSlide = useCurrentSlide();

  return (
    <main
      className="page"
      aria-label={currentSlide ? 'GitHub Copilot Budgets in Action' : undefined}
      aria-labelledby={currentSlide ? undefined : 'app-title'}
    >
      {currentSlide ? null : (
        <section className="hero">
          <h1 id="app-title">GitHub Copilot Budgets in Action</h1>
          <StartButton />
        </section>
      )}

      {currentSlide ? (
        <section className="tutorial" aria-live="polite">
          <Slide slide={currentSlide.slide} totalSlides={slides.length} />
          <SlideNavigation currentIndex={currentSlide.index} />
        </section>
      ) : null}

      <footer>
        (c) Anton Sizikov -{' '}
        <a href="https://github.com/asizikov" target="_blank" rel="noreferrer">
          @asizikov
        </a>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

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

function getPreviousSlideHash(currentIndex: number) {
  return getSlideHash(slides[currentIndex - 1]?.slug ?? '');
}

function getNextSlideHash(currentIndex: number) {
  return getSlideHash(slides[currentIndex + 1]?.slug ?? '');
}

function SlideNavigation({ currentIndex }: SlideNavigationProps) {
  return (
    <nav className="slide-navigation" aria-label="Tutorial slide navigation">
      <a className="nav-button secondary" href={getPreviousSlideHash(currentIndex)}>
        {'← back'}
      </a>
      <a className="nav-button primary" href={getNextSlideHash(currentIndex)}>
        {'next →'}
      </a>
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

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) {
        return;
      }

      if (event.key === 'ArrowLeft' && currentSlide) {
        event.preventDefault();
        window.location.hash = getPreviousSlideHash(currentSlide.index);
      }

      if (event.key === 'ArrowRight') {
        event.preventDefault();
        window.location.hash = currentSlide
          ? getNextSlideHash(currentSlide.index)
          : getSlideHash(slides[0].slug);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

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

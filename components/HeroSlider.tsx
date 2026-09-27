"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

type Slide = {
  image: string;
  title: string;
  subtitle: string;
};

export function HeroSlider({ slides }: { slides: Slide[] }) {
  const safeSlides = slides.length
    ? slides
    : [
        {
          image: "",
          title: "Treasure in a jar of clay.",
          subtitle:
            "Welcome to Savio Secondary School — learning, character, responsibility and purpose.",
        },
      ];

  const [active, setActive] = useState(0);

  useEffect(() => {
    if (safeSlides.length < 2) return;
    const timer = window.setInterval(
      () => setActive((current) => (current + 1) % safeSlides.length),
      6000,
    );
    return () => window.clearInterval(timer);
  }, [safeSlides.length]);

  const slide = safeSlides[active];

  return (
    <section className="relative min-h-[calc(100svh-5rem)] overflow-hidden bg-[var(--green-dark)]">
      {slide.image ? (
        <Image
          key={slide.image}
          src={slide.image}
          alt={slide.title}
          fill
          priority={active === 0}
          sizes="100vw"
          className="object-cover transition-transform duration-[7000ms] ease-out scale-[1.03]"
        />
      ) : (
        <div className="absolute inset-0 hero-fallback" />
      )}

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,59,40,.82)_0%,rgba(6,59,40,.56)_45%,rgba(6,59,40,.2)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/15" />

      <div className="container-school relative z-10 flex min-h-[calc(100svh-5rem)] items-end pb-24 pt-24 sm:items-center sm:pb-20">
        <div className="max-w-4xl text-white">
          <span className="inline-flex rounded-full border border-white/35 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[.18em] backdrop-blur-sm">
            Savio Secondary School · Kawempe
          </span>

          <h1 className="display mt-6 max-w-4xl text-5xl leading-[.95] sm:text-6xl lg:text-8xl">
            {slide.title}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
            {slide.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/admissions"
              className="rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[var(--green-dark)] transition hover:-translate-y-0.5"
            >
              Explore admissions
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-white/60 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              Discover Savio
            </Link>
          </div>
        </div>
      </div>

      {safeSlides.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() =>
              setActive((current) => (current - 1 + safeSlides.length) % safeSlides.length)
            }
            className="absolute left-4 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-white/50 bg-black/15 p-3 text-white backdrop-blur-sm transition hover:bg-black/30 sm:block"
          >
            <ChevronLeft size={28} />
          </button>

          <button
            type="button"
            aria-label="Next slide"
            onClick={() => setActive((current) => (current + 1) % safeSlides.length)}
            className="absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-white/50 bg-black/15 p-3 text-white backdrop-blur-sm transition hover:bg-black/30 sm:block"
          >
            <ChevronRight size={28} />
          </button>

          <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
            {safeSlides.map((item, index) => (
              <button
                key={item.image + "-" + index}
                type="button"
                aria-label={"Go to slide " + (index + 1)}
                onClick={() => setActive(index)}
                className={
                  "h-2.5 rounded-full transition-all " +
                  (index === active ? "w-8 bg-white" : "w-2.5 bg-white/55")
                }
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}

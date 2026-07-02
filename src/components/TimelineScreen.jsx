import { useEffect, useRef, useState } from "react";
import { getTimelineContent } from "../constants/timelineContent";
import { publicAsset } from "../utils/publicAsset";
import { RoadmapActions } from "./RoadmapActions";

/** Viewport anchor (fraction from top) used to pick which step is "current" while scrolling */
const ROADMAP_VIEWPORT_ANCHOR = 0.42;

function RoadmapOneLiner({ children }) {
  return <p className="roadmap-one-liner">{children}</p>;
}

function RoadmapChips({ chips }) {
  if (!chips?.length) return null;
  return (
    <div className="roadmap-chips">
      {chips.map((c) => (
        <span
          key={c.label}
          className={`roadmap-chip ${c.variant === "ai" ? "roadmap-chip--ai-role" : ""}`}
        >
          {c.label}
        </span>
      ))}
    </div>
  );
}

export function TimelineScreen({
  formGroupLabel,
  primaryCtaText = "Start this journey",
}) {
  const content = getTimelineContent(formGroupLabel);
  const { hero, milestones, expandPanelLabel, callback } = content;
  const [openId, setOpenId] = useState(null);
  const [activeScrollId, setActiveScrollId] = useState(milestones[0].id);
  const stepRefs = useRef([]);

  useEffect(() => {
    const updateActiveFromScroll = () => {
      const steps = stepRefs.current.filter(Boolean);
      if (steps.length === 0) return;
      const anchorY = window.innerHeight * ROADMAP_VIEWPORT_ANCHOR;
      let bestEl = null;
      let bestDist = Infinity;
      for (const el of steps) {
        const r = el.getBoundingClientRect();
        if (r.bottom < 0 || r.top > window.innerHeight) continue;
        const midY = r.top + r.height / 2;
        const d = Math.abs(midY - anchorY);
        if (d < bestDist) {
          bestDist = d;
          bestEl = el;
        }
      }
      if (!bestEl) return;
      const id = bestEl.getAttribute("data-milestone-id");
      if (id) setActiveScrollId((prev) => (prev === id ? prev : id));
    };

    let raf = 0;
    const onScrollOrResize = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(updateActiveFromScroll);
    };

    updateActiveFromScroll();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, []);

  const toggleStep = (id) => {
    const step = milestones.find((m) => m.id === id);
    if (!step?.expandable) return;
    setOpenId((prev) => (prev === id ? null : id));
  };

  const onKeyToggle = (event, id) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    toggleStep(id);
  };

  return (
    <section className="screen default-screen timeline-screen">
      <main className="shell">
        <header className="hero">
          <div className="eyebrow">{hero.eyebrow}</div>
          <h1 className="headline">{hero.title}</h1>
          <p className="subcopy">{hero.subcopy}</p>
        </header>
        <div className="roadmap-layout">
          <section className="timeline roadmap-timeline" id="timeline-start">
            {milestones.map((milestone, index) => {
              const isOpen = milestone.expandable && openId === milestone.id;
              const nodeActive =
                (milestone.expandable && openId === milestone.id) ||
                (openId === null && activeScrollId === milestone.id);

              const body = (
                <>
                  {milestone.copyNode ? (
                    <RoadmapOneLiner>{milestone.copyNode}</RoadmapOneLiner>
                  ) : (
                    <RoadmapOneLiner>{milestone.copy}</RoadmapOneLiner>
                  )}
                  <RoadmapChips chips={milestone.chips} />
                </>
              );

              const milestoneContent = (
                <div className={`roadmap-content roadmap-content--${milestone.side}`}>
                  <div className="roadmap-time">{milestone.time}</div>
                  <h2 className="roadmap-title">{milestone.title}</h2>
                  {body}
                </div>
              );

              const center = (
                <div className="roadmap-center">
                  <div className={`roadmap-node ${nodeActive ? "roadmap-node--active" : ""}`} aria-hidden />
                </div>
              );

              const expandPanel =
                milestone.expandable && milestone.image ? (
                  <div className="roadmap-expand-panel">
                    <div className="roadmap-expand-shell">
                      <p className="roadmap-expand-label">{expandPanelLabel}</p>
                      <h3 className="roadmap-expand-title">{milestone.expandTitle || milestone.title}</h3>
                      <div className="roadmap-expand-gallery">
                        {milestone.carouselSlides?.length ? (
                          <div className="roadmap-community-carousel">
                            <div className="roadmap-community-carousel-viewport">
                              <div className="roadmap-community-carousel-track">
                                {[...milestone.carouselSlides, ...milestone.carouselSlides].map(
                                  (slide, slideIndex) => (
                                    <div
                                      className="roadmap-community-slide"
                                      key={`${milestone.id}-${slide.src}-${slideIndex}`}
                                    >
                                      <img
                                        src={slide.src}
                                        alt={`${slide.alt} slide ${slideIndex + 1}`}
                                        className="roadmap-community-slide-image"
                                        loading="lazy"
                                      />
                                    </div>
                                  ),
                                )}
                              </div>
                            </div>
                            <p className="roadmap-community-carousel-caption">
                              {milestone.carouselCaption}
                            </p>
                          </div>
                        ) : (
                          <div className="roadmap-placeholder roadmap-placeholder--image">
                            <img
                              src={publicAsset(milestone.image)}
                              alt={milestone.title}
                              className="roadmap-expand-image"
                            />
                            {milestone.imageTag ? (
                              <span className="roadmap-image-tag">{milestone.imageTag}</span>
                            ) : null}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ) : null;

              return (
                <article
                  key={milestone.id}
                  ref={(el) => {
                    stepRefs.current[index] = el;
                  }}
                  data-milestone-id={milestone.id}
                  data-track-id={milestone.expandable ? `roadmap_milestone_toggle_${milestone.id}` : undefined}
                  className={`roadmap-step ${milestone.side} ${milestone.expandable ? "roadmap-step--expandable" : "roadmap-step--static"} ${isOpen ? "is-open" : ""}`}
                  data-expandable={milestone.expandable ? "true" : undefined}
                  role={milestone.expandable ? "button" : undefined}
                  tabIndex={milestone.expandable ? 0 : undefined}
                  aria-expanded={milestone.expandable ? isOpen : undefined}
                  onClick={milestone.expandable ? () => toggleStep(milestone.id) : undefined}
                  onKeyDown={milestone.expandable ? (e) => onKeyToggle(e, milestone.id) : undefined}
                >
                  {/* Always node then card so mobile 2-col grid places marker + card on one row (left used to be card+node and broke alignment). */}
                  {center}
                  {milestoneContent}
                  {expandPanel}
                </article>
              );
            })}
          </section>
        </div>
      </main>
      <RoadmapActions callback={callback} primaryCtaText={primaryCtaText} />
    </section>
  );
}

import {
  DEFAULT_HOME_SCREEN_CONTENT,
  HOME_SCREEN_CONTENT_BY_FORM_GROUP_LABEL,
} from "../onboardingFormV3Constants";

export function HomeScreen({ formGroupLabel, onStart }) {
  const content =
    HOME_SCREEN_CONTENT_BY_FORM_GROUP_LABEL[formGroupLabel] || DEFAULT_HOME_SCREEN_CONTENT;

  return (
    <section className="screen default-screen home-screen" id="screen-1">
      <div className="frame welcome-frame">
        <main className="content welcome-content">
          <div className="topbar">
            <div className="topbar-left">
              <div className="ghost-chip">
                <i className="ph ph-squares-four" aria-hidden />
              </div>
              <div className="step-meta">
                <div className="step-overline">{content.stepOverline}</div>
                <div className="step-title">{content.stepTitle}</div>
              </div>
            </div>
            <div className="progress">
              <div className="progress-bar" style={{ "--progress": "8%" }}>
                <span />
              </div>
              <div className="progress-label">{content.progressLabel}</div>
            </div>
          </div>

          <div className="hero-grid welcome-stage">
            <div>
              <div className="eyebrow">{content.eyebrow}</div>
              <h2 className="hero-title">{content.heroTitle}</h2>
              <p className="hero-copy">{content.heroCopy}</p>
              <div className="quote-block">
                <p className="quote-text">&ldquo;{content.quoteText}&rdquo;</p>
                <div className="quote-meta">
                  <span className="signature-line" />
                  {content.quoteMeta}
                </div>
              </div>
              <div className="cta-row">
                <button
                  className="button"
                  type="button"
                  data-track-id="home_start_onboarding"
                  onClick={onStart}
                >
                  {content.ctaLabel} <i className="ph ph-arrow-right" aria-hidden />
                </button>
                <div className="status-line">
                  <i className="ph ph-lock-key" aria-hidden />
                  {content.statusLine}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}

import { publicAsset } from "../utils/publicAsset";
import { getFinalLetterContent } from "../constants/finalLetterContent";
import {
  resolveMajorityExperience,
  resolveTotalExperience,
} from "../utils/finalLetterScreen";
import { getLinkedinAlumni } from "../utils/linkedinAlumni";

function renderHeadline(template, userName) {
  return template.replace("{userName}", userName);
}

function renderMissionSolution(text) {
  const brandText = "Scaler";
  const brandStartIndex = text.indexOf(brandText);

  if (brandStartIndex === -1) {
    return <span>{text}</span>;
  }

  const brandEndIndex = brandStartIndex + brandText.length;

  return (
    <span>
      {text.slice(0, brandStartIndex)}
      <strong>{brandText}</strong>
      {text.slice(brandEndIndex)}
    </span>
  );
}

function renderMissionParagraph(text, key) {
  const boldText = "strong technical foundations";
  const boldStartIndex = text.indexOf(boldText);
  const brandText = "Scaler";
  const brandStartIndex = text.indexOf(brandText);

  if (boldStartIndex !== -1) {
    const boldEndIndex = boldStartIndex + boldText.length;
    return (
      <p key={key}>
        {text.slice(0, boldStartIndex)}
        <strong>{boldText}</strong>
        {text.slice(boldEndIndex)}
      </p>
    );
  }

  if (brandStartIndex !== -1) {
    const brandEndIndex = brandStartIndex + brandText.length;
    return (
      <p key={key}>
        {text.slice(0, brandStartIndex)}
        <strong>{brandText}</strong>
        {text.slice(brandEndIndex)}
      </p>
    );
  }

  return <p key={key}>{text}</p>;
}

export function FinalLetterScreen({
  user,
  allValues,
  screens,
  formGroupLabel,
  onContinue,
  continueDisabled = false,
}) {
  const userName = user?.name || "Learner";
  const content = getFinalLetterContent(formGroupLabel);
  const totalExperience = resolveTotalExperience(allValues, screens);
  const majorityExperience = resolveMajorityExperience(allValues, screens);
  const matchedAlumni = getLinkedinAlumni(totalExperience, majorityExperience, formGroupLabel);
  const alumniPresent = matchedAlumni.length > 0;
  const alumni = matchedAlumni;

  return (
    <section className="screen default-screen shell page letter-screen">
      <div className="letter-frame letter-page">
        <p className="eyebrow letter-eyebrow">{content.eyebrow}</p>
        <h1 className="headline">{renderHeadline(content.headline, userName)}</h1>
        <p className="subheadline">{content.subheadline}</p>
        {alumniPresent && <p className="subheading">{content.alumniSubheading}</p>}

        {alumniPresent && (
          <div className="alumni-strip">
            {alumni.map((card) => (
              <article key={card.name} className="alumni-card">
                <div className="alumni-top">
                  <img className="alumni-photo" src={publicAsset(card.photo)} alt={card.name} />
                  <div className="alumni-meta">
                    <div className="alumni-name">{card.name}</div>
                    <div className="alumni-role">{card.role}</div>
                  </div>
                </div>
                <div className="alumni-journey">
                  {card.before && (
                    <div className="journey-row">
                      <div className="journey-label">{content.alumniJourneyLabels.before}</div>
                      <div className="journey-value">{card.before}</div>
                    </div>
                  )}
                  {card.logo && (
                    <div className="journey-row">
                      <div className="journey-label">{content.alumniJourneyLabels.after}</div>
                      <div className="org-logo">
                        <img src={publicAsset(card.logo)} alt={card.company} />
                      </div>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}

        <section className="letter-card letter-card--mission">
          <h2 className="insight-section-title">{content.mission.title}</h2>
          <p className="insight-section-subtitle">{content.mission.subtitle}</p>

          <section className="insight-grid">
            <article className="insight-panel insight-panel--concerns">
              <div className="insight-panel-head">
                <div className="insight-icon" aria-hidden>
                  <i className="ph ph-user-focus" />
                </div>
                <h3>{content.mission.concernsTitle}</h3>
              </div>
              <ul className="insight-list">
                {content.mission.concerns.map((item) => (
                  <li key={item}>
                    <span className="insight-bullet" aria-hidden>
                      <i className="ph ph-x" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="insight-panel insight-panel--scaler">
              <div className="insight-panel-head">
                <div className="insight-icon" aria-hidden>
                  <img className="insight-logo" src={publicAsset("/Scaler-Logo_White-3.png")} alt="" />
                </div>
                <h3>
                  {content.mission.scalerTitlePrefix}
                  <span className="brand-accent">{content.mission.scalerTitleAccent}</span>
                  {content.mission.scalerTitleSuffix}
                </h3>
              </div>
              <ul className="insight-list">
                {content.mission.solutions.map((item) => (
                  <li key={item}>
                    <span className="insight-bullet" aria-hidden>
                      <i className="ph ph-check" />
                    </span>
                    {renderMissionSolution(item)}
                  </li>
                ))}
              </ul>
            </article>
          </section>

          <div className="letter-stack letter-stack--mission-close">
            <h3 className="letter-subtitle">{content.mission.closeTitle}</h3>
            {content.mission.closeParagraphs.map((paragraph) =>
              renderMissionParagraph(paragraph, paragraph),
            )}
          </div>
        </section>

        <div className="cta-row letter-cta-row">
          <p className="status-line">
            <i className="ph ph-sparkle" aria-hidden />
            {content.cta.statusLine}
          </p>
          <div className="cta-actions">
            <button
              className="button"
              type="button"
              data-track-id="letter_continue_to_roadmap"
              onClick={onContinue}
              disabled={continueDisabled}
            >
              {continueDisabled ? content.cta.loadingLabel : content.cta.buttonLabel}{" "}
              {!continueDisabled ? <i className="ph ph-arrow-right" aria-hidden /> : null}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

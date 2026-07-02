import { useEffect, useState } from "react";
import { requestMenteeOnboardingCallback } from "../api";
import { getTimelineContent } from "../constants/timelineContent";
import {
  getInitialCallbackRequestCount,
  getRequestCallbackCtaText,
} from "../utils/timelineScreen";

const CALLBACK_REQUEST_STORAGE_KEY = "timeline_callback_request_count";
const MAX_CALLBACK_REQUESTS = 3;

/**
 * The two roadmap actions (external "start journey" CTA + request-callback button)
 * plus the callback confirmation popup. Shared by the full timeline screen and the
 * minimal actions-only screen so both behave identically.
 */
export function RoadmapActions({
  callback,
  primaryCtaText = "Start this journey",
  className = "floating-actions",
}) {
  const [isRequestingCallback, setIsRequestingCallback] = useState(false);
  const [callbackRequestCount, setCallbackRequestCount] = useState(() =>
    getInitialCallbackRequestCount(CALLBACK_REQUEST_STORAGE_KEY, MAX_CALLBACK_REQUESTS),
  );
  const [hasRequestedCallback, setHasRequestedCallback] = useState(false);
  const [showCallbackPopup, setShowCallbackPopup] = useState(false);
  const [callbackRequestError, setCallbackRequestError] = useState("");
  const hasReachedCallbackLimit = callbackRequestCount >= MAX_CALLBACK_REQUESTS;

  useEffect(() => {
    if (!showCallbackPopup) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setShowCallbackPopup(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [showCallbackPopup]);

  const handleRequestCallback = async () => {
    if (isRequestingCallback || hasReachedCallbackLimit || hasRequestedCallback) return;
    setIsRequestingCallback(true);
    setCallbackRequestError("");
    try {
      await requestMenteeOnboardingCallback();
      setCallbackRequestCount((prev) => {
        const next = Math.min(prev + 1, MAX_CALLBACK_REQUESTS);
        window.localStorage.setItem(CALLBACK_REQUEST_STORAGE_KEY, String(next));
        return next;
      });
      setHasRequestedCallback(true);
      setShowCallbackPopup(true);
    } catch {
      setCallbackRequestError(callback.error);
    } finally {
      setIsRequestingCallback(false);
    }
  };

  return (
    <>
      <div className={className} role="region" aria-label="Roadmap actions">
        <a
          className="roadmap-float-btn roadmap-float-btn--primary"
          data-track-id="roadmap_primary_cta_external"
          href={import.meta.env.VITE_ROADMAP_JOURNEY_URL || "https://www.scaler.com"}
          target="_blank"
          rel="noreferrer"
        >
          {primaryCtaText} <i className="ph ph-arrow-right" aria-hidden />
        </a>
        <button
          type="button"
          className={`roadmap-float-btn roadmap-float-btn--secondary ${hasRequestedCallback ? "roadmap-float-btn--requested" : ""}`}
          data-track-id="roadmap_callback_request"
          onClick={handleRequestCallback}
          disabled={isRequestingCallback || hasReachedCallbackLimit || hasRequestedCallback}
        >
          {getRequestCallbackCtaText({
            hasRequestedCallback,
            isRequestingCallback,
            hasReachedCallbackLimit,
            callbackContent: callback,
          })}
        </button>
        {callbackRequestError ? (
          <p className="roadmap-callback-error" role="status" aria-live="polite">
            {callbackRequestError}
          </p>
        ) : null}
      </div>
      {showCallbackPopup ? (
        <div
          className="roadmap-popup-backdrop"
          role="presentation"
          onClick={() => setShowCallbackPopup(false)}
        >
          <div
            className="roadmap-popup"
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="roadmap-callback-popup-title"
            aria-describedby="roadmap-callback-popup-copy"
            onClick={(event) => event.stopPropagation()}
          >
            <h2 id="roadmap-callback-popup-title">{callback.popupTitle}</h2>
            <p id="roadmap-callback-popup-copy">{callback.popupCopy}</p>
            <button
              type="button"
              className="roadmap-popup-button"
              onClick={() => setShowCallbackPopup(false)}
            >
              {callback.popupButtonLabel}
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}

/**
 * Minimal screen that shows only the two roadmap actions, centered — used for form
 * groups where the full milestone timeline is intentionally not shown (e.g. IIT
 * Roorkee, IIM Trichy).
 */
export function RoadmapActionsScreen({ formGroupLabel, primaryCtaText }) {
  const { callback } = getTimelineContent(formGroupLabel);
  return (
    <section className="screen default-screen timeline-screen timeline-actions-screen">
      <RoadmapActions
        callback={callback}
        primaryCtaText={primaryCtaText}
        className="roadmap-actions-stack"
      />
    </section>
  );
}

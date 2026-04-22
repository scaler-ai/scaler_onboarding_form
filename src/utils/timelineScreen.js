export function getInitialCallbackRequestCount(storageKey, maxRequests) {
  const raw = window.localStorage.getItem(storageKey);
  const parsed = Number.parseInt(raw || "0", 10);
  if (!Number.isFinite(parsed) || parsed < 0) return 0;
  return Math.min(parsed, maxRequests);
}

export function getRequestCallbackCtaText({
  hasRequestedCallback,
  isRequestingCallback,
  hasReachedCallbackLimit,
  callbackContent,
}) {
  if (hasRequestedCallback) return callbackContent.successLabel;
  if (isRequestingCallback) return callbackContent.requestingLabel;
  if (hasReachedCallbackLimit) return callbackContent.limitReachedLabel;
  return callbackContent.defaultLabel;
}

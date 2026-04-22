function normalizeKey(value) {
  return String(value ?? "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");
}

function readFormValueByKey(allValues, matchers = []) {
  if (!allValues || typeof allValues !== "object") return "";
  const entries = Object.entries(allValues);
  for (const [rawKey, rawValue] of entries) {
    const key = normalizeKey(rawKey);
    if (matchers.some((matcher) => matcher(key))) {
      return String(rawValue ?? "");
    }
  }
  return "";
}

function getFieldLabelValue(field, rawValue) {
  if (rawValue == null) return "";
  if (!Array.isArray(field?.options) || field.options.length === 0) return String(rawValue);
  const match = field.options.find((opt) => String(opt?.value) === String(rawValue));
  return String(match?.label ?? rawValue);
}

function readFormValueByFieldLabel(allValues, screens, expectedLabels = []) {
  if (!allValues || typeof allValues !== "object" || !Array.isArray(screens)) return "";
  const labels = new Set(expectedLabels.map((label) => normalizeKey(label)));
  for (const screen of screens) {
    for (const field of screen?.fields || []) {
      if (!labels.has(normalizeKey(field?.label))) continue;
      const rawValue = allValues[field.id];
      if (rawValue == null || rawValue === "") continue;
      return getFieldLabelValue(field, rawValue);
    }
  }
  return "";
}

export function resolveTotalExperience(allValues, screens) {
  const byFieldLabel = readFormValueByFieldLabel(allValues, screens, [
    "Total experience (Full Time)",
    "Total experience",
  ]);
  if (byFieldLabel) return byFieldLabel;
  return readFormValueByKey(allValues, [
    (key) => key === "total experience (full time)",
    (key) => key === "total experience",
    (key) => key.includes("total experience") && key.includes("full time"),
  ]);
}

export function resolveMajorityExperience(allValues, screens) {
  const byFieldLabel = readFormValueByFieldLabel(allValues, screens, [
    "What has majority of your experience been in?",
    "Majority experience",
  ]);
  if (byFieldLabel) return byFieldLabel;
  return readFormValueByKey(allValues, [
    (key) => key === "what has majority of your experience been in?",
    (key) => key === "majority experience",
    (key) => key.includes("majority of your experience"),
  ]);
}

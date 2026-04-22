const DEFAULT_FINAL_LETTER_CONTENT = {
  eyebrow: "Welcome note",
  headline: "{userName}, your journey to staying relevant, starts now",
  subheadline: "(50+ learners have already enrolled, with similar profile like you)",
  alumniSubheading: "Scaler alumni who had a similar journey as yours",
  alumniJourneyLabels: {
    before: "Before Scaler",
    after: "After Scaler",
  },
  mission: {
    title: "Scaler's mission and your future with AI",
    subtitle: "How Scaler helps you stay relevant with AI",
    concernsTitle: "Common conerns around using AI",
    scalerTitlePrefix: "How ",
    scalerTitleAccent: "Scaler",
    scalerTitleSuffix: " empowers you for AI era?",
    concerns: [
      "Outputs are often wrong.",
      "Debugging AI generated code often takes time.",
      "Not sure when to use AI vs Do it myself.",
      "Worry about over dependence.",
    ],
    solutions: [
      "Understand how to prompt, set up evals, use RAG/context correctly, and add guardrails so AI does not hallucinate.",
      "Use AI to validate AI-generated code: LLM-as-a-judge, hidden test cases, second-model review, quick tests for deterministic outputs, plus monitoring and logging to spot errors early.",
      "Use AI for speed in repeatable work, while your own reasoning leads architecture and system design.",
      "In an AI-first world, foundations matter more than ever. Scaler builds strong engineering principles alongside practical AI application, so you're not just keeping up, but staying ahead.",
    ],
    closeTitle:
      "The shift in front of you is not about AI replacing roles. It is about roles changing shape.",
    closeParagraphs: [
      "AI is becoming a new layer of leverage, and the people who learn to use it will stay relevant. They will be the ones who can identify real problems, build quickly, and ship solutions rapidly, all on top of strong technical foundations.",
      "That is where Scaler comes in. We did not add an AI module. We rebuilt everything. Learning once is not enough anymore. Scaler gives you the pole position in AI today and keeps you there for the next decade with updated curriculum and lifelong access. You are not buying a snapshot of 2025. You are buying a living system that updates as the market moves.",
      "It is where you learn how to use AI with judgment, while deepening thinking, problem solving, and long-term technical depth, so you do not just prepare for your next job, you build relevance for every job that comes after it.",
    ],
  },
  cta: {
    statusLine: "Your 12-month roadmap is ready next",
    buttonLabel: "View your 12-month roadmap",
    loadingLabel: "Loading…",
  },
};

const ONLINE_MBA_FINAL_LETTER_CONTENT = {
  eyebrow: "Welcome note",
  headline: "{userName}, your journey to becoming AI-native in business starts now.",
  subheadline: "(50+ professionals from similar backgrounds have already enrolled in this cohort)",
  alumniSubheading: "You'll learn from people who've already made the shift you're about to make.",
  alumniJourneyLabels: {
    before: "FOCUS",
  },
  mission: {
    title: "Common concerns professionals bring into this program",
    subtitle: "How Scaler's PGP addresses this",
    concernsTitle: "Common concerns professionals bring into this program",
    scalerTitlePrefix: "How ",
    scalerTitleAccent: "Scaler's",
    scalerTitleSuffix: " PGP addresses this",
    concerns: [
      "AI outputs feel unreliable for real business decisions.",
      "I use AI tools but don't know how to build workflows around them.",
      "I'm not sure when AI helps vs. when I should trust my own judgment.",
      "I worry I'll fall behind peers who are already more AI-fluent.",
    ],
    solutions: [
      "Learn to prompt, evaluate, and integrate AI into actual business functions — not just use ChatGPT for writing.",
      "Understand when to trust AI outputs and when to intervene, using frameworks built for business operators.",
      "Apply AI to strategy, ops, marketing, and finance decisions — not in isolation, but as part of how you think.",
      "In an AI-first world, strong business fundamentals matter more than ever. Scaler builds both together, so you're not just keeping up — you're staying ahead.",
    ],
    closeTitle:
      "The shift in front of you is not about AI replacing managers. It's about management itself changing shape.",
    closeParagraphs: [
      "AI is becoming a new layer of leverage inside every function. The professionals who learn to use it with judgment — not just awareness — will be the ones trusted with bigger decisions, bigger teams, and bigger mandates.",
      "That's where this program comes in. We didn't add an AI module to a standard MBA curriculum. We rebuilt the whole thing — every subject, every case, every capstone — around what it actually takes to lead in an AI-first decade.",
      "You're not buying a snapshot of 2025. You're building a way of thinking that stays relevant for every role that comes after this one.",
    ],
  },
  cta: {
    statusLine: "Your 12-month roadmap is ready next",
    buttonLabel: "View your 12-month roadmap",
    loadingLabel: "Loading…",
  },
};

export const FINAL_LETTER_CONTENT_BY_FORM_GROUP_LABEL = {
  Onboarding_Form_Academy_V3: DEFAULT_FINAL_LETTER_CONTENT,
  Onboarding_Form_DSML_V3: DEFAULT_FINAL_LETTER_CONTENT,
  Onboarding_Form_Devops_V3: DEFAULT_FINAL_LETTER_CONTENT,
  Onboarding_Form_AI_ML_V3: DEFAULT_FINAL_LETTER_CONTENT,
  Onboarding_Form_Online_MBA_V3: ONLINE_MBA_FINAL_LETTER_CONTENT,
};

export function getFinalLetterContent(formGroupLabel) {
  return (
    FINAL_LETTER_CONTENT_BY_FORM_GROUP_LABEL[formGroupLabel] || DEFAULT_FINAL_LETTER_CONTENT
  );
}

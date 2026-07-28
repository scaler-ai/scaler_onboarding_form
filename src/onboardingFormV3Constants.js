/** Values match `user_data.course_slug` from `/academy/mentee-dashboard/initial-load-data/`. */
export const COURSE_TYPES = {
  dataScience: "data_science",
  scalerAcademy: "scaler",
  ug: "undergraduate",
  devops: "devops",
  ssb: "mba",
  ai_ml: "ai_ml",
  ansrAcademy: "ansr_academy",
  ansrDevops: "ansr_devops",
  ansrDataAnalytics: "ansr_data_analytics",
  onlineMba: "online_mba",
  iit_roorkee: "iit_roorkee",
  iim_trichy: "iim_trichy",
  fde: "fde",
};

/** `label[]` for `/api/v3/interviewbit_form_groups?search_by=label&label[]=…`. */
export const ONBOARDING_FORM_TYPES_V3 = {
  [COURSE_TYPES.scalerAcademy]: "Onboarding_Form_Academy_V3",
  [COURSE_TYPES.dataScience]: "Onboarding_Form_DSML_V3",
  [COURSE_TYPES.devops]: "Onboarding_Form_Devops_V3",
  [COURSE_TYPES.ai_ml]: "Onboarding_Form_AI_ML_V3",
  [COURSE_TYPES.onlineMba]: "Onboarding_Form_Online_MBA_V3",
  [COURSE_TYPES.iit_roorkee]: "Onboarding_Form_IIT_Roorkee_V3",
  [COURSE_TYPES.iim_trichy]: "Onboarding_Form_IIM_Trichy_V3",
  [COURSE_TYPES.fde]: "Onboarding_Form_FDE_V3",
};

export function getOnboardingFormGroupLabelV3(courseSlug) {
  if (courseSlug && ONBOARDING_FORM_TYPES_V3[courseSlug]) {
    return ONBOARDING_FORM_TYPES_V3[courseSlug];
  }
  return ONBOARDING_FORM_TYPES_V3[COURSE_TYPES.scalerAcademy];
}

export const DEFAULT_HOME_SCREEN_CONTENT = {
  stepOverline: "Built for the AI-first world",
  stepTitle: "Welcome to Scaler",
  progressLabel: "Intro",
  eyebrow: "A founder welcome",
  heroTitle:
    "The most important skill of this decade is already here. Let's make sure you're ready for it.",
  heroCopy:
    "We built Scaler because the gap between where professionals are and where AI is taking every industry was becoming unbridgeable without the right training. This program doesn't just teach you AI. It teaches you how to think, build, and lead in a world shaped by it.",
  quoteText: "1% better every day.",
  quoteMeta: "Founding team, Scaler",
  ctaLabel: "Complete onboarding",
  statusLine: "A short intake before your dashboard opens",
};

export const ONLINE_MBA_HOME_SCREEN_CONTENT = {
  stepOverline: "Built for the AI-first world",
  stepTitle: "Welcome to Scaler",
  progressLabel: "Intro",
  eyebrow: "A founder welcome",
  heroTitle:
    "The world changed. Management education didn't. Until now.",
  heroCopy:
    "We built the PGP in Business and AI because the gap between how professionals are being trained and what businesses actually need was growing every year. This program doesn't just teach you management theory. It teaches you how to think, decide, and lead in a world already shaped by AI.",
  quoteText: "You're not here to learn about AI. You're here to become the person in the room who knows how to use it.",
  quoteMeta: "Founding team, Scaler",
  ctaLabel: "Complete onboarding",
  statusLine: "A short intake before your dashboard opens",
};

export const HOME_SCREEN_CONTENT_BY_FORM_GROUP_LABEL = {
  Onboarding_Form_Academy_V3: DEFAULT_HOME_SCREEN_CONTENT,
  Onboarding_Form_DSML_V3: DEFAULT_HOME_SCREEN_CONTENT,
  Onboarding_Form_Devops_V3: DEFAULT_HOME_SCREEN_CONTENT,
  Onboarding_Form_AI_ML_V3: DEFAULT_HOME_SCREEN_CONTENT,
  Onboarding_Form_Online_MBA_V3: ONLINE_MBA_HOME_SCREEN_CONTENT,
  Onboarding_Form_IIT_Roorkee_V3: DEFAULT_HOME_SCREEN_CONTENT,
  Onboarding_Form_IIM_Trichy_V3: DEFAULT_HOME_SCREEN_CONTENT,
  Onboarding_Form_FDE_V3: DEFAULT_HOME_SCREEN_CONTENT,
};

export const EXPECTATION_FORM_ENABLED_COURSES = [
  COURSE_TYPES.scalerAcademy,
  COURSE_TYPES.dataScience,
  COURSE_TYPES.devops,
  COURSE_TYPES.ai_ml,
  COURSE_TYPES.fde,
];

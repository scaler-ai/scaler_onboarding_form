const COMMUNITY_CAROUSEL_SLIDES = [
  { src: "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/191/008/original/1.jpeg?1776406756", alt: "Community Highlight " },
  { src: "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/191/026/original/2.jpeg?1776407883", alt: "Community Highlight " },
  { src: "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/191/029/original/7_%281%29.jpeg?1776407912", alt: "Community Highlight " },
  { src: "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/191/032/original/bangalore_meetup.jpeg?1776407933", alt: "Community Highlight " },
  { src: "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/191/033/original/BLR_feb_1.jpeg?1776407947", alt: "Community Highlight " },
  { src: "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/191/035/original/Chen_2_feb.jpeg?1776407968", alt: "Community Highlight " },
  { src: "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/191/036/original/Chen_Feb_1_.jpeg?1776407989", alt: "Community Highlight " },
  { src: "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/191/037/original/Del_feb_1.jpg?1776408005", alt: "Community Highlight " },
  { src: "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/191/038/original/Del_feb_2.jpg?1776408027", alt: "Community Highlight " },
  { src: "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/191/040/original/Delhi_Donation_drive.jpeg?1776408086", alt: "Community Highlight " },
  { src: "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/191/041/original/Gurgaon_%281%29.jpeg?1776408099", alt: "Community Highlight " },
  { src: "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/191/043/original/Hyd_feb_1.jpg?1776408162", alt: "Community Highlight " },
  { src: "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/191/045/original/Hyd_feb_2.jpg?1776408179", alt: "Community Highlight " },
  { src: "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/191/048/original/Hyderabad.jpeg?1776408197", alt: "Community Highlight " },
  { src: "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/191/050/original/IMG-20221015-WA0144.jpg?1776408311", alt: "Community Highlight " },
  { src: "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/191/051/original/IMG-20221016-WA0047.jpg?1776408329", alt: "Community Highlight " },
  { src: "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/191/052/original/IMG-20221029-WA0088.jpg?1776408358", alt: "Community Highlight " },
  { src: "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/191/053/original/IMG-20221126-WA0076.jpg?1776408382", alt: "Community Highlight " },
  { src: "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/191/054/original/IMG-20221225-WA0248.jpg?1776408407", alt: "Community Highlight " },
  { src: "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/191/056/original/Mumbai_pune.jpeg?1776408434", alt: "Community Highlight " },
  { src: "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/191/057/original/Untitled_%281%29.jpeg?1776408460", alt: "Community Highlight " },
  { src: "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/191/058/original/WhatsApp_Image_2022-12-04_at_9.41.45_AM.jpeg?1776408486", alt: "Community Highlight " },
  { src: "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/191/070/original/community-3.jpeg?1776410569", alt: "Community Highlight " },
  { src: "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/191/071/original/community-5.jpeg?1776410639", alt: "Community Highlight " },
  { src: "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/191/072/original/community-6.jpeg?1776410687", alt: "Community Highlight " },
  { src: "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/191/073/original/community-2.jpg?1776410865", alt: "Community Highlight " },
];

const DEFAULT_TIMELINE_CONTENT = {
  hero: {
    eyebrow: "Your 12-month roadmap to",
    title: "Learning and Building, with and from, AI.",
    subcopy:
      "TL;DR: Meet and greet orientation session, foundational modules, core modules, choose a specialization, placements, and mentor check-ins all along the way.",
  },
  milestones: [
    {
      id: "day-0",
      time: "Day 0",
      title: "Meet and Greet session",
      copy:
        "Orientation session, features including your 24 x 7 AI companion and clarity on what the year will demand from you.",
      side: "left",
      expandable: true,
      image: "/assets/roadmap/1st-milestone.png",
      imageTag: "Meet & Greet preview",
      expandTitle: "Meet and Greet Session",
    },
    {
      id: "day-1",
      time: "Day 1",
      title: "First mentor session",
      copy:
        "Learners who lock in mentors in Week 1 are 2-3× more likely to get roadmap clarity and hit milestones faster. Top mentor's slots are filling quickly — pick yours now.",
      side: "right",
      expandable: true,
      image: "/assets/roadmap/2nd-milestone.png",
      imageTag: "Mentor and dashboard preview",
      expandTitle: "Select a mentor from a pool of Industry veterans and plan your scaler journey",
    },
    {
      id: "day-2",
      time: "Day 2",
      title: "First class",
      copyNode: (
        <>
          We didn&apos;t add an AI module. We rebuilt everything. Learn from the <strong>top 1%</strong> in
          AI. 24x7 <strong>AI companion</strong> for any support.
        </>
      ),
      chips: [{ label: "24x7 AI companion" }, { label: "AI lab sessions" }],
      side: "left",
      expandable: true,
      image: "/assets/roadmap/3rd-milestone-new.png",
      imageTag: "Class experience preview",
      expandTitle: "First class",
    },
    {
      id: "month-1-start",
      time: "Month 1",
      title: "Start solving problems",
      copy:
        "Top performers don't get lucky — they get obsessively consistent. Your live dashboard shows exactly where you stand vs your cohort. Build your performance streak before it builds the gap.",
      side: "right",
      expandable: false,
    },
    {
      id: "month-2-resume",
      time: "Month 2",
      title: "Build your resume",
      copy:
        "99.7% of ATS recruiters use keywords to search, making more than 75% of resumes invisible. Build your resume on Career Hub with AI-optimized, battle-tested templates reviewed by industry experts who've hired at top companies.",
      side: "left",
      expandable: false,
    },
    {
      id: "month-1-community",
      time: "Month 3",
      title: "Join community events",
      copy:
        "Referrals. Inside intel. Real talk from engineers already inside top companies. Your city community is where careers quietly get made — but only if you show up.",
      side: "right",
      expandable: true,
      image: "/assets/roadmap/community.jpeg",
      imageTag: "Community event preview",
      expandTitle: "Join community events",
      carouselSlides: COMMUNITY_CAROUSEL_SLIDES,
      carouselCaption: "Community event gallery",
    },
    {
      id: "month-3-mock",
      time: "Month 3",
      title: "Attempt AI mock interviews",
      copy:
        "Practice until a Google L5 loop feels routine. AI feedback in real time. Optional human panels with actual FAANG engineers. Go again, and again.",
      side: "left",
      expandable: false,
    },
    {
      id: "month-5-mentor",
      time: "Month 5",
      title: "Mentor check-in",
      copy: "Review progress and help resolve any concerns or feedback regarding your course.",
      side: "right",
      expandable: false,
    },
    {
      id: "month-7-track",
      time: "Month 7",
      title: "Choose a specialisation track",
      copy: "Choose between multiple Industry vetted specialisation tracks.",
      side: "left",
      expandable: false,
    },
    {
      id: "month-8-mentor",
      time: "Month 8",
      title: "Mentor check-in",
      copy: "Review progress and help resolve any concerns or feedback regarding your course.",
      side: "right",
      expandable: false,
    },
    {
      id: "month-10-portfolio",
      time: "Month 10",
      title: "Real world portfolio project",
      copy:
        "Use learnings for a practical project. Production-grade systems that look like real engineering work on your resume.",
      side: "left",
      expandable: false,
      chips: [{ label: "AI literacy" }],
    },
    {
      id: "month-10-congrats",
      time: "Month 10",
      title: "Congrats, now you are industry ready!",
      copy: "Clear skill certifications and be eligible to apply for all the roles.",
      side: "right",
      expandable: false,
      chips: [
        { label: "AI infused UI engineer", variant: "ai" },
        { label: "AI augmented SWE", variant: "ai" },
        { label: "Multi-modal AI engineer", variant: "ai" },
        { label: "AI architect", variant: "ai" },
        { label: "Decision scientist", variant: "ai" },
        { label: "AI analyst", variant: "ai" },
        { label: "AI Platform Engineer", variant: "ai" },
        { label: "Agentic Workflow Designer", variant: "ai" },
        { label: "GPU Infrastructure Specialist", variant: "ai" },
        { label: "Semantic Knowledge Engineer", variant: "ai" },
        { label: "ML systems engineer", variant: "ai" },
        { label: "Forward deployed engineer", variant: "ai" },
        { label: "Senior SWE" },
      ],
    },
    {
      id: "month-10-placement",
      time: "Month 10",
      title: "Placement assistance begins",
      copy:
        "Clear skill certification rounds at end of core modules and start applying to jobs from over 900+ hiring partners.",
      side: "left",
      expandable: true,
      image: "/assets/roadmap/4th-milestone.png",
      imageTag: "Careers Hub preview",
      expandTitle: "Get skills, build your resume and apply to jobs on Careerhub",
    },
    {
      id: "month-11-electives",
      time: "Month 11",
      title: "Additional AI electives",
      copy:
        "Eligible for GenAI, Product management with AI etc. (Please check your brochures for all updated electives for your programme)",
      side: "right",
      expandable: false,
    },
    {
      id: "beyond-y1",
      time: "Beyond year 1",
      title: "Your Life long learning partner",
      copy:
        "You will have lifetime access to live and existing course material where we are keeping you updated with latest advancements in tech, so your learning continues.",
      side: "left",
      expandable: false,
    },
  ],
  expandPanelLabel: "Milestone walkthrough",
  callback: {
    successLabel: "Callback requested, expect a call in 24-48hrs",
    requestingLabel: "Requesting callback...",
    limitReachedLabel: "Callback request limit reached",
    defaultLabel: "Questions? Request a callback",
    error: "Could not raise callback request. Please try again.",
    popupTitle: "Request raised",
    popupCopy: "Your dedicated learning success manager will contact you within 24 - 48hrs",
    popupButtonLabel: "Okay",
  },
};

const ONLINE_MBA_TIMELINE_CONTENT = {
  hero: {
    eyebrow: "Your 12-month roadmap to",
    title: "Leading with Business and AI Fluency.",
    subcopy:
      "Orientation, business foundations, management mastery, AI specialisation, capstone projects, mentorship, and career enablement — all the way through.",
  },
  milestones: [
    {
      id: "day-0",
      time: "Day 0",
      title: "Meet & Greet / Orientation",
      copy:
        "Your journey starts here. Get oriented, meet your peers, and take your first look at the companion that will support you every step of the way.",
      side: "left",
      expandable: true,
      image: "/assets/roadmap/1st-milestone.png",
      imageTag: "Orientation preview",
      expandTitle: "Meet & Greet / Orientation",
    },
    {
      id: "day-1",
      time: "Day 1",
      title: "First class",
      copyNode: (
        <>
          We've reimagined management education for the AI era. Learn from operators who've built and scaled at Google, McKinsey, Ola, Swiggy, and more.
        </>
      ),
      chips: [{ label: "LIVE SESSIONS" }, { label: "AI-INTEGRATED CURRICULUM" }, { label: "REAL INDUSTRY CASES" }],
      side: "right",
      expandable: true,
      image: "/assets/roadmap/3rd-milestone-new.png",
      imageTag: "Class experience preview",
      expandTitle: "First class",
    },
    {
      id: "day-2",
      time: "Day 2",
      title: "First mentor session",
      copy:
        "Learners who connect with a mentor in Week 1 are significantly more likely to hit milestones early and gain role clarity faster. Choose from a pool of industry leaders across product, strategy, operations, and marketing.",
      side: "left",
      expandable: true,
      image: "/assets/roadmap/2nd-milestone.png",
      imageTag: "Mentor and dashboard preview",
      expandTitle: "Select a mentor from a pool of Industry veterans and plan your scaler journey",
    },
    {
      id: "month-2-start",
      time: "Month 2",
      title: "Build your profile",
      copy:
        "Craft your LinkedIn, resume, and professional narrative with AI-powered templates reviewed by hiring managers from top companies.",
      side: "right",
      expandable: false,
    },
    {
      id: "month-1-4-management",
      time: "Months 1-4",
      title: "Management Foundations",
      copy:
        "Build your core business toolkit across Structured Thinking, Data Analytics, Market Research, Marketing & GTM, Product Management, Finance & Unit Economics, and Operations & Supply Chain — all through real cases from Uber, Nykaa, Netflix, Amazon, Zara, and Blinkit.",
      side: "left",
      expandable: false,
    },
    {
      id: "month-1-community",
      time: "Month 3",
      title: "Join community events",
      copy:
        "Build connections through peer networking, community conversations, and candid insights from professionals already in the roles you're targeting. Many career pivots begin here.",
      side: "right",
      expandable: true,
      image: "/assets/roadmap/community.jpeg",
      imageTag: "Community event preview",
      expandTitle: "Join community events",
      carouselSlides: COMMUNITY_CAROUSEL_SLIDES,
      carouselCaption: "Community event gallery",
    },
    {
      id: "month-5-capstone",
      time: "MONTH 5",
      title: "Mini Capstone",
      copy:
        "Apply your learning end to end. Solve real business problems and present CEO-ready strategies with clear trade-offs.",
      side: "left",
      expandable: false,
    },
    {
      id: "month-5-mentor",
      time: "Month 5",
      title: "Mentor check-in",
      copy: "Review your progress and refine your goals as you prepare to enter the AI and specialisation phases.",
      side: "right",
      expandable: false,
    },
    {
      id: "month-6-7-track",
      time: "MONTHS 6-7",
      title: "AI Foundations & AI Strategy for Leadership",
      copy: "Move from AI awareness to AI leadership. Explore LLMs, Prompt Engineering, AI across functions, using case studies from Netflix, Google, Meta, Microsoft, JPMorgan, and Walmart.",
      side: "left",
      expandable: false,
    },
    {
      id: "month-8-mentor",
      time: "Month 8",
      title: "Mentor check-in",
      copy: "A specialisation check-in to ensure you're on track and getting the most from your chosen pathway.",
      side: "right",
      expandable: false,
    },
    {
      id: "month-8-10-portfolio",
      time: "MONTHS 8-10",
      title: "AI Specialisation Tracks",
      copy:
        "Go deeper into the function that matters most to your career: AI across Product, Operations & Supply Chain, or Marketing.",
      side: "left",
      expandable: false,
    },
    {
      id: "month-10-congrats",
      time: "Month 10",
      title: "Industry readiness begins",
      copy: "Step into AI-powered mock interviews, resume and profile workshops, career sessions, and industry mixers.",
      side: "right",
      expandable: true,
      image: "/assets/roadmap/4th-milestone.png",
      expandTitle: "Build your profile and apply to roles on Careers Hub",
      chips: [
        { label: "PRODUCT MANAGEMENT" },
        { label: "STRATEGY & BUSINESS OPERATIONS" },
        { label: "GROWTH & MARKETING LEADERSHIP" },
        { label: "PROGRAM / PROJECT MANAGEMENT" },
        { label: "BUSINESS ANALYTICS" },
        { label: "ENTREPRENEURIAL ROLES" }
      ],
    },
    {
      id: "month-10-12-capstone",
      time: "MONTHS 11-12",
      title: "Final Capstone (Live Projects)",
      copy:
        "Work on real-world business challenges — from market entry and SaaS revenue operations to retail ops redesign — the way companies actually solve them. This becomes your portfolio-grade proof of work.",
      side: "left",
      expandable: false,
    },
    {
      id: "beyond-y1",
      time: "Beyond year 1",
      title: "Your lifelong learning partner",
      copy:
        "Continue with lifetime access to updated curriculum, recorded sessions, and new modules as AI and business practices evolve.",
      side: "right",
      expandable: false,
    },
  ],
  expandPanelLabel: "Milestone walkthrough",
  callback: {
    successLabel: "Callback requested, expect a call in 24-48hrs",
    requestingLabel: "Requesting callback...",
    limitReachedLabel: "Callback request limit reached",
    defaultLabel: "Questions? Request a callback",
    error: "Could not raise callback request. Please try again.",
    popupTitle: "Request raised",
    popupCopy: "Your dedicated learning success manager will contact you within 24 - 48hrs",
    popupButtonLabel: "Okay",
  },
};

export const TIMELINE_CONTENT_BY_FORM_GROUP_LABEL = {
  Onboarding_Form_Academy_V3: DEFAULT_TIMELINE_CONTENT,
  Onboarding_Form_DSML_V3: DEFAULT_TIMELINE_CONTENT,
  Onboarding_Form_Devops_V3: DEFAULT_TIMELINE_CONTENT,
  Onboarding_Form_AI_ML_V3: DEFAULT_TIMELINE_CONTENT,
  Onboarding_Form_FDE_V3: DEFAULT_TIMELINE_CONTENT,
  Onboarding_Form_Online_MBA_V3: ONLINE_MBA_TIMELINE_CONTENT,
};

export function getTimelineContent(formGroupLabel) {
  return TIMELINE_CONTENT_BY_FORM_GROUP_LABEL[formGroupLabel] || DEFAULT_TIMELINE_CONTENT;
}

/** Form groups where the roadmap/timeline screen is intentionally skipped (letter is terminal). */
const TIMELINE_HIDDEN_FORM_GROUP_LABELS = new Set([
  "Onboarding_Form_IIT_Roorkee_V3",
  "Onboarding_Form_IIM_Trichy_V3",
]);

export function shouldShowTimeline(formGroupLabel) {
  return !TIMELINE_HIDDEN_FORM_GROUP_LABELS.has(formGroupLabel);
}

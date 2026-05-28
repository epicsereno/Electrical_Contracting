const baseRanges = {
  residential: [1200, 3500],
  commercial: [8500, 42000],
  smart: [2500, 12000],
  ev: [1800, 9500],
  solar: [9000, 48000],
  generator: [6500, 32000],
  emergency: [450, 2400],
  lighting: [2200, 18000]
};

const sizeMultipliers = {
  small: 1,
  medium: 1.8,
  large: 3.4
};

const timelineMultipliers = {
  standard: 1,
  soon: 1.15,
  urgent: 1.35
};

const budgetNotes = {
  under5: "Best fit for small repairs, device installs, and targeted troubleshooting.",
  "5to25": "Good range for panel work, EV chargers, smart controls, lighting, and smaller commercial scopes.",
  "25to100": "Typical for larger facilities, generators, renewable prep, and multi-area upgrades.",
  over100: "Expect a formal proposal with phasing, submittals, permits, and utility coordination."
};

const quoteForm = document.querySelector("#quoteForm");
const estimateRange = document.querySelector("#estimateRange");
const estimateNote = document.querySelector("#estimateNote");

const money = (value) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(value);

function updateEstimate() {
  if (!quoteForm || !estimateRange || !estimateNote) return;

  const type = quoteForm.projectType.value;
  const size = quoteForm.projectSize.value;
  const timeline = quoteForm.timeline.value;
  const budget = quoteForm.budget.value;
  const range = baseRanges[type] || baseRanges.residential;
  const multiplier = sizeMultipliers[size] * timelineMultipliers[timeline];
  const low = Math.round((range[0] * multiplier) / 100) * 100;
  const high = Math.round((range[1] * multiplier) / 100) * 100;

  estimateRange.textContent = `${money(low)}-${money(high)}`;
  estimateNote.textContent = budgetNotes[budget];
}

if (quoteForm) {
  quoteForm.addEventListener("input", updateEstimate);
  updateEstimate();
}

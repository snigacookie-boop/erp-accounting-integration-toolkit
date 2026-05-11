const storageKey = "erpIntegrationAccountingToolkit.v2";

const defaultState = {
  phases: [
    {
      name: "Intake",
      status: "Active",
      items: ["Acquisition scope confirmed", "Staff interviews scheduled", "System inventory requested"]
    },
    {
      name: "Discovery",
      status: "Ready",
      items: ["Policy walkthroughs", "Close calendar review", "Billing workflow mapping"]
    },
    {
      name: "GAP Resolution",
      status: "At Risk",
      items: ["Revenue practice decisions", "Approval routing alignment", "ERP field mapping"]
    },
    {
      name: "Conversion",
      status: "Planned",
      items: ["Trial load", "Exception review", "Manual entry support"]
    },
    {
      name: "Training",
      status: "Planned",
      items: ["Role-based curriculum", "Office hours", "Manager reporting walkthrough"]
    }
  ],
  tasks: [
    { label: "Confirm pre-migration interview roster with acquired company leadership", done: true },
    { label: "Document AP approval differences and send to Integrations Resource Team", done: false },
    { label: "Review automated vendor master load exceptions", done: false },
    { label: "Draft billing manager training deck outline", done: false }
  ],
  team: [
    ["Accounting", "Policies, close, reporting, training"],
    ["IT / ERP", "Field mapping, access, integrations"],
    ["Billing", "Invoice workflow, project setup"],
    ["Operations", "Manager adoption, project controls"],
    ["HR / Payroll", "Labor setup, allocations, timing"]
  ],
  deals: [
    { name: "Northstar Survey Group", phase: "Discovery", closeDate: "May 31, 2026", goLive: "Sep 14, 2026", lead: "A. Patel", risk: "Medium", blockers: 3 },
    { name: "Keystone Civil Partners", phase: "GAP Resolution", closeDate: "Apr 18, 2026", goLive: "Aug 03, 2026", lead: "M. Lewis", risk: "High", blockers: 6 },
    { name: "Harbor Environmental", phase: "Conversion", closeDate: "Mar 22, 2026", goLive: "Jun 29, 2026", lead: "S. Chen", risk: "Medium", blockers: 2 },
    { name: "Summit Inspection Services", phase: "Stabilization", closeDate: "Feb 07, 2026", goLive: "May 06, 2026", lead: "J. Rivera", risk: "Low", blockers: 1 }
  ],
  dayOne: [
    ["Closing cash position confirmed and documented", true, "Treasury"],
    ["Bank access, signers, and payment authority reviewed", false, "Treasury"],
    ["AR collection ownership assigned for first 30 days", true, "AR"],
    ["AP payment hold, release, and approval rules confirmed", false, "AP"],
    ["Payroll continuity plan signed off", true, "HR / Payroll"],
    ["Delegation of authority published to acquired company leaders", false, "Controller"],
    ["Day 1 billing continuity owner named", false, "Billing"],
    ["Emergency finance contact list distributed", true, "Integration Lead"]
  ],
  dayOneAnswers: {},
  decisions: [
    ["AP approvals", "Hold non-critical vendor changes until master data review is complete.", "Controller", "Open"],
    ["Billing continuity", "Legacy billing format approved for two cycles where client portals require it.", "Billing", "Approved"]
  ],
  risks: [
    ["Keystone Civil Partners", "Revenue recognition policy differs by office", "High", "Run policy workshop and require controller sign-off on open WIP.", "Accounting", "Escalated"],
    ["Northstar Survey Group", "Customer master contains duplicate parent-child records", "Medium", "Complete duplicate review before trial conversion.", "AR", "In progress"],
    ["Harbor Environmental", "Billing training conflicts with go-live support week", "Medium", "Split training into manager and billing specialist sessions.", "Training", "Mitigating"],
    ["Summit Inspection Services", "First close has manual accrual dependency", "Low", "Document recurring entry owner and support file path.", "Close", "Monitoring"]
  ],
  stabilization: [
    { deal: "Summit Inspection Services", area: "First close", status: "On track", owner: "Close Team", notes: "Accrual support complete; reporting tie-out pending." },
    { deal: "Summit Inspection Services", area: "Billing accuracy", status: "Watch", owner: "Billing", notes: "Two invoices required manual format review." },
    { deal: "Harbor Environmental", area: "User adoption", status: "At risk", owner: "Operations", notes: "Project managers need second reporting session." }
  ],
  valueItems: [
    { title: "Retire legacy billing tracker", category: "Software/tool elimination", impact: 18000, status: "Planned" },
    { title: "Standardize close package", category: "Faster close", impact: 2, status: "In progress" },
    { title: "Centralize vendor onboarding", category: "Control improvement", impact: 35, status: "Validated" }
  ],
  questions: {
    "Policy": [
      "Which accounting policies differ from Colliers Engineering & Design standards?",
      "How are material estimates, reserves, and accruals documented?",
      "What approvals are required for policy exceptions?"
    ],
    "Billing": [
      "How are project invoices initiated, reviewed, revised, and released?",
      "Which billing terms are most likely to break during ERP conversion?",
      "What reports do project managers rely on before invoices go out?"
    ],
    "Close": [
      "What is the current monthly close calendar by role?",
      "Which reconciliations are manual, delayed, or owner-dependent?",
      "What reports must tie before leadership considers close complete?"
    ],
    "Data": [
      "Which master data fields are locally maintained today?",
      "Where do customer, vendor, project, and employee records originate?",
      "What data quality issues have appeared in prior system changes?"
    ]
  },
  intakeChecklist: [
    {
      area: "Revenue Recognition",
      questions: [
        "How are contract types identified and reviewed before revenue is recorded?",
        "What triggers revenue recognition for fixed fee, T&M, milestone, and percent-complete work?",
        "Who approves revenue adjustments, reserves, write-downs, and unbilled balances?",
        "Which legacy reports support revenue testing during close?"
      ]
    },
    {
      area: "Billing and Invoicing",
      questions: [
        "How are invoices initiated, reviewed, approved, revised, and submitted?",
        "Which billing terms, retainage rules, or client formats require special handling?",
        "Where are contract documents, rate tables, and billing backup stored today?",
        "What causes invoice delays or rework in the current process?"
      ]
    },
    {
      area: "Accounts Receivable",
      questions: [
        "How are cash receipts applied and researched when remittance detail is unclear?",
        "Who owns collections notes, dispute tracking, and write-off recommendations?",
        "How often is AR aging reviewed with project managers or leadership?",
        "Which customer records may have duplicate names, legacy IDs, or parent-child relationships?"
      ]
    },
    {
      area: "Accounts Payable",
      questions: [
        "How are vendors requested, approved, onboarded, and updated?",
        "What invoice approval rules exist by dollar amount, project, office, or expense type?",
        "How are subcontractor payments, insurance requirements, and tax documents tracked?",
        "Which AP items are manually keyed today and may need conversion support?"
      ]
    },
    {
      area: "Payroll and Labor",
      questions: [
        "How are labor categories, departments, offices, and project assignments maintained?",
        "What is the timing between timesheet approval, payroll processing, and job cost posting?",
        "How are bonuses, allowances, overtime, and special pay codes handled?",
        "Which labor allocation reports must tie after migration?"
      ]
    },
    {
      area: "Project Accounting",
      questions: [
        "Who creates projects and phases, and what information is required before setup?",
        "How are budgets, contract values, change orders, and backlog maintained?",
        "What project attributes drive reporting, billing, revenue, or approvals?",
        "Which active projects need special attention before go-live?"
      ]
    },
    {
      area: "Month-End Close",
      questions: [
        "What is the close calendar, and which tasks are owner-dependent or manual?",
        "Which reconciliations, accruals, and entries must be completed before reporting?",
        "Where are close support files stored, reviewed, and approved?",
        "What common late adjustments should be built into the integration plan?"
      ]
    },
    {
      area: "Financial Reporting",
      questions: [
        "Which financial and operational reports does leadership use weekly or monthly?",
        "What report dimensions are required by office, discipline, project manager, or entity?",
        "Which legacy reports should be recreated, retired, or replaced by ERP dashboards?",
        "How are report variances investigated and communicated today?"
      ]
    },
    {
      area: "Master Data and Controls",
      questions: [
        "Who owns customer, vendor, employee, project, and chart of accounts changes?",
        "What naming conventions, required fields, or duplicate checks exist today?",
        "Which approval controls should be preserved or improved in the ERP workflow?",
        "What data cleanup must happen before automated migration?"
      ]
    }
  ],
  intakeAnswers: {},
  notes: [
    {
      company: "Sample acquisition",
      area: "Project accounting",
      practice: "Project setup is initiated by operations and completed by accounting after contract review.",
      impact: "Define required ERP project fields and owner handoff before trial conversion."
    }
  ],
  gaps: [
    ["Revenue recognition", "Local PMs apply informal milestone thresholds", "Standardized policy with documented review", "High", "Accounting", "Decision needed"],
    ["Billing", "Invoices approved by office administrator", "Workflow approval by project manager and billing lead", "Medium", "Billing", "In progress"],
    ["Vendor master", "Duplicate vendor review handled quarterly", "Pre-load duplicate review before ERP migration", "Low", "AP", "Ready"]
  ],
  validation: [
    ["Chart of accounts mapped and balanced", true, "GL"],
    ["Customer master duplicate review complete", false, "AR"],
    ["Vendor tax identifiers validated", false, "AP"],
    ["Open AR aging ties to legacy system", true, "AR"],
    ["Project WIP and backlog reviewed with operations", false, "Ops"],
    ["Manual journal entry templates prepared", true, "Close"]
  ],
  exceptions: [
    ["Missing project manager on converted projects", "42 records", "Operations"],
    ["Vendor address failed validation", "18 records", "AP"],
    ["Legacy billing terms require manual ERP setup", "9 contracts", "Billing"]
  ],
  training: [
    {
      audience: "Administrative Staff",
      title: "Daily ERP Navigation",
      status: "Scheduled",
      topics: ["Customer and vendor lookup", "Document routing", "Common support paths"]
    },
    {
      audience: "Accounting Staff",
      title: "Close and Reconciliation",
      status: "Drafting",
      topics: ["Month-end checklist", "Journal entry standards", "Exception handling"]
    },
    {
      audience: "Billing Staff",
      title: "Invoice Workflow",
      status: "Needs owner",
      topics: ["Project billing setup", "Approval routing", "Revision controls"]
    },
    {
      audience: "Management",
      title: "Financial Reporting",
      status: "Planned",
      topics: ["Dashboards", "Project performance", "Go-live support rhythm"]
    }
  ],
  ideas: [
    {
      idea: "Create a reusable interview script by accounting area",
      impact: "Quick win",
      notes: "Reduces prep time and improves consistency across acquired companies."
    },
    {
      idea: "Add exception reason codes to conversion review",
      impact: "High impact",
      notes: "Makes recurring data issues visible to the Accounting Group."
    }
  ]
};

let state = loadState();

const sectionTitles = {
  dashboard: "Command Center",
  portfolio: "Acquisition Portfolio",
  dayone: "Day 1 Finance",
  discovery: "Pre-Migration Discovery",
  gap: "GAP Analysis",
  risk: "Risk Register",
  timeline: "Timeline Builder",
  validation: "Data Validation",
  training: "Training Studio",
  stabilization: "Stabilization",
  value: "Value Capture",
  ideas: "Innovation Log"
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function cloneDefaultState() {
  return JSON.parse(JSON.stringify(defaultState));
}

function mergeState(defaultValue, savedValue) {
  if (Array.isArray(defaultValue)) return Array.isArray(savedValue) ? savedValue : defaultValue;
  if (!defaultValue || typeof defaultValue !== "object") return savedValue ?? defaultValue;

  const merged = { ...defaultValue };
  Object.keys(defaultValue).forEach((key) => {
    if (savedValue && Object.prototype.hasOwnProperty.call(savedValue, key)) {
      merged[key] = mergeState(defaultValue[key], savedValue[key]);
    }
  });
  return merged;
}

function loadState() {
  try {
    const savedState = JSON.parse(localStorage.getItem(storageKey));
    return mergeState(cloneDefaultState(), savedState);
  } catch {
    return cloneDefaultState();
  }
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function rerenderApp() {
  renderPhases();
  renderTasks();
  renderTeam();
  renderPortfolio();
  renderDayOne();
  renderDecisions();
  renderQuestions();
  renderIntakeChecklist();
  renderNotes();
  renderGaps();
  renderRisks();
  renderValidation();
  renderExceptions();
  renderTraining();
  renderStabilization();
  renderValue();
  renderIdeas();
  renderMetrics();
}

function renderPhases() {
  $("#phaseTrack").innerHTML = state.phases.map((phase) => `
    <article class="phase searchable">
      <span class="badge">${phase.status}</span>
      <h4>${phase.name}</h4>
      <ul>${phase.items.map((item) => `<li>${item}</li>`).join("")}</ul>
    </article>
  `).join("");
}

function renderTasks() {
  $("#priorityTasks").innerHTML = state.tasks.map((task, index) => `
    <label class="task searchable">
      <input type="checkbox" ${task.done ? "checked" : ""} data-task="${index}">
      <span>${task.label}</span>
    </label>
  `).join("");
}

function renderTeam() {
  $("#teamMap").innerHTML = state.team.map(([name, role]) => `
    <article class="team-member searchable">
      <strong>${name}</strong>
      <span>${role}</span>
    </article>
  `).join("");
}

function renderPortfolio() {
  $("#portfolioGrid").innerHTML = state.deals.map((deal, index) => `
    <article class="portfolio-card searchable">
      <div class="card-topline">
        <select data-deal-field="${index}-risk" aria-label="Deal risk">
          ${["Low", "Medium", "High"].map((risk) => `<option ${deal.risk === risk ? "selected" : ""}>${risk}</option>`).join("")}
        </select>
        <button class="mini-danger" type="button" data-delete-deal="${index}">Delete</button>
      </div>
      <label>Deal<input data-deal-field="${index}-name" value="${deal.name}"></label>
      <label>Phase<input data-deal-field="${index}-phase" value="${deal.phase}"></label>
      <label>Close date<input data-deal-field="${index}-closeDate" value="${deal.closeDate}"></label>
      <label>Go-live<input data-deal-field="${index}-goLive" value="${deal.goLive}"></label>
      <label>Lead<input data-deal-field="${index}-lead" value="${deal.lead}"></label>
      <label>Blockers<input type="number" min="0" data-deal-field="${index}-blockers" value="${deal.blockers}"></label>
    </article>
  `).join("");
}

function renderDayOne() {
  $("#dayOneChecklist").innerHTML = state.dayOne.map((item, index) => {
    const checked = state.dayOneAnswers[index] ?? item[1];
    return `
      <label class="check-item searchable">
        <input type="checkbox" ${checked ? "checked" : ""} data-day-one="${index}">
        <strong>${item[0]}</strong>
        <span>${item[2]}</span>
      </label>
    `;
  }).join("");
}

function renderDecisions() {
  $("#decisionList").innerHTML = state.decisions.map((decision, index) => `
    <article class="decision searchable">
      <div class="card-topline">
        <select data-decision-field="${index}-3" aria-label="Decision status">
          ${["Open", "Approved", "Deferred", "Escalated"].map((status) => `<option ${decision[3] === status ? "selected" : ""}>${status}</option>`).join("")}
        </select>
        <button class="mini-danger" type="button" data-delete-decision="${index}">Delete</button>
      </div>
      <label>Decision<input data-decision-field="${index}-0" value="${decision[0]}"></label>
      <label>Summary<textarea rows="3" data-decision-field="${index}-1">${decision[1]}</textarea></label>
      <label>Owner<input data-decision-field="${index}-2" value="${decision[2]}"></label>
    </article>
  `).join("");
}

function renderQuestions(active = "Policy") {
  $("#questionFilters").innerHTML = Object.keys(state.questions).map((category) => `
    <button class="filter-chip ${category === active ? "active" : ""}" type="button" data-question-filter="${category}">${category}</button>
  `).join("");

  $("#questionList").innerHTML = state.questions[active].map((question, index) => `
    <article class="question searchable">
      <h4>${active} question ${index + 1}</h4>
      <p>${question}</p>
    </article>
  `).join("");
}

function renderIntakeChecklist() {
  $("#intakeChecklist").innerHTML = state.intakeChecklist.map((group, groupIndex) => `
    <article class="intake-area searchable">
      <h4>${group.area}</h4>
      ${group.questions.map((question, questionIndex) => {
        const key = `${groupIndex}-${questionIndex}`;
        return `
          <label>
            <input type="checkbox" data-intake-question="${key}" ${state.intakeAnswers[key] ? "checked" : ""}>
            <span>${question}</span>
          </label>
        `;
      }).join("")}
    </article>
  `).join("");
}

function renderNotes() {
  $("#discoveryNotes").innerHTML = state.notes.map((note) => `
    <article class="note searchable">
      <h4>${note.company} - ${note.area}</h4>
      <p><strong>Practice:</strong> ${note.practice}</p>
      <p><strong>ERP impact:</strong> ${note.impact}</p>
    </article>
  `).join("");
}

function renderGaps() {
  $("#gapTable").innerHTML = state.gaps.map((gap, rowIndex) => {
    const riskClass = gap[3].toLowerCase();
    return `
      <tr class="searchable">
        <td contenteditable="true" data-gap-cell="${rowIndex}-0">${gap[0]}</td>
        <td contenteditable="true" data-gap-cell="${rowIndex}-1">${gap[1]}</td>
        <td contenteditable="true" data-gap-cell="${rowIndex}-2">${gap[2]}</td>
        <td><span class="risk-badge ${riskClass}">${gap[3]}</span></td>
        <td contenteditable="true" data-gap-cell="${rowIndex}-4">${gap[4]}</td>
        <td><span class="status-badge">${gap[5]}</span></td>
      </tr>
    `;
  }).join("");
}

function renderRisks() {
  $("#riskTable").innerHTML = state.risks.map((risk, rowIndex) => `
    <tr class="searchable">
      <td contenteditable="true" data-risk-cell="${rowIndex}-0">${risk[0]}</td>
      <td contenteditable="true" data-risk-cell="${rowIndex}-1">${risk[1]}</td>
      <td><span class="risk-badge ${risk[2].toLowerCase()}">${risk[2]}</span></td>
      <td contenteditable="true" data-risk-cell="${rowIndex}-3">${risk[3]}</td>
      <td contenteditable="true" data-risk-cell="${rowIndex}-4">${risk[4]}</td>
      <td><span class="status-badge">${risk[5]}</span></td>
    </tr>
  `).join("");
}

function renderValidation() {
  $("#validationChecklist").innerHTML = state.validation.map((item, index) => `
    <label class="check-item searchable">
      <input type="checkbox" ${item[1] ? "checked" : ""} data-validation="${index}">
      <strong>${item[0]}</strong>
      <span>${item[2]}</span>
    </label>
  `).join("");
}

function renderExceptions() {
  $("#exceptionList").innerHTML = state.exceptions.map((item) => `
    <article class="exception searchable">
      <h4>${item[0]}</h4>
      <p>${item[1]} - Owner: ${item[2]}</p>
    </article>
  `).join("");
}

function renderStabilization() {
  $("#stabilizationGrid").innerHTML = state.stabilization.map((item, index) => `
    <article class="card searchable">
      <div class="card-topline">
        <select data-stabilization-field="${index}-status" aria-label="Stabilization status">
          ${["On track", "Watch", "At risk", "Complete"].map((status) => `<option ${item.status === status ? "selected" : ""}>${status}</option>`).join("")}
        </select>
        <button class="mini-danger" type="button" data-delete-stabilization="${index}">Delete</button>
      </div>
      <label>Deal<input data-stabilization-field="${index}-deal" value="${item.deal}"></label>
      <label>Area<input data-stabilization-field="${index}-area" value="${item.area}"></label>
      <label>Owner<input data-stabilization-field="${index}-owner" value="${item.owner}"></label>
      <label>Notes<textarea rows="3" data-stabilization-field="${index}-notes">${item.notes}</textarea></label>
    </article>
  `).join("");
}

function renderTraining() {
  $("#trainingGrid").innerHTML = state.training.map((session) => `
    <article class="card searchable">
      <span class="status-badge">${session.status}</span>
      <h4>${session.audience}</h4>
      <p>${session.title}</p>
      <ul>${session.topics.map((topic) => `<li>${topic}</li>`).join("")}</ul>
    </article>
  `).join("");
}

function renderValue() {
  $("#valueList").innerHTML = state.valueItems.map((item, index) => `
    <article class="value-item searchable">
      <div class="card-topline">
        <select data-value-field="${index}-status" aria-label="Value status">
          ${["New", "Planned", "In progress", "Validated"].map((status) => `<option ${item.status === status ? "selected" : ""}>${status}</option>`).join("")}
        </select>
        <button class="mini-danger" type="button" data-delete-value="${index}">Delete</button>
      </div>
      <label>Opportunity<input data-value-field="${index}-title" value="${item.title}"></label>
      <label>Category<input data-value-field="${index}-category" value="${item.category}"></label>
      <label>Impact<input type="number" data-value-field="${index}-impact" value="${item.impact}"></label>
      <strong>${formatImpact(item)}</strong>
    </article>
  `).join("");

  const dollarImpact = state.valueItems
    .filter((item) => item.category.toLowerCase().includes("software"))
    .reduce((total, item) => total + item.impact, 0);
  const fasterClose = state.valueItems
    .filter((item) => item.category.toLowerCase().includes("close"))
    .reduce((total, item) => total + item.impact, 0);
  const controlItems = state.valueItems.filter((item) => item.category.toLowerCase().includes("control")).length;

  $("#valueSummary").innerHTML = `
    <article class="metric compact"><span>Annual tool savings</span><strong>$${dollarImpact.toLocaleString()}</strong></article>
    <article class="metric compact"><span>Close acceleration</span><strong>${fasterClose} days</strong></article>
    <article class="metric compact"><span>Control improvements</span><strong>${controlItems}</strong></article>
  `;
}

function renderIdeas() {
  $("#ideaList").innerHTML = state.ideas.map((idea) => `
    <article class="idea searchable">
      <span class="status-badge">${idea.impact}</span>
      <h4>${idea.idea}</h4>
      <p>${idea.notes}</p>
    </article>
  `).join("");
}

function formatImpact(item) {
  if (item.category.toLowerCase().includes("software")) return `$${item.impact.toLocaleString()} annual run-rate`;
  if (item.category.toLowerCase().includes("close")) return `${item.impact} day improvement`;
  return `${item.impact}% process coverage`;
}

function updateIndexedObject(collection, descriptor, value) {
  const [index, field] = descriptor.split("-");
  const currentValue = collection[Number(index)][field];
  collection[Number(index)][field] = typeof currentValue === "number" ? Number(value) : value;
  saveState();
}

function updateIndexedArray(collection, descriptor, value) {
  const [index, column] = descriptor.split("-").map(Number);
  collection[index][column] = value;
  saveState();
}

function generateTimeline(event) {
  event?.preventDefault();
  const form = new FormData($("#timelineForm"));
  const goLive = form.get("goLive") || new Date(Date.now() + 1000 * 60 * 60 * 24 * 90).toISOString().slice(0, 10);
  const complexity = Number(form.get("complexity"));
  const sizeOffset = { small: 7, medium: 14, large: 28 }[form.get("size")];
  const milestones = [
    ["Pre-migration kickoff", 84 + sizeOffset + complexity * 2, "Confirm scope, governance, interview schedule, and resource owners."],
    ["Discovery interviews complete", 63 + sizeOffset, "Capture accounting policies, billing practices, close rhythm, and reporting dependencies."],
    ["GAP decisions documented", 45 + complexity * 3, "Resolve differences between legacy practice and CED standards with accountable owners."],
    ["Trial conversion validation", 28 + complexity * 2, "Review automated load results, exception reports, and manual entry needs."],
    ["Training delivery begins", 18, "Run role-based sessions for administrative, accounting, billing, and management staff."],
    ["Go-live support command center", 0, "Monitor daily issues, prioritize fixes, and collect process improvement ideas."]
  ];

  const baseDate = new Date(`${goLive}T12:00:00`);
  $("#timelineOutput").innerHTML = milestones.map(([title, daysBefore, detail]) => {
    const date = new Date(baseDate);
    date.setDate(date.getDate() - daysBefore);
    return `
      <article class="timeline-item searchable">
        <span class="status-badge">${date.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })}</span>
        <h4>${title}</h4>
        <p>${detail}</p>
      </article>
    `;
  }).join("");
}

function renderMetrics() {
  const doneTasks = state.tasks.filter((task) => task.done).length;
  const doneChecks = state.validation.filter((item) => item[1]).length;
  const highRisks = state.gaps.filter((gap) => gap[3] === "High").length + state.exceptions.length;
  const trainingReady = state.training.filter((session) => session.status !== "Needs owner").length;
  const portfolioHighRisks = state.risks.filter((risk) => risk[2] === "High").length + state.deals.filter((deal) => deal.risk === "High").length;

  $("#readinessScore").textContent = `${Math.round(((doneTasks / state.tasks.length) * 35) + ((doneChecks / state.validation.length) * 45) + 20)}%`;
  $("#riskCount").textContent = String(highRisks);
  $("#trainingScore").textContent = `${Math.round((trainingReady / state.training.length) * 100)}%`;
  $("#dataScore").textContent = `${Math.round((doneChecks / state.validation.length) * 100)}%`;
  $("#dealCount").textContent = String(state.deals.length);
  $("#portfolioRiskScore").textContent = portfolioHighRisks > 1 ? "High" : portfolioHighRisks === 1 ? "Med" : "Low";
  $("#pulseText").textContent = highRisks > 4 ? "Risks need attention" : "Integration on track";
}

function switchSection(sectionId, updateHash = true) {
  if (!sectionTitles[sectionId]) return;
  $$(".tool-section").forEach((section) => section.classList.toggle("active", section.id === sectionId));
  $$(".nav-button").forEach((button) => button.classList.toggle("active", button.dataset.section === sectionId));
  $("#sectionTitle").textContent = sectionTitles[sectionId];
  $("#globalSearch").value = "";
  applySearch("");
  if (updateHash) {
    history.replaceState(null, "", `#${sectionId}`);
  }
}

function applySearch(term) {
  const normalized = term.trim().toLowerCase();
  $$(".searchable").forEach((element) => {
    element.classList.toggle("hidden-by-search", normalized && !element.textContent.toLowerCase().includes(normalized));
  });
}

function buildBrief() {
  const openTasks = state.tasks.filter((task) => !task.done).map((task) => `- ${task.label}`).join("\n");
  const openChecks = state.validation.filter((item) => !item[1]).map((item) => `- ${item[0]} (${item[2]})`).join("\n");
  const highGaps = state.gaps.filter((gap) => gap[3] === "High").map((gap) => `- ${gap[0]}: ${gap[1]} -> ${gap[2]}`).join("\n");
  const activeDeals = state.deals.map((deal) => `- ${deal.name}: ${deal.phase}, ${deal.risk} risk, ${deal.blockers} blockers`).join("\n");
  const executiveRisks = state.risks.filter((risk) => risk[2] === "High").map((risk) => `- ${risk[0]}: ${risk[1]} | ${risk[3]}`).join("\n");
  const dayOneOpen = state.dayOne.filter((item, index) => !(state.dayOneAnswers[index] ?? item[1])).map((item) => `- ${item[0]} (${item[2]})`).join("\n");
  const stabilizationWatch = state.stabilization.filter((item) => item.status !== "On track").map((item) => `- ${item.deal}: ${item.area} is ${item.status}`).join("\n");
  return `ERP Integration Accounting Brief

Readiness: ${$("#readinessScore").textContent}
Open risks: ${$("#riskCount").textContent}
Training coverage: ${$("#trainingScore").textContent}
Data confidence: ${$("#dataScore").textContent}
Active deals: ${$("#dealCount").textContent}
Portfolio risk: ${$("#portfolioRiskScore").textContent}

Active acquisition portfolio:
${activeDeals || "- None"}

Executive risks:
${executiveRisks || "- None"}

Day 1 finance open items:
${dayOneOpen || "- None"}

Priority open tasks:
${openTasks || "- None"}

High-risk GAP items:
${highGaps || "- None"}

Open validation checks:
${openChecks || "- None"}

Stabilization watch list:
${stabilizationWatch || "- None"}

Latest process ideas:
${state.ideas.map((idea) => `- ${idea.idea} (${idea.impact})`).join("\n")}`;
}

function csvEscape(value) {
  const text = String(value ?? "");
  return `"${text.replaceAll("\"", "\"\"")}"`;
}

function toCsv(headers, rows) {
  return [
    headers.map(csvEscape).join(","),
    ...rows.map((row) => row.map(csvEscape).join(","))
  ].join("\n");
}

function downloadFile(filename, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function todayStamp() {
  return new Date().toISOString().slice(0, 10);
}

function downloadBrief() {
  downloadFile(`erp-integration-brief-${todayStamp()}.txt`, buildBrief(), "text/plain;charset=utf-8");
}

function exportPortfolioCsv() {
  const rows = state.deals.map((deal) => [
    deal.name,
    deal.phase,
    deal.closeDate,
    deal.goLive,
    deal.lead,
    deal.risk,
    deal.blockers
  ]);
  downloadFile(
    `acquisition-portfolio-${todayStamp()}.csv`,
    toCsv(["Deal", "Phase", "Close Date", "Go-Live", "Lead", "Risk", "Blockers"], rows),
    "text/csv;charset=utf-8"
  );
}

function exportRiskCsv() {
  downloadFile(
    `portfolio-risk-register-${todayStamp()}.csv`,
    toCsv(["Deal", "Risk", "Impact", "Mitigation", "Owner", "Status"], state.risks),
    "text/csv;charset=utf-8"
  );
}

function exportDayOneCsv() {
  const rows = state.dayOne.map((item, index) => [
    item[0],
    state.dayOneAnswers[index] ?? item[1] ? "Complete" : "Open",
    item[2]
  ]);
  downloadFile(
    `day-1-finance-checklist-${todayStamp()}.csv`,
    toCsv(["Checklist Item", "Status", "Owner"], rows),
    "text/csv;charset=utf-8"
  );
}

function buildReportSection(title, items) {
  return `
    <section>
      <h2>${title}</h2>
      ${items.length ? `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>` : "<p>No items.</p>"}
    </section>
  `;
}

function renderPrintReport() {
  const highRisks = state.risks
    .filter((risk) => risk[2] === "High")
    .map((risk) => `<strong>${risk[0]}</strong>: ${risk[1]}<br><span>${risk[3]}</span>`);
  const dayOneOpen = state.dayOne
    .filter((item, index) => !(state.dayOneAnswers[index] ?? item[1]))
    .map((item) => `<strong>${item[2]}</strong>: ${item[0]}`);
  const stabilizationWatch = state.stabilization
    .filter((item) => item.status !== "On track")
    .map((item) => `<strong>${item.deal}</strong>: ${item.area} - ${item.status}`);
  const valueItems = state.valueItems
    .map((item) => `<strong>${item.title}</strong>: ${formatImpact(item)} (${item.status})`);

  $("#printReport").innerHTML = `
    <div class="print-header">
      <p>Executive Integration Report</p>
      <h1>ERP Accounting Integration Portfolio</h1>
      <span>Generated ${new Date().toLocaleDateString()}</span>
    </div>
    <div class="print-metrics">
      <article><span>Readiness</span><strong>${$("#readinessScore").textContent}</strong></article>
      <article><span>Open Risks</span><strong>${$("#riskCount").textContent}</strong></article>
      <article><span>Active Deals</span><strong>${$("#dealCount").textContent}</strong></article>
      <article><span>Portfolio Risk</span><strong>${$("#portfolioRiskScore").textContent}</strong></article>
    </div>
    <section>
      <h2>Acquisition Portfolio</h2>
      <table>
        <thead>
          <tr><th>Deal</th><th>Phase</th><th>Go-Live</th><th>Lead</th><th>Risk</th><th>Blockers</th></tr>
        </thead>
        <tbody>
          ${state.deals.map((deal) => `
            <tr>
              <td>${deal.name}</td>
              <td>${deal.phase}</td>
              <td>${deal.goLive}</td>
              <td>${deal.lead}</td>
              <td>${deal.risk}</td>
              <td>${deal.blockers}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </section>
    ${buildReportSection("Executive Risks", highRisks)}
    ${buildReportSection("Day 1 Finance Open Items", dayOneOpen)}
    ${buildReportSection("Stabilization Watch List", stabilizationWatch)}
    ${buildReportSection("Value Capture", valueItems)}
  `;
}

function printExecutiveReport() {
  renderPrintReport();
  window.print();
}

function openBriefDialog() {
  $("#briefOutput").textContent = buildBrief();
  const dialog = $("#briefDialog");

  if (typeof dialog.showModal === "function") {
    dialog.showModal();
    return;
  }

  dialog.setAttribute("open", "");
}

function closeBriefDialog() {
  const dialog = $("#briefDialog");

  if (typeof dialog.close === "function") {
    dialog.close();
    return;
  }

  dialog.removeAttribute("open");
}

function bindEvents() {
  $$(".nav-button").forEach((button) => {
    button.addEventListener("click", () => switchSection(button.getAttribute("data-section")));
  });

  $$("[data-section-jump]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      switchSection(button.getAttribute("data-section-jump"));
    });
  });

  $("#questionFilters").addEventListener("click", (event) => {
    const category = event.target.dataset.questionFilter;
    if (category) renderQuestions(category);
  });

  $("#priorityTasks").addEventListener("change", (event) => {
    const index = event.target.dataset.task;
    if (index !== undefined) {
      state.tasks[index].done = event.target.checked;
      saveState();
      renderMetrics();
    }
  });

  $("#dayOneChecklist").addEventListener("change", (event) => {
    const index = event.target.dataset.dayOne;
    if (index !== undefined) {
      state.dayOneAnswers[index] = event.target.checked;
      saveState();
    }
  });

  $("#validationChecklist").addEventListener("change", (event) => {
    const index = event.target.dataset.validation;
    if (index !== undefined) {
      state.validation[index][1] = event.target.checked;
      saveState();
      renderMetrics();
    }
  });

  $("#intakeChecklist").addEventListener("change", (event) => {
    const key = event.target.dataset.intakeQuestion;
    if (key !== undefined) {
      state.intakeAnswers[key] = event.target.checked;
      saveState();
    }
  });

  $("#discoveryForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    state.notes.unshift(data);
    saveState();
    event.target.reset();
    renderNotes();
  });

  $("#ideaForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    state.ideas.unshift(data);
    saveState();
    event.target.reset();
    renderIdeas();
  });

  $("#addGapRow").addEventListener("click", () => {
    state.gaps.unshift(["New accounting area", "Legacy practice", "CED standard", "Medium", "Owner", "New"]);
    saveState();
    renderGaps();
    renderMetrics();
  });

  $("#addDeal").addEventListener("click", () => {
    state.deals.unshift({
      name: "New Acquisition",
      phase: "Intake",
      closeDate: "TBD",
      goLive: "TBD",
      lead: "Unassigned",
      risk: "Medium",
      blockers: 0
    });
    saveState();
    renderPortfolio();
    renderMetrics();
  });

  $("#portfolioGrid").addEventListener("input", (event) => {
    const field = event.target.dataset.dealField;
    if (!field) return;
    updateIndexedObject(state.deals, field, event.target.value);
    renderMetrics();
  });

  $("#portfolioGrid").addEventListener("change", (event) => {
    const field = event.target.dataset.dealField;
    if (!field) return;
    updateIndexedObject(state.deals, field, event.target.value);
    renderMetrics();
  });

  $("#portfolioGrid").addEventListener("click", (event) => {
    const index = event.target.dataset.deleteDeal;
    if (index === undefined) return;
    state.deals.splice(Number(index), 1);
    saveState();
    renderPortfolio();
    renderMetrics();
  });

  $("#resetDayOne").addEventListener("click", () => {
    state.dayOneAnswers = {};
    saveState();
    renderDayOne();
  });

  $("#addDecision").addEventListener("click", () => {
    state.decisions.unshift(["New finance decision", "Decision summary pending.", "Unassigned", "Open"]);
    saveState();
    renderDecisions();
  });

  $("#decisionList").addEventListener("input", (event) => {
    const field = event.target.dataset.decisionField;
    if (!field) return;
    updateIndexedArray(state.decisions, field, event.target.value);
  });

  $("#decisionList").addEventListener("change", (event) => {
    const field = event.target.dataset.decisionField;
    if (!field) return;
    updateIndexedArray(state.decisions, field, event.target.value);
  });

  $("#decisionList").addEventListener("click", (event) => {
    const index = event.target.dataset.deleteDecision;
    if (index === undefined) return;
    state.decisions.splice(Number(index), 1);
    saveState();
    renderDecisions();
  });

  $("#addRisk").addEventListener("click", () => {
    state.risks.unshift(["New deal", "New risk", "Medium", "Mitigation pending.", "Unassigned", "Open"]);
    saveState();
    renderRisks();
    renderMetrics();
  });

  $("#gapTable").addEventListener("focusout", (event) => {
    const cell = event.target.dataset.gapCell;
    if (!cell) return;
    const [rowIndex, columnIndex] = cell.split("-").map(Number);
    state.gaps[rowIndex][columnIndex] = event.target.textContent.trim();
    saveState();
  });

  $("#riskTable").addEventListener("focusout", (event) => {
    const cell = event.target.dataset.riskCell;
    if (!cell) return;
    const [rowIndex, columnIndex] = cell.split("-").map(Number);
    state.risks[rowIndex][columnIndex] = event.target.textContent.trim();
    saveState();
  });

  $("#addException").addEventListener("click", () => {
    state.exceptions.unshift(["New conversion exception", "Record count pending", "Unassigned"]);
    saveState();
    renderExceptions();
    renderMetrics();
  });

  $("#addTraining").addEventListener("click", () => {
    state.training.unshift({
      audience: "New Audience",
      title: "Session title",
      status: "Drafting",
      topics: ["Learning objective", "Practice activity", "Support path"]
    });
    saveState();
    renderTraining();
    renderMetrics();
  });

  $("#addStabilizationItem").addEventListener("click", () => {
    state.stabilization.unshift({
      deal: "New acquisition",
      area: "Stabilization area",
      status: "Watch",
      owner: "Unassigned",
      notes: "Support plan pending."
    });
    saveState();
    renderStabilization();
  });

  $("#stabilizationGrid").addEventListener("input", (event) => {
    const field = event.target.dataset.stabilizationField;
    if (!field) return;
    updateIndexedObject(state.stabilization, field, event.target.value);
  });

  $("#stabilizationGrid").addEventListener("change", (event) => {
    const field = event.target.dataset.stabilizationField;
    if (!field) return;
    updateIndexedObject(state.stabilization, field, event.target.value);
  });

  $("#stabilizationGrid").addEventListener("click", (event) => {
    const index = event.target.dataset.deleteStabilization;
    if (index === undefined) return;
    state.stabilization.splice(Number(index), 1);
    saveState();
    renderStabilization();
  });

  $("#addValueItem").addEventListener("click", () => {
    state.valueItems.unshift({
      title: "New value opportunity",
      category: "Control improvement",
      impact: 10,
      status: "New"
    });
    saveState();
    renderValue();
  });

  $("#valueList").addEventListener("input", (event) => {
    const field = event.target.dataset.valueField;
    if (!field) return;
    updateIndexedObject(state.valueItems, field, event.target.value);
  });

  $("#valueList").addEventListener("change", (event) => {
    const field = event.target.dataset.valueField;
    if (!field) return;
    updateIndexedObject(state.valueItems, field, event.target.value);
    renderValue();
  });

  $("#valueList").addEventListener("click", (event) => {
    const index = event.target.dataset.deleteValue;
    if (index === undefined) return;
    state.valueItems.splice(Number(index), 1);
    saveState();
    renderValue();
  });

  $("#resetIntakeChecklist").addEventListener("click", () => {
    state.intakeAnswers = {};
    saveState();
    renderIntakeChecklist();
  });

  $("#resetDataButton").addEventListener("click", () => {
    const shouldReset = window.confirm("Reset all toolkit data to the sample starting point?");
    if (!shouldReset) return;
    state = cloneDefaultState();
    saveState();
    rerenderApp();
    generateTimeline();
  });

  $("#timelineForm").addEventListener("submit", generateTimeline);
  $("#globalSearch").addEventListener("input", (event) => applySearch(event.target.value));
  $("#exportButton").addEventListener("click", openBriefDialog);
  $("#printReportButton").addEventListener("click", printExecutiveReport);
  $("#downloadBriefButton").addEventListener("click", downloadBrief);
  $("#exportPortfolioButton").addEventListener("click", exportPortfolioCsv);
  $("#exportRiskButton").addEventListener("click", exportRiskCsv);
  $("#exportDayOneButton").addEventListener("click", exportDayOneCsv);
  $("#closeDialog").addEventListener("click", closeBriefDialog);
  window.addEventListener("hashchange", () => switchSection(location.hash.slice(1) || "dashboard", false));
}

function init() {
  const defaultGoLive = new Date(Date.now() + 1000 * 60 * 60 * 24 * 90);
  $("#timelineForm").querySelector("[name='goLive']").value = defaultGoLive.toISOString().slice(0, 10);
  rerenderApp();
  generateTimeline();
  bindEvents();
  switchSection(location.hash.slice(1) || "dashboard", false);
}

init();

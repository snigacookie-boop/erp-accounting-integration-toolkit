const state = {
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

const sectionTitles = {
  dashboard: "Command Center",
  discovery: "Pre-Migration Discovery",
  gap: "GAP Analysis",
  timeline: "Timeline Builder",
  validation: "Data Validation",
  training: "Training Studio",
  ideas: "Innovation Log"
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

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
      <h4>${note.company} · ${note.area}</h4>
      <p><strong>Practice:</strong> ${note.practice}</p>
      <p><strong>ERP impact:</strong> ${note.impact}</p>
    </article>
  `).join("");
}

function renderGaps() {
  $("#gapTable").innerHTML = state.gaps.map((gap) => {
    const riskClass = gap[3].toLowerCase();
    return `
      <tr class="searchable">
        <td contenteditable="true">${gap[0]}</td>
        <td contenteditable="true">${gap[1]}</td>
        <td contenteditable="true">${gap[2]}</td>
        <td><span class="risk-badge ${riskClass}">${gap[3]}</span></td>
        <td contenteditable="true">${gap[4]}</td>
        <td><span class="status-badge">${gap[5]}</span></td>
      </tr>
    `;
  }).join("");
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
      <p>${item[1]} · Owner: ${item[2]}</p>
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

function renderIdeas() {
  $("#ideaList").innerHTML = state.ideas.map((idea) => `
    <article class="idea searchable">
      <span class="status-badge">${idea.impact}</span>
      <h4>${idea.idea}</h4>
      <p>${idea.notes}</p>
    </article>
  `).join("");
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

  $("#readinessScore").textContent = `${Math.round(((doneTasks / state.tasks.length) * 35) + ((doneChecks / state.validation.length) * 45) + 20)}%`;
  $("#riskCount").textContent = String(highRisks);
  $("#trainingScore").textContent = `${Math.round((trainingReady / state.training.length) * 100)}%`;
  $("#dataScore").textContent = `${Math.round((doneChecks / state.validation.length) * 100)}%`;
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
  return `ERP Integration Accounting Brief

Readiness: ${$("#readinessScore").textContent}
Open risks: ${$("#riskCount").textContent}
Training coverage: ${$("#trainingScore").textContent}
Data confidence: ${$("#dataScore").textContent}

Priority open tasks:
${openTasks || "- None"}

High-risk GAP items:
${highGaps || "- None"}

Open validation checks:
${openChecks || "- None"}

Latest process ideas:
${state.ideas.map((idea) => `- ${idea.idea} (${idea.impact})`).join("\n")}`;
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
      renderMetrics();
    }
  });

  $("#validationChecklist").addEventListener("change", (event) => {
    const index = event.target.dataset.validation;
    if (index !== undefined) {
      state.validation[index][1] = event.target.checked;
      renderMetrics();
    }
  });

  $("#intakeChecklist").addEventListener("change", (event) => {
    const key = event.target.dataset.intakeQuestion;
    if (key !== undefined) {
      state.intakeAnswers[key] = event.target.checked;
    }
  });

  $("#discoveryForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    state.notes.unshift(data);
    event.target.reset();
    renderNotes();
  });

  $("#ideaForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    state.ideas.unshift(data);
    event.target.reset();
    renderIdeas();
  });

  $("#addGapRow").addEventListener("click", () => {
    state.gaps.unshift(["New accounting area", "Legacy practice", "CED standard", "Medium", "Owner", "New"]);
    renderGaps();
    renderMetrics();
  });

  $("#addException").addEventListener("click", () => {
    state.exceptions.unshift(["New conversion exception", "Record count pending", "Unassigned"]);
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
    renderTraining();
    renderMetrics();
  });

  $("#resetIntakeChecklist").addEventListener("click", () => {
    state.intakeAnswers = {};
    renderIntakeChecklist();
  });

  $("#timelineForm").addEventListener("submit", generateTimeline);
  $("#globalSearch").addEventListener("input", (event) => applySearch(event.target.value));
  $("#exportButton").addEventListener("click", openBriefDialog);
  $("#closeDialog").addEventListener("click", closeBriefDialog);
  window.addEventListener("hashchange", () => switchSection(location.hash.slice(1) || "dashboard", false));
}

function init() {
  const defaultGoLive = new Date(Date.now() + 1000 * 60 * 60 * 24 * 90);
  $("#timelineForm").querySelector("[name='goLive']").value = defaultGoLive.toISOString().slice(0, 10);
  renderPhases();
  renderTasks();
  renderTeam();
  renderQuestions();
  renderIntakeChecklist();
  renderNotes();
  renderGaps();
  renderValidation();
  renderExceptions();
  renderTraining();
  renderIdeas();
  generateTimeline();
  renderMetrics();
  bindEvents();
  switchSection(location.hash.slice(1) || "dashboard", false);
}

init();

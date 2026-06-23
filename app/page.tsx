type EducationItem = {
  institution: string;
  location: string;
  degree: string;
  period: string;
  grade: string;
  courses: string[];
};

type DetailedItem = {
  title: string;
  meta: string;
  period: string;
  bullets: string[];
  competence?: string;
};

const navigation = [
  ["About", "about"],
  ["Education", "education"],
  ["Research", "research"],
  ["Publications", "publications"],
  ["Patents", "patents"],
  ["Projects", "projects"],
  ["Experience", "experience"],
  ["Awards", "awards"],
  ["Skills", "skills"],
  ["Contact", "contact"],
];

const education: EducationItem[] = [
  {
    institution: "Shanghai University",
    location: "Shanghai, China",
    degree: "Master of Engineering in Mechanical Engineering",
    period: "Sep 2020 — Jun 2023",
    grade: "GPA: 89.7/100 (top 10%)",
    courses: [
      "Numerical Methods",
      "Mechatronics System Engineering",
      "Machine Vision Inspection",
    ],
  },
  {
    institution: "Changsha University",
    location: "Changsha, China",
    degree:
      "Bachelor of Engineering in Mechanical Design, Manufacturing and Automation",
    period: "Sep 2015 — Jun 2019",
    grade: "GPA: 85.3/100 (top 5%)",
    courses: [
      "Advanced Mathematics",
      "Linear Algebra",
      "Principles of Machinery",
      "Mechanical Design",
    ],
  },
];

const research: DetailedItem[] = [
  {
    title:
      "Research on Integrated Optimization of Process Planning and Scheduling based on Low-carbon",
    meta: "Master's thesis · Shanghai University",
    period: "Mar 2021 — Apr 2023",
    bullets: [
      "Designed a multi-objective optimization framework integrating production scheduling and energy consumption modeling.",
      "Applied and implemented metaheuristic algorithms (WOA and NSWOA) in MATLAB.",
      "Validated optimization results using real SME production data.",
      "Achieved simultaneous reduction in energy usage and production time under operational constraints.",
      "Bridged numerical modeling with real-world machine scheduling feasibility.",
    ],
    competence:
      "Industrial optimization modeling, algorithm implementation, engineering validation",
  },
  {
    title:
      "Fault Diagnosis of Mechatronic Systems Using Deep Neural Networks",
    meta:
      "Shanghai University · Shanghai Key Laboratory of Intelligent Manufacturing and Robotics",
    period: "Mar 2021 — Apr 2022",
    bullets: [
      "Developed an Attention-GRU-MLP architecture for mechanical fault classification.",
      "Processed and analyzed 840,000+ real-time current signal samples under six operating conditions.",
      "Conducted comparative evaluation of RNN, LSTM, and GRU variants.",
      "Achieved more than 98% classification accuracy on test data.",
      "Contributed to a Springer conference publication.",
    ],
    competence:
      "Time-series signal processing, deep learning for industrial systems, model evaluation",
  },
];

const projects: DetailedItem[] = [
  {
    title: "Digital Production System Project",
    meta: "Digital manufacturing system",
    period: "Apr 2021 — Jun 2022",
    bullets: [
      "Designed a data-driven paperless production tracking system.",
      "Integrated quotation, inventory, quality, and scheduling modules.",
      "Enabled real-time production transparency and decision support.",
      "Improved operational coordination across manufacturing units.",
    ],
    competence: "System integration, digital manufacturing workflows",
  },
];

const experience: DetailedItem[] = [
  {
    title: "Software Engineer / Project Manager",
    meta: "CIB Digital Financial Service Co., Ltd.",
    period: "Jul 2023 — Present",
    bullets: [
      "Designed and maintained modular distributed system architecture for an enterprise-grade platform.",
      "Coordinated cross-functional development and deployment cycles.",
      "Managed system lifecycle and technical documentation.",
      "Strengthened large-scale system integration and reliability engineering capabilities.",
    ],
  },
  {
    title: "Mechanical R&D Engineer",
    meta: "Shanghai Genie-Robot Automatic Co., Ltd.",
    period: "Nov 2021 — Jun 2022",
    bullets: [
      "Participated in automated loading system design and commissioning.",
      "Improved equipment reliability to a failure rate below 0.3%.",
      "Conducted sensor calibration and control system testing.",
    ],
  },
];

const awards = [
  {
    name: "Three-time Scholarship Recipient",
    detail:
      "Shanghai University — First, Second, and Third Class Awards",
    period: "2020 — 2023",
  },
  {
    name: "Outstanding Student Award",
    detail: "Shanghai University",
    period: "2023",
  },
  {
    name: "Outstanding Graduate",
    detail: "Hunan Province",
    period: "2019",
  },
  {
    name: "National Encouragement Scholarship",
    detail: "Changsha University",
    period: "2017",
  },
  {
    name: "Multiple Excellence Awards",
    detail:
      "Academic, Volunteer, and Youth Honors at Changsha University",
    period: "2016 — 2018",
  },
];

function SectionHeading({
  id,
  eyebrow,
  title,
}: {
  id: string;
  eyebrow: string;
  title: string;
}) {
  return (
    <div id={id} className="section-anchor mb-8 border-t border-[var(--line)] pt-5">
      <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--accent)]">
        {eyebrow}
      </p>
      <h2 className="serif text-balance text-3xl font-normal tracking-[-0.02em] text-[var(--ink)] sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

function DetailedEntry({ item }: { item: DetailedItem }) {
  return (
    <article className="grid gap-4 border-b border-[var(--line)] pb-8 last:border-b-0 last:pb-0 md:grid-cols-[1fr_10rem] md:gap-10">
      <div>
        <h3 className="serif text-xl leading-snug text-[var(--ink)] sm:text-2xl">
          {item.title}
        </h3>
        <p className="mt-1 text-sm font-medium text-[var(--accent)]">
          {item.meta}
        </p>
        <ul className="mt-5 space-y-2.5 text-[0.95rem] leading-7 text-[var(--muted)]">
          {item.bullets.map((bullet) => (
            <li key={bullet} className="grid grid-cols-[0.7rem_1fr] gap-2">
              <span aria-hidden="true" className="mt-[0.62rem] h-1 w-1 rounded-full bg-[#8a9aab]" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
        {item.competence ? (
          <p className="mt-5 text-sm leading-6 text-[var(--muted)]">
            <span className="font-semibold text-[var(--ink)]">
              Core competence:
            </span>{" "}
            {item.competence}
          </p>
        ) : null}
      </div>
      <p className="order-first text-sm font-medium tabular-nums text-[var(--muted)] md:order-none md:text-right">
        {item.period}
      </p>
    </article>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-[var(--line)] bg-white">
        <div className="mx-auto max-w-[1120px] px-5 pb-14 pt-7 sm:px-8 sm:pb-20 lg:px-12">
          <nav
            aria-label="Primary navigation"
            className="flex items-center justify-between gap-6"
          >
            <a
              href="#top"
              className="serif text-lg tracking-[-0.01em] text-[var(--ink)]"
            >
              Xianhua Cai
            </a>
            <div className="hidden items-center gap-5 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--muted)] lg:flex">
              {navigation.slice(0, 6).map(([label, id]) => (
                <a key={id} href={`#${id}`} className="hover:text-[var(--accent)]">
                  {label}
                </a>
              ))}
            </div>
            <a
              href="mailto:cccccxhua@163.com"
              className="text-sm font-semibold text-[var(--accent)] underline decoration-[#9db2c9] underline-offset-4 hover:decoration-[var(--accent)]"
            >
              Email
            </a>
          </nav>

          <div id="top" className="grid gap-10 pt-16 lg:grid-cols-[1fr_17rem] lg:gap-16 lg:pt-24">
            <div>
              <p className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-[var(--accent)]">
                Academic homepage
              </p>
              <h1 className="serif text-balance text-5xl font-normal leading-[1.03] tracking-[-0.035em] text-[var(--ink)] sm:text-6xl lg:text-7xl">
                Xianhua Cai
              </h1>
              <p className="mt-7 max-w-3xl text-balance text-xl leading-8 text-[var(--muted)] sm:text-2xl sm:leading-9">
                Engineer specializing in data-driven optimization and
                intelligent diagnosis for complex engineering systems.
              </p>
            </div>

            <aside className="border-l-2 border-[var(--accent)] pl-5 lg:self-end">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--muted)]">
                Research interests
              </p>
              <ul className="mt-4 space-y-3 text-[0.95rem] leading-6 text-[var(--ink)]">
                <li>Industrial AI and predictive maintenance</li>
                <li>Data-driven optimization for engineering systems</li>
              </ul>
            </aside>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1120px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="grid gap-16 lg:grid-cols-[13rem_1fr] lg:gap-20">
          <aside className="hidden lg:block">
            <div className="sticky top-10">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-[var(--muted)]">
                On this page
              </p>
              <nav aria-label="Section navigation">
                <ul className="space-y-2 text-sm">
                  {navigation.map(([label, id]) => (
                    <li key={id}>
                      <a
                        className="block border-l border-[var(--line)] py-1 pl-4 text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
                        href={`#${id}`}
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>

          <div className="min-w-0 space-y-20 sm:space-y-24">
            <section aria-labelledby="about">
              <SectionHeading id="about" eyebrow="Profile" title="About" />
              <div className="max-w-3xl space-y-5 text-[1.03rem] leading-8 text-[var(--muted)]">
                <p>
                  Xianhua Cai is an engineer specializing in data-driven
                  optimization and intelligent diagnosis for complex
                  engineering systems. His experience includes applying
                  multi-objective optimization algorithms and deep learning
                  models to large-scale industrial datasets.
                </p>
                <p>
                  His background spans manufacturing systems, signal-based
                  fault detection, and system-level implementation, with
                  interests in predictive maintenance, industrial AI, and
                  engineering process optimization.
                </p>
              </div>
            </section>

            <section aria-labelledby="education">
              <SectionHeading
                id="education"
                eyebrow="Academic training"
                title="Education"
              />
              <div className="space-y-9">
                {education.map((item) => (
                  <article
                    key={item.institution}
                    className="grid gap-3 border-b border-[var(--line)] pb-9 last:border-b-0 last:pb-0 md:grid-cols-[1fr_10rem] md:gap-10"
                  >
                    <div>
                      <h3 className="serif text-2xl text-[var(--ink)]">
                        {item.institution}
                      </h3>
                      <p className="mt-1 text-sm text-[var(--muted)]">
                        {item.location}
                      </p>
                      <p className="mt-4 font-semibold leading-7 text-[var(--ink)]">
                        {item.degree}
                      </p>
                      <p className="mt-2 text-sm text-[var(--muted)]">
                        {item.grade}
                      </p>
                      <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
                        <span className="font-semibold text-[var(--ink)]">
                          Relevant courses:
                        </span>{" "}
                        {item.courses.join(", ")}
                      </p>
                    </div>
                    <p className="order-first text-sm font-medium tabular-nums text-[var(--muted)] md:order-none md:text-right">
                      {item.period}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section aria-labelledby="research">
              <SectionHeading
                id="research"
                eyebrow="Selected work"
                title="Research Experience"
              />
              <div className="space-y-9">
                {research.map((item) => (
                  <DetailedEntry key={item.title} item={item} />
                ))}
              </div>
            </section>

            <section aria-labelledby="publications">
              <SectionHeading
                id="publications"
                eyebrow="Research output"
                title="Publications"
              />
              <article className="grid gap-4 sm:grid-cols-[2rem_1fr]">
                <span className="serif text-lg text-[var(--muted)]">01</span>
                <div>
                  <p className="leading-8 text-[var(--muted)]">
                    Lu, L., <strong className="font-semibold text-[var(--ink)]">Cai, X.</strong>,
                    Li, G., &amp; Mitrouchev, P. (2022).{" "}
                    <span className="font-medium text-[var(--ink)]">
                      Fault Diagnosis of Massage Chair Movement Based on
                      Attention-GRU-MLP.
                    </span>{" "}
                    In <em>Advanced Manufacturing and Automation XI</em>,
                    Lecture Notes in Electrical Engineering, vol. 880.
                    Springer, Singapore.
                  </p>
                  <a
                    className="academic-link mt-3 inline-block text-sm font-semibold text-[var(--accent)] underline"
                    href="https://doi.org/10.1007/978-981-19-0572-8_8"
                    target="_blank"
                    rel="noreferrer"
                  >
                    DOI: 10.1007/978-981-19-0572-8_8
                  </a>
                </div>
              </article>
            </section>

            <section aria-labelledby="patents">
              <SectionHeading
                id="patents"
                eyebrow="Intellectual property"
                title="Patents"
              />
              <article className="grid gap-4 sm:grid-cols-[2rem_1fr]">
                <span className="serif text-lg text-[var(--muted)]">01</span>
                <div>
                  <h3 className="serif text-xl leading-8 text-[var(--ink)]">
                    High-speed electroplating line material strip conveying
                    device
                  </h3>
                  <p className="mt-2 leading-7 text-[var(--muted)]">
                    Wu, Q., <strong className="font-semibold text-[var(--ink)]">Cai, X.</strong>,
                    &amp; Lu, L.
                  </p>
                  <p className="mt-2 text-sm font-medium text-[var(--muted)]">
                    CN202111559534.4 · 21 Oct 2024
                  </p>
                </div>
              </article>
            </section>

            <section aria-labelledby="projects">
              <SectionHeading
                id="projects"
                eyebrow="Applied systems"
                title="Projects"
              />
              <div className="space-y-9">
                {projects.map((item) => (
                  <DetailedEntry key={item.title} item={item} />
                ))}
              </div>
            </section>

            <section aria-labelledby="experience">
              <SectionHeading
                id="experience"
                eyebrow="Professional practice"
                title="Work Experience"
              />
              <div className="space-y-9">
                {experience.map((item) => (
                  <DetailedEntry key={item.title} item={item} />
                ))}
              </div>
            </section>

            <section aria-labelledby="awards">
              <SectionHeading
                id="awards"
                eyebrow="Recognition"
                title="Awards & Honors"
              />
              <div>
                {awards.map((award) => (
                  <article
                    key={award.name}
                    className="grid gap-2 border-b border-[var(--line)] py-5 first:pt-0 last:border-b-0 last:pb-0 md:grid-cols-[1fr_8rem] md:gap-8"
                  >
                    <div>
                      <h3 className="font-semibold text-[var(--ink)]">
                        {award.name}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
                        {award.detail}
                      </p>
                    </div>
                    <p className="order-first text-sm font-medium tabular-nums text-[var(--muted)] md:order-none md:text-right">
                      {award.period}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section aria-labelledby="skills">
              <SectionHeading
                id="skills"
                eyebrow="Technical background"
                title="Skills"
              />
              <dl className="grid gap-x-12 gap-y-8 sm:grid-cols-2">
                <div>
                  <dt className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--accent)]">
                    Programming
                  </dt>
                  <dd className="mt-3 leading-7 text-[var(--muted)]">
                    MATLAB, Java, VB, Python, SQL, C
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--accent)]">
                    Engineering tools
                  </dt>
                  <dd className="mt-3 leading-7 text-[var(--muted)]">
                    SolidWorks, CAD
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--accent)]">
                    Languages
                  </dt>
                  <dd className="mt-3 leading-7 text-[var(--muted)]">
                    English; Mandarin Chinese (Native)
                  </dd>
                </div>
              </dl>
            </section>

            <section aria-labelledby="contact">
              <SectionHeading
                id="contact"
                eyebrow="Correspondence"
                title="Contact"
              />
              <div className="grid gap-6 bg-[var(--wash)] p-6 sm:grid-cols-2 sm:p-8">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--muted)]">
                    Email
                  </p>
                  <a
                    className="academic-link mt-2 inline-block break-all text-lg text-[var(--accent)] underline"
                    href="mailto:cccccxhua@163.com"
                  >
                    cccccxhua@163.com
                  </a>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--muted)]">
                    Location
                  </p>
                  <p className="mt-2 text-lg text-[var(--ink)]">
                    Shanghai, China
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <footer className="border-t border-[var(--line)]">
        <div className="mx-auto flex max-w-[1120px] flex-col gap-3 px-5 py-8 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <p>© {new Date().getFullYear()} Xianhua Cai</p>
          <a
            href="#top"
            className="font-semibold text-[var(--accent)] hover:underline"
          >
            Back to top
          </a>
        </div>
      </footer>
    </div>
  );
}


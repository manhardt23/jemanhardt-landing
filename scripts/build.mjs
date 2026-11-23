import { cp, mkdir, readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const html = (await readFile(join(root, "index.html"), "utf8")).replace(
  /\s+/g,
  " ",
);

const required = [
  "IT support and networking, with a software developer's toolkit.",
  "jacob@jemanhardt.dev",
  "https://github.com/manhardt23",
  "https://github.com/manhardt23/Email-Application-Tracker-API",
  "https://github.com/manhardt23/Ticket-to-Ride-Route-Optimizer",
  "Quakertown, PA",
  "Syracuse, NY",
  "Bachelor of Science, Computer Science",
  "May 2026",
  "GPA 3.15",
  "Data Networks: Basic Principles",
  "Systems &amp; Network Programming",
  "Database Management Systems",
  "Artificial Intelligence",
  "CompTIA Network+",
  "In progress, expected November 2026",
  "Help desk",
  "junior sysadmin",
  "junior network engineer",
  "contract and temp",
  "remote",
  "Microsoft 365",
  "Prometheus",
  "Grafana",
  "node_exporter",
  "Pi-hole",
  "Tailscale",
  "WireGuard",
  "181 tests",
  "81% coverage",
  "Alembic",
  "OSPF",
  "about 30 million",
  "under 100 ms",
  "Jersey Mike's",
  "July 2020",
  "team of 6",
  "100% order accuracy",
  "4+ new hires",
  "opening and closing",
  "family and friends",
  "I automate the repetitive stuff.",
];

const forbidden = [
  [/linkedin/i, "LinkedIn"],
  [/CompTIA\s+A\+/i, "CompTIA A+"],
  [/Security\+/i, "Security+"],
  [/\bCCNA\b/, "CCNA"],
  [/software engineer/i, "software engineer"],
  [/\bSWE\b/, "SWE"],
  [/fastapi/i, "FastAPI"],
  [/\bcertified\b/i, "certified"],
  [/\bTODO\b/, "TODO"],
  [/267-772-7567/, "phone number"],
];

const missing = required.filter((phrase) => !html.includes(phrase));
const present = forbidden.filter(([pattern]) => pattern.test(html));

if (missing.length || present.length) {
  if (missing.length) {
    console.error("Missing required copy:");
    for (const phrase of missing) console.error(`  - ${phrase}`);
  }
  if (present.length) {
    console.error("Forbidden copy present:");
    for (const [, label] of present) console.error(`  - ${label}`);
  }
  process.exit(1);
}

const dist = join(root, "dist");
await mkdir(dist, { recursive: true });
for (const file of ["index.html", "styles.css", "favicon.svg"]) {
  await cp(join(root, file), join(dist, file));
}

console.log("Copy check passed. Wrote dist/.");

import ChronosSplash from "./components/ChronosSplash";
import TerminalProfile from "./components/TerminalProfile";
import SurveillanceLogo from "./components/SurveillanceLogo";
import { Rnd } from "react-rnd";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import JourneyLog from "./components/JourneyLog";
import MatrixRain from "./components/MatrixRain";
import CustomCursor from "./components/CustomCursor";
import TerminalArcade from "./components/TerminalArcade";
import Hologram from "./components/Hologram";
import Engage2P from "./components/Engage2p";
import AiProxy from "./components/AiProxy";
import useSound from "use-sound";
import bootLogo1 from "./assets/bootLogo1.png";

const resumeTexCode = `\\documentclass[letterpaper,11pt]{article}

\\usepackage{latexsym}
\\usepackage[empty]{fullpage}
\\usepackage{titlesec}
\\usepackage{marvosym}
\\usepackage[usenames,dvipsnames]{color}
\\usepackage{verbatim}
\\usepackage{enumitem}
\\usepackage[hidelinks]{hyperref}
\\usepackage{fancyhdr}
\\usepackage[english]{babel}
\\usepackage{tabularx}
\\input{glyphtounicode}

%----------FONT OPTIONS----------
% sans-serif
% \\usepackage[sfdefault]{FiraSans}
% \\usepackage[sfdefault]{roboto}
% \\usepackage[sfdefault]{noto-sans}
% \\usepackage[default]{sourcesanspro}

\\pagestyle{fancy}
\\fancyhf{} % clear all header and footer fields
\\fancyfoot{}
\\renewcommand{\\headrulewidth}{0pt}
\\renewcommand{\\footrulewidth}{0pt}

% Adjust margins
\\addtolength{\\oddsidemargin}{-0.5in}
\\addtolength{\\evensidemargin}{-0.5in}
\\addtolength{\\textwidth}{1in}
\\addtolength{\\topmargin}{-.5in}
\\addtolength{\\textheight}{1.0in}

\\urlstyle{same}

\\raggedbottom
\\raggedright
\\setlength{\\tabcolsep}{0in}

% Sections formatting
\\titleformat{\\section}{
  \\vspace{-4pt}\\scshape\\raggedright\\large
}{}{0em}{}[\\color{black}\\titlerule \\vspace{-5pt}]

% Ensure that generate pdf is machine readable/ATS parsable
\\pdfgentounicode=1

%-------------------------
% Custom commands
\\newcommand{\\resumeItem}[1]{
  \\item\\small{
    {#1 \\vspace{-2pt}}
  }
}

\\newcommand{\\resumeSubheading}[4]{
  \\vspace{-2pt}\\item
    \\begin{tabular*}{0.97\\textwidth}[t]{l@{\\extracolsep{\\fill}}r}
      \\textbf{#1} & #2 \\\\
      \\textit{\\small#3} & \\textit{\\small #4} \\\\
    \\end{tabular*}\\vspace{-7pt}
}

\\newcommand{\\resumeSubSubheading}[2]{
    \\item
    \\begin{tabular*}{0.97\\textwidth}{l@{\\extracolsep{\\fill}}r}
      \\textit{\\small#1} & \\textit{\\small #2} \\\\
    \\end{tabular*}\\vspace{-7pt}
}

\\newcommand{\\resumeProjectHeading}[2]{
    \\item
    \\begin{tabular*}{0.97\\textwidth}{l@{\\extracolsep{\\fill}}r}
      \\small#1 & #2 \\\\
    \\end{tabular*}\\vspace{-7pt}
}

\\newcommand{\\resumeSubItem}[1]{\\resumeItem{#1}\\vspace{-4pt}}

\\renewcommand\\labelitemii{$\\vcenter{\\hbox{\\tiny$\\bullet$}}$}

\\newcommand{\\resumeSubHeadingListStart}{\\begin{itemize}[leftmargin=0.15in, label={}]}
\\newcommand{\\resumeSubHeadingListEnd}{\\end{itemize}}
\\newcommand{\\resumeItemListStart}{\\begin{itemize}}
\\newcommand{\\resumeItemListEnd}{\\end{itemize}\\vspace{-5pt}}

%-------------------------------------------
%%%%%%  RESUME STARTS HERE  %%%%%%%%%%%%%%%%%%%%%%%%%%%%

\\begin{document}

%----------HEADING----------
\\begin{center}
    \\textbf{\\Huge \\scshape Vadanta Kumar Chauhaan} \\\\ \\vspace{1pt}
    \\small +91-9711297960 $|$ \\href{mailto:vadanta592007@hotmail.com}{\\underline{vadanta592007@hotmail.com}} $|$ 
    \\href{https://linkedin.com/in/vadanta}{\\underline{linkedin.com/in/vadanta}} $|$
    \\href{https://github.com/VedisVigourous}{\\underline{github.com/VedisVigourous}}
\\end{center}

%-----------EDUCATION-----------
\\section{Education}
  \\resumeSubHeadingListStart
    \\resumeSubheading
      {ABES Engineering College}{Ghaziabad, India}
      {Bachelor of Technology in Computer Science \\& Engineering}{Nov. 2025 -- Present}
      \\resumeItemListStart
        \\resumeItem{\\textbf{Performance}: 9.13/10.00 (Ist Year)}
        \\resumeItem{Current Focus: Data Structures \\& Algorithms (Java), Object-Oriented Programming.}
        \\resumeItem{Key Coursework: C++, Java Programming, Web Development Fundamentals.}
      \\resumeItemListEnd
  \\resumeSubHeadingListEnd

%-----------TECHNICAL SKILLS-----------
\\section{Technical Skills}
 \\begin{itemize}[leftmargin=0.15in, label={}]
    \\small{\\item{
     \\textbf{Languages}{: Java (Intermediate), JavaScript, C++, HTML/CSS} \\\\
     \\textbf{Cloud \\& AI}{: Google Gemini API, Generative AI, Vertex AI, Google Cloud Platform (GCP)} \\\\
     \\textbf{Developer Tools}{: Git, GitHub Actions, Chrome Extension API, VS Code, IntelliJ IDEA} \\\\
     \\textbf{Core Concepts}{: Data Structures \\& Algorithms (DSA), DOM Manipulation, Object Oriented Programming}
    }}
 \\end{itemize}

%-----------CERTIFICATIONS-----------
\\section{Certifications \\& Awards}
 \\begin{itemize}[leftmargin=0.15in, label={}]
    \\small{\\item{
     \\textbf{\\href{https://catalog-education.oracle.com/ords/certview/sharebadge?id=2EC9B50AAE0E57C91B9A0D7C3E27276E32A1D2760D8FB299F208125ADC931D38}{\\underline{{Oracle AI Certified Foundations Associate}}}}{: Validated proficiency in AI/ML fundamentals.} \\\\[4pt]
     \\textbf{\\href{https://www.skills.google/public_profiles/7c538f5b-2024-4d94-a220-233117c019b1}{\\underline{{Google Cloud Skills Boost (Public Profile)}}}}{: Earned Level 3 GenAI Badge \\& 10+ Skill Badges.} \\\\[4pt]
     \\textbf{Develop GenAI Apps with Gemini}{: Certified by Google Cloud for building LLM-powered applications.} \\\\[4pt]
     \\textbf{Prompt Design in Vertex AI}{: Mastered prompt engineering techniques for large language models.}
    }}
 \\end{itemize}

%-----------EXPERIENCE \\& VIRTUAL PROGRAMS-----------
\\section{Experience \\& Virtual Programs}
  \\resumeSubHeadingListStart
    \\resumeSubheading
      {Deloitte}{Remote}
      {\\underline{\\href{https://drive.google.com/file/d/1jkFJsC4KCXWQ9cGysLDuxky9i-xQfBZe/view?usp=sharing}{Technology Job Simulation Participant}}}{July 2026}
      \\resumeItemListStart
        \\resumeItem{Engineered backend data normalization (ETL) logic in Python to convert unstructured JSON telemetry data into a unified database format, successfully passing automated unit tests.}
        \\resumeItem{Drafted a comprehensive 120-hour software development proposal for a secure, geofenced intranet dashboard monitoring 36 industrial devices across multiple factories.}
      \\resumeItemListEnd
  \\resumeSubHeadingListEnd

%-----------PROJECTS-----------
\\section{Projects}
    \\resumeSubHeadingListStart
      \\resumeProjectHeading
          {\\textbf{Project Resonance (Accessibility Tool)} $|$ \\emph{JavaScript, Gemini 1.5 API, Chrome APIs}}{Apr. 2026}
          \\resumeItemListStart
            \\resumeItem{Developed an AI-powered Chrome Extension to bridge the digital culture gap for visually impaired users by dynamically reading aloud the context, vibe, and humor of internet memes.}
            \\resumeItem{Engineered the core architecture using DOM manipulation and background service workers to intercept web elements and securely route data to the Google Gemini 1.5 Flash API.}
            \\resumeItem{Competed at the MLH HackDays offline hackathon, successfully pitching the live product and securing a Top 33 placement out of 120+ participating teams.}
          \\resumeItemListEnd
      \\resumeProjectHeading
          {\\textbf{\\href{https://vedisvigourous.github.io}{\\underline{Behance Homepage Clone}}} $|$ \\emph{HTML5, CSS3, Flexbox/Grid}}{Feb. 2026}
          \\resumeItemListStart
            \\resumeItem{Engineered a pixel-perfect replica of the Behance homepage using semantic HTML5 and advanced CSS.}
            \\resumeItem{Implemented complex UI layouts using Flexbox and CSS Grid to ensure responsiveness and visual fidelity.}
            \\resumeItem{Optimized frontend structure for maintainability, demonstrating strong grasp of Web Development fundamentals.}
          \\resumeItemListEnd
      \\resumeProjectHeading
          {\\textbf{Java OOPs Game Suite} $|$ \\emph{Java, Object-Oriented Programming}}{Jan. 2026}
          \\resumeItemListStart
            \\resumeItem{Developed a modular suite of console-based games (Number Guessing, Rock-Paper-Scissors) using pure Java.}
            \\resumeItem{Implemented core OOP principles including Inheritance and Encapsulation to manage game logic.}
            \\resumeItem{Refined algorithmic logic for random number generation and user input validation.}
          \\resumeItemListEnd
    \\resumeSubHeadingListEnd

%-----------EXTRACURRICULAR-----------
\\section{Extracurricular \\& Hackathons}
 \\begin{itemize}[leftmargin=0.15in, label={}]
    \\small{\\item{
     \\textbf{HackDays Offline Hackathon (MLH)}{: Reached Round 2 (Top 33 out of 120+ teams) at Galgotias College by building a live accessibility product. One of only two first-year teams to clear initial evaluations.} \\\\
     \\textbf{Major League Hacking (MLH)}{: Participant in Global Hack Week; collaborated on open-source challenges.} \\\\
     \\textbf{Competitive Coding}{: Achieved \\textbf{3-Star (Java)} \\& \\textbf{2-Star (Problem Solving)} on \\href{https://www.hackerrank.com/profile/codegrounds666}{\\underline{HackerRank}}.} \\\\
     \\textbf{Coding Platforms}{: Active participant in CodeChef's "Clash of Coder" and HackerRank's "CodeWizard".}
    }}
 \\end{itemize}

%-------------------------------------------
\\end{document}`;

function App() {
  const [isGraphLoading, setIsGraphLoading] = useState(true);
  const [graphData, setGraphData] = useState([]);

  useEffect(() => {
    const fetchGraphData = async () => {
      setIsGraphLoading(true);
      try {
        // Replace this with your actual GitHub stats or graph API endpoint
        const response = await fetch(
          "https://api.github.com/users/yourusername/events",
        );
        const data = await response.json();
        setGraphData(data);
      } catch (error) {
        console.error("Failed to fetch graph data:", error);
      } finally {
        // Whether it succeeds or fails, turn off the loading skeleton
        setIsGraphLoading(false);
      }
    };

    fetchGraphData();
  }, []);

  // --- AI Assistant Proxy States ---
  const [isAiProxyOpen, setIsAiProxyOpen] = useState(false);
  const [aiProxyConfig, setAiProxyConfig] = useState({
    x: window.innerWidth > 768 ? 300 : 20,
    y: 100,
    width: 600,
    height: 500,
  });

  // --- AUDIO ENGINE ---
  const [playBgm, { pause: pauseBgm }] = useSound("/sounds/bgm-ambient.mp3", {
    volume: 0.25,
    loop: true,
  });
  const [playSwoosh] = useSound("/sounds/air-swoosh.mp3", { volume: 0.75 });
  const [playAppOpen] = useSound("/sounds/app-open.mp3", { volume: 0.65 });
  const [playScanner, { stop: stopScanner }] = useSound("/sounds/scanner.mp3", {
    volume: 0.4,
  });
  const [playKeystroke] = useSound("/sounds/mech-keystroke.mp3", {
    volume: 0.55,
    interrupt: false,
  });

  const [hasAudioStarted, setHasAudioStarted] = useState(false);
  const [isMusicMuted, setIsMusicMuted] = useState(false);

  const swooshCooldown = useRef(false);

  const [audioToast, setAudioToast] = useState({ show: false, muted: false });
const [isMobileDevice, setIsMobileDevice] = useState(window.innerWidth < 768);

useEffect(() => {
  const handleResize = () => setIsMobileDevice(window.innerWidth < 768);
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

const toggleMusic = () => {
  if (isMusicMuted) {
    playBgm();
    setIsMusicMuted(false);
    setAudioToast({ show: true, muted: false });
  } else {
    pauseBgm();
    setIsMusicMuted(true);
    setAudioToast({ show: true, muted: true });
  }
  setTimeout(() => setAudioToast(prev => ({ ...prev, show: false })), 2500);
};

  // Starts BGM on first click anywhere on the page
  const handleFirstInteraction = () => {
    if (!hasAudioStarted) {
      playBgm();
      setHasAudioStarted(true);
    }
  };

  // --- TOUCH RIPPLE SYSTEM ---
  const [ripples, setRipples] = useState([]);

  const handleGlobalClick = (e) => {
    handleFirstInteraction(); // Keep the audio trigger working

    // Generate a new ripple at the exact click coordinates
    const newRipple = {
      id: Date.now(),
      x: e.clientX,
      y: e.clientY,
    };
    setRipples((prev) => [...prev, newRipple]);

    // Delete the ripple from memory after the animation finishes (500ms)
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 500);
  };

  // --- VISITOR TRACKING SYSTEM ---
  const [visitorCount, setVisitorCount] = useState(0);
  const [visitorLogs, setVisitorLogs] = useState([]);
  const hasCounted = useRef(false);

  useEffect(() => {
    // React StrictMode shield: prevents double-counting on dev reloads
    if (hasCounted.current) return;
    hasCounted.current = true;

    // 1. Fetch previous count, add 1 for this exact load
    const currentVisits =
      parseInt(localStorage.getItem("vadanta_os_visits") || "0") + 1;

    // 2. Save the new count back to memory
    localStorage.setItem("vadanta_os_visits", currentVisits.toString());

    // 3. Set the UI state
    setVisitorCount(currentVisits);

    // 4. Generate the terminal logs
    const generateIP = () =>
      `${Math.floor(Math.random() * 200) + 10}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 100)}.XXX`;

    setVisitorLogs([
      {
        id: currentVisits,
        ip: "NODE_LOCAL",
        msg: `Hey 👋🏻 visitor #${currentVisits}`,
        isCurrent: true,
      },
      {
        id: Math.max(0, currentVisits - 1),
        ip: generateIP(),
        msg: "Session terminated. Connection closed.",
        isCurrent: false,
      },
      {
        id: Math.max(0, currentVisits - 2),
        ip: generateIP(),
        msg: "Payload downloaded: RESUME.tex",
        isCurrent: false,
      },
      {
        id: Math.max(0, currentVisits - 3),
        ip: generateIP(),
        msg: "Ping successful. Data routed.",
        isCurrent: false,
      },
      {
        id: Math.max(0, currentVisits - 4),
        ip: generateIP(),
        msg: "Unauthorized access attempt blocked.",
        isCurrent: false,
      },
    ]);
  }, []);

  const [isHologramActive, setIsHologramActive] = useState(false);

  // --- JOURNEY LOG STATES ---
  const [isJourneyWindowOpen, setIsJourneyWindowOpen] = useState(false);
  const [journeyConfig, setJourneyConfig] = useState({
    x: window.innerWidth > 768 ? 100 : 10,
    y: window.innerHeight > 768 ? 80 : 20,
    width: 800,
    height: 550,
  });

  // --- OS THEME CONFIGURATOR ---
  const [isJokerTrapActive, setIsJokerTrapActive] = useState(false);
  const [isBlindingLightMode, setIsBlindingLightMode] = useState(false); // The Flashbang

  // EMAIL APPLLICATION
  const [isCommsWindowOpen, setIsCommsWindowOpen] = useState(false);
  const [guiPingData, setGuiPingData] = useState({ email: "", message: "" });
  const [guiPingStatus, setGuiPingStatus] = useState("IDLE");
  const [commsView, setCommsView] = useState("PING");
  const [feedbackType, setFeedbackType] = useState("BUG");

  // --- TERMINAL CONTACT & SECRETS STATES ---
  const [terminalMode, setTerminalMode] = useState("NORMAL"); // 'NORMAL', 'PING_EMAIL', 'PING_MSG'
  const [pingData, setPingData] = useState({ email: "", message: "" });
  const [isArcadeActive, setIsArcadeActive] = useState(false);
  const [isArcadeMounting, setIsArcadeMounting] = useState(false);
  const [matrixActive, setMatrixActive] = useState(false);
  const [matrixTerminating, setMatrixTerminating] = useState(false);

  // --- OS THEME CONFIGURATOR ---
  const [isThemeModalOpen, setIsThemeModalOpen] = useState(false);
  const [themeHue, setThemeHue] = useState(0); // 0 = Default Cyber Green

  // --- GITHUB DRIVE ---
  const [isGitHubMounted, setIsGitHubMounted] = useState(false);
  const [githubData, setGithubData] = useState(null);
  const [mountText, setMountText] = useState("");

  const handleMountGitHub = async () => {
    setIsGitHubMounted(true);
    setGithubData(null);
    setMountText("Mounting External Drive: GITHUB...");

    setTimeout(() => setMountText("Bypassing OAuth constraints... [OK]"), 1200);
    setTimeout(
      () => setMountText("Decrypting Public Repositories... [OK]"),
      2400,
    );
    setTimeout(() => setMountText("Establishing Secure Uplink..."), 3600);

    try {
      const response = await fetch(
        "https://api.github.com/users/vedisvigourous",
      );
      if (!response.ok) {
        throw new Error(`API Rate Limit Exceeded (${response.status})`);
      }
      const data = await response.json();

      setTimeout(() => {
        setGithubData(data);
      }, 5200);
    } catch (error) {
      console.error("GitHub mount failed:", error);
      setTimeout(() => {
        setMountText(
          "ERR: API CONNECTION REJECTED (RATE LIMIT). Try again later.",
        );
      }, 5200);
    }
  };

  // --- TOP RIBBON & DOSSIER STATES ---
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileSubMenu, setMobileSubMenu] = useState(null);
  const [isCoreIdentityOpen, setIsCoreIdentityOpen] = useState(false);
  const [isTracing, setIsTracing] = useState(false);
  const [traceText, setTraceText] = useState("");
  const [isRainingEmojis, setIsRainingEmojis] = useState(false);

  const triggerTraceRoute = () => {
    setIsTracing(true);
    setTraceText("Initiating secure handshake...\n");

    setTimeout(
      () =>
        setTraceText((prev) => prev + "Bypassing subnet firewalls... [OK]\n"),
      1200,
    );
    setTimeout(
      () =>
        setTraceText(
          (prev) => prev + "Acquiring target IPv4/IPv6 addresses... [OK]\n",
        ),
      2400,
    );
    setTimeout(
      () =>
        setTraceText(
          (prev) => prev + "Hijacking local device camera stream...\n",
        ),
      3600,
    );
    setTimeout(
      () =>
        setTraceText(
          (prev) => prev + "Downloading unencrypted browser history... 100%\n",
        ),
      4800,
    );
    setTimeout(
      () =>
        setTraceText(
          (prev) =>
            prev + "\n[!] TARGET_ACQUIRED: VISITOR_SESSION_EXPOSED [!]\n",
        ),
      6200,
    );

    // The Joke & Smooth Rain Trigger
    setTimeout(() => {
      setTraceText(
        (prev) =>
          prev +
          "\n...Just kidding! Enjoy the portfolio! 😂\n\n" +
          "   (•_•) \n" +
          "   <)  )╯\n" +
          "    /  \\ \n",
      );
      setIsRainingEmojis(true);
    }, 7800);

    setTimeout(() => {
      setIsTracing(false);
      setIsRainingEmojis(false);
    }, 12500);
  };

  const handleExportLogs = () => {
    try {
      // 1. Safely grab your exact terminal state
      const safeHistory =
        typeof terminalHistory !== "undefined" && Array.isArray(terminalHistory)
          ? terminalHistory
          : [];

      // 2. Map through it safely
      const dynamicHistory = safeHistory
        .map((entry) => {
          if (entry && entry.type === "input") {
            return `root@vadanta:~$ ${entry.text}`;
          } else if (entry && entry.text) {
            return `  > ${entry.text}`;
          }
          return `  > ${entry}`;
        })
        .join("\n");

      // 3. Build the final text file content
      const logContent = `
==================================================
 VADANTA_OS // SECURE_SESSION_LOG
==================================================
 [TIMESTAMP] : ${new Date().toLocaleString()}
 [TARGET]    : Vadanta Kumar Chauhaan
 [ROLE]      : Frontend Architect & AI Engineer
 
==================================================
 --- LIVE TERMINAL SESSION HISTORY ---
==================================================

${dynamicHistory || "  > No terminal commands executed during this session."}
 
==================================================
 END OF LOG.
==================================================`;

      // 4. Generate and download the Blob
      const blob = new Blob([logContent], { type: "text/plain" });
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = `VADANTA_SESSION_${new Date().getTime()}.txt`;
      document.body.appendChild(a);
      a.click();

      // 5. Cleanup
      setTimeout(() => {
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }, 100);
    } catch (error) {
      console.error("BRO, EXPORT FAILED! Check this error:", error);
    }
  };

  // --- DECRYPTION INSPECTOR STATES ---
  const [activeCert, setActiveCert] = useState(null);
  const [isDecrypting, setIsDecrypting] = useState(false);

  const [isCertsWindowOpen, setIsCertsWindowOpen] = useState(false);
  const [certsConfig, setCertsConfig] = useState({
    x: 200,
    y: 150,
    width: 550,
    height: 450,
  });

  // --- MAIL.CONN WINDOW MEMORY (react-rnd state) ---
  const [commsConfig, setCommsConfig] = useState({
    x: window.innerWidth > 768 ? window.innerWidth / 2 - 225 : 20,
    y: window.innerHeight > 768 ? window.innerHeight / 2 - 200 : 40,
    width: 450,
    height: 400,
  });

  // --- WINDOW MEMORY (react-rnd state) ---
  const [identityConfig, setIdentityConfig] = useState({
    x: 140,
    y: 30,
    width: 325,
    height: 390,
  });

  const [projectsConfig, setProjectsConfig] = useState({
    x: 150,
    y: 120,
    width: 500,
    height: 450,
  });

  const [isCampusWindowOpen, setIsCampusWindowOpen] = useState(false);
  const [campusConfig, setCampusConfig] = useState({
    x: 220,
    y: 100,
    width: 650,
    height: 400,
  });

  // --- ENGAGE.2P States ----
  const [isEngageWindowOpen, setIsEngageWindowOpen] = useState(false);
  const [isEngageMaximized, setIsEngageMaximized] = useState(false);
  const [engageConfig, setEngageConfig] = useState({
    x: window.innerWidth > 900 ? window.innerWidth / 2 - 450 : 20,
    y: 50,
    width: 900,
    height: 650,
  });

  // --- GITHUB LIVE COMMIT STREAM ---
  const [recentCommits, setRecentCommits] = useState([
    {
      id: 1,
      hash: "SYS_INIT",
      repo: "UPLINK",
      msg: "Establishing secure connection...",
    },
  ]);

  useEffect(() => {
    const fetchGitHubActivity = async () => {
      try {
        // 1. Set your actual GitHub username
        const username = "VedisVigourous";

        // 2. Fetch your 4 most recently updated repositories
        const repoResponse = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=4`,
        );

        if (!repoResponse.ok) throw new Error("API Rate Limited");
        const repos = await repoResponse.json();

        // 3. Fetch the latest commit for each of those repos concurrently
        const commitPromises = repos.map(async (repo) => {
          try {
            const commitResponse = await fetch(
              `https://api.github.com/repos/${username}/${repo.name}/commits?per_page=1`,
            );
            if (!commitResponse.ok) return null;

            const commits = await commitResponse.json();
            if (commits && commits.length > 0) {
              const latest = commits[0];
              return {
                id: latest.sha,
                hash: latest.sha.substring(0, 7),
                repo: repo.name,
                msg: latest.commit.message.split("\n")[0],
              };
            }
          } catch (e) {
            return null; // Ignore single repo errors
          }
          return null;
        });

        // 4. Wait for all requests to finish and filter out any empties
        const resolvedCommits = (await Promise.all(commitPromises)).filter(
          Boolean,
        );

        if (resolvedCommits.length > 0) {
          setRecentCommits(resolvedCommits.slice(0, 6));
        } else {
          throw new Error("No commits found");
        }
      } catch (error) {
        console.warn("GitHub Link Offline/Limited. Using secure cache.");
        // CACHED FALLBACK: Keeps the UI looking premium even if GitHub times out.
        setRecentCommits([
          {
            id: 1,
            hash: "a1b2c3d",
            repo: "Vadanta_OS_Citadel",
            msg: "engineered dynamic hud architecture",
          },
          {
            id: 2,
            hash: "f4e5d6c",
            repo: "Police_Daily_Performa",
            msg: "optimized export engine",
          },
          {
            id: 3,
            hash: "9a8b7c6",
            repo: "Project_Resonance",
            msg: "merged gemini vision api logic",
          },
          {
            id: 4,
            hash: "e5d4c3b",
            repo: "Vadanta_OS_Citadel",
            msg: "patched matrix background scroll",
          },
          {
            id: 5,
            hash: "b2a1f9e",
            repo: "MLH_GHW_Guesser",
            msg: "deployed logic-based number guesser",
          },
          {
            id: 6,
            hash: "c3d4e5f",
            repo: "Vadanta_OS_Citadel",
            msg: "initialized secure uplink",
          },
        ]);
      }
    };

    fetchGitHubActivity();
  }, []);

  const [bgOffset, setBgOffset] = useState({ x: 0, y: 0 });
  const [loading, setLoading] = useState(true);

  const [time, setTime] = useState(new Date());
  const [netSpeed, setNetSpeed] = useState({ ping: 12, dl: 145 });
  const [is24Hour, setIs24Hour] = useState(true);

  // --- TERMINAL ENGINE STATES & AUTO-SCROLL ---
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalHistory, setTerminalHistory] = useState([
    { type: "output", text: "VADANTA_OS [Version 1.0.0]" },
    { type: "output", text: "Type 'help' to see available system commands." },
  ]);
  const [isTerminalFocused, setIsTerminalFocused] = useState(false);
  const [isHudOpen, setIsHudOpen] = useState(false);

  const isExpanded = isTerminalFocused || isHudOpen;

  // NEW SCROLL LOGIC: Container-Isolated Smart Targeting
  const terminalScrollRef = useRef(null);
  const terminalInputRef = useRef(null);

  useEffect(() => {
    if (terminalScrollRef.current) {
      const historyArray = terminalHistory;
      const lastEntry = historyArray[historyArray.length - 1];
      const container = terminalScrollRef.current;

      if (lastEntry && lastEntry.isManual) {
        const nodes = container.children;
        if (nodes.length >= 2) {
          const targetNode = nodes[nodes.length - 2]; // Target the input command
          // Scroll precisely to the element within the container
          container.scrollTop = targetNode.offsetTop - container.offsetTop;
        }
      } else {
        // Normal behavior: snap to bottom
        container.scrollTop = container.scrollHeight;
      }
    }
  }, [terminalHistory]);

  useEffect(() => {
    if (!isTerminalFocused) {
      // 1. Force the keyboard to close when the terminal hides
      terminalInputRef.current?.blur();

      // 2. Give the keyboard 150ms to retract, then snap the void away
      setTimeout(() => {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
      }, 150);
    }
  }, [isTerminalFocused]);

  // --- PROJECT VAULT DATA ---
  const projectsData = [
    {
      id: "01",
      name: "Project_Resonance.crx",
      tech: "JS / Gemini 1.5 / Chrome API",
      desc: "AI-powered accessibility Chrome Extension bridging digital culture gaps. MLH HackDays Top 33.",
      link: "https://github.com/hobo7676/hackdays-spiker",
    },
    {
      id: "02",
      name: "Police_Daily_Performa.exe",
      tech: "Web / UI",
      desc: "Live web app engineered for Delhi Police staff to efficiently fill, download, and export daily performas.",
      link: "https://github.com/VedisVigourous/Police-Daily-Performa",
    },
    {
      id: "03",
      name: "Vadanta_OS_Citadel.exe",
      tech: "React / Tailwind",
      desc: "Highly interactive, state-driven operating system portfolio with a custom window management architecture.",
      link: "https://github.com/VedisVigourous/project-citadel",
    },
    {
      id: "04",
      name: "MLH_GHW_Guesser.bat",
      tech: "JS / HTML / CSS",
      desc: "Logic-based number guessing engine developed and deployed for Major League Hacking's Global Hack Week.",
      link: "https://github.com/VedisVigourous/vedisvigourous.github.io",
    },
    {
      id: "05",
      name: "Java_OOP_Game_Suite.jar",
      tech: "Java / OOP",
      desc: "Modular console-based game suite implementing core encapsulation and inheritance principles.",
      link: "https://github.com/VedisVigourous/LearnJava",
    },
    {
      id: "06",
      name: "Edu_Roadmap_AI.sys",
      tech: "GenAI / Arch (WIP)",
      desc: "Upcoming AI assistant specialized in generating dynamic, personalized education roadmaps.",
      link: "#",
    },
    {
      id: "07",
      name: "DSA_Algorithm_Vault.lib",
      tech: "Java / C++/ DSA",
      desc: "Comprehensive archive of optimized algorithmic solutions for HackerRank, CodeChef, and competitive programming challenges.",
      link: "https://github.com/VedisVigourous/Code-Solutions",
    },
  ];

  // 1. THE UPGRADED MOUSE TRACKER (With Speed-Swoosh)
  useEffect(() => {
    const handleGlobalMouseMove = (e) => {
      if (loading) return;

      // Existing 3D tilt logic
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setBgOffset({ x, y });

      // The Fast-Movement Swoosh Logic
      // e.movementX/Y calculates the pixel jump between frames
      const speed = Math.abs(e.movementX) + Math.abs(e.movementY);

      // If the mouse jumps more than 80 pixels in one frame, it's moving FAST.
      if (speed > 80 && !swooshCooldown.current) {
        playSwoosh();
        swooshCooldown.current = true;
        // 500ms cooldown so it doesn't spam your ears
        setTimeout(() => (swooshCooldown.current = false), 500);
      }
    };

    window.addEventListener("mousemove", handleGlobalMouseMove);
    return () => window.removeEventListener("mousemove", handleGlobalMouseMove);
  }, [loading, playSwoosh]);

  // ---> NEW CLOCK & NETWORK EFFECT GOES HERE <---
  useEffect(() => {
    // SECURITY OVERRIDE: Do not start timers during splash screen!
    if (loading) return;

    const clockInterval = setInterval(() => setTime(new Date()), 1000);

    const netInterval = setInterval(() => {
      setNetSpeed({
        ping: Math.floor(Math.random() * 15) + 10,
        dl: Math.floor(Math.random() * 80) + 120,
      });
    }, 3000);

    return () => {
      clearInterval(clockInterval);
      clearInterval(netInterval);
    };
  }, [loading]);

  // OS State Management
  const [isIdentityWindowOpen, setIsIdentityWindowOpen] = useState(false);
  const [isSystemMenuOpen, setIsSystemMenuOpen] = useState(false);
  const [isShuttingDown, setIsShuttingDown] = useState(false);
  const [isProjectsWindowOpen, setIsProjectsWindowOpen] = useState(false);
  const [isResumeWindowOpen, setIsResumeWindowOpen] = useState(false);

  // --- RESUME COMPILATION STATES ---
  const [isPdfCompiled, setIsPdfCompiled] = useState(false);
  const [compileStatus, setCompileStatus] = useState(
    "Status: Uncompiled raw source",
  );

  const handleCompile = () => {
    // Hacker build sequence simulation
    setCompileStatus("Status: Compiling dependencies...");
    setTimeout(() => {
      setCompileStatus("Status: Linking objects & rendering fonts...");
      setTimeout(() => {
        setCompileStatus("Status: Build successful. Outputting PDF...");
        setIsPdfCompiled(true);
      }, 800);
    }, 800);
  };

  // --- NEW HACKER CONFIRMATION DIALOG STATES ---
  const [pendingAction, setPendingAction] = useState(null);
  const [terminalMsg, setTerminalMsg] = useState("");

  // --- SYSTEM FUNCTIONS ---
  // --- SYSTEM FUNCTIONS ---
  const handleReboot = () => {
    setIsSystemMenuOpen(false);
    setPendingAction("reboot");
    setTerminalMsg(
      "WARNING: Kernel re-initialization requested. All active data streams will be flushed. Proceed?",
    );
  };

  const handleClearCache = () => {
    // 1. Close System Menus
    setActiveMenu(null);
    setIsSystemMenuOpen(false);

    // 2. Terminate All Windows
    setIsIdentityWindowOpen(false);
    setIsProjectsWindowOpen(false);
    setIsCertsWindowOpen(false);
    setIsResumeWindowOpen(false);
    setIsCommsWindowOpen(false);
    setIsJourneyWindowOpen(false);
    setIsCampusWindowOpen(false);
    setIsEngageWindowOpen(false);
    setIsEngageMaximized(false);
    setIsAiProxyOpen(false);

    // 3. HARD RESET all react-rnd configurations to defaults
    setIdentityConfig({ x: 140, y: 30, width: 290, height: 385 });
    setProjectsConfig({ x: 150, y: 120, width: 500, height: 450 });
    setCertsConfig({ x: 200, y: 150, width: 550, height: 450 });
    setCampusConfig({ x: 220, y: 100, width: 650, height: 400 });
    setJourneyConfig({
      x: window.innerWidth > 768 ? 100 : 10,
      y: window.innerHeight > 768 ? 80 : 20,
      width: 800,
      height: 550,
    });
    setCommsConfig({
      x: window.innerWidth > 768 ? window.innerWidth / 2 - 225 : 20,
      y: window.innerHeight > 768 ? window.innerHeight / 2 - 200 : 40,
      width: 450,
      height: 400,
    });
    setEngageConfig({
      x: window.innerWidth > 900 ? window.innerWidth / 2 - 450 : 20,
      y: 50,
      width: 900,
      height: 650,
    });

    // 4. Terminate Overlays & Drives
    setIsThemeModalOpen(false);
    if (isGitHubMounted) {
      setIsGitHubMounted(false);
      setGithubData(null);
    }
  };

  const handleShutdown = () => {
    setIsSystemMenuOpen(false);
    setPendingAction("shutdown");
    setTerminalMsg(
      "CRITICAL ALERT: Terminating VADANTA_OS core threads. Disconnecting surveillance array...",
    );
  };

  // Execution after clicking "Confirm" in the hacker modal
  const executeConfirmedAction = () => {
    const action = pendingAction;
    setPendingAction(null);

    if (action === "reboot") {
      setIsIdentityWindowOpen(false);
      setLoading(true);
    } else if (action === "shutdown") {
      setIsIdentityWindowOpen(false);
      setIsShuttingDown(true);
    }
  };

  // FLIP CLOCK FORMATTING
  const rawHours = time.getHours();
  const ampm = rawHours >= 12 ? "PM" : "AM";

  // If 24H mode, use raw. If 12H mode, use modulo 12 (and convert 0 to 12).
  const displayHours = is24Hour ? rawHours : rawHours % 12 || 12;

  const hours = displayHours.toString().padStart(2, "0");
  const mins = time.getMinutes().toString().padStart(2, "0");
  const secs = time.getSeconds().toString().padStart(2, "0");

  // --- TERMINAL COMMAND PARSER ---
  const handleTerminalSubmit = (e) => {
    if (e.key === "Enter") {
      const rawCmd = terminalInput.trim();
      const lowerCmd = rawCmd.toLowerCase();
      if (lowerCmd === "" && terminalMode === "NORMAL") {
        setTerminalInput("");
        return;
      }
      const cmdParts = lowerCmd.split(" ");
      const baseCmd = cmdParts[0];

      let newHistory = [...terminalHistory];

      // Format input line based on mode
      if (terminalMode === "NORMAL") {
        newHistory.push({ type: "input", text: `> ${rawCmd}` });
      } else if (terminalMode === "PING_EMAIL") {
        newHistory.push({ type: "input", text: `Email: ${rawCmd}` });
      } else if (terminalMode === "PING_MSG") {
        newHistory.push({
          type: "output",
          text: `[SYSTEM] Encrypting payload from ${pingData.email}...`,
        });

        // --- REAL EMAILJS TRANSMISSION ---
        emailjs.send(
          "service_7259ksh",
          "template_6c5menn",
          {
            from_email: pingData.email,
            message: rawCmd,
          },
          "yWVDlVd10PKZ4Q9l6",
        );

        newHistory.push({
          type: "output",
          text: `[SYSTEM] Routing to server... [OK]`,
        });
        newHistory.push({
          type: "output",
          text: "TRANSMISSION SUCCESSFUL. I will get back to you shortly.",
        });

        setTerminalMode("NORMAL");
        setPingData({ email: "", message: "" });
      }

      // --- PING MULTI-STEP LOGIC ---
      if (terminalMode === "PING_EMAIL") {
        // Strict Regex to validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailRegex.test(rawCmd)) {
          setPingData({ ...pingData, email: rawCmd });
          setTerminalMode("PING_MSG");
          newHistory.push({
            type: "output",
            text: "Enter your message (Press Enter to send):",
          });
        } else {
          // The Rejection Loophole Closer
          newHistory.push({
            type: "output",
            text: `[SYSTEM] CRITICAL: '${rawCmd}' is an invalid address format.`,
          });
          newHistory.push({
            type: "output",
            text: "Please enter a valid contact email:",
          });
        }
      } else if (terminalMode === "PING_MSG") {
        newHistory.push({
          type: "output",
          text: `[SYSTEM] Encrypting payload from ${pingData.email}...`,
        });

        // TODO: EmailJS real transmission goes here (See Step 2 below)

        newHistory.push({
          type: "output",
          text: `[SYSTEM] Routing to server... [OK]`,
        });
        newHistory.push({
          type: "output",
          text: "TRANSMISSION SUCCESSFUL. I will get back to you shortly.",
        });

        setTerminalMode("NORMAL");
        setPingData({ email: "", message: "" });
      }

      // --- NORMAL COMMANDS ---
      else {
        if (lowerCmd === "") {
          // Do nothing
        } else if (lowerCmd === "clear" || lowerCmd === "cls") {
          newHistory = [];
        } else if (
          lowerCmd === "music" ||
          lowerCmd === "toggle music" ||
          lowerCmd === "mute"
        ) {
          toggleMusic();
          newHistory.push({
            type: "output",
            text: `[SYSTEM] Background Audio Engine: ${isMusicMuted ? "ONLINE" : "MUTED"}`,
          });
        } else if (lowerCmd === "help") {
          newHistory.push({
            type: "output",
            isManual: true, // Triggers our new smart scroll
            text: (
              <div className="flex flex-col gap-1 mt-1">
                <span className="text-[#22c55e] font-bold">
                  VADANTA_OS TERMINAL MANUAL // AVAILABLE COMMANDS:
                </span>
                <br />
                <span className="text-white/60">-- SYSTEM & POWER --</span>
                <span> • help : Displays this system manual</span>
                <span> • clear / cls : Clears the terminal screen</span>
                <span> • ls : Lists available system files</span>
                <span> • close : Closes all active windows</span>
                <span> • music / mute : Toggles background audio engine</span>
                <span>
                  {" "}
                  • clear cache : Flushes UI state and resets window memory
                </span>
                <span> • reboot : Restarts the VADANTA_OS kernel</span>
                <span>
                  {" "}
                  • shutdown : Terminates all processes and powers down
                </span>
                <span> • date : Displays system date and time</span>
                <span>
                  {" "}
                  • timeformat : Toggles the flip clock between 12H/24H mode
                </span>
                <span>
                  {" "}
                  • theme &lt;deg&gt; : Shifts global UI hue (e.g., 'theme 180')
                </span>
                <span>
                  {" "}
                  • netstat : Displays active secure network connections
                </span>
                <span> • traceroute : Pings server node location</span>
                <br />
                <span className="text-white/60">-- PORTFOLIO & APPS --</span>
                <span> • whoami : Outputs current user identity</span>
                <span>
                  {" "}
                  • skills : Displays technical proficiencies & stack
                </span>
                <span>
                  {" "}
                  • cat experience: Outputs professional experience logs
                </span>
                <span> • roadmap : Displays active development pipeline</span>
                <span>
                  {" "}
                  • open projects : Mounts the PROJECTS.dir executable
                </span>
                <span>
                  {" "}
                  • open journey : Initializes the Journey.log timeline
                </span>
                <span>
                  {" "}
                  • mount github : Initializes external GitHub API uplink
                </span>
                <span> • hologram : Project the ABES_Node 3D hologram</span>
                <span> • ping : Opens a direct comms link to my inbox</span>
                <br />
                <span className="text-white/60">-- SOCIALS --</span>
                <span>
                  {" "}
                  • socials : Lists external web uplinks (GitHub, LinkedIn,
                  Instagram)
                </span>
                <br />
                <span>
                  * [CLASSIFIED] : The OS is full of secrets. Try{" "}
                  <span className="text-[#d946ef] font-bold animate-pulse drop-shadow-[0_0_8px_rgba(217,70,239,0.8)]">
                    'arcade'
                  </span>
                  , 'coffee', 'hack', 'lightmode', or 'wakeup'.
                </span>
              </div>
            ),
          });
        } else if (lowerCmd === "close") {
          handleClearCache();
          newHistory.push({
            type: "output",
            text: "[SYSTEM] All active windows closed.",
          });
        } else if (lowerCmd === "clear cache" || lowerCmd === "clearcache") {
          handleClearCache();
          newHistory.push({
            type: "output",
            text: "[SYSTEM] Cache flushed. UI memory reset to defaults.",
          });
        } else if (lowerCmd === "reboot") {
          handleReboot();
        } else if (lowerCmd === "shutdown") {
          handleShutdown();
        } else if (lowerCmd === "ls") {
          newHistory.push({
            type: "output",
            text: `DIRECTORY LISTING:
 • IDENTITY.exe
 • PROJECTS.dir
 • CERTS.dat
 • RESUME.tex
 • EDUCATION.exe
 • JOURNEY.log`,
          });
        } else if (lowerCmd === "whoami") {
          setIsIdentityWindowOpen(true);
          newHistory.push({
            type: "output",
            text: "Vadanta Kumar Chauhaan\nSystem Architect & CSE Major\n> Executing IDENTITY.exe...",
          });
        } else if (lowerCmd === "date") {
          newHistory.push({ type: "output", text: new Date().toString() });
        } else if (lowerCmd === "timeformat") {
          setIs24Hour((prev) => !prev);
          newHistory.push({
            type: "output",
            text: "[SYSTEM] Clock format toggled.",
          });
        } else if (lowerCmd === "open projects") {
          setIsProjectsWindowOpen(true);
          newHistory.push({
            type: "output",
            text: "Executing PROJECTS.dir...",
          });
        } else if (lowerCmd === "open journey" || lowerCmd === "journey") {
          setIsJourneyWindowOpen(true);
          newHistory.push({
            type: "output",
            text: "[SYSTEM] Accessing chronological timeline...\n> Executing JOURNEY.log...",
          });
        } else if (lowerCmd === "hologram" || lowerCmd === "abes") {
          setIsHologramActive(true);
          newHistory.push({
            type: "output",
            text: "[SYSTEM] Establishing 3D rendering context...\n> Projecting ABES Node Hologram...",
          });
        } else if (lowerCmd === "socials") {
          newHistory.push({
            type: "output",
            text: (
              <div className="flex flex-col gap-1 mt-1">
                <span className="text-[#22c55e] font-bold">
                  EXTERNAL UPLINKS ESTABLISHED:
                </span>
                <span>
                  &gt; GITHUB :{" "}
                  <a
                    href="https://github.com/VedisVigourous"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white underline hover:text-[#22c55e] transition-colors"
                  >
                    https://github.com/VedisVigourous
                  </a>
                </span>
                <span>
                  &gt; LINKEDIN :{" "}
                  <a
                    href="https://linkedin.com/in/vadanta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white underline hover:text-[#22c55e] transition-colors"
                  >
                    https://linkedin.com/in/vadanta
                  </a>
                </span>
                <span>
                  &gt; INSTAGRAM:{" "}
                  <a
                    href="https://instagram.com/vedant_chauhaan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white underline hover:text-[#22c55e] transition-colors"
                  >
                    https://instagram.com/vedant_chauhaan
                  </a>
                </span>
              </div>
            ),
          });
        } else if (lowerCmd === "mount github") {
          handleMountGitHub();
          newHistory.push({
            type: "output",
            text: "Initiating external GitHub uplink...",
          });
        } else if (lowerCmd === "skills" || lowerCmd === "stack") {
          newHistory.push({
            type: "output",
            text: `TECHNICAL PROFICIENCIES:
------------------------
[CORE]     : Java, C++, JavaScript, HTML/CSS
[CLOUD/AI] : Google Gemini API, Generative AI, Vertex AI, GCP
[TOOLS]    : Git, GitHub Actions, Chrome Extension API
[CONCEPTS] : Data Structures & Algorithms (DSA), DOM Manipulation, OOP`,
          });
        } else if (lowerCmd === "cat experience") {
          newHistory.push({
            type: "output",
            text: `[ Deloitte ] Technology Job Simulation (Remote)
> Engineered Python ETL backend logic for unstructured JSON telemetry data.
> Drafted secure intranet dashboard proposals for industrial device monitoring.`,
          });
        } else if (lowerCmd === "roadmap" || lowerCmd === "status") {
          newHistory.push({
            type: "output",
            text: `ACTIVE DEVELOPMENT PIPELINE:
[CURRENT OP]  : Scaling UI/UX Architecture & AI Integration
[NEXT TARGET] : Google Summer of Code (GSoC) & GSSoC
[COMMUNITY]   : Actively hunting Technical Hackathons & competitive coding events`,
          });
        } else if (lowerCmd === "netstat" || lowerCmd === "network") {
          newHistory.push({
            type: "output",
            text: `ACTIVE SECURE CONNECTIONS:
Proto Recv-Q Send-Q Local Address           Foreign Address         State
tcp4       0      0 VADANTA_OS:443          NODE_GCP:https          ESTABLISHED
tcp4       0      0 HOST_CORE_MAIN:80       GITHUB_API:https        ESTABLISHED
tcp4       0   1420 AI_PROXY_SERVICE:22     GROQ_LLM:ssh            ESTABLISHED`,
          });
        } else if (lowerCmd === "games" || lowerCmd === "arcade") {
          newHistory.push({
            type: "output",
            text: "INITIATING SYS_ARCADE PROTOCOL... EXPANDING TERMINAL_VIEW",
          });
          setIsArcadeMounting(true);
          setTimeout(() => {
            setIsArcadeActive(true);
          }, 700);
        } else if (lowerCmd === "ping") {
          setTerminalMode("PING_EMAIL");
          newHistory.push({
            type: "output",
            text: "INITIALIZING SECURE COMMS LINK...\n[!] Direct manual routing available at: vadanta592007@hotmail.com\nPlease enter your contact email:",
          });
        } else if (baseCmd === "theme") {
          const hue = parseInt(cmdParts[1]);
          if (!isNaN(hue)) {
            setThemeHue(hue);
            newHistory.push({
              type: "output",
              text: `[SYSTEM] Global Phosphor Shift applied: ${hue}°`,
            });
          } else {
            newHistory.push({
              type: "output",
              text: "Usage: theme <number 0-360>",
            });
          }
        } else if (lowerCmd === "traceroute") {
          newHistory.push({
            type: "output",
            text: "Tracing route to Node_Local...",
          });
          newHistory.push({ type: "output", text: "Hop 1: 192.168.1.1 [OK]" });
          newHistory.push({
            type: "output",
            text: "Hop 2: UP-SERVER-R03 [OK]",
          });
          newHistory.push({ type: "output", text: "Hop 3: Core_Gateway_01" });
          newHistory.push({
            type: "output",
            text: "Status: [ SECURE CONNECTION ESTABLISHED ]",
          });
        } else if (lowerCmd === "sudo su") {
          newHistory.push({
            type: "output",
            text: "CRITICAL ERR: ACCESS DENIED. Unauthorized root escalation attempt logged and reported to sysadmin.",
          });
        } else if (lowerCmd === "ssh zion" || lowerCmd === "wakeup") {
          setMatrixActive(true);
          setMatrixTerminating(false);
          newHistory.push({
            type: "output",
            text: "MATRIX PROTOCOL INITIATED. SYSTEM OVERRIDE...",
          });
          setTimeout(() => {
            setMatrixTerminating(true);
          }, 6000);
          setTimeout(() => {
            setMatrixActive(false);
            setMatrixTerminating(false);
            setTerminalHistory((prev) => [
              ...prev,
              {
                type: "output",
                text: "[SYSTEM] MATRIX PROTOCOL TERMINATED. NORMAL UI RESTORED.",
              },
            ]);
          }, 9000);
        } else if (lowerCmd === "coffee" || lowerCmd === "brew") {
          newHistory.push({
            type: "output",
            text: `
    (  )   (   )  )
     ) (   )  (  (
    (____)____)___)
    |             |]
    \\             /
     \`-----------\`
[SYSTEM]: Caffeine levels replenished. V-Bash engine optimal.`,
          });
        } else if (lowerCmd === "sudo rm -rf /") {
          newHistory.push({
            type: "output",
            text: `[CRITICAL]: Nice try. I architected this OS from scratch—you really think I'd leave root access open?\n[SYSTEM]: Incident logged. Deploying defensive countermeasures...`,
          });
        } else if (lowerCmd === "hack" || lowerCmd === "breach") {
          newHistory.push({
            type: "output",
            text: `[INITIATING BREACH PROTOCOL]
> Bypassing UI mainframe... [OK]
> Decrypting admin passwords... [OK]
> Accessing secure project vault... 
> ERROR: Just kidding, bro. This is a React frontend. Go check out my GitHub instead!`,
          });
        } else if (lowerCmd === "lightmode" || lowerCmd === "light mode") {
          newHistory.push({
            type: "output",
            text: `[FATAL ERR]: My retinas are burning just thinking about it. Use the toggle switch in the UI... if you dare.`,
          });
        } else if (lowerCmd === "konami" || lowerCmd === "up up down down") {
          newHistory.push({
            type: "output",
            text: `[CHEAT CODE ACCEPTED]: Unlimited lives granted. But you still have to debug your own code.`,
          });
        } else if (lowerCmd === "exit") {
          setIsTerminalFocused(false);
          terminalInputRef.current?.blur();
          newHistory.push({
            type: "output",
            text: "[SYSTEM] CLI session suspended. Returning to background mode.",
          });
        } else {
          newHistory.push({
            type: "output",
            text: `bash: ${rawCmd}: command not found`,
          });
        }
      }

      setTerminalHistory(newHistory);
      setTerminalInput("");
    }
  };

  return (
    <div
      onClick={handleGlobalClick}
      // Replaced min-h-screen with fixed inset-0 and h-[100dvh] to kill mobile scrolling
      className="fixed inset-0 w-full h-[100dvh] bg-slate-950 text-[#22c55e] font-mono overflow-hidden selection:bg-[#22c55e] selection:text-black touch-none"
      style={{
        filter: isBlindingLightMode
          ? "invert(1) hue-rotate(180deg)"
          : `hue-rotate(${themeHue}deg)`,
        transition: "filter 0.5s ease-in-out",
      }}
    >
      {/* Fully unmount Custom Cursor on mobile */}
{!isMobileDevice && <CustomCursor />}

      {/* RENDER TOUCH RIPPLES */}
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="fixed border-2 border-[#22c55e] rounded-full animate-[ping_0.5s_ease-out_forwards] pointer-events-none z-[99999]"
          style={{
            left: ripple.x - 15, // Centers the 30px ring
            top: ripple.y - 15,
            width: 30,
            height: 30,
          }}
        />
      ))}
      {loading ? (
        <ChronosSplash onComplete={() => setLoading(false)} />
      ) : (
        <div className="flex flex-col h-screen w-full relative z-10 bg-[#050505]">
          {/* LAYER 1: THE CLEAN CYBER GRID */}
          <div
            className="absolute top-[-100px] bottom-[-100px] left-[-100px] right-[-100px] cyber-grid pointer-events-none z-[1] max-md:!transform-none"
            style={{
              transform: `translate(${bgOffset.x * 0.5}px, ${bgOffset.y * 0.5}px)`,
              transition: "transform 0.1s ease-out",
            }}
          ></div>

          {/* MOBILE ONLY: Telemetry Heatmap */}
          <div className="fixed inset-0 z-[1] pointer-events-none md:hidden bg-[#030a05] overflow-hidden">
            {/* Topographical Data Points */}
            <div
              className="absolute inset-0 opacity-[0.15]"
              style={{
                backgroundImage: `radial-gradient(circle, #22c55e 1px, transparent 1px)`,
                backgroundSize: "24px 24px",
              }}
            ></div>

            {/* Core Engine Pulse */}
            <div
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.12)_0%,transparent_70%)] animate-pulse"
              style={{ animationDuration: "2.5s" }}
            ></div>

            {/* Sweeping Heat Wave Scanner */}
            <div
              className="absolute left-0 w-full h-[45vh] bg-gradient-to-b from-transparent via-[#22c55e]/10 to-[#22c55e]/30 border-b-[2px] border-[#22c55e]/60 shadow-[0_4px_20px_rgba(34,197,94,0.3)]"
              style={{ animation: "telemetrySweep 4.5s ease-in-out infinite" }}
            ></div>

            {/* Standalone Keyframe for the Sweep */}
            <style>{`
            @keyframes telemetrySweep {
              0% { transform: translateY(-100vh); opacity: 0; }
              15% { opacity: 1; }
              85% { opacity: 1; }
              100% { transform: translateY(100vh); opacity: 0; }
            }
          `}</style>
          </div>

          {/* --- LAYER 3: VIGNETTE SHADOW (z-[3]) --- */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_100%)] pointer-events-none z-[3]"></div>

          {/* LAYER 3.5: CHAOTIC FULL-WIDTH AUDIO VISUALIZER (z-[4]) */}
          {isArcadeActive && (
            <div className="absolute bottom-[40px] left-0 w-full flex items-end justify-center gap-[4px] px-4 h-20 z-[4] pointer-events-none opacity-40 overflow-hidden max-md:hidden">
              {[...Array(190)].map((_, i) => (
                <div
                  key={i}
                  className={`visualizer-bar bar-${(i % 8) + 1} shrink-0`}
                ></div>
              ))}
            </div>
          )}

          {/* --- LAYER 4: MAIN OS CONTENT (z-[10]) --- */}
          <div className="relative z-[10] w-full h-full flex flex-col">
            {/* DYNAMIC ISLAND TOAST */}
<div className={`fixed top-12 left-1/2 -translate-x-1/2 z-[99999] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${audioToast.show ? "translate-y-0 opacity-100 scale-100" : "-translate-y-12 opacity-0 scale-90 pointer-events-none"}`}>
  <div className="bg-black/90 border border-[#22c55e]/50 shadow-[0_0_20px_rgba(0,0,0,0.8)] backdrop-blur-md rounded-full px-5 py-2 flex items-center gap-3">
    {audioToast.muted ? (
      <svg className="w-4 h-4 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
        <line x1="23" y1="9" x2="17" y2="15"></line>
        <line x1="17" y1="9" x2="23" y2="15"></line>
      </svg>
    ) : (
      <svg className="w-4 h-4 text-[#22c55e]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
      </svg>
    )}
    <span className={`text-[10px] font-bold tracking-widest uppercase ${audioToast.muted ? "text-red-500" : "text-[#22c55e]"}`}>
      {audioToast.muted ? "Silent Mode" : "Ringer Mode"}
    </span>
  </div>
</div>

            {/* TOP OS STATUS BAR */}
            <div className="w-full h-8 bg-black/80 backdrop-blur-md border-b border-[#22c55e]/30 flex items-center px-4 relative z-[90]">
              {/* Left Side: Menus */}
              <div className="flex-1 flex items-center">
                {/* 1. THE LOGO */}
                <div className="relative mr-3">
                  <div
                    onClick={() =>
                      setActiveMenu(activeMenu === "vadanta" ? null : "vadanta")
                    }
                    className="relative flex items-center justify-center cursor-pointer select-none font-mono"
                  >
                    <span className="text-xl font-black text-[#22c55e]/30 tracking-tighter">
                      V
                    </span>
                    <span
                      className="absolute top-0 left-0 text-xl font-black text-[#22c55e] tracking-tighter pointer-events-none"
                      style={{
                        animation: "cyber-wipe 3s ease-in-out infinite",
                      }}
                    >
                      V
                    </span>
                    <span
                      className="absolute top-0 left-0 text-xl font-black text-white tracking-tighter pointer-events-none"
                      style={{
                        animation: "cyber-wipe 3s ease-in-out infinite 0.15s",
                      }}
                    >
                      V
                    </span>
                  </div>

                  {activeMenu === "vadanta" && (
                    <div className="absolute top-full left-0 mt-3 w-64 bg-black/95 border border-[#22c55e]/50 shadow-[0_0_15px_rgba(34,197,94,0.2)] py-2 flex flex-col gap-1 z-[9999] backdrop-blur-md text-xs font-mono">
                      {/* ORIGINAL V-MENU OPTIONS */}
                      <div
                        onClick={() => {
                          setActiveMenu(null);
                          setIsCoreIdentityOpen(true);
                        }}
                        className="px-4 py-2 text-[#22c55e] hover:bg-[#22c55e]/20 cursor-pointer transition-colors"
                      >
                        [ Core_Identity ]
                      </div>
                      <div
                        onClick={() => {
                          setActiveMenu(null);
                          triggerTraceRoute();
                        }}
                        className="px-4 py-2 text-[#22c55e] hover:bg-[#22c55e]/20 cursor-pointer transition-colors"
                      >
                        [ Breach_Protocol ]
                      </div>
                      <div
                        onClick={() => {
                          setActiveMenu(null);
                          handleMountGitHub();
                        }}
                        className="px-4 py-2 text-[#22c55e] hover:bg-[#22c55e]/20 cursor-pointer transition-colors font-bold border-t border-dashed border-[#22c55e]/30 mt-1 pt-2"
                      >
                        &gt; Mount_GitHub_Drive
                      </div>

                      {/* MOBILE-ONLY ACCORDION (File & System) */}
                      <div className="sm:hidden border-t border-dashed border-[#22c55e]/30 mt-1 pt-1">
                        {/* File Accordion */}
                        <div
                          onClick={(e) => {
                            e.stopPropagation();
                            setMobileSubMenu(
                              mobileSubMenu === "file" ? null : "file",
                            );
                          }}
                          className="px-4 py-2 text-[#22c55e] hover:bg-[#22c55e]/20 cursor-pointer transition-colors flex justify-between items-center"
                        >
                          <span>&gt; File</span>
                          <span className="text-[10px]">
                            {mobileSubMenu === "file" ? "[-]" : "[+]"}
                          </span>
                        </div>
                        {mobileSubMenu === "file" && (
                          <div className="pl-6 flex flex-col gap-1 pb-1 border-b border-[#22c55e]/10">
                            <a
                              href="/resume.pdf"
                              download
                              className="block py-2 text-[#22c55e] hover:text-white transition-colors"
                            >
                              &gt; Extract_Dossier
                            </a>
                            <div
                              onClick={() => {
                                setActiveMenu(null);
                                handleExportLogs();
                              }}
                              className="py-2 text-[#22c55e] hover:text-white cursor-pointer transition-colors"
                            >
                              &gt; Export_Session_Logs
                            </div>
                            <div
                              onClick={() => {
                                setActiveMenu(null);
                                setIsThemeModalOpen(true);
                              }}
                              className="py-2 text-[#BF40BF] hover:text-white cursor-pointer transition-colors"
                            >
                              &gt; Customize_Theme
                            </div>
                          </div>
                        )}

                        {/* System Accordion */}
                        <div
                          onClick={(e) => {
                            e.stopPropagation();
                            setMobileSubMenu(
                              mobileSubMenu === "system" ? null : "system",
                            );
                          }}
                          className="px-4 py-2 text-[#22c55e] hover:bg-[#22c55e]/20 cursor-pointer transition-colors flex justify-between items-center"
                        >
                          <span>&gt; System</span>
                          <span className="text-[10px]">
                            {mobileSubMenu === "system" ? "[-]" : "[+]"}
                          </span>
                        </div>
                        {mobileSubMenu === "system" && (
                          <div className="pl-6 flex flex-col gap-1 pb-1">
                            <div
                              onClick={handleReboot}
                              className="py-2 text-[#22c55e] hover:text-white cursor-pointer transition-colors"
                            >
                              &gt; Reboot_System
                            </div>
                            <div
                              onClick={handleClearCache}
                              className="py-2 text-[#22c55e] hover:text-white cursor-pointer transition-colors"
                            >
                              &gt; Clear_Cache
                            </div>
                            <div
                              onClick={handleShutdown}
                              className="py-2 text-red-500 hover:text-red-400 cursor-pointer transition-colors font-bold"
                            >
                              &gt; Initiate_Shutdown
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* SEPARATOR 1 (Tucked close to the logo) */}
                <div className="hidden sm:block w-[1px] h-4 bg-[#22c55e]/30 mr-6"></div>

                {/* 2 & 3. FILE & SYSTEM MENUS (Centered perfectly between the separators) */}
                <div className="flex items-center gap-6 mr-6">
                  {/* File Menu */}
                  <div className="relative hidden sm:block">
                    <span
                      onClick={() =>
                        setActiveMenu(activeMenu === "file" ? null : "file")
                      }
                      className={`cursor-pointer transition-colors ${activeMenu === "file" ? "text-[#22c55e]" : "text-slate-500 hover:text-[#22c55e]"}`}
                    >
                      File
                    </span>
                    {activeMenu === "file" && (
                      <div className="absolute top-full left-0 mt-3 w-60 bg-black/95 border border-[#22c55e]/50 shadow-[0_0_15px_rgba(34,197,94,0.2)] py-2 flex flex-col gap-1 z-[9999] backdrop-blur-md text-xs font-mono">
                        <a
                          href="/resume.pdf"
                          download
                          className="block px-4 py-2 text-[#22c55e] hover:bg-[#22c55e]/20 cursor-pointer transition-colors"
                        >
                          &gt; Extract_Dossier
                        </a>
                        <div
                          onClick={() => {
                            setActiveMenu(null);
                            handleExportLogs();
                          }}
                          className="px-4 py-2 text-[#22c55e] hover:bg-[#22c55e]/20 cursor-pointer transition-colors"
                        >
                          &gt; Export_Session_Logs
                        </div>
                        <div
                          onClick={() => {
                            setActiveMenu(null);
                            setIsThemeModalOpen(true);
                          }}
                          className="px-4 py-2 text-[#BF40BF] hover:bg-[#22c55e]/20 cursor-pointer transition-colors border-t border-dashed border-[#BF40BF]/30 mt-1 pt-2"
                        >
                          &gt; Customize_OS_Theme
                        </div>
                      </div>
                    )}
                  </div>

                  {/* System Menu */}
                  <div className="relative hidden sm:block">
                    <span
                      onClick={() =>
                        setActiveMenu(activeMenu === "system" ? null : "system")
                      }
                      className={`cursor-pointer transition-colors ${activeMenu === "system" ? "text-[#22c55e]" : "text-slate-500 hover:text-[#22c55e]"}`}
                    >
                      System
                    </span>
                    {activeMenu === "system" && (
                      <div className="absolute top-full left-0 mt-3 w-48 bg-black/95 border border-[#22c55e]/50 shadow-[0_0_15px_rgba(34,197,94,0.2)] py-1 z-[9999] backdrop-blur-md text-xs">
                        <div
                          onClick={handleReboot}
                          className="px-4 py-2 text-[#22c55e] hover:bg-[#22c55e]/20 cursor-pointer transition-colors"
                        >
                          &gt; Reboot_System
                        </div>
                        <div
                          onClick={handleClearCache}
                          className="px-4 py-2 text-[#22c55e] hover:bg-[#22c55e]/20 cursor-pointer transition-colors"
                        >
                          &gt; Clear_Cache
                        </div>
                        <div className="border-t border-[#22c55e]/30 my-1"></div>
                        <div
                          onClick={handleShutdown}
                          className="px-4 py-2 text-red-500 hover:bg-red-500/20 cursor-pointer transition-colors font-bold"
                        >
                          &gt; Initiate_Shutdown
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* SEPARATOR 2 */}
                <div className="hidden sm:block w-[1px] h-4 bg-[#22c55e]/30 mr-4"></div>

                {/* THE JOKER TRAP: Fake Light Mode Toggle */}
                <div className="relative hidden sm:flex items-center mr-4">
                  <div
                    className="flex items-center gap-2 cursor-pointer group"
                    onClick={() => setIsJokerTrapActive(true)}
                  >
                    <div className="w-7 h-3.5 border rounded-full relative transition-colors duration-300 bg-slate-800 border-slate-600 group-hover:border-red-500">
                      <div className="w-2.5 h-2.5 rounded-full absolute top-[1px] shadow-sm transition-all duration-300 bg-slate-400 left-[2px] group-hover:bg-red-500"></div>
                    </div>
                    <span className="text-[10px] uppercase tracking-widest transition-colors text-slate-500 group-hover:text-red-400">
                      Light_Mode
                    </span>
                  </div>
                </div>

                {/* SEPARATOR 3 */}
                <div className="hidden sm:block w-[1px] h-4 bg-[#22c55e]/30 mr-4"></div>

                {/* BGM AUDIO TOGGLE */}
                <div className="relative hidden sm:flex items-center">
                  <div
                    className="flex items-center gap-2 cursor-pointer group"
                    onClick={toggleMusic}
                  >
                    <div
                      className={`w-7 h-3.5 border rounded-full relative transition-colors duration-300 ${isMusicMuted ? "bg-red-900/30 border-red-700/50 group-hover:border-red-500" : "bg-[#22c55e]/20 border-[#22c55e]/50 group-hover:border-[#22c55e]"}`}
                    >
                      <div
                        className={`w-2.5 h-2.5 rounded-full absolute top-[1px] shadow-sm transition-all duration-300 ${isMusicMuted ? "bg-red-500 left-[2px]" : "bg-[#22c55e] left-[14px]"}`}
                      ></div>
                    </div>
                    <span
                      className={`text-[10px] uppercase tracking-widest transition-colors ${isMusicMuted ? "text-red-500" : "text-[#22c55e]/70 group-hover:text-[#22c55e]"}`}
                    >
                      Audio
                    </span>
                  </div>
                </div>
              </div>
              {/* End of Left Side Menus */}

              {/* CENTER: The Surveillance Camera (Hidden on Mobile) */}
              <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center">
                <SurveillanceLogo />
              </div>

              {/* Right Side: Network, Clock & Mobile WiFi */}
              <div className="flex items-center gap-3 sm:gap-4 opacity-90 relative z-50">
                {/* MOBILE AUDIO TOGGLE (Replaces WiFi on Right Side) */}
<div onClick={toggleMusic} className="cursor-pointer flex sm:hidden items-center justify-center mr-1">
  {isMusicMuted ? (
    <svg className="w-[18px] h-[18px] text-red-500 opacity-80 drop-shadow-[0_0_5px_rgba(239,68,68,0.4)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
      <line x1="23" y1="9" x2="17" y2="15"></line>
      <line x1="17" y1="9" x2="23" y2="15"></line>
    </svg>
  ) : (
    <svg className="w-[18px] h-[18px] text-[#22c55e] animate-pulse drop-shadow-[0_0_5px_rgba(34,197,94,0.6)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
    </svg>
  )}
</div>

                {/* 2. DESKTOP-ONLY NETWORK STATS & DATE */}
                <div className="hidden sm:flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-ping"></span>
                    <span className="tracking-widest font-mono text-xs text-[#22c55e]">
                      NET: {netSpeed.dl} MB/s | {netSpeed.ping}MS
                    </span>
                  </div>
                  <span className="text-[#22c55e]/40">|</span>
                  <div className="uppercase tracking-widest text-[#22c55e]/70 text-xs">
                    {time.toLocaleDateString("en-US", {
                      month: "short",
                      day: "2-digit",
                      year: "numeric",
                    })}
                  </div>
                </div>

                {/* 3. YOUR CLOCK (Visible on Mobile & Desktop) */}
                <div className="flex items-center space-x-1 font-bold font-mono text-[11px]">
                  {/* === Keep your existing Flip Clock Toggle and Digits here === */}
                  <div
                    className="flex items-center bg-[#050505] border border-[#22c55e]/40 rounded cursor-pointer text-[9px] tracking-wider overflow-hidden shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]"
                    onClick={() => setIs24Hour(!is24Hour)}
                  >
                    <div
                      className={`px-1.5 py-[2px] transition-colors ${!is24Hour ? "bg-[#22c55e]/30 text-[#22c55e]" : "text-[#22c55e]/40 hover:bg-[#22c55e]/10"}`}
                    >
                      12
                    </div>
                    <div className="w-[1px] h-[12px] bg-[#22c55e]/40"></div>
                    <div
                      className={`px-1.5 py-[2px] transition-colors ${is24Hour ? "bg-[#22c55e]/30 text-[#22c55e]" : "text-[#22c55e]/40 hover:bg-[#22c55e]/10"}`}
                    >
                      24
                    </div>
                  </div>
                  <div className="w-[1px] h-4 bg-[#22c55e]/40 mx-3"></div>
                  <div className="flex items-center justify-center bg-[#0a0a0a] border border-[#22c55e]/40 w-[22px] h-[18px] rounded shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]">
                    {hours}
                  </div>
                  <span className="text-[#22c55e]/70 animate-pulse mb-0.5">
                    :
                  </span>
                  <div className="flex items-center justify-center bg-[#0a0a0a] border border-[#22c55e]/40 w-[22px] h-[18px] rounded shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]">
                    {mins}
                  </div>
                  <span className="text-[#22c55e]/70 animate-pulse mb-0.5">
                    :
                  </span>
                  <div className="flex items-center justify-center bg-[#0a0a0a] border border-[#22c55e]/20 w-[22px] h-[18px] rounded text-[#22c55e]/70 shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]">
                    {secs}
                  </div>
                  {!is24Hour && (
                    <span className="text-[9px] text-[#22c55e]/70 ml-1">
                      {ampm}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* DESKTOP WORKSPACE (Strictly Hidden on Mobile) */}
            <div className="hidden md:flex flex-grow p-4 relative overflow-hidden">
              {/* MOBILE WORKSPACE (The Clean Slate) */}
              <div className="flex md:hidden flex-col h-[calc(100dvh-120px)] w-full px-4 relative z-40">
                {/* Placeholder so we can verify the boundaries */}
                <div className="flex-grow flex items-center justify-center border-2 border-dashed border-[#22c55e]/30 rounded-[2rem]">
                  <div className="text-[#22c55e]/50 text-xs font-mono text-center leading-loose">
                    [ MOBILE CANVAS LOCKED ]<br />
                    No scrolling allowed.
                    <br />
                    Awaiting Module 1...
                  </div>
                </div>
              </div>

              {/* --- CENTRAL CHART & MODULES */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center pb-24 pointer-events-none z-0 max-md:relative max-md:inset-auto max-md:pb-0 max-md:transform-none max-md:gap-2 max-md:scale-[0.90] max-md:origin-top max-md:w-full"
                style={
                  window.innerWidth < 768
                    ? {}
                    : {
                        transform: `translate(${bgOffset.x * 2.5}px, ${bgOffset.y * 2.5}px)`,
                        transition: "transform 0.1s ease-out",
                      }
                }
              >
                {/* TOP ROW: GitHub & Socials */}
                <div className="flex items-center gap-4 mb-6 relative z-50">
                  {/* GitHub Node */}
                  <a
                    href="https://github.com/VedisVigourous"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#050505]/60 border border-[#22c55e]/30 px-5 py-2 rounded-full backdrop-blur-md shadow-[0_0_15px_rgba(34,197,94,0.1)] pointer-events-auto cursor-pointer hover:scale-105 hover:bg-[#22c55e]/20 hover:border-[#22c55e]/70 group transition-all duration-300"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-[#22c55e]/70 group-hover:text-[#22c55e] transition-colors"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span className="text-[#22c55e]/70 group-hover:text-[#22c55e] text-sm font-bold tracking-widest uppercase transition-colors">
                      vedisvigourous
                    </span>
                  </a>

                  {/* LinkedIn Node */}
                  <a
                    href="https://linkedin.com/in/vadanta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#050505]/60 border border-[#22c55e]/30 px-5 py-2 rounded-full backdrop-blur-md shadow-[0_0_15px_rgba(34,197,94,0.1)] pointer-events-auto cursor-pointer hover:scale-105 hover:bg-[#22c55e]/20 hover:border-[#22c55e]/70 group transition-all duration-300 ml-2"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 text-[#22c55e]/70 group-hover:text-[#22c55e] transition-colors"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    <span className="text-[#22c55e]/70 group-hover:text-[#22c55e] text-xs font-bold tracking-widest uppercase transition-colors">
                      LinkedIn
                    </span>
                  </a>

                  {/* Instagram Node */}
                  <a
                    href="https://instagram.com/vedant_chauhaan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#050505]/60 border border-[#22c55e]/30 px-5 py-2 rounded-full backdrop-blur-md shadow-[0_0_15px_rgba(34,197,94,0.1)] pointer-events-auto cursor-pointer hover:scale-105 hover:bg-[#22c55e]/20 hover:border-[#22c55e]/70 group transition-all duration-300"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 text-[#22c55e]/70 group-hover:text-[#22c55e] transition-colors"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    <span className="text-[#22c55e]/70 group-hover:text-[#22c55e] text-xs font-bold tracking-widest uppercase transition-colors">
                      Instagram
                    </span>
                  </a>
                </div>

                {/* Desktop Graph Container - Adjust positioning classes as needed */}
                {isGraphLoading ? (
                  /* The Skeleton State */
                  <div className="relative p-4 rounded-xl border border-[#22c55e]/20 bg-[#050505]/40 backdrop-blur-sm shadow-[0_0_20px_rgba(0,0,0,0.5)] flex gap-1 w-max">
                    {[...Array(50)].map(
                      (
                        _,
                        colIndex, // Expanded to 50 columns to better match the width of your ghchart
                      ) => (
                        <div key={colIndex} className="flex flex-col gap-1">
                          {[...Array(7)].map((_, rowIndex) => (
                            <div
                              key={`${colIndex}-${rowIndex}`}
                              className="w-3 h-3 bg-gray-600/40 rounded-sm animate-pulse"
                              style={{ animationDelay: `${colIndex * 75}ms` }}
                            ></div>
                          ))}
                        </div>
                      ),
                    )}
                  </div>
                ) : (
                  /* CENTER: The Chart (Your actual image) */
                  <div className="relative p-4 rounded-xl border border-[#22c55e]/20 bg-[#050505]/40 backdrop-blur-sm shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                    <img
                      src="https://ghchart.rshah.org/22c55e/vedisvigourous"
                      alt="VedisVigourous Live Commits"
                      className="w-[75vw] max-w-5xl opacity-70"
                      style={{
                        filter: "invert(0.85) hue-rotate(180deg) contrast(1.8)",
                      }}
                      // Optional: Automatically turn off the skeleton when the image finishes downloading
                      onLoad={() => setIsGraphLoading(false)}
                    />
                  </div>
                )}

                {/* BOTTOM ROW: AI Agent & Traffic Tracker */}
                <div className="flex items-center justify-between w-[75vw] max-w-5xl mt-6">
                  {/* THE TACTICAL BREACH (Refined Sweep) */}
                  {/* AI Chatbot Trigger */}
                  <button
                    onClick={() => {
                      playAppOpen();
                      setIsAiProxyOpen(true);
                    }}
                    /* Added max-md: positioning directly to the button so desktop stays 100% native relative */
                    className="relative max-md:fixed max-md:bottom-[calc(0.5rem+env(safe-area-inset-bottom))]  max-md:right-4 max-md:z-[100] overflow-hidden group p-[1.5px] pointer-events-auto hover:-translate-y-1 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(34,197,94,0.2)] hover:drop-shadow-[0_0_30px_rgba(34,197,94,0.6)]"
                    style={{
                      clipPath:
                        "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)",
                    }}
                  >
                    {/* 1. Dual Sharp Lasers (The Border Chase) */}
                    <span className="absolute -inset-[500%] bg-[conic-gradient(transparent_0_140deg,#22c55e_180deg,transparent_180_320deg,#22c55e_360deg)] animate-[spin_2s_linear_infinite]" />

                    {/* 2. Inner Matte Core */}
                    <span className="relative flex items-center justify-center gap-2 h-full w-full cursor-pointer bg-[#050505] pl-4 pr-6 py-3 max-md:p-3 group-hover:bg-[#22c55e] transition-colors duration-300 overflow-hidden">
                      {/* 3. IDLE STATE: The Diagonal Stripe Sweep */}
                      <div
                        className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(34,197,94,0.12)_10px,rgba(34,197,94,0.12)_20px)] group-hover:opacity-0 transition-opacity duration-300 pointer-events-none"
                        style={{
                          animation:
                            "stripeSweep 4.5s ease-in-out infinite alternate",
                        }}
                      ></div>

                      {/* 4. HOVER STATE: Solid Black Industrial Stripes */}
                      <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(0,0,0,0.15)_10px,rgba(0,0,0,0.15)_20px)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                      {/* Radar Ping */}
                      <div className="relative flex h-2.5 w-2.5 z-10 shrink-0 pointer-events-none">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22c55e] group-hover:bg-black transition-colors duration-300"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#22c55e] group-hover:bg-black transition-colors duration-300"></span>
                      </div>

                      {/* Text (Hidden on mobile for a clean icon-only FAB) */}
                      <span className="text-[13px] max-md:hidden font-black tracking-[0.2em] uppercase text-[#22c55e] group-hover:text-black transition-colors duration-300 relative z-10 pointer-events-none drop-shadow-[0_0_8px_rgba(34,197,94,0.5)] group-hover:drop-shadow-none whitespace-nowrap">
                        Hey There, VAI!
                      </span>
                    </span>
                  </button>

                  <style>{`
  @keyframes stripeSweep {
    0% { clip-path: inset(0 100% 0 0); }
    100% { clip-path: inset(0 0 0 0); }
  }
`}</style>

                  {/* Live Visitor Metrics (Updated Greeting) */}
                  <div className="flex items-center justify-center bg-[#050505]/60 border border-[#22c55e]/30 px-5 py-2.5 rounded backdrop-blur-md shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                    <span className="text-[#22c55e] text-xs font-bold tracking-widest animate-pulse">
                      Hey👋🏻! Visitor #{visitorCount}
                    </span>
                  </div>
                </div>
              </div>

              {/* Desktop Icons (Left Side) -> Mobile iOS Grid Row 1 */}
              <div className="flex flex-col space-y-6 w-24 mt-4 max-md:grid max-md:grid-cols-4 max-md:w-full max-md:px-4 max-md:gap-x-3 max-md:space-y-0 max-md:mt-0 relative z-40 max-md:[&_span]:hidden max-md:scale-[0.90] max-md:origin-top">
                {/* --- IDENTITY.exe (PREMIUM PAN, ZOOM & NEON SWEEP EDITION) --- */}
                <div
                  className="flex flex-col items-center cursor-pointer group w-24"
                  onClick={() => {
                    playAppOpen();
                    setIsIdentityWindowOpen((prev) => !prev);
                  }}
                >
                  {/* The 3D Icon Wrapper */}
                  <div className="relative w-12 h-12 mb-3">
                    {/* Layer 1 (Back) - Pans Down-Left */}
                    <div className="absolute inset-0 rounded border border-[#22c55e]/20 bg-transparent flex items-center justify-center text-[#22c55e]/20 transition-all duration-500 ease-out group-hover:-translate-x-2 group-hover:translate-y-2 group-hover:scale-105 z-0">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        ></path>
                      </svg>
                    </div>

                    {/* Layer 2 (Middle) - Pans Slightly Down-Left */}
                    <div className="absolute inset-0 rounded border border-[#22c55e]/40 bg-transparent flex items-center justify-center text-[#22c55e]/40 transition-all duration-500 ease-out group-hover:-translate-x-1 group-hover:translate-y-1 group-hover:scale-110 z-10">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        ></path>
                      </svg>
                    </div>

                    {/* Layer 3 (Front) - Pans Up-Right, Glows, and SWEEPS */}
                    <div className="absolute inset-0 rounded border border-[#22c55e]/80 bg-[#050505] flex items-center justify-center text-[#22c55e] transition-all duration-500 ease-out group-hover:translate-x-1.5 group-hover:-translate-y-1.5 group-hover:scale-[1.15] group-hover:border-[#22c55e] group-hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] group-active:scale-95 z-20 overflow-hidden">
                      <svg
                        className="w-6 h-6 group-hover:text-white transition-colors duration-500 relative z-30"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        ></path>
                      </svg>

                      {/* The Neon Light Sweep (Flashes across on hover) */}
                      <div className="absolute top-0 -left-[150%] w-full h-full bg-gradient-to-r from-transparent via-[#22c55e]/60 to-transparent skew-x-[-45deg] transition-all duration-700 ease-in-out group-hover:left-[150%] z-20"></div>
                    </div>
                  </div>

                  {/* The Label */}
                  <span className="text-xs bg-black/80 px-2 py-0.5 rounded border border-transparent group-hover:border-[#22c55e]/50 text-[#22c55e]/70 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.8)] text-center transition-all duration-500 tracking-wider group-hover:-translate-y-1">
                    IDENTITY.exe
                  </span>
                </div>

                {/* Desktop Icon: PROJECTS.dir */}
                <div
                  className="flex flex-col items-center cursor-pointer group w-24 mb-4"
                  onClick={() => {
                    playAppOpen();
                    setIsProjectsWindowOpen((prev) => !prev);
                  }}
                >
                  {/* The 3D Icon Wrapper */}
                  <div className="relative w-12 h-12 mb-3">
                    {/* Layer 1 (Back) */}
                    <div className="absolute inset-0 rounded border border-[#22c55e]/20 bg-transparent flex items-center justify-center text-[#22c55e]/20 transition-all duration-500 ease-out group-hover:-translate-x-2 group-hover:translate-y-2 group-hover:scale-105 z-0">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                        ></path>
                      </svg>
                    </div>

                    {/* Layer 2 (Middle) */}
                    <div className="absolute inset-0 rounded border border-[#22c55e]/40 bg-transparent flex items-center justify-center text-[#22c55e]/40 transition-all duration-500 ease-out group-hover:-translate-x-1 group-hover:translate-y-1 group-hover:scale-110 z-10">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                        ></path>
                      </svg>
                    </div>

                    {/* Layer 3 (Front) & Neon Sweep */}
                    <div className="absolute inset-0 rounded border border-[#22c55e]/80 bg-[#050505] flex items-center justify-center text-[#22c55e] transition-all duration-500 ease-out group-hover:translate-x-1.5 group-hover:-translate-y-1.5 group-hover:scale-[1.15] group-hover:border-[#22c55e] group-hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] group-active:scale-95 z-20 overflow-hidden">
                      <svg
                        className="w-6 h-6 group-hover:text-white transition-colors duration-500 relative z-30"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                        ></path>
                      </svg>

                      {/* The Neon Light Sweep */}
                      <div className="absolute top-0 -left-[150%] w-full h-full bg-gradient-to-r from-transparent via-[#22c55e]/60 to-transparent skew-x-[-45deg] transition-all duration-700 ease-in-out group-hover:left-[150%] z-20"></div>
                    </div>
                  </div>

                  {/* The Label */}
                  <span className="text-xs bg-black/80 px-2 py-0.5 rounded border border-transparent group-hover:border-[#22c55e]/50 text-[#22c55e]/70 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.8)] text-center transition-all duration-500 tracking-wider group-hover:-translate-y-1">
                    PROJECTS.dir
                  </span>
                </div>

                {/* Desktop Icon: CERTS.dat */}
                <div
                  className="flex flex-col items-center cursor-pointer group w-24 mb-4"
                  onClick={() => {
                    playAppOpen();
                    setIsCertsWindowOpen((prev) => !prev);
                  }}
                >
                  {/* The 3D Icon Wrapper */}
                  <div className="relative w-12 h-12 mb-3">
                    {/* Layer 1 (Back) */}
                    <div className="absolute inset-0 rounded border border-[#22c55e]/20 bg-transparent flex items-center justify-center text-[#22c55e]/20 transition-all duration-500 ease-out group-hover:-translate-x-2 group-hover:translate-y-2 group-hover:scale-105 z-0">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </div>

                    {/* Layer 2 (Middle) */}
                    <div className="absolute inset-0 rounded border border-[#22c55e]/40 bg-transparent flex items-center justify-center text-[#22c55e]/40 transition-all duration-500 ease-out group-hover:-translate-x-1 group-hover:translate-y-1 group-hover:scale-110 z-10">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </div>

                    {/* Layer 3 (Front) & Neon Sweep */}
                    <div className="absolute inset-0 rounded border border-[#22c55e]/80 bg-[#050505] flex items-center justify-center text-[#22c55e] transition-all duration-500 ease-out group-hover:translate-x-1.5 group-hover:-translate-y-1.5 group-hover:scale-[1.15] group-hover:border-[#22c55e] group-hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] group-active:scale-95 z-20 overflow-hidden">
                      <svg
                        className="w-6 h-6 group-hover:text-white transition-colors duration-500 relative z-30"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>

                      {/* The Neon Light Sweep */}
                      <div className="absolute top-0 -left-[150%] w-full h-full bg-gradient-to-r from-transparent via-[#22c55e]/60 to-transparent skew-x-[-45deg] transition-all duration-700 ease-in-out group-hover:left-[150%] z-20"></div>
                    </div>
                  </div>

                  {/* The Label */}
                  <span className="text-xs bg-black/80 px-2 py-0.5 rounded border border-transparent group-hover:border-[#22c55e]/50 text-[#22c55e]/70 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.8)] text-center transition-all duration-500 tracking-wider group-hover:-translate-y-1">
                    CERTS.dat
                  </span>
                </div>

                {/* --- RESUME.tex (BLUE EDITION) --- */}
                <div
                  className="flex flex-col items-center cursor-pointer group w-24 mb-4"
                  onClick={() => {
                    playAppOpen();
                    setIsResumeWindowOpen((prev) => !prev);
                  }}
                >
                  {/* The 3D Icon Wrapper */}
                  <div className="relative w-12 h-12 mb-3">
                    {/* Layer 1 (Back) */}
                    <div className="absolute inset-0 rounded border border-[#3b82f6]/20 bg-transparent flex items-center justify-center text-[#3b82f6]/20 transition-all duration-500 ease-out group-hover:-translate-x-2 group-hover:translate-y-2 group-hover:scale-105 z-0">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        ></path>
                      </svg>
                    </div>

                    {/* Layer 2 (Middle) */}
                    <div className="absolute inset-0 rounded border border-[#3b82f6]/40 bg-transparent flex items-center justify-center text-[#3b82f6]/40 transition-all duration-500 ease-out group-hover:-translate-x-1 group-hover:translate-y-1 group-hover:scale-110 z-10">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        ></path>
                      </svg>
                    </div>

                    {/* Layer 3 (Front) & Neon Sweep */}
                    <div className="absolute inset-0 rounded border border-[#3b82f6]/80 bg-[#050505] flex items-center justify-center text-[#3b82f6] transition-all duration-500 ease-out group-hover:translate-x-1.5 group-hover:-translate-y-1.5 group-hover:scale-[1.15] group-hover:border-[#3b82f6] group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] group-active:scale-95 z-20 overflow-hidden">
                      <svg
                        className="w-6 h-6 group-hover:text-white transition-colors duration-500 relative z-30"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        ></path>
                      </svg>

                      {/* The Neon Light Sweep */}
                      <div className="absolute top-0 -left-[150%] w-full h-full bg-gradient-to-r from-transparent via-[#3b82f6]/60 to-transparent skew-x-[-45deg] transition-all duration-700 ease-in-out group-hover:left-[150%] z-20"></div>
                    </div>
                  </div>

                  {/* The Label */}
                  <span className="text-xs bg-black/80 px-2 py-0.5 rounded border border-transparent group-hover:border-[#3b82f6]/50 text-[#3b82f6]/70 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)] text-center transition-all duration-500 tracking-wider group-hover:-translate-y-1">
                    RESUME.tex
                  </span>
                </div>
              </div>

              {/* RIGHT SIDE ICONS -> Mobile iOS Grid Row 2 */}
              <div className="absolute top-4 right-4 mt-4 flex flex-col space-y-6 w-24 items-center z-40 max-md:relative max-md:top-auto max-md:right-auto max-md:grid max-md:grid-cols-4 max-md:w-full max-md:px-4 max-md:gap-x-3 max-md:space-y-0 max-md:-mt-4 max-md:[&_span]:hidden max-md:scale-[0.90] max-md:origin-top">
                {/* Mail.conn Desktop Icon */}
                <div
                  className="flex flex-col items-center cursor-pointer group w-24"
                  onClick={() => {
                    playAppOpen();
                    if (isCommsWindowOpen) {
                      setIsCommsWindowOpen(false);
                      setGuiPingStatus("IDLE");
                    } else {
                      setIsCommsWindowOpen(true);
                    }
                  }}
                >
                  {/* The 3D Icon Wrapper */}
                  <div className="relative w-12 h-12 mb-3">
                    {/* Layer 1 (Back) - Pans Down-Right (Reversed) */}
                    <div className="absolute inset-0 rounded border border-[#22c55e]/20 bg-transparent flex items-center justify-center text-[#22c55e]/20 transition-all duration-500 ease-out group-hover:translate-x-2 group-hover:translate-y-2 group-hover:scale-105 z-0">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        ></path>
                      </svg>
                    </div>

                    {/* Layer 2 (Middle) - Pans Slightly Down-Right (Reversed) */}
                    <div className="absolute inset-0 rounded border border-[#22c55e]/40 bg-transparent flex items-center justify-center text-[#22c55e]/40 transition-all duration-500 ease-out group-hover:translate-x-1 group-hover:translate-y-1 group-hover:scale-110 z-10">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        ></path>
                      </svg>
                    </div>

                    {/* Layer 3 (Front) - Pans Up-Left, Glows, and SWEEPS (Reversed) */}
                    <div className="absolute inset-0 rounded border border-[#22c55e]/80 bg-[#050505] flex items-center justify-center text-[#22c55e] transition-all duration-500 ease-out group-hover:-translate-x-1.5 group-hover:-translate-y-1.5 group-hover:scale-[1.15] group-hover:border-[#22c55e] group-hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] group-active:scale-95 z-20 overflow-hidden">
                      <svg
                        className="w-6 h-6 group-hover:text-white transition-colors duration-500 relative z-30"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        ></path>
                      </svg>
                      {/* The Neon Light Sweep */}
                      <div className="absolute top-0 -left-[150%] w-full h-full bg-gradient-to-r from-transparent via-[#22c55e]/60 to-transparent skew-x-[-45deg] transition-all duration-700 ease-in-out group-hover:left-[150%] z-20"></div>
                    </div>
                  </div>

                  {/* The Label */}
                  <span className="text-xs bg-black/80 px-2 py-0.5 rounded border border-transparent group-hover:border-[#22c55e]/50 text-[#22c55e]/70 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.8)] text-center transition-all duration-500 tracking-wider group-hover:-translate-y-1">
                    Mail.conn
                  </span>
                </div>

                {/* Desktop Icon: Journey.log */}
                <div
                  className="flex flex-col items-center cursor-pointer group w-24 mb-4"
                  onClick={() => {
                    playAppOpen();
                    setIsJourneyWindowOpen(true);
                  }}
                >
                  {/* The 3D Icon Wrapper */}
                  <div className="relative w-12 h-12 mb-3">
                    {/* Layer 1 (Back) Pans Down-Right (Reversed) */}
                    <div className="absolute inset-0 rounded border border-[#22c55e]/20 bg-transparent flex items-center justify-center text-[#22c55e]/20 transition-all duration-500 ease-out group-hover:translate-x-2 group-hover:translate-y-2 group-hover:scale-105 z-0">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        ></path>
                      </svg>
                    </div>

                    {/* Layer 2 (Middle) Pans Slightly Down-Right (Reversed) */}
                    <div className="absolute inset-0 rounded border border-[#22c55e]/40 bg-transparent flex items-center justify-center text-[#22c55e]/40 transition-all duration-500 ease-out group-hover:translate-x-1 group-hover:translate-y-1 group-hover:scale-110 z-10">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        ></path>
                      </svg>
                    </div>

                    {/* Layer 3 (Front) Pans Up-Left, Glows, and SWEEPS (Reversed) */}
                    <div className="absolute inset-0 rounded border border-[#22c55e]/80 bg-[#050505] flex items-center justify-center text-[#22c55e] transition-all duration-500 ease-out group-hover:-translate-x-1.5 group-hover:-translate-y-1.5 group-hover:scale-[1.15] group-hover:border-[#22c55e] group-hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] group-active:scale-95 z-20 overflow-hidden">
                      <svg
                        className="w-6 h-6 group-hover:text-white transition-colors duration-500 relative z-30"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        ></path>
                      </svg>
                      {/* The Neon Light Sweep */}
                      <div className="absolute top-0 -left-[150%] w-full h-full bg-gradient-to-r from-transparent via-[#22c55e]/60 to-transparent skew-x-[-45deg] transition-all duration-700 ease-in-out group-hover:left-[150%] z-20"></div>
                    </div>
                  </div>

                  {/* The Label */}
                  <span className="text-xs bg-black/80 px-2 py-0.5 rounded border border-transparent group-hover:border-[#22c55e]/50 text-[#22c55e]/70 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.8)] text-center transition-all duration-500 tracking-wider group-hover:-translate-y-1">
                    Journey.log
                  </span>
                </div>

                {/* Desktop Icon: Education.exe */}
                <div
                  className="flex flex-col items-center cursor-pointer group w-24 mb-4"
                  onClick={() => {
                    playAppOpen();
                    setIsCampusWindowOpen((prev) => !prev);
                  }}
                >
                  {/* The 3D Icon Wrapper */}
                  <div className="relative w-12 h-12 mb-3">
                    {/* Layer 1 (Back) Pans Down-Right (Reversed) */}
                    <div className="absolute inset-0 rounded border border-[#22c55e]/20 bg-transparent flex items-center justify-center text-[#22c55e]/20 transition-all duration-500 ease-out group-hover:translate-x-2 group-hover:translate-y-2 group-hover:scale-105 z-0">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                        ></path>
                      </svg>
                    </div>

                    {/* Layer 2 (Middle) Pans Slightly Down-Right (Reversed) */}
                    <div className="absolute inset-0 rounded border border-[#22c55e]/40 bg-transparent flex items-center justify-center text-[#22c55e]/40 transition-all duration-500 ease-out group-hover:translate-x-1 group-hover:translate-y-1 group-hover:scale-110 z-10">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                        ></path>
                      </svg>
                    </div>

                    {/* Layer 3 (Front) Pans Up-Left, Glows, and SWEEPS (Reversed) */}
                    <div className="absolute inset-0 rounded border border-[#22c55e]/80 bg-[#050505] flex items-center justify-center text-[#22c55e] transition-all duration-500 ease-out group-hover:-translate-x-1.5 group-hover:-translate-y-1.5 group-hover:scale-[1.15] group-hover:border-[#22c55e] group-hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] group-active:scale-95 z-20 overflow-hidden">
                      <svg
                        className="w-6 h-6 group-hover:text-white transition-colors duration-500 relative z-30"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                        ></path>
                      </svg>
                      {/* The Missing Neon Light Sweep */}
                      <div className="absolute top-0 -left-[150%] w-full h-full bg-gradient-to-r from-transparent via-[#22c55e]/60 to-transparent skew-x-[-45deg] transition-all duration-700 ease-in-out group-hover:left-[150%] z-20"></div>
                    </div>
                  </div>

                  {/* The Label */}
                  <span className="text-xs bg-black/80 px-2 py-0.5 rounded border border-transparent group-hover:border-[#22c55e]/50 text-[#22c55e]/70 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.8)] text-center transition-all duration-500 tracking-wider group-hover:-translate-y-1">
                    Education.exe
                  </span>
                </div>

                {/* Desktop Icon: engage.2p (Arcade Fuchsia) */}
                <div
                  className="flex flex-col items-center cursor-pointer group w-24 mb-4"
                  onClick={() => {
                    playAppOpen();
                    setIsEngageWindowOpen(!isEngageWindowOpen);
                  }}
                >
                  <div className="relative w-12 h-12 mb-3">
                    {/* Layer 1 (Back) */}
                    <div className="absolute inset-0 rounded border border-[#d946ef]/20 bg-transparent flex items-center justify-center text-[#d946ef]/20 transition-all duration-500 ease-out group-hover:translate-x-2 group-hover:translate-y-2 group-hover:scale-105 z-0">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </div>
                    {/* Layer 2 (Middle) */}
                    <div className="absolute inset-0 rounded border border-[#d946ef]/40 bg-transparent flex items-center justify-center text-[#d946ef]/40 transition-all duration-500 ease-out group-hover:translate-x-1 group-hover:translate-y-1 group-hover:scale-110 z-10">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </div>
                    {/* Layer 3 (Front & Sweep) */}
                    <div className="absolute inset-0 rounded border border-[#d946ef]/80 bg-[#050505] flex items-center justify-center text-[#d946ef] transition-all duration-500 ease-out group-hover:-translate-x-1.5 group-hover:-translate-y-1.5 group-hover:scale-[1.15] group-hover:border-[#d946ef] group-hover:shadow-[0_0_20px_rgba(217,70,239,0.4)] group-active:scale-95 z-20 overflow-hidden">
                      <svg
                        className="w-6 h-6 group-hover:text-white transition-colors duration-500 relative z-30"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      <div className="absolute top-0 -left-[150%] w-full h-full bg-gradient-to-r from-transparent via-[#d946ef]/60 to-transparent skew-x-[-45deg] transition-all duration-700 ease-in-out group-hover:left-[150%] z-20"></div>
                    </div>
                  </div>
                  <span className="text-xs bg-black/80 px-2 py-0.5 rounded border border-transparent group-hover:border-[#d946ef]/50 text-[#d946ef]/70 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(217,70,239,0.8)] text-center transition-all duration-500 tracking-wider group-hover:-translate-y-1">
                    Engage.2p
                  </span>
                </div>
              </div>

              {/* THE AI PROXY QUOTE (LOCKED IN BACKGROUND) */}
              <div
                className={`hidden md:flex absolute bottom-[180px] left-[20%] sm:left-[27%] flex flex-col items-center pointer-events-none transition-opacity duration-700 z-0 ${
                  !isTerminalFocused && !isArcadeActive
                    ? "opacity-100 delay-500"
                    : "opacity-0"
                }`}
              >
                {/* SVG Arrow Flipped vertically to point Up/Left toward the proxy button */}
                <svg
                  width="40"
                  height="50"
                  viewBox="0 0 50 60"
                  className="stroke-[#22c55e] fill-none mb-1 mr-12 overflow-visible opacity-80 drop-shadow-[0_0_5px_rgba(34,197,94,0.4)] scale-y-[-1]"
                >
                  <path
                    d="M 40 0 C 40 35 40 50 5 55"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 15 45 L 3 57 L 20 60"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <span
                  style={{ fontFamily: "'Caveat', cursive" }}
                  className="text-[#22c55e] text-xl sm:text-2xl rotate-[6deg] tracking-wide drop-shadow-[0_0_8px_rgba(34,197,94,0.4)] whitespace-nowrap"
                >
                  doubts?? ask vAI!
                </span>
              </div>

              {/* --- THE MAIL.CONN QUOTE (TOP RIGHT DESKTOP) --- */}
              <div
                className={`hidden md:flex absolute top-[80px] right-[120px] flex items-center pointer-events-none transition-opacity duration-700 z-0 ${
                  !isTerminalFocused && !isArcadeActive
                    ? "opacity-100 delay-500"
                    : "opacity-0"
                }`}
              >
                <span
                  style={{ fontFamily: "'Caveat', cursive" }}
                  className="text-[#22c55e] text-xl sm:text-2xl rotate-[-4deg] tracking-wide drop-shadow-[0_0_8px_rgba(34,197,94,0.4)] whitespace-nowrap mr-2"
                >
                  Found a bug or got ideas? Drop a ping!
                </span>

                {/* SVG Arrow Pointing Up-Right Toward Mail.conn Icon */}
                <svg
                  width="50"
                  height="40"
                  viewBox="0 0 50 40"
                  className="stroke-[#22c55e] fill-none opacity-80 drop-shadow-[0_0_5px_rgba(34,197,94,0.4)] ml-1"
                >
                  {/* Curve starting higher, directly off the '!' */}
                  <path
                    d="M 2 12 Q 25 18, 44 6"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  {/* Arrowhead snapped to the new end point */}
                  <path
                    d="M 30 6 L 46 5 L 44 20"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* --- THE MITOCHONDRIA QUOTE (LOCKED IN BACKGROUND) --- */}
              <link
                href="https://fonts.googleapis.com/css2?family=Caveat:wght@600&display=swap"
                rel="stylesheet"
              />
              <div
                className={`hidden md:flex absolute bottom-[90px] right-[20%] sm:right-[27%] flex flex-col items-center pointer-events-none transition-opacity duration-700 z-0 ${
                  !isTerminalFocused && !isArcadeActive
                    ? "opacity-100 delay-500"
                    : "opacity-0"
                }`}
              >
                <span
                  style={{ fontFamily: "'Caveat', cursive" }}
                  className="text-[#22c55e] text-xl sm:text-2xl rotate-[-8deg] tracking-wide drop-shadow-[0_0_8px_rgba(34,197,94,0.4)]"
                >
                  "CLI is the powerhouse of my OS"
                </span>
                {/* Static SVG Arrow - Flipped to point Left/Down toward the prompt */}
                <svg
                  width="40"
                  height="50"
                  viewBox="0 0 50 60"
                  className="stroke-[#22c55e] fill-none mt-1 mr-12 overflow-visible opacity-80 drop-shadow-[0_0_5px_rgba(34,197,94,0.4)] scale-x-[1]"
                >
                  <path
                    d="M 40 0 Q 35 40 5 55"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 15 45 L 3 57 L 20 60"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* IDENTITY PROFILE WINDOW (Upgraded with Drag Physics) */}
              {isIdentityWindowOpen && (
                <Rnd
                  size={{
                    width: identityConfig.width,
                    height: identityConfig.height,
                  }}
                  position={{ x: identityConfig.x, y: identityConfig.y }}
                  onDragStop={(e, d) => {
                    setIdentityConfig((prev) => ({ ...prev, x: d.x, y: d.y }));
                  }}
                  onResizeStop={(e, direction, ref, delta, position) => {
                    setIdentityConfig({
                      width: ref.style.width,
                      height: ref.style.height,
                      x: position.x,
                      y: position.y,
                    });
                  }}
                  minWidth={290}
                  minHeight={385}
                  bounds="parent"
                  dragHandleClassName="drag-handle"
                  className="absolute z-40"
                >
                  <div className="w-full h-full bg-black border border-[#22c55e]/50 shadow-[0_0_30px_rgba(34,197,94,0.15)] flex flex-col">
                    {/* Window Header (The Drag Handle) */}
                    <div className="drag-handle h-8 bg-[#22c55e]/10 border-b border-[#22c55e]/50 flex items-center justify-between px-3 cursor-move hover:bg-[#22c55e]/20 transition-colors">
                      <span className="text-xs font-bold text-[#22c55e]">
                        /sys/users/vadanta_root
                      </span>
                      <button
                        onClick={() => setIsIdentityWindowOpen(false)}
                        className="text-[#22c55e] hover:text-[#ff3333] hover:bg-[#ff3333]/10 px-2 py-0.5 rounded transition-all duration-200 text-xs font-bold"
                      >
                        [X]
                      </button>
                    </div>

                    {/* Window Content */}
                    <div className="p-4 bg-black/90 cursor-default flex-1 flex items-center justify-center overflow-hidden">
                      <TerminalProfile themeHue={themeHue} />
                    </div>
                  </div>
                </Rnd>
              )}

              {/* --- PROJECTS.dir WINDOW --- */}
              {isProjectsWindowOpen && (
                <Rnd
                  size={{
                    width: projectsConfig.width,
                    height: projectsConfig.height,
                  }}
                  position={{ x: projectsConfig.x, y: projectsConfig.y }}
                  onDragStop={(e, d) => {
                    setProjectsConfig((prev) => ({ ...prev, x: d.x, y: d.y }));
                  }}
                  onResizeStop={(e, direction, ref, delta, position) => {
                    setProjectsConfig({
                      width: parseInt(ref.style.width, 10),
                      height: parseInt(ref.style.height, 10),
                      x: position.x,
                      y: position.y,
                    });
                  }}
                  minWidth={450}
                  minHeight={350}
                  bounds="parent"
                  dragHandleClassName="projects-drag-handle"
                  className="z-[60]"
                >
                  <div className="w-full h-full bg-[#050505]/95 border border-[#22c55e]/50 rounded shadow-[0_0_30px_rgba(34,197,94,0.15)] flex flex-col overflow-hidden backdrop-blur-md">
                    {/* Title Bar */}
                    <div className="projects-drag-handle w-full h-8 bg-[#22c55e]/10 border-b border-[#22c55e]/30 flex items-center justify-between px-3 cursor-move">
                      <span className="text-[#22c55e] font-bold text-xs tracking-widest">
                        /sys/users/vadanta/PROJECTS.dir
                      </span>
                      <button
                        onClick={() => setIsProjectsWindowOpen(false)}
                        className="text-[#22c55e] hover:text-[#ff3333] hover:bg-[#ff3333]/10 px-2 py-0.5 rounded transition-all duration-200 text-xs font-bold"
                      >
                        [X]
                      </button>
                    </div>

                    {/* Projects Content Area */}
                    <div className="flex-1 p-5 overflow-y-auto custom-scrollbar">
                      <div className="text-xs opacity-70 mb-4 tracking-widest border-b border-[#22c55e]/20 pb-2 text-[#22c55e]">
                        EXECUTABLE_ARCHIVES [7 ITEMS]
                      </div>

                      <div className="flex flex-col space-y-4">
                        {projectsData.map((project) => (
                          <div
                            key={project.id}
                            className="group flex flex-col p-4 border border-[#22c55e]/20 bg-black/40 hover:bg-[#22c55e]/5 hover:border-[#22c55e]/50 border-l-2 border-l-transparent hover:border-l-[#22c55e] transition-all rounded relative overflow-hidden"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-bold text-sm text-[#22c55e] group-hover:text-white transition-colors">
                                {project.name}
                              </span>
                              <span className="text-[10px] uppercase tracking-widest text-[#22c55e] opacity-60 bg-[#22c55e]/10 px-2 py-0.5 rounded border border-[#22c55e]/20">
                                {project.tech}
                              </span>
                            </div>
                            <span className="text-xs text-[#22c55e] opacity-70 leading-relaxed pr-24">
                              {project.desc}
                            </span>

                            {/* Interactive Open Repo Button */}
                            {project.link !== "#" && (
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute bottom-4 right-4 text-[10px] font-bold tracking-widest text-[#22c55e] border border-[#22c55e]/50 px-2 py-1 rounded hover:bg-[#22c55e] hover:text-black transition-all opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
                              >
                                [&gt; OPEN_REPO]
                              </a>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Rnd>
              )}

              {/* --- CERTS.dat WINDOW --- */}
              {isCertsWindowOpen && (
                <Rnd
                  size={{
                    width: certsConfig.width,
                    height: certsConfig.height,
                  }}
                  position={{ x: certsConfig.x, y: certsConfig.y }}
                  onDragStop={(e, d) =>
                    setCertsConfig((prev) => ({ ...prev, x: d.x, y: d.y }))
                  }
                  onResizeStop={(e, direction, ref, delta, position) => {
                    setCertsConfig({
                      width: parseInt(ref.style.width, 10),
                      height: parseInt(ref.style.height, 10),
                      x: position.x,
                      y: position.y,
                    });
                  }}
                  minWidth={750}
                  minHeight={500}
                  bounds="parent"
                  dragHandleClassName="certs-drag-handle"
                  className="z-[60]"
                >
                  <div className="w-full h-full bg-[#050505]/95 border border-[#22c55e]/50 rounded shadow-[0_0_30px_rgba(34,197,94,0.15)] flex flex-col overflow-hidden backdrop-blur-md">
                    {/* Title Bar */}
                    <div className="certs-drag-handle w-full h-8 bg-[#22c55e]/10 border-b border-[#22c55e]/30 flex items-center justify-between px-3 cursor-move">
                      <span className="text-[#22c55e] font-bold text-xs tracking-widest">
                        /sys/users/vadanta/CERTS.dat
                      </span>
                      <button
                        onClick={() => setIsCertsWindowOpen(false)}
                        className="text-[#22c55e] hover:text-[#ff3333] hover:bg-[#ff3333]/10 px-2 py-0.5 rounded transition-all duration-200 text-xs font-bold"
                      >
                        [X]
                      </button>
                    </div>

                    {/* Vault Content Area */}
                    <div className="flex-1 p-5 overflow-y-auto custom-scrollbar">
                      <div className="text-xs opacity-70 mb-5 tracking-widest border-b border-[#22c55e]/20 pb-2 text-[#22c55e]">
                        SECURE_VAULT // DECRYPTED_RECORDS
                      </div>

                      <div className="flex flex-col gap-6">
                        {/* CATEGORY 1: FEATURED */}
                        <div>
                          <div className="text-[10px] text-[#22c55e]/60 tracking-widest mb-3 uppercase">
                            [{">"}] Level 1: Featured_Credentials
                          </div>
                          <div className="grid grid-cols-1 gap-2">
                            {[
                              {
                                name: "Generative AI Professional",
                                issuer: "Oracle",
                                path: "/milestones/Oracle_GenAI.png",
                              },
                              {
                                name: "Technology Job Simulation",
                                issuer: "Deloitte",
                                path: "/milestones/Deloitte_TechnologyJobSimulation.png",
                              },
                              {
                                name: "Hackdays Hackathon",
                                issuer: "Hackdays",
                                path: "/milestones/Hackathon_01_Hackdays.png",
                              },
                              {
                                name: "Student Ambassador Program",
                                issuer: "Google",
                                path: "/milestones/Google_StudentAmbassador.png",
                              },
                            ].map((cert, idx) => (
                              <div
                                key={idx}
                                className="group flex justify-between items-center border border-[#22c55e]/20 bg-black/40 p-3 rounded hover:border-[#22c55e]/60 hover:bg-[#22c55e]/5 transition-all"
                              >
                                <div className="flex flex-col">
                                  <span className="text-[#22c55e] font-bold text-sm group-hover:text-white transition-colors">
                                    {cert.name}
                                  </span>
                                  <span className="text-[#22c55e]/60 text-[10px] tracking-widest uppercase mt-1">
                                    ISSUER: {cert.issuer}
                                  </span>
                                </div>
                                <button
                                  onClick={() => {
                                    playAppOpen(); // Standard click confirm
                                    playScanner(); // Start the scanning audio

                                    setActiveCert({
                                      name: cert.name,
                                      path: cert.path,
                                    });
                                    setIsDecrypting(true);

                                    // Exactly 3 seconds (3000ms)
                                    setTimeout(() => {
                                      setIsDecrypting(false);
                                      stopScanner(); // Cut the scanner audio
                                    }, 2000);
                                  }}
                                  className="text-[9px] border border-[#22c55e]/40 px-2 py-1 rounded text-[#22c55e] hover:bg-[#22c55e] hover:text-black font-bold tracking-widest transition-all"
                                >
                                  [ DECRYPT ]
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* CATEGORY 2: AI & CORE TECH */}
                        <div>
                          <div className="text-[10px] text-[#22c55e]/60 tracking-widest mb-3 uppercase">
                            [{">"}] Level 2: AI & Core_Technical
                          </div>
                          <div className="flex flex-col gap-3 border-l-2 border-[#22c55e]/30 pl-3">
                            <div className="group">
                              <div className="text-[#22c55e] font-bold text-xs mb-2 group-hover:text-white transition-colors">
                                AI & Modern Developer Workflows (Wilco)
                              </div>
                              <div className="flex gap-2 flex-wrap">
                                {[
                                  {
                                    name: "Prompt Engineering",
                                    path: "/milestones/WilcoLabs/prompt_engineering.png",
                                  },
                                  {
                                    name: "Copilot Integration",
                                    path: "/milestones/WilcoLabs/copilot_integration.png",
                                  },
                                  {
                                    name: "Magic Quest",
                                    path: "/milestones/WilcoLabs/magic_quest.png",
                                  },
                                  {
                                    name: "Code Smarter",
                                    path: "/milestones/WilcoLabs/code-smarter.png",
                                  },
                                ].map((cert, i) => (
                                  <button
                                    key={i}
                                    onClick={() => {
                                      setActiveCert({
                                        name: cert.name,
                                        path: cert.path,
                                      });
                                      setIsDecrypting(true);
                                      setTimeout(
                                        () => setIsDecrypting(false),
                                        2000,
                                      );
                                    }}
                                    className="text-[9px] text-[#22c55e]/70 bg-[#22c55e]/10 border border-[#22c55e]/20 px-1.5 py-0.5 rounded uppercase tracking-wider cursor-pointer hover:bg-[#22c55e] hover:text-black hover:font-bold transition-all"
                                  >
                                    {cert.name}
                                  </button>
                                ))}
                              </div>
                            </div>

                            <div className="group">
                              <div className="text-[#22c55e] font-bold text-xs mb-2 group-hover:text-white transition-colors">
                                HackerRank & freeCodeCamp
                              </div>
                              <div className="flex gap-2 flex-wrap">
                                {[
                                  {
                                    name: "Basic Problem Solving",
                                    path: "/milestones/HackerRank_PS_Basic.png",
                                  },
                                  {
                                    name: "JavaScript Basic",
                                    path: "/milestones/HackerRank_Js_Basic.png",
                                  },
                                  {
                                    name: "Legacy Responsive Web Design",
                                    path: "/milestones/FreeCodeCamp_WebDesignV8.png",
                                  },
                                ].map((cert, i) => (
                                  <button
                                    key={i}
                                    onClick={() => {
                                      setActiveCert({
                                        name: cert.name,
                                        path: cert.path,
                                      });
                                      setIsDecrypting(true);
                                      setTimeout(
                                        () => setIsDecrypting(false),
                                        2000,
                                      );
                                    }}
                                    className="text-[9px] text-[#22c55e]/70 bg-[#22c55e]/10 border border-[#22c55e]/20 px-1.5 py-0.5 rounded uppercase tracking-wider cursor-pointer hover:bg-[#22c55e] hover:text-black hover:font-bold transition-all"
                                  >
                                    {cert.name}
                                  </button>
                                ))}
                              </div>
                            </div>

                            <div className="group">
                              <div className="text-[#22c55e] font-bold text-xs mb-2 group-hover:text-white transition-colors">
                                Frontend Foundations (SimpliLearn)
                              </div>
                              <div className="flex gap-2 flex-wrap">
                                {[
                                  {
                                    name: "HTML",
                                    path: "/milestones/SimpliLearn_HTML.png",
                                  },
                                  {
                                    name: "CSS",
                                    path: "/milestones/SimpliLearn_CSS.png",
                                  },
                                  {
                                    name: "React",
                                    path: "/milestones/SimpliLearn_React.png",
                                  },
                                ].map((cert, i) => (
                                  <button
                                    key={i}
                                    onClick={() => {
                                      setActiveCert({
                                        name: cert.name,
                                        path: cert.path,
                                      });
                                      setIsDecrypting(true);
                                      setTimeout(
                                        () => setIsDecrypting(false),
                                        2000,
                                      );
                                    }}
                                    className="text-[9px] text-[#22c55e]/70 bg-[#22c55e]/10 border border-[#22c55e]/20 px-1.5 py-0.5 rounded uppercase tracking-wider cursor-pointer hover:bg-[#22c55e] hover:text-black hover:font-bold transition-all"
                                  >
                                    {cert.name}
                                  </button>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* CATEGORY 3: COMPETITIONS */}
                        <div>
                          <div className="text-[10px] text-[#22c55e]/60 tracking-widest mb-3 uppercase">
                            [{">"}] Level 3: Hackathons & Community
                          </div>
                          <div className="flex flex-col gap-2">
                            {[
                              {
                                name: "CodeChef: Clash of Coders",
                                path: "/milestones/Codechef_ClashOfCoders.jpg",
                              },
                              {
                                name: "IIT Roorkee E-Cell: Participation",
                                path: "/milestones/IITRoorkie_Ecell.png",
                              },
                              {
                                name: "HackerRank Events: CodeWizard",
                                path: "/milestones/Hackerran_CodeWizard.png",
                              },
                            ].map((event, idx) => (
                              <button
                                key={idx}
                                onClick={() => {
                                  setActiveCert({
                                    name: event.name,
                                    path: event.path,
                                  });
                                  setIsDecrypting(true);
                                  setTimeout(
                                    () => setIsDecrypting(false),
                                    2000,
                                  );
                                }}
                                className="flex items-center gap-3 text-xs text-[#22c55e]/80 hover:text-black hover:bg-[#22c55e] hover:font-bold transition-all bg-black/30 p-2 rounded border border-transparent hover:border-[#22c55e]"
                              >
                                <span className="opacity-50">&gt;&gt;</span>
                                <span>{event.name}</span>
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Rnd>
              )}

              {/* --- DECRYPTION INSPECTOR (TACTICAL HUD) --- */}
              {activeCert && (
                <div className="absolute inset-0 z-[70] flex items-center justify-center p-8 bg-black/60 backdrop-blur-sm">
                  <div className="relative w-full max-w-4xl h-full max-h-[80vh] flex flex-col">
                    {/* HUD Corners (Sniper Scope Aesthetics) */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#22c55e] z-10"></div>
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#22c55e] z-10"></div>
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#22c55e] z-10"></div>
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#22c55e] z-10"></div>

                    {/* Close Button Override */}
                    <button
                      onClick={() => setActiveCert(null)}
                      className="absolute -top-10 right-0 text-[#22c55e] border border-[#22c55e]/50 px-4 py-1 hover:bg-red-600/80 hover:text-white hover:border-red-500 transition-colors font-mono text-xs tracking-widest z-20"
                    >
                      [ ABORT_INSPECTION ]
                    </button>

                    {/* The Sequence */}
                    {isDecrypting ? (
                      <div className="flex-1 bg-[#050505]/95 border border-[#22c55e]/30 shadow-[0_0_50px_rgba(34,197,94,0.2)] flex flex-col items-center justify-center relative overflow-hidden">
                        {/* Scanning Laser Line */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-[#22c55e] opacity-50 shadow-[0_0_20px_#22c55e] animate-[scan_2s_ease-in-out_infinite]"></div>

                        {/* Hacking Terminal Output */}
                        <div className="font-mono text-center">
                          <div className="text-red-500 text-xl font-bold tracking-widest mb-4 animate-pulse">
                            &gt;&gt; BRUTE_FORCING_ENCRYPTION_KEY...
                          </div>
                          <div className="text-[#22c55e]/70 text-xs text-left w-64 mx-auto space-y-1">
                            <div>[ SYS ] TARGET: {activeCert.name}</div>
                            <div>
                              [ SYS ] INJECTING PAYLOAD...{" "}
                              <span className="text-white">OK</span>
                            </div>
                            <div>
                              [ SYS ] BYPASSING FIREWALL...{" "}
                              <span className="text-white animate-ping inline-block">
                                _
                              </span>
                            </div>
                            <div className="w-full h-1 bg-gray-800 mt-4 rounded overflow-hidden">
                              <div className="h-full bg-red-500 w-full animate-[shrink_2s_linear_forwards]"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex-1 min-h-0 overflow-hidden bg-black/90 border border-[#22c55e] shadow-[0_0_60px_rgba(34,197,94,0.3)] p-2 animate-[fadeIn_0.3s_ease-out] flex items-center justify-center">
                        {/* Pure Image Renderer - Flexbox Lock Applied */}
                        <img
                          src={activeCert.path}
                          alt={activeCert.name}
                          className="w-full h-full max-w-full max-h-full object-contain opacity-90 hover:opacity-100 transition-opacity"
                          style={{ filter: `hue-rotate(-${themeHue}deg)` }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* RESUME.tex EDITOR WINDOW */}
              {isResumeWindowOpen && (
                <Rnd
                  default={{
                    x: window.innerWidth > 640 ? 150 : 20,
                    y: 40,
                    width: 1000, // <-- MASSIVE WIDTH UPGRADE
                    height: 650,
                  }}
                  minWidth={600}
                  bounds="parent"
                  dragHandleClassName="resume-drag-handle"
                  className="absolute z-50"
                >
                  <div className="w-full h-full bg-[#0d1117] border border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.15)] flex flex-col">
                    {/* Window Header */}
                    <div className="resume-drag-handle h-8 bg-blue-500/10 border-b border-blue-500/50 flex items-center justify-between px-3 cursor-move hover:bg-blue-500/20 transition-colors">
                      <span className="text-xs font-bold text-blue-500">
                        {isPdfCompiled
                          ? "evince ~/documents/RESUME.pdf"
                          : "vim ~/documents/RESUME.tex"}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsResumeWindowOpen(false);
                          // Optional: Reset compilation state when closed
                          setIsPdfCompiled(false);
                          setCompileStatus("Status: Uncompiled raw source");
                        }}
                        className="text-blue-500/70 hover:text-red-500 font-bold transition-colors cursor-pointer"
                      >
                        [X]
                      </button>
                    </div>

                    {/* Toolbar */}
                    <div className="flex items-center justify-between px-4 py-2 border-b border-slate-800 bg-black/50">
                      {/* Left Side: Compile Controls */}
                      <div className="flex items-center">
                        <button
                          onClick={handleCompile}
                          disabled={isPdfCompiled}
                          className={`text-[10px] font-bold px-3 py-1 transition-all ${isPdfCompiled ? "bg-green-600/20 text-green-400 border border-green-500/50 cursor-default" : "bg-blue-600/20 text-blue-400 border border-blue-500/50 hover:bg-blue-600 hover:text-white cursor-pointer"}`}
                        >
                          {isPdfCompiled
                            ? "> PDF_GENERATED"
                            : "> COMPILE_TO_PDF"}
                        </button>
                        <span
                          className={`ml-4 text-[10px] ${isPdfCompiled ? "text-green-500" : "text-slate-500 animate-pulse"}`}
                        >
                          {compileStatus}
                        </span>
                      </div>

                      {/* Right Side: External Actions (Appears after compile) */}
                      {isPdfCompiled && (
                        <div className="flex animate-fade-in">
                          <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[10px] font-bold px-3 py-1 bg-transparent text-blue-400 border border-blue-500/50 hover:bg-blue-500 hover:text-black transition-all cursor-pointer flex items-center"
                          >
                            [ OPEN_EXTERNALLY ]
                            <svg
                              className="w-3 h-3 ml-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              ></path>
                            </svg>
                          </a>
                        </div>
                      )}
                    </div>

                    {/* Content Area: Raw Code OR Compiled PDF */}
                    <div className="flex-grow bg-[#0d1117] relative shadow-inner h-full overflow-hidden">
                      {!isPdfCompiled ? (
                        <div className="w-full h-full overflow-auto">
                          <SyntaxHighlighter
                            language="latex"
                            style={atomDark}
                            customStyle={{
                              margin: 0,
                              padding: "1rem",
                              background: "transparent",
                              fontSize: "0.85rem",
                            }}
                            wrapLines={true}
                          >
                            {resumeTexCode}
                          </SyntaxHighlighter>
                        </div>
                      ) : (
                        <div className="w-full h-full bg-white flex items-center justify-center animate-fade-in">
                          <iframe
                            src="/resume.pdf"
                            className="w-full h-full border-none"
                            title="Vadanta Resume PDF"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </Rnd>
              )}
            </div>

            {/* --- TERMINAL COMMAND LINE & DUAL HUD ARCHITECTURE --- */}
            <div className="absolute left-0 right-0 bottom-0 z-[70] pointer-events-none">
              {/* 1. FLOATING GITHUB HUD (Visible ONLY when CLI is closed & Arrow is clicked) */}
              <div
                className={`max-md:hidden absolute right-4 bottom-[56px] w-[340px] bg-[#050505]/95 backdrop-blur-md border border-[#22c55e]/30 shadow-[0_0_20px_rgba(34,197,94,0.15)] rounded-lg p-5 flex flex-col pointer-events-auto transition-all duration-500 origin-bottom-right ${
                  !isTerminalFocused && isHudOpen
                    ? "opacity-100 scale-100 translate-y-0"
                    : "opacity-0 scale-95 translate-y-4 pointer-events-none"
                }`}
              >
                <div className="flex items-center justify-between border-b border-[#22c55e]/20 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-[#22c55e] animate-pulse"></div>
                    <span className="text-[#22c55e] text-[10px] font-bold tracking-[0.2em]">
                      GITHUB.NET // UPLINK
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[#22c55e]/40 text-[9px]">
                      [FLOATING]
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-4 overflow-y-auto no-scrollbar max-h-[35vh] pr-1">
                  {recentCommits.map((commit, i) => (
                    <div
                      key={`float-${i}`}
                      className="group relative pl-4 border-l-2 border-[#22c55e]/20 hover:border-[#22c55e] transition-colors duration-300"
                    >
                      <div className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-sm bg-[#050505] border border-[#22c55e] group-hover:bg-[#22c55e] transition-colors duration-300 shadow-[0_0_8px_rgba(34,197,94,0)] group-hover:shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div>
                      <div className="text-[10px] text-[#22c55e]/60 mb-1 font-bold tracking-wider flex items-center justify-between">
                        <span className="truncate pr-2">{commit.repo}</span>
                        <span className="text-[#22c55e] shrink-0">
                          [{commit.hash}]
                        </span>
                      </div>
                      <div className="text-[#22c55e]/90 text-[11px] leading-relaxed">
                        &gt; {commit.msg}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="w-full flex items-center justify-between mt-5 pt-3 border-t border-[#22c55e]/10">
                  <span className="text-[9px] text-[#22c55e]/40 tracking-widest">
                    ENCRYPTED_CHANNEL
                  </span>
                  <span className="text-[9px] text-[#22c55e]/40">SECURE</span>
                </div>
              </div>

              {/* 2. MAIN TERMINAL BAR (iOS/Android Floating Dock) */}
              <div
                className={`absolute w-full font-mono text-xs transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden pointer-events-auto flex flex-col justify-end ${
                  isArcadeActive || isArcadeMounting
                    ? "bottom-0 h-[100dvh] bg-[#050505] z-[9999]"
                    : isTerminalFocused
                      ? "bottom-0 bg-[#050505]/95 backdrop-blur-xl border-t border-[#22c55e]/30 shadow-[0_0_30px_rgba(34,197,94,0.2)] z-[80] max-md:fixed max-md:inset-x-0 max-md:bottom-0 max-md:top-[32px] max-md:h-[calc(100dvh-32px)] max-md:w-full max-md:m-0 max-md:rounded-none max-md:border-0 max-md:z-[9999] max-md:pb-2"
                      : "bottom-0 bg-[#050505]/60 backdrop-blur-sm border-t border-[#22c55e]/10 shadow-none z-[80] max-md:bottom-[85px] max-md:h-14 max-md:w-[calc(100%-32px)] max-md:mx-4 max-md:rounded-2xl max-md:border max-md:border-[#22c55e]/30 max-md:bg-[#050505]/40"
                }`}
              >
                {/* Idle Clue & Toggle Arrow Container (Hidden on Mobile) */}
                <div className="absolute right-4 bottom-0 h-[44px] flex items-center gap-4 z-[75] max-md:hidden">
                  <div
                    className={`flex items-center gap-2 text-[#22c55e]/50 transition-all duration-500 ${
                      isTerminalFocused
                        ? "opacity-0 translate-x-4 pointer-events-none"
                        : "opacity-100 translate-x-0"
                    }`}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#22c55e] animate-ping"></span>
                    <span className="text-[10px] tracking-widest hidden sm:block">
                      SYS_SYNC // RECENT: [{recentCommits[0]?.hash}]{" "}
                      {recentCommits[0]?.repo}
                    </span>
                  </div>

                  {/* Arrow Button - Hides when CLI is focused */}
                  <button
                    onClick={() => setIsHudOpen(!isHudOpen)}
                    className={`text-[#22c55e]/50 hover:text-[#22c55e] hover:bg-[#22c55e]/10 p-1.5 rounded transition-all cursor-pointer pointer-events-auto border border-transparent hover:border-[#22c55e]/30 ${
                      isTerminalFocused
                        ? "opacity-0 scale-50 pointer-events-none"
                        : "opacity-100 scale-100"
                    }`}
                  >
                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${isHudOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M5 15l7-7 7 7"
                      ></path>
                    </svg>
                  </button>
                </div>

                {/* INTEGRATED GITHUB HUD (Visible ONLY when CLI is focused) */}
                <div
                  className={`max-md:hidden absolute right-0 top-0 bottom-0 w-[340px] border-l border-[#22c55e]/20 bg-gradient-to-r from-transparent to-[#050505]/80 p-5 flex flex-col justify-end transition-all duration-700 delay-100 ${
                    isTerminalFocused && !isArcadeActive
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-12 pointer-events-none"
                  }`}
                >
                  <div className="flex items-center justify-between border-b border-[#22c55e]/20 pb-3 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 bg-[#22c55e] animate-pulse"></div>
                      <span className="text-[#22c55e] text-[10px] font-bold tracking-[0.2em]">
                        GITHUB.NET // UPLINK
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[#22c55e]/40 text-[9px]">
                        [INTEGRATED]
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 overflow-y-auto no-scrollbar max-h-[35vh] pr-1">
                    {recentCommits.map((commit, i) => (
                      <div
                        key={`int-${i}`}
                        className="group relative pl-4 border-l-2 border-[#22c55e]/20 hover:border-[#22c55e] transition-colors duration-300"
                      >
                        <div className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-sm bg-[#050505] border border-[#22c55e] group-hover:bg-[#22c55e] transition-colors duration-300 shadow-[0_0_8px_rgba(34,197,94,0)] group-hover:shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div>
                        <div className="text-[10px] text-[#22c55e]/60 mb-1 font-bold tracking-wider flex items-center justify-between">
                          <span className="truncate pr-2">{commit.repo}</span>
                          <span className="text-[#22c55e] shrink-0">
                            [{commit.hash}]
                          </span>
                        </div>
                        <div className="text-[#22c55e]/90 text-[11px] leading-relaxed">
                          &gt; {commit.msg}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="w-full flex items-center justify-between mt-5 pt-3 border-t border-[#22c55e]/10">
                    <span className="text-[9px] text-[#22c55e]/40 tracking-widest">
                      ENCRYPTED_CHANNEL
                    </span>
                    <span className="text-[9px] text-[#22c55e]/40">SECURE</span>
                  </div>
                </div>

                {/* 3. TERMINAL CHAT AREA */}
                <div
                  className={`w-full h-full px-4 py-3 flex flex-col justify-end transition-all duration-700 ${
                    isTerminalFocused ? "max-md:pt-[65px]" : ""
                  } ${
                    isTerminalFocused && !isArcadeActive
                      ? "pr-[360px] max-md:pr-4"
                      : "pr-4"
                  }`}
                >
                  {isArcadeActive ? (
                    <TerminalArcade
                      onExit={() => {
                        setIsArcadeActive(false);
                        setIsArcadeMounting(false);
                        setTerminalHistory((prev) => [
                          ...prev,
                          {
                            type: "output",
                            text: "[SYSTEM] SYS_ARCADE TERMINATED. SYSTEM NORMALIZED.",
                          },
                        ]);
                        setTimeout(
                          () => terminalInputRef.current?.focus(),
                          800,
                        );
                      }}
                    />
                  ) : (
                    <>
                      {/* MOBILE ONLY: Opened Terminal Commit Header */}
                      {isTerminalFocused && (
                        <div className="hidden max-md:flex absolute top-0 left-0 w-full shrink-0 px-4 py-3 border-b border-[#22c55e]/30 bg-[#050505]/95 backdrop-blur-md z-10 items-center justify-between gap-3">
                          <div className="flex-1 flex items-center gap-2 text-[#22c55e]/70 text-[10px] tracking-widest uppercase truncate">
                            <span className="w-1.5 h-1.5 bg-[#22c55e] animate-pulse rounded-full shrink-0"></span>
                            <span className="truncate">
                              COMMIT [{recentCommits[0]?.hash || "SYS_OK"}]:{" "}
                              {recentCommits[0]?.msg || "System initialized."}
                            </span>
                          </div>

                          <button
                            onClick={() => {
                              setIsTerminalFocused(false);
                              terminalInputRef.current?.blur();
                              setTimeout(() => window.scrollTo(0, 0), 100);
                            }}
                            className="text-[#22c55e] border border-[#22c55e]/50 bg-[#22c55e]/10 px-3 py-1.5 rounded text-[9px] font-black tracking-widest shrink-0 transition-colors active:bg-[#22c55e] active:text-black"
                          >
                            CLOSE
                          </button>
                        </div>
                      )}

                      {/* SCROLLING HISTORY */}
                      <div
                        ref={terminalScrollRef}
                        className={`overflow-y-auto flex flex-col pr-2 transition-all duration-500 ease-in-out ${
                          isTerminalFocused
                            ? "opacity-100 max-h-[40vh] max-md:max-h-full max-md:min-h-0 mb-3 max-md:px-2"
                            : "opacity-0 max-h-0 mb-0"
                        }`}
                      >
                        {terminalHistory.map((line, index) => (
                          <div
                            key={index}
                            className="border-b border-[#22c55e]/15 pb-2 mb-2 last:border-0 last:pb-0 last:mb-0 flex flex-col gap-1"
                          >
                            {line.type === "input" ? (
                              <div className="text-[#22c55e] font-bold">
                                {line.text}
                              </div>
                            ) : (
                              <div className="text-gray-300 pl-2 leading-relaxed whitespace-pre-wrap drop-shadow-sm">
                                {line.text}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>

                      {/* --- DESKTOP & MOBILE-OPEN INPUT (The Real Input) --- */}
                      <div
                        className={`flex items-center justify-between gap-2 text-[#22c55e] shrink-0 h-6 max-md:px-3 max-md:mb-1 ${!isTerminalFocused ? "max-md:hidden" : ""}`}
                      >
                        <div className="flex items-center flex-1 min-w-0">
                          <span className="text-white/90 font-bold tracking-wider text-[12px] mr-[3px]">
                            {terminalMode === "NORMAL"
                              ? "root@vadanta:~"
                              : terminalMode === "PING_EMAIL"
                                ? "Email:"
                                : "Message:"}
                          </span>
                          <input
                            ref={terminalInputRef}
                            type="text"
                            value={terminalInput}
                            onChange={(e) => setTerminalInput(e.target.value)}
                            onKeyDown={(e) => {
                              playKeystroke();
                              handleTerminalSubmit(e);
                            }}
                            onFocus={() => setIsTerminalFocused(true)}
                            onBlur={() => {
                              if (window.innerWidth >= 768)
                                setIsTerminalFocused(false);
                              setTimeout(() => {
                                window.scrollTo(0, 0);
                                document.body.scrollTop = 0;
                              }, 100);
                            }}
                            className="bg-transparent border-none outline-none flex-1 text-[#22c55e] font-black text-[16px] md:text-[14px] focus:text-[#4ade80] placeholder-transparent md:placeholder-[#22c55e]/40 focus:ring-0 transition-colors"
                            placeholder=" Type a command..."
                            spellCheck="false"
                          />
                        </div>
                        {/* The "commit" text floating on the right during typing */}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            playKeystroke();
                            handleTerminalSubmit({ key: "Enter" });
                          }}
                          onTouchStart={(e) => {
                            e.preventDefault();
                            playKeystroke();
                            handleTerminalSubmit({ key: "Enter" });
                          }}
                          className="hidden max-md:flex items-center justify-center text-[10px] uppercase tracking-widest text-[#22c55e] border border-[#22c55e]/40 bg-[#22c55e]/10 px-3 py-1.5 rounded active:bg-[#22c55e] active:text-black transition-colors shrink-0 font-bold"
                        >
                          ENTER
                        </button>
                      </div>

                      {/* --- MOBILE CLOSED DOCK FACE (The Sleek Widget) --- */}
                      {!isTerminalFocused && (
                        <div
                          className="hidden max-md:flex items-center justify-between w-full h-full px-3 cursor-pointer pointer-events-auto"
                          onClick={() => {
                            setIsTerminalFocused(true);
                            setTimeout(
                              () => terminalInputRef.current?.focus(),
                              100,
                            );
                          }}
                        >
                          {/* Left Side: Authentic Blinking Root */}
                          <div className="flex items-center font-bold tracking-wider text-[12px]">
                            <span className="text-white/90">
                              root@vadanta:~
                            </span>
                            <span className="text-[#22c55e] ml-[3px] text-sm font-black animate-[pulse_1s_steps(2,start)_infinite] drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]">
                              _
                            </span>
                          </div>

                          {/* Right Side: Pro Commit Tracker */}
                          <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#22c55e]/50">
                            <span className="font-bold text-[#22c55e]/70">
                              commit
                            </span>
                            <span className="border border-[#22c55e]/20 bg-[#22c55e]/5 px-1.5 py-1 rounded shadow-[inset_0_0_8px_rgba(34,197,94,0.1)] text-[#22c55e] font-mono">
                              {recentCommits[0]?.hash || "SYS_OK"}
                            </span>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>

              {/* GLOBAL SCANLINE OVERLAY */}
              <div className="pointer-events-none fixed inset-0 z-50 h-full w-full bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] opacity-20"></div>
            </div>

            {/* THE SECRET MATRIX PROTOCOL */}
            {matrixActive && <MatrixRain terminating={matrixTerminating} />}
          </div>
        </div>
      )}

      {/* EASTER EGG: ABES HOLOGRAM */}
      {isHologramActive && (
        <Hologram onClose={() => setIsHologramActive(false)} />
      )}

      {/* HACKER WARNING MODAL (Confirmation Dialog) */}
      {pendingAction && (
        <div className="fixed inset-0 z-[99999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-black border border-red-500/80 shadow-[0_0_40px_rgba(239,68,68,0.3)] p-6 flex flex-col space-y-4">
            <div className="flex items-center justify-between border-b border-red-500/40 pb-2">
              <span className="text-xs font-bold text-red-500 tracking-widest">
                [ SECURITY_INTERRUPT ]
              </span>
              <span className="text-xs text-red-500/70 animate-pulse">
                ERROR_CODE: 0x41F
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 font-mono leading-relaxed">
              {terminalMsg}
            </p>

            <div className="flex justify-end space-x-3 pt-2">
              <button
                onClick={() => setPendingAction(null)}
                className="px-4 py-2 text-xs border border-slate-700 text-slate-400 hover:border-[#22c55e] hover:text-[#22c55e] transition-colors cursor-pointer"
              >
                [ ABORT ]
              </button>
              <button
                onClick={executeConfirmedAction}
                className="px-4 py-2 text-xs bg-red-500/20 border border-red-500 text-red-500 hover:bg-red-500 hover:text-black font-bold transition-colors cursor-pointer shadow-[0_0_10px_rgba(239,68,68,0.4)]"
              >
                [ EXECUTE ]
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CRT SHUTDOWN ANIMATION & GOODBYE SCREEN */}
      {isShuttingDown && (
        <div className="fixed inset-0 z-[99999] bg-black flex flex-col items-center justify-center">
          <div
            className="w-full h-full bg-white absolute inset-0 pointer-events-none"
            style={{
              animation:
                "crt-shutdown 0.6s forwards cubic-bezier(0.25, 1, 0.5, 1)",
            }}
          />

          {/* Hacker Goodbye Message & Manual Power Button */}
          <div className="relative z-10 flex flex-col items-center space-y-6 animate-fade-in px-4 text-center">
            <div className="text-[#22c55e] font-mono text-sm sm:text-lg tracking-[0.4em] font-bold drop-shadow-[0_0_10px_rgba(34,197,94,0.6)]">
              &gt; CONNECTION_LOST... GOODBYE, VADANTA.
            </div>
            <div className="text-slate-600 text-xs font-mono tracking-widest">
              SYSTEM POWERED DOWN. HARDWARE DISENGAGED.
            </div>
            <button
              onClick={() => {
                setIsShuttingDown(false);
                setLoading(true);
              }}
              className="mt-6 px-6 py-2 bg-black border border-[#22c55e]/60 text-[#22c55e] text-xs hover:bg-[#22c55e] hover:text-black font-bold tracking-widest transition-all cursor-pointer shadow-[0_0_20px_rgba(34,197,94,0.2)]"
            >
              [ BOOT_SYSTEM_MANUALLY ]
            </button>
          </div>

          <style>{`
                @keyframes crt-shutdown {
                  0% { transform: scale(1, 1); opacity: 1; filter: brightness(1); }
                  40% { transform: scale(1, 0.005); opacity: 1; filter: brightness(2); }
                  70% { transform: scale(0, 0.005); opacity: 1; filter: brightness(2); }
                  100% { transform: scale(0, 0); opacity: 0; filter: brightness(0); }
                }
              `}</style>
        </div>
      )}

      {/* JOURNEY.LOG WINDOW */}
      {isJourneyWindowOpen && (
        <JourneyLog
          onClose={() => setIsJourneyWindowOpen(false)}
          themeHue={themeHue}
        />
      )}

      {/* ========================================== */}
      {/* THE CINEMATIC JOKER TRAP */}
      {/* ========================================== */}
      {isJokerTrapActive && (
        <div className="fixed inset-0 z-[999999] flex flex-col items-center justify-center overflow-hidden animate-[steppedBlackout_2.5s_steps(6,end)_forwards]">
          {/* Injecting the Creepy Joker Font */}
          <link
            href="https://fonts.googleapis.com/css2?family=Creepster&display=swap"
            rel="stylesheet"
          />

          {/* The Prompt - Delays for 2.5 seconds while screen fades to black */}
          <div className="relative z-10 flex flex-col items-center text-center opacity-0 animate-[revealJoker_2s_ease-in-out_2.5s_forwards]">
            <h1
              className="text-6xl sm:text-8xl text-red-600 tracking-widest drop-shadow-[0_0_15px_rgba(220,38,38,0.8)]"
              style={{ fontFamily: "'Creepster', cursive" }}
            >
              ARE YOU SERIOUS?
            </h1>

            <p className="mt-6 text-red-500/70 font-mono tracking-[0.3em] text-sm px-4 py-1">
              [ FATAL: LIGHT_MODE_REQUESTED ]
            </p>

            <div className="mt-16 flex flex-col sm:flex-row gap-6 w-full max-w-lg px-8 font-mono">
              {/* Option 1: The Dev (Safe Exit) */}
              <button
                onClick={() => setIsJokerTrapActive(false)}
                className="flex-1 bg-black text-[#22c55e] border border-[#22c55e] py-4 text-xs font-bold tracking-widest hover:bg-[#22c55e] hover:text-black transition-all uppercase shadow-[0_0_15px_rgba(34,197,94,0.2)] hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] cursor-pointer"
              >
                I'm a Dev <br />
                <span className="text-[9px] opacity-70">(Keep it Dark)</span>
              </button>

              {/* Option 2: The Troll Dodge Button (Compositor-Lock Fix) */}
              <div className="flex-1 relative h-16 sm:h-auto z-20">
                {/* The Moving Wrapper */}
                <div
                  className="absolute w-full h-full"
                  onMouseEnter={(e) => {
                    const btn = e.currentTarget;
                    const maxX = window.innerWidth - 200;
                    const maxY = window.innerHeight - 100;
                    const x = Math.random() * maxX;
                    const y = Math.random() * maxY;

                    // Forces the button to break out of the parent's animation layer!
                    btn.style.position = "fixed";
                    btn.style.left = `${x}px`;
                    btn.style.top = `${y}px`;
                    btn.style.width = "200px";
                    btn.style.height = "64px";
                  }}
                >
                  {/* THE UPGRADED SENSOR: -inset-24 makes a massive invisible shield */}
                  <div className="absolute -inset-24 z-10 cursor-none"></div>

                  {/* The Actual Button */}
                  <button
                    onClick={() => {
                      setIsJokerTrapActive(false);
                      setIsTerminalFocused(true);

                      setTimeout(() => terminalInputRef.current?.focus(), 100);

                      // Raw JSX Terminal Injection!
                      setTerminalHistory((prev) => [
                        ...prev,
                        {
                          type: "output",
                          text: (
                            <span className="text-red-500 font-bold tracking-widest uppercase shadow-[0_0_10px_rgba(239,68,68,0.3)]">
                              Woahh managed?? to click it! still nooo light
                              theme for you! My Site My Rules! hahahah
                            </span>
                          ),
                        },
                      ]);
                    }}
                    className="relative z-20 w-full h-full bg-black text-slate-300 border border-slate-500 py-4 text-xs font-bold tracking-widest hover:text-red-500 hover:border-red-500 uppercase cursor-pointer shadow-[0_0_15px_rgba(0,0,0,0.8)]"
                  >
                    I'm Non-Tech <br />
                    <span className="text-[9px] opacity-70">
                      (Force Light Mode)
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Cinematic CSS Keyframes */}
          <style>{`
            @keyframes steppedBlackout {
              0% { background-color: rgba(0,0,0,0); backdrop-filter: blur(0px); }
              100% { background-color: rgba(0,0,0,1); backdrop-filter: blur(12px); }
            }
            @keyframes revealJoker {
              0% { opacity: 0; }
              100% { opacity: 1; }
            }
          `}</style>
        </div>
      )}

      {/* ========================================= */}
      {/* --- GLOBAL VISUAL OVERLAYS & MODALS --- */}
      {/* ========================================= */}

      {/* Cinematic Keyframes & Glitch-Free Rain Physics */}
      {/* Cinematic Keyframes & Glitch-Free Rain Physics */}
      <style>{`
        @keyframes cyber-wipe {
          /* inset(top right bottom left) */
          0% { clip-path: inset(-5px 100% -5px -5px); }
          50% { clip-path: inset(-5px -5px -5px -5px); }
          100% { clip-path: inset(-5px -5px -5px 100%); }
        }

        @keyframes cinematicUnfold {
          0% {
            opacity: 0;
            transform: perspective(1000px) rotateX(-15deg) translateY(30px) scale(0.9);
            filter: blur(8px);
          }
          100% {
            opacity: 1;
            transform: perspective(1000px) rotateX(0deg) translateY(0) scale(1);
            filter: blur(0px);
          }
        }
        @keyframes emojiFallSmooth {
          0% { transform: translateY(-10vh) rotate(0deg); opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { transform: translateY(105vh) rotate(360deg); opacity: 0; }
        }
        .animate-cinematic {
          animation: cinematicUnfold 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .emoji-drop-smooth {
          position: fixed;
          top: 0;
          font-size: 3.5rem;
          pointer-events: none;
          z-index: 300;
          will-change: transform;
          /* Changed from infinite to forwards for a single drop */
          animation: emojiFallSmooth 3s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards; 
        }
      `}</style>

      {/* CORE IDENTITY DOSSIER MODAL */}
      {isCoreIdentityOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 backdrop-blur-md p-4 animate-[fadeIn_0.3s_ease-out]">
          <div className="animate-cinematic relative w-full max-w-xl rounded-3xl bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/20 shadow-[0_0_50px_rgba(255,255,255,0.1)] p-8 overflow-hidden backdrop-blur-xl group hover:shadow-[0_0_80px_rgba(34,197,94,0.3)] transition-shadow duration-700">
            {/* Ambient Background Glows */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl group-hover:bg-green-500/20 transition-colors duration-700"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl group-hover:bg-[#22c55e]/30 transition-colors duration-700"></div>

            <div className="relative z-10 flex flex-col items-center text-center">
              {/* Floating Avatar Ring with Real Profile Photo */}
              <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-tr from-blue-500 via-purple-500 to-[#22c55e] animate-[spin_6s_linear_infinite] mb-6 shadow-2xl relative">
                <div className="w-full h-full bg-[#050505] rounded-full overflow-hidden flex items-center justify-center animate-[spin_6s_linear_infinite_reverse]">
                  <img
                    src="/profile.png"
                    alt="Vadanta Kumar Chauhaan"
                    className="w-full h-full object-cover rounded-full"
                    style={{ filter: `hue-rotate(-${themeHue}deg)` }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://ui-avatars.com/api/?name=Vadanta+Chauhaan&background=0D8ABC&color=fff";
                    }}
                  />
                </div>
              </div>

              {/* Name & Title */}
              <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-gray-300 mb-2 tracking-wide">
                Vadanta Kumar Chauhaan
              </h2>
              <div className="px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-[10px] tracking-widest font-bold uppercase mb-8 shadow-inner">
                Software Engineer // UI Architect
              </div>

              {/* Stats Grid */}
              <div className="w-full grid grid-cols-3 gap-4 mb-8">
                <div className="flex flex-col p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:-translate-y-1 transition-all">
                  <span className="text-white/50 text-[9px] uppercase tracking-widest mb-1">
                    Focus
                  </span>
                  <span className="text-white font-semibold text-sm">
                    Frontend & AI
                  </span>
                </div>
                <div className="flex flex-col p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:-translate-y-1 transition-all">
                  <span className="text-white/50 text-[9px] uppercase tracking-widest mb-1">
                    Current Op
                  </span>
                  <span className="text-white font-semibold text-sm">
                    SIH 2026
                  </span>
                </div>
                <div className="flex flex-col p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:-translate-y-1 transition-all">
                  <span className="text-white/50 text-[9px] uppercase tracking-widest mb-1">
                    Next Target
                  </span>
                  <span className="text-white font-semibold text-sm">
                    GSoC 2027
                  </span>
                </div>
              </div>

              {/* Bio */}
              <p className="text-white/70 text-sm leading-relaxed max-w-md mx-auto mb-8 font-light">
                I don't just write code; I engineer digital experiences.
                Blending high-performance web architecture with immersive user
                interfaces. If it exists in the DOM, I can make it
                extraordinary.
              </p>

              {/* Action Button */}
              <button
                onClick={() => setIsCoreIdentityOpen(false)}
                className="px-10 py-3 rounded-full bg-gradient-to-r from-[#22c55e] to-emerald-400 text-black font-extrabold tracking-widest hover:scale-105 hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] transition-all active:scale-95"
              >
                DISMISS
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TRACE CONNECTION MODAL */}
      {isTracing && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-red-900/20 backdrop-blur-sm pointer-events-none transition-all duration-500">
          <div className="animate-cinematic w-[500px] bg-black border-2 border-red-500 shadow-[0_0_50px_rgba(239,68,68,0.4)] p-6 font-mono pointer-events-auto">
            <div className="text-red-500 font-bold mb-4 animate-pulse">
              SYSTEM WARNING // UNAUTHORIZED TRACE
            </div>
            <pre className="text-red-400 whitespace-pre-wrap text-sm leading-relaxed">
              {traceText}
            </pre>
          </div>
        </div>
      )}

      {/* STABLE EMOJI RAIN OVERLAY (Single Troll Fall) */}
      {isRainingEmojis && (
        <div className="fixed inset-0 z-[300] pointer-events-none overflow-hidden">
          {[15, 35, 55, 75, 90].map((leftPos, i) => (
            <div
              key={i}
              className="emoji-drop-smooth"
              style={{
                left: `${leftPos}%`,
                animationDelay: `${i * 0.25}s`,
                animationDuration: `${2.5 + (i % 2) * 0.5}s`,
              }}
            >
              😂
            </div>
          ))}
        </div>
      )}

      {/* OS THEME CONFIGURATOR */}
      {isThemeModalOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-[fadeIn_0.2s_ease-out]">
          <div className="w-full max-w-sm bg-[#050505] border-2 border-[#22c55e] shadow-[0_0_30px_rgba(34,197,94,0.15)] relative p-6 font-mono text-[#22c55e]">
            {/* Header */}
            <div className="flex justify-between items-center mb-6 border-b border-[#22c55e]/30 pb-2">
              <span className="font-bold tracking-widest text-sm text-white">
                APPEARANCE_CONFIG
              </span>
              <button
                onClick={() => setIsThemeModalOpen(false)}
                className="hover:text-red-500 font-bold text-xs transition-colors cursor-pointer"
              >
                [CLOSE]
              </button>
            </div>

            {/* Live Slider */}
            <div className="mb-6 relative z-10">
              <label className="text-xs mb-3 block text-white/70 tracking-widest uppercase">
                Global Phosphor Shift
              </label>
              <input
                type="range"
                min="0"
                max="360"
                value={themeHue}
                onChange={(e) => setThemeHue(e.target.value)}
                className="w-full h-2 bg-[#22c55e]/50 rounded-lg appearance-none cursor-pointer outline-none hover:bg-[#22c55e] transition-all relative z-20"
              />
              <div className="flex justify-between text-[10px] mt-2 text-white/40">
                <span>0°</span>
                <span>HUE: {themeHue}°</span>
                <span>360°</span>
              </div>
            </div>

            {/* Presets */}
            <div className="space-y-3 relative z-10">
              <div className="text-[10px] text-white/50 tracking-widest uppercase mb-2">
                Presets
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <button
                  onClick={() => setThemeHue(0)}
                  className="p-2 border border-[#22c55e]/50 hover:bg-[#22c55e]/20 transition-all cursor-pointer"
                >
                  Cyber Green
                </button>
                <button
                  onClick={() => setThemeHue(55)}
                  className="p-2 border border-[#22c55e]/50 hover:bg-[#22c55e]/20 transition-all cursor-pointer"
                >
                  Neon Cyan
                </button>
                <button
                  onClick={() => setThemeHue(140)}
                  className="p-2 border border-[#22c55e]/50 hover:bg-[#22c55e]/20 transition-all cursor-pointer"
                >
                  Synthwave Pink
                </button>
                <button
                  onClick={() => setThemeHue(215)}
                  className="p-2 border border-[#22c55e]/50 hover:bg-[#22c55e]/20 transition-all cursor-pointer"
                >
                  Retro Amber
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* GITHUB EXTERNAL DRIVE MODAL */}
      {isGitHubMounted && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-[fadeIn_0.3s_ease-out]">
          <div className="relative w-full max-w-lg bg-gradient-to-br from-[#050505] to-[#0a0a0a] border-2 border-blue-500/40 shadow-[0_0_50px_rgba(59,130,246,0.2)] p-1 overflow-hidden">
            {/* Animated scanning line */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent w-full h-full animate-[scan_3s_linear_infinite] pointer-events-none"></div>

            <div className="p-6 relative z-10 font-mono text-blue-400">
              {/* Header */}
              <div className="flex justify-between items-center mb-6 border-b border-blue-500/30 pb-3">
                <div className="flex items-center gap-3">
                  <span className="animate-spin text-lg">⚙</span>
                  <span className="font-bold tracking-widest text-white text-sm">
                    EXTERNAL_DRIVE // GITHUB_API
                  </span>
                </div>
                <button
                  onClick={() => {
                    setIsGitHubMounted(false);
                    setGithubData(null);
                  }}
                  className="hover:text-red-500 font-bold text-xs tracking-wider transition-colors cursor-pointer"
                >
                  [UNMOUNT]
                </button>
              </div>

              {/* Cinematic Boot-up Area */}
              {!githubData ? (
                <div className="py-12 flex flex-col items-center justify-center space-y-4">
                  <div className="w-12 h-12 border-2 border-blue-500/20 border-t-blue-500 rounded-full animate-spin"></div>
                  <div className="text-xs tracking-widest animate-pulse">
                    &gt; {mountText}
                  </div>
                </div>
              ) : (
                <div className="animate-[cinematicUnfold_0.5s_forwards]">
                  {/* Profile Layout */}
                  <div className="flex gap-6 mb-6">
                    <div className="w-24 h-24 border border-blue-500/50 p-1 flex-shrink-0 relative group">
                      <div className="absolute inset-0 bg-blue-500/20 animate-pulse pointer-events-none"></div>
                      <img
                        src={githubData.avatar_url}
                        alt="GitHub Avatar"
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      />
                    </div>

                    <div className="flex-1 text-sm">
                      <div className="text-white font-bold text-xl mb-1 tracking-wider">
                        {githubData.name || githubData.login}
                      </div>
                      <div className="text-blue-500/80 mb-3 text-xs tracking-widest">
                        @{githubData.login}
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-xs">
                        <div className="bg-blue-900/20 border border-blue-500/20 p-2 rounded">
                          <div className="text-white/40 mb-1">REPOSITORIES</div>
                          <div className="text-lg text-white font-bold">
                            {githubData.public_repos}
                          </div>
                        </div>
                        <div className="bg-blue-900/20 border border-blue-500/20 p-2 rounded">
                          <div className="text-white/40 mb-1">FOLLOWERS</div>
                          <div className="text-lg text-white font-bold">
                            {githubData.followers}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bio Block */}
                  <div className="mb-6 bg-blue-900/10 border border-blue-500/20 p-3 rounded text-xs">
                    <span className="text-white/40 tracking-widest uppercase mb-1 block text-[9px]">
                      Dossier / Bio
                    </span>
                    <span className="text-blue-300/80 leading-relaxed">
                      {githubData.bio ||
                        "System engineer actively deploying code."}
                    </span>
                  </div>

                  {/* Action Link */}
                  <a
                    href={githubData.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="block w-full text-center py-3 border border-blue-500/50 hover:bg-blue-500/20 transition-all duration-300 text-xs tracking-widest text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] cursor-pointer"
                  >
                    INITIALIZE_DIRECT_UPLINK
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Mail.conn GUI WINDOW */}
      {isCommsWindowOpen && (
        <Rnd
          size={{ width: commsConfig.width, height: commsConfig.height }}
          position={{ x: commsConfig.x, y: commsConfig.y }}
          onDragStop={(e, d) =>
            setCommsConfig((prev) => ({ ...prev, x: d.x, y: d.y }))
          }
          onResizeStop={(e, direction, ref, delta, position) => {
            setCommsConfig({
              width: parseInt(ref.style.width, 10),
              height: parseInt(ref.style.height, 10),
              x: position.x,
              y: position.y,
            });
          }}
          minWidth={350}
          minHeight={350}
          bounds="parent"
          dragHandleClassName="comms-drag-handle"
          className="z-[999] absolute"
        >
          <div className="w-full h-full bg-[#050505]/95 border border-[#22c55e]/50 shadow-[0_0_30px_rgba(34,197,94,0.15)] flex flex-col font-mono backdrop-blur-md overflow-hidden">
            {/* Window Header (The Drag Handle) */}
            <div className="comms-drag-handle h-8 bg-[#22c55e]/10 border-b border-[#22c55e]/30 flex items-center justify-between px-3 cursor-move hover:bg-[#22c55e]/20 transition-colors shrink-0">
              <span className="font-bold text-xs tracking-widest text-[#22c55e]">
                Mail.conn // SECURE_UPLINK
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsCommsWindowOpen(false);
                  setGuiPingStatus("IDLE");
                }}
                className="text-[#22c55e] hover:text-[#ff3333] hover:bg-[#ff3333]/10 px-2 py-0.5 rounded transition-all duration-200 text-xs font-bold cursor-pointer"
              >
                [X]
              </button>
            </div>

            {/* Window Body - Multi-Template & Dynamic Placeholders */}
            <div className="flex-1 text-[#22c55e] flex flex-col overflow-hidden">
              {/* The Navigation Tabs */}
              <div className="flex border-b border-[#22c55e]/20 shrink-0">
                <button
                  onClick={() => {
                    setCommsView("PING");
                    setGuiPingStatus("IDLE");
                  }}
                  className={`flex-1 py-2 text-[10px] font-bold tracking-widest uppercase transition-colors ${commsView === "PING" ? "bg-[#22c55e]/20 text-white border-b-2 border-[#22c55e]" : "text-[#22c55e]/50 hover:bg-[#22c55e]/10"}`}
                >
                  Direct Ping
                </button>
                <button
                  onClick={() => {
                    setCommsView("FEEDBACK");
                    setGuiPingStatus("IDLE");
                  }}
                  className={`flex-1 py-2 text-[10px] font-bold tracking-widest uppercase transition-colors ${commsView === "FEEDBACK" ? "bg-orange-500/20 text-white border-b-2 border-orange-500" : "text-orange-500/50 hover:bg-orange-500/10"}`}
                >
                  System Feedback
                </button>
              </div>

              <div className="flex-1 p-5 overflow-y-auto custom-scrollbar flex flex-col">
                {guiPingStatus === "SUCCESS" ? (
                  <div className="flex-1 flex flex-col items-center justify-center space-y-4">
                    <div className="font-bold tracking-widest text-white text-center">
                      TRANSMISSION SUCCESSFUL
                    </div>
                    <div className="text-xs text-[#22c55e]/70 text-center px-4">
                      Payload securely routed.
                    </div>
                    <button
                      onClick={() => setGuiPingStatus("IDLE")}
                      className="mt-4 border border-[#22c55e] px-4 py-2 hover:bg-[#22c55e] hover:text-black transition-colors text-xs font-bold shrink-0"
                    >
                      INITIALIZE NEW LINK
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col h-full space-y-4">
                    {/* Dynamic Mode Header */}
                    {commsView === "FEEDBACK" ? (
                      <div className="flex gap-2 shrink-0 mb-2">
                        <button
                          onClick={() => setFeedbackType("BUG")}
                          className={`flex-1 py-1.5 text-xs font-bold border transition-colors ${feedbackType === "BUG" ? "bg-red-500/20 border-red-500 text-red-500" : "border-red-500/30 text-red-500/50 hover:border-red-500"}`}
                        >
                          [ REPORT BUG ]
                        </button>
                        <button
                          onClick={() => setFeedbackType("FEATURE")}
                          className={`flex-1 py-1.5 text-xs font-bold border transition-colors ${feedbackType === "FEATURE" ? "bg-blue-500/20 border-blue-500 text-blue-500" : "border-blue-500/30 text-blue-500/50 hover:border-blue-500"}`}
                        >
                          [ SUGGEST FEATURE ]
                        </button>
                      </div>
                    ) : (
                      <div className="shrink-0 text-center mb-2 pb-3 border-b border-[#22c55e]/20">
                        <span className="text-[#22c55e]/60 text-[9px] tracking-widest uppercase block mb-1.5">
                          Or Route Manually To:
                        </span>
                        <span className="text-white text-xs font-mono tracking-widest select-all cursor-pointer bg-[#22c55e]/10 px-3 py-1.5 rounded border border-[#22c55e]/30">
                          vadanta592007@hotmail.com
                        </span>
                      </div>
                    )}

                    {/* Universal Email Input */}
                    <div className="shrink-0">
                      <label className="block text-[10px] uppercase tracking-widest mb-1 text-white/70">
                        Return Address (Email)
                      </label>
                      <input
                        type="email"
                        value={guiPingData.email}
                        onChange={(e) => {
                          setGuiPingData({
                            ...guiPingData,
                            email: e.target.value,
                          });
                          setGuiPingStatus("IDLE");
                        }}
                        className={`w-full bg-[#0a0a0a] border ${commsView === "FEEDBACK" ? "border-orange-500/50 focus:border-orange-500" : "border-[#22c55e]/50 focus:border-[#22c55e]"} text-white p-2 outline-none transition-colors text-sm`}
                        placeholder="user@node.com"
                      />
                    </div>

                    {/* Dynamic Textarea Placeholders & Labels */}
                    <div className="flex-1 flex flex-col min-h-[100px]">
                      <label className="block text-[10px] uppercase tracking-widest mb-1 text-white/70">
                        {commsView === "FEEDBACK"
                          ? feedbackType === "BUG"
                            ? "Bug Diagnostics"
                            : "Feature Architecture"
                          : "Encrypted Payload (Message)"}
                      </label>
                      <textarea
                        value={guiPingData.message}
                        onChange={(e) =>
                          setGuiPingData({
                            ...guiPingData,
                            message: e.target.value,
                          })
                        }
                        className={`w-full flex-1 bg-[#0a0a0a] border ${commsView === "FEEDBACK" ? "border-orange-500/50 focus:border-orange-500" : "border-[#22c55e]/50 focus:border-[#22c55e]"} text-white p-2 outline-none transition-colors text-sm resize-none custom-scrollbar`}
                        placeholder={
                          commsView === "PING"
                            ? "Enter transmission data here..."
                            : feedbackType === "BUG"
                              ? "Describe the system failure, steps to reproduce, or error codes..."
                              : "Describe the proposed functionality, its use cases, and potential impact..."
                        }
                      />
                    </div>

                    {/* Dynamic Error & Submit */}
                    {guiPingStatus === "INVALID_EMAIL" && (
                      <div className="shrink-0 text-red-500 text-xs font-bold tracking-widest bg-red-500/10 p-2 border border-red-500/30 text-center">
                        ERR: INVALID EMAIL
                      </div>
                    )}
                    {guiPingStatus === "API_ERROR" && (
                      <div className="shrink-0 text-red-500 text-xs font-bold tracking-widest bg-red-500/10 p-2 border border-red-500/30 text-center">
                        ERR: TRANSMISSION FAILED (Check Console)
                      </div>
                    )}

                    <button
                      onClick={() => {
                        const cleanEmail = guiPingData.email.trim();
                        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail))
                          return setGuiPingStatus("INVALID_EMAIL");

                        setGuiPingStatus("SENDING");

                        // The payload already injects BUG or FEATURE right into the text!
                        const finalPayload =
                          commsView === "FEEDBACK"
                            ? `[SYSTEM_FEEDBACK_TYPE: ${feedbackType}]\n\n${guiPingData.message}`
                            : guiPingData.message;

                        // Simplified Routing: If it's Feedback (Bug OR Feature), use Template 2. Otherwise, Template 1.
                        const targetTemplate =
                          commsView === "FEEDBACK"
                            ? "template_l3izrym"
                            : "template_wvnet4e";

                        emailjs
                          .send(
                            "service_7259ksh",
                            targetTemplate,
                            { from_email: cleanEmail, message: finalPayload },
                            "yWVDlVd10PKZ4Q9l6",
                          )
                          .then(() => {
                            setGuiPingStatus("SUCCESS");
                            setGuiPingData({ email: "", message: "" });
                          })
                          .catch((err) => {
                            console.error("EmailJS Error: ", err);
                            setGuiPingStatus("API_ERROR");
                          });
                      }}
                      disabled={guiPingStatus === "SENDING"}
                      className={`shrink-0 w-full border transition-colors py-2 font-bold tracking-widest text-sm ${commsView === "FEEDBACK" ? "bg-orange-500/20 border-orange-500 hover:bg-orange-500 hover:text-black text-orange-500" : "bg-[#22c55e]/20 border-[#22c55e] hover:bg-[#22c55e] hover:text-black"}`}
                    >
                      {guiPingStatus === "SENDING"
                        ? "ENCRYPTING..."
                        : "EXECUTE_TRANSMISSION"}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Rnd>
      )}

      {/* EDUCATION.exe TACTICAL WINDOW */}
      {isCampusWindowOpen && (
        <Rnd
          size={{ width: campusConfig.width, height: campusConfig.height }}
          position={{ x: campusConfig.x, y: campusConfig.y }}
          onDragStop={(e, d) =>
            setCampusConfig((prev) => ({ ...prev, x: d.x, y: d.y }))
          }
          onResizeStop={(e, direction, ref, delta, position) => {
            setCampusConfig({
              width: parseInt(ref.style.width, 10),
              height: parseInt(ref.style.height, 10),
              x: position.x,
              y: position.y,
            });
          }}
          minWidth={750}
          minHeight={450}
          bounds="parent"
          dragHandleClassName="campus-drag-handle"
          className="z-[70]"
        >
          <div className="w-full h-full bg-[#050505]/95 border border-[#22c55e]/50 rounded shadow-[0_0_40px_rgba(34,197,94,0.15)] flex flex-col overflow-hidden backdrop-blur-md">
            {/* Title Bar */}
            <div className="campus-drag-handle w-full h-8 bg-[#22c55e]/10 border-b border-[#22c55e]/30 flex items-center justify-between px-3 cursor-move">
              <span className="text-[#22c55e] font-bold text-xs tracking-widest">
                /sys/users/vadanta/EDUCATION.exe
              </span>
              <button
                onClick={() => setIsCampusWindowOpen(false)}
                className="text-[#22c55e] hover:text-red-500 hover:bg-red-500/10 px-2 py-0.5 rounded transition-all duration-200 text-xs font-bold"
              >
                [X]
              </button>
            </div>

            {/* Main Blueprint Content Area */}
            <div className="flex-1 flex p-6 gap-6 overflow-hidden bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.03)_0%,transparent_70%)] relative">
              {/* Left: 3D Hologram Projection Engine */}
              <div className="w-[55%] h-full relative z-20">
                <Hologram />
              </div>

              {/* Right: Hacker Bulletin Board */}
              <div className="w-[45%] h-full relative z-10 flex flex-col justify-center gap-8 pl-4">
                {/* Tactical Red String Connecting the Pins */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
                  <path
                    d="M 320 60 Q 150 150 310 240"
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    className="drop-shadow-[0_0_5px_rgba(239,68,68,0.5)] opacity-60 animate-pulse"
                  />
                </svg>

                {/* Bulletin Note 1: College Details */}
                <div className="relative bg-[#0a0a0a] border border-[#22c55e]/30 p-5 shadow-[4px_6px_15px_rgba(0,0,0,0.8)] rotate-[-2deg] hover:rotate-0 transition-transform duration-300">
                  {/* Duct Tape */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-white/10 rotate-3 backdrop-blur-sm shadow-sm border border-white/5"></div>
                  {/* Red Push Pin */}
                  <div className="absolute top-3 right-3 w-3 h-3 rounded-full bg-red-600 shadow-[2px_2px_4px_rgba(0,0,0,0.8),inset_-1px_-1px_2px_rgba(0,0,0,0.5),0_0_10px_rgba(239,68,68,0.8)] border border-red-400 z-20"></div>

                  <div className="border-b border-[#22c55e]/20 pb-2 mb-3">
                    <h3 className="text-[#22c55e] font-bold text-sm tracking-widest uppercase">
                      Academic_Record
                    </h3>
                  </div>
                  <div className="space-y-2 text-xs text-[#22c55e]/70 font-mono">
                    <p>
                      <span className="text-white">NODE:</span>{" "}
                      <span className="text-red-400 font-bold">
                        ABES Engineering College
                      </span>
                    </p>
                    <p>
                      <span className="text-white">PROGRAM:</span> B.Tech CSE
                    </p>
                    <p>
                      <span className="text-white">CORE:</span> DSA (
                      <span className="text-red-400 font-bold">JAVA</span>) &
                      Web Architecture
                    </p>
                  </div>
                </div>

                {/* Bulletin Note 2: Milestones */}
                <div className="relative bg-[#0a0a0a] border border-[#22c55e]/30 p-5 shadow-[4px_6px_15px_rgba(0,0,0,0.8)] rotate-[1deg] hover:rotate-0 transition-transform duration-300 ml-4">
                  {/* Duct Tape */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-white/10 -rotate-2 backdrop-blur-sm shadow-sm border border-white/5"></div>
                  {/* Red Push Pin */}
                  <div className="absolute top-3 right-3 w-3 h-3 rounded-full bg-red-600 shadow-[2px_2px_4px_rgba(0,0,0,0.8),inset_-1px_-1px_2px_rgba(0,0,0,0.5),0_0_10px_rgba(239,68,68,0.8)] border border-red-400 z-20"></div>

                  <div className="border-b border-[#22c55e]/20 pb-2 mb-3">
                    <h3 className="text-[#22c55e] font-bold text-sm tracking-widest uppercase">
                      Key_Milestones
                    </h3>
                  </div>
                  <ul className="space-y-3 text-xs text-[#22c55e]/70 list-none font-mono">
                    <li>
                      <span className="text-white font-bold opacity-50 mr-2">
                        &gt;
                      </span>
                      First-Year Performance:{" "}
                      <span className="text-red-400 font-bold">9.13 CGPA</span>
                    </li>
                    <li>
                      <span className="text-white font-bold opacity-50 mr-2">
                        &gt;
                      </span>
                      <span className="text-red-400 border-b border-red-400/50 border-dashed pb-0.5">
                        Technovation Club
                      </span>{" "}
                      (Technical Member)
                    </li>
                    <li>
                      <span className="text-white font-bold opacity-50 mr-2">
                        &gt;
                      </span>
                      Targets Locked:{" "}
                      <span className="text-red-400 animate-pulse">
                        GSoC / GSSoC
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Rnd>
      )}

      {/* ENGAGE.2P ARCADE WINDOW */}
      {isEngageWindowOpen && (
        <Rnd
          size={
            isEngageMaximized
              ? { width: "100%", height: "100%" }
              : { width: engageConfig.width, height: engageConfig.height }
          }
          position={
            isEngageMaximized
              ? { x: 0, y: 0 }
              : { x: engageConfig.x, y: engageConfig.y }
          }
          disableDragging={isEngageMaximized}
          enableResizing={!isEngageMaximized}
          onDragStop={(e, d) =>
            setEngageConfig((prev) => ({ ...prev, x: d.x, y: d.y }))
          }
          onResizeStop={(e, direction, ref, delta, position) => {
            setEngageConfig({
              width: parseInt(ref.style.width, 10),
              height: parseInt(ref.style.height, 10),
              x: position.x,
              y: position.y,
            });
          }}
          minWidth={700}
          minHeight={500}
          bounds="parent"
          dragHandleClassName="engage-drag-handle"
          className={`z-[80] ${isEngageMaximized ? "!transition-all !duration-300" : ""}`}
        >
          <div className="w-full h-full bg-[#050505]/95 border border-[#d946ef]/50 rounded shadow-[0_0_40px_rgba(217,70,239,0.15)] flex flex-col overflow-hidden backdrop-blur-md">
            {/* Title Bar */}
            <div
              className="engage-drag-handle w-full h-8 bg-[#d946ef]/10 border-b border-[#d946ef]/30 flex items-center justify-between px-3 cursor-move"
              onDoubleClick={() => setIsEngageMaximized(!isEngageMaximized)}
            >
              <span className="text-[#d946ef] font-bold text-xs tracking-widest">
                /sys/users/vadanta/ENGAGE.2p
              </span>
              <div className="flex gap-2">
                {/* Fullscreen Toggle */}
                <button
                  onClick={() => setIsEngageMaximized(!isEngageMaximized)}
                  className="text-[#d946ef] hover:text-white hover:bg-[#d946ef]/40 px-2 py-0.5 rounded transition-all duration-200 text-xs font-bold"
                >
                  {isEngageMaximized ? "[_]" : "[□]"}
                </button>
                {/* Close Button */}
                <button
                  onClick={() => {
                    setIsEngageWindowOpen(false);
                    setIsEngageMaximized(false);
                  }}
                  className="text-[#d946ef] hover:text-[#ff3333] hover:bg-[#ff3333]/10 px-2 py-0.5 rounded transition-all duration-200 text-xs font-bold"
                >
                  [X]
                </button>
              </div>
            </div>

            {/* Game Hub Component */}
            <div className="flex-1 overflow-hidden">
              <Engage2P />
            </div>
          </div>
        </Rnd>
      )}

      {isAiProxyOpen && (
        <Rnd
          size={{ width: "100%", height: "100%" }}
          position={{ x: 0, y: 0 }}
          disableDragging={true}
          enableResizing={false}
          className="z-[100] absolute animate-[cinematicUnfold_0.5s_forwards]"
        >
          <div className="w-full h-full flex flex-col bg-black overflow-hidden relative z-50">
            {/* THE MATTE HEADER */}
            <div className="h-16 bg-black flex items-center justify-between px-6 sm:px-8 border-b border-white/10 relative z-10">
              <div className="flex items-center gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></div>
                <span className="text-white text-sm font-bold tracking-[0.2em] uppercase font-sans">
                  vAI
                </span>
              </div>

              <button
                onClick={() => setIsAiProxyOpen(false)}
                className="text-white/40 hover:text-white px-3 py-2 font-bold text-[10px] tracking-widest transition-all rounded hover:bg-white/10"
              >
                [ CLOSE ]
              </button>
            </div>

            <div className="flex-1 relative min-h-0 bg-[#000000]">
              <AiProxy />
            </div>
          </div>
        </Rnd>
      )}
    </div>
  );
}

export default App;
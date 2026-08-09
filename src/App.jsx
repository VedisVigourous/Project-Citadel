import ChronosSplash from "./components/ChronosSplash";
import TerminalProfile from "./components/TerminalProfile";
import SurveillanceLogo from "./components/SurveillanceLogo";
import { Rnd } from "react-rnd";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { useState, useEffect, useRef } from 'react';

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
  // --- GITHUB LIVE COMMIT STREAM ---
  const [recentCommits, setRecentCommits] = useState([
    { id: 1, hash: "SYS_INIT", repo: "UPLINK", msg: "Establishing secure connection..." }
  ]);

  useEffect(() => {
    const fetchGitHubActivity = async () => {
      try {
        const response = await fetch('https://api.github.com/users/VedisVigourous/events/public');
        const data = await response.json();
        
        // FAILSAFE: If GitHub rate-limits us, it returns an object, not an array.
        if (!Array.isArray(data)) {
          throw new Error(data.message || "API Rate Limited");
        }
        
        const pushEvents = data.filter(event => event.type === 'PushEvent');
        const liveCommits = [];
        
        pushEvents.forEach(event => {
          event.payload?.commits?.forEach(commit => {
            liveCommits.push({
              id: commit.sha,
              hash: commit.sha.substring(0, 7),
              repo: event.repo.name.split('/').pop(),
              msg: commit.message.split('\n')[0]
            });
          });
        });

        if (liveCommits.length > 0) {
          setRecentCommits(liveCommits.slice(0, 6)); 
        }
      } catch (error) {
        console.warn("GitHub Link Offline/Limited. Using secure cache.");
        // CACHED FALLBACK: Keeps the UI looking premium even if GitHub times out.
        setRecentCommits([
          { id: 1, hash: "a1b2c3d", repo: "Vadanta_OS_Citadel", msg: "engineered dynamic hud architecture" },
          { id: 2, hash: "f4e5d6c", repo: "Police_Daily_Performa", msg: "optimized export engine" },
          { id: 3, hash: "9a8b7c6", repo: "Project_Resonance", msg: "merged gemini vision api logic" },
          { id: 4, hash: "e5d4c3b", repo: "Vadanta_OS_Citadel", msg: "patched matrix background scroll" },
          { id: 5, hash: "b2a1f9e", repo: "MLH_GHW_Guesser", msg: "deployed logic-based number guesser" },
          { id: 6, hash: "c3d4e5f", repo: "Vadanta_OS_Citadel", msg: "initialized secure uplink" }
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
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState([
    { type: 'output', text: "VADANTA_OS [Version 1.0.0]" },
    { type: 'output', text: "Type 'help' to see available system commands." }
  ]);
  const [isTerminalFocused, setIsTerminalFocused] = useState(false);
  const [isHudOpen, setIsHudOpen] = useState(false);

  const isExpanded = isTerminalFocused || isHudOpen;
  
  // NEW SCROLL LOGIC: Target the container, not an element
  const terminalScrollRef = useRef(null);
  
  useEffect(() => {
    if (terminalScrollRef.current) {
      terminalScrollRef.current.scrollTop = terminalScrollRef.current.scrollHeight;
    }
  }, [terminalHistory]);


  
  // --- PROJECT VAULT DATA ---
  const projectsData = [
    { 
      id: "01", name: "Project_Resonance.crx", tech: "JS / Gemini 1.5 / Chrome API", 
      desc: "AI-powered accessibility Chrome Extension bridging digital culture gaps. MLH HackDays Top 33.",
      link: "https://github.com/hobo7676/hackdays-spiker" 
    },
    { 
      id: "02", name: "Police_Daily_Performa.exe", tech: "Web / UI", 
      desc: "Live web app engineered for Delhi Police staff to efficiently fill, download, and export daily performas.",
      link: "https://github.com/VedisVigourous/Police-Daily-Performa" 
    },
    { 
      id: "03", name: "Vadanta_OS_Citadel.exe", tech: "React / Tailwind", 
      desc: "Highly interactive, state-driven operating system portfolio with a custom window management architecture.",
      link: "https://github.com/VedisVigourous/project-citadel" 
    },
    { 
      id: "04", name: "MLH_GHW_Guesser.bat", tech: "JS / HTML / CSS", 
      desc: "Logic-based number guessing engine developed and deployed for Major League Hacking's Global Hack Week.",
      link: "https://github.com/VedisVigourous/vedisvigourous.github.io" 
    },
    { 
      id: "05", name: "Java_OOP_Game_Suite.jar", tech: "Java / OOP", 
      desc: "Modular console-based game suite implementing core encapsulation and inheritance principles.",
      link: "https://github.com/VedisVigourous/LearnJava" 
    },
    { 
      id: "06", name: "Edu_Roadmap_AI.sys", tech: "GenAI / Arch (WIP)", 
      desc: "Upcoming AI assistant specialized in generating dynamic, personalized education roadmaps.",
      link: "#" 
    },
    { 
      id: "07", name: "DSA_Algorithm_Vault.lib", tech: "Java / C++/ DSA", 
      desc: "Comprehensive archive of optimized algorithmic solutions for HackerRank, CodeChef, and competitive programming challenges.",
      link: "https://github.com/VedisVigourous/Code-Solutions" 
    }
  ];

  // 1. THE FOOLPROOF MOUSE TRACKER
  useEffect(() => {
    const handleGlobalMouseMove = (e) => {
      // The check goes INSIDE the function now!
      if (loading) return; 
      
      const x = (e.clientX / window.innerWidth - 0.5) * 20; 
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setBgOffset({ x, y });
    };
    
    window.addEventListener('mousemove', handleGlobalMouseMove);
    return () => window.removeEventListener('mousemove', handleGlobalMouseMove);
  }, [loading]);

  // ---> NEW CLOCK & NETWORK EFFECT GOES HERE <---
  useEffect(() => {
    // SECURITY OVERRIDE: Do not start timers during splash screen!
    if (loading) return;

    const clockInterval = setInterval(() => setTime(new Date()), 1000);
    
    const netInterval = setInterval(() => {
      setNetSpeed({
        ping: Math.floor(Math.random() * 15) + 10,
        dl: Math.floor(Math.random() * 80) + 120 
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
const [compileStatus, setCompileStatus] = useState("Status: Uncompiled raw source");

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
    setIsSystemMenuOpen(false);
    setIsIdentityWindowOpen(false);
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
  const ampm = rawHours >= 12 ? 'PM' : 'AM';
  
  // If 24H mode, use raw. If 12H mode, use modulo 12 (and convert 0 to 12).
  const displayHours = is24Hour ? rawHours : (rawHours % 12 || 12);
  
  const hours = displayHours.toString().padStart(2, '0');
  const mins = time.getMinutes().toString().padStart(2, '0');
  const secs = time.getSeconds().toString().padStart(2, '0');

  // --- TERMINAL COMMAND PARSER ---
  const handleTerminalSubmit = (e) => {
    if (e.key === 'Enter') {
      const cmd = terminalInput.trim().toLowerCase();
      let newHistory = [...terminalHistory, { type: 'input', text: `root@vadanta:~$ ${terminalInput}` }];

      if (cmd === '') {
        // Do nothing for empty enter
      } else if (cmd === 'clear') {
        newHistory = [];
      } else if (cmd === 'cls') {
        newHistory = [];
      } else if (cmd === 'help') {
        newHistory.push({ 
          type: 'output', 
          text: 'AVAILABLE COMMANDS:\n  • help\n  • clear\n  • ls\n  • whoami\n  • date\n  • open projects' 
        });
      } else if (cmd === 'ls') {
        newHistory.push({ 
          type: 'output', 
          text: 'DIRECTORY LISTING:\n  • IDENTITY.exe\n  • PROJECTS.dir\n  • CERTS.dat\n  • RESUME.tex' 
        });
      } else if (cmd === 'whoami') {
        setIsIdentityWindowOpen(true);
        newHistory.push({ type: 'output', text: 'Vadanta Kumar Chauhaan\n • A Computer Science Major' });
        newHistory.push({ type: 'output', text: 'Executing IDENTITY.exe...' });
      } else if (cmd === 'date') {
        newHistory.push({ type: 'output', text: new Date().toString() });
      } else if (cmd === 'open projects') {
        setIsProjectsWindowOpen(true);
        newHistory.push({ type: 'output', text: 'Executing PROJECTS.dir...' });
      } else {
        newHistory.push({ type: 'output', text: `bash: ${cmd}: command not found` });
      }

      setTerminalHistory(newHistory);
      setTerminalInput('');
    }
  };

  return (
    <div className="bg-slate-950 min-h-screen text-[#22c55e] font-mono overflow-hidden selection:bg-[#22c55e] selection:text-black">
      {loading ? (
        <ChronosSplash onComplete={() => setLoading(false)} />
      ) : (
        <div className="flex flex-col h-screen w-full relative z-10 bg-[#050505]">

        {/* --- LAYER 1: THE CLEAN CYBER GRID (z-[1]) --- */}
          <div 
            className="absolute top-[-100px] bottom-[-100px] left-[-100px] right-[-100px] cyber-grid pointer-events-none z-[1]"
            style={{
              transform: `translate(${bgOffset.x * 0.5}px, ${bgOffset.y * 0.5}px)`,
              transition: 'transform 0.1s ease-out'
            }}
          ></div>

          {/* --- LAYER 2: DARK MODE CHART & GITHUB BADGE (z-[2]) --- */}
          <div 
            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-[2]"
            style={{
              transform: `translate(${bgOffset.x * 1.5}px, ${bgOffset.y * 1.5}px)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            {/* Floating GitHub Badge */}
            <div className="flex items-center gap-2 mb-6 bg-black/80 border border-[#22c55e]/50 px-5 py-2 rounded-full backdrop-blur-md shadow-[0_0_15px_rgba(34,197,94,0.3)]">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#22c55e]">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className="text-[#22c55e] text-sm font-bold tracking-widest uppercase">vedisvigourous</span>
            </div>
            
            {/* The Chart (With Glassmorphic Frame & High Contrast) */}
            <div className="relative p-4 rounded-xl border border-[#22c55e]/20 bg-black/40 backdrop-blur-sm shadow-[0_0_30px_rgba(0,0,0,0.8)]">
              <img 
                src="https://ghchart.rshah.org/22c55e/vedisvigourous" 
                alt="VedisVigourous Live Commits" 
                className="w-[75vw] max-w-5xl opacity-80"
                style={{ filter: 'invert(0.85) hue-rotate(180deg) contrast(1.8)' }}
              />
            </div>
          </div>
          
          {/* --- LAYER 3: VIGNETTE SHADOW (z-[3]) --- */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_100%)] pointer-events-none z-[3]"></div>

          {/* --- LAYER 3.5: CHAOTIC FULL-WIDTH AUDIO VISUALIZER (z-[4]) --- */}
          <div className="absolute bottom-[40px] left-0 w-full flex items-end justify-center gap-[4px] px-4 h-20 z-[4] pointer-events-none opacity-40 overflow-hidden">
            {[...Array(190)].map((_, i) => (
              <div key={i} className={`visualizer-bar bar-${(i % 8) + 1} shrink-0`}></div>
            ))}
          </div>

          {/* --- LAYER 4: MAIN OS CONTENT (z-[10]) --- */}
          <div className="relative z-[10] w-full h-full flex flex-col">

        {/* TOP OS STATUS BAR */}
        <div className="w-full h-8 bg-black/80 backdrop-blur-md border-b border-[#22c55e]/30 flex items-center px-4 relative z-[50]">
            <div className="flex-1 flex items-center space-x-6">
              <span className="font-bold tracking-widest text-[#22c55e] text-xs sm:text-sm">
                VADANTA_OS
              </span>
              <span className="text-slate-500 hover:text-[#22c55e] cursor-pointer transition-colors hidden sm:inline">
                File
              </span>

              {/* SYSTEM MENU DROPDOWN */}
              <div className="relative hidden sm:block">
                <span
                  className={`cursor-pointer transition-colors ${isSystemMenuOpen ? "text-[#22c55e]" : "text-slate-500 hover:text-[#22c55e]"}`}
                  onClick={() => setIsSystemMenuOpen(!isSystemMenuOpen)}
                >
                  System
                </span>

                {isSystemMenuOpen && (
                  <div className="absolute top-full left-0 mt-3 w-48 bg-black/95 border border-[#22c55e]/50 shadow-[0_0_15px_rgba(34,197,94,0.2)] py-1 z-[9999] backdrop-blur-md">
                    <div
                      className="px-4 py-2 text-xs text-[#22c55e] hover:bg-[#22c55e]/20 cursor-pointer transition-colors"
                      onClick={handleReboot}
                    >
                      &gt; Reboot_System
                    </div>
                    <div
                      className="px-4 py-2 text-xs text-[#22c55e] hover:bg-[#22c55e]/20 cursor-pointer transition-colors"
                      onClick={handleClearCache}
                    >
                      &gt; Clear_Cache
                    </div>
                    <div className="border-t border-[#22c55e]/30 my-1"></div>
                    <div
                      className="px-4 py-2 text-xs text-red-500 hover:bg-red-500/20 cursor-pointer transition-colors font-bold"
                      onClick={handleShutdown}
                    >
                      &gt; Initiate_Shutdown
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* CENTER: The Surveillance Camera */}
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
              <SurveillanceLogo />
            </div>

            {/* Right Side: Network & Live Flip Clock */}
              <div className="flex items-center space-x-4 opacity-90">
                
                {/* Live Network Widget */}
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-ping"></span>
                  <span className="tracking-widest">NET: {netSpeed.dl}MB/s | {netSpeed.ping}MS</span>
                </div>
                
                {/* Live Date */}
                <div className="uppercase tracking-widest text-[#22c55e]/70">
                  {time.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })}
                </div>
                
                {/* Cyber Flip Clock Widget & Toggle */}
                <div className="flex items-center space-x-1 font-bold font-mono text-[11px]">
                  
                  {/* Split-Pill 12/24 Toggle Switch */}
                  <div 
                    className="flex items-center bg-[#050505] border border-[#22c55e]/40 rounded cursor-pointer text-[9px] tracking-wider overflow-hidden shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]"
                    onClick={() => setIs24Hour(!is24Hour)}
                  >
                    <div className={`px-1.5 py-[2px] transition-colors ${!is24Hour ? 'bg-[#22c55e]/30 text-[#22c55e]' : 'text-[#22c55e]/40 hover:bg-[#22c55e]/10'}`}>
                      12
                    </div>
                    <div className="w-[1px] h-[12px] bg-[#22c55e]/40"></div>
                    <div className={`px-1.5 py-[2px] transition-colors ${is24Hour ? 'bg-[#22c55e]/30 text-[#22c55e]' : 'text-[#22c55e]/40 hover:bg-[#22c55e]/10'}`}>
                      24
                    </div>
                  </div>

                  {/* Vertical Separator */}
                  <div className="w-[1px] h-3 bg-[#22c55e]/30 mx-1"></div>

                  {/* Flip Clock */}
                  <div className="flex items-center justify-center bg-[#0a0a0a] border border-[#22c55e]/40 w-[22px] h-[18px] rounded shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]">
                    {hours}
                  </div>
                  <span className="text-[#22c55e]/70 animate-pulse mb-0.5">:</span>
                  <div className="flex items-center justify-center bg-[#0a0a0a] border border-[#22c55e]/40 w-[22px] h-[18px] rounded shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]">
                    {mins}
                  </div>
                  <span className="text-[#22c55e]/70 animate-pulse mb-0.5">:</span>
                  <div className="flex items-center justify-center bg-[#0a0a0a] border border-[#22c55e]/20 w-[22px] h-[18px] rounded text-[#22c55e]/70 shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]">
                    {secs}
                  </div>

                  {/* AM/PM Indicator */}
                  {!is24Hour && (
                    <span className="text-[9px] text-[#22c55e]/70 ml-1">{ampm}</span>
                  )}
                </div>
              </div>
            </div>

          {/* DESKTOP WORKSPACE */}
          <div className="flex-grow p-4 relative">
            {/* Desktop Icons */}
            <div className="flex flex-col space-y-6 w-24 mt-4">
              {/* IDENTITY.exe */}
              <div
                className="flex flex-col items-center cursor-pointer group"
                onClick={() => setIsIdentityWindowOpen(true)}
              >
                <div className="w-12 h-12 bg-black border border-[#22c55e]/40 group-hover:border-[#22c55e] group-hover:bg-[#22c55e]/10 flex items-center justify-center mb-2 transition-all">
                  <svg
                    className="w-6 h-6 text-[#22c55e]"
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
                <span className="text-xs bg-black/80 px-1 border border-transparent group-hover:border-[#22c55e]/50 text-center">
                  IDENTITY.exe
                </span>
              </div>

              {/* Desktop Icon: PROJECTS.dir */}
            <div 
              className="flex flex-col items-center justify-start gap-1 cursor-pointer group w-24 text-center"
              onClick={() => setIsProjectsWindowOpen(true)}
            >
              <div className="p-3 bg-black/40 border border-[#22c55e]/30 rounded group-hover:bg-[#22c55e]/20 group-hover:border-[#22c55e] transition-all">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-[#22c55e]">
                  <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
              </div>
              <span className="text-[10px] tracking-wider bg-black/60 px-1 rounded w-full break-words">PROJECTS.dir</span>
            </div>

              {/* CERTS.dat */}
              <div className="flex flex-col items-center cursor-pointer group">
                <div className="w-12 h-12 bg-black border border-[#22c55e]/40 group-hover:border-[#22c55e] group-hover:bg-[#22c55e]/10 flex items-center justify-center mb-2 transition-all">
                  <svg
                    className="w-6 h-6 text-[#22c55e]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    ></path>
                  </svg>
                </div>
                <span className="text-xs bg-black/80 px-1 border border-transparent group-hover:border-[#22c55e]/50 text-center">
                  CERTS.dat
                </span>
              </div>

              {/* RESUME.tex */}
              <div
                className="flex flex-col items-center cursor-pointer group mt-2"
                onClick={() => setIsResumeWindowOpen(true)}
              >
                <div className="w-12 h-12 bg-black border border-blue-500/40 group-hover:border-blue-500 group-hover:bg-blue-500/10 flex items-center justify-center mb-2 transition-all">
                  <svg
                    className="w-6 h-6 text-blue-500"
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
                <span className="text-xs bg-black/80 px-1 border border-transparent group-hover:border-blue-500/50 text-center text-blue-400">
                  RESUME.tex
                </span>
              </div>
            </div>

            {/* IDENTITY PROFILE WINDOW (Upgraded with Drag Physics) */}
            {isIdentityWindowOpen && (
              <Rnd
                default={{
                  x: window.innerWidth > 640 ? 150 : 50,
                  y: 50,
                  width: 320,
                  height: "auto",
                }}
                minWidth={300}
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
                  <div className="p-4 bg-black/90 cursor-default">
                    <TerminalProfile />
                  </div>
                </div>
              </Rnd>
            )}

            {/* --- PROJECTS.dir WINDOW --- */}
          {isProjectsWindowOpen && (
            <Rnd
              default={{ x: window.innerWidth / 2 - 300, y: window.innerHeight / 2 - 250, width: 600, height: 500 }}
              minWidth={450}
              minHeight={350}
              bounds="parent"
              dragHandleClassName="projects-drag-handle"
              className="z-[60]"
            >
              <div className="w-full h-full bg-[#050505]/95 border border-[#22c55e]/50 rounded shadow-[0_0_30px_rgba(34,197,94,0.15)] flex flex-col overflow-hidden backdrop-blur-md">
                
                {/* Title Bar */}
                <div className="projects-drag-handle w-full h-8 bg-[#22c55e]/10 border-b border-[#22c55e]/30 flex items-center justify-between px-3 cursor-move">
                  <span className="text-[#22c55e] font-bold text-xs tracking-widest">/sys/users/vadanta/PROJECTS.dir</span>
                  <button 
                    onClick={() => setIsProjectsWindowOpen(false)} 
                    className="text-[#22c55e] hover:text-[#ff3333] hover:bg-[#ff3333]/10 px-2 py-0.5 rounded transition-all duration-200 text-xs font-bold"
                  >
                    [X]
                  </button>
                </div>
                
                {/* Projects Content Area */}
                <div className="flex-1 p-5 overflow-y-auto">
                  <div className="text-xs opacity-70 mb-4 tracking-widest border-b border-[#22c55e]/20 pb-2">
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
                          <span className="text-[10px] uppercase tracking-widest opacity-60 bg-[#22c55e]/10 px-2 py-0.5 rounded border border-[#22c55e]/20">
                            {project.tech}
                          </span>
                        </div>
                        <span className="text-xs opacity-70 leading-relaxed pr-24">
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

            {/* RESUME.tex EDITOR WINDOW */}
            {isResumeWindowOpen && (
              <Rnd
                default={{
                  x: window.innerWidth > 640 ? 150 : 20, 
                  y: 40,
                  width: 1000,  // <-- MASSIVE WIDTH UPGRADE
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
                      {isPdfCompiled ? 'evince ~/documents/RESUME.pdf' : 'vim ~/documents/RESUME.tex'}
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
                        className={`text-[10px] font-bold px-3 py-1 transition-all ${isPdfCompiled ? 'bg-green-600/20 text-green-400 border border-green-500/50 cursor-default' : 'bg-blue-600/20 text-blue-400 border border-blue-500/50 hover:bg-blue-600 hover:text-white cursor-pointer'}`}
                      >
                        {isPdfCompiled ? '> PDF_GENERATED' : '> COMPILE_TO_PDF'}
                      </button>
                      <span className={`ml-4 text-[10px] ${isPdfCompiled ? 'text-green-500' : 'text-slate-500 animate-pulse'}`}>
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
                          <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
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
                          customStyle={{ margin: 0, padding: '1rem', background: 'transparent', fontSize: '0.85rem' }}
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
            <div className={`absolute right-4 bottom-[56px] w-[340px] bg-[#050505]/95 backdrop-blur-md border border-[#22c55e]/30 shadow-[0_0_20px_rgba(34,197,94,0.15)] rounded-lg p-5 flex flex-col pointer-events-auto transition-all duration-500 origin-bottom-right ${
              (!isTerminalFocused && isHudOpen) 
                ? 'opacity-100 scale-100 translate-y-0' 
                : 'opacity-0 scale-95 translate-y-4 pointer-events-none'
            }`}>
              <div className="flex items-center justify-between border-b border-[#22c55e]/20 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-[#22c55e] animate-pulse"></div>
                  <span className="text-[#22c55e] text-[10px] font-bold tracking-[0.2em]">GITHUB.NET // UPLINK</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#22c55e]/40 text-[9px]">[FLOATING]</span>
                </div>
              </div>
              
              <div className="flex flex-col gap-4 overflow-y-auto no-scrollbar max-h-[35vh] pr-1">
                {recentCommits.map((commit, i) => (
                  <div key={`float-${i}`} className="group relative pl-4 border-l-2 border-[#22c55e]/20 hover:border-[#22c55e] transition-colors duration-300">
                    <div className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-sm bg-[#050505] border border-[#22c55e] group-hover:bg-[#22c55e] transition-colors duration-300 shadow-[0_0_8px_rgba(34,197,94,0)] group-hover:shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div>
                    <div className="text-[10px] text-[#22c55e]/60 mb-1 font-bold tracking-wider flex items-center justify-between">
                      <span className="truncate pr-2">{commit.repo}</span>
                      <span className="text-[#22c55e] shrink-0">[{commit.hash}]</span>
                    </div>
                    <div className="text-[#22c55e]/90 text-[11px] leading-relaxed">&gt; {commit.msg}</div>
                  </div>
                ))}
              </div>
              
              <div className="w-full flex items-center justify-between mt-5 pt-3 border-t border-[#22c55e]/10">
                <span className="text-[9px] text-[#22c55e]/40 tracking-widest">ENCRYPTED_CHANNEL</span>
                <span className="text-[9px] text-[#22c55e]/40">SECURE</span>
              </div>
            </div>

            {/* 2. MAIN TERMINAL BAR */}
            <div 
              className={`relative w-full font-mono text-xs transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden pointer-events-auto flex flex-col justify-end ${
                isTerminalFocused 
                  ? 'max-h-[50vh] bg-[#050505]/95 backdrop-blur-md border-t border-[#22c55e]/30 shadow-[0_-10px_30px_rgba(34,197,94,0.15)]' 
                  : 'max-h-[44px] bg-[#050505]/60 backdrop-blur-sm border-t border-[#22c55e]/20 shadow-none'
              }`}
            >
              
              {/* Idle Clue & Toggle Arrow Container */}
              <div className="absolute right-4 bottom-0 h-[44px] flex items-center gap-4 z-[75]">
                <div className={`flex items-center gap-2 text-[#22c55e]/50 transition-all duration-500 ${
                  isTerminalFocused ? 'opacity-0 translate-x-4 pointer-events-none' : 'opacity-100 translate-x-0'
                }`}>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#22c55e] animate-ping"></span>
                  <span className="text-[10px] tracking-widest hidden sm:block">SYS_SYNC // RECENT: [{recentCommits[0]?.hash}] {recentCommits[0]?.repo}</span>
                </div>
                
                {/* Arrow Button - Hides when CLI is focused */}
                <button 
                  onClick={() => setIsHudOpen(!isHudOpen)}
                  className={`text-[#22c55e]/50 hover:text-[#22c55e] hover:bg-[#22c55e]/10 p-1.5 rounded transition-all cursor-pointer pointer-events-auto border border-transparent hover:border-[#22c55e]/30 ${
                    isTerminalFocused ? 'opacity-0 scale-50 pointer-events-none' : 'opacity-100 scale-100'
                  }`}
                >
                  <svg className={`w-4 h-4 transition-transform duration-300 ${isHudOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 15l7-7 7 7"></path></svg>
                </button>
              </div>

              {/* INTEGRATED GITHUB HUD (Visible ONLY when CLI is focused) */}
              <div className={`absolute right-0 top-0 bottom-0 w-[340px] border-l border-[#22c55e]/20 bg-gradient-to-r from-transparent to-[#050505]/80 p-5 flex flex-col justify-end transition-all duration-700 delay-100 ${
                isTerminalFocused ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12 pointer-events-none'
              }`}>
                <div className="flex items-center justify-between border-b border-[#22c55e]/20 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-[#22c55e] animate-pulse"></div>
                    <span className="text-[#22c55e] text-[10px] font-bold tracking-[0.2em]">GITHUB.NET // UPLINK</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[#22c55e]/40 text-[9px]">[INTEGRATED]</span>
                  </div>
                </div>
                
                <div className="flex flex-col gap-4 overflow-y-auto no-scrollbar max-h-[35vh] pr-1">
                  {recentCommits.map((commit, i) => (
                    <div key={`int-${i}`} className="group relative pl-4 border-l-2 border-[#22c55e]/20 hover:border-[#22c55e] transition-colors duration-300">
                      <div className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-sm bg-[#050505] border border-[#22c55e] group-hover:bg-[#22c55e] transition-colors duration-300 shadow-[0_0_8px_rgba(34,197,94,0)] group-hover:shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div>
                      <div className="text-[10px] text-[#22c55e]/60 mb-1 font-bold tracking-wider flex items-center justify-between">
                        <span className="truncate pr-2">{commit.repo}</span>
                        <span className="text-[#22c55e] shrink-0">[{commit.hash}]</span>
                      </div>
                      <div className="text-[#22c55e]/90 text-[11px] leading-relaxed">&gt; {commit.msg}</div>
                    </div>
                  ))}
                </div>
                
                <div className="w-full flex items-center justify-between mt-5 pt-3 border-t border-[#22c55e]/10">
                  <span className="text-[9px] text-[#22c55e]/40 tracking-widest">ENCRYPTED_CHANNEL</span>
                  <span className="text-[9px] text-[#22c55e]/40">SECURE</span>
                </div>
              </div>

              {/* 3. TERMINAL CHAT AREA */}
              <div className={`w-full h-full px-4 py-3 flex flex-col justify-end transition-all duration-700 ${
                isTerminalFocused ? 'pr-[360px]' : 'pr-4'
              }`}>
                
                <div 
                  ref={terminalScrollRef}
                  className={`overflow-y-auto flex flex-col pr-2 transition-all duration-500 ease-in-out ${
                    isTerminalFocused ? 'opacity-100 max-h-[40vh] mb-3' : 'opacity-0 max-h-0 mb-0'
                  }`}
                >
                  {terminalHistory.map((line, index) => (
                    <div key={index} className="border-b border-[#22c55e]/15 pb-2 mb-2 last:border-0 last:pb-0 last:mb-0 flex flex-col gap-1">
                      {line.type === 'input' ? (
                        <div className="text-[#22c55e] font-bold">
                          {line.text}
                        </div>
                      ) : (
                        <div className="text-[#22c55e]/80 pl-2 leading-relaxed whitespace-pre-wrap">
                          {line.text}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-[#22c55e] shrink-0 h-5">
                  <span className="font-bold whitespace-nowrap">root@vadanta:~$</span>
                  <input 
                    type="text" 
                    value={terminalInput}
                    onChange={(e) => setTerminalInput(e.target.value)}
                    onKeyDown={handleTerminalSubmit}
                    onFocus={() => setIsTerminalFocused(true)}
                    onBlur={() => setIsTerminalFocused(false)}
                    className="bg-transparent border-none outline-none flex-1 text-[#22c55e] placeholder-[#22c55e]/40 focus:ring-0"
                    placeholder={isTerminalFocused ? "type a command..." : "click to initialize terminal..."}
                    spellCheck="false"
                  />
                </div>

              </div>
            </div>
          </div>


          {/* GLOBAL SCANLINE OVERLAY */}
          <div className="pointer-events-none fixed inset-0 z-50 h-full w-full bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] opacity-20"></div>
        </div>
      </div>
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
    </div>
  );
}

export default App;

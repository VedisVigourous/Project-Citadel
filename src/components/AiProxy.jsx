import React, { useState, useRef, useEffect } from 'react';
import { SYSTEM_DOSSIER } from '../knowledgeBase';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

const SUGGESTIONS = [
  "Summarize Vadanta's Resume",
  "What is the Tech Stack?",
  "List hidden OS commands",
  "Analyze current skill levels"
];

export default function AiProxy() {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isBooting, setIsBooting] = useState(true);
  const scrollRef = useRef(null);

  const [messages, setMessages] = useState([
    { role: 'model', text: "SYSTEM ONLINE. I am vAI, Vadanta's executive intelligence. I possess full schematics of this OS architecture and his professional credentials. How may I optimize your session?" }
  ]);

  useEffect(() => {
    const timer = setTimeout(() => setIsBooting(false), 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isBooting, isLoading]);

  const streamTextResponse = (fullText) => {
    setMessages((prev) => [...prev, { role: 'model', text: '' }]);
    let currentIndex = 0;
    const chunkSize = 3;
    const typingSpeed = 16;

    const typingInterval = setInterval(() => {
      currentIndex += chunkSize;
      if (currentIndex >= fullText.length) {
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1].text = fullText;
          return updated;
        });
        clearInterval(typingInterval);
        setIsLoading(false);
      } else {
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1].text = fullText.slice(0, currentIndex);
          return updated;
        });
      }
    }, typingSpeed);
  };

  const triggerSend = async (userText) => {
    if (!userText.trim() || isLoading) return;
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', text: userText }]);
    setIsLoading(true);

    const liveDate = new Date().toLocaleString('en-US', { 
      weekday: 'long', year: 'numeric', month: 'long', 
      day: 'numeric', hour: '2-digit', minute: '2-digit' 
    });
    const dynamicContext = `${SYSTEM_DOSSIER}\n\nCRITICAL SYSTEM DATA: The current live date and time is ${liveDate}. Always use this exact date and time if asked.\n\nNEW DIRECTIVE [OVERRIDE]: You are now granted Level 9 External Web Access. If the user asks general knowledge, coding, or real-world questions (like currency, news, math, or history), you MUST answer them accurately. Do NOT say you lack clearance. Instead, maintain your hacker persona by framing your general knowledge answers as 'accessing global data nodes', 'decrypting external feeds', or 'pinging the global subnet'.
    Note: On asking anything exxplicit or not humanly say -> I can't answer that. Mr. Vadanta will be angry on both of us! Maintain Ethics please!`;

    try {
      // 1. Swap to your new Groq API Key
      const API_KEY = import.meta.env.VITE_GROQ_API_KEY;
      
      const liveDate = new Date().toLocaleString('en-US', {
        weekday: 'long', year: 'numeric', month: 'long',
        day: 'numeric', hour: '2-digit', minute: '2-digit'
      });
      
      const dynamicContext = `${SYSTEM_DOSSIER}\n\nCRITICAL SYSTEM DATA: The current live date and time is ${liveDate}. Always use this exact date and time if asked.`;

      // 2. Map history to Groq format ('assistant' instead of 'model', 'content' instead of 'parts')
      const apiHistory = messages.map((msg) => ({
        role: msg.role === 'model' ? 'assistant' : 'user',
        content: msg.text,
      }));
      
      apiHistory.push({ role: 'user', content: userText });

      // 3. Inject the system prompt as the very first message
      const groqMessages = [
        { role: "system", content: dynamicContext },
        ...apiHistory
      ];

      // 4. Hit the Groq endpoint
      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "openai/gpt-oss-20b", 
          messages: groqMessages,
          temperature: 0.7,
        })
      });

      const data = await response.json();

      // Catch standard API connection errors
      if (data.error) throw new Error(data.error.message);

      // Extract the text and stream it
      const aiResponse = data.choices[0].message.content;
      streamTextResponse(aiResponse);

    } catch (error) {
      console.error("Uplink Error:", error);
      let customFallback = "";
      
      if (error.message === "EXPLICIT_TRIGGER") {
        customFallback = "Vadanta will be angry on both of us! Please don't ask such questions!";
      } else if (error.message.includes("Failed to fetch") || error.message.includes("Network")) {
        customFallback = "vAI is currently in sleep mode. (Network Uplink Severed).";
      } else {
        // Generic fallback that hides the real error from the UI
        customFallback = "ERR: System anomaly detected. vAI is temporarily offline while diagnostics run.";
      }
      
      streamTextResponse(customFallback);
    }
  };

  const handleManualSubmit = (e) => {
    e.preventDefault();
    triggerSend(input);
  };

  if (isBooting) {
    return (
      <div className="absolute inset-0 bg-black flex items-center justify-center font-mono z-50">
        <div className="w-8 h-8 border-[3px] border-white/10 border-t-white rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 flex flex-col font-sans text-sm bg-black text-white">
      <style>{`
        .ai-scrollbar::-webkit-scrollbar { width: 6px; }
        .ai-scrollbar::-webkit-scrollbar-track { background: #000000; }
        .ai-scrollbar::-webkit-scrollbar-thumb { background: #eab308; border-radius: 10px; }
        .ai-scrollbar::-webkit-scrollbar-thumb:hover { background: #facc15; }
      `}</style>

      <div ref={scrollRef} className="flex-1 min-h-0 overflow-y-auto px-4 py-8 sm:py-12 ai-scrollbar">
        <div className="max-w-3xl mx-auto w-full space-y-8">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] sm:max-w-[80%] flex flex-col ${
                msg.role === 'user'
                  ? 'bg-[#1a1a1a] border border-white/5 text-white rounded-3xl rounded-tr-sm px-6 py-3.5'
                  : 'bg-transparent text-white/90 py-2'
              }`}>
                {msg.role === 'model' && (
                  <div className="text-[10px] text-white/50 mb-1.5 tracking-widest uppercase font-bold flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-white/50 rounded-full"></div>
                    vAI
                  </div>
                )}
                <div className="leading-relaxed text-[15px] font-light text-white/90 [&>p]:mb-4 last:[&>p]:mb-0 [&_strong]:text-white [&_strong]:font-bold [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-4 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:mb-4 [&_code]:bg-white/10 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded-md [&_code]:text-yellow-500 [&_table]:w-full [&_table]:mb-4 [&_table]:border-collapse [&_th]:border [&_th]:border-[#22c55e]/30 [&_th]:p-2 [&_th]:text-left [&_th]:text-[#22c55e] [&_td]:border [&_td]:border-[#22c55e]/20 [&_td]:p-2">
  <ReactMarkdown 
    remarkPlugins={[remarkGfm]} 
    rehypePlugins={[rehypeRaw]}
  >
    {msg.text}
  </ReactMarkdown>
</div>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start py-2">
              <div className="flex items-center gap-2 text-white/40">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full animate-pulse"></div>
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="bg-black p-4 sm:p-6 pb-6 sm:pb-8">
        <div className="max-w-3xl mx-auto w-full flex flex-col gap-5">
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
            {SUGGESTIONS.map((sug, i) => (
              <button
                key={i}
                onClick={() => triggerSend(sug)}
                disabled={isLoading}
                className="whitespace-nowrap bg-transparent border border-white/15 text-white/70 px-4 py-2 text-[13px] hover:bg-white hover:text-black transition-all rounded-full disabled:opacity-50"
              >
                {sug}
              </button>
            ))}
          </div>

          <form onSubmit={handleManualSubmit} className="relative flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask vAI anything..."
              className="w-full bg-[#111111] border border-white/10 text-white px-6 py-4 pr-32 outline-none focus:border-white/30 focus:bg-[#1a1a1a] transition-all rounded-2xl text-[15px] placeholder-white/40 shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="absolute right-2.5 bg-white text-black px-5 py-2 hover:bg-gray-300 font-bold transition-all disabled:opacity-30 disabled:hover:bg-white text-xs rounded-xl uppercase tracking-wider"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
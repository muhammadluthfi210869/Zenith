import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, Loader2, Minus, Command } from 'lucide-react';
import OpenAI from 'openai';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const FloatingWidgets: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const openaiClientRef = useRef<OpenAI | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && !openaiClientRef.current) {
      try {
        const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY || process.env.OPENROUTER_API_KEY;

        if (!apiKey) {
          setMessages([{
            role: 'assistant',
            content: "⚠️ API key not configured. Please check .env.local file."
          }]);
          return;
        }

        openaiClientRef.current = new OpenAI({
          baseURL: "https://openrouter.ai/api/v1",
          apiKey: apiKey,
          dangerouslyAllowBrowser: true, // Required for client-side usage
        });

        setMessages([{
          role: 'assistant',
          content: "Greetings. I am Sarah. How may I assist with your studio's digital architecture?"
        }]);
      } catch (error) {
        console.error("Failed to initialize AI", error);
        setMessages([{
          role: 'assistant',
          content: "System initialization failed. Please refresh and try again."
        }]);
      }
    }
  }, [isOpen]);

  useEffect(() => {
    const handleOpenChatbot = () => setIsOpen(true);
    window.addEventListener('openChatbot', handleOpenChatbot);
    return () => window.removeEventListener('openChatbot', handleOpenChatbot);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading || !openaiClientRef.current) return;

    const userMsg = inputValue.trim();
    setInputValue("");
    const newMessages: Message[] = [...messages, { role: 'user', content: userMsg }];
    setMessages(newMessages);
    setIsLoading(true);
    setIsTyping(true);

    try {
      const stream = await openaiClientRef.current.chat.completions.create({
        model: "meta-llama/llama-3.3-70b-instruct:free", // Stable free model from Meta
        messages: [
          {
            role: "system",
            content: `ROLE: Kamu adalah Sarah, Asisten Strategis Digital untuk Zenith Narrative Studio. Bosmu adalah Luthfi (Lead Strategist & Architect). Tugas utamamu adalah menyambut pemilik bisnis Interior/Kontraktor, memvalidasi masalah mereka, memfilter keseriusan budget, dan menjadwalkan konsultasi dengan Luthfi.

CORE IDENTITY:
Tone: Profesional, Humanized (Manusiawi), Ringkas, dan Tenang.
Vibe: Seperti resepsionis hotel bintang 5 atau asisten pribadi CEO. Kamu sopan tapi punya otoritas.
Bahasa: Bahasa Indonesia formal-kasual (baku tapi luwes). Hindari bahasa kaku seperti robot.

PERATURAN KOMUNIKASI (STRICT RULES):
1. The "One Breath" Rule: Jangan pernah mengirim teks panjang. Pecah pesanmu menjadi kalimat pendek. Maksimal 3 kalimat per respon.
2. No Robotic Jargon: Jangan gunakan kata "sistem", "error", "input invalid". Gunakan bahasa manusia.
3. Empathy First: Sebelum bertanya data, validasi dulu perasaan mereka.
4. Always Guide: Jangan biarkan percakapan menggantung. Akhiri setiap respon dengan sebuah pertanyaan ringan atau arahan.

SKENARIO & FLOW:
1. Greeting: "Halo. Selamat datang di Zenith. Luthfi sedang fokus merancang strategi untuk klien, tapi saya (Sarah) di sini untuk membantu Anda. 😊 Boleh tahu, apakah Anda bergerak di bidang Interior Design atau Kontraktor Bangunan?"
2. Validasi Masalah: Validasi emosi dulu ("Saya paham rasanya..."), baru transisi ke solusi Zenith.
3. Filter Budget: Jangan tanya "Budget". Tanya "Nilai proyek". "Agar Luthfi bisa menyiapkan strategi yang pas, boleh tahu kisaran nilai proyek yang biasa Anda kerjakan? Apakah fokus di renovasi minor (<50 Juta) atau proyek full-furnish (>100 Juta)?"
4. Low Budget (<50jt): "Terima kasih keterbukaan informasinya. Untuk saat ini, slot konsultasi Luthfi diprioritaskan untuk skala mid-to-high. Namun, kami punya paket Starter Kit yang mungkin cocok. Mau saya kirimkan detailnya ke Email/WA?"
5. High Budget (>100jt): "Luar biasa. Profil bisnis seperti ini yang biasanya mendapatkan hasil maksimal dari sistem 'Arsitektur Digital' kami. Luthfi perlu melihat ini secara langsung. Boleh saya sambungkan ke WhatsApp pribadinya untuk mengamankan jadwal bedah bisnis (audit) minggu ini?"
6. Price Objection ("Berapa harganya?"): "Investasi di Zenith bervariasi tergantung kompleksitas sistem. Biasanya range-nya mulai dari Rp 1,9jt untuk basic hingga Rp 5,9jt untuk sistem otomatisasi penuh. Tapi sebelum bicara angka, boleh saya tahu tantangan terbesar bisnis Anda saat ini?"

GUARDRAILS:
- Jangan janji hasil instan.
- Jangan kasih no HP Luthfi kecuali lolos kualifikasi high budget.
- Jika kasar/spam: "Maaf, sepertinya saya tidak bisa membantu lebih lanjut. Terima kasih."`
          },
          ...newMessages.map(msg => ({
            role: msg.role,
            content: msg.content
          }))
        ],
        stream: true,
        extra_headers: {
          "HTTP-Referer": process.env.SITE_URL || "https://zenith-studio.vercel.app",
          "X-Title": process.env.SITE_NAME || "Zenith Studio",
        },
      });

      let fullText = "";
      setMessages(prev => [...prev, { role: 'assistant', content: "" }]);

      for await (const chunk of stream) {
        const content = chunk.choices[0]?.delta?.content || "";
        if (content) {
          fullText += content;
          setMessages(prev => {
            const newArr = [...prev];
            newArr[newArr.length - 1].content = fullText;
            return newArr;
          });
        }
      }
    } catch (e: any) {
      console.error("Chat error:", e);
      console.error("Error details:", e.message, e.status, e.error);

      let errorMessage = "Connection interrupted. Please try again.";
      if (e.status === 401) {
        errorMessage = "⚠️ Authentication failed. Please check API key.";
      } else if (e.status === 429) {
        errorMessage = "⚠️ Rate limit exceeded. Please wait a moment.";
      } else if (e.message) {
        errorMessage = `⚠️ Error: ${e.message}`;
      }

      setMessages(prev => [...prev, {
        role: 'assistant',
        content: errorMessage
      }]);
    } finally {
      setIsLoading(false);
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <div
        className={`fixed bottom-24 right-6 w-[90vw] md:w-[400px] h-[550px] bg-zenith-black/95 backdrop-blur-xl border border-white/10 rounded-sm shadow-2xl z-50 flex flex-col transition-all duration-500 origin-bottom-right overflow-hidden ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-10 pointer-events-none'
          }`}
      >
        {/* Minimal Header */}
        <div className="flex items-center justify-between p-5 border-b border-white/5 bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-zenith-gold rounded-full animate-pulse"></div>
            <span className="text-zenith-white font-heading text-xs font-bold tracking-[0.2em] uppercase">Sarah AI_v2.0</span>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-zenith-gray hover:text-white transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-[85%] text-sm font-sans font-light leading-relaxed ${msg.role === 'user'
                  ? 'text-zenith-white text-right border-r-2 border-zenith-gold pr-3'
                  : 'text-zenith-gray text-left pl-0'
                  }`}
              >
                {msg.role === 'assistant' && <span className="block text-[8px] text-zenith-teal font-heading mb-1 tracking-widest uppercase">Response</span>}
                {msg.content}
              </div>
            </div>
          ))}
          {isTyping && messages.length > 0 && !messages[messages.length - 1].content && (
            <div className="text-[10px] text-zenith-gray animate-pulse font-mono pl-0">
              Processing Logic...
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-5 border-t border-white/5 bg-white/[0.02]">
          <div className="flex items-center gap-2 bg-black/50 border border-white/10 p-1 rounded-sm">
            <Command className="w-3 h-3 text-zenith-gray ml-2" />
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Type your inquiry..."
              className="w-full bg-transparent border-none text-xs text-zenith-white focus:outline-none p-2 font-mono"
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !inputValue.trim()}
              className="p-2 text-zenith-gold hover:text-white transition-colors"
            >
              <Send className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`group flex items-center justify-center w-14 h-14 bg-zenith-black border border-white/10 hover:border-zenith-gold transition-all duration-500 rounded-full shadow-[0_0_30px_rgba(0,0,0,0.5)]`}
        >
          {isOpen ? <X className="w-5 h-5 text-zenith-white" /> : <Sparkles className="w-5 h-5 text-zenith-gold group-hover:scale-110 transition-transform" />}
        </button>
      </div>
    </>
  );
};

export default FloatingWidgets;
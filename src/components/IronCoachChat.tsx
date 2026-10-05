import React, { useState, useRef, useEffect } from 'react';
import { useGym } from '../context/GymContext';
import {
  Bot,
  Send,
  Sparkles,
  Flame,
  User,
  Shield,
  HelpCircle,
  RotateCcw,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'coach';
  text: string;
  time: string;
}

export const IronCoachChat: React.FC = () => {
  const { user } = useGym();

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'coach',
      text: `Welcome to the Iron Arena, **${user.name}**! 

I am **IronCoach AI**, your master sports physiologist and gym processing agent. I am here to answer any doubts about:
• **Exercise Biomechanics & Form Cues**
• **Ego Lifting Warnings & Injury Prevention**
• **Lower Body Anabolic Engine & Hormones**
• **Pre-Workout & Post-Workout Nutrient Timing**
• **Progressive Overload Execution**
• **Female Athlete Safe Pacing & Ramp-up**

What's on your mind today? Ask me any gym doubt or pick a prompt below!`,
      time: 'Just now'
    }
  ]);

  const [inputQuery, setInputQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async (queryText?: string) => {
    const textToSend = queryText || inputQuery;
    if (!textToSend.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: `usr_${Date.now()}`,
      sender: 'user',
      text: textToSend.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputQuery('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: textToSend.trim(),
          userProfile: {
            name: user.name,
            gender: user.gender,
            age: user.age,
            weightKg: user.weightKg,
            goal: user.goal,
            physiqueTier: user.physiqueTier,
            dailyWaterTargetMl: user.dailyWaterTargetMl
          }
        })
      });

      if (!response.ok) {
        throw new Error('Server error');
      }

      const data = await response.json();
      const coachMsg: ChatMessage = {
        id: `coach_${Date.now()}`,
        sender: 'coach',
        text: data.reply || 'Stay disciplined and keep pushing!',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, coachMsg]);
    } catch (err) {
      console.error(err);
      const fallbackMsg: ChatMessage = {
        id: `coach_${Date.now()}`,
        sender: 'coach',
        text: `⚠️ **Coach Note:** Form always precedes weight! For ${user.goal}, ensure you are hitting your ${user.dailyWaterTargetMl}ml water target and logging sets for progressive overload. If you're experiencing joint pain, reduce the load by 20% and use a 3-second negative descent.`,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const quickPrompts = [
    'Why is lower body so critical for upper body gains?',
    'How to prevent ego-lifting injuries on bench press?',
    'What should I eat 45 mins before gym?',
    'Female beginner starting pace guide',
    'How much sleep do muscles need to grow?',
    'Explain the Double Progression Method'
  ];

  const clearChat = () => {
    setMessages([
      {
        id: 'reset',
        sender: 'coach',
        text: `IronCoach AI reset! Ready for your next gym questions, ${user.name}.`,
        time: 'Just now'
      }
    ]);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Top Header */}
      <div className="bg-[#111111] border border-red-950/80 rounded-lg p-6 shadow-2xl relative overflow-hidden flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="bg-red-600 text-black text-xs font-black px-2.5 py-0.5 rounded uppercase tracking-wider">
              24/7 INTERACTIVE AGENT
            </span>
            <span className="text-xs text-emerald-400 font-bold flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" /> ONLINE
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-wider heading-titan">
            IRONCOACH AI CHAT BOX
          </h1>
          <p className="text-xs sm:text-sm text-zinc-300 font-medium">
            Ask any questions or doubts about workouts, ego lifting, meal timing, or muscle recovery.
          </p>
        </div>

        <button
          onClick={clearChat}
          className="text-xs font-black text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-700 px-3 py-2 rounded flex items-center gap-1.5 self-start sm:self-center transition-colors"
          title="Clear conversation"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>RESET CHAT</span>
        </button>
      </div>

      {/* Quick Prompts Chips */}
      <div className="space-y-1.5">
        <span className="text-[11px] font-black text-zinc-400 uppercase tracking-wider block">
          QUICK ATHLETE QUESTIONS:
        </span>
        <div className="flex flex-wrap gap-2">
          {quickPrompts.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(q)}
              className="text-[11px] font-bold bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-700 hover:border-red-500 px-3 py-1.5 rounded-full transition-all"
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Messages Box */}
      <div className="bg-[#0e0e0e] border border-zinc-800 rounded-lg flex flex-col h-[560px] shadow-2xl overflow-hidden">
        {/* Messages Scroll Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {messages.map((msg) => {
            const isUser = msg.sender === 'user';
            return (
              <div
                key={msg.id}
                className={`flex items-start gap-3 ${isUser ? 'flex-row-reverse' : ''}`}
              >
                {/* Avatar */}
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center font-black text-xs shrink-0 ${
                    isUser
                      ? 'bg-zinc-800 border border-zinc-700 text-white'
                      : 'bg-red-600 text-black shadow-md shadow-red-600/30'
                  }`}
                >
                  {isUser ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
                </div>

                {/* Message Bubble */}
                <div
                  className={`max-w-[85%] sm:max-w-[75%] rounded-lg p-4 text-xs sm:text-sm leading-relaxed space-y-2 ${
                    isUser
                      ? 'bg-red-600 text-white rounded-tr-none'
                      : 'bg-zinc-950 border border-zinc-800 text-zinc-200 rounded-tl-none shadow-md'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4 text-[10px] opacity-75 font-black uppercase pb-1 border-b border-white/10">
                    <span>{isUser ? user.name : 'IRONCOACH AI'}</span>
                    <span>{msg.time}</span>
                  </div>

                  {/* Body with basic markdown styling */}
                  <div className="whitespace-pre-line font-normal space-y-1">
                    {msg.text}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Typing Indicator */}
          {isLoading && (
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-red-600 text-black flex items-center justify-center font-black text-xs shrink-0 animate-pulse">
                <Bot className="w-5 h-5" />
              </div>
              <div className="bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-xs text-zinc-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                <span>Coach is analyzing biomechanics and nutrition science...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <div className="p-4 bg-black border-t border-zinc-800 flex items-center gap-2">
          <input
            type="text"
            placeholder="Type your gym or nutrition doubt here..."
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            className="flex-1 bg-zinc-900 border border-zinc-700 text-white text-xs sm:text-sm px-4 py-3 rounded focus:outline-none focus:border-red-500"
          />

          <button
            onClick={() => handleSend()}
            disabled={isLoading || !inputQuery.trim()}
            className="bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white px-5 py-3 rounded font-black text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-lg shadow-red-600/30"
          >
            <span>SEND</span>
            <Send className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

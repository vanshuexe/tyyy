import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  MessageSquare,
  X,
  Send,
  Bot,
  User,
  RotateCcw,
  Calendar,
  ExternalLink,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import {
  processUserQuery,
  getOperatingHoursStatus,
  BOT_SUGGESTIONS,
  AIResponseAction,
} from '../data/aiBotKnowledge';

interface Message {
  id: string;
  text: string;
  sender: 'bot' | 'user';
  timestamp: string;
  actions?: AIResponseAction[];
  quickReplies?: string[];
}

interface ChatBotProps {
  onOpenConsultation?: (topic?: string) => void;
  onNavigate?: (sectionId: string) => void;
}

export const ChatBot: React.FC<ChatBotProps> = ({
  onOpenConsultation,
  onNavigate,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);

  const getNowTime = () => {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const initialGreeting: Message = {
    id: 'welcome-1',
    text: `👋 **Welcome to RKPT TECH LTD.**\n\nI am your **Corporate Intelligence Assistant**.\n\nWe provide end-to-end international business consulting, legal structuring, and digital solutions across **7 Global Hubs**:\n• **Portugal** (LDA & Tech Visas)\n• **United Kingdom** (UK LTD & FinTech)\n• **Ireland** (12.5% Trading Tax)\n• **Switzerland** (GmbH / AG & Private Banking)\n• **USA** (Delaware / Wyoming LLC & C-Corp)\n• **Dubai / UAE** (0% Freezone & 10-Yr Golden Visa)\n• **India** (Technology & AI Delivery)\n\nAsk me anything about company setup, corporate tax rates, banking accounts, or IT & AI engineering!`,
    sender: 'bot',
    timestamp: getNowTime(),
    quickReplies: BOT_SUGGESTIONS.slice(0, 5),
    actions: [
      { label: 'Book Advisory Session', type: 'consultation', payload: 'Strategic Expansion' },
    ],
  };

  const [messages, setMessages] = useState<Message[]>([initialGreeting]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const dateStatus = getOperatingHoursStatus();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setUnreadCount(0);

      // On mobile screens, lock body overflow so background page cannot scroll behind chat
      let originalBodyOverflow = '';
      let originalHtmlOverflow = '';
      if (window.innerWidth < 640) {
        originalBodyOverflow = document.body.style.overflow;
        originalHtmlOverflow = document.documentElement.style.overflow;
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';
      }

      return () => {
        if (window.innerWidth < 640) {
          document.body.style.overflow = originalBodyOverflow;
          document.documentElement.style.overflow = originalHtmlOverflow;
        }
      };
    }
  }, [messages, isOpen, isTyping]);

  const handleSendMessage = (textToSend?: string) => {
    const queryText = (textToSend || input).trim();
    if (!queryText) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      text: queryText,
      sender: 'user',
      timestamp: getNowTime(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Realistic processing delay
    setTimeout(() => {
      const response = processUserQuery(queryText);
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: response.text,
        sender: 'bot',
        timestamp: getNowTime(),
        actions: response.actions,
        quickReplies: response.quickReplies,
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleResetChat = () => {
    setMessages([
      {
        ...initialGreeting,
        id: Date.now().toString(),
        timestamp: getNowTime(),
      },
    ]);
  };

  const handleActionClick = (action: AIResponseAction) => {
    if (action.type === 'consultation') {
      if (onOpenConsultation) {
        onOpenConsultation(action.payload || 'General Advisory');
      }
    } else if (action.type === 'navigate' && action.payload) {
      if (onNavigate) {
        onNavigate(action.payload);
      }
    }
  };

  // Render markdown text with bolding and bullets
  const renderFormattedContent = (content: string) => {
    const lines = content.split('\n');
    return lines.map((line, idx) => {
      const trimmed = line.trim();
      if (!trimmed) {
        return <div key={idx} className="h-2" />;
      }

      const isBullet = trimmed.startsWith('• ') || trimmed.startsWith('- ');
      const cleaned = isBullet ? trimmed.substring(2) : trimmed;

      // Parse **bold** parts
      const parts = cleaned.split(/(\*\*.*?\*\*)/g);
      const formattedParts = parts.map((part, pIdx) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <strong key={pIdx} className="font-bold text-[#0b1b36]">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return part;
      });

      if (isBullet) {
        return (
          <div key={idx} className="flex items-start gap-2 ml-1 my-0.5 leading-relaxed text-xs sm:text-[13px]">
            <span className="text-[#c91c1c] font-bold text-sm leading-none mt-0.5">•</span>
            <span className="flex-1 text-gray-800">{formattedParts}</span>
          </div>
        );
      }

      return (
        <div key={idx} className="my-0.5 leading-relaxed text-xs sm:text-[13px] text-gray-800">
          {formattedParts}
        </div>
      );
    });
  };

  return (
    <>
      {/* Floating Launcher Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
          >
            {/* Context Tooltip on Desktop */}
            <div className="hidden md:flex items-center gap-2 bg-[#0b1b36] text-white px-3.5 py-2 rounded-full shadow-xl border border-white/10 text-xs font-medium tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Ask RKPT AI • 7 Hubs & Tax</span>
            </div>

            <button
              onClick={() => setIsOpen(true)}
              className="relative w-14 h-14 bg-[#15325b] hover:bg-[#0b1b36] text-white rounded-full shadow-2xl flex items-center justify-center cursor-pointer transition-all duration-300 group border border-white/20 hover:scale-105 active:scale-95"
              title="Open RKPT AI Assistant"
            >
              <MessageSquare className="w-6 h-6 group-hover:scale-110 transition-transform" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#c91c1c] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                  {unreadCount}
                </span>
              )}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Chat Interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 w-[calc(100vw-32px)] sm:w-[440px] h-[580px] max-h-[85vh] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden z-50 flex-shrink-0 overscroll-contain"
            onWheel={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
          >
            {/* Premium Header */}
            <div className="bg-[#15325b] text-white px-4 py-3.5 flex items-center justify-between border-b border-[#1c4072] shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#0b1b36] to-[#3273a8] flex items-center justify-center border border-white/20 shadow-xs shrink-0">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-sm tracking-tight text-white">RKPT AI Assistant</h3>
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-1.5 py-0.2 rounded-full font-semibold">
                      LIVE
                    </span>
                  </div>
                  <p className="text-[11px] text-gray-300 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-[#3273a8]" />
                    <span>Global Expansion & Tech Advisor</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={handleResetChat}
                  title="Reset conversation"
                  className="p-1.5 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Date & SLA Status Bar */}
            <div className="bg-[#f0f4f9] px-3.5 py-1.5 border-b border-gray-200 text-[11px] text-[#15325b] flex items-center justify-between font-medium shrink-0">
              <div className="flex items-center gap-1.5 truncate">
                <Calendar className="w-3.5 h-3.5 text-[#3273a8] shrink-0" />
                <span className="truncate">{dateStatus.currentDate}</span>
              </div>
              <span className="text-gray-500 font-normal shrink-0">SLA: 24h Review</span>
            </div>

            {/* Messages Scroll Area */}
            <div 
              className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/70 overscroll-contain"
              onWheel={(e) => e.stopPropagation()}
            >
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`flex items-end gap-2 max-w-[90%] sm:max-w-[85%] ${
                      msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
                    }`}
                  >
                    {/* Avatar */}
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 shadow-xs text-xs font-bold ${
                        msg.sender === 'user'
                          ? 'bg-[#c91c1c] text-white'
                          : 'bg-[#15325b] text-white'
                      }`}
                    >
                      {msg.sender === 'user' ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                    </div>

                    {/* Bubble Content */}
                    <div
                      className={`p-3.5 rounded-2xl shadow-xs text-sm ${
                        msg.sender === 'user'
                          ? 'bg-[#15325b] text-white rounded-br-xs'
                          : 'bg-white border border-gray-200 text-gray-800 rounded-bl-xs'
                      }`}
                    >
                      {msg.sender === 'user' ? (
                        <p className="text-xs sm:text-[13px] leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                      ) : (
                        <div>{renderFormattedContent(msg.text)}</div>
                      )}

                      {/* Interactive Action Buttons */}
                      {msg.actions && msg.actions.length > 0 && (
                        <div className="mt-3 pt-2.5 border-t border-gray-100 flex flex-wrap gap-1.5">
                          {msg.actions.map((act, aIdx) => (
                            <button
                              key={aIdx}
                              onClick={() => handleActionClick(act)}
                              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-[#c91c1c] hover:bg-[#a01616] text-white transition-colors cursor-pointer shadow-xs active:scale-95"
                            >
                              <span>{act.label}</span>
                              {act.type === 'consultation' ? (
                                <Calendar className="w-3 h-3" />
                              ) : (
                                <ArrowRight className="w-3 h-3" />
                              )}
                            </button>
                          ))}
                        </div>
                      )}

                      <div
                        className={`text-[10px] mt-1 text-right ${
                          msg.sender === 'user' ? 'text-gray-300' : 'text-gray-400'
                        }`}
                      >
                        {msg.timestamp}
                      </div>
                    </div>
                  </div>

                  {/* Contextual Quick Suggestion Chips attached to bot reply */}
                  {msg.quickReplies && msg.quickReplies.length > 0 && msg.id === messages[messages.length - 1].id && (
                    <div className="mt-2 ml-9 flex flex-wrap gap-1.5 max-w-[90%]">
                      {msg.quickReplies.map((reply, rIdx) => (
                        <button
                          key={rIdx}
                          onClick={() => handleSendMessage(reply)}
                          className="text-[11px] bg-white hover:bg-gray-100 text-[#15325b] border border-gray-200 hover:border-[#3273a8] px-2.5 py-1 rounded-full font-medium transition-all shadow-2xs active:scale-95 cursor-pointer"
                        >
                          {reply}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex items-end gap-2 max-w-[85%]">
                  <div className="w-7 h-7 rounded-full bg-[#15325b] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                  <div className="bg-white border border-gray-200 p-3 rounded-2xl rounded-bl-xs shadow-xs">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#3273a8] animate-bounce"></span>
                      <span
                        className="w-2 h-2 rounded-full bg-[#3273a8] animate-bounce"
                        style={{ animationDelay: '0.15s' }}
                      ></span>
                      <span
                        className="w-2 h-2 rounded-full bg-[#3273a8] animate-bounce"
                        style={{ animationDelay: '0.3s' }}
                      ></span>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Pill Carousel (Always available above input) */}
            <div className="px-3 py-1.5 bg-gray-100/90 border-t border-gray-200 overflow-x-auto no-scrollbar flex items-center gap-1.5 shrink-0">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider shrink-0 flex items-center gap-1 mr-1">
                <Sparkles className="w-3 h-3 text-[#3273a8]" />
                Explore:
              </span>
              {BOT_SUGGESTIONS.map((sug, sIdx) => (
                <button
                  key={sIdx}
                  onClick={() => handleSendMessage(sug)}
                  className="whitespace-nowrap text-[11px] bg-white hover:bg-gray-50 text-[#0b1b36] border border-gray-200 px-2.5 py-0.5 rounded-full font-medium transition-colors hover:border-[#15325b] shrink-0 active:scale-95 cursor-pointer"
                >
                  {sug}
                </button>
              ))}
            </div>

            {/* Input Area */}
            <div className="p-3 bg-white border-t border-gray-200 shrink-0">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about 7 Hubs, corporate tax, banking, AI..."
                  className="flex-1 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-full text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#3273a8] focus:ring-2 focus:ring-[#3273a8]/20 transition-all"
                />
                <button
                  onClick={() => handleSendMessage()}
                  disabled={!input.trim() || isTyping}
                  className="w-10 h-10 rounded-full bg-[#c91c1c] text-white flex items-center justify-center shrink-0 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#a01616] transition-colors shadow-xs active:scale-95 cursor-pointer"
                  title="Send message"
                >
                  <Send className="w-4 h-4 ml-0.5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

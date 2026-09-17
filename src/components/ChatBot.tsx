import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'bot' | 'user';
  timestamp: Date;
}

export const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I am the RKPT AI Assistant. How can I help you today?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input.trim(),
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Simulate AI response delay
    setTimeout(() => {
      let botResponseText = "I am still learning! For detailed advisory, please use our Consultation Desk or ask about our 'services', 'pricing', 'portugal', 'switzerland', or 'ireland'.";
      
      const lowerInput = userMessage.text.toLowerCase().trim();
      
      if (lowerInput.includes('hi') || lowerInput.includes('hello') || lowerInput.includes('hey')) {
        botResponseText = "Hi there! I am the RKPT virtual assistant. How can I help you navigate our European expansion services?";
      } else if (lowerInput.includes('what is this') || lowerInput.includes('who are you')) {
        botResponseText = "This is the RKPT AI Assistant. We help businesses expand into Portugal, Switzerland, and Ireland with complete legal, fiscal, and operational support.";
      } else if (lowerInput.includes('service') || lowerInput.includes('what do you do')) {
        botResponseText = "We provide full-lifecycle corporate structuring, tax advisory, visa/immigration support, and banking introductions across our key European hubs.";
      } else if (lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('fee')) {
        botResponseText = "Our advisory fees depend on the jurisdiction and scope of your expansion. A standard setup starts around €2,500. Would you like to schedule a consultation for an exact quote?";
      } else if (lowerInput.includes('portugal')) {
        botResponseText = "Portugal is excellent for Tech Visas and the NHR tax regime. We can help you set up a local LDA in about 1 week.";
      } else if (lowerInput.includes('switzerland')) {
        botResponseText = "Switzerland offers a world-class banking sector and cantonal tax advantages. We assist with GmbH and AG setups in just a few days.";
      } else if (lowerInput.includes('ireland')) {
        botResponseText = "Ireland is known for its low 12.5% corporate tax rate and tech-friendly ecosystem. Perfect for an EU holding company!";
      } else if (lowerInput.includes('time') || lowerInput.includes('how long')) {
        botResponseText = "Formation timelines vary by region: Portugal takes about 1 week, while Ireland and Switzerland typically take 2-5 business days.";
      } else if (lowerInput.includes('contact') || lowerInput.includes('support')) {
        botResponseText = "You can reach our human advisors via the 'Advisory Desk' button at the top of the page, or by navigating to our Contact section.";
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponseText,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 w-14 h-14 bg-[#15325b] hover:bg-[#0b1b36] text-white rounded-full shadow-2xl flex items-center justify-center cursor-pointer transition-colors z-50 group"
          >
            <MessageSquare className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 w-[350px] sm:w-[400px] h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden z-50 flex-shrink-0"
          >
            {/* Header */}
            <div className="bg-[#15325b] p-4 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">RKPT Assistant</h3>
                  <p className="text-[10px] text-gray-300 uppercase tracking-wider">AI Support</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1.5 hover:bg-white/10 rounded-md transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex items-end gap-2 ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${msg.sender === 'user' ? 'bg-[#c91c1c] text-white' : 'bg-[#15325b] text-white'}`}>
                    {msg.sender === 'user' ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                  </div>
                  <div 
                    className={`max-w-[75%] p-3 rounded-2xl text-sm shadow-sm ${
                      msg.sender === 'user' 
                        ? 'bg-white text-gray-900 rounded-br-sm border border-gray-100' 
                        : 'bg-white border border-gray-100 text-gray-800 rounded-bl-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-gray-100">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-[#3273a8] focus:ring-1 focus:ring-[#3273a8] transition-all"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="w-10 h-10 rounded-full bg-[#c91c1c] text-white flex items-center justify-center shrink-0 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#a01616] transition-colors"
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

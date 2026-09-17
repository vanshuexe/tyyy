const fs = require('fs');
let content = fs.readFileSync('src/components/ChatBot.tsx', 'utf8');

const newLogic = `    // Simulate AI response delay
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
    }, 1000);`;

// Replace the old setTimeout block
content = content.replace(
  /    \/\/ Simulate AI response delay\n    setTimeout\(\(\) => \{\n(.*?\n)*?    \}, 1000\);/m,
  newLogic
);

fs.writeFileSync('src/components/ChatBot.tsx', content, 'utf8');
console.log('Expanded ChatBot logic');

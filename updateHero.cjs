const fs = require('fs');
let content = fs.readFileSync('src/components/Hero.tsx', 'utf8');

// Replace the current motion.img animation inside the Network SVG to something elegant
content = content.replace(/scale: zoomedCard === node.id \? 2.8 : \(zoomedCard && zoomedCard.startsWith\('net-'\) \? 0.8 : 1\),/g, "scale: zoomedCard === node.id ? 2 : (zoomedCard && zoomedCard.startsWith('net-') ? 0.8 : 1),");
content = content.replace(/rotateY: zoomedCard === node.id \? 720 : 0,/g, "rotateY: zoomedCard === node.id ? 360 : 0,");
content = content.replace(/z: zoomedCard === node.id \? 150 : 0,/g, "z: zoomedCard === node.id ? 50 : 0,");

// Re-write the Right side container to be an awesome 3D Tilt Card
// First, import useMotionValue, useTransform, useSpring
content = content.replace(/import { motion } from 'motion\/react';/, "import { motion, useMotionValue, useTransform, useSpring } from 'motion/react';");

// Find the Right side motion.div
const oldRightSideStart = content.indexOf('{/* Right: High-End Corporate Asset (Network Visualization) */}');
const oldRightSideEnd = content.indexOf('<svg viewBox="0 0 900 340"');

// Create the new Tilt logic in the Hero component body
const hooksString = `
  const [zoomedCard, setZoomedCard] = useState<string | null>(null);

  // 3D Tilt Logic for the Banner
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
`;

content = content.replace('  const [zoomedCard, setZoomedCard] = useState<string | null>(null);', hooksString);

const newRightSideStartStr = `
          {/* Right: High-End Corporate Asset (Hero Banner Graphic) */}
          <div style={{ perspective: '1500px' }} className="w-full relative z-10 flex items-center justify-center">
            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onTap={() => { setZoomedCard(null) }}
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1.08 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full h-[400px] lg:h-[550px] rounded-3xl overflow-hidden shadow-2xl group bg-white border border-gray-100 cursor-pointer flex items-center justify-center"
            >
`;

content = content.substring(0, oldRightSideStart) + newRightSideStartStr + content.substring(oldRightSideEnd);

// Fix the closing div for the Right side container
const closingDivIdx = content.indexOf('</motion.div>', content.indexOf('</svg>'));
content = content.substring(0, closingDivIdx + 13) + '\n          </div>' + content.substring(closingDivIdx + 13);

// Fix the bottom cards
// Since they also wanted the flags on bottom to be 3D, let's keep them, but let's change 720 to 360
content = content.replace(/rotateY: zoomedCard === '[a-z]+' \? 720 : 0/g, (match) => match.replace('720', '360'));

fs.writeFileSync('src/components/Hero.tsx', content, 'utf8');

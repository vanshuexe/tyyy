const fs = require('fs');

// 1. Update Logo.tsx to support variant="white" using CSS invert
let logoContent = fs.readFileSync('src/components/Logo.tsx', 'utf8');
if (!logoContent.includes('filter:')) {
  // Let's modify the img tag in Logo to apply invert if variant === 'white'
  logoContent = logoContent.replace(
    'className={`${sizeClasses} w-auto object-contain object-left transition-transform duration-300 group-hover:scale-105 mix-blend-multiply`}',
    'className={`${sizeClasses} w-auto object-contain object-left transition-transform duration-300 group-hover:scale-105 ${variant === \'white\' ? \'invert brightness-0 filter mix-blend-screen\' : \'mix-blend-multiply\'}`}'
  );
  // Also we need to make sure variant is available in props
  logoContent = logoContent.replace(
    'export const Logo: React.FC<LogoProps> = ({',
    'export const Logo: React.FC<LogoProps> = ({\n  variant = \'dark\','
  );
  
  // Actually, wait, if I use `invert brightness-0` on a JPG, it turns black to black, wait. 
  // Invert(1) on a white image with black text makes it a black image with white text.
  // Then mix-blend-screen removes the black background!
  logoContent = logoContent.replace(
    /className=\{\`\$\{sizeClasses\}.*\`\}/,
    'className={`${sizeClasses} w-auto object-contain object-left transition-transform duration-300 group-hover:scale-105 ${variant === \\\'white\\\' ? \\\'invert mix-blend-screen brightness-200 contrast-125\\\' : \\\'mix-blend-multiply\\\'}`}'
  );

  fs.writeFileSync('src/components/Logo.tsx', logoContent, 'utf8');
}

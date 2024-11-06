// lib/visual-utils.ts

export const gridBackgroundStyle = {
    backgroundSize: '40px 40px',
    backgroundImage: `
      linear-gradient(to right, var(--primary-color) 1px, transparent 1px),
      linear-gradient(to bottom, var(--primary-color) 1px, transparent 1px)
    `,
    maskImage: 'radial-gradient(white, transparent 85%)',
  };
  
  export const gradientText = 'bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent';
  
  export const cardHoverEffects = {
    base: 'group relative overflow-hidden border border-primary/20 hover:border-primary/40 transition-colors duration-300',
    gradient: 'bg-gradient-to-br from-primary/5 via-transparent to-secondary/5',
    corner: 'absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-tl-[100%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl',
  };
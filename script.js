// Matrix background and terminal typing for Devendra's hacker intro
(function(){
  // MATRIX RAIN
  const canvas = document.getElementById('matrix');
  const ctx = canvas.getContext('2d');
  let w = canvas.width = innerWidth;
  let h = canvas.height = innerHeight;
  const cols = Math.floor(w / 14) + 1;
  const ypos = Array(cols).fill(0);
  const letters = "01+-<>/[]{}abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*";
  function matrixFrame(){
    ctx.fillStyle = 'rgba(0,0,0,0.06)';
    ctx.fillRect(0,0,w,h);
    ctx.fillStyle = '#00ff6a';
    ctx.font = '13px monospace';
    for(let i=0;i<ypos.length;i++){
      const text = letters.charAt(Math.floor(Math.random()*letters.length));
      const x = i*14;
      ctx.fillText(text, x, ypos[i]*14);
      if(ypos[i]*14 > h && Math.random() > 0.975) ypos[i]=0;
      ypos[i]++;
    }
    requestAnimationFrame(matrixFrame);
  }
  matrixFrame();
  addEventListener('resize', ()=>{
    w = canvas.width = innerWidth;
    h = canvas.height = innerHeight;
  });

  // TERMINAL TYPING
  const linesEl = document.getElementById('lines');
  const lines = [
    "Initializing...",
    "User: Devendra (devznbot)",
    "Role: Hacker | Software Developer | Bot Developer | Security Researcher",
    "Location: Virtual",
    "Fav Stack: Node.js · Python · Go · Rust",
    "Tools: PenTest, Reverse Engineering, Automation, AI Bots",
    "Status: scanning...",
    "Contact: Instagram -> https://www.instagram.com/ndevendraa/",
    "",
    ">>> Welcome. Type HELP() to see more."
  ];
  let i=0, char=0;
  function typeLoop(){
    if(i >= lines.length) return;
    const line = lines[i];
    if(char <= line.length){
      linesEl.textContent = lines.slice(0,i).join('\n') + (i ? '\n' : '') + line.slice(0,char) + (char % 2 ? '▌' : '');
      char++;
      setTimeout(typeLoop, 45 + Math.random()*80);
    } else {
      char = 0; i++;
      setTimeout(typeLoop, 550);
    }
  }
  // start after slight delay so matrix is visible
  setTimeout(typeLoop, 700);

  // Simple keyboard interaction (optional)
  window.addEventListener('keydown', (e)=>{
    if(e.key === 'h' || e.key === 'H'){
      linesEl.textContent += "\nHELP() -> try pressing 'C' for contact link";
    }
    if(e.key === 'c' || e.key === 'C'){
      window.open('https://www.instagram.com/ndevendraa/','_blank','noopener');
    }
  });
})();

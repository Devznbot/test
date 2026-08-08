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
    if(i >= lines.length){
      // Show form after typing is complete
      setTimeout(() => {
        document.getElementById('formSection').style.display = 'block';
      }, 800);
      return;
    }
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

  // Phone Form Handler
  const phoneForm = document.getElementById('phoneForm');
  const phoneInput = document.getElementById('phoneInput');
  const formMessage = document.getElementById('formMessage');

  phoneForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const phone = phoneInput.value.trim();
    
    if(!phone){
      showMessage('Please enter a valid phone number', 'error');
      return;
    }

    // Disable button during submission
    const btn = phoneForm.querySelector('.form-btn');
    btn.disabled = true;
    const originalText = btn.textContent;
    btn.textContent = 'Submitting...';

    try {
      // Send to FormSubmit.co (free service) - replace email with yours
      const formData = new FormData();
      formData.append('phone', phone);
      formData.append('timestamp', new Date().toISOString());
      formData.append('user_agent', navigator.userAgent);

      // IMPORTANT: Replace 'your-email@example.com' with your actual email
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if(response.ok){
        showMessage('✓ Thank you! We will contact you soon.', 'success');
        phoneInput.value = '';
        setTimeout(() => {
          phoneForm.style.opacity = '0.5';
          phoneForm.style.pointerEvents = 'none';
        }, 1500);
      } else {
        showMessage('✗ Error submitting. Please try again.', 'error');
      }
    } catch(error){
      console.error('Form submission error:', error);
      showMessage('✗ Connection error. Please check and retry.', 'error');
    } finally {
      btn.disabled = false;
      btn.textContent = originalText;
    }
  });

  function showMessage(text, type){
    formMessage.textContent = text;
    formMessage.className = type;
    formMessage.style.display = 'block';
    
    if(type === 'success'){
      setTimeout(() => {
        formMessage.style.display = 'none';
      }, 4000);
    }
  }

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

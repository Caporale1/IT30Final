// script.js

window.addEventListener('DOMContentLoaded', () => {
  // 1️⃣ Try to read stored values
  let userName  = localStorage.getItem('visitorName');
  let userTheme = localStorage.getItem('visitorTheme');

  // 2️⃣ If either is missing, prompt once and store them
  if (!userName || !userTheme) {
    // Ask for name
    userName = prompt("What's your name?") || 'Friend';

    // Ask for theme preference
    const themeAnswer = prompt("Do you prefer dark or light theme?").toLowerCase();
    userTheme = (themeAnswer === 'dark') ? 'dark' : 'light';

    // Store in localStorage instead of cookies
    localStorage.setItem('visitorName',  userName);
    localStorage.setItem('visitorTheme', userTheme);
  }

  // 3️⃣ Greet the user
  // Make sure your HTML has: <div id="welcome-message"></div> (you can put it just inside <body>)
  const welcomeEl = document.getElementById('welcome-message');
  if (welcomeEl) {
    welcomeEl.textContent = `Welcome back, ${userName}!`;
  } else {
    // Fallback: create one dynamically
    const banner = document.createElement('div');
    banner.id = 'welcome-message';
    banner.textContent = `Welcome back, ${userName}!`;
    banner.classList.add('greeting');
    document.body.prepend(banner);
  }

  // 4️⃣ Apply their theme
  document.documentElement.setAttribute('data-theme', userTheme);
});

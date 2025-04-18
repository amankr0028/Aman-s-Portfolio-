const { AsyncResource } = require("async_hooks");

function toggleChat() {
    const chatBox = document.getElementById('chat-box');
    chatBox.style.display = (chatBox.style.display === 'block') ? 'none' : 'block';
}

function navigateTo(section) {
    window.location.href = `#${section}`;
}
function toggleProjects(show) {
    const hiddenProjects = document.querySelectorAll('.project.hidden');
    const showMoreBtn = document.querySelector('.show-more-btn');
    const showLessBtn = document.querySelector('.show-less-btn');

    hiddenProjects.forEach(p => p.style.display = show ? 'block' : 'none');
    showMoreBtn.style.display = show ? 'none' : 'block';
    showLessBtn.style.display = show ? 'block' : 'none';
}
document.getElementById('scrollToContact').addEventListener('click', function () {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
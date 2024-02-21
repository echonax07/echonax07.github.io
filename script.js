document.addEventListener('DOMContentLoaded', () => {
    const toggleThemeBtn = document.createElement('button');
    toggleThemeBtn.innerText = 'Toggle Dark/Light Mode';
    document.body.insertBefore(toggleThemeBtn, document.body.firstChild);

    toggleThemeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const currentMode = document.body.classList.contains('dark-mode') ? 'Dark' : 'Light';
        toggleThemeBtn.innerText = `Switch to ${currentMode === 'Dark' ? 'Light' : 'Dark'} Mode`;
    });
});

document.body.classList.add('light-mode'); // Default mode

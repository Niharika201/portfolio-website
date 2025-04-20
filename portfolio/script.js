
const sections = ['home', 'about', 'skills', 'projects', 'contact'];
sections.forEach(section => {
    document.getElementById(`${section}-link`).addEventListener('click', (e) => {
        e.preventDefault();
        sections.forEach(sec => {
            document.getElementById(`${sec}-section`).classList.add('hidden');
        });
        document.getElementById(`${section}-section`).classList.remove('hidden');
    });
});

document.getElementById('open-sidebar').addEventListener('click', function () {
    this.classList.toggle('active');
    document.getElementById('sidebar').classList.toggle('open');
});

document.getElementById('close-sidebar').addEventListener('click', function () {
    document.getElementById('sidebar').classList.remove('open');
});
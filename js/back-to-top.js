document.addEventListener('scroll', function() {
    if ((document.documentElement.scrollTop > 800) && (innerWidth >= 1065)) {
    document.getElementById('back_to_top').classList.add('show');
    }
    else {
    document.getElementById('back_to_top').classList.remove('show');
}});

function ToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
});
}
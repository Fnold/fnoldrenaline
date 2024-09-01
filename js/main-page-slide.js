window.addEventListener('scroll', function(){
    let sections = document.querySelectorAll('.info');
    for (let info = 0; info < sections.length; info++) {
        if (window.innerWidth < 600) {
            if (sections[info].getBoundingClientRect().top < window.innerHeight - 32) {
                sections[info].classList.add('sectionfade');
            }
        } else {
            if (sections[info].getBoundingClientRect().top < window.innerHeight - 128) {
                sections[info].classList.add('sectionfade');
            }
        }
    }
});
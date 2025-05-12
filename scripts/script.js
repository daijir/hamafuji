document.addEventListener('DOMContentLoaded', function() {
    const menuTabs = document.querySelectorAll('.menu-tab');
    const menuContents = document.querySelectorAll('.menu-content');
    const categoryTitles = document.querySelectorAll('.menu-category-title');
    const heroCarousel = document.querySelector('.hero-carousel');
    const heroImages = document.querySelectorAll('.hero-carousel img');
    let currentImageIndex = 0;

    heroCarousel.addEventListener('scroll', () => {
        const scrollPosition = heroCarousel.scrollLeft;
        const imageWidth = heroCarousel.clientWidth;
        const newImageIndex = Math.round(scrollPosition / imageWidth);

        if (newImageIndex !== currentImageIndex) {
            currentImageIndex = newImageIndex;
            console.log(`現在表示されている画像: ${currentImageIndex + 1}`);
        }
    });

    menuTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabId = this.dataset.tab;

            // タブのアクティブ状態を切り替え
            menuTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            // メニューコンテンツの表示・非表示を切り替え
            menuContents.forEach(content => content.classList.remove('active'));
            document.getElementById(tabId + '-menu').classList.add('active');
        });
    });

    categoryTitles.forEach(title => {
        title.addEventListener('click', function() {
            this.classList.toggle('open');
            const content = this.nextElementSibling;
            content.classList.toggle('open');
        });
    });

    const hamburgerButton = document.querySelector('.hamburger-button');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('nav a');

    hamburgerButton.addEventListener('click', function() {
        mainNav.classList.toggle('open');
        hamburgerButton.classList.toggle('open');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            if (window.innerWidth < 769) { // モバイルサイズの場合のみ
                mainNav.classList.remove('open');
                hamburgerButton.classList.remove('open');
            }
            event.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});
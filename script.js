function showSpeakerInfo(name, title, company, image) {
    document.getElementById('modalName').textContent = name;
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalCompany').textContent = company;
    document.getElementById('modalImage').src = image;
  
    document.querySelector('.modal').style.display = 'block';
    document.querySelector('.carousel').classList.add('modal-open');
}

function closeModal() {
    document.querySelector('.modal').style.display = 'none';
    document.querySelector('.carousel').classList.remove('modal-open');
}

function moveToNextCard() {
    const carouselContainer = document.querySelector('.carousel-container');
    const cardWidth = document.querySelector('.speaker-card').offsetWidth + 16;

    const currentTransform = parseInt(getComputedStyle(carouselContainer).transform.split(',')[4]) || 0;
    const maxTranslateX = -(carouselContainer.scrollWidth - carouselContainer.offsetWidth);

    if (currentTransform > maxTranslateX) {
        carouselContainer.style.transform = `translateX(${currentTransform - cardWidth}px)`;
    }
}

function moveToPrevCard() {
    const carouselContainer = document.querySelector('.carousel-container');
    const cardWidth = document.querySelector('.speaker-card').offsetWidth + 16;

    const currentTransform = parseInt(getComputedStyle(carouselContainer).transform.split(',')[4]) || 0;

    if (currentTransform < 0) {
        carouselContainer.style.transform = `translateX(${currentTransform + cardWidth}px)`;
    }
}

document.querySelector('.carousel-btn.left').addEventListener('click', moveToPrevCard);
document.querySelector('.carousel-btn.right').addEventListener('click', moveToNextCard);

document.querySelectorAll('.speaker-card').forEach(card => {
    card.addEventListener('click', function () {
        const name = this.querySelector('h3').textContent;
        const title = this.querySelector('p').textContent;
        const company = this.querySelector('span').textContent;
        const image = this.querySelector('img').src;
        
        showSpeakerInfo(name, title, company, image);
    });
});

document.querySelector('.modal-close-btn').addEventListener('click', closeModal);

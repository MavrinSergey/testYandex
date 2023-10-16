window.addEventListener("DOMContentLoaded", () => {
    if (window.innerWidth < 1362) {
        document.querySelector(".content").remove();

        const content = document.createElement('section');
        content.className = 'content swiper'
        console.log(content)
        content.insertAdjacentHTML('afterbegin',
            `
                <h3 class="content__title">Эксклюзивный доступ<br> к событиям Самокатов</h3>
                <p class="text content__text">С абонементом — у вас доступ<br>к специальным мероприятиям,
                    <br>скидки и классный мерч. В 2023 году
                    <br>мы танцевали на Даче Плюс
                    <br>с Антохой MC, катались на самокатах
                    <br> с Сергеем Мезенцевым и слушали хор
                    <br>Attaque de Panique</p>
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <img src="./img/party_1_Mobile.png" alt="вечеринка"/>
                    </div>
                    <div class="swiper-slide">
                        <img src="./img/party_2_Mobile.png" alt="вечеринка"/>
                    </div>
                    <div class="swiper-slide">
                        <img src="./img/party_3_Mobile.png" alt="вечеринка"/>
                    </div>
                    <div class="swiper-slide">
                        <img src="./img/party_4_Mobile.png" alt="вечеринка"/>
                    </div>
                </div>
                <div class="arrow">
                    <div class="arrow__prev">
                        <svg xmlns="http://www.w3.org/2000/svg" width="49" height="48" viewBox="0 0 49 48" fill="none">
                            <circle cx="24" cy="24" r="24" transform="matrix(-1 0 0 1 48.5 0)" fill="#FFDE40"/>
                            <path d="M35.75 22.5C36.5784 22.5 37.25 23.1716 37.25 24C37.25 24.8284 36.5784 25.5 35.75 25.5L35.75 22.5ZM12.1893 25.0607C11.6036 24.4749 11.6036 23.5251 12.1893 22.9393L21.7353 13.3934C22.3211 12.8076 23.2708 12.8076 23.8566 13.3934C24.4424 13.9792 24.4424 14.9289 23.8566 15.5147L15.3713 24L23.8566 32.4853C24.4424 33.0711 24.4424 34.0208 23.8566 34.6066C23.2708 35.1924 22.3211 35.1924 21.7353 34.6066L12.1893 25.0607ZM35.75 25.5L13.25 25.5L13.25 22.5L35.75 22.5L35.75 25.5Z" fill="#21201F"/>
                        </svg>
                    </div>
                    <div class="arrow__next">
                        <svg xmlns="http://www.w3.org/2000/svg" width="49" height="48" viewBox="0 0 49 48" fill="none">
                            <circle cx="24.5" cy="24" r="24" fill="#FFDE40"/>
                            <path d="M13.25 22.5C12.4216 22.5 11.75 23.1716 11.75 24C11.75 24.8284 12.4216 25.5 13.25 25.5L13.25 22.5ZM36.8107 25.0607C37.3964 24.4749 37.3964 23.5251 36.8107 22.9393L27.2647 13.3934C26.6789 12.8076 25.7292 12.8076 25.1434 13.3934C24.5576 13.9792 24.5576 14.9289 25.1434 15.5147L33.6287 24L25.1434 32.4853C24.5576 33.0711 24.5576 34.0208 25.1434 34.6066C25.7292 35.1924 26.6789 35.1924 27.2647 34.6066L36.8107 25.0607ZM13.25 25.5L35.75 25.5L35.75 22.5L13.25 22.5L13.25 25.5Z" fill="#21201F"/>
                        </svg>
                    </div>
                </div>
                `)
        const privilege = document.querySelector('.privilege');
        privilege.insertAdjacentElement('afterend', content);
        const swiper = new Swiper(".swiper", {
            // loop: true,
            navigation: {
                nextEl: ".arrow__next",
                prevEl: ".arrow__prev",
            },
            slidesPerView: 1,
            spaceBetween: 15,

            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                },
            },
        });
    }
});
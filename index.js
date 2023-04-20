const homepage = document.querySelector('#homepage');

const hamburger = document.querySelector('#hamburger-menu');

const crossInMenu = document.querySelector('#close-menu');

hamburger.addEventListener('click', (e) => {
    document.querySelector('#menu').style.display = 'block';
});

crossInMenu.addEventListener('click', (e) => {
    document.querySelector('#menu').style.display = 'none';
});

const featuredSpeakers = document.createElement('section');
featuredSpeakers.setAttribute('id', 'featuredspeakers-section');
featuredSpeakers.classList.add('highlevel-section');
featuredSpeakers.innerHTML = `
<div class="highlevel-section-div mt-3">
                <p style="text-align: center; font-weight: 700;font-size: 1.7rem;">Featured Speakers</p>
                <center><hr style="border: 1px solid #ec5242; width: 10%;"></center>
                </div>

                <div id="block-78910" class="highlevel-section-div mt-5">
                    <div  class="highlevel-section-div-2 mb-5">
                        <div><img src="./assets/lecturer1.jpg" alt="lecture 2" /></div>
                        <div><h4 style="font-weight: 700;">Yochai Benkler</h4>
                        <p style="font-style: italic; color:#ec5242; font-size: 0.85rem; font-weight: 700;">Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School</p><hr style="border: 1px solid #d3d3d3; width: 10%;"><p style="font-size: 0.75rem;">Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006</p></div>
                    </div>
                    <div class="highlevel-section-div-2 mb-5">
                        <div><img src="./assets/lecturer3.jpg" alt="lecture 2" /></div>
                        <div><h4 style="font-weight: 700;">SohYeong Noh</h4>
                            <p style="font-style: italic; color:#ec5242; font-size: 0.85rem; font-weight: 700;">Director of Art Centre Nabi and a board member of CC Korea</p><hr style="border: 1px solid #d3d3d3; width: 10%;"><p style="font-size: 0.75rem;">As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.</p></div>
                    </div>
                    <div id="head-7" class="highlevel-section-div-2 mb-5">
                        <div><img src="./assets/lecturer2.jpg" alt="lecture 3" /></div>
                        <div><h4 style="font-weight: 700;">SohYeong Noh</h4>
                            <p style="font-style: italic; color:#ec5242; font-size: 0.85rem; font-weight: 700;">Director of Art Centre Nabi and a board member of CC Korea</p><hr style="border: 1px solid #d3d3d3; width: 10%;"><p style="font-size: 0.75rem;">As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.</p></div>
                    </div>
                    <div id="head-8" class="highlevel-section-div-2 mb-5">
                        <div><img src="./assets/lecturer4.jpg" alt="lecture 4" /></div>
                        <div><h4 style="font-weight: 700;">SohYeong Noh</h4>
                            <p style="font-style: italic; color:#ec5242; font-size: 0.85rem; font-weight: 700;">Director of Art Centre Nabi and a board member of CC Korea</p><hr style="border: 1px solid #d3d3d3; width: 10%;"><p style="font-size: 0.75rem;">As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.</p></div>
                    </div>
                    <div id="head-9" class="highlevel-section-div-2 mb-5">
                        <div><img src="./assets/lecturer5.jpg" alt="lecture 6" /></div>
                        <div><h4 style="font-weight: 700;">SohYeong Noh</h4>
                            <p style="font-style: italic; color:#ec5242; font-size: 0.85rem; font-weight: 700;">Director of Art Centre Nabi and a board member of CC Korea</p><hr style="border: 1px solid #d3d3d3; width: 10%;"><p style="font-size: 0.75rem;">As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.</p></div>
                    </div>
                    <div id="head-10" class="highlevel-section-div-2 mb-5">
                        <div><img src="./assets/lecturer6.jpg" alt="lecture 6" /></div>
                        <div><h4 style="font-weight: 700;">SohYeong Noh</h4>
                            <p style="font-style: italic; color:#ec5242; font-size: 0.85rem; font-weight: 700;">Director of Art Centre Nabi and a board member of CC Korea</p><hr style="border: 1px solid #d3d3d3; width: 10%;"><p style="font-size: 0.75rem;">As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.</p></div>
                    </div>
                </div>
                <div id="button-3" class="highlevel-section-div mb-5"><button class="p-2" style="width: 100%; background-color: #ffffff; border: 1px solid #d3d3d3; border-radius: 5%;">
                    MORE <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ec5242" class="bi bi-chevron-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                      </svg>
                </button></div>
`;
console.log(featuredSpeakers);
document.querySelector('#homepage').insertBefore(featuredSpeakers, document.querySelector('#partners'));
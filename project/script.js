// Header area //

const header = 
`
<img src="./images/Frame.svg" alt="Logo Zomentum">
<nav id="nav">
    <button id="btn-burger"><span id="burger"></span></button>
    <div id="menu">
        <a href="#features-area">Features</a>
        <a href="#services-area1">Services</a>
        <a href="">Contact</a>
        <button id="btn-demo">Get a demo</button>    
    </div>
</nav>
`

document.getElementById('header-area').innerHTML = header

// Botao hamburger //

const btnMobile = document.getElementById('btn-burger');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault ()
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

// Home area //

const home = 
`
    <div id="text-area">
        <h1>Find the right partners to fuel your business growth</h1>
        <p>Join a vibrant community of MSPs to forge long-lasting relationships with partners that help you create excellent customer experiences</p>
    </div>
    <div id="img-area">
        <img src="./images/PartnerHeroImageLeft.svg" alt="Make-Partnerships-img">
        <button>Register today</button>
        <img src="./images/PartnerHeroImageRight.svg" alt="Raise-Profits-img">
    </div>
`

document.getElementById('home-area').innerHTML = home

// Features // 

const features = 
`
<h1>List. Sell. Grow</h1>
<div id="cards">
    <div>
        <img src="./images/icon1.svg" alt="All-in-one-img">
        <p>Be a part of the only  All-In-One platform for IT </p>
    </div>
    <div>
        <img src="./images/icon2.svg" alt="Find-costumers-img">
        <p>Come closer to finding your next customer</p>
    </div>
    <div>
        <img src="./images/icon3.svg" alt="Grow-business-img">
        <p>Grow your business with a single click</p>
    </div>
</div>
`

document.getElementById('features-area').innerHTML = features

// Services 1 //

const services1 = 
`
<aside>
    <h3>Your channel program 
        on steroids</h3>
    <p>Tired of finding MSPs that can help you boost your channel sales?  You’re in luck, because they’re all here.</p>
</aside>
<img src="./images/figure1.svg" alt="Find-MSPs-img">
`

document.getElementById('services-area1').innerHTML = services1

// Services 2 // 

const services2 = 
`
<img id="services2-img" src="./images/figure2.svg" alt="Best-Vendor-img">
<aside>
    <h3>Become the vendor
        everyone wants to buy from</h3>
    <p id="text-services2">Gain brand authority and visibility with the help of the largest IT service ecosystem. Find customers who are looking for your solution right now!</p>
    <a href="#" class="btn-signup">
        <p>Signup now</p>
        <img src="./images/Right menu Arrow.svg" alt="Arrow-button">
    </a>
</aside>
`

document.getElementById('services-area2').innerHTML = services2

// Services 3 //

const services3 = 
`
<aside>
    <h3>It’s like having Your best
        Salesman on autopilot</h3>
    <p id="text-services3">Share collaterals and documents that are automatically branded. Leverage a rich partner network that sells your solution exactly the way your best salesman would.</p>
    <a href="#" class="btn-signup">
        <p>Signup now</p>
        <img src="./images/Right menu Arrow.svg" alt="Arrow-button">
    </a>
</aside>
<img id="services3-img" src="./images/figure3.svg" alt="Sell-fast-img">
`

document.getElementById('services-area3').innerHTML = services3

// Services 4 //

const services4 = 
`
<img id="services4-img" src="./images/figure4.svg" alt="Statistical-analysis-img">
<aside>
    <h3>Track your channel performance</h3>
    <p id="text-services4">Monitor the health and revenue of your channel program and streamline your campaign to win more customers within Zomentum.</p>
    <a href="#" class="btn-signup">
        <p>Signup now</p>
        <img src="./images/Right menu Arrow.svg" alt="Arrow-button">
    </a>
</aside>
`

document.getElementById('services-area4').innerHTML = services4

// Footer informs //

const footer = 
`
<div class="informs-2p2">
    <div class="footer-inform">
        <h3>Product</h3>
        <div class="inform-link">
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Integrations</a>
            <a href="#">Product</a>
        </div>
    </div>
    <div class="footer-inform">
        <h3>Company</h3>
        <div class="inform-link">
            <a href="#">About us</a>
            <a href="#">Contact us</a>
            <a href="#">Submit a ticket</a>
            <a href="#">Privacy policy</a>
            <a href="#">Terms & conditions</a>
        </div>
    </div>
    </div>
    <div class="informs-2p2">
    <div class="footer-inform">
        <h3>Guides</h3>
        <div class="inform-link">
            <a href="#">MSP</a>
            <a href="#">MSP Sales</a>
        </div>
    </div>
    <div class="footer-inform">
        <h3>Contact Us</h3>
        <div class="inform-link">
            <a href="#">Address</a>
        </div>
    </div>
</div>
`

document.getElementById('informs').innerHTML = footer

// Copyright automatico //

var ano = new Date().getFullYear();

var data = `© ${ano} Pactora Inc. All rights reserved.`

document.getElementById('copyright').innerHTML = data
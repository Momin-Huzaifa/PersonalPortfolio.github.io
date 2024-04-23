// Skill data fetching

const allcardskill = document.querySelector(".allskillouterinner");

const jsonfile = "./Skill.json";

function Skill() {
  fetch(jsonfile)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.map((items) => {
        const { id, name, icon, level } = items;
        allcardskill.innerHTML += `
                <div class="col-lg-2 col-6 col-md-4 d-flex justify-content-center" id=${id}>
                    <div class="html allskillicon">
                        <span><a href="#"><img src=${icon} alt="Html" /></a></span>
                        <h4>${name}</h4>
                        <span>${level}</span>
                    </div>
               </div>
        `;
      });
    });
}

Skill();
// Skill data fetching

// Service data fetching

async function ServiceData() {
  const allservicecard = document.querySelector(".allservicecard");
  const Servicefile = "./Service.json";
  // const servicerecords = await fetch(Servicefile);
  try {
    const response = await fetch(Servicefile);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const servicerecords = await response.json();

    servicerecords.forEach((element) => {
      const { serviceicon, servicename, servicenamesec, servicepara } = element;
      allservicecard.innerHTML += `
      <div class="col-lg-3 col-md-6 d-flex justify-content-center">
            <div class="servicecard">
                <div class="servicecardinner">
                    <i class="${serviceicon}"></i>
                    <h4>${servicename}<br />${servicenamesec}</h4>
                    <p>${servicepara}</p>
                </div>
            </div>
      </div>
      `;
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

ServiceData();

// Service data fetching

// Qualification data fetching

const Educationcard = [
  {
    id: 1,
    Educationcardimage: "/img/YCMOU.jpg",
    Educationcardh3: "Bachelor Of Computer Application",
    Educationcardpara:
      " Yashwantrao Chavan Maharashtra Open University | YCMOU",
    Educationcardh4: "2022-2024 | Pursuing",
    Educationclass: "Educationcardinner",
  },
  {
    id: 2,
    Educationcardimage: "/img/B.n.n.jpg",
    Educationcardh3: "HSC Commerce",
    Educationcardpara:
      " Padmashri Annasaheb Jadhav Bharatiya Samaj Unnati Mandal's B.N.N. College, Bhiwandi",
    Educationcardh4: "2018-2020 | Completed",
    Educationclass: "Educationcardinner",
  },
];

const Qualification = document.querySelector(".Educationcard");

const Qualificationshow = () => {
  for (const card of Educationcard) {
    Qualification.innerHTML += `
    <div class="row ${card.Educationclass}">
    <div class="col-lg-3 p-0">
        <div class="Educationcardimg" ${card.id}>
            <img src=${card.Educationcardimage} alt="" />
        </div>
    </div>
    <div class="col-lg-9 py-3">
        <div class="Educationcardtext">
            <h3>${card.Educationcardh3}</h3>
            <p>${card.Educationcardpara}</p>
            <h4>${card.Educationcardh4}</h4>
        </div>
    </div>
</div>
    `;
  }
};

Qualificationshow();
// Qualification data fetching

// Typed text js
let typing = new Typed(".typingtexteffect", {
  strings: ["frontend development", "web designing", "web development"],
  loop: true,
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 1000,
});

let Myname = new Typed(".Myname", {
  strings: ["Huzaifa"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 75,
  backDelay: 3000,
});
// Typed text js

// ================== SCROLLREVEAL JS LINK ==================

const scrollrev = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});

scrollrev.reveal(`.Nametitle, .Footer-section`);
scrollrev.reveal(`.allmain`);
scrollrev.reveal(`.Boigraphyside`, {
  delay: 600,
  origin: "bottom",
  interval: 100,
});
scrollrev.reveal(`.allSkill`, { origin: "top" });
scrollrev.reveal(`.down_skill`, { origin: "right" });
scrollrev.reveal(`.Educationcardinner:nth-child(1), .Contact-leftside`, {
  origin: "top",
});
scrollrev.reveal(`.Educationcardinner:nth-child(2), .Contact-rightside`, {
  origin: "bottom",
});
scrollrev.reveal(`.allservicecard`, { origin: "top" });
scrollrev.reveal(`.Projectslider`, { origin: "top" });
scrollrev.reveal(`#Testimonialslider`, { origin: "top" });

// navbar sticky
window.addEventListener("scroll", function () {
  let navbar = document.querySelector(".navbar");
  if (window.scrollY >= 10) {
    navbar.classList.add("fixed-top");
  } else {
    navbar.classList.remove("fixed-top");
  }
});

//Owl Carousel 1
$("#Projectslider .owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 2,
    },
  },
});

$("#Testimonialslider .owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

let moonicon = document.querySelector(".ri-sun-line");
let footerlink = document.querySelectorAll(".allFooterlink");
let inputfield2 = document.querySelectorAll(".contact-formlabelinput");
let InputLabel = document.querySelectorAll(".contact-formlabelinput label");
let FullBody = document.querySelector("body");
let Submitbtn = document.querySelector(".Submitbutton");
let Profilelink = document.querySelectorAll(".Mainimageicon");

function Moonclick() {
  if (moonicon.className === "ri-sun-line") {
    moonicon.classList.add("ri-moon-line")
  }else{
    moonicon.classList.remove("ri-moon-line")
  }

  FullBody.classList.toggle("dark_mode");
  const Arrayconvertitem = Array.from(footerlink);
  Arrayconvertitem.forEach((item) => {
    item.classList.toggle("allFooterlink2");
    item.classList.toggle("Sociallink1");
  });
  console.log(Arrayconvertitem);

  const InputArrayconvert = Array.from(inputfield2);
  InputArrayconvert.map((item) => {
    item.classList.toggle("contact-formlabelinput2");
  });
  console.log(InputArrayconvert);
  Submitbtn.classList.toggle("Submitbutton2");
  const ArrayconvertProfilelink = Array.from(Profilelink);
  ArrayconvertProfilelink.forEach((item) => {
    item.classList.toggle("Mainimageicon2");
  });
  console.log(ArrayconvertProfilelink);
}

moonicon.addEventListener("click", Moonclick);

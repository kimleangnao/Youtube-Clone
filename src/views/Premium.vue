<template>
  <div class="premium">
    <div class="premium__title">
      <i class="fab fa-youtube"></i>YouTube Premium
    </div>
    <p class="premium__p">YouTube and YouTube Music ad-free,</p>
    <p class="premium__p2">Offline, and in the background</p>

    <button class="premiun__button">TRY IT FREE</button>
    <p class="premium__p3">1-month free trial &bullet; Then $11.99/month</p>
    <p class="premium__p4">We'll remind you 7 days before your trial ends</p>
    <p class="premium__p5">
      Free trial for eligible new members only &bullet; Recurring billing
      &bullet; Cancel anytime
    </p>
    <p class="premium__p6">
      Or save money with a
      <span class="highlight__blue">family or student plan</span>
    </p>
    <p class="premium__p7">
      <span class="highlight__blue">Restrictions apply. Learn more here.</span>
    </p>
    <div class="premium__benefits">
      <div class="premium__benefits__wrap">
        <svg class="premium__benefits__wrap__svg">
          <circle cx="50" cy="50" r="50" class="svg__red" />
          <path d="M45 38 L 45 62 L 62 50 Z" class="svg__red--1px" />
        </svg>
        <p class="premium__benefits__wrap__p">Ad-free & background play</p>
        <p class="premium__benefits__wrap__p2">
          Watch videos uninterrupted by ads, while using other apps, or when the
          screen is locked.
        </p>
      </div>
      <div class="premium__benefits__wrap">
        <svg class="premium__benefits__wrap__svg">
          <circle cx="50" cy="50" r="50" class="svg__red" />
          <path
            d="M45 25 L 55 25 L 55 45 L 65 45 L 50 65 L 35 45 L 45 45 Z"
            class="svg__red--1px"
          />
          <path d="M30 75 L 70 75 L 70 78 L 30 78 Z" class="svg__red--1px" />
        </svg>
        <p class="premium__benefits__wrap__p">Downloads</p>
        <p class="premium__benefits__wrap__p2">
          Save videos for when you really need them - like when you're on a
          plane or commuting.
        </p>
      </div>
      <div class="premium__benefits__wrap">
        <svg class="premium__benefits__wrap__svg">
          <circle cx="50" cy="50" r="50" class="svg__red" />
          <path d="M45 38 L 45 62 L 62 50 Z" class="svg__red--1px" />
        </svg>
        <p class="premium__benefits__wrap__p">YouTube Music Premium</p>
        <p class="premium__benefits__wrap__p2">
          Download our new music app and listen without interruptions.
        </p>
      </div>
    </div>
    <div class="premium__image">
      <img :src="jungle" alt="" class="premium__image__background" />
      <p class="premium__image__p">Ad-free</p>
      <div class="premium__image__wrap">
        Enjoy watching YouTube uninterrupted by ads whenever you sign in - on
        your mobile device, desktop, or enabled TV.
      </div>
    </div>
    <div class="premium__image">
      <img :src="natural" alt="" class="premium__image__background" />
      <p class="premium__image__p2">Download and go</p>
      <div class="premium__image__wrap2">
        Save videos for when you're low on data or can't get online.
      </div>
    </div>
    <div class="premium__image">
      <img :src="rocks" alt="" class="premium__image__background" />
      <p class="premium__image__p">Background play</p>
      <div class="premium__image__wrap">
        With YouTube Premium, your video plays uninterrupted in the background,
        even when you open another app.
      </div>
    </div>
    <div class="premium__image">
      <img :src="sunset" alt="" class="premium__image__background" />
      <p class="premium__image__p2">YouTube Music Premium</p>
      <div class="premium__image__wrap4">
        Easily explore the world of music ad-free, offline, and with the screen
        locked. Available on mobile and desktop.
      </div>
    </div>
    <div class="premium__faq">
      <div class="premium__faq__title">FAQ</div>
      <div class="premium__faq__question">
        <div class="premium__faq__question__text">
          What is included with YouTube Premium ?
        </div>
        <div class="premium__faq__question__icon">
          <i class="fas fa-angle-down"></i>
        </div>
      </div>
      <div class="premium__faq__question">
        <div class="premium__faq__question__text">
          How does downloading videos and music work?
        </div>
        <div class="premium__faq__question__icon">
          <i class="fas fa-angle-down"></i>
        </div>
      </div>
      <div class="premium__faq__question">
        <div class="premium__faq__question__text">
          What is background play?
        </div>
        <div class="premium__faq__question__icon">
          <i class="fas fa-angle-down"></i>
        </div>
      </div>
      <div class="premium__faq__question">
        <div class="premium__faq__question__text">
          How can I cancel my membership?
        </div>
        <div class="premium__faq__question__icon">
          <i class="fas fa-angle-down"></i>
        </div>
      </div>
    </div>
    <div class="premium__help">
      Have other quetsions? Visit the
      <span class="highlight__blue">YouTube Help Center</span>
    </div>
  </div>
</template>

<script>
import jungle from "@/assets/jungle.jpg";
import natural from "@/assets/natural.png";
import rocks from "@/assets/rocks.png";
import sunset from "@/assets/sunset.jpg";
export default {
  name: "Premium",
  setup() {
    return { jungle, natural, rocks, sunset };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap");

@media only screen and (min-width: 321px) {
  .premium {
    width: 100%;
    margin-top: 60px;
    margin: 0 auto;
    padding-bottom: 30px;
  }
  .premium__faq {
    width: 95%;
    margin: 100px auto;
  }
  .premium__help {
    width: 95%;
    height: 70px;
    text-align: left;
    margin: 0 auto;
    font-size: 1.2rem;
    font-family: "Roboto", Arial, sans-serif;
  }

  .premium__image {
    width: 100%;
    height: 250px;
    position: relative;
  }
  .premium__image__background {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .premium__image__p {
    font-size: 2rem;
    font-family: "Roboto", Arial, sans-serif;
    font-weight: 400;
    color: white;
    position: absolute;
    margin-left: 5%;
    margin-top: -35%;
  }
  .premium__image__wrap2 {
    width: 90%;
    font-size: 1.2rem;
    font-family: "Roboto", Arial, sans-serif;
    font-weight: 400;
    color: white;
    position: absolute;
    margin-left: 5%;
    margin-top: -20%;
    text-align: left;
  }
  .premium__image__wrap4 {
    width: 90%;
    height: 80px;
    font-size: 1.2rem;
    font-family: "Roboto", Arial, sans-serif;
    font-weight: 400;
    color: white;
    position: absolute;
    margin-left: 5%;
    margin-top: -20%;
    text-align: left;
  }
  .premium__image__wrap {
    width: 90%;
    font-size: 1.2rem;
    font-family: "Roboto", Arial, sans-serif;
    font-weight: 400;
    color: white;
    position: absolute;
    margin-left: 5%;
    margin-top: -25%;
    text-align: left;
  }
  .premium__image__p2 {
    font-size: 2rem;
    font-family: "Roboto", Arial, sans-serif;
    font-weight: 400;
    color: white;
    position: absolute;
    margin-left: 5%;
    margin-top: -30%;
    width: 90%;
    text-align: left;
  }
}
@media only screen and (min-width: 768px) {
  .premium {
    width: 100%;
    margin-top: 60px;
    margin: 0 auto;
    padding-bottom: 30px;
  }
  .premium__faq {
    width: 643px;
    margin: 100px auto;
  }
  .premium__help {
    width: 643px;
    height: 70px;
    text-align: left;
    margin: 0 auto;
    font-size: 1.2rem;
    font-family: "Roboto", Arial, sans-serif;
  }

  .premium__image {
    width: 100%;
    height: 350px;
    position: relative;
  }
  .premium__image__background {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .premium__image__p {
    font-size: 3rem;
    font-family: "Roboto", Arial, sans-serif;
    font-weight: 400;
    color: white;
    position: absolute;
    margin-left: 50%;
    margin-top: -30%;
  }
  .premium__image__wrap2 {
    width: 40%;
    font-size: 1.2rem;
    font-family: "Roboto", Arial, sans-serif;
    font-weight: 400;
    color: white;
    position: absolute;
    margin-left: 5%;
    margin-top: -20%;
    text-align: left;
  }
  .premium__image__wrap4 {
    width: 40%;
    height: 80px;
    font-size: 1.2rem;
    font-family: "Roboto", Arial, sans-serif;
    font-weight: 400;
    color: white;
    position: absolute;
    margin-left: 5%;
    margin-top: -20%;
    text-align: left;
  }
  .premium__image__wrap {
    width: 40%;
    font-size: 1.2rem;
    font-family: "Roboto", Arial, sans-serif;
    font-weight: 400;
    color: white;
    position: absolute;
    margin-left: 50%;
    margin-top: -20%;
    text-align: left;
  }
  .premium__image__p2 {
    font-size: 2rem;
    font-family: "Roboto", Arial, sans-serif;
    font-weight: 400;
    color: white;
    position: absolute;
    margin-left: 5%;
    margin-top: -25%;

    text-align: left;
  }
}
@media only screen and (min-width: 1224px) {
  .premium {
    width: 1000px;
    margin-top: 60px;
    margin: 0 auto;
    padding-bottom: 30px;
  }
  .premium__faq {
    width: 643px;
    margin: 100px auto;
  }

  .premium__image {
    width: 100%;
    height: 450px;
    position: relative;
  }
  .premium__image__background {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .premium__image__p {
    font-size: 3rem;
    font-family: "Roboto", Arial, sans-serif;
    font-weight: 400;
    color: white;
    position: absolute;
    margin-left: 50%;
    margin-top: -28%;
  }
  .premium__image__wrap2 {
    width: 40%;
    font-size: 1.2rem;
    font-family: "Roboto", Arial, sans-serif;
    font-weight: 400;
    color: white;
    position: absolute;
    margin-left: 5%;
    margin-top: -20%;
    text-align: left;
  }
  .premium__image__wrap4 {
    width: 40%;
    height: 80px;
    font-size: 1.2rem;
    font-family: "Roboto", Arial, sans-serif;
    font-weight: 400;
    color: white;
    position: absolute;
    margin-left: 5%;
    margin-top: -20%;
    text-align: left;
  }
  .premium__image__wrap {
    width: 40%;
    font-size: 1.2rem;
    font-family: "Roboto", Arial, sans-serif;
    font-weight: 400;
    color: white;
    position: absolute;
    margin-left: 50%;
    margin-top: -20%;
    text-align: left;
  }
  .premium__image__p2 {
    font-size: 2rem;
    font-family: "Roboto", Arial, sans-serif;
    font-weight: 400;
    color: white;
    position: absolute;
    margin-left: 5%;
    margin-top: -25%;

    text-align: left;
  }
}
@media only screen and (min-width: 1824px) {
  .premium {
    width: 1260px;
    margin-top: 60px;
    margin: 0 auto;
    padding-bottom: 30px;
  }
  .premium__faq {
    width: 643px;
    margin: 100px auto;
  }

  .premium__image {
    width: 100%;
    height: 450px;
    position: relative;
  }
  .premium__image__background {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .premium__image__p {
    font-size: 3rem;
    font-family: "Roboto", Arial, sans-serif;
    font-weight: 400;
    color: white;
    position: absolute;
    margin-left: 50%;
    margin-top: -25%;
  }
  .premium__image__wrap2 {
    width: 40%;
    font-size: 1.2rem;
    font-family: "Roboto", Arial, sans-serif;
    font-weight: 400;
    color: white;
    position: absolute;
    margin-left: 5%;
    margin-top: -20%;
    text-align: left;
  }
  .premium__image__wrap4 {
    width: 40%;
    height: 80px;
    font-size: 1.2rem;
    font-family: "Roboto", Arial, sans-serif;
    font-weight: 400;
    color: white;
    position: absolute;
    margin-left: 5%;
    margin-top: -20%;
    text-align: left;
  }
  .premium__image__wrap {
    width: 40%;
    font-size: 1.2rem;
    font-family: "Roboto", Arial, sans-serif;
    font-weight: 400;
    color: white;
    position: absolute;
    margin-left: 50%;
    margin-top: -20%;
    text-align: left;
  }
  .premium__image__p2 {
    font-size: 2rem;
    font-family: "Roboto", Arial, sans-serif;
    font-weight: 400;
    color: white;
    position: absolute;
    margin-left: 5%;
    margin-top: -24%;

    text-align: left;
  }
}

.premium__title {
  padding-top: 150px;
  font-size: 3rem;
  font-family: "Oswald", sans-serif;
  font-weight: 500;
  color: black;
  letter-spacing: -2px;
}
.premium__title .fa-youtube {
  font-size: 3.4rem;
  line-height: 75px;
  color: red;
}
.premium__p,
.premium__p2 {
  font-size: 1.9rem;
  font-family: "Roboto", Arial, sans-serif;
  font-weight: 300;
  color: black;
}
.premium__p2 {
  margin-top: -1.8rem;
}
.premiun__button {
  background-color: rgb(12, 99, 187);
  color: white;
  padding: 10px 15px;
  border: 1px solid rgb(12, 99, 187);
  font-family: "Roboto", Arial, sans-serif;
  font-weight: 500;
  margin-top: 20px;
  font-size: 0.9rem;
}
.premiun__button:hover {
  cursor: pointer;
}
.premiun__button:focus {
  outline: 0;
}
.premium__p3 {
  font-size: 1.4rem;
  font-family: "Roboto", Arial, sans-serif;
  font-weight: 300;
}
.premium__p4,
.premium__p5,
.premium__p6,
.premium__p7 {
  font-size: 0.9rem;
  font-family: "Roboto", Arial, sans-serif;
  font-weight: 300;
}
.premium__p5 {
  margin-top: -5px;
}
.premium__p7 {
  font-weight: 500;
}
.highlight__blue {
  color: dodgerblue;
}

.premium__benefits {
  margin-top: 50px;
  width: 100%;
  min-height: 380px;
  display: grid;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}
.premium__benefits__wrap {
  width: 314px;
  height: 100%;
}
.premium__benefits__wrap__svg {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-top: 50px;
}
.svg__red {
  fill: transparent;
  stroke: red;
  stroke-width: 10px;
}
.svg__red--1px {
  fill: red;
  stroke: red;
  stroke-width: 1px;
}
.premium__benefits__wrap__p {
  font-size: 1.9rem;
  font-family: "Roboto", Arial, sans-serif;
  color: black;
  font-weight: 300;
}
.premium__benefits__wrap__p2 {
  margin-top: -20px;
  font-size: 1.1rem;
  font-family: "Roboto", Arial, sans-serif;
  font-weight: 300;
  color: rgb(88, 88, 88);
}

.premium__faq__title {
  font-family: "Roboto", Arial, sans-serif;
  text-align: left;
  font-size: 1.5rem;
  color: black;
  margin-bottom: 30px;
}
.premium__faq__question {
  font-family: "Roboto", Arial, sans-serif;
  width: 100%;
  height: 70px;
  line-height: 70px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  font-size: 1.2rem;
  border-bottom: 1px solid lightgrey;
  color: black;
}
.fa-angle-down {
  line-height: 70px;
  font-size: 1.5rem;
}
</style>

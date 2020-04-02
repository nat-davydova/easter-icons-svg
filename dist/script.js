let PATH = {
  giftIcon: {
    icon: ".gift-icon",
    gift: ".gift-icon__gift",
    egg: ".gift-icon__egg" } };



//*** HELPER ANIMATION
const _revealVert = (bottomY, easing, delay) => ({
  translateY: [bottomY, 0],
  opacity: [0, 1],
  easing: easing,
  delay: anime.stagger(delay) });


const _shiver = () => ({
  keyframes: [
  { rotate: -10 },
  { rotate: 10 },
  { rotate: 0 },
  { rotate: 0 },
  { rotate: 0 },
  { rotate: 0 },
  { rotate: 0 },
  { rotate: 0 },
  { rotate: 0 },
  { rotate: 0 }],

  loop: true,
  easing: "linear",
  duration: 1200 });


//*** ICONS ANIMATIONS

//gift icon animation
let giftEggAnimation;

const giftIconAnimation = anime({
  targets: [`${PATH.giftIcon.gift}`, `${PATH.giftIcon.egg}`],
  ..._revealVert(150, "easeOutElastic", 100),

  complete: function () {
    const egg = document.querySelector(PATH.giftIcon.egg);
    egg.style.transformOrigin = "75% bottom";

    giftEggAnimation = anime({
      targets: `${PATH.giftIcon.egg}`,
      ..._shiver() });

  } });


//*** REPLAYS INIT

//common replay function
const replay = ({ initTarget, initValues }, cbPause, cbRestart) => {
  anime.set(initTarget, { ...initValues });

  cbPause.pause();
  cbRestart.restart();
};

//gift icon replay init
const giftReplay = document.querySelector(PATH.giftIcon.icon).
nextElementSibling;

giftReplay.addEventListener("click", function () {
  replay(
  {
    initTargets: [`${PATH.giftIcon.gift}`, `${PATH.giftIcon.egg}`],
    initValues: { opacity: 0 } },

  giftEggAnimation,
  giftIconAnimation);

});
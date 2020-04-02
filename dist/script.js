let PATH = {
  giftIcon: {
    icon: ".gift-icon",
    gift: ".gift-icon__gift",
    egg: ".gift-icon__egg" },

  chickIcon: ".chick-icon" };


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


//chick icon animation
let chickJumpAnimation;

const jumpKeyframes = {
  scaleY: [
  { value: 0.9, duration: 170 },
  { value: 1, duration: 170, delay: 120 }],

  translateY: [
  { value: -20, duration: 170, delay: 170 },
  { value: 0, duration: 170, delay: 220 }] };



const chickIconAnimation = anime({
  targets: `${PATH.chickIcon}`,
  ..._revealVert(25, "easeOutElastic", 100),

  complete: function () {
    const chick = document.querySelector(PATH.chickIcon);
    chick.style.transformOrigin = "center bottom";

    chickJumpAnimation = anime({
      targets: `${PATH.chickIcon}`,
      ...jumpKeyframes,
      loop: true,
      easing: "linear" });

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

//gift icon replay init
const chickReplay = document.querySelector(PATH.chickIcon).nextElementSibling;

chickReplay.addEventListener("click", function () {
  replay(
  {
    initTargets: `${PATH.chickIcon}`,
    initValues: { opacity: 0 } },

  chickJumpAnimation,
  chickIconAnimation);

});
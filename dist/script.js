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


//*** ICONS ANIMATIONS

//gift icon animation
const giftIconAnimation = anime({
  targets: [`${PATH.giftIcon.gift}`, `${PATH.giftIcon.egg}`],
  ..._revealVert(150, "easeOutElastic", 100) });
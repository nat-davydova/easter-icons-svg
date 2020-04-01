let PATH = {
  giftIcon: {
    icon: ".gift-icon",
    gift: ".gift-icon__gift",
    egg: ".gift-icon__egg" } };



//*** ICONS ANIMATIONS

//gift icon animation

const giftIconAnimation = anime({
  targets: [`${PATH.giftIcon.gift}`, `${PATH.giftIcon.egg}`],
  translateY: [150, 0],
  opacity: [0, 1],
  easing: "easeOutElastic",
  delay: anime.stagger(100) });
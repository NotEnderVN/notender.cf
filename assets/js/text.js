$(function () {
  var title = document.title,
    animSeq = ["|"],
    animIndex = 0,
    titleIndex = 0;
  function doInverseSpinZeroPitch() {
    var loadTitle = title.substring(0, titleIndex);
    if (titleIndex > title.length) {
      animIndex = 0;
      titleIndex = 0;
    }
    if (animIndex > 1) {
      titleIndex++;
      animIndex = 0;
    }
    document.title = loadTitle + animSeq[0];
    animIndex++;
  }
  window.setInterval(doInverseSpinZeroPitch, 150);
});
$(function () {
  $(".typed").typed({
    strings: [
      "Hii~ my name is NotEnder :D",
      "My love for you is like sodium in water... lmao",
      "I love matcha and ice cream",
      "I'm learning Java =)",
      "You can call me Ender",
      "I like to play Minecraft",
      "Coding, coding, bug, coding, ...",
      "There're two reasons to wake up in the morning: alarm clock and you",
      "From Vietnam with love 💖",
      "NotEnder#9204 is my Discord",
      "I want money to make a MC server :sad:",
      "iPhone, iMac, ILoveU",
      "My shop on Discord: https://discord.io/sunrisetstore",
      "I sKiDdEd this website",
      "HeroMC is a trash server",
      "Nothing bypass till it got bypass - Hack client dev said",
      "I don't know what to write",
      "ah yess very good Anti-Cheat",
      "Hewwo world!",
      "Give me money to develop NovalMC :ded:",
      "Nice, you are still reading this shiet 😋",
      "I'll try to be good at Math to calculate the distance from here to your heart =(",
      "2 9 3 2 0 1 0",
      "out of idea :idk:",
      "1 + 1 = 3",
      "2-3 con vịt, em cho anh ch1t. 2-3 con chồn, yêu em vãi l. À ko có j",
      "haiyaaa",
      "My HeroMC alts to hack on is enderrbili(number),
      "fuiyoo!",
      "bro chill",
      "Ok google, are u g-.. nvm",
      "never gonna give u up",
      "pad englysh",
      "siuuuuuuuuu",
      "messibucu",
      "alright u are the best",
    ],
    typeSpeed: 135,
    loop: true,
    cursorChar: "|",
  });
});

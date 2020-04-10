window.addEventListener("load", () => {//Après avoir chargé le contenu se contenu se lancera
  const sounds = document.querySelectorAll(".sound");//sélectionner tout les sons avec la class"sound"
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");
  const colors = [
    "#60d394",
    "#d36060",
    "#c060d3",
    "#d3d160",
    "#606bd3",
    "#60c2d3"
  ];

  pads.forEach((pad, index) => {
    pad.addEventListener("click", function() {
      sounds[index].currentTime = 0;//Reset le son à chaque fois qu'on clique come ça on n'a pas attendre que le son se finisse 
      sounds[index].play();
      createBubble(index);
    });
  });

  const createBubble = index => {
    //Créer la bulle
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = `jump 1s ease`;
    bubble.addEventListener("animationend", function() {//l'animation de fin
      visual.removeChild(this);
    });
  };
});
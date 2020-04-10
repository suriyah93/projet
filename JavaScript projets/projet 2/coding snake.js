	<canvas id="gc" width="400" height="400"><canvas>//Dessiner des éléments graphiques à l'aide de scripts. Il permet par exemple de dessiner des graphiques, de réaliser des compositions de photographies ou des animations simples
	<script>
	window.onload=function() {//La page entière et tous ses fichiers et composants connexes sont chargés avant la fonction listée dans le gestionnaire d’événements onload est exécuté
		canv=document.getElementById("gc");
		ctx=canv.getContext("2d");//Pour les contextes graphiques
		document.addEventListener("keydown",keyPush);//keyboard hooks
		setInterval(game,1000/15);//Minuterie d'intervalle pour appeler une fonction du jeu
	}
	px=py=10;//Position du joueur
	gs=tc=20;//Position de base au milieu 
	ax=ay=15;//"Apple"=> Objectif
	xv=yv=0;//Appuser sur la touche our que le jooueur puisse bouger
	trail=[];//Chemin => Garde une trace de toutes les positions précédentes
	tail = 5;//Queue => La longueur de la queue
	function game() {
		px+=xv;
		py+=yv;
		if(px<0) {
			px= tc-1;
		}
		if(px>tc-1) {
			px= 0;
		}
		if(py<0) {
			py= tc-1;
		}
		if(py>tc-1) {
			py= 0;
		}
		ctx.fillStyle="black";
		ctx.fillRect(0,0,canv.width,canv.height);

		ctx.fillStyle="lime";
		for(var i=0;i<trail.length;i++) {
			ctx.fillRect(trail[i].x*gs,trail[i].y*gs,gs-2,gs-2);
			if(trail[i].x==px && trail[i].y==py) {
				tail = 5;
			}
		}
		trail.push({x:px,y:py});
		while(trail.length>tail) {
			trail.shift();
		}

		if(ax==px && ay==py) {
			tail++;
			ax=Math.floor(Math.random()*tc);
			ay=Math.floor(Math.random()*tc);
		}
		ctx.fillStyle="red";
		ctx.fillRect(ax*gs,ay*gs,gs-2,gs-2);
	}
	function keyPush(evt) {
		switch(evt.keyCode) {//Evalue une expression et, selon le résultat obtenu et le cas associé, exécute les instructions correspondantes
			case 37:
			xv=-1;yv=0;
			break;
			case 38:
			xv=0;yv=-1;
			break;
			case 39:
			xv=1;yv=0;
			break;
			case 40:
			xv=0;yv=1;
			break;
		}
	}
	<script>
var xtxt = 20;
var ytxt = 20;

function setup() {
	createCanvas(1200, 600);
    background(120);
}
function draw() {
        
    if(mouseIsPressed){
 		displaytext = "'szkész.";
 
    }else{
        displaytext = "az élet szép :)";
    }

    textSize(20);
 	fill(220);
 	text(displaytext, xtxt, ytxt); 
    if (xtxt < 1100 && ytxt < 575) {
        xtxt = xtxt+100;
        ytxt = ytxt+25;
   // }else if (xtxt > 1100, ytxt >575){
     //   xtxt = 1100-xtxt;
       // ytxt = ytxt+25;
    }else{
        xtxt = 600;
        ytxt = 300;
    }
    
   
}
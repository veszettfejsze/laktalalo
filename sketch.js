var table;

function preload() {
  table = loadTable("lakasok12v3.csv","csv","header")
}

function setup() {

    createCanvas(displayWidth, displayHeight);
    background(40);
    
}
function draw() {
    stroke(220);
    var margx1 = 50;
    var margx2 = 55;
    var margy = 80; 
    var padx = 25;
    var pady = 25;
    var separatorrect = {
        x : 0,
        y : 0,
        w : 0,
        h : 10,
    }
    var sizewidth = displayWidth - padx * 2 - margx1 - margx2;
    var priceheight = (displayHeight - pady * 2 - margy - 20) * 0.6;
    var linesy = (displayHeight - pady * 2 - margy - 20) * 0.4;
    
    var korrec = {
        x : 0,
        y : 0,
        r1 : 0,
        r2 : 0,
    }
    var pontrec = {
        x : 0,
        y : 0,
    }
        korrec.x = random(0,width);
        korrec.y = random (0,height);
        korrec.r1 = random (1,15);
        korrec.r2 = random (1,15);
        
    
    fill(200,50);
    separatorrect.x = margx1;
    separatorrect.y = priceheight + pady * 2;
    separatorrect.w = displayWidth - margx1 - margx2;
    
    ellipse (korrec.x,korrec.y,korrec.r1,korrec.r2);
    rect(separatorrect.x, separatorrect.y, separatorrect.w, separatorrect.h);
    
    //var locline = {
    //    x1 : 0,
    //    y1 : 0,
    //    x2 : 0,
    //    y2 : 0,
    //}
    //locline.x1 = margx1;
    //locline.y1 = separatorrect.y + linesy * 0.25;
    //locline.x2 = displaWidth - margx2;
    //locline.y2 = locline.y1;
    
    //line(locline.x1,locline.y1, locline.x2, locline.y2);
    //print (locline.x1);
    //print (locline.y1);
    //var propline = {
    //    x1 : 0,
    //    y1 : 0,
    //    x2 : 0,
    //    y2 : 0,
    //}
    //propline.x1 = locline.x1;
    //propline.y1 = separatorrect.y + linesy * 0.5;
    //propline.x2 = locline.x2;
    //propline.y2 = propline.y1;
    
    //line(propline.x1, propline.y1, propline.x2, propline.y2);
    
    //var condline = {
        //x1 : 0,
        //y1 : 0,
        //x2 : 0,
        //y2 : 0,
    //}
    //condline.x1 = locline.x1;
    //condline.y1 = separatorrect.y + linesy * 0.75;
    //condline.x2 = locline.x2;
    //condline.y2 = condline.y1;
    
    //line(condline.x1, condline.y1, condline.x2, condline.y2);
    
    //var extline = {
        //x1 : 0,
        //y1 : 0,
        //x2 : 0,
      //  y2 : 0,
    //}
    //extline.x1 = locline.x1;
    //extline.y1 = separatorrect.y + linesy;
    //extline.x2 = locline.x2;
    //extline.y2 = extline.y1;
    
    //line(extline.x1, extline.y1, extline.x2, extline.y2);
    

   
}
    //kirajzolja a függőleges tengelyt, aminek az osztását az árak alapján mappeli
    //line (displaywidth / 10,displayheight / 10,displaywidth / 10, displayheight-180);
    //megrajzolja az alsó vonalakat(4x4 db, aminek az osztását a fentiekhez igazítja majd)
    //line();

        

    

             
    
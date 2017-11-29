var table;
var sizemin = 0;
var sizemax = 0;
var pricemin = 0;
var pricemax = 0;
var sizeleft;
var sizeright;
var priceup;
var pricedown;
    var margx1 = 50;
    var margx2 = 55;
    var margy = 80; 
    var padx = 25;
    var pady = 25;
var sizewidth
var priceheight
var linesy
    
function preload() {
  table = loadTable("lakasok12v3.csv","csv","header")
}

function setup() {

    createCanvas(displayWidth, displayHeight);
    background(40);
    sizewidth = displayWidth - padx * 2 - margx1 - margx2;
    priceheight = (displayHeight - pady * 2 - margy - 20) * 0.6;
    linesy = (displayHeight - pady * 2 - margy - 20) * 0.4;
   
    var rows = table.getRows();
    sizemin = 999;
    sizemax = 0;
    pricemin = 999;
    pricemax = 0;
    
  for (var r = 0; r < rows.length; r++) {
    var size = rows[r].getNum("size");
    var price = rows[r].getNum("price");
    if (size < sizemin) {
        sizemin = size
    }
    if (size > sizemax) {
        sizemax = size
    }    
    if (price < pricemin) {
        pricemin = price
    }    
    if (price>pricemax) {
        pricemax = price
    }
      print(price);
  }
  var sizediff = sizemax-sizemin;
  var pricediff = pricemax-pricemin;
  
    
    print(pricediff);
    sizeleft = margx1 + padx;
    sizeright = displayWidth - margx2-padx;
    priceup = pady;
    pricedown = pady + priceheight;
    stroke (230);
    fill (230);
    text(sizemin,sizeleft,pricedown);
    text(sizemax,sizeright,pricedown);
    for (var r = 0; r < rows.length; r++) {
    var lakasrec = {
        r_name : "",
        r_size : 0,
        r_price : 0,
        x : 0,
        y : 0,
        r : 0
    }
    lakasrec.r_size = rows[r].getNum("size");
    lakasrec.r_price = rows[r].getNum("price");
    lakasrec.r_name = rows[r].getString("name");

    lakasrec.x = map(lakasrec.r_size,sizemin,sizemax,sizeleft,sizeright);
    lakasrec.y = map(lakasrec.r_price,pricemin, pricemax, pricedown, priceup);
    lakasrec.r = 10;
    
    fill (150,0,10,120);
    ellipse(lakasrec.x, lakasrec.y, lakasrec.r, lakasrec.r);
        stroke(120);
    line (lakasrec.x, lakasrec.y,lakasrec.x, displayHeight - margy);
    }

}
function draw() {
    stroke(220);

    var separatorrect = {
        x : 0,
        y : 0,
        w : 0,
        h : 10,
    }

    
    var korrec = {
        x : 0,
        y : 0,
        r1 : 0,
        r2 : 0
    }

        korrec.x = random(0,width);
        korrec.y = random (0,height);
        korrec.r1 = random (1,15);
        korrec.r2 = random (1,15);
    

    
    fill(200,50);
    separatorrect.x = margx1;
    separatorrect.y = priceheight + pady * 2;
    separatorrect.w = displayWidth - margx1 - margx2;
    
    //ellipse (korrec.x,korrec.y,korrec.r1,korrec.r2);
    rect(separatorrect.x, separatorrect.y, separatorrect.w, separatorrect.h);
  var locline = {
      x1 : 0,
      y1 : 0,
      x2 : 0,
      y2 : 0
    }

    locline.x1 = margx1;
    locline.y1 = separatorrect.y + linesy * 0.25;
    locline.x2 = displayWidth - margx2;
    locline.y2 = locline.y1;

    line(locline.x1,locline.y1, locline.x2, locline.y2);

    var propline = {
        x1 : 0,
        y1 : 0,
        x2 : 0,
        y2 : 0,
    }
    propline.x1 = locline.x1;
    propline.y1 = separatorrect.y + linesy * 0.5;
    propline.x2 = locline.x2;
    propline.y2 = propline.y1;
    
    line(propline.x1, propline.y1, propline.x2, propline.y2);
    
    var condline = {
        x1 : 0,
        y1 : 0,
        x2 : 0,
        y2 : 0,
    }
    condline.x1 = locline.x1;
    condline.y1 = separatorrect.y + linesy * 0.75;
    condline.x2 = locline.x2;
    condline.y2 = condline.y1;
    
    line(condline.x1, condline.y1, condline.x2, condline.y2);
    
    var extline = {
        x1 : 0,
        y1 : 0,
        x2 : 0,
        y2 : 0,
    }
    extline.x1 = locline.x1;
    extline.y1 = separatorrect.y + linesy;
    extline.x2 = locline.x2;
    extline.y2 = extline.y1;
    
    line(extline.x1, extline.y1, extline.x2, extline.y2);
    
    
}
    //kirajzolja a függőleges tengelyt, aminek az osztását az árak alapján mappeli
    //line (displaywidth / 10,displayheight / 10,displaywidth / 10, displayheight-180);
    //megrajzolja az alsó vonalakat(4x4 db, aminek az osztását a fentiekhez igazítja majd)
    //line();

        

    

             
    
// rebecca (marks)  leopold
// the Making Poems, 2016 (2021)
// version for installation at Pratt Fall 2021
// thx to allison parish & rune madson
// this using Rune.js - https://github.com/runemadsen/rune.js
// p5.js version coming soon! 10/18/21


// here is where the book data/poems live
// --------------------------------------------

var poemList = [
    //I
    ['I', 'existing,', 'to', 'frame'],
    ['I', 'learning,', 'is', 'look'],
    ['I', 'knowing.', 'from', 'love', 'or whatever'],
    //they
    ['they', 'everything', 'is', 'real'],
    ['they', '\nowning', 'when', 'see', 'or'],
    ['they', 'carrying', 'were', 'say'],
    //we
    ['we', 'Repeating', 'when', 'know', 'not'],
    ['we', 'having', 'to', 'hold'],
    ['we', '\nacting', 'are', 'real'],
    //you
    ['you', 'self-protecting,', 'where', 'look', 'maybe'],
    ['you', '\ndescribing,', 'to', 'love'],
    ['you', 'killing', 'when', 'frame'],
    // ['this', 'page', 'intentionally', 'left', 'blank']
  ];
  var usedWords = [];
  var permutations = [];
  var randomList = [];
  var newPoem = [];
  //poem function - picks random poem from list
  // --------------------------------------------
  function randomPoem(x, y) {
    var poem = Math.floor(Rune.random(poemList.length - 1));
    return poemList[poem];
  }
  // permutation code
  // --------------------------------------------
  function permute(input) {
    var i, ch;
    for (i = 0; i < input.length; i++) {
      ch = input.splice(i, 1)[0];
      usedWords.push(ch);
      if (input.length == 0) {
        permutations.push(usedWords.slice());
      }
      permute(input);
      input.splice(i, 0, ch);
      usedWords.pop();
    }
    return permutations
  };
  permute(randomPoem())
  //
  for (var i = 0; i < permutations.length; i++) {
    permutations[i] = permutations[i].join(' ');
  }
  

//design code
// --------------------------------------------
var r = new Rune({
    container: "#canvas",
    width: 1350,
    height: 665,
      debug: true
  });
  
  var margin = 10;
  
  var space = r.grid({
  x: margin,
  y: r.height/2,
  
  width: r.width - 2 * margin,
  height: r.height/2,
  columns:1,
  rows:1,
  gutter:10,
  
  });
  
  r.rect(0,0, r.width, r.height)
    .fill(0);
  r.rect(10,10,r.width - 2*margin, r.height - 2*margin)
      .fill(255);

  var w = Rune.random(-50,1100);
  var h = Rune.random(-50, 550);
  
  // the tiemr which reloads the page every 7 seconds
 
  let theStart = Date.now();
  let theTime;
  setTimeout(() => {
    theTime = Date.now() - theStart;
    location.reload()
    
    }, 7000);  
    
    
    var title;

    for (var i = 0; i < permutations.length; i++){
      var picture = r.text(permutations[i], w , h)
          picture.fill(0)
          picture.stroke(false)
          picture.fontSize(16)
          picture.fontFamily("Georgia");
  // creates the jammed typwriter appearance. Random line breaks
      if(Rune.random(1) > 0.5) {
      w += Math.floor(Rune.random(0,45));
      } else {
      h += Math.floor(Rune.random(10,40));
      }
  
        // if (picture.w < 50)
           title = r.text("[ " + permutations[0] + " ]", 100, (i - 10) * 500);
           
              title.fill(0)
              title.stroke(false)
              title.fontWeight("bold")
              title.vars.fill.values.rgb = [102,2,60]
              title.fontSize(14)
              title.fontFamily("Georgia");
              
  
    }
  
    
  
  r.draw();
  
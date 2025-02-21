/*
 * Name: Isaac Kim
 * Lab 1: Storyboard
 * Student ID: 200609053
 
  Do not mind this stupidly long array, I had an amazing idea after copilot auto generated these (granted with my own tweaking)
  but it was overly complex than what I wanted to do, So If your hopes were high, yeah sorry...
 */
//creating a noun array
const noun = [
                ["dog", "cat", "bird", "fish", "rabbit", "hamster", "turtle", "lizard", "snake", "frog", "toad", "salamander", "iguana", "chameleon", "gecko", "crocodile", "alligator", "dinosaur", "dragon", "unicorn", "pegasus", "phoenix", "mermaid"], 
                ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew", "kiwi", "lemon", "mango", "nectarine", "orange", "pear", "raspberry", "strawberry", "tangerine", "watermelon", "zucchini"],
                ["car", "bus", "train", "plane", "boat", "submarine", "helicopter", "motorcycle", "bicycle", "scooter", "skateboard", "rollerblades", "carriage", "wagon", "trolley", "bullet train", "hybrid car", "solar-powered car"], 
            ];
//creating a verb array
const verb = [
                ["ran across", "jumped over", "hopped on", "skipped around", "walked towards", "crawled under", "slithered", "swimmed through", "flew through", "soared over", "glided past", "sailed across", "drove past", "rode on", "skated past", "snowboard past"],
                ["cooked", "baked", "fried", "grilled", "boiled", "steamed", "sauteed", "stir-fried", "microwaved", "toasted", "roasted", "smoked", "cured", "pickled", "fermented", "canned", "jellied", "preserved", "dehydrated", "freeze-dried", "blanched", "poached", "scrambled", "scalded"],
             ];

//creating a adjective array
const adjective = [
                    ["a big", "a small", "a tiny", "a huge", "a gigantic", "a enormous", "a massive", "a miniscule", "a microscopic", "a colossal", "a immense", "a vast", "a boundless", "a limitless", "an infinite", "an eternal", "an endless", "a bottomless", "unfathomable", "an immeasurable", "an unlimited", "an unbounded", "an unrestricted", "an unconfined"],
                    ["a red", "a orange", "a yellow", "a green", "a blue", "a purple", "a pink", "a brown", "a black", "a white", "a gray", "a silver", "a gold", "a bronze", "a copper", "a platinum", "a turquoise", "a teal", "a indigo", "a violet", "a magenta"],
                    ["a hot", "a cold", "a warm", "a cool", "a freezing", "a boiling", "a scalding", "a chilled", "a frozen", "a icy", "a slushy", "a sizzling", "a steaming", "a blistering", "a sweltering", "a sweaty", "a muggy", "a humid", "a dry", "a moist", "a damp", "a wet", "a soggy", "a saturated"],
                    ["a happy", "a sad", "an angry", "a mad", "a glad", "a joyful", "a cheerful", "a jolly", "a jovial", "a festive", "a lighthearted", "a carefree", "a zippy", "a zesty"],
                  ];

//creating a second noun array
const noun2 = [
                ["dog", "cat", "bird", "fish", "rabbit", "hamster", "turtle", "lizard", "snake", "frog", "toad", "salamander", "iguana", "chameleon", "gecko", "crocodile", "alligator", "dinosaur", "dragon", "unicorn", "pegasus", "phoenix", "mermaid"],
                ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew", "kiwi", "lemon", "mango", "nectarine", "orange", "pear", "raspberry", "strawberry", "tangerine", "watermelon", "zucchini"]
              ];

//grabbing the button element id
const verbBtn = document.getElementById('VerbsBtn');
const nounBtn = document.getElementById('NounBtn');
const adjBtn = document.getElementById('AdjBtn');
const noun2Btn = document.getElementById('Nouns2Btn');
const settingBtn = document.getElementById('SettingBtn');

//grabbing the generate button element id
const generateBtn = document.getElementById('GenerateBtn');

//grabbing the randomized element id
const randomized = document.getElementById('randomizedBtn');

//Outputs
let outputV = document.getElementById("outputVerb");
let outputN = document.getElementById("outputNoun");
let outputA = document.getElementById("outputAdj");


//functions - Why Did I do an Annoymous Function?
/*
 * Since most of these were used in only one setting, it only made sense to make it disposable
 * for the single use. (also for past self redemption because the very first time i did js, i had no idea how anonymous functions worked nor did they worked)
 */
//Verb Anonymous Function
verbBtn.addEventListener("click", function(){
  //assign random verb to the verb array where we will randomize the outer array's length 
  // for my initial thought, i thought to coordinate them accordingly to each sub array
  // but if it's gonna be a random anyways, does it have to be realistic?
  let randomVerb = verb[Math.floor(Math.random() * verb.length)];
  
  //after the "final decision" of the random array, whichever sub array it picked
  //randomize the subarray within the array! (this was stupidly over complicated)
  let randomVerbIndex = Math.floor(Math.random() * randomVerb.length);

  outputV.textContent = randomVerb[randomVerbIndex];
  console.log("test");
});

//Noun Anonymous Function
nounBtn.addEventListener("click", function(){
  let randomNoun = noun[Math.floor(Math.random() * noun.length)];
  let randomNounIndex = Math.floor(Math.random() * randomNoun.length);

  outputN.textContent = randomNoun[randomNounIndex];
  console.log("test");
});

adjBtn.addEventListener("click", function(){
  let randomAdj = adjective[Math.floor(Math.random() * adjective.length)];
  let randomAdjIndex = Math.floor(Math.random() * randomAdj.length);

  outputA.textContent = randomAdj[randomAdjIndex];
  console.log("test");
});

// Concept Code
//  Please ignore the code below. It is a concept code for the lab.
//  This was a test for my simpler idea I had in mind before actually applying it to the code 
//  Modified in W3Schools using Random JS
//  Source: https://www.w3schools.com/js/js_random.asp
//
//  <body>
//  <h2>JavaScript Math</h2>
//  <p>Math.floor(Math.random() * 10) returns a random integer between 0 and 9 (both included):</p>
//  <input type="button" value="click"  id="clickBtn"/>
//  <p>edebv</p>
//  <p id="demo"></p>
//  <script>
//  //2 arrays
//  let greet = [["hello", "Greetings", "Afternoon"], ["GoodBye", "See you later", "take care"]];
//  const name = [["John", "Patrick", "Jane"], ["Professor", "Doctor", "Sensei"]];
//  //a paragraph
//  let test = document.getElementById("demo");
//  //anonymous function
//  document.getElementById("clickBtn").addEventListener("click", function(){
//	  //randomization
//      //first is outer array
//	    let paragraph = Math.floor(Math.random() * greet.length);
//      //second is "inner" sub array
//   	  let elementIndex = Math.floor(Math.random() * greet[paragraph].length);
//    //randomization
//      //first is outer array
//	    let paragraph1 = Math.floor(Math.random() * name.length);
//      //second is "inner" sub array
//   	  let elementIndex1 = Math.floor(Math.random() * name[paragraph].length);
//      demo.textContent = greet[paragraph][elementIndex] +" "+ name[paragraph1][elementIndex1];
//  });
//  </script>
//
//  </body>

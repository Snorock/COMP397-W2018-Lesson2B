// IIFE - Immediately Invoked Function Expression
(function(){

  // Game Variables
  let canvas = document.getElementById("canvas");
  let stage:createjs.Stage;
  let helloLabel: objects.Label;
  let clickMeButton: objects.Button;

  function Init():void {
    console.log("Initialization Started...");

    Start();
  }

  function Start():void {
    console.log("Starting Application...")

    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20);
    createjs.Ticker.framerate = 60; // 60 FPS
    createjs.Ticker.on("tick", Update);
    Main();
  }

  function Update():void {
   // helloLabel.rotation -= 5;
    stage.update(); // redraws the stage
  }

  function clickMeButtonClick():void {
    helloLabel.text = "Clicked!";
    helloLabel.regX = helloLabel.getMeasuredWidth()*0.5;
    helloLabel.regY = helloLabel.getMeasuredHeight()*0.5;
  }

  function Main():void {
    console.log("Game Started...");

    helloLabel = new objects.Label("Hi, World!", "40px", "Consolas", "#000000", 320, 240, true);


    clickMeButton = new objects.Button("./Assets/Images/clickMeButton.png",320,340);
    clickMeButton.regX = clickMeButton.getBounds().width * 0.5;
    clickMeButton.regY = clickMeButton.getBounds().height * 0.5;

    
    stage.addChild(clickMeButton);
    stage.addChild(helloLabel);
    clickMeButton.on("click", clickMeButtonClick);

  }

  window.onload = Init;

})();

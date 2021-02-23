
/**
 * Have to keep this as a "var" to be able to use it 
 * as a global variable (possible due to Hoisting).
 */
var config = {
    //place the game's canvas in HTML tag such as <div> with id.
    parent: "gameContainer",
    type: Phaser.AUTO,
    width: 320,
    height: 240,
     scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    //zoom: 2.5,
    pixelArt: true,
    physics: {
        default: "arcade",
        arcade: {
            gravity: {y: 0},
            debug: false
        
        }
    },
    dom: {
        createContainer: true
    },
    
    //Array of all Scenes that Phaser sees and will use.
    scene: [   

                InitialBoot, 
                TitleScreen, 
                PreloadAssets,

                WorldScene, 
                PlayerUI, 
                PauseScene, 
                GameMap, 
                
                PhishingHints, 
                GameModule, 
                
                BattleScene, 
                BattleUI, 
                DialogScene, 
                BookInteraction,
                MainMenu,
                MalGameScene,
                
                
                
                 StoryScene,  Event_1, Event_2, Event_3, Event_4, Event_5,
                Event_6, Event_7, Event_8, Event_9, Event_10, Event_11, Event_12, EndingMenu

            ],

       // levelPassed: true
};

/**
 * You can keep all your global "var"iables in this file.
 * For example: var isGameOver = false;
 * The above will be seen across all JS files.
 */
let isFinishedLoading = false;
let isGamePaused = false;
let isMusicPlaying = false;
let isMapOpen = false;
let hasPhishingRod = false;
let useDefaultKeys = true;
let globalEnemyContainer = null;
let currentContentID = null;
let heartsCounter = 3;
let contaminationLevel = 5;

let level =4;
let levelPassed = 0;
let sceneRestart = true;
let sceneRestart2 = true;
let sceneRestart3 = true;
let hasBeam =false;
let facingDirection = 2;

let showPhishingRod = 0;

var showPhishingTest=false;
 



let game = new Phaser.Game(config);
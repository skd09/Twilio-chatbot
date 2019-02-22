const GameState = Object.freeze({
    WELCOMING:   Symbol("welcoming"),
    YES:  Symbol("yes"),
    DEADPOOL: Symbol("deadpool"),
    MASK: Symbol("mask"),
    VAMPIRE: Symbol("vampire"),
    ZOOMIE: Symbol("zoombie"),
    CASPER: Symbol("casper"),
    WON: Symbol("won"),
    LOSE: Symbol("lose"),
});

let mistakeCount = 3;

export default class Game{
    constructor(){
        this.stateCur = GameState.WELCOMING;
    }

    makeAMove(sInput)
    {
        let sReply = "Welcome!!!\nThis is halloween special game."+
            "\nYou need to guess this 5 halloween character based on the hints."+
            "\nYou will only get 3 chance to guess.\nSay yes to start.";
        switch(this.stateCur){
            case GameState.WELCOMING:
                mistakeCount = 3;
                this.stateCur = GameState.YES;
                break;
            case GameState.YES:
                if(sInput.toLowerCase().match("yes")){
                    sReply = "He is the baddest superhero of them all and the funniest one.\nHe is bold, he is crazy, and he makes our hearts melt. Guess his name.";
                    this.stateCur = GameState.DEADPOOL;
                }else{
                    sReply ="Say yes to start.";
                    this.stateCur = GameState.WELCOMING;
                }
                break;
            case GameState.DEADPOOL:
                if(sInput.toLowerCase().match("deadpool")){
                    sReply ="We simply love him, for his sense of humor, charisma and charm are unforgettable. He is one with green face. Guess his name.";
                    this.stateCur = GameState.MASK;
                }else{
                    --mistakeCount;
                    sReply = mistakeCount ? "Oops!!! Wrong guess. You have "+ mistakeCount +" chance left.";
                    this.stateCur = mistakeCount == 0 ? GameState.YES : GameState.DEADPOOL;
                }
                break;
            case GameState.MASK:
                if(sInput.toLowerCase().match("mask")){
                    sReply ="These are one who loves to drink blood and stay in dark. Guess the name.";
                    this.stateCur = GameState.VAMPIRE;
                }else{
                    sReply ="Oops!!! Wrong guess. You have "+ --mistakeCount +" chance left.";
                    this.stateCur = mistakeCount == 0 ? GameState.WELCOMING : GameState.MASK;
                }
                break;
            case GameState.VAMPIRE:
                if(sInput.toLowerCase().match("vampire")){
                    sReply ="They are dead yet alive. You have seen them in Walking Dead. Guess the name.";
                    this.stateCur = GameState.ZOOMIE;
                }else{
                    sReply ="Oops!!! Wrong guess. You have "+ --mistakeCount +" chance left.";
                    this.stateCur = mistakeCount == 0 ? GameState.WELCOMING : GameState.VAMPIRE;
                }
                break;
            case GameState.ZOOMIE:
                if(sInput.toLowerCase().match("zoombie")){
                    sReply ="He is a ghost but a cute character and kids love him. Guess the name.";
                    this.stateCur = GameState.CASPER;
                }else{
                    sReply ="Oops!!! Wrong guess. You have "+ --mistakeCount +" chance left.";
                    this.stateCur = mistakeCount == 0 ? GameState.WELCOMING : GameState.ZOOMIE;
                }
                break;
            case GameState.CASPER:
                if(sInput.toLowerCase().match("casper")){
                    sReply ="Congratulations!!!!\nYou won the game";
                    this.stateCur = GameState.WELCOMING;
                }else{
                    sReply ="Oops!!! Wrong guess. You have "+ --mistakeCount +" chance left.";
                    this.stateCur = mistakeCount == 0 ? GameState.WELCOMING : GameState.CASPER;
                }
                break;
        }
        return([sReply]);
    }
}

module.exports = Game;
// YOUR CODE BELOW

let ticTacToe = {
    board :[
      [null,null,null],
      [null,null,null],
      [null,null,null],
    ],
    move : function(player,rowNum,colNum){
      // if (this.board[rowNum][colNum] === null){
      //     this.board[rowNum][colNum]= player;
      if (!this.board[rowNum][colNum]){
        this.board[rowNum][colNum]= player;
      }
      console.log(this.board);
      return this.board;
    },
    clear : function(){
     this.board = [
      [null,null,null],
      [null,null,null],
      [null,null,null],
    ];
    console.log(this.board);
    return this.board;
   }
  };
  
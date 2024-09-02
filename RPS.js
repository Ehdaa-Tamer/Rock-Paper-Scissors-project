let score=
          JSON.parse(localStorage.getItem('score')) ||
  {
    wins:0,
    losses:0,
    ties:0
  };

  

        let computerMove;
        let isAutoplay=false;
        let intervalId;
        

    function pickComputerMove(){
          const x=Math.random();
          
          if(x>=0 && x<1/3){
          computerMove='rock';
        }
        else if(x>=1/3 && x<2/3){
          computerMove='paper';
        }
        else if(x>=2/3 && x<1){
          computerMove='scissors';
        }
        return computerMove;
        }
        
        
     function autoPlay(){
          if(!isAutoplay){
           intervalId= setInterval(function(){
              const computerMove2=pickComputerMove();
              compareMoves(computerMove2);
            },1000)
            isAutoplay=true;
          }
          else{
              clearInterval(intervalId);
              isAutoplay=false;
          }
        }
    function compareMoves(pickaMove){
       let computerMove1= pickComputerMove();
        let result='';

        if(pickaMove==='scissors'){
        if(computerMove1==='scissors'){
          result='tie';
        }
        else if(computerMove1==='rock'){
          result='computer is the winner'
        }
        else if(computerMove1==='paper'){
          result='you are the winner'
        }
      }

      else if(pickaMove==='paper'){
        if(computerMove==='paper'){
          result='tie';
        }
        else if(computerMove==='scissors'){
          result='computer is the winner'
        }
        else if(computerMove==='rock'){
          result='you are the winner'
        }
      }

      else if(pickaMove==='rock'){
        if(computerMove==='rock'){
          result='tie';
        }
        else if(computerMove==='paper'){
          result='computer is the winner'
        }
        else if(computerMove==='scissors'){
          result='you are the winner'
        }
      }
      if(result==='you are the winner'){
        score.wins+=1;
      }
      else if(result==='computer is the winner'){
        score.losses+=1;
      }
      else if(result==='tie'){
        score.ties+=1;
        
      }
      

      
       localStorage.setItem('score',JSON.stringify(score));
       updateScore();
       
      
        document.querySelector('.result').innerHTML=result;
      document.querySelector('.moves').innerHTML=`you  <img src="images/${pickaMove}.png" class="movesImgs" >
          <img src="images/${computerMove}.png" class="movesImgs"> computer`;
       }
      

      function updateScore(){
        document.querySelector('.score').innerHTML=`wins:${score.wins}  losses:${score.losses}  ties:${score.ties}`;
       }
       

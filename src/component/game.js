import React,{useState} from 'react';
import {FaHandPaper, FaHandRock, FaHandScissors} from 'react-icons/fa';
const icons={
    rock: FaHandRock,
    paper: FaHandPaper,
    scissor: FaHandScissors
};
const actions={
    rock: FaHandRock,
    paper: FaHandPaper,
    scissor: FaHandScissors
};
function randomAction(){
   
    const keys=Object.keys(actions);
    const index=Math.floor(Math.random()*3);
    return keys[index];
}
function Player({name,score, action}){
    return(
        <div className='player'>
        <div className='score'>{`${name} : ${score}`}</div>
        <div className='action'>
           {action && <ActionIcon action={action} size={50}/>}
        </div>
    </div>

    )
}
function ActionIcon({action, ...props}){
    
    const Icon= icons[action]
    return(<Icon {...props}/>
    )
}
function ActionButton({action, onActionSelected}){
    return(
        <button className='round-btn' onClick={()=>onActionSelected(action)}><ActionIcon action={action} size={20}/></button>

    )
}
function calculateWinner(action1,action2){

    if(action1===action2){
        //alert("Draw");
        return 0;
    }
    else if(action1==="paper"){
        if(action2==="scissor"){
            //alert("computer wins");
            return -1;
        }
        else{
        //alert("player wins");
        return 1;
    }

    }
    else if(action1==="scissor"){
        if(action2==="paper"){
            //alert("player wins");
            return 1;

        }
        else{
        //alert("computer wins")
        return -1;
        }
    }
    else if(action1==="rock"){
        if(action2==="paper"){
            //alert("computer wins");
            return -1;

        }
        else{
       // alert("player wins");
        return 1;

        }
    }
  
}
function ShowWinner({winner=0}){
    const text={
        1 : "YOU WON!!!",
        0 : "DRAW",
        "-1": "YOU LOSE!!!"
    }
    return(
        <h2 className='win'>{text[winner]}</h2>
    )
}
export default function Game() {
    const [playerAction, setPlayerAction]=useState("");
    const [computerAction, setComputerAction]=useState("");
    const [playerScore, setPlayerscore]=useState(0);
    const [computerScore, setComputerscore]=useState(0);
    const [winner, setWinner]=useState(0);


    const onActionSelected=(selectedAction)=>{
        setPlayerAction(selectedAction);
        const newComputerAction=randomAction();
        setComputerAction(newComputerAction);
        const newWinner=calculateWinner(selectedAction,newComputerAction);
        setWinner(newWinner);
        if(newWinner === 1){
            setPlayerscore(playerScore+1);
        }
        else if(newWinner === -1){
            setComputerscore(computerScore+1);
        }
    }
    return (
        <div className='game'>
            <h2>Scissor Paper Rock</h2>
            <div>
                <div className='content'>


                    <Player name='Player' score={playerScore} action={playerAction}/>
                    <Player name='Computer' score={computerScore} action={computerAction}/>
                   
                    
                </div>
                <div>
                    <ActionButton action='rock' onActionSelected={onActionSelected}/>
                    <ActionButton action='paper' onActionSelected={onActionSelected}/>
                    <ActionButton action='scissor' onActionSelected={onActionSelected}/>
                </div>
                <ShowWinner winner={winner}/>
            </div>
        </div>
    );
}
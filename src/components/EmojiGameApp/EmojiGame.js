import React from "react"
import Navbar from "./Navbar.js"
import HowToPlay from "./HowToPlay.js"
import EmojiCard from "./EmojiCard.js"
import WinOrLose from "./WinOrLose.js"

class EmojiGame extends React.Component{
    constructor(){
        super();
        this.state = {
            emojies:null,
            score:0,
            topScore : 0,
            gameStat : 'playing',
            theme : 'Light'
        }
    }
    
    componentDidMount(){
        const emojiCodesList= ['emoji-1','emoji-2','emoji-3','emoji-4','emoji-5','emoji-6','emoji-7','emoji-8','emoji-9','emoji-10','emoji-11','emoji-12']
        const Url = "https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/m";
        const emojiNames = ['Explodig Head','Grinning Face With Sweat','Smiling Face With Heart Eyes','Smirking Face','Thinking Face','Winking Face','Grinning Face','Crying Face','Astonished Face','Face with Tears of Joy','Star-Struck','Winking Face with Tongue']
        
        
        
        let emojies = emojiCodesList.map((code,index) => {
            
            const name = emojiNames[index]
            const emojiSource = `${Url}${code}`
            
            const obj = {
                name,
                code : emojiSource
            }
            return obj
        })
        
        this.setState({emojies : emojies})
    }
    
    setScore = (score) => {
        console.log('original',score)
        this.setState({score:score})
    }
    
    setTopScore = (topScore,gameStatus) => {
        console.log('original  top score' , topScore)
        
        if(topScore < this.state.topScore){
            topScore = this.state.topScore
        }
        
        this.setState({
            topScore:topScore,
            gameStat:gameStatus
        })
        
    }
    
    onClickPlayAgain = () => {
        
        this.setState({
            gameStat:'playing',
            score:0
        })
    }
    
      
    shuffleEmojies = () => {
        let array = [...this.state.emojies]
        let i = array.length-1;
        for( ; i>0 ; i--){
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        
        this.setState({emojies : array})
        
    }
    onChangeTheme = () => {
        
        // const Theme = this.state.the
        
        
    }

    
    
    render(){
        
        const {score,topScore,gameStat,emojies} = this.state
        let gameStatus = gameStat
       if(emojies !== null){ 
        return (
            <div>
                <Navbar score={score} topScore={topScore}/>
                { gameStat === 'playing' && 
                <EmojiCard shuffleEmojies={this.shuffleEmojies}  emojies={emojies} setScore={this.setScore} setTopScore={this.setTopScore} gameStat={gameStatus}/>
                }
                {
                    this.state.gameStat !== 'playing' && 
                    <WinOrLose score={score} on gameStat={gameStat} onClickPlayAgain={this.onClickPlayAgain} />
                }
                <HowToPlay />
            </div>
            )
       }
       else{
           return <div> </div>
       }
    }
}



export default EmojiGame;

                
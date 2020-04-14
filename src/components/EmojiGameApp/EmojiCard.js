/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import tw  from "tailwind.macro";
import styled from '@emotion/styled';

import React from "react"
import {EmojiCardEl} from "./style.js"



class EmojiCard extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            touchedEmojies:[]
        }
    }
    
    onEmojiClick = (event) => {
        
        const {touchedEmojies} = this.state
        
        const touchedEmoji = event.target.id
        const {setScore, shuffleEmojies,  setTopScore, gameStat} = this.props
        let gameStatus = gameStat
        
        let previouslyTouchedEmojies = [...touchedEmojies]
        
        let emoji = previouslyTouchedEmojies.find(emoji => {
            return emoji === touchedEmoji
        })
        
        if(emoji === undefined){
            previouslyTouchedEmojies.push(touchedEmoji);
            setScore(previouslyTouchedEmojies.length)
            shuffleEmojies();
        }
        else{
            gameStatus = (previouslyTouchedEmojies.length === 12) ? 'Won' : 'Lose'
            setTopScore(previouslyTouchedEmojies.length, gameStatus)
            previouslyTouchedEmojies = []
            
        }
        
        this.setState({touchedEmojies:previouslyTouchedEmojies})
    }
    
    
    
    render(){
        
        
        
        const {emojies} = this.props
        console.log(emojies)
        
        const emojiCards = emojies.map((emoji,index) => {
            return <div key={emoji.name} id={emoji.name} className="flex flex-col h-56 justify-center items-center  w-3/12 border-gray-300 border-solid border m-2" onClick={this.onEmojiClick}><img id={emoji.name} className="w-full h-48" src={`${emoji.code}.png`} /><span id={emoji.name} key={emoji.name}>{emoji.name}</span></div>
        })
        
        return (
           
            <EmojiCardEl>
                {
                 emojiCards
                }
            </EmojiCardEl>
           
            )
    }
}


export default EmojiCard;


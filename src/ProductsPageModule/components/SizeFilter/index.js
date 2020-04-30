import React from "react"
import tw from "tailwind.macro"

import {observer} from "mobx-react"
import {observable} from "mobx"
import {XSXL, SML, XXL} from "./styledComponents"

@observer
class SizeFilter extends React.Component {
    @observable sizes = [
        {
            size:'XS',
            isClicked:false
        }, 
        {
            size:'S',
            isClicked:false
        },
        {
            size:'M',
            isClicked:false
        }, 
        {
            size:'L',
            isClicked:false
        }, 
        {
            size:'XL',
            isClicked:false
        }, 
        {
            size:'XXL',
            isClicked:false
        }]
    
    
    
    
    onSelectSize = (selectedSize) => {
        const {onSelectSize} = this.props
        this.sizes.find(eachSize => {
            if(eachSize.size === selectedSize){
                eachSize.isClicked = !eachSize.isClicked
            }
        })
        onSelectSize(selectedSize);
    }
    
    
    render(){
        const {onSelectSize,products} = this.props
        return(
            <div className="flex flex-col justify-center items-start w-full">
                <div className="flex p-1 m-1 border font-semibold border-solid" >sizes:</div>
                <div className="flex flex-row flex-wrap justify-start items-center text-sm w-full">
                    {
                        this.sizes.map(eachSize =>{
                            return <XSXL status={eachSize.isClicked} key={eachSize.size} onClick={()=>this.onSelectSize(eachSize.size)}>{eachSize.size}</XSXL>
                        })
                    }
                </div>
            </div>
            )
    }
}

export default SizeFilter


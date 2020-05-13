import React from "react"
import tw from "tailwind.macro"

import {observer} from "mobx-react"
import {observable} from "mobx"
import {XSXL, SML, XXL} from "./styledComponents"

@observer
class SizeFilter extends React.Component {
    
    
    render(){
        const {sizes, onSelectSize} = this.props
        return(
            <div className="flex flex-col justify-center items-start w-full">
                <div className="flex p-1 m-1 border font-semibold border-solid" >sizes:</div>
                <div className="flex flex-row flex-wrap justify-start items-center text-sm w-full">
                    {
                        sizes.map(eachSize =>{
                            return <XSXL status={eachSize.isClicked} key={eachSize.size} onClick={()=>onSelectSize(eachSize.size)}>{eachSize.size}</XSXL>
                        })
                    }
                </div>
            </div>
            )
    }
}

export default SizeFilter
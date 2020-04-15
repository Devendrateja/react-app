import React from "react"
import {observer} from "mobx-react"
import {observable} from "mobx"

@observer
class Cell extends React.Component{
    size
    @observable rows
    constructor(props){
        super(props);
        this.size = 4
    }
    
    updateGrid = () => {
        let rows = [];
        for (var i = 0; i < this.size; i++){
          let rowID = `row${i}`
          let cell = []
          for (var idx = 0; idx < this.size; idx++){
            let cellID = `cell${i}-${idx}`
            cell.push(<td style={{backgroundColor:'grey', padding:'30px' ,border:'solid white 10px'}}  key={cellID} id={cellID}></td>)
          }
          rows.push(<tr key={i} id={rowID}>{cell}</tr>)
        }
        return rows
    }
    
    
    
    render(){
        let rows = this.updateGrid()
        return (
          <div className="container">
            <div className="row">
              <div className="col s12 board">
                <table id="simple-board">
                   <tbody>
                     {rows}
                   </tbody>
                 </table>
              </div>
            </div>
          </div>
        )
    }
    
}

export default Cell;













// componentDidMount(){
        
    //     let rows = [];
    //     for (var i = 0; i < this.size; i++){
    //       let rowID = `row${i}`
    //       let cell = []
    //       for (var idx = 0; idx < this.size; idx++){
    //         let cellID = `cell${i}-${idx}`
    //         cell.push(<td style={{backgroundColor:'grey', padding:'30px' ,border:'solid white 10px'}}  key={cellID} id={cellID}>1</td>)
    //       }
    //       rows.push(<tr key={i} id={rowID}>{cell}</tr>)
    //     }
        
    //     this.Rows = rows
    //     console.log(this.Rows)
    // }
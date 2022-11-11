import React from "react";
import Radio  from "./Radio";
class Table extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            sortByName : false,
            sortByDOB : false
        }
    }

    changeSortByName =()=>{
        this.setState({
          sortByName : true,
          sortByDOB: false
        },()=>this.sort())
        
    }
     changeSortByDOB =()=>{
      this.setState({
        sortByDOB : true,
        sortByName: false
      }, ()=>this.sort())
    }
    componentDidMount() {
        fetch('data.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    users: json
                })
            })
    }


    sort() {
        if(this.state.sortByName){
            this.setState({
            users :this.state.users.sort((a,b) => a.name.localeCompare(b.name))})
        }
        else{
            this.setState({
                users:  this.state.users.sort(
                    (objA, objB) => new Date(objA.dob).getTime() - new Date(objB.dob).getTime(),
                  )
            })
        }
    }

    render(){return(
            <div>
        <Radio changeSortByDOB={this.changeSortByDOB} changeSortByName={this.changeSortByName}></Radio>
    <table border="1">
        <tbody>
            <tr>
                <th>
                    Name
                </th>
                <th>
                    DOB
                </th>
            </tr>
            {
                this.state.users.map(user =>
                    <tr>
                        <td>
                            {user.name}
                        </td>
                        <td>
                            {user.dob}
                        </td>
                    </tr>
                )
            }
        </tbody>
    </table>
            </div >
        )
    }
}
export default Table
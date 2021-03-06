import React,{Component,PropTypes} from 'react'
export default class Search extends Component{
    //定义状态
    static propTypes={
        setSearchName:PropTypes.func.isRequired
    }
    search=()=>{
        const searchName=this.refs.searchName.value.trim()
        if(searchName){
            this.props.setSearchName(searchName)
        }
    }
    render(){
        return(
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input type="text" placeholder="enter the name you search" ref="searchName"/>
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        )


    }
}


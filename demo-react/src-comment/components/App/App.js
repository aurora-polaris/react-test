//定义组件
import React,{Component} from 'react'
//引入Add和List
import Add from '../Add/Add'
import List from '../List/List'
export default class App extends Component{
    //初始化
    constructor(props){
        super(props)
        //初始化状态
        this.state={
            comments:[{username:'Tom',content:'明天是周三'},
                {username:'Jack',content:'那后天就是周四啦'}]
        }
    }
    addComment=(comment)=>{
        const {comments}=this.state
        comments.unshift(comment)
        this.setState({comments})
    }
    //删除操作
    deleteCom=(index)=>{
        const {comments}=this.state
        comments.splice(index,1)  //指定state下标删除
        this.setState({comments})
    }

    render(){
        const {comments}=this.state
        return(
            <div>
                <header className="site-header jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1>请发表对React的评论</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container">
               <Add addComment={this.addComment}></Add>
                    <List comments={comments} deleteCom={this.deleteCom}></List>
                </div>
            </div>
        )


    }
}

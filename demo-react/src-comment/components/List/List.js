import React,{Component,PropTypes} from 'react'
import './list.css'
import Item from '../Item/Item'
export default class List extends Component{
    static propTypes={
        //comments:React.PropTypes.array.isRequired
        comments:PropTypes.array.isRequired,
        deleteCom:PropTypes.func.isRequired
    }
    render(){
        const {comments,deleteCom}=this.props
        const display=comments.length===0?'block':'none'
        return(
            <div className="col-md-8">
                <h3 className="reply">评论回复：</h3>
                <h2 style={{display}}>暂无评论，点击左侧添加评论！！！</h2>
                <ul className="list-group">
                    {
                        comments.map((comment,index)=><Item key={index} index={index} comment={comment} deleteCom={deleteCom}></Item>)
                    }
                </ul>
            </div>
        )


    }
}

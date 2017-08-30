import React,{Component,PropTypes} from 'react'
import './item.css'
export default class Item extends Component{
    static propTypes={
        comment:PropTypes.object.isRequired,
        deleteCom:PropTypes.func.isRequired,
        index:PropTypes.number.isRequired
    }
    deleteItem=()=>{
        const {comment,deleteCom,index}=this.props
        if(window.confirm(`确定要删除${comment.username}的评论吗？`)){
            deleteCom(index)
        }
    }
    render(){
        const {comment}=this.props
        return(
        <li className="list-group-item">
            <div className="handle">
                <a href="javascript:;" onClick={this.deleteItem}>删除</a>
            </div>
            <p className="user"><span >{comment.username}</span><span>说:</span></p>
            <p className="centence">{comment.content}</p>
        </li>
        )


    }
}

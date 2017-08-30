import React,{Component} from 'react'
//引入图片
import logo from './logo.svg'
//引入css文件
import './App.css'
//默认暴露
export default class App extends Component{
    render(){
        return(
            <div>
                <img src={logo} className="logo"/>
                <p className="count">哈哈哈哈哈哈哈哈哈哈</p>
            </div>
        )
    }
}


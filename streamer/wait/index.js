import { UI } from '@hyext/hy-ui'
import React, { Component } from 'react'
import './index.hycss'
import {Link} from "react-router-dom";


const { View,Text,Button,BackgroundImage,Image,Modal} = UI

class Wait extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mytext: "",
        };
    }

    render() {
        return (
            <BackgroundImage className="backgroundImage" src={require('../../images/background.png')}>
                {/*首页、下一步图标*/}
                <View style={{
                    flexDirection: "row",
                    height: 40,
                    padding: 20
                }}>
                    <View style={{width:10}}>
                        <Link to={'/index_streamer_pc_anchor_panel.html'}>
                            <Image className="home" src={require('../../images/home.png')}></Image>
                        </Link>
                    </View>
                    <View style={{width:310}}>

                    </View>
                    <View style={{width:10}}>
                        <Link to={'/wait'}>
                            <Image className="draw-back" src={require('../../images/draw-back.png')}></Image>
                        </Link>
                    </View>
                </View>
                <View  className="container">
                    <Image className="logo1" src={require('../../images/logo1.png')}/>
                    <View style={{
                        flexDirection: "row",
                        height: 150,
                        padding: 50
                    }}>
                        <View>
                            <Image className="user1" src={require('../../images/blue-avatar-bgd.png')}/>
                        </View>
                        <View>
                            <Image className="spack-left" src={require('../../images/spark-left.png')}/>
                        </View>
                        <View>
                            <Image className="spack-right" src={require('../../images/spark-right.png')}/>
                        </View>
                        <View>
                            <Image className="user2" src={require('../../images/yellow-avatar-bgd.png')}/>
                        </View>
                    </View>
                    <View  className="pk" style={{
                        flex:1,
                        flexDirection: "row",
                    }}>
                        <View>
                            <Image className="blue-avatar" src={require('../../images/blue-avatar.png')}/>
                        </View>
                        <View>
                            <Image className="yellow-avatar" src={require('../../images/yellow-avatar.png')}/>
                        </View>
                    </View>
                    <Button className="start">开始对战</Button>
                </View>
            </BackgroundImage>
        )
    }
}
export default Wait
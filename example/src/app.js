/*** examples/src/app.js ***/
import React from 'react'
import { render } from 'react-dom'
import BggAudio from '../../src/index' // 引入组件

const App = () => {
   
    return <BggAudio id={'xx'} src="http://play.taihe.com/?__m=mboxCtrl.playSongMenu&__a=520479727&__o=/songlist/tag/%E5%8D%8E%E8%AF%AD||songMenu&fr=-1||-1#" />
}
render(<App />, document.getElementById('root'))
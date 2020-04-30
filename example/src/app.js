/*** examples/src/app.js ***/
import React from 'react'
import { render } from 'react-dom'
import BggBtn from '../../src/index' // 引入组件

const App = () => {
    const data = [
        {
            num: '1',
            id: 1,
            name: '张学友',
            age: 50,
            sex: '男',
            job: '歌手'
        },
        {
            num: '2',
            id: 2,
            name: '周星驰',
            age: 50,
            sex: '男',
            job: '歌手'
        },
        {
            num: '3',
            id: 3,
            name: '刘德华',
            age: 50,
            sex: '男',
            job: '歌手'
        },
        {
            num: '4',
            id:4,
            name: '周润发',
            age: 50,
            sex: '男',
            job: '歌手'
        },
        {
            num: '5',
            id: 5,
            name: '吴彦祖',
            age: 50,
            sex: '男',
            job: '歌手'
        }
    ]
    return <BggBtn tableData={data} />
}
render(<App />, document.getElementById('root'))
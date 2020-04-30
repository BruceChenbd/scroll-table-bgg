### 安装
```
npm install npm-react-bg-pack
```
### 使用
```
import BggBtn from 'npm-react-bg-pack';
import 'npm-react-bg-pack/lib/main.min.css';


const Demo = (props) => {
    const click = () => {}
    return <BggBtn width={100} height={50} color={'#fff'} bgColor={'#eee'} txt={'我是按钮文字'} onClick={click} />
}
```
### 接受属性
```
width: number,
height: number,
color: string,
bgColor: string,
txt: string
```
### 事件
```
onClick: Function
```
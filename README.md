### 安装
```
npm install bgg-audio
```
### 使用
```
import BggAudio from 'bgg-audio';
import 'bgg-audio/lib/main.min.css';


const Demo = (props) => {
    const click = () => {}
    return <BggAudio src={xx} id={xxx} />
}
```
### 接受属性
```
src: 文件source 项目中使用需要在webpack中配置加载音频类型的loader
id: 当前audio的id
```
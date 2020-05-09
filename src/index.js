import React from 'react';
import * as styles from  './index.css';

class BggAudio extends React.Component {
    constructor(props) {
        super(props)
        this.playInput = React.createRef();
        this.vioceInput = React.createRef();
        this.state = {
          isPlay: false,
          isMuted: false,
          volume: 100,
          allTime: 0,
          currentTime: 0,
          showVioce: false
        }
    }
    millisecondToDate(time) {
        const second = Math.floor(time % 60)
        let minite = Math.floor(time / 60)
        return `${minite}:${second >=10? second: `0${second}`}`
        // return `${minite}:${second >= 10 ? second : `0${second}`}`
    }
    controlAudio(type,value) {
        const { id,src } = this.props;
        const { allTime } = this.state;
        const audio = document.getElementById(`audio${id}`)
        switch(type) {
          case 'allTime':
            this.setState({
              allTime: audio.duration
            })
            break
          case 'play':
            audio.play()
            this.setState({
              isPlay: true
            })
            break
          case 'pause':
            audio.pause()
            this.setState({
              isPlay: false
            })
            break
          case 'muted':
            this.setState({
              isMuted: !audio.muted
            })
            audio.muted = !audio.muted
            break
          case 'changeCurrentTime':
            let str = (value.target.value)/allTime * 100 + "% 100%";
            this.playInput.current.style.backgroundSize = str;
            this.setState({
              currentTime: value.target.value
            })
            audio.currentTime = value.target.value
            if(value.target.value == audio.duration) {
              this.setState({
                isPlay: false
              })
            }
            break
          case 'getCurrentTime':
            let str1 = (audio.currentTime)/allTime * 100 + "% 100%";
            this.playInput.current.style.backgroundSize = str1;
            this.vioceInput.current.style.backgroundSize = this.state.volume + '% 100%';
            this.setState({
              currentTime: audio.currentTime
            })
            if(audio.currentTime == audio.duration) {
              this.setState({
                isPlay: false
              })
            }
            break
          case 'changeVolume':
            audio.volume = value.target.value / 100;
            let str3 = value.target.value + '% 100%';
            this.vioceInput.current.style.backgroundSize = str3;
            console.log(value.target.value)
            this.setState({
              volume: value.target.value,
              isMuted: !parseFloat(value.target.value)
            },() => {
                console.log(this.state.isMuted)
            })
            break  
        }
    }
    showVioce () {
        let { showVioce } = this.state;
        if(showVioce) {
            this.setState({
                showVioce: false
            })
        } else {
            this.setState({
                showVioce: true
            })
        }
    }
    render () {
        let { id, src } = this.props;
        let { isMuted, isPlay,volume,allTime,currentTime, showVioce } = this.state;
        return (
            <div className={styles.audioBox}>
            <audio 
              id={`audio${id}`}
              src={src}
              onCanPlay={() => this.controlAudio('allTime')}
              onTimeUpdate={(e) => this.controlAudio('getCurrentTime')}
            >
              您的浏览器不支持 audio 标签。
            </audio>  
            {
                isPlay? 
                <svg onClick={() => this.controlAudio('pause')} t="1588991144735" className={styles.svg} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3155" width="32" height="32"><path d="M304 176h80v672h-80z m408 0h-64c-4.4 0-8 3.6-8 8v656c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V184c0-4.4-3.6-8-8-8z" p-id="3156" fill="#ffffff"></path></svg>
                :
                <svg onClick={() => this.controlAudio('play')} t="1588991060671" className={styles.svg} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2228" width="32" height="32"><path d="M275.2 185.6v656L812.8 512z" fill="#ffffff" p-id="2229"></path></svg>
            }
            <span className={styles.current}>
              {this.millisecondToDate(currentTime)+' / '+this.millisecondToDate(allTime)}
            </span>
            <input 
              type="range" 
              className="time" 
              ref={this.playInput}
              step="0.01" 
              max={allTime}     
              value={currentTime}  
              onChange={(value) => this.controlAudio('changeCurrentTime',value)} 
            />
           <div className={styles.volumebox}>
                {
                    isMuted ? <svg  onClick={() => this.controlAudio('muted')} t="1589002703280" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3429" width="24" height="24"><path d="M469.726 139.266v0l-217.47 163.104h-135.985c-37.804 0-67.889 30.141-67.889 67.327v273.082c0 36.683 30.397 67.327 67.889 67.327h135.985l217.47 163.104c30.237 22.675 54.353 10.267 54.353-27.359v-679.232c0-37.152-24.338-49.873-54.353-27.359z" p-id="3430" fill="#ffffff"></path><path d="M887.187 538.378l69.126-69.126c22.907-22.907 22.907-60.044 0-82.958v0c-22.907-22.907-60.044-22.907-82.958 0l-69.126 69.126-69.126-69.126c-22.907-22.907-60.044-22.907-82.958 0s-22.907 60.044 0 82.958l69.126 69.126-69.126 69.126c-22.907 22.907-22.907 60.044 0 82.958v0c22.907 22.907 60.044 22.907 82.958 0l69.126-69.126 69.126 69.126c22.907 22.907 60.044 22.907 82.958 0v0c22.907-22.907 22.907-60.044 0-82.958l-69.126-69.126z" p-id="3431" fill="#ffffff"></path></svg> :
                    <svg onClick={this.showVioce.bind(this)} t="1589001111572" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2482" width="24" height="24"><path d="M689.085 335.699c-18.785-18.785-49.239-18.785-68.023 0s-18.785 49.239 0 68.023c56.355 56.355 56.355 147.717 0 204.069-18.785 18.785-18.785 49.239 0 68.023 18.785 18.785 49.239 18.785 68.023 0 93.92-93.92 93.92-246.199 0-340.125z" p-id="2483" fill="#ffffff"></path><path d="M463.835 159.435v0l-205.238 153.931h-128.336c-35.674 0-64.067 28.451-64.067 63.543v257.721c0 34.619 28.684 63.543 64.067 63.543h128.336l205.238 153.931c28.537 21.398 51.299 9.69 51.299-25.82v-641.027c0-35.062-22.971-47.065-51.299-25.82z" p-id="2484" fill="#ffffff"></path><path d="M825.132 199.656c-18.785-18.785-49.239-18.785-68.023 0s-18.785 49.239 0 68.023c131.492 131.492 131.492 344.682 0 476.174-18.785 18.785-18.785 49.239 0 68.023 18.785 18.785 49.239 18.785 68.023 0v-0.001c169.060-169.060 169.060-443.158 0-612.221z" p-id="2485" fill="#ffffff"></path></svg>
                }
               <div className={styles.pannel}>
                <input 
                    type="range" 
                    style={{backgroundSize: '100%',display: showVioce ? 'inline-block': 'none'}}
                    ref={this.vioceInput}
                    className={styles.volume}
                    onChange={(value) => this.controlAudio('changeVolume',value)} 
                    value={isMuted ? 0 : volume} 
                    />
               </div>
           </div>
          </div>
        )
    }
}
export default BggAudio
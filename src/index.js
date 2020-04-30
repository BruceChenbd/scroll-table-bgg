import React from 'react';
import * as styles from  './index.css';

class BggBtn extends React.Component {
    constructor(props) {
        super(props)
    }
    render () {
        const { tableData, headArr } = this.props
        return (
            <div className={styles.tbox}>
              <ul className={styles.theader}>
                <li className={styles.row}>
                    <span className={styles.cell}>编号</span>
                    <span className={styles.cell}>姓名</span>
                    <span className={styles.cell}>年龄</span>
                    <span className={styles.cell}>性别</span>
                    <span className={styles.cell}>专业</span>
                </li>
              </ul>
              <div className={styles.tbody}>
                <ul className={styles.list}>
                   {
                       tableData && tableData.length>0 ?
                       tableData.map(item => {
                           return (
                              <li className={styles.row} key={item.id}>
                                  <span className={styles.cell}>{item.num}</span>
                                  <span className={styles.cell}>{item.name}</span>
                                  <span className={styles.cell}>{item.age}</span>
                                  <span className={styles.cell}>{item.sex}</span>
                                  <span className={styles.cell}>{item.job}</span>
                              </li>
                           )
                       }): null
                   }
                </ul>
              </div>
            </div>
        )
    }
}
export default BggBtn
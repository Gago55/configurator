import React from 'react'
import styles from './ConfigBar.module.css'
import { connect } from 'react-redux'
import { getColors } from '../../redux/configSelector'
import {changeBoxColor} from '../../redux/threeReducer'

class ConfigBar extends React.Component {

    colorsDivs = this.props.colors.map( c => <div onClick={ ()=>{this.props.changeBoxColor(c)} } className={styles.colorsDiv} style={{ backgroundColor:c}}>{c}</div>)

    render() {
        return (
            <div className="configBar">
                <h2>ConfigBar</h2>
                <div><h2>Select Model</h2></div>
                <div style={{display:'grid'}}>
                    {this.colorsDivs}
                </div>
            </div>
        )
    }
}

let mapStateToProps = state => ({
    colors : getColors(state)
})

export default connect(mapStateToProps , {
    changeBoxColor
})(ConfigBar)
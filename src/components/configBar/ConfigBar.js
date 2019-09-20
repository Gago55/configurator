import React from 'react'
import styles from './ConfigBar.module.css'
import { connect } from 'react-redux'
import { getColors, getGeometrys } from '../../redux/configSelector'
import { changeBoxColor, changeActiveGeometry } from '../../redux/threeReducer'

class ConfigBar extends React.Component {

    colorsDivs = this.props.colors.map(c =>
        <div onClick={() => { this.props.changeBoxColor(c) }}
            className={styles.itemsDiv}
            style={{ backgroundColor: c }}>
        </div>)

    geometryDivs = this.props.geometrys.map(c =>
        <div onClick={() => { this.props.changeActiveGeometry(c.geometry) }}
            className={styles.itemsDiv}
    >{c.description}
        </div>)

    render() {
        return (
            <div className="configBar">
                <h2>ConfigBar</h2>
                <div>
                    <h2>Select Model</h2>
                    <div className={styles.itemsContainer}>
                        {this.geometryDivs}
                    </div>
                </div>
                <hr/>
                <div className={styles.itemsContainer}>
                    {this.colorsDivs}
                </div>
            </div>
        )
    }
}

let mapStateToProps = state => ({
    colors: getColors(state),
    geometrys: getGeometrys(state)
})

export default connect(mapStateToProps, {
    changeBoxColor,
    changeActiveGeometry
})(ConfigBar)
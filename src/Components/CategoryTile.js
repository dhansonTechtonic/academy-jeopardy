import React, { Component } from 'react'
import Lecture from '../Data/js-lecture-101'

class CategoryTile extends Component {
    createTiles() {
        let arr = [];
        for (let i = 0; i < Lecture.categories.length; i++) {
            let div = (<div key={i}><h1 className="cat-tile">{Lecture.categories[i]}</h1></div>);
            arr.push(div)
        }
        return arr
    }
    render() {
        return (
            <div className="cat-holder">
                {this.createTiles()}
            </div>
        )
    }
}

export default  CategoryTile

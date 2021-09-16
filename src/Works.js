import React from 'react'
import './works.scss'
import Data from'./Data'
import workData from './mywork'

function Works(){
    const workComponents = workData.map(works =>
            <Data key = {works.id}
            image = {works.image}
            title = {works.title}
            lang = {works.lang}
            link = {works.link}
            />
    )
    return(
        <div className="works">
        <p> My Works </p>
        {workComponents}
        </div>    
    )

}

export default Works;
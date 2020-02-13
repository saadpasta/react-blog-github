import React from 'react'
import './Header.css'
import {config} from "../../config"

export default function Header() {
    return (
        <div className="main-header">
        <div className="wrap-big">
            <h1 className="header-title">{config.title}</h1>
            <h2 className="header-subtitle">{config.subtitle}</h2>
            </div>
        </div>
    )
}

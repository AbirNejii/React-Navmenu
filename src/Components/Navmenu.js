import React from 'react'

export default function Navmenu(props) {
    return (
        <div className="hover-menu">
            <ul className="menu">
                {props.navmenu.map((el,i) => <li key={i} className="elements">{el.item1} {el.subitem ? (
                    <ul key={i} className="dropdown">
                        {el.subitem.map((el,i) => (<li key={i}> {el}</li>))}
                    </ul>) : null}</li>)}
            </ul>
        </div>
    );
}
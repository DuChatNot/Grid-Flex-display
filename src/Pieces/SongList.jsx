import muerte from "../components/Album";
import can from '../can.jpg'
import '../styles/SongList.css'
import { useState } from "react";

export default function List (){
    const [display, setDisplay] = useState(true)

    return (
    <>
    <button className="display" onClick={() => setDisplay(!display)}>🎛🎛 ⇿ 🎛</button>
    <section className={display ? 'maingrid' : 'mainflex'}>
            {muerte.map(p => (
            <article key={p.id} className="article">
                <section>
                    <img className='image' src={can} alt="Canserbero"/>
                </section>
            <ol className="list"><b>{p.name}</b>
            <li>Duration: {p.duration}</li> 
            <li>By: {p.artist}</li>
            <li>Year: {p.year}</li>
            <li>Album: {p.album}</li>
            </ol>
        </article>
    ))}
    </section>
    </>
    )
};
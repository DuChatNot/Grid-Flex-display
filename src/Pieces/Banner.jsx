import { useState } from 'react';
import '../styles/Banner.css'

export default function Banner () {
    const [test , setTest] = useState(true);

    return (
        <div className='main'>
            <section id={test ? 'banner' : 'notbanner'}>
                <button className='button' 
                onClick={() => setTest(!test)}>Test</button>
            </section>
        </div>
        
    )
}
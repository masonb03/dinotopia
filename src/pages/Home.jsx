import {useState, useRef} from 'react'
import '../styles/Home.css';
import EarthModel from '../components/EarthModel';

export default function Home() {

    const targetRef = useRef(null);

    const scrollToTarget = () => {
      targetRef.current.scrollIntoView({ behavior: 'smooth' });
    }

  return (
    <div className='home-welcome'>
      <h1>Back then...</h1>
      <p>Million of years ago, the earth we reside on, was once very different. Ruled by the most powerful animals the world has ever seen in history. Across multiple time periods have these creatures walked and now you have a chance to learn about these animals in their glory. Venture on and be amazed of the great rulers of earth from the past.</p>
      <button className="journey-btn" onClick={scrollToTarget}> Begin Journey </button>
      <section className="p-[40px]">Millions of years ago, the earth was a very different place. The continents that we know now used to all be connected into one massive continent named Pangea. This once massive supercontinent began breaking apart around 200 million years ago due to the tectonic plates within the Earth moving around. It kept moving until all the of Pangea was broken into smaller continents which then formed into the ones we know today.</section>
      <div ref={targetRef}>
        <section className="model"><EarthModel/></section>
      </div>
    </div>
  )
}
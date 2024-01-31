
import { useRef, useEffect } from 'react'
import './App.css'

import gsap from 'gsap'
import { Power3 } from 'gsap';


function App() {

  const leadingpageRef = useRef()
  const textpageRef = useRef()
  const headtextRef = useRef()
  const main = useRef()

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: Power3.easeOut } });

    // Debugging console logs after tl declaration
    console.log("Timeline created:", tl);
    console.log("Leading Page Ref:", leadingpageRef.current);
    console.log("Text Page Ref:", textpageRef.current);

    // Initial animation to move leadingpageRef out of the window
    tl.to(leadingpageRef.current, { y: -window.innerHeight, duration: 2 })
      // Text reveal animation
      .fromTo(
        headtextRef.current,
        { autoAlpha: 0, y: '50%' },
        { autoAlpha: 1, y: '0%', duration: 1, delay:0.1}
      )
      // Fade out text
      .to(headtextRef.current, { autoAlpha: 0, duration: 1 , delay:0.5})
      // Move text-reveal div upward
      .to(textpageRef.current, { y: -window.innerHeight, duration: 2 , delay:0.5}, '-=0.5');

  }, []);




  return (
    <>
    <main ref={main} className='main'>


      <div ref={leadingpageRef} className="loading-anim-page"></div>
      <div ref={textpageRef} className="text-reveal">
        <h1 ref={headtextRef} className='heading-reveal'>You are not perfect:)</h1>
      </div>
      <div className="container">
        <div className="head">
          <h1>Here comes the body content</h1>
        </div>
      </div>
      </main>

    </>
  )
}

export default App

import './page.css'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {ReactLenis, useLenis} from 'lenis/react'


const Parallax = () => {

  const lenis = useLenis(({scroll}) => {})
  const containerRef = useRef(null) 

  useGSAP( () => {
    gsap.registerPlugin(ScrollTrigger)
    const cards = document.querySelectorAll('.card')
    const images = document.querySelectorAll('.card img')
    const totalCards=cards.length


    gsap.set(cards[0], {y: '0%',scale:1, rotation: 0})
    gsap.set(images[0], {scale:1})


    for (let i = 1; i < totalCards; i++) {
      gsap.set(cards[i], {y: '100%', scale: 1, rotation: 0})
      gsap.set(images[i], {scale: 1})
    }

    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".sticky-cards",
        start: 'top top',
        end: `+=${window.innerHeight * (totalCards -1)}`,
        scrub: 0.5,
        pin: true,
      }
    })

    for(let i = 0; i < totalCards - 1; i++) {
      const currentCard = cards[i]
      const nextCard = cards[i + 1]
      const currentImage = images[i]
      const position = i 

      scrollTimeline.to(currentCard, {
        scale: 0.5,
        rotation: 10,
        ease: 'none',
        duration: 1
      }, position)

      scrollTimeline.to(currentImage, {
        scale: 1.5,
        ease: 'none',
        duration: 1
      }, position)

      scrollTimeline.to(nextCard, {
        y: '0%',
        ease: 'none',
        duration: 1
      }, position )
    }

    return () => {
        scrollTimeline.kill()
        ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      }
  }, {scope: containerRef}
)
  

 
  return (
    <ReactLenis root>
      <div className="white" ref={containerRef}>
      
      <section className="intro flex items-center justify-center">
        <h1>This is  a placeholder text for the intro</h1>
      </section>
      
      <section className="sticky-cards">
      
        <div className="cards-container">
          <div className="card">
            <div className="tag">
              <p>Raw Emotion</p>
            </div>
            <img src='/picture1.jpg' alt="Placeholder" />
          </div>
          <div className="card">
            <div className="tag">
              <p>Fury</p>
            </div>
            <img src='/picture2.jpg' alt="Placeholder" />
          </div>
          <div className="card">
            <div className="tag">
              <p>Longing</p>
            </div>
            <img src='/picture3.jpg' alt="Placeholder" />
          </div>
          <div className="card">
            <div className="tag">
              <p>Liberation</p>
            </div>
            <img src='/picture4.jpg' alt="Placeholder" />
          </div>
        </div>
     
      </section>
      
      
      <section className="outro flex items-center justify-center">
        <h1>This is  a placeholder text  for the outro</h1>
      </section>
     
    </div>
    </ReactLenis>
    
  )
}

export default Parallax

import { useEffect, useState, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './WorkDetail.css'

export default function Workshops() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [visibleCards, setVisibleCards] = useState(new Set())
  const cardRefs = useRef([])

  useEffect(() => {
    // Load AOS library for scroll-based animations
    const script = document.createElement('script')
    script.src = 'https://unpkg.com/aos@next/dist/aos.js'
    script.async = true
    script.onload = () => {
      window.AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: false,
        mirror: false,
        offset: 100,
        delay: 0
      })
    }
    document.body.appendChild(script)

    // Add AOS CSS
    const link = document.createElement('link')
    link.href = 'https://unpkg.com/aos@next/dist/aos.css'
    link.rel = 'stylesheet'
    document.head.appendChild(link)

    // Intersection Observer for scroll-based reveals (better performance)
    const options = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = cardRefs.current.indexOf(entry.target)
          setVisibleCards(prev => new Set([...prev, index]))
          observer.unobserve(entry.target)
        }
      })
    }, options)

    cardRefs.current.forEach(card => {
      if (card) observer.observe(card)
    })

    return () => {
      cardRefs.current.forEach(card => {
        if (card) observer.unobserve(card)
      })
    }
  }, [])





  
  const work = {
    title: 'WORKSHOPS',
    category: 'Marketing',
    client: 'Mutil-Digital Capita',
    date: 'March 15, 2024',
    description: 'We embrace the latest trends, technology, and forward-thinking approaches to deliver sleek solutions.',
    overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    objectives: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    ],
    scopeItems: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    ],






  
    events: [
      { letter: 'A', label: 'AEROMODELING', image: 'events/aero.png', description: 'This workshop introduces participants to core aerodynamics concepts along with practical RC aircraft building experience, emphasizing hands-on training, teamwork, and disciplined participation.', rules: ['Participation certificates will be provided to eligible attendees.', 'The workshop includes aerodynamics basics and hands-on RC aircraft building.', 'Materials are provided, with motors and electronics for temporary use only.', 'Misconduct or misuse of equipment will result in dismissal.'], formLink: 'https://forms.gle/5LBKRg8W9vwJPUJM6', price: 'Entry Fee ₹100' },








      { letter: 'B', label: '3D PRINTING', image: 'events/3D.png', description: 'This workshop provides a well-organized learning experience with defined guidelines, emphasizing discipline, responsible behavior, and effective hands-on engagement.', rules: ['Participants must register online or on-site and complete payment before the workshop.', 'Punctuality is mandatory, and late entries may not be allowed.', 'All institutional rules and regulations must be strictly followed.', 'Official certificates will be issued upon successful completion.', 'Participants must handle equipment carefully and are responsible for any damage.', 'Unethical behavior, unauthorized recording, or rule violations will result in dismissal.'], formLink: 'https://forms.gle/5LBKRg8W9vwJPUJM6', price: 'Entry Fee ₹100' },








      { letter: 'C', label: 'CNC', image: 'events/CNC.png', description: 'This workshop emphasizes practical training with strict safety and discipline standards, with limited seats to ensure focused learning and effective skill development.', rules: ['Students must register online or on-site to attend.', 'Participation certificates will be provided.', 'Institutional rules must be strictly followed.', 'Hands-on training requires careful equipment handling and safety gear.', 'Unethical behavior leads to dismissal; seats are first-come, first-served.'], formLink: 'https://forms.gle/5LBKRg8W9vwJPUJM6', price: 'Entry Fee ₹100' },









      { letter: 'D', label: 'VEHICLE BUILDING', image: 'events/vehicle.png', description: 'This workshop is organized with clear registration guidelines to ensure seamless participation, while emphasizing professionalism and strict adherence to safety standards throughout the event.', rules: ['Students must register online or on-site to attend.', 'Participation certificates will be provided.', 'Institutional rules must be strictly followed.', 'Hands-on training requires careful equipment handling and safety gear.', 'Unethical behavior leads to dismissal; seats are first-come, first-served.'], formLink: 'https://forms.gle/5LBKRg8W9vwJPUJM6', price: 'Entry Fee ₹100' },






      { letter: 'E', label: 'ROBOTICS', image: 'events/robotics.png', description: 'This workshop requires prior registration and follows clear participation guidelines to ensure smooth conduct, while emphasizing professionalism and strict safety compliance throughout the event.', rules: ['Students must register online or on-site to attend.', 'Participation certificates will be provided.', 'Institutional rules must be strictly followed.', 'Hands-on training requires careful equipment handling and safety gear.', 'Unethical behavior leads to dismissal; seats are first-come, first-served.'], formLink: 'https://forms.gle/5LBKRg8W9vwJPUJM6', price: 'Entry Fee ₹100' },





      { letter: 'F', label: 'DRONE', image: 'events/drone.png', description: 'This workshop is conducted with clear registration and entry rules to ensure smooth participation, while emphasizing professionalism and strict adherence to safety standards throughout the event.', rules: ['Students must register online or on-site to attend.', 'Participation certificates will be provided.', 'Institutional rules must be strictly followed.', 'Hands-on training requires careful equipment handling and safety gear.', 'Unethical behavior leads to dismissal; seats are first-come, first-served.'], formLink: 'https://forms.gle/5LBKRg8W9vwJPUJM6', price: 'Entry Fee ₹100' },





      { letter: 'G', label: 'ENTREPRENEURSHIP', image: 'events/enter.png', description: 'Entrepreneurship encourages innovation and business skills to turn ideas into successful ventures through creativity and strategic thinking.', rules: ['Students must register online or on-site to attend.', 'Participation certificates will be provided.', 'Institutional rules must be strictly followed.', 'Hands-on training requires careful equipment handling and safety gear.', 'Unethical behavior leads to dismissal; seats are first-come, first-served.'], formLink: 'https://forms.gle/5LBKRg8W9vwJPUJM6', price: 'Entry Fee ₹100' },





      { letter: 'H', label: 'FRONIUS', image: 'events/fronius.png', description: 'Welding Technology (Fronius) introduces advanced welding techniques and modern equipment, focusing on precision, safety, and industry-standard practices for high-quality fabrication.', rules: ['Students must register online or on-site to attend.', 'Participation certificates will be provided.', 'Institutional rules must be strictly followed.', 'Hands-on training requires careful equipment handling and safety gear.', 'Unethical behavior leads to dismissal; seats are first-come, first-served.'], formLink: 'https://forms.gle/5LBKRg8W9vwJPUJM6', price: 'Entry Fee ₹100' },





    ]
  }

  return (
    <div className="work-detail-page">
      <button
        onClick={() => navigate('/')}
        className="close-button"
        aria-label="Close work detail"
      >✕ Close</button>

      <section className="events-section">
        <div className="w-layout-blockcontainer container w-container">
          
          <h2 className="events-title">{work.title} EVENTS</h2>

<p className="max-width-25vw" style={{ color: '#888', marginTop: '0.5rem' ,}}>
  Scroll down to explore all the events!
</p>









          <div className="events-grid">
            {work.events.map((event, i) => (
              <div
                key={i}
                ref={el => cardRefs.current[i] = el}
                className={`event-card ${visibleCards.has(i) ? 'visible' : ''} ${event.isRed ? 'red-event' : ''}`}
                style={{
                  animationDelay: `${i * 0.1}s`
                }}
                data-aos={i % 2 === 0 ? 'fade-in-left' : 'fade-in-right'}
                data-aos-delay={`${i * 50}`}
                data-aos-duration="800"
              >
                {/* Left Image */}
                <div className="event-image-wrapper">
                  <img
                    src={event.image}
                    alt={event.label}
                    className="event-image"
                    loading="lazy"
                  />
                  <div className="image-overlay" />
                </div>

                {/* Right Content */}
                <div className="event-content">
                  <h3 className="event-section-title">{event.label}</h3>
                  <p className="event-description">{event.description}</p>

                  <h3 className="event-section-title">RULES</h3>
                  <ul className="event-rules">
                    {event.rules.map((rule, rIdx) => (
                      <li key={rIdx} className="rule-item">• {rule}</li>
                    ))}
                  </ul>

                  <div className="event-footer">
                    <div className="event-price">{event.price}</div>
                    <a 
                      href={event.formLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="register-btn"
                    >
                      REGISTER NOW
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

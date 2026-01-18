import React from 'react'
import { useNavigate } from 'react-router-dom'
import SplineObject from './SplineObject'

export default function WorksSection() {
  const navigate = useNavigate()
  
  const works = [
    {
      id: 'nontech',
      label: 'Non-Technical',
      image: 'events/nontechgpt.png'
    },
    {
      id: 'tech',
      label: 'Technical',
      image: 'events/tech1.png'
    },
    {
      id: 'workshops',
      label: 'Workshops',
      image: 'events/workshop.png'
    },
    {
      id: 'onlineevents',
      label: 'Online Events',
      image: 'events/online.png'
    }
  ]


  const teamMembers = [
    {
      name: 'LEARN ',
      role: '',
      email: '',
      image: 'events/learn.png'
    },
    {
      name: 'COMPLETE',
      role: '',
      email: '',
      image: 'events/complete.png'
    },
    {
      name: 'CONNECT & WIN',
      role: '',
      email: '',
      image: 'events/win.png'
    }

    
  ]













  return (
    <>
      <section className="section relative">
        <div className="w-layout-blockcontainer container justify-bottom w-container">
          <div className="page-title-wrapper">
            <div className="page-title-block">
              <h5>INSIDE THE</h5>
              <div className="page-title-flex">
                <h1 className="large-title">SILVER</h1>
                <h1 className="large-title outline-white">ERA</h1>
              </div>
            </div>
            <div className="space-2rem hide-on-tab"></div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="w-layout-blockcontainer container w-container">
          <div className="w-dyn-list">
            <div role="list" className="works-block w-dyn-items">
              {works.map(work => (
                <div key={work.id} role="listitem" className="works-wrapper w-dyn-item">
                  <button
                    onClick={() => navigate(`/${work.id}`)}
                    className="works-link-wrapper w-inline-block"
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      cursor: 'pointer',
                      width: '100%',
                      transition: 'transform 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    <div className="works-image-wrapper">
                      <img
                        src={work.image}
                        alt={work.id}
                        className="works-image"
                      />
                      <div className="works-cut-out"></div>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="space-8rem"></div>
      </section>



      {/* Team Section */}
      <section style={{ padding: '6rem 5%' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p style={{
              color: '#666',
              fontSize: '0.8rem',
              letterSpacing: '0.2em',
              marginBottom: '1rem'
            }}>WHY</p>
            <h2 style={{
              fontSize: 'clamp(3rem, 8vw, 6rem)',
              fontWeight: '400',
              margin: 0
            }}>
              <span style={{ color: '#fff', fontStyle: 'italic' }}>MECHGUST </span>
              <span style={{ color: '#444' }}>26</span>
            </h2>
            <p style={{
              color: '#666',
              fontSize: '1rem',
              marginTop: '1.5rem',
              maxWidth: '500px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              From classroom knowledge to real-world skills.
            </p>
          </div>

          {/* Team Cards */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '2rem',
            position: 'relative'
          }}>
            {teamMembers.map((member, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '2rem',
                marginTop: i * 60 + 'px'
              }}>
                <div style={{
                  width: '200px',
                  height: '250px',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  background: '#f5f5f5'
                }}>
                  <img 
                    src={member.image}
                    alt={member.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div>
                  <p style={{
                    color: '#666',
                    fontSize: '0.7rem',
                    letterSpacing: '0.2em',
                    marginBottom: '0.5rem'
                  }}>{member.role}</p>
                  <h3 style={{
                    color: '#fff',
                    fontSize: '1.8rem',
                    fontWeight: '600',
                    margin: '0 0 0.5rem 0'
                  }}>{member.name}</h3>
                  <p style={{
                    color: '#666',
                    fontSize: '0.8rem',
                    letterSpacing: '0.1em',
                    marginBottom: '1rem'
                  }}>{member.email.toUpperCase()}</p>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    {['youtube', 'instagram', 'tiktok'].map((social) => (
                      <a key={social} href="#" style={{
                        width: '28px',
                        height: '28px',
                        background: '#1a1a1a',
                        borderRadius: '6px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="#fff">
                          <circle cx="12" cy="12" r="4"/>
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}






     








      <SplineObject
        splineUrl="https://prod.spline.design/J6fFldz3YOndaynA/scene.splinecode"
        animationType="spline"
        className="spline-tab-down"
      />
    </>
  )
}

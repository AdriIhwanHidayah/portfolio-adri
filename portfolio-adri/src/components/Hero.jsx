import profile from "../assets/profile.jpg"

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <img src={profile} alt="Adri Ihwan Hidayah" className="profile-img" />
        <h2>Adri Ihwan Hidayah</h2>
        <p>Information Systems Student</p>
        <span>Software Development | Network Engineering | System Analysis</span>
      </div>
    </section>
  )
}

export default Hero
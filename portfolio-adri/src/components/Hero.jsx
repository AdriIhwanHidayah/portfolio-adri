import profile from "../assets/profile.jpg"

function Hero() {
  return (
    <section className="hero">

      <div className="hero-container">

        <div className="hero-text">

          <small>👋 Hallo, saya</small>

          <h1>
            Adri <span>Ihwan</span> Hidayah
          </h1>

          <p>
            Mahasiswa Sistem Informasi yang fokus pada pengembangan aplikasi,
            UI/UX, dan jaringan komputer.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="btn-primary">
              View Projects
            </a>

            <a href="#contact" className="btn-outline">
              Contact 
            </a>

          </div>

        </div>

        <div className="hero-img">

          <img src={profile} className="profile-img" alt="Profile" />

        </div>

      </div>

    </section>
  )
}

export default Hero
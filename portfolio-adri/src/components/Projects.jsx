function Projects() {
  return (
    <section id="projects" className="section">

      <h2>Projects</h2>

      {/* TAMUQ */}
      <div className="project-card">
        <h3>TamuQ</h3>
        <p>
          Aplikasi buku tamu digital berbasis Flutter dengan penyimpanan data
          menggunakan Hive serta fitur admin untuk melihat riwayat kunjungan.
        </p>
        <small>Tech: Flutter, Hive</small>

        <a 
          href="https://github.com/AdriIhwanHidayah/TamuQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      </div>


      {/* SISTEM MONITORING ANAK */}
      <div className="project-card">
        <h3>Sistem Monitoring Kesehatan Anak</h3>
        <p>
          Sistem informasi untuk memantau kesehatan anak yang mencakup
          pencatatan data vaksinasi, notifikasi otomatis, dan manajemen pengguna.
        </p>
        <small>Tech: React, Node.js, MySQL</small>

        <a 
          href="https://github.com/nurwhyusuci/monitoring_kesehatan_anak"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      </div>


      {/* JARINGAN MULTI GEDUNG */}
      <div className="project-card">
        <h3>Perancangan Jaringan Multi Gedung</h3>
        <p>
          Perancangan topologi jaringan komputer multi gedung menggunakan
          VLAN, Router-on-a-Stick, dan routing RIP v2 untuk komunikasi antar jaringan.
        </p>

        <p></p>
      </div>


      {/* UX RESEARCH */}
      <div className="project-card">
        <h3>UX Research Evaluatif</h3>
        <p>
          Penelitian UX menggunakan metode evaluatif yang meliputi wawancara,
          observasi, dan survei untuk menganalisis pengalaman pengguna.
        </p>
        <small>Tech: Figma, UX Research</small>

        <a 
          href="https://www.figma.com/design/0BWOhY7U1mYLbds1syG743/Untitled?node-id=0-1&t=PH2Npj3TTHhItit8-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Design
        </a>
      </div>

    </section>
  )
}

export default Projects
function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="project-card">
        <h3>TamuQ – Digital Guest Book</h3>
        <p>
          Aplikasi Flutter dengan login admin, filter data,
          dan export CSV menggunakan Hive database.
        </p>
      </div>

      <div className="project-card">
        <h3>Sistem Monitoring Kesehatan Anak</h3>
        <p>
          Perancangan sistem dengan dokumentasi SRS lengkap
          serta fitur role management dan notifikasi otomatis.
        </p>
      </div>

      <div className="project-card">
        <h3>Perancangan Jaringan Multi Gedung</h3>
        <p>
          Implementasi 8 VLAN dan routing antar gedung
          menggunakan metode RIP v2.
        </p>
      </div>

      <div className="project-card">
        <h3>UX Research Evaluatif</h3>
        <p>
          Evaluasi usability menggunakan wawancara,
          observasi, dan survei.
        </p>
      </div>

    </section>
  )
}

export default Projects
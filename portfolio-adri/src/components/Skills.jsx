function Skills() {

  const skills = [
    "Flutter & Dart",
    "React JS",
    "Hive Database",
    "VLAN & Subnetting",
    "Router-on-a-Stick",
    "RIP v2 Routing",
    "UX Research",
    "ISO 25010"
  ]

  return (
    <section id="skills" className="section">
      <h2>Technical Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
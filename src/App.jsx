function App() {
  return (
    <div style={{
      backgroundColor: "#0f172a",
      color: "white",
      minHeight: "100vh",
      padding: "60px",
      fontFamily: "Arial"
    }}>
      <h1 style={{
        fontSize: "60px",
        marginBottom: "10px",
        color: "#38bdf8"
      }}>
        Yadukrishna M Menon
        </h1>

        <h2 style={{
          fontSize: "28px",
          marginBottom: "30px",
          color: "#94a3b8"
        }}>
          MCA Graduate | Software Engineer
        </h2>

        <p style={{
          maxWidth: "800px",
          margin: "0 auto",
          lineHeight: "1.8",
          fontSize: "18px",
          textAlign: "center"
        }}>
        Passionate MCA graduate with interests in software development,
        automation, cloud technologies, IT operations, and frontend engineering.
        Currently building real-world projects using React and modern web technologies.        
        </p>

        <a href="https://github.com/yadukm"
        target="_blank" 
        rel="noopener noreferrer"
        >
        <button style={{
          marginTop: "40px",
          padding: "15px 30px",
          backgroundColor: "#38bdf8",
          border: "none",
          borderRadius: "10px",
          fontSize: "18px",
          cursor: "pointer"
        }}>
          View My Projects
        </button>
      </a>
    </div>
  )
}
export default App
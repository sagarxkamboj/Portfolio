import "./styles/Achievements.css";

const Achievements = () => {
  return (
    <div className="achievements-section section-container" id="achievements">
      <div className="achievements-container">
        <h2>
          Certifications <span>&</span>
          <br /> Publications
        </h2>
        <div className="achievements-grid">
          <div className="achievement-box">
            <h3>Certifications</h3>
            <ul>
              <li>Pearson IT Specialist – Data Analyst</li>
              <li>Coursera – Python, Google Cybersecurity, AWS Fundamentals</li>
              <li>HackerRank – Problem Solving, Python, SQL</li>
            </ul>
          </div>
          <div className="achievement-box">
            <h3>Publications</h3>
            <div className="publication-item">
              <h4>IEEE Conference (ICTBIG 2025)</h4>
              <p>
                Real-Time Hybrid Stock Prediction and Automated Portfolio
                Management Using Ensemble ML
              </p>
            </div>
            <div className="publication-item">
              <h4>IEEE Conference (ICTBIG 2025)</h4>
              <p>
                AI-Driven Customer Retention System for Quick-Commerce
                Platforms
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;

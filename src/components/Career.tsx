import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI-ML Intern</h4>
                <h5>Edunet Foundation (Microsoft)</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Built retail sales prediction system using Python, Pandas,
              Scikit-learn. Performed EDA and feature engineering to develop ML
              models for forecasting. Visualized data using Matplotlib &
              Seaborn.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Machine Learning Intern</h4>
                <h5>Skillcraft Technology</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Built predictive ML models and performed preprocessing and
              evaluation. Used Git & GitHub for version control and optimized
              workflows and debugging.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

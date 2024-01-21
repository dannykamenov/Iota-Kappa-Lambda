import "./Help.css";

const Help = () => {
  return (
    <>
      <div className="help-image">
        <h1 className="help-title">Helpful Links</h1>
      </div>
      <div className="helpful-container">
        <div className="alumni-chapters">
          <h1 className="alumni-title">Alumni Chapters</h1>
          <div className="link-container">
            <div className="link-box alumni-box alumni-box">
              <h1 className="link-name">
                Rho Lambda <br /> Chapter
              </h1>
              <p className="link-info">Buffalo, NY</p>
              <a
                href="https://rholambdaalphas.wix.com/rho-lambda-alphas"
                target="_blank"
                rel="noreferrer"
                className="info-button"
              >
                Find out more
              </a>
            </div>
            <div className="link-box alumni-box">
              <h1 className="link-name">Beta Pi Lambda Chapter</h1>
              <p className="link-info">Albany, NY</p>
              <a
                href="http://www.bpl1906.com/"
                target="_blank"
                rel="noreferrer"
                className="info-button"
              >
                Find out more
              </a>
            </div>
            <div className="link-box alumni-box">
              <h1 className="link-name">Eta Rho Lambda Chapter</h1>
              <p className="link-info">Rochester, NY</p>
              <a
                href="https://www.facebook.com/ERLAlphas/"
                target="_blank"
                rel="noreferrer"
                className="info-button"
              >
                Find out more
              </a>
            </div>
            <div className="link-box alumni-box">
              <h1 className="link-name">Iota Theta Lambda Chapter</h1>
              <p className="link-info">Endicott, NY </p>
              <a
                href="http://alphaitl.org/"
                target="_blank"
                rel="noreferrer"
                className="info-button"
              >
                Find out more
              </a>
            </div>
            <div className="link-box alumni-box">
              <h1 className="link-name">Iota Iota Lambda Chapter</h1>
              <p className="link-info">Ithaca, NY</p>
              <a
                href="https://www.facebook.com/IIL510"
                target="_blank"
                rel="noreferrer"
                className="info-button"
              >
                Find out more
              </a>
            </div>
          </div>
        </div>
        <div className="college-chapters">
          <h1 className="college-title">College Chapters</h1>
          <div className="link-container">
            <div className="link-box college-box college-box">
              <h1 className="link-name">Alpha Chapter</h1>
              <p className="link-info">Cornell University Ithaca, NY</p>
              <a
                href="http://www.alphachapter1906.com/"
                target="_blank"
                rel="noreferrer"
                className="info-button"
              >
                Find out more
              </a>
            </div>
            <div className="link-box college-box">
              <h1 className="link-name">Delta Zeta Chapter</h1>
              <p className="link-info">Syracuse University Syracuse, NY</p>
              <a
                href="http://students.syr.edu/apa/"
                target="_blank"
                rel="noreferrer"
                className="info-button"
              >
                Find out more
              </a>
            </div>
            <div className="link-box college-box">
              <h1 className="link-name">Delta Epsilon Chapter</h1>
              <p className="link-info">
                University of Buffalo, Buffalo State College (Metro) Buffalo, NY
              </p>
              <a
                href="http://buffaloalphas.weebly.com/"
                target="_blank"
                rel="noreferrer"
                className="info-button"
              >
                Find out more
              </a>
            </div>
            <div className="link-box college-box">
              <h1 className="link-name">Mu Sigma Chapter</h1>
              <p className="link-info">
                University of Rochester, RIT, St. John Fisher College (Metro)
                Rochester, NY
              </p>
              <a
                href="http://www.musigmaalphas.org/"
                target="_blank"
                rel="noreferrer"
                className="info-button"
              >
                Find out more
              </a>
            </div>
            <div className="link-box college-box">
              <h1 className="link-name">More Coming Soon...</h1>
              <p className="link-info">USA <br /> The World</p>
              <a
                href="https://ikl1906.com/"
                target="_blank"
                rel="noreferrer"
                className="info-button"
              >
                Find out more
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Help;

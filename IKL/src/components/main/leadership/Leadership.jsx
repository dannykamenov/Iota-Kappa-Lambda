import "./Leadership.css";
import logo from "../../../assets/logo.png";
import president from "../../../assets/President.png";
import vp from "../../../assets/VP.png";
import treasurer from "../../../assets/Treasurer.png";
import secretary from "../../../assets/Secretary.png";

const Leadership = () => {
  return (
    <>
      <div className="section-image">
        <div className="ikl-logo">
          <img src={logo} alt="" className="ikl-logo-image" />
        </div>
        <div className="ikl-leadership-title">Iota Kappa Lambda Leadership</div>
        <div className="ikl-leadership-text">
          <p className="ikl-leadership-text-p">
            An Alpha Phi Alpha man&apos;s attitude should not be &quot;How much
            can I derive from the Fraternity&quot; but &quot;How much can I do
            for the Fraternity?&quot; In proportion to what he does for his
            Chapter and for Alpha Phi Alpha will a member receive lasting
            benefits from the Fraternity to himself in the way of self
            development by duty well done, and the respect of the Brothers well
            served.
          </p>
        </div>
        <div className="blockquote">
          <p className="blockquote-text">
            <u>Esprit de Fraternite&apos;</u> <br /> Brother Charles H. Garvin,{" "}
            <br /> 4th General President, <br /> Alpha Phi Alpha Fraternity,
            Inc.
          </p>
        </div>
      </div>
      <div className="current-leadership">
        <h1 className="current-title">Chapter Leadership 2023-2025</h1>
        <div className="current-leadership-container">
          <div className="president">
            <img src={president} alt="" className="president-photo" />
            <div className="president-info">
              <h1 className="president-title">President</h1>
              <p className="president-text">Brother Mark W. Hammons II, Esq.</p>
            </div>
          </div>
          <div className="president">
            <div className="president-info">
              <h1 className="president-title">Vice President</h1>
              <p className="president-text">Brother Julius A. Allen I</p>
            </div>
            <img src={vp} alt="" className="president-photo" />
          </div>
          <div className="president-others">
            <div className="president-info-others">
              <h1 className="president-title-others">Treasurer</h1>
              <p className="president-text-others">Brother Ronnie J. Bradford</p>
            </div>
            <img src={treasurer} alt="" className="president-photo-others" />
            <img src={secretary} alt="" className="president-photo-others" />
            <div className="president-info-others">
              <h1 className="president-title-others">Secretary</h1>
              <p className="president-text-others">Brother Kameron D.H. Mohammed</p>
            </div>
          </div>
        </div>
        <h1 className="chapter-officers">Chapter Officers</h1>
      </div>
    </>
  );
};

export default Leadership;

import "./Leadership.css";
import logo from "../../../assets/logo.png";

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
            <u>Esprit de Fraternite&apos;</u> <br /> Brother Charles H. Garvin, <br /> 4th General
            President, <br /> Alpha Phi Alpha Fraternity, Inc.
          </p>
        </div>
      </div>
    </>
  );
};

export default Leadership;

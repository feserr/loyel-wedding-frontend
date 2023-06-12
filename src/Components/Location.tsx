import "../Styles/location.css"
import { isMobile } from 'react-device-detect';


export default function Location() {
  const locationText = "\nCamino de la Pedrera, s/n\n46210 Picaña\nValencia";
  const mapURL = "https://goo.gl/maps/rwWLcJL85AhgJDVTA";

  return (
    <div>
      <div className="section-light" id="lokasi" data-aos="fade-in" data-aos-easing="linear">
        <div className="container">
          <div className="column is-12 regular-section">
            <h1 className="title has-text-centered section-title">¿Cómo llegar?</h1>
            <div className="tempat is-larger has-text-centered msg-wrapper">
              <p className="h3 subtitle msg-wrapper" style={{ textAlignLast: "center" }} data-aos="fade-up">
                Huerto de San Vicente
              </p>
              {isMobile ?
                (<p className="h6 subtitle msg-wrapper" style={{ textAlignLast: "center" }} data-aos="fade-up">{
                  locationText}
                </p>) :
                (<p className="h5 subtitle msg-wrapper" style={{ textAlignLast: "center" }} data-aos="fade-up">
                  {locationText}
                </p>)
              }
            </div>
          </div>
          <div className="location-grid">
            <div className="location-cell">
              <div className="location-item">
                <a href={mapURL}>
                  <img className="rounded mx-auto d-block" src="image/wedding_location.png" alt="wedding_location" data-aos="fade-up" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

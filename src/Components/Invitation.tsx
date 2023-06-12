export default function Invitation() {
  const invitationText = "¡Nos casamos!\nQueremos que nos acompañeis en este dia tan especial para nosotros.";

  return (
    <section className="section-light no-padding-top regular-section has-text-centered has-vertically-aligned-content" id="regular-section">
      <p className="bodytext msg-wrapper" data-aos="fade-up" data-aos-easing="linear">
        {invitationText}
      </p>

      <span className="space40px"></span>
      <span className="space40px"></span>

      <div data-aos="fade-up" data-aos-easing="linear">
        <div className="nama-lengkap" >
          Lorena & Elías
        </div>

      </div>
      <span className="space40px"></span>
      <div data-aos="fade-up" data-aos-easing="linear">
        <img src="image/divider-leaves.png" className="divider has-text-centered" alt="~~~" />
      </div>
      <span className="space40px"></span>
      <span className="space40px"></span>
    </section>
  );
}

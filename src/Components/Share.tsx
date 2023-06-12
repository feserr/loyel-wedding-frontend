import "../Styles/share.css"

export default function Share() {
  return (
    <div data-aos="fade-in" data-aos-easing="linear">
      <div className="container">
        <div className="column is-12 regular-section">
          <h1 className="title has-text-centered section-title">Comparte</h1>
          <div className="tempat is-larger has-text-centered msg-wrapper" data-aos="fade-up">
            <p className="normal-text h3 subtitle msg-wrapper" style={{ textAlignLast: "center" }}>
              {"Una foto vale más que mil palabras.\nEtiqueta la foto usando el hashtag "}
              <a className="normal-text share-hashtag" href="https://instagram.com/explore/tags/loyelboda/" target="_blank" rel="noreferrer">#loyelboda</a>
            </p>
          </div>
        </div>
        <div className="instagram-section" data-aos="fade-up" data-aos-easing="linear">
          <img src="image/photo_mock.png" className="has-text-centered" alt="~~~" />
        </div>

        <p className="h2 subtitle msg-wrapper" data-aos="fade-in" data-aos-easing="linear">
          <a className="instagram" href="https://instagram.com/lorena_g_f" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram"></i> @lorena_g_f
          </a>
          <span>&nbsp;</span>
          <a className="instagram" href="https://instagram.com/feserr_" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram"></i> @feserr_
          </a>
        </p>
      </div>
    </div>
  );
}

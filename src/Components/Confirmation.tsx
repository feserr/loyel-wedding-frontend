export default function Confirmation() {
  return (
    <div data-aos="fade-in" data-aos-easing="linear">
      <div className="container">
        <div className="columns is-multiline">
          <div className="column is-12 prolog">
            <h1 className="title has-text-centered section-title">Asistencia</h1>
          </div>
          <div className="column is-12 prolog has-text-centered">
            <p className="normal-text h3 subtitle msg-wrapper" style={{ textAlignLast: "center" }} data-aos="fade-up">
              Nada nos gustaría más que compartir este momento con vosotros.
            </p>
            <p className="normal-text h3 subtitle msg-wrapper" style={{ textAlignLast: "center" }} data-aos="fade-up">
              Esperamos recibir vuestra confirmación.
            </p>

            <div className="space20px"></div>

            <div className="d-grid gap-2 d-md-block justify-content-center" role="toolbar" aria-label="Toolbar with button groups">
              <div className="btn-group mr-2" role="group" aria-label="First group">
                <a href="https://api.whatsapp.com/send?phone=+34697361927&text=Hola%20Lorena%20¡Me%20gustaria%20confirmar%20la%20asistencia%20a%20vuestra%20boda!&source=&data="
                  className="mt-2 px-5 transition-all py-3 font-medium rounded-md text-white outline-4 disabled:opacity-50 disabled:pointer-events-none cursor-pointer normal-button normal-text btn btn-block" target="_blank" data-aos="fade-up" rel="noreferrer">
                  <i className="fab fa-whatsapp"></i>
                  {" Lorena"}
                </a>
              </div>

              <div className="btn-group mr-2" role="group" aria-label="Second group">
                <a href="https://api.whatsapp.com/send?phone=+34691792030&text=Hola%20Elias%20¡Me%20gustaria%20confirmar%20la%20asistencia%20a%20vuestra%20boda!&source=&data="
                  className="mt-2 px-5 transition-all py-3 font-medium rounded-md text-white outline-4 disabled:opacity-50 disabled:pointer-events-none cursor-pointer normal-button normal-text btn btn-block" target="_blank" data-aos="fade-up" rel="noreferrer">
                  <i className="fab fa-whatsapp"></i>
                  {" Elías"}
                </a >
              </div>
            </div>
          </div>

        </div>
      </div >
    </div>
  );
}

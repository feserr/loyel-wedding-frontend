import "../Styles/time.css"

import { isIOS, isSafari } from 'react-device-detect';
import { ICalendar, GoogleCalendar, CalendarOptions } from 'datebook';
import * as FileSaver from 'file-saver'

export default function Time() {
  const weddingStartDate = '2024-04-20T12:00:00';
  const weddingEndDate = '2024-04-20T23:59:59';

  const calendarConfig: CalendarOptions = {
    title: 'Lorena y Elías boda',
    location: 'Huerto de San Vicente, Camino de la Pedrera, s/n, 46210 Picaña, Valencia, Spain',
    description: "Boda de Lorena y Elías.",
    start: new Date(weddingStartDate),
    end: new Date(weddingEndDate),
  }

  const iCalendar = new ICalendar(calendarConfig);
  const googleCalendar = new GoogleCalendar(calendarConfig);

  const downloadICalendar = () => {
    const ics = iCalendar.render()
    const blob = new Blob([ics], {
      type: 'text/calendar'
    })

    FileSaver.saveAs(blob, 'my-calendar-event.ics')
    return undefined;
  };

  return (
    <div className="section-light" id="Fecha" data-aos="fade-in" data-aos-easing="linear">
      <div className="container">
        <div className="column is-12 regular-section">
          <h1 className="title has-text-centered section-title">Fecha</h1>
        </div>
        <div className="columns is-multiline">
          <div
            className="column is-4 has-vertically-aligned-content"
            // data-aos="fade-up"
          >
            <div className="is-larger has-text-centered">
              <div className="normal-text h3 subtitle has-text-centered">Sábado</div>
              <div className="normal-text time-font-size day-text has-text-centered">20</div>
              <div className="normal-text h3 subtitle has-text-centered">Abril 2024</div>
            </div>
          </div>
          <div className="column is-4 has-vertically-aligned-content">
            <p className="normal-text time-font-size is-larger has-text-centered msg-wrapper">
              {"Recepción invitados\n"}
              <strong className="normal-text">12:00</strong>
            </p>
          </div>
          <div
            className="column is-4 has-vertically-aligned-content"
            data-aos="fade-up">
            <h1 className="normal-text time-font-size is-larger has-text-centered msg-wrapper">
              {"Hora inicio\n"}
              <strong className="normal-text">12:30</strong>
            </h1>
          </div>
        </div>
        <div className="space20px"></div>
        <div className="main-content has-text-centered" data-aos="fade-up" data-aos-easing="linear">
          {isIOS && isSafari ? (
            <button onClick={downloadICalendar} className="px-5 transition-all py-3 font-medium rounded-md text-white outline-4 disabled:opacity-50 disabled:pointer-events-none cursor-pointer normal-button normal-text" data-tooltip="Añadir evento" rel="noopener noreferrer" data-aos="zoom-in">
              <i className="far fa-calendar-plus"></i>
              &nbsp;&nbsp;Añadir evento
            </button>) : (
            <a href={googleCalendar.render()} target="_blank" className="px-5 transition-all py-3 font-medium rounded-md text-white outline-4 disabled:opacity-50 disabled:pointer-events-none cursor-pointer normal-button normal-text" data-tooltip="Añadir evento" rel="noopener noreferrer" data-aos="zoom-in">
              <i className="far fa-calendar-plus"></i>
              &nbsp;&nbsp;Añadir evento
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

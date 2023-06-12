import "../Styles/countdown.css";

import { useCountdown } from '../Hooks/UseCountdown';

export default function Countdown() {
  const weddingDate = '04/20/2024 15:00:00';
  const [months, days, hours] = useCountdown(weddingDate);

  return (
    <div>
      <div data-aos="fade-in" data-aos-easing="linear" >
        <div className="container">
          <div className="column is-12 regular-section">
            <h1 className="title has-text-centered section-title">Cuenta atrás para el gran día</h1>
          </div>
          <div>
            {months > 0 ? (
              <div className="grid" data-aos="fade-up">
                <div className="cell">
                  <p className="item normal-text h3 subtitle">{months}</p><p className="item normal-text">Meses</p>
                </div>
                <div className="cell">
                  <p className="item normal-text h3 subtitle">{days}</p><p className="item normal-text">Días</p>
                </div>
              </div>) : (
              <div className="grid" data-aos="fade-up">
                <div className="cell">
                  <p className="item normal-text h3 subtitle">{days}</p><p className="item normal-text">Días</p>
                </div>
                <div className="cell">
                  <p className="item normal-text h3 subtitle">{hours}</p><p className="item normal-text">Horas</p>
                </div>
              </div>)
            }
          </div>
        </div>
      </div>
    </div >
  );

}
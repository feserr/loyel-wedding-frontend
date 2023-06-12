import './App.css';

import { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';

import SectionWrapper from './Utils/SectionWrapper';
import Welcome from './Components/Welcome';
import Countdown from './Components/Countdown';
import Time from './Components/Time';
import Location from './Components/Location';
import Confirmation from './Components/Confirmation';
import Credits from './Components/Credits';
import Head from './Components/Head';
import Share from './Components/Share';
import Bank from './Components/Bank';

function App() {
  const [openWelcome, setOpenWelcome] = useState(true);
  const [accounts, setAccounts] = useState(undefined);

  const queryParameters = new URLSearchParams(window.location.search)
  const key = queryParameters.get("key")

  const cookies = new Cookies();

  const onCloseWelcome = () => {
    setOpenWelcome(false);
    document.body.style.overflow = "";
    window.scrollTo({ top: 0 });
  };

  useEffect(() => {
    async function fetchData() {
      if (!key) {
        cookies.remove("accounts");
      }

      const accountsCookie = cookies.get("accounts");
      if (accountsCookie) {
        setAccounts(accountsCookie);
        return;
      }

      const data = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/bank/${key}`)
        .then(response => response.data)
        .catch(err => undefined);
      if (!data) return;

      setAccounts(data.accounts)
      cookies.set("accounts", data.accounts, { maxAge: 60 * 60 * 24 });
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <Welcome isOpen={openWelcome} onClose={onCloseWelcome} />

      <div>
        <SectionWrapper className='hero is-large'>
          <Head />
        </SectionWrapper>
      </div>

      <div className='main-content'>
        <SectionWrapper className="">
          <Time />
        </SectionWrapper>

        <SectionWrapper className="section-dark">
          <Countdown />
        </SectionWrapper>

        <SectionWrapper className="">
          <Location />
        </SectionWrapper>

        <SectionWrapper className="section-dark">
          <Confirmation />
        </SectionWrapper>

        <SectionWrapper className="">
          <Share />
        </SectionWrapper>

        {accounts ?
          (
            <SectionWrapper className='section-dark'>
              <Bank account1={accounts[0]} account2={accounts[1]} />
            </SectionWrapper>) :
          (null)}
      </div>

      <Credits />

    </div>
  );
}

export default App;

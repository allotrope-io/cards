import { useEffect, useState } from 'react';
import Link from 'next/link';
import LayoutFullWidth from '../components/layout-full-width';
const Home = () => {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.json();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <div>

      <LayoutFullWidth title="Home" stretch="true">
        <div className="hero text-center text-white">
          <h3 className="display-2 text-white">Learn. Memorize. Relax.<br />
          </h3>
          <p className="h4 text-white">
            Life's too short to spend all day studying.
        </p>
          <p className="row date">
            The date is:&nbsp;{' '}
            {date ? (
              <span>
                <b>{date.date}</b>
              </span>
            ) : (
                <span className="loading"></span>
              )}
          </p>
          <div className="container heroBottom">
            <div className="row">
              <div className="col-sm">
                <Link href="#!">
                  <a className="card">
                    <h4>Under Construction</h4>
                    <p>This open-source project is still under construction. Check back later!</p>
                  </a>
                </Link>
              </div>
              <div className="col-sm">
                  <a href="https://apps.ankiweb.net/" target="_blank" className="card">
                    <h4>Inspiration &rarr;</h4>
                    <p>This app is inspired by Anki, the leading, open-source spaced repetition software.
                    (But one that many find difficult to use!)</p>
                  </a>
              </div>
              <div className="col-sm">
                <Link href="#!">
                  <a className="card">
                    <h4>Pricing</h4>
                    <p>Free! Costly features (i.e. expanded storage space) will be paid.</p>
                  </a>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </LayoutFullWidth>
      <style jsx>{`
        .hero {
          width: 100%;
          color: #333;
          background: url('/imgs/starrybg.png');
          background-size: cover;
          background-position: top;
          padding-top: 10%;
        }
        .heroBottom {
          padding-bottom: 10%;
        }
        .date {
          height: 24px;
          max-width: calc(100% - 32px)
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 16px;
        }
        .date p {
          text-align: center;
        }
        .date span {
          width: 176px;
          text-align: center;
        }
        @keyframes Loading {
          0%{background-position:0% 50%}
          50%{background-position:100% 50%}
          100%{background-position:0% 50%}
        }
        .date .loading {
          max-width: 100%;
          height: 24px;
          border-radius: 4px;
          display: inline-block;
          background: linear-gradient(270deg, #D1D1D1, #EAEAEA);
          background-size: 200% 200%;
          animation: Loading 2s ease infinite;
        }
        .card {
          padding: 18px 18px 24px;
          width: 220px;
          text-align: left;
          text-decoration: none;
          color: #434343;
          border: 1px solid #9b9b9b;
        }
        .card:hover {
          border-color: #067df7;
        }
        .card h3 {
          margin: 0;
          color: #067df7;
          font-size: 18px;
        }
        .card p {
          margin: 0;
          padding: 12px 0 0;
          font-size: 13px;
          color: #333;
        }
      `}</style>
    </div>
  );
};
export default Home;
import ReactGA from 'react-ga';

const MeasurementID = "G-SRHZ6Y9MGS"

export const initGA = () => {
  ReactGA.initialize(MeasurementID);
};

export const logPageView = () => {
  ReactGA.pageview(window.location.pathname);
};

export const logEvent = (category = '', action = '', label = '') => {
  if (category && action && label) {
    ReactGA.event({ category, action, label });
  }
};
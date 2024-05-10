import ReactGA from 'react-ga4';
const MeasurementID = "G-SRHZ6Y9MGS"

export const InitGA = () => {
  ReactGA.initialize(MeasurementID);
};

export const LogPageView = () => {
  ReactGA.pageview(window.location.pathname);
};

export const LogEvent = (category = '', action = '', label = '') => {
  if (category && action && label) {
    ReactGA.event({ category, action, label });
  }
};
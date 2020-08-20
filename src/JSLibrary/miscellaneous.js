const googleAnalyticsTracking = (evtName, props) => {
  if (typeof dataLayer !== 'undefined') {
    const gaData = {
      event: 'flowrida_visitor_event',
      eventLabel: evtName
    };

    if (props) {  
      gaData.visitorEventInfo = JSON.stringify(props);
    }

    dataLayer.push(gaData);
  }
}

const googleAnalyticsTrackingCustom = (eventLabel, eventCategory, eventAction, eventValue) => {
  if (typeof dataLayer !== 'undefined') {
    const gaData = {
      event: 'flow_visitor_event',
      eventLabel,
      eventCategory,
      eventAction,
      eventValue,
    };
    dataLayer.push(gaData);
  }
}

export default {
  googleAnalyticsTracking,
  googleAnalyticsTrackingCustom,
};

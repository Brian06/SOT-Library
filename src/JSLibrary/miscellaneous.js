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

const googleAnalyticsTrackingCustom = (eventLabel, eventCategory, eventAction) => {
  if (typeof dataLayer !== 'undefined') {
    const gaData = {
      event: 'flow_visitor_event',
      eventLabel,
      eventCategory,
      eventAction,
    };
    dataLayer.push(gaData);
  }
}

export {
  googleAnalyticsTracking,
  googleAnalyticsTrackingCustom,
};

export default {
  googleAnalyticsTracking,
  googleAnalyticsTrackingCustom,
};

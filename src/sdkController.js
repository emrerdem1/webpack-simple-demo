const MOCK_PULPO_ENDPOINT =
  'http://banefultest-env.eba-uicgekz4.us-east-2.elasticbeanstalk.com/loadElements';

const appendIframeWithHTML = (html) => {
  // Parse HTML to recognizable string format.
  const parser = new DOMParser();
  const htmlDocument = parser.parseFromString(html, 'text/html');
  const parsedHtmlString = new XMLSerializer().serializeToString(htmlDocument);
  // Create iframe and append to DOM to fill its document later.
  const pulpoIframe = document.createElement('iframe');
  pulpoIframe.width = 480;
  pulpoIframe.height = 560;
  pulpoIframe.style.border = 'none';
  pulpoIframe.style.background = 'gray';
  pulpoIframe.setAttribute('id', 'pulpo-iframe');
  document.getElementById('pulpo-container').append(pulpoIframe);
  // Get the inner document of the said iframe, fill its document with HTML.
  const iframeDocument =
    document.getElementById('pulpo-iframe').contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(parsedHtmlString);
  iframeDocument.close();
  window.hasParsedHTML = true;
};

const parsePulpoHTML = async () => {
  const response = await fetch(MOCK_PULPO_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'image/png',
    },
  }).catch((error) => {
    console.log(error);
  });
  const parsedHTML = await response.json();
  appendIframeWithHTML(parsedHTML.html);
};

window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.parse-controller').onclick = () => {
    if (window.hasParsedHTML) return alert('it is already loaded');
    parsePulpoHTML();
  };
});

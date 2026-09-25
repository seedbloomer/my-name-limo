(() => {
  const measurementId = 'G-5V2BYX5507';
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', measurementId);

  const tag = document.createElement('script');
  tag.async = true;
  tag.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(tag);

  const locationFor = (link) => {
    const section = link.closest('header, .offer, .final, footer');
    if (!section) return 'unknown';
    if (section.tagName === 'HEADER') return 'header';
    if (section.tagName === 'FOOTER') return 'footer';
    return section.className.toString().split(' ')[0] || 'content';
  };

  const trackLinks = (selector, eventName) => {
    document.querySelectorAll(selector).forEach((link) => {
      link.addEventListener('click', () => {
        window.gtag('event', eventName, {
          cta_label: (link.textContent || '').replace(/\s+/g, ' ').trim(),
          cta_location: locationFor(link),
          link_url: link.href,
          transport_type: 'beacon'
        });
      });
    });
  };

  trackLinks('a[href*="wa.me/6589256211"]', 'whatsapp_click');
  trackLinks('a[href^="https://seedbloomer.com"]', 'seedbloomer_click');
})();

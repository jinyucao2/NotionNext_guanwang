(function() {
  var s = document.createElement('script');
  s.type = 'application/ld+json';
  s.text = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "光与锚Light-Anchor",
    "description": "太原领先的GEO服务公司",
    "url": "https://light-anchor.pro",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "太原",
      "addressRegion": "山西省",
      "addressCountry": "CN"
    }
  });
  document.head.appendChild(s);
})();

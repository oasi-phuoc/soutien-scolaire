const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.connect({
    browserURL: 'http://localhost:9222',
    defaultViewport: null
  });
  
  const pages = await browser.pages();
  const page = pages.find(p => p.url().includes('localhost:3000/admin/impression'));
  
  if (page) {
    const result = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('[data-print-refresh]')).map(el => 
        el.tagName + ':' + el.getAttribute('data-print-refresh') + ':' + getComputedStyle(el).display + ':' + el.getBoundingClientRect().width
      );
    });
    console.log(JSON.stringify(result, null, 2));
  } else {
    console.log('Page not found');
  }
  
  await browser.disconnect();
})();

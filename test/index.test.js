const assert = require('assert');
const generateMetaTags = require('../src/index');

describe('Social Media Meta Tags Generator', function() {
    it('should generate meta tags correctly', function() {
        const title = 'Example Title';
        const description = 'Example Description';
        const image = 'example-image.jpg';
        const expectedMetaTags = `
            <meta property="og:title" content="${title}">
            <meta property="og:description" content="${description}">
            <meta property="og:image" content="${image}">
            <meta name="twitter:title" content="${title}">
            <meta name="twitter:description" content="${description}">
            <meta name="twitter:image" content="${image}">
        `;
        const generatedMetaTags = generateMetaTags(title, description, image);
        assert.strictEqual(generatedMetaTags, expectedMetaTags);
    });
});

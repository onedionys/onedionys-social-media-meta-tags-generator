function generateMetaTags(title, description, image) {
    const metaTags = `
        <meta property="og:title" content="${title}">
        <meta property="og:description" content="${description}">
        <meta property="og:image" content="${image}">
        <meta name="twitter:title" content="${title}">
        <meta name="twitter:description" content="${description}">
        <meta name="twitter:image" content="${image}">
    `;
    return metaTags;
}

module.exports = generateMetaTags;

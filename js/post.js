document.addEventListener("DOMContentLoaded", function(e) {
    const tocHeadings = document.querySelectorAll('.post-content h1:not(.no_toc), .post-content h2:not(.no_toc), .post-content h3:not(.no_toc), .post-content h4:not(.no_toc), .post-content h5:not(.no_toc), .post-content h6:not(.no_toc)')
    const tocWrap = document.querySelector('.toc-wrap')

    if (tocHeadings.length > 0) {
        tocWrap.style.display = 'block'
        tocbot.init({
            tocSelector: '.toc',
            contentSelector: '.post-content',
            hasInnerContainers: true,
            ignoreSelector: '.no_toc',
            // does not work with postion sticky https://github.com/anushkadhimantscanlin/tocbot/issues/254
            // headingsOffset: 96,
            // scrollSmoothOffset: -96
        });
    }
});









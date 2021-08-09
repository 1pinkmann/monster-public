export default function checkVideoInViewport(elements) {
 
    document.addEventListener("scroll", () => {

        elements.forEach((element) => {

            if (!element) return;

            if (!getVideoPosition(element) && !element.paused) {
                element.pause();
            }
        });
    });
}

function getVideoPosition(el) {
    if (!el) return; 
    var rect = el.getBoundingClientRect();
    return !(rect.top > window.innerHeight || rect.bottom < 0);
}


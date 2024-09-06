document.addEventListener("DOMContentLoaded", () => {

    const layout = document.getElementById("layout");
    const section = [...layout.children];
    let page = 0;
    const last = section.length - 1; // Last page index

    // Update page based on delta value
    function updatePage(delta) {
        if (delta > 0) page++;
        else if (delta < 0) page--;

        if (page < 0) page = 0;
        else if (page > last) page = last;

        layout.style.top = page * (-100) + "vh";
    }

    // Handle wheel event
    window.addEventListener('wheel', (e) => {
        e.preventDefault(); // Prevent default scrolling behavior
        updatePage(e.deltaY);
    }, { passive: false });

    // Handle touch events
    let startY;
    let lastY;

    window.addEventListener('touchstart', (e) => {
        startY = e.touches[0].clientY;
        lastY = startY;
    });

    window.addEventListener('touchmove', (e) => {
        e.preventDefault(); // Prevent default touch scrolling behavior
        const currentY = e.touches[0].clientY;
        const deltaY = lastY - currentY; // Calculate the distance moved
        updatePage(deltaY); // Update page based on touch movement
        lastY = currentY; // Update lastY for the next move event
    }, { passive: false });

});

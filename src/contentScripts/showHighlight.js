"use strict";

(() => { // Restrict the scope of the variables to this file
    // highlightId needs to be passed in as a global var for this script to work
    if (highlightId !== undefined) {
        const highlightEl = document.querySelector(`[data-highlight-id="${highlightId}"]`);
        if (highlightEl) {
            highlightEl.scrollIntoViewIfNeeded(true);
            const boundingRect = highlightEl.getBoundingClientRect();
            onHighlightMouseEnterOrClick({
                'type': 'click',
                'target': highlightEl,
                'clientX': boundingRect.left + boundingRect.width / 2
            });
        }
    }
})();

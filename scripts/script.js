/* script.js
   Hamburger toggle script (moved from scpit.js)
   - Finds all `.hamburger` buttons in the page
   - Uses the button's `aria-controls` to find the target nav
   - Toggles `aria-expanded` on the button
   - Toggles `.is-active` on the button (for animation)
   - Toggles `.nav--open` on the controlled nav and keeps `hidden` in sync

   Usage: add <script src="scripts/script.js"></script> before </body> in each page.
*/

document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.querySelectorAll('.hamburger');
    buttons.forEach(function (btn) {
        var navId = btn.getAttribute('aria-controls');
        var nav = navId ? document.getElementById(navId) : null;

        // initialize aria-expanded if not present
        if (!btn.hasAttribute('aria-expanded')) {
            btn.setAttribute('aria-expanded', 'false');
        }

        btn.addEventListener('click', function () {
            var expanded = btn.getAttribute('aria-expanded') === 'true';
            // toggle attribute and classes
            btn.setAttribute('aria-expanded', String(!expanded));
            btn.classList.toggle('is-active');

            if (nav) {
                nav.classList.toggle('nav--open');
                // keep hidden attribute in sync for assistive tech
                if (!expanded) {
                    nav.removeAttribute('hidden');
                } else {
                    nav.setAttribute('hidden', '');
                }
            }
        });
    });
});

// Zion Advisor — analytics + progressive enhancement
(function () {
    'use strict';

    // ===== GA4 ANALYTICS =====
    // Get your free GA4 Measurement ID from: https://analytics.google.com → Admin → Data Streams → Web
    const GA4_ID = 'G-Y7JFZVDN5F'; // Zion Advisor GA4 Measurement ID

    if (GA4_ID && GA4_ID !== 'G-XXXXXXXXXX') {
        const script = document.createElement('script');
        script.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA4_ID;
        script.async = true;
        document.head.appendChild(script);

        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', GA4_ID, {
            'send_page_view': true,
            'cookie_flags': 'SameSite=None;Secure'
        });
        window.gtag = gtag;
    }

    // Helper: fire GA4 event (safe — no-op if GA4 not loaded)
    function trackEvent(name, params) {
        if (window.gtag) {
            gtag('event', name, params || {});
        }
    }

    // ===== CTA CLICK TRACKING =====
    document.querySelectorAll('.btn, a.btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
            trackEvent('cta_click', {
                'event_category': 'engagement',
                'event_label': btn.textContent.trim() || 'CTA',
                'page_path': window.location.pathname
            });
        });
    });

    // ===== OUTBOUND LINK TRACKING =====
    document.querySelectorAll('a[href^="http"]').forEach(function (link) {
        if (link.hostname !== 'www.zionadvisor.com' && link.hostname !== 'zionadvisor.com') {
            link.addEventListener('click', function () {
                trackEvent('outbound_link', {
                    'event_category': 'engagement',
                    'event_label': link.href,
                    'page_path': window.location.pathname
                });
            });
        }
    });

    // ===== SCROLL DEPTH (for content engagement) =====
    const scrollMilestones = [25, 50, 75, 90, 100];
    const reached = {};
    window.addEventListener('scroll', function () {
        const doc = document.documentElement;
        const max = doc.scrollHeight - window.innerHeight;
        if (max <= 0) return;
        const pct = Math.round((window.scrollY / max) * 100);
        scrollMilestones.forEach(function (milestone) {
            if (pct >= milestone && !reached[milestone]) {
                reached[milestone] = true;
                trackEvent('scroll_depth', {
                    'event_category': 'engagement',
                    'event_label': milestone + '%',
                    'page_path': window.location.pathname
                });
            }
        });
    }, { passive: true });

    // ===== TIME ON PAGE (for insight articles) =====
    const pageStart = Date.now();
    window.addEventListener('beforeunload', function () {
        const seconds = Math.round((Date.now() - pageStart) / 1000);
        if (seconds >= 30) {
            trackTimeOnPage(seconds);
        }
    });
    window.addEventListener('visibilitychange', function () {
        if (document.visibilityState === 'hidden') {
            const seconds = Math.round((Date.now() - pageStart) / 1000);
            if (seconds >= 30) {
                trackTimeOnPage(seconds);
            }
        }
    });
    function trackTimeOnPage(seconds) {
        trackEvent('time_on_page', {
            'event_category': 'engagement',
            'event_label': Math.round(seconds / 10) * 10 + 's', // round to nearest 10s
            'page_path': window.location.pathname
        });
    }

    // ===== MOBILE NAV =====
    var toggle = document.querySelector('.nav-toggle');
    var nav = document.querySelector('nav.site-nav');
    if (toggle && nav) {
        toggle.addEventListener('click', function () {
            var open = nav.classList.toggle('open');
            toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        });
    }

    // ===== CURRENT YEAR =====
    document.querySelectorAll('.js-year').forEach(function (el) {
        el.textContent = new Date().getFullYear();
    });

    // ===== READING PROGRESS =====
    var progress = document.querySelector('.reading-progress');
    if (progress) {
        var update = function () {
            var doc = document.documentElement;
            var max = doc.scrollHeight - window.innerHeight;
            progress.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + '%';
        };
        window.addEventListener('scroll', update, { passive: true });
        update();
    }

    // ===== CONTACT FORM → formsubmit.co =====
    var intakeForm = document.querySelector('form[action*="formsubmit.co"]');
    if (intakeForm) {
        intakeForm.addEventListener('submit', function (e) {
            e.preventDefault();
            var status = intakeForm.querySelector('.form-status');
            var btn = intakeForm.querySelector('button[type="submit"]');
            if (!status) return;
            if (btn) btn.disabled = true;
            status.textContent = 'Sending...';
            status.hidden = false;

            fetch(intakeForm.action, {
                method: 'POST',
                body: new FormData(intakeForm),
                headers: { 'Accept': 'application/json' }
            }).then(function (response) {
                if (response.ok) {
                    status.textContent = 'Thank you — your message has been sent. We respond within 1 business day.';
                    intakeForm.reset();
                    // GA4 conversion event
                    trackEvent('generate_lead', {
                        'event_category': 'conversion',
                        'event_label': 'Contact Form',
                        'page_path': window.location.pathname,
                        'value': 1
                    });
                } else {
                    status.textContent = 'Something went wrong. Please try again or email us directly.';
                }
            }).catch(function () {
                status.textContent = 'Something went wrong. Please try again or email us directly.';
            }).finally(function () {
                if (btn) btn.disabled = false;
            });
        });
    }
})();

// Zion Advisor — analytics + progressive enhancement
(function () {
    'use strict';

    // ===== GA4 ANALYTICS (loads only after the visitor accepts) =====
    const GA4_ID = 'G-Y7JFZVDN5F'; // Zion Advisor GA4 Measurement ID
    const CONSENT_KEY = 'za_cookie_consent';
    const CONSENT_DAYS = 180; // ask again after about 6 months

    function readConsent() {
        try {
            var v = JSON.parse(localStorage.getItem(CONSENT_KEY) || 'null');
            if (v && v.t && (Date.now() - v.t) < CONSENT_DAYS * 864e5 && (v.v === 'granted' || v.v === 'denied')) return v.v;
        } catch (e) { /* storage blocked: treat as no choice */ }
        return null;
    }
    function saveConsent(value) {
        try { localStorage.setItem(CONSENT_KEY, JSON.stringify({ v: value, t: Date.now() })); } catch (e) { /* ignore */ }
    }

    function loadAnalytics() {
        if (window.gtag || !GA4_ID || GA4_ID === 'G-XXXXXXXXXX') return;
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

    // ===== COOKIE BANNER =====
    function removeBanner() {
        var b = document.getElementById('cookie-banner');
        if (b) b.remove();
    }
    function showBanner() {
        if (document.getElementById('cookie-banner')) return;
        var b = document.createElement('div');
        b.id = 'cookie-banner';
        b.className = 'cookie-banner';
        b.setAttribute('role', 'region');
        b.setAttribute('aria-label', 'Cookie consent');
        b.innerHTML =
            '<p>We use Google Analytics cookies to count visits and improve this site. They are switched off unless you accept. ' +
            '<a href="/privacy/">Privacy notice</a></p>' +
            '<div class="cookie-actions">' +
            '<button type="button" class="cookie-btn" data-consent="denied">Decline</button>' +
            '<button type="button" class="cookie-btn" data-consent="granted">Accept</button>' +
            '</div>';
        b.addEventListener('click', function (e) {
            var choice = e.target && e.target.getAttribute && e.target.getAttribute('data-consent');
            if (!choice) return;
            saveConsent(choice);
            removeBanner();
            if (choice === 'granted') loadAnalytics();
        });
        document.body.appendChild(b);
    }
    function initConsent() {
        var consent = readConsent();
        if (consent === 'granted') loadAnalytics();
        else if (consent === null) showBanner();
        // footer link lets visitors change their mind at any time
        var fb = document.querySelector('.footer-bottom p');
        if (fb && !document.getElementById('cookie-settings')) {
            var a = document.createElement('a');
            a.id = 'cookie-settings';
            a.href = '#';
            a.textContent = 'Cookie settings';
            a.addEventListener('click', function (e) {
                e.preventDefault();
                try { localStorage.removeItem(CONSENT_KEY); } catch (err) { /* ignore */ }
                showBanner();
            });
            fb.appendChild(document.createTextNode(' \u00b7 '));
            fb.appendChild(a);
        }
    }
    initConsent();

    // Helper: fire GA4 event (safe — no-op if GA4 not loaded)
    function trackEvent(name, params) {
        if (window.gtag) {
            gtag('event', name, params || {});
        }
    }
    window.trackEvent = trackEvent; // used by inline Formspree handlers on /contact/ and /resources/

    // ===== EMAIL CLICK TRACKING (key event in GA4) =====
    document.querySelectorAll('a[href^="mailto:"]').forEach(function (link) {
        link.addEventListener('click', function () {
            trackEvent('email_click', { 'event_category': 'conversion', 'page_path': window.location.pathname });
        });
    });
    // file_download is sent automatically by GA4 enhanced measurement

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

    // ===== FORM HANDLING =====
    // The contact form is now wired via @formspree/ajax (CDN + data attributes in HTML).
    // Manual fetch handlers removed so @formspree/ajax handles submission, button state,
    // validation, and success/error messages directly.

    // ===== SCROLL TO TOP =====
    var scrollBtn = document.querySelector('.scroll-top');
    if (scrollBtn) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 400) {
                scrollBtn.classList.add('visible');
            } else {
                scrollBtn.classList.remove('visible');
            }
        }, { passive: true });
        scrollBtn.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
})();

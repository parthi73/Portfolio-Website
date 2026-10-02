(function () {
    var w = ["Frontend Developer", "YouTuber", "Video Editor", "Photographer"], i = 0, j = 0, d = false, el = document.getElementById("type");
    function t() {
        var s = w[i]; j += d ? -1 : 1; el.textContent = s.slice(0, j); var delay = d ? 45 : 80;
        if (!d && j === s.length) { d = true; delay = 1200 } else if (d && j === 0) { d = false; i = (i + 1) % w.length; delay = 300 }
        setTimeout(t, delay)
    }
    t();
    var io = new IntersectionObserver(function (es) { es.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add("on"); io.unobserve(x.target) } }) }, { threshold: .12 });
    document.querySelectorAll(".rv").forEach(function (x) { io.observe(x) });
    document.getElementById("f").addEventListener("submit", function (ev) {
        ev.preventDefault();
        var b = "Name: " + n.value + "\nEmail: " + e.value + "\n\n" + m.value;
        location.href = "mailto:rajaparthipan7373@gmail.com?subject=" + encodeURIComponent(s.value || "Portfolio enquiry") + "&body=" + encodeURIComponent(b)
    });
})();

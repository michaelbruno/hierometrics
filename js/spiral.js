"use strict";
! function() {
    function a() {
		
		// start a
		
        n = window.innerWidth * e, r = window.innerHeight * e, o = n * r, m.length = Math.sqrt(o) / 25 | 0, h.width = n, h.height = r;
        var a, t;
        for (a = 0, t = m.length; t > a; a++) m[a] || (m[a] = {
            x: Math.random() * n,
            y: Math.random() * r,
            vx: 1 * Math.random() - .5,
            vy: 1 * Math.random() - .5,
            m: 1.5 * Math.random() + 1,
            link: null,
            pos: !1
        })
		
		// end a
    }

    function t() {
		
		// start t
		
        var a, o, e, h, i, y, M, v, x, l, s, c;
        for (requestAnimationFrame(t), d.clearRect(0, 0, n, r), v = 0, c = m.length - 1; c > v; v++){
            for (x = v + 1; c + 1 > x; x++){
				 l = m[v], s = m[x], y = s.x - l.x, M = s.y - l.y, a = Math.sqrt(Math.pow(y, 2) + Math.pow(M, 2)), a < l.m / 2 + s.m / 2 ? (l.m <= s.m && (l.x = Math.random() * n, l.y = Math.random() * r, l.vx = 1 * Math.random() - .5, l.vy = 1 * Math.random() - .5, l.m = 1.5 * Math.random() + 1), s.m <= l.m && (s.x = Math.random() * n, s.y = Math.random() * r, s.vx = 1 * Math.random() - .5, s.vy = 1 * Math.random() - .5, s.m = 1.5 * Math.random() + 1)) : a > 200 || (o = {
                x: y / a,
                y: M / a
            }, e = 10 * l.m * s.m / Math.pow(a, 2), e > .025 && (e = .025), d.beginPath(), d.strokeStyle = "rgba(63,63,63," + 40 * e + ")", d.moveTo(l.x, l.y), d.lineTo(s.x, s.y), d.stroke(), h = e * o.x, i = e * o.y, l.pos !== s.pos ? (l.vx -= h, l.vy -= i, s.vx += h, s.vy += i) : (l.vx += h, l.vy += i, s.vx -= h, s.vy -= i));
			}
		}
			
        for (v = 0, c = m.length; c > v; v++){ 
			d.beginPath(), d.arc(m[v].x, m[v].y, m[v].m, 0, 2 * Math.PI), d.fill(), m[v].x += m[v].vx, m[v].y += m[v].vy, (m[v].x > n + 25 || m[v].x < -25 || m[v].y > r + 25 || m[v].y < -25) && (m[v].x = Math.random() * n, m[v].y = Math.random() * r, m[v].vx = 1 * Math.random() - .5, m[v].vy = 1 * Math.random() - .5)
		}
			
			
		// end t
    }
	
	
	
	
	// outside of functions
	
    var n, r, o, e = window.devicePixelRatio,
        m = new Array(Math.sqrt(o) / 10 | 0),
        h = document.createElement("canvas"),
        d = h.getContext("2d"),
        i = document.getElementById("container");
    1 !== e && (h.style.transform = "scale(" + 1 / e + ")", h.style.transformOrigin = "0 0"), h.id = "nodegarden", i.appendChild(h), a(), t(), window.addEventListener("resize", a)
}();

(function () {
    var h = {
        },
        mt = {
        },
        c = {
            id: '9842c7dcbbff3109ea37b7407dd0e95c',
            dm: [
                'lufax.com'
            ],
            js: 'tongji.baidu.com/hm-web/js/',
            etrk: [
            ],
            icon: '',
            ctrk: false,
            align: - 1,
            nv: - 1,
            vdur: 1800000,
            age: 31536000000,
            rec: 0,
            rp: [
            ],
            trust: 0,
            vcard: 0,
            qiao: 0,
            lxb: 0,
            conv: 0,
            apps: ''
        };
    var p = !0,
        s = null,
        t = !1;
    mt.g = {
    };
    mt.g.xa = /msie (\d+\.\d+)/i.test(navigator.userAgent);
    mt.g.cookieEnabled = navigator.cookieEnabled;
    mt.g.javaEnabled = navigator.javaEnabled();
    mt.g.language = navigator.language || navigator.browserLanguage || navigator.systemLanguage || navigator.userLanguage || '';
    mt.g.ia = (window.screen.width || 0) + 'x' + (window.screen.height || 0);
    mt.g.colorDepth = window.screen.colorDepth || 0;
    mt.cookie = {
    };
    mt.cookie.set = function (a, b, f) {
        var d;
        f.z && (d = new Date, d.setTime(d.getTime() + f.z));
        document.cookie = a + '=' + b + (f.domain ? '; domain=' + f.domain : '') + (f.path ? '; path=' + f.path : '') + (d ? '; expires=' + d.toGMTString()  : '') + (f.Ba ? '; secure' : '')
    };
    mt.cookie.get = function (a) {
        return (a = RegExp('(^| )' + a + '=([^;]*)(;|$)').exec(document.cookie)) ? a[2] : s
    };
    mt.event = {
    };
    mt.event.e = function (a, b, f) {
        a.attachEvent ? a.attachEvent('on' + b, function (d) {
            f.call(a, d)
        })  : a.addEventListener && a.addEventListener(b, f, t)
    };
    mt.event.preventDefault = function (a) {
        a.preventDefault ? a.preventDefault()  : a.returnValue = t
    };
    mt.m = {
    };
    mt.m.parse = function () {
        return (new Function('return (" + source + ")')) ()
    };
    mt.m.stringify = function () {
        function a(a) {
            /["\\\x00-\x1f]/.test(a) && (a = a.replace(/["\\\x00-\x1f]/g, function (a) {
                var b = f[a];
                if (b) return b;
                b = a.charCodeAt();
                return '\\u00' + Math.floor(b / 16).toString(16) + (b % 16).toString(16)
            }));
            return '"' + a + '"'
        }
        function b(a) {
            return 10 > a ? '0' + a : a
        }
        var f = {
            '': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"': '\\"',
            '\\': '\\\\'
        };
        return function (d) {
            switch (typeof d) {
                case 'undefined':
                    return 'undefined';
                case 'number':
                    return isFinite(d) ? String(d)  : 'null';
                case 'string':
                    return a(d);
                case 'boolean':
                    return String(d);
                default:
                    if (d === s) return 'null';
                    if (d instanceof Array) {
                        var f = [
                                '['
                            ],
                            n = d.length,
                            l,
                            e,
                            m;
                        for (e = 0; e < n; e++) switch (m = d[e], typeof m) {
                            case 'undefined':
                            case 'function':
                            case 'unknown':
                                break;
                            default:
                                l && f.push(','),
                                    f.push(mt.m.stringify(m)),
                                    l = 1
                        }
                        f.push(']');
                        return f.join('')
                    }
                    if (d instanceof Date) return '"' + d.getFullYear() + '-' + b(d.getMonth() + 1) + '-' + b(d.getDate()) + 'T' + b(d.getHours()) + ':' + b(d.getMinutes()) + ':' + b(d.getSeconds()) + '"';
                    l = [
                        '{'
                    ];
                    e = mt.m.stringify;
                    for (n in d) if (Object.prototype.hasOwnProperty.call(d, n)) switch (m =
                        d[n], typeof m) {
                        case 'undefined':
                        case 'unknown':
                        case 'function':
                            break;
                        default:
                            f && l.push(','),
                                f = 1,
                                l.push(e(n) + ':' + e(m))
                    }
                    l.push('}');
                    return l.join('')
            }
        }
    }();
    mt.lang = {
    };
    mt.lang.d = function (a, b) {
        return '[object ' + b + ']' === {
            }.toString.call(a)
    };
    mt.lang.ya = function (a) {
        return mt.lang.d(a, 'Number') && isFinite(a)
    };
    mt.lang.Aa = function (a) {
        return mt.lang.d(a, 'String')
    };
    mt.localStorage = {
    };
    mt.localStorage.s = function () {
        if (!mt.localStorage.f) try {
            mt.localStorage.f = document.createElement('input'),
                mt.localStorage.f.type = 'hidden',
                mt.localStorage.f.style.display = 'none',
                mt.localStorage.f.addBehavior('#default#userData'),
                document.getElementsByTagName('head') [0].appendChild(mt.localStorage.f)
        } catch (a) {
            return t
        }
        return p
    };
    mt.localStorage.set = function (a, b, f) {
        var d = new Date;
        d.setTime(d.getTime() + f || 31536000000);
        try {
            window.localStorage ? (b = d.getTime() + '|' + b, window.localStorage.setItem(a, b))  : mt.localStorage.s() && (mt.localStorage.f.expires = d.toUTCString(), mt.localStorage.f.load(document.location.hostname), mt.localStorage.f.setAttribute(a, b), mt.localStorage.f.save(document.location.hostname))
        } catch (g) {
        }
    };
    mt.localStorage.get = function (a) {
        if (window.localStorage) {
            if (a = window.localStorage.getItem(a)) {
                var b = a.indexOf('|'),
                    f = a.substring(0, b) - 0;
                if (f && f > (new Date).getTime()) return a.substring(b + 1)
            }
        } else if (mt.localStorage.s()) try {
            return mt.localStorage.f.load(document.location.hostname),
                mt.localStorage.f.getAttribute(a)
        } catch (d) {
        }
        return s
    };
    mt.localStorage.remove = function (a) {
        if (window.localStorage) window.localStorage.removeItem(a);
        else if (mt.localStorage.s()) try {
            mt.localStorage.f.load(document.location.hostname),
                mt.localStorage.f.removeAttribute(a),
                mt.localStorage.f.save(document.location.hostname)
        } catch (b) {
        }
    };
    mt.sessionStorage = {
    };
    mt.sessionStorage.set = function (a, b) {
        if (window.sessionStorage) try {
            window.sessionStorage.setItem(a, b)
        } catch (f) {
        }
    };
    mt.sessionStorage.get = function (a) {
        return window.sessionStorage ? window.sessionStorage.getItem(a)  : s
    };
    mt.sessionStorage.remove = function (a) {
        window.sessionStorage && window.sessionStorage.removeItem(a)
    };
    mt.G = {
    };
    mt.G.log = function (a, b) {
        var f = new Image,
            d = 'mini_tangram_log_' + Math.floor(2147483648 * Math.random()).toString(36);
        window[d] = f;
        f.onload = f.onerror = f.onabort = function () {
            f.onload = f.onerror = f.onabort = s;
            f = window[d] = s;
            b && b(a)
        };
        f.src = a
    };
    mt.H = {
    };
    mt.H.ba = function () {
        var a = '';
        if (navigator.plugins && navigator.mimeTypes.length) {
            var b = navigator.plugins['Shockwave Flash'];
            b && b.description && (a = b.description.replace(/^.*\s+(\S+)\s+\S+$/, '$1'))
        } else if (window.ActiveXObject) try {
            if (b = new ActiveXObject('ShockwaveFlash.ShockwaveFlash')) (a = b.GetVariable('$version')) && (a = a.replace(/^.*\s+(\d+),(\d+).*$/, '$1.$2'))
        } catch (f) {
        }
        return a
    };
    mt.H.ta = function (a, b, f, d, g) {
        return '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="' + a + '" width="' + f + '" height="' + d + '"><param name="movie" value="' + b + '" /><param name="flashvars" value="' + (g || '') + '" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="' + a + '" width="' + f + '" height="' + d + '" src="' + b + '" flashvars="' + (g || '') + '" allowscriptaccess="always" /></object>'
    };
    mt.url = {
    };
    mt.url.k = function (a, b) {
        var f = a.match(RegExp('(^|&|\\?|#)(' + b + ')=([^&#]*)(&|$|#)', ''));
        return f ? f[3] : s
    };
    mt.url.va = function (a) {
        return (a = a.match(/^(https?:)\/\//)) ? a[1] : s
    };
    mt.url.Z = function (a) {
        return (a = a.match(/^(https?:\/\/)?([^\/\?#]*)/)) ? a[2].replace(/.*@/, '')  : s
    };
    mt.url.K = function (a) {
        return (a = mt.url.Z(a)) ? a.replace(/:\d+$/, '')  : a
    };
    mt.url.ua = function (a) {
        return (a = a.match(/^(https?:\/\/)?[^\/]*(.*)/)) ? a[2].replace(/[\?#].*/, '').replace(/^$/, '/')  : s
    };
})

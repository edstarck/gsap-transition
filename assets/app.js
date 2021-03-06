!(function (t) {
  var e = {};
  function r(n) {
    if (e[n]) return e[n].exports;
    var i = (e[n] = { i: n, l: !1, exports: {} });
    return t[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
  }
  (r.m = t),
    (r.c = e),
    (r.d = function (t, e, n) {
      r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (r.r = function (t) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 });
    }),
    (r.t = function (t, e) {
      if ((1 & e && (t = r(t)), 8 & e)) return t;
      if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: t }),
        2 & e && 'string' != typeof t)
      )
        for (var i in t)
          r.d(
            n,
            i,
            function (e) {
              return t[e];
            }.bind(null, i)
          );
      return n;
    }),
    (r.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return r.d(e, 'a', e), e;
    }),
    (r.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (r.p = ''),
    r((r.s = 1));
})([
  function (t, e, r) {
    t.exports = (function () {
      function t(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n);
        }
      }
      function e(e, r, n) {
        return r && t(e.prototype, r), n && t(e, n), e;
      }
      function r() {
        return (r =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = arguments[e];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
            }
            return t;
          }).apply(this, arguments);
      }
      function n(t, e) {
        (t.prototype = Object.create(e.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = e);
      }
      function i(t) {
        return (i = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function o(t, e) {
        return (o =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function s(t, e, r) {
        return (s = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })()
          ? Reflect.construct
          : function (t, e, r) {
              var n = [null];
              n.push.apply(n, e);
              var i = new (Function.bind.apply(t, n))();
              return r && o(i, r.prototype), i;
            }).apply(null, arguments);
      }
      function a(t) {
        var e = 'function' == typeof Map ? new Map() : void 0;
        return (a = function (t) {
          if (
            null === t ||
            -1 === Function.toString.call(t).indexOf('[native code]')
          )
            return t;
          if ('function' != typeof t)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          if (void 0 !== e) {
            if (e.has(t)) return e.get(t);
            e.set(t, r);
          }
          function r() {
            return s(t, arguments, i(this).constructor);
          }
          return (
            (r.prototype = Object.create(t.prototype, {
              constructor: {
                value: r,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
            o(r, t)
          );
        })(t);
      }
      function u(t, e) {
        try {
          var r = t();
        } catch (t) {
          return e(t);
        }
        return r && r.then ? r.then(void 0, e) : r;
      }
      'undefined' != typeof Symbol &&
        (Symbol.iterator || (Symbol.iterator = Symbol('Symbol.iterator'))),
        'undefined' != typeof Symbol &&
          (Symbol.asyncIterator ||
            (Symbol.asyncIterator = Symbol('Symbol.asyncIterator')));
      var h,
        c = '2.9.7',
        f = function () {};
      !(function (t) {
        (t[(t.off = 0)] = 'off'),
          (t[(t.error = 1)] = 'error'),
          (t[(t.warning = 2)] = 'warning'),
          (t[(t.info = 3)] = 'info'),
          (t[(t.debug = 4)] = 'debug');
      })(h || (h = {}));
      var l = h.off,
        p = (function () {
          function t(t) {
            this.t = t;
          }
          (t.getLevel = function () {
            return l;
          }),
            (t.setLevel = function (t) {
              return (l = h[t]);
            });
          var e = t.prototype;
          return (
            (e.error = function () {
              for (
                var t = arguments.length, e = new Array(t), r = 0;
                r < t;
                r++
              )
                e[r] = arguments[r];
              this.i(console.error, h.error, e);
            }),
            (e.warn = function () {
              for (
                var t = arguments.length, e = new Array(t), r = 0;
                r < t;
                r++
              )
                e[r] = arguments[r];
              this.i(console.warn, h.warning, e);
            }),
            (e.info = function () {
              for (
                var t = arguments.length, e = new Array(t), r = 0;
                r < t;
                r++
              )
                e[r] = arguments[r];
              this.i(console.info, h.info, e);
            }),
            (e.debug = function () {
              for (
                var t = arguments.length, e = new Array(t), r = 0;
                r < t;
                r++
              )
                e[r] = arguments[r];
              this.i(console.log, h.debug, e);
            }),
            (e.i = function (e, r, n) {
              r <= t.getLevel() &&
                e.apply(console, ['[' + this.t + '] '].concat(n));
            }),
            t
          );
        })(),
        d = S,
        m = x,
        g = b,
        _ = T,
        v = A,
        y = '/',
        w = new RegExp(
          [
            '(\\\\.)',
            '(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?',
          ].join('|'),
          'g'
        );
      function b(t, e) {
        for (
          var r,
            n = [],
            i = 0,
            o = 0,
            s = '',
            a = (e && e.delimiter) || y,
            u = (e && e.whitelist) || void 0,
            h = !1;
          null !== (r = w.exec(t));

        ) {
          var c = r[0],
            f = r[1],
            l = r.index;
          if (((s += t.slice(o, l)), (o = l + c.length), f))
            (s += f[1]), (h = !0);
          else {
            var p = '',
              d = r[2],
              m = r[3],
              g = r[4],
              _ = r[5];
            if (!h && s.length) {
              var v = s.length - 1,
                b = s[v];
              (!u || u.indexOf(b) > -1) && ((p = b), (s = s.slice(0, v)));
            }
            s && (n.push(s), (s = ''), (h = !1));
            var x = m || g,
              T = p || a;
            n.push({
              name: d || i++,
              prefix: p,
              delimiter: T,
              optional: '?' === _ || '*' === _,
              repeat: '+' === _ || '*' === _,
              pattern: x ? k(x) : '[^' + P(T === a ? T : T + a) + ']+?',
            });
          }
        }
        return (s || o < t.length) && n.push(s + t.substr(o)), n;
      }
      function x(t, e) {
        return function (r, n) {
          var i = t.exec(r);
          if (!i) return !1;
          for (
            var o = i[0],
              s = i.index,
              a = {},
              u = (n && n.decode) || decodeURIComponent,
              h = 1;
            h < i.length;
            h++
          )
            if (void 0 !== i[h]) {
              var c = e[h - 1];
              a[c.name] = c.repeat
                ? i[h].split(c.delimiter).map(function (t) {
                    return u(t, c);
                  })
                : u(i[h], c);
            }
          return { path: o, index: s, params: a };
        };
      }
      function T(t, e) {
        for (var r = new Array(t.length), n = 0; n < t.length; n++)
          'object' == typeof t[n] &&
            (r[n] = new RegExp('^(?:' + t[n].pattern + ')$', O(e)));
        return function (e, n) {
          for (
            var i = '',
              o = (n && n.encode) || encodeURIComponent,
              s = !n || !1 !== n.validate,
              a = 0;
            a < t.length;
            a++
          ) {
            var u = t[a];
            if ('string' != typeof u) {
              var h,
                c = e ? e[u.name] : void 0;
              if (Array.isArray(c)) {
                if (!u.repeat)
                  throw new TypeError(
                    'Expected "' + u.name + '" to not repeat, but got array'
                  );
                if (0 === c.length) {
                  if (u.optional) continue;
                  throw new TypeError(
                    'Expected "' + u.name + '" to not be empty'
                  );
                }
                for (var f = 0; f < c.length; f++) {
                  if (((h = o(c[f], u)), s && !r[a].test(h)))
                    throw new TypeError(
                      'Expected all "' +
                        u.name +
                        '" to match "' +
                        u.pattern +
                        '"'
                    );
                  i += (0 === f ? u.prefix : u.delimiter) + h;
                }
              } else if (
                'string' != typeof c &&
                'number' != typeof c &&
                'boolean' != typeof c
              ) {
                if (!u.optional)
                  throw new TypeError(
                    'Expected "' +
                      u.name +
                      '" to be ' +
                      (u.repeat ? 'an array' : 'a string')
                  );
              } else {
                if (((h = o(String(c), u)), s && !r[a].test(h)))
                  throw new TypeError(
                    'Expected "' +
                      u.name +
                      '" to match "' +
                      u.pattern +
                      '", but got "' +
                      h +
                      '"'
                  );
                i += u.prefix + h;
              }
            } else i += u;
          }
          return i;
        };
      }
      function P(t) {
        return t.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
      }
      function k(t) {
        return t.replace(/([=!:$/()])/g, '\\$1');
      }
      function O(t) {
        return t && t.sensitive ? '' : 'i';
      }
      function A(t, e, r) {
        for (
          var n = (r = r || {}).strict,
            i = !1 !== r.start,
            o = !1 !== r.end,
            s = r.delimiter || y,
            a = []
              .concat(r.endsWith || [])
              .map(P)
              .concat('$')
              .join('|'),
            u = i ? '^' : '',
            h = 0;
          h < t.length;
          h++
        ) {
          var c = t[h];
          if ('string' == typeof c) u += P(c);
          else {
            var f = c.repeat
              ? '(?:' +
                c.pattern +
                ')(?:' +
                P(c.delimiter) +
                '(?:' +
                c.pattern +
                '))*'
              : c.pattern;
            e && e.push(c),
              (u += c.optional
                ? c.prefix
                  ? '(?:' + P(c.prefix) + '(' + f + '))?'
                  : '(' + f + ')?'
                : P(c.prefix) + '(' + f + ')');
          }
        }
        if (o)
          n || (u += '(?:' + P(s) + ')?'),
            (u += '$' === a ? '$' : '(?=' + a + ')');
        else {
          var l = t[t.length - 1],
            p = 'string' == typeof l ? l[l.length - 1] === s : void 0 === l;
          n || (u += '(?:' + P(s) + '(?=' + a + '))?'),
            p || (u += '(?=' + P(s) + '|' + a + ')');
        }
        return new RegExp(u, O(r));
      }
      function S(t, e, r) {
        return t instanceof RegExp
          ? (function (t, e) {
              if (!e) return t;
              var r = t.source.match(/\((?!\?)/g);
              if (r)
                for (var n = 0; n < r.length; n++)
                  e.push({
                    name: n,
                    prefix: null,
                    delimiter: null,
                    optional: !1,
                    repeat: !1,
                    pattern: null,
                  });
              return t;
            })(t, e)
          : Array.isArray(t)
          ? (function (t, e, r) {
              for (var n = [], i = 0; i < t.length; i++)
                n.push(S(t[i], e, r).source);
              return new RegExp('(?:' + n.join('|') + ')', O(r));
            })(t, e, r)
          : (function (t, e, r) {
              return A(b(t, r), e, r);
            })(t, e, r);
      }
      (d.match = function (t, e) {
        var r = [];
        return x(S(t, r, e), r);
      }),
        (d.regexpToFunction = m),
        (d.parse = g),
        (d.compile = function (t, e) {
          return T(b(t, e), e);
        }),
        (d.tokensToFunction = _),
        (d.tokensToRegExp = v);
      var E = {
          container: 'container',
          history: 'history',
          namespace: 'namespace',
          prefix: 'data-barba',
          prevent: 'prevent',
          wrapper: 'wrapper',
        },
        M = new ((function () {
          function t() {
            (this.o = E), (this.u = new DOMParser());
          }
          var e = t.prototype;
          return (
            (e.toString = function (t) {
              return t.outerHTML;
            }),
            (e.toDocument = function (t) {
              return this.u.parseFromString(t, 'text/html');
            }),
            (e.toElement = function (t) {
              var e = document.createElement('div');
              return (e.innerHTML = t), e;
            }),
            (e.getHtml = function (t) {
              return (
                void 0 === t && (t = document), this.toString(t.documentElement)
              );
            }),
            (e.getWrapper = function (t) {
              return (
                void 0 === t && (t = document),
                t.querySelector(
                  '[' + this.o.prefix + '="' + this.o.wrapper + '"]'
                )
              );
            }),
            (e.getContainer = function (t) {
              return (
                void 0 === t && (t = document),
                t.querySelector(
                  '[' + this.o.prefix + '="' + this.o.container + '"]'
                )
              );
            }),
            (e.removeContainer = function (t) {
              document.body.contains(t) && t.parentNode.removeChild(t);
            }),
            (e.addContainer = function (t, e) {
              var r = this.getContainer();
              r ? this.s(t, r) : e.appendChild(t);
            }),
            (e.getNamespace = function (t) {
              void 0 === t && (t = document);
              var e = t.querySelector(
                '[' + this.o.prefix + '-' + this.o.namespace + ']'
              );
              return e
                ? e.getAttribute(this.o.prefix + '-' + this.o.namespace)
                : null;
            }),
            (e.getHref = function (t) {
              if (t.tagName && 'a' === t.tagName.toLowerCase()) {
                if ('string' == typeof t.href) return t.href;
                var e = t.getAttribute('href') || t.getAttribute('xlink:href');
                if (e) return this.resolveUrl(e.baseVal || e);
              }
              return null;
            }),
            (e.resolveUrl = function () {
              for (
                var t = arguments.length, e = new Array(t), r = 0;
                r < t;
                r++
              )
                e[r] = arguments[r];
              var n = e.length;
              if (0 === n)
                throw new Error(
                  'resolveUrl requires at least one argument; got none.'
                );
              var i = document.createElement('base');
              if (((i.href = arguments[0]), 1 === n)) return i.href;
              var o = document.getElementsByTagName('head')[0];
              o.insertBefore(i, o.firstChild);
              for (var s, a = document.createElement('a'), u = 1; u < n; u++)
                (a.href = arguments[u]), (i.href = s = a.href);
              return o.removeChild(i), s;
            }),
            (e.s = function (t, e) {
              e.parentNode.insertBefore(t, e.nextSibling);
            }),
            t
          );
        })())(),
        C = new ((function () {
          function t() {
            (this.h = []), (this.v = -1);
          }
          var n = t.prototype;
          return (
            (n.init = function (t, e) {
              this.l = 'barba';
              var r = {
                ns: e,
                scroll: { x: window.scrollX, y: window.scrollY },
                url: t,
              };
              this.h.push(r), (this.v = 0);
              var n = { from: this.l, index: 0, states: [].concat(this.h) };
              window.history && window.history.replaceState(n, '', t);
            }),
            (n.change = function (t, e, r) {
              if (r && r.state) {
                var n = r.state,
                  i = n.index;
                (e = this.m(this.v - i)), this.replace(n.states), (this.v = i);
              } else this.add(t, e);
              return e;
            }),
            (n.add = function (t, e) {
              var r = this.size,
                n = this.p(e),
                i = {
                  ns: 'tmp',
                  scroll: { x: window.scrollX, y: window.scrollY },
                  url: t,
                };
              this.h.push(i), (this.v = r);
              var o = { from: this.l, index: r, states: [].concat(this.h) };
              switch (n) {
                case 'push':
                  window.history && window.history.pushState(o, '', t);
                  break;
                case 'replace':
                  window.history && window.history.replaceState(o, '', t);
              }
            }),
            (n.update = function (t, e) {
              var n = e || this.v,
                i = r({}, this.get(n), {}, t);
              this.set(n, i);
            }),
            (n.remove = function (t) {
              t ? this.h.splice(t, 1) : this.h.pop(), this.v--;
            }),
            (n.clear = function () {
              (this.h = []), (this.v = -1);
            }),
            (n.replace = function (t) {
              this.h = t;
            }),
            (n.get = function (t) {
              return this.h[t];
            }),
            (n.set = function (t, e) {
              return (this.h[t] = e);
            }),
            (n.p = function (t) {
              var e = 'push',
                r = t,
                n = E.prefix + '-' + E.history;
              return (
                r.hasAttribute && r.hasAttribute(n) && (e = r.getAttribute(n)),
                e
              );
            }),
            (n.m = function (t) {
              return Math.abs(t) > 1
                ? t > 0
                  ? 'forward'
                  : 'back'
                : 0 === t
                ? 'popstate'
                : t > 0
                ? 'back'
                : 'forward';
            }),
            e(t, [
              {
                key: 'current',
                get: function () {
                  return this.h[this.v];
                },
              },
              {
                key: 'state',
                get: function () {
                  return this.h[this.h.length - 1];
                },
              },
              {
                key: 'previous',
                get: function () {
                  return this.v < 1 ? null : this.h[this.v - 1];
                },
              },
              {
                key: 'size',
                get: function () {
                  return this.h.length;
                },
              },
            ]),
            t
          );
        })())(),
        R = function (t, e) {
          try {
            var r = (function () {
              if (!e.next.html)
                return Promise.resolve(t).then(function (t) {
                  var r = e.next;
                  if (t) {
                    var n = M.toElement(t);
                    (r.namespace = M.getNamespace(n)),
                      (r.container = M.getContainer(n)),
                      (r.html = t),
                      C.update({ ns: r.namespace });
                    var i = M.toDocument(t);
                    document.title = i.title;
                  }
                });
            })();
            return Promise.resolve(
              r && r.then ? r.then(function () {}) : void 0
            );
          } catch (t) {
            return Promise.reject(t);
          }
        },
        D = d,
        L = {
          __proto__: null,
          update: R,
          nextTick: function () {
            return new Promise(function (t) {
              window.requestAnimationFrame(t);
            });
          },
          pathToRegexp: D,
        },
        j = function () {
          return window.location.origin;
        },
        q = function (t) {
          return void 0 === t && (t = window.location.href), F(t).port;
        },
        F = function (t) {
          var e,
            r = t.match(/:\d+/);
          if (null === r)
            /^http/.test(t) && (e = 80), /^https/.test(t) && (e = 443);
          else {
            var n = r[0].substring(1);
            e = parseInt(n, 10);
          }
          var i,
            o = t.replace(j(), ''),
            s = {},
            a = o.indexOf('#');
          a >= 0 && ((i = o.slice(a + 1)), (o = o.slice(0, a)));
          var u = o.indexOf('?');
          return (
            u >= 0 && ((s = z(o.slice(u + 1))), (o = o.slice(0, u))),
            { hash: i, path: o, port: e, query: s }
          );
        },
        z = function (t) {
          return t.split('&').reduce(function (t, e) {
            var r = e.split('=');
            return (t[r[0]] = r[1]), t;
          }, {});
        },
        B = function (t) {
          return (
            void 0 === t && (t = window.location.href),
            t.replace(/(\/#.*|\/|#.*)$/, '')
          );
        },
        I = {
          __proto__: null,
          getHref: function () {
            return window.location.href;
          },
          getOrigin: j,
          getPort: q,
          getPath: function (t) {
            return void 0 === t && (t = window.location.href), F(t).path;
          },
          parse: F,
          parseQuery: z,
          clean: B,
        };
      function N(t, e, r) {
        return (
          void 0 === e && (e = 2e3),
          new Promise(function (n, i) {
            var o = new XMLHttpRequest();
            (o.onreadystatechange = function () {
              if (o.readyState === XMLHttpRequest.DONE)
                if (200 === o.status) n(o.responseText);
                else if (o.status) {
                  var e = { status: o.status, statusText: o.statusText };
                  r(t, e), i(e);
                }
            }),
              (o.ontimeout = function () {
                var n = new Error('Timeout error [' + e + ']');
                r(t, n), i(n);
              }),
              (o.onerror = function () {
                var e = new Error('Fetch error');
                r(t, e), i(e);
              }),
              o.open('GET', t),
              (o.timeout = e),
              o.setRequestHeader(
                'Accept',
                'text/html,application/xhtml+xml,application/xml'
              ),
              o.setRequestHeader('x-barba', 'yes'),
              o.send();
          })
        );
      }
      var U = function (t) {
        return (
          !!t &&
          ('object' == typeof t || 'function' == typeof t) &&
          'function' == typeof t.then
        );
      };
      function H(t, e) {
        return (
          void 0 === e && (e = {}),
          function () {
            for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++)
              n[i] = arguments[i];
            var o = !1;
            return new Promise(function (r, i) {
              e.async = function () {
                return (
                  (o = !0),
                  function (t, e) {
                    t ? i(t) : r(e);
                  }
                );
              };
              var s = t.apply(e, n);
              o || (U(s) ? s.then(r, i) : r(s));
            });
          }
        );
      }
      var Y = new ((function (t) {
          function e() {
            var e;
            return (
              ((e = t.call(this) || this).logger = new p('@barba/core')),
              (e.all = [
                'ready',
                'page',
                'reset',
                'currentAdded',
                'currentRemoved',
                'nextAdded',
                'nextRemoved',
                'beforeOnce',
                'once',
                'afterOnce',
                'before',
                'beforeLeave',
                'leave',
                'afterLeave',
                'beforeEnter',
                'enter',
                'afterEnter',
                'after',
              ]),
              (e.registered = new Map()),
              e.init(),
              e
            );
          }
          n(e, t);
          var r = e.prototype;
          return (
            (r.init = function () {
              var t = this;
              this.registered.clear(),
                this.all.forEach(function (e) {
                  t[e] ||
                    (t[e] = function (r, n) {
                      t.registered.has(e) || t.registered.set(e, new Set()),
                        t.registered.get(e).add({ ctx: n || {}, fn: r });
                    });
                });
            }),
            (r.do = function (t) {
              for (
                var e = this,
                  r = arguments.length,
                  n = new Array(r > 1 ? r - 1 : 0),
                  i = 1;
                i < r;
                i++
              )
                n[i - 1] = arguments[i];
              if (this.registered.has(t)) {
                var o = Promise.resolve();
                return (
                  this.registered.get(t).forEach(function (t) {
                    o = o.then(function () {
                      return H(t.fn, t.ctx).apply(void 0, n);
                    });
                  }),
                  o.catch(function (r) {
                    e.logger.debug('Hook error [' + t + ']'), e.logger.error(r);
                  })
                );
              }
              return Promise.resolve();
            }),
            (r.clear = function () {
              var t = this;
              this.all.forEach(function (e) {
                delete t[e];
              }),
                this.init();
            }),
            (r.help = function () {
              this.logger.info('Available hooks: ' + this.all.join(','));
              var t = [];
              this.registered.forEach(function (e, r) {
                return t.push(r);
              }),
                this.logger.info('Registered hooks: ' + t.join(','));
            }),
            e
          );
        })(f))(),
        X = (function () {
          function t(t) {
            if (((this.P = []), 'boolean' == typeof t)) this.g = t;
            else {
              var e = Array.isArray(t) ? t : [t];
              this.P = e.map(function (t) {
                return D(t);
              });
            }
          }
          return (
            (t.prototype.checkHref = function (t) {
              if ('boolean' == typeof this.g) return this.g;
              var e = F(t).path;
              return this.P.some(function (t) {
                return null !== t.exec(e);
              });
            }),
            t
          );
        })(),
        V = (function (t) {
          function e(e) {
            var r;
            return ((r = t.call(this, e) || this).k = new Map()), r;
          }
          n(e, t);
          var i = e.prototype;
          return (
            (i.set = function (t, e, r) {
              return (
                this.k.set(t, { action: r, request: e }),
                { action: r, request: e }
              );
            }),
            (i.get = function (t) {
              return this.k.get(t);
            }),
            (i.getRequest = function (t) {
              return this.k.get(t).request;
            }),
            (i.getAction = function (t) {
              return this.k.get(t).action;
            }),
            (i.has = function (t) {
              return !this.checkHref(t) && this.k.has(t);
            }),
            (i.delete = function (t) {
              return this.k.delete(t);
            }),
            (i.update = function (t, e) {
              var n = r({}, this.k.get(t), {}, e);
              return this.k.set(t, n), n;
            }),
            e
          );
        })(X),
        $ = function () {
          return !window.history.pushState;
        },
        W = function (t) {
          return !t.el || !t.href;
        },
        G = function (t) {
          var e = t.event;
          return (
            e.which > 1 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey
          );
        },
        Q = function (t) {
          var e = t.el;
          return e.hasAttribute('target') && '_blank' === e.target;
        },
        K = function (t) {
          var e = t.el;
          return (
            (void 0 !== e.protocol &&
              window.location.protocol !== e.protocol) ||
            (void 0 !== e.hostname && window.location.hostname !== e.hostname)
          );
        },
        Z = function (t) {
          var e = t.el;
          return void 0 !== e.port && q() !== q(e.href);
        },
        J = function (t) {
          var e = t.el;
          return (
            e.getAttribute && 'string' == typeof e.getAttribute('download')
          );
        },
        tt = function (t) {
          return t.el.hasAttribute(E.prefix + '-' + E.prevent);
        },
        et = function (t) {
          return Boolean(
            t.el.closest('[' + E.prefix + '-' + E.prevent + '="all"]')
          );
        },
        rt = function (t) {
          var e = t.href;
          return B(e) === B() && q(e) === q();
        },
        nt = (function (t) {
          function e(e) {
            var r;
            return (
              ((r = t.call(this, e) || this).suite = []),
              (r.tests = new Map()),
              r.init(),
              r
            );
          }
          n(e, t);
          var r = e.prototype;
          return (
            (r.init = function () {
              this.add('pushState', $),
                this.add('exists', W),
                this.add('newTab', G),
                this.add('blank', Q),
                this.add('corsDomain', K),
                this.add('corsPort', Z),
                this.add('download', J),
                this.add('preventSelf', tt),
                this.add('preventAll', et),
                this.add('sameUrl', rt, !1);
            }),
            (r.add = function (t, e, r) {
              void 0 === r && (r = !0),
                this.tests.set(t, e),
                r && this.suite.push(t);
            }),
            (r.run = function (t, e, r, n) {
              return this.tests.get(t)({ el: e, event: r, href: n });
            }),
            (r.checkLink = function (t, e, r) {
              var n = this;
              return this.suite.some(function (i) {
                return n.run(i, t, e, r);
              });
            }),
            e
          );
        })(X),
        it = (function (t) {
          function e(r, n) {
            var i;
            void 0 === n && (n = 'Barba error');
            for (
              var o = arguments.length, s = new Array(o > 2 ? o - 2 : 0), a = 2;
              a < o;
              a++
            )
              s[a - 2] = arguments[a];
            return (
              ((i = t.call.apply(t, [this].concat(s)) || this).error = r),
              (i.label = n),
              Error.captureStackTrace &&
                Error.captureStackTrace(
                  (function (t) {
                    if (void 0 === t)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return t;
                  })(i),
                  e
                ),
              (i.name = 'BarbaError'),
              i
            );
          }
          return n(e, t), e;
        })(a(Error)),
        ot = (function () {
          function t(t) {
            void 0 === t && (t = []),
              (this.logger = new p('@barba/core')),
              (this.all = []),
              (this.page = []),
              (this.once = []),
              (this.A = [
                { name: 'namespace', type: 'strings' },
                { name: 'custom', type: 'function' },
              ]),
              t && (this.all = this.all.concat(t)),
              this.update();
          }
          var e = t.prototype;
          return (
            (e.add = function (t, e) {
              switch (t) {
                case 'rule':
                  this.A.splice(e.position || 0, 0, e.value);
                  break;
                case 'transition':
                default:
                  this.all.push(e);
              }
              this.update();
            }),
            (e.resolve = function (t, e) {
              var r = this;
              void 0 === e && (e = {});
              var n = e.once ? this.once : this.page;
              n = n.filter(
                e.self
                  ? function (t) {
                      return t.name && 'self' === t.name;
                    }
                  : function (t) {
                      return !t.name || 'self' !== t.name;
                    }
              );
              var i = new Map(),
                o = n.find(function (n) {
                  var o = !0,
                    s = {};
                  return (
                    !(!e.self || 'self' !== n.name) ||
                    (r.A.reverse().forEach(function (e) {
                      o &&
                        ((o = r.R(n, e, t, s)),
                        n.from &&
                          n.to &&
                          (o =
                            r.R(n, e, t, s, 'from') && r.R(n, e, t, s, 'to')),
                        n.from && !n.to && (o = r.R(n, e, t, s, 'from')),
                        !n.from && n.to && (o = r.R(n, e, t, s, 'to')));
                    }),
                    i.set(n, s),
                    o)
                  );
                }),
                s = i.get(o),
                a = [];
              if (
                (a.push(e.once ? 'once' : 'page'), e.self && a.push('self'), s)
              ) {
                var u,
                  h = [o];
                Object.keys(s).length > 0 && h.push(s),
                  (u = this.logger).info.apply(
                    u,
                    ['Transition found [' + a.join(',') + ']'].concat(h)
                  );
              } else
                this.logger.info('No transition found [' + a.join(',') + ']');
              return o;
            }),
            (e.update = function () {
              var t = this;
              (this.all = this.all
                .map(function (e) {
                  return t.T(e);
                })
                .sort(function (t, e) {
                  return t.priority - e.priority;
                })
                .reverse()
                .map(function (t) {
                  return delete t.priority, t;
                })),
                (this.page = this.all.filter(function (t) {
                  return void 0 !== t.leave || void 0 !== t.enter;
                })),
                (this.once = this.all.filter(function (t) {
                  return void 0 !== t.once;
                }));
            }),
            (e.R = function (t, e, r, n, i) {
              var o = !0,
                s = !1,
                a = t,
                u = e.name,
                h = u,
                c = u,
                f = u,
                l = i ? a[i] : a,
                p = 'to' === i ? r.next : r.current;
              if (i ? l && l[u] : l[u]) {
                switch (e.type) {
                  case 'strings':
                  default:
                    var d = Array.isArray(l[h]) ? l[h] : [l[h]];
                    p[h] && -1 !== d.indexOf(p[h]) && (s = !0),
                      -1 === d.indexOf(p[h]) && (o = !1);
                    break;
                  case 'object':
                    var m = Array.isArray(l[c]) ? l[c] : [l[c]];
                    p[c]
                      ? (p[c].name && -1 !== m.indexOf(p[c].name) && (s = !0),
                        -1 === m.indexOf(p[c].name) && (o = !1))
                      : (o = !1);
                    break;
                  case 'function':
                    l[f](r) ? (s = !0) : (o = !1);
                }
                s &&
                  (i
                    ? ((n[i] = n[i] || {}), (n[i][u] = a[i][u]))
                    : (n[u] = a[u]));
              }
              return o;
            }),
            (e.O = function (t, e, r) {
              var n = 0;
              return (
                (t[e] || (t.from && t.from[e]) || (t.to && t.to[e])) &&
                  ((n += Math.pow(10, r)),
                  t.from && t.from[e] && (n += 1),
                  t.to && t.to[e] && (n += 2)),
                n
              );
            }),
            (e.T = function (t) {
              var e = this;
              t.priority = 0;
              var r = 0;
              return (
                this.A.forEach(function (n, i) {
                  r += e.O(t, n.name, i + 1);
                }),
                (t.priority = r),
                t
              );
            }),
            t
          );
        })(),
        st = (function () {
          function t(t) {
            void 0 === t && (t = []),
              (this.logger = new p('@barba/core')),
              (this.S = !1),
              (this.store = new ot(t));
          }
          var r = t.prototype;
          return (
            (r.get = function (t, e) {
              return this.store.resolve(t, e);
            }),
            (r.doOnce = function (t) {
              var e = t.data,
                r = t.transition;
              try {
                var n = function () {
                    i.S = !1;
                  },
                  i = this,
                  o = r || {};
                i.S = !0;
                var s = u(
                  function () {
                    return Promise.resolve(i.j('beforeOnce', e, o)).then(
                      function () {
                        return Promise.resolve(i.once(e, o)).then(function () {
                          return Promise.resolve(
                            i.j('afterOnce', e, o)
                          ).then(function () {});
                        });
                      }
                    );
                  },
                  function (t) {
                    (i.S = !1),
                      i.logger.debug('Transition error [before/after/once]'),
                      i.logger.error(t);
                  }
                );
                return Promise.resolve(s && s.then ? s.then(n) : n());
              } catch (t) {
                return Promise.reject(t);
              }
            }),
            (r.doPage = function (t) {
              var e = t.data,
                r = t.transition,
                n = t.page,
                i = t.wrapper;
              try {
                var o = function (t) {
                    if (s) return t;
                    a.S = !1;
                  },
                  s = !1,
                  a = this,
                  h = r || {},
                  c = !0 === h.sync || !1;
                a.S = !0;
                var f = u(
                  function () {
                    function t() {
                      return Promise.resolve(a.j('before', e, h)).then(
                        function () {
                          var t = !1;
                          function r(r) {
                            return t
                              ? r
                              : Promise.resolve(a.remove(e)).then(function () {
                                  return Promise.resolve(
                                    a.j('after', e, h)
                                  ).then(function () {});
                                });
                          }
                          var o = (function () {
                            if (c)
                              return u(
                                function () {
                                  return Promise.resolve(a.add(e, i)).then(
                                    function () {
                                      return Promise.resolve(
                                        a.j('beforeLeave', e, h)
                                      ).then(function () {
                                        return Promise.resolve(
                                          a.j('beforeEnter', e, h)
                                        ).then(function () {
                                          return Promise.resolve(
                                            Promise.all([
                                              a.leave(e, h),
                                              a.enter(e, h),
                                            ])
                                          ).then(function () {
                                            return Promise.resolve(
                                              a.j('afterLeave', e, h)
                                            ).then(function () {
                                              return Promise.resolve(
                                                a.j('afterEnter', e, h)
                                              ).then(function () {});
                                            });
                                          });
                                        });
                                      });
                                    }
                                  );
                                },
                                function (t) {
                                  if (a.M(t))
                                    throw new it(t, 'Transition error [sync]');
                                }
                              );
                            var r = function (r) {
                                return t
                                  ? r
                                  : u(
                                      function () {
                                        var t = (function () {
                                          if (!1 !== o)
                                            return Promise.resolve(
                                              a.add(e, i)
                                            ).then(function () {
                                              return Promise.resolve(
                                                a.j('beforeEnter', e, h)
                                              ).then(function () {
                                                return Promise.resolve(
                                                  a.enter(e, h, o)
                                                ).then(function () {
                                                  return Promise.resolve(
                                                    a.j('afterEnter', e, h)
                                                  ).then(function () {});
                                                });
                                              });
                                            });
                                        })();
                                        if (t && t.then)
                                          return t.then(function () {});
                                      },
                                      function (t) {
                                        if (a.M(t))
                                          throw new it(
                                            t,
                                            'Transition error [before/after/enter]'
                                          );
                                      }
                                    );
                              },
                              o = !1,
                              s = u(
                                function () {
                                  return Promise.resolve(
                                    a.j('beforeLeave', e, h)
                                  ).then(function () {
                                    return Promise.resolve(
                                      Promise.all([
                                        a.leave(e, h),
                                        R(n, e),
                                      ]).then(function (t) {
                                        return t[0];
                                      })
                                    ).then(function (t) {
                                      return (
                                        (o = t),
                                        Promise.resolve(
                                          a.j('afterLeave', e, h)
                                        ).then(function () {})
                                      );
                                    });
                                  });
                                },
                                function (t) {
                                  if (a.M(t))
                                    throw new it(
                                      t,
                                      'Transition error [before/after/leave]'
                                    );
                                }
                              );
                            return s && s.then ? s.then(r) : r(s);
                          })();
                          return o && o.then ? o.then(r) : r(o);
                        }
                      );
                    }
                    var r = (function () {
                      if (c)
                        return Promise.resolve(R(n, e)).then(function () {});
                    })();
                    return r && r.then ? r.then(t) : t();
                  },
                  function (t) {
                    if (((a.S = !1), t.name && 'BarbaError' === t.name))
                      throw (
                        (a.logger.debug(t.label), a.logger.error(t.error), t)
                      );
                    throw (
                      (a.logger.debug('Transition error [page]'),
                      a.logger.error(t),
                      t)
                    );
                  }
                );
                return Promise.resolve(f && f.then ? f.then(o) : o(f));
              } catch (t) {
                return Promise.reject(t);
              }
            }),
            (r.once = function (t, e) {
              try {
                return Promise.resolve(Y.do('once', t, e)).then(function () {
                  return e.once ? H(e.once, e)(t) : Promise.resolve();
                });
              } catch (t) {
                return Promise.reject(t);
              }
            }),
            (r.leave = function (t, e) {
              try {
                return Promise.resolve(Y.do('leave', t, e)).then(function () {
                  return e.leave ? H(e.leave, e)(t) : Promise.resolve();
                });
              } catch (t) {
                return Promise.reject(t);
              }
            }),
            (r.enter = function (t, e, r) {
              try {
                return Promise.resolve(Y.do('enter', t, e)).then(function () {
                  return e.enter ? H(e.enter, e)(t, r) : Promise.resolve();
                });
              } catch (t) {
                return Promise.reject(t);
              }
            }),
            (r.add = function (t, e) {
              try {
                return (
                  M.addContainer(t.next.container, e),
                  Y.do('nextAdded', t),
                  Promise.resolve()
                );
              } catch (t) {
                return Promise.reject(t);
              }
            }),
            (r.remove = function (t) {
              try {
                return (
                  M.removeContainer(t.current.container),
                  Y.do('currentRemoved', t),
                  Promise.resolve()
                );
              } catch (t) {
                return Promise.reject(t);
              }
            }),
            (r.M = function (t) {
              return t.message
                ? !/Timeout error|Fetch error/.test(t.message)
                : !t.status;
            }),
            (r.j = function (t, e, r) {
              try {
                return Promise.resolve(Y.do(t, e, r)).then(function () {
                  return r[t] ? H(r[t], r)(e) : Promise.resolve();
                });
              } catch (t) {
                return Promise.reject(t);
              }
            }),
            e(t, [
              {
                key: 'isRunning',
                get: function () {
                  return this.S;
                },
                set: function (t) {
                  this.S = t;
                },
              },
              {
                key: 'hasOnce',
                get: function () {
                  return this.store.once.length > 0;
                },
              },
              {
                key: 'hasSelf',
                get: function () {
                  return this.store.all.some(function (t) {
                    return 'self' === t.name;
                  });
                },
              },
              {
                key: 'shouldWait',
                get: function () {
                  return this.store.all.some(function (t) {
                    return (t.to && !t.to.route) || t.sync;
                  });
                },
              },
            ]),
            t
          );
        })(),
        at = (function () {
          function t(t) {
            var e = this;
            (this.names = [
              'beforeLeave',
              'afterLeave',
              'beforeEnter',
              'afterEnter',
            ]),
              (this.byNamespace = new Map()),
              0 !== t.length &&
                (t.forEach(function (t) {
                  e.byNamespace.set(t.namespace, t);
                }),
                this.names.forEach(function (t) {
                  Y[t](e.L(t));
                }));
          }
          return (
            (t.prototype.L = function (t) {
              var e = this;
              return function (r) {
                var n = t.match(/enter/i) ? r.next : r.current,
                  i = e.byNamespace.get(n.namespace);
                return i && i[t] ? H(i[t], i)(r) : Promise.resolve();
              };
            }),
            t
          );
        })();
      Element.prototype.matches ||
        (Element.prototype.matches =
          Element.prototype.msMatchesSelector ||
          Element.prototype.webkitMatchesSelector),
        Element.prototype.closest ||
          (Element.prototype.closest = function (t) {
            var e = this;
            do {
              if (e.matches(t)) return e;
              e = e.parentElement || e.parentNode;
            } while (null !== e && 1 === e.nodeType);
            return null;
          });
      var ut = {
        container: null,
        html: '',
        namespace: '',
        url: { hash: '', href: '', path: '', port: null, query: {} },
      };
      return new ((function () {
        function t() {
          (this.version = c),
            (this.schemaPage = ut),
            (this.Logger = p),
            (this.logger = new p('@barba/core')),
            (this.plugins = []),
            (this.hooks = Y),
            (this.dom = M),
            (this.helpers = L),
            (this.history = C),
            (this.request = N),
            (this.url = I);
        }
        var n = t.prototype;
        return (
          (n.use = function (t, e) {
            var r = this.plugins;
            r.indexOf(t) > -1
              ? this.logger.warn('Plugin [' + t.name + '] already installed.')
              : 'function' == typeof t.install
              ? (t.install(this, e), r.push(t))
              : this.logger.warn(
                  'Plugin [' + t.name + '] has no "install" method.'
                );
          }),
          (n.init = function (t) {
            var e = void 0 === t ? {} : t,
              n = e.transitions,
              i = void 0 === n ? [] : n,
              o = e.views,
              s = void 0 === o ? [] : o,
              a = e.schema,
              u = void 0 === a ? E : a,
              h = e.requestError,
              c = e.timeout,
              f = void 0 === c ? 2e3 : c,
              l = e.cacheIgnore,
              d = void 0 !== l && l,
              m = e.prefetchIgnore,
              g = void 0 !== m && m,
              _ = e.preventRunning,
              v = void 0 !== _ && _,
              y = e.prevent,
              w = void 0 === y ? null : y,
              b = e.debug,
              x = e.logLevel;
            if (
              (p.setLevel(
                !0 === (void 0 !== b && b) ? 'debug' : void 0 === x ? 'off' : x
              ),
              this.logger.info(this.version),
              Object.keys(u).forEach(function (t) {
                E[t] && (E[t] = u[t]);
              }),
              (this.$ = h),
              (this.timeout = f),
              (this.cacheIgnore = d),
              (this.prefetchIgnore = g),
              (this.preventRunning = v),
              (this._ = this.dom.getWrapper()),
              !this._)
            )
              throw new Error('[@barba/core] No Barba wrapper found');
            this._.setAttribute('aria-live', 'polite'), this.q();
            var T = this.data.current;
            if (!T.container)
              throw new Error('[@barba/core] No Barba container found');
            if (
              ((this.cache = new V(d)),
              (this.prevent = new nt(g)),
              (this.transitions = new st(i)),
              (this.views = new at(s)),
              null !== w)
            ) {
              if ('function' != typeof w)
                throw new Error('[@barba/core] Prevent should be a function');
              this.prevent.add('preventCustom', w);
            }
            this.history.init(T.url.href, T.namespace),
              (this.B = this.B.bind(this)),
              (this.U = this.U.bind(this)),
              (this.D = this.D.bind(this)),
              this.F(),
              this.plugins.forEach(function (t) {
                return t.init();
              });
            var P = this.data;
            (P.trigger = 'barba'),
              (P.next = P.current),
              (P.current = r({}, this.schemaPage)),
              this.hooks.do('ready', P),
              this.once(P),
              this.q();
          }),
          (n.destroy = function () {
            this.q(),
              this.H(),
              this.history.clear(),
              this.hooks.clear(),
              (this.plugins = []);
          }),
          (n.force = function (t) {
            window.location.assign(t);
          }),
          (n.go = function (t, e, r) {
            var n;
            if ((void 0 === e && (e = 'barba'), this.transitions.isRunning))
              this.force(t);
            else if (
              !(n =
                'popstate' === e
                  ? this.history.current &&
                    this.url.getPath(this.history.current.url) ===
                      this.url.getPath(t)
                  : this.prevent.run('sameUrl', null, null, t)) ||
              this.transitions.hasSelf
            )
              return (
                (e = this.history.change(t, e, r)),
                r && (r.stopPropagation(), r.preventDefault()),
                this.page(t, e, n)
              );
          }),
          (n.once = function (t) {
            try {
              var e = this;
              return Promise.resolve(e.hooks.do('beforeEnter', t)).then(
                function () {
                  function r() {
                    return Promise.resolve(
                      e.hooks.do('afterEnter', t)
                    ).then(function () {});
                  }
                  var n = (function () {
                    if (e.transitions.hasOnce) {
                      var r = e.transitions.get(t, { once: !0 });
                      return Promise.resolve(
                        e.transitions.doOnce({ transition: r, data: t })
                      ).then(function () {});
                    }
                  })();
                  return n && n.then ? n.then(r) : r();
                }
              );
            } catch (t) {
              return Promise.reject(t);
            }
          }),
          (n.page = function (t, e, n) {
            try {
              var i = function () {
                  var t = o.data;
                  return Promise.resolve(o.hooks.do('page', t)).then(
                    function () {
                      var e = u(
                        function () {
                          var e = o.transitions.get(t, { once: !1, self: n });
                          return Promise.resolve(
                            o.transitions.doPage({
                              data: t,
                              page: s,
                              transition: e,
                              wrapper: o._,
                            })
                          ).then(function () {
                            o.q();
                          });
                        },
                        function () {
                          0 === p.getLevel() && o.force(t.current.url.href);
                        }
                      );
                      if (e && e.then) return e.then(function () {});
                    }
                  );
                },
                o = this;
              (o.data.next.url = r({ href: t }, o.url.parse(t))),
                (o.data.trigger = e);
              var s = o.cache.has(t)
                  ? o.cache.update(t, { action: 'click' }).request
                  : o.cache.set(
                      t,
                      o.request(t, o.timeout, o.onRequestError.bind(o, e)),
                      'click'
                    ).request,
                a = (function () {
                  if (o.transitions.shouldWait)
                    return Promise.resolve(R(s, o.data)).then(function () {});
                })();
              return Promise.resolve(a && a.then ? a.then(i) : i());
            } catch (t) {
              return Promise.reject(t);
            }
          }),
          (n.onRequestError = function (t) {
            this.transitions.isRunning = !1;
            for (
              var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1;
              n < e;
              n++
            )
              r[n - 1] = arguments[n];
            var i = r[0],
              o = r[1],
              s = this.cache.getAction(i);
            return (
              this.cache.delete(i),
              !(
                (this.$ && !1 === this.$(t, s, i, o)) ||
                ('click' === s && this.force(i), 1)
              )
            );
          }),
          (n.prefetch = function (t) {
            var e = this;
            this.cache.has(t) ||
              this.cache.set(
                t,
                this.request(
                  t,
                  this.timeout,
                  this.onRequestError.bind(this, 'barba')
                ).catch(function (t) {
                  e.logger.error(t);
                }),
                'prefetch'
              );
          }),
          (n.F = function () {
            !0 !== this.prefetchIgnore &&
              (document.addEventListener('mouseover', this.B),
              document.addEventListener('touchstart', this.B)),
              document.addEventListener('click', this.U),
              window.addEventListener('popstate', this.D);
          }),
          (n.H = function () {
            !0 !== this.prefetchIgnore &&
              (document.removeEventListener('mouseover', this.B),
              document.removeEventListener('touchstart', this.B)),
              document.removeEventListener('click', this.U),
              window.removeEventListener('popstate', this.D);
          }),
          (n.B = function (t) {
            var e = this,
              r = this.I(t);
            if (r) {
              var n = this.dom.getHref(r);
              this.prevent.checkHref(n) ||
                this.cache.has(n) ||
                this.cache.set(
                  n,
                  this.request(
                    n,
                    this.timeout,
                    this.onRequestError.bind(this, r)
                  ).catch(function (t) {
                    e.logger.error(t);
                  }),
                  'enter'
                );
            }
          }),
          (n.U = function (t) {
            var e = this.I(t);
            if (e)
              return this.transitions.isRunning && this.preventRunning
                ? (t.preventDefault(), void t.stopPropagation())
                : void this.go(this.dom.getHref(e), e, t);
          }),
          (n.D = function (t) {
            this.go(this.url.getHref(), 'popstate', t);
          }),
          (n.I = function (t) {
            for (var e = t.target; e && !this.dom.getHref(e); )
              e = e.parentNode;
            if (e && !this.prevent.checkLink(e, t, this.dom.getHref(e)))
              return e;
          }),
          (n.q = function () {
            var t = this.url.getHref(),
              e = {
                container: this.dom.getContainer(),
                html: this.dom.getHtml(),
                namespace: this.dom.getNamespace(),
                url: r({ href: t }, this.url.parse(t)),
              };
            (this.C = {
              current: e,
              next: r({}, this.schemaPage),
              trigger: void 0,
            }),
              this.hooks.do('reset', this.data);
          }),
          e(t, [
            {
              key: 'data',
              get: function () {
                return this.C;
              },
            },
            {
              key: 'wrapper',
              get: function () {
                return this._;
              },
            },
          ]),
          t
        );
      })())();
    })();
  },
  function (t, e, r) {
    r(3), (t.exports = r(2));
  },
  function (t, e, r) {},
  function (t, e, r) {
    'use strict';
    r.r(e);
    var n = r(0),
      i = r.n(n);
    function o(t, e, r) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = r),
        t
      );
    }
    var s = new (function t() {
      !(function (t, e) {
        if (!(t instanceof e))
          throw new TypeError('Cannot call a class as a function');
      })(this, t),
        o(this, 'namespace', 'home'),
        o(this, 'beforeEnter', function (t) {
          console.log(t, 'on home page');
        });
    })();
    function a(t, e, r) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = r),
        t
      );
    }
    var u = new (function t() {
      !(function (t, e) {
        if (!(t instanceof e))
          throw new TypeError('Cannot call a class as a function');
      })(this, t),
        a(this, 'namespace', 'detail'),
        a(this, 'beforeEnter', function (t) {
          console.log(t, 'on project detail');
        });
    })();
    function h(t) {
      if (void 0 === t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return t;
    }
    function c(t, e) {
      (t.prototype = Object.create(e.prototype)),
        (t.prototype.constructor = t),
        (t.__proto__ = e);
    }
    var f,
      l,
      p,
      d,
      m,
      g,
      _,
      v,
      y,
      w,
      b,
      x,
      T,
      P,
      k,
      O,
      A,
      S,
      E,
      M,
      C,
      R,
      D,
      L,
      j,
      q,
      F,
      z = {
        autoSleep: 120,
        force3D: 'auto',
        nullTargetWarn: 1,
        units: { lineHeight: '' },
      },
      B = { duration: 0.5, overwrite: !1, delay: 0 },
      I = 1e8,
      N = 1e-8,
      U = 2 * Math.PI,
      H = U / 4,
      Y = 0,
      X = Math.sqrt,
      V = Math.cos,
      $ = Math.sin,
      W = function (t) {
        return 'string' == typeof t;
      },
      G = function (t) {
        return 'function' == typeof t;
      },
      Q = function (t) {
        return 'number' == typeof t;
      },
      K = function (t) {
        return void 0 === t;
      },
      Z = function (t) {
        return 'object' == typeof t;
      },
      J = function (t) {
        return !1 !== t;
      },
      tt = function () {
        return 'undefined' != typeof window;
      },
      et = function (t) {
        return G(t) || W(t);
      },
      rt =
        ('function' == typeof ArrayBuffer && ArrayBuffer.isView) ||
        function () {},
      nt = Array.isArray,
      it = /(?:-?\.?\d|\.)+/gi,
      ot = /[-+=.]*\d+[.e\-+]*\d*[e\-\+]*\d*/g,
      st = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
      at = /[-+=.]*\d+(?:\.|e-|e)*\d*/gi,
      ut = /[+-]=-?[\.\d]+/,
      ht = /[#\-+.]*\b[a-z\d-=+%.]+/gi,
      ct = {},
      ft = {},
      lt = function (t) {
        return (ft = zt(t, ct)) && xr;
      },
      pt = function (t, e) {
        return console.warn(
          'Invalid property',
          t,
          'set to',
          e,
          'Missing plugin? gsap.registerPlugin()'
        );
      },
      dt = function (t, e) {
        return !e && console.warn(t);
      },
      mt = function (t, e) {
        return (t && (ct[t] = e) && ft && (ft[t] = e)) || ct;
      },
      gt = function () {
        return 0;
      },
      _t = {},
      vt = [],
      yt = {},
      wt = {},
      bt = {},
      xt = 30,
      Tt = [],
      Pt = '',
      kt = function (t) {
        var e,
          r,
          n = t[0];
        if ((Z(n) || G(n) || (t = [t]), !(e = (n._gsap || {}).harness))) {
          for (r = Tt.length; r-- && !Tt[r].targetTest(n); );
          e = Tt[r];
        }
        for (r = t.length; r--; )
          (t[r] && (t[r]._gsap || (t[r]._gsap = new $e(t[r], e)))) ||
            t.splice(r, 1);
        return t;
      },
      Ot = function (t) {
        return t._gsap || kt(le(t))[0]._gsap;
      },
      At = function (t, e, r) {
        return (r = t[e]) && G(r)
          ? t[e]()
          : (K(r) && t.getAttribute && t.getAttribute(e)) || r;
      },
      St = function (t, e) {
        return (t = t.split(',')).forEach(e) || t;
      },
      Et = function (t) {
        return Math.round(1e5 * t) / 1e5 || 0;
      },
      Mt = function (t, e) {
        for (var r = e.length, n = 0; t.indexOf(e[n]) < 0 && ++n < r; );
        return n < r;
      },
      Ct = function (t, e, r) {
        var n,
          i = Q(t[1]),
          o = (i ? 2 : 1) + (e < 2 ? 0 : 1),
          s = t[o];
        if ((i && (s.duration = t[1]), (s.parent = r), e)) {
          for (n = s; r && !('immediateRender' in n); )
            (n = r.vars.defaults || {}), (r = J(r.vars.inherit) && r.parent);
          (s.immediateRender = J(n.immediateRender)),
            e < 2 ? (s.runBackwards = 1) : (s.startAt = t[o - 1]);
        }
        return s;
      },
      Rt = function () {
        var t,
          e,
          r = vt.length,
          n = vt.slice(0);
        for (yt = {}, vt.length = 0, t = 0; t < r; t++)
          (e = n[t]) &&
            e._lazy &&
            (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
      },
      Dt = function (t, e, r, n) {
        vt.length && Rt(), t.render(e, r, n), vt.length && Rt();
      },
      Lt = function (t) {
        var e = parseFloat(t);
        return (e || 0 === e) && (t + '').match(ht).length < 2
          ? e
          : W(t)
          ? t.trim()
          : t;
      },
      jt = function (t) {
        return t;
      },
      qt = function (t, e) {
        for (var r in e) r in t || (t[r] = e[r]);
        return t;
      },
      Ft = function (t, e) {
        for (var r in e)
          r in t || 'duration' === r || 'ease' === r || (t[r] = e[r]);
      },
      zt = function (t, e) {
        for (var r in e) t[r] = e[r];
        return t;
      },
      Bt = function t(e, r) {
        for (var n in r) e[n] = Z(r[n]) ? t(e[n] || (e[n] = {}), r[n]) : r[n];
        return e;
      },
      It = function (t, e) {
        var r,
          n = {};
        for (r in t) r in e || (n[r] = t[r]);
        return n;
      },
      Nt = function (t) {
        var e = t.parent || f,
          r = t.keyframes ? Ft : qt;
        if (J(t.inherit))
          for (; e; ) r(t, e.vars.defaults), (e = e.parent || e._dp);
        return t;
      },
      Ut = function (t, e, r, n) {
        void 0 === r && (r = '_first'), void 0 === n && (n = '_last');
        var i = e._prev,
          o = e._next;
        i ? (i._next = o) : t[r] === e && (t[r] = o),
          o ? (o._prev = i) : t[n] === e && (t[n] = i),
          (e._next = e._prev = e.parent = null);
      },
      Ht = function (t, e) {
        t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t),
          (t._act = 0);
      },
      Yt = function (t, e) {
        if (t && (!e || e._end > t._dur || e._start < 0))
          for (var r = t; r; ) (r._dirty = 1), (r = r.parent);
        return t;
      },
      Xt = function (t) {
        for (var e = t.parent; e && e.parent; )
          (e._dirty = 1), e.totalDuration(), (e = e.parent);
        return t;
      },
      Vt = function t(e) {
        return !e || (e._ts && t(e.parent));
      },
      $t = function (t) {
        return t._repeat ? Wt(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
      },
      Wt = function (t, e) {
        return (t /= e) && ~~t === t ? ~~t - 1 : ~~t;
      },
      Gt = function (t, e) {
        return (
          (t - e._start) * e._ts +
          (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
        );
      },
      Qt = function (t) {
        return (t._end = Et(
          t._start + (t._tDur / Math.abs(t._ts || t._rts || N) || 0)
        ));
      },
      Kt = function (t, e) {
        var r = t._dp;
        return (
          r &&
            r.smoothChildTiming &&
            t._ts &&
            ((t._start = Et(
              t._dp._time -
                (t._ts > 0
                  ? e / t._ts
                  : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)
            )),
            Qt(t),
            r._dirty || Yt(r, t)),
          t
        );
      },
      Zt = function (t, e) {
        var r;
        if (
          ((e._time || (e._initted && !e._dur)) &&
            ((r = Gt(t.rawTime(), e)),
            (!e._dur || ae(0, e.totalDuration(), r) - e._tTime > N) &&
              e.render(r, !0)),
          Yt(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
        ) {
          if (t._dur < t.duration())
            for (r = t; r._dp; )
              r.rawTime() >= 0 && r.totalTime(r._tTime), (r = r._dp);
          t._zTime = -1e-8;
        }
      },
      Jt = function (t, e, r, n) {
        return (
          e.parent && Ht(e),
          (e._start = Et(r + e._delay)),
          (e._end = Et(
            e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)
          )),
          (function (t, e, r, n, i) {
            void 0 === r && (r = '_first'), void 0 === n && (n = '_last');
            var o,
              s = t[n];
            if (i) for (o = e[i]; s && s[i] > o; ) s = s._prev;
            s
              ? ((e._next = s._next), (s._next = e))
              : ((e._next = t[r]), (t[r] = e)),
              e._next ? (e._next._prev = e) : (t[n] = e),
              (e._prev = s),
              (e.parent = e._dp = t);
          })(t, e, '_first', '_last', t._sort ? '_start' : 0),
          (t._recent = e),
          n || Zt(t, e),
          t
        );
      },
      te = function (t, e) {
        return (
          (ct.ScrollTrigger || pt('scrollTrigger', e)) &&
          ct.ScrollTrigger.create(e, t)
        );
      },
      ee = function (t, e, r, n) {
        return (
          tr(t, e),
          t._initted
            ? !r &&
              t._pt &&
              ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) &&
              g !== Le.frame
              ? (vt.push(t), (t._lazy = [e, n]), 1)
              : void 0
            : 1
        );
      },
      re = function (t, e, r, n) {
        var i = t._repeat,
          o = Et(e) || 0,
          s = t._tTime / t._tDur;
        return (
          s && !n && (t._time *= o / t._dur),
          (t._dur = o),
          (t._tDur = i ? (i < 0 ? 1e10 : Et(o * (i + 1) + t._rDelay * i)) : o),
          s && !n ? Kt(t, (t._tTime = t._tDur * s)) : t.parent && Qt(t),
          r || Yt(t.parent, t),
          t
        );
      },
      ne = function (t) {
        return t instanceof Ge ? Yt(t) : re(t, t._dur);
      },
      ie = { _start: 0, endTime: gt },
      oe = function t(e, r) {
        var n,
          i,
          o = e.labels,
          s = e._recent || ie,
          a = e.duration() >= I ? s.endTime(!1) : e._dur;
        return W(r) && (isNaN(r) || r in o)
          ? '<' === (n = r.charAt(0)) || '>' === n
            ? ('<' === n ? s._start : s.endTime(s._repeat >= 0)) +
              (parseFloat(r.substr(1)) || 0)
            : (n = r.indexOf('=')) < 0
            ? (r in o || (o[r] = a), o[r])
            : ((i = +(r.charAt(n - 1) + r.substr(n + 1))),
              n > 1 ? t(e, r.substr(0, n - 1)) + i : a + i)
          : null == r
          ? a
          : +r;
      },
      se = function (t, e) {
        return t || 0 === t ? e(t) : e;
      },
      ae = function (t, e, r) {
        return r < t ? t : r > e ? e : r;
      },
      ue = function (t) {
        return (t = (t + '').substr((parseFloat(t) + '').length)) && isNaN(t)
          ? t
          : '';
      },
      he = [].slice,
      ce = function (t, e) {
        return (
          t &&
          Z(t) &&
          'length' in t &&
          ((!e && !t.length) || (t.length - 1 in t && Z(t[0]))) &&
          !t.nodeType &&
          t !== l
        );
      },
      fe = function (t, e, r) {
        return (
          void 0 === r && (r = []),
          t.forEach(function (t) {
            var n;
            return (W(t) && !e) || ce(t, 1)
              ? (n = r).push.apply(n, le(t))
              : r.push(t);
          }) || r
        );
      },
      le = function (t, e) {
        return !W(t) || e || (!p && je())
          ? nt(t)
            ? fe(t, e)
            : ce(t)
            ? he.call(t, 0)
            : t
            ? [t]
            : []
          : he.call(d.querySelectorAll(t), 0);
      },
      pe = function (t) {
        return t.sort(function () {
          return 0.5 - Math.random();
        });
      },
      de = function (t) {
        if (G(t)) return t;
        var e = Z(t) ? t : { each: t },
          r = Ue(e.ease),
          n = e.from || 0,
          i = parseFloat(e.base) || 0,
          o = {},
          s = n > 0 && n < 1,
          a = isNaN(n) || s,
          u = e.axis,
          h = n,
          c = n;
        return (
          W(n)
            ? (h = c = { center: 0.5, edges: 0.5, end: 1 }[n] || 0)
            : !s && a && ((h = n[0]), (c = n[1])),
          function (t, s, f) {
            var l,
              p,
              d,
              m,
              g,
              _,
              v,
              y,
              w,
              b = (f || e).length,
              x = o[b];
            if (!x) {
              if (!(w = 'auto' === e.grid ? 0 : (e.grid || [1, I])[1])) {
                for (
                  v = -I;
                  v < (v = f[w++].getBoundingClientRect().left) && w < b;

                );
                w--;
              }
              for (
                x = o[b] = [],
                  l = a ? Math.min(w, b) * h - 0.5 : n % w,
                  p = a ? (b * c) / w - 0.5 : (n / w) | 0,
                  v = 0,
                  y = I,
                  _ = 0;
                _ < b;
                _++
              )
                (d = (_ % w) - l),
                  (m = p - ((_ / w) | 0)),
                  (x[_] = g = u
                    ? Math.abs('y' === u ? m : d)
                    : X(d * d + m * m)),
                  g > v && (v = g),
                  g < y && (y = g);
              'random' === n && pe(x),
                (x.max = v - y),
                (x.min = y),
                (x.v = b =
                  (parseFloat(e.amount) ||
                    parseFloat(e.each) *
                      (w > b
                        ? b - 1
                        : u
                        ? 'y' === u
                          ? b / w
                          : w
                        : Math.max(w, b / w)) ||
                    0) * ('edges' === n ? -1 : 1)),
                (x.b = b < 0 ? i - b : i),
                (x.u = ue(e.amount || e.each) || 0),
                (r = r && b < 0 ? Ie(r) : r);
            }
            return (
              (b = (x[t] - x.min) / x.max || 0),
              Et(x.b + (r ? r(b) : b) * x.v) + x.u
            );
          }
        );
      },
      me = function (t) {
        var e = t < 1 ? Math.pow(10, (t + '').length - 2) : 1;
        return function (r) {
          return (
            Math.floor(Math.round(parseFloat(r) / t) * t * e) / e +
            (Q(r) ? 0 : ue(r))
          );
        };
      },
      ge = function (t, e) {
        var r,
          n,
          i = nt(t);
        return (
          !i &&
            Z(t) &&
            ((r = i = t.radius || I),
            t.values
              ? ((t = le(t.values)), (n = !Q(t[0])) && (r *= r))
              : (t = me(t.increment))),
          se(
            e,
            i
              ? G(t)
                ? function (e) {
                    return (n = t(e)), Math.abs(n - e) <= r ? n : e;
                  }
                : function (e) {
                    for (
                      var i,
                        o,
                        s = parseFloat(n ? e.x : e),
                        a = parseFloat(n ? e.y : 0),
                        u = I,
                        h = 0,
                        c = t.length;
                      c--;

                    )
                      (i = n
                        ? (i = t[c].x - s) * i + (o = t[c].y - a) * o
                        : Math.abs(t[c] - s)) < u && ((u = i), (h = c));
                    return (
                      (h = !r || u <= r ? t[h] : e),
                      n || h === e || Q(e) ? h : h + ue(e)
                    );
                  }
              : me(t)
          )
        );
      },
      _e = function (t, e, r, n) {
        return se(nt(t) ? !e : !0 === r ? !!(r = 0) : !n, function () {
          return nt(t)
            ? t[~~(Math.random() * t.length)]
            : (r = r || 1e-5) &&
                (n = r < 1 ? Math.pow(10, (r + '').length - 2) : 1) &&
                Math.floor(
                  Math.round((t + Math.random() * (e - t)) / r) * r * n
                ) / n;
        });
      },
      ve = function (t, e, r) {
        return se(r, function (r) {
          return t[~~e(r)];
        });
      },
      ye = function (t) {
        for (var e, r, n, i, o = 0, s = ''; ~(e = t.indexOf('random(', o)); )
          (n = t.indexOf(')', e)),
            (i = '[' === t.charAt(e + 7)),
            (r = t.substr(e + 7, n - e - 7).match(i ? ht : it)),
            (s +=
              t.substr(o, e - o) +
              _e(i ? r : +r[0], i ? 0 : +r[1], +r[2] || 1e-5)),
            (o = n + 1);
        return s + t.substr(o, t.length - o);
      },
      we = function (t, e, r, n, i) {
        var o = e - t,
          s = n - r;
        return se(i, function (e) {
          return r + (((e - t) / o) * s || 0);
        });
      },
      be = function (t, e, r) {
        var n,
          i,
          o,
          s = t.labels,
          a = I;
        for (n in s)
          (i = s[n] - e) < 0 == !!r &&
            i &&
            a > (i = Math.abs(i)) &&
            ((o = n), (a = i));
        return o;
      },
      xe = function (t, e, r) {
        var n,
          i,
          o = t.vars,
          s = o[e];
        if (s)
          return (
            (n = o[e + 'Params']),
            (i = o.callbackScope || t),
            r && vt.length && Rt(),
            n ? s.apply(i, n) : s.call(i)
          );
      },
      Te = function (t) {
        return Ht(t), t.progress() < 1 && xe(t, 'onInterrupt'), t;
      },
      Pe = function (t) {
        var e = (t = (!t.name && t.default) || t).name,
          r = G(t),
          n =
            e && !r && t.init
              ? function () {
                  this._props = [];
                }
              : t,
          i = {
            init: gt,
            render: pr,
            add: Ze,
            kill: mr,
            modifier: dr,
            rawVars: 0,
          },
          o = {
            targetTest: 0,
            get: 0,
            getSetter: hr,
            aliases: {},
            register: 0,
          };
        if ((je(), t !== n)) {
          if (wt[e]) return;
          qt(n, qt(It(t, i), o)),
            zt(n.prototype, zt(i, It(t, o))),
            (wt[(n.prop = e)] = n),
            t.targetTest && (Tt.push(n), (_t[e] = 1)),
            (e =
              ('css' === e ? 'CSS' : e.charAt(0).toUpperCase() + e.substr(1)) +
              'Plugin');
        }
        mt(e, n), t.register && t.register(xr, n, vr);
      },
      ke = 255,
      Oe = {
        aqua: [0, ke, ke],
        lime: [0, ke, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, ke],
        navy: [0, 0, 128],
        white: [ke, ke, ke],
        olive: [128, 128, 0],
        yellow: [ke, ke, 0],
        orange: [ke, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [ke, 0, 0],
        pink: [ke, 192, 203],
        cyan: [0, ke, ke],
        transparent: [ke, ke, ke, 0],
      },
      Ae = function (t, e, r) {
        return (
          ((6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1
            ? e + (r - e) * t * 6
            : t < 0.5
            ? r
            : 3 * t < 2
            ? e + (r - e) * (2 / 3 - t) * 6
            : e) *
            ke +
            0.5) |
          0
        );
      },
      Se = function (t, e, r) {
        var n,
          i,
          o,
          s,
          a,
          u,
          h,
          c,
          f,
          l,
          p = t ? (Q(t) ? [t >> 16, (t >> 8) & ke, t & ke] : 0) : Oe.black;
        if (!p) {
          if ((',' === t.substr(-1) && (t = t.substr(0, t.length - 1)), Oe[t]))
            p = Oe[t];
          else if ('#' === t.charAt(0))
            4 === t.length &&
              ((n = t.charAt(1)),
              (i = t.charAt(2)),
              (o = t.charAt(3)),
              (t = '#' + n + n + i + i + o + o)),
              (p = [
                (t = parseInt(t.substr(1), 16)) >> 16,
                (t >> 8) & ke,
                t & ke,
              ]);
          else if ('hsl' === t.substr(0, 3))
            if (((p = l = t.match(it)), e)) {
              if (~t.indexOf('='))
                return (p = t.match(ot)), r && p.length < 4 && (p[3] = 1), p;
            } else
              (s = (+p[0] % 360) / 360),
                (a = +p[1] / 100),
                (n =
                  2 * (u = +p[2] / 100) -
                  (i = u <= 0.5 ? u * (a + 1) : u + a - u * a)),
                p.length > 3 && (p[3] *= 1),
                (p[0] = Ae(s + 1 / 3, n, i)),
                (p[1] = Ae(s, n, i)),
                (p[2] = Ae(s - 1 / 3, n, i));
          else p = t.match(it) || Oe.transparent;
          p = p.map(Number);
        }
        return (
          e &&
            !l &&
            ((n = p[0] / ke),
            (i = p[1] / ke),
            (o = p[2] / ke),
            (u = ((h = Math.max(n, i, o)) + (c = Math.min(n, i, o))) / 2),
            h === c
              ? (s = a = 0)
              : ((f = h - c),
                (a = u > 0.5 ? f / (2 - h - c) : f / (h + c)),
                (s =
                  h === n
                    ? (i - o) / f + (i < o ? 6 : 0)
                    : h === i
                    ? (o - n) / f + 2
                    : (n - i) / f + 4),
                (s *= 60)),
            (p[0] = ~~(s + 0.5)),
            (p[1] = ~~(100 * a + 0.5)),
            (p[2] = ~~(100 * u + 0.5))),
          r && p.length < 4 && (p[3] = 1),
          p
        );
      },
      Ee = function (t) {
        var e = [],
          r = [],
          n = -1;
        return (
          t.split(Ce).forEach(function (t) {
            var i = t.match(st) || [];
            e.push.apply(e, i), r.push((n += i.length + 1));
          }),
          (e.c = r),
          e
        );
      },
      Me = function (t, e, r) {
        var n,
          i,
          o,
          s,
          a = '',
          u = (t + a).match(Ce),
          h = e ? 'hsla(' : 'rgba(',
          c = 0;
        if (!u) return t;
        if (
          ((u = u.map(function (t) {
            return (
              (t = Se(t, e, 1)) &&
              h +
                (e
                  ? t[0] + ',' + t[1] + '%,' + t[2] + '%,' + t[3]
                  : t.join(',')) +
                ')'
            );
          })),
          r && ((o = Ee(t)), (n = r.c).join(a) !== o.c.join(a)))
        )
          for (s = (i = t.replace(Ce, '1').split(st)).length - 1; c < s; c++)
            a +=
              i[c] +
              (~n.indexOf(c)
                ? u.shift() || h + '0,0,0,0)'
                : (o.length ? o : u.length ? u : r).shift());
        if (!i)
          for (s = (i = t.split(Ce)).length - 1; c < s; c++) a += i[c] + u[c];
        return a + i[s];
      },
      Ce = (function () {
        var t,
          e =
            '(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b';
        for (t in Oe) e += '|' + t + '\\b';
        return new RegExp(e + ')', 'gi');
      })(),
      Re = /hsl[a]?\(/,
      De = function (t) {
        var e,
          r = t.join(' ');
        if (((Ce.lastIndex = 0), Ce.test(r)))
          return (
            (e = Re.test(r)),
            (t[1] = Me(t[1], e)),
            (t[0] = Me(t[0], e, Ee(t[1]))),
            !0
          );
      },
      Le =
        ((k = Date.now),
        (O = 500),
        (A = 33),
        (S = k()),
        (E = S),
        (C = M = 1e3 / 240),
        (D = function t(e) {
          var r,
            n,
            i,
            o,
            s = k() - E,
            a = !0 === e;
          if (
            (s > O && (S += s - A),
            ((r = (i = (E += s) - S) - C) > 0 || a) &&
              ((o = ++x.frame),
              (T = i - 1e3 * x.time),
              (x.time = i /= 1e3),
              (C += r + (r >= M ? 4 : M - r)),
              (n = 1)),
            a || (y = w(t)),
            n)
          )
            for (P = 0; P < R.length; P++) R[P](i, T, o, e);
        }),
        (x = {
          time: 0,
          frame: 0,
          tick: function () {
            D(!0);
          },
          deltaRatio: function (t) {
            return T / (1e3 / (t || 60));
          },
          wake: function () {
            m &&
              (!p &&
                tt() &&
                ((l = p = window),
                (d = l.document || {}),
                (ct.gsap = xr),
                (l.gsapVersions || (l.gsapVersions = [])).push(xr.version),
                lt(ft || l.GreenSockGlobals || (!l.gsap && l) || {}),
                (b = l.requestAnimationFrame)),
              y && x.sleep(),
              (w =
                b ||
                function (t) {
                  return setTimeout(t, (C - 1e3 * x.time + 1) | 0);
                }),
              (v = 1),
              D(2));
          },
          sleep: function () {
            (b ? l.cancelAnimationFrame : clearTimeout)(y), (v = 0), (w = gt);
          },
          lagSmoothing: function (t, e) {
            (O = t || 1e8), (A = Math.min(e, O, 0));
          },
          fps: function (t) {
            (M = 1e3 / (t || 240)), (C = 1e3 * x.time + M);
          },
          add: function (t) {
            R.indexOf(t) < 0 && R.push(t), je();
          },
          remove: function (t) {
            var e;
            ~(e = R.indexOf(t)) && R.splice(e, 1) && P >= e && P--;
          },
          _listeners: (R = []),
        })),
      je = function () {
        return !v && Le.wake();
      },
      qe = {},
      Fe = /^[\d.\-M][\d.\-,\s]/,
      ze = /["']/g,
      Be = function (t) {
        for (
          var e,
            r,
            n,
            i = {},
            o = t.substr(1, t.length - 3).split(':'),
            s = o[0],
            a = 1,
            u = o.length;
          a < u;
          a++
        )
          (r = o[a]),
            (e = a !== u - 1 ? r.lastIndexOf(',') : r.length),
            (n = r.substr(0, e)),
            (i[s] = isNaN(n) ? n.replace(ze, '').trim() : +n),
            (s = r.substr(e + 1).trim());
        return i;
      },
      Ie = function (t) {
        return function (e) {
          return 1 - t(1 - e);
        };
      },
      Ne = function t(e, r) {
        for (var n, i = e._first; i; )
          i instanceof Ge
            ? t(i, r)
            : !i.vars.yoyoEase ||
              (i._yoyo && i._repeat) ||
              i._yoyo === r ||
              (i.timeline
                ? t(i.timeline, r)
                : ((n = i._ease),
                  (i._ease = i._yEase),
                  (i._yEase = n),
                  (i._yoyo = r))),
            (i = i._next);
      },
      Ue = function (t, e) {
        return (
          (t &&
            (G(t)
              ? t
              : qe[t] ||
                (function (t) {
                  var e,
                    r,
                    n,
                    i,
                    o = (t + '').split('('),
                    s = qe[o[0]];
                  return s && o.length > 1 && s.config
                    ? s.config.apply(
                        null,
                        ~t.indexOf('{')
                          ? [Be(o[1])]
                          : ((e = t),
                            (r = e.indexOf('(') + 1),
                            (n = e.indexOf(')')),
                            (i = e.indexOf('(', r)),
                            e.substring(
                              r,
                              ~i && i < n ? e.indexOf(')', n + 1) : n
                            ))
                              .split(',')
                              .map(Lt)
                      )
                    : qe._CE && Fe.test(t)
                    ? qe._CE('', t)
                    : s;
                })(t))) ||
          e
        );
      },
      He = function (t, e, r, n) {
        void 0 === r &&
          (r = function (t) {
            return 1 - e(1 - t);
          }),
          void 0 === n &&
            (n = function (t) {
              return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
            });
        var i,
          o = { easeIn: e, easeOut: r, easeInOut: n };
        return (
          St(t, function (t) {
            for (var e in ((qe[t] = ct[t] = o),
            (qe[(i = t.toLowerCase())] = r),
            o))
              qe[
                i +
                  ('easeIn' === e ? '.in' : 'easeOut' === e ? '.out' : '.inOut')
              ] = qe[t + '.' + e] = o[e];
          }),
          o
        );
      },
      Ye = function (t) {
        return function (e) {
          return e < 0.5 ? (1 - t(1 - 2 * e)) / 2 : 0.5 + t(2 * (e - 0.5)) / 2;
        };
      },
      Xe = function t(e, r, n) {
        var i = r >= 1 ? r : 1,
          o = (n || (e ? 0.3 : 0.45)) / (r < 1 ? r : 1),
          s = (o / U) * (Math.asin(1 / i) || 0),
          a = function (t) {
            return 1 === t ? 1 : i * Math.pow(2, -10 * t) * $((t - s) * o) + 1;
          },
          u =
            'out' === e
              ? a
              : 'in' === e
              ? function (t) {
                  return 1 - a(1 - t);
                }
              : Ye(a);
        return (
          (o = U / o),
          (u.config = function (r, n) {
            return t(e, r, n);
          }),
          u
        );
      },
      Ve = function t(e, r) {
        void 0 === r && (r = 1.70158);
        var n = function (t) {
            return t ? --t * t * ((r + 1) * t + r) + 1 : 0;
          },
          i =
            'out' === e
              ? n
              : 'in' === e
              ? function (t) {
                  return 1 - n(1 - t);
                }
              : Ye(n);
        return (
          (i.config = function (r) {
            return t(e, r);
          }),
          i
        );
      };
    St('Linear,Quad,Cubic,Quart,Quint,Strong', function (t, e) {
      var r = e < 5 ? e + 1 : e;
      He(
        t + ',Power' + (r - 1),
        e
          ? function (t) {
              return Math.pow(t, r);
            }
          : function (t) {
              return t;
            },
        function (t) {
          return 1 - Math.pow(1 - t, r);
        },
        function (t) {
          return t < 0.5
            ? Math.pow(2 * t, r) / 2
            : 1 - Math.pow(2 * (1 - t), r) / 2;
        }
      );
    }),
      (qe.Linear.easeNone = qe.none = qe.Linear.easeIn),
      He('Elastic', Xe('in'), Xe('out'), Xe()),
      (L = 7.5625),
      (q = 1 / (j = 2.75)),
      He(
        'Bounce',
        function (t) {
          return 1 - F(1 - t);
        },
        (F = function (t) {
          return t < q
            ? L * t * t
            : t < 0.7272727272727273
            ? L * Math.pow(t - 1.5 / j, 2) + 0.75
            : t < 0.9090909090909092
            ? L * (t -= 2.25 / j) * t + 0.9375
            : L * Math.pow(t - 2.625 / j, 2) + 0.984375;
        })
      ),
      He('Expo', function (t) {
        return t ? Math.pow(2, 10 * (t - 1)) : 0;
      }),
      He('Circ', function (t) {
        return -(X(1 - t * t) - 1);
      }),
      He('Sine', function (t) {
        return 1 === t ? 1 : 1 - V(t * H);
      }),
      He('Back', Ve('in'), Ve('out'), Ve()),
      (qe.SteppedEase = qe.steps = ct.SteppedEase = {
        config: function (t, e) {
          void 0 === t && (t = 1);
          var r = 1 / t,
            n = t + (e ? 0 : 1),
            i = e ? 1 : 0;
          return function (t) {
            return (((n * ae(0, 0.99999999, t)) | 0) + i) * r;
          };
        },
      }),
      (B.ease = qe['quad.out']),
      St(
        'onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt',
        function (t) {
          return (Pt += t + ',' + t + 'Params,');
        }
      );
    var $e = function (t, e) {
        (this.id = Y++),
          (t._gsap = this),
          (this.target = t),
          (this.harness = e),
          (this.get = e ? e.get : At),
          (this.set = e ? e.getSetter : hr);
      },
      We = (function () {
        function t(t, e) {
          var r = t.parent || f;
          (this.vars = t),
            (this._delay = +t.delay || 0),
            (this._repeat = t.repeat || 0) &&
              ((this._rDelay = t.repeatDelay || 0),
              (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
            (this._ts = 1),
            re(this, +t.duration, 1, 1),
            (this.data = t.data),
            v || Le.wake(),
            r && Jt(r, this, e || 0 === e ? e : r._time, 1),
            t.reversed && this.reverse(),
            t.paused && this.paused(!0);
        }
        var e = t.prototype;
        return (
          (e.delay = function (t) {
            return t || 0 === t
              ? (this.parent &&
                  this.parent.smoothChildTiming &&
                  this.startTime(this._start + t - this._delay),
                (this._delay = t),
                this)
              : this._delay;
          }),
          (e.duration = function (t) {
            return arguments.length
              ? this.totalDuration(
                  this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t
                )
              : this.totalDuration() && this._dur;
          }),
          (e.totalDuration = function (t) {
            return arguments.length
              ? ((this._dirty = 0),
                re(
                  this,
                  this._repeat < 0
                    ? t
                    : (t - this._repeat * this._rDelay) / (this._repeat + 1)
                ))
              : this._tDur;
          }),
          (e.totalTime = function (t, e) {
            if ((je(), !arguments.length)) return this._tTime;
            var r = this._dp;
            if (r && r.smoothChildTiming && this._ts) {
              for (Kt(this, t); r.parent; )
                r.parent._time !==
                  r._start +
                    (r._ts >= 0
                      ? r._tTime / r._ts
                      : (r.totalDuration() - r._tTime) / -r._ts) &&
                  r.totalTime(r._tTime, !0),
                  (r = r.parent);
              !this.parent &&
                this._dp.autoRemoveChildren &&
                ((this._ts > 0 && t < this._tDur) ||
                  (this._ts < 0 && t > 0) ||
                  (!this._tDur && !t)) &&
                Jt(this._dp, this, this._start - this._delay);
            }
            return (
              (this._tTime !== t ||
                (!this._dur && !e) ||
                (this._initted && Math.abs(this._zTime) === N) ||
                (!t && !this._initted && (this.add || this._ptLookup))) &&
                (this._ts || (this._pTime = t), Dt(this, t, e)),
              this
            );
          }),
          (e.time = function (t, e) {
            return arguments.length
              ? this.totalTime(
                  Math.min(this.totalDuration(), t + $t(this)) % this._dur ||
                    (t ? this._dur : 0),
                  e
                )
              : this._time;
          }),
          (e.totalProgress = function (t, e) {
            return arguments.length
              ? this.totalTime(this.totalDuration() * t, e)
              : this.totalDuration()
              ? Math.min(1, this._tTime / this._tDur)
              : this.ratio;
          }),
          (e.progress = function (t, e) {
            return arguments.length
              ? this.totalTime(
                  this.duration() *
                    (!this._yoyo || 1 & this.iteration() ? t : 1 - t) +
                    $t(this),
                  e
                )
              : this.duration()
              ? Math.min(1, this._time / this._dur)
              : this.ratio;
          }),
          (e.iteration = function (t, e) {
            var r = this.duration() + this._rDelay;
            return arguments.length
              ? this.totalTime(this._time + (t - 1) * r, e)
              : this._repeat
              ? Wt(this._tTime, r) + 1
              : 1;
          }),
          (e.timeScale = function (t) {
            if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
            if (this._rts === t) return this;
            var e =
              this.parent && this._ts
                ? Gt(this.parent._time, this)
                : this._tTime;
            return (
              (this._rts = +t || 0),
              (this._ts = this._ps || -1e-8 === t ? 0 : this._rts),
              Xt(this.totalTime(ae(-this._delay, this._tDur, e), !0))
            );
          }),
          (e.paused = function (t) {
            return arguments.length
              ? (this._ps !== t &&
                  ((this._ps = t),
                  t
                    ? ((this._pTime =
                        this._tTime || Math.max(-this._delay, this.rawTime())),
                      (this._ts = this._act = 0))
                    : (je(),
                      (this._ts = this._rts),
                      this.totalTime(
                        this.parent && !this.parent.smoothChildTiming
                          ? this.rawTime()
                          : this._tTime || this._pTime,
                        1 === this.progress() &&
                          (this._tTime -= N) &&
                          Math.abs(this._zTime) !== N
                      ))),
                this)
              : this._ps;
          }),
          (e.startTime = function (t) {
            if (arguments.length) {
              this._start = t;
              var e = this.parent || this._dp;
              return (
                e && (e._sort || !this.parent) && Jt(e, this, t - this._delay),
                this
              );
            }
            return this._start;
          }),
          (e.endTime = function (t) {
            return (
              this._start +
              (J(t) ? this.totalDuration() : this.duration()) /
                Math.abs(this._ts)
            );
          }),
          (e.rawTime = function (t) {
            var e = this.parent || this._dp;
            return e
              ? t &&
                (!this._ts ||
                  (this._repeat && this._time && this.totalProgress() < 1))
                ? this._tTime % (this._dur + this._rDelay)
                : this._ts
                ? Gt(e.rawTime(t), this)
                : this._tTime
              : this._tTime;
          }),
          (e.globalTime = function (t) {
            for (var e = this, r = arguments.length ? t : e.rawTime(); e; )
              (r = e._start + r / (e._ts || 1)), (e = e._dp);
            return r;
          }),
          (e.repeat = function (t) {
            return arguments.length
              ? ((this._repeat = t), ne(this))
              : this._repeat;
          }),
          (e.repeatDelay = function (t) {
            return arguments.length
              ? ((this._rDelay = t), ne(this))
              : this._rDelay;
          }),
          (e.yoyo = function (t) {
            return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
          }),
          (e.seek = function (t, e) {
            return this.totalTime(oe(this, t), J(e));
          }),
          (e.restart = function (t, e) {
            return this.play().totalTime(t ? -this._delay : 0, J(e));
          }),
          (e.play = function (t, e) {
            return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
          }),
          (e.reverse = function (t, e) {
            return (
              null != t && this.seek(t || this.totalDuration(), e),
              this.reversed(!0).paused(!1)
            );
          }),
          (e.pause = function (t, e) {
            return null != t && this.seek(t, e), this.paused(!0);
          }),
          (e.resume = function () {
            return this.paused(!1);
          }),
          (e.reversed = function (t) {
            return arguments.length
              ? (!!t !== this.reversed() &&
                  this.timeScale(-this._rts || (t ? -1e-8 : 0)),
                this)
              : this._rts < 0;
          }),
          (e.invalidate = function () {
            return (this._initted = 0), (this._zTime = -1e-8), this;
          }),
          (e.isActive = function () {
            var t,
              e = this.parent || this._dp,
              r = this._start;
            return !(
              e &&
              !(
                this._ts &&
                this._initted &&
                e.isActive() &&
                (t = e.rawTime(!0)) >= r &&
                t < this.endTime(!0) - N
              )
            );
          }),
          (e.eventCallback = function (t, e, r) {
            var n = this.vars;
            return arguments.length > 1
              ? (e
                  ? ((n[t] = e),
                    r && (n[t + 'Params'] = r),
                    'onUpdate' === t && (this._onUpdate = e))
                  : delete n[t],
                this)
              : n[t];
          }),
          (e.then = function (t) {
            var e = this;
            return new Promise(function (r) {
              var n = G(t) ? t : jt,
                i = function () {
                  var t = e.then;
                  (e.then = null),
                    G(n) && (n = n(e)) && (n.then || n === e) && (e.then = t),
                    r(n),
                    (e.then = t);
                };
              (e._initted && 1 === e.totalProgress() && e._ts >= 0) ||
              (!e._tTime && e._ts < 0)
                ? i()
                : (e._prom = i);
            });
          }),
          (e.kill = function () {
            Te(this);
          }),
          t
        );
      })();
    qt(We.prototype, {
      _time: 0,
      _start: 0,
      _end: 0,
      _tTime: 0,
      _tDur: 0,
      _dirty: 0,
      _repeat: 0,
      _yoyo: !1,
      parent: null,
      _initted: !1,
      _rDelay: 0,
      _ts: 1,
      _dp: 0,
      ratio: 0,
      _zTime: -1e-8,
      _prom: 0,
      _ps: !1,
      _rts: 1,
    });
    var Ge = (function (t) {
      function e(e, r) {
        var n;
        return (
          void 0 === e && (e = {}),
          ((n = t.call(this, e, r) || this).labels = {}),
          (n.smoothChildTiming = !!e.smoothChildTiming),
          (n.autoRemoveChildren = !!e.autoRemoveChildren),
          (n._sort = J(e.sortChildren)),
          n.parent && Zt(n.parent, h(n)),
          e.scrollTrigger && te(h(n), e.scrollTrigger),
          n
        );
      }
      c(e, t);
      var r = e.prototype;
      return (
        (r.to = function (t, e, r) {
          return (
            new ir(
              t,
              Ct(arguments, 0, this),
              oe(this, Q(e) ? arguments[3] : r)
            ),
            this
          );
        }),
        (r.from = function (t, e, r) {
          return (
            new ir(
              t,
              Ct(arguments, 1, this),
              oe(this, Q(e) ? arguments[3] : r)
            ),
            this
          );
        }),
        (r.fromTo = function (t, e, r, n) {
          return (
            new ir(
              t,
              Ct(arguments, 2, this),
              oe(this, Q(e) ? arguments[4] : n)
            ),
            this
          );
        }),
        (r.set = function (t, e, r) {
          return (
            (e.duration = 0),
            (e.parent = this),
            Nt(e).repeatDelay || (e.repeat = 0),
            (e.immediateRender = !!e.immediateRender),
            new ir(t, e, oe(this, r), 1),
            this
          );
        }),
        (r.call = function (t, e, r) {
          return Jt(this, ir.delayedCall(0, t, e), oe(this, r));
        }),
        (r.staggerTo = function (t, e, r, n, i, o, s) {
          return (
            (r.duration = e),
            (r.stagger = r.stagger || n),
            (r.onComplete = o),
            (r.onCompleteParams = s),
            (r.parent = this),
            new ir(t, r, oe(this, i)),
            this
          );
        }),
        (r.staggerFrom = function (t, e, r, n, i, o, s) {
          return (
            (r.runBackwards = 1),
            (Nt(r).immediateRender = J(r.immediateRender)),
            this.staggerTo(t, e, r, n, i, o, s)
          );
        }),
        (r.staggerFromTo = function (t, e, r, n, i, o, s, a) {
          return (
            (n.startAt = r),
            (Nt(n).immediateRender = J(n.immediateRender)),
            this.staggerTo(t, e, n, i, o, s, a)
          );
        }),
        (r.render = function (t, e, r) {
          var n,
            i,
            o,
            s,
            a,
            u,
            h,
            c,
            l,
            p,
            d,
            m,
            g = this._time,
            _ = this._dirty ? this.totalDuration() : this._tDur,
            v = this._dur,
            y = this !== f && t > _ - N && t >= 0 ? _ : t < N ? 0 : t,
            w = this._zTime < 0 != t < 0 && (this._initted || !v);
          if (y !== this._tTime || r || w) {
            if (
              (g !== this._time &&
                v &&
                ((y += this._time - g), (t += this._time - g)),
              (n = y),
              (l = this._start),
              (u = !(c = this._ts)),
              w && (v || (g = this._zTime), (t || !e) && (this._zTime = t)),
              this._repeat &&
                ((d = this._yoyo),
                (a = v + this._rDelay),
                (n = Et(y % a)),
                y === _
                  ? ((s = this._repeat), (n = v))
                  : ((s = ~~(y / a)) && s === y / a && ((n = v), s--),
                    n > v && (n = v)),
                (p = Wt(this._tTime, a)),
                !g && this._tTime && p !== s && (p = s),
                d && 1 & s && ((n = v - n), (m = 1)),
                s !== p && !this._lock))
            ) {
              var b = d && 1 & p,
                x = b === (d && 1 & s);
              if (
                (s < p && (b = !b),
                (g = b ? 0 : v),
                (this._lock = 1),
                (this.render(g || (m ? 0 : Et(s * a)), e, !v)._lock = 0),
                !e && this.parent && xe(this, 'onRepeat'),
                this.vars.repeatRefresh && !m && (this.invalidate()._lock = 1),
                g !== this._time || u !== !this._ts)
              )
                return this;
              if (
                ((v = this._dur),
                (_ = this._tDur),
                x &&
                  ((this._lock = 2),
                  (g = b ? v : -1e-4),
                  this.render(g, !0),
                  this.vars.repeatRefresh && !m && this.invalidate()),
                (this._lock = 0),
                !this._ts && !u)
              )
                return this;
              Ne(this, m);
            }
            if (
              (this._hasPause &&
                !this._forcing &&
                this._lock < 2 &&
                (h = (function (t, e, r) {
                  var n;
                  if (r > e)
                    for (n = t._first; n && n._start <= r; ) {
                      if (!n._dur && 'isPause' === n.data && n._start > e)
                        return n;
                      n = n._next;
                    }
                  else
                    for (n = t._last; n && n._start >= r; ) {
                      if (!n._dur && 'isPause' === n.data && n._start < e)
                        return n;
                      n = n._prev;
                    }
                })(this, Et(g), Et(n))) &&
                (y -= n - (n = h._start)),
              (this._tTime = y),
              (this._time = n),
              (this._act = !c),
              this._initted ||
                ((this._onUpdate = this.vars.onUpdate),
                (this._initted = 1),
                (this._zTime = t)),
              !g && n && !e && xe(this, 'onStart'),
              n >= g && t >= 0)
            )
              for (i = this._first; i; ) {
                if (
                  ((o = i._next), (i._act || n >= i._start) && i._ts && h !== i)
                ) {
                  if (i.parent !== this) return this.render(t, e, r);
                  if (
                    (i.render(
                      i._ts > 0
                        ? (n - i._start) * i._ts
                        : (i._dirty ? i.totalDuration() : i._tDur) +
                            (n - i._start) * i._ts,
                      e,
                      r
                    ),
                    n !== this._time || (!this._ts && !u))
                  ) {
                    (h = 0), o && (y += this._zTime = -1e-8);
                    break;
                  }
                }
                i = o;
              }
            else {
              i = this._last;
              for (var T = t < 0 ? t : n; i; ) {
                if (
                  ((o = i._prev), (i._act || T <= i._end) && i._ts && h !== i)
                ) {
                  if (i.parent !== this) return this.render(t, e, r);
                  if (
                    (i.render(
                      i._ts > 0
                        ? (T - i._start) * i._ts
                        : (i._dirty ? i.totalDuration() : i._tDur) +
                            (T - i._start) * i._ts,
                      e,
                      r
                    ),
                    n !== this._time || (!this._ts && !u))
                  ) {
                    (h = 0), o && (y += this._zTime = T ? -1e-8 : N);
                    break;
                  }
                }
                i = o;
              }
            }
            if (
              h &&
              !e &&
              (this.pause(),
              (h.render(n >= g ? 0 : -1e-8)._zTime = n >= g ? 1 : -1),
              this._ts)
            )
              return (this._start = l), Qt(this), this.render(t, e, r);
            this._onUpdate && !e && xe(this, 'onUpdate', !0),
              ((y === _ && _ >= this.totalDuration()) || (!y && g)) &&
                ((l !== this._start && Math.abs(c) === Math.abs(this._ts)) ||
                  this._lock ||
                  ((t || !v) &&
                    ((y === _ && this._ts > 0) || (!y && this._ts < 0)) &&
                    Ht(this, 1),
                  e ||
                    (t < 0 && !g) ||
                    (!y && !g) ||
                    (xe(this, y === _ ? 'onComplete' : 'onReverseComplete', !0),
                    this._prom &&
                      !(y < _ && this.timeScale() > 0) &&
                      this._prom())));
          }
          return this;
        }),
        (r.add = function (t, e) {
          var r = this;
          if ((Q(e) || (e = oe(this, e)), !(t instanceof We))) {
            if (nt(t))
              return (
                t.forEach(function (t) {
                  return r.add(t, e);
                }),
                this
              );
            if (W(t)) return this.addLabel(t, e);
            if (!G(t)) return this;
            t = ir.delayedCall(0, t);
          }
          return this !== t ? Jt(this, t, e) : this;
        }),
        (r.getChildren = function (t, e, r, n) {
          void 0 === t && (t = !0),
            void 0 === e && (e = !0),
            void 0 === r && (r = !0),
            void 0 === n && (n = -I);
          for (var i = [], o = this._first; o; )
            o._start >= n &&
              (o instanceof ir
                ? e && i.push(o)
                : (r && i.push(o),
                  t && i.push.apply(i, o.getChildren(!0, e, r)))),
              (o = o._next);
          return i;
        }),
        (r.getById = function (t) {
          for (var e = this.getChildren(1, 1, 1), r = e.length; r--; )
            if (e[r].vars.id === t) return e[r];
        }),
        (r.remove = function (t) {
          return W(t)
            ? this.removeLabel(t)
            : G(t)
            ? this.killTweensOf(t)
            : (Ut(this, t),
              t === this._recent && (this._recent = this._last),
              Yt(this));
        }),
        (r.totalTime = function (e, r) {
          return arguments.length
            ? ((this._forcing = 1),
              !this._dp &&
                this._ts &&
                (this._start = Et(
                  Le.time -
                    (this._ts > 0
                      ? e / this._ts
                      : (this.totalDuration() - e) / -this._ts)
                )),
              t.prototype.totalTime.call(this, e, r),
              (this._forcing = 0),
              this)
            : this._tTime;
        }),
        (r.addLabel = function (t, e) {
          return (this.labels[t] = oe(this, e)), this;
        }),
        (r.removeLabel = function (t) {
          return delete this.labels[t], this;
        }),
        (r.addPause = function (t, e, r) {
          var n = ir.delayedCall(0, e || gt, r);
          return (
            (n.data = 'isPause'), (this._hasPause = 1), Jt(this, n, oe(this, t))
          );
        }),
        (r.removePause = function (t) {
          var e = this._first;
          for (t = oe(this, t); e; )
            e._start === t && 'isPause' === e.data && Ht(e), (e = e._next);
        }),
        (r.killTweensOf = function (t, e, r) {
          for (var n = this.getTweensOf(t, r), i = n.length; i--; )
            Qe !== n[i] && n[i].kill(t, e);
          return this;
        }),
        (r.getTweensOf = function (t, e) {
          for (var r, n = [], i = le(t), o = this._first, s = Q(e); o; )
            o instanceof ir
              ? Mt(o._targets, i) &&
                (s
                  ? (!Qe || (o._initted && o._ts)) &&
                    o.globalTime(0) <= e &&
                    o.globalTime(o.totalDuration()) > e
                  : !e || o.isActive()) &&
                n.push(o)
              : (r = o.getTweensOf(i, e)).length && n.push.apply(n, r),
              (o = o._next);
          return n;
        }),
        (r.tweenTo = function (t, e) {
          e = e || {};
          var r = this,
            n = oe(r, t),
            i = e,
            o = i.startAt,
            s = i.onStart,
            a = i.onStartParams,
            u = ir.to(
              r,
              qt(e, {
                ease: 'none',
                lazy: !1,
                time: n,
                overwrite: 'auto',
                duration:
                  e.duration ||
                  Math.abs(
                    (n - (o && 'time' in o ? o.time : r._time)) / r.timeScale()
                  ) ||
                  N,
                onStart: function () {
                  r.pause();
                  var t = e.duration || Math.abs((n - r._time) / r.timeScale());
                  u._dur !== t && re(u, t, 0, 1).render(u._time, !0, !0),
                    s && s.apply(u, a || []);
                },
              })
            );
          return u;
        }),
        (r.tweenFromTo = function (t, e, r) {
          return this.tweenTo(e, qt({ startAt: { time: oe(this, t) } }, r));
        }),
        (r.recent = function () {
          return this._recent;
        }),
        (r.nextLabel = function (t) {
          return void 0 === t && (t = this._time), be(this, oe(this, t));
        }),
        (r.previousLabel = function (t) {
          return void 0 === t && (t = this._time), be(this, oe(this, t), 1);
        }),
        (r.currentLabel = function (t) {
          return arguments.length
            ? this.seek(t, !0)
            : this.previousLabel(this._time + N);
        }),
        (r.shiftChildren = function (t, e, r) {
          void 0 === r && (r = 0);
          for (var n, i = this._first, o = this.labels; i; )
            i._start >= r && ((i._start += t), (i._end += t)), (i = i._next);
          if (e) for (n in o) o[n] >= r && (o[n] += t);
          return Yt(this);
        }),
        (r.invalidate = function () {
          var e = this._first;
          for (this._lock = 0; e; ) e.invalidate(), (e = e._next);
          return t.prototype.invalidate.call(this);
        }),
        (r.clear = function (t) {
          void 0 === t && (t = !0);
          for (var e, r = this._first; r; )
            (e = r._next), this.remove(r), (r = e);
          return (
            (this._time = this._tTime = this._pTime = 0),
            t && (this.labels = {}),
            Yt(this)
          );
        }),
        (r.totalDuration = function (t) {
          var e,
            r,
            n,
            i = 0,
            o = this,
            s = o._last,
            a = I;
          if (arguments.length)
            return o.timeScale(
              (o._repeat < 0 ? o.duration() : o.totalDuration()) /
                (o.reversed() ? -t : t)
            );
          if (o._dirty) {
            for (n = o.parent; s; )
              (e = s._prev),
                s._dirty && s.totalDuration(),
                (r = s._start) > a && o._sort && s._ts && !o._lock
                  ? ((o._lock = 1), (Jt(o, s, r - s._delay, 1)._lock = 0))
                  : (a = r),
                r < 0 &&
                  s._ts &&
                  ((i -= r),
                  ((!n && !o._dp) || (n && n.smoothChildTiming)) &&
                    ((o._start += r / o._ts), (o._time -= r), (o._tTime -= r)),
                  o.shiftChildren(-r, !1, -Infinity),
                  (a = 0)),
                s._end > i && s._ts && (i = s._end),
                (s = e);
            re(o, o === f && o._time > i ? o._time : i, 1, 1), (o._dirty = 0);
          }
          return o._tDur;
        }),
        (e.updateRoot = function (t) {
          if ((f._ts && (Dt(f, Gt(t, f)), (g = Le.frame)), Le.frame >= xt)) {
            xt += z.autoSleep || 120;
            var e = f._first;
            if ((!e || !e._ts) && z.autoSleep && Le._listeners.length < 2) {
              for (; e && !e._ts; ) e = e._next;
              e || Le.sleep();
            }
          }
        }),
        e
      );
    })(We);
    qt(Ge.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
    var Qe,
      Ke = function (t, e, r, n, i, o, s) {
        var a,
          u,
          h,
          c,
          f,
          l,
          p,
          d,
          m = new vr(this._pt, t, e, 0, 1, lr, null, i),
          g = 0,
          _ = 0;
        for (
          m.b = r,
            m.e = n,
            r += '',
            (p = ~(n += '').indexOf('random(')) && (n = ye(n)),
            o && (o((d = [r, n]), t, e), (r = d[0]), (n = d[1])),
            u = r.match(at) || [];
          (a = at.exec(n));

        )
          (c = a[0]),
            (f = n.substring(g, a.index)),
            h ? (h = (h + 1) % 5) : 'rgba(' === f.substr(-5) && (h = 1),
            c !== u[_++] &&
              ((l = parseFloat(u[_ - 1]) || 0),
              (m._pt = {
                _next: m._pt,
                p: f || 1 === _ ? f : ',',
                s: l,
                c:
                  '=' === c.charAt(1)
                    ? parseFloat(c.substr(2)) * ('-' === c.charAt(0) ? -1 : 1)
                    : parseFloat(c) - l,
                m: h && h < 4 ? Math.round : 0,
              }),
              (g = at.lastIndex));
        return (
          (m.c = g < n.length ? n.substring(g, n.length) : ''),
          (m.fp = s),
          (ut.test(n) || p) && (m.e = 0),
          (this._pt = m),
          m
        );
      },
      Ze = function (t, e, r, n, i, o, s, a, u) {
        G(n) && (n = n(i || 0, t, o));
        var h,
          c = t[e],
          f =
            'get' !== r
              ? r
              : G(c)
              ? u
                ? t[
                    e.indexOf('set') || !G(t['get' + e.substr(3)])
                      ? e
                      : 'get' + e.substr(3)
                  ](u)
                : t[e]()
              : c,
          l = G(c) ? (u ? ar : sr) : or;
        if (
          (W(n) &&
            (~n.indexOf('random(') && (n = ye(n)),
            '=' === n.charAt(1) &&
              (n =
                parseFloat(f) +
                parseFloat(n.substr(2)) * ('-' === n.charAt(0) ? -1 : 1) +
                (ue(f) || 0))),
          f !== n)
        )
          return isNaN(f * n)
            ? (!c && !(e in t) && pt(e, n),
              Ke.call(this, t, e, f, n, l, a || z.stringFilter, u))
            : ((h = new vr(
                this._pt,
                t,
                e,
                +f || 0,
                n - (f || 0),
                'boolean' == typeof c ? fr : cr,
                0,
                l
              )),
              u && (h.fp = u),
              s && h.modifier(s, this, t),
              (this._pt = h));
      },
      Je = function (t, e, r, n, i, o) {
        var s, a, u, h;
        if (
          wt[t] &&
          !1 !==
            (s = new wt[t]()).init(
              i,
              s.rawVars
                ? e[t]
                : (function (t, e, r, n, i) {
                    if (
                      (G(t) && (t = er(t, i, e, r, n)),
                      !Z(t) || (t.style && t.nodeType) || nt(t) || rt(t))
                    )
                      return W(t) ? er(t, i, e, r, n) : t;
                    var o,
                      s = {};
                    for (o in t) s[o] = er(t[o], i, e, r, n);
                    return s;
                  })(e[t], n, i, o, r),
              r,
              n,
              o
            ) &&
          ((r._pt = a = new vr(r._pt, i, t, 0, 1, s.render, s, 0, s.priority)),
          r !== _)
        )
          for (
            u = r._ptLookup[r._targets.indexOf(i)], h = s._props.length;
            h--;

          )
            u[s._props[h]] = a;
        return s;
      },
      tr = function t(e, r) {
        var n,
          i,
          o,
          s,
          a,
          u,
          h,
          c,
          l,
          p,
          d,
          m,
          g,
          _ = e.vars,
          v = _.ease,
          y = _.startAt,
          w = _.immediateRender,
          b = _.lazy,
          x = _.onUpdate,
          T = _.onUpdateParams,
          P = _.callbackScope,
          k = _.runBackwards,
          O = _.yoyoEase,
          A = _.keyframes,
          S = _.autoRevert,
          E = e._dur,
          M = e._startAt,
          C = e._targets,
          R = e.parent,
          D = R && 'nested' === R.data ? R.parent._targets : C,
          L = 'auto' === e._overwrite,
          j = e.timeline;
        if (
          (j && (!A || !v) && (v = 'none'),
          (e._ease = Ue(v, B.ease)),
          (e._yEase = O ? Ie(Ue(!0 === O ? v : O, B.ease)) : 0),
          O &&
            e._yoyo &&
            !e._repeat &&
            ((O = e._yEase), (e._yEase = e._ease), (e._ease = O)),
          !j)
        ) {
          if (
            ((m = (c = C[0] ? Ot(C[0]).harness : 0) && _[c.prop]),
            (n = It(_, _t)),
            M && M.render(-1, !0).kill(),
            y)
          ) {
            if (
              (Ht(
                (e._startAt = ir.set(
                  C,
                  qt(
                    {
                      data: 'isStart',
                      overwrite: !1,
                      parent: R,
                      immediateRender: !0,
                      lazy: J(b),
                      startAt: null,
                      delay: 0,
                      onUpdate: x,
                      onUpdateParams: T,
                      callbackScope: P,
                      stagger: 0,
                    },
                    y
                  )
                ))
              ),
              w)
            )
              if (r > 0) S || (e._startAt = 0);
              else if (E && !(r < 0 && M)) return void (r && (e._zTime = r));
          } else if (k && E)
            if (M) !S && (e._startAt = 0);
            else if (
              (r && (w = !1),
              (o = qt(
                {
                  overwrite: !1,
                  data: 'isFromStart',
                  lazy: w && J(b),
                  immediateRender: w,
                  stagger: 0,
                  parent: R,
                },
                n
              )),
              m && (o[c.prop] = m),
              Ht((e._startAt = ir.set(C, o))),
              w)
            ) {
              if (!r) return;
            } else t(e._startAt, N);
          for (
            e._pt = 0, b = (E && J(b)) || (b && !E), i = 0;
            i < C.length;
            i++
          ) {
            if (
              ((h = (a = C[i])._gsap || kt(C)[i]._gsap),
              (e._ptLookup[i] = p = {}),
              yt[h.id] && vt.length && Rt(),
              (d = D === C ? i : D.indexOf(a)),
              c &&
                !1 !== (l = new c()).init(a, m || n, e, d, D) &&
                ((e._pt = s = new vr(
                  e._pt,
                  a,
                  l.name,
                  0,
                  1,
                  l.render,
                  l,
                  0,
                  l.priority
                )),
                l._props.forEach(function (t) {
                  p[t] = s;
                }),
                l.priority && (u = 1)),
              !c || m)
            )
              for (o in n)
                wt[o] && (l = Je(o, n, e, d, a, D))
                  ? l.priority && (u = 1)
                  : (p[o] = s = Ze.call(
                      e,
                      a,
                      o,
                      'get',
                      n[o],
                      d,
                      D,
                      0,
                      _.stringFilter
                    ));
            e._op && e._op[i] && e.kill(a, e._op[i]),
              L &&
                e._pt &&
                ((Qe = e),
                f.killTweensOf(a, p, e.globalTime(0)),
                (g = !e.parent),
                (Qe = 0)),
              e._pt && b && (yt[h.id] = 1);
          }
          u && _r(e), e._onInit && e._onInit(e);
        }
        (e._from = !j && !!_.runBackwards),
          (e._onUpdate = x),
          (e._initted = (!e._op || e._pt) && !g);
      },
      er = function (t, e, r, n, i) {
        return G(t)
          ? t.call(e, r, n, i)
          : W(t) && ~t.indexOf('random(')
          ? ye(t)
          : t;
      },
      rr = Pt + 'repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase',
      nr = (rr + ',id,stagger,delay,duration,paused,scrollTrigger').split(','),
      ir = (function (t) {
        function e(e, r, n, i) {
          var o;
          'number' == typeof r && ((n.duration = r), (r = n), (n = null));
          var s,
            a,
            u,
            c,
            l,
            p,
            d,
            m,
            g = (o = t.call(this, i ? r : Nt(r), n) || this).vars,
            _ = g.duration,
            v = g.delay,
            y = g.immediateRender,
            w = g.stagger,
            b = g.overwrite,
            x = g.keyframes,
            T = g.defaults,
            P = g.scrollTrigger,
            k = g.yoyoEase,
            O = o.parent,
            A = (nt(e) || rt(e) ? Q(e[0]) : 'length' in r) ? [e] : le(e);
          if (
            ((o._targets = A.length
              ? kt(A)
              : dt(
                  'GSAP target ' + e + ' not found. https://greensock.com',
                  !z.nullTargetWarn
                ) || []),
            (o._ptLookup = []),
            (o._overwrite = b),
            x || w || et(_) || et(v))
          ) {
            if (
              ((r = o.vars),
              (s = o.timeline = new Ge({
                data: 'nested',
                defaults: T || {},
              })).kill(),
              (s.parent = h(o)),
              x)
            )
              qt(s.vars.defaults, { ease: 'none' }),
                x.forEach(function (t) {
                  return s.to(A, t, '>');
                });
            else {
              if (((c = A.length), (d = w ? de(w) : gt), Z(w)))
                for (l in w) ~rr.indexOf(l) && (m || (m = {}), (m[l] = w[l]));
              for (a = 0; a < c; a++) {
                for (l in ((u = {}), r)) nr.indexOf(l) < 0 && (u[l] = r[l]);
                (u.stagger = 0),
                  k && (u.yoyoEase = k),
                  m && zt(u, m),
                  (p = A[a]),
                  (u.duration = +er(_, h(o), a, p, A)),
                  (u.delay = (+er(v, h(o), a, p, A) || 0) - o._delay),
                  !w &&
                    1 === c &&
                    u.delay &&
                    ((o._delay = v = u.delay), (o._start += v), (u.delay = 0)),
                  s.to(p, u, d(a, p, A));
              }
              s.duration() ? (_ = v = 0) : (o.timeline = 0);
            }
            _ || o.duration((_ = s.duration()));
          } else o.timeline = 0;
          return (
            !0 === b && ((Qe = h(o)), f.killTweensOf(A), (Qe = 0)),
            O && Zt(O, h(o)),
            (y ||
              (!_ &&
                !x &&
                o._start === Et(O._time) &&
                J(y) &&
                Vt(h(o)) &&
                'nested' !== O.data)) &&
              ((o._tTime = -1e-8), o.render(Math.max(0, -v))),
            P && te(h(o), P),
            o
          );
        }
        c(e, t);
        var r = e.prototype;
        return (
          (r.render = function (t, e, r) {
            var n,
              i,
              o,
              s,
              a,
              u,
              h,
              c,
              f,
              l = this._time,
              p = this._tDur,
              d = this._dur,
              m = t > p - N && t >= 0 ? p : t < N ? 0 : t;
            if (d) {
              if (
                m !== this._tTime ||
                !t ||
                r ||
                (this._startAt && this._zTime < 0 != t < 0)
              ) {
                if (((n = m), (c = this.timeline), this._repeat)) {
                  if (
                    ((s = d + this._rDelay),
                    (n = Et(m % s)),
                    m === p
                      ? ((o = this._repeat), (n = d))
                      : ((o = ~~(m / s)) && o === m / s && ((n = d), o--),
                        n > d && (n = d)),
                    (u = this._yoyo && 1 & o) &&
                      ((f = this._yEase), (n = d - n)),
                    (a = Wt(this._tTime, s)),
                    n === l && !r && this._initted)
                  )
                    return this;
                  o !== a &&
                    (c && this._yEase && Ne(c, u),
                    !this.vars.repeatRefresh ||
                      u ||
                      this._lock ||
                      ((this._lock = r = 1),
                      (this.render(Et(s * o), !0).invalidate()._lock = 0)));
                }
                if (!this._initted) {
                  if (ee(this, t < 0 ? t : n, r, e))
                    return (this._tTime = 0), this;
                  if (d !== this._dur) return this.render(t, e, r);
                }
                for (
                  this._tTime = m,
                    this._time = n,
                    !this._act &&
                      this._ts &&
                      ((this._act = 1), (this._lazy = 0)),
                    this.ratio = h = (f || this._ease)(n / d),
                    this._from && (this.ratio = h = 1 - h),
                    n && !l && !e && xe(this, 'onStart'),
                    i = this._pt;
                  i;

                )
                  i.r(h, i.d), (i = i._next);
                (c &&
                  c.render(t < 0 ? t : !n && u ? -1e-8 : c._dur * h, e, r)) ||
                  (this._startAt && (this._zTime = t)),
                  this._onUpdate &&
                    !e &&
                    (t < 0 && this._startAt && this._startAt.render(t, !0, r),
                    xe(this, 'onUpdate')),
                  this._repeat &&
                    o !== a &&
                    this.vars.onRepeat &&
                    !e &&
                    this.parent &&
                    xe(this, 'onRepeat'),
                  (m !== this._tDur && m) ||
                    this._tTime !== m ||
                    (t < 0 &&
                      this._startAt &&
                      !this._onUpdate &&
                      this._startAt.render(t, !0, !0),
                    (t || !d) &&
                      ((m === this._tDur && this._ts > 0) ||
                        (!m && this._ts < 0)) &&
                      Ht(this, 1),
                    e ||
                      (t < 0 && !l) ||
                      (!m && !l) ||
                      (xe(
                        this,
                        m === p ? 'onComplete' : 'onReverseComplete',
                        !0
                      ),
                      this._prom &&
                        !(m < p && this.timeScale() > 0) &&
                        this._prom()));
              }
            } else
              !(function (t, e, r, n) {
                var i,
                  o,
                  s = t.ratio,
                  a =
                    e < 0 ||
                    (!e && s && !t._start && t._zTime > N && !t._dp._lock) ||
                    ((t._ts < 0 || t._dp._ts < 0) &&
                      'isFromStart' !== t.data &&
                      'isStart' !== t.data)
                      ? 0
                      : 1,
                  u = t._rDelay,
                  h = 0;
                if (
                  (u &&
                    t._repeat &&
                    ((h = ae(0, t._tDur, e)),
                    Wt(h, u) !== (o = Wt(t._tTime, u)) &&
                      ((s = 1 - a),
                      t.vars.repeatRefresh && t._initted && t.invalidate())),
                  a !== s || n || t._zTime === N || (!e && t._zTime))
                ) {
                  if (!t._initted && ee(t, e, n, r)) return;
                  for (
                    o = t._zTime,
                      t._zTime = e || (r ? N : 0),
                      r || (r = e && !o),
                      t.ratio = a,
                      t._from && (a = 1 - a),
                      t._time = 0,
                      t._tTime = h,
                      r || xe(t, 'onStart'),
                      i = t._pt;
                    i;

                  )
                    i.r(a, i.d), (i = i._next);
                  t._startAt && e < 0 && t._startAt.render(e, !0, !0),
                    t._onUpdate && !r && xe(t, 'onUpdate'),
                    h && t._repeat && !r && t.parent && xe(t, 'onRepeat'),
                    (e >= t._tDur || e < 0) &&
                      t.ratio === a &&
                      (a && Ht(t, 1),
                      r ||
                        (xe(t, a ? 'onComplete' : 'onReverseComplete', !0),
                        t._prom && t._prom()));
                } else t._zTime || (t._zTime = e);
              })(this, t, e, r);
            return this;
          }),
          (r.targets = function () {
            return this._targets;
          }),
          (r.invalidate = function () {
            return (
              (this._pt = this._op = this._startAt = this._onUpdate = this._act = this._lazy = 0),
              (this._ptLookup = []),
              this.timeline && this.timeline.invalidate(),
              t.prototype.invalidate.call(this)
            );
          }),
          (r.kill = function (t, e) {
            if (
              (void 0 === e && (e = 'all'),
              !(t || (e && 'all' !== e)) && ((this._lazy = 0), this.parent))
            )
              return Te(this);
            if (this.timeline) {
              var r = this.timeline.totalDuration();
              return (
                this.timeline.killTweensOf(t, e, Qe && !0 !== Qe.vars.overwrite)
                  ._first || Te(this),
                this.parent &&
                  r !== this.timeline.totalDuration() &&
                  re(this, (this._dur * this.timeline._tDur) / r, 0, 1),
                this
              );
            }
            var n,
              i,
              o,
              s,
              a,
              u,
              h,
              c = this._targets,
              f = t ? le(t) : c,
              l = this._ptLookup,
              p = this._pt;
            if (
              (!e || 'all' === e) &&
              (function (t, e) {
                for (
                  var r = t.length, n = r === e.length;
                  n && r-- && t[r] === e[r];

                );
                return r < 0;
              })(c, f)
            )
              return 'all' === e && (this._pt = 0), Te(this);
            for (
              n = this._op = this._op || [],
                'all' !== e &&
                  (W(e) &&
                    ((a = {}),
                    St(e, function (t) {
                      return (a[t] = 1);
                    }),
                    (e = a)),
                  (e = (function (t, e) {
                    var r,
                      n,
                      i,
                      o,
                      s = t[0] ? Ot(t[0]).harness : 0,
                      a = s && s.aliases;
                    if (!a) return e;
                    for (n in ((r = zt({}, e)), a))
                      if ((n in r))
                        for (i = (o = a[n].split(',')).length; i--; )
                          r[o[i]] = r[n];
                    return r;
                  })(c, e))),
                h = c.length;
              h--;

            )
              if (~f.indexOf(c[h]))
                for (a in ((i = l[h]),
                'all' === e
                  ? ((n[h] = e), (s = i), (o = {}))
                  : ((o = n[h] = n[h] || {}), (s = e)),
                s))
                  (u = i && i[a]) &&
                    (('kill' in u.d && !0 !== u.d.kill(a)) ||
                      Ut(this, u, '_pt'),
                    delete i[a]),
                    'all' !== o && (o[a] = 1);
            return this._initted && !this._pt && p && Te(this), this;
          }),
          (e.to = function (t, r) {
            return new e(t, r, arguments[2]);
          }),
          (e.from = function (t, r) {
            return new e(t, Ct(arguments, 1));
          }),
          (e.delayedCall = function (t, r, n, i) {
            return new e(r, 0, {
              immediateRender: !1,
              lazy: !1,
              overwrite: !1,
              delay: t,
              onComplete: r,
              onReverseComplete: r,
              onCompleteParams: n,
              onReverseCompleteParams: n,
              callbackScope: i,
            });
          }),
          (e.fromTo = function (t, r, n) {
            return new e(t, Ct(arguments, 2));
          }),
          (e.set = function (t, r) {
            return (
              (r.duration = 0), r.repeatDelay || (r.repeat = 0), new e(t, r)
            );
          }),
          (e.killTweensOf = function (t, e, r) {
            return f.killTweensOf(t, e, r);
          }),
          e
        );
      })(We);
    qt(ir.prototype, {
      _targets: [],
      _lazy: 0,
      _startAt: 0,
      _op: 0,
      _onInit: 0,
    }),
      St('staggerTo,staggerFrom,staggerFromTo', function (t) {
        ir[t] = function () {
          var e = new Ge(),
            r = he.call(arguments, 0);
          return (
            r.splice('staggerFromTo' === t ? 5 : 4, 0, 0), e[t].apply(e, r)
          );
        };
      });
    var or = function (t, e, r) {
        return (t[e] = r);
      },
      sr = function (t, e, r) {
        return t[e](r);
      },
      ar = function (t, e, r, n) {
        return t[e](n.fp, r);
      },
      ur = function (t, e, r) {
        return t.setAttribute(e, r);
      },
      hr = function (t, e) {
        return G(t[e]) ? sr : K(t[e]) && t.setAttribute ? ur : or;
      },
      cr = function (t, e) {
        return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4, e);
      },
      fr = function (t, e) {
        return e.set(e.t, e.p, !!(e.s + e.c * t), e);
      },
      lr = function (t, e) {
        var r = e._pt,
          n = '';
        if (!t && e.b) n = e.b;
        else if (1 === t && e.e) n = e.e;
        else {
          for (; r; )
            (n =
              r.p +
              (r.m
                ? r.m(r.s + r.c * t)
                : Math.round(1e4 * (r.s + r.c * t)) / 1e4) +
              n),
              (r = r._next);
          n += e.c;
        }
        e.set(e.t, e.p, n, e);
      },
      pr = function (t, e) {
        for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
      },
      dr = function (t, e, r, n) {
        for (var i, o = this._pt; o; )
          (i = o._next), o.p === n && o.modifier(t, e, r), (o = i);
      },
      mr = function (t) {
        for (var e, r, n = this._pt; n; )
          (r = n._next),
            (n.p === t && !n.op) || n.op === t
              ? Ut(this, n, '_pt')
              : n.dep || (e = 1),
            (n = r);
        return !e;
      },
      gr = function (t, e, r, n) {
        n.mSet(t, e, n.m.call(n.tween, r, n.mt), n);
      },
      _r = function (t) {
        for (var e, r, n, i, o = t._pt; o; ) {
          for (e = o._next, r = n; r && r.pr > o.pr; ) r = r._next;
          (o._prev = r ? r._prev : i) ? (o._prev._next = o) : (n = o),
            (o._next = r) ? (r._prev = o) : (i = o),
            (o = e);
        }
        t._pt = n;
      },
      vr = (function () {
        function t(t, e, r, n, i, o, s, a, u) {
          (this.t = e),
            (this.s = n),
            (this.c = i),
            (this.p = r),
            (this.r = o || cr),
            (this.d = s || this),
            (this.set = a || or),
            (this.pr = u || 0),
            (this._next = t),
            t && (t._prev = this);
        }
        return (
          (t.prototype.modifier = function (t, e, r) {
            (this.mSet = this.mSet || this.set),
              (this.set = gr),
              (this.m = t),
              (this.mt = r),
              (this.tween = e);
          }),
          t
        );
      })();
    St(
      Pt +
        'parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger',
      function (t) {
        return (_t[t] = 1);
      }
    ),
      (ct.TweenMax = ct.TweenLite = ir),
      (ct.TimelineLite = ct.TimelineMax = Ge),
      (f = new Ge({
        sortChildren: !1,
        defaults: B,
        autoRemoveChildren: !0,
        id: 'root',
        smoothChildTiming: !0,
      })),
      (z.stringFilter = De);
    var yr = {
      registerPlugin: function () {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
          e[r] = arguments[r];
        e.forEach(function (t) {
          return Pe(t);
        });
      },
      timeline: function (t) {
        return new Ge(t);
      },
      getTweensOf: function (t, e) {
        return f.getTweensOf(t, e);
      },
      getProperty: function (t, e, r, n) {
        W(t) && (t = le(t)[0]);
        var i = Ot(t || {}).get,
          o = r ? jt : Lt;
        return (
          'native' === r && (r = ''),
          t
            ? e
              ? o(((wt[e] && wt[e].get) || i)(t, e, r, n))
              : function (e, r, n) {
                  return o(((wt[e] && wt[e].get) || i)(t, e, r, n));
                }
            : t
        );
      },
      quickSetter: function (t, e, r) {
        if ((t = le(t)).length > 1) {
          var n = t.map(function (t) {
              return xr.quickSetter(t, e, r);
            }),
            i = n.length;
          return function (t) {
            for (var e = i; e--; ) n[e](t);
          };
        }
        t = t[0] || {};
        var o = wt[e],
          s = Ot(t),
          a = (s.harness && (s.harness.aliases || {})[e]) || e,
          u = o
            ? function (e) {
                var n = new o();
                (_._pt = 0),
                  n.init(t, r ? e + r : e, _, 0, [t]),
                  n.render(1, n),
                  _._pt && pr(1, _);
              }
            : s.set(t, a);
        return o
          ? u
          : function (e) {
              return u(t, a, r ? e + r : e, s, 1);
            };
      },
      isTweening: function (t) {
        return f.getTweensOf(t, !0).length > 0;
      },
      defaults: function (t) {
        return t && t.ease && (t.ease = Ue(t.ease, B.ease)), Bt(B, t || {});
      },
      config: function (t) {
        return Bt(z, t || {});
      },
      registerEffect: function (t) {
        var e = t.name,
          r = t.effect,
          n = t.plugins,
          i = t.defaults,
          o = t.extendTimeline;
        (n || '').split(',').forEach(function (t) {
          return (
            t &&
            !wt[t] &&
            !ct[t] &&
            dt(e + ' effect requires ' + t + ' plugin.')
          );
        }),
          (bt[e] = function (t, e, n) {
            return r(le(t), qt(e || {}, i), n);
          }),
          o &&
            (Ge.prototype[e] = function (t, r, n) {
              return this.add(bt[e](t, Z(r) ? r : (n = r) && {}, this), n);
            });
      },
      registerEase: function (t, e) {
        qe[t] = Ue(e);
      },
      parseEase: function (t, e) {
        return arguments.length ? Ue(t, e) : qe;
      },
      getById: function (t) {
        return f.getById(t);
      },
      exportRoot: function (t, e) {
        void 0 === t && (t = {});
        var r,
          n,
          i = new Ge(t);
        for (
          i.smoothChildTiming = J(t.smoothChildTiming),
            f.remove(i),
            i._dp = 0,
            i._time = i._tTime = f._time,
            r = f._first;
          r;

        )
          (n = r._next),
            (!e &&
              !r._dur &&
              r instanceof ir &&
              r.vars.onComplete === r._targets[0]) ||
              Jt(i, r, r._start - r._delay),
            (r = n);
        return Jt(f, i, 0), i;
      },
      utils: {
        wrap: function t(e, r, n) {
          var i = r - e;
          return nt(e)
            ? ve(e, t(0, e.length), r)
            : se(n, function (t) {
                return ((i + ((t - e) % i)) % i) + e;
              });
        },
        wrapYoyo: function t(e, r, n) {
          var i = r - e,
            o = 2 * i;
          return nt(e)
            ? ve(e, t(0, e.length - 1), r)
            : se(n, function (t) {
                return e + ((t = (o + ((t - e) % o)) % o || 0) > i ? o - t : t);
              });
        },
        distribute: de,
        random: _e,
        snap: ge,
        normalize: function (t, e, r) {
          return we(t, e, 0, 1, r);
        },
        getUnit: ue,
        clamp: function (t, e, r) {
          return se(r, function (r) {
            return ae(t, e, r);
          });
        },
        splitColor: Se,
        toArray: le,
        mapRange: we,
        pipe: function () {
          for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
            e[r] = arguments[r];
          return function (t) {
            return e.reduce(function (t, e) {
              return e(t);
            }, t);
          };
        },
        unitize: function (t, e) {
          return function (r) {
            return t(parseFloat(r)) + (e || ue(r));
          };
        },
        interpolate: function t(e, r, n, i) {
          var o = isNaN(e + r)
            ? 0
            : function (t) {
                return (1 - t) * e + t * r;
              };
          if (!o) {
            var s,
              a,
              u,
              h,
              c,
              f = W(e),
              l = {};
            if ((!0 === n && (i = 1) && (n = null), f))
              (e = { p: e }), (r = { p: r });
            else if (nt(e) && !nt(r)) {
              for (u = [], h = e.length, c = h - 2, a = 1; a < h; a++)
                u.push(t(e[a - 1], e[a]));
              h--,
                (o = function (t) {
                  t *= h;
                  var e = Math.min(c, ~~t);
                  return u[e](t - e);
                }),
                (n = r);
            } else i || (e = zt(nt(e) ? [] : {}, e));
            if (!u) {
              for (s in r) Ze.call(l, e, s, 'get', r[s]);
              o = function (t) {
                return pr(t, l) || (f ? e.p : e);
              };
            }
          }
          return se(n, o);
        },
        shuffle: pe,
      },
      install: lt,
      effects: bt,
      ticker: Le,
      updateRoot: Ge.updateRoot,
      plugins: wt,
      globalTimeline: f,
      core: {
        PropTween: vr,
        globals: mt,
        Tween: ir,
        Timeline: Ge,
        Animation: We,
        getCache: Ot,
        _removeLinkedListItem: Ut,
      },
    };
    St('to,from,fromTo,delayedCall,set,killTweensOf', function (t) {
      return (yr[t] = ir[t]);
    }),
      Le.add(Ge.updateRoot),
      (_ = yr.to({}, { duration: 0 }));
    var wr = function (t, e) {
        for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; )
          r = r._next;
        return r;
      },
      br = function (t, e) {
        return {
          name: t,
          rawVars: 1,
          init: function (t, r, n) {
            n._onInit = function (t) {
              var n, i;
              if (
                (W(r) &&
                  ((n = {}),
                  St(r, function (t) {
                    return (n[t] = 1);
                  }),
                  (r = n)),
                e)
              ) {
                for (i in ((n = {}), r)) n[i] = e(r[i]);
                r = n;
              }
              !(function (t, e) {
                var r,
                  n,
                  i,
                  o = t._targets;
                for (r in e)
                  for (n = o.length; n--; )
                    (i = t._ptLookup[n][r]) &&
                      (i = i.d) &&
                      (i._pt && (i = wr(i, r)),
                      i && i.modifier && i.modifier(e[r], t, o[n], r));
              })(t, r);
            };
          },
        };
      },
      xr =
        yr.registerPlugin(
          {
            name: 'attr',
            init: function (t, e, r, n, i) {
              var o, s;
              for (o in e)
                (s = this.add(
                  t,
                  'setAttribute',
                  (t.getAttribute(o) || 0) + '',
                  e[o],
                  n,
                  i,
                  0,
                  0,
                  o
                )) && (s.op = o),
                  this._props.push(o);
            },
          },
          {
            name: 'endArray',
            init: function (t, e) {
              for (var r = e.length; r--; ) this.add(t, r, t[r] || 0, e[r]);
            },
          },
          br('roundProps', me),
          br('modifiers'),
          br('snap', ge)
        ) || yr;
    (ir.version = Ge.version = xr.version = '3.5.1'), (m = 1), tt() && je();
    qe.Power0,
      qe.Power1,
      qe.Power2,
      qe.Power3,
      qe.Power4,
      qe.Linear,
      qe.Quad,
      qe.Cubic,
      qe.Quart,
      qe.Quint,
      qe.Strong,
      qe.Elastic,
      qe.Back,
      qe.SteppedEase,
      qe.Bounce,
      qe.Sine,
      qe.Expo,
      qe.Circ;
    var Tr,
      Pr,
      kr,
      Or,
      Ar,
      Sr,
      Er,
      Mr,
      Cr = {},
      Rr = 180 / Math.PI,
      Dr = Math.PI / 180,
      Lr = Math.atan2,
      jr = /([A-Z])/g,
      qr = /(?:left|right|width|margin|padding|x)/i,
      Fr = /[\s,\(]\S/,
      zr = {
        autoAlpha: 'opacity,visibility',
        scale: 'scaleX,scaleY',
        alpha: 'opacity',
      },
      Br = function (t, e) {
        return e.set(
          e.t,
          e.p,
          Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
          e
        );
      },
      Ir = function (t, e) {
        return e.set(
          e.t,
          e.p,
          1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
          e
        );
      },
      Nr = function (t, e) {
        return e.set(
          e.t,
          e.p,
          t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b,
          e
        );
      },
      Ur = function (t, e) {
        var r = e.s + e.c * t;
        e.set(e.t, e.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + e.u, e);
      },
      Hr = function (t, e) {
        return e.set(e.t, e.p, t ? e.e : e.b, e);
      },
      Yr = function (t, e) {
        return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
      },
      Xr = function (t, e, r) {
        return (t.style[e] = r);
      },
      Vr = function (t, e, r) {
        return t.style.setProperty(e, r);
      },
      $r = function (t, e, r) {
        return (t._gsap[e] = r);
      },
      Wr = function (t, e, r) {
        return (t._gsap.scaleX = t._gsap.scaleY = r);
      },
      Gr = function (t, e, r, n, i) {
        var o = t._gsap;
        (o.scaleX = o.scaleY = r), o.renderTransform(i, o);
      },
      Qr = function (t, e, r, n, i) {
        var o = t._gsap;
        (o[e] = r), o.renderTransform(i, o);
      },
      Kr = 'transform',
      Zr = Kr + 'Origin',
      Jr = function (t, e) {
        var r = Pr.createElementNS
          ? Pr.createElementNS(
              (e || 'http://www.w3.org/1999/xhtml').replace(/^https/, 'http'),
              t
            )
          : Pr.createElement(t);
        return r.style ? r : Pr.createElement(t);
      },
      tn = function t(e, r, n) {
        var i = getComputedStyle(e);
        return (
          i[r] ||
          i.getPropertyValue(r.replace(jr, '-$1').toLowerCase()) ||
          i.getPropertyValue(r) ||
          (!n && t(e, rn(r) || r, 1)) ||
          ''
        );
      },
      en = 'O,Moz,ms,Ms,Webkit'.split(','),
      rn = function (t, e, r) {
        var n = (e || Ar).style,
          i = 5;
        if (t in n && !r) return t;
        for (
          t = t.charAt(0).toUpperCase() + t.substr(1);
          i-- && !(en[i] + t in n);

        );
        return i < 0 ? null : (3 === i ? 'ms' : i >= 0 ? en[i] : '') + t;
      },
      nn = function () {
        'undefined' != typeof window &&
          window.document &&
          ((Tr = window),
          (Pr = Tr.document),
          (kr = Pr.documentElement),
          (Ar = Jr('div') || { style: {} }),
          (Sr = Jr('div')),
          (Kr = rn(Kr)),
          (Zr = Kr + 'Origin'),
          (Ar.style.cssText =
            'border-width:0;line-height:0;position:absolute;padding:0'),
          (Mr = !!rn('perspective')),
          (Or = 1));
      },
      on = function t(e) {
        var r,
          n = Jr(
            'svg',
            (this.ownerSVGElement &&
              this.ownerSVGElement.getAttribute('xmlns')) ||
              'http://www.w3.org/2000/svg'
          ),
          i = this.parentNode,
          o = this.nextSibling,
          s = this.style.cssText;
        if (
          (kr.appendChild(n),
          n.appendChild(this),
          (this.style.display = 'block'),
          e)
        )
          try {
            (r = this.getBBox()),
              (this._gsapBBox = this.getBBox),
              (this.getBBox = t);
          } catch (t) {}
        else this._gsapBBox && (r = this._gsapBBox());
        return (
          i && (o ? i.insertBefore(this, o) : i.appendChild(this)),
          kr.removeChild(n),
          (this.style.cssText = s),
          r
        );
      },
      sn = function (t, e) {
        for (var r = e.length; r--; )
          if (t.hasAttribute(e[r])) return t.getAttribute(e[r]);
      },
      an = function (t) {
        var e;
        try {
          e = t.getBBox();
        } catch (r) {
          e = on.call(t, !0);
        }
        return (
          (e && (e.width || e.height)) ||
            t.getBBox === on ||
            (e = on.call(t, !0)),
          !e || e.width || e.x || e.y
            ? e
            : {
                x: +sn(t, ['x', 'cx', 'x1']) || 0,
                y: +sn(t, ['y', 'cy', 'y1']) || 0,
                width: 0,
                height: 0,
              }
        );
      },
      un = function (t) {
        return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !an(t));
      },
      hn = function (t, e) {
        if (e) {
          var r = t.style;
          e in Cr && e !== Zr && (e = Kr),
            r.removeProperty
              ? (('ms' !== e.substr(0, 2) && 'webkit' !== e.substr(0, 6)) ||
                  (e = '-' + e),
                r.removeProperty(e.replace(jr, '-$1').toLowerCase()))
              : r.removeAttribute(e);
        }
      },
      cn = function (t, e, r, n, i, o) {
        var s = new vr(t._pt, e, r, 0, 1, o ? Yr : Hr);
        return (t._pt = s), (s.b = n), (s.e = i), t._props.push(r), s;
      },
      fn = { deg: 1, rad: 1, turn: 1 },
      ln = function t(e, r, n, i) {
        var o,
          s,
          a,
          u,
          h = parseFloat(n) || 0,
          c = (n + '').trim().substr((h + '').length) || 'px',
          f = Ar.style,
          l = qr.test(r),
          p = 'svg' === e.tagName.toLowerCase(),
          d = (p ? 'client' : 'offset') + (l ? 'Width' : 'Height'),
          m = 100,
          g = 'px' === i,
          _ = '%' === i;
        return i === c || !h || fn[i] || fn[c]
          ? h
          : ('px' !== c && !g && (h = t(e, r, n, 'px')),
            (u = e.getCTM && un(e)),
            _ && (Cr[r] || ~r.indexOf('adius'))
              ? Et((h / (u ? e.getBBox()[l ? 'width' : 'height'] : e[d])) * m)
              : ((f[l ? 'width' : 'height'] = m + (g ? c : i)),
                (s =
                  ~r.indexOf('adius') || ('em' === i && e.appendChild && !p)
                    ? e
                    : e.parentNode),
                u && (s = (e.ownerSVGElement || {}).parentNode),
                (s && s !== Pr && s.appendChild) || (s = Pr.body),
                (a = s._gsap) && _ && a.width && l && a.time === Le.time
                  ? Et((h / a.width) * m)
                  : ((_ || '%' === c) && (f.position = tn(e, 'position')),
                    s === e && (f.position = 'static'),
                    s.appendChild(Ar),
                    (o = Ar[d]),
                    s.removeChild(Ar),
                    (f.position = 'absolute'),
                    l && _ && (((a = Ot(s)).time = Le.time), (a.width = s[d])),
                    Et(g ? (o * h) / m : o && h ? (m / o) * h : 0))));
      },
      pn = function (t, e, r, n) {
        var i;
        return (
          Or || nn(),
          e in zr &&
            'transform' !== e &&
            ~(e = zr[e]).indexOf(',') &&
            (e = e.split(',')[0]),
          Cr[e] && 'transform' !== e
            ? ((i = Pn(t, n)),
              (i =
                'transformOrigin' !== e
                  ? i[e]
                  : kn(tn(t, Zr)) + ' ' + i.zOrigin + 'px'))
            : (!(i = t.style[e]) ||
                'auto' === i ||
                n ||
                ~(i + '').indexOf('calc(')) &&
              (i =
                (_n[e] && _n[e](t, e, r)) ||
                tn(t, e) ||
                At(t, e) ||
                ('opacity' === e ? 1 : 0)),
          r && !~(i + '').indexOf(' ') ? ln(t, e, i, r) + r : i
        );
      },
      dn = function (t, e, r, n) {
        if (!r || 'none' === r) {
          var i = rn(e, t, 1),
            o = i && tn(t, i, 1);
          o && o !== r
            ? ((e = i), (r = o))
            : 'borderColor' === e && (r = tn(t, 'borderTopColor'));
        }
        var s,
          a,
          u,
          h,
          c,
          f,
          l,
          p,
          d,
          m,
          g,
          _,
          v = new vr(this._pt, t.style, e, 0, 1, lr),
          y = 0,
          w = 0;
        if (
          ((v.b = r),
          (v.e = n),
          (r += ''),
          'auto' === (n += '') &&
            ((t.style[e] = n), (n = tn(t, e) || n), (t.style[e] = r)),
          De((s = [r, n])),
          (n = s[1]),
          (u = (r = s[0]).match(st) || []),
          (n.match(st) || []).length)
        ) {
          for (; (a = st.exec(n)); )
            (l = a[0]),
              (d = n.substring(y, a.index)),
              c
                ? (c = (c + 1) % 5)
                : ('rgba(' !== d.substr(-5) && 'hsla(' !== d.substr(-5)) ||
                  (c = 1),
              l !== (f = u[w++] || '') &&
                ((h = parseFloat(f) || 0),
                (g = f.substr((h + '').length)),
                (_ = '=' === l.charAt(1) ? +(l.charAt(0) + '1') : 0) &&
                  (l = l.substr(2)),
                (p = parseFloat(l)),
                (m = l.substr((p + '').length)),
                (y = st.lastIndex - m.length),
                m ||
                  ((m = m || z.units[e] || g),
                  y === n.length && ((n += m), (v.e += m))),
                g !== m && (h = ln(t, e, f, m) || 0),
                (v._pt = {
                  _next: v._pt,
                  p: d || 1 === w ? d : ',',
                  s: h,
                  c: _ ? _ * p : p - h,
                  m: c && c < 4 ? Math.round : 0,
                }));
          v.c = y < n.length ? n.substring(y, n.length) : '';
        } else v.r = 'display' === e && 'none' === n ? Yr : Hr;
        return ut.test(n) && (v.e = 0), (this._pt = v), v;
      },
      mn = {
        top: '0%',
        bottom: '100%',
        left: '0%',
        right: '100%',
        center: '50%',
      },
      gn = function (t, e) {
        if (e.tween && e.tween._time === e.tween._dur) {
          var r,
            n,
            i,
            o = e.t,
            s = o.style,
            a = e.u,
            u = o._gsap;
          if ('all' === a || !0 === a) (s.cssText = ''), (n = 1);
          else
            for (i = (a = a.split(',')).length; --i > -1; )
              (r = a[i]),
                Cr[r] && ((n = 1), (r = 'transformOrigin' === r ? Zr : Kr)),
                hn(o, r);
          n &&
            (hn(o, Kr),
            u &&
              (u.svg && o.removeAttribute('transform'),
              Pn(o, 1),
              (u.uncache = 1)));
        }
      },
      _n = {
        clearProps: function (t, e, r, n, i) {
          if ('isFromStart' !== i.data) {
            var o = (t._pt = new vr(t._pt, e, r, 0, 0, gn));
            return (o.u = n), (o.pr = -10), (o.tween = i), t._props.push(r), 1;
          }
        },
      },
      vn = [1, 0, 0, 1, 0, 0],
      yn = {},
      wn = function (t) {
        return 'matrix(1, 0, 0, 1, 0, 0)' === t || 'none' === t || !t;
      },
      bn = function (t) {
        var e = tn(t, Kr);
        return wn(e) ? vn : e.substr(7).match(ot).map(Et);
      },
      xn = function (t, e) {
        var r,
          n,
          i,
          o,
          s = t._gsap || Ot(t),
          a = t.style,
          u = bn(t);
        return s.svg && t.getAttribute('transform')
          ? '1,0,0,1,0,0' ===
            (u = [
              (i = t.transform.baseVal.consolidate().matrix).a,
              i.b,
              i.c,
              i.d,
              i.e,
              i.f,
            ]).join(',')
            ? vn
            : u
          : (u !== vn ||
              t.offsetParent ||
              t === kr ||
              s.svg ||
              ((i = a.display),
              (a.display = 'block'),
              ((r = t.parentNode) && t.offsetParent) ||
                ((o = 1), (n = t.nextSibling), kr.appendChild(t)),
              (u = bn(t)),
              i ? (a.display = i) : hn(t, 'display'),
              o &&
                (n
                  ? r.insertBefore(t, n)
                  : r
                  ? r.appendChild(t)
                  : kr.removeChild(t))),
            e && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u);
      },
      Tn = function (t, e, r, n, i, o) {
        var s,
          a,
          u,
          h = t._gsap,
          c = i || xn(t, !0),
          f = h.xOrigin || 0,
          l = h.yOrigin || 0,
          p = h.xOffset || 0,
          d = h.yOffset || 0,
          m = c[0],
          g = c[1],
          _ = c[2],
          v = c[3],
          y = c[4],
          w = c[5],
          b = e.split(' '),
          x = parseFloat(b[0]) || 0,
          T = parseFloat(b[1]) || 0;
        r
          ? c !== vn &&
            (a = m * v - g * _) &&
            ((u = x * (-g / a) + T * (m / a) - (m * w - g * y) / a),
            (x = x * (v / a) + T * (-_ / a) + (_ * w - v * y) / a),
            (T = u))
          : ((x =
              (s = an(t)).x + (~b[0].indexOf('%') ? (x / 100) * s.width : x)),
            (T =
              s.y + (~(b[1] || b[0]).indexOf('%') ? (T / 100) * s.height : T))),
          n || (!1 !== n && h.smooth)
            ? ((y = x - f),
              (w = T - l),
              (h.xOffset = p + (y * m + w * _) - y),
              (h.yOffset = d + (y * g + w * v) - w))
            : (h.xOffset = h.yOffset = 0),
          (h.xOrigin = x),
          (h.yOrigin = T),
          (h.smooth = !!n),
          (h.origin = e),
          (h.originIsAbsolute = !!r),
          (t.style[Zr] = '0px 0px'),
          o &&
            (cn(o, h, 'xOrigin', f, x),
            cn(o, h, 'yOrigin', l, T),
            cn(o, h, 'xOffset', p, h.xOffset),
            cn(o, h, 'yOffset', d, h.yOffset)),
          t.setAttribute('data-svg-origin', x + ' ' + T);
      },
      Pn = function (t, e) {
        var r = t._gsap || new $e(t);
        if ('x' in r && !e && !r.uncache) return r;
        var n,
          i,
          o,
          s,
          a,
          u,
          h,
          c,
          f,
          l,
          p,
          d,
          m,
          g,
          _,
          v,
          y,
          w,
          b,
          x,
          T,
          P,
          k,
          O,
          A,
          S,
          E,
          M,
          C,
          R,
          D,
          L,
          j = t.style,
          q = r.scaleX < 0,
          F = 'px',
          B = 'deg',
          I = tn(t, Zr) || '0';
        return (
          (n = i = o = u = h = c = f = l = p = 0),
          (s = a = 1),
          (r.svg = !(!t.getCTM || !un(t))),
          (g = xn(t, r.svg)),
          r.svg &&
            ((O = !r.uncache && t.getAttribute('data-svg-origin')),
            Tn(t, O || I, !!O || r.originIsAbsolute, !1 !== r.smooth, g)),
          (d = r.xOrigin || 0),
          (m = r.yOrigin || 0),
          g !== vn &&
            ((w = g[0]),
            (b = g[1]),
            (x = g[2]),
            (T = g[3]),
            (n = P = g[4]),
            (i = k = g[5]),
            6 === g.length
              ? ((s = Math.sqrt(w * w + b * b)),
                (a = Math.sqrt(T * T + x * x)),
                (u = w || b ? Lr(b, w) * Rr : 0),
                (f = x || T ? Lr(x, T) * Rr + u : 0) && (a *= Math.cos(f * Dr)),
                r.svg &&
                  ((n -= d - (d * w + m * x)), (i -= m - (d * b + m * T))))
              : ((L = g[6]),
                (R = g[7]),
                (E = g[8]),
                (M = g[9]),
                (C = g[10]),
                (D = g[11]),
                (n = g[12]),
                (i = g[13]),
                (o = g[14]),
                (h = (_ = Lr(L, C)) * Rr),
                _ &&
                  ((O = P * (v = Math.cos(-_)) + E * (y = Math.sin(-_))),
                  (A = k * v + M * y),
                  (S = L * v + C * y),
                  (E = P * -y + E * v),
                  (M = k * -y + M * v),
                  (C = L * -y + C * v),
                  (D = R * -y + D * v),
                  (P = O),
                  (k = A),
                  (L = S)),
                (c = (_ = Lr(-x, C)) * Rr),
                _ &&
                  ((v = Math.cos(-_)),
                  (D = T * (y = Math.sin(-_)) + D * v),
                  (w = O = w * v - E * y),
                  (b = A = b * v - M * y),
                  (x = S = x * v - C * y)),
                (u = (_ = Lr(b, w)) * Rr),
                _ &&
                  ((O = w * (v = Math.cos(_)) + b * (y = Math.sin(_))),
                  (A = P * v + k * y),
                  (b = b * v - w * y),
                  (k = k * v - P * y),
                  (w = O),
                  (P = A)),
                h &&
                  Math.abs(h) + Math.abs(u) > 359.9 &&
                  ((h = u = 0), (c = 180 - c)),
                (s = Et(Math.sqrt(w * w + b * b + x * x))),
                (a = Et(Math.sqrt(k * k + L * L))),
                (_ = Lr(P, k)),
                (f = Math.abs(_) > 2e-4 ? _ * Rr : 0),
                (p = D ? 1 / (D < 0 ? -D : D) : 0)),
            r.svg &&
              ((O = t.getAttribute('transform')),
              (r.forceCSS = t.setAttribute('transform', '') || !wn(tn(t, Kr))),
              O && t.setAttribute('transform', O))),
          Math.abs(f) > 90 &&
            Math.abs(f) < 270 &&
            (q
              ? ((s *= -1),
                (f += u <= 0 ? 180 : -180),
                (u += u <= 0 ? 180 : -180))
              : ((a *= -1), (f += f <= 0 ? 180 : -180))),
          (r.x =
            ((r.xPercent =
              n && Math.round(t.offsetWidth / 2) === Math.round(-n) ? -50 : 0)
              ? 0
              : n) + F),
          (r.y =
            ((r.yPercent =
              i && Math.round(t.offsetHeight / 2) === Math.round(-i) ? -50 : 0)
              ? 0
              : i) + F),
          (r.z = o + F),
          (r.scaleX = Et(s)),
          (r.scaleY = Et(a)),
          (r.rotation = Et(u) + B),
          (r.rotationX = Et(h) + B),
          (r.rotationY = Et(c) + B),
          (r.skewX = f + B),
          (r.skewY = l + B),
          (r.transformPerspective = p + F),
          (r.zOrigin = parseFloat(I.split(' ')[2]) || 0) && (j[Zr] = kn(I)),
          (r.xOffset = r.yOffset = 0),
          (r.force3D = z.force3D),
          (r.renderTransform = r.svg ? Rn : Mr ? Cn : An),
          (r.uncache = 0),
          r
        );
      },
      kn = function (t) {
        return (t = t.split(' '))[0] + ' ' + t[1];
      },
      On = function (t, e, r) {
        var n = ue(e);
        return Et(parseFloat(e) + parseFloat(ln(t, 'x', r + 'px', n))) + n;
      },
      An = function (t, e) {
        (e.z = '0px'),
          (e.rotationY = e.rotationX = '0deg'),
          (e.force3D = 0),
          Cn(t, e);
      },
      Sn = '0deg',
      En = '0px',
      Mn = ') ',
      Cn = function (t, e) {
        var r = e || this,
          n = r.xPercent,
          i = r.yPercent,
          o = r.x,
          s = r.y,
          a = r.z,
          u = r.rotation,
          h = r.rotationY,
          c = r.rotationX,
          f = r.skewX,
          l = r.skewY,
          p = r.scaleX,
          d = r.scaleY,
          m = r.transformPerspective,
          g = r.force3D,
          _ = r.target,
          v = r.zOrigin,
          y = '',
          w = ('auto' === g && t && 1 !== t) || !0 === g;
        if (v && (c !== Sn || h !== Sn)) {
          var b,
            x = parseFloat(h) * Dr,
            T = Math.sin(x),
            P = Math.cos(x);
          (x = parseFloat(c) * Dr),
            (b = Math.cos(x)),
            (o = On(_, o, T * b * -v)),
            (s = On(_, s, -Math.sin(x) * -v)),
            (a = On(_, a, P * b * -v + v));
        }
        m !== En && (y += 'perspective(' + m + Mn),
          (n || i) && (y += 'translate(' + n + '%, ' + i + '%) '),
          (w || o !== En || s !== En || a !== En) &&
            (y +=
              a !== En || w
                ? 'translate3d(' + o + ', ' + s + ', ' + a + ') '
                : 'translate(' + o + ', ' + s + Mn),
          u !== Sn && (y += 'rotate(' + u + Mn),
          h !== Sn && (y += 'rotateY(' + h + Mn),
          c !== Sn && (y += 'rotateX(' + c + Mn),
          (f === Sn && l === Sn) || (y += 'skew(' + f + ', ' + l + Mn),
          (1 === p && 1 === d) || (y += 'scale(' + p + ', ' + d + Mn),
          (_.style[Kr] = y || 'translate(0, 0)');
      },
      Rn = function (t, e) {
        var r,
          n,
          i,
          o,
          s,
          a = e || this,
          u = a.xPercent,
          h = a.yPercent,
          c = a.x,
          f = a.y,
          l = a.rotation,
          p = a.skewX,
          d = a.skewY,
          m = a.scaleX,
          g = a.scaleY,
          _ = a.target,
          v = a.xOrigin,
          y = a.yOrigin,
          w = a.xOffset,
          b = a.yOffset,
          x = a.forceCSS,
          T = parseFloat(c),
          P = parseFloat(f);
        (l = parseFloat(l)),
          (p = parseFloat(p)),
          (d = parseFloat(d)) && ((p += d = parseFloat(d)), (l += d)),
          l || p
            ? ((l *= Dr),
              (p *= Dr),
              (r = Math.cos(l) * m),
              (n = Math.sin(l) * m),
              (i = Math.sin(l - p) * -g),
              (o = Math.cos(l - p) * g),
              p &&
                ((d *= Dr),
                (s = Math.tan(p - d)),
                (i *= s = Math.sqrt(1 + s * s)),
                (o *= s),
                d &&
                  ((s = Math.tan(d)),
                  (r *= s = Math.sqrt(1 + s * s)),
                  (n *= s))),
              (r = Et(r)),
              (n = Et(n)),
              (i = Et(i)),
              (o = Et(o)))
            : ((r = m), (o = g), (n = i = 0)),
          ((T && !~(c + '').indexOf('px')) ||
            (P && !~(f + '').indexOf('px'))) &&
            ((T = ln(_, 'x', c, 'px')), (P = ln(_, 'y', f, 'px'))),
          (v || y || w || b) &&
            ((T = Et(T + v - (v * r + y * i) + w)),
            (P = Et(P + y - (v * n + y * o) + b))),
          (u || h) &&
            ((s = _.getBBox()),
            (T = Et(T + (u / 100) * s.width)),
            (P = Et(P + (h / 100) * s.height))),
          (s =
            'matrix(' +
            r +
            ',' +
            n +
            ',' +
            i +
            ',' +
            o +
            ',' +
            T +
            ',' +
            P +
            ')'),
          _.setAttribute('transform', s),
          x && (_.style[Kr] = s);
      },
      Dn = function (t, e, r, n, i, o) {
        var s,
          a,
          u = 360,
          h = W(i),
          c = parseFloat(i) * (h && ~i.indexOf('rad') ? Rr : 1),
          f = o ? c * o : c - n,
          l = n + f + 'deg';
        return (
          h &&
            ('short' === (s = i.split('_')[1]) &&
              (f %= u) !== f % 180 &&
              (f += f < 0 ? u : -360),
            'cw' === s && f < 0
              ? (f = ((f + 36e9) % u) - ~~(f / u) * u)
              : 'ccw' === s && f > 0 && (f = ((f - 36e9) % u) - ~~(f / u) * u)),
          (t._pt = a = new vr(t._pt, e, r, n, f, Ir)),
          (a.e = l),
          (a.u = 'deg'),
          t._props.push(r),
          a
        );
      },
      Ln = function (t, e, r) {
        var n,
          i,
          o,
          s,
          a,
          u,
          h,
          c = Sr.style,
          f = r._gsap;
        for (i in ((c.cssText =
          getComputedStyle(r).cssText + ';position:absolute;display:block;'),
        (c[Kr] = e),
        Pr.body.appendChild(Sr),
        (n = Pn(Sr, 1)),
        Cr))
          (o = f[i]) !== (s = n[i]) &&
            'perspective,force3D,transformOrigin,svgOrigin'.indexOf(i) < 0 &&
            ((a = ue(o) !== (h = ue(s)) ? ln(r, i, o, h) : parseFloat(o)),
            (u = parseFloat(s)),
            (t._pt = new vr(t._pt, f, i, a, u - a, Br)),
            (t._pt.u = h || 0),
            t._props.push(i));
        Pr.body.removeChild(Sr);
      };
    St('padding,margin,Width,Radius', function (t, e) {
      var r = 'Top',
        n = 'Right',
        i = 'Bottom',
        o = 'Left',
        s = (e < 3 ? [r, n, i, o] : [r + o, r + n, i + n, i + o]).map(function (
          r
        ) {
          return e < 2 ? t + r : 'border' + r + t;
        });
      _n[e > 1 ? 'border' + t : t] = function (t, e, r, n, i) {
        var o, a;
        if (arguments.length < 4)
          return (
            (o = s.map(function (e) {
              return pn(t, e, r);
            })),
            5 === (a = o.join(' ')).split(o[0]).length ? o[0] : a
          );
        (o = (n + '').split(' ')),
          (a = {}),
          s.forEach(function (t, e) {
            return (a[t] = o[e] = o[e] || o[((e - 1) / 2) | 0]);
          }),
          t.init(e, a, i);
      };
    });
    var jn,
      qn,
      Fn,
      zn = {
        name: 'css',
        register: nn,
        targetTest: function (t) {
          return t.style && t.nodeType;
        },
        init: function (t, e, r, n, i) {
          var o,
            s,
            a,
            u,
            h,
            c,
            f,
            l,
            p,
            d,
            m,
            g,
            _,
            v,
            y,
            w,
            b,
            x,
            T,
            P = this._props,
            k = t.style;
          for (f in (Or || nn(), e))
            if (
              'autoRound' !== f &&
              ((s = e[f]), !wt[f] || !Je(f, e, r, n, t, i))
            )
              if (
                ((h = typeof s),
                (c = _n[f]),
                'function' === h && (h = typeof (s = s.call(r, n, t, i))),
                'string' === h && ~s.indexOf('random(') && (s = ye(s)),
                c)
              )
                c(this, t, f, s, r) && (y = 1);
              else if ('--' === f.substr(0, 2))
                this.add(
                  k,
                  'setProperty',
                  getComputedStyle(t).getPropertyValue(f) + '',
                  s + '',
                  n,
                  i,
                  0,
                  0,
                  f
                );
              else if ('undefined' !== h) {
                if (
                  ((o = pn(t, f)),
                  (u = parseFloat(o)),
                  (d =
                    'string' === h && '=' === s.charAt(1)
                      ? +(s.charAt(0) + '1')
                      : 0) && (s = s.substr(2)),
                  (a = parseFloat(s)),
                  f in zr &&
                    ('autoAlpha' === f &&
                      (1 === u &&
                        'hidden' === pn(t, 'visibility') &&
                        a &&
                        (u = 0),
                      cn(
                        this,
                        k,
                        'visibility',
                        u ? 'inherit' : 'hidden',
                        a ? 'inherit' : 'hidden',
                        !a
                      )),
                    'scale' !== f &&
                      'transform' !== f &&
                      ~(f = zr[f]).indexOf(',') &&
                      (f = f.split(',')[0])),
                  (m = f in Cr))
                )
                  if (
                    (g ||
                      ((_ = t._gsap).renderTransform || Pn(t),
                      (v = !1 !== e.smoothOrigin && _.smooth),
                      ((g = this._pt = new vr(
                        this._pt,
                        k,
                        Kr,
                        0,
                        1,
                        _.renderTransform,
                        _,
                        0,
                        -1
                      )).dep = 1)),
                    'scale' === f)
                  )
                    (this._pt = new vr(
                      this._pt,
                      _,
                      'scaleY',
                      _.scaleY,
                      d ? d * a : a - _.scaleY
                    )),
                      P.push('scaleY', f),
                      (f += 'X');
                  else {
                    if ('transformOrigin' === f) {
                      (b = void 0),
                        (x = void 0),
                        (T = void 0),
                        (b = (w = s).split(' ')),
                        (x = b[0]),
                        (T = b[1] || '50%'),
                        ('top' !== x &&
                          'bottom' !== x &&
                          'left' !== T &&
                          'right' !== T) ||
                          ((w = x), (x = T), (T = w)),
                        (b[0] = mn[x] || x),
                        (b[1] = mn[T] || T),
                        (s = b.join(' ')),
                        _.svg
                          ? Tn(t, s, 0, v, 0, this)
                          : ((p = parseFloat(s.split(' ')[2]) || 0) !==
                              _.zOrigin && cn(this, _, 'zOrigin', _.zOrigin, p),
                            cn(this, k, f, kn(o), kn(s)));
                      continue;
                    }
                    if ('svgOrigin' === f) {
                      Tn(t, s, 1, v, 0, this);
                      continue;
                    }
                    if (f in yn) {
                      Dn(this, _, f, u, s, d);
                      continue;
                    }
                    if ('smoothOrigin' === f) {
                      cn(this, _, 'smooth', _.smooth, s);
                      continue;
                    }
                    if ('force3D' === f) {
                      _[f] = s;
                      continue;
                    }
                    if ('transform' === f) {
                      Ln(this, s, t);
                      continue;
                    }
                  }
                else f in k || (f = rn(f) || f);
                if (
                  m ||
                  ((a || 0 === a) && (u || 0 === u) && !Fr.test(s) && f in k)
                )
                  a || (a = 0),
                    (l = (o + '').substr((u + '').length)) !==
                      (p = ue(s) || (f in z.units ? z.units[f] : l)) &&
                      (u = ln(t, f, o, p)),
                    (this._pt = new vr(
                      this._pt,
                      m ? _ : k,
                      f,
                      u,
                      d ? d * a : a - u,
                      'px' !== p || !1 === e.autoRound || m ? Br : Ur
                    )),
                    (this._pt.u = p || 0),
                    l !== p && ((this._pt.b = o), (this._pt.r = Nr));
                else if (f in k) dn.call(this, t, f, o, s);
                else {
                  if (!(f in t)) {
                    pt(f, s);
                    continue;
                  }
                  this.add(t, f, t[f], s, n, i);
                }
                P.push(f);
              }
          y && _r(this);
        },
        get: pn,
        aliases: zr,
        getSetter: function (t, e, r) {
          var n = zr[e];
          return (
            n && n.indexOf(',') < 0 && (e = n),
            e in Cr && e !== Zr && (t._gsap.x || pn(t, 'x'))
              ? r && Er === r
                ? 'scale' === e
                  ? Wr
                  : $r
                : (Er = r || {}) && ('scale' === e ? Gr : Qr)
              : t.style && !K(t.style[e])
              ? Xr
              : ~e.indexOf('-')
              ? Vr
              : hr(t, e)
          );
        },
        core: { _removeProperty: hn, _getMatrix: xn },
      };
    (xr.utils.checkPrefix = rn),
      (Fn = St(
        (jn = 'x,y,z,scale,scaleX,scaleY,xPercent,yPercent') +
          ',' +
          (qn = 'rotation,rotationX,rotationY,skewX,skewY') +
          ',transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective',
        function (t) {
          Cr[t] = 1;
        }
      )),
      St(qn, function (t) {
        (z.units[t] = 'deg'), (yn[t] = 1);
      }),
      (zr[Fn[13]] = jn + ',' + qn),
      St(
        '0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY',
        function (t) {
          var e = t.split(':');
          zr[e[1]] = Fn[e[0]];
        }
      ),
      St(
        'x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective',
        function (t) {
          z.units[t] = 'px';
        }
      ),
      xr.registerPlugin(zn);
    var Bn = xr.registerPlugin(zn) || xr,
      In =
        (Bn.core.Tween,
        function (t) {
          var e = t.querySelector('header a'),
            r = t.querySelectorAll('.image'),
            n = t.querySelectorAll('.content'),
            i = t.querySelectorAll('h1'),
            o = t.querySelectorAll('img'),
            s = t.querySelector('.hero'),
            a = Bn.timeline({
              defaults: { duration: 1.2, ease: 'power4.out' },
            });
          return (
            a
              .set(s, { autoAlpha: 1 })
              .from(r, { xPercent: -101, stagger: 0.1 }, 0)
              .from(o, { xPercent: 101, stagger: 0.1 }, 0)
              .from(i, { xPercent: 70, autoAlpha: 0 }, 0)
              .from(n, { autoAlpha: 0, y: 20 }, 0.2)
              .from(e, { yPercent: 100 }, 0),
            a
          );
        }),
      Nn = function (t) {
        var e = t.querySelectorAll('header a'),
          r = t.querySelectorAll('.image'),
          n = t.querySelectorAll('img'),
          i = Bn.timeline({
            onStart: function () {
              return console.log('starting animationLeave');
            },
            onComplete: function () {
              return console.log('completed animationLeave');
            },
            defaults: { duration: 0.4, ease: 'power1.in' },
          });
        return (
          i
            .to(e, { yPercent: 100, stagger: 0.05 }, 0)
            .to(r, { xPercent: 101, stagger: 0.05 }, 0)
            .to(n, { xPercent: -101, stagger: 0.05 }, 0),
          i
        );
      },
      Un = function (t) {
        var e = t.querySelector('header a'),
          r = t.querySelectorAll('.image'),
          n = t.querySelectorAll('img'),
          i = t.querySelector('.content'),
          o = Bn.timeline({
            onStart: function () {
              return console.log('starting animationLeave');
            },
            onComplete: function () {
              return console.log('completed animationLeave');
            },
            defaults: { duration: 0.4, ease: 'power1.in' },
          });
        return (
          o
            .to(e, { yPercent: 101 }, 0)
            .to(r, { xPercent: 100, stagger: 0.05 }, 0)
            .to(i, { autoAlpha: 0, ease: 'none' }, 0)
            .to(n, { xPercent: -100, stagger: 0.05 }, 0),
          o
        );
      },
      Hn = function (t) {
        var e = t.querySelector('a.is-active span'),
          r = t.querySelectorAll('.project'),
          n = t.querySelectorAll('.image'),
          i = t.querySelectorAll('img'),
          o = Bn.timeline({
            onStart: function () {
              return console.log('starting animationEnter');
            },
            onComplete: function () {
              return console.log('completed animationEnter');
            },
            defaults: { duration: 0.9, ease: 'power4.out' },
          });
        return (
          o
            .set(r, { autoAlpha: 1 })
            .fromTo(
              e,
              { xPercent: -101 },
              { duration: 0.9, xPercent: 0, transformOrigin: 'left' },
              0
            )
            .from(n, { xPercent: -101, stagger: 0.1 }, 0)
            .from(i, { xPercent: 101, stagger: 0.1 }, 0),
          o
        );
      },
      Yn = function (t) {
        var e = t.querySelector('a.is-active span'),
          r = t.querySelectorAll('.image'),
          n = t.querySelectorAll('img'),
          i = Bn.timeline({
            onStart: function () {
              return console.log('starting animationLeave');
            },
            onComplete: function () {
              return console.log('completed animationLeave');
            },
            defaults: { duration: 0.4, ease: 'power1.in' },
          });
        return (
          i
            .to(e, { xPercent: 101 }, 0)
            .to(r, { xPercent: 101, stagger: 0.05 }, 0)
            .to(n, { xPercent: -101, stagger: 0.05 }, 0),
          i
        );
      },
      Xn = function () {
        return Bn.set('a.is-active span', {
          xPercent: -100,
          transformOrigin: 'left',
        });
      };
    i.a.hooks.enter(function () {
      window.scrollTo(0, 0);
    }),
      i.a.init({
        debug: !0,
        views: [s, u],
        transitions: [
          {
            name: 'general-transition',
            once: function (t) {
              var e = t.next;
              Xn(),
                Bn.from('header a', {
                  duration: 0.6,
                  yPercent: 100,
                  stagger: 0.2,
                  ease: 'power1.out',
                  onComplete: function () {
                    return Hn(e.container);
                  },
                });
            },
            leave: function (t) {
              var e = t.current;
              return Yn(e.container);
            },
            enter: function (t) {
              var e = t.next;
              Hn(e.container);
            },
          },
          {
            name: 'detail',
            to: { namespace: ['detail'] },
            once: function (t) {
              var e = t.next;
              In(e.container);
            },
            leave: function (t) {
              var e = t.current;
              return Nn(e.container);
            },
            enter: function (t) {
              var e = t.next;
              In(e.container);
            },
          },
          {
            name: 'from-detail',
            from: { namespace: ['detail'] },
            to: { namespace: ['home', 'architecture'] },
            leave: function (t) {
              var e = t.current;
              return Un(e.container);
            },
            enter: function (t) {
              var e = t.next;
              Xn(),
                Bn.from('header a', {
                  duration: 0.6,
                  yPercent: 100,
                  stagger: 0.2,
                  ease: 'power1.out',
                }),
                Hn(e.container);
            },
          },
        ],
      });
  },
]);

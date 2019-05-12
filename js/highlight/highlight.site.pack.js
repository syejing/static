/*! highlight.js v9.15.6 | BSD3 License | git.io/hljslicense */
!function (e) {
  var t = "object" == typeof window && window || "object" == typeof self && self;
  "undefined" != typeof exports ? e(exports) : t && (t.hljs = e({}), "function" == typeof define && define.amd && define([], function () {
    return t.hljs
  }))
}(function (a) {
  var b = [], o = Object.keys, h = {}, p = {}, t = /^(no-?highlight|plain|text)$/i, f = /\blang(?:uage)?-([\w-]+)\b/i,
    r = /((^(<[^>]+>|\t|)+|(?:\n)))/gm, n = {
      case_insensitive: "cI",
      lexemes: "l",
      contains: "c",
      keywords: "k",
      subLanguage: "sL",
      className: "cN",
      begin: "b",
      beginKeywords: "bK",
      end: "e",
      endsWithParent: "eW",
      illegal: "i",
      excludeBegin: "eB",
      excludeEnd: "eE",
      returnBegin: "rB",
      returnEnd: "rE",
      relevance: "r",
      variants: "v",
      IDENT_RE: "IR",
      UNDERSCORE_IDENT_RE: "UIR",
      NUMBER_RE: "NR",
      C_NUMBER_RE: "CNR",
      BINARY_NUMBER_RE: "BNR",
      RE_STARTERS_RE: "RSR",
      BACKSLASH_ESCAPE: "BE",
      APOS_STRING_MODE: "ASM",
      QUOTE_STRING_MODE: "QSM",
      PHRASAL_WORDS_MODE: "PWM",
      C_LINE_COMMENT_MODE: "CLCM",
      C_BLOCK_COMMENT_MODE: "CBCM",
      HASH_COMMENT_MODE: "HCM",
      NUMBER_MODE: "NM",
      C_NUMBER_MODE: "CNM",
      BINARY_NUMBER_MODE: "BNM",
      CSS_NUMBER_MODE: "CSSNM",
      REGEXP_MODE: "RM",
      TITLE_MODE: "TM",
      UNDERSCORE_TITLE_MODE: "UTM",
      COMMENT: "C",
      beginRe: "bR",
      endRe: "eR",
      illegalRe: "iR",
      lexemesRe: "lR",
      terminators: "t",
      terminator_end: "tE"
    }, y = "</span>", v = {classPrefix: "hljs-", tabReplace: null, useBR: !1, languages: void 0};

  function N(e) {
    return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
  }

  function m(e) {
    return e.nodeName.toLowerCase()
  }

  function w(e, t) {
    var r = e && e.exec(t);
    return r && 0 === r.index
  }

  function g(e) {
    return t.test(e)
  }

  function u(e) {
    var t, r = {}, n = Array.prototype.slice.call(arguments, 1);
    for (t in e) r[t] = e[t];
    return n.forEach(function (e) {
      for (t in e) r[t] = e[t]
    }), r
  }

  function _(e) {
    var a = [];
    return function e(t, r) {
      for (var n = t.firstChild; n; n = n.nextSibling) 3 === n.nodeType ? r += n.nodeValue.length : 1 === n.nodeType && (a.push({
        event: "start",
        offset: r,
        node: n
      }), r = e(n, r), m(n).match(/br|hr|img|input/) || a.push({event: "stop", offset: r, node: n}));
      return r
    }(e, 0), a
  }

  function i(e) {
    if (n && !e.langApiRestored) {
      for (var t in e.langApiRestored = !0, n) e[t] && (e[n[t]] = e[t]);
      (e.c || []).concat(e.v || []).forEach(i)
    }
  }

  function E(s) {
    function l(e) {
      return e && e.source || e
    }

    function c(e, t) {
      return new RegExp(l(e), "m" + (s.cI ? "i" : "") + (t ? "g" : ""))
    }

    !function t(r, e) {
      if (!r.compiled) {
        if (r.compiled = !0, r.k = r.k || r.bK, r.k) {
          var n = {}, a = function (r, e) {
            s.cI && (e = e.toLowerCase()), e.split(" ").forEach(function (e) {
              var t = e.split("|");
              n[t[0]] = [r, t[1] ? Number(t[1]) : 1]
            })
          };
          "string" == typeof r.k ? a("keyword", r.k) : o(r.k).forEach(function (e) {
            a(e, r.k[e])
          }), r.k = n
        }
        r.lR = c(r.l || /\w+/, !0), e && (r.bK && (r.b = "\\b(" + r.bK.split(" ").join("|") + ")\\b"), r.b || (r.b = /\B|\b/), r.bR = c(r.b), r.endSameAsBegin && (r.e = r.b), r.e || r.eW || (r.e = /\B|\b/), r.e && (r.eR = c(r.e)), r.tE = l(r.e) || "", r.eW && e.tE && (r.tE += (r.e ? "|" : "") + e.tE)), r.i && (r.iR = c(r.i)), null == r.r && (r.r = 1), r.c || (r.c = []), r.c = Array.prototype.concat.apply([], r.c.map(function (e) {
          return (t = "self" === e ? r : e).v && !t.cached_variants && (t.cached_variants = t.v.map(function (e) {
            return u(t, {v: null}, e)
          })), t.cached_variants || t.eW && [u(t)] || [t];
          var t
        })), r.c.forEach(function (e) {
          t(e, r)
        }), r.starts && t(r.starts, e);
        var i = r.c.map(function (e) {
          return e.bK ? "\\.?(?:" + e.b + ")\\.?" : e.b
        }).concat([r.tE, r.i]).map(l).filter(Boolean);
        r.t = i.length ? c(function (e, t) {
          for (var r = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./, n = 0, a = "", i = 0; i < e.length; i++) {
            var s = n, c = l(e[i]);
            for (0 < i && (a += t); 0 < c.length;) {
              var o = r.exec(c);
              if (null == o) {
                a += c;
                break
              }
              a += c.substring(0, o.index), c = c.substring(o.index + o[0].length), "\\" == o[0][0] && o[1] ? a += "\\" + String(Number(o[1]) + s) : (a += o[0], "(" == o[0] && n++)
            }
          }
          return a
        }(i, "|"), !0) : {
          exec: function () {
            return null
          }
        }
      }
    }(s)
  }

  function k(e, t, c, r) {
    function o(e, t, r, n) {
      var a = '<span class="' + (n ? "" : v.classPrefix);
      return (a += e + '">') + t + (r ? "" : y)
    }

    function l() {
      p += null != b.sL ? function () {
        var e = "string" == typeof b.sL;
        if (e && !h[b.sL]) return N(f);
        var t = e ? k(b.sL, f, !0, i[b.sL]) : x(f, b.sL.length ? b.sL : void 0);
        return 0 < b.r && (m += t.r), e && (i[b.sL] = t.top), o(t.language, t.value, !1, !0)
      }() : function () {
        var e, t, r, n, a, i, s;
        if (!b.k) return N(f);
        for (n = "", t = 0, b.lR.lastIndex = 0, r = b.lR.exec(f); r;) n += N(f.substring(t, r.index)), a = b, i = r, s = d.cI ? i[0].toLowerCase() : i[0], (e = a.k.hasOwnProperty(s) && a.k[s]) ? (m += e[1], n += o(e[0], N(r[0]))) : n += N(r[0]), t = b.lR.lastIndex, r = b.lR.exec(f);
        return n + N(f.substr(t))
      }(), f = ""
    }

    function u(e) {
      p += e.cN ? o(e.cN, "", !0) : "", b = Object.create(e, {parent: {value: b}})
    }

    function n(e, t) {
      if (f += e, null == t) return l(), 0;
      var r = function (e, t) {
        var r, n, a;
        for (r = 0, n = t.c.length; r < n; r++) if (w(t.c[r].bR, e)) return t.c[r].endSameAsBegin && (t.c[r].eR = (a = t.c[r].bR.exec(e)[0], new RegExp(a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), "m"))), t.c[r]
      }(t, b);
      if (r) return r.skip ? f += t : (r.eB && (f += t), l(), r.rB || r.eB || (f = t)), u(r), r.rB ? 0 : t.length;
      var n, a, i = function e(t, r) {
        if (w(t.eR, r)) {
          for (; t.endsParent && t.parent;) t = t.parent;
          return t
        }
        if (t.eW) return e(t.parent, r)
      }(b, t);
      if (i) {
        var s = b;
        for (s.skip ? f += t : (s.rE || s.eE || (f += t), l(), s.eE && (f = t)); b.cN && (p += y), b.skip || b.sL || (m += b.r), (b = b.parent) !== i.parent;) ;
        return i.starts && (i.endSameAsBegin && (i.starts.eR = i.eR), u(i.starts)), s.rE ? 0 : t.length
      }
      if (n = t, a = b, !c && w(a.iR, n)) throw new Error('Illegal lexeme "' + t + '" for mode "' + (b.cN || "<unnamed>") + '"');
      return f += t, t.length || 1
    }

    var d = C(e);
    if (!d) throw new Error('Unknown language: "' + e + '"');
    E(d);
    var a, b = r || d, i = {}, p = "";
    for (a = b; a !== d; a = a.parent) a.cN && (p = o(a.cN, "", !0) + p);
    var f = "", m = 0;
    try {
      for (var s, g, _ = 0; b.t.lastIndex = _, s = b.t.exec(t);) g = n(t.substring(_, s.index), s[0]), _ = s.index + g;
      for (n(t.substr(_)), a = b; a.parent; a = a.parent) a.cN && (p += y);
      return {r: m, value: p, language: e, top: b}
    } catch (e) {
      if (e.message && -1 !== e.message.indexOf("Illegal")) return {r: 0, value: N(t)};
      throw e
    }
  }

  function x(r, e) {
    e = e || v.languages || o(h);
    var n = {r: 0, value: N(r)}, a = n;
    return e.filter(C).filter(l).forEach(function (e) {
      var t = k(e, r, !1);
      t.language = e, t.r > a.r && (a = t), t.r > n.r && (a = n, n = t)
    }), a.language && (n.second_best = a), n
  }

  function M(e) {
    return v.tabReplace || v.useBR ? e.replace(r, function (e, t) {
      return v.useBR && "\n" === e ? "<br>" : v.tabReplace ? t.replace(/\t/g, v.tabReplace) : ""
    }) : e
  }

  function s(e) {
    var t, r, n, a, i, s, c, o, l, u, d = function (e) {
      var t, r, n, a, i = e.className + " ";
      if (i += e.parentNode ? e.parentNode.className : "", r = f.exec(i)) return C(r[1]) ? r[1] : "no-highlight";
      for (t = 0, n = (i = i.split(/\s+/)).length; t < n; t++) if (g(a = i[t]) || C(a)) return a
    }(e);
    g(d) || (v.useBR ? (t = document.createElementNS("http://www.w3.org/1999/xhtml", "div")).innerHTML = e.innerHTML.replace(/\n/g, "").replace(/<br[ \/]*>/g, "\n") : t = e, i = t.textContent, n = d ? k(d, i, !0) : x(i), (r = _(t)).length && ((a = document.createElementNS("http://www.w3.org/1999/xhtml", "div")).innerHTML = n.value, n.value = function (e, t, r) {
      var n = 0, a = "", i = [];

      function s() {
        return e.length && t.length ? e[0].offset !== t[0].offset ? e[0].offset < t[0].offset ? e : t : "start" === t[0].event ? e : t : e.length ? e : t
      }

      function c(e) {
        a += "<" + m(e) + b.map.call(e.attributes, function (e) {
          return " " + e.nodeName + '="' + N(e.value).replace('"', "&quot;") + '"'
        }).join("") + ">"
      }

      function o(e) {
        a += "</" + m(e) + ">"
      }

      function l(e) {
        ("start" === e.event ? c : o)(e.node)
      }

      for (; e.length || t.length;) {
        var u = s();
        if (a += N(r.substring(n, u[0].offset)), n = u[0].offset, u === e) {
          for (i.reverse().forEach(o); l(u.splice(0, 1)[0]), (u = s()) === e && u.length && u[0].offset === n;) ;
          i.reverse().forEach(c)
        } else "start" === u[0].event ? i.push(u[0].node) : i.pop(), l(u.splice(0, 1)[0])
      }
      return a + N(r.substr(n))
    }(r, _(a), i)), n.value = M(n.value), e.innerHTML = n.value, e.className = (s = e.className, c = d, o = n.language, l = c ? p[c] : o, u = [s.trim()], s.match(/\bhljs\b/) || u.push("hljs"), -1 === s.indexOf(l) && u.push(l), u.join(" ").trim()), e.result = {
      language: n.language,
      re: n.r
    }, n.second_best && (e.second_best = {language: n.second_best.language, re: n.second_best.r}))
  }

  function c() {
    if (!c.called) {
      c.called = !0;
      var e = document.querySelectorAll("pre code");
      b.forEach.call(e, s)
    }
  }

  function C(e) {
    return e = (e || "").toLowerCase(), h[e] || h[p[e]]
  }

  function l(e) {
    var t = C(e);
    return t && !t.disableAutodetect
  }

  return a.highlight = k, a.highlightAuto = x, a.fixMarkup = M, a.highlightBlock = s, a.configure = function (e) {
    v = u(v, e)
  }, a.initHighlighting = c, a.initHighlightingOnLoad = function () {
    addEventListener("DOMContentLoaded", c, !1), addEventListener("load", c, !1)
  }, a.registerLanguage = function (t, e) {
    var r = h[t] = e(a);
    i(r), r.aliases && r.aliases.forEach(function (e) {
      p[e] = t
    })
  }, a.listLanguages = function () {
    return o(h)
  }, a.getLanguage = C, a.autoDetection = l, a.inherit = u, a.IR = a.IDENT_RE = "[a-zA-Z]\\w*", a.UIR = a.UNDERSCORE_IDENT_RE = "[a-zA-Z_]\\w*", a.NR = a.NUMBER_RE = "\\b\\d+(\\.\\d+)?", a.CNR = a.C_NUMBER_RE = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", a.BNR = a.BINARY_NUMBER_RE = "\\b(0b[01]+)", a.RSR = a.RE_STARTERS_RE = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", a.BE = a.BACKSLASH_ESCAPE = {
    b: "\\\\[\\s\\S]",
    r: 0
  }, a.ASM = a.APOS_STRING_MODE = {
    cN: "string",
    b: "'",
    e: "'",
    i: "\\n",
    c: [a.BE]
  }, a.QSM = a.QUOTE_STRING_MODE = {
    cN: "string",
    b: '"',
    e: '"',
    i: "\\n",
    c: [a.BE]
  }, a.PWM = a.PHRASAL_WORDS_MODE = {b: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/}, a.C = a.COMMENT = function (e, t, r) {
    var n = a.inherit({cN: "comment", b: e, e: t, c: []}, r || {});
    return n.c.push(a.PWM), n.c.push({cN: "doctag", b: "(?:TODO|FIXME|NOTE|BUG|XXX):", r: 0}), n
  }, a.CLCM = a.C_LINE_COMMENT_MODE = a.C("//", "$"), a.CBCM = a.C_BLOCK_COMMENT_MODE = a.C("/\\*", "\\*/"), a.HCM = a.HASH_COMMENT_MODE = a.C("#", "$"), a.NM = a.NUMBER_MODE = {
    cN: "number",
    b: a.NR,
    r: 0
  }, a.CNM = a.C_NUMBER_MODE = {cN: "number", b: a.CNR, r: 0}, a.BNM = a.BINARY_NUMBER_MODE = {
    cN: "number",
    b: a.BNR,
    r: 0
  }, a.CSSNM = a.CSS_NUMBER_MODE = {
    cN: "number",
    b: a.NR + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
    r: 0
  }, a.RM = a.REGEXP_MODE = {
    cN: "regexp",
    b: /\//,
    e: /\/[gimuy]*/,
    i: /\n/,
    c: [a.BE, {b: /\[/, e: /\]/, r: 0, c: [a.BE]}]
  }, a.TM = a.TITLE_MODE = {cN: "title", b: a.IR, r: 0}, a.UTM = a.UNDERSCORE_TITLE_MODE = {
    cN: "title",
    b: a.UIR,
    r: 0
  }, a.METHOD_GUARD = {b: "\\.\\s*" + a.UIR, r: 0}, a.registerLanguage("bash", function (e) {
    var t = {cN: "variable", v: [{b: /\$[\w\d#@][\w\d_]*/}, {b: /\$\{(.*?)}/}]},
      r = {cN: "string", b: /"/, e: /"/, c: [e.BE, t, {cN: "variable", b: /\$\(/, e: /\)/, c: [e.BE]}]};
    return {
      aliases: ["sh", "zsh"],
      l: /\b-?[a-z\._]+\b/,
      k: {
        keyword: "if then else elif fi for while in do done case esac function",
        literal: "true false",
        built_in: "break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",
        _: "-ne -eq -lt -gt -f -d -e -s -l -a"
      },
      c: [{cN: "meta", b: /^#![^\n]+sh\s*$/, r: 10}, {
        cN: "function",
        b: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
        rB: !0,
        c: [e.inherit(e.TM, {b: /\w[\w\d_]*/})],
        r: 0
      }, e.HCM, r, {cN: "string", b: /'/, e: /'/}, t]
    }
  }), a.registerLanguage("clojure", function (e) {
    var t = "a-zA-Z_\\-!.?+*=<>&#'", r = "[" + t + "][" + t + "0-9/;:]*", n = {b: r, r: 0},
      a = {cN: "number", b: "[-+]?\\d+(\\.\\d+)?", r: 0}, i = e.inherit(e.QSM, {i: null}), s = e.C(";", "$", {r: 0}),
      c = {cN: "literal", b: /\b(true|false|nil)\b/}, o = {b: "[\\[\\{]", e: "[\\]\\}]"},
      l = {cN: "comment", b: "\\^" + r}, u = e.C("\\^\\{", "\\}"), d = {cN: "symbol", b: "[:]{1,2}" + r},
      b = {b: "\\(", e: "\\)"}, p = {eW: !0, r: 0}, f = {
        k: {"builtin-name": "def defonce cond apply if-not if-let if not not= = < > <= >= == + / * - rem quot neg? pos? delay? symbol? keyword? true? false? integer? empty? coll? list? set? ifn? fn? associative? sequential? sorted? counted? reversible? number? decimal? class? distinct? isa? float? rational? reduced? ratio? odd? even? char? seq? vector? string? map? nil? contains? zero? instance? not-every? not-any? libspec? -> ->> .. . inc compare do dotimes mapcat take remove take-while drop letfn drop-last take-last drop-while while intern condp case reduced cycle split-at split-with repeat replicate iterate range merge zipmap declare line-seq sort comparator sort-by dorun doall nthnext nthrest partition eval doseq await await-for let agent atom send send-off release-pending-sends add-watch mapv filterv remove-watch agent-error restart-agent set-error-handler error-handler set-error-mode! error-mode shutdown-agents quote var fn loop recur throw try monitor-enter monitor-exit defmacro defn defn- macroexpand macroexpand-1 for dosync and or when when-not when-let comp juxt partial sequence memoize constantly complement identity assert peek pop doto proxy defstruct first rest cons defprotocol cast coll deftype defrecord last butlast sigs reify second ffirst fnext nfirst nnext defmulti defmethod meta with-meta ns in-ns create-ns import refer keys select-keys vals key val rseq name namespace promise into transient persistent! conj! assoc! dissoc! pop! disj! use class type num float double short byte boolean bigint biginteger bigdec print-method print-dup throw-if printf format load compile get-in update-in pr pr-on newline flush read slurp read-line subvec with-open memfn time re-find re-groups rand-int rand mod locking assert-valid-fdecl alias resolve ref deref refset swap! reset! set-validator! compare-and-set! alter-meta! reset-meta! commute get-validator alter ref-set ref-history-count ref-min-history ref-max-history ensure sync io! new next conj set! to-array future future-call into-array aset gen-class reduce map filter find empty hash-map hash-set sorted-map sorted-map-by sorted-set sorted-set-by vec vector seq flatten reverse assoc dissoc list disj get union difference intersection extend extend-type extend-protocol int nth delay count concat chunk chunk-buffer chunk-append chunk-first chunk-rest max min dec unchecked-inc-int unchecked-inc unchecked-dec-inc unchecked-dec unchecked-negate unchecked-add-int unchecked-add unchecked-subtract-int unchecked-subtract chunk-next chunk-cons chunked-seq? prn vary-meta lazy-seq spread list* str find-keyword keyword symbol gensym force rationalize"},
        l: r,
        cN: "name",
        b: r,
        starts: p
      }, m = [b, i, l, u, s, d, o, a, c, n];
    return b.c = [e.C("comment", ""), f, p], p.c = m, o.c = m, u.c = [o], {
      aliases: ["clj"],
      i: /\S/,
      c: [b, i, l, u, s, d, o, a, c]
    }
  }), a.registerLanguage("coffeescript", function (e) {
    var t = {
        keyword: "in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super yield import export from as default await then unless until loop of by when and or is isnt not",
        literal: "true false null undefined yes no on off",
        built_in: "npm require console print module global window document"
      }, r = "[A-Za-z$_][0-9A-Za-z$_]*", n = {cN: "subst", b: /#\{/, e: /}/, k: t},
      a = [e.BNM, e.inherit(e.CNM, {starts: {e: "(\\s*/)?", r: 0}}), {
        cN: "string",
        v: [{b: /'''/, e: /'''/, c: [e.BE]}, {b: /'/, e: /'/, c: [e.BE]}, {b: /"""/, e: /"""/, c: [e.BE, n]}, {
          b: /"/,
          e: /"/,
          c: [e.BE, n]
        }]
      }, {
        cN: "regexp",
        v: [{b: "///", e: "///", c: [n, e.HCM]}, {b: "//[gim]*", r: 0}, {b: /\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W|$)/}]
      }, {b: "@" + r}, {sL: "javascript", eB: !0, eE: !0, v: [{b: "```", e: "```"}, {b: "`", e: "`"}]}];
    n.c = a;
    var i = e.inherit(e.TM, {b: r}), s = "(\\(.*\\))?\\s*\\B[-=]>",
      c = {cN: "params", b: "\\([^\\(]", rB: !0, c: [{b: /\(/, e: /\)/, k: t, c: ["self"].concat(a)}]};
    return {
      aliases: ["coffee", "cson", "iced"],
      k: t,
      i: /\/\*/,
      c: a.concat([e.C("###", "###"), e.HCM, {
        cN: "function",
        b: "^\\s*" + r + "\\s*=\\s*" + s,
        e: "[-=]>",
        rB: !0,
        c: [i, c]
      }, {b: /[:\(,=]\s*/, r: 0, c: [{cN: "function", b: s, e: "[-=]>", rB: !0, c: [c]}]}, {
        cN: "class",
        bK: "class",
        e: "$",
        i: /[:="\[\]]/,
        c: [{bK: "extends", eW: !0, i: /[:="\[\]]/, c: [i]}, i]
      }, {b: r + ":", e: ":", rB: !0, rE: !0, r: 0}])
    }
  }), a.registerLanguage("cpp", function (e) {
    var t = {cN: "keyword", b: "\\b[a-z\\d_]*_t\\b"}, r = {
      cN: "string",
      v: [{
        b: '(u8?|U|L)?"',
        e: '"',
        i: "\\n",
        c: [e.BE]
      }, {b: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\((?:.|\n)*?\)\1"/}, {b: "'\\\\?.", e: "'", i: "."}]
    }, n = {
      cN: "number",
      v: [{b: "\\b(0b[01']+)"}, {b: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)"}, {b: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"}],
      r: 0
    }, a = {
      cN: "meta",
      b: /#\s*[a-z]+\b/,
      e: /$/,
      k: {"meta-keyword": "if else elif endif define undef warning error line pragma ifdef ifndef include"},
      c: [{b: /\\\n/, r: 0}, e.inherit(r, {cN: "meta-string"}), {
        cN: "meta-string",
        b: /<[^\n>]*>/,
        e: /$/,
        i: "\\n"
      }, e.CLCM, e.CBCM]
    }, i = e.IR + "\\s*\\(", s = {
      keyword: "int float while private char catch import module export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using asm case typeid short reinterpret_cast|10 default double register explicit signed typename try this switch continue inline delete alignof constexpr decltype noexcept static_assert thread_local restrict _Bool complex _Complex _Imaginary atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong new throw return and or not",
      built_in: "std string cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr abort abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr",
      literal: "true false nullptr NULL"
    }, c = [t, e.CLCM, e.CBCM, n, r];
    return {
      aliases: ["c", "cc", "h", "c++", "h++", "hpp"],
      k: s,
      i: "</",
      c: c.concat([a, {
        b: "\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",
        e: ">",
        k: s,
        c: ["self", t]
      }, {b: e.IR + "::", k: s}, {
        v: [{b: /=/, e: /;/}, {b: /\(/, e: /\)/}, {bK: "new throw return else", e: /;/}],
        k: s,
        c: c.concat([{b: /\(/, e: /\)/, k: s, c: c.concat(["self"]), r: 0}]),
        r: 0
      }, {
        cN: "function",
        b: "(" + e.IR + "[\\*&\\s]+)+" + i,
        rB: !0,
        e: /[{;=]/,
        eE: !0,
        k: s,
        i: /[^\w\s\*&]/,
        c: [{b: i, rB: !0, c: [e.TM], r: 0}, {
          cN: "params",
          b: /\(/,
          e: /\)/,
          k: s,
          r: 0,
          c: [e.CLCM, e.CBCM, r, n, t, {b: /\(/, e: /\)/, k: s, r: 0, c: ["self", e.CLCM, e.CBCM, r, n, t]}]
        }, e.CLCM, e.CBCM, a]
      }, {cN: "class", bK: "class struct", e: /[{;:]/, c: [{b: /</, e: />/, c: ["self"]}, e.TM]}]),
      exports: {preprocessor: a, strings: r, k: s}
    }
  }), a.registerLanguage("cs", function (e) {
    var t = {
        keyword: "abstract as base bool break byte case catch char checked const continue decimal default delegate do double enum event explicit extern finally fixed float for foreach goto if implicit in int interface internal is lock long nameof object operator out override params private protected public readonly ref sbyte sealed short sizeof stackalloc static string struct switch this try typeof uint ulong unchecked unsafe ushort using virtual void volatile while add alias ascending async await by descending dynamic equals from get global group into join let on orderby partial remove select set value var where yield",
        literal: "null false true"
      }, r = {
        cN: "number",
        v: [{b: "\\b(0b[01']+)"}, {b: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)"}, {b: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"}],
        r: 0
      }, n = {cN: "string", b: '@"', e: '"', c: [{b: '""'}]}, a = e.inherit(n, {i: /\n/}),
      i = {cN: "subst", b: "{", e: "}", k: t}, s = e.inherit(i, {i: /\n/}),
      c = {cN: "string", b: /\$"/, e: '"', i: /\n/, c: [{b: "{{"}, {b: "}}"}, e.BE, s]},
      o = {cN: "string", b: /\$@"/, e: '"', c: [{b: "{{"}, {b: "}}"}, {b: '""'}, i]},
      l = e.inherit(o, {i: /\n/, c: [{b: "{{"}, {b: "}}"}, {b: '""'}, s]});
    i.c = [o, c, n, e.ASM, e.QSM, r, e.CBCM], s.c = [l, c, a, e.ASM, e.QSM, r, e.inherit(e.CBCM, {i: /\n/})];
    var u = {v: [o, c, n, e.ASM, e.QSM]}, d = e.IR + "(<" + e.IR + "(\\s*,\\s*" + e.IR + ")*>)?(\\[\\])?";
    return {
      aliases: ["csharp", "c#"],
      k: t,
      i: /::/,
      c: [e.C("///", "$", {
        rB: !0,
        c: [{cN: "doctag", v: [{b: "///", r: 0}, {b: "\x3c!--|--\x3e"}, {b: "</?", e: ">"}]}]
      }), e.CLCM, e.CBCM, {
        cN: "meta",
        b: "#",
        e: "$",
        k: {"meta-keyword": "if else elif endif define undef warning error line region endregion pragma checksum"}
      }, u, r, {bK: "class interface", e: /[{;=]/, i: /[^\s:,]/, c: [e.TM, e.CLCM, e.CBCM]}, {
        bK: "namespace",
        e: /[{;=]/,
        i: /[^\s:]/,
        c: [e.inherit(e.TM, {b: "[a-zA-Z](\\.?\\w)*"}), e.CLCM, e.CBCM]
      }, {
        cN: "meta",
        b: "^\\s*\\[",
        eB: !0,
        e: "\\]",
        eE: !0,
        c: [{cN: "meta-string", b: /"/, e: /"/}]
      }, {bK: "new return throw await else", r: 0}, {
        cN: "function",
        b: "(" + d + "\\s+)+" + e.IR + "\\s*\\(",
        rB: !0,
        e: /\s*[{;=]/,
        eE: !0,
        k: t,
        c: [{b: e.IR + "\\s*\\(", rB: !0, c: [e.TM], r: 0}, {
          cN: "params",
          b: /\(/,
          e: /\)/,
          eB: !0,
          eE: !0,
          k: t,
          r: 0,
          c: [u, r, e.CBCM]
        }, e.CLCM, e.CBCM]
      }]
    }
  }), a.registerLanguage("css", function (e) {
    var t = {
      b: /[A-Z\_\.\-]+\s*:/,
      rB: !0,
      e: ";",
      eW: !0,
      c: [{
        cN: "attribute",
        b: /\S/,
        e: ":",
        eE: !0,
        starts: {
          eW: !0,
          eE: !0,
          c: [{
            b: /[\w-]+\(/,
            rB: !0,
            c: [{cN: "built_in", b: /[\w-]+/}, {b: /\(/, e: /\)/, c: [e.ASM, e.QSM]}]
          }, e.CSSNM, e.QSM, e.ASM, e.CBCM, {cN: "number", b: "#[0-9A-Fa-f]+"}, {cN: "meta", b: "!important"}]
        }
      }]
    };
    return {
      cI: !0,
      i: /[=\/|'\$]/,
      c: [e.CBCM, {cN: "selector-id", b: /#[A-Za-z0-9_-]+/}, {
        cN: "selector-class",
        b: /\.[A-Za-z0-9_-]+/
      }, {cN: "selector-attr", b: /\[/, e: /\]/, i: "$"}, {
        cN: "selector-pseudo",
        b: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/
      }, {b: "@(font-face|page)", l: "[a-z-]+", k: "font-face page"}, {
        b: "@",
        e: "[{;]",
        i: /:/,
        c: [{cN: "keyword", b: /\w+/}, {b: /\s/, eW: !0, eE: !0, r: 0, c: [e.ASM, e.QSM, e.CSSNM]}]
      }, {cN: "selector-tag", b: "[a-zA-Z-][a-zA-Z0-9_-]*", r: 0}, {b: "{", e: "}", i: /\S/, c: [e.CBCM, t]}]
    }
  }), a.registerLanguage("elm", function (e) {
    var t = {v: [e.C("--", "$"), e.C("{-", "-}", {c: ["self"]})]}, r = {cN: "type", b: "\\b[A-Z][\\w']*", r: 0},
      n = {b: "\\(", e: "\\)", i: '"', c: [{cN: "type", b: "\\b[A-Z][\\w]*(\\((\\.\\.|,|\\w+)\\))?"}, t]};
    return {
      k: "let in if then else case of where module import exposing type alias as infix infixl infixr port effect command subscription",
      c: [{
        bK: "port effect module",
        e: "exposing",
        k: "port effect module where command subscription exposing",
        c: [n, t],
        i: "\\W\\.|;"
      }, {b: "import", e: "$", k: "import as exposing", c: [n, t], i: "\\W\\.|;"}, {
        b: "type",
        e: "$",
        k: "type alias",
        c: [r, n, {b: "{", e: "}", c: n.c}, t]
      }, {bK: "infix infixl infixr", e: "$", c: [e.CNM, t]}, {b: "port", e: "$", k: "port", c: [t]}, {
        cN: "string",
        b: "'\\\\?.",
        e: "'",
        i: "."
      }, e.QSM, e.CNM, r, e.inherit(e.TM, {b: "^[_a-z][\\w']*"}), t, {b: "->|<-"}],
      i: /;/
    }
  }), a.registerLanguage("go", function (e) {
    var t = {
      keyword: "break default func interface select case map struct chan else goto package switch const fallthrough if range type continue for import return var go defer bool byte complex64 complex128 float32 float64 int8 int16 int32 int64 string uint8 uint16 uint32 uint64 int uint uintptr rune",
      literal: "true false iota nil",
      built_in: "append cap close complex copy imag len make new panic print println real recover delete"
    };
    return {
      aliases: ["golang"],
      k: t,
      i: "</",
      c: [e.CLCM, e.CBCM, {cN: "string", v: [e.QSM, {b: "'", e: "[^\\\\]'"}, {b: "`", e: "`"}]}, {
        cN: "number",
        v: [{b: e.CNR + "[dflsi]", r: 1}, e.CNM]
      }, {b: /:=/}, {
        cN: "function",
        bK: "func",
        e: /\s*\{/,
        eE: !0,
        c: [e.TM, {cN: "params", b: /\(/, e: /\)/, k: t, i: /["']/}]
      }]
    }
  }), a.registerLanguage("xml", function (e) {
    var t = {
      eW: !0,
      i: /</,
      r: 0,
      c: [{cN: "attr", b: "[A-Za-z0-9\\._:-]+", r: 0}, {
        b: /=\s*/,
        r: 0,
        c: [{cN: "string", endsParent: !0, v: [{b: /"/, e: /"/}, {b: /'/, e: /'/}, {b: /[^\s"'=<>`]+/}]}]
      }]
    };
    return {
      aliases: ["html", "xhtml", "rss", "atom", "xjb", "xsd", "xsl", "plist"],
      cI: !0,
      c: [{
        cN: "meta",
        b: "<!DOCTYPE",
        e: ">",
        r: 10,
        c: [{b: "\\[", e: "\\]"}]
      }, e.C("\x3c!--", "--\x3e", {r: 10}), {b: "<\\!\\[CDATA\\[", e: "\\]\\]>", r: 10}, {
        cN: "meta",
        b: /<\?xml/,
        e: /\?>/,
        r: 10
      }, {
        b: /<\?(php)?/,
        e: /\?>/,
        sL: "php",
        c: [{b: "/\\*", e: "\\*/", skip: !0}, {b: 'b"', e: '"', skip: !0}, {
          b: "b'",
          e: "'",
          skip: !0
        }, e.inherit(e.ASM, {i: null, cN: null, c: null, skip: !0}), e.inherit(e.QSM, {
          i: null,
          cN: null,
          c: null,
          skip: !0
        })]
      }, {
        cN: "tag",
        b: "<style(?=\\s|>|$)",
        e: ">",
        k: {name: "style"},
        c: [t],
        starts: {e: "</style>", rE: !0, sL: ["css", "xml"]}
      }, {
        cN: "tag",
        b: "<script(?=\\s|>|$)",
        e: ">",
        k: {name: "script"},
        c: [t],
        starts: {e: "<\/script>", rE: !0, sL: ["actionscript", "javascript", "handlebars", "xml"]}
      }, {cN: "tag", b: "</?", e: "/?>", c: [{cN: "name", b: /[^\/><\s]+/, r: 0}, t]}]
    }
  }), a.registerLanguage("handlebars", function (e) {
    var t = {"builtin-name": "each in with if else unless bindattr action collection debugger log outlet template unbound view yield"};
    return {
      aliases: ["hbs", "html.hbs", "html.handlebars"],
      cI: !0,
      sL: "xml",
      c: [e.C("{{!(--)?", "(--)?}}"), {
        cN: "template-tag",
        b: /\{\{[#\/]/,
        e: /\}\}/,
        c: [{cN: "name", b: /[a-zA-Z\.-]+/, k: t, starts: {eW: !0, r: 0, c: [e.QSM]}}]
      }, {cN: "template-variable", b: /\{\{/, e: /\}\}/, k: t}]
    }
  }), a.registerLanguage("http", function (e) {
    var t = "HTTP/[0-9\\.]+";
    return {
      aliases: ["https"],
      i: "\\S",
      c: [{b: "^" + t, e: "$", c: [{cN: "number", b: "\\b\\d{3}\\b"}]}, {
        b: "^[A-Z]+ (.*?) " + t + "$",
        rB: !0,
        e: "$",
        c: [{cN: "string", b: " ", e: " ", eB: !0, eE: !0}, {b: t}, {cN: "keyword", b: "[A-Z]+"}]
      }, {cN: "attribute", b: "^\\w", e: ": ", eE: !0, i: "\\n|\\s|=", starts: {e: "$", r: 0}}, {
        b: "\\n\\n",
        starts: {sL: [], eW: !0}
      }]
    }
  }), a.registerLanguage("ini", function (e) {
    var t = {
      cN: "string",
      c: [e.BE],
      v: [{b: "'''", e: "'''", r: 10}, {b: '"""', e: '"""', r: 10}, {b: '"', e: '"'}, {b: "'", e: "'"}]
    };
    return {
      aliases: ["toml"],
      cI: !0,
      i: /\S/,
      c: [e.C(";", "$"), e.HCM, {cN: "section", b: /^\s*\[+/, e: /\]+/}, {
        b: /^[a-z0-9\[\]_\.-]+\s*=\s*/,
        e: "$",
        rB: !0,
        c: [{cN: "attr", b: /[a-z0-9\[\]_\.-]+/}, {
          b: /=/,
          eW: !0,
          r: 0,
          c: [{cN: "literal", b: /\bon|off|true|false|yes|no\b/}, {
            cN: "variable",
            v: [{b: /\$[\w\d"][\w\d_]*/}, {b: /\$\{(.*?)}/}]
          }, t, {cN: "number", b: /([\+\-]+)?[\d]+_[\d_]+/}, e.NM]
        }]
      }]
    }
  }), a.registerLanguage("java", function (e) {
    var t = "false synchronized int abstract float private char boolean var static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private module requires exports do",
      r = {
        cN: "number",
        b: "\\b(0[bB]([01]+[01_]+[01]+|[01]+)|0[xX]([a-fA-F0-9]+[a-fA-F0-9_]+[a-fA-F0-9]+|[a-fA-F0-9]+)|(([\\d]+[\\d_]+[\\d]+|[\\d]+)(\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))?|\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))([eE][-+]?\\d+)?)[lLfF]?",
        r: 0
      };
    return {
      aliases: ["jsp"],
      k: t,
      i: /<\/|#/,
      c: [e.C("/\\*\\*", "\\*/", {
        r: 0,
        c: [{b: /\w+@/, r: 0}, {cN: "doctag", b: "@[A-Za-z]+"}]
      }), e.CLCM, e.CBCM, e.ASM, e.QSM, {
        cN: "class",
        bK: "class interface",
        e: /[{;=]/,
        eE: !0,
        k: "class interface",
        i: /[:"\[\]]/,
        c: [{bK: "extends implements"}, e.UTM]
      }, {bK: "new throw return else", r: 0}, {
        cN: "function",
        b: "([À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*(<[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*(\\s*,\\s*[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*)*>)?\\s+)+" + e.UIR + "\\s*\\(",
        rB: !0,
        e: /[{;=]/,
        eE: !0,
        k: t,
        c: [{b: e.UIR + "\\s*\\(", rB: !0, r: 0, c: [e.UTM]}, {
          cN: "params",
          b: /\(/,
          e: /\)/,
          k: t,
          r: 0,
          c: [e.ASM, e.QSM, e.CNM, e.CBCM]
        }, e.CLCM, e.CBCM]
      }, r, {cN: "meta", b: "@[A-Za-z]+"}]
    }
  }), a.registerLanguage("javascript", function (e) {
    var t = "[A-Za-z$_][0-9A-Za-z$_]*", r = {
        keyword: "in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",
        literal: "true false null undefined NaN Infinity",
        built_in: "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"
      }, n = {cN: "number", v: [{b: "\\b(0[bB][01]+)"}, {b: "\\b(0[oO][0-7]+)"}, {b: e.CNR}], r: 0},
      a = {cN: "subst", b: "\\$\\{", e: "\\}", k: r, c: []}, i = {cN: "string", b: "`", e: "`", c: [e.BE, a]};
    a.c = [e.ASM, e.QSM, i, n, e.RM];
    var s = a.c.concat([e.CBCM, e.CLCM]);
    return {
      aliases: ["js", "jsx"],
      k: r,
      c: [{cN: "meta", r: 10, b: /^\s*['"]use (strict|asm)['"]/}, {
        cN: "meta",
        b: /^#!/,
        e: /$/
      }, e.ASM, e.QSM, i, e.CLCM, e.CBCM, n, {
        b: /[{,]\s*/,
        r: 0,
        c: [{b: t + "\\s*:", rB: !0, r: 0, c: [{cN: "attr", b: t, r: 0}]}]
      }, {
        b: "(" + e.RSR + "|\\b(case|return|throw)\\b)\\s*",
        k: "return throw case",
        c: [e.CLCM, e.CBCM, e.RM, {
          cN: "function",
          b: "(\\(.*?\\)|" + t + ")\\s*=>",
          rB: !0,
          e: "\\s*=>",
          c: [{cN: "params", v: [{b: t}, {b: /\(\s*\)/}, {b: /\(/, e: /\)/, eB: !0, eE: !0, k: r, c: s}]}]
        }, {
          b: /</,
          e: /(\/\w+|\w+\/)>/,
          sL: "xml",
          c: [{b: /<\w+\s*\/>/, skip: !0}, {
            b: /<\w+/,
            e: /(\/\w+|\w+\/)>/,
            skip: !0,
            c: [{b: /<\w+\s*\/>/, skip: !0}, "self"]
          }]
        }],
        r: 0
      }, {
        cN: "function",
        bK: "function",
        e: /\{/,
        eE: !0,
        c: [e.inherit(e.TM, {b: t}), {cN: "params", b: /\(/, e: /\)/, eB: !0, eE: !0, c: s}],
        i: /\[|%/
      }, {b: /\$[(.]/}, e.METHOD_GUARD, {
        cN: "class",
        bK: "class",
        e: /[{;=]/,
        eE: !0,
        i: /[:"\[\]]/,
        c: [{bK: "extends"}, e.UTM]
      }, {bK: "constructor get set", e: /\{/, eE: !0}],
      i: /#(?!!)/
    }
  }), a.registerLanguage("json", function (e) {
    var t = {literal: "true false null"}, r = [e.QSM, e.CNM], n = {e: ",", eW: !0, eE: !0, c: r, k: t},
      a = {b: "{", e: "}", c: [{cN: "attr", b: /"/, e: /"/, c: [e.BE], i: "\\n"}, e.inherit(n, {b: /:/})], i: "\\S"},
      i = {b: "\\[", e: "\\]", c: [e.inherit(n)], i: "\\S"};
    return r.splice(r.length, 0, a, i), {c: r, k: t, i: "\\S"}
  }), a.registerLanguage("makefile", function (e) {
    var t = {cN: "variable", v: [{b: "\\$\\(" + e.UIR + "\\)", c: [e.BE]}, {b: /\$[@%<?\^\+\*]/}]},
      r = {cN: "string", b: /"/, e: /"/, c: [e.BE, t]}, n = {
        cN: "variable",
        b: /\$\([\w-]+\s/,
        e: /\)/,
        k: {built_in: "subst patsubst strip findstring filter filter-out sort word wordlist firstword lastword dir notdir suffix basename addsuffix addprefix join wildcard realpath abspath error warning shell origin flavor foreach if or and call eval file value"},
        c: [t]
      }, a = {b: "^" + e.UIR + "\\s*[:+?]?=", i: "\\n", rB: !0, c: [{b: "^" + e.UIR, e: "[:+?]?=", eE: !0}]},
      i = {cN: "section", b: /^[^\s]+:/, e: /$/, c: [t]};
    return {
      aliases: ["mk", "mak"],
      k: "define endef undefine ifdef ifndef ifeq ifneq else endif include -include sinclude override export unexport private vpath",
      l: /[\w-]+/,
      c: [e.HCM, t, r, n, a, {cN: "meta", b: /^\.PHONY:/, e: /$/, k: {"meta-keyword": ".PHONY"}, l: /[\.\w]+/}, i]
    }
  }), a.registerLanguage("objectivec", function (e) {
    var t = /[a-zA-Z@][a-zA-Z0-9_]*/, r = "@interface @class @protocol @implementation";
    return {
      aliases: ["mm", "objc", "obj-c"],
      k: {
        keyword: "int float while char export sizeof typedef const struct for union unsigned long volatile static bool mutable if do return goto void enum else break extern asm case short default double register explicit signed typename this switch continue wchar_t inline readonly assign readwrite self @synchronized id typeof nonatomic super unichar IBOutlet IBAction strong weak copy in out inout bycopy byref oneway __strong __weak __block __autoreleasing @private @protected @public @try @property @end @throw @catch @finally @autoreleasepool @synthesize @dynamic @selector @optional @required @encode @package @import @defs @compatibility_alias __bridge __bridge_transfer __bridge_retained __bridge_retain __covariant __contravariant __kindof _Nonnull _Nullable _Null_unspecified __FUNCTION__ __PRETTY_FUNCTION__ __attribute__ getter setter retain unsafe_unretained nonnull nullable null_unspecified null_resettable class instancetype NS_DESIGNATED_INITIALIZER NS_UNAVAILABLE NS_REQUIRES_SUPER NS_RETURNS_INNER_POINTER NS_INLINE NS_AVAILABLE NS_DEPRECATED NS_ENUM NS_OPTIONS NS_SWIFT_UNAVAILABLE NS_ASSUME_NONNULL_BEGIN NS_ASSUME_NONNULL_END NS_REFINED_FOR_SWIFT NS_SWIFT_NAME NS_SWIFT_NOTHROW NS_DURING NS_HANDLER NS_ENDHANDLER NS_VALUERETURN NS_VOIDRETURN",
        literal: "false true FALSE TRUE nil YES NO NULL",
        built_in: "BOOL dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once"
      },
      l: t,
      i: "</",
      c: [{
        cN: "built_in",
        b: "\\b(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)\\w+"
      }, e.CLCM, e.CBCM, e.CNM, e.QSM, {
        cN: "string",
        v: [{b: '@"', e: '"', i: "\\n", c: [e.BE]}, {b: "'", e: "[^\\\\]'", i: "[^\\\\][^']"}]
      }, {cN: "meta", b: "#", e: "$", c: [{cN: "meta-string", v: [{b: '"', e: '"'}, {b: "<", e: ">"}]}]}, {
        cN: "class",
        b: "(" + r.split(" ").join("|") + ")\\b",
        e: "({|$)",
        eE: !0,
        k: r,
        l: t,
        c: [e.UTM]
      }, {b: "\\." + e.UIR, r: 0}]
    }
  }), a.registerLanguage("prolog", function (e) {
    var t = {b: /\(/, e: /\)/, r: 0}, r = {b: /\[/, e: /\]/}, n = {cN: "comment", b: /%/, e: /$/, c: [e.PWM]},
      a = {cN: "string", b: /`/, e: /`/, c: [e.BE]}, i = [{b: /[a-z][A-Za-z0-9_]*/, r: 0}, {
        cN: "symbol",
        v: [{b: /[A-Z][a-zA-Z0-9_]*/}, {b: /_[A-Za-z0-9_]*/}],
        r: 0
      }, t, {b: /:-/}, r, n, e.CBCM, e.QSM, e.ASM, a, {cN: "string", b: /0\'(\\\'|.)/}, {
        cN: "string",
        b: /0\'\\s/
      }, e.CNM];
    return t.c = i, {c: (r.c = i).concat([{b: /\.$/}])}
  }), a.registerLanguage("python", function (e) {
    var t = {
        keyword: "and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda async await nonlocal|10",
        built_in: "Ellipsis NotImplemented",
        literal: "False None True"
      }, r = {cN: "meta", b: /^(>>>|\.\.\.) /}, n = {cN: "subst", b: /\{/, e: /\}/, k: t, i: /#/}, a = {
        cN: "string",
        c: [e.BE],
        v: [{b: /(u|b)?r?'''/, e: /'''/, c: [e.BE, r], r: 10}, {
          b: /(u|b)?r?"""/,
          e: /"""/,
          c: [e.BE, r],
          r: 10
        }, {b: /(fr|rf|f)'''/, e: /'''/, c: [e.BE, r, n]}, {
          b: /(fr|rf|f)"""/,
          e: /"""/,
          c: [e.BE, r, n]
        }, {b: /(u|r|ur)'/, e: /'/, r: 10}, {b: /(u|r|ur)"/, e: /"/, r: 10}, {b: /(b|br)'/, e: /'/}, {
          b: /(b|br)"/,
          e: /"/
        }, {b: /(fr|rf|f)'/, e: /'/, c: [e.BE, n]}, {b: /(fr|rf|f)"/, e: /"/, c: [e.BE, n]}, e.ASM, e.QSM]
      }, i = {cN: "number", r: 0, v: [{b: e.BNR + "[lLjJ]?"}, {b: "\\b(0o[0-7]+)[lLjJ]?"}, {b: e.CNR + "[lLjJ]?"}]},
      s = {cN: "params", b: /\(/, e: /\)/, c: ["self", r, i, a]};
    return n.c = [a, i, r], {
      aliases: ["py", "gyp", "ipython"],
      k: t,
      i: /(<\/|->|\?)|=>/,
      c: [r, i, a, e.HCM, {
        v: [{cN: "function", bK: "def"}, {cN: "class", bK: "class"}],
        e: /:/,
        i: /[${=;\n,]/,
        c: [e.UTM, s, {b: /->/, eW: !0, k: "None"}]
      }, {cN: "meta", b: /^[\t ]*@/, e: /$/}, {b: /\b(print|exec)\(/}]
    }
  }), a.registerLanguage("ruby", function (e) {
    var t = "[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?", r = {
        keyword: "and then defined module in return redo if BEGIN retry end for self when next until do begin unless END rescue else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor",
        literal: "true false nil"
      }, n = {cN: "doctag", b: "@[A-Za-z]+"}, a = {b: "#<", e: ">"},
      i = [e.C("#", "$", {c: [n]}), e.C("^\\=begin", "^\\=end", {c: [n], r: 10}), e.C("^__END__", "\\n$")],
      s = {cN: "subst", b: "#\\{", e: "}", k: r}, c = {
        cN: "string",
        c: [e.BE, s],
        v: [{b: /'/, e: /'/}, {b: /"/, e: /"/}, {b: /`/, e: /`/}, {b: "%[qQwWx]?\\(", e: "\\)"}, {
          b: "%[qQwWx]?\\[",
          e: "\\]"
        }, {b: "%[qQwWx]?{", e: "}"}, {b: "%[qQwWx]?<", e: ">"}, {b: "%[qQwWx]?/", e: "/"}, {
          b: "%[qQwWx]?%",
          e: "%"
        }, {b: "%[qQwWx]?-", e: "-"}, {
          b: "%[qQwWx]?\\|",
          e: "\\|"
        }, {b: /\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/}, {b: /<<(-?)\w+$/, e: /^\s*\w+$/}]
      }, o = {cN: "params", b: "\\(", e: "\\)", endsParent: !0, k: r}, l = [c, a, {
        cN: "class",
        bK: "class module",
        e: "$|;",
        i: /=/,
        c: [e.inherit(e.TM, {b: "[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?"}), {
          b: "<\\s*",
          c: [{b: "(" + e.IR + "::)?" + e.IR}]
        }].concat(i)
      }, {
        cN: "function",
        bK: "def",
        e: "$|;",
        c: [e.inherit(e.TM, {b: t}), o].concat(i)
      }, {b: e.IR + "::"}, {cN: "symbol", b: e.UIR + "(\\!|\\?)?:", r: 0}, {
        cN: "symbol",
        b: ":(?!\\s)",
        c: [c, {b: t}],
        r: 0
      }, {
        cN: "number",
        b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
        r: 0
      }, {b: "(\\$\\W)|((\\$|\\@\\@?)(\\w+))"}, {cN: "params", b: /\|/, e: /\|/, k: r}, {
        b: "(" + e.RSR + "|unless)\\s*",
        k: "unless",
        c: [a, {
          cN: "regexp",
          c: [e.BE, s],
          i: /\n/,
          v: [{b: "/", e: "/[a-z]*"}, {b: "%r{", e: "}[a-z]*"}, {b: "%r\\(", e: "\\)[a-z]*"}, {
            b: "%r!",
            e: "![a-z]*"
          }, {b: "%r\\[", e: "\\][a-z]*"}]
        }].concat(i),
        r: 0
      }].concat(i);
    s.c = l;
    var u = [{b: /^\s*=>/, starts: {e: "$", c: o.c = l}}, {
      cN: "meta",
      b: "^([>?]>|[\\w#]+\\(\\w+\\):\\d+:\\d+>|(\\w+-)?\\d+\\.\\d+\\.\\d(p\\d+)?[^>]+>)",
      starts: {e: "$", c: l}
    }];
    return {aliases: ["rb", "gemspec", "podspec", "thor", "irb"], k: r, i: /\/\*/, c: i.concat(u).concat(l)}
  }), a.registerLanguage("rust", function (e) {
    var t = "([ui](8|16|32|64|128|size)|f(32|64))?",
      r = "drop i8 i16 i32 i64 i128 isize u8 u16 u32 u64 u128 usize f32 f64 str char bool Box Option Result String Vec Copy Send Sized Sync Drop Fn FnMut FnOnce ToOwned Clone Debug PartialEq PartialOrd Eq Ord AsRef AsMut Into From Default Iterator Extend IntoIterator DoubleEndedIterator ExactSizeIterator SliceConcatExt ToString assert! assert_eq! bitflags! bytes! cfg! col! concat! concat_idents! debug_assert! debug_assert_eq! env! panic! file! format! format_args! include_bin! include_str! line! local_data_key! module_path! option_env! print! println! select! stringify! try! unimplemented! unreachable! vec! write! writeln! macro_rules! assert_ne! debug_assert_ne!";
    return {
      aliases: ["rs"],
      k: {
        keyword: "alignof as be box break const continue crate do else enum extern false fn for if impl in let loop match mod mut offsetof once priv proc pub pure ref return self Self sizeof static struct super trait true type typeof unsafe unsized use virtual while where yield move default",
        literal: "true false Some None Ok Err",
        built_in: r
      },
      l: e.IR + "!?",
      i: "</",
      c: [e.CLCM, e.C("/\\*", "\\*/", {c: ["self"]}), e.inherit(e.QSM, {b: /b?"/, i: null}), {
        cN: "string",
        v: [{b: /r(#*)"(.|\n)*?"\1(?!#)/}, {b: /b?'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/}]
      }, {cN: "symbol", b: /'[a-zA-Z_][a-zA-Z0-9_]*/}, {
        cN: "number",
        v: [{b: "\\b0b([01_]+)" + t}, {b: "\\b0o([0-7_]+)" + t}, {b: "\\b0x([A-Fa-f0-9_]+)" + t}, {b: "\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)" + t}],
        r: 0
      }, {cN: "function", bK: "fn", e: "(\\(|<)", eE: !0, c: [e.UTM]}, {
        cN: "meta",
        b: "#\\!?\\[",
        e: "\\]",
        c: [{cN: "meta-string", b: /"/, e: /"/}]
      }, {cN: "class", bK: "type", e: ";", c: [e.inherit(e.UTM, {endsParent: !0})], i: "\\S"}, {
        cN: "class",
        bK: "trait enum struct union",
        e: "{",
        c: [e.inherit(e.UTM, {endsParent: !0})],
        i: "[\\w\\d]"
      }, {b: e.IR + "::", k: {built_in: r}}, {b: "->"}]
    }
  }), a.registerLanguage("sql", function (e) {
    var t = e.C("--", "$");
    return {
      cI: !0,
      i: /[<>{}*]/,
      c: [{
        bK: "begin end start commit rollback savepoint lock alter create drop rename call delete do handler insert load replace select truncate update set show pragma grant merge describe use explain help declare prepare execute deallocate release unlock purge reset change stop analyze cache flush optimize repair kill install uninstall checksum restore check backup revoke comment values with",
        e: /;/,
        eW: !0,
        l: /[\w\.]+/,
        k: {
          keyword: "as abort abs absolute acc acce accep accept access accessed accessible account acos action activate add addtime admin administer advanced advise aes_decrypt aes_encrypt after agent aggregate ali alia alias all allocate allow alter always analyze ancillary and anti any anydata anydataset anyschema anytype apply archive archived archivelog are as asc ascii asin assembly assertion associate asynchronous at atan atn2 attr attri attrib attribu attribut attribute attributes audit authenticated authentication authid authors auto autoallocate autodblink autoextend automatic availability avg backup badfile basicfile before begin beginning benchmark between bfile bfile_base big bigfile bin binary_double binary_float binlog bit_and bit_count bit_length bit_or bit_xor bitmap blob_base block blocksize body both bound bucket buffer_cache buffer_pool build bulk by byte byteordermark bytes cache caching call calling cancel capacity cascade cascaded case cast catalog category ceil ceiling chain change changed char_base char_length character_length characters characterset charindex charset charsetform charsetid check checksum checksum_agg child choose chr chunk class cleanup clear client clob clob_base clone close cluster_id cluster_probability cluster_set clustering coalesce coercibility col collate collation collect colu colum column column_value columns columns_updated comment commit compact compatibility compiled complete composite_limit compound compress compute concat concat_ws concurrent confirm conn connec connect connect_by_iscycle connect_by_isleaf connect_by_root connect_time connection consider consistent constant constraint constraints constructor container content contents context contributors controlfile conv convert convert_tz corr corr_k corr_s corresponding corruption cos cost count count_big counted covar_pop covar_samp cpu_per_call cpu_per_session crc32 create creation critical cross cube cume_dist curdate current current_date current_time current_timestamp current_user cursor curtime customdatum cycle data database databases datafile datafiles datalength date_add date_cache date_format date_sub dateadd datediff datefromparts datename datepart datetime2fromparts day day_to_second dayname dayofmonth dayofweek dayofyear days db_role_change dbtimezone ddl deallocate declare decode decompose decrement decrypt deduplicate def defa defau defaul default defaults deferred defi defin define degrees delayed delegate delete delete_all delimited demand dense_rank depth dequeue des_decrypt des_encrypt des_key_file desc descr descri describ describe descriptor deterministic diagnostics difference dimension direct_load directory disable disable_all disallow disassociate discardfile disconnect diskgroup distinct distinctrow distribute distributed div do document domain dotnet double downgrade drop dumpfile duplicate duration each edition editionable editions element ellipsis else elsif elt empty enable enable_all enclosed encode encoding encrypt end end-exec endian enforced engine engines enqueue enterprise entityescaping eomonth error errors escaped evalname evaluate event eventdata events except exception exceptions exchange exclude excluding execu execut execute exempt exists exit exp expire explain explode export export_set extended extent external external_1 external_2 externally extract failed failed_login_attempts failover failure far fast feature_set feature_value fetch field fields file file_name_convert filesystem_like_logging final finish first first_value fixed flash_cache flashback floor flush following follows for forall force foreign form forma format found found_rows freelist freelists freepools fresh from from_base64 from_days ftp full function general generated get get_format get_lock getdate getutcdate global global_name globally go goto grant grants greatest group group_concat group_id grouping grouping_id groups gtid_subtract guarantee guard handler hash hashkeys having hea head headi headin heading heap help hex hierarchy high high_priority hosts hour hours http id ident_current ident_incr ident_seed identified identity idle_time if ifnull ignore iif ilike ilm immediate import in include including increment index indexes indexing indextype indicator indices inet6_aton inet6_ntoa inet_aton inet_ntoa infile initial initialized initially initrans inmemory inner innodb input insert install instance instantiable instr interface interleaved intersect into invalidate invisible is is_free_lock is_ipv4 is_ipv4_compat is_not is_not_null is_used_lock isdate isnull isolation iterate java join json json_exists keep keep_duplicates key keys kill language large last last_day last_insert_id last_value lateral lax lcase lead leading least leaves left len lenght length less level levels library like like2 like4 likec limit lines link list listagg little ln load load_file lob lobs local localtime localtimestamp locate locator lock locked log log10 log2 logfile logfiles logging logical logical_reads_per_call logoff logon logs long loop low low_priority lower lpad lrtrim ltrim main make_set makedate maketime managed management manual map mapping mask master master_pos_wait match matched materialized max maxextents maximize maxinstances maxlen maxlogfiles maxloghistory maxlogmembers maxsize maxtrans md5 measures median medium member memcompress memory merge microsecond mid migration min minextents minimum mining minus minute minutes minvalue missing mod mode model modification modify module monitoring month months mount move movement multiset mutex name name_const names nan national native natural nav nchar nclob nested never new newline next nextval no no_write_to_binlog noarchivelog noaudit nobadfile nocheck nocompress nocopy nocycle nodelay nodiscardfile noentityescaping noguarantee nokeep nologfile nomapping nomaxvalue nominimize nominvalue nomonitoring none noneditionable nonschema noorder nopr nopro noprom nopromp noprompt norely noresetlogs noreverse normal norowdependencies noschemacheck noswitch not nothing notice notnull notrim novalidate now nowait nth_value nullif nulls num numb numbe nvarchar nvarchar2 object ocicoll ocidate ocidatetime ociduration ociinterval ociloblocator ocinumber ociref ocirefcursor ocirowid ocistring ocitype oct octet_length of off offline offset oid oidindex old on online only opaque open operations operator optimal optimize option optionally or oracle oracle_date oradata ord ordaudio orddicom orddoc order ordimage ordinality ordvideo organization orlany orlvary out outer outfile outline output over overflow overriding package pad parallel parallel_enable parameters parent parse partial partition partitions pascal passing password password_grace_time password_lock_time password_reuse_max password_reuse_time password_verify_function patch path patindex pctincrease pctthreshold pctused pctversion percent percent_rank percentile_cont percentile_disc performance period period_add period_diff permanent physical pi pipe pipelined pivot pluggable plugin policy position post_transaction pow power pragma prebuilt precedes preceding precision prediction prediction_cost prediction_details prediction_probability prediction_set prepare present preserve prior priority private private_sga privileges procedural procedure procedure_analyze processlist profiles project prompt protection public publishingservername purge quarter query quick quiesce quota quotename radians raise rand range rank raw read reads readsize rebuild record records recover recovery recursive recycle redo reduced ref reference referenced references referencing refresh regexp_like register regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy reject rekey relational relative relaylog release release_lock relies_on relocate rely rem remainder rename repair repeat replace replicate replication required reset resetlogs resize resource respect restore restricted result result_cache resumable resume retention return returning returns reuse reverse revoke right rlike role roles rollback rolling rollup round row row_count rowdependencies rowid rownum rows rtrim rules safe salt sample save savepoint sb1 sb2 sb4 scan schema schemacheck scn scope scroll sdo_georaster sdo_topo_geometry search sec_to_time second seconds section securefile security seed segment select self semi sequence sequential serializable server servererror session session_user sessions_per_user set sets settings sha sha1 sha2 share shared shared_pool short show shrink shutdown si_averagecolor si_colorhistogram si_featurelist si_positionalcolor si_stillimage si_texture siblings sid sign sin size size_t sizes skip slave sleep smalldatetimefromparts smallfile snapshot some soname sort soundex source space sparse spfile split sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_small_result sql_variant_property sqlcode sqldata sqlerror sqlname sqlstate sqrt square standalone standby start starting startup statement static statistics stats_binomial_test stats_crosstab stats_ks_test stats_mode stats_mw_test stats_one_way_anova stats_t_test_ stats_t_test_indep stats_t_test_one stats_t_test_paired stats_wsr_test status std stddev stddev_pop stddev_samp stdev stop storage store stored str str_to_date straight_join strcmp strict string struct stuff style subdate subpartition subpartitions substitutable substr substring subtime subtring_index subtype success sum suspend switch switchoffset switchover sync synchronous synonym sys sys_xmlagg sysasm sysaux sysdate sysdatetimeoffset sysdba sysoper system system_user sysutcdatetime table tables tablespace tablesample tan tdo template temporary terminated tertiary_weights test than then thread through tier ties time time_format time_zone timediff timefromparts timeout timestamp timestampadd timestampdiff timezone_abbr timezone_minute timezone_region to to_base64 to_date to_days to_seconds todatetimeoffset trace tracking transaction transactional translate translation treat trigger trigger_nestlevel triggers trim truncate try_cast try_convert try_parse type ub1 ub2 ub4 ucase unarchived unbounded uncompress under undo unhex unicode uniform uninstall union unique unix_timestamp unknown unlimited unlock unnest unpivot unrecoverable unsafe unsigned until untrusted unusable unused update updated upgrade upped upper upsert url urowid usable usage use use_stored_outlines user user_data user_resources users using utc_date utc_timestamp uuid uuid_short validate validate_password_strength validation valist value values var var_samp varcharc vari varia variab variabl variable variables variance varp varraw varrawc varray verify version versions view virtual visible void wait wallet warning warnings week weekday weekofyear wellformed when whene whenev wheneve whenever where while whitespace window with within without work wrapped xdb xml xmlagg xmlattributes xmlcast xmlcolattval xmlelement xmlexists xmlforest xmlindex xmlnamespaces xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltype xor year year_to_month years yearweek",
          literal: "true false null unknown",
          built_in: "array bigint binary bit blob bool boolean char character date dec decimal float int int8 integer interval number numeric real record serial serial8 smallint text time timestamp tinyint varchar varying void"
        },
        c: [{cN: "string", b: "'", e: "'", c: [e.BE, {b: "''"}]}, {
          cN: "string",
          b: '"',
          e: '"',
          c: [e.BE, {b: '""'}]
        }, {cN: "string", b: "`", e: "`", c: [e.BE]}, e.CNM, e.CBCM, t, e.HCM]
      }, e.CBCM, t, e.HCM]
    }
  }), a.registerLanguage("swift", function (e) {
    var t = {
        keyword: "#available #colorLiteral #column #else #elseif #endif #file #fileLiteral #function #if #imageLiteral #line #selector #sourceLocation _ __COLUMN__ __FILE__ __FUNCTION__ __LINE__ Any as as! as? associatedtype associativity break case catch class continue convenience default defer deinit didSet do dynamic dynamicType else enum extension fallthrough false fileprivate final for func get guard if import in indirect infix init inout internal is lazy left let mutating nil none nonmutating open operator optional override postfix precedence prefix private protocol Protocol public repeat required rethrows return right self Self set static struct subscript super switch throw throws true try try! try? Type typealias unowned var weak where while willSet",
        literal: "true false nil",
        built_in: "abs advance alignof alignofValue anyGenerator assert assertionFailure bridgeFromObjectiveC bridgeFromObjectiveCUnconditional bridgeToObjectiveC bridgeToObjectiveCUnconditional c contains count countElements countLeadingZeros debugPrint debugPrintln distance dropFirst dropLast dump encodeBitsAsWords enumerate equal fatalError filter find getBridgedObjectiveCType getVaList indices insertionSort isBridgedToObjectiveC isBridgedVerbatimToObjectiveC isUniquelyReferenced isUniquelyReferencedNonObjC join lazy lexicographicalCompare map max maxElement min minElement numericCast overlaps partition posix precondition preconditionFailure print println quickSort readLine reduce reflect reinterpretCast reverse roundUpToAlignment sizeof sizeofValue sort split startsWith stride strideof strideofValue swap toString transcode underestimateCount unsafeAddressOf unsafeBitCast unsafeDowncast unsafeUnwrap unsafeReflect withExtendedLifetime withObjectAtPlusZero withUnsafePointer withUnsafePointerToObject withUnsafeMutablePointer withUnsafeMutablePointers withUnsafePointer withUnsafePointers withVaList zip"
      }, r = e.C("/\\*", "\\*/", {c: ["self"]}), n = {cN: "subst", b: /\\\(/, e: "\\)", k: t, c: []},
      a = {cN: "string", c: [e.BE, n], v: [{b: /"""/, e: /"""/}, {b: /"/, e: /"/}]}, i = {
        cN: "number",
        b: "\\b([\\d_]+(\\.[\\deE_]+)?|0x[a-fA-F0-9_]+(\\.[a-fA-F0-9p_]+)?|0b[01_]+|0o[0-7_]+)\\b",
        r: 0
      };
    return n.c = [i], {
      k: t,
      c: [a, e.CLCM, r, {cN: "type", b: "\\b[A-Z][\\wÀ-ʸ']*[!?]"}, {
        cN: "type",
        b: "\\b[A-Z][\\wÀ-ʸ']*",
        r: 0
      }, i, {
        cN: "function",
        bK: "func",
        e: "{",
        eE: !0,
        c: [e.inherit(e.TM, {b: /[A-Za-z$_][0-9A-Za-z$_]*/}), {b: /</, e: />/}, {
          cN: "params",
          b: /\(/,
          e: /\)/,
          endsParent: !0,
          k: t,
          c: ["self", i, a, e.CBCM, {b: ":"}],
          i: /["']/
        }],
        i: /\[|%/
      }, {
        cN: "class",
        bK: "struct protocol class extension enum",
        k: t,
        e: "\\{",
        eE: !0,
        c: [e.inherit(e.TM, {b: /[A-Za-z$_][\u00C0-\u02B80-9A-Za-z$_]*/})]
      }, {
        cN: "meta",
        b: "(@discardableResult|@warn_unused_result|@exported|@lazy|@noescape|@NSCopying|@NSManaged|@objc|@objcMembers|@convention|@required|@noreturn|@IBAction|@IBDesignable|@IBInspectable|@IBOutlet|@infix|@prefix|@postfix|@autoclosure|@testable|@available|@nonobjc|@NSApplicationMain|@UIApplicationMain)"
      }, {bK: "import", e: /$/, c: [e.CLCM, r]}]
    }
  }), a.registerLanguage("typescript", function (e) {
    var t = "[A-Za-z$_][0-9A-Za-z$_]*", r = {
        keyword: "in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const class public private protected get set super static implements enum export import declare type namespace abstract as from extends async await",
        literal: "true false null undefined NaN Infinity",
        built_in: "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document any number boolean string void Promise"
      }, n = {cN: "meta", b: "@" + t}, a = {b: "\\(", e: /\)/, k: r, c: ["self", e.QSM, e.ASM, e.NM]},
      i = {cN: "params", b: /\(/, e: /\)/, eB: !0, eE: !0, k: r, c: [e.CLCM, e.CBCM, n, a]};
    return {
      aliases: ["ts"],
      k: r,
      c: [{cN: "meta", b: /^\s*['"]use strict['"]/}, e.ASM, e.QSM, {
        cN: "string",
        b: "`",
        e: "`",
        c: [e.BE, {cN: "subst", b: "\\$\\{", e: "\\}"}]
      }, e.CLCM, e.CBCM, {
        cN: "number",
        v: [{b: "\\b(0[bB][01]+)"}, {b: "\\b(0[oO][0-7]+)"}, {b: e.CNR}],
        r: 0
      }, {
        b: "(" + e.RSR + "|\\b(case|return|throw)\\b)\\s*",
        k: "return throw case",
        c: [e.CLCM, e.CBCM, e.RM, {
          cN: "function",
          b: "(\\(.*?\\)|" + e.IR + ")\\s*=>",
          rB: !0,
          e: "\\s*=>",
          c: [{
            cN: "params",
            v: [{b: e.IR}, {b: /\(\s*\)/}, {b: /\(/, e: /\)/, eB: !0, eE: !0, k: r, c: ["self", e.CLCM, e.CBCM]}]
          }]
        }],
        r: 0
      }, {
        cN: "function",
        b: "function",
        e: /[\{;]/,
        eE: !0,
        k: r,
        c: ["self", e.inherit(e.TM, {b: t}), i],
        i: /%/,
        r: 0
      }, {bK: "constructor", e: /\{/, eE: !0, c: ["self", i]}, {
        b: /module\./,
        k: {built_in: "module"},
        r: 0
      }, {bK: "module", e: /\{/, eE: !0}, {
        bK: "interface",
        e: /\{/,
        eE: !0,
        k: "interface extends"
      }, {b: /\$[(.]/}, {b: "\\." + e.IR, r: 0}, n, a]
    }
  }), a
});

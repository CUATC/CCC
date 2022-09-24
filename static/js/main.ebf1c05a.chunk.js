(this.webpackJsonptpunks = this.webpackJsonptpunks || []).push([
    [0], {
        1008: function(e, t, n) {},
        1012: function(e, t) {},
        1070: function(e, t) {},
        1165: function(e, t, n) {},
        1270: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n(1),
                r = n.n(a),
                c = n(51),
                s = n.n(c),
                i = (n(653), n(42)),
                o = n(2),
                l = n(8),
                d = n(9),
                b = n(628),
                j = n(1307),
                x = n(1337),
                p = (n(654), n(43)),
                u = n.n(p),
                g = n(83),
                h = n(68),
                m = n(1309),
                f = n(227),
                O = n(1310),
                y = n(1311),
                k = n(1339),
                w = n(1314),
                v = n(1313),
                T = n(1312),
                A = n(13),
                S = (n(672), ""),
                N = n(0),
                C = Object(j.a)((function(e) {
                    return {
                        root: {
                            color: "white"
                        },
                        colortoggle: {
                            color: e.palette.secondary.bw
                        },
                        btntoggle: {
                            height: "30px",
                            padding: "5px 20px",
                            color: "white",
                            border: "1px solid ".concat(e.palette.secondary.btnborder),
                            marginTop: "20px",
                            borderRadius: "5px",
                            background: e.palette.secondary.btnbg
                        },
                        cardbtnbgc: {
                            background: e.palette.secondary.cardbg
                        },
                        minted: {
                            opacity: "0.3"
                        },
                        wb: {
                            background: e.palette.secondary.wb
                        }
                    }
                })),
                I = function(e) {
                    var t = e.galleryPunks,
                        n = e.setfiltermodalopen,
                        r = e.sortBy,
                        c = e.setcurrentSellingNftObject,
                        s = e.setfromgallery,
                        i = e.setgalleryState,
                        b = e.setcurrent3dLink,
                        j = e.setviewmodalopen,
                        x = e.setupperBound,
                        p = e.upperBound,
                        h = e.setloadmoreState,
                        S = e.setfilterLoadmore,
                        I = (e.filterLoadmore, e.setdata),
                        R = e.data,
                        M = e.setloadmoreObject,
                        F = e.loadmoreObject,
                        E = e.setfield,
                        B = e.field,
                        D = e.initMinted,
                        L = C(),
                        W = Object(a.useState)(""),
                        z = Object(d.a)(W, 2),
                        P = z[0],
                        U = z[1],
                        G = Object(a.useState)(!1),
                        Y = Object(d.a)(G, 2),
                        Z = Y[0],
                        H = Y[1],
                        V = Object(a.useState)(!1),
                        Q = Object(d.a)(V, 2),
                        J = Q[0],
                        X = Q[1],
                        K = Object(a.useState)(!1),
                        q = Object(d.a)(K, 2),
                        _ = (q[0], q[1]);

                    function $(e) {
                        return ee.apply(this, arguments)
                    }

                    function ee() {
                        return ee = Object(l.a)(Object(o.a)().mark((function e(n) {
                            var a;
                            return Object(o.a)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (n) {
                                            e.next = 4;
                                            break
                                        }
                                        U(t), e.next = 21;
                                        break;
                                    case 4:
                                        if (!isNaN(n)) {
                                            e.next = 15;
                                            break
                                        }
                                        if ("Human" != (a = n.toLowerCase()) && "punk" != a && "ninja" != a && "winkster" != a && "mcdonald" != a && "justinsun" != a && "unknown" != a && "oompaloompa" != a) {
                                            e.next = 11;
                                            break
                                        }
                                        return e.next = 9, u.a.post("/search", {
                                            criteria: "type",
                                            data: n
                                        }).then((function(e) {
                                            U(e.data), _(!0)
                                        }));
                                    case 9:
                                        e.next = 13;
                                        break;
                                    case 11:
                                        return e.next = 13, u.a.post("/search", {
                                            criteria: "attribute",
                                            data: n
                                        }).then((function(e) {
                                            U(e.data), _(!0)
                                        }));
                                    case 13:
                                        e.next = 21;
                                        break;
                                    case 15:
                                        if (!(Number(n) >= 1 && Number(n) <= 1e4)) {
                                            e.next = 20;
                                            break
                                        }
                                        return e.next = 18, u.a.post("/search", {
                                            criteria: "id",
                                            data: n
                                        }).then((function(e) {
                                            U(e.data)
                                        }));
                                    case 18:
                                        e.next = 21;
                                        break;
                                    case 20:
                                        A.b.error("Data not Found");
                                    case 21:
                                        H(!1), X(!1), I(!1);
                                    case 24:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), ee.apply(this, arguments)
                    }

                    function te(e) {
                        return ne.apply(this, arguments)
                    }

                    function ne() {
                        return (ne = Object(l.a)(Object(o.a)().mark((function e(t) {
                            return Object(o.a)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, u.a.post("/nftlist1", {
                                            maxLimit: p,
                                            criteria: t.criteria,
                                            value: t.value
                                        }).then((function(e) {
                                            U(e.data), _(!0)
                                        }));
                                    case 2:
                                        I(!1);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))).apply(this, arguments)
                    }
                    Object(a.useEffect)((function() {
                        (Z || F.searchbyid) && $(B)
                    }), [Z]), Object(a.useEffect)((function() {
                        t.length > 0 && F.defaultLoadmore && U(t)
                    }), [t]), Object(a.useEffect)((function() {
                        r && F.searchbyvalue && te(r)
                    }), [r]);
                    return window.onscroll = function(e) {
                        window.innerHeight + window.scrollY >= document.body.offsetHeight && I(!0)
                    }, Object(a.useEffect)((function() {
                        R && F.defaultLoadmore ? (x(p + 50), h(!0)) : R && F.searchbyid ? (x(p + 50), $(B)) : R && F.searchbyvalue && (x(p + 50), te(r))
                    }), [R]), Object(a.useEffect)((function() {
                        D()
                    }), [D]), Object(N.jsx)("div", {
                        children: Object(N.jsxs)(m.a, {
                            container: !0,
                            style: {
                                padding: "40px"
                            },
                            children: [Object(N.jsx)(m.a, {
                                container: !0,
                                item: !0,
                                xs: 12,
                                md: 3,
                                style: {
                                    textAlign: "center"
                                },
                                children: Object(N.jsxs)(m.a, {
                                    item: !0,
                                    xs: 12,
                                    children: [Object(N.jsx)(f.a, {
                                        className: L.colortoggle,
                                        paragraph: !0,
                                        style: {
                                            textAlign: "center"
                                        },
                                        children: "Search Here"
                                    }), Object(N.jsx)("input", {
                                        value: B,
                                        onChange: function(e) {
                                            E(e.target.value)
                                        },
                                        autoComplete: "off",
                                        className: L.colortoggle,
                                        style: {
                                            width: "98%",
                                            border: "1px solid #744F4F",
                                            borderRadius: "5px",
                                            padding: "14px 0px 14px 0px",
                                            background: "none",
                                            textIndent: "8px"
                                        },
                                        id: "outlined-basic",
                                        placeholder: "Enter your Search",
                                        variant: "outlined"
                                    }), J ? Object(N.jsxs)(O.a, {
                                        variant: "outlined",
                                        color: "primary",
                                        style: {
                                            marginTop: "15px",
                                            width: "98%"
                                        },
                                        children: [Object(N.jsx)("span", {
                                            className: L.colortoggle,
                                            children: "Loading..."
                                        }), " "]
                                    }) : Object(N.jsxs)(O.a, {
                                        onClick: function() {
                                            S(!1), H(!0), X(!0), M({
                                                defaultLoadmore: !1,
                                                searchbyid: !0,
                                                searchbyvalue: !1
                                            })
                                        },
                                        variant: "outlined",
                                        color: "primary",
                                        style: {
                                            marginTop: "15px",
                                            width: "98%"
                                        },
                                        children: [Object(N.jsx)("span", {
                                            className: L.colortoggle,
                                            children: "Search"
                                        }), " "]
                                    }), Object(N.jsxs)(O.a, {
                                        onClick: function() {
                                            n(!0)
                                        },
                                        variant: "outlined",
                                        color: "primary",
                                        style: {
                                            marginTop: "15px",
                                            width: "98%"
                                        },
                                        children: [Object(N.jsx)("span", {
                                            className: L.colortoggle,
                                            children: "Filter"
                                        }), " ", Object(N.jsx)("i", {
                                            className: L.colortoggle + " fas fa-sliders-h",
                                            style: {
                                                fontSize: "18px",
                                                marginLeft: "6px"
                                            }
                                        })]
                                    })]
                                })
                            }), Object(N.jsxs)(m.a, {
                                container: !0,
                                item: !0,
                                xs: 12,
                                md: 9,
                                style: {
                                    textAlign: "center",
                                    marginTop: "40px"
                                },
                                children: [P.length > 0 ? P.slice(0, p).map((function(e, t) {
                                    return Object(N.jsx)(m.a, {
                                        style: {
                                            marginBottom: "30px"
                                        },
                                        item: !0,
                                        xs: 12,
                                        md: 4,
                                        lg: 3,
                                        children: Object(N.jsxs)(g.b, {
                                            style: {
                                                width: "100%",
                                                textDecoration: "none"
                                            },
                                            to: "/CuteApeinfo/".concat(e.nftid),
                                            children: [Object(N.jsxs)(y.a, {
                                                onClick: function() {
                                                    i(!0), s(!0), c(e), b(e.view3D), j(!0)
                                                },
                                                style: {
                                                    background: "transparent",
                                                    width: "400px",
                                                    maxWidth: "90%",
                                                    margin: "auto",
                                                    textAlign: "left",
                                                    border: "1px solid #DFDFDF"
                                                },
                                                children: [Object(N.jsx)(T.a, {
                                                    className: "false" == e.nftOwner ? L.minted : null,
                                                    style: {
                                                        maxWidth: "400px"
                                                    },
                                                    component: "img",
                                                    height: "auto",
                                                    image: e.nftimage,
                                                    alt: "green iguana"
                                                }), Object(N.jsxs)(v.a, {
                                                    className: L.wb,
                                                    children: [Object(N.jsxs)(f.a, {
                                                        className: L.colortoggle,
                                                        variant: "h5",
                                                        component: "div",
                                                        children: ["CuteATC #", e.nftid]
                                                    }), Object(N.jsx)(f.a, {
                                                        paragraph: !0,
                                                        style: {
                                                            color: "#6C757D"
                                                        },
                                                        children: "SSR" == e.type ? e.type + " (Super Super Rare)" : e.type
                                                    }), Object(N.jsxs)(f.a, {
                                                        className: L.colortoggle,
                                                        children: ["Type: ", e.nftattributes[0].Type ? e.nftattributes[0].Type : null]
                                                    }), Object(N.jsxs)(f.a, {
                                                        className: L.colortoggle,
                                                        children: ["Rarity Rank:", e.nftRank]
                                                    })]
                                                })]
                                            }), Object(N.jsx)(k.a, {
                                                width: "100%",
                                                height: "10px"
                                            })]
                                        })
                                    }, t)
                                })) : null, P.length <= 0 ? Object(N.jsxs)(k.a, {
                                    width: "100%",
                                    style: {
                                        fontWeight: "bold",
                                        textAlign: "center",
                                        fontSize: "40px",
                                        color: "red"
                                    },
                                    children: ["No CuteATC Available", Object(N.jsx)("br", {}), Object(N.jsx)("br", {}), Object(N.jsx)(w.a, {})]
                                }) : null]
                            }), Object(N.jsx)(m.a, {
                                item: !0,
                                container: !0,
                                style: {
                                    marginTop: "10px"
                                },
                                children: Object(N.jsxs)(m.a, {
                                    container: !0,
                                    item: !0,
                                    justifyContent: "flex-start",
                                    children: [Object(N.jsxs)(m.a, {
                                        item: !0,
                                        children: [" ", Object(N.jsx)("a", {
                                            href: "https://t.me/tblocksw",
                                            target: "_blank",
                                            children: Object(N.jsx)("i", {
                                                style: {
                                                    color: "rgb(51, 51, 51)",
                                                    fontSize: "30px"
                                                },
                                                class: "fab fa-telegram"
                                            })
                                        })]
                                    }), Object(N.jsx)(m.a, {
                                        item: !0,
                                        children: Object(N.jsx)("a", {
                                            href: "https://twitter.com/tblocksw",
                                            target: "_blank",
                                            children: Object(N.jsx)("i", {
                                                style: {
                                                    color: "rgb(51, 51, 51)",
                                                    marginLeft: "8px",
                                                    fontSize: "30px"
                                                },
                                                class: "fab fa-twitter"
                                            })
                                        })
                                    }), Object(N.jsx)(m.a, {
                                        item: !0,
                                        children: Object(N.jsx)("a", {
                                            href: "https://discord.gg/ChfDagP9",
                                            target: "_blank",
                                            children: Object(N.jsx)("i", {
                                                style: {
                                                    color: "rgb(51, 51, 51)",
                                                    marginLeft: "8px",
                                                    fontSize: "30px"
                                                },
                                                class: "fab fa-discord"
                                            })
                                        })
                                    }), Object(N.jsx)(m.a, {
                                        item: !0,
                                        children: Object(N.jsx)("a", {
                                            href: "https://peridot-heather-e84.notion.site/Getting-Started-ad66f7fe2a654ebfbbdbc6861116991d",
                                            target: "_blank",
                                            children: Object(N.jsx)("i", {
                                                style: {
                                                    color: "rgb(51, 51, 51)",
                                                    marginLeft: "8px",
                                                    fontSize: "30px"
                                                },
                                                class: "fas fa-sticky-note"
                                            })
                                        })
                                    })]
                                })
                            })]
                        })
                    })
                },
                R = n(29),
                M = n(99),
                F = n(1315),
                E = n(1320),
                B = n(1340),
                D = n(14),
                L = n(1321),
                W = n(1316),
                z = n(1319),
                P = n(1317),
                U = n(1318),
                G = n(611),
                Y = n.n(G),
                Z = n(407),
                H = n.n(Z),
                V = n.p + "./images/logoweb.svg",
                Q = n.p + "./images/logoweb.svg",
                J = Object(j.a)((function(e) {
                    return {
                        mian: {
                            flexGrow: 1,
                            backgroundColor: "white",
                            height: "80px",
                            background: e.palette.primary.dark
                        },
                        logo: {
                            maxWidth: 136,
                            paddingTop: "1.5%",
                            fontSize: "19px",
                            fontStyle: "normal",
                            fontWeight: 400,
                            lineHeight: "22px",
                            letterSpacing: "0em"
                        },
                        linkCont: {
                            alignContent: "space-betwen",
                            justifyContent: "space-between",
                            marginTop: 9
                        },
                        myLinks: {
                            "& a": {
                                color: e.palette.primary.main,
                                textDecoration: "none",
                                paddingBottom: 10
                            },
                            "& a:hover": {
                                transition: 1,
                                borderBottom: "1px solid white"
                            },
                            padding: "10px 0px",
                            color: "#fff",
                            fontSize: 16,
                            fontWeight: 600,
                            transition: "0.3s",
                            letteSpacing: "0.4px",
                            textTransform: "uppercase"
                        },
                        bg: {
                            background: e.palette.primary.dark
                        },
                        list: {
                            width: 250
                        },
                        fullList: {
                            width: "auto"
                        },
                        lunchTest: {
                            background: "#EEEEEE",
                            padding: "13px 30px",
                            borderRadius: "30px"
                        },
                        img: {
                            width: "186px",
                            height: "80px",
                            marginTop: "-20px"
                        },
                        colortoggle: {
                            color: e.palette.secondary.whitepink
                        },
                        bgcmenu: {
                            background: e.palette.secondary.bgcmenu
                        }
                    }
                })),
                X = function(e) {
                    var t, n = e.isDarkMode,
                        r = e.setIsDarkMode,
                        c = e.setfromgallery,
                        s = e.setupdateGallery,
                        i = (e.userWalletAddress, [{
                            pagename: "Home",
                            link: "/"
                        }, {
                            pagename: "My CuteATC",
                            link: "/CuteApe"
                        }, {
                            pagename: "Gallery",
                            link: "/gallery"
                        }, {
                            pagename: "Stake",
                            link: "/stake"
                        }, {
                            pagename: "Exchange",
                            link: "/exchange"
                        }]),
                        o = J(),
                        l = (Object(F.a)("(max-width:1030px)"), Object(a.useState)({
                            top: !1,
                            left: !1,
                            bottom: !1,
                            right: !1
                        })),
                        b = Object(d.a)(l, 2),
                        j = b[0],
                        x = b[1],
                        p = function(e, t) {
                            return function(n) {
                                ("keydown" !== n.type || "Tab" !== n.key && "Shift" !== n.key) && x(Object(M.a)(Object(M.a)({}, j), {}, Object(R.a)({}, e, t)))
                            }
                        };
                    return Object(N.jsx)(N.Fragment, {
                        children: Object(N.jsx)("div", {
                            className: o.bg,
                            style: {
                                height: "80px",
                                paddingTop: "10px",
                                width: "100%",
                                top: 0,
                                position: "fixed",
                                margin: "auto",
                                zIndex: "999",
                                borderBottom: "3px solid #FF0000"
                            },
                            children: Object(N.jsx)(E.a, {
                                className: o.main,
                                children: Object(N.jsxs)(m.a, {
                                    container: !0,
                                    justifyContent: "space-between",
                                    children: [Object(N.jsx)(m.a, {
                                        item: !0,
                                        xs: 6,
                                        sm: 4,
                                        md: 8,
                                        lg: 8,
                                        className: o.logo,
                                        children: Object(N.jsx)(g.b, {
                                            to: "/",
                                            children: Object(N.jsx)("img", {
                                                src: "images/logoweb.svg",
                                                className: o.img
                                            })
                                        })
                                    }), Object(N.jsx)(B.a, {
                                        smDown: !0,
                                        children: Object(N.jsx)(m.a, {
                                            item: !0,
                                            xs: 10,
                                            sm: 8,
                                            md: 9,
                                            lg: 8,
                                            className: o.linkCont,
                                            children: Object(N.jsxs)(m.a, {
                                                container: !0,
                                                className: o.linkCont,
                                                alignItems: "center",
                                                children: [i.map((function(e, t) {
                                                    return Object(N.jsx)(m.a, {
                                                        item: !0,
                                                        className: o.myLinks,
                                                        children: Object(N.jsxs)(g.b, {
                                                            onClick: function() {
                                                                s(!0), "Forsale" == e.pagename && c(!1)
                                                            },
                                                            to: e.link,
                                                            children: [" ", e.pagename]
                                                        })
                                                    }, t)
                                                })), Object(N.jsx)(m.a, {
                                                    item: !0,
                                                    className: o.myLinks,
                                                    children: Object(N.jsx)("a", {
                                                        href: "https://tronscan.org/#/contract/TC4JHeEABp9rctToJon2adWaKkYKQ7UhXB/transactions",
                                                        target: "_blank",
                                                        children: "CONTRACT"
                                                    })
                                                }), Object(N.jsx)(H.a, {
                                                    onChange: r,
                                                    checked: n,
                                                    size: 80
                                                })]
                                            })
                                        })
                                    }), Object(N.jsxs)(B.a, {
                                        mdUp: !0,
                                        children: [Object(N.jsx)(O.a, {
                                            onClick: p("left", !0),
                                            children: Object(N.jsx)(Y.a, {
                                                style: {
                                                    color: "#7F7F7F",
                                                    marginTop: "0px",
                                                    fontSize: "45px"
                                                }
                                            })
                                        }), Object(N.jsx)(L.a, {
                                            anchor: "top",
                                            open: j.left,
                                            onClose: p("left", !1),
                                            children: Object(N.jsx)("span", {
                                                onClick: p("left", !1),
                                                children: (t = "right", Object(N.jsxs)("div", {
                                                    style: {
                                                        width: "100%"
                                                    },
                                                    className: o.bgcmenu + " " + Object(D.default)(o.list, Object(R.a)({}, o.fullList, "top" === t || "bottom" === t)),
                                                    role: "presentation",
                                                    onClick: p(t, !1),
                                                    onKeyDown: p(t, !1),
                                                    children: [Object(N.jsxs)(W.a, {
                                                        children: [i.map((function(e, t) {
                                                            return Object(N.jsx)(P.a, {
                                                                button: !0,
                                                                children: Object(N.jsx)(g.b, {
                                                                    style: {
                                                                        textDecoration: "none"
                                                                    },
                                                                    to: e.link,
                                                                    children: Object(N.jsx)(U.a, {
                                                                        onClick: function() {},
                                                                        className: o.colortoggle,
                                                                        primary: e.pagename
                                                                    })
                                                                })
                                                            }, e)
                                                        })), Object(N.jsx)(P.a, {
                                                            children: Object(N.jsx)("a", {
                                                                href: "https://tronscan.org/#/contract/TC4JHeEABp9rctToJon2adWaKkYKQ7UhXB/code",
                                                                target: "_blank",
                                                                className: o.colortoggle,
                                                                style: {
                                                                    textDecoration: "none"
                                                                },
                                                                children: Object(N.jsx)(U.a, {
                                                                    children: "Contract"
                                                                })
                                                            })
                                                        }), Object(N.jsx)(P.a, {
                                                            children: Object(N.jsx)(H.a, {
                                                                onChange: r,
                                                                checked: n,
                                                                size: 80
                                                            })
                                                        })]
                                                    }), Object(N.jsx)(z.a, {})]
                                                }))
                                            })
                                        })]
                                    })]
                                })
                            })
                        })
                    })
                },
                K = (n(688), n(612)),
                q = n.n(K),
                _ = "TC4JHeEABp9rctToJon2adWaKkYKQ7UhXB",
                $ = "TN7rpquz9k4ga5d9JwqNE6kcqwn7MnbM5n",
                ee = "TSv5Rw3FtBbpYu9esvLhX2X1Crmu9EoW7D",
                te = "TXAbarR3w4uCQmnZ8Y6Bs6ydj4P7paWMcH",
                ne = Object(j.a)((function(e) {
                    return {
                        bw: {
                            color: e.palette.secondary.bw
                        },
                        gw: {
                            color: e.palette.secondary.gw
                        }
                    }
                })),
                ae = function(e) {
                    var t = e.userWalletAddress,
                        n = e.nftPrice,
                        r = e.nftPriceToken,
                        c = e.totalSupply,
                        s = e.setlogoutopen,
                        i = e.userAction,
                        b = e.setActivation,
                        j = e.galleryPunks,
                        x = e.totalAvailable,
                        p = (e.setMintArray, e.setBuyConfirmation),
                        u = e.isMintProcessing,
                        h = e.setisMintProcessing,
                        m = e.setmintNumber,
                        y = (e.setMongoIds, e.contractNft),
                        w = e.setloading,
                        v = e.setisTrc20,
                        T = e.isTrc20,
                        S = e.allowance,
                        C = e.nftTokenprice,
                        I = e.tronWeb,
                        R = e.balanceOf,
                        M = e.contractToken,
                        F = e.setupdateInfo,
                        B = e.setairdropState,
                        D = (e.loading, e.setrandomSelectionIds, Object(a.useState)(1)),
                        L = Object(d.a)(D, 2),
                        W = L[0],
                        z = L[1],
                        P = ne(),
                        U = function() {
                            var e = Object(l.a)(Object(o.a)().mark((function e() {
                                var t, n;
                                return Object(o.a)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, A.b.success("BANANA Minting..."), e.next = 4, M.approve(_, R).send();
                                        case 4:
                                            t = e.sent, n = setInterval((function() {
                                                I.trx.getUnconfirmedTransactionInfo(t.toString()).then(function() {
                                                    var e = Object(l.a)(Object(o.a)().mark((function e(t) {
                                                        return Object(o.a)().wrap((function(e) {
                                                            for (;;) switch (e.prev = e.next) {
                                                                case 0:
                                                                    "SUCCESS" == t.receipt.result ? (clearInterval(n), m(+W), p(!0), h(!0)) : (A.b.error("Failed to Approve"), clearInterval(n), w(!1));
                                                                case 1:
                                                                case "end":
                                                                    return e.stop()
                                                            }
                                                        }), e)
                                                    })));
                                                    return function(t) {
                                                        return e.apply(this, arguments)
                                                    }
                                                }()).catch((function(e) {
                                                    console.log("error", e)
                                                }))
                                            }), 2e3), e.next = 12;
                                            break;
                                        case 8:
                                            e.prev = 8, e.t0 = e.catch(0), w(!1), console.log(e.t0.message, "error");
                                        case 12:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 8]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                    return Object(N.jsx)("div", {
                        style: {
                            maxWidth: "1232px",
                            margin: "8px auto"
                        },
                        children: Object(N.jsx)(k.a, {
                            textAlign: "center",
                            style: {
                                padding: "20px 0px",
                                border: "6px outset #8e8e8e"
                            },
                            children: Object(N.jsxs)(E.a, {
                                children: [Object(N.jsx)(f.a, {
                                    style: {
                                        fontSize: "30px",
                                        fontWeight: "bold"
                                    },
                                    variant: "h5",
                                    fontSize: {
                                        xs: "16px",
                                        md: "30px"
                                    },
                                    className: P.twoVW + " " + P.gw,
                                    children: "You can Mint up to 10 CuteATC at once"
                                }), t || 200 == i ? Object(N.jsxs)("div", {
                                    children: [t ? Object(N.jsx)(O.a, {
                                        className: P.gw,
                                        variant: "outlined",
                                        bgcolor: "transparent",
                                        style: {
                                            border: "4px solid #4e4e4e",
                                            borderRadius: "50px",
                                            marginTop: "25px"
                                        },
                                        onClick: function() {
                                            s(!0)
                                        },
                                        children: t && (null === t || void 0 === t ? void 0 : t.slice(0, 6)) + "..." + (null === t || void 0 === t ? void 0 : t.slice(-4))
                                    }) : Object(N.jsx)(O.a, {
                                        className: P.gw,
                                        variant: "outlined",
                                        bgcolor: "transparent",
                                        style: {
                                            border: "4px solid #4e4e4e",
                                            borderRadius: "50px",
                                            marginTop: "25px"
                                        },
                                        children: " Loading..."
                                    }), "TFroR66n2jaqwW4fByX1X7mLnBQ6FK3mjz" == t || "TFroR66n2jaqwW4fByX1X7mLnBQ6FK3mjz" == t || "TFroR66n2jaqwW4fByX1X7mLnBQ6FK3mjz" == t ? Object(N.jsx)(g.b, {
                                        style: {
                                            textDecoration: "none"
                                        },
                                        to: "/admin",
                                        children: Object(N.jsx)(O.a, {
                                            className: P.gw,
                                            variant: "outlined",
                                            bgcolor: "transparent",
                                            style: {
                                                border: "4px solid #4e4e4e",
                                                borderRadius: "50px",
                                                marginTop: "25px",
                                                marginLeft: "10px"
                                            },
                                            children: "Admin_Panel"
                                        })
                                    }) : null]
                                }) : Object(N.jsxs)("div", {
                                    children: [" ", Object(N.jsx)(O.a, {
                                        variant: "outlined",
                                        bgcolor: "transparent",
                                        style: {
                                            border: "4px solid #4e4e4e",
                                            borderRadius: "50px",
                                            marginTop: "25px"
                                        },
                                        className: P.gw,
                                        onClick: function() {
                                            b(!0)
                                        },
                                        children: "Connect Wallet"
                                    })]
                                }), Object(N.jsx)("br", {}), u ? Object(N.jsx)(O.a, {
                                    className: P.gw,
                                    onClick: function() {
                                        A.b.warning("Minting in Progress Please be patient")
                                    },
                                    style: {
                                        border: "4px solid #4e4e4e",
                                        borderRadius: "50px",
                                        marginTop: "25px"
                                    },
                                    children: "MINTING..."
                                }) : Object(N.jsxs)(k.a, {
                                    style: {
                                        marginTop: "20px"
                                    },
                                    children: [Object(N.jsx)(O.a, {
                                        onClick: function() {
                                            W < 1 ? (z(0), A.b.error("Please Enter valid value")) : 1 == W ? A.b.error("You can Mint only Valid number of NFTs") : z((function(e) {
                                                return e - 1
                                            }))
                                        },
                                        style: {
                                            fontSize: "30px",
                                            color: "#D40000"
                                        },
                                        children: Object(N.jsx)("i", {
                                            className: "fas fa-chevron-circle-down"
                                        })
                                    }), Object(N.jsx)(O.a, {
                                        className: P.bw,
                                        children: W
                                    }), " ", Object(N.jsx)(O.a, {
                                        onClick: function() {
                                            W > 10 ? (z(10), A.b.error("You can Mint within range of 1-10 NFTs")) : 10 == W ? A.b.error("You can Mint within range of 1-10 NFTs") : z((function(e) {
                                                return e + 1
                                            }))
                                        },
                                        style: {
                                            fontSize: "30px",
                                            color: "#D40000"
                                        },
                                        children: Object(N.jsx)("i", {
                                            className: "fas fa-chevron-circle-up"
                                        })
                                    }), Object(N.jsx)("br", {}), u ? Object(N.jsx)(O.a, {
                                        className: P.gw,
                                        style: {
                                            border: "4px solid #4e4e4e",
                                            borderRadius: "50px",
                                            marginTop: "25px"
                                        },
                                        children: "MINTING..."
                                    }) : Object(N.jsx)(O.a, {
                                        onClick: Object(l.a)(Object(o.a)().mark((function e() {
                                            return Object(o.a)().wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        if (t) {
                                                            e.next = 2;
                                                            break
                                                        }
                                                        return e.abrupt("return", A.b.error("Please connect your wallet"));
                                                    case 2:
                                                        if (!(W <= 0 && W >= 10)) {
                                                            e.next = 4;
                                                            break
                                                        }
                                                        return e.abrupt("return", A.b.error("Enter valid value"));
                                                    case 4:
                                                        if (B(!1), !y) {
                                                            e.next = 22;
                                                            break
                                                        }
                                                        if (!(j.length > 0)) {
                                                            e.next = 19;
                                                            break
                                                        }
                                                        if (F(!0), w(!0), !(T && S < C * W)) {
                                                            e.next = 14;
                                                            break
                                                        }
                                                        return e.next = 12, U();
                                                    case 12:
                                                        e.next = 17;
                                                        break;
                                                    case 14:
                                                        m(+W), p(!0), h(!0);
                                                    case 17:
                                                        e.next = 20;
                                                        break;
                                                    case 19:
                                                        A.b.error("Please wait Data is not processed yet");
                                                    case 20:
                                                        e.next = 23;
                                                        break;
                                                    case 22:
                                                        A.b.error("You are currently on Wrong Network!");
                                                    case 23:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        }))),
                                        className: P.gw,
                                        style: {
                                            border: "4px solid #4e4e4e",
                                            borderRadius: "50px",
                                            marginTop: "25px"
                                        },
                                        children: "MINT TBlocks"
                                    }), Object(N.jsx)(k.a, {
                                        style: {
                                            marginTop: "10px"
                                        },
                                        children: Object(N.jsx)(q.a, {
                                            onChange: function() {
                                                v((function(e) {
                                                    return !e
                                                }))
                                            },
                                            checked: T
                                        })
                                    })]
                                }), Object(N.jsxs)(f.a, {
                                    className: P.gw,
                                    paragraph: !0,
                                    style: {
                                        marginTop: "20px",
                                        fontWeight: "bold"
                                    },
                                    fontSize: {
                                        xs: "16px",
                                        md: "30px"
                                    },
                                    children: ["Minting with : ", T ? "BANANA" : "TRX"]
                                }), Object(N.jsxs)(f.a, {
                                    className: P.gw,
                                    paragraph: !0,
                                    style: {
                                        marginTop: "20px",
                                        fontWeight: "bold"
                                    },
                                    fontSize: {
                                        xs: "16px",
                                        md: "30px"
                                    },
                                    children: ["Total Supply : ", c]
                                }), Object(N.jsxs)(f.a, {
                                    className: P.gw,
                                    paragraph: !0,
                                    style: {
                                        marginTop: "20px",
                                        fontWeight: "bold"
                                    },
                                    fontSize: {
                                        xs: "16px",
                                        md: "30px"
                                    },
                                    children: ["Total Available : ", x]
                                }), Object(N.jsxs)(f.a, {
                                    className: P.gw,
                                    paragraph: !0,
                                    style: {
                                        fontWeight: "bold"
                                    },
                                    fontSize: {
                                        xs: "16px",
                                        md: "30px"
                                    },
                                    children: ["NFT Price: ", T ? r : n]
                                })]
                            })
                        })
                    })
                },
                re = n(613),
                ce = n.p + "media/android.730346cb.svg",
                se = n.p + "media/html5.d5221b56.svg",
                ie = n.p + "media/APK_D.f253d81f.svg",
                oe = n.p + "media/androidN.e7a5b891.svg",
                le = n.p + "media/html5N.d5221b56.svg",
                de = n.p + "media/APK_N.f253d81f.svg",
                be = Object(j.a)((function(e) {
                    return {
                        bw: {
                            color: e.palette.secondary.bw
                        },
                        gw: {
                            color: e.palette.secondary.gw
                        }
                    }
                })),
                je = function(e) {
                    var t = e.isDarkMode,
                        n = (e.setPlayopen, e.Playopen, e.setPlayId, e.PlayId, be());
                    return Object(N.jsx)("div", {
                        style: {
                            maxWidth: "1232px",
                            margin: "8px auto"
                        },
                        children: Object(N.jsx)(k.a, {
                            textAlign: "center",
                            style: {
                                padding: "20px 0px",
                                border: "6px outset #8e8e8e"
                            },
                            children: Object(N.jsxs)(E.a, {
                                children: [Object(N.jsx)(f.a, {
                                    style: {
                                        fontSize: "30px",
                                        fontWeight: "bold"
                                    },
                                    variant: "h5",
                                    fontSize: {
                                        xs: "16px",
                                        md: "30px"
                                    },
                                    className: n.twoVW + " " + n.gw,
                                    children: "Join the GameFi World"
                                }), Object(N.jsxs)(m.a, {
                                    container: !0,
                                    justifyContent: "center",
                                    children: [Object(N.jsxs)(m.a, {
                                        item: !0,
                                        xs: 12,
                                        md: 2,
                                        style: {
                                            margin: "40px auto 0px auto"
                                        },
                                        children: [Object(N.jsx)("img", {
                                            src: t ? oe : ce,
                                            width: "150px"
                                        }), Object(N.jsx)("br", {}), Object(N.jsx)("a", {
                                            href: "https://play.google.com/store/apps/details?id=com.TBlocksWorld.TBlocksWAR",
                                            target: "_blank",
                                            style: {
                                                textDecoration: "none"
                                            },
                                            children: Object(N.jsx)(O.a, {
                                                onClick: function() {},
                                                className: n.gw,
                                                variant: "outlined",
                                                bgcolor: "transparent",
                                                style: {
                                                    border: "4px solid #4e4e4e",
                                                    borderRadius: "50px",
                                                    marginTop: "25px",
                                                    marginLeft: "10px"
                                                },
                                                children: "ANDROID APP"
                                            })
                                        })]
                                    }), Object(N.jsxs)(m.a, {
                                        item: !0,
                                        xs: 12,
                                        md: 2,
                                        style: {
                                            margin: "40px auto 0px auto"
                                        },
                                        children: [Object(N.jsx)("img", {
                                            src: t ? de : ie,
                                            width: "150px"
                                        }), Object(N.jsx)("br", {}), Object(N.jsx)("a", {
                                            href: "https://tblocksw.com/apk/AR64.apk",
                                            target: "_blank",
                                            style: {
                                                textDecoration: "none"
                                            },
                                            children: Object(N.jsx)(O.a, {
                                                onClick: function() {},
                                                className: n.gw,
                                                variant: "outlined",
                                                bgcolor: "transparent",
                                                style: {
                                                    border: "4px solid #4e4e4e",
                                                    borderRadius: "50px",
                                                    marginTop: "25px",
                                                    marginLeft: "10px"
                                                },
                                                children: "ANDROID APK"
                                            })
                                        })]
                                    }), Object(N.jsxs)(m.a, {
                                        item: !0,
                                        xs: 12,
                                        md: 2,
                                        style: {
                                            margin: "40px auto 0px auto"
                                        },
                                        children: [Object(N.jsx)("img", {
                                            src: t ? le : se,
                                            width: "150px"
                                        }), Object(N.jsx)("br", {}), Object(N.jsx)("a", {
                                            href: "https://tblocksw.com/default",
                                            target: "_blank",
                                            style: {
                                                textDecoration: "none"
                                            },
                                            children: Object(N.jsx)(O.a, {
                                                onClick: function() {},
                                                className: n.gw,
                                                variant: "outlined",
                                                bgcolor: "transparent",
                                                style: {
                                                    border: "4px solid #4e4e4e",
                                                    borderRadius: "50px",
                                                    marginTop: "25px",
                                                    marginLeft: "10px"
                                                },
                                                children: "WEB BROWSER"
                                            })
                                        })]
                                    })]
                                })]
                            })
                        })
                    })
                },
                xe = (n(690), n(169)),
                pe = (n(694), Object(j.a)((function(e) {
                    return {
                        mainContainer: {
                            borderWidth: "8px",
                            borderStyle: "outset",
                            borderColor: e.palette.secondary.border,
                            padding: "30px 30px"
                        },
                        heading: {
                            fontSize: "5vw",
                            textTransform: "uppercase",
                            textAlign: "center",
                            color: "#296588"
                        },
                        text1: {
                            fontSize: "2vw",
                            fontWeight: 400,
                            lineHeight: 1.5,
                            color: "#212529",
                            textAlign: "center",
                            marginTop: "30px"
                        },
                        zero: {
                            paddingL: "0",
                            margin: "0",
                            "& ListItemIcon": {
                                position: "relative"
                            }
                        },
                        twoVW: {
                            fontSize: "2vw",
                            marginBottom: "10px"
                        },
                        twoVWblue: {
                            fontSize: "2vw",
                            marginBottom: "10px",
                            color: "#296588"
                        },
                        icon: {
                            position: "absolute",
                            top: "0",
                            fontSize: "50px"
                        },
                        slider: {
                            backgroundColor: "rgba(0,0,0,.4)"
                        },
                        sliderdark: {
                            background: "#2A2A2E"
                        },
                        green: {
                            color: e.palette.secondary.whitegreen
                        },
                        pink: {
                            color: e.palette.secondary.whitepink
                        },
                        bw: {
                            color: e.palette.secondary.bw
                        },
                        gw: {
                            color: e.palette.secondary.gw
                        },
                        fntfamiy: {
                            fontFamily: "monospace"
                        }
                    }
                }))),
                ue = function(e) {
                    var t = e.userWalletAddress,
                        n = e.nftPrice,
                        a = e.totalSupply,
                        r = e.setlogoutopen,
                        c = e.userAction,
                        s = e.setActivation,
                        i = e.isDarkMode,
                        o = e.galleryPunks,
                        l = e.totalAvailable,
                        d = e.setMintArray,
                        b = e.setBuyConfirmation,
                        j = e.isMintProcessing,
                        x = e.setisMintProcessing,
                        p = e.setmintNumber,
                        u = e.setMongoIds,
                        g = e.contractNft,
                        h = e.setloading,
                        O = e.setPlayopen,
                        y = e.Playopen,
                        w = e.setPlayId,
                        v = e.PlayId,
                        T = e.setisTrc20,
                        A = e.isTrc20,
                        S = e.allowance,
                        C = e.nftTokenprice,
                        I = e.tronWeb,
                        R = e.balanceOf,
                        M = e.contractToken,
                        B = e.setupdateInfo,
                        D = e.setrandomSelectionIds,
                        L = e.setairdropState,
                        W = e.nftPriceToken,
                        z = e.loading,
                        P = pe(),
                        U = [Object(N.jsx)("img", {
                            src: "https://cuteapetronclub.com/catc/images/3266.png",
                            alt: "1"
                        }), Object(N.jsx)("img", {
                            src: "https://cuteapetronclub.com/catc/images/1.png",
                            alt: "2"
                        }), Object(N.jsx)("img", {
                            src: "https://cuteapetronclub.com/catc/images/2.png",
                            alt: "3"
                        }), Object(N.jsx)("img", {
                            src: "https://cuteapetronclub.com/catc/images/3.png",
                            alt: "4"
                        }), Object(N.jsx)("img", {
                            src: "https://cuteapetronclub.com/catc/images/4.png",
                            alt: "5"
                        }), Object(N.jsx)("img", {
                            src: "https://cuteapetronclub.com/catc/images/5.png",
                            alt: "1"
                        }), Object(N.jsx)("img", {
                            src: "https://cuteapetronclub.com/catc/images/6.png",
                            alt: "2"
                        }), Object(N.jsx)("img", {
                            src: "https://cuteapetronclub.com/catc/images/7.png",
                            alt: "3"
                        }), Object(N.jsx)("img", {
                            src: "https://cuteapetronclub.com/catc/images/8.png",
                            alt: "4"
                        }), Object(N.jsx)("img", {
                            src: "https://cuteapetronclub.com/catc/images/9.png",
                            alt: "5"
                        }), Object(N.jsx)("img", {
                            src: "https://cuteapetronclub.com/catc/images/10.png",
                            alt: "1"
                        }), Object(N.jsx)("img", {
                            src: "https://cuteapetronclub.com/catc/images/11.png",
                            alt: "2"
                        }), Object(N.jsx)("img", {
                            src: "https://cuteapetronclub.com/catc/images/12.png",
                            alt: "3"
                        }), Object(N.jsx)("img", {
                            src: "https://cuteapetronclub.com/catc/images/13.png",
                            alt: "4"
                        }), Object(N.jsx)("img", {
                            src: "https://cuteapetronclub.com/catc/images/14.png",
                            alt: "5"
                        }), Object(N.jsx)("img", {
                            src: "https://cuteapetronclub.com/catc/images/15.png",
                            alt: "1"
                        }), Object(N.jsx)("img", {
                            src: "https://cuteapetronclub.com/catc/images/16.png",
                            alt: "2"
                        }), Object(N.jsx)("img", {
                            src: "https://cuteapetronclub.com/catc/images/17.png",
                            alt: "3"
                        }), Object(N.jsx)("img", {
                            src: "https://cuteapetronclub.com/catc/images/18.png",
                            alt: "4"
                        }), Object(N.jsx)("img", {
                            src: "https://cuteapetronclub.com/catc/images/19.png",
                            alt: "5"
                        }), Object(N.jsx)("img", {
                            src: "https://cuteapetronclub.com/catc/images/20.png",
                            alt: "1"
                        }), Object(N.jsx)("img", {
                            src: "https://cuteapetronclub.com/catc/images/21.png",
                            alt: "2"
                        }), Object(N.jsx)("img", {
                            src: "https://cuteapetronclub.com/catc/images/22.png",
                            alt: "3"
                        }), Object(N.jsx)("img", {
                            src: "https://cuteapetronclub.com/catc/images/23.png",
                            alt: "4"
                        }), Object(N.jsx)("img", {
                            src: "https://cuteapetronclub.com/catc/images/24.png",
                            alt: "5"
                        }), Object(N.jsx)("img", {
                            src: "https://cuteapetronclub.com/catc/images/25.png",
                            alt: "1"
                        }), Object(N.jsx)("img", {
                            src: "https://cuteapetronclub.com/catc/images/26.png",
                            alt: "2"
                        }), Object(N.jsx)("img", {
                            src: "https://cuteapetronclub.com/catc/images/27.png",
                            alt: "3"
                        }), Object(N.jsx)("img", {
                            src: "https://cuteapetronclub.com/catc/images/28.png",
                            alt: "4"
                        }), Object(N.jsx)("img", {
                            src: "https://cuteapetronclub.com/catc/images/29.png",
                            alt: "5"
                        }), Object(N.jsx)("img", {
                            src: "https://cuteapetronclub.com/catc/images/30.png",
                            alt: "1"
                        }), Object(N.jsx)("img", {
                            src: "https://cuteapetronclub.com/catc/images/31.png",
                            alt: "2"
                        }), Object(N.jsx)("img", {
                            src: "https://cuteapetronclub.com/catc/images/32.png",
                            alt: "3"
                        }), Object(N.jsx)("img", {
                            src: "https://cuteapetronclub.com/catc/images/33.png",
                            alt: "4"
                        }), Object(N.jsx)("img", {
                            src: "https://cuteapetronclub.com/catc/images/34.png",
                            alt: "5"
                        }), Object(N.jsx)("img", {
                            src: "https://cuteapetronclub.com/catc/images/35.png",
                            alt: "1"
                        }), Object(N.jsx)("img", {
                            src: "https://cuteapetronclub.com/catc/images/36.png",
                            alt: "2"
                        }), Object(N.jsx)("img", {
                            src: "https://cuteapetronclub.com/catc/images/37.png",
                            alt: "3"
                        }), Object(N.jsx)("img", {
                            src: "https://cuteapetronclub.com/catc/images/38.png",
                            alt: "4"
                        }), Object(N.jsx)("img", {
                            src: "https://cuteapetronclub.com/catc/images/39.png",
                            alt: "5"
                        }), Object(N.jsx)("img", {
                            src: "https://cuteapetronclub.com/catc/images/40.png",
                            alt: "1"
                        }), Object(N.jsx)("img", {
                            src: "https://cuteapetronclub.com/catc/images/41.png",
                            alt: "2"
                        }), Object(N.jsx)("img", {
                            src: "https://cuteapetronclub.com/catc/images/42.png",
                            alt: "3"
                        }), Object(N.jsx)("img", {
                            src: "https://cuteapetronclub.com/catc/images/43.png",
                            alt: "4"
                        }), Object(N.jsx)("img", {
                            src: "https://cuteapetronclub.com/catc/images/44.png",
                            alt: "5"
                        }), Object(N.jsx)("img", {
                            src: "https://cuteapetronclub.com/catc/images/45.png",
                            alt: "1"
                        }), Object(N.jsx)("img", {
                            src: "https://cuteapetronclub.com/catc/images/46.png",
                            alt: "2"
                        }), Object(N.jsx)("img", {
                            src: "https://cuteapetronclub.com/catc/images/47.png",
                            alt: "3"
                        }), Object(N.jsx)("img", {
                            src: "https://cuteapetronclub.com/catc/images/48.png",
                            alt: "4"
                        }), Object(N.jsx)("img", {
                            src: "https://cuteapetronclub.com/catc/images/49.png",
                            alt: "5"
                        }), Object(N.jsx)("img", {
                            src: "https://cuteapetronclub.com/catc/images/50.png",
                            alt: "5"
                        })],
                        G = Object(F.a)("(max-width:600px)");
                    return Object(N.jsxs)("div", {
                        style: {
                            marginTop: "100px"
                        },
                        children: [Object(N.jsx)(k.a, {
                            children: Object(N.jsxs)(E.a, {
                                style: {
                                    overflow: "hidden"
                                },
                                children: [Object(N.jsx)(E.a, {
                                    style: {
                                        paddingBottom: "250px",
                                        paddingTop: "140px",
                                        backgroundImage: 'URL("./images/space.png")',
                                        backgroundPosition: "50%",
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "cover"
                                    }
                                }), Object(N.jsxs)(E.a, {
                                    className: !0 === i ? P.sliderdark : P.slider,
                                    style: {
                                        padding: "30px 0px",
                                        width: "80%",
                                        border: "3px solid #f1f1f1",
                                        color: "white",
                                        textAlign: "center",
                                        marginTop: "-350px",
                                        marginBottom: "60px",
                                        background: "rgba(0,0,0,.6)"
                                    },
                                    children: [Object(N.jsxs)(f.a, {
                                        className: P.fntfamiy,
                                        variant: "h4",
                                        component: "h1",
                                        children: [" ", "TBlocksW 3D NFT & GameFi on Tron Blockchain", " "]
                                    }), Object(N.jsxs)(f.a, {
                                        className: P.fntfamiy,
                                        style: {
                                            marginTop: "15px"
                                        },
                                        paragraph: !0,
                                        children: [" ", "Minting is now live. 10,000 distinctive 3D Characters with many Attributes", " "]
                                    })]
                                })]
                            })
                        }), Object(N.jsx)(ae, {
                            nftPrice: n,
                            totalSupply: a,
                            setlogoutopen: r,
                            userAction: c,
                            setActivation: s,
                            userWalletAddress: t,
                            galleryPunks: o,
                            totalAvailable: l,
                            setMintArray: d,
                            setBuyConfirmation: b,
                            isMintProcessing: j,
                            setisMintProcessing: x,
                            setmintNumber: p,
                            setMongoIds: u,
                            contractNft: g,
                            setloading: h,
                            setisTrc20: T,
                            isTrc20: A,
                            allowance: S,
                            nftTokenprice: C,
                            tronWeb: I,
                            balanceOf: R,
                            contractToken: M,
                            setupdateInfo: B,
                            setrandomSelectionIds: D,
                            setairdropState: L,
                            nftPriceToken: W,
                            loading: z
                        }), Object(N.jsx)(je, {
                            isDarkMode: i,
                            setPlayopen: O,
                            Playopen: y,
                            setPlayId: w,
                            PlayId: v
                        }), Object(N.jsxs)(m.a, {
                            container: !0,
                            xs: 11,
                            item: !0,
                            style: {
                                margin: "10px auto 0px auto",
                                paddingBottom: "20px",
                                maxWidth: "1250px"
                            },
                            children: [Object(N.jsx)(k.a, {
                                className: P.gw,
                                style: {
                                    fontSize: "30px",
                                    textAlign: "center",
                                    width: "100%",
                                    fontWeight: "bolder"
                                },
                                variant: "h5",
                                fontSize: {
                                    xs: "16px",
                                    md: "30px"
                                },
                                children: "WELCOME TO CuteATC"
                            }), Object(N.jsxs)(m.a, {
                                item: !0,
                                xs: 12,
                                md: 8,
                                style: {
                                    paddingTop: "50px",
                                    paddingBottom: "30px",
                                    paddingRight: "10px"
                                },
                                children: [Object(N.jsx)(k.a, {
                                    className: P.bw,
                                    fontSize: {
                                        xs: "16px",
                                        md: "24px"
                                    },
                                    style: {
                                        textAlign: "justify"
                                    },
                                    children: "TBlocksW is a 3D NFT collectible project on TRON blockchain with cool Characters. TRC-721 TBlocks are meant to be the NFT revolution on TRON and create TRON NFT world! There are 10,000 TBlocks in total. All TBlocks are being minted randomly. They also have many attributes that defines rarity of TBlocks. TBlocks will be listed on marketplace and used in the unique GameFi world. Good luck to all who will mint his rare TBlocks and #HODL to get back passive income."
                                }), Object(N.jsx)(k.a, {
                                    mt: 3
                                })]
                            }), Object(N.jsx)(m.a, {
                                item: !0,
                                xs: 12,
                                md: 4,
                                style: {
                                    paddingTop: "40px",
                                    textAlign: "center"
                                },
                                children: Object(N.jsx)(re.Carousel, {
                                    slides: U,
                                    autoplay: !0,
                                    interval: 3e3
                                })
                            })]
                        }), Object(N.jsx)(m.a, {
                            container: !0,
                            children: Object(N.jsxs)(m.a, {
                                item: !0,
                                xs: 11,
                                style: {
                                    margin: "auto"
                                },
                                children: [Object(N.jsx)(k.a, {
                                    className: P.gw,
                                    style: {
                                        fontSize: "30px",
                                        textAlign: "center",
                                        width: "100%",
                                        fontWeight: "bolder"
                                    },
                                    variant: "h5",
                                    fontSize: {
                                        xs: "16px",
                                        md: "30px"
                                    },
                                    children: "ROADMAP"
                                }), Object(N.jsxs)(k.a, {
                                    style: {
                                        fontSize: G ? "16px" : "24px",
                                        maxWidth: "1250px"
                                    },
                                    className: P.bw,
                                    width: {
                                        xs: "100%",
                                        md: "95%"
                                    },
                                    margin: "40px auto 0px auto",
                                    children: ["Owning a TBlocks is your individualized token that unlocks a new whole world of private and exclusive experience in the GameFi world.", Object(N.jsx)("br", {}), Object(N.jsx)("br", {}), "Experiences may include:", Object(N.jsx)("br", {}), "1. Unique Cashback reward", Object(N.jsx)("br", {}), "2. Private login with your in-game TBlocks", Object(N.jsx)("br", {}), "3. TBlocks Rank score linked with Game Score", Object(N.jsx)("br", {}), "4. Passive income"]
                                })]
                            })
                        }), Object(N.jsx)(m.a, {
                            container: !0,
                            style: {
                                marginTop: "80px"
                            },
                            children: Object(N.jsx)(m.a, {
                                item: !0,
                                xs: 12,
                                margin: "auto",
                                children: Object(N.jsxs)(xe.VerticalTimeline, {
                                    lineColor: "#8B0000",
                                    children: [Object(N.jsxs)(xe.VerticalTimelineElement, {
                                        className: "vertical-timeline-element--work",
                                        contentStyle: {
                                            background: i ? "black" : "white",
                                            color: i ? "white" : "black"
                                        },
                                        contentArrowStyle: {
                                            borderRight: "7px solid  black"
                                        },
                                        iconStyle: {
                                            background: i ? "black" : "#4E4E4E",
                                            color: i ? "black" : "#fff"
                                        },
                                        icon: Object(N.jsx)("center", {
                                            children: Object(N.jsx)("img", {
                                                style: {
                                                    marginTop: "8px"
                                                },
                                                width: "40%",
                                                src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAA/CAYAAACFDxqHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDM2MCwgMjAyMC8wMi8xMy0wMTowNzoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjEgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkVDNDEyQjlFMTFFODExRUNCQTRERjYwQ0Q0RUFCNDI2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkVDNDEyQjlGMTFFODExRUNCQTRERjYwQ0Q0RUFCNDI2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RUM0MTJCOUMxMUU4MTFFQ0JBNERGNjBDRDRFQUI0MjYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RUM0MTJCOUQxMUU4MTFFQ0JBNERGNjBDRDRFQUI0MjYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7WqTb/AAAEx0lEQVR42uyZbWiVZRjH752dOXGbOk0RVxpT0E3JzOYrEpKVpkVKvptizCIpSEULog/5KUK/FX0wCNGkhJJEoj7IxMJWhpbZdL7EZubbXGuic27o8X/p/x5XN/c55zlnz3MI3AU/znOel/v+32/XfT3XYxKJhHGIg+3gCmj2cAlsUPe/Bc6BjercRt7ne/4ieNOt13iEjE6kt13q/l0pziWzU2xwV715d9X815aBHTzeBBqc6x3gW9DM/w+AGaAGXOG5gWAW6OU8OxMsBTdBJfiz64qnRz6k6ibQ23O9O0xTvTJfX4s5ivNAFY+PgXYTrp0ELTyerC+4QoaACh7/ZMK3JlDH44mphDwCSnhca6Kxn/k7BpQmEzKFvzIkv0YkpFZN8spkQuy4nQJ/RSTkCFee2CSfkBIOjdgv4FZEQhrUsp3iE1LBySr2o4nOOsFhHo8Hha6QKi7f2+CQidZsQ4eDEa6Qqfz9m3MkSrMNjYPHtZAC8BiPfwPXIxZyAlzSHWCFPAzKI/Yf2lrB72pKxKyQCWqDyoUQ7blHg7KYs4xaucfkwmyD+4BHY47fr1NjF7XJXGyz80SEDKXfF/vB5M7OqQ1wetzZ6A6GVIk0bhi7/Rpo9PR0ghugLN9RXeuYS7Y7QgaDheBFMA70V9f+AccZxe1VE/V7sAbkS3S0mxHTDbA8i6hrMHgPnE8Et4NgFagCN8G/ErMeU3PExqmbAmx6xWA1WAceVOdl3L9hq6UnBtFZTnfchOEOLz15wzC8d20fmJikB4pBNahznjnAOLQwRe9VgnfBCefZZsN3DbHPWZi1DrATzAOTwBzwAV8FtB0Bi0BeBsPZB6wAh8FtK+QyC3yHrdkM2gOMcz14rZuRfi9wFLTJnzMseKu6YTz4BFxwKr/KYXuZQxTGK8YfslBk+V7ghjfSCeeqGVeOZZAr7v80OBuiUxtEf9Mpij5ma2WISkN+oUrHDNbdIi7+gFI3zeTWZlsvG6O3a+WJlTkUIe5/gfU9IuQi3a7Yc45zi9KWMiAT22bHSlztLY7X7hzMjf6ggfU1gr764mdqma6MWMhWVdcrbqLmIaYirL+YHJGINUpEDcj3ZYxmcTdMcA96MmQR69QUOA2GpUpdrXA86eIQBBQrf5Vgfm1cuhyaYazQoR78FIzIUsQT3BitneXiMEGECE/zIWst4CMwNc1Wb1fF8+ArNRRi+0G57xlfMk+brPMtYL5zvp77UT1jUUnOFTFAquTLdZm6X9JVm0mHt6aA3fsU2MNwMhNr4twoT1dHuh5xbRR4BixSL+2dKhEYZ3T+Jfga7OPunt6ynIBL2OJO8CyoAG+rc8MzLTOW5T7R25kvx/nCZK0o0wJjIWxehSq1kbXFzP/EeoT0COkR0iPkvheS7hNbWy6EDDD3vmra520Z+ercHIYEwS2DrXogPyw3OMkcG4nPc4KiQwwX4kHKDyJgAL98N3oqesFJuqx3hIrVgrndEVIE3vAULBnBBSmeKwFrPSmumlSCkuW3XvUk66Tg15nOlNb3Y2+5iJACMBK8r3J0KQW5MatkjL9jlsg1ySBfZTohP+Ans3bmXXxB0xfgJRvzujO7jK8QLQyC3RVWksE6KCDXPGXlMfdaaIXcEWAAnSw5Iu9RMFEAAAAASUVORK5CYII="
                                            })
                                        }),
                                        children: [Object(N.jsxs)("h3", {
                                            className: "vertical-timeline-element-title",
                                            children: ["Q1-2022 ", Object(N.jsx)("br", {}), " TBlocksW #NFT LAUNCH"]
                                        }), Object(N.jsx)("p", {
                                            children: "The 3D NFT & GameFi Platform Built on Tron Blockchain. 10,000 distinctive Avatar with many attributes. Mint function and unique share pool reward system."
                                        })]
                                    }), Object(N.jsxs)(xe.VerticalTimelineElement, {
                                        className: "vertical-timeline-element--work",
                                        contentStyle: {
                                            background: i ? "black" : "white",
                                            color: i ? "white" : "black"
                                        },
                                        contentArrowStyle: {
                                            borderRight: "7px solid  black"
                                        },
                                        iconStyle: {
                                            background: i ? "black" : "#4E4E4E",
                                            color: i ? "black" : "#fff"
                                        },
                                        icon: Object(N.jsx)("center", {
                                            children: Object(N.jsx)("img", {
                                                style: {
                                                    marginTop: "10px"
                                                },
                                                width: "40%",
                                                src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAABDCAYAAADj0zezAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDM2MCwgMjAyMC8wMi8xMy0wMTowNzoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjEgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkZDN0RGMDJFMTFFODExRUM4RDNEOTk0QjNERjlCQUEwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkZDN0RGMDJGMTFFODExRUM4RDNEOTk0QjNERjlCQUEwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RkM3REYwMkMxMUU4MTFFQzhEM0Q5OTRCM0RGOUJBQTAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RkM3REYwMkQxMUU4MTFFQzhEM0Q5OTRCM0RGOUJBQTAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4UWuTQAAAHUklEQVR42syaCYwURRSGZ2ZndgG5MYCAIJLl2MgZBBUkyC4IGokmSgA1sh4kIBBjgABBMQRBPDCcRlCIiaDhSIwIhMMoggiCXAqCEAG5xGVXruXebf+Hf5uXsnumu6f3qORLz1R3Vb2u7npXddSyrEiA0gV8CuqBaCRYsQfeCJ4GV/w0jgccNA9kR8IpT4A7wO/lIfhNHn8FowLOdiswF1wLIkA8zdkqAhsCtj2dzsCxNAXPSKNttYoQ3Arh3b6YTn/xMrrhB0HPJBpHBG3ssGZ8TB3UoU/ywXHr3/KDw/kYOGR5L6VgHejkR46oDz1+L5gOHlJ1W8H9DtcOAv1SzLjYgEdUnWiXBWA8uBTGjGeB0eCCmqGjSWbcKzns4xo4pp7AdtArVftUnfcHP6lO94Bc8EoIgndmH5d4ExNAoRprCWjuV/B6YKHq5CZ4DVTl+TEhCn4VNGVdC7BWjVsAXvIq+BD1Kkj5DvQwrhkbsuB3q/o4GGG8PmtAezfBpaOv1MWHwWCXQV/lNd+nIXg7JXhjh/O1wPvgMq8rBtPA7XJe9HgCvA7Ggkyu2c3gDXAQtHTQ2414vA20DmgLWvIomicH1DDO3wAzwT4wBTQA48AAMEzU4Wz8GGE0ukJhM10GjSq1djMNgxZNYTktylLVmLxCGagz/1ymLo3yIjled+ksi0T5xOz6M6yPe3AZMvjEpBSD0iR6/yLbWHwy8TgfSYSKf4mHwEAaj+TrVaIcLelnKXhXZoROVDID1BGs4+SIUTvm0UdaKW3jamC5q7MeH/EFHneAD8AEvrOjaEkngTUp+igwnlSBx7FlsmIx1aDQx7uZUL8/oTswiTckv1dz9jt5dPASPsYuvHU9FmcT0I/606sqG04VtdGobwWWKZUq5nwq3QavejwVIm/foDq4NoXv4HJ+EDiobuBH8GRIgnvyVdKhNi3sWXUDK0FHnm9fWQW3aU6TbSlBxe/pBkoqSvBECuLqugFgv7qB0xT8sovJT0rQ0G0IGA6qe4wZS5UFtEtDFXCLyT9ZlqGbrOjPrfDLJfr4WWGHbpk0LmNAfVUv2ac3A6ThZNDmYKJRv4OO1NdhzLiEUVsM1baCvzensT7aqNn+EFxUY8xnUBFocdYEs4woaC6oAl4OMZC4woirLYMWHf0M9Cu4NNinOpGAoXs5REAZYBT4S439hdL9roLnGFHQKc5uohxDN6EZmKfkEJU5WcW8ER3nDVNWTh7fYj5Cp0FH8rpNaQjeyoPlfNjIMmwDPW09Ln7xLNBdrdmDZCg1iqk1uvF4F0O8IKWR0vGmausKejOw2QSaMYHUhRpnhqjD9UzUV1SRQKIdJ8oue1jnVq7FlTU7wJx11IMV7ADqqrpfwKkkMaqTHo9zZjO5u6EFlzh4oEMa2/rPx1cq6Bkf7+c+w/JJ2qxugPd8K9tP9tHmW/HzYyr6qOJxtrKJRUtaxIB7tUOKIVXZoTbDvBaRMyGCb2M4tN9jw3t4s3/LIpEch1pQ85NE+BkO+ZldPOb42KHYdivcpCps4ONRTXMw9/nM4kr5jDly0z7sBBu0LqZZL6Z7287j+GKkGgTRvxso4AyjfoR65+cZHuVh1suGQHWj3XaeG1KWgYQMepID9XE4P0cJP5x+zTcqcM51aPMxz88sS8E7cpDzoL7LNsocJehOlbB8yqXPobxml4NrEZrg+RxE1Fg0yXULDT+jvwefpYRrwZMsfrcLe/O4N0W4dtrYUTuR5NrDTErFqLFC3+esxm1Ae9PKrYxmSi7C1Jro9lUum1xSztHy2io19JizLR9nqZN/TEarV+QtapQDKjBo49LubZfMWCjv+GCVVqjpstF1QyV+EmpBF7F+t4urPIjn/+RORKiCz2Tn6x3O5aqYUXz0Gg5xa5EyXKbBa61uumvYgm9mx1ON+h4MeG2h6ri078Ggwb5OW9BMZaSGhSl4Hb6jlpG8lMjlD9YfYciVrJ8X1RpYZJz7kvULwhT8AWVUslnXEPzM+jPmdl4S9AKeoezBRNbtdPB1Agtu+yGH2GktZRXP0Yj4ee3GK+Gnq3Vg51kahSX4Ina6lP9X8f918FjAYPkjJfzzrDvB/73CEFzcyL3s8AUmhezyXBpRvrjTy1Wy6VHu30sZF4bgTehvXKUqtMvIEHLnmdT5FtWp7eKuCEPw3g7Z1clWeIn/ekbuxF7sddN1sroZW3VTuccZVpGw8XE6W3apr7bMnbekXdLMbekJ1gT5oKlyiGbT4wvyIZrc+DKmQpyCcEn23Mn/qxhMH2EgXpDKyZqizG9ZlN1c8E5j30f1apZjRtL1fzPeB6zl792M5KMhvhYy2HLuRrv587lMe1ThNS2ZrvuNyaBipxl/R31ck1EOO3JeaMFQ0dLutPmeZqmkZ0mkcpTj4Lza0nGMgOzHVz1SeUqpEthy+zDmKI99wbPcwotVsOB5VI/XdSxrLk75jnsL896VrczWn3w76fFsBrt56gueiizy1BeD99RHQZF/BBgATl3Kdo4EtkMAAAAASUVORK5CYII="
                                            })
                                        }),
                                        children: [Object(N.jsxs)("h3", {
                                            className: "vertical-timeline-element-title",
                                            children: ["Q2-2022 ", Object(N.jsx)("br", {}), " AR + GameFi Demo App release", " "]
                                        }), Object(N.jsx)("p", {
                                            children: "TBlocks Characters will be included in the best ever experience in AR and GameFi world for Android and iOS."
                                        })]
                                    }), Object(N.jsxs)(xe.VerticalTimelineElement, {
                                        className: "vertical-timeline-element--work",
                                        contentStyle: {
                                            background: i ? "black" : "white",
                                            color: i ? "white" : "black"
                                        },
                                        contentArrowStyle: {
                                            borderRight: "7px solid  black"
                                        },
                                        iconStyle: {
                                            background: i ? "black" : "#4E4E4E",
                                            color: i ? "black" : "#fff"
                                        },
                                        icon: Object(N.jsx)("center", {
                                            children: Object(N.jsx)("img", {
                                                style: {
                                                    marginTop: "10px"
                                                },
                                                width: "40%",
                                                src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAABACAYAAACHm15kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDM2MCwgMjAyMC8wMi8xMy0wMTowNzoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjEgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjBBNDNDNURFMTFFOTExRUNBNzcxOEM0ODA5MTkxRkI2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjBBNDNDNURGMTFFOTExRUNBNzcxOEM0ODA5MTkxRkI2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MEE0M0M1REMxMUU5MTFFQ0E3NzE4QzQ4MDkxOTFGQjYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MEE0M0M1REQxMUU5MTFFQ0E3NzE4QzQ4MDkxOTFGQjYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz61If8JAAACFUlEQVR42uyaTygEcRTHZ9b422ZzEC7IRRJCjlscHJDIwYG71h5cnNwcVi5yxZ2UiwsXh21zoBAHRcnRQSgkJX92fB9v9LPlsPsmzdZ79ek3v6l989n3+81cfs92XdfiKAZxMAoaeP7fkQa3YBcsgvOvuyQJKkDSDVbcg37ys7mSq2AcPIAESIEXYGdRhVf6z6CAxzdQlsXv6TchXsVpEGWfDqpiK0iDV9DLlc2FZrAFUrwqU4JcpeCAK7pAN+I8SQqSErGM5ToW5hvjPIcOylnN5b4QbvplcAbC4AMcCfOd8xhxeB9QdPODbMGb+cx7i2JA8IWgHDXexDGSNjJBC9cxJqdgW1BJX8VALRgjH1NyD8wEqILtLPmzHymKArbMYe8iZOVBqKRKqqRKqqRKqqRKqqRKqqRKqqRKqqRKqqRKqqRKqqRKqmSeSroBc3PzoZJp78I8ERsE+wGSLPcqakpWMoELUzIFloTL4x0lEyWWrNmkCcxaGQegdCi/IfzTw6AL3IA1cCfI1cmSvypZKEhIh6frYMS4Rye+feAkx5xlfr/dQyz4BFZYrArM+/Wd9OMQvovHTRADkzxvsXxognLM75EgLnnsAROgl+dX1nd/kOhjTpLXfF0vkKQXjlrI2ni5vYckBEWo4/HRz+alCJgDO2ANRP1qXvK7DeyF9+C78YbaWSzvn21gedNQZ1kBbk38FGAAZ+8nkqW85RgAAAAASUVORK5CYII="
                                            })
                                        }),
                                        children: [Object(N.jsxs)("h3", {
                                            className: "vertical-timeline-element-title",
                                            children: [" ", "Q2/Q3-2022 ", Object(N.jsx)("br", {}), "Strong Partnership", " "]
                                        }), Object(N.jsx)("p", {
                                            children: "Marketing Plan & Advertising and Strategic partnership with key stakeholders"
                                        })]
                                    }), Object(N.jsxs)(xe.VerticalTimelineElement, {
                                        className: "vertical-timeline-element--work",
                                        contentStyle: {
                                            background: i ? "black" : "white",
                                            color: i ? "white" : "black"
                                        },
                                        contentArrowStyle: {
                                            borderRight: "7px solid  black"
                                        },
                                        iconStyle: {
                                            background: i ? "black" : "#4E4E4E",
                                            color: i ? "black" : "#fff"
                                        },
                                        icon: Object(N.jsx)("center", {
                                            children: Object(N.jsx)("img", {
                                                style: {
                                                    marginTop: "10px"
                                                },
                                                width: "60%",
                                                src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAA+CAYAAABzwahEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDM2MCwgMjAyMC8wMi8xMy0wMTowNzoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjEgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjE4MjA3NTNGMTFFOTExRUM5NzVFOUI0MENFNTdFNDVFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjE4MjA3NTQwMTFFOTExRUM5NzVFOUI0MENFNTdFNDVFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTgyMDc1M0QxMUU5MTFFQzk3NUU5QjQwQ0U1N0U0NUUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MTgyMDc1M0UxMUU5MTFFQzk3NUU5QjQwQ0U1N0U0NUUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4HO60DAAAJH0lEQVR42tSbCXBOVxTHfSGJiApRW6Rq19hKIlVrqTJEjU4N08pQY+ugC7HEUqW1BLVEDR0xnWmj0tYy1lK01FIZW1FFO0VrF0FQkgjJ13M7/zdz5rnvvvu+Lemd+c335Xvn3XvPe/fec+45Ny63212qGEo/4n0ixuJ6PrGdmExc80cHXMWgeH9ilabsMaITce//rnhp4gjRglgJzB0oIioSKURDIpHI8HVHygT4bZcjquH7AuKEQvYFIpmo44+OBBXD/DbecLCmnLskKz6I2EKsI3rZKGMo4rKbhhqKRxIziJ3EcqKR/uOnOe4lS91PlgkWsiFEFmTibeqdC7kPLK5HEUdN7V4n2uj021ulF6HBQiKF+Ix1YpJJtjmxBNfuEtVt6h4J2XNEf6IGu/Y08TOuXyCSiN34O5t4yZ+KG2+6gOjHfh/HlJ9DDCT2mt7McI36KxGZ7J5bRCraOo7fThN1IR9ObMHvD4iO/lB8GVO6r+R6kmT45xFf6bwNxlPEGOKwpD6hdG2TfDmmfLZq2DtV2MWGqyhvKWT74k2LeTiPeM6L0RVEvEpsxttOlygtU/4m0coXiiewofS2DxZGT3BpyAjlv0dfxYMKM8s4NWdx+PwS5qNUMfoBqpJLDIDP/zxR11s7noPP1kTlUiW7CH8iBA/htre+em3iEFGFyCQSiDtedK4qUQsPMQSbEbEbu0A89KLe7sQGIpRYSIz1hQMjVsqLmD9iHkU6vL8+8S6xFfZcVs4Sy7GgBTus/zXiPupJs7rf0wVGrNB/oXLhSFTTuKcsvLH7TEGh+EFiHUzdd8QZ00M4QvTU7FcMkY/7FvnLgRHKX0Yj421kGzJPS5RdRCJRVSJbhmhEJBN/s3tma/RpPHsZfnVZ42HXGyhkYtkDEqOkj4P6I+H9FeH+pTbyhuO019+K6/AeOvMjEe1hHV3YurJMISfc13vYO8QHQnExPBsTcXjDBnWI0kR7zHFv2niRyNXw9dMgk+pvxVvDLS2SrM6ioyvxYHzR1ijmikZZyLSFzA2iE9YXg5q+UrwycYltQq4zstgDWOFDd9XY6Y1R+PU7LMykcLU3EbW87UgfZneFfa7AiCDewEjIISr6SPnOaPNXhY2vgtjAaSyogvNsquzRCTaKiGgXIo/YSFxh18LxeZE4K7l3P6KmoZIYW3OiK9xgUe8tTa9sD/Eb0Qx++BGJTDYxAsFUrqOI2u4j4u2e7iDiIRsqwq62ZNdn4fdtFvfXhEPx2LQPH8kcDVH+NNVrRyruG+XBiBFt5aoExDB9hAZ2s6iHmL9TiLVsQRuqmG/G3liYmQXEQqbwDkwTN8xVPc3OD8Y9SxwqHYz2HqhsbyEqn8r2uF+bFosceFhBisaEO7tastBMZvPxBzaiYjUU6AH5b32p+GDWuXkSey2G/2JirFgdHTQaB7dzPhYofq0CHBxRrsL06Ci+2leKV4L903EPfY0wjcfQ9iob2YGQW+6p4uZARA3stcUee0yAAwdiVf8I31vaJBya4vOcwzYewcq4zIpnQekIYmqAFS+P1LEovytCTEEINBjm0kkxgh5uWQRmNLEI34cTKzQqFG+oB9EKUZVHsO27iG3EDY060ohhsOudFQnF9rDF54kmiKvJkqET4SeUZb9HE1HEaau5MBNzKNMmqik2/uvd6pIFyxCmqKcBbP1d+NeqeWqYxxSHaS03y8x0sIq5NYF39Ae+F0pkuiG/XRUBPTHsfkK8LBinHcQTj4V8Jk5CXJbU1YY4QJxi81dWROQ0HW857r8392RpTJyEzFSMPCMJeQ8xwxy7J2ZlJ3sii2KYlPqKTUUCc1JOwm6b5SIQrBC+QzeLutoxXztZI5+XprMtbYChk4EgoOG89JbcVAPemxNzEg2l3XCCZDIz2NRYi+3sO9jHiwd4Ctc3KRym6tiyuu1SVUYWM0syF5ZZzO+FLHcV7sCGNmNvrJ3FjuqopB9bYX/TEdWNULQxjO3cQuwU3wTho/DBkxQLTCRzcPp44KRk4N50i+vlsUeYgBF4C/JvatY/mYW9bWNutyHc1YGPfM7uiSpiZ6JcQybUTt4II32iWX8sm6aTVLJBzEMq1LC10ewYVoEHTopYtR/gAFBNTU/LSfmFSML32cQE1RkYt4M8WhhzLz0pQun7eNjldY6jeXAAaDExDt/nwimSKu5i58vsSh47dONJCYfCRXgAdqVI86CQuYijZLPwfaasv0Gscp03foGli0M9ULw5lL9KXNKQDy3leZmPFyUcrOoyn/YIvLDpyCPnwfM5LqnsKFKudRCH2+qwM4n4PIhhL+tPZ6wl4i31xu/cQ3sWm6l8jbcehgd8SZYtFdnPf0y2sxD+usqrO+wwk1kf4SdRXpdcr4CcmrkcYBagFWJ1e22itins/n4qzy0OUZVvcM7kMW5KkNz0DKIkbtyjo7Q4r3II94jsaKhE5kMWgVmDYMQUBEd48vGqIkUdxBws4SwNcJpJ+RQ3r7W4/jKLkm7ELk0Ve7/AshvNJDIV4QYXSsJSZhqzFPUBRG4Mpb/A70UW7rat4s1RwRnkvmQyvVhi/wFGyxDiFWxikk3n1M4rAolt2SZGNw9+mW2dOyJbY5QhnmZLJ7J5rNqPt7KYl+b82VKbwwMxLCfWwsHJjFumtop0lLZSfDSraKhmJzogKb8KD2In3sBwJPl1cmJpbI63cLDx+RxByg2KLa2t4lXZCj81wFHWMDZ61vu7PbPTUgWe1V1iToCDjcJ/SGU5Lpc/G5NFWe8hyjo9wIqHs03FGX8d0Fcd9xrG5vhc0zVhf0cgZzXZ5uyLmfaoT9jZ7pJ9/nZ2DDvG30Pd6sIIpvxMdsjeHFEV68E0m0aqwSkyl2lM6f0scdg0EGuK6iJXXii8D9/vIOvJzViiYrVew454pyOWZpQMloXNDpTSOkdBRjP31TA17SURzS2K4F8u6uhlck8LWb2XHZ5j9xq7ExFild2NQ7t5yIxcMUU8jH+rkpUQUIC4ulE+JjYTbbHbE21cD+RKqnMU5IQinZPPclJROILBSywsR4EktHUMFEvx9h/u9iEMVQ+Zl5vM/rqwd3Yhf5ZTks50++JfLEUQYwlSzKUlwcJM/F9aVklS/F8BBgAq3sKdw1XdnAAAAABJRU5ErkJggg=="
                                            })
                                        }),
                                        children: [Object(N.jsxs)("h3", {
                                            className: "vertical-timeline-element-title",
                                            children: [" ", "Q3-2022 ", Object(N.jsx)("br", {}), "Staking Platform", " "]
                                        }), Object(N.jsx)("p", {
                                            children: "Unique Staking platform to earn passive income and cool rewards"
                                        })]
                                    }), Object(N.jsxs)(xe.VerticalTimelineElement, {
                                        className: "vertical-timeline-element--education",
                                        contentStyle: {
                                            background: i ? "black" : "white",
                                            color: i ? "white" : "black"
                                        },
                                        contentArrowStyle: {
                                            borderRight: "7px solid  black"
                                        },
                                        iconStyle: {
                                            background: i ? "black" : "#4E4E4E",
                                            color: i ? "black" : "#fff"
                                        },
                                        icon: Object(N.jsx)("center", {
                                            children: Object(N.jsx)("img", {
                                                style: {
                                                    marginTop: "13px"
                                                },
                                                width: "54%",
                                                src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDM2MCwgMjAyMC8wMi8xMy0wMTowNzoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjEgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjJDRkVEOTA5MTFFOTExRUM4RTYyQjIzQTk3QTk4MUI5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjJDRkVEOTBBMTFFOTExRUM4RTYyQjIzQTk3QTk4MUI5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MkNGRUQ5MDcxMUU5MTFFQzhFNjJCMjNBOTdBOTgxQjkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MkNGRUQ5MDgxMUU5MTFFQzhFNjJCMjNBOTdBOTgxQjkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4oh2XGAAAFUUlEQVR42tRZa4hVVRi958z1jmWO2djDXlRaUGb2IjMRKgKtQEoqy0c/FAp/VMSEFNEQZOWvgmr6U9SfLAykEJEeKEZCRZOgQVaUVk4+GNM0Zxyv997TWrA+/Dg5c+61w+GcDWvOPbPvPnuvfb7X2jeIoqiEdhqwDHgEmAA0Svlsgdb2NfAC0BuAwGh8eB34G7gS+AWI9OW8tTrQAczS9b4y/wDHxeweoFbKf5sGfACsCPFnDnAH8HZBFs+2FVgLTA1l/wPAUKlY7R9aTVl2RSLlhAH0lYrzj4aI2731N3RPszyqsWVtVKDvc75BfYetXeMb7tmDCcGkjc8qt8D4CWC+WwCd/kFgH3AmsBKYCRzTgr9RVGO7Wf2n634U8AywTveLgC4RJoHDwFLg16RFtULgILDD3fsdaojIj65/v/tM8/xdO+3HW+Nm/ODuB5r2R4TRD4GtwKXMCQkIYtc0+8OEsXF0A3tDmUMkX0jkG7um2d9IGHuynBCE8uYxSgxFauPNB9YpgdHhVgCHXNrOW4sUfW4E7gW+pb0x9D0LjAVuBbZp8RbyhvS5PWNSdc3d7oINzewMhdzLgAWBijmSeBi4CzjfPYCD3wFeAn4yu8to8eM174vALpHg3FVgC/AuM7IRsDZGb8LYdojAX8DjGpwFAc59rcx6E7BapmPk+ofLAwOCj/1VxexdGdv7n8AFwAG/4JESGSPSeXoL9qrO1hthUpmqTBlmsPiqSvvtsvVLlL0DvYH9FmzMhDqBp4AlQJ+ctyLmm/TQOapnshA7nLsX+E0Lnq+6yaLQIZUmn5BAhxyCqf4sOasXNLVTKDvSCpk1LTh0vsF66m7gcuABEngUHybLUVcWJIldDKwhITK7TYxWFygL/wF8CkwyHVBtshbKU2OSq5ediGhLGDAuVi/VVUKbIOqUfTacYOl3YmiC86tQfVZSj9X4urP/fU7wnKyFrQqaJ4GHnIOzCJwL7FbWfAW4RZOaoFmosTOAVxXFLCAslx2boFkuMWSCZpECSmqChg/7PBarh9znLZrYCHrxwwCxwQmaQMStMVyud6X00VhCTU3Q/F/BUxqhP2hxrv8ImlpKsbsZURI1+b+mBM1BifLOgkWhiVZKzMb1faZl4HmVEkFOFx3Jj24HeljmkADfwmM6+rgO+Nk5WuRK6ErGh7h1RaWKgk3kSglWqlcAi62YCyRm5ilNm42NluR8Wsd5WSW7ukz6ZYmanSIRitRmYBUzclzQtLudjpS8VinpLNPgrEzleuWGtTLxwPUdGS4PHIstclDRqRo7qMqi9UuPHPELHimRUTBcJdFsTDtUYlvRV83wDUyRqUxTorODhpoCTZ8XNFQ83fKBr5wjHVYWpfNcmKEjBwomFS14skhF2nT6xxvUMSQwUTZ2DfCmDlSDWBRq5vQ6bQINzV12UciU4jw59mYS6NJRCg9m3ypIEmPi/Zhvgjs7HZgdK9Ty3nia/QVwbuiSRtEafSMKXREVFIxA0KqguUFh1iuu9ardmbFnKoub4/EgbKPG0sdmlU78RDVKxzU71X+1THlIz+b1s9KJg+ZUBM1CLdCi0wyprj5Jwi4lnDaRHOcIMMK9BnzpTLbmCNwJ3ORK++k6h0qVACPURU5x9ShHlDRRt3SvaeQDbux3wAKRs8Op710/peU2p897dE6VqCnKbseSBM12YbijwN6EsmDDCP07YhK02YIv5E7tBc4xgVCgNokbz0TGk4SP9JqfUwoPchqVGjrZ4K8z/N1gjdVCi+VktNs9OVdkFSUxFntLvR6gTLuf2e0UBHaWsf+4/O09bva/AgwALfLF+e5p874AAAAASUVORK5CYII="
                                            })
                                        }),
                                        children: [Object(N.jsxs)("h3", {
                                            className: "vertical-timeline-element-title",
                                            children: ["Q4-2022", Object(N.jsx)("br", {}), "GameFi world release"]
                                        }), Object(N.jsx)("p", {
                                            children: "A coolest GameFi TBlocks World + bonus tournament launch"
                                        })]
                                    }), Object(N.jsxs)(xe.VerticalTimelineElement, {
                                        className: "vertical-timeline-element--education",
                                        contentStyle: {
                                            background: i ? "black" : "white",
                                            color: i ? "white" : "black"
                                        },
                                        contentArrowStyle: {
                                            borderRight: "7px solid  black"
                                        },
                                        iconStyle: {
                                            background: i ? "black" : "#4E4E4E",
                                            color: i ? "black" : "#fff"
                                        },
                                        icon: Object(N.jsx)("center", {
                                            children: Object(N.jsx)("img", {
                                                style: {
                                                    marginTop: "10px"
                                                },
                                                width: "60%",
                                                src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA7CAYAAAAuEkmwAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDM2MCwgMjAyMC8wMi8xMy0wMTowNzoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjEgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQ3NzE2QUQxMTFFOTExRUNBQjhBQUJGMzg2NERENjBDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQ3NzE2QUQyMTFFOTExRUNBQjhBQUJGMzg2NERENjBDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDc3MTZBQ0YxMUU5MTFFQ0FCOEFBQkYzODY0REQ2MEMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDc3MTZBRDAxMUU5MTFFQ0FCOEFBQkYzODY0REQ2MEMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz50BsAUAAAGR0lEQVR42tyae2zXVBTHu/Ebw22yzYCoKATGY4CLmiEZc1MH6HQah4AzYkRFEEgcgvFFNDGKE/UfQ9DEF0YjQaf4CDpB0QgOHzxEROcTYbx0vAYyDGPg6vewb5Nrbftr+2v7G57kk/7a3+3tPb33nnvOuU3RdV0LUWaS01yUbQSzwaogG5ASooIloN7jPbvABWBvUI1IDbH3in3c0xsMDLIRYSq42sc9v4OfTxYFvwDTwAawFfxpU24P//8UXA/2B9oKmYMR0A08r1vLpACfMwKUqNfCNDLdwa1gBMgnGTaGpQFsBJ+DNWC3j+ddBD4AXcFojqBQe3CKqadawHZwgOe7iVkOgTowA/R0+awSU117wZiwe/AscDvYDjaxpw6CJ0A1uAEsB71AHriQlleWiZ6sQ3ryWfAS67GSIvAe6GG63gzGRzUHVRbwLU+w+T8HXAc+VHqkGcwBXU1ls8FW3V62JUPBK8H7oJ+LssPBCqXBa0CpqUwhh6RZ9oPRyVDQC+lgvdEbPB7j/DTKVIHDFspddmL6JdiAQk5wlZEcZkEoWM0Grwa5YK6ixONgsnI+H+wDR0GxUYffB3enpbOTzSA/AAXLOBcLlGuV4KDyrCNgGv8rApeqdfh9cLkeXx4NcegWcckR2eBU1q+rJib7SJwy34XoBn4FrmXUIcvKw2GESyPBZJBpuv43+AS8rIUvl4AVIA1MAG9FGQ9GJbeBF+lIiLu2LapoIipZyNEiseR8858xl5VkgUqQI+6rU4YAHAdf0j2LQqRNx/hb2ljG0Mt1uCShznLdm7TQ0oXtCBQoDoDq7aR5saL9QLnHtyo9Pi6gHpJ5VWEznU4ly2hwfmJ4VuylBzPAOt27jEqwd7qAGqW+c2zK5VqEaEu8Brx9mE7IdFFWlomvGXz6lWFgAeeTyHPgDs5vJzkdbOaycS74rTM62FVKUCzyA+2A2/tred/sRDyZMETm0iuglpZRo7c0CbR6qKeWx1K7ZaI3cym5cZYEu2VChuhasMRjkliG5Pmm6w+B9T6yefJiCsEp5u6NgVV6MFLuYjilglmgzeL+d30O8VQOa5Fh5iGaQec1CClzkcWWXMpTNAqqNDGn6kfawRb+HmJW8DB4MwDlJLn0msP/4xkRVNg08CafqUNDfuWxf8yicsmEvU2T62cOitu0ziYFn8V5dbdDHeJPfpzgC27k8YyYzTpWF4KV7AJeBWMdyshu1L0+65f041xRCvQ1XmhMi04q4ygnexdTXSzmdpLP+//1UkXBAWAWvZVEg0NjiH4GnuZoUH1KJ7kzwZ2leq59srxdA6aANlFwMbPKQco47hItMllGO3mdi3wi0q5s2Q3l8UAqezAMGWQ6X2Sj5CYatiBlMI87RcFHHPbu/EqDRY/8wf2ItZxn4n59xGstAT/f6LRfjGiij7LhkegcPM516C+HMmIQ2k54+8FLOp8v1jTv/5B0MovMv+/BN2C4m2Wiq8cebFdyJMmQK9gOcdJ1JwUvBzUg2+MDZGlYqXV889IasXKpnNMa57dtyqKHzZaUF6lOQrAsSah2sANkOQW8MZfpCSfJjKDHshgQn8fzqRyeCxk4OOZkpoP7NOsPB+ItuLK2TdSC/iTEer4to0WWbe4baTMGGxnueFa0m0WsFk904+1FlOZ4kAkpoyOe4bnmRsGTRSQCkY8bmpmRa1Lnmh85kwuq3RDdZXK0wxSx8jfzd81/3EEflmoev2Vp5e6qinGtnpY4bKspI/AdWu2lVmW8VjjUwzIxJwIFn+SzGu0y317zoq0evJRDIQ/NB8A9bJNYzx2WrpUPI3MLg9MsiwDZcLZXMog+mqASYvL7ax2bKqrMA/fzWZLAWmpv0/0PjzTmUVXSuGkS1BCcwe9ipise1mIOS/k2Zmy8Ojr7h0AVVGYPmAg28nyn8bFdZ1RQvl4a6KH8GybjJZn3vm7vT8bmy0zGaxfHKVfAHGmpkky+C4zRTB8aOEnYacM0C6vbi8Yjx6LsIG4dVIGrabTamE99zMLYJFXBUeAFmu9vuV8gXkaekkbM5vkQrWNnSU1UidslW2Gy6/Sj7xxKiL7oVVrHhznpHu7ZwpxqHVOATQkniUJ2ts/mXBrAJFA2vf4UrpGSTdvHXm5g4jfQLMA/AgwAlx+5SleXL0oAAAAASUVORK5CYII="
                                            })
                                        }),
                                        children: [Object(N.jsxs)("h3", {
                                            className: "vertical-timeline-element-title",
                                            children: ["Q1-2023", Object(N.jsx)("br", {}), "GameFi World completion + ETH Bridge"]
                                        }), Object(N.jsx)("p", {
                                            children: "Staking platform & GameFi together to earn passive income, cool rewards. Key words are: stake-play to earn-increase your Rarity. Unique ETH Bridge to claim the Owned Characters on TRON for ETH Blockchain too."
                                        })]
                                    })]
                                })
                            })
                        }), Object(N.jsx)(m.a, {
                            container: !0,
                            children: Object(N.jsxs)(m.a, {
                                item: !0,
                                xs: 11,
                                style: {
                                    margin: "auto"
                                },
                                children: [Object(N.jsx)(k.a, {
                                    className: P.gw,
                                    margin: "80px 0px 0px 0px",
                                    textAlign: "center",
                                    fontSize: "30px",
                                    fontWeight: "bold",
                                    children: "Minting & way forward"
                                }), Object(N.jsxs)(k.a, {
                                    style: {
                                        fontSize: G ? "16px" : "24px",
                                        textAlign: "justify",
                                        maxWidth: "1350px"
                                    },
                                    className: P.bw,
                                    padding: "0px 0px 100px 0px",
                                    width: {
                                        xs: "100%",
                                        md: "85%"
                                    },
                                    margin: "auto",
                                    children: [Object(N.jsx)("br", {}), Object(N.jsx)("br", {}), " 5% Toward strictly for TBlocks holders around the world (first MINT only). 5% Toward building the TBlocks GameFi Wolrd rewards. The mission for team TBlocks is to produce exclusive tournaments + activations for TBlocks holders worldwide. Imagine a world where your TBlocks is your All-Access Pass. Well, you don\u2019t have to because this is the world\u2019s first 3D NFT collection that will grant you access to events. Stay tuned as the team is working to build a community where holders have option to be part of the Game."]
                                })]
                            })
                        }), Object(N.jsx)(m.a, {
                            item: !0,
                            container: !0,
                            style: {
                                maxWidth: "1450px",
                                margin: "0px auto 50px auto"
                            },
                            children: Object(N.jsxs)(m.a, {
                                className: "footericons",
                                container: !0,
                                item: !0,
                                justifyContent: "flex-start",
                                style: {
                                    paddingLeft: "40px"
                                },
                                children: [Object(N.jsxs)(m.a, {
                                    item: !0,
                                    children: [" ", Object(N.jsx)("a", {
                                        href: "https://t.me/tblocksw",
                                        target: "_blank",
                                        children: Object(N.jsx)("i", {
                                            style: {
                                                color: "rgb(51, 51, 51)",
                                                fontSize: "30px"
                                            },
                                            className: "fab fa-telegram"
                                        })
                                    })]
                                }), Object(N.jsx)(m.a, {
                                    item: !0,
                                    children: Object(N.jsx)("a", {
                                        href: "https://twitter.com/tblocksw",
                                        target: "_blank",
                                        children: Object(N.jsx)("i", {
                                            style: {
                                                color: "rgb(51, 51, 51)",
                                                marginLeft: "8px",
                                                fontSize: "30px"
                                            },
                                            className: "fab fa-twitter"
                                        })
                                    })
                                }), Object(N.jsx)(m.a, {
                                    item: !0,
                                    children: Object(N.jsx)("a", {
                                        href: "https://discord.gg/ChfDagP9",
                                        target: "_blank",
                                        children: Object(N.jsx)("i", {
                                            style: {
                                                color: "rgb(51, 51, 51)",
                                                marginLeft: "8px",
                                                fontSize: "30px"
                                            },
                                            className: "fab fa-discord"
                                        })
                                    })
                                }), Object(N.jsx)(m.a, {
                                    item: !0,
                                    children: Object(N.jsx)("a", {
                                        href: "https://peridot-heather-e84.notion.site/Getting-Started-ad66f7fe2a654ebfbbdbc6861116991d",
                                        target: "_blank",
                                        children: Object(N.jsx)("i", {
                                            style: {
                                                color: "rgb(51, 51, 51)",
                                                marginLeft: "9px",
                                                fontSize: "30px"
                                            },
                                            className: "fas fa-sticky-note"
                                        })
                                    })
                                })]
                            })
                        })]
                    })
                },
                ge = function(e) {
                    var t = e.userWalletAddress,
                        n = e.setopeninput,
                        a = e.nftPrice,
                        r = e.totalSupply,
                        c = (e.logoutopen, e.setlogoutopen),
                        s = e.userAction,
                        i = e.setActivation,
                        o = e.Activation,
                        l = e.isDarkMode,
                        d = e.galleryPunks,
                        b = e.totalAvailable,
                        j = e.setMintArray,
                        x = e.setBuyConfirmation,
                        p = e.isMintProcessing,
                        u = e.setisMintProcessing,
                        g = e.setmintNumber,
                        h = e.mintNumber,
                        m = e.setMongoIds,
                        f = e.contractNft,
                        O = e.setloading,
                        y = e.loading,
                        k = e.setairdropState,
                        w = e.setPlayopen,
                        v = e.Playopen,
                        T = e.setPlayId,
                        A = e.PlayId,
                        S = e.setisTrc20,
                        C = e.isTrc20,
                        I = e.allowance,
                        R = e.nftTokenprice,
                        M = e.tronWeb,
                        F = e.balanceOf,
                        E = e.contractToken,
                        B = e.setupdateInfo,
                        D = e.setrandomSelectionIds,
                        L = e.nftPriceToken;
                    return Object(N.jsx)("div", {
                        children: Object(N.jsx)(ue, {
                            userWalletAddress: t,
                            setopeninput: n,
                            nftPrice: a,
                            totalSupply: r,
                            setlogoutopen: c,
                            userAction: s,
                            setActivation: i,
                            Activation: o,
                            isDarkMode: l,
                            galleryPunks: d,
                            totalAvailable: b,
                            setMintArray: j,
                            setBuyConfirmation: x,
                            isMintProcessing: p,
                            setisMintProcessing: u,
                            setmintNumber: g,
                            mintNumber: h,
                            setMongoIds: m,
                            contractNft: f,
                            setloading: O,
                            loading: y,
                            setairdropState: k,
                            setPlayopen: w,
                            Playopen: v,
                            setPlayId: T,
                            PlayId: A,
                            setisTrc20: S,
                            isTrc20: C,
                            allowance: I,
                            nftTokenprice: R,
                            nftPriceToken: L,
                            tronWeb: M,
                            balanceOf: F,
                            contractToken: E,
                            setupdateInfo: B,
                            setrandomSelectionIds: D
                        })
                    })
                },
                he = n(125),
                me = n.n(he),
                fe = Object(j.a)((function(e) {
                    var t;
                    return t = {
                        btntoggle: {
                            height: "30px",
                            padding: "5px 20px",
                            color: "white",
                            border: "1px solid ".concat(e.palette.secondary.btnborder),
                            marginTop: "20px",
                            borderRadius: "5px",
                            background: e.palette.secondary.btnbg,
                            "&:hover": {
                                background: "#007ACC"
                            }
                        },
                        root: {
                            color: "white"
                        },
                        colortoggle: {
                            color: e.palette.secondary.bw
                        }
                    }, Object(R.a)(t, "btntoggle", {
                        height: "30px",
                        padding: "5px 20px",
                        color: "white",
                        border: "1px solid ".concat(e.palette.secondary.btnborder),
                        marginTop: "20px",
                        borderRadius: "5px",
                        background: e.palette.secondary.btnbg
                    }), Object(R.a)(t, "cardbtnbgc", {
                        background: e.palette.secondary.cardbg
                    }), Object(R.a)(t, "wb", {
                        background: e.palette.secondary.wb
                    }), t
                })),
                Oe = function(e) {
                    var t = e.myPunks,
                        n = e.setlogoutopen,
                        r = e.userAction,
                        c = e.setActivation,
                        s = e.userWalletAddress,
                        b = e.setcurrentSellingNftObject,
                        j = e.setjdogeState,
                        x = e.setfiltermodalopen2,
                        p = e.sortBy,
                        h = e.setcurrent3dLink,
                        w = e.setviewmodalopen,
                        S = e.setopeninput,
                        C = e.setmintID,
                        I = e.cashbackData2,
                        M = e.setmyDoges,
                        F = e.myDoges,
                        E = e.intTwo,
                        B = e._stakedNft,
                        D = e._MyPunks,
                        L = Object(a.useState)(""),
                        W = Object(d.a)(L, 2),
                        z = W[0],
                        P = W[1],
                        U = Object(a.useState)(!1),
                        G = Object(d.a)(U, 2),
                        Y = G[0],
                        Z = G[1],
                        H = fe(),
                        V = function() {
                            var e = Object(l.a)(Object(o.a)().mark((function e() {
                                var n, a;
                                return Object(o.a)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (Z(!0), z) {
                                                e.next = 6;
                                                break
                                            }
                                            n = [].concat(Object(i.a)(t), Object(i.a)(B)), M(n), e.next = 23;
                                            break;
                                        case 6:
                                            if (!isNaN(z)) {
                                                e.next = 17;
                                                break
                                            }
                                            if ("Human" != (a = z.toLowerCase()) && "punk" != a && "ninja" != a && "winkster" != a && "mcdonald" != a && "justinsun" != a && "Unknown" != a && "OompaLoompa" != a) {
                                                e.next = 13;
                                                break
                                            }
                                            return e.next = 11, u.a.post("/searchjdoge", {
                                                criteria: "type",
                                                data: z,
                                                walletAddress: s
                                            }).then((function(e) {
                                                M(e.data)
                                            }));
                                        case 11:
                                            e.next = 15;
                                            break;
                                        case 13:
                                            return e.next = 15, u.a.post("/searchjdoge", {
                                                criteria: "attribute",
                                                data: z,
                                                walletAddress: s
                                            }).then((function(e) {
                                                console.log(e.data, "res----\x3e"), M(e.data)
                                            }));
                                        case 15:
                                            e.next = 23;
                                            break;
                                        case 17:
                                            if (!(Number(z) >= 1 && Number(z) <= 1e4)) {
                                                e.next = 22;
                                                break
                                            }
                                            return e.next = 20, u.a.post("/searchjdoge", {
                                                criteria: "id",
                                                data: z,
                                                walletAddress: s
                                            }).then((function(e) {
                                                console.log(e, "res---\x3e"), M(e.data)
                                            }));
                                        case 20:
                                            e.next = 23;
                                            break;
                                        case 22:
                                            A.b.error("Data not Found");
                                        case 23:
                                            Z(!1);
                                        case 24:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();

                    function Q() {
                        return (Q = Object(l.a)(Object(o.a)().mark((function e(t) {
                            return Object(o.a)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, u.a.post("/nftlistjdoge", {
                                            walletAddress: s,
                                            criteria: t.criteria,
                                            value: t.value
                                        }).then((function(e) {
                                            M(e.data)
                                        }));
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))).apply(this, arguments)
                    }
                    return Object(a.useEffect)((function() {
                        var e = new AbortController;
                        return void 0 != p.value && function(e) {
                                Q.apply(this, arguments)
                            }(p),
                            function() {
                                e.abort()
                            }
                    }), [p]), Object(a.useEffect)((function() {
                        var e = new AbortController;
                        return E(),
                            function() {
                                e.abort()
                            }
                    }), []), Object(a.useEffect)((function() {
                        var e = new AbortController;
                        return Object(l.a)(Object(o.a)().mark((function e() {
                                return Object(o.a)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, D();
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))(),
                            function() {
                                e.abort()
                            }
                    }), []), Object(N.jsx)("div", {
                        style: {
                            maxWidth: "1350px",
                            margin: "105px auto 0px auto"
                        },
                        children: Object(N.jsxs)(m.a, {
                            container: !0,
                            style: {
                                padding: "40px"
                            },
                            children: [Object(N.jsx)(m.a, {
                                container: !0,
                                item: !0,
                                xs: 12,
                                md: 3,
                                style: {
                                    textAlign: "center"
                                },
                                children: Object(N.jsxs)(m.a, {
                                    item: !0,
                                    xs: 12,
                                    children: [Object(N.jsx)(f.a, {
                                        paragraph: !0,
                                        className: H.colortoggle,
                                        style: {
                                            textAlign: "center"
                                        },
                                        children: "Search Here"
                                    }), Object(N.jsx)("input", {
                                        value: z,
                                        onChange: function(e) {
                                            P(e.target.value)
                                        },
                                        autoComplete: "off",
                                        className: H.colortoggle,
                                        style: {
                                            width: "98%",
                                            border: "1px solid #E2BDBD",
                                            borderRadius: "5px",
                                            padding: "14px 0px 14px 0px",
                                            background: "none",
                                            textIndent: "8px"
                                        },
                                        id: "outlined-basic",
                                        placeholder: "Enter Your Search",
                                        variant: "outlined"
                                    }), Y ? Object(N.jsxs)(O.a, {
                                        variant: "outlined",
                                        color: "primary",
                                        style: {
                                            marginTop: "15px",
                                            width: "98%"
                                        },
                                        children: [Object(N.jsx)("span", {
                                            className: H.colortoggle,
                                            children: "Loading..."
                                        }), " "]
                                    }) : Object(N.jsxs)(O.a, {
                                        onClick: function() {
                                            return V()
                                        },
                                        variant: "outlined",
                                        color: "primary",
                                        style: {
                                            marginTop: "15px",
                                            width: "98%"
                                        },
                                        children: [Object(N.jsx)("span", {
                                            className: H.colortoggle,
                                            children: "Search"
                                        }), " "]
                                    }), Object(N.jsxs)(O.a, {
                                        onClick: function() {
                                            x(!0)
                                        },
                                        variant: "outlined",
                                        color: "primary",
                                        style: {
                                            marginTop: "15px",
                                            width: "98%"
                                        },
                                        children: [Object(N.jsx)("span", {
                                            className: H.colortoggle,
                                            children: "Filter"
                                        }), " ", Object(N.jsx)("i", {
                                            className: H.colortoggle + " fas fa-sliders-h",
                                            style: {
                                                fontSize: "18px",
                                                marginLeft: "6px"
                                            }
                                        })]
                                    }), Object(N.jsxs)(k.a, {
                                        style: {
                                            color: "#FD0001",
                                            fontSize: "26px",
                                            fontWeight: "bold"
                                        },
                                        children: [Object(N.jsx)("span", {
                                            children: "Your CuteATC NFTs"
                                        }), Object(N.jsx)("br", {}), Object(N.jsxs)(k.a, {
                                            style: {
                                                textAlign: "left",
                                                fontSize: "18px"
                                            },
                                            className: H.colortoggle,
                                            children: [Object(N.jsx)("span", {
                                                children: "Connect your tron wallet, then select your CuteATC."
                                            }), Object(N.jsx)("br", {}), Object(N.jsxs)("span", {
                                                children: ["Don't worry if you dont have a CuteATC, you can still get one,", " ", Object(N.jsx)(g.b, {
                                                    to: "/",
                                                    style: {
                                                        textDecoration: "none"
                                                    },
                                                    children: "mint one."
                                                })]
                                            })]
                                        }), Object(N.jsx)("br", {}), s ? Object(N.jsxs)(k.a, {
                                            style: {
                                                textAlign: "left",
                                                fontSize: "18px"
                                            },
                                            className: H.colortoggle,
                                            children: [Object(N.jsx)("span", {
                                                children: "My CuteATC Details"
                                            }), Object(N.jsx)("br", {}), Object(N.jsx)("br", {}), Object(N.jsx)("span", {
                                                children: "Cashback:"
                                            }), I.length > 0 && I[0].resultant > 0 ? Object(N.jsx)(O.a, {
                                                style: {
                                                    background: "green",
                                                    borderRadius: "20px"
                                                },
                                                className: H.colortoggle,
                                                children: "Active"
                                            }) : Object(N.jsx)(O.a, {
                                                style: {
                                                    background: "red",
                                                    borderRadius: "20px"
                                                },
                                                className: H.colortoggle,
                                                children: "False"
                                            }), " ", Object(N.jsx)("br", {}), Object(N.jsx)("span", {
                                                children: "BANANA Pool:"
                                            }), Object(N.jsx)(O.a, {
                                                children: Object(N.jsx)("span", {
                                                    className: H.colortoggle,
                                                    children: I.length > 0 && I[0].length > 0 ? 50 * I[0].resultant * 9e3 / 10 : "Not Minted yet"
                                                })
                                            }), Object(N.jsx)("br", {}), Object(N.jsx)("span", {
                                                children: "Minted CuteATC:"
                                            }), Object(N.jsx)(O.a, {
                                                children: I.length > 0 ? Object(N.jsx)("span", {
                                                    className: H.colortoggle,
                                                    children: I[0].length
                                                }) : Object(N.jsx)("span", {
                                                    className: H.colortoggle,
                                                    children: '"Not Minted Yet"'
                                                })
                                            }), Object(N.jsx)("br", {}), Object(N.jsx)("span", {
                                                children: "Owned CuteATC: "
                                            }), Object(N.jsx)(O.a, {
                                                children: F.length > 0 ? Object(N.jsx)("span", {
                                                    className: H.colortoggle,
                                                    children: F.length
                                                }) : Object(N.jsx)("span", {
                                                    className: H.colortoggle,
                                                    children: '"Not Minted Yet"'
                                                })
                                            }), Object(N.jsx)("br", {})]
                                        }) : null]
                                    })]
                                })
                            }), Object(N.jsx)(m.a, {
                                container: !0,
                                item: !0,
                                xs: 12,
                                md: 9,
                                style: {
                                    textAlign: "center"
                                },
                                children: Object(N.jsxs)(m.a, {
                                    item: !0,
                                    xs: 12,
                                    children: [s && s ? Object(N.jsxs)(f.a, {
                                        style: Object(R.a)({
                                            fontSize: "16px"
                                        }, "fontSize", "bold"),
                                        variant: "h4",
                                        component: "h1",
                                        className: H.colortoggle,
                                        children: [" ", "Welcome", " "]
                                    }) : Object(N.jsxs)(f.a, {
                                        variant: "h4",
                                        component: "h1",
                                        className: H.colortoggle,
                                        children: [" ", "Connect your Tron Wallet", " "]
                                    }), s || 200 == r ? Object(N.jsxs)("div", {
                                        children: [s ? Object(N.jsx)(O.a, {
                                            variant: "filled",
                                            style: {
                                                border: "1px solid white",
                                                borderRadius: "50px",
                                                color: "white",
                                                marginTop: "25px",
                                                background: "#007ACC"
                                            },
                                            onClick: function() {
                                                c(!0), n(!0)
                                            },
                                            children: (null === s || void 0 === s ? void 0 : s.slice(0, 6)) + "..." + (null === s || void 0 === s ? void 0 : s.slice(-4))
                                        }) : Object(N.jsx)(O.a, {
                                            variant: "filled",
                                            style: {
                                                border: "1px solid white",
                                                borderRadius: "50px",
                                                color: "white",
                                                marginTop: "25px",
                                                background: "#007ACC"
                                            },
                                            children: "loading..."
                                        }), Object(N.jsx)("br", {}), Object(N.jsx)("br", {}), Object(N.jsxs)(m.a, {
                                            container: !0,
                                            item: !0,
                                            xs: 12,
                                            md: 12,
                                            style: {
                                                textAlign: "center",
                                                marginTop: "40px"
                                            },
                                            children: [F.length > 0 ? F.sort((function(e, t) {
                                                return e.stakingStatus === t.stakingStatus ? 0 : e.stakingStatus ? 1 : -1
                                            })).map((function(e, t) {
                                                return Object(N.jsx)(m.a, {
                                                    style: {
                                                        marginBottom: "30px"
                                                    },
                                                    item: !0,
                                                    xs: 12,
                                                    md: 4,
                                                    lg: 3,
                                                    children: Object(N.jsxs)(y.a, {
                                                        style: {
                                                            background: "transparent",
                                                            width: "400px",
                                                            maxWidth: "90%",
                                                            margin: "auto",
                                                            textAlign: "left",
                                                            border: "1px solid #DFDFDF"
                                                        },
                                                        children: [Object(N.jsx)(T.a, {
                                                            style: {
                                                                maxWidth: "400px",
                                                                cursor: "pointer"
                                                            },
                                                            component: "img",
                                                            height: "auto",
                                                            image: e.nftimage,
                                                            alt: "green iguana"
                                                        }), Object(N.jsxs)(v.a, {
                                                            className: H.wb,
                                                            children: [Object(N.jsxs)(f.a, {
                                                                className: H.colortoggle,
                                                                variant: "h5",
                                                                component: "div",
                                                                children: ["CuteATC #", e.nftid, Object(N.jsx)("br", {})]
                                                            }), Object(N.jsxs)(f.a, {
                                                                className: H.colortoggle,
                                                                children: ["Type: ", e.nftattributes[0].Type ? e.nftattributes[0].Type : null]
                                                            }), Object(N.jsxs)(f.a, {
                                                                className: H.colortoggle,
                                                                children: ["Rarity Rank:", e.nftRank]
                                                            }), Object(N.jsxs)(f.a, {
                                                                className: H.colortoggle,
                                                                children: ["MintID:", e.mintId]
                                                            })]
                                                        }), Object(N.jsxs)(k.a, {
                                                            className: H.wb,
                                                            style: {
                                                                padding: "10px",
                                                                textAlign: "center"
                                                            },
                                                            children: [!0 === e.stakingStatus ? "" : Object(N.jsxs)(k.a, {
                                                                children: [Object(N.jsx)(g.b, {
                                                                    to: "/CuteApeinfo/".concat(e.nftid),
                                                                    style: {
                                                                        textDecoration: "none"
                                                                    },
                                                                    children: Object(N.jsx)(O.a, {
                                                                        style: {
                                                                            background: "#039BE5",
                                                                            color: "white",
                                                                            width: "80%"
                                                                        },
                                                                        onClick: function() {
                                                                            b(e), j(!0), h(e.view3D), w(!0)
                                                                        },
                                                                        children: "NFT Details"
                                                                    })
                                                                }), Object(N.jsx)("br", {}), Object(N.jsx)(O.a, {
                                                                    onClick: function() {
                                                                        me()(document).unbind("contextmenu"), me()(document).unbind("cut copy paste"), C(e.mintId), S(!0)
                                                                    },
                                                                    style: {
                                                                        marginTop: "10px",
                                                                        background: "#FDA600",
                                                                        color: "white",
                                                                        width: "80%"
                                                                    },
                                                                    children: "Transfer NFT"
                                                                }), Object(N.jsx)("br", {})]
                                                            })]
                                                        })]
                                                    })
                                                }, t)
                                            })) : null, F.length <= 0 ? Object(N.jsx)(k.a, {
                                                width: "100%",
                                                style: {
                                                    fontWeight: "bold",
                                                    textAlign: "center",
                                                    fontSize: "40px",
                                                    color: "red"
                                                },
                                                children: "No CuteATC Available"
                                            }) : null]
                                        })]
                                    }) : Object(N.jsx)(O.a, {
                                        variant: "filled",
                                        item: !0,
                                        className: H.btntoggle,
                                        onClick: function() {
                                            c(!0)
                                        },
                                        children: "Connect Wallet"
                                    })]
                                })
                            }), Object(N.jsx)(m.a, {
                                item: !0,
                                container: !0,
                                style: {
                                    marginTop: "90px"
                                },
                                children: Object(N.jsxs)(m.a, {
                                    container: !0,
                                    item: !0,
                                    justifyContent: "flex-start",
                                    children: [Object(N.jsx)(m.a, {
                                        item: !0,
                                        children: Object(N.jsx)("a", {
                                            href: "https://t.me/tblocksw",
                                            target: "_blank",
                                            children: Object(N.jsx)("i", {
                                                style: {
                                                    color: "rgb(51, 51, 51)",
                                                    fontSize: "30px"
                                                },
                                                className: "fab fa-telegram"
                                            })
                                        })
                                    }), Object(N.jsx)(m.a, {
                                        item: !0,
                                        children: Object(N.jsx)("a", {
                                            href: "https://twitter.com/tblocksw",
                                            target: "_blank",
                                            children: Object(N.jsx)("i", {
                                                style: {
                                                    color: "rgb(51, 51, 51)",
                                                    marginLeft: "8px",
                                                    fontSize: "30px"
                                                },
                                                className: "fab fa-twitter"
                                            })
                                        })
                                    }), Object(N.jsx)(m.a, {
                                        item: !0,
                                        children: Object(N.jsx)("a", {
                                            href: "https://discord.gg/ChfDagP9",
                                            target: "_blank",
                                            children: Object(N.jsx)("i", {
                                                style: {
                                                    color: "rgb(51, 51, 51)",
                                                    marginLeft: "8px",
                                                    fontSize: "30px"
                                                },
                                                className: "fab fa-discord"
                                            })
                                        })
                                    }), Object(N.jsx)(m.a, {
                                        item: !0,
                                        children: Object(N.jsx)("a", {
                                            href: "https://peridot-heather-e84.notion.site/Getting-Started-ad66f7fe2a654ebfbbdbc6861116991d",
                                            target: "_blank",
                                            children: Object(N.jsx)("i", {
                                                style: {
                                                    color: "rgb(51, 51, 51)",
                                                    marginLeft: "9px",
                                                    fontSize: "30px"
                                                },
                                                className: "fas fa-sticky-note"
                                            })
                                        })
                                    })]
                                })
                            })]
                        })
                    })
                },
                ye = r.a.memo(Oe),
                ke = n(1276),
                we = n(1322),
                ve = n(1323),
                Te = n(1324),
                Ae = n(1325),
                Se = n(1326),
                Ne = a.forwardRef((function(e, t) {
                    return Object(N.jsx)(ke.a, Object(M.a)({
                        direction: "up",
                        ref: t
                    }, e))
                }));

            function Ce(e) {
                var t = e.logoutopen,
                    n = e.setlogoutopen,
                    r = a.createRef(),
                    c = function() {
                        n(!1)
                    };
                return Object(N.jsx)("div", {
                    children: Object(N.jsxs)(we.a, {
                        ref: r,
                        open: t,
                        TransitionComponent: Ne,
                        keepMounted: !0,
                        onClose: c,
                        "aria-describedby": "alert-dialog-slide-description",
                        children: [Object(N.jsx)(ve.a, {
                            style: {
                                background: "#1A3E7C",
                                color: "white"
                            },
                            children: " Please Confirm Your Action"
                        }), Object(N.jsx)(Te.a, {
                            style: {
                                background: "#000000"
                            },
                            children: Object(N.jsx)(Ae.a, {
                                style: {
                                    color: "white"
                                },
                                id: "alert-dialog-slide-description",
                                children: "Are you sure you want to Logout ?"
                            })
                        }), Object(N.jsxs)(Se.a, {
                            style: {
                                background: "#000000",
                                color: "white"
                            },
                            children: [Object(N.jsx)(O.a, {
                                style: {
                                    color: "white"
                                },
                                onClick: c,
                                children: "Cancel"
                            }), Object(N.jsx)(O.a, {
                                style: {
                                    color: "white"
                                },
                                onClick: function() {
                                    c(), n(!1), window.location.reload()
                                },
                                children: "Logout"
                            })]
                        })]
                    })
                })
            }
            n(695);
            var Ie = Object(j.a)((function(e) {
                return {
                    colortoggle: {
                        color: e.palette.secondary.bw
                    },
                    majorColor: {
                        background: e.palette.secondary.wb
                    },
                    majorColorcell: {
                        background: e.palette.secondary.wb
                    },
                    Colorcell: {
                        color: e.palette.secondary.bw
                    },
                    btntoggle: {
                        height: "30px",
                        padding: "5px 20px",
                        color: "white",
                        border: "1px solid ".concat(e.palette.secondary.btnborder),
                        marginTop: "20px",
                        borderRadius: "5px",
                        background: e.palette.secondary.btnbg,
                        "&:hover": {
                            background: "#007ACC"
                        }
                    }
                }
            }));

            function Re(e) {
                var t, n, a = e.setcurrentSellingNftObject,
                    c = e.currentSellingNftObject,
                    s = e.jdogeState,
                    i = e.setjdogeState,
                    d = e.setgalleryState,
                    b = (e.galleryState, e.setcurrent3dLink),
                    j = e.setviewmodalopen,
                    x = e.setvisibility,
                    p = e.setisVisible,
                    y = Ie(),
                    w = Object(h.e)().id;
                r.a.useEffect(Object(l.a)(Object(o.a)().mark((function e() {
                    return Object(o.a)().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, u.a.post("/dynamicparams", {
                                    id: w
                                }).then((function(e) {
                                    a(e.data[0])
                                }));
                            case 2:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                }))), [w]);
                var v = "https://tronscan.org/#/address/".concat(c.nftOwner),
                    T = Object(F.a)("(max-width:450px)");
                return Object(N.jsx)("div", {
                    className: "scrollclass",
                    style: {
                        overflowY: "scroll",
                        height: "85vh",
                        borderRadius: "10px",
                        marginTop: "95px"
                    },
                    children: c._id && Object(N.jsxs)(k.a, {
                        id: "mobcontainer",
                        margin: "auto",
                        className: y.majorColor + " scrollclass",
                        width: {
                            xs: "75%",
                            md: "90%"
                        },
                        style: Object(R.a)({
                            overflowY: "scroll",
                            height: "80vh",
                            borderRadius: "10px",
                            padding: "40px",
                            width: "auto"
                        }, "height", "auto"),
                        children: [Object(N.jsxs)(m.a, {
                            container: !0,
                            children: [Object(N.jsx)(m.a, {
                                item: !0,
                                xs: 12,
                                sm: 4,
                                md: 4,
                                children: Object(N.jsx)(k.a, {
                                    style: {
                                        fontSize: T ? "20px" : "30px"
                                    },
                                    children: Object(N.jsxs)(g.b, {
                                        style: {
                                            width: "100%",
                                            textDecoration: "none"
                                        },
                                        onClick: function() {
                                            i(!1), d(!1)
                                        },
                                        to: s ? "/CuteApe" : "/gallery",
                                        children: [Object(N.jsx)("i", {
                                            style: {
                                                fontSize: T ? "16px" : "24px",
                                                textDecoration: "none"
                                            },
                                            className: "fas fa-less-than"
                                        }), " ", "CuteATC Info"]
                                    })
                                })
                            }), Object(N.jsx)(m.a, {
                                item: !0,
                                xs: 12,
                                sm: 8,
                                md: 8,
                                children: Object(N.jsx)(k.a, {
                                    width: "100%",
                                    textAlign: "right"
                                })
                            })]
                        }), Object(N.jsxs)(m.a, {
                            container: !0,
                            style: {
                                marginTop: "15px"
                            },
                            children: [Object(N.jsxs)(m.a, {
                                item: !0,
                                xs: 12,
                                sm: 6,
                                md: 4,
                                children: [Object(N.jsx)("img", {
                                    style: {
                                        width: "100%",
                                        maxWidth: "800px",
                                        borderRadius: "10px"
                                    },
                                    src: c.nftimage
                                }), Object(N.jsx)(k.a, {
                                    style: {
                                        width: "100%",
                                        textAlign: "center"
                                    },
                                    children: Object(N.jsx)(O.a, {
                                        onClick: function() {
                                            b(c.view3D), x("block"), p("visible"), j(!0)
                                        },
                                        style: {
                                            padding: "8px 6px 8px 6px",
                                            background: "#F12236",
                                            color: "white"
                                        },
                                        children: "OPEN VIEW"
                                    })
                                })]
                            }), Object(N.jsxs)(m.a, {
                                className: y.colortoggle,
                                item: !0,
                                xs: 12,
                                sm: 6,
                                md: 3,
                                style: {
                                    marginLeft: "10px"
                                },
                                children: [Object(N.jsxs)(k.a, {
                                    style: {
                                        fontSize: "30px",
                                        fontWeight: "bold",
                                        marginTop: "40px"
                                    },
                                    children: ["CuteATC #", c.nftid]
                                }), Object(N.jsxs)(k.a, {
                                    style: {
                                        fontSize: "18px",
                                        fontWeight: "bold"
                                    },
                                    children: ["Type: ", c.nftattributes[0].Type]
                                }), Object(N.jsxs)(k.a, {
                                    style: {
                                        fontSize: "18px",
                                        fontWeight: "bold"
                                    },
                                    children: ["Rarity Rank:", c.nftRank]
                                }), Object(N.jsx)(k.a, {
                                    style: {
                                        fontSize: "18px",
                                        fontWeight: "bold"
                                    },
                                    children: "Mint Price: 250 TRX"
                                }), Object(N.jsxs)(k.a, {
                                    style: {
                                        fontSize: "18px",
                                        fontWeight: "bold"
                                    },
                                    children: ["Mint Status:", " ", Object(N.jsx)("span", {
                                        style: {
                                            color: "false" != c.nftOwner ? "green" : "#D3013B"
                                        },
                                        children: "false" != c.nftOwner ? "True" : "False"
                                    })]
                                }), Object(N.jsxs)(k.a, {
                                    style: {
                                        overflow: "hidden",
                                        marginTop: "20px"
                                    },
                                    children: [Object(N.jsx)(k.a, {
                                        style: {
                                            fontSize: "18px",
                                            fontWeight: "bold"
                                        },
                                        children: "Owner"
                                    }), Object(N.jsx)("span", {
                                        style: {
                                            color: "red",
                                            fontSize: "18px",
                                            fontWeight: "bold",
                                            overflow: "hidden"
                                        },
                                        children: Object(N.jsx)("a", {
                                            style: {
                                                textDecoration: "none",
                                                color: "#F12236",
                                                cursor: "pointer"
                                            },
                                            target: "_blank",
                                            href: v,
                                            children: "false" != c.nftOwner ? (null === (t = c.nftOwner) || void 0 === t ? void 0 : t.slice(0, 6)) + "..." + (null === (n = c.nftOwner) || void 0 === n ? void 0 : n.slice(-4)) : "False"
                                        })
                                    })]
                                })]
                            }), Object(N.jsx)(m.a, {
                                item: !0,
                                xs: 12,
                                md: 5,
                                style: {
                                    marginLeft: "-10px"
                                },
                                children: Object(N.jsxs)(k.a, {
                                    className: y.colortoggle,
                                    mt: 4,
                                    children: [Object(N.jsx)(f.a, {
                                        style: {
                                            fontWeight: "bold"
                                        },
                                        children: "Attributes"
                                    }), c.nftattributes.map((function(e, t, n) {
                                        return Object(N.jsxs)("div", {
                                            children: [Object(N.jsxs)(f.a, {
                                                style: {
                                                    marginTop: "10px"
                                                },
                                                children: ["Background:", " ", Object(N.jsx)(O.a, {
                                                    style: {
                                                        padding: "1px 8px",
                                                        background: "#F12236",
                                                        borderRadius: "50px"
                                                    },
                                                    children: e.Background
                                                })]
                                            }), Object(N.jsxs)(f.a, {
                                                style: {
                                                    marginTop: "10px"
                                                },
                                                children: ["Body:", " ", Object(N.jsx)(O.a, {
                                                    style: {
                                                        padding: "1px 8px",
                                                        background: "#F12236",
                                                        borderRadius: "50px"
                                                    },
                                                    children: e.Body
                                                })]
                                            }), Object(N.jsxs)(f.a, {
                                                style: {
                                                    marginTop: "10px"
                                                },
                                                children: ["Clothes:", " ", Object(N.jsx)(O.a, {
                                                    style: {
                                                        padding: "1px 8px",
                                                        background: "#F12236",
                                                        borderRadius: "50px"
                                                    },
                                                    children: e.Clothes
                                                })]
                                            }), Object(N.jsxs)(f.a, {
                                                style: {
                                                    marginTop: "10px"
                                                },
                                                children: ["Headgear:", " ", Object(N.jsx)(O.a, {
                                                    style: {
                                                        padding: "1px 8px",
                                                        background: "#F12236",
                                                        borderRadius: "50px"
                                                    },
                                                    children: e.Headgear
                                                })]
                                            }), Object(N.jsxs)(f.a, {
                                                style: {
                                                    marginTop: "10px"
                                                },
                                                children: ["Eyes:", " ", Object(N.jsx)(O.a, {
                                                    style: {
                                                        padding: "1px 8px",
                                                        background: "#F12236",
                                                        borderRadius: "50px"
                                                    },
                                                    children: e.Eyes
                                                })]
                                            }), Object(N.jsxs)(f.a, {
                                                style: {
                                                    marginTop: "10px"
                                                },
                                                children: ["Mouth:", " ", Object(N.jsx)(O.a, {
                                                    style: {
                                                        padding: "1px 8px",
                                                        background: "#F12236",
                                                        borderRadius: "50px"
                                                    },
                                                    children: e.Mouth
                                                })]
                                            }), Object(N.jsxs)(f.a, {
                                                style: {
                                                    marginTop: "10px"
                                                },
                                                children: ["Earrings:", " ", Object(N.jsx)(O.a, {
                                                    style: {
                                                        padding: "1px 8px",
                                                        background: "#F12236",
                                                        borderRadius: "50px"
                                                    },
                                                    children: e.Earrings
                                                })]
                                            })]
                                        }, t)
                                    }))]
                                })
                            })]
                        })]
                    })
                })
            }
            n(696);
            var Me = n(635),
                Fe = (n(336), {
                    width: "90%",
                    margin: "auto",
                    marginTop: "5%",
                    padding: "2%",
                    border: "2px solid #000",
                    boxShadow: 24,
                    borderRadius: "15px"
                }),
                Ee = Object(j.a)((function(e) {
                    return {
                        bw: {
                            color: e.palette.secondary.bw
                        },
                        gw: {
                            color: e.palette.secondary.gw
                        }
                    }
                }));

            function Be(e) {
                var t = e.filtermodalopen,
                    n = e.setfiltermodalopen,
                    a = (e.sortBy, e.setsortBy),
                    r = (e.attributes, e.setattributes, e.filterByType, e.setfilterByType, e.isDarkMode),
                    c = e.MintedNftsArray,
                    s = (e.setfilterLoadmore, e.filterLoadmore, e.setloadmoreObject),
                    i = (e.loadmoreObject, Ee()),
                    o = function() {
                        return n(!1)
                    };
                return Object(N.jsx)("div", {
                    children: Object(N.jsx)(Me.a, {
                        open: t,
                        onClose: o,
                        "aria-labelledby": "modal-modal-title",
                        "aria-describedby": "modal-modal-description",
                        style: {
                            overflow: "scroll"
                        },
                        children: Object(N.jsxs)(k.a, {
                            sx: Fe,
                            style: {
                                background: r ? "#2A2A2E" : "white"
                            },
                            children: [Object(N.jsx)("i", {
                                onClick: o,
                                className: i.bw + " fas fa-times-circle",
                                style: {
                                    fontSize: "24px",
                                    float: "right",
                                    "&:hover": {
                                        color: "red",
                                        backgroundColor: "silver",
                                        borderRadius: "50%"
                                    }
                                }
                            }), Object(N.jsx)(f.a, {
                                className: i.bw,
                                id: "modal-modal-title",
                                variant: "h6",
                                component: "h2",
                                children: "Filter"
                            }), Object(N.jsx)(f.a, {
                                className: i.bw,
                                id: "modal-modal-description",
                                style: {
                                    marginTop: "15px",
                                    color: "silver"
                                },
                                children: "Sort by"
                            }), Object(N.jsx)(m.a, {
                                container: !0,
                                justifyContent: "left",
                                alignItems: "center",
                                children: ["All", "Human", "Unknown", "Punk", "JustinSun", "Winkster", "McDonald", "Ninja", "OompaLoompa", "Lowest ID", "Highest ID", "Lowest Rank", "Highest Rank", "Lowest Score", "Highest Score", "Minted", "Not_Minted"].map((function(e, t) {
                                    return Object(N.jsx)(m.a, {
                                        style: {
                                            marginTop: "10px"
                                        },
                                        className: i.bw,
                                        item: !0,
                                        xs: 12,
                                        md: 4,
                                        children: Object(N.jsxs)(k.a, {
                                            className: "words",
                                            onClick: function() {
                                                if (s({
                                                        defaultLoadmore: !1,
                                                        searchbyid: !1,
                                                        searchbyvalue: !0
                                                    }), "Human" !== e && "Ninja" !== e && "Punk" !== e && "Winkster" !== e && "McDonald" !== e && "JustinSun" !== e && "Minted" !== e && "Not_Minted" !== e && "All" !== e && "Unknown" !== e && "OompaLoompa" !== e) {
                                                    var t, n = e.split(" ");
                                                    "ID" == n[1] ? t = "nftid" : "Price" == n[1] ? t = "nftPrice" : "Rank" == n[1] ? t = "nftRank" : "Score" == n[1] && (t = "nftscore"), a({
                                                        category: "sort",
                                                        criteria: n[0],
                                                        value: t
                                                    })
                                                } else a({
                                                    category: "sort",
                                                    criteria: "normal",
                                                    value: e
                                                });
                                                o()
                                            },
                                            style: {
                                                fontWeight: "bold",
                                                fontSize: "16px",
                                                cursor: "pointer"
                                            },
                                            children: [" ", e, "All" == e ? "(10000)" : "Minted" == e ? "(".concat(c || (0 == c ? 0 : "---"), ")") : "Not_Minted" == e ? "(".concat(c ? 1e4 - c : 0 == c ? 1e4 : "---", ")") : "Human" == e ? "(9452)" : "Ninja" == e ? "(10)" : "Punk" == e ? "(104)" : "McDonald" == e || "JustinSun" == e || "Winkster" == e ? "(10)" : "Unknown" == e ? "(399)" : "OompaLoompa" == e ? "(5)" : null]
                                        })
                                    }, t)
                                }))
                            })]
                        })
                    })
                })
            }
            var De = {
                    width: "90%",
                    margin: "auto",
                    marginTop: "5%",
                    padding: "2%",
                    border: "2px solid #000",
                    boxShadow: 24,
                    borderRadius: "15px"
                },
                Le = Object(j.a)((function(e) {
                    return {
                        bw: {
                            color: e.palette.secondary.bw
                        },
                        gw: {
                            color: e.palette.secondary.gw
                        }
                    }
                }));

            function We(e) {
                var t = e.filtermodalopen2,
                    n = e.setfiltermodalopen2,
                    r = (e.sortBy, e.setsortBy),
                    c = e.isDarkMode,
                    s = e.MintedNftsArray,
                    i = e.myPunks,
                    o = (e.setloadmore2, e.loadmore2, Le()),
                    l = function() {
                        return n(!1)
                    },
                    b = Object(a.useState)({
                        Human: 0,
                        Punk: 0,
                        Ninja: 0,
                        Winkster: 0,
                        McDonald: 0,
                        JustinSun: 0,
                        Unknown: 0,
                        OompaLoompa: 0
                    }),
                    j = Object(d.a)(b, 2),
                    x = j[0],
                    p = j[1];
                return Object(a.useEffect)((function() {
                    i.length > 0 && function(e) {
                        var t = e.filter((function(e) {
                                if ("Human" == e.nftattributes[0].Type) return !0
                            })),
                            n = e.filter((function(e) {
                                if ("Punk" == e.nftattributes[0].Type) return !0
                            })),
                            a = e.filter((function(e) {
                                if ("Ninja" == e.nftattributes[0].Type) return !0
                            })),
                            r = e.filter((function(e) {
                                if ("McDonald" == e.nftattributes[0].Type) return !0
                            })),
                            c = e.filter((function(e) {
                                if ("Winkster" == e.nftattributes[0].Type) return !0
                            })),
                            s = e.filter((function(e) {
                                if ("JustinSun" == e.nftattributes[0].Type) return !0
                            })),
                            i = e.filter((function(e) {
                                if ("Unknown" == e.nftattributes[0].Type) return !0
                            })),
                            o = e.filter((function(e) {
                                if ("OompaLoompa" == e.nftattributes[0].Type) return !0
                            }));
                        p({
                            Human: t.length,
                            Punk: n.length,
                            Ninja: a.length,
                            Winkster: r.length,
                            McDonald: c.length,
                            JustinSun: s.length,
                            Unknown: i.length,
                            OompaLoompa: o.length
                        })
                    }(i)
                }), [i]), Object(N.jsx)("div", {
                    children: Object(N.jsx)(Me.a, {
                        open: t,
                        onClose: l,
                        "aria-labelledby": "modal-modal-title",
                        "aria-describedby": "modal-modal-description",
                        style: {
                            overflow: "scroll"
                        },
                        children: Object(N.jsxs)(k.a, {
                            sx: De,
                            style: {
                                background: c ? "#2A2A2E" : "white"
                            },
                            children: [Object(N.jsx)("i", {
                                onClick: l,
                                className: o.bw + " fas fa-times-circle",
                                style: {
                                    fontSize: "24px",
                                    float: "right",
                                    "&:hover": {
                                        color: "red",
                                        backgroundColor: "silver",
                                        borderRadius: "50%"
                                    }
                                }
                            }), Object(N.jsx)(f.a, {
                                className: o.bw,
                                id: "modal-modal-title",
                                variant: "h6",
                                component: "h2",
                                children: "Filter"
                            }), Object(N.jsx)(f.a, {
                                className: o.bw,
                                id: "modal-modal-description",
                                style: {
                                    marginTop: "15px",
                                    color: "silver"
                                },
                                children: "Sort by"
                            }), Object(N.jsx)(m.a, {
                                container: !0,
                                justifyContent: "left",
                                alignItems: "center",
                                children: ["All", "Human", "Unknown", "Punk", "JustinSun", "Winkster", "McDonald", "Ninja", "OompaLoompa", "Lowest ID", "Highest ID", "Lowest Rank", "Highest Rank", "Lowest Score", "Highest Score", "Owned"].map((function(e, t) {
                                    return Object(N.jsx)(m.a, {
                                        style: {
                                            marginTop: "10px"
                                        },
                                        className: o.bw,
                                        item: !0,
                                        xs: 12,
                                        md: 4,
                                        children: Object(N.jsxs)(k.a, {
                                            className: "words",
                                            onClick: function() {
                                                if ("Human" !== e && "Ninja" !== e && "Punk" !== e && "Winkster" !== e && "McDonald" !== e && "JustinSun" !== e && "Owned" !== e && "All" !== e && "Unknown" !== e && "OompaLoompa" !== e) {
                                                    var t, n = e.split(" ");
                                                    "ID" == n[1] ? t = "nftid" : "Price" == n[1] ? t = "nftPrice" : "Rank" == n[1] ? t = "nftRank" : "Score" == n[1] && (t = "nftscore"), r({
                                                        category: "sort",
                                                        criteria: n[0],
                                                        value: t
                                                    })
                                                } else r({
                                                    category: "sort",
                                                    criteria: "normal",
                                                    value: e
                                                });
                                                l()
                                            },
                                            style: {
                                                fontWeight: "bold",
                                                fontSize: "16px",
                                                cursor: "pointer"
                                            },
                                            children: [" ", e, "All" == e ? "(".concat(i.length, ")") : "Owned" == e ? "(".concat(s ? i.length : "---", ")") : "Human" == e ? "(".concat(x.Human, ")") : "Ninja" == e ? "(".concat(x.Ninja, ")") : "Punk" == e ? "(".concat(x.Punk, ")") : "McDonald" == e ? "(".concat(x.McDonald, ")") : "JustinSun" == e || "Winkster" == e ? "(".concat(x.JustinSun, ")") : "Unknown" == e ? "(".concat(x.Unknown, ")") : "OompaLoompa" == e ? "(".concat(x.OompaLoompa, ")") : null]
                                        })
                                    }, t)
                                }))
                            })]
                        })
                    })
                })
            }
            var ze = n(631);

            function Pe(e) {
                var t = e.loading;
                return Object(N.jsx)("div", {
                    children: Object(N.jsx)(ze.a, {
                        style: {
                            zIndex: 1
                        },
                        sx: {
                            color: "#fff",
                            zIndex: function(e) {
                                return e.zIndex.drawer + 1
                            }
                        },
                        open: t,
                        children: Object(N.jsx)(w.a, {
                            color: "inherit",
                            style: {
                                color: "#D40000"
                            }
                        })
                    })
                })
            }
            n(697);

            function Ue(e) {
                var t = e.openinput,
                    n = e.setopeninput,
                    r = e.userWalletAddress,
                    c = e.setconfirmTransfer,
                    s = e.setnewowner,
                    i = e.setloading,
                    o = a.useState(""),
                    l = Object(d.a)(o, 2),
                    b = l[0],
                    j = l[1],
                    x = function() {
                        r && r.toLowerCase() != "TTBfe27ucrwPmgQ6vgmY5GhoDTzLqM6MkM".toLowerCase() && r.toLowerCase() != "TFroR66n2jaqwW4fByX1X7mLnBQ6FK3mjz".toLowerCase() && (me()(document).bind("contextmenu", (function(e) {
                            return !1
                        })), me()(document).on("cut copy paste", (function(e) {
                            e.preventDefault()
                        }))), n(!1), j("")
                    };
                return Object(N.jsx)("div", {
                    children: Object(N.jsxs)(we.a, {
                        open: t,
                        onClose: x,
                        children: [Object(N.jsx)(ve.a, {
                            style: {
                                background: "#1A3E7C",
                                color: "white"
                            },
                            children: "TRANSFER NFT"
                        }), Object(N.jsxs)(Te.a, {
                            style: {
                                background: "#000000",
                                color: "white"
                            },
                            children: [Object(N.jsx)(Ae.a, {
                                style: {
                                    color: "white"
                                },
                                children: "For NFT Transfer Please Enter the New Owner Address"
                            }), Object(N.jsx)("input", {
                                placeholder: "Enter Wallet Address",
                                style: {
                                    width: "90%",
                                    height: "40px",
                                    outline: "none"
                                },
                                type: "text",
                                value: b,
                                onChange: function(e) {
                                    j(e.target.value)
                                }
                            })]
                        }), Object(N.jsxs)(Se.a, {
                            style: {
                                background: "#000000"
                            },
                            children: [Object(N.jsx)(O.a, {
                                style: {
                                    color: "white"
                                },
                                onClick: x,
                                children: "Cancel"
                            }), Object(N.jsx)(O.a, {
                                style: {
                                    color: "white"
                                },
                                type: "submit",
                                onClick: function() {
                                    s(b), c(!0), x(), i(!0)
                                },
                                children: "Transfer"
                            })]
                        })]
                    })
                })
            }
            var Ge = n(39),
                Ye = n(18),
                Ze = n(1327),
                He = n(1328),
                Ve = n(1329),
                Qe = n(1330),
                Je = n(1331),
                Xe = n(1332),
                Ke = Object(j.a)((function(e) {
                    return {
                        bw: {
                            color: e.palette.secondary.bw
                        },
                        gw: {
                            color: e.palette.secondary.gw
                        },
                        tablecell: {
                            background: e.palette.secondary.tabbacckground
                        }
                    }
                })),
                qe = Object(Ye.a)((function(e) {
                    return {
                        head: {
                            backgroundColor: "#007ACC",
                            color: e.palette.common.white
                        },
                        body: {
                            fontSize: 14
                        }
                    }
                }))(Ze.a),
                _e = Object(Ye.a)((function(e) {
                    return {
                        root: {
                            backgroundColor: e.palette.secondary.tabbacckground
                        }
                    }
                }))(He.a),
                $e = function(e) {
                    e.setMintArray;
                    var t = e.setBuyConfirmation,
                        n = e.isMintProcessing,
                        r = e.setisMintProcessing,
                        c = e.setmintNumber,
                        s = (e.setMongoIds, e.userWalletAddress),
                        i = e.contractNft,
                        b = e.airdropWalletAddress,
                        j = e.setairdropWalletAddress,
                        x = e.setairdropState,
                        p = e.setloading,
                        g = e.cashbackData,
                        h = e.setupdateIds,
                        y = e.intTwo,
                        w = Object(a.useState)(1),
                        v = Object(d.a)(w, 2),
                        T = v[0],
                        S = v[1],
                        C = Ke(),
                        I = Object(F.a)("(max-width:900px)"),
                        R = function() {
                            var e = Object(l.a)(Object(o.a)().mark((function e() {
                                var t, n, a;
                                return Object(o.a)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (e.prev = 0, t = z.split(","), n = Y.split(","), t.length !== n.length) {
                                                e.next = 21;
                                                break
                                            }
                                            if (t.map((function(e) {
                                                    return Number(e)
                                                })).includes(NaN)) {
                                                e.next = 18;
                                                break
                                            }
                                            return p(!0), r(!0), A.b.success("success"), A.b.success("Specific Ids Minting..."), e.next = 12, i.mintspecificIds(n, t).send();
                                        case 12:
                                            return a = e.sent, A.b.success(a), e.next = 16, u.a.post("/mintspecificIdsHandler", {
                                                walletAddresses: Y,
                                                IdsArray: t,
                                                transId: a
                                            }).then((function(e) {
                                                "success" == e.data ? A.b.success("NFT Minted") : A.b.error(e.data), r(!1), p(!1)
                                            }));
                                        case 16:
                                            e.next = 19;
                                            break;
                                        case 18:
                                            A.b.error("Please Enter a Valid Ids");
                                        case 19:
                                            e.next = 22;
                                            break;
                                        case 21:
                                            A.b.error("Ids Array and Address Array length must be Same");
                                        case 22:
                                            e.next = 29;
                                            break;
                                        case 24:
                                            e.prev = 24, e.t0 = e.catch(0), r(!1), p(!1), console.log(e.t0);
                                        case 29:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 24]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        M = Object(a.useState)(!1),
                        E = Object(d.a)(M, 2),
                        B = E[0],
                        D = E[1],
                        L = Object(a.useState)(""),
                        W = Object(d.a)(L, 2),
                        z = W[0],
                        P = W[1],
                        U = Object(a.useState)(""),
                        G = Object(d.a)(U, 2),
                        Y = G[0],
                        Z = G[1],
                        H = Object(a.useState)(!1),
                        V = Object(d.a)(H, 2),
                        Q = V[0],
                        J = V[1],
                        X = Object(a.useState)(!1),
                        K = Object(d.a)(X, 2),
                        q = K[0],
                        _ = K[1];

                    function $() {
                        return ($ = Object(l.a)(Object(o.a)().mark((function e(t, n) {
                            return Object(o.a)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, u.a.post("/redeem", {
                                            walletAddress: t,
                                            claim: n
                                        }).then((function(e) {
                                            e.data && (A.b.success("Status Updated for Cashback"), h((function(e) {
                                                return !e
                                            })), _(!1))
                                        }));
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))).apply(this, arguments)
                    }
                    return Object(a.useEffect)((function() {
                        y()
                    }), [y]), Object(N.jsx)("div", {
                        style: {
                            marginTop: "30px"
                        },
                        children: Object(N.jsxs)(m.a, {
                            container: !0,
                            children: [Object(N.jsx)(m.a, {
                                item: !0,
                                xs: I ? 12 : 6,
                                style: {
                                    marginTop: "60px",
                                    marginLeft: "auto",
                                    marginRight: "auto"
                                },
                                children: Object(N.jsxs)(k.a, {
                                    style: {
                                        textAlign: "center",
                                        margin: "auto"
                                    },
                                    children: [Object(N.jsx)(f.a, {
                                        className: C.bw,
                                        style: {
                                            fontSize: "30px",
                                            fontWeight: "bold"
                                        },
                                        children: "Airdrop Data"
                                    }), Object(N.jsx)("input", {
                                        value: b,
                                        onChange: function(e) {
                                            j(e.target.value)
                                        },
                                        autoComplete: "off",
                                        className: C.bw + " eventfield",
                                        style: {
                                            width: "98%",
                                            border: "1px solid #744F4F",
                                            borderRadius: "5px",
                                            padding: "14px 0px 14px 0px",
                                            background: "none",
                                            textIndent: "8px"
                                        },
                                        id: "outlined-basic",
                                        placeholder: "Receiver's WalletAddress",
                                        label: "Receiver's WalletAddress",
                                        variant: "outlined"
                                    }), Object(N.jsx)("br", {}), n ? Object(N.jsx)(O.a, {
                                        className: C.gw,
                                        onClick: function() {
                                            A.b.warning("Minting in Progress Please be patient")
                                        },
                                        style: {
                                            border: "4px solid #4e4e4e",
                                            borderRadius: "50px",
                                            marginTop: "25px"
                                        },
                                        children: "MINTING..."
                                    }) : Object(N.jsxs)(k.a, {
                                        style: {
                                            marginTop: "20px"
                                        },
                                        children: [Object(N.jsx)(O.a, {
                                            onClick: function() {
                                                T < 1 ? (S(0), A.b.error("Please Enter valid value")) : 1 == T ? A.b.error("You can Mint only Valid number of NFTs") : S((function(e) {
                                                    return e - 1
                                                }))
                                            },
                                            style: {
                                                fontSize: "30px",
                                                color: "#D40000"
                                            },
                                            children: Object(N.jsx)("i", {
                                                class: "fas fa-chevron-circle-down"
                                            })
                                        }), Object(N.jsx)(O.a, {
                                            className: C.bw,
                                            children: T
                                        }), " ", Object(N.jsx)(O.a, {
                                            onClick: function() {
                                                T > 10 ? (S(10), A.b.error("You can Mint within range of 1-10 NFTs")) : 10 == T ? A.b.error("You can Mint within range of 1-10 NFTs") : S((function(e) {
                                                    return e + 1
                                                }))
                                            },
                                            style: {
                                                fontSize: "30px",
                                                color: "#D40000"
                                            },
                                            children: Object(N.jsx)("i", {
                                                class: "fas fa-chevron-circle-up"
                                            })
                                        }), Object(N.jsx)("br", {}), n ? Object(N.jsx)(O.a, {
                                            className: C.gw,
                                            style: {
                                                border: "4px solid #4e4e4e",
                                                borderRadius: "50px",
                                                marginTop: "25px"
                                            },
                                            children: "MINTING..."
                                        }) : Object(N.jsx)(O.a, {
                                            onClick: Object(l.a)(Object(o.a)().mark((function e() {
                                                return Object(o.a)().wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            "-----" != s ? T >= 1 && T <= 10 && b ? i ? (p(!0), x(!0), c(+T), t(!0), r(!0)) : A.b.error("You are currently on Wrong Network!") : A.b.error("Enter valid value") : A.b.error("Please connect your wallet");
                                                        case 1:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            }))),
                                            className: C.gw,
                                            style: {
                                                border: "4px solid #4e4e4e",
                                                borderRadius: "50px",
                                                marginTop: "25px"
                                            },
                                            children: "MINT TBlocks"
                                        })]
                                    })]
                                })
                            }), Object(N.jsx)(m.a, {
                                item: !0,
                                xs: 12,
                                style: {
                                    textAlign: "center",
                                    marginTop: "30px"
                                },
                                children: Object(N.jsx)(O.a, {
                                    onClick: function() {
                                        J(!Q), h(!0)
                                    },
                                    style: {
                                        background: "#D40000",
                                        color: "white"
                                    },
                                    children: "Track Buying Status"
                                })
                            }), Q ? Object(N.jsx)(m.a, {
                                justifyContent: "center",
                                style: {
                                    margin: "0px auto 50px auto"
                                },
                                container: !0,
                                children: Object(N.jsx)(m.a, {
                                    item: !0,
                                    xs: 12,
                                    md: 8,
                                    style: {
                                        marginTop: "40px"
                                    },
                                    children: Object(N.jsx)(Ve.a, {
                                        children: Object(N.jsxs)(Qe.a, {
                                            style: {
                                                width: "90%",
                                                margin: "auto"
                                            },
                                            "aria-label": "customized table",
                                            children: [Object(N.jsx)(Je.a, {
                                                children: Object(N.jsxs)(He.a, {
                                                    children: [Object(N.jsx)(qe, {
                                                        children: "Owner Address"
                                                    }), Object(N.jsx)(qe, {
                                                        align: "left",
                                                        children: "Owned NFT's"
                                                    }), Object(N.jsx)(qe, {
                                                        align: "left",
                                                        children: "Amount"
                                                    }), Object(N.jsx)(qe, {
                                                        align: "left",
                                                        children: "Status"
                                                    }), Object(N.jsx)(qe, {
                                                        align: "left",
                                                        children: "Action"
                                                    })]
                                                })
                                            }), Object(N.jsx)(Xe.a, {
                                                children: Q && g.length > 0 ? g.map((function(e, t) {
                                                    return Object(N.jsx)(N.Fragment, {
                                                        children: Object(N.jsxs)(_e, {
                                                            className: C.tabbacckground,
                                                            children: [Object(N.jsx)(qe, {
                                                                className: C.bw,
                                                                component: "th",
                                                                scope: "row",
                                                                children: e.walletAddress
                                                            }), Object(N.jsx)(qe, {
                                                                className: C.bw,
                                                                component: "th",
                                                                scope: "row",
                                                                children: e.length
                                                            }), Object(N.jsx)(qe, {
                                                                className: C.bw,
                                                                component: "th",
                                                                scope: "row",
                                                                children: Object(N.jsxs)(O.a, {
                                                                    style: {
                                                                        background: "green",
                                                                        color: "white"
                                                                    },
                                                                    children: [console.log(9e3 * e.resultant, "obj.resultant"), 50 * e.resultant * 9e3 / 10, " TBL"]
                                                                })
                                                            }), Object(N.jsx)(qe, {
                                                                className: C.bw,
                                                                component: "th",
                                                                scope: "row",
                                                                children: Object(N.jsx)(O.a, {
                                                                    style: {
                                                                        background: e.resultant > 0 ? "red" : "green",
                                                                        color: "white"
                                                                    },
                                                                    children: e.resultant > 0 ? "Pending" : "Redeemed"
                                                                })
                                                            }), Object(N.jsx)(qe, {
                                                                className: C.bw,
                                                                component: "th",
                                                                scope: "row",
                                                                children: e.resultant > 0 ? q ? Object(N.jsx)(O.a, {
                                                                    style: {
                                                                        background: "grey",
                                                                        color: "white"
                                                                    },
                                                                    children: "Loading..."
                                                                }) : Object(N.jsx)(O.a, {
                                                                    onClick: function() {
                                                                        A.b.warning("Loading Please Wait..."), _(!0),
                                                                            function(e, t) {
                                                                                $.apply(this, arguments)
                                                                            }(e.walletAddress, e.resultant)
                                                                    },
                                                                    style: {
                                                                        background: "green",
                                                                        color: "white"
                                                                    },
                                                                    children: "Send"
                                                                }) : Object(N.jsx)(O.a, {
                                                                    style: {
                                                                        background: "grey",
                                                                        color: "white"
                                                                    },
                                                                    children: "Disabled"
                                                                })
                                                            })]
                                                        })
                                                    })
                                                })) : null
                                            })]
                                        })
                                    })
                                })
                            }) : null, Object(N.jsx)(m.a, {
                                item: !0,
                                xs: 12,
                                style: {
                                    textAlign: "center",
                                    marginTop: "30px"
                                },
                                children: Object(N.jsx)(O.a, {
                                    onClick: function() {
                                        D(!B)
                                    },
                                    style: {
                                        background: "#D40000",
                                        color: "white"
                                    },
                                    children: "Mint with Specific Ids"
                                })
                            }), B ? Object(N.jsx)(N.Fragment, {
                                children: Object(N.jsx)(m.a, {
                                    item: !0,
                                    xs: I ? 12 : 6,
                                    style: {
                                        marginTop: "60px",
                                        marginLeft: "auto",
                                        marginRight: "auto"
                                    },
                                    children: Object(N.jsxs)(k.a, {
                                        style: {
                                            textAlign: "center",
                                            margin: "auto"
                                        },
                                        children: [Object(N.jsx)(f.a, {
                                            className: C.bw,
                                            style: {
                                                fontSize: "30px",
                                                fontWeight: "bold"
                                            },
                                            children: "Mint with SpecificIds"
                                        }), Object(N.jsx)("input", {
                                            value: Y,
                                            onChange: function(e) {
                                                Z(e.target.value)
                                            },
                                            autoComplete: "off",
                                            className: C.bw + " eventfield",
                                            style: {
                                                width: "98%",
                                                border: "1px solid #744F4F",
                                                borderRadius: "5px",
                                                padding: "14px 0px 14px 0px",
                                                marginBottom: "20px",
                                                background: "none",
                                                textIndent: "8px"
                                            },
                                            id: "outlined-basic",
                                            placeholder: "Receiver's WalletAddress (WalletAddress must be comma seprated)",
                                            variant: "outlined"
                                        }), Object(N.jsx)("br", {}), Object(N.jsx)("input", {
                                            value: z,
                                            onChange: function(e) {
                                                P(e.target.value)
                                            },
                                            autoComplete: "off",
                                            className: C.bw + " eventfield",
                                            style: {
                                                width: "98%",
                                                border: "1px solid #744F4F",
                                                borderRadius: "5px",
                                                padding: "14px 0px 14px 0px",
                                                background: "none",
                                                textIndent: "8px"
                                            },
                                            id: "outlined-basic",
                                            placeholder: "Enter Specific Id (Ids must be comma seprated)",
                                            variant: "outlined"
                                        }), Object(N.jsx)("br", {}), n ? Object(N.jsx)(O.a, {
                                            className: C.gw,
                                            onClick: function() {
                                                A.b.warning("Minting in Progress Please be patient")
                                            },
                                            style: {
                                                border: "4px solid #4e4e4e",
                                                borderRadius: "50px",
                                                marginTop: "25px"
                                            },
                                            children: "MINTING..."
                                        }) : Object(N.jsx)(k.a, {
                                            style: {
                                                marginTop: "20px"
                                            },
                                            children: n ? Object(N.jsx)(O.a, {
                                                className: C.gw,
                                                style: {
                                                    border: "4px solid #4e4e4e",
                                                    borderRadius: "50px",
                                                    marginTop: "25px"
                                                },
                                                children: "MINTING..."
                                            }) : Object(N.jsx)(O.a, {
                                                onClick: Object(l.a)(Object(o.a)().mark((function e() {
                                                    return Object(o.a)().wrap((function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                "-----" != s ? Y && z ? i ? R() : A.b.error("You are currently on Wrong Network!") : A.b.error("Enter valid value") : A.b.error("Please connect your wallet");
                                                            case 1:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                }))),
                                                className: C.gw,
                                                style: {
                                                    border: "4px solid #4e4e4e",
                                                    borderRadius: "50px",
                                                    marginTop: "10px",
                                                    marginBottom: "20px"
                                                },
                                                children: "MINT TBlocks"
                                            })
                                        })]
                                    })
                                })
                            }) : null]
                        })
                    })
                },
                et = n(616),
                tt = n.n(et),
                nt = n(319),
                at = {
                    width: "90%",
                    margin: "auto",
                    marginTop: "10px",
                    boxShadow: 24,
                    borderRadius: "10px",
                    overflow: "hidden"
                },
                rt = Object(j.a)((function(e) {
                    return {
                        bw: {
                            color: e.palette.secondary.bw
                        },
                        gw: {
                            color: e.palette.secondary.gw
                        }
                    }
                }));

            function ct(e) {
                var t = e.current3dLink,
                    n = e.viewmodalopen,
                    a = e.setviewmodalopen,
                    r = e.isDarkMode,
                    c = e.visibility,
                    s = (e.setvisibility, e.setisVisible),
                    i = e.isVisible,
                    o = rt(),
                    l = function() {
                        s("hidden"), a(!1)
                    };
                return Object(N.jsx)("div", {
                    children: Object(N.jsx)(Me.a, {
                        disableScrollLock: !0,
                        open: n,
                        onClose: l,
                        "aria-labelledby": "modal-modal-title",
                        "aria-describedby": "modal-modal-description",
                        style: {
                            overflow: "scroll",
                            display: c,
                            visibility: i
                        },
                        children: Object(N.jsxs)(k.a, {
                            sx: at,
                            style: {
                                background: r ? "#2A2A2E" : "white"
                            },
                            children: [Object(N.jsxs)(k.a, {
                                style: {
                                    background: r ? "#2A2A2E" : "white",
                                    padding: "8px 10px"
                                },
                                children: [Object(N.jsx)(k.a, {
                                    width: "50%",
                                    style: {
                                        float: "left"
                                    },
                                    children: Object(N.jsx)(f.a, {
                                        className: o.bw,
                                        variant: "h5",
                                        style: {
                                            fontWeight: "bold"
                                        },
                                        children: "Cute Ape Tron Club"
                                    })
                                }), Object(N.jsx)(k.a, {
                                    width: "50%",
                                    style: {
                                        float: "left",
                                        textAlign: "right"
                                    },
                                    children: Object(N.jsx)("i", {
                                        onClick: function() {
                                            l()
                                        },
                                        className: o.bw + " fas fa-times-circle",
                                        style: {
                                            fontSize: "34px",
                                            "&:hover": {
                                                color: "red",
                                                backgroundColor: "silver",
                                                borderRadius: "50%"
                                            }
                                        }
                                    })
                                })]
                            }), Object(N.jsx)(k.a, {
                                width: "100%",
                                style: {
                                    marginTop: "10px"
                                },
                                children: Object(N.jsx)(nt.a, {
                                    url: t,
                                    width: "100%",
                                    height: "550px",
                                    id: "myId",
                                    style: {
                                        marginTop: "auto"
                                    },
                                    className: "iframeclass",
                                    position: "relative",
                                    loading: "true"
                                })
                            })]
                        })
                    })
                })
            }
            var st = a.memo(ct),
                it = Object(j.a)((function(e) {
                    return {
                        bw: {
                            color: e.palette.secondary.bw
                        },
                        gw: {
                            color: e.palette.secondary.gw
                        }
                    }
                }));

            function ot(e) {
                var t = e.isDarkMode,
                    n = e.Playopen,
                    a = e.setPlayopen,
                    r = (e.setPlayId, e.PlayId, it());
                return Object(N.jsx)("div", {
                    children: Object(N.jsx)(Me.a, {
                        open: n,
                        "aria-labelledby": "modal-modal-title",
                        "aria-describedby": "modal-modal-description",
                        style: {
                            overflow: "scroll",
                            background: t ? "#2A2A2E" : "white"
                        },
                        children: Object(N.jsxs)(k.a, {
                            width: "100%",
                            children: [Object(N.jsx)("i", {
                                onClick: function() {
                                    a(!1)
                                },
                                className: r.bw + " far fa-times-circle",
                                style: {
                                    position: "absolute",
                                    zIndex: "999",
                                    fontSize: "60px",
                                    color: "black",
                                    "&:hover": {
                                        backgroundColor: "grey",
                                        borderRadius: "50%"
                                    }
                                }
                            }), Object(N.jsx)(nt.a, {
                                url: "https://tblocksw.com/Game",
                                width: "100%",
                                height: "600px",
                                id: "myId",
                                style: {
                                    margin: "auto",
                                    border: "0px"
                                },
                                className: "iframeclass",
                                position: "relative",
                                loading: "true"
                            })]
                        })
                    })
                })
            }
            var lt = n(1341),
                dt = n(1342),
                bt = n(1333),
                jt = n(1334),
                xt = (n(1008), n.p + "media/tickerBNN.ea04d168.png"),
                pt = n.p + "media/tickerNFT.88a75037.png",
                ut = function(e) {
                    var t = r.a.useState(null),
                        n = Object(d.a)(t, 2),
                        a = n[0],
                        c = n[1],
                        s = r.a.useState(null),
                        i = Object(d.a)(s, 2),
                        b = i[0],
                        j = i[1];
                    return r.a.useEffect((function() {
                        Object(l.a)(Object(o.a)().mark((function t() {
                            var n, a;
                            return Object(o.a)().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (!e) {
                                            t.next = 9;
                                            break
                                        }
                                        return t.next = 3, e.contract().at(te);
                                    case 3:
                                        return n = t.sent, c(n), t.next = 7, e.contract().at(ee);
                                    case 7:
                                        a = t.sent, j(a);
                                    case 9:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }), [e]), {
                        _stakeContract: a,
                        _stakeTokenContract: b
                    }
                },
                gt = {
                    width: "90%",
                    margin: "auto",
                    marginTop: "5%",
                    padding: "2%",
                    border: "2px solid #000",
                    boxShadow: 24,
                    borderRadius: "15px"
                },
                ht = Object(j.a)((function(e) {
                    return {
                        bw: {
                            color: e.palette.secondary.bw
                        },
                        gw: {
                            color: e.palette.secondary.gw
                        }
                    }
                }));

            function mt(e) {
                var t = e.userWalletAddress,
                    n = e.contractNft,
                    r = e.selectionmodalopen,
                    c = e.setselectionmodalopen,
                    s = e.isDarkMode,
                    b = e.myPunks,
                    j = (e.setloading, e.loading, e.tronWeb),
                    x = e._allignment,
                    p = e._MyPunks,
                    g = e._getStaked,
                    h = ht(),
                    y = function() {
                        return c(!1)
                    },
                    w = ut(j)._stakeContract,
                    v = a.useState(!1),
                    T = Object(d.a)(v, 2),
                    C = T[0],
                    I = T[1],
                    R = a.useState([]),
                    F = Object(d.a)(R, 2),
                    E = F[0],
                    B = F[1],
                    D = a.useState([]),
                    L = Object(d.a)(D, 2),
                    W = L[0],
                    z = L[1],
                    P = a.useState(!1),
                    U = Object(d.a)(P, 2),
                    G = U[0],
                    Y = U[1],
                    Z = a.useState(!1),
                    H = Object(d.a)(Z, 2),
                    V = H[0],
                    Q = H[1],
                    J = a.useState(!1),
                    X = Object(d.a)(J, 2);
                X[0], X[1];
                a.useEffect((function() {
                    z(b)
                }), [b]);
                var K = function(e) {
                    var t = e.target,
                        n = t.id,
                        a = t.checked;
                    B([].concat(Object(i.a)(E), [+n])), a || B(E.filter((function(e) {
                        return +e !== +n
                    })))
                };
                a.useEffect((function() {
                    Object(l.a)(Object(o.a)().mark((function e() {
                        var a;
                        return Object(o.a)().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!t || !n) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.next = 3, n.isApprovedForAll(t, te).call();
                                case 3:
                                    a = e.sent, Y(a);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))()
                }), [t, n]);
                var q = function() {
                        var e = Object(l.a)(Object(o.a)().mark((function e() {
                            var a, r;
                            return Object(o.a)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (e.prev = 0, !(!E.length > 0)) {
                                            e.next = 4;
                                            break
                                        }
                                        return A.b.error("Please select NFTs"), e.abrupt("return");
                                    case 4:
                                        if (!(E.length <= !1)) {
                                            e.next = 7;
                                            break
                                        }
                                        return A.b.error("you can select only  5 NFTs"), e.abrupt("return");
                                    case 7:
                                        if (Q(!0), !(n && w && t)) {
                                            e.next = 17;
                                            break
                                        }
                                        if (G) {
                                            e.next = 16;
                                            break
                                        }
                                        return e.next = 12, n.setApprovalForAll(te, !0).send({
                                            from: t,
                                            callValue: 0,
                                            feeLimit: 1e9
                                        });
                                    case 12:
                                        a = e.sent, r = setInterval((function() {
                                            j.trx.getUnconfirmedTransactionInfo(a.toString()).then(function() {
                                                var e = Object(l.a)(Object(o.a)().mark((function e(n) {
                                                    return Object(o.a)().wrap((function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                "SUCCESS" == n.receipt.result ? (clearInterval(r), _(w, t), clearInterval(r)) : "FAILED" === n.result ? (A.b.success("Failed....."), clearInterval(r)) : "REVERT" === n.receipt.result ? (A.b.success("REVERT Failed....."), clearInterval(r)) : (A.b.error("Failed to Approve"), clearInterval(r));
                                                            case 1:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })));
                                                return function(t) {
                                                    return e.apply(this, arguments)
                                                }
                                            }()).catch((function(e) {
                                                console.log("error", e)
                                            }))
                                        }), 2500), e.next = 17;
                                        break;
                                    case 16:
                                        _(w, t);
                                    case 17:
                                        Q(!1), e.next = 23;
                                        break;
                                    case 20:
                                        e.prev = 20, e.t0 = e.catch(0), Q(!1);
                                    case 23:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 20]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    _ = function() {
                        var e = Object(l.a)(Object(o.a)().mark((function e(t, n) {
                            var a, r;
                            return Object(o.a)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!(!E.length > 0)) {
                                            e.next = 3;
                                            break
                                        }
                                        return A.b.error("Please select NFTs"), e.abrupt("return");
                                    case 3:
                                        if (!(E.length > 5)) {
                                            e.next = 6;
                                            break
                                        }
                                        return A.b.error("you can select max 5 NFTs"), e.abrupt("return");
                                    case 6:
                                        return e.prev = 6, Q(!0), e.next = 10, t.deposit(0, 0, E).send({
                                            from: n,
                                            callValue: 0,
                                            feeLimit: 1e9
                                        });
                                    case 10:
                                        a = e.sent, r = setInterval((function() {
                                            j.trx.getUnconfirmedTransactionInfo(a.toString()).then(function() {
                                                var e = Object(l.a)(Object(o.a)().mark((function e(t) {
                                                    var a;
                                                    return Object(o.a)().wrap((function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                if (!t) {
                                                                    e.next = 18;
                                                                    break
                                                                }
                                                                if (console.log(t, "---\x3evalue----\x3e"), "SUCCESS" != (null === (a = t.receipt) || void 0 === a ? void 0 : a.result)) {
                                                                    e.next = 17;
                                                                    break
                                                                }
                                                                return A.b.success("Stake Successfully"), e.next = 6, x();
                                                            case 6:
                                                                return e.next = 8, p();
                                                            case 8:
                                                                return e.next = 10, g();
                                                            case 10:
                                                                return e.next = 12, u.a.post("".concat(S, "/stakeIds"), {
                                                                    isCheck: E,
                                                                    userWalletAddress: n
                                                                });
                                                            case 12:
                                                                e.sent, B([]), clearInterval(r), e.next = 18;
                                                                break;
                                                            case 17:
                                                                "FAILED" === t.result ? (A.b.success("Failed....."), clearInterval(r)) : "REVERT" === t.receipt.result ? (A.b.success("REVERT Failed....."), clearInterval(r)) : clearInterval(r);
                                                            case 18:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })));
                                                return function(t) {
                                                    return e.apply(this, arguments)
                                                }
                                            }()).catch((function(e) {
                                                console.log("error", e)
                                            }))
                                        }), 2e3), Q(!1), e.next = 18;
                                        break;
                                    case 15:
                                        e.prev = 15, e.t0 = e.catch(6), console.log(e.t0, "e===>");
                                    case 18:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [6, 15]
                            ])
                        })));
                        return function(t, n) {
                            return e.apply(this, arguments)
                        }
                    }();
                return Object(N.jsx)("div", {
                    children: Object(N.jsx)(Me.a, {
                        open: r,
                        onClose: y,
                        "aria-labelledby": "modal-modal-title",
                        "aria-describedby": "modal-modal-description",
                        style: {
                            overflow: "scroll"
                        },
                        children: Object(N.jsxs)(k.a, {
                            sx: gt,
                            style: {
                                background: s ? "#2A2A2E" : "white"
                            },
                            children: [Object(N.jsx)("i", {
                                onClick: y,
                                className: h.bw + " fas fa-times-circle",
                                style: {
                                    fontSize: "24px",
                                    float: "right",
                                    "&:hover": {
                                        color: "red",
                                        backgroundColor: "silver",
                                        borderRadius: "50%",
                                        cursor: "pointer"
                                    }
                                }
                            }), Object(N.jsx)(f.a, {
                                className: h.bw,
                                id: "modal-modal-title",
                                variant: "h6",
                                component: "h2",
                                children: "Select NFTs for Staking"
                            }), Object(N.jsxs)(k.a, {
                                children: [Object(N.jsx)(k.a, {
                                    children: Object(N.jsxs)(m.a, {
                                        container: !0,
                                        children: [Object(N.jsx)(m.a, {
                                            item: !0,
                                            xs: 1,
                                            children: Object(N.jsx)(ft, Object(M.a)({
                                                type: "checkbox",
                                                name: "selectAll",
                                                id: "selectAll",
                                                handleClick: function(e) {
                                                    I(!C), B(W.map((function(e) {
                                                        return e.nftid
                                                    }))), C && B([])
                                                },
                                                isChecked: C,
                                                style: {
                                                    marginLeft: "-10px",
                                                    color: "dodgerblue"
                                                }
                                            }, {
                                                inputProps: {
                                                    "aria-label": "Checkbox demo"
                                                }
                                            }))
                                        }), Object(N.jsx)(m.a, {
                                            item: !0,
                                            xs: 11,
                                            children: Object(N.jsx)(f.a, {
                                                style: {
                                                    marginTop: "10px"
                                                },
                                                children: "All"
                                            })
                                        })]
                                    })
                                }), b.length > 0 ? b.map((function(e, t) {
                                    return Object(N.jsxs)(m.a, {
                                        container: !0,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        style: {
                                            marginTop: "30px",
                                            borderTop: "1px solid #2e2e2e",
                                            borderBottom: "1px solid #2e2e2e"
                                        },
                                        children: [Object(N.jsx)(m.a, {
                                            item: !0,
                                            xs: 4,
                                            children: Object(N.jsx)(ft, {
                                                id: e.nftid,
                                                type: "checkbox",
                                                name: e.nftOwner,
                                                handleClick: K,
                                                isChecked: E.includes(e.nftid)
                                            })
                                        }), Object(N.jsxs)(m.a, {
                                            item: !0,
                                            xs: 4,
                                            children: [Object(N.jsxs)(f.a, {
                                                children: ["CuteATC #", e.mintId]
                                            }), Object(N.jsxs)(f.a, {
                                                children: ["Type: ", e.nftattributes[0].Type]
                                            })]
                                        }), Object(N.jsx)(m.a, {
                                            item: !0,
                                            xs: 4,
                                            style: {
                                                display: "flex",
                                                justifyContent: "flex-start",
                                                alignItems: "center"
                                            },
                                            children: Object(N.jsx)("img", {
                                                style: {
                                                    width: "60px",
                                                    height: "60px"
                                                },
                                                src: e.nftimage
                                            })
                                        })]
                                    }, t)
                                })) : null]
                            }), Object(N.jsx)(k.a, {
                                style: {
                                    textAlign: "center",
                                    marginTop: "30px"
                                },
                                children: Object(N.jsx)(O.a, {
                                    onClick: function() {
                                        return q()
                                    },
                                    style: {
                                        padding: "10px 16px",
                                        background: "#007ACC",
                                        color: "white"
                                    },
                                    disabled: V,
                                    children: V ? "Staking....." : "Confirm NFTs"
                                })
                            })]
                        })
                    })
                })
            }
            var ft = function(e) {
                    var t = e.id,
                        n = e.type,
                        a = e.name,
                        r = e.handleClick,
                        c = e.isChecked,
                        s = e.disabled;
                    return Object(N.jsx)("input", {
                        id: t,
                        name: a,
                        type: n,
                        onChange: r,
                        checked: c,
                        disabled: s
                    })
                },
                Ot = n(85),
                yt = n.n(Ot),
                kt = Object(j.a)((function(e) {
                    return {
                        btntoggle: {
                            height: "30px",
                            padding: "15px 30px",
                            color: "white",
                            border: "1px solid ".concat(e.palette.secondary.btnborder),
                            margin: "20px auto 20px auto",
                            borderRadius: "5px",
                            background: e.palette.secondary.btnbg,
                            "&:hover": {
                                background: "#FF0000"
                            }
                        },
                        root: {
                            color: "white"
                        },
                        colortoggle: {
                            color: e.palette.secondary.bw
                        },
                        cardbtnbgc: {
                            background: e.palette.secondary.cardbg
                        },
                        wb: {
                            background: e.palette.secondary.wb
                        }
                    }
                }));
            var wt = function(e) {
                    var t, n, c = e.userWalletAddress,
                        s = e.setlogoutopen,
                        i = e.userAction,
                        b = e.setActivation,
                        j = e.isDarkMode,
                        x = e.setselectionmodalopen,
                        p = e.myPunks,
                        u = e.balanceOf,
                        g = e.tronWeb,
                        h = e._allignment,
                        y = e._MyPunks,
                        w = e.contractNft,
                        v = e.selectionmodalopen,
                        T = e.setloading,
                        S = e.loading,
                        C = e._homeCounterinfo,
                        I = e.contractBalance,
                        M = e.rewardNftClaim,
                        E = e.totalNftStaked,
                        B = e.rewardTBLclaim,
                        D = e.withdrawl,
                        L = e.Tblreward,
                        z = e.tblProfit,
                        G = e.currentProfit,
                        Y = e.staketbl,
                        Z = e.nftStaked,
                        H = e.Trc721Reward,
                        V = e.erc20Reward,
                        Q = e._percentDivider,
                        J = e.claimTimeNft,
                        X = e.claimTimeTbl,
                        K = e.unstakeTimeTbl,
                        q = e.unstakeTimeNft,
                        _ = e._getStaked,
                        $ = kt(),
                        ee = Object(F.a)("(min-width:1200px)"),
                        ne = Object(F.a)("(min-width:959px)"),
                        ae = Object(F.a)("(min-width:650px)"),
                        re = Object(F.a)("(min-width:450px)"),
                        ce = r.a.useState(!1),
                        se = Object(d.a)(ce, 2),
                        ie = se[0],
                        oe = se[1],
                        le = r.a.useState(0),
                        de = Object(d.a)(le, 2),
                        be = de[0],
                        je = de[1],
                        xe = ut(g),
                        pe = xe._stakeContract,
                        ue = xe._stakeTokenContract,
                        ge = r.a.useState({
                            time_days: 0,
                            time_Hours: 0,
                            time_Minusts: 0,
                            time_seconds: 0
                        }),
                        he = Object(d.a)(ge, 2),
                        me = he[0],
                        fe = he[1],
                        Oe = Object(a.useState)({
                            time_days: 0,
                            time_Hours: 0,
                            time_Minusts: 0,
                            time_seconds: 0
                        }),
                        ye = Object(d.a)(Oe, 2),
                        ke = ye[0],
                        we = ye[1],
                        ve = Object(a.useState)({
                            time_days: 0,
                            time_Hours: 0,
                            time_Minusts: 0,
                            time_seconds: 0
                        }),
                        Te = Object(d.a)(ve, 2),
                        Ae = Te[0],
                        Se = Te[1],
                        Ne = Object(a.useState)({
                            time_days: 0,
                            time_Hours: 0,
                            time_Minusts: 0,
                            time_seconds: 0
                        }),
                        Ce = Object(d.a)(Ne, 2),
                        Ie = Ce[0],
                        Re = Ce[1],
                        Me = Object(a.useRef)(null),
                        Fe = Object(a.useRef)(null);
                    Object(a.useEffect)((function() {
                        Object(l.a)(Object(o.a)().mark((function e() {
                            return Object(o.a)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        clearInterval(Me.current), fe({
                                            time_days: 0,
                                            time_Hours: 0,
                                            time_Minusts: 0,
                                            time_seconds: 0
                                        }), clearInterval(Fe.current), fe({
                                            time_days: 0,
                                            time_Hours: 0,
                                            time_Minusts: 0,
                                            time_seconds: 0
                                        }), Me.current = setInterval((function() {
                                            var e = +yt.a.unix(+J).format("x") - +yt()().format("x"),
                                                t = Math.floor(e / 864e5),
                                                n = Math.floor(e % 864e5 / 36e5),
                                                a = Math.floor(e % 36e5 / 6e4),
                                                r = Math.floor(e % 6e4 / 1e3);
                                            e > 0 ? fe({
                                                time_days: t,
                                                time_Hours: n,
                                                time_Minusts: a,
                                                time_seconds: r
                                            }) : clearInterval(Me.current)
                                        }), 1e3), Fe.current = setInterval((function() {
                                            var e = +yt.a.unix(+q).format("x") - +yt()().format("x"),
                                                t = Math.floor(e / 864e5),
                                                n = Math.floor(e % 864e5 / 36e5),
                                                a = Math.floor(e % 36e5 / 6e4),
                                                r = Math.floor(e % 6e4 / 1e3);
                                            e > 0 ? Re({
                                                time_days: t,
                                                time_Hours: n,
                                                time_Minusts: a,
                                                time_seconds: r
                                            }) : clearInterval(Fe.current)
                                        }), 1e3);
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    }), [J, q]);
                    var Ee = Object(a.useRef)(null),
                        Be = Object(a.useRef)(null);
                    Object(a.useEffect)((function() {
                        Object(l.a)(Object(o.a)().mark((function e() {
                            return Object(o.a)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        clearInterval(Ee.current), we({
                                            time_days: 0,
                                            time_Hours: 0,
                                            time_Minusts: 0,
                                            time_seconds: 0
                                        }), clearInterval(Be.current), we({
                                            time_days: 0,
                                            time_Hours: 0,
                                            time_Minusts: 0,
                                            time_seconds: 0
                                        }), Ee.current = setInterval((function() {
                                            var e = +yt.a.unix(+X).format("x") - +yt()().format("x"),
                                                t = Math.floor(e / 864e5),
                                                n = Math.floor(e % 864e5 / 36e5),
                                                a = Math.floor(e % 36e5 / 6e4),
                                                r = Math.floor(e % 6e4 / 1e3);
                                            e > 0 ? we({
                                                time_days: t,
                                                time_Hours: n,
                                                time_Minusts: a,
                                                time_seconds: r
                                            }) : clearInterval(Ee.current)
                                        }), 1e3), Be.current = setInterval((function() {
                                            var e = +yt.a.unix(+K).format("x") - +yt()().format("x"),
                                                t = Math.floor(e / 864e5),
                                                n = Math.floor(e % 864e5 / 36e5),
                                                a = Math.floor(e % 36e5 / 6e4),
                                                r = Math.floor(e % 6e4 / 1e3);
                                            e > 0 ? Se({
                                                time_days: t,
                                                time_Hours: n,
                                                time_Minusts: a,
                                                time_seconds: r
                                            }) : clearInterval(Be.current)
                                        }), 1e3);
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    }), [X, K]);
                    var De = function(e) {
                            return function(t, n) {
                                oe(!!n && e)
                            }
                        },
                        Le = function() {
                            var e = Object(l.a)(Object(o.a)().mark((function e() {
                                var t, n, a, r;
                                return Object(o.a)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (e.prev = 0, c) {
                                                e.next = 4;
                                                break
                                            }
                                            return A.b.error("Please login to continue"), e.abrupt("return");
                                        case 4:
                                            if (be) {
                                                e.next = 7;
                                                break
                                            }
                                            return A.b.error("Please enter amount to stake"), e.abrupt("return");
                                        case 7:
                                            if (T(!0), !ue || !pe) {
                                                e.next = 24;
                                                break
                                            }
                                            return e.next = 11, ue.allowance(c, te).call();
                                        case 11:
                                            return t = e.sent, e.next = 14, ue.totalSupply().call();
                                        case 14:
                                            if (n = e.sent, !(+t < +Object(Ge.e)(be.toString(), "6"))) {
                                                e.next = 23;
                                                break
                                            }
                                            return e.next = 18, ue.approve(te, +n).send({
                                                from: c,
                                                gasLimit: "2000000",
                                                callValue: 0,
                                                feeLimit: 1e9
                                            });
                                        case 18:
                                            a = e.sent, r = setInterval((function() {
                                                g.trx.getUnconfirmedTransactionInfo(a.toString()).then(function() {
                                                    var e = Object(l.a)(Object(o.a)().mark((function e(t) {
                                                        var n;
                                                        return Object(o.a)().wrap((function(e) {
                                                            for (;;) switch (e.prev = e.next) {
                                                                case 0:
                                                                    t && ("SUCCESS" === (null === t || void 0 === t || null === (n = t.receipt) || void 0 === n ? void 0 : n.result) ? (A.b.success("Approved Successfully"), We(pe, +Object(Ge.e)(be.toString(), "6")), clearInterval(r)) : "FAILED" === t.result ? (A.b.success("Failed....."), clearInterval(r)) : "REVERT" === t.receipt.result ? (A.b.success("REVERT Failed....."), clearInterval(r)) : (console.log(t, "this is something"), A.b.error("Failed to Approve"), clearInterval(r)));
                                                                case 1:
                                                                case "end":
                                                                    return e.stop()
                                                            }
                                                        }), e)
                                                    })));
                                                    return function(t) {
                                                        return e.apply(this, arguments)
                                                    }
                                                }()).catch((function(e) {
                                                    console.log("error", e)
                                                }))
                                            }), 2e3), T(!1), e.next = 24;
                                            break;
                                        case 23:
                                            We(pe, +Object(Ge.e)(be.toString(), "6"));
                                        case 24:
                                            e.next = 29;
                                            break;
                                        case 26:
                                            e.prev = 26, e.t0 = e.catch(0), console.log(e.t0, "error");
                                        case 29:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 26]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        We = function() {
                            var e = Object(l.a)(Object(o.a)().mark((function e(t, n) {
                                var a, r;
                                return Object(o.a)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return T(!0), e.next = 3, t.deposit(1, n, []).send({
                                                from: c,
                                                callValue: 0,
                                                feeLimit: 1e9
                                            });
                                        case 3:
                                            return a = e.sent, e.next = 6, setInterval((function() {
                                                g.trx.getUnconfirmedTransactionInfo(a.toString()).then(function() {
                                                    var e = Object(l.a)(Object(o.a)().mark((function e(t) {
                                                        var n;
                                                        return Object(o.a)().wrap((function(e) {
                                                            for (;;) switch (e.prev = e.next) {
                                                                case 0:
                                                                    if (!t) {
                                                                        e.next = 16;
                                                                        break
                                                                    }
                                                                    if ("SUCCESS" !== (null === t || void 0 === t || null === (n = t.receipt) || void 0 === n ? void 0 : n.result)) {
                                                                        e.next = 14;
                                                                        break
                                                                    }
                                                                    return A.b.success("Staked  Successfully"), e.next = 5, h();
                                                                case 5:
                                                                    return e.next = 7, y();
                                                                case 7:
                                                                    return e.next = 9, _();
                                                                case 9:
                                                                    return e.next = 11, C();
                                                                case 11:
                                                                    clearInterval(r), e.next = 15;
                                                                    break;
                                                                case 14:
                                                                    "REVERT" === t.receipt.result ? (A.b.success("REVERT Failed....."), clearInterval(r)) : "FAILED" === t.result ? (A.b.success("Failed....."), clearInterval(r)) : clearInterval(r);
                                                                case 15:
                                                                    clearInterval(r);
                                                                case 16:
                                                                case "end":
                                                                    return e.stop()
                                                            }
                                                        }), e)
                                                    })));
                                                    return function(t) {
                                                        return e.apply(this, arguments)
                                                    }
                                                }()).catch((function(e) {
                                                    _(), console.log("error", e)
                                                }))
                                            }), 2e3);
                                        case 6:
                                            r = e.sent, T(!1);
                                        case 8:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t, n) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        ze = function() {
                            var e = Object(l.a)(Object(o.a)().mark((function e(t) {
                                var n, a;
                                return Object(o.a)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, pe.reinvest(t).send({
                                                from: c,
                                                callValue: 0,
                                                feeLimit: 1e9
                                            });
                                        case 3:
                                            n = e.sent, a = setInterval((function() {
                                                g.trx.getUnconfirmedTransactionInfo(n.toString()).then(function() {
                                                    var e = Object(l.a)(Object(o.a)().mark((function e(t) {
                                                        return Object(o.a)().wrap((function(e) {
                                                            for (;;) switch (e.prev = e.next) {
                                                                case 0:
                                                                    if (!t) {
                                                                        e.next = 15;
                                                                        break
                                                                    }
                                                                    if ("SUCCESS" != t.receipt.result) {
                                                                        e.next = 14;
                                                                        break
                                                                    }
                                                                    return A.b.success("Reinvest Successfully"), e.next = 5, h();
                                                                case 5:
                                                                    return e.next = 7, y();
                                                                case 7:
                                                                    return e.next = 9, _();
                                                                case 9:
                                                                    return e.next = 11, C();
                                                                case 11:
                                                                    clearInterval(a), e.next = 15;
                                                                    break;
                                                                case 14:
                                                                    "FAILED" === t.result ? (A.b.success("Failed....."), clearInterval(a)) : "REVERT" === t.receipt.result ? (A.b.success("REVERT Failed....."), clearInterval(a)) : (A.b.error("Failed to unstake"), clearInterval(a));
                                                                case 15:
                                                                case "end":
                                                                    return e.stop()
                                                            }
                                                        }), e)
                                                    })));
                                                    return function(t) {
                                                        return e.apply(this, arguments)
                                                    }
                                                }()).catch((function(e) {
                                                    console.log("error", e)
                                                }))
                                            }), 2e3), e.next = 10;
                                            break;
                                        case 7:
                                            e.prev = 7, e.t0 = e.catch(0), console.log(e.t0, "e----\x3e");
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 7]
                                ])
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        Pe = function() {
                            var e = Object(l.a)(Object(o.a)().mark((function e(t, n) {
                                var a, r;
                                return Object(o.a)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, pe.withdrawAll(t, n).send({
                                                from: c,
                                                callValue: 0,
                                                feeLimit: 1e9
                                            });
                                        case 3:
                                            a = e.sent, r = setInterval((function() {
                                                g.trx.getUnconfirmedTransactionInfo(a.toString()).then(function() {
                                                    var e = Object(l.a)(Object(o.a)().mark((function e(t) {
                                                        return Object(o.a)().wrap((function(e) {
                                                            for (;;) switch (e.prev = e.next) {
                                                                case 0:
                                                                    if (!t) {
                                                                        e.next = 15;
                                                                        break
                                                                    }
                                                                    if ("SUCCESS" != t.receipt.result) {
                                                                        e.next = 14;
                                                                        break
                                                                    }
                                                                    return A.b.success("unstake Successfully"), e.next = 5, h();
                                                                case 5:
                                                                    return e.next = 7, y();
                                                                case 7:
                                                                    return e.next = 9, _();
                                                                case 9:
                                                                    return e.next = 11, C();
                                                                case 11:
                                                                    clearInterval(r), e.next = 15;
                                                                    break;
                                                                case 14:
                                                                    "FAILED" === t.result ? (A.b.success("Failed....."), clearInterval(r)) : "REVERT" === t.receipt.result ? (A.b.success("REVERT Failed....."), clearInterval(r)) : (A.b.error("Failed to unstake"), clearInterval(r));
                                                                case 15:
                                                                case "end":
                                                                    return e.stop()
                                                            }
                                                        }), e)
                                                    })));
                                                    return function(t) {
                                                        return e.apply(this, arguments)
                                                    }
                                                }()).catch((function(e) {
                                                    console.log("error", e)
                                                }))
                                            }), 2e3), e.next = 10;
                                            break;
                                        case 7:
                                            e.prev = 7, e.t0 = e.catch(0), console.log(e.t0, "e----\x3e");
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 7]
                                ])
                            })));
                            return function(t, n) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        Ue = function() {
                            var e = Object(l.a)(Object(o.a)().mark((function e(t, n) {
                                var a, r;
                                return Object(o.a)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, pe.CompleteWithDraw(t, n).send({
                                                from: c,
                                                callValue: 0,
                                                feeLimit: 1e9
                                            });
                                        case 3:
                                            a = e.sent, r = setInterval((function() {
                                                g.trx.getUnconfirmedTransactionInfo(a.toString()).then(function() {
                                                    var e = Object(l.a)(Object(o.a)().mark((function e(t) {
                                                        return Object(o.a)().wrap((function(e) {
                                                            for (;;) switch (e.prev = e.next) {
                                                                case 0:
                                                                    if (!t) {
                                                                        e.next = 16;
                                                                        break
                                                                    }
                                                                    if (console.log(t, "this is the value"), "SUCCESS" != t.receipt.result) {
                                                                        e.next = 15;
                                                                        break
                                                                    }
                                                                    return A.b.success("WithDraw Successfully"), e.next = 6, h();
                                                                case 6:
                                                                    return e.next = 8, y();
                                                                case 8:
                                                                    return e.next = 10, _();
                                                                case 10:
                                                                    return e.next = 12, C();
                                                                case 12:
                                                                    clearInterval(r), e.next = 16;
                                                                    break;
                                                                case 15:
                                                                    "FAILED" === t.result ? (A.b.success("Failed....."), clearInterval(r)) : "REVERT" === t.receipt.result ? (A.b.success("REVERT Failed....."), clearInterval(r)) : (A.b.error("Failed to unstake"), clearInterval(r));
                                                                case 16:
                                                                case "end":
                                                                    return e.stop()
                                                            }
                                                        }), e)
                                                    })));
                                                    return function(t) {
                                                        return e.apply(this, arguments)
                                                    }
                                                }()).catch((function(e) {
                                                    console.log("error", e)
                                                }))
                                            }), 2e3), e.next = 10;
                                            break;
                                        case 7:
                                            e.prev = 7, e.t0 = e.catch(0), console.log(e.t0, "e----\x3e");
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 7]
                                ])
                            })));
                            return function(t, n) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        Ye = function() {
                            var e = Object(l.a)(Object(o.a)().mark((function e(t) {
                                var n, a;
                                return Object(o.a)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, pe.Unfreez(t).send({
                                                from: c,
                                                callValue: 0,
                                                feeLimit: 1e9
                                            });
                                        case 3:
                                            return n = e.sent, e.next = 6, setInterval((function() {
                                                g.trx.getUnconfirmedTransactionInfo(n.toString()).then(function() {
                                                    var e = Object(l.a)(Object(o.a)().mark((function e(t) {
                                                        return Object(o.a)().wrap((function(e) {
                                                            for (;;) switch (e.prev = e.next) {
                                                                case 0:
                                                                    if (!t) {
                                                                        e.next = 15;
                                                                        break
                                                                    }
                                                                    if ("SUCCESS" != t.receipt.result) {
                                                                        e.next = 14;
                                                                        break
                                                                    }
                                                                    return A.b.success("unstake Successfully"), e.next = 5, h();
                                                                case 5:
                                                                    return e.next = 7, y();
                                                                case 7:
                                                                    return e.next = 9, _();
                                                                case 9:
                                                                    return e.next = 11, C();
                                                                case 11:
                                                                    clearInterval(a), e.next = 15;
                                                                    break;
                                                                case 14:
                                                                    "FAILED" === t.result ? (A.b.success("Failed....."), clearInterval(a)) : "REVERT" === t.receipt.result ? (A.b.success("REVERT Failed....."), clearInterval(a)) : (A.b.error("Failed to unstake"), clearInterval(a));
                                                                case 15:
                                                                case "end":
                                                                    return e.stop()
                                                            }
                                                        }), e)
                                                    })));
                                                    return function(t) {
                                                        return e.apply(this, arguments)
                                                    }
                                                }()).catch((function(e) {
                                                    console.log("error", e)
                                                }))
                                            }), 2e3);
                                        case 6:
                                            a = e.sent, e.next = 12;
                                            break;
                                        case 9:
                                            e.prev = 9, e.t0 = e.catch(0), console.log(e.t0, "e----\x3e");
                                        case 12:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 9]
                                ])
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        Ze = function() {
                            var e = Object(l.a)(Object(o.a)().mark((function e(t) {
                                var n, a;
                                return Object(o.a)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, pe.UnfreezTBL(t).send({
                                                from: c,
                                                callValue: 0,
                                                feeLimit: 1e9
                                            });
                                        case 3:
                                            return n = e.sent, e.next = 6, setInterval((function() {
                                                g.trx.getUnconfirmedTransactionInfo(n.toString()).then(function() {
                                                    var e = Object(l.a)(Object(o.a)().mark((function e(t) {
                                                        return Object(o.a)().wrap((function(e) {
                                                            for (;;) switch (e.prev = e.next) {
                                                                case 0:
                                                                    if (!t) {
                                                                        e.next = 15;
                                                                        break
                                                                    }
                                                                    if ("SUCCESS" != t.receipt.result) {
                                                                        e.next = 14;
                                                                        break
                                                                    }
                                                                    return A.b.success("unstake Successfully"), e.next = 5, h();
                                                                case 5:
                                                                    return e.next = 7, y();
                                                                case 7:
                                                                    return e.next = 9, _();
                                                                case 9:
                                                                    return e.next = 11, C();
                                                                case 11:
                                                                    clearInterval(a), e.next = 15;
                                                                    break;
                                                                case 14:
                                                                    "FAILED" === t.result ? (A.b.success("Failed....."), clearInterval(a)) : "REVERT" === t.receipt.result ? (A.b.success("REVERT Failed....."), clearInterval(a)) : (A.b.error("Failed to unstake"), clearInterval(a));
                                                                case 15:
                                                                case "end":
                                                                    return e.stop()
                                                            }
                                                        }), e)
                                                    })));
                                                    return function(t) {
                                                        return e.apply(this, arguments)
                                                    }
                                                }()).catch((function(e) {
                                                    console.log("error", e)
                                                }))
                                            }), 2e3);
                                        case 6:
                                            a = e.sent, e.next = 12;
                                            break;
                                        case 9:
                                            e.prev = 9, e.t0 = e.catch(0), console.log(e.t0, "e----\x3e");
                                        case 12:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 9]
                                ])
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }();
                    r.a.useEffect((function() {
                        c && pe && _()
                    }), [c, pe]);
                    var He = +me.time_days + +me.time_Hours + +me.time_Minusts + +me.time_seconds,
                        Ve = +ke.time_days + +ke.time_Hours + +ke.time_Minusts + +ke.time_seconds;
                    return Object(N.jsxs)(N.Fragment, {
                        children: [Object(N.jsx)(mt, {
                            userWalletAddress: c,
                            contractNft: w,
                            isDarkMode: j,
                            selectionmodalopen: v,
                            setselectionmodalopen: x,
                            myPunks: p,
                            setloading: T,
                            loading: S,
                            tronWeb: g,
                            _allignment: h,
                            _MyPunks: y,
                            _getStaked: _
                        }), Object(N.jsx)("div", {
                            style: {
                                marginTop: "105px"
                            },
                            children: Object(N.jsxs)(k.a, {
                                sx: {
                                    padding: "20px 0px 20px 0px",
                                    maxWidth: "1460px",
                                    margin: "auto"
                                },
                                children: [Object(N.jsx)(k.a, {
                                    style: {
                                        textAlign: "center"
                                    },
                                    children: c || 200 === i ? Object(N.jsx)("div", {
                                        children: c ? Object(N.jsx)(O.a, {
                                            variant: "filled",
                                            style: {
                                                border: "1px solid white",
                                                borderRadius: "50px",
                                                color: "white",
                                                marginTop: "25px",
                                                marginBottom: "30px",
                                                background: "#007ACC"
                                            },
                                            onClick: function() {
                                                s(!0)
                                            },
                                            children: (null === c || void 0 === c ? void 0 : c.slice(0, 6)) + "..." + (null === c || void 0 === c ? void 0 : c.slice(-4))
                                        }) : Object(N.jsx)(O.a, {
                                            variant: "filled",
                                            style: {
                                                border: "1px solid white",
                                                borderRadius: "50px",
                                                color: "white",
                                                marginTop: "25px",
                                                marginBottom: "30px",
                                                background: "#007ACC"
                                            },
                                            children: "Loading ...."
                                        })
                                    }) : Object(N.jsx)(O.a, {
                                        variant: "filled",
                                        item: !0,
                                        className: $.btntoggle,
                                        onClick: function() {
                                            b(!0)
                                        },
                                        children: "Connect Wallet"
                                    })
                                }), Object(N.jsx)(f.a, {
                                    className: $.colortoggle,
                                    align: "center",
                                    variant: ne ? "h3" : "h4",
                                    color: "#434343",
                                    style: {
                                        fontSize: ne ? null : "2.1rem"
                                    },
                                    children: "CuteATC STAKING"
                                }), Object(N.jsx)(f.a, {
                                    className: $.colortoggle,
                                    style: {
                                        marginTop: "40px",
                                        width: ne ? "60%" : "90%",
                                        margin: "auto",
                                        textAlign: "justify",
                                        wordSpacing: "-5px"
                                    },
                                    align: "center",
                                    variant: "h5",
                                    color: "#434343",
                                    children: "Welcome to CuteATC Staking, here you can stake your CuteATC NFT and BANANA to get back passive income. "
                                }), Object(N.jsx)(f.a, {
                                    className: $.colortoggle,
                                    style: {
                                        marginTop: "30px",
                                        fontSize: ne ? null : "28px"
                                    },
                                    align: "center",
                                    variant: "h4",
                                    color: "#434343",
                                    children: "DASHBOARD"
                                }), Object(N.jsxs)(m.a, {
                                    container: !0,
                                    justifyContent: ee ? "space-between" : "center",
                                    style: {
                                        width: ae ? "85%" : "95%",
                                        margin: "auto"
                                    },
                                    children: [Object(N.jsxs)(m.a, {
                                        style: {
                                            maxWidth: "560px",
                                            marginTop: "20px",
                                            border: "6px outset rgb(142, 142, 142)",
                                            padding: "15px 10px"
                                        },
                                        item: !0,
                                        xs: 12,
                                        md: ee ? 6 : 12,
                                        children: [Object(N.jsx)(f.a, {
                                            className: $.colortoggle,
                                            align: "center",
                                            variant: "h6",
                                            sx: {
                                                fontSize: "1.1rem"
                                            },
                                            children: "CuteATC NFT Stats"
                                        }), Object(N.jsxs)(m.a, {
                                            style: {
                                                marginTop: "20px",
                                                textAlign: "center"
                                            },
                                            container: !0,
                                            justifyContent: "center",
                                            children: [Object(N.jsxs)(m.a, {
                                                style: {
                                                    border: "6px outset",
                                                    padding: "8px 10px"
                                                },
                                                item: !0,
                                                xs: 12,
                                                md: 6,
                                                children: [Object(N.jsx)(f.a, {
                                                    className: $.colortoggle,
                                                    variant: "h6",
                                                    style: {
                                                        color: "#FD573B",
                                                        textAlign: re ? null : "left",
                                                        fontSize: "1.1rem"
                                                    },
                                                    children: "REWARD CLAIMED:"
                                                }), Object(N.jsx)(f.a, {
                                                    className: $.colortoggle,
                                                    variant: "h6",
                                                    style: {
                                                        textAlign: re ? null : "left",
                                                        fontSize: "1.1rem"
                                                    },
                                                    children: M ? +Object(Ge.c)(M.toString(), "6") : 0
                                                })]
                                            }), Object(N.jsxs)(m.a, {
                                                style: {
                                                    border: "6px outset",
                                                    padding: "8px 10px"
                                                },
                                                item: !0,
                                                xs: 12,
                                                md: 6,
                                                children: [Object(N.jsx)(f.a, {
                                                    className: $.colortoggle,
                                                    variant: "h6",
                                                    style: {
                                                        color: "#FD573B",
                                                        textAlign: re ? null : "left",
                                                        fontSize: "1.1rem"
                                                    },
                                                    children: "Reward per NFT:"
                                                }), Object(N.jsx)(f.a, {
                                                    className: $.colortoggle,
                                                    variant: "h6",
                                                    style: {
                                                        textAlign: re ? null : "left",
                                                        fontSize: "1.1rem"
                                                    },
                                                    children: H ? Object(Ge.c)(H.toString(), "6") : 0
                                                })]
                                            }), Object(N.jsxs)(m.a, {
                                                style: {
                                                    border: "6px outset",
                                                    marginTop: "20px",
                                                    padding: "8px 10px"
                                                },
                                                item: !0,
                                                xs: ne ? 10 : 12,
                                                children: [Object(N.jsx)(f.a, {
                                                    className: $.colortoggle,
                                                    variant: "h6",
                                                    style: {
                                                        color: "#FD573B",
                                                        textAlign: re ? null : "left",
                                                        fontSize: "1.1rem"
                                                    },
                                                    children: "TOTAL STAKED AMOUNT (NFT):"
                                                }), Object(N.jsx)(f.a, {
                                                    className: $.colortoggle,
                                                    variant: "h6",
                                                    style: {
                                                        textAlign: re ? null : "left",
                                                        fontSize: "1.1rem"
                                                    },
                                                    children: E ? +E : 0
                                                })]
                                            })]
                                        })]
                                    }), Object(N.jsxs)(m.a, {
                                        style: {
                                            maxWidth: "560px",
                                            marginTop: "20px",
                                            border: "6px outset rgb(142, 142, 142)",
                                            padding: "15px 10px"
                                        },
                                        item: !0,
                                        xs: 12,
                                        md: ee ? 6 : 12,
                                        children: [Object(N.jsx)(f.a, {
                                            className: $.colortoggle,
                                            align: "center",
                                            variant: "h6",
                                            sx: {
                                                fontSize: "1.1rem"
                                            },
                                            children: "Tblocks TBL Stats"
                                        }), Object(N.jsxs)(m.a, {
                                            style: {
                                                marginTop: "20px",
                                                textAlign: "center"
                                            },
                                            container: !0,
                                            justifyContent: "center",
                                            children: [Object(N.jsxs)(m.a, {
                                                style: {
                                                    border: "6px outset",
                                                    padding: "8px 10px"
                                                },
                                                item: !0,
                                                xs: 12,
                                                md: 6,
                                                children: [Object(N.jsx)(f.a, {
                                                    className: $.colortoggle,
                                                    variant: "h6",
                                                    style: {
                                                        color: "#FD573B",
                                                        textAlign: re ? null : "left",
                                                        fontSize: "1.1rem"
                                                    },
                                                    children: "REWARD CLAIMED:"
                                                }), Object(N.jsx)(f.a, {
                                                    className: $.colortoggle,
                                                    variant: "h6",
                                                    style: {
                                                        textAlign: re ? null : "left",
                                                        fontSize: "1.1rem"
                                                    },
                                                    children: B ? +Object(Ge.c)(B.toString(), "6") : 0
                                                })]
                                            }), Object(N.jsxs)(m.a, {
                                                style: {
                                                    border: "6px outset",
                                                    padding: "8px 10px"
                                                },
                                                item: !0,
                                                xs: 12,
                                                md: 6,
                                                children: [Object(N.jsx)(f.a, {
                                                    className: $.colortoggle,
                                                    variant: "h6",
                                                    style: {
                                                        color: "#FD573B",
                                                        textAlign: re ? null : "left",
                                                        fontSize: "1.1rem"
                                                    },
                                                    children: "Reward Percentage:"
                                                }), Object(N.jsxs)(f.a, {
                                                    className: $.colortoggle,
                                                    variant: "h6",
                                                    style: {
                                                        textAlign: re ? null : "left",
                                                        fontSize: "1.1rem"
                                                    },
                                                    children: [V ? +V / +Q * 100 : 0, "%"]
                                                })]
                                            }), Object(N.jsxs)(m.a, {
                                                style: {
                                                    border: "6px outset",
                                                    marginTop: "20px",
                                                    padding: "8px 10px"
                                                },
                                                item: !0,
                                                xs: ne ? 10 : 12,
                                                children: [Object(N.jsx)(f.a, {
                                                    className: $.colortoggle,
                                                    variant: "h6",
                                                    style: {
                                                        color: "#FD573B",
                                                        textAlign: re ? null : "left",
                                                        fontSize: "1.1rem"
                                                    },
                                                    children: "TOTAL STAKED AMOUNT (TBL):"
                                                }), Object(N.jsx)(f.a, {
                                                    className: $.colortoggle,
                                                    variant: "h6",
                                                    style: {
                                                        textAlign: re ? null : "left",
                                                        fontSize: "1.1rem"
                                                    },
                                                    children: I ? +Object(Ge.c)(I, 6) : 0
                                                })]
                                            })]
                                        })]
                                    })]
                                }), Object(N.jsxs)(m.a, {
                                    container: !0,
                                    justifyContent: ee ? "space-between" : "center",
                                    style: {
                                        width: ae ? "85%" : "95%",
                                        margin: "30px auto 30px auto"
                                    },
                                    children: [Object(N.jsx)(f.a, {
                                        className: $.colortoggle,
                                        variant: "h4",
                                        style: {
                                            color: "red",
                                            fontWeight: "bold",
                                            fontSize: ne ? null : "28px",
                                            margin: "0px auto 30px auto"
                                        },
                                        children: "POOLS"
                                    }), Object(N.jsx)(m.a, {
                                        item: !0,
                                        xs: 12,
                                        style: {
                                            border: "6px outset rgb(142, 142, 142)"
                                        },
                                        children: Object(N.jsxs)(m.a, {
                                            container: !0,
                                            style: {
                                                textAlign: "center",
                                                padding: "16px 0px 16px 0px"
                                            },
                                            children: [Object(N.jsx)(m.a, {
                                                item: !0,
                                                xs: 3,
                                                className: $.colortoggle,
                                                style: {
                                                    fontSize: "1.1rem"
                                                },
                                                children: "Pool"
                                            }), ae ? Object(N.jsx)(m.a, {
                                                item: !0,
                                                xs: 3,
                                                className: $.colortoggle,
                                                style: {
                                                    fontSize: "1.1rem"
                                                },
                                                children: "Total Staked"
                                            }) : "", Object(N.jsx)(m.a, {
                                                item: !0,
                                                xs: 3,
                                                className: $.colortoggle,
                                                style: {
                                                    fontSize: "1.1rem",
                                                    marginLeft: ae ? "0rem" : "3.5rem"
                                                },
                                                children: "Reward"
                                            })]
                                        })
                                    }), Object(N.jsx)(m.a, {
                                        item: !0,
                                        xs: 12,
                                        style: {},
                                        children: Object(N.jsxs)(lt.a, {
                                            expanded: "panel1" === ie,
                                            onChange: De("panel1"),
                                            sx: {
                                                marginBottom: "20px",
                                                boxShadow: "none"
                                            },
                                            children: [Object(N.jsx)(dt.a, {
                                                className: "borderRad",
                                                style: {
                                                    background: j ? "#101010" : "#F1F1F1",
                                                    borderRight: "6px outset rgb(142, 142, 142)",
                                                    borderLeft: "6px outset rgb(142, 142, 142)",
                                                    borderBottom: "3px outset rgb(142, 142, 142)"
                                                },
                                                children: Object(N.jsxs)(m.a, {
                                                    container: !0,
                                                    style: {
                                                        textAlign: "center",
                                                        padding: "8px 0px 8px 0px",
                                                        background: j ? "#101010" : "#F1F1F1"
                                                    },
                                                    children: [Object(N.jsx)(m.a, {
                                                        item: !0,
                                                        xs: !0,
                                                        lg: 3,
                                                        className: $.colortoggle,
                                                        children: Object(N.jsxs)(k.a, {
                                                            display: "flex",
                                                            alignItems: "center",
                                                            mt: 0,
                                                            children: [Object(N.jsx)(k.a, {
                                                                children: Object(N.jsx)("img", {
                                                                    src: xt,
                                                                    style: {
                                                                        width: "70%",
                                                                        borderRadius: "12px"
                                                                    },
                                                                    alt: ""
                                                                })
                                                            }), Object(N.jsx)(k.a, {
                                                                style: {
                                                                    fontSize: "1.1rem"
                                                                },
                                                                children: "TBL"
                                                            })]
                                                        })
                                                    }), ae ? Object(N.jsx)(m.a, {
                                                        item: !0,
                                                        xs: !0,
                                                        lg: 3,
                                                        className: $.colortoggle,
                                                        style: {
                                                            fontSize: "1.1rem",
                                                            display: "flex",
                                                            justifyContent: "center",
                                                            alignItems: "center"
                                                        },
                                                        children: Object(N.jsxs)(k.a, {
                                                            style: {
                                                                fontSize: "1.1rem"
                                                            },
                                                            children: [Y ? +Object(Ge.c)(Y.toString(), "6") : 0, " TBL"]
                                                        })
                                                    }) : "", Object(N.jsx)(m.a, {
                                                        item: !0,
                                                        xs: !0,
                                                        lg: 3,
                                                        className: $.colortoggle,
                                                        style: {
                                                            fontSize: "1.1rem",
                                                            display: "flex",
                                                            justifyContent: "center",
                                                            alignItems: "center"
                                                        },
                                                        children: Object(N.jsxs)(k.a, {
                                                            children: [V ? +V / +Q * 100 : 0, "%"]
                                                        })
                                                    }), Object(N.jsx)(m.a, {
                                                        item: !0,
                                                        xs: !0,
                                                        lg: 3,
                                                        className: $.colortoggle,
                                                        style: {
                                                            fontSize: "1.1rem",
                                                            display: "flex",
                                                            justifyContent: "center",
                                                            alignItems: "center"
                                                        },
                                                        children: Object(N.jsx)(k.a, {
                                                            children: Object(N.jsxs)(O.a, (t = {
                                                                ariaControls: "panel1a-content",
                                                                id: "panel1a-header"
                                                            }, Object(R.a)(t, "ariaControls", "panel1bh-content"), Object(R.a)(t, "id", "panel1bh-header"), Object(R.a)(t, "style", {
                                                                background: "white",
                                                                color: "black"
                                                            }), Object(R.a)(t, "children", ["Stake", " ", Object(N.jsx)("i", {
                                                                style: {
                                                                    marginLeft: "4px"
                                                                },
                                                                class: "fa-solid fa-circle-arrow-down"
                                                            })]), t))
                                                        })
                                                    })]
                                                })
                                            }), Object(N.jsx)(bt.a, {
                                                style: {
                                                    padding: "20px 0px",
                                                    background: j ? "rgb(78, 78, 78)" : "#DDDDDD"
                                                },
                                                children: Object(N.jsxs)(m.a, {
                                                    container: !0,
                                                    style: {
                                                        textAlign: "center"
                                                    },
                                                    children: [Object(N.jsxs)(m.a, {
                                                        item: !0,
                                                        xs: 12,
                                                        md: 6,
                                                        children: [Object(N.jsxs)(f.a, {
                                                            className: $.colortoggle,
                                                            children: ["My Wallet Balance:", " ", Object(N.jsx)("font", {
                                                                style: {
                                                                    color: "red"
                                                                },
                                                                children: +u > 0 && +Object(Ge.c)(u, 6) - +be > 0 ? +Object(Ge.c)(u, 6) - +be : 0
                                                            }), " ", "BANANA"]
                                                        }), Object(N.jsxs)(f.a, {
                                                            className: $.colortoggle,
                                                            style: {
                                                                marginTop: "10px"
                                                            },
                                                            children: ["Total Withdrawals:", Object(N.jsx)("font", {
                                                                style: {
                                                                    color: "red"
                                                                },
                                                                children: L ? +Object(Ge.c)(L.toString(), "6") : 0
                                                            }), " ", "BANANA"]
                                                        })]
                                                    }), Object(N.jsxs)(m.a, {
                                                        item: !0,
                                                        xs: 12,
                                                        md: 6,
                                                        children: [Object(N.jsxs)(f.a, {
                                                            className: $.colortoggle,
                                                            style: {
                                                                marginTop: ae ? "" : "10px"
                                                            },
                                                            children: ["My Staked Amount:", " ", Object(N.jsxs)("font", {
                                                                style: {
                                                                    color: "red"
                                                                },
                                                                children: [" ", Y ? +Object(Ge.c)(Y.toString(), "6") : 0]
                                                            }), " ", "BANANA"]
                                                        }), Object(N.jsxs)(f.a, {
                                                            className: $.colortoggle,
                                                            style: {
                                                                marginTop: "10px"
                                                            },
                                                            children: ["My Current Profit:", " ", Object(N.jsx)("font", {
                                                                style: {
                                                                    color: "red"
                                                                },
                                                                children: z ? +Object(Ge.c)(z.toString(), "6") : 0
                                                            }), " ", "BANANA"]
                                                        })]
                                                    }), Object(N.jsx)(m.a, {
                                                        item: !0,
                                                        xs: 12,
                                                        style: {
                                                            margin: "auto",
                                                            padding: "10px 0px 0px 0px"
                                                        },
                                                        children: Object(N.jsx)("hr", {})
                                                    }), Object(N.jsxs)(m.a, {
                                                        container: !0,
                                                        justifyContent: "center",
                                                        style: {
                                                            textAlign: "left"
                                                        },
                                                        children: [Object(N.jsxs)(m.a, {
                                                            style: {
                                                                marginBottom: "20px"
                                                            },
                                                            align: "center",
                                                            item: !0,
                                                            xs: 12,
                                                            md: 4,
                                                            children: [Object(N.jsx)(k.a, {
                                                                style: {
                                                                    width: "80%",
                                                                    margin: "auto",
                                                                    textAlign: "left"
                                                                },
                                                                children: Object(N.jsx)(f.a, {
                                                                    style: {
                                                                        marginBottom: "10px",
                                                                        textAlign: "left",
                                                                        color: "red"
                                                                    },
                                                                    children: "Enter BANANA Amount:"
                                                                })
                                                            }), Object(N.jsx)(k.a, {
                                                                style: {
                                                                    width: "100%"
                                                                },
                                                                children: Object(N.jsx)("input", {
                                                                    onChange: function(e) {
                                                                        return t = e.target.value, void(+Object(Ge.c)(u.toString(), "6") < t ? A.b.error("You have insufficient BANANA.") : je(t));
                                                                        var t
                                                                    },
                                                                    value: be,
                                                                    className: "girdinput",
                                                                    style: {
                                                                        background: "#D4D4D4",
                                                                        border: "0px",
                                                                        width: "80%",
                                                                        height: "40px",
                                                                        borderRadius: "8px",
                                                                        textIndent: "6px",
                                                                        marginBottom: "10px"
                                                                    },
                                                                    type: "number",
                                                                    min: "0",
                                                                    step: "0.000001",
                                                                    placeholder: "Amount",
                                                                    required: ""
                                                                })
                                                            }), Object(N.jsxs)("button", {
                                                                onClick: Le,
                                                                style: {
                                                                    background: "white",
                                                                    width: "80%",
                                                                    height: "40px",
                                                                    borderRadius: "8px",
                                                                    border: "0px",
                                                                    cursor: "pointer"
                                                                },
                                                                type: "button",
                                                                children: [Object(N.jsx)("i", {
                                                                    className: "fas fa-donate"
                                                                }), " Stake"]
                                                            })]
                                                        }), Object(N.jsxs)(m.a, {
                                                            style: {
                                                                marginBottom: "20px"
                                                            },
                                                            align: "center",
                                                            item: !0,
                                                            xs: 12,
                                                            md: 4,
                                                            children: [Object(N.jsx)(k.a, {
                                                                style: {
                                                                    width: "80%",
                                                                    margin: "auto",
                                                                    textAlign: "left"
                                                                }
                                                            }), Object(N.jsxs)(k.a, {
                                                                style: {
                                                                    width: "100%"
                                                                },
                                                                mt: ae ? 11 : 3,
                                                                children: [Object(N.jsxs)("button", {
                                                                    onClick: function() {
                                                                        c ? X < +yt()().format("X") ? A.b.error("You can Reinvest before withDraw time.") : ze(1) : A.b.error("please connect to wallet first")
                                                                    },
                                                                    style: {
                                                                        background: "white",
                                                                        width: "80%",
                                                                        height: "40px",
                                                                        borderRadius: "8px",
                                                                        border: "0px",
                                                                        cursor: "pointer"
                                                                    },
                                                                    type: "button",
                                                                    children: [Object(N.jsx)("i", {
                                                                        style: {
                                                                            marginRight: "10px"
                                                                        },
                                                                        className: "fas fa-hand-holding-usd"
                                                                    }), "Reinvest"]
                                                                }), Object(N.jsx)("br", {}), X < +yt()().format("X")]
                                                            })]
                                                        }), Object(N.jsx)(m.a, {
                                                            style: {
                                                                marginBottom: "20px"
                                                            },
                                                            align: "center",
                                                            item: !0,
                                                            xs: 12,
                                                            md: 4,
                                                            children: Object(N.jsx)(k.a, {
                                                                style: {
                                                                    width: "100%"
                                                                },
                                                                mt: ae ? 11 : 3,
                                                                children: Object(N.jsxs)("button", {
                                                                    onClick: function() {
                                                                        c ? Pe(1, c) : A.b.error("please connect to wallet first")
                                                                    },
                                                                    style: {
                                                                        background: "white",
                                                                        width: "80%",
                                                                        height: "40px",
                                                                        borderRadius: "8px",
                                                                        border: "0px",
                                                                        cursor: "pointer"
                                                                    },
                                                                    type: "button",
                                                                    children: [Object(N.jsx)("i", {
                                                                        style: {
                                                                            marginRight: "10px"
                                                                        },
                                                                        className: "fad fa-treasure-chest"
                                                                    }), "Withdraw Reward"]
                                                                })
                                                            })
                                                        }), Object(N.jsx)(m.a, {
                                                            style: {
                                                                marginBottom: "20px"
                                                            },
                                                            align: "center",
                                                            item: !0,
                                                            xs: 12,
                                                            lg: 4,
                                                            children: Object(N.jsxs)(k.a, {
                                                                style: {
                                                                    width: "100%"
                                                                },
                                                                mt: 1,
                                                                children: [Object(N.jsxs)("button", {
                                                                    onClick: function() {
                                                                        if (c) {
                                                                            if (+yt()().format("X") < +K) return A.b.error("You cannot witdraw. your unstaked Time not reached.");
                                                                            if (+yt()().format("X") > +X) return A.b.error("You can only witdraw.");
                                                                            Ze(1, c)
                                                                        } else A.b.error("please connect to wallet first")
                                                                    },
                                                                    style: {
                                                                        background: "white",
                                                                        width: "80%",
                                                                        height: "40px",
                                                                        borderRadius: "8px",
                                                                        border: "0px",
                                                                        cursor: "pointer"
                                                                    },
                                                                    type: "button",
                                                                    children: [Object(N.jsx)("i", {
                                                                        className: "fad fa-chevron-circle-left",
                                                                        style: {
                                                                            marginRight: "10px"
                                                                        }
                                                                    }), "unFreeze"]
                                                                }), Object(N.jsx)("br", {}), Object(N.jsx)("span", {
                                                                    style: {
                                                                        color: "red"
                                                                    },
                                                                    children: +K > 0 ? (null === Ae || void 0 === Ae ? void 0 : Ae.time_days) + ":" + (null === Ae || void 0 === Ae ? void 0 : Ae.time_Hours) + ":" + (null === Ae || void 0 === Ae ? void 0 : Ae.time_Minusts) + ":" + (null === Ae || void 0 === Ae ? void 0 : Ae.time_seconds) : "00:00:00 "
                                                                })]
                                                            })
                                                        }), Object(N.jsx)(m.a, {
                                                            style: {
                                                                marginBottom: "20px"
                                                            },
                                                            align: "center",
                                                            item: !0,
                                                            xs: 12,
                                                            lg: 4,
                                                            children: Object(N.jsxs)(k.a, {
                                                                style: {
                                                                    width: "100%"
                                                                },
                                                                mt: 1,
                                                                children: [Object(N.jsxs)("button", {
                                                                    onClick: function() {
                                                                        c ? X > +yt()().format("X") ? A.b.error("You cannot witdraw. your time did not End.") : Ue(1, c) : A.b.error("please connect to wallet first")
                                                                    },
                                                                    style: {
                                                                        background: "white",
                                                                        width: "80%",
                                                                        height: "40px",
                                                                        borderRadius: "8px",
                                                                        border: "0px",
                                                                        cursor: "pointer"
                                                                    },
                                                                    type: "button",
                                                                    children: [Object(N.jsx)("i", {
                                                                        className: "fas fa-money-bill",
                                                                        style: {
                                                                            marginRight: "10px"
                                                                        }
                                                                    }), "Complete Withdraw"]
                                                                }), Object(N.jsx)("br", {}), Object(N.jsx)("span", {
                                                                    style: {
                                                                        color: "red"
                                                                    },
                                                                    children: +Ve > 0 ? (null === ke || void 0 === ke ? void 0 : ke.time_days) + ":" + (null === ke || void 0 === ke ? void 0 : ke.time_Hours) + ":" + (null === ke || void 0 === ke ? void 0 : ke.time_Minusts) + ":" + (null === ke || void 0 === ke ? void 0 : ke.time_seconds) : "00:00:00"
                                                                })]
                                                            })
                                                        })]
                                                    }), Object(N.jsx)(m.a, {
                                                        style: {
                                                            width: "100%",
                                                            margin: "auto",
                                                            marginTop: "30px"
                                                        },
                                                        container: !0,
                                                        children: Object(N.jsxs)(k.a, {
                                                            style: {
                                                                width: "90%",
                                                                margin: "auto",
                                                                textAlign: "left"
                                                            },
                                                            children: [Object(N.jsxs)(f.a, {
                                                                style: {
                                                                    color: "red"
                                                                },
                                                                children: [Object(N.jsx)("i", {
                                                                    className: "fas fa-info-circle"
                                                                }), " Rules:"]
                                                            }), Object(N.jsxs)(W.a, {
                                                                children: [Object(N.jsxs)(P.a, {
                                                                    children: [Object(N.jsx)(jt.a, {
                                                                        style: {
                                                                            marginLeft: "14px"
                                                                        },
                                                                        children: Object(N.jsx)("i", {
                                                                            style: {
                                                                                fontSize: "10px",
                                                                                color: j ? "red" : "black"
                                                                            },
                                                                            className: "fa-solid fa-circle"
                                                                        })
                                                                    }), Object(N.jsxs)(U.a, {
                                                                        style: {
                                                                            marginLeft: "-20px"
                                                                        },
                                                                        children: [Object(N.jsx)("span", {
                                                                            className: $.colortoggle,
                                                                            children: "Stake"
                                                                        }), " ", Object(N.jsx)("font", {
                                                                            style: {
                                                                                color: "red"
                                                                            },
                                                                            children: "BANANA"
                                                                        }), " ", Object(N.jsx)("span", {
                                                                            className: $.colortoggle,
                                                                            children: "to earn"
                                                                        }), " ", Object(N.jsx)("font", {
                                                                            style: {
                                                                                color: "red"
                                                                            },
                                                                            children: "BANANA."
                                                                        })]
                                                                    })]
                                                                }), Object(N.jsxs)(P.a, {
                                                                    children: [Object(N.jsx)(jt.a, {
                                                                        style: {
                                                                            marginLeft: "14px"
                                                                        },
                                                                        children: Object(N.jsx)("i", {
                                                                            style: {
                                                                                fontSize: "10px",
                                                                                color: j ? "red" : "black"
                                                                            },
                                                                            className: "fa-solid fa-circle"
                                                                        })
                                                                    }), Object(N.jsxs)(U.a, {
                                                                        style: {
                                                                            marginLeft: "-20px"
                                                                        },
                                                                        children: [Object(N.jsx)("span", {
                                                                            className: $.colortoggle,
                                                                            children: "The minimum staking amount is"
                                                                        }), " ", Object(N.jsx)("font", {
                                                                            style: {
                                                                                color: "red"
                                                                            },
                                                                            children: "100 BANANA."
                                                                        }), " "]
                                                                    })]
                                                                }), Object(N.jsxs)(P.a, {
                                                                    children: [Object(N.jsx)(jt.a, {
                                                                        style: {
                                                                            marginLeft: "14px"
                                                                        },
                                                                        children: Object(N.jsx)("i", {
                                                                            style: {
                                                                                fontSize: "10px",
                                                                                color: j ? "red" : "black"
                                                                            },
                                                                            className: "fa-solid fa-circle"
                                                                        })
                                                                    }), Object(N.jsxs)(U.a, {
                                                                        style: {
                                                                            marginLeft: "-20px"
                                                                        },
                                                                        children: [Object(N.jsx)("span", {
                                                                            className: $.colortoggle,
                                                                            children: "You can reinvest"
                                                                        }), " ", Object(N.jsx)("font", {
                                                                            style: {
                                                                                color: "red"
                                                                            },
                                                                            children: "your current profit"
                                                                        }), " ", Object(N.jsx)("span", {
                                                                            className: $.colortoggle,
                                                                            children: "at anytime and it will be added to your staked amount."
                                                                        })]
                                                                    })]
                                                                }), Object(N.jsxs)(P.a, {
                                                                    children: [Object(N.jsx)(jt.a, {
                                                                        style: {
                                                                            marginLeft: "14px"
                                                                        },
                                                                        children: Object(N.jsx)("i", {
                                                                            style: {
                                                                                fontSize: "10px",
                                                                                color: j ? "red" : "black"
                                                                            },
                                                                            className: "fa-solid fa-circle"
                                                                        })
                                                                    }), Object(N.jsxs)(U.a, {
                                                                        style: {
                                                                            marginLeft: "-20px"
                                                                        },
                                                                        children: [Object(N.jsxs)("span", {
                                                                            className: $.colortoggle,
                                                                            children: ["You can unFreeze your", " "]
                                                                        }), Object(N.jsx)("font", {
                                                                            style: {
                                                                                color: "red"
                                                                            },
                                                                            children: "staked BANANA + BANANA Current profit"
                                                                        }), " ", Object(N.jsx)("span", {
                                                                            className: $.colortoggle,
                                                                            children: "after"
                                                                        }), " ", Object(N.jsx)("font", {
                                                                            style: {
                                                                                color: "red"
                                                                            },
                                                                            children: "3"
                                                                        }), " ", Object(N.jsx)("span", {
                                                                            className: $.colortoggle,
                                                                            children: "days."
                                                                        })]
                                                                    })]
                                                                }), Object(N.jsxs)(P.a, {
                                                                    children: [Object(N.jsx)(jt.a, {
                                                                        style: {
                                                                            marginLeft: "14px"
                                                                        },
                                                                        children: Object(N.jsx)("i", {
                                                                            style: {
                                                                                fontSize: "10px",
                                                                                color: j ? "red" : "black"
                                                                            },
                                                                            className: "fa-solid fa-circle"
                                                                        })
                                                                    }), Object(N.jsxs)(U.a, {
                                                                        style: {
                                                                            marginLeft: "-20px"
                                                                        },
                                                                        children: [Object(N.jsx)("span", {
                                                                            className: $.colortoggle,
                                                                            children: "You can withdraw your"
                                                                        }), " ", Object(N.jsx)("font", {
                                                                            style: {
                                                                                color: "red"
                                                                            },
                                                                            children: "BANANA"
                                                                        }), " ", Object(N.jsx)("span", {
                                                                            className: $.colortoggle,
                                                                            children: "rewards at anytime."
                                                                        })]
                                                                    })]
                                                                })]
                                                            })]
                                                        })
                                                    })]
                                                })
                                            })]
                                        })
                                    }), Object(N.jsx)(m.a, {
                                        item: !0,
                                        xs: 12,
                                        style: {
                                            background: j ? "#101010" : "#F1F1F1"
                                        },
                                        children: Object(N.jsxs)(lt.a, {
                                            expanded: "panel2" === ie,
                                            onChange: De("panel2"),
                                            sx: {
                                                marginBottom: "20px",
                                                background: j ? "#101010" : "#F1F1F1",
                                                boxShadow: "none"
                                            },
                                            children: [Object(N.jsx)(dt.a, {
                                                className: "borderRad",
                                                style: {
                                                    background: j ? "#101010" : "#F1F1F1",
                                                    borderRight: "6px outset rgb(142, 142, 142)",
                                                    borderLeft: "6px outset rgb(142, 142, 142)",
                                                    borderBottom: "6px outset rgb(142, 142, 142)"
                                                },
                                                children: Object(N.jsxs)(m.a, {
                                                    container: !0,
                                                    style: {
                                                        textAlign: "center",
                                                        padding: "8px 0px 8px 0px"
                                                    },
                                                    children: [Object(N.jsx)(m.a, {
                                                        item: !0,
                                                        xs: !0,
                                                        lg: 3,
                                                        className: $.colortoggle,
                                                        children: Object(N.jsxs)(k.a, {
                                                            display: "flex",
                                                            alignItems: "center",
                                                            children: [Object(N.jsx)(k.a, {
                                                                children: Object(N.jsx)("img", {
                                                                    src: pt,
                                                                    style: {
                                                                        width: "70%",
                                                                        borderRadius: "12px"
                                                                    },
                                                                    alt: ""
                                                                })
                                                            }), Object(N.jsx)(k.a, {
                                                                style: {
                                                                    fontSize: "1.1rem"
                                                                },
                                                                children: "NFT  "
                                                            })]
                                                        })
                                                    }), ae ? Object(N.jsxs)(m.a, {
                                                        item: !0,
                                                        xs: !0,
                                                        lg: 3,
                                                        className: $.colortoggle,
                                                        style: {
                                                            fontSize: "1.1rem",
                                                            display: "flex",
                                                            justifyContent: "center",
                                                            alignItems: "center"
                                                        },
                                                        children: [+Z > 0 ? +Z : 0, " NFT"]
                                                    }) : "", Object(N.jsx)(m.a, {
                                                        item: !0,
                                                        xs: !0,
                                                        lg: 3,
                                                        className: $.colortoggle,
                                                        style: {
                                                            fontSize: "1.1rem",
                                                            display: "flex",
                                                            justifyContent: "center",
                                                            alignItems: "center"
                                                        },
                                                        children: Object(N.jsx)(k.a, {
                                                            children: H ? Object(Ge.c)(H.toString(), "6") : 0
                                                        })
                                                    }), Object(N.jsx)(m.a, {
                                                        item: !0,
                                                        xs: !0,
                                                        lg: 3,
                                                        className: $.colortoggle,
                                                        style: {
                                                            fontSize: "1.1rem",
                                                            display: "flex",
                                                            justifyContent: "center",
                                                            alignItems: "center"
                                                        },
                                                        children: Object(N.jsxs)(O.a, (n = {
                                                            ariaControls: "panel1a-content",
                                                            id: "panel1a-header"
                                                        }, Object(R.a)(n, "ariaControls", "panel1bh-content"), Object(R.a)(n, "id", "panel1bh-header"), Object(R.a)(n, "style", {
                                                            background: "white",
                                                            color: "black"
                                                        }), Object(R.a)(n, "children", ["Stake", " ", Object(N.jsx)("i", {
                                                            style: {
                                                                marginLeft: "4px"
                                                            },
                                                            className: "fa-solid fa-circle-arrow-down"
                                                        })]), n))
                                                    })]
                                                })
                                            }), Object(N.jsx)(bt.a, {
                                                style: {
                                                    padding: "20px 0px",
                                                    background: j ? "rgb(78, 78, 78)" : "#DDDDDD"
                                                },
                                                children: Object(N.jsxs)(m.a, {
                                                    container: !0,
                                                    style: {
                                                        textAlign: "center"
                                                    },
                                                    children: [Object(N.jsxs)(m.a, {
                                                        item: !0,
                                                        xs: 12,
                                                        md: 6,
                                                        children: [Object(N.jsxs)(f.a, {
                                                            className: $.colortoggle,
                                                            children: ["My Wallet Balance:", " ", Object(N.jsx)("font", {
                                                                style: {
                                                                    color: "red"
                                                                },
                                                                children: p.length
                                                            }), " ", "NFT"]
                                                        }), Object(N.jsxs)(f.a, {
                                                            className: $.colortoggle,
                                                            style: {
                                                                marginTop: "10px"
                                                            },
                                                            children: ["Total Withdrawals:", Object(N.jsx)("font", {
                                                                style: {
                                                                    color: "red"
                                                                },
                                                                children: +D ? Object(Ge.c)(D.toString(), "6") : 0
                                                            }), " ", "BANANA"]
                                                        })]
                                                    }), Object(N.jsxs)(m.a, {
                                                        item: !0,
                                                        xs: 12,
                                                        md: 6,
                                                        children: [Object(N.jsxs)(f.a, {
                                                            className: $.colortoggle,
                                                            style: {
                                                                marginTop: ae ? "" : "10px"
                                                            },
                                                            children: ["My Staked Amount:", " ", Object(N.jsx)("font", {
                                                                style: {
                                                                    color: "red",
                                                                    marginTop: "10px"
                                                                },
                                                                children: +Z > 0 ? +Z : 0
                                                            }), " ", "NFT"]
                                                        }), Object(N.jsxs)(f.a, {
                                                            className: $.colortoggle,
                                                            style: {
                                                                marginTop: "10px"
                                                            },
                                                            children: ["My Current Profit:", " ", Object(N.jsx)("font", {
                                                                style: {
                                                                    color: "red"
                                                                },
                                                                children: G ? +Object(Ge.c)(G.toString(), "6") : 0
                                                            }), " ", "BANANA"]
                                                        })]
                                                    }), Object(N.jsx)(m.a, {
                                                        style: {
                                                            margin: "20px 0px 0px 0px"
                                                        },
                                                        item: !0,
                                                        xs: 12,
                                                        children: Object(N.jsxs)(f.a, {
                                                            className: $.colortoggle,
                                                            style: {
                                                                textAlign: "center"
                                                            },
                                                            children: [" ", Object(N.jsx)("font", {
                                                                style: {
                                                                    color: "red"
                                                                }
                                                            })]
                                                        })
                                                    }), Object(N.jsx)(m.a, {
                                                        item: !0,
                                                        xs: 12,
                                                        style: {
                                                            margin: "auto",
                                                            padding: "10px 0px 0px 0px"
                                                        },
                                                        children: Object(N.jsx)("hr", {})
                                                    }), Object(N.jsxs)(m.a, {
                                                        container: !0,
                                                        justifyContent: "center",
                                                        style: {
                                                            textAlign: "left"
                                                        },
                                                        children: [Object(N.jsxs)(m.a, {
                                                            style: {
                                                                marginBottom: "20px"
                                                            },
                                                            align: "center",
                                                            item: !0,
                                                            xs: 12,
                                                            md: 4,
                                                            children: [Object(N.jsx)(k.a, {
                                                                style: {
                                                                    width: "80%",
                                                                    margin: "auto",
                                                                    textAlign: "left"
                                                                },
                                                                children: Object(N.jsx)(f.a, {
                                                                    style: {
                                                                        color: "red",
                                                                        marginBottom: "10px",
                                                                        textAlign: "left"
                                                                    },
                                                                    children: "Select Nft Amount:"
                                                                })
                                                            }), Object(N.jsx)(k.a, {
                                                                mt: 2,
                                                                children: Object(N.jsxs)("button", {
                                                                    onClick: function() {
                                                                        p.length > 0 ? x(!0) : c ? A.b.error("please add Cute Ape NFT!") : A.b.error("please connect to wallet first")
                                                                    },
                                                                    style: {
                                                                        cursor: "pointer",
                                                                        background: "white",
                                                                        width: "80%",
                                                                        height: "40px",
                                                                        borderRadius: "8px",
                                                                        border: "0px"
                                                                    },
                                                                    type: "button",
                                                                    children: [Object(N.jsx)("i", {
                                                                        className: "fas fa-donate"
                                                                    }), " Stake"]
                                                                })
                                                            })]
                                                        }), Object(N.jsx)(m.a, {
                                                            style: {
                                                                marginBottom: "20px"
                                                            },
                                                            align: "center",
                                                            item: !0,
                                                            xs: 12,
                                                            md: 4,
                                                            children: Object(N.jsx)(k.a, {
                                                                mt: ae ? 5 : 3,
                                                                children: Object(N.jsxs)("button", {
                                                                    onClick: function() {
                                                                        c ? Pe(0, c) : A.b.error("please connect to wallet first")
                                                                    },
                                                                    style: {
                                                                        background: "white",
                                                                        width: "80%",
                                                                        height: "40px",
                                                                        borderRadius: "8px",
                                                                        border: "0px",
                                                                        cursor: "pointer"
                                                                    },
                                                                    type: "button",
                                                                    children: [Object(N.jsx)("i", {
                                                                        style: {
                                                                            marginRight: "10px"
                                                                        },
                                                                        className: "fad fa-treasure-chest"
                                                                    }), "Withdraw Reward"]
                                                                })
                                                            })
                                                        }), Object(N.jsx)(m.a, {
                                                            style: {
                                                                marginBottom: "20px"
                                                            },
                                                            align: "center",
                                                            item: !0,
                                                            xs: 12,
                                                            md: 4,
                                                            children: Object(N.jsxs)(k.a, {
                                                                mt: ae ? 5 : 3,
                                                                children: [Object(N.jsxs)("button", {
                                                                    onClick: function() {
                                                                        if (c) {
                                                                            if (+yt()().format("X") < +q) return A.b.error("You cannot witdraw. your unstaked Time not reached.");
                                                                            if (+yt()().format("X") > +J) return A.b.error("You can only witdraw.");
                                                                            Ye(0)
                                                                        } else A.b.error("please connect to wallet first")
                                                                    },
                                                                    style: {
                                                                        background: "white",
                                                                        width: "80%",
                                                                        height: "40px",
                                                                        borderRadius: "8px",
                                                                        border: "0px",
                                                                        cursor: "pointer"
                                                                    },
                                                                    type: "button",
                                                                    children: [Object(N.jsx)("i", {
                                                                        style: {
                                                                            marginRight: "10px"
                                                                        },
                                                                        className: "fas fa-hand-holding-usd"
                                                                    }), "Unfreeze"]
                                                                }), Object(N.jsx)("br", {}), Object(N.jsxs)("span", {
                                                                    style: {
                                                                        color: "red",
                                                                        marginTop: "10px"
                                                                    },
                                                                    children: [" ", +q > 0 ? (null === Ie || void 0 === Ie ? void 0 : Ie.time_days) + ":" + (null === Ie || void 0 === Ie ? void 0 : Ie.time_Hours) + ":" + (null === Ie || void 0 === Ie ? void 0 : Ie.time_Minusts) + ":" + (null === Ie || void 0 === Ie ? void 0 : Ie.time_seconds) : "00:00:00"]
                                                                })]
                                                            })
                                                        }), Object(N.jsx)(m.a, {
                                                            style: {
                                                                marginBottom: "20px"
                                                            },
                                                            align: "center",
                                                            item: !0,
                                                            xs: 12,
                                                            md: 4,
                                                            children: Object(N.jsxs)(k.a, {
                                                                mt: 1,
                                                                children: [Object(N.jsxs)("button", {
                                                                    onClick: function() {
                                                                        c ? J > +yt()().format("X") ? A.b.error("You cannot witdraw. your time didnot start.") : Ue(0, c) : A.b.error("please connect to wallet first")
                                                                    },
                                                                    style: {
                                                                        background: "white",
                                                                        width: "80%",
                                                                        height: "40px",
                                                                        borderRadius: "8px",
                                                                        border: "0px",
                                                                        cursor: "pointer"
                                                                    },
                                                                    type: "button",
                                                                    children: [Object(N.jsx)("i", {
                                                                        className: "fas fa-money-bill",
                                                                        style: {
                                                                            marginRight: "10px"
                                                                        }
                                                                    }), "Withdraw"]
                                                                }), Object(N.jsx)("br", {}), Object(N.jsxs)("span", {
                                                                    style: {
                                                                        color: "red"
                                                                    },
                                                                    children: [" ", +He > 0 ? (null === me || void 0 === me ? void 0 : me.time_days) + ":" + (null === me || void 0 === me ? void 0 : me.time_Hours) + ":" + (null === me || void 0 === me ? void 0 : me.time_Minusts) + ":" + (null === me || void 0 === me ? void 0 : me.time_seconds) : "00:00:00"]
                                                                })]
                                                            })
                                                        })]
                                                    }), Object(N.jsx)(m.a, {
                                                        style: {
                                                            width: "100%",
                                                            margin: "auto",
                                                            marginTop: "30px"
                                                        },
                                                        container: !0,
                                                        children: Object(N.jsxs)(k.a, {
                                                            style: {
                                                                width: "90%",
                                                                margin: "auto",
                                                                textAlign: "left"
                                                            },
                                                            children: [Object(N.jsxs)(f.a, {
                                                                style: {
                                                                    color: "red"
                                                                },
                                                                children: [Object(N.jsx)("i", {
                                                                    className: "fas fa-info-circle"
                                                                }), " Rules:"]
                                                            }), Object(N.jsxs)(W.a, {
                                                                children: [Object(N.jsxs)(P.a, {
                                                                    children: [Object(N.jsx)(jt.a, {
                                                                        style: {
                                                                            marginLeft: "14px"
                                                                        },
                                                                        children: Object(N.jsx)("i", {
                                                                            style: {
                                                                                fontSize: "10px",
                                                                                color: j ? "red" : "black"
                                                                            },
                                                                            className: "fa-solid fa-circle"
                                                                        })
                                                                    }), Object(N.jsxs)(U.a, {
                                                                        style: {
                                                                            marginLeft: "-20px"
                                                                        },
                                                                        children: [Object(N.jsx)("span", {
                                                                            className: $.colortoggle,
                                                                            children: "Stake"
                                                                        }), " ", Object(N.jsx)("font", {
                                                                            style: {
                                                                                color: "red"
                                                                            },
                                                                            children: "NFT"
                                                                        }), " ", Object(N.jsx)("span", {
                                                                            className: $.colortoggle,
                                                                            children: "to earn"
                                                                        }), " ", Object(N.jsx)("font", {
                                                                            style: {
                                                                                color: "red"
                                                                            },
                                                                            children: "BANANA."
                                                                        })]
                                                                    })]
                                                                }), Object(N.jsxs)(P.a, {
                                                                    children: [Object(N.jsx)(jt.a, {
                                                                        style: {
                                                                            marginLeft: "14px"
                                                                        },
                                                                        children: Object(N.jsx)("i", {
                                                                            style: {
                                                                                fontSize: "10px",
                                                                                color: j ? "red" : "black"
                                                                            },
                                                                            className: "fa-solid fa-circle"
                                                                        })
                                                                    }), Object(N.jsxs)(U.a, {
                                                                        style: {
                                                                            marginLeft: "-20px"
                                                                        },
                                                                        children: [Object(N.jsxs)("span", {
                                                                            className: $.colortoggle,
                                                                            children: ["You can unFreeze your", " "]
                                                                        }), Object(N.jsx)("font", {
                                                                            style: {
                                                                                color: "red"
                                                                            },
                                                                            children: "NFT + BANANA Current profit"
                                                                        }), " ", Object(N.jsx)("span", {
                                                                            className: $.colortoggle,
                                                                            children: "after"
                                                                        }), " ", Object(N.jsx)("font", {
                                                                            style: {
                                                                                color: "red"
                                                                            },
                                                                            children: "3"
                                                                        }), " ", Object(N.jsx)("span", {
                                                                            className: $.colortoggle,
                                                                            children: "days."
                                                                        })]
                                                                    })]
                                                                }), Object(N.jsxs)(P.a, {
                                                                    children: [Object(N.jsx)(jt.a, {
                                                                        style: {
                                                                            marginLeft: "14px"
                                                                        },
                                                                        children: Object(N.jsx)("i", {
                                                                            style: {
                                                                                fontSize: "10px",
                                                                                color: j ? "red" : "black"
                                                                            },
                                                                            className: "fa-solid fa-circle"
                                                                        })
                                                                    }), Object(N.jsxs)(U.a, {
                                                                        style: {
                                                                            marginLeft: "-20px"
                                                                        },
                                                                        children: [Object(N.jsx)("span", {
                                                                            className: $.colortoggle,
                                                                            children: "You can withdraw your"
                                                                        }), " ", Object(N.jsx)("font", {
                                                                            style: {
                                                                                color: "red"
                                                                            },
                                                                            children: "BANANA"
                                                                        }), " ", Object(N.jsx)("span", {
                                                                            className: $.colortoggle,
                                                                            children: "rewards at anytime."
                                                                        })]
                                                                    })]
                                                                })]
                                                            })]
                                                        })
                                                    })]
                                                })
                                            })]
                                        })
                                    })]
                                }), Object(N.jsxs)(m.a, {
                                    container: !0,
                                    style: {
                                        marginTop: "40px",
                                        padding: "0px 0px 0px 40px"
                                    },
                                    justifyContent: "flex-start",
                                    children: [Object(N.jsx)(m.a, {
                                        item: !0,
                                        children: Object(N.jsx)("a", {
                                            href: "https://t.me/tblocksw",
                                            target: "_blank",
                                            children: Object(N.jsx)("i", {
                                                style: {
                                                    color: "rgb(51, 51, 51)",
                                                    fontSize: "30px"
                                                },
                                                className: "fab fa-telegram"
                                            })
                                        })
                                    }), Object(N.jsx)(m.a, {
                                        item: !0,
                                        children: Object(N.jsx)("a", {
                                            href: "https://twitter.com/tblocksw",
                                            target: "_blank",
                                            children: Object(N.jsx)("i", {
                                                style: {
                                                    color: "rgb(51, 51, 51)",
                                                    marginLeft: "8px",
                                                    fontSize: "30px"
                                                },
                                                className: "fab fa-twitter"
                                            })
                                        })
                                    }), Object(N.jsx)(m.a, {
                                        item: !0,
                                        children: Object(N.jsx)("a", {
                                            href: "https://discord.gg/ChfDagP9",
                                            target: "_blank",
                                            children: Object(N.jsx)("i", {
                                                style: {
                                                    color: "rgb(51, 51, 51)",
                                                    marginLeft: "8px",
                                                    fontSize: "30px"
                                                },
                                                className: "fab fa-discord"
                                            })
                                        })
                                    }), Object(N.jsx)(m.a, {
                                        item: !0,
                                        children: Object(N.jsx)("a", {
                                            href: "https://peridot-heather-e84.notion.site/Getting-Started-ad66f7fe2a654ebfbbdbc6861116991d",
                                            target: "_blank",
                                            children: Object(N.jsx)("i", {
                                                style: {
                                                    color: "rgb(51, 51, 51)",
                                                    marginLeft: "9px",
                                                    fontSize: "30px"
                                                },
                                                className: "fas fa-sticky-note"
                                            })
                                        })
                                    })]
                                })]
                            })
                        })]
                    })
                },
                vt = n.p + "media/tron.64128ba3.png",
                Tt = n.p + "media/eth.23ca4a5f.png",
                At = n.p + "media/swap.0b6ea480.svg",
                St = (n(530), n(27), n(142), n(403), n(1011), n.p, n(161)),
                Nt = n(629),
                Ct = n(625),
                It = n.n(Ct),
                Rt = {
                    walletconnect: {
                        package: Nt.a,
                        options: {
                            networkUrl: "https://mainnet.infura.io/v3/36fc2665f5504bc18c3b7f9fab0e0c46",
                            rpc: {
                                1: "https://mainnet.infura.io/v3/36fc2665f5504bc18c3b7f9fab0e0c46"
                            },
                            chainId: 1
                        }
                    }
                },
                Mt = new It.a({
                    network: "mainnet",
                    cacheProvider: !0,
                    providerOptions: Rt,
                    theme: {
                        background: "rgb(0, 0, 0)",
                        main: "rgb(199, 199, 199)",
                        secondary: "rgb(136, 136, 136)",
                        hover: "rgb(16, 26, 32)"
                    }
                });
            var Ft = {
                    provider: null,
                    web3Provider: null,
                    account: null,
                    chainId: null,
                    signer: null,
                    currentBlock: null
                },
                Et = Object(a.createContext)(Ft),
                Bt = function(e) {
                    var t = e.children,
                        n = Object(a.useState)(Ft),
                        c = Object(d.a)(n, 2),
                        s = c[0],
                        i = c[1],
                        b = function() {
                            var e = Object(l.a)(Object(o.a)().mark((function e() {
                                var t, n, a, r, c, l;
                                return Object(o.a)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, Mt.connect();
                                        case 2:
                                            return t = e.sent, n = new St.providers.Web3Provider(t), a = n.getSigner(), e.next = 7, a.getAddress();
                                        case 7:
                                            return r = e.sent, e.next = 10, n.getNetwork();
                                        case 10:
                                            return c = e.sent, e.next = 13, n.getBlockNumber();
                                        case 13:
                                            l = e.sent, i(Object(M.a)(Object(M.a)({}, s), {}, {
                                                provider: t,
                                                web3Provider: n,
                                                account: r,
                                                signer: a,
                                                chainId: c.chainId,
                                                currentBlock: l
                                            }));
                                        case 15:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        j = r.a.useCallback(Object(l.a)(Object(o.a)().mark((function e() {
                            var t;
                            return Object(o.a)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, Mt.clearCachedProvider();
                                    case 2:
                                        if (null === (t = s.provider) || void 0 === t || !t.disconnect || "function" !== typeof s.provider.disconnect) {
                                            e.next = 5;
                                            break
                                        }
                                        return e.next = 5, s.provider.disconnect();
                                    case 5:
                                        i(Object(M.a)(Object(M.a)({}, s), {}, {
                                            provider: null,
                                            web3Provider: null,
                                            account: null,
                                            chainId: null,
                                            signer: null
                                        })), window.location.reload();
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), [s.provider]);
                    return r.a.useEffect((function() {
                        var e;
                        if (null !== (e = s.provider) && void 0 !== e && e.on) {
                            var t = function(e) {
                                    i(Object(M.a)(Object(M.a)({}, s), {}, {
                                        account: e[0]
                                    }))
                                },
                                n = function(e) {
                                    window.location.reload()
                                },
                                a = function(e) {
                                    j()
                                };
                            return s.provider.on("accountsChanged", t), s.provider.on("chainChanged", n), s.provider.on("disconnect", a),
                                function() {
                                    s.provider.removeListener && (s.provider.removeListener("accountsChanged", t), s.provider.removeListener("chainChanged", n), s.provider.removeListener("disconnect", a))
                                }
                        }
                    }), [s.provider, j]), Object(N.jsx)(Et.Provider, {
                        value: {
                            account: s.account,
                            signer: s.signer,
                            connect: b,
                            disconnect: j,
                            currentBlock: s.currentBlock
                        },
                        children: t
                    })
                },
                Dt = Object(j.a)((function(e) {
                    return {
                        bw: {
                            color: e.palette.secondary.bw
                        },
                        gw: {
                            color: e.palette.secondary.gw
                        },
                        btntoggle: {
                            height: "30px",
                            padding: "15px 30px",
                            color: "white",
                            border: "1px solid ".concat(e.palette.secondary.btnborder),
                            margin: "20px auto 20px auto",
                            borderRadius: "5px",
                            background: e.palette.secondary.btnbg,
                            "&:hover": {
                                background: "#FF0000"
                            }
                        }
                    }
                })),
                Lt = function(e) {
                    e.isDarkMode, e.userWalletAddress, e.setlogoutopen, e.setActivation, e.userAction;
                    var t = Dt(),
                        n = Object(F.a)("(min-width:599px)"),
                        r = Object(F.a)("(max-width:450px)"),
                        c = Object(a.useContext)(Et),
                        s = c.account,
                        i = (c.signer, c.connect),
                        d = c.disconnect;
                    c.chainId;
                    return Object(N.jsx)("div", {
                        style: {
                            padding: "20px 0px 0px 0px",
                            maxWidth: "1460px",
                            margin: "105px auto auto auto"
                        },
                        children: Object(N.jsxs)(m.a, {
                            container: !0,
                            children: [Object(N.jsx)(m.a, {
                                item: !0,
                                xs: 12,
                                style: {
                                    display: "flex",
                                    justifyContent: "center"
                                },
                                children: s ? Object(N.jsx)(O.a, {
                                    variant: "filled",
                                    style: {
                                        border: "1px solid white",
                                        borderRadius: "50px",
                                        color: "white",
                                        marginTop: "25px",
                                        marginBottom: "30px",
                                        background: "#007ACC"
                                    },
                                    onClick: function() {
                                        d()
                                    },
                                    children: (null === s || void 0 === s ? void 0 : s.slice(0, 6)) + "..." + (null === s || void 0 === s ? void 0 : s.slice(-4))
                                }) : Object(N.jsx)(O.a, {
                                    variant: "filled",
                                    item: !0,
                                    className: t.btntoggle,
                                    onClick: Object(l.a)(Object(o.a)().mark((function e() {
                                        return Object(o.a)().wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return e.next = 2, i();
                                                case 2:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    }))),
                                    children: "Connect Wallet"
                                })
                            }), Object(N.jsx)(m.a, {
                                container: !0,
                                justifyContent: "space-around",
                                style: {
                                    marginTop: "30px"
                                },
                                children: Object(N.jsxs)(m.a, {
                                    item: !0,
                                    xs: 12,
                                    md: 8,
                                    style: {
                                        border: "6px outset rgb(142, 142, 142)",
                                        padding: "30px 10px",
                                        width: "100%",
                                        maxWidth: "750px",
                                        textAlign: "center",
                                        marginBottom: "30px"
                                    },
                                    children: [Object(N.jsx)(f.a, {
                                        className: t.bw,
                                        style: {
                                            fontSize: "20px",
                                            fontWeight: "bold"
                                        },
                                        children: "Transfer NFTs between Blockchains"
                                    }), Object(N.jsxs)(k.a, {
                                        justifyContent: "flex-start",
                                        alignItems: "center",
                                        className: t.bw,
                                        style: {
                                            display: "flex",
                                            background: "#24ACF2",
                                            padding: "10px 14px",
                                            width: r ? "80%" : "50%",
                                            margin: "20px auto 10px auto",
                                            borderRadius: "10px"
                                        },
                                        children: [Object(N.jsx)("img", {
                                            style: {
                                                width: "25px",
                                                height: "25px",
                                                marginRight: "10px"
                                            },
                                            src: vt
                                        }), " ", "TRON", Object(N.jsx)(k.a, {
                                            style: {
                                                width: "100%",
                                                textAlign: "right"
                                            },
                                            children: Object(N.jsx)("i", {
                                                class: "fa-solid fa-caret-down"
                                            })
                                        })]
                                    }), Object(N.jsx)(k.a, {
                                        style: {
                                            marginTop: "-20px"
                                        },
                                        children: Object(N.jsx)("img", {
                                            src: At
                                        })
                                    }), Object(N.jsxs)(k.a, {
                                        justifyContent: "flex-start",
                                        alignItems: "center",
                                        className: t.bw,
                                        style: {
                                            display: "flex",
                                            background: "#24ACF2",
                                            padding: "10px 14px",
                                            width: r ? "80%" : "50%",
                                            margin: "-10px auto 0px auto",
                                            borderRadius: "10px"
                                        },
                                        children: [Object(N.jsx)("img", {
                                            style: {
                                                width: "25px",
                                                height: "25px",
                                                marginRight: "10px"
                                            },
                                            src: Tt
                                        }), " ", "ETHEREUM", Object(N.jsx)(k.a, {
                                            style: {
                                                width: "100%",
                                                textAlign: "right"
                                            }
                                        })]
                                    }), s ? Object(N.jsx)(g.b, {
                                        to: "/bridgeAccount",
                                        style: {
                                            textDecoration: "none"
                                        },
                                        children: Object(N.jsx)(O.a, {
                                            style: {
                                                background: "#24ACF2",
                                                padding: "10px 14px",
                                                width: r ? "80%" : "50%",
                                                margin: "20px auto 10px auto",
                                                borderRadius: "10px"
                                            },
                                            className: t.bw,
                                            children: "Continue Bridging"
                                        })
                                    }) : Object(N.jsx)(O.a, {
                                        onClick: function() {
                                            A.b.error("Please connect your Wallet")
                                        },
                                        style: {
                                            background: "#24ACF2",
                                            padding: "10px 14px",
                                            width: r ? "80%" : "50%",
                                            margin: "20px auto 10px auto",
                                            borderRadius: "10px"
                                        },
                                        className: t.bw,
                                        children: "Continue Bridging"
                                    })]
                                })
                            }), Object(N.jsx)(m.a, {
                                item: !0,
                                container: !0,
                                xs: 12,
                                style: {
                                    marginTop: "20px",
                                    marginBottom: "20px",
                                    padding: "20px 0px 0px 0px"
                                },
                                children: Object(N.jsxs)(m.a, {
                                    item: !0,
                                    xs: 12,
                                    sm: 5,
                                    container: !0,
                                    style: {
                                        marginTop: "10px",
                                        padding: n ? "0px 0px 0px 40px" : "0px 0px 0px 0px"
                                    },
                                    justifyContent: n ? "flex-start" : "center",
                                    children: [Object(N.jsx)(m.a, {
                                        item: !0,
                                        children: Object(N.jsx)("a", {
                                            href: "https://t.me/tblocksw",
                                            target: "_blank",
                                            children: Object(N.jsx)("i", {
                                                style: {
                                                    color: "rgb(51, 51, 51)",
                                                    fontSize: "30px"
                                                },
                                                class: "fab fa-telegram"
                                            })
                                        })
                                    }), Object(N.jsx)(m.a, {
                                        item: !0,
                                        children: Object(N.jsx)("a", {
                                            href: "https://twitter.com/tblocksw",
                                            target: "_blank",
                                            children: Object(N.jsx)("i", {
                                                style: {
                                                    color: "rgb(51, 51, 51)",
                                                    marginLeft: "8px",
                                                    fontSize: "30px"
                                                },
                                                class: "fab fa-twitter"
                                            })
                                        })
                                    }), Object(N.jsx)(m.a, {
                                        item: !0,
                                        children: Object(N.jsx)("a", {
                                            href: "https://discord.gg/ChfDagP9",
                                            target: "_blank",
                                            children: Object(N.jsx)("i", {
                                                style: {
                                                    color: "rgb(51, 51, 51)",
                                                    marginLeft: "8px",
                                                    fontSize: "30px"
                                                },
                                                class: "fab fa-discord"
                                            })
                                        })
                                    }), Object(N.jsx)(m.a, {
                                        item: !0,
                                        children: Object(N.jsx)("a", {
                                            href: "https://peridot-heather-e84.notion.site/Getting-Started-ad66f7fe2a654ebfbbdbc6861116991d",
                                            target: "_blank",
                                            children: Object(N.jsx)("i", {
                                                style: {
                                                    color: "rgb(51, 51, 51)",
                                                    marginLeft: "9px",
                                                    fontSize: "30px"
                                                },
                                                class: "fas fa-sticky-note"
                                            })
                                        })
                                    })]
                                })
                            })]
                        })
                    })
                },
                Wt = n.p + "media/eth.a539d20d.svg",
                zt = Object(j.a)((function(e) {
                    return {
                        bw: {
                            color: e.palette.secondary.bw
                        },
                        gw: {
                            color: e.palette.secondary.gw
                        },
                        btntoggle: {
                            height: "30px",
                            padding: "15px 30px",
                            color: "white",
                            border: "1px solid ".concat(e.palette.secondary.btnborder),
                            margin: "20px auto 20px auto",
                            borderRadius: "5px",
                            background: e.palette.secondary.btnbg,
                            "&:hover": {
                                background: "#FF0000"
                            }
                        },
                        mintedEth: {
                            opacity: "0.3"
                        }
                    }
                })),
                Pt = function(e) {
                    var t = e.isDarkMode,
                        n = e.userWalletAddress,
                        c = (e.setlogoutopen, e.setActivation, e.userAction, e.setdetailsmodalopen),
                        s = e.myPunks,
                        b = e.setethDetailedNft,
                        j = e.tronWeb,
                        x = Object(F.a)("(min-width:599px)"),
                        p = zt(),
                        u = Object(a.useContext)(Et),
                        g = u.account,
                        h = (u.signer, u.connect),
                        y = (u.chainId, u.disconnect),
                        w = r.a.useState([]),
                        v = Object(d.a)(w, 2),
                        T = v[0],
                        S = v[1],
                        C = r.a.useState([]),
                        I = Object(d.a)(C, 2),
                        R = I[0],
                        M = I[1],
                        E = r.a.useState(!1),
                        B = Object(d.a)(E, 2),
                        D = B[0],
                        L = B[1],
                        W = r.a.useState(!1),
                        z = Object(d.a)(W, 2),
                        P = z[0],
                        U = z[1],
                        G = function(e) {
                            var t = e.target,
                                n = t.id,
                                a = t.checked;
                            S([].concat(Object(i.a)(T), [+n])), a || S(T.filter((function(e) {
                                return +e !== +n
                            })))
                        },
                        Y = r.a.useCallback(Object(l.a)(Object(o.a)().mark((function e() {
                            return Object(o.a)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (g) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return", A.b.error("Please Connect to your Wallet"));
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), [g, T]),
                        Z = r.a.useCallback(Object(l.a)(Object(o.a)().mark((function e() {
                            var t, a, r, c, s, i, l;
                            return Object(o.a)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, t = n, a = j.toHex(t).replace(/^0x/, ""), r = j.utils.code.hexStr2byteArray(a), c = j.sha3(r).replace(/^0x/, ""), e.next = 7, j.trx.sign(c);
                                    case 7:
                                        return s = e.sent, "01" == (i = s.substring(128, 130)) ? s = s.substring(0, 128) + "1c" : "00" == i && (s = s.substring(0, 128) + "1b"), e.next = 12, j.trx.verifyMessage(c, s, n);
                                    case 12:
                                        l = e.sent, U(!!l), console.log(l, "res"), e.next = 21;
                                        break;
                                    case 17:
                                        e.prev = 17, e.t0 = e.catch(0), A.b.error("Please Connect to your Tron Wallet"), console.log(e.t0);
                                    case 21:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 17]
                            ])
                        }))), [j]),
                        H = r.a.useCallback(Object(l.a)(Object(o.a)().mark((function e() {
                            var t;
                            return Object(o.a)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        D ? (t = s.filter((function(e) {
                                            return !0 === e.ethSwap
                                        })), M(t)) : M(s);
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))));
                    return r.a.useEffect((function() {
                        g && H()
                    }), [s, D]), Object(N.jsx)("div", {
                        style: {
                            padding: "20px 0px 0px 0px",
                            maxWidth: "1460px",
                            margin: "105px auto auto auto"
                        },
                        children: Object(N.jsxs)(m.a, {
                            container: !0,
                            children: [Object(N.jsx)(m.a, {
                                item: !0,
                                xs: 12,
                                style: {
                                    display: "flex",
                                    justifyContent: "center"
                                },
                                children: Object(N.jsx)(k.a, {
                                    style: {
                                        width: "100%",
                                        textAlign: "center"
                                    },
                                    children: g ? Object(N.jsx)(O.a, {
                                        variant: "filled",
                                        style: {
                                            border: "1px solid white",
                                            borderRadius: "50px",
                                            color: "white",
                                            marginTop: "25px",
                                            marginBottom: "30px",
                                            background: "#007ACC"
                                        },
                                        onClick: function() {
                                            y()
                                        },
                                        children: (null === g || void 0 === g ? void 0 : g.slice(0, 6)) + "..." + (null === g || void 0 === g ? void 0 : g.slice(-4))
                                    }) : Object(N.jsx)(O.a, {
                                        variant: "filled",
                                        item: !0,
                                        className: p.btntoggle,
                                        onClick: function() {
                                            h()
                                        },
                                        children: "Connect Wallet"
                                    })
                                })
                            }), Object(N.jsx)(m.a, {
                                item: !0,
                                xs: 12,
                                style: {
                                    display: "flex",
                                    justifyContent: "center"
                                },
                                children: Object(N.jsx)(k.a, {
                                    display: "flex",
                                    justifyContent: "center",
                                    children: Object(N.jsx)(O.a, {
                                        onClick: function() {
                                            return Z()
                                        },
                                        variant: "filled",
                                        style: {
                                            border: "1px solid white",
                                            borderRadius: "30px",
                                            color: "white",
                                            marginTop: "25px",
                                            marginBottom: "30px",
                                            background: "#007ACC",
                                            width: "100%"
                                        },
                                        children: " Sign OwnerShip"
                                    })
                                })
                            }), Object(N.jsxs)(m.a, {
                                container: !0,
                                justifyContent: "space-around",
                                style: {
                                    marginTop: "30px"
                                },
                                children: [Object(N.jsxs)(m.a, {
                                    item: !0,
                                    xs: 12,
                                    md: 8,
                                    style: {
                                        padding: "30px 10px",
                                        width: "100%",
                                        maxWidth: "750px",
                                        border: "6px outset rgb(142, 142, 142)",
                                        marginBottom: "30px"
                                    },
                                    children: [Object(N.jsxs)(k.a, {
                                        style: {
                                            borderRadius: "10px",
                                            display: "flex",
                                            flexWrap: "wrap",
                                            justifyContent: "flex-start",
                                            alignItems: "center"
                                        },
                                        children: [Object(N.jsx)(f.a, {
                                            className: p.bw,
                                            children: "Your NFTs on"
                                        }), Object(N.jsxs)(k.a, {
                                            children: [Object(N.jsxs)(O.a, {
                                                onClick: function() {
                                                    return L(!1)
                                                },
                                                style: {
                                                    background: t ? "#F7F8F9" : "#D3D3D3",
                                                    border: "2px solid white",
                                                    borderRadius: "10px",
                                                    marginLeft: "15px"
                                                },
                                                children: [Object(N.jsx)("img", {
                                                    style: {
                                                        width: "25px",
                                                        height: "25px",
                                                        marginRight: "10px"
                                                    },
                                                    src: vt,
                                                    alt: ""
                                                }), " ", Object(N.jsx)("span", {
                                                    children: "Tron"
                                                })]
                                            }), P && Object(N.jsxs)(O.a, {
                                                onClick: function() {
                                                    return L(!0)
                                                },
                                                style: {
                                                    background: t ? "#F7F8F9" : "#D3D3D3",
                                                    border: "2px solid white",
                                                    borderRadius: "14px",
                                                    marginLeft: "15px"
                                                },
                                                children: [Object(N.jsx)("img", {
                                                    style: {
                                                        width: "25px",
                                                        height: "25px",
                                                        marginRight: "10px"
                                                    },
                                                    src: Wt,
                                                    alt: ""
                                                }), " ", Object(N.jsx)("span", {
                                                    children: "ETHEREUM"
                                                })]
                                            })]
                                        })]
                                    }), Object(N.jsx)(m.a, {
                                        container: !0,
                                        className: "scrollclass",
                                        justifyContent: "center",
                                        style: {
                                            marginTop: "20px",
                                            overflow: "Scroll",
                                            height: "600px",
                                            overflowX: "hidden"
                                        },
                                        children: +R.length > 0 ? R.map((function(e, n) {
                                            return Object(N.jsx)("div", {
                                                children: Object(N.jsx)(m.a, {
                                                    item: !0,
                                                    xs: 11,
                                                    sm: 11,
                                                    md: 11,
                                                    style: {
                                                        textAlign: "center"
                                                    },
                                                    children: Object(N.jsxs)(k.a, {
                                                        style: {
                                                            borderRadius: "10px",
                                                            width: "100%",
                                                            maxWidth: "170px",
                                                            background: t ? "white" : "#D3D3D3",
                                                            color: "#627EEA",
                                                            margin: "0px auto 30px auto"
                                                        },
                                                        children: [Object(N.jsx)("img", {
                                                            style: {
                                                                borderRadius: "8px",
                                                                width: "100%"
                                                            },
                                                            src: e.nftimage,
                                                            className: D ? "" : e.ethSwap ? p.mintedEth : "",
                                                            alt: ""
                                                        }), Object(N.jsxs)(f.a, {
                                                            style: {
                                                                color: "#2e2e2e"
                                                            },
                                                            children: ["Token-URI:", e.mintId]
                                                        }), Object(N.jsxs)(f.a, {
                                                            style: {
                                                                color: "#2e2e2e"
                                                            },
                                                            children: ["CuteATC #", e.nftid]
                                                        }), Object(N.jsxs)(f.a, {
                                                            style: {
                                                                color: "#2e2e2e"
                                                            },
                                                            children: ["Type: ", e.nftattributes[0].Type]
                                                        }), !0 === e.stakingStatus ? Object(N.jsx)(f.a, {
                                                            style: {
                                                                color: "red"
                                                            },
                                                            children: "Staked"
                                                        }) : "", Object(N.jsx)(k.a, {
                                                            mt: 1,
                                                            children: Object(N.jsx)(O.a, {
                                                                onClick: function() {
                                                                    b(e), c(!0)
                                                                },
                                                                style: {
                                                                    background: "#039BE5",
                                                                    color: "white",
                                                                    width: "80%"
                                                                },
                                                                children: "NFT Details"
                                                            })
                                                        }), Object(N.jsx)(k.a, {
                                                            mt: 1,
                                                            children: Object(N.jsx)(ft, {
                                                                id: e.nftid,
                                                                type: "checkbox",
                                                                name: e.nftOwner,
                                                                handleClick: G,
                                                                isChecked: T.includes(e.nftid),
                                                                disabled: e.ethSwap
                                                            })
                                                        })]
                                                    })
                                                })
                                            }, n)
                                        })) : Object(N.jsx)(k.a, {
                                            style: {
                                                color: "red"
                                            },
                                            fontSize: "1rem",
                                            children: "Please connect to Tron and mint NFTs"
                                        })
                                    })]
                                }), Object(N.jsxs)(m.a, {
                                    item: !0,
                                    xs: 12,
                                    md: 4,
                                    style: {
                                        border: "6px outset rgb(142, 142, 142)",
                                        padding: "30px 22px",
                                        width: "100%",
                                        maxWidth: "750px",
                                        marginBottom: "30px"
                                    },
                                    children: [Object(N.jsxs)(k.a, {
                                        style: {
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center"
                                        },
                                        children: [Object(N.jsx)(f.a, {
                                            className: p.bw,
                                            children: "Destination"
                                        }), Object(N.jsxs)(O.a, {
                                            style: {
                                                background: t ? "#F7F8F9" : "#D3D3D3",
                                                border: "2px solid white",
                                                borderRadius: "14px",
                                                marginLeft: "15px"
                                            },
                                            children: [Object(N.jsx)("img", {
                                                style: {
                                                    width: "25px",
                                                    height: "25px",
                                                    marginRight: "10px"
                                                },
                                                src: Wt
                                            }), " ", Object(N.jsx)("span", {
                                                children: "ETHEREUM"
                                            }), Object(N.jsx)("i", {
                                                style: {
                                                    marginLeft: "10px"
                                                }
                                            })]
                                        })]
                                    }), Object(N.jsxs)(k.a, {
                                        textAlign: "center",
                                        children: [Object(N.jsx)("input", {
                                            style: {
                                                background: "white",
                                                borderRadius: "12px",
                                                color: "black",
                                                border: "2px solid #2e2e2e",
                                                width: "80%",
                                                height: "40px",
                                                textIndent: "9px",
                                                marginTop: "20px"
                                            },
                                            placeholder: "Paste your Destination Address",
                                            type: "text",
                                            value: g,
                                            disabled: !P
                                        }), Object(N.jsx)("hr", {
                                            style: {
                                                marginTop: "28px"
                                            }
                                        })]
                                    }), Object(N.jsxs)(k.a, {
                                        alignItems: "center",
                                        display: "flex",
                                        children: [Object(N.jsx)(k.a, {
                                            children: "MINT ON ETH"
                                        }), Object(N.jsx)(k.a, {
                                            pl: 12,
                                            children: Object(N.jsx)(O.a, {
                                                onClick: function() {
                                                    return Y()
                                                },
                                                variant: "contained",
                                                style: {
                                                    padding: ".5rem 1.5rem"
                                                },
                                                disabled: !P,
                                                children: " MINT"
                                            })
                                        })]
                                    })]
                                })]
                            }), Object(N.jsx)(m.a, {
                                item: !0,
                                container: !0,
                                xs: 12,
                                style: {
                                    marginTop: "20px",
                                    marginBottom: "20px",
                                    padding: "20px 0px 0px 0px"
                                },
                                children: Object(N.jsxs)(m.a, {
                                    item: !0,
                                    xs: 12,
                                    sm: 5,
                                    container: !0,
                                    style: {
                                        marginTop: "10px",
                                        padding: x ? "0px 0px 0px 40px" : "0px 0px 0px 0px"
                                    },
                                    justifyContent: x ? "flex-start" : "center",
                                    children: [Object(N.jsx)(m.a, {
                                        item: !0,
                                        children: Object(N.jsx)("a", {
                                            href: "https://t.me/tblocksw",
                                            target: "_blank",
                                            children: Object(N.jsx)("i", {
                                                style: {
                                                    color: "rgb(51, 51, 51)",
                                                    fontSize: "30px"
                                                },
                                                className: "fab fa-telegram"
                                            })
                                        })
                                    }), Object(N.jsx)(m.a, {
                                        item: !0,
                                        children: Object(N.jsx)("a", {
                                            href: "https://twitter.com/tblocksw",
                                            target: "_blank",
                                            children: Object(N.jsx)("i", {
                                                style: {
                                                    color: "rgb(51, 51, 51)",
                                                    marginLeft: "8px",
                                                    fontSize: "30px"
                                                },
                                                className: "fab fa-twitter"
                                            })
                                        })
                                    }), Object(N.jsx)(m.a, {
                                        item: !0,
                                        children: Object(N.jsx)("a", {
                                            href: "https://discord.gg/ChfDagP9",
                                            target: "_blank",
                                            children: Object(N.jsx)("i", {
                                                style: {
                                                    color: "rgb(51, 51, 51)",
                                                    marginLeft: "8px",
                                                    fontSize: "30px"
                                                },
                                                className: "fab fa-discord"
                                            })
                                        })
                                    }), Object(N.jsx)(m.a, {
                                        item: !0,
                                        children: Object(N.jsx)("a", {
                                            href: "https://peridot-heather-e84.notion.site/Getting-Started-ad66f7fe2a654ebfbbdbc6861116991d",
                                            target: "_blank",
                                            children: Object(N.jsx)("i", {
                                                style: {
                                                    color: "rgb(51, 51, 51)",
                                                    marginLeft: "9px",
                                                    fontSize: "30px"
                                                },
                                                className: "fas fa-sticky-note"
                                            })
                                        })
                                    })]
                                })
                            })]
                        })
                    })
                },
                Ut = {
                    width: "90%",
                    margin: "auto",
                    marginTop: "10px",
                    boxShadow: 24,
                    borderRadius: "10px",
                    overflow: "hidden"
                },
                Gt = Object(j.a)((function(e) {
                    return {
                        bw: {
                            color: e.palette.secondary.bw
                        },
                        gw: {
                            color: e.palette.secondary.gw
                        }
                    }
                }));

            function Yt(e) {
                var t = e.detailsmodalopen,
                    n = e.setdetailsmodalopen,
                    a = e.isDarkMode,
                    r = e.ethDetailedNft,
                    c = (e.setethDetailedNft, Gt()),
                    s = Object(F.a)("(max-width:770px)"),
                    i = Object(F.a)("(max-width:450px)"),
                    o = function() {
                        n(!1)
                    },
                    l = Object(F.a)("(max-width:430px)");
                return Object(N.jsx)("div", {
                    children: Object(N.jsx)(Me.a, {
                        open: t,
                        onClose: o,
                        "aria-labelledby": "modal-modal-title",
                        "aria-describedby": "modal-modal-description",
                        children: Object(N.jsxs)(k.a, {
                            sx: Ut,
                            className: "scrollclass",
                            style: {
                                background: a ? "#2A2A2E" : " rgb(247,247,249)",
                                padding: l ? "10px 10px" : "20px 30px",
                                overflow: "scroll",
                                height: "90vh"
                            },
                            children: [Object(N.jsx)("i", {
                                onClick: o,
                                className: c.bw + " fas fa-times-circle",
                                style: {
                                    fontSize: "24px",
                                    float: "right",
                                    "&:hover": {
                                        color: "red",
                                        backgroundColor: "silver",
                                        borderRadius: "50%"
                                    }
                                }
                            }), Object(N.jsx)(f.a, {
                                style: {
                                    color: a ? "white" : "black"
                                },
                                children: "NFT Details"
                            }), Object(N.jsxs)(m.a, {
                                style: {
                                    marginTop: "20px"
                                },
                                container: !0,
                                justifyContent: "space-between",
                                children: [Object(N.jsx)(m.a, {
                                    item: !0,
                                    xs: 12,
                                    md: 3,
                                    style: {
                                        textAlign: "center"
                                    },
                                    children: Object(N.jsx)("img", {
                                        style: {
                                            width: "100%",
                                            maxWidth: "300px",
                                            height: "auto",
                                            borderRadius: "10px"
                                        },
                                        src: r.nftimage ? r.nftimage : "#"
                                    })
                                }), Object(N.jsxs)(m.a, {
                                    item: !0,
                                    xs: 12,
                                    md: 8,
                                    style: {
                                        overflowX: "hidden"
                                    },
                                    children: [Object(N.jsxs)(f.a, {
                                        className: c.bw,
                                        variant: "h5",
                                        component: "div",
                                        children: ["CuteATC #", r.nftid ? r.nftid : "#", Object(N.jsx)("br", {})]
                                    }), Object(N.jsxs)(f.a, {
                                        className: c.bw,
                                        children: ["Type: ", r.nftattributes ? r.nftattributes[0].Type : "#"]
                                    }), Object(N.jsxs)(f.a, {
                                        className: c.bw,
                                        children: ["Rarity Rank:", r.nftRank ? r.nftRank : "#"]
                                    }),  Object(N.jsxs)(f.a, {
                                        className: c.bw,
                                        children: ["MintID:", r.mintId ? r.mintId : "#"]
                                    }), Object(N.jsxs)(f.a, {
                                        className: c.bw,
                                        children: ["IPFS Metadata: ", s && !i ? r.jsonLink ? Object(N.jsx)("a", {
                                            style: {
                                                textDecoration: "none"
                                            },
                                            target: "_blank",
                                            href: r.jsonLink,
                                            children: r.jsonLink.slice(0, 20) + "...." + r.jsonLink.slice(-14)
                                        }) : "Not Available" : null, i ? r.jsonLink ? Object(N.jsx)("a", {
                                            style: {
                                                textDecoration: "none"
                                            },
                                            target: "_blank",
                                            href: r.jsonLink,
                                            children: r.jsonLink.slice(0, 8) + "...." + r.jsonLink.slice(-12)
                                        }) : "Not Available" : null, s ? null : r.jsonLink ? Object(N.jsx)("a", {
                                            style: {
                                                textDecoration: "none"
                                            },
                                            href: r.jsonLink,
                                            target: "_blank",
                                            children: r.jsonLink
                                        }) : "Not Available"]
                                    }), Object(N.jsxs)(f.a, {
                                        className: c.bw,
                                        children: ["IPFS Image link:", " ", s && !i ? r.ipfsImage ? Object(N.jsx)("a", {
                                            style: {
                                                textDecoration: "none"
                                            },
                                            target: "_blank",
                                            href: r.ipfsImage,
                                            children: r.ipfsImage.slice(0, 20) + "...." + r.ipfsImage.slice(-14)
                                        }) : "Not Available" : null, i ? r.ipfsImage ? Object(N.jsx)("a", {
                                            style: {
                                                textDecoration: "none"
                                            },
                                            targer: "_blank",
                                            href: r.ipfsImage,
                                            children: r.ipfsImage.slice(0, 8) + "...." + r.ipfsImage.slice(-12)
                                        }) : "Not Available" : null, s ? null : r.ipfsImage ? Object(N.jsx)("a", {
                                            style: {
                                                textDecoration: "none"
                                            },
                                            href: r.ipfsImage,
                                            targer: "_blank",
                                            children: r.ipfsImage
                                        }) : "Not Available"]
                                    }), Object(N.jsxs)(f.a, {
                                        style: {
                                            marginTop: "20px"
                                        },
                                        className: c.bw,
                                        children: ["Description:", r.nftid ? r.nftattributes.map((function(e, t) {
                                            return Object(N.jsx)(N.Fragment, {
                                                children: Object(N.jsxs)("div", {
                                                    children: [Object(N.jsxs)(f.a, {
                                                        style: {
                                                            marginTop: "10px"
                                                        },
                                                        children: ["Background:", " ", Object(N.jsx)(O.a, {
                                                            style: {
                                                                padding: "1px 8px",
                                                                background: "#F12236",
                                                                borderRadius: "50px"
                                                            },
                                                            children: e.Background
                                                        })]
                                                    }), Object(N.jsxs)(f.a, {
                                                        style: {
                                                            marginTop: "10px"
                                                        },
                                                        children: ["Body:", " ", Object(N.jsx)(O.a, {
                                                            style: {
                                                                padding: "1px 8px",
                                                                background: "#F12236",
                                                                borderRadius: "50px"
                                                            },
                                                            children: e.Body
                                                        })]
                                                    }), Object(N.jsxs)(f.a, {
                                                        style: {
                                                            marginTop: "10px"
                                                        },
                                                        children: ["Clothes:", " ", Object(N.jsx)(O.a, {
                                                            style: {
                                                                padding: "1px 8px",
                                                                background: "#F12236",
                                                                borderRadius: "50px"
                                                            },
                                                            children: e.Clothes
                                                        })]
                                                    }), Object(N.jsxs)(f.a, {
                                                        style: {
                                                            marginTop: "10px"
                                                        },
                                                        children: ["Headgear:", " ", Object(N.jsx)(O.a, {
                                                            style: {
                                                                padding: "1px 8px",
                                                                background: "#F12236",
                                                                borderRadius: "50px"
                                                            },
                                                            children: e.Headgear
                                                        })]
                                                    }), Object(N.jsxs)(f.a, {
                                                        style: {
                                                            marginTop: "10px"
                                                        },
                                                        children: ["Eyes:", " ", Object(N.jsx)(O.a, {
                                                            style: {
                                                                padding: "1px 8px",
                                                                background: "#F12236",
                                                                borderRadius: "50px"
                                                            },
                                                            children: e.Eyes
                                                        })]
                                                    }), Object(N.jsxs)(f.a, {
                                                        style: {
                                                            marginTop: "10px"
                                                        },
                                                        children: ["Mouth:", " ", Object(N.jsx)(O.a, {
                                                            style: {
                                                                padding: "1px 8px",
                                                                background: "#F12236",
                                                                borderRadius: "50px"
                                                            },
                                                            children: e.Mouth
                                                        })]
                                                    }), Object(N.jsxs)(f.a, {
                                                        style: {
                                                            marginTop: "10px"
                                                        },
                                                        children: ["Earrings:", " ", Object(N.jsx)(O.a, {
                                                            style: {
                                                                padding: "1px 8px",
                                                                background: "#F12236",
                                                                borderRadius: "50px"
                                                            },
                                                            children: e.Earrings
                                                        })]
                                                    }), Object(N.jsxs)(f.a, {
                                                        style: {
                                                            marginTop: "10px"
                                                        },
                                                        children: ["Rarity Rank:", " ", Object(N.jsx)(O.a, {
                                                            style: {
                                                                padding: "1px 8px",
                                                                background: "#F12236",
                                                                borderRadius: "50px"
                                                            },
                                                            children: e.nftRank
                                                        })]
                                                    })]
                                                }, t)
                                            })
                                        })) : null]
                                    })]
                                })]
                            })]
                        })
                    })
                })
            }
            var Zt = n(1338),
                Ht = n.p + "media/ccard.9c04c9a8.svg",
                Vt = n.p + "media/one.a0a8ef09.svg",
                Qt = n.p + "media/two.c479fff4.svg",
                Jt = n.p + "media/three.07dbab45.svg",
                Xt = n.p + "media/tick.2047c028.svg",
                Kt = n.p + "media/right.32434051.svg",
                qt = n.p + "media/trc.c6329283.svg",
                _t = n.p + "media/tickerBNN.ea04d168.png",
                $t = (n(1165), function(e) {
                    var t = e.btoken,
                        n = e.bgcolor,
                        a = (e.height, +t / 5e7 * 100),
                        r = {
                            height: "100%",
                            width: "".concat(a, "%"),
                            backgroundColor: n,
                            borderRadius: 30,
                            textAlign: "right"
                        };
                    return Object(N.jsx)("div", {
                        style: {
                            height: 40,
                            width: "100%",
                            backgroundColor: "#c9c7c7",
                            borderRadius: 40,
                            marginTop: 50,
                            position: "relative"
                        },
                        children: Object(N.jsx)("div", {
                            style: r,
                            children: Object(N.jsxs)("span", {
                                style: {
                                    padding: 10,
                                    color: "black",
                                    fontWeight: 900,
                                    marginTop: "3rem"
                                },
                                children: [" ", Object(N.jsxs)("span", {
                                    style: {
                                        position: "absolute",
                                        top: "-1.2rem",
                                        color: "black"
                                    },
                                    children: [parseFloat(a).toFixed(1), "%"]
                                }), Object(N.jsx)("img", {
                                    src: "rocket.png",
                                    alt: "",
                                    style: {
                                        width: "60px",
                                        position: "absolute",
                                        top: "-.5rem"
                                    }
                                }), " ", Object(N.jsx)("span", {
                                    style: {
                                        position: "absolute",
                                        top: "2.5rem",
                                        right: "-1rem",
                                        color: "black"
                                    },
                                    children: "50M TBL"
                                }), Object(N.jsxs)("span", {
                                    style: {
                                        position: "absolute",
                                        top: "0.75rem",
                                        left: "-0.8rem",
                                        color: "black"
                                    },
                                    children: ["0", " "]
                                })]
                            })
                        })
                    })
                }),
                en = Object(j.a)((function(e) {
                    return {
                        bw: {
                            color: e.palette.secondary.bw
                        },
                        gw: {
                            color: e.palette.secondary.gw
                        },
                        btntoggle: {
                            height: "30px",
                            padding: "15px 30px",
                            color: "white",
                            border: "1px solid ".concat(e.palette.secondary.btnborder),
                            margin: "20px auto 20px auto",
                            borderRadius: "5px",
                            background: e.palette.secondary.btnbg,
                            "&:hover": {
                                background: "#FF0000"
                            }
                        }
                    }
                })),
                tn = function(e) {
                    var t = e.userWalletAddress,
                        n = e.userAction,
                        a = e.setlogoutopen,
                        c = e.setActivation,
                        s = e.accountBalance,
                        i = e.balanceOf,
                        b = e.contractExchange,
                        j = e.contractToken,
                        x = e.setloading,
                        p = (e.loading, e.tronWeb),
                        u = e.allowanceExchange,
                        g = e.setupdateInfo,
                        h = e.updateInfo,
                        y = e.homeCounterinfo,
                        w = e.ExchangeBuyPrice,
                        v = e.ExchangeSellPrice,
                        T = e.btoken,
                        S = (e.init4, r.a.useState({
                            buy: !0,
                            sell: !1
                        })),
                        C = Object(d.a)(S, 2),
                        I = C[0],
                        R = C[1],
                        M = r.a.useState(""),
                        E = Object(d.a)(M, 2),
                        B = E[0],
                        D = E[1],
                        L = r.a.useState(""),
                        W = Object(d.a)(L, 2),
                        z = W[0],
                        P = W[1],
                        U = Object(F.a)("(max-width:675px)"),
                        G = Object(F.a)("(max-width:959px)"),
                        Y = en(),
                        Z = function() {
                            var e = Object(l.a)(Object(o.a)().mark((function e() {
                                var t, n;
                                return Object(o.a)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (e.prev = 0, !(s > 0 && b && +i)) {
                                                e.next = 16;
                                                break
                                            }
                                            if (!(I.buy && Number(s) >= 0)) {
                                                e.next = 10;
                                                break
                                            }
                                            return D(parseInt(s)), e.next = 6, b.TRXToToken(parseInt(s)).call();
                                        case 6:
                                            t = e.sent, P(parseInt(t)), e.next = 16;
                                            break;
                                        case 10:
                                            if (!(I.sell && Number(i) >= 0)) {
                                                e.next = 16;
                                                break
                                            }
                                            return D(parseInt(Object(Ge.c)(i, 6))), e.next = 14, b.TokenToTRX(+i).call();
                                        case 14:
                                            n = e.sent, P(parseInt(Object(Ge.c)(n, 6)));
                                        case 16:
                                            e.next = 21;
                                            break;
                                        case 18:
                                            e.prev = 18, e.t0 = e.catch(0), console.log(e.t0);
                                        case 21:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 18]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                    r.a.useEffect((function() {
                        b && s && h && Z()
                    }), [s, h, b, i, I]);
                    var H = function() {
                            var e = Object(l.a)(Object(o.a)().mark((function e() {
                                var t, n;
                                return Object(o.a)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, x(!0), e.next = 4, j.approve($, i).send();
                                        case 4:
                                            t = e.sent, n = setInterval((function() {
                                                p.trx.getUnconfirmedTransactionInfo(t.toString()).then(function() {
                                                    var e = Object(l.a)(Object(o.a)().mark((function e(t) {
                                                        return Object(o.a)().wrap((function(e) {
                                                            for (;;) switch (e.prev = e.next) {
                                                                case 0:
                                                                    "SUCCESS" == t.receipt.result ? (clearInterval(n), A.b.success("Successfully approved"), V()) : (A.b.error("Failed to Approve"), clearInterval(n), x(!1));
                                                                case 1:
                                                                case "end":
                                                                    return e.stop()
                                                            }
                                                        }), e)
                                                    })));
                                                    return function(t) {
                                                        return e.apply(this, arguments)
                                                    }
                                                }()).catch((function(e) {
                                                    console.log("error", e)
                                                }))
                                            }), 2e3), e.next = 12;
                                            break;
                                        case 8:
                                            e.prev = 8, e.t0 = e.catch(0), x(!1), console.log(e.t0.message, "error");
                                        case 12:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 8]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        V = function() {
                            var e = Object(l.a)(Object(o.a)().mark((function e() {
                                var t, n, a, r;
                                return Object(o.a)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (e.prev = 0, x(!0), !I.buy) {
                                                e.next = 15;
                                                break
                                            }
                                            if (!(Number(B) > 0)) {
                                                e.next = 11;
                                                break
                                            }
                                            return e.next = 6, b.Buy().send({
                                                callValue: Object(Ge.e)(B, 6)
                                            });
                                        case 6:
                                            t = e.sent, A.b.warning("Please wait you will be notified further after the Transaction"), n = setInterval((function() {
                                                p.trx.getUnconfirmedTransactionInfo(t.toString()).then(function() {
                                                    var e = Object(l.a)(Object(o.a)().mark((function e(t) {
                                                        return Object(o.a)().wrap((function(e) {
                                                            for (;;) switch (e.prev = e.next) {
                                                                case 0:
                                                                    "SUCCESS" == t.receipt.result ? (clearInterval(n), A.b.success("Successfully Bought"), x(!1)) : (A.b.error("Failed"), x(!1), clearInterval(n));
                                                                case 1:
                                                                case "end":
                                                                    return e.stop()
                                                            }
                                                        }), e)
                                                    })));
                                                    return function(t) {
                                                        return e.apply(this, arguments)
                                                    }
                                                }()).catch((function(e) {
                                                    console.log("error", e)
                                                }))
                                            }), 1e4), e.next = 13;
                                            break;
                                        case 11:
                                            x(!1), A.b.error("Please Enter a Valid Value");
                                        case 13:
                                            e.next = 33;
                                            break;
                                        case 15:
                                            if (!I.sell) {
                                                e.next = 33;
                                                break
                                            }
                                            if (e.prev = 16, !(B > 0)) {
                                                e.next = 25;
                                                break
                                            }
                                            return e.next = 20, b.Sell(Object(Ge.e)(B.toString(), 6)).send();
                                        case 20:
                                            a = e.sent, A.b.warning("Please wait you will be notified further after the Transaction"), r = setInterval((function() {
                                                p.trx.getUnconfirmedTransactionInfo(a.toString()).then(function() {
                                                    var e = Object(l.a)(Object(o.a)().mark((function e(t) {
                                                        return Object(o.a)().wrap((function(e) {
                                                            for (;;) switch (e.prev = e.next) {
                                                                case 0:
                                                                    "SUCCESS" == t.receipt.result ? (clearInterval(r), A.b.success("Successfully Sold"), x(!1)) : (A.b.error("Failed"), x(!1), clearInterval(r));
                                                                case 1:
                                                                case "end":
                                                                    return e.stop()
                                                            }
                                                        }), e)
                                                    })));
                                                    return function(t) {
                                                        return e.apply(this, arguments)
                                                    }
                                                }()).catch((function(e) {
                                                    console.log("error", e)
                                                }))
                                            }), 1e4), e.next = 27;
                                            break;
                                        case 25:
                                            A.b.error("Please Enter a valid value"), x(!1);
                                        case 27:
                                            e.next = 33;
                                            break;
                                        case 29:
                                            e.prev = 29, e.t0 = e.catch(16), console.log(e.t0.message), x(!1);
                                        case 33:
                                            return e.next = 35, y();
                                        case 35:
                                            e.next = 41;
                                            break;
                                        case 37:
                                            e.prev = 37, e.t1 = e.catch(0), x(!1), console.log(e.t1.message);
                                        case 41:
                                            g(!0);
                                        case 42:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 37],
                                    [16, 29]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        Q = function() {
                            var e = Object(l.a)(Object(o.a)().mark((function e(t, n) {
                                var a, r;
                                return Object(o.a)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (e.prev = 0, !(I.buy && +t >= 0 && n)) {
                                                e.next = 13;
                                                break
                                            }
                                            if (!(+t <= +s)) {
                                                e.next = 10;
                                                break
                                            }
                                            return D(t), e.next = 6, n.TRXToToken(Object(Ge.e)(t, 6)).call();
                                        case 6:
                                            a = e.sent, P(+Object(Ge.c)(a, 6)), e.next = 11;
                                            break;
                                        case 10:
                                            A.b.error("You have insufficient");
                                        case 11:
                                            e.next = 23;
                                            break;
                                        case 13:
                                            if (!(I.sell && +t >= 0 && n)) {
                                                e.next = 23;
                                                break
                                            }
                                            if (!(+t <= +Object(Ge.c)(i, 6))) {
                                                e.next = 22;
                                                break
                                            }
                                            return D(t), e.next = 18, n.TokenToTRX(+Object(Ge.e)(t, 6)).call();
                                        case 18:
                                            r = e.sent, P(+Object(Ge.c)(r, 6)), e.next = 23;
                                            break;
                                        case 22:
                                            A.b.error("You have insufficient");
                                        case 23:
                                            e.next = 27;
                                            break;
                                        case 25:
                                            e.prev = 25, e.t0 = e.catch(0);
                                        case 27:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 25]
                                ])
                            })));
                            return function(t, n) {
                                return e.apply(this, arguments)
                            }
                        }();
                    return r.a.useEffect((function() {
                        Object(l.a)(Object(o.a)().mark((function e() {
                            return Object(o.a)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!j || !b) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.next = 3, y();
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    }), [b, j]), Object(N.jsx)("div", {
                        style: {
                            marginTop: "105px"
                        },
                        children: Object(N.jsxs)(k.a, {
                            style: {
                                padding: "20px 0px 20px 0px",
                                maxWidth: "1460px",
                                margin: "auto"
                            },
                            children: [Object(N.jsx)(k.a, {
                                style: {
                                    width: "100%",
                                    textAlign: "center"
                                },
                                pb: 4,
                                children: t || 200 == n ? Object(N.jsx)("div", {
                                    children: t ? Object(N.jsx)(O.a, {
                                        variant: "filled",
                                        style: {
                                            border: "1px solid white",
                                            borderRadius: "50px",
                                            color: "white",
                                            marginTop: "15px",
                                            marginBottom: "30px",
                                            background: "#007ACC"
                                        },
                                        onClick: function() {
                                            a(!0)
                                        },
                                        children: (null === t || void 0 === t ? void 0 : t.slice(0, 6)) + "..." + (null === t || void 0 === t ? void 0 : t.slice(-4))
                                    }) : Object(N.jsx)(O.a, {
                                        variant: "filled",
                                        style: {
                                            border: "1px solid white",
                                            borderRadius: "50px",
                                            color: "white",
                                            marginTop: "15px",
                                            marginBottom: "30px",
                                            background: "#007ACC"
                                        },
                                        children: "Loading..."
                                    })
                                }) : Object(N.jsx)(O.a, {
                                    variant: "filled",
                                    item: !0,
                                    className: Y.btntoggle,
                                    onClick: function() {
                                        c(!0)
                                    },
                                    children: "Connect Wallet"
                                })
                            }), Object(N.jsx)(k.a, {
                                style: {
                                    width: "100%",
                                    textAlign: "center",
                                    margin: "-20px auto 20px auto"
                                },
                                children: Object(N.jsx)(O.a, {
                                    variant: "filled",
                                    style: {
                                        border: "1px solid white",
                                        borderRadius: "50px",
                                        color: "white",
                                        marginBottom: "20px",
                                        background: "red"
                                    },
                                    onClick: Object(l.a)(Object(o.a)().mark((function e() {
                                        return Object(o.a)().wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    t ? g(!0) : A.b.error("Please connect your wallet");
                                                case 1:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    }))),
                                    children: "Refresh Data"
                                })
                            }), Object(N.jsxs)(m.a, {
                                container: !0,
                                justifyContent: "space-around",
                                children: [Object(N.jsxs)(m.a, {
                                    item: !0,
                                    xs: 12,
                                    md: 5,
                                    style: {
                                        padding: "50px"
                                    },
                                    children: [Object(N.jsx)(f.a, {
                                        variant: "h4",
                                        className: Y.gw,
                                        children: "Crypto Exchange"
                                    }), Object(N.jsx)(f.a, {
                                        paragraph: !0,
                                        className: Y.gw,
                                        children: "Fast Crypto Swaps, Free of Custody"
                                    }), Object(N.jsx)($t, {
                                        btoken: T,
                                        bgcolor: "#FF0000",
                                        height: 18
                                    }), Object(N.jsx)(k.a, {
                                        mt: 3,
                                        children: Object(N.jsxs)(k.a, {
                                            style: {
                                                display: "flex",
                                                alignItems: "center",
                                                background: "rgba(0, 0, 0, 0.09)",
                                                padding: ".2rem",
                                                justifyContent: "space-between",
                                                borderRadius: 10
                                            },
                                            children: [Object(N.jsx)(f.a, {
                                                style: {
                                                    color: "#4e4e4e",
                                                    padding: "0px 0px 0px 10px"
                                                },
                                                children: "BANANA"
                                            }), Object(N.jsxs)(k.a, {
                                                alignItems: "center",
                                                display: "flex",
                                                children: [Object(N.jsxs)("span", {
                                                    style: {
                                                        color: "black",
                                                        fontSize: "1.1rem"
                                                    },
                                                    children: [i ? Number(Object(Ge.c)(i, 6)) : 0, " \xa0"]
                                                }), Object(N.jsx)("img", {
                                                    style: {
                                                        width: "100%",
                                                        maxWidth: "25px",
                                                        height: "auto"
                                                    },
                                                    src: _t,
                                                    alt: "BANANA"
                                                })]
                                            })]
                                        })
                                    })]
                                }), Object(N.jsxs)(m.a, {
                                    style: {
                                        border: "6px outset rgb(142, 142, 142)",
                                        padding: "20px 0px 40px 0px"
                                    },
                                    item: !0,
                                    xs: 12,
                                    md: 6,
                                    children: [Object(N.jsxs)(k.a, {
                                        style: {
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center"
                                        },
                                        children: [Object(N.jsx)(f.a, {
                                            paragraph: !0,
                                            style: {
                                                marginTop: "18px",
                                                marginRight: "10px"
                                            },
                                            className: Y.gw,
                                            children: "Buy / Sell Crypto"
                                        }), Object(N.jsx)("img", {
                                            style: {
                                                width: "100%",
                                                maxWidth: "40px",
                                                height: "auto"
                                            },
                                            src: Ht
                                        })]
                                    }), Object(N.jsx)(k.a, {
                                        style: {
                                            width: "100%",
                                            display: "flex",
                                            justifyContent: "center"
                                        },
                                        children: Object(N.jsx)(Zt.a, {
                                            id: "filled-number",
                                            label: "You Pay",
                                            type: "number",
                                            min: 0,
                                            max: I.buy ? s : I.sell ? i : null,
                                            value: B,
                                            onChange: function(e) {
                                                Q(e.target.value, b)
                                            },
                                            InputLabelProps: {
                                                shrink: !0
                                            },
                                            style: {
                                                background: "#FFFFFF",
                                                borderRadius: "8px",
                                                width: U ? "95%" : "80%",
                                                margin: "auto"
                                            },
                                            variant: "filled",
                                            InputProps: {
                                                endAdornment: Object(N.jsx)(N.Fragment, {
                                                    children: I.buy ? Object(N.jsxs)(k.a, {
                                                        style: {
                                                            display: "flex",
                                                            alignItems: "center"
                                                        },
                                                        children: [Object(N.jsx)("img", {
                                                            style: {
                                                                width: "100%",
                                                                maxWidth: "25px",
                                                                height: "auto"
                                                            },
                                                            src: qt
                                                        }), Object(N.jsx)(f.a, {
                                                            style: {
                                                                color: "#4e4e4e",
                                                                padding: "0px 0px 0px 10px"
                                                            },
                                                            children: "TRX"
                                                        }), Object(N.jsx)("i", {
                                                            style: {
                                                                color: "#4e4e4e",
                                                                padding: "0px 20px 0px 30px"
                                                            },
                                                            class: "fa-solid fa-caret-down"
                                                        })]
                                                    }) : Object(N.jsxs)(k.a, {
                                                        style: {
                                                            display: "flex",
                                                            alignItems: "center"
                                                        },
                                                        children: [Object(N.jsx)("img", {
                                                            style: {
                                                                width: "100%",
                                                                maxWidth: "25px",
                                                                height: "auto"
                                                            },
                                                            src: _t
                                                        }), Object(N.jsx)(f.a, {
                                                            style: {
                                                                color: "#4e4e4e",
                                                                padding: "0px 0px 0px 10px"
                                                            },
                                                            children: "TBL"
                                                        }), Object(N.jsx)("i", {
                                                            style: {
                                                                color: "#4e4e4e",
                                                                padding: "0px 20px 0px 30px"
                                                            },
                                                            class: "fa-solid fa-caret-down"
                                                        })]
                                                    })
                                                })
                                            }
                                        })
                                    }), Object(N.jsxs)(m.a, {
                                        container: !0,
                                        style: {
                                            width: U ? "95%" : "80%",
                                            margin: "5px auto 0px auto"
                                        },
                                        children: [Object(N.jsxs)(m.a, {
                                            item: !0,
                                            xs: 12,
                                            md: 8,
                                            children: [Object(N.jsx)("br", {}), Object(N.jsx)("br", {}), Object(N.jsx)(f.a, {
                                                className: Y.gw,
                                                children: I.buy ? "Estimated rate: 1 TRX : ".concat(w, " BANANA") : "Estimated rate: ".concat(v, " BANANA : 1 TRX")
                                            })]
                                        }), Object(N.jsx)(m.a, {
                                            item: !0,
                                            xs: 12,
                                            md: 4,
                                            style: {
                                                display: "flex",
                                                justifyContent: "flex-end"
                                            },
                                            children: Object(N.jsx)(k.a, {
                                                style: {
                                                    width: "75%",
                                                    margin: "20px auto 10px auto",
                                                    padding: "4px",
                                                    borderRadius: "5px",
                                                    display: "flex",
                                                    justifyContent: "space-around"
                                                },
                                                children: Object(N.jsxs)(O.a, {
                                                    onClick: function() {
                                                        R({
                                                            buy: !0,
                                                            sell: !1
                                                        }), D(s), P(100 * s)
                                                    },
                                                    style: {
                                                        background: (I.buy, "#3E3F57"),
                                                        color: I.buy ? "#00C26F" : "grey",
                                                        borderRadius: "10px"
                                                    },
                                                    children: ["Buy", " ", Object(N.jsx)("i", {
                                                        style: {
                                                            color: I.buy ? "#00C26F" : "grey",
                                                            fontSize: "14px",
                                                            marginLeft: "6px"
                                                        },
                                                        className: "fa-solid fa-arrow-up-long"
                                                    })]
                                                })
                                            })
                                        })]
                                    }), Object(N.jsx)(k.a, {
                                        style: {
                                            width: "100%",
                                            display: "flex",
                                            justifyContent: "center",
                                            marginBottom: "10px"
                                        },
                                        children: Object(N.jsx)(Zt.a, {
                                            id: "filled-number",
                                            label: "You Get",
                                            type: "number",
                                            value: z,
                                            InputLabelProps: {
                                                shrink: !0
                                            },
                                            style: {
                                                background: "#FFFFFF",
                                                borderRadius: "8px",
                                                width: U ? "95%" : "80%",
                                                margin: "auto"
                                            },
                                            variant: "filled",
                                            InputProps: {
                                                endAdornment: Object(N.jsx)(N.Fragment, {
                                                    children: I.sell ? Object(N.jsxs)(k.a, {
                                                        style: {
                                                            display: "flex",
                                                            alignItems: "center"
                                                        },
                                                        children: [Object(N.jsx)("img", {
                                                            style: {
                                                                width: "100%",
                                                                maxWidth: "25px",
                                                                height: "auto"
                                                            },
                                                            src: qt
                                                        }), Object(N.jsx)(f.a, {
                                                            style: {
                                                                color: "#4e4e4e",
                                                                padding: "0px 0px 0px 10px"
                                                            },
                                                            children: "TRX"
                                                        }), Object(N.jsx)("i", {
                                                            style: {
                                                                color: "#4e4e4e",
                                                                padding: "0px 20px 0px 30px"
                                                            },
                                                            className: "fa-solid fa-caret-down"
                                                        })]
                                                    }) : Object(N.jsxs)(k.a, {
                                                        style: {
                                                            display: "flex",
                                                            alignItems: "center"
                                                        },
                                                        children: [Object(N.jsx)("img", {
                                                            style: {
                                                                width: "100%",
                                                                maxWidth: "25px",
                                                                height: "auto"
                                                            },
                                                            src: _t
                                                        }), Object(N.jsx)(f.a, {
                                                            style: {
                                                                color: "#4e4e4e",
                                                                padding: "0px 0px 0px 10px"
                                                            },
                                                            children: "BANANA"
                                                        }), Object(N.jsx)("i", {
                                                            style: {
                                                                color: "#4e4e4e",
                                                                padding: "0px 20px 0px 30px"
                                                            },
                                                            className: "fa-solid fa-caret-down"
                                                        })]
                                                    })
                                                })
                                            }
                                        })
                                    }), I.buy ? Object(N.jsx)(k.a, {
                                        style: {
                                            width: "100%",
                                            textAlign: "center",
                                            marginTop: "15px"
                                        },
                                        children: Object(N.jsx)(O.a, {
                                            onClick: function() {
                                                t ? V() : A.b.error("Please connect your Wallet")
                                            },
                                            style: {
                                                background: "rgb(108, 107, 107)",
                                                color: "white",
                                                width: U ? "95%" : "80%",
                                                margin: "auto"
                                            },
                                            children: "Buy"
                                        })
                                    }) : Object(N.jsx)(k.a, {
                                        style: {
                                            width: "100%",
                                            textAlign: "center"
                                        },
                                        children: Object(N.jsx)(O.a, {
                                            onClick: Object(l.a)(Object(o.a)().mark((function e() {
                                                return Object(o.a)().wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            if (!t) {
                                                                e.next = 9;
                                                                break
                                                            }
                                                            if (!(Number(B) > Number(Object(Ge.c)(u, 6)))) {
                                                                e.next = 6;
                                                                break
                                                            }
                                                            return e.next = 4, H();
                                                        case 4:
                                                            e.next = 7;
                                                            break;
                                                        case 6:
                                                            V();
                                                        case 7:
                                                            e.next = 10;
                                                            break;
                                                        case 9:
                                                            A.b.error("Please connect your Wallet");
                                                        case 10:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            }))),
                                            style: {
                                                background: "rgb(108, 107, 107)",
                                                color: "white",
                                                width: U ? "95%" : "80%",
                                                margin: "auto"
                                            },
                                            children: "Sell"
                                        })
                                    })]
                                }), Object(N.jsxs)(m.a, {
                                    container: !0,
                                    style: {
                                        width: "95%",
                                        margin: "0px auto 40px auto",
                                        marginTop: "0px",
                                        justifyContent: "space-around"
                                    },
                                    children: [Object(N.jsxs)(m.a, {
                                        item: !0,
                                        xs: 12,
                                        md: 3,
                                        style: {
                                            marginTop: "40px"
                                        },
                                        children: [Object(N.jsxs)(k.a, {
                                            style: {
                                                display: "flex",
                                                justifyContent: G ? "center" : "flex-start"
                                            },
                                            children: [Object(N.jsx)("img", {
                                                src: Vt
                                            }), Object(N.jsx)("img", {
                                                style: {
                                                    marginLeft: "20px"
                                                },
                                                src: Kt
                                            })]
                                        }), Object(N.jsx)(f.a, {
                                            variant: "h5",
                                            className: Y.gw,
                                            style: {
                                                marginTop: "20px",
                                                textAlign: "center"
                                            },
                                            children: "Choose Currency"
                                        })]
                                    }), Object(N.jsxs)(m.a, {
                                        item: !0,
                                        xs: 12,
                                        md: 3,
                                        style: {
                                            marginTop: "40px"
                                        },
                                        children: [Object(N.jsxs)(k.a, {
                                            style: {
                                                display: "flex",
                                                justifyContent: G ? "center" : "flex-start"
                                            },
                                            children: [Object(N.jsx)("img", {
                                                src: Qt
                                            }), Object(N.jsx)("img", {
                                                style: {
                                                    marginLeft: "20px"
                                                },
                                                src: Kt
                                            })]
                                        }), Object(N.jsx)(f.a, {
                                            variant: "h5",
                                            className: Y.gw,
                                            style: {
                                                marginTop: "20px",
                                                textAlign: "center"
                                            },
                                            children: "Approve Transaction"
                                        })]
                                    }), Object(N.jsxs)(m.a, {
                                        item: !0,
                                        xs: 12,
                                        md: 3,
                                        style: {
                                            marginTop: "40px"
                                        },
                                        children: [Object(N.jsxs)(k.a, {
                                            style: {
                                                display: "flex",
                                                justifyContent: G ? "center" : "flex-start",
                                                textAlign: "center"
                                            },
                                            children: [Object(N.jsx)("img", {
                                                src: Jt
                                            }), Object(N.jsx)("img", {
                                                style: {
                                                    marginLeft: "20px"
                                                },
                                                src: Xt
                                            })]
                                        }), Object(N.jsx)(f.a, {
                                            variant: "h5",
                                            className: Y.gw,
                                            style: {
                                                marginTop: "20px",
                                                textAlign: "center"
                                            },
                                            children: "Get Your Coin"
                                        })]
                                    })]
                                })]
                            })]
                        })
                    })
                },
                nn = n(412),
                an = n.n(nn),
                rn = (window.tronWeb, Object(b.a)({
                    palette: {
                        primary: {
                            main: "#4E4E4E",
                            light: "#FFFFFF",
                            dark: "rgb(241, 241, 241)"
                        },
                        secondary: {
                            main: "rgb(51, 51, 51) ",
                            light: "#296588",
                            dark: "#FFFFFF",
                            border: "#003760",
                            whitepink: "#4E4E4E",
                            whitegreen: "#064E3B",
                            bw: "#212121",
                            wb: "#FFFFFF",
                            gw: "#4E4E4E",
                            lightblueblack: "#D8D7EB",
                            btnbg: "#497BEA",
                            btnborder: "#497BEA",
                            cardbg: "#C8C6E0",
                            bgcmenu: "#FFFFFF",
                            tabbacckground: "#F6F4F7"
                        }
                    }
                })),
                cn = Object(b.a)({
                    palette: {
                        primary: {
                            main: "#FFFFFF",
                            light: "#FFFFFF",
                            dark: "#101010"
                        },
                        secondary: {
                            main: "#D38A8A",
                            light: "#296588",
                            dark: "#101010",
                            border: "#555555",
                            whitepink: "#FFFFFF",
                            whitegreen: "#FFFFFF",
                            bw: "#FFFFFF",
                            wb: "black",
                            gw: "#F2F2F2",
                            lightblueblack: "black",
                            brgr: "4px solid #D40000",
                            btnbg: "#2A2A2E",
                            btnborder: "#0A84FF",
                            cardbg: "#535353",
                            bgcmenu: "#101010",
                            tabbacckground: "#000000"
                        }
                    }
                }),
                sn = Object(j.a)({
                    dark: {
                        backgroundColor: "#101010"
                    },
                    light: {
                        backgroundColor: "rgb(241, 241, 241)"
                    }
                });
            var on = function() {
                    var e = Object(a.useState)(),
                        t = Object(d.a)(e, 2),
                        n = t[0],
                        c = t[1],
                        s = Object(a.useState)(null),
                        b = Object(d.a)(s, 2),
                        j = b[0],
                        p = b[1],
                        m = Object(a.useState)(!1),
                        f = Object(d.a)(m, 2),
                        O = f[0],
                        y = f[1],
                        k = Object(a.useContext)(Et),
                        w = k.account,
                        v = Object(a.useState)({
                            defaultLoadmore: !0,
                            searchbyid: !1,
                            searchbyvalue: !1
                        }),
                        T = Object(d.a)(v, 2),
                        C = T[0],
                        R = T[1],
                        M = Object(a.useState)(""),
                        F = Object(d.a)(M, 2),
                        E = F[0],
                        B = F[1],
                        D = Object(a.useState)(""),
                        L = Object(d.a)(D, 2),
                        W = L[0],
                        z = L[1],
                        P = Object(a.useState)(""),
                        U = Object(d.a)(P, 2),
                        G = U[0],
                        Y = U[1],
                        Z = Object(a.useState)(""),
                        H = Object(d.a)(Z, 2),
                        V = H[0],
                        Q = H[1],
                        J = Object(a.useState)(!1),
                        K = Object(d.a)(J, 2),
                        q = K[0],
                        ne = K[1],
                        ae = Object(a.useState)(!1),
                        re = Object(d.a)(ae, 2),
                        ce = re[0],
                        se = re[1],
                        ie = Object(a.useState)(0),
                        oe = Object(d.a)(ie, 2),
                        le = oe[0],
                        de = oe[1],
                        be = Object(a.useState)(!1),
                        je = Object(d.a)(be, 2),
                        xe = je[0],
                        pe = je[1],
                        ue = Object(a.useState)("Connect Wallet"),
                        he = Object(d.a)(ue, 2),
                        fe = he[0],
                        Oe = he[1],
                        ke = Object(a.useState)("Connect Wallet"),
                        we = Object(d.a)(ke, 2),
                        ve = we[0],
                        Te = we[1],
                        Ae = Object(a.useState)("Connect Wallet"),
                        Se = Object(d.a)(Ae, 2),
                        Ne = Se[0],
                        Ie = Se[1],
                        Me = Object(a.useState)("Connect Wallet"),
                        Fe = Object(d.a)(Me, 2),
                        Ee = Fe[0],
                        De = Fe[1],
                        Le = Object(a.useState)(!1),
                        ze = Object(d.a)(Le, 2),
                        Ye = ze[0],
                        Ze = ze[1],
                        He = Object(a.useState)([]),
                        Ve = Object(d.a)(He, 2),
                        Qe = Ve[0],
                        Je = Ve[1],
                        Xe = Object(a.useState)([]),
                        Ke = Object(d.a)(Xe, 2),
                        qe = Ke[0],
                        _e = Ke[1],
                        et = Object(a.useState)([]),
                        nt = Object(d.a)(et, 2),
                        at = nt[0],
                        rt = nt[1],
                        ct = Object(a.useState)(!1),
                        it = Object(d.a)(ct, 2),
                        lt = it[0],
                        dt = it[1],
                        bt = Object(a.useState)({}),
                        jt = Object(d.a)(bt, 2),
                        xt = jt[0],
                        pt = jt[1],
                        gt = Object(a.useState)(!1),
                        ht = Object(d.a)(gt, 2),
                        mt = ht[0],
                        ft = ht[1],
                        Ot = Object(a.useState)(!1),
                        yt = Object(d.a)(Ot, 2),
                        kt = yt[0],
                        vt = yt[1],
                        Tt = Object(a.useState)(!1),
                        At = Object(d.a)(Tt, 2),
                        St = At[0],
                        Nt = At[1],
                        Ct = Object(a.useState)(!1),
                        It = Object(d.a)(Ct, 2),
                        Rt = It[0],
                        Mt = It[1],
                        Ft = Object(a.useState)(!1),
                        Bt = Object(d.a)(Ft, 2),
                        Dt = Bt[0],
                        Wt = Bt[1],
                        zt = Object(a.useState)(!1),
                        Ut = Object(d.a)(zt, 2),
                        Gt = Ut[0],
                        Zt = Ut[1],
                        Ht = Object(a.useState)([]),
                        Vt = Object(d.a)(Ht, 2),
                        Qt = Vt[0],
                        Jt = Vt[1],
                        Xt = Object(a.useState)(!1),
                        Kt = Object(d.a)(Xt, 2),
                        qt = Kt[0],
                        _t = Kt[1],
                        $t = Object(a.useState)(!1),
                        en = Object(d.a)($t, 2),
                        nn = en[0],
                        an = en[1],
                        on = Object(a.useState)(!1),
                        ln = Object(d.a)(on, 2),
                        dn = ln[0],
                        bn = ln[1],
                        jn = Object(a.useState)([]),
                        xn = Object(d.a)(jn, 2),
                        pn = (xn[0], xn[1]),
                        un = Object(a.useState)(1),
                        gn = Object(d.a)(un, 2),
                        hn = gn[0],
                        mn = gn[1],
                        fn = Object(a.useState)([]),
                        On = Object(d.a)(fn, 2),
                        yn = On[0],
                        kn = On[1],
                        wn = Object(a.useState)([]),
                        vn = Object(d.a)(wn, 2),
                        Tn = vn[0],
                        An = vn[1],
                        Sn = Object(a.useState)(!1),
                        Nn = Object(d.a)(Sn, 2),
                        Cn = Nn[0],
                        In = Nn[1],
                        Rn = Object(a.useState)(!1),
                        Mn = Object(d.a)(Rn, 2),
                        Fn = Mn[0],
                        En = Mn[1],
                        Bn = Object(a.useState)(""),
                        Dn = Object(d.a)(Bn, 2),
                        Ln = Dn[0],
                        Wn = Dn[1],
                        zn = Object(a.useState)(!1),
                        Pn = Object(d.a)(zn, 2),
                        Un = Pn[0],
                        Gn = Pn[1],
                        Yn = Object(a.useState)(!0),
                        Zn = Object(d.a)(Yn, 2),
                        Hn = Zn[0],
                        Vn = Zn[1],
                        Qn = Object(a.useState)(""),
                        Jn = Object(d.a)(Qn, 2),
                        Xn = Jn[0],
                        Kn = Jn[1],
                        qn = Object(a.useState)("none"),
                        _n = Object(d.a)(qn, 2),
                        $n = _n[0],
                        ea = _n[1],
                        ta = Object(a.useState)("visible"),
                        na = Object(d.a)(ta, 2),
                        aa = na[0],
                        ra = na[1],
                        ca = Object(a.useState)(!1),
                        sa = Object(d.a)(ca, 2),
                        ia = sa[0],
                        oa = sa[1],
                        la = Object(a.useState)(!1),
                        da = Object(d.a)(la, 2),
                        ba = da[0],
                        ja = da[1],
                        xa = Object(a.useState)(!1),
                        pa = Object(d.a)(xa, 2),
                        ua = pa[0],
                        ga = pa[1],
                        ha = Object(a.useState)(!1),
                        ma = Object(d.a)(ha, 2),
                        fa = ma[0],
                        Oa = ma[1],
                        ya = Object(a.useState)(!1),
                        ka = Object(d.a)(ya, 2),
                        wa = (ka[0], ka[1]),
                        va = Object(a.useState)(!1),
                        Ta = Object(d.a)(va, 2),
                        Aa = Ta[0],
                        Sa = Ta[1],
                        Na = Object(a.useState)(!1),
                        Ca = Object(d.a)(Na, 2),
                        Ia = Ca[0],
                        Ra = Ca[1],
                        Ma = Object(a.useState)([]),
                        Fa = Object(d.a)(Ma, 2),
                        Ea = Fa[0],
                        Ba = Fa[1],
                        Da = Object(a.useState)([]),
                        La = Object(d.a)(Da, 2),
                        Wa = La[0],
                        za = La[1],
                        Pa = Object(a.useState)(!1),
                        Ua = Object(d.a)(Pa, 2),
                        Ga = Ua[0],
                        Ya = Ua[1],
                        Za = Object(a.useState)(!1),
                        Ha = Object(d.a)(Za, 2),
                        Va = Ha[0],
                        Qa = Ha[1],
                        Ja = Object(a.useState)(0),
                        Xa = Object(d.a)(Ja, 2),
                        Ka = Xa[0],
                        qa = Xa[1],
                        _a = Object(a.useState)(0),
                        $a = Object(d.a)(_a, 2),
                        er = $a[0],
                        tr = $a[1],
                        nr = Object(a.useState)(0),
                        ar = Object(d.a)(nr, 2),
                        rr = ar[0],
                        cr = ar[1],
                        sr = Object(a.useState)(0),
                        ir = Object(d.a)(sr, 2),
                        or = ir[0],
                        lr = ir[1],
                        dr = Object(a.useState)(!1),
                        br = Object(d.a)(dr, 2),
                        jr = br[0],
                        xr = br[1],
                        pr = Object(a.useState)([]),
                        ur = Object(d.a)(pr, 2),
                        gr = ur[0],
                        hr = ur[1],
                        mr = Object(a.useState)(!1),
                        fr = Object(d.a)(mr, 2),
                        Or = fr[0],
                        yr = fr[1],
                        kr = Object(a.useState)(0),
                        wr = Object(d.a)(kr, 2),
                        vr = wr[0],
                        Tr = wr[1],
                        Ar = Object(a.useState)(""),
                        Sr = Object(d.a)(Ar, 2),
                        Nr = Sr[0],
                        Cr = Sr[1],
                        Ir = Object(a.useState)([]),
                        Rr = Object(d.a)(Ir, 2),
                        Mr = Rr[0],
                        Fr = Rr[1],
                        Er = Object(a.useState)(0),
                        Br = Object(d.a)(Er, 2),
                        Dr = Br[0],
                        Lr = Br[1],
                        Wr = Object(a.useState)(0),
                        zr = Object(d.a)(Wr, 2),
                        Pr = zr[0],
                        Ur = zr[1],
                        Gr = Object(a.useState)(0),
                        Yr = Object(d.a)(Gr, 2),
                        Zr = Yr[0],
                        Hr = Yr[1],
                        Vr = ut(n),
                        Qr = Vr._stakeContract,
                        Jr = (Vr._stakeTokenContract, r.a.useState(0)),
                        Xr = Object(d.a)(Jr, 2),
                        Kr = Xr[0],
                        qr = Xr[1],
                        _r = r.a.useState(0),
                        $r = Object(d.a)(_r, 2),
                        ec = $r[0],
                        tc = $r[1],
                        nc = r.a.useState(0),
                        ac = Object(d.a)(nc, 2),
                        rc = ac[0],
                        cc = ac[1],
                        sc = r.a.useState(0),
                        ic = Object(d.a)(sc, 2),
                        oc = ic[0],
                        lc = ic[1],
                        dc = r.a.useState(0),
                        bc = Object(d.a)(dc, 2),
                        jc = bc[0],
                        xc = bc[1],
                        pc = r.a.useState(0),
                        uc = Object(d.a)(pc, 2),
                        gc = uc[0],
                        hc = uc[1],
                        mc = r.a.useState(0),
                        fc = Object(d.a)(mc, 2),
                        Oc = fc[0],
                        yc = fc[1],
                        kc = r.a.useState(0),
                        wc = Object(d.a)(kc, 2),
                        vc = wc[0],
                        Tc = wc[1],
                        Ac = r.a.useState(0),
                        Sc = Object(d.a)(Ac, 2),
                        Nc = Sc[0],
                        Cc = Sc[1],
                        Ic = r.a.useState(0),
                        Rc = Object(d.a)(Ic, 2),
                        Mc = Rc[0],
                        Fc = Rc[1],
                        Ec = r.a.useState(0),
                        Bc = Object(d.a)(Ec, 2),
                        Dc = Bc[0],
                        Lc = Bc[1],
                        Wc = r.a.useState(0),
                        zc = Object(d.a)(Wc, 2),
                        Pc = zc[0],
                        Uc = zc[1],
                        Gc = r.a.useState(0),
                        Yc = Object(d.a)(Gc, 2),
                        Zc = Yc[0],
                        Hc = Yc[1],
                        Vc = r.a.useState(0),
                        Qc = Object(d.a)(Vc, 2),
                        Jc = Qc[0],
                        Xc = Qc[1],
                        Kc = r.a.useState(0),
                        qc = Object(d.a)(Kc, 2),
                        _c = qc[0],
                        $c = qc[1],
                        es = r.a.useState(0),
                        ts = Object(d.a)(es, 2),
                        ns = ts[0],
                        as = ts[1],
                        rs = r.a.useState(0),
                        cs = Object(d.a)(rs, 2),
                        ss = cs[0],
                        is = cs[1],
                        os = function() {
                            var e = Object(l.a)(Object(o.a)().mark((function e() {
                                var t, n;
                                return Object(o.a)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!Qr) {
                                                e.next = 9;
                                                break
                                            }
                                            return e.next = 3, Qr.getuserdata(0, j).call();
                                        case 3:
                                            if (!((t = e.sent).ids.length > 0)) {
                                                e.next = 9;
                                                break
                                            }
                                            return n = t.ids.map((function(e) {
                                                return +e
                                            })), e.next = 8, u.a.post("".concat(S, "/stakeIds"), {
                                                isCheck: n,
                                                userWalletAddress: j
                                            });
                                        case 8:
                                            e.sent;
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                    r.a.useEffect((function() {
                        os()
                    }), [j, Qr]);
                    var ls = function() {
                        var e = Object(l.a)(Object(o.a)().mark((function e() {
                            var t, n;
                            return Object(o.a)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!j || !W) {
                                            e.next = 8;
                                            break
                                        }
                                        return e.next = 3, W.Mintedbyowner(j).call();
                                    case 3:
                                        if (!(+(t = e.sent).length > 0)) {
                                            e.next = 8;
                                            break
                                        }
                                        for (n = 0; n < t.length; n++) t[n] = +t[n];
                                        return e.next = 8, u.a.post("/cashbackQuery", {
                                            walletAddress: j,
                                            DataArray: t
                                        }).then((function(e) {
                                            "success" === e.data ? (ks(!0), oa(!1), A.b.success("cashback-calculated")) : console.log(e.data)
                                        }));
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                    Object(a.useEffect)((function() {
                        j && W && ls()
                    }), [j, W]), Object(a.useEffect)((function() {
                        j && (j.toLowerCase() != "TFroR66n2jaqwW4fByX1X7mLnBQ6FK3mjz".toLowerCase() && j.toLowerCase() != "TFroR66n2jaqwW4fByX1X7mLnBQ6FK3mjz".toLowerCase() && j.toLowerCase() != "TFroR66n2jaqwW4fByX1X7mLnBQ6FK3mjz".toLowerCase() ? (me()(document).bind("contextmenu", (function(e) {
                            return !1
                        })), me()(document).on("cut copy paste", (function(e) {
                            e.preventDefault()
                        }))) : (me()(document).unbind("contextmenu"), me()(document).unbind("cut copy paste")))
                    }), [j]);
                    var ds = function() {
                        var e = Object(l.a)(Object(o.a)().mark((function e() {
                            return Object(o.a)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        j && n && n && n.trx.getBalance(j).then((function(e) {
                                            Tr((+n.fromSun(e) / 1).toFixed(2)), xr(!1)
                                        })).catch((function(e) {}));
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                    r.a.useEffect((function() {
                        j && n && ds()
                    }), [n, j, jr]);
                    var bs = function() {
                        var e = Object(l.a)(Object(o.a)().mark((function e() {
                            var t, n, a, r;
                            return Object(o.a)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return oa(!0), e.next = 3, W.idsbyowner(j).call();
                                    case 3:
                                        return t = e.sent, e.next = 6, W.Mintedbyowner(j).call();
                                    case 6:
                                        for (n = e.sent, a = 0; a < n.length; a++) n[a] = +n[a];
                                        for (r = 0; r < t.length; r++) t[r] = +t[r];
                                        return e.next = 11, u.a.post("/checkAlignment", {
                                            walletAddress: j,
                                            idsByowner: t,
                                            mintedIds: n
                                        }).then((function(e) {
                                            "success" === e.data ? (ks(!0), oa(!1), A.b.success("Data Alignment Done")) : "regular" === e.data ? oa(!1) : console.log(e.data, "res.data")
                                        }));
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                    Object(a.useEffect)((function() {
                        W && j && bs()
                    }), [W, j]), Object(a.useEffect)((function() {
                        var e = [].concat(Object(i.a)(qe), Object(i.a)(at));
                        e && Fr(e)
                    }), [qe, at]);
                    var js = function() {
                        var e = Object(l.a)(Object(o.a)().mark((function e() {
                            var t, n, a, r;
                            return Object(o.a)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (e.prev = 0, t = (250000000 * hn).toString(), !Un) {
                                            e.next = 15;
                                            break
                                        }
                                        return A.b.success("Airdrop Minting..."), e.next = 6, W.airdrop(Ln, hn).send({
                                            feeLimit: 1e9
                                        });
                                    case 6:
                                        return n = e.sent, A.b.success(n), e.next = 10, u.a.post("/minthandler", {
                                            walletAddress: Ln,
                                            transId: n,
                                            DataArray: yn,
                                            randomSelected: Tn
                                        }).then((function(e) {
                                            "success" === e.data ? (A.b.success("NFT Minted"), In(!0)) : A.b.error(e.data)
                                        }));
                                    case 10:
                                        dt(!1), bn(!1), oa(!1), e.next = 37;
                                        break;
                                    case 15:
                                        if (!Ga) {
                                            e.next = 27;
                                            break
                                        }
                                        return e.next = 18, W.mint(j, hn, Ga).send({
                                            callValue: 0,
                                            feeLimit: 1e9
                                        });
                                    case 18:
                                        return a = e.sent, A.b.success(a), e.next = 22, u.a.post("/minthandler", {
                                            walletAddress: j,
                                            transId: a,
                                            DataArray: yn,
                                            randomSelected: Tn
                                        }).then((function(e) {
                                            "success" == e.data ? (A.b.success("NFT Minted"), In(!0)) : A.b.error(e.data)
                                        }));
                                    case 22:
                                        dt(!1), bn(!1), oa(!1), e.next = 37;
                                        break;
                                    case 27:
                                        return A.b.success("TRX Minting..."), e.next = 30, W.mint(j, hn, Ga).send({
                                            callValue: t,
                                            feeLimit: 1e9
                                        });
                                    case 30:
                                        return r = e.sent, A.b.success(r), e.next = 34, u.a.post("/minthandler", {
                                            walletAddress: j,
                                            transId: r,
                                            DataArray: yn,
                                            randomSelected: Tn
                                        }).then((function(e) {
                                            "success" === e.data ? (A.b.success("NFT Minted"), In(!0)) : A.b.error(e.data)
                                        }));
                                    case 34:
                                        dt(!1), bn(!1), oa(!1);
                                    case 37:
                                        bn(!1), dt(!1), xs(), zs(), ls(), e.next = 51;
                                        break;
                                    case 44:
                                        e.prev = 44, e.t0 = e.catch(0), oa(!1), Gn(!1), bn(!1), dt(!1), e.t0.transaction ? A.b.error(e.t0) : e.t0.message ? A.b.error(e.t0.message) : e.t0.error && A.b.error(e.t0.error);
                                    case 51:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 44]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                    Object(a.useEffect)((function() {
                        lt && js()
                    }), [lt]), Object(a.useEffect)((function() {
                        Object(l.a)(Object(o.a)().mark((function e() {
                            var t, n;
                            return Object(o.a)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!ba || !W) {
                                            e.next = 19;
                                            break
                                        }
                                        return e.prev = 1, e.next = 4, W.idsbyowner(j).call();
                                    case 4:
                                        return (t = e.sent).forEach((function(e, n) {
                                            t[n] = +t[n]
                                        })), e.next = 8, W.transferFrom(j.toString(), fa.toString(), ua.toString()).send();
                                    case 8:
                                        return n = e.sent, A.b.warning("you will be notified further after the transaction has been completed!"), e.next = 12, u.a.post("/transferownership", {
                                            transferResponse: n,
                                            id: ua,
                                            newowner: fa,
                                            currentowner: j,
                                            prevData: t
                                        }).then((function(e) {
                                            "success" === e.data ? A.b.success("OwnerShip Transfered") : A.b.error("failed"), ks(!0), oa(!1), ja(!1)
                                        }));
                                    case 12:
                                        e.next = 19;
                                        break;
                                    case 14:
                                        e.prev = 14, e.t0 = e.catch(1), oa(!1), ja(!1), console.log(e.t0);
                                    case 19:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [1, 14]
                            ])
                        })))()
                    }), [ba, W]);
                    var xs = function() {
                        var e = Object(l.a)(Object(o.a)().mark((function e() {
                            var t, n, a, r, c, s, i, l, d, b, x;
                            return Object(o.a)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!(W && G && V)) {
                                            e.next = 54;
                                            break
                                        }
                                        return e.prev = 1, e.next = 4, W.NFTPrice().call();
                                    case 4:
                                        return t = e.sent, Te(Math.trunc(Object(Ge.c)(t.toString(), 6))), e.next = 8, W.NFTPriceToken().call();
                                    case 8:
                                        return n = e.sent, Ie(Math.trunc(Object(Ge.c)(n.toString(), 6))), e.next = 12, W.totalSupply().call();
                                    case 12:
                                        return a = e.sent, Oe(+a), De(1e4 - +a), e.next = 18, G.balanceOf(j).call();
                                    case 18:
                                        return r = e.sent, qa(+r), e.next = 22, G.balanceOf(te).call();
                                    case 22:
                                        return c = e.sent, qr(+c), e.next = 26, V.tokenPerTRXBuy().call();
                                    case 26:
                                        return s = e.sent, Ur(+s), e.next = 30, V.tokenPerTRXSell().call();
                                    case 30:
                                        return i = e.sent, Hr(+i), e.next = 34, V.boughtTokenexchange().call();
                                    case 34:
                                        return l = e.sent, Lr(Object(Ge.c)(l.toString(), "6")), e.next = 38, G.allowance(j, _).call();
                                    case 38:
                                        return d = e.sent, tr(+d), e.next = 42, G.allowance(j, $).call();
                                    case 42:
                                        return b = e.sent, cr(+b), e.next = 46, W.NFTPriceToken().call();
                                    case 46:
                                        x = e.sent, lr(+x), e.next = 52;
                                        break;
                                    case 50:
                                        e.prev = 50, e.t0 = e.catch(1);
                                    case 52:
                                        e.next = 55;
                                        break;
                                    case 54:
                                        return e.abrupt("return");
                                    case 55:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [1, 50]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                    Object(a.useEffect)((function() {
                        Object(l.a)(Object(o.a)().mark((function e() {
                            return Object(o.a)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        xs(), xr(!1);
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    }), [W, G, jr, V]);
                    var ps = function() {
                        var e = Object(l.a)(Object(o.a)().mark((function e() {
                            var t;
                            return Object(o.a)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, window.tronLink.request({
                                            method: "tron_requestAccounts"
                                        });
                                    case 2:
                                        t = e.sent, de(t.code);
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                    r.a.useEffect((function() {
                        if (!0 === ce) {
                            ps();
                            var e = setInterval((function() {
                                window.tronWeb && window.tronWeb.ready && (c(window.tronWeb), clearInterval(e))
                            }), 500)
                        }
                    }), [ce]), r.a.useEffect((function() {
                        Object(l.a)(Object(o.a)().mark((function e() {
                            return Object(o.a)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        n && (p(n.defaultAddress.base58), n.contract().at(_).then((function(e) {
                                            return z(e)
                                        })), n.contract().at(ee).then((function(e) {
                                            return Y(e)
                                        })), n.contract().at($).then((function(e) {
                                            return Q(e)
                                        })));
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    }), [n, w]), r.a.useEffect((function() {
                        window.addEventListener("message", (function(e) {
                            e.data.message && "accountsChanged" === e.data.message.action && window.location.reload()
                        }))
                    }), []), r.a.useEffect((function() {
                        window.addEventListener("message", (function(e) {
                            e.data.message && "disconnect" === e.data.message.action && window.location.reload()
                        }))
                    }), []), r.a.useEffect((function() {
                        window.addEventListener("message", (function(e) {
                            e.data.message && "setNode" === e.data.message.action && (e.data.message.data.node.chain, window.location.reload())
                        }))
                    }), []);
                    var us = Object(a.useState)(!1),
                        gs = Object(d.a)(us, 2),
                        hs = gs[0],
                        ms = gs[1],
                        fs = Object(a.useState)(!1),
                        Os = Object(d.a)(fs, 2),
                        ys = Os[0],
                        ks = Os[1],
                        ws = Object(a.useState)([]),
                        vs = Object(d.a)(ws, 2),
                        Ts = vs[0],
                        As = vs[1],
                        Ss = Object(a.useState)([]),
                        Ns = Object(d.a)(Ss, 2),
                        Cs = (Ns[0], Ns[1]),
                        Is = Object(a.useState)(!1),
                        Rs = Object(d.a)(Is, 2),
                        Ms = Rs[0],
                        Fs = Rs[1],
                        Es = Object(a.useState)(!1),
                        Bs = Object(d.a)(Es, 2),
                        Ds = Bs[0],
                        Ls = Bs[1],
                        Ws = function() {
                            var e = Object(l.a)(Object(o.a)().mark((function e(t) {
                                var n;
                                return Object(o.a)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, Object(i.a)(new Set(t.map((function(e) {
                                                return e.nftOwner
                                            }))));
                                        case 2:
                                            n = e.sent, As(n), Ls(!1), Fs(!0);
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }();
                    Object(a.useEffect)((function() {
                        Ds && Ws(Nr)
                    }), [Ds]), Object(a.useEffect)((function() {
                        Object(l.a)(Object(o.a)().mark((function e() {
                            return Object(o.a)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!Ms) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.next = 3, u.a.post("/OwnersData", {
                                            dataArray: Ts
                                        }).then((function(e) {
                                            Cs(e.data)
                                        }));
                                    case 3:
                                        Fs(!1);
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    }), [Ms]), Object(a.useEffect)((function() {
                        Object(l.a)(Object(o.a)().mark((function e() {
                            return Object(o.a)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if ("TFroR66n2jaqwW4fByX1X7mLnBQ6FK3mjz" !== j) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.next = 3, u.a.post("/getcashbackData").then((function(e) {
                                            Ba(e.data)
                                        }));
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    }), [j, Cn]);
                    var zs = function() {
                        var e = Object(l.a)(Object(o.a)().mark((function e() {
                            return Object(o.a)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, u.a.post("/getcashbackData2", {
                                            wallet: j
                                        }).then((function(e) {
                                            za(e.data)
                                        }));
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                    Object(a.useEffect)((function() {
                        j && zs(), In(!1)
                    }), [j, Cn]);
                    var Ps = function() {
                        var e = Object(l.a)(Object(o.a)().mark((function e() {
                            var t;
                            return Object(o.a)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, u.a.get("/getMinted");
                                    case 2:
                                        t = e.sent, Cr(t.data.dataLength);
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                    Object(a.useEffect)((function() {
                        Ps()
                    }), []);
                    var Us = Object(a.useState)(50),
                        Gs = Object(d.a)(Us, 2),
                        Ys = Gs[0],
                        Zs = Gs[1],
                        Hs = Object(a.useState)(!1),
                        Vs = Object(d.a)(Hs, 2),
                        Qs = Vs[0],
                        Js = Vs[1];
                    Object(a.useEffect)((function() {
                        Object(l.a)(Object(o.a)().mark((function e() {
                            return Object(o.a)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!Fn) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.next = 3, u.a.post("/nftlist1", {
                                            maxLimit: Ys
                                        }).then((function(e) {
                                            Je(e.data)
                                        }));
                                    case 3:
                                        En(!1);
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    }), [Fn]), Object(a.useEffect)((function() {
                        Object(l.a)(Object(o.a)().mark((function e() {
                            return Object(o.a)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, u.a.post("/nftlist1", {
                                            maxLimit: Ys
                                        }).then((function(e) {
                                            Je(e.data), Js(!1), y(!1)
                                        }));
                                    case 2:
                                        Js(!1);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    }), [lt, Dt, dn, Qs]);
                    var Xs = function() {
                            var e = Object(l.a)(Object(o.a)().mark((function e() {
                                return Object(o.a)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!j) {
                                                e.next = 5;
                                                break
                                            }
                                            return e.next = 3, u.a.post("/mynfts", {
                                                walletAddress: j
                                            }).then(function() {
                                                var e = Object(l.a)(Object(o.a)().mark((function e(t) {
                                                    var n;
                                                    return Object(o.a)().wrap((function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                if (_e(t.data), n = t.data.map((function(e) {
                                                                        return e.nftid
                                                                    })), !(+t.data.length > 0)) {
                                                                    e.next = 6;
                                                                    break
                                                                }
                                                                return e.next = 5, u.a.post("".concat(S, "/unstakeIds"), n);
                                                            case 5:
                                                                e.sent;
                                                            case 6:
                                                                ks(!1);
                                                            case 7:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })));
                                                return function(t) {
                                                    return e.apply(this, arguments)
                                                }
                                            }());
                                        case 3:
                                            return e.next = 5, u.a.post("/myStakedNfts", {
                                                walletAddress: j
                                            }).then((function(e) {
                                                rt(e.data)
                                            }));
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        Ks = function() {
                            var e = Object(l.a)(Object(o.a)().mark((function e() {
                                var t, n, a, r, c, s, i, d, b, x;
                                return Object(o.a)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, Qr.getuserdata(1, j).call();
                                        case 3:
                                            return t = e.sent, e.next = 6, Qr.getuserdata(0, j).call();
                                        case 6:
                                            return n = e.sent, e.next = 9, W.balanceOf(te).call();
                                        case 9:
                                            return a = e.sent, e.next = 12, Qr.totalStaked().call();
                                        case 12:
                                            return e.sent, e.next = 15, Qr.viewPlan(1).call();
                                        case 15:
                                            return r = e.sent, e.next = 18, Qr.viewPlan(0).call();
                                        case 18:
                                            return c = e.sent, e.next = 21, Qr.percentDivider().call();
                                        case 21:
                                            return s = e.sent, e.next = 24, Qr.getuseroveralldata(1, j).call();
                                        case 24:
                                            return i = e.sent, e.next = 27, Qr.getuseroveralldata(0, j).call();
                                        case 27:
                                            return d = e.sent, e.next = 30, Qr.totalNftRewardClaimed().call();
                                        case 30:
                                            return b = e.sent, e.next = 33, Qr.totalRewardClaimed().call();
                                        case 33:
                                            x = e.sent, lc(x), tc(b), Xc(n.LastClaimTime), $c(t.LastClaimTime), as(t.UnStakeTime), is(n.UnStakeTime), Hc(s), Lc(+c.profit), Uc(+r.profit), cc(+a), Cc(t.Amount), hc(+i._totalClaimed), Fc(+n.ids.length), xc(+d._totalClaimed), setInterval(Object(l.a)(Object(o.a)().mark((function e() {
                                                return Object(o.a)().wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            Object(l.a)(Object(o.a)().mark((function e() {
                                                                var t, n;
                                                                return Object(o.a)().wrap((function(e) {
                                                                    for (;;) switch (e.prev = e.next) {
                                                                        case 0:
                                                                            return e.next = 2, Qr.calcRewards(j, 1).call();
                                                                        case 2:
                                                                            return t = e.sent, e.next = 5, Qr.calcRewards(j, 0).call();
                                                                        case 5:
                                                                            n = e.sent, t.hasOwnProperty("amount") ? yc(+t.amount) : yc(+t), n.hasOwnProperty("amount") ? Tc(+n.amount) : Tc(+n);
                                                                        case 8:
                                                                        case "end":
                                                                            return e.stop()
                                                                    }
                                                                }), e)
                                                            })))();
                                                        case 1:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            }))), 2e3), e.next = 53;
                                            break;
                                        case 51:
                                            e.prev = 51, e.t0 = e.catch(0);
                                        case 53:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 51]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                    r.a.useEffect((function() {
                        Object(l.a)(Object(o.a)().mark((function e() {
                            return Object(o.a)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        j && Qr && Ks(), j && Xs();
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    }), [j, Qr, lt, ys]);
                    var qs = Object(a.useState)((function() {
                            return !1
                        })),
                        _s = Object(d.a)(qs, 2),
                        $s = _s[0],
                        ei = _s[1];
                    document.body.style.backgroundColor = !0 === $s ? "#101010" : "rgb(241, 241, 241)";
                    var ti = sn();
                    return Object(N.jsx)("div", {
                        className: !0 === $s ? ti.dark : ti.light,
                        style: {
                            marginTop: "20px"
                        },
                        children: Object(N.jsxs)(x.a, {
                            theme: $s ? cn : rn,
                            children: [Object(N.jsxs)(g.a, {
                                children: [Object(N.jsx)(X, {
                                    isDarkMode: $s,
                                    setIsDarkMode: ei,
                                    setfromgallery: an,
                                    setupdateGallery: En,
                                    userWalletAddress: j
                                }), Object(N.jsx)(h.a, {
                                    exact: !0,
                                    path: "/CuteApeinfo/:id",
                                    children: Object(N.jsx)(Re, {
                                        setcurrentSellingNftObject: pt,
                                        currentSellingNftObject: xt,
                                        setjdogeState: ft,
                                        jdogeState: mt,
                                        setgalleryState: vt,
                                        galleryState: kt,
                                        setcurrent3dLink: Kn,
                                        setviewmodalopen: Vn,
                                        setvisibility: ea,
                                        setisVisible: ra
                                    })
                                }), Object(N.jsx)(h.a, {
                                    exact: !0,
                                    path: "/CuteApe",
                                    children: Object(N.jsx)(ye, {
                                        myPunks: qe,
                                        setlogoutopen: pe,
                                        userAction: le,
                                        setActivation: se,
                                        userWalletAddress: j,
                                        setcurrentSellingNftObject: pt,
                                        setjdogeState: ft,
                                        setfiltermodalopen2: Mt,
                                        sortBy: Gt,
                                        setcurrent3dLink: Kn,
                                        setviewmodalopen: Vn,
                                        setopeninput: Ze,
                                        setmintID: ga,
                                        setPlayopen: Ra,
                                        setPlay: wa,
                                        setPlayId: Sa,
                                        cashbackData2: Wa,
                                        setmyDoges: Fr,
                                        myDoges: Mr,
                                        intTwo: zs,
                                        _stakedNft: at,
                                        _MyPunks: Xs,
                                        stakeinit: os
                                    })
                                }), Object(N.jsx)(h.a, {
                                    exact: !0,
                                    path: "/",
                                    children: Object(N.jsx)(ge, {
                                        userWalletAddress: j,
                                        setopeninput: Ze,
                                        nftPrice: ve,
                                        totalSupply: fe,
                                        logoutopen: xe,
                                        setlogoutopen: pe,
                                        userAction: le,
                                        setActivation: se,
                                        Activation: ce,
                                        isDarkMode: $s,
                                        galleryPunks: Qe,
                                        totalAvailable: Ee,
                                        setMintArray: pn,
                                        setBuyConfirmation: dt,
                                        isMintProcessing: dn,
                                        setisMintProcessing: bn,
                                        setmintNumber: mn,
                                        mintNumber: hn,
                                        setMongoIds: kn,
                                        contractNft: W,
                                        setloading: oa,
                                        loading: ia,
                                        setairdropState: Gn,
                                        setPlayopen: Ra,
                                        Playopen: Ia,
                                        setPlayId: Sa,
                                        PlayId: Aa,
                                        setisTrc20: Ya,
                                        isTrc20: Ga,
                                        allowance: er,
                                        nftTokenprice: or,
                                        nftPriceToken: Ne,
                                        tronWeb: n,
                                        balanceOf: Ka,
                                        contractToken: G,
                                        setupdateInfo: xr,
                                        setrandomSelectionIds: An
                                    })
                                }), Object(N.jsx)(h.a, {
                                    exact: !0,
                                    path: "/gallery",
                                    children: Object(N.jsx)(I, {
                                        galleryPunks: Qe,
                                        userWalletAddress: j,
                                        galleryServerResponse: Dt,
                                        setgalleryServerResponse: Wt,
                                        setfiltermodalopen: Nt,
                                        sortBy: Gt,
                                        setsortBy: Zt,
                                        attributes: Qt,
                                        setattributes: Jt,
                                        filterByType: qt,
                                        setfilterByType: _t,
                                        setcurrentSellingNftObject: pt,
                                        fromgallery: nn,
                                        setfromgallery: an,
                                        setgalleryState: vt,
                                        setcurrent3dLink: Kn,
                                        setviewmodalopen: Vn,
                                        setupperBound: Zs,
                                        upperBound: Ys,
                                        loadmoreState: Qs,
                                        setloadmoreState: Js,
                                        searchState: hs,
                                        setsearchState: ms,
                                        setfilterLoadmore: ne,
                                        filterLoadmore: q,
                                        setdata: y,
                                        data: O,
                                        setloadmoreObject: R,
                                        loadmoreObject: C,
                                        setfield: B,
                                        field: E,
                                        initMinted: Ps
                                    })
                                }), "TFroR66n2jaqwW4fByX1X7mLnBQ6FK3mjz" === j | "TFroR66n2jaqwW4fByX1X7mLnBQ6FK3mjz" === j | "TFroR66n2jaqwW4fByX1X7mLnBQ6FK3mjz" === j ? Object(N.jsx)(h.a, {
                                    exact: !0,
                                    path: "/admin",
                                    children: Object(N.jsx)($e, {
                                        setMintArray: pn,
                                        setBuyConfirmation: dt,
                                        isMintProcessing: dn,
                                        setisMintProcessing: bn,
                                        setmintNumber: mn,
                                        setMongoIds: kn,
                                        userWalletAddress: j,
                                        contractNft: W,
                                        airdropWalletAddress: Ln,
                                        setairdropWalletAddress: Wn,
                                        setairdropState: Gn,
                                        setloading: oa,
                                        cashbackData: Ea,
                                        setupdateIds: In,
                                        intTwo: zs
                                    })
                                }) : null, Object(N.jsx)(h.a, {
                                    exact: !0,
                                    path: "/stake",
                                    children: Object(N.jsx)(wt, {
                                        userWalletAddress: j,
                                        setlogoutopen: pe,
                                        userAction: le,
                                        setActivation: se,
                                        isDarkMode: $s,
                                        setselectionmodalopen: Qa,
                                        myPunks: qe,
                                        balanceOf: Ka,
                                        tronWeb: n,
                                        _allignment: bs,
                                        _MyPunks: Xs,
                                        contractNft: W,
                                        selectionmodalopen: Va,
                                        setloading: oa,
                                        loading: ia,
                                        stakedNft: at,
                                        _homeCounterinfo: xs,
                                        contractBalance: Kr,
                                        rewardNftClaim: ec,
                                        totalNftStaked: rc,
                                        rewardTBLclaim: oc,
                                        withdrawl: jc,
                                        Tblreward: gc,
                                        tblProfit: Oc,
                                        currentProfit: vc,
                                        staketbl: Nc,
                                        nftStaked: Mc,
                                        Trc721Reward: Dc,
                                        erc20Reward: Pc,
                                        _percentDivider: Zc,
                                        claimTimeNft: Jc,
                                        claimTimeTbl: _c,
                                        unstakeTimeTbl: ns,
                                        unstakeTimeNft: ss,
                                        _getStaked: Ks
                                    })
                                }), Object(N.jsx)(h.a, {
                                    exact: !0,
                                    path: "/bridge",
                                    children: Object(N.jsx)(Lt, {
                                        isDarkMode: $s,
                                        userWalletAddress: j,
                                        setlogoutopen: pe,
                                        setActivation: se,
                                        userAction: le
                                    })
                                }), Object(N.jsx)(h.a, {
                                    exact: !0,
                                    path: "/bridgeAccount",
                                    children: Object(N.jsx)(Pt, {
                                        isDarkMode: $s,
                                        userWalletAddress: j,
                                        setlogoutopen: pe,
                                        setActivation: se,
                                        userAction: le,
                                        setdetailsmodalopen: yr,
                                        myPunks: Mr,
                                        setethDetailedNft: hr,
                                        tronWeb: n
                                    })
                                }), Object(N.jsx)(h.a, {
                                    exact: !0,
                                    path: "/exchange",
                                    children: Object(N.jsx)(tn, {
                                        isDarkMode: $s,
                                        userWalletAddress: j,
                                        setlogoutopen: pe,
                                        setActivation: se,
                                        userAction: le,
                                        setaccountBalance: Tr,
                                        accountBalance: vr,
                                        balanceOf: Ka,
                                        contractExchange: V,
                                        contractToken: G,
                                        loading: ia,
                                        setloading: oa,
                                        tronWeb: n,
                                        allowanceExchange: rr,
                                        homeCounterinfo: xs,
                                        setupdateInfo: xr,
                                        updateInfo: jr,
                                        ExchangeBuyPrice: Pr,
                                        ExchangeSellPrice: Zr,
                                        btoken: Dr,
                                        init4: ds
                                    })
                                }), Object(N.jsx)(Ce, {
                                    logoutopen: xe,
                                    setlogoutopen: pe
                                })]
                            }), Object(N.jsx)(A.a, {
                                position: "top-right",
                                autoClose: 5e3,
                                hideProgressBar: !1,
                                newestOnTop: !1,
                                closeOnClick: !0,
                                rtl: !1,
                                pauseOnFocusLoss: !0,
                                draggable: !0,
                                pauseOnHover: !0
                            }), Object(N.jsx)(Be, {
                                filtermodalopen: St,
                                setfiltermodalopen: Nt,
                                sortBy: Gt,
                                setsortBy: Zt,
                                attributes: Qt,
                                setattributes: Jt,
                                filterByType: qt,
                                setfilterByType: _t,
                                isDarkMode: $s,
                                MintedNftsArray: Nr,
                                filterLoadmore: q,
                                setfilterLoadmore: ne,
                                setloadmoreObject: R,
                                loadmoreObject: C
                            }), Object(N.jsx)(We, {
                                filtermodalopen2: Rt,
                                setfiltermodalopen2: Mt,
                                sortBy: Gt,
                                setsortBy: Zt,
                                filterByType: qt,
                                setfilterByType: _t,
                                isDarkMode: $s,
                                MintedNftsArray: Nr,
                                myPunks: qe,
                                setloadmoreObject: R,
                                loadmoreObject: C
                            }), Object(N.jsx)(Pe, {
                                loading: ia
                            }), Object(N.jsx)(tt.a, {
                                style: {
                                    background: "#D40000"
                                },
                                smooth: !0
                            }), Object(N.jsx)(st, {
                                current3dLink: Xn,
                                viewmodalopen: Hn,
                                setviewmodalopen: Vn,
                                isDarkMode: $s,
                                visibility: $n,
                                setvisibility: ea,
                                isVisible: aa,
                                setisVisible: ra
                            }), Object(N.jsx)(ot, {
                                isDarkMode: $s,
                                setPlayopen: Ra,
                                Playopen: Ia,
                                setPlayId: Sa,
                                PlayId: Aa
                            }), Object(N.jsx)(Ue, {
                                openinput: Ye,
                                setopeninput: Ze,
                                userWalletAddress: j,
                                setconfirmTransfer: ja,
                                setnewowner: Oa,
                                setloading: oa
                            }), Object(N.jsx)(Yt, {
                                detailsmodalopen: Or,
                                setdetailsmodalopen: yr,
                                isDarkMode: $s,
                                setethDetailedNft: hr,
                                ethDetailedNft: gr
                            })]
                        })
                    })
                },
                ln = function(e) {
                    e && e instanceof Function && n.e(3).then(n.bind(null, 1344)).then((function(t) {
                        var n = t.getCLS,
                            a = t.getFID,
                            r = t.getFCP,
                            c = t.getLCP,
                            s = t.getTTFB;
                        n(e), a(e), r(e), c(e), s(e)
                    }))
                };
            s.a.render(Object(N.jsx)(r.a.StrictMode, {
                children: Object(N.jsx)(Bt, {
                    children: Object(N.jsx)(on, {})
                })
            }), document.getElementById("root")), ln()
        },
        336: function(e, t, n) {},
        530: function(e, t, n) {},
        653: function(e, t, n) {},
        654: function(e, t, n) {
            console.log = function() {}
        },
        672: function(e, t, n) {},
        688: function(e, t, n) {},
        690: function(e, t, n) {},
        695: function(e, t, n) {},
        710: function(e, t) {},
        714: function(e, t) {},
        718: function(e, t) {},
        719: function(e, t) {},
        741: function(e, t) {},
        743: function(e, t) {},
        752: function(e, t) {},
        754: function(e, t) {},
        765: function(e, t) {},
        767: function(e, t) {},
        781: function(e, t) {},
        807: function(e, t) {},
        808: function(e, t) {},
        880: function(e, t) {},
        882: function(e, t) {},
        889: function(e, t) {},
        890: function(e, t) {},
        914: function(e, t) {},
        921: function(e, t) {},
        984: function(e, t) {}
    },
    [
        [1270, 1, 2]
    ]
]);
//# sourceMappingURL=main.ebf1c05a.chunk.js.map
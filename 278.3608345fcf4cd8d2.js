(self.webpackChunkwall_st = self.webpackChunkwall_st || []).push([
    [278], {
        11572: (ve, e) => {
            "use strict";

            function A(r) {
                if (Array.isArray(r)) {
                    const m = [];
                    let _ = 0;
                    for (let U = 0; U < r.length; U++) {
                        const S = A(r[U]);
                        m.push(S), _ += S.length
                    }
                    return v(w(_, 192), ...m)
                }
                const a = c(r);
                return 1 === a.length && a[0] < 128 ? a : v(w(a.length, 128), a)
            }

            function s(r, a, m) {
                if (m > r.length) throw new Error("invalid RLP (safeSlice): end slice of Uint8Array out-of-bounds");
                return r.slice(a, m)
            }

            function d(r) {
                if (0 === r[0]) throw new Error("invalid RLP: extra zeros");
                return T(p(r))
            }

            function w(r, a) {
                if (r < 56) return Uint8Array.from([r + a]);
                const m = x(r),
                    U = x(a + 55 + m.length / 2);
                return Uint8Array.from(R(U + m))
            }

            function B(r, a = !1) {
                if (typeof r > "u" || null === r || 0 === r.length) return Uint8Array.from([]);
                const _ = u(c(r));
                if (a) return _;
                if (0 !== _.remainder.length) throw new Error("invalid RLP: remainder must be zero");
                return _.data
            }

            function u(r) {
                let a, m, _, U, S;
                const D = [],
                    M = r[0];
                if (M <= 127) return {
                    data: r.slice(0, 1),
                    remainder: r.slice(1)
                };
                if (M <= 183) {
                    if (a = M - 127, _ = 128 === M ? Uint8Array.from([]) : s(r, 1, a), 2 === a && _[0] < 128) throw new Error("invalid RLP encoding: invalid prefix, single byte < 0x80 are not prefixed");
                    return {
                        data: _,
                        remainder: r.slice(a)
                    }
                }
                if (M <= 191) {
                    if (m = M - 182, r.length - 1 < m) throw new Error("invalid RLP: not enough bytes for string length");
                    if (a = d(s(r, 1, m)), a <= 55) throw new Error("invalid RLP: expected string length to be greater than 55");
                    return _ = s(r, m, a + m), {
                        data: _,
                        remainder: r.slice(a + m)
                    }
                }
                if (M <= 247) {
                    for (a = M - 191, U = s(r, 1, a); U.length;) S = u(U), D.push(S.data), U = S.remainder;
                    return {
                        data: D,
                        remainder: r.slice(a)
                    }
                } {
                    if (m = M - 246, a = d(s(r, 1, m)), a < 56) throw new Error("invalid RLP: encoded list too short");
                    const fe = m + a;
                    if (fe > r.length) throw new Error("invalid RLP: total length is larger than the data");
                    for (U = s(r, m, fe); U.length;) S = u(U), D.push(S.data), U = S.remainder;
                    return {
                        data: D,
                        remainder: r.slice(fe)
                    }
                }
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.RLP = e.utils = e.decode = e.encode = void 0, e.encode = A, e.decode = B;
            const l = Array.from({
                length: 256
            }, (r, a) => a.toString(16).padStart(2, "0"));

            function p(r) {
                let a = "";
                for (let m = 0; m < r.length; m++) a += l[r[m]];
                return a
            }

            function T(r) {
                const a = Number.parseInt(r, 16);
                if (Number.isNaN(a)) throw new Error("Invalid byte sequence");
                return a
            }

            function R(r) {
                if ("string" != typeof r) throw new TypeError("hexToBytes: expected string, got " + typeof r);
                if (r.length % 2) throw new Error("hexToBytes: received invalid unpadded hex");
                const a = new Uint8Array(r.length / 2);
                for (let m = 0; m < a.length; m++) {
                    const _ = 2 * m;
                    a[m] = T(r.slice(_, _ + 2))
                }
                return a
            }

            function v(...r) {
                if (1 === r.length) return r[0];
                const a = r.reduce((_, U) => _ + U.length, 0),
                    m = new Uint8Array(a);
                for (let _ = 0, U = 0; _ < r.length; _++) {
                    const S = r[_];
                    m.set(S, U), U += S.length
                }
                return m
            }

            function y(r) {
                return (new TextEncoder).encode(r)
            }

            function x(r) {
                if (r < 0) throw new Error("Invalid integer as argument, must be unsigned!");
                const a = r.toString(16);
                return a.length % 2 ? `0${a}` : a
            }

            function E(r) {
                return r.length >= 2 && "0" === r[0] && "x" === r[1]
            }

            function c(r) {
                if (r instanceof Uint8Array) return r;
                if ("string" == typeof r) return E(r) ? R(function o(r) {
                    return r.length % 2 ? `0${r}` : r
                }(function h(r) {
                    return "string" != typeof r ? r : E(r) ? r.slice(2) : r
                }(r))) : y(r);
                if ("number" == typeof r || "bigint" == typeof r) return r ? R(x(r)) : Uint8Array.from([]);
                if (null == r) return Uint8Array.from([]);
                throw new Error("toBytes: received unsupported type " + typeof r)
            }
            e.utils = {
                bytesToHex: p,
                concatBytes: v,
                hexToBytes: R,
                utf8ToBytes: y
            }, e.RLP = {
                encode: A,
                decode: B
            }
        },
        96688: (ve, e, A) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.accountBodyToRLP = e.accountBodyToSlim = e.accountBodyFromSlim = e.isZeroAddress = e.zeroAddress = e.importPublic = e.privateToAddress = e.privateToPublic = e.publicToAddress = e.pubToAddress = e.isValidPublic = e.isValidPrivate = e.generateAddress2 = e.generateAddress = e.isValidChecksumAddress = e.toChecksumAddress = e.isValidAddress = e.Account = void 0;
            const s = A(11572),
                d = A(20555),
                w = A(72991),
                B = A(21492),
                u = A(6444),
                l = A(84377),
                p = A(84728),
                T = A(5822),
                R = BigInt(0);
            class v {
                constructor(P = R, C = R, ae = l.KECCAK256_RLP, J = l.KECCAK256_NULL) {
                    this.nonce = P, this.balance = C, this.storageRoot = ae, this.codeHash = J, this._validate()
                }
                static fromAccountData(P) {
                    const {
                        nonce: C,
                        balance: ae,
                        storageRoot: J,
                        codeHash: re
                    } = P;
                    return new v(void 0 !== C ? (0, u.bufferToBigInt)((0, u.toBuffer)(C)) : void 0, void 0 !== ae ? (0, u.bufferToBigInt)((0, u.toBuffer)(ae)) : void 0, void 0 !== J ? (0, u.toBuffer)(J) : void 0, void 0 !== re ? (0, u.toBuffer)(re) : void 0)
                }
                static fromRlpSerializedAccount(P) {
                    const C = (0, u.arrToBufArr)(s.RLP.decode(Uint8Array.from(P)));
                    if (!Array.isArray(C)) throw new Error("Invalid serialized account input. Must be array");
                    return this.fromValuesArray(C)
                }
                static fromValuesArray(P) {
                    const [C, ae, J, re] = P;
                    return new v((0, u.bufferToBigInt)(C), (0, u.bufferToBigInt)(ae), J, re)
                }
                _validate() {
                    if (this.nonce < R) throw new Error("nonce must be greater than zero");
                    if (this.balance < R) throw new Error("balance must be greater than zero");
                    if (32 !== this.storageRoot.length) throw new Error("storageRoot must have a length of 32");
                    if (32 !== this.codeHash.length) throw new Error("codeHash must have a length of 32")
                }
                raw() {
                    return [(0, u.bigIntToUnpaddedBuffer)(this.nonce), (0, u.bigIntToUnpaddedBuffer)(this.balance), this.storageRoot, this.codeHash]
                }
                serialize() {
                    return Buffer.from(s.RLP.encode((0, u.bufArrToArr)(this.raw())))
                }
                isContract() {
                    return !this.codeHash.equals(l.KECCAK256_NULL)
                }
                isEmpty() {
                    return this.balance === R && this.nonce === R && this.codeHash.equals(l.KECCAK256_NULL)
                }
            }

            function M(O) {
                const [P, C, ae, J] = O;
                return [P, C, 0 === (0, u.arrToBufArr)(ae).length ? l.KECCAK256_RLP : ae, 0 === (0, u.arrToBufArr)(J).length ? l.KECCAK256_NULL : J]
            }
            e.Account = v, e.isValidAddress = function(O) {
                try {
                    (0, p.assertIsString)(O)
                } catch {
                    return !1
                }
                return /^0x[0-9a-fA-F]{40}$/.test(O)
            }, e.toChecksumAddress = function(O, P) {
                (0, p.assertIsHexString)(O);
                const C = (0, T.stripHexPrefix)(O).toLowerCase();
                let ae = "";
                void 0 !== P && (ae = (0, u.bufferToBigInt)((0, u.toBuffer)(P)).toString() + "0x");
                const J = Buffer.from(ae + C, "utf8"),
                    re = (0, B.bytesToHex)((0, d.keccak256)(J));
                let Y = "0x";
                for (let te = 0; te < C.length; te++) parseInt(re[te], 16) >= 8 ? Y += C[te].toUpperCase() : Y += C[te];
                return Y
            }, e.isValidChecksumAddress = function(O, P) {
                return (0, e.isValidAddress)(O) && (0, e.toChecksumAddress)(O, P) === O
            }, e.generateAddress = function(O, P) {
                return (0, p.assertIsBuffer)(O), (0, p.assertIsBuffer)(P), (0, u.bufferToBigInt)(P) === BigInt(0) ? Buffer.from((0, d.keccak256)(s.RLP.encode((0, u.bufArrToArr)([O, null])))).slice(-20) : Buffer.from((0, d.keccak256)(s.RLP.encode((0, u.bufArrToArr)([O, P])))).slice(-20)
            }, e.generateAddress2 = function(O, P, C) {
                if ((0, p.assertIsBuffer)(O), (0, p.assertIsBuffer)(P), (0, p.assertIsBuffer)(C), 20 !== O.length) throw new Error("Expected from to be of length 20");
                if (32 !== P.length) throw new Error("Expected salt to be of length 32");
                const ae = (0, d.keccak256)(Buffer.concat([Buffer.from("ff", "hex"), O, P, (0, d.keccak256)(C)]));
                return (0, u.toBuffer)(ae).slice(-20)
            }, e.isValidPrivate = function(O) {
                return w.secp256k1.utils.isValidPrivateKey(O)
            }, e.isValidPublic = function(O, P = !1) {
                if ((0, p.assertIsBuffer)(O), 64 === O.length) try {
                    return w.secp256k1.ProjectivePoint.fromHex(Buffer.concat([Buffer.from([4]), O])), !0
                } catch {
                    return !1
                }
                if (!P) return !1;
                try {
                    return w.secp256k1.ProjectivePoint.fromHex(O), !0
                } catch {
                    return !1
                }
            }, e.pubToAddress = function(O, P = !1) {
                if ((0, p.assertIsBuffer)(O), P && 64 !== O.length && (O = Buffer.from(w.secp256k1.ProjectivePoint.fromHex(O).toRawBytes(!1).slice(1))), 64 !== O.length) throw new Error("Expected pubKey to be of length 64");
                return Buffer.from((0, d.keccak256)(O)).slice(-20)
            }, e.publicToAddress = e.pubToAddress, e.privateToPublic = function(O) {
                return (0, p.assertIsBuffer)(O), Buffer.from(w.secp256k1.ProjectivePoint.fromPrivateKey(O).toRawBytes(!1).slice(1))
            }, e.privateToAddress = function(O) {
                return (0, e.publicToAddress)((0, e.privateToPublic)(O))
            }, e.importPublic = function(O) {
                return (0, p.assertIsBuffer)(O), 64 !== O.length && (O = Buffer.from(w.secp256k1.ProjectivePoint.fromHex(O).toRawBytes(!1).slice(1))), O
            }, e.zeroAddress = function() {
                const P = (0, u.zeros)(20);
                return (0, u.bufferToHex)(P)
            }, e.isZeroAddress = function(O) {
                try {
                    (0, p.assertIsString)(O)
                } catch {
                    return !1
                }
                return (0, e.zeroAddress)() === O
            }, e.accountBodyFromSlim = M;
            const fe = new Uint8Array(0);
            e.accountBodyToSlim = function Se(O) {
                const [P, C, ae, J] = O;
                return [P, C, (0, u.arrToBufArr)(ae).equals(l.KECCAK256_RLP) ? fe : ae, (0, u.arrToBufArr)(J).equals(l.KECCAK256_NULL) ? fe : J]
            }, e.accountBodyToRLP = function _e(O, P = !0) {
                const C = P ? M(O) : O;
                return (0, u.arrToBufArr)(s.RLP.encode(C))
            }
        },
        68186: (ve, e, A) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Address = void 0;
            const s = A(96688),
                d = A(6444);
            class w {
                constructor(u) {
                    if (20 !== u.length) throw new Error("Invalid address length");
                    this.buf = u
                }
                static zero() {
                    return new w((0, d.zeros)(20))
                }
                static fromString(u) {
                    if (!(0, s.isValidAddress)(u)) throw new Error("Invalid address");
                    return new w((0, d.toBuffer)(u))
                }
                static fromPublicKey(u) {
                    if (!Buffer.isBuffer(u)) throw new Error("Public key should be Buffer");
                    const l = (0, s.pubToAddress)(u);
                    return new w(l)
                }
                static fromPrivateKey(u) {
                    if (!Buffer.isBuffer(u)) throw new Error("Private key should be Buffer");
                    const l = (0, s.privateToAddress)(u);
                    return new w(l)
                }
                static generate(u, l) {
                    if ("bigint" != typeof l) throw new Error("Expected nonce to be a bigint");
                    return new w((0, s.generateAddress)(u.buf, (0, d.bigIntToBuffer)(l)))
                }
                static generate2(u, l, p) {
                    if (!Buffer.isBuffer(l)) throw new Error("Expected salt to be a Buffer");
                    if (!Buffer.isBuffer(p)) throw new Error("Expected initCode to be a Buffer");
                    return new w((0, s.generateAddress2)(u.buf, l, p))
                }
                equals(u) {
                    return this.buf.equals(u.buf)
                }
                isZero() {
                    return this.equals(w.zero())
                }
                isPrecompileOrSystemAddress() {
                    const u = (0, d.bufferToBigInt)(this.buf),
                        l = BigInt(0),
                        p = BigInt("0xffff");
                    return u >= l && u <= p
                }
                toString() {
                    return "0x" + this.buf.toString("hex")
                }
                toBuffer() {
                    return Buffer.from(this.buf)
                }
            }
            e.Address = w
        },
        39653: (ve, e, A) => {
            "use strict";
            var s = A(59344).default,
                d = A(51535).default;
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.AsyncEventEmitter = void 0;
            const w = A(82016);

            function u() {
                return (u = s(function*(p, T, R) {
                    let v;
                    var o, y = !1,
                        x = !1;
                    try {
                        for (var h, E = d(T); y = !(h = yield E.next()).done; y = !1) {
                            const c = h.value;
                            try {
                                c.length < 2 ? c.call(p, R) : yield new Promise((r, a) => {
                                    c.call(p, R, m => {
                                        m ? a(m) : r()
                                    })
                                })
                            } catch (r) {
                                v = r
                            }
                        }
                    } catch (c) {
                        x = !0, o = c
                    } finally {
                        try {
                            y && null != E.return && (yield E.return())
                        } finally {
                            if (x) throw o
                        }
                    }
                    if (v) throw v
                })).apply(this, arguments)
            }
            e.AsyncEventEmitter = class l extends w.EventEmitter {
                emit(T, ...R) {
                    let [v, y] = R;
                    const x = this;
                    let o = x._events[T] ? ? [];
                    return void 0 === y && "function" == typeof v && (y = v, v = void 0), ("newListener" === T || "removeListener" === T) && (v = {
                            event: v,
                            fn: y
                        }, y = void 0), o = Array.isArray(o) ? o : [o],
                        function B(p, T, R) {
                            return u.apply(this, arguments)
                        }(x, o.slice(), v).then(y).catch(y), x.listenerCount(T) > 0
                }
                once(T, R) {
                    const v = this;
                    let y;
                    if ("function" != typeof R) throw new TypeError("listener must be a function");
                    return y = R.length >= 2 ? function(x, o) {
                        v.removeListener(T, y), R(x, o)
                    } : function(x) {
                        v.removeListener(T, y), R(x, y)
                    }, v.on(T, y), v
                }
                first(T, R) {
                    let v = this._events[T] ? ? [];
                    if ("function" != typeof R) throw new TypeError("listener must be a function");
                    return Array.isArray(v) || (this._events[T] = v = [v]), v.unshift(R), this
                }
                before(T, R, v) {
                    return this.beforeOrAfter(T, R, v)
                }
                after(T, R, v) {
                    return this.beforeOrAfter(T, R, v, "after")
                }
                beforeOrAfter(T, R, v, y) {
                    let o, E, x = this._events[T] ? ? [];
                    const h = "after" === y ? 1 : 0;
                    if ("function" != typeof v) throw new TypeError("listener must be a function");
                    if ("function" != typeof R) throw new TypeError("target must be a function");
                    for (Array.isArray(x) || (this._events[T] = x = [x]), E = x.length, o = x.length; o--;)
                        if (x[o] === R) {
                            E = o + h;
                            break
                        }
                    return x.splice(E, 0, v), this
                }
                on(T, R) {
                    return super.on(T, R)
                }
                addListener(T, R) {
                    return super.addListener(T, R)
                }
                prependListener(T, R) {
                    return super.prependListener(T, R)
                }
                prependOnceListener(T, R) {
                    return super.prependOnceListener(T, R)
                }
                removeAllListeners(T) {
                    return super.removeAllListeners(T)
                }
                removeListener(T, R) {
                    return super.removeListener(T, R)
                }
                eventNames() {
                    return super.eventNames()
                }
                listeners(T) {
                    return super.listeners(T)
                }
                listenerCount(T) {
                    return super.listenerCount(T)
                }
                getMaxListeners() {
                    return super.getMaxListeners()
                }
                setMaxListeners(T) {
                    return super.setMaxListeners(T)
                }
            }
        },
        6444: (ve, e, A) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.intToUnpaddedBuffer = e.bigIntToUnpaddedBuffer = e.bigIntToHex = e.bufArrToArr = e.arrToBufArr = e.validateNoLeadingZeroes = e.baToJSON = e.toUtf8 = e.short = e.addHexPrefix = e.toUnsigned = e.fromSigned = e.bufferToInt = e.bigIntToBuffer = e.bufferToBigInt = e.bufferToHex = e.toBuffer = e.unpadHexString = e.unpadArray = e.unpadBuffer = e.setLengthRight = e.setLengthLeft = e.zeros = e.intToBuffer = e.intToHex = void 0;
            const s = A(84728),
                d = A(5822);
            e.intToHex = function(C) {
                if (!Number.isSafeInteger(C) || C < 0) throw new Error(`Received an invalid integer type: ${C}`);
                return `0x${C.toString(16)}`
            }, e.intToBuffer = function(C) {
                const ae = (0, e.intToHex)(C);
                return Buffer.from((0, d.padToEven)(ae.slice(2)), "hex")
            }, e.zeros = function(C) {
                return Buffer.allocUnsafe(C).fill(0)
            };
            const l = function(C, ae, J) {
                const re = (0, e.zeros)(ae);
                return J ? C.length < ae ? (C.copy(re), re) : C.slice(0, ae) : C.length < ae ? (C.copy(re, ae - C.length), re) : C.slice(-ae)
            };
            e.setLengthLeft = function(C, ae) {
                return (0, s.assertIsBuffer)(C), l(C, ae, !1)
            }, e.setLengthRight = function(C, ae) {
                return (0, s.assertIsBuffer)(C), l(C, ae, !0)
            };
            const R = function(C) {
                let ae = C[0];
                for (; C.length > 0 && "0" === ae.toString();) ae = (C = C.slice(1))[0];
                return C
            };

            function h(C) {
                const ae = (0, e.bufferToHex)(C);
                return BigInt("0x" === ae ? 0 : ae)
            }

            function c(C) {
                return (0, e.toBuffer)("0x" + C.toString(16))
            }
            e.unpadBuffer = function(C) {
                return (0, s.assertIsBuffer)(C), R(C)
            }, e.unpadArray = function(C) {
                return (0, s.assertIsArray)(C), R(C)
            }, e.unpadHexString = function(C) {
                return (0, s.assertIsHexString)(C), C = (0, d.stripHexPrefix)(C), "0x" + R(C)
            }, e.toBuffer = function(C) {
                if (null == C) return Buffer.allocUnsafe(0);
                if (Buffer.isBuffer(C) || Array.isArray(C) || C instanceof Uint8Array) return Buffer.from(C);
                if ("string" == typeof C) {
                    if (!(0, d.isHexString)(C)) throw new Error(`Cannot convert string to buffer. toBuffer only supports 0x-prefixed hex strings and this string was given: ${C}`);
                    return Buffer.from((0, d.padToEven)((0, d.stripHexPrefix)(C)), "hex")
                }
                if ("number" == typeof C) return (0, e.intToBuffer)(C);
                if ("bigint" == typeof C) {
                    if (C < BigInt(0)) throw new Error(`Cannot convert negative bigint to buffer. Given: ${C}`);
                    let ae = C.toString(16);
                    return ae.length % 2 && (ae = "0" + ae), Buffer.from(ae, "hex")
                }
                if (C.toArray) return Buffer.from(C.toArray());
                if (C.toBuffer) return Buffer.from(C.toBuffer());
                throw new Error("invalid type")
            }, e.bufferToHex = function(C) {
                return "0x" + (C = (0, e.toBuffer)(C)).toString("hex")
            }, e.bufferToBigInt = h, e.bigIntToBuffer = c, e.bufferToInt = function(C) {
                const ae = Number(h(C));
                if (!Number.isSafeInteger(ae)) throw new Error("Number exceeds 53 bits");
                return ae
            }, e.fromSigned = function(C) {
                return BigInt.asIntN(256, h(C))
            }, e.toUnsigned = function(C) {
                return c(BigInt.asUintN(256, C))
            }, e.addHexPrefix = function(C) {
                return "string" != typeof C || (0, d.isHexPrefixed)(C) ? C : "0x" + C
            }, e.short = function U(C, ae = 50) {
                const J = Buffer.isBuffer(C) ? C.toString("hex") : C;
                return J.length <= ae ? J : J.slice(0, ae) + "\u2026"
            }, e.toUtf8 = function(C) {
                if ((C = (0, d.stripHexPrefix)(C)).length % 2 != 0) throw new Error("Invalid non-even hex string input for toUtf8() provided");
                return Buffer.from(C.replace(/^(00)+|(00)+$/g, ""), "hex").toString("utf8")
            }, e.baToJSON = function(C) {
                if (Buffer.isBuffer(C)) return `0x${C.toString("hex")}`;
                if (C instanceof Array) {
                    const ae = [];
                    for (let J = 0; J < C.length; J++) ae.push((0, e.baToJSON)(C[J]));
                    return ae
                }
            }, e.validateNoLeadingZeroes = function(C) {
                for (const [ae, J] of Object.entries(C))
                    if (void 0 !== J && J.length > 0 && 0 === J[0]) throw new Error(`${ae} cannot have leading zeroes, received: ${J.toString("hex")}`)
            }, e.arrToBufArr = function fe(C) {
                return Array.isArray(C) ? C.map(ae => fe(ae)) : Buffer.from(C)
            }, e.bufArrToArr = function Se(C) {
                return Array.isArray(C) ? C.map(ae => Se(ae)) : Uint8Array.from(C ? ? [])
            }, e.bigIntToHex = C => "0x" + C.toString(16), e.bigIntToUnpaddedBuffer = function O(C) {
                return (0, e.unpadBuffer)(c(C))
            }, e.intToUnpaddedBuffer = function P(C) {
                return (0, e.unpadBuffer)((0, e.intToBuffer)(C))
            }
        },
        84377: (ve, e, A) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.MAX_WITHDRAWALS_PER_PAYLOAD = e.RLP_EMPTY_STRING = e.KECCAK256_RLP = e.KECCAK256_RLP_S = e.KECCAK256_RLP_ARRAY = e.KECCAK256_RLP_ARRAY_S = e.KECCAK256_NULL = e.KECCAK256_NULL_S = e.TWO_POW256 = e.SECP256K1_ORDER_DIV_2 = e.SECP256K1_ORDER = e.MAX_INTEGER_BIGINT = e.MAX_INTEGER = e.MAX_UINT64 = void 0;
            const s = A(39007),
                d = A(72991);
            e.MAX_UINT64 = BigInt("0xffffffffffffffff"), e.MAX_INTEGER = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"), e.MAX_INTEGER_BIGINT = BigInt("115792089237316195423570985008687907853269984665640564039457584007913129639935"), e.SECP256K1_ORDER = d.secp256k1.CURVE.n, e.SECP256K1_ORDER_DIV_2 = d.secp256k1.CURVE.n / BigInt(2), e.TWO_POW256 = BigInt("0x10000000000000000000000000000000000000000000000000000000000000000"), e.KECCAK256_NULL_S = "c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470", e.KECCAK256_NULL = s.Buffer.from(e.KECCAK256_NULL_S, "hex"), e.KECCAK256_RLP_ARRAY_S = "1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347", e.KECCAK256_RLP_ARRAY = s.Buffer.from(e.KECCAK256_RLP_ARRAY_S, "hex"), e.KECCAK256_RLP_S = "56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421", e.KECCAK256_RLP = s.Buffer.from(e.KECCAK256_RLP_S, "hex"), e.RLP_EMPTY_STRING = s.Buffer.from([128]), e.MAX_WITHDRAWALS_PER_PAYLOAD = 16
        },
        27242: (ve, e) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.compactBytesToNibbles = e.bytesToNibbles = e.nibblesToCompactBytes = e.nibblesToBytes = e.hasTerminator = void 0, e.hasTerminator = u => u.length > 0 && 16 === u[u.length - 1], e.nibblesToBytes = (u, l) => {
                for (let p = 0, T = 0; T < u.length; p += 1, T += 2) l[p] = u[T] << 4 | u[T + 1]
            }, e.nibblesToCompactBytes = u => {
                let l = 0;
                (0, e.hasTerminator)(u) && (l = 1, u = u.subarray(0, u.length - 1));
                const p = new Uint8Array(u.length / 2 + 1);
                return p[0] = l << 5, 1 == (1 & u.length) && (p[0] |= 16, p[0] |= u[0], u = u.subarray(1)), (0, e.nibblesToBytes)(u, p.subarray(1)), p
            }, e.bytesToNibbles = u => {
                const l = 2 * u.length + 1,
                    p = new Uint8Array(l);
                for (let T = 0; T < u.length; T++) {
                    const R = u[T];
                    p[2 * T] = R / 16, p[2 * T + 1] = R % 16
                }
                return p[l - 1] = 16, p
            }, e.compactBytesToNibbles = u => {
                if (0 === u.length) return u;
                let l = (0, e.bytesToNibbles)(u);
                return l[0] < 2 && (l = l.subarray(0, l.length - 1)), l.subarray(2 - (1 & l[0]))
            }
        },
        84728: (ve, e, A) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.assertIsString = e.assertIsArray = e.assertIsBuffer = e.assertIsHexString = void 0;
            const s = A(5822);
            e.assertIsHexString = function(l) {
                if (!(0, s.isHexString)(l)) throw new Error(`This method only supports 0x-prefixed hex strings but input was: ${l}`)
            }, e.assertIsBuffer = function(l) {
                if (!Buffer.isBuffer(l)) throw new Error(`This method only supports Buffer but input was: ${l}`)
            }, e.assertIsArray = function(l) {
                if (!Array.isArray(l)) throw new Error(`This method only supports number arrays but input was: ${l}`)
            }, e.assertIsString = function(l) {
                if ("string" != typeof l) throw new Error(`This method only supports strings but input was: ${l}`)
            }
        },
        7820: function(ve, e, A) {
            "use strict";
            var s = this && this.__createBinding || (Object.create ? function(B, u, l, p) {
                    void 0 === p && (p = l);
                    var T = Object.getOwnPropertyDescriptor(u, l);
                    (!T || ("get" in T ? !u.__esModule : T.writable || T.configurable)) && (T = {
                        enumerable: !0,
                        get: function() {
                            return u[l]
                        }
                    }), Object.defineProperty(B, p, T)
                } : function(B, u, l, p) {
                    void 0 === p && (p = l), B[p] = u[l]
                }),
                d = this && this.__exportStar || function(B, u) {
                    for (var l in B) "default" !== l && !Object.prototype.hasOwnProperty.call(u, l) && s(u, B, l)
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.toAscii = e.stripHexPrefix = e.padToEven = e.isHexString = e.isHexPrefixed = e.getKeys = e.getBinarySize = e.fromUtf8 = e.fromAscii = e.arrayContainsArray = void 0, d(A(84377), e), d(A(56974), e), d(A(96688), e), d(A(68186), e), d(A(99886), e), d(A(41858), e), d(A(6444), e), d(A(38277), e), d(A(27242), e), d(A(39653), e);
            var w = A(5822);
            Object.defineProperty(e, "arrayContainsArray", {
                enumerable: !0,
                get: function() {
                    return w.arrayContainsArray
                }
            }), Object.defineProperty(e, "fromAscii", {
                enumerable: !0,
                get: function() {
                    return w.fromAscii
                }
            }), Object.defineProperty(e, "fromUtf8", {
                enumerable: !0,
                get: function() {
                    return w.fromUtf8
                }
            }), Object.defineProperty(e, "getBinarySize", {
                enumerable: !0,
                get: function() {
                    return w.getBinarySize
                }
            }), Object.defineProperty(e, "getKeys", {
                enumerable: !0,
                get: function() {
                    return w.getKeys
                }
            }), Object.defineProperty(e, "isHexPrefixed", {
                enumerable: !0,
                get: function() {
                    return w.isHexPrefixed
                }
            }), Object.defineProperty(e, "isHexString", {
                enumerable: !0,
                get: function() {
                    return w.isHexString
                }
            }), Object.defineProperty(e, "padToEven", {
                enumerable: !0,
                get: function() {
                    return w.padToEven
                }
            }), Object.defineProperty(e, "stripHexPrefix", {
                enumerable: !0,
                get: function() {
                    return w.stripHexPrefix
                }
            }), Object.defineProperty(e, "toAscii", {
                enumerable: !0,
                get: function() {
                    return w.toAscii
                }
            }), d(A(84300), e), d(A(38179), e)
        },
        5822: (ve, e) => {
            "use strict";

            function A(v) {
                if ("string" != typeof v) throw new Error("[isHexPrefixed] input must be type 'string', received type " + typeof v);
                return "0" === v[0] && "x" === v[1]
            }

            function d(v) {
                let y = v;
                if ("string" != typeof y) throw new Error("[padToEven] value must be type 'string', received " + typeof y);
                return y.length % 2 && (y = `0${y}`), y
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.isHexString = e.getKeys = e.fromAscii = e.fromUtf8 = e.toAscii = e.arrayContainsArray = e.getBinarySize = e.padToEven = e.stripHexPrefix = e.isHexPrefixed = void 0, e.isHexPrefixed = A, e.stripHexPrefix = v => {
                if ("string" != typeof v) throw new Error("[stripHexPrefix] input must be type 'string', received " + typeof v);
                return A(v) ? v.slice(2) : v
            }, e.padToEven = d, e.getBinarySize = function w(v) {
                if ("string" != typeof v) throw new Error("[getBinarySize] method requires input type 'string', received " + typeof v);
                return Buffer.byteLength(v, "utf8")
            }, e.arrayContainsArray = function B(v, y, x) {
                if (!0 !== Array.isArray(v)) throw new Error(`[arrayContainsArray] method requires input 'superset' to be an array, got type '${typeof v}'`);
                if (!0 !== Array.isArray(y)) throw new Error(`[arrayContainsArray] method requires input 'subset' to be an array, got type '${typeof y}'`);
                return y[!0 === x ? "some" : "every"](o => v.indexOf(o) >= 0)
            }, e.toAscii = function u(v) {
                let y = "",
                    x = 0;
                const o = v.length;
                for ("0x" === v.substring(0, 2) && (x = 2); x < o; x += 2) {
                    const E = parseInt(v.substr(x, 2), 16);
                    y += String.fromCharCode(E)
                }
                return y
            }, e.fromUtf8 = function l(v) {
                return `0x${d(Buffer.from(v,"utf8").toString("hex")).replace(/^0+|0+$/g,"")}`
            }, e.fromAscii = function p(v) {
                let y = "";
                for (let x = 0; x < v.length; x++) {
                    const E = v.charCodeAt(x).toString(16);
                    y += E.length < 2 ? `0${E}` : E
                }
                return `0x${y}`
            }, e.getKeys = function T(v, y, x) {
                if (!Array.isArray(v)) throw new Error("[getKeys] method expects input 'params' to be an array, got " + typeof v);
                if ("string" != typeof y) throw new Error("[getKeys] method expects input 'key' to be type 'string', got " + typeof v);
                const o = [];
                for (let E = 0; E < v.length; E++) {
                    let h = v[E][y];
                    if (!0 !== x || h) {
                        if ("string" != typeof h) throw new Error("invalid abi - expected type 'string', received " + typeof h)
                    } else h = "";
                    o.push(h)
                }
                return o
            }, e.isHexString = function R(v, y) {
                return !("string" != typeof v || !v.match(/^0x[0-9A-Fa-f]*$/) || typeof y < "u" && y > 0 && v.length !== 2 + 2 * y)
            }
        },
        84300: (ve, e, A) => {
            "use strict";
            var s = A(59344).default;
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Lock = void 0, e.Lock = class d {
                constructor() {
                    this.permits = 1, this.promiseResolverQueue = []
                }
                acquire() {
                    var B = this;
                    return s(function*() {
                        return B.permits > 0 ? (B.permits -= 1, Promise.resolve(!0)) : new Promise(u => B.promiseResolverQueue.push(u))
                    })()
                }
                release() {
                    if (this.permits += 1, this.permits > 1 && this.promiseResolverQueue.length > 0) console.warn("Lock.permits should never be > 0 when there is someone waiting.");
                    else if (1 === this.permits && this.promiseResolverQueue.length > 0) {
                        this.permits -= 1;
                        const B = this.promiseResolverQueue.shift();
                        B && B(!0)
                    }
                }
            }
        },
        38179: (ve, e, A) => {
            "use strict";
            var s = A(59344).default;
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.getProvider = e.fetchFromProvider = void 0;
            const d = A(74977);
            e.fetchFromProvider = function() {
                var u = s(function*(l, p) {
                    return (yield(0, d.default)(l, {
                        headers: {
                            "content-type": "application/json"
                        },
                        type: "json",
                        data: {
                            method: p.method,
                            params: p.params,
                            jsonrpc: "2.0",
                            id: 1
                        }
                    })).result
                });
                return function(p, T) {
                    return u.apply(this, arguments)
                }
            }(), e.getProvider = u => {
                if ("string" == typeof u) return u;
                if (void 0 !== u ? .connection ? .url) return u.connection.url;
                throw new Error("Must provide valid provider URL or Web3Provider")
            }
        },
        41858: (ve, e, A) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.hashPersonalMessage = e.isValidSignature = e.fromRpcSig = e.toCompactSig = e.toRpcSig = e.ecrecover = e.ecsign = void 0;
            const s = A(20555),
                d = A(72991),
                w = A(6444),
                B = A(84377),
                u = A(84728);

            function p(h, c) {
                return h === BigInt(0) || h === BigInt(1) ? h : void 0 === c ? h - BigInt(27) : h - (c * BigInt(2) + BigInt(35))
            }

            function T(h) {
                return h === BigInt(0) || h === BigInt(1)
            }
            e.ecsign = function l(h, c, r) {
                const a = d.secp256k1.sign(h, c),
                    m = a.toCompactRawBytes();
                return {
                    r: Buffer.from(m.slice(0, 32)),
                    s: Buffer.from(m.slice(32, 64)),
                    v: void 0 === r ? BigInt(a.recovery + 27) : BigInt(a.recovery + 35) + BigInt(r) * BigInt(2)
                }
            }, e.ecrecover = function(h, c, r, a, m) {
                const _ = Buffer.concat([(0, w.setLengthLeft)(r, 32), (0, w.setLengthLeft)(a, 32)], 64),
                    U = p(c, m);
                if (!T(U)) throw new Error("Invalid signature v value");
                const D = d.secp256k1.Signature.fromCompact(_).addRecoveryBit(Number(U)).recoverPublicKey(h);
                return Buffer.from(D.toRawBytes(!1).slice(1))
            }, e.toRpcSig = function(h, c, r, a) {
                if (!T(p(h, a))) throw new Error("Invalid signature v value");
                return (0, w.bufferToHex)(Buffer.concat([(0, w.setLengthLeft)(c, 32), (0, w.setLengthLeft)(r, 32), (0, w.toBuffer)(h)]))
            }, e.toCompactSig = function(h, c, r, a) {
                if (!T(p(h, a))) throw new Error("Invalid signature v value");
                let _ = r;
                return (h > BigInt(28) && h % BigInt(2) === BigInt(1) || h === BigInt(1) || h === BigInt(28)) && (_ = Buffer.from(r), _[0] |= 128), (0, w.bufferToHex)(Buffer.concat([(0, w.setLengthLeft)(c, 32), (0, w.setLengthLeft)(_, 32)]))
            }, e.fromRpcSig = function(h) {
                const c = (0, w.toBuffer)(h);
                let r, a, m;
                if (c.length >= 65) r = c.slice(0, 32), a = c.slice(32, 64), m = (0, w.bufferToBigInt)(c.slice(64));
                else {
                    if (64 !== c.length) throw new Error("Invalid signature length");
                    r = c.slice(0, 32), a = c.slice(32, 64), m = BigInt((0, w.bufferToInt)(c.slice(32, 33)) >> 7), a[0] &= 127
                }
                return m < 27 && (m += BigInt(27)), {
                    v: m,
                    r,
                    s: a
                }
            }, e.isValidSignature = function(h, c, r, a = !0, m) {
                if (32 !== c.length || 32 !== r.length || !T(p(h, m))) return !1;
                const _ = (0, w.bufferToBigInt)(c),
                    U = (0, w.bufferToBigInt)(r);
                return !(_ === BigInt(0) || _ >= B.SECP256K1_ORDER || U === BigInt(0) || U >= B.SECP256K1_ORDER || a && U >= B.SECP256K1_ORDER_DIV_2)
            }, e.hashPersonalMessage = function(h) {
                (0, u.assertIsBuffer)(h);
                const c = Buffer.from(`\x19Ethereum Signed Message:\n${h.length}`, "utf-8");
                return Buffer.from((0, s.keccak256)(Buffer.concat([c, h])))
            }
        },
        38277: (ve, e, A) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.toType = e.TypeOutput = void 0;
            const s = A(6444),
                d = A(5822);
            var w, u;
            (u = w = e.TypeOutput || (e.TypeOutput = {}))[u.Number = 0] = "Number", u[u.BigInt = 1] = "BigInt", u[u.Buffer = 2] = "Buffer", u[u.PrefixedHexString = 3] = "PrefixedHexString", e.toType = function B(u, l) {
                if (null === u) return null;
                if (void 0 === u) return;
                if ("string" == typeof u && !(0, d.isHexString)(u)) throw new Error(`A string must be provided with a 0x-prefix, given: ${u}`);
                if ("number" == typeof u && !Number.isSafeInteger(u)) throw new Error("The provided number is greater than MAX_SAFE_INTEGER (please use an alternative input type)");
                const p = (0, s.toBuffer)(u);
                switch (l) {
                    case w.Buffer:
                        return p;
                    case w.BigInt:
                        return (0, s.bufferToBigInt)(p);
                    case w.Number:
                        {
                            const T = (0, s.bufferToBigInt)(p);
                            if (T > BigInt(Number.MAX_SAFE_INTEGER)) throw new Error("The provided number is greater than MAX_SAFE_INTEGER (please use an alternative output type)");
                            return Number(T)
                        }
                    case w.PrefixedHexString:
                        return (0, s.bufferToHex)(p);
                    default:
                        throw new Error("unknown outputType")
                }
            }
        },
        56974: (ve, e) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.GWEI_TO_WEI = void 0, e.GWEI_TO_WEI = BigInt(1e9)
        },
        99886: (ve, e, A) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Withdrawal = void 0;
            const s = A(68186),
                d = A(6444),
                w = A(38277);
            class B {
                constructor(l, p, T, R) {
                    this.index = l, this.validatorIndex = p, this.address = T, this.amount = R
                }
                static fromWithdrawalData(l) {
                    const {
                        index: p,
                        validatorIndex: T,
                        address: R,
                        amount: v
                    } = l, y = (0, w.toType)(p, w.TypeOutput.BigInt), x = (0, w.toType)(T, w.TypeOutput.BigInt), o = new s.Address((0, w.toType)(R, w.TypeOutput.Buffer)), E = (0, w.toType)(v, w.TypeOutput.BigInt);
                    return new B(y, x, o, E)
                }
                static fromValuesArray(l) {
                    if (4 !== l.length) throw Error(`Invalid withdrawalArray length expected=4 actual=${l.length}`);
                    const [p, T, R, v] = l;
                    return B.fromWithdrawalData({
                        index: p,
                        validatorIndex: T,
                        address: R,
                        amount: v
                    })
                }
                static toBufferArray(l) {
                    const {
                        index: p,
                        validatorIndex: T,
                        address: R,
                        amount: v
                    } = l, y = (0, w.toType)(p, w.TypeOutput.BigInt) === BigInt(0) ? Buffer.alloc(0) : (0, w.toType)(p, w.TypeOutput.Buffer), x = (0, w.toType)(T, w.TypeOutput.BigInt) === BigInt(0) ? Buffer.alloc(0) : (0, w.toType)(T, w.TypeOutput.Buffer);
                    let o;
                    return o = R instanceof s.Address ? R.buf : (0, w.toType)(R, w.TypeOutput.Buffer), [y, x, o, (0, w.toType)(v, w.TypeOutput.BigInt) === BigInt(0) ? Buffer.alloc(0) : (0, w.toType)(v, w.TypeOutput.Buffer)]
                }
                raw() {
                    return B.toBufferArray(this)
                }
                toValue() {
                    return {
                        index: this.index,
                        validatorIndex: this.validatorIndex,
                        address: this.address.buf,
                        amount: this.amount
                    }
                }
                toJSON() {
                    return {
                        index: (0, d.bigIntToHex)(this.index),
                        validatorIndex: (0, d.bigIntToHex)(this.validatorIndex),
                        address: "0x" + this.address.buf.toString("hex"),
                        amount: (0, d.bigIntToHex)(this.amount)
                    }
                }
            }
            e.Withdrawal = B
        },
        85835: (ve, e, A) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.decodeSingle = e.decode = e.encodePacked = e.encodeSingle = e.encode = void 0;
            const s = A(27184),
                d = A(73996),
                w = A(96273);
            e.encode = (R, v, y, x) => {
                try {
                    return (0, w.pack)({
                        types: R,
                        values: v,
                        packed: y,
                        tight: x
                    })
                } catch (o) {
                    throw new d.ParserError(o instanceof d.ParserError ? `Unable to encode value: ${o.message}` : `An unexpected error occurred: ${(0,d.getErrorMessage)(o)}`, o)
                }
            }, e.encodeSingle = (R, v) => (0, e.encode)([R], [v]), e.encodePacked = (R, v, y) => (0, e.encode)(R, v, !0, y), e.decode = (R, v) => {
                const y = (0, s.createBytes)(v);
                try {
                    return (0, w.unpack)(R, y)
                } catch (x) {
                    throw new d.ParserError(x instanceof d.ParserError ? `Unable to decode value: ${x.message}` : `An unexpected error occurred: ${(0,d.getErrorMessage)(x)}`, x)
                }
            }, e.decodeSingle = (R, v) => {
                const y = (0, e.decode)([R], v);
                return (0, s.assert)(1 === y.length, new d.ParserError("Decoded value array has unexpected length.")), y[0]
            }
        },
        73996: (ve, e, A) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.ParserError = e.getErrorStack = e.getErrorMessage = void 0;
            const s = A(27184);
            e.getErrorMessage = u => "string" == typeof u ? u : u instanceof Error || (0, s.isObject)(u) && (0, s.hasProperty)(u, "message") && "string" == typeof u.message ? u.message : "Unknown error.", e.getErrorStack = u => {
                if (u instanceof Error) return u.stack
            };
            class B extends Error {
                constructor(l, p) {
                    super(l), this.name = "ParserError";
                    const T = (0, e.getErrorStack)(p);
                    T && (this.stack = T)
                }
            }
            e.ParserError = B
        },
        48002: function(ve, e, A) {
            "use strict";
            var s = this && this.__createBinding || (Object.create ? function(w, B, u, l) {
                    void 0 === l && (l = u);
                    var p = Object.getOwnPropertyDescriptor(B, u);
                    (!p || ("get" in p ? !B.__esModule : p.writable || p.configurable)) && (p = {
                        enumerable: !0,
                        get: function() {
                            return B[u]
                        }
                    }), Object.defineProperty(w, l, p)
                } : function(w, B, u, l) {
                    void 0 === l && (l = u), w[l] = B[u]
                }),
                d = this && this.__exportStar || function(w, B) {
                    for (var u in w) "default" !== u && !Object.prototype.hasOwnProperty.call(B, u) && s(B, w, u)
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), d(A(85835), e), d(A(73996), e), d(A(60640), e)
        },
        50713: (ve, e, A) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.iterate = void 0;
            const s = A(27184);
            e.iterate = function*(w, B = 32) {
                for (let u = 0; u < w.length; u += B) {
                    const l = T => {
                            (0, s.assert)(T >= 0, "Cannot skip a negative number of bytes."), (0, s.assert)(T % B == 0, "Length must be a multiple of the size."), u += T
                        },
                        p = w.subarray(u);
                    yield {
                        skip: l,
                        value: p
                    }
                }
                return {
                    skip: () => {},
                    value: new Uint8Array
                }
            }
        },
        96273: (ve, e, A) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.unpack = e.pack = e.isDynamicParser = e.getParser = void 0;
            const s = A(27184),
                d = A(73996),
                w = A(50713),
                B = A(22768),
                u = A(51891);
            e.getParser = v => {
                const y = {
                        address: B.address,
                        array: B.array,
                        bool: B.bool,
                        bytes: B.bytes,
                        fixedBytes: B.fixedBytes,
                        function: B.fn,
                        number: B.number,
                        string: B.string,
                        tuple: B.tuple
                    },
                    x = y[v];
                if (x) return x;
                const o = Object.values(y).find(E => E.isType(v));
                if (o) return o;
                throw new d.ParserError(`The type "${v}" is not supported.`)
            }, e.isDynamicParser = (v, y) => {
                const {
                    isDynamic: x
                } = v;
                return "function" == typeof x ? x(y) : x
            }, e.pack = ({
                types: v,
                values: y,
                packed: x = !1,
                tight: o = !1,
                arrayPacked: E = !1,
                byteArray: h = new Uint8Array
            }) => {
                (0, s.assert)(v.length === y.length, new d.ParserError(`The number of types (${v.length}) does not match the number of values (${y.length}).`));
                const {
                    staticBuffer: c,
                    dynamicBuffer: r,
                    pointers: a
                } = v.reduce(({
                    staticBuffer: U,
                    dynamicBuffer: S,
                    pointers: D
                }, M, fe) => {
                    const Se = (0, e.getParser)(M),
                        _e = y[fe];
                    return x || E || !(0, e.isDynamicParser)(Se, M) ? {
                        staticBuffer: Se.encode({
                            buffer: U,
                            value: _e,
                            type: M,
                            packed: x,
                            tight: o
                        }),
                        dynamicBuffer: S,
                        pointers: D
                    } : {
                        staticBuffer: (0, s.concatBytes)([U, new Uint8Array(32)]),
                        dynamicBuffer: Se.encode({
                            buffer: S,
                            value: _e,
                            type: M,
                            packed: x,
                            tight: o
                        }),
                        pointers: [...D, {
                            position: U.length,
                            pointer: S.length
                        }]
                    }
                }, {
                    staticBuffer: new Uint8Array,
                    dynamicBuffer: new Uint8Array,
                    pointers: []
                });
                (0, s.assert)(!x && !E || 0 === r.length, new d.ParserError("Invalid pack state."));
                const m = c.length,
                    _ = a.reduce((U, {
                        pointer: S,
                        position: D
                    }) => {
                        const M = (0, u.padStart)((0, s.numberToBytes)(m + S));
                        return (0, u.set)(U, M, D)
                    }, c);
                return (0, s.concatBytes)([h, _, r])
            }, e.unpack = (v, y) => {
                const x = (0, w.iterate)(y);
                return v.map(o => {
                    const {
                        value: {
                            value: E,
                            skip: h
                        },
                        done: c
                    } = x.next();
                    (0, s.assert)(!c, new d.ParserError(`The encoded value is invalid for the provided types. Reached end of buffer while attempting to parse "${o}".`));
                    const r = (0, e.getParser)(o);
                    if ((0, e.isDynamicParser)(r, o)) {
                        const m = (0, s.bytesToNumber)(E.subarray(0, 32)),
                            _ = y.subarray(m);
                        return r.decode({
                            type: o,
                            value: _,
                            skip: h
                        })
                    }
                    return r.decode({
                        type: o,
                        value: E,
                        skip: h
                    })
                })
            }
        },
        47587: (ve, e, A) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.address = e.getAddress = void 0;
            const s = A(27184),
                d = A(73996),
                w = A(51891);
            e.getAddress = u => {
                const l = (0, s.createBytes)(u);
                return (0, s.assert)(l.length <= 20, new d.ParserError(`Invalid address value. Expected address to be 20 bytes long, but received ${l.length} bytes.`)), (0, w.padStart)(l, 20)
            }, e.address = {
                isDynamic: !1,
                isType: u => "address" === u,
                getByteLength: () => 32,
                encode({
                    buffer: u,
                    value: l,
                    packed: p
                }) {
                    const T = (0, e.getAddress)(l);
                    if (p) return (0, s.concatBytes)([u, T]);
                    const R = (0, w.padStart)(T);
                    return (0, s.concatBytes)([u, R])
                },
                decode: ({
                    value: u
                }) => (0, s.add0x)((0, s.bytesToHex)(u.slice(12, 32)))
            }
        },
        63553: (ve, e, A) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.array = e.getTupleType = e.getArrayType = e.isArrayType = void 0;
            const s = A(27184),
                d = A(73996),
                w = A(96273),
                B = A(51891),
                u = A(50455),
                l = A(43175),
                p = /^(?<type>.*)\[(?<length>\d*?)\]$/u;
            e.isArrayType = y => p.test(y), e.getArrayType = y => {
                const x = y.match(p);
                return (0, s.assert)(x ? .groups ? .type, new d.ParserError(`Invalid array type. Expected an array type, but received "${y}".`)), [x.groups.type, x.groups.length ? parseInt(x.groups.length, 10) : void 0]
            }, e.getTupleType = (y, x) => `(${new Array(x).fill(y).join(",")})`, e.array = {
                isDynamic(y) {
                    const [x, o] = (0, e.getArrayType)(y);
                    return void 0 === o || (0, w.isDynamicParser)((0, w.getParser)(x), x)
                },
                isType: y => (0, e.isArrayType)(y),
                getByteLength(y) {
                    (0, s.assert)((0, e.isArrayType)(y), new d.ParserError(`Expected an array type, but received "${y}".`));
                    const [x, o] = (0, e.getArrayType)(y);
                    return (0, w.isDynamicParser)(this, y) || void 0 === o ? 32 : l.tuple.getByteLength((0, e.getTupleType)(x, o))
                },
                encode({
                    type: y,
                    buffer: x,
                    value: o,
                    packed: E,
                    tight: h
                }) {
                    const [c, r] = (0, e.getArrayType)(y);
                    if ((0, s.assert)(!E || !(0, e.isArrayType)(c), new d.ParserError("Cannot pack nested arrays.")), E && (0, w.isDynamicParser)((0, w.getParser)(c), c)) return (0, w.pack)({
                        types: new Array(o.length).fill(c),
                        values: o,
                        byteArray: x,
                        packed: E,
                        arrayPacked: !0,
                        tight: h
                    });
                    if (r) return (0, s.assert)(r === o.length, new d.ParserError(`Array length does not match type length. Expected a length of ${r}, but received ${o.length}.`)), l.tuple.encode({
                        type: (0, e.getTupleType)(c, r),
                        buffer: x,
                        value: o,
                        packed: u.fixedBytes.isType(c) && h,
                        tight: h
                    });
                    if (E) return (0, w.pack)({
                        types: new Array(o.length).fill(c),
                        values: o,
                        byteArray: x,
                        packed: u.fixedBytes.isType(c) && h,
                        arrayPacked: !0,
                        tight: h
                    });
                    const a = (0, B.padStart)((0, s.numberToBytes)(o.length));
                    return (0, w.pack)({
                        types: new Array(o.length).fill(c),
                        values: o,
                        byteArray: (0, s.concatBytes)([x, a]),
                        packed: E,
                        tight: h
                    })
                },
                decode({
                    type: y,
                    value: x,
                    ...o
                }) {
                    const [E, h] = (0, e.getArrayType)(y);
                    if (h) {
                        const r = l.tuple.decode({
                            type: (0, e.getTupleType)(E, h),
                            value: x,
                            ...o
                        });
                        return (0, s.assert)(r.length === h, new d.ParserError(`Array length does not match type length. Expected a length of ${h}, but received ${r.length}.`)), r
                    }
                    const c = (0, s.bytesToNumber)(x.subarray(0, 32));
                    return (0, w.unpack)(new Array(c).fill(E), x.subarray(32))
                }
            }
        },
        86864: (ve, e, A) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.bool = e.getBooleanValue = void 0;
            const s = A(27184),
                d = A(87641),
                w = A(73996),
                B = A(88788),
                u = (0, d.coerce)((0, d.boolean)(), (0, d.union)([(0, d.literal)("true"), (0, d.literal)("false")]), p => "true" === p);
            e.getBooleanValue = p => {
                try {
                    return (0, d.create)(p, u) ? BigInt(1) : BigInt(0)
                } catch {
                    throw new w.ParserError(`Invalid boolean value. Expected a boolean literal, or the string "true" or "false", but received "${p}".`)
                }
            }, e.bool = {
                isDynamic: !1,
                isType: p => "bool" === p,
                getByteLength: () => 32,
                encode({
                    buffer: p,
                    value: T,
                    packed: R,
                    tight: v
                }) {
                    const y = (0, e.getBooleanValue)(T);
                    return R ? (0, s.concatBytes)([p, (0, s.bigIntToBytes)(y)]) : B.number.encode({
                        type: "uint256",
                        buffer: p,
                        value: y,
                        packed: R,
                        tight: v
                    })
                },
                decode: p => B.number.decode({ ...p,
                    type: "uint256"
                }) === BigInt(1)
            }
        },
        67687: (ve, e, A) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.bytes = void 0;
            const s = A(27184),
                d = A(51891);
            e.bytes = {
                isDynamic: !0,
                isType: w => "bytes" === w,
                getByteLength: () => 32,
                encode({
                    buffer: w,
                    value: B,
                    packed: u
                }) {
                    const l = (0, s.createBytes)(B);
                    if (u) return (0, s.concatBytes)([w, l]);
                    const p = 32 * Math.ceil(l.byteLength / 32);
                    return (0, s.concatBytes)([w, (0, d.padStart)((0, s.numberToBytes)(l.byteLength)), (0, d.padEnd)(l, p)])
                },
                decode({
                    value: w
                }) {
                    const B = w.subarray(0, 32),
                        u = (0, s.bytesToNumber)(B);
                    return w.slice(32, 32 + u)
                }
            }
        },
        50455: (ve, e, A) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.fixedBytes = e.getByteLength = void 0;
            const s = A(27184),
                d = A(73996),
                w = A(51891),
                B = /^bytes([0-9]{1,2})$/u;
            e.getByteLength = l => {
                const p = l.match(B) ? .[1];
                (0, s.assert)(p, `Invalid byte length. Expected a number between 1 and 32, but received "${l}".`);
                const T = Number(p);
                return (0, s.assert)(T > 0 && T <= 32, new d.ParserError(`Invalid byte length. Expected a number between 1 and 32, but received "${l}".`)), T
            }, e.fixedBytes = {
                isDynamic: !1,
                isType: l => B.test(l),
                getByteLength: () => 32,
                encode({
                    type: l,
                    buffer: p,
                    value: T,
                    packed: R
                }) {
                    const v = (0, e.getByteLength)(l),
                        y = (0, s.createBytes)(T);
                    return (0, s.assert)(y.length <= v, new d.ParserError(`Expected a value of length ${v}, but received a value of length ${y.length}.`)), (0, s.concatBytes)(R ? [p, (0, w.padEnd)(y, v)] : [p, (0, w.padEnd)(y)])
                },
                decode({
                    type: l,
                    value: p
                }) {
                    const T = (0, e.getByteLength)(l);
                    return p.slice(0, T)
                }
            }
        },
        69094: (ve, e, A) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.fn = e.getFunction = void 0;
            const s = A(27184),
                d = A(87641),
                w = A(73996),
                B = A(50455),
                u = (0, d.coerce)((0, d.object)({
                    address: s.StrictHexStruct,
                    selector: s.StrictHexStruct
                }), (0, d.union)([s.StrictHexStruct, (0, d.instance)(Uint8Array)]), p => {
                    const T = (0, s.createBytes)(p);
                    return (0, s.assert)(24 === T.length, new w.ParserError(`Invalid Solidity function. Expected function to be 24 bytes long, but received ${T.length} bytes.`)), {
                        address: (0, s.bytesToHex)(T.subarray(0, 20)),
                        selector: (0, s.bytesToHex)(T.subarray(20, 24))
                    }
                });
            e.getFunction = p => {
                const T = (0, d.create)(p, u);
                return (0, s.concatBytes)([(0, s.hexToBytes)(T.address), (0, s.hexToBytes)(T.selector)])
            }, e.fn = {
                isDynamic: !1,
                isType: p => "function" === p,
                getByteLength: () => 32,
                encode({
                    buffer: p,
                    value: T,
                    packed: R,
                    tight: v
                }) {
                    const y = (0, e.getFunction)(T);
                    return B.fixedBytes.encode({
                        type: "bytes24",
                        buffer: p,
                        value: y,
                        packed: R,
                        tight: v
                    })
                },
                decode: ({
                    value: p
                }) => ({
                    address: (0, s.bytesToHex)(p.slice(0, 20)),
                    selector: (0, s.bytesToHex)(p.slice(20, 24))
                })
            }
        },
        22768: function(ve, e, A) {
            "use strict";
            var s = this && this.__createBinding || (Object.create ? function(w, B, u, l) {
                    void 0 === l && (l = u);
                    var p = Object.getOwnPropertyDescriptor(B, u);
                    (!p || ("get" in p ? !B.__esModule : p.writable || p.configurable)) && (p = {
                        enumerable: !0,
                        get: function() {
                            return B[u]
                        }
                    }), Object.defineProperty(w, l, p)
                } : function(w, B, u, l) {
                    void 0 === l && (l = u), w[l] = B[u]
                }),
                d = this && this.__exportStar || function(w, B) {
                    for (var u in w) "default" !== u && !Object.prototype.hasOwnProperty.call(B, u) && s(B, w, u)
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), d(A(47587), e), d(A(63553), e), d(A(86864), e), d(A(67687), e), d(A(50455), e), d(A(69094), e), d(A(88788), e), d(A(80387), e), d(A(31740), e), d(A(43175), e)
        },
        88788: (ve, e, A) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.number = e.getBigInt = e.assertNumberLength = e.getLength = e.isSigned = void 0;
            const s = A(27184),
                d = A(73996),
                w = A(51891),
                B = /^u?int(?<length>[0-9]*)?$/u;
            e.isSigned = R => !R.startsWith("u"), e.getLength = R => {
                if ("int" === R || "uint" === R) return 256;
                const v = R.match(B);
                (0, s.assert)(v ? .groups ? .length, new d.ParserError(`Invalid number type. Expected a number type, but received "${R}".`));
                const y = parseInt(v.groups.length, 10);
                return (0, s.assert)(y >= 8 && y <= 256, new d.ParserError(`Invalid number length. Expected a number between 8 and 256, but received "${R}".`)), (0, s.assert)(y % 8 == 0, new d.ParserError(`Invalid number length. Expected a multiple of 8, but received "${R}".`)), y
            }, e.assertNumberLength = (R, v) => {
                const y = (0, e.getLength)(v),
                    x = BigInt(2) ** BigInt(y - ((0, e.isSigned)(v) ? 1 : 0)) - BigInt(1);
                (0, e.isSigned)(v) ? (0, s.assert)(R >= -(x + BigInt(1)) && R <= x, new d.ParserError(`Number "${R}" is out of range for type "${v}".`)) : (0, s.assert)(R <= x, new d.ParserError(`Number "${R}" is out of range for type "${v}".`))
            }, e.getBigInt = R => {
                try {
                    return (0, s.createBigInt)(R)
                } catch {
                    throw new d.ParserError(`Invalid number. Expected a valid number value, but received "${R}".`)
                }
            }, e.number = {
                isDynamic: !1,
                isType: R => B.test(R),
                getByteLength: () => 32,
                encode({
                    type: R,
                    buffer: v,
                    value: y,
                    packed: x
                }) {
                    const o = (0, e.getBigInt)(y);
                    if ((0, e.assertNumberLength)(o, R), (0, e.isSigned)(R)) {
                        if (x) {
                            const E = (0, e.getLength)(R) / 8;
                            return (0, s.concatBytes)([v, (0, s.signedBigIntToBytes)(o, E)])
                        }
                        return (0, s.concatBytes)([v, (0, w.padStart)((0, s.signedBigIntToBytes)(o, 32))])
                    }
                    if (x) {
                        const E = (0, e.getLength)(R) / 8;
                        return (0, s.concatBytes)([v, (0, w.padStart)((0, s.bigIntToBytes)(o), E)])
                    }
                    return (0, s.concatBytes)([v, (0, w.padStart)((0, s.bigIntToBytes)(o))])
                },
                decode({
                    type: R,
                    value: v
                }) {
                    const y = v.subarray(0, 32);
                    if ((0, e.isSigned)(R)) {
                        const o = (0, s.bytesToSignedBigInt)(y);
                        return (0, e.assertNumberLength)(o, R), o
                    }
                    const x = (0, s.bytesToBigInt)(y);
                    return (0, e.assertNumberLength)(x, R), x
                }
            }
        },
        80387: (ve, e) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        },
        31740: (ve, e, A) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.string = void 0;
            const s = A(27184),
                d = A(67687);
            e.string = {
                isDynamic: !0,
                isType: w => "string" === w,
                getByteLength: () => 32,
                encode: ({
                    buffer: w,
                    value: B,
                    packed: u,
                    tight: l
                }) => d.bytes.encode({
                    type: "bytes",
                    buffer: w,
                    value: (0, s.stringToBytes)(B),
                    packed: u,
                    tight: l
                }),
                decode: w => (0, s.bytesToString)(d.bytes.decode(w))
            }
        },
        43175: (ve, e, A) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.tuple = e.getTupleElements = void 0;
            const s = A(27184),
                d = A(73996),
                w = A(96273),
                B = /^\((.+)\)$/u;
            e.getTupleElements = p => {
                (0, s.assert)(p.startsWith("(") && p.endsWith(")"), new d.ParserError(`Invalid tuple type. Expected tuple type, but received "${p}".`));
                const T = [];
                let R = "",
                    v = 0;
                for (let y = 1; y < p.length - 1; y++) {
                    const x = p[y];
                    "," === x && 0 === v ? (T.push(R.trim()), R = "") : (R += x, "(" === x ? v += 1 : ")" === x && (v -= 1))
                }
                return R.trim() && T.push(R.trim()), T
            }, e.tuple = {
                isDynamic: p => (0, e.getTupleElements)(p).some(R => {
                    const v = (0, w.getParser)(R);
                    return (0, w.isDynamicParser)(v, R)
                }),
                isType: p => (p => B.test(p))(p),
                getByteLength(p) {
                    return (0, w.isDynamicParser)(this, p) ? 32 : (0, e.getTupleElements)(p).reduce((R, v) => R + (0, w.getParser)(v).getByteLength(v), 0)
                },
                encode({
                    type: p,
                    buffer: T,
                    value: R,
                    packed: v,
                    tight: y
                }) {
                    const x = (0, e.getTupleElements)(p);
                    return (0, w.pack)({
                        types: x,
                        values: R,
                        byteArray: T,
                        packed: v,
                        tight: y
                    })
                },
                decode({
                    type: p,
                    value: T,
                    skip: R
                }) {
                    const v = (0, e.getTupleElements)(p);
                    return R(this.getByteLength(p) - 32), (0, w.unpack)(v, T)
                }
            }
        },
        9827: (ve, e) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        },
        60640: function(ve, e, A) {
            "use strict";
            var s = this && this.__createBinding || (Object.create ? function(w, B, u, l) {
                    void 0 === l && (l = u);
                    var p = Object.getOwnPropertyDescriptor(B, u);
                    (!p || ("get" in p ? !B.__esModule : p.writable || p.configurable)) && (p = {
                        enumerable: !0,
                        get: function() {
                            return B[u]
                        }
                    }), Object.defineProperty(w, l, p)
                } : function(w, B, u, l) {
                    void 0 === l && (l = u), w[l] = B[u]
                }),
                d = this && this.__exportStar || function(w, B) {
                    for (var u in w) "default" !== u && !Object.prototype.hasOwnProperty.call(B, u) && s(B, w, u)
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), d(A(9827), e)
        },
        7455: (ve, e, A) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.padEnd = e.padStart = e.set = void 0;
            const s = A(27184);
            e.set = (l, p, T) => (0, s.concatBytes)([l.subarray(0, T), p, l.subarray(T + p.length)]), e.padStart = (l, p = 32) => {
                const T = new Uint8Array(Math.max(p - l.length, 0)).fill(0);
                return (0, s.concatBytes)([T, l])
            }, e.padEnd = (l, p = 32) => {
                const T = new Uint8Array(Math.max(p - l.length, 0)).fill(0);
                return (0, s.concatBytes)([l, T])
            }
        },
        51891: function(ve, e, A) {
            "use strict";
            var s = this && this.__createBinding || (Object.create ? function(w, B, u, l) {
                    void 0 === l && (l = u);
                    var p = Object.getOwnPropertyDescriptor(B, u);
                    (!p || ("get" in p ? !B.__esModule : p.writable || p.configurable)) && (p = {
                        enumerable: !0,
                        get: function() {
                            return B[u]
                        }
                    }), Object.defineProperty(w, l, p)
                } : function(w, B, u, l) {
                    void 0 === l && (l = u), w[l] = B[u]
                }),
                d = this && this.__exportStar || function(w, B) {
                    for (var u in w) "default" !== u && !Object.prototype.hasOwnProperty.call(B, u) && s(B, w, u)
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), d(A(7455), e)
        },
        51618: function(ve, e, A) {
            "use strict";
            var s = this && this.__createBinding || (Object.create ? function(o, E, h, c) {
                    void 0 === c && (c = h);
                    var r = Object.getOwnPropertyDescriptor(E, h);
                    (!r || ("get" in r ? !E.__esModule : r.writable || r.configurable)) && (r = {
                        enumerable: !0,
                        get: function() {
                            return E[h]
                        }
                    }), Object.defineProperty(o, c, r)
                } : function(o, E, h, c) {
                    void 0 === c && (c = h), o[c] = E[h]
                }),
                d = this && this.__setModuleDefault || (Object.create ? function(o, E) {
                    Object.defineProperty(o, "default", {
                        enumerable: !0,
                        value: E
                    })
                } : function(o, E) {
                    o.default = E
                }),
                w = this && this.__importStar || function(o) {
                    if (o && o.__esModule) return o;
                    var E = {};
                    if (null != o)
                        for (var h in o) "default" !== h && Object.prototype.hasOwnProperty.call(o, h) && s(E, o, h);
                    return d(E, o), E
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.getEncryptionPublicKey = e.decryptSafely = e.decrypt = e.encryptSafely = e.encrypt = void 0;
            const B = w(A(76543)),
                u = w(A(14069)),
                l = A(26690);

            function p({
                publicKey: o,
                data: E,
                version: h
            }) {
                if ((0, l.isNullish)(o)) throw new Error("Missing publicKey parameter");
                if ((0, l.isNullish)(E)) throw new Error("Missing data parameter");
                if ((0, l.isNullish)(h)) throw new Error("Missing version parameter");
                if ("x25519-xsalsa20-poly1305" === h) {
                    if ("string" != typeof E) throw new Error("Message data must be given as a string");
                    const c = B.box.keyPair();
                    let r;
                    try {
                        r = u.decodeBase64(o)
                    } catch {
                        throw new Error("Bad public key")
                    }
                    const a = u.decodeUTF8(E),
                        m = B.randomBytes(B.box.nonceLength),
                        _ = B.box(a, m, r, c.secretKey);
                    return {
                        version: "x25519-xsalsa20-poly1305",
                        nonce: u.encodeBase64(m),
                        ephemPublicKey: u.encodeBase64(c.publicKey),
                        ciphertext: u.encodeBase64(_)
                    }
                }
                throw new Error("Encryption type/version not supported")
            }

            function R({
                encryptedData: o,
                privateKey: E
            }) {
                if ((0, l.isNullish)(o)) throw new Error("Missing encryptedData parameter");
                if ((0, l.isNullish)(E)) throw new Error("Missing privateKey parameter");
                if ("x25519-xsalsa20-poly1305" === o.version) {
                    const h = x(E),
                        c = B.box.keyPair.fromSecretKey(h).secretKey,
                        r = u.decodeBase64(o.nonce),
                        a = u.decodeBase64(o.ciphertext),
                        m = u.decodeBase64(o.ephemPublicKey),
                        _ = B.box.open(a, r, m, c);
                    try {
                        if (!_) throw new Error;
                        const U = u.encodeUTF8(_);
                        if (!U) throw new Error;
                        return U
                    } catch (U) {
                        throw U && "string" == typeof U.message && U.message.length ? new Error(`Decryption failed: ${U.message}`) : new Error("Decryption failed.")
                    }
                }
                throw new Error("Encryption type/version not supported.")
            }

            function x(o) {
                const E = Buffer.from(o, "hex").toString("base64");
                return u.decodeBase64(E)
            }
            e.encrypt = p, e.encryptSafely = function T({
                publicKey: o,
                data: E,
                version: h
            }) {
                if ((0, l.isNullish)(o)) throw new Error("Missing publicKey parameter");
                if ((0, l.isNullish)(E)) throw new Error("Missing data parameter");
                if ((0, l.isNullish)(h)) throw new Error("Missing version parameter");
                if ("object" == typeof E && E && "toJSON" in E) throw new Error("Cannot encrypt with toJSON property.  Please remove toJSON property");
                const a = {
                        data: E,
                        padding: ""
                    },
                    _ = Buffer.byteLength(JSON.stringify(a), "utf-8") % 2048;
                let U = 0;
                return _ > 0 && (U = 2048 - _ - 16), a.padding = "0".repeat(U), p({
                    publicKey: o,
                    data: JSON.stringify(a),
                    version: h
                })
            }, e.decrypt = R, e.decryptSafely = function v({
                encryptedData: o,
                privateKey: E
            }) {
                if ((0, l.isNullish)(o)) throw new Error("Missing encryptedData parameter");
                if ((0, l.isNullish)(E)) throw new Error("Missing privateKey parameter");
                return JSON.parse(R({
                    encryptedData: o,
                    privateKey: E
                })).data
            }, e.getEncryptionPublicKey = function y(o) {
                const E = x(o),
                    h = B.box.keyPair.fromSecretKey(E).publicKey;
                return u.encodeBase64(h)
            }
        },
        52561: function(ve, e, A) {
            "use strict";
            var s = this && this.__createBinding || (Object.create ? function(B, u, l, p) {
                    void 0 === p && (p = l);
                    var T = Object.getOwnPropertyDescriptor(u, l);
                    (!T || ("get" in T ? !u.__esModule : T.writable || T.configurable)) && (T = {
                        enumerable: !0,
                        get: function() {
                            return u[l]
                        }
                    }), Object.defineProperty(B, p, T)
                } : function(B, u, l, p) {
                    void 0 === p && (p = l), B[p] = u[l]
                }),
                d = this && this.__exportStar || function(B, u) {
                    for (var l in B) "default" !== l && !Object.prototype.hasOwnProperty.call(u, l) && s(u, B, l)
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.normalize = e.concatSig = void 0, d(A(77339), e), d(A(49829), e), d(A(51618), e);
            var w = A(26690);
            Object.defineProperty(e, "concatSig", {
                enumerable: !0,
                get: function() {
                    return w.concatSig
                }
            }), Object.defineProperty(e, "normalize", {
                enumerable: !0,
                get: function() {
                    return w.normalize
                }
            })
        },
        77339: (ve, e, A) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.extractPublicKey = e.recoverPersonalSignature = e.personalSign = void 0;
            const s = A(7820),
                d = A(26690);

            function l(p, T) {
                const R = (0, s.hashPersonalMessage)((0, d.legacyToBuffer)(p));
                return (0, d.recoverPublicKey)(R, T)
            }
            e.personalSign = function w({
                privateKey: p,
                data: T
            }) {
                if ((0, d.isNullish)(T)) throw new Error("Missing data parameter");
                if ((0, d.isNullish)(p)) throw new Error("Missing privateKey parameter");
                const R = (0, d.legacyToBuffer)(T),
                    v = (0, s.hashPersonalMessage)(R),
                    y = (0, s.ecsign)(v, p);
                return (0, d.concatSig)((0, s.toBuffer)(y.v), y.r, y.s)
            }, e.recoverPersonalSignature = function B({
                data: p,
                signature: T
            }) {
                if ((0, d.isNullish)(p)) throw new Error("Missing data parameter");
                if ((0, d.isNullish)(T)) throw new Error("Missing signature parameter");
                const R = l(p, T),
                    v = (0, s.publicToAddress)(R);
                return (0, s.bufferToHex)(v)
            }, e.extractPublicKey = function u({
                data: p,
                signature: T
            }) {
                if ((0, d.isNullish)(p)) throw new Error("Missing data parameter");
                if ((0, d.isNullish)(T)) throw new Error("Missing signature parameter");
                return `0x${l(p,T).toString("hex")}`
            }
        },
        49829: (ve, e, A) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.recoverTypedSignature = e.signTypedData = e.typedSignatureHash = e.TypedDataUtils = e.TYPED_MESSAGE_SCHEMA = e.SignTypedDataVersion = void 0;
            const s = A(7820),
                d = A(48002),
                w = A(22768),
                B = A(51891),
                u = A(27184),
                l = A(20555),
                p = A(26690);
            var T, O;

            function R(O, P) {
                if (!Object.keys(T).includes(O)) throw new Error(`Invalid version: '${O}'`);
                if (P && !P.includes(O)) throw new Error(`SignTypedDataVersion not allowed: '${O}'. Allowed versions are: ${P.join(", ")}`)
            }

            function v(O, P) {
                (0, u.assert)(null !== P, `Unable to encode value: Invalid number. Expected a valid number value, but received "${P}".`);
                const C = BigInt(P),
                    ae = (0, w.getLength)(O),
                    J = BigInt(2) ** BigInt(ae) - BigInt(1);
                return (0, u.assert)(C >= -J && C <= J, `Unable to encode value: Number "${P}" is out of range for type "${O}".`), C
            }

            function y(O) {
                let P = BigInt(0);
                for (let C = 0; C < O.length; C++) {
                    const ae = BigInt(O.charCodeAt(C) - 48);
                    P *= BigInt(10), P += ae >= 49 ? ae - BigInt(49) + BigInt(10) : ae >= 17 ? ae - BigInt(17) + BigInt(10) : ae
                }
                return (0, B.padStart)((0, u.bigIntToBytes)(P), 20)
            }

            function x(O, P, C, ae, J) {
                if (R(J, [T.V3, T.V4]), void 0 !== O[C]) return ["bytes32", J === T.V4 && null == ae ? "0x0000000000000000000000000000000000000000000000000000000000000000" : (0, s.arrToBufArr)((0, l.keccak256)(o(C, ae, O, J)))];
                if ("function" === C) throw new Error('Unsupported or invalid type: "function"');
                if (void 0 === ae) throw new Error(`missing value for field ${P} of type ${C}`);
                if ("address" === C) {
                    if ("number" == typeof ae) return ["address", (0, B.padStart)((0, u.numberToBytes)(ae), 20)];
                    if ((0, u.isStrictHexString)(ae)) return ["address", (0, u.add0x)(ae)];
                    if ("string" == typeof ae) return ["address", y(ae).subarray(0, 20)]
                }
                if ("bool" === C) return ["bool", !!ae];
                if ("bytes" === C) return "number" == typeof ae ? ae = (0, u.numberToBytes)(ae) : (0, u.isStrictHexString)(ae) || "0x" === ae ? ae = (0, u.hexToBytes)(ae) : "string" == typeof ae && (ae = (0, u.stringToBytes)(ae)), ["bytes32", (0, s.arrToBufArr)((0, l.keccak256)(ae))];
                if (C.startsWith("bytes") && "bytes" !== C && !C.includes("[")) return "number" == typeof ae ? ae < 0 ? ["bytes32", new Uint8Array(32)] : ["bytes32", (0, u.bigIntToBytes)(BigInt(ae))] : (0, u.isStrictHexString)(ae) ? ["bytes32", (0, u.hexToBytes)(ae)] : ["bytes32", ae];
                if (C.startsWith("int") && !C.includes("[")) {
                    const re = v(C, ae);
                    return re >= BigInt(0) ? ["uint256", re] : ["int256", re]
                }
                if ("string" === C) return ae = "number" == typeof ae ? (0, u.numberToBytes)(ae) : (0, u.stringToBytes)(ae ? ? ""), ["bytes32", (0, s.arrToBufArr)((0, l.keccak256)(ae))];
                if (C.endsWith("]")) {
                    if (J === T.V3) throw new Error("Arrays are unimplemented in encodeData; use V4 extension");
                    const re = C.slice(0, C.lastIndexOf("[")),
                        Y = ae.map(te => x(O, P, re, te, J));
                    return ["bytes32", (0, s.arrToBufArr)((0, l.keccak256)((0, d.encode)(Y.map(([te]) => te), Y.map(([, te]) => te))))]
                }
                return [C, ae]
            }

            function o(O, P, C, ae) {
                R(ae, [T.V3, T.V4]);
                const J = ["bytes32"],
                    re = [r(O, C)];
                for (const Y of C[O]) {
                    if (ae === T.V3 && void 0 === P[Y.name]) continue;
                    const [te, F] = x(C, Y.name, Y.type, P[Y.name], ae);
                    J.push(te), re.push(F)
                }
                return (0, s.arrToBufArr)((0, d.encode)(J, re))
            }

            function E(O, P) {
                let C = "";
                const ae = h(O, P);
                ae.delete(O);
                const J = [O, ...Array.from(ae).sort()];
                for (const re of J) {
                    if (!P[re]) throw new Error(`No type definition specified: ${re}`);
                    C += `${re}(${P[re].map(({name:te,type:F})=>`
                    $ {
                        F
                    }
                    $ {
                        te
                    }
                    `).join(",")})`
                }
                return C
            }

            function h(O, P, C = new Set) {
                if ("string" != typeof O) throw new Error(`Invalid findTypeDependencies input ${JSON.stringify(O)}`);
                if ([O] = O.match(/^\w*/u), C.has(O) || void 0 === P[O]) return C;
                C.add(O);
                for (const J of P[O]) h(J.type, P, C);
                return C
            }

            function c(O, P, C, ae) {
                R(ae, [T.V3, T.V4]);
                const J = o(O, P, C, ae),
                    re = (0, l.keccak256)(J);
                return (0, s.arrToBufArr)(re)
            }

            function r(O, P) {
                const C = (0, u.stringToBytes)(E(O, P));
                return (0, s.arrToBufArr)((0, l.keccak256)(C))
            }

            function a(O) {
                const P = {};
                for (const C in e.TYPED_MESSAGE_SCHEMA.properties) O[C] && (P[C] = O[C]);
                return "types" in P && (P.types = Object.assign({
                    EIP712Domain: []
                }, P.types)), P
            }

            function m(O, P) {
                R(P, [T.V3, T.V4]);
                const C = a(O),
                    {
                        domain: ae
                    } = C;
                return c("EIP712Domain", ae, {
                    EIP712Domain: C.types.EIP712Domain
                }, P)
            }

            function S(O, P) {
                if ((0, w.isArrayType)(O) && Array.isArray(P)) {
                    const [C] = (0, w.getArrayType)(O);
                    return P.map(ae => S(C, ae))
                }
                if ("address" === O) {
                    if ("number" == typeof P) return (0, B.padStart)((0, u.numberToBytes)(P), 20);
                    if ((0, u.isStrictHexString)(P)) return (0, B.padStart)((0, u.hexToBytes)(P).subarray(0, 20), 20);
                    if (P instanceof Uint8Array) return (0, B.padStart)(P.subarray(0, 20), 20)
                }
                if ("bool" === O) return !!P;
                if (O.startsWith("bytes") && "bytes" !== O) {
                    const C = (0, w.getByteLength)(O);
                    if ("number" == typeof P) return P < 0 ? new Uint8Array : (0, u.numberToBytes)(P).subarray(0, C);
                    if ((0, u.isStrictHexString)(P)) return (0, u.hexToBytes)(P).subarray(0, C);
                    if (P instanceof Uint8Array) return P.subarray(0, C)
                }
                if (O.startsWith("uint") && "number" == typeof P) return Math.abs(P);
                if (O.startsWith("int") && "number" == typeof P) {
                    const C = (0, w.getLength)(O);
                    return BigInt.asIntN(C, BigInt(P))
                }
                return P
            }

            function D(O) {
                return O.map(P => "number" == typeof P ? (0, B.padStart)((0, u.numberToBytes)(P), 32) : (0, u.isStrictHexString)(P) ? (0, B.padStart)((0, u.hexToBytes)(P).subarray(0, 32), 32) : P instanceof Uint8Array ? (0, B.padStart)(P.subarray(0, 32), 32) : P)
            }

            function M(O, P) {
                return P.map(C => {
                    if ("string" == typeof C || "number" == typeof C || "bigint" == typeof C) {
                        const ae = v(O, C);
                        if (ae >= BigInt(0)) return (0, B.padStart)((0, u.bigIntToBytes)(ae), 32);
                        const J = (0, w.getLength)(O),
                            re = BigInt.asIntN(J, ae);
                        return (0, u.signedBigIntToBytes)(re, 32)
                    }
                    return C
                })
            }

            function fe(O) {
                const P = new Error("Expect argument to be non-empty array");
                if ("object" != typeof O || !("length" in O) || !O.length) throw P;
                const C = O.map(({
                        name: Y,
                        type: te,
                        value: F
                    }) => {
                        if ("address[]" === te) return {
                            name: Y,
                            type: "bytes32[]",
                            value: D(F)
                        };
                        if (te.startsWith("int") && (0, w.isArrayType)(te)) {
                            const [se, V] = (0, w.getArrayType)(te);
                            return {
                                name: Y,
                                type: `bytes32[${V??""}]`,
                                value: M(se, F)
                            }
                        }
                        return {
                            name: Y,
                            type: te,
                            value: S(te, F)
                        }
                    }),
                    ae = C.map(Y => "bytes" !== Y.type ? Y.value : (0, p.legacyToBuffer)(Y.value)),
                    J = C.map(Y => {
                        if ("function" === Y.type) throw new Error('Unsupported or invalid type: "function"');
                        return Y.type
                    }),
                    re = O.map(Y => {
                        if (!Y.name) throw P;
                        return `${Y.type} ${Y.name}`
                    });
                return (0, s.arrToBufArr)((0, l.keccak256)((0, d.encodePacked)(["bytes32", "bytes32"], [(0, l.keccak256)((0, d.encodePacked)(["string[]"], [re], !0)), (0, l.keccak256)((0, d.encodePacked)(J, ae, !0))])))
            }(O = T = e.SignTypedDataVersion || (e.SignTypedDataVersion = {})).V1 = "V1", O.V3 = "V3", O.V4 = "V4", e.TYPED_MESSAGE_SCHEMA = {
                type: "object",
                properties: {
                    types: {
                        type: "object",
                        additionalProperties: {
                            type: "array",
                            items: {
                                type: "object",
                                properties: {
                                    name: {
                                        type: "string"
                                    },
                                    type: {
                                        type: "string"
                                    }
                                },
                                required: ["name", "type"]
                            }
                        }
                    },
                    primaryType: {
                        type: "string"
                    },
                    domain: {
                        type: "object"
                    },
                    message: {
                        type: "object"
                    }
                },
                required: ["types", "primaryType", "domain", "message"]
            }, e.TypedDataUtils = {
                encodeData: o,
                encodeType: E,
                findTypeDependencies: h,
                hashStruct: c,
                hashType: r,
                sanitizeData: a,
                eip712Hash: function _(O, P) {
                    R(P, [T.V3, T.V4]);
                    const C = a(O),
                        ae = [(0, u.hexToBytes)("1901")];
                    return ae.push(m(O, P)), "EIP712Domain" !== C.primaryType && ae.push(c(C.primaryType, C.message, C.types, P)), (0, s.arrToBufArr)((0, l.keccak256)((0, u.concatBytes)(ae)))
                },
                eip712DomainHash: m
            }, e.typedSignatureHash = function U(O) {
                const P = fe(O);
                return (0, u.bytesToHex)(P)
            }, e.signTypedData = function Se({
                privateKey: O,
                data: P,
                version: C
            }) {
                if (R(C), (0, p.isNullish)(P)) throw new Error("Missing data parameter");
                if ((0, p.isNullish)(O)) throw new Error("Missing private key parameter");
                const ae = C === T.V1 ? fe(P) : e.TypedDataUtils.eip712Hash(P, C),
                    J = (0, s.ecsign)(ae, O);
                return (0, p.concatSig)((0, s.arrToBufArr)((0, u.bigIntToBytes)(J.v)), J.r, J.s)
            }, e.recoverTypedSignature = function _e({
                data: O,
                signature: P,
                version: C
            }) {
                if (R(C), (0, p.isNullish)(O)) throw new Error("Missing data parameter");
                if ((0, p.isNullish)(P)) throw new Error("Missing signature parameter");
                const ae = C === T.V1 ? fe(O) : e.TypedDataUtils.eip712Hash(O, C),
                    J = (0, p.recoverPublicKey)(ae, P),
                    re = (0, s.publicToAddress)(J);
                return (0, u.bytesToHex)(re)
            }
        },
        26690: (ve, e, A) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.normalize = e.recoverPublicKey = e.concatSig = e.legacyToBuffer = e.isNullish = e.padWithZeroes = void 0;
            const s = A(7820),
                d = A(27184);

            function w(R, v) {
                if ("" !== R && !/^[a-f0-9]+$/iu.test(R)) throw new Error(`Expected an unprefixed hex string. Received: ${R}`);
                if (v < 0) throw new Error(`Expected a non-negative integer target length. Received: ${v}`);
                return String.prototype.padStart.call(R, v, "0")
            }

            function B(R) {
                return null == R
            }
            e.padWithZeroes = w, e.isNullish = B, e.legacyToBuffer = function u(R) {
                return "string" != typeof R || (0, s.isHexString)(R) ? (0, s.toBuffer)(R) : Buffer.from(R)
            }, e.concatSig = function l(R, v, y) {
                const x = (0, s.fromSigned)(v),
                    o = (0, s.fromSigned)(y),
                    E = (0, s.bufferToInt)(R),
                    h = w((0, s.toUnsigned)(x).toString("hex"), 64),
                    c = w((0, s.toUnsigned)(o).toString("hex"), 64),
                    r = (0, d.remove0x)((0, d.numberToHex)(E));
                return (0, d.add0x)(h.concat(c, r))
            }, e.recoverPublicKey = function p(R, v) {
                const y = (0, s.fromRpcSig)(v);
                return (0, s.ecrecover)(R, y.v, y.r, y.s)
            }, e.normalize = function T(R) {
                if (!B(R)) {
                    if ("number" == typeof R) {
                        if (R < 0) return "0x";
                        const v = (0, d.numberToBytes)(R);
                        R = (0, d.bytesToHex)(v)
                    }
                    if ("string" != typeof R) {
                        let v = "eth-sig-util.normalize() requires hex string or integer input.";
                        throw v += ` received ${typeof R}: ${R}`, new Error(v)
                    }
                    return (0, d.add0x)(R.toLowerCase())
                }
            }
        },
        28108: (ve, e, A) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.createCurve = e.getHash = void 0;
            const s = A(47289),
                d = A(21865),
                w = A(58631);

            function B(l) {
                return {
                    hash: l,
                    hmac: (p, ...T) => (0, s.hmac)(l, p, (0, d.concatBytes)(...T)),
                    randomBytes: d.randomBytes
                }
            }
            e.getHash = B, e.createCurve = function u(l, p) {
                const T = R => (0, w.weierstrass)({ ...l,
                    ...B(R)
                });
                return Object.freeze({ ...T(p),
                    create: T
                })
            }
        },
        86237: (ve, e, A) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.validateBasic = e.wNAF = void 0;
            const s = A(8873),
                d = A(9873),
                w = BigInt(0),
                B = BigInt(1);
            e.wNAF = function u(p, T) {
                const R = (y, x) => {
                        const o = x.negate();
                        return y ? o : x
                    },
                    v = y => ({
                        windows: Math.ceil(T / y) + 1,
                        windowSize: 2 ** (y - 1)
                    });
                return {
                    constTimeNegate: R,
                    unsafeLadder(y, x) {
                        let o = p.ZERO,
                            E = y;
                        for (; x > w;) x & B && (o = o.add(E)), E = E.double(), x >>= B;
                        return o
                    },
                    precomputeWindow(y, x) {
                        const {
                            windows: o,
                            windowSize: E
                        } = v(x), h = [];
                        let c = y,
                            r = c;
                        for (let a = 0; a < o; a++) {
                            r = c, h.push(r);
                            for (let m = 1; m < E; m++) r = r.add(c), h.push(r);
                            c = r.double()
                        }
                        return h
                    },
                    wNAF(y, x, o) {
                        const {
                            windows: E,
                            windowSize: h
                        } = v(y);
                        let c = p.ZERO,
                            r = p.BASE;
                        const a = BigInt(2 ** y - 1),
                            m = 2 ** y,
                            _ = BigInt(y);
                        for (let U = 0; U < E; U++) {
                            const S = U * h;
                            let D = Number(o & a);
                            o >>= _, D > h && (D -= m, o += B);
                            const M = S,
                                fe = S + Math.abs(D) - 1,
                                _e = D < 0;
                            0 === D ? r = r.add(R(U % 2 != 0, x[M])) : c = c.add(R(_e, x[fe]))
                        }
                        return {
                            p: c,
                            f: r
                        }
                    },
                    wNAFCached(y, x, o, E) {
                        const h = y._WINDOW_SIZE || 1;
                        let c = x.get(y);
                        return c || (c = this.precomputeWindow(y, h), 1 !== h && x.set(y, E(c))), this.wNAF(h, c, o)
                    }
                }
            }, e.validateBasic = function l(p) {
                return (0, s.validateField)(p.Fp), (0, d.validateObject)(p, {
                    n: "bigint",
                    h: "bigint",
                    Gx: "field",
                    Gy: "field"
                }, {
                    nBitLength: "isSafeInteger",
                    nByteLength: "isSafeInteger"
                }), Object.freeze({ ...(0, s.nLength)(p.n, p.nBitLength),
                    ...p,
                    p: p.Fp.ORDER
                })
            }
        },
        77121: (ve, e, A) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.createHasher = e.isogenyMap = e.hash_to_field = e.expand_message_xof = e.expand_message_xmd = void 0;
            const s = A(8873),
                d = A(9873),
                B = d.bytesToNumberBE;

            function u(E, h) {
                if (E < 0 || E >= 1 << 8 * h) throw new Error(`bad I2OSP call: value=${E} length=${h}`);
                const c = Array.from({
                    length: h
                }).fill(0);
                for (let r = h - 1; r >= 0; r--) c[r] = 255 & E, E >>>= 8;
                return new Uint8Array(c)
            }

            function l(E, h) {
                const c = new Uint8Array(E.length);
                for (let r = 0; r < E.length; r++) c[r] = E[r] ^ h[r];
                return c
            }

            function p(E) {
                if (!(0, d.isBytes)(E)) throw new Error("Uint8Array expected")
            }

            function T(E) {
                if (!Number.isSafeInteger(E)) throw new Error("number expected")
            }

            function R(E, h, c, r) {
                p(E), p(h), T(c), h.length > 255 && (h = r((0, d.concatBytes)((0, d.utf8ToBytes)("H2C-OVERSIZE-DST-"), h)));
                const {
                    outputLen: a,
                    blockLen: m
                } = r, _ = Math.ceil(c / a);
                if (_ > 255) throw new Error("Invalid xmd length");
                const U = (0, d.concatBytes)(h, u(h.length, 1)),
                    S = u(0, m),
                    D = u(c, 2),
                    M = new Array(_),
                    fe = r((0, d.concatBytes)(S, E, D, u(0, 1), U));
                M[0] = r((0, d.concatBytes)(fe, u(1, 1), U));
                for (let _e = 1; _e <= _; _e++) {
                    const O = [l(fe, M[_e - 1]), u(_e + 1, 1), U];
                    M[_e] = r((0, d.concatBytes)(...O))
                }
                return (0, d.concatBytes)(...M).slice(0, c)
            }

            function v(E, h, c, r, a) {
                if (p(E), p(h), T(c), h.length > 255) {
                    const m = Math.ceil(2 * r / 8);
                    h = a.create({
                        dkLen: m
                    }).update((0, d.utf8ToBytes)("H2C-OVERSIZE-DST-")).update(h).digest()
                }
                if (c > 65535 || h.length > 255) throw new Error("expand_message_xof: invalid lenInBytes");
                return a.create({
                    dkLen: c
                }).update(E).update(u(c, 2)).update(h).update(u(h.length, 1)).digest()
            }

            function y(E, h, c) {
                (0, d.validateObject)(c, {
                    DST: "stringOrUint8Array",
                    p: "bigint",
                    m: "isSafeInteger",
                    k: "isSafeInteger",
                    hash: "hash"
                });
                const {
                    p: r,
                    k: a,
                    m,
                    hash: _,
                    expand: U,
                    DST: S
                } = c;
                p(E), T(h);
                const D = function w(E) {
                        if ((0, d.isBytes)(E)) return E;
                        if ("string" == typeof E) return (0, d.utf8ToBytes)(E);
                        throw new Error("DST must be Uint8Array or string")
                    }(S),
                    M = r.toString(2).length,
                    fe = Math.ceil((M + a) / 8),
                    Se = h * m * fe;
                let _e;
                if ("xmd" === U) _e = R(E, D, Se, _);
                else if ("xof" === U) _e = v(E, D, Se, a, _);
                else {
                    if ("_internal_pass" !== U) throw new Error('expand must be "xmd" or "xof"');
                    _e = E
                }
                const O = new Array(h);
                for (let P = 0; P < h; P++) {
                    const C = new Array(m);
                    for (let ae = 0; ae < m; ae++) {
                        const J = fe * (ae + P * m),
                            re = _e.subarray(J, J + fe);
                        C[ae] = (0, s.mod)(B(re), r)
                    }
                    O[P] = C
                }
                return O
            }
            e.expand_message_xmd = R, e.expand_message_xof = v, e.hash_to_field = y, e.isogenyMap = function x(E, h) {
                const c = h.map(r => Array.from(r).reverse());
                return (r, a) => {
                    const [m, _, U, S] = c.map(D => D.reduce((M, fe) => E.add(E.mul(M, r), fe)));
                    return r = E.div(m, _), a = E.mul(a, E.div(U, S)), {
                        x: r,
                        y: a
                    }
                }
            }, e.createHasher = function o(E, h, c) {
                if ("function" != typeof h) throw new Error("mapToCurve() must be defined");
                return {
                    hashToCurve(r, a) {
                        const m = y(r, 2, { ...c,
                                DST: c.DST,
                                ...a
                            }),
                            _ = E.fromAffine(h(m[0])),
                            U = E.fromAffine(h(m[1])),
                            S = _.add(U).clearCofactor();
                        return S.assertValidity(), S
                    },
                    encodeToCurve(r, a) {
                        const m = y(r, 1, { ...c,
                                DST: c.encodeDST,
                                ...a
                            }),
                            _ = E.fromAffine(h(m[0])).clearCofactor();
                        return _.assertValidity(), _
                    }
                }
            }
        },
        8873: (ve, e, A) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.mapHashToField = e.getMinHashLength = e.getFieldBytesLength = e.hashToPrivateScalar = e.FpSqrtEven = e.FpSqrtOdd = e.Field = e.nLength = e.FpIsSquare = e.FpDiv = e.FpInvertBatch = e.FpPow = e.validateField = e.isNegativeLE = e.FpSqrt = e.tonelliShanks = e.invert = e.pow2 = e.pow = e.mod = void 0;
            const s = A(9873),
                d = BigInt(0),
                w = BigInt(1),
                B = BigInt(2),
                u = BigInt(3),
                l = BigInt(4),
                p = BigInt(5),
                T = BigInt(8);

            function y(J, re) {
                const Y = J % re;
                return Y >= d ? Y : re + Y
            }

            function x(J, re, Y) {
                if (Y <= d || re < d) throw new Error("Expected power/modulo > 0");
                if (Y === w) return d;
                let te = w;
                for (; re > d;) re & w && (te = te * J % Y), J = J * J % Y, re >>= w;
                return te
            }

            function E(J, re) {
                if (J === d || re <= d) throw new Error(`invert: expected positive integers, got n=${J} mod=${re}`);
                let Y = y(J, re),
                    te = re,
                    F = d,
                    se = w,
                    V = w,
                    q = d;
                for (; Y !== d;) {
                    const ce = te / Y,
                        Ee = te % Y,
                        Le = F - V * ce,
                        oe = se - q * ce;
                    te = Y, Y = Ee, F = V, se = q, V = Le, q = oe
                }
                if (te !== w) throw new Error("invert: does not exist");
                return y(F, re)
            }

            function h(J) {
                const re = (J - w) / B;
                let Y, te, F;
                for (Y = J - w, te = 0; Y % B === d; Y /= B, te++);
                for (F = B; F < J && x(F, re, J) !== J - w; F++);
                if (1 === te) {
                    const V = (J + w) / l;
                    return function(H, ce) {
                        const Ee = H.pow(ce, V);
                        if (!H.eql(H.sqr(Ee), ce)) throw new Error("Cannot find square root");
                        return Ee
                    }
                }
                const se = (Y + w) / B;
                return function(q, H) {
                    if (q.pow(H, re) === q.neg(q.ONE)) throw new Error("Cannot find square root");
                    let ce = te,
                        Ee = q.pow(q.mul(q.ONE, F), Y),
                        Le = q.pow(H, se),
                        oe = q.pow(H, Y);
                    for (; !q.eql(oe, q.ONE);) {
                        if (q.eql(oe, q.ZERO)) return q.ZERO;
                        let Q = 1;
                        for (let Ie = q.sqr(oe); Q < ce && !q.eql(Ie, q.ONE); Q++) Ie = q.sqr(Ie);
                        const me = q.pow(Ee, w << BigInt(ce - Q - 1));
                        Ee = q.sqr(me), Le = q.mul(Le, me), oe = q.mul(oe, Ee), ce = Q
                    }
                    return Le
                }
            }

            function c(J) {
                if (J % l === u) {
                    const re = (J + w) / l;
                    return function(te, F) {
                        const se = te.pow(F, re);
                        if (!te.eql(te.sqr(se), F)) throw new Error("Cannot find square root");
                        return se
                    }
                }
                if (J % T === p) {
                    const re = (J - p) / T;
                    return function(te, F) {
                        const se = te.mul(F, B),
                            V = te.pow(se, re),
                            q = te.mul(F, V),
                            H = te.mul(te.mul(q, B), V),
                            ce = te.mul(q, te.sub(H, te.ONE));
                        if (!te.eql(te.sqr(ce), F)) throw new Error("Cannot find square root");
                        return ce
                    }
                }
                return h(J)
            }
            BigInt(9), BigInt(16), e.mod = y, e.pow = x, e.pow2 = function o(J, re, Y) {
                let te = J;
                for (; re-- > d;) te *= te, te %= Y;
                return te
            }, e.invert = E, e.tonelliShanks = h, e.FpSqrt = c, e.isNegativeLE = (J, re) => (y(J, re) & w) === w;
            const a = ["create", "isValid", "is0", "neg", "inv", "sqrt", "sqr", "eql", "add", "sub", "mul", "pow", "div", "addN", "subN", "mulN", "sqrN"];

            function _(J, re, Y) {
                if (Y < d) throw new Error("Expected power > 0");
                if (Y === d) return J.ONE;
                if (Y === w) return re;
                let te = J.ONE,
                    F = re;
                for (; Y > d;) Y & w && (te = J.mul(te, F)), F = J.sqr(F), Y >>= w;
                return te
            }

            function U(J, re) {
                const Y = new Array(re.length),
                    te = re.reduce((se, V, q) => J.is0(V) ? se : (Y[q] = se, J.mul(se, V)), J.ONE),
                    F = J.inv(te);
                return re.reduceRight((se, V, q) => J.is0(V) ? se : (Y[q] = J.mul(se, Y[q]), J.mul(se, V)), F), Y
            }

            function M(J, re) {
                const Y = void 0 !== re ? re : J.toString(2).length;
                return {
                    nBitLength: Y,
                    nByteLength: Math.ceil(Y / 8)
                }
            }

            function P(J) {
                if ("bigint" != typeof J) throw new Error("field order must be bigint");
                const re = J.toString(2).length;
                return Math.ceil(re / 8)
            }

            function C(J) {
                const re = P(J);
                return re + Math.ceil(re / 2)
            }
            e.validateField = function m(J) {
                const Y = a.reduce((te, F) => (te[F] = "function", te), {
                    ORDER: "bigint",
                    MASK: "bigint",
                    BYTES: "isSafeInteger",
                    BITS: "isSafeInteger"
                });
                return (0, s.validateObject)(J, Y)
            }, e.FpPow = _, e.FpInvertBatch = U, e.FpDiv = function S(J, re, Y) {
                return J.mul(re, "bigint" == typeof Y ? E(Y, J.ORDER) : J.inv(Y))
            }, e.FpIsSquare = function D(J) {
                const re = (J.ORDER - w) / B;
                return Y => {
                    const te = J.pow(Y, re);
                    return J.eql(te, J.ZERO) || J.eql(te, J.ONE)
                }
            }, e.nLength = M, e.Field = function fe(J, re, Y = !1, te = {}) {
                if (J <= d) throw new Error(`Expected Field ORDER > 0, got ${J}`);
                const {
                    nBitLength: F,
                    nByteLength: se
                } = M(J, re);
                if (se > 2048) throw new Error("Field lengths over 2048 bytes are not supported");
                const V = c(J),
                    q = Object.freeze({
                        ORDER: J,
                        BITS: F,
                        BYTES: se,
                        MASK: (0, s.bitMask)(F),
                        ZERO: d,
                        ONE: w,
                        create: H => y(H, J),
                        isValid: H => {
                            if ("bigint" != typeof H) throw new Error("Invalid field element: expected bigint, got " + typeof H);
                            return d <= H && H < J
                        },
                        is0: H => H === d,
                        isOdd: H => (H & w) === w,
                        neg: H => y(-H, J),
                        eql: (H, ce) => H === ce,
                        sqr: H => y(H * H, J),
                        add: (H, ce) => y(H + ce, J),
                        sub: (H, ce) => y(H - ce, J),
                        mul: (H, ce) => y(H * ce, J),
                        pow: (H, ce) => _(q, H, ce),
                        div: (H, ce) => y(H * E(ce, J), J),
                        sqrN: H => H * H,
                        addN: (H, ce) => H + ce,
                        subN: (H, ce) => H - ce,
                        mulN: (H, ce) => H * ce,
                        inv: H => E(H, J),
                        sqrt: te.sqrt || (H => V(q, H)),
                        invertBatch: H => U(q, H),
                        cmov: (H, ce, Ee) => Ee ? ce : H,
                        toBytes: H => Y ? (0, s.numberToBytesLE)(H, se) : (0, s.numberToBytesBE)(H, se),
                        fromBytes: H => {
                            if (H.length !== se) throw new Error(`Fp.fromBytes: expected ${se}, got ${H.length}`);
                            return Y ? (0, s.bytesToNumberLE)(H) : (0, s.bytesToNumberBE)(H)
                        }
                    });
                return Object.freeze(q)
            }, e.FpSqrtOdd = function Se(J, re) {
                if (!J.isOdd) throw new Error("Field doesn't have isOdd");
                const Y = J.sqrt(re);
                return J.isOdd(Y) ? Y : J.neg(Y)
            }, e.FpSqrtEven = function _e(J, re) {
                if (!J.isOdd) throw new Error("Field doesn't have isOdd");
                const Y = J.sqrt(re);
                return J.isOdd(Y) ? J.neg(Y) : Y
            }, e.hashToPrivateScalar = function O(J, re, Y = !1) {
                const te = (J = (0, s.ensureBytes)("privateHash", J)).length,
                    F = M(re).nByteLength + 8;
                if (F < 24 || te < F || te > 1024) throw new Error(`hashToPrivateScalar: expected ${F}-1024 bytes of input, got ${te}`);
                return y(Y ? (0, s.bytesToNumberLE)(J) : (0, s.bytesToNumberBE)(J), re - w) + w
            }, e.getFieldBytesLength = P, e.getMinHashLength = C, e.mapHashToField = function ae(J, re, Y = !1) {
                const te = J.length,
                    F = P(re),
                    se = C(re);
                if (te < 16 || te < se || te > 1024) throw new Error(`expected ${se}-1024 bytes of input, got ${te}`);
                const q = y(Y ? (0, s.bytesToNumberBE)(J) : (0, s.bytesToNumberLE)(J), re - w) + w;
                return Y ? (0, s.numberToBytesLE)(q, F) : (0, s.numberToBytesBE)(q, F)
            }
        },
        9873: (ve, e) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.validateObject = e.createHmacDrbg = e.bitMask = e.bitSet = e.bitGet = e.bitLen = e.utf8ToBytes = e.equalBytes = e.concatBytes = e.ensureBytes = e.numberToVarBytesBE = e.numberToBytesLE = e.numberToBytesBE = e.bytesToNumberLE = e.bytesToNumberBE = e.hexToBytes = e.hexToNumber = e.numberToHexUnpadded = e.bytesToHex = e.isBytes = void 0;
            const A = BigInt(0),
                s = BigInt(1),
                d = BigInt(2);

            function w(P) {
                return P instanceof Uint8Array || null != P && "object" == typeof P && "Uint8Array" === P.constructor.name
            }
            e.isBytes = w;
            const B = Array.from({
                length: 256
            }, (P, C) => C.toString(16).padStart(2, "0"));

            function u(P) {
                if (!w(P)) throw new Error("Uint8Array expected");
                let C = "";
                for (let ae = 0; ae < P.length; ae++) C += B[P[ae]];
                return C
            }

            function l(P) {
                const C = P.toString(16);
                return 1 & C.length ? `0${C}` : C
            }

            function p(P) {
                if ("string" != typeof P) throw new Error("hex string expected, got " + typeof P);
                return BigInt("" === P ? "0" : `0x${P}`)
            }
            e.bytesToHex = u, e.numberToHexUnpadded = l, e.hexToNumber = p;
            const T = {
                _0: 48,
                _9: 57,
                _A: 65,
                _F: 70,
                _a: 97,
                _f: 102
            };

            function R(P) {
                return P >= T._0 && P <= T._9 ? P - T._0 : P >= T._A && P <= T._F ? P - (T._A - 10) : P >= T._a && P <= T._f ? P - (T._a - 10) : void 0
            }

            function v(P) {
                if ("string" != typeof P) throw new Error("hex string expected, got " + typeof P);
                const C = P.length,
                    ae = C / 2;
                if (C % 2) throw new Error("padded hex string expected, got unpadded hex of length " + C);
                const J = new Uint8Array(ae);
                for (let re = 0, Y = 0; re < ae; re++, Y += 2) {
                    const te = R(P.charCodeAt(Y)),
                        F = R(P.charCodeAt(Y + 1));
                    if (void 0 === te || void 0 === F) throw new Error('hex string expected, got non-hex character "' + (P[Y] + P[Y + 1]) + '" at index ' + Y);
                    J[re] = 16 * te + F
                }
                return J
            }

            function o(P, C) {
                return v(P.toString(16).padStart(2 * C, "0"))
            }

            function r(...P) {
                let C = 0;
                for (let re = 0; re < P.length; re++) {
                    const Y = P[re];
                    if (!w(Y)) throw new Error("Uint8Array expected");
                    C += Y.length
                }
                let ae = new Uint8Array(C),
                    J = 0;
                for (let re = 0; re < P.length; re++) {
                    const Y = P[re];
                    ae.set(Y, J), J += Y.length
                }
                return ae
            }
            e.hexToBytes = v, e.bytesToNumberBE = function y(P) {
                return p(u(P))
            }, e.bytesToNumberLE = function x(P) {
                if (!w(P)) throw new Error("Uint8Array expected");
                return p(u(Uint8Array.from(P).reverse()))
            }, e.numberToBytesBE = o, e.numberToBytesLE = function E(P, C) {
                return o(P, C).reverse()
            }, e.numberToVarBytesBE = function h(P) {
                return v(l(P))
            }, e.ensureBytes = function c(P, C, ae) {
                let J;
                if ("string" == typeof C) try {
                    J = v(C)
                } catch (Y) {
                    throw new Error(`${P} must be valid hex string, got "${C}". Cause: ${Y}`)
                } else {
                    if (!w(C)) throw new Error(`${P} must be hex string or Uint8Array`);
                    J = Uint8Array.from(C)
                }
                const re = J.length;
                if ("number" == typeof ae && re !== ae) throw new Error(`${P} expected ${ae} bytes, got ${re}`);
                return J
            }, e.concatBytes = r, e.equalBytes = function a(P, C) {
                if (P.length !== C.length) return !1;
                let ae = 0;
                for (let J = 0; J < P.length; J++) ae |= P[J] ^ C[J];
                return 0 === ae
            }, e.utf8ToBytes = function m(P) {
                if ("string" != typeof P) throw new Error("utf8ToBytes expected string, got " + typeof P);
                return new Uint8Array((new TextEncoder).encode(P))
            }, e.bitLen = function _(P) {
                let C;
                for (C = 0; P > A; P >>= s, C += 1);
                return C
            }, e.bitGet = function U(P, C) {
                return P >> BigInt(C) & s
            }, e.bitSet = (P, C, ae) => P | (ae ? s : A) << BigInt(C), e.bitMask = P => (d << BigInt(P - 1)) - s;
            const M = P => new Uint8Array(P),
                fe = P => Uint8Array.from(P);
            e.createHmacDrbg = function Se(P, C, ae) {
                if ("number" != typeof P || P < 2) throw new Error("hashLen must be a number");
                if ("number" != typeof C || C < 2) throw new Error("qByteLen must be a number");
                if ("function" != typeof ae) throw new Error("hmacFn must be a function");
                let J = M(P),
                    re = M(P),
                    Y = 0;
                const te = () => {
                        J.fill(1), re.fill(0), Y = 0
                    },
                    F = (...H) => ae(re, J, ...H),
                    se = (H = M()) => {
                        re = F(fe([0]), H), J = F(), 0 !== H.length && (re = F(fe([1]), H), J = F())
                    },
                    V = () => {
                        if (Y++ >= 1e3) throw new Error("drbg: tried 1000 values");
                        let H = 0;
                        const ce = [];
                        for (; H < C;) {
                            J = F();
                            const Ee = J.slice();
                            ce.push(Ee), H += J.length
                        }
                        return r(...ce)
                    };
                return (H, ce) => {
                    let Ee;
                    for (te(), se(H); !(Ee = ce(V()));) se();
                    return te(), Ee
                }
            };
            const _e = {
                bigint: P => "bigint" == typeof P,
                function: P => "function" == typeof P,
                boolean: P => "boolean" == typeof P,
                string: P => "string" == typeof P,
                stringOrUint8Array: P => "string" == typeof P || w(P),
                isSafeInteger: P => Number.isSafeInteger(P),
                array: P => Array.isArray(P),
                field: (P, C) => C.Fp.isValid(P),
                hash: P => "function" == typeof P && Number.isSafeInteger(P.outputLen)
            };
            e.validateObject = function O(P, C, ae = {}) {
                const J = (re, Y, te) => {
                    const F = _e[Y];
                    if ("function" != typeof F) throw new Error(`Invalid validator "${Y}", expected function`);
                    const se = P[re];
                    if (!(te && void 0 === se || F(se, P))) throw new Error(`Invalid param ${String(re)}=${se} (${typeof se}), expected ${Y}`)
                };
                for (const [re, Y] of Object.entries(C)) J(re, Y, !1);
                for (const [re, Y] of Object.entries(ae)) J(re, Y, !0);
                return P
            }
        },
        58631: (ve, e, A) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.mapToCurveSimpleSWU = e.SWUFpSqrtRatio = e.weierstrass = e.weierstrassPoints = e.DER = void 0;
            const s = A(8873),
                d = A(9873),
                w = A(9873),
                B = A(86237),
                {
                    bytesToNumberBE: l,
                    hexToBytes: p
                } = d;
            e.DER = {
                Err: class extends Error {
                    constructor(m = "") {
                        super(m)
                    }
                },
                _parseInt(a) {
                    const {
                        Err: m
                    } = e.DER;
                    if (a.length < 2 || 2 !== a[0]) throw new m("Invalid signature integer tag");
                    const _ = a[1],
                        U = a.subarray(2, _ + 2);
                    if (!_ || U.length !== _) throw new m("Invalid signature integer: wrong length");
                    if (128 & U[0]) throw new m("Invalid signature integer: negative");
                    if (0 === U[0] && !(128 & U[1])) throw new m("Invalid signature integer: unnecessary leading zero");
                    return {
                        d: l(U),
                        l: a.subarray(_ + 2)
                    }
                },
                toSig(a) {
                    const {
                        Err: m
                    } = e.DER, _ = "string" == typeof a ? p(a) : a;
                    if (!d.isBytes(_)) throw new Error("ui8a expected");
                    let U = _.length;
                    if (U < 2 || 48 != _[0]) throw new m("Invalid signature tag");
                    if (_[1] !== U - 2) throw new m("Invalid signature: incorrect length");
                    const {
                        d: S,
                        l: D
                    } = e.DER._parseInt(_.subarray(2)), {
                        d: M,
                        l: fe
                    } = e.DER._parseInt(D);
                    if (fe.length) throw new m("Invalid signature: left bytes after parsing");
                    return {
                        r: S,
                        s: M
                    }
                },
                hexFromSig(a) {
                    const m = _e => 8 & Number.parseInt(_e[0], 16) ? "00" + _e : _e,
                        _ = _e => {
                            const O = _e.toString(16);
                            return 1 & O.length ? `0${O}` : O
                        },
                        U = m(_(a.s)),
                        S = m(_(a.r)),
                        D = U.length / 2,
                        M = S.length / 2,
                        fe = _(D),
                        Se = _(M);
                    return `30${_(M+D+4)}02${Se}${S}02${fe}${U}`
                }
            };
            const T = BigInt(0),
                R = BigInt(1),
                v = BigInt(2),
                y = BigInt(3),
                x = BigInt(4);

            function o(a) {
                const m = function u(a) {
                        const m = (0, B.validateBasic)(a);
                        d.validateObject(m, {
                            a: "field",
                            b: "field"
                        }, {
                            allowedPrivateKeyLengths: "array",
                            wrapPrivateKey: "boolean",
                            isTorsionFree: "function",
                            clearCofactor: "function",
                            allowInfinityPoint: "boolean",
                            fromBytes: "function",
                            toBytes: "function"
                        });
                        const {
                            endo: _,
                            Fp: U,
                            a: S
                        } = m;
                        if (_) {
                            if (!U.eql(S, U.ZERO)) throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");
                            if ("object" != typeof _ || "bigint" != typeof _.beta || "function" != typeof _.splitScalar) throw new Error("Expected endomorphism with beta: bigint and splitScalar: function")
                        }
                        return Object.freeze({ ...m
                        })
                    }(a),
                    {
                        Fp: _
                    } = m,
                    U = m.toBytes || ((J, re, Y) => {
                        const te = re.toAffine();
                        return d.concatBytes(Uint8Array.from([4]), _.toBytes(te.x), _.toBytes(te.y))
                    }),
                    S = m.fromBytes || (J => {
                        const re = J.subarray(1);
                        return {
                            x: _.fromBytes(re.subarray(0, _.BYTES)),
                            y: _.fromBytes(re.subarray(_.BYTES, 2 * _.BYTES))
                        }
                    });

                function D(J) {
                    const {
                        a: re,
                        b: Y
                    } = m, te = _.sqr(J), F = _.mul(te, J);
                    return _.add(_.add(F, _.mul(J, re)), Y)
                }
                if (!_.eql(_.sqr(m.Gy), D(m.Gx))) throw new Error("bad generator point: equation left != right");

                function M(J) {
                    return "bigint" == typeof J && T < J && J < m.n
                }

                function fe(J) {
                    if (!M(J)) throw new Error("Expected valid bigint: 0 < bigint < curve.n")
                }

                function Se(J) {
                    const {
                        allowedPrivateKeyLengths: re,
                        nByteLength: Y,
                        wrapPrivateKey: te,
                        n: F
                    } = m;
                    if (re && "bigint" != typeof J) {
                        if (d.isBytes(J) && (J = d.bytesToHex(J)), "string" != typeof J || !re.includes(J.length)) throw new Error("Invalid key");
                        J = J.padStart(2 * Y, "0")
                    }
                    let se;
                    try {
                        se = "bigint" == typeof J ? J : d.bytesToNumberBE((0, w.ensureBytes)("private key", J, Y))
                    } catch {
                        throw new Error(`private key must be ${Y} bytes, hex or bigint, not ${typeof J}`)
                    }
                    return te && (se = s.mod(se, F)), fe(se), se
                }
                const _e = new Map;

                function O(J) {
                    if (!(J instanceof P)) throw new Error("ProjectivePoint expected")
                }
                class P {
                    constructor(re, Y, te) {
                        if (this.px = re, this.py = Y, this.pz = te, null == re || !_.isValid(re)) throw new Error("x required");
                        if (null == Y || !_.isValid(Y)) throw new Error("y required");
                        if (null == te || !_.isValid(te)) throw new Error("z required")
                    }
                    static fromAffine(re) {
                        const {
                            x: Y,
                            y: te
                        } = re || {};
                        if (!re || !_.isValid(Y) || !_.isValid(te)) throw new Error("invalid affine point");
                        if (re instanceof P) throw new Error("projective point not allowed");
                        const F = se => _.eql(se, _.ZERO);
                        return F(Y) && F(te) ? P.ZERO : new P(Y, te, _.ONE)
                    }
                    get x() {
                        return this.toAffine().x
                    }
                    get y() {
                        return this.toAffine().y
                    }
                    static normalizeZ(re) {
                        const Y = _.invertBatch(re.map(te => te.pz));
                        return re.map((te, F) => te.toAffine(Y[F])).map(P.fromAffine)
                    }
                    static fromHex(re) {
                        const Y = P.fromAffine(S((0, w.ensureBytes)("pointHex", re)));
                        return Y.assertValidity(), Y
                    }
                    static fromPrivateKey(re) {
                        return P.BASE.multiply(Se(re))
                    }
                    _setWindowSize(re) {
                        this._WINDOW_SIZE = re, _e.delete(this)
                    }
                    assertValidity() {
                        if (this.is0()) {
                            if (m.allowInfinityPoint && !_.is0(this.py)) return;
                            throw new Error("bad point: ZERO")
                        }
                        const {
                            x: re,
                            y: Y
                        } = this.toAffine();
                        if (!_.isValid(re) || !_.isValid(Y)) throw new Error("bad point: x or y not FE");
                        const te = _.sqr(Y),
                            F = D(re);
                        if (!_.eql(te, F)) throw new Error("bad point: equation left != right");
                        if (!this.isTorsionFree()) throw new Error("bad point: not in prime-order subgroup")
                    }
                    hasEvenY() {
                        const {
                            y: re
                        } = this.toAffine();
                        if (_.isOdd) return !_.isOdd(re);
                        throw new Error("Field doesn't support isOdd")
                    }
                    equals(re) {
                        O(re);
                        const {
                            px: Y,
                            py: te,
                            pz: F
                        } = this, {
                            px: se,
                            py: V,
                            pz: q
                        } = re, H = _.eql(_.mul(Y, q), _.mul(se, F)), ce = _.eql(_.mul(te, q), _.mul(V, F));
                        return H && ce
                    }
                    negate() {
                        return new P(this.px, _.neg(this.py), this.pz)
                    }
                    double() {
                        const {
                            a: re,
                            b: Y
                        } = m, te = _.mul(Y, y), {
                            px: F,
                            py: se,
                            pz: V
                        } = this;
                        let q = _.ZERO,
                            H = _.ZERO,
                            ce = _.ZERO,
                            Ee = _.mul(F, F),
                            Le = _.mul(se, se),
                            oe = _.mul(V, V),
                            Q = _.mul(F, se);
                        return Q = _.add(Q, Q), ce = _.mul(F, V), ce = _.add(ce, ce), q = _.mul(re, ce), H = _.mul(te, oe), H = _.add(q, H), q = _.sub(Le, H), H = _.add(Le, H), H = _.mul(q, H), q = _.mul(Q, q), ce = _.mul(te, ce), oe = _.mul(re, oe), Q = _.sub(Ee, oe), Q = _.mul(re, Q), Q = _.add(Q, ce), ce = _.add(Ee, Ee), Ee = _.add(ce, Ee), Ee = _.add(Ee, oe), Ee = _.mul(Ee, Q), H = _.add(H, Ee), oe = _.mul(se, V), oe = _.add(oe, oe), Ee = _.mul(oe, Q), q = _.sub(q, Ee), ce = _.mul(oe, Le), ce = _.add(ce, ce), ce = _.add(ce, ce), new P(q, H, ce)
                    }
                    add(re) {
                        O(re);
                        const {
                            px: Y,
                            py: te,
                            pz: F
                        } = this, {
                            px: se,
                            py: V,
                            pz: q
                        } = re;
                        let H = _.ZERO,
                            ce = _.ZERO,
                            Ee = _.ZERO;
                        const Le = m.a,
                            oe = _.mul(m.b, y);
                        let Q = _.mul(Y, se),
                            me = _.mul(te, V),
                            Ie = _.mul(F, q),
                            Ze = _.add(Y, te),
                            N = _.add(se, V);
                        Ze = _.mul(Ze, N), N = _.add(Q, me), Ze = _.sub(Ze, N), N = _.add(Y, F);
                        let z = _.add(se, q);
                        return N = _.mul(N, z), z = _.add(Q, Ie), N = _.sub(N, z), z = _.add(te, F), H = _.add(V, q), z = _.mul(z, H), H = _.add(me, Ie), z = _.sub(z, H), Ee = _.mul(Le, N), H = _.mul(oe, Ie), Ee = _.add(H, Ee), H = _.sub(me, Ee), Ee = _.add(me, Ee), ce = _.mul(H, Ee), me = _.add(Q, Q), me = _.add(me, Q), Ie = _.mul(Le, Ie), N = _.mul(oe, N), me = _.add(me, Ie), Ie = _.sub(Q, Ie), Ie = _.mul(Le, Ie), N = _.add(N, Ie), Q = _.mul(me, N), ce = _.add(ce, Q), Q = _.mul(z, N), H = _.mul(Ze, H), H = _.sub(H, Q), Q = _.mul(Ze, me), Ee = _.mul(z, Ee), Ee = _.add(Ee, Q), new P(H, ce, Ee)
                    }
                    subtract(re) {
                        return this.add(re.negate())
                    }
                    is0() {
                        return this.equals(P.ZERO)
                    }
                    wNAF(re) {
                        return ae.wNAFCached(this, _e, re, Y => {
                            const te = _.invertBatch(Y.map(F => F.pz));
                            return Y.map((F, se) => F.toAffine(te[se])).map(P.fromAffine)
                        })
                    }
                    multiplyUnsafe(re) {
                        const Y = P.ZERO;
                        if (re === T) return Y;
                        if (fe(re), re === R) return this;
                        const {
                            endo: te
                        } = m;
                        if (!te) return ae.unsafeLadder(this, re);
                        let {
                            k1neg: F,
                            k1: se,
                            k2neg: V,
                            k2: q
                        } = te.splitScalar(re), H = Y, ce = Y, Ee = this;
                        for (; se > T || q > T;) se & R && (H = H.add(Ee)), q & R && (ce = ce.add(Ee)), Ee = Ee.double(), se >>= R, q >>= R;
                        return F && (H = H.negate()), V && (ce = ce.negate()), ce = new P(_.mul(ce.px, te.beta), ce.py, ce.pz), H.add(ce)
                    }
                    multiply(re) {
                        fe(re);
                        let te, F, Y = re;
                        const {
                            endo: se
                        } = m;
                        if (se) {
                            const {
                                k1neg: V,
                                k1: q,
                                k2neg: H,
                                k2: ce
                            } = se.splitScalar(Y);
                            let {
                                p: Ee,
                                f: Le
                            } = this.wNAF(q), {
                                p: oe,
                                f: Q
                            } = this.wNAF(ce);
                            Ee = ae.constTimeNegate(V, Ee), oe = ae.constTimeNegate(H, oe), oe = new P(_.mul(oe.px, se.beta), oe.py, oe.pz), te = Ee.add(oe), F = Le.add(Q)
                        } else {
                            const {
                                p: V,
                                f: q
                            } = this.wNAF(Y);
                            te = V, F = q
                        }
                        return P.normalizeZ([te, F])[0]
                    }
                    multiplyAndAddUnsafe(re, Y, te) {
                        const F = P.BASE,
                            se = (q, H) => H !== T && H !== R && q.equals(F) ? q.multiply(H) : q.multiplyUnsafe(H),
                            V = se(this, Y).add(se(re, te));
                        return V.is0() ? void 0 : V
                    }
                    toAffine(re) {
                        const {
                            px: Y,
                            py: te,
                            pz: F
                        } = this, se = this.is0();
                        null == re && (re = se ? _.ONE : _.inv(F));
                        const V = _.mul(Y, re),
                            q = _.mul(te, re),
                            H = _.mul(F, re);
                        if (se) return {
                            x: _.ZERO,
                            y: _.ZERO
                        };
                        if (!_.eql(H, _.ONE)) throw new Error("invZ was invalid");
                        return {
                            x: V,
                            y: q
                        }
                    }
                    isTorsionFree() {
                        const {
                            h: re,
                            isTorsionFree: Y
                        } = m;
                        if (re === R) return !0;
                        if (Y) return Y(P, this);
                        throw new Error("isTorsionFree() has not been declared for the elliptic curve")
                    }
                    clearCofactor() {
                        const {
                            h: re,
                            clearCofactor: Y
                        } = m;
                        return re === R ? this : Y ? Y(P, this) : this.multiplyUnsafe(m.h)
                    }
                    toRawBytes(re = !0) {
                        return this.assertValidity(), U(P, this, re)
                    }
                    toHex(re = !0) {
                        return d.bytesToHex(this.toRawBytes(re))
                    }
                }
                P.BASE = new P(m.Gx, m.Gy, _.ONE), P.ZERO = new P(_.ZERO, _.ONE, _.ZERO);
                const C = m.nBitLength,
                    ae = (0, B.wNAF)(P, m.endo ? Math.ceil(C / 2) : C);
                return {
                    CURVE: m,
                    ProjectivePoint: P,
                    normPrivateKeyToScalar: Se,
                    weierstrassEquation: D,
                    isWithinCurveOrder: M
                }
            }

            function c(a, m) {
                const _ = a.ORDER;
                let U = T;
                for (let J = _ - R; J % v === T; J /= v) U += R;
                const S = U,
                    D = v << S - R - R,
                    M = D * v,
                    fe = (_ - R) / M,
                    Se = (fe - R) / v,
                    _e = M - R,
                    O = D,
                    P = a.pow(m, fe),
                    C = a.pow(m, (fe + R) / v);
                let ae = (J, re) => {
                    let Y = P,
                        te = a.pow(re, _e),
                        F = a.sqr(te);
                    F = a.mul(F, re);
                    let se = a.mul(J, F);
                    se = a.pow(se, Se), se = a.mul(se, te), te = a.mul(se, re), F = a.mul(se, J);
                    let V = a.mul(F, te);
                    se = a.pow(V, O);
                    let q = a.eql(se, a.ONE);
                    te = a.mul(F, C), se = a.mul(V, Y), F = a.cmov(te, F, q), V = a.cmov(se, V, q);
                    for (let H = S; H > R; H--) {
                        let ce = H - v;
                        ce = v << ce - R;
                        let Ee = a.pow(V, ce);
                        const Le = a.eql(Ee, a.ONE);
                        te = a.mul(F, Y), Y = a.mul(Y, Y), Ee = a.mul(V, Y), F = a.cmov(te, F, Le), V = a.cmov(Ee, V, Le)
                    }
                    return {
                        isValid: q,
                        value: F
                    }
                };
                if (a.ORDER % x === y) {
                    const J = (a.ORDER - y) / x,
                        re = a.sqrt(a.neg(m));
                    ae = (Y, te) => {
                        let F = a.sqr(te);
                        const se = a.mul(Y, te);
                        F = a.mul(F, se);
                        let V = a.pow(F, J);
                        V = a.mul(V, se);
                        const q = a.mul(V, re),
                            H = a.mul(a.sqr(V), te),
                            ce = a.eql(H, Y);
                        return {
                            isValid: ce,
                            value: a.cmov(q, V, ce)
                        }
                    }
                }
                return ae
            }
            e.weierstrassPoints = o, e.weierstrass = function h(a) {
                const m = function E(a) {
                        const m = (0, B.validateBasic)(a);
                        return d.validateObject(m, {
                            hash: "hash",
                            hmac: "function",
                            randomBytes: "function"
                        }, {
                            bits2int: "function",
                            bits2int_modN: "function",
                            lowS: "boolean"
                        }), Object.freeze({
                            lowS: !0,
                            ...m
                        })
                    }(a),
                    {
                        Fp: _,
                        n: U
                    } = m,
                    S = _.BYTES + 1,
                    D = 2 * _.BYTES + 1;

                function fe(N) {
                    return s.mod(N, U)
                }

                function Se(N) {
                    return s.invert(N, U)
                }
                const {
                    ProjectivePoint: _e,
                    normPrivateKeyToScalar: O,
                    weierstrassEquation: P,
                    isWithinCurveOrder: C
                } = o({ ...m,
                    toBytes(N, z, K) {
                        const de = z.toAffine(),
                            we = _.toBytes(de.x),
                            Be = d.concatBytes;
                        return K ? Be(Uint8Array.from([z.hasEvenY() ? 2 : 3]), we) : Be(Uint8Array.from([4]), we, _.toBytes(de.y))
                    },
                    fromBytes(N) {
                        const z = N.length,
                            K = N[0],
                            de = N.subarray(1);
                        if (z !== S || 2 !== K && 3 !== K) {
                            if (z === D && 4 === K) return {
                                x: _.fromBytes(de.subarray(0, _.BYTES)),
                                y: _.fromBytes(de.subarray(_.BYTES, 2 * _.BYTES))
                            };
                            throw new Error(`Point of length ${z} was invalid. Expected ${S} compressed bytes or ${D} uncompressed bytes`)
                        } {
                            const we = d.bytesToNumberBE(de);
                            if (! function M(N) {
                                    return T < N && N < _.ORDER
                                }(we)) throw new Error("Point is not on curve");
                            const Be = P(we);
                            let he = _.sqrt(Be);
                            return 1 == (1 & K) != ((he & R) === R) && (he = _.neg(he)), {
                                x: we,
                                y: he
                            }
                        }
                    }
                }), ae = N => d.bytesToHex(d.numberToBytesBE(N, m.nByteLength));

                function J(N) {
                    return N > U >> R
                }
                const Y = (N, z, K) => d.bytesToNumberBE(N.slice(z, K));
                class te {
                    constructor(z, K, de) {
                        this.r = z, this.s = K, this.recovery = de, this.assertValidity()
                    }
                    static fromCompact(z) {
                        const K = m.nByteLength;
                        return z = (0, w.ensureBytes)("compactSignature", z, 2 * K), new te(Y(z, 0, K), Y(z, K, 2 * K))
                    }
                    static fromDER(z) {
                        const {
                            r: K,
                            s: de
                        } = e.DER.toSig((0, w.ensureBytes)("DER", z));
                        return new te(K, de)
                    }
                    assertValidity() {
                        if (!C(this.r)) throw new Error("r must be 0 < r < CURVE.n");
                        if (!C(this.s)) throw new Error("s must be 0 < s < CURVE.n")
                    }
                    addRecoveryBit(z) {
                        return new te(this.r, this.s, z)
                    }
                    recoverPublicKey(z) {
                        const {
                            r: K,
                            s: de,
                            recovery: we
                        } = this, Be = ce((0, w.ensureBytes)("msgHash", z));
                        if (null == we || ![0, 1, 2, 3].includes(we)) throw new Error("recovery id invalid");
                        const he = 2 === we || 3 === we ? K + m.n : K;
                        if (he >= _.ORDER) throw new Error("recovery id 2 or 3 invalid");
                        const gt = _e.fromHex((1 & we ? "03" : "02") + ae(he)),
                            xt = Se(he),
                            yt = fe(-Be * xt),
                            At = fe(de * xt),
                            ge = _e.BASE.multiplyAndAddUnsafe(gt, yt, At);
                        if (!ge) throw new Error("point at infinify");
                        return ge.assertValidity(), ge
                    }
                    hasHighS() {
                        return J(this.s)
                    }
                    normalizeS() {
                        return this.hasHighS() ? new te(this.r, fe(-this.s), this.recovery) : this
                    }
                    toDERRawBytes() {
                        return d.hexToBytes(this.toDERHex())
                    }
                    toDERHex() {
                        return e.DER.hexFromSig({
                            r: this.r,
                            s: this.s
                        })
                    }
                    toCompactRawBytes() {
                        return d.hexToBytes(this.toCompactHex())
                    }
                    toCompactHex() {
                        return ae(this.r) + ae(this.s)
                    }
                }
                const F = {
                    isValidPrivateKey(N) {
                        try {
                            return O(N), !0
                        } catch {
                            return !1
                        }
                    },
                    normPrivateKeyToScalar: O,
                    randomPrivateKey: () => {
                        const N = s.getMinHashLength(m.n);
                        return s.mapHashToField(m.randomBytes(N), m.n)
                    },
                    precompute: (N = 8, z = _e.BASE) => (z._setWindowSize(N), z.multiply(BigInt(3)), z)
                };

                function V(N) {
                    const z = d.isBytes(N),
                        K = "string" == typeof N,
                        de = (z || K) && N.length;
                    return z ? de === S || de === D : K ? de === 2 * S || de === 2 * D : N instanceof _e
                }
                const H = m.bits2int || function(N) {
                        const z = d.bytesToNumberBE(N),
                            K = 8 * N.length - m.nBitLength;
                        return K > 0 ? z >> BigInt(K) : z
                    },
                    ce = m.bits2int_modN || function(N) {
                        return fe(H(N))
                    },
                    Ee = d.bitMask(m.nBitLength);

                function Le(N) {
                    if ("bigint" != typeof N) throw new Error("bigint expected");
                    if (!(T <= N && N < Ee)) throw new Error(`bigint expected < 2^${m.nBitLength}`);
                    return d.numberToBytesBE(N, m.nByteLength)
                }
                const Q = {
                        lowS: m.lowS,
                        prehash: !1
                    },
                    me = {
                        lowS: m.lowS,
                        prehash: !1
                    };
                return _e.BASE._setWindowSize(8), {
                    CURVE: m,
                    getPublicKey: function se(N, z = !0) {
                        return _e.fromPrivateKey(N).toRawBytes(z)
                    },
                    getSharedSecret: function q(N, z, K = !0) {
                        if (V(N)) throw new Error("first arg must be private key");
                        if (!V(z)) throw new Error("second arg must be public key");
                        return _e.fromHex(z).multiply(O(N)).toRawBytes(K)
                    },
                    sign: function Ie(N, z, K = Q) {
                        const {
                            seed: de,
                            k2sig: we
                        } = function oe(N, z, K = Q) {
                            if (["recovered", "canonical"].some(ee => ee in K)) throw new Error("sign() legacy options not supported");
                            const {
                                hash: de,
                                randomBytes: we
                            } = m;
                            let {
                                lowS: Be,
                                prehash: he,
                                extraEntropy: We
                            } = K;
                            null == Be && (Be = !0), N = (0, w.ensureBytes)("msgHash", N), he && (N = (0, w.ensureBytes)("prehashed msgHash", de(N)));
                            const gt = ce(N),
                                xt = O(z),
                                yt = [Le(xt), Le(gt)];
                            if (null != We) {
                                const ee = !0 === We ? we(_.BYTES) : We;
                                yt.push((0, w.ensureBytes)("extraEntropy", ee))
                            }
                            const At = d.concatBytes(...yt),
                                ge = gt;
                            return {
                                seed: At,
                                k2sig: function G(ee) {
                                    const xe = H(ee);
                                    if (!C(xe)) return;
                                    const Ae = Se(xe),
                                        je = _e.BASE.multiply(xe).toAffine(),
                                        Qe = fe(je.x);
                                    if (Qe === T) return;
                                    const j = fe(Ae * fe(ge + Qe * xt));
                                    if (j === T) return;
                                    let Ne = (je.x === Qe ? 0 : 2) | Number(je.y & R),
                                        ie = j;
                                    return Be && J(j) && (ie = function re(N) {
                                        return J(N) ? fe(-N) : N
                                    }(j), Ne ^= 1), new te(Qe, ie, Ne)
                                }
                            }
                        }(N, z, K);
                        return d.createHmacDrbg(m.hash.outputLen, m.nByteLength, m.hmac)(de, we)
                    },
                    verify: function Ze(N, z, K, de = me) {
                        const we = N;
                        if (z = (0, w.ensureBytes)("msgHash", z), K = (0, w.ensureBytes)("publicKey", K), "strict" in de) throw new Error("options.strict was renamed to lowS");
                        const {
                            lowS: Be,
                            prehash: he
                        } = de;
                        let We, gt;
                        try {
                            if ("string" == typeof we || d.isBytes(we)) try {
                                We = te.fromDER(we)
                            } catch (je) {
                                if (!(je instanceof e.DER.Err)) throw je;
                                We = te.fromCompact(we)
                            } else {
                                if ("object" != typeof we || "bigint" != typeof we.r || "bigint" != typeof we.s) throw new Error("PARSE"); {
                                    const {
                                        r: je,
                                        s: Qe
                                    } = we;
                                    We = new te(je, Qe)
                                }
                            }
                            gt = _e.fromHex(K)
                        } catch (je) {
                            if ("PARSE" === je.message) throw new Error("signature must be Signature instance, Uint8Array or hex string");
                            return !1
                        }
                        if (Be && We.hasHighS()) return !1;
                        he && (z = m.hash(z));
                        const {
                            r: xt,
                            s: yt
                        } = We, At = ce(z), ge = Se(yt), G = fe(At * ge), ee = fe(xt * ge), xe = _e.BASE.multiplyAndAddUnsafe(gt, G, ee) ? .toAffine();
                        return !!xe && fe(xe.x) === xt
                    },
                    ProjectivePoint: _e,
                    Signature: te,
                    utils: F
                }
            }, e.SWUFpSqrtRatio = c, e.mapToCurveSimpleSWU = function r(a, m) {
                if (s.validateField(a), !a.isValid(m.A) || !a.isValid(m.B) || !a.isValid(m.Z)) throw new Error("mapToCurveSimpleSWU: invalid opts");
                const _ = c(a, m.Z);
                if (!a.isOdd) throw new Error("Fp.isOdd is not implemented!");
                return U => {
                    let S, D, M, fe, Se, _e, O, P;
                    S = a.sqr(U), S = a.mul(S, m.Z), D = a.sqr(S), D = a.add(D, S), M = a.add(D, a.ONE), M = a.mul(M, m.B), fe = a.cmov(m.Z, a.neg(D), !a.eql(D, a.ZERO)), fe = a.mul(fe, m.A), D = a.sqr(M), _e = a.sqr(fe), Se = a.mul(_e, m.A), D = a.add(D, Se), D = a.mul(D, M), _e = a.mul(_e, fe), Se = a.mul(_e, m.B), D = a.add(D, Se), O = a.mul(S, M);
                    const {
                        isValid: C,
                        value: ae
                    } = _(D, _e);
                    P = a.mul(S, U), P = a.mul(P, ae), O = a.cmov(O, M, C), P = a.cmov(P, ae, C);
                    const J = a.isOdd(U) === a.isOdd(P);
                    return P = a.cmov(a.neg(P), P, J), O = a.div(O, fe), {
                        x: O,
                        y: P
                    }
                }
            }
        },
        62771: (ve, e, A) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.encodeToCurve = e.hashToCurve = e.schnorr = e.secp256k1 = void 0;
            const s = A(32534),
                d = A(21865),
                w = A(8873),
                B = A(58631),
                u = A(9873),
                l = A(77121),
                p = A(28108),
                T = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),
                R = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),
                v = BigInt(1),
                y = BigInt(2),
                x = (te, F) => (te + F / y) / F;

            function o(te) {
                const F = T,
                    se = BigInt(3),
                    V = BigInt(6),
                    q = BigInt(11),
                    H = BigInt(22),
                    ce = BigInt(23),
                    Ee = BigInt(44),
                    Le = BigInt(88),
                    oe = te * te * te % F,
                    Q = oe * oe * te % F,
                    me = (0, w.pow2)(Q, se, F) * Q % F,
                    Ie = (0, w.pow2)(me, se, F) * Q % F,
                    Ze = (0, w.pow2)(Ie, y, F) * oe % F,
                    N = (0, w.pow2)(Ze, q, F) * Ze % F,
                    z = (0, w.pow2)(N, H, F) * N % F,
                    K = (0, w.pow2)(z, Ee, F) * z % F,
                    de = (0, w.pow2)(K, Le, F) * K % F,
                    we = (0, w.pow2)(de, Ee, F) * z % F,
                    Be = (0, w.pow2)(we, se, F) * Q % F,
                    he = (0, w.pow2)(Be, ce, F) * N % F,
                    We = (0, w.pow2)(he, V, F) * oe % F,
                    gt = (0, w.pow2)(We, y, F);
                if (!E.eql(E.sqr(gt), te)) throw new Error("Cannot find square root");
                return gt
            }
            const E = (0, w.Field)(T, void 0, void 0, {
                sqrt: o
            });
            e.secp256k1 = (0, p.createCurve)({
                a: BigInt(0),
                b: BigInt(7),
                Fp: E,
                n: R,
                Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
                Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
                h: BigInt(1),
                lowS: !0,
                endo: {
                    beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
                    splitScalar: te => {
                        const F = R,
                            se = BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
                            V = -v * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),
                            q = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),
                            H = se,
                            ce = BigInt("0x100000000000000000000000000000000"),
                            Ee = x(H * te, F),
                            Le = x(-V * te, F);
                        let oe = (0, w.mod)(te - Ee * se - Le * q, F),
                            Q = (0, w.mod)(-Ee * V - Le * H, F);
                        const me = oe > ce,
                            Ie = Q > ce;
                        if (me && (oe = F - oe), Ie && (Q = F - Q), oe > ce || Q > ce) throw new Error("splitScalar: Endomorphism failed, k=" + te);
                        return {
                            k1neg: me,
                            k1: oe,
                            k2neg: Ie,
                            k2: Q
                        }
                    }
                }
            }, s.sha256);
            const h = BigInt(0),
                c = te => "bigint" == typeof te && h < te && te < T,
                r = te => "bigint" == typeof te && h < te && te < R,
                a = {};

            function m(te, ...F) {
                let se = a[te];
                if (void 0 === se) {
                    const V = (0, s.sha256)(Uint8Array.from(te, q => q.charCodeAt(0)));
                    se = (0, u.concatBytes)(V, V), a[te] = se
                }
                return (0, s.sha256)((0, u.concatBytes)(se, ...F))
            }
            const _ = te => te.toRawBytes(!0).slice(1),
                U = te => (0, u.numberToBytesBE)(te, 32),
                S = te => (0, w.mod)(te, T),
                D = te => (0, w.mod)(te, R),
                M = e.secp256k1.ProjectivePoint,
                fe = (te, F, se) => M.BASE.multiplyAndAddUnsafe(te, F, se);

            function Se(te) {
                let F = e.secp256k1.utils.normPrivateKeyToScalar(te),
                    se = M.fromPrivateKey(F);
                return {
                    scalar: se.hasEvenY() ? F : D(-F),
                    bytes: _(se)
                }
            }

            function _e(te) {
                if (!c(te)) throw new Error("bad x: need 0 < x < p");
                const F = S(te * te);
                let V = o(S(F * te + BigInt(7)));
                V % y !== h && (V = S(-V));
                const q = new M(te, V, v);
                return q.assertValidity(), q
            }

            function O(...te) {
                return D((0, u.bytesToNumberBE)(m("BIP0340/challenge", ...te)))
            }

            function ae(te, F, se) {
                const V = (0, u.ensureBytes)("signature", te, 64),
                    q = (0, u.ensureBytes)("message", F),
                    H = (0, u.ensureBytes)("publicKey", se, 32);
                try {
                    const ce = _e((0, u.bytesToNumberBE)(H)),
                        Ee = (0, u.bytesToNumberBE)(V.subarray(0, 32));
                    if (!c(Ee)) return !1;
                    const Le = (0, u.bytesToNumberBE)(V.subarray(32, 64));
                    if (!r(Le)) return !1;
                    const oe = O(U(Ee), _(ce), q),
                        Q = fe(ce, Le, D(-oe));
                    return !(!Q || !Q.hasEvenY() || Q.toAffine().x !== Ee)
                } catch {
                    return !1
                }
            }
            e.schnorr = {
                getPublicKey: function P(te) {
                    return Se(te).bytes
                },
                sign: function C(te, F, se = (0, d.randomBytes)(32)) {
                    const V = (0, u.ensureBytes)("message", te),
                        {
                            bytes: q,
                            scalar: H
                        } = Se(F),
                        ce = (0, u.ensureBytes)("auxRand", se, 32),
                        Ee = U(H ^ (0, u.bytesToNumberBE)(m("BIP0340/aux", ce))),
                        Le = m("BIP0340/nonce", Ee, q, V),
                        oe = D((0, u.bytesToNumberBE)(Le));
                    if (oe === h) throw new Error("sign failed: k is zero");
                    const {
                        bytes: Q,
                        scalar: me
                    } = Se(oe), Ie = O(Q, q, V), Ze = new Uint8Array(64);
                    if (Ze.set(Q, 0), Ze.set(U(D(me + Ie * H)), 32), !ae(Ze, V, q)) throw new Error("sign: Invalid signature produced");
                    return Ze
                },
                verify: ae,
                utils: {
                    randomPrivateKey: e.secp256k1.utils.randomPrivateKey,
                    lift_x: _e,
                    pointToBytes: _,
                    numberToBytesBE: u.numberToBytesBE,
                    bytesToNumberBE: u.bytesToNumberBE,
                    taggedHash: m,
                    mod: w.mod
                }
            };
            const J = (() => (0, l.isogenyMap)(E, [
                    ["0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa8c7", "0x7d3d4c80bc321d5b9f315cea7fd44c5d595d2fc0bf63b92dfff1044f17c6581", "0x534c328d23f234e6e2a413deca25caece4506144037c40314ecbd0b53d9dd262", "0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa88c"],
                    ["0xd35771193d94918a9ca34ccbb7b640dd86cd409542f8487d9fe6b745781eb49b", "0xedadc6f64383dc1df7c4b2d51b54225406d36b641f5e41bbc52a56612a8c6d14", "0x0000000000000000000000000000000000000000000000000000000000000001"],
                    ["0x4bda12f684bda12f684bda12f684bda12f684bda12f684bda12f684b8e38e23c", "0xc75e0c32d5cb7c0fa9d0a54b12a0a6d5647ab046d686da6fdffc90fc201d71a3", "0x29a6194691f91a73715209ef6512e576722830a201be2018a765e85a9ecee931", "0x2f684bda12f684bda12f684bda12f684bda12f684bda12f684bda12f38e38d84"],
                    ["0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffff93b", "0x7a06534bb8bdb49fd5e9e6632722c2989467c1bfc8e8d978dfb425d2685c2573", "0x6484aa716545ca2cf3a70c3fa8fe337e0a3d21162f0d6299a7bf8192bfd2a76f", "0x0000000000000000000000000000000000000000000000000000000000000001"]
                ].map(te => te.map(F => BigInt(F)))))(),
                re = (() => (0, B.mapToCurveSimpleSWU)(E, {
                    A: BigInt("0x3f8731abdd661adca08a5558f0f5d272e953d363cb6f0e5d405447c01a444533"),
                    B: BigInt("1771"),
                    Z: E.create(BigInt("-11"))
                }))(),
                Y = (() => (0, l.createHasher)(e.secp256k1.ProjectivePoint, te => {
                    const {
                        x: F,
                        y: se
                    } = re(E.create(te[0]));
                    return J(F, se)
                }, {
                    DST: "secp256k1_XMD:SHA-256_SSWU_RO_",
                    encodeDST: "secp256k1_XMD:SHA-256_SSWU_NU_",
                    p: E.ORDER,
                    m: 1,
                    k: 128,
                    expand: "xmd",
                    hash: s.sha256
                }))();
            e.hashToCurve = Y.hashToCurve, e.encodeToCurve = Y.encodeToCurve
        },
        36309: (ve, e, A) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.SHA2 = void 0;
            const s = A(95600),
                d = A(21865);
            e.SHA2 = class B extends d.Hash {
                constructor(l, p, T, R) {
                    super(), this.blockLen = l, this.outputLen = p, this.padOffset = T, this.isLE = R, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(l), this.view = (0, d.createView)(this.buffer)
                }
                update(l) {
                    (0, s.exists)(this);
                    const {
                        view: p,
                        buffer: T,
                        blockLen: R
                    } = this, v = (l = (0, d.toBytes)(l)).length;
                    for (let y = 0; y < v;) {
                        const x = Math.min(R - this.pos, v - y);
                        if (x !== R) T.set(l.subarray(y, y + x), this.pos), this.pos += x, y += x, this.pos === R && (this.process(p, 0), this.pos = 0);
                        else {
                            const o = (0, d.createView)(l);
                            for (; R <= v - y; y += R) this.process(o, y)
                        }
                    }
                    return this.length += l.length, this.roundClean(), this
                }
                digestInto(l) {
                    (0, s.exists)(this), (0, s.output)(l, this), this.finished = !0;
                    const {
                        buffer: p,
                        view: T,
                        blockLen: R,
                        isLE: v
                    } = this;
                    let {
                        pos: y
                    } = this;
                    p[y++] = 128, this.buffer.subarray(y).fill(0), this.padOffset > R - y && (this.process(T, 0), y = 0);
                    for (let c = y; c < R; c++) p[c] = 0;
                    (function w(u, l, p, T) {
                        if ("function" == typeof u.setBigUint64) return u.setBigUint64(l, p, T);
                        const R = BigInt(32),
                            v = BigInt(4294967295),
                            y = Number(p >> R & v),
                            x = Number(p & v),
                            E = T ? 0 : 4;
                        u.setUint32(l + (T ? 4 : 0), y, T), u.setUint32(l + E, x, T)
                    })(T, R - 8, BigInt(8 * this.length), v), this.process(T, 0);
                    const x = (0, d.createView)(l),
                        o = this.outputLen;
                    if (o % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
                    const E = o / 4,
                        h = this.get();
                    if (E > h.length) throw new Error("_sha2: outputLen bigger than state");
                    for (let c = 0; c < E; c++) x.setUint32(4 * c, h[c], v)
                }
                digest() {
                    const {
                        buffer: l,
                        outputLen: p
                    } = this;
                    this.digestInto(l);
                    const T = l.slice(0, p);
                    return this.destroy(), T
                }
                _cloneInto(l) {
                    l || (l = new this.constructor), l.set(...this.get());
                    const {
                        blockLen: p,
                        buffer: T,
                        length: R,
                        finished: v,
                        destroyed: y,
                        pos: x
                    } = this;
                    return l.length = R, l.pos = x, l.finished = v, l.destroyed = y, R % p && l.buffer.set(T), l
                }
            }
        },
        47289: (ve, e, A) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.hmac = e.HMAC = void 0;
            const s = A(95600),
                d = A(21865);
            class w extends d.Hash {
                constructor(l, p) {
                    super(), this.finished = !1, this.destroyed = !1, (0, s.hash)(l);
                    const T = (0, d.toBytes)(p);
                    if (this.iHash = l.create(), "function" != typeof this.iHash.update) throw new Error("Expected instance of class which extends utils.Hash");
                    this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
                    const R = this.blockLen,
                        v = new Uint8Array(R);
                    v.set(T.length > R ? l.create().update(T).digest() : T);
                    for (let y = 0; y < v.length; y++) v[y] ^= 54;
                    this.iHash.update(v), this.oHash = l.create();
                    for (let y = 0; y < v.length; y++) v[y] ^= 106;
                    this.oHash.update(v), v.fill(0)
                }
                update(l) {
                    return (0, s.exists)(this), this.iHash.update(l), this
                }
                digestInto(l) {
                    (0, s.exists)(this), (0, s.bytes)(l, this.outputLen), this.finished = !0, this.iHash.digestInto(l), this.oHash.update(l), this.oHash.digestInto(l), this.destroy()
                }
                digest() {
                    const l = new Uint8Array(this.oHash.outputLen);
                    return this.digestInto(l), l
                }
                _cloneInto(l) {
                    l || (l = Object.create(Object.getPrototypeOf(this), {}));
                    const {
                        oHash: p,
                        iHash: T,
                        finished: R,
                        destroyed: v,
                        blockLen: y,
                        outputLen: x
                    } = this;
                    return l.finished = R, l.destroyed = v, l.blockLen = y, l.outputLen = x, l.oHash = p._cloneInto(l.oHash), l.iHash = T._cloneInto(l.iHash), l
                }
                destroy() {
                    this.destroyed = !0, this.oHash.destroy(), this.iHash.destroy()
                }
            }
            e.HMAC = w, e.hmac = (u, l, p) => new w(u, l).update(p).digest(), e.hmac.create = (u, l) => new w(u, l)
        },
        32534: (ve, e, A) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.sha224 = e.sha256 = void 0;
            const s = A(36309),
                d = A(21865),
                w = (v, y, x) => v & y ^ ~v & x,
                B = (v, y, x) => v & y ^ v & x ^ y & x,
                u = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]),
                l = new Uint32Array([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]),
                p = new Uint32Array(64);
            class T extends s.SHA2 {
                constructor() {
                    super(64, 32, 8, !1), this.A = 0 | l[0], this.B = 0 | l[1], this.C = 0 | l[2], this.D = 0 | l[3], this.E = 0 | l[4], this.F = 0 | l[5], this.G = 0 | l[6], this.H = 0 | l[7]
                }
                get() {
                    const {
                        A: y,
                        B: x,
                        C: o,
                        D: E,
                        E: h,
                        F: c,
                        G: r,
                        H: a
                    } = this;
                    return [y, x, o, E, h, c, r, a]
                }
                set(y, x, o, E, h, c, r, a) {
                    this.A = 0 | y, this.B = 0 | x, this.C = 0 | o, this.D = 0 | E, this.E = 0 | h, this.F = 0 | c, this.G = 0 | r, this.H = 0 | a
                }
                process(y, x) {
                    for (let U = 0; U < 16; U++, x += 4) p[U] = y.getUint32(x, !1);
                    for (let U = 16; U < 64; U++) {
                        const S = p[U - 15],
                            D = p[U - 2],
                            M = (0, d.rotr)(S, 7) ^ (0, d.rotr)(S, 18) ^ S >>> 3,
                            fe = (0, d.rotr)(D, 17) ^ (0, d.rotr)(D, 19) ^ D >>> 10;
                        p[U] = fe + p[U - 7] + M + p[U - 16] | 0
                    }
                    let {
                        A: o,
                        B: E,
                        C: h,
                        D: c,
                        E: r,
                        F: a,
                        G: m,
                        H: _
                    } = this;
                    for (let U = 0; U < 64; U++) {
                        const D = _ + ((0, d.rotr)(r, 6) ^ (0, d.rotr)(r, 11) ^ (0, d.rotr)(r, 25)) + w(r, a, m) + u[U] + p[U] | 0,
                            fe = ((0, d.rotr)(o, 2) ^ (0, d.rotr)(o, 13) ^ (0, d.rotr)(o, 22)) + B(o, E, h) | 0;
                        _ = m, m = a, a = r, r = c + D | 0, c = h, h = E, E = o, o = D + fe | 0
                    }
                    o = o + this.A | 0, E = E + this.B | 0, h = h + this.C | 0, c = c + this.D | 0, r = r + this.E | 0, a = a + this.F | 0, m = m + this.G | 0, _ = _ + this.H | 0, this.set(o, E, h, c, r, a, m, _)
                }
                roundClean() {
                    p.fill(0)
                }
                destroy() {
                    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0)
                }
            }
            class R extends T {
                constructor() {
                    super(), this.A = -1056596264, this.B = 914150663, this.C = 812702999, this.D = -150054599, this.E = -4191439, this.F = 1750603025, this.G = 1694076839, this.H = -1090891868, this.outputLen = 28
                }
            }
            e.sha256 = (0, d.wrapConstructor)(() => new T), e.sha224 = (0, d.wrapConstructor)(() => new R)
        },
        66278: (ve, e, A) => {
            "use strict";
            A.r(e), A.d(e, {
                EthereumPrivateKeyProvider: () => Pn,
                TransactionFormatter: () => oi,
                WalletConnectV2Provider: () => vn,
                getProviderHandlers: () => ii
            });
            var s = A(49671),
                d = A(1413),
                w = A(81180),
                B = A(17996),
                u = A(21308),
                l = A(64778),
                p = A(7406),
                T = A(78229),
                R = A(98666);

            function y(n, t, i) {
                if (i > n.length) throw new Error("invalid RLP (safeSlice): end slice of Uint8Array out-of-bounds");
                return n.slice(t, i)
            }

            function x(n) {
                if (0 === n[0]) throw new Error("invalid RLP: extra zeros");
                return a(function r(n) {
                    let t = "";
                    for (let i = 0; i < n.length; i++) t += c[n[i]];
                    return t
                }(n))
            }

            function o(n, t) {
                if (n < 56) return Uint8Array.from([n + t]);
                const i = S(n),
                    L = S(t + 55 + i.length / 2);
                return Uint8Array.from(m(L + i))
            }

            function h(n) {
                let t, i, g, L, X;
                const be = [],
                    Pe = n[0];
                if (Pe <= 127) return {
                    data: n.slice(0, 1),
                    remainder: n.slice(1)
                };
                if (Pe <= 183) {
                    if (t = Pe - 127, g = 128 === Pe ? Uint8Array.from([]) : y(n, 1, t), 2 === t && g[0] < 128) throw new Error("invalid RLP encoding: invalid prefix, single byte < 0x80 are not prefixed");
                    return {
                        data: g,
                        remainder: n.slice(t)
                    }
                }
                if (Pe <= 191) {
                    if (i = Pe - 182, n.length - 1 < i) throw new Error("invalid RLP: not enough bytes for string length");
                    if (t = x(y(n, 1, i)), t <= 55) throw new Error("invalid RLP: expected string length to be greater than 55");
                    return g = y(n, i, t + i), {
                        data: g,
                        remainder: n.slice(t + i)
                    }
                }
                if (Pe <= 247) {
                    for (t = Pe - 191, L = y(n, 1, t); L.length;) X = h(L), be.push(X.data), L = X.remainder;
                    return {
                        data: be,
                        remainder: n.slice(t)
                    }
                } {
                    if (i = Pe - 246, t = x(y(n, 1, i)), t < 56) throw new Error("invalid RLP: encoded list too short");
                    const Ue = i + t;
                    if (Ue > n.length) throw new Error("invalid RLP: total length is larger than the data");
                    for (L = y(n, i, Ue); L.length;) X = h(L), be.push(X.data), L = X.remainder;
                    return {
                        data: be,
                        remainder: n.slice(Ue)
                    }
                }
            }
            const c = Array.from({
                length: 256
            }, (n, t) => t.toString(16).padStart(2, "0"));

            function a(n) {
                const t = Number.parseInt(n, 16);
                if (Number.isNaN(t)) throw new Error("Invalid byte sequence");
                return t
            }

            function m(n) {
                if ("string" != typeof n) throw new TypeError("hexToBytes: expected string, got " + typeof n);
                if (n.length % 2) throw new Error("hexToBytes: received invalid unpadded hex");
                const t = new Uint8Array(n.length / 2);
                for (let i = 0; i < t.length; i++) {
                    const g = 2 * i;
                    t[i] = a(n.slice(g, g + 2))
                }
                return t
            }

            function _(...n) {
                if (1 === n.length) return n[0];
                const t = n.reduce((g, L) => g + L.length, 0),
                    i = new Uint8Array(t);
                for (let g = 0, L = 0; g < n.length; g++) {
                    const X = n[g];
                    i.set(X, L), L += X.length
                }
                return i
            }

            function S(n) {
                if (n < 0) throw new Error("Invalid integer as argument, must be unsigned!");
                const t = n.toString(16);
                return t.length % 2 ? `0${t}` : t
            }

            function M(n) {
                return n.length >= 2 && "0" === n[0] && "x" === n[1]
            }

            function Se(n) {
                if (n instanceof Uint8Array) return n;
                if ("string" == typeof n) return M(n) ? m(function D(n) {
                    return n.length % 2 ? `0${n}` : n
                }(function fe(n) {
                    return "string" != typeof n ? n : M(n) ? n.slice(2) : n
                }(n))) : function U(n) {
                    return (new TextEncoder).encode(n)
                }(n);
                if ("number" == typeof n || "bigint" == typeof n) return n ? m(S(n)) : Uint8Array.from([]);
                if (null == n) return Uint8Array.from([]);
                throw new Error("toBytes: received unsupported type " + typeof n)
            }
            const O_encode = function v(n) {
                    if (Array.isArray(n)) {
                        const i = [];
                        let g = 0;
                        for (let L = 0; L < n.length; L++) {
                            const X = v(n[L]);
                            i.push(X), g += X.length
                        }
                        return _(o(g, 192), ...i)
                    }
                    const t = Se(n);
                    return 1 === t.length && t[0] < 128 ? t : _(o(t.length, 128), t)
                },
                O_decode = function E(n, t = !1) {
                    if (typeof n > "u" || null === n || 0 === n.length) return Uint8Array.from([]);
                    const g = h(Se(n));
                    if (t) return g;
                    if (0 !== g.remainder.length) throw new Error("invalid RLP: remainder must be zero");
                    return g.data
                };
            var P = A(66231),
                C = A(14656);

            function ae(n) {
                if ("string" != typeof n) throw new Error("[isHexPrefixed] input must be type 'string', received type " + typeof n);
                return "0" === n[0] && "x" === n[1]
            }
            const J = n => {
                if ("string" != typeof n) throw new Error("[stripHexPrefix] input must be type 'string', received " + typeof n);
                return ae(n) ? n.slice(2) : n
            };

            function re(n) {
                let t = n;
                if ("string" != typeof t) throw new Error("[padToEven] value must be type 'string', received " + typeof t);
                return t.length % 2 && (t = `0${t}`), t
            }

            function H(n, t) {
                return !("string" != typeof n || !n.match(/^0x[0-9A-Fa-f]*$/) || typeof t < "u" && t > 0 && n.length !== 2 + 2 * t)
            }
            const Ee = function(n) {
                    if (!(n instanceof Uint8Array)) throw new Error(`This method only supports Uint8Array but input was: ${n}`)
                },
                Q = BigInt(0),
                Ze = Array.from({
                    length: 256
                }, (n, t) => t.toString(16).padStart(2, "0")),
                N = n => {
                    let t = "0x";
                    if (void 0 === n || 0 === n.length) return t;
                    for (const i of n) t += Ze[i];
                    return t
                },
                z = [];
            for (let n = 0; n <= 65535; n++) z[n] = BigInt(n);
            const K = n => {
                    const t = N(n);
                    return "0x" === t ? Q : 4 === t.length ? z[n[0]] : 6 === t.length ? z[256 * n[0] + n[1]] : BigInt(t)
                },
                we = n => {
                    if ("string" != typeof n) throw new Error(`hex argument type ${typeof n} must be of type string`);
                    if (!n.startsWith("0x")) throw new Error(`prefixed hex input should start with 0x, got ${n.substring(0,2)}`);
                    (n = n.slice(2)).length % 2 != 0 && (n = re(n));
                    const t = n.length / 2,
                        i = new Uint8Array(t);
                    for (let g = 0; g < t; g++) {
                        const L = parseInt(n.slice(2 * g, 2 * (g + 1)), 16);
                        i[g] = L
                    }
                    return i
                },
                Be = n => {
                    if (!Number.isSafeInteger(n) || n < 0) throw new Error(`Received an invalid integer type: ${n}`);
                    return `0x${n.toString(16)}`
                },
                he = n => {
                    const t = Be(n);
                    return we(t)
                },
                We = n => Ae("0x" + re(n.toString(16))),
                gt = n => new Uint8Array(n),
                yt = (n, t) => (Ee(n), ((n, t, i) => i ? n.length < t ? new Uint8Array([...n, ...gt(t - n.length)]) : n.subarray(0, t) : n.length < t ? new Uint8Array([...gt(t - n.length), ...n]) : n.subarray(-t))(n, t, !1)),
                G = n => (Ee(n), (n => {
                    let t = n[0];
                    for (; n.length > 0 && "0" === t.toString();) t = (n = n.slice(1))[0];
                    return n
                })(n)),
                Ae = n => {
                    if (null == n) return new Uint8Array;
                    if (Array.isArray(n) || n instanceof Uint8Array) return Uint8Array.from(n);
                    if ("string" == typeof n) {
                        if (!H(n)) throw new Error(`Cannot convert string to Uint8Array. toBytes only supports 0x-prefixed hex strings and this string was given: ${n}`);
                        return we(n)
                    }
                    if ("number" == typeof n) return he(n);
                    if ("bigint" == typeof n) {
                        if (n < Q) throw new Error(`Cannot convert negative bigint to Uint8Array. Given: ${n}`);
                        let t = n.toString(16);
                        return t.length % 2 && (t = "0" + t), (n => {
                            if ("0x" === n.slice(0, 2)) throw new Error("hex string is prefixed with 0x, should be unprefixed");
                            return (0, C.nr)(re(n))
                        })(t)
                    }
                    if (void 0 !== n.toBytes) return n.toBytes();
                    throw new Error("invalid type")
                },
                j = n => "string" != typeof n || ae(n) ? n : "0x" + n,
                ie = n => {
                    for (const [t, i] of Object.entries(n))
                        if (void 0 !== i && i.length > 0 && 0 === i[0]) throw new Error(`${t} cannot have leading zeroes, received: ${N(i)}`)
                },
                le = n => "0x" + n.toString(16),
                ue = n => G(We(n)),
                rt = (...n) => {
                    if (1 === n.length) return n[0];
                    const t = n.reduce((g, L) => g + L.length, 0),
                        i = new Uint8Array(t);
                    for (let g = 0, L = 0; g < n.length; g++) {
                        const X = n[g];
                        i.set(X, L), L += X.length
                    }
                    return i
                },
                pe = BigInt("0xffffffffffffffff"),
                Re = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"),
                nt = (BigInt("115792089237316195423570985008687907853269984665640564039457584007913129639935"), P.kA.CURVE.n / BigInt(2)),
                Ge = (BigInt("0x10000000000000000000000000000000000000000000000000000000000000000"), we("0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470"), we("0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347"), we("0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421"), Uint8Array.from([128]), BigInt(-1), BigInt(0)),
                tt = BigInt(1),
                Ye = BigInt(2),
                mt = (BigInt(3), BigInt(7), BigInt(8)),
                vt = BigInt(27);
            BigInt(28), BigInt(31), BigInt(32), BigInt(64), BigInt(128), BigInt(255), BigInt(256), BigInt(96), BigInt(100), BigInt(160), BigInt(224), BigInt(7922816251426434e13), BigInt(1461501637330903e33), BigInt(2695994666715064e52), BigInt(1e9);
            var ht = A(43438);
            const Pt = function(n) {
                    try {
                        ! function(n) {
                            if ("string" != typeof n) throw new Error(`This method only supports strings but input was: ${n}`)
                        }(n)
                    } catch {
                        return !1
                    }
                    return /^0x[0-9a-fA-F]{40}$/.test(n)
                },
                Mt = function(n, t = !1) {
                    if (Ee(n), t && 64 !== n.length && (n = P.kA.ProjectivePoint.fromHex(n).toRawBytes(!1).slice(1)), 64 !== n.length) throw new Error("Expected pubKey to be of length 64");
                    return (0, ht.wn)(n).subarray(-20)
                },
                Ft = Mt,
                Ut = function(n) {
                    return Ft(function(n) {
                        return Ee(n), P.kA.ProjectivePoint.fromPrivateKey(n).toRawBytes(!1).slice(1)
                    }(n))
                };
            new Uint8Array(0);
            class yr {
                constructor(t) {
                    if (20 !== t.length) throw new Error("Invalid address length");
                    this.bytes = t
                }
                static zero() {
                    return new yr(gt(20))
                }
                static fromString(t) {
                    if (!Pt(t)) throw new Error("Invalid address");
                    return new yr(Ae(t))
                }
                static fromPublicKey(t) {
                    if (!(t instanceof Uint8Array)) throw new Error("Public key should be Uint8Array");
                    const i = Mt(t);
                    return new yr(i)
                }
                static fromPrivateKey(t) {
                    if (!(t instanceof Uint8Array)) throw new Error("Private key should be Uint8Array");
                    const i = Ut(t);
                    return new yr(i)
                }
                static generate(t, i) {
                    if ("bigint" != typeof i) throw new Error("Expected nonce to be a bigint");
                    return new yr(function(n, t) {
                        return Ee(n), Ee(t), K(t) === Ge ? (0, ht.wn)(O_encode([n, Uint8Array.from([])])).subarray(-20) : (0, ht.wn)(O_encode([n, t])).subarray(-20)
                    }(t.bytes, We(i)))
                }
                static generate2(t, i, g) {
                    if (!(i instanceof Uint8Array)) throw new Error("Expected salt to be a Uint8Array");
                    if (!(g instanceof Uint8Array)) throw new Error("Expected initCode to be a Uint8Array");
                    return new yr(function(n, t, i) {
                        if (Ee(n), Ee(t), Ee(i), 20 !== n.length) throw new Error("Expected from to be of length 20");
                        if (32 !== t.length) throw new Error("Expected salt to be of length 32");
                        return (0, ht.wn)(rt(we("0xff"), n, t, (0, ht.wn)(i))).subarray(-20)
                    }(t.bytes, i, g))
                }
                equals(t) {
                    return (0, C.hD)(this.bytes, t.bytes)
                }
                isZero() {
                    return this.equals(yr.zero())
                }
                isPrecompileOrSystemAddress() {
                    const t = K(this.bytes),
                        i = Ge,
                        g = BigInt("0xffff");
                    return t >= i && t <= g
                }
                toString() {
                    return N(this.bytes)
                }
                toBytes() {
                    return new Uint8Array(this.bytes)
                }
            }
            var xr = function(n) {
                return n[n.Number = 0] = "Number", n[n.BigInt = 1] = "BigInt", n[n.Uint8Array = 2] = "Uint8Array", n[n.PrefixedHexString = 3] = "PrefixedHexString", n
            }(xr || {});

            function Nr(n, t) {
                if (null === n) return null;
                if (void 0 === n) return;
                if ("string" == typeof n && !H(n)) throw new Error(`A string must be provided with a 0x-prefix, given: ${n}`);
                if ("number" == typeof n && !Number.isSafeInteger(n)) throw new Error("The provided number is greater than MAX_SAFE_INTEGER (please use an alternative input type)");
                const i = Ae(n);
                switch (t) {
                    case xr.Uint8Array:
                        return i;
                    case xr.BigInt:
                        return K(i);
                    case xr.Number:
                        {
                            const g = K(i);
                            if (g > BigInt(Number.MAX_SAFE_INTEGER)) throw new Error("The provided number is greater than MAX_SAFE_INTEGER (please use an alternative output type)");
                            return Number(g)
                        }
                    case xr.PrefixedHexString:
                        return N(i);
                    default:
                        throw new Error("unknown outputType")
                }
            }
            var Mn = A(82016),
                gi = A(49249);

            function Fr() {
                throw Error("kzg library not loaded")
            }
            let Dr = {
                loadTrustedSetup: Fr,
                blobToKzgCommitment: Fr,
                computeBlobKzgProof: Fr,
                verifyKzgProof: Fr,
                verifyBlobKzgProofBatch: Fr
            };
            const Hr = 131072;

            function mi(n) {
                const t = new Uint8Array(131072);
                for (let i = 0; i < 4096; i++) {
                    const g = new Uint8Array(32);
                    g.set(n.subarray(31 * i, 31 * (i + 1)), 0), t.set(g, 32 * i)
                }
                return t
            }
            const Fn = (n, t) => {
                    const i = new Uint8Array(32);
                    return i.set([t], 0), i.set((0, gi.J)(n).subarray(1), 1), i
                },
                Si = function() {
                    var n = (0, s.Z)(function*(t, i) {
                        const g = JSON.stringify({
                            method: i.method,
                            params: i.params,
                            jsonrpc: "2.0",
                            id: 1
                        });
                        return (yield(yield fetch(t, {
                            headers: {
                                "content-type": "application/json"
                            },
                            method: "POST",
                            body: g
                        })).json()).result
                    });
                    return function(i, g) {
                        return n.apply(this, arguments)
                    }
                }();
            var Ti = A(39007);
            const Hn = (n, t) => Ti.Buffer.from(n, t);

            function dr(n, t) {
                const i = (g, L) => t(Hn(g), L) >>> 0;
                return i.signed = (g, L) => t(Hn(g), L), i.unsigned = i, i.model = n, i
            }
            dr("crc1", (n, t = 0) => {
                let i = ~~t,
                    g = 0;
                for (let L = 0; L < n.length; L++) g += n[L];
                return i += g % 256, i % 256
            });
            let rn = [0, 7, 14, 9, 28, 27, 18, 21, 56, 63, 54, 49, 36, 35, 42, 45, 112, 119, 126, 121, 108, 107, 98, 101, 72, 79, 70, 65, 84, 83, 90, 93, 224, 231, 238, 233, 252, 251, 242, 245, 216, 223, 214, 209, 196, 195, 202, 205, 144, 151, 158, 153, 140, 139, 130, 133, 168, 175, 166, 161, 180, 179, 186, 189, 199, 192, 201, 206, 219, 220, 213, 210, 255, 248, 241, 246, 227, 228, 237, 234, 183, 176, 185, 190, 171, 172, 165, 162, 143, 136, 129, 134, 147, 148, 157, 154, 39, 32, 41, 46, 59, 60, 53, 50, 31, 24, 17, 22, 3, 4, 13, 10, 87, 80, 89, 94, 75, 76, 69, 66, 111, 104, 97, 102, 115, 116, 125, 122, 137, 142, 135, 128, 149, 146, 155, 156, 177, 182, 191, 184, 173, 170, 163, 164, 249, 254, 247, 240, 229, 226, 235, 236, 193, 198, 207, 200, 221, 218, 211, 212, 105, 110, 103, 96, 117, 114, 123, 124, 81, 86, 95, 88, 77, 74, 67, 68, 25, 30, 23, 16, 5, 2, 11, 12, 33, 38, 47, 40, 61, 58, 51, 52, 78, 73, 64, 71, 82, 85, 92, 91, 118, 113, 120, 127, 106, 109, 100, 99, 62, 57, 48, 55, 34, 37, 44, 43, 6, 1, 8, 15, 26, 29, 20, 19, 174, 169, 160, 167, 178, 181, 188, 187, 150, 145, 152, 159, 138, 141, 132, 131, 222, 217, 208, 215, 194, 197, 204, 203, 230, 225, 232, 239, 250, 253, 244, 243];
            typeof Int32Array < "u" && (rn = new Int32Array(rn)), dr("crc-8", (n, t = 0) => {
                let i = ~~t;
                for (let g = 0; g < n.length; g++) i = 255 & rn[255 & (i ^ n[g])];
                return i
            });
            let nn = [0, 94, 188, 226, 97, 63, 221, 131, 194, 156, 126, 32, 163, 253, 31, 65, 157, 195, 33, 127, 252, 162, 64, 30, 95, 1, 227, 189, 62, 96, 130, 220, 35, 125, 159, 193, 66, 28, 254, 160, 225, 191, 93, 3, 128, 222, 60, 98, 190, 224, 2, 92, 223, 129, 99, 61, 124, 34, 192, 158, 29, 67, 161, 255, 70, 24, 250, 164, 39, 121, 155, 197, 132, 218, 56, 102, 229, 187, 89, 7, 219, 133, 103, 57, 186, 228, 6, 88, 25, 71, 165, 251, 120, 38, 196, 154, 101, 59, 217, 135, 4, 90, 184, 230, 167, 249, 27, 69, 198, 152, 122, 36, 248, 166, 68, 26, 153, 199, 37, 123, 58, 100, 134, 216, 91, 5, 231, 185, 140, 210, 48, 110, 237, 179, 81, 15, 78, 16, 242, 172, 47, 113, 147, 205, 17, 79, 173, 243, 112, 46, 204, 146, 211, 141, 111, 49, 178, 236, 14, 80, 175, 241, 19, 77, 206, 144, 114, 44, 109, 51, 209, 143, 12, 82, 176, 238, 50, 108, 142, 208, 83, 13, 239, 177, 240, 174, 76, 18, 145, 207, 45, 115, 202, 148, 118, 40, 171, 245, 23, 73, 8, 86, 180, 234, 105, 55, 213, 139, 87, 9, 235, 181, 54, 104, 138, 212, 149, 203, 41, 119, 244, 170, 72, 22, 233, 183, 85, 11, 136, 214, 52, 106, 43, 117, 151, 201, 74, 20, 246, 168, 116, 42, 200, 150, 21, 75, 169, 247, 182, 232, 10, 84, 215, 137, 107, 53];
            typeof Int32Array < "u" && (nn = new Int32Array(nn)), dr("dallas-1-wire", (n, t = 0) => {
                let i = ~~t;
                for (let g = 0; g < n.length; g++) i = 255 & nn[255 & (i ^ n[g])];
                return i
            });
            let an = [0, 213, 127, 170, 254, 43, 129, 84, 41, 252, 86, 131, 215, 2, 168, 125, 82, 135, 45, 248, 172, 121, 211, 6, 123, 174, 4, 209, 133, 80, 250, 47, 164, 113, 219, 14, 90, 143, 37, 240, 141, 88, 242, 39, 115, 166, 12, 217, 246, 35, 137, 92, 8, 221, 119, 162, 223, 10, 160, 117, 33, 244, 94, 139, 157, 72, 226, 55, 99, 182, 28, 201, 180, 97, 203, 30, 74, 159, 53, 224, 207, 26, 176, 101, 49, 228, 78, 155, 230, 51, 153, 76, 24, 205, 103, 178, 57, 236, 70, 147, 199, 18, 184, 109, 16, 197, 111, 186, 238, 59, 145, 68, 107, 190, 20, 193, 149, 64, 234, 63, 66, 151, 61, 232, 188, 105, 195, 22, 239, 58, 144, 69, 17, 196, 110, 187, 198, 19, 185, 108, 56, 237, 71, 146, 189, 104, 194, 23, 67, 150, 60, 233, 148, 65, 235, 62, 106, 191, 21, 192, 75, 158, 52, 225, 181, 96, 202, 31, 98, 183, 29, 200, 156, 73, 227, 54, 25, 204, 102, 179, 231, 50, 152, 77, 48, 229, 79, 154, 206, 27, 177, 100, 114, 167, 13, 216, 140, 89, 243, 38, 91, 142, 36, 241, 165, 112, 218, 15, 32, 245, 95, 138, 222, 11, 161, 116, 9, 220, 118, 163, 247, 34, 136, 93, 214, 3, 169, 124, 40, 253, 87, 130, 255, 42, 128, 85, 1, 212, 126, 171, 132, 81, 251, 46, 122, 175, 5, 208, 173, 120, 210, 7, 83, 134, 44, 249];
            typeof Int32Array < "u" && (an = new Int32Array(an)), dr("crc-8-dvbs2", (n, t = 0) => {
                let i = ~~t;
                for (let g = 0; g < n.length; g++) i = 255 & an[255 & (i ^ n[g])];
                return i
            });
            let on = [0, 49345, 49537, 320, 49921, 960, 640, 49729, 50689, 1728, 1920, 51009, 1280, 50625, 50305, 1088, 52225, 3264, 3456, 52545, 3840, 53185, 52865, 3648, 2560, 51905, 52097, 2880, 51457, 2496, 2176, 51265, 55297, 6336, 6528, 55617, 6912, 56257, 55937, 6720, 7680, 57025, 57217, 8e3, 56577, 7616, 7296, 56385, 5120, 54465, 54657, 5440, 55041, 6080, 5760, 54849, 53761, 4800, 4992, 54081, 4352, 53697, 53377, 4160, 61441, 12480, 12672, 61761, 13056, 62401, 62081, 12864, 13824, 63169, 63361, 14144, 62721, 13760, 13440, 62529, 15360, 64705, 64897, 15680, 65281, 16320, 16e3, 65089, 64001, 15040, 15232, 64321, 14592, 63937, 63617, 14400, 10240, 59585, 59777, 10560, 60161, 11200, 10880, 59969, 60929, 11968, 12160, 61249, 11520, 60865, 60545, 11328, 58369, 9408, 9600, 58689, 9984, 59329, 59009, 9792, 8704, 58049, 58241, 9024, 57601, 8640, 8320, 57409, 40961, 24768, 24960, 41281, 25344, 41921, 41601, 25152, 26112, 42689, 42881, 26432, 42241, 26048, 25728, 42049, 27648, 44225, 44417, 27968, 44801, 28608, 28288, 44609, 43521, 27328, 27520, 43841, 26880, 43457, 43137, 26688, 30720, 47297, 47489, 31040, 47873, 31680, 31360, 47681, 48641, 32448, 32640, 48961, 32e3, 48577, 48257, 31808, 46081, 29888, 30080, 46401, 30464, 47041, 46721, 30272, 29184, 45761, 45953, 29504, 45313, 29120, 28800, 45121, 20480, 37057, 37249, 20800, 37633, 21440, 21120, 37441, 38401, 22208, 22400, 38721, 21760, 38337, 38017, 21568, 39937, 23744, 23936, 40257, 24320, 40897, 40577, 24128, 23040, 39617, 39809, 23360, 39169, 22976, 22656, 38977, 34817, 18624, 18816, 35137, 19200, 35777, 35457, 19008, 19968, 36545, 36737, 20288, 36097, 19904, 19584, 35905, 17408, 33985, 34177, 17728, 34561, 18368, 18048, 34369, 33281, 17088, 17280, 33601, 16640, 33217, 32897, 16448];
            typeof Int32Array < "u" && (on = new Int32Array(on)), dr("crc-16", (n, t = 0) => {
                let i = ~~t;
                for (let g = 0; g < n.length; g++) i = 65535 & (on[255 & (i ^ n[g])] ^ i >> 8);
                return i
            });
            let sn = [0, 4129, 8258, 12387, 16516, 20645, 24774, 28903, 33032, 37161, 41290, 45419, 49548, 53677, 57806, 61935, 4657, 528, 12915, 8786, 21173, 17044, 29431, 25302, 37689, 33560, 45947, 41818, 54205, 50076, 62463, 58334, 9314, 13379, 1056, 5121, 25830, 29895, 17572, 21637, 42346, 46411, 34088, 38153, 58862, 62927, 50604, 54669, 13907, 9842, 5649, 1584, 30423, 26358, 22165, 18100, 46939, 42874, 38681, 34616, 63455, 59390, 55197, 51132, 18628, 22757, 26758, 30887, 2112, 6241, 10242, 14371, 51660, 55789, 59790, 63919, 35144, 39273, 43274, 47403, 23285, 19156, 31415, 27286, 6769, 2640, 14899, 10770, 56317, 52188, 64447, 60318, 39801, 35672, 47931, 43802, 27814, 31879, 19684, 23749, 11298, 15363, 3168, 7233, 60846, 64911, 52716, 56781, 44330, 48395, 36200, 40265, 32407, 28342, 24277, 20212, 15891, 11826, 7761, 3696, 65439, 61374, 57309, 53244, 48923, 44858, 40793, 36728, 37256, 33193, 45514, 41451, 53516, 49453, 61774, 57711, 4224, 161, 12482, 8419, 20484, 16421, 28742, 24679, 33721, 37784, 41979, 46042, 49981, 54044, 58239, 62302, 689, 4752, 8947, 13010, 16949, 21012, 25207, 29270, 46570, 42443, 38312, 34185, 62830, 58703, 54572, 50445, 13538, 9411, 5280, 1153, 29798, 25671, 21540, 17413, 42971, 47098, 34713, 38840, 59231, 63358, 50973, 55100, 9939, 14066, 1681, 5808, 26199, 30326, 17941, 22068, 55628, 51565, 63758, 59695, 39368, 35305, 47498, 43435, 22596, 18533, 30726, 26663, 6336, 2273, 14466, 10403, 52093, 56156, 60223, 64286, 35833, 39896, 43963, 48026, 19061, 23124, 27191, 31254, 2801, 6864, 10931, 14994, 64814, 60687, 56684, 52557, 48554, 44427, 40424, 36297, 31782, 27655, 23652, 19525, 15522, 11395, 7392, 3265, 61215, 65342, 53085, 57212, 44955, 49082, 36825, 40952, 28183, 32310, 20053, 24180, 11923, 16050, 3793, 7920];
            typeof Int32Array < "u" && (sn = new Int32Array(sn)), dr("ccitt", (n, t) => {
                let i = typeof t < "u" ? ~~t : 65535;
                for (let g = 0; g < n.length; g++) i = 65535 & (sn[255 & (i >> 8 ^ n[g])] ^ i << 8);
                return i
            });
            let fn = [0, 49345, 49537, 320, 49921, 960, 640, 49729, 50689, 1728, 1920, 51009, 1280, 50625, 50305, 1088, 52225, 3264, 3456, 52545, 3840, 53185, 52865, 3648, 2560, 51905, 52097, 2880, 51457, 2496, 2176, 51265, 55297, 6336, 6528, 55617, 6912, 56257, 55937, 6720, 7680, 57025, 57217, 8e3, 56577, 7616, 7296, 56385, 5120, 54465, 54657, 5440, 55041, 6080, 5760, 54849, 53761, 4800, 4992, 54081, 4352, 53697, 53377, 4160, 61441, 12480, 12672, 61761, 13056, 62401, 62081, 12864, 13824, 63169, 63361, 14144, 62721, 13760, 13440, 62529, 15360, 64705, 64897, 15680, 65281, 16320, 16e3, 65089, 64001, 15040, 15232, 64321, 14592, 63937, 63617, 14400, 10240, 59585, 59777, 10560, 60161, 11200, 10880, 59969, 60929, 11968, 12160, 61249, 11520, 60865, 60545, 11328, 58369, 9408, 9600, 58689, 9984, 59329, 59009, 9792, 8704, 58049, 58241, 9024, 57601, 8640, 8320, 57409, 40961, 24768, 24960, 41281, 25344, 41921, 41601, 25152, 26112, 42689, 42881, 26432, 42241, 26048, 25728, 42049, 27648, 44225, 44417, 27968, 44801, 28608, 28288, 44609, 43521, 27328, 27520, 43841, 26880, 43457, 43137, 26688, 30720, 47297, 47489, 31040, 47873, 31680, 31360, 47681, 48641, 32448, 32640, 48961, 32e3, 48577, 48257, 31808, 46081, 29888, 30080, 46401, 30464, 47041, 46721, 30272, 29184, 45761, 45953, 29504, 45313, 29120, 28800, 45121, 20480, 37057, 37249, 20800, 37633, 21440, 21120, 37441, 38401, 22208, 22400, 38721, 21760, 38337, 38017, 21568, 39937, 23744, 23936, 40257, 24320, 40897, 40577, 24128, 23040, 39617, 39809, 23360, 39169, 22976, 22656, 38977, 34817, 18624, 18816, 35137, 19200, 35777, 35457, 19008, 19968, 36545, 36737, 20288, 36097, 19904, 19584, 35905, 17408, 33985, 34177, 17728, 34561, 18368, 18048, 34369, 33281, 17088, 17280, 33601, 16640, 33217, 32897, 16448];
            typeof Int32Array < "u" && (fn = new Int32Array(fn)), dr("crc-16-modbus", (n, t) => {
                let i = typeof t < "u" ? ~~t : 65535;
                for (let g = 0; g < n.length; g++) i = 65535 & (fn[255 & (i ^ n[g])] ^ i >> 8);
                return i
            }), dr("xmodem", (n, t) => {
                let i = typeof t < "u" ? ~~t : 0;
                for (let g = 0; g < n.length; g++) {
                    let L = i >>> 8 & 255;
                    L ^= 255 & n[g], L ^= L >>> 4, i = i << 8 & 65535, i ^= L, L = L << 5 & 65535, i ^= L, L = L << 7 & 65535, i ^= L
                }
                return i
            });
            let cn = [0, 4489, 8978, 12955, 17956, 22445, 25910, 29887, 35912, 40385, 44890, 48851, 51820, 56293, 59774, 63735, 4225, 264, 13203, 8730, 22181, 18220, 30135, 25662, 40137, 36160, 49115, 44626, 56045, 52068, 63999, 59510, 8450, 12427, 528, 5017, 26406, 30383, 17460, 21949, 44362, 48323, 36440, 40913, 60270, 64231, 51324, 55797, 12675, 8202, 4753, 792, 30631, 26158, 21685, 17724, 48587, 44098, 40665, 36688, 64495, 60006, 55549, 51572, 16900, 21389, 24854, 28831, 1056, 5545, 10034, 14011, 52812, 57285, 60766, 64727, 34920, 39393, 43898, 47859, 21125, 17164, 29079, 24606, 5281, 1320, 14259, 9786, 57037, 53060, 64991, 60502, 39145, 35168, 48123, 43634, 25350, 29327, 16404, 20893, 9506, 13483, 1584, 6073, 61262, 65223, 52316, 56789, 43370, 47331, 35448, 39921, 29575, 25102, 20629, 16668, 13731, 9258, 5809, 1848, 65487, 60998, 56541, 52564, 47595, 43106, 39673, 35696, 33800, 38273, 42778, 46739, 49708, 54181, 57662, 61623, 2112, 6601, 11090, 15067, 20068, 24557, 28022, 31999, 38025, 34048, 47003, 42514, 53933, 49956, 61887, 57398, 6337, 2376, 15315, 10842, 24293, 20332, 32247, 27774, 42250, 46211, 34328, 38801, 58158, 62119, 49212, 53685, 10562, 14539, 2640, 7129, 28518, 32495, 19572, 24061, 46475, 41986, 38553, 34576, 62383, 57894, 53437, 49460, 14787, 10314, 6865, 2904, 32743, 28270, 23797, 19836, 50700, 55173, 58654, 62615, 32808, 37281, 41786, 45747, 19012, 23501, 26966, 30943, 3168, 7657, 12146, 16123, 54925, 50948, 62879, 58390, 37033, 33056, 46011, 41522, 23237, 19276, 31191, 26718, 7393, 3432, 16371, 11898, 59150, 63111, 50204, 54677, 41258, 45219, 33336, 37809, 27462, 31439, 18516, 23005, 11618, 15595, 3696, 8185, 63375, 58886, 54429, 50452, 45483, 40994, 37561, 33584, 31687, 27214, 22741, 18780, 15843, 11370, 7921, 3960];
            typeof Int32Array < "u" && (cn = new Int32Array(cn)), dr("kermit", (n, t) => {
                let i = typeof t < "u" ? ~~t : 0;
                for (let g = 0; g < n.length; g++) i = 65535 & (cn[255 & (i ^ n[g])] ^ i >> 8);
                return i
            });
            let un = [0, 8801531, 9098509, 825846, 9692897, 1419802, 1651692, 10452759, 10584377, 2608578, 2839604, 11344079, 3303384, 11807523, 12104405, 4128302, 12930697, 4391538, 5217156, 13227903, 5679208, 13690003, 14450021, 5910942, 6606768, 14844747, 15604413, 6837830, 16197969, 7431594, 8256604, 16494759, 840169, 9084178, 8783076, 18463, 10434312, 1670131, 1434117, 9678590, 11358416, 2825259, 2590173, 10602790, 4109873, 12122826, 11821884, 3289031, 13213536, 5231515, 4409965, 12912278, 5929345, 14431610, 13675660, 5693559, 6823513, 15618722, 14863188, 6588335, 16513208, 8238147, 7417269, 16212302, 1680338, 10481449, 9664223, 1391140, 9061683, 788936, 36926, 8838341, 12067563, 4091408, 3340262, 11844381, 2868234, 11372785, 10555655, 2579964, 14478683, 5939616, 5650518, 13661357, 5180346, 13190977, 12967607, 4428364, 8219746, 16457881, 16234863, 7468436, 15633027, 6866552, 6578062, 14816117, 1405499, 9649856, 10463030, 1698765, 8819930, 55329, 803287, 9047340, 11858690, 3325945, 4072975, 12086004, 2561507, 10574104, 11387118, 2853909, 13647026, 5664841, 5958079, 14460228, 4446803, 12949160, 13176670, 5194661, 7454091, 16249200, 16476294, 8201341, 14834538, 6559633, 6852199, 15647388, 3360676, 11864927, 12161705, 4185682, 10527045, 2551230, 2782280, 11286707, 9619101, 1346150, 1577872, 10379115, 73852, 8875143, 9172337, 899466, 16124205, 7357910, 8182816, 16421083, 6680524, 14918455, 15678145, 6911546, 5736468, 13747439, 14507289, 5968354, 12873461, 4334094, 5159928, 13170435, 4167245, 12180150, 11879232, 3346363, 11301036, 2767959, 2532769, 10545498, 10360692, 1596303, 1360505, 9604738, 913813, 9157998, 8856728, 92259, 16439492, 8164415, 7343561, 16138546, 6897189, 15692510, 14936872, 6662099, 5986813, 14488838, 13733104, 5750795, 13156124, 5174247, 4352529, 12855018, 2810998, 11315341, 10498427, 2522496, 12124823, 4148844, 3397530, 11901793, 9135439, 862644, 110658, 8912057, 1606574, 10407765, 9590435, 1317464, 15706879, 6940164, 6651890, 14889737, 8145950, 16384229, 16161043, 7394792, 5123014, 13133629, 12910283, 4370992, 14535975, 5997020, 5707818, 13718737, 2504095, 10516836, 11329682, 2796649, 11916158, 3383173, 4130419, 12143240, 8893606, 129117, 876971, 9121104, 1331783, 9576124, 10389322, 1625009, 14908182, 6633453, 6925851, 15721184, 7380471, 16175372, 16402682, 8127489, 4389423, 12891860, 13119266, 5137369, 13704398, 5722165, 6015427, 14517560];
            typeof Int32Array < "u" && (un = new Int32Array(un)), dr("crc-24", (n, t) => {
                let i = typeof t < "u" ? ~~t : 11994318;
                for (let g = 0; g < n.length; g++) i = 16777215 & (un[255 & (i >> 16 ^ n[g])] ^ i << 8);
                return i
            });
            let dn = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117];
            typeof Int32Array < "u" && (dn = new Int32Array(dn));
            const Un = dr("crc-32", (n, t) => {
                let i = 0 === t ? 0 : -1 ^ ~~t;
                for (let g = 0; g < n.length; g++) i = dn[255 & (i ^ n[g])] ^ i >>> 8;
                return -1 ^ i
            });
            let ln = [0, 79764919, 159529838, 222504665, 319059676, 398814059, 445009330, 507990021, 638119352, 583659535, 797628118, 726387553, 890018660, 835552979, 1015980042, 944750013, 1276238704, 1221641927, 1167319070, 1095957929, 1595256236, 1540665371, 1452775106, 1381403509, 1780037320, 1859660671, 1671105958, 1733955601, 2031960084, 2111593891, 1889500026, 1952343757, 2552477408, 2632100695, 2443283854, 2506133561, 2334638140, 2414271883, 2191915858, 2254759653, 3190512472, 3135915759, 3081330742, 3009969537, 2905550212, 2850959411, 2762807018, 2691435357, 3560074640, 3505614887, 3719321342, 3648080713, 3342211916, 3287746299, 3467911202, 3396681109, 4063920168, 4143685023, 4223187782, 4286162673, 3779000052, 3858754371, 3904687514, 3967668269, 881225847, 809987520, 1023691545, 969234094, 662832811, 591600412, 771767749, 717299826, 311336399, 374308984, 453813921, 533576470, 25881363, 88864420, 134795389, 214552010, 2023205639, 2086057648, 1897238633, 1976864222, 1804852699, 1867694188, 1645340341, 1724971778, 1587496639, 1516133128, 1461550545, 1406951526, 1302016099, 1230646740, 1142491917, 1087903418, 2896545431, 2825181984, 2770861561, 2716262478, 3215044683, 3143675388, 3055782693, 3001194130, 2326604591, 2389456536, 2200899649, 2280525302, 2578013683, 2640855108, 2418763421, 2498394922, 3769900519, 3832873040, 3912640137, 3992402750, 4088425275, 4151408268, 4197601365, 4277358050, 3334271071, 3263032808, 3476998961, 3422541446, 3585640067, 3514407732, 3694837229, 3640369242, 1762451694, 1842216281, 1619975040, 1682949687, 2047383090, 2127137669, 1938468188, 2001449195, 1325665622, 1271206113, 1183200824, 1111960463, 1543535498, 1489069629, 1434599652, 1363369299, 622672798, 568075817, 748617968, 677256519, 907627842, 853037301, 1067152940, 995781531, 51762726, 131386257, 177728840, 240578815, 269590778, 349224269, 429104020, 491947555, 4046411278, 4126034873, 4172115296, 4234965207, 3794477266, 3874110821, 3953728444, 4016571915, 3609705398, 3555108353, 3735388376, 3664026991, 3290680682, 3236090077, 3449943556, 3378572211, 3174993278, 3120533705, 3032266256, 2961025959, 2923101090, 2868635157, 2813903052, 2742672763, 2604032198, 2683796849, 2461293480, 2524268063, 2284983834, 2364738477, 2175806836, 2238787779, 1569362073, 1498123566, 1409854455, 1355396672, 1317987909, 1246755826, 1192025387, 1137557660, 2072149281, 2135122070, 1912620623, 1992383480, 1753615357, 1816598090, 1627664531, 1707420964, 295390185, 358241886, 404320391, 483945776, 43990325, 106832002, 186451547, 266083308, 932423249, 861060070, 1041341759, 986742920, 613929101, 542559546, 756411363, 701822548, 3316196985, 3244833742, 3425377559, 3370778784, 3601682597, 3530312978, 3744426955, 3689838204, 3819031489, 3881883254, 3928223919, 4007849240, 4037393693, 4100235434, 4180117107, 4259748804, 2310601993, 2373574846, 2151335527, 2231098320, 2596047829, 2659030626, 2470359227, 2550115596, 2947551409, 2876312838, 2788305887, 2733848168, 3165939309, 3094707162, 3040238851, 2985771188];
            typeof Int32Array < "u" && (ln = new Int32Array(ln)), dr("crc-32-mpeg", (n, t) => {
                let i = typeof t < "u" ? ~~t : 4294967295;
                for (let g = 0; g < n.length; g++) i = ln[255 & (i >> 24 ^ n[g])] ^ i << 8;
                return i
            });
            let hn = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117];
            typeof Int32Array < "u" && (hn = new Int32Array(hn)), dr("jam", (n, t = -1) => {
                let i = 0 === t ? 0 : ~~t;
                for (let g = 0; g < n.length; g++) i = hn[255 & (i ^ n[g])] ^ i >>> 8;
                return i
            });
            const Ui = {
                mainnet: {
                    name: "mainnet",
                    chainId: 1,
                    networkId: 1,
                    defaultHardfork: "shanghai",
                    consensus: {
                        type: "pow",
                        algorithm: "ethash",
                        ethash: {}
                    },
                    comment: "The Ethereum main chain",
                    url: "https://ethstats.net/",
                    genesis: {
                        gasLimit: 5e3,
                        difficulty: 17179869184,
                        nonce: "0x0000000000000042",
                        extraData: "0x11bbe8db4e347b4e8c937c1c8370e4b5ed33adb3db69cbdb7a38e1e50b1b82fa"
                    },
                    hardforks: [{
                        name: "chainstart",
                        block: 0,
                        forkHash: "0xfc64ec04"
                    }, {
                        name: "homestead",
                        block: 115e4,
                        forkHash: "0x97c2c34c"
                    }, {
                        name: "dao",
                        block: 192e4,
                        forkHash: "0x91d1f948"
                    }, {
                        name: "tangerineWhistle",
                        block: 2463e3,
                        forkHash: "0x7a64da13"
                    }, {
                        name: "spuriousDragon",
                        block: 2675e3,
                        forkHash: "0x3edd5b10"
                    }, {
                        name: "byzantium",
                        block: 437e4,
                        forkHash: "0xa00bc324"
                    }, {
                        name: "constantinople",
                        block: 728e4,
                        forkHash: "0x668db0af"
                    }, {
                        name: "petersburg",
                        block: 728e4,
                        forkHash: "0x668db0af"
                    }, {
                        name: "istanbul",
                        block: 9069e3,
                        forkHash: "0x879d6e30"
                    }, {
                        name: "muirGlacier",
                        block: 92e5,
                        forkHash: "0xe029e991"
                    }, {
                        name: "berlin",
                        block: 12244e3,
                        forkHash: "0x0eb440f6"
                    }, {
                        name: "london",
                        block: 12965e3,
                        forkHash: "0xb715077d"
                    }, {
                        name: "arrowGlacier",
                        block: 13773e3,
                        forkHash: "0x20c327fc"
                    }, {
                        name: "grayGlacier",
                        block: 1505e4,
                        forkHash: "0xf0afd0e3"
                    }, {
                        name: "paris",
                        ttd: "58750000000000000000000",
                        block: 15537394,
                        forkHash: "0xf0afd0e3"
                    }, {
                        name: "mergeForkIdTransition",
                        block: null,
                        forkHash: null
                    }, {
                        name: "shanghai",
                        block: null,
                        timestamp: "1681338455",
                        forkHash: "0xdce96c2d"
                    }, {
                        name: "cancun",
                        block: null,
                        forkHash: null
                    }],
                    bootstrapNodes: [{
                        ip: "18.138.108.67",
                        port: 30303,
                        id: "d860a01f9722d78051619d1e2351aba3f43f943f6f00718d1b9baa4101932a1f5011f16bb2b1bb35db20d6fe28fa0bf09636d26a87d31de9ec6203eeedb1f666",
                        location: "ap-southeast-1-001",
                        comment: "bootnode-aws-ap-southeast-1-001"
                    }, {
                        ip: "3.209.45.79",
                        port: 30303,
                        id: "22a8232c3abc76a16ae9d6c3b164f98775fe226f0917b0ca871128a74a8e9630b458460865bab457221f1d448dd9791d24c4e5d88786180ac185df813a68d4de",
                        location: "us-east-1-001",
                        comment: "bootnode-aws-us-east-1-001"
                    }, {
                        ip: "65.108.70.101",
                        port: 30303,
                        id: "2b252ab6a1d0f971d9722cb839a42cb81db019ba44c08754628ab4a823487071b5695317c8ccd085219c3a03af063495b2f1da8d18218da2d6a82981b45e6ffc",
                        location: "eu-west-1-001",
                        comment: "bootnode-hetzner-hel"
                    }, {
                        ip: "157.90.35.166",
                        port: 30303,
                        id: "4aeb4ab6c14b23e2c4cfdce879c04b0748a20d8e9b59e25ded2a08143e265c6c25936e74cbc8e641e3312ca288673d91f2f93f8e277de3cfa444ecdaaf982052",
                        location: "eu-central-1-001",
                        comment: "bootnode-hetzner-fsn"
                    }],
                    dnsNetworks: ["enrtree://AKA3AM6LPBYEUDMVNU3BSVQJ5AD45Y7YPOHJLEF6W26QOE4VTUDPE@all.mainnet.ethdisco.net"]
                },
                goerli: {
                    name: "goerli",
                    chainId: 5,
                    networkId: 5,
                    defaultHardfork: "shanghai",
                    consensus: {
                        type: "poa",
                        algorithm: "clique",
                        clique: {
                            period: 15,
                            epoch: 3e4
                        }
                    },
                    comment: "Cross-client PoA test network",
                    url: "https://github.com/goerli/testnet",
                    genesis: {
                        timestamp: "0x5c51a607",
                        gasLimit: 10485760,
                        difficulty: 1,
                        nonce: "0x0000000000000000",
                        extraData: "0x22466c6578692069732061207468696e6722202d204166726900000000000000e0a2bd4258d2768837baa26a28fe71dc079f84c70000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
                    },
                    hardforks: [{
                        name: "chainstart",
                        block: 0,
                        forkHash: "0xa3f5ab08"
                    }, {
                        name: "homestead",
                        block: 0,
                        forkHash: "0xa3f5ab08"
                    }, {
                        name: "tangerineWhistle",
                        block: 0,
                        forkHash: "0xa3f5ab08"
                    }, {
                        name: "spuriousDragon",
                        block: 0,
                        forkHash: "0xa3f5ab08"
                    }, {
                        name: "byzantium",
                        block: 0,
                        forkHash: "0xa3f5ab08"
                    }, {
                        name: "constantinople",
                        block: 0,
                        forkHash: "0xa3f5ab08"
                    }, {
                        name: "petersburg",
                        block: 0,
                        forkHash: "0xa3f5ab08"
                    }, {
                        name: "istanbul",
                        block: 1561651,
                        forkHash: "0xc25efa5c"
                    }, {
                        name: "berlin",
                        block: 4460644,
                        forkHash: "0x757a1c47"
                    }, {
                        name: "london",
                        block: 5062605,
                        forkHash: "0xb8c6299d"
                    }, {
                        name: "paris",
                        ttd: "10790000",
                        block: 7382819,
                        forkHash: "0xb8c6299d"
                    }, {
                        name: "mergeForkIdTransition",
                        block: null,
                        forkHash: null
                    }, {
                        name: "shanghai",
                        block: null,
                        timestamp: "1678832736",
                        forkHash: "0xf9843abf"
                    }, {
                        name: "cancun",
                        block: null,
                        forkHash: null
                    }],
                    bootstrapNodes: [{
                        ip: "51.141.78.53",
                        port: 30303,
                        id: "011f758e6552d105183b1761c5e2dea0111bc20fd5f6422bc7f91e0fabbec9a6595caf6239b37feb773dddd3f87240d99d859431891e4a642cf2a0a9e6cbb98a",
                        location: "",
                        comment: "Upstream bootnode 1"
                    }, {
                        ip: "13.93.54.137",
                        port: 30303,
                        id: "176b9417f511d05b6b2cf3e34b756cf0a7096b3094572a8f6ef4cdcb9d1f9d00683bf0f83347eebdf3b81c3521c2332086d9592802230bf528eaf606a1d9677b",
                        location: "",
                        comment: "Upstream bootnode 2"
                    }, {
                        ip: "94.237.54.114",
                        port: 30313,
                        id: "46add44b9f13965f7b9875ac6b85f016f341012d84f975377573800a863526f4da19ae2c620ec73d11591fa9510e992ecc03ad0751f53cc02f7c7ed6d55c7291",
                        location: "",
                        comment: "Upstream bootnode 3"
                    }, {
                        ip: "18.218.250.66",
                        port: 30313,
                        id: "b5948a2d3e9d486c4d75bf32713221c2bd6cf86463302339299bd227dc2e276cd5a1c7ca4f43a0e9122fe9af884efed563bd2a1fd28661f3b5f5ad7bf1de5949",
                        location: "",
                        comment: "Upstream bootnode 4"
                    }, {
                        ip: "3.11.147.67",
                        port: 30303,
                        id: "a61215641fb8714a373c80edbfa0ea8878243193f57c96eeb44d0bc019ef295abd4e044fd619bfc4c59731a73fb79afe84e9ab6da0c743ceb479cbb6d263fa91",
                        location: "",
                        comment: "Ethereum Foundation bootnode"
                    }, {
                        ip: "51.15.116.226",
                        port: 30303,
                        id: "a869b02cec167211fb4815a82941db2e7ed2936fd90e78619c53eb17753fcf0207463e3419c264e2a1dd8786de0df7e68cf99571ab8aeb7c4e51367ef186b1dd",
                        location: "",
                        comment: "Goerli Initiative bootnode"
                    }, {
                        ip: "51.15.119.157",
                        port: 30303,
                        id: "807b37ee4816ecf407e9112224494b74dd5933625f655962d892f2f0f02d7fbbb3e2a94cf87a96609526f30c998fd71e93e2f53015c558ffc8b03eceaf30ee33",
                        location: "",
                        comment: "Goerli Initiative bootnode"
                    }, {
                        ip: "51.15.119.157",
                        port: 40303,
                        id: "a59e33ccd2b3e52d578f1fbd70c6f9babda2650f0760d6ff3b37742fdcdfdb3defba5d56d315b40c46b70198c7621e63ffa3f987389c7118634b0fefbbdfa7fd",
                        location: "",
                        comment: "Goerli Initiative bootnode"
                    }],
                    dnsNetworks: ["enrtree://AKA3AM6LPBYEUDMVNU3BSVQJ5AD45Y7YPOHJLEF6W26QOE4VTUDPE@all.goerli.ethdisco.net"]
                },
                sepolia: {
                    name: "sepolia",
                    chainId: 11155111,
                    networkId: 11155111,
                    defaultHardfork: "shanghai",
                    consensus: {
                        type: "pow",
                        algorithm: "ethash",
                        ethash: {}
                    },
                    comment: "PoW test network to replace Ropsten",
                    url: "https://github.com/ethereum/go-ethereum/pull/23730",
                    genesis: {
                        timestamp: "0x6159af19",
                        gasLimit: 3e7,
                        difficulty: 131072,
                        nonce: "0x0000000000000000",
                        extraData: "0x5365706f6c69612c20417468656e732c204174746963612c2047726565636521"
                    },
                    hardforks: [{
                        name: "chainstart",
                        block: 0,
                        forkHash: "0xfe3366e7"
                    }, {
                        name: "homestead",
                        block: 0,
                        forkHash: "0xfe3366e7"
                    }, {
                        name: "tangerineWhistle",
                        block: 0,
                        forkHash: "0xfe3366e7"
                    }, {
                        name: "spuriousDragon",
                        block: 0,
                        forkHash: "0xfe3366e7"
                    }, {
                        name: "byzantium",
                        block: 0,
                        forkHash: "0xfe3366e7"
                    }, {
                        name: "constantinople",
                        block: 0,
                        forkHash: "0xfe3366e7"
                    }, {
                        name: "petersburg",
                        block: 0,
                        forkHash: "0xfe3366e7"
                    }, {
                        name: "istanbul",
                        block: 0,
                        forkHash: "0xfe3366e7"
                    }, {
                        name: "muirGlacier",
                        block: 0,
                        forkHash: "0xfe3366e7"
                    }, {
                        name: "berlin",
                        block: 0,
                        forkHash: "0xfe3366e7"
                    }, {
                        name: "london",
                        block: 0,
                        forkHash: "0xfe3366e7"
                    }, {
                        name: "paris",
                        ttd: "17000000000000000",
                        block: 1450409,
                        forkHash: "0xfe3366e7"
                    }, {
                        name: "mergeForkIdTransition",
                        block: 1735371,
                        forkHash: "0xb96cbd13"
                    }, {
                        name: "shanghai",
                        block: null,
                        timestamp: "1677557088",
                        forkHash: "0xf7f9bc08"
                    }, {
                        name: "cancun",
                        block: null,
                        forkHash: null
                    }],
                    bootstrapNodes: [{
                        ip: "18.168.182.86",
                        port: 30303,
                        id: "9246d00bc8fd1742e5ad2428b80fc4dc45d786283e05ef6edbd9002cbc335d40998444732fbe921cb88e1d2c73d1b1de53bae6a2237996e9bfe14f871baf7066",
                        location: "",
                        comment: "geth"
                    }, {
                        ip: "52.14.151.177",
                        port: 30303,
                        id: "ec66ddcf1a974950bd4c782789a7e04f8aa7110a72569b6e65fcd51e937e74eed303b1ea734e4d19cfaec9fbff9b6ee65bf31dcb50ba79acce9dd63a6aca61c7",
                        location: "",
                        comment: "besu"
                    }, {
                        ip: "165.22.196.173",
                        port: 30303,
                        id: "ce970ad2e9daa9e14593de84a8b49da3d54ccfdf83cbc4fe519cb8b36b5918ed4eab087dedd4a62479b8d50756b492d5f762367c8d20329a7854ec01547568a6",
                        location: "",
                        comment: "EF"
                    }, {
                        ip: "65.108.95.67",
                        port: 30303,
                        id: "075503b13ed736244896efcde2a992ec0b451357d46cb7a8132c0384721742597fc8f0d91bbb40bb52e7d6e66728d36a1fda09176294e4a30cfac55dcce26bc6",
                        location: "",
                        comment: "lodestar"
                    }],
                    dnsNetworks: ["enrtree://AKA3AM6LPBYEUDMVNU3BSVQJ5AD45Y7YPOHJLEF6W26QOE4VTUDPE@all.sepolia.ethdisco.net"]
                },
                holesky: {
                    name: "holesky",
                    chainId: 17e3,
                    networkId: 17e3,
                    defaultHardfork: "paris",
                    consensus: {
                        type: "pos",
                        algorithm: "casper"
                    },
                    comment: "PoS test network to replace Goerli",
                    url: "https://github.com/eth-clients/holesky/",
                    genesis: {
                        baseFeePerGas: "0x3B9ACA00",
                        difficulty: "0x01",
                        extraData: "0x",
                        gasLimit: "0x17D7840",
                        nonce: "0x0000000000001234",
                        timestamp: "0x65156994"
                    },
                    hardforks: [{
                        name: "chainstart",
                        block: 0,
                        forkHash: "0xc61a6098"
                    }, {
                        name: "homestead",
                        block: 0,
                        forkHash: "0xc61a6098"
                    }, {
                        name: "tangerineWhistle",
                        block: 0,
                        forkHash: "0xc61a6098"
                    }, {
                        name: "spuriousDragon",
                        block: 0,
                        forkHash: "0xc61a6098"
                    }, {
                        name: "byzantium",
                        block: 0,
                        forkHash: "0xc61a6098"
                    }, {
                        name: "constantinople",
                        block: 0,
                        forkHash: "0xc61a6098"
                    }, {
                        name: "petersburg",
                        block: 0,
                        forkHash: "0xc61a6098"
                    }, {
                        name: "istanbul",
                        block: 0,
                        forkHash: "0xc61a6098"
                    }, {
                        name: "muirGlacier",
                        block: 0,
                        forkHash: "0xc61a6098"
                    }, {
                        name: "berlin",
                        block: 0,
                        forkHash: "0xc61a6098"
                    }, {
                        name: "london",
                        block: 0,
                        forkHash: "0xc61a6098"
                    }, {
                        name: "paris",
                        ttd: "0",
                        block: 0,
                        forkHash: "0xc61a6098"
                    }, {
                        name: "mergeForkIdTransition",
                        block: 0,
                        forkHash: "0xc61a6098"
                    }, {
                        name: "shanghai",
                        block: null,
                        timestamp: "1696000704",
                        forkHash: "0xfd4f016b"
                    }, {
                        name: "cancun",
                        block: null,
                        forkHash: null
                    }],
                    bootstrapNodes: [{
                        ip: "146.190.13.128",
                        port: 30303,
                        id: "ac906289e4b7f12df423d654c5a962b6ebe5b3a74cc9e06292a85221f9a64a6f1cfdd6b714ed6dacef51578f92b34c60ee91e9ede9c7f8fadc4d347326d95e2b",
                        location: "",
                        comment: "bootnode 1"
                    }, {
                        ip: "178.128.136.233",
                        port: 30303,
                        id: "a3435a0155a3e837c02f5e7f5662a2f1fbc25b48e4dc232016e1c51b544cb5b4510ef633ea3278c0e970fa8ad8141e2d4d0f9f95456c537ff05fdf9b31c15072",
                        location: "",
                        comment: "bootnode 2"
                    }],
                    dnsNetworks: ["enrtree://AKA3AM6LPBYEUDMVNU3BSVQJ5AD45Y7YPOHJLEF6W26QOE4VTUDPE@all.holesky.ethdisco.net"]
                }
            };
            var Tr = function(n) {
                return n[n.Mainnet = 1] = "Mainnet", n[n.Goerli = 5] = "Goerli", n[n.Sepolia = 11155111] = "Sepolia", n[n.Holesky = 17e3] = "Holesky", n
            }(Tr || {});
            we("0xd7f8974fb5ac78d9ac099b9ad5018bedc2ce0a72dad1827a1709da30580f0544"), we("0x5d6cded585e73c4e322c30c2f782a336316f17dd85a4863b9d838d2d4b8b3008"), we("0x5eb6e371a698b8d68f665192350ffcecbbbf322916f4b51bd79bb6887da3f494"), we("0x69d8c9d72f6fa4ad42d4702b433707212f90db395eb54dc20bc85de253788783");
            var pt = function(n) {
                    return n.Chainstart = "chainstart", n.Homestead = "homestead", n.Dao = "dao", n.TangerineWhistle = "tangerineWhistle", n.SpuriousDragon = "spuriousDragon", n.Byzantium = "byzantium", n.Constantinople = "constantinople", n.Petersburg = "petersburg", n.Istanbul = "istanbul", n.MuirGlacier = "muirGlacier", n.Berlin = "berlin", n.London = "london", n.ArrowGlacier = "arrowGlacier", n.GrayGlacier = "grayGlacier", n.MergeForkIdTransition = "mergeForkIdTransition", n.Paris = "paris", n.Shanghai = "shanghai", n.Cancun = "cancun", n
                }(pt || {}),
                lr = function(n) {
                    return n.PolygonMainnet = "polygon-mainnet", n.PolygonMumbai = "polygon-mumbai", n.ArbitrumOne = "arbitrum-one", n.xDaiChain = "x-dai-chain", n.OptimisticKovan = "optimistic-kovan", n.OptimisticEthereum = "optimistic-ethereum", n
                }(lr || {}),
                Zt = function(n) {
                    return n.Draft = "draft", n.Review = "review", n.Final = "final", n
                }(Zt || {});
            const pr = {
                1153: {
                    comment: "Transient storage opcodes",
                    url: "https://eips.ethereum.org/EIPS/eip-1153",
                    status: Zt.Review,
                    minimumHardfork: pt.Chainstart,
                    requiredEIPs: [],
                    gasPrices: {
                        tstore: {
                            v: 100,
                            d: "Base fee of the TSTORE opcode"
                        },
                        tload: {
                            v: 100,
                            d: "Base fee of the TLOAD opcode"
                        }
                    }
                },
                1559: {
                    comment: "Fee market change for ETH 1.0 chain",
                    url: "https://eips.ethereum.org/EIPS/eip-1559",
                    status: Zt.Final,
                    minimumHardfork: pt.Berlin,
                    requiredEIPs: [2930],
                    gasConfig: {
                        baseFeeMaxChangeDenominator: {
                            v: 8,
                            d: "Maximum base fee change denominator"
                        },
                        elasticityMultiplier: {
                            v: 2,
                            d: "Maximum block gas target elasticity"
                        },
                        initialBaseFee: {
                            v: 1e9,
                            d: "Initial base fee on first EIP1559 block"
                        }
                    }
                },
                2315: {
                    comment: "Simple subroutines for the EVM",
                    url: "https://eips.ethereum.org/EIPS/eip-2315",
                    status: Zt.Draft,
                    minimumHardfork: pt.Istanbul,
                    requiredEIPs: [],
                    gasPrices: {
                        beginsub: {
                            v: 2,
                            d: "Base fee of the BEGINSUB opcode"
                        },
                        returnsub: {
                            v: 5,
                            d: "Base fee of the RETURNSUB opcode"
                        },
                        jumpsub: {
                            v: 10,
                            d: "Base fee of the JUMPSUB opcode"
                        }
                    }
                },
                2565: {
                    comment: "ModExp gas cost",
                    url: "https://eips.ethereum.org/EIPS/eip-2565",
                    status: Zt.Final,
                    minimumHardfork: pt.Byzantium,
                    requiredEIPs: [],
                    gasPrices: {
                        modexpGquaddivisor: {
                            v: 3,
                            d: "Gquaddivisor from modexp precompile for gas calculation"
                        }
                    }
                },
                2718: {
                    comment: "Typed Transaction Envelope",
                    url: "https://eips.ethereum.org/EIPS/eip-2718",
                    status: Zt.Final,
                    minimumHardfork: pt.Chainstart,
                    requiredEIPs: []
                },
                2929: {
                    comment: "Gas cost increases for state access opcodes",
                    url: "https://eips.ethereum.org/EIPS/eip-2929",
                    status: Zt.Final,
                    minimumHardfork: pt.Chainstart,
                    requiredEIPs: [],
                    gasPrices: {
                        coldsload: {
                            v: 2100,
                            d: "Gas cost of the first read of storage from a given location (per transaction)"
                        },
                        coldaccountaccess: {
                            v: 2600,
                            d: "Gas cost of the first read of a given address (per transaction)"
                        },
                        warmstorageread: {
                            v: 100,
                            d: "Gas cost of reading storage locations which have already loaded 'cold'"
                        },
                        sstoreCleanGasEIP2200: {
                            v: 2900,
                            d: "Once per SSTORE operation from clean non-zero to something else"
                        },
                        sstoreNoopGasEIP2200: {
                            v: 100,
                            d: "Once per SSTORE operation if the value doesn't change"
                        },
                        sstoreDirtyGasEIP2200: {
                            v: 100,
                            d: "Once per SSTORE operation if a dirty value is changed"
                        },
                        sstoreInitRefundEIP2200: {
                            v: 19900,
                            d: "Once per SSTORE operation for resetting to the original zero value"
                        },
                        sstoreCleanRefundEIP2200: {
                            v: 4900,
                            d: "Once per SSTORE operation for resetting to the original non-zero value"
                        },
                        call: {
                            v: 0,
                            d: "Base fee of the CALL opcode"
                        },
                        callcode: {
                            v: 0,
                            d: "Base fee of the CALLCODE opcode"
                        },
                        delegatecall: {
                            v: 0,
                            d: "Base fee of the DELEGATECALL opcode"
                        },
                        staticcall: {
                            v: 0,
                            d: "Base fee of the STATICCALL opcode"
                        },
                        balance: {
                            v: 0,
                            d: "Base fee of the BALANCE opcode"
                        },
                        extcodesize: {
                            v: 0,
                            d: "Base fee of the EXTCODESIZE opcode"
                        },
                        extcodecopy: {
                            v: 0,
                            d: "Base fee of the EXTCODECOPY opcode"
                        },
                        extcodehash: {
                            v: 0,
                            d: "Base fee of the EXTCODEHASH opcode"
                        },
                        sload: {
                            v: 0,
                            d: "Base fee of the SLOAD opcode"
                        },
                        sstore: {
                            v: 0,
                            d: "Base fee of the SSTORE opcode"
                        }
                    }
                },
                2930: {
                    comment: "Optional access lists",
                    url: "https://eips.ethereum.org/EIPS/eip-2930",
                    status: Zt.Final,
                    minimumHardfork: pt.Istanbul,
                    requiredEIPs: [2718, 2929],
                    gasPrices: {
                        accessListStorageKeyCost: {
                            v: 1900,
                            d: "Gas cost per storage key in an Access List transaction"
                        },
                        accessListAddressCost: {
                            v: 2400,
                            d: "Gas cost per storage key in an Access List transaction"
                        }
                    }
                },
                3074: {
                    comment: "AUTH and AUTHCALL opcodes",
                    url: "https://eips.ethereum.org/EIPS/eip-3074",
                    status: Zt.Review,
                    minimumHardfork: pt.London,
                    requiredEIPs: [],
                    gasPrices: {
                        auth: {
                            v: 3100,
                            d: "Gas cost of the AUTH opcode"
                        },
                        authcall: {
                            v: 0,
                            d: "Gas cost of the AUTHCALL opcode"
                        },
                        authcallValueTransfer: {
                            v: 6700,
                            d: "Paid for CALL when the value transfer is non-zero"
                        }
                    }
                },
                3198: {
                    comment: "BASEFEE opcode",
                    url: "https://eips.ethereum.org/EIPS/eip-3198",
                    status: Zt.Final,
                    minimumHardfork: pt.London,
                    requiredEIPs: [],
                    gasPrices: {
                        basefee: {
                            v: 2,
                            d: "Gas cost of the BASEFEE opcode"
                        }
                    }
                },
                3529: {
                    comment: "Reduction in refunds",
                    url: "https://eips.ethereum.org/EIPS/eip-3529",
                    status: Zt.Final,
                    minimumHardfork: pt.Berlin,
                    requiredEIPs: [2929],
                    gasConfig: {
                        maxRefundQuotient: {
                            v: 5,
                            d: "Maximum refund quotient; max tx refund is min(tx.gasUsed/maxRefundQuotient, tx.gasRefund)"
                        }
                    },
                    gasPrices: {
                        selfdestructRefund: {
                            v: 0,
                            d: "Refunded following a selfdestruct operation"
                        },
                        sstoreClearRefundEIP2200: {
                            v: 4800,
                            d: "Once per SSTORE operation for clearing an originally existing storage slot"
                        }
                    }
                },
                3540: {
                    comment: "EVM Object Format (EOF) v1",
                    url: "https://eips.ethereum.org/EIPS/eip-3540",
                    status: Zt.Review,
                    minimumHardfork: pt.London,
                    requiredEIPs: [3541]
                },
                3541: {
                    comment: "Reject new contracts starting with the 0xEF byte",
                    url: "https://eips.ethereum.org/EIPS/eip-3541",
                    status: Zt.Final,
                    minimumHardfork: pt.Berlin,
                    requiredEIPs: []
                },
                3554: {
                    comment: "Difficulty Bomb Delay to December 1st 2021",
                    url: "https://eips.ethereum.org/EIPS/eip-3554",
                    status: Zt.Final,
                    minimumHardfork: pt.MuirGlacier,
                    requiredEIPs: [],
                    pow: {
                        difficultyBombDelay: {
                            v: 95e5,
                            d: "the amount of blocks to delay the difficulty bomb with"
                        }
                    }
                },
                3607: {
                    comment: "Reject transactions from senders with deployed code",
                    url: "https://eips.ethereum.org/EIPS/eip-3607",
                    status: Zt.Final,
                    minimumHardfork: pt.Chainstart,
                    requiredEIPs: []
                },
                3651: {
                    comment: "Warm COINBASE",
                    url: "https://eips.ethereum.org/EIPS/eip-3651",
                    status: Zt.Review,
                    minimumHardfork: pt.London,
                    requiredEIPs: [2929]
                },
                3670: {
                    comment: "EOF - Code Validation",
                    url: "https://eips.ethereum.org/EIPS/eip-3670",
                    status: "Review",
                    minimumHardfork: pt.London,
                    requiredEIPs: [3540],
                    gasConfig: {},
                    gasPrices: {},
                    vm: {},
                    pow: {}
                },
                3675: {
                    comment: "Upgrade consensus to Proof-of-Stake",
                    url: "https://eips.ethereum.org/EIPS/eip-3675",
                    status: Zt.Final,
                    minimumHardfork: pt.London,
                    requiredEIPs: []
                },
                3855: {
                    comment: "PUSH0 instruction",
                    url: "https://eips.ethereum.org/EIPS/eip-3855",
                    status: Zt.Review,
                    minimumHardfork: pt.Chainstart,
                    requiredEIPs: [],
                    gasPrices: {
                        push0: {
                            v: 2,
                            d: "Base fee of the PUSH0 opcode"
                        }
                    }
                },
                3860: {
                    comment: "Limit and meter initcode",
                    url: "https://eips.ethereum.org/EIPS/eip-3860",
                    status: Zt.Review,
                    minimumHardfork: pt.SpuriousDragon,
                    requiredEIPs: [],
                    gasPrices: {
                        initCodeWordCost: {
                            v: 2,
                            d: "Gas to pay for each word (32 bytes) of initcode when creating a contract"
                        }
                    },
                    vm: {
                        maxInitCodeSize: {
                            v: 49152,
                            d: "Maximum length of initialization code when creating a contract"
                        }
                    }
                },
                4345: {
                    comment: "Difficulty Bomb Delay to June 2022",
                    url: "https://eips.ethereum.org/EIPS/eip-4345",
                    status: Zt.Final,
                    minimumHardfork: pt.London,
                    requiredEIPs: [],
                    pow: {
                        difficultyBombDelay: {
                            v: 107e5,
                            d: "the amount of blocks to delay the difficulty bomb with"
                        }
                    }
                },
                4399: {
                    comment: "Supplant DIFFICULTY opcode with PREVRANDAO",
                    url: "https://eips.ethereum.org/EIPS/eip-4399",
                    status: Zt.Review,
                    minimumHardfork: pt.London,
                    requiredEIPs: [],
                    gasPrices: {
                        prevrandao: {
                            v: 2,
                            d: "Base fee of the PREVRANDAO opcode (previously DIFFICULTY)"
                        }
                    }
                },
                4788: {
                    comment: "Beacon block root in the EVM",
                    url: "https://eips.ethereum.org/EIPS/eip-4788",
                    status: Zt.Draft,
                    minimumHardfork: pt.Cancun,
                    requiredEIPs: [],
                    gasPrices: {},
                    vm: {
                        historicalRootsLength: {
                            v: 8191,
                            d: "The modulo parameter of the beaconroot ring buffer in the beaconroot statefull precompile"
                        }
                    }
                },
                4844: {
                    comment: "Shard Blob Transactions",
                    url: "https://eips.ethereum.org/EIPS/eip-4844",
                    status: Zt.Draft,
                    minimumHardfork: pt.Paris,
                    requiredEIPs: [1559, 2718, 2930, 4895],
                    gasConfig: {
                        blobGasPerBlob: {
                            v: 131072,
                            d: "The base fee for blob gas per blob"
                        },
                        targetBlobGasPerBlock: {
                            v: 393216,
                            d: "The target blob gas consumed per block"
                        },
                        maxblobGasPerBlock: {
                            v: 786432,
                            d: "The max blob gas allowable per block"
                        },
                        blobGasPriceUpdateFraction: {
                            v: 3338477,
                            d: "The denominator used in the exponential when calculating a blob gas price"
                        }
                    },
                    gasPrices: {
                        simpleGasPerBlob: {
                            v: 12e3,
                            d: "The basic gas fee for each blob"
                        },
                        minBlobGasPrice: {
                            v: 1,
                            d: "The minimum fee per blob gas"
                        },
                        kzgPointEvaluationGasPrecompilePrice: {
                            v: 5e4,
                            d: "The fee associated with the point evaluation precompile"
                        },
                        blobhash: {
                            v: 3,
                            d: "Base fee of the BLOBHASH opcode"
                        }
                    },
                    sharding: {
                        blobCommitmentVersionKzg: {
                            v: 1,
                            d: "The number indicated a versioned hash is a KZG commitment"
                        },
                        fieldElementsPerBlob: {
                            v: 4096,
                            d: "The number of field elements allowed per blob"
                        }
                    }
                },
                4895: {
                    comment: "Beacon chain push withdrawals as operations",
                    url: "https://eips.ethereum.org/EIPS/eip-4895",
                    status: Zt.Review,
                    minimumHardfork: pt.Paris,
                    requiredEIPs: []
                },
                5133: {
                    comment: "Delaying Difficulty Bomb to mid-September 2022",
                    url: "https://eips.ethereum.org/EIPS/eip-5133",
                    status: Zt.Draft,
                    minimumHardfork: pt.GrayGlacier,
                    requiredEIPs: [],
                    pow: {
                        difficultyBombDelay: {
                            v: 114e5,
                            d: "the amount of blocks to delay the difficulty bomb with"
                        }
                    }
                },
                5656: {
                    comment: "MCOPY - Memory copying instruction",
                    url: "https://eips.ethereum.org/EIPS/eip-5656",
                    status: Zt.Draft,
                    minimumHardfork: pt.Shanghai,
                    requiredEIPs: [],
                    gasPrices: {
                        mcopy: {
                            v: 3,
                            d: "Base fee of the MCOPY opcode"
                        }
                    }
                },
                6780: {
                    comment: "SELFDESTRUCT only in same transaction",
                    url: "https://eips.ethereum.org/EIPS/eip-6780",
                    status: Zt.Draft,
                    minimumHardfork: pt.London,
                    requiredEIPs: []
                },
                7516: {
                    comment: "BLOBBASEFEE opcode",
                    url: "https://eips.ethereum.org/EIPS/eip-7516",
                    status: Zt.Draft,
                    minimumHardfork: pt.Paris,
                    requiredEIPs: [4844],
                    gasPrices: {
                        blobbasefee: {
                            v: 2,
                            d: "Gas cost of the BLOBBASEFEE opcode"
                        }
                    }
                }
            };
            var rr = function(n) {
                return n.Draft = "draft", n.Review = "review", n.Final = "final", n
            }(rr || {});
            const Gi = {
                chainstart: {
                    name: "chainstart",
                    comment: "Start of the Ethereum main chain",
                    url: "",
                    status: rr.Final,
                    gasConfig: {
                        minGasLimit: {
                            v: 5e3,
                            d: "Minimum the gas limit may ever be"
                        },
                        gasLimitBoundDivisor: {
                            v: 1024,
                            d: "The bound divisor of the gas limit, used in update calculations"
                        },
                        maxRefundQuotient: {
                            v: 2,
                            d: "Maximum refund quotient; max tx refund is min(tx.gasUsed/maxRefundQuotient, tx.gasRefund)"
                        }
                    },
                    gasPrices: {
                        base: {
                            v: 2,
                            d: "Gas base cost, used e.g. for ChainID opcode (Istanbul)"
                        },
                        exp: {
                            v: 10,
                            d: "Base fee of the EXP opcode"
                        },
                        expByte: {
                            v: 10,
                            d: "Times ceil(log256(exponent)) for the EXP instruction"
                        },
                        keccak256: {
                            v: 30,
                            d: "Base fee of the SHA3 opcode"
                        },
                        keccak256Word: {
                            v: 6,
                            d: "Once per word of the SHA3 operation's data"
                        },
                        sload: {
                            v: 50,
                            d: "Base fee of the SLOAD opcode"
                        },
                        sstoreSet: {
                            v: 2e4,
                            d: "Once per SSTORE operation if the zeroness changes from zero"
                        },
                        sstoreReset: {
                            v: 5e3,
                            d: "Once per SSTORE operation if the zeroness does not change from zero"
                        },
                        sstoreRefund: {
                            v: 15e3,
                            d: "Once per SSTORE operation if the zeroness changes to zero"
                        },
                        jumpdest: {
                            v: 1,
                            d: "Base fee of the JUMPDEST opcode"
                        },
                        log: {
                            v: 375,
                            d: "Base fee of the LOG opcode"
                        },
                        logData: {
                            v: 8,
                            d: "Per byte in a LOG* operation's data"
                        },
                        logTopic: {
                            v: 375,
                            d: "Multiplied by the * of the LOG*, per LOG transaction. e.g. LOG0 incurs 0 * c_txLogTopicGas, LOG4 incurs 4 * c_txLogTopicGas"
                        },
                        create: {
                            v: 32e3,
                            d: "Base fee of the CREATE opcode"
                        },
                        call: {
                            v: 40,
                            d: "Base fee of the CALL opcode"
                        },
                        callStipend: {
                            v: 2300,
                            d: "Free gas given at beginning of call"
                        },
                        callValueTransfer: {
                            v: 9e3,
                            d: "Paid for CALL when the value transfor is non-zero"
                        },
                        callNewAccount: {
                            v: 25e3,
                            d: "Paid for CALL when the destination address didn't exist prior"
                        },
                        selfdestructRefund: {
                            v: 24e3,
                            d: "Refunded following a selfdestruct operation"
                        },
                        memory: {
                            v: 3,
                            d: "Times the address of the (highest referenced byte in memory + 1). NOTE: referencing happens on read, write and in instructions such as RETURN and CALL"
                        },
                        quadCoeffDiv: {
                            v: 512,
                            d: "Divisor for the quadratic particle of the memory cost equation"
                        },
                        createData: {
                            v: 200,
                            d: ""
                        },
                        tx: {
                            v: 21e3,
                            d: "Per transaction. NOTE: Not payable on data of calls between transactions"
                        },
                        txCreation: {
                            v: 32e3,
                            d: "The cost of creating a contract via tx"
                        },
                        txDataZero: {
                            v: 4,
                            d: "Per byte of data attached to a transaction that equals zero. NOTE: Not payable on data of calls between transactions"
                        },
                        txDataNonZero: {
                            v: 68,
                            d: "Per byte of data attached to a transaction that is not equal to zero. NOTE: Not payable on data of calls between transactions"
                        },
                        copy: {
                            v: 3,
                            d: "Multiplied by the number of 32-byte words that are copied (round up) for any *COPY operation and added"
                        },
                        ecRecover: {
                            v: 3e3,
                            d: ""
                        },
                        sha256: {
                            v: 60,
                            d: ""
                        },
                        sha256Word: {
                            v: 12,
                            d: ""
                        },
                        ripemd160: {
                            v: 600,
                            d: ""
                        },
                        ripemd160Word: {
                            v: 120,
                            d: ""
                        },
                        identity: {
                            v: 15,
                            d: ""
                        },
                        identityWord: {
                            v: 3,
                            d: ""
                        },
                        stop: {
                            v: 0,
                            d: "Base fee of the STOP opcode"
                        },
                        add: {
                            v: 3,
                            d: "Base fee of the ADD opcode"
                        },
                        mul: {
                            v: 5,
                            d: "Base fee of the MUL opcode"
                        },
                        sub: {
                            v: 3,
                            d: "Base fee of the SUB opcode"
                        },
                        div: {
                            v: 5,
                            d: "Base fee of the DIV opcode"
                        },
                        sdiv: {
                            v: 5,
                            d: "Base fee of the SDIV opcode"
                        },
                        mod: {
                            v: 5,
                            d: "Base fee of the MOD opcode"
                        },
                        smod: {
                            v: 5,
                            d: "Base fee of the SMOD opcode"
                        },
                        addmod: {
                            v: 8,
                            d: "Base fee of the ADDMOD opcode"
                        },
                        mulmod: {
                            v: 8,
                            d: "Base fee of the MULMOD opcode"
                        },
                        signextend: {
                            v: 5,
                            d: "Base fee of the SIGNEXTEND opcode"
                        },
                        lt: {
                            v: 3,
                            d: "Base fee of the LT opcode"
                        },
                        gt: {
                            v: 3,
                            d: "Base fee of the GT opcode"
                        },
                        slt: {
                            v: 3,
                            d: "Base fee of the SLT opcode"
                        },
                        sgt: {
                            v: 3,
                            d: "Base fee of the SGT opcode"
                        },
                        eq: {
                            v: 3,
                            d: "Base fee of the EQ opcode"
                        },
                        iszero: {
                            v: 3,
                            d: "Base fee of the ISZERO opcode"
                        },
                        and: {
                            v: 3,
                            d: "Base fee of the AND opcode"
                        },
                        or: {
                            v: 3,
                            d: "Base fee of the OR opcode"
                        },
                        xor: {
                            v: 3,
                            d: "Base fee of the XOR opcode"
                        },
                        not: {
                            v: 3,
                            d: "Base fee of the NOT opcode"
                        },
                        byte: {
                            v: 3,
                            d: "Base fee of the BYTE opcode"
                        },
                        address: {
                            v: 2,
                            d: "Base fee of the ADDRESS opcode"
                        },
                        balance: {
                            v: 20,
                            d: "Base fee of the BALANCE opcode"
                        },
                        origin: {
                            v: 2,
                            d: "Base fee of the ORIGIN opcode"
                        },
                        caller: {
                            v: 2,
                            d: "Base fee of the CALLER opcode"
                        },
                        callvalue: {
                            v: 2,
                            d: "Base fee of the CALLVALUE opcode"
                        },
                        calldataload: {
                            v: 3,
                            d: "Base fee of the CALLDATALOAD opcode"
                        },
                        calldatasize: {
                            v: 2,
                            d: "Base fee of the CALLDATASIZE opcode"
                        },
                        calldatacopy: {
                            v: 3,
                            d: "Base fee of the CALLDATACOPY opcode"
                        },
                        codesize: {
                            v: 2,
                            d: "Base fee of the CODESIZE opcode"
                        },
                        codecopy: {
                            v: 3,
                            d: "Base fee of the CODECOPY opcode"
                        },
                        gasprice: {
                            v: 2,
                            d: "Base fee of the GASPRICE opcode"
                        },
                        extcodesize: {
                            v: 20,
                            d: "Base fee of the EXTCODESIZE opcode"
                        },
                        extcodecopy: {
                            v: 20,
                            d: "Base fee of the EXTCODECOPY opcode"
                        },
                        blockhash: {
                            v: 20,
                            d: "Base fee of the BLOCKHASH opcode"
                        },
                        coinbase: {
                            v: 2,
                            d: "Base fee of the COINBASE opcode"
                        },
                        timestamp: {
                            v: 2,
                            d: "Base fee of the TIMESTAMP opcode"
                        },
                        number: {
                            v: 2,
                            d: "Base fee of the NUMBER opcode"
                        },
                        difficulty: {
                            v: 2,
                            d: "Base fee of the DIFFICULTY opcode"
                        },
                        gaslimit: {
                            v: 2,
                            d: "Base fee of the GASLIMIT opcode"
                        },
                        pop: {
                            v: 2,
                            d: "Base fee of the POP opcode"
                        },
                        mload: {
                            v: 3,
                            d: "Base fee of the MLOAD opcode"
                        },
                        mstore: {
                            v: 3,
                            d: "Base fee of the MSTORE opcode"
                        },
                        mstore8: {
                            v: 3,
                            d: "Base fee of the MSTORE8 opcode"
                        },
                        sstore: {
                            v: 0,
                            d: "Base fee of the SSTORE opcode"
                        },
                        jump: {
                            v: 8,
                            d: "Base fee of the JUMP opcode"
                        },
                        jumpi: {
                            v: 10,
                            d: "Base fee of the JUMPI opcode"
                        },
                        pc: {
                            v: 2,
                            d: "Base fee of the PC opcode"
                        },
                        msize: {
                            v: 2,
                            d: "Base fee of the MSIZE opcode"
                        },
                        gas: {
                            v: 2,
                            d: "Base fee of the GAS opcode"
                        },
                        push: {
                            v: 3,
                            d: "Base fee of the PUSH opcode"
                        },
                        dup: {
                            v: 3,
                            d: "Base fee of the DUP opcode"
                        },
                        swap: {
                            v: 3,
                            d: "Base fee of the SWAP opcode"
                        },
                        callcode: {
                            v: 40,
                            d: "Base fee of the CALLCODE opcode"
                        },
                        return: {
                            v: 0,
                            d: "Base fee of the RETURN opcode"
                        },
                        invalid: {
                            v: 0,
                            d: "Base fee of the INVALID opcode"
                        },
                        selfdestruct: {
                            v: 0,
                            d: "Base fee of the SELFDESTRUCT opcode"
                        }
                    },
                    vm: {
                        stackLimit: {
                            v: 1024,
                            d: "Maximum size of VM stack allowed"
                        },
                        callCreateDepth: {
                            v: 1024,
                            d: "Maximum depth of call/create stack"
                        },
                        maxExtraDataSize: {
                            v: 32,
                            d: "Maximum size extra data may be after Genesis"
                        }
                    },
                    pow: {
                        minimumDifficulty: {
                            v: 131072,
                            d: "The minimum that the difficulty may ever be"
                        },
                        difficultyBoundDivisor: {
                            v: 2048,
                            d: "The bound divisor of the difficulty, used in the update calculations"
                        },
                        durationLimit: {
                            v: 13,
                            d: "The decision boundary on the blocktime duration used to determine whether difficulty should go up or not"
                        },
                        epochDuration: {
                            v: 3e4,
                            d: "Duration between proof-of-work epochs"
                        },
                        timebombPeriod: {
                            v: 1e5,
                            d: "Exponential difficulty timebomb period"
                        },
                        minerReward: {
                            v: BigInt("5000000000000000000"),
                            d: "the amount a miner get rewarded for mining a block"
                        },
                        difficultyBombDelay: {
                            v: 0,
                            d: "the amount of blocks to delay the difficulty bomb with"
                        }
                    }
                },
                homestead: {
                    name: "homestead",
                    comment: "Homestead hardfork with protocol and network changes",
                    url: "https://eips.ethereum.org/EIPS/eip-606",
                    status: rr.Final,
                    gasPrices: {
                        delegatecall: {
                            v: 40,
                            d: "Base fee of the DELEGATECALL opcode"
                        }
                    }
                },
                dao: {
                    name: "dao",
                    comment: "DAO rescue hardfork",
                    url: "https://eips.ethereum.org/EIPS/eip-779",
                    status: rr.Final
                },
                tangerineWhistle: {
                    name: "tangerineWhistle",
                    comment: "Hardfork with gas cost changes for IO-heavy operations",
                    url: "https://eips.ethereum.org/EIPS/eip-608",
                    status: rr.Final,
                    gasPrices: {
                        sload: {
                            v: 200,
                            d: "Once per SLOAD operation"
                        },
                        call: {
                            v: 700,
                            d: "Once per CALL operation & message call transaction"
                        },
                        extcodesize: {
                            v: 700,
                            d: "Base fee of the EXTCODESIZE opcode"
                        },
                        extcodecopy: {
                            v: 700,
                            d: "Base fee of the EXTCODECOPY opcode"
                        },
                        balance: {
                            v: 400,
                            d: "Base fee of the BALANCE opcode"
                        },
                        delegatecall: {
                            v: 700,
                            d: "Base fee of the DELEGATECALL opcode"
                        },
                        callcode: {
                            v: 700,
                            d: "Base fee of the CALLCODE opcode"
                        },
                        selfdestruct: {
                            v: 5e3,
                            d: "Base fee of the SELFDESTRUCT opcode"
                        }
                    }
                },
                spuriousDragon: {
                    name: "spuriousDragon",
                    comment: "HF with EIPs for simple replay attack protection, EXP cost increase, state trie clearing, contract code size limit",
                    url: "https://eips.ethereum.org/EIPS/eip-607",
                    status: rr.Final,
                    gasPrices: {
                        expByte: {
                            v: 50,
                            d: "Times ceil(log256(exponent)) for the EXP instruction"
                        }
                    },
                    vm: {
                        maxCodeSize: {
                            v: 24576,
                            d: "Maximum length of contract code"
                        }
                    }
                },
                byzantium: {
                    name: "byzantium",
                    comment: "Hardfork with new precompiles, instructions and other protocol changes",
                    url: "https://eips.ethereum.org/EIPS/eip-609",
                    status: rr.Final,
                    gasPrices: {
                        modexpGquaddivisor: {
                            v: 20,
                            d: "Gquaddivisor from modexp precompile for gas calculation"
                        },
                        ecAdd: {
                            v: 500,
                            d: "Gas costs for curve addition precompile"
                        },
                        ecMul: {
                            v: 4e4,
                            d: "Gas costs for curve multiplication precompile"
                        },
                        ecPairing: {
                            v: 1e5,
                            d: "Base gas costs for curve pairing precompile"
                        },
                        ecPairingWord: {
                            v: 8e4,
                            d: "Gas costs regarding curve pairing precompile input length"
                        },
                        revert: {
                            v: 0,
                            d: "Base fee of the REVERT opcode"
                        },
                        staticcall: {
                            v: 700,
                            d: "Base fee of the STATICCALL opcode"
                        },
                        returndatasize: {
                            v: 2,
                            d: "Base fee of the RETURNDATASIZE opcode"
                        },
                        returndatacopy: {
                            v: 3,
                            d: "Base fee of the RETURNDATACOPY opcode"
                        }
                    },
                    pow: {
                        minerReward: {
                            v: BigInt("3000000000000000000"),
                            d: "the amount a miner get rewarded for mining a block"
                        },
                        difficultyBombDelay: {
                            v: 3e6,
                            d: "the amount of blocks to delay the difficulty bomb with"
                        }
                    }
                },
                constantinople: {
                    name: "constantinople",
                    comment: "Postponed hardfork including EIP-1283 (SSTORE gas metering changes)",
                    url: "https://eips.ethereum.org/EIPS/eip-1013",
                    status: rr.Final,
                    gasPrices: {
                        netSstoreNoopGas: {
                            v: 200,
                            d: "Once per SSTORE operation if the value doesn't change"
                        },
                        netSstoreInitGas: {
                            v: 2e4,
                            d: "Once per SSTORE operation from clean zero"
                        },
                        netSstoreCleanGas: {
                            v: 5e3,
                            d: "Once per SSTORE operation from clean non-zero"
                        },
                        netSstoreDirtyGas: {
                            v: 200,
                            d: "Once per SSTORE operation from dirty"
                        },
                        netSstoreClearRefund: {
                            v: 15e3,
                            d: "Once per SSTORE operation for clearing an originally existing storage slot"
                        },
                        netSstoreResetRefund: {
                            v: 4800,
                            d: "Once per SSTORE operation for resetting to the original non-zero value"
                        },
                        netSstoreResetClearRefund: {
                            v: 19800,
                            d: "Once per SSTORE operation for resetting to the original zero value"
                        },
                        shl: {
                            v: 3,
                            d: "Base fee of the SHL opcode"
                        },
                        shr: {
                            v: 3,
                            d: "Base fee of the SHR opcode"
                        },
                        sar: {
                            v: 3,
                            d: "Base fee of the SAR opcode"
                        },
                        extcodehash: {
                            v: 400,
                            d: "Base fee of the EXTCODEHASH opcode"
                        },
                        create2: {
                            v: 32e3,
                            d: "Base fee of the CREATE2 opcode"
                        }
                    },
                    pow: {
                        minerReward: {
                            v: BigInt("2000000000000000000"),
                            d: "The amount a miner gets rewarded for mining a block"
                        },
                        difficultyBombDelay: {
                            v: 5e6,
                            d: "the amount of blocks to delay the difficulty bomb with"
                        }
                    }
                },
                petersburg: {
                    name: "petersburg",
                    comment: "Aka constantinopleFix, removes EIP-1283, activate together with or after constantinople",
                    url: "https://eips.ethereum.org/EIPS/eip-1716",
                    status: rr.Final,
                    gasPrices: {
                        netSstoreNoopGas: {
                            v: null,
                            d: "Removed along EIP-1283"
                        },
                        netSstoreInitGas: {
                            v: null,
                            d: "Removed along EIP-1283"
                        },
                        netSstoreCleanGas: {
                            v: null,
                            d: "Removed along EIP-1283"
                        },
                        netSstoreDirtyGas: {
                            v: null,
                            d: "Removed along EIP-1283"
                        },
                        netSstoreClearRefund: {
                            v: null,
                            d: "Removed along EIP-1283"
                        },
                        netSstoreResetRefund: {
                            v: null,
                            d: "Removed along EIP-1283"
                        },
                        netSstoreResetClearRefund: {
                            v: null,
                            d: "Removed along EIP-1283"
                        }
                    }
                },
                istanbul: {
                    name: "istanbul",
                    comment: "HF targeted for December 2019 following the Constantinople/Petersburg HF",
                    url: "https://eips.ethereum.org/EIPS/eip-1679",
                    status: rr.Final,
                    gasConfig: {},
                    gasPrices: {
                        blake2Round: {
                            v: 1,
                            d: "Gas cost per round for the Blake2 F precompile"
                        },
                        ecAdd: {
                            v: 150,
                            d: "Gas costs for curve addition precompile"
                        },
                        ecMul: {
                            v: 6e3,
                            d: "Gas costs for curve multiplication precompile"
                        },
                        ecPairing: {
                            v: 45e3,
                            d: "Base gas costs for curve pairing precompile"
                        },
                        ecPairingWord: {
                            v: 34e3,
                            d: "Gas costs regarding curve pairing precompile input length"
                        },
                        txDataNonZero: {
                            v: 16,
                            d: "Per byte of data attached to a transaction that is not equal to zero. NOTE: Not payable on data of calls between transactions"
                        },
                        sstoreSentryGasEIP2200: {
                            v: 2300,
                            d: "Minimum gas required to be present for an SSTORE call, not consumed"
                        },
                        sstoreNoopGasEIP2200: {
                            v: 800,
                            d: "Once per SSTORE operation if the value doesn't change"
                        },
                        sstoreDirtyGasEIP2200: {
                            v: 800,
                            d: "Once per SSTORE operation if a dirty value is changed"
                        },
                        sstoreInitGasEIP2200: {
                            v: 2e4,
                            d: "Once per SSTORE operation from clean zero to non-zero"
                        },
                        sstoreInitRefundEIP2200: {
                            v: 19200,
                            d: "Once per SSTORE operation for resetting to the original zero value"
                        },
                        sstoreCleanGasEIP2200: {
                            v: 5e3,
                            d: "Once per SSTORE operation from clean non-zero to something else"
                        },
                        sstoreCleanRefundEIP2200: {
                            v: 4200,
                            d: "Once per SSTORE operation for resetting to the original non-zero value"
                        },
                        sstoreClearRefundEIP2200: {
                            v: 15e3,
                            d: "Once per SSTORE operation for clearing an originally existing storage slot"
                        },
                        balance: {
                            v: 700,
                            d: "Base fee of the BALANCE opcode"
                        },
                        extcodehash: {
                            v: 700,
                            d: "Base fee of the EXTCODEHASH opcode"
                        },
                        chainid: {
                            v: 2,
                            d: "Base fee of the CHAINID opcode"
                        },
                        selfbalance: {
                            v: 5,
                            d: "Base fee of the SELFBALANCE opcode"
                        },
                        sload: {
                            v: 800,
                            d: "Base fee of the SLOAD opcode"
                        }
                    }
                },
                muirGlacier: {
                    name: "muirGlacier",
                    comment: "HF to delay the difficulty bomb",
                    url: "https://eips.ethereum.org/EIPS/eip-2384",
                    status: rr.Final,
                    pow: {
                        difficultyBombDelay: {
                            v: 9e6,
                            d: "the amount of blocks to delay the difficulty bomb with"
                        }
                    }
                },
                berlin: {
                    name: "berlin",
                    comment: "HF targeted for July 2020 following the Muir Glacier HF",
                    url: "https://eips.ethereum.org/EIPS/eip-2070",
                    status: rr.Final,
                    eips: [2565, 2929, 2718, 2930]
                },
                london: {
                    name: "london",
                    comment: "HF targeted for July 2021 following the Berlin fork",
                    url: "https://github.com/ethereum/eth1.0-specs/blob/master/network-upgrades/mainnet-upgrades/london.md",
                    status: rr.Final,
                    eips: [1559, 3198, 3529, 3541]
                },
                arrowGlacier: {
                    name: "arrowGlacier",
                    comment: "HF to delay the difficulty bomb",
                    url: "https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/arrow-glacier.md",
                    status: rr.Final,
                    eips: [4345]
                },
                grayGlacier: {
                    name: "grayGlacier",
                    comment: "Delaying the difficulty bomb to Mid September 2022",
                    url: "https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/gray-glacier.md",
                    status: rr.Final,
                    eips: [5133]
                },
                paris: {
                    name: "paris",
                    comment: "Hardfork to upgrade the consensus mechanism to Proof-of-Stake",
                    url: "https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/merge.md",
                    status: rr.Final,
                    consensus: {
                        type: "pos",
                        algorithm: "casper",
                        casper: {}
                    },
                    eips: [3675, 4399]
                },
                mergeForkIdTransition: {
                    name: "mergeForkIdTransition",
                    comment: "Pre-merge hardfork to fork off non-upgraded clients",
                    url: "https://eips.ethereum.org/EIPS/eip-3675",
                    status: rr.Final,
                    eips: []
                },
                shanghai: {
                    name: "shanghai",
                    comment: "Next feature hardfork after the merge hardfork having withdrawals, warm coinbase, push0, limit/meter initcode",
                    url: "https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/shanghai.md",
                    status: rr.Final,
                    eips: [3651, 3855, 3860, 4895]
                },
                cancun: {
                    name: "cancun",
                    comment: "Next feature hardfork after shanghai, includes proto-danksharding EIP 4844 blobs (still WIP hence not for production use), transient storage opcodes, parent beacon block root availability in EVM, selfdestruct only in same transaction, and blob base fee opcode",
                    url: "https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/cancun.md",
                    status: rr.Final,
                    eips: [1153, 4844, 4788, 5656, 6780, 7516]
                }
            };
            class sr {
                constructor(t) {
                    this._eips = [], this._paramsCache = {}, this._activatedEIPsCache = [], this.events = new Mn.EventEmitter, this._customChains = t.customChains ? ? [], this._chainParams = this.setChain(t.chain), this.DEFAULT_HARDFORK = this._chainParams.defaultHardfork ? ? pt.Shanghai, this.HARDFORK_CHANGES = this.hardforks().map(i => [i.name, Gi[i.name]]), this._hardfork = this.DEFAULT_HARDFORK, void 0 !== t.hardfork && this.setHardfork(t.hardfork), t.eips && this.setEIPs(t.eips), 0 === Object.keys(this._paramsCache).length && (this._buildParamsCache(), this._buildActivatedEIPsCache())
                }
                static custom(t, i = {}) {
                    const L = { ...sr._getChainParams(i.baseChain ? ? "mainnet")
                    };
                    if (L.name = "custom-chain", "string" != typeof t) return new sr({
                        chain: { ...L,
                            ...t
                        },
                        ...i
                    });
                    if (t === lr.PolygonMainnet) return sr.custom({
                        name: lr.PolygonMainnet,
                        chainId: 137,
                        networkId: 137
                    }, i);
                    if (t === lr.PolygonMumbai) return sr.custom({
                        name: lr.PolygonMumbai,
                        chainId: 80001,
                        networkId: 80001
                    }, i);
                    if (t === lr.ArbitrumOne) return sr.custom({
                        name: lr.ArbitrumOne,
                        chainId: 42161,
                        networkId: 42161
                    }, i);
                    if (t === lr.xDaiChain) return sr.custom({
                        name: lr.xDaiChain,
                        chainId: 100,
                        networkId: 100
                    }, i);
                    if (t === lr.OptimisticKovan) return sr.custom({
                        name: lr.OptimisticKovan,
                        chainId: 69,
                        networkId: 69
                    }, {
                        hardfork: pt.Berlin,
                        ...i
                    });
                    if (t === lr.OptimisticEthereum) return sr.custom({
                        name: lr.OptimisticEthereum,
                        chainId: 10,
                        networkId: 10
                    }, {
                        hardfork: pt.Berlin,
                        ...i
                    });
                    throw new Error(`Custom chain ${t} not supported`)
                }
                static fromGethGenesis(t, {
                    chain: i,
                    eips: g,
                    genesisHash: L,
                    hardfork: X,
                    mergeForkIdPostMerge: be
                }) {
                    const Pe = function Vi(n, t, i) {
                            try {
                                const g = ["config", "difficulty", "gasLimit", "nonce", "alloc"];
                                if (g.some(L => !(L in n))) {
                                    const L = g.filter(X => !(X in n));
                                    throw new Error(`Invalid format, expected geth genesis field "${L}" missing`)
                                }
                                return void 0 !== t && (n.name = t),
                                    function $i(n, t = !0) {
                                        const {
                                            name: i,
                                            config: g,
                                            difficulty: L,
                                            mixHash: X,
                                            gasLimit: be,
                                            coinbase: Pe,
                                            baseFeePerGas: Ue,
                                            excessBlobGas: Je
                                        } = n;
                                        let {
                                            extraData: Xe,
                                            timestamp: ot,
                                            nonce: Lt
                                        } = n;
                                        const Xt = Number(ot),
                                            {
                                                chainId: er
                                            } = g;
                                        if ("" === Xe && (Xe = "0x"), ae(ot) || (ot = Be(parseInt(ot))), 18 !== Lt.length && (Lt = function Zi(n) {
                                                return n && "0x0" !== n ? ae(n) ? "0x" + J(n).padStart(16, "0") : "0x" + n.padStart(16, "0") : "0x0000000000000000"
                                            }(Lt)), g.eip155Block !== g.eip158Block) throw new Error("EIP155 block number must equal EIP 158 block number since both are part of SpuriousDragon hardfork and the client only supports activating the full hardfork");
                                        const Jt = {
                                                name: i,
                                                chainId: er,
                                                networkId: er,
                                                genesis: {
                                                    timestamp: ot,
                                                    gasLimit: be,
                                                    difficulty: L,
                                                    nonce: Lt,
                                                    extraData: Xe,
                                                    mixHash: X,
                                                    coinbase: Pe,
                                                    baseFeePerGas: Ue,
                                                    excessBlobGas: Je
                                                },
                                                hardfork: void 0,
                                                hardforks: [],
                                                bootstrapNodes: [],
                                                consensus: void 0 !== g.clique ? {
                                                    type: "poa",
                                                    algorithm: "clique",
                                                    clique: {
                                                        period: g.clique.period ? ? g.clique.blockperiodseconds,
                                                        epoch: g.clique.epoch ? ? g.clique.epochlength
                                                    }
                                                } : {
                                                    type: "pow",
                                                    algorithm: "ethash",
                                                    ethash: {}
                                                }
                                            },
                                            br = {
                                                [pt.Homestead]: {
                                                    name: "homesteadBlock"
                                                },
                                                [pt.Dao]: {
                                                    name: "daoForkBlock"
                                                },
                                                [pt.TangerineWhistle]: {
                                                    name: "eip150Block"
                                                },
                                                [pt.SpuriousDragon]: {
                                                    name: "eip155Block"
                                                },
                                                [pt.Byzantium]: {
                                                    name: "byzantiumBlock"
                                                },
                                                [pt.Constantinople]: {
                                                    name: "constantinopleBlock"
                                                },
                                                [pt.Petersburg]: {
                                                    name: "petersburgBlock"
                                                },
                                                [pt.Istanbul]: {
                                                    name: "istanbulBlock"
                                                },
                                                [pt.MuirGlacier]: {
                                                    name: "muirGlacierBlock"
                                                },
                                                [pt.Berlin]: {
                                                    name: "berlinBlock"
                                                },
                                                [pt.London]: {
                                                    name: "londonBlock"
                                                },
                                                [pt.MergeForkIdTransition]: {
                                                    name: "mergeForkBlock",
                                                    postMerge: t
                                                },
                                                [pt.Shanghai]: {
                                                    name: "shanghaiTime",
                                                    postMerge: !0,
                                                    isTimestamp: !0
                                                },
                                                [pt.Cancun]: {
                                                    name: "cancunTime",
                                                    postMerge: !0,
                                                    isTimestamp: !0
                                                }
                                            },
                                            vr = Object.keys(br).reduce((zt, gr) => (zt[br[gr].name] = gr, zt), {}),
                                            Mr = Object.keys(g).filter(zt => void 0 !== vr[zt] && null != g[zt]);
                                        Jt.hardforks = Mr.map(zt => ({
                                            name: vr[zt],
                                            block: !0 === br[vr[zt]].isTimestamp || "number" != typeof g[zt] ? null : g[zt],
                                            timestamp: !0 === br[vr[zt]].isTimestamp && "number" == typeof g[zt] ? g[zt] : void 0
                                        })).filter(zt => null !== zt.block || void 0 !== zt.timestamp);
                                        for (const zt of Jt.hardforks) zt.timestamp === Xt && (zt.timestamp = 0);
                                        if (Jt.hardforks.sort(function(zt, gr) {
                                                return (zt.block ? ? 1 / 0) - (gr.block ? ? 1 / 0)
                                            }), Jt.hardforks.sort(function(zt, gr) {
                                                return (zt.timestamp ? ? Xt) - (gr.timestamp ? ? Xt)
                                            }), void 0 !== g.terminalTotalDifficulty) {
                                            const zt = {
                                                    name: pt.Paris,
                                                    ttd: g.terminalTotalDifficulty,
                                                    block: null
                                                },
                                                gr = Jt.hardforks.findIndex(Tn => !0 === br[Tn.name] ? .postMerge); - 1 !== gr ? Jt.hardforks.splice(gr, 0, zt) : Jt.hardforks.push(zt)
                                        }
                                        const jr = Jt.hardforks.length > 0 ? Jt.hardforks.slice(-1)[0] : void 0;
                                        return Jt.hardfork = jr ? .name, Jt.hardforks.unshift({
                                            name: pt.Chainstart,
                                            block: 0
                                        }), Jt
                                    }(n, i)
                            } catch (g) {
                                throw new Error(`Error parsing parameters file: ${g.message}`)
                            }
                        }(t, i, be),
                        Ue = new sr({
                            chain: Pe.name ? ? "custom",
                            customChains: [Pe],
                            eips: g,
                            hardfork: X ? ? Pe.hardfork
                        });
                    return void 0 !== L && Ue.setForkHashes(L), Ue
                }
                static isSupportedChainId(t) {
                    return !!this.getInitializedChains().names[t.toString()]
                }
                static _getChainParams(t, i) {
                    const g = this.getInitializedChains(i);
                    if ("number" == typeof t || "bigint" == typeof t) {
                        if (t = t.toString(), g.names[t]) return g[g.names[t]];
                        throw new Error(`Chain with ID ${t} not supported`)
                    }
                    if (void 0 !== g[t]) return g[t];
                    throw new Error(`Chain with name ${t} not supported`)
                }
                setChain(t) {
                    if ("number" == typeof t || "bigint" == typeof t || "string" == typeof t) this._chainParams = sr._getChainParams(t, this._customChains);
                    else {
                        if ("object" != typeof t) throw new Error("Wrong input format"); {
                            if (this._customChains.length > 0) throw new Error("Chain must be a string, number, or bigint when initialized with customChains passed in");
                            const i = ["networkId", "genesis", "hardforks", "bootstrapNodes"];
                            for (const g of i)
                                if (!(g in t)) throw new Error(`Missing required chain parameter: ${g}`);
                            this._chainParams = t
                        }
                    }
                    for (const i of this.hardforks())
                        if (void 0 === i.block) throw new Error("Hardfork cannot have undefined block number");
                    return this._chainParams
                }
                setHardfork(t) {
                    let i = !1;
                    for (const g of this.HARDFORK_CHANGES) g[0] === t && (this._hardfork !== t && (this._hardfork = t, this._buildParamsCache(), this._buildActivatedEIPsCache(), this.events.emit("hardforkChanged", t)), i = !0);
                    if (!i) throw new Error(`Hardfork with name ${t} not supported`)
                }
                getHardforkBy(t) {
                    let {
                        blockNumber: i,
                        timestamp: g,
                        td: L
                    } = t;
                    i = Nr(i, xr.BigInt), L = Nr(L, xr.BigInt), g = Nr(g, xr.BigInt);
                    const X = this.hardforks().filter(ot => null !== ot.block || null != ot.ttd || void 0 !== ot.timestamp),
                        be = X.findIndex(ot => null != ot.ttd);
                    if (X.slice(be + 1).findIndex(ot => null != ot.ttd) >= 0) throw Error("More than one merge hardforks found with ttd specified");
                    let Ue = X.findIndex(ot => void 0 !== i && null !== ot.block && BigInt(ot.block) > i || void 0 !== g && void 0 !== ot.timestamp && ot.timestamp > g);
                    if (-1 === Ue) Ue = X.length;
                    else if (0 === Ue) throw Error("Must have at least one hardfork at block 0");
                    if (void 0 === g && (Ue -= X.slice(0, Ue).reverse().findIndex(Lt => null !== Lt.block || void 0 !== Lt.ttd)), Ue -= 1, null === X[Ue].block && void 0 === X[Ue].timestamp)(null == L || BigInt(X[Ue].ttd) > L) && (Ue -= 1);
                    else if (be >= 0 && null != L) {
                        if (Ue >= be && BigInt(X[be].ttd) > L) throw Error("Maximum HF determined by total difficulty is lower than the block number HF");
                        if (Ue < be && BigInt(X[be].ttd) < L) throw Error("HF determined by block number is lower than the minimum total difficulty HF")
                    }
                    const Je = Ue;
                    for (; Ue < X.length - 1 && X[Ue].block === X[Ue + 1].block && X[Ue].timestamp === X[Ue + 1].timestamp; Ue++);
                    if (void 0 !== g) {
                        if (X.slice(0, Je).reduce((Xt, er) => Math.max(Number(er.timestamp ? ? "0"), Xt), 0) > g) throw Error("Maximum HF determined by timestamp is lower than the block number/ttd HF");
                        if (X.slice(Ue + 1).reduce((Xt, er) => Math.min(Number(er.timestamp ? ? g), Xt), Number(g)) < g) throw Error("Maximum HF determined by block number/ttd is lower than timestamp HF")
                    }
                    return X[Ue].name
                }
                setHardforkBy(t) {
                    const i = this.getHardforkBy(t);
                    return this.setHardfork(i), i
                }
                _getHardfork(t) {
                    const i = this.hardforks();
                    for (const g of i)
                        if (g.name === t) return g;
                    return null
                }
                setEIPs(t = []) {
                    for (const i of t) {
                        if (!(i in pr)) throw new Error(`${i} not supported`);
                        const g = this.gteHardfork(pr[i].minimumHardfork);
                        if (!g) throw new Error(`${i} cannot be activated on hardfork ${this.hardfork()}, minimumHardfork: ${g}`)
                    }
                    this._eips = t, this._buildParamsCache(), this._buildActivatedEIPsCache();
                    for (const i of t)
                        if (void 0 !== pr[i].requiredEIPs)
                            for (const g of pr[i].requiredEIPs)
                                if (!t.includes(g) && !this.isActivatedEIP(g)) throw new Error(`${i} requires EIP ${g}, but is not included in the EIP list`)
                }
                _mergeWithParamsCache(t) {
                    this._paramsCache.gasConfig = { ...this._paramsCache.gasConfig,
                        ...t.gasConfig
                    }, this._paramsCache.gasPrices = { ...this._paramsCache.gasPrices,
                        ...t.gasPrices
                    }, this._paramsCache.pow = { ...this._paramsCache.pow,
                        ...t.pow
                    }, this._paramsCache.sharding = { ...this._paramsCache.sharding,
                        ...t.sharding
                    }, this._paramsCache.vm = { ...this._paramsCache.vm,
                        ...t.vm
                    }
                }
                _buildParamsCache() {
                    this._paramsCache = {};
                    const t = this.hardfork();
                    for (const i of this.HARDFORK_CHANGES) {
                        if ("eips" in i[1]) {
                            const g = i[1].eips;
                            for (const L of g) {
                                if (!(L in pr)) throw new Error(`${L} not supported`);
                                this._mergeWithParamsCache(pr[L])
                            }
                        } else this._mergeWithParamsCache(i[1]);
                        if (i[0] === t) break
                    }
                    for (const i of this._eips) {
                        if (!(i in pr)) throw new Error(`${i} not supported`);
                        this._mergeWithParamsCache(pr[i])
                    }
                }
                _buildActivatedEIPsCache() {
                    this._activatedEIPsCache = [];
                    for (const t of this.HARDFORK_CHANGES) {
                        const i = t[1];
                        this.gteHardfork(i.name) && "eips" in i && (this._activatedEIPsCache = this._activatedEIPsCache.concat(i.eips))
                    }
                    this._activatedEIPsCache = this._activatedEIPsCache.concat(this._eips)
                }
                param(t, i) {
                    let g = null;
                    return void 0 !== this._paramsCache[t] && void 0 !== this._paramsCache[t][i] && (g = this._paramsCache[t][i].v), BigInt(g ? ? 0)
                }
                paramByHardfork(t, i, g) {
                    let L = null;
                    for (const X of this.HARDFORK_CHANGES) {
                        if ("eips" in X[1]) {
                            const be = X[1].eips;
                            for (const Pe of be) {
                                const Ue = this.paramByEIP(t, i, Pe);
                                L = "bigint" == typeof Ue ? Ue : L
                            }
                        } else void 0 !== X[1][t] && void 0 !== X[1][t][i] && (L = X[1][t][i].v);
                        if (X[0] === g) break
                    }
                    return BigInt(L ? ? 0)
                }
                paramByEIP(t, i, g) {
                    if (!(g in pr)) throw new Error(`${g} not supported`);
                    const L = pr[g];
                    if (t in L && void 0 !== L[t][i]) return BigInt(L[t][i].v)
                }
                paramByBlock(t, i, g, L, X) {
                    const be = this.getHardforkBy({
                        blockNumber: g,
                        td: L,
                        timestamp: X
                    });
                    return this.paramByHardfork(t, i, be)
                }
                isActivatedEIP(t) {
                    return !!this._activatedEIPsCache.includes(t)
                }
                hardforkIsActiveOnBlock(t, i) {
                    i = Nr(i, xr.BigInt);
                    const g = this.hardforkBlock(t = t ? ? this._hardfork);
                    return "bigint" == typeof g && g !== Ge && i >= g
                }
                activeOnBlock(t) {
                    return this.hardforkIsActiveOnBlock(null, t)
                }
                hardforkGteHardfork(t, i) {
                    t = t ? ? this._hardfork;
                    const g = this.hardforks();
                    let L = -1,
                        X = -1,
                        be = 0;
                    for (const Pe of g) Pe.name === t && (L = be), Pe.name === i && (X = be), be += 1;
                    return L >= X && -1 !== X
                }
                gteHardfork(t) {
                    return this.hardforkGteHardfork(null, t)
                }
                hardforkBlock(t) {
                    t = t ? ? this._hardfork;
                    const i = this._getHardfork(t) ? .block;
                    return null == i ? null : BigInt(i)
                }
                hardforkTimestamp(t) {
                    t = t ? ? this._hardfork;
                    const i = this._getHardfork(t) ? .timestamp;
                    return null == i ? null : BigInt(i)
                }
                eipBlock(t) {
                    for (const i of this.HARDFORK_CHANGES) {
                        const g = i[1];
                        if ("eips" in g && g.eips.includes(t)) return this.hardforkBlock(i[0])
                    }
                    return null
                }
                hardforkTTD(t) {
                    t = t ? ? this._hardfork;
                    const i = this._getHardfork(t) ? .ttd;
                    return null == i ? null : BigInt(i)
                }
                nextHardforkBlockOrTimestamp(t) {
                    t = t ? ? this._hardfork;
                    const i = this.hardforks();
                    let g = i.findIndex(Pe => Pe.name === t);
                    if (t === pt.Paris && (g -= 1), g < 0) return null;
                    let L = i[g].timestamp ? ? i[g].block;
                    L = null != L ? Number(L) : null;
                    const X = i.slice(g + 1).find(Pe => {
                        let Ue = Pe.timestamp ? ? Pe.block;
                        return Ue = null != Ue ? Number(Ue) : null, Pe.name !== pt.Paris && null != Ue && Ue !== L
                    });
                    if (void 0 === X) return null;
                    const be = X.timestamp ? ? X.block;
                    return null == be ? null : BigInt(be)
                }
                _calcForkHash(t, i) {
                    let g = new Uint8Array(0),
                        L = 0;
                    for (const Pe of this.hardforks()) {
                        const {
                            block: Ue,
                            timestamp: Je,
                            name: Xe
                        } = Pe;
                        let ot = Je ? ? Ue;
                        if (ot = null !== ot ? Number(ot) : null, "number" == typeof ot && 0 !== ot && ot !== L && Xe !== pt.Paris) {
                            const Lt = we("0x" + ot.toString(16).padStart(16, "0"));
                            g = rt(g, Lt), L = ot
                        }
                        if (Pe.name === t) break
                    }
                    const X = rt(i, g);
                    return N(he(Un(X) >>> 0))
                }
                forkHash(t, i) {
                    const g = this._getHardfork(t = t ? ? this._hardfork);
                    if (null === g || null === g ? .block && void 0 === g ? .timestamp && void 0 === g ? .ttd) throw new Error("No fork hash calculation possible for future hardfork");
                    if (null != g ? .forkHash) return g.forkHash;
                    if (!i) throw new Error("genesisHash required for forkHash calculation");
                    return this._calcForkHash(t, i)
                }
                hardforkForForkHash(t) {
                    const i = this.hardforks().filter(g => g.forkHash === t);
                    return i.length >= 1 ? i[i.length - 1] : null
                }
                setForkHashes(t) {
                    for (const i of this.hardforks()) null == i.forkHash && (null != (i.timestamp ? ? i.block) || typeof i.ttd < "u") && (i.forkHash = this.forkHash(i.name, t))
                }
                genesis() {
                    return this._chainParams.genesis
                }
                hardforks() {
                    return this._chainParams.hardforks
                }
                bootstrapNodes() {
                    return this._chainParams.bootstrapNodes
                }
                dnsNetworks() {
                    return this._chainParams.dnsNetworks
                }
                hardfork() {
                    return this._hardfork
                }
                chainId() {
                    return BigInt(this._chainParams.chainId)
                }
                chainName() {
                    return this._chainParams.name
                }
                networkId() {
                    return BigInt(this._chainParams.networkId)
                }
                eips() {
                    return this._eips
                }
                consensusType() {
                    const t = this.hardfork();
                    let i;
                    for (const g of this.HARDFORK_CHANGES)
                        if ("consensus" in g[1] && (i = g[1].consensus.type), g[0] === t) break;
                    return i ? ? this._chainParams.consensus.type
                }
                consensusAlgorithm() {
                    const t = this.hardfork();
                    let i;
                    for (const g of this.HARDFORK_CHANGES)
                        if ("consensus" in g[1] && (i = g[1].consensus.algorithm), g[0] === t) break;
                    return i ? ? this._chainParams.consensus.algorithm
                }
                consensusConfig() {
                    const t = this.hardfork();
                    let i;
                    for (const g of this.HARDFORK_CHANGES) {
                        if ("consensus" in g[1]) {
                            const L = g[1];
                            i = L.consensus[L.consensus.algorithm]
                        }
                        if (g[0] === t) break
                    }
                    return i ? ? this._chainParams.consensus[this.consensusAlgorithm()] ? ? {}
                }
                copy() {
                    const t = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
                    return t.events = new Mn.EventEmitter, t
                }
                static getInitializedChains(t) {
                    const i = {};
                    for (const [L, X] of Object.entries(Tr)) i[X] = L.toLowerCase();
                    const g = { ...Ui
                    };
                    if (t)
                        for (const L of t) {
                            const {
                                name: X
                            } = L;
                            i[L.chainId.toString()] = X, g[X] = L
                        }
                    return g.names = i, g
                }
            }
            var wr = function(n) {
                return n[n.EIP155ReplayProtection = 155] = "EIP155ReplayProtection", n[n.EIP1559FeeMarket = 1559] = "EIP1559FeeMarket", n[n.EIP2718TypedTransaction = 2718] = "EIP2718TypedTransaction", n[n.EIP2930AccessLists = 2930] = "EIP2930AccessLists", n
            }(wr || {});
            var Vt = function(n) {
                return n[n.Legacy = 0] = "Legacy", n[n.AccessListEIP2930 = 1] = "AccessListEIP2930", n[n.FeeMarketEIP1559 = 2] = "FeeMarketEIP1559", n[n.BlobEIP4844 = 3] = "BlobEIP4844", n
            }(Vt || {});
            class mr {
                static getAccessListData(t) {
                    let i, g;
                    if (function Wi(n) {
                            return ! function Ki(n) {
                                return 0 === n.length || !!Array.isArray(n[0])
                            }(n)
                        }(t)) {
                        i = t;
                        const L = [];
                        for (let X = 0; X < t.length; X++) {
                            const be = t[X],
                                Pe = we(be.address),
                                Ue = [];
                            for (let Je = 0; Je < be.storageKeys.length; Je++) Ue.push(we(be.storageKeys[Je]));
                            L.push([Pe, Ue])
                        }
                        g = L
                    } else {
                        g = t ? ? [];
                        const L = [];
                        for (let X = 0; X < g.length; X++) {
                            const be = g[X],
                                Pe = N(be[0]),
                                Ue = [];
                            for (let Xe = 0; Xe < be[1].length; Xe++) Ue.push(N(be[1][Xe]));
                            L.push({
                                address: Pe,
                                storageKeys: Ue
                            })
                        }
                        i = L
                    }
                    return {
                        AccessListJSON: i,
                        accessList: g
                    }
                }
                static verifyAccessList(t) {
                    for (let i = 0; i < t.length; i++) {
                        const g = t[i],
                            L = g[0],
                            X = g[1];
                        if (void 0 !== g[2]) throw new Error("Access list item cannot have 3 elements. It can only have an address, and an array of storage slots.");
                        if (20 !== L.length) throw new Error("Invalid EIP-2930 transaction: address length should be 20 bytes");
                        for (let be = 0; be < X.length; be++)
                            if (32 !== X[be].length) throw new Error("Invalid EIP-2930 transaction: storage slot length should be 32 bytes")
                    }
                }
                static getAccessListJSON(t) {
                    const i = [];
                    for (let g = 0; g < t.length; g++) {
                        const L = t[g],
                            X = {
                                address: N(yt(L[0], 20)),
                                storageKeys: []
                            },
                            be = L[1];
                        for (let Pe = 0; Pe < be.length; Pe++) X.storageKeys.push(N(yt(be[Pe], 32)));
                        i.push(X)
                    }
                    return i
                }
                static getDataFeeEIP2930(t, i) {
                    const g = i.param("gasPrices", "accessListStorageKeyCost"),
                        L = i.param("gasPrices", "accessListAddressCost");
                    let X = 0;
                    for (let Pe = 0; Pe < t.length; Pe++) X += t[Pe][1].length;
                    return t.length * Number(L) + X * Number(g)
                }
            }

            function Ur(n) {
                return we("0x" + n.toString(16).padStart(2, "0"))
            }
            class Er {
                constructor(t, i) {
                    this.cache = {
                        hash: void 0,
                        dataFee: void 0,
                        senderPubKey: void 0
                    }, this.activeCapabilities = [], this.DEFAULT_CHAIN = Tr.Mainnet;
                    const {
                        nonce: g,
                        gasLimit: L,
                        to: X,
                        value: be,
                        data: Pe,
                        v: Ue,
                        r: Je,
                        s: Xe,
                        type: ot
                    } = t;
                    this._type = Number(K(Ae(ot))), this.txOptions = i;
                    const Lt = Ae("" === X ? "0x" : X),
                        Xt = Ae("" === Ue ? "0x" : Ue),
                        er = Ae("" === Je ? "0x" : Je),
                        Jt = Ae("" === Xe ? "0x" : Xe);
                    this.nonce = K(Ae("" === g ? "0x" : g)), this.gasLimit = K(Ae("" === L ? "0x" : L)), this.to = Lt.length > 0 ? new yr(Lt) : void 0, this.value = K(Ae("" === be ? "0x" : be)), this.data = Ae("" === Pe ? "0x" : Pe), this.v = Xt.length > 0 ? K(Xt) : void 0, this.r = er.length > 0 ? K(er) : void 0, this.s = Jt.length > 0 ? K(Jt) : void 0, this._validateCannotExceedMaxInteger({
                        value: this.value,
                        r: this.r,
                        s: this.s
                    }), this._validateCannotExceedMaxInteger({
                        gasLimit: this.gasLimit
                    }, 64), this._validateCannotExceedMaxInteger({
                        nonce: this.nonce
                    }, 64, !0);
                    const br = null == this.to,
                        vr = i.allowUnlimitedInitCodeSize ? ? !1,
                        Mr = i.common ? ? this._getCommon();
                    br && Mr.isActivatedEIP(3860) && !1 === vr && function Qi(n, t) {
                        const i = n.param("vm", "maxInitCodeSize");
                        if (i && BigInt(t) > i) throw new Error(`the initcode size of this transaction is too large: it is ${t} while the max is ${n.param("vm","maxInitCodeSize")}`)
                    }(Mr, this.data.length)
                }
                get type() {
                    return this._type
                }
                supports(t) {
                    return this.activeCapabilities.includes(t)
                }
                getValidationErrors() {
                    const t = [];
                    return this.isSigned() && !this.verifySignature() && t.push("Invalid Signature"), this.getBaseFee() > this.gasLimit && t.push(`gasLimit is too low. given ${this.gasLimit}, need at least ${this.getBaseFee()}`), t
                }
                isValid() {
                    return 0 === this.getValidationErrors().length
                }
                getBaseFee() {
                    const t = this.common.param("gasPrices", "tx");
                    let i = this.getDataFee();
                    if (t && (i += t), this.common.gteHardfork("homestead") && this.toCreationAddress()) {
                        const g = this.common.param("gasPrices", "txCreation");
                        g && (i += g)
                    }
                    return i
                }
                getDataFee() {
                    const t = this.common.param("gasPrices", "txDataZero"),
                        i = this.common.param("gasPrices", "txDataNonZero");
                    let g = Ge;
                    for (let L = 0; L < this.data.length; L++) g += 0 === this.data[L] ? t : i;
                    if (null == this.to && this.common.isActivatedEIP(3860)) {
                        const L = BigInt(Math.ceil(this.data.length / 32));
                        g += this.common.param("gasPrices", "initCodeWordCost") * L
                    }
                    return g
                }
                toCreationAddress() {
                    return void 0 === this.to || 0 === this.to.bytes.length
                }
                isSigned() {
                    const {
                        v: t,
                        r: i,
                        s: g
                    } = this;
                    return !(void 0 === t || void 0 === i || void 0 === g)
                }
                verifySignature() {
                    try {
                        const t = this.getSenderPublicKey();
                        return 0 !== G(t).length
                    } catch {
                        return !1
                    }
                }
                getSenderAddress() {
                    return new yr(Ft(this.getSenderPublicKey()))
                }
                sign(t) {
                    if (32 !== t.length) {
                        const Ue = this._errorMsg("Private key must be 32 bytes in length.");
                        throw new Error(Ue)
                    }
                    let i = !1;
                    this.type === Vt.Legacy && this.common.gteHardfork("spuriousDragon") && !this.supports(wr.EIP155ReplayProtection) && (this.activeCapabilities.push(wr.EIP155ReplayProtection), i = !0);
                    const g = this.getHashedMessageToSign(),
                        {
                            v: L,
                            r: X,
                            s: be
                        } = function di(n, t, i) {
                            const g = P.kA.sign(n, t),
                                L = g.toCompactRawBytes();
                            return {
                                r: L.slice(0, 32),
                                s: L.slice(32, 64),
                                v: void 0 === i ? BigInt(g.recovery + 27) : BigInt(g.recovery + 35) + BigInt(i) * Ye
                            }
                        }(g, t),
                        Pe = this._processSignature(L, X, be);
                    if (i) {
                        const Ue = this.activeCapabilities.indexOf(wr.EIP155ReplayProtection);
                        Ue > -1 && this.activeCapabilities.splice(Ue, 1)
                    }
                    return Pe
                }
                toJSON() {
                    return {
                        type: le(BigInt(this.type)),
                        nonce: le(this.nonce),
                        gasLimit: le(this.gasLimit),
                        to: void 0 !== this.to ? this.to.toString() : void 0,
                        value: le(this.value),
                        data: N(this.data),
                        v: void 0 !== this.v ? le(this.v) : void 0,
                        r: void 0 !== this.r ? le(this.r) : void 0,
                        s: void 0 !== this.s ? le(this.s) : void 0
                    }
                }
                _getCommon(t, i) {
                    if (void 0 !== i) {
                        const g = K(Ae(i));
                        if (t) {
                            if (t.chainId() !== g) {
                                const L = this._errorMsg("The chain ID does not match the chain ID of Common");
                                throw new Error(L)
                            }
                            return t.copy()
                        }
                        return sr.isSupportedChainId(g) ? new sr({
                            chain: g
                        }) : sr.custom({
                            name: "custom-chain",
                            networkId: g,
                            chainId: g
                        }, {
                            baseChain: this.DEFAULT_CHAIN
                        })
                    }
                    return t ? .copy() ? ? new sr({
                        chain: this.DEFAULT_CHAIN
                    })
                }
                _validateCannotExceedMaxInteger(t, i = 256, g = !1) {
                    for (const [L, X] of Object.entries(t)) switch (i) {
                        case 64:
                            if (g) {
                                if (void 0 !== X && X >= pe) {
                                    const be = this._errorMsg(`${L} cannot equal or exceed MAX_UINT64 (2^64-1), given ${X}`);
                                    throw new Error(be)
                                }
                            } else if (void 0 !== X && X > pe) {
                                const be = this._errorMsg(`${L} cannot exceed MAX_UINT64 (2^64-1), given ${X}`);
                                throw new Error(be)
                            }
                            break;
                        case 256:
                            if (g) {
                                if (void 0 !== X && X >= Re) {
                                    const be = this._errorMsg(`${L} cannot equal or exceed MAX_INTEGER (2^256-1), given ${X}`);
                                    throw new Error(be)
                                }
                            } else if (void 0 !== X && X > Re) {
                                const be = this._errorMsg(`${L} cannot exceed MAX_INTEGER (2^256-1), given ${X}`);
                                throw new Error(be)
                            }
                            break;
                        default:
                            {
                                const be = this._errorMsg("unimplemented bits value");
                                throw new Error(be)
                            }
                    }
                }
                static _validateNotArray(t) {
                    const i = ["nonce", "gasPrice", "gasLimit", "to", "value", "data", "v", "r", "s", "type", "baseFee", "maxFeePerGas", "chainId"];
                    for (const [g, L] of Object.entries(t))
                        if (i.includes(g) && Array.isArray(L)) throw new Error(`${g} cannot be an array`)
                }
                _getSharedErrorPostfix() {
                    let t = "";
                    try {
                        t = this.isSigned() ? N(this.hash()) : "not available (unsigned)"
                    } catch {
                        t = "error"
                    }
                    let i = "";
                    try {
                        i = this.isSigned().toString()
                    } catch {
                        t = "error"
                    }
                    let g = "";
                    try {
                        g = this.common.hardfork()
                    } catch {
                        g = "error"
                    }
                    let L = `tx type=${this.type} hash=${t} nonce=${this.nonce} value=${this.value} `;
                    return L += `signed=${i} hf=${g}`, L
                }
            }

            function jn(n, t) {
                const i = n.maxPriorityFeePerGas,
                    g = n.maxFeePerGas - t;
                return n.gasLimit * ((i < g ? i : g) + t) + n.value
            }

            function Ar(n, t) {
                return `${t} (${n.errorStr()})`
            }

            function zn(n, t) {
                if (n.cache.dataFee && n.cache.dataFee.hardfork === n.common.hardfork()) return n.cache.dataFee.value;
                const i = Er.prototype.getDataFee.bind(n)() + (t ? ? 0 n);
                return Object.isFrozen(n) && (n.cache.dataFee = {
                    value: i,
                    hardfork: n.common.hardfork()
                }), i
            }

            function Vr(n) {
                if (!n.isSigned()) {
                    const t = Ar(n, "Cannot call hash method if transaction is not signed");
                    throw new Error(t)
                }
                return Object.isFrozen(n) ? (n.cache.hash || (n.cache.hash = (0, ht.wn)(n.serialize())), n.cache.hash) : (0, ht.wn)(n.serialize())
            }

            function Kr(n) {
                const {
                    s: t
                } = n;
                if (n.common.gteHardfork("homestead") && void 0 !== t && t > nt) {
                    const i = Ar(n, "Invalid Signature: s-values greater than secp256k1n/2 are considered invalid");
                    throw new Error(i)
                }
            }

            function Wr(n) {
                if (void 0 !== n.cache.senderPubKey) return n.cache.senderPubKey;
                const t = n.getMessageToVerifySignature(),
                    {
                        v: i,
                        r: g,
                        s: L
                    } = n;
                Kr(n);
                try {
                    const X = function(n, t, i, g, L) {
                        const X = rt(yt(i, 32), yt(g, 32)),
                            be = function Zr(n, t) {
                                return n === Ge || n === tt ? n : void 0 === t ? n - vt : n - (t * Ye + BigInt(35))
                            }(t, L);
                        if (! function $r(n) {
                                return n === Ge || n === tt
                            }(be)) throw new Error("Invalid signature v value");
                        return P.kA.Signature.fromCompact(X).addRecoveryBit(Number(be)).recoverPublicKey(n).toRawBytes(!1).slice(1)
                    }(t, i, ue(g), ue(L), n.supports(wr.EIP155ReplayProtection) ? n.common.chainId() : void 0);
                    return Object.isFrozen(n) && (n.cache.senderPubKey = X), X
                } catch {
                    const be = Ar(n, "Invalid Signature");
                    throw new Error(be)
                }
            }

            function gn(n) {
                return (0, ht.wn)(n.getMessageToSign())
            }

            function Ir(n, t) {
                return rt(Ur(n.type), O_encode(t ? ? n.raw()))
            }

            function bn(n) {
                const {
                    v: t
                } = n;
                if (void 0 !== t && t !== Ge && t !== tt) {
                    const i = Ar(n, "The y-parity of the transaction should either be 0 or 1");
                    throw new Error(i)
                }
            }

            function xn(n) {
                return zn(n, BigInt(mr.getDataFeeEIP2930(n.accessList, n.common)))
            }
            class Br extends Er {
                constructor(t, i = {}) {
                    super({ ...t,
                        type: Vt.FeeMarketEIP1559
                    }, i);
                    const {
                        chainId: g,
                        accessList: L,
                        maxFeePerGas: X,
                        maxPriorityFeePerGas: be
                    } = t;
                    if (this.common = this._getCommon(i.common, g), this.chainId = this.common.chainId(), !1 === this.common.isActivatedEIP(1559)) throw new Error("EIP-1559 not enabled on Common");
                    this.activeCapabilities = this.activeCapabilities.concat([1559, 2718, 2930]);
                    const Pe = mr.getAccessListData(L ? ? []);
                    if (this.accessList = Pe.accessList, this.AccessListJSON = Pe.AccessListJSON, mr.verifyAccessList(this.accessList), this.maxFeePerGas = K(Ae("" === X ? "0x" : X)), this.maxPriorityFeePerGas = K(Ae("" === be ? "0x" : be)), this._validateCannotExceedMaxInteger({
                            maxFeePerGas: this.maxFeePerGas,
                            maxPriorityFeePerGas: this.maxPriorityFeePerGas
                        }), Er._validateNotArray(t), this.gasLimit * this.maxFeePerGas > Re) {
                        const Je = this._errorMsg("gasLimit * maxFeePerGas cannot exceed MAX_INTEGER (2^256-1)");
                        throw new Error(Je)
                    }
                    if (this.maxFeePerGas < this.maxPriorityFeePerGas) {
                        const Je = this._errorMsg("maxFeePerGas cannot be less than maxPriorityFeePerGas (The total must be the larger of the two)");
                        throw new Error(Je)
                    }
                    bn(this), Kr(this), (i ? .freeze ? ? 1) && Object.freeze(this)
                }
                static fromTxData(t, i = {}) {
                    return new Br(t, i)
                }
                static fromSerializedTx(t, i = {}) {
                    if (!1 === (0, C.hD)(t.subarray(0, 1), Ur(Vt.FeeMarketEIP1559))) throw new Error(`Invalid serialized tx input: not an EIP-1559 transaction (wrong tx type, expected: ${Vt.FeeMarketEIP1559}, received: ${N(t.subarray(0,1))}`);
                    const g = O_decode(t.subarray(1));
                    if (!Array.isArray(g)) throw new Error("Invalid serialized tx input: must be array");
                    return Br.fromValuesArray(g, i)
                }
                static fromValuesArray(t, i = {}) {
                    if (9 !== t.length && 12 !== t.length) throw new Error("Invalid EIP-1559 transaction. Only expecting 9 values (for unsigned tx) or 12 values (for signed tx).");
                    const [g, L, X, be, Pe, Ue, Je, Xe, ot, Lt, Xt, er] = t;
                    return this._validateNotArray({
                        chainId: g,
                        v: Lt
                    }), ie({
                        nonce: L,
                        maxPriorityFeePerGas: X,
                        maxFeePerGas: be,
                        gasLimit: Pe,
                        value: Je,
                        v: Lt,
                        r: Xt,
                        s: er
                    }), new Br({
                        chainId: K(g),
                        nonce: L,
                        maxPriorityFeePerGas: X,
                        maxFeePerGas: be,
                        gasLimit: Pe,
                        to: Ue,
                        value: Je,
                        data: Xe,
                        accessList: ot ? ? [],
                        v: void 0 !== Lt ? K(Lt) : void 0,
                        r: Xt,
                        s: er
                    }, i)
                }
                getDataFee() {
                    return xn(this)
                }
                getUpfrontCost(t = Ge) {
                    return jn(this, t)
                }
                raw() {
                    return [ue(this.chainId), ue(this.nonce), ue(this.maxPriorityFeePerGas), ue(this.maxFeePerGas), ue(this.gasLimit), void 0 !== this.to ? this.to.bytes : new Uint8Array(0), ue(this.value), this.data, this.accessList, void 0 !== this.v ? ue(this.v) : new Uint8Array(0), void 0 !== this.r ? ue(this.r) : new Uint8Array(0), void 0 !== this.s ? ue(this.s) : new Uint8Array(0)]
                }
                serialize() {
                    return Ir(this)
                }
                getMessageToSign() {
                    return Ir(this, this.raw().slice(0, 9))
                }
                getHashedMessageToSign() {
                    return gn(this)
                }
                hash() {
                    return Vr(this)
                }
                getMessageToVerifySignature() {
                    return this.getHashedMessageToSign()
                }
                getSenderPublicKey() {
                    return Wr(this)
                }
                _processSignature(t, i, g) {
                    const L = { ...this.txOptions,
                        common: this.common
                    };
                    return Br.fromTxData({
                        chainId: this.chainId,
                        nonce: this.nonce,
                        maxPriorityFeePerGas: this.maxPriorityFeePerGas,
                        maxFeePerGas: this.maxFeePerGas,
                        gasLimit: this.gasLimit,
                        to: this.to,
                        value: this.value,
                        data: this.data,
                        accessList: this.accessList,
                        v: t - vt,
                        r: K(i),
                        s: K(g)
                    }, L)
                }
                toJSON() {
                    const t = mr.getAccessListJSON(this.accessList);
                    return { ...super.toJSON(),
                        chainId: le(this.chainId),
                        maxPriorityFeePerGas: le(this.maxPriorityFeePerGas),
                        maxFeePerGas: le(this.maxFeePerGas),
                        accessList: t
                    }
                }
                errorStr() {
                    let t = this._getSharedErrorPostfix();
                    return t += ` maxFeePerGas=${this.maxFeePerGas} maxPriorityFeePerGas=${this.maxPriorityFeePerGas}`, t
                }
                _errorMsg(t) {
                    return Ar(this, t)
                }
            }
            class Or extends Er {
                constructor(t, i = {}) {
                    super({ ...t,
                        type: Vt.AccessListEIP2930
                    }, i);
                    const {
                        chainId: g,
                        accessList: L,
                        gasPrice: X
                    } = t;
                    if (this.common = this._getCommon(i.common, g), this.chainId = this.common.chainId(), !this.common.isActivatedEIP(2930)) throw new Error("EIP-2930 not enabled on Common");
                    this.activeCapabilities = this.activeCapabilities.concat([2718, 2930]);
                    const be = mr.getAccessListData(L ? ? []);
                    if (this.accessList = be.accessList, this.AccessListJSON = be.AccessListJSON, mr.verifyAccessList(this.accessList), this.gasPrice = K(Ae("" === X ? "0x" : X)), this._validateCannotExceedMaxInteger({
                            gasPrice: this.gasPrice
                        }), Er._validateNotArray(t), this.gasPrice * this.gasLimit > Re) {
                        const Ue = this._errorMsg("gasLimit * gasPrice cannot exceed MAX_INTEGER");
                        throw new Error(Ue)
                    }
                    bn(this), Kr(this), (i ? .freeze ? ? 1) && Object.freeze(this)
                }
                static fromTxData(t, i = {}) {
                    return new Or(t, i)
                }
                static fromSerializedTx(t, i = {}) {
                    if (!1 === (0, C.hD)(t.subarray(0, 1), Ur(Vt.AccessListEIP2930))) throw new Error(`Invalid serialized tx input: not an EIP-2930 transaction (wrong tx type, expected: ${Vt.AccessListEIP2930}, received: ${N(t.subarray(0,1))}`);
                    const g = O_decode(Uint8Array.from(t.subarray(1)));
                    if (!Array.isArray(g)) throw new Error("Invalid serialized tx input: must be array");
                    return Or.fromValuesArray(g, i)
                }
                static fromValuesArray(t, i = {}) {
                    if (8 !== t.length && 11 !== t.length) throw new Error("Invalid EIP-2930 transaction. Only expecting 8 values (for unsigned tx) or 11 values (for signed tx).");
                    const [g, L, X, be, Pe, Ue, Je, Xe, ot, Lt, Xt] = t;
                    return this._validateNotArray({
                        chainId: g,
                        v: ot
                    }), ie({
                        nonce: L,
                        gasPrice: X,
                        gasLimit: be,
                        value: Ue,
                        v: ot,
                        r: Lt,
                        s: Xt
                    }), new Or({
                        chainId: K(g),
                        nonce: L,
                        gasPrice: X,
                        gasLimit: be,
                        to: Pe,
                        value: Ue,
                        data: Je,
                        accessList: Xe ? ? [],
                        v: void 0 !== ot ? K(ot) : void 0,
                        r: Lt,
                        s: Xt
                    }, i)
                }
                getDataFee() {
                    return xn(this)
                }
                getUpfrontCost() {
                    return this.gasLimit * this.gasPrice + this.value
                }
                raw() {
                    return [ue(this.chainId), ue(this.nonce), ue(this.gasPrice), ue(this.gasLimit), void 0 !== this.to ? this.to.bytes : new Uint8Array(0), ue(this.value), this.data, this.accessList, void 0 !== this.v ? ue(this.v) : new Uint8Array(0), void 0 !== this.r ? ue(this.r) : new Uint8Array(0), void 0 !== this.s ? ue(this.s) : new Uint8Array(0)]
                }
                serialize() {
                    return Ir(this)
                }
                getMessageToSign() {
                    return Ir(this, this.raw().slice(0, 8))
                }
                getHashedMessageToSign() {
                    return gn(this)
                }
                hash() {
                    return Vr(this)
                }
                getMessageToVerifySignature() {
                    return this.getHashedMessageToSign()
                }
                getSenderPublicKey() {
                    return Wr(this)
                }
                _processSignature(t, i, g) {
                    const L = { ...this.txOptions,
                        common: this.common
                    };
                    return Or.fromTxData({
                        chainId: this.chainId,
                        nonce: this.nonce,
                        gasPrice: this.gasPrice,
                        gasLimit: this.gasLimit,
                        to: this.to,
                        value: this.value,
                        data: this.data,
                        accessList: this.accessList,
                        v: t - vt,
                        r: K(i),
                        s: K(g)
                    }, L)
                }
                toJSON() {
                    const t = mr.getAccessListJSON(this.accessList);
                    return { ...super.toJSON(),
                        chainId: le(this.chainId),
                        gasPrice: le(this.gasPrice),
                        accessList: t
                    }
                }
                errorStr() {
                    let t = this._getSharedErrorPostfix();
                    return t += ` gasPrice=${this.gasPrice} accessListCount=${this.accessList?.length??0}`, t
                }
                _errorMsg(t) {
                    return Ar(this, t)
                }
            }
            class _r extends Er {
                constructor(t, i = {}) {
                    super({ ...t,
                        type: Vt.BlobEIP4844
                    }, i);
                    const {
                        chainId: g,
                        accessList: L,
                        maxFeePerGas: X,
                        maxPriorityFeePerGas: be,
                        maxFeePerBlobGas: Pe
                    } = t;
                    if (this.common = this._getCommon(i.common, g), this.chainId = this.common.chainId(), !1 === this.common.isActivatedEIP(1559)) throw new Error("EIP-1559 not enabled on Common");
                    if (!1 === this.common.isActivatedEIP(4844)) throw new Error("EIP-4844 not enabled on Common");
                    this.activeCapabilities = this.activeCapabilities.concat([1559, 2718, 2930]);
                    const Ue = mr.getAccessListData(L ? ? []);
                    if (this.accessList = Ue.accessList, this.AccessListJSON = Ue.AccessListJSON, mr.verifyAccessList(this.accessList), this.maxFeePerGas = K(Ae("" === X ? "0x" : X)), this.maxPriorityFeePerGas = K(Ae("" === be ? "0x" : be)), this._validateCannotExceedMaxInteger({
                            maxFeePerGas: this.maxFeePerGas,
                            maxPriorityFeePerGas: this.maxPriorityFeePerGas
                        }), Er._validateNotArray(t), this.gasLimit * this.maxFeePerGas > Re) {
                        const Xe = this._errorMsg("gasLimit * maxFeePerGas cannot exceed MAX_INTEGER (2^256-1)");
                        throw new Error(Xe)
                    }
                    if (this.maxFeePerGas < this.maxPriorityFeePerGas) {
                        const Xe = this._errorMsg("maxFeePerGas cannot be less than maxPriorityFeePerGas (The total must be the larger of the two)");
                        throw new Error(Xe)
                    }
                    this.maxFeePerBlobGas = K(Ae("" === (Pe ? ? "") ? "0x" : Pe)), this.blobVersionedHashes = (t.blobVersionedHashes ? ? []).map(Xe => Ae(Xe)), bn(this), Kr(this);
                    for (const Xe of this.blobVersionedHashes) {
                        if (32 !== Xe.length) {
                            const ot = this._errorMsg("versioned hash is invalid length");
                            throw new Error(ot)
                        }
                        if (BigInt(Xe[0]) !== this.common.param("sharding", "blobCommitmentVersionKzg")) {
                            const ot = this._errorMsg("versioned hash does not start with KZG commitment version");
                            throw new Error(ot)
                        }
                    }
                    if (this.blobVersionedHashes.length > 16777216) {
                        const Xe = this._errorMsg("tx can contain at most 16777216 blobs");
                        throw new Error(Xe)
                    }
                    this.blobs = t.blobs ? .map(Xe => Ae(Xe)), this.kzgCommitments = t.kzgCommitments ? .map(Xe => Ae(Xe)), this.kzgProofs = t.kzgProofs ? .map(Xe => Ae(Xe)), (i ? .freeze ? ? 1) && Object.freeze(this)
                }
                static fromTxData(t, i) {
                    if (void 0 !== t.blobsData) {
                        if (void 0 !== t.blobs) throw new Error("cannot have both raw blobs data and encoded blobs in constructor");
                        if (void 0 !== t.kzgCommitments) throw new Error("cannot have both raw blobs data and KZG commitments in constructor");
                        if (void 0 !== t.blobVersionedHashes) throw new Error("cannot have both raw blobs data and versioned hashes in constructor");
                        if (void 0 !== t.kzgProofs) throw new Error("cannot have both raw blobs data and KZG proofs in constructor");
                        t.blobs = (n => {
                            const t = (0, C.iY)(n),
                                i = t.byteLength;
                            if (0 === i) throw Error("invalid blob data");
                            if (i > 262143) throw Error("blob data is too large");
                            const g = Math.ceil(i / Hr),
                                L = function pi(n, t) {
                                    const i = new Uint8Array(t * Hr).fill(0);
                                    return i.set(n), i[n.byteLength] = 128, i
                                }(t, g),
                                X = [];
                            for (let be = 0; be < g; be++) {
                                const Ue = mi(L.subarray(be * Hr, (be + 1) * Hr));
                                X.push(Ue)
                            }
                            return X
                        })(t.blobsData.reduce((g, L) => g + L)), t.kzgCommitments = (n => {
                            const t = [];
                            for (const i of n) t.push(Dr.blobToKzgCommitment(i));
                            return t
                        })(t.blobs), t.blobVersionedHashes = (n => {
                            const t = [];
                            for (const i of n) t.push(Fn(i, 1));
                            return t
                        })(t.kzgCommitments), t.kzgProofs = ((n, t) => n.map((g, L) => Dr.computeBlobKzgProof(g, t[L])))(t.blobs, t.kzgCommitments)
                    }
                    return new _r(t, i)
                }
                static minimalFromNetworkWrapper(t, i) {
                    return _r.fromTxData({ ...t,
                        blobs: void 0,
                        kzgCommitments: void 0,
                        kzgProofs: void 0
                    }, i)
                }
                static fromSerializedTx(t, i = {}) {
                    if (!1 === (0, C.hD)(t.subarray(0, 1), Ur(Vt.BlobEIP4844))) throw new Error(`Invalid serialized tx input: not an EIP-4844 transaction (wrong tx type, expected: ${Vt.BlobEIP4844}, received: ${N(t.subarray(0,1))}`);
                    const g = O_decode(t.subarray(1));
                    if (!Array.isArray(g)) throw new Error("Invalid serialized tx input: must be array");
                    return _r.fromValuesArray(g, i)
                }
                static fromValuesArray(t, i = {}) {
                    if (11 !== t.length && 14 !== t.length) throw new Error("Invalid EIP-4844 transaction. Only expecting 11 values (for unsigned tx) or 14 values (for signed tx).");
                    const [g, L, X, be, Pe, Ue, Je, Xe, ot, Lt, Xt, er, Jt, br] = t;
                    return this._validateNotArray({
                        chainId: g,
                        v: er
                    }), ie({
                        nonce: L,
                        maxPriorityFeePerGas: X,
                        maxFeePerGas: be,
                        gasLimit: Pe,
                        value: Je,
                        maxFeePerBlobGas: Lt,
                        v: er,
                        r: Jt,
                        s: br
                    }), new _r({
                        chainId: K(g),
                        nonce: L,
                        maxPriorityFeePerGas: X,
                        maxFeePerGas: be,
                        gasLimit: Pe,
                        to: Ue,
                        value: Je,
                        data: Xe,
                        accessList: ot ? ? [],
                        maxFeePerBlobGas: Lt,
                        blobVersionedHashes: Xt,
                        v: void 0 !== er ? K(er) : void 0,
                        r: Jt,
                        s: br
                    }, i)
                }
                static fromSerializedBlobTxNetworkWrapper(t, i) {
                    if (!i || !i.common) throw new Error("common instance required to validate versioned hashes");
                    if (!1 === (0, C.hD)(t.subarray(0, 1), Ur(Vt.BlobEIP4844))) throw new Error(`Invalid serialized tx input: not an EIP-4844 transaction (wrong tx type, expected: ${Vt.BlobEIP4844}, received: ${N(t.subarray(0,1))}`);
                    const g = O_decode(t.subarray(1));
                    if (4 !== g.length) throw Error("Expected 4 values in the deserialized network transaction");
                    const [L, X, be, Pe] = g, Ue = _r.fromValuesArray(L, { ...i,
                        freeze: !1
                    });
                    if (void 0 === Ue.to) throw Error("BlobEIP4844Transaction can not be send without a valid `to`");
                    const Je = Number(i.common.param("sharding", "blobCommitmentVersionKzg"));
                    return ((n, t, i, g, L) => {
                        if (n.length !== t.length || t.length !== i.length) throw new Error("Number of blobVersionedHashes, blobs, and commitments not all equal");
                        if (0 === n.length) throw new Error("Invalid transaction with empty blobs");
                        let X;
                        try {
                            X = Dr.verifyBlobKzgProofBatch(t, i, g)
                        } catch (be) {
                            throw new Error(`KZG verification of blobs fail with error=${be}`)
                        }
                        if (!X) throw new Error("KZG proof cannot be verified from blobs/commitments");
                        for (let be = 0; be < n.length; be++) {
                            const Pe = Fn(i[be], L);
                            if (!(0, C.hD)(Pe, n[be])) throw new Error(`commitment for blob at index ${be} does not match versionedHash`)
                        }
                    })(Ue.blobVersionedHashes, X, be, Pe, Je), Ue.blobs = X, Ue.kzgCommitments = be, Ue.kzgProofs = Pe, (i ? .freeze ? ? !0) && Object.freeze(Ue), Ue
                }
                getDataFee() {
                    return xn(this)
                }
                getUpfrontCost(t = Ge) {
                    return jn(this, t)
                }
                raw() {
                    return [ue(this.chainId), ue(this.nonce), ue(this.maxPriorityFeePerGas), ue(this.maxFeePerGas), ue(this.gasLimit), void 0 !== this.to ? this.to.bytes : new Uint8Array(0), ue(this.value), this.data, this.accessList, ue(this.maxFeePerBlobGas), this.blobVersionedHashes, void 0 !== this.v ? ue(this.v) : new Uint8Array(0), void 0 !== this.r ? ue(this.r) : new Uint8Array(0), void 0 !== this.s ? ue(this.s) : new Uint8Array(0)]
                }
                serialize() {
                    return Ir(this)
                }
                serializeNetworkWrapper() {
                    if (void 0 === this.blobs || void 0 === this.kzgCommitments || void 0 === this.kzgProofs) throw new Error("cannot serialize network wrapper without blobs, KZG commitments and KZG proofs provided");
                    return Ir(this, [this.raw(), this.blobs, this.kzgCommitments, this.kzgProofs])
                }
                getMessageToSign() {
                    return Ir(this, this.raw().slice(0, 11))
                }
                getHashedMessageToSign() {
                    return gn(this)
                }
                hash() {
                    return Vr(this)
                }
                getMessageToVerifySignature() {
                    return this.getHashedMessageToSign()
                }
                getSenderPublicKey() {
                    return Wr(this)
                }
                toJSON() {
                    const t = mr.getAccessListJSON(this.accessList);
                    return { ...super.toJSON(),
                        chainId: le(this.chainId),
                        maxPriorityFeePerGas: le(this.maxPriorityFeePerGas),
                        maxFeePerGas: le(this.maxFeePerGas),
                        accessList: t,
                        maxFeePerBlobGas: le(this.maxFeePerBlobGas),
                        blobVersionedHashes: this.blobVersionedHashes.map(g => N(g))
                    }
                }
                _processSignature(t, i, g) {
                    const L = { ...this.txOptions,
                        common: this.common
                    };
                    return _r.fromTxData({
                        chainId: this.chainId,
                        nonce: this.nonce,
                        maxPriorityFeePerGas: this.maxPriorityFeePerGas,
                        maxFeePerGas: this.maxFeePerGas,
                        gasLimit: this.gasLimit,
                        to: this.to,
                        value: this.value,
                        data: this.data,
                        accessList: this.accessList,
                        v: t - vt,
                        r: K(i),
                        s: K(g),
                        maxFeePerBlobGas: this.maxFeePerBlobGas,
                        blobVersionedHashes: this.blobVersionedHashes,
                        blobs: this.blobs,
                        kzgCommitments: this.kzgCommitments,
                        kzgProofs: this.kzgProofs
                    }, L)
                }
                errorStr() {
                    let t = this._getSharedErrorPostfix();
                    return t += ` maxFeePerGas=${this.maxFeePerGas} maxPriorityFeePerGas=${this.maxPriorityFeePerGas}`, t
                }
                _errorMsg(t) {
                    return Ar(this, t)
                }
                numBlobs() {
                    return this.blobVersionedHashes.length
                }
            }

            function Zn(n, t) {
                const i = Number(n),
                    g = 2 * Number(t);
                return i === g + 35 || i === g + 36
            }
            class Pr extends Er {
                constructor(t, i = {}) {
                    if (super({ ...t,
                            type: Vt.Legacy
                        }, i), this.common = this._validateTxV(this.v, i.common), this.gasPrice = K(Ae("" === t.gasPrice ? "0x" : t.gasPrice)), this.gasPrice * this.gasLimit > Re) {
                        const L = this._errorMsg("gas limit * gasPrice cannot exceed MAX_INTEGER (2^256-1)");
                        throw new Error(L)
                    }
                    this._validateCannotExceedMaxInteger({
                        gasPrice: this.gasPrice
                    }), Er._validateNotArray(t), this.common.gteHardfork("spuriousDragon") && (this.isSigned() ? Zn(this.v, this.common.chainId()) && this.activeCapabilities.push(wr.EIP155ReplayProtection) : this.activeCapabilities.push(wr.EIP155ReplayProtection)), (i ? .freeze ? ? 1) && Object.freeze(this)
                }
                static fromTxData(t, i = {}) {
                    return new Pr(t, i)
                }
                static fromSerializedTx(t, i = {}) {
                    const g = O_decode(t);
                    if (!Array.isArray(g)) throw new Error("Invalid serialized tx input. Must be array");
                    return this.fromValuesArray(g, i)
                }
                static fromValuesArray(t, i = {}) {
                    if (6 !== t.length && 9 !== t.length) throw new Error("Invalid transaction. Only expecting 6 values (for unsigned tx) or 9 values (for signed tx).");
                    const [g, L, X, be, Pe, Ue, Je, Xe, ot] = t;
                    return ie({
                        nonce: g,
                        gasPrice: L,
                        gasLimit: X,
                        value: Pe,
                        v: Je,
                        r: Xe,
                        s: ot
                    }), new Pr({
                        nonce: g,
                        gasPrice: L,
                        gasLimit: X,
                        to: be,
                        value: Pe,
                        data: Ue,
                        v: Je,
                        r: Xe,
                        s: ot
                    }, i)
                }
                raw() {
                    return [ue(this.nonce), ue(this.gasPrice), ue(this.gasLimit), void 0 !== this.to ? this.to.bytes : new Uint8Array(0), ue(this.value), this.data, void 0 !== this.v ? ue(this.v) : new Uint8Array(0), void 0 !== this.r ? ue(this.r) : new Uint8Array(0), void 0 !== this.s ? ue(this.s) : new Uint8Array(0)]
                }
                serialize() {
                    return O_encode(this.raw())
                }
                getMessageToSign() {
                    const t = [ue(this.nonce), ue(this.gasPrice), ue(this.gasLimit), void 0 !== this.to ? this.to.bytes : new Uint8Array(0), ue(this.value), this.data];
                    return this.supports(wr.EIP155ReplayProtection) && (t.push(ue(this.common.chainId())), t.push(G(Ae(0))), t.push(G(Ae(0)))), t
                }
                getHashedMessageToSign() {
                    const t = this.getMessageToSign();
                    return (0, ht.wn)(O_encode(t))
                }
                getDataFee() {
                    return zn(this)
                }
                getUpfrontCost() {
                    return this.gasLimit * this.gasPrice + this.value
                }
                hash() {
                    return Vr(this)
                }
                getMessageToVerifySignature() {
                    if (!this.isSigned()) {
                        const t = this._errorMsg("This transaction is not signed");
                        throw new Error(t)
                    }
                    return this.getHashedMessageToSign()
                }
                getSenderPublicKey() {
                    return Wr(this)
                }
                _processSignature(t, i, g) {
                    this.supports(wr.EIP155ReplayProtection) && (t += this.common.chainId() * Ye + mt);
                    const L = { ...this.txOptions,
                        common: this.common
                    };
                    return Pr.fromTxData({
                        nonce: this.nonce,
                        gasPrice: this.gasPrice,
                        gasLimit: this.gasLimit,
                        to: this.to,
                        value: this.value,
                        data: this.data,
                        v: t,
                        r: K(i),
                        s: K(g)
                    }, L)
                }
                toJSON() {
                    return { ...super.toJSON(),
                        gasPrice: le(this.gasPrice)
                    }
                }
                _validateTxV(t, i) {
                    let g;
                    const L = void 0 !== t ? Number(t) : void 0;
                    if (void 0 !== L && L < 37 && 27 !== L && 28 !== L) throw new Error(`Legacy txs need either v = 27/28 or v >= 37 (EIP-155 replay protection), got v = ${L}`);
                    if (void 0 !== L && 0 !== L && (!i || i.gteHardfork("spuriousDragon")) && 27 !== L && 28 !== L)
                        if (i) {
                            if (!Zn(BigInt(L), i.chainId())) throw new Error(`Incompatible EIP155-based V ${L} and chain id ${i.chainId()}. See the Common parameter of the Transaction constructor to set the chain id.`)
                        } else {
                            let X;
                            X = (L - 35) % 2 == 0 ? 35 : 36, g = BigInt(L - X) / Ye
                        }
                    return this._getCommon(i, g)
                }
                errorStr() {
                    let t = this._getSharedErrorPostfix();
                    return t += ` gasPrice=${this.gasPrice}`, t
                }
                _errorMsg(t) {
                    return Ar(this, t)
                }
            }
            class Yr {
                constructor() {}
                static fromTxData(t, i = {}) {
                    if (!("type" in t) || void 0 === t.type) return Pr.fromTxData(t, i);
                    if (function Yi(n) {
                            return Number(K(Ae(n.type))) === Vt.Legacy
                        }(t)) return Pr.fromTxData(t, i);
                    if (function qi(n) {
                            return Number(K(Ae(n.type))) === Vt.AccessListEIP2930
                        }(t)) return Or.fromTxData(t, i);
                    if (function Xi(n) {
                            return Number(K(Ae(n.type))) === Vt.FeeMarketEIP1559
                        }(t)) return Br.fromTxData(t, i);
                    if (function Ji(n) {
                            return Number(K(Ae(n.type))) === Vt.BlobEIP4844
                        }(t)) return _r.fromTxData(t, i);
                    throw new Error(`Tx instantiation with type ${t?.type} not supported`)
                }
                static fromSerializedData(t, i = {}) {
                    if (!(t[0] <= 127)) return Pr.fromSerializedTx(t, i);
                    switch (t[0]) {
                        case Vt.AccessListEIP2930:
                            return Or.fromSerializedTx(t, i);
                        case Vt.FeeMarketEIP1559:
                            return Br.fromSerializedTx(t, i);
                        case Vt.BlobEIP4844:
                            return _r.fromSerializedTx(t, i);
                        default:
                            throw new Error(`TypedTransaction with ID ${t[0]} unknown`)
                    }
                }
                static fromBlockBodyData(t, i = {}) {
                    if (t instanceof Uint8Array) return this.fromSerializedData(t, i);
                    if (Array.isArray(t)) return Pr.fromValuesArray(t, i);
                    throw new Error("Cannot decode transaction: unknown type input")
                }
                static fromJsonRpcProvider(t, i, g) {
                    return (0, s.Z)(function*() {
                        const L = (n => {
                                if ("string" == typeof n) return n;
                                if ("object" == typeof n && void 0 !== n._getConnection) return n._getConnection().url;
                                throw new Error("Must provide valid provider URL or Web3Provider")
                            })(t),
                            X = yield Si(L, {
                                method: "eth_getTransactionByHash",
                                params: [i]
                            });
                        if (null === X) throw new Error("No data returned from provider");
                        return Yr.fromRPC(X, g)
                    })()
                }
                static fromRPC(t, i = {}) {
                    return (0, s.Z)(function*() {
                        return Yr.fromTxData((n => {
                            const t = Object.assign({}, n);
                            return t.gasLimit = Nr(t.gasLimit ? ? t.gas, xr.BigInt), t.data = void 0 === t.data ? t.input : t.data, t.gasPrice = void 0 !== t.gasPrice ? BigInt(t.gasPrice) : void 0, t.value = void 0 !== t.value ? BigInt(t.value) : void 0, t.to = null != t.to ? yt(Ae(t.to), 20) : null, t.v = "0x0" === t.v ? "0x" : t.v, t.r = "0x0" === t.r ? "0x" : t.r, t.s = "0x0" === t.s ? "0x" : t.s, ("0x" !== t.v || "0x" !== t.r || "0x" !== t.s) && (t.v = Nr(t.v, xr.BigInt)), t
                        })(t), i)
                    })()
                }
            }
            var Jn, cr = A(52561),
                $n = A(35199),
                ra = A(5936),
                hr = A.n(ra),
                na = A(75725),
                nr = A(24138),
                ia = A(62662),
                qr = A.n(ia);

            function Vn(n) {
                return 42 === n.length
            }

            function aa(n) {
                let {
                    getAccounts: t,
                    getPrivateKey: i,
                    processDecryptMessage: g,
                    processEncryptionPublicKey: L,
                    processEthSignMessage: X,
                    processPersonalMessage: be,
                    processTransaction: Pe,
                    processSignTransaction: Ue,
                    processTypedMessage: Je,
                    processTypedMessageV3: Xe,
                    processTypedMessageV4: ot
                } = n;
                if (!t) throw new Error("opts.getAccounts is required");

                function Lt(ft, kt) {
                    return Xt.apply(this, arguments)
                }

                function Xt() {
                    return (Xt = (0, s.Z)(function*(ft, kt) {
                        if ("string" == typeof ft && ft.length > 0) {
                            const ur = (yield t(kt)).map(or => or.toLowerCase()),
                                fr = ft.toLowerCase();
                            if (ur.includes(fr)) return fr
                        }
                        throw B.PY.invalidParams({
                            message: "Invalid parameters: must provide an Ethereum address."
                        })
                    })).apply(this, arguments)
                }

                function Jt() {
                    return (Jt = (0, s.Z)(function*(ft, kt) {
                        kt.result = yield t(ft)
                    })).apply(this, arguments)
                }

                function vr() {
                    return (vr = (0, s.Z)(function*(ft, kt) {
                        const $t = yield t(ft);
                        kt.result = $t[0] || null
                    })).apply(this, arguments)
                }

                function jr() {
                    return (jr = (0, s.Z)(function*(ft, kt) {
                        if (!Pe) throw B.PY.methodNotSupported();
                        const $t = ft.params[0] || {
                            from: ""
                        };
                        $t.from = yield Lt($t.from, ft), kt.result = yield Pe($t, ft)
                    })).apply(this, arguments)
                }

                function gr() {
                    return (gr = (0, s.Z)(function*(ft, kt) {
                        if (!Ue) throw B.PY.methodNotSupported();
                        const $t = ft.params[0] || {
                            from: ""
                        };
                        $t.from = yield Lt($t.from, ft), kt.result = yield Ue($t, ft)
                    })).apply(this, arguments)
                }

                function In() {
                    return (In = (0, s.Z)(function*(ft, kt) {
                        if (!X) throw B.PY.methodNotSupported();
                        const $t = yield Lt(ft.params[0], ft), ur = ft.params[1], or = (0, d.Z)((0, d.Z)({}, ft.params[2] || {}), {}, {
                            from: $t,
                            data: ur
                        });
                        kt.result = yield X(or, ft)
                    })).apply(this, arguments)
                }

                function Bn() {
                    return (Bn = (0, s.Z)(function*(ft, kt) {
                        if (!Je) throw B.PY.methodNotSupported();
                        const $t = ft.params[0],
                            ur = yield Lt(ft.params[1], ft), zr = (0, d.Z)((0, d.Z)({}, ft.params[2] || {}), {}, {
                                from: ur,
                                data: $t
                            });
                        kt.result = yield Je(zr, ft, "V1")
                    })).apply(this, arguments)
                }

                function On() {
                    return (On = (0, s.Z)(function*(ft, kt) {
                        if (!Xe) throw B.PY.methodNotSupported();
                        const $t = yield Lt(ft.params[0], ft), or = {
                            data: ft.params[1],
                            from: $t,
                            version: "V3"
                        };
                        kt.result = yield Xe(or, ft, "V3")
                    })).apply(this, arguments)
                }

                function Rn() {
                    return (Rn = (0, s.Z)(function*(ft, kt) {
                        if (!ot) throw B.PY.methodNotSupported();
                        const $t = yield Lt(ft.params[0], ft), or = {
                            data: ft.params[1],
                            from: $t,
                            version: "V4"
                        };
                        kt.result = yield ot(or, ft, "V4")
                    })).apply(this, arguments)
                }

                function Ln() {
                    return (Ln = (0, s.Z)(function*(ft, kt) {
                        if (!be) throw B.PY.methodNotSupported();
                        const $t = ft.params[0],
                            ur = ft.params[1],
                            fr = ft.params[2] || {};
                        let or, zr;
                        if (Vn($t) && !Vn(ur)) {
                            let Qr = "The eth_personalSign method requires params ordered ";
                            Qr += "[message, address]. This was previously handled incorrectly, ", Qr += "and has been corrected automatically. ", Qr += "Please switch this param order for smooth behavior in the future.", kt.warning = Qr, or = $t, zr = ur
                        } else zr = $t, or = ur;
                        or = yield Lt(or, ft);
                        const Ta = (0, d.Z)((0, d.Z)({}, fr), {}, {
                            from: or,
                            data: zr
                        });
                        kt.result = yield be(Ta, ft)
                    })).apply(this, arguments)
                }

                function Nn() {
                    return (Nn = (0, s.Z)(function*(ft, kt) {
                        if (!L) throw B.PY.methodNotSupported();
                        const $t = yield Lt(ft.params[0], ft);
                        kt.result = yield L($t, ft)
                    })).apply(this, arguments)
                }

                function Cn() {
                    return (Cn = (0, s.Z)(function*(ft, kt) {
                        if (!g) throw B.PY.methodNotSupported();
                        const $t = ft.params[0],
                            ur = yield Lt(ft.params[1], ft), or = (0, d.Z)((0, d.Z)({}, ft.params[2] || {}), {}, {
                                from: ur,
                                data: $t
                            });
                        kt.result = g(or, ft)
                    })).apply(this, arguments)
                }

                function fi(ft, kt) {
                    return kn.apply(this, arguments)
                }

                function kn() {
                    return (kn = (0, s.Z)(function*(ft, kt) {
                        if (!i) throw B.PY.methodNotSupported();
                        kt.result = i(ft)
                    })).apply(this, arguments)
                }
                return (0, u.v0)({
                    eth_accounts: (0, u.Pk)(function er(ft, kt) {
                        return Jt.apply(this, arguments)
                    }),
                    eth_private_key: (0, u.Pk)(fi),
                    private_key: (0, u.Pk)(fi),
                    eth_coinbase: (0, u.Pk)(function br(ft, kt) {
                        return vr.apply(this, arguments)
                    }),
                    eth_sendTransaction: (0, u.Pk)(function Mr(ft, kt) {
                        return jr.apply(this, arguments)
                    }),
                    eth_signTransaction: (0, u.Pk)(function zt(ft, kt) {
                        return gr.apply(this, arguments)
                    }),
                    eth_sign: (0, u.Pk)(function Tn(ft, kt) {
                        return In.apply(this, arguments)
                    }),
                    eth_signTypedData: (0, u.Pk)(function wa(ft, kt) {
                        return Bn.apply(this, arguments)
                    }),
                    eth_signTypedData_v3: (0, u.Pk)(function Ea(ft, kt) {
                        return On.apply(this, arguments)
                    }),
                    eth_signTypedData_v4: (0, u.Pk)(function _a(ft, kt) {
                        return Rn.apply(this, arguments)
                    }),
                    personal_sign: (0, u.Pk)(function Sa(ft, kt) {
                        return Ln.apply(this, arguments)
                    }),
                    eth_getEncryptionPublicKey: (0, u.Pk)(function Aa(ft, kt) {
                        return Nn.apply(this, arguments)
                    }),
                    eth_decrypt: (0, u.Pk)(function Pa(ft, kt) {
                        return Cn.apply(this, arguments)
                    })
                })
            }

            function Kn(n) {
                const {
                    getAccounts: t,
                    getPrivateKey: i,
                    processTransaction: g,
                    processSignTransaction: L,
                    processEthSignMessage: X,
                    processTypedMessage: be,
                    processTypedMessageV3: Pe,
                    processTypedMessageV4: Ue,
                    processPersonalMessage: Je,
                    processEncryptionPublicKey: Xe,
                    processDecryptMessage: ot
                } = n;
                return (0, u.UZ)([(0, u.v0)({
                    eth_syncing: !1
                }), aa({
                    getAccounts: t,
                    getPrivateKey: i,
                    processTransaction: g,
                    processEthSignMessage: X,
                    processSignTransaction: L,
                    processTypedMessage: be,
                    processTypedMessageV3: Pe,
                    processTypedMessageV4: Ue,
                    processPersonalMessage: Je,
                    processEncryptionPublicKey: Xe,
                    processDecryptMessage: ot
                })])
            }

            function Wn(n) {
                let {
                    addChain: t,
                    switchChain: i
                } = n;

                function L() {
                    return (L = (0, s.Z)(function*(Pe, Ue) {
                        var Je;
                        const Xe = null !== (Je = Pe.params) && void 0 !== Je && Je.length ? Pe.params[0] : void 0;
                        if (!Xe) throw B.PY.invalidParams("Missing chain params");
                        if (!Xe.chainId) throw B.PY.invalidParams("Missing chainId in chainParams");
                        if (!Xe.rpcUrls || 0 === Xe.rpcUrls.length) throw B.PY.invalidParams("Missing rpcUrls in chainParams");
                        if (!Xe.nativeCurrency) throw B.PY.invalidParams("Missing nativeCurrency in chainParams");
                        Ue.result = yield t(Xe)
                    })).apply(this, arguments)
                }

                function be() {
                    return (be = (0, s.Z)(function*(Pe, Ue) {
                        var Je;
                        const Xe = null !== (Je = Pe.params) && void 0 !== Je && Je.length ? Pe.params[0] : void 0;
                        if (!Xe) throw B.PY.invalidParams("Missing chainId");
                        Ue.result = yield i(Xe)
                    })).apply(this, arguments)
                }
                return (0, u.v0)({
                    wallet_addEthereumChain: (0, u.Pk)(function g(Pe, Ue) {
                        return L.apply(this, arguments)
                    }),
                    wallet_switchEthereumChain: (0, u.Pk)(function X(Pe, Ue) {
                        return be.apply(this, arguments)
                    })
                })
            }

            function sa(n) {
                return (t, i, g, L) => "eth_chainId" === t.method ? (i.result = n, L()) : g()
            }

            function fa(n) {
                return (t, i, g, L) => "eth_provider_config" === t.method ? (i.result = n, L()) : g()
            }

            function Yn(n) {
                const {
                    chainId: t,
                    rpcTarget: i
                } = n, g = (0, R.v$)({
                    rpcTarget: i
                });
                return {
                    networkMiddleware: (0, u.UZ)([sa(t), fa(n), g]),
                    fetchMiddleware: g
                }
            }

            function qn(n) {
                return yn.apply(this, arguments)
            }

            function yn() {
                return (yn = (0, s.Z)(function*(n) {
                    return n.session.length ? n.session.get(n.session.keys[n.session.keys.length - 1]) : null
                })).apply(this, arguments)
            }

            function Rr(n, t, i, g) {
                return pn.apply(this, arguments)
            }

            function pn() {
                return (pn = (0, s.Z)(function*(n, t, i, g) {
                    const L = yield qn(n);
                    if (!L) throw B.gK.disconnected();
                    return n.request({
                        topic: L.topic,
                        chainId: `eip155:${t}`,
                        request: {
                            method: i,
                            params: g
                        }
                    })
                })).apply(this, arguments)
            }

            function Xn(n) {
                return mn.apply(this, arguments)
            }

            function mn() {
                return (mn = (0, s.Z)(function*(n) {
                    const t = yield qn(n);
                    if (!t) throw B.gK.disconnected();
                    const i = (0, l.gu)(t.namespaces);
                    if (i && i.length) return [...new Set(i.map(g => (0, l.cw)(g).address))];
                    throw new Error("Failed to get accounts")
                })).apply(this, arguments)
            }
            class vn extends T.Zk {
                constructor(t) {
                    let {
                        config: i,
                        state: g,
                        connector: L
                    } = t;
                    super({
                        config: {
                            chainConfig: (0, d.Z)((0, d.Z)({}, i.chainConfig), {}, {
                                chainNamespace: p.CHAIN_NAMESPACES.EIP155
                            }),
                            skipLookupNetwork: !!i.skipLookupNetwork
                        },
                        state: (0, d.Z)((0, d.Z)({}, g || {}), {}, {
                            chainId: "loading",
                            accounts: []
                        })
                    }), (0, w.Z)(this, "connector", null), this.connector = L || null
                }
                enable() {
                    var t = this;
                    return (0, s.Z)(function*() {
                        if (!t.connector) throw B.gK.custom({
                            message: "Connector is not initialized, pass wallet connect connector in constructor",
                            code: 4902
                        });
                        return yield t.setupProvider(t.connector), t._providerEngineProxy.request({
                            method: "eth_accounts"
                        })
                    })()
                }
                setupProvider(t) {
                    var i = this;
                    return (0, s.Z)(function*() {
                        i.onConnectorStateUpdate(t), yield i.setupEngine(t)
                    })()
                }
                switchChain(t) {
                    var i = this;
                    return (0, s.Z)(function*() {
                        let {
                            chainId: g
                        } = t;
                        if (!i.connector) throw B.gK.custom({
                            message: "Connector is not initialized, pass wallet connect connector in constructor",
                            code: 4902
                        });
                        const L = i.getChainConfig(g);
                        i.configure({
                            chainConfig: L
                        }), yield i.setupEngine(i.connector), i.lookupNetwork(i.connector)
                    })()
                }
                addChain(t) {
                    var i = () => super.addChain,
                        g = this;
                    return (0, s.Z)(function*() {
                        i().call(g, t)
                    })()
                }
                lookupNetwork(t) {
                    var i = this;
                    return (0, s.Z)(function*() {
                        const g = i.config.chainConfig.chainId;
                        return i.update({
                            chainId: g
                        }), i.emit("chainChanged", g), i.emit("connect", {
                            chainId: g
                        }), i.config.chainConfig.chainId
                    })()
                }
                setupEngine(t) {
                    var i = this;
                    return (0, s.Z)(function*() {
                        const {
                            chainId: g
                        } = i.config.chainConfig, L = parseInt(g, 16), X = function ca(n) {
                            let {
                                connector: t,
                                chainId: i
                            } = n;
                            return {
                                getPrivateKey: (g = (0, s.Z)(function*() {
                                    throw B.PY.methodNotSupported()
                                }), function() {
                                    return g.apply(this, arguments)
                                }),
                                getAccounts: function() {
                                    var g = (0, s.Z)(function*(L) {
                                        return Xn(t)
                                    });
                                    return function(X) {
                                        return g.apply(this, arguments)
                                    }
                                }(),
                                processTransaction: function() {
                                    var g = (0, s.Z)(function*(L, X) {
                                        return yield Rr(t, i, "eth_sendTransaction", [L])
                                    });
                                    return function(X, be) {
                                        return g.apply(this, arguments)
                                    }
                                }(),
                                processSignTransaction: function() {
                                    var g = (0, s.Z)(function*(L, X) {
                                        return yield Rr(t, i, "eth_signTransaction", [L])
                                    });
                                    return function(X, be) {
                                        return g.apply(this, arguments)
                                    }
                                }(),
                                processEthSignMessage: function() {
                                    var g = (0, s.Z)(function*(L, X) {
                                        return yield Rr(t, i, "eth_sign", [L.from, L.data])
                                    });
                                    return function(X, be) {
                                        return g.apply(this, arguments)
                                    }
                                }(),
                                processPersonalMessage: function() {
                                    var g = (0, s.Z)(function*(L, X) {
                                        return yield Rr(t, i, "personal_sign", [L.from, L.data])
                                    });
                                    return function(X, be) {
                                        return g.apply(this, arguments)
                                    }
                                }(),
                                processTypedMessage: function() {
                                    var g = (0, s.Z)(function*(L, X) {
                                        return yield Rr(t, i, "eth_signTypedData", [L.data, L.from])
                                    });
                                    return function(X, be) {
                                        return g.apply(this, arguments)
                                    }
                                }(),
                                processTypedMessageV3: function() {
                                    var g = (0, s.Z)(function*(L) {
                                        return yield Rr(t, i, "eth_signTypedData_v3", [L.from, L.data])
                                    });
                                    return function(X) {
                                        return g.apply(this, arguments)
                                    }
                                }(),
                                processTypedMessageV4: function() {
                                    var g = (0, s.Z)(function*(L) {
                                        return yield Rr(t, i, "eth_signTypedData_v4", [L.from, L.data])
                                    });
                                    return function(X) {
                                        return g.apply(this, arguments)
                                    }
                                }(),
                                processEncryptionPublicKey: function() {
                                    var g = (0, s.Z)(function*(L) {
                                        throw B.PY.methodNotSupported()
                                    });
                                    return function(X) {
                                        return g.apply(this, arguments)
                                    }
                                }(),
                                processDecryptMessage: g => {
                                    throw B.PY.methodNotSupported()
                                }
                            };
                            var g
                        }({
                            connector: t,
                            chainId: L
                        }), be = yield Xn(t);
                        i.update({
                            accounts: be || []
                        });
                        const Pe = Kn(X),
                            Ue = i.getChainSwitchMiddleware(),
                            Je = new u.eI,
                            {
                                networkMiddleware: Xe
                            } = Yn(i.config.chainConfig);
                        Je.push(Pe), Je.push(Ue), Je.push(Xe);
                        const ot = (0, u.Xj)(Je);
                        i.updateProviderEngineProxy(ot)
                    })()
                }
                getChainSwitchMiddleware() {
                    var t = this;
                    const i = {
                        addChain: (L = (0, s.Z)(function*(X) {
                            const {
                                chainId: be,
                                chainName: Pe,
                                rpcUrls: Ue,
                                blockExplorerUrls: Je,
                                nativeCurrency: Xe
                            } = X;
                            t.addChain({
                                chainNamespace: p.CHAIN_NAMESPACES.EIP155,
                                chainId: be,
                                ticker: Xe ? .symbol || "ETH",
                                tickerName: Xe ? .name || "Ether",
                                displayName: Pe,
                                rpcTarget: Ue[0],
                                blockExplorer: Je ? .[0] || "",
                                decimals: Xe ? .decimals || 18
                            })
                        }), function(be) {
                            return L.apply(this, arguments)
                        }),
                        switchChain: function() {
                            var L = (0, s.Z)(function*(X) {
                                const {
                                    chainId: be
                                } = X;
                                yield t.switchChain({
                                    chainId: be
                                })
                            });
                            return function(be) {
                                return L.apply(this, arguments)
                            }
                        }()
                    };
                    var L;
                    return Wn(i)
                }
                connectedTopic() {
                    var t, i;
                    if (!this.connector) throw p.RM.notConnectedError("Wallet connect connector is not connected");
                    if (null !== (t = this.connector) && void 0 !== t && null !== (t = t.session) && void 0 !== t && t.length) return null === (i = this.connector.session.get(this.connector.session.keys[this.connector.session.keys.length - 1])) || void 0 === i ? void 0 : i.topic
                }
                checkIfChainIdAllowed(t) {
                    if (!this.connector || !this.connectedTopic()) return !1;
                    const i = this.connector.session.get(this.connectedTopic()),
                        g = (0, l.uV)(i.namespaces);
                    let L = !1;
                    for (const X of g) {
                        const be = (0, l.DQ)(X);
                        if (Number.parseInt(be.reference, 10) === Number.parseInt(t, 10)) {
                            L = !0;
                            break
                        }
                    }
                    return L
                }
                checkIfAccountAllowed(t) {
                    if (!this.connector || !this.connectedTopic()) return !1;
                    const i = this.connector.session.get(this.connectedTopic()),
                        g = (0, l.gu)(i.namespaces);
                    let L = !1;
                    for (const be of g) {
                        var X;
                        if ((null === (X = (0, l.cw)(be).address) || void 0 === X ? void 0 : X.toLowerCase()) === t ? .toLowerCase()) {
                            L = !0;
                            break
                        }
                    }
                    return L
                }
                onConnectorStateUpdate(t) {
                    var i = this;
                    return (0, s.Z)(function*() {
                        t.events.on("session_event", function() {
                            var g = (0, s.Z)(function*(L) {
                                if (p.log.debug("session_event data", L), !i.provider) throw p.RM.notConnectedError("Wallet connect connector is not connected");
                                const {
                                    event: X
                                } = L.params, {
                                    name: be,
                                    data: Pe
                                } = X || {};
                                if ("accountsChanged" === be && null != Pe && Pe.length && i.state.accounts[0] !== Pe[0] && i.checkIfAccountAllowed(Pe[0]) && (i.update({
                                        accounts: Pe
                                    }), i.emit("accountsChanged", Pe)), "chainChanged" === X.name) {
                                    const {
                                        chainId: Ue,
                                        rpcUrl: Je
                                    } = Pe, Xe = `0x${Ue.toString(16)}`;
                                    if (!i.checkIfChainIdAllowed(Xe)) return;
                                    if (Xe && i.state.chainId !== Xe) {
                                        const ot = (0, p.h2)(p.CHAIN_NAMESPACES.EIP155, Xe) || {};
                                        i.configure({
                                            chainConfig: (0, d.Z)((0, d.Z)({}, ot), {}, {
                                                chainId: Xe,
                                                rpcTarget: Je,
                                                chainNamespace: p.CHAIN_NAMESPACES.EIP155
                                            })
                                        }), yield i.setupEngine(t)
                                    }
                                }
                            });
                            return function(L) {
                                return g.apply(this, arguments)
                            }
                        }())
                    })()
                }
            }
            Jn = vn, (0, w.Z)(vn, "getProviderInstance", function() {
                var n = (0, s.Z)(function*(t) {
                    const i = new Jn({
                        config: {
                            chainConfig: t.chainConfig,
                            skipLookupNetwork: t.skipLookupNetwork
                        }
                    });
                    return yield i.setupProvider(t.connector), i
                });
                return function(t) {
                    return n.apply(this, arguments)
                }
            }());
            const Qn = new nr.Z("1e18"),
                ei = new nr.Z("1e9"),
                ti = new nr.Z("1"),
                ua = {
                    hex: n => new nr.Z("string" == typeof n ? J(n) : n, 16),
                    dec: n => new nr.Z(n, 10)
                },
                da = {
                    WEI: n => n.div(Qn),
                    GWEI: n => n.div(ei),
                    ETH: n => n.div(ti)
                },
                la = {
                    WEI: n => n.times(Qn).dp(0, nr.Z.ROUND_HALF_UP),
                    GWEI: n => n.times(ei).dp(9, nr.Z.ROUND_HALF_UP),
                    ETH: n => n.times(ti).dp(9, nr.Z.ROUND_HALF_UP)
                },
                ha = {
                    hex: n => n.toString(16),
                    dec: n => new nr.Z(n).toString(10)
                },
                ri = (n, t) => {
                    let {
                        fromNumericBase: i = "hex",
                        toNumericBase: g,
                        fromDenomination: L,
                        toDenomination: X,
                        numberOfDecimals: be
                    } = t;
                    return (n => {
                        const {
                            value: t,
                            fromNumericBase: i,
                            fromDenomination: g,
                            toNumericBase: L,
                            toDenomination: X,
                            numberOfDecimals: be
                        } = n;
                        let Pe = ua[i](t);
                        return g && (Pe = da[g](Pe)), X && (Pe = la[X](Pe)), be && (Pe = Pe.dp(be, nr.Z.ROUND_HALF_DOWN)), L && (Pe = ha[L](Pe)), Pe
                    })({
                        fromNumericBase: i,
                        toNumericBase: g,
                        fromDenomination: L,
                        toDenomination: X,
                        numberOfDecimals: be,
                        value: n || "0"
                    })
                };

            function Cr(n) {
                return ri(n, {
                    fromNumericBase: "dec",
                    toNumericBase: "hex",
                    fromDenomination: "GWEI",
                    toDenomination: "WEI"
                })
            }

            function Sr(n) {
                return ri(n, {
                    fromNumericBase: "hex",
                    toNumericBase: "dec",
                    fromDenomination: "WEI",
                    toDenomination: "GWEI"
                })
            }

            function Lr(n) {
                return Sr(Cr(n)).toString()
            }

            function wn() {
                return (wn = (0, s.Z)(function*(n) {
                    const t = yield(0, $n.U2)(n);
                    return (0, d.Z)((0, d.Z)({}, t), {}, {
                        estimatedBaseFee: Lr(t.estimatedBaseFee),
                        low: (0, d.Z)((0, d.Z)({}, t.low), {}, {
                            suggestedMaxPriorityFeePerGas: Lr(t.low.suggestedMaxPriorityFeePerGas),
                            suggestedMaxFeePerGas: Lr(t.low.suggestedMaxFeePerGas)
                        }),
                        medium: (0, d.Z)((0, d.Z)({}, t.medium), {}, {
                            suggestedMaxPriorityFeePerGas: Lr(t.medium.suggestedMaxPriorityFeePerGas),
                            suggestedMaxFeePerGas: Lr(t.medium.suggestedMaxFeePerGas)
                        }),
                        high: (0, d.Z)((0, d.Z)({}, t.high), {}, {
                            suggestedMaxPriorityFeePerGas: Lr(t.high.suggestedMaxPriorityFeePerGas),
                            suggestedMaxFeePerGas: Lr(t.high.suggestedMaxFeePerGas)
                        })
                    })
                })).apply(this, arguments)
            }

            function xa(n) {
                return En.apply(this, arguments)
            }

            function En() {
                return (En = (0, s.Z)(function*(n) {
                    const t = yield(0, $n.U2)(n, {
                        referrer: n,
                        referrerPolicy: "no-referrer-when-downgrade",
                        method: "GET",
                        mode: "cors"
                    });
                    return {
                        low: t.SafeGasPrice,
                        medium: t.ProposeGasPrice,
                        high: t.FastGasPrice
                    }
                })).apply(this, arguments)
            }
            const _n = (n, t) => {
                try {
                    hr().ok(n && "object" == typeof n, "Params must be an object."), hr().ok("data" in n, 'Params must include a "data" field.'), hr().ok("from" in n, 'Params must include a "from" field.'), hr().ok("string" == typeof n.from && Pt(n.from), '"from" field must be a valid, lowercase, hexadecimal Ethereum address string.');
                    let g = null,
                        L = null;
                    switch (n.version) {
                        case cr.SignTypedDataVersion.V1:
                            "string" == typeof n.data ? hr().doesNotThrow(() => {
                                g = JSON.parse(n.data)
                            }, '"data" must be a valid JSON string.') : g = n.data, hr().ok(Array.isArray(g), "params.data must be an array."), hr().doesNotThrow(() => {
                                (0, cr.typedSignatureHash)(g)
                            }, "Signing data must be valid EIP-712 typed data.");
                            break;
                        case cr.SignTypedDataVersion.V3:
                        case cr.SignTypedDataVersion.V4:
                            {
                                var i;
                                "string" == typeof n.data ? hr().doesNotThrow(() => {
                                    g = JSON.parse(n.data)
                                }, '"data" must be a valid JSON string.') : g = n.data;
                                const X = g;hr().ok(X.primaryType in X.types, `Primary type of "${X.primaryType}" has no type definition.`);
                                const be = na.validate(X, cr.TYPED_MESSAGE_SCHEMA.properties);hr().strictEqual(be.errors.length, 0, "Signing data must conform to EIP-712 schema. See https://git.io/fNtcx."),
                                L = null === (i = X.domain) || void 0 === i ? void 0 : i.chainId,
                                L && (hr().ok(!Number.isNaN(t), `Cannot sign messages for chainId "${L}", because Web3Auth is switching networks.`), "string" == typeof L && (L = Number.parseInt(L, (0, p.H2)(L) ? 16 : 10)), hr().strictEqual(L, t, `Provided chainId "${L}" must match the active chainId "${t}"`));
                                break
                            }
                        default:
                            hr().fail(`Unknown typed data version "${n.version}"`)
                    }
                } catch (g) {
                    throw B.PY.invalidInput({
                        message: g ? .message
                    })
                }
            };

            function ni(n, t, i) {
                return Sn.apply(this, arguments)
            }

            function Sn() {
                return (Sn = (0, s.Z)(function*(n, t, i) {
                    const g = yield i.formatTransaction(n), L = yield i.getCommonConfiguration(), be = Yr.fromTxData(g, {
                        common: L
                    }).sign(Buffer.from(t, "hex")).serialize();
                    return Buffer.from(be)
                })).apply(this, arguments)
            }

            function ii(n) {
                let {
                    txFormatter: t,
                    privKey: i,
                    getProviderEngineProxy: g
                } = n;
                return {
                    getAccounts: (L = (0, s.Z)(function*(X) {
                        return [`0x${Buffer.from(Ut(Buffer.from(i,"hex"))).toString("hex")}`]
                    }), function(be) {
                        return L.apply(this, arguments)
                    }),
                    getPrivateKey: function() {
                        var L = (0, s.Z)(function*(X) {
                            return i
                        });
                        return function(be) {
                            return L.apply(this, arguments)
                        }
                    }(),
                    processTransaction: function() {
                        var L = (0, s.Z)(function*(X, be) {
                            const Pe = g();
                            if (!Pe) throw B.gK.custom({
                                message: "Provider is not initialized",
                                code: 4902
                            });
                            X.input && !X.data && (X.data = X.input);
                            const Ue = yield ni(X, i, t);
                            return yield Pe.request({
                                method: "eth_sendRawTransaction",
                                params: ["0x".concat(Ue.toString("hex"))]
                            })
                        });
                        return function(be, Pe) {
                            return L.apply(this, arguments)
                        }
                    }(),
                    processSignTransaction: function() {
                        var L = (0, s.Z)(function*(X, be) {
                            if (!g()) throw B.gK.custom({
                                message: "Provider is not initialized",
                                code: 4902
                            });
                            return X.input && !X.data && (X.data = X.input), `0x${(yield ni(X,i,t)).toString("hex")}`
                        });
                        return function(be, Pe) {
                            return L.apply(this, arguments)
                        }
                    }(),
                    processEthSignMessage: function() {
                        var L = (0, s.Z)(function*(X, be) {
                            return (0, R.l)(i, X.data)
                        });
                        return function(be, Pe) {
                            return L.apply(this, arguments)
                        }
                    }(),
                    processPersonalMessage: function() {
                        var L = (0, s.Z)(function*(X, be) {
                            const Pe = Buffer.from(i, "hex");
                            return (0, cr.personalSign)({
                                privateKey: Pe,
                                data: X.data
                            })
                        });
                        return function(be, Pe) {
                            return L.apply(this, arguments)
                        }
                    }(),
                    processTypedMessage: function() {
                        var L = (0, s.Z)(function*(X, be) {
                            p.log.debug("processTypedMessage", X);
                            const Pe = Buffer.from(i, "hex"),
                                Ue = g();
                            if (!Ue) throw B.gK.custom({
                                message: "Provider is not initialized",
                                code: 4902
                            });
                            const Je = yield Ue.request({
                                method: "eth_chainId"
                            }), Xe = Number.parseInt(Je, (0, p.H2)(Je) ? 16 : 10), ot = (0, d.Z)((0, d.Z)({}, X), {}, {
                                version: cr.SignTypedDataVersion.V1
                            });
                            _n(ot, Xe);
                            const Lt = "string" == typeof ot.data ? JSON.parse(ot.data) : ot.data;
                            return (0, cr.signTypedData)({
                                privateKey: Pe,
                                data: Lt,
                                version: cr.SignTypedDataVersion.V1
                            })
                        });
                        return function(be, Pe) {
                            return L.apply(this, arguments)
                        }
                    }(),
                    processTypedMessageV3: function() {
                        var L = (0, s.Z)(function*(X, be) {
                            p.log.debug("processTypedMessageV3", X);
                            const Pe = Buffer.from(i, "hex"),
                                Ue = g();
                            if (!Ue) throw B.gK.custom({
                                message: "Provider is not initialized",
                                code: 4902
                            });
                            const Je = yield Ue.request({
                                method: "eth_chainId"
                            }), Xe = Number.parseInt(Je, (0, p.H2)(Je) ? 16 : 10);
                            _n(X, Xe);
                            const ot = "string" == typeof X.data ? JSON.parse(X.data) : X.data;
                            return (0, cr.signTypedData)({
                                privateKey: Pe,
                                data: ot,
                                version: cr.SignTypedDataVersion.V3
                            })
                        });
                        return function(be, Pe) {
                            return L.apply(this, arguments)
                        }
                    }(),
                    processTypedMessageV4: function() {
                        var L = (0, s.Z)(function*(X, be) {
                            p.log.debug("processTypedMessageV4", X);
                            const Pe = Buffer.from(i, "hex"),
                                Ue = g();
                            if (!Ue) throw B.gK.custom({
                                message: "Provider is not initialized",
                                code: 4902
                            });
                            const Je = yield Ue.request({
                                method: "eth_chainId"
                            }), Xe = Number.parseInt(Je, (0, p.H2)(Je) ? 16 : 10);
                            _n(X, Xe);
                            const ot = "string" == typeof X.data ? JSON.parse(X.data) : X.data;
                            return (0, cr.signTypedData)({
                                privateKey: Pe,
                                data: ot,
                                version: cr.SignTypedDataVersion.V4
                            })
                        });
                        return function(be, Pe) {
                            return L.apply(this, arguments)
                        }
                    }(),
                    processEncryptionPublicKey: function() {
                        var L = (0, s.Z)(function*(X, be) {
                            return p.log.info("processEncryptionPublicKey", X), (0, cr.getEncryptionPublicKey)(i)
                        });
                        return function(be, Pe) {
                            return L.apply(this, arguments)
                        }
                    }(),
                    processDecryptMessage: (L, X) => {
                        p.log.info("processDecryptMessage", L);
                        const be = J(L.data),
                            Pe = Buffer.from(be, "hex");
                        return (0, cr.decrypt)({
                            encryptedData: JSON.parse(Pe.toString("utf8")),
                            privateKey: i
                        })
                    }
                };
                var L
            }

            function Xr(n) {
                return j(n.toString(16))
            }

            function An(n) {
                return qr().isBN(n) ? n : new(qr())(J(n), 16)
            }
            class oi {
                constructor(t) {
                    let {
                        getProviderEngineProxy: i
                    } = t;
                    (0, w.Z)(this, "API_SUPPORTED_CHAINIDS", new Set(["0x1", "0x5", "0x13881", "0xa4b1", "0xa86a", "0x2105", "0x38", "0xfa", "0xa", "0x89"])), (0, w.Z)(this, "chainConfig", null), (0, w.Z)(this, "getProviderEngineProxy", void 0), (0, w.Z)(this, "isEIP1559Compatible", !1), this.getProviderEngineProxy = i
                }
                get providerProxy() {
                    return this.getProviderEngineProxy()
                }
                init() {
                    var t = this;
                    return (0, s.Z)(function*() {
                        t.chainConfig = yield t.providerProxy.request({
                            method: "eth_provider_config"
                        }), t.isEIP1559Compatible = yield t.getEIP1559Compatibility()
                    })()
                }
                getCommonConfiguration() {
                    var t = this;
                    return (0, s.Z)(function*() {
                        if (!t.chainConfig) throw new Error("Chain config not initialized");
                        const {
                            displayName: i,
                            chainId: g
                        } = t.chainConfig, L = t.isEIP1559Compatible ? pt.Paris : pt.Berlin, X = {
                            name: i,
                            chainId: "loading" === g ? 0 : Number.parseInt(g, 16),
                            networkId: "loading" === g ? 0 : Number.parseInt(g, 16),
                            defaultHardfork: L
                        };
                        return sr.custom(X)
                    })()
                }
                formatTransaction(t) {
                    var i = this;
                    return (0, s.Z)(function*() {
                        if (!i.chainConfig) throw new Error("Chain config not initialized");
                        const g = (0, d.Z)({}, t);
                        if (void 0 === g.nonce && (g.nonce = yield i.providerProxy.request({
                                method: "eth_getTransactionCount",
                                params: [t.from, "latest"]
                            })), !i.isEIP1559Compatible && g.gasPrice) {
                            if (g.maxFeePerGas && delete g.maxFeePerGas, g.maxPriorityFeePerGas && delete g.maxPriorityFeePerGas, !g.gasLimit)
                                if (g.gas) g.gasLimit = g.gas;
                                else {
                                    const Pe = yield i.getDefaultGasLimit(g);
                                    Pe && (g.gasLimit = Pe)
                                }
                            return g
                        }
                        if (!g.gasLimit)
                            if (g.gas) g.gasLimit = g.gas;
                            else {
                                const Pe = yield i.getDefaultGasLimit(g);
                                Pe && (g.gasLimit = Pe)
                            }
                        const {
                            gasPrice: L,
                            maxFeePerGas: X,
                            maxPriorityFeePerGas: be
                        } = yield i.getDefaultGasFees(g);
                        return i.isEIP1559Compatible ? (!g.gasPrice || g.maxFeePerGas || g.maxPriorityFeePerGas ? (X && !g.maxFeePerGas && (g.maxFeePerGas = X), be && !g.maxPriorityFeePerGas && (g.maxPriorityFeePerGas = be), L && !g.maxFeePerGas && (g.maxFeePerGas = L), g.maxFeePerGas && !g.maxPriorityFeePerGas && (g.maxPriorityFeePerGas = g.maxFeePerGas)) : (g.maxFeePerGas = g.gasPrice, g.maxPriorityFeePerGas = function ya(n, t) {
                            return null == n || null == t ? null : new nr.O(n, 10).lt(t, 10)
                        }("string" == typeof be ? J(be) : be, "string" == typeof g.gasPrice ? J(g.gasPrice) : g.gasPrice) ? be : g.gasPrice), delete g.gasPrice) : (delete g.maxPriorityFeePerGas, delete g.maxFeePerGas), L && !g.gasPrice && !g.maxPriorityFeePerGas && !g.maxFeePerGas && (g.gasPrice = L), g.type = i.isEIP1559Compatible ? "0x2" : "0x0", g.chainId = i.chainConfig.chainId, g
                    })()
                }
                fetchEthGasPriceEstimate() {
                    var t = this;
                    return (0, s.Z)(function*() {
                        return {
                            gasPrice: Sr(yield t.providerProxy.request({
                                method: "eth_gasPrice",
                                params: []
                            })).toString()
                        }
                    })()
                }
                fetchGasEstimatesViaEthFeeHistory() {
                    var t = this;
                    return (0, s.Z)(function*() {
                        const X = yield t.providerProxy.request({
                            method: "eth_feeHistory",
                            params: [10, "latest", [10, 50, 95]]
                        }), be = X.baseFeePerGas[X.baseFeePerGas.length - 1], Pe = X.reward.reduce((Ue, Je) => ({
                            slow: Ue.slow.plus(new nr.Z(Je[0], 16)),
                            average: Ue.average.plus(new nr.Z(Je[1], 16)),
                            fast: Ue.fast.plus(new nr.Z(Je[2], 16))
                        }), {
                            slow: new nr.Z(0),
                            average: new nr.Z(0),
                            fast: new nr.Z(0)
                        });
                        return {
                            estimatedBaseFee: Sr(be).toString(),
                            high: {
                                maxWaitTimeEstimate: 3e4,
                                minWaitTimeEstimate: 15e3,
                                suggestedMaxFeePerGas: Sr(Pe.fast.plus(be).toString(16)).toString(),
                                suggestedMaxPriorityFeePerGas: Sr(Pe.fast.toString(16)).toString()
                            },
                            medium: {
                                maxWaitTimeEstimate: 45e3,
                                minWaitTimeEstimate: 15e3,
                                suggestedMaxFeePerGas: Sr(Pe.average.plus(be).toString(16)).toString(),
                                suggestedMaxPriorityFeePerGas: Sr(Pe.average.toString(16)).toString()
                            },
                            low: {
                                maxWaitTimeEstimate: 6e4,
                                minWaitTimeEstimate: 15e3,
                                suggestedMaxFeePerGas: Sr(Pe.slow.plus(be).toString(16)).toString(),
                                suggestedMaxPriorityFeePerGas: Sr(Pe.slow.toString(16)).toString()
                            }
                        }
                    })()
                }
                getEIP1559Compatibility() {
                    var t = this;
                    return (0, s.Z)(function*() {
                        const i = yield t.providerProxy.request({
                            method: "eth_getBlockByNumber",
                            params: ["latest", !1]
                        });
                        return !(!i || void 0 === i.baseFeePerGas)
                    })()
                }
                fetchGasFeeEstimateData() {
                    var t = this;
                    return (0, s.Z)(function*() {
                        if (!t.chainConfig) throw new Error("Chain config not initialized");
                        const i = "0x1" === t.chainConfig.chainId,
                            g = Number.parseInt(t.chainConfig.chainId, 16);
                        let L;
                        try {
                            if (t.isEIP1559Compatible) {
                                let X;
                                try {
                                    if (!t.API_SUPPORTED_CHAINIDS.has(t.chainConfig.chainId)) throw new Error("Chain id not supported by api");
                                    X = yield function ba(n) {
                                        return wn.apply(this, arguments)
                                    }("https://gas-api.metaswap.codefi.network/networks/<chain_id>/suggestedGasFees".replace("<chain_id>", `${g}`))
                                } catch {
                                    X = yield t.fetchGasEstimatesViaEthFeeHistory()
                                }
                                L = {
                                    gasFeeEstimates: X,
                                    gasEstimateType: "fee-market"
                                }
                            } else {
                                if (!i) throw new Error("Main gas fee/price estimation failed. Use fallback");
                                L = {
                                    gasFeeEstimates: yield xa("https://gas-api.metaswap.codefi.network/networks/<chain_id>/gasPrices".replace("<chain_id>", `${g}`)), gasEstimateType: "legacy"
                                }
                            }
                        } catch {
                            try {
                                L = {
                                    gasFeeEstimates: yield t.fetchEthGasPriceEstimate(), gasEstimateType: "eth_gasPrice"
                                }
                            } catch (be) {
                                throw new Error(`Gas fee/price estimation failed. Message: ${be.message}`)
                            }
                        }
                        return L
                    })()
                }
                getDefaultGasFees(t) {
                    var i = this;
                    return (0, s.Z)(function*() {
                        if (!i.isEIP1559Compatible && t.gasPrice || i.isEIP1559Compatible && t.maxFeePerGas && t.maxPriorityFeePerGas) return {};
                        try {
                            const {
                                gasFeeEstimates: L,
                                gasEstimateType: X
                            } = yield i.fetchGasFeeEstimateData();
                            if (i.isEIP1559Compatible && "fee-market" === X) {
                                const {
                                    medium: {
                                        suggestedMaxPriorityFeePerGas: be,
                                        suggestedMaxFeePerGas: Pe
                                    } = {}
                                } = L;
                                if (be && Pe) return {
                                    maxFeePerGas: j(Cr(Pe)),
                                    maxPriorityFeePerGas: j(Cr(be))
                                }
                            } else {
                                if ("legacy" === X) return {
                                    gasPrice: j(Cr(L.medium))
                                };
                                if ("eth_gasPrice" === X) return {
                                    gasPrice: j(Cr(L.gasPrice))
                                }
                            }
                        } catch (L) {
                            p.log.error(L)
                        }
                        const {
                            gasPrice: g
                        } = yield i.fetchEthGasPriceEstimate();
                        return {
                            gasPrice: j(Cr(g))
                        }
                    })()
                }
                estimateTxGas(t) {
                    var i = this;
                    return (0, s.Z)(function*() {
                        const g = (0, d.Z)({}, t);
                        return delete g.gasPrice, delete g.maxFeePerGas, delete g.maxPriorityFeePerGas, yield i.providerProxy.request({
                            method: "eth_estimateGas",
                            params: [g]
                        })
                    })()
                }
                analyzeGasUsage(t) {
                    var i = this;
                    return (0, s.Z)(function*() {
                        const g = yield i.providerProxy.request({
                            method: "eth_getBlockByNumber",
                            params: ["latest", !1]
                        }), X = function pa(n, t, i) {
                            const g = new(qr())(t),
                                L = new(qr())(i);
                            return n.mul(g).div(L)
                        }(An(g.gasLimit), 19, 20);
                        let be = Xr(X);
                        try {
                            be = yield i.estimateTxGas(t)
                        } catch (Pe) {
                            p.log.warn(Pe)
                        }
                        return {
                            blockGasLimit: g.gasLimit,
                            estimatedGasHex: be
                        }
                    })()
                }
                addGasBuffer(t, i) {
                    let g = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1.5;
                    const L = An(t),
                        be = An(i).muln(.9),
                        Pe = L.muln(g);
                    return L.gt(be) ? Xr(L) : Pe.lt(be) ? Xr(Pe) : Xr(be)
                }
                determineTransactionCategory(t) {
                    var i = this;
                    return (0, s.Z)(function*() {
                        const {
                            data: g,
                            to: L
                        } = t;
                        let be, X = "";
                        if (g && !L) be = "contractDeployment";
                        else {
                            try {
                                X = yield i.providerProxy.request({
                                    method: "eth_getCode",
                                    params: [L, "latest"]
                                })
                            } catch (Ue) {
                                p.log.warn(Ue)
                            }
                            be = X && "0x" !== X && "0x0" !== X ? "contractInteraction" : "sentEther"
                        }
                        return {
                            transactionCategory: be,
                            code: X
                        }
                    })()
                }
                getDefaultGasLimit(t) {
                    var i = this;
                    return (0, s.Z)(function*() {
                        const {
                            transactionCategory: g
                        } = yield i.determineTransactionCategory((0, d.Z)({}, t));
                        if (t.gas) return t.gas;
                        if (t.to && "sentEther" === g) {
                            if (t.data) throw Error("TxGasUtil - Trying to call a function on a non-contract address");
                            return j(21e3.toString(16))
                        }
                        const {
                            blockGasLimit: L,
                            estimatedGasHex: X
                        } = yield i.analyzeGasUsage(t);
                        return i.addGasBuffer(j(X), L)
                    })()
                }
            }
            var si;
            class Pn extends T.Zk {
                constructor(t) {
                    let {
                        config: i,
                        state: g
                    } = t;
                    super({
                        config: {
                            chainConfig: (0, d.Z)((0, d.Z)({}, i.chainConfig), {}, {
                                chainNamespace: p.CHAIN_NAMESPACES.EIP155
                            })
                        },
                        state: g
                    })
                }
                enable() {
                    var t = this;
                    return (0, s.Z)(function*() {
                        if (!t.state.privateKey) throw B.gK.custom({
                            message: "Private key is not found in state, plz pass it in constructor state param",
                            code: 4902
                        });
                        return yield t.setupProvider(t.state.privateKey), t._providerEngineProxy.request({
                            method: "eth_accounts"
                        })
                    })()
                }
                setupProvider(t) {
                    var i = this;
                    return (0, s.Z)(function*() {
                        const g = new oi({
                                getProviderEngineProxy: i.getProviderEngineProxy.bind(i)
                            }),
                            X = Kn(ii({
                                txFormatter: g,
                                privKey: t,
                                getProviderEngineProxy: i.getProviderEngineProxy.bind(i)
                            })),
                            be = i.getChainSwitchMiddleware(),
                            Pe = new u.eI,
                            {
                                networkMiddleware: Ue
                            } = Yn(i.config.chainConfig);
                        Pe.push(X), Pe.push(be), Pe.push(i.getAccountMiddleware()), Pe.push(Ue);
                        const Je = (0, u.Xj)(Pe);
                        i.updateProviderEngineProxy(Je), yield g.init(), yield i.lookupNetwork()
                    })()
                }
                updateAccount(t) {
                    var i = this;
                    return (0, s.Z)(function*() {
                        if (!i._providerEngineProxy) throw B.gK.custom({
                            message: "Provider is not initialized",
                            code: 4902
                        });
                        (yield i._providerEngineProxy.request({
                            method: "eth_private_key"
                        })) !== t.privateKey && (yield i.setupProvider(t.privateKey), i.emit("accountsChanged", {
                            accounts: yield i._providerEngineProxy.request({
                                method: "eth_accounts"
                            })
                        }))
                    })()
                }
                switchChain(t) {
                    var i = this;
                    return (0, s.Z)(function*() {
                        if (!i._providerEngineProxy) throw B.gK.custom({
                            message: "Provider is not initialized",
                            code: 4902
                        });
                        const g = i.getChainConfig(t.chainId);
                        i.update({
                            chainId: "loading"
                        }), i.configure({
                            chainConfig: g
                        });
                        const L = yield i._providerEngineProxy.request({
                            method: "eth_private_key"
                        });
                        yield i.setupProvider(L)
                    })()
                }
                lookupNetwork() {
                    var t = this;
                    return (0, s.Z)(function*() {
                        if (!t._providerEngineProxy) throw B.gK.custom({
                            message: "Provider is not initialized",
                            code: 4902
                        });
                        const {
                            chainId: i
                        } = t.config.chainConfig;
                        if (!i) throw B.PY.invalidParams("chainId is required while lookupNetwork");
                        const g = yield t._providerEngineProxy.request({
                            method: "net_version",
                            params: []
                        });
                        if (parseInt(i, 16) !== parseInt(g, 10)) throw B.gK.chainDisconnected(`Invalid network, net_version is: ${g}`);
                        return t.state.chainId !== i && (t.emit("chainChanged", i), t.emit("connect", {
                            chainId: i
                        })), t.update({
                            chainId: i
                        }), g
                    })()
                }
                getChainSwitchMiddleware() {
                    var t = this;
                    const i = {
                        addChain: (L = (0, s.Z)(function*(X) {
                            const {
                                chainId: be,
                                chainName: Pe,
                                rpcUrls: Ue,
                                blockExplorerUrls: Je,
                                nativeCurrency: Xe
                            } = X;
                            t.addChain({
                                chainNamespace: p.CHAIN_NAMESPACES.EIP155,
                                chainId: be,
                                ticker: Xe ? .symbol || "ETH",
                                tickerName: Xe ? .name || "Ether",
                                displayName: Pe,
                                rpcTarget: Ue[0],
                                blockExplorer: Je ? .[0] || "",
                                decimals: Xe ? .decimals || 18
                            })
                        }), function(be) {
                            return L.apply(this, arguments)
                        }),
                        switchChain: function() {
                            var L = (0, s.Z)(function*(X) {
                                const {
                                    chainId: be
                                } = X;
                                yield t.switchChain({
                                    chainId: be
                                })
                            });
                            return function(be) {
                                return L.apply(this, arguments)
                            }
                        }()
                    };
                    var L;
                    return Wn(i)
                }
                getAccountMiddleware() {
                    var t = this;
                    const i = {
                        updatePrivatekey: (g = (0, s.Z)(function*(L) {
                            const {
                                privateKey: X
                            } = L;
                            yield t.updateAccount({
                                privateKey: X
                            })
                        }), function(X) {
                            return g.apply(this, arguments)
                        })
                    };
                    var g;
                    return function oa(n) {
                        let {
                            updatePrivatekey: t
                        } = n;

                        function g() {
                            return (g = (0, s.Z)(function*(L, X) {
                                var be;
                                const Pe = null !== (be = L.params) && void 0 !== be && be.length ? L.params[0] : void 0;
                                if (null == Pe || !Pe.privateKey) throw B.PY.invalidParams("Missing privateKey");
                                X.result = yield t(Pe)
                            })).apply(this, arguments)
                        }
                        return (0, u.v0)({
                            wallet_updateAccount: (0, u.Pk)(function i(L, X) {
                                return g.apply(this, arguments)
                            })
                        })
                    }(i)
                }
            }
            si = Pn, (0, w.Z)(Pn, "getProviderInstance", function() {
                var n = (0, s.Z)(function*(t) {
                    const i = new si({
                        config: {
                            chainConfig: t.chainConfig
                        }
                    });
                    return yield i.setupProvider(t.privKey), i
                });
                return function(t) {
                    return n.apply(this, arguments)
                }
            }())
        },
        5936: (ve, e, A) => {
            "use strict";

            function s(K) {
                return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(de) {
                    return typeof de
                } : function(de) {
                    return de && "function" == typeof Symbol && de.constructor === Symbol && de !== Symbol.prototype ? "symbol" : typeof de
                })(K)
            }

            function d(K, de) {
                for (var we = 0; we < de.length; we++) {
                    var Be = de[we];
                    Be.enumerable = Be.enumerable || !1, Be.configurable = !0, "value" in Be && (Be.writable = !0), Object.defineProperty(K, B(Be.key), Be)
                }
            }

            function w(K, de, we) {
                return de && d(K.prototype, de), we && d(K, we), Object.defineProperty(K, "prototype", {
                    writable: !1
                }), K
            }

            function B(K) {
                var de = function u(K, de) {
                    if ("object" !== s(K) || null === K) return K;
                    var we = K[Symbol.toPrimitive];
                    if (void 0 !== we) {
                        var Be = we.call(K, de || "default");
                        if ("object" !== s(Be)) return Be;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === de ? String : Number)(K)
                }(K, "string");
                return "symbol" === s(de) ? de : String(de)
            }
            var M, fe, T = A(73237).codes,
                R = T.ERR_AMBIGUOUS_ARGUMENT,
                v = T.ERR_INVALID_ARG_TYPE,
                y = T.ERR_INVALID_ARG_VALUE,
                x = T.ERR_INVALID_RETURN_VALUE,
                o = T.ERR_MISSING_ARGS,
                E = A(11953),
                c = A(40179).inspect,
                r = A(40179).types,
                a = r.isPromise,
                m = r.isRegExp,
                _ = A(41046)(),
                U = A(31353)(),
                S = A(41098)("RegExp.prototype.test");

            function P() {
                var K = A(20356);
                M = K.isDeepEqual, fe = K.isDeepStrictEqual
            }
            var re = !1,
                Y = ve.exports = q,
                te = {};

            function F(K) {
                throw K.message instanceof Error ? K.message : new E(K)
            }

            function V(K, de, we, Be) {
                if (!we) {
                    var he = !1;
                    if (0 === de) he = !0, Be = "No value argument passed to `assert.ok()`";
                    else if (Be instanceof Error) throw Be;
                    var We = new E({
                        actual: we,
                        expected: !0,
                        message: Be,
                        operator: "==",
                        stackStartFn: K
                    });
                    throw We.generatedMessage = he, We
                }
            }

            function q() {
                for (var K = arguments.length, de = new Array(K), we = 0; we < K; we++) de[we] = arguments[we];
                V.apply(void 0, [q, de.length].concat(de))
            }
            Y.fail = function se(K, de, we, Be, he) {
                var gt, We = arguments.length;
                if (0 === We ? gt = "Failed" : 1 === We ? (we = K, K = void 0) : (!1 === re && (re = !0, (process.emitWarning ? process.emitWarning : console.warn.bind(console))("assert.fail() with more than one argument is deprecated. Please use assert.strictEqual() instead or only pass a message.", "DeprecationWarning", "DEP0094")), 2 === We && (Be = "!=")), we instanceof Error) throw we;
                var yt = {
                    actual: K,
                    expected: de,
                    operator: void 0 === Be ? "fail" : Be,
                    stackStartFn: he || se
                };
                void 0 !== we && (yt.message = we);
                var At = new E(yt);
                throw gt && (At.message = gt, At.generatedMessage = !0), At
            }, Y.AssertionError = E, Y.ok = q, Y.equal = function K(de, we, Be) {
                if (arguments.length < 2) throw new o("actual", "expected");
                de != we && F({
                    actual: de,
                    expected: we,
                    message: Be,
                    operator: "==",
                    stackStartFn: K
                })
            }, Y.notEqual = function K(de, we, Be) {
                if (arguments.length < 2) throw new o("actual", "expected");
                de == we && F({
                    actual: de,
                    expected: we,
                    message: Be,
                    operator: "!=",
                    stackStartFn: K
                })
            }, Y.deepEqual = function K(de, we, Be) {
                if (arguments.length < 2) throw new o("actual", "expected");
                void 0 === M && P(), M(de, we) || F({
                    actual: de,
                    expected: we,
                    message: Be,
                    operator: "deepEqual",
                    stackStartFn: K
                })
            }, Y.notDeepEqual = function K(de, we, Be) {
                if (arguments.length < 2) throw new o("actual", "expected");
                void 0 === M && P(), M(de, we) && F({
                    actual: de,
                    expected: we,
                    message: Be,
                    operator: "notDeepEqual",
                    stackStartFn: K
                })
            }, Y.deepStrictEqual = function K(de, we, Be) {
                if (arguments.length < 2) throw new o("actual", "expected");
                void 0 === M && P(), fe(de, we) || F({
                    actual: de,
                    expected: we,
                    message: Be,
                    operator: "deepStrictEqual",
                    stackStartFn: K
                })
            }, Y.notDeepStrictEqual = function H(K, de, we) {
                if (arguments.length < 2) throw new o("actual", "expected");
                void 0 === M && P(), fe(K, de) && F({
                    actual: K,
                    expected: de,
                    message: we,
                    operator: "notDeepStrictEqual",
                    stackStartFn: H
                })
            }, Y.strictEqual = function K(de, we, Be) {
                if (arguments.length < 2) throw new o("actual", "expected");
                U(de, we) || F({
                    actual: de,
                    expected: we,
                    message: Be,
                    operator: "strictEqual",
                    stackStartFn: K
                })
            }, Y.notStrictEqual = function K(de, we, Be) {
                if (arguments.length < 2) throw new o("actual", "expected");
                U(de, we) && F({
                    actual: de,
                    expected: we,
                    message: Be,
                    operator: "notStrictEqual",
                    stackStartFn: K
                })
            };
            var ce = w(function K(de, we, Be) {
                var he = this;
                (function l(K, de) {
                    if (!(K instanceof de)) throw new TypeError("Cannot call a class as a function")
                })(this, K), we.forEach(function(We) {
                    We in de && (he[We] = void 0 !== Be && "string" == typeof Be[We] && m(de[We]) && S(de[We], Be[We]) ? Be[We] : de[We])
                })
            });

            function Le(K, de, we, Be) {
                if ("function" != typeof de) {
                    if (m(de)) return S(de, K);
                    if (2 === arguments.length) throw new v("expected", ["Function", "RegExp"], de);
                    if ("object" !== s(K) || null === K) {
                        var he = new E({
                            actual: K,
                            expected: de,
                            message: we,
                            operator: "deepStrictEqual",
                            stackStartFn: Be
                        });
                        throw he.operator = Be.name, he
                    }
                    var We = Object.keys(de);
                    if (de instanceof Error) We.push("name", "message");
                    else if (0 === We.length) throw new y("error", de, "may not be an empty object");
                    return void 0 === M && P(), We.forEach(function(gt) {
                        "string" == typeof K[gt] && m(de[gt]) && S(de[gt], K[gt]) || function Ee(K, de, we, Be, he, We) {
                            if (!(we in K) || !fe(K[we], de[we])) {
                                if (!Be) {
                                    var gt = new ce(K, he),
                                        xt = new ce(de, he, K),
                                        yt = new E({
                                            actual: gt,
                                            expected: xt,
                                            operator: "deepStrictEqual",
                                            stackStartFn: We
                                        });
                                    throw yt.actual = K, yt.expected = de, yt.operator = We.name, yt
                                }
                                F({
                                    actual: K,
                                    expected: de,
                                    message: Be,
                                    operator: We.name,
                                    stackStartFn: We
                                })
                            }
                        }(K, de, gt, we, We, Be)
                    }), !0
                }
                return void 0 !== de.prototype && K instanceof de || !Error.isPrototypeOf(de) && !0 === de.call({}, K)
            }

            function oe(K) {
                if ("function" != typeof K) throw new v("fn", "Function", K);
                try {
                    K()
                } catch (de) {
                    return de
                }
                return te
            }

            function Q(K) {
                return a(K) || null !== K && "object" === s(K) && "function" == typeof K.then && "function" == typeof K.catch
            }

            function me(K) {
                return Promise.resolve().then(function() {
                    var de;
                    if ("function" == typeof K) {
                        if (!Q(de = K())) throw new x("instance of Promise", "promiseFn", de)
                    } else {
                        if (!Q(K)) throw new v("promiseFn", ["Function", "Promise"], K);
                        de = K
                    }
                    return Promise.resolve().then(function() {
                        return de
                    }).then(function() {
                        return te
                    }).catch(function(we) {
                        return we
                    })
                })
            }

            function Ie(K, de, we, Be) {
                if ("string" == typeof we) {
                    if (4 === arguments.length) throw new v("error", ["Object", "Error", "Function", "RegExp"], we);
                    if ("object" === s(de) && null !== de) {
                        if (de.message === we) throw new R("error/message", 'The error message "'.concat(de.message, '" is identical to the message.'))
                    } else if (de === we) throw new R("error/message", 'The error "'.concat(de, '" is identical to the message.'));
                    Be = we, we = void 0
                } else if (null != we && "object" !== s(we) && "function" != typeof we) throw new v("error", ["Object", "Error", "Function", "RegExp"], we);
                if (de === te) {
                    var he = "";
                    we && we.name && (he += " (".concat(we.name, ")")), he += Be ? ": ".concat(Be) : ".", F({
                        actual: void 0,
                        expected: we,
                        operator: K.name,
                        message: "Missing expected ".concat("rejects" === K.name ? "rejection" : "exception").concat(he),
                        stackStartFn: K
                    })
                }
                if (we && !Le(de, we, Be, K)) throw de
            }

            function Ze(K, de, we, Be) {
                if (de !== te) {
                    if ("string" == typeof we && (Be = we, we = void 0), !we || Le(de, we)) {
                        var he = Be ? ": ".concat(Be) : ".";
                        F({
                            actual: de,
                            expected: we,
                            operator: K.name,
                            message: "Got unwanted ".concat("doesNotReject" === K.name ? "rejection" : "exception").concat(he, "\n") + 'Actual message: "'.concat(de && de.message, '"'),
                            stackStartFn: K
                        })
                    }
                    throw de
                }
            }

            function N(K, de, we, Be, he) {
                if (!m(de)) throw new v("regexp", "RegExp", de);
                var We = "match" === he;
                if ("string" != typeof K || S(de, K) !== We) {
                    if (we instanceof Error) throw we;
                    var gt = !we;
                    we = we || ("string" != typeof K ? 'The "string" argument must be of type string. Received type ' + "".concat(s(K), " (").concat(c(K), ")") : (We ? "The input did not match the regular expression " : "The input was expected to not match the regular expression ") + "".concat(c(de), ". Input:\n\n").concat(c(K), "\n"));
                    var xt = new E({
                        actual: K,
                        expected: de,
                        message: we,
                        operator: he,
                        stackStartFn: Be
                    });
                    throw xt.generatedMessage = gt, xt
                }
            }

            function z() {
                for (var K = arguments.length, de = new Array(K), we = 0; we < K; we++) de[we] = arguments[we];
                V.apply(void 0, [z, de.length].concat(de))
            }
            Y.throws = function K(de) {
                for (var we = arguments.length, Be = new Array(we > 1 ? we - 1 : 0), he = 1; he < we; he++) Be[he - 1] = arguments[he];
                Ie.apply(void 0, [K, oe(de)].concat(Be))
            }, Y.rejects = function K(de) {
                for (var we = arguments.length, Be = new Array(we > 1 ? we - 1 : 0), he = 1; he < we; he++) Be[he - 1] = arguments[he];
                return me(de).then(function(We) {
                    return Ie.apply(void 0, [K, We].concat(Be))
                })
            }, Y.doesNotThrow = function K(de) {
                for (var we = arguments.length, Be = new Array(we > 1 ? we - 1 : 0), he = 1; he < we; he++) Be[he - 1] = arguments[he];
                Ze.apply(void 0, [K, oe(de)].concat(Be))
            }, Y.doesNotReject = function K(de) {
                for (var we = arguments.length, Be = new Array(we > 1 ? we - 1 : 0), he = 1; he < we; he++) Be[he - 1] = arguments[he];
                return me(de).then(function(We) {
                    return Ze.apply(void 0, [K, We].concat(Be))
                })
            }, Y.ifError = function K(de) {
                if (null != de) {
                    var we = "ifError got unwanted exception: ";
                    "object" === s(de) && "string" == typeof de.message ? we += 0 === de.message.length && de.constructor ? de.constructor.name : de.message : we += c(de);
                    var Be = new E({
                            actual: de,
                            expected: null,
                            operator: "ifError",
                            message: we,
                            stackStartFn: K
                        }),
                        he = de.stack;
                    if ("string" == typeof he) {
                        var We = he.split("\n");
                        We.shift();
                        for (var gt = Be.stack.split("\n"), xt = 0; xt < We.length; xt++) {
                            var yt = gt.indexOf(We[xt]);
                            if (-1 !== yt) {
                                gt = gt.slice(0, yt);
                                break
                            }
                        }
                        Be.stack = "".concat(gt.join("\n"), "\n").concat(We.join("\n"))
                    }
                    throw Be
                }
            }, Y.match = function K(de, we, Be) {
                N(de, we, Be, K, "match")
            }, Y.doesNotMatch = function K(de, we, Be) {
                N(de, we, Be, K, "doesNotMatch")
            }, Y.strict = _(z, Y, {
                equal: Y.strictEqual,
                deepEqual: Y.deepStrictEqual,
                notEqual: Y.notStrictEqual,
                notDeepEqual: Y.notDeepStrictEqual
            }), Y.strict.strict = Y.strict
        },
        11953: (ve, e, A) => {
            "use strict";

            function s(F, se) {
                var V = Object.keys(F);
                if (Object.getOwnPropertySymbols) {
                    var q = Object.getOwnPropertySymbols(F);
                    se && (q = q.filter(function(H) {
                        return Object.getOwnPropertyDescriptor(F, H).enumerable
                    })), V.push.apply(V, q)
                }
                return V
            }

            function d(F) {
                for (var se = 1; se < arguments.length; se++) {
                    var V = null != arguments[se] ? arguments[se] : {};
                    se % 2 ? s(Object(V), !0).forEach(function(q) {
                        w(F, q, V[q])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(F, Object.getOwnPropertyDescriptors(V)) : s(Object(V)).forEach(function(q) {
                        Object.defineProperty(F, q, Object.getOwnPropertyDescriptor(V, q))
                    })
                }
                return F
            }

            function w(F, se, V) {
                return (se = p(se)) in F ? Object.defineProperty(F, se, {
                    value: V,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : F[se] = V, F
            }

            function u(F, se) {
                for (var V = 0; V < se.length; V++) {
                    var q = se[V];
                    q.enumerable = q.enumerable || !1, q.configurable = !0, "value" in q && (q.writable = !0), Object.defineProperty(F, p(q.key), q)
                }
            }

            function p(F) {
                var se = function T(F, se) {
                    if ("object" !== m(F) || null === F) return F;
                    var V = F[Symbol.toPrimitive];
                    if (void 0 !== V) {
                        var q = V.call(F, se || "default");
                        if ("object" !== m(q)) return q;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === se ? String : Number)(F)
                }(F, "string");
                return "symbol" === m(se) ? se : String(se)
            }

            function y(F, se) {
                if (se && ("object" === m(se) || "function" == typeof se)) return se;
                if (void 0 !== se) throw new TypeError("Derived constructors may only return object or undefined");
                return x(F)
            }

            function x(F) {
                if (void 0 === F) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return F
            }

            function o(F) {
                var se = "function" == typeof Map ? new Map : void 0;
                return o = function(q) {
                    if (null === q || ! function c(F) {
                            return -1 !== Function.toString.call(F).indexOf("[native code]")
                        }(q)) return q;
                    if ("function" != typeof q) throw new TypeError("Super expression must either be null or a function");
                    if (typeof se < "u") {
                        if (se.has(q)) return se.get(q);
                        se.set(q, H)
                    }

                    function H() {
                        return E(q, arguments, a(this).constructor)
                    }
                    return H.prototype = Object.create(q.prototype, {
                        constructor: {
                            value: H,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), r(H, q)
                }, o(F)
            }

            function E(F, se, V) {
                return (E = h() ? Reflect.construct.bind() : function(H, ce, Ee) {
                    var Le = [null];
                    Le.push.apply(Le, ce);
                    var Q = new(Function.bind.apply(H, Le));
                    return Ee && r(Q, Ee.prototype), Q
                }).apply(null, arguments)
            }

            function h() {
                if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch {
                    return !1
                }
            }

            function r(F, se) {
                return (r = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(q, H) {
                    return q.__proto__ = H, q
                })(F, se)
            }

            function a(F) {
                return (a = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(V) {
                    return V.__proto__ || Object.getPrototypeOf(V)
                })(F)
            }

            function m(F) {
                return (m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(se) {
                    return typeof se
                } : function(se) {
                    return se && "function" == typeof Symbol && se.constructor === Symbol && se !== Symbol.prototype ? "symbol" : typeof se
                })(F)
            }
            var U = A(40179).inspect,
                D = A(73237).codes.ERR_INVALID_ARG_TYPE;

            function M(F, se, V) {
                return (void 0 === V || V > F.length) && (V = F.length), F.substring(V - se.length, V) === se
            }
            var Se = "",
                _e = "",
                O = "",
                P = "",
                C = {
                    deepStrictEqual: "Expected values to be strictly deep-equal:",
                    strictEqual: "Expected values to be strictly equal:",
                    strictEqualObject: 'Expected "actual" to be reference-equal to "expected":',
                    deepEqual: "Expected values to be loosely deep-equal:",
                    equal: "Expected values to be loosely equal:",
                    notDeepStrictEqual: 'Expected "actual" not to be strictly deep-equal to:',
                    notStrictEqual: 'Expected "actual" to be strictly unequal to:',
                    notStrictEqualObject: 'Expected "actual" not to be reference-equal to "expected":',
                    notDeepEqual: 'Expected "actual" not to be loosely deep-equal to:',
                    notEqual: 'Expected "actual" to be loosely unequal to:',
                    notIdentical: "Values identical but not reference-equal:"
                };

            function J(F) {
                var se = Object.keys(F),
                    V = Object.create(Object.getPrototypeOf(F));
                return se.forEach(function(q) {
                    V[q] = F[q]
                }), Object.defineProperty(V, "message", {
                    value: F.message
                }), V
            }

            function re(F) {
                return U(F, {
                    compact: !1,
                    customInspect: !1,
                    depth: 1e3,
                    maxArrayLength: 1 / 0,
                    showHidden: !1,
                    breakLength: 1 / 0,
                    showProxy: !1,
                    sorted: !0,
                    getters: !0
                })
            }
            var te = function(F, se) {
                ! function R(F, se) {
                    if ("function" != typeof se && null !== se) throw new TypeError("Super expression must either be null or a function");
                    F.prototype = Object.create(se && se.prototype, {
                        constructor: {
                            value: F,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(F, "prototype", {
                        writable: !1
                    }), se && r(F, se)
                }(q, F);
                var V = function v(F) {
                    var se = h();
                    return function() {
                        var H, q = a(F);
                        if (se) {
                            var ce = a(this).constructor;
                            H = Reflect.construct(q, arguments, ce)
                        } else H = q.apply(this, arguments);
                        return y(this, H)
                    }
                }(q);

                function q(H) {
                    var ce;
                    if (function B(F, se) {
                            if (!(F instanceof se)) throw new TypeError("Cannot call a class as a function")
                        }(this, q), "object" !== m(H) || null === H) throw new D("options", "Object", H);
                    var Ee = H.message,
                        Le = H.operator,
                        oe = H.stackStartFn,
                        Q = H.actual,
                        me = H.expected,
                        Ie = Error.stackTraceLimit;
                    if (Error.stackTraceLimit = 0, null != Ee) ce = V.call(this, String(Ee));
                    else if (process.stderr && process.stderr.isTTY && (process.stderr && process.stderr.getColorDepth && 1 !== process.stderr.getColorDepth() ? (Se = "\x1b[34m", _e = "\x1b[32m", P = "\x1b[39m", O = "\x1b[31m") : (Se = "", _e = "", P = "", O = "")), "object" === m(Q) && null !== Q && "object" === m(me) && null !== me && "stack" in Q && Q instanceof Error && "stack" in me && me instanceof Error && (Q = J(Q), me = J(me)), "deepStrictEqual" === Le || "strictEqual" === Le) ce = V.call(this, function Y(F, se, V) {
                        var q = "",
                            H = "",
                            ce = 0,
                            Ee = "",
                            Le = !1,
                            oe = re(F),
                            Q = oe.split("\n"),
                            me = re(se).split("\n"),
                            Ie = 0,
                            Ze = "";
                        if ("strictEqual" === V && "object" === m(F) && "object" === m(se) && null !== F && null !== se && (V = "strictEqualObject"), 1 === Q.length && 1 === me.length && Q[0] !== me[0]) {
                            var N = Q[0].length + me[0].length;
                            if (N <= 10) {
                                if (!("object" === m(F) && null !== F || "object" === m(se) && null !== se || 0 === F && 0 === se)) return "".concat(C[V], "\n\n") + "".concat(Q[0], " !== ").concat(me[0], "\n")
                            } else if ("strictEqualObject" !== V && N < (process.stderr && process.stderr.isTTY ? process.stderr.columns : 80)) {
                                for (; Q[0][Ie] === me[0][Ie];) Ie++;
                                Ie > 2 && (Ze = "\n  ".concat(function fe(F, se) {
                                    if (se = Math.floor(se), 0 == F.length || 0 == se) return "";
                                    var V = F.length * se;
                                    for (se = Math.floor(Math.log(se) / Math.log(2)); se;) F += F, se--;
                                    return F + F.substring(0, V - F.length)
                                }(" ", Ie), "^"), Ie = 0)
                            }
                        }
                        for (var K = Q[Q.length - 1], de = me[me.length - 1]; K === de && (Ie++ < 2 ? Ee = "\n  ".concat(K).concat(Ee) : q = K, Q.pop(), me.pop(), 0 !== Q.length && 0 !== me.length);) K = Q[Q.length - 1], de = me[me.length - 1];
                        var we = Math.max(Q.length, me.length);
                        if (0 === we) {
                            var Be = oe.split("\n");
                            if (Be.length > 30)
                                for (Be[26] = "".concat(Se, "...").concat(P); Be.length > 27;) Be.pop();
                            return "".concat(C.notIdentical, "\n\n").concat(Be.join("\n"), "\n")
                        }
                        Ie > 3 && (Ee = "\n".concat(Se, "...").concat(P).concat(Ee), Le = !0), "" !== q && (Ee = "\n  ".concat(q).concat(Ee), q = "");
                        var he = 0,
                            We = C[V] + "\n".concat(_e, "+ actual").concat(P, " ").concat(O, "- expected").concat(P),
                            gt = " ".concat(Se, "...").concat(P, " Lines skipped");
                        for (Ie = 0; Ie < we; Ie++) {
                            var xt = Ie - ce;
                            if (Q.length < Ie + 1) xt > 1 && Ie > 2 && (xt > 4 ? (H += "\n".concat(Se, "...").concat(P), Le = !0) : xt > 3 && (H += "\n  ".concat(me[Ie - 2]), he++), H += "\n  ".concat(me[Ie - 1]), he++), ce = Ie, q += "\n".concat(O, "-").concat(P, " ").concat(me[Ie]), he++;
                            else if (me.length < Ie + 1) xt > 1 && Ie > 2 && (xt > 4 ? (H += "\n".concat(Se, "...").concat(P), Le = !0) : xt > 3 && (H += "\n  ".concat(Q[Ie - 2]), he++), H += "\n  ".concat(Q[Ie - 1]), he++), ce = Ie, H += "\n".concat(_e, "+").concat(P, " ").concat(Q[Ie]), he++;
                            else {
                                var yt = me[Ie],
                                    At = Q[Ie],
                                    ge = At !== yt && (!M(At, ",") || At.slice(0, -1) !== yt);
                                ge && M(yt, ",") && yt.slice(0, -1) === At && (ge = !1, At += ","), ge ? (xt > 1 && Ie > 2 && (xt > 4 ? (H += "\n".concat(Se, "...").concat(P), Le = !0) : xt > 3 && (H += "\n  ".concat(Q[Ie - 2]), he++), H += "\n  ".concat(Q[Ie - 1]), he++), ce = Ie, H += "\n".concat(_e, "+").concat(P, " ").concat(At), q += "\n".concat(O, "-").concat(P, " ").concat(yt), he += 2) : (H += q, q = "", (1 === xt || 0 === Ie) && (H += "\n  ".concat(At), he++))
                            }
                            if (he > 20 && Ie < we - 2) return "".concat(We).concat(gt, "\n").concat(H, "\n").concat(Se, "...").concat(P).concat(q, "\n") + "".concat(Se, "...").concat(P)
                        }
                        return "".concat(We).concat(Le ? gt : "", "\n").concat(H).concat(q).concat(Ee).concat(Ze)
                    }(Q, me, Le));
                    else if ("notDeepStrictEqual" === Le || "notStrictEqual" === Le) {
                        var Ze = C[Le],
                            N = re(Q).split("\n");
                        if ("notStrictEqual" === Le && "object" === m(Q) && null !== Q && (Ze = C.notStrictEqualObject), N.length > 30)
                            for (N[26] = "".concat(Se, "...").concat(P); N.length > 27;) N.pop();
                        ce = V.call(this, 1 === N.length ? "".concat(Ze, " ").concat(N[0]) : "".concat(Ze, "\n\n").concat(N.join("\n"), "\n"))
                    } else {
                        var z = re(Q),
                            K = "",
                            de = C[Le];
                        "notDeepEqual" === Le || "notEqual" === Le ? (z = "".concat(C[Le], "\n\n").concat(z)).length > 1024 && (z = "".concat(z.slice(0, 1021), "...")) : (K = "".concat(re(me)), z.length > 512 && (z = "".concat(z.slice(0, 509), "...")), K.length > 512 && (K = "".concat(K.slice(0, 509), "...")), "deepEqual" === Le || "equal" === Le ? z = "".concat(de, "\n\n").concat(z, "\n\nshould equal\n\n") : K = " ".concat(Le, " ").concat(K)), ce = V.call(this, "".concat(z).concat(K))
                    }
                    return Error.stackTraceLimit = Ie, ce.generatedMessage = !Ee, Object.defineProperty(x(ce), "name", {
                        value: "AssertionError [ERR_ASSERTION]",
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }), ce.code = "ERR_ASSERTION", ce.actual = Q, ce.expected = me, ce.operator = Le, Error.captureStackTrace && Error.captureStackTrace(x(ce), oe), ce.name = "AssertionError", y(ce)
                }
                return function l(F, se, V) {
                    se && u(F.prototype, se), V && u(F, V), Object.defineProperty(F, "prototype", {
                        writable: !1
                    })
                }(q, [{
                    key: "toString",
                    value: function() {
                        return "".concat(this.name, " [").concat(this.code, "]: ").concat(this.message)
                    }
                }, {
                    key: se,
                    value: function(ce, Ee) {
                        return U(this, d(d({}, Ee), {}, {
                            customInspect: !1,
                            depth: 0
                        }))
                    }
                }]), q
            }(o(Error), U.custom);
            ve.exports = te
        },
        73237: (ve, e, A) => {
            "use strict";

            function s(S) {
                return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(D) {
                    return typeof D
                } : function(D) {
                    return D && "function" == typeof Symbol && D.constructor === Symbol && D !== Symbol.prototype ? "symbol" : typeof D
                })(S)
            }

            function d(S, D) {
                for (var M = 0; M < D.length; M++) {
                    var fe = D[M];
                    fe.enumerable = fe.enumerable || !1, fe.configurable = !0, "value" in fe && (fe.writable = !0), Object.defineProperty(S, B(fe.key), fe)
                }
            }

            function B(S) {
                var D = function u(S, D) {
                    if ("object" !== s(S) || null === S) return S;
                    var M = S[Symbol.toPrimitive];
                    if (void 0 !== M) {
                        var fe = M.call(S, D || "default");
                        if ("object" !== s(fe)) return fe;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === D ? String : Number)(S)
                }(S, "string");
                return "symbol" === s(D) ? D : String(D)
            }

            function T(S, D) {
                return (T = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(fe, Se) {
                    return fe.__proto__ = Se, fe
                })(S, D)
            }

            function o(S) {
                return (o = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(M) {
                    return M.__proto__ || Object.getPrototypeOf(M)
                })(S)
            }
            var h, c, E = {};

            function r(S, D, M) {
                M || (M = Error);
                var Se = function(_e) {
                    ! function p(S, D) {
                        if ("function" != typeof D && null !== D) throw new TypeError("Super expression must either be null or a function");
                        S.prototype = Object.create(D && D.prototype, {
                            constructor: {
                                value: S,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(S, "prototype", {
                            writable: !1
                        }), D && T(S, D)
                    }(P, _e);
                    var O = function R(S) {
                        var D = function x() {
                            if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                            } catch {
                                return !1
                            }
                        }();
                        return function() {
                            var Se, fe = o(S);
                            if (D) {
                                var _e = o(this).constructor;
                                Se = Reflect.construct(fe, arguments, _e)
                            } else Se = fe.apply(this, arguments);
                            return function v(S, D) {
                                if (D && ("object" === s(D) || "function" == typeof D)) return D;
                                if (void 0 !== D) throw new TypeError("Derived constructors may only return object or undefined");
                                return function y(S) {
                                    if (void 0 === S) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return S
                                }(S)
                            }(this, Se)
                        }
                    }(P);

                    function P(C, ae, J) {
                        var re;
                        return function l(S, D) {
                            if (!(S instanceof D)) throw new TypeError("Cannot call a class as a function")
                        }(this, P), re = O.call(this, function fe(_e, O, P) {
                            return "string" == typeof D ? D : D(_e, O, P)
                        }(C, ae, J)), re.code = S, re
                    }
                    return function w(S, D, M) {
                        return D && d(S.prototype, D), M && d(S, M), Object.defineProperty(S, "prototype", {
                            writable: !1
                        }), S
                    }(P)
                }(M);
                E[S] = Se
            }

            function a(S, D) {
                if (Array.isArray(S)) {
                    var M = S.length;
                    return S = S.map(function(fe) {
                        return String(fe)
                    }), M > 2 ? "one of ".concat(D, " ").concat(S.slice(0, M - 1).join(", "), ", or ") + S[M - 1] : 2 === M ? "one of ".concat(D, " ").concat(S[0], " or ").concat(S[1]) : "of ".concat(D, " ").concat(S[0])
                }
                return "of ".concat(D, " ").concat(String(S))
            }
            r("ERR_AMBIGUOUS_ARGUMENT", 'The "%s" argument is ambiguous. %s', TypeError), r("ERR_INVALID_ARG_TYPE", function(S, D, M) {
                var fe, Se;
                if (void 0 === h && (h = A(5936)), h("string" == typeof S, "'name' must be a string"), "string" == typeof D && function m(S, D, M) {
                        return S.substr(!M || M < 0 ? 0 : +M, D.length) === D
                    }(D, "not ") ? (fe = "must not be", D = D.replace(/^not /, "")) : fe = "must be", function _(S, D, M) {
                        return (void 0 === M || M > S.length) && (M = S.length), S.substring(M - D.length, M) === D
                    }(S, " argument")) Se = "The ".concat(S, " ").concat(fe, " ").concat(a(D, "type"));
                else {
                    var _e = function U(S, D, M) {
                        return "number" != typeof M && (M = 0), !(M + D.length > S.length) && -1 !== S.indexOf(D, M)
                    }(S, ".") ? "property" : "argument";
                    Se = 'The "'.concat(S, '" ').concat(_e, " ").concat(fe, " ").concat(a(D, "type"))
                }
                return Se + ". Received type ".concat(s(M))
            }, TypeError), r("ERR_INVALID_ARG_VALUE", function(S, D) {
                var M = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "is invalid";
                void 0 === c && (c = A(40179));
                var fe = c.inspect(D);
                return fe.length > 128 && (fe = "".concat(fe.slice(0, 128), "...")), "The argument '".concat(S, "' ").concat(M, ". Received ").concat(fe)
            }, TypeError, RangeError), r("ERR_INVALID_RETURN_VALUE", function(S, D, M) {
                var fe;
                return fe = M && M.constructor && M.constructor.name ? "instance of ".concat(M.constructor.name) : "type ".concat(s(M)), "Expected ".concat(S, ' to be returned from the "').concat(D, '"') + " function but got ".concat(fe, ".")
            }, TypeError), r("ERR_MISSING_ARGS", function() {
                for (var S = arguments.length, D = new Array(S), M = 0; M < S; M++) D[M] = arguments[M];
                void 0 === h && (h = A(5936)), h(D.length > 0, "At least one arg needs to be specified");
                var fe = "The ",
                    Se = D.length;
                switch (D = D.map(function(_e) {
                    return '"'.concat(_e, '"')
                }), Se) {
                    case 1:
                        fe += "".concat(D[0], " argument");
                        break;
                    case 2:
                        fe += "".concat(D[0], " and ").concat(D[1], " arguments");
                        break;
                    default:
                        fe += D.slice(0, Se - 1).join(", "), fe += ", and ".concat(D[Se - 1], " arguments")
                }
                return "".concat(fe, " must be specified")
            }, TypeError), ve.exports.codes = E
        },
        20356: (ve, e, A) => {
            "use strict";

            function s(G, ee) {
                return function l(G) {
                    if (Array.isArray(G)) return G
                }(G) || function u(G, ee) {
                    var xe = null == G ? null : typeof Symbol < "u" && G[Symbol.iterator] || G["@@iterator"];
                    if (null != xe) {
                        var Ae, je, Qe, j, Ne = [],
                            ie = !0,
                            le = !1;
                        try {
                            if (Qe = (xe = xe.call(G)).next, 0 === ee) {
                                if (Object(xe) !== xe) return;
                                ie = !1
                            } else
                                for (; !(ie = (Ae = Qe.call(xe)).done) && (Ne.push(Ae.value), Ne.length !== ee); ie = !0);
                        } catch (ue) {
                            le = !0, je = ue
                        } finally {
                            try {
                                if (!ie && null != xe.return && (j = xe.return(), Object(j) !== j)) return
                            } finally {
                                if (le) throw je
                            }
                        }
                        return Ne
                    }
                }(G, ee) || function w(G, ee) {
                    if (G) {
                        if ("string" == typeof G) return B(G, ee);
                        var xe = Object.prototype.toString.call(G).slice(8, -1);
                        if ("Object" === xe && G.constructor && (xe = G.constructor.name), "Map" === xe || "Set" === xe) return Array.from(G);
                        if ("Arguments" === xe || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(xe)) return B(G, ee)
                    }
                }(G, ee) || function d() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function B(G, ee) {
                (null == ee || ee > G.length) && (ee = G.length);
                for (var xe = 0, Ae = new Array(ee); xe < ee; xe++) Ae[xe] = G[xe];
                return Ae
            }

            function p(G) {
                return (p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(ee) {
                    return typeof ee
                } : function(ee) {
                    return ee && "function" == typeof Symbol && ee.constructor === Symbol && ee !== Symbol.prototype ? "symbol" : typeof ee
                })(G)
            }
            var T = void 0 !== /a/g.flags,
                R = function(ee) {
                    var xe = [];
                    return ee.forEach(function(Ae) {
                        return xe.push(Ae)
                    }), xe
                },
                v = function(ee) {
                    var xe = [];
                    return ee.forEach(function(Ae, je) {
                        return xe.push([je, Ae])
                    }), xe
                },
                y = Object.is ? Object.is : A(20314),
                x = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols : function() {
                    return []
                },
                o = Number.isNaN ? Number.isNaN : A(40389);

            function E(G) {
                return G.call.bind(G)
            }
            var h = E(Object.prototype.hasOwnProperty),
                c = E(Object.prototype.propertyIsEnumerable),
                r = E(Object.prototype.toString),
                a = A(40179).types,
                m = a.isAnyArrayBuffer,
                _ = a.isArrayBufferView,
                U = a.isDate,
                S = a.isMap,
                D = a.isRegExp,
                M = a.isSet,
                fe = a.isNativeError,
                Se = a.isBoxedPrimitive,
                _e = a.isNumberObject,
                O = a.isStringObject,
                P = a.isBooleanObject,
                C = a.isBigIntObject,
                ae = a.isSymbolObject,
                J = a.isFloat32Array,
                re = a.isFloat64Array;

            function Y(G) {
                if (0 === G.length || G.length > 10) return !0;
                for (var ee = 0; ee < G.length; ee++) {
                    var xe = G.charCodeAt(ee);
                    if (xe < 48 || xe > 57) return !0
                }
                return 10 === G.length && G >= Math.pow(2, 32)
            }

            function te(G) {
                return Object.keys(G).filter(Y).concat(x(G).filter(Object.prototype.propertyIsEnumerable.bind(G)))
            }

            function F(G, ee) {
                if (G === ee) return 0;
                for (var xe = G.length, Ae = ee.length, je = 0, Qe = Math.min(xe, Ae); je < Qe; ++je)
                    if (G[je] !== ee[je]) {
                        xe = G[je], Ae = ee[je];
                        break
                    }
                return xe < Ae ? -1 : Ae < xe ? 1 : 0
            }
            var H = 0,
                ce = 1,
                Ee = 2,
                Le = 3;

            function N(G, ee, xe, Ae) {
                if (G === ee) return 0 !== G || !xe || y(G, ee);
                if (xe) {
                    if ("object" !== p(G)) return "number" == typeof G && o(G) && o(ee);
                    if ("object" !== p(ee) || null === G || null === ee || Object.getPrototypeOf(G) !== Object.getPrototypeOf(ee)) return !1
                } else {
                    if (null === G || "object" !== p(G)) return (null === ee || "object" !== p(ee)) && G == ee;
                    if (null === ee || "object" !== p(ee)) return !1
                }
                var je = r(G);
                if (je !== r(ee)) return !1;
                if (Array.isArray(G)) {
                    if (G.length !== ee.length) return !1;
                    var j = te(G),
                        Ne = te(ee);
                    return j.length === Ne.length && K(G, ee, xe, Ae, ce, j)
                }
                if ("[object Object]" === je && (!S(G) && S(ee) || !M(G) && M(ee))) return !1;
                if (U(G)) {
                    if (!U(ee) || Date.prototype.getTime.call(G) !== Date.prototype.getTime.call(ee)) return !1
                } else if (D(G)) {
                    if (!D(ee) || ! function oe(G, ee) {
                            return T ? G.source === ee.source && G.flags === ee.flags : RegExp.prototype.toString.call(G) === RegExp.prototype.toString.call(ee)
                        }(G, ee)) return !1
                } else if (fe(G) || G instanceof Error) {
                    if (G.message !== ee.message || G.name !== ee.name) return !1
                } else {
                    if (_(G)) {
                        if (xe || !J(G) && !re(G)) {
                            if (! function me(G, ee) {
                                    return G.byteLength === ee.byteLength && 0 === F(new Uint8Array(G.buffer, G.byteOffset, G.byteLength), new Uint8Array(ee.buffer, ee.byteOffset, ee.byteLength))
                                }(G, ee)) return !1
                        } else if (! function Q(G, ee) {
                                if (G.byteLength !== ee.byteLength) return !1;
                                for (var xe = 0; xe < G.byteLength; xe++)
                                    if (G[xe] !== ee[xe]) return !1;
                                return !0
                            }(G, ee)) return !1;
                        var ie = te(G),
                            le = te(ee);
                        return ie.length === le.length && K(G, ee, xe, Ae, H, ie)
                    }
                    if (M(G)) return !(!M(ee) || G.size !== ee.size) && K(G, ee, xe, Ae, Ee);
                    if (S(G)) return !(!S(ee) || G.size !== ee.size) && K(G, ee, xe, Ae, Le);
                    if (m(G)) {
                        if (! function Ie(G, ee) {
                                return G.byteLength === ee.byteLength && 0 === F(new Uint8Array(G), new Uint8Array(ee))
                            }(G, ee)) return !1
                    } else if (Se(G) && ! function Ze(G, ee) {
                            return _e(G) ? _e(ee) && y(Number.prototype.valueOf.call(G), Number.prototype.valueOf.call(ee)) : O(G) ? O(ee) && String.prototype.valueOf.call(G) === String.prototype.valueOf.call(ee) : P(G) ? P(ee) && Boolean.prototype.valueOf.call(G) === Boolean.prototype.valueOf.call(ee) : C(G) ? C(ee) && BigInt.prototype.valueOf.call(G) === BigInt.prototype.valueOf.call(ee) : ae(ee) && Symbol.prototype.valueOf.call(G) === Symbol.prototype.valueOf.call(ee)
                        }(G, ee)) return !1
                }
                return K(G, ee, xe, Ae, H)
            }

            function z(G, ee) {
                return ee.filter(function(xe) {
                    return c(G, xe)
                })
            }

            function K(G, ee, xe, Ae, je, Qe) {
                if (5 === arguments.length) {
                    Qe = Object.keys(G);
                    var j = Object.keys(ee);
                    if (Qe.length !== j.length) return !1
                }
                for (var Ne = 0; Ne < Qe.length; Ne++)
                    if (!h(ee, Qe[Ne])) return !1;
                if (xe && 5 === arguments.length) {
                    var ie = x(G);
                    if (0 !== ie.length) {
                        var le = 0;
                        for (Ne = 0; Ne < ie.length; Ne++) {
                            var ue = ie[Ne];
                            if (c(G, ue)) {
                                if (!c(ee, ue)) return !1;
                                Qe.push(ue), le++
                            } else if (c(ee, ue)) return !1
                        }
                        var Ce = x(ee);
                        if (ie.length !== Ce.length && z(ee, Ce).length !== le) return !1
                    } else {
                        var k = x(ee);
                        if (0 !== k.length && 0 !== z(ee, k).length) return !1
                    }
                }
                if (0 === Qe.length && (je === H || je === ce && 0 === G.length || 0 === G.size)) return !0;
                if (void 0 === Ae) Ae = {
                    val1: new Map,
                    val2: new Map,
                    position: 0
                };
                else {
                    var Me = Ae.val1.get(G);
                    if (void 0 !== Me) {
                        var rt = Ae.val2.get(ee);
                        if (void 0 !== rt) return Me === rt
                    }
                    Ae.position++
                }
                Ae.val1.set(G, Ae.position), Ae.val2.set(ee, Ae.position);
                var b = function yt(G, ee, xe, Ae, je, Qe) {
                    var j = 0;
                    if (Qe === Ee) {
                        if (! function We(G, ee, xe, Ae) {
                                for (var je = null, Qe = R(G), j = 0; j < Qe.length; j++) {
                                    var Ne = Qe[j];
                                    if ("object" === p(Ne) && null !== Ne) null === je && (je = new Set), je.add(Ne);
                                    else if (!ee.has(Ne)) {
                                        if (xe || !Be(G, ee, Ne)) return !1;
                                        null === je && (je = new Set), je.add(Ne)
                                    }
                                }
                                if (null !== je) {
                                    for (var ie = R(ee), le = 0; le < ie.length; le++) {
                                        var ue = ie[le];
                                        if ("object" === p(ue) && null !== ue) {
                                            if (!de(je, ue, xe, Ae)) return !1
                                        } else if (!xe && !G.has(ue) && !de(je, ue, xe, Ae)) return !1
                                    }
                                    return 0 === je.size
                                }
                                return !0
                            }(G, ee, xe, je)) return !1
                    } else if (Qe === Le) {
                        if (! function xt(G, ee, xe, Ae) {
                                for (var je = null, Qe = v(G), j = 0; j < Qe.length; j++) {
                                    var Ne = s(Qe[j], 2),
                                        ie = Ne[0],
                                        le = Ne[1];
                                    if ("object" === p(ie) && null !== ie) null === je && (je = new Set), je.add(ie);
                                    else {
                                        var ue = ee.get(ie);
                                        if (void 0 === ue && !ee.has(ie) || !N(le, ue, xe, Ae)) {
                                            if (xe || !he(G, ee, ie, le, Ae)) return !1;
                                            null === je && (je = new Set), je.add(ie)
                                        }
                                    }
                                }
                                if (null !== je) {
                                    for (var Ce = v(ee), k = 0; k < Ce.length; k++) {
                                        var Me = s(Ce[k], 2),
                                            rt = Me[0],
                                            b = Me[1];
                                        if ("object" === p(rt) && null !== rt) {
                                            if (!gt(je, G, rt, b, xe, Ae)) return !1
                                        } else if (!(xe || G.has(rt) && N(G.get(rt), b, !1, Ae) || gt(je, G, rt, b, !1, Ae))) return !1
                                    }
                                    return 0 === je.size
                                }
                                return !0
                            }(G, ee, xe, je)) return !1
                    } else if (Qe === ce)
                        for (; j < G.length; j++) {
                            if (!h(G, j)) {
                                if (h(ee, j)) return !1;
                                for (var Ne = Object.keys(G); j < Ne.length; j++) {
                                    var ie = Ne[j];
                                    if (!h(ee, ie) || !N(G[ie], ee[ie], xe, je)) return !1
                                }
                                return Ne.length === Object.keys(ee).length
                            }
                            if (!h(ee, j) || !N(G[j], ee[j], xe, je)) return !1
                        }
                    for (j = 0; j < Ae.length; j++) {
                        var le = Ae[j];
                        if (!N(G[le], ee[le], xe, je)) return !1
                    }
                    return !0
                }(G, ee, xe, Qe, Ae, je);
                return Ae.val1.delete(G), Ae.val2.delete(ee), b
            }

            function de(G, ee, xe, Ae) {
                for (var je = R(G), Qe = 0; Qe < je.length; Qe++) {
                    var j = je[Qe];
                    if (N(ee, j, xe, Ae)) return G.delete(j), !0
                }
                return !1
            }

            function we(G) {
                switch (p(G)) {
                    case "undefined":
                        return null;
                    case "object":
                        return;
                    case "symbol":
                        return !1;
                    case "string":
                        G = +G;
                    case "number":
                        if (o(G)) return !1
                }
                return !0
            }

            function Be(G, ee, xe) {
                var Ae = we(xe);
                return Ae ? ? (ee.has(Ae) && !G.has(Ae))
            }

            function he(G, ee, xe, Ae, je) {
                var Qe = we(xe);
                if (null != Qe) return Qe;
                var j = ee.get(Qe);
                return !(void 0 === j && !ee.has(Qe) || !N(Ae, j, !1, je)) && !G.has(Qe) && N(Ae, j, !1, je)
            }

            function gt(G, ee, xe, Ae, je, Qe) {
                for (var j = R(G), Ne = 0; Ne < j.length; Ne++) {
                    var ie = j[Ne];
                    if (N(xe, ie, je, Qe) && N(Ae, ee.get(ie), je, Qe)) return G.delete(ie), !0
                }
                return !1
            }
            ve.exports = {
                isDeepEqual: function At(G, ee) {
                    return N(G, ee, !1)
                },
                isDeepStrictEqual: function ge(G, ee) {
                    return N(G, ee, !0)
                }
            }
        },
        39362: (ve, e, A) => {
            "use strict";
            var s = A(5936),
                d = A(47),
                w = A(31767),
                B = A(34599),
                u = A(9435);
            for (var l in u) e[l] = u[l];

            function R(v) {
                if ("number" != typeof v || v < e.DEFLATE || v > e.UNZIP) throw new TypeError("Bad argument");
                this.dictionary = null, this.err = 0, this.flush = 0, this.init_done = !1, this.level = 0, this.memLevel = 0, this.mode = v, this.strategy = 0, this.windowBits = 0, this.write_in_progress = !1, this.pending_close = !1, this.gzip_id_bytes_read = 0
            }
            e.NONE = 0, e.DEFLATE = 1, e.INFLATE = 2, e.GZIP = 3, e.GUNZIP = 4, e.DEFLATERAW = 5, e.INFLATERAW = 6, e.UNZIP = 7, R.prototype.close = function() {
                this.write_in_progress ? this.pending_close = !0 : (this.pending_close = !1, s(this.init_done, "close before init"), s(this.mode <= e.UNZIP), this.mode === e.DEFLATE || this.mode === e.GZIP || this.mode === e.DEFLATERAW ? w.deflateEnd(this.strm) : (this.mode === e.INFLATE || this.mode === e.GUNZIP || this.mode === e.INFLATERAW || this.mode === e.UNZIP) && B.inflateEnd(this.strm), this.mode = e.NONE, this.dictionary = null)
            }, R.prototype.write = function(v, y, x, o, E, h, c) {
                return this._write(!0, v, y, x, o, E, h, c)
            }, R.prototype.writeSync = function(v, y, x, o, E, h, c) {
                return this._write(!1, v, y, x, o, E, h, c)
            }, R.prototype._write = function(v, y, x, o, E, h, c, r) {
                if (s.equal(arguments.length, 8), s(this.init_done, "write before init"), s(this.mode !== e.NONE, "already finalized"), s.equal(!1, this.write_in_progress, "write already in progress"), s.equal(!1, this.pending_close, "close is pending"), this.write_in_progress = !0, s.equal(!1, void 0 === y, "must provide flush value"), this.write_in_progress = !0, y !== e.Z_NO_FLUSH && y !== e.Z_PARTIAL_FLUSH && y !== e.Z_SYNC_FLUSH && y !== e.Z_FULL_FLUSH && y !== e.Z_FINISH && y !== e.Z_BLOCK) throw new Error("Invalid flush value");
                if (null == x && (x = Buffer.alloc(0), E = 0, o = 0), this.strm.avail_in = E, this.strm.input = x, this.strm.next_in = o, this.strm.avail_out = r, this.strm.output = h, this.strm.next_out = c, this.flush = y, !v) return this._process(), this._checkError() ? this._afterSync() : void 0;
                var a = this;
                return process.nextTick(function() {
                    a._process(), a._after()
                }), this
            }, R.prototype._afterSync = function() {
                var v = this.strm.avail_out,
                    y = this.strm.avail_in;
                return this.write_in_progress = !1, [y, v]
            }, R.prototype._process = function() {
                var v = null;
                switch (this.mode) {
                    case e.DEFLATE:
                    case e.GZIP:
                    case e.DEFLATERAW:
                        this.err = w.deflate(this.strm, this.flush);
                        break;
                    case e.UNZIP:
                        switch (this.strm.avail_in > 0 && (v = this.strm.next_in), this.gzip_id_bytes_read) {
                            case 0:
                                if (null === v) break;
                                if (31 !== this.strm.input[v]) {
                                    this.mode = e.INFLATE;
                                    break
                                }
                                if (this.gzip_id_bytes_read = 1, v++, 1 === this.strm.avail_in) break;
                            case 1:
                                if (null === v) break;
                                139 === this.strm.input[v] ? (this.gzip_id_bytes_read = 2, this.mode = e.GUNZIP) : this.mode = e.INFLATE;
                                break;
                            default:
                                throw new Error("invalid number of gzip magic number bytes read")
                        }
                    case e.INFLATE:
                    case e.GUNZIP:
                    case e.INFLATERAW:
                        for (this.err = B.inflate(this.strm, this.flush), this.err === e.Z_NEED_DICT && this.dictionary && (this.err = B.inflateSetDictionary(this.strm, this.dictionary), this.err === e.Z_OK ? this.err = B.inflate(this.strm, this.flush) : this.err === e.Z_DATA_ERROR && (this.err = e.Z_NEED_DICT)); this.strm.avail_in > 0 && this.mode === e.GUNZIP && this.err === e.Z_STREAM_END && 0 !== this.strm.next_in[0];) this.reset(), this.err = B.inflate(this.strm, this.flush);
                        break;
                    default:
                        throw new Error("Unknown mode " + this.mode)
                }
            }, R.prototype._checkError = function() {
                switch (this.err) {
                    case e.Z_OK:
                    case e.Z_BUF_ERROR:
                        if (0 !== this.strm.avail_out && this.flush === e.Z_FINISH) return this._error("unexpected end of file"), !1;
                        break;
                    case e.Z_STREAM_END:
                        break;
                    case e.Z_NEED_DICT:
                        return this._error(null == this.dictionary ? "Missing dictionary" : "Bad dictionary"), !1;
                    default:
                        return this._error("Zlib error"), !1
                }
                return !0
            }, R.prototype._after = function() {
                if (this._checkError()) {
                    var v = this.strm.avail_out,
                        y = this.strm.avail_in;
                    this.write_in_progress = !1, this.callback(y, v), this.pending_close && this.close()
                }
            }, R.prototype._error = function(v) {
                this.strm.msg && (v = this.strm.msg), this.onerror(v, this.err), this.write_in_progress = !1, this.pending_close && this.close()
            }, R.prototype.init = function(v, y, x, o, E) {
                s(4 === arguments.length || 5 === arguments.length, "init(windowBits, level, memLevel, strategy, [dictionary])"), s(v >= 8 && v <= 15, "invalid windowBits"), s(y >= -1 && y <= 9, "invalid compression level"), s(x >= 1 && x <= 9, "invalid memlevel"), s(o === e.Z_FILTERED || o === e.Z_HUFFMAN_ONLY || o === e.Z_RLE || o === e.Z_FIXED || o === e.Z_DEFAULT_STRATEGY, "invalid strategy"), this._init(y, v, x, o, E), this._setDictionary()
            }, R.prototype.params = function() {
                throw new Error("deflateParams Not supported")
            }, R.prototype.reset = function() {
                this._reset(), this._setDictionary()
            }, R.prototype._init = function(v, y, x, o, E) {
                switch (this.level = v, this.windowBits = y, this.memLevel = x, this.strategy = o, this.flush = e.Z_NO_FLUSH, this.err = e.Z_OK, (this.mode === e.GZIP || this.mode === e.GUNZIP) && (this.windowBits += 16), this.mode === e.UNZIP && (this.windowBits += 32), (this.mode === e.DEFLATERAW || this.mode === e.INFLATERAW) && (this.windowBits = -1 * this.windowBits), this.strm = new d, this.mode) {
                    case e.DEFLATE:
                    case e.GZIP:
                    case e.DEFLATERAW:
                        this.err = w.deflateInit2(this.strm, this.level, e.Z_DEFLATED, this.windowBits, this.memLevel, this.strategy);
                        break;
                    case e.INFLATE:
                    case e.GUNZIP:
                    case e.INFLATERAW:
                    case e.UNZIP:
                        this.err = B.inflateInit2(this.strm, this.windowBits);
                        break;
                    default:
                        throw new Error("Unknown mode " + this.mode)
                }
                this.err !== e.Z_OK && this._error("Init error"), this.dictionary = E, this.write_in_progress = !1, this.init_done = !0
            }, R.prototype._setDictionary = function() {
                if (null != this.dictionary) {
                    switch (this.err = e.Z_OK, this.mode) {
                        case e.DEFLATE:
                        case e.DEFLATERAW:
                            this.err = w.deflateSetDictionary(this.strm, this.dictionary)
                    }
                    this.err !== e.Z_OK && this._error("Failed to set dictionary")
                }
            }, R.prototype._reset = function() {
                switch (this.err = e.Z_OK, this.mode) {
                    case e.DEFLATE:
                    case e.DEFLATERAW:
                    case e.GZIP:
                        this.err = w.deflateReset(this.strm);
                        break;
                    case e.INFLATE:
                    case e.INFLATERAW:
                    case e.GUNZIP:
                        this.err = B.inflateReset(this.strm)
                }
                this.err !== e.Z_OK && this._error("Failed to reset stream")
            }, e.Zlib = R
        },
        47117: (ve, e, A) => {
            "use strict";
            var s = A(39007).Buffer,
                d = A(51793).Transform,
                w = A(39362),
                B = A(40179),
                u = A(5936).ok,
                l = A(39007).kMaxLength,
                p = "Cannot create final Buffer. It would be larger than 0x" + l.toString(16) + " bytes";
            w.Z_MIN_WINDOWBITS = 8, w.Z_MAX_WINDOWBITS = 15, w.Z_DEFAULT_WINDOWBITS = 15, w.Z_MIN_CHUNK = 64, w.Z_MAX_CHUNK = 1 / 0, w.Z_DEFAULT_CHUNK = 16384, w.Z_MIN_MEMLEVEL = 1, w.Z_MAX_MEMLEVEL = 9, w.Z_DEFAULT_MEMLEVEL = 8, w.Z_MIN_LEVEL = -1, w.Z_MAX_LEVEL = 9, w.Z_DEFAULT_LEVEL = w.Z_DEFAULT_COMPRESSION;
            for (var T = Object.keys(w), R = 0; R < T.length; R++) {
                var v = T[R];
                v.match(/^Z/) && Object.defineProperty(e, v, {
                    enumerable: !0,
                    value: w[v],
                    writable: !1
                })
            }
            for (var y = {
                    Z_OK: w.Z_OK,
                    Z_STREAM_END: w.Z_STREAM_END,
                    Z_NEED_DICT: w.Z_NEED_DICT,
                    Z_ERRNO: w.Z_ERRNO,
                    Z_STREAM_ERROR: w.Z_STREAM_ERROR,
                    Z_DATA_ERROR: w.Z_DATA_ERROR,
                    Z_MEM_ERROR: w.Z_MEM_ERROR,
                    Z_BUF_ERROR: w.Z_BUF_ERROR,
                    Z_VERSION_ERROR: w.Z_VERSION_ERROR
                }, x = Object.keys(y), o = 0; o < x.length; o++) {
                var E = x[o];
                y[y[E]] = E
            }

            function h(O, P, C) {
                var ae = [],
                    J = 0;

                function re() {
                    for (var F; null !== (F = O.read());) ae.push(F), J += F.length;
                    O.once("readable", re)
                }

                function te() {
                    var F, se = null;
                    J >= l ? se = new RangeError(p) : F = s.concat(ae, J), ae = [], O.close(), C(se, F)
                }
                O.on("error", function Y(F) {
                    O.removeListener("end", te), O.removeListener("readable", re), C(F)
                }), O.on("end", te), O.end(P), re()
            }

            function c(O, P) {
                if ("string" == typeof P && (P = s.from(P)), !s.isBuffer(P)) throw new TypeError("Not a string or buffer");
                return O._processChunk(P, O._finishFlushFlag)
            }

            function r(O) {
                if (!(this instanceof r)) return new r(O);
                fe.call(this, O, w.DEFLATE)
            }

            function a(O) {
                if (!(this instanceof a)) return new a(O);
                fe.call(this, O, w.INFLATE)
            }

            function m(O) {
                if (!(this instanceof m)) return new m(O);
                fe.call(this, O, w.GZIP)
            }

            function _(O) {
                if (!(this instanceof _)) return new _(O);
                fe.call(this, O, w.GUNZIP)
            }

            function U(O) {
                if (!(this instanceof U)) return new U(O);
                fe.call(this, O, w.DEFLATERAW)
            }

            function S(O) {
                if (!(this instanceof S)) return new S(O);
                fe.call(this, O, w.INFLATERAW)
            }

            function D(O) {
                if (!(this instanceof D)) return new D(O);
                fe.call(this, O, w.UNZIP)
            }

            function M(O) {
                return O === w.Z_NO_FLUSH || O === w.Z_PARTIAL_FLUSH || O === w.Z_SYNC_FLUSH || O === w.Z_FULL_FLUSH || O === w.Z_FINISH || O === w.Z_BLOCK
            }

            function fe(O, P) {
                var C = this;
                if (this._opts = O = O || {}, this._chunkSize = O.chunkSize || e.Z_DEFAULT_CHUNK, d.call(this, O), O.flush && !M(O.flush)) throw new Error("Invalid flush flag: " + O.flush);
                if (O.finishFlush && !M(O.finishFlush)) throw new Error("Invalid flush flag: " + O.finishFlush);
                if (this._flushFlag = O.flush || w.Z_NO_FLUSH, this._finishFlushFlag = typeof O.finishFlush < "u" ? O.finishFlush : w.Z_FINISH, O.chunkSize && (O.chunkSize < e.Z_MIN_CHUNK || O.chunkSize > e.Z_MAX_CHUNK)) throw new Error("Invalid chunk size: " + O.chunkSize);
                if (O.windowBits && (O.windowBits < e.Z_MIN_WINDOWBITS || O.windowBits > e.Z_MAX_WINDOWBITS)) throw new Error("Invalid windowBits: " + O.windowBits);
                if (O.level && (O.level < e.Z_MIN_LEVEL || O.level > e.Z_MAX_LEVEL)) throw new Error("Invalid compression level: " + O.level);
                if (O.memLevel && (O.memLevel < e.Z_MIN_MEMLEVEL || O.memLevel > e.Z_MAX_MEMLEVEL)) throw new Error("Invalid memLevel: " + O.memLevel);
                if (O.strategy && O.strategy != e.Z_FILTERED && O.strategy != e.Z_HUFFMAN_ONLY && O.strategy != e.Z_RLE && O.strategy != e.Z_FIXED && O.strategy != e.Z_DEFAULT_STRATEGY) throw new Error("Invalid strategy: " + O.strategy);
                if (O.dictionary && !s.isBuffer(O.dictionary)) throw new Error("Invalid dictionary: it should be a Buffer instance");
                this._handle = new w.Zlib(P);
                var ae = this;
                this._hadError = !1, this._handle.onerror = function(Y, te) {
                    Se(ae), ae._hadError = !0;
                    var F = new Error(Y);
                    F.errno = te, F.code = e.codes[te], ae.emit("error", F)
                };
                var J = e.Z_DEFAULT_COMPRESSION;
                "number" == typeof O.level && (J = O.level);
                var re = e.Z_DEFAULT_STRATEGY;
                "number" == typeof O.strategy && (re = O.strategy), this._handle.init(O.windowBits || e.Z_DEFAULT_WINDOWBITS, J, O.memLevel || e.Z_DEFAULT_MEMLEVEL, re, O.dictionary), this._buffer = s.allocUnsafe(this._chunkSize), this._offset = 0, this._level = J, this._strategy = re, this.once("end", this.close), Object.defineProperty(this, "_closed", {
                    get: function() {
                        return !C._handle
                    },
                    configurable: !0,
                    enumerable: !0
                })
            }

            function Se(O, P) {
                P && process.nextTick(P), O._handle && (O._handle.close(), O._handle = null)
            }

            function _e(O) {
                O.emit("close")
            }
            Object.defineProperty(e, "codes", {
                enumerable: !0,
                value: Object.freeze(y),
                writable: !1
            }), e.Deflate = r, e.Inflate = a, e.Gzip = m, e.Gunzip = _, e.DeflateRaw = U, e.InflateRaw = S, e.Unzip = D, e.createDeflate = function(O) {
                return new r(O)
            }, e.createInflate = function(O) {
                return new a(O)
            }, e.createDeflateRaw = function(O) {
                return new U(O)
            }, e.createInflateRaw = function(O) {
                return new S(O)
            }, e.createGzip = function(O) {
                return new m(O)
            }, e.createGunzip = function(O) {
                return new _(O)
            }, e.createUnzip = function(O) {
                return new D(O)
            }, e.deflate = function(O, P, C) {
                return "function" == typeof P && (C = P, P = {}), h(new r(P), O, C)
            }, e.deflateSync = function(O, P) {
                return c(new r(P), O)
            }, e.gzip = function(O, P, C) {
                return "function" == typeof P && (C = P, P = {}), h(new m(P), O, C)
            }, e.gzipSync = function(O, P) {
                return c(new m(P), O)
            }, e.deflateRaw = function(O, P, C) {
                return "function" == typeof P && (C = P, P = {}), h(new U(P), O, C)
            }, e.deflateRawSync = function(O, P) {
                return c(new U(P), O)
            }, e.unzip = function(O, P, C) {
                return "function" == typeof P && (C = P, P = {}), h(new D(P), O, C)
            }, e.unzipSync = function(O, P) {
                return c(new D(P), O)
            }, e.inflate = function(O, P, C) {
                return "function" == typeof P && (C = P, P = {}), h(new a(P), O, C)
            }, e.inflateSync = function(O, P) {
                return c(new a(P), O)
            }, e.gunzip = function(O, P, C) {
                return "function" == typeof P && (C = P, P = {}), h(new _(P), O, C)
            }, e.gunzipSync = function(O, P) {
                return c(new _(P), O)
            }, e.inflateRaw = function(O, P, C) {
                return "function" == typeof P && (C = P, P = {}), h(new S(P), O, C)
            }, e.inflateRawSync = function(O, P) {
                return c(new S(P), O)
            }, B.inherits(fe, d), fe.prototype.params = function(O, P, C) {
                if (O < e.Z_MIN_LEVEL || O > e.Z_MAX_LEVEL) throw new RangeError("Invalid compression level: " + O);
                if (P != e.Z_FILTERED && P != e.Z_HUFFMAN_ONLY && P != e.Z_RLE && P != e.Z_FIXED && P != e.Z_DEFAULT_STRATEGY) throw new TypeError("Invalid strategy: " + P);
                if (this._level !== O || this._strategy !== P) {
                    var ae = this;
                    this.flush(w.Z_SYNC_FLUSH, function() {
                        u(ae._handle, "zlib binding closed"), ae._handle.params(O, P), ae._hadError || (ae._level = O, ae._strategy = P, C && C())
                    })
                } else process.nextTick(C)
            }, fe.prototype.reset = function() {
                return u(this._handle, "zlib binding closed"), this._handle.reset()
            }, fe.prototype._flush = function(O) {
                this._transform(s.alloc(0), "", O)
            }, fe.prototype.flush = function(O, P) {
                var C = this,
                    ae = this._writableState;
                ("function" == typeof O || void 0 === O && !P) && (P = O, O = w.Z_FULL_FLUSH), ae.ended ? P && process.nextTick(P) : ae.ending ? P && this.once("end", P) : ae.needDrain ? P && this.once("drain", function() {
                    return C.flush(O, P)
                }) : (this._flushFlag = O, this.write(s.alloc(0), "", P))
            }, fe.prototype.close = function(O) {
                Se(this, O), process.nextTick(_e, this)
            }, fe.prototype._transform = function(O, P, C) {
                var ae, J = this._writableState,
                    Y = (J.ending || J.ended) && (!O || J.length === O.length);
                return null === O || s.isBuffer(O) ? this._handle ? (Y ? ae = this._finishFlushFlag : (ae = this._flushFlag, O.length >= J.length && (this._flushFlag = this._opts.flush || w.Z_NO_FLUSH)), void this._processChunk(O, ae, C)) : C(new Error("zlib binding closed")) : C(new Error("invalid input"))
            }, fe.prototype._processChunk = function(O, P, C) {
                var ae = O && O.length,
                    J = this._chunkSize - this._offset,
                    re = 0,
                    Y = this,
                    te = "function" == typeof C;
                if (!te) {
                    var V, F = [],
                        se = 0;
                    this.on("error", function(Le) {
                        V = Le
                    }), u(this._handle, "zlib binding closed");
                    do {
                        var q = this._handle.writeSync(P, O, re, ae, this._buffer, this._offset, J)
                    } while (!this._hadError && Ee(q[0], q[1]));
                    if (this._hadError) throw V;
                    if (se >= l) throw Se(this), new RangeError(p);
                    var H = s.concat(F, se);
                    return Se(this), H
                }
                u(this._handle, "zlib binding closed");
                var ce = this._handle.write(P, O, re, ae, this._buffer, this._offset, J);

                function Ee(Le, oe) {
                    if (this && (this.buffer = null, this.callback = null), !Y._hadError) {
                        var Q = J - oe;
                        if (u(Q >= 0, "have should not go down"), Q > 0) {
                            var me = Y._buffer.slice(Y._offset, Y._offset + Q);
                            Y._offset += Q, te ? Y.push(me) : (F.push(me), se += me.length)
                        }
                        if ((0 === oe || Y._offset >= Y._chunkSize) && (J = Y._chunkSize, Y._offset = 0, Y._buffer = s.allocUnsafe(Y._chunkSize)), 0 === oe) {
                            if (re += ae - Le, ae = Le, !te) return !0;
                            var Ie = Y._handle.write(P, O, re, ae, Y._buffer, Y._offset, Y._chunkSize);
                            return Ie.callback = Ee, void(Ie.buffer = O)
                        }
                        if (!te) return !1;
                        C()
                    }
                }
                ce.buffer = O, ce.callback = Ee
            }, B.inherits(r, fe), B.inherits(a, fe), B.inherits(m, fe), B.inherits(_, fe), B.inherits(U, fe), B.inherits(S, fe), B.inherits(D, fe)
        },
        44208: ve => {
            ve.exports = {
                100: "Continue",
                101: "Switching Protocols",
                102: "Processing",
                200: "OK",
                201: "Created",
                202: "Accepted",
                203: "Non-Authoritative Information",
                204: "No Content",
                205: "Reset Content",
                206: "Partial Content",
                207: "Multi-Status",
                208: "Already Reported",
                226: "IM Used",
                300: "Multiple Choices",
                301: "Moved Permanently",
                302: "Found",
                303: "See Other",
                304: "Not Modified",
                305: "Use Proxy",
                307: "Temporary Redirect",
                308: "Permanent Redirect",
                400: "Bad Request",
                401: "Unauthorized",
                402: "Payment Required",
                403: "Forbidden",
                404: "Not Found",
                405: "Method Not Allowed",
                406: "Not Acceptable",
                407: "Proxy Authentication Required",
                408: "Request Timeout",
                409: "Conflict",
                410: "Gone",
                411: "Length Required",
                412: "Precondition Failed",
                413: "Payload Too Large",
                414: "URI Too Long",
                415: "Unsupported Media Type",
                416: "Range Not Satisfiable",
                417: "Expectation Failed",
                418: "I'm a teapot",
                421: "Misdirected Request",
                422: "Unprocessable Entity",
                423: "Locked",
                424: "Failed Dependency",
                425: "Unordered Collection",
                426: "Upgrade Required",
                428: "Precondition Required",
                429: "Too Many Requests",
                431: "Request Header Fields Too Large",
                451: "Unavailable For Legal Reasons",
                500: "Internal Server Error",
                501: "Not Implemented",
                502: "Bad Gateway",
                503: "Service Unavailable",
                504: "Gateway Timeout",
                505: "HTTP Version Not Supported",
                506: "Variant Also Negotiates",
                507: "Insufficient Storage",
                508: "Loop Detected",
                509: "Bandwidth Limit Exceeded",
                510: "Not Extended",
                511: "Network Authentication Required"
            }
        },
        21648: (ve, e, A) => {
            "use strict";
            var s = A(67809),
                d = "function" == typeof Symbol && "symbol" == typeof Symbol("foo"),
                w = Object.prototype.toString,
                B = Array.prototype.concat,
                u = A(19224),
                p = A(2486)(),
                T = function(v, y, x, o) {
                    if (y in v)
                        if (!0 === o) {
                            if (v[y] === x) return
                        } else if (! function(v) {
                            return "function" == typeof v && "[object Function]" === w.call(v)
                        }(o) || !o()) return;
                    p ? u(v, y, x, !0) : u(v, y, x)
                },
                R = function(v, y) {
                    var x = arguments.length > 2 ? arguments[2] : {},
                        o = s(y);
                    d && (o = B.call(o, Object.getOwnPropertySymbols(y)));
                    for (var E = 0; E < o.length; E += 1) T(v, o[E], y[o[E]], x[o[E]])
                };
            R.supportsDescriptors = !!p, ve.exports = R
        },
        20555: (ve, e, A) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.keccak512 = e.keccak384 = e.keccak256 = e.keccak224 = void 0;
            const s = A(23034),
                d = A(21492);
            e.keccak224 = (0, d.wrapHash)(s.keccak_224), e.keccak256 = (() => {
                const w = (0, d.wrapHash)(s.keccak_256);
                return w.create = s.keccak_256.create, w
            })(), e.keccak384 = (0, d.wrapHash)(s.keccak_384), e.keccak512 = (0, d.wrapHash)(s.keccak_512)
        },
        72991: (ve, e, A) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.secp256k1 = void 0;
            var s = A(62771);
            Object.defineProperty(e, "secp256k1", {
                enumerable: !0,
                get: function() {
                    return s.secp256k1
                }
            })
        },
        21492: function(ve, e, A) {
            "use strict";
            ve = A.nmd(ve);
            var s = this && this.__importDefault || function(y) {
                return y && y.__esModule ? y : {
                    default: y
                }
            };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.crypto = e.wrapHash = e.equalsBytes = e.hexToBytes = e.bytesToUtf8 = e.utf8ToBytes = e.createView = e.concatBytes = e.toHex = e.bytesToHex = e.assertBytes = e.assertBool = void 0;
            const d = s(A(95600)),
                w = A(21865);
            e.assertBool = d.default.bool, e.assertBytes = d.default.bytes;
            var l = A(21865);
            Object.defineProperty(e, "bytesToHex", {
                enumerable: !0,
                get: function() {
                    return l.bytesToHex
                }
            }), Object.defineProperty(e, "toHex", {
                enumerable: !0,
                get: function() {
                    return l.bytesToHex
                }
            }), Object.defineProperty(e, "concatBytes", {
                enumerable: !0,
                get: function() {
                    return l.concatBytes
                }
            }), Object.defineProperty(e, "createView", {
                enumerable: !0,
                get: function() {
                    return l.createView
                }
            }), Object.defineProperty(e, "utf8ToBytes", {
                enumerable: !0,
                get: function() {
                    return l.utf8ToBytes
                }
            }), e.bytesToUtf8 = function p(y) {
                if (!(y instanceof Uint8Array)) throw new TypeError("bytesToUtf8 expected Uint8Array, got " + typeof y);
                return (new TextDecoder).decode(y)
            }, e.hexToBytes = function T(y) {
                const x = y.startsWith("0x") ? y.substring(2) : y;
                return (0, w.hexToBytes)(x)
            }, e.equalsBytes = function R(y, x) {
                if (y.length !== x.length) return !1;
                for (let o = 0; o < y.length; o++)
                    if (y[o] !== x[o]) return !1;
                return !0
            }, e.wrapHash = function v(y) {
                return x => (d.default.bytes(x), y(x))
            }, e.crypto = (() => {
                const y = "object" == typeof globalThis && "crypto" in globalThis ? globalThis.crypto : void 0,
                    x = "function" == typeof ve.require && ve.require.bind(ve);
                return {
                    node: x && !y ? x("crypto") : void 0,
                    web: y
                }
            })()
        },
        83307: (ve, e, A) => {
            "use strict";
            var s = A(42238),
                d = Object.prototype.toString,
                w = Object.prototype.hasOwnProperty;
            ve.exports = function(R, v, y) {
                if (!s(v)) throw new TypeError("iterator must be a function");
                var x;
                arguments.length >= 3 && (x = y), "[object Array]" === d.call(R) ? function(R, v, y) {
                    for (var x = 0, o = R.length; x < o; x++) w.call(R, x) && (null == y ? v(R[x], x, R) : v.call(y, R[x], x, R))
                }(R, v, x) : "string" == typeof R ? function(R, v, y) {
                    for (var x = 0, o = R.length; x < o; x++) null == y ? v(R.charAt(x), x, R) : v.call(y, R.charAt(x), x, R)
                }(R, v, x) : function(R, v, y) {
                    for (var x in R) w.call(R, x) && (null == y ? v(R[x], x, R) : v.call(y, R[x], x, R))
                }(R, v, x)
            }
        },
        78041: (ve, e, A) => {
            "use strict";
            var s = A(65441);
            ve.exports = function() {
                return s() && !!Symbol.toStringTag
            }
        },
        84508: (ve, e, A) => {
            var s = A(4444),
                d = A(52445),
                w = ve.exports;
            for (var B in s) s.hasOwnProperty(B) && (w[B] = s[B]);

            function u(l) {
                if ("string" == typeof l && (l = d.parse(l)), l.protocol || (l.protocol = "https:"), "https:" !== l.protocol) throw new Error('Protocol "' + l.protocol + '" not supported. Expected "https:"');
                return l
            }
            w.request = function(l, p) {
                return l = u(l), s.request.call(this, l, p)
            }, w.get = function(l, p) {
                return l = u(l), s.get.call(this, l, p)
            }
        },
        98147: (ve, e, A) => {
            "use strict";
            var s = A(78041)(),
                w = A(41098)("Object.prototype.toString"),
                B = function(T) {
                    return !(s && T && "object" == typeof T && Symbol.toStringTag in T) && "[object Arguments]" === w(T)
                },
                u = function(T) {
                    return !!B(T) || null !== T && "object" == typeof T && "number" == typeof T.length && T.length >= 0 && "[object Array]" !== w(T) && "[object Function]" === w(T.callee)
                },
                l = function() {
                    return B(arguments)
                }();
            B.isLegacyArguments = u, ve.exports = l ? B : u
        },
        42238: ve => {
            "use strict";
            var s, d, e = Function.prototype.toString,
                A = "object" == typeof Reflect && null !== Reflect && Reflect.apply;
            if ("function" == typeof A && "function" == typeof Object.defineProperty) try {
                s = Object.defineProperty({}, "length", {
                    get: function() {
                        throw d
                    }
                }), d = {}, A(function() {
                    throw 42
                }, null, s)
            } catch (r) {
                r !== d && (A = null)
            } else A = null;
            var w = /^\s*class\b/,
                B = function(a) {
                    try {
                        var m = e.call(a);
                        return w.test(m)
                    } catch {
                        return !1
                    }
                },
                u = function(a) {
                    try {
                        return !B(a) && (e.call(a), !0)
                    } catch {
                        return !1
                    }
                },
                l = Object.prototype.toString,
                o = "function" == typeof Symbol && !!Symbol.toStringTag,
                E = !(0 in [, ]),
                h = function() {
                    return !1
                };
            if ("object" == typeof document) {
                var c = document.all;
                l.call(c) === l.call(document.all) && (h = function(a) {
                    if ((E || !a) && (typeof a > "u" || "object" == typeof a)) try {
                        var m = l.call(a);
                        return ("[object HTMLAllCollection]" === m || "[object HTML document.all class]" === m || "[object HTMLCollection]" === m || "[object Object]" === m) && null == a("")
                    } catch {}
                    return !1
                })
            }
            ve.exports = A ? function(a) {
                if (h(a)) return !0;
                if (!a || "function" != typeof a && "object" != typeof a) return !1;
                try {
                    A(a, null, s)
                } catch (m) {
                    if (m !== d) return !1
                }
                return !B(a) && u(a)
            } : function(a) {
                if (h(a)) return !0;
                if (!a || "function" != typeof a && "object" != typeof a) return !1;
                if (o) return u(a);
                if (B(a)) return !1;
                var m = l.call(a);
                return !("[object Function]" !== m && "[object GeneratorFunction]" !== m && !/^\[object HTML/.test(m)) && u(a)
            }
        },
        73286: (ve, e, A) => {
            "use strict";
            var p, s = Object.prototype.toString,
                d = Function.prototype.toString,
                w = /^\s*(?:function)?\*/,
                B = A(78041)(),
                u = Object.getPrototypeOf;
            ve.exports = function(R) {
                if ("function" != typeof R) return !1;
                if (w.test(d.call(R))) return !0;
                if (!B) return "[object GeneratorFunction]" === s.call(R);
                if (!u) return !1;
                if (typeof p > "u") {
                    var y = function() {
                        if (!B) return !1;
                        try {
                            return Function("return function*() {}")()
                        } catch {}
                    }();
                    p = !!y && u(y)
                }
                return u(R) === p
            }
        },
        64904: ve => {
            "use strict";
            ve.exports = function(A) {
                return A != A
            }
        },
        40389: (ve, e, A) => {
            "use strict";
            var s = A(35436),
                d = A(21648),
                w = A(64904),
                B = A(25528),
                u = A(85505),
                l = s(B(), Number);
            d(l, {
                getPolyfill: B,
                implementation: w,
                shim: u
            }), ve.exports = l
        },
        25528: (ve, e, A) => {
            "use strict";
            var s = A(64904);
            ve.exports = function() {
                return Number.isNaN && Number.isNaN(NaN) && !Number.isNaN("a") ? Number.isNaN : s
            }
        },
        85505: (ve, e, A) => {
            "use strict";
            var s = A(21648),
                d = A(25528);
            ve.exports = function() {
                var B = d();
                return s(Number, {
                    isNaN: B
                }, {
                    isNaN: function() {
                        return Number.isNaN !== B
                    }
                }), B
            }
        },
        92462: (ve, e, A) => {
            "use strict";
            var s = A(36326);
            ve.exports = function(w) {
                return !!s(w)
            }
        },
        51384: (ve, e, A) => {
            "use strict";
            var s = A(50806),
                d = s.ValidatorResult,
                w = s.SchemaError,
                B = {
                    ignoreProperties: {
                        id: !0,
                        default: !0,
                        description: !0,
                        title: !0,
                        additionalItems: !0,
                        then: !0,
                        else: !0,
                        $schema: !0,
                        $ref: !0,
                        extends: !0
                    }
                },
                u = B.validators = {};

            function l(y, x, o, E, h) {
                var c = x.throwError,
                    r = x.throwAll;
                x.throwError = !1, x.throwAll = !1;
                var a = this.validateSchema(y, h, x, o);
                return x.throwError = c, x.throwAll = r, !a.valid && E instanceof Function && E(a), a.valid
            }

            function p(y, x) {
                if (Object.hasOwnProperty.call(y, x)) return y[x];
                if (x in y)
                    for (; y = Object.getPrototypeOf(y);)
                        if (Object.propertyIsEnumerable.call(y, x)) return y[x]
            }

            function T(y, x, o, E, h, c) {
                if (this.types.object(y) && (!x.properties || void 0 === x.properties[h]))
                    if (!1 === x.additionalProperties) c.addError({
                        name: "additionalProperties",
                        argument: h,
                        message: "is not allowed to have the additional property " + JSON.stringify(h)
                    });
                    else {
                        var r = x.additionalProperties || {};
                        "function" == typeof o.preValidateProperty && o.preValidateProperty(y, h, r, o, E);
                        var a = this.validateSchema(y[h], r, o, E.makeChild(r, h));
                        a.instance !== c.instance[h] && (c.instance[h] = a.instance), c.importErrors(a)
                    }
            }
            u.type = function(x, o, E, h) {
                if (void 0 === x) return null;
                var c = new d(x, o, E, h),
                    r = Array.isArray(o.type) ? o.type : [o.type];
                if (!r.some(this.testType.bind(this, x, o, E, h))) {
                    var a = r.map(function(m) {
                        if (m) {
                            var _ = m.$id || m.id;
                            return _ ? "<" + _ + ">" : m + ""
                        }
                    });
                    c.addError({
                        name: "type",
                        argument: a,
                        message: "is not of a type(s) " + a
                    })
                }
                return c
            }, u.anyOf = function(x, o, E, h) {
                if (void 0 === x) return null;
                var c = new d(x, o, E, h),
                    r = new d(x, o, E, h);
                if (!Array.isArray(o.anyOf)) throw new w("anyOf must be an array");
                if (!o.anyOf.some(l.bind(this, x, E, h, function(m) {
                        r.importErrors(m)
                    }))) {
                    var a = o.anyOf.map(function(m, _) {
                        var U = m.$id || m.id;
                        return U ? "<" + U + ">" : m.title && JSON.stringify(m.title) || m.$ref && "<" + m.$ref + ">" || "[subschema " + _ + "]"
                    });
                    E.nestedErrors && c.importErrors(r), c.addError({
                        name: "anyOf",
                        argument: a,
                        message: "is not any of " + a.join(",")
                    })
                }
                return c
            }, u.allOf = function(x, o, E, h) {
                if (void 0 === x) return null;
                if (!Array.isArray(o.allOf)) throw new w("allOf must be an array");
                var c = new d(x, o, E, h),
                    r = this;
                return o.allOf.forEach(function(a, m) {
                    var _ = r.validateSchema(x, a, E, h);
                    if (!_.valid) {
                        var S = a.$id || a.id || a.title && JSON.stringify(a.title) || a.$ref && "<" + a.$ref + ">" || "[subschema " + m + "]";
                        c.addError({
                            name: "allOf",
                            argument: {
                                id: S,
                                length: _.errors.length,
                                valid: _
                            },
                            message: "does not match allOf schema " + S + " with " + _.errors.length + " error[s]:"
                        }), c.importErrors(_)
                    }
                }), c
            }, u.oneOf = function(x, o, E, h) {
                if (void 0 === x) return null;
                if (!Array.isArray(o.oneOf)) throw new w("oneOf must be an array");
                var c = new d(x, o, E, h),
                    r = new d(x, o, E, h),
                    a = o.oneOf.filter(l.bind(this, x, E, h, function(_) {
                        r.importErrors(_)
                    })).length,
                    m = o.oneOf.map(function(_, U) {
                        return _.$id || _.id || _.title && JSON.stringify(_.title) || _.$ref && "<" + _.$ref + ">" || "[subschema " + U + "]"
                    });
                return 1 !== a && (E.nestedErrors && c.importErrors(r), c.addError({
                    name: "oneOf",
                    argument: m,
                    message: "is not exactly one from " + m.join(",")
                })), c
            }, u.if = function(x, o, E, h) {
                if (void 0 === x) return null;
                if (!s.isSchema(o.if)) throw new Error('Expected "if" keyword to be a schema');
                var a, c = l.call(this, x, E, h, null, o.if),
                    r = new d(x, o, E, h);
                if (c) {
                    if (void 0 === o.then) return;
                    if (!s.isSchema(o.then)) throw new Error('Expected "then" keyword to be a schema');
                    a = this.validateSchema(x, o.then, E, h.makeChild(o.then)), r.importErrors(a)
                } else {
                    if (void 0 === o.else) return;
                    if (!s.isSchema(o.else)) throw new Error('Expected "else" keyword to be a schema');
                    a = this.validateSchema(x, o.else, E, h.makeChild(o.else)), r.importErrors(a)
                }
                return r
            }, u.propertyNames = function(x, o, E, h) {
                if (this.types.object(x)) {
                    var c = new d(x, o, E, h),
                        r = void 0 !== o.propertyNames ? o.propertyNames : {};
                    if (!s.isSchema(r)) throw new w('Expected "propertyNames" to be a schema (object or boolean)');
                    for (var a in x)
                        if (void 0 !== p(x, a)) {
                            var m = this.validateSchema(a, r, E, h.makeChild(r));
                            c.importErrors(m)
                        }
                    return c
                }
            }, u.properties = function(x, o, E, h) {
                if (this.types.object(x)) {
                    var c = new d(x, o, E, h),
                        r = o.properties || {};
                    for (var a in r) {
                        var m = r[a];
                        if (void 0 !== m) {
                            if (null === m) throw new w('Unexpected null, expected schema in "properties"');
                            "function" == typeof E.preValidateProperty && E.preValidateProperty(x, a, m, E, h);
                            var _ = p(x, a),
                                U = this.validateSchema(_, m, E, h.makeChild(m, a));
                            U.instance !== c.instance[a] && (c.instance[a] = U.instance), c.importErrors(U)
                        }
                    }
                    return c
                }
            }, u.patternProperties = function(x, o, E, h) {
                if (this.types.object(x)) {
                    var c = new d(x, o, E, h),
                        r = o.patternProperties || {};
                    for (var a in x) {
                        var m = !0;
                        for (var _ in r) {
                            var U = r[_];
                            if (void 0 !== U) {
                                if (null === U) throw new w('Unexpected null, expected schema in "patternProperties"');
                                try {
                                    var S = new RegExp(_, "u")
                                } catch {
                                    S = new RegExp(_)
                                }
                                if (S.test(a)) {
                                    m = !1, "function" == typeof E.preValidateProperty && E.preValidateProperty(x, a, U, E, h);
                                    var D = this.validateSchema(x[a], U, E, h.makeChild(U, a));
                                    D.instance !== c.instance[a] && (c.instance[a] = D.instance), c.importErrors(D)
                                }
                            }
                        }
                        m && T.call(this, x, o, E, h, a, c)
                    }
                    return c
                }
            }, u.additionalProperties = function(x, o, E, h) {
                if (this.types.object(x)) {
                    if (o.patternProperties) return null;
                    var c = new d(x, o, E, h);
                    for (var r in x) T.call(this, x, o, E, h, r, c);
                    return c
                }
            }, u.minProperties = function(x, o, E, h) {
                if (this.types.object(x)) {
                    var c = new d(x, o, E, h);
                    return Object.keys(x).length >= o.minProperties || c.addError({
                        name: "minProperties",
                        argument: o.minProperties,
                        message: "does not meet minimum property length of " + o.minProperties
                    }), c
                }
            }, u.maxProperties = function(x, o, E, h) {
                if (this.types.object(x)) {
                    var c = new d(x, o, E, h);
                    return Object.keys(x).length <= o.maxProperties || c.addError({
                        name: "maxProperties",
                        argument: o.maxProperties,
                        message: "does not meet maximum property length of " + o.maxProperties
                    }), c
                }
            }, u.items = function(x, o, E, h) {
                var c = this;
                if (this.types.array(x) && void 0 !== o.items) {
                    var r = new d(x, o, E, h);
                    return x.every(function(a, m) {
                        if (Array.isArray(o.items)) var _ = void 0 === o.items[m] ? o.additionalItems : o.items[m];
                        else _ = o.items;
                        if (void 0 === _) return !0;
                        if (!1 === _) return r.addError({
                            name: "items",
                            message: "additionalItems not permitted"
                        }), !1;
                        var U = c.validateSchema(a, _, E, h.makeChild(_, m));
                        return U.instance !== r.instance[m] && (r.instance[m] = U.instance), r.importErrors(U), !0
                    }), r
                }
            }, u.contains = function(x, o, E, h) {
                var c = this;
                if (this.types.array(x) && void 0 !== o.contains) {
                    if (!s.isSchema(o.contains)) throw new Error('Expected "contains" keyword to be a schema');
                    var r = new d(x, o, E, h);
                    return !1 === x.some(function(m, _) {
                        return 0 === c.validateSchema(m, o.contains, E, h.makeChild(o.contains, _)).errors.length
                    }) && r.addError({
                        name: "contains",
                        argument: o.contains,
                        message: "must contain an item matching given schema"
                    }), r
                }
            }, u.minimum = function(x, o, E, h) {
                if (this.types.number(x)) {
                    var c = new d(x, o, E, h);
                    return o.exclusiveMinimum && !0 === o.exclusiveMinimum ? x > o.minimum || c.addError({
                        name: "minimum",
                        argument: o.minimum,
                        message: "must be greater than " + o.minimum
                    }) : x >= o.minimum || c.addError({
                        name: "minimum",
                        argument: o.minimum,
                        message: "must be greater than or equal to " + o.minimum
                    }), c
                }
            }, u.maximum = function(x, o, E, h) {
                if (this.types.number(x)) {
                    var c = new d(x, o, E, h);
                    return o.exclusiveMaximum && !0 === o.exclusiveMaximum ? x < o.maximum || c.addError({
                        name: "maximum",
                        argument: o.maximum,
                        message: "must be less than " + o.maximum
                    }) : x <= o.maximum || c.addError({
                        name: "maximum",
                        argument: o.maximum,
                        message: "must be less than or equal to " + o.maximum
                    }), c
                }
            }, u.exclusiveMinimum = function(x, o, E, h) {
                if ("boolean" != typeof o.exclusiveMinimum && this.types.number(x)) {
                    var c = new d(x, o, E, h);
                    return x > o.exclusiveMinimum || c.addError({
                        name: "exclusiveMinimum",
                        argument: o.exclusiveMinimum,
                        message: "must be strictly greater than " + o.exclusiveMinimum
                    }), c
                }
            }, u.exclusiveMaximum = function(x, o, E, h) {
                if ("boolean" != typeof o.exclusiveMaximum && this.types.number(x)) {
                    var c = new d(x, o, E, h);
                    return x < o.exclusiveMaximum || c.addError({
                        name: "exclusiveMaximum",
                        argument: o.exclusiveMaximum,
                        message: "must be strictly less than " + o.exclusiveMaximum
                    }), c
                }
            };
            var R = function(x, o, E, h, c, r) {
                if (this.types.number(x)) {
                    var a = o[c];
                    if (0 == a) throw new w(c + " cannot be zero");
                    var m = new d(x, o, E, h),
                        _ = s.getDecimalPlaces(x),
                        U = s.getDecimalPlaces(a),
                        S = Math.max(_, U),
                        D = Math.pow(10, S);
                    return Math.round(x * D) % Math.round(a * D) != 0 && m.addError({
                        name: c,
                        argument: a,
                        message: r + JSON.stringify(a)
                    }), m
                }
            };

            function v(y, x, o) {
                var E, h = o.length;
                for (E = x + 1; E < h; E++)
                    if (s.deepCompareStrict(y, o[E])) return !1;
                return !0
            }
            u.multipleOf = function(x, o, E, h) {
                return R.call(this, x, o, E, h, "multipleOf", "is not a multiple of (divisible by) ")
            }, u.divisibleBy = function(x, o, E, h) {
                return R.call(this, x, o, E, h, "divisibleBy", "is not divisible by (multiple of) ")
            }, u.required = function(x, o, E, h) {
                var c = new d(x, o, E, h);
                return void 0 === x && !0 === o.required ? c.addError({
                    name: "required",
                    message: "is required"
                }) : this.types.object(x) && Array.isArray(o.required) && o.required.forEach(function(r) {
                    void 0 === p(x, r) && c.addError({
                        name: "required",
                        argument: r,
                        message: "requires property " + JSON.stringify(r)
                    })
                }), c
            }, u.pattern = function(x, o, E, h) {
                if (this.types.string(x)) {
                    var c = new d(x, o, E, h),
                        r = o.pattern;
                    try {
                        var a = new RegExp(r, "u")
                    } catch {
                        a = new RegExp(r)
                    }
                    return x.match(a) || c.addError({
                        name: "pattern",
                        argument: o.pattern,
                        message: "does not match pattern " + JSON.stringify(o.pattern.toString())
                    }), c
                }
            }, u.format = function(x, o, E, h) {
                if (void 0 !== x) {
                    var c = new d(x, o, E, h);
                    return !c.disableFormat && !s.isFormat(x, o.format, this) && c.addError({
                        name: "format",
                        argument: o.format,
                        message: "does not conform to the " + JSON.stringify(o.format) + " format"
                    }), c
                }
            }, u.minLength = function(x, o, E, h) {
                if (this.types.string(x)) {
                    var c = new d(x, o, E, h),
                        r = x.match(/[\uDC00-\uDFFF]/g);
                    return x.length - (r ? r.length : 0) >= o.minLength || c.addError({
                        name: "minLength",
                        argument: o.minLength,
                        message: "does not meet minimum length of " + o.minLength
                    }), c
                }
            }, u.maxLength = function(x, o, E, h) {
                if (this.types.string(x)) {
                    var c = new d(x, o, E, h),
                        r = x.match(/[\uDC00-\uDFFF]/g);
                    return x.length - (r ? r.length : 0) <= o.maxLength || c.addError({
                        name: "maxLength",
                        argument: o.maxLength,
                        message: "does not meet maximum length of " + o.maxLength
                    }), c
                }
            }, u.minItems = function(x, o, E, h) {
                if (this.types.array(x)) {
                    var c = new d(x, o, E, h);
                    return x.length >= o.minItems || c.addError({
                        name: "minItems",
                        argument: o.minItems,
                        message: "does not meet minimum length of " + o.minItems
                    }), c
                }
            }, u.maxItems = function(x, o, E, h) {
                if (this.types.array(x)) {
                    var c = new d(x, o, E, h);
                    return x.length <= o.maxItems || c.addError({
                        name: "maxItems",
                        argument: o.maxItems,
                        message: "does not meet maximum length of " + o.maxItems
                    }), c
                }
            }, u.uniqueItems = function(x, o, E, h) {
                if (!0 === o.uniqueItems && this.types.array(x)) {
                    var c = new d(x, o, E, h);
                    return x.every(v) || c.addError({
                        name: "uniqueItems",
                        message: "contains duplicate item"
                    }), c
                }
            }, u.dependencies = function(x, o, E, h) {
                if (this.types.object(x)) {
                    var c = new d(x, o, E, h);
                    for (var r in o.dependencies)
                        if (void 0 !== x[r]) {
                            var a = o.dependencies[r],
                                m = h.makeChild(a, r);
                            if ("string" == typeof a && (a = [a]), Array.isArray(a)) a.forEach(function(U) {
                                void 0 === x[U] && c.addError({
                                    name: "dependencies",
                                    argument: m.propertyPath,
                                    message: "property " + U + " not found, required by " + m.propertyPath
                                })
                            });
                            else {
                                var _ = this.validateSchema(x, a, E, m);
                                c.instance !== _.instance && (c.instance = _.instance), _ && _.errors.length && (c.addError({
                                    name: "dependencies",
                                    argument: m.propertyPath,
                                    message: "does not meet dependency required by " + m.propertyPath
                                }), c.importErrors(_))
                            }
                        }
                    return c
                }
            }, u.enum = function(x, o, E, h) {
                if (void 0 === x) return null;
                if (!Array.isArray(o.enum)) throw new w("enum expects an array", o);
                var c = new d(x, o, E, h);
                return o.enum.some(s.deepCompareStrict.bind(null, x)) || c.addError({
                    name: "enum",
                    argument: o.enum,
                    message: "is not one of enum values: " + o.enum.map(String).join(",")
                }), c
            }, u.const = function(x, o, E, h) {
                if (void 0 === x) return null;
                var c = new d(x, o, E, h);
                return s.deepCompareStrict(o.const, x) || c.addError({
                    name: "const",
                    argument: o.const,
                    message: "does not exactly match expected constant: " + o.const
                }), c
            }, u.not = u.disallow = function(x, o, E, h) {
                var c = this;
                if (void 0 === x) return null;
                var r = new d(x, o, E, h),
                    a = o.not || o.disallow;
                return a ? (Array.isArray(a) || (a = [a]), a.forEach(function(m) {
                    if (c.testType(x, o, E, h, m)) {
                        var U = m && (m.$id || m.id) || m;
                        r.addError({
                            name: "not",
                            argument: U,
                            message: "is of prohibited type " + U
                        })
                    }
                }), r) : null
            }, ve.exports = B
        },
        50806: (ve, e, A) => {
            "use strict";
            var s = A(52445),
                d = e.ValidationError = function(c, r, a, m, _, U) {
                    Array.isArray(m) ? (this.path = m, this.property = m.reduce(function(D, M) {
                        return D + R(M)
                    }, "instance")) : void 0 !== m && (this.property = m), c && (this.message = c), a && (this.schema = a.$id || a.id || a), void 0 !== r && (this.instance = r), this.name = _, this.argument = U, this.stack = this.toString()
                };
            d.prototype.toString = function() {
                return this.property + " " + this.message
            };
            var w = e.ValidatorResult = function(c, r, a, m) {
                this.instance = c, this.schema = r, this.options = a, this.path = m.path, this.propertyPath = m.propertyPath, this.errors = [], this.throwError = a && a.throwError, this.throwFirst = a && a.throwFirst, this.throwAll = a && a.throwAll, this.disableFormat = a && !0 === a.disableFormat
            };

            function B(h, c) {
                return c + ": " + h.toString() + "\n"
            }

            function u(h) {
                Error.captureStackTrace && Error.captureStackTrace(this, u), this.instance = h.instance, this.schema = h.schema, this.options = h.options, this.errors = h.errors
            }
            w.prototype.addError = function(c) {
                var r;
                if ("string" == typeof c) r = new d(c, this.instance, this.schema, this.path);
                else {
                    if (!c) throw new Error("Missing error detail");
                    if (!c.message) throw new Error("Missing error message");
                    if (!c.name) throw new Error("Missing validator type");
                    r = new d(c.message, this.instance, this.schema, this.path, c.name, c.argument)
                }
                if (this.errors.push(r), this.throwFirst) throw new u(this);
                if (this.throwError) throw r;
                return r
            }, w.prototype.importErrors = function(c) {
                "string" == typeof c || c && c.validatorType ? this.addError(c) : c && c.errors && (this.errors = this.errors.concat(c.errors))
            }, w.prototype.toString = function(c) {
                return this.errors.map(B).join("")
            }, Object.defineProperty(w.prototype, "valid", {
                get: function() {
                    return !this.errors.length
                }
            }), ve.exports.ValidatorResultError = u, (u.prototype = new Error).constructor = u, u.prototype.name = "Validation Error";
            var l = e.SchemaError = function h(c, r) {
                this.message = c, this.schema = r, Error.call(this, c), Error.captureStackTrace(this, h)
            };
            l.prototype = Object.create(Error.prototype, {
                constructor: {
                    value: l,
                    enumerable: !1
                },
                name: {
                    value: "SchemaError",
                    enumerable: !1
                }
            });
            var p = e.SchemaContext = function(c, r, a, m, _) {
                this.schema = c, this.options = r, Array.isArray(a) ? (this.path = a, this.propertyPath = a.reduce(function(U, S) {
                    return U + R(S)
                }, "instance")) : this.propertyPath = a, this.base = m, this.schemas = _
            };
            p.prototype.resolve = function(c) {
                return s.resolve(this.base, c)
            }, p.prototype.makeChild = function(c, r) {
                var a = void 0 === r ? this.path : this.path.concat([r]),
                    m = c.$id || c.id,
                    _ = s.resolve(this.base, m || ""),
                    U = new p(c, this.options, a, _, Object.create(this.schemas));
                return m && !U.schemas[_] && (U.schemas[_] = c), U
            };
            var T = e.FORMAT_REGEXPS = {
                "date-time": /^\d{4}-(?:0[0-9]{1}|1[0-2]{1})-(3[01]|0[1-9]|[12][0-9])[tT ](2[0-4]|[01][0-9]):([0-5][0-9]):(60|[0-5][0-9])(\.\d+)?([zZ]|[+-]([0-5][0-9]):(60|[0-5][0-9]))$/,
                date: /^\d{4}-(?:0[0-9]{1}|1[0-2]{1})-(3[01]|0[1-9]|[12][0-9])$/,
                time: /^(2[0-4]|[01][0-9]):([0-5][0-9]):(60|[0-5][0-9])$/,
                duration: /P(T\d+(H(\d+M(\d+S)?)?|M(\d+S)?|S)|\d+(D|M(\d+D)?|Y(\d+M(\d+D)?)?)(T\d+(H(\d+M(\d+S)?)?|M(\d+S)?|S))?|\d+W)/i,
                email: /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/,
                "idn-email": /^("(?:[!#-\[\]-\u{10FFFF}]|\\[\t -\u{10FFFF}])*"|[!#-'*+\-/-9=?A-Z\^-\u{10FFFF}](?:\.?[!#-'*+\-/-9=?A-Z\^-\u{10FFFF}])*)@([!#-'*+\-/-9=?A-Z\^-\u{10FFFF}](?:\.?[!#-'*+\-/-9=?A-Z\^-\u{10FFFF}])*|\[[!-Z\^-\u{10FFFF}]*\])$/u,
                "ip-address": /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
                ipv6: /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,
                uri: /^[a-zA-Z][a-zA-Z0-9+.-]*:[^\s]*$/,
                "uri-reference": /^(((([A-Za-z][+\-.0-9A-Za-z]*(:%[0-9A-Fa-f]{2}|:[!$&-.0-;=?-Z_a-z~]|[/?])|\?)(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*|([A-Za-z][+\-.0-9A-Za-z]*:?)?)|([A-Za-z][+\-.0-9A-Za-z]*:)?\/((%[0-9A-Fa-f]{2}|\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?[/?]|[!$&-.0-;=?-Z_a-z~])(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*|(\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?)?))#(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*|(([A-Za-z][+\-.0-9A-Za-z]*)?%[0-9A-Fa-f]{2}|[!$&-.0-9;=@_~]|[A-Za-z][+\-.0-9A-Za-z]*[!$&-*,;=@_~])(%[0-9A-Fa-f]{2}|[!$&-.0-9;=@-Z_a-z~])*((([/?](%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*)?#|[/?])(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*)?|([A-Za-z][+\-.0-9A-Za-z]*(:%[0-9A-Fa-f]{2}|:[!$&-.0-;=?-Z_a-z~]|[/?])|\?)(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*|([A-Za-z][+\-.0-9A-Za-z]*:)?\/((%[0-9A-Fa-f]{2}|\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?[/?]|[!$&-.0-;=?-Z_a-z~])(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*|\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~])+(:\d*)?|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?:\d*|\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?)?|[A-Za-z][+\-.0-9A-Za-z]*:?)?$/,
                iri: /^[a-zA-Z][a-zA-Z0-9+.-]*:[^\s]*$/,
                "iri-reference": /^(((([A-Za-z][+\-.0-9A-Za-z]*(:%[0-9A-Fa-f]{2}|:[!$&-.0-;=?-Z_a-z~-\u{10FFFF}]|[/?])|\?)(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~-\u{10FFFF}])*|([A-Za-z][+\-.0-9A-Za-z]*:?)?)|([A-Za-z][+\-.0-9A-Za-z]*:)?\/((%[0-9A-Fa-f]{2}|\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~-\u{10FFFF}])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~-\u{10FFFF}]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?[/?]|[!$&-.0-;=?-Z_a-z~-\u{10FFFF}])(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~-\u{10FFFF}])*|(\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~-\u{10FFFF}])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~-\u{10FFFF}]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?)?))#(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~-\u{10FFFF}])*|(([A-Za-z][+\-.0-9A-Za-z]*)?%[0-9A-Fa-f]{2}|[!$&-.0-9;=@_~-\u{10FFFF}]|[A-Za-z][+\-.0-9A-Za-z]*[!$&-*,;=@_~-\u{10FFFF}])(%[0-9A-Fa-f]{2}|[!$&-.0-9;=@-Z_a-z~-\u{10FFFF}])*((([/?](%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~-\u{10FFFF}])*)?#|[/?])(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~-\u{10FFFF}])*)?|([A-Za-z][+\-.0-9A-Za-z]*(:%[0-9A-Fa-f]{2}|:[!$&-.0-;=?-Z_a-z~-\u{10FFFF}]|[/?])|\?)(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~-\u{10FFFF}])*|([A-Za-z][+\-.0-9A-Za-z]*:)?\/((%[0-9A-Fa-f]{2}|\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~-\u{10FFFF}])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~-\u{10FFFF}]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?[/?]|[!$&-.0-;=?-Z_a-z~-\u{10FFFF}])(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~-\u{10FFFF}])*|\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~-\u{10FFFF}])+(:\d*)?|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~-\u{10FFFF}]+)?|[.0-:A-Fa-f]+)\])?:\d*|\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~-\u{10FFFF}]+)?|[.0-:A-Fa-f]+)\])?)?|[A-Za-z][+\-.0-9A-Za-z]*:?)?$/u,
                uuid: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
                "uri-template": /(%[0-9a-f]{2}|[!#$&(-;=?@\[\]_a-z~]|\{[!#&+,./;=?@|]?(%[0-9a-f]{2}|[0-9_a-z])(\.?(%[0-9a-f]{2}|[0-9_a-z]))*(:[1-9]\d{0,3}|\*)?(,(%[0-9a-f]{2}|[0-9_a-z])(\.?(%[0-9a-f]{2}|[0-9_a-z]))*(:[1-9]\d{0,3}|\*)?)*\})*/iu,
                "json-pointer": /^(\/([\x00-\x2e0-@\[-}\x7f]|~[01])*)*$/iu,
                "relative-json-pointer": /^\d+(#|(\/([\x00-\x2e0-@\[-}\x7f]|~[01])*)*)$/iu,
                hostname: /^(?=.{1,255}$)[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?(?:\.[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?)*\.?$/,
                "host-name": /^(?=.{1,255}$)[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?(?:\.[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?)*\.?$/,
                "utc-millisec": function(h) {
                    return "string" == typeof h && parseFloat(h) === parseInt(h, 10) && !isNaN(h)
                },
                regex: function(h) {
                    var c = !0;
                    try {
                        new RegExp(h)
                    } catch {
                        c = !1
                    }
                    return c
                },
                style: /[\r\n\t ]*[^\r\n\t ][^:]*:[\r\n\t ]*[^\r\n\t ;]*[\r\n\t ]*;?/,
                color: /^(#?([0-9A-Fa-f]{3}){1,2}\b|aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow|(rgb\(\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*\))|(rgb\(\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*\)))$/,
                phone: /^\+(?:[0-9] ?){6,14}[0-9]$/,
                alpha: /^[a-zA-Z]+$/,
                alphanumeric: /^[a-zA-Z0-9]+$/
            };
            T.regexp = T.regex, T.pattern = T.regex, T.ipv4 = T["ip-address"], e.isFormat = function(c, r, a) {
                if ("string" == typeof c && void 0 !== T[r]) {
                    if (T[r] instanceof RegExp) return T[r].test(c);
                    if ("function" == typeof T[r]) return T[r](c)
                } else if (a && a.customFormats && "function" == typeof a.customFormats[r]) return a.customFormats[r](c);
                return !0
            };
            var R = e.makeSuffix = function(c) {
                return (c = c.toString()).match(/[.\s\[\]]/) || c.match(/^[\d]/) ? c.match(/^\d+$/) ? "[" + c + "]" : "[" + JSON.stringify(c) + "]" : "." + c
            };

            function v(h, c, r, a) {
                "object" == typeof r ? c[a] = o(h[a], r) : -1 === h.indexOf(r) && c.push(r)
            }

            function y(h, c, r) {
                c[r] = h[r]
            }

            function x(h, c, r, a) {
                r[a] = "object" == typeof c[a] && c[a] && h[a] ? o(h[a], c[a]) : c[a]
            }

            function o(h, c) {
                var r = Array.isArray(c),
                    a = r && [] || {};
                return r ? (a = a.concat(h = h || []), c.forEach(v.bind(null, h, a))) : (h && "object" == typeof h && Object.keys(h).forEach(y.bind(null, h, a)), Object.keys(c).forEach(x.bind(null, h, c, a))), a
            }

            function E(h) {
                return "/" + encodeURIComponent(h).replace(/~/g, "%7E")
            }
            e.deepCompareStrict = function h(c, r) {
                if (typeof c != typeof r) return !1;
                if (Array.isArray(c)) return !(!Array.isArray(r) || c.length !== r.length) && c.every(function(_, U) {
                    return h(c[U], r[U])
                });
                if ("object" == typeof c) {
                    if (!c || !r) return c === r;
                    var a = Object.keys(c),
                        m = Object.keys(r);
                    return a.length === m.length && a.every(function(_) {
                        return h(c[_], r[_])
                    })
                }
                return c === r
            }, ve.exports.deepMerge = o, e.objectGetPath = function(c, r) {
                for (var m, a = r.split("/").slice(1);
                    "string" == typeof(m = a.shift());) {
                    var _ = decodeURIComponent(m.replace(/~0/, "~").replace(/~1/g, "/"));
                    if (!(_ in c)) return;
                    c = c[_]
                }
                return c
            }, e.encodePath = function(c) {
                return c.map(E).join("")
            }, e.getDecimalPlaces = function(c) {
                var r = 0;
                if (isNaN(c)) return r;
                "number" != typeof c && (c = Number(c));
                var a = c.toString().split("e");
                if (2 === a.length) {
                    if ("-" !== a[1][0]) return r;
                    r = Number(a[1].slice(1))
                }
                var m = a[0].split(".");
                return 2 === m.length && (r += m[1].length), r
            }, e.isSchema = function(c) {
                return "object" == typeof c && c || "boolean" == typeof c
            }
        },
        75725: (ve, e, A) => {
            "use strict";
            var s = ve.exports.Validator = A(9711);
            ve.exports.ValidatorResult = A(50806).ValidatorResult, ve.exports.ValidatorResultError = A(50806).ValidatorResultError, ve.exports.ValidationError = A(50806).ValidationError, ve.exports.SchemaError = A(50806).SchemaError, ve.exports.SchemaScanResult = A(19419).SchemaScanResult, ve.exports.scan = A(19419).scan, ve.exports.validate = function(d, w, B) {
                return (new s).validate(d, w, B)
            }
        },
        19419: (ve, e, A) => {
            "use strict";
            var s = A(52445),
                d = A(50806);

            function w(B, u) {
                this.id = B, this.ref = u
            }
            ve.exports.SchemaScanResult = w, ve.exports.scan = function(u, l) {
                function p(x, o) {
                    if (o && "object" == typeof o) {
                        if (o.$ref) {
                            var E = s.resolve(x, o.$ref);
                            return void(y[E] = y[E] ? y[E] + 1 : 0)
                        }
                        var h = o.$id || o.id,
                            c = h ? s.resolve(x, h) : x;
                        if (c) {
                            if (c.indexOf("#") < 0 && (c += "#"), v[c]) {
                                if (!d.deepCompareStrict(v[c], o)) throw new Error("Schema <" + c + "> already exists with different definition");
                                return v[c]
                            }
                            v[c] = o, "#" == c[c.length - 1] && (v[c.substring(0, c.length - 1)] = o)
                        }
                        T(c + "/items", Array.isArray(o.items) ? o.items : [o.items]), T(c + "/extends", Array.isArray(o.extends) ? o.extends : [o.extends]), p(c + "/additionalItems", o.additionalItems), R(c + "/properties", o.properties), p(c + "/additionalProperties", o.additionalProperties), R(c + "/definitions", o.definitions), R(c + "/patternProperties", o.patternProperties), R(c + "/dependencies", o.dependencies), T(c + "/disallow", o.disallow), T(c + "/allOf", o.allOf), T(c + "/anyOf", o.anyOf), T(c + "/oneOf", o.oneOf), p(c + "/not", o.not)
                    }
                }

                function T(x, o) {
                    if (Array.isArray(o))
                        for (var E = 0; E < o.length; E++) p(x + "/" + E, o[E])
                }

                function R(x, o) {
                    if (o && "object" == typeof o)
                        for (var E in o) p(x + "/" + E, o[E])
                }
                var v = {},
                    y = {};
                return p(u, l), new w(v, y)
            }
        },
        9711: (ve, e, A) => {
            "use strict";
            var s = A(52445),
                d = A(51384),
                w = A(50806),
                B = A(19419).scan,
                u = w.ValidatorResult,
                l = w.ValidatorResultError,
                p = w.SchemaError,
                T = w.SchemaContext,
                v = function o() {
                    this.customFormats = Object.create(o.prototype.customFormats), this.schemas = {}, this.unresolvedRefs = [], this.types = Object.create(x), this.attributes = Object.create(d.validators)
                };

            function y(o) {
                var E = "string" == typeof o ? o : o.$ref;
                return "string" == typeof E && E
            }
            v.prototype.customFormats = {}, v.prototype.schemas = null, v.prototype.types = null, v.prototype.attributes = null, v.prototype.unresolvedRefs = null, v.prototype.addSchema = function(E, h) {
                var c = this;
                if (!E) return null;
                var r = B(h || "/", E),
                    a = h || E.$id || E.id;
                for (var m in r.id) this.schemas[m] = r.id[m];
                for (var m in r.ref) this.unresolvedRefs.push(m);
                return this.unresolvedRefs = this.unresolvedRefs.filter(function(_) {
                    return typeof c.schemas[_] > "u"
                }), this.schemas[a]
            }, v.prototype.addSubSchemaArray = function(E, h) {
                if (Array.isArray(h))
                    for (var c = 0; c < h.length; c++) this.addSubSchema(E, h[c])
            }, v.prototype.addSubSchemaObject = function(E, h) {
                if (h && "object" == typeof h)
                    for (var c in h) this.addSubSchema(E, h[c])
            }, v.prototype.setSchemas = function(E) {
                this.schemas = E
            }, v.prototype.getSchema = function(E) {
                return this.schemas[E]
            }, v.prototype.validate = function(E, h, c, r) {
                if ("boolean" != typeof h && "object" != typeof h || null === h) throw new p("Expected `schema` to be an object or boolean");
                c || (c = {});
                var D, m = s.resolve(c.base || "/", h.$id || h.id || "");
                if (!r) {
                    (r = new T(h, c, [], m, Object.create(this.schemas))).schemas[m] || (r.schemas[m] = h);
                    var _ = B(m, h);
                    for (var U in _.id) r.schemas[U] = _.id[U]
                }
                if (c.required && void 0 === E) return (D = new u(E, h, c, r)).addError("is required, but is undefined"), D;
                if (!(D = this.validateSchema(E, h, c, r))) throw new Error("Result undefined");
                if (c.throwAll && D.errors.length) throw new l(D);
                return D
            }, v.prototype.validateSchema = function(E, h, c, r) {
                var a = new u(E, h, c, r);
                if ("boolean" == typeof h) !0 === h ? h = {} : !1 === h && (h = {
                    type: []
                });
                else if (!h) throw new Error("schema is undefined");
                if (h.extends)
                    if (Array.isArray(h.extends)) {
                        var m = {
                            schema: h,
                            ctx: r
                        };
                        h.extends.forEach(this.schemaTraverser.bind(this, m)), h = m.schema, m.schema = null, m.ctx = null, m = null
                    } else h = w.deepMerge(h, this.superResolve(h.extends, r));
                var _ = y(h);
                if (_) {
                    var U = this.resolve(h, _, r),
                        S = new T(U.subschema, c, r.path, U.switchSchema, r.schemas);
                    return this.validateSchema(E, U.subschema, c, S)
                }
                var D = c && c.skipAttributes || [];
                for (var M in h)
                    if (!d.ignoreProperties[M] && D.indexOf(M) < 0) {
                        var fe = null,
                            Se = this.attributes[M];
                        if (Se) fe = Se.call(this, E, h, c, r);
                        else if (!1 === c.allowUnknownAttributes) throw new p("Unsupported attribute: " + M, h);
                        fe && a.importErrors(fe)
                    }
                if ("function" == typeof c.rewrite) {
                    var _e = c.rewrite.call(this, E, h, c, r);
                    a.instance = _e
                }
                return a
            }, v.prototype.schemaTraverser = function(E, h) {
                E.schema = w.deepMerge(E.schema, this.superResolve(h, E.ctx))
            }, v.prototype.superResolve = function(E, h) {
                var c = y(E);
                return c ? this.resolve(E, c, h).subschema : E
            }, v.prototype.resolve = function(E, h, c) {
                if (h = c.resolve(h), c.schemas[h]) return {
                    subschema: c.schemas[h],
                    switchSchema: h
                };
                var r = s.parse(h),
                    a = r && r.hash,
                    m = a && a.length && h.substr(0, h.length - a.length);
                if (!m || !c.schemas[m]) throw new p("no such schema <" + h + ">", E);
                var _ = w.objectGetPath(c.schemas[m], a.substr(1));
                if (void 0 === _) throw new p("no such schema " + a + " located in <" + m + ">", E);
                return {
                    subschema: _,
                    switchSchema: h
                }
            }, v.prototype.testType = function(E, h, c, r, a) {
                if (void 0 !== a) {
                    if (null === a) throw new p('Unexpected null in "type" keyword');
                    if ("function" == typeof this.types[a]) return this.types[a].call(this, E);
                    if (a && "object" == typeof a) {
                        var m = this.validateSchema(E, a, c, r);
                        return void 0 === m || !(m && m.errors.length)
                    }
                    return !0
                }
            };
            var x = v.prototype.types = {};
            x.string = function(E) {
                return "string" == typeof E
            }, x.number = function(E) {
                return "number" == typeof E && isFinite(E)
            }, x.integer = function(E) {
                return "number" == typeof E && E % 1 == 0
            }, x.boolean = function(E) {
                return "boolean" == typeof E
            }, x.array = function(E) {
                return Array.isArray(E)
            }, x.null = function(E) {
                return null === E
            }, x.date = function(E) {
                return E instanceof Date
            }, x.any = function(E) {
                return !0
            }, x.object = function(E) {
                return E && "object" == typeof E && !Array.isArray(E) && !(E instanceof Date)
            }, ve.exports = v
        },
        74977: (ve, e, A) => {
            "use strict";
            var s = A(59344).default,
                d = A(51535).default;
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.InvalidStatusCodeError = e.InvalidCertError = void 0;
            const w = Object.freeze({
                redirect: !0,
                expectStatusCode: 200,
                headers: {},
                full: !1,
                keepAlive: !0,
                cors: !1,
                referrer: !1,
                sslAllowSelfSigned: !1,
                _redirectCount: 0
            });
            class B extends Error {
                constructor(c, r) {
                    super(c), this.fingerprint256 = r
                }
            }
            e.InvalidCertError = B;
            class u extends Error {
                constructor(c) {
                    super(`Request Failed. Status Code: ${c}`), this.statusCode = c
                }
            }

            function l(h, c) {
                if (!c || "text" === c || "json" === c) try {
                    let r = new TextDecoder("utf8", {
                        fatal: !0
                    }).decode(h);
                    if ("text" === c) return r;
                    try {
                        return JSON.parse(r)
                    } catch (a) {
                        if ("json" === c) throw a;
                        return r
                    }
                } catch (r) {
                    if ("text" === c || "json" === c) throw r
                }
                return h
            }
            e.InvalidStatusCodeError = u;
            let p = {};

            function T(h, c) {
                let r = { ...w,
                    ...c
                };
                const a = A(4444),
                    m = A(84508),
                    _ = A(47117),
                    {
                        promisify: U
                    } = A(40179),
                    {
                        resolve: S
                    } = A(52445),
                    D = !!/^https/.test(h);
                let M = {
                    method: r.method || "GET",
                    headers: {
                        "Accept-Encoding": "gzip, deflate, br"
                    }
                };
                const fe = _e => _e.replace(/:| /g, "").toLowerCase();
                if (r.keepAlive) {
                    const _e = {
                            keepAlive: !0,
                            keepAliveMsecs: 3e4,
                            maxFreeSockets: 1024,
                            maxCachedSessions: 1024
                        },
                        O = [D, D && r.sslPinnedCertificates ? .map(P => fe(P)).sort()].join();
                    M.agent = p[O] || (p[O] = new(D ? m : a).Agent(_e))
                }
                "json" === r.type && (M.headers["Content-Type"] = "application/json"), r.data && (r.method || (M.method = "POST"), M.body = "json" === r.type ? JSON.stringify(r.data) : r.data), M.headers = { ...M.headers,
                    ...r.headers
                }, r.sslAllowSelfSigned && (M.rejectUnauthorized = !1);
                const Se = function() {
                    var _e = s(function*(O) {
                        const P = O.statusCode;
                        if (r.redirect && 300 <= P && P < 400 && O.headers.location) {
                            if (10 == r._redirectCount) throw new Error("Request failed. Too much redirects.");
                            return r._redirectCount += 1, yield T(S(h, O.headers.location), r)
                        }
                        if (r.expectStatusCode && P !== r.expectStatusCode) throw O.resume(), new u(P);
                        let C = [];
                        var re, ae = !1,
                            J = !1;
                        try {
                            for (var te, Y = d(O); ae = !(te = yield Y.next()).done; ae = !1) C.push(te.value)
                        } catch (q) {
                            J = !0, re = q
                        } finally {
                            try {
                                ae && null != Y.return && (yield Y.return())
                            } finally {
                                if (J) throw re
                            }
                        }
                        let F = Buffer.concat(C);
                        const se = O.headers["content-encoding"];
                        "br" === se && (F = yield U(_.brotliDecompress)(F)), ("gzip" === se || "deflate" === se) && (F = yield U(_.unzip)(F));
                        const V = l(F, r.type);
                        return r.full ? {
                            headers: O.headers,
                            status: P,
                            body: V
                        } : V
                    });
                    return function(P) {
                        return _e.apply(this, arguments)
                    }
                }();
                return new Promise((_e, O) => {
                    const P = function() {
                            var re = s(function*(Y) {
                                if (Y && "DEPTH_ZERO_SELF_SIGNED_CERT" === Y.code) try {
                                    yield T(h, { ...r,
                                        sslAllowSelfSigned: !0,
                                        sslPinnedCertificates: []
                                    })
                                } catch (te) {
                                    te && te.fingerprint256 && (Y = new B(`Self-signed SSL certificate: ${te.fingerprint256}`, te.fingerprint256))
                                }
                                O(Y)
                            });
                            return function(te) {
                                return re.apply(this, arguments)
                            }
                        }(),
                        C = (D ? m : a).request(h, M, re => {
                            re.on("error", P), s(function*() {
                                try {
                                    _e(yield Se(re))
                                } catch (Y) {
                                    O(Y)
                                }
                            })()
                        });
                    C.on("error", P);
                    const ae = r.sslPinnedCertificates ? .map(re => fe(re)),
                        J = re => {
                            const Y = fe(re.getPeerCertificate() ? .fingerprint256 || "");
                            if ((Y || !re.isSessionReused()) && !ae.includes(Y)) return C.emit("error", new B(`Invalid SSL certificate: ${Y} Expected: ${ae}`, Y)), C.abort()
                        };
                    r.sslPinnedCertificates && C.on("socket", re => {
                        re.listeners("secureConnect").map(te => (te.name || "").replace("bound ", "")).includes("mfetchSecureConnect") || re.on("secureConnect", J.bind(null, re))
                    }), r.keepAlive && C.setNoDelay(!0), M.body && C.write(M.body), C.end()
                })
            }
            const R = new Set(["Accept", "Accept-Language", "Content-Language", "Content-Type"].map(h => h.toLowerCase())),
                v = new Set(["Accept-Charset", "Accept-Encoding", "Access-Control-Request-Headers", "Access-Control-Request-Method", "Connection", "Content-Length", "Cookie", "Cookie2", "Date", "DNT", "Expect", "Host", "Keep-Alive", "Origin", "Referer", "TE", "Trailer", "Transfer-Encoding", "Upgrade", "Via"].map(h => h.toLowerCase()));

            function y(h, c) {
                return x.apply(this, arguments)
            }

            function x() {
                return (x = s(function*(h, c) {
                    let r = { ...w,
                        ...c
                    };
                    const a = new Headers;
                    "json" === r.type && a.set("Content-Type", "application/json");
                    let m = new URL(h);
                    if (m.username) {
                        const D = btoa(`${m.username}:${m.password}`);
                        a.set("Authorization", `Basic ${D}`), m.username = "", m.password = ""
                    }
                    h = "" + m;
                    for (let D in r.headers) {
                        const M = D.toLowerCase();
                        (R.has(M) || r.cors && !v.has(M)) && a.set(D, r.headers[D])
                    }
                    let _ = {
                        headers: a,
                        redirect: r.redirect ? "follow" : "manual"
                    };
                    r.referrer || (_.referrerPolicy = "no-referrer"), r.cors && (_.mode = "cors"), r.data && (r.method || (_.method = "POST"), _.body = "json" === r.type ? JSON.stringify(r.data) : r.data);
                    const U = yield fetch(h, _);
                    if (r.expectStatusCode && U.status !== r.expectStatusCode) throw new u(U.status);
                    const S = l(new Uint8Array(yield U.arrayBuffer()), r.type);
                    return r.full ? {
                        headers: Object.fromEntries(U.headers.entries()),
                        status: U.status,
                        body: S
                    } : S
                })).apply(this, arguments)
            }
            const o = !!("object" == typeof process && process.versions && process.versions.node && process.versions.v8);
            e.default = function E(h, c) {
                return (o ? T : y)(h, c)
            }
        },
        61826: (ve, e, A) => {
            var s = "function" == typeof Map && Map.prototype,
                d = Object.getOwnPropertyDescriptor && s ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null,
                w = s && d && "function" == typeof d.get ? d.get : null,
                B = s && Map.prototype.forEach,
                u = "function" == typeof Set && Set.prototype,
                l = Object.getOwnPropertyDescriptor && u ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null,
                p = u && l && "function" == typeof l.get ? l.get : null,
                T = u && Set.prototype.forEach,
                v = "function" == typeof WeakMap && WeakMap.prototype ? WeakMap.prototype.has : null,
                x = "function" == typeof WeakSet && WeakSet.prototype ? WeakSet.prototype.has : null,
                E = "function" == typeof WeakRef && WeakRef.prototype ? WeakRef.prototype.deref : null,
                h = Boolean.prototype.valueOf,
                c = Object.prototype.toString,
                r = Function.prototype.toString,
                a = String.prototype.match,
                m = String.prototype.slice,
                _ = String.prototype.replace,
                U = String.prototype.toUpperCase,
                S = String.prototype.toLowerCase,
                D = RegExp.prototype.test,
                M = Array.prototype.concat,
                fe = Array.prototype.join,
                Se = Array.prototype.slice,
                _e = Math.floor,
                O = "function" == typeof BigInt ? BigInt.prototype.valueOf : null,
                P = Object.getOwnPropertySymbols,
                C = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? Symbol.prototype.toString : null,
                ae = "function" == typeof Symbol && "object" == typeof Symbol.iterator,
                J = "function" == typeof Symbol && Symbol.toStringTag && (Symbol, 1) ? Symbol.toStringTag : null,
                re = Object.prototype.propertyIsEnumerable,
                Y = ("function" == typeof Reflect ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(ie) {
                    return ie.__proto__
                } : null);

            function te(ie, le) {
                if (ie === 1 / 0 || ie === -1 / 0 || ie != ie || ie && ie > -1e3 && ie < 1e3 || D.call(/e/, le)) return le;
                var ue = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
                if ("number" == typeof ie) {
                    var Ce = ie < 0 ? -_e(-ie) : _e(ie);
                    if (Ce !== ie) {
                        var k = String(Ce),
                            Me = m.call(le, k.length + 1);
                        return _.call(k, ue, "$&_") + "." + _.call(_.call(Me, /([0-9]{3})/g, "$&_"), /_$/, "")
                    }
                }
                return _.call(le, ue, "$&_")
            }
            var F = A(24654),
                se = F.custom,
                V = Ze(se) ? se : null;

            function q(ie, le, ue) {
                var Ce = "double" === (ue.quoteStyle || le) ? '"' : "'";
                return Ce + ie + Ce
            }

            function H(ie) {
                return _.call(String(ie), /"/g, "&quot;")
            }

            function ce(ie) {
                return !("[object Array]" !== de(ie) || J && "object" == typeof ie && J in ie)
            }

            function Le(ie) {
                return !("[object RegExp]" !== de(ie) || J && "object" == typeof ie && J in ie)
            }

            function Ze(ie) {
                if (ae) return ie && "object" == typeof ie && ie instanceof Symbol;
                if ("symbol" == typeof ie) return !0;
                if (!ie || "object" != typeof ie || !C) return !1;
                try {
                    return C.call(ie), !0
                } catch {}
                return !1
            }
            ve.exports = function ie(le, ue, Ce, k) {
                var Me = ue || {};
                if (K(Me, "quoteStyle") && "single" !== Me.quoteStyle && "double" !== Me.quoteStyle) throw new TypeError('option "quoteStyle" must be "single" or "double"');
                if (K(Me, "maxStringLength") && ("number" == typeof Me.maxStringLength ? Me.maxStringLength < 0 && Me.maxStringLength !== 1 / 0 : null !== Me.maxStringLength)) throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
                var rt = !K(Me, "customInspect") || Me.customInspect;
                if ("boolean" != typeof rt && "symbol" !== rt) throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
                if (K(Me, "indent") && null !== Me.indent && "\t" !== Me.indent && !(parseInt(Me.indent, 10) === Me.indent && Me.indent > 0)) throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
                if (K(Me, "numericSeparator") && "boolean" != typeof Me.numericSeparator) throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
                var b = Me.numericSeparator;
                if (typeof le > "u") return "undefined";
                if (null === le) return "null";
                if ("boolean" == typeof le) return le ? "true" : "false";
                if ("string" == typeof le) return ge(le, Me);
                if ("number" == typeof le) {
                    if (0 === le) return 1 / 0 / le > 0 ? "0" : "-0";
                    var ke = String(le);
                    return b ? te(le, ke) : ke
                }
                if ("bigint" == typeof le) {
                    var Fe = String(le) + "n";
                    return b ? te(le, Fe) : Fe
                }
                var W = typeof Me.depth > "u" ? 5 : Me.depth;
                if (typeof Ce > "u" && (Ce = 0), Ce >= W && W > 0 && "object" == typeof le) return ce(le) ? "[Array]" : "[Object]";
                var pe = function Qe(ie, le) {
                    var ue;
                    if ("\t" === ie.indent) ue = "\t";
                    else {
                        if (!("number" == typeof ie.indent && ie.indent > 0)) return null;
                        ue = fe.call(Array(ie.indent + 1), " ")
                    }
                    return {
                        base: ue,
                        prev: fe.call(Array(le + 1), ue)
                    }
                }(Me, Ce);
                if (typeof k > "u") k = [];
                else if (Be(k, le) >= 0) return "[Circular]";

                function Re(Ye, Rt, st) {
                    if (Rt && (k = Se.call(k)).push(Rt), st) {
                        var mt = {
                            depth: Me.depth
                        };
                        return K(Me, "quoteStyle") && (mt.quoteStyle = Me.quoteStyle), ie(Ye, mt, Ce + 1, k)
                    }
                    return ie(Ye, Me, Ce + 1, k)
                }
                if ("function" == typeof le && !Le(le)) {
                    var ct = function we(ie) {
                            if (ie.name) return ie.name;
                            var le = a.call(r.call(ie), /^function\s*([\w$]+)/);
                            return le ? le[1] : null
                        }(le),
                        et = Ne(le, Re);
                    return "[Function" + (ct ? ": " + ct : " (anonymous)") + "]" + (et.length > 0 ? " { " + fe.call(et, ", ") + " }" : "")
                }
                if (Ze(le)) {
                    var nt = ae ? _.call(String(le), /^(Symbol\(.*\))_[^)]*$/, "$1") : C.call(le);
                    return "object" != typeof le || ae ? nt : ee(nt)
                }
                if (function At(ie) {
                        return !(!ie || "object" != typeof ie) && (typeof HTMLElement < "u" && ie instanceof HTMLElement || "string" == typeof ie.nodeName && "function" == typeof ie.getAttribute)
                    }(le)) {
                    for (var Bt = "<" + S.call(String(le.nodeName)), Gt = le.attributes || [], jt = 0; jt < Gt.length; jt++) Bt += " " + Gt[jt].name + "=" + q(H(Gt[jt].value), "double", Me);
                    return Bt += ">", le.childNodes && le.childNodes.length && (Bt += "..."), Bt + "</" + S.call(String(le.nodeName)) + ">"
                }
                if (ce(le)) {
                    if (0 === le.length) return "[]";
                    var I = Ne(le, Re);
                    return pe && ! function je(ie) {
                        for (var le = 0; le < ie.length; le++)
                            if (Be(ie[le], "\n") >= 0) return !1;
                        return !0
                    }(I) ? "[" + j(I, pe) + "]" : "[ " + fe.call(I, ", ") + " ]"
                }
                if (function oe(ie) {
                        return !("[object Error]" !== de(ie) || J && "object" == typeof ie && J in ie)
                    }(le)) {
                    var $ = Ne(le, Re);
                    return "cause" in Error.prototype || !("cause" in le) || re.call(le, "cause") ? 0 === $.length ? "[" + String(le) + "]" : "{ [" + String(le) + "] " + fe.call($, ", ") + " }" : "{ [" + String(le) + "] " + fe.call(M.call("[cause]: " + Re(le.cause), $), ", ") + " }"
                }
                if ("object" == typeof le && rt) {
                    if (V && "function" == typeof le[V] && F) return F(le, {
                        depth: W - Ce
                    });
                    if ("symbol" !== rt && "function" == typeof le.inspect) return le.inspect()
                }
                if (function he(ie) {
                        if (!w || !ie || "object" != typeof ie) return !1;
                        try {
                            w.call(ie);
                            try {
                                p.call(ie)
                            } catch {
                                return !0
                            }
                            return ie instanceof Map
                        } catch {}
                        return !1
                    }(le)) {
                    var Z = [];
                    return B && B.call(le, function(Ye, Rt) {
                        Z.push(Re(Rt, le, !0) + " => " + Re(Ye, le))
                    }), Ae("Map", w.call(le), Z, pe)
                }
                if (function xt(ie) {
                        if (!p || !ie || "object" != typeof ie) return !1;
                        try {
                            p.call(ie);
                            try {
                                w.call(ie)
                            } catch {
                                return !0
                            }
                            return ie instanceof Set
                        } catch {}
                        return !1
                    }(le)) {
                    var f = [];
                    return T && T.call(le, function(Ye) {
                        f.push(Re(Ye, le))
                    }), Ae("Set", p.call(le), f, pe)
                }
                if (function We(ie) {
                        if (!v || !ie || "object" != typeof ie) return !1;
                        try {
                            v.call(ie, v);
                            try {
                                x.call(ie, x)
                            } catch {
                                return !0
                            }
                            return ie instanceof WeakMap
                        } catch {}
                        return !1
                    }(le)) return xe("WeakMap");
                if (function yt(ie) {
                        if (!x || !ie || "object" != typeof ie) return !1;
                        try {
                            x.call(ie, x);
                            try {
                                v.call(ie, v)
                            } catch {
                                return !0
                            }
                            return ie instanceof WeakSet
                        } catch {}
                        return !1
                    }(le)) return xe("WeakSet");
                if (function gt(ie) {
                        if (!E || !ie || "object" != typeof ie) return !1;
                        try {
                            return E.call(ie), !0
                        } catch {}
                        return !1
                    }(le)) return xe("WeakRef");
                if (function me(ie) {
                        return !("[object Number]" !== de(ie) || J && "object" == typeof ie && J in ie)
                    }(le)) return ee(Re(Number(le)));
                if (function N(ie) {
                        if (!ie || "object" != typeof ie || !O) return !1;
                        try {
                            return O.call(ie), !0
                        } catch {}
                        return !1
                    }(le)) return ee(Re(O.call(le)));
                if (function Ie(ie) {
                        return !("[object Boolean]" !== de(ie) || J && "object" == typeof ie && J in ie)
                    }(le)) return ee(h.call(le));
                if (function Q(ie) {
                        return !("[object String]" !== de(ie) || J && "object" == typeof ie && J in ie)
                    }(le)) return ee(Re(String(le)));
                if (typeof window < "u" && le === window) return "{ [object Window] }";
                if (le === global) return "{ [object globalThis] }";
                if (! function Ee(ie) {
                        return !("[object Date]" !== de(ie) || J && "object" == typeof ie && J in ie)
                    }(le) && !Le(le)) {
                    var ne = Ne(le, Re),
                        Oe = Y ? Y(le) === Object.prototype : le instanceof Object || le.constructor === Object,
                        Te = le instanceof Object ? "" : "null prototype",
                        ze = !Oe && J && Object(le) === le && J in le ? m.call(de(le), 8, -1) : Te ? "Object" : "",
                        tt = (Oe || "function" != typeof le.constructor ? "" : le.constructor.name ? le.constructor.name + " " : "") + (ze || Te ? "[" + fe.call(M.call([], ze || [], Te || []), ": ") + "] " : "");
                    return 0 === ne.length ? tt + "{}" : pe ? tt + "{" + j(ne, pe) + "}" : tt + "{ " + fe.call(ne, ", ") + " }"
                }
                return String(le)
            };
            var z = Object.prototype.hasOwnProperty || function(ie) {
                return ie in this
            };

            function K(ie, le) {
                return z.call(ie, le)
            }

            function de(ie) {
                return c.call(ie)
            }

            function Be(ie, le) {
                if (ie.indexOf) return ie.indexOf(le);
                for (var ue = 0, Ce = ie.length; ue < Ce; ue++)
                    if (ie[ue] === le) return ue;
                return -1
            }

            function ge(ie, le) {
                if (ie.length > le.maxStringLength) {
                    var ue = ie.length - le.maxStringLength,
                        Ce = "... " + ue + " more character" + (ue > 1 ? "s" : "");
                    return ge(m.call(ie, 0, le.maxStringLength), le) + Ce
                }
                return q(_.call(_.call(ie, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, G), "single", le)
            }

            function G(ie) {
                var le = ie.charCodeAt(0),
                    ue = {
                        8: "b",
                        9: "t",
                        10: "n",
                        12: "f",
                        13: "r"
                    }[le];
                return ue ? "\\" + ue : "\\x" + (le < 16 ? "0" : "") + U.call(le.toString(16))
            }

            function ee(ie) {
                return "Object(" + ie + ")"
            }

            function xe(ie) {
                return ie + " { ? }"
            }

            function Ae(ie, le, ue, Ce) {
                return ie + " (" + le + ") {" + (Ce ? j(ue, Ce) : fe.call(ue, ", ")) + "}"
            }

            function j(ie, le) {
                if (0 === ie.length) return "";
                var ue = "\n" + le.prev + le.base;
                return ue + fe.call(ie, "," + ue) + "\n" + le.prev
            }

            function Ne(ie, le) {
                var ue = ce(ie),
                    Ce = [];
                if (ue) {
                    Ce.length = ie.length;
                    for (var k = 0; k < ie.length; k++) Ce[k] = K(ie, k) ? le(ie[k], ie) : ""
                }
                var rt, Me = "function" == typeof P ? P(ie) : [];
                if (ae) {
                    rt = {};
                    for (var b = 0; b < Me.length; b++) rt["$" + Me[b]] = Me[b]
                }
                for (var ke in ie) K(ie, ke) && (ue && String(Number(ke)) === ke && ke < ie.length || ae && rt["$" + ke] instanceof Symbol || (D.call(/[^\w$]/, ke) ? Ce.push(le(ke, ie) + ": " + le(ie[ke], ie)) : Ce.push(ke + ": " + le(ie[ke], ie))));
                if ("function" == typeof P)
                    for (var Fe = 0; Fe < Me.length; Fe++) re.call(ie, Me[Fe]) && Ce.push("[" + le(Me[Fe]) + "]: " + le(ie[Me[Fe]], ie));
                return Ce
            }
        },
        14246: ve => {
            "use strict";
            var e = function(A) {
                return A != A
            };
            ve.exports = function(s, d) {
                return 0 === s && 0 === d ? 1 / s == 1 / d : !!(s === d || e(s) && e(d))
            }
        },
        20314: (ve, e, A) => {
            "use strict";
            var s = A(21648),
                d = A(35436),
                w = A(14246),
                B = A(31353),
                u = A(13090),
                l = d(B(), Object);
            s(l, {
                getPolyfill: B,
                implementation: w,
                shim: u
            }), ve.exports = l
        },
        31353: (ve, e, A) => {
            "use strict";
            var s = A(14246);
            ve.exports = function() {
                return "function" == typeof Object.is ? Object.is : s
            }
        },
        13090: (ve, e, A) => {
            "use strict";
            var s = A(31353),
                d = A(21648);
            ve.exports = function() {
                var B = s();
                return d(Object, {
                    is: B
                }, {
                    is: function() {
                        return Object.is !== B
                    }
                }), B
            }
        },
        20934: (ve, e, A) => {
            "use strict";
            var s = A(67809),
                d = A(65441)(),
                w = A(41098),
                B = Object,
                u = w("Array.prototype.push"),
                l = w("Object.prototype.propertyIsEnumerable"),
                p = d ? Object.getOwnPropertySymbols : null;
            ve.exports = function(R, v) {
                if (null == R) throw new TypeError("target must be an object");
                var y = B(R);
                if (1 === arguments.length) return y;
                for (var x = 1; x < arguments.length; ++x) {
                    var o = B(arguments[x]),
                        E = s(o),
                        h = d && (Object.getOwnPropertySymbols || p);
                    if (h)
                        for (var c = h(o), r = 0; r < c.length; ++r) {
                            var a = c[r];
                            l(o, a) && u(E, a)
                        }
                    for (var m = 0; m < E.length; ++m) {
                        var _ = E[m];
                        l(o, _) && (y[_] = o[_])
                    }
                }
                return y
            }
        },
        41046: (ve, e, A) => {
            "use strict";
            var s = A(20934);
            ve.exports = function() {
                return !Object.assign || function() {
                    if (!Object.assign) return !1;
                    for (var B = "abcdefghijklmnopqrst", u = B.split(""), l = {}, p = 0; p < u.length; ++p) l[u[p]] = u[p];
                    var T = Object.assign({}, l),
                        R = "";
                    for (var v in T) R += v;
                    return B !== R
                }() || function() {
                    if (!Object.assign || !Object.preventExtensions) return !1;
                    var B = Object.preventExtensions({
                        1: 2
                    });
                    try {
                        Object.assign(B, "xy")
                    } catch {
                        return "y" === B[1]
                    }
                    return !1
                }() ? s : Object.assign
            }
        },
        4058: (ve, e) => {
            "use strict";
            var A = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Int32Array < "u";

            function s(B, u) {
                return Object.prototype.hasOwnProperty.call(B, u)
            }
            e.assign = function(B) {
                for (var u = Array.prototype.slice.call(arguments, 1); u.length;) {
                    var l = u.shift();
                    if (l) {
                        if ("object" != typeof l) throw new TypeError(l + "must be non-object");
                        for (var p in l) s(l, p) && (B[p] = l[p])
                    }
                }
                return B
            }, e.shrinkBuf = function(B, u) {
                return B.length === u ? B : B.subarray ? B.subarray(0, u) : (B.length = u, B)
            };
            var d = {
                    arraySet: function(B, u, l, p, T) {
                        if (u.subarray && B.subarray) B.set(u.subarray(l, l + p), T);
                        else
                            for (var R = 0; R < p; R++) B[T + R] = u[l + R]
                    },
                    flattenChunks: function(B) {
                        var u, l, p, T, R, v;
                        for (p = 0, u = 0, l = B.length; u < l; u++) p += B[u].length;
                        for (v = new Uint8Array(p), T = 0, u = 0, l = B.length; u < l; u++) v.set(R = B[u], T), T += R.length;
                        return v
                    }
                },
                w = {
                    arraySet: function(B, u, l, p, T) {
                        for (var R = 0; R < p; R++) B[T + R] = u[l + R]
                    },
                    flattenChunks: function(B) {
                        return [].concat.apply([], B)
                    }
                };
            e.setTyped = function(B) {
                B ? (e.Buf8 = Uint8Array, e.Buf16 = Uint16Array, e.Buf32 = Int32Array, e.assign(e, d)) : (e.Buf8 = Array, e.Buf16 = Array, e.Buf32 = Array, e.assign(e, w))
            }, e.setTyped(A)
        },
        75926: ve => {
            "use strict";
            ve.exports = function e(A, s, d, w) {
                for (var B = 65535 & A | 0, u = A >>> 16 & 65535 | 0, l = 0; 0 !== d;) {
                    d -= l = d > 2e3 ? 2e3 : d;
                    do {
                        u = u + (B = B + s[w++] | 0) | 0
                    } while (--l);
                    B %= 65521, u %= 65521
                }
                return B | u << 16 | 0
            }
        },
        9435: ve => {
            "use strict";
            ve.exports = {
                Z_NO_FLUSH: 0,
                Z_PARTIAL_FLUSH: 1,
                Z_SYNC_FLUSH: 2,
                Z_FULL_FLUSH: 3,
                Z_FINISH: 4,
                Z_BLOCK: 5,
                Z_TREES: 6,
                Z_OK: 0,
                Z_STREAM_END: 1,
                Z_NEED_DICT: 2,
                Z_ERRNO: -1,
                Z_STREAM_ERROR: -2,
                Z_DATA_ERROR: -3,
                Z_BUF_ERROR: -5,
                Z_NO_COMPRESSION: 0,
                Z_BEST_SPEED: 1,
                Z_BEST_COMPRESSION: 9,
                Z_DEFAULT_COMPRESSION: -1,
                Z_FILTERED: 1,
                Z_HUFFMAN_ONLY: 2,
                Z_RLE: 3,
                Z_FIXED: 4,
                Z_DEFAULT_STRATEGY: 0,
                Z_BINARY: 0,
                Z_TEXT: 1,
                Z_UNKNOWN: 2,
                Z_DEFLATED: 8
            }
        },
        94984: ve => {
            "use strict";
            var A = function e() {
                for (var d, w = [], B = 0; B < 256; B++) {
                    d = B;
                    for (var u = 0; u < 8; u++) d = 1 & d ? 3988292384 ^ d >>> 1 : d >>> 1;
                    w[B] = d
                }
                return w
            }();
            ve.exports = function s(d, w, B, u) {
                var l = A,
                    p = u + B;
                d ^= -1;
                for (var T = u; T < p; T++) d = d >>> 8 ^ l[255 & (d ^ w[T])];
                return -1 ^ d
            }
        },
        31767: (ve, e, A) => {
            "use strict";
            var je, s = A(4058),
                d = A(70534),
                w = A(75926),
                B = A(94984),
                u = A(3952),
                l = 0,
                y = 0,
                o = -2,
                S = 2,
                D = 8,
                P = 286,
                C = 30,
                ae = 19,
                J = 2 * P + 1,
                re = 15,
                Y = 3,
                te = 258,
                F = te + Y + 1,
                V = 42,
                Le = 113;

            function z(b, ke) {
                return b.msg = u[ke], ke
            }

            function K(b) {
                return (b << 1) - (b > 4 ? 9 : 0)
            }

            function de(b) {
                for (var ke = b.length; --ke >= 0;) b[ke] = 0
            }

            function we(b) {
                var ke = b.state,
                    Fe = ke.pending;
                Fe > b.avail_out && (Fe = b.avail_out), 0 !== Fe && (s.arraySet(b.output, ke.pending_buf, ke.pending_out, Fe, b.next_out), b.next_out += Fe, ke.pending_out += Fe, b.total_out += Fe, b.avail_out -= Fe, ke.pending -= Fe, 0 === ke.pending && (ke.pending_out = 0))
            }

            function Be(b, ke) {
                d._tr_flush_block(b, b.block_start >= 0 ? b.block_start : -1, b.strstart - b.block_start, ke), b.block_start = b.strstart, we(b.strm)
            }

            function he(b, ke) {
                b.pending_buf[b.pending++] = ke
            }

            function We(b, ke) {
                b.pending_buf[b.pending++] = ke >>> 8 & 255, b.pending_buf[b.pending++] = 255 & ke
            }

            function gt(b, ke, Fe, W) {
                var pe = b.avail_in;
                return pe > W && (pe = W), 0 === pe ? 0 : (b.avail_in -= pe, s.arraySet(ke, b.input, b.next_in, pe, Fe), 1 === b.state.wrap ? b.adler = w(b.adler, ke, pe, Fe) : 2 === b.state.wrap && (b.adler = B(b.adler, ke, pe, Fe)), b.next_in += pe, b.total_in += pe, pe)
            }

            function xt(b, ke) {
                var pe, Re, Fe = b.max_chain_length,
                    W = b.strstart,
                    ct = b.prev_length,
                    et = b.nice_match,
                    nt = b.strstart > b.w_size - F ? b.strstart - (b.w_size - F) : 0,
                    Bt = b.window,
                    Gt = b.w_mask,
                    jt = b.prev,
                    I = b.strstart + te,
                    $ = Bt[W + ct - 1],
                    Z = Bt[W + ct];
                b.prev_length >= b.good_match && (Fe >>= 2), et > b.lookahead && (et = b.lookahead);
                do {
                    if (Bt[(pe = ke) + ct] === Z && Bt[pe + ct - 1] === $ && Bt[pe] === Bt[W] && Bt[++pe] === Bt[W + 1]) {
                        W += 2, pe++;
                        do {} while (Bt[++W] === Bt[++pe] && Bt[++W] === Bt[++pe] && Bt[++W] === Bt[++pe] && Bt[++W] === Bt[++pe] && Bt[++W] === Bt[++pe] && Bt[++W] === Bt[++pe] && Bt[++W] === Bt[++pe] && Bt[++W] === Bt[++pe] && W < I);
                        if (Re = te - (I - W), W = I - te, Re > ct) {
                            if (b.match_start = ke, ct = Re, Re >= et) break;
                            $ = Bt[W + ct - 1], Z = Bt[W + ct]
                        }
                    }
                } while ((ke = jt[ke & Gt]) > nt && 0 != --Fe);
                return ct <= b.lookahead ? ct : b.lookahead
            }

            function yt(b) {
                var Fe, W, pe, Re, ct, ke = b.w_size;
                do {
                    if (Re = b.window_size - b.lookahead - b.strstart, b.strstart >= ke + (ke - F)) {
                        s.arraySet(b.window, b.window, ke, ke, 0), b.match_start -= ke, b.strstart -= ke, b.block_start -= ke, Fe = W = b.hash_size;
                        do {
                            pe = b.head[--Fe], b.head[Fe] = pe >= ke ? pe - ke : 0
                        } while (--W);
                        Fe = W = ke;
                        do {
                            pe = b.prev[--Fe], b.prev[Fe] = pe >= ke ? pe - ke : 0
                        } while (--W);
                        Re += ke
                    }
                    if (0 === b.strm.avail_in) break;
                    if (W = gt(b.strm, b.window, b.strstart + b.lookahead, Re), b.lookahead += W, b.lookahead + b.insert >= Y)
                        for (b.ins_h = b.window[ct = b.strstart - b.insert], b.ins_h = (b.ins_h << b.hash_shift ^ b.window[ct + 1]) & b.hash_mask; b.insert && (b.ins_h = (b.ins_h << b.hash_shift ^ b.window[ct + Y - 1]) & b.hash_mask, b.prev[ct & b.w_mask] = b.head[b.ins_h], b.head[b.ins_h] = ct, ct++, b.insert--, !(b.lookahead + b.insert < Y)););
                } while (b.lookahead < F && 0 !== b.strm.avail_in)
            }

            function ge(b, ke) {
                for (var Fe, W;;) {
                    if (b.lookahead < F) {
                        if (yt(b), b.lookahead < F && ke === l) return 1;
                        if (0 === b.lookahead) break
                    }
                    if (Fe = 0, b.lookahead >= Y && (b.ins_h = (b.ins_h << b.hash_shift ^ b.window[b.strstart + Y - 1]) & b.hash_mask, Fe = b.prev[b.strstart & b.w_mask] = b.head[b.ins_h], b.head[b.ins_h] = b.strstart), 0 !== Fe && b.strstart - Fe <= b.w_size - F && (b.match_length = xt(b, Fe)), b.match_length >= Y)
                        if (W = d._tr_tally(b, b.strstart - b.match_start, b.match_length - Y), b.lookahead -= b.match_length, b.match_length <= b.max_lazy_match && b.lookahead >= Y) {
                            b.match_length--;
                            do {
                                b.strstart++, b.ins_h = (b.ins_h << b.hash_shift ^ b.window[b.strstart + Y - 1]) & b.hash_mask, Fe = b.prev[b.strstart & b.w_mask] = b.head[b.ins_h], b.head[b.ins_h] = b.strstart
                            } while (0 != --b.match_length);
                            b.strstart++
                        } else b.strstart += b.match_length, b.match_length = 0, b.ins_h = b.window[b.strstart], b.ins_h = (b.ins_h << b.hash_shift ^ b.window[b.strstart + 1]) & b.hash_mask;
                    else W = d._tr_tally(b, 0, b.window[b.strstart]), b.lookahead--, b.strstart++;
                    if (W && (Be(b, !1), 0 === b.strm.avail_out)) return 1
                }
                return b.insert = b.strstart < Y - 1 ? b.strstart : Y - 1, 4 === ke ? (Be(b, !0), 0 === b.strm.avail_out ? 3 : 4) : b.last_lit && (Be(b, !1), 0 === b.strm.avail_out) ? 1 : 2
            }

            function G(b, ke) {
                for (var Fe, W, pe;;) {
                    if (b.lookahead < F) {
                        if (yt(b), b.lookahead < F && ke === l) return 1;
                        if (0 === b.lookahead) break
                    }
                    if (Fe = 0, b.lookahead >= Y && (b.ins_h = (b.ins_h << b.hash_shift ^ b.window[b.strstart + Y - 1]) & b.hash_mask, Fe = b.prev[b.strstart & b.w_mask] = b.head[b.ins_h], b.head[b.ins_h] = b.strstart), b.prev_length = b.match_length, b.prev_match = b.match_start, b.match_length = Y - 1, 0 !== Fe && b.prev_length < b.max_lazy_match && b.strstart - Fe <= b.w_size - F && (b.match_length = xt(b, Fe), b.match_length <= 5 && (1 === b.strategy || b.match_length === Y && b.strstart - b.match_start > 4096) && (b.match_length = Y - 1)), b.prev_length >= Y && b.match_length <= b.prev_length) {
                        pe = b.strstart + b.lookahead - Y, W = d._tr_tally(b, b.strstart - 1 - b.prev_match, b.prev_length - Y), b.lookahead -= b.prev_length - 1, b.prev_length -= 2;
                        do {
                            ++b.strstart <= pe && (b.ins_h = (b.ins_h << b.hash_shift ^ b.window[b.strstart + Y - 1]) & b.hash_mask, Fe = b.prev[b.strstart & b.w_mask] = b.head[b.ins_h], b.head[b.ins_h] = b.strstart)
                        } while (0 != --b.prev_length);
                        if (b.match_available = 0, b.match_length = Y - 1, b.strstart++, W && (Be(b, !1), 0 === b.strm.avail_out)) return 1
                    } else if (b.match_available) {
                        if ((W = d._tr_tally(b, 0, b.window[b.strstart - 1])) && Be(b, !1), b.strstart++, b.lookahead--, 0 === b.strm.avail_out) return 1
                    } else b.match_available = 1, b.strstart++, b.lookahead--
                }
                return b.match_available && (W = d._tr_tally(b, 0, b.window[b.strstart - 1]), b.match_available = 0), b.insert = b.strstart < Y - 1 ? b.strstart : Y - 1, 4 === ke ? (Be(b, !0), 0 === b.strm.avail_out ? 3 : 4) : b.last_lit && (Be(b, !1), 0 === b.strm.avail_out) ? 1 : 2
            }

            function Ae(b, ke, Fe, W, pe) {
                this.good_length = b, this.max_lazy = ke, this.nice_length = Fe, this.max_chain = W, this.func = pe
            }

            function j() {
                this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = D, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new s.Buf16(2 * J), this.dyn_dtree = new s.Buf16(2 * (2 * C + 1)), this.bl_tree = new s.Buf16(2 * (2 * ae + 1)), de(this.dyn_ltree), de(this.dyn_dtree), de(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new s.Buf16(re + 1), this.heap = new s.Buf16(2 * P + 1), de(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new s.Buf16(2 * P + 1), de(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0
            }

            function Ne(b) {
                var ke;
                return b && b.state ? (b.total_in = b.total_out = 0, b.data_type = S, (ke = b.state).pending = 0, ke.pending_out = 0, ke.wrap < 0 && (ke.wrap = -ke.wrap), ke.status = ke.wrap ? V : Le, b.adler = 2 === ke.wrap ? 0 : 1, ke.last_flush = l, d._tr_init(ke), y) : z(b, o)
            }

            function ie(b) {
                var ke = Ne(b);
                return ke === y && function Qe(b) {
                    b.window_size = 2 * b.w_size, de(b.head), b.max_lazy_match = je[b.level].max_lazy, b.good_match = je[b.level].good_length, b.nice_match = je[b.level].nice_length, b.max_chain_length = je[b.level].max_chain, b.strstart = 0, b.block_start = 0, b.lookahead = 0, b.insert = 0, b.match_length = b.prev_length = Y - 1, b.match_available = 0, b.ins_h = 0
                }(b.state), ke
            }

            function ue(b, ke, Fe, W, pe, Re) {
                if (!b) return o;
                var ct = 1;
                if (-1 === ke && (ke = 6), W < 0 ? (ct = 0, W = -W) : W > 15 && (ct = 2, W -= 16), pe < 1 || pe > 9 || Fe !== D || W < 8 || W > 15 || ke < 0 || ke > 9 || Re < 0 || Re > 4) return z(b, o);
                8 === W && (W = 9);
                var et = new j;
                return b.state = et, et.strm = b, et.wrap = ct, et.gzhead = null, et.w_bits = W, et.w_size = 1 << et.w_bits, et.w_mask = et.w_size - 1, et.hash_bits = pe + 7, et.hash_size = 1 << et.hash_bits, et.hash_mask = et.hash_size - 1, et.hash_shift = ~~((et.hash_bits + Y - 1) / Y), et.window = new s.Buf8(2 * et.w_size), et.head = new s.Buf16(et.hash_size), et.prev = new s.Buf16(et.w_size), et.lit_bufsize = 1 << pe + 6, et.pending_buf_size = 4 * et.lit_bufsize, et.pending_buf = new s.Buf8(et.pending_buf_size), et.d_buf = 1 * et.lit_bufsize, et.l_buf = 3 * et.lit_bufsize, et.level = ke, et.strategy = Re, et.method = Fe, ie(b)
            }
            je = [new Ae(0, 0, 0, 0, function At(b, ke) {
                var Fe = 65535;
                for (Fe > b.pending_buf_size - 5 && (Fe = b.pending_buf_size - 5);;) {
                    if (b.lookahead <= 1) {
                        if (yt(b), 0 === b.lookahead && ke === l) return 1;
                        if (0 === b.lookahead) break
                    }
                    b.strstart += b.lookahead, b.lookahead = 0;
                    var W = b.block_start + Fe;
                    if ((0 === b.strstart || b.strstart >= W) && (b.lookahead = b.strstart - W, b.strstart = W, Be(b, !1), 0 === b.strm.avail_out) || b.strstart - b.block_start >= b.w_size - F && (Be(b, !1), 0 === b.strm.avail_out)) return 1
                }
                return b.insert = 0, 4 === ke ? (Be(b, !0), 0 === b.strm.avail_out ? 3 : 4) : (b.strstart > b.block_start && Be(b, !1), 1)
            }), new Ae(4, 4, 8, 4, ge), new Ae(4, 5, 16, 8, ge), new Ae(4, 6, 32, 32, ge), new Ae(4, 4, 16, 16, G), new Ae(8, 16, 32, 32, G), new Ae(8, 16, 128, 128, G), new Ae(8, 32, 128, 256, G), new Ae(32, 128, 258, 1024, G), new Ae(32, 258, 258, 4096, G)], e.deflateInit = function Ce(b, ke) {
                return ue(b, ke, D, 15, 8, 0)
            }, e.deflateInit2 = ue, e.deflateReset = ie, e.deflateResetKeep = Ne, e.deflateSetHeader = function le(b, ke) {
                return b && b.state && 2 === b.state.wrap ? (b.state.gzhead = ke, y) : o
            }, e.deflate = function k(b, ke) {
                var Fe, W, pe, Re;
                if (!b || !b.state || ke > 5 || ke < 0) return b ? z(b, o) : o;
                if (W = b.state, !b.output || !b.input && 0 !== b.avail_in || 666 === W.status && 4 !== ke) return z(b, 0 === b.avail_out ? -5 : o);
                if (W.strm = b, Fe = W.last_flush, W.last_flush = ke, W.status === V)
                    if (2 === W.wrap) b.adler = 0, he(W, 31), he(W, 139), he(W, 8), W.gzhead ? (he(W, (W.gzhead.text ? 1 : 0) + (W.gzhead.hcrc ? 2 : 0) + (W.gzhead.extra ? 4 : 0) + (W.gzhead.name ? 8 : 0) + (W.gzhead.comment ? 16 : 0)), he(W, 255 & W.gzhead.time), he(W, W.gzhead.time >> 8 & 255), he(W, W.gzhead.time >> 16 & 255), he(W, W.gzhead.time >> 24 & 255), he(W, 9 === W.level ? 2 : W.strategy >= 2 || W.level < 2 ? 4 : 0), he(W, 255 & W.gzhead.os), W.gzhead.extra && W.gzhead.extra.length && (he(W, 255 & W.gzhead.extra.length), he(W, W.gzhead.extra.length >> 8 & 255)), W.gzhead.hcrc && (b.adler = B(b.adler, W.pending_buf, W.pending, 0)), W.gzindex = 0, W.status = 69) : (he(W, 0), he(W, 0), he(W, 0), he(W, 0), he(W, 0), he(W, 9 === W.level ? 2 : W.strategy >= 2 || W.level < 2 ? 4 : 0), he(W, 3), W.status = Le);
                    else {
                        var ct = D + (W.w_bits - 8 << 4) << 8;
                        ct |= (W.strategy >= 2 || W.level < 2 ? 0 : W.level < 6 ? 1 : 6 === W.level ? 2 : 3) << 6, 0 !== W.strstart && (ct |= 32), ct += 31 - ct % 31, W.status = Le, We(W, ct), 0 !== W.strstart && (We(W, b.adler >>> 16), We(W, 65535 & b.adler)), b.adler = 1
                    }
                if (69 === W.status)
                    if (W.gzhead.extra) {
                        for (pe = W.pending; W.gzindex < (65535 & W.gzhead.extra.length) && (W.pending !== W.pending_buf_size || (W.gzhead.hcrc && W.pending > pe && (b.adler = B(b.adler, W.pending_buf, W.pending - pe, pe)), we(b), pe = W.pending, W.pending !== W.pending_buf_size));) he(W, 255 & W.gzhead.extra[W.gzindex]), W.gzindex++;
                        W.gzhead.hcrc && W.pending > pe && (b.adler = B(b.adler, W.pending_buf, W.pending - pe, pe)), W.gzindex === W.gzhead.extra.length && (W.gzindex = 0, W.status = 73)
                    } else W.status = 73;
                if (73 === W.status)
                    if (W.gzhead.name) {
                        pe = W.pending;
                        do {
                            if (W.pending === W.pending_buf_size && (W.gzhead.hcrc && W.pending > pe && (b.adler = B(b.adler, W.pending_buf, W.pending - pe, pe)), we(b), pe = W.pending, W.pending === W.pending_buf_size)) {
                                Re = 1;
                                break
                            }
                            Re = W.gzindex < W.gzhead.name.length ? 255 & W.gzhead.name.charCodeAt(W.gzindex++) : 0, he(W, Re)
                        } while (0 !== Re);
                        W.gzhead.hcrc && W.pending > pe && (b.adler = B(b.adler, W.pending_buf, W.pending - pe, pe)), 0 === Re && (W.gzindex = 0, W.status = 91)
                    } else W.status = 91;
                if (91 === W.status)
                    if (W.gzhead.comment) {
                        pe = W.pending;
                        do {
                            if (W.pending === W.pending_buf_size && (W.gzhead.hcrc && W.pending > pe && (b.adler = B(b.adler, W.pending_buf, W.pending - pe, pe)), we(b), pe = W.pending, W.pending === W.pending_buf_size)) {
                                Re = 1;
                                break
                            }
                            Re = W.gzindex < W.gzhead.comment.length ? 255 & W.gzhead.comment.charCodeAt(W.gzindex++) : 0, he(W, Re)
                        } while (0 !== Re);
                        W.gzhead.hcrc && W.pending > pe && (b.adler = B(b.adler, W.pending_buf, W.pending - pe, pe)), 0 === Re && (W.status = 103)
                    } else W.status = 103;
                if (103 === W.status && (W.gzhead.hcrc ? (W.pending + 2 > W.pending_buf_size && we(b), W.pending + 2 <= W.pending_buf_size && (he(W, 255 & b.adler), he(W, b.adler >> 8 & 255), b.adler = 0, W.status = Le)) : W.status = Le), 0 !== W.pending) {
                    if (we(b), 0 === b.avail_out) return W.last_flush = -1, y
                } else if (0 === b.avail_in && K(ke) <= K(Fe) && 4 !== ke) return z(b, -5);
                if (666 === W.status && 0 !== b.avail_in) return z(b, -5);
                if (0 !== b.avail_in || 0 !== W.lookahead || ke !== l && 666 !== W.status) {
                    var nt = 2 === W.strategy ? function xe(b, ke) {
                        for (var Fe;;) {
                            if (0 === b.lookahead && (yt(b), 0 === b.lookahead)) {
                                if (ke === l) return 1;
                                break
                            }
                            if (b.match_length = 0, Fe = d._tr_tally(b, 0, b.window[b.strstart]), b.lookahead--, b.strstart++, Fe && (Be(b, !1), 0 === b.strm.avail_out)) return 1
                        }
                        return b.insert = 0, 4 === ke ? (Be(b, !0), 0 === b.strm.avail_out ? 3 : 4) : b.last_lit && (Be(b, !1), 0 === b.strm.avail_out) ? 1 : 2
                    }(W, ke) : 3 === W.strategy ? function ee(b, ke) {
                        for (var Fe, W, pe, Re, ct = b.window;;) {
                            if (b.lookahead <= te) {
                                if (yt(b), b.lookahead <= te && ke === l) return 1;
                                if (0 === b.lookahead) break
                            }
                            if (b.match_length = 0, b.lookahead >= Y && b.strstart > 0 && (W = ct[pe = b.strstart - 1]) === ct[++pe] && W === ct[++pe] && W === ct[++pe]) {
                                Re = b.strstart + te;
                                do {} while (W === ct[++pe] && W === ct[++pe] && W === ct[++pe] && W === ct[++pe] && W === ct[++pe] && W === ct[++pe] && W === ct[++pe] && W === ct[++pe] && pe < Re);
                                b.match_length = te - (Re - pe), b.match_length > b.lookahead && (b.match_length = b.lookahead)
                            }
                            if (b.match_length >= Y ? (Fe = d._tr_tally(b, 1, b.match_length - Y), b.lookahead -= b.match_length, b.strstart += b.match_length, b.match_length = 0) : (Fe = d._tr_tally(b, 0, b.window[b.strstart]), b.lookahead--, b.strstart++), Fe && (Be(b, !1), 0 === b.strm.avail_out)) return 1
                        }
                        return b.insert = 0, 4 === ke ? (Be(b, !0), 0 === b.strm.avail_out ? 3 : 4) : b.last_lit && (Be(b, !1), 0 === b.strm.avail_out) ? 1 : 2
                    }(W, ke) : je[W.level].func(W, ke);
                    if ((3 === nt || 4 === nt) && (W.status = 666), 1 === nt || 3 === nt) return 0 === b.avail_out && (W.last_flush = -1), y;
                    if (2 === nt && (1 === ke ? d._tr_align(W) : 5 !== ke && (d._tr_stored_block(W, 0, 0, !1), 3 === ke && (de(W.head), 0 === W.lookahead && (W.strstart = 0, W.block_start = 0, W.insert = 0))), we(b), 0 === b.avail_out)) return W.last_flush = -1, y
                }
                return 4 !== ke ? y : W.wrap <= 0 ? 1 : (2 === W.wrap ? (he(W, 255 & b.adler), he(W, b.adler >> 8 & 255), he(W, b.adler >> 16 & 255), he(W, b.adler >> 24 & 255), he(W, 255 & b.total_in), he(W, b.total_in >> 8 & 255), he(W, b.total_in >> 16 & 255), he(W, b.total_in >> 24 & 255)) : (We(W, b.adler >>> 16), We(W, 65535 & b.adler)), we(b), W.wrap > 0 && (W.wrap = -W.wrap), 0 !== W.pending ? y : 1)
            }, e.deflateEnd = function Me(b) {
                var ke;
                return b && b.state ? (ke = b.state.status) !== V && 69 !== ke && 73 !== ke && 91 !== ke && 103 !== ke && ke !== Le && 666 !== ke ? z(b, o) : (b.state = null, ke === Le ? z(b, -3) : y) : o
            }, e.deflateSetDictionary = function rt(b, ke) {
                var W, pe, Re, ct, et, nt, Bt, Gt, Fe = ke.length;
                if (!b || !b.state || 2 === (ct = (W = b.state).wrap) || 1 === ct && W.status !== V || W.lookahead) return o;
                for (1 === ct && (b.adler = w(b.adler, ke, Fe, 0)), W.wrap = 0, Fe >= W.w_size && (0 === ct && (de(W.head), W.strstart = 0, W.block_start = 0, W.insert = 0), Gt = new s.Buf8(W.w_size), s.arraySet(Gt, ke, Fe - W.w_size, W.w_size, 0), ke = Gt, Fe = W.w_size), et = b.avail_in, nt = b.next_in, Bt = b.input, b.avail_in = Fe, b.next_in = 0, b.input = ke, yt(W); W.lookahead >= Y;) {
                    pe = W.strstart, Re = W.lookahead - (Y - 1);
                    do {
                        W.ins_h = (W.ins_h << W.hash_shift ^ W.window[pe + Y - 1]) & W.hash_mask, W.prev[pe & W.w_mask] = W.head[W.ins_h], W.head[W.ins_h] = pe, pe++
                    } while (--Re);
                    W.strstart = pe, W.lookahead = Y - 1, yt(W)
                }
                return W.strstart += W.lookahead, W.block_start = W.strstart, W.insert = W.lookahead, W.lookahead = 0, W.match_length = W.prev_length = Y - 1, W.match_available = 0, b.next_in = nt, b.input = Bt, b.avail_in = et, W.wrap = ct, y
            }, e.deflateInfo = "pako deflate (from Nodeca project)"
        },
        5045: ve => {
            "use strict";
            ve.exports = function(d, w) {
                var B, u, l, p, T, R, v, y, x, o, E, h, c, r, a, m, _, U, S, D, M, fe, Se, _e, O;
                _e = d.input, l = (u = d.next_in) + (d.avail_in - 5), O = d.output, T = (p = d.next_out) - (w - d.avail_out), R = p + (d.avail_out - 257), v = (B = d.state).dmax, y = B.wsize, x = B.whave, o = B.wnext, E = B.window, h = B.hold, c = B.bits, r = B.lencode, a = B.distcode, m = (1 << B.lenbits) - 1, _ = (1 << B.distbits) - 1;
                e: do {
                    c < 15 && (h += _e[u++] << c, h += _e[u++] << (c += 8), c += 8), U = r[h & m];
                    t: for (;;) {
                        if (h >>>= S = U >>> 24, c -= S, 0 == (S = U >>> 16 & 255)) O[p++] = 65535 & U;
                        else {
                            if (!(16 & S)) {
                                if (64 & S) {
                                    if (32 & S) {
                                        B.mode = 12;
                                        break e
                                    }
                                    d.msg = "invalid literal/length code", B.mode = 30;
                                    break e
                                }
                                U = r[(65535 & U) + (h & (1 << S) - 1)];
                                continue t
                            }
                            for (D = 65535 & U, (S &= 15) && (c < S && (h += _e[u++] << c, c += 8), D += h & (1 << S) - 1, h >>>= S, c -= S), c < 15 && (h += _e[u++] << c, h += _e[u++] << (c += 8), c += 8), U = a[h & _];;) {
                                if (h >>>= S = U >>> 24, c -= S, 16 & (S = U >>> 16 & 255)) {
                                    if (M = 65535 & U, c < (S &= 15) && (h += _e[u++] << c, (c += 8) < S && (h += _e[u++] << c, c += 8)), (M += h & (1 << S) - 1) > v) {
                                        d.msg = "invalid distance too far back", B.mode = 30;
                                        break e
                                    }
                                    if (h >>>= S, c -= S, M > (S = p - T)) {
                                        if ((S = M - S) > x && B.sane) {
                                            d.msg = "invalid distance too far back", B.mode = 30;
                                            break e
                                        }
                                        if (fe = 0, Se = E, 0 === o) {
                                            if (fe += y - S, S < D) {
                                                D -= S;
                                                do {
                                                    O[p++] = E[fe++]
                                                } while (--S);
                                                fe = p - M, Se = O
                                            }
                                        } else if (o < S) {
                                            if (fe += y + o - S, (S -= o) < D) {
                                                D -= S;
                                                do {
                                                    O[p++] = E[fe++]
                                                } while (--S);
                                                if (fe = 0, o < D) {
                                                    D -= S = o;
                                                    do {
                                                        O[p++] = E[fe++]
                                                    } while (--S);
                                                    fe = p - M, Se = O
                                                }
                                            }
                                        } else if (fe += o - S, S < D) {
                                            D -= S;
                                            do {
                                                O[p++] = E[fe++]
                                            } while (--S);
                                            fe = p - M, Se = O
                                        }
                                        for (; D > 2;) O[p++] = Se[fe++], O[p++] = Se[fe++], O[p++] = Se[fe++], D -= 3;
                                        D && (O[p++] = Se[fe++], D > 1 && (O[p++] = Se[fe++]))
                                    } else {
                                        fe = p - M;
                                        do {
                                            O[p++] = O[fe++], O[p++] = O[fe++], O[p++] = O[fe++], D -= 3
                                        } while (D > 2);
                                        D && (O[p++] = O[fe++], D > 1 && (O[p++] = O[fe++]))
                                    }
                                    break
                                }
                                if (64 & S) {
                                    d.msg = "invalid distance code", B.mode = 30;
                                    break e
                                }
                                U = a[(65535 & U) + (h & (1 << S) - 1)]
                            }
                        }
                        break
                    }
                } while (u < l && p < R);
                h &= (1 << (c -= (D = c >> 3) << 3)) - 1, d.next_in = u -= D, d.next_out = p, d.avail_in = u < l ? l - u + 5 : 5 - (u - l), d.avail_out = p < R ? R - p + 257 : 257 - (p - R), B.hold = h, B.bits = c
            }
        },
        34599: (ve, e, A) => {
            "use strict";
            var s = A(4058),
                d = A(75926),
                w = A(94984),
                B = A(5045),
                u = A(99825),
                x = 0,
                h = -2,
                _ = 1,
                N = 30,
                de = 852,
                we = 592;

            function We(ue) {
                return (ue >>> 24 & 255) + (ue >>> 8 & 65280) + ((65280 & ue) << 8) + ((255 & ue) << 24)
            }

            function gt() {
                this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new s.Buf16(320), this.work = new s.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0
            }

            function xt(ue) {
                var Ce;
                return ue && ue.state ? (ue.total_in = ue.total_out = (Ce = ue.state).total = 0, ue.msg = "", Ce.wrap && (ue.adler = 1 & Ce.wrap), Ce.mode = _, Ce.last = 0, Ce.havedict = 0, Ce.dmax = 32768, Ce.head = null, Ce.hold = 0, Ce.bits = 0, Ce.lencode = Ce.lendyn = new s.Buf32(de), Ce.distcode = Ce.distdyn = new s.Buf32(we), Ce.sane = 1, Ce.back = -1, x) : h
            }

            function yt(ue) {
                var Ce;
                return ue && ue.state ? ((Ce = ue.state).wsize = 0, Ce.whave = 0, Ce.wnext = 0, xt(ue)) : h
            }

            function At(ue, Ce) {
                var k, Me;
                return !ue || !ue.state || (Me = ue.state, Ce < 0 ? (k = 0, Ce = -Ce) : (k = 1 + (Ce >> 4), Ce < 48 && (Ce &= 15)), Ce && (Ce < 8 || Ce > 15)) ? h : (null !== Me.window && Me.wbits !== Ce && (Me.window = null), Me.wrap = k, Me.wbits = Ce, yt(ue))
            }

            function ge(ue, Ce) {
                var k, Me;
                return ue ? (Me = new gt, ue.state = Me, Me.window = null, (k = At(ue, Ce)) !== x && (ue.state = null), k) : h
            }
            var xe, Ae, ee = !0;

            function je(ue) {
                if (ee) {
                    var Ce;
                    for (xe = new s.Buf32(512), Ae = new s.Buf32(32), Ce = 0; Ce < 144;) ue.lens[Ce++] = 8;
                    for (; Ce < 256;) ue.lens[Ce++] = 9;
                    for (; Ce < 280;) ue.lens[Ce++] = 7;
                    for (; Ce < 288;) ue.lens[Ce++] = 8;
                    for (u(1, ue.lens, 0, 288, xe, 0, ue.work, {
                            bits: 9
                        }), Ce = 0; Ce < 32;) ue.lens[Ce++] = 5;
                    u(2, ue.lens, 0, 32, Ae, 0, ue.work, {
                        bits: 5
                    }), ee = !1
                }
                ue.lencode = xe, ue.lenbits = 9, ue.distcode = Ae, ue.distbits = 5
            }

            function Qe(ue, Ce, k, Me) {
                var rt, b = ue.state;
                return null === b.window && (b.wsize = 1 << b.wbits, b.wnext = 0, b.whave = 0, b.window = new s.Buf8(b.wsize)), Me >= b.wsize ? (s.arraySet(b.window, Ce, k - b.wsize, b.wsize, 0), b.wnext = 0, b.whave = b.wsize) : ((rt = b.wsize - b.wnext) > Me && (rt = Me), s.arraySet(b.window, Ce, k - Me, rt, b.wnext), (Me -= rt) ? (s.arraySet(b.window, Ce, k - Me, Me, 0), b.wnext = Me, b.whave = b.wsize) : (b.wnext += rt, b.wnext === b.wsize && (b.wnext = 0), b.whave < b.wsize && (b.whave += rt))), 0
            }
            e.inflateReset = yt, e.inflateReset2 = At, e.inflateResetKeep = xt, e.inflateInit = function G(ue) {
                return ge(ue, 15)
            }, e.inflateInit2 = ge, e.inflate = function j(ue, Ce) {
                var k, Me, rt, b, ke, Fe, W, pe, Re, ct, et, nt, Bt, Gt, I, $, Z, f, ne, Oe, Te, ze, tt, Ye, jt = 0,
                    Ge = new s.Buf8(4),
                    Rt = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
                if (!ue || !ue.state || !ue.output || !ue.input && 0 !== ue.avail_in) return h;
                12 === (k = ue.state).mode && (k.mode = 13), ke = ue.next_out, rt = ue.output, b = ue.next_in, Me = ue.input, pe = k.hold, Re = k.bits, ct = Fe = ue.avail_in, et = W = ue.avail_out, ze = x;
                e: for (;;) switch (k.mode) {
                    case _:
                        if (0 === k.wrap) {
                            k.mode = 13;
                            break
                        }
                        for (; Re < 16;) {
                            if (0 === Fe) break e;
                            Fe--, pe += Me[b++] << Re, Re += 8
                        }
                        if (2 & k.wrap && 35615 === pe) {
                            k.check = 0, Ge[0] = 255 & pe, Ge[1] = pe >>> 8 & 255, k.check = w(k.check, Ge, 2, 0), pe = 0, Re = 0, k.mode = 2;
                            break
                        }
                        if (k.flags = 0, k.head && (k.head.done = !1), !(1 & k.wrap) || (((255 & pe) << 8) + (pe >> 8)) % 31) {
                            ue.msg = "incorrect header check", k.mode = N;
                            break
                        }
                        if (8 != (15 & pe)) {
                            ue.msg = "unknown compression method", k.mode = N;
                            break
                        }
                        if (Re -= 4, Te = 8 + (15 & (pe >>>= 4)), 0 === k.wbits) k.wbits = Te;
                        else if (Te > k.wbits) {
                            ue.msg = "invalid window size", k.mode = N;
                            break
                        }
                        k.dmax = 1 << Te, ue.adler = k.check = 1, k.mode = 512 & pe ? 10 : 12, pe = 0, Re = 0;
                        break;
                    case 2:
                        for (; Re < 16;) {
                            if (0 === Fe) break e;
                            Fe--, pe += Me[b++] << Re, Re += 8
                        }
                        if (k.flags = pe, 8 != (255 & k.flags)) {
                            ue.msg = "unknown compression method", k.mode = N;
                            break
                        }
                        if (57344 & k.flags) {
                            ue.msg = "unknown header flags set", k.mode = N;
                            break
                        }
                        k.head && (k.head.text = pe >> 8 & 1), 512 & k.flags && (Ge[0] = 255 & pe, Ge[1] = pe >>> 8 & 255, k.check = w(k.check, Ge, 2, 0)), pe = 0, Re = 0, k.mode = 3;
                    case 3:
                        for (; Re < 32;) {
                            if (0 === Fe) break e;
                            Fe--, pe += Me[b++] << Re, Re += 8
                        }
                        k.head && (k.head.time = pe), 512 & k.flags && (Ge[0] = 255 & pe, Ge[1] = pe >>> 8 & 255, Ge[2] = pe >>> 16 & 255, Ge[3] = pe >>> 24 & 255, k.check = w(k.check, Ge, 4, 0)), pe = 0, Re = 0, k.mode = 4;
                    case 4:
                        for (; Re < 16;) {
                            if (0 === Fe) break e;
                            Fe--, pe += Me[b++] << Re, Re += 8
                        }
                        k.head && (k.head.xflags = 255 & pe, k.head.os = pe >> 8), 512 & k.flags && (Ge[0] = 255 & pe, Ge[1] = pe >>> 8 & 255, k.check = w(k.check, Ge, 2, 0)), pe = 0, Re = 0, k.mode = 5;
                    case 5:
                        if (1024 & k.flags) {
                            for (; Re < 16;) {
                                if (0 === Fe) break e;
                                Fe--, pe += Me[b++] << Re, Re += 8
                            }
                            k.length = pe, k.head && (k.head.extra_len = pe), 512 & k.flags && (Ge[0] = 255 & pe, Ge[1] = pe >>> 8 & 255, k.check = w(k.check, Ge, 2, 0)), pe = 0, Re = 0
                        } else k.head && (k.head.extra = null);
                        k.mode = 6;
                    case 6:
                        if (1024 & k.flags && ((nt = k.length) > Fe && (nt = Fe), nt && (k.head && (Te = k.head.extra_len - k.length, k.head.extra || (k.head.extra = new Array(k.head.extra_len)), s.arraySet(k.head.extra, Me, b, nt, Te)), 512 & k.flags && (k.check = w(k.check, Me, nt, b)), Fe -= nt, b += nt, k.length -= nt), k.length)) break e;
                        k.length = 0, k.mode = 7;
                    case 7:
                        if (2048 & k.flags) {
                            if (0 === Fe) break e;
                            nt = 0;
                            do {
                                Te = Me[b + nt++], k.head && Te && k.length < 65536 && (k.head.name += String.fromCharCode(Te))
                            } while (Te && nt < Fe);
                            if (512 & k.flags && (k.check = w(k.check, Me, nt, b)), Fe -= nt, b += nt, Te) break e
                        } else k.head && (k.head.name = null);
                        k.length = 0, k.mode = 8;
                    case 8:
                        if (4096 & k.flags) {
                            if (0 === Fe) break e;
                            nt = 0;
                            do {
                                Te = Me[b + nt++], k.head && Te && k.length < 65536 && (k.head.comment += String.fromCharCode(Te))
                            } while (Te && nt < Fe);
                            if (512 & k.flags && (k.check = w(k.check, Me, nt, b)), Fe -= nt, b += nt, Te) break e
                        } else k.head && (k.head.comment = null);
                        k.mode = 9;
                    case 9:
                        if (512 & k.flags) {
                            for (; Re < 16;) {
                                if (0 === Fe) break e;
                                Fe--, pe += Me[b++] << Re, Re += 8
                            }
                            if (pe !== (65535 & k.check)) {
                                ue.msg = "header crc mismatch", k.mode = N;
                                break
                            }
                            pe = 0, Re = 0
                        }
                        k.head && (k.head.hcrc = k.flags >> 9 & 1, k.head.done = !0), ue.adler = k.check = 0, k.mode = 12;
                        break;
                    case 10:
                        for (; Re < 32;) {
                            if (0 === Fe) break e;
                            Fe--, pe += Me[b++] << Re, Re += 8
                        }
                        ue.adler = k.check = We(pe), pe = 0, Re = 0, k.mode = 11;
                    case 11:
                        if (0 === k.havedict) return ue.next_out = ke, ue.avail_out = W, ue.next_in = b, ue.avail_in = Fe, k.hold = pe, k.bits = Re, 2;
                        ue.adler = k.check = 1, k.mode = 12;
                    case 12:
                        if (5 === Ce || 6 === Ce) break e;
                    case 13:
                        if (k.last) {
                            pe >>>= 7 & Re, Re -= 7 & Re, k.mode = 27;
                            break
                        }
                        for (; Re < 3;) {
                            if (0 === Fe) break e;
                            Fe--, pe += Me[b++] << Re, Re += 8
                        }
                        switch (k.last = 1 & pe, Re -= 1, 3 & (pe >>>= 1)) {
                            case 0:
                                k.mode = 14;
                                break;
                            case 1:
                                if (je(k), k.mode = 20, 6 === Ce) {
                                    pe >>>= 2, Re -= 2;
                                    break e
                                }
                                break;
                            case 2:
                                k.mode = 17;
                                break;
                            case 3:
                                ue.msg = "invalid block type", k.mode = N
                        }
                        pe >>>= 2, Re -= 2;
                        break;
                    case 14:
                        for (pe >>>= 7 & Re, Re -= 7 & Re; Re < 32;) {
                            if (0 === Fe) break e;
                            Fe--, pe += Me[b++] << Re, Re += 8
                        }
                        if ((65535 & pe) != (pe >>> 16 ^ 65535)) {
                            ue.msg = "invalid stored block lengths", k.mode = N;
                            break
                        }
                        if (k.length = 65535 & pe, pe = 0, Re = 0, k.mode = 15, 6 === Ce) break e;
                    case 15:
                        k.mode = 16;
                    case 16:
                        if (nt = k.length) {
                            if (nt > Fe && (nt = Fe), nt > W && (nt = W), 0 === nt) break e;
                            s.arraySet(rt, Me, b, nt, ke), Fe -= nt, b += nt, W -= nt, ke += nt, k.length -= nt;
                            break
                        }
                        k.mode = 12;
                        break;
                    case 17:
                        for (; Re < 14;) {
                            if (0 === Fe) break e;
                            Fe--, pe += Me[b++] << Re, Re += 8
                        }
                        if (k.nlen = 257 + (31 & pe), Re -= 5, k.ndist = 1 + (31 & (pe >>>= 5)), Re -= 5, k.ncode = 4 + (15 & (pe >>>= 5)), pe >>>= 4, Re -= 4, k.nlen > 286 || k.ndist > 30) {
                            ue.msg = "too many length or distance symbols", k.mode = N;
                            break
                        }
                        k.have = 0, k.mode = 18;
                    case 18:
                        for (; k.have < k.ncode;) {
                            for (; Re < 3;) {
                                if (0 === Fe) break e;
                                Fe--, pe += Me[b++] << Re, Re += 8
                            }
                            k.lens[Rt[k.have++]] = 7 & pe, pe >>>= 3, Re -= 3
                        }
                        for (; k.have < 19;) k.lens[Rt[k.have++]] = 0;
                        if (k.lencode = k.lendyn, k.lenbits = 7, ze = u(0, k.lens, 0, 19, k.lencode, 0, k.work, tt = {
                                bits: k.lenbits
                            }), k.lenbits = tt.bits, ze) {
                            ue.msg = "invalid code lengths set", k.mode = N;
                            break
                        }
                        k.have = 0, k.mode = 19;
                    case 19:
                        for (; k.have < k.nlen + k.ndist;) {
                            for (; $ = (jt = k.lencode[pe & (1 << k.lenbits) - 1]) >>> 16 & 255, Z = 65535 & jt, !((I = jt >>> 24) <= Re);) {
                                if (0 === Fe) break e;
                                Fe--, pe += Me[b++] << Re, Re += 8
                            }
                            if (Z < 16) pe >>>= I, Re -= I, k.lens[k.have++] = Z;
                            else {
                                if (16 === Z) {
                                    for (Ye = I + 2; Re < Ye;) {
                                        if (0 === Fe) break e;
                                        Fe--, pe += Me[b++] << Re, Re += 8
                                    }
                                    if (pe >>>= I, Re -= I, 0 === k.have) {
                                        ue.msg = "invalid bit length repeat", k.mode = N;
                                        break
                                    }
                                    Te = k.lens[k.have - 1], nt = 3 + (3 & pe), pe >>>= 2, Re -= 2
                                } else if (17 === Z) {
                                    for (Ye = I + 3; Re < Ye;) {
                                        if (0 === Fe) break e;
                                        Fe--, pe += Me[b++] << Re, Re += 8
                                    }
                                    Re -= I, Te = 0, nt = 3 + (7 & (pe >>>= I)), pe >>>= 3, Re -= 3
                                } else {
                                    for (Ye = I + 7; Re < Ye;) {
                                        if (0 === Fe) break e;
                                        Fe--, pe += Me[b++] << Re, Re += 8
                                    }
                                    Re -= I, Te = 0, nt = 11 + (127 & (pe >>>= I)), pe >>>= 7, Re -= 7
                                }
                                if (k.have + nt > k.nlen + k.ndist) {
                                    ue.msg = "invalid bit length repeat", k.mode = N;
                                    break
                                }
                                for (; nt--;) k.lens[k.have++] = Te
                            }
                        }
                        if (k.mode === N) break;
                        if (0 === k.lens[256]) {
                            ue.msg = "invalid code -- missing end-of-block", k.mode = N;
                            break
                        }
                        if (k.lenbits = 9, ze = u(1, k.lens, 0, k.nlen, k.lencode, 0, k.work, tt = {
                                bits: k.lenbits
                            }), k.lenbits = tt.bits, ze) {
                            ue.msg = "invalid literal/lengths set", k.mode = N;
                            break
                        }
                        if (k.distbits = 6, k.distcode = k.distdyn, ze = u(2, k.lens, k.nlen, k.ndist, k.distcode, 0, k.work, tt = {
                                bits: k.distbits
                            }), k.distbits = tt.bits, ze) {
                            ue.msg = "invalid distances set", k.mode = N;
                            break
                        }
                        if (k.mode = 20, 6 === Ce) break e;
                    case 20:
                        k.mode = 21;
                    case 21:
                        if (Fe >= 6 && W >= 258) {
                            ue.next_out = ke, ue.avail_out = W, ue.next_in = b, ue.avail_in = Fe, k.hold = pe, k.bits = Re, B(ue, et), ke = ue.next_out, rt = ue.output, W = ue.avail_out, b = ue.next_in, Me = ue.input, Fe = ue.avail_in, pe = k.hold, Re = k.bits, 12 === k.mode && (k.back = -1);
                            break
                        }
                        for (k.back = 0; $ = (jt = k.lencode[pe & (1 << k.lenbits) - 1]) >>> 16 & 255, Z = 65535 & jt, !((I = jt >>> 24) <= Re);) {
                            if (0 === Fe) break e;
                            Fe--, pe += Me[b++] << Re, Re += 8
                        }
                        if ($ && !(240 & $)) {
                            for (f = I, ne = $, Oe = Z; $ = (jt = k.lencode[Oe + ((pe & (1 << f + ne) - 1) >> f)]) >>> 16 & 255, Z = 65535 & jt, !(f + (I = jt >>> 24) <= Re);) {
                                if (0 === Fe) break e;
                                Fe--, pe += Me[b++] << Re, Re += 8
                            }
                            pe >>>= f, Re -= f, k.back += f
                        }
                        if (pe >>>= I, Re -= I, k.back += I, k.length = Z, 0 === $) {
                            k.mode = 26;
                            break
                        }
                        if (32 & $) {
                            k.back = -1, k.mode = 12;
                            break
                        }
                        if (64 & $) {
                            ue.msg = "invalid literal/length code", k.mode = N;
                            break
                        }
                        k.extra = 15 & $, k.mode = 22;
                    case 22:
                        if (k.extra) {
                            for (Ye = k.extra; Re < Ye;) {
                                if (0 === Fe) break e;
                                Fe--, pe += Me[b++] << Re, Re += 8
                            }
                            k.length += pe & (1 << k.extra) - 1, pe >>>= k.extra, Re -= k.extra, k.back += k.extra
                        }
                        k.was = k.length, k.mode = 23;
                    case 23:
                        for (; $ = (jt = k.distcode[pe & (1 << k.distbits) - 1]) >>> 16 & 255, Z = 65535 & jt, !((I = jt >>> 24) <= Re);) {
                            if (0 === Fe) break e;
                            Fe--, pe += Me[b++] << Re, Re += 8
                        }
                        if (!(240 & $)) {
                            for (f = I, ne = $, Oe = Z; $ = (jt = k.distcode[Oe + ((pe & (1 << f + ne) - 1) >> f)]) >>> 16 & 255, Z = 65535 & jt, !(f + (I = jt >>> 24) <= Re);) {
                                if (0 === Fe) break e;
                                Fe--, pe += Me[b++] << Re, Re += 8
                            }
                            pe >>>= f, Re -= f, k.back += f
                        }
                        if (pe >>>= I, Re -= I, k.back += I, 64 & $) {
                            ue.msg = "invalid distance code", k.mode = N;
                            break
                        }
                        k.offset = Z, k.extra = 15 & $, k.mode = 24;
                    case 24:
                        if (k.extra) {
                            for (Ye = k.extra; Re < Ye;) {
                                if (0 === Fe) break e;
                                Fe--, pe += Me[b++] << Re, Re += 8
                            }
                            k.offset += pe & (1 << k.extra) - 1, pe >>>= k.extra, Re -= k.extra, k.back += k.extra
                        }
                        if (k.offset > k.dmax) {
                            ue.msg = "invalid distance too far back", k.mode = N;
                            break
                        }
                        k.mode = 25;
                    case 25:
                        if (0 === W) break e;
                        if (k.offset > (nt = et - W)) {
                            if ((nt = k.offset - nt) > k.whave && k.sane) {
                                ue.msg = "invalid distance too far back", k.mode = N;
                                break
                            }
                            Bt = nt > k.wnext ? k.wsize - (nt -= k.wnext) : k.wnext - nt, nt > k.length && (nt = k.length), Gt = k.window
                        } else Gt = rt, Bt = ke - k.offset, nt = k.length;
                        nt > W && (nt = W), W -= nt, k.length -= nt;
                        do {
                            rt[ke++] = Gt[Bt++]
                        } while (--nt);
                        0 === k.length && (k.mode = 21);
                        break;
                    case 26:
                        if (0 === W) break e;
                        rt[ke++] = k.length, W--, k.mode = 21;
                        break;
                    case 27:
                        if (k.wrap) {
                            for (; Re < 32;) {
                                if (0 === Fe) break e;
                                Fe--, pe |= Me[b++] << Re, Re += 8
                            }
                            if (ue.total_out += et -= W, k.total += et, et && (ue.adler = k.check = k.flags ? w(k.check, rt, et, ke - et) : d(k.check, rt, et, ke - et)), et = W, (k.flags ? pe : We(pe)) !== k.check) {
                                ue.msg = "incorrect data check", k.mode = N;
                                break
                            }
                            pe = 0, Re = 0
                        }
                        k.mode = 28;
                    case 28:
                        if (k.wrap && k.flags) {
                            for (; Re < 32;) {
                                if (0 === Fe) break e;
                                Fe--, pe += Me[b++] << Re, Re += 8
                            }
                            if (pe !== (4294967295 & k.total)) {
                                ue.msg = "incorrect length check", k.mode = N;
                                break
                            }
                            pe = 0, Re = 0
                        }
                        k.mode = 29;
                    case 29:
                        ze = 1;
                        break e;
                    case N:
                        ze = -3;
                        break e;
                    case 31:
                        return -4;
                    default:
                        return h
                }
                return ue.next_out = ke, ue.avail_out = W, ue.next_in = b, ue.avail_in = Fe, k.hold = pe, k.bits = Re, (k.wsize || et !== ue.avail_out && k.mode < N && (k.mode < 27 || 4 !== Ce)) && Qe(ue, ue.output, ue.next_out, et - ue.avail_out) ? (k.mode = 31, -4) : (et -= ue.avail_out, ue.total_in += ct -= ue.avail_in, ue.total_out += et, k.total += et, k.wrap && et && (ue.adler = k.check = k.flags ? w(k.check, rt, et, ue.next_out - et) : d(k.check, rt, et, ue.next_out - et)), ue.data_type = k.bits + (k.last ? 64 : 0) + (12 === k.mode ? 128 : 0) + (20 === k.mode || 15 === k.mode ? 256 : 0), (0 === ct && 0 === et || 4 === Ce) && ze === x && (ze = -5), ze)
            }, e.inflateEnd = function Ne(ue) {
                if (!ue || !ue.state) return h;
                var Ce = ue.state;
                return Ce.window && (Ce.window = null), ue.state = null, x
            }, e.inflateGetHeader = function ie(ue, Ce) {
                var k;
                return ue && ue.state && 2 & (k = ue.state).wrap ? (k.head = Ce, Ce.done = !1, x) : h
            }, e.inflateSetDictionary = function le(ue, Ce) {
                var Me, k = Ce.length;
                return ue && ue.state && (0 === (Me = ue.state).wrap || 11 === Me.mode) ? 11 === Me.mode && d(1, Ce, k, 0) !== Me.check ? -3 : Qe(ue, Ce, k, k) ? (Me.mode = 31, -4) : (Me.havedict = 1, x) : h
            }, e.inflateInfo = "pako inflate (from Nodeca project)"
        },
        99825: (ve, e, A) => {
            "use strict";
            var s = A(4058),
                T = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0],
                R = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78],
                v = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0],
                y = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
            ve.exports = function(o, E, h, c, r, a, m, _) {
                var J, re, Y, te, F, q, oe, Q, me, U = _.bits,
                    S = 0,
                    D = 0,
                    M = 0,
                    fe = 0,
                    Se = 0,
                    _e = 0,
                    O = 0,
                    P = 0,
                    C = 0,
                    ae = 0,
                    se = null,
                    V = 0,
                    H = new s.Buf16(16),
                    ce = new s.Buf16(16),
                    Ee = null,
                    Le = 0;
                for (S = 0; S <= 15; S++) H[S] = 0;
                for (D = 0; D < c; D++) H[E[h + D]]++;
                for (Se = U, fe = 15; fe >= 1 && 0 === H[fe]; fe--);
                if (Se > fe && (Se = fe), 0 === fe) return r[a++] = 20971520, r[a++] = 20971520, _.bits = 1, 0;
                for (M = 1; M < fe && 0 === H[M]; M++);
                for (Se < M && (Se = M), P = 1, S = 1; S <= 15; S++)
                    if (P <<= 1, (P -= H[S]) < 0) return -1;
                if (P > 0 && (0 === o || 1 !== fe)) return -1;
                for (ce[1] = 0, S = 1; S < 15; S++) ce[S + 1] = ce[S] + H[S];
                for (D = 0; D < c; D++) 0 !== E[h + D] && (m[ce[E[h + D]]++] = D);
                if (0 === o ? (se = Ee = m, q = 19) : 1 === o ? (se = T, V -= 257, Ee = R, Le -= 257, q = 256) : (se = v, Ee = y, q = -1), ae = 0, D = 0, S = M, F = a, _e = Se, O = 0, Y = -1, te = (C = 1 << Se) - 1, 1 === o && C > 852 || 2 === o && C > 592) return 1;
                for (;;) {
                    oe = S - O, m[D] < q ? (Q = 0, me = m[D]) : m[D] > q ? (Q = Ee[Le + m[D]], me = se[V + m[D]]) : (Q = 96, me = 0), J = 1 << S - O, M = re = 1 << _e;
                    do {
                        r[F + (ae >> O) + (re -= J)] = oe << 24 | Q << 16 | me | 0
                    } while (0 !== re);
                    for (J = 1 << S - 1; ae & J;) J >>= 1;
                    if (0 !== J ? (ae &= J - 1, ae += J) : ae = 0, D++, 0 == --H[S]) {
                        if (S === fe) break;
                        S = E[h + m[D]]
                    }
                    if (S > Se && (ae & te) !== Y) {
                        for (0 === O && (O = Se), F += M, P = 1 << (_e = S - O); _e + O < fe && !((P -= H[_e + O]) <= 0);) _e++, P <<= 1;
                        if (C += 1 << _e, 1 === o && C > 852 || 2 === o && C > 592) return 1;
                        r[Y = ae & te] = Se << 24 | _e << 16 | F - a | 0
                    }
                }
                return 0 !== ae && (r[F + ae] = S - O << 24 | 64 << 16 | 0), _.bits = Se, 0
            }
        },
        3952: ve => {
            "use strict";
            ve.exports = {
                2: "need dictionary",
                1: "stream end",
                0: "",
                "-1": "file error",
                "-2": "stream error",
                "-3": "data error",
                "-4": "insufficient memory",
                "-5": "buffer error",
                "-6": "incompatible version"
            }
        },
        70534: (ve, e, A) => {
            "use strict";
            var s = A(4058);

            function l(j) {
                for (var Ne = j.length; --Ne >= 0;) j[Ne] = 0
            }
            var o = 256,
                E = 286,
                h = 30,
                a = 15,
                m = 16,
                fe = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0],
                Se = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
                _e = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
                O = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
                C = new Array(576);
            l(C);
            var ae = new Array(60);
            l(ae);
            var J = new Array(512);
            l(J);
            var re = new Array(256);
            l(re);
            var Y = new Array(29);
            l(Y);
            var se, V, q, te = new Array(h);

            function F(j, Ne, ie, le, ue) {
                this.static_tree = j, this.extra_bits = Ne, this.extra_base = ie, this.elems = le, this.max_length = ue, this.has_stree = j && j.length
            }

            function H(j, Ne) {
                this.dyn_tree = j, this.max_code = 0, this.stat_desc = Ne
            }

            function ce(j) {
                return j < 256 ? J[j] : J[256 + (j >>> 7)]
            }

            function Ee(j, Ne) {
                j.pending_buf[j.pending++] = 255 & Ne, j.pending_buf[j.pending++] = Ne >>> 8 & 255
            }

            function Le(j, Ne, ie) {
                j.bi_valid > m - ie ? (j.bi_buf |= Ne << j.bi_valid & 65535, Ee(j, j.bi_buf), j.bi_buf = Ne >> m - j.bi_valid, j.bi_valid += ie - m) : (j.bi_buf |= Ne << j.bi_valid & 65535, j.bi_valid += ie)
            }

            function oe(j, Ne, ie) {
                Le(j, ie[2 * Ne], ie[2 * Ne + 1])
            }

            function Q(j, Ne) {
                var ie = 0;
                do {
                    ie |= 1 & j, j >>>= 1, ie <<= 1
                } while (--Ne > 0);
                return ie >>> 1
            }

            function Ze(j, Ne, ie) {
                var Ce, k, le = new Array(a + 1),
                    ue = 0;
                for (Ce = 1; Ce <= a; Ce++) le[Ce] = ue = ue + ie[Ce - 1] << 1;
                for (k = 0; k <= Ne; k++) {
                    var Me = j[2 * k + 1];
                    0 !== Me && (j[2 * k] = Q(le[Me]++, Me))
                }
            }

            function z(j) {
                var Ne;
                for (Ne = 0; Ne < E; Ne++) j.dyn_ltree[2 * Ne] = 0;
                for (Ne = 0; Ne < h; Ne++) j.dyn_dtree[2 * Ne] = 0;
                for (Ne = 0; Ne < 19; Ne++) j.bl_tree[2 * Ne] = 0;
                j.dyn_ltree[512] = 1, j.opt_len = j.static_len = 0, j.last_lit = j.matches = 0
            }

            function K(j) {
                j.bi_valid > 8 ? Ee(j, j.bi_buf) : j.bi_valid > 0 && (j.pending_buf[j.pending++] = j.bi_buf), j.bi_buf = 0, j.bi_valid = 0
            }

            function we(j, Ne, ie, le) {
                var ue = 2 * Ne,
                    Ce = 2 * ie;
                return j[ue] < j[Ce] || j[ue] === j[Ce] && le[Ne] <= le[ie]
            }

            function Be(j, Ne, ie) {
                for (var le = j.heap[ie], ue = ie << 1; ue <= j.heap_len && (ue < j.heap_len && we(Ne, j.heap[ue + 1], j.heap[ue], j.depth) && ue++, !we(Ne, le, j.heap[ue], j.depth));) j.heap[ie] = j.heap[ue], ie = ue, ue <<= 1;
                j.heap[ie] = le
            }

            function he(j, Ne, ie) {
                var le, ue, k, Me, Ce = 0;
                if (0 !== j.last_lit)
                    do {
                        le = j.pending_buf[j.d_buf + 2 * Ce] << 8 | j.pending_buf[j.d_buf + 2 * Ce + 1], ue = j.pending_buf[j.l_buf + Ce], Ce++, 0 === le ? oe(j, ue, Ne) : (oe(j, (k = re[ue]) + o + 1, Ne), 0 !== (Me = fe[k]) && Le(j, ue -= Y[k], Me), oe(j, k = ce(--le), ie), 0 !== (Me = Se[k]) && Le(j, le -= te[k], Me))
                    } while (Ce < j.last_lit);
                oe(j, 256, Ne)
            }

            function We(j, Ne) {
                var k, Me, b, ie = Ne.dyn_tree,
                    le = Ne.stat_desc.static_tree,
                    ue = Ne.stat_desc.has_stree,
                    Ce = Ne.stat_desc.elems,
                    rt = -1;
                for (j.heap_len = 0, j.heap_max = 573, k = 0; k < Ce; k++) 0 !== ie[2 * k] ? (j.heap[++j.heap_len] = rt = k, j.depth[k] = 0) : ie[2 * k + 1] = 0;
                for (; j.heap_len < 2;) ie[2 * (b = j.heap[++j.heap_len] = rt < 2 ? ++rt : 0)] = 1, j.depth[b] = 0, j.opt_len--, ue && (j.static_len -= le[2 * b + 1]);
                for (Ne.max_code = rt, k = j.heap_len >> 1; k >= 1; k--) Be(j, ie, k);
                b = Ce;
                do {
                    k = j.heap[1], j.heap[1] = j.heap[j.heap_len--], Be(j, ie, 1), Me = j.heap[1], j.heap[--j.heap_max] = k, j.heap[--j.heap_max] = Me, ie[2 * b] = ie[2 * k] + ie[2 * Me], j.depth[b] = (j.depth[k] >= j.depth[Me] ? j.depth[k] : j.depth[Me]) + 1, ie[2 * k + 1] = ie[2 * Me + 1] = b, j.heap[1] = b++, Be(j, ie, 1)
                } while (j.heap_len >= 2);
                j.heap[--j.heap_max] = j.heap[1],
                    function Ie(j, Ne) {
                        var b, ke, Fe, W, pe, Re, ie = Ne.dyn_tree,
                            le = Ne.max_code,
                            ue = Ne.stat_desc.static_tree,
                            Ce = Ne.stat_desc.has_stree,
                            k = Ne.stat_desc.extra_bits,
                            Me = Ne.stat_desc.extra_base,
                            rt = Ne.stat_desc.max_length,
                            ct = 0;
                        for (W = 0; W <= a; W++) j.bl_count[W] = 0;
                        for (ie[2 * j.heap[j.heap_max] + 1] = 0, b = j.heap_max + 1; b < 573; b++)(W = ie[2 * ie[2 * (ke = j.heap[b]) + 1] + 1] + 1) > rt && (W = rt, ct++), ie[2 * ke + 1] = W, !(ke > le) && (j.bl_count[W]++, pe = 0, ke >= Me && (pe = k[ke - Me]), j.opt_len += (Re = ie[2 * ke]) * (W + pe), Ce && (j.static_len += Re * (ue[2 * ke + 1] + pe)));
                        if (0 !== ct) {
                            do {
                                for (W = rt - 1; 0 === j.bl_count[W];) W--;
                                j.bl_count[W]--, j.bl_count[W + 1] += 2, j.bl_count[rt]--, ct -= 2
                            } while (ct > 0);
                            for (W = rt; 0 !== W; W--)
                                for (ke = j.bl_count[W]; 0 !== ke;) !((Fe = j.heap[--b]) > le) && (ie[2 * Fe + 1] !== W && (j.opt_len += (W - ie[2 * Fe + 1]) * ie[2 * Fe], ie[2 * Fe + 1] = W), ke--)
                        }
                    }(j, Ne), Ze(ie, rt, j.bl_count)
            }

            function gt(j, Ne, ie) {
                var le, Ce, ue = -1,
                    k = Ne[1],
                    Me = 0,
                    rt = 7,
                    b = 4;
                for (0 === k && (rt = 138, b = 3), Ne[2 * (ie + 1) + 1] = 65535, le = 0; le <= ie; le++) Ce = k, k = Ne[2 * (le + 1) + 1], !(++Me < rt && Ce === k) && (Me < b ? j.bl_tree[2 * Ce] += Me : 0 !== Ce ? (Ce !== ue && j.bl_tree[2 * Ce]++, j.bl_tree[32]++) : Me <= 10 ? j.bl_tree[34]++ : j.bl_tree[36]++, Me = 0, ue = Ce, 0 === k ? (rt = 138, b = 3) : Ce === k ? (rt = 6, b = 3) : (rt = 7, b = 4))
            }

            function xt(j, Ne, ie) {
                var le, Ce, ue = -1,
                    k = Ne[1],
                    Me = 0,
                    rt = 7,
                    b = 4;
                for (0 === k && (rt = 138, b = 3), le = 0; le <= ie; le++)
                    if (Ce = k, k = Ne[2 * (le + 1) + 1], !(++Me < rt && Ce === k)) {
                        if (Me < b)
                            do {
                                oe(j, Ce, j.bl_tree)
                            } while (0 != --Me);
                        else 0 !== Ce ? (Ce !== ue && (oe(j, Ce, j.bl_tree), Me--), oe(j, 16, j.bl_tree), Le(j, Me - 3, 2)) : Me <= 10 ? (oe(j, 17, j.bl_tree), Le(j, Me - 3, 3)) : (oe(j, 18, j.bl_tree), Le(j, Me - 11, 7));
                        Me = 0, ue = Ce, 0 === k ? (rt = 138, b = 3) : Ce === k ? (rt = 6, b = 3) : (rt = 7, b = 4)
                    }
            }
            l(te);
            var G = !1;

            function xe(j, Ne, ie, le) {
                Le(j, 0 + (le ? 1 : 0), 3),
                    function de(j, Ne, ie, le) {
                        K(j), le && (Ee(j, ie), Ee(j, ~ie)), s.arraySet(j.pending_buf, j.window, Ne, ie, j.pending), j.pending += ie
                    }(j, Ne, ie, !0)
            }
            e._tr_init = function ee(j) {
                G || (function N() {
                    var j, Ne, ie, le, ue, Ce = new Array(a + 1);
                    for (ie = 0, le = 0; le < 28; le++)
                        for (Y[le] = ie, j = 0; j < 1 << fe[le]; j++) re[ie++] = le;
                    for (re[ie - 1] = le, ue = 0, le = 0; le < 16; le++)
                        for (te[le] = ue, j = 0; j < 1 << Se[le]; j++) J[ue++] = le;
                    for (ue >>= 7; le < h; le++)
                        for (te[le] = ue << 7, j = 0; j < 1 << Se[le] - 7; j++) J[256 + ue++] = le;
                    for (Ne = 0; Ne <= a; Ne++) Ce[Ne] = 0;
                    for (j = 0; j <= 143;) C[2 * j + 1] = 8, j++, Ce[8]++;
                    for (; j <= 255;) C[2 * j + 1] = 9, j++, Ce[9]++;
                    for (; j <= 279;) C[2 * j + 1] = 7, j++, Ce[7]++;
                    for (; j <= 287;) C[2 * j + 1] = 8, j++, Ce[8]++;
                    for (Ze(C, 287, Ce), j = 0; j < h; j++) ae[2 * j + 1] = 5, ae[2 * j] = Q(j, 5);
                    se = new F(C, fe, 257, E, a), V = new F(ae, Se, 0, h, a), q = new F(new Array(0), _e, 0, 19, 7)
                }(), G = !0), j.l_desc = new H(j.dyn_ltree, se), j.d_desc = new H(j.dyn_dtree, V), j.bl_desc = new H(j.bl_tree, q), j.bi_buf = 0, j.bi_valid = 0, z(j)
            }, e._tr_stored_block = xe, e._tr_flush_block = function je(j, Ne, ie, le) {
                var ue, Ce, k = 0;
                j.level > 0 ? (2 === j.strm.data_type && (j.strm.data_type = function ge(j) {
                    var ie, Ne = 4093624447;
                    for (ie = 0; ie <= 31; ie++, Ne >>>= 1)
                        if (1 & Ne && 0 !== j.dyn_ltree[2 * ie]) return 0;
                    if (0 !== j.dyn_ltree[18] || 0 !== j.dyn_ltree[20] || 0 !== j.dyn_ltree[26]) return 1;
                    for (ie = 32; ie < o; ie++)
                        if (0 !== j.dyn_ltree[2 * ie]) return 1;
                    return 0
                }(j)), We(j, j.l_desc), We(j, j.d_desc), k = function yt(j) {
                    var Ne;
                    for (gt(j, j.dyn_ltree, j.l_desc.max_code), gt(j, j.dyn_dtree, j.d_desc.max_code), We(j, j.bl_desc), Ne = 18; Ne >= 3 && 0 === j.bl_tree[2 * O[Ne] + 1]; Ne--);
                    return j.opt_len += 3 * (Ne + 1) + 5 + 5 + 4, Ne
                }(j), (Ce = j.static_len + 3 + 7 >>> 3) <= (ue = j.opt_len + 3 + 7 >>> 3) && (ue = Ce)) : ue = Ce = ie + 5, ie + 4 <= ue && -1 !== Ne ? xe(j, Ne, ie, le) : 4 === j.strategy || Ce === ue ? (Le(j, 2 + (le ? 1 : 0), 3), he(j, C, ae)) : (Le(j, 4 + (le ? 1 : 0), 3), function At(j, Ne, ie, le) {
                    var ue;
                    for (Le(j, Ne - 257, 5), Le(j, ie - 1, 5), Le(j, le - 4, 4), ue = 0; ue < le; ue++) Le(j, j.bl_tree[2 * O[ue] + 1], 3);
                    xt(j, j.dyn_ltree, Ne - 1), xt(j, j.dyn_dtree, ie - 1)
                }(j, j.l_desc.max_code + 1, j.d_desc.max_code + 1, k + 1), he(j, j.dyn_ltree, j.dyn_dtree)), z(j), le && K(j)
            }, e._tr_tally = function Qe(j, Ne, ie) {
                return j.pending_buf[j.d_buf + 2 * j.last_lit] = Ne >>> 8 & 255, j.pending_buf[j.d_buf + 2 * j.last_lit + 1] = 255 & Ne, j.pending_buf[j.l_buf + j.last_lit] = 255 & ie, j.last_lit++, 0 === Ne ? j.dyn_ltree[2 * ie]++ : (j.matches++, Ne--, j.dyn_ltree[2 * (re[ie] + o + 1)]++, j.dyn_dtree[2 * ce(Ne)]++), j.last_lit === j.lit_bufsize - 1
            }, e._tr_align = function Ae(j) {
                Le(j, 2, 3), oe(j, 256, C),
                    function me(j) {
                        16 === j.bi_valid ? (Ee(j, j.bi_buf), j.bi_buf = 0, j.bi_valid = 0) : j.bi_valid >= 8 && (j.pending_buf[j.pending++] = 255 & j.bi_buf, j.bi_buf >>= 8, j.bi_valid -= 8)
                    }(j)
            }
        },
        47: ve => {
            "use strict";
            ve.exports = function e() {
                this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0
            }
        },
        12556: ve => {
            "use strict";
            var e = String.prototype.replace,
                A = /%20/g;
            ve.exports = {
                default: "RFC3986",
                formatters: {
                    RFC1738: function(d) {
                        return e.call(d, A, "+")
                    },
                    RFC3986: function(d) {
                        return String(d)
                    }
                },
                RFC1738: "RFC1738",
                RFC3986: "RFC3986"
            }
        },
        72956: (ve, e, A) => {
            "use strict";
            var s = A(76562),
                d = A(51625),
                w = A(12556);
            ve.exports = {
                formats: w,
                parse: d,
                stringify: s
            }
        },
        51625: (ve, e, A) => {
            "use strict";
            var s = A(83978),
                d = Object.prototype.hasOwnProperty,
                w = Array.isArray,
                B = {
                    allowDots: !1,
                    allowPrototypes: !1,
                    allowSparse: !1,
                    arrayLimit: 20,
                    charset: "utf-8",
                    charsetSentinel: !1,
                    comma: !1,
                    decoder: s.decode,
                    delimiter: "&",
                    depth: 5,
                    ignoreQueryPrefix: !1,
                    interpretNumericEntities: !1,
                    parameterLimit: 1e3,
                    parseArrays: !0,
                    plainObjects: !1,
                    strictNullHandling: !1
                },
                l = function(o, E) {
                    return o && "string" == typeof o && E.comma && o.indexOf(",") > -1 ? o.split(",") : o
                },
                y = function(E, h, c, r) {
                    if (E) {
                        var a = c.allowDots ? E.replace(/\.([^.[]+)/g, "[$1]") : E,
                            _ = /(\[[^[\]]*])/g,
                            U = c.depth > 0 && /(\[[^[\]]*])/.exec(a),
                            S = U ? a.slice(0, U.index) : a,
                            D = [];
                        if (S) {
                            if (!c.plainObjects && d.call(Object.prototype, S) && !c.allowPrototypes) return;
                            D.push(S)
                        }
                        for (var M = 0; c.depth > 0 && null !== (U = _.exec(a)) && M < c.depth;) {
                            if (M += 1, !c.plainObjects && d.call(Object.prototype, U[1].slice(1, -1)) && !c.allowPrototypes) return;
                            D.push(U[1])
                        }
                        return U && D.push("[" + a.slice(U.index) + "]"),
                            function(o, E, h, c) {
                                for (var r = c ? E : l(E, h), a = o.length - 1; a >= 0; --a) {
                                    var m, _ = o[a];
                                    if ("[]" === _ && h.parseArrays) m = [].concat(r);
                                    else {
                                        m = h.plainObjects ? Object.create(null) : {};
                                        var U = "[" === _.charAt(0) && "]" === _.charAt(_.length - 1) ? _.slice(1, -1) : _,
                                            S = parseInt(U, 10);
                                        h.parseArrays || "" !== U ? !isNaN(S) && _ !== U && String(S) === U && S >= 0 && h.parseArrays && S <= h.arrayLimit ? (m = [])[S] = r : "__proto__" !== U && (m[U] = r) : m = {
                                            0: r
                                        }
                                    }
                                    r = m
                                }
                                return r
                            }(D, h, c, r)
                    }
                };
            ve.exports = function(o, E) {
                var h = function(E) {
                    if (!E) return B;
                    if (null != E.decoder && "function" != typeof E.decoder) throw new TypeError("Decoder has to be a function.");
                    if (typeof E.charset < "u" && "utf-8" !== E.charset && "iso-8859-1" !== E.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
                    return {
                        allowDots: typeof E.allowDots > "u" ? B.allowDots : !!E.allowDots,
                        allowPrototypes: "boolean" == typeof E.allowPrototypes ? E.allowPrototypes : B.allowPrototypes,
                        allowSparse: "boolean" == typeof E.allowSparse ? E.allowSparse : B.allowSparse,
                        arrayLimit: "number" == typeof E.arrayLimit ? E.arrayLimit : B.arrayLimit,
                        charset: typeof E.charset > "u" ? B.charset : E.charset,
                        charsetSentinel: "boolean" == typeof E.charsetSentinel ? E.charsetSentinel : B.charsetSentinel,
                        comma: "boolean" == typeof E.comma ? E.comma : B.comma,
                        decoder: "function" == typeof E.decoder ? E.decoder : B.decoder,
                        delimiter: "string" == typeof E.delimiter || s.isRegExp(E.delimiter) ? E.delimiter : B.delimiter,
                        depth: "number" == typeof E.depth || !1 === E.depth ? +E.depth : B.depth,
                        ignoreQueryPrefix: !0 === E.ignoreQueryPrefix,
                        interpretNumericEntities: "boolean" == typeof E.interpretNumericEntities ? E.interpretNumericEntities : B.interpretNumericEntities,
                        parameterLimit: "number" == typeof E.parameterLimit ? E.parameterLimit : B.parameterLimit,
                        parseArrays: !1 !== E.parseArrays,
                        plainObjects: "boolean" == typeof E.plainObjects ? E.plainObjects : B.plainObjects,
                        strictNullHandling: "boolean" == typeof E.strictNullHandling ? E.strictNullHandling : B.strictNullHandling
                    }
                }(E);
                if ("" === o || null === o || typeof o > "u") return h.plainObjects ? Object.create(null) : {};
                for (var c = "string" == typeof o ? function(E, h) {
                        var U, c = {
                                __proto__: null
                            },
                            m = (h.ignoreQueryPrefix ? E.replace(/^\?/, "") : E).split(h.delimiter, h.parameterLimit === 1 / 0 ? void 0 : h.parameterLimit),
                            _ = -1,
                            S = h.charset;
                        if (h.charsetSentinel)
                            for (U = 0; U < m.length; ++U) 0 === m[U].indexOf("utf8=") && ("utf8=%E2%9C%93" === m[U] ? S = "utf-8" : "utf8=%26%2310003%3B" === m[U] && (S = "iso-8859-1"), _ = U, U = m.length);
                        for (U = 0; U < m.length; ++U)
                            if (U !== _) {
                                var Se, _e, D = m[U],
                                    M = D.indexOf("]="),
                                    fe = -1 === M ? D.indexOf("=") : M + 1; - 1 === fe ? (Se = h.decoder(D, B.decoder, S, "key"), _e = h.strictNullHandling ? null : "") : (Se = h.decoder(D.slice(0, fe), B.decoder, S, "key"), _e = s.maybeMap(l(D.slice(fe + 1), h), function(O) {
                                    return h.decoder(O, B.decoder, S, "value")
                                })), _e && h.interpretNumericEntities && "iso-8859-1" === S && (_e = _e.replace(/&#(\d+);/g, function(E, h) {
                                    return String.fromCharCode(parseInt(h, 10))
                                })), D.indexOf("[]=") > -1 && (_e = w(_e) ? [_e] : _e), c[Se] = d.call(c, Se) ? s.combine(c[Se], _e) : _e
                            }
                        return c
                    }(o, h) : o, r = h.plainObjects ? Object.create(null) : {}, a = Object.keys(c), m = 0; m < a.length; ++m) {
                    var _ = a[m],
                        U = y(_, c[_], h, "string" == typeof o);
                    r = s.merge(r, U, h)
                }
                return !0 === h.allowSparse ? r : s.compact(r)
            }
        },
        76562: (ve, e, A) => {
            "use strict";
            var s = A(57379),
                d = A(83978),
                w = A(12556),
                B = Object.prototype.hasOwnProperty,
                u = {
                    brackets: function(r) {
                        return r + "[]"
                    },
                    comma: "comma",
                    indices: function(r, a) {
                        return r + "[" + a + "]"
                    },
                    repeat: function(r) {
                        return r
                    }
                },
                l = Array.isArray,
                p = Array.prototype.push,
                T = function(c, r) {
                    p.apply(c, l(r) ? r : [r])
                },
                R = Date.prototype.toISOString,
                v = w.default,
                y = {
                    addQueryPrefix: !1,
                    allowDots: !1,
                    charset: "utf-8",
                    charsetSentinel: !1,
                    delimiter: "&",
                    encode: !0,
                    encoder: d.encode,
                    encodeValuesOnly: !1,
                    format: v,
                    formatter: w.formatters[v],
                    indices: !1,
                    serializeDate: function(r) {
                        return R.call(r)
                    },
                    skipNulls: !1,
                    strictNullHandling: !1
                },
                o = {},
                E = function c(r, a, m, _, U, S, D, M, fe, Se, _e, O, P, C, ae, J) {
                    for (var re = r, Y = J, te = 0, F = !1; void 0 !== (Y = Y.get(o)) && !F;) {
                        var se = Y.get(r);
                        if (te += 1, typeof se < "u") {
                            if (se === te) throw new RangeError("Cyclic object value");
                            F = !0
                        }
                        typeof Y.get(o) > "u" && (te = 0)
                    }
                    if ("function" == typeof M ? re = M(a, re) : re instanceof Date ? re = _e(re) : "comma" === m && l(re) && (re = d.maybeMap(re, function(Ze) {
                            return Ze instanceof Date ? _e(Ze) : Ze
                        })), null === re) {
                        if (U) return D && !C ? D(a, y.encoder, ae, "key", O) : a;
                        re = ""
                    }
                    if (function(r) {
                            return "string" == typeof r || "number" == typeof r || "boolean" == typeof r || "symbol" == typeof r || "bigint" == typeof r
                        }(re) || d.isBuffer(re)) return D ? [P(C ? a : D(a, y.encoder, ae, "key", O)) + "=" + P(D(re, y.encoder, ae, "value", O))] : [P(a) + "=" + P(String(re))];
                    var H, q = [];
                    if (typeof re > "u") return q;
                    if ("comma" === m && l(re)) C && D && (re = d.maybeMap(re, D)), H = [{
                        value: re.length > 0 ? re.join(",") || null : void 0
                    }];
                    else if (l(M)) H = M;
                    else {
                        var ce = Object.keys(re);
                        H = fe ? ce.sort(fe) : ce
                    }
                    for (var Ee = _ && l(re) && 1 === re.length ? a + "[]" : a, Le = 0; Le < H.length; ++Le) {
                        var oe = H[Le],
                            Q = "object" == typeof oe && typeof oe.value < "u" ? oe.value : re[oe];
                        if (!S || null !== Q) {
                            var me = l(re) ? "function" == typeof m ? m(Ee, oe) : Ee : Ee + (Se ? "." + oe : "[" + oe + "]");
                            J.set(r, te);
                            var Ie = s();
                            Ie.set(o, J), T(q, c(Q, me, m, _, U, S, "comma" === m && C && l(re) ? null : D, M, fe, Se, _e, O, P, C, ae, Ie))
                        }
                    }
                    return q
                };
            ve.exports = function(c, r) {
                var _, a = c,
                    m = function(r) {
                        if (!r) return y;
                        if (null !== r.encoder && typeof r.encoder < "u" && "function" != typeof r.encoder) throw new TypeError("Encoder has to be a function.");
                        var a = r.charset || y.charset;
                        if (typeof r.charset < "u" && "utf-8" !== r.charset && "iso-8859-1" !== r.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
                        var m = w.default;
                        if (typeof r.format < "u") {
                            if (!B.call(w.formatters, r.format)) throw new TypeError("Unknown format option provided.");
                            m = r.format
                        }
                        var _ = w.formatters[m],
                            U = y.filter;
                        return ("function" == typeof r.filter || l(r.filter)) && (U = r.filter), {
                            addQueryPrefix: "boolean" == typeof r.addQueryPrefix ? r.addQueryPrefix : y.addQueryPrefix,
                            allowDots: typeof r.allowDots > "u" ? y.allowDots : !!r.allowDots,
                            charset: a,
                            charsetSentinel: "boolean" == typeof r.charsetSentinel ? r.charsetSentinel : y.charsetSentinel,
                            delimiter: typeof r.delimiter > "u" ? y.delimiter : r.delimiter,
                            encode: "boolean" == typeof r.encode ? r.encode : y.encode,
                            encoder: "function" == typeof r.encoder ? r.encoder : y.encoder,
                            encodeValuesOnly: "boolean" == typeof r.encodeValuesOnly ? r.encodeValuesOnly : y.encodeValuesOnly,
                            filter: U,
                            format: m,
                            formatter: _,
                            serializeDate: "function" == typeof r.serializeDate ? r.serializeDate : y.serializeDate,
                            skipNulls: "boolean" == typeof r.skipNulls ? r.skipNulls : y.skipNulls,
                            sort: "function" == typeof r.sort ? r.sort : null,
                            strictNullHandling: "boolean" == typeof r.strictNullHandling ? r.strictNullHandling : y.strictNullHandling
                        }
                    }(r);
                "function" == typeof m.filter ? a = (0, m.filter)("", a) : l(m.filter) && (_ = m.filter);
                var S = [];
                if ("object" != typeof a || null === a) return "";
                var M = u[r && r.arrayFormat in u ? r.arrayFormat : r && "indices" in r ? r.indices ? "indices" : "repeat" : "indices"];
                if (r && "commaRoundTrip" in r && "boolean" != typeof r.commaRoundTrip) throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
                var fe = "comma" === M && r && r.commaRoundTrip;
                _ || (_ = Object.keys(a)), m.sort && _.sort(m.sort);
                for (var Se = s(), _e = 0; _e < _.length; ++_e) {
                    var O = _[_e];
                    m.skipNulls && null === a[O] || T(S, E(a[O], O, M, fe, m.strictNullHandling, m.skipNulls, m.encode ? m.encoder : null, m.filter, m.sort, m.allowDots, m.serializeDate, m.format, m.formatter, m.encodeValuesOnly, m.charset, Se))
                }
                var P = S.join(m.delimiter),
                    C = !0 === m.addQueryPrefix ? "?" : "";
                return m.charsetSentinel && (C += "iso-8859-1" === m.charset ? "utf8=%26%2310003%3B&" : "utf8=%E2%9C%93&"), P.length > 0 ? C + P : ""
            }
        },
        83978: (ve, e, A) => {
            "use strict";
            var s = A(12556),
                d = Object.prototype.hasOwnProperty,
                w = Array.isArray,
                B = function() {
                    for (var c = [], r = 0; r < 256; ++r) c.push("%" + ((r < 16 ? "0" : "") + r.toString(16)).toUpperCase());
                    return c
                }(),
                l = function(r, a) {
                    for (var m = a && a.plainObjects ? Object.create(null) : {}, _ = 0; _ < r.length; ++_) typeof r[_] < "u" && (m[_] = r[_]);
                    return m
                };
            ve.exports = {
                arrayToObject: l,
                assign: function(r, a) {
                    return Object.keys(a).reduce(function(m, _) {
                        return m[_] = a[_], m
                    }, r)
                },
                combine: function(r, a) {
                    return [].concat(r, a)
                },
                compact: function(r) {
                    for (var a = [{
                            obj: {
                                o: r
                            },
                            prop: "o"
                        }], m = [], _ = 0; _ < a.length; ++_)
                        for (var U = a[_], S = U.obj[U.prop], D = Object.keys(S), M = 0; M < D.length; ++M) {
                            var fe = D[M],
                                Se = S[fe];
                            "object" == typeof Se && null !== Se && -1 === m.indexOf(Se) && (a.push({
                                obj: S,
                                prop: fe
                            }), m.push(Se))
                        }
                    return function(r) {
                        for (; r.length > 1;) {
                            var a = r.pop(),
                                m = a.obj[a.prop];
                            if (w(m)) {
                                for (var _ = [], U = 0; U < m.length; ++U) typeof m[U] < "u" && _.push(m[U]);
                                a.obj[a.prop] = _
                            }
                        }
                    }(a), r
                },
                decode: function(c, r, a) {
                    var m = c.replace(/\+/g, " ");
                    if ("iso-8859-1" === a) return m.replace(/%[0-9a-f]{2}/gi, unescape);
                    try {
                        return decodeURIComponent(m)
                    } catch {
                        return m
                    }
                },
                encode: function(r, a, m, _, U) {
                    if (0 === r.length) return r;
                    var S = r;
                    if ("symbol" == typeof r ? S = Symbol.prototype.toString.call(r) : "string" != typeof r && (S = String(r)), "iso-8859-1" === m) return escape(S).replace(/%u[0-9a-f]{4}/gi, function(Se) {
                        return "%26%23" + parseInt(Se.slice(2), 16) + "%3B"
                    });
                    for (var D = "", M = 0; M < S.length; ++M) {
                        var fe = S.charCodeAt(M);
                        45 === fe || 46 === fe || 95 === fe || 126 === fe || fe >= 48 && fe <= 57 || fe >= 65 && fe <= 90 || fe >= 97 && fe <= 122 || U === s.RFC1738 && (40 === fe || 41 === fe) ? D += S.charAt(M) : fe < 128 ? D += B[fe] : fe < 2048 ? D += B[192 | fe >> 6] + B[128 | 63 & fe] : fe < 55296 || fe >= 57344 ? D += B[224 | fe >> 12] + B[128 | fe >> 6 & 63] + B[128 | 63 & fe] : (fe = 65536 + ((1023 & fe) << 10 | 1023 & S.charCodeAt(M += 1)), D += B[240 | fe >> 18] + B[128 | fe >> 12 & 63] + B[128 | fe >> 6 & 63] + B[128 | 63 & fe])
                    }
                    return D
                },
                isBuffer: function(r) {
                    return !(!r || "object" != typeof r || !(r.constructor && r.constructor.isBuffer && r.constructor.isBuffer(r)))
                },
                isRegExp: function(r) {
                    return "[object RegExp]" === Object.prototype.toString.call(r)
                },
                maybeMap: function(r, a) {
                    if (w(r)) {
                        for (var m = [], _ = 0; _ < r.length; _ += 1) m.push(a(r[_]));
                        return m
                    }
                    return a(r)
                },
                merge: function c(r, a, m) {
                    if (!a) return r;
                    if ("object" != typeof a) {
                        if (w(r)) r.push(a);
                        else {
                            if (!r || "object" != typeof r) return [r, a];
                            (m && (m.plainObjects || m.allowPrototypes) || !d.call(Object.prototype, a)) && (r[a] = !0)
                        }
                        return r
                    }
                    if (!r || "object" != typeof r) return [r].concat(a);
                    var _ = r;
                    return w(r) && !w(a) && (_ = l(r, m)), w(r) && w(a) ? (a.forEach(function(U, S) {
                        if (d.call(r, S)) {
                            var D = r[S];
                            D && "object" == typeof D && U && "object" == typeof U ? r[S] = c(D, U, m) : r.push(U)
                        } else r[S] = U
                    }), r) : Object.keys(a).reduce(function(U, S) {
                        var D = a[S];
                        return U[S] = d.call(U, S) ? c(U[S], D, m) : D, U
                    }, _)
                }
            }
        },
        57379: (ve, e, A) => {
            "use strict";
            var s = A(90491),
                d = A(41098),
                w = A(61826),
                B = s("%TypeError%"),
                u = s("%WeakMap%", !0),
                l = s("%Map%", !0),
                p = d("WeakMap.prototype.get", !0),
                T = d("WeakMap.prototype.set", !0),
                R = d("WeakMap.prototype.has", !0),
                v = d("Map.prototype.get", !0),
                y = d("Map.prototype.set", !0),
                x = d("Map.prototype.has", !0),
                o = function(r, a) {
                    for (var _, m = r; null !== (_ = m.next); m = _)
                        if (_.key === a) return m.next = _.next, _.next = r.next, r.next = _, _
                };
            ve.exports = function() {
                var a, m, _, U = {
                    assert: function(S) {
                        if (!U.has(S)) throw new B("Side channel does not contain " + w(S))
                    },
                    get: function(S) {
                        if (u && S && ("object" == typeof S || "function" == typeof S)) {
                            if (a) return p(a, S)
                        } else if (l) {
                            if (m) return v(m, S)
                        } else if (_) return function(r, a) {
                            var m = o(r, a);
                            return m && m.value
                        }(_, S)
                    },
                    has: function(S) {
                        if (u && S && ("object" == typeof S || "function" == typeof S)) {
                            if (a) return R(a, S)
                        } else if (l) {
                            if (m) return x(m, S)
                        } else if (_) return function(r, a) {
                            return !!o(r, a)
                        }(_, S);
                        return !1
                    },
                    set: function(S, D) {
                        u && S && ("object" == typeof S || "function" == typeof S) ? (a || (a = new u), T(a, S, D)) : l ? (m || (m = new l), y(m, S, D)) : (_ || (_ = {
                            key: {},
                            next: null
                        }), function(r, a, m) {
                            var _ = o(r, a);
                            _ ? _.value = m : r.next = {
                                key: a,
                                next: r.next,
                                value: m
                            }
                        }(_, S, D))
                    }
                };
                return U
            }
        },
        4444: (ve, e, A) => {
            var s = A(16365),
                d = A(48551),
                w = A(20498),
                B = A(44208),
                u = A(52445),
                l = e;
            l.request = function(p, T) {
                p = "string" == typeof p ? u.parse(p) : w(p);
                var R = -1 === global.location.protocol.search(/^https?:$/) ? "http:" : "",
                    v = p.protocol || R,
                    y = p.hostname || p.host,
                    x = p.port,
                    o = p.path || "/";
                y && -1 !== y.indexOf(":") && (y = "[" + y + "]"), p.url = (y ? v + "//" + y : "") + (x ? ":" + x : "") + o, p.method = (p.method || "GET").toUpperCase(), p.headers = p.headers || {};
                var E = new s(p);
                return T && E.on("response", T), E
            }, l.get = function(T, R) {
                var v = l.request(T, R);
                return v.end(), v
            }, l.ClientRequest = s, l.IncomingMessage = d.IncomingMessage, l.Agent = function() {}, l.Agent.defaultMaxSockets = 4, l.globalAgent = new l.Agent, l.STATUS_CODES = B, l.METHODS = ["CHECKOUT", "CONNECT", "COPY", "DELETE", "GET", "HEAD", "LOCK", "M-SEARCH", "MERGE", "MKACTIVITY", "MKCOL", "MOVE", "NOTIFY", "OPTIONS", "PATCH", "POST", "PROPFIND", "PROPPATCH", "PURGE", "PUT", "REPORT", "SEARCH", "SUBSCRIBE", "TRACE", "UNLOCK", "UNSUBSCRIBE"]
        },
        71205: (ve, e) => {
            var A;

            function s() {
                if (void 0 !== A) return A;
                if (global.XMLHttpRequest) {
                    A = new global.XMLHttpRequest;
                    try {
                        A.open("GET", global.XDomainRequest ? "/" : "https://example.com")
                    } catch {
                        A = null
                    }
                } else A = null;
                return A
            }

            function d(B) {
                var u = s();
                if (!u) return !1;
                try {
                    return u.responseType = B, u.responseType === B
                } catch {}
                return !1
            }

            function w(B) {
                return "function" == typeof B
            }
            e.fetch = w(global.fetch) && w(global.ReadableStream), e.writableStream = w(global.WritableStream), e.abortController = w(global.AbortController), e.arraybuffer = e.fetch || d("arraybuffer"), e.msstream = !e.fetch && d("ms-stream"), e.mozchunkedarraybuffer = !e.fetch && d("moz-chunked-arraybuffer"), e.overrideMimeType = e.fetch || !!s() && w(s().overrideMimeType), A = null
        },
        16365: (ve, e, A) => {
            var s = A(71205),
                d = A(66698),
                w = A(48551),
                B = A(62278),
                u = w.IncomingMessage,
                l = w.readyStates,
                T = ve.exports = function(y) {
                    var x = this;
                    B.Writable.call(x), x._opts = y, x._body = [], x._headers = {}, y.auth && x.setHeader("Authorization", "Basic " + Buffer.from(y.auth).toString("base64")), Object.keys(y.headers).forEach(function(h) {
                        x.setHeader(h, y.headers[h])
                    });
                    var o, E = !0;
                    if ("disable-fetch" === y.mode || "requestTimeout" in y && !s.abortController) E = !1, o = !0;
                    else if ("prefer-streaming" === y.mode) o = !1;
                    else if ("allow-wrong-content-type" === y.mode) o = !s.overrideMimeType;
                    else {
                        if (y.mode && "default" !== y.mode && "prefer-fast" !== y.mode) throw new Error("Invalid value for opts.mode");
                        o = !0
                    }
                    x._mode = function p(y, x) {
                        return s.fetch && x ? "fetch" : s.mozchunkedarraybuffer ? "moz-chunked-arraybuffer" : s.msstream ? "ms-stream" : s.arraybuffer && y ? "arraybuffer" : "text"
                    }(o, E), x._fetchTimer = null, x._socketTimeout = null, x._socketTimer = null, x.on("finish", function() {
                        x._onFinish()
                    })
                };
            d(T, B.Writable), T.prototype.setHeader = function(y, x) {
                var E = y.toLowerCase(); - 1 === v.indexOf(E) && (this._headers[E] = {
                    name: y,
                    value: x
                })
            }, T.prototype.getHeader = function(y) {
                var x = this._headers[y.toLowerCase()];
                return x ? x.value : null
            }, T.prototype.removeHeader = function(y) {
                delete this._headers[y.toLowerCase()]
            }, T.prototype._onFinish = function() {
                var y = this;
                if (!y._destroyed) {
                    var x = y._opts;
                    "timeout" in x && 0 !== x.timeout && y.setTimeout(x.timeout);
                    var o = y._headers,
                        E = null;
                    "GET" !== x.method && "HEAD" !== x.method && (E = new Blob(y._body, {
                        type: (o["content-type"] || {}).value || ""
                    }));
                    var h = [];
                    if (Object.keys(o).forEach(function(m) {
                            var _ = o[m].name,
                                U = o[m].value;
                            Array.isArray(U) ? U.forEach(function(S) {
                                h.push([_, S])
                            }) : h.push([_, U])
                        }), "fetch" === y._mode) {
                        var c = null;
                        if (s.abortController) {
                            var r = new AbortController;
                            c = r.signal, y._fetchAbortController = r, "requestTimeout" in x && 0 !== x.requestTimeout && (y._fetchTimer = global.setTimeout(function() {
                                y.emit("requestTimeout"), y._fetchAbortController && y._fetchAbortController.abort()
                            }, x.requestTimeout))
                        }
                        global.fetch(y._opts.url, {
                            method: y._opts.method,
                            headers: h,
                            body: E || void 0,
                            mode: "cors",
                            credentials: x.withCredentials ? "include" : "same-origin",
                            signal: c
                        }).then(function(m) {
                            y._fetchResponse = m, y._resetTimers(!1), y._connect()
                        }, function(m) {
                            y._resetTimers(!0), y._destroyed || y.emit("error", m)
                        })
                    } else {
                        var a = y._xhr = new global.XMLHttpRequest;
                        try {
                            a.open(y._opts.method, y._opts.url, !0)
                        } catch (m) {
                            return void process.nextTick(function() {
                                y.emit("error", m)
                            })
                        }
                        "responseType" in a && (a.responseType = y._mode), "withCredentials" in a && (a.withCredentials = !!x.withCredentials), "text" === y._mode && "overrideMimeType" in a && a.overrideMimeType("text/plain; charset=x-user-defined"), "requestTimeout" in x && (a.timeout = x.requestTimeout, a.ontimeout = function() {
                            y.emit("requestTimeout")
                        }), h.forEach(function(m) {
                            a.setRequestHeader(m[0], m[1])
                        }), y._response = null, a.onreadystatechange = function() {
                            switch (a.readyState) {
                                case l.LOADING:
                                case l.DONE:
                                    y._onXHRProgress()
                            }
                        }, "moz-chunked-arraybuffer" === y._mode && (a.onprogress = function() {
                            y._onXHRProgress()
                        }), a.onerror = function() {
                            y._destroyed || (y._resetTimers(!0), y.emit("error", new Error("XHR error")))
                        };
                        try {
                            a.send(E)
                        } catch (m) {
                            return void process.nextTick(function() {
                                y.emit("error", m)
                            })
                        }
                    }
                }
            }, T.prototype._onXHRProgress = function() {
                var y = this;
                y._resetTimers(!1),
                    function R(y) {
                        try {
                            var x = y.status;
                            return null !== x && 0 !== x
                        } catch {
                            return !1
                        }
                    }(y._xhr) && !y._destroyed && (y._response || y._connect(), y._response._onXHRProgress(y._resetTimers.bind(y)))
            }, T.prototype._connect = function() {
                var y = this;
                y._destroyed || (y._response = new u(y._xhr, y._fetchResponse, y._mode, y._resetTimers.bind(y)), y._response.on("error", function(x) {
                    y.emit("error", x)
                }), y.emit("response", y._response))
            }, T.prototype._write = function(y, x, o) {
                this._body.push(y), o()
            }, T.prototype._resetTimers = function(y) {
                var x = this;
                global.clearTimeout(x._socketTimer), x._socketTimer = null, y ? (global.clearTimeout(x._fetchTimer), x._fetchTimer = null) : x._socketTimeout && (x._socketTimer = global.setTimeout(function() {
                    x.emit("timeout")
                }, x._socketTimeout))
            }, T.prototype.abort = T.prototype.destroy = function(y) {
                var x = this;
                x._destroyed = !0, x._resetTimers(!0), x._response && (x._response._destroyed = !0), x._xhr ? x._xhr.abort() : x._fetchAbortController && x._fetchAbortController.abort(), y && x.emit("error", y)
            }, T.prototype.end = function(y, x, o) {
                "function" == typeof y && (o = y, y = void 0), B.Writable.prototype.end.call(this, y, x, o)
            }, T.prototype.setTimeout = function(y, x) {
                var o = this;
                x && o.once("timeout", x), o._socketTimeout = y, o._resetTimers(!1)
            }, T.prototype.flushHeaders = function() {}, T.prototype.setNoDelay = function() {}, T.prototype.setSocketKeepAlive = function() {};
            var v = ["accept-charset", "accept-encoding", "access-control-request-headers", "access-control-request-method", "connection", "content-length", "cookie", "cookie2", "date", "dnt", "expect", "host", "keep-alive", "origin", "referer", "te", "trailer", "transfer-encoding", "upgrade", "via"]
        },
        48551: (ve, e, A) => {
            var s = A(71205),
                d = A(66698),
                w = A(62278),
                B = e.readyStates = {
                    UNSENT: 0,
                    OPENED: 1,
                    HEADERS_RECEIVED: 2,
                    LOADING: 3,
                    DONE: 4
                },
                u = e.IncomingMessage = function(l, p, T, R) {
                    var v = this;
                    if (w.Readable.call(v), v._mode = T, v.headers = {}, v.rawHeaders = [], v.trailers = {}, v.rawTrailers = [], v.on("end", function() {
                            process.nextTick(function() {
                                v.emit("close")
                            })
                        }), "fetch" === T) {
                        let r = function() {
                            x.read().then(function(a) {
                                if (!v._destroyed) {
                                    if (R(a.done), a.done) return void v.push(null);
                                    v.push(Buffer.from(a.value)), r()
                                }
                            }).catch(function(a) {
                                R(!0), v._destroyed || v.emit("error", a)
                            })
                        };
                        if (v._fetchResponse = p, v.url = p.url, v.statusCode = p.status, v.statusMessage = p.statusText, p.headers.forEach(function(a, m) {
                                v.headers[m.toLowerCase()] = a, v.rawHeaders.push(m, a)
                            }), s.writableStream) {
                            var y = new WritableStream({
                                write: function(a) {
                                    return R(!1), new Promise(function(m, _) {
                                        v._destroyed ? _() : v.push(Buffer.from(a)) ? m() : v._resumeFetch = m
                                    })
                                },
                                close: function() {
                                    R(!0), v._destroyed || v.push(null)
                                },
                                abort: function(a) {
                                    R(!0), v._destroyed || v.emit("error", a)
                                }
                            });
                            try {
                                return void p.body.pipeTo(y).catch(function(a) {
                                    R(!0), v._destroyed || v.emit("error", a)
                                })
                            } catch {}
                        }
                        var x = p.body.getReader();
                        r()
                    } else if (v._xhr = l, v._pos = 0, v.url = l.responseURL, v.statusCode = l.status, v.statusMessage = l.statusText, l.getAllResponseHeaders().split(/\r?\n/).forEach(function(r) {
                            var a = r.match(/^([^:]+):\s*(.*)/);
                            if (a) {
                                var m = a[1].toLowerCase();
                                "set-cookie" === m ? (void 0 === v.headers[m] && (v.headers[m] = []), v.headers[m].push(a[2])) : void 0 !== v.headers[m] ? v.headers[m] += ", " + a[2] : v.headers[m] = a[2], v.rawHeaders.push(a[1], a[2])
                            }
                        }), v._charset = "x-user-defined", !s.overrideMimeType) {
                        var E = v.rawHeaders["mime-type"];
                        if (E) {
                            var h = E.match(/;\s*charset=([^;])(;|$)/);
                            h && (v._charset = h[1].toLowerCase())
                        }
                        v._charset || (v._charset = "utf-8")
                    }
                };
            d(u, w.Readable), u.prototype._read = function() {
                var p = this._resumeFetch;
                p && (this._resumeFetch = null, p())
            }, u.prototype._onXHRProgress = function(l) {
                var p = this,
                    T = p._xhr,
                    R = null;
                switch (p._mode) {
                    case "text":
                        if ((R = T.responseText).length > p._pos) {
                            var v = R.substr(p._pos);
                            if ("x-user-defined" === p._charset) {
                                for (var y = Buffer.alloc(v.length), x = 0; x < v.length; x++) y[x] = 255 & v.charCodeAt(x);
                                p.push(y)
                            } else p.push(v, p._charset);
                            p._pos = R.length
                        }
                        break;
                    case "arraybuffer":
                        if (T.readyState !== B.DONE || !T.response) break;
                        R = T.response, p.push(Buffer.from(new Uint8Array(R)));
                        break;
                    case "moz-chunked-arraybuffer":
                        if (R = T.response, T.readyState !== B.LOADING || !R) break;
                        p.push(Buffer.from(new Uint8Array(R)));
                        break;
                    case "ms-stream":
                        if (R = T.response, T.readyState !== B.LOADING) break;
                        var o = new global.MSStreamReader;
                        o.onprogress = function() {
                            o.result.byteLength > p._pos && (p.push(Buffer.from(new Uint8Array(o.result.slice(p._pos)))), p._pos = o.result.byteLength)
                        }, o.onload = function() {
                            l(!0), p.push(null)
                        }, o.readAsArrayBuffer(R)
                }
                p._xhr.readyState === B.DONE && "ms-stream" !== p._mode && (l(!0), p.push(null))
            }
        },
        29859: ve => {
            "use strict";
            var A = {};

            function s(l, p, T) {
                T || (T = Error);
                var v = function(y) {
                    function x(o, E, h) {
                        return y.call(this, function R(y, x, o) {
                            return "string" == typeof p ? p : p(y, x, o)
                        }(o, E, h)) || this
                    }
                    return function e(l, p) {
                        l.prototype = Object.create(p.prototype), l.prototype.constructor = l, l.__proto__ = p
                    }(x, y), x
                }(T);
                v.prototype.name = T.name, v.prototype.code = l, A[l] = v
            }

            function d(l, p) {
                if (Array.isArray(l)) {
                    var T = l.length;
                    return l = l.map(function(R) {
                        return String(R)
                    }), T > 2 ? "one of ".concat(p, " ").concat(l.slice(0, T - 1).join(", "), ", or ") + l[T - 1] : 2 === T ? "one of ".concat(p, " ").concat(l[0], " or ").concat(l[1]) : "of ".concat(p, " ").concat(l[0])
                }
                return "of ".concat(p, " ").concat(String(l))
            }
            s("ERR_INVALID_OPT_VALUE", function(l, p) {
                return 'The value "' + p + '" is invalid for option "' + l + '"'
            }, TypeError), s("ERR_INVALID_ARG_TYPE", function(l, p, T) {
                var R, v;
                if ("string" == typeof p && function w(l, p, T) {
                        return l.substr(!T || T < 0 ? 0 : +T, p.length) === p
                    }(p, "not ") ? (R = "must not be", p = p.replace(/^not /, "")) : R = "must be", function B(l, p, T) {
                        return (void 0 === T || T > l.length) && (T = l.length), l.substring(T - p.length, T) === p
                    }(l, " argument")) v = "The ".concat(l, " ").concat(R, " ").concat(d(p, "type"));
                else {
                    var y = function u(l, p, T) {
                        return "number" != typeof T && (T = 0), !(T + p.length > l.length) && -1 !== l.indexOf(p, T)
                    }(l, ".") ? "property" : "argument";
                    v = 'The "'.concat(l, '" ').concat(y, " ").concat(R, " ").concat(d(p, "type"))
                }
                return v + ". Received type ".concat(typeof T)
            }, TypeError), s("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"), s("ERR_METHOD_NOT_IMPLEMENTED", function(l) {
                return "The " + l + " method is not implemented"
            }), s("ERR_STREAM_PREMATURE_CLOSE", "Premature close"), s("ERR_STREAM_DESTROYED", function(l) {
                return "Cannot call " + l + " after a stream was destroyed"
            }), s("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"), s("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"), s("ERR_STREAM_WRITE_AFTER_END", "write after end"), s("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError), s("ERR_UNKNOWN_ENCODING", function(l) {
                return "Unknown encoding: " + l
            }, TypeError), s("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event"), ve.exports.q = A
        },
        11388: (ve, e, A) => {
            "use strict";
            var s = Object.keys || function(v) {
                var y = [];
                for (var x in v) y.push(x);
                return y
            };
            ve.exports = p;
            var d = A(35018),
                w = A(22672);
            A(66698)(p, d);
            for (var B = s(w.prototype), u = 0; u < B.length; u++) {
                var l = B[u];
                p.prototype[l] || (p.prototype[l] = w.prototype[l])
            }

            function p(v) {
                if (!(this instanceof p)) return new p(v);
                d.call(this, v), w.call(this, v), this.allowHalfOpen = !0, v && (!1 === v.readable && (this.readable = !1), !1 === v.writable && (this.writable = !1), !1 === v.allowHalfOpen && (this.allowHalfOpen = !1, this.once("end", T)))
            }

            function T() {
                this._writableState.ended || process.nextTick(R, this)
            }

            function R(v) {
                v.end()
            }
            Object.defineProperty(p.prototype, "writableHighWaterMark", {
                enumerable: !1,
                get: function() {
                    return this._writableState.highWaterMark
                }
            }), Object.defineProperty(p.prototype, "writableBuffer", {
                enumerable: !1,
                get: function() {
                    return this._writableState && this._writableState.getBuffer()
                }
            }), Object.defineProperty(p.prototype, "writableLength", {
                enumerable: !1,
                get: function() {
                    return this._writableState.length
                }
            }), Object.defineProperty(p.prototype, "destroyed", {
                enumerable: !1,
                get: function() {
                    return void 0 !== this._readableState && void 0 !== this._writableState && this._readableState.destroyed && this._writableState.destroyed
                },
                set: function(y) {
                    void 0 === this._readableState || void 0 === this._writableState || (this._readableState.destroyed = y, this._writableState.destroyed = y)
                }
            })
        },
        10761: (ve, e, A) => {
            "use strict";
            ve.exports = d;
            var s = A(92180);

            function d(w) {
                if (!(this instanceof d)) return new d(w);
                s.call(this, w)
            }
            A(66698)(d, s), d.prototype._transform = function(w, B, u) {
                u(null, w)
            }
        },
        35018: (ve, e, A) => {
            "use strict";
            var s;
            ve.exports = _e, _e.ReadableState = Se, A(82016);
            var v, w = function(z, K) {
                    return z.listeners(K).length
                },
                B = A(24663),
                u = A(39007).Buffer,
                l = (typeof global < "u" ? global : typeof window < "u" ? window : typeof self < "u" ? self : {}).Uint8Array || function() {},
                R = A(23646);
            v = R && R.debuglog ? R.debuglog("stream") : function() {};
            var _, U, S, y = A(98730),
                x = A(34301),
                E = A(50210).getHighWaterMark,
                h = A(29859).q,
                c = h.ERR_INVALID_ARG_TYPE,
                r = h.ERR_STREAM_PUSH_AFTER_EOF,
                a = h.ERR_METHOD_NOT_IMPLEMENTED,
                m = h.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
            A(66698)(_e, B);
            var D = x.errorOrDestroy,
                M = ["error", "close", "destroy", "pause", "resume"];

            function Se(N, z, K) {
                s = s || A(11388), "boolean" != typeof K && (K = z instanceof s), this.objectMode = !!(N = N || {}).objectMode, K && (this.objectMode = this.objectMode || !!N.readableObjectMode), this.highWaterMark = E(this, N, "readableHighWaterMark", K), this.buffer = new y, this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.paused = !0, this.emitClose = !1 !== N.emitClose, this.autoDestroy = !!N.autoDestroy, this.destroyed = !1, this.defaultEncoding = N.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, N.encoding && (_ || (_ = A(72024).StringDecoder), this.decoder = new _(N.encoding), this.encoding = N.encoding)
            }

            function _e(N) {
                if (s = s || A(11388), !(this instanceof _e)) return new _e(N);
                this._readableState = new Se(N, this, this instanceof s), this.readable = !0, N && ("function" == typeof N.read && (this._read = N.read), "function" == typeof N.destroy && (this._destroy = N.destroy)), B.call(this)
            }

            function O(N, z, K, de, we) {
                v("readableAddChunk", z);
                var he, Be = N._readableState;
                if (null === z) Be.reading = !1,
                    function Y(N, z) {
                        if (v("onEofChunk"), !z.ended) {
                            if (z.decoder) {
                                var K = z.decoder.end();
                                K && K.length && (z.buffer.push(K), z.length += z.objectMode ? 1 : K.length)
                            }
                            z.ended = !0, z.sync ? te(N) : (z.needReadable = !1, z.emittedReadable || (z.emittedReadable = !0, F(N)))
                        }
                    }(N, Be);
                else if (we || (he = function C(N, z) {
                        var K;
                        return ! function T(N) {
                            return u.isBuffer(N) || N instanceof l
                        }(z) && "string" != typeof z && void 0 !== z && !N.objectMode && (K = new c("chunk", ["string", "Buffer", "Uint8Array"], z)), K
                    }(Be, z)), he) D(N, he);
                else if (Be.objectMode || z && z.length > 0)
                    if ("string" != typeof z && !Be.objectMode && Object.getPrototypeOf(z) !== u.prototype && (z = function p(N) {
                            return u.from(N)
                        }(z)), de) Be.endEmitted ? D(N, new m) : P(N, Be, z, !0);
                    else if (Be.ended) D(N, new r);
                else {
                    if (Be.destroyed) return !1;
                    Be.reading = !1, Be.decoder && !K ? (z = Be.decoder.write(z), Be.objectMode || 0 !== z.length ? P(N, Be, z, !1) : se(N, Be)) : P(N, Be, z, !1)
                } else de || (Be.reading = !1, se(N, Be));
                return !Be.ended && (Be.length < Be.highWaterMark || 0 === Be.length)
            }

            function P(N, z, K, de) {
                z.flowing && 0 === z.length && !z.sync ? (z.awaitDrain = 0, N.emit("data", K)) : (z.length += z.objectMode ? 1 : K.length, de ? z.buffer.unshift(K) : z.buffer.push(K), z.needReadable && te(N)), se(N, z)
            }
            Object.defineProperty(_e.prototype, "destroyed", {
                enumerable: !1,
                get: function() {
                    return void 0 !== this._readableState && this._readableState.destroyed
                },
                set: function(z) {
                    this._readableState && (this._readableState.destroyed = z)
                }
            }), _e.prototype.destroy = x.destroy, _e.prototype._undestroy = x.undestroy, _e.prototype._destroy = function(N, z) {
                z(N)
            }, _e.prototype.push = function(N, z) {
                var de, K = this._readableState;
                return K.objectMode ? de = !0 : "string" == typeof N && ((z = z || K.defaultEncoding) !== K.encoding && (N = u.from(N, z), z = ""), de = !0), O(this, N, z, !1, de)
            }, _e.prototype.unshift = function(N) {
                return O(this, N, null, !0, !1)
            }, _e.prototype.isPaused = function() {
                return !1 === this._readableState.flowing
            }, _e.prototype.setEncoding = function(N) {
                _ || (_ = A(72024).StringDecoder);
                var z = new _(N);
                this._readableState.decoder = z, this._readableState.encoding = this._readableState.decoder.encoding;
                for (var K = this._readableState.buffer.head, de = ""; null !== K;) de += z.write(K.data), K = K.next;
                return this._readableState.buffer.clear(), "" !== de && this._readableState.buffer.push(de), this._readableState.length = de.length, this
            };
            var ae = 1073741824;

            function re(N, z) {
                return N <= 0 || 0 === z.length && z.ended ? 0 : z.objectMode ? 1 : N != N ? z.flowing && z.length ? z.buffer.head.data.length : z.length : (N > z.highWaterMark && (z.highWaterMark = function J(N) {
                    return N >= ae ? N = ae : (N--, N |= N >>> 1, N |= N >>> 2, N |= N >>> 4, N |= N >>> 8, N |= N >>> 16, N++), N
                }(N)), N <= z.length ? N : z.ended ? z.length : (z.needReadable = !0, 0))
            }

            function te(N) {
                var z = N._readableState;
                v("emitReadable", z.needReadable, z.emittedReadable), z.needReadable = !1, z.emittedReadable || (v("emitReadable", z.flowing), z.emittedReadable = !0, process.nextTick(F, N))
            }

            function F(N) {
                var z = N._readableState;
                v("emitReadable_", z.destroyed, z.length, z.ended), !z.destroyed && (z.length || z.ended) && (N.emit("readable"), z.emittedReadable = !1), z.needReadable = !z.flowing && !z.ended && z.length <= z.highWaterMark, oe(N)
            }

            function se(N, z) {
                z.readingMore || (z.readingMore = !0, process.nextTick(V, N, z))
            }

            function V(N, z) {
                for (; !z.reading && !z.ended && (z.length < z.highWaterMark || z.flowing && 0 === z.length);) {
                    var K = z.length;
                    if (v("maybeReadMore read 0"), N.read(0), K === z.length) break
                }
                z.readingMore = !1
            }

            function H(N) {
                var z = N._readableState;
                z.readableListening = N.listenerCount("readable") > 0, z.resumeScheduled && !z.paused ? z.flowing = !0 : N.listenerCount("data") > 0 && N.resume()
            }

            function ce(N) {
                v("readable nexttick read 0"), N.read(0)
            }

            function Le(N, z) {
                v("resume", z.reading), z.reading || N.read(0), z.resumeScheduled = !1, N.emit("resume"), oe(N), z.flowing && !z.reading && N.read(0)
            }

            function oe(N) {
                var z = N._readableState;
                for (v("flow", z.flowing); z.flowing && null !== N.read(););
            }

            function Q(N, z) {
                return 0 === z.length ? null : (z.objectMode ? K = z.buffer.shift() : !N || N >= z.length ? (K = z.decoder ? z.buffer.join("") : 1 === z.buffer.length ? z.buffer.first() : z.buffer.concat(z.length), z.buffer.clear()) : K = z.buffer.consume(N, z.decoder), K);
                var K
            }

            function me(N) {
                var z = N._readableState;
                v("endReadable", z.endEmitted), z.endEmitted || (z.ended = !0, process.nextTick(Ie, z, N))
            }

            function Ie(N, z) {
                if (v("endReadableNT", N.endEmitted, N.length), !N.endEmitted && 0 === N.length && (N.endEmitted = !0, z.readable = !1, z.emit("end"), N.autoDestroy)) {
                    var K = z._writableState;
                    (!K || K.autoDestroy && K.finished) && z.destroy()
                }
            }

            function Ze(N, z) {
                for (var K = 0, de = N.length; K < de; K++)
                    if (N[K] === z) return K;
                return -1
            }
            _e.prototype.read = function(N) {
                v("read", N), N = parseInt(N, 10);
                var z = this._readableState,
                    K = N;
                if (0 !== N && (z.emittedReadable = !1), 0 === N && z.needReadable && ((0 !== z.highWaterMark ? z.length >= z.highWaterMark : z.length > 0) || z.ended)) return v("read: emitReadable", z.length, z.ended), 0 === z.length && z.ended ? me(this) : te(this), null;
                if (0 === (N = re(N, z)) && z.ended) return 0 === z.length && me(this), null;
                var we, de = z.needReadable;
                return v("need readable", de), (0 === z.length || z.length - N < z.highWaterMark) && v("length less than watermark", de = !0), z.ended || z.reading ? v("reading or ended", de = !1) : de && (v("do read"), z.reading = !0, z.sync = !0, 0 === z.length && (z.needReadable = !0), this._read(z.highWaterMark), z.sync = !1, z.reading || (N = re(K, z))), null === (we = N > 0 ? Q(N, z) : null) ? (z.needReadable = z.length <= z.highWaterMark, N = 0) : (z.length -= N, z.awaitDrain = 0), 0 === z.length && (z.ended || (z.needReadable = !0), K !== N && z.ended && me(this)), null !== we && this.emit("data", we), we
            }, _e.prototype._read = function(N) {
                D(this, new a("_read()"))
            }, _e.prototype.pipe = function(N, z) {
                var K = this,
                    de = this._readableState;
                switch (de.pipesCount) {
                    case 0:
                        de.pipes = N;
                        break;
                    case 1:
                        de.pipes = [de.pipes, N];
                        break;
                    default:
                        de.pipes.push(N)
                }
                de.pipesCount += 1, v("pipe count=%d opts=%j", de.pipesCount, z);
                var Be = z && !1 === z.end || N === process.stdout || N === process.stderr ? xe : We;

                function We() {
                    v("onend"), N.end()
                }
                de.endEmitted ? process.nextTick(Be) : K.once("end", Be), N.on("unpipe", function he(Ae, je) {
                    v("onunpipe"), Ae === K && je && !1 === je.hasUnpiped && (je.hasUnpiped = !0, function yt() {
                        v("cleanup"), N.removeListener("close", G), N.removeListener("finish", ee), N.removeListener("drain", gt), N.removeListener("error", ge), N.removeListener("unpipe", he), K.removeListener("end", We), K.removeListener("end", xe), K.removeListener("data", At), xt = !0, de.awaitDrain && (!N._writableState || N._writableState.needDrain) && gt()
                    }())
                });
                var gt = function q(N) {
                    return function() {
                        var K = N._readableState;
                        v("pipeOnDrain", K.awaitDrain), K.awaitDrain && K.awaitDrain--, 0 === K.awaitDrain && w(N, "data") && (K.flowing = !0, oe(N))
                    }
                }(K);
                N.on("drain", gt);
                var xt = !1;

                function At(Ae) {
                    v("ondata");
                    var je = N.write(Ae);
                    v("dest.write", je), !1 === je && ((1 === de.pipesCount && de.pipes === N || de.pipesCount > 1 && -1 !== Ze(de.pipes, N)) && !xt && (v("false write response, pause", de.awaitDrain), de.awaitDrain++), K.pause())
                }

                function ge(Ae) {
                    v("onerror", Ae), xe(), N.removeListener("error", ge), 0 === w(N, "error") && D(N, Ae)
                }

                function G() {
                    N.removeListener("finish", ee), xe()
                }

                function ee() {
                    v("onfinish"), N.removeListener("close", G), xe()
                }

                function xe() {
                    v("unpipe"), K.unpipe(N)
                }
                return K.on("data", At),
                    function fe(N, z, K) {
                        if ("function" == typeof N.prependListener) return N.prependListener(z, K);
                        N._events && N._events[z] ? Array.isArray(N._events[z]) ? N._events[z].unshift(K) : N._events[z] = [K, N._events[z]] : N.on(z, K)
                    }(N, "error", ge), N.once("close", G), N.once("finish", ee), N.emit("pipe", K), de.flowing || (v("pipe resume"), K.resume()), N
            }, _e.prototype.unpipe = function(N) {
                var z = this._readableState,
                    K = {
                        hasUnpiped: !1
                    };
                if (0 === z.pipesCount) return this;
                if (1 === z.pipesCount) return N && N !== z.pipes || (N || (N = z.pipes), z.pipes = null, z.pipesCount = 0, z.flowing = !1, N && N.emit("unpipe", this, K)), this;
                if (!N) {
                    var de = z.pipes,
                        we = z.pipesCount;
                    z.pipes = null, z.pipesCount = 0, z.flowing = !1;
                    for (var Be = 0; Be < we; Be++) de[Be].emit("unpipe", this, {
                        hasUnpiped: !1
                    });
                    return this
                }
                var he = Ze(z.pipes, N);
                return -1 === he || (z.pipes.splice(he, 1), z.pipesCount -= 1, 1 === z.pipesCount && (z.pipes = z.pipes[0]), N.emit("unpipe", this, K)), this
            }, _e.prototype.addListener = _e.prototype.on = function(N, z) {
                var K = B.prototype.on.call(this, N, z),
                    de = this._readableState;
                return "data" === N ? (de.readableListening = this.listenerCount("readable") > 0, !1 !== de.flowing && this.resume()) : "readable" === N && !de.endEmitted && !de.readableListening && (de.readableListening = de.needReadable = !0, de.flowing = !1, de.emittedReadable = !1, v("on readable", de.length, de.reading), de.length ? te(this) : de.reading || process.nextTick(ce, this)), K
            }, _e.prototype.removeListener = function(N, z) {
                var K = B.prototype.removeListener.call(this, N, z);
                return "readable" === N && process.nextTick(H, this), K
            }, _e.prototype.removeAllListeners = function(N) {
                var z = B.prototype.removeAllListeners.apply(this, arguments);
                return ("readable" === N || void 0 === N) && process.nextTick(H, this), z
            }, _e.prototype.resume = function() {
                var N = this._readableState;
                return N.flowing || (v("resume"), N.flowing = !N.readableListening, function Ee(N, z) {
                    z.resumeScheduled || (z.resumeScheduled = !0, process.nextTick(Le, N, z))
                }(this, N)), N.paused = !1, this
            }, _e.prototype.pause = function() {
                return v("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (v("pause"), this._readableState.flowing = !1, this.emit("pause")), this._readableState.paused = !0, this
            }, _e.prototype.wrap = function(N) {
                var z = this,
                    K = this._readableState,
                    de = !1;
                for (var we in N.on("end", function() {
                        if (v("wrapped end"), K.decoder && !K.ended) {
                            var he = K.decoder.end();
                            he && he.length && z.push(he)
                        }
                        z.push(null)
                    }), N.on("data", function(he) {
                        v("wrapped data"), K.decoder && (he = K.decoder.write(he)), K.objectMode && null == he || !(K.objectMode || he && he.length) || z.push(he) || (de = !0, N.pause())
                    }), N) void 0 === this[we] && "function" == typeof N[we] && (this[we] = function(We) {
                    return function() {
                        return N[We].apply(N, arguments)
                    }
                }(we));
                for (var Be = 0; Be < M.length; Be++) N.on(M[Be], this.emit.bind(this, M[Be]));
                return this._read = function(he) {
                    v("wrapped _read", he), de && (de = !1, N.resume())
                }, this
            }, "function" == typeof Symbol && (_e.prototype[Symbol.asyncIterator] = function() {
                return void 0 === U && (U = A(54150)), U(this)
            }), Object.defineProperty(_e.prototype, "readableHighWaterMark", {
                enumerable: !1,
                get: function() {
                    return this._readableState.highWaterMark
                }
            }), Object.defineProperty(_e.prototype, "readableBuffer", {
                enumerable: !1,
                get: function() {
                    return this._readableState && this._readableState.buffer
                }
            }), Object.defineProperty(_e.prototype, "readableFlowing", {
                enumerable: !1,
                get: function() {
                    return this._readableState.flowing
                },
                set: function(z) {
                    this._readableState && (this._readableState.flowing = z)
                }
            }), _e._fromList = Q, Object.defineProperty(_e.prototype, "readableLength", {
                enumerable: !1,
                get: function() {
                    return this._readableState.length
                }
            }), "function" == typeof Symbol && (_e.from = function(N, z) {
                return void 0 === S && (S = A(57838)), S(_e, N, z)
            })
        },
        92180: (ve, e, A) => {
            "use strict";
            ve.exports = T;
            var s = A(29859).q,
                d = s.ERR_METHOD_NOT_IMPLEMENTED,
                w = s.ERR_MULTIPLE_CALLBACK,
                B = s.ERR_TRANSFORM_ALREADY_TRANSFORMING,
                u = s.ERR_TRANSFORM_WITH_LENGTH_0,
                l = A(11388);

            function p(y, x) {
                var o = this._transformState;
                o.transforming = !1;
                var E = o.writecb;
                if (null === E) return this.emit("error", new w);
                o.writechunk = null, o.writecb = null, null != x && this.push(x), E(y);
                var h = this._readableState;
                h.reading = !1, (h.needReadable || h.length < h.highWaterMark) && this._read(h.highWaterMark)
            }

            function T(y) {
                if (!(this instanceof T)) return new T(y);
                l.call(this, y), this._transformState = {
                    afterTransform: p.bind(this),
                    needTransform: !1,
                    transforming: !1,
                    writecb: null,
                    writechunk: null,
                    writeencoding: null
                }, this._readableState.needReadable = !0, this._readableState.sync = !1, y && ("function" == typeof y.transform && (this._transform = y.transform), "function" == typeof y.flush && (this._flush = y.flush)), this.on("prefinish", R)
            }

            function R() {
                var y = this;
                "function" != typeof this._flush || this._readableState.destroyed ? v(this, null, null) : this._flush(function(x, o) {
                    v(y, x, o)
                })
            }

            function v(y, x, o) {
                if (x) return y.emit("error", x);
                if (null != o && y.push(o), y._writableState.length) throw new u;
                if (y._transformState.transforming) throw new B;
                return y.push(null)
            }
            A(66698)(T, l), T.prototype.push = function(y, x) {
                return this._transformState.needTransform = !1, l.prototype.push.call(this, y, x)
            }, T.prototype._transform = function(y, x, o) {
                o(new d("_transform()"))
            }, T.prototype._write = function(y, x, o) {
                var E = this._transformState;
                if (E.writecb = o, E.writechunk = y, E.writeencoding = x, !E.transforming) {
                    var h = this._readableState;
                    (E.needTransform || h.needReadable || h.length < h.highWaterMark) && this._read(h.highWaterMark)
                }
            }, T.prototype._read = function(y) {
                var x = this._transformState;
                null === x.writechunk || x.transforming ? x.needTransform = !0 : (x.transforming = !0, this._transform(x.writechunk, x.writeencoding, x.afterTransform))
            }, T.prototype._destroy = function(y, x) {
                l.prototype._destroy.call(this, y, function(o) {
                    x(o)
                })
            }
        },
        22672: (ve, e, A) => {
            "use strict";

            function d(oe) {
                var Q = this;
                this.next = null, this.entry = null, this.finish = function() {
                    ! function Le(oe, Q, me) {
                        var Ie = oe.entry;
                        for (oe.entry = null; Ie;) {
                            var Ze = Ie.callback;
                            Q.pendingcb--, Ze(me), Ie = Ie.next
                        }
                        Q.corkedRequestsFree.next = oe
                    }(Q, oe)
                }
            }
            var w;
            ve.exports = Se, Se.WritableState = M;
            var fe, B = {
                    deprecate: A(90496)
                },
                u = A(24663),
                l = A(39007).Buffer,
                p = (typeof global < "u" ? global : typeof window < "u" ? window : typeof self < "u" ? self : {}).Uint8Array || function() {},
                v = A(34301),
                x = A(50210).getHighWaterMark,
                o = A(29859).q,
                E = o.ERR_INVALID_ARG_TYPE,
                h = o.ERR_METHOD_NOT_IMPLEMENTED,
                c = o.ERR_MULTIPLE_CALLBACK,
                r = o.ERR_STREAM_CANNOT_PIPE,
                a = o.ERR_STREAM_DESTROYED,
                m = o.ERR_STREAM_NULL_VALUES,
                _ = o.ERR_STREAM_WRITE_AFTER_END,
                U = o.ERR_UNKNOWN_ENCODING,
                S = v.errorOrDestroy;

            function D() {}

            function M(oe, Q, me) {
                w = w || A(11388), "boolean" != typeof me && (me = Q instanceof w), this.objectMode = !!(oe = oe || {}).objectMode, me && (this.objectMode = this.objectMode || !!oe.writableObjectMode), this.highWaterMark = x(this, oe, "writableHighWaterMark", me), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1, this.decodeStrings = !(!1 === oe.decodeStrings), this.defaultEncoding = oe.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(Ze) {
                    ! function Y(oe, Q) {
                        var me = oe._writableState,
                            Ie = me.sync,
                            Ze = me.writecb;
                        if ("function" != typeof Ze) throw new c;
                        if (function re(oe) {
                                oe.writing = !1, oe.writecb = null, oe.length -= oe.writelen, oe.writelen = 0
                            }(me), Q) ! function J(oe, Q, me, Ie, Ze) {
                            --Q.pendingcb, me ? (process.nextTick(Ze, Ie), process.nextTick(ce, oe, Q), oe._writableState.errorEmitted = !0, S(oe, Ie)) : (Ze(Ie), oe._writableState.errorEmitted = !0, S(oe, Ie), ce(oe, Q))
                        }(oe, me, Ie, Q, Ze);
                        else {
                            var N = V(me) || oe.destroyed;
                            !N && !me.corked && !me.bufferProcessing && me.bufferedRequest && se(oe, me), Ie ? process.nextTick(te, oe, me, N, Ze) : te(oe, me, N, Ze)
                        }
                    }(Q, Ze)
                }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.emitClose = !1 !== oe.emitClose, this.autoDestroy = !!oe.autoDestroy, this.bufferedRequestCount = 0, this.corkedRequestsFree = new d(this)
            }

            function Se(oe) {
                var Q = this instanceof(w = w || A(11388));
                if (!Q && !fe.call(Se, this)) return new Se(oe);
                this._writableState = new M(oe, this, Q), this.writable = !0, oe && ("function" == typeof oe.write && (this._write = oe.write), "function" == typeof oe.writev && (this._writev = oe.writev), "function" == typeof oe.destroy && (this._destroy = oe.destroy), "function" == typeof oe.final && (this._final = oe.final)), u.call(this)
            }

            function ae(oe, Q, me, Ie, Ze, N, z) {
                Q.writelen = Ie, Q.writecb = z, Q.writing = !0, Q.sync = !0, Q.destroyed ? Q.onwrite(new a("write")) : me ? oe._writev(Ze, Q.onwrite) : oe._write(Ze, N, Q.onwrite), Q.sync = !1
            }

            function te(oe, Q, me, Ie) {
                me || function F(oe, Q) {
                    0 === Q.length && Q.needDrain && (Q.needDrain = !1, oe.emit("drain"))
                }(oe, Q), Q.pendingcb--, Ie(), ce(oe, Q)
            }

            function se(oe, Q) {
                Q.bufferProcessing = !0;
                var me = Q.bufferedRequest;
                if (oe._writev && me && me.next) {
                    var Ze = new Array(Q.bufferedRequestCount),
                        N = Q.corkedRequestsFree;
                    N.entry = me;
                    for (var z = 0, K = !0; me;) Ze[z] = me, me.isBuf || (K = !1), me = me.next, z += 1;
                    Ze.allBuffers = K, ae(oe, Q, !0, Q.length, Ze, "", N.finish), Q.pendingcb++, Q.lastBufferedRequest = null, N.next ? (Q.corkedRequestsFree = N.next, N.next = null) : Q.corkedRequestsFree = new d(Q), Q.bufferedRequestCount = 0
                } else {
                    for (; me;) {
                        var de = me.chunk;
                        if (ae(oe, Q, !1, Q.objectMode ? 1 : de.length, de, me.encoding, me.callback), me = me.next, Q.bufferedRequestCount--, Q.writing) break
                    }
                    null === me && (Q.lastBufferedRequest = null)
                }
                Q.bufferedRequest = me, Q.bufferProcessing = !1
            }

            function V(oe) {
                return oe.ending && 0 === oe.length && null === oe.bufferedRequest && !oe.finished && !oe.writing
            }

            function q(oe, Q) {
                oe._final(function(me) {
                    Q.pendingcb--, me && S(oe, me), Q.prefinished = !0, oe.emit("prefinish"), ce(oe, Q)
                })
            }

            function ce(oe, Q) {
                var me = V(Q);
                if (me && (function H(oe, Q) {
                        !Q.prefinished && !Q.finalCalled && ("function" != typeof oe._final || Q.destroyed ? (Q.prefinished = !0, oe.emit("prefinish")) : (Q.pendingcb++, Q.finalCalled = !0, process.nextTick(q, oe, Q)))
                    }(oe, Q), 0 === Q.pendingcb && (Q.finished = !0, oe.emit("finish"), Q.autoDestroy))) {
                    var Ie = oe._readableState;
                    (!Ie || Ie.autoDestroy && Ie.endEmitted) && oe.destroy()
                }
                return me
            }
            A(66698)(Se, u), M.prototype.getBuffer = function() {
                    for (var Q = this.bufferedRequest, me = []; Q;) me.push(Q), Q = Q.next;
                    return me
                },
                function() {
                    try {
                        Object.defineProperty(M.prototype, "buffer", {
                            get: B.deprecate(function() {
                                return this.getBuffer()
                            }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
                        })
                    } catch {}
                }(), "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (fe = Function.prototype[Symbol.hasInstance], Object.defineProperty(Se, Symbol.hasInstance, {
                    value: function(Q) {
                        return !!fe.call(this, Q) || this === Se && Q && Q._writableState instanceof M
                    }
                })) : fe = function(Q) {
                    return Q instanceof this
                }, Se.prototype.pipe = function() {
                    S(this, new r)
                }, Se.prototype.write = function(oe, Q, me) {
                    var Ie = this._writableState,
                        Ze = !1,
                        N = !Ie.objectMode && function R(oe) {
                            return l.isBuffer(oe) || oe instanceof p
                        }(oe);
                    return N && !l.isBuffer(oe) && (oe = function T(oe) {
                        return l.from(oe)
                    }(oe)), "function" == typeof Q && (me = Q, Q = null), N ? Q = "buffer" : Q || (Q = Ie.defaultEncoding), "function" != typeof me && (me = D), Ie.ending ? function _e(oe, Q) {
                        var me = new _;
                        S(oe, me), process.nextTick(Q, me)
                    }(this, me) : (N || function O(oe, Q, me, Ie) {
                        var Ze;
                        return null === me ? Ze = new m : "string" != typeof me && !Q.objectMode && (Ze = new E("chunk", ["string", "Buffer"], me)), !Ze || (S(oe, Ze), process.nextTick(Ie, Ze), !1)
                    }(this, Ie, oe, me)) && (Ie.pendingcb++, Ze = function C(oe, Q, me, Ie, Ze, N) {
                        if (!me) {
                            var z = function P(oe, Q, me) {
                                return !oe.objectMode && !1 !== oe.decodeStrings && "string" == typeof Q && (Q = l.from(Q, me)), Q
                            }(Q, Ie, Ze);
                            Ie !== z && (me = !0, Ze = "buffer", Ie = z)
                        }
                        var K = Q.objectMode ? 1 : Ie.length;
                        Q.length += K;
                        var de = Q.length < Q.highWaterMark;
                        if (de || (Q.needDrain = !0), Q.writing || Q.corked) {
                            var we = Q.lastBufferedRequest;
                            Q.lastBufferedRequest = {
                                chunk: Ie,
                                encoding: Ze,
                                isBuf: me,
                                callback: N,
                                next: null
                            }, we ? we.next = Q.lastBufferedRequest : Q.bufferedRequest = Q.lastBufferedRequest, Q.bufferedRequestCount += 1
                        } else ae(oe, Q, !1, K, Ie, Ze, N);
                        return de
                    }(this, Ie, N, oe, Q, me)), Ze
                }, Se.prototype.cork = function() {
                    this._writableState.corked++
                }, Se.prototype.uncork = function() {
                    var oe = this._writableState;
                    oe.corked && (oe.corked--, !oe.writing && !oe.corked && !oe.bufferProcessing && oe.bufferedRequest && se(this, oe))
                }, Se.prototype.setDefaultEncoding = function(Q) {
                    if ("string" == typeof Q && (Q = Q.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((Q + "").toLowerCase()) > -1)) throw new U(Q);
                    return this._writableState.defaultEncoding = Q, this
                }, Object.defineProperty(Se.prototype, "writableBuffer", {
                    enumerable: !1,
                    get: function() {
                        return this._writableState && this._writableState.getBuffer()
                    }
                }), Object.defineProperty(Se.prototype, "writableHighWaterMark", {
                    enumerable: !1,
                    get: function() {
                        return this._writableState.highWaterMark
                    }
                }), Se.prototype._write = function(oe, Q, me) {
                    me(new h("_write()"))
                }, Se.prototype._writev = null, Se.prototype.end = function(oe, Q, me) {
                    var Ie = this._writableState;
                    return "function" == typeof oe ? (me = oe, oe = null, Q = null) : "function" == typeof Q && (me = Q, Q = null), null != oe && this.write(oe, Q), Ie.corked && (Ie.corked = 1, this.uncork()), Ie.ending || function Ee(oe, Q, me) {
                        Q.ending = !0, ce(oe, Q), me && (Q.finished ? process.nextTick(me) : oe.once("finish", me)), Q.ended = !0, oe.writable = !1
                    }(this, Ie, me), this
                }, Object.defineProperty(Se.prototype, "writableLength", {
                    enumerable: !1,
                    get: function() {
                        return this._writableState.length
                    }
                }), Object.defineProperty(Se.prototype, "destroyed", {
                    enumerable: !1,
                    get: function() {
                        return void 0 !== this._writableState && this._writableState.destroyed
                    },
                    set: function(Q) {
                        this._writableState && (this._writableState.destroyed = Q)
                    }
                }), Se.prototype.destroy = v.destroy, Se.prototype._undestroy = v.undestroy, Se.prototype._destroy = function(oe, Q) {
                    Q(oe)
                }
        },
        54150: (ve, e, A) => {
            "use strict";
            var s;

            function d(_, U, S) {
                return U = function w(_) {
                    var U = function B(_, U) {
                        if ("object" != typeof _ || null === _) return _;
                        var S = _[Symbol.toPrimitive];
                        if (void 0 !== S) {
                            var D = S.call(_, U || "default");
                            if ("object" != typeof D) return D;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === U ? String : Number)(_)
                    }(_, "string");
                    return "symbol" == typeof U ? U : String(U)
                }(U), U in _ ? Object.defineProperty(_, U, {
                    value: S,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : _[U] = S, _
            }
            var u = A(48554),
                l = Symbol("lastResolve"),
                p = Symbol("lastReject"),
                T = Symbol("error"),
                R = Symbol("ended"),
                v = Symbol("lastPromise"),
                y = Symbol("handlePromise"),
                x = Symbol("stream");

            function o(_, U) {
                return {
                    value: _,
                    done: U
                }
            }

            function E(_) {
                var U = _[l];
                if (null !== U) {
                    var S = _[x].read();
                    null !== S && (_[v] = null, _[l] = null, _[p] = null, U(o(S, !1)))
                }
            }

            function h(_) {
                process.nextTick(E, _)
            }
            var r = Object.getPrototypeOf(function() {}),
                a = Object.setPrototypeOf((d(s = {
                    get stream() {
                        return this[x]
                    },
                    next: function() {
                        var U = this,
                            S = this[T];
                        if (null !== S) return Promise.reject(S);
                        if (this[R]) return Promise.resolve(o(void 0, !0));
                        if (this[x].destroyed) return new Promise(function(Se, _e) {
                            process.nextTick(function() {
                                U[T] ? _e(U[T]) : Se(o(void 0, !0))
                            })
                        });
                        var M, D = this[v];
                        if (D) M = new Promise(function c(_, U) {
                            return function(S, D) {
                                _.then(function() {
                                    U[R] ? S(o(void 0, !0)) : U[y](S, D)
                                }, D)
                            }
                        }(D, this));
                        else {
                            var fe = this[x].read();
                            if (null !== fe) return Promise.resolve(o(fe, !1));
                            M = new Promise(this[y])
                        }
                        return this[v] = M, M
                    }
                }, Symbol.asyncIterator, function() {
                    return this
                }), d(s, "return", function() {
                    var U = this;
                    return new Promise(function(S, D) {
                        U[x].destroy(null, function(M) {
                            M ? D(M) : S(o(void 0, !0))
                        })
                    })
                }), s), r);
            ve.exports = function(U) {
                var S, D = Object.create(a, (d(S = {}, x, {
                    value: U,
                    writable: !0
                }), d(S, l, {
                    value: null,
                    writable: !0
                }), d(S, p, {
                    value: null,
                    writable: !0
                }), d(S, T, {
                    value: null,
                    writable: !0
                }), d(S, R, {
                    value: U._readableState.endEmitted,
                    writable: !0
                }), d(S, y, {
                    value: function(fe, Se) {
                        var _e = D[x].read();
                        _e ? (D[v] = null, D[l] = null, D[p] = null, fe(o(_e, !1))) : (D[l] = fe, D[p] = Se)
                    },
                    writable: !0
                }), S));
                return D[v] = null, u(U, function(M) {
                    if (M && "ERR_STREAM_PREMATURE_CLOSE" !== M.code) {
                        var fe = D[p];
                        return null !== fe && (D[v] = null, D[l] = null, D[p] = null, fe(M)), void(D[T] = M)
                    }
                    var Se = D[l];
                    null !== Se && (D[v] = null, D[l] = null, D[p] = null, Se(o(void 0, !0))), D[R] = !0
                }), U.on("readable", h.bind(null, D)), D
            }
        },
        98730: (ve, e, A) => {
            "use strict";

            function s(h, c) {
                var r = Object.keys(h);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(h);
                    c && (a = a.filter(function(m) {
                        return Object.getOwnPropertyDescriptor(h, m).enumerable
                    })), r.push.apply(r, a)
                }
                return r
            }

            function d(h) {
                for (var c = 1; c < arguments.length; c++) {
                    var r = null != arguments[c] ? arguments[c] : {};
                    c % 2 ? s(Object(r), !0).forEach(function(a) {
                        w(h, a, r[a])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(h, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach(function(a) {
                        Object.defineProperty(h, a, Object.getOwnPropertyDescriptor(r, a))
                    })
                }
                return h
            }

            function w(h, c, r) {
                return (c = p(c)) in h ? Object.defineProperty(h, c, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : h[c] = r, h
            }

            function u(h, c) {
                for (var r = 0; r < c.length; r++) {
                    var a = c[r];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(h, p(a.key), a)
                }
            }

            function p(h) {
                var c = function T(h, c) {
                    if ("object" != typeof h || null === h) return h;
                    var r = h[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var a = r.call(h, c || "default");
                        if ("object" != typeof a) return a;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === c ? String : Number)(h)
                }(h, "string");
                return "symbol" == typeof c ? c : String(c)
            }
            var v = A(39007).Buffer,
                x = A(71408).inspect,
                o = x && x.custom || "inspect";

            function E(h, c, r) {
                v.prototype.copy.call(h, c, r)
            }
            ve.exports = function() {
                function h() {
                    (function B(h, c) {
                        if (!(h instanceof c)) throw new TypeError("Cannot call a class as a function")
                    })(this, h), this.head = null, this.tail = null, this.length = 0
                }
                return function l(h, c, r) {
                    c && u(h.prototype, c), r && u(h, r), Object.defineProperty(h, "prototype", {
                        writable: !1
                    })
                }(h, [{
                    key: "push",
                    value: function(r) {
                        var a = {
                            data: r,
                            next: null
                        };
                        this.length > 0 ? this.tail.next = a : this.head = a, this.tail = a, ++this.length
                    }
                }, {
                    key: "unshift",
                    value: function(r) {
                        var a = {
                            data: r,
                            next: this.head
                        };
                        0 === this.length && (this.tail = a), this.head = a, ++this.length
                    }
                }, {
                    key: "shift",
                    value: function() {
                        if (0 !== this.length) {
                            var r = this.head.data;
                            return this.head = 1 === this.length ? this.tail = null : this.head.next, --this.length, r
                        }
                    }
                }, {
                    key: "clear",
                    value: function() {
                        this.head = this.tail = null, this.length = 0
                    }
                }, {
                    key: "join",
                    value: function(r) {
                        if (0 === this.length) return "";
                        for (var a = this.head, m = "" + a.data; a = a.next;) m += r + a.data;
                        return m
                    }
                }, {
                    key: "concat",
                    value: function(r) {
                        if (0 === this.length) return v.alloc(0);
                        for (var a = v.allocUnsafe(r >>> 0), m = this.head, _ = 0; m;) E(m.data, a, _), _ += m.data.length, m = m.next;
                        return a
                    }
                }, {
                    key: "consume",
                    value: function(r, a) {
                        var m;
                        return r < this.head.data.length ? (m = this.head.data.slice(0, r), this.head.data = this.head.data.slice(r)) : m = r === this.head.data.length ? this.shift() : a ? this._getString(r) : this._getBuffer(r), m
                    }
                }, {
                    key: "first",
                    value: function() {
                        return this.head.data
                    }
                }, {
                    key: "_getString",
                    value: function(r) {
                        var a = this.head,
                            m = 1,
                            _ = a.data;
                        for (r -= _.length; a = a.next;) {
                            var U = a.data,
                                S = r > U.length ? U.length : r;
                            if (_ += S === U.length ? U : U.slice(0, r), 0 == (r -= S)) {
                                S === U.length ? (++m, this.head = a.next ? a.next : this.tail = null) : (this.head = a, a.data = U.slice(S));
                                break
                            }++m
                        }
                        return this.length -= m, _
                    }
                }, {
                    key: "_getBuffer",
                    value: function(r) {
                        var a = v.allocUnsafe(r),
                            m = this.head,
                            _ = 1;
                        for (m.data.copy(a), r -= m.data.length; m = m.next;) {
                            var U = m.data,
                                S = r > U.length ? U.length : r;
                            if (U.copy(a, a.length - r, 0, S), 0 == (r -= S)) {
                                S === U.length ? (++_, this.head = m.next ? m.next : this.tail = null) : (this.head = m, m.data = U.slice(S));
                                break
                            }++_
                        }
                        return this.length -= _, a
                    }
                }, {
                    key: o,
                    value: function(r, a) {
                        return x(this, d(d({}, a), {}, {
                            depth: 0,
                            customInspect: !1
                        }))
                    }
                }]), h
            }()
        },
        34301: ve => {
            "use strict";

            function A(u, l) {
                w(u, l), s(u)
            }

            function s(u) {
                u._writableState && !u._writableState.emitClose || u._readableState && !u._readableState.emitClose || u.emit("close")
            }

            function w(u, l) {
                u.emit("error", l)
            }
            ve.exports = {
                destroy: function e(u, l) {
                    var p = this;
                    return this._readableState && this._readableState.destroyed || this._writableState && this._writableState.destroyed ? (l ? l(u) : u && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0, process.nextTick(w, this, u)) : process.nextTick(w, this, u)), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(u || null, function(v) {
                        !l && v ? p._writableState ? p._writableState.errorEmitted ? process.nextTick(s, p) : (p._writableState.errorEmitted = !0, process.nextTick(A, p, v)) : process.nextTick(A, p, v) : l ? (process.nextTick(s, p), l(v)) : process.nextTick(s, p)
                    }), this)
                },
                undestroy: function d() {
                    this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finalCalled = !1, this._writableState.prefinished = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1)
                },
                errorOrDestroy: function B(u, l) {
                    var p = u._readableState,
                        T = u._writableState;
                    p && p.autoDestroy || T && T.autoDestroy ? u.destroy(l) : u.emit("error", l)
                }
            }
        },
        48554: (ve, e, A) => {
            "use strict";
            var s = A(29859).q.ERR_STREAM_PREMATURE_CLOSE;

            function w() {}
            ve.exports = function u(l, p, T) {
                if ("function" == typeof p) return u(l, null, p);
                p || (p = {}), T = function d(l) {
                    var p = !1;
                    return function() {
                        if (!p) {
                            p = !0;
                            for (var T = arguments.length, R = new Array(T), v = 0; v < T; v++) R[v] = arguments[v];
                            l.apply(this, R)
                        }
                    }
                }(T || w);
                var R = p.readable || !1 !== p.readable && l.readable,
                    v = p.writable || !1 !== p.writable && l.writable,
                    y = function() {
                        l.writable || o()
                    },
                    x = l._writableState && l._writableState.finished,
                    o = function() {
                        v = !1, x = !0, R || T.call(l)
                    },
                    E = l._readableState && l._readableState.endEmitted,
                    h = function() {
                        R = !1, E = !0, v || T.call(l)
                    },
                    c = function(_) {
                        T.call(l, _)
                    },
                    r = function() {
                        var _;
                        return R && !E ? ((!l._readableState || !l._readableState.ended) && (_ = new s), T.call(l, _)) : v && !x ? ((!l._writableState || !l._writableState.ended) && (_ = new s), T.call(l, _)) : void 0
                    },
                    a = function() {
                        l.req.on("finish", o)
                    };
                return function B(l) {
                        return l.setHeader && "function" == typeof l.abort
                    }(l) ? (l.on("complete", o), l.on("abort", r), l.req ? a() : l.on("request", a)) : v && !l._writableState && (l.on("end", y), l.on("close", y)), l.on("end", h), l.on("finish", o), !1 !== p.error && l.on("error", c), l.on("close", r),
                    function() {
                        l.removeListener("complete", o), l.removeListener("abort", r), l.removeListener("request", a), l.req && l.req.removeListener("finish", o), l.removeListener("end", y), l.removeListener("close", y), l.removeListener("finish", o), l.removeListener("end", h), l.removeListener("error", c), l.removeListener("close", r)
                    }
            }
        },
        57838: ve => {
            ve.exports = function() {
                throw new Error("Readable.from is not available in the browser")
            }
        },
        24346: (ve, e, A) => {
            "use strict";
            var s, w = A(29859).q,
                B = w.ERR_MISSING_ARGS,
                u = w.ERR_STREAM_DESTROYED;

            function l(o) {
                if (o) throw o
            }

            function R(o) {
                o()
            }

            function v(o, E) {
                return o.pipe(E)
            }
            ve.exports = function x() {
                for (var o = arguments.length, E = new Array(o), h = 0; h < o; h++) E[h] = arguments[h];
                var c = function y(o) {
                    return o.length && "function" == typeof o[o.length - 1] ? o.pop() : l
                }(E);
                if (Array.isArray(E[0]) && (E = E[0]), E.length < 2) throw new B("streams");
                var r, a = E.map(function(m, _) {
                    var U = _ < E.length - 1;
                    return function T(o, E, h, c) {
                        c = function d(o) {
                            var E = !1;
                            return function() {
                                E || (E = !0, o.apply(void 0, arguments))
                            }
                        }(c);
                        var r = !1;
                        o.on("close", function() {
                            r = !0
                        }), void 0 === s && (s = A(48554)), s(o, {
                            readable: E,
                            writable: h
                        }, function(m) {
                            if (m) return c(m);
                            r = !0, c()
                        });
                        var a = !1;
                        return function(m) {
                            if (!r && !a) {
                                if (a = !0, function p(o) {
                                        return o.setHeader && "function" == typeof o.abort
                                    }(o)) return o.abort();
                                if ("function" == typeof o.destroy) return o.destroy();
                                c(m || new u("pipe"))
                            }
                        }
                    }(m, U, _ > 0, function(D) {
                        r || (r = D), D && a.forEach(R), !U && (a.forEach(R), c(r))
                    })
                });
                return E.reduce(v)
            }
        },
        50210: (ve, e, A) => {
            "use strict";
            var s = A(29859).q.ERR_INVALID_OPT_VALUE;
            ve.exports = {
                getHighWaterMark: function w(B, u, l, p) {
                    var T = function d(B, u, l) {
                        return null != B.highWaterMark ? B.highWaterMark : u ? B[l] : null
                    }(u, p, l);
                    if (null != T) {
                        if (!isFinite(T) || Math.floor(T) !== T || T < 0) throw new s(p ? l : "highWaterMark", T);
                        return Math.floor(T)
                    }
                    return B.objectMode ? 16 : 16384
                }
            }
        },
        24663: (ve, e, A) => {
            ve.exports = A(82016).EventEmitter
        },
        62278: (ve, e, A) => {
            (e = ve.exports = A(35018)).Stream = e, e.Readable = e, e.Writable = A(22672), e.Duplex = A(11388), e.Transform = A(92180), e.PassThrough = A(10761), e.finished = A(48554), e.pipeline = A(24346)
        },
        14069: function(ve) {
            ! function(e, A) {
                "use strict";
                ve.exports ? ve.exports = A() : (e.nacl || (e.nacl = {}), e.nacl.util = A())
            }(this, function() {
                "use strict";
                var e = {};

                function A(s) {
                    if (!/^(?:[A-Za-z0-9+\/]{2}[A-Za-z0-9+\/]{2})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/.test(s)) throw new TypeError("invalid encoding")
                }
                return e.decodeUTF8 = function(s) {
                    if ("string" != typeof s) throw new TypeError("expected string");
                    var d, w = unescape(encodeURIComponent(s)),
                        B = new Uint8Array(w.length);
                    for (d = 0; d < w.length; d++) B[d] = w.charCodeAt(d);
                    return B
                }, e.encodeUTF8 = function(s) {
                    var d, w = [];
                    for (d = 0; d < s.length; d++) w.push(String.fromCharCode(s[d]));
                    return decodeURIComponent(escape(w.join("")))
                }, typeof atob > "u" ? typeof Buffer.from < "u" ? (e.encodeBase64 = function(s) {
                    return Buffer.from(s).toString("base64")
                }, e.decodeBase64 = function(s) {
                    return A(s), new Uint8Array(Array.prototype.slice.call(Buffer.from(s, "base64"), 0))
                }) : (e.encodeBase64 = function(s) {
                    return new Buffer(s).toString("base64")
                }, e.decodeBase64 = function(s) {
                    return A(s), new Uint8Array(Array.prototype.slice.call(new Buffer(s, "base64"), 0))
                }) : (e.encodeBase64 = function(s) {
                    var d, w = [],
                        B = s.length;
                    for (d = 0; d < B; d++) w.push(String.fromCharCode(s[d]));
                    return btoa(w.join(""))
                }, e.decodeBase64 = function(s) {
                    A(s);
                    var d, w = atob(s),
                        B = new Uint8Array(w.length);
                    for (d = 0; d < w.length; d++) B[d] = w.charCodeAt(d);
                    return B
                }), e
            })
        },
        76543: (ve, e, A) => {
            ! function(s) {
                "use strict";
                var d = function(I) {
                        var $, Z = new Float64Array(16);
                        if (I)
                            for ($ = 0; $ < I.length; $++) Z[$] = I[$];
                        return Z
                    },
                    w = function() {
                        throw new Error("no PRNG")
                    },
                    B = new Uint8Array(16),
                    u = new Uint8Array(32);
                u[0] = 9;
                var l = d(),
                    p = d([1]),
                    T = d([56129, 1]),
                    R = d([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]),
                    v = d([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222]),
                    y = d([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]),
                    x = d([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]),
                    o = d([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);

                function E(I, $, Z, f) {
                    I[$] = Z >> 24 & 255, I[$ + 1] = Z >> 16 & 255, I[$ + 2] = Z >> 8 & 255, I[$ + 3] = 255 & Z, I[$ + 4] = f >> 24 & 255, I[$ + 5] = f >> 16 & 255, I[$ + 6] = f >> 8 & 255, I[$ + 7] = 255 & f
                }

                function h(I, $, Z, f, ne) {
                    var Oe, Te = 0;
                    for (Oe = 0; Oe < ne; Oe++) Te |= I[$ + Oe] ^ Z[f + Oe];
                    return (1 & Te - 1 >>> 8) - 1
                }

                function c(I, $, Z, f) {
                    return h(I, $, Z, f, 16)
                }

                function r(I, $, Z, f) {
                    return h(I, $, Z, f, 32)
                }

                function _(I, $, Z, f) {
                    ! function a(I, $, Z, f) {
                        for (var ye, ne = 255 & f[0] | (255 & f[1]) << 8 | (255 & f[2]) << 16 | (255 & f[3]) << 24, Oe = 255 & Z[0] | (255 & Z[1]) << 8 | (255 & Z[2]) << 16 | (255 & Z[3]) << 24, Te = 255 & Z[4] | (255 & Z[5]) << 8 | (255 & Z[6]) << 16 | (255 & Z[7]) << 24, ze = 255 & Z[8] | (255 & Z[9]) << 8 | (255 & Z[10]) << 16 | (255 & Z[11]) << 24, Ge = 255 & Z[12] | (255 & Z[13]) << 8 | (255 & Z[14]) << 16 | (255 & Z[15]) << 24, tt = 255 & f[4] | (255 & f[5]) << 8 | (255 & f[6]) << 16 | (255 & f[7]) << 24, Ye = 255 & $[0] | (255 & $[1]) << 8 | (255 & $[2]) << 16 | (255 & $[3]) << 24, Rt = 255 & $[4] | (255 & $[5]) << 8 | (255 & $[6]) << 16 | (255 & $[7]) << 24, st = 255 & $[8] | (255 & $[9]) << 8 | (255 & $[10]) << 16 | (255 & $[11]) << 24, mt = 255 & $[12] | (255 & $[13]) << 8 | (255 & $[14]) << 16 | (255 & $[15]) << 24, vt = 255 & f[8] | (255 & f[9]) << 8 | (255 & f[10]) << 16 | (255 & f[11]) << 24, Ot = 255 & Z[16] | (255 & Z[17]) << 8 | (255 & Z[18]) << 16 | (255 & Z[19]) << 24, Tt = 255 & Z[20] | (255 & Z[21]) << 8 | (255 & Z[22]) << 16 | (255 & Z[23]) << 24, wt = 255 & Z[24] | (255 & Z[25]) << 8 | (255 & Z[26]) << 16 | (255 & Z[27]) << 24, _t = 255 & Z[28] | (255 & Z[29]) << 8 | (255 & Z[30]) << 16 | (255 & Z[31]) << 24, Et = 255 & f[12] | (255 & f[13]) << 8 | (255 & f[14]) << 16 | (255 & f[15]) << 24, ut = ne, bt = Oe, at = Te, dt = ze, lt = Ge, it = tt, De = Ye, He = Rt, Ke = st, $e = mt, Ve = vt, qe = Ot, ht = Tt, St = wt, Pt = _t, It = Et, Nt = 0; Nt < 20; Nt += 2) ut ^= (ye = (ht ^= (ye = (Ke ^= (ye = (lt ^= (ye = ut + ht | 0) << 7 | ye >>> 25) + ut | 0) << 9 | ye >>> 23) + lt | 0) << 13 | ye >>> 19) + Ke | 0) << 18 | ye >>> 14, it ^= (ye = (bt ^= (ye = (St ^= (ye = ($e ^= (ye = it + bt | 0) << 7 | ye >>> 25) + it | 0) << 9 | ye >>> 23) + $e | 0) << 13 | ye >>> 19) + St | 0) << 18 | ye >>> 14, Ve ^= (ye = (De ^= (ye = (at ^= (ye = (Pt ^= (ye = Ve + De | 0) << 7 | ye >>> 25) + Ve | 0) << 9 | ye >>> 23) + Pt | 0) << 13 | ye >>> 19) + at | 0) << 18 | ye >>> 14, It ^= (ye = (qe ^= (ye = (He ^= (ye = (dt ^= (ye = It + qe | 0) << 7 | ye >>> 25) + It | 0) << 9 | ye >>> 23) + dt | 0) << 13 | ye >>> 19) + He | 0) << 18 | ye >>> 14, ut ^= (ye = (dt ^= (ye = (at ^= (ye = (bt ^= (ye = ut + dt | 0) << 7 | ye >>> 25) + ut | 0) << 9 | ye >>> 23) + bt | 0) << 13 | ye >>> 19) + at | 0) << 18 | ye >>> 14, it ^= (ye = (lt ^= (ye = (He ^= (ye = (De ^= (ye = it + lt | 0) << 7 | ye >>> 25) + it | 0) << 9 | ye >>> 23) + De | 0) << 13 | ye >>> 19) + He | 0) << 18 | ye >>> 14, Ve ^= (ye = ($e ^= (ye = (Ke ^= (ye = (qe ^= (ye = Ve + $e | 0) << 7 | ye >>> 25) + Ve | 0) << 9 | ye >>> 23) + qe | 0) << 13 | ye >>> 19) + Ke | 0) << 18 | ye >>> 14, It ^= (ye = (Pt ^= (ye = (St ^= (ye = (ht ^= (ye = It + Pt | 0) << 7 | ye >>> 25) + It | 0) << 9 | ye >>> 23) + ht | 0) << 13 | ye >>> 19) + St | 0) << 18 | ye >>> 14;
                        bt = bt + Oe | 0, at = at + Te | 0, dt = dt + ze | 0, lt = lt + Ge | 0, it = it + tt | 0, De = De + Ye | 0, He = He + Rt | 0, Ke = Ke + st | 0, $e = $e + mt | 0, Ve = Ve + vt | 0, qe = qe + Ot | 0, ht = ht + Tt | 0, St = St + wt | 0, Pt = Pt + _t | 0, It = It + Et | 0, I[0] = (ut = ut + ne | 0) >>> 0 & 255, I[1] = ut >>> 8 & 255, I[2] = ut >>> 16 & 255, I[3] = ut >>> 24 & 255, I[4] = bt >>> 0 & 255, I[5] = bt >>> 8 & 255, I[6] = bt >>> 16 & 255, I[7] = bt >>> 24 & 255, I[8] = at >>> 0 & 255, I[9] = at >>> 8 & 255, I[10] = at >>> 16 & 255, I[11] = at >>> 24 & 255, I[12] = dt >>> 0 & 255, I[13] = dt >>> 8 & 255, I[14] = dt >>> 16 & 255, I[15] = dt >>> 24 & 255, I[16] = lt >>> 0 & 255, I[17] = lt >>> 8 & 255, I[18] = lt >>> 16 & 255, I[19] = lt >>> 24 & 255, I[20] = it >>> 0 & 255, I[21] = it >>> 8 & 255, I[22] = it >>> 16 & 255, I[23] = it >>> 24 & 255, I[24] = De >>> 0 & 255, I[25] = De >>> 8 & 255, I[26] = De >>> 16 & 255, I[27] = De >>> 24 & 255, I[28] = He >>> 0 & 255, I[29] = He >>> 8 & 255, I[30] = He >>> 16 & 255, I[31] = He >>> 24 & 255, I[32] = Ke >>> 0 & 255, I[33] = Ke >>> 8 & 255, I[34] = Ke >>> 16 & 255, I[35] = Ke >>> 24 & 255, I[36] = $e >>> 0 & 255, I[37] = $e >>> 8 & 255, I[38] = $e >>> 16 & 255, I[39] = $e >>> 24 & 255, I[40] = Ve >>> 0 & 255, I[41] = Ve >>> 8 & 255, I[42] = Ve >>> 16 & 255, I[43] = Ve >>> 24 & 255, I[44] = qe >>> 0 & 255, I[45] = qe >>> 8 & 255, I[46] = qe >>> 16 & 255, I[47] = qe >>> 24 & 255, I[48] = ht >>> 0 & 255, I[49] = ht >>> 8 & 255, I[50] = ht >>> 16 & 255, I[51] = ht >>> 24 & 255, I[52] = St >>> 0 & 255, I[53] = St >>> 8 & 255, I[54] = St >>> 16 & 255, I[55] = St >>> 24 & 255, I[56] = Pt >>> 0 & 255, I[57] = Pt >>> 8 & 255, I[58] = Pt >>> 16 & 255, I[59] = Pt >>> 24 & 255, I[60] = It >>> 0 & 255, I[61] = It >>> 8 & 255, I[62] = It >>> 16 & 255, I[63] = It >>> 24 & 255
                    }(I, $, Z, f)
                }

                function U(I, $, Z, f) {
                    ! function m(I, $, Z, f) {
                        for (var ye, ut = 255 & f[0] | (255 & f[1]) << 8 | (255 & f[2]) << 16 | (255 & f[3]) << 24, bt = 255 & Z[0] | (255 & Z[1]) << 8 | (255 & Z[2]) << 16 | (255 & Z[3]) << 24, at = 255 & Z[4] | (255 & Z[5]) << 8 | (255 & Z[6]) << 16 | (255 & Z[7]) << 24, dt = 255 & Z[8] | (255 & Z[9]) << 8 | (255 & Z[10]) << 16 | (255 & Z[11]) << 24, lt = 255 & Z[12] | (255 & Z[13]) << 8 | (255 & Z[14]) << 16 | (255 & Z[15]) << 24, it = 255 & f[4] | (255 & f[5]) << 8 | (255 & f[6]) << 16 | (255 & f[7]) << 24, De = 255 & $[0] | (255 & $[1]) << 8 | (255 & $[2]) << 16 | (255 & $[3]) << 24, He = 255 & $[4] | (255 & $[5]) << 8 | (255 & $[6]) << 16 | (255 & $[7]) << 24, Ke = 255 & $[8] | (255 & $[9]) << 8 | (255 & $[10]) << 16 | (255 & $[11]) << 24, $e = 255 & $[12] | (255 & $[13]) << 8 | (255 & $[14]) << 16 | (255 & $[15]) << 24, Ve = 255 & f[8] | (255 & f[9]) << 8 | (255 & f[10]) << 16 | (255 & f[11]) << 24, qe = 255 & Z[16] | (255 & Z[17]) << 8 | (255 & Z[18]) << 16 | (255 & Z[19]) << 24, ht = 255 & Z[20] | (255 & Z[21]) << 8 | (255 & Z[22]) << 16 | (255 & Z[23]) << 24, St = 255 & Z[24] | (255 & Z[25]) << 8 | (255 & Z[26]) << 16 | (255 & Z[27]) << 24, Pt = 255 & Z[28] | (255 & Z[29]) << 8 | (255 & Z[30]) << 16 | (255 & Z[31]) << 24, It = 255 & f[12] | (255 & f[13]) << 8 | (255 & f[14]) << 16 | (255 & f[15]) << 24, Nt = 0; Nt < 20; Nt += 2) ut ^= (ye = (ht ^= (ye = (Ke ^= (ye = (lt ^= (ye = ut + ht | 0) << 7 | ye >>> 25) + ut | 0) << 9 | ye >>> 23) + lt | 0) << 13 | ye >>> 19) + Ke | 0) << 18 | ye >>> 14, it ^= (ye = (bt ^= (ye = (St ^= (ye = ($e ^= (ye = it + bt | 0) << 7 | ye >>> 25) + it | 0) << 9 | ye >>> 23) + $e | 0) << 13 | ye >>> 19) + St | 0) << 18 | ye >>> 14, Ve ^= (ye = (De ^= (ye = (at ^= (ye = (Pt ^= (ye = Ve + De | 0) << 7 | ye >>> 25) + Ve | 0) << 9 | ye >>> 23) + Pt | 0) << 13 | ye >>> 19) + at | 0) << 18 | ye >>> 14, It ^= (ye = (qe ^= (ye = (He ^= (ye = (dt ^= (ye = It + qe | 0) << 7 | ye >>> 25) + It | 0) << 9 | ye >>> 23) + dt | 0) << 13 | ye >>> 19) + He | 0) << 18 | ye >>> 14, ut ^= (ye = (dt ^= (ye = (at ^= (ye = (bt ^= (ye = ut + dt | 0) << 7 | ye >>> 25) + ut | 0) << 9 | ye >>> 23) + bt | 0) << 13 | ye >>> 19) + at | 0) << 18 | ye >>> 14, it ^= (ye = (lt ^= (ye = (He ^= (ye = (De ^= (ye = it + lt | 0) << 7 | ye >>> 25) + it | 0) << 9 | ye >>> 23) + De | 0) << 13 | ye >>> 19) + He | 0) << 18 | ye >>> 14, Ve ^= (ye = ($e ^= (ye = (Ke ^= (ye = (qe ^= (ye = Ve + $e | 0) << 7 | ye >>> 25) + Ve | 0) << 9 | ye >>> 23) + qe | 0) << 13 | ye >>> 19) + Ke | 0) << 18 | ye >>> 14, It ^= (ye = (Pt ^= (ye = (St ^= (ye = (ht ^= (ye = It + Pt | 0) << 7 | ye >>> 25) + It | 0) << 9 | ye >>> 23) + ht | 0) << 13 | ye >>> 19) + St | 0) << 18 | ye >>> 14;
                        I[0] = ut >>> 0 & 255, I[1] = ut >>> 8 & 255, I[2] = ut >>> 16 & 255, I[3] = ut >>> 24 & 255, I[4] = it >>> 0 & 255, I[5] = it >>> 8 & 255, I[6] = it >>> 16 & 255, I[7] = it >>> 24 & 255, I[8] = Ve >>> 0 & 255, I[9] = Ve >>> 8 & 255, I[10] = Ve >>> 16 & 255, I[11] = Ve >>> 24 & 255, I[12] = It >>> 0 & 255, I[13] = It >>> 8 & 255, I[14] = It >>> 16 & 255, I[15] = It >>> 24 & 255, I[16] = De >>> 0 & 255, I[17] = De >>> 8 & 255, I[18] = De >>> 16 & 255, I[19] = De >>> 24 & 255, I[20] = He >>> 0 & 255, I[21] = He >>> 8 & 255, I[22] = He >>> 16 & 255, I[23] = He >>> 24 & 255, I[24] = Ke >>> 0 & 255, I[25] = Ke >>> 8 & 255, I[26] = Ke >>> 16 & 255, I[27] = Ke >>> 24 & 255, I[28] = $e >>> 0 & 255, I[29] = $e >>> 8 & 255, I[30] = $e >>> 16 & 255, I[31] = $e >>> 24 & 255
                    }(I, $, Z, f)
                }
                var S = new Uint8Array([101, 120, 112, 97, 110, 100, 32, 51, 50, 45, 98, 121, 116, 101, 32, 107]);

                function D(I, $, Z, f, ne, Oe, Te) {
                    var tt, Ye, ze = new Uint8Array(16),
                        Ge = new Uint8Array(64);
                    for (Ye = 0; Ye < 16; Ye++) ze[Ye] = 0;
                    for (Ye = 0; Ye < 8; Ye++) ze[Ye] = Oe[Ye];
                    for (; ne >= 64;) {
                        for (_(Ge, ze, Te, S), Ye = 0; Ye < 64; Ye++) I[$ + Ye] = Z[f + Ye] ^ Ge[Ye];
                        for (tt = 1, Ye = 8; Ye < 16; Ye++) ze[Ye] = 255 & (tt = tt + (255 & ze[Ye]) | 0), tt >>>= 8;
                        ne -= 64, $ += 64, f += 64
                    }
                    if (ne > 0)
                        for (_(Ge, ze, Te, S), Ye = 0; Ye < ne; Ye++) I[$ + Ye] = Z[f + Ye] ^ Ge[Ye];
                    return 0
                }

                function M(I, $, Z, f, ne) {
                    var ze, Ge, Oe = new Uint8Array(16),
                        Te = new Uint8Array(64);
                    for (Ge = 0; Ge < 16; Ge++) Oe[Ge] = 0;
                    for (Ge = 0; Ge < 8; Ge++) Oe[Ge] = f[Ge];
                    for (; Z >= 64;) {
                        for (_(Te, Oe, ne, S), Ge = 0; Ge < 64; Ge++) I[$ + Ge] = Te[Ge];
                        for (ze = 1, Ge = 8; Ge < 16; Ge++) Oe[Ge] = 255 & (ze = ze + (255 & Oe[Ge]) | 0), ze >>>= 8;
                        Z -= 64, $ += 64
                    }
                    if (Z > 0)
                        for (_(Te, Oe, ne, S), Ge = 0; Ge < Z; Ge++) I[$ + Ge] = Te[Ge];
                    return 0
                }

                function fe(I, $, Z, f, ne) {
                    var Oe = new Uint8Array(32);
                    U(Oe, f, ne, S);
                    for (var Te = new Uint8Array(8), ze = 0; ze < 8; ze++) Te[ze] = f[ze + 16];
                    return M(I, $, Z, Te, Oe)
                }

                function Se(I, $, Z, f, ne, Oe, Te) {
                    var ze = new Uint8Array(32);
                    U(ze, Oe, Te, S);
                    for (var Ge = new Uint8Array(8), tt = 0; tt < 8; tt++) Ge[tt] = Oe[tt + 16];
                    return D(I, $, Z, f, ne, Ge, ze)
                }
                var _e = function(I) {
                    var $, Z, f, ne, Oe, Te, ze, Ge;
                    this.buffer = new Uint8Array(16), this.r = new Uint16Array(10), this.h = new Uint16Array(10), this.pad = new Uint16Array(8), this.leftover = 0, this.fin = 0, this.r[0] = 8191 & ($ = 255 & I[0] | (255 & I[1]) << 8), this.r[1] = 8191 & ($ >>> 13 | (Z = 255 & I[2] | (255 & I[3]) << 8) << 3), this.r[2] = 7939 & (Z >>> 10 | (f = 255 & I[4] | (255 & I[5]) << 8) << 6), this.r[3] = 8191 & (f >>> 7 | (ne = 255 & I[6] | (255 & I[7]) << 8) << 9), this.r[4] = 255 & (ne >>> 4 | (Oe = 255 & I[8] | (255 & I[9]) << 8) << 12), this.r[5] = Oe >>> 1 & 8190, this.r[6] = 8191 & (Oe >>> 14 | (Te = 255 & I[10] | (255 & I[11]) << 8) << 2), this.r[7] = 8065 & (Te >>> 11 | (ze = 255 & I[12] | (255 & I[13]) << 8) << 5), this.r[8] = 8191 & (ze >>> 8 | (Ge = 255 & I[14] | (255 & I[15]) << 8) << 8), this.r[9] = Ge >>> 5 & 127, this.pad[0] = 255 & I[16] | (255 & I[17]) << 8, this.pad[1] = 255 & I[18] | (255 & I[19]) << 8, this.pad[2] = 255 & I[20] | (255 & I[21]) << 8, this.pad[3] = 255 & I[22] | (255 & I[23]) << 8, this.pad[4] = 255 & I[24] | (255 & I[25]) << 8, this.pad[5] = 255 & I[26] | (255 & I[27]) << 8, this.pad[6] = 255 & I[28] | (255 & I[29]) << 8, this.pad[7] = 255 & I[30] | (255 & I[31]) << 8
                };

                function O(I, $, Z, f, ne, Oe) {
                    var Te = new _e(Oe);
                    return Te.update(Z, f, ne), Te.finish(I, $), 0
                }

                function P(I, $, Z, f, ne, Oe) {
                    var Te = new Uint8Array(16);
                    return O(Te, 0, Z, f, ne, Oe), c(I, $, Te, 0)
                }

                function C(I, $, Z, f, ne) {
                    var Oe;
                    if (Z < 32) return -1;
                    for (Se(I, 0, $, 0, Z, f, ne), O(I, 16, I, 32, Z - 32, I), Oe = 0; Oe < 16; Oe++) I[Oe] = 0;
                    return 0
                }

                function ae(I, $, Z, f, ne) {
                    var Oe, Te = new Uint8Array(32);
                    if (Z < 32 || (fe(Te, 0, 32, f, ne), 0 !== P($, 16, $, 32, Z - 32, Te))) return -1;
                    for (Se(I, 0, $, 0, Z, f, ne), Oe = 0; Oe < 32; Oe++) I[Oe] = 0;
                    return 0
                }

                function J(I, $) {
                    var Z;
                    for (Z = 0; Z < 16; Z++) I[Z] = 0 | $[Z]
                }

                function re(I) {
                    var $, Z, f = 1;
                    for ($ = 0; $ < 16; $++) Z = I[$] + f + 65535, f = Math.floor(Z / 65536), I[$] = Z - 65536 * f;
                    I[0] += f - 1 + 37 * (f - 1)
                }

                function Y(I, $, Z) {
                    for (var f, ne = ~(Z - 1), Oe = 0; Oe < 16; Oe++) I[Oe] ^= f = ne & (I[Oe] ^ $[Oe]), $[Oe] ^= f
                }

                function te(I, $) {
                    var Z, f, ne, Oe = d(),
                        Te = d();
                    for (Z = 0; Z < 16; Z++) Te[Z] = $[Z];
                    for (re(Te), re(Te), re(Te), f = 0; f < 2; f++) {
                        for (Oe[0] = Te[0] - 65517, Z = 1; Z < 15; Z++) Oe[Z] = Te[Z] - 65535 - (Oe[Z - 1] >> 16 & 1), Oe[Z - 1] &= 65535;
                        Oe[15] = Te[15] - 32767 - (Oe[14] >> 16 & 1), ne = Oe[15] >> 16 & 1, Oe[14] &= 65535, Y(Te, Oe, 1 - ne)
                    }
                    for (Z = 0; Z < 16; Z++) I[2 * Z] = 255 & Te[Z], I[2 * Z + 1] = Te[Z] >> 8
                }

                function F(I, $) {
                    var Z = new Uint8Array(32),
                        f = new Uint8Array(32);
                    return te(Z, I), te(f, $), r(Z, 0, f, 0)
                }

                function se(I) {
                    var $ = new Uint8Array(32);
                    return te($, I), 1 & $[0]
                }

                function V(I, $) {
                    var Z;
                    for (Z = 0; Z < 16; Z++) I[Z] = $[2 * Z] + ($[2 * Z + 1] << 8);
                    I[15] &= 32767
                }

                function q(I, $, Z) {
                    for (var f = 0; f < 16; f++) I[f] = $[f] + Z[f]
                }

                function H(I, $, Z) {
                    for (var f = 0; f < 16; f++) I[f] = $[f] - Z[f]
                }

                function ce(I, $, Z) {
                    var f, ne, Oe = 0,
                        Te = 0,
                        ze = 0,
                        Ge = 0,
                        tt = 0,
                        Ye = 0,
                        Rt = 0,
                        st = 0,
                        mt = 0,
                        vt = 0,
                        Ot = 0,
                        Tt = 0,
                        wt = 0,
                        _t = 0,
                        Et = 0,
                        ut = 0,
                        bt = 0,
                        at = 0,
                        dt = 0,
                        lt = 0,
                        it = 0,
                        De = 0,
                        He = 0,
                        Ke = 0,
                        $e = 0,
                        Ve = 0,
                        qe = 0,
                        ht = 0,
                        St = 0,
                        Pt = 0,
                        It = 0,
                        ye = Z[0],
                        Nt = Z[1],
                        Dt = Z[2],
                        Ht = Z[3],
                        Ct = Z[4],
                        Mt = Z[5],
                        Ft = Z[6],
                        Wt = Z[7],
                        Ut = Z[8],
                        Yt = Z[9],
                        Kt = Z[10],
                        qt = Z[11],
                        Qt = Z[12],
                        tr = Z[13],
                        ir = Z[14],
                        ar = Z[15];
                    Oe += (f = $[0]) * ye, Te += f * Nt, ze += f * Dt, Ge += f * Ht, tt += f * Ct, Ye += f * Mt, Rt += f * Ft, st += f * Wt, mt += f * Ut, vt += f * Yt, Ot += f * Kt, Tt += f * qt, wt += f * Qt, _t += f * tr, Et += f * ir, ut += f * ar, Te += (f = $[1]) * ye, ze += f * Nt, Ge += f * Dt, tt += f * Ht, Ye += f * Ct, Rt += f * Mt, st += f * Ft, mt += f * Wt, vt += f * Ut, Ot += f * Yt, Tt += f * Kt, wt += f * qt, _t += f * Qt, Et += f * tr, ut += f * ir, bt += f * ar, ze += (f = $[2]) * ye, Ge += f * Nt, tt += f * Dt, Ye += f * Ht, Rt += f * Ct, st += f * Mt, mt += f * Ft, vt += f * Wt, Ot += f * Ut, Tt += f * Yt, wt += f * Kt, _t += f * qt, Et += f * Qt, ut += f * tr, bt += f * ir, at += f * ar, Ge += (f = $[3]) * ye, tt += f * Nt, Ye += f * Dt, Rt += f * Ht, st += f * Ct, mt += f * Mt, vt += f * Ft, Ot += f * Wt, Tt += f * Ut, wt += f * Yt, _t += f * Kt, Et += f * qt, ut += f * Qt, bt += f * tr, at += f * ir, dt += f * ar, tt += (f = $[4]) * ye, Ye += f * Nt, Rt += f * Dt, st += f * Ht, mt += f * Ct, vt += f * Mt, Ot += f * Ft, Tt += f * Wt, wt += f * Ut, _t += f * Yt, Et += f * Kt, ut += f * qt, bt += f * Qt, at += f * tr, dt += f * ir, lt += f * ar, Ye += (f = $[5]) * ye, Rt += f * Nt, st += f * Dt, mt += f * Ht, vt += f * Ct, Ot += f * Mt, Tt += f * Ft, wt += f * Wt, _t += f * Ut, Et += f * Yt, ut += f * Kt, bt += f * qt, at += f * Qt, dt += f * tr, lt += f * ir, it += f * ar, Rt += (f = $[6]) * ye, st += f * Nt, mt += f * Dt, vt += f * Ht, Ot += f * Ct, Tt += f * Mt, wt += f * Ft, _t += f * Wt, Et += f * Ut, ut += f * Yt, bt += f * Kt, at += f * qt, dt += f * Qt, lt += f * tr, it += f * ir, De += f * ar, st += (f = $[7]) * ye, mt += f * Nt, vt += f * Dt, Ot += f * Ht, Tt += f * Ct, wt += f * Mt, _t += f * Ft, Et += f * Wt, ut += f * Ut, bt += f * Yt, at += f * Kt, dt += f * qt, lt += f * Qt, it += f * tr, De += f * ir, He += f * ar, mt += (f = $[8]) * ye, vt += f * Nt, Ot += f * Dt, Tt += f * Ht, wt += f * Ct, _t += f * Mt, Et += f * Ft, ut += f * Wt, bt += f * Ut, at += f * Yt, dt += f * Kt, lt += f * qt, it += f * Qt, De += f * tr, He += f * ir, Ke += f * ar, vt += (f = $[9]) * ye, Ot += f * Nt, Tt += f * Dt, wt += f * Ht, _t += f * Ct, Et += f * Mt, ut += f * Ft, bt += f * Wt, at += f * Ut, dt += f * Yt, lt += f * Kt, it += f * qt, De += f * Qt, He += f * tr, Ke += f * ir, $e += f * ar, Ot += (f = $[10]) * ye, Tt += f * Nt, wt += f * Dt, _t += f * Ht, Et += f * Ct, ut += f * Mt, bt += f * Ft, at += f * Wt, dt += f * Ut, lt += f * Yt, it += f * Kt, De += f * qt, He += f * Qt, Ke += f * tr, $e += f * ir, Ve += f * ar, Tt += (f = $[11]) * ye, wt += f * Nt, _t += f * Dt, Et += f * Ht, ut += f * Ct, bt += f * Mt, at += f * Ft, dt += f * Wt, lt += f * Ut, it += f * Yt, De += f * Kt, He += f * qt, Ke += f * Qt, $e += f * tr, Ve += f * ir, qe += f * ar, wt += (f = $[12]) * ye, _t += f * Nt, Et += f * Dt, ut += f * Ht, bt += f * Ct, at += f * Mt, dt += f * Ft, lt += f * Wt, it += f * Ut, De += f * Yt, He += f * Kt, Ke += f * qt, $e += f * Qt, Ve += f * tr, qe += f * ir, ht += f * ar, _t += (f = $[13]) * ye, Et += f * Nt, ut += f * Dt, bt += f * Ht, at += f * Ct, dt += f * Mt, lt += f * Ft, it += f * Wt, De += f * Ut, He += f * Yt, Ke += f * Kt, $e += f * qt, Ve += f * Qt, qe += f * tr, ht += f * ir, St += f * ar, Et += (f = $[14]) * ye, ut += f * Nt, bt += f * Dt, at += f * Ht, dt += f * Ct, lt += f * Mt, it += f * Ft, De += f * Wt, He += f * Ut, Ke += f * Yt, $e += f * Kt, Ve += f * qt, qe += f * Qt, ht += f * tr, St += f * ir, Pt += f * ar, ut += (f = $[15]) * ye, Te += 38 * (at += f * Dt), ze += 38 * (dt += f * Ht), Ge += 38 * (lt += f * Ct), tt += 38 * (it += f * Mt), Ye += 38 * (De += f * Ft), Rt += 38 * (He += f * Wt), st += 38 * (Ke += f * Ut), mt += 38 * ($e += f * Yt), vt += 38 * (Ve += f * Kt), Ot += 38 * (qe += f * qt), Tt += 38 * (ht += f * Qt), wt += 38 * (St += f * tr), _t += 38 * (Pt += f * ir), Et += 38 * (It += f * ar), Oe = (f = (Oe += 38 * (bt += f * Nt)) + (ne = 1) + 65535) - 65536 * (ne = Math.floor(f / 65536)), Te = (f = Te + ne + 65535) - 65536 * (ne = Math.floor(f / 65536)), ze = (f = ze + ne + 65535) - 65536 * (ne = Math.floor(f / 65536)), Ge = (f = Ge + ne + 65535) - 65536 * (ne = Math.floor(f / 65536)), tt = (f = tt + ne + 65535) - 65536 * (ne = Math.floor(f / 65536)), Ye = (f = Ye + ne + 65535) - 65536 * (ne = Math.floor(f / 65536)), Rt = (f = Rt + ne + 65535) - 65536 * (ne = Math.floor(f / 65536)), st = (f = st + ne + 65535) - 65536 * (ne = Math.floor(f / 65536)), mt = (f = mt + ne + 65535) - 65536 * (ne = Math.floor(f / 65536)), vt = (f = vt + ne + 65535) - 65536 * (ne = Math.floor(f / 65536)), Ot = (f = Ot + ne + 65535) - 65536 * (ne = Math.floor(f / 65536)), Tt = (f = Tt + ne + 65535) - 65536 * (ne = Math.floor(f / 65536)), wt = (f = wt + ne + 65535) - 65536 * (ne = Math.floor(f / 65536)), _t = (f = _t + ne + 65535) - 65536 * (ne = Math.floor(f / 65536)), Et = (f = Et + ne + 65535) - 65536 * (ne = Math.floor(f / 65536)), ut = (f = ut + ne + 65535) - 65536 * (ne = Math.floor(f / 65536)), Oe = (f = (Oe += ne - 1 + 37 * (ne - 1)) + (ne = 1) + 65535) - 65536 * (ne = Math.floor(f / 65536)), Te = (f = Te + ne + 65535) - 65536 * (ne = Math.floor(f / 65536)), ze = (f = ze + ne + 65535) - 65536 * (ne = Math.floor(f / 65536)), Ge = (f = Ge + ne + 65535) - 65536 * (ne = Math.floor(f / 65536)), tt = (f = tt + ne + 65535) - 65536 * (ne = Math.floor(f / 65536)), Ye = (f = Ye + ne + 65535) - 65536 * (ne = Math.floor(f / 65536)), Rt = (f = Rt + ne + 65535) - 65536 * (ne = Math.floor(f / 65536)), st = (f = st + ne + 65535) - 65536 * (ne = Math.floor(f / 65536)), mt = (f = mt + ne + 65535) - 65536 * (ne = Math.floor(f / 65536)), vt = (f = vt + ne + 65535) - 65536 * (ne = Math.floor(f / 65536)), Ot = (f = Ot + ne + 65535) - 65536 * (ne = Math.floor(f / 65536)), Tt = (f = Tt + ne + 65535) - 65536 * (ne = Math.floor(f / 65536)), wt = (f = wt + ne + 65535) - 65536 * (ne = Math.floor(f / 65536)), _t = (f = _t + ne + 65535) - 65536 * (ne = Math.floor(f / 65536)), Et = (f = Et + ne + 65535) - 65536 * (ne = Math.floor(f / 65536)), ut = (f = ut + ne + 65535) - 65536 * (ne = Math.floor(f / 65536)), I[0] = Oe += ne - 1 + 37 * (ne - 1), I[1] = Te, I[2] = ze, I[3] = Ge, I[4] = tt, I[5] = Ye, I[6] = Rt, I[7] = st, I[8] = mt, I[9] = vt, I[10] = Ot, I[11] = Tt, I[12] = wt, I[13] = _t, I[14] = Et, I[15] = ut
                }

                function Ee(I, $) {
                    ce(I, $, $)
                }

                function Le(I, $) {
                    var f, Z = d();
                    for (f = 0; f < 16; f++) Z[f] = $[f];
                    for (f = 253; f >= 0; f--) Ee(Z, Z), 2 !== f && 4 !== f && ce(Z, Z, $);
                    for (f = 0; f < 16; f++) I[f] = Z[f]
                }

                function oe(I, $) {
                    var f, Z = d();
                    for (f = 0; f < 16; f++) Z[f] = $[f];
                    for (f = 250; f >= 0; f--) Ee(Z, Z), 1 !== f && ce(Z, Z, $);
                    for (f = 0; f < 16; f++) I[f] = Z[f]
                }

                function Q(I, $, Z) {
                    var Oe, Te, f = new Uint8Array(32),
                        ne = new Float64Array(80),
                        ze = d(),
                        Ge = d(),
                        tt = d(),
                        Ye = d(),
                        Rt = d(),
                        st = d();
                    for (Te = 0; Te < 31; Te++) f[Te] = $[Te];
                    for (f[31] = 127 & $[31] | 64, f[0] &= 248, V(ne, Z), Te = 0; Te < 16; Te++) Ge[Te] = ne[Te], Ye[Te] = ze[Te] = tt[Te] = 0;
                    for (ze[0] = Ye[0] = 1, Te = 254; Te >= 0; --Te) Y(ze, Ge, Oe = f[Te >>> 3] >>> (7 & Te) & 1), Y(tt, Ye, Oe), q(Rt, ze, tt), H(ze, ze, tt), q(tt, Ge, Ye), H(Ge, Ge, Ye), Ee(Ye, Rt), Ee(st, ze), ce(ze, tt, ze), ce(tt, Ge, Rt), q(Rt, ze, tt), H(ze, ze, tt), Ee(Ge, ze), H(tt, Ye, st), ce(ze, tt, T), q(ze, ze, Ye), ce(tt, tt, ze), ce(ze, Ye, st), ce(Ye, Ge, ne), Ee(Ge, Rt), Y(ze, Ge, Oe), Y(tt, Ye, Oe);
                    for (Te = 0; Te < 16; Te++) ne[Te + 16] = ze[Te], ne[Te + 32] = tt[Te], ne[Te + 48] = Ge[Te], ne[Te + 64] = Ye[Te];
                    var mt = ne.subarray(32),
                        vt = ne.subarray(16);
                    return Le(mt, mt), ce(vt, vt, mt), te(I, vt), 0
                }

                function me(I, $) {
                    return Q(I, $, u)
                }

                function Ie(I, $) {
                    return w($, 32), me(I, $)
                }

                function Ze(I, $, Z) {
                    var f = new Uint8Array(32);
                    return Q(f, Z, $), U(I, B, f, S)
                }
                _e.prototype.blocks = function(I, $, Z) {
                    for (var ne, Oe, Te, ze, Ge, tt, Ye, Rt, st, mt, vt, Ot, Tt, wt, _t, Et, ut, bt, at, f = this.fin ? 0 : 2048, dt = this.h[0], lt = this.h[1], it = this.h[2], De = this.h[3], He = this.h[4], Ke = this.h[5], $e = this.h[6], Ve = this.h[7], qe = this.h[8], ht = this.h[9], St = this.r[0], Pt = this.r[1], It = this.r[2], ye = this.r[3], Nt = this.r[4], Dt = this.r[5], Ht = this.r[6], Ct = this.r[7], Mt = this.r[8], Ft = this.r[9]; Z >= 16;) mt = st = 0, mt += (dt += 8191 & (ne = 255 & I[$ + 0] | (255 & I[$ + 1]) << 8)) * St, mt += (lt += 8191 & (ne >>> 13 | (Oe = 255 & I[$ + 2] | (255 & I[$ + 3]) << 8) << 3)) * (5 * Ft), mt += (it += 8191 & (Oe >>> 10 | (Te = 255 & I[$ + 4] | (255 & I[$ + 5]) << 8) << 6)) * (5 * Mt), mt += (De += 8191 & (Te >>> 7 | (ze = 255 & I[$ + 6] | (255 & I[$ + 7]) << 8) << 9)) * (5 * Ct), st = (mt += (He += 8191 & (ze >>> 4 | (Ge = 255 & I[$ + 8] | (255 & I[$ + 9]) << 8) << 12)) * (5 * Ht)) >>> 13, mt &= 8191, mt += (Ke += Ge >>> 1 & 8191) * (5 * Dt), mt += ($e += 8191 & (Ge >>> 14 | (tt = 255 & I[$ + 10] | (255 & I[$ + 11]) << 8) << 2)) * (5 * Nt), mt += (Ve += 8191 & (tt >>> 11 | (Ye = 255 & I[$ + 12] | (255 & I[$ + 13]) << 8) << 5)) * (5 * ye), mt += (qe += 8191 & (Ye >>> 8 | (Rt = 255 & I[$ + 14] | (255 & I[$ + 15]) << 8) << 8)) * (5 * It), vt = st += (mt += (ht += Rt >>> 5 | f) * (5 * Pt)) >>> 13, vt += dt * Pt, vt += lt * St, vt += it * (5 * Ft), vt += De * (5 * Mt), st = (vt += He * (5 * Ct)) >>> 13, vt &= 8191, vt += Ke * (5 * Ht), vt += $e * (5 * Dt), vt += Ve * (5 * Nt), vt += qe * (5 * ye), st += (vt += ht * (5 * It)) >>> 13, vt &= 8191, Ot = st, Ot += dt * It, Ot += lt * Pt, Ot += it * St, Ot += De * (5 * Ft), st = (Ot += He * (5 * Mt)) >>> 13, Ot &= 8191, Ot += Ke * (5 * Ct), Ot += $e * (5 * Ht), Ot += Ve * (5 * Dt), Ot += qe * (5 * Nt), Tt = st += (Ot += ht * (5 * ye)) >>> 13, Tt += dt * ye, Tt += lt * It, Tt += it * Pt, Tt += De * St, st = (Tt += He * (5 * Ft)) >>> 13, Tt &= 8191, Tt += Ke * (5 * Mt), Tt += $e * (5 * Ct), Tt += Ve * (5 * Ht), Tt += qe * (5 * Dt), wt = st += (Tt += ht * (5 * Nt)) >>> 13, wt += dt * Nt, wt += lt * ye, wt += it * It, wt += De * Pt, st = (wt += He * St) >>> 13, wt &= 8191, wt += Ke * (5 * Ft), wt += $e * (5 * Mt), wt += Ve * (5 * Ct), wt += qe * (5 * Ht), _t = st += (wt += ht * (5 * Dt)) >>> 13, _t += dt * Dt, _t += lt * Nt, _t += it * ye, _t += De * It, st = (_t += He * Pt) >>> 13, _t &= 8191, _t += Ke * St, _t += $e * (5 * Ft), _t += Ve * (5 * Mt), _t += qe * (5 * Ct), Et = st += (_t += ht * (5 * Ht)) >>> 13, Et += dt * Ht, Et += lt * Dt, Et += it * Nt, Et += De * ye, st = (Et += He * It) >>> 13, Et &= 8191, Et += Ke * Pt, Et += $e * St, Et += Ve * (5 * Ft), Et += qe * (5 * Mt), ut = st += (Et += ht * (5 * Ct)) >>> 13, ut += dt * Ct, ut += lt * Ht, ut += it * Dt, ut += De * Nt, st = (ut += He * ye) >>> 13, ut &= 8191, ut += Ke * It, ut += $e * Pt, ut += Ve * St, ut += qe * (5 * Ft), bt = st += (ut += ht * (5 * Mt)) >>> 13, bt += dt * Mt, bt += lt * Ct, bt += it * Ht, bt += De * Dt, st = (bt += He * Nt) >>> 13, bt &= 8191, bt += Ke * ye, bt += $e * It, bt += Ve * Pt, bt += qe * St, at = st += (bt += ht * (5 * Ft)) >>> 13, at += dt * Ft, at += lt * Mt, at += it * Ct, at += De * Ht, st = (at += He * Dt) >>> 13, at &= 8191, at += Ke * Nt, at += $e * ye, at += Ve * It, at += qe * Pt, dt = mt = 8191 & (st = (st = ((st += (at += ht * St) >>> 13) << 2) + st | 0) + (mt &= 8191) | 0), lt = vt += st >>>= 13, it = Ot &= 8191, De = Tt &= 8191, He = wt &= 8191, Ke = _t &= 8191, $e = Et &= 8191, Ve = ut &= 8191, qe = bt &= 8191, ht = at &= 8191, $ += 16, Z -= 16;
                    this.h[0] = dt, this.h[1] = lt, this.h[2] = it, this.h[3] = De, this.h[4] = He, this.h[5] = Ke, this.h[6] = $e, this.h[7] = Ve, this.h[8] = qe, this.h[9] = ht
                }, _e.prototype.finish = function(I, $) {
                    var f, ne, Oe, Te, Z = new Uint16Array(10);
                    if (this.leftover) {
                        for (Te = this.leftover, this.buffer[Te++] = 1; Te < 16; Te++) this.buffer[Te] = 0;
                        this.fin = 1, this.blocks(this.buffer, 0, 16)
                    }
                    for (f = this.h[1] >>> 13, this.h[1] &= 8191, Te = 2; Te < 10; Te++) this.h[Te] += f, f = this.h[Te] >>> 13, this.h[Te] &= 8191;
                    for (this.h[0] += 5 * f, f = this.h[0] >>> 13, this.h[0] &= 8191, this.h[1] += f, f = this.h[1] >>> 13, this.h[1] &= 8191, this.h[2] += f, Z[0] = this.h[0] + 5, f = Z[0] >>> 13, Z[0] &= 8191, Te = 1; Te < 10; Te++) Z[Te] = this.h[Te] + f, f = Z[Te] >>> 13, Z[Te] &= 8191;
                    for (Z[9] -= 8192, ne = (1 ^ f) - 1, Te = 0; Te < 10; Te++) Z[Te] &= ne;
                    for (ne = ~ne, Te = 0; Te < 10; Te++) this.h[Te] = this.h[Te] & ne | Z[Te];
                    for (this.h[0] = 65535 & (this.h[0] | this.h[1] << 13), this.h[1] = 65535 & (this.h[1] >>> 3 | this.h[2] << 10), this.h[2] = 65535 & (this.h[2] >>> 6 | this.h[3] << 7), this.h[3] = 65535 & (this.h[3] >>> 9 | this.h[4] << 4), this.h[4] = 65535 & (this.h[4] >>> 12 | this.h[5] << 1 | this.h[6] << 14), this.h[5] = 65535 & (this.h[6] >>> 2 | this.h[7] << 11), this.h[6] = 65535 & (this.h[7] >>> 5 | this.h[8] << 8), this.h[7] = 65535 & (this.h[8] >>> 8 | this.h[9] << 5), this.h[0] = 65535 & (Oe = this.h[0] + this.pad[0]), Te = 1; Te < 8; Te++) this.h[Te] = 65535 & (Oe = (this.h[Te] + this.pad[Te] | 0) + (Oe >>> 16) | 0);
                    I[$ + 0] = this.h[0] >>> 0 & 255, I[$ + 1] = this.h[0] >>> 8 & 255, I[$ + 2] = this.h[1] >>> 0 & 255, I[$ + 3] = this.h[1] >>> 8 & 255, I[$ + 4] = this.h[2] >>> 0 & 255, I[$ + 5] = this.h[2] >>> 8 & 255, I[$ + 6] = this.h[3] >>> 0 & 255, I[$ + 7] = this.h[3] >>> 8 & 255, I[$ + 8] = this.h[4] >>> 0 & 255, I[$ + 9] = this.h[4] >>> 8 & 255, I[$ + 10] = this.h[5] >>> 0 & 255, I[$ + 11] = this.h[5] >>> 8 & 255, I[$ + 12] = this.h[6] >>> 0 & 255, I[$ + 13] = this.h[6] >>> 8 & 255, I[$ + 14] = this.h[7] >>> 0 & 255, I[$ + 15] = this.h[7] >>> 8 & 255
                }, _e.prototype.update = function(I, $, Z) {
                    var f, ne;
                    if (this.leftover) {
                        for ((ne = 16 - this.leftover) > Z && (ne = Z), f = 0; f < ne; f++) this.buffer[this.leftover + f] = I[$ + f];
                        if (Z -= ne, $ += ne, this.leftover += ne, this.leftover < 16) return;
                        this.blocks(this.buffer, 0, 16), this.leftover = 0
                    }
                    if (Z >= 16 && (this.blocks(I, $, ne = Z - Z % 16), $ += ne, Z -= ne), Z) {
                        for (f = 0; f < Z; f++) this.buffer[this.leftover + f] = I[$ + f];
                        this.leftover += Z
                    }
                };
                var N = C,
                    z = ae,
                    we = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];

                function Be(I, $, Z, f) {
                    for (var ze, Ge, Ye, Rt, st, mt, Ot, Tt, _t, Et, ut, bt, at, dt, lt, it, De, He, Ke, $e, Ve, qe, ne = new Int32Array(16), Oe = new Int32Array(16), ht = I[0], St = I[1], Pt = I[2], It = I[3], ye = I[4], Nt = I[5], Dt = I[6], Ht = I[7], Ct = $[0], Mt = $[1], Ft = $[2], Wt = $[3], Ut = $[4], Yt = $[5], Kt = $[6], qt = $[7], Qt = 0; f >= 128;) {
                        for (lt = 0; lt < 16; lt++) ne[lt] = Z[(it = 8 * lt + Qt) + 0] << 24 | Z[it + 1] << 16 | Z[it + 2] << 8 | Z[it + 3], Oe[lt] = Z[it + 4] << 24 | Z[it + 5] << 16 | Z[it + 6] << 8 | Z[it + 7];
                        for (lt = 0; lt < 80; lt++)
                            if (ze = St, Ge = Pt, Ye = ye, Rt = Nt, st = Dt, Ot = Mt, Tt = Ft, _t = Ut, Et = Yt, ut = Kt, Ke = 65535 & (He = qt), $e = He >>> 16, Ve = 65535 & (De = Ht), qe = De >>> 16, Ke += 65535 & (He = (Ut >>> 14 | ye << 18) ^ (Ut >>> 18 | ye << 14) ^ (ye >>> 9 | Ut << 23)), $e += He >>> 16, Ve += 65535 & (De = (ye >>> 14 | Ut << 18) ^ (ye >>> 18 | Ut << 14) ^ (Ut >>> 9 | ye << 23)), qe += De >>> 16, Ke += 65535 & (He = Ut & Yt ^ ~Ut & Kt), $e += He >>> 16, Ve += 65535 & (De = ye & Nt ^ ~ye & Dt), qe += De >>> 16, Ke += 65535 & (He = we[2 * lt + 1]), $e += He >>> 16, Ve += 65535 & (De = we[2 * lt]), qe += De >>> 16, $e += (He = Oe[lt % 16]) >>> 16, Ve += 65535 & (De = ne[lt % 16]), qe += De >>> 16, Ve += ($e += (Ke += 65535 & He) >>> 16) >>> 16, Ke = 65535 & (He = dt = 65535 & Ke | $e << 16), $e = He >>> 16, Ve = 65535 & (De = at = 65535 & Ve | (qe += Ve >>> 16) << 16), qe = De >>> 16, Ke += 65535 & (He = (Ct >>> 28 | ht << 4) ^ (ht >>> 2 | Ct << 30) ^ (ht >>> 7 | Ct << 25)), $e += He >>> 16, Ve += 65535 & (De = (ht >>> 28 | Ct << 4) ^ (Ct >>> 2 | ht << 30) ^ (Ct >>> 7 | ht << 25)), qe += De >>> 16, $e += (He = Ct & Mt ^ Ct & Ft ^ Mt & Ft) >>> 16, Ve += 65535 & (De = ht & St ^ ht & Pt ^ St & Pt), qe += De >>> 16, mt = 65535 & (Ve += ($e += (Ke += 65535 & He) >>> 16) >>> 16) | (qe += Ve >>> 16) << 16, bt = 65535 & Ke | $e << 16, Ke = 65535 & (He = Wt), $e = He >>> 16, Ve = 65535 & (De = It), qe = De >>> 16, $e += (He = dt) >>> 16, Ve += 65535 & (De = at), qe += De >>> 16, St = ht, Pt = ze, It = Ge, ye = 65535 & (Ve += ($e += (Ke += 65535 & He) >>> 16) >>> 16) | (qe += Ve >>> 16) << 16, Nt = Ye, Dt = Rt, Ht = st, ht = mt, Mt = Ct, Ft = Ot, Wt = Tt, Ut = 65535 & Ke | $e << 16, Yt = _t, Kt = Et, qt = ut, Ct = bt, lt % 16 == 15)
                                for (it = 0; it < 16; it++) Ke = 65535 & (He = Oe[it]), $e = He >>> 16, Ve = 65535 & (De = ne[it]), qe = De >>> 16, Ke += 65535 & (He = Oe[(it + 9) % 16]), $e += He >>> 16, Ve += 65535 & (De = ne[(it + 9) % 16]), qe += De >>> 16, Ke += 65535 & (He = ((dt = Oe[(it + 1) % 16]) >>> 1 | (at = ne[(it + 1) % 16]) << 31) ^ (dt >>> 8 | at << 24) ^ (dt >>> 7 | at << 25)), $e += He >>> 16, Ve += 65535 & (De = (at >>> 1 | dt << 31) ^ (at >>> 8 | dt << 24) ^ at >>> 7), qe += De >>> 16, $e += (He = ((dt = Oe[(it + 14) % 16]) >>> 19 | (at = ne[(it + 14) % 16]) << 13) ^ (at >>> 29 | dt << 3) ^ (dt >>> 6 | at << 26)) >>> 16, Ve += 65535 & (De = (at >>> 19 | dt << 13) ^ (dt >>> 29 | at << 3) ^ at >>> 6), qe += De >>> 16, ne[it] = 65535 & (Ve += ($e += (Ke += 65535 & He) >>> 16) >>> 16) | (qe += Ve >>> 16) << 16, Oe[it] = 65535 & Ke | $e << 16;
                        Ke = 65535 & (He = Ct), $e = He >>> 16, Ve = 65535 & (De = ht), qe = De >>> 16, $e += (He = $[0]) >>> 16, Ve += 65535 & (De = I[0]), qe += De >>> 16, I[0] = ht = 65535 & (Ve += ($e += (Ke += 65535 & He) >>> 16) >>> 16) | (qe += Ve >>> 16) << 16, $[0] = Ct = 65535 & Ke | $e << 16, Ke = 65535 & (He = Mt), $e = He >>> 16, Ve = 65535 & (De = St), qe = De >>> 16, $e += (He = $[1]) >>> 16, Ve += 65535 & (De = I[1]), qe += De >>> 16, I[1] = St = 65535 & (Ve += ($e += (Ke += 65535 & He) >>> 16) >>> 16) | (qe += Ve >>> 16) << 16, $[1] = Mt = 65535 & Ke | $e << 16, Ke = 65535 & (He = Ft), $e = He >>> 16, Ve = 65535 & (De = Pt), qe = De >>> 16, $e += (He = $[2]) >>> 16, Ve += 65535 & (De = I[2]), qe += De >>> 16, I[2] = Pt = 65535 & (Ve += ($e += (Ke += 65535 & He) >>> 16) >>> 16) | (qe += Ve >>> 16) << 16, $[2] = Ft = 65535 & Ke | $e << 16, Ke = 65535 & (He = Wt), $e = He >>> 16, Ve = 65535 & (De = It), qe = De >>> 16, $e += (He = $[3]) >>> 16, Ve += 65535 & (De = I[3]), qe += De >>> 16, I[3] = It = 65535 & (Ve += ($e += (Ke += 65535 & He) >>> 16) >>> 16) | (qe += Ve >>> 16) << 16, $[3] = Wt = 65535 & Ke | $e << 16, Ke = 65535 & (He = Ut), $e = He >>> 16, Ve = 65535 & (De = ye), qe = De >>> 16, $e += (He = $[4]) >>> 16, Ve += 65535 & (De = I[4]), qe += De >>> 16, I[4] = ye = 65535 & (Ve += ($e += (Ke += 65535 & He) >>> 16) >>> 16) | (qe += Ve >>> 16) << 16, $[4] = Ut = 65535 & Ke | $e << 16, Ke = 65535 & (He = Yt), $e = He >>> 16, Ve = 65535 & (De = Nt), qe = De >>> 16, $e += (He = $[5]) >>> 16, Ve += 65535 & (De = I[5]), qe += De >>> 16, I[5] = Nt = 65535 & (Ve += ($e += (Ke += 65535 & He) >>> 16) >>> 16) | (qe += Ve >>> 16) << 16, $[5] = Yt = 65535 & Ke | $e << 16, Ke = 65535 & (He = Kt), $e = He >>> 16, Ve = 65535 & (De = Dt), qe = De >>> 16, $e += (He = $[6]) >>> 16, Ve += 65535 & (De = I[6]), qe += De >>> 16, I[6] = Dt = 65535 & (Ve += ($e += (Ke += 65535 & He) >>> 16) >>> 16) | (qe += Ve >>> 16) << 16, $[6] = Kt = 65535 & Ke | $e << 16, Ke = 65535 & (He = qt), $e = He >>> 16, Ve = 65535 & (De = Ht), qe = De >>> 16, $e += (He = $[7]) >>> 16, Ve += 65535 & (De = I[7]), qe += De >>> 16, I[7] = Ht = 65535 & (Ve += ($e += (Ke += 65535 & He) >>> 16) >>> 16) | (qe += Ve >>> 16) << 16, $[7] = qt = 65535 & Ke | $e << 16, Qt += 128, f -= 128
                    }
                    return f
                }

                function he(I, $, Z) {
                    var Te, f = new Int32Array(8),
                        ne = new Int32Array(8),
                        Oe = new Uint8Array(256),
                        ze = Z;
                    for (f[0] = 1779033703, f[1] = 3144134277, f[2] = 1013904242, f[3] = 2773480762, f[4] = 1359893119, f[5] = 2600822924, f[6] = 528734635, f[7] = 1541459225, ne[0] = 4089235720, ne[1] = 2227873595, ne[2] = 4271175723, ne[3] = 1595750129, ne[4] = 2917565137, ne[5] = 725511199, ne[6] = 4215389547, ne[7] = 327033209, Be(f, ne, $, Z), Z %= 128, Te = 0; Te < Z; Te++) Oe[Te] = $[ze - Z + Te];
                    for (Oe[Z] = 128, Oe[(Z = 256 - 128 * (Z < 112 ? 1 : 0)) - 9] = 0, E(Oe, Z - 8, ze / 536870912 | 0, ze << 3), Be(f, ne, Oe, Z), Te = 0; Te < 8; Te++) E(I, 8 * Te, f[Te], ne[Te]);
                    return 0
                }

                function We(I, $) {
                    var Z = d(),
                        f = d(),
                        ne = d(),
                        Oe = d(),
                        Te = d(),
                        ze = d(),
                        Ge = d(),
                        tt = d(),
                        Ye = d();
                    H(Z, I[1], I[0]), H(Ye, $[1], $[0]), ce(Z, Z, Ye), q(f, I[0], I[1]), q(Ye, $[0], $[1]), ce(f, f, Ye), ce(ne, I[3], $[3]), ce(ne, ne, v), ce(Oe, I[2], $[2]), q(Oe, Oe, Oe), H(Te, f, Z), H(ze, Oe, ne), q(Ge, Oe, ne), q(tt, f, Z), ce(I[0], Te, ze), ce(I[1], tt, Ge), ce(I[2], Ge, ze), ce(I[3], Te, tt)
                }

                function gt(I, $, Z) {
                    var f;
                    for (f = 0; f < 4; f++) Y(I[f], $[f], Z)
                }

                function xt(I, $) {
                    var Z = d(),
                        f = d(),
                        ne = d();
                    Le(ne, $[2]), ce(Z, $[0], ne), ce(f, $[1], ne), te(I, f), I[31] ^= se(Z) << 7
                }

                function yt(I, $, Z) {
                    var f, ne;
                    for (J(I[0], l), J(I[1], p), J(I[2], p), J(I[3], l), ne = 255; ne >= 0; --ne) gt(I, $, f = Z[ne / 8 | 0] >> (7 & ne) & 1), We($, I), We(I, I), gt(I, $, f)
                }

                function At(I, $) {
                    var Z = [d(), d(), d(), d()];
                    J(Z[0], y), J(Z[1], x), J(Z[2], p), ce(Z[3], y, x), yt(I, Z, $)
                }

                function ge(I, $, Z) {
                    var Oe, f = new Uint8Array(64),
                        ne = [d(), d(), d(), d()];
                    for (Z || w($, 32), he(f, $, 32), f[0] &= 248, f[31] &= 127, f[31] |= 64, At(ne, f), xt(I, ne), Oe = 0; Oe < 32; Oe++) $[Oe + 32] = I[Oe];
                    return 0
                }
                var G = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);

                function ee(I, $) {
                    var Z, f, ne, Oe;
                    for (f = 63; f >= 32; --f) {
                        for (Z = 0, ne = f - 32, Oe = f - 12; ne < Oe; ++ne) $[ne] += Z - 16 * $[f] * G[ne - (f - 32)], Z = Math.floor(($[ne] + 128) / 256), $[ne] -= 256 * Z;
                        $[ne] += Z, $[f] = 0
                    }
                    for (Z = 0, ne = 0; ne < 32; ne++) $[ne] += Z - ($[31] >> 4) * G[ne], Z = $[ne] >> 8, $[ne] &= 255;
                    for (ne = 0; ne < 32; ne++) $[ne] -= Z * G[ne];
                    for (f = 0; f < 32; f++) $[f + 1] += $[f] >> 8, I[f] = 255 & $[f]
                }

                function xe(I) {
                    var Z, $ = new Float64Array(64);
                    for (Z = 0; Z < 64; Z++) $[Z] = I[Z];
                    for (Z = 0; Z < 64; Z++) I[Z] = 0;
                    ee(I, $)
                }

                function Ae(I, $, Z, f) {
                    var ze, Ge, ne = new Uint8Array(64),
                        Oe = new Uint8Array(64),
                        Te = new Uint8Array(64),
                        tt = new Float64Array(64),
                        Ye = [d(), d(), d(), d()];
                    he(ne, f, 32), ne[0] &= 248, ne[31] &= 127, ne[31] |= 64;
                    var Rt = Z + 64;
                    for (ze = 0; ze < Z; ze++) I[64 + ze] = $[ze];
                    for (ze = 0; ze < 32; ze++) I[32 + ze] = ne[32 + ze];
                    for (he(Te, I.subarray(32), Z + 32), xe(Te), At(Ye, Te), xt(I, Ye), ze = 32; ze < 64; ze++) I[ze] = f[ze];
                    for (he(Oe, I, Z + 64), xe(Oe), ze = 0; ze < 64; ze++) tt[ze] = 0;
                    for (ze = 0; ze < 32; ze++) tt[ze] = Te[ze];
                    for (ze = 0; ze < 32; ze++)
                        for (Ge = 0; Ge < 32; Ge++) tt[ze + Ge] += Oe[ze] * ne[Ge];
                    return ee(I.subarray(32), tt), Rt
                }

                function Qe(I, $, Z, f) {
                    var ne, Oe = new Uint8Array(32),
                        Te = new Uint8Array(64),
                        ze = [d(), d(), d(), d()],
                        Ge = [d(), d(), d(), d()];
                    if (Z < 64 || function je(I, $) {
                            var Z = d(),
                                f = d(),
                                ne = d(),
                                Oe = d(),
                                Te = d(),
                                ze = d(),
                                Ge = d();
                            return J(I[2], p), V(I[1], $), Ee(ne, I[1]), ce(Oe, ne, R), H(ne, ne, I[2]), q(Oe, I[2], Oe), Ee(Te, Oe), Ee(ze, Te), ce(Ge, ze, Te), ce(Z, Ge, ne), ce(Z, Z, Oe), oe(Z, Z), ce(Z, Z, ne), ce(Z, Z, Oe), ce(Z, Z, Oe), ce(I[0], Z, Oe), Ee(f, I[0]), ce(f, f, Oe), F(f, ne) && ce(I[0], I[0], o), Ee(f, I[0]), ce(f, f, Oe), F(f, ne) ? -1 : (se(I[0]) === $[31] >> 7 && H(I[0], l, I[0]), ce(I[3], I[0], I[1]), 0)
                        }(Ge, f)) return -1;
                    for (ne = 0; ne < Z; ne++) I[ne] = $[ne];
                    for (ne = 0; ne < 32; ne++) I[ne + 32] = f[ne];
                    if (he(Te, I, Z), xe(Te), yt(ze, Ge, Te), At(Ge, $.subarray(32)), We(ze, Ge), xt(Oe, ze), Z -= 64, r($, 0, Oe, 0)) {
                        for (ne = 0; ne < Z; ne++) I[ne] = 0;
                        return -1
                    }
                    for (ne = 0; ne < Z; ne++) I[ne] = $[ne + 64];
                    return Z
                }
                var I, W = 64;

                function nt(I, $) {
                    if (32 !== I.length) throw new Error("bad key size");
                    if (24 !== $.length) throw new Error("bad nonce size")
                }

                function Gt() {
                    for (var I = 0; I < arguments.length; I++)
                        if (!(arguments[I] instanceof Uint8Array)) throw new TypeError("unexpected type, use Uint8Array")
                }

                function jt(I) {
                    for (var $ = 0; $ < I.length; $++) I[$] = 0
                }
                s.lowlevel = {
                    crypto_core_hsalsa20: U,
                    crypto_stream_xor: Se,
                    crypto_stream: fe,
                    crypto_stream_salsa20_xor: D,
                    crypto_stream_salsa20: M,
                    crypto_onetimeauth: O,
                    crypto_onetimeauth_verify: P,
                    crypto_verify_16: c,
                    crypto_verify_32: r,
                    crypto_secretbox: C,
                    crypto_secretbox_open: ae,
                    crypto_scalarmult: Q,
                    crypto_scalarmult_base: me,
                    crypto_box_beforenm: Ze,
                    crypto_box_afternm: N,
                    crypto_box: function K(I, $, Z, f, ne, Oe) {
                        var Te = new Uint8Array(32);
                        return Ze(Te, ne, Oe), N(I, $, Z, f, Te)
                    },
                    crypto_box_open: function de(I, $, Z, f, ne, Oe) {
                        var Te = new Uint8Array(32);
                        return Ze(Te, ne, Oe), z(I, $, Z, f, Te)
                    },
                    crypto_box_keypair: Ie,
                    crypto_hash: he,
                    crypto_sign: Ae,
                    crypto_sign_keypair: ge,
                    crypto_sign_open: Qe,
                    crypto_secretbox_KEYBYTES: 32,
                    crypto_secretbox_NONCEBYTES: 24,
                    crypto_secretbox_ZEROBYTES: 32,
                    crypto_secretbox_BOXZEROBYTES: 16,
                    crypto_scalarmult_BYTES: 32,
                    crypto_scalarmult_SCALARBYTES: 32,
                    crypto_box_PUBLICKEYBYTES: 32,
                    crypto_box_SECRETKEYBYTES: 32,
                    crypto_box_BEFORENMBYTES: 32,
                    crypto_box_NONCEBYTES: 24,
                    crypto_box_ZEROBYTES: 32,
                    crypto_box_BOXZEROBYTES: 16,
                    crypto_sign_BYTES: W,
                    crypto_sign_PUBLICKEYBYTES: 32,
                    crypto_sign_SECRETKEYBYTES: 64,
                    crypto_sign_SEEDBYTES: 32,
                    crypto_hash_BYTES: 64,
                    gf: d,
                    D: R,
                    L: G,
                    pack25519: te,
                    unpack25519: V,
                    M: ce,
                    A: q,
                    S: Ee,
                    Z: H,
                    pow2523: oe,
                    add: We,
                    set25519: J,
                    modL: ee,
                    scalarmult: yt,
                    scalarbase: At
                }, s.randomBytes = function(I) {
                    var $ = new Uint8Array(I);
                    return w($, I), $
                }, s.secretbox = function(I, $, Z) {
                    Gt(I, $, Z), nt(Z, $);
                    for (var f = new Uint8Array(32 + I.length), ne = new Uint8Array(f.length), Oe = 0; Oe < I.length; Oe++) f[Oe + 32] = I[Oe];
                    return C(ne, f, f.length, $, Z), ne.subarray(16)
                }, s.secretbox.open = function(I, $, Z) {
                    Gt(I, $, Z), nt(Z, $);
                    for (var f = new Uint8Array(16 + I.length), ne = new Uint8Array(f.length), Oe = 0; Oe < I.length; Oe++) f[Oe + 16] = I[Oe];
                    return f.length < 32 || 0 !== ae(ne, f, f.length, $, Z) ? null : ne.subarray(32)
                }, s.secretbox.keyLength = 32, s.secretbox.nonceLength = 24, s.secretbox.overheadLength = 16, s.scalarMult = function(I, $) {
                    if (Gt(I, $), 32 !== I.length) throw new Error("bad n size");
                    if (32 !== $.length) throw new Error("bad p size");
                    var Z = new Uint8Array(32);
                    return Q(Z, I, $), Z
                }, s.scalarMult.base = function(I) {
                    if (Gt(I), 32 !== I.length) throw new Error("bad n size");
                    var $ = new Uint8Array(32);
                    return me($, I), $
                }, s.scalarMult.scalarLength = 32, s.scalarMult.groupElementLength = 32, s.box = function(I, $, Z, f) {
                    var ne = s.box.before(Z, f);
                    return s.secretbox(I, $, ne)
                }, s.box.before = function(I, $) {
                    Gt(I, $),
                        function Bt(I, $) {
                            if (32 !== I.length) throw new Error("bad public key size");
                            if (32 !== $.length) throw new Error("bad secret key size")
                        }(I, $);
                    var Z = new Uint8Array(32);
                    return Ze(Z, I, $), Z
                }, s.box.after = s.secretbox, s.box.open = function(I, $, Z, f) {
                    var ne = s.box.before(Z, f);
                    return s.secretbox.open(I, $, ne)
                }, s.box.open.after = s.secretbox.open, s.box.keyPair = function() {
                    var I = new Uint8Array(32),
                        $ = new Uint8Array(32);
                    return Ie(I, $), {
                        publicKey: I,
                        secretKey: $
                    }
                }, s.box.keyPair.fromSecretKey = function(I) {
                    if (Gt(I), 32 !== I.length) throw new Error("bad secret key size");
                    var $ = new Uint8Array(32);
                    return me($, I), {
                        publicKey: $,
                        secretKey: new Uint8Array(I)
                    }
                }, s.box.publicKeyLength = 32, s.box.secretKeyLength = 32, s.box.sharedKeyLength = 32, s.box.nonceLength = 24, s.box.overheadLength = s.secretbox.overheadLength, s.sign = function(I, $) {
                    if (Gt(I, $), 64 !== $.length) throw new Error("bad secret key size");
                    var Z = new Uint8Array(W + I.length);
                    return Ae(Z, I, I.length, $), Z
                }, s.sign.open = function(I, $) {
                    if (Gt(I, $), 32 !== $.length) throw new Error("bad public key size");
                    var Z = new Uint8Array(I.length),
                        f = Qe(Z, I, I.length, $);
                    if (f < 0) return null;
                    for (var ne = new Uint8Array(f), Oe = 0; Oe < ne.length; Oe++) ne[Oe] = Z[Oe];
                    return ne
                }, s.sign.detached = function(I, $) {
                    for (var Z = s.sign(I, $), f = new Uint8Array(W), ne = 0; ne < f.length; ne++) f[ne] = Z[ne];
                    return f
                }, s.sign.detached.verify = function(I, $, Z) {
                    if (Gt(I, $, Z), $.length !== W) throw new Error("bad signature size");
                    if (32 !== Z.length) throw new Error("bad public key size");
                    var Oe, f = new Uint8Array(W + I.length),
                        ne = new Uint8Array(W + I.length);
                    for (Oe = 0; Oe < W; Oe++) f[Oe] = $[Oe];
                    for (Oe = 0; Oe < I.length; Oe++) f[Oe + W] = I[Oe];
                    return Qe(ne, f, f.length, Z) >= 0
                }, s.sign.keyPair = function() {
                    var I = new Uint8Array(32),
                        $ = new Uint8Array(64);
                    return ge(I, $), {
                        publicKey: I,
                        secretKey: $
                    }
                }, s.sign.keyPair.fromSecretKey = function(I) {
                    if (Gt(I), 64 !== I.length) throw new Error("bad secret key size");
                    for (var $ = new Uint8Array(32), Z = 0; Z < $.length; Z++) $[Z] = I[32 + Z];
                    return {
                        publicKey: $,
                        secretKey: new Uint8Array(I)
                    }
                }, s.sign.keyPair.fromSeed = function(I) {
                    if (Gt(I), 32 !== I.length) throw new Error("bad seed size");
                    for (var $ = new Uint8Array(32), Z = new Uint8Array(64), f = 0; f < 32; f++) Z[f] = I[f];
                    return ge($, Z, !0), {
                        publicKey: $,
                        secretKey: Z
                    }
                }, s.sign.publicKeyLength = 32, s.sign.secretKeyLength = 64, s.sign.seedLength = 32, s.sign.signatureLength = W, s.hash = function(I) {
                    Gt(I);
                    var $ = new Uint8Array(64);
                    return he($, I, I.length), $
                }, s.hash.hashLength = 64, s.verify = function(I, $) {
                    return Gt(I, $), 0 !== I.length && 0 !== $.length && I.length === $.length && 0 === h(I, 0, $, 0, I.length)
                }, s.setPRNG = function(I) {
                    w = I
                }, (I = typeof self < "u" ? self.crypto || self.msCrypto : null) && I.getRandomValues ? s.setPRNG(function(Z, f) {
                    var ne, Oe = new Uint8Array(f);
                    for (ne = 0; ne < f; ne += 65536) I.getRandomValues(Oe.subarray(ne, ne + Math.min(f - ne, 65536)));
                    for (ne = 0; ne < f; ne++) Z[ne] = Oe[ne];
                    jt(Oe)
                }) : (I = A(77903)) && I.randomBytes && s.setPRNG(function(Z, f) {
                    var ne, Oe = I.randomBytes(f);
                    for (ne = 0; ne < f; ne++) Z[ne] = Oe[ne];
                    jt(Oe)
                })
            }(ve.exports ? ve.exports : self.nacl = self.nacl || {})
        },
        16630: function(ve, e, A) {
            var s;
            ve = A.nmd(ve),
                function(d) {
                    "object" == typeof global && global;
                    var l, p = 2147483647,
                        T = 36,
                        v = 26,
                        y = 38,
                        x = 700,
                        c = /^xn--/,
                        r = /[^\x20-\x7E]/,
                        a = /[\x2E\u3002\uFF0E\uFF61]/g,
                        m = {
                            overflow: "Overflow: input needs wider integers to process",
                            "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                            "invalid-input": "Invalid input"
                        },
                        _ = T - 1,
                        U = Math.floor,
                        S = String.fromCharCode;

                    function M(F) {
                        throw new RangeError(m[F])
                    }

                    function fe(F, se) {
                        for (var V = F.length, q = []; V--;) q[V] = se(F[V]);
                        return q
                    }

                    function Se(F, se) {
                        var V = F.split("@"),
                            q = "";
                        return V.length > 1 && (q = V[0] + "@", F = V[1]), q + fe((F = F.replace(a, ".")).split("."), se).join(".")
                    }

                    function _e(F) {
                        for (var H, ce, se = [], V = 0, q = F.length; V < q;)(H = F.charCodeAt(V++)) >= 55296 && H <= 56319 && V < q ? 56320 == (64512 & (ce = F.charCodeAt(V++))) ? se.push(((1023 & H) << 10) + (1023 & ce) + 65536) : (se.push(H), V--) : se.push(H);
                        return se
                    }

                    function O(F) {
                        return fe(F, function(se) {
                            var V = "";
                            return se > 65535 && (V += S((se -= 65536) >>> 10 & 1023 | 55296), se = 56320 | 1023 & se), V + S(se)
                        }).join("")
                    }

                    function P(F) {
                        return F - 48 < 10 ? F - 22 : F - 65 < 26 ? F - 65 : F - 97 < 26 ? F - 97 : T
                    }

                    function C(F, se) {
                        return F + 22 + 75 * (F < 26) - ((0 != se) << 5)
                    }

                    function ae(F, se, V) {
                        var q = 0;
                        for (F = V ? U(F / x) : F >> 1, F += U(F / se); F > _ * v >> 1; q += T) F = U(F / _);
                        return U(q + (_ + 1) * F / (F + y))
                    }

                    function J(F) {
                        var q, Le, oe, Q, me, Ie, Ze, N, z, K, se = [],
                            V = F.length,
                            H = 0,
                            ce = 128,
                            Ee = 72;
                        for ((Le = F.lastIndexOf("-")) < 0 && (Le = 0), oe = 0; oe < Le; ++oe) F.charCodeAt(oe) >= 128 && M("not-basic"), se.push(F.charCodeAt(oe));
                        for (Q = Le > 0 ? Le + 1 : 0; Q < V;) {
                            for (me = H, Ie = 1, Ze = T; Q >= V && M("invalid-input"), ((N = P(F.charCodeAt(Q++))) >= T || N > U((p - H) / Ie)) && M("overflow"), H += N * Ie, !(N < (z = Ze <= Ee ? 1 : Ze >= Ee + v ? v : Ze - Ee)); Ze += T) Ie > U(p / (K = T - z)) && M("overflow"), Ie *= K;
                            Ee = ae(H - me, q = se.length + 1, 0 == me), U(H / q) > p - ce && M("overflow"), ce += U(H / q), H %= q, se.splice(H++, 0, ce)
                        }
                        return O(se)
                    }

                    function re(F) {
                        var se, V, q, H, ce, Ee, Le, oe, Q, me, Ie, N, z, K, de, Ze = [];
                        for (N = (F = _e(F)).length, se = 128, V = 0, ce = 72, Ee = 0; Ee < N; ++Ee)(Ie = F[Ee]) < 128 && Ze.push(S(Ie));
                        for (q = H = Ze.length, H && Ze.push("-"); q < N;) {
                            for (Le = p, Ee = 0; Ee < N; ++Ee)(Ie = F[Ee]) >= se && Ie < Le && (Le = Ie);
                            for (Le - se > U((p - V) / (z = q + 1)) && M("overflow"), V += (Le - se) * z, se = Le, Ee = 0; Ee < N; ++Ee)
                                if ((Ie = F[Ee]) < se && ++V > p && M("overflow"), Ie == se) {
                                    for (oe = V, Q = T; !(oe < (me = Q <= ce ? 1 : Q >= ce + v ? v : Q - ce)); Q += T) Ze.push(S(C(me + (de = oe - me) % (K = T - me), 0))), oe = U(de / K);
                                    Ze.push(S(C(oe, 0))), ce = ae(V, z, q == H), V = 0, ++q
                                }++V, ++se
                        }
                        return Ze.join("")
                    }
                    l = {
                        version: "1.4.1",
                        ucs2: {
                            decode: _e,
                            encode: O
                        },
                        decode: J,
                        encode: re,
                        toASCII: function te(F) {
                            return Se(F, function(se) {
                                return r.test(se) ? "xn--" + re(se) : se
                            })
                        },
                        toUnicode: function Y(F) {
                            return Se(F, function(se) {
                                return c.test(se) ? J(se.slice(4).toLowerCase()) : se
                            })
                        }
                    }, void 0 !== (s = function() {
                        return l
                    }.call(e, A, e, ve)) && (ve.exports = s)
                }()
        },
        52445: (ve, e, A) => {
            "use strict";
            var s = A(16630);

            function d() {
                this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
            }
            var w = /^([a-z0-9.+-]+:)/i,
                B = /:[0-9]*$/,
                u = /^(\/\/?(?!\/)[^?\s]*)(\?[^\s]*)?$/,
                p = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"]),
                T = ["'"].concat(p),
                R = ["%", "/", "?", ";", "#"].concat(T),
                v = ["/", "?", "#"],
                x = /^[+a-z0-9A-Z_-]{0,63}$/,
                o = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
                E = {
                    javascript: !0,
                    "javascript:": !0
                },
                h = {
                    javascript: !0,
                    "javascript:": !0
                },
                c = {
                    http: !0,
                    https: !0,
                    ftp: !0,
                    gopher: !0,
                    file: !0,
                    "http:": !0,
                    "https:": !0,
                    "ftp:": !0,
                    "gopher:": !0,
                    "file:": !0
                },
                r = A(72956);

            function a(S, D, M) {
                if (S && "object" == typeof S && S instanceof d) return S;
                var fe = new d;
                return fe.parse(S, D, M), fe
            }
            d.prototype.parse = function(S, D, M) {
                if ("string" != typeof S) throw new TypeError("Parameter 'url' must be a string, not " + typeof S);
                var fe = S.indexOf("?"),
                    Se = -1 !== fe && fe < S.indexOf("#") ? "?" : "#",
                    _e = S.split(Se);
                _e[0] = _e[0].replace(/\\/g, "/");
                var P = S = _e.join(Se);
                if (P = P.trim(), !M && 1 === S.split("#").length) {
                    var C = u.exec(P);
                    if (C) return this.path = P, this.href = P, this.pathname = C[1], C[2] ? (this.search = C[2], this.query = D ? r.parse(this.search.substr(1)) : this.search.substr(1)) : D && (this.search = "", this.query = {}), this
                }
                var ae = w.exec(P);
                if (ae) {
                    var J = (ae = ae[0]).toLowerCase();
                    this.protocol = J, P = P.substr(ae.length)
                }
                if (M || ae || P.match(/^\/\/[^@/]+@[^@/]+/)) {
                    var re = "//" === P.substr(0, 2);
                    re && (!ae || !h[ae]) && (P = P.substr(2), this.slashes = !0)
                }
                if (!h[ae] && (re || ae && !c[ae])) {
                    for (var Y = -1, te = 0; te < v.length; te++) - 1 !== (F = P.indexOf(v[te])) && (-1 === Y || F < Y) && (Y = F);
                    var se, V;
                    for (-1 !== (V = -1 === Y ? P.lastIndexOf("@") : P.lastIndexOf("@", Y)) && (se = P.slice(0, V), P = P.slice(V + 1), this.auth = decodeURIComponent(se)), Y = -1, te = 0; te < R.length; te++) {
                        var F; - 1 !== (F = P.indexOf(R[te])) && (-1 === Y || F < Y) && (Y = F)
                    } - 1 === Y && (Y = P.length), this.host = P.slice(0, Y), P = P.slice(Y), this.parseHost(), this.hostname = this.hostname || "";
                    var q = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
                    if (!q)
                        for (var H = this.hostname.split(/\./), ce = (te = 0, H.length); te < ce; te++) {
                            var Ee = H[te];
                            if (Ee && !Ee.match(x)) {
                                for (var Le = "", oe = 0, Q = Ee.length; oe < Q; oe++) Ee.charCodeAt(oe) > 127 ? Le += "x" : Le += Ee[oe];
                                if (!Le.match(x)) {
                                    var me = H.slice(0, te),
                                        Ie = H.slice(te + 1),
                                        Ze = Ee.match(o);
                                    Ze && (me.push(Ze[1]), Ie.unshift(Ze[2])), Ie.length && (P = "/" + Ie.join(".") + P), this.hostname = me.join(".");
                                    break
                                }
                            }
                        }
                    this.hostname = this.hostname.length > 255 ? "" : this.hostname.toLowerCase(), q || (this.hostname = s.toASCII(this.hostname)), this.host = (this.hostname || "") + (this.port ? ":" + this.port : ""), this.href += this.host, q && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== P[0] && (P = "/" + P))
                }
                if (!E[J])
                    for (te = 0, ce = T.length; te < ce; te++) {
                        var K = T[te];
                        if (-1 !== P.indexOf(K)) {
                            var de = encodeURIComponent(K);
                            de === K && (de = escape(K)), P = P.split(K).join(de)
                        }
                    }
                var we = P.indexOf("#"); - 1 !== we && (this.hash = P.substr(we), P = P.slice(0, we));
                var Be = P.indexOf("?");
                return -1 !== Be ? (this.search = P.substr(Be), this.query = P.substr(Be + 1), D && (this.query = r.parse(this.query)), P = P.slice(0, Be)) : D && (this.search = "", this.query = {}), P && (this.pathname = P), c[J] && this.hostname && !this.pathname && (this.pathname = "/"), (this.pathname || this.search) && (this.path = (this.pathname || "") + (this.search || "")), this.href = this.format(), this
            }, d.prototype.format = function() {
                var S = this.auth || "";
                S && (S = (S = encodeURIComponent(S)).replace(/%3A/i, ":"), S += "@");
                var D = this.protocol || "",
                    M = this.pathname || "",
                    fe = this.hash || "",
                    Se = !1,
                    _e = "";
                this.host ? Se = S + this.host : this.hostname && (Se = S + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (Se += ":" + this.port)), this.query && "object" == typeof this.query && Object.keys(this.query).length && (_e = r.stringify(this.query, {
                    arrayFormat: "repeat",
                    addQueryPrefix: !1
                }));
                var O = this.search || _e && "?" + _e || "";
                return D && ":" !== D.substr(-1) && (D += ":"), this.slashes || (!D || c[D]) && !1 !== Se ? (Se = "//" + (Se || ""), M && "/" !== M.charAt(0) && (M = "/" + M)) : Se || (Se = ""), fe && "#" !== fe.charAt(0) && (fe = "#" + fe), O && "?" !== O.charAt(0) && (O = "?" + O), D + Se + (M = M.replace(/[?#]/g, function(P) {
                    return encodeURIComponent(P)
                })) + (O = O.replace("#", "%23")) + fe
            }, d.prototype.resolve = function(S) {
                return this.resolveObject(a(S, !1, !0)).format()
            }, d.prototype.resolveObject = function(S) {
                if ("string" == typeof S) {
                    var D = new d;
                    D.parse(S, !1, !0), S = D
                }
                for (var M = new d, fe = Object.keys(this), Se = 0; Se < fe.length; Se++) {
                    var _e = fe[Se];
                    M[_e] = this[_e]
                }
                if (M.hash = S.hash, "" === S.href) return M.href = M.format(), M;
                if (S.slashes && !S.protocol) {
                    for (var O = Object.keys(S), P = 0; P < O.length; P++) {
                        var C = O[P];
                        "protocol" !== C && (M[C] = S[C])
                    }
                    return c[M.protocol] && M.hostname && !M.pathname && (M.pathname = "/", M.path = M.pathname), M.href = M.format(), M
                }
                if (S.protocol && S.protocol !== M.protocol) {
                    if (!c[S.protocol]) {
                        for (var ae = Object.keys(S), J = 0; J < ae.length; J++) {
                            var re = ae[J];
                            M[re] = S[re]
                        }
                        return M.href = M.format(), M
                    }
                    if (M.protocol = S.protocol, S.host || h[S.protocol]) M.pathname = S.pathname;
                    else {
                        for (var ce = (S.pathname || "").split("/"); ce.length && !(S.host = ce.shift()););
                        S.host || (S.host = ""), S.hostname || (S.hostname = ""), "" !== ce[0] && ce.unshift(""), ce.length < 2 && ce.unshift(""), M.pathname = ce.join("/")
                    }
                    return M.search = S.search, M.query = S.query, M.host = S.host || "", M.auth = S.auth, M.hostname = S.hostname || S.host, M.port = S.port, (M.pathname || M.search) && (M.path = (M.pathname || "") + (M.search || "")), M.slashes = M.slashes || S.slashes, M.href = M.format(), M
                }
                var F = M.pathname && "/" === M.pathname.charAt(0),
                    se = S.host || S.pathname && "/" === S.pathname.charAt(0),
                    V = se || F || M.host && S.pathname,
                    q = V,
                    H = M.pathname && M.pathname.split("/") || [],
                    Ee = (ce = S.pathname && S.pathname.split("/") || [], M.protocol && !c[M.protocol]);
                if (Ee && (M.hostname = "", M.port = null, M.host && ("" === H[0] ? H[0] = M.host : H.unshift(M.host)), M.host = "", S.protocol && (S.hostname = null, S.port = null, S.host && ("" === ce[0] ? ce[0] = S.host : ce.unshift(S.host)), S.host = null), V = V && ("" === ce[0] || "" === H[0])), se) M.host = S.host || "" === S.host ? S.host : M.host, M.hostname = S.hostname || "" === S.hostname ? S.hostname : M.hostname, M.search = S.search, M.query = S.query, H = ce;
                else if (ce.length) H || (H = []), H.pop(), H = H.concat(ce), M.search = S.search, M.query = S.query;
                else if (null != S.search) return Ee && (M.host = H.shift(), M.hostname = M.host, (Le = !!(M.host && M.host.indexOf("@") > 0) && M.host.split("@")) && (M.auth = Le.shift(), M.hostname = Le.shift(), M.host = M.hostname)), M.search = S.search, M.query = S.query, (null !== M.pathname || null !== M.search) && (M.path = (M.pathname ? M.pathname : "") + (M.search ? M.search : "")), M.href = M.format(), M;
                if (!H.length) return M.pathname = null, M.path = M.search ? "/" + M.search : null, M.href = M.format(), M;
                for (var oe = H.slice(-1)[0], Q = (M.host || S.host || H.length > 1) && ("." === oe || ".." === oe) || "" === oe, me = 0, Ie = H.length; Ie >= 0; Ie--) "." === (oe = H[Ie]) ? H.splice(Ie, 1) : ".." === oe ? (H.splice(Ie, 1), me++) : me && (H.splice(Ie, 1), me--);
                if (!V && !q)
                    for (; me--; me) H.unshift("..");
                V && "" !== H[0] && (!H[0] || "/" !== H[0].charAt(0)) && H.unshift(""), Q && "/" !== H.join("/").substr(-1) && H.push("");
                var Le, Ze = "" === H[0] || H[0] && "/" === H[0].charAt(0);
                return Ee && (M.hostname = Ze ? "" : H.length ? H.shift() : "", M.host = M.hostname, (Le = !!(M.host && M.host.indexOf("@") > 0) && M.host.split("@")) && (M.auth = Le.shift(), M.hostname = Le.shift(), M.host = M.hostname)), (V = V || M.host && H.length) && !Ze && H.unshift(""), H.length > 0 ? M.pathname = H.join("/") : (M.pathname = null, M.path = null), (null !== M.pathname || null !== M.search) && (M.path = (M.pathname ? M.pathname : "") + (M.search ? M.search : "")), M.auth = S.auth || M.auth, M.slashes = M.slashes || S.slashes, M.href = M.format(), M
            }, d.prototype.parseHost = function() {
                var S = this.host,
                    D = B.exec(S);
                D && (":" !== (D = D[0]) && (this.port = D.substr(1)), S = S.substr(0, S.length - D.length)), S && (this.hostname = S)
            }, e.parse = a, e.resolve = function _(S, D) {
                return a(S, !1, !0).resolve(D)
            }, e.resolveObject = function U(S, D) {
                return S ? a(S, !1, !0).resolveObject(D) : D
            }, e.format = function m(S) {
                return "string" == typeof S && (S = a(S)), S instanceof d ? S.format() : d.prototype.format.call(S)
            }, e.Url = d
        },
        74750: ve => {
            ve.exports = function(A) {
                return A && "object" == typeof A && "function" == typeof A.copy && "function" == typeof A.fill && "function" == typeof A.readUInt8
            }
        },
        66758: (ve, e, A) => {
            "use strict";
            var s = A(98147),
                d = A(73286),
                w = A(36326),
                B = A(92462);

            function u(he) {
                return he.call.bind(he)
            }
            var l = typeof BigInt < "u",
                p = typeof Symbol < "u",
                T = u(Object.prototype.toString),
                R = u(Number.prototype.valueOf),
                v = u(String.prototype.valueOf),
                y = u(Boolean.prototype.valueOf);
            if (l) var x = u(BigInt.prototype.valueOf);
            if (p) var o = u(Symbol.prototype.valueOf);

            function E(he, We) {
                if ("object" != typeof he) return !1;
                try {
                    return We(he), !0
                } catch {
                    return !1
                }
            }

            function O(he) {
                return "[object Map]" === T(he)
            }

            function C(he) {
                return "[object Set]" === T(he)
            }

            function J(he) {
                return "[object WeakMap]" === T(he)
            }

            function Y(he) {
                return "[object WeakSet]" === T(he)
            }

            function F(he) {
                return "[object ArrayBuffer]" === T(he)
            }

            function se(he) {
                return !(typeof ArrayBuffer > "u") && (F.working ? F(he) : he instanceof ArrayBuffer)
            }

            function V(he) {
                return "[object DataView]" === T(he)
            }

            function q(he) {
                return !(typeof DataView > "u") && (V.working ? V(he) : he instanceof DataView)
            }
            e.isArgumentsObject = s, e.isGeneratorFunction = d, e.isTypedArray = B, e.isPromise = function h(he) {
                return typeof Promise < "u" && he instanceof Promise || null !== he && "object" == typeof he && "function" == typeof he.then && "function" == typeof he.catch
            }, e.isArrayBufferView = function c(he) {
                return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? ArrayBuffer.isView(he) : B(he) || q(he)
            }, e.isUint8Array = function r(he) {
                return "Uint8Array" === w(he)
            }, e.isUint8ClampedArray = function a(he) {
                return "Uint8ClampedArray" === w(he)
            }, e.isUint16Array = function m(he) {
                return "Uint16Array" === w(he)
            }, e.isUint32Array = function _(he) {
                return "Uint32Array" === w(he)
            }, e.isInt8Array = function U(he) {
                return "Int8Array" === w(he)
            }, e.isInt16Array = function S(he) {
                return "Int16Array" === w(he)
            }, e.isInt32Array = function D(he) {
                return "Int32Array" === w(he)
            }, e.isFloat32Array = function M(he) {
                return "Float32Array" === w(he)
            }, e.isFloat64Array = function fe(he) {
                return "Float64Array" === w(he)
            }, e.isBigInt64Array = function Se(he) {
                return "BigInt64Array" === w(he)
            }, e.isBigUint64Array = function _e(he) {
                return "BigUint64Array" === w(he)
            }, O.working = typeof Map < "u" && O(new Map), e.isMap = function P(he) {
                return !(typeof Map > "u") && (O.working ? O(he) : he instanceof Map)
            }, C.working = typeof Set < "u" && C(new Set), e.isSet = function ae(he) {
                return !(typeof Set > "u") && (C.working ? C(he) : he instanceof Set)
            }, J.working = typeof WeakMap < "u" && J(new WeakMap), e.isWeakMap = function re(he) {
                return !(typeof WeakMap > "u") && (J.working ? J(he) : he instanceof WeakMap)
            }, Y.working = typeof WeakSet < "u" && Y(new WeakSet), e.isWeakSet = function te(he) {
                return Y(he)
            }, F.working = typeof ArrayBuffer < "u" && F(new ArrayBuffer), e.isArrayBuffer = se, V.working = typeof ArrayBuffer < "u" && typeof DataView < "u" && V(new DataView(new ArrayBuffer(1), 0, 1)), e.isDataView = q;
            var H = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : void 0;

            function ce(he) {
                return "[object SharedArrayBuffer]" === T(he)
            }

            function Ee(he) {
                return !(typeof H > "u") && (typeof ce.working > "u" && (ce.working = ce(new H)), ce.working ? ce(he) : he instanceof H)
            }

            function Ze(he) {
                return E(he, R)
            }

            function N(he) {
                return E(he, v)
            }

            function z(he) {
                return E(he, y)
            }

            function K(he) {
                return l && E(he, x)
            }

            function de(he) {
                return p && E(he, o)
            }
            e.isSharedArrayBuffer = Ee, e.isAsyncFunction = function Le(he) {
                return "[object AsyncFunction]" === T(he)
            }, e.isMapIterator = function oe(he) {
                return "[object Map Iterator]" === T(he)
            }, e.isSetIterator = function Q(he) {
                return "[object Set Iterator]" === T(he)
            }, e.isGeneratorObject = function me(he) {
                return "[object Generator]" === T(he)
            }, e.isWebAssemblyCompiledModule = function Ie(he) {
                return "[object WebAssembly.Module]" === T(he)
            }, e.isNumberObject = Ze, e.isStringObject = N, e.isBooleanObject = z, e.isBigIntObject = K, e.isSymbolObject = de, e.isBoxedPrimitive = function we(he) {
                return Ze(he) || N(he) || z(he) || K(he) || de(he)
            }, e.isAnyArrayBuffer = function Be(he) {
                return typeof Uint8Array < "u" && (se(he) || Ee(he))
            }, ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function(he) {
                Object.defineProperty(e, he, {
                    enumerable: !1,
                    value: function() {
                        throw new Error(he + " is not supported in userland")
                    }
                })
            })
        },
        40179: (ve, e, A) => {
            var s = Object.getOwnPropertyDescriptors || function(q) {
                    for (var H = Object.keys(q), ce = {}, Ee = 0; Ee < H.length; Ee++) ce[H[Ee]] = Object.getOwnPropertyDescriptor(q, H[Ee]);
                    return ce
                },
                d = /%[sdj%]/g;
            e.format = function(V) {
                if (!U(V)) {
                    for (var q = [], H = 0; H < arguments.length; H++) q.push(l(arguments[H]));
                    return q.join(" ")
                }
                H = 1;
                for (var ce = arguments, Ee = ce.length, Le = String(V).replace(d, function(Q) {
                        if ("%%" === Q) return "%";
                        if (H >= Ee) return Q;
                        switch (Q) {
                            case "%s":
                                return String(ce[H++]);
                            case "%d":
                                return Number(ce[H++]);
                            case "%j":
                                try {
                                    return JSON.stringify(ce[H++])
                                } catch {
                                    return "[Circular]"
                                }
                            default:
                                return Q
                        }
                    }), oe = ce[H]; H < Ee; oe = ce[++H]) a(oe) || !fe(oe) ? Le += " " + oe : Le += " " + l(oe);
                return Le
            }, e.deprecate = function(V, q) {
                if (typeof process < "u" && !0 === process.noDeprecation) return V;
                if (typeof process > "u") return function() {
                    return e.deprecate(V, q).apply(this, arguments)
                };
                var H = !1;
                return function ce() {
                    if (!H) {
                        if (process.throwDeprecation) throw new Error(q);
                        process.traceDeprecation ? console.trace(q) : console.error(q), H = !0
                    }
                    return V.apply(this, arguments)
                }
            };
            var w = {},
                B = /^$/;
            if (process.env.NODE_DEBUG) {
                var u = process.env.NODE_DEBUG;
                u = u.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase(), B = new RegExp("^" + u + "$", "i")
            }

            function l(V, q) {
                var H = {
                    seen: [],
                    stylize: T
                };
                return arguments.length >= 3 && (H.depth = arguments[2]), arguments.length >= 4 && (H.colors = arguments[3]), r(q) ? H.showHidden = q : q && e._extend(H, q), D(H.showHidden) && (H.showHidden = !1), D(H.depth) && (H.depth = 2), D(H.colors) && (H.colors = !1), D(H.customInspect) && (H.customInspect = !0), H.colors && (H.stylize = p), v(H, V, H.depth)
            }

            function p(V, q) {
                var H = l.styles[q];
                return H ? "\x1b[" + l.colors[H][0] + "m" + V + "\x1b[" + l.colors[H][1] + "m" : V
            }

            function T(V, q) {
                return V
            }

            function v(V, q, H) {
                if (V.customInspect && q && O(q.inspect) && q.inspect !== e.inspect && (!q.constructor || q.constructor.prototype !== q)) {
                    var ce = q.inspect(H, V);
                    return U(ce) || (ce = v(V, ce, H)), ce
                }
                var Ee = function y(V, q) {
                    if (D(q)) return V.stylize("undefined", "undefined");
                    if (U(q)) {
                        var H = "'" + JSON.stringify(q).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                        return V.stylize(H, "string")
                    }
                    return _(q) ? V.stylize("" + q, "number") : r(q) ? V.stylize("" + q, "boolean") : a(q) ? V.stylize("null", "null") : void 0
                }(V, q);
                if (Ee) return Ee;
                var Le = Object.keys(q),
                    oe = function R(V) {
                        var q = {};
                        return V.forEach(function(H, ce) {
                            q[H] = !0
                        }), q
                    }(Le);
                if (V.showHidden && (Le = Object.getOwnPropertyNames(q)), _e(q) && (Le.indexOf("message") >= 0 || Le.indexOf("description") >= 0)) return x(q);
                if (0 === Le.length) {
                    if (O(q)) return V.stylize("[Function" + (q.name ? ": " + q.name : "") + "]", "special");
                    if (M(q)) return V.stylize(RegExp.prototype.toString.call(q), "regexp");
                    if (Se(q)) return V.stylize(Date.prototype.toString.call(q), "date");
                    if (_e(q)) return x(q)
                }
                var z, me = "",
                    Ie = !1,
                    Ze = ["{", "}"];
                return c(q) && (Ie = !0, Ze = ["[", "]"]), O(q) && (me = " [Function" + (q.name ? ": " + q.name : "") + "]"), M(q) && (me = " " + RegExp.prototype.toString.call(q)), Se(q) && (me = " " + Date.prototype.toUTCString.call(q)), _e(q) && (me = " " + x(q)), 0 !== Le.length || Ie && 0 != q.length ? H < 0 ? M(q) ? V.stylize(RegExp.prototype.toString.call(q), "regexp") : V.stylize("[Object]", "special") : (V.seen.push(q), z = Ie ? function o(V, q, H, ce, Ee) {
                    for (var Le = [], oe = 0, Q = q.length; oe < Q; ++oe) Y(q, String(oe)) ? Le.push(E(V, q, H, ce, String(oe), !0)) : Le.push("");
                    return Ee.forEach(function(me) {
                        me.match(/^\d+$/) || Le.push(E(V, q, H, ce, me, !0))
                    }), Le
                }(V, q, H, oe, Le) : Le.map(function(K) {
                    return E(V, q, H, oe, K, Ie)
                }), V.seen.pop(), function h(V, q, H) {
                    var Ee = V.reduce(function(Le, oe) {
                        return oe.indexOf("\n"), Le + oe.replace(/\u001b\[\d\d?m/g, "").length + 1
                    }, 0);
                    return Ee > 60 ? H[0] + ("" === q ? "" : q + "\n ") + " " + V.join(",\n  ") + " " + H[1] : H[0] + q + " " + V.join(", ") + " " + H[1]
                }(z, me, Ze)) : Ze[0] + me + Ze[1]
            }

            function x(V) {
                return "[" + Error.prototype.toString.call(V) + "]"
            }

            function E(V, q, H, ce, Ee, Le) {
                var oe, Q, me;
                if ((me = Object.getOwnPropertyDescriptor(q, Ee) || {
                        value: q[Ee]
                    }).get ? Q = V.stylize(me.set ? "[Getter/Setter]" : "[Getter]", "special") : me.set && (Q = V.stylize("[Setter]", "special")), Y(ce, Ee) || (oe = "[" + Ee + "]"), Q || (V.seen.indexOf(me.value) < 0 ? (Q = a(H) ? v(V, me.value, null) : v(V, me.value, H - 1)).indexOf("\n") > -1 && (Q = Le ? Q.split("\n").map(function(Ie) {
                        return "  " + Ie
                    }).join("\n").slice(2) : "\n" + Q.split("\n").map(function(Ie) {
                        return "   " + Ie
                    }).join("\n")) : Q = V.stylize("[Circular]", "special")), D(oe)) {
                    if (Le && Ee.match(/^\d+$/)) return Q;
                    (oe = JSON.stringify("" + Ee)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (oe = oe.slice(1, -1), oe = V.stylize(oe, "name")) : (oe = oe.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), oe = V.stylize(oe, "string"))
                }
                return oe + ": " + Q
            }

            function c(V) {
                return Array.isArray(V)
            }

            function r(V) {
                return "boolean" == typeof V
            }

            function a(V) {
                return null === V
            }

            function _(V) {
                return "number" == typeof V
            }

            function U(V) {
                return "string" == typeof V
            }

            function D(V) {
                return void 0 === V
            }

            function M(V) {
                return fe(V) && "[object RegExp]" === C(V)
            }

            function fe(V) {
                return "object" == typeof V && null !== V
            }

            function Se(V) {
                return fe(V) && "[object Date]" === C(V)
            }

            function _e(V) {
                return fe(V) && ("[object Error]" === C(V) || V instanceof Error)
            }

            function O(V) {
                return "function" == typeof V
            }

            function C(V) {
                return Object.prototype.toString.call(V)
            }

            function ae(V) {
                return V < 10 ? "0" + V.toString(10) : V.toString(10)
            }
            e.debuglog = function(V) {
                if (V = V.toUpperCase(), !w[V])
                    if (B.test(V)) {
                        var q = process.pid;
                        w[V] = function() {
                            var H = e.format.apply(e, arguments);
                            console.error("%s %d: %s", V, q, H)
                        }
                    } else w[V] = function() {};
                return w[V]
            }, e.inspect = l, l.colors = {
                bold: [1, 22],
                italic: [3, 23],
                underline: [4, 24],
                inverse: [7, 27],
                white: [37, 39],
                grey: [90, 39],
                black: [30, 39],
                blue: [34, 39],
                cyan: [36, 39],
                green: [32, 39],
                magenta: [35, 39],
                red: [31, 39],
                yellow: [33, 39]
            }, l.styles = {
                special: "cyan",
                number: "yellow",
                boolean: "yellow",
                undefined: "grey",
                null: "bold",
                string: "green",
                date: "magenta",
                regexp: "red"
            }, e.types = A(66758), e.isArray = c, e.isBoolean = r, e.isNull = a, e.isNullOrUndefined = function m(V) {
                return null == V
            }, e.isNumber = _, e.isString = U, e.isSymbol = function S(V) {
                return "symbol" == typeof V
            }, e.isUndefined = D, e.isRegExp = M, e.types.isRegExp = M, e.isObject = fe, e.isDate = Se, e.types.isDate = Se, e.isError = _e, e.types.isNativeError = _e, e.isFunction = O, e.isPrimitive = function P(V) {
                return null === V || "boolean" == typeof V || "number" == typeof V || "string" == typeof V || "symbol" == typeof V || typeof V > "u"
            }, e.isBuffer = A(74750);
            var J = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

            function Y(V, q) {
                return Object.prototype.hasOwnProperty.call(V, q)
            }
            e.log = function() {
                console.log("%s - %s", function re() {
                    var V = new Date,
                        q = [ae(V.getHours()), ae(V.getMinutes()), ae(V.getSeconds())].join(":");
                    return [V.getDate(), J[V.getMonth()], q].join(" ")
                }(), e.format.apply(e, arguments))
            }, e.inherits = A(66698), e._extend = function(V, q) {
                if (!q || !fe(q)) return V;
                for (var H = Object.keys(q), ce = H.length; ce--;) V[H[ce]] = q[H[ce]];
                return V
            };
            var te = typeof Symbol < "u" ? Symbol("util.promisify.custom") : void 0;

            function F(V, q) {
                if (!V) {
                    var H = new Error("Promise was rejected with a falsy value");
                    H.reason = V, V = H
                }
                return q(V)
            }
            e.promisify = function(q) {
                if ("function" != typeof q) throw new TypeError('The "original" argument must be of type Function');
                if (te && q[te]) {
                    var H;
                    if ("function" != typeof(H = q[te])) throw new TypeError('The "util.promisify.custom" argument must be of type Function');
                    return Object.defineProperty(H, te, {
                        value: H,
                        enumerable: !1,
                        writable: !1,
                        configurable: !0
                    }), H
                }

                function H() {
                    for (var ce, Ee, Le = new Promise(function(me, Ie) {
                            ce = me, Ee = Ie
                        }), oe = [], Q = 0; Q < arguments.length; Q++) oe.push(arguments[Q]);
                    oe.push(function(me, Ie) {
                        me ? Ee(me) : ce(Ie)
                    });
                    try {
                        q.apply(this, oe)
                    } catch (me) {
                        Ee(me)
                    }
                    return Le
                }
                return Object.setPrototypeOf(H, Object.getPrototypeOf(q)), te && Object.defineProperty(H, te, {
                    value: H,
                    enumerable: !1,
                    writable: !1,
                    configurable: !0
                }), Object.defineProperties(H, s(q))
            }, e.promisify.custom = te, e.callbackify = function se(V) {
                if ("function" != typeof V) throw new TypeError('The "original" argument must be of type Function');

                function q() {
                    for (var H = [], ce = 0; ce < arguments.length; ce++) H.push(arguments[ce]);
                    var Ee = H.pop();
                    if ("function" != typeof Ee) throw new TypeError("The last argument must be of type Function");
                    var Le = this,
                        oe = function() {
                            return Ee.apply(Le, arguments)
                        };
                    V.apply(this, H).then(function(Q) {
                        process.nextTick(oe.bind(null, null, Q))
                    }, function(Q) {
                        process.nextTick(F.bind(null, Q, oe))
                    })
                }
                return Object.setPrototypeOf(q, Object.getPrototypeOf(V)), Object.defineProperties(q, s(V)), q
            }
        },
        36326: (ve, e, A) => {
            "use strict";
            var s = A(83307),
                d = A(29067),
                w = A(35436),
                B = A(41098),
                u = A(79262),
                l = B("Object.prototype.toString"),
                p = A(78041)(),
                T = typeof globalThis > "u" ? global : globalThis,
                R = d(),
                v = B("String.prototype.slice"),
                y = Object.getPrototypeOf,
                x = B("Array.prototype.indexOf", !0) || function(r, a) {
                    for (var m = 0; m < r.length; m += 1)
                        if (r[m] === a) return m;
                    return -1
                },
                o = {
                    __proto__: null
                };
            s(R, p && u && y ? function(c) {
                var r = new T[c];
                if (Symbol.toStringTag in r) {
                    var a = y(r),
                        m = u(a, Symbol.toStringTag);
                    if (!m) {
                        var _ = y(a);
                        m = u(_, Symbol.toStringTag)
                    }
                    o["$" + c] = w(m.get)
                }
            } : function(c) {
                var r = new T[c],
                    a = r.slice || r.set;
                a && (o["$" + c] = w(a))
            }), ve.exports = function(r) {
                if (!r || "object" != typeof r) return !1;
                if (!p) {
                    var a = v(l(r), 8, -1);
                    return x(R, a) > -1 ? a : "Object" === a && function(r) {
                        var a = !1;
                        return s(o, function(m, _) {
                            if (!a) try {
                                m(r), a = v(_, 1)
                            } catch {}
                        }), a
                    }(r)
                }
                return u ? function(r) {
                    var a = !1;
                    return s(o, function(m, _) {
                        if (!a) try {
                            "$" + m(r) === _ && (a = v(_, 1))
                        } catch {}
                    }), a
                }(r) : null
            }
        },
        20498: ve => {
            ve.exports = function A() {
                for (var s = {}, d = 0; d < arguments.length; d++) {
                    var w = arguments[d];
                    for (var B in w) e.call(w, B) && (s[B] = w[B])
                }
                return s
            };
            var e = Object.prototype.hasOwnProperty
        },
        24654: () => {},
        71408: () => {},
        23646: () => {},
        29067: ve => {
            "use strict";
            var e = ["BigInt64Array", "BigUint64Array", "Float32Array", "Float64Array", "Int16Array", "Int32Array", "Int8Array", "Uint16Array", "Uint32Array", "Uint8Array", "Uint8ClampedArray"],
                A = typeof globalThis > "u" ? global : globalThis;
            ve.exports = function() {
                for (var d = [], w = 0; w < e.length; w++) "function" == typeof A[e[w]] && (d[d.length] = e[w]);
                return d
            }
        },
        87641: (ve, e, A) => {
            "use strict";
            A.r(e), A.d(e, {
                Struct: () => v,
                StructError: () => s,
                any: () => fe,
                array: () => Se,
                assert: () => y,
                assign: () => c,
                bigint: () => _e,
                boolean: () => O,
                coerce: () => z,
                create: () => x,
                date: () => P,
                defaulted: () => K,
                define: () => r,
                deprecated: () => a,
                dynamic: () => m,
                empty: () => we,
                enums: () => C,
                func: () => ae,
                instance: () => J,
                integer: () => re,
                intersection: () => Y,
                is: () => E,
                lazy: () => _,
                literal: () => te,
                map: () => F,
                mask: () => o,
                max: () => he,
                min: () => We,
                never: () => se,
                nonempty: () => gt,
                nullable: () => V,
                number: () => q,
                object: () => H,
                omit: () => U,
                optional: () => ce,
                partial: () => S,
                pattern: () => xt,
                pick: () => D,
                record: () => Ee,
                refine: () => At,
                regexp: () => Le,
                set: () => oe,
                size: () => yt,
                string: () => Q,
                struct: () => M,
                trimmed: () => de,
                tuple: () => me,
                type: () => Ie,
                union: () => Ze,
                unknown: () => N,
                validate: () => h
            });
            class s extends TypeError {
                constructor(G, ee) {
                    let xe;
                    const {
                        message: Ae,
                        explanation: je,
                        ...Qe
                    } = G, {
                        path: j
                    } = G, Ne = 0 === j.length ? Ae : `At path: ${j.join(".")} -- ${Ae}`;
                    super(je ? ? Ne), null != je && (this.cause = Ne), Object.assign(this, Qe), this.name = this.constructor.name, this.failures = () => xe ? ? (xe = [G, ...ee()])
                }
            }

            function w(ge) {
                return "object" == typeof ge && null != ge
            }

            function B(ge) {
                if ("[object Object]" !== Object.prototype.toString.call(ge)) return !1;
                const G = Object.getPrototypeOf(ge);
                return null === G || G === Object.prototype
            }

            function u(ge) {
                return "symbol" == typeof ge ? ge.toString() : "string" == typeof ge ? JSON.stringify(ge) : `${ge}`
            }

            function p(ge, G, ee, xe) {
                if (!0 === ge) return;
                !1 === ge ? ge = {} : "string" == typeof ge && (ge = {
                    message: ge
                });
                const {
                    path: Ae,
                    branch: je
                } = G, {
                    type: Qe
                } = ee, {
                    refinement: j,
                    message: Ne = `Expected a value of type \`${Qe}\`${j?` with refinement \`${j}\``:""}, but received: \`${u(xe)}\``
                } = ge;
                return {
                    value: xe,
                    type: Qe,
                    refinement: j,
                    key: Ae[Ae.length - 1],
                    path: Ae,
                    branch: je,
                    ...ge,
                    message: Ne
                }
            }

            function* T(ge, G, ee, xe) {
                (function d(ge) {
                    return w(ge) && "function" == typeof ge[Symbol.iterator]
                })(ge) || (ge = [ge]);
                for (const Ae of ge) {
                    const je = p(Ae, G, ee, xe);
                    je && (yield je)
                }
            }

            function* R(ge, G, ee = {}) {
                const {
                    path: xe = [],
                    branch: Ae = [ge],
                    coerce: je = !1,
                    mask: Qe = !1
                } = ee, j = {
                    path: xe,
                    branch: Ae
                };
                if (je && (ge = G.coercer(ge, j), Qe && "type" !== G.type && w(G.schema) && w(ge) && !Array.isArray(ge)))
                    for (const ie in ge) void 0 === G.schema[ie] && delete ge[ie];
                let Ne = "valid";
                for (const ie of G.validator(ge, j)) ie.explanation = ee.message, Ne = "not_valid", yield [ie, void 0];
                for (let [ie, le, ue] of G.entries(ge, j)) {
                    const Ce = R(le, ue, {
                        path: void 0 === ie ? xe : [...xe, ie],
                        branch: void 0 === ie ? Ae : [...Ae, le],
                        coerce: je,
                        mask: Qe,
                        message: ee.message
                    });
                    for (const k of Ce) k[0] ? (Ne = null != k[0].refinement ? "not_refined" : "not_valid", yield [k[0], void 0]) : je && (le = k[1], void 0 === ie ? ge = le : ge instanceof Map ? ge.set(ie, le) : ge instanceof Set ? ge.add(le) : w(ge) && (void 0 !== le || ie in ge) && (ge[ie] = le))
                }
                if ("not_valid" !== Ne)
                    for (const ie of G.refiner(ge, j)) ie.explanation = ee.message, Ne = "not_refined", yield [ie, void 0];
                "valid" === Ne && (yield [void 0, ge])
            }
            class v {
                constructor(G) {
                    const {
                        type: ee,
                        schema: xe,
                        validator: Ae,
                        refiner: je,
                        coercer: Qe = (Ne => Ne),
                        entries: j = function*() {}
                    } = G;
                    this.type = ee, this.schema = xe, this.entries = j, this.coercer = Qe, this.validator = Ae ? (Ne, ie) => T(Ae(Ne, ie), ie, this, Ne) : () => [], this.refiner = je ? (Ne, ie) => T(je(Ne, ie), ie, this, Ne) : () => []
                }
                assert(G, ee) {
                    return y(G, this, ee)
                }
                create(G, ee) {
                    return x(G, this, ee)
                }
                is(G) {
                    return E(G, this)
                }
                mask(G, ee) {
                    return o(G, this, ee)
                }
                validate(G, ee = {}) {
                    return h(G, this, ee)
                }
            }

            function y(ge, G, ee) {
                const xe = h(ge, G, {
                    message: ee
                });
                if (xe[0]) throw xe[0]
            }

            function x(ge, G, ee) {
                const xe = h(ge, G, {
                    coerce: !0,
                    message: ee
                });
                if (xe[0]) throw xe[0];
                return xe[1]
            }

            function o(ge, G, ee) {
                const xe = h(ge, G, {
                    coerce: !0,
                    mask: !0,
                    message: ee
                });
                if (xe[0]) throw xe[0];
                return xe[1]
            }

            function E(ge, G) {
                return !h(ge, G)[0]
            }

            function h(ge, G, ee = {}) {
                const xe = R(ge, G, ee),
                    Ae = function l(ge) {
                        const {
                            done: G,
                            value: ee
                        } = ge.next();
                        return G ? void 0 : ee
                    }(xe);
                return Ae[0] ? [new s(Ae[0], function*() {
                    for (const Qe of xe) Qe[0] && (yield Qe[0])
                }), void 0] : [void 0, Ae[1]]
            }

            function c(...ge) {
                const G = "type" === ge[0].type,
                    ee = ge.map(Ae => Ae.schema),
                    xe = Object.assign({}, ...ee);
                return G ? Ie(xe) : H(xe)
            }

            function r(ge, G) {
                return new v({
                    type: ge,
                    schema: null,
                    validator: G
                })
            }

            function a(ge, G) {
                return new v({ ...ge,
                    refiner: (ee, xe) => void 0 === ee || ge.refiner(ee, xe),
                    validator: (ee, xe) => void 0 === ee || (G(ee, xe), ge.validator(ee, xe))
                })
            }

            function m(ge) {
                return new v({
                    type: "dynamic",
                    schema: null,
                    * entries(G, ee) {
                        yield* ge(G, ee).entries(G, ee)
                    },
                    validator: (G, ee) => ge(G, ee).validator(G, ee),
                    coercer: (G, ee) => ge(G, ee).coercer(G, ee),
                    refiner: (G, ee) => ge(G, ee).refiner(G, ee)
                })
            }

            function _(ge) {
                let G;
                return new v({
                    type: "lazy",
                    schema: null,
                    * entries(ee, xe) {
                        G ? ? (G = ge()), yield* G.entries(ee, xe)
                    },
                    validator: (ee, xe) => (G ? ? (G = ge()), G.validator(ee, xe)),
                    coercer: (ee, xe) => (G ? ? (G = ge()), G.coercer(ee, xe)),
                    refiner: (ee, xe) => (G ? ? (G = ge()), G.refiner(ee, xe))
                })
            }

            function U(ge, G) {
                const {
                    schema: ee
                } = ge, xe = { ...ee
                };
                for (const Ae of G) delete xe[Ae];
                return "type" === ge.type ? Ie(xe) : H(xe)
            }

            function S(ge) {
                const G = ge instanceof v ? { ...ge.schema
                } : { ...ge
                };
                for (const ee in G) G[ee] = ce(G[ee]);
                return H(G)
            }

            function D(ge, G) {
                const {
                    schema: ee
                } = ge, xe = {};
                for (const Ae of G) xe[Ae] = ee[Ae];
                return H(xe)
            }

            function M(ge, G) {
                return console.warn("superstruct@0.11 - The `struct` helper has been renamed to `define`."), r(ge, G)
            }

            function fe() {
                return r("any", () => !0)
            }

            function Se(ge) {
                return new v({
                    type: "array",
                    schema: ge,
                    * entries(G) {
                        if (ge && Array.isArray(G))
                            for (const [ee, xe] of G.entries()) yield [ee, xe, ge]
                    },
                    coercer: G => Array.isArray(G) ? G.slice() : G,
                    validator: G => Array.isArray(G) || `Expected an array value, but received: ${u(G)}`
                })
            }

            function _e() {
                return r("bigint", ge => "bigint" == typeof ge)
            }

            function O() {
                return r("boolean", ge => "boolean" == typeof ge)
            }

            function P() {
                return r("date", ge => ge instanceof Date && !isNaN(ge.getTime()) || `Expected a valid \`Date\` object, but received: ${u(ge)}`)
            }

            function C(ge) {
                const G = {},
                    ee = ge.map(xe => u(xe)).join();
                for (const xe of ge) G[xe] = xe;
                return new v({
                    type: "enums",
                    schema: G,
                    validator: xe => ge.includes(xe) || `Expected one of \`${ee}\`, but received: ${u(xe)}`
                })
            }

            function ae() {
                return r("func", ge => "function" == typeof ge || `Expected a function, but received: ${u(ge)}`)
            }

            function J(ge) {
                return r("instance", G => G instanceof ge || `Expected a \`${ge.name}\` instance, but received: ${u(G)}`)
            }

            function re() {
                return r("integer", ge => "number" == typeof ge && !isNaN(ge) && Number.isInteger(ge) || `Expected an integer, but received: ${u(ge)}`)
            }

            function Y(ge) {
                return new v({
                    type: "intersection",
                    schema: null,
                    * entries(G, ee) {
                        for (const xe of ge) yield* xe.entries(G, ee)
                    },
                    * validator(G, ee) {
                        for (const xe of ge) yield* xe.validator(G, ee)
                    },
                    * refiner(G, ee) {
                        for (const xe of ge) yield* xe.refiner(G, ee)
                    }
                })
            }

            function te(ge) {
                const G = u(ge),
                    ee = typeof ge;
                return new v({
                    type: "literal",
                    schema: "string" === ee || "number" === ee || "boolean" === ee ? ge : null,
                    validator: xe => xe === ge || `Expected the literal \`${G}\`, but received: ${u(xe)}`
                })
            }

            function F(ge, G) {
                return new v({
                    type: "map",
                    schema: null,
                    * entries(ee) {
                        if (ge && G && ee instanceof Map)
                            for (const [xe, Ae] of ee.entries()) yield [xe, xe, ge], yield [xe, Ae, G]
                    },
                    coercer: ee => ee instanceof Map ? new Map(ee) : ee,
                    validator: ee => ee instanceof Map || `Expected a \`Map\` object, but received: ${u(ee)}`
                })
            }

            function se() {
                return r("never", () => !1)
            }

            function V(ge) {
                return new v({ ...ge,
                    validator: (G, ee) => null === G || ge.validator(G, ee),
                    refiner: (G, ee) => null === G || ge.refiner(G, ee)
                })
            }

            function q() {
                return r("number", ge => "number" == typeof ge && !isNaN(ge) || `Expected a number, but received: ${u(ge)}`)
            }

            function H(ge) {
                const G = ge ? Object.keys(ge) : [],
                    ee = se();
                return new v({
                    type: "object",
                    schema: ge || null,
                    * entries(xe) {
                        if (ge && w(xe)) {
                            const Ae = new Set(Object.keys(xe));
                            for (const je of G) Ae.delete(je), yield [je, xe[je], ge[je]];
                            for (const je of Ae) yield [je, xe[je], ee]
                        }
                    },
                    validator: xe => w(xe) || `Expected an object, but received: ${u(xe)}`,
                    coercer: xe => w(xe) ? { ...xe
                    } : xe
                })
            }

            function ce(ge) {
                return new v({ ...ge,
                    validator: (G, ee) => void 0 === G || ge.validator(G, ee),
                    refiner: (G, ee) => void 0 === G || ge.refiner(G, ee)
                })
            }

            function Ee(ge, G) {
                return new v({
                    type: "record",
                    schema: null,
                    * entries(ee) {
                        if (w(ee))
                            for (const xe in ee) {
                                const Ae = ee[xe];
                                yield [xe, xe, ge], yield [xe, Ae, G]
                            }
                    },
                    validator: ee => w(ee) || `Expected an object, but received: ${u(ee)}`
                })
            }

            function Le() {
                return r("regexp", ge => ge instanceof RegExp)
            }

            function oe(ge) {
                return new v({
                    type: "set",
                    schema: null,
                    * entries(G) {
                        if (ge && G instanceof Set)
                            for (const ee of G) yield [ee, ee, ge]
                    },
                    coercer: G => G instanceof Set ? new Set(G) : G,
                    validator: G => G instanceof Set || `Expected a \`Set\` object, but received: ${u(G)}`
                })
            }

            function Q() {
                return r("string", ge => "string" == typeof ge || `Expected a string, but received: ${u(ge)}`)
            }

            function me(ge) {
                const G = se();
                return new v({
                    type: "tuple",
                    schema: null,
                    * entries(ee) {
                        if (Array.isArray(ee)) {
                            const xe = Math.max(ge.length, ee.length);
                            for (let Ae = 0; Ae < xe; Ae++) yield [Ae, ee[Ae], ge[Ae] || G]
                        }
                    },
                    validator: ee => Array.isArray(ee) || `Expected an array, but received: ${u(ee)}`
                })
            }

            function Ie(ge) {
                const G = Object.keys(ge);
                return new v({
                    type: "type",
                    schema: ge,
                    * entries(ee) {
                        if (w(ee))
                            for (const xe of G) yield [xe, ee[xe], ge[xe]]
                    },
                    validator: ee => w(ee) || `Expected an object, but received: ${u(ee)}`,
                    coercer: ee => w(ee) ? { ...ee
                    } : ee
                })
            }

            function Ze(ge) {
                const G = ge.map(ee => ee.type).join(" | ");
                return new v({
                    type: "union",
                    schema: null,
                    coercer(ee) {
                        for (const xe of ge) {
                            const [Ae, je] = xe.validate(ee, {
                                coerce: !0
                            });
                            if (!Ae) return je
                        }
                        return ee
                    },
                    validator(ee, xe) {
                        const Ae = [];
                        for (const je of ge) {
                            const [...Qe] = R(ee, je, xe), [j] = Qe;
                            if (!j[0]) return [];
                            for (const [Ne] of Qe) Ne && Ae.push(Ne)
                        }
                        return [`Expected the value to satisfy a union of \`${G}\`, but received: ${u(ee)}`, ...Ae]
                    }
                })
            }

            function N() {
                return r("unknown", () => !0)
            }

            function z(ge, G, ee) {
                return new v({ ...ge,
                    coercer: (xe, Ae) => E(xe, G) ? ge.coercer(ee(xe, Ae), Ae) : ge.coercer(xe, Ae)
                })
            }

            function K(ge, G, ee = {}) {
                return z(ge, N(), xe => {
                    const Ae = "function" == typeof G ? G() : G;
                    if (void 0 === xe) return Ae;
                    if (!ee.strict && B(xe) && B(Ae)) {
                        const je = { ...xe
                        };
                        let Qe = !1;
                        for (const j in Ae) void 0 === je[j] && (je[j] = Ae[j], Qe = !0);
                        if (Qe) return je
                    }
                    return xe
                })
            }

            function de(ge) {
                return z(ge, Q(), G => G.trim())
            }

            function we(ge) {
                return At(ge, "empty", G => {
                    const ee = Be(G);
                    return 0 === ee || `Expected an empty ${ge.type} but received one with a size of \`${ee}\``
                })
            }

            function Be(ge) {
                return ge instanceof Map || ge instanceof Set ? ge.size : ge.length
            }

            function he(ge, G, ee = {}) {
                const {
                    exclusive: xe
                } = ee;
                return At(ge, "max", Ae => xe ? Ae < G : Ae <= G || `Expected a ${ge.type} less than ${xe?"":"or equal to "}${G} but received \`${Ae}\``)
            }

            function We(ge, G, ee = {}) {
                const {
                    exclusive: xe
                } = ee;
                return At(ge, "min", Ae => xe ? Ae > G : Ae >= G || `Expected a ${ge.type} greater than ${xe?"":"or equal to "}${G} but received \`${Ae}\``)
            }

            function gt(ge) {
                return At(ge, "nonempty", G => Be(G) > 0 || `Expected a nonempty ${ge.type} but received an empty one`)
            }

            function xt(ge, G) {
                return At(ge, "pattern", ee => G.test(ee) || `Expected a ${ge.type} matching \`/${G.source}/\` but received "${ee}"`)
            }

            function yt(ge, G, ee = G) {
                const xe = `Expected a ${ge.type}`,
                    Ae = G === ee ? `of \`${G}\`` : `between \`${G}\` and \`${ee}\``;
                return At(ge, "size", je => {
                    if ("number" == typeof je || je instanceof Date) return G <= je && je <= ee || `${xe} ${Ae} but received \`${je}\``;
                    if (je instanceof Map || je instanceof Set) {
                        const {
                            size: Qe
                        } = je;
                        return G <= Qe && Qe <= ee || `${xe} with a size ${Ae} but received one with a size of \`${Qe}\``
                    } {
                        const {
                            length: Qe
                        } = je;
                        return G <= Qe && Qe <= ee || `${xe} with a length ${Ae} but received one with a length of \`${Qe}\``
                    }
                })
            }

            function At(ge, G, ee) {
                return new v({ ...ge,
                    * refiner(xe, Ae) {
                        yield* ge.refiner(xe, Ae);
                        const Qe = T(ee(xe, Ae), Ae, ge, xe);
                        for (const j of Qe) yield { ...j,
                            refinement: G
                        }
                    }
                })
            }
        }
    }
]);
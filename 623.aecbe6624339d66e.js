(self.webpackChunkwall_st = self.webpackChunkwall_st || []).push([
    [623], {
        35972: (ue, P, w) => {
            "use strict";
            P.Xx = P._w = P.aP = P.KS = P.jQ = void 0;
            w(25465);
            const K = w(56713);
            w(43403);

            function A(D) {
                const F = new Float64Array(16);
                if (D)
                    for (let T = 0; T < D.length; T++) F[T] = D[T];
                return F
            }
            P.jQ = 64, P.KS = 64, P.aP = 32, new Uint8Array(32)[0] = 9;
            const q = A(),
                O = A([1]),
                L = (A([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]), A([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222])),
                ee = A([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]),
                G = A([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]);
            A([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);

            function $(D, F) {
                for (let T = 0; T < 16; T++) D[T] = 0 | F[T]
            }

            function pe(D) {
                let F = 1;
                for (let T = 0; T < 16; T++) {
                    let o = D[T] + F + 65535;
                    F = Math.floor(o / 65536), D[T] = o - 65536 * F
                }
                D[0] += F - 1 + 37 * (F - 1)
            }

            function he(D, F, T) {
                const o = ~(T - 1);
                for (let x = 0; x < 16; x++) {
                    const Y = o & (D[x] ^ F[x]);
                    D[x] ^= Y, F[x] ^= Y
                }
            }

            function ve(D, F) {
                const T = A(),
                    o = A();
                for (let x = 0; x < 16; x++) o[x] = F[x];
                pe(o), pe(o), pe(o);
                for (let x = 0; x < 2; x++) {
                    T[0] = o[0] - 65517;
                    for (let ae = 1; ae < 15; ae++) T[ae] = o[ae] - 65535 - (T[ae - 1] >> 16 & 1), T[ae - 1] &= 65535;
                    T[15] = o[15] - 32767 - (T[14] >> 16 & 1);
                    const Y = T[15] >> 16 & 1;
                    T[14] &= 65535, he(o, T, 1 - Y)
                }
                for (let x = 0; x < 16; x++) D[2 * x] = 255 & o[x], D[2 * x + 1] = o[x] >> 8
            }

            function Ce(D) {
                const F = new Uint8Array(32);
                return ve(F, D), 1 & F[0]
            }

            function oe(D, F, T) {
                for (let o = 0; o < 16; o++) D[o] = F[o] + T[o]
            }

            function M(D, F, T) {
                for (let o = 0; o < 16; o++) D[o] = F[o] - T[o]
            }

            function B(D, F, T) {
                let o, x, Y = 0,
                    ae = 0,
                    ge = 0,
                    we = 0,
                    fe = 0,
                    be = 0,
                    Ze = 0,
                    st = 0,
                    We = 0,
                    Le = 0,
                    Ne = 0,
                    Se = 0,
                    Ee = 0,
                    Pe = 0,
                    Ie = 0,
                    Re = 0,
                    De = 0,
                    ke = 0,
                    ot = 0,
                    lt = 0,
                    Me = 0,
                    ie = 0,
                    Qe = 0,
                    yt = 0,
                    bt = 0,
                    xt = 0,
                    Rt = 0,
                    Pt = 0,
                    Ot = 0,
                    Nt = 0,
                    Vt = 0,
                    ze = T[0],
                    Ye = T[1],
                    Ue = T[2],
                    et = T[3],
                    je = T[4],
                    Ke = T[5],
                    tt = T[6],
                    Je = T[7],
                    rt = T[8],
                    Ve = T[9],
                    Ae = T[10],
                    Be = T[11],
                    Q = T[12],
                    $e = T[13],
                    qe = T[14],
                    Fe = T[15];
                o = F[0], Y += o * ze, ae += o * Ye, ge += o * Ue, we += o * et, fe += o * je, be += o * Ke, Ze += o * tt, st += o * Je, We += o * rt, Le += o * Ve, Ne += o * Ae, Se += o * Be, Ee += o * Q, Pe += o * $e, Ie += o * qe, Re += o * Fe, o = F[1], ae += o * ze, ge += o * Ye, we += o * Ue, fe += o * et, be += o * je, Ze += o * Ke, st += o * tt, We += o * Je, Le += o * rt, Ne += o * Ve, Se += o * Ae, Ee += o * Be, Pe += o * Q, Ie += o * $e, Re += o * qe, De += o * Fe, o = F[2], ge += o * ze, we += o * Ye, fe += o * Ue, be += o * et, Ze += o * je, st += o * Ke, We += o * tt, Le += o * Je, Ne += o * rt, Se += o * Ve, Ee += o * Ae, Pe += o * Be, Ie += o * Q, Re += o * $e, De += o * qe, ke += o * Fe, o = F[3], we += o * ze, fe += o * Ye, be += o * Ue, Ze += o * et, st += o * je, We += o * Ke, Le += o * tt, Ne += o * Je, Se += o * rt, Ee += o * Ve, Pe += o * Ae, Ie += o * Be, Re += o * Q, De += o * $e, ke += o * qe, ot += o * Fe, o = F[4], fe += o * ze, be += o * Ye, Ze += o * Ue, st += o * et, We += o * je, Le += o * Ke, Ne += o * tt, Se += o * Je, Ee += o * rt, Pe += o * Ve, Ie += o * Ae, Re += o * Be, De += o * Q, ke += o * $e, ot += o * qe, lt += o * Fe, o = F[5], be += o * ze, Ze += o * Ye, st += o * Ue, We += o * et, Le += o * je, Ne += o * Ke, Se += o * tt, Ee += o * Je, Pe += o * rt, Ie += o * Ve, Re += o * Ae, De += o * Be, ke += o * Q, ot += o * $e, lt += o * qe, Me += o * Fe, o = F[6], Ze += o * ze, st += o * Ye, We += o * Ue, Le += o * et, Ne += o * je, Se += o * Ke, Ee += o * tt, Pe += o * Je, Ie += o * rt, Re += o * Ve, De += o * Ae, ke += o * Be, ot += o * Q, lt += o * $e, Me += o * qe, ie += o * Fe, o = F[7], st += o * ze, We += o * Ye, Le += o * Ue, Ne += o * et, Se += o * je, Ee += o * Ke, Pe += o * tt, Ie += o * Je, Re += o * rt, De += o * Ve, ke += o * Ae, ot += o * Be, lt += o * Q, Me += o * $e, ie += o * qe, Qe += o * Fe, o = F[8], We += o * ze, Le += o * Ye, Ne += o * Ue, Se += o * et, Ee += o * je, Pe += o * Ke, Ie += o * tt, Re += o * Je, De += o * rt, ke += o * Ve, ot += o * Ae, lt += o * Be, Me += o * Q, ie += o * $e, Qe += o * qe, yt += o * Fe, o = F[9], Le += o * ze, Ne += o * Ye, Se += o * Ue, Ee += o * et, Pe += o * je, Ie += o * Ke, Re += o * tt, De += o * Je, ke += o * rt, ot += o * Ve, lt += o * Ae, Me += o * Be, ie += o * Q, Qe += o * $e, yt += o * qe, bt += o * Fe, o = F[10], Ne += o * ze, Se += o * Ye, Ee += o * Ue, Pe += o * et, Ie += o * je, Re += o * Ke, De += o * tt, ke += o * Je, ot += o * rt, lt += o * Ve, Me += o * Ae, ie += o * Be, Qe += o * Q, yt += o * $e, bt += o * qe, xt += o * Fe, o = F[11], Se += o * ze, Ee += o * Ye, Pe += o * Ue, Ie += o * et, Re += o * je, De += o * Ke, ke += o * tt, ot += o * Je, lt += o * rt, Me += o * Ve, ie += o * Ae, Qe += o * Be, yt += o * Q, bt += o * $e, xt += o * qe, Rt += o * Fe, o = F[12], Ee += o * ze, Pe += o * Ye, Ie += o * Ue, Re += o * et, De += o * je, ke += o * Ke, ot += o * tt, lt += o * Je, Me += o * rt, ie += o * Ve, Qe += o * Ae, yt += o * Be, bt += o * Q, xt += o * $e, Rt += o * qe, Pt += o * Fe, o = F[13], Pe += o * ze, Ie += o * Ye, Re += o * Ue, De += o * et, ke += o * je, ot += o * Ke, lt += o * tt, Me += o * Je, ie += o * rt, Qe += o * Ve, yt += o * Ae, bt += o * Be, xt += o * Q, Rt += o * $e, Pt += o * qe, Ot += o * Fe, o = F[14], Ie += o * ze, Re += o * Ye, De += o * Ue, ke += o * et, ot += o * je, lt += o * Ke, Me += o * tt, ie += o * Je, Qe += o * rt, yt += o * Ve, bt += o * Ae, xt += o * Be, Rt += o * Q, Pt += o * $e, Ot += o * qe, Nt += o * Fe, o = F[15], Re += o * ze, De += o * Ye, ke += o * Ue, ot += o * et, lt += o * je, Me += o * Ke, ie += o * tt, Qe += o * Je, yt += o * rt, bt += o * Ve, xt += o * Ae, Rt += o * Be, Pt += o * Q, Ot += o * $e, Nt += o * qe, Vt += o * Fe, Y += 38 * De, ae += 38 * ke, ge += 38 * ot, we += 38 * lt, fe += 38 * Me, be += 38 * ie, Ze += 38 * Qe, st += 38 * yt, We += 38 * bt, Le += 38 * xt, Ne += 38 * Rt, Se += 38 * Pt, Ee += 38 * Ot, Pe += 38 * Nt, Ie += 38 * Vt, x = 1, o = Y + x + 65535, x = Math.floor(o / 65536), Y = o - 65536 * x, o = ae + x + 65535, x = Math.floor(o / 65536), ae = o - 65536 * x, o = ge + x + 65535, x = Math.floor(o / 65536), ge = o - 65536 * x, o = we + x + 65535, x = Math.floor(o / 65536), we = o - 65536 * x, o = fe + x + 65535, x = Math.floor(o / 65536), fe = o - 65536 * x, o = be + x + 65535, x = Math.floor(o / 65536), be = o - 65536 * x, o = Ze + x + 65535, x = Math.floor(o / 65536), Ze = o - 65536 * x, o = st + x + 65535, x = Math.floor(o / 65536), st = o - 65536 * x, o = We + x + 65535, x = Math.floor(o / 65536), We = o - 65536 * x, o = Le + x + 65535, x = Math.floor(o / 65536), Le = o - 65536 * x, o = Ne + x + 65535, x = Math.floor(o / 65536), Ne = o - 65536 * x, o = Se + x + 65535, x = Math.floor(o / 65536), Se = o - 65536 * x, o = Ee + x + 65535, x = Math.floor(o / 65536), Ee = o - 65536 * x, o = Pe + x + 65535, x = Math.floor(o / 65536), Pe = o - 65536 * x, o = Ie + x + 65535, x = Math.floor(o / 65536), Ie = o - 65536 * x, o = Re + x + 65535, x = Math.floor(o / 65536), Re = o - 65536 * x, Y += x - 1 + 37 * (x - 1), x = 1, o = Y + x + 65535, x = Math.floor(o / 65536), Y = o - 65536 * x, o = ae + x + 65535, x = Math.floor(o / 65536), ae = o - 65536 * x, o = ge + x + 65535, x = Math.floor(o / 65536), ge = o - 65536 * x, o = we + x + 65535, x = Math.floor(o / 65536), we = o - 65536 * x, o = fe + x + 65535, x = Math.floor(o / 65536), fe = o - 65536 * x, o = be + x + 65535, x = Math.floor(o / 65536), be = o - 65536 * x, o = Ze + x + 65535, x = Math.floor(o / 65536), Ze = o - 65536 * x, o = st + x + 65535, x = Math.floor(o / 65536), st = o - 65536 * x, o = We + x + 65535, x = Math.floor(o / 65536), We = o - 65536 * x, o = Le + x + 65535, x = Math.floor(o / 65536), Le = o - 65536 * x, o = Ne + x + 65535, x = Math.floor(o / 65536), Ne = o - 65536 * x, o = Se + x + 65535, x = Math.floor(o / 65536), Se = o - 65536 * x, o = Ee + x + 65535, x = Math.floor(o / 65536), Ee = o - 65536 * x, o = Pe + x + 65535, x = Math.floor(o / 65536), Pe = o - 65536 * x, o = Ie + x + 65535, x = Math.floor(o / 65536), Ie = o - 65536 * x, o = Re + x + 65535, x = Math.floor(o / 65536), Re = o - 65536 * x, Y += x - 1 + 37 * (x - 1), D[0] = Y, D[1] = ae, D[2] = ge, D[3] = we, D[4] = fe, D[5] = be, D[6] = Ze, D[7] = st, D[8] = We, D[9] = Le, D[10] = Ne, D[11] = Se, D[12] = Ee, D[13] = Pe, D[14] = Ie, D[15] = Re
            }

            function f(D, F) {
                B(D, F, F)
            }

            function _(D, F) {
                const T = A(),
                    o = A(),
                    x = A(),
                    Y = A(),
                    ae = A(),
                    ge = A(),
                    we = A(),
                    fe = A(),
                    be = A();
                M(T, D[1], D[0]), M(be, F[1], F[0]), B(T, T, be), oe(o, D[0], D[1]), oe(be, F[0], F[1]), B(o, o, be), B(x, D[3], F[3]), B(x, x, L), B(Y, D[2], F[2]), oe(Y, Y, Y), M(ae, o, T), M(ge, Y, x), oe(we, Y, x), oe(fe, o, T), B(D[0], ae, ge), B(D[1], fe, we), B(D[2], we, ge), B(D[3], ae, fe)
            }

            function I(D, F, T) {
                for (let o = 0; o < 4; o++) he(D[o], F[o], T)
            }

            function d(D, F) {
                const T = A(),
                    o = A(),
                    x = A();
                (function g(D, F) {
                    const T = A();
                    let o;
                    for (o = 0; o < 16; o++) T[o] = F[o];
                    for (o = 253; o >= 0; o--) f(T, T), 2 !== o && 4 !== o && B(T, T, F);
                    for (o = 0; o < 16; o++) D[o] = T[o]
                })(x, F[2]), B(T, F[0], x), B(o, F[1], x), ve(D, o), D[31] ^= Ce(T) << 7
            }

            function z(D, F) {
                const T = [A(), A(), A(), A()];
                $(T[0], ee), $(T[1], G), $(T[2], O), B(T[3], ee, G),
                    function m(D, F, T) {
                        $(D[0], q), $(D[1], O), $(D[2], O), $(D[3], q);
                        for (let o = 255; o >= 0; --o) {
                            const x = T[o / 8 | 0] >> (7 & o) & 1;
                            I(D, F, x), _(F, D), _(D, D), I(D, F, x)
                        }
                    }(D, T, F)
            }
            P._w = function te(D) {
                if (D.length !== P.aP) throw new Error(`ed25519: seed must be ${P.aP} bytes`);
                const F = (0, K.hash)(D);
                F[0] &= 248, F[31] &= 127, F[31] |= 64;
                const T = new Uint8Array(32),
                    o = [A(), A(), A(), A()];
                z(o, F), d(T, o);
                const x = new Uint8Array(64);
                return x.set(D), x.set(T, 32), {
                    publicKey: T,
                    secretKey: x
                }
            };
            const V = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);

            function N(D, F) {
                let T, o, x, Y;
                for (o = 63; o >= 32; --o) {
                    for (T = 0, x = o - 32, Y = o - 12; x < Y; ++x) F[x] += T - 16 * F[o] * V[x - (o - 32)], T = Math.floor((F[x] + 128) / 256), F[x] -= 256 * T;
                    F[x] += T, F[o] = 0
                }
                for (T = 0, x = 0; x < 32; x++) F[x] += T - (F[31] >> 4) * V[x], T = F[x] >> 8, F[x] &= 255;
                for (x = 0; x < 32; x++) F[x] -= T * V[x];
                for (o = 0; o < 32; o++) F[o + 1] += F[o] >> 8, D[o] = 255 & F[o]
            }

            function ne(D) {
                const F = new Float64Array(64);
                for (let T = 0; T < 64; T++) F[T] = D[T];
                for (let T = 0; T < 64; T++) D[T] = 0;
                N(D, F)
            }
            P.Xx = function de(D, F) {
                const T = new Float64Array(64),
                    o = [A(), A(), A(), A()],
                    x = (0, K.hash)(D.subarray(0, 32));
                x[0] &= 248, x[31] &= 127, x[31] |= 64;
                const Y = new Uint8Array(64);
                Y.set(x.subarray(32), 32);
                const ae = new K.SHA512;
                ae.update(Y.subarray(32)), ae.update(F);
                const ge = ae.digest();
                ae.clean(), ne(ge), z(o, ge), d(Y, o), ae.reset(), ae.update(Y.subarray(0, 32)), ae.update(D.subarray(32)), ae.update(F);
                const we = ae.digest();
                ne(we);
                for (let fe = 0; fe < 32; fe++) T[fe] = ge[fe];
                for (let fe = 0; fe < 32; fe++)
                    for (let be = 0; be < 32; be++) T[fe + be] += we[fe] * x[be];
                return N(Y.subarray(32), T), Y
            }
        },
        56713: (ue, P, w) => {
            "use strict";
            Object.defineProperty(P, "__esModule", {
                value: !0
            });
            var u = w(99546),
                H = w(43403);
            P.DIGEST_LENGTH = 64, P.BLOCK_SIZE = 128;
            var K = function() {
                function q() {
                    this.digestLength = P.DIGEST_LENGTH, this.blockSize = P.BLOCK_SIZE, this._stateHi = new Int32Array(8), this._stateLo = new Int32Array(8), this._tempHi = new Int32Array(16), this._tempLo = new Int32Array(16), this._buffer = new Uint8Array(256), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset()
                }
                return q.prototype._initState = function() {
                    this._stateHi[0] = 1779033703, this._stateHi[1] = 3144134277, this._stateHi[2] = 1013904242, this._stateHi[3] = 2773480762, this._stateHi[4] = 1359893119, this._stateHi[5] = 2600822924, this._stateHi[6] = 528734635, this._stateHi[7] = 1541459225, this._stateLo[0] = 4089235720, this._stateLo[1] = 2227873595, this._stateLo[2] = 4271175723, this._stateLo[3] = 1595750129, this._stateLo[4] = 2917565137, this._stateLo[5] = 725511199, this._stateLo[6] = 4215389547, this._stateLo[7] = 327033209
                }, q.prototype.reset = function() {
                    return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this
                }, q.prototype.clean = function() {
                    H.wipe(this._buffer), H.wipe(this._tempHi), H.wipe(this._tempLo), this.reset()
                }, q.prototype.update = function(O, R) {
                    if (void 0 === R && (R = O.length), this._finished) throw new Error("SHA512: can't update because hash was finished.");
                    var L = 0;
                    if (this._bytesHashed += R, this._bufferLength > 0) {
                        for (; this._bufferLength < P.BLOCK_SIZE && R > 0;) this._buffer[this._bufferLength++] = O[L++], R--;
                        this._bufferLength === this.blockSize && (A(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize), this._bufferLength = 0)
                    }
                    for (R >= this.blockSize && (L = A(this._tempHi, this._tempLo, this._stateHi, this._stateLo, O, L, R), R %= this.blockSize); R > 0;) this._buffer[this._bufferLength++] = O[L++], R--;
                    return this
                }, q.prototype.finish = function(O) {
                    if (!this._finished) {
                        var R = this._bytesHashed,
                            L = this._bufferLength,
                            ee = R / 536870912 | 0,
                            G = R << 3,
                            le = R % 128 < 112 ? 128 : 256;
                        this._buffer[L] = 128;
                        for (var $ = L + 1; $ < le - 8; $++) this._buffer[$] = 0;
                        u.writeUint32BE(ee, this._buffer, le - 8), u.writeUint32BE(G, this._buffer, le - 4), A(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, le), this._finished = !0
                    }
                    for ($ = 0; $ < this.digestLength / 8; $++) u.writeUint32BE(this._stateHi[$], O, 8 * $), u.writeUint32BE(this._stateLo[$], O, 8 * $ + 4);
                    return this
                }, q.prototype.digest = function() {
                    var O = new Uint8Array(this.digestLength);
                    return this.finish(O), O
                }, q.prototype.saveState = function() {
                    if (this._finished) throw new Error("SHA256: cannot save finished state");
                    return {
                        stateHi: new Int32Array(this._stateHi),
                        stateLo: new Int32Array(this._stateLo),
                        buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
                        bufferLength: this._bufferLength,
                        bytesHashed: this._bytesHashed
                    }
                }, q.prototype.restoreState = function(O) {
                    return this._stateHi.set(O.stateHi), this._stateLo.set(O.stateLo), this._bufferLength = O.bufferLength, O.buffer && this._buffer.set(O.buffer), this._bytesHashed = O.bytesHashed, this._finished = !1, this
                }, q.prototype.cleanSavedState = function(O) {
                    H.wipe(O.stateHi), H.wipe(O.stateLo), O.buffer && H.wipe(O.buffer), O.bufferLength = 0, O.bytesHashed = 0
                }, q
            }();
            P.SHA512 = K;
            var re = new Int32Array([1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591]);

            function A(q, O, R, L, ee, G, le) {
                for (var d, m, z, te, S, Z, V, N, $ = R[0], pe = R[1], he = R[2], ve = R[3], _e = R[4], Te = R[5], Ce = R[6], it = R[7], oe = L[0], M = L[1], B = L[2], f = L[3], g = L[4], p = L[5], _ = L[6], I = L[7]; le >= 128;) {
                    for (var ne = 0; ne < 16; ne++) q[ne] = u.readUint32BE(ee, de = 8 * ne + G), O[ne] = u.readUint32BE(ee, de + 4);
                    for (ne = 0; ne < 80; ne++) {
                        var o, Ze, _t = pe,
                            It = he,
                            ut = ve,
                            D = _e,
                            F = Te,
                            T = Ce,
                            Y = M,
                            ae = B,
                            ge = f,
                            we = g,
                            fe = p,
                            be = _;
                        if (S = 65535 & (m = I), Z = m >>> 16, V = 65535 & (d = it), N = d >>> 16, S += 65535 & (m = (g >>> 14 | _e << 18) ^ (g >>> 18 | _e << 14) ^ (_e >>> 9 | g << 23)), Z += m >>> 16, V += 65535 & (d = (_e >>> 14 | g << 18) ^ (_e >>> 18 | g << 14) ^ (g >>> 9 | _e << 23)), N += d >>> 16, S += 65535 & (m = g & p ^ ~g & _), Z += m >>> 16, V += 65535 & (d = _e & Te ^ ~_e & Ce), N += d >>> 16, S += 65535 & (m = re[2 * ne + 1]), Z += m >>> 16, V += 65535 & (d = re[2 * ne]), N += d >>> 16, Z += (m = O[ne % 16]) >>> 16, V += 65535 & (d = q[ne % 16]), N += d >>> 16, V += (Z += (S += 65535 & m) >>> 16) >>> 16, S = 65535 & (m = te = 65535 & S | Z << 16), Z = m >>> 16, V = 65535 & (d = z = 65535 & V | (N += V >>> 16) << 16), N = d >>> 16, S += 65535 & (m = (oe >>> 28 | $ << 4) ^ ($ >>> 2 | oe << 30) ^ ($ >>> 7 | oe << 25)), Z += m >>> 16, V += 65535 & (d = ($ >>> 28 | oe << 4) ^ (oe >>> 2 | $ << 30) ^ (oe >>> 7 | $ << 25)), N += d >>> 16, Z += (m = oe & M ^ oe & B ^ M & B) >>> 16, V += 65535 & (d = $ & pe ^ $ & he ^ pe & he), N += d >>> 16, o = 65535 & (V += (Z += (S += 65535 & m) >>> 16) >>> 16) | (N += V >>> 16) << 16, Ze = 65535 & S | Z << 16, S = 65535 & (m = ge), Z = m >>> 16, V = 65535 & (d = ut), N = d >>> 16, Z += (m = te) >>> 16, V += 65535 & (d = z), N += d >>> 16, pe = $, he = _t, ve = It, _e = ut = 65535 & (V += (Z += (S += 65535 & m) >>> 16) >>> 16) | (N += V >>> 16) << 16, Te = D, Ce = F, it = T, $ = o, M = oe, B = Y, f = ae, g = ge = 65535 & S | Z << 16, p = we, _ = fe, I = be, oe = Ze, ne % 16 == 15)
                            for (var de = 0; de < 16; de++) S = 65535 & (m = O[de]), Z = m >>> 16, V = 65535 & (d = q[de]), N = d >>> 16, S += 65535 & (m = O[(de + 9) % 16]), Z += m >>> 16, V += 65535 & (d = q[(de + 9) % 16]), N += d >>> 16, S += 65535 & (m = ((te = O[(de + 1) % 16]) >>> 1 | (z = q[(de + 1) % 16]) << 31) ^ (te >>> 8 | z << 24) ^ (te >>> 7 | z << 25)), Z += m >>> 16, V += 65535 & (d = (z >>> 1 | te << 31) ^ (z >>> 8 | te << 24) ^ z >>> 7), N += d >>> 16, Z += (m = ((te = O[(de + 14) % 16]) >>> 19 | (z = q[(de + 14) % 16]) << 13) ^ (z >>> 29 | te << 3) ^ (te >>> 6 | z << 26)) >>> 16, V += 65535 & (d = (z >>> 19 | te << 13) ^ (te >>> 29 | z << 3) ^ z >>> 6), N += d >>> 16, q[de] = 65535 & (V += (Z += (S += 65535 & m) >>> 16) >>> 16) | (N += V >>> 16) << 16, O[de] = 65535 & S | Z << 16
                    }
                    S = 65535 & (m = oe), Z = m >>> 16, V = 65535 & (d = $), N = d >>> 16, Z += (m = L[0]) >>> 16, V += 65535 & (d = R[0]), N += d >>> 16, R[0] = $ = 65535 & (V += (Z += (S += 65535 & m) >>> 16) >>> 16) | (N += V >>> 16) << 16, L[0] = oe = 65535 & S | Z << 16, S = 65535 & (m = M), Z = m >>> 16, V = 65535 & (d = pe), N = d >>> 16, Z += (m = L[1]) >>> 16, V += 65535 & (d = R[1]), N += d >>> 16, R[1] = pe = 65535 & (V += (Z += (S += 65535 & m) >>> 16) >>> 16) | (N += V >>> 16) << 16, L[1] = M = 65535 & S | Z << 16, S = 65535 & (m = B), Z = m >>> 16, V = 65535 & (d = he), N = d >>> 16, Z += (m = L[2]) >>> 16, V += 65535 & (d = R[2]), N += d >>> 16, R[2] = he = 65535 & (V += (Z += (S += 65535 & m) >>> 16) >>> 16) | (N += V >>> 16) << 16, L[2] = B = 65535 & S | Z << 16, S = 65535 & (m = f), Z = m >>> 16, V = 65535 & (d = ve), N = d >>> 16, Z += (m = L[3]) >>> 16, V += 65535 & (d = R[3]), N += d >>> 16, R[3] = ve = 65535 & (V += (Z += (S += 65535 & m) >>> 16) >>> 16) | (N += V >>> 16) << 16, L[3] = f = 65535 & S | Z << 16, S = 65535 & (m = g), Z = m >>> 16, V = 65535 & (d = _e), N = d >>> 16, Z += (m = L[4]) >>> 16, V += 65535 & (d = R[4]), N += d >>> 16, R[4] = _e = 65535 & (V += (Z += (S += 65535 & m) >>> 16) >>> 16) | (N += V >>> 16) << 16, L[4] = g = 65535 & S | Z << 16, S = 65535 & (m = p), Z = m >>> 16, V = 65535 & (d = Te), N = d >>> 16, Z += (m = L[5]) >>> 16, V += 65535 & (d = R[5]), N += d >>> 16, R[5] = Te = 65535 & (V += (Z += (S += 65535 & m) >>> 16) >>> 16) | (N += V >>> 16) << 16, L[5] = p = 65535 & S | Z << 16, S = 65535 & (m = _), Z = m >>> 16, V = 65535 & (d = Ce), N = d >>> 16, Z += (m = L[6]) >>> 16, V += 65535 & (d = R[6]), N += d >>> 16, R[6] = Ce = 65535 & (V += (Z += (S += 65535 & m) >>> 16) >>> 16) | (N += V >>> 16) << 16, L[6] = _ = 65535 & S | Z << 16, S = 65535 & (m = I), Z = m >>> 16, V = 65535 & (d = it), N = d >>> 16, Z += (m = L[7]) >>> 16, V += 65535 & (d = R[7]), N += d >>> 16, R[7] = it = 65535 & (V += (Z += (S += 65535 & m) >>> 16) >>> 16) | (N += V >>> 16) << 16, L[7] = I = 65535 & S | Z << 16, G += 128, le -= 128
                }
                return G
            }
            P.hash = function k(q) {
                var O = new K;
                O.update(q);
                var R = O.digest();
                return O.clean(), R
            }
        },
        7263: (ue, P) => {
            "use strict";

            function w() {
                return (null == global ? void 0 : global.crypto) || (null == global ? void 0 : global.msCrypto) || {}
            }

            function u() {
                const K = w();
                return K.subtle || K.webkitSubtle
            }
            Object.defineProperty(P, "__esModule", {
                value: !0
            }), P.isBrowserCryptoAvailable = P.getSubtleCrypto = P.getBrowerCrypto = void 0, P.getBrowerCrypto = w, P.getSubtleCrypto = u, P.isBrowserCryptoAvailable = function H() {
                return !!w() && !!u()
            }
        },
        24574: (ue, P) => {
            "use strict";

            function w() {
                return typeof document > "u" && typeof navigator < "u" && "ReactNative" === navigator.product
            }

            function u() {
                return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u"
            }
            Object.defineProperty(P, "__esModule", {
                value: !0
            }), P.isBrowser = P.isNode = P.isReactNative = void 0, P.isReactNative = w, P.isNode = u, P.isBrowser = function H() {
                return !w() && !u()
            }
        },
        92299: (ue, P, w) => {
            "use strict";
            Object.defineProperty(P, "__esModule", {
                value: !0
            });
            const u = w(34308);
            u.__exportStar(w(7263), P), u.__exportStar(w(24574), P)
        },
        62108: (ue, P, w) => {
            "use strict";
            w.d(P, {
                q: () => u
            });
            class u {}
        },
        70699: (ue, P, w) => {
            "use strict";
            w.r(P), w.d(P, {
                IEvents: () => u.q
            });
            var u = w(62108)
        },
        94953: (ue, P, w) => {
            "use strict";
            Object.defineProperty(P, "__esModule", {
                value: !0
            }), P.HEARTBEAT_EVENTS = P.HEARTBEAT_INTERVAL = void 0;
            const u = w(35409);
            P.HEARTBEAT_INTERVAL = u.FIVE_SECONDS, P.HEARTBEAT_EVENTS = {
                pulse: "heartbeat_pulse"
            }
        },
        85368: (ue, P, w) => {
            "use strict";
            Object.defineProperty(P, "__esModule", {
                value: !0
            }), w(61116).__exportStar(w(94953), P)
        },
        69754: (ue, P, w) => {
            "use strict";
            Object.defineProperty(P, "__esModule", {
                value: !0
            }), P.HeartBeat = void 0;
            const u = w(61116),
                H = w(82016),
                K = w(35409),
                re = w(14083),
                A = w(85368);
            class k extends re.IHeartBeat {
                constructor(O) {
                    super(O), this.events = new H.EventEmitter, this.interval = A.HEARTBEAT_INTERVAL, this.interval = O ? .interval || A.HEARTBEAT_INTERVAL
                }
                static init(O) {
                    return u.__awaiter(this, void 0, void 0, function*() {
                        const R = new k(O);
                        return yield R.init(), R
                    })
                }
                init() {
                    return u.__awaiter(this, void 0, void 0, function*() {
                        yield this.initialize()
                    })
                }
                stop() {
                    clearInterval(this.intervalRef)
                }
                on(O, R) {
                    this.events.on(O, R)
                }
                once(O, R) {
                    this.events.once(O, R)
                }
                off(O, R) {
                    this.events.off(O, R)
                }
                removeListener(O, R) {
                    this.events.removeListener(O, R)
                }
                initialize() {
                    return u.__awaiter(this, void 0, void 0, function*() {
                        this.intervalRef = setInterval(() => this.pulse(), K.toMiliseconds(this.interval))
                    })
                }
                pulse() {
                    this.events.emit(A.HEARTBEAT_EVENTS.pulse)
                }
            }
            P.HeartBeat = k
        },
        80986: (ue, P, w) => {
            "use strict";
            Object.defineProperty(P, "__esModule", {
                value: !0
            });
            const u = w(61116);
            u.__exportStar(w(69754), P), u.__exportStar(w(14083), P), u.__exportStar(w(85368), P)
        },
        37293: (ue, P, w) => {
            "use strict";
            Object.defineProperty(P, "__esModule", {
                value: !0
            }), P.IHeartBeat = void 0;
            const u = w(70699);
            P.IHeartBeat = class H extends u.IEvents {
                constructor(re) {
                    super()
                }
            }
        },
        14083: (ue, P, w) => {
            "use strict";
            Object.defineProperty(P, "__esModule", {
                value: !0
            }), w(61116).__exportStar(w(37293), P)
        },
        11474: (ue, P, w) => {
            "use strict";
            w.d(P, {
                r: () => re
            });
            var u = w(49671),
                H = w(82016),
                K = w(26446);
            class re extends K.IJsonRpcProvider {
                constructor(O) {
                    super(O), this.events = new H.EventEmitter, this.hasRegisteredEventListeners = !1, this.connection = this.setConnection(O), this.connection.connected && this.registerEventListeners()
                }
                connect(O = this.connection) {
                    var R = this;
                    return (0, u.Z)(function*() {
                        yield R.open(O)
                    })()
                }
                disconnect() {
                    var O = this;
                    return (0, u.Z)(function*() {
                        yield O.close()
                    })()
                }
                on(O, R) {
                    this.events.on(O, R)
                }
                once(O, R) {
                    this.events.once(O, R)
                }
                off(O, R) {
                    this.events.off(O, R)
                }
                removeListener(O, R) {
                    this.events.removeListener(O, R)
                }
                request(O, R) {
                    var L = this;
                    return (0, u.Z)(function*() {
                        return L.requestStrict((0, K.formatJsonRpcRequest)(O.method, O.params || [], O.id || (0, K.getBigIntRpcId)().toString()), R)
                    })()
                }
                requestStrict(O, R) {
                    var L = this;
                    return (0, u.Z)(function*() {
                        return new Promise(function() {
                            var ee = (0, u.Z)(function*(G, le) {
                                if (!L.connection.connected) try {
                                    yield L.open()
                                } catch ($) {
                                    le($)
                                }
                                L.events.on(`${O.id}`, $ => {
                                    (0, K.isJsonRpcError)($) ? le($.error): G($.result)
                                });
                                try {
                                    yield L.connection.send(O, R)
                                } catch ($) {
                                    le($)
                                }
                            });
                            return function(G, le) {
                                return ee.apply(this, arguments)
                            }
                        }())
                    })()
                }
                setConnection(O = this.connection) {
                    return O
                }
                onPayload(O) {
                    this.events.emit("payload", O), (0, K.isJsonRpcResponse)(O) ? this.events.emit(`${O.id}`, O) : this.events.emit("message", {
                        type: O.method,
                        data: O.params
                    })
                }
                onClose(O) {
                    O && 3e3 === O.code && this.events.emit("error", new Error(`WebSocket connection closed abnormally with code: ${O.code} ${O.reason?`(${O.reason})`:""}`)), this.events.emit("disconnect")
                }
                open(O = this.connection) {
                    var R = this;
                    return (0, u.Z)(function*() {
                        R.connection === O && R.connection.connected || (R.connection.connected && R.close(), "string" == typeof O && (yield R.connection.open(O), O = R.connection), R.connection = R.setConnection(O), yield R.connection.open(), R.registerEventListeners(), R.events.emit("connect"))
                    })()
                }
                close() {
                    var O = this;
                    return (0, u.Z)(function*() {
                        yield O.connection.close()
                    })()
                }
                registerEventListeners() {
                    this.hasRegisteredEventListeners || (this.connection.on("payload", O => this.onPayload(O)), this.connection.on("close", O => this.onClose(O)), this.connection.on("error", O => this.events.emit("error", O)), this.connection.on("register_error", O => this.onClose()), this.hasRegisteredEventListeners = !0)
                }
            }
        },
        44087: (ue, P, w) => {
            "use strict";
            w.d(P, {
                CA: () => k,
                JV: () => L,
                O4: () => A,
                dQ: () => q,
                xK: () => R
            });
            const A = "INTERNAL_ERROR",
                k = "SERVER_ERROR",
                q = [-32700, -32600, -32601, -32602, -32603],
                R = {
                    PARSE_ERROR: {
                        code: -32700,
                        message: "Parse error"
                    },
                    INVALID_REQUEST: {
                        code: -32600,
                        message: "Invalid Request"
                    },
                    METHOD_NOT_FOUND: {
                        code: -32601,
                        message: "Method not found"
                    },
                    INVALID_PARAMS: {
                        code: -32602,
                        message: "Invalid params"
                    },
                    [A]: {
                        code: -32603,
                        message: "Internal error"
                    },
                    [k]: {
                        code: -32e3,
                        message: "Server error"
                    }
                },
                L = k
        },
        58102: (ue, P, w) => {
            "use strict";
            var u = w(92299);
            w.o(u, "IJsonRpcProvider") && w.d(P, {
                IJsonRpcProvider: function() {
                    return u.IJsonRpcProvider
                }
            }), w.o(u, "formatJsonRpcError") && w.d(P, {
                formatJsonRpcError: function() {
                    return u.formatJsonRpcError
                }
            }), w.o(u, "formatJsonRpcRequest") && w.d(P, {
                formatJsonRpcRequest: function() {
                    return u.formatJsonRpcRequest
                }
            }), w.o(u, "formatJsonRpcResult") && w.d(P, {
                formatJsonRpcResult: function() {
                    return u.formatJsonRpcResult
                }
            }), w.o(u, "getBigIntRpcId") && w.d(P, {
                getBigIntRpcId: function() {
                    return u.getBigIntRpcId
                }
            }), w.o(u, "isHttpUrl") && w.d(P, {
                isHttpUrl: function() {
                    return u.isHttpUrl
                }
            }), w.o(u, "isJsonRpcError") && w.d(P, {
                isJsonRpcError: function() {
                    return u.isJsonRpcError
                }
            }), w.o(u, "isJsonRpcRequest") && w.d(P, {
                isJsonRpcRequest: function() {
                    return u.isJsonRpcRequest
                }
            }), w.o(u, "isJsonRpcResponse") && w.d(P, {
                isJsonRpcResponse: function() {
                    return u.isJsonRpcResponse
                }
            }), w.o(u, "isJsonRpcResult") && w.d(P, {
                isJsonRpcResult: function() {
                    return u.isJsonRpcResult
                }
            }), w.o(u, "isLocalhostUrl") && w.d(P, {
                isLocalhostUrl: function() {
                    return u.isLocalhostUrl
                }
            }), w.o(u, "isReactNative") && w.d(P, {
                isReactNative: function() {
                    return u.isReactNative
                }
            }), w.o(u, "isWsUrl") && w.d(P, {
                isWsUrl: function() {
                    return u.isWsUrl
                }
            }), w.o(u, "payloadId") && w.d(P, {
                payloadId: function() {
                    return u.payloadId
                }
            })
        },
        49187: (ue, P, w) => {
            "use strict";
            w.d(P, {
                CX: () => O,
                L2: () => k,
                by: () => A,
                i5: () => K
            });
            var u = w(44087);

            function K(R) {
                return u.dQ.includes(R)
            }

            function A(R) {
                return Object.keys(u.xK).includes(R) ? u.xK[R] : u.xK[u.JV]
            }

            function k(R) {
                return Object.values(u.xK).find(ee => ee.code === R) || u.xK[u.JV]
            }

            function O(R, L, ee) {
                return R.message.includes("getaddrinfo ENOTFOUND") || R.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${ee} RPC url at ${L}`) : R
            }
        },
        16749: (ue, P, w) => {
            "use strict";
            w.d(P, {
                CS: () => re,
                RI: () => q,
                o0: () => K,
                sT: () => A,
                tm: () => k
            });
            var u = w(49187),
                H = w(44087);

            function K(R = 3) {
                return Date.now() * Math.pow(10, R) + Math.floor(Math.random() * Math.pow(10, R))
            }

            function re(R = 6) {
                return BigInt(K(R))
            }

            function A(R, L, ee) {
                return {
                    id: ee || K(),
                    jsonrpc: "2.0",
                    method: R,
                    params: L
                }
            }

            function k(R, L) {
                return {
                    id: R,
                    jsonrpc: "2.0",
                    result: L
                }
            }

            function q(R, L, ee) {
                return {
                    id: R,
                    jsonrpc: "2.0",
                    error: O(L, ee)
                }
            }

            function O(R, L) {
                return typeof R > "u" ? (0, u.by)(H.O4) : ("string" == typeof R && (R = Object.assign(Object.assign({}, (0, u.by)(H.CA)), {
                    message: R
                })), typeof L < "u" && (R.data = L), (0, u.i5)(R.code) && (R = (0, u.L2)(R.code)), R)
            }
        },
        26446: (ue, P, w) => {
            "use strict";
            w.d(P, {
                IJsonRpcProvider: () => A.x0,
                formatJsonRpcError: () => re.RI,
                formatJsonRpcRequest: () => re.sT,
                formatJsonRpcResult: () => re.tm,
                getBigIntRpcId: () => re.CS,
                isHttpUrl: () => k.jK,
                isJsonRpcError: () => q.jg,
                isJsonRpcRequest: () => q.DW,
                isJsonRpcResponse: () => q.u,
                isJsonRpcResult: () => q.k4,
                isLocalhostUrl: () => k.JF,
                isWsUrl: () => k.UZ,
                parseConnectionError: () => H.CX,
                payloadId: () => re.o0
            }), w(44087);
            var H = w(49187),
                K = w(58102);
            w.o(K, "IJsonRpcProvider") && w.d(P, {
                IJsonRpcProvider: function() {
                    return K.IJsonRpcProvider
                }
            }), w.o(K, "formatJsonRpcError") && w.d(P, {
                formatJsonRpcError: function() {
                    return K.formatJsonRpcError
                }
            }), w.o(K, "formatJsonRpcRequest") && w.d(P, {
                formatJsonRpcRequest: function() {
                    return K.formatJsonRpcRequest
                }
            }), w.o(K, "formatJsonRpcResult") && w.d(P, {
                formatJsonRpcResult: function() {
                    return K.formatJsonRpcResult
                }
            }), w.o(K, "getBigIntRpcId") && w.d(P, {
                getBigIntRpcId: function() {
                    return K.getBigIntRpcId
                }
            }), w.o(K, "isHttpUrl") && w.d(P, {
                isHttpUrl: function() {
                    return K.isHttpUrl
                }
            }), w.o(K, "isJsonRpcError") && w.d(P, {
                isJsonRpcError: function() {
                    return K.isJsonRpcError
                }
            }), w.o(K, "isJsonRpcRequest") && w.d(P, {
                isJsonRpcRequest: function() {
                    return K.isJsonRpcRequest
                }
            }), w.o(K, "isJsonRpcResponse") && w.d(P, {
                isJsonRpcResponse: function() {
                    return K.isJsonRpcResponse
                }
            }), w.o(K, "isJsonRpcResult") && w.d(P, {
                isJsonRpcResult: function() {
                    return K.isJsonRpcResult
                }
            }), w.o(K, "isLocalhostUrl") && w.d(P, {
                isLocalhostUrl: function() {
                    return K.isLocalhostUrl
                }
            }), w.o(K, "isReactNative") && w.d(P, {
                isReactNative: function() {
                    return K.isReactNative
                }
            }), w.o(K, "isWsUrl") && w.d(P, {
                isWsUrl: function() {
                    return K.isWsUrl
                }
            }), w.o(K, "payloadId") && w.d(P, {
                payloadId: function() {
                    return K.payloadId
                }
            });
            var re = w(16749),
                A = w(18404),
                k = w(2918),
                q = w(91924)
        },
        18404: (ue, P, w) => {
            "use strict";
            w.d(P, {
                x0: () => re
            });
            class u {}
            class K extends u {
                constructor() {
                    super()
                }
            }
            class re extends K {
                constructor(k) {
                    super()
                }
            }
        },
        2918: (ue, P, w) => {
            "use strict";
            w.d(P, {
                JF: () => q,
                UZ: () => k,
                jK: () => A
            });
            const u = "^https?:",
                H = "^wss?:";

            function re(O, R) {
                const L = function K(O) {
                    const R = O.match(new RegExp(/^\w+:/, "gi"));
                    if (R && R.length) return R[0]
                }(O);
                return !(typeof L > "u") && new RegExp(R).test(L)
            }

            function A(O) {
                return re(O, u)
            }

            function k(O) {
                return re(O, H)
            }

            function q(O) {
                return new RegExp("wss?://localhost(:d{2,5})?").test(O)
            }
        },
        91924: (ue, P, w) => {
            "use strict";

            function u(q) {
                return "object" == typeof q && "id" in q && "jsonrpc" in q && "2.0" === q.jsonrpc
            }

            function H(q) {
                return u(q) && "method" in q
            }

            function K(q) {
                return u(q) && (re(q) || A(q))
            }

            function re(q) {
                return "result" in q
            }

            function A(q) {
                return "error" in q
            }
            w.d(P, {
                DW: () => H,
                jg: () => A,
                k4: () => re,
                u: () => K
            })
        },
        26904: (ue, P) => {
            "use strict";
            Object.defineProperty(P, "__esModule", {
                value: !0
            }), P.PINO_CUSTOM_CONTEXT_KEY = P.PINO_LOGGER_DEFAULTS = void 0, P.PINO_LOGGER_DEFAULTS = {
                level: "info"
            }, P.PINO_CUSTOM_CONTEXT_KEY = "custom_context"
        },
        72997: (ue, P, w) => {
            "use strict";
            Object.defineProperty(P, "__esModule", {
                value: !0
            }), P.pino = void 0;
            const u = w(57121),
                H = u.__importDefault(w(71590));
            Object.defineProperty(P, "pino", {
                enumerable: !0,
                get: function() {
                    return H.default
                }
            }), u.__exportStar(w(26904), P), u.__exportStar(w(22723), P)
        },
        22723: (ue, P, w) => {
            "use strict";
            Object.defineProperty(P, "__esModule", {
                value: !0
            }), P.generateChildLogger = P.formatChildLoggerContext = P.getLoggerContext = P.setBrowserLoggerContext = P.getBrowserLoggerContext = P.getDefaultLoggerOptions = void 0;
            const u = w(26904);

            function K(O, R = u.PINO_CUSTOM_CONTEXT_KEY) {
                return O[R] || ""
            }

            function re(O, R, L = u.PINO_CUSTOM_CONTEXT_KEY) {
                return O[L] = R, O
            }

            function A(O, R = u.PINO_CUSTOM_CONTEXT_KEY) {
                let L = "";
                return L = typeof O.bindings > "u" ? K(O, R) : O.bindings().context || "", L
            }

            function k(O, R, L = u.PINO_CUSTOM_CONTEXT_KEY) {
                const ee = A(O, L);
                return ee.trim() ? `${ee}/${R}` : R
            }
            P.getDefaultLoggerOptions = function H(O) {
                return Object.assign(Object.assign({}, O), {
                    level: O ? .level || u.PINO_LOGGER_DEFAULTS.level
                })
            }, P.getBrowserLoggerContext = K, P.setBrowserLoggerContext = re, P.getLoggerContext = A, P.formatChildLoggerContext = k, P.generateChildLogger = function q(O, R, L = u.PINO_CUSTOM_CONTEXT_KEY) {
                const ee = k(O, R, L);
                return re(O.child({
                    context: ee
                }), ee, L)
            }
        },
        82768: () => {},
        57630: (ue, P, w) => {
            "use strict";
            w.d(P, {
                D: () => K,
                u: () => re
            });
            const u = A => JSON.stringify(A, (k, q) => "bigint" == typeof q ? q.toString() + "n" : q),
                H = A => {
                    const q = A.replace(/([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g, '$1"$2n"$3');
                    return JSON.parse(q, (O, R) => "string" == typeof R && R.match(/^\d+n$/) ? BigInt(R.substring(0, R.length - 1)) : R)
                };

            function K(A) {
                if ("string" != typeof A) throw new Error("Cannot safe json parse value of type " + typeof A);
                try {
                    return H(A)
                } catch {
                    return A
                }
            }

            function re(A) {
                return "string" == typeof A ? A : u(A) || ""
            }
        },
        99623: (ue, P, w) => {
            "use strict";
            w.d(P, {
                lO: () => Gr,
                ZP: () => sr
            });
            var u = w(49671),
                H = w(82016),
                K = w.n(H);
            const re = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
                A = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
                k = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;

            function q(l, e) {
                if (!("__proto__" === l || "constructor" === l && e && "object" == typeof e && "prototype" in e)) return e;
                ! function O(l) {
                    console.warn(`[destr] Dropping "${l}" key to prevent prototype pollution.`)
                }(l)
            }

            function R(l, e = {}) {
                if ("string" != typeof l) return l;
                const t = l.trim();
                if ('"' === l[0] && '"' === l.at(-1) && !l.includes("\\")) return t.slice(1, -1);
                if (t.length <= 9) {
                    const r = t.toLowerCase();
                    if ("true" === r) return !0;
                    if ("false" === r) return !1;
                    if ("undefined" === r) return;
                    if ("null" === r) return null;
                    if ("nan" === r) return Number.NaN;
                    if ("infinity" === r) return Number.POSITIVE_INFINITY;
                    if ("-infinity" === r) return Number.NEGATIVE_INFINITY
                }
                if (!k.test(l)) {
                    if (e.strict) throw new SyntaxError("[destr] Invalid JSON");
                    return l
                }
                try {
                    if (re.test(l) || A.test(l)) {
                        if (e.strict) throw new Error("[destr] Possible prototype pollution");
                        return JSON.parse(l, q)
                    }
                    return JSON.parse(l)
                } catch (r) {
                    if (e.strict) throw r;
                    return l
                }
            }

            function G(l, ...e) {
                try {
                    return function ee(l) {
                        return l && "function" == typeof l.then ? l : Promise.resolve(l)
                    }(l(...e))
                } catch (t) {
                    return Promise.reject(t)
                }
            }

            function pe(l) {
                if (function le(l) {
                        const e = typeof l;
                        return null === l || "object" !== e && "function" !== e
                    }(l)) return String(l);
                if (function $(l) {
                        const e = Object.getPrototypeOf(l);
                        return !e || e.isPrototypeOf(Object)
                    }(l) || Array.isArray(l)) return JSON.stringify(l);
                if ("function" == typeof l.toJSON) return pe(l.toJSON());
                throw new Error("[unstorage] Cannot stringify value!")
            }

            function he() {
                if (void 0 === typeof Buffer) throw new TypeError("[unstorage] Buffer is not supported!")
            }
            const ve = "base64:";

            function oe(l) {
                return l ? l.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") : ""
            }

            function M(...l) {
                return oe(l.join(":"))
            }

            function B(l) {
                return (l = oe(l)) ? l + ":" : ""
            }
            const p = () => {
                const l = new Map;
                return {
                    name: "memory",
                    options: {},
                    hasItem: e => l.has(e),
                    getItem: e => l.get(e) ? ? null,
                    getItemRaw: e => l.get(e) ? ? null,
                    setItem(e, t) {
                        l.set(e, t)
                    },
                    setItemRaw(e, t) {
                        l.set(e, t)
                    },
                    removeItem(e) {
                        l.delete(e)
                    },
                    getKeys: () => Array.from(l.keys()),
                    clear() {
                        l.clear()
                    },
                    dispose() {
                        l.clear()
                    }
                }
            };

            function te(l, e, t) {
                return l.watch ? l.watch((r, n) => e(r, t + n)) : () => {}
            }

            function S(l) {
                return Z.apply(this, arguments)
            }

            function Z() {
                return (Z = (0, u.Z)(function*(l) {
                    "function" == typeof l.dispose && (yield G(l.dispose))
                })).apply(this, arguments)
            }

            function N(l) {
                return new Promise((e, t) => {
                    l.oncomplete = l.onsuccess = () => e(l.result), l.onabort = l.onerror = () => t(l.error)
                })
            }

            function ne(l, e) {
                const t = indexedDB.open(l);
                t.onupgradeneeded = () => t.result.createObjectStore(e);
                const r = N(t);
                return (n, s) => r.then(a => s(a.transaction(e, n).objectStore(e)))
            }
            let de;

            function ye() {
                return de || (de = ne("keyval-store", "keyval")), de
            }

            function _t(l, e = ye()) {
                return e("readonly", t => N(t.get(l)))
            }
            var fe = w(57630),
                st = (l = {}) => {
                    const e = l.base && l.base.length > 0 ? `${l.base}:` : "",
                        t = n => e + n;
                    let r;
                    return l.dbName && l.storeName && (r = ne(l.dbName, l.storeName)), {
                        name: "idb-keyval",
                        options: l,
                        hasItem: n => (0, u.Z)(function*() {
                            return !(typeof(yield _t(t(n), r)) > "u")
                        })(),
                        getItem: n => (0, u.Z)(function*() {
                            return (yield _t(t(n), r)) ? ? null
                        })(),
                        setItem: (n, s) => function It(l, e, t = ye()) {
                            return t("readwrite", r => (r.put(e, l), N(r.transaction)))
                        }(t(n), s, r),
                        removeItem: n => function T(l, e = ye()) {
                            return e("readwrite", t => (t.delete(l), N(t.transaction)))
                        }(t(n), r),
                        getKeys: () => function ae(l = ye()) {
                            return l("readonly", e => {
                                if (e.getAllKeys) return N(e.getAllKeys());
                                const t = [];
                                return function Y(l, e) {
                                    return l.openCursor().onsuccess = function() {
                                        this.result && (e(this.result), this.result.continue())
                                    }, N(l.transaction)
                                }(e, r => t.push(r.key)).then(() => t)
                            })
                        }(r),
                        clear: () => function x(l = ye()) {
                            return l("readwrite", e => (e.clear(), N(e.transaction)))
                        }(r)
                    }
                };
            class Ne {
                constructor() {
                    this.indexedDb = function _(l = {}) {
                        const e = {
                                mounts: {
                                    "": l.driver || p()
                                },
                                mountpoints: [""],
                                watching: !1,
                                watchListeners: [],
                                unwatch: {}
                            },
                            t = y => {
                                for (const E of e.mountpoints)
                                    if (y.startsWith(E)) return {
                                        base: E,
                                        relativeKey: y.slice(E.length),
                                        driver: e.mounts[E]
                                    };
                                return {
                                    base: "",
                                    relativeKey: y,
                                    driver: e.mounts[""]
                                }
                            },
                            r = (y, E) => e.mountpoints.filter(C => C.startsWith(y) || E && y.startsWith(C)).map(C => ({
                                relativeBase: y.length > C.length ? y.slice(C.length) : void 0,
                                mountpoint: C,
                                driver: e.mounts[C]
                            })),
                            n = (y, E) => {
                                if (e.watching) {
                                    E = oe(E);
                                    for (const C of e.watchListeners) C(y, E)
                                }
                            },
                            s = function() {
                                var y = (0, u.Z)(function*() {
                                    if (!e.watching) {
                                        e.watching = !0;
                                        for (const E in e.mounts) e.unwatch[E] = yield te(e.mounts[E], n, E)
                                    }
                                });
                                return function() {
                                    return y.apply(this, arguments)
                                }
                            }(),
                            a = function() {
                                var y = (0, u.Z)(function*() {
                                    if (e.watching) {
                                        for (const E in e.unwatch) yield e.unwatch[E]();
                                        e.unwatch = {}, e.watching = !1
                                    }
                                });
                                return function() {
                                    return y.apply(this, arguments)
                                }
                            }(),
                            h = (y, E, C) => {
                                const j = new Map,
                                    W = J => {
                                        let se = j.get(J.base);
                                        return se || (se = {
                                            driver: J.driver,
                                            base: J.base,
                                            items: []
                                        }, j.set(J.base, se)), se
                                    };
                                for (const J of y) {
                                    const se = "string" == typeof J,
                                        me = oe(se ? J : J.key),
                                        xe = se ? void 0 : J.value,
                                        He = se || !J.options ? E : { ...E,
                                            ...J.options
                                        },
                                        Ge = t(me);
                                    W(Ge).items.push({
                                        key: me,
                                        value: xe,
                                        relativeKey: Ge.relativeKey,
                                        options: He
                                    })
                                }
                                return Promise.all([...j.values()].map(J => C(J))).then(J => J.flat())
                            },
                            b = {
                                hasItem(y, E = {}) {
                                    y = oe(y);
                                    const {
                                        relativeKey: C,
                                        driver: j
                                    } = t(y);
                                    return G(j.hasItem, C, E)
                                },
                                getItem(y, E = {}) {
                                    y = oe(y);
                                    const {
                                        relativeKey: C,
                                        driver: j
                                    } = t(y);
                                    return G(j.getItem, C, E).then(W => R(W))
                                },
                                getItems: (y, E) => h(y, E, C => C.driver.getItems ? G(C.driver.getItems, C.items.map(j => ({
                                    key: j.relativeKey,
                                    options: j.options
                                })), E).then(j => j.map(W => ({
                                    key: M(C.base, W.key),
                                    value: R(W.value)
                                }))) : Promise.all(C.items.map(j => G(C.driver.getItem, j.relativeKey, j.options).then(W => ({
                                    key: j.key,
                                    value: R(W)
                                }))))),
                                getItemRaw(y, E = {}) {
                                    y = oe(y);
                                    const {
                                        relativeKey: C,
                                        driver: j
                                    } = t(y);
                                    return j.getItemRaw ? G(j.getItemRaw, C, E) : G(j.getItem, C, E).then(W => function Te(l) {
                                        return "string" == typeof l && l.startsWith(ve) ? (he(), Buffer.from(l.slice(7), "base64")) : l
                                    }(W))
                                },
                                setItem: (y, E, C = {}) => (0, u.Z)(function*() {
                                    if (void 0 === E) return b.removeItem(y);
                                    y = oe(y);
                                    const {
                                        relativeKey: j,
                                        driver: W
                                    } = t(y);
                                    W.setItem && (yield G(W.setItem, j, pe(E), C), W.watch || n("update", y))
                                })(),
                                setItems: (y, E) => (0, u.Z)(function*() {
                                    yield h(y, E, function() {
                                        var C = (0, u.Z)(function*(j) {
                                            j.driver.setItems && (yield G(j.driver.setItems, j.items.map(W => ({
                                                key: W.relativeKey,
                                                value: pe(W.value),
                                                options: W.options
                                            })), E)), j.driver.setItem && (yield Promise.all(j.items.map(W => G(j.driver.setItem, W.relativeKey, pe(W.value), W.options))))
                                        });
                                        return function(j) {
                                            return C.apply(this, arguments)
                                        }
                                    }())
                                })(),
                                setItemRaw: (y, E, C = {}) => (0, u.Z)(function*() {
                                    if (void 0 === E) return b.removeItem(y, C);
                                    y = oe(y);
                                    const {
                                        relativeKey: j,
                                        driver: W
                                    } = t(y);
                                    if (W.setItemRaw) yield G(W.setItemRaw, j, E, C);
                                    else {
                                        if (!W.setItem) return;
                                        yield G(W.setItem, j, function _e(l) {
                                            if ("string" == typeof l) return l;
                                            he();
                                            const e = Buffer.from(l).toString("base64");
                                            return ve + e
                                        }(E), C)
                                    }
                                    W.watch || n("update", y)
                                })(),
                                removeItem: (y, E = {}) => (0, u.Z)(function*() {
                                    "boolean" == typeof E && (E = {
                                        removeMeta: E
                                    }), y = oe(y);
                                    const {
                                        relativeKey: C,
                                        driver: j
                                    } = t(y);
                                    j.removeItem && (yield G(j.removeItem, C, E), (E.removeMeta || E.removeMata) && (yield G(j.removeItem, C + "$", E)), j.watch || n("remove", y))
                                })(),
                                getMeta: (y, E = {}) => (0, u.Z)(function*() {
                                    "boolean" == typeof E && (E = {
                                        nativeOnly: E
                                    }), y = oe(y);
                                    const {
                                        relativeKey: C,
                                        driver: j
                                    } = t(y), W = Object.create(null);
                                    if (j.getMeta && Object.assign(W, yield G(j.getMeta, C, E)), !E.nativeOnly) {
                                        const J = yield G(j.getItem, C + "$", E).then(se => R(se));
                                        J && "object" == typeof J && ("string" == typeof J.atime && (J.atime = new Date(J.atime)), "string" == typeof J.mtime && (J.mtime = new Date(J.mtime)), Object.assign(W, J))
                                    }
                                    return W
                                })(),
                                setMeta(y, E, C = {}) {
                                    return this.setItem(y + "$", E, C)
                                },
                                removeMeta(y, E = {}) {
                                    return this.removeItem(y + "$", E)
                                },
                                getKeys: (y, E = {}) => (0, u.Z)(function*() {
                                    y = B(y);
                                    const C = r(y, !0);
                                    let j = [];
                                    const W = [];
                                    for (const J of C) {
                                        const me = (yield G(J.driver.getKeys, J.relativeBase, E)).map(xe => J.mountpoint + oe(xe)).filter(xe => !j.some(He => xe.startsWith(He)));
                                        W.push(...me), j = [J.mountpoint, ...j.filter(xe => !xe.startsWith(J.mountpoint))]
                                    }
                                    return W.filter(y ? J => J.startsWith(y) && !J.endsWith("$") : J => !J.endsWith("$"))
                                })(),
                                clear: (y, E = {}) => (0, u.Z)(function*() {
                                    y = B(y), yield Promise.all(r(y, !1).map(function() {
                                        var C = (0, u.Z)(function*(j) {
                                            if (j.driver.clear) return G(j.driver.clear, j.relativeBase, E);
                                            if (j.driver.removeItem) {
                                                const W = yield j.driver.getKeys(j.relativeBase || "", E);
                                                return Promise.all(W.map(J => j.driver.removeItem(J, E)))
                                            }
                                        });
                                        return function(j) {
                                            return C.apply(this, arguments)
                                        }
                                    }()))
                                })(),
                                dispose: () => (0, u.Z)(function*() {
                                    yield Promise.all(Object.values(e.mounts).map(y => S(y)))
                                })(),
                                watch: y => (0, u.Z)(function*() {
                                    return yield s(), e.watchListeners.push(y), (0, u.Z)(function*() {
                                        e.watchListeners = e.watchListeners.filter(E => E !== y), 0 === e.watchListeners.length && (yield a())
                                    })
                                })(),
                                unwatch: () => (0, u.Z)(function*() {
                                    e.watchListeners = [], yield a()
                                })(),
                                mount(y, E) {
                                    if ((y = B(y)) && e.mounts[y]) throw new Error(`already mounted at ${y}`);
                                    return y && (e.mountpoints.push(y), e.mountpoints.sort((C, j) => j.length - C.length)), e.mounts[y] = E, e.watching && Promise.resolve(te(E, n, y)).then(C => {
                                        e.unwatch[y] = C
                                    }).catch(console.error), b
                                },
                                unmount: (y, E = !0) => (0, u.Z)(function*() {
                                    (y = B(y)) && e.mounts[y] && (e.watching && y in e.unwatch && (e.unwatch[y](), delete e.unwatch[y]), E && (yield S(e.mounts[y])), e.mountpoints = e.mountpoints.filter(C => C !== y), delete e.mounts[y])
                                })(),
                                getMount(y = "") {
                                    y = oe(y) + ":";
                                    const E = t(y);
                                    return {
                                        driver: E.driver,
                                        base: E.base
                                    }
                                },
                                getMounts: (y = "", E = {}) => (y = oe(y), r(y, E.parents).map(j => ({
                                    driver: j.driver,
                                    base: j.mountpoint
                                })))
                            };
                        return b
                    }({
                        driver: st({
                            dbName: "WALLET_CONNECT_V2_INDEXED_DB",
                            storeName: "keyvaluestorage"
                        })
                    })
                }
                getKeys() {
                    var e = this;
                    return (0, u.Z)(function*() {
                        return e.indexedDb.getKeys()
                    })()
                }
                getEntries() {
                    var e = this;
                    return (0, u.Z)(function*() {
                        return (yield e.indexedDb.getItems(yield e.indexedDb.getKeys())).map(t => [t.key, t.value])
                    })()
                }
                getItem(e) {
                    var t = this;
                    return (0, u.Z)(function*() {
                        const r = yield t.indexedDb.getItem(e);
                        if (null !== r) return r
                    })()
                }
                setItem(e, t) {
                    var r = this;
                    return (0, u.Z)(function*() {
                        yield r.indexedDb.setItem(e, (0, fe.u)(t))
                    })()
                }
                removeItem(e) {
                    var t = this;
                    return (0, u.Z)(function*() {
                        yield t.indexedDb.removeItem(e)
                    })()
                }
            }
            var Se = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {},
                Ee = {
                    exports: {}
                };

            function Pe(l) {
                var e;
                return [l[0], (0, fe.D)(null != (e = l[1]) ? e : "")]
            }! function() {
                let l;

                function e() {}
                l = e, l.prototype.getItem = function(t) {
                    return this.hasOwnProperty(t) ? String(this[t]) : null
                }, l.prototype.setItem = function(t, r) {
                    this[t] = String(r)
                }, l.prototype.removeItem = function(t) {
                    delete this[t]
                }, l.prototype.clear = function() {
                    const t = this;
                    Object.keys(t).forEach(function(r) {
                        t[r] = void 0, delete t[r]
                    })
                }, l.prototype.key = function(t) {
                    return t = t || 0, Object.keys(this)[t]
                }, l.prototype.__defineGetter__("length", function() {
                    return Object.keys(this).length
                }), Ee.exports = typeof Se < "u" && Se.localStorage ? Se.localStorage : typeof window < "u" && window.localStorage ? window.localStorage : new e
            }();
            class Ie {
                constructor() {
                    this.localStorage = Ee.exports
                }
                getKeys() {
                    var e = this;
                    return (0, u.Z)(function*() {
                        return Object.keys(e.localStorage)
                    })()
                }
                getEntries() {
                    var e = this;
                    return (0, u.Z)(function*() {
                        return Object.entries(e.localStorage).map(Pe)
                    })()
                }
                getItem(e) {
                    var t = this;
                    return (0, u.Z)(function*() {
                        const r = t.localStorage.getItem(e);
                        if (null !== r) return (0, fe.D)(r)
                    })()
                }
                setItem(e, t) {
                    var r = this;
                    return (0, u.Z)(function*() {
                        r.localStorage.setItem(e, (0, fe.u)(t))
                    })()
                }
                removeItem(e) {
                    var t = this;
                    return (0, u.Z)(function*() {
                        t.localStorage.removeItem(e)
                    })()
                }
            }
            const ke = function() {
                    var l = (0, u.Z)(function*(e, t, r) {
                        const n = "wc_storage_version",
                            s = yield t.getItem(n);
                        if (s && s >= 1) return void r(t);
                        const a = yield e.getKeys();
                        if (!a.length) return void r(t);
                        const h = [];
                        for (; a.length;) {
                            const b = a.shift();
                            if (!b) continue;
                            const y = b.toLowerCase();
                            if (y.includes("wc@") || y.includes("walletconnect") || y.includes("wc_") || y.includes("wallet_connect")) {
                                const E = yield e.getItem(b);
                                yield t.setItem(b, E), h.push(b)
                            }
                        }
                        yield t.setItem(n, 1), r(t), ot(e, h)
                    });
                    return function(t, r, n) {
                        return l.apply(this, arguments)
                    }
                }(),
                ot = function() {
                    var l = (0, u.Z)(function*(e, t) {
                        t.length && t.forEach(function() {
                            var r = (0, u.Z)(function*(n) {
                                yield e.removeItem(n)
                            });
                            return function(n) {
                                return r.apply(this, arguments)
                            }
                        }())
                    });
                    return function(t, r) {
                        return l.apply(this, arguments)
                    }
                }();
            class lt {
                constructor() {
                    this.initialized = !1, this.setInitialized = t => {
                        this.storage = t, this.initialized = !0
                    };
                    const e = new Ie;
                    this.storage = e;
                    try {
                        const t = new Ne;
                        ke(e, t, this.setInitialized)
                    } catch {
                        this.initialized = !0
                    }
                }
                getKeys() {
                    var e = this;
                    return (0, u.Z)(function*() {
                        return yield e.initialize(), e.storage.getKeys()
                    })()
                }
                getEntries() {
                    var e = this;
                    return (0, u.Z)(function*() {
                        return yield e.initialize(), e.storage.getEntries()
                    })()
                }
                getItem(e) {
                    var t = this;
                    return (0, u.Z)(function*() {
                        return yield t.initialize(), t.storage.getItem(e)
                    })()
                }
                setItem(e, t) {
                    var r = this;
                    return (0, u.Z)(function*() {
                        return yield r.initialize(), r.storage.setItem(e, t)
                    })()
                }
                removeItem(e) {
                    var t = this;
                    return (0, u.Z)(function*() {
                        return yield t.initialize(), t.storage.removeItem(e)
                    })()
                }
                initialize() {
                    var e = this;
                    return (0, u.Z)(function*() {
                        e.initialized || (yield new Promise(t => {
                            const r = setInterval(() => {
                                e.initialized && (clearInterval(r), t())
                            }, 20)
                        }))
                    })()
                }
            }
            var Me = w(80986),
                ie = w(72997),
                Qe = w(62108);
            class yt extends Qe.q {
                constructor(e) {
                    super(), this.opts = e, this.protocol = "wc", this.version = 2
                }
            }
            class xt extends Qe.q {
                constructor(e, t) {
                    super(), this.core = e, this.logger = t, this.records = new Map
                }
            }
            class Rt {
                constructor(e, t) {
                    this.logger = e, this.core = t
                }
            }
            class Pt extends Qe.q {
                constructor(e, t) {
                    super(), this.relayer = e, this.logger = t
                }
            }
            class Ot extends Qe.q {
                constructor(e) {
                    super()
                }
            }
            class Nt {
                constructor(e, t, r, n) {
                    this.core = e, this.logger = t, this.name = r
                }
            }
            class ze extends Qe.q {
                constructor(e, t) {
                    super(), this.relayer = e, this.logger = t
                }
            }
            class Ue extends Qe.q {
                constructor(e, t) {
                    super(), this.core = e, this.logger = t
                }
            }
            class je {
                constructor(e, t) {
                    this.projectId = e, this.logger = t
                }
            }
            class Ke {
                constructor(e, t) {
                    this.projectId = e, this.logger = t
                }
            }
            class Je {
                constructor(e) {
                    this.opts = e, this.protocol = "wc", this.version = 2
                }
            }
            class Ve {
                constructor(e) {
                    this.client = e
                }
            }
            var Ae = w(35972),
                Be = w(25465),
                Q = w(35409);
            const or = "base64url",
                Qr = "utf8",
                Xr = ":",
                en = "did",
                tn = "key",
                ar = "base58btc",
                rn = "z",
                nn = "K36";
            var on = w(91376),
                Bt = w(90878),
                $t = w(82269);

            function zt(l) {
                return (0, Bt.B)((0, $t.m)((0, fe.u)(l), Qr), or)
            }

            function cr(l) {
                const e = (0, $t.m)(nn, ar),
                    t = rn + (0, Bt.B)((0, on.z)([e, l]), ar);
                return [en, tn, t].join(Xr)
            }

            function an(l) {
                return (0, Bt.B)(l, or)
            }

            function ur(l = (0, Be.randomBytes)(32)) {
                return Ae._w(l)
            }

            function qt() {
                return (qt = (0, u.Z)(function*(l, e, t, r, n = (0, Q.fromMiliseconds)(Date.now())) {
                    const s = {
                            alg: "EdDSA",
                            typ: "JWT"
                        },
                        b = {
                            iss: cr(r.publicKey),
                            sub: l,
                            aud: e,
                            iat: n,
                            exp: n + t
                        },
                        y = function un(l) {
                            return (0, $t.m)([zt(l.header), zt(l.payload)].join("."), "utf8")
                        }({
                            header: s,
                            payload: b
                        });
                    return function ln(l) {
                        return [zt(l.header), zt(l.payload), an(l.signature)].join(".")
                    }({
                        header: s,
                        payload: b,
                        signature: Ae.Xx(r.secretKey, y)
                    })
                })).apply(this, arguments)
            }
            w(82768);
            var v = w(64778),
                dn = w(3544),
                hn = w(11474),
                ce = w(26446);
            const lr = l => l.split("?")[0],
                yn = typeof WebSocket < "u" ? WebSocket : typeof global < "u" && typeof global.WebSocket < "u" ? global.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : typeof self < "u" && typeof self.WebSocket < "u" ? self.WebSocket : w(3569);
            class mn {
                constructor(e) {
                    if (this.url = e, this.events = new H.EventEmitter, this.registering = !1, !(0, ce.isWsUrl)(e)) throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
                    this.url = e
                }
                get connected() {
                    return typeof this.socket < "u"
                }
                get connecting() {
                    return this.registering
                }
                on(e, t) {
                    this.events.on(e, t)
                }
                once(e, t) {
                    this.events.once(e, t)
                }
                off(e, t) {
                    this.events.off(e, t)
                }
                removeListener(e, t) {
                    this.events.removeListener(e, t)
                }
                open(e = this.url) {
                    var t = this;
                    return (0, u.Z)(function*() {
                        yield t.register(e)
                    })()
                }
                close() {
                    var e = this;
                    return (0, u.Z)(function*() {
                        return new Promise((t, r) => {
                            typeof e.socket > "u" ? r(new Error("Connection already closed")) : (e.socket.onclose = n => {
                                e.onClose(n), t()
                            }, e.socket.close())
                        })
                    })()
                }
                send(e) {
                    var t = this;
                    return (0, u.Z)(function*() {
                        typeof t.socket > "u" && (t.socket = yield t.register());
                        try {
                            t.socket.send((0, fe.u)(e))
                        } catch (r) {
                            t.onError(e.id, r)
                        }
                    })()
                }
                register(e = this.url) {
                    if (!(0, ce.isWsUrl)(e)) throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
                    if (this.registering) {
                        const t = this.events.getMaxListeners();
                        return (this.events.listenerCount("register_error") >= t || this.events.listenerCount("open") >= t) && this.events.setMaxListeners(t + 1), new Promise((r, n) => {
                            this.events.once("register_error", s => {
                                this.resetMaxListeners(), n(s)
                            }), this.events.once("open", () => {
                                if (this.resetMaxListeners(), typeof this.socket > "u") return n(new Error("WebSocket connection is missing or invalid"));
                                r(this.socket)
                            })
                        })
                    }
                    return this.url = e, this.registering = !0, new Promise((t, r) => {
                        const n = new URLSearchParams(e).get("origin"),
                            s = (0, ce.isReactNative)() ? {
                                headers: {
                                    origin: n
                                }
                            } : {
                                rejectUnauthorized: !(0, ce.isLocalhostUrl)(e)
                            },
                            a = new yn(e, [], s);
                        typeof WebSocket < "u" || typeof global < "u" && typeof global.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof self < "u" && typeof self.WebSocket < "u" ? a.onerror = h => {
                            r(this.emitError(h.error))
                        } : a.on("error", h => {
                            r(this.emitError(h))
                        }), a.onopen = () => {
                            this.onOpen(a), t(a)
                        }
                    })
                }
                onOpen(e) {
                    e.onmessage = t => this.onPayload(t), e.onclose = t => this.onClose(t), this.socket = e, this.registering = !1, this.events.emit("open")
                }
                onClose(e) {
                    this.socket = void 0, this.registering = !1, this.events.emit("close", e)
                }
                onPayload(e) {
                    if (typeof e.data > "u") return;
                    const t = "string" == typeof e.data ? (0, fe.D)(e.data) : e.data;
                    this.events.emit("payload", t)
                }
                onError(e, t) {
                    const r = this.parseError(t),
                        n = r.message || r.toString(),
                        s = (0, ce.formatJsonRpcError)(e, n);
                    this.events.emit("payload", s)
                }
                parseError(e, t = this.url) {
                    return (0, ce.parseConnectionError)(e, lr(t), "WS")
                }
                resetMaxListeners() {
                    this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10)
                }
                emitError(e) {
                    const t = this.parseError(new Error(e ? .message || `WebSocket connection failed for host: ${lr(this.url)}`));
                    return this.events.emit("register_error", t), t
                }
            }
            var vn = w(12650),
                _n = w.n(vn),
                bn = w(9557),
                xn = w.n(bn);
            const dr = l => {
                if (l instanceof Uint8Array && "Uint8Array" === l.constructor.name) return l;
                if (l instanceof ArrayBuffer) return new Uint8Array(l);
                if (ArrayBuffer.isView(l)) return new Uint8Array(l.buffer, l.byteOffset, l.byteLength);
                throw new Error("Unknown type, must be binary type")
            };
            class Pn {
                constructor(e, t, r) {
                    this.name = e, this.prefix = t, this.baseEncode = r
                }
                encode(e) {
                    if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
                    throw Error("Unknown type, must be binary type")
                }
            }
            class On {
                constructor(e, t, r) {
                    if (this.name = e, this.prefix = t, void 0 === t.codePointAt(0)) throw new Error("Invalid prefix character");
                    this.prefixCodePoint = t.codePointAt(0), this.baseDecode = r
                }
                decode(e) {
                    if ("string" == typeof e) {
                        if (e.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
                        return this.baseDecode(e.slice(this.prefix.length))
                    }
                    throw Error("Can only multibase decode strings")
                }
                or(e) {
                    return hr(this, e)
                }
            }
            class Tn {
                constructor(e) {
                    this.decoders = e
                }
                or(e) {
                    return hr(this, e)
                }
                decode(e) {
                    const r = this.decoders[e[0]];
                    if (r) return r.decode(e);
                    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)
                }
            }
            const hr = (l, e) => new Tn({ ...l.decoders || {
                    [l.prefix]: l
                },
                ...e.decoders || {
                    [e.prefix]: e
                }
            });
            class Nn {
                constructor(e, t, r, n) {
                    this.name = e, this.prefix = t, this.baseEncode = r, this.baseDecode = n, this.encoder = new Pn(e, t, r), this.decoder = new On(e, t, n)
                }
                encode(e) {
                    return this.encoder.encode(e)
                }
                decode(e) {
                    return this.decoder.decode(e)
                }
            }
            const Ut = ({
                    name: l,
                    prefix: e,
                    encode: t,
                    decode: r
                }) => new Nn(l, e, t, r),
                Dt = ({
                    prefix: l,
                    name: e,
                    alphabet: t
                }) => {
                    const {
                        encode: r,
                        decode: n
                    } = function En(l, e) {
                        if (l.length >= 255) throw new TypeError("Alphabet too long");
                        for (var t = new Uint8Array(256), r = 0; r < t.length; r++) t[r] = 255;
                        for (var n = 0; n < l.length; n++) {
                            var s = l.charAt(n),
                                a = s.charCodeAt(0);
                            if (255 !== t[a]) throw new TypeError(s + " is ambiguous");
                            t[a] = n
                        }
                        var h = l.length,
                            b = l.charAt(0),
                            y = Math.log(h) / Math.log(256),
                            E = Math.log(256) / Math.log(h);

                        function j(J) {
                            if ("string" != typeof J) throw new TypeError("Expected String");
                            if (0 === J.length) return new Uint8Array;
                            var se = 0;
                            if (" " !== J[se]) {
                                for (var me = 0, xe = 0; J[se] === b;) me++, se++;
                                for (var He = (J.length - se) * y + 1 >>> 0, Ge = new Uint8Array(He); J[se];) {
                                    var dt = t[J.charCodeAt(se)];
                                    if (255 === dt) return;
                                    for (var ct = 0, ht = He - 1;
                                        (0 !== dt || ct < xe) && -1 !== ht; ht--, ct++) Ge[ht] = (dt += h * Ge[ht] >>> 0) % 256 >>> 0, dt = dt / 256 >>> 0;
                                    if (0 !== dt) throw new Error("Non-zero carry");
                                    xe = ct, se++
                                }
                                if (" " !== J[se]) {
                                    for (var Oe = He - xe; Oe !== He && 0 === Ge[Oe];) Oe++;
                                    for (var gt = new Uint8Array(me + (He - Oe)), Jt = me; Oe !== He;) gt[Jt++] = Ge[Oe++];
                                    return gt
                                }
                            }
                        }
                        return {
                            encode: function C(J) {
                                if (J instanceof Uint8Array || (ArrayBuffer.isView(J) ? J = new Uint8Array(J.buffer, J.byteOffset, J.byteLength) : Array.isArray(J) && (J = Uint8Array.from(J))), !(J instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
                                if (0 === J.length) return "";
                                for (var se = 0, me = 0, xe = 0, He = J.length; xe !== He && 0 === J[xe];) xe++, se++;
                                for (var Ge = (He - xe) * E + 1 >>> 0, dt = new Uint8Array(Ge); xe !== He;) {
                                    for (var ct = J[xe], ht = 0, Oe = Ge - 1;
                                        (0 !== ct || ht < me) && -1 !== Oe; Oe--, ht++) dt[Oe] = (ct += 256 * dt[Oe] >>> 0) % h >>> 0, ct = ct / h >>> 0;
                                    if (0 !== ct) throw new Error("Non-zero carry");
                                    me = ht, xe++
                                }
                                for (var gt = Ge - me; gt !== Ge && 0 === dt[gt];) gt++;
                                for (var Jt = b.repeat(se); gt < Ge; ++gt) Jt += l.charAt(dt[gt]);
                                return Jt
                            },
                            decodeUnsafe: j,
                            decode: function W(J) {
                                var se = j(J);
                                if (se) return se;
                                throw new Error(`Non-${e} character`)
                            }
                        }
                    }(t, e);
                    return Ut({
                        prefix: l,
                        name: e,
                        encode: r,
                        decode: s => dr(n(s))
                    })
                },
                nt = ({
                    name: l,
                    prefix: e,
                    bitsPerChar: t,
                    alphabet: r
                }) => Ut({
                    prefix: e,
                    name: l,
                    encode: n => ((l, e, t) => {
                        const r = "=" === e[e.length - 1],
                            n = (1 << t) - 1;
                        let s = "",
                            a = 0,
                            h = 0;
                        for (let b = 0; b < l.length; ++b)
                            for (h = h << 8 | l[b], a += 8; a > t;) a -= t, s += e[n & h >> a];
                        if (a && (s += e[n & h << t - a]), r)
                            for (; s.length * t & 7;) s += "=";
                        return s
                    })(n, r, t),
                    decode: n => ((l, e, t, r) => {
                        const n = {};
                        for (let E = 0; E < e.length; ++E) n[e[E]] = E;
                        let s = l.length;
                        for (;
                            "=" === l[s - 1];) --s;
                        const a = new Uint8Array(s * t / 8 | 0);
                        let h = 0,
                            b = 0,
                            y = 0;
                        for (let E = 0; E < s; ++E) {
                            const C = n[l[E]];
                            if (void 0 === C) throw new SyntaxError(`Non-${r} character`);
                            b = b << t | C, h += t, h >= 8 && (h -= 8, a[y++] = 255 & b >> h)
                        }
                        if (h >= t || 255 & b << 8 - h) throw new SyntaxError("Unexpected end of data");
                        return a
                    })(n, r, t, l)
                }),
                Fn = Ut({
                    prefix: "\0",
                    name: "identity",
                    encode: l => (l => (new TextDecoder).decode(l))(l),
                    decode: l => (l => (new TextEncoder).encode(l))(l)
                });
            var Cn = Object.freeze({
                __proto__: null,
                identity: Fn
            });
            const Zn = nt({
                prefix: "0",
                name: "base2",
                alphabet: "01",
                bitsPerChar: 1
            });
            var Ln = Object.freeze({
                __proto__: null,
                base2: Zn
            });
            const Mn = nt({
                prefix: "7",
                name: "base8",
                alphabet: "01234567",
                bitsPerChar: 3
            });
            var zn = Object.freeze({
                __proto__: null,
                base8: Mn
            });
            const Un = Dt({
                prefix: "9",
                name: "base10",
                alphabet: "0123456789"
            });
            var jn = Object.freeze({
                __proto__: null,
                base10: Un
            });
            const Kn = nt({
                    prefix: "f",
                    name: "base16",
                    alphabet: "0123456789abcdef",
                    bitsPerChar: 4
                }),
                Jn = nt({
                    prefix: "F",
                    name: "base16upper",
                    alphabet: "0123456789ABCDEF",
                    bitsPerChar: 4
                });
            var Vn = Object.freeze({
                __proto__: null,
                base16: Kn,
                base16upper: Jn
            });
            const Bn = nt({
                    prefix: "b",
                    name: "base32",
                    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
                    bitsPerChar: 5
                }),
                $n = nt({
                    prefix: "B",
                    name: "base32upper",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
                    bitsPerChar: 5
                }),
                qn = nt({
                    prefix: "c",
                    name: "base32pad",
                    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
                    bitsPerChar: 5
                }),
                Hn = nt({
                    prefix: "C",
                    name: "base32padupper",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
                    bitsPerChar: 5
                }),
                Gn = nt({
                    prefix: "v",
                    name: "base32hex",
                    alphabet: "0123456789abcdefghijklmnopqrstuv",
                    bitsPerChar: 5
                }),
                Wn = nt({
                    prefix: "V",
                    name: "base32hexupper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
                    bitsPerChar: 5
                }),
                kn = nt({
                    prefix: "t",
                    name: "base32hexpad",
                    alphabet: "0123456789abcdefghijklmnopqrstuv=",
                    bitsPerChar: 5
                }),
                Qn = nt({
                    prefix: "T",
                    name: "base32hexpadupper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
                    bitsPerChar: 5
                }),
                Yn = nt({
                    prefix: "h",
                    name: "base32z",
                    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
                    bitsPerChar: 5
                });
            var Xn = Object.freeze({
                __proto__: null,
                base32: Bn,
                base32upper: $n,
                base32pad: qn,
                base32padupper: Hn,
                base32hex: Gn,
                base32hexupper: Wn,
                base32hexpad: kn,
                base32hexpadupper: Qn,
                base32z: Yn
            });
            const ei = Dt({
                    prefix: "k",
                    name: "base36",
                    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
                }),
                ti = Dt({
                    prefix: "K",
                    name: "base36upper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                });
            var ri = Object.freeze({
                __proto__: null,
                base36: ei,
                base36upper: ti
            });
            const ni = Dt({
                    name: "base58btc",
                    prefix: "z",
                    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
                }),
                ii = Dt({
                    name: "base58flickr",
                    prefix: "Z",
                    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
                });
            var si = Object.freeze({
                __proto__: null,
                base58btc: ni,
                base58flickr: ii
            });
            const oi = nt({
                    prefix: "m",
                    name: "base64",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                    bitsPerChar: 6
                }),
                ai = nt({
                    prefix: "M",
                    name: "base64pad",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    bitsPerChar: 6
                }),
                ci = nt({
                    prefix: "u",
                    name: "base64url",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
                    bitsPerChar: 6
                }),
                ui = nt({
                    prefix: "U",
                    name: "base64urlpad",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
                    bitsPerChar: 6
                });
            var li = Object.freeze({
                __proto__: null,
                base64: oi,
                base64pad: ai,
                base64url: ci,
                base64urlpad: ui
            });
            const pr = Array.from("\u{1f680}\u{1fa90}\u2604\u{1f6f0}\u{1f30c}\u{1f311}\u{1f312}\u{1f313}\u{1f314}\u{1f315}\u{1f316}\u{1f317}\u{1f318}\u{1f30d}\u{1f30f}\u{1f30e}\u{1f409}\u2600\u{1f4bb}\u{1f5a5}\u{1f4be}\u{1f4bf}\u{1f602}\u2764\u{1f60d}\u{1f923}\u{1f60a}\u{1f64f}\u{1f495}\u{1f62d}\u{1f618}\u{1f44d}\u{1f605}\u{1f44f}\u{1f601}\u{1f525}\u{1f970}\u{1f494}\u{1f496}\u{1f499}\u{1f622}\u{1f914}\u{1f606}\u{1f644}\u{1f4aa}\u{1f609}\u263a\u{1f44c}\u{1f917}\u{1f49c}\u{1f614}\u{1f60e}\u{1f607}\u{1f339}\u{1f926}\u{1f389}\u{1f49e}\u270c\u2728\u{1f937}\u{1f631}\u{1f60c}\u{1f338}\u{1f64c}\u{1f60b}\u{1f497}\u{1f49a}\u{1f60f}\u{1f49b}\u{1f642}\u{1f493}\u{1f929}\u{1f604}\u{1f600}\u{1f5a4}\u{1f603}\u{1f4af}\u{1f648}\u{1f447}\u{1f3b6}\u{1f612}\u{1f92d}\u2763\u{1f61c}\u{1f48b}\u{1f440}\u{1f62a}\u{1f611}\u{1f4a5}\u{1f64b}\u{1f61e}\u{1f629}\u{1f621}\u{1f92a}\u{1f44a}\u{1f973}\u{1f625}\u{1f924}\u{1f449}\u{1f483}\u{1f633}\u270b\u{1f61a}\u{1f61d}\u{1f634}\u{1f31f}\u{1f62c}\u{1f643}\u{1f340}\u{1f337}\u{1f63b}\u{1f613}\u2b50\u2705\u{1f97a}\u{1f308}\u{1f608}\u{1f918}\u{1f4a6}\u2714\u{1f623}\u{1f3c3}\u{1f490}\u2639\u{1f38a}\u{1f498}\u{1f620}\u261d\u{1f615}\u{1f33a}\u{1f382}\u{1f33b}\u{1f610}\u{1f595}\u{1f49d}\u{1f64a}\u{1f639}\u{1f5e3}\u{1f4ab}\u{1f480}\u{1f451}\u{1f3b5}\u{1f91e}\u{1f61b}\u{1f534}\u{1f624}\u{1f33c}\u{1f62b}\u26bd\u{1f919}\u2615\u{1f3c6}\u{1f92b}\u{1f448}\u{1f62e}\u{1f646}\u{1f37b}\u{1f343}\u{1f436}\u{1f481}\u{1f632}\u{1f33f}\u{1f9e1}\u{1f381}\u26a1\u{1f31e}\u{1f388}\u274c\u270a\u{1f44b}\u{1f630}\u{1f928}\u{1f636}\u{1f91d}\u{1f6b6}\u{1f4b0}\u{1f353}\u{1f4a2}\u{1f91f}\u{1f641}\u{1f6a8}\u{1f4a8}\u{1f92c}\u2708\u{1f380}\u{1f37a}\u{1f913}\u{1f619}\u{1f49f}\u{1f331}\u{1f616}\u{1f476}\u{1f974}\u25b6\u27a1\u2753\u{1f48e}\u{1f4b8}\u2b07\u{1f628}\u{1f31a}\u{1f98b}\u{1f637}\u{1f57a}\u26a0\u{1f645}\u{1f61f}\u{1f635}\u{1f44e}\u{1f932}\u{1f920}\u{1f927}\u{1f4cc}\u{1f535}\u{1f485}\u{1f9d0}\u{1f43e}\u{1f352}\u{1f617}\u{1f911}\u{1f30a}\u{1f92f}\u{1f437}\u260e\u{1f4a7}\u{1f62f}\u{1f486}\u{1f446}\u{1f3a4}\u{1f647}\u{1f351}\u2744\u{1f334}\u{1f4a3}\u{1f438}\u{1f48c}\u{1f4cd}\u{1f940}\u{1f922}\u{1f445}\u{1f4a1}\u{1f4a9}\u{1f450}\u{1f4f8}\u{1f47b}\u{1f910}\u{1f92e}\u{1f3bc}\u{1f975}\u{1f6a9}\u{1f34e}\u{1f34a}\u{1f47c}\u{1f48d}\u{1f4e3}\u{1f942}"),
                fi = pr.reduce((l, e, t) => (l[t] = e, l), []),
                di = pr.reduce((l, e, t) => (l[e.codePointAt(0)] = t, l), []),
                gi = Ut({
                    prefix: "\u{1f680}",
                    name: "base256emoji",
                    encode: function hi(l) {
                        return l.reduce((e, t) => e + fi[t], "")
                    },
                    decode: function pi(l) {
                        const e = [];
                        for (const t of l) {
                            const r = di[t.codePointAt(0)];
                            if (void 0 === r) throw new Error(`Non-base256emoji character: ${t}`);
                            e.push(r)
                        }
                        return new Uint8Array(e)
                    }
                });
            var yi = Object.freeze({
                    __proto__: null,
                    base256emoji: gi
                }),
                gr = 128,
                _i = -128,
                bi = Math.pow(2, 31),
                wi = Math.pow(2, 7),
                Ii = Math.pow(2, 14),
                Ri = Math.pow(2, 21),
                Si = Math.pow(2, 28),
                Pi = Math.pow(2, 35),
                Oi = Math.pow(2, 42),
                Ti = Math.pow(2, 49),
                Ni = Math.pow(2, 56),
                Di = Math.pow(2, 63),
                vr_encode = function yr(l, e, t) {
                    e = e || [];
                    for (var r = t = t || 0; l >= bi;) e[t++] = 255 & l | gr, l /= 128;
                    for (; l & _i;) e[t++] = 255 & l | gr, l >>>= 7;
                    return e[t] = 0 | l, yr.bytes = t - r + 1, e
                },
                vr_encodingLength = function(l) {
                    return l < wi ? 1 : l < Ii ? 2 : l < Ri ? 3 : l < Si ? 4 : l < Pi ? 5 : l < Oi ? 6 : l < Ti ? 7 : l < Ni ? 8 : l < Di ? 9 : 10
                };
            const _r = (l, e, t = 0) => (vr_encode(l, e, t), e),
                br = l => vr_encodingLength(l),
                Wt = (l, e) => {
                    const t = e.byteLength,
                        r = br(l),
                        n = r + br(t),
                        s = new Uint8Array(n + t);
                    return _r(l, s, 0), _r(t, s, r), s.set(e, n), new Ci(l, t, e, s)
                };
            class Ci {
                constructor(e, t, r, n) {
                    this.code = e, this.size = t, this.digest = r, this.bytes = n
                }
            }
            const xr = ({
                name: l,
                code: e,
                encode: t
            }) => new Zi(l, e, t);
            class Zi {
                constructor(e, t, r) {
                    this.name = e, this.code = t, this.encode = r
                }
                digest(e) {
                    if (e instanceof Uint8Array) {
                        const t = this.encode(e);
                        return t instanceof Uint8Array ? Wt(this.code, t) : t.then(r => Wt(this.code, r))
                    }
                    throw Error("Unknown type, must be binary type")
                }
            }
            const Er = l => function() {
                    var e = (0, u.Z)(function*(t) {
                        return new Uint8Array(yield crypto.subtle.digest(l, t))
                    });
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                Li = xr({
                    name: "sha2-256",
                    code: 18,
                    encode: Er("SHA-256")
                }),
                Mi = xr({
                    name: "sha2-512",
                    code: 19,
                    encode: Er("SHA-512")
                });
            Object.freeze({
                __proto__: null,
                sha256: Li,
                sha512: Mi
            });
            const Ir = dr;
            Object.freeze({
                __proto__: null,
                identity: {
                    code: 0,
                    name: "identity",
                    encode: Ir,
                    digest: l => Wt(0, Ir(l))
                }
            }), new TextEncoder, new TextDecoder;
            const Rr = { ...Cn,
                ...Ln,
                ...zn,
                ...jn,
                ...Vn,
                ...Xn,
                ...ri,
                ...si,
                ...li,
                ...yi
            };

            function Sr(l) {
                return null != globalThis.Buffer ? new Uint8Array(l.buffer, l.byteOffset, l.byteLength) : l
            }

            function Pr(l, e, t, r) {
                return {
                    name: l,
                    prefix: e,
                    encoder: {
                        name: l,
                        prefix: e,
                        encode: t
                    },
                    decoder: {
                        decode: r
                    }
                }
            }
            const Or = Pr("utf8", "u", l => "u" + new TextDecoder("utf8").decode(l), l => (new TextEncoder).encode(l.substring(1))),
                kt = Pr("ascii", "a", l => {
                    let e = "a";
                    for (let t = 0; t < l.length; t++) e += String.fromCharCode(l[t]);
                    return e
                }, l => {
                    const e = function Ki(l = 0) {
                        return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe ? Sr(globalThis.Buffer.allocUnsafe(l)) : new Uint8Array(l)
                    }((l = l.substring(1)).length);
                    for (let t = 0; t < l.length; t++) e[t] = l.charCodeAt(t);
                    return e
                }),
                Ji = {
                    utf8: Or,
                    "utf-8": Or,
                    hex: Rr.base16,
                    latin1: kt,
                    ascii: kt,
                    binary: kt,
                    ...Rr
                },
                St = "wc@2:core:",
                qi = {
                    database: ":memory:"
                },
                Nr = "client_ed25519_seed",
                Gi = Q.ONE_DAY,
                Xi = Q.SIX_HOURS,
                Ar = "wss://relay.walletconnect.com",
                Fr = "wss://relay.walletconnect.org",
                is = Q.ONE_SECOND,
                mt_created = "subscription_created",
                mt_deleted = "subscription_deleted",
                fs = 1e3 * Q.FIVE_SECONDS,
                At = {
                    wc_pairingDelete: {
                        req: {
                            ttl: Q.ONE_DAY,
                            prompt: !1,
                            tag: 1e3
                        },
                        res: {
                            ttl: Q.ONE_DAY,
                            prompt: !1,
                            tag: 1001
                        }
                    },
                    wc_pairingPing: {
                        req: {
                            ttl: Q.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1002
                        },
                        res: {
                            ttl: Q.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1003
                        }
                    },
                    unregistered_method: {
                        req: {
                            ttl: Q.ONE_DAY,
                            prompt: !1,
                            tag: 0
                        },
                        res: {
                            ttl: Q.ONE_DAY,
                            prompt: !1,
                            tag: 0
                        }
                    }
                },
                pt_expired = "expirer_expired",
                Yt = "verify-api",
                Tt = "https://verify.walletconnect.com",
                Xt = "https://verify.walletconnect.org",
                vs = [Tt, Xt];
            class xs {
                constructor(e, t) {
                    var r = this;
                    this.core = e, this.logger = t, this.keychain = new Map, this.name = "keychain", this.version = "0.3", this.initialized = !1, this.storagePrefix = St, this.init = (0, u.Z)(function*() {
                        if (!r.initialized) {
                            const n = yield r.getKeyChain();
                            typeof n < "u" && (r.keychain = n), r.initialized = !0
                        }
                    }), this.has = n => (this.isInitialized(), this.keychain.has(n)), this.set = function() {
                        var n = (0, u.Z)(function*(s, a) {
                            r.isInitialized(), r.keychain.set(s, a), yield r.persist()
                        });
                        return function(s, a) {
                            return n.apply(this, arguments)
                        }
                    }(), this.get = n => {
                        this.isInitialized();
                        const s = this.keychain.get(n);
                        if (typeof s > "u") {
                            const {
                                message: a
                            } = (0, v.Z7)("NO_MATCHING_KEY", `${this.name}: ${n}`);
                            throw new Error(a)
                        }
                        return s
                    }, this.del = function() {
                        var n = (0, u.Z)(function*(s) {
                            r.isInitialized(), r.keychain.delete(s), yield r.persist()
                        });
                        return function(s) {
                            return n.apply(this, arguments)
                        }
                    }(), this.core = e, this.logger = (0, ie.generateChildLogger)(t, this.name)
                }
                get context() {
                    return (0, ie.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                setKeyChain(e) {
                    var t = this;
                    return (0, u.Z)(function*() {
                        yield t.core.storage.setItem(t.storageKey, (0, v.KC)(e))
                    })()
                }
                getKeyChain() {
                    var e = this;
                    return (0, u.Z)(function*() {
                        const t = yield e.core.storage.getItem(e.storageKey);
                        return typeof t < "u" ? (0, v.IP)(t) : void 0
                    })()
                }
                persist() {
                    var e = this;
                    return (0, u.Z)(function*() {
                        yield e.setKeyChain(e.keychain)
                    })()
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: e
                        } = (0, v.Z7)("NOT_INITIALIZED", this.name);
                        throw new Error(e)
                    }
                }
            }
            class Es {
                constructor(e, t, r) {
                    var n = this;
                    this.core = e, this.logger = t, this.name = "crypto", this.initialized = !1, this.init = (0, u.Z)(function*() {
                        n.initialized || (yield n.keychain.init(), n.initialized = !0)
                    }), this.hasKeys = s => (this.isInitialized(), this.keychain.has(s)), this.getClientId = (0, u.Z)(function*() {
                        return n.isInitialized(), cr(ur(yield n.getClientSeed()).publicKey)
                    }), this.generateKeyPair = () => {
                        this.isInitialized();
                        const s = (0, v.Au)();
                        return this.setPrivateKey(s.publicKey, s.privateKey)
                    }, this.signJWT = function() {
                        var s = (0, u.Z)(function*(a) {
                            n.isInitialized();
                            const b = ur(yield n.getClientSeed()),
                                y = (0, v.jd)();
                            return yield function fn(l, e, t, r) {
                                return qt.apply(this, arguments)
                            }(y, a, Gi, b)
                        });
                        return function(a) {
                            return s.apply(this, arguments)
                        }
                    }(), this.generateSharedKey = (s, a, h) => {
                        this.isInitialized();
                        const b = this.getPrivateKey(s),
                            y = (0, v.m$)(b, a);
                        return this.setSymKey(y, h)
                    }, this.setSymKey = function() {
                        var s = (0, u.Z)(function*(a, h) {
                            n.isInitialized();
                            const b = h || (0, v.Ym)(a);
                            return yield n.keychain.set(b, a), b
                        });
                        return function(a, h) {
                            return s.apply(this, arguments)
                        }
                    }(), this.deleteKeyPair = function() {
                        var s = (0, u.Z)(function*(a) {
                            n.isInitialized(), yield n.keychain.del(a)
                        });
                        return function(a) {
                            return s.apply(this, arguments)
                        }
                    }(), this.deleteSymKey = function() {
                        var s = (0, u.Z)(function*(a) {
                            n.isInitialized(), yield n.keychain.del(a)
                        });
                        return function(a) {
                            return s.apply(this, arguments)
                        }
                    }(), this.encode = function() {
                        var s = (0, u.Z)(function*(a, h, b) {
                            n.isInitialized();
                            const y = (0, v.EN)(b),
                                E = (0, fe.u)(h);
                            if ((0, v.Q8)(y)) {
                                const J = y.senderPublicKey,
                                    se = y.receiverPublicKey;
                                a = yield n.generateSharedKey(J, se)
                            }
                            const C = n.getSymKey(a),
                                {
                                    type: j,
                                    senderPublicKey: W
                                } = y;
                            return (0, v.HI)({
                                type: j,
                                symKey: C,
                                message: E,
                                senderPublicKey: W
                            })
                        });
                        return function(a, h, b) {
                            return s.apply(this, arguments)
                        }
                    }(), this.decode = function() {
                        var s = (0, u.Z)(function*(a, h, b) {
                            n.isInitialized();
                            const y = (0, v.Ll)(h, b);
                            if ((0, v.Q8)(y)) {
                                const E = y.receiverPublicKey,
                                    C = y.senderPublicKey;
                                a = yield n.generateSharedKey(E, C)
                            }
                            try {
                                const E = n.getSymKey(a),
                                    C = (0, v.pe)({
                                        symKey: E,
                                        encoded: h
                                    });
                                return (0, fe.D)(C)
                            } catch (E) {
                                n.logger.error(`Failed to decode message from topic: '${a}', clientId: '${yield n.getClientId()}'`), n.logger.error(E)
                            }
                        });
                        return function(a, h, b) {
                            return s.apply(this, arguments)
                        }
                    }(), this.getPayloadType = s => {
                        const a = (0, v.vB)(s);
                        return (0, v.WG)(a.type)
                    }, this.getPayloadSenderPublicKey = s => {
                        const a = (0, v.vB)(s);
                        return a.senderPublicKey ? (0, dn.BB)(a.senderPublicKey, v.AW) : void 0
                    }, this.core = e, this.logger = (0, ie.generateChildLogger)(t, this.name), this.keychain = r || new xs(this.core, this.logger)
                }
                get context() {
                    return (0, ie.getLoggerContext)(this.logger)
                }
                setPrivateKey(e, t) {
                    var r = this;
                    return (0, u.Z)(function*() {
                        return yield r.keychain.set(e, t), e
                    })()
                }
                getPrivateKey(e) {
                    return this.keychain.get(e)
                }
                getClientSeed() {
                    var e = this;
                    return (0, u.Z)(function*() {
                        let t = "";
                        try {
                            t = e.keychain.get(Nr)
                        } catch {
                            t = (0, v.jd)(), yield e.keychain.set(Nr, t)
                        }
                        return function Vi(l, e = "utf8") {
                            const t = Ji[e];
                            if (!t) throw new Error(`Unsupported encoding "${e}"`);
                            return "utf8" !== e && "utf-8" !== e || null == globalThis.Buffer || null == globalThis.Buffer.from ? t.decoder.decode(`${t.prefix}${l}`) : Sr(globalThis.Buffer.from(l, "utf-8"))
                        }(t, "base16")
                    })()
                }
                getSymKey(e) {
                    return this.keychain.get(e)
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: e
                        } = (0, v.Z7)("NOT_INITIALIZED", this.name);
                        throw new Error(e)
                    }
                }
            }
            class ws extends Rt {
                constructor(e, t) {
                    var r;
                    super(e, t), r = this, this.logger = e, this.core = t, this.messages = new Map, this.name = "messages", this.version = "0.3", this.initialized = !1, this.storagePrefix = St, this.init = (0, u.Z)(function*() {
                        if (!r.initialized) {
                            r.logger.trace("Initialized");
                            try {
                                const n = yield r.getRelayerMessages();
                                typeof n < "u" && (r.messages = n), r.logger.debug(`Successfully Restored records for ${r.name}`), r.logger.trace({
                                    type: "method",
                                    method: "restore",
                                    size: r.messages.size
                                })
                            } catch (n) {
                                r.logger.debug(`Failed to Restore records for ${r.name}`), r.logger.error(n)
                            } finally {
                                r.initialized = !0
                            }
                        }
                    }), this.set = function() {
                        var n = (0, u.Z)(function*(s, a) {
                            r.isInitialized();
                            const h = (0, v.rj)(a);
                            let b = r.messages.get(s);
                            return typeof b > "u" && (b = {}), typeof b[h] < "u" || (b[h] = a, r.messages.set(s, b), yield r.persist()), h
                        });
                        return function(s, a) {
                            return n.apply(this, arguments)
                        }
                    }(), this.get = n => {
                        this.isInitialized();
                        let s = this.messages.get(n);
                        return typeof s > "u" && (s = {}), s
                    }, this.has = (n, s) => (this.isInitialized(), typeof this.get(n)[(0, v.rj)(s)] < "u"), this.del = function() {
                        var n = (0, u.Z)(function*(s) {
                            r.isInitialized(), r.messages.delete(s), yield r.persist()
                        });
                        return function(s) {
                            return n.apply(this, arguments)
                        }
                    }(), this.logger = (0, ie.generateChildLogger)(e, this.name), this.core = t
                }
                get context() {
                    return (0, ie.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                setRelayerMessages(e) {
                    var t = this;
                    return (0, u.Z)(function*() {
                        yield t.core.storage.setItem(t.storageKey, (0, v.KC)(e))
                    })()
                }
                getRelayerMessages() {
                    var e = this;
                    return (0, u.Z)(function*() {
                        const t = yield e.core.storage.getItem(e.storageKey);
                        return typeof t < "u" ? (0, v.IP)(t) : void 0
                    })()
                }
                persist() {
                    var e = this;
                    return (0, u.Z)(function*() {
                        yield e.setRelayerMessages(e.messages)
                    })()
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: e
                        } = (0, v.Z7)("NOT_INITIALIZED", this.name);
                        throw new Error(e)
                    }
                }
            }
            class Is extends Pt {
                constructor(e, t) {
                    var r;
                    super(e, t), r = this, this.relayer = e, this.logger = t, this.events = new H.EventEmitter, this.name = "publisher", this.queue = new Map, this.publishTimeout = (0, Q.toMiliseconds)(Q.TEN_SECONDS), this.needsTransportRestart = !1, this.publish = function() {
                        var n = (0, u.Z)(function*(s, a, h) {
                            var b;
                            r.logger.debug("Publishing Payload"), r.logger.trace({
                                type: "method",
                                method: "publish",
                                params: {
                                    topic: s,
                                    message: a,
                                    opts: h
                                }
                            });
                            try {
                                const y = h ? .ttl || Xi,
                                    E = (0, v._H)(h),
                                    C = h ? .prompt || !1,
                                    j = h ? .tag || 0,
                                    W = h ? .id || (0, ce.getBigIntRpcId)().toString(),
                                    J = {
                                        topic: s,
                                        message: a,
                                        opts: {
                                            ttl: y,
                                            relay: E,
                                            prompt: C,
                                            tag: j,
                                            id: W
                                        }
                                    },
                                    se = setTimeout(() => r.queue.set(W, J), r.publishTimeout);
                                try {
                                    yield yield(0, v.hF)(r.rpcPublish(s, a, y, E, C, j, W), r.publishTimeout, "Failed to publish payload, please try again."), r.removeRequestFromQueue(W), r.relayer.events.emit("relayer_publish", J)
                                } catch (me) {
                                    if (r.logger.debug("Publishing Payload stalled"), r.needsTransportRestart = !0, null != (b = h ? .internal) && b.throwOnFailedPublish) throw r.removeRequestFromQueue(W), me;
                                    return
                                } finally {
                                    clearTimeout(se)
                                }
                                r.logger.debug("Successfully Published Payload"), r.logger.trace({
                                    type: "method",
                                    method: "publish",
                                    params: {
                                        topic: s,
                                        message: a,
                                        opts: h
                                    }
                                })
                            } catch (y) {
                                throw r.logger.debug("Failed to Publish Payload"), r.logger.error(y), y
                            }
                        });
                        return function(s, a, h) {
                            return n.apply(this, arguments)
                        }
                    }(), this.on = (n, s) => {
                        this.events.on(n, s)
                    }, this.once = (n, s) => {
                        this.events.once(n, s)
                    }, this.off = (n, s) => {
                        this.events.off(n, s)
                    }, this.removeListener = (n, s) => {
                        this.events.removeListener(n, s)
                    }, this.relayer = e, this.logger = (0, ie.generateChildLogger)(t, this.name), this.registerEventListeners()
                }
                get context() {
                    return (0, ie.getLoggerContext)(this.logger)
                }
                rpcPublish(e, t, r, n, s, a, h) {
                    var b, y, E, C;
                    const j = {
                        method: (0, v.cO)(n.protocol).publish,
                        params: {
                            topic: e,
                            message: t,
                            ttl: r,
                            prompt: s,
                            tag: a
                        },
                        id: h
                    };
                    return (0, v.o8)(null == (b = j.params) ? void 0 : b.prompt) && (null == (y = j.params) || delete y.prompt), (0, v.o8)(null == (E = j.params) ? void 0 : E.tag) && (null == (C = j.params) || delete C.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "message",
                        direction: "outgoing",
                        request: j
                    }), this.relayer.request(j)
                }
                removeRequestFromQueue(e) {
                    this.queue.delete(e)
                }
                checkQueue() {
                    var e = this;
                    this.queue.forEach(function() {
                        var t = (0, u.Z)(function*(r) {
                            const {
                                topic: n,
                                message: s,
                                opts: a
                            } = r;
                            yield e.publish(n, s, a)
                        });
                        return function(r) {
                            return t.apply(this, arguments)
                        }
                    }())
                }
                registerEventListeners() {
                    this.relayer.core.heartbeat.on(Me.HEARTBEAT_EVENTS.pulse, () => {
                        if (this.needsTransportRestart) return this.needsTransportRestart = !1, void this.relayer.events.emit("relayer_connection_stalled");
                        this.checkQueue()
                    }), this.relayer.on("relayer_message_ack", e => {
                        this.removeRequestFromQueue(e.id.toString())
                    })
                }
            }
            class Rs {
                constructor() {
                    this.map = new Map, this.set = (e, t) => {
                        const r = this.get(e);
                        this.exists(e, t) || this.map.set(e, [...r, t])
                    }, this.get = e => this.map.get(e) || [], this.exists = (e, t) => this.get(e).includes(t), this.delete = (e, t) => {
                        if (typeof t > "u") return void this.map.delete(e);
                        if (!this.map.has(e)) return;
                        const r = this.get(e);
                        if (!this.exists(e, t)) return;
                        const n = r.filter(s => s !== t);
                        n.length ? this.map.set(e, n) : this.map.delete(e)
                    }, this.clear = () => {
                        this.map.clear()
                    }
                }
                get topics() {
                    return Array.from(this.map.keys())
                }
            }
            var Ss = Object.defineProperty,
                Ps = Object.defineProperties,
                Os = Object.getOwnPropertyDescriptors,
                Cr = Object.getOwnPropertySymbols,
                Ts = Object.prototype.hasOwnProperty,
                Ns = Object.prototype.propertyIsEnumerable,
                Zr = (l, e, t) => e in l ? Ss(l, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }) : l[e] = t,
                Ct = (l, e) => {
                    for (var t in e || (e = {})) Ts.call(e, t) && Zr(l, t, e[t]);
                    if (Cr)
                        for (var t of Cr(e)) Ns.call(e, t) && Zr(l, t, e[t]);
                    return l
                },
                er = (l, e) => Ps(l, Os(e));
            class Ds extends ze {
                constructor(e, t) {
                    var r;
                    super(e, t), r = this, this.relayer = e, this.logger = t, this.subscriptions = new Map, this.topicMap = new Rs, this.events = new H.EventEmitter, this.name = "subscription", this.version = "0.3", this.pending = new Map, this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = St, this.subscribeTimeout = 1e4, this.restartInProgress = !1, this.batchSubscribeTopicsLimit = 500, this.init = (0, u.Z)(function*() {
                        r.initialized || (r.logger.trace("Initialized"), r.registerEventListeners(), r.clientId = yield r.relayer.core.crypto.getClientId())
                    }), this.subscribe = function() {
                        var n = (0, u.Z)(function*(s, a) {
                            yield r.restartToComplete(), r.isInitialized(), r.logger.debug("Subscribing Topic"), r.logger.trace({
                                type: "method",
                                method: "subscribe",
                                params: {
                                    topic: s,
                                    opts: a
                                }
                            });
                            try {
                                const h = (0, v._H)(a),
                                    b = {
                                        topic: s,
                                        relay: h
                                    };
                                r.pending.set(s, b);
                                const y = yield r.rpcSubscribe(s, h);
                                return r.onSubscribe(y, b), r.logger.debug("Successfully Subscribed Topic"), r.logger.trace({
                                    type: "method",
                                    method: "subscribe",
                                    params: {
                                        topic: s,
                                        opts: a
                                    }
                                }), y
                            } catch (h) {
                                throw r.logger.debug("Failed to Subscribe Topic"), r.logger.error(h), h
                            }
                        });
                        return function(s, a) {
                            return n.apply(this, arguments)
                        }
                    }(), this.unsubscribe = function() {
                        var n = (0, u.Z)(function*(s, a) {
                            yield r.restartToComplete(), r.isInitialized(), typeof a ? .id < "u" ? yield r.unsubscribeById(s, a.id, a): yield r.unsubscribeByTopic(s, a)
                        });
                        return function(s, a) {
                            return n.apply(this, arguments)
                        }
                    }(), this.isSubscribed = function() {
                        var n = (0, u.Z)(function*(s) {
                            return !!r.topics.includes(s) || (yield new Promise((a, h) => {
                                const b = new Q.Watch;
                                b.start(r.pendingSubscriptionWatchLabel);
                                const y = setInterval(() => {
                                    !r.pending.has(s) && r.topics.includes(s) && (clearInterval(y), b.stop(r.pendingSubscriptionWatchLabel), a(!0)), b.elapsed(r.pendingSubscriptionWatchLabel) >= fs && (clearInterval(y), b.stop(r.pendingSubscriptionWatchLabel), h(new Error("Subscription resolution timeout")))
                                }, r.pollingInterval)
                            }).catch(() => !1))
                        });
                        return function(s) {
                            return n.apply(this, arguments)
                        }
                    }(), this.on = (n, s) => {
                        this.events.on(n, s)
                    }, this.once = (n, s) => {
                        this.events.once(n, s)
                    }, this.off = (n, s) => {
                        this.events.off(n, s)
                    }, this.removeListener = (n, s) => {
                        this.events.removeListener(n, s)
                    }, this.restart = (0, u.Z)(function*() {
                        r.restartInProgress = !0, yield r.restore(), yield r.reset(), r.restartInProgress = !1
                    }), this.relayer = e, this.logger = (0, ie.generateChildLogger)(t, this.name), this.clientId = ""
                }
                get context() {
                    return (0, ie.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.relayer.core.customStoragePrefix + "//" + this.name
                }
                get length() {
                    return this.subscriptions.size
                }
                get ids() {
                    return Array.from(this.subscriptions.keys())
                }
                get values() {
                    return Array.from(this.subscriptions.values())
                }
                get topics() {
                    return this.topicMap.topics
                }
                hasSubscription(e, t) {
                    let r = !1;
                    try {
                        r = this.getSubscription(e).topic === t
                    } catch {}
                    return r
                }
                onEnable() {
                    this.cached = [], this.initialized = !0
                }
                onDisable() {
                    this.cached = this.values, this.subscriptions.clear(), this.topicMap.clear()
                }
                unsubscribeByTopic(e, t) {
                    var r = this;
                    return (0, u.Z)(function*() {
                        const n = r.topicMap.get(e);
                        yield Promise.all(n.map(function() {
                            var s = (0, u.Z)(function*(a) {
                                return yield r.unsubscribeById(e, a, t)
                            });
                            return function(a) {
                                return s.apply(this, arguments)
                            }
                        }()))
                    })()
                }
                unsubscribeById(e, t, r) {
                    var n = this;
                    return (0, u.Z)(function*() {
                        n.logger.debug("Unsubscribing Topic"), n.logger.trace({
                            type: "method",
                            method: "unsubscribe",
                            params: {
                                topic: e,
                                id: t,
                                opts: r
                            }
                        });
                        try {
                            const s = (0, v._H)(r);
                            yield n.rpcUnsubscribe(e, t, s);
                            const a = (0, v.D6)("USER_DISCONNECTED", `${n.name}, ${e}`);
                            yield n.onUnsubscribe(e, t, a), n.logger.debug("Successfully Unsubscribed Topic"), n.logger.trace({
                                type: "method",
                                method: "unsubscribe",
                                params: {
                                    topic: e,
                                    id: t,
                                    opts: r
                                }
                            })
                        } catch (s) {
                            throw n.logger.debug("Failed to Unsubscribe Topic"), n.logger.error(s), s
                        }
                    })()
                }
                rpcSubscribe(e, t) {
                    var r = this;
                    return (0, u.Z)(function*() {
                        const n = {
                            method: (0, v.cO)(t.protocol).subscribe,
                            params: {
                                topic: e
                            }
                        };
                        r.logger.debug("Outgoing Relay Payload"), r.logger.trace({
                            type: "payload",
                            direction: "outgoing",
                            request: n
                        });
                        try {
                            yield yield(0, v.hF)(r.relayer.request(n), r.subscribeTimeout)
                        } catch {
                            r.logger.debug("Outgoing Relay Subscribe Payload stalled"), r.relayer.events.emit("relayer_connection_stalled")
                        }
                        return (0, v.rj)(e + r.clientId)
                    })()
                }
                rpcBatchSubscribe(e) {
                    var t = this;
                    return (0, u.Z)(function*() {
                        if (!e.length) return;
                        const n = {
                            method: (0, v.cO)(e[0].relay.protocol).batchSubscribe,
                            params: {
                                topics: e.map(s => s.topic)
                            }
                        };
                        t.logger.debug("Outgoing Relay Payload"), t.logger.trace({
                            type: "payload",
                            direction: "outgoing",
                            request: n
                        });
                        try {
                            return yield yield(0, v.hF)(t.relayer.request(n), t.subscribeTimeout)
                        } catch {
                            t.logger.debug("Outgoing Relay Payload stalled"), t.relayer.events.emit("relayer_connection_stalled")
                        }
                    })()
                }
                rpcUnsubscribe(e, t, r) {
                    const n = {
                        method: (0, v.cO)(r.protocol).unsubscribe,
                        params: {
                            topic: e,
                            id: t
                        }
                    };
                    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "payload",
                        direction: "outgoing",
                        request: n
                    }), this.relayer.request(n)
                }
                onSubscribe(e, t) {
                    this.setSubscription(e, er(Ct({}, t), {
                        id: e
                    })), this.pending.delete(t.topic)
                }
                onBatchSubscribe(e) {
                    e.length && e.forEach(t => {
                        this.setSubscription(t.id, Ct({}, t)), this.pending.delete(t.topic)
                    })
                }
                onUnsubscribe(e, t, r) {
                    var n = this;
                    return (0, u.Z)(function*() {
                        n.events.removeAllListeners(t), n.hasSubscription(t, e) && n.deleteSubscription(t, r), yield n.relayer.messages.del(e)
                    })()
                }
                setRelayerSubscriptions(e) {
                    var t = this;
                    return (0, u.Z)(function*() {
                        yield t.relayer.core.storage.setItem(t.storageKey, e)
                    })()
                }
                getRelayerSubscriptions() {
                    var e = this;
                    return (0, u.Z)(function*() {
                        return yield e.relayer.core.storage.getItem(e.storageKey)
                    })()
                }
                setSubscription(e, t) {
                    this.subscriptions.has(e) || (this.logger.debug("Setting subscription"), this.logger.trace({
                        type: "method",
                        method: "setSubscription",
                        id: e,
                        subscription: t
                    }), this.addSubscription(e, t))
                }
                addSubscription(e, t) {
                    this.subscriptions.set(e, Ct({}, t)), this.topicMap.set(t.topic, e), this.events.emit(mt_created, t)
                }
                getSubscription(e) {
                    this.logger.debug("Getting subscription"), this.logger.trace({
                        type: "method",
                        method: "getSubscription",
                        id: e
                    });
                    const t = this.subscriptions.get(e);
                    if (!t) {
                        const {
                            message: r
                        } = (0, v.Z7)("NO_MATCHING_KEY", `${this.name}: ${e}`);
                        throw new Error(r)
                    }
                    return t
                }
                deleteSubscription(e, t) {
                    this.logger.debug("Deleting subscription"), this.logger.trace({
                        type: "method",
                        method: "deleteSubscription",
                        id: e,
                        reason: t
                    });
                    const r = this.getSubscription(e);
                    this.subscriptions.delete(e), this.topicMap.delete(r.topic, e), this.events.emit(mt_deleted, er(Ct({}, r), {
                        reason: t
                    }))
                }
                persist() {
                    var e = this;
                    return (0, u.Z)(function*() {
                        yield e.setRelayerSubscriptions(e.values), e.events.emit("subscription_sync")
                    })()
                }
                reset() {
                    var e = this;
                    return (0, u.Z)(function*() {
                        if (e.cached.length) {
                            const t = Math.ceil(e.cached.length / e.batchSubscribeTopicsLimit);
                            for (let r = 0; r < t; r++) {
                                const n = e.cached.splice(0, e.batchSubscribeTopicsLimit);
                                yield e.batchSubscribe(n)
                            }
                        }
                        e.events.emit("subscription_resubscribed")
                    })()
                }
                restore() {
                    var e = this;
                    return (0, u.Z)(function*() {
                        try {
                            const t = yield e.getRelayerSubscriptions();
                            if (typeof t > "u" || !t.length) return;
                            if (e.subscriptions.size) {
                                const {
                                    message: r
                                } = (0, v.Z7)("RESTORE_WILL_OVERRIDE", e.name);
                                throw e.logger.error(r), e.logger.error(`${e.name}: ${JSON.stringify(e.values)}`), new Error(r)
                            }
                            e.cached = t, e.logger.debug(`Successfully Restored subscriptions for ${e.name}`), e.logger.trace({
                                type: "method",
                                method: "restore",
                                subscriptions: e.values
                            })
                        } catch (t) {
                            e.logger.debug(`Failed to Restore subscriptions for ${e.name}`), e.logger.error(t)
                        }
                    })()
                }
                batchSubscribe(e) {
                    var t = this;
                    return (0, u.Z)(function*() {
                        if (!e.length) return;
                        const r = yield t.rpcBatchSubscribe(e);
                        (0, v.qt)(r) && t.onBatchSubscribe(r.map((n, s) => er(Ct({}, e[s]), {
                            id: n
                        })))
                    })()
                }
                onConnect() {
                    var e = this;
                    return (0, u.Z)(function*() {
                        e.restartInProgress || (yield e.restart(), e.onEnable())
                    })()
                }
                onDisconnect() {
                    this.onDisable()
                }
                checkPending() {
                    var e = this;
                    return (0, u.Z)(function*() {
                        if (!e.initialized || e.relayer.transportExplicitlyClosed) return;
                        const t = [];
                        e.pending.forEach(r => {
                            t.push(r)
                        }), yield e.batchSubscribe(t)
                    })()
                }
                registerEventListeners() {
                    var e = this;
                    this.relayer.core.heartbeat.on(Me.HEARTBEAT_EVENTS.pulse, (0, u.Z)(function*() {
                        yield e.checkPending()
                    })), this.relayer.on("relayer_connect", (0, u.Z)(function*() {
                        yield e.onConnect()
                    })), this.relayer.on("relayer_disconnect", () => {
                        this.onDisconnect()
                    }), this.events.on(mt_created, function() {
                        var t = (0, u.Z)(function*(r) {
                            const n = mt_created;
                            e.logger.info(`Emitting ${n}`), e.logger.debug({
                                type: "event",
                                event: n,
                                data: r
                            }), yield e.persist()
                        });
                        return function(r) {
                            return t.apply(this, arguments)
                        }
                    }()), this.events.on(mt_deleted, function() {
                        var t = (0, u.Z)(function*(r) {
                            const n = mt_deleted;
                            e.logger.info(`Emitting ${n}`), e.logger.debug({
                                type: "event",
                                event: n,
                                data: r
                            }), yield e.persist()
                        });
                        return function(r) {
                            return t.apply(this, arguments)
                        }
                    }())
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: e
                        } = (0, v.Z7)("NOT_INITIALIZED", this.name);
                        throw new Error(e)
                    }
                }
                restartToComplete() {
                    var e = this;
                    return (0, u.Z)(function*() {
                        e.restartInProgress && (yield new Promise(t => {
                            const r = setInterval(() => {
                                e.restartInProgress || (clearInterval(r), t())
                            }, e.pollingInterval)
                        }))
                    })()
                }
            }
            var As = Object.defineProperty,
                Lr = Object.getOwnPropertySymbols,
                Fs = Object.prototype.hasOwnProperty,
                Cs = Object.prototype.propertyIsEnumerable,
                Mr = (l, e, t) => e in l ? As(l, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }) : l[e] = t;
            class Ls extends Ot {
                constructor(e) {
                    var t;
                    super(e), t = this, this.protocol = "wc", this.version = 2, this.events = new H.EventEmitter, this.name = "relayer", this.transportExplicitlyClosed = !1, this.initialized = !1, this.connectionAttemptInProgress = !1, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "socket stalled"], this.hasExperiencedNetworkDisruption = !1, this.request = function() {
                        var r = (0, u.Z)(function*(n) {
                            t.logger.debug("Publishing Request Payload");
                            try {
                                return yield t.toEstablishConnection(), yield t.provider.request(n)
                            } catch (s) {
                                throw t.logger.debug("Failed to Publish Request"), t.logger.error(s), s
                            }
                        });
                        return function(n) {
                            return r.apply(this, arguments)
                        }
                    }(), this.onPayloadHandler = r => {
                        this.onProviderPayload(r)
                    }, this.onConnectHandler = () => {
                        this.events.emit("relayer_connect")
                    }, this.onDisconnectHandler = () => {
                        this.onProviderDisconnect()
                    }, this.onProviderErrorHandler = r => {
                        this.logger.error(r), this.events.emit("relayer_error", r), this.logger.info("Fatal socket error received, closing transport"), this.transportClose()
                    }, this.registerProviderListeners = () => {
                        this.provider.on("payload", this.onPayloadHandler), this.provider.on("connect", this.onConnectHandler), this.provider.on("disconnect", this.onDisconnectHandler), this.provider.on("error", this.onProviderErrorHandler)
                    }, this.core = e.core, this.logger = typeof e.logger < "u" && "string" != typeof e.logger ? (0, ie.generateChildLogger)(e.logger, this.name) : (0, ie.pino)((0, ie.getDefaultLoggerOptions)({
                        level: e.logger || "error"
                    })), this.messages = new ws(this.logger, e.core), this.subscriber = new Ds(this, this.logger), this.publisher = new Is(this, this.logger), this.relayUrl = e ? .relayUrl || Ar, this.projectId = e.projectId, this.bundleId = (0, v.X_)(), this.provider = {}
                }
                init() {
                    var e = this;
                    return (0, u.Z)(function*() {
                        e.logger.trace("Initialized"), e.registerEventListeners(), yield e.createProvider(), yield Promise.all([e.messages.init(), e.subscriber.init()]);
                        try {
                            yield e.transportOpen()
                        } catch {
                            e.logger.warn(`Connection via ${e.relayUrl} failed, attempting to connect via failover domain ${Fr}...`), yield e.restartTransport(Fr)
                        }
                        e.initialized = !0, setTimeout((0, u.Z)(function*() {
                            0 === e.subscriber.topics.length && (e.logger.info("No topics subscribed to after init, closing transport"), yield e.transportClose(), e.transportExplicitlyClosed = !1)
                        }), 1e4)
                    })()
                }
                get context() {
                    return (0, ie.getLoggerContext)(this.logger)
                }
                get connected() {
                    return this.provider.connection.connected
                }
                get connecting() {
                    return this.provider.connection.connecting
                }
                publish(e, t, r) {
                    var n = this;
                    return (0, u.Z)(function*() {
                        n.isInitialized(), yield n.publisher.publish(e, t, r), yield n.recordMessageEvent({
                            topic: e,
                            message: t,
                            publishedAt: Date.now()
                        })
                    })()
                }
                subscribe(e, t) {
                    var r = this;
                    return (0, u.Z)(function*() {
                        var n;
                        r.isInitialized();
                        let a, s = (null == (n = r.subscriber.topicMap.get(e)) ? void 0 : n[0]) || "";
                        if (s) return s;
                        const h = b => {
                            b.topic === e && (r.subscriber.off(mt_created, h), a())
                        };
                        return yield Promise.all([new Promise(b => {
                            a = b, r.subscriber.on(mt_created, h)
                        }), new Promise(function() {
                            var b = (0, u.Z)(function*(y) {
                                s = yield r.subscriber.subscribe(e, t), y()
                            });
                            return function(y) {
                                return b.apply(this, arguments)
                            }
                        }())]), s
                    })()
                }
                unsubscribe(e, t) {
                    var r = this;
                    return (0, u.Z)(function*() {
                        r.isInitialized(), yield r.subscriber.unsubscribe(e, t)
                    })()
                }
                on(e, t) {
                    this.events.on(e, t)
                }
                once(e, t) {
                    this.events.once(e, t)
                }
                off(e, t) {
                    this.events.off(e, t)
                }
                removeListener(e, t) {
                    this.events.removeListener(e, t)
                }
                transportClose() {
                    var e = this;
                    return (0, u.Z)(function*() {
                        e.transportExplicitlyClosed = !0, e.hasExperiencedNetworkDisruption && e.connected ? yield(0, v.hF)(e.provider.disconnect(), 1e3, "provider.disconnect()").catch(() => e.onProviderDisconnect()): e.connected && (yield e.provider.disconnect())
                    })()
                }
                transportOpen(e) {
                    var t = this;
                    return (0, u.Z)(function*() {
                        if (t.transportExplicitlyClosed = !1, yield t.confirmOnlineStateOrThrow(), !t.connectionAttemptInProgress) {
                            e && e !== t.relayUrl && (t.relayUrl = e, yield t.transportClose(), yield t.createProvider()), t.connectionAttemptInProgress = !0;
                            try {
                                yield Promise.all([new Promise(r => {
                                    if (!t.initialized) return r();
                                    t.subscriber.once("subscription_resubscribed", () => {
                                        r()
                                    })
                                }), new Promise(function() {
                                    var r = (0, u.Z)(function*(n, s) {
                                        try {
                                            yield(0, v.hF)(t.provider.connect(), 1e4, `Socket stalled when trying to connect to ${t.relayUrl}`)
                                        } catch (a) {
                                            return void s(a)
                                        }
                                        n()
                                    });
                                    return function(n, s) {
                                        return r.apply(this, arguments)
                                    }
                                }())])
                            } catch (r) {
                                if (t.logger.error(r), !t.isConnectionStalled(r.message)) throw r;
                                t.provider.events.emit("disconnect")
                            } finally {
                                t.connectionAttemptInProgress = !1, t.hasExperiencedNetworkDisruption = !1
                            }
                        }
                    })()
                }
                restartTransport(e) {
                    var t = this;
                    return (0, u.Z)(function*() {
                        yield t.confirmOnlineStateOrThrow(), !t.connectionAttemptInProgress && (t.relayUrl = e || t.relayUrl, yield t.transportClose(), yield t.createProvider(), yield t.transportOpen())
                    })()
                }
                confirmOnlineStateOrThrow() {
                    return (0, u.Z)(function*() {
                        if (!(yield(0, v.Gg)())) throw new Error("No internet connection detected. Please restart your network and try again.")
                    })()
                }
                isConnectionStalled(e) {
                    return this.staleConnectionErrors.some(t => e.includes(t))
                }
                createProvider() {
                    var e = this;
                    return (0, u.Z)(function*() {
                        e.provider.connection && e.unregisterProviderListeners();
                        const t = yield e.core.crypto.signJWT(e.relayUrl);
                        e.provider = new hn.r(new mn((0, v.$0)({
                            sdkVersion: "2.11.0",
                            protocol: e.protocol,
                            version: e.version,
                            relayUrl: e.relayUrl,
                            projectId: e.projectId,
                            auth: t,
                            useOnCloseEvent: !0,
                            bundleId: e.bundleId
                        }))), e.registerProviderListeners()
                    })()
                }
                recordMessageEvent(e) {
                    var t = this;
                    return (0, u.Z)(function*() {
                        const {
                            topic: r,
                            message: n
                        } = e;
                        yield t.messages.set(r, n)
                    })()
                }
                shouldIgnoreMessageEvent(e) {
                    var t = this;
                    return (0, u.Z)(function*() {
                        const {
                            topic: r,
                            message: n
                        } = e;
                        if (!n || 0 === n.length) return t.logger.debug(`Ignoring invalid/empty message: ${n}`), !0;
                        if (!(yield t.subscriber.isSubscribed(r))) return t.logger.debug(`Ignoring message for non-subscribed topic ${r}`), !0;
                        const s = t.messages.has(r, n);
                        return s && t.logger.debug(`Ignoring duplicate message: ${n}`), s
                    })()
                }
                onProviderPayload(e) {
                    var t = this;
                    return (0, u.Z)(function*() {
                        if (t.logger.debug("Incoming Relay Payload"), t.logger.trace({
                                type: "payload",
                                direction: "incoming",
                                payload: e
                            }), (0, ce.isJsonRpcRequest)(e)) {
                            if (!e.method.endsWith("_subscription")) return;
                            const r = e.params,
                                {
                                    topic: n,
                                    message: s,
                                    publishedAt: a
                                } = r.data,
                                h = {
                                    topic: n,
                                    message: s,
                                    publishedAt: a
                                };
                            t.logger.debug("Emitting Relayer Payload"), t.logger.trace(((l, e) => {
                                for (var t in e || (e = {})) Fs.call(e, t) && Mr(l, t, e[t]);
                                if (Lr)
                                    for (var t of Lr(e)) Cs.call(e, t) && Mr(l, t, e[t]);
                                return l
                            })({
                                type: "event",
                                event: r.id
                            }, h)), t.events.emit(r.id, h), yield t.acknowledgePayload(e), yield t.onMessageEvent(h)
                        } else(0, ce.isJsonRpcResponse)(e) && t.events.emit("relayer_message_ack", e)
                    })()
                }
                onMessageEvent(e) {
                    var t = this;
                    return (0, u.Z)(function*() {
                        (yield t.shouldIgnoreMessageEvent(e)) || (t.events.emit("relayer_message", e), yield t.recordMessageEvent(e))
                    })()
                }
                acknowledgePayload(e) {
                    var t = this;
                    return (0, u.Z)(function*() {
                        const r = (0, ce.formatJsonRpcResult)(e.id, !0);
                        yield t.provider.connection.send(r)
                    })()
                }
                unregisterProviderListeners() {
                    this.provider.off("payload", this.onPayloadHandler), this.provider.off("connect", this.onConnectHandler), this.provider.off("disconnect", this.onDisconnectHandler), this.provider.off("error", this.onProviderErrorHandler)
                }
                registerEventListeners() {
                    var e = this;
                    return (0, u.Z)(function*() {
                        e.events.on("relayer_connection_stalled", () => {
                            e.restartTransport().catch(r => e.logger.error(r))
                        });
                        let t = yield(0, v.Gg)();
                        (0, v.uw)(function() {
                            var r = (0, u.Z)(function*(n) {
                                e.initialized && t !== n && (t = n, n ? yield e.restartTransport().catch(s => e.logger.error(s)): (e.hasExperiencedNetworkDisruption = !0, yield e.transportClose().catch(s => e.logger.error(s))))
                            });
                            return function(n) {
                                return r.apply(this, arguments)
                            }
                        }())
                    })()
                }
                onProviderDisconnect() {
                    this.events.emit("relayer_disconnect"), this.attemptToReconnect()
                }
                attemptToReconnect() {
                    var e = this;
                    this.transportExplicitlyClosed || (this.logger.info("attemptToReconnect called. Connecting..."), setTimeout((0, u.Z)(function*() {
                        yield e.restartTransport().catch(t => e.logger.error(t))
                    }), (0, Q.toMiliseconds)(is)))
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: e
                        } = (0, v.Z7)("NOT_INITIALIZED", this.name);
                        throw new Error(e)
                    }
                }
                toEstablishConnection() {
                    var e = this;
                    return (0, u.Z)(function*() {
                        if (yield e.confirmOnlineStateOrThrow(), !e.connected) {
                            if (e.connectionAttemptInProgress) return yield new Promise(t => {
                                const r = setInterval(() => {
                                    e.connected && (clearInterval(r), t())
                                }, e.connectionStatusPollingInterval)
                            });
                            yield e.restartTransport()
                        }
                    })()
                }
            }
            var Ms = Object.defineProperty,
                zr = Object.getOwnPropertySymbols,
                zs = Object.prototype.hasOwnProperty,
                Us = Object.prototype.propertyIsEnumerable,
                Ur = (l, e, t) => e in l ? Ms(l, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }) : l[e] = t,
                jr = (l, e) => {
                    for (var t in e || (e = {})) zs.call(e, t) && Ur(l, t, e[t]);
                    if (zr)
                        for (var t of zr(e)) Us.call(e, t) && Ur(l, t, e[t]);
                    return l
                };
            class jt extends Nt {
                constructor(e, t, r, n = St, s = void 0) {
                    var a;
                    super(e, t, r, n), a = this, this.core = e, this.logger = t, this.name = r, this.map = new Map, this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = St, this.init = (0, u.Z)(function*() {
                        a.initialized || (a.logger.trace("Initialized"), yield a.restore(), a.cached.forEach(h => {
                            a.getKey && null !== h && !(0, v.o8)(h) ? a.map.set(a.getKey(h), h) : (0, v.xW)(h) ? a.map.set(h.id, h) : (0, v.h1)(h) && a.map.set(h.topic, h)
                        }), a.cached = [], a.initialized = !0)
                    }), this.set = function() {
                        var h = (0, u.Z)(function*(b, y) {
                            a.isInitialized(), a.map.has(b) ? yield a.update(b, y): (a.logger.debug("Setting value"), a.logger.trace({
                                type: "method",
                                method: "set",
                                key: b,
                                value: y
                            }), a.map.set(b, y), yield a.persist())
                        });
                        return function(b, y) {
                            return h.apply(this, arguments)
                        }
                    }(), this.get = h => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({
                        type: "method",
                        method: "get",
                        key: h
                    }), this.getData(h)), this.getAll = h => (this.isInitialized(), h ? this.values.filter(b => Object.keys(h).every(y => _n()(b[y], h[y]))) : this.values), this.update = function() {
                        var h = (0, u.Z)(function*(b, y) {
                            a.isInitialized(), a.logger.debug("Updating value"), a.logger.trace({
                                type: "method",
                                method: "update",
                                key: b,
                                update: y
                            });
                            const E = jr(jr({}, a.getData(b)), y);
                            a.map.set(b, E), yield a.persist()
                        });
                        return function(b, y) {
                            return h.apply(this, arguments)
                        }
                    }(), this.delete = function() {
                        var h = (0, u.Z)(function*(b, y) {
                            a.isInitialized(), a.map.has(b) && (a.logger.debug("Deleting value"), a.logger.trace({
                                type: "method",
                                method: "delete",
                                key: b,
                                reason: y
                            }), a.map.delete(b), yield a.persist())
                        });
                        return function(b, y) {
                            return h.apply(this, arguments)
                        }
                    }(), this.logger = (0, ie.generateChildLogger)(t, this.name), this.storagePrefix = n, this.getKey = s
                }
                get context() {
                    return (0, ie.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                get length() {
                    return this.map.size
                }
                get keys() {
                    return Array.from(this.map.keys())
                }
                get values() {
                    return Array.from(this.map.values())
                }
                setDataStore(e) {
                    var t = this;
                    return (0, u.Z)(function*() {
                        yield t.core.storage.setItem(t.storageKey, e)
                    })()
                }
                getDataStore() {
                    var e = this;
                    return (0, u.Z)(function*() {
                        return yield e.core.storage.getItem(e.storageKey)
                    })()
                }
                getData(e) {
                    const t = this.map.get(e);
                    if (!t) {
                        const {
                            message: r
                        } = (0, v.Z7)("NO_MATCHING_KEY", `${this.name}: ${e}`);
                        throw this.logger.error(r), new Error(r)
                    }
                    return t
                }
                persist() {
                    var e = this;
                    return (0, u.Z)(function*() {
                        yield e.setDataStore(e.values)
                    })()
                }
                restore() {
                    var e = this;
                    return (0, u.Z)(function*() {
                        try {
                            const t = yield e.getDataStore();
                            if (typeof t > "u" || !t.length) return;
                            if (e.map.size) {
                                const {
                                    message: r
                                } = (0, v.Z7)("RESTORE_WILL_OVERRIDE", e.name);
                                throw e.logger.error(r), new Error(r)
                            }
                            e.cached = t, e.logger.debug(`Successfully Restored value for ${e.name}`), e.logger.trace({
                                type: "method",
                                method: "restore",
                                value: e.values
                            })
                        } catch (t) {
                            e.logger.debug(`Failed to Restore value for ${e.name}`), e.logger.error(t)
                        }
                    })()
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: e
                        } = (0, v.Z7)("NOT_INITIALIZED", this.name);
                        throw new Error(e)
                    }
                }
            }
            class js {
                constructor(e, t) {
                    var r = this;
                    this.core = e, this.logger = t, this.name = "pairing", this.version = "0.3", this.events = new(K()), this.initialized = !1, this.storagePrefix = St, this.ignoredPayloadTypes = [v.rV], this.registeredMethods = [], this.init = (0, u.Z)(function*() {
                        r.initialized || (yield r.pairings.init(), yield r.cleanup(), r.registerRelayerEvents(), r.registerExpirerEvents(), r.initialized = !0, r.logger.trace("Initialized"))
                    }), this.register = ({
                        methods: n
                    }) => {
                        this.isInitialized(), this.registeredMethods = [...new Set([...this.registeredMethods, ...n])]
                    }, this.create = (0, u.Z)(function*() {
                        r.isInitialized();
                        const n = (0, v.jd)(),
                            s = yield r.core.crypto.setSymKey(n), a = (0, v.gn)(Q.FIVE_MINUTES), h = {
                                protocol: "irn"
                            }, b = {
                                topic: s,
                                expiry: a,
                                relay: h,
                                active: !1
                            }, y = (0, v.Bv)({
                                protocol: r.core.protocol,
                                version: r.core.version,
                                topic: s,
                                symKey: n,
                                relay: h
                            });
                        return yield r.pairings.set(s, b), yield r.core.relayer.subscribe(s), r.core.expirer.set(s, a), {
                            topic: s,
                            uri: y
                        }
                    }), this.pair = function() {
                        var n = (0, u.Z)(function*(s) {
                            r.isInitialized(), r.isValidPair(s);
                            const {
                                topic: a,
                                symKey: h,
                                relay: b
                            } = (0, v.he)(s.uri);
                            let y;
                            if (r.pairings.keys.includes(a) && (y = r.pairings.get(a), y.active)) throw new Error(`Pairing already exists: ${a}. Please try again with a new connection URI.`);
                            const E = (0, v.gn)(Q.FIVE_MINUTES),
                                C = {
                                    topic: a,
                                    relay: b,
                                    expiry: E,
                                    active: !1
                                };
                            return yield r.pairings.set(a, C), r.core.expirer.set(a, E), s.activatePairing && (yield r.activate({
                                topic: a
                            })), r.events.emit("pairing_create", C), r.core.crypto.keychain.has(a) || (yield r.core.crypto.setSymKey(h, a), yield r.core.relayer.subscribe(a, {
                                relay: b
                            })), C
                        });
                        return function(s) {
                            return n.apply(this, arguments)
                        }
                    }(), this.activate = function() {
                        var n = (0, u.Z)(function*({
                            topic: s
                        }) {
                            r.isInitialized();
                            const a = (0, v.gn)(Q.THIRTY_DAYS);
                            yield r.pairings.update(s, {
                                active: !0,
                                expiry: a
                            }), r.core.expirer.set(s, a)
                        });
                        return function(s) {
                            return n.apply(this, arguments)
                        }
                    }(), this.ping = function() {
                        var n = (0, u.Z)(function*(s) {
                            r.isInitialized(), yield r.isValidPing(s);
                            const {
                                topic: a
                            } = s;
                            if (r.pairings.keys.includes(a)) {
                                const h = yield r.sendRequest(a, "wc_pairingPing", {}), {
                                    done: b,
                                    resolve: y,
                                    reject: E
                                } = (0, v.H1)();
                                r.events.once((0, v.E0)("pairing_ping", h), ({
                                    error: C
                                }) => {
                                    C ? E(C) : y()
                                }), yield b()
                            }
                        });
                        return function(s) {
                            return n.apply(this, arguments)
                        }
                    }(), this.updateExpiry = function() {
                        var n = (0, u.Z)(function*({
                            topic: s,
                            expiry: a
                        }) {
                            r.isInitialized(), yield r.pairings.update(s, {
                                expiry: a
                            })
                        });
                        return function(s) {
                            return n.apply(this, arguments)
                        }
                    }(), this.updateMetadata = function() {
                        var n = (0, u.Z)(function*({
                            topic: s,
                            metadata: a
                        }) {
                            r.isInitialized(), yield r.pairings.update(s, {
                                peerMetadata: a
                            })
                        });
                        return function(s) {
                            return n.apply(this, arguments)
                        }
                    }(), this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = function() {
                        var n = (0, u.Z)(function*(s) {
                            r.isInitialized(), yield r.isValidDisconnect(s);
                            const {
                                topic: a
                            } = s;
                            r.pairings.keys.includes(a) && (yield r.sendRequest(a, "wc_pairingDelete", (0, v.D6)("USER_DISCONNECTED")), yield r.deletePairing(a))
                        });
                        return function(s) {
                            return n.apply(this, arguments)
                        }
                    }(), this.sendRequest = function() {
                        var n = (0, u.Z)(function*(s, a, h) {
                            const b = (0, ce.formatJsonRpcRequest)(a, h),
                                y = yield r.core.crypto.encode(s, b), E = At[a].req;
                            return r.core.history.set(s, b), r.core.relayer.publish(s, y, E), b.id
                        });
                        return function(s, a, h) {
                            return n.apply(this, arguments)
                        }
                    }(), this.sendResult = function() {
                        var n = (0, u.Z)(function*(s, a, h) {
                            const b = (0, ce.formatJsonRpcResult)(s, h),
                                y = yield r.core.crypto.encode(a, b), E = yield r.core.history.get(a, s), C = At[E.request.method].res;
                            yield r.core.relayer.publish(a, y, C), yield r.core.history.resolve(b)
                        });
                        return function(s, a, h) {
                            return n.apply(this, arguments)
                        }
                    }(), this.sendError = function() {
                        var n = (0, u.Z)(function*(s, a, h) {
                            const b = (0, ce.formatJsonRpcError)(s, h),
                                y = yield r.core.crypto.encode(a, b), E = yield r.core.history.get(a, s), C = At[E.request.method] ? At[E.request.method].res : At.unregistered_method.res;
                            yield r.core.relayer.publish(a, y, C), yield r.core.history.resolve(b)
                        });
                        return function(s, a, h) {
                            return n.apply(this, arguments)
                        }
                    }(), this.deletePairing = function() {
                        var n = (0, u.Z)(function*(s, a) {
                            yield r.core.relayer.unsubscribe(s), yield Promise.all([r.pairings.delete(s, (0, v.D6)("USER_DISCONNECTED")), r.core.crypto.deleteSymKey(s), a ? Promise.resolve() : r.core.expirer.del(s)])
                        });
                        return function(s, a) {
                            return n.apply(this, arguments)
                        }
                    }(), this.cleanup = (0, u.Z)(function*() {
                        const n = r.pairings.getAll().filter(s => (0, v.Bw)(s.expiry));
                        yield Promise.all(n.map(s => r.deletePairing(s.topic)))
                    }), this.onRelayEventRequest = n => {
                        const {
                            topic: s,
                            payload: a
                        } = n;
                        switch (a.method) {
                            case "wc_pairingPing":
                                return this.onPairingPingRequest(s, a);
                            case "wc_pairingDelete":
                                return this.onPairingDeleteRequest(s, a);
                            default:
                                return this.onUnknownRpcMethodRequest(s, a)
                        }
                    }, this.onRelayEventResponse = function() {
                        var n = (0, u.Z)(function*(s) {
                            const {
                                topic: a,
                                payload: h
                            } = s, b = (yield r.core.history.get(a, h.id)).request.method;
                            return "wc_pairingPing" === b ? r.onPairingPingResponse(a, h) : r.onUnknownRpcMethodResponse(b)
                        });
                        return function(s) {
                            return n.apply(this, arguments)
                        }
                    }(), this.onPairingPingRequest = function() {
                        var n = (0, u.Z)(function*(s, a) {
                            const {
                                id: h
                            } = a;
                            try {
                                r.isValidPing({
                                    topic: s
                                }), yield r.sendResult(h, s, !0), r.events.emit("pairing_ping", {
                                    id: h,
                                    topic: s
                                })
                            } catch (b) {
                                yield r.sendError(h, s, b), r.logger.error(b)
                            }
                        });
                        return function(s, a) {
                            return n.apply(this, arguments)
                        }
                    }(), this.onPairingPingResponse = (n, s) => {
                        const {
                            id: a
                        } = s;
                        setTimeout(() => {
                            (0, ce.isJsonRpcResult)(s) ? this.events.emit((0, v.E0)("pairing_ping", a), {}): (0, ce.isJsonRpcError)(s) && this.events.emit((0, v.E0)("pairing_ping", a), {
                                error: s.error
                            })
                        }, 500)
                    }, this.onPairingDeleteRequest = function() {
                        var n = (0, u.Z)(function*(s, a) {
                            const {
                                id: h
                            } = a;
                            try {
                                r.isValidDisconnect({
                                    topic: s
                                }), yield r.deletePairing(s), r.events.emit("pairing_delete", {
                                    id: h,
                                    topic: s
                                })
                            } catch (b) {
                                yield r.sendError(h, s, b), r.logger.error(b)
                            }
                        });
                        return function(s, a) {
                            return n.apply(this, arguments)
                        }
                    }(), this.onUnknownRpcMethodRequest = function() {
                        var n = (0, u.Z)(function*(s, a) {
                            const {
                                id: h,
                                method: b
                            } = a;
                            try {
                                if (r.registeredMethods.includes(b)) return;
                                const y = (0, v.D6)("WC_METHOD_UNSUPPORTED", b);
                                yield r.sendError(h, s, y), r.logger.error(y)
                            } catch (y) {
                                yield r.sendError(h, s, y), r.logger.error(y)
                            }
                        });
                        return function(s, a) {
                            return n.apply(this, arguments)
                        }
                    }(), this.onUnknownRpcMethodResponse = n => {
                        this.registeredMethods.includes(n) || this.logger.error((0, v.D6)("WC_METHOD_UNSUPPORTED", n))
                    }, this.isValidPair = n => {
                        var s;
                        if (!(0, v.EJ)(n)) {
                            const {
                                message: h
                            } = (0, v.Z7)("MISSING_OR_INVALID", `pair() params: ${n}`);
                            throw new Error(h)
                        }
                        if (!(0, v.jv)(n.uri)) {
                            const {
                                message: h
                            } = (0, v.Z7)("MISSING_OR_INVALID", `pair() uri: ${n.uri}`);
                            throw new Error(h)
                        }
                        const a = (0, v.he)(n.uri);
                        if (null == (s = a ? .relay) || !s.protocol) {
                            const {
                                message: h
                            } = (0, v.Z7)("MISSING_OR_INVALID", "pair() uri#relay-protocol");
                            throw new Error(h)
                        }
                        if (null == a || !a.symKey) {
                            const {
                                message: h
                            } = (0, v.Z7)("MISSING_OR_INVALID", "pair() uri#symKey");
                            throw new Error(h)
                        }
                    }, this.isValidPing = function() {
                        var n = (0, u.Z)(function*(s) {
                            if (!(0, v.EJ)(s)) {
                                const {
                                    message: h
                                } = (0, v.Z7)("MISSING_OR_INVALID", `ping() params: ${s}`);
                                throw new Error(h)
                            }
                            const {
                                topic: a
                            } = s;
                            yield r.isValidPairingTopic(a)
                        });
                        return function(s) {
                            return n.apply(this, arguments)
                        }
                    }(), this.isValidDisconnect = function() {
                        var n = (0, u.Z)(function*(s) {
                            if (!(0, v.EJ)(s)) {
                                const {
                                    message: h
                                } = (0, v.Z7)("MISSING_OR_INVALID", `disconnect() params: ${s}`);
                                throw new Error(h)
                            }
                            const {
                                topic: a
                            } = s;
                            yield r.isValidPairingTopic(a)
                        });
                        return function(s) {
                            return n.apply(this, arguments)
                        }
                    }(), this.isValidPairingTopic = function() {
                        var n = (0, u.Z)(function*(s) {
                            if (!(0, v.M_)(s, !1)) {
                                const {
                                    message: a
                                } = (0, v.Z7)("MISSING_OR_INVALID", `pairing topic should be a string: ${s}`);
                                throw new Error(a)
                            }
                            if (!r.pairings.keys.includes(s)) {
                                const {
                                    message: a
                                } = (0, v.Z7)("NO_MATCHING_KEY", `pairing topic doesn't exist: ${s}`);
                                throw new Error(a)
                            }
                            if ((0, v.Bw)(r.pairings.get(s).expiry)) {
                                yield r.deletePairing(s);
                                const {
                                    message: a
                                } = (0, v.Z7)("EXPIRED", `pairing topic: ${s}`);
                                throw new Error(a)
                            }
                        });
                        return function(s) {
                            return n.apply(this, arguments)
                        }
                    }(), this.core = e, this.logger = (0, ie.generateChildLogger)(t, this.name), this.pairings = new jt(this.core, this.logger, this.name, this.storagePrefix)
                }
                get context() {
                    return (0, ie.getLoggerContext)(this.logger)
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: e
                        } = (0, v.Z7)("NOT_INITIALIZED", this.name);
                        throw new Error(e)
                    }
                }
                registerRelayerEvents() {
                    var e = this;
                    this.core.relayer.on("relayer_message", function() {
                        var t = (0, u.Z)(function*(r) {
                            const {
                                topic: n,
                                message: s
                            } = r;
                            if (!e.pairings.keys.includes(n) || e.ignoredPayloadTypes.includes(e.core.crypto.getPayloadType(s))) return;
                            const a = yield e.core.crypto.decode(n, s);
                            try {
                                (0, ce.isJsonRpcRequest)(a) ? (e.core.history.set(n, a), e.onRelayEventRequest({
                                    topic: n,
                                    payload: a
                                })) : (0, ce.isJsonRpcResponse)(a) && (yield e.core.history.resolve(a), yield e.onRelayEventResponse({
                                    topic: n,
                                    payload: a
                                }), e.core.history.delete(n, a.id))
                            } catch (h) {
                                e.logger.error(h)
                            }
                        });
                        return function(r) {
                            return t.apply(this, arguments)
                        }
                    }())
                }
                registerExpirerEvents() {
                    var e = this;
                    this.core.expirer.on(pt_expired, function() {
                        var t = (0, u.Z)(function*(r) {
                            const {
                                topic: n
                            } = (0, v.iP)(r.target);
                            n && e.pairings.keys.includes(n) && (yield e.deletePairing(n, !0), e.events.emit("pairing_expire", {
                                topic: n
                            }))
                        });
                        return function(r) {
                            return t.apply(this, arguments)
                        }
                    }())
                }
            }
            class Ks extends xt {
                constructor(e, t) {
                    var r;
                    super(e, t), r = this, this.core = e, this.logger = t, this.records = new Map, this.events = new H.EventEmitter, this.name = "history", this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = St, this.init = (0, u.Z)(function*() {
                        r.initialized || (r.logger.trace("Initialized"), yield r.restore(), r.cached.forEach(n => r.records.set(n.id, n)), r.cached = [], r.registerEventListeners(), r.initialized = !0)
                    }), this.set = (n, s, a) => {
                        if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({
                                type: "method",
                                method: "set",
                                topic: n,
                                request: s,
                                chainId: a
                            }), this.records.has(s.id)) return;
                        const h = {
                            id: s.id,
                            topic: n,
                            request: {
                                method: s.method,
                                params: s.params || null
                            },
                            chainId: a,
                            expiry: (0, v.gn)(Q.THIRTY_DAYS)
                        };
                        this.records.set(h.id, h), this.events.emit("history_created", h)
                    }, this.resolve = function() {
                        var n = (0, u.Z)(function*(s) {
                            if (r.isInitialized(), r.logger.debug("Updating JSON-RPC response history record"), r.logger.trace({
                                    type: "method",
                                    method: "update",
                                    response: s
                                }), !r.records.has(s.id)) return;
                            const a = yield r.getRecord(s.id);
                            typeof a.response > "u" && (a.response = (0, ce.isJsonRpcError)(s) ? {
                                error: s.error
                            } : {
                                result: s.result
                            }, r.records.set(a.id, a), r.events.emit("history_updated", a))
                        });
                        return function(s) {
                            return n.apply(this, arguments)
                        }
                    }(), this.get = function() {
                        var n = (0, u.Z)(function*(s, a) {
                            return r.isInitialized(), r.logger.debug("Getting record"), r.logger.trace({
                                type: "method",
                                method: "get",
                                topic: s,
                                id: a
                            }), yield r.getRecord(a)
                        });
                        return function(s, a) {
                            return n.apply(this, arguments)
                        }
                    }(), this.delete = (n, s) => {
                        this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({
                            type: "method",
                            method: "delete",
                            id: s
                        }), this.values.forEach(a => {
                            if (a.topic === n) {
                                if (typeof s < "u" && a.id !== s) return;
                                this.records.delete(a.id), this.events.emit("history_deleted", a)
                            }
                        })
                    }, this.exists = function() {
                        var n = (0, u.Z)(function*(s, a) {
                            return r.isInitialized(), !!r.records.has(a) && (yield r.getRecord(a)).topic === s
                        });
                        return function(s, a) {
                            return n.apply(this, arguments)
                        }
                    }(), this.on = (n, s) => {
                        this.events.on(n, s)
                    }, this.once = (n, s) => {
                        this.events.once(n, s)
                    }, this.off = (n, s) => {
                        this.events.off(n, s)
                    }, this.removeListener = (n, s) => {
                        this.events.removeListener(n, s)
                    }, this.logger = (0, ie.generateChildLogger)(t, this.name)
                }
                get context() {
                    return (0, ie.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                get size() {
                    return this.records.size
                }
                get keys() {
                    return Array.from(this.records.keys())
                }
                get values() {
                    return Array.from(this.records.values())
                }
                get pending() {
                    const e = [];
                    return this.values.forEach(t => {
                        if (typeof t.response < "u") return;
                        const r = {
                            topic: t.topic,
                            request: (0, ce.formatJsonRpcRequest)(t.request.method, t.request.params, t.id),
                            chainId: t.chainId
                        };
                        return e.push(r)
                    }), e
                }
                setJsonRpcRecords(e) {
                    var t = this;
                    return (0, u.Z)(function*() {
                        yield t.core.storage.setItem(t.storageKey, e)
                    })()
                }
                getJsonRpcRecords() {
                    var e = this;
                    return (0, u.Z)(function*() {
                        return yield e.core.storage.getItem(e.storageKey)
                    })()
                }
                getRecord(e) {
                    this.isInitialized();
                    const t = this.records.get(e);
                    if (!t) {
                        const {
                            message: r
                        } = (0, v.Z7)("NO_MATCHING_KEY", `${this.name}: ${e}`);
                        throw new Error(r)
                    }
                    return t
                }
                persist() {
                    var e = this;
                    return (0, u.Z)(function*() {
                        yield e.setJsonRpcRecords(e.values), e.events.emit("history_sync")
                    })()
                }
                restore() {
                    var e = this;
                    return (0, u.Z)(function*() {
                        try {
                            const t = yield e.getJsonRpcRecords();
                            if (typeof t > "u" || !t.length) return;
                            if (e.records.size) {
                                const {
                                    message: r
                                } = (0, v.Z7)("RESTORE_WILL_OVERRIDE", e.name);
                                throw e.logger.error(r), new Error(r)
                            }
                            e.cached = t, e.logger.debug(`Successfully Restored records for ${e.name}`), e.logger.trace({
                                type: "method",
                                method: "restore",
                                records: e.values
                            })
                        } catch (t) {
                            e.logger.debug(`Failed to Restore records for ${e.name}`), e.logger.error(t)
                        }
                    })()
                }
                registerEventListeners() {
                    this.events.on("history_created", e => {
                        const t = "history_created";
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            record: e
                        }), this.persist()
                    }), this.events.on("history_updated", e => {
                        const t = "history_updated";
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            record: e
                        }), this.persist()
                    }), this.events.on("history_deleted", e => {
                        const t = "history_deleted";
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            record: e
                        }), this.persist()
                    }), this.core.heartbeat.on(Me.HEARTBEAT_EVENTS.pulse, () => {
                        this.cleanup()
                    })
                }
                cleanup() {
                    try {
                        this.records.forEach(e => {
                            (0, Q.toMiliseconds)(e.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${e.id}`), this.delete(e.topic, e.id))
                        })
                    } catch (e) {
                        this.logger.warn(e)
                    }
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: e
                        } = (0, v.Z7)("NOT_INITIALIZED", this.name);
                        throw new Error(e)
                    }
                }
            }
            class Js extends Ue {
                constructor(e, t) {
                    var r;
                    super(e, t), r = this, this.core = e, this.logger = t, this.expirations = new Map, this.events = new H.EventEmitter, this.name = "expirer", this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = St, this.init = (0, u.Z)(function*() {
                        r.initialized || (r.logger.trace("Initialized"), yield r.restore(), r.cached.forEach(n => r.expirations.set(n.target, n)), r.cached = [], r.registerEventListeners(), r.initialized = !0)
                    }), this.has = n => {
                        try {
                            const s = this.formatTarget(n);
                            return typeof this.getExpiration(s) < "u"
                        } catch {
                            return !1
                        }
                    }, this.set = (n, s) => {
                        this.isInitialized();
                        const a = this.formatTarget(n),
                            h = {
                                target: a,
                                expiry: s
                            };
                        this.expirations.set(a, h), this.checkExpiry(a, h), this.events.emit("expirer_created", {
                            target: a,
                            expiration: h
                        })
                    }, this.get = n => {
                        this.isInitialized();
                        const s = this.formatTarget(n);
                        return this.getExpiration(s)
                    }, this.del = n => {
                        if (this.isInitialized(), this.has(n)) {
                            const s = this.formatTarget(n),
                                a = this.getExpiration(s);
                            this.expirations.delete(s), this.events.emit("expirer_deleted", {
                                target: s,
                                expiration: a
                            })
                        }
                    }, this.on = (n, s) => {
                        this.events.on(n, s)
                    }, this.once = (n, s) => {
                        this.events.once(n, s)
                    }, this.off = (n, s) => {
                        this.events.off(n, s)
                    }, this.removeListener = (n, s) => {
                        this.events.removeListener(n, s)
                    }, this.logger = (0, ie.generateChildLogger)(t, this.name)
                }
                get context() {
                    return (0, ie.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                get length() {
                    return this.expirations.size
                }
                get keys() {
                    return Array.from(this.expirations.keys())
                }
                get values() {
                    return Array.from(this.expirations.values())
                }
                formatTarget(e) {
                    if ("string" == typeof e) return (0, v.Z4)(e);
                    if ("number" == typeof e) return (0, v.Gq)(e);
                    const {
                        message: t
                    } = (0, v.Z7)("UNKNOWN_TYPE", "Target type: " + typeof e);
                    throw new Error(t)
                }
                setExpirations(e) {
                    var t = this;
                    return (0, u.Z)(function*() {
                        yield t.core.storage.setItem(t.storageKey, e)
                    })()
                }
                getExpirations() {
                    var e = this;
                    return (0, u.Z)(function*() {
                        return yield e.core.storage.getItem(e.storageKey)
                    })()
                }
                persist() {
                    var e = this;
                    return (0, u.Z)(function*() {
                        yield e.setExpirations(e.values), e.events.emit("expirer_sync")
                    })()
                }
                restore() {
                    var e = this;
                    return (0, u.Z)(function*() {
                        try {
                            const t = yield e.getExpirations();
                            if (typeof t > "u" || !t.length) return;
                            if (e.expirations.size) {
                                const {
                                    message: r
                                } = (0, v.Z7)("RESTORE_WILL_OVERRIDE", e.name);
                                throw e.logger.error(r), new Error(r)
                            }
                            e.cached = t, e.logger.debug(`Successfully Restored expirations for ${e.name}`), e.logger.trace({
                                type: "method",
                                method: "restore",
                                expirations: e.values
                            })
                        } catch (t) {
                            e.logger.debug(`Failed to Restore expirations for ${e.name}`), e.logger.error(t)
                        }
                    })()
                }
                getExpiration(e) {
                    const t = this.expirations.get(e);
                    if (!t) {
                        const {
                            message: r
                        } = (0, v.Z7)("NO_MATCHING_KEY", `${this.name}: ${e}`);
                        throw this.logger.error(r), new Error(r)
                    }
                    return t
                }
                checkExpiry(e, t) {
                    const {
                        expiry: r
                    } = t;
                    (0, Q.toMiliseconds)(r) - Date.now() <= 0 && this.expire(e, t)
                }
                expire(e, t) {
                    this.expirations.delete(e), this.events.emit(pt_expired, {
                        target: e,
                        expiration: t
                    })
                }
                checkExpirations() {
                    this.core.relayer.connected && this.expirations.forEach((e, t) => this.checkExpiry(t, e))
                }
                registerEventListeners() {
                    this.core.heartbeat.on(Me.HEARTBEAT_EVENTS.pulse, () => this.checkExpirations()), this.events.on("expirer_created", e => {
                        const t = "expirer_created";
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            data: e
                        }), this.persist()
                    }), this.events.on(pt_expired, e => {
                        const t = pt_expired;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            data: e
                        }), this.persist()
                    }), this.events.on("expirer_deleted", e => {
                        const t = "expirer_deleted";
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            data: e
                        }), this.persist()
                    })
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: e
                        } = (0, v.Z7)("NOT_INITIALIZED", this.name);
                        throw new Error(e)
                    }
                }
            }
            class Vs extends je {
                constructor(e, t) {
                    var r;
                    super(e, t), r = this, this.projectId = e, this.logger = t, this.name = Yt, this.initialized = !1, this.queue = [], this.verifyDisabled = !1, this.init = function() {
                        var n = (0, u.Z)(function*(s) {
                            if (r.verifyDisabled || (0, v.b$)() || !(0, v.jU)()) return;
                            const a = r.getVerifyUrl(s ? .verifyUrl);
                            r.verifyUrl !== a && r.removeIframe(), r.verifyUrl = a;
                            try {
                                yield r.createIframe()
                            } catch (h) {
                                r.logger.info(`Verify iframe failed to load: ${r.verifyUrl}`), r.logger.info(h)
                            }
                            if (!r.initialized) {
                                r.removeIframe(), r.verifyUrl = Xt;
                                try {
                                    yield r.createIframe()
                                } catch (h) {
                                    r.logger.info(`Verify iframe failed to load: ${r.verifyUrl}`), r.logger.info(h), r.verifyDisabled = !0
                                }
                            }
                        });
                        return function(s) {
                            return n.apply(this, arguments)
                        }
                    }(), this.register = function() {
                        var n = (0, u.Z)(function*(s) {
                            r.initialized ? r.sendPost(s.attestationId) : (r.addToQueue(s.attestationId), yield r.init())
                        });
                        return function(s) {
                            return n.apply(this, arguments)
                        }
                    }(), this.resolve = function() {
                        var n = (0, u.Z)(function*(s) {
                            if (r.isDevEnv) return "";
                            const a = r.getVerifyUrl(s ? .verifyUrl);
                            let h;
                            try {
                                h = yield r.fetchAttestation(s.attestationId, a)
                            } catch (b) {
                                r.logger.info(`failed to resolve attestation: ${s.attestationId} from url: ${a}`), r.logger.info(b), h = yield r.fetchAttestation(s.attestationId, Xt)
                            }
                            return h
                        });
                        return function(s) {
                            return n.apply(this, arguments)
                        }
                    }(), this.fetchAttestation = function() {
                        var n = (0, u.Z)(function*(s, a) {
                            r.logger.info(`resolving attestation: ${s} from url: ${a}`);
                            const h = r.startAbortTimer(2 * Q.ONE_SECOND),
                                b = yield fetch(`${a}/attestation/${s}`, {
                                    signal: r.abortController.signal
                                });
                            return clearTimeout(h), 200 === b.status ? yield b.json(): void 0
                        });
                        return function(s, a) {
                            return n.apply(this, arguments)
                        }
                    }(), this.addToQueue = n => {
                        this.queue.push(n)
                    }, this.processQueue = () => {
                        0 !== this.queue.length && (this.queue.forEach(n => this.sendPost(n)), this.queue = [])
                    }, this.sendPost = n => {
                        var s;
                        try {
                            if (!this.iframe) return;
                            null == (s = this.iframe.contentWindow) || s.postMessage(n, "*"), this.logger.info(`postMessage sent: ${n} ${this.verifyUrl}`)
                        } catch {}
                    }, this.createIframe = (0, u.Z)(function*() {
                        let n;
                        const s = a => {
                            "verify_ready" === a.data && (r.initialized = !0, r.processQueue(), window.removeEventListener("message", s), n())
                        };
                        yield Promise.race([new Promise(a => {
                            if (document.getElementById(Yt)) return a();
                            window.addEventListener("message", s);
                            const h = document.createElement("iframe");
                            h.id = Yt, h.src = `${r.verifyUrl}/${r.projectId}`, h.style.display = "none", document.body.append(h), r.iframe = h, n = a
                        }), new Promise((a, h) => setTimeout(() => {
                            window.removeEventListener("message", s), h("verify iframe load timeout")
                        }, (0, Q.toMiliseconds)(Q.FIVE_SECONDS)))])
                    }), this.removeIframe = () => {
                        this.iframe && (this.iframe.remove(), this.iframe = void 0, this.initialized = !1)
                    }, this.getVerifyUrl = n => {
                        let s = n || Tt;
                        return vs.includes(s) || (this.logger.info(`verify url: ${s}, not included in trusted list, assigning default: ${Tt}`), s = Tt), s
                    }, this.logger = (0, ie.generateChildLogger)(t, this.name), this.verifyUrl = Tt, this.abortController = new AbortController, this.isDevEnv = (0, v.UG)() && process.env.IS_VITEST
                }
                get context() {
                    return (0, ie.getLoggerContext)(this.logger)
                }
                startAbortTimer(e) {
                    return this.abortController = new AbortController, setTimeout(() => this.abortController.abort(), (0, Q.toMiliseconds)(e))
                }
            }
            class Bs extends Ke {
                constructor(e, t) {
                    var r;
                    super(e, t), r = this, this.projectId = e, this.logger = t, this.context = "echo", this.registerDeviceToken = function() {
                        var n = (0, u.Z)(function*(s) {
                            const {
                                clientId: a,
                                token: h,
                                notificationType: b,
                                enableEncrypted: y = !1
                            } = s, E = `https://echo.walletconnect.com/${r.projectId}/clients`;
                            yield xn()(E, {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    client_id: a,
                                    type: b,
                                    token: h,
                                    always_raw: y
                                })
                            })
                        });
                        return function(s) {
                            return n.apply(this, arguments)
                        }
                    }(), this.logger = (0, ie.generateChildLogger)(t, this.context)
                }
            }
            var $s = Object.defineProperty,
                Kr = Object.getOwnPropertySymbols,
                qs = Object.prototype.hasOwnProperty,
                Hs = Object.prototype.propertyIsEnumerable,
                Jr = (l, e, t) => e in l ? $s(l, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }) : l[e] = t,
                Vr = (l, e) => {
                    for (var t in e || (e = {})) qs.call(e, t) && Jr(l, t, e[t]);
                    if (Kr)
                        for (var t of Kr(e)) Hs.call(e, t) && Jr(l, t, e[t]);
                    return l
                };
            class tr extends yt {
                constructor(e) {
                    super(e), this.protocol = "wc", this.version = 2, this.name = "core", this.events = new H.EventEmitter, this.initialized = !1, this.on = (r, n) => this.events.on(r, n), this.once = (r, n) => this.events.once(r, n), this.off = (r, n) => this.events.off(r, n), this.removeListener = (r, n) => this.events.removeListener(r, n), this.projectId = e ? .projectId, this.relayUrl = e ? .relayUrl || Ar, this.customStoragePrefix = null != e && e.customStoragePrefix ? `:${e.customStoragePrefix}` : "";
                    const t = typeof e ? .logger < "u" && "string" != typeof e ? .logger ? e.logger : (0, ie.pino)((0, ie.getDefaultLoggerOptions)({
                        level: e ? .logger || "error"
                    }));
                    this.logger = (0, ie.generateChildLogger)(t, this.name), this.heartbeat = new Me.HeartBeat, this.crypto = new Es(this, this.logger, e ? .keychain), this.history = new Ks(this, this.logger), this.expirer = new Js(this, this.logger), this.storage = null != e && e.storage ? e.storage : new lt(Vr(Vr({}, qi), e ? .storageOptions)), this.relayer = new Ls({
                        core: this,
                        logger: this.logger,
                        relayUrl: this.relayUrl,
                        projectId: this.projectId
                    }), this.pairing = new js(this, this.logger), this.verify = new Vs(this.projectId || "", this.logger), this.echoClient = new Bs(this.projectId || "", this.logger)
                }
                static init(e) {
                    return (0, u.Z)(function*() {
                        const t = new tr(e);
                        yield t.initialize();
                        const r = yield t.crypto.getClientId();
                        return yield t.storage.setItem("WALLETCONNECT_CLIENT_ID", r), t
                    })()
                }
                get context() {
                    return (0, ie.getLoggerContext)(this.logger)
                }
                start() {
                    var e = this;
                    return (0, u.Z)(function*() {
                        e.initialized || (yield e.initialize())
                    })()
                }
                initialize() {
                    var e = this;
                    return (0, u.Z)(function*() {
                        e.logger.trace("Initialized");
                        try {
                            yield e.crypto.init(), yield e.history.init(), yield e.expirer.init(), yield e.relayer.init(), yield e.heartbeat.init(), yield e.pairing.init(), e.initialized = !0, e.logger.info("Core Initialization Success")
                        } catch (t) {
                            throw e.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, t), e.logger.error(t.message), t
                        }
                    })()
                }
            }
            const Gs = tr,
                rr = "wc@2:client:",
                Hr = "WALLETCONNECT_DEEPLINK_CHOICE",
                Gr = "Proposal expired",
                Kt = Q.SEVEN_DAYS,
                Zt = {
                    wc_sessionPropose: {
                        req: {
                            ttl: Q.FIVE_MINUTES,
                            prompt: !0,
                            tag: 1100
                        },
                        res: {
                            ttl: Q.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1101
                        }
                    },
                    wc_sessionSettle: {
                        req: {
                            ttl: Q.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1102
                        },
                        res: {
                            ttl: Q.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1103
                        }
                    },
                    wc_sessionUpdate: {
                        req: {
                            ttl: Q.ONE_DAY,
                            prompt: !1,
                            tag: 1104
                        },
                        res: {
                            ttl: Q.ONE_DAY,
                            prompt: !1,
                            tag: 1105
                        }
                    },
                    wc_sessionExtend: {
                        req: {
                            ttl: Q.ONE_DAY,
                            prompt: !1,
                            tag: 1106
                        },
                        res: {
                            ttl: Q.ONE_DAY,
                            prompt: !1,
                            tag: 1107
                        }
                    },
                    wc_sessionRequest: {
                        req: {
                            ttl: Q.FIVE_MINUTES,
                            prompt: !0,
                            tag: 1108
                        },
                        res: {
                            ttl: Q.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1109
                        }
                    },
                    wc_sessionEvent: {
                        req: {
                            ttl: Q.FIVE_MINUTES,
                            prompt: !0,
                            tag: 1110
                        },
                        res: {
                            ttl: Q.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1111
                        }
                    },
                    wc_sessionDelete: {
                        req: {
                            ttl: Q.ONE_DAY,
                            prompt: !1,
                            tag: 1112
                        },
                        res: {
                            ttl: Q.ONE_DAY,
                            prompt: !1,
                            tag: 1113
                        }
                    },
                    wc_sessionPing: {
                        req: {
                            ttl: Q.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1114
                        },
                        res: {
                            ttl: Q.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1115
                        }
                    }
                },
                ir = {
                    min: Q.FIVE_MINUTES,
                    max: Q.SEVEN_DAYS
                },
                Xs = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
            var eo = Object.defineProperty,
                to = Object.defineProperties,
                ro = Object.getOwnPropertyDescriptors,
                Wr = Object.getOwnPropertySymbols,
                no = Object.prototype.hasOwnProperty,
                io = Object.prototype.propertyIsEnumerable,
                kr = (l, e, t) => e in l ? eo(l, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }) : l[e] = t,
                ft = (l, e) => {
                    for (var t in e || (e = {})) no.call(e, t) && kr(l, t, e[t]);
                    if (Wr)
                        for (var t of Wr(e)) io.call(e, t) && kr(l, t, e[t]);
                    return l
                },
                Lt = (l, e) => to(l, ro(e));
            class so extends Ve {
                constructor(e) {
                    var t;
                    super(e), t = this, this.name = "engine", this.events = new(K()), this.initialized = !1, this.ignoredPayloadTypes = [v.rV], this.requestQueue = {
                        state: "IDLE",
                        queue: []
                    }, this.sessionRequestQueue = {
                        state: "IDLE",
                        queue: []
                    }, this.requestQueueDelay = Q.ONE_SECOND, this.init = (0, u.Z)(function*() {
                        t.initialized || (yield t.cleanup(), t.registerRelayerEvents(), t.registerExpirerEvents(), t.registerPairingEvents(), t.client.core.pairing.register({
                            methods: Object.keys(Zt)
                        }), t.initialized = !0, setTimeout(() => {
                            t.sessionRequestQueue.queue = t.getPendingSessionRequests(), t.processSessionRequestQueue()
                        }, (0, Q.toMiliseconds)(t.requestQueueDelay)))
                    }), this.connect = function() {
                        var r = (0, u.Z)(function*(n) {
                            yield t.isInitialized();
                            const s = Lt(ft({}, n), {
                                requiredNamespaces: n.requiredNamespaces || {},
                                optionalNamespaces: n.optionalNamespaces || {}
                            });
                            yield t.isValidConnect(s);
                            const {
                                pairingTopic: a,
                                requiredNamespaces: h,
                                optionalNamespaces: b,
                                sessionProperties: y,
                                relays: E
                            } = s;
                            let j, C = a,
                                W = !1;
                            if (C && (W = t.client.core.pairing.pairings.get(C).active), !C || !W) {
                                const {
                                    topic: ct,
                                    uri: ht
                                } = yield t.client.core.pairing.create();
                                C = ct, j = ht
                            }
                            const J = yield t.client.core.crypto.generateKeyPair(), se = ft({
                                requiredNamespaces: h,
                                optionalNamespaces: b,
                                relays: E ? ? [{
                                    protocol: "irn"
                                }],
                                proposer: {
                                    publicKey: J,
                                    metadata: t.client.metadata
                                }
                            }, y && {
                                sessionProperties: y
                            }), {
                                reject: me,
                                resolve: xe,
                                done: He
                            } = (0, v.H1)(Q.FIVE_MINUTES, Gr);
                            if (t.events.once((0, v.E0)("session_connect"), function() {
                                    var ct = (0, u.Z)(function*({
                                        error: ht,
                                        session: Oe
                                    }) {
                                        if (ht) me(ht);
                                        else if (Oe) {
                                            Oe.self.publicKey = J;
                                            const gt = Lt(ft({}, Oe), {
                                                requiredNamespaces: Oe.requiredNamespaces,
                                                optionalNamespaces: Oe.optionalNamespaces
                                            });
                                            yield t.client.session.set(Oe.topic, gt), yield t.setExpiry(Oe.topic, Oe.expiry), C && (yield t.client.core.pairing.updateMetadata({
                                                topic: C,
                                                metadata: Oe.peer.metadata
                                            })), xe(gt)
                                        }
                                    });
                                    return function(ht) {
                                        return ct.apply(this, arguments)
                                    }
                                }()), !C) {
                                const {
                                    message: ct
                                } = (0, v.Z7)("NO_MATCHING_KEY", `connect() pairing topic: ${C}`);
                                throw new Error(ct)
                            }
                            const Ge = yield t.sendRequest({
                                topic: C,
                                method: "wc_sessionPropose",
                                params: se
                            }), dt = (0, v.gn)(Q.FIVE_MINUTES);
                            return yield t.setProposal(Ge, ft({
                                id: Ge,
                                expiry: dt
                            }, se)), {
                                uri: j,
                                approval: He
                            }
                        });
                        return function(n) {
                            return r.apply(this, arguments)
                        }
                    }(), this.pair = function() {
                        var r = (0, u.Z)(function*(n) {
                            return yield t.isInitialized(), yield t.client.core.pairing.pair(n)
                        });
                        return function(n) {
                            return r.apply(this, arguments)
                        }
                    }(), this.approve = function() {
                        var r = (0, u.Z)(function*(n) {
                            yield t.isInitialized(), yield t.isValidApprove(n);
                            const {
                                id: s,
                                relayProtocol: a,
                                namespaces: h,
                                sessionProperties: b
                            } = n, y = t.client.proposal.get(s);
                            let {
                                pairingTopic: E,
                                proposer: C,
                                requiredNamespaces: j,
                                optionalNamespaces: W
                            } = y;
                            E = E || "", (0, v.L5)(j) || (j = (0, v.fc)(h, "approve()"));
                            const J = yield t.client.core.crypto.generateKeyPair(), se = C.publicKey, me = yield t.client.core.crypto.generateSharedKey(J, se);
                            E && s && (yield t.client.core.pairing.updateMetadata({
                                topic: E,
                                metadata: C.metadata
                            }), yield t.sendResult({
                                id: s,
                                topic: E,
                                result: {
                                    relay: {
                                        protocol: a ? ? "irn"
                                    },
                                    responderPublicKey: J
                                }
                            }), yield t.client.proposal.delete(s, (0, v.D6)("USER_DISCONNECTED")), yield t.client.core.pairing.activate({
                                topic: E
                            }));
                            const xe = ft({
                                relay: {
                                    protocol: a ? ? "irn"
                                },
                                namespaces: h,
                                requiredNamespaces: j,
                                optionalNamespaces: W,
                                pairingTopic: E,
                                controller: {
                                    publicKey: J,
                                    metadata: t.client.metadata
                                },
                                expiry: (0, v.gn)(Kt)
                            }, b && {
                                sessionProperties: b
                            });
                            yield t.client.core.relayer.subscribe(me), yield t.sendRequest({
                                topic: me,
                                method: "wc_sessionSettle",
                                params: xe,
                                throwOnFailedPublish: !0
                            });
                            const He = Lt(ft({}, xe), {
                                topic: me,
                                pairingTopic: E,
                                acknowledged: !1,
                                self: xe.controller,
                                peer: {
                                    publicKey: C.publicKey,
                                    metadata: C.metadata
                                },
                                controller: J
                            });
                            return yield t.client.session.set(me, He), yield t.setExpiry(me, (0, v.gn)(Kt)), {
                                topic: me,
                                acknowledged: () => new Promise(Ge => setTimeout(() => Ge(t.client.session.get(me)), 500))
                            }
                        });
                        return function(n) {
                            return r.apply(this, arguments)
                        }
                    }(), this.reject = function() {
                        var r = (0, u.Z)(function*(n) {
                            yield t.isInitialized(), yield t.isValidReject(n);
                            const {
                                id: s,
                                reason: a
                            } = n, {
                                pairingTopic: h
                            } = t.client.proposal.get(s);
                            h && (yield t.sendError(s, h, a), yield t.client.proposal.delete(s, (0, v.D6)("USER_DISCONNECTED")))
                        });
                        return function(n) {
                            return r.apply(this, arguments)
                        }
                    }(), this.update = function() {
                        var r = (0, u.Z)(function*(n) {
                            yield t.isInitialized(), yield t.isValidUpdate(n);
                            const {
                                topic: s,
                                namespaces: a
                            } = n, h = yield t.sendRequest({
                                topic: s,
                                method: "wc_sessionUpdate",
                                params: {
                                    namespaces: a
                                }
                            }), {
                                done: b,
                                resolve: y,
                                reject: E
                            } = (0, v.H1)();
                            return t.events.once((0, v.E0)("session_update", h), ({
                                error: C
                            }) => {
                                C ? E(C) : y()
                            }), yield t.client.session.update(s, {
                                namespaces: a
                            }), {
                                acknowledged: b
                            }
                        });
                        return function(n) {
                            return r.apply(this, arguments)
                        }
                    }(), this.extend = function() {
                        var r = (0, u.Z)(function*(n) {
                            yield t.isInitialized(), yield t.isValidExtend(n);
                            const {
                                topic: s
                            } = n, a = yield t.sendRequest({
                                topic: s,
                                method: "wc_sessionExtend",
                                params: {}
                            }), {
                                done: h,
                                resolve: b,
                                reject: y
                            } = (0, v.H1)();
                            return t.events.once((0, v.E0)("session_extend", a), ({
                                error: E
                            }) => {
                                E ? y(E) : b()
                            }), yield t.setExpiry(s, (0, v.gn)(Kt)), {
                                acknowledged: h
                            }
                        });
                        return function(n) {
                            return r.apply(this, arguments)
                        }
                    }(), this.request = function() {
                        var r = (0, u.Z)(function*(n) {
                            yield t.isInitialized(), yield t.isValidRequest(n);
                            const {
                                chainId: s,
                                request: a,
                                topic: h,
                                expiry: b
                            } = n, y = (0, ce.payloadId)(), {
                                done: E,
                                resolve: C,
                                reject: j
                            } = (0, v.H1)(b, "Request expired. Please try again.");
                            return t.events.once((0, v.E0)("session_request", y), ({
                                error: W,
                                result: J
                            }) => {
                                W ? j(W) : C(J)
                            }), yield Promise.all([new Promise(function() {
                                var W = (0, u.Z)(function*(J) {
                                    yield t.sendRequest({
                                        clientRpcId: y,
                                        topic: h,
                                        method: "wc_sessionRequest",
                                        params: {
                                            request: a,
                                            chainId: s
                                        },
                                        expiry: b,
                                        throwOnFailedPublish: !0
                                    }).catch(se => j(se)), t.client.events.emit("session_request_sent", {
                                        topic: h,
                                        request: a,
                                        chainId: s,
                                        id: y
                                    }), J()
                                });
                                return function(J) {
                                    return W.apply(this, arguments)
                                }
                            }()), new Promise(function() {
                                var W = (0, u.Z)(function*(J) {
                                    const se = yield(0, v.bW)(t.client.core.storage, Hr);
                                    (0, v.Hh)({
                                        id: y,
                                        topic: h,
                                        wcDeepLink: se
                                    }), J()
                                });
                                return function(J) {
                                    return W.apply(this, arguments)
                                }
                            }()), E()]).then(W => W[2])
                        });
                        return function(n) {
                            return r.apply(this, arguments)
                        }
                    }(), this.respond = function() {
                        var r = (0, u.Z)(function*(n) {
                            yield t.isInitialized(), yield t.isValidRespond(n);
                            const {
                                topic: s,
                                response: a
                            } = n, {
                                id: h
                            } = a;
                            (0, ce.isJsonRpcResult)(a) ? yield t.sendResult({
                                id: h,
                                topic: s,
                                result: a.result,
                                throwOnFailedPublish: !0
                            }): (0, ce.isJsonRpcError)(a) && (yield t.sendError(h, s, a.error)), t.cleanupAfterResponse(n)
                        });
                        return function(n) {
                            return r.apply(this, arguments)
                        }
                    }(), this.ping = function() {
                        var r = (0, u.Z)(function*(n) {
                            yield t.isInitialized(), yield t.isValidPing(n);
                            const {
                                topic: s
                            } = n;
                            if (t.client.session.keys.includes(s)) {
                                const a = yield t.sendRequest({
                                    topic: s,
                                    method: "wc_sessionPing",
                                    params: {}
                                }), {
                                    done: h,
                                    resolve: b,
                                    reject: y
                                } = (0, v.H1)();
                                t.events.once((0, v.E0)("session_ping", a), ({
                                    error: E
                                }) => {
                                    E ? y(E) : b()
                                }), yield h()
                            } else t.client.core.pairing.pairings.keys.includes(s) && (yield t.client.core.pairing.ping({
                                topic: s
                            }))
                        });
                        return function(n) {
                            return r.apply(this, arguments)
                        }
                    }(), this.emit = function() {
                        var r = (0, u.Z)(function*(n) {
                            yield t.isInitialized(), yield t.isValidEmit(n);
                            const {
                                topic: s,
                                event: a,
                                chainId: h
                            } = n;
                            yield t.sendRequest({
                                topic: s,
                                method: "wc_sessionEvent",
                                params: {
                                    event: a,
                                    chainId: h
                                }
                            })
                        });
                        return function(n) {
                            return r.apply(this, arguments)
                        }
                    }(), this.disconnect = function() {
                        var r = (0, u.Z)(function*(n) {
                            yield t.isInitialized(), yield t.isValidDisconnect(n);
                            const {
                                topic: s
                            } = n;
                            t.client.session.keys.includes(s) ? (yield t.sendRequest({
                                topic: s,
                                method: "wc_sessionDelete",
                                params: (0, v.D6)("USER_DISCONNECTED"),
                                throwOnFailedPublish: !0
                            }), yield t.deleteSession(s)) : yield t.client.core.pairing.disconnect({
                                topic: s
                            })
                        });
                        return function(n) {
                            return r.apply(this, arguments)
                        }
                    }(), this.find = r => (this.isInitialized(), this.client.session.getAll().filter(n => (0, v.Ih)(n, r))), this.getPendingSessionRequests = () => (this.isInitialized(), this.client.pendingRequest.getAll()), this.cleanupDuplicatePairings = function() {
                        var r = (0, u.Z)(function*(n) {
                            if (n.pairingTopic) try {
                                const s = t.client.core.pairing.pairings.get(n.pairingTopic),
                                    a = t.client.core.pairing.pairings.getAll().filter(h => {
                                        var b, y;
                                        return (null == (b = h.peerMetadata) ? void 0 : b.url) && (null == (y = h.peerMetadata) ? void 0 : y.url) === n.peer.metadata.url && h.topic && h.topic !== s.topic
                                    });
                                if (0 === a.length) return;
                                t.client.logger.info(`Cleaning up ${a.length} duplicate pairing(s)`), yield Promise.all(a.map(h => t.client.core.pairing.disconnect({
                                    topic: h.topic
                                }))), t.client.logger.info("Duplicate pairings clean up finished")
                            } catch (s) {
                                t.client.logger.error(s)
                            }
                        });
                        return function(n) {
                            return r.apply(this, arguments)
                        }
                    }(), this.deleteSession = function() {
                        var r = (0, u.Z)(function*(n, s) {
                            const {
                                self: a
                            } = t.client.session.get(n);
                            yield t.client.core.relayer.unsubscribe(n), t.client.session.delete(n, (0, v.D6)("USER_DISCONNECTED")), t.client.core.crypto.keychain.has(a.publicKey) && (yield t.client.core.crypto.deleteKeyPair(a.publicKey)), t.client.core.crypto.keychain.has(n) && (yield t.client.core.crypto.deleteSymKey(n)), s || t.client.core.expirer.del(n), t.client.core.storage.removeItem(Hr).catch(h => t.client.logger.warn(h)), t.getPendingSessionRequests().forEach(h => {
                                h.topic === n && t.deletePendingSessionRequest(h.id, (0, v.D6)("USER_DISCONNECTED"))
                            })
                        });
                        return function(n, s) {
                            return r.apply(this, arguments)
                        }
                    }(), this.deleteProposal = function() {
                        var r = (0, u.Z)(function*(n, s) {
                            yield Promise.all([t.client.proposal.delete(n, (0, v.D6)("USER_DISCONNECTED")), s ? Promise.resolve() : t.client.core.expirer.del(n)])
                        });
                        return function(n, s) {
                            return r.apply(this, arguments)
                        }
                    }(), this.deletePendingSessionRequest = function() {
                        var r = (0, u.Z)(function*(n, s, a = !1) {
                            yield Promise.all([t.client.pendingRequest.delete(n, s), a ? Promise.resolve() : t.client.core.expirer.del(n)]), t.sessionRequestQueue.queue = t.sessionRequestQueue.queue.filter(h => h.id !== n), a && (t.sessionRequestQueue.state = "IDLE")
                        });
                        return function(n, s) {
                            return r.apply(this, arguments)
                        }
                    }(), this.setExpiry = function() {
                        var r = (0, u.Z)(function*(n, s) {
                            t.client.session.keys.includes(n) && (yield t.client.session.update(n, {
                                expiry: s
                            })), t.client.core.expirer.set(n, s)
                        });
                        return function(n, s) {
                            return r.apply(this, arguments)
                        }
                    }(), this.setProposal = function() {
                        var r = (0, u.Z)(function*(n, s) {
                            yield t.client.proposal.set(n, s), t.client.core.expirer.set(n, s.expiry)
                        });
                        return function(n, s) {
                            return r.apply(this, arguments)
                        }
                    }(), this.setPendingSessionRequest = function() {
                        var r = (0, u.Z)(function*(n) {
                            const s = Zt.wc_sessionRequest.req.ttl,
                                {
                                    id: a,
                                    topic: h,
                                    params: b,
                                    verifyContext: y
                                } = n;
                            yield t.client.pendingRequest.set(a, {
                                id: a,
                                topic: h,
                                params: b,
                                verifyContext: y
                            }), s && t.client.core.expirer.set(a, (0, v.gn)(s))
                        });
                        return function(n) {
                            return r.apply(this, arguments)
                        }
                    }(), this.sendRequest = function() {
                        var r = (0, u.Z)(function*(n) {
                            const {
                                topic: s,
                                method: a,
                                params: h,
                                expiry: b,
                                relayRpcId: y,
                                clientRpcId: E,
                                throwOnFailedPublish: C
                            } = n, j = (0, ce.formatJsonRpcRequest)(a, h, E);
                            if ((0, v.jU)() && Xs.includes(a)) {
                                const se = (0, v.rj)(JSON.stringify(j));
                                t.client.core.verify.register({
                                    attestationId: se
                                })
                            }
                            const W = yield t.client.core.crypto.encode(s, j), J = Zt[a].req;
                            return b && (J.ttl = b), y && (J.id = y), t.client.core.history.set(s, j), C ? (J.internal = Lt(ft({}, J.internal), {
                                throwOnFailedPublish: !0
                            }), yield t.client.core.relayer.publish(s, W, J)) : t.client.core.relayer.publish(s, W, J).catch(se => t.client.logger.error(se)), j.id
                        });
                        return function(n) {
                            return r.apply(this, arguments)
                        }
                    }(), this.sendResult = function() {
                        var r = (0, u.Z)(function*(n) {
                            const {
                                id: s,
                                topic: a,
                                result: h,
                                throwOnFailedPublish: b
                            } = n, y = (0, ce.formatJsonRpcResult)(s, h), E = yield t.client.core.crypto.encode(a, y), C = yield t.client.core.history.get(a, s), j = Zt[C.request.method].res;
                            b ? (j.internal = Lt(ft({}, j.internal), {
                                throwOnFailedPublish: !0
                            }), yield t.client.core.relayer.publish(a, E, j)) : t.client.core.relayer.publish(a, E, j).catch(W => t.client.logger.error(W)), yield t.client.core.history.resolve(y)
                        });
                        return function(n) {
                            return r.apply(this, arguments)
                        }
                    }(), this.sendError = function() {
                        var r = (0, u.Z)(function*(n, s, a) {
                            const h = (0, ce.formatJsonRpcError)(n, a),
                                b = yield t.client.core.crypto.encode(s, h), y = yield t.client.core.history.get(s, n);
                            t.client.core.relayer.publish(s, b, Zt[y.request.method].res), yield t.client.core.history.resolve(h)
                        });
                        return function(n, s, a) {
                            return r.apply(this, arguments)
                        }
                    }(), this.cleanup = (0, u.Z)(function*() {
                        const r = [],
                            n = [];
                        t.client.session.getAll().forEach(s => {
                            (0, v.Bw)(s.expiry) && r.push(s.topic)
                        }), t.client.proposal.getAll().forEach(s => {
                            (0, v.Bw)(s.expiry) && n.push(s.id)
                        }), yield Promise.all([...r.map(s => t.deleteSession(s)), ...n.map(s => t.deleteProposal(s))])
                    }), this.onRelayEventRequest = function() {
                        var r = (0, u.Z)(function*(n) {
                            t.requestQueue.queue.push(n), yield t.processRequestsQueue()
                        });
                        return function(n) {
                            return r.apply(this, arguments)
                        }
                    }(), this.processRequestsQueue = (0, u.Z)(function*() {
                        if ("ACTIVE" !== t.requestQueue.state) {
                            for (t.client.logger.info(`Request queue starting with ${t.requestQueue.queue.length} requests`); t.requestQueue.queue.length > 0;) {
                                t.requestQueue.state = "ACTIVE";
                                const r = t.requestQueue.queue.shift();
                                if (r) try {
                                    t.processRequest(r), yield new Promise(n => setTimeout(n, 300))
                                } catch (n) {
                                    t.client.logger.warn(n)
                                }
                            }
                            t.requestQueue.state = "IDLE"
                        } else t.client.logger.info("Request queue already active, skipping...")
                    }), this.processRequest = r => {
                        const {
                            topic: n,
                            payload: s
                        } = r, a = s.method;
                        switch (a) {
                            case "wc_sessionPropose":
                                return this.onSessionProposeRequest(n, s);
                            case "wc_sessionSettle":
                                return this.onSessionSettleRequest(n, s);
                            case "wc_sessionUpdate":
                                return this.onSessionUpdateRequest(n, s);
                            case "wc_sessionExtend":
                                return this.onSessionExtendRequest(n, s);
                            case "wc_sessionPing":
                                return this.onSessionPingRequest(n, s);
                            case "wc_sessionDelete":
                                return this.onSessionDeleteRequest(n, s);
                            case "wc_sessionRequest":
                                return this.onSessionRequest(n, s);
                            case "wc_sessionEvent":
                                return this.onSessionEventRequest(n, s);
                            default:
                                return this.client.logger.info(`Unsupported request method ${a}`)
                        }
                    }, this.onRelayEventResponse = function() {
                        var r = (0, u.Z)(function*(n) {
                            const {
                                topic: s,
                                payload: a
                            } = n, h = (yield t.client.core.history.get(s, a.id)).request.method;
                            switch (h) {
                                case "wc_sessionPropose":
                                    return t.onSessionProposeResponse(s, a);
                                case "wc_sessionSettle":
                                    return t.onSessionSettleResponse(s, a);
                                case "wc_sessionUpdate":
                                    return t.onSessionUpdateResponse(s, a);
                                case "wc_sessionExtend":
                                    return t.onSessionExtendResponse(s, a);
                                case "wc_sessionPing":
                                    return t.onSessionPingResponse(s, a);
                                case "wc_sessionRequest":
                                    return t.onSessionRequestResponse(s, a);
                                default:
                                    return t.client.logger.info(`Unsupported response method ${h}`)
                            }
                        });
                        return function(n) {
                            return r.apply(this, arguments)
                        }
                    }(), this.onRelayEventUnknownPayload = r => {
                        const {
                            topic: n
                        } = r, {
                            message: s
                        } = (0, v.Z7)("MISSING_OR_INVALID", `Decoded payload on topic ${n} is not identifiable as a JSON-RPC request or a response.`);
                        throw new Error(s)
                    }, this.onSessionProposeRequest = function() {
                        var r = (0, u.Z)(function*(n, s) {
                            const {
                                params: a,
                                id: h
                            } = s;
                            try {
                                t.isValidConnect(ft({}, s.params));
                                const b = (0, v.gn)(Q.FIVE_MINUTES),
                                    y = ft({
                                        id: h,
                                        pairingTopic: n,
                                        expiry: b
                                    }, a);
                                yield t.setProposal(h, y);
                                const E = (0, v.rj)(JSON.stringify(s)),
                                    C = yield t.getVerifyContext(E, y.proposer.metadata);
                                t.client.events.emit("session_proposal", {
                                    id: h,
                                    params: y,
                                    verifyContext: C
                                })
                            } catch (b) {
                                yield t.sendError(h, n, b), t.client.logger.error(b)
                            }
                        });
                        return function(n, s) {
                            return r.apply(this, arguments)
                        }
                    }(), this.onSessionProposeResponse = function() {
                        var r = (0, u.Z)(function*(n, s) {
                            const {
                                id: a
                            } = s;
                            if ((0, ce.isJsonRpcResult)(s)) {
                                const {
                                    result: h
                                } = s;
                                t.client.logger.trace({
                                    type: "method",
                                    method: "onSessionProposeResponse",
                                    result: h
                                });
                                const b = t.client.proposal.get(a);
                                t.client.logger.trace({
                                    type: "method",
                                    method: "onSessionProposeResponse",
                                    proposal: b
                                });
                                const y = b.proposer.publicKey;
                                t.client.logger.trace({
                                    type: "method",
                                    method: "onSessionProposeResponse",
                                    selfPublicKey: y
                                });
                                const E = h.responderPublicKey;
                                t.client.logger.trace({
                                    type: "method",
                                    method: "onSessionProposeResponse",
                                    peerPublicKey: E
                                });
                                const C = yield t.client.core.crypto.generateSharedKey(y, E);
                                t.client.logger.trace({
                                    type: "method",
                                    method: "onSessionProposeResponse",
                                    sessionTopic: C
                                });
                                const j = yield t.client.core.relayer.subscribe(C);
                                t.client.logger.trace({
                                    type: "method",
                                    method: "onSessionProposeResponse",
                                    subscriptionId: j
                                }), yield t.client.core.pairing.activate({
                                    topic: n
                                })
                            } else(0, ce.isJsonRpcError)(s) && (yield t.client.proposal.delete(a, (0, v.D6)("USER_DISCONNECTED")), t.events.emit((0, v.E0)("session_connect"), {
                                error: s.error
                            }))
                        });
                        return function(n, s) {
                            return r.apply(this, arguments)
                        }
                    }(), this.onSessionSettleRequest = function() {
                        var r = (0, u.Z)(function*(n, s) {
                            const {
                                id: a,
                                params: h
                            } = s;
                            try {
                                t.isValidSessionSettleRequest(h);
                                const {
                                    relay: b,
                                    controller: y,
                                    expiry: E,
                                    namespaces: C,
                                    requiredNamespaces: j,
                                    optionalNamespaces: W,
                                    sessionProperties: J,
                                    pairingTopic: se
                                } = s.params, me = ft({
                                    topic: n,
                                    relay: b,
                                    expiry: E,
                                    namespaces: C,
                                    acknowledged: !0,
                                    pairingTopic: se,
                                    requiredNamespaces: j,
                                    optionalNamespaces: W,
                                    controller: y.publicKey,
                                    self: {
                                        publicKey: "",
                                        metadata: t.client.metadata
                                    },
                                    peer: {
                                        publicKey: y.publicKey,
                                        metadata: y.metadata
                                    }
                                }, J && {
                                    sessionProperties: J
                                });
                                yield t.sendResult({
                                    id: s.id,
                                    topic: n,
                                    result: !0
                                }), t.events.emit((0, v.E0)("session_connect"), {
                                    session: me
                                }), t.cleanupDuplicatePairings(me)
                            } catch (b) {
                                yield t.sendError(a, n, b), t.client.logger.error(b)
                            }
                        });
                        return function(n, s) {
                            return r.apply(this, arguments)
                        }
                    }(), this.onSessionSettleResponse = function() {
                        var r = (0, u.Z)(function*(n, s) {
                            const {
                                id: a
                            } = s;
                            (0, ce.isJsonRpcResult)(s) ? (yield t.client.session.update(n, {
                                acknowledged: !0
                            }), t.events.emit((0, v.E0)("session_approve", a), {})) : (0, ce.isJsonRpcError)(s) && (yield t.client.session.delete(n, (0, v.D6)("USER_DISCONNECTED")), t.events.emit((0, v.E0)("session_approve", a), {
                                error: s.error
                            }))
                        });
                        return function(n, s) {
                            return r.apply(this, arguments)
                        }
                    }(), this.onSessionUpdateRequest = function() {
                        var r = (0, u.Z)(function*(n, s) {
                            const {
                                params: a,
                                id: h
                            } = s;
                            try {
                                const b = `${n}_session_update`,
                                    y = v.O6.get(b);
                                if (y && t.isRequestOutOfSync(y, h)) return void t.client.logger.info(`Discarding out of sync request - ${h}`);
                                t.isValidUpdate(ft({
                                    topic: n
                                }, a)), yield t.client.session.update(n, {
                                    namespaces: a.namespaces
                                }), yield t.sendResult({
                                    id: h,
                                    topic: n,
                                    result: !0
                                }), t.client.events.emit("session_update", {
                                    id: h,
                                    topic: n,
                                    params: a
                                }), v.O6.set(b, h)
                            } catch (b) {
                                yield t.sendError(h, n, b), t.client.logger.error(b)
                            }
                        });
                        return function(n, s) {
                            return r.apply(this, arguments)
                        }
                    }(), this.isRequestOutOfSync = (r, n) => parseInt(n.toString().slice(0, -3)) <= parseInt(r.toString().slice(0, -3)), this.onSessionUpdateResponse = (r, n) => {
                        const {
                            id: s
                        } = n;
                        (0, ce.isJsonRpcResult)(n) ? this.events.emit((0, v.E0)("session_update", s), {}): (0, ce.isJsonRpcError)(n) && this.events.emit((0, v.E0)("session_update", s), {
                            error: n.error
                        })
                    }, this.onSessionExtendRequest = function() {
                        var r = (0, u.Z)(function*(n, s) {
                            const {
                                id: a
                            } = s;
                            try {
                                t.isValidExtend({
                                    topic: n
                                }), yield t.setExpiry(n, (0, v.gn)(Kt)), yield t.sendResult({
                                    id: a,
                                    topic: n,
                                    result: !0
                                }), t.client.events.emit("session_extend", {
                                    id: a,
                                    topic: n
                                })
                            } catch (h) {
                                yield t.sendError(a, n, h), t.client.logger.error(h)
                            }
                        });
                        return function(n, s) {
                            return r.apply(this, arguments)
                        }
                    }(), this.onSessionExtendResponse = (r, n) => {
                        const {
                            id: s
                        } = n;
                        (0, ce.isJsonRpcResult)(n) ? this.events.emit((0, v.E0)("session_extend", s), {}): (0, ce.isJsonRpcError)(n) && this.events.emit((0, v.E0)("session_extend", s), {
                            error: n.error
                        })
                    }, this.onSessionPingRequest = function() {
                        var r = (0, u.Z)(function*(n, s) {
                            const {
                                id: a
                            } = s;
                            try {
                                t.isValidPing({
                                    topic: n
                                }), yield t.sendResult({
                                    id: a,
                                    topic: n,
                                    result: !0
                                }), t.client.events.emit("session_ping", {
                                    id: a,
                                    topic: n
                                })
                            } catch (h) {
                                yield t.sendError(a, n, h), t.client.logger.error(h)
                            }
                        });
                        return function(n, s) {
                            return r.apply(this, arguments)
                        }
                    }(), this.onSessionPingResponse = (r, n) => {
                        const {
                            id: s
                        } = n;
                        setTimeout(() => {
                            (0, ce.isJsonRpcResult)(n) ? this.events.emit((0, v.E0)("session_ping", s), {}): (0, ce.isJsonRpcError)(n) && this.events.emit((0, v.E0)("session_ping", s), {
                                error: n.error
                            })
                        }, 500)
                    }, this.onSessionDeleteRequest = function() {
                        var r = (0, u.Z)(function*(n, s) {
                            const {
                                id: a
                            } = s;
                            try {
                                t.isValidDisconnect({
                                    topic: n,
                                    reason: s.params
                                }), yield Promise.all([new Promise(h => {
                                    t.client.core.relayer.once("relayer_publish", (0, u.Z)(function*() {
                                        h(yield t.deleteSession(n))
                                    }))
                                }), t.sendResult({
                                    id: a,
                                    topic: n,
                                    result: !0
                                })]), t.client.events.emit("session_delete", {
                                    id: a,
                                    topic: n
                                })
                            } catch (h) {
                                t.client.logger.error(h)
                            }
                        });
                        return function(n, s) {
                            return r.apply(this, arguments)
                        }
                    }(), this.onSessionRequest = function() {
                        var r = (0, u.Z)(function*(n, s) {
                            const {
                                id: a,
                                params: h
                            } = s;
                            try {
                                t.isValidRequest(ft({
                                    topic: n
                                }, h));
                                const b = (0, v.rj)(JSON.stringify((0, ce.formatJsonRpcRequest)("wc_sessionRequest", h, a))),
                                    y = t.client.session.get(n),
                                    C = {
                                        id: a,
                                        topic: n,
                                        params: h,
                                        verifyContext: yield t.getVerifyContext(b, y.peer.metadata)
                                    };
                                yield t.setPendingSessionRequest(C), t.addSessionRequestToSessionRequestQueue(C), t.processSessionRequestQueue()
                            } catch (b) {
                                yield t.sendError(a, n, b), t.client.logger.error(b)
                            }
                        });
                        return function(n, s) {
                            return r.apply(this, arguments)
                        }
                    }(), this.onSessionRequestResponse = (r, n) => {
                        const {
                            id: s
                        } = n;
                        (0, ce.isJsonRpcResult)(n) ? this.events.emit((0, v.E0)("session_request", s), {
                            result: n.result
                        }): (0, ce.isJsonRpcError)(n) && this.events.emit((0, v.E0)("session_request", s), {
                            error: n.error
                        })
                    }, this.onSessionEventRequest = function() {
                        var r = (0, u.Z)(function*(n, s) {
                            const {
                                id: a,
                                params: h
                            } = s;
                            try {
                                const b = `${n}_session_event_${h.event.name}`,
                                    y = v.O6.get(b);
                                if (y && t.isRequestOutOfSync(y, a)) return void t.client.logger.info(`Discarding out of sync request - ${a}`);
                                t.isValidEmit(ft({
                                    topic: n
                                }, h)), t.client.events.emit("session_event", {
                                    id: a,
                                    topic: n,
                                    params: h
                                }), v.O6.set(b, a)
                            } catch (b) {
                                yield t.sendError(a, n, b), t.client.logger.error(b)
                            }
                        });
                        return function(n, s) {
                            return r.apply(this, arguments)
                        }
                    }(), this.addSessionRequestToSessionRequestQueue = r => {
                        this.sessionRequestQueue.queue.push(r)
                    }, this.cleanupAfterResponse = r => {
                        this.deletePendingSessionRequest(r.response.id, {
                            message: "fulfilled",
                            code: 0
                        }), setTimeout(() => {
                            this.sessionRequestQueue.state = "IDLE", this.processSessionRequestQueue()
                        }, (0, Q.toMiliseconds)(this.requestQueueDelay))
                    }, this.processSessionRequestQueue = () => {
                        if ("ACTIVE" === this.sessionRequestQueue.state) return void this.client.logger.info("session request queue is already active.");
                        const r = this.sessionRequestQueue.queue[0];
                        if (r) try {
                            this.sessionRequestQueue.state = "ACTIVE", this.client.events.emit("session_request", r)
                        } catch (n) {
                            this.client.logger.error(n)
                        } else this.client.logger.info("session request queue is empty.")
                    }, this.onPairingCreated = r => {
                        if (r.active) return;
                        const n = this.client.proposal.getAll().find(s => s.pairingTopic === r.topic);
                        n && this.onSessionProposeRequest(r.topic, (0, ce.formatJsonRpcRequest)("wc_sessionPropose", {
                            requiredNamespaces: n.requiredNamespaces,
                            optionalNamespaces: n.optionalNamespaces,
                            relays: n.relays,
                            proposer: n.proposer,
                            sessionProperties: n.sessionProperties
                        }, n.id))
                    }, this.isValidConnect = function() {
                        var r = (0, u.Z)(function*(n) {
                            if (!(0, v.EJ)(n)) {
                                const {
                                    message: E
                                } = (0, v.Z7)("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(n)}`);
                                throw new Error(E)
                            }
                            const {
                                pairingTopic: s,
                                requiredNamespaces: a,
                                optionalNamespaces: h,
                                sessionProperties: b,
                                relays: y
                            } = n;
                            if ((0, v.o8)(s) || (yield t.isValidPairingTopic(s)), !(0, v.PM)(y, !0)) {
                                const {
                                    message: E
                                } = (0, v.Z7)("MISSING_OR_INVALID", `connect() relays: ${y}`);
                                throw new Error(E)
                            }!(0, v.o8)(a) && 0 !== (0, v.L5)(a) && t.validateNamespaces(a, "requiredNamespaces"), !(0, v.o8)(h) && 0 !== (0, v.L5)(h) && t.validateNamespaces(h, "optionalNamespaces"), (0, v.o8)(b) || t.validateSessionProps(b, "sessionProperties")
                        });
                        return function(n) {
                            return r.apply(this, arguments)
                        }
                    }(), this.validateNamespaces = (r, n) => {
                        const s = (0, v.n)(r, "connect()", n);
                        if (s) throw new Error(s.message)
                    }, this.isValidApprove = function() {
                        var r = (0, u.Z)(function*(n) {
                            if (!(0, v.EJ)(n)) throw new Error((0, v.Z7)("MISSING_OR_INVALID", `approve() params: ${n}`).message);
                            const {
                                id: s,
                                namespaces: a,
                                relayProtocol: h,
                                sessionProperties: b
                            } = n;
                            yield t.isValidProposalId(s);
                            const y = t.client.proposal.get(s),
                                E = (0, v.in)(a, "approve()");
                            if (E) throw new Error(E.message);
                            const C = (0, v.rF)(y.requiredNamespaces, a, "approve()");
                            if (C) throw new Error(C.message);
                            if (!(0, v.M_)(h, !0)) {
                                const {
                                    message: j
                                } = (0, v.Z7)("MISSING_OR_INVALID", `approve() relayProtocol: ${h}`);
                                throw new Error(j)
                            }(0, v.o8)(b) || t.validateSessionProps(b, "sessionProperties")
                        });
                        return function(n) {
                            return r.apply(this, arguments)
                        }
                    }(), this.isValidReject = function() {
                        var r = (0, u.Z)(function*(n) {
                            if (!(0, v.EJ)(n)) {
                                const {
                                    message: h
                                } = (0, v.Z7)("MISSING_OR_INVALID", `reject() params: ${n}`);
                                throw new Error(h)
                            }
                            const {
                                id: s,
                                reason: a
                            } = n;
                            if (yield t.isValidProposalId(s), !(0, v.$t)(a)) {
                                const {
                                    message: h
                                } = (0, v.Z7)("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(a)}`);
                                throw new Error(h)
                            }
                        });
                        return function(n) {
                            return r.apply(this, arguments)
                        }
                    }(), this.isValidSessionSettleRequest = r => {
                        if (!(0, v.EJ)(r)) {
                            const {
                                message: E
                            } = (0, v.Z7)("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${r}`);
                            throw new Error(E)
                        }
                        const {
                            relay: n,
                            controller: s,
                            namespaces: a,
                            expiry: h
                        } = r;
                        if (!(0, v.Z2)(n)) {
                            const {
                                message: E
                            } = (0, v.Z7)("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
                            throw new Error(E)
                        }
                        const b = (0, v.Dd)(s, "onSessionSettleRequest()");
                        if (b) throw new Error(b.message);
                        const y = (0, v.in)(a, "onSessionSettleRequest()");
                        if (y) throw new Error(y.message);
                        if ((0, v.Bw)(h)) {
                            const {
                                message: E
                            } = (0, v.Z7)("EXPIRED", "onSessionSettleRequest()");
                            throw new Error(E)
                        }
                    }, this.isValidUpdate = function() {
                        var r = (0, u.Z)(function*(n) {
                            if (!(0, v.EJ)(n)) {
                                const {
                                    message: E
                                } = (0, v.Z7)("MISSING_OR_INVALID", `update() params: ${n}`);
                                throw new Error(E)
                            }
                            const {
                                topic: s,
                                namespaces: a
                            } = n;
                            yield t.isValidSessionTopic(s);
                            const h = t.client.session.get(s),
                                b = (0, v.in)(a, "update()");
                            if (b) throw new Error(b.message);
                            const y = (0, v.rF)(h.requiredNamespaces, a, "update()");
                            if (y) throw new Error(y.message)
                        });
                        return function(n) {
                            return r.apply(this, arguments)
                        }
                    }(), this.isValidExtend = function() {
                        var r = (0, u.Z)(function*(n) {
                            if (!(0, v.EJ)(n)) {
                                const {
                                    message: a
                                } = (0, v.Z7)("MISSING_OR_INVALID", `extend() params: ${n}`);
                                throw new Error(a)
                            }
                            const {
                                topic: s
                            } = n;
                            yield t.isValidSessionTopic(s)
                        });
                        return function(n) {
                            return r.apply(this, arguments)
                        }
                    }(), this.isValidRequest = function() {
                        var r = (0, u.Z)(function*(n) {
                            if (!(0, v.EJ)(n)) {
                                const {
                                    message: E
                                } = (0, v.Z7)("MISSING_OR_INVALID", `request() params: ${n}`);
                                throw new Error(E)
                            }
                            const {
                                topic: s,
                                request: a,
                                chainId: h,
                                expiry: b
                            } = n;
                            yield t.isValidSessionTopic(s);
                            const {
                                namespaces: y
                            } = t.client.session.get(s);
                            if (!(0, v.p8)(y, h)) {
                                const {
                                    message: E
                                } = (0, v.Z7)("MISSING_OR_INVALID", `request() chainId: ${h}`);
                                throw new Error(E)
                            }
                            if (!(0, v.hH)(a)) {
                                const {
                                    message: E
                                } = (0, v.Z7)("MISSING_OR_INVALID", `request() ${JSON.stringify(a)}`);
                                throw new Error(E)
                            }
                            if (!(0, v.al)(y, h, a.method)) {
                                const {
                                    message: E
                                } = (0, v.Z7)("MISSING_OR_INVALID", `request() method: ${a.method}`);
                                throw new Error(E)
                            }
                            if (b && !(0, v.ON)(b, ir)) {
                                const {
                                    message: E
                                } = (0, v.Z7)("MISSING_OR_INVALID", `request() expiry: ${b}. Expiry must be a number (in seconds) between ${ir.min} and ${ir.max}`);
                                throw new Error(E)
                            }
                        });
                        return function(n) {
                            return r.apply(this, arguments)
                        }
                    }(), this.isValidRespond = function() {
                        var r = (0, u.Z)(function*(n) {
                            var s;
                            if (!(0, v.EJ)(n)) {
                                const {
                                    message: b
                                } = (0, v.Z7)("MISSING_OR_INVALID", `respond() params: ${n}`);
                                throw new Error(b)
                            }
                            const {
                                topic: a,
                                response: h
                            } = n;
                            try {
                                yield t.isValidSessionTopic(a)
                            } catch (b) {
                                throw null != (s = n ? .response) && s.id && t.cleanupAfterResponse(n), b
                            }
                            if (!(0, v.JT)(h)) {
                                const {
                                    message: b
                                } = (0, v.Z7)("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(h)}`);
                                throw new Error(b)
                            }
                        });
                        return function(n) {
                            return r.apply(this, arguments)
                        }
                    }(), this.isValidPing = function() {
                        var r = (0, u.Z)(function*(n) {
                            if (!(0, v.EJ)(n)) {
                                const {
                                    message: a
                                } = (0, v.Z7)("MISSING_OR_INVALID", `ping() params: ${n}`);
                                throw new Error(a)
                            }
                            const {
                                topic: s
                            } = n;
                            yield t.isValidSessionOrPairingTopic(s)
                        });
                        return function(n) {
                            return r.apply(this, arguments)
                        }
                    }(), this.isValidEmit = function() {
                        var r = (0, u.Z)(function*(n) {
                            if (!(0, v.EJ)(n)) {
                                const {
                                    message: y
                                } = (0, v.Z7)("MISSING_OR_INVALID", `emit() params: ${n}`);
                                throw new Error(y)
                            }
                            const {
                                topic: s,
                                event: a,
                                chainId: h
                            } = n;
                            yield t.isValidSessionTopic(s);
                            const {
                                namespaces: b
                            } = t.client.session.get(s);
                            if (!(0, v.p8)(b, h)) {
                                const {
                                    message: y
                                } = (0, v.Z7)("MISSING_OR_INVALID", `emit() chainId: ${h}`);
                                throw new Error(y)
                            }
                            if (!(0, v.nf)(a)) {
                                const {
                                    message: y
                                } = (0, v.Z7)("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(a)}`);
                                throw new Error(y)
                            }
                            if (!(0, v.sI)(b, h, a.name)) {
                                const {
                                    message: y
                                } = (0, v.Z7)("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(a)}`);
                                throw new Error(y)
                            }
                        });
                        return function(n) {
                            return r.apply(this, arguments)
                        }
                    }(), this.isValidDisconnect = function() {
                        var r = (0, u.Z)(function*(n) {
                            if (!(0, v.EJ)(n)) {
                                const {
                                    message: a
                                } = (0, v.Z7)("MISSING_OR_INVALID", `disconnect() params: ${n}`);
                                throw new Error(a)
                            }
                            const {
                                topic: s
                            } = n;
                            yield t.isValidSessionOrPairingTopic(s)
                        });
                        return function(n) {
                            return r.apply(this, arguments)
                        }
                    }(), this.getVerifyContext = function() {
                        var r = (0, u.Z)(function*(n, s) {
                            const a = {
                                verified: {
                                    verifyUrl: s.verifyUrl || Tt,
                                    validation: "UNKNOWN",
                                    origin: s.url || ""
                                }
                            };
                            try {
                                const h = yield t.client.core.verify.resolve({
                                    attestationId: n,
                                    verifyUrl: s.verifyUrl
                                });
                                h && (a.verified.origin = h.origin, a.verified.isScam = h.isScam, a.verified.validation = h.origin === new URL(s.url).origin ? "VALID" : "INVALID")
                            } catch (h) {
                                t.client.logger.info(h)
                            }
                            return t.client.logger.info(`Verify context: ${JSON.stringify(a)}`), a
                        });
                        return function(n, s) {
                            return r.apply(this, arguments)
                        }
                    }(), this.validateSessionProps = (r, n) => {
                        Object.values(r).forEach(s => {
                            if (!(0, v.M_)(s, !1)) {
                                const {
                                    message: a
                                } = (0, v.Z7)("MISSING_OR_INVALID", `${n} must be in Record<string, string> format. Received: ${JSON.stringify(s)}`);
                                throw new Error(a)
                            }
                        })
                    }
                }
                isInitialized() {
                    var e = this;
                    return (0, u.Z)(function*() {
                        if (!e.initialized) {
                            const {
                                message: t
                            } = (0, v.Z7)("NOT_INITIALIZED", e.name);
                            throw new Error(t)
                        }
                        yield e.client.core.relayer.confirmOnlineStateOrThrow()
                    })()
                }
                registerRelayerEvents() {
                    var e = this;
                    this.client.core.relayer.on("relayer_message", function() {
                        var t = (0, u.Z)(function*(r) {
                            const {
                                topic: n,
                                message: s
                            } = r;
                            if (e.ignoredPayloadTypes.includes(e.client.core.crypto.getPayloadType(s))) return;
                            const a = yield e.client.core.crypto.decode(n, s);
                            try {
                                (0, ce.isJsonRpcRequest)(a) ? (e.client.core.history.set(n, a), e.onRelayEventRequest({
                                    topic: n,
                                    payload: a
                                })) : (0, ce.isJsonRpcResponse)(a) ? (yield e.client.core.history.resolve(a), yield e.onRelayEventResponse({
                                    topic: n,
                                    payload: a
                                }), e.client.core.history.delete(n, a.id)) : e.onRelayEventUnknownPayload({
                                    topic: n,
                                    payload: a
                                })
                            } catch (h) {
                                e.client.logger.error(h)
                            }
                        });
                        return function(r) {
                            return t.apply(this, arguments)
                        }
                    }())
                }
                registerExpirerEvents() {
                    var e = this;
                    this.client.core.expirer.on(pt_expired, function() {
                        var t = (0, u.Z)(function*(r) {
                            const {
                                topic: n,
                                id: s
                            } = (0, v.iP)(r.target);
                            if (s && e.client.pendingRequest.keys.includes(s)) return yield e.deletePendingSessionRequest(s, (0, v.Z7)("EXPIRED"), !0);
                            n ? e.client.session.keys.includes(n) && (yield e.deleteSession(n, !0), e.client.events.emit("session_expire", {
                                topic: n
                            })) : s && (yield e.deleteProposal(s, !0), e.client.events.emit("proposal_expire", {
                                id: s
                            }))
                        });
                        return function(r) {
                            return t.apply(this, arguments)
                        }
                    }())
                }
                registerPairingEvents() {
                    this.client.core.pairing.events.on("pairing_create", e => this.onPairingCreated(e))
                }
                isValidPairingTopic(e) {
                    if (!(0, v.M_)(e, !1)) {
                        const {
                            message: t
                        } = (0, v.Z7)("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
                        throw new Error(t)
                    }
                    if (!this.client.core.pairing.pairings.keys.includes(e)) {
                        const {
                            message: t
                        } = (0, v.Z7)("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
                        throw new Error(t)
                    }
                    if ((0, v.Bw)(this.client.core.pairing.pairings.get(e).expiry)) {
                        const {
                            message: t
                        } = (0, v.Z7)("EXPIRED", `pairing topic: ${e}`);
                        throw new Error(t)
                    }
                }
                isValidSessionTopic(e) {
                    var t = this;
                    return (0, u.Z)(function*() {
                        if (!(0, v.M_)(e, !1)) {
                            const {
                                message: r
                            } = (0, v.Z7)("MISSING_OR_INVALID", `session topic should be a string: ${e}`);
                            throw new Error(r)
                        }
                        if (!t.client.session.keys.includes(e)) {
                            const {
                                message: r
                            } = (0, v.Z7)("NO_MATCHING_KEY", `session topic doesn't exist: ${e}`);
                            throw new Error(r)
                        }
                        if ((0, v.Bw)(t.client.session.get(e).expiry)) {
                            yield t.deleteSession(e);
                            const {
                                message: r
                            } = (0, v.Z7)("EXPIRED", `session topic: ${e}`);
                            throw new Error(r)
                        }
                    })()
                }
                isValidSessionOrPairingTopic(e) {
                    var t = this;
                    return (0, u.Z)(function*() {
                        if (t.client.session.keys.includes(e)) yield t.isValidSessionTopic(e);
                        else {
                            if (!t.client.core.pairing.pairings.keys.includes(e)) {
                                if ((0, v.M_)(e, !1)) {
                                    const {
                                        message: r
                                    } = (0, v.Z7)("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${e}`);
                                    throw new Error(r)
                                } {
                                    const {
                                        message: r
                                    } = (0, v.Z7)("MISSING_OR_INVALID", `session or pairing topic should be a string: ${e}`);
                                    throw new Error(r)
                                }
                            }
                            t.isValidPairingTopic(e)
                        }
                    })()
                }
                isValidProposalId(e) {
                    var t = this;
                    return (0, u.Z)(function*() {
                        if (!(0, v.Q0)(e)) {
                            const {
                                message: r
                            } = (0, v.Z7)("MISSING_OR_INVALID", `proposal id should be a number: ${e}`);
                            throw new Error(r)
                        }
                        if (!t.client.proposal.keys.includes(e)) {
                            const {
                                message: r
                            } = (0, v.Z7)("NO_MATCHING_KEY", `proposal id doesn't exist: ${e}`);
                            throw new Error(r)
                        }
                        if ((0, v.Bw)(t.client.proposal.get(e).expiry)) {
                            yield t.deleteProposal(e);
                            const {
                                message: r
                            } = (0, v.Z7)("EXPIRED", `proposal id: ${e}`);
                            throw new Error(r)
                        }
                    })()
                }
            }
            class oo extends jt {
                constructor(e, t) {
                    super(e, t, "proposal", rr), this.core = e, this.logger = t
                }
            }
            class ao extends jt {
                constructor(e, t) {
                    super(e, t, "session", rr), this.core = e, this.logger = t
                }
            }
            class co extends jt {
                constructor(e, t) {
                    super(e, t, "request", rr, r => r.id), this.core = e, this.logger = t
                }
            }
            class sr extends Je {
                constructor(e) {
                    var t;
                    super(e), t = this, this.protocol = "wc", this.version = 2, this.name = "client", this.events = new H.EventEmitter, this.on = (n, s) => this.events.on(n, s), this.once = (n, s) => this.events.once(n, s), this.off = (n, s) => this.events.off(n, s), this.removeListener = (n, s) => this.events.removeListener(n, s), this.removeAllListeners = n => this.events.removeAllListeners(n), this.connect = function() {
                        var n = (0, u.Z)(function*(s) {
                            try {
                                return yield t.engine.connect(s)
                            } catch (a) {
                                throw t.logger.error(a.message), a
                            }
                        });
                        return function(s) {
                            return n.apply(this, arguments)
                        }
                    }(), this.pair = function() {
                        var n = (0, u.Z)(function*(s) {
                            try {
                                return yield t.engine.pair(s)
                            } catch (a) {
                                throw t.logger.error(a.message), a
                            }
                        });
                        return function(s) {
                            return n.apply(this, arguments)
                        }
                    }(), this.approve = function() {
                        var n = (0, u.Z)(function*(s) {
                            try {
                                return yield t.engine.approve(s)
                            } catch (a) {
                                throw t.logger.error(a.message), a
                            }
                        });
                        return function(s) {
                            return n.apply(this, arguments)
                        }
                    }(), this.reject = function() {
                        var n = (0, u.Z)(function*(s) {
                            try {
                                return yield t.engine.reject(s)
                            } catch (a) {
                                throw t.logger.error(a.message), a
                            }
                        });
                        return function(s) {
                            return n.apply(this, arguments)
                        }
                    }(), this.update = function() {
                        var n = (0, u.Z)(function*(s) {
                            try {
                                return yield t.engine.update(s)
                            } catch (a) {
                                throw t.logger.error(a.message), a
                            }
                        });
                        return function(s) {
                            return n.apply(this, arguments)
                        }
                    }(), this.extend = function() {
                        var n = (0, u.Z)(function*(s) {
                            try {
                                return yield t.engine.extend(s)
                            } catch (a) {
                                throw t.logger.error(a.message), a
                            }
                        });
                        return function(s) {
                            return n.apply(this, arguments)
                        }
                    }(), this.request = function() {
                        var n = (0, u.Z)(function*(s) {
                            try {
                                return yield t.engine.request(s)
                            } catch (a) {
                                throw t.logger.error(a.message), a
                            }
                        });
                        return function(s) {
                            return n.apply(this, arguments)
                        }
                    }(), this.respond = function() {
                        var n = (0, u.Z)(function*(s) {
                            try {
                                return yield t.engine.respond(s)
                            } catch (a) {
                                throw t.logger.error(a.message), a
                            }
                        });
                        return function(s) {
                            return n.apply(this, arguments)
                        }
                    }(), this.ping = function() {
                        var n = (0, u.Z)(function*(s) {
                            try {
                                return yield t.engine.ping(s)
                            } catch (a) {
                                throw t.logger.error(a.message), a
                            }
                        });
                        return function(s) {
                            return n.apply(this, arguments)
                        }
                    }(), this.emit = function() {
                        var n = (0, u.Z)(function*(s) {
                            try {
                                return yield t.engine.emit(s)
                            } catch (a) {
                                throw t.logger.error(a.message), a
                            }
                        });
                        return function(s) {
                            return n.apply(this, arguments)
                        }
                    }(), this.disconnect = function() {
                        var n = (0, u.Z)(function*(s) {
                            try {
                                return yield t.engine.disconnect(s)
                            } catch (a) {
                                throw t.logger.error(a.message), a
                            }
                        });
                        return function(s) {
                            return n.apply(this, arguments)
                        }
                    }(), this.find = n => {
                        try {
                            return this.engine.find(n)
                        } catch (s) {
                            throw this.logger.error(s.message), s
                        }
                    }, this.getPendingSessionRequests = () => {
                        try {
                            return this.engine.getPendingSessionRequests()
                        } catch (n) {
                            throw this.logger.error(n.message), n
                        }
                    }, this.name = e ? .name || "client", this.metadata = e ? .metadata || (0, v.D)();
                    const r = typeof e ? .logger < "u" && "string" != typeof e ? .logger ? e.logger : (0, ie.pino)((0, ie.getDefaultLoggerOptions)({
                        level: e ? .logger || "error"
                    }));
                    this.core = e ? .core || new Gs(e), this.logger = (0, ie.generateChildLogger)(r, this.name), this.session = new ao(this.core, this.logger), this.proposal = new oo(this.core, this.logger), this.pendingRequest = new co(this.core, this.logger), this.engine = new so(this)
                }
                static init(e) {
                    return (0, u.Z)(function*() {
                        const t = new sr(e);
                        return yield t.initialize(), t
                    })()
                }
                get context() {
                    return (0, ie.getLoggerContext)(this.logger)
                }
                get pairing() {
                    return this.core.pairing.pairings
                }
                initialize() {
                    var e = this;
                    return (0, u.Z)(function*() {
                        e.logger.trace("Initialized");
                        try {
                            yield e.core.start(), yield e.session.init(), yield e.proposal.init(), yield e.pendingRequest.init(), yield e.engine.init(), e.core.verify.init({
                                verifyUrl: e.metadata.verifyUrl
                            }), e.logger.info("SignClient Initialization Success")
                        } catch (t) {
                            throw e.logger.info("SignClient Initialization Failure"), e.logger.error(t.message), t
                        }
                    })()
                }
            }
        },
        9557: (ue, P, w) => {
            ue.exports = self.fetch || (self.fetch = w(28456).default || w(28456))
        },
        70514: ue => {
            "use strict";

            function P(u) {
                try {
                    return JSON.stringify(u)
                } catch {
                    return '"[Circular]"'
                }
            }
            ue.exports = function w(u, H, K) {
                var re = K && K.stringify || P;
                if ("object" == typeof u && null !== u) {
                    var k = H.length + 1;
                    if (1 === k) return u;
                    var q = new Array(k);
                    q[0] = re(u);
                    for (var O = 1; O < k; O++) q[O] = re(H[O]);
                    return q.join(" ")
                }
                if ("string" != typeof u) return u;
                var R = H.length;
                if (0 === R) return u;
                for (var L = "", ee = 0, G = -1, le = u && u.length || 0, $ = 0; $ < le;) {
                    if (37 === u.charCodeAt($) && $ + 1 < le) {
                        switch (G = G > -1 ? G : 0, u.charCodeAt($ + 1)) {
                            case 100:
                            case 102:
                                if (ee >= R || null == H[ee]) break;
                                G < $ && (L += u.slice(G, $)), L += Number(H[ee]), G = $ + 2, $++;
                                break;
                            case 105:
                                if (ee >= R || null == H[ee]) break;
                                G < $ && (L += u.slice(G, $)), L += Math.floor(Number(H[ee])), G = $ + 2, $++;
                                break;
                            case 79:
                            case 111:
                            case 106:
                                if (ee >= R || void 0 === H[ee]) break;
                                G < $ && (L += u.slice(G, $));
                                var pe = typeof H[ee];
                                if ("string" === pe) {
                                    L += "'" + H[ee] + "'", G = $ + 2, $++;
                                    break
                                }
                                if ("function" === pe) {
                                    L += H[ee].name || "<anonymous>", G = $ + 2, $++;
                                    break
                                }
                                L += re(H[ee]), G = $ + 2, $++;
                                break;
                            case 115:
                                if (ee >= R) break;
                                G < $ && (L += u.slice(G, $)), L += String(H[ee]), G = $ + 2, $++;
                                break;
                            case 37:
                                G < $ && (L += u.slice(G, $)), L += "%", G = $ + 2, $++, ee--
                        }++ee
                    }++$
                }
                return -1 === G ? u : (G < le && (L += u.slice(G)), L)
            }
        },
        28456: (ue, P, w) => {
            "use strict";

            function u(H, K) {
                return K = K || {}, new Promise(function(re, A) {
                    var k = new XMLHttpRequest,
                        q = [],
                        O = [],
                        R = {},
                        L = function() {
                            return {
                                ok: 2 == (k.status / 100 | 0),
                                statusText: k.statusText,
                                status: k.status,
                                url: k.responseURL,
                                text: function() {
                                    return Promise.resolve(k.responseText)
                                },
                                json: function() {
                                    return Promise.resolve(k.responseText).then(JSON.parse)
                                },
                                blob: function() {
                                    return Promise.resolve(new Blob([k.response]))
                                },
                                clone: L,
                                headers: {
                                    keys: function() {
                                        return q
                                    },
                                    entries: function() {
                                        return O
                                    },
                                    get: function(G) {
                                        return R[G.toLowerCase()]
                                    },
                                    has: function(G) {
                                        return G.toLowerCase() in R
                                    }
                                }
                            }
                        };
                    for (var ee in k.open(K.method || "get", H, !0), k.onload = function() {
                            k.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function(G, le, $) {
                                q.push(le = le.toLowerCase()), O.push([le, $]), R[le] = R[le] ? R[le] + "," + $ : $
                            }), re(L())
                        }, k.onerror = A, k.withCredentials = "include" == K.credentials, K.headers) k.setRequestHeader(ee, K.headers[ee]);
                    k.send(K.body || null)
                })
            }
            w.r(P), w.d(P, {
                default: () => u
            })
        },
        3569: ue => {
            "use strict";
            ue.exports = function() {
                throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
            }
        },
        34308: (ue, P, w) => {
            "use strict";
            w.r(P), w.d(P, {
                __assign: () => K,
                __asyncDelegator: () => _e,
                __asyncGenerator: () => ve,
                __asyncValues: () => Te,
                __await: () => he,
                __awaiter: () => O,
                __classPrivateFieldGet: () => M,
                __classPrivateFieldSet: () => B,
                __createBinding: () => L,
                __decorate: () => A,
                __exportStar: () => ee,
                __extends: () => H,
                __generator: () => R,
                __importDefault: () => oe,
                __importStar: () => it,
                __makeTemplateObject: () => Ce,
                __metadata: () => q,
                __param: () => k,
                __read: () => le,
                __rest: () => re,
                __spread: () => $,
                __spreadArrays: () => pe,
                __values: () => G
            });
            var u = function(f, g) {
                return (u = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(p, _) {
                        p.__proto__ = _
                    } || function(p, _) {
                        for (var I in _) _.hasOwnProperty(I) && (p[I] = _[I])
                    })(f, g)
            };

            function H(f, g) {
                function p() {
                    this.constructor = f
                }
                u(f, g), f.prototype = null === g ? Object.create(g) : (p.prototype = g.prototype, new p)
            }
            var K = function() {
                return K = Object.assign || function(g) {
                    for (var p, _ = 1, I = arguments.length; _ < I; _++)
                        for (var d in p = arguments[_]) Object.prototype.hasOwnProperty.call(p, d) && (g[d] = p[d]);
                    return g
                }, K.apply(this, arguments)
            };

            function re(f, g) {
                var p = {};
                for (var _ in f) Object.prototype.hasOwnProperty.call(f, _) && g.indexOf(_) < 0 && (p[_] = f[_]);
                if (null != f && "function" == typeof Object.getOwnPropertySymbols) {
                    var I = 0;
                    for (_ = Object.getOwnPropertySymbols(f); I < _.length; I++) g.indexOf(_[I]) < 0 && Object.prototype.propertyIsEnumerable.call(f, _[I]) && (p[_[I]] = f[_[I]])
                }
                return p
            }

            function A(f, g, p, _) {
                var m, I = arguments.length,
                    d = I < 3 ? g : null === _ ? _ = Object.getOwnPropertyDescriptor(g, p) : _;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) d = Reflect.decorate(f, g, p, _);
                else
                    for (var z = f.length - 1; z >= 0; z--)(m = f[z]) && (d = (I < 3 ? m(d) : I > 3 ? m(g, p, d) : m(g, p)) || d);
                return I > 3 && d && Object.defineProperty(g, p, d), d
            }

            function k(f, g) {
                return function(p, _) {
                    g(p, _, f)
                }
            }

            function q(f, g) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(f, g)
            }

            function O(f, g, p, _) {
                return new(p || (p = Promise))(function(d, m) {
                    function z(Z) {
                        try {
                            S(_.next(Z))
                        } catch (V) {
                            m(V)
                        }
                    }

                    function te(Z) {
                        try {
                            S(_.throw(Z))
                        } catch (V) {
                            m(V)
                        }
                    }

                    function S(Z) {
                        Z.done ? d(Z.value) : function I(d) {
                            return d instanceof p ? d : new p(function(m) {
                                m(d)
                            })
                        }(Z.value).then(z, te)
                    }
                    S((_ = _.apply(f, g || [])).next())
                })
            }

            function R(f, g) {
                var _, I, d, m, p = {
                    label: 0,
                    sent: function() {
                        if (1 & d[0]) throw d[1];
                        return d[1]
                    },
                    trys: [],
                    ops: []
                };
                return m = {
                    next: z(0),
                    throw: z(1),
                    return: z(2)
                }, "function" == typeof Symbol && (m[Symbol.iterator] = function() {
                    return this
                }), m;

                function z(S) {
                    return function(Z) {
                        return function te(S) {
                            if (_) throw new TypeError("Generator is already executing.");
                            for (; p;) try {
                                if (_ = 1, I && (d = 2 & S[0] ? I.return : S[0] ? I.throw || ((d = I.return) && d.call(I), 0) : I.next) && !(d = d.call(I, S[1])).done) return d;
                                switch (I = 0, d && (S = [2 & S[0], d.value]), S[0]) {
                                    case 0:
                                    case 1:
                                        d = S;
                                        break;
                                    case 4:
                                        return p.label++, {
                                            value: S[1],
                                            done: !1
                                        };
                                    case 5:
                                        p.label++, I = S[1], S = [0];
                                        continue;
                                    case 7:
                                        S = p.ops.pop(), p.trys.pop();
                                        continue;
                                    default:
                                        if (!(d = (d = p.trys).length > 0 && d[d.length - 1]) && (6 === S[0] || 2 === S[0])) {
                                            p = 0;
                                            continue
                                        }
                                        if (3 === S[0] && (!d || S[1] > d[0] && S[1] < d[3])) {
                                            p.label = S[1];
                                            break
                                        }
                                        if (6 === S[0] && p.label < d[1]) {
                                            p.label = d[1], d = S;
                                            break
                                        }
                                        if (d && p.label < d[2]) {
                                            p.label = d[2], p.ops.push(S);
                                            break
                                        }
                                        d[2] && p.ops.pop(), p.trys.pop();
                                        continue
                                }
                                S = g.call(f, p)
                            } catch (Z) {
                                S = [6, Z], I = 0
                            } finally {
                                _ = d = 0
                            }
                            if (5 & S[0]) throw S[1];
                            return {
                                value: S[0] ? S[1] : void 0,
                                done: !0
                            }
                        }([S, Z])
                    }
                }
            }

            function L(f, g, p, _) {
                void 0 === _ && (_ = p), f[_] = g[p]
            }

            function ee(f, g) {
                for (var p in f) "default" !== p && !g.hasOwnProperty(p) && (g[p] = f[p])
            }

            function G(f) {
                var g = "function" == typeof Symbol && Symbol.iterator,
                    p = g && f[g],
                    _ = 0;
                if (p) return p.call(f);
                if (f && "number" == typeof f.length) return {
                    next: function() {
                        return f && _ >= f.length && (f = void 0), {
                            value: f && f[_++],
                            done: !f
                        }
                    }
                };
                throw new TypeError(g ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function le(f, g) {
                var p = "function" == typeof Symbol && f[Symbol.iterator];
                if (!p) return f;
                var I, m, _ = p.call(f),
                    d = [];
                try {
                    for (;
                        (void 0 === g || g-- > 0) && !(I = _.next()).done;) d.push(I.value)
                } catch (z) {
                    m = {
                        error: z
                    }
                } finally {
                    try {
                        I && !I.done && (p = _.return) && p.call(_)
                    } finally {
                        if (m) throw m.error
                    }
                }
                return d
            }

            function $() {
                for (var f = [], g = 0; g < arguments.length; g++) f = f.concat(le(arguments[g]));
                return f
            }

            function pe() {
                for (var f = 0, g = 0, p = arguments.length; g < p; g++) f += arguments[g].length;
                var _ = Array(f),
                    I = 0;
                for (g = 0; g < p; g++)
                    for (var d = arguments[g], m = 0, z = d.length; m < z; m++, I++) _[I] = d[m];
                return _
            }

            function he(f) {
                return this instanceof he ? (this.v = f, this) : new he(f)
            }

            function ve(f, g, p) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var I, _ = p.apply(f, g || []),
                    d = [];
                return I = {}, m("next"), m("throw"), m("return"), I[Symbol.asyncIterator] = function() {
                    return this
                }, I;

                function m(N) {
                    _[N] && (I[N] = function(ne) {
                        return new Promise(function(de, ye) {
                            d.push([N, ne, de, ye]) > 1 || z(N, ne)
                        })
                    })
                }

                function z(N, ne) {
                    try {
                        ! function te(N) {
                            N.value instanceof he ? Promise.resolve(N.value.v).then(S, Z) : V(d[0][2], N)
                        }(_[N](ne))
                    } catch (de) {
                        V(d[0][3], de)
                    }
                }

                function S(N) {
                    z("next", N)
                }

                function Z(N) {
                    z("throw", N)
                }

                function V(N, ne) {
                    N(ne), d.shift(), d.length && z(d[0][0], d[0][1])
                }
            }

            function _e(f) {
                var g, p;
                return g = {}, _("next"), _("throw", function(I) {
                    throw I
                }), _("return"), g[Symbol.iterator] = function() {
                    return this
                }, g;

                function _(I, d) {
                    g[I] = f[I] ? function(m) {
                        return (p = !p) ? {
                            value: he(f[I](m)),
                            done: "return" === I
                        } : d ? d(m) : m
                    } : d
                }
            }

            function Te(f) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var p, g = f[Symbol.asyncIterator];
                return g ? g.call(f) : (f = G(f), p = {}, _("next"), _("throw"), _("return"), p[Symbol.asyncIterator] = function() {
                    return this
                }, p);

                function _(d) {
                    p[d] = f[d] && function(m) {
                        return new Promise(function(z, te) {
                            ! function I(d, m, z, te) {
                                Promise.resolve(te).then(function(S) {
                                    d({
                                        value: S,
                                        done: z
                                    })
                                }, m)
                            }(z, te, (m = f[d](m)).done, m.value)
                        })
                    }
                }
            }

            function Ce(f, g) {
                return Object.defineProperty ? Object.defineProperty(f, "raw", {
                    value: g
                }) : f.raw = g, f
            }

            function it(f) {
                if (f && f.__esModule) return f;
                var g = {};
                if (null != f)
                    for (var p in f) Object.hasOwnProperty.call(f, p) && (g[p] = f[p]);
                return g.default = f, g
            }

            function oe(f) {
                return f && f.__esModule ? f : {
                    default: f
                }
            }

            function M(f, g) {
                if (!g.has(f)) throw new TypeError("attempted to get private field on non-instance");
                return g.get(f)
            }

            function B(f, g, p) {
                if (!g.has(f)) throw new TypeError("attempted to set private field on non-instance");
                return g.set(f, p), p
            }
        },
        61116: (ue, P, w) => {
            "use strict";
            w.r(P), w.d(P, {
                __assign: () => K,
                __asyncDelegator: () => _e,
                __asyncGenerator: () => ve,
                __asyncValues: () => Te,
                __await: () => he,
                __awaiter: () => O,
                __classPrivateFieldGet: () => M,
                __classPrivateFieldSet: () => B,
                __createBinding: () => L,
                __decorate: () => A,
                __exportStar: () => ee,
                __extends: () => H,
                __generator: () => R,
                __importDefault: () => oe,
                __importStar: () => it,
                __makeTemplateObject: () => Ce,
                __metadata: () => q,
                __param: () => k,
                __read: () => le,
                __rest: () => re,
                __spread: () => $,
                __spreadArrays: () => pe,
                __values: () => G
            });
            var u = function(f, g) {
                return (u = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(p, _) {
                        p.__proto__ = _
                    } || function(p, _) {
                        for (var I in _) _.hasOwnProperty(I) && (p[I] = _[I])
                    })(f, g)
            };

            function H(f, g) {
                function p() {
                    this.constructor = f
                }
                u(f, g), f.prototype = null === g ? Object.create(g) : (p.prototype = g.prototype, new p)
            }
            var K = function() {
                return K = Object.assign || function(g) {
                    for (var p, _ = 1, I = arguments.length; _ < I; _++)
                        for (var d in p = arguments[_]) Object.prototype.hasOwnProperty.call(p, d) && (g[d] = p[d]);
                    return g
                }, K.apply(this, arguments)
            };

            function re(f, g) {
                var p = {};
                for (var _ in f) Object.prototype.hasOwnProperty.call(f, _) && g.indexOf(_) < 0 && (p[_] = f[_]);
                if (null != f && "function" == typeof Object.getOwnPropertySymbols) {
                    var I = 0;
                    for (_ = Object.getOwnPropertySymbols(f); I < _.length; I++) g.indexOf(_[I]) < 0 && Object.prototype.propertyIsEnumerable.call(f, _[I]) && (p[_[I]] = f[_[I]])
                }
                return p
            }

            function A(f, g, p, _) {
                var m, I = arguments.length,
                    d = I < 3 ? g : null === _ ? _ = Object.getOwnPropertyDescriptor(g, p) : _;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) d = Reflect.decorate(f, g, p, _);
                else
                    for (var z = f.length - 1; z >= 0; z--)(m = f[z]) && (d = (I < 3 ? m(d) : I > 3 ? m(g, p, d) : m(g, p)) || d);
                return I > 3 && d && Object.defineProperty(g, p, d), d
            }

            function k(f, g) {
                return function(p, _) {
                    g(p, _, f)
                }
            }

            function q(f, g) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(f, g)
            }

            function O(f, g, p, _) {
                return new(p || (p = Promise))(function(d, m) {
                    function z(Z) {
                        try {
                            S(_.next(Z))
                        } catch (V) {
                            m(V)
                        }
                    }

                    function te(Z) {
                        try {
                            S(_.throw(Z))
                        } catch (V) {
                            m(V)
                        }
                    }

                    function S(Z) {
                        Z.done ? d(Z.value) : function I(d) {
                            return d instanceof p ? d : new p(function(m) {
                                m(d)
                            })
                        }(Z.value).then(z, te)
                    }
                    S((_ = _.apply(f, g || [])).next())
                })
            }

            function R(f, g) {
                var _, I, d, m, p = {
                    label: 0,
                    sent: function() {
                        if (1 & d[0]) throw d[1];
                        return d[1]
                    },
                    trys: [],
                    ops: []
                };
                return m = {
                    next: z(0),
                    throw: z(1),
                    return: z(2)
                }, "function" == typeof Symbol && (m[Symbol.iterator] = function() {
                    return this
                }), m;

                function z(S) {
                    return function(Z) {
                        return function te(S) {
                            if (_) throw new TypeError("Generator is already executing.");
                            for (; p;) try {
                                if (_ = 1, I && (d = 2 & S[0] ? I.return : S[0] ? I.throw || ((d = I.return) && d.call(I), 0) : I.next) && !(d = d.call(I, S[1])).done) return d;
                                switch (I = 0, d && (S = [2 & S[0], d.value]), S[0]) {
                                    case 0:
                                    case 1:
                                        d = S;
                                        break;
                                    case 4:
                                        return p.label++, {
                                            value: S[1],
                                            done: !1
                                        };
                                    case 5:
                                        p.label++, I = S[1], S = [0];
                                        continue;
                                    case 7:
                                        S = p.ops.pop(), p.trys.pop();
                                        continue;
                                    default:
                                        if (!(d = (d = p.trys).length > 0 && d[d.length - 1]) && (6 === S[0] || 2 === S[0])) {
                                            p = 0;
                                            continue
                                        }
                                        if (3 === S[0] && (!d || S[1] > d[0] && S[1] < d[3])) {
                                            p.label = S[1];
                                            break
                                        }
                                        if (6 === S[0] && p.label < d[1]) {
                                            p.label = d[1], d = S;
                                            break
                                        }
                                        if (d && p.label < d[2]) {
                                            p.label = d[2], p.ops.push(S);
                                            break
                                        }
                                        d[2] && p.ops.pop(), p.trys.pop();
                                        continue
                                }
                                S = g.call(f, p)
                            } catch (Z) {
                                S = [6, Z], I = 0
                            } finally {
                                _ = d = 0
                            }
                            if (5 & S[0]) throw S[1];
                            return {
                                value: S[0] ? S[1] : void 0,
                                done: !0
                            }
                        }([S, Z])
                    }
                }
            }

            function L(f, g, p, _) {
                void 0 === _ && (_ = p), f[_] = g[p]
            }

            function ee(f, g) {
                for (var p in f) "default" !== p && !g.hasOwnProperty(p) && (g[p] = f[p])
            }

            function G(f) {
                var g = "function" == typeof Symbol && Symbol.iterator,
                    p = g && f[g],
                    _ = 0;
                if (p) return p.call(f);
                if (f && "number" == typeof f.length) return {
                    next: function() {
                        return f && _ >= f.length && (f = void 0), {
                            value: f && f[_++],
                            done: !f
                        }
                    }
                };
                throw new TypeError(g ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function le(f, g) {
                var p = "function" == typeof Symbol && f[Symbol.iterator];
                if (!p) return f;
                var I, m, _ = p.call(f),
                    d = [];
                try {
                    for (;
                        (void 0 === g || g-- > 0) && !(I = _.next()).done;) d.push(I.value)
                } catch (z) {
                    m = {
                        error: z
                    }
                } finally {
                    try {
                        I && !I.done && (p = _.return) && p.call(_)
                    } finally {
                        if (m) throw m.error
                    }
                }
                return d
            }

            function $() {
                for (var f = [], g = 0; g < arguments.length; g++) f = f.concat(le(arguments[g]));
                return f
            }

            function pe() {
                for (var f = 0, g = 0, p = arguments.length; g < p; g++) f += arguments[g].length;
                var _ = Array(f),
                    I = 0;
                for (g = 0; g < p; g++)
                    for (var d = arguments[g], m = 0, z = d.length; m < z; m++, I++) _[I] = d[m];
                return _
            }

            function he(f) {
                return this instanceof he ? (this.v = f, this) : new he(f)
            }

            function ve(f, g, p) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var I, _ = p.apply(f, g || []),
                    d = [];
                return I = {}, m("next"), m("throw"), m("return"), I[Symbol.asyncIterator] = function() {
                    return this
                }, I;

                function m(N) {
                    _[N] && (I[N] = function(ne) {
                        return new Promise(function(de, ye) {
                            d.push([N, ne, de, ye]) > 1 || z(N, ne)
                        })
                    })
                }

                function z(N, ne) {
                    try {
                        ! function te(N) {
                            N.value instanceof he ? Promise.resolve(N.value.v).then(S, Z) : V(d[0][2], N)
                        }(_[N](ne))
                    } catch (de) {
                        V(d[0][3], de)
                    }
                }

                function S(N) {
                    z("next", N)
                }

                function Z(N) {
                    z("throw", N)
                }

                function V(N, ne) {
                    N(ne), d.shift(), d.length && z(d[0][0], d[0][1])
                }
            }

            function _e(f) {
                var g, p;
                return g = {}, _("next"), _("throw", function(I) {
                    throw I
                }), _("return"), g[Symbol.iterator] = function() {
                    return this
                }, g;

                function _(I, d) {
                    g[I] = f[I] ? function(m) {
                        return (p = !p) ? {
                            value: he(f[I](m)),
                            done: "return" === I
                        } : d ? d(m) : m
                    } : d
                }
            }

            function Te(f) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var p, g = f[Symbol.asyncIterator];
                return g ? g.call(f) : (f = G(f), p = {}, _("next"), _("throw"), _("return"), p[Symbol.asyncIterator] = function() {
                    return this
                }, p);

                function _(d) {
                    p[d] = f[d] && function(m) {
                        return new Promise(function(z, te) {
                            ! function I(d, m, z, te) {
                                Promise.resolve(te).then(function(S) {
                                    d({
                                        value: S,
                                        done: z
                                    })
                                }, m)
                            }(z, te, (m = f[d](m)).done, m.value)
                        })
                    }
                }
            }

            function Ce(f, g) {
                return Object.defineProperty ? Object.defineProperty(f, "raw", {
                    value: g
                }) : f.raw = g, f
            }

            function it(f) {
                if (f && f.__esModule) return f;
                var g = {};
                if (null != f)
                    for (var p in f) Object.hasOwnProperty.call(f, p) && (g[p] = f[p]);
                return g.default = f, g
            }

            function oe(f) {
                return f && f.__esModule ? f : {
                    default: f
                }
            }

            function M(f, g) {
                if (!g.has(f)) throw new TypeError("attempted to get private field on non-instance");
                return g.get(f)
            }

            function B(f, g, p) {
                if (!g.has(f)) throw new TypeError("attempted to set private field on non-instance");
                return g.set(f, p), p
            }
        },
        57121: (ue, P, w) => {
            "use strict";
            w.r(P), w.d(P, {
                __assign: () => K,
                __asyncDelegator: () => _e,
                __asyncGenerator: () => ve,
                __asyncValues: () => Te,
                __await: () => he,
                __awaiter: () => O,
                __classPrivateFieldGet: () => M,
                __classPrivateFieldSet: () => B,
                __createBinding: () => L,
                __decorate: () => A,
                __exportStar: () => ee,
                __extends: () => H,
                __generator: () => R,
                __importDefault: () => oe,
                __importStar: () => it,
                __makeTemplateObject: () => Ce,
                __metadata: () => q,
                __param: () => k,
                __read: () => le,
                __rest: () => re,
                __spread: () => $,
                __spreadArrays: () => pe,
                __values: () => G
            });
            var u = function(f, g) {
                return (u = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(p, _) {
                        p.__proto__ = _
                    } || function(p, _) {
                        for (var I in _) _.hasOwnProperty(I) && (p[I] = _[I])
                    })(f, g)
            };

            function H(f, g) {
                function p() {
                    this.constructor = f
                }
                u(f, g), f.prototype = null === g ? Object.create(g) : (p.prototype = g.prototype, new p)
            }
            var K = function() {
                return K = Object.assign || function(g) {
                    for (var p, _ = 1, I = arguments.length; _ < I; _++)
                        for (var d in p = arguments[_]) Object.prototype.hasOwnProperty.call(p, d) && (g[d] = p[d]);
                    return g
                }, K.apply(this, arguments)
            };

            function re(f, g) {
                var p = {};
                for (var _ in f) Object.prototype.hasOwnProperty.call(f, _) && g.indexOf(_) < 0 && (p[_] = f[_]);
                if (null != f && "function" == typeof Object.getOwnPropertySymbols) {
                    var I = 0;
                    for (_ = Object.getOwnPropertySymbols(f); I < _.length; I++) g.indexOf(_[I]) < 0 && Object.prototype.propertyIsEnumerable.call(f, _[I]) && (p[_[I]] = f[_[I]])
                }
                return p
            }

            function A(f, g, p, _) {
                var m, I = arguments.length,
                    d = I < 3 ? g : null === _ ? _ = Object.getOwnPropertyDescriptor(g, p) : _;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) d = Reflect.decorate(f, g, p, _);
                else
                    for (var z = f.length - 1; z >= 0; z--)(m = f[z]) && (d = (I < 3 ? m(d) : I > 3 ? m(g, p, d) : m(g, p)) || d);
                return I > 3 && d && Object.defineProperty(g, p, d), d
            }

            function k(f, g) {
                return function(p, _) {
                    g(p, _, f)
                }
            }

            function q(f, g) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(f, g)
            }

            function O(f, g, p, _) {
                return new(p || (p = Promise))(function(d, m) {
                    function z(Z) {
                        try {
                            S(_.next(Z))
                        } catch (V) {
                            m(V)
                        }
                    }

                    function te(Z) {
                        try {
                            S(_.throw(Z))
                        } catch (V) {
                            m(V)
                        }
                    }

                    function S(Z) {
                        Z.done ? d(Z.value) : function I(d) {
                            return d instanceof p ? d : new p(function(m) {
                                m(d)
                            })
                        }(Z.value).then(z, te)
                    }
                    S((_ = _.apply(f, g || [])).next())
                })
            }

            function R(f, g) {
                var _, I, d, m, p = {
                    label: 0,
                    sent: function() {
                        if (1 & d[0]) throw d[1];
                        return d[1]
                    },
                    trys: [],
                    ops: []
                };
                return m = {
                    next: z(0),
                    throw: z(1),
                    return: z(2)
                }, "function" == typeof Symbol && (m[Symbol.iterator] = function() {
                    return this
                }), m;

                function z(S) {
                    return function(Z) {
                        return function te(S) {
                            if (_) throw new TypeError("Generator is already executing.");
                            for (; p;) try {
                                if (_ = 1, I && (d = 2 & S[0] ? I.return : S[0] ? I.throw || ((d = I.return) && d.call(I), 0) : I.next) && !(d = d.call(I, S[1])).done) return d;
                                switch (I = 0, d && (S = [2 & S[0], d.value]), S[0]) {
                                    case 0:
                                    case 1:
                                        d = S;
                                        break;
                                    case 4:
                                        return p.label++, {
                                            value: S[1],
                                            done: !1
                                        };
                                    case 5:
                                        p.label++, I = S[1], S = [0];
                                        continue;
                                    case 7:
                                        S = p.ops.pop(), p.trys.pop();
                                        continue;
                                    default:
                                        if (!(d = (d = p.trys).length > 0 && d[d.length - 1]) && (6 === S[0] || 2 === S[0])) {
                                            p = 0;
                                            continue
                                        }
                                        if (3 === S[0] && (!d || S[1] > d[0] && S[1] < d[3])) {
                                            p.label = S[1];
                                            break
                                        }
                                        if (6 === S[0] && p.label < d[1]) {
                                            p.label = d[1], d = S;
                                            break
                                        }
                                        if (d && p.label < d[2]) {
                                            p.label = d[2], p.ops.push(S);
                                            break
                                        }
                                        d[2] && p.ops.pop(), p.trys.pop();
                                        continue
                                }
                                S = g.call(f, p)
                            } catch (Z) {
                                S = [6, Z], I = 0
                            } finally {
                                _ = d = 0
                            }
                            if (5 & S[0]) throw S[1];
                            return {
                                value: S[0] ? S[1] : void 0,
                                done: !0
                            }
                        }([S, Z])
                    }
                }
            }

            function L(f, g, p, _) {
                void 0 === _ && (_ = p), f[_] = g[p]
            }

            function ee(f, g) {
                for (var p in f) "default" !== p && !g.hasOwnProperty(p) && (g[p] = f[p])
            }

            function G(f) {
                var g = "function" == typeof Symbol && Symbol.iterator,
                    p = g && f[g],
                    _ = 0;
                if (p) return p.call(f);
                if (f && "number" == typeof f.length) return {
                    next: function() {
                        return f && _ >= f.length && (f = void 0), {
                            value: f && f[_++],
                            done: !f
                        }
                    }
                };
                throw new TypeError(g ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function le(f, g) {
                var p = "function" == typeof Symbol && f[Symbol.iterator];
                if (!p) return f;
                var I, m, _ = p.call(f),
                    d = [];
                try {
                    for (;
                        (void 0 === g || g-- > 0) && !(I = _.next()).done;) d.push(I.value)
                } catch (z) {
                    m = {
                        error: z
                    }
                } finally {
                    try {
                        I && !I.done && (p = _.return) && p.call(_)
                    } finally {
                        if (m) throw m.error
                    }
                }
                return d
            }

            function $() {
                for (var f = [], g = 0; g < arguments.length; g++) f = f.concat(le(arguments[g]));
                return f
            }

            function pe() {
                for (var f = 0, g = 0, p = arguments.length; g < p; g++) f += arguments[g].length;
                var _ = Array(f),
                    I = 0;
                for (g = 0; g < p; g++)
                    for (var d = arguments[g], m = 0, z = d.length; m < z; m++, I++) _[I] = d[m];
                return _
            }

            function he(f) {
                return this instanceof he ? (this.v = f, this) : new he(f)
            }

            function ve(f, g, p) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var I, _ = p.apply(f, g || []),
                    d = [];
                return I = {}, m("next"), m("throw"), m("return"), I[Symbol.asyncIterator] = function() {
                    return this
                }, I;

                function m(N) {
                    _[N] && (I[N] = function(ne) {
                        return new Promise(function(de, ye) {
                            d.push([N, ne, de, ye]) > 1 || z(N, ne)
                        })
                    })
                }

                function z(N, ne) {
                    try {
                        ! function te(N) {
                            N.value instanceof he ? Promise.resolve(N.value.v).then(S, Z) : V(d[0][2], N)
                        }(_[N](ne))
                    } catch (de) {
                        V(d[0][3], de)
                    }
                }

                function S(N) {
                    z("next", N)
                }

                function Z(N) {
                    z("throw", N)
                }

                function V(N, ne) {
                    N(ne), d.shift(), d.length && z(d[0][0], d[0][1])
                }
            }

            function _e(f) {
                var g, p;
                return g = {}, _("next"), _("throw", function(I) {
                    throw I
                }), _("return"), g[Symbol.iterator] = function() {
                    return this
                }, g;

                function _(I, d) {
                    g[I] = f[I] ? function(m) {
                        return (p = !p) ? {
                            value: he(f[I](m)),
                            done: "return" === I
                        } : d ? d(m) : m
                    } : d
                }
            }

            function Te(f) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var p, g = f[Symbol.asyncIterator];
                return g ? g.call(f) : (f = G(f), p = {}, _("next"), _("throw"), _("return"), p[Symbol.asyncIterator] = function() {
                    return this
                }, p);

                function _(d) {
                    p[d] = f[d] && function(m) {
                        return new Promise(function(z, te) {
                            ! function I(d, m, z, te) {
                                Promise.resolve(te).then(function(S) {
                                    d({
                                        value: S,
                                        done: z
                                    })
                                }, m)
                            }(z, te, (m = f[d](m)).done, m.value)
                        })
                    }
                }
            }

            function Ce(f, g) {
                return Object.defineProperty ? Object.defineProperty(f, "raw", {
                    value: g
                }) : f.raw = g, f
            }

            function it(f) {
                if (f && f.__esModule) return f;
                var g = {};
                if (null != f)
                    for (var p in f) Object.hasOwnProperty.call(f, p) && (g[p] = f[p]);
                return g.default = f, g
            }

            function oe(f) {
                return f && f.__esModule ? f : {
                    default: f
                }
            }

            function M(f, g) {
                if (!g.has(f)) throw new TypeError("attempted to get private field on non-instance");
                return g.get(f)
            }

            function B(f, g, p) {
                if (!g.has(f)) throw new TypeError("attempted to set private field on non-instance");
                return g.set(f, p), p
            }
        },
        71590: (ue, P, w) => {
            "use strict";
            const u = w(70514);
            ue.exports = A;
            const H = function oe() {
                    function M(B) {
                        return typeof B < "u" && B
                    }
                    try {
                        return typeof globalThis < "u" || Object.defineProperty(Object.prototype, "globalThis", {
                            get: function() {
                                return delete Object.prototype.globalThis, this.globalThis = this
                            },
                            configurable: !0
                        }), globalThis
                    } catch {
                        return M(self) || M(window) || M(this) || {}
                    }
                }().console || {},
                K = {
                    mapHttpRequest: pe,
                    mapHttpResponse: pe,
                    wrapRequestSerializer: he,
                    wrapResponseSerializer: he,
                    wrapErrorSerializer: he,
                    req: pe,
                    res: pe,
                    err: function le(M) {
                        const B = {
                            type: M.constructor.name,
                            msg: M.message,
                            stack: M.stack
                        };
                        for (const f in M) void 0 === B[f] && (B[f] = M[f]);
                        return B
                    }
                };

            function A(M) {
                (M = M || {}).browser = M.browser || {};
                const B = M.browser.transmit;
                if (B && "function" != typeof B.send) throw Error("pino: transmit option must have a send function");
                const f = M.browser.write || H;
                M.browser.write && (M.browser.asObject = !0);
                const g = M.serializers || {},
                    p = function re(M, B) {
                        return Array.isArray(M) ? M.filter(function(g) {
                            return "!stdSerializers.err" !== g
                        }) : !0 === M && Object.keys(B)
                    }(M.browser.serialize, g);
                let _ = M.browser.serialize;
                Array.isArray(M.browser.serialize) && M.browser.serialize.indexOf("!stdSerializers.err") > -1 && (_ = !1), "function" == typeof f && (f.error = f.fatal = f.warn = f.info = f.debug = f.trace = f), !1 === M.enabled && (M.level = "silent");
                const d = M.level || "info",
                    m = Object.create(f);
                m.log || (m.log = ve), Object.defineProperty(m, "levelVal", {
                    get: function te() {
                        return "silent" === this.level ? 1 / 0 : this.levels.values[this.level]
                    }
                }), Object.defineProperty(m, "level", {
                    get: function S() {
                        return this._level
                    },
                    set: function Z(N) {
                        if ("silent" !== N && !this.levels.values[N]) throw Error("unknown level " + N);
                        this._level = N, k(z, m, "error", "log"), k(z, m, "fatal", "error"), k(z, m, "warn", "error"), k(z, m, "info", "log"), k(z, m, "debug", "log"), k(z, m, "trace", "log")
                    }
                });
                const z = {
                    transmit: B,
                    serialize: p,
                    asObject: M.browser.asObject,
                    levels: ["error", "fatal", "warn", "info", "debug", "trace"],
                    timestamp: $(M)
                };
                return m.levels = A.levels, m.level = d, m.setMaxListeners = m.getMaxListeners = m.emit = m.addListener = m.on = m.prependListener = m.once = m.prependOnceListener = m.removeListener = m.removeAllListeners = m.listeners = m.listenerCount = m.eventNames = m.write = m.flush = ve, m.serializers = g, m._serialize = p, m._stdErrSerialize = _, m.child = function V(N, ne) {
                    if (!N) throw new Error("missing bindings for child Pino");
                    ne = ne || {}, p && N.serializers && (ne.serializers = N.serializers);
                    const de = ne.serializers;
                    if (p && de) {
                        var ye = Object.assign({}, g, de),
                            _t = !0 === M.browser.serialize ? Object.keys(ye) : p;
                        delete N.serializers, R([N], _t, ye, this._stdErrSerialize)
                    }

                    function It(ut) {
                        this._childLevel = 1 + (0 | ut._childLevel), this.error = L(ut, N, "error"), this.fatal = L(ut, N, "fatal"), this.warn = L(ut, N, "warn"), this.info = L(ut, N, "info"), this.debug = L(ut, N, "debug"), this.trace = L(ut, N, "trace"), ye && (this.serializers = ye, this._serialize = _t), B && (this._logEvent = G([].concat(ut._logEvent.bindings, N)))
                    }
                    return It.prototype = this, new It(this)
                }, B && (m._logEvent = G()), m
            }

            function k(M, B, f, g) {
                const p = Object.getPrototypeOf(B);
                B[f] = B.levelVal > B.levels.values[f] ? ve : p[f] ? p[f] : H[f] || H[g] || ve,
                    function q(M, B, f) {
                        !M.transmit && B[f] === ve || (B[f] = function(g) {
                            return function() {
                                const _ = M.timestamp(),
                                    I = new Array(arguments.length),
                                    d = Object.getPrototypeOf && Object.getPrototypeOf(this) === H ? H : this;
                                for (var m = 0; m < I.length; m++) I[m] = arguments[m];
                                if (M.serialize && !M.asObject && R(I, this._serialize, this.serializers, this._stdErrSerialize), M.asObject ? g.call(d, function O(M, B, f, g) {
                                        M._serialize && R(f, M._serialize, M.serializers, M._stdErrSerialize);
                                        const p = f.slice();
                                        let _ = p[0];
                                        const I = {};
                                        g && (I.time = g), I.level = A.levels.values[B];
                                        let d = 1 + (0 | M._childLevel);
                                        if (d < 1 && (d = 1), null !== _ && "object" == typeof _) {
                                            for (; d-- && "object" == typeof p[0];) Object.assign(I, p.shift());
                                            _ = p.length ? u(p.shift(), p) : void 0
                                        } else "string" == typeof _ && (_ = u(p.shift(), p));
                                        return void 0 !== _ && (I.msg = _), I
                                    }(this, f, I, _)) : g.apply(d, I), M.transmit) {
                                    const z = M.transmit.level || B.level,
                                        S = A.levels.values[f];
                                    if (S < A.levels.values[z]) return;
                                    ! function ee(M, B, f) {
                                        const g = B.send,
                                            p = B.ts,
                                            _ = B.methodLevel,
                                            I = B.methodValue,
                                            d = B.val,
                                            m = M._logEvent.bindings;
                                        R(f, M._serialize || Object.keys(M.serializers), M.serializers, void 0 === M._stdErrSerialize || M._stdErrSerialize), M._logEvent.ts = p, M._logEvent.messages = f.filter(function(z) {
                                            return -1 === m.indexOf(z)
                                        }), M._logEvent.level.label = _, M._logEvent.level.value = I, g(_, M._logEvent, d), M._logEvent = G(m)
                                    }(this, {
                                        ts: _,
                                        methodLevel: f,
                                        methodValue: S,
                                        transmitLevel: z,
                                        transmitValue: A.levels.values[M.transmit.level || B.level],
                                        send: M.transmit.send,
                                        val: B.levelVal
                                    }, I)
                                }
                            }
                        }(B[f]))
                    }(M, B, f)
            }

            function R(M, B, f, g) {
                for (const p in M)
                    if (g && M[p] instanceof Error) M[p] = A.stdSerializers.err(M[p]);
                    else if ("object" == typeof M[p] && !Array.isArray(M[p]))
                    for (const _ in M[p]) B && B.indexOf(_) > -1 && _ in f && (M[p][_] = f[_](M[p][_]))
            }

            function L(M, B, f) {
                return function() {
                    const g = new Array(1 + arguments.length);
                    g[0] = B;
                    for (var p = 1; p < g.length; p++) g[p] = arguments[p - 1];
                    return M[f].apply(this, g)
                }
            }

            function G(M) {
                return {
                    ts: 0,
                    messages: [],
                    bindings: M || [],
                    level: {
                        label: "",
                        value: 0
                    }
                }
            }

            function $(M) {
                return "function" == typeof M.timestamp ? M.timestamp : !1 === M.timestamp ? _e : Te
            }

            function pe() {
                return {}
            }

            function he(M) {
                return M
            }

            function ve() {}

            function _e() {
                return !1
            }

            function Te() {
                return Date.now()
            }
            A.levels = {
                values: {
                    fatal: 60,
                    error: 50,
                    warn: 40,
                    info: 30,
                    debug: 20,
                    trace: 10
                },
                labels: {
                    10: "trace",
                    20: "debug",
                    30: "info",
                    40: "warn",
                    50: "error",
                    60: "fatal"
                }
            }, A.stdSerializers = K, A.stdTimeFunctions = Object.assign({}, {
                nullTime: _e,
                epochTime: Te,
                unixTime: function Ce() {
                    return Math.round(Date.now() / 1e3)
                },
                isoTime: function it() {
                    return new Date(Date.now()).toISOString()
                }
            })
        }
    }
]);
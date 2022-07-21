(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key2 of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key2) && key2 !== except)
          __defProp(to, key2, { get: () => from[key2], enumerable: !(desc = __getOwnPropDesc(from, key2)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));

  // node_modules/@meilisearch/instant-meilisearch/dist/instant-meilisearch.umd.js
  var require_instant_meilisearch_umd = __commonJS({
    "node_modules/@meilisearch/instant-meilisearch/dist/instant-meilisearch.umd.js"(exports, module) {
      (function(global2, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, factory(global2.window = global2.window || {}));
      })(exports, function(exports2) {
        "use strict";
        var __assign = function() {
          __assign = Object.assign || function __assign2(t2) {
            for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
              s2 = arguments[i2];
              for (var p2 in s2)
                if (Object.prototype.hasOwnProperty.call(s2, p2))
                  t2[p2] = s2[p2];
            }
            return t2;
          };
          return __assign.apply(this, arguments);
        };
        function __rest(s2, e2) {
          var t2 = {};
          for (var p2 in s2)
            if (Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0)
              t2[p2] = s2[p2];
          if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++) {
              if (e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]))
                t2[p2[i2]] = s2[p2[i2]];
            }
          return t2;
        }
        function __awaiter(thisArg, _arguments, P2, generator) {
          function adopt(value) {
            return value instanceof P2 ? value : new P2(function(resolve) {
              resolve(value);
            });
          }
          return new (P2 || (P2 = Promise))(function(resolve, reject) {
            function fulfilled(value) {
              try {
                step(generator.next(value));
              } catch (e2) {
                reject(e2);
              }
            }
            function rejected(value) {
              try {
                step(generator["throw"](value));
              } catch (e2) {
                reject(e2);
              }
            }
            function step(result) {
              result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
          });
        }
        function __generator(thisArg, body) {
          var _2 = { label: 0, sent: function() {
            if (t2[0] & 1)
              throw t2[1];
            return t2[1];
          }, trys: [], ops: [] }, f2, y2, t2, g2;
          return g2 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g2[Symbol.iterator] = function() {
            return this;
          }), g2;
          function verb(n2) {
            return function(v2) {
              return step([n2, v2]);
            };
          }
          function step(op) {
            if (f2)
              throw new TypeError("Generator is already executing.");
            while (_2)
              try {
                if (f2 = 1, y2 && (t2 = op[0] & 2 ? y2["return"] : op[0] ? y2["throw"] || ((t2 = y2["return"]) && t2.call(y2), 0) : y2.next) && !(t2 = t2.call(y2, op[1])).done)
                  return t2;
                if (y2 = 0, t2)
                  op = [op[0] & 2, t2.value];
                switch (op[0]) {
                  case 0:
                  case 1:
                    t2 = op;
                    break;
                  case 4:
                    _2.label++;
                    return { value: op[1], done: false };
                  case 5:
                    _2.label++;
                    y2 = op[1];
                    op = [0];
                    continue;
                  case 7:
                    op = _2.ops.pop();
                    _2.trys.pop();
                    continue;
                  default:
                    if (!(t2 = _2.trys, t2 = t2.length > 0 && t2[t2.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                      _2 = 0;
                      continue;
                    }
                    if (op[0] === 3 && (!t2 || op[1] > t2[0] && op[1] < t2[3])) {
                      _2.label = op[1];
                      break;
                    }
                    if (op[0] === 6 && _2.label < t2[1]) {
                      _2.label = t2[1];
                      t2 = op;
                      break;
                    }
                    if (t2 && _2.label < t2[2]) {
                      _2.label = t2[2];
                      _2.ops.push(op);
                      break;
                    }
                    if (t2[2])
                      _2.ops.pop();
                    _2.trys.pop();
                    continue;
                }
                op = body.call(thisArg, _2);
              } catch (e2) {
                op = [6, e2];
                y2 = 0;
              } finally {
                f2 = t2 = 0;
              }
            if (op[0] & 5)
              throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
          }
        }
        function __spreadArray(to, from) {
          for (var i2 = 0, il = from.length, j2 = to.length; i2 < il; i2++, j2++)
            to[j2] = from[i2];
          return to;
        }
        var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
        function createCommonjsModule(fn) {
          var module2 = { exports: {} };
          return fn(module2, module2.exports), module2.exports;
        }
        var browserPolyfill = createCommonjsModule(function(module2) {
          (function(self2) {
            (function(exports3) {
              var support = {
                searchParams: "URLSearchParams" in self2,
                iterable: "Symbol" in self2 && "iterator" in Symbol,
                blob: "FileReader" in self2 && "Blob" in self2 && function() {
                  try {
                    new Blob();
                    return true;
                  } catch (e2) {
                    return false;
                  }
                }(),
                formData: "FormData" in self2,
                arrayBuffer: "ArrayBuffer" in self2
              };
              function isDataView(obj) {
                return obj && DataView.prototype.isPrototypeOf(obj);
              }
              if (support.arrayBuffer) {
                var viewClasses = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"];
                var isArrayBufferView = ArrayBuffer.isView || function(obj) {
                  return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
                };
              }
              function normalizeName(name) {
                if (typeof name !== "string") {
                  name = String(name);
                }
                if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
                  throw new TypeError("Invalid character in header field name");
                }
                return name.toLowerCase();
              }
              function normalizeValue(value) {
                if (typeof value !== "string") {
                  value = String(value);
                }
                return value;
              }
              function iteratorFor(items) {
                var iterator = {
                  next: function() {
                    var value = items.shift();
                    return {
                      done: value === void 0,
                      value
                    };
                  }
                };
                if (support.iterable) {
                  iterator[Symbol.iterator] = function() {
                    return iterator;
                  };
                }
                return iterator;
              }
              function Headers(headers) {
                this.map = {};
                if (headers instanceof Headers) {
                  headers.forEach(function(value, name) {
                    this.append(name, value);
                  }, this);
                } else if (Array.isArray(headers)) {
                  headers.forEach(function(header) {
                    this.append(header[0], header[1]);
                  }, this);
                } else if (headers) {
                  Object.getOwnPropertyNames(headers).forEach(function(name) {
                    this.append(name, headers[name]);
                  }, this);
                }
              }
              Headers.prototype.append = function(name, value) {
                name = normalizeName(name);
                value = normalizeValue(value);
                var oldValue = this.map[name];
                this.map[name] = oldValue ? oldValue + ", " + value : value;
              };
              Headers.prototype["delete"] = function(name) {
                delete this.map[normalizeName(name)];
              };
              Headers.prototype.get = function(name) {
                name = normalizeName(name);
                return this.has(name) ? this.map[name] : null;
              };
              Headers.prototype.has = function(name) {
                return this.map.hasOwnProperty(normalizeName(name));
              };
              Headers.prototype.set = function(name, value) {
                this.map[normalizeName(name)] = normalizeValue(value);
              };
              Headers.prototype.forEach = function(callback, thisArg) {
                for (var name in this.map) {
                  if (this.map.hasOwnProperty(name)) {
                    callback.call(thisArg, this.map[name], name, this);
                  }
                }
              };
              Headers.prototype.keys = function() {
                var items = [];
                this.forEach(function(value, name) {
                  items.push(name);
                });
                return iteratorFor(items);
              };
              Headers.prototype.values = function() {
                var items = [];
                this.forEach(function(value) {
                  items.push(value);
                });
                return iteratorFor(items);
              };
              Headers.prototype.entries = function() {
                var items = [];
                this.forEach(function(value, name) {
                  items.push([name, value]);
                });
                return iteratorFor(items);
              };
              if (support.iterable) {
                Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
              }
              function consumed(body) {
                if (body.bodyUsed) {
                  return Promise.reject(new TypeError("Already read"));
                }
                body.bodyUsed = true;
              }
              function fileReaderReady(reader) {
                return new Promise(function(resolve, reject) {
                  reader.onload = function() {
                    resolve(reader.result);
                  };
                  reader.onerror = function() {
                    reject(reader.error);
                  };
                });
              }
              function readBlobAsArrayBuffer(blob) {
                var reader = new FileReader();
                var promise = fileReaderReady(reader);
                reader.readAsArrayBuffer(blob);
                return promise;
              }
              function readBlobAsText(blob) {
                var reader = new FileReader();
                var promise = fileReaderReady(reader);
                reader.readAsText(blob);
                return promise;
              }
              function readArrayBufferAsText(buf) {
                var view = new Uint8Array(buf);
                var chars = new Array(view.length);
                for (var i2 = 0; i2 < view.length; i2++) {
                  chars[i2] = String.fromCharCode(view[i2]);
                }
                return chars.join("");
              }
              function bufferClone(buf) {
                if (buf.slice) {
                  return buf.slice(0);
                } else {
                  var view = new Uint8Array(buf.byteLength);
                  view.set(new Uint8Array(buf));
                  return view.buffer;
                }
              }
              function Body() {
                this.bodyUsed = false;
                this._initBody = function(body) {
                  this._bodyInit = body;
                  if (!body) {
                    this._bodyText = "";
                  } else if (typeof body === "string") {
                    this._bodyText = body;
                  } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
                    this._bodyBlob = body;
                  } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
                    this._bodyFormData = body;
                  } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
                    this._bodyText = body.toString();
                  } else if (support.arrayBuffer && support.blob && isDataView(body)) {
                    this._bodyArrayBuffer = bufferClone(body.buffer);
                    this._bodyInit = new Blob([this._bodyArrayBuffer]);
                  } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
                    this._bodyArrayBuffer = bufferClone(body);
                  } else {
                    this._bodyText = body = Object.prototype.toString.call(body);
                  }
                  if (!this.headers.get("content-type")) {
                    if (typeof body === "string") {
                      this.headers.set("content-type", "text/plain;charset=UTF-8");
                    } else if (this._bodyBlob && this._bodyBlob.type) {
                      this.headers.set("content-type", this._bodyBlob.type);
                    } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
                      this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
                    }
                  }
                };
                if (support.blob) {
                  this.blob = function() {
                    var rejected = consumed(this);
                    if (rejected) {
                      return rejected;
                    }
                    if (this._bodyBlob) {
                      return Promise.resolve(this._bodyBlob);
                    } else if (this._bodyArrayBuffer) {
                      return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                    } else if (this._bodyFormData) {
                      throw new Error("could not read FormData body as blob");
                    } else {
                      return Promise.resolve(new Blob([this._bodyText]));
                    }
                  };
                  this.arrayBuffer = function() {
                    if (this._bodyArrayBuffer) {
                      return consumed(this) || Promise.resolve(this._bodyArrayBuffer);
                    } else {
                      return this.blob().then(readBlobAsArrayBuffer);
                    }
                  };
                }
                this.text = function() {
                  var rejected = consumed(this);
                  if (rejected) {
                    return rejected;
                  }
                  if (this._bodyBlob) {
                    return readBlobAsText(this._bodyBlob);
                  } else if (this._bodyArrayBuffer) {
                    return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
                  } else if (this._bodyFormData) {
                    throw new Error("could not read FormData body as text");
                  } else {
                    return Promise.resolve(this._bodyText);
                  }
                };
                if (support.formData) {
                  this.formData = function() {
                    return this.text().then(decode);
                  };
                }
                this.json = function() {
                  return this.text().then(JSON.parse);
                };
                return this;
              }
              var methods = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
              function normalizeMethod(method) {
                var upcased = method.toUpperCase();
                return methods.indexOf(upcased) > -1 ? upcased : method;
              }
              function Request(input, options) {
                options = options || {};
                var body = options.body;
                if (input instanceof Request) {
                  if (input.bodyUsed) {
                    throw new TypeError("Already read");
                  }
                  this.url = input.url;
                  this.credentials = input.credentials;
                  if (!options.headers) {
                    this.headers = new Headers(input.headers);
                  }
                  this.method = input.method;
                  this.mode = input.mode;
                  this.signal = input.signal;
                  if (!body && input._bodyInit != null) {
                    body = input._bodyInit;
                    input.bodyUsed = true;
                  }
                } else {
                  this.url = String(input);
                }
                this.credentials = options.credentials || this.credentials || "same-origin";
                if (options.headers || !this.headers) {
                  this.headers = new Headers(options.headers);
                }
                this.method = normalizeMethod(options.method || this.method || "GET");
                this.mode = options.mode || this.mode || null;
                this.signal = options.signal || this.signal;
                this.referrer = null;
                if ((this.method === "GET" || this.method === "HEAD") && body) {
                  throw new TypeError("Body not allowed for GET or HEAD requests");
                }
                this._initBody(body);
              }
              Request.prototype.clone = function() {
                return new Request(this, {
                  body: this._bodyInit
                });
              };
              function decode(body) {
                var form = new FormData();
                body.trim().split("&").forEach(function(bytes) {
                  if (bytes) {
                    var split = bytes.split("=");
                    var name = split.shift().replace(/\+/g, " ");
                    var value = split.join("=").replace(/\+/g, " ");
                    form.append(decodeURIComponent(name), decodeURIComponent(value));
                  }
                });
                return form;
              }
              function parseHeaders(rawHeaders) {
                var headers = new Headers();
                var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, " ");
                preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
                  var parts = line.split(":");
                  var key2 = parts.shift().trim();
                  if (key2) {
                    var value = parts.join(":").trim();
                    headers.append(key2, value);
                  }
                });
                return headers;
              }
              Body.call(Request.prototype);
              function Response2(bodyInit, options) {
                if (!options) {
                  options = {};
                }
                this.type = "default";
                this.status = options.status === void 0 ? 200 : options.status;
                this.ok = this.status >= 200 && this.status < 300;
                this.statusText = "statusText" in options ? options.statusText : "OK";
                this.headers = new Headers(options.headers);
                this.url = options.url || "";
                this._initBody(bodyInit);
              }
              Body.call(Response2.prototype);
              Response2.prototype.clone = function() {
                return new Response2(this._bodyInit, {
                  status: this.status,
                  statusText: this.statusText,
                  headers: new Headers(this.headers),
                  url: this.url
                });
              };
              Response2.error = function() {
                var response = new Response2(null, {
                  status: 0,
                  statusText: ""
                });
                response.type = "error";
                return response;
              };
              var redirectStatuses = [301, 302, 303, 307, 308];
              Response2.redirect = function(url, status) {
                if (redirectStatuses.indexOf(status) === -1) {
                  throw new RangeError("Invalid status code");
                }
                return new Response2(null, {
                  status,
                  headers: {
                    location: url
                  }
                });
              };
              exports3.DOMException = self2.DOMException;
              try {
                new exports3.DOMException();
              } catch (err) {
                exports3.DOMException = function(message, name) {
                  this.message = message;
                  this.name = name;
                  var error = Error(message);
                  this.stack = error.stack;
                };
                exports3.DOMException.prototype = Object.create(Error.prototype);
                exports3.DOMException.prototype.constructor = exports3.DOMException;
              }
              function fetch2(input, init) {
                return new Promise(function(resolve, reject) {
                  var request = new Request(input, init);
                  if (request.signal && request.signal.aborted) {
                    return reject(new exports3.DOMException("Aborted", "AbortError"));
                  }
                  var xhr = new XMLHttpRequest();
                  function abortXhr() {
                    xhr.abort();
                  }
                  xhr.onload = function() {
                    var options = {
                      status: xhr.status,
                      statusText: xhr.statusText,
                      headers: parseHeaders(xhr.getAllResponseHeaders() || "")
                    };
                    options.url = "responseURL" in xhr ? xhr.responseURL : options.headers.get("X-Request-URL");
                    var body = "response" in xhr ? xhr.response : xhr.responseText;
                    resolve(new Response2(body, options));
                  };
                  xhr.onerror = function() {
                    reject(new TypeError("Network request failed"));
                  };
                  xhr.ontimeout = function() {
                    reject(new TypeError("Network request failed"));
                  };
                  xhr.onabort = function() {
                    reject(new exports3.DOMException("Aborted", "AbortError"));
                  };
                  xhr.open(request.method, request.url, true);
                  if (request.credentials === "include") {
                    xhr.withCredentials = true;
                  } else if (request.credentials === "omit") {
                    xhr.withCredentials = false;
                  }
                  if ("responseType" in xhr && support.blob) {
                    xhr.responseType = "blob";
                  }
                  request.headers.forEach(function(value, name) {
                    xhr.setRequestHeader(name, value);
                  });
                  if (request.signal) {
                    request.signal.addEventListener("abort", abortXhr);
                    xhr.onreadystatechange = function() {
                      if (xhr.readyState === 4) {
                        request.signal.removeEventListener("abort", abortXhr);
                      }
                    };
                  }
                  xhr.send(typeof request._bodyInit === "undefined" ? null : request._bodyInit);
                });
              }
              fetch2.polyfill = true;
              if (!self2.fetch) {
                self2.fetch = fetch2;
                self2.Headers = Headers;
                self2.Request = Request;
                self2.Response = Response2;
              }
              exports3.Headers = Headers;
              exports3.Request = Request;
              exports3.Response = Response2;
              exports3.fetch = fetch2;
              Object.defineProperty(exports3, "__esModule", {
                value: true
              });
              return exports3;
            })({});
          })(typeof self !== "undefined" ? self : commonjsGlobal);
        });
        var meilisearch_umd = createCommonjsModule(function(module2, exports3) {
          (function(global2, factory) {
            factory(exports3, browserPolyfill);
          })(commonjsGlobal, function(exports4) {
            var extendStatics = function(d2, b2) {
              extendStatics = Object.setPrototypeOf || {
                __proto__: []
              } instanceof Array && function(d3, b3) {
                d3.__proto__ = b3;
              } || function(d3, b3) {
                for (var p2 in b3)
                  if (Object.prototype.hasOwnProperty.call(b3, p2))
                    d3[p2] = b3[p2];
              };
              return extendStatics(d2, b2);
            };
            function __extends(d2, b2) {
              if (typeof b2 !== "function" && b2 !== null)
                throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
              extendStatics(d2, b2);
              function __() {
                this.constructor = d2;
              }
              d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
            }
            var __assign2 = function() {
              __assign2 = Object.assign || function __assign3(t2) {
                for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
                  s2 = arguments[i2];
                  for (var p2 in s2)
                    if (Object.prototype.hasOwnProperty.call(s2, p2))
                      t2[p2] = s2[p2];
                }
                return t2;
              };
              return __assign2.apply(this, arguments);
            };
            function __awaiter2(thisArg, _arguments, P2, generator) {
              function adopt(value) {
                return value instanceof P2 ? value : new P2(function(resolve) {
                  resolve(value);
                });
              }
              return new (P2 || (P2 = Promise))(function(resolve, reject) {
                function fulfilled(value) {
                  try {
                    step(generator.next(value));
                  } catch (e2) {
                    reject(e2);
                  }
                }
                function rejected(value) {
                  try {
                    step(generator["throw"](value));
                  } catch (e2) {
                    reject(e2);
                  }
                }
                function step(result) {
                  result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
                }
                step((generator = generator.apply(thisArg, _arguments || [])).next());
              });
            }
            function __generator2(thisArg, body) {
              var _2 = {
                label: 0,
                sent: function() {
                  if (t2[0] & 1)
                    throw t2[1];
                  return t2[1];
                },
                trys: [],
                ops: []
              }, f2, y2, t2, g2;
              return g2 = {
                next: verb(0),
                "throw": verb(1),
                "return": verb(2)
              }, typeof Symbol === "function" && (g2[Symbol.iterator] = function() {
                return this;
              }), g2;
              function verb(n2) {
                return function(v2) {
                  return step([n2, v2]);
                };
              }
              function step(op) {
                if (f2)
                  throw new TypeError("Generator is already executing.");
                while (_2)
                  try {
                    if (f2 = 1, y2 && (t2 = op[0] & 2 ? y2["return"] : op[0] ? y2["throw"] || ((t2 = y2["return"]) && t2.call(y2), 0) : y2.next) && !(t2 = t2.call(y2, op[1])).done)
                      return t2;
                    if (y2 = 0, t2)
                      op = [op[0] & 2, t2.value];
                    switch (op[0]) {
                      case 0:
                      case 1:
                        t2 = op;
                        break;
                      case 4:
                        _2.label++;
                        return {
                          value: op[1],
                          done: false
                        };
                      case 5:
                        _2.label++;
                        y2 = op[1];
                        op = [0];
                        continue;
                      case 7:
                        op = _2.ops.pop();
                        _2.trys.pop();
                        continue;
                      default:
                        if (!(t2 = _2.trys, t2 = t2.length > 0 && t2[t2.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                          _2 = 0;
                          continue;
                        }
                        if (op[0] === 3 && (!t2 || op[1] > t2[0] && op[1] < t2[3])) {
                          _2.label = op[1];
                          break;
                        }
                        if (op[0] === 6 && _2.label < t2[1]) {
                          _2.label = t2[1];
                          t2 = op;
                          break;
                        }
                        if (t2 && _2.label < t2[2]) {
                          _2.label = t2[2];
                          _2.ops.push(op);
                          break;
                        }
                        if (t2[2])
                          _2.ops.pop();
                        _2.trys.pop();
                        continue;
                    }
                    op = body.call(thisArg, _2);
                  } catch (e2) {
                    op = [6, e2];
                    y2 = 0;
                  } finally {
                    f2 = t2 = 0;
                  }
                if (op[0] & 5)
                  throw op[1];
                return {
                  value: op[0] ? op[1] : void 0,
                  done: true
                };
              }
            }
            var MeiliSearchCommunicationError = function(_super) {
              __extends(MeiliSearchCommunicationError2, _super);
              function MeiliSearchCommunicationError2(message, body, url, stack) {
                var _this = this;
                var _a, _b, _c;
                _this = _super.call(this, message) || this;
                Object.setPrototypeOf(_this, MeiliSearchCommunicationError2.prototype);
                _this.name = "MeiliSearchCommunicationError";
                if (body instanceof Response) {
                  _this.message = body.statusText;
                  _this.statusCode = body.status;
                }
                if (body instanceof Error) {
                  _this.errno = body.errno;
                  _this.code = body.code;
                }
                if (stack) {
                  _this.stack = stack;
                  _this.stack = (_a = _this.stack) === null || _a === void 0 ? void 0 : _a.replace(/(TypeError|FetchError)/, _this.name);
                  _this.stack = (_b = _this.stack) === null || _b === void 0 ? void 0 : _b.replace("Failed to fetch", "request to ".concat(url, " failed, reason: connect ECONNREFUSED"));
                  _this.stack = (_c = _this.stack) === null || _c === void 0 ? void 0 : _c.replace("Not Found", "Not Found: ".concat(url));
                } else {
                  if (Error.captureStackTrace) {
                    Error.captureStackTrace(_this, MeiliSearchCommunicationError2);
                  }
                }
                return _this;
              }
              return MeiliSearchCommunicationError2;
            }(Error);
            var MeiliSearchApiError = function(_super) {
              __extends(class_1, _super);
              function class_1(error, status) {
                var _this = _super.call(this, error.message) || this;
                Object.setPrototypeOf(_this, MeiliSearchApiError.prototype);
                _this.name = "MeiliSearchApiError";
                _this.code = error.code;
                _this.type = error.type;
                _this.link = error.link;
                _this.message = error.message;
                _this.httpStatus = status;
                if (Error.captureStackTrace) {
                  Error.captureStackTrace(_this, MeiliSearchApiError);
                }
                return _this;
              }
              return class_1;
            }(Error);
            function httpResponseErrorHandler(response) {
              return __awaiter2(this, void 0, void 0, function() {
                var responseBody;
                return __generator2(this, function(_a) {
                  switch (_a.label) {
                    case 0:
                      if (!!response.ok)
                        return [
                          3,
                          5
                        ];
                      responseBody = void 0;
                      _a.label = 1;
                    case 1:
                      _a.trys.push([1, 3, , 4]);
                      return [
                        4,
                        response.json()
                      ];
                    case 2:
                      responseBody = _a.sent();
                      return [
                        3,
                        4
                      ];
                    case 3:
                      _a.sent();
                      throw new MeiliSearchCommunicationError(response.statusText, response, response.url);
                    case 4:
                      throw new MeiliSearchApiError(responseBody, response.status);
                    case 5:
                      return [
                        2,
                        response
                      ];
                  }
                });
              });
            }
            function httpErrorHandler(response, stack, url) {
              if (response.name !== "MeiliSearchApiError") {
                throw new MeiliSearchCommunicationError(response.message, response, url, stack);
              }
              throw response;
            }
            var MeiliSearchError = function(_super) {
              __extends(MeiliSearchError2, _super);
              function MeiliSearchError2(message) {
                var _this = _super.call(this, message) || this;
                Object.setPrototypeOf(_this, MeiliSearchError2.prototype);
                _this.name = "MeiliSearchError";
                if (Error.captureStackTrace) {
                  Error.captureStackTrace(_this, MeiliSearchError2);
                }
                return _this;
              }
              return MeiliSearchError2;
            }(Error);
            var MeiliSearchTimeOutError = function(_super) {
              __extends(MeiliSearchTimeOutError2, _super);
              function MeiliSearchTimeOutError2(message) {
                var _this = _super.call(this, message) || this;
                Object.setPrototypeOf(_this, MeiliSearchTimeOutError2.prototype);
                _this.name = "MeiliSearchTimeOutError";
                if (Error.captureStackTrace) {
                  Error.captureStackTrace(_this, MeiliSearchTimeOutError2);
                }
                return _this;
              }
              return MeiliSearchTimeOutError2;
            }(Error);
            function removeUndefinedFromObject(obj) {
              return Object.entries(obj).reduce(function(acc, curEntry) {
                var key2 = curEntry[0], val = curEntry[1];
                if (val !== void 0)
                  acc[key2] = val;
                return acc;
              }, {});
            }
            function sleep(ms) {
              return __awaiter2(this, void 0, void 0, function() {
                return __generator2(this, function(_a) {
                  switch (_a.label) {
                    case 0:
                      return [
                        4,
                        new Promise(function(resolve) {
                          return setTimeout(resolve, ms);
                        })
                      ];
                    case 1:
                      return [
                        2,
                        _a.sent()
                      ];
                  }
                });
              });
            }
            function addProtocolIfNotPresent(host) {
              if (!(host.startsWith("https://") || host.startsWith("http://"))) {
                return "http://".concat(host);
              }
              return host;
            }
            function addTrailingSlash(url) {
              if (!url.endsWith("/")) {
                url += "/";
              }
              return url;
            }
            var PACKAGE_VERSION2 = "0.27.0";
            function constructHostURL(host) {
              try {
                host = addProtocolIfNotPresent(host);
                host = addTrailingSlash(host);
                return host;
              } catch (e2) {
                throw new MeiliSearchError("The provided host is not valid.");
              }
            }
            function createHeaders(config) {
              var agentHeader = "X-Meilisearch-Client";
              var packageAgent = "Meilisearch JavaScript (v".concat(PACKAGE_VERSION2, ")");
              var contentType = "Content-Type";
              config.headers = config.headers || {};
              var headers = Object.assign({}, config.headers);
              if (config.apiKey) {
                headers["Authorization"] = "Bearer ".concat(config.apiKey);
              }
              if (!config.headers[contentType]) {
                headers["Content-Type"] = "application/json";
              }
              if (config.clientAgents && Array.isArray(config.clientAgents)) {
                var clients = config.clientAgents.concat(packageAgent);
                headers[agentHeader] = clients.join(" ; ");
              } else if (config.clientAgents && !Array.isArray(config.clientAgents)) {
                throw new MeiliSearchError('Meilisearch: The header "'.concat(agentHeader, '" should be an array of string(s).\n'));
              } else {
                headers[agentHeader] = packageAgent;
              }
              return headers;
            }
            var HttpRequests = function() {
              function HttpRequests2(config) {
                this.headers = createHeaders(config);
                try {
                  var host = constructHostURL(config.host);
                  this.url = new URL(host);
                } catch (e2) {
                  throw new MeiliSearchError("The provided host is not valid.");
                }
              }
              HttpRequests2.prototype.request = function(_a) {
                var method = _a.method, url = _a.url, params = _a.params, body = _a.body, config = _a.config;
                return __awaiter2(this, void 0, void 0, function() {
                  var constructURL, queryParams_1, response, parsedBody, e_1, stack;
                  return __generator2(this, function(_b) {
                    switch (_b.label) {
                      case 0:
                        constructURL = new URL(url, this.url);
                        if (params) {
                          queryParams_1 = new URLSearchParams();
                          Object.keys(params).filter(function(x) {
                            return params[x] !== null;
                          }).map(function(x) {
                            return queryParams_1.set(x, params[x]);
                          });
                          constructURL.search = queryParams_1.toString();
                        }
                        _b.label = 1;
                      case 1:
                        _b.trys.push([1, 4, , 5]);
                        return [
                          4,
                          fetch(constructURL.toString(), __assign2(__assign2({}, config), {
                            method,
                            body: JSON.stringify(body),
                            headers: this.headers
                          })).then(function(res) {
                            return httpResponseErrorHandler(res);
                          })
                        ];
                      case 2:
                        response = _b.sent();
                        return [
                          4,
                          response.json()["catch"](function() {
                            return void 0;
                          })
                        ];
                      case 3:
                        parsedBody = _b.sent();
                        return [
                          2,
                          parsedBody
                        ];
                      case 4:
                        e_1 = _b.sent();
                        stack = e_1.stack;
                        httpErrorHandler(e_1, stack, constructURL.toString());
                        return [
                          3,
                          5
                        ];
                      case 5:
                        return [
                          2
                        ];
                    }
                  });
                });
              };
              HttpRequests2.prototype.get = function(url, params, config) {
                return __awaiter2(this, void 0, void 0, function() {
                  return __generator2(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        return [
                          4,
                          this.request({
                            method: "GET",
                            url,
                            params,
                            config
                          })
                        ];
                      case 1:
                        return [
                          2,
                          _a.sent()
                        ];
                    }
                  });
                });
              };
              HttpRequests2.prototype.post = function(url, data, params, config) {
                return __awaiter2(this, void 0, void 0, function() {
                  return __generator2(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        return [
                          4,
                          this.request({
                            method: "POST",
                            url,
                            body: data,
                            params,
                            config
                          })
                        ];
                      case 1:
                        return [
                          2,
                          _a.sent()
                        ];
                    }
                  });
                });
              };
              HttpRequests2.prototype.put = function(url, data, params, config) {
                return __awaiter2(this, void 0, void 0, function() {
                  return __generator2(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        return [
                          4,
                          this.request({
                            method: "PUT",
                            url,
                            body: data,
                            params,
                            config
                          })
                        ];
                      case 1:
                        return [
                          2,
                          _a.sent()
                        ];
                    }
                  });
                });
              };
              HttpRequests2.prototype.patch = function(url, data, params, config) {
                return __awaiter2(this, void 0, void 0, function() {
                  return __generator2(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        return [
                          4,
                          this.request({
                            method: "PATCH",
                            url,
                            body: data,
                            params,
                            config
                          })
                        ];
                      case 1:
                        return [
                          2,
                          _a.sent()
                        ];
                    }
                  });
                });
              };
              HttpRequests2.prototype["delete"] = function(url, data, params, config) {
                return __awaiter2(this, void 0, void 0, function() {
                  return __generator2(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        return [
                          4,
                          this.request({
                            method: "DELETE",
                            url,
                            body: data,
                            params,
                            config
                          })
                        ];
                      case 1:
                        return [
                          2,
                          _a.sent()
                        ];
                    }
                  });
                });
              };
              return HttpRequests2;
            }();
            var TaskClient = function() {
              function TaskClient2(config) {
                this.httpRequest = new HttpRequests(config);
              }
              TaskClient2.prototype.getTask = function(uid) {
                return __awaiter2(this, void 0, void 0, function() {
                  var url;
                  return __generator2(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        url = "tasks/".concat(uid);
                        return [
                          4,
                          this.httpRequest.get(url)
                        ];
                      case 1:
                        return [
                          2,
                          _a.sent()
                        ];
                    }
                  });
                });
              };
              TaskClient2.prototype.getTasks = function(parameters) {
                var _a, _b, _c;
                if (parameters === void 0) {
                  parameters = {};
                }
                return __awaiter2(this, void 0, void 0, function() {
                  var url, queryParams;
                  return __generator2(this, function(_d) {
                    switch (_d.label) {
                      case 0:
                        url = "tasks";
                        queryParams = {
                          indexUid: (_a = parameters === null || parameters === void 0 ? void 0 : parameters.indexUid) === null || _a === void 0 ? void 0 : _a.join(","),
                          type: (_b = parameters === null || parameters === void 0 ? void 0 : parameters.type) === null || _b === void 0 ? void 0 : _b.join(","),
                          status: (_c = parameters === null || parameters === void 0 ? void 0 : parameters.status) === null || _c === void 0 ? void 0 : _c.join(","),
                          from: parameters.from,
                          limit: parameters.limit
                        };
                        return [
                          4,
                          this.httpRequest.get(url, removeUndefinedFromObject(queryParams))
                        ];
                      case 1:
                        return [
                          2,
                          _d.sent()
                        ];
                    }
                  });
                });
              };
              TaskClient2.prototype.waitForTask = function(taskUid, _a) {
                var _b = _a === void 0 ? {} : _a, _c = _b.timeOutMs, timeOutMs = _c === void 0 ? 5e3 : _c, _d = _b.intervalMs, intervalMs = _d === void 0 ? 50 : _d;
                return __awaiter2(this, void 0, void 0, function() {
                  var startingTime, response;
                  return __generator2(this, function(_e) {
                    switch (_e.label) {
                      case 0:
                        startingTime = Date.now();
                        _e.label = 1;
                      case 1:
                        if (!(Date.now() - startingTime < timeOutMs))
                          return [
                            3,
                            4
                          ];
                        return [
                          4,
                          this.getTask(taskUid)
                        ];
                      case 2:
                        response = _e.sent();
                        if (![
                          "enqueued",
                          "processing"
                        ].includes(response.status))
                          return [
                            2,
                            response
                          ];
                        return [
                          4,
                          sleep(intervalMs)
                        ];
                      case 3:
                        _e.sent();
                        return [
                          3,
                          1
                        ];
                      case 4:
                        throw new MeiliSearchTimeOutError("timeout of ".concat(timeOutMs, "ms has exceeded on process ").concat(taskUid, " when waiting a task to be resolved."));
                    }
                  });
                });
              };
              TaskClient2.prototype.waitForTasks = function(taskUids, _a) {
                var _b = _a === void 0 ? {} : _a, _c = _b.timeOutMs, timeOutMs = _c === void 0 ? 5e3 : _c, _d = _b.intervalMs, intervalMs = _d === void 0 ? 50 : _d;
                return __awaiter2(this, void 0, void 0, function() {
                  var tasks, _i, taskUids_1, taskUid, task;
                  return __generator2(this, function(_e) {
                    switch (_e.label) {
                      case 0:
                        tasks = [];
                        _i = 0, taskUids_1 = taskUids;
                        _e.label = 1;
                      case 1:
                        if (!(_i < taskUids_1.length))
                          return [
                            3,
                            4
                          ];
                        taskUid = taskUids_1[_i];
                        return [
                          4,
                          this.waitForTask(taskUid, {
                            timeOutMs,
                            intervalMs
                          })
                        ];
                      case 2:
                        task = _e.sent();
                        tasks.push(task);
                        _e.label = 3;
                      case 3:
                        _i++;
                        return [
                          3,
                          1
                        ];
                      case 4:
                        return [
                          2,
                          tasks
                        ];
                    }
                  });
                });
              };
              return TaskClient2;
            }();
            var Index = function() {
              function Index2(config, uid, primaryKey) {
                this.uid = uid;
                this.primaryKey = primaryKey;
                this.httpRequest = new HttpRequests(config);
                this.tasks = new TaskClient(config);
              }
              Index2.prototype.search = function(query, options, config) {
                return __awaiter2(this, void 0, void 0, function() {
                  var url;
                  return __generator2(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        url = "indexes/".concat(this.uid, "/search");
                        return [
                          4,
                          this.httpRequest.post(url, removeUndefinedFromObject(__assign2({
                            q: query
                          }, options)), void 0, config)
                        ];
                      case 1:
                        return [
                          2,
                          _a.sent()
                        ];
                    }
                  });
                });
              };
              Index2.prototype.searchGet = function(query, options, config) {
                var _a, _b, _c, _d, _e;
                return __awaiter2(this, void 0, void 0, function() {
                  var url, parseFilter, getParams;
                  return __generator2(this, function(_f) {
                    switch (_f.label) {
                      case 0:
                        url = "indexes/".concat(this.uid, "/search");
                        parseFilter = function parseFilter2(filter) {
                          if (typeof filter === "string")
                            return filter;
                          else if (Array.isArray(filter))
                            throw new MeiliSearchError("The filter query parameter should be in string format when using searchGet");
                          else
                            return void 0;
                        };
                        getParams = __assign2(__assign2({
                          q: query
                        }, options), {
                          filter: parseFilter(options === null || options === void 0 ? void 0 : options.filter),
                          sort: (_a = options === null || options === void 0 ? void 0 : options.sort) === null || _a === void 0 ? void 0 : _a.join(","),
                          facets: (_b = options === null || options === void 0 ? void 0 : options.facets) === null || _b === void 0 ? void 0 : _b.join(","),
                          attributesToRetrieve: (_c = options === null || options === void 0 ? void 0 : options.attributesToRetrieve) === null || _c === void 0 ? void 0 : _c.join(","),
                          attributesToCrop: (_d = options === null || options === void 0 ? void 0 : options.attributesToCrop) === null || _d === void 0 ? void 0 : _d.join(","),
                          attributesToHighlight: (_e = options === null || options === void 0 ? void 0 : options.attributesToHighlight) === null || _e === void 0 ? void 0 : _e.join(",")
                        });
                        return [
                          4,
                          this.httpRequest.get(url, removeUndefinedFromObject(getParams), config)
                        ];
                      case 1:
                        return [
                          2,
                          _f.sent()
                        ];
                    }
                  });
                });
              };
              Index2.prototype.getRawInfo = function() {
                return __awaiter2(this, void 0, void 0, function() {
                  var url, res;
                  return __generator2(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        url = "indexes/".concat(this.uid);
                        return [
                          4,
                          this.httpRequest.get(url)
                        ];
                      case 1:
                        res = _a.sent();
                        this.primaryKey = res.primaryKey;
                        this.updatedAt = new Date(res.updatedAt);
                        this.createdAt = new Date(res.createdAt);
                        return [
                          2,
                          res
                        ];
                    }
                  });
                });
              };
              Index2.prototype.fetchInfo = function() {
                return __awaiter2(this, void 0, void 0, function() {
                  return __generator2(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        return [
                          4,
                          this.getRawInfo()
                        ];
                      case 1:
                        _a.sent();
                        return [
                          2,
                          this
                        ];
                    }
                  });
                });
              };
              Index2.prototype.fetchPrimaryKey = function() {
                return __awaiter2(this, void 0, void 0, function() {
                  var _a;
                  return __generator2(this, function(_b) {
                    switch (_b.label) {
                      case 0:
                        _a = this;
                        return [
                          4,
                          this.getRawInfo()
                        ];
                      case 1:
                        _a.primaryKey = _b.sent().primaryKey;
                        return [
                          2,
                          this.primaryKey
                        ];
                    }
                  });
                });
              };
              Index2.create = function(uid, options, config) {
                if (options === void 0) {
                  options = {};
                }
                return __awaiter2(this, void 0, void 0, function() {
                  var url, req;
                  return __generator2(this, function(_a) {
                    url = "indexes";
                    req = new HttpRequests(config);
                    return [
                      2,
                      req.post(url, __assign2(__assign2({}, options), {
                        uid
                      }))
                    ];
                  });
                });
              };
              Index2.prototype.update = function(data) {
                return __awaiter2(this, void 0, void 0, function() {
                  var url;
                  return __generator2(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        url = "indexes/".concat(this.uid);
                        return [
                          4,
                          this.httpRequest.patch(url, data)
                        ];
                      case 1:
                        return [
                          2,
                          _a.sent()
                        ];
                    }
                  });
                });
              };
              Index2.prototype["delete"] = function() {
                return __awaiter2(this, void 0, void 0, function() {
                  var url;
                  return __generator2(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        url = "indexes/".concat(this.uid);
                        return [
                          4,
                          this.httpRequest["delete"](url)
                        ];
                      case 1:
                        return [
                          2,
                          _a.sent()
                        ];
                    }
                  });
                });
              };
              Index2.prototype.getTasks = function(parameters) {
                if (parameters === void 0) {
                  parameters = {};
                }
                return __awaiter2(this, void 0, void 0, function() {
                  return __generator2(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        return [
                          4,
                          this.tasks.getTasks(__assign2(__assign2({}, parameters), {
                            indexUid: [this.uid]
                          }))
                        ];
                      case 1:
                        return [
                          2,
                          _a.sent()
                        ];
                    }
                  });
                });
              };
              Index2.prototype.getTask = function(taskUid) {
                return __awaiter2(this, void 0, void 0, function() {
                  return __generator2(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        return [
                          4,
                          this.tasks.getTask(taskUid)
                        ];
                      case 1:
                        return [
                          2,
                          _a.sent()
                        ];
                    }
                  });
                });
              };
              Index2.prototype.waitForTasks = function(taskUids, _a) {
                var _b = _a === void 0 ? {} : _a, _c = _b.timeOutMs, timeOutMs = _c === void 0 ? 5e3 : _c, _d = _b.intervalMs, intervalMs = _d === void 0 ? 50 : _d;
                return __awaiter2(this, void 0, void 0, function() {
                  return __generator2(this, function(_e) {
                    switch (_e.label) {
                      case 0:
                        return [
                          4,
                          this.tasks.waitForTasks(taskUids, {
                            timeOutMs,
                            intervalMs
                          })
                        ];
                      case 1:
                        return [
                          2,
                          _e.sent()
                        ];
                    }
                  });
                });
              };
              Index2.prototype.waitForTask = function(taskUid, _a) {
                var _b = _a === void 0 ? {} : _a, _c = _b.timeOutMs, timeOutMs = _c === void 0 ? 5e3 : _c, _d = _b.intervalMs, intervalMs = _d === void 0 ? 50 : _d;
                return __awaiter2(this, void 0, void 0, function() {
                  return __generator2(this, function(_e) {
                    switch (_e.label) {
                      case 0:
                        return [
                          4,
                          this.tasks.waitForTask(taskUid, {
                            timeOutMs,
                            intervalMs
                          })
                        ];
                      case 1:
                        return [
                          2,
                          _e.sent()
                        ];
                    }
                  });
                });
              };
              Index2.prototype.getStats = function() {
                return __awaiter2(this, void 0, void 0, function() {
                  var url;
                  return __generator2(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        url = "indexes/".concat(this.uid, "/stats");
                        return [
                          4,
                          this.httpRequest.get(url)
                        ];
                      case 1:
                        return [
                          2,
                          _a.sent()
                        ];
                    }
                  });
                });
              };
              Index2.prototype.getDocuments = function(parameters) {
                if (parameters === void 0) {
                  parameters = {};
                }
                return __awaiter2(this, void 0, void 0, function() {
                  var url, fields;
                  return __generator2(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        url = "indexes/".concat(this.uid, "/documents");
                        fields = function() {
                          var _a2;
                          if (Array.isArray(parameters === null || parameters === void 0 ? void 0 : parameters.fields)) {
                            return (_a2 = parameters === null || parameters === void 0 ? void 0 : parameters.fields) === null || _a2 === void 0 ? void 0 : _a2.join(",");
                          }
                          return void 0;
                        }();
                        return [
                          4,
                          this.httpRequest.get(url, removeUndefinedFromObject(__assign2(__assign2({}, parameters), {
                            fields
                          })))
                        ];
                      case 1:
                        return [
                          2,
                          _a.sent()
                        ];
                    }
                  });
                });
              };
              Index2.prototype.getDocument = function(documentId, parameters) {
                return __awaiter2(this, void 0, void 0, function() {
                  var url, fields;
                  return __generator2(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        url = "indexes/".concat(this.uid, "/documents/").concat(documentId);
                        fields = function() {
                          var _a2;
                          if (Array.isArray(parameters === null || parameters === void 0 ? void 0 : parameters.fields)) {
                            return (_a2 = parameters === null || parameters === void 0 ? void 0 : parameters.fields) === null || _a2 === void 0 ? void 0 : _a2.join(",");
                          }
                          return void 0;
                        }();
                        return [
                          4,
                          this.httpRequest.get(url, removeUndefinedFromObject(__assign2(__assign2({}, parameters), {
                            fields
                          })))
                        ];
                      case 1:
                        return [
                          2,
                          _a.sent()
                        ];
                    }
                  });
                });
              };
              Index2.prototype.addDocuments = function(documents, options) {
                return __awaiter2(this, void 0, void 0, function() {
                  var url;
                  return __generator2(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        url = "indexes/".concat(this.uid, "/documents");
                        return [
                          4,
                          this.httpRequest.post(url, documents, options)
                        ];
                      case 1:
                        return [
                          2,
                          _a.sent()
                        ];
                    }
                  });
                });
              };
              Index2.prototype.addDocumentsInBatches = function(documents, batchSize, options) {
                if (batchSize === void 0) {
                  batchSize = 1e3;
                }
                return __awaiter2(this, void 0, void 0, function() {
                  var updates, i2, _a, _b;
                  return __generator2(this, function(_c) {
                    switch (_c.label) {
                      case 0:
                        updates = [];
                        i2 = 0;
                        _c.label = 1;
                      case 1:
                        if (!(i2 < documents.length))
                          return [
                            3,
                            4
                          ];
                        _b = (_a = updates).push;
                        return [
                          4,
                          this.addDocuments(documents.slice(i2, i2 + batchSize), options)
                        ];
                      case 2:
                        _b.apply(_a, [_c.sent()]);
                        _c.label = 3;
                      case 3:
                        i2 += batchSize;
                        return [
                          3,
                          1
                        ];
                      case 4:
                        return [
                          2,
                          updates
                        ];
                    }
                  });
                });
              };
              Index2.prototype.updateDocuments = function(documents, options) {
                return __awaiter2(this, void 0, void 0, function() {
                  var url;
                  return __generator2(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        url = "indexes/".concat(this.uid, "/documents");
                        return [
                          4,
                          this.httpRequest.put(url, documents, options)
                        ];
                      case 1:
                        return [
                          2,
                          _a.sent()
                        ];
                    }
                  });
                });
              };
              Index2.prototype.updateDocumentsInBatches = function(documents, batchSize, options) {
                if (batchSize === void 0) {
                  batchSize = 1e3;
                }
                return __awaiter2(this, void 0, void 0, function() {
                  var updates, i2, _a, _b;
                  return __generator2(this, function(_c) {
                    switch (_c.label) {
                      case 0:
                        updates = [];
                        i2 = 0;
                        _c.label = 1;
                      case 1:
                        if (!(i2 < documents.length))
                          return [
                            3,
                            4
                          ];
                        _b = (_a = updates).push;
                        return [
                          4,
                          this.updateDocuments(documents.slice(i2, i2 + batchSize), options)
                        ];
                      case 2:
                        _b.apply(_a, [_c.sent()]);
                        _c.label = 3;
                      case 3:
                        i2 += batchSize;
                        return [
                          3,
                          1
                        ];
                      case 4:
                        return [
                          2,
                          updates
                        ];
                    }
                  });
                });
              };
              Index2.prototype.deleteDocument = function(documentId) {
                return __awaiter2(this, void 0, void 0, function() {
                  var url;
                  return __generator2(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        url = "indexes/".concat(this.uid, "/documents/").concat(documentId);
                        return [
                          4,
                          this.httpRequest["delete"](url)
                        ];
                      case 1:
                        return [
                          2,
                          _a.sent()
                        ];
                    }
                  });
                });
              };
              Index2.prototype.deleteDocuments = function(documentsIds) {
                return __awaiter2(this, void 0, void 0, function() {
                  var url;
                  return __generator2(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        url = "indexes/".concat(this.uid, "/documents/delete-batch");
                        return [
                          4,
                          this.httpRequest.post(url, documentsIds)
                        ];
                      case 1:
                        return [
                          2,
                          _a.sent()
                        ];
                    }
                  });
                });
              };
              Index2.prototype.deleteAllDocuments = function() {
                return __awaiter2(this, void 0, void 0, function() {
                  var url;
                  return __generator2(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        url = "indexes/".concat(this.uid, "/documents");
                        return [
                          4,
                          this.httpRequest["delete"](url)
                        ];
                      case 1:
                        return [
                          2,
                          _a.sent()
                        ];
                    }
                  });
                });
              };
              Index2.prototype.getSettings = function() {
                return __awaiter2(this, void 0, void 0, function() {
                  var url;
                  return __generator2(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        url = "indexes/".concat(this.uid, "/settings");
                        return [
                          4,
                          this.httpRequest.get(url)
                        ];
                      case 1:
                        return [
                          2,
                          _a.sent()
                        ];
                    }
                  });
                });
              };
              Index2.prototype.updateSettings = function(settings) {
                return __awaiter2(this, void 0, void 0, function() {
                  var url;
                  return __generator2(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        url = "indexes/".concat(this.uid, "/settings");
                        return [
                          4,
                          this.httpRequest.patch(url, settings)
                        ];
                      case 1:
                        return [
                          2,
                          _a.sent()
                        ];
                    }
                  });
                });
              };
              Index2.prototype.resetSettings = function() {
                return __awaiter2(this, void 0, void 0, function() {
                  var url;
                  return __generator2(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        url = "indexes/".concat(this.uid, "/settings");
                        return [
                          4,
                          this.httpRequest["delete"](url)
                        ];
                      case 1:
                        return [
                          2,
                          _a.sent()
                        ];
                    }
                  });
                });
              };
              Index2.prototype.getSynonyms = function() {
                return __awaiter2(this, void 0, void 0, function() {
                  var url;
                  return __generator2(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        url = "indexes/".concat(this.uid, "/settings/synonyms");
                        return [
                          4,
                          this.httpRequest.get(url)
                        ];
                      case 1:
                        return [
                          2,
                          _a.sent()
                        ];
                    }
                  });
                });
              };
              Index2.prototype.updateSynonyms = function(synonyms) {
                return __awaiter2(this, void 0, void 0, function() {
                  var url;
                  return __generator2(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        url = "indexes/".concat(this.uid, "/settings/synonyms");
                        return [
                          4,
                          this.httpRequest.put(url, synonyms)
                        ];
                      case 1:
                        return [
                          2,
                          _a.sent()
                        ];
                    }
                  });
                });
              };
              Index2.prototype.resetSynonyms = function() {
                return __awaiter2(this, void 0, void 0, function() {
                  var url;
                  return __generator2(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        url = "indexes/".concat(this.uid, "/settings/synonyms");
                        return [
                          4,
                          this.httpRequest["delete"](url)
                        ];
                      case 1:
                        return [
                          2,
                          _a.sent()
                        ];
                    }
                  });
                });
              };
              Index2.prototype.getStopWords = function() {
                return __awaiter2(this, void 0, void 0, function() {
                  var url;
                  return __generator2(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        url = "indexes/".concat(this.uid, "/settings/stop-words");
                        return [
                          4,
                          this.httpRequest.get(url)
                        ];
                      case 1:
                        return [
                          2,
                          _a.sent()
                        ];
                    }
                  });
                });
              };
              Index2.prototype.updateStopWords = function(stopWords) {
                return __awaiter2(this, void 0, void 0, function() {
                  var url;
                  return __generator2(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        url = "indexes/".concat(this.uid, "/settings/stop-words");
                        return [
                          4,
                          this.httpRequest.put(url, stopWords)
                        ];
                      case 1:
                        return [
                          2,
                          _a.sent()
                        ];
                    }
                  });
                });
              };
              Index2.prototype.resetStopWords = function() {
                return __awaiter2(this, void 0, void 0, function() {
                  var url;
                  return __generator2(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        url = "indexes/".concat(this.uid, "/settings/stop-words");
                        return [
                          4,
                          this.httpRequest["delete"](url)
                        ];
                      case 1:
                        return [
                          2,
                          _a.sent()
                        ];
                    }
                  });
                });
              };
              Index2.prototype.getRankingRules = function() {
                return __awaiter2(this, void 0, void 0, function() {
                  var url;
                  return __generator2(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        url = "indexes/".concat(this.uid, "/settings/ranking-rules");
                        return [
                          4,
                          this.httpRequest.get(url)
                        ];
                      case 1:
                        return [
                          2,
                          _a.sent()
                        ];
                    }
                  });
                });
              };
              Index2.prototype.updateRankingRules = function(rankingRules) {
                return __awaiter2(this, void 0, void 0, function() {
                  var url;
                  return __generator2(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        url = "indexes/".concat(this.uid, "/settings/ranking-rules");
                        return [
                          4,
                          this.httpRequest.put(url, rankingRules)
                        ];
                      case 1:
                        return [
                          2,
                          _a.sent()
                        ];
                    }
                  });
                });
              };
              Index2.prototype.resetRankingRules = function() {
                return __awaiter2(this, void 0, void 0, function() {
                  var url;
                  return __generator2(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        url = "indexes/".concat(this.uid, "/settings/ranking-rules");
                        return [
                          4,
                          this.httpRequest["delete"](url)
                        ];
                      case 1:
                        return [
                          2,
                          _a.sent()
                        ];
                    }
                  });
                });
              };
              Index2.prototype.getDistinctAttribute = function() {
                return __awaiter2(this, void 0, void 0, function() {
                  var url;
                  return __generator2(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        url = "indexes/".concat(this.uid, "/settings/distinct-attribute");
                        return [
                          4,
                          this.httpRequest.get(url)
                        ];
                      case 1:
                        return [
                          2,
                          _a.sent()
                        ];
                    }
                  });
                });
              };
              Index2.prototype.updateDistinctAttribute = function(distinctAttribute) {
                return __awaiter2(this, void 0, void 0, function() {
                  var url;
                  return __generator2(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        url = "indexes/".concat(this.uid, "/settings/distinct-attribute");
                        return [
                          4,
                          this.httpRequest.put(url, distinctAttribute)
                        ];
                      case 1:
                        return [
                          2,
                          _a.sent()
                        ];
                    }
                  });
                });
              };
              Index2.prototype.resetDistinctAttribute = function() {
                return __awaiter2(this, void 0, void 0, function() {
                  var url;
                  return __generator2(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        url = "indexes/".concat(this.uid, "/settings/distinct-attribute");
                        return [
                          4,
                          this.httpRequest["delete"](url)
                        ];
                      case 1:
                        return [
                          2,
                          _a.sent()
                        ];
                    }
                  });
                });
              };
              Index2.prototype.getFilterableAttributes = function() {
                return __awaiter2(this, void 0, void 0, function() {
                  var url;
                  return __generator2(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        url = "indexes/".concat(this.uid, "/settings/filterable-attributes");
                        return [
                          4,
                          this.httpRequest.get(url)
                        ];
                      case 1:
                        return [
                          2,
                          _a.sent()
                        ];
                    }
                  });
                });
              };
              Index2.prototype.updateFilterableAttributes = function(filterableAttributes) {
                return __awaiter2(this, void 0, void 0, function() {
                  var url;
                  return __generator2(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        url = "indexes/".concat(this.uid, "/settings/filterable-attributes");
                        return [
                          4,
                          this.httpRequest.put(url, filterableAttributes)
                        ];
                      case 1:
                        return [
                          2,
                          _a.sent()
                        ];
                    }
                  });
                });
              };
              Index2.prototype.resetFilterableAttributes = function() {
                return __awaiter2(this, void 0, void 0, function() {
                  var url;
                  return __generator2(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        url = "indexes/".concat(this.uid, "/settings/filterable-attributes");
                        return [
                          4,
                          this.httpRequest["delete"](url)
                        ];
                      case 1:
                        return [
                          2,
                          _a.sent()
                        ];
                    }
                  });
                });
              };
              Index2.prototype.getSortableAttributes = function() {
                return __awaiter2(this, void 0, void 0, function() {
                  var url;
                  return __generator2(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        url = "indexes/".concat(this.uid, "/settings/sortable-attributes");
                        return [
                          4,
                          this.httpRequest.get(url)
                        ];
                      case 1:
                        return [
                          2,
                          _a.sent()
                        ];
                    }
                  });
                });
              };
              Index2.prototype.updateSortableAttributes = function(sortableAttributes) {
                return __awaiter2(this, void 0, void 0, function() {
                  var url;
                  return __generator2(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        url = "indexes/".concat(this.uid, "/settings/sortable-attributes");
                        return [
                          4,
                          this.httpRequest.put(url, sortableAttributes)
                        ];
                      case 1:
                        return [
                          2,
                          _a.sent()
                        ];
                    }
                  });
                });
              };
              Index2.prototype.resetSortableAttributes = function() {
                return __awaiter2(this, void 0, void 0, function() {
                  var url;
                  return __generator2(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        url = "indexes/".concat(this.uid, "/settings/sortable-attributes");
                        return [
                          4,
                          this.httpRequest["delete"](url)
                        ];
                      case 1:
                        return [
                          2,
                          _a.sent()
                        ];
                    }
                  });
                });
              };
              Index2.prototype.getSearchableAttributes = function() {
                return __awaiter2(this, void 0, void 0, function() {
                  var url;
                  return __generator2(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        url = "indexes/".concat(this.uid, "/settings/searchable-attributes");
                        return [
                          4,
                          this.httpRequest.get(url)
                        ];
                      case 1:
                        return [
                          2,
                          _a.sent()
                        ];
                    }
                  });
                });
              };
              Index2.prototype.updateSearchableAttributes = function(searchableAttributes) {
                return __awaiter2(this, void 0, void 0, function() {
                  var url;
                  return __generator2(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        url = "indexes/".concat(this.uid, "/settings/searchable-attributes");
                        return [
                          4,
                          this.httpRequest.put(url, searchableAttributes)
                        ];
                      case 1:
                        return [
                          2,
                          _a.sent()
                        ];
                    }
                  });
                });
              };
              Index2.prototype.resetSearchableAttributes = function() {
                return __awaiter2(this, void 0, void 0, function() {
                  var url;
                  return __generator2(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        url = "indexes/".concat(this.uid, "/settings/searchable-attributes");
                        return [
                          4,
                          this.httpRequest["delete"](url)
                        ];
                      case 1:
                        return [
                          2,
                          _a.sent()
                        ];
                    }
                  });
                });
              };
              Index2.prototype.getDisplayedAttributes = function() {
                return __awaiter2(this, void 0, void 0, function() {
                  var url;
                  return __generator2(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        url = "indexes/".concat(this.uid, "/settings/displayed-attributes");
                        return [
                          4,
                          this.httpRequest.get(url)
                        ];
                      case 1:
                        return [
                          2,
                          _a.sent()
                        ];
                    }
                  });
                });
              };
              Index2.prototype.updateDisplayedAttributes = function(displayedAttributes) {
                return __awaiter2(this, void 0, void 0, function() {
                  var url;
                  return __generator2(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        url = "indexes/".concat(this.uid, "/settings/displayed-attributes");
                        return [
                          4,
                          this.httpRequest.put(url, displayedAttributes)
                        ];
                      case 1:
                        return [
                          2,
                          _a.sent()
                        ];
                    }
                  });
                });
              };
              Index2.prototype.resetDisplayedAttributes = function() {
                return __awaiter2(this, void 0, void 0, function() {
                  var url;
                  return __generator2(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        url = "indexes/".concat(this.uid, "/settings/displayed-attributes");
                        return [
                          4,
                          this.httpRequest["delete"](url)
                        ];
                      case 1:
                        return [
                          2,
                          _a.sent()
                        ];
                    }
                  });
                });
              };
              Index2.prototype.getTypoTolerance = function() {
                return __awaiter2(this, void 0, void 0, function() {
                  var url;
                  return __generator2(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        url = "indexes/".concat(this.uid, "/settings/typo-tolerance");
                        return [
                          4,
                          this.httpRequest.get(url)
                        ];
                      case 1:
                        return [
                          2,
                          _a.sent()
                        ];
                    }
                  });
                });
              };
              Index2.prototype.updateTypoTolerance = function(typoTolerance) {
                return __awaiter2(this, void 0, void 0, function() {
                  var url;
                  return __generator2(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        url = "indexes/".concat(this.uid, "/settings/typo-tolerance");
                        return [
                          4,
                          this.httpRequest.patch(url, typoTolerance)
                        ];
                      case 1:
                        return [
                          2,
                          _a.sent()
                        ];
                    }
                  });
                });
              };
              Index2.prototype.resetTypoTolerance = function() {
                return __awaiter2(this, void 0, void 0, function() {
                  var url;
                  return __generator2(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        url = "indexes/".concat(this.uid, "/settings/typo-tolerance");
                        return [
                          4,
                          this.httpRequest["delete"](url)
                        ];
                      case 1:
                        return [
                          2,
                          _a.sent()
                        ];
                    }
                  });
                });
              };
              return Index2;
            }();
            var Client = function() {
              function Client2(config) {
                this.config = config;
                this.httpRequest = new HttpRequests(config);
                this.tasks = new TaskClient(config);
              }
              Client2.prototype.index = function(indexUid) {
                return new Index(this.config, indexUid);
              };
              Client2.prototype.getIndex = function(indexUid) {
                return __awaiter2(this, void 0, void 0, function() {
                  return __generator2(this, function(_a) {
                    return [
                      2,
                      new Index(this.config, indexUid).fetchInfo()
                    ];
                  });
                });
              };
              Client2.prototype.getRawIndex = function(indexUid) {
                return __awaiter2(this, void 0, void 0, function() {
                  return __generator2(this, function(_a) {
                    return [
                      2,
                      new Index(this.config, indexUid).getRawInfo()
                    ];
                  });
                });
              };
              Client2.prototype.getIndexes = function(parameters) {
                if (parameters === void 0) {
                  parameters = {};
                }
                return __awaiter2(this, void 0, void 0, function() {
                  var rawIndexes, indexes;
                  var _this = this;
                  return __generator2(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        return [
                          4,
                          this.getRawIndexes(parameters)
                        ];
                      case 1:
                        rawIndexes = _a.sent();
                        indexes = rawIndexes.results.map(function(index3) {
                          return new Index(_this.config, index3.uid, index3.primaryKey);
                        });
                        return [
                          2,
                          __assign2(__assign2({}, rawIndexes), {
                            results: indexes
                          })
                        ];
                    }
                  });
                });
              };
              Client2.prototype.getRawIndexes = function(parameters) {
                if (parameters === void 0) {
                  parameters = {};
                }
                return __awaiter2(this, void 0, void 0, function() {
                  var url;
                  return __generator2(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        url = "indexes";
                        return [
                          4,
                          this.httpRequest.get(url, parameters)
                        ];
                      case 1:
                        return [
                          2,
                          _a.sent()
                        ];
                    }
                  });
                });
              };
              Client2.prototype.createIndex = function(uid, options) {
                if (options === void 0) {
                  options = {};
                }
                return __awaiter2(this, void 0, void 0, function() {
                  return __generator2(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        return [
                          4,
                          Index.create(uid, options, this.config)
                        ];
                      case 1:
                        return [
                          2,
                          _a.sent()
                        ];
                    }
                  });
                });
              };
              Client2.prototype.updateIndex = function(uid, options) {
                if (options === void 0) {
                  options = {};
                }
                return __awaiter2(this, void 0, void 0, function() {
                  return __generator2(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        return [
                          4,
                          new Index(this.config, uid).update(options)
                        ];
                      case 1:
                        return [
                          2,
                          _a.sent()
                        ];
                    }
                  });
                });
              };
              Client2.prototype.deleteIndex = function(uid) {
                return __awaiter2(this, void 0, void 0, function() {
                  return __generator2(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        return [
                          4,
                          new Index(this.config, uid)["delete"]()
                        ];
                      case 1:
                        return [
                          2,
                          _a.sent()
                        ];
                    }
                  });
                });
              };
              Client2.prototype.deleteIndexIfExists = function(uid) {
                return __awaiter2(this, void 0, void 0, function() {
                  var e_1;
                  return __generator2(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [
                          4,
                          this.deleteIndex(uid)
                        ];
                      case 1:
                        _a.sent();
                        return [
                          2,
                          true
                        ];
                      case 2:
                        e_1 = _a.sent();
                        if (e_1.code === "index_not_found") {
                          return [
                            2,
                            false
                          ];
                        }
                        throw e_1;
                      case 3:
                        return [
                          2
                        ];
                    }
                  });
                });
              };
              Client2.prototype.getTasks = function(parameters) {
                if (parameters === void 0) {
                  parameters = {};
                }
                return __awaiter2(this, void 0, void 0, function() {
                  return __generator2(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        return [
                          4,
                          this.tasks.getTasks(parameters)
                        ];
                      case 1:
                        return [
                          2,
                          _a.sent()
                        ];
                    }
                  });
                });
              };
              Client2.prototype.getTask = function(taskUid) {
                return __awaiter2(this, void 0, void 0, function() {
                  return __generator2(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        return [
                          4,
                          this.tasks.getTask(taskUid)
                        ];
                      case 1:
                        return [
                          2,
                          _a.sent()
                        ];
                    }
                  });
                });
              };
              Client2.prototype.waitForTasks = function(taskUids, _a) {
                var _b = _a === void 0 ? {} : _a, _c = _b.timeOutMs, timeOutMs = _c === void 0 ? 5e3 : _c, _d = _b.intervalMs, intervalMs = _d === void 0 ? 50 : _d;
                return __awaiter2(this, void 0, void 0, function() {
                  return __generator2(this, function(_e) {
                    switch (_e.label) {
                      case 0:
                        return [
                          4,
                          this.tasks.waitForTasks(taskUids, {
                            timeOutMs,
                            intervalMs
                          })
                        ];
                      case 1:
                        return [
                          2,
                          _e.sent()
                        ];
                    }
                  });
                });
              };
              Client2.prototype.waitForTask = function(taskUid, _a) {
                var _b = _a === void 0 ? {} : _a, _c = _b.timeOutMs, timeOutMs = _c === void 0 ? 5e3 : _c, _d = _b.intervalMs, intervalMs = _d === void 0 ? 50 : _d;
                return __awaiter2(this, void 0, void 0, function() {
                  return __generator2(this, function(_e) {
                    switch (_e.label) {
                      case 0:
                        return [
                          4,
                          this.tasks.waitForTask(taskUid, {
                            timeOutMs,
                            intervalMs
                          })
                        ];
                      case 1:
                        return [
                          2,
                          _e.sent()
                        ];
                    }
                  });
                });
              };
              Client2.prototype.getKeys = function(parameters) {
                if (parameters === void 0) {
                  parameters = {};
                }
                return __awaiter2(this, void 0, void 0, function() {
                  var url;
                  return __generator2(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        url = "keys";
                        return [
                          4,
                          this.httpRequest.get(url, parameters)
                        ];
                      case 1:
                        return [
                          2,
                          _a.sent()
                        ];
                    }
                  });
                });
              };
              Client2.prototype.getKey = function(keyOrUid) {
                return __awaiter2(this, void 0, void 0, function() {
                  var url;
                  return __generator2(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        url = "keys/".concat(keyOrUid);
                        return [
                          4,
                          this.httpRequest.get(url)
                        ];
                      case 1:
                        return [
                          2,
                          _a.sent()
                        ];
                    }
                  });
                });
              };
              Client2.prototype.createKey = function(options) {
                return __awaiter2(this, void 0, void 0, function() {
                  var url;
                  return __generator2(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        url = "keys";
                        return [
                          4,
                          this.httpRequest.post(url, options)
                        ];
                      case 1:
                        return [
                          2,
                          _a.sent()
                        ];
                    }
                  });
                });
              };
              Client2.prototype.updateKey = function(keyOrUid, options) {
                return __awaiter2(this, void 0, void 0, function() {
                  var url;
                  return __generator2(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        url = "keys/".concat(keyOrUid);
                        return [
                          4,
                          this.httpRequest.patch(url, options)
                        ];
                      case 1:
                        return [
                          2,
                          _a.sent()
                        ];
                    }
                  });
                });
              };
              Client2.prototype.deleteKey = function(keyOrUid) {
                return __awaiter2(this, void 0, void 0, function() {
                  var url;
                  return __generator2(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        url = "keys/".concat(keyOrUid);
                        return [
                          4,
                          this.httpRequest["delete"](url)
                        ];
                      case 1:
                        return [
                          2,
                          _a.sent()
                        ];
                    }
                  });
                });
              };
              Client2.prototype.health = function() {
                return __awaiter2(this, void 0, void 0, function() {
                  var url;
                  return __generator2(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        url = "health";
                        return [
                          4,
                          this.httpRequest.get(url)
                        ];
                      case 1:
                        return [
                          2,
                          _a.sent()
                        ];
                    }
                  });
                });
              };
              Client2.prototype.isHealthy = function() {
                return __awaiter2(this, void 0, void 0, function() {
                  var url;
                  return __generator2(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        _a.trys.push([0, 2, , 3]);
                        url = "health";
                        return [
                          4,
                          this.httpRequest.get(url)
                        ];
                      case 1:
                        _a.sent();
                        return [
                          2,
                          true
                        ];
                      case 2:
                        _a.sent();
                        return [
                          2,
                          false
                        ];
                      case 3:
                        return [
                          2
                        ];
                    }
                  });
                });
              };
              Client2.prototype.getStats = function() {
                return __awaiter2(this, void 0, void 0, function() {
                  var url;
                  return __generator2(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        url = "stats";
                        return [
                          4,
                          this.httpRequest.get(url)
                        ];
                      case 1:
                        return [
                          2,
                          _a.sent()
                        ];
                    }
                  });
                });
              };
              Client2.prototype.getVersion = function() {
                return __awaiter2(this, void 0, void 0, function() {
                  var url;
                  return __generator2(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        url = "version";
                        return [
                          4,
                          this.httpRequest.get(url)
                        ];
                      case 1:
                        return [
                          2,
                          _a.sent()
                        ];
                    }
                  });
                });
              };
              Client2.prototype.createDump = function() {
                return __awaiter2(this, void 0, void 0, function() {
                  var url;
                  return __generator2(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        url = "dumps";
                        return [
                          4,
                          this.httpRequest.post(url)
                        ];
                      case 1:
                        return [
                          2,
                          _a.sent()
                        ];
                    }
                  });
                });
              };
              Client2.prototype.generateTenantToken = function(_apiKeyUid, _searchRules, _options) {
                var error = new Error();
                throw new Error("Meilisearch: failed to generate a tenant token. Generation of a token only works in a node environment \n ".concat(error.stack, "."));
              };
              return Client2;
            }();
            var MeiliSearch = function(_super) {
              __extends(MeiliSearch2, _super);
              function MeiliSearch2(config) {
                return _super.call(this, config) || this;
              }
              return MeiliSearch2;
            }(Client);
            exports4.Index = Index;
            exports4.MeiliSearch = MeiliSearch;
            exports4.MeiliSearchApiError = MeiliSearchApiError;
            exports4.MeiliSearchCommunicationError = MeiliSearchCommunicationError;
            exports4.MeiliSearchError = MeiliSearchError;
            exports4.MeiliSearchTimeOutError = MeiliSearchTimeOutError;
            exports4["default"] = MeiliSearch;
            exports4.httpErrorHandler = httpErrorHandler;
            exports4.httpResponseErrorHandler = httpResponseErrorHandler;
            Object.defineProperty(exports4, "__esModule", {
              value: true
            });
          });
        });
        var removeUndefined = function(arr) {
          return arr.filter(function(x) {
            return x !== void 0;
          });
        };
        function replaceColonByEqualSign(filter) {
          return filter.replace(/:(.*)/i, '="$1"');
        }
        function stringifyArray(arr) {
          return arr.reduce(function(acc, curr) {
            return acc += JSON.stringify(curr);
          }, "");
        }
        function ceiledDivision(dividend, divisor) {
          if (divisor > 0) {
            var NumberPages = Math.ceil(dividend / divisor);
            return NumberPages;
          }
          return 0;
        }
        function isPureObject(data) {
          return typeof data === "object" && !Array.isArray(data) && data !== null;
        }
        var adaptFilterSyntax = function(filter) {
          var matches = filter.match(/([^=]*)="?([^\\"]*)"?$/);
          if (matches) {
            matches[0];
            var filterName = matches[1], value = matches[2];
            return [{ filterName, value }];
          }
          return [];
        };
        function extractFilters(filters) {
          if (typeof filters === "string") {
            return adaptFilterSyntax(filters);
          } else if (Array.isArray(filters)) {
            return filters.map(function(nestedFilter) {
              if (Array.isArray(nestedFilter)) {
                return nestedFilter.map(function(filter) {
                  return adaptFilterSyntax(filter);
                });
              }
              return adaptFilterSyntax(nestedFilter);
            }).flat(2);
          }
          return [];
        }
        function getFacetsFromFilter(filters) {
          var extractedFilters = extractFilters(filters);
          var cleanFilters = removeUndefined(extractedFilters);
          return cleanFilters.reduce(function(cache, parsedFilter) {
            var _a;
            var filterName = parsedFilter.filterName, value = parsedFilter.value;
            var prevFields = cache[filterName] || [];
            cache = __assign(__assign({}, cache), (_a = {}, _a[filterName] = __spreadArray(__spreadArray([], prevFields, true), [value]), _a));
            return cache;
          }, {});
        }
        function getFacetsFromDefaultDistribution(facetDistribution) {
          return Object.keys(facetDistribution).reduce(function(cache, facet) {
            var _a;
            var facetValues = Object.keys(facetDistribution[facet]);
            return __assign(__assign({}, cache), (_a = {}, _a[facet] = facetValues, _a));
          }, {});
        }
        function extractFacets(searchContext, searchParams) {
          if (searchContext.keepZeroFacets) {
            return getFacetsFromDefaultDistribution(searchContext.defaultFacetDistribution);
          } else {
            return getFacetsFromFilter(searchParams === null || searchParams === void 0 ? void 0 : searchParams.filter);
          }
        }
        function addMissingFacets(cachedFacets, distribution) {
          distribution = distribution || {};
          if (cachedFacets && Object.keys(cachedFacets).length > 0) {
            for (var cachedFacet in cachedFacets) {
              if (!distribution[cachedFacet])
                distribution[cachedFacet] = {};
              for (var _i = 0, _a = cachedFacets[cachedFacet]; _i < _a.length; _i++) {
                var cachedField = _a[_i];
                if (!Object.keys(distribution[cachedFacet]).includes(cachedField)) {
                  distribution[cachedFacet][cachedField] = 0;
                }
              }
            }
          }
          return distribution;
        }
        var emptySearch = {
          hits: [],
          query: "",
          facetDistribution: {},
          limit: 0,
          offset: 0,
          estimatedTotalHits: 0,
          processingTimeMs: 0
        };
        function SearchResolver(cache) {
          return {
            searchResponse: function(searchContext, searchParams, client) {
              return __awaiter(this, void 0, void 0, function() {
                var placeholderSearch, query, pagination, paginationCache, key2, cachedResponse, facetsCache, searchResponse;
                return __generator(this, function(_a) {
                  switch (_a.label) {
                    case 0:
                      placeholderSearch = searchContext.placeholderSearch, query = searchContext.query;
                      if (!placeholderSearch && !query) {
                        return [2, emptySearch];
                      }
                      pagination = searchContext.pagination;
                      paginationCache = searchContext.finitePagination ? {} : pagination;
                      key2 = cache.formatKey([
                        searchParams,
                        searchContext.indexUid,
                        searchContext.query,
                        paginationCache
                      ]);
                      cachedResponse = cache.getEntry(key2);
                      if (cachedResponse)
                        return [2, cachedResponse];
                      facetsCache = extractFacets(searchContext, searchParams);
                      return [
                        4,
                        client.index(searchContext.indexUid).search(searchContext.query, searchParams)
                      ];
                    case 1:
                      searchResponse = _a.sent();
                      searchResponse.facetDistribution = addMissingFacets(facetsCache, searchResponse.facetDistribution);
                      cache.setEntry(key2, searchResponse);
                      return [2, searchResponse];
                  }
                });
              });
            }
          };
        }
        function rad2degr(rad) {
          return rad * 180 / Math.PI;
        }
        function degr2rad(degr) {
          return degr * Math.PI / 180;
        }
        function middleGeoPoints(lat1, lng1, lat2, lng2) {
          lat1 = degr2rad(lat1);
          lng1 = degr2rad(lng1);
          var x1 = Math.cos(lat1) * Math.cos(lng1);
          var y1 = Math.cos(lat1) * Math.sin(lng1);
          var z1 = Math.sin(lat1);
          lat2 = degr2rad(lat2);
          lng2 = degr2rad(lng2);
          var x2 = Math.cos(lat2) * Math.cos(lng2);
          var y2 = Math.cos(lat2) * Math.sin(lng2);
          var z2 = Math.sin(lat2);
          var x = x1 + x2;
          var y3 = y1 + y2;
          var z3 = z1 + z2;
          var Hyp = Math.sqrt(x * x + y3 * y3);
          var lng3 = Math.atan2(y3, x);
          var lat3 = Math.atan2(z3, Hyp);
          if (lng1 < lng2 || lng1 > lng2 && lng1 > Math.PI && lng2 < -Math.PI) {
            lat3 = lat3 + Math.PI;
            lng3 = lng3 + Math.PI;
          } else {
            lat3 = rad2degr(lat3);
            lng3 = rad2degr(lng3);
          }
          if (Math.abs(x) < Math.pow(10, -9) && Math.abs(y3) < Math.pow(10, -9) && Math.abs(z3) < Math.pow(10, -9)) {
            lat3 = 0;
            lng3 = 0;
          }
          return "".concat(lat3, ",").concat(lng3);
        }
        function getDistanceInMeter(lat1, lng1, lat2, lng2) {
          var R = 6371e3;
          var latRad1 = lat1 * Math.PI / 180;
          var latRad2 = lat2 * Math.PI / 180;
          var latCenterRad = (lat2 - lat1) * Math.PI / 180;
          var lngCenterRad = (lng2 - lng1) * Math.PI / 180;
          var a2 = Math.sin(latCenterRad / 2) * Math.sin(latCenterRad / 2) + Math.cos(latRad1) * Math.cos(latRad2) * Math.sin(lngCenterRad / 2) * Math.sin(lngCenterRad / 2);
          var bearing = 2 * Math.atan2(Math.sqrt(a2), Math.sqrt(1 - a2));
          var distance = R * bearing;
          return distance;
        }
        function adaptGeoPointsRules(geoSearchContext) {
          if (!geoSearchContext) {
            return void 0;
          }
          var insideBoundingBox = geoSearchContext.insideBoundingBox, aroundLatLng = geoSearchContext.aroundLatLng, aroundRadius = geoSearchContext.aroundRadius, minimumAroundRadius = geoSearchContext.minimumAroundRadius;
          var middlePoint;
          var radius;
          if (aroundLatLng) {
            middlePoint = aroundLatLng;
          }
          if (aroundRadius != null || minimumAroundRadius != null) {
            if (aroundRadius != null)
              radius = aroundRadius;
            else
              radius = minimumAroundRadius;
          }
          if (insideBoundingBox && typeof insideBoundingBox === "string") {
            var _a = insideBoundingBox.split(","), lat1Raw = _a[0], lng1Raw = _a[1], lat2Raw = _a[2], lng2Raw = _a[3];
            var _b = [
              parseFloat(lat1Raw),
              parseFloat(lng1Raw),
              parseFloat(lat2Raw),
              parseFloat(lng2Raw)
            ], lat1 = _b[0], lng1 = _b[1], lat2 = _b[2], lng2 = _b[3];
            radius = getDistanceInMeter(lat1, lng1, lat2, lng2) / 2;
            middlePoint = middleGeoPoints(lat1, lng1, lat2, lng2);
          }
          if (middlePoint != null && radius != null) {
            var _c = middlePoint.split(","), lat3 = _c[0], lng3 = _c[1];
            lat3 = Number.parseFloat(lat3).toFixed(5);
            lng3 = Number.parseFloat(lng3).toFixed(5);
            var filter = "_geoRadius(".concat(lat3, ", ").concat(lng3, ", ").concat(radius, ")");
            return { filter };
          }
          return void 0;
        }
        function createGeoSearchContext(searchContext) {
          var geoContext = {};
          var aroundLatLng = searchContext.aroundLatLng, aroundLatLngViaIP = searchContext.aroundLatLngViaIP, aroundRadius = searchContext.aroundRadius, aroundPrecision = searchContext.aroundPrecision, minimumAroundRadius = searchContext.minimumAroundRadius, insideBoundingBox = searchContext.insideBoundingBox, insidePolygon = searchContext.insidePolygon;
          if (aroundLatLng) {
            geoContext.aroundLatLng = aroundLatLng;
          }
          if (aroundLatLngViaIP) {
            console.warn("instant-meilisearch: `aroundLatLngViaIP` is not supported.");
          }
          if (aroundRadius) {
            geoContext.aroundRadius = aroundRadius;
          }
          if (aroundPrecision) {
            console.warn("instant-meilisearch: `aroundPrecision` is not supported.\n    See this discussion to track its implementation https://github.com/meilisearch/product/discussions/264");
          }
          if (minimumAroundRadius) {
            geoContext.minimumAroundRadius = minimumAroundRadius;
          }
          if (insideBoundingBox) {
            geoContext.insideBoundingBox = insideBoundingBox;
          }
          if (insidePolygon) {
            console.warn("instant-meilisearch: `insidePolygon` is not implented in instant-meilisearch.");
          }
          return geoContext;
        }
        function transformFilter(filters) {
          if (typeof filters === "string") {
            return replaceColonByEqualSign(filters);
          } else if (Array.isArray(filters))
            return filters.map(function(filter) {
              if (Array.isArray(filter))
                return filter.map(function(nestedFilter) {
                  return replaceColonByEqualSign(nestedFilter);
                }).filter(function(elem) {
                  return elem;
                });
              else {
                return replaceColonByEqualSign(filter);
              }
            }).filter(function(elem) {
              return elem;
            });
          return [];
        }
        function filterToArray(filter) {
          if (filter === "")
            return [];
          else if (typeof filter === "string")
            return [filter];
          return filter;
        }
        function mergeFilters(facetFilters, numericFilters, filters) {
          var adaptedFilters = filters.trim();
          var adaptedFacetFilters = filterToArray(facetFilters);
          var adaptedNumericFilters = filterToArray(numericFilters);
          var adaptedFilter = __spreadArray(__spreadArray(__spreadArray([], adaptedFacetFilters, true), adaptedNumericFilters, true), [
            adaptedFilters
          ]);
          var cleanedFilters = adaptedFilter.filter(function(filter) {
            if (Array.isArray(filter)) {
              return filter.length;
            }
            return filter;
          });
          return cleanedFilters;
        }
        function adaptFilters(filters, numericFilters, facetFilters) {
          var transformedFilter = transformFilter(facetFilters || []);
          var transformedNumericFilter = transformFilter(numericFilters || []);
          return mergeFilters(transformedFilter, transformedNumericFilter, filters || "");
        }
        function adaptSearchParams(searchContext) {
          var meiliSearchParams = {};
          var facets = searchContext === null || searchContext === void 0 ? void 0 : searchContext.facets;
          if (facets === null || facets === void 0 ? void 0 : facets.length) {
            meiliSearchParams.facets = facets;
          }
          var attributesToCrop = searchContext === null || searchContext === void 0 ? void 0 : searchContext.attributesToSnippet;
          if (attributesToCrop) {
            meiliSearchParams.attributesToCrop = attributesToCrop;
          }
          var cropMarker = searchContext === null || searchContext === void 0 ? void 0 : searchContext.snippetEllipsisText;
          if (cropMarker != null) {
            meiliSearchParams.cropMarker = cropMarker;
          }
          var attributesToRetrieve = searchContext === null || searchContext === void 0 ? void 0 : searchContext.attributesToRetrieve;
          if (attributesToRetrieve) {
            meiliSearchParams.attributesToRetrieve = attributesToRetrieve;
          }
          var filter = adaptFilters(searchContext === null || searchContext === void 0 ? void 0 : searchContext.filters, searchContext === null || searchContext === void 0 ? void 0 : searchContext.numericFilters, searchContext === null || searchContext === void 0 ? void 0 : searchContext.facetFilters);
          if (filter.length) {
            meiliSearchParams.filter = filter;
          }
          if (attributesToRetrieve) {
            meiliSearchParams.attributesToCrop = attributesToRetrieve;
          }
          meiliSearchParams.attributesToHighlight = (searchContext === null || searchContext === void 0 ? void 0 : searchContext.attributesToHighlight) || [
            "*"
          ];
          var highlightPreTag = searchContext === null || searchContext === void 0 ? void 0 : searchContext.highlightPreTag;
          if (highlightPreTag) {
            meiliSearchParams.highlightPreTag = highlightPreTag;
          } else {
            meiliSearchParams.highlightPreTag = "__ais-highlight__";
          }
          var highlightPostTag = searchContext === null || searchContext === void 0 ? void 0 : searchContext.highlightPostTag;
          if (highlightPostTag) {
            meiliSearchParams.highlightPostTag = highlightPostTag;
          } else {
            meiliSearchParams.highlightPostTag = "__/ais-highlight__";
          }
          var placeholderSearch = searchContext.placeholderSearch;
          var query = searchContext.query;
          var pagination = searchContext.pagination;
          if (!placeholderSearch && query === "" || pagination.paginationTotalHits === 0) {
            meiliSearchParams.limit = 0;
          } else if (searchContext.finitePagination) {
            meiliSearchParams.limit = pagination.paginationTotalHits;
          } else {
            var limit = (pagination.page + 1) * pagination.hitsPerPage + 1;
            if (limit > pagination.paginationTotalHits) {
              meiliSearchParams.limit = pagination.paginationTotalHits;
            } else {
              meiliSearchParams.limit = limit;
            }
          }
          var sort = searchContext.sort;
          if (sort === null || sort === void 0 ? void 0 : sort.length) {
            meiliSearchParams.sort = [sort];
          }
          var geoSearchContext = createGeoSearchContext(searchContext);
          var geoRules = adaptGeoPointsRules(geoSearchContext);
          if (geoRules === null || geoRules === void 0 ? void 0 : geoRules.filter) {
            if (meiliSearchParams.filter) {
              meiliSearchParams.filter.unshift(geoRules.filter);
            } else {
              meiliSearchParams.filter = [geoRules.filter];
            }
          }
          return meiliSearchParams;
        }
        function adaptPagination(hits3, page, hitsPerPage) {
          if (hitsPerPage < 0) {
            throw new TypeError('Value too small for "hitsPerPage" parameter, expected integer between 0 and 9223372036854775807');
          }
          var start = page * hitsPerPage;
          return hits3.slice(start, start + hitsPerPage);
        }
        function stringifyValue(value) {
          if (typeof value === "string") {
            return value;
          } else if (value === void 0) {
            return JSON.stringify(null);
          } else {
            return JSON.stringify(value);
          }
        }
        function wrapValue(value) {
          if (Array.isArray(value)) {
            return value.map(function(elem) {
              return wrapValue(elem);
            });
          } else if (isPureObject(value)) {
            return Object.keys(value).reduce(function(nested, key2) {
              nested[key2] = wrapValue(value[key2]);
              return nested;
            }, {});
          } else {
            return { value: stringifyValue(value) };
          }
        }
        function adaptFormattedFields(hit) {
          if (!hit)
            return {};
          var _formattedResult = wrapValue(hit);
          var highlightedHit = {
            _highlightResult: _formattedResult,
            _snippetResult: _formattedResult
          };
          return highlightedHit;
        }
        function adaptGeoResponse(hits3) {
          for (var i2 = 0; i2 < hits3.length; i2++) {
            if (hits3[i2]._geo) {
              hits3[i2]._geoloc = {
                lat: hits3[i2]._geo.lat,
                lng: hits3[i2]._geo.lng
              };
              hits3[i2].objectID = "".concat(i2 + Math.random() * 1e6);
              delete hits3[i2]._geo;
            }
          }
          return hits3;
        }
        function adaptHits(hits3, searchContext, paginationContext) {
          var primaryKey = searchContext.primaryKey;
          var hitsPerPage = paginationContext.hitsPerPage, page = paginationContext.page;
          var paginatedHits = adaptPagination(hits3, page, hitsPerPage);
          var adaptedHits = paginatedHits.map(function(hit) {
            if (Object.keys(hit).length > 0) {
              var formattedHit = hit._formatted;
              hit._matchesPosition;
              var documentFields = __rest(hit, ["_formatted", "_matchesPosition"]);
              var adaptedHit = Object.assign(documentFields, adaptFormattedFields(formattedHit));
              if (primaryKey) {
                adaptedHit.objectID = hit[primaryKey];
              }
              return adaptedHit;
            }
            return hit;
          });
          adaptedHits = adaptGeoResponse(adaptedHits);
          return adaptedHits;
        }
        function adaptSearchResponse(searchResponse, searchContext) {
          var searchResponseOptionals = {};
          var facets = searchResponse.facetDistribution;
          var pagination = searchContext.pagination;
          var nbPages = ceiledDivision(searchResponse.hits.length, pagination.hitsPerPage);
          var hits3 = adaptHits(searchResponse.hits, searchContext, pagination);
          var estimatedTotalHits = searchResponse.estimatedTotalHits;
          var processingTimeMs = searchResponse.processingTimeMs;
          var query = searchResponse.query;
          var hitsPerPage = pagination.hitsPerPage, page = pagination.page;
          var adaptedSearchResponse = __assign({ index: searchContext.indexUid, hitsPerPage, page, facets, nbPages, nbHits: estimatedTotalHits, processingTimeMS: processingTimeMs, query, hits: hits3, params: "", exhaustiveNbHits: false }, searchResponseOptionals);
          return {
            results: [adaptedSearchResponse]
          };
        }
        function createPaginationContext(_a) {
          var paginationTotalHits = _a.paginationTotalHits, hitsPerPage = _a.hitsPerPage, page = _a.page;
          return {
            paginationTotalHits: paginationTotalHits != null ? paginationTotalHits : 200,
            hitsPerPage: hitsPerPage === void 0 ? 20 : hitsPerPage,
            page: page || 0
          };
        }
        function createSearchContext(searchRequest, options, defaultFacetDistribution) {
          var _a = searchRequest.indexName.split(":"), indexUid = _a[0], sortByArray = _a.slice(1);
          var instantSearchParams = searchRequest.params;
          var pagination = createPaginationContext({
            paginationTotalHits: options.paginationTotalHits,
            hitsPerPage: instantSearchParams === null || instantSearchParams === void 0 ? void 0 : instantSearchParams.hitsPerPage,
            page: instantSearchParams === null || instantSearchParams === void 0 ? void 0 : instantSearchParams.page
          });
          var searchContext = __assign(__assign(__assign({}, options), instantSearchParams), { sort: sortByArray.join(":") || "", indexUid, pagination, defaultFacetDistribution, placeholderSearch: options.placeholderSearch !== false, keepZeroFacets: !!options.keepZeroFacets, finitePagination: !!options.finitePagination });
          return searchContext;
        }
        function SearchCache(cache) {
          if (cache === void 0) {
            cache = {};
          }
          var searchCache = cache;
          return {
            getEntry: function(key2) {
              if (searchCache[key2]) {
                try {
                  return JSON.parse(searchCache[key2]);
                } catch (_2) {
                  return searchCache[key2];
                }
              }
              return void 0;
            },
            formatKey: function(components) {
              return stringifyArray(components);
            },
            setEntry: function(key2, searchResponse) {
              searchCache[key2] = JSON.stringify(searchResponse);
            }
          };
        }
        function cacheFirstFacetDistribution(defaultFacetDistribution, searchResponse) {
          if (searchResponse.query === "" && Object.keys(defaultFacetDistribution).length === 0) {
            return searchResponse.facetDistribution;
          }
          return defaultFacetDistribution;
        }
        var PACKAGE_VERSION = "0.8.0";
        var constructClientAgents = function(clientAgents) {
          if (clientAgents === void 0) {
            clientAgents = [];
          }
          var instantMeilisearchAgent = "Meilisearch instant-meilisearch (v".concat(PACKAGE_VERSION, ")");
          return clientAgents.concat(instantMeilisearchAgent);
        };
        function instantMeiliSearch2(hostUrl, apiKey, instantMeiliSearchOptions) {
          if (apiKey === void 0) {
            apiKey = "";
          }
          if (instantMeiliSearchOptions === void 0) {
            instantMeiliSearchOptions = {};
          }
          var searchResolver = SearchResolver(SearchCache());
          var defaultFacetDistribution = {};
          var clientAgents = constructClientAgents(instantMeiliSearchOptions.clientAgents);
          var meilisearchClient = new meilisearch_umd.MeiliSearch({
            host: hostUrl,
            apiKey,
            clientAgents
          });
          return {
            search: function(instantSearchRequests) {
              return __awaiter(this, void 0, void 0, function() {
                var searchRequest, searchContext, adaptedSearchRequest, searchResponse, adaptedSearchResponse, e_1;
                return __generator(this, function(_a) {
                  switch (_a.label) {
                    case 0:
                      _a.trys.push([0, 2, , 3]);
                      searchRequest = instantSearchRequests[0];
                      searchContext = createSearchContext(searchRequest, instantMeiliSearchOptions, defaultFacetDistribution);
                      adaptedSearchRequest = adaptSearchParams(searchContext);
                      return [
                        4,
                        searchResolver.searchResponse(searchContext, adaptedSearchRequest, meilisearchClient)
                      ];
                    case 1:
                      searchResponse = _a.sent();
                      defaultFacetDistribution = cacheFirstFacetDistribution(defaultFacetDistribution, searchResponse);
                      adaptedSearchResponse = adaptSearchResponse(searchResponse, searchContext);
                      return [2, adaptedSearchResponse];
                    case 2:
                      e_1 = _a.sent();
                      console.error(e_1);
                      throw new Error(e_1);
                    case 3:
                      return [2];
                  }
                });
              });
            },
            searchForFacetValues: function(_2) {
              return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(_a) {
                  switch (_a.label) {
                    case 0:
                      return [4, new Promise(function(resolve, reject) {
                        reject(new Error("SearchForFacetValues is not compatible with Meilisearch"));
                        resolve([]);
                      })];
                    case 1:
                      return [2, _a.sent()];
                  }
                });
              });
            }
          };
        }
        exports2.instantMeiliSearch = instantMeiliSearch2;
        Object.defineProperty(exports2, "__esModule", { value: true });
      });
    }
  });

  // node_modules/algoliasearch-helper/src/functions/merge.js
  var require_merge = __commonJS({
    "node_modules/algoliasearch-helper/src/functions/merge.js"(exports, module) {
      "use strict";
      function clone(value) {
        if (typeof value === "object" && value !== null) {
          return _merge(Array.isArray(value) ? [] : {}, value);
        }
        return value;
      }
      function isObjectOrArrayOrFunction(value) {
        return typeof value === "function" || Array.isArray(value) || Object.prototype.toString.call(value) === "[object Object]";
      }
      function _merge(target, source) {
        if (target === source) {
          return target;
        }
        for (var key2 in source) {
          if (!Object.prototype.hasOwnProperty.call(source, key2) || key2 === "__proto__") {
            continue;
          }
          var sourceVal = source[key2];
          var targetVal = target[key2];
          if (typeof targetVal !== "undefined" && typeof sourceVal === "undefined") {
            continue;
          }
          if (isObjectOrArrayOrFunction(targetVal) && isObjectOrArrayOrFunction(sourceVal)) {
            target[key2] = _merge(targetVal, sourceVal);
          } else {
            target[key2] = clone(sourceVal);
          }
        }
        return target;
      }
      function merge3(target) {
        if (!isObjectOrArrayOrFunction(target)) {
          target = {};
        }
        for (var i2 = 1, l2 = arguments.length; i2 < l2; i2++) {
          var source = arguments[i2];
          if (isObjectOrArrayOrFunction(source)) {
            _merge(target, source);
          }
        }
        return target;
      }
      module.exports = merge3;
    }
  });

  // node_modules/algoliasearch-helper/src/functions/defaultsPure.js
  var require_defaultsPure = __commonJS({
    "node_modules/algoliasearch-helper/src/functions/defaultsPure.js"(exports, module) {
      "use strict";
      module.exports = function defaultsPure() {
        var sources = Array.prototype.slice.call(arguments);
        return sources.reduceRight(function(acc, source) {
          Object.keys(Object(source)).forEach(function(key2) {
            if (source[key2] === void 0) {
              return;
            }
            if (acc[key2] !== void 0) {
              delete acc[key2];
            }
            acc[key2] = source[key2];
          });
          return acc;
        }, {});
      };
    }
  });

  // node_modules/algoliasearch-helper/src/functions/intersection.js
  var require_intersection = __commonJS({
    "node_modules/algoliasearch-helper/src/functions/intersection.js"(exports, module) {
      "use strict";
      function intersection(arr1, arr2) {
        return arr1.filter(function(value, index3) {
          return arr2.indexOf(value) > -1 && arr1.indexOf(value) === index3;
        });
      }
      module.exports = intersection;
    }
  });

  // node_modules/algoliasearch-helper/src/functions/find.js
  var require_find = __commonJS({
    "node_modules/algoliasearch-helper/src/functions/find.js"(exports, module) {
      "use strict";
      module.exports = function find2(array, comparator) {
        if (!Array.isArray(array)) {
          return void 0;
        }
        for (var i2 = 0; i2 < array.length; i2++) {
          if (comparator(array[i2])) {
            return array[i2];
          }
        }
      };
    }
  });

  // node_modules/algoliasearch-helper/src/functions/valToNumber.js
  var require_valToNumber = __commonJS({
    "node_modules/algoliasearch-helper/src/functions/valToNumber.js"(exports, module) {
      "use strict";
      function valToNumber(v2) {
        if (typeof v2 === "number") {
          return v2;
        } else if (typeof v2 === "string") {
          return parseFloat(v2);
        } else if (Array.isArray(v2)) {
          return v2.map(valToNumber);
        }
        throw new Error("The value should be a number, a parsable string or an array of those.");
      }
      module.exports = valToNumber;
    }
  });

  // node_modules/algoliasearch-helper/src/functions/omit.js
  var require_omit = __commonJS({
    "node_modules/algoliasearch-helper/src/functions/omit.js"(exports, module) {
      "use strict";
      function _objectWithoutPropertiesLoose6(source, excluded) {
        if (source === null)
          return {};
        var target = {};
        var sourceKeys = Object.keys(source);
        var key2;
        var i2;
        for (i2 = 0; i2 < sourceKeys.length; i2++) {
          key2 = sourceKeys[i2];
          if (excluded.indexOf(key2) >= 0)
            continue;
          target[key2] = source[key2];
        }
        return target;
      }
      module.exports = _objectWithoutPropertiesLoose6;
    }
  });

  // node_modules/algoliasearch-helper/src/functions/objectHasKeys.js
  var require_objectHasKeys = __commonJS({
    "node_modules/algoliasearch-helper/src/functions/objectHasKeys.js"(exports, module) {
      "use strict";
      function objectHasKeys(obj) {
        return obj && Object.keys(obj).length > 0;
      }
      module.exports = objectHasKeys;
    }
  });

  // node_modules/algoliasearch-helper/src/utils/isValidUserToken.js
  var require_isValidUserToken = __commonJS({
    "node_modules/algoliasearch-helper/src/utils/isValidUserToken.js"(exports, module) {
      "use strict";
      module.exports = function isValidUserToken(userToken) {
        if (userToken === null) {
          return false;
        }
        return /^[a-zA-Z0-9_-]{1,64}$/.test(userToken);
      };
    }
  });

  // node_modules/algoliasearch-helper/src/SearchParameters/RefinementList.js
  var require_RefinementList = __commonJS({
    "node_modules/algoliasearch-helper/src/SearchParameters/RefinementList.js"(exports, module) {
      "use strict";
      var defaultsPure = require_defaultsPure();
      var omit = require_omit();
      var objectHasKeys = require_objectHasKeys();
      var lib = {
        addRefinement: function addRefinement(refinementList, attribute, value) {
          if (lib.isRefined(refinementList, attribute, value)) {
            return refinementList;
          }
          var valueAsString = "" + value;
          var facetRefinement = !refinementList[attribute] ? [valueAsString] : refinementList[attribute].concat(valueAsString);
          var mod = {};
          mod[attribute] = facetRefinement;
          return defaultsPure({}, mod, refinementList);
        },
        removeRefinement: function removeRefinement(refinementList, attribute, value) {
          if (value === void 0) {
            return lib.clearRefinement(refinementList, function(v2, f2) {
              return attribute === f2;
            });
          }
          var valueAsString = "" + value;
          return lib.clearRefinement(refinementList, function(v2, f2) {
            return attribute === f2 && valueAsString === v2;
          });
        },
        toggleRefinement: function toggleRefinement(refinementList, attribute, value) {
          if (value === void 0)
            throw new Error("toggleRefinement should be used with a value");
          if (lib.isRefined(refinementList, attribute, value)) {
            return lib.removeRefinement(refinementList, attribute, value);
          }
          return lib.addRefinement(refinementList, attribute, value);
        },
        clearRefinement: function clearRefinement(refinementList, attribute, refinementType) {
          if (attribute === void 0) {
            if (!objectHasKeys(refinementList)) {
              return refinementList;
            }
            return {};
          } else if (typeof attribute === "string") {
            return omit(refinementList, [attribute]);
          } else if (typeof attribute === "function") {
            var hasChanged = false;
            var newRefinementList = Object.keys(refinementList).reduce(function(memo, key2) {
              var values = refinementList[key2] || [];
              var facetList = values.filter(function(value) {
                return !attribute(value, key2, refinementType);
              });
              if (facetList.length !== values.length) {
                hasChanged = true;
              }
              memo[key2] = facetList;
              return memo;
            }, {});
            if (hasChanged)
              return newRefinementList;
            return refinementList;
          }
        },
        isRefined: function isRefined(refinementList, attribute, refinementValue) {
          var containsRefinements = !!refinementList[attribute] && refinementList[attribute].length > 0;
          if (refinementValue === void 0 || !containsRefinements) {
            return containsRefinements;
          }
          var refinementValueAsString = "" + refinementValue;
          return refinementList[attribute].indexOf(refinementValueAsString) !== -1;
        }
      };
      module.exports = lib;
    }
  });

  // node_modules/algoliasearch-helper/src/SearchParameters/index.js
  var require_SearchParameters = __commonJS({
    "node_modules/algoliasearch-helper/src/SearchParameters/index.js"(exports, module) {
      "use strict";
      var merge3 = require_merge();
      var defaultsPure = require_defaultsPure();
      var intersection = require_intersection();
      var find2 = require_find();
      var valToNumber = require_valToNumber();
      var omit = require_omit();
      var objectHasKeys = require_objectHasKeys();
      var isValidUserToken = require_isValidUserToken();
      var RefinementList = require_RefinementList();
      function isEqualNumericRefinement(a2, b2) {
        if (Array.isArray(a2) && Array.isArray(b2)) {
          return a2.length === b2.length && a2.every(function(el, i2) {
            return isEqualNumericRefinement(b2[i2], el);
          });
        }
        return a2 === b2;
      }
      function findArray(array, searchedValue) {
        return find2(array, function(currentValue) {
          return isEqualNumericRefinement(currentValue, searchedValue);
        });
      }
      function SearchParameters(newParameters) {
        var params = newParameters ? SearchParameters._parseNumbers(newParameters) : {};
        if (params.userToken !== void 0 && !isValidUserToken(params.userToken)) {
          console.warn("[algoliasearch-helper] The `userToken` parameter is invalid. This can lead to wrong analytics.\n  - Format: [a-zA-Z0-9_-]{1,64}");
        }
        this.facets = params.facets || [];
        this.disjunctiveFacets = params.disjunctiveFacets || [];
        this.hierarchicalFacets = params.hierarchicalFacets || [];
        this.facetsRefinements = params.facetsRefinements || {};
        this.facetsExcludes = params.facetsExcludes || {};
        this.disjunctiveFacetsRefinements = params.disjunctiveFacetsRefinements || {};
        this.numericRefinements = params.numericRefinements || {};
        this.tagRefinements = params.tagRefinements || [];
        this.hierarchicalFacetsRefinements = params.hierarchicalFacetsRefinements || {};
        var self2 = this;
        Object.keys(params).forEach(function(paramName) {
          var isKeyKnown = SearchParameters.PARAMETERS.indexOf(paramName) !== -1;
          var isValueDefined = params[paramName] !== void 0;
          if (!isKeyKnown && isValueDefined) {
            self2[paramName] = params[paramName];
          }
        });
      }
      SearchParameters.PARAMETERS = Object.keys(new SearchParameters());
      SearchParameters._parseNumbers = function(partialState) {
        if (partialState instanceof SearchParameters)
          return partialState;
        var numbers = {};
        var numberKeys = [
          "aroundPrecision",
          "aroundRadius",
          "getRankingInfo",
          "minWordSizefor2Typos",
          "minWordSizefor1Typo",
          "page",
          "maxValuesPerFacet",
          "distinct",
          "minimumAroundRadius",
          "hitsPerPage",
          "minProximity"
        ];
        numberKeys.forEach(function(k2) {
          var value = partialState[k2];
          if (typeof value === "string") {
            var parsedValue = parseFloat(value);
            numbers[k2] = isNaN(parsedValue) ? value : parsedValue;
          }
        });
        if (Array.isArray(partialState.insideBoundingBox)) {
          numbers.insideBoundingBox = partialState.insideBoundingBox.map(function(geoRect) {
            if (Array.isArray(geoRect)) {
              return geoRect.map(function(value) {
                return parseFloat(value);
              });
            }
            return geoRect;
          });
        }
        if (partialState.numericRefinements) {
          var numericRefinements = {};
          Object.keys(partialState.numericRefinements).forEach(function(attribute) {
            var operators = partialState.numericRefinements[attribute] || {};
            numericRefinements[attribute] = {};
            Object.keys(operators).forEach(function(operator) {
              var values = operators[operator];
              var parsedValues = values.map(function(v2) {
                if (Array.isArray(v2)) {
                  return v2.map(function(vPrime) {
                    if (typeof vPrime === "string") {
                      return parseFloat(vPrime);
                    }
                    return vPrime;
                  });
                } else if (typeof v2 === "string") {
                  return parseFloat(v2);
                }
                return v2;
              });
              numericRefinements[attribute][operator] = parsedValues;
            });
          });
          numbers.numericRefinements = numericRefinements;
        }
        return merge3({}, partialState, numbers);
      };
      SearchParameters.make = function makeSearchParameters(newParameters) {
        var instance = new SearchParameters(newParameters);
        var hierarchicalFacets = newParameters.hierarchicalFacets || [];
        hierarchicalFacets.forEach(function(facet) {
          if (facet.rootPath) {
            var currentRefinement = instance.getHierarchicalRefinement(facet.name);
            if (currentRefinement.length > 0 && currentRefinement[0].indexOf(facet.rootPath) !== 0) {
              instance = instance.clearRefinements(facet.name);
            }
            currentRefinement = instance.getHierarchicalRefinement(facet.name);
            if (currentRefinement.length === 0) {
              instance = instance.toggleHierarchicalFacetRefinement(facet.name, facet.rootPath);
            }
          }
        });
        return instance;
      };
      SearchParameters.validate = function(currentState, parameters) {
        var params = parameters || {};
        if (currentState.tagFilters && params.tagRefinements && params.tagRefinements.length > 0) {
          return new Error("[Tags] Cannot switch from the managed tag API to the advanced API. It is probably an error, if it is really what you want, you should first clear the tags with clearTags method.");
        }
        if (currentState.tagRefinements.length > 0 && params.tagFilters) {
          return new Error("[Tags] Cannot switch from the advanced tag API to the managed API. It is probably an error, if it is not, you should first clear the tags with clearTags method.");
        }
        if (currentState.numericFilters && params.numericRefinements && objectHasKeys(params.numericRefinements)) {
          return new Error("[Numeric filters] Can't switch from the advanced to the managed API. It is probably an error, if this is really what you want, you have to first clear the numeric filters.");
        }
        if (objectHasKeys(currentState.numericRefinements) && params.numericFilters) {
          return new Error("[Numeric filters] Can't switch from the managed API to the advanced. It is probably an error, if this is really what you want, you have to first clear the numeric filters.");
        }
        return null;
      };
      SearchParameters.prototype = {
        constructor: SearchParameters,
        clearRefinements: function clearRefinements(attribute) {
          var patch = {
            numericRefinements: this._clearNumericRefinements(attribute),
            facetsRefinements: RefinementList.clearRefinement(this.facetsRefinements, attribute, "conjunctiveFacet"),
            facetsExcludes: RefinementList.clearRefinement(this.facetsExcludes, attribute, "exclude"),
            disjunctiveFacetsRefinements: RefinementList.clearRefinement(this.disjunctiveFacetsRefinements, attribute, "disjunctiveFacet"),
            hierarchicalFacetsRefinements: RefinementList.clearRefinement(this.hierarchicalFacetsRefinements, attribute, "hierarchicalFacet")
          };
          if (patch.numericRefinements === this.numericRefinements && patch.facetsRefinements === this.facetsRefinements && patch.facetsExcludes === this.facetsExcludes && patch.disjunctiveFacetsRefinements === this.disjunctiveFacetsRefinements && patch.hierarchicalFacetsRefinements === this.hierarchicalFacetsRefinements) {
            return this;
          }
          return this.setQueryParameters(patch);
        },
        clearTags: function clearTags() {
          if (this.tagFilters === void 0 && this.tagRefinements.length === 0)
            return this;
          return this.setQueryParameters({
            tagFilters: void 0,
            tagRefinements: []
          });
        },
        setIndex: function setIndex(index3) {
          if (index3 === this.index)
            return this;
          return this.setQueryParameters({
            index: index3
          });
        },
        setQuery: function setQuery(newQuery) {
          if (newQuery === this.query)
            return this;
          return this.setQueryParameters({
            query: newQuery
          });
        },
        setPage: function setPage(newPage) {
          if (newPage === this.page)
            return this;
          return this.setQueryParameters({
            page: newPage
          });
        },
        setFacets: function setFacets(facets) {
          return this.setQueryParameters({
            facets
          });
        },
        setDisjunctiveFacets: function setDisjunctiveFacets(facets) {
          return this.setQueryParameters({
            disjunctiveFacets: facets
          });
        },
        setHitsPerPage: function setHitsPerPage(n2) {
          if (this.hitsPerPage === n2)
            return this;
          return this.setQueryParameters({
            hitsPerPage: n2
          });
        },
        setTypoTolerance: function setTypoTolerance(typoTolerance) {
          if (this.typoTolerance === typoTolerance)
            return this;
          return this.setQueryParameters({
            typoTolerance
          });
        },
        addNumericRefinement: function(attribute, operator, v2) {
          var value = valToNumber(v2);
          if (this.isNumericRefined(attribute, operator, value))
            return this;
          var mod = merge3({}, this.numericRefinements);
          mod[attribute] = merge3({}, mod[attribute]);
          if (mod[attribute][operator]) {
            mod[attribute][operator] = mod[attribute][operator].slice();
            mod[attribute][operator].push(value);
          } else {
            mod[attribute][operator] = [value];
          }
          return this.setQueryParameters({
            numericRefinements: mod
          });
        },
        getConjunctiveRefinements: function(facetName) {
          if (!this.isConjunctiveFacet(facetName)) {
            return [];
          }
          return this.facetsRefinements[facetName] || [];
        },
        getDisjunctiveRefinements: function(facetName) {
          if (!this.isDisjunctiveFacet(facetName)) {
            return [];
          }
          return this.disjunctiveFacetsRefinements[facetName] || [];
        },
        getHierarchicalRefinement: function(facetName) {
          return this.hierarchicalFacetsRefinements[facetName] || [];
        },
        getExcludeRefinements: function(facetName) {
          if (!this.isConjunctiveFacet(facetName)) {
            return [];
          }
          return this.facetsExcludes[facetName] || [];
        },
        removeNumericRefinement: function(attribute, operator, paramValue) {
          if (paramValue !== void 0) {
            if (!this.isNumericRefined(attribute, operator, paramValue)) {
              return this;
            }
            return this.setQueryParameters({
              numericRefinements: this._clearNumericRefinements(function(value, key2) {
                return key2 === attribute && value.op === operator && isEqualNumericRefinement(value.val, valToNumber(paramValue));
              })
            });
          } else if (operator !== void 0) {
            if (!this.isNumericRefined(attribute, operator))
              return this;
            return this.setQueryParameters({
              numericRefinements: this._clearNumericRefinements(function(value, key2) {
                return key2 === attribute && value.op === operator;
              })
            });
          }
          if (!this.isNumericRefined(attribute))
            return this;
          return this.setQueryParameters({
            numericRefinements: this._clearNumericRefinements(function(value, key2) {
              return key2 === attribute;
            })
          });
        },
        getNumericRefinements: function(facetName) {
          return this.numericRefinements[facetName] || {};
        },
        getNumericRefinement: function(attribute, operator) {
          return this.numericRefinements[attribute] && this.numericRefinements[attribute][operator];
        },
        _clearNumericRefinements: function _clearNumericRefinements(attribute) {
          if (attribute === void 0) {
            if (!objectHasKeys(this.numericRefinements)) {
              return this.numericRefinements;
            }
            return {};
          } else if (typeof attribute === "string") {
            return omit(this.numericRefinements, [attribute]);
          } else if (typeof attribute === "function") {
            var hasChanged = false;
            var numericRefinements = this.numericRefinements;
            var newNumericRefinements = Object.keys(numericRefinements).reduce(function(memo, key2) {
              var operators = numericRefinements[key2];
              var operatorList = {};
              operators = operators || {};
              Object.keys(operators).forEach(function(operator) {
                var values = operators[operator] || [];
                var outValues = [];
                values.forEach(function(value) {
                  var predicateResult = attribute({ val: value, op: operator }, key2, "numeric");
                  if (!predicateResult)
                    outValues.push(value);
                });
                if (outValues.length !== values.length) {
                  hasChanged = true;
                }
                operatorList[operator] = outValues;
              });
              memo[key2] = operatorList;
              return memo;
            }, {});
            if (hasChanged)
              return newNumericRefinements;
            return this.numericRefinements;
          }
        },
        addFacet: function addFacet(facet) {
          if (this.isConjunctiveFacet(facet)) {
            return this;
          }
          return this.setQueryParameters({
            facets: this.facets.concat([facet])
          });
        },
        addDisjunctiveFacet: function addDisjunctiveFacet(facet) {
          if (this.isDisjunctiveFacet(facet)) {
            return this;
          }
          return this.setQueryParameters({
            disjunctiveFacets: this.disjunctiveFacets.concat([facet])
          });
        },
        addHierarchicalFacet: function addHierarchicalFacet(hierarchicalFacet) {
          if (this.isHierarchicalFacet(hierarchicalFacet.name)) {
            throw new Error("Cannot declare two hierarchical facets with the same name: `" + hierarchicalFacet.name + "`");
          }
          return this.setQueryParameters({
            hierarchicalFacets: this.hierarchicalFacets.concat([hierarchicalFacet])
          });
        },
        addFacetRefinement: function addFacetRefinement(facet, value) {
          if (!this.isConjunctiveFacet(facet)) {
            throw new Error(facet + " is not defined in the facets attribute of the helper configuration");
          }
          if (RefinementList.isRefined(this.facetsRefinements, facet, value))
            return this;
          return this.setQueryParameters({
            facetsRefinements: RefinementList.addRefinement(this.facetsRefinements, facet, value)
          });
        },
        addExcludeRefinement: function addExcludeRefinement(facet, value) {
          if (!this.isConjunctiveFacet(facet)) {
            throw new Error(facet + " is not defined in the facets attribute of the helper configuration");
          }
          if (RefinementList.isRefined(this.facetsExcludes, facet, value))
            return this;
          return this.setQueryParameters({
            facetsExcludes: RefinementList.addRefinement(this.facetsExcludes, facet, value)
          });
        },
        addDisjunctiveFacetRefinement: function addDisjunctiveFacetRefinement(facet, value) {
          if (!this.isDisjunctiveFacet(facet)) {
            throw new Error(facet + " is not defined in the disjunctiveFacets attribute of the helper configuration");
          }
          if (RefinementList.isRefined(this.disjunctiveFacetsRefinements, facet, value))
            return this;
          return this.setQueryParameters({
            disjunctiveFacetsRefinements: RefinementList.addRefinement(this.disjunctiveFacetsRefinements, facet, value)
          });
        },
        addTagRefinement: function addTagRefinement(tag) {
          if (this.isTagRefined(tag))
            return this;
          var modification = {
            tagRefinements: this.tagRefinements.concat(tag)
          };
          return this.setQueryParameters(modification);
        },
        removeFacet: function removeFacet(facet) {
          if (!this.isConjunctiveFacet(facet)) {
            return this;
          }
          return this.clearRefinements(facet).setQueryParameters({
            facets: this.facets.filter(function(f2) {
              return f2 !== facet;
            })
          });
        },
        removeDisjunctiveFacet: function removeDisjunctiveFacet(facet) {
          if (!this.isDisjunctiveFacet(facet)) {
            return this;
          }
          return this.clearRefinements(facet).setQueryParameters({
            disjunctiveFacets: this.disjunctiveFacets.filter(function(f2) {
              return f2 !== facet;
            })
          });
        },
        removeHierarchicalFacet: function removeHierarchicalFacet(facet) {
          if (!this.isHierarchicalFacet(facet)) {
            return this;
          }
          return this.clearRefinements(facet).setQueryParameters({
            hierarchicalFacets: this.hierarchicalFacets.filter(function(f2) {
              return f2.name !== facet;
            })
          });
        },
        removeFacetRefinement: function removeFacetRefinement(facet, value) {
          if (!this.isConjunctiveFacet(facet)) {
            throw new Error(facet + " is not defined in the facets attribute of the helper configuration");
          }
          if (!RefinementList.isRefined(this.facetsRefinements, facet, value))
            return this;
          return this.setQueryParameters({
            facetsRefinements: RefinementList.removeRefinement(this.facetsRefinements, facet, value)
          });
        },
        removeExcludeRefinement: function removeExcludeRefinement(facet, value) {
          if (!this.isConjunctiveFacet(facet)) {
            throw new Error(facet + " is not defined in the facets attribute of the helper configuration");
          }
          if (!RefinementList.isRefined(this.facetsExcludes, facet, value))
            return this;
          return this.setQueryParameters({
            facetsExcludes: RefinementList.removeRefinement(this.facetsExcludes, facet, value)
          });
        },
        removeDisjunctiveFacetRefinement: function removeDisjunctiveFacetRefinement(facet, value) {
          if (!this.isDisjunctiveFacet(facet)) {
            throw new Error(facet + " is not defined in the disjunctiveFacets attribute of the helper configuration");
          }
          if (!RefinementList.isRefined(this.disjunctiveFacetsRefinements, facet, value))
            return this;
          return this.setQueryParameters({
            disjunctiveFacetsRefinements: RefinementList.removeRefinement(this.disjunctiveFacetsRefinements, facet, value)
          });
        },
        removeTagRefinement: function removeTagRefinement(tag) {
          if (!this.isTagRefined(tag))
            return this;
          var modification = {
            tagRefinements: this.tagRefinements.filter(function(t2) {
              return t2 !== tag;
            })
          };
          return this.setQueryParameters(modification);
        },
        toggleRefinement: function toggleRefinement(facet, value) {
          return this.toggleFacetRefinement(facet, value);
        },
        toggleFacetRefinement: function toggleFacetRefinement(facet, value) {
          if (this.isHierarchicalFacet(facet)) {
            return this.toggleHierarchicalFacetRefinement(facet, value);
          } else if (this.isConjunctiveFacet(facet)) {
            return this.toggleConjunctiveFacetRefinement(facet, value);
          } else if (this.isDisjunctiveFacet(facet)) {
            return this.toggleDisjunctiveFacetRefinement(facet, value);
          }
          throw new Error("Cannot refine the undeclared facet " + facet + "; it should be added to the helper options facets, disjunctiveFacets or hierarchicalFacets");
        },
        toggleConjunctiveFacetRefinement: function toggleConjunctiveFacetRefinement(facet, value) {
          if (!this.isConjunctiveFacet(facet)) {
            throw new Error(facet + " is not defined in the facets attribute of the helper configuration");
          }
          return this.setQueryParameters({
            facetsRefinements: RefinementList.toggleRefinement(this.facetsRefinements, facet, value)
          });
        },
        toggleExcludeFacetRefinement: function toggleExcludeFacetRefinement(facet, value) {
          if (!this.isConjunctiveFacet(facet)) {
            throw new Error(facet + " is not defined in the facets attribute of the helper configuration");
          }
          return this.setQueryParameters({
            facetsExcludes: RefinementList.toggleRefinement(this.facetsExcludes, facet, value)
          });
        },
        toggleDisjunctiveFacetRefinement: function toggleDisjunctiveFacetRefinement(facet, value) {
          if (!this.isDisjunctiveFacet(facet)) {
            throw new Error(facet + " is not defined in the disjunctiveFacets attribute of the helper configuration");
          }
          return this.setQueryParameters({
            disjunctiveFacetsRefinements: RefinementList.toggleRefinement(this.disjunctiveFacetsRefinements, facet, value)
          });
        },
        toggleHierarchicalFacetRefinement: function toggleHierarchicalFacetRefinement(facet, value) {
          if (!this.isHierarchicalFacet(facet)) {
            throw new Error(facet + " is not defined in the hierarchicalFacets attribute of the helper configuration");
          }
          var separator = this._getHierarchicalFacetSeparator(this.getHierarchicalFacetByName(facet));
          var mod = {};
          var upOneOrMultipleLevel = this.hierarchicalFacetsRefinements[facet] !== void 0 && this.hierarchicalFacetsRefinements[facet].length > 0 && (this.hierarchicalFacetsRefinements[facet][0] === value || this.hierarchicalFacetsRefinements[facet][0].indexOf(value + separator) === 0);
          if (upOneOrMultipleLevel) {
            if (value.indexOf(separator) === -1) {
              mod[facet] = [];
            } else {
              mod[facet] = [value.slice(0, value.lastIndexOf(separator))];
            }
          } else {
            mod[facet] = [value];
          }
          return this.setQueryParameters({
            hierarchicalFacetsRefinements: defaultsPure({}, mod, this.hierarchicalFacetsRefinements)
          });
        },
        addHierarchicalFacetRefinement: function(facet, path) {
          if (this.isHierarchicalFacetRefined(facet)) {
            throw new Error(facet + " is already refined.");
          }
          if (!this.isHierarchicalFacet(facet)) {
            throw new Error(facet + " is not defined in the hierarchicalFacets attribute of the helper configuration.");
          }
          var mod = {};
          mod[facet] = [path];
          return this.setQueryParameters({
            hierarchicalFacetsRefinements: defaultsPure({}, mod, this.hierarchicalFacetsRefinements)
          });
        },
        removeHierarchicalFacetRefinement: function(facet) {
          if (!this.isHierarchicalFacetRefined(facet)) {
            return this;
          }
          var mod = {};
          mod[facet] = [];
          return this.setQueryParameters({
            hierarchicalFacetsRefinements: defaultsPure({}, mod, this.hierarchicalFacetsRefinements)
          });
        },
        toggleTagRefinement: function toggleTagRefinement(tag) {
          if (this.isTagRefined(tag)) {
            return this.removeTagRefinement(tag);
          }
          return this.addTagRefinement(tag);
        },
        isDisjunctiveFacet: function(facet) {
          return this.disjunctiveFacets.indexOf(facet) > -1;
        },
        isHierarchicalFacet: function(facetName) {
          return this.getHierarchicalFacetByName(facetName) !== void 0;
        },
        isConjunctiveFacet: function(facet) {
          return this.facets.indexOf(facet) > -1;
        },
        isFacetRefined: function isFacetRefined(facet, value) {
          if (!this.isConjunctiveFacet(facet)) {
            return false;
          }
          return RefinementList.isRefined(this.facetsRefinements, facet, value);
        },
        isExcludeRefined: function isExcludeRefined(facet, value) {
          if (!this.isConjunctiveFacet(facet)) {
            return false;
          }
          return RefinementList.isRefined(this.facetsExcludes, facet, value);
        },
        isDisjunctiveFacetRefined: function isDisjunctiveFacetRefined(facet, value) {
          if (!this.isDisjunctiveFacet(facet)) {
            return false;
          }
          return RefinementList.isRefined(this.disjunctiveFacetsRefinements, facet, value);
        },
        isHierarchicalFacetRefined: function isHierarchicalFacetRefined(facet, value) {
          if (!this.isHierarchicalFacet(facet)) {
            return false;
          }
          var refinements = this.getHierarchicalRefinement(facet);
          if (!value) {
            return refinements.length > 0;
          }
          return refinements.indexOf(value) !== -1;
        },
        isNumericRefined: function isNumericRefined(attribute, operator, value) {
          if (value === void 0 && operator === void 0) {
            return !!this.numericRefinements[attribute];
          }
          var isOperatorDefined = this.numericRefinements[attribute] && this.numericRefinements[attribute][operator] !== void 0;
          if (value === void 0 || !isOperatorDefined) {
            return isOperatorDefined;
          }
          var parsedValue = valToNumber(value);
          var isAttributeValueDefined = findArray(this.numericRefinements[attribute][operator], parsedValue) !== void 0;
          return isOperatorDefined && isAttributeValueDefined;
        },
        isTagRefined: function isTagRefined(tag) {
          return this.tagRefinements.indexOf(tag) !== -1;
        },
        getRefinedDisjunctiveFacets: function getRefinedDisjunctiveFacets() {
          var self2 = this;
          var disjunctiveNumericRefinedFacets = intersection(Object.keys(this.numericRefinements).filter(function(facet) {
            return Object.keys(self2.numericRefinements[facet]).length > 0;
          }), this.disjunctiveFacets);
          return Object.keys(this.disjunctiveFacetsRefinements).filter(function(facet) {
            return self2.disjunctiveFacetsRefinements[facet].length > 0;
          }).concat(disjunctiveNumericRefinedFacets).concat(this.getRefinedHierarchicalFacets());
        },
        getRefinedHierarchicalFacets: function getRefinedHierarchicalFacets() {
          var self2 = this;
          return intersection(this.hierarchicalFacets.map(function(facet) {
            return facet.name;
          }), Object.keys(this.hierarchicalFacetsRefinements).filter(function(facet) {
            return self2.hierarchicalFacetsRefinements[facet].length > 0;
          }));
        },
        getUnrefinedDisjunctiveFacets: function() {
          var refinedFacets = this.getRefinedDisjunctiveFacets();
          return this.disjunctiveFacets.filter(function(f2) {
            return refinedFacets.indexOf(f2) === -1;
          });
        },
        managedParameters: [
          "index",
          "facets",
          "disjunctiveFacets",
          "facetsRefinements",
          "hierarchicalFacets",
          "facetsExcludes",
          "disjunctiveFacetsRefinements",
          "numericRefinements",
          "tagRefinements",
          "hierarchicalFacetsRefinements"
        ],
        getQueryParams: function getQueryParams() {
          var managedParameters = this.managedParameters;
          var queryParams = {};
          var self2 = this;
          Object.keys(this).forEach(function(paramName) {
            var paramValue = self2[paramName];
            if (managedParameters.indexOf(paramName) === -1 && paramValue !== void 0) {
              queryParams[paramName] = paramValue;
            }
          });
          return queryParams;
        },
        setQueryParameter: function setParameter(parameter, value) {
          if (this[parameter] === value)
            return this;
          var modification = {};
          modification[parameter] = value;
          return this.setQueryParameters(modification);
        },
        setQueryParameters: function setQueryParameters(params) {
          if (!params)
            return this;
          var error = SearchParameters.validate(this, params);
          if (error) {
            throw error;
          }
          var self2 = this;
          var nextWithNumbers = SearchParameters._parseNumbers(params);
          var previousPlainObject = Object.keys(this).reduce(function(acc, key2) {
            acc[key2] = self2[key2];
            return acc;
          }, {});
          var nextPlainObject = Object.keys(nextWithNumbers).reduce(function(previous, key2) {
            var isPreviousValueDefined = previous[key2] !== void 0;
            var isNextValueDefined = nextWithNumbers[key2] !== void 0;
            if (isPreviousValueDefined && !isNextValueDefined) {
              return omit(previous, [key2]);
            }
            if (isNextValueDefined) {
              previous[key2] = nextWithNumbers[key2];
            }
            return previous;
          }, previousPlainObject);
          return new this.constructor(nextPlainObject);
        },
        resetPage: function() {
          if (this.page === void 0) {
            return this;
          }
          return this.setPage(0);
        },
        _getHierarchicalFacetSortBy: function(hierarchicalFacet) {
          return hierarchicalFacet.sortBy || ["isRefined:desc", "name:asc"];
        },
        _getHierarchicalFacetSeparator: function(hierarchicalFacet) {
          return hierarchicalFacet.separator || " > ";
        },
        _getHierarchicalRootPath: function(hierarchicalFacet) {
          return hierarchicalFacet.rootPath || null;
        },
        _getHierarchicalShowParentLevel: function(hierarchicalFacet) {
          if (typeof hierarchicalFacet.showParentLevel === "boolean") {
            return hierarchicalFacet.showParentLevel;
          }
          return true;
        },
        getHierarchicalFacetByName: function(hierarchicalFacetName) {
          return find2(this.hierarchicalFacets, function(f2) {
            return f2.name === hierarchicalFacetName;
          });
        },
        getHierarchicalFacetBreadcrumb: function(facetName) {
          if (!this.isHierarchicalFacet(facetName)) {
            return [];
          }
          var refinement = this.getHierarchicalRefinement(facetName)[0];
          if (!refinement)
            return [];
          var separator = this._getHierarchicalFacetSeparator(this.getHierarchicalFacetByName(facetName));
          var path = refinement.split(separator);
          return path.map(function(part) {
            return part.trim();
          });
        },
        toString: function() {
          return JSON.stringify(this, null, 2);
        }
      };
      module.exports = SearchParameters;
    }
  });

  // node_modules/algoliasearch-helper/src/functions/orderBy.js
  var require_orderBy = __commonJS({
    "node_modules/algoliasearch-helper/src/functions/orderBy.js"(exports, module) {
      "use strict";
      function compareAscending(value, other) {
        if (value !== other) {
          var valIsDefined = value !== void 0;
          var valIsNull = value === null;
          var othIsDefined = other !== void 0;
          var othIsNull = other === null;
          if (!othIsNull && value > other || valIsNull && othIsDefined || !valIsDefined) {
            return 1;
          }
          if (!valIsNull && value < other || othIsNull && valIsDefined || !othIsDefined) {
            return -1;
          }
        }
        return 0;
      }
      function orderBy(collection, iteratees, orders) {
        if (!Array.isArray(collection)) {
          return [];
        }
        if (!Array.isArray(orders)) {
          orders = [];
        }
        var result = collection.map(function(value, index3) {
          return {
            criteria: iteratees.map(function(iteratee) {
              return value[iteratee];
            }),
            index: index3,
            value
          };
        });
        result.sort(function comparer(object, other) {
          var index3 = -1;
          while (++index3 < object.criteria.length) {
            var res = compareAscending(object.criteria[index3], other.criteria[index3]);
            if (res) {
              if (index3 >= orders.length) {
                return res;
              }
              if (orders[index3] === "desc") {
                return -res;
              }
              return res;
            }
          }
          return object.index - other.index;
        });
        return result.map(function(res) {
          return res.value;
        });
      }
      module.exports = orderBy;
    }
  });

  // node_modules/algoliasearch-helper/src/functions/compact.js
  var require_compact = __commonJS({
    "node_modules/algoliasearch-helper/src/functions/compact.js"(exports, module) {
      "use strict";
      module.exports = function compact(array) {
        if (!Array.isArray(array)) {
          return [];
        }
        return array.filter(Boolean);
      };
    }
  });

  // node_modules/algoliasearch-helper/src/functions/findIndex.js
  var require_findIndex = __commonJS({
    "node_modules/algoliasearch-helper/src/functions/findIndex.js"(exports, module) {
      "use strict";
      module.exports = function find2(array, comparator) {
        if (!Array.isArray(array)) {
          return -1;
        }
        for (var i2 = 0; i2 < array.length; i2++) {
          if (comparator(array[i2])) {
            return i2;
          }
        }
        return -1;
      };
    }
  });

  // node_modules/algoliasearch-helper/src/functions/formatSort.js
  var require_formatSort = __commonJS({
    "node_modules/algoliasearch-helper/src/functions/formatSort.js"(exports, module) {
      "use strict";
      var find2 = require_find();
      module.exports = function formatSort(sortBy, defaults) {
        var defaultInstructions = (defaults || []).map(function(sort) {
          return sort.split(":");
        });
        return sortBy.reduce(function preparePredicate(out, sort) {
          var sortInstruction = sort.split(":");
          var matchingDefault = find2(defaultInstructions, function(defaultInstruction) {
            return defaultInstruction[0] === sortInstruction[0];
          });
          if (sortInstruction.length > 1 || !matchingDefault) {
            out[0].push(sortInstruction[0]);
            out[1].push(sortInstruction[1]);
            return out;
          }
          out[0].push(matchingDefault[0]);
          out[1].push(matchingDefault[1]);
          return out;
        }, [[], []]);
      };
    }
  });

  // node_modules/algoliasearch-helper/src/functions/escapeFacetValue.js
  var require_escapeFacetValue = __commonJS({
    "node_modules/algoliasearch-helper/src/functions/escapeFacetValue.js"(exports, module) {
      "use strict";
      function escapeFacetValue(value) {
        if (typeof value !== "string")
          return value;
        return String(value).replace(/^-/, "\\-");
      }
      function unescapeFacetValue(value) {
        if (typeof value !== "string")
          return value;
        return value.replace(/^\\-/, "-");
      }
      module.exports = {
        escapeFacetValue,
        unescapeFacetValue
      };
    }
  });

  // node_modules/algoliasearch-helper/src/SearchResults/generate-hierarchical-tree.js
  var require_generate_hierarchical_tree = __commonJS({
    "node_modules/algoliasearch-helper/src/SearchResults/generate-hierarchical-tree.js"(exports, module) {
      "use strict";
      module.exports = generateTrees;
      var orderBy = require_orderBy();
      var find2 = require_find();
      var prepareHierarchicalFacetSortBy = require_formatSort();
      var fv = require_escapeFacetValue();
      var escapeFacetValue = fv.escapeFacetValue;
      var unescapeFacetValue = fv.unescapeFacetValue;
      function generateTrees(state) {
        return function generate(hierarchicalFacetResult, hierarchicalFacetIndex) {
          var hierarchicalFacet = state.hierarchicalFacets[hierarchicalFacetIndex];
          var hierarchicalFacetRefinement = state.hierarchicalFacetsRefinements[hierarchicalFacet.name] && state.hierarchicalFacetsRefinements[hierarchicalFacet.name][0] || "";
          var hierarchicalSeparator = state._getHierarchicalFacetSeparator(hierarchicalFacet);
          var hierarchicalRootPath = state._getHierarchicalRootPath(hierarchicalFacet);
          var hierarchicalShowParentLevel = state._getHierarchicalShowParentLevel(hierarchicalFacet);
          var sortBy = prepareHierarchicalFacetSortBy(state._getHierarchicalFacetSortBy(hierarchicalFacet));
          var rootExhaustive = hierarchicalFacetResult.every(function(facetResult) {
            return facetResult.exhaustive;
          });
          var generateTreeFn = generateHierarchicalTree(sortBy, hierarchicalSeparator, hierarchicalRootPath, hierarchicalShowParentLevel, hierarchicalFacetRefinement);
          var results = hierarchicalFacetResult;
          if (hierarchicalRootPath) {
            results = hierarchicalFacetResult.slice(hierarchicalRootPath.split(hierarchicalSeparator).length);
          }
          return results.reduce(generateTreeFn, {
            name: state.hierarchicalFacets[hierarchicalFacetIndex].name,
            count: null,
            isRefined: true,
            path: null,
            escapedValue: null,
            exhaustive: rootExhaustive,
            data: null
          });
        };
      }
      function generateHierarchicalTree(sortBy, hierarchicalSeparator, hierarchicalRootPath, hierarchicalShowParentLevel, currentRefinement) {
        return function generateTree(hierarchicalTree, hierarchicalFacetResult, currentHierarchicalLevel) {
          var parent = hierarchicalTree;
          if (currentHierarchicalLevel > 0) {
            var level = 0;
            parent = hierarchicalTree;
            while (level < currentHierarchicalLevel) {
              var data = parent && Array.isArray(parent.data) ? parent.data : [];
              parent = find2(data, function(subtree) {
                return subtree.isRefined;
              });
              level++;
            }
          }
          if (parent) {
            var picked = Object.keys(hierarchicalFacetResult.data).map(function(facetValue) {
              return [facetValue, hierarchicalFacetResult.data[facetValue]];
            }).filter(function(tuple) {
              var facetValue = tuple[0];
              return onlyMatchingTree(facetValue, parent.path || hierarchicalRootPath, currentRefinement, hierarchicalSeparator, hierarchicalRootPath, hierarchicalShowParentLevel);
            });
            parent.data = orderBy(picked.map(function(tuple) {
              var facetValue = tuple[0];
              var facetCount = tuple[1];
              return format(facetCount, facetValue, hierarchicalSeparator, unescapeFacetValue(currentRefinement), hierarchicalFacetResult.exhaustive);
            }), sortBy[0], sortBy[1]);
          }
          return hierarchicalTree;
        };
      }
      function onlyMatchingTree(facetValue, parentPath, currentRefinement, hierarchicalSeparator, hierarchicalRootPath, hierarchicalShowParentLevel) {
        if (hierarchicalRootPath && (facetValue.indexOf(hierarchicalRootPath) !== 0 || hierarchicalRootPath === facetValue)) {
          return false;
        }
        return !hierarchicalRootPath && facetValue.indexOf(hierarchicalSeparator) === -1 || hierarchicalRootPath && facetValue.split(hierarchicalSeparator).length - hierarchicalRootPath.split(hierarchicalSeparator).length === 1 || facetValue.indexOf(hierarchicalSeparator) === -1 && currentRefinement.indexOf(hierarchicalSeparator) === -1 || currentRefinement.indexOf(facetValue) === 0 || facetValue.indexOf(parentPath + hierarchicalSeparator) === 0 && (hierarchicalShowParentLevel || facetValue.indexOf(currentRefinement) === 0);
      }
      function format(facetCount, facetValue, hierarchicalSeparator, currentRefinement, exhaustive) {
        var parts = facetValue.split(hierarchicalSeparator);
        return {
          name: parts[parts.length - 1].trim(),
          path: facetValue,
          escapedValue: escapeFacetValue(facetValue),
          count: facetCount,
          isRefined: currentRefinement === facetValue || currentRefinement.indexOf(facetValue + hierarchicalSeparator) === 0,
          exhaustive,
          data: null
        };
      }
    }
  });

  // node_modules/algoliasearch-helper/src/SearchResults/index.js
  var require_SearchResults = __commonJS({
    "node_modules/algoliasearch-helper/src/SearchResults/index.js"(exports, module) {
      "use strict";
      var merge3 = require_merge();
      var defaultsPure = require_defaultsPure();
      var orderBy = require_orderBy();
      var compact = require_compact();
      var find2 = require_find();
      var findIndex2 = require_findIndex();
      var formatSort = require_formatSort();
      var fv = require_escapeFacetValue();
      var escapeFacetValue = fv.escapeFacetValue;
      var unescapeFacetValue = fv.unescapeFacetValue;
      var generateHierarchicalTree = require_generate_hierarchical_tree();
      function getIndices(attributes) {
        var indices = {};
        attributes.forEach(function(val, idx) {
          indices[val] = idx;
        });
        return indices;
      }
      function assignFacetStats(dest, facetStats, key2) {
        if (facetStats && facetStats[key2]) {
          dest.stats = facetStats[key2];
        }
      }
      function findMatchingHierarchicalFacetFromAttributeName(hierarchicalFacets, hierarchicalAttributeName) {
        return find2(hierarchicalFacets, function facetKeyMatchesAttribute(hierarchicalFacet) {
          var facetNames = hierarchicalFacet.attributes || [];
          return facetNames.indexOf(hierarchicalAttributeName) > -1;
        });
      }
      function SearchResults(state, results, options) {
        var mainSubResponse = results[0];
        this._rawResults = results;
        var self2 = this;
        Object.keys(mainSubResponse).forEach(function(key2) {
          self2[key2] = mainSubResponse[key2];
        });
        Object.keys(options || {}).forEach(function(key2) {
          self2[key2] = options[key2];
        });
        this.processingTimeMS = results.reduce(function(sum, result) {
          return result.processingTimeMS === void 0 ? sum : sum + result.processingTimeMS;
        }, 0);
        this.disjunctiveFacets = [];
        this.hierarchicalFacets = state.hierarchicalFacets.map(function initFutureTree() {
          return [];
        });
        this.facets = [];
        var disjunctiveFacets = state.getRefinedDisjunctiveFacets();
        var facetsIndices = getIndices(state.facets);
        var disjunctiveFacetsIndices = getIndices(state.disjunctiveFacets);
        var nextDisjunctiveResult = 1;
        var mainFacets = mainSubResponse.facets || {};
        Object.keys(mainFacets).forEach(function(facetKey) {
          var facetValueObject = mainFacets[facetKey];
          var hierarchicalFacet = findMatchingHierarchicalFacetFromAttributeName(state.hierarchicalFacets, facetKey);
          if (hierarchicalFacet) {
            var facetIndex = hierarchicalFacet.attributes.indexOf(facetKey);
            var idxAttributeName = findIndex2(state.hierarchicalFacets, function(f2) {
              return f2.name === hierarchicalFacet.name;
            });
            self2.hierarchicalFacets[idxAttributeName][facetIndex] = {
              attribute: facetKey,
              data: facetValueObject,
              exhaustive: mainSubResponse.exhaustiveFacetsCount
            };
          } else {
            var isFacetDisjunctive = state.disjunctiveFacets.indexOf(facetKey) !== -1;
            var isFacetConjunctive = state.facets.indexOf(facetKey) !== -1;
            var position;
            if (isFacetDisjunctive) {
              position = disjunctiveFacetsIndices[facetKey];
              self2.disjunctiveFacets[position] = {
                name: facetKey,
                data: facetValueObject,
                exhaustive: mainSubResponse.exhaustiveFacetsCount
              };
              assignFacetStats(self2.disjunctiveFacets[position], mainSubResponse.facets_stats, facetKey);
            }
            if (isFacetConjunctive) {
              position = facetsIndices[facetKey];
              self2.facets[position] = {
                name: facetKey,
                data: facetValueObject,
                exhaustive: mainSubResponse.exhaustiveFacetsCount
              };
              assignFacetStats(self2.facets[position], mainSubResponse.facets_stats, facetKey);
            }
          }
        });
        this.hierarchicalFacets = compact(this.hierarchicalFacets);
        disjunctiveFacets.forEach(function(disjunctiveFacet) {
          var result = results[nextDisjunctiveResult];
          var facets = result && result.facets ? result.facets : {};
          var hierarchicalFacet = state.getHierarchicalFacetByName(disjunctiveFacet);
          Object.keys(facets).forEach(function(dfacet) {
            var facetResults = facets[dfacet];
            var position;
            if (hierarchicalFacet) {
              position = findIndex2(state.hierarchicalFacets, function(f2) {
                return f2.name === hierarchicalFacet.name;
              });
              var attributeIndex = findIndex2(self2.hierarchicalFacets[position], function(f2) {
                return f2.attribute === dfacet;
              });
              if (attributeIndex === -1) {
                return;
              }
              self2.hierarchicalFacets[position][attributeIndex].data = merge3({}, self2.hierarchicalFacets[position][attributeIndex].data, facetResults);
            } else {
              position = disjunctiveFacetsIndices[dfacet];
              var dataFromMainRequest = mainSubResponse.facets && mainSubResponse.facets[dfacet] || {};
              self2.disjunctiveFacets[position] = {
                name: dfacet,
                data: defaultsPure({}, facetResults, dataFromMainRequest),
                exhaustive: result.exhaustiveFacetsCount
              };
              assignFacetStats(self2.disjunctiveFacets[position], result.facets_stats, dfacet);
              if (state.disjunctiveFacetsRefinements[dfacet]) {
                state.disjunctiveFacetsRefinements[dfacet].forEach(function(refinementValue) {
                  if (!self2.disjunctiveFacets[position].data[refinementValue] && state.disjunctiveFacetsRefinements[dfacet].indexOf(unescapeFacetValue(refinementValue)) > -1) {
                    self2.disjunctiveFacets[position].data[refinementValue] = 0;
                  }
                });
              }
            }
          });
          nextDisjunctiveResult++;
        });
        state.getRefinedHierarchicalFacets().forEach(function(refinedFacet) {
          var hierarchicalFacet = state.getHierarchicalFacetByName(refinedFacet);
          var separator = state._getHierarchicalFacetSeparator(hierarchicalFacet);
          var currentRefinement = state.getHierarchicalRefinement(refinedFacet);
          if (currentRefinement.length === 0 || currentRefinement[0].split(separator).length < 2) {
            return;
          }
          results.slice(nextDisjunctiveResult).forEach(function(result) {
            var facets = result && result.facets ? result.facets : {};
            Object.keys(facets).forEach(function(dfacet) {
              var facetResults = facets[dfacet];
              var position = findIndex2(state.hierarchicalFacets, function(f2) {
                return f2.name === hierarchicalFacet.name;
              });
              var attributeIndex = findIndex2(self2.hierarchicalFacets[position], function(f2) {
                return f2.attribute === dfacet;
              });
              if (attributeIndex === -1) {
                return;
              }
              var defaultData = {};
              if (currentRefinement.length > 0) {
                var root = currentRefinement[0].split(separator)[0];
                defaultData[root] = self2.hierarchicalFacets[position][attributeIndex].data[root];
              }
              self2.hierarchicalFacets[position][attributeIndex].data = defaultsPure(defaultData, facetResults, self2.hierarchicalFacets[position][attributeIndex].data);
            });
            nextDisjunctiveResult++;
          });
        });
        Object.keys(state.facetsExcludes).forEach(function(facetName) {
          var excludes = state.facetsExcludes[facetName];
          var position = facetsIndices[facetName];
          self2.facets[position] = {
            name: facetName,
            data: mainSubResponse.facets[facetName],
            exhaustive: mainSubResponse.exhaustiveFacetsCount
          };
          excludes.forEach(function(facetValue) {
            self2.facets[position] = self2.facets[position] || { name: facetName };
            self2.facets[position].data = self2.facets[position].data || {};
            self2.facets[position].data[facetValue] = 0;
          });
        });
        this.hierarchicalFacets = this.hierarchicalFacets.map(generateHierarchicalTree(state));
        this.facets = compact(this.facets);
        this.disjunctiveFacets = compact(this.disjunctiveFacets);
        this._state = state;
      }
      SearchResults.prototype.getFacetByName = function(name) {
        function predicate(facet) {
          return facet.name === name;
        }
        return find2(this.facets, predicate) || find2(this.disjunctiveFacets, predicate) || find2(this.hierarchicalFacets, predicate);
      };
      function extractNormalizedFacetValues(results, attribute) {
        function predicate(facet2) {
          return facet2.name === attribute;
        }
        if (results._state.isConjunctiveFacet(attribute)) {
          var facet = find2(results.facets, predicate);
          if (!facet)
            return [];
          return Object.keys(facet.data).map(function(name) {
            var value = escapeFacetValue(name);
            return {
              name,
              escapedValue: value,
              count: facet.data[name],
              isRefined: results._state.isFacetRefined(attribute, value),
              isExcluded: results._state.isExcludeRefined(attribute, name)
            };
          });
        } else if (results._state.isDisjunctiveFacet(attribute)) {
          var disjunctiveFacet = find2(results.disjunctiveFacets, predicate);
          if (!disjunctiveFacet)
            return [];
          return Object.keys(disjunctiveFacet.data).map(function(name) {
            var value = escapeFacetValue(name);
            return {
              name,
              escapedValue: value,
              count: disjunctiveFacet.data[name],
              isRefined: results._state.isDisjunctiveFacetRefined(attribute, value)
            };
          });
        } else if (results._state.isHierarchicalFacet(attribute)) {
          return find2(results.hierarchicalFacets, predicate);
        }
      }
      function recSort(sortFn, node, names, level) {
        level = level || 0;
        if (Array.isArray(node)) {
          return sortFn(node, names[level]);
        }
        if (!node.data || node.data.length === 0) {
          return node;
        }
        var children = node.data.map(function(childNode) {
          return recSort(sortFn, childNode, names, level + 1);
        });
        var sortedChildren = sortFn(children, names[level]);
        var newNode = defaultsPure({ data: sortedChildren }, node);
        return newNode;
      }
      SearchResults.DEFAULT_SORT = ["isRefined:desc", "count:desc", "name:asc"];
      function vanillaSortFn(order, data) {
        return data.sort(order);
      }
      function sortViaFacetOrdering(facetValues, facetOrdering) {
        var orderedFacets = [];
        var remainingFacets = [];
        var order = facetOrdering.order || [];
        var reverseOrder = order.reduce(function(acc, name, i2) {
          acc[name] = i2;
          return acc;
        }, {});
        facetValues.forEach(function(item2) {
          var name = item2.path || item2.name;
          if (reverseOrder[name] !== void 0) {
            orderedFacets[reverseOrder[name]] = item2;
          } else {
            remainingFacets.push(item2);
          }
        });
        orderedFacets = orderedFacets.filter(function(facet) {
          return facet;
        });
        var sortRemainingBy = facetOrdering.sortRemainingBy;
        var ordering;
        if (sortRemainingBy === "hidden") {
          return orderedFacets;
        } else if (sortRemainingBy === "alpha") {
          ordering = [["path", "name"], ["asc", "asc"]];
        } else {
          ordering = [["count"], ["desc"]];
        }
        return orderedFacets.concat(orderBy(remainingFacets, ordering[0], ordering[1]));
      }
      function getFacetOrdering(results, attribute) {
        return results.renderingContent && results.renderingContent.facetOrdering && results.renderingContent.facetOrdering.values && results.renderingContent.facetOrdering.values[attribute];
      }
      SearchResults.prototype.getFacetValues = function(attribute, opts) {
        var facetValues = extractNormalizedFacetValues(this, attribute);
        if (!facetValues) {
          return void 0;
        }
        var options = defaultsPure({}, opts, {
          sortBy: SearchResults.DEFAULT_SORT,
          facetOrdering: !(opts && opts.sortBy)
        });
        var results = this;
        var attributes;
        if (Array.isArray(facetValues)) {
          attributes = [attribute];
        } else {
          var config = results._state.getHierarchicalFacetByName(facetValues.name);
          attributes = config.attributes;
        }
        return recSort(function(data, facetName) {
          if (options.facetOrdering) {
            var facetOrdering = getFacetOrdering(results, facetName);
            if (Boolean(facetOrdering)) {
              return sortViaFacetOrdering(data, facetOrdering);
            }
          }
          if (Array.isArray(options.sortBy)) {
            var order = formatSort(options.sortBy, SearchResults.DEFAULT_SORT);
            return orderBy(data, order[0], order[1]);
          } else if (typeof options.sortBy === "function") {
            return vanillaSortFn(options.sortBy, data);
          }
          throw new Error("options.sortBy is optional but if defined it must be either an array of string (predicates) or a sorting function");
        }, facetValues, attributes);
      };
      SearchResults.prototype.getFacetStats = function(attribute) {
        if (this._state.isConjunctiveFacet(attribute)) {
          return getFacetStatsIfAvailable(this.facets, attribute);
        } else if (this._state.isDisjunctiveFacet(attribute)) {
          return getFacetStatsIfAvailable(this.disjunctiveFacets, attribute);
        }
        return void 0;
      };
      function getFacetStatsIfAvailable(facetList, facetName) {
        var data = find2(facetList, function(facet) {
          return facet.name === facetName;
        });
        return data && data.stats;
      }
      SearchResults.prototype.getRefinements = function() {
        var state = this._state;
        var results = this;
        var res = [];
        Object.keys(state.facetsRefinements).forEach(function(attributeName) {
          state.facetsRefinements[attributeName].forEach(function(name) {
            res.push(getRefinement(state, "facet", attributeName, name, results.facets));
          });
        });
        Object.keys(state.facetsExcludes).forEach(function(attributeName) {
          state.facetsExcludes[attributeName].forEach(function(name) {
            res.push(getRefinement(state, "exclude", attributeName, name, results.facets));
          });
        });
        Object.keys(state.disjunctiveFacetsRefinements).forEach(function(attributeName) {
          state.disjunctiveFacetsRefinements[attributeName].forEach(function(name) {
            res.push(getRefinement(state, "disjunctive", attributeName, name, results.disjunctiveFacets));
          });
        });
        Object.keys(state.hierarchicalFacetsRefinements).forEach(function(attributeName) {
          state.hierarchicalFacetsRefinements[attributeName].forEach(function(name) {
            res.push(getHierarchicalRefinement(state, attributeName, name, results.hierarchicalFacets));
          });
        });
        Object.keys(state.numericRefinements).forEach(function(attributeName) {
          var operators = state.numericRefinements[attributeName];
          Object.keys(operators).forEach(function(operator) {
            operators[operator].forEach(function(value) {
              res.push({
                type: "numeric",
                attributeName,
                name: value,
                numericValue: value,
                operator
              });
            });
          });
        });
        state.tagRefinements.forEach(function(name) {
          res.push({ type: "tag", attributeName: "_tags", name });
        });
        return res;
      };
      function getRefinement(state, type, attributeName, name, resultsFacets) {
        var facet = find2(resultsFacets, function(f2) {
          return f2.name === attributeName;
        });
        var count = facet && facet.data && facet.data[name] ? facet.data[name] : 0;
        var exhaustive = facet && facet.exhaustive || false;
        return {
          type,
          attributeName,
          name,
          count,
          exhaustive
        };
      }
      function getHierarchicalRefinement(state, attributeName, name, resultsFacets) {
        var facetDeclaration = state.getHierarchicalFacetByName(attributeName);
        var separator = state._getHierarchicalFacetSeparator(facetDeclaration);
        var split = name.split(separator);
        var rootFacet = find2(resultsFacets, function(facet2) {
          return facet2.name === attributeName;
        });
        var facet = split.reduce(function(intermediateFacet, part) {
          var newFacet = intermediateFacet && find2(intermediateFacet.data, function(f2) {
            return f2.name === part;
          });
          return newFacet !== void 0 ? newFacet : intermediateFacet;
        }, rootFacet);
        var count = facet && facet.count || 0;
        var exhaustive = facet && facet.exhaustive || false;
        var path = facet && facet.path || "";
        return {
          type: "hierarchical",
          attributeName,
          name: path,
          count,
          exhaustive
        };
      }
      module.exports = SearchResults;
    }
  });

  // node_modules/@algolia/events/events.js
  var require_events = __commonJS({
    "node_modules/@algolia/events/events.js"(exports, module) {
      function EventEmitter2() {
        this._events = this._events || {};
        this._maxListeners = this._maxListeners || void 0;
      }
      module.exports = EventEmitter2;
      EventEmitter2.prototype._events = void 0;
      EventEmitter2.prototype._maxListeners = void 0;
      EventEmitter2.defaultMaxListeners = 10;
      EventEmitter2.prototype.setMaxListeners = function(n2) {
        if (!isNumber(n2) || n2 < 0 || isNaN(n2))
          throw TypeError("n must be a positive number");
        this._maxListeners = n2;
        return this;
      };
      EventEmitter2.prototype.emit = function(type) {
        var er, handler, len, args, i2, listeners;
        if (!this._events)
          this._events = {};
        if (type === "error") {
          if (!this._events.error || isObject(this._events.error) && !this._events.error.length) {
            er = arguments[1];
            if (er instanceof Error) {
              throw er;
            } else {
              var err = new Error('Uncaught, unspecified "error" event. (' + er + ")");
              err.context = er;
              throw err;
            }
          }
        }
        handler = this._events[type];
        if (isUndefined(handler))
          return false;
        if (isFunction(handler)) {
          switch (arguments.length) {
            case 1:
              handler.call(this);
              break;
            case 2:
              handler.call(this, arguments[1]);
              break;
            case 3:
              handler.call(this, arguments[1], arguments[2]);
              break;
            default:
              args = Array.prototype.slice.call(arguments, 1);
              handler.apply(this, args);
          }
        } else if (isObject(handler)) {
          args = Array.prototype.slice.call(arguments, 1);
          listeners = handler.slice();
          len = listeners.length;
          for (i2 = 0; i2 < len; i2++)
            listeners[i2].apply(this, args);
        }
        return true;
      };
      EventEmitter2.prototype.addListener = function(type, listener) {
        var m2;
        if (!isFunction(listener))
          throw TypeError("listener must be a function");
        if (!this._events)
          this._events = {};
        if (this._events.newListener)
          this.emit("newListener", type, isFunction(listener.listener) ? listener.listener : listener);
        if (!this._events[type])
          this._events[type] = listener;
        else if (isObject(this._events[type]))
          this._events[type].push(listener);
        else
          this._events[type] = [this._events[type], listener];
        if (isObject(this._events[type]) && !this._events[type].warned) {
          if (!isUndefined(this._maxListeners)) {
            m2 = this._maxListeners;
          } else {
            m2 = EventEmitter2.defaultMaxListeners;
          }
          if (m2 && m2 > 0 && this._events[type].length > m2) {
            this._events[type].warned = true;
            console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[type].length);
            if (typeof console.trace === "function") {
              console.trace();
            }
          }
        }
        return this;
      };
      EventEmitter2.prototype.on = EventEmitter2.prototype.addListener;
      EventEmitter2.prototype.once = function(type, listener) {
        if (!isFunction(listener))
          throw TypeError("listener must be a function");
        var fired = false;
        function g2() {
          this.removeListener(type, g2);
          if (!fired) {
            fired = true;
            listener.apply(this, arguments);
          }
        }
        g2.listener = listener;
        this.on(type, g2);
        return this;
      };
      EventEmitter2.prototype.removeListener = function(type, listener) {
        var list, position, length, i2;
        if (!isFunction(listener))
          throw TypeError("listener must be a function");
        if (!this._events || !this._events[type])
          return this;
        list = this._events[type];
        length = list.length;
        position = -1;
        if (list === listener || isFunction(list.listener) && list.listener === listener) {
          delete this._events[type];
          if (this._events.removeListener)
            this.emit("removeListener", type, listener);
        } else if (isObject(list)) {
          for (i2 = length; i2-- > 0; ) {
            if (list[i2] === listener || list[i2].listener && list[i2].listener === listener) {
              position = i2;
              break;
            }
          }
          if (position < 0)
            return this;
          if (list.length === 1) {
            list.length = 0;
            delete this._events[type];
          } else {
            list.splice(position, 1);
          }
          if (this._events.removeListener)
            this.emit("removeListener", type, listener);
        }
        return this;
      };
      EventEmitter2.prototype.removeAllListeners = function(type) {
        var key2, listeners;
        if (!this._events)
          return this;
        if (!this._events.removeListener) {
          if (arguments.length === 0)
            this._events = {};
          else if (this._events[type])
            delete this._events[type];
          return this;
        }
        if (arguments.length === 0) {
          for (key2 in this._events) {
            if (key2 === "removeListener")
              continue;
            this.removeAllListeners(key2);
          }
          this.removeAllListeners("removeListener");
          this._events = {};
          return this;
        }
        listeners = this._events[type];
        if (isFunction(listeners)) {
          this.removeListener(type, listeners);
        } else if (listeners) {
          while (listeners.length)
            this.removeListener(type, listeners[listeners.length - 1]);
        }
        delete this._events[type];
        return this;
      };
      EventEmitter2.prototype.listeners = function(type) {
        var ret;
        if (!this._events || !this._events[type])
          ret = [];
        else if (isFunction(this._events[type]))
          ret = [this._events[type]];
        else
          ret = this._events[type].slice();
        return ret;
      };
      EventEmitter2.prototype.listenerCount = function(type) {
        if (this._events) {
          var evlistener = this._events[type];
          if (isFunction(evlistener))
            return 1;
          else if (evlistener)
            return evlistener.length;
        }
        return 0;
      };
      EventEmitter2.listenerCount = function(emitter, type) {
        return emitter.listenerCount(type);
      };
      function isFunction(arg) {
        return typeof arg === "function";
      }
      function isNumber(arg) {
        return typeof arg === "number";
      }
      function isObject(arg) {
        return typeof arg === "object" && arg !== null;
      }
      function isUndefined(arg) {
        return arg === void 0;
      }
    }
  });

  // node_modules/algoliasearch-helper/src/functions/inherits.js
  var require_inherits = __commonJS({
    "node_modules/algoliasearch-helper/src/functions/inherits.js"(exports, module) {
      "use strict";
      function inherits(ctor, superCtor) {
        ctor.prototype = Object.create(superCtor.prototype, {
          constructor: {
            value: ctor,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
      }
      module.exports = inherits;
    }
  });

  // node_modules/algoliasearch-helper/src/DerivedHelper/index.js
  var require_DerivedHelper = __commonJS({
    "node_modules/algoliasearch-helper/src/DerivedHelper/index.js"(exports, module) {
      "use strict";
      var EventEmitter2 = require_events();
      var inherits = require_inherits();
      function DerivedHelper(mainHelper, fn) {
        this.main = mainHelper;
        this.fn = fn;
        this.lastResults = null;
      }
      inherits(DerivedHelper, EventEmitter2);
      DerivedHelper.prototype.detach = function() {
        this.removeAllListeners();
        this.main.detachDerivedHelper(this);
      };
      DerivedHelper.prototype.getModifiedState = function(parameters) {
        return this.fn(parameters);
      };
      module.exports = DerivedHelper;
    }
  });

  // node_modules/algoliasearch-helper/src/requestBuilder.js
  var require_requestBuilder = __commonJS({
    "node_modules/algoliasearch-helper/src/requestBuilder.js"(exports, module) {
      "use strict";
      var merge3 = require_merge();
      function sortObject(obj) {
        return Object.keys(obj).sort(function(a2, b2) {
          return a2.localeCompare(b2);
        }).reduce(function(acc, curr) {
          acc[curr] = obj[curr];
          return acc;
        }, {});
      }
      var requestBuilder = {
        _getQueries: function getQueries(index3, state) {
          var queries = [];
          queries.push({
            indexName: index3,
            params: requestBuilder._getHitsSearchParams(state)
          });
          state.getRefinedDisjunctiveFacets().forEach(function(refinedFacet) {
            queries.push({
              indexName: index3,
              params: requestBuilder._getDisjunctiveFacetSearchParams(state, refinedFacet)
            });
          });
          state.getRefinedHierarchicalFacets().forEach(function(refinedFacet) {
            var hierarchicalFacet = state.getHierarchicalFacetByName(refinedFacet);
            var currentRefinement = state.getHierarchicalRefinement(refinedFacet);
            var separator = state._getHierarchicalFacetSeparator(hierarchicalFacet);
            if (currentRefinement.length > 0 && currentRefinement[0].split(separator).length > 1) {
              var filtersMap = currentRefinement[0].split(separator).slice(0, -1).reduce(function createFiltersMap(map, segment, level) {
                return map.concat({
                  attribute: hierarchicalFacet.attributes[level],
                  value: level === 0 ? segment : [map[map.length - 1].value, segment].join(separator)
                });
              }, []);
              filtersMap.forEach(function(filter, level) {
                var params = requestBuilder._getDisjunctiveFacetSearchParams(state, filter.attribute, level === 0);
                var parent = filtersMap[level - 1];
                params.facetFilters = level > 0 ? [parent.attribute + ":" + parent.value] : void 0;
                queries.push({ indexName: index3, params });
              });
            }
          });
          return queries;
        },
        _getHitsSearchParams: function(state) {
          var facets = state.facets.concat(state.disjunctiveFacets).concat(requestBuilder._getHitsHierarchicalFacetsAttributes(state));
          var facetFilters = requestBuilder._getFacetFilters(state);
          var numericFilters = requestBuilder._getNumericFilters(state);
          var tagFilters = requestBuilder._getTagFilters(state);
          var additionalParams = {
            facets: facets.indexOf("*") > -1 ? ["*"] : facets,
            tagFilters
          };
          if (facetFilters.length > 0) {
            additionalParams.facetFilters = facetFilters;
          }
          if (numericFilters.length > 0) {
            additionalParams.numericFilters = numericFilters;
          }
          return sortObject(merge3({}, state.getQueryParams(), additionalParams));
        },
        _getDisjunctiveFacetSearchParams: function(state, facet, hierarchicalRootLevel) {
          var facetFilters = requestBuilder._getFacetFilters(state, facet, hierarchicalRootLevel);
          var numericFilters = requestBuilder._getNumericFilters(state, facet);
          var tagFilters = requestBuilder._getTagFilters(state);
          var additionalParams = {
            hitsPerPage: 0,
            page: 0,
            analytics: false,
            clickAnalytics: false
          };
          if (tagFilters.length > 0) {
            additionalParams.tagFilters = tagFilters;
          }
          var hierarchicalFacet = state.getHierarchicalFacetByName(facet);
          if (hierarchicalFacet) {
            additionalParams.facets = requestBuilder._getDisjunctiveHierarchicalFacetAttribute(state, hierarchicalFacet, hierarchicalRootLevel);
          } else {
            additionalParams.facets = facet;
          }
          if (numericFilters.length > 0) {
            additionalParams.numericFilters = numericFilters;
          }
          if (facetFilters.length > 0) {
            additionalParams.facetFilters = facetFilters;
          }
          return sortObject(merge3({}, state.getQueryParams(), additionalParams));
        },
        _getNumericFilters: function(state, facetName) {
          if (state.numericFilters) {
            return state.numericFilters;
          }
          var numericFilters = [];
          Object.keys(state.numericRefinements).forEach(function(attribute) {
            var operators = state.numericRefinements[attribute] || {};
            Object.keys(operators).forEach(function(operator) {
              var values = operators[operator] || [];
              if (facetName !== attribute) {
                values.forEach(function(value) {
                  if (Array.isArray(value)) {
                    var vs = value.map(function(v2) {
                      return attribute + operator + v2;
                    });
                    numericFilters.push(vs);
                  } else {
                    numericFilters.push(attribute + operator + value);
                  }
                });
              }
            });
          });
          return numericFilters;
        },
        _getTagFilters: function(state) {
          if (state.tagFilters) {
            return state.tagFilters;
          }
          return state.tagRefinements.join(",");
        },
        _getFacetFilters: function(state, facet, hierarchicalRootLevel) {
          var facetFilters = [];
          var facetsRefinements = state.facetsRefinements || {};
          Object.keys(facetsRefinements).forEach(function(facetName) {
            var facetValues = facetsRefinements[facetName] || [];
            facetValues.forEach(function(facetValue) {
              facetFilters.push(facetName + ":" + facetValue);
            });
          });
          var facetsExcludes = state.facetsExcludes || {};
          Object.keys(facetsExcludes).forEach(function(facetName) {
            var facetValues = facetsExcludes[facetName] || [];
            facetValues.forEach(function(facetValue) {
              facetFilters.push(facetName + ":-" + facetValue);
            });
          });
          var disjunctiveFacetsRefinements = state.disjunctiveFacetsRefinements || {};
          Object.keys(disjunctiveFacetsRefinements).forEach(function(facetName) {
            var facetValues = disjunctiveFacetsRefinements[facetName] || [];
            if (facetName === facet || !facetValues || facetValues.length === 0) {
              return;
            }
            var orFilters = [];
            facetValues.forEach(function(facetValue) {
              orFilters.push(facetName + ":" + facetValue);
            });
            facetFilters.push(orFilters);
          });
          var hierarchicalFacetsRefinements = state.hierarchicalFacetsRefinements || {};
          Object.keys(hierarchicalFacetsRefinements).forEach(function(facetName) {
            var facetValues = hierarchicalFacetsRefinements[facetName] || [];
            var facetValue = facetValues[0];
            if (facetValue === void 0) {
              return;
            }
            var hierarchicalFacet = state.getHierarchicalFacetByName(facetName);
            var separator = state._getHierarchicalFacetSeparator(hierarchicalFacet);
            var rootPath = state._getHierarchicalRootPath(hierarchicalFacet);
            var attributeToRefine;
            var attributesIndex;
            if (facet === facetName) {
              if (facetValue.indexOf(separator) === -1 || !rootPath && hierarchicalRootLevel === true || rootPath && rootPath.split(separator).length === facetValue.split(separator).length) {
                return;
              }
              if (!rootPath) {
                attributesIndex = facetValue.split(separator).length - 2;
                facetValue = facetValue.slice(0, facetValue.lastIndexOf(separator));
              } else {
                attributesIndex = rootPath.split(separator).length - 1;
                facetValue = rootPath;
              }
              attributeToRefine = hierarchicalFacet.attributes[attributesIndex];
            } else {
              attributesIndex = facetValue.split(separator).length - 1;
              attributeToRefine = hierarchicalFacet.attributes[attributesIndex];
            }
            if (attributeToRefine) {
              facetFilters.push([attributeToRefine + ":" + facetValue]);
            }
          });
          return facetFilters;
        },
        _getHitsHierarchicalFacetsAttributes: function(state) {
          var out = [];
          return state.hierarchicalFacets.reduce(function getHitsAttributesForHierarchicalFacet(allAttributes, hierarchicalFacet) {
            var hierarchicalRefinement = state.getHierarchicalRefinement(hierarchicalFacet.name)[0];
            if (!hierarchicalRefinement) {
              allAttributes.push(hierarchicalFacet.attributes[0]);
              return allAttributes;
            }
            var separator = state._getHierarchicalFacetSeparator(hierarchicalFacet);
            var level = hierarchicalRefinement.split(separator).length;
            var newAttributes = hierarchicalFacet.attributes.slice(0, level + 1);
            return allAttributes.concat(newAttributes);
          }, out);
        },
        _getDisjunctiveHierarchicalFacetAttribute: function(state, hierarchicalFacet, rootLevel) {
          var separator = state._getHierarchicalFacetSeparator(hierarchicalFacet);
          if (rootLevel === true) {
            var rootPath = state._getHierarchicalRootPath(hierarchicalFacet);
            var attributeIndex = 0;
            if (rootPath) {
              attributeIndex = rootPath.split(separator).length;
            }
            return [hierarchicalFacet.attributes[attributeIndex]];
          }
          var hierarchicalRefinement = state.getHierarchicalRefinement(hierarchicalFacet.name)[0] || "";
          var parentLevel = hierarchicalRefinement.split(separator).length - 1;
          return hierarchicalFacet.attributes.slice(0, parentLevel + 1);
        },
        getSearchForFacetQuery: function(facetName, query, maxFacetHits, state) {
          var stateForSearchForFacetValues = state.isDisjunctiveFacet(facetName) ? state.clearRefinements(facetName) : state;
          var searchForFacetSearchParameters = {
            facetQuery: query,
            facetName
          };
          if (typeof maxFacetHits === "number") {
            searchForFacetSearchParameters.maxFacetHits = maxFacetHits;
          }
          return sortObject(merge3({}, requestBuilder._getHitsSearchParams(stateForSearchForFacetValues), searchForFacetSearchParameters));
        }
      };
      module.exports = requestBuilder;
    }
  });

  // node_modules/algoliasearch-helper/src/version.js
  var require_version = __commonJS({
    "node_modules/algoliasearch-helper/src/version.js"(exports, module) {
      "use strict";
      module.exports = "3.10.0";
    }
  });

  // node_modules/algoliasearch-helper/src/algoliasearch.helper.js
  var require_algoliasearch_helper = __commonJS({
    "node_modules/algoliasearch-helper/src/algoliasearch.helper.js"(exports, module) {
      "use strict";
      var SearchParameters = require_SearchParameters();
      var SearchResults = require_SearchResults();
      var DerivedHelper = require_DerivedHelper();
      var requestBuilder = require_requestBuilder();
      var EventEmitter2 = require_events();
      var inherits = require_inherits();
      var objectHasKeys = require_objectHasKeys();
      var omit = require_omit();
      var merge3 = require_merge();
      var version = require_version();
      var escapeFacetValue = require_escapeFacetValue().escapeFacetValue;
      function AlgoliaSearchHelper(client, index3, options) {
        if (typeof client.addAlgoliaAgent === "function") {
          client.addAlgoliaAgent("JS Helper (" + version + ")");
        }
        this.setClient(client);
        var opts = options || {};
        opts.index = index3;
        this.state = SearchParameters.make(opts);
        this.lastResults = null;
        this._queryId = 0;
        this._lastQueryIdReceived = -1;
        this.derivedHelpers = [];
        this._currentNbQueries = 0;
      }
      inherits(AlgoliaSearchHelper, EventEmitter2);
      AlgoliaSearchHelper.prototype.search = function() {
        this._search({ onlyWithDerivedHelpers: false });
        return this;
      };
      AlgoliaSearchHelper.prototype.searchOnlyWithDerivedHelpers = function() {
        this._search({ onlyWithDerivedHelpers: true });
        return this;
      };
      AlgoliaSearchHelper.prototype.getQuery = function() {
        var state = this.state;
        return requestBuilder._getHitsSearchParams(state);
      };
      AlgoliaSearchHelper.prototype.searchOnce = function(options, cb) {
        var tempState = !options ? this.state : this.state.setQueryParameters(options);
        var queries = requestBuilder._getQueries(tempState.index, tempState);
        var self2 = this;
        this._currentNbQueries++;
        this.emit("searchOnce", {
          state: tempState
        });
        if (cb) {
          this.client.search(queries).then(function(content) {
            self2._currentNbQueries--;
            if (self2._currentNbQueries === 0) {
              self2.emit("searchQueueEmpty");
            }
            cb(null, new SearchResults(tempState, content.results), tempState);
          }).catch(function(err) {
            self2._currentNbQueries--;
            if (self2._currentNbQueries === 0) {
              self2.emit("searchQueueEmpty");
            }
            cb(err, null, tempState);
          });
          return void 0;
        }
        return this.client.search(queries).then(function(content) {
          self2._currentNbQueries--;
          if (self2._currentNbQueries === 0)
            self2.emit("searchQueueEmpty");
          return {
            content: new SearchResults(tempState, content.results),
            state: tempState,
            _originalResponse: content
          };
        }, function(e2) {
          self2._currentNbQueries--;
          if (self2._currentNbQueries === 0)
            self2.emit("searchQueueEmpty");
          throw e2;
        });
      };
      AlgoliaSearchHelper.prototype.findAnswers = function(options) {
        var state = this.state;
        var derivedHelper = this.derivedHelpers[0];
        if (!derivedHelper) {
          return Promise.resolve([]);
        }
        var derivedState = derivedHelper.getModifiedState(state);
        var data = merge3({
          attributesForPrediction: options.attributesForPrediction,
          nbHits: options.nbHits
        }, {
          params: omit(requestBuilder._getHitsSearchParams(derivedState), [
            "attributesToSnippet",
            "hitsPerPage",
            "restrictSearchableAttributes",
            "snippetEllipsisText"
          ])
        });
        var errorMessage = "search for answers was called, but this client does not have a function client.initIndex(index).findAnswers";
        if (typeof this.client.initIndex !== "function") {
          throw new Error(errorMessage);
        }
        var index3 = this.client.initIndex(derivedState.index);
        if (typeof index3.findAnswers !== "function") {
          throw new Error(errorMessage);
        }
        return index3.findAnswers(derivedState.query, options.queryLanguages, data);
      };
      AlgoliaSearchHelper.prototype.searchForFacetValues = function(facet, query, maxFacetHits, userState) {
        var clientHasSFFV = typeof this.client.searchForFacetValues === "function";
        var clientHasInitIndex = typeof this.client.initIndex === "function";
        if (!clientHasSFFV && !clientHasInitIndex && typeof this.client.search !== "function") {
          throw new Error("search for facet values (searchable) was called, but this client does not have a function client.searchForFacetValues or client.initIndex(index).searchForFacetValues");
        }
        var state = this.state.setQueryParameters(userState || {});
        var isDisjunctive = state.isDisjunctiveFacet(facet);
        var algoliaQuery = requestBuilder.getSearchForFacetQuery(facet, query, maxFacetHits, state);
        this._currentNbQueries++;
        var self2 = this;
        var searchForFacetValuesPromise;
        if (clientHasSFFV) {
          searchForFacetValuesPromise = this.client.searchForFacetValues([
            { indexName: state.index, params: algoliaQuery }
          ]);
        } else if (clientHasInitIndex) {
          searchForFacetValuesPromise = this.client.initIndex(state.index).searchForFacetValues(algoliaQuery);
        } else {
          delete algoliaQuery.facetName;
          searchForFacetValuesPromise = this.client.search([
            {
              type: "facet",
              facet,
              indexName: state.index,
              params: algoliaQuery
            }
          ]).then(function processResponse(response) {
            return response.results[0];
          });
        }
        this.emit("searchForFacetValues", {
          state,
          facet,
          query
        });
        return searchForFacetValuesPromise.then(function addIsRefined(content) {
          self2._currentNbQueries--;
          if (self2._currentNbQueries === 0)
            self2.emit("searchQueueEmpty");
          content = Array.isArray(content) ? content[0] : content;
          content.facetHits.forEach(function(f2) {
            f2.escapedValue = escapeFacetValue(f2.value);
            f2.isRefined = isDisjunctive ? state.isDisjunctiveFacetRefined(facet, f2.escapedValue) : state.isFacetRefined(facet, f2.escapedValue);
          });
          return content;
        }, function(e2) {
          self2._currentNbQueries--;
          if (self2._currentNbQueries === 0)
            self2.emit("searchQueueEmpty");
          throw e2;
        });
      };
      AlgoliaSearchHelper.prototype.setQuery = function(q) {
        this._change({
          state: this.state.resetPage().setQuery(q),
          isPageReset: true
        });
        return this;
      };
      AlgoliaSearchHelper.prototype.clearRefinements = function(name) {
        this._change({
          state: this.state.resetPage().clearRefinements(name),
          isPageReset: true
        });
        return this;
      };
      AlgoliaSearchHelper.prototype.clearTags = function() {
        this._change({
          state: this.state.resetPage().clearTags(),
          isPageReset: true
        });
        return this;
      };
      AlgoliaSearchHelper.prototype.addDisjunctiveFacetRefinement = function(facet, value) {
        this._change({
          state: this.state.resetPage().addDisjunctiveFacetRefinement(facet, value),
          isPageReset: true
        });
        return this;
      };
      AlgoliaSearchHelper.prototype.addDisjunctiveRefine = function() {
        return this.addDisjunctiveFacetRefinement.apply(this, arguments);
      };
      AlgoliaSearchHelper.prototype.addHierarchicalFacetRefinement = function(facet, value) {
        this._change({
          state: this.state.resetPage().addHierarchicalFacetRefinement(facet, value),
          isPageReset: true
        });
        return this;
      };
      AlgoliaSearchHelper.prototype.addNumericRefinement = function(attribute, operator, value) {
        this._change({
          state: this.state.resetPage().addNumericRefinement(attribute, operator, value),
          isPageReset: true
        });
        return this;
      };
      AlgoliaSearchHelper.prototype.addFacetRefinement = function(facet, value) {
        this._change({
          state: this.state.resetPage().addFacetRefinement(facet, value),
          isPageReset: true
        });
        return this;
      };
      AlgoliaSearchHelper.prototype.addRefine = function() {
        return this.addFacetRefinement.apply(this, arguments);
      };
      AlgoliaSearchHelper.prototype.addFacetExclusion = function(facet, value) {
        this._change({
          state: this.state.resetPage().addExcludeRefinement(facet, value),
          isPageReset: true
        });
        return this;
      };
      AlgoliaSearchHelper.prototype.addExclude = function() {
        return this.addFacetExclusion.apply(this, arguments);
      };
      AlgoliaSearchHelper.prototype.addTag = function(tag) {
        this._change({
          state: this.state.resetPage().addTagRefinement(tag),
          isPageReset: true
        });
        return this;
      };
      AlgoliaSearchHelper.prototype.removeNumericRefinement = function(attribute, operator, value) {
        this._change({
          state: this.state.resetPage().removeNumericRefinement(attribute, operator, value),
          isPageReset: true
        });
        return this;
      };
      AlgoliaSearchHelper.prototype.removeDisjunctiveFacetRefinement = function(facet, value) {
        this._change({
          state: this.state.resetPage().removeDisjunctiveFacetRefinement(facet, value),
          isPageReset: true
        });
        return this;
      };
      AlgoliaSearchHelper.prototype.removeDisjunctiveRefine = function() {
        return this.removeDisjunctiveFacetRefinement.apply(this, arguments);
      };
      AlgoliaSearchHelper.prototype.removeHierarchicalFacetRefinement = function(facet) {
        this._change({
          state: this.state.resetPage().removeHierarchicalFacetRefinement(facet),
          isPageReset: true
        });
        return this;
      };
      AlgoliaSearchHelper.prototype.removeFacetRefinement = function(facet, value) {
        this._change({
          state: this.state.resetPage().removeFacetRefinement(facet, value),
          isPageReset: true
        });
        return this;
      };
      AlgoliaSearchHelper.prototype.removeRefine = function() {
        return this.removeFacetRefinement.apply(this, arguments);
      };
      AlgoliaSearchHelper.prototype.removeFacetExclusion = function(facet, value) {
        this._change({
          state: this.state.resetPage().removeExcludeRefinement(facet, value),
          isPageReset: true
        });
        return this;
      };
      AlgoliaSearchHelper.prototype.removeExclude = function() {
        return this.removeFacetExclusion.apply(this, arguments);
      };
      AlgoliaSearchHelper.prototype.removeTag = function(tag) {
        this._change({
          state: this.state.resetPage().removeTagRefinement(tag),
          isPageReset: true
        });
        return this;
      };
      AlgoliaSearchHelper.prototype.toggleFacetExclusion = function(facet, value) {
        this._change({
          state: this.state.resetPage().toggleExcludeFacetRefinement(facet, value),
          isPageReset: true
        });
        return this;
      };
      AlgoliaSearchHelper.prototype.toggleExclude = function() {
        return this.toggleFacetExclusion.apply(this, arguments);
      };
      AlgoliaSearchHelper.prototype.toggleRefinement = function(facet, value) {
        return this.toggleFacetRefinement(facet, value);
      };
      AlgoliaSearchHelper.prototype.toggleFacetRefinement = function(facet, value) {
        this._change({
          state: this.state.resetPage().toggleFacetRefinement(facet, value),
          isPageReset: true
        });
        return this;
      };
      AlgoliaSearchHelper.prototype.toggleRefine = function() {
        return this.toggleFacetRefinement.apply(this, arguments);
      };
      AlgoliaSearchHelper.prototype.toggleTag = function(tag) {
        this._change({
          state: this.state.resetPage().toggleTagRefinement(tag),
          isPageReset: true
        });
        return this;
      };
      AlgoliaSearchHelper.prototype.nextPage = function() {
        var page = this.state.page || 0;
        return this.setPage(page + 1);
      };
      AlgoliaSearchHelper.prototype.previousPage = function() {
        var page = this.state.page || 0;
        return this.setPage(page - 1);
      };
      function setCurrentPage(page) {
        if (page < 0)
          throw new Error("Page requested below 0.");
        this._change({
          state: this.state.setPage(page),
          isPageReset: false
        });
        return this;
      }
      AlgoliaSearchHelper.prototype.setCurrentPage = setCurrentPage;
      AlgoliaSearchHelper.prototype.setPage = setCurrentPage;
      AlgoliaSearchHelper.prototype.setIndex = function(name) {
        this._change({
          state: this.state.resetPage().setIndex(name),
          isPageReset: true
        });
        return this;
      };
      AlgoliaSearchHelper.prototype.setQueryParameter = function(parameter, value) {
        this._change({
          state: this.state.resetPage().setQueryParameter(parameter, value),
          isPageReset: true
        });
        return this;
      };
      AlgoliaSearchHelper.prototype.setState = function(newState) {
        this._change({
          state: SearchParameters.make(newState),
          isPageReset: false
        });
        return this;
      };
      AlgoliaSearchHelper.prototype.overrideStateWithoutTriggeringChangeEvent = function(newState) {
        this.state = new SearchParameters(newState);
        return this;
      };
      AlgoliaSearchHelper.prototype.hasRefinements = function(attribute) {
        if (objectHasKeys(this.state.getNumericRefinements(attribute))) {
          return true;
        } else if (this.state.isConjunctiveFacet(attribute)) {
          return this.state.isFacetRefined(attribute);
        } else if (this.state.isDisjunctiveFacet(attribute)) {
          return this.state.isDisjunctiveFacetRefined(attribute);
        } else if (this.state.isHierarchicalFacet(attribute)) {
          return this.state.isHierarchicalFacetRefined(attribute);
        }
        return false;
      };
      AlgoliaSearchHelper.prototype.isExcluded = function(facet, value) {
        return this.state.isExcludeRefined(facet, value);
      };
      AlgoliaSearchHelper.prototype.isDisjunctiveRefined = function(facet, value) {
        return this.state.isDisjunctiveFacetRefined(facet, value);
      };
      AlgoliaSearchHelper.prototype.hasTag = function(tag) {
        return this.state.isTagRefined(tag);
      };
      AlgoliaSearchHelper.prototype.isTagRefined = function() {
        return this.hasTagRefinements.apply(this, arguments);
      };
      AlgoliaSearchHelper.prototype.getIndex = function() {
        return this.state.index;
      };
      function getCurrentPage() {
        return this.state.page;
      }
      AlgoliaSearchHelper.prototype.getCurrentPage = getCurrentPage;
      AlgoliaSearchHelper.prototype.getPage = getCurrentPage;
      AlgoliaSearchHelper.prototype.getTags = function() {
        return this.state.tagRefinements;
      };
      AlgoliaSearchHelper.prototype.getRefinements = function(facetName) {
        var refinements = [];
        if (this.state.isConjunctiveFacet(facetName)) {
          var conjRefinements = this.state.getConjunctiveRefinements(facetName);
          conjRefinements.forEach(function(r2) {
            refinements.push({
              value: r2,
              type: "conjunctive"
            });
          });
          var excludeRefinements = this.state.getExcludeRefinements(facetName);
          excludeRefinements.forEach(function(r2) {
            refinements.push({
              value: r2,
              type: "exclude"
            });
          });
        } else if (this.state.isDisjunctiveFacet(facetName)) {
          var disjRefinements = this.state.getDisjunctiveRefinements(facetName);
          disjRefinements.forEach(function(r2) {
            refinements.push({
              value: r2,
              type: "disjunctive"
            });
          });
        }
        var numericRefinements = this.state.getNumericRefinements(facetName);
        Object.keys(numericRefinements).forEach(function(operator) {
          var value = numericRefinements[operator];
          refinements.push({
            value,
            operator,
            type: "numeric"
          });
        });
        return refinements;
      };
      AlgoliaSearchHelper.prototype.getNumericRefinement = function(attribute, operator) {
        return this.state.getNumericRefinement(attribute, operator);
      };
      AlgoliaSearchHelper.prototype.getHierarchicalFacetBreadcrumb = function(facetName) {
        return this.state.getHierarchicalFacetBreadcrumb(facetName);
      };
      AlgoliaSearchHelper.prototype._search = function(options) {
        var state = this.state;
        var states = [];
        var mainQueries = [];
        if (!options.onlyWithDerivedHelpers) {
          mainQueries = requestBuilder._getQueries(state.index, state);
          states.push({
            state,
            queriesCount: mainQueries.length,
            helper: this
          });
          this.emit("search", {
            state,
            results: this.lastResults
          });
        }
        var derivedQueries = this.derivedHelpers.map(function(derivedHelper) {
          var derivedState = derivedHelper.getModifiedState(state);
          var derivedStateQueries = requestBuilder._getQueries(derivedState.index, derivedState);
          states.push({
            state: derivedState,
            queriesCount: derivedStateQueries.length,
            helper: derivedHelper
          });
          derivedHelper.emit("search", {
            state: derivedState,
            results: derivedHelper.lastResults
          });
          return derivedStateQueries;
        });
        var queries = Array.prototype.concat.apply(mainQueries, derivedQueries);
        var queryId = this._queryId++;
        this._currentNbQueries++;
        try {
          this.client.search(queries).then(this._dispatchAlgoliaResponse.bind(this, states, queryId)).catch(this._dispatchAlgoliaError.bind(this, queryId));
        } catch (error) {
          this.emit("error", {
            error
          });
        }
      };
      AlgoliaSearchHelper.prototype._dispatchAlgoliaResponse = function(states, queryId, content) {
        if (queryId < this._lastQueryIdReceived) {
          return;
        }
        this._currentNbQueries -= queryId - this._lastQueryIdReceived;
        this._lastQueryIdReceived = queryId;
        if (this._currentNbQueries === 0)
          this.emit("searchQueueEmpty");
        var results = content.results.slice();
        states.forEach(function(s2) {
          var state = s2.state;
          var queriesCount = s2.queriesCount;
          var helper = s2.helper;
          var specificResults = results.splice(0, queriesCount);
          var formattedResponse = helper.lastResults = new SearchResults(state, specificResults);
          helper.emit("result", {
            results: formattedResponse,
            state
          });
        });
      };
      AlgoliaSearchHelper.prototype._dispatchAlgoliaError = function(queryId, error) {
        if (queryId < this._lastQueryIdReceived) {
          return;
        }
        this._currentNbQueries -= queryId - this._lastQueryIdReceived;
        this._lastQueryIdReceived = queryId;
        this.emit("error", {
          error
        });
        if (this._currentNbQueries === 0)
          this.emit("searchQueueEmpty");
      };
      AlgoliaSearchHelper.prototype.containsRefinement = function(query, facetFilters, numericFilters, tagFilters) {
        return query || facetFilters.length !== 0 || numericFilters.length !== 0 || tagFilters.length !== 0;
      };
      AlgoliaSearchHelper.prototype._hasDisjunctiveRefinements = function(facet) {
        return this.state.disjunctiveRefinements[facet] && this.state.disjunctiveRefinements[facet].length > 0;
      };
      AlgoliaSearchHelper.prototype._change = function(event) {
        var state = event.state;
        var isPageReset = event.isPageReset;
        if (state !== this.state) {
          this.state = state;
          this.emit("change", {
            state: this.state,
            results: this.lastResults,
            isPageReset
          });
        }
      };
      AlgoliaSearchHelper.prototype.clearCache = function() {
        this.client.clearCache && this.client.clearCache();
        return this;
      };
      AlgoliaSearchHelper.prototype.setClient = function(newClient) {
        if (this.client === newClient)
          return this;
        if (typeof newClient.addAlgoliaAgent === "function") {
          newClient.addAlgoliaAgent("JS Helper (" + version + ")");
        }
        this.client = newClient;
        return this;
      };
      AlgoliaSearchHelper.prototype.getClient = function() {
        return this.client;
      };
      AlgoliaSearchHelper.prototype.derive = function(fn) {
        var derivedHelper = new DerivedHelper(this, fn);
        this.derivedHelpers.push(derivedHelper);
        return derivedHelper;
      };
      AlgoliaSearchHelper.prototype.detachDerivedHelper = function(derivedHelper) {
        var pos = this.derivedHelpers.indexOf(derivedHelper);
        if (pos === -1)
          throw new Error("Derived helper already detached");
        this.derivedHelpers.splice(pos, 1);
      };
      AlgoliaSearchHelper.prototype.hasPendingRequests = function() {
        return this._currentNbQueries > 0;
      };
      module.exports = AlgoliaSearchHelper;
    }
  });

  // node_modules/algoliasearch-helper/index.js
  var require_algoliasearch_helper2 = __commonJS({
    "node_modules/algoliasearch-helper/index.js"(exports, module) {
      "use strict";
      var AlgoliaSearchHelper = require_algoliasearch_helper();
      var SearchParameters = require_SearchParameters();
      var SearchResults = require_SearchResults();
      function algoliasearchHelper4(client, index3, opts) {
        return new AlgoliaSearchHelper(client, index3, opts);
      }
      algoliasearchHelper4.version = require_version();
      algoliasearchHelper4.AlgoliaSearchHelper = AlgoliaSearchHelper;
      algoliasearchHelper4.SearchParameters = SearchParameters;
      algoliasearchHelper4.SearchResults = SearchResults;
      module.exports = algoliasearchHelper4;
    }
  });

  // node_modules/hogan.js/lib/compiler.js
  var require_compiler = __commonJS({
    "node_modules/hogan.js/lib/compiler.js"(exports) {
      (function(Hogan2) {
        var rIsWhitespace = /\S/, rQuot = /\"/g, rNewline = /\n/g, rCr = /\r/g, rSlash = /\\/g, rLineSep = /\u2028/, rParagraphSep = /\u2029/;
        Hogan2.tags = {
          "#": 1,
          "^": 2,
          "<": 3,
          "$": 4,
          "/": 5,
          "!": 6,
          ">": 7,
          "=": 8,
          "_v": 9,
          "{": 10,
          "&": 11,
          "_t": 12
        };
        Hogan2.scan = function scan(text, delimiters) {
          var len = text.length, IN_TEXT = 0, IN_TAG_TYPE = 1, IN_TAG = 2, state = IN_TEXT, tagType = null, tag = null, buf = "", tokens = [], seenTag = false, i2 = 0, lineStart = 0, otag = "{{", ctag = "}}";
          function addBuf() {
            if (buf.length > 0) {
              tokens.push({ tag: "_t", text: new String(buf) });
              buf = "";
            }
          }
          function lineIsWhitespace() {
            var isAllWhitespace = true;
            for (var j2 = lineStart; j2 < tokens.length; j2++) {
              isAllWhitespace = Hogan2.tags[tokens[j2].tag] < Hogan2.tags["_v"] || tokens[j2].tag == "_t" && tokens[j2].text.match(rIsWhitespace) === null;
              if (!isAllWhitespace) {
                return false;
              }
            }
            return isAllWhitespace;
          }
          function filterLine(haveSeenTag, noNewLine) {
            addBuf();
            if (haveSeenTag && lineIsWhitespace()) {
              for (var j2 = lineStart, next; j2 < tokens.length; j2++) {
                if (tokens[j2].text) {
                  if ((next = tokens[j2 + 1]) && next.tag == ">") {
                    next.indent = tokens[j2].text.toString();
                  }
                  tokens.splice(j2, 1);
                }
              }
            } else if (!noNewLine) {
              tokens.push({ tag: "\n" });
            }
            seenTag = false;
            lineStart = tokens.length;
          }
          function changeDelimiters(text2, index3) {
            var close = "=" + ctag, closeIndex = text2.indexOf(close, index3), delimiters2 = trim(text2.substring(text2.indexOf("=", index3) + 1, closeIndex)).split(" ");
            otag = delimiters2[0];
            ctag = delimiters2[delimiters2.length - 1];
            return closeIndex + close.length - 1;
          }
          if (delimiters) {
            delimiters = delimiters.split(" ");
            otag = delimiters[0];
            ctag = delimiters[1];
          }
          for (i2 = 0; i2 < len; i2++) {
            if (state == IN_TEXT) {
              if (tagChange(otag, text, i2)) {
                --i2;
                addBuf();
                state = IN_TAG_TYPE;
              } else {
                if (text.charAt(i2) == "\n") {
                  filterLine(seenTag);
                } else {
                  buf += text.charAt(i2);
                }
              }
            } else if (state == IN_TAG_TYPE) {
              i2 += otag.length - 1;
              tag = Hogan2.tags[text.charAt(i2 + 1)];
              tagType = tag ? text.charAt(i2 + 1) : "_v";
              if (tagType == "=") {
                i2 = changeDelimiters(text, i2);
                state = IN_TEXT;
              } else {
                if (tag) {
                  i2++;
                }
                state = IN_TAG;
              }
              seenTag = i2;
            } else {
              if (tagChange(ctag, text, i2)) {
                tokens.push({
                  tag: tagType,
                  n: trim(buf),
                  otag,
                  ctag,
                  i: tagType == "/" ? seenTag - otag.length : i2 + ctag.length
                });
                buf = "";
                i2 += ctag.length - 1;
                state = IN_TEXT;
                if (tagType == "{") {
                  if (ctag == "}}") {
                    i2++;
                  } else {
                    cleanTripleStache(tokens[tokens.length - 1]);
                  }
                }
              } else {
                buf += text.charAt(i2);
              }
            }
          }
          filterLine(seenTag, true);
          return tokens;
        };
        function cleanTripleStache(token) {
          if (token.n.substr(token.n.length - 1) === "}") {
            token.n = token.n.substring(0, token.n.length - 1);
          }
        }
        function trim(s2) {
          if (s2.trim) {
            return s2.trim();
          }
          return s2.replace(/^\s*|\s*$/g, "");
        }
        function tagChange(tag, text, index3) {
          if (text.charAt(index3) != tag.charAt(0)) {
            return false;
          }
          for (var i2 = 1, l2 = tag.length; i2 < l2; i2++) {
            if (text.charAt(index3 + i2) != tag.charAt(i2)) {
              return false;
            }
          }
          return true;
        }
        var allowedInSuper = { "_t": true, "\n": true, "$": true, "/": true };
        function buildTree(tokens, kind, stack, customTags) {
          var instructions = [], opener = null, tail = null, token = null;
          tail = stack[stack.length - 1];
          while (tokens.length > 0) {
            token = tokens.shift();
            if (tail && tail.tag == "<" && !(token.tag in allowedInSuper)) {
              throw new Error("Illegal content in < super tag.");
            }
            if (Hogan2.tags[token.tag] <= Hogan2.tags["$"] || isOpener(token, customTags)) {
              stack.push(token);
              token.nodes = buildTree(tokens, token.tag, stack, customTags);
            } else if (token.tag == "/") {
              if (stack.length === 0) {
                throw new Error("Closing tag without opener: /" + token.n);
              }
              opener = stack.pop();
              if (token.n != opener.n && !isCloser(token.n, opener.n, customTags)) {
                throw new Error("Nesting error: " + opener.n + " vs. " + token.n);
              }
              opener.end = token.i;
              return instructions;
            } else if (token.tag == "\n") {
              token.last = tokens.length == 0 || tokens[0].tag == "\n";
            }
            instructions.push(token);
          }
          if (stack.length > 0) {
            throw new Error("missing closing tag: " + stack.pop().n);
          }
          return instructions;
        }
        function isOpener(token, tags) {
          for (var i2 = 0, l2 = tags.length; i2 < l2; i2++) {
            if (tags[i2].o == token.n) {
              token.tag = "#";
              return true;
            }
          }
        }
        function isCloser(close, open, tags) {
          for (var i2 = 0, l2 = tags.length; i2 < l2; i2++) {
            if (tags[i2].c == close && tags[i2].o == open) {
              return true;
            }
          }
        }
        function stringifySubstitutions(obj) {
          var items = [];
          for (var key2 in obj) {
            items.push('"' + esc(key2) + '": function(c,p,t,i) {' + obj[key2] + "}");
          }
          return "{ " + items.join(",") + " }";
        }
        function stringifyPartials(codeObj) {
          var partials = [];
          for (var key2 in codeObj.partials) {
            partials.push('"' + esc(key2) + '":{name:"' + esc(codeObj.partials[key2].name) + '", ' + stringifyPartials(codeObj.partials[key2]) + "}");
          }
          return "partials: {" + partials.join(",") + "}, subs: " + stringifySubstitutions(codeObj.subs);
        }
        Hogan2.stringify = function(codeObj, text, options) {
          return "{code: function (c,p,i) { " + Hogan2.wrapMain(codeObj.code) + " }," + stringifyPartials(codeObj) + "}";
        };
        var serialNo = 0;
        Hogan2.generate = function(tree, text, options) {
          serialNo = 0;
          var context = { code: "", subs: {}, partials: {} };
          Hogan2.walk(tree, context);
          if (options.asString) {
            return this.stringify(context, text, options);
          }
          return this.makeTemplate(context, text, options);
        };
        Hogan2.wrapMain = function(code) {
          return 'var t=this;t.b(i=i||"");' + code + "return t.fl();";
        };
        Hogan2.template = Hogan2.Template;
        Hogan2.makeTemplate = function(codeObj, text, options) {
          var template = this.makePartials(codeObj);
          template.code = new Function("c", "p", "i", this.wrapMain(codeObj.code));
          return new this.template(template, text, this, options);
        };
        Hogan2.makePartials = function(codeObj) {
          var key2, template = { subs: {}, partials: codeObj.partials, name: codeObj.name };
          for (key2 in template.partials) {
            template.partials[key2] = this.makePartials(template.partials[key2]);
          }
          for (key2 in codeObj.subs) {
            template.subs[key2] = new Function("c", "p", "t", "i", codeObj.subs[key2]);
          }
          return template;
        };
        function esc(s2) {
          return s2.replace(rSlash, "\\\\").replace(rQuot, '\\"').replace(rNewline, "\\n").replace(rCr, "\\r").replace(rLineSep, "\\u2028").replace(rParagraphSep, "\\u2029");
        }
        function chooseMethod(s2) {
          return ~s2.indexOf(".") ? "d" : "f";
        }
        function createPartial(node, context) {
          var prefix = "<" + (context.prefix || "");
          var sym = prefix + node.n + serialNo++;
          context.partials[sym] = { name: node.n, partials: {} };
          context.code += 't.b(t.rp("' + esc(sym) + '",c,p,"' + (node.indent || "") + '"));';
          return sym;
        }
        Hogan2.codegen = {
          "#": function(node, context) {
            context.code += "if(t.s(t." + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,1),c,p,0,' + node.i + "," + node.end + ',"' + node.otag + " " + node.ctag + '")){t.rs(c,p,function(c,p,t){';
            Hogan2.walk(node.nodes, context);
            context.code += "});c.pop();}";
          },
          "^": function(node, context) {
            context.code += "if(!t.s(t." + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,1),c,p,1,0,0,"")){';
            Hogan2.walk(node.nodes, context);
            context.code += "};";
          },
          ">": createPartial,
          "<": function(node, context) {
            var ctx = { partials: {}, code: "", subs: {}, inPartial: true };
            Hogan2.walk(node.nodes, ctx);
            var template = context.partials[createPartial(node, context)];
            template.subs = ctx.subs;
            template.partials = ctx.partials;
          },
          "$": function(node, context) {
            var ctx = { subs: {}, code: "", partials: context.partials, prefix: node.n };
            Hogan2.walk(node.nodes, ctx);
            context.subs[node.n] = ctx.code;
            if (!context.inPartial) {
              context.code += 't.sub("' + esc(node.n) + '",c,p,i);';
            }
          },
          "\n": function(node, context) {
            context.code += write('"\\n"' + (node.last ? "" : " + i"));
          },
          "_v": function(node, context) {
            context.code += "t.b(t.v(t." + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,0)));';
          },
          "_t": function(node, context) {
            context.code += write('"' + esc(node.text) + '"');
          },
          "{": tripleStache,
          "&": tripleStache
        };
        function tripleStache(node, context) {
          context.code += "t.b(t.t(t." + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,0)));';
        }
        function write(s2) {
          return "t.b(" + s2 + ");";
        }
        Hogan2.walk = function(nodelist, context) {
          var func;
          for (var i2 = 0, l2 = nodelist.length; i2 < l2; i2++) {
            func = Hogan2.codegen[nodelist[i2].tag];
            func && func(nodelist[i2], context);
          }
          return context;
        };
        Hogan2.parse = function(tokens, text, options) {
          options = options || {};
          return buildTree(tokens, "", [], options.sectionTags || []);
        };
        Hogan2.cache = {};
        Hogan2.cacheKey = function(text, options) {
          return [text, !!options.asString, !!options.disableLambda, options.delimiters, !!options.modelGet].join("||");
        };
        Hogan2.compile = function(text, options) {
          options = options || {};
          var key2 = Hogan2.cacheKey(text, options);
          var template = this.cache[key2];
          if (template) {
            var partials = template.partials;
            for (var name in partials) {
              delete partials[name].instance;
            }
            return template;
          }
          template = this.generate(this.parse(this.scan(text, options.delimiters), text, options), text, options);
          return this.cache[key2] = template;
        };
      })(typeof exports !== "undefined" ? exports : Hogan);
    }
  });

  // node_modules/hogan.js/lib/template.js
  var require_template = __commonJS({
    "node_modules/hogan.js/lib/template.js"(exports) {
      var Hogan2 = {};
      (function(Hogan3) {
        Hogan3.Template = function(codeObj, text, compiler, options) {
          codeObj = codeObj || {};
          this.r = codeObj.code || this.r;
          this.c = compiler;
          this.options = options || {};
          this.text = text || "";
          this.partials = codeObj.partials || {};
          this.subs = codeObj.subs || {};
          this.buf = "";
        };
        Hogan3.Template.prototype = {
          r: function(context, partials, indent) {
            return "";
          },
          v: hoganEscape,
          t: coerceToString,
          render: function render(context, partials, indent) {
            return this.ri([context], partials || {}, indent);
          },
          ri: function(context, partials, indent) {
            return this.r(context, partials, indent);
          },
          ep: function(symbol, partials) {
            var partial = this.partials[symbol];
            var template = partials[partial.name];
            if (partial.instance && partial.base == template) {
              return partial.instance;
            }
            if (typeof template == "string") {
              if (!this.c) {
                throw new Error("No compiler available.");
              }
              template = this.c.compile(template, this.options);
            }
            if (!template) {
              return null;
            }
            this.partials[symbol].base = template;
            if (partial.subs) {
              if (!partials.stackText)
                partials.stackText = {};
              for (key in partial.subs) {
                if (!partials.stackText[key]) {
                  partials.stackText[key] = this.activeSub !== void 0 && partials.stackText[this.activeSub] ? partials.stackText[this.activeSub] : this.text;
                }
              }
              template = createSpecializedPartial(template, partial.subs, partial.partials, this.stackSubs, this.stackPartials, partials.stackText);
            }
            this.partials[symbol].instance = template;
            return template;
          },
          rp: function(symbol, context, partials, indent) {
            var partial = this.ep(symbol, partials);
            if (!partial) {
              return "";
            }
            return partial.ri(context, partials, indent);
          },
          rs: function(context, partials, section) {
            var tail = context[context.length - 1];
            if (!isArray(tail)) {
              section(context, partials, this);
              return;
            }
            for (var i2 = 0; i2 < tail.length; i2++) {
              context.push(tail[i2]);
              section(context, partials, this);
              context.pop();
            }
          },
          s: function(val, ctx, partials, inverted, start, end, tags) {
            var pass;
            if (isArray(val) && val.length === 0) {
              return false;
            }
            if (typeof val == "function") {
              val = this.ms(val, ctx, partials, inverted, start, end, tags);
            }
            pass = !!val;
            if (!inverted && pass && ctx) {
              ctx.push(typeof val == "object" ? val : ctx[ctx.length - 1]);
            }
            return pass;
          },
          d: function(key2, ctx, partials, returnFound) {
            var found, names = key2.split("."), val = this.f(names[0], ctx, partials, returnFound), doModelGet = this.options.modelGet, cx4 = null;
            if (key2 === "." && isArray(ctx[ctx.length - 2])) {
              val = ctx[ctx.length - 1];
            } else {
              for (var i2 = 1; i2 < names.length; i2++) {
                found = findInScope(names[i2], val, doModelGet);
                if (found !== void 0) {
                  cx4 = val;
                  val = found;
                } else {
                  val = "";
                }
              }
            }
            if (returnFound && !val) {
              return false;
            }
            if (!returnFound && typeof val == "function") {
              ctx.push(cx4);
              val = this.mv(val, ctx, partials);
              ctx.pop();
            }
            return val;
          },
          f: function(key2, ctx, partials, returnFound) {
            var val = false, v2 = null, found = false, doModelGet = this.options.modelGet;
            for (var i2 = ctx.length - 1; i2 >= 0; i2--) {
              v2 = ctx[i2];
              val = findInScope(key2, v2, doModelGet);
              if (val !== void 0) {
                found = true;
                break;
              }
            }
            if (!found) {
              return returnFound ? false : "";
            }
            if (!returnFound && typeof val == "function") {
              val = this.mv(val, ctx, partials);
            }
            return val;
          },
          ls: function(func, cx4, partials, text, tags) {
            var oldTags = this.options.delimiters;
            this.options.delimiters = tags;
            this.b(this.ct(coerceToString(func.call(cx4, text)), cx4, partials));
            this.options.delimiters = oldTags;
            return false;
          },
          ct: function(text, cx4, partials) {
            if (this.options.disableLambda) {
              throw new Error("Lambda features disabled.");
            }
            return this.c.compile(text, this.options).render(cx4, partials);
          },
          b: function(s2) {
            this.buf += s2;
          },
          fl: function() {
            var r2 = this.buf;
            this.buf = "";
            return r2;
          },
          ms: function(func, ctx, partials, inverted, start, end, tags) {
            var textSource, cx4 = ctx[ctx.length - 1], result = func.call(cx4);
            if (typeof result == "function") {
              if (inverted) {
                return true;
              } else {
                textSource = this.activeSub && this.subsText && this.subsText[this.activeSub] ? this.subsText[this.activeSub] : this.text;
                return this.ls(result, cx4, partials, textSource.substring(start, end), tags);
              }
            }
            return result;
          },
          mv: function(func, ctx, partials) {
            var cx4 = ctx[ctx.length - 1];
            var result = func.call(cx4);
            if (typeof result == "function") {
              return this.ct(coerceToString(result.call(cx4)), cx4, partials);
            }
            return result;
          },
          sub: function(name, context, partials, indent) {
            var f2 = this.subs[name];
            if (f2) {
              this.activeSub = name;
              f2(context, partials, this, indent);
              this.activeSub = false;
            }
          }
        };
        function findInScope(key2, scope, doModelGet) {
          var val;
          if (scope && typeof scope == "object") {
            if (scope[key2] !== void 0) {
              val = scope[key2];
            } else if (doModelGet && scope.get && typeof scope.get == "function") {
              val = scope.get(key2);
            }
          }
          return val;
        }
        function createSpecializedPartial(instance, subs, partials, stackSubs, stackPartials, stackText) {
          function PartialTemplate() {
          }
          ;
          PartialTemplate.prototype = instance;
          function Substitutions() {
          }
          ;
          Substitutions.prototype = instance.subs;
          var key2;
          var partial = new PartialTemplate();
          partial.subs = new Substitutions();
          partial.subsText = {};
          partial.buf = "";
          stackSubs = stackSubs || {};
          partial.stackSubs = stackSubs;
          partial.subsText = stackText;
          for (key2 in subs) {
            if (!stackSubs[key2])
              stackSubs[key2] = subs[key2];
          }
          for (key2 in stackSubs) {
            partial.subs[key2] = stackSubs[key2];
          }
          stackPartials = stackPartials || {};
          partial.stackPartials = stackPartials;
          for (key2 in partials) {
            if (!stackPartials[key2])
              stackPartials[key2] = partials[key2];
          }
          for (key2 in stackPartials) {
            partial.partials[key2] = stackPartials[key2];
          }
          return partial;
        }
        var rAmp = /&/g, rLt = /</g, rGt = />/g, rApos = /\'/g, rQuot = /\"/g, hChars = /[&<>\"\']/;
        function coerceToString(val) {
          return String(val === null || val === void 0 ? "" : val);
        }
        function hoganEscape(str) {
          str = coerceToString(str);
          return hChars.test(str) ? str.replace(rAmp, "&amp;").replace(rLt, "&lt;").replace(rGt, "&gt;").replace(rApos, "&#39;").replace(rQuot, "&quot;") : str;
        }
        var isArray = Array.isArray || function(a2) {
          return Object.prototype.toString.call(a2) === "[object Array]";
        };
      })(typeof exports !== "undefined" ? exports : Hogan2);
    }
  });

  // node_modules/hogan.js/lib/hogan.js
  var require_hogan = __commonJS({
    "node_modules/hogan.js/lib/hogan.js"(exports, module) {
      var Hogan2 = require_compiler();
      Hogan2.Template = require_template().Template;
      Hogan2.template = Hogan2.Template;
      module.exports = Hogan2;
    }
  });

  // node_modules/qs/lib/formats.js
  var require_formats = __commonJS({
    "node_modules/qs/lib/formats.js"(exports, module) {
      "use strict";
      var replace = String.prototype.replace;
      var percentTwenties = /%20/g;
      var Format = {
        RFC1738: "RFC1738",
        RFC3986: "RFC3986"
      };
      module.exports = {
        "default": Format.RFC3986,
        formatters: {
          RFC1738: function(value) {
            return replace.call(value, percentTwenties, "+");
          },
          RFC3986: function(value) {
            return String(value);
          }
        },
        RFC1738: Format.RFC1738,
        RFC3986: Format.RFC3986
      };
    }
  });

  // node_modules/qs/lib/utils.js
  var require_utils = __commonJS({
    "node_modules/qs/lib/utils.js"(exports, module) {
      "use strict";
      var formats = require_formats();
      var has = Object.prototype.hasOwnProperty;
      var isArray = Array.isArray;
      var hexTable = function() {
        var array = [];
        for (var i2 = 0; i2 < 256; ++i2) {
          array.push("%" + ((i2 < 16 ? "0" : "") + i2.toString(16)).toUpperCase());
        }
        return array;
      }();
      var compactQueue = function compactQueue2(queue) {
        while (queue.length > 1) {
          var item2 = queue.pop();
          var obj = item2.obj[item2.prop];
          if (isArray(obj)) {
            var compacted = [];
            for (var j2 = 0; j2 < obj.length; ++j2) {
              if (typeof obj[j2] !== "undefined") {
                compacted.push(obj[j2]);
              }
            }
            item2.obj[item2.prop] = compacted;
          }
        }
      };
      var arrayToObject = function arrayToObject2(source, options) {
        var obj = options && options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
        for (var i2 = 0; i2 < source.length; ++i2) {
          if (typeof source[i2] !== "undefined") {
            obj[i2] = source[i2];
          }
        }
        return obj;
      };
      var merge3 = function merge4(target, source, options) {
        if (!source) {
          return target;
        }
        if (typeof source !== "object") {
          if (isArray(target)) {
            target.push(source);
          } else if (target && typeof target === "object") {
            if (options && (options.plainObjects || options.allowPrototypes) || !has.call(Object.prototype, source)) {
              target[source] = true;
            }
          } else {
            return [target, source];
          }
          return target;
        }
        if (!target || typeof target !== "object") {
          return [target].concat(source);
        }
        var mergeTarget = target;
        if (isArray(target) && !isArray(source)) {
          mergeTarget = arrayToObject(target, options);
        }
        if (isArray(target) && isArray(source)) {
          source.forEach(function(item2, i2) {
            if (has.call(target, i2)) {
              var targetItem = target[i2];
              if (targetItem && typeof targetItem === "object" && item2 && typeof item2 === "object") {
                target[i2] = merge4(targetItem, item2, options);
              } else {
                target.push(item2);
              }
            } else {
              target[i2] = item2;
            }
          });
          return target;
        }
        return Object.keys(source).reduce(function(acc, key2) {
          var value = source[key2];
          if (has.call(acc, key2)) {
            acc[key2] = merge4(acc[key2], value, options);
          } else {
            acc[key2] = value;
          }
          return acc;
        }, mergeTarget);
      };
      var assign = function assignSingleSource(target, source) {
        return Object.keys(source).reduce(function(acc, key2) {
          acc[key2] = source[key2];
          return acc;
        }, target);
      };
      var decode = function(str, decoder, charset) {
        var strWithoutPlus = str.replace(/\+/g, " ");
        if (charset === "iso-8859-1") {
          return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
        }
        try {
          return decodeURIComponent(strWithoutPlus);
        } catch (e2) {
          return strWithoutPlus;
        }
      };
      var encode = function encode2(str, defaultEncoder, charset, kind, format) {
        if (str.length === 0) {
          return str;
        }
        var string = str;
        if (typeof str === "symbol") {
          string = Symbol.prototype.toString.call(str);
        } else if (typeof str !== "string") {
          string = String(str);
        }
        if (charset === "iso-8859-1") {
          return escape(string).replace(/%u[0-9a-f]{4}/gi, function($0) {
            return "%26%23" + parseInt($0.slice(2), 16) + "%3B";
          });
        }
        var out = "";
        for (var i2 = 0; i2 < string.length; ++i2) {
          var c2 = string.charCodeAt(i2);
          if (c2 === 45 || c2 === 46 || c2 === 95 || c2 === 126 || c2 >= 48 && c2 <= 57 || c2 >= 65 && c2 <= 90 || c2 >= 97 && c2 <= 122 || format === formats.RFC1738 && (c2 === 40 || c2 === 41)) {
            out += string.charAt(i2);
            continue;
          }
          if (c2 < 128) {
            out = out + hexTable[c2];
            continue;
          }
          if (c2 < 2048) {
            out = out + (hexTable[192 | c2 >> 6] + hexTable[128 | c2 & 63]);
            continue;
          }
          if (c2 < 55296 || c2 >= 57344) {
            out = out + (hexTable[224 | c2 >> 12] + hexTable[128 | c2 >> 6 & 63] + hexTable[128 | c2 & 63]);
            continue;
          }
          i2 += 1;
          c2 = 65536 + ((c2 & 1023) << 10 | string.charCodeAt(i2) & 1023);
          out += hexTable[240 | c2 >> 18] + hexTable[128 | c2 >> 12 & 63] + hexTable[128 | c2 >> 6 & 63] + hexTable[128 | c2 & 63];
        }
        return out;
      };
      var compact = function compact2(value) {
        var queue = [{ obj: { o: value }, prop: "o" }];
        var refs = [];
        for (var i2 = 0; i2 < queue.length; ++i2) {
          var item2 = queue[i2];
          var obj = item2.obj[item2.prop];
          var keys2 = Object.keys(obj);
          for (var j2 = 0; j2 < keys2.length; ++j2) {
            var key2 = keys2[j2];
            var val = obj[key2];
            if (typeof val === "object" && val !== null && refs.indexOf(val) === -1) {
              queue.push({ obj, prop: key2 });
              refs.push(val);
            }
          }
        }
        compactQueue(queue);
        return value;
      };
      var isRegExp = function isRegExp2(obj) {
        return Object.prototype.toString.call(obj) === "[object RegExp]";
      };
      var isBuffer = function isBuffer2(obj) {
        if (!obj || typeof obj !== "object") {
          return false;
        }
        return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
      };
      var combine = function combine2(a2, b2) {
        return [].concat(a2, b2);
      };
      var maybeMap = function maybeMap2(val, fn) {
        if (isArray(val)) {
          var mapped = [];
          for (var i2 = 0; i2 < val.length; i2 += 1) {
            mapped.push(fn(val[i2]));
          }
          return mapped;
        }
        return fn(val);
      };
      module.exports = {
        arrayToObject,
        assign,
        combine,
        compact,
        decode,
        encode,
        isBuffer,
        isRegExp,
        maybeMap,
        merge: merge3
      };
    }
  });

  // node_modules/qs/lib/stringify.js
  var require_stringify = __commonJS({
    "node_modules/qs/lib/stringify.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      var formats = require_formats();
      var has = Object.prototype.hasOwnProperty;
      var arrayPrefixGenerators = {
        brackets: function brackets(prefix) {
          return prefix + "[]";
        },
        comma: "comma",
        indices: function indices(prefix, key2) {
          return prefix + "[" + key2 + "]";
        },
        repeat: function repeat(prefix) {
          return prefix;
        }
      };
      var isArray = Array.isArray;
      var split = String.prototype.split;
      var push = Array.prototype.push;
      var pushToArray = function(arr, valueOrArray) {
        push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
      };
      var toISO = Date.prototype.toISOString;
      var defaultFormat = formats["default"];
      var defaults = {
        addQueryPrefix: false,
        allowDots: false,
        charset: "utf-8",
        charsetSentinel: false,
        delimiter: "&",
        encode: true,
        encoder: utils.encode,
        encodeValuesOnly: false,
        format: defaultFormat,
        formatter: formats.formatters[defaultFormat],
        indices: false,
        serializeDate: function serializeDate(date) {
          return toISO.call(date);
        },
        skipNulls: false,
        strictNullHandling: false
      };
      var isNonNullishPrimitive = function isNonNullishPrimitive2(v2) {
        return typeof v2 === "string" || typeof v2 === "number" || typeof v2 === "boolean" || typeof v2 === "symbol" || typeof v2 === "bigint";
      };
      var stringify = function stringify2(object, prefix, generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset) {
        var obj = object;
        if (typeof filter === "function") {
          obj = filter(prefix, obj);
        } else if (obj instanceof Date) {
          obj = serializeDate(obj);
        } else if (generateArrayPrefix === "comma" && isArray(obj)) {
          obj = utils.maybeMap(obj, function(value2) {
            if (value2 instanceof Date) {
              return serializeDate(value2);
            }
            return value2;
          });
        }
        if (obj === null) {
          if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, "key", format) : prefix;
          }
          obj = "";
        }
        if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
          if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, "key", format);
            if (generateArrayPrefix === "comma" && encodeValuesOnly) {
              var valuesArray = split.call(String(obj), ",");
              var valuesJoined = "";
              for (var i2 = 0; i2 < valuesArray.length; ++i2) {
                valuesJoined += (i2 === 0 ? "" : ",") + formatter(encoder(valuesArray[i2], defaults.encoder, charset, "value", format));
              }
              return [formatter(keyValue) + "=" + valuesJoined];
            }
            return [formatter(keyValue) + "=" + formatter(encoder(obj, defaults.encoder, charset, "value", format))];
          }
          return [formatter(prefix) + "=" + formatter(String(obj))];
        }
        var values = [];
        if (typeof obj === "undefined") {
          return values;
        }
        var objKeys;
        if (generateArrayPrefix === "comma" && isArray(obj)) {
          objKeys = [{ value: obj.length > 0 ? obj.join(",") || null : void 0 }];
        } else if (isArray(filter)) {
          objKeys = filter;
        } else {
          var keys2 = Object.keys(obj);
          objKeys = sort ? keys2.sort(sort) : keys2;
        }
        for (var j2 = 0; j2 < objKeys.length; ++j2) {
          var key2 = objKeys[j2];
          var value = typeof key2 === "object" && typeof key2.value !== "undefined" ? key2.value : obj[key2];
          if (skipNulls && value === null) {
            continue;
          }
          var keyPrefix = isArray(obj) ? typeof generateArrayPrefix === "function" ? generateArrayPrefix(prefix, key2) : prefix : prefix + (allowDots ? "." + key2 : "[" + key2 + "]");
          pushToArray(values, stringify2(value, keyPrefix, generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset));
        }
        return values;
      };
      var normalizeStringifyOptions = function normalizeStringifyOptions2(opts) {
        if (!opts) {
          return defaults;
        }
        if (opts.encoder !== null && typeof opts.encoder !== "undefined" && typeof opts.encoder !== "function") {
          throw new TypeError("Encoder has to be a function.");
        }
        var charset = opts.charset || defaults.charset;
        if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
          throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        }
        var format = formats["default"];
        if (typeof opts.format !== "undefined") {
          if (!has.call(formats.formatters, opts.format)) {
            throw new TypeError("Unknown format option provided.");
          }
          format = opts.format;
        }
        var formatter = formats.formatters[format];
        var filter = defaults.filter;
        if (typeof opts.filter === "function" || isArray(opts.filter)) {
          filter = opts.filter;
        }
        return {
          addQueryPrefix: typeof opts.addQueryPrefix === "boolean" ? opts.addQueryPrefix : defaults.addQueryPrefix,
          allowDots: typeof opts.allowDots === "undefined" ? defaults.allowDots : !!opts.allowDots,
          charset,
          charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
          delimiter: typeof opts.delimiter === "undefined" ? defaults.delimiter : opts.delimiter,
          encode: typeof opts.encode === "boolean" ? opts.encode : defaults.encode,
          encoder: typeof opts.encoder === "function" ? opts.encoder : defaults.encoder,
          encodeValuesOnly: typeof opts.encodeValuesOnly === "boolean" ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
          filter,
          format,
          formatter,
          serializeDate: typeof opts.serializeDate === "function" ? opts.serializeDate : defaults.serializeDate,
          skipNulls: typeof opts.skipNulls === "boolean" ? opts.skipNulls : defaults.skipNulls,
          sort: typeof opts.sort === "function" ? opts.sort : null,
          strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults.strictNullHandling
        };
      };
      module.exports = function(object, opts) {
        var obj = object;
        var options = normalizeStringifyOptions(opts);
        var objKeys;
        var filter;
        if (typeof options.filter === "function") {
          filter = options.filter;
          obj = filter("", obj);
        } else if (isArray(options.filter)) {
          filter = options.filter;
          objKeys = filter;
        }
        var keys2 = [];
        if (typeof obj !== "object" || obj === null) {
          return "";
        }
        var arrayFormat;
        if (opts && opts.arrayFormat in arrayPrefixGenerators) {
          arrayFormat = opts.arrayFormat;
        } else if (opts && "indices" in opts) {
          arrayFormat = opts.indices ? "indices" : "repeat";
        } else {
          arrayFormat = "indices";
        }
        var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];
        if (!objKeys) {
          objKeys = Object.keys(obj);
        }
        if (options.sort) {
          objKeys.sort(options.sort);
        }
        for (var i2 = 0; i2 < objKeys.length; ++i2) {
          var key2 = objKeys[i2];
          if (options.skipNulls && obj[key2] === null) {
            continue;
          }
          pushToArray(keys2, stringify(obj[key2], key2, generateArrayPrefix, options.strictNullHandling, options.skipNulls, options.encode ? options.encoder : null, options.filter, options.sort, options.allowDots, options.serializeDate, options.format, options.formatter, options.encodeValuesOnly, options.charset));
        }
        var joined = keys2.join(options.delimiter);
        var prefix = options.addQueryPrefix === true ? "?" : "";
        if (options.charsetSentinel) {
          if (options.charset === "iso-8859-1") {
            prefix += "utf8=%26%2310003%3B&";
          } else {
            prefix += "utf8=%E2%9C%93&";
          }
        }
        return joined.length > 0 ? prefix + joined : "";
      };
    }
  });

  // node_modules/qs/lib/parse.js
  var require_parse = __commonJS({
    "node_modules/qs/lib/parse.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      var has = Object.prototype.hasOwnProperty;
      var isArray = Array.isArray;
      var defaults = {
        allowDots: false,
        allowPrototypes: false,
        arrayLimit: 20,
        charset: "utf-8",
        charsetSentinel: false,
        comma: false,
        decoder: utils.decode,
        delimiter: "&",
        depth: 5,
        ignoreQueryPrefix: false,
        interpretNumericEntities: false,
        parameterLimit: 1e3,
        parseArrays: true,
        plainObjects: false,
        strictNullHandling: false
      };
      var interpretNumericEntities = function(str) {
        return str.replace(/&#(\d+);/g, function($0, numberStr) {
          return String.fromCharCode(parseInt(numberStr, 10));
        });
      };
      var parseArrayValue = function(val, options) {
        if (val && typeof val === "string" && options.comma && val.indexOf(",") > -1) {
          return val.split(",");
        }
        return val;
      };
      var isoSentinel = "utf8=%26%2310003%3B";
      var charsetSentinel = "utf8=%E2%9C%93";
      var parseValues = function parseQueryStringValues(str, options) {
        var obj = {};
        var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, "") : str;
        var limit = options.parameterLimit === Infinity ? void 0 : options.parameterLimit;
        var parts = cleanStr.split(options.delimiter, limit);
        var skipIndex = -1;
        var i2;
        var charset = options.charset;
        if (options.charsetSentinel) {
          for (i2 = 0; i2 < parts.length; ++i2) {
            if (parts[i2].indexOf("utf8=") === 0) {
              if (parts[i2] === charsetSentinel) {
                charset = "utf-8";
              } else if (parts[i2] === isoSentinel) {
                charset = "iso-8859-1";
              }
              skipIndex = i2;
              i2 = parts.length;
            }
          }
        }
        for (i2 = 0; i2 < parts.length; ++i2) {
          if (i2 === skipIndex) {
            continue;
          }
          var part = parts[i2];
          var bracketEqualsPos = part.indexOf("]=");
          var pos = bracketEqualsPos === -1 ? part.indexOf("=") : bracketEqualsPos + 1;
          var key2, val;
          if (pos === -1) {
            key2 = options.decoder(part, defaults.decoder, charset, "key");
            val = options.strictNullHandling ? null : "";
          } else {
            key2 = options.decoder(part.slice(0, pos), defaults.decoder, charset, "key");
            val = utils.maybeMap(parseArrayValue(part.slice(pos + 1), options), function(encodedVal) {
              return options.decoder(encodedVal, defaults.decoder, charset, "value");
            });
          }
          if (val && options.interpretNumericEntities && charset === "iso-8859-1") {
            val = interpretNumericEntities(val);
          }
          if (part.indexOf("[]=") > -1) {
            val = isArray(val) ? [val] : val;
          }
          if (has.call(obj, key2)) {
            obj[key2] = utils.combine(obj[key2], val);
          } else {
            obj[key2] = val;
          }
        }
        return obj;
      };
      var parseObject = function(chain, val, options, valuesParsed) {
        var leaf = valuesParsed ? val : parseArrayValue(val, options);
        for (var i2 = chain.length - 1; i2 >= 0; --i2) {
          var obj;
          var root = chain[i2];
          if (root === "[]" && options.parseArrays) {
            obj = [].concat(leaf);
          } else {
            obj = options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
            var cleanRoot = root.charAt(0) === "[" && root.charAt(root.length - 1) === "]" ? root.slice(1, -1) : root;
            var index3 = parseInt(cleanRoot, 10);
            if (!options.parseArrays && cleanRoot === "") {
              obj = { 0: leaf };
            } else if (!isNaN(index3) && root !== cleanRoot && String(index3) === cleanRoot && index3 >= 0 && (options.parseArrays && index3 <= options.arrayLimit)) {
              obj = [];
              obj[index3] = leaf;
            } else if (cleanRoot !== "__proto__") {
              obj[cleanRoot] = leaf;
            }
          }
          leaf = obj;
        }
        return leaf;
      };
      var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
        if (!givenKey) {
          return;
        }
        var key2 = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, "[$1]") : givenKey;
        var brackets = /(\[[^[\]]*])/;
        var child = /(\[[^[\]]*])/g;
        var segment = options.depth > 0 && brackets.exec(key2);
        var parent = segment ? key2.slice(0, segment.index) : key2;
        var keys2 = [];
        if (parent) {
          if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
              return;
            }
          }
          keys2.push(parent);
        }
        var i2 = 0;
        while (options.depth > 0 && (segment = child.exec(key2)) !== null && i2 < options.depth) {
          i2 += 1;
          if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
              return;
            }
          }
          keys2.push(segment[1]);
        }
        if (segment) {
          keys2.push("[" + key2.slice(segment.index) + "]");
        }
        return parseObject(keys2, val, options, valuesParsed);
      };
      var normalizeParseOptions = function normalizeParseOptions2(opts) {
        if (!opts) {
          return defaults;
        }
        if (opts.decoder !== null && opts.decoder !== void 0 && typeof opts.decoder !== "function") {
          throw new TypeError("Decoder has to be a function.");
        }
        if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
          throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        }
        var charset = typeof opts.charset === "undefined" ? defaults.charset : opts.charset;
        return {
          allowDots: typeof opts.allowDots === "undefined" ? defaults.allowDots : !!opts.allowDots,
          allowPrototypes: typeof opts.allowPrototypes === "boolean" ? opts.allowPrototypes : defaults.allowPrototypes,
          arrayLimit: typeof opts.arrayLimit === "number" ? opts.arrayLimit : defaults.arrayLimit,
          charset,
          charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
          comma: typeof opts.comma === "boolean" ? opts.comma : defaults.comma,
          decoder: typeof opts.decoder === "function" ? opts.decoder : defaults.decoder,
          delimiter: typeof opts.delimiter === "string" || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
          depth: typeof opts.depth === "number" || opts.depth === false ? +opts.depth : defaults.depth,
          ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
          interpretNumericEntities: typeof opts.interpretNumericEntities === "boolean" ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
          parameterLimit: typeof opts.parameterLimit === "number" ? opts.parameterLimit : defaults.parameterLimit,
          parseArrays: opts.parseArrays !== false,
          plainObjects: typeof opts.plainObjects === "boolean" ? opts.plainObjects : defaults.plainObjects,
          strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults.strictNullHandling
        };
      };
      module.exports = function(str, opts) {
        var options = normalizeParseOptions(opts);
        if (str === "" || str === null || typeof str === "undefined") {
          return options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
        }
        var tempObj = typeof str === "string" ? parseValues(str, options) : str;
        var obj = options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
        var keys2 = Object.keys(tempObj);
        for (var i2 = 0; i2 < keys2.length; ++i2) {
          var key2 = keys2[i2];
          var newObj = parseKeys(key2, tempObj[key2], options, typeof str === "string");
          obj = utils.merge(obj, newObj, options);
        }
        return utils.compact(obj);
      };
    }
  });

  // node_modules/qs/lib/index.js
  var require_lib = __commonJS({
    "node_modules/qs/lib/index.js"(exports, module) {
      "use strict";
      var stringify = require_stringify();
      var parse = require_parse();
      var formats = require_formats();
      module.exports = {
        formats,
        parse,
        stringify
      };
    }
  });

  // node_modules/classnames/index.js
  var require_classnames = __commonJS({
    "node_modules/classnames/index.js"(exports, module) {
      (function() {
        "use strict";
        var hasOwn = {}.hasOwnProperty;
        function classNames() {
          var classes = [];
          for (var i2 = 0; i2 < arguments.length; i2++) {
            var arg = arguments[i2];
            if (!arg)
              continue;
            var argType = typeof arg;
            if (argType === "string" || argType === "number") {
              classes.push(arg);
            } else if (Array.isArray(arg)) {
              if (arg.length) {
                var inner = classNames.apply(null, arg);
                if (inner) {
                  classes.push(inner);
                }
              }
            } else if (argType === "object") {
              if (arg.toString === Object.prototype.toString) {
                for (var key2 in arg) {
                  if (hasOwn.call(arg, key2) && arg[key2]) {
                    classes.push(key2);
                  }
                }
              } else {
                classes.push(arg.toString());
              }
            }
          }
          return classes.join(" ");
        }
        if (typeof module !== "undefined" && module.exports) {
          classNames.default = classNames;
          module.exports = classNames;
        } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
          define("classnames", [], function() {
            return classNames;
          });
        } else {
          window.classNames = classNames;
        }
      })();
    }
  });

  // src/search-source.js
  var import_instant_meilisearch = __toESM(require_instant_meilisearch_umd());

  // node_modules/instantsearch.js/es/lib/InstantSearch.js
  var import_algoliasearch_helper2 = __toESM(require_algoliasearch_helper2(), 1);
  var import_events = __toESM(require_events(), 1);

  // node_modules/instantsearch.js/es/widgets/index/index.js
  var import_algoliasearch_helper = __toESM(require_algoliasearch_helper2(), 1);

  // node_modules/instantsearch.js/es/lib/utils/capitalize.js
  function capitalize(text) {
    return text.toString().charAt(0).toUpperCase() + text.toString().slice(1);
  }
  var capitalize_default = capitalize;

  // node_modules/instantsearch.js/es/lib/utils/defer.js
  var nextMicroTask = Promise.resolve();
  var defer = function defer2(callback) {
    var progress = null;
    var cancelled = false;
    var fn = function fn2() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      if (progress !== null) {
        return;
      }
      progress = nextMicroTask.then(function() {
        progress = null;
        if (cancelled) {
          cancelled = false;
          return;
        }
        callback.apply(void 0, args);
      });
    };
    fn.wait = function() {
      if (progress === null) {
        throw new Error("The deferred function should be called before calling `wait()`");
      }
      return progress;
    };
    fn.cancel = function() {
      if (progress === null) {
        return;
      }
      cancelled = true;
    };
    return fn;
  };
  var defer_default = defer;

  // node_modules/instantsearch.js/es/lib/utils/isDomElement.js
  function isDomElement(object) {
    return object instanceof HTMLElement || Boolean(object) && object.nodeType > 0;
  }
  var isDomElement_default = isDomElement;

  // node_modules/instantsearch.js/es/lib/utils/getContainerNode.js
  function getContainerNode(selectorOrHTMLElement) {
    var isSelectorString = typeof selectorOrHTMLElement === "string";
    var domElement = isSelectorString ? document.querySelector(selectorOrHTMLElement) : selectorOrHTMLElement;
    if (!isDomElement_default(domElement)) {
      var errorMessage = "Container must be `string` or `HTMLElement`.";
      if (isSelectorString) {
        errorMessage += " Unable to find ".concat(selectorOrHTMLElement);
      }
      throw new Error(errorMessage);
    }
    return domElement;
  }
  var getContainerNode_default = getContainerNode;

  // node_modules/instantsearch.js/es/lib/utils/uniq.js
  function uniq(array) {
    return array.filter(function(value, index3, self2) {
      return self2.indexOf(value) === index3;
    });
  }
  var uniq_default = uniq;

  // node_modules/instantsearch.js/es/lib/utils/prepareTemplateProps.js
  function ownKeys(object, enumerableOnly) {
    var keys2 = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys2.push.apply(keys2, symbols);
    }
    return keys2;
  }
  function _objectSpread(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2] != null ? arguments[i2] : {};
      if (i2 % 2) {
        ownKeys(Object(source), true).forEach(function(key2) {
          _defineProperty(target, key2, source[key2]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function(key2) {
          Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
        });
      }
    }
    return target;
  }
  function _defineProperty(obj, key2, value) {
    if (key2 in obj) {
      Object.defineProperty(obj, key2, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key2] = value;
    }
    return obj;
  }
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray(o2, minLen) {
    if (!o2)
      return;
    if (typeof o2 === "string")
      return _arrayLikeToArray(o2, minLen);
    var n2 = Object.prototype.toString.call(o2).slice(8, -1);
    if (n2 === "Object" && o2.constructor)
      n2 = o2.constructor.name;
    if (n2 === "Map" || n2 === "Set")
      return Array.from(o2);
    if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
      return _arrayLikeToArray(o2, minLen);
  }
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter))
      return Array.from(iter);
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr))
      return _arrayLikeToArray(arr);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++) {
      arr2[i2] = arr[i2];
    }
    return arr2;
  }
  function prepareTemplates(defaultTemplates2) {
    var templates = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var allKeys = uniq_default([].concat(_toConsumableArray(Object.keys(defaultTemplates2 || {})), _toConsumableArray(Object.keys(templates))));
    return allKeys.reduce(function(config, key2) {
      var defaultTemplate2 = defaultTemplates2 ? defaultTemplates2[key2] : void 0;
      var customTemplate = templates[key2];
      var isCustomTemplate = customTemplate !== void 0 && customTemplate !== defaultTemplate2;
      config.templates[key2] = isCustomTemplate ? customTemplate : defaultTemplate2;
      config.useCustomCompileOptions[key2] = isCustomTemplate;
      return config;
    }, {
      templates: {},
      useCustomCompileOptions: {}
    });
  }
  function prepareTemplateProps(_ref) {
    var defaultTemplates2 = _ref.defaultTemplates, templates = _ref.templates, templatesConfig = _ref.templatesConfig;
    var preparedTemplates = prepareTemplates(defaultTemplates2, templates);
    return _objectSpread({
      templatesConfig
    }, preparedTemplates);
  }
  var prepareTemplateProps_default = prepareTemplateProps;

  // node_modules/instantsearch.js/es/lib/utils/renderTemplate.js
  var import_hogan = __toESM(require_hogan(), 1);
  function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof9(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof = function _typeof9(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof(obj);
  }
  function ownKeys2(object, enumerableOnly) {
    var keys2 = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys2.push.apply(keys2, symbols);
    }
    return keys2;
  }
  function _objectSpread2(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2] != null ? arguments[i2] : {};
      if (i2 % 2) {
        ownKeys2(Object(source), true).forEach(function(key2) {
          _defineProperty2(target, key2, source[key2]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys2(Object(source)).forEach(function(key2) {
          Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
        });
      }
    }
    return target;
  }
  function _defineProperty2(obj, key2, value) {
    if (key2 in obj) {
      Object.defineProperty(obj, key2, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key2] = value;
    }
    return obj;
  }
  function transformHelpersToHogan() {
    var helpers = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var compileOptions = arguments.length > 1 ? arguments[1] : void 0;
    var data = arguments.length > 2 ? arguments[2] : void 0;
    return Object.keys(helpers).reduce(function(acc, helperKey) {
      return _objectSpread2(_objectSpread2({}, acc), {}, _defineProperty2({}, helperKey, function() {
        var _this = this;
        return function(text) {
          var render = function render2(value) {
            return import_hogan.default.compile(value, compileOptions).render(_this);
          };
          return helpers[helperKey].call(data, text, render);
        };
      }));
    }, {});
  }
  function renderTemplate(_ref) {
    var templates = _ref.templates, templateKey = _ref.templateKey, compileOptions = _ref.compileOptions, helpers = _ref.helpers, data = _ref.data, bindEvent = _ref.bindEvent;
    var template = templates[templateKey];
    if (typeof template !== "string" && typeof template !== "function") {
      throw new Error("Template must be 'string' or 'function', was '".concat(_typeof(template), "' (key: ").concat(templateKey, ")"));
    }
    if (typeof template === "function") {
      return template(data, bindEvent);
    }
    var transformedHelpers = transformHelpersToHogan(helpers, compileOptions, data);
    return import_hogan.default.compile(template, compileOptions).render(_objectSpread2(_objectSpread2({}, data), {}, {
      helpers: transformedHelpers
    })).replace(/[ \n\r\t\f\xA0]+/g, function(spaces) {
      return spaces.replace(/(^|\xA0+)[^\xA0]+/g, "$1 ");
    }).trim();
  }
  var renderTemplate_default = renderTemplate;

  // node_modules/instantsearch.js/es/lib/utils/find.js
  function find(items, predicate) {
    var value;
    for (var i2 = 0; i2 < items.length; i2++) {
      value = items[i2];
      if (predicate(value, i2, items)) {
        return value;
      }
    }
    return void 0;
  }
  var find_default = find;

  // node_modules/instantsearch.js/es/lib/utils/getObjectType.js
  function getObjectType(object) {
    return Object.prototype.toString.call(object).slice(8, -1);
  }
  var getObjectType_default = getObjectType;

  // node_modules/instantsearch.js/es/lib/utils/checkRendering.js
  function checkRendering(rendering, usage) {
    if (rendering === void 0 || typeof rendering !== "function") {
      throw new Error("The render function is not valid (received type ".concat(getObjectType_default(rendering), ").\n\n").concat(usage));
    }
  }
  var checkRendering_default = checkRendering;

  // node_modules/instantsearch.js/es/lib/utils/noop.js
  function noop() {
  }
  var noop_default = noop;

  // node_modules/instantsearch.js/es/lib/utils/logger.js
  var deprecate = function deprecate2(fn, message) {
    return fn;
  };
  var warn = noop_default;
  var _warning = noop_default;
  if (true) {
    warn = function warn2(message) {
      console.warn("[InstantSearch.js]: ".concat(message.trim()));
    };
    deprecate = function deprecate3(fn, message) {
      var hasAlreadyPrinted = false;
      return function() {
        if (!hasAlreadyPrinted) {
          hasAlreadyPrinted = true;
          warn(message);
        }
        return fn.apply(void 0, arguments);
      };
    };
    _warning = function warning(condition, message) {
      if (condition) {
        return;
      }
      var hasAlreadyPrinted = _warning.cache[message];
      if (!hasAlreadyPrinted) {
        _warning.cache[message] = true;
        warn(message);
      }
    };
    _warning.cache = {};
  }

  // node_modules/instantsearch.js/es/lib/utils/typedObject.js
  var keys = Object.keys;

  // node_modules/instantsearch.js/es/lib/utils/checkIndexUiState.js
  function _toConsumableArray2(arr) {
    return _arrayWithoutHoles2(arr) || _iterableToArray2(arr) || _unsupportedIterableToArray2(arr) || _nonIterableSpread2();
  }
  function _nonIterableSpread2() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _iterableToArray2(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter))
      return Array.from(iter);
  }
  function _arrayWithoutHoles2(arr) {
    if (Array.isArray(arr))
      return _arrayLikeToArray2(arr);
  }
  function _slicedToArray(arr, i2) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i2) || _unsupportedIterableToArray2(arr, i2) || _nonIterableRest();
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray2(o2, minLen) {
    if (!o2)
      return;
    if (typeof o2 === "string")
      return _arrayLikeToArray2(o2, minLen);
    var n2 = Object.prototype.toString.call(o2).slice(8, -1);
    if (n2 === "Object" && o2.constructor)
      n2 = o2.constructor.name;
    if (n2 === "Map" || n2 === "Set")
      return Array.from(o2);
    if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
      return _arrayLikeToArray2(o2, minLen);
  }
  function _arrayLikeToArray2(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++) {
      arr2[i2] = arr[i2];
    }
    return arr2;
  }
  function _iterableToArrayLimit(arr, i2) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
      return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = void 0;
    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i2 && _arr.length === i2)
          break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null)
          _i["return"]();
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr))
      return arr;
  }
  function getWidgetNames(connectorName) {
    switch (connectorName) {
      case "range":
        return [];
      case "menu":
        return ["menu", "menuSelect"];
      default:
        return [connectorName];
    }
  }
  var stateToWidgetsMap = {
    query: {
      connectors: ["connectSearchBox"],
      widgets: ["ais.searchBox", "ais.autocomplete", "ais.voiceSearch"]
    },
    refinementList: {
      connectors: ["connectRefinementList"],
      widgets: ["ais.refinementList"]
    },
    menu: {
      connectors: ["connectMenu"],
      widgets: ["ais.menu"]
    },
    hierarchicalMenu: {
      connectors: ["connectHierarchicalMenu"],
      widgets: ["ais.hierarchicalMenu"]
    },
    numericMenu: {
      connectors: ["connectNumericMenu"],
      widgets: ["ais.numericMenu"]
    },
    ratingMenu: {
      connectors: ["connectRatingMenu"],
      widgets: ["ais.ratingMenu"]
    },
    range: {
      connectors: ["connectRange"],
      widgets: ["ais.rangeInput", "ais.rangeSlider", "ais.range"]
    },
    toggle: {
      connectors: ["connectToggleRefinement"],
      widgets: ["ais.toggleRefinement"]
    },
    geoSearch: {
      connectors: ["connectGeoSearch"],
      widgets: ["ais.geoSearch"]
    },
    sortBy: {
      connectors: ["connectSortBy"],
      widgets: ["ais.sortBy"]
    },
    page: {
      connectors: ["connectPagination"],
      widgets: ["ais.pagination", "ais.infiniteHits"]
    },
    hitsPerPage: {
      connectors: ["connectHitsPerPage"],
      widgets: ["ais.hitsPerPage"]
    },
    configure: {
      connectors: ["connectConfigure"],
      widgets: ["ais.configure"]
    },
    places: {
      connectors: [],
      widgets: ["ais.places"]
    }
  };
  function checkIndexUiState(_ref) {
    var index3 = _ref.index, indexUiState = _ref.indexUiState;
    var mountedWidgets = index3.getWidgets().map(function(widget) {
      return widget.$$type;
    }).filter(Boolean);
    var missingWidgets = keys(indexUiState).reduce(function(acc, parameter) {
      var widgetUiState = stateToWidgetsMap[parameter];
      if (!widgetUiState) {
        return acc;
      }
      var requiredWidgets = widgetUiState.widgets;
      if (requiredWidgets && !requiredWidgets.some(function(requiredWidget) {
        return mountedWidgets.includes(requiredWidget);
      })) {
        acc.push([parameter, {
          connectors: widgetUiState.connectors,
          widgets: widgetUiState.widgets.map(function(widgetIdentifier) {
            return widgetIdentifier.split("ais.")[1];
          })
        }]);
      }
      return acc;
    }, []);
    true ? _warning(missingWidgets.length === 0, 'The UI state for the index "'.concat(index3.getIndexId(), '" is not consistent with the widgets mounted.\n\nThis can happen when the UI state is specified via `initialUiState`, `routing` or `setUiState` but that the widgets responsible for this state were not added. This results in those query parameters not being sent to the API.\n\nTo fully reflect the state, some widgets need to be added to the index "').concat(index3.getIndexId(), '":\n\n').concat(missingWidgets.map(function(_ref2) {
      var _ref4;
      var _ref3 = _slicedToArray(_ref2, 2), stateParameter = _ref3[0], widgets = _ref3[1].widgets;
      return "- `".concat(stateParameter, "` needs one of these widgets: ").concat((_ref4 = []).concat.apply(_ref4, _toConsumableArray2(widgets.map(function(name) {
        return getWidgetNames(name);
      }))).map(function(name) {
        return '"'.concat(name, '"');
      }).join(", "));
    }).join("\n"), '\n\nIf you do not wish to display widgets but still want to support their search parameters, you can mount "virtual widgets" that don\'t render anything:\n\n```\n').concat(missingWidgets.filter(function(_ref5) {
      var _ref6 = _slicedToArray(_ref5, 2), _stateParameter = _ref6[0], connectors = _ref6[1].connectors;
      return connectors.length > 0;
    }).map(function(_ref7) {
      var _ref8 = _slicedToArray(_ref7, 2), _stateParameter = _ref8[0], _ref8$ = _ref8[1], connectors = _ref8$.connectors, widgets = _ref8$.widgets;
      var capitalizedWidget = capitalize_default(widgets[0]);
      var connectorName = connectors[0];
      return "const virtual".concat(capitalizedWidget, " = ").concat(connectorName, "(() => null);");
    }).join("\n"), "\n\nsearch.addWidgets([\n  ").concat(missingWidgets.filter(function(_ref9) {
      var _ref10 = _slicedToArray(_ref9, 2), _stateParameter = _ref10[0], connectors = _ref10[1].connectors;
      return connectors.length > 0;
    }).map(function(_ref11) {
      var _ref12 = _slicedToArray(_ref11, 2), _stateParameter = _ref12[0], widgets = _ref12[1].widgets;
      var capitalizedWidget = capitalize_default(widgets[0]);
      return "virtual".concat(capitalizedWidget, "({ /* ... */ })");
    }).join(",\n  "), "\n]);\n```\n\nIf you're using custom widgets that do set these query parameters, we recommend using connectors instead.\n\nSee https://www.algolia.com/doc/guides/building-search-ui/widgets/customize-an-existing-widget/js/#customize-the-complete-ui-of-the-widgets")) : void 0;
  }

  // node_modules/instantsearch.js/es/lib/utils/getPropertyByPath.js
  function getPropertyByPath(object, path) {
    var parts = Array.isArray(path) ? path : path.split(".");
    return parts.reduce(function(current, key2) {
      return current && current[key2];
    }, object);
  }
  var getPropertyByPath_default = getPropertyByPath;

  // node_modules/instantsearch.js/es/lib/utils/isPlainObject.js
  function _typeof2(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof2 = function _typeof9(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof2 = function _typeof9(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof2(obj);
  }
  function getTag(value) {
    if (value === null) {
      return value === void 0 ? "[object Undefined]" : "[object Null]";
    }
    return Object.prototype.toString.call(value);
  }
  function isObjectLike(value) {
    return _typeof2(value) === "object" && value !== null;
  }
  function isPlainObject(value) {
    if (!isObjectLike(value) || getTag(value) !== "[object Object]") {
      return false;
    }
    if (Object.getPrototypeOf(value) === null) {
      return true;
    }
    var proto = value;
    while (Object.getPrototypeOf(proto) !== null) {
      proto = Object.getPrototypeOf(proto);
    }
    return Object.getPrototypeOf(value) === proto;
  }
  var isPlainObject_default = isPlainObject;

  // node_modules/instantsearch.js/es/lib/utils/isEqual.js
  function isPrimitive(obj) {
    return obj !== Object(obj);
  }
  function isEqual(first, second) {
    if (first === second) {
      return true;
    }
    if (isPrimitive(first) || isPrimitive(second) || typeof first === "function" || typeof second === "function") {
      return first === second;
    }
    if (Object.keys(first).length !== Object.keys(second).length) {
      return false;
    }
    for (var _i = 0, _Object$keys = Object.keys(first); _i < _Object$keys.length; _i++) {
      var key2 = _Object$keys[_i];
      if (!(key2 in second)) {
        return false;
      }
      if (!isEqual(first[key2], second[key2])) {
        return false;
      }
    }
    return true;
  }
  var isEqual_default = isEqual;

  // node_modules/instantsearch.js/es/lib/utils/escape.js
  var htmlEscapes = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  };
  var regexUnescapedHtml = /[&<>"']/g;
  var regexHasUnescapedHtml = RegExp(regexUnescapedHtml.source);
  function escape2(value) {
    return value && regexHasUnescapedHtml.test(value) ? value.replace(regexUnescapedHtml, function(character) {
      return htmlEscapes[character];
    }) : value;
  }
  var escape_default = escape2;

  // node_modules/instantsearch.js/es/lib/utils/unescape.js
  var htmlEscapes2 = {
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&quot;": '"',
    "&#39;": "'"
  };
  var regexEscapedHtml = /&(amp|quot|lt|gt|#39);/g;
  var regexHasEscapedHtml = RegExp(regexEscapedHtml.source);
  function unescape2(value) {
    return value && regexHasEscapedHtml.test(value) ? value.replace(regexEscapedHtml, function(character) {
      return htmlEscapes2[character];
    }) : value;
  }

  // node_modules/instantsearch.js/es/lib/utils/escape-highlight.js
  function _extends() {
    _extends = Object.assign || function(target) {
      for (var i2 = 1; i2 < arguments.length; i2++) {
        var source = arguments[i2];
        for (var key2 in source) {
          if (Object.prototype.hasOwnProperty.call(source, key2)) {
            target[key2] = source[key2];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }
  function ownKeys3(object, enumerableOnly) {
    var keys2 = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys2.push.apply(keys2, symbols);
    }
    return keys2;
  }
  function _objectSpread3(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2] != null ? arguments[i2] : {};
      if (i2 % 2) {
        ownKeys3(Object(source), true).forEach(function(key2) {
          _defineProperty3(target, key2, source[key2]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys3(Object(source)).forEach(function(key2) {
          Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
        });
      }
    }
    return target;
  }
  function _defineProperty3(obj, key2, value) {
    if (key2 in obj) {
      Object.defineProperty(obj, key2, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key2] = value;
    }
    return obj;
  }
  var TAG_PLACEHOLDER = {
    highlightPreTag: "__ais-highlight__",
    highlightPostTag: "__/ais-highlight__"
  };
  var TAG_REPLACEMENT = {
    highlightPreTag: "<mark>",
    highlightPostTag: "</mark>"
  };
  function replaceTagsAndEscape(value) {
    return escape_default(value).replace(new RegExp(TAG_PLACEHOLDER.highlightPreTag, "g"), TAG_REPLACEMENT.highlightPreTag).replace(new RegExp(TAG_PLACEHOLDER.highlightPostTag, "g"), TAG_REPLACEMENT.highlightPostTag);
  }
  function recursiveEscape(input) {
    if (isPlainObject_default(input) && typeof input.value !== "string") {
      return Object.keys(input).reduce(function(acc, key2) {
        return _objectSpread3(_objectSpread3({}, acc), {}, _defineProperty3({}, key2, recursiveEscape(input[key2])));
      }, {});
    }
    if (Array.isArray(input)) {
      return input.map(recursiveEscape);
    }
    return _objectSpread3(_objectSpread3({}, input), {}, {
      value: replaceTagsAndEscape(input.value)
    });
  }
  function escapeHits(hits3) {
    if (hits3.__escaped === void 0) {
      hits3 = hits3.map(function(_ref) {
        var hit = _extends({}, _ref);
        if (hit._highlightResult) {
          hit._highlightResult = recursiveEscape(hit._highlightResult);
        }
        if (hit._snippetResult) {
          hit._snippetResult = recursiveEscape(hit._snippetResult);
        }
        return hit;
      });
      hits3.__escaped = true;
    }
    return hits3;
  }

  // node_modules/instantsearch.js/es/lib/utils/concatHighlightedParts.js
  function concatHighlightedParts(parts) {
    var highlightPreTag = TAG_REPLACEMENT.highlightPreTag, highlightPostTag = TAG_REPLACEMENT.highlightPostTag;
    return parts.map(function(part) {
      return part.isHighlighted ? highlightPreTag + part.value + highlightPostTag : part.value;
    }).join("");
  }

  // node_modules/instantsearch.js/es/lib/utils/getHighlightedParts.js
  function getHighlightedParts(highlightedValue) {
    var highlightPostTag = TAG_REPLACEMENT.highlightPostTag, highlightPreTag = TAG_REPLACEMENT.highlightPreTag;
    var splitByPreTag = highlightedValue.split(highlightPreTag);
    var firstValue = splitByPreTag.shift();
    var elements = !firstValue ? [] : [{
      value: firstValue,
      isHighlighted: false
    }];
    splitByPreTag.forEach(function(split) {
      var splitByPostTag = split.split(highlightPostTag);
      elements.push({
        value: splitByPostTag[0],
        isHighlighted: true
      });
      if (splitByPostTag[1] !== "") {
        elements.push({
          value: splitByPostTag[1],
          isHighlighted: false
        });
      }
    });
    return elements;
  }

  // node_modules/instantsearch.js/es/lib/utils/getHighlightFromSiblings.js
  var hasAlphanumeric = new RegExp(/\w/i);
  function getHighlightFromSiblings(parts, i2) {
    var _parts, _parts2;
    var current = parts[i2];
    var isNextHighlighted = ((_parts = parts[i2 + 1]) === null || _parts === void 0 ? void 0 : _parts.isHighlighted) || true;
    var isPreviousHighlighted = ((_parts2 = parts[i2 - 1]) === null || _parts2 === void 0 ? void 0 : _parts2.isHighlighted) || true;
    if (!hasAlphanumeric.test(unescape2(current.value)) && isPreviousHighlighted === isNextHighlighted) {
      return isPreviousHighlighted;
    }
    return current.isHighlighted;
  }

  // node_modules/instantsearch.js/es/lib/utils/reverseHighlightedParts.js
  function ownKeys4(object, enumerableOnly) {
    var keys2 = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys2.push.apply(keys2, symbols);
    }
    return keys2;
  }
  function _objectSpread4(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2] != null ? arguments[i2] : {};
      if (i2 % 2) {
        ownKeys4(Object(source), true).forEach(function(key2) {
          _defineProperty4(target, key2, source[key2]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys4(Object(source)).forEach(function(key2) {
          Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
        });
      }
    }
    return target;
  }
  function _defineProperty4(obj, key2, value) {
    if (key2 in obj) {
      Object.defineProperty(obj, key2, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key2] = value;
    }
    return obj;
  }
  function reverseHighlightedParts(parts) {
    if (!parts.some(function(part) {
      return part.isHighlighted;
    })) {
      return parts.map(function(part) {
        return _objectSpread4(_objectSpread4({}, part), {}, {
          isHighlighted: false
        });
      });
    }
    return parts.map(function(part, i2) {
      return _objectSpread4(_objectSpread4({}, part), {}, {
        isHighlighted: !getHighlightFromSiblings(parts, i2)
      });
    });
  }

  // node_modules/instantsearch.js/es/lib/utils/findIndex.js
  function findIndex(array, comparator) {
    if (!Array.isArray(array)) {
      return -1;
    }
    for (var i2 = 0; i2 < array.length; i2++) {
      if (comparator(array[i2])) {
        return i2;
      }
    }
    return -1;
  }
  var findIndex_default = findIndex;

  // node_modules/instantsearch.js/es/lib/utils/mergeSearchParameters.js
  function ownKeys5(object, enumerableOnly) {
    var keys2 = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys2.push.apply(keys2, symbols);
    }
    return keys2;
  }
  function _objectSpread5(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2] != null ? arguments[i2] : {};
      if (i2 % 2) {
        ownKeys5(Object(source), true).forEach(function(key2) {
          _defineProperty5(target, key2, source[key2]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys5(Object(source)).forEach(function(key2) {
          Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
        });
      }
    }
    return target;
  }
  function _defineProperty5(obj, key2, value) {
    if (key2 in obj) {
      Object.defineProperty(obj, key2, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key2] = value;
    }
    return obj;
  }
  function _objectWithoutProperties(source, excluded) {
    if (source == null)
      return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key2, i2;
    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
      for (i2 = 0; i2 < sourceSymbolKeys.length; i2++) {
        key2 = sourceSymbolKeys[i2];
        if (excluded.indexOf(key2) >= 0)
          continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key2))
          continue;
        target[key2] = source[key2];
      }
    }
    return target;
  }
  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null)
      return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key2, i2;
    for (i2 = 0; i2 < sourceKeys.length; i2++) {
      key2 = sourceKeys[i2];
      if (excluded.indexOf(key2) >= 0)
        continue;
      target[key2] = source[key2];
    }
    return target;
  }
  var mergeWithRest = function mergeWithRest2(left, right) {
    var facets = right.facets, disjunctiveFacets = right.disjunctiveFacets, facetsRefinements = right.facetsRefinements, facetsExcludes = right.facetsExcludes, disjunctiveFacetsRefinements = right.disjunctiveFacetsRefinements, numericRefinements = right.numericRefinements, tagRefinements = right.tagRefinements, hierarchicalFacets = right.hierarchicalFacets, hierarchicalFacetsRefinements = right.hierarchicalFacetsRefinements, ruleContexts = right.ruleContexts, rest = _objectWithoutProperties(right, ["facets", "disjunctiveFacets", "facetsRefinements", "facetsExcludes", "disjunctiveFacetsRefinements", "numericRefinements", "tagRefinements", "hierarchicalFacets", "hierarchicalFacetsRefinements", "ruleContexts"]);
    return left.setQueryParameters(rest);
  };
  var mergeFacets = function mergeFacets2(left, right) {
    return right.facets.reduce(function(_2, name) {
      return _2.addFacet(name);
    }, left);
  };
  var mergeDisjunctiveFacets = function mergeDisjunctiveFacets2(left, right) {
    return right.disjunctiveFacets.reduce(function(_2, name) {
      return _2.addDisjunctiveFacet(name);
    }, left);
  };
  var mergeHierarchicalFacets = function mergeHierarchicalFacets2(left, right) {
    return left.setQueryParameters({
      hierarchicalFacets: right.hierarchicalFacets.reduce(function(facets, facet) {
        var index3 = findIndex_default(facets, function(_2) {
          return _2.name === facet.name;
        });
        if (index3 === -1) {
          return facets.concat(facet);
        }
        var nextFacets = facets.slice();
        nextFacets.splice(index3, 1, facet);
        return nextFacets;
      }, left.hierarchicalFacets)
    });
  };
  var mergeTagRefinements = function mergeTagRefinements2(left, right) {
    return right.tagRefinements.reduce(function(_2, value) {
      return _2.addTagRefinement(value);
    }, left);
  };
  var mergeFacetRefinements = function mergeFacetRefinements2(left, right) {
    return left.setQueryParameters({
      facetsRefinements: _objectSpread5(_objectSpread5({}, left.facetsRefinements), right.facetsRefinements)
    });
  };
  var mergeFacetsExcludes = function mergeFacetsExcludes2(left, right) {
    return left.setQueryParameters({
      facetsExcludes: _objectSpread5(_objectSpread5({}, left.facetsExcludes), right.facetsExcludes)
    });
  };
  var mergeDisjunctiveFacetsRefinements = function mergeDisjunctiveFacetsRefinements2(left, right) {
    return left.setQueryParameters({
      disjunctiveFacetsRefinements: _objectSpread5(_objectSpread5({}, left.disjunctiveFacetsRefinements), right.disjunctiveFacetsRefinements)
    });
  };
  var mergeNumericRefinements = function mergeNumericRefinements2(left, right) {
    return left.setQueryParameters({
      numericRefinements: _objectSpread5(_objectSpread5({}, left.numericRefinements), right.numericRefinements)
    });
  };
  var mergeHierarchicalFacetsRefinements = function mergeHierarchicalFacetsRefinements2(left, right) {
    return left.setQueryParameters({
      hierarchicalFacetsRefinements: _objectSpread5(_objectSpread5({}, left.hierarchicalFacetsRefinements), right.hierarchicalFacetsRefinements)
    });
  };
  var mergeRuleContexts = function mergeRuleContexts2(left, right) {
    var ruleContexts = uniq_default([].concat(left.ruleContexts).concat(right.ruleContexts).filter(Boolean));
    if (ruleContexts.length > 0) {
      return left.setQueryParameters({
        ruleContexts
      });
    }
    return left;
  };
  var merge = function merge2() {
    for (var _len = arguments.length, parameters = new Array(_len), _key = 0; _key < _len; _key++) {
      parameters[_key] = arguments[_key];
    }
    return parameters.reduce(function(left, right) {
      var hierarchicalFacetsRefinementsMerged = mergeHierarchicalFacetsRefinements(left, right);
      var hierarchicalFacetsMerged = mergeHierarchicalFacets(hierarchicalFacetsRefinementsMerged, right);
      var tagRefinementsMerged = mergeTagRefinements(hierarchicalFacetsMerged, right);
      var numericRefinementsMerged = mergeNumericRefinements(tagRefinementsMerged, right);
      var disjunctiveFacetsRefinementsMerged = mergeDisjunctiveFacetsRefinements(numericRefinementsMerged, right);
      var facetsExcludesMerged = mergeFacetsExcludes(disjunctiveFacetsRefinementsMerged, right);
      var facetRefinementsMerged = mergeFacetRefinements(facetsExcludesMerged, right);
      var disjunctiveFacetsMerged = mergeDisjunctiveFacets(facetRefinementsMerged, right);
      var ruleContextsMerged = mergeRuleContexts(disjunctiveFacetsMerged, right);
      var facetsMerged = mergeFacets(ruleContextsMerged, right);
      return mergeWithRest(facetsMerged, right);
    });
  };
  var mergeSearchParameters_default = merge;

  // node_modules/instantsearch.js/es/lib/utils/resolveSearchParameters.js
  var resolveSearchParameters = function resolveSearchParameters2(current) {
    var parent = current.getParent();
    var states = [current.getHelper().state];
    while (parent !== null) {
      states = [parent.getHelper().state].concat(states);
      parent = parent.getParent();
    }
    return states;
  };
  var resolveSearchParameters_default = resolveSearchParameters;

  // node_modules/instantsearch.js/es/lib/utils/documentation.js
  var createDocumentationLink = function createDocumentationLink2(_ref) {
    var name = _ref.name, _ref$connector = _ref.connector, connector = _ref$connector === void 0 ? false : _ref$connector;
    return ["https://www.algolia.com/doc/api-reference/widgets/", name, "/js/", connector ? "#connector" : ""].join("");
  };
  var createDocumentationMessageGenerator = function createDocumentationMessageGenerator2() {
    for (var _len = arguments.length, widgets = new Array(_len), _key = 0; _key < _len; _key++) {
      widgets[_key] = arguments[_key];
    }
    var links = widgets.map(function(widget) {
      return createDocumentationLink(widget);
    }).join(", ");
    return function(message) {
      return [message, "See documentation: ".concat(links)].filter(Boolean).join("\n\n");
    };
  };

  // node_modules/instantsearch.js/es/lib/utils/hits-absolute-position.js
  function ownKeys6(object, enumerableOnly) {
    var keys2 = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys2.push.apply(keys2, symbols);
    }
    return keys2;
  }
  function _objectSpread6(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2] != null ? arguments[i2] : {};
      if (i2 % 2) {
        ownKeys6(Object(source), true).forEach(function(key2) {
          _defineProperty6(target, key2, source[key2]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys6(Object(source)).forEach(function(key2) {
          Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
        });
      }
    }
    return target;
  }
  function _defineProperty6(obj, key2, value) {
    if (key2 in obj) {
      Object.defineProperty(obj, key2, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key2] = value;
    }
    return obj;
  }
  function addAbsolutePosition(hits3, page, hitsPerPage) {
    return hits3.map(function(hit, idx) {
      return _objectSpread6(_objectSpread6({}, hit), {}, {
        __position: hitsPerPage * page + idx + 1
      });
    });
  }

  // node_modules/instantsearch.js/es/lib/utils/hits-query-id.js
  function ownKeys7(object, enumerableOnly) {
    var keys2 = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys2.push.apply(keys2, symbols);
    }
    return keys2;
  }
  function _objectSpread7(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2] != null ? arguments[i2] : {};
      if (i2 % 2) {
        ownKeys7(Object(source), true).forEach(function(key2) {
          _defineProperty7(target, key2, source[key2]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys7(Object(source)).forEach(function(key2) {
          Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
        });
      }
    }
    return target;
  }
  function _defineProperty7(obj, key2, value) {
    if (key2 in obj) {
      Object.defineProperty(obj, key2, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key2] = value;
    }
    return obj;
  }
  function addQueryID(hits3, queryID) {
    if (!queryID) {
      return hits3;
    }
    return hits3.map(function(hit) {
      return _objectSpread7(_objectSpread7({}, hit), {}, {
        __queryID: queryID
      });
    });
  }

  // node_modules/instantsearch.js/es/lib/utils/serializer.js
  function serializePayload(payload) {
    return btoa(encodeURIComponent(JSON.stringify(payload)));
  }
  function deserializePayload(serialized) {
    return JSON.parse(decodeURIComponent(atob(serialized)));
  }

  // node_modules/instantsearch.js/es/lib/utils/createSendEventForHits.js
  function _typeof3(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof3 = function _typeof9(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof3 = function _typeof9(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof3(obj);
  }
  function chunk(arr) {
    var chunkSize = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 20;
    var chunks = [];
    for (var i2 = 0; i2 < Math.ceil(arr.length / chunkSize); i2++) {
      chunks.push(arr.slice(i2 * chunkSize, (i2 + 1) * chunkSize));
    }
    return chunks;
  }
  var buildPayloads = function buildPayloads2(_ref) {
    var index3 = _ref.index, widgetType = _ref.widgetType, methodName = _ref.methodName, args = _ref.args, isSearchStalled = _ref.isSearchStalled;
    if (args.length === 1 && _typeof3(args[0]) === "object") {
      return [args[0]];
    }
    var eventType = args[0];
    var hits3 = args[1];
    var eventName = args[2];
    if (!hits3) {
      if (true) {
        throw new Error("You need to pass hit or hits as the second argument like:\n  ".concat(methodName, "(eventType, hit);\n  "));
      } else {
        return [];
      }
    }
    if ((eventType === "click" || eventType === "conversion") && !eventName) {
      if (true) {
        throw new Error("You need to pass eventName as the third argument for 'click' or 'conversion' events like:\n  ".concat(methodName, "('click', hit, 'Product Purchased');\n\n  To learn more about event naming: https://www.algolia.com/doc/guides/getting-insights-and-analytics/search-analytics/click-through-and-conversions/in-depth/clicks-conversions-best-practices/\n  "));
      } else {
        return [];
      }
    }
    var hitsArray = Array.isArray(hits3) ? removeEscapedFromHits(hits3) : [hits3];
    if (hitsArray.length === 0) {
      return [];
    }
    var queryID = hitsArray[0].__queryID;
    var hitsChunks = chunk(hitsArray);
    var objectIDsByChunk = hitsChunks.map(function(batch) {
      return batch.map(function(hit) {
        return hit.objectID;
      });
    });
    var positionsByChunk = hitsChunks.map(function(batch) {
      return batch.map(function(hit) {
        return hit.__position;
      });
    });
    if (eventType === "view") {
      if (isSearchStalled) {
        return [];
      }
      return hitsChunks.map(function(batch, i2) {
        return {
          insightsMethod: "viewedObjectIDs",
          widgetType,
          eventType,
          payload: {
            eventName: eventName || "Hits Viewed",
            index: index3,
            objectIDs: objectIDsByChunk[i2]
          },
          hits: batch
        };
      });
    } else if (eventType === "click") {
      return hitsChunks.map(function(batch, i2) {
        return {
          insightsMethod: "clickedObjectIDsAfterSearch",
          widgetType,
          eventType,
          payload: {
            eventName,
            index: index3,
            queryID,
            objectIDs: objectIDsByChunk[i2],
            positions: positionsByChunk[i2]
          },
          hits: batch
        };
      });
    } else if (eventType === "conversion") {
      return hitsChunks.map(function(batch, i2) {
        return {
          insightsMethod: "convertedObjectIDsAfterSearch",
          widgetType,
          eventType,
          payload: {
            eventName,
            index: index3,
            queryID,
            objectIDs: objectIDsByChunk[i2]
          },
          hits: batch
        };
      });
    } else if (true) {
      throw new Error('eventType("'.concat(eventType, '") is not supported.\n    If you want to send a custom payload, you can pass one object: ').concat(methodName, "(customPayload);\n    "));
    } else {
      return [];
    }
  };
  function removeEscapedFromHits(hits3) {
    return hits3.slice();
  }
  function createSendEventForHits(_ref2) {
    var instantSearchInstance = _ref2.instantSearchInstance, index3 = _ref2.index, widgetType = _ref2.widgetType;
    var sendEventForHits = function sendEventForHits2() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      var payloads = buildPayloads({
        widgetType,
        index: index3,
        methodName: "sendEvent",
        args,
        isSearchStalled: instantSearchInstance._isSearchStalled
      });
      payloads.forEach(function(payload) {
        return instantSearchInstance.sendEventToInsights(payload);
      });
    };
    return sendEventForHits;
  }
  function createBindEventForHits(_ref3) {
    var index3 = _ref3.index, widgetType = _ref3.widgetType;
    var bindEventForHits = function bindEventForHits2() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      var payloads = buildPayloads({
        widgetType,
        index: index3,
        methodName: "bindEvent",
        args,
        isSearchStalled: false
      });
      return payloads.length ? "data-insights-event=".concat(serializePayload(payloads)) : "";
    };
    return bindEventForHits;
  }

  // node_modules/instantsearch.js/es/lib/utils/getWidgetAttribute.js
  function getWidgetAttribute(widget, initOptions) {
    var _widget$getWidgetRend;
    var renderState = (_widget$getWidgetRend = widget.getWidgetRenderState) === null || _widget$getWidgetRend === void 0 ? void 0 : _widget$getWidgetRend.call(widget, initOptions);
    var attribute = null;
    if (renderState && renderState.widgetParams) {
      var widgetParams = renderState.widgetParams;
      if (widgetParams.attribute) {
        attribute = widgetParams.attribute;
      } else if (Array.isArray(widgetParams.attributes)) {
        attribute = widgetParams.attributes[0];
      }
    }
    if (typeof attribute !== "string") {
      throw new Error("Could not find the attribute of the widget:\n\n".concat(JSON.stringify(widget), "\n\nPlease check whether the widget's getWidgetRenderState returns widgetParams.attribute correctly."));
    }
    return attribute;
  }

  // node_modules/instantsearch.js/es/lib/utils/safelyRunOnBrowser.js
  function safelyRunOnBrowser(callback) {
    var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      fallback: function fallback2() {
        return void 0;
      }
    }, fallback = _ref.fallback;
    if (typeof window === "undefined") {
      return fallback();
    }
    return callback({
      window
    });
  }

  // node_modules/instantsearch.js/es/widgets/index/index.js
  function ownKeys8(object, enumerableOnly) {
    var keys2 = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys2.push.apply(keys2, symbols);
    }
    return keys2;
  }
  function _objectSpread8(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2] != null ? arguments[i2] : {};
      if (i2 % 2) {
        ownKeys8(Object(source), true).forEach(function(key2) {
          _defineProperty8(target, key2, source[key2]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys8(Object(source)).forEach(function(key2) {
          Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
        });
      }
    }
    return target;
  }
  function _defineProperty8(obj, key2, value) {
    if (key2 in obj) {
      Object.defineProperty(obj, key2, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key2] = value;
    }
    return obj;
  }
  function _toConsumableArray3(arr) {
    return _arrayWithoutHoles3(arr) || _iterableToArray3(arr) || _unsupportedIterableToArray3(arr) || _nonIterableSpread3();
  }
  function _nonIterableSpread3() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray3(o2, minLen) {
    if (!o2)
      return;
    if (typeof o2 === "string")
      return _arrayLikeToArray3(o2, minLen);
    var n2 = Object.prototype.toString.call(o2).slice(8, -1);
    if (n2 === "Object" && o2.constructor)
      n2 = o2.constructor.name;
    if (n2 === "Map" || n2 === "Set")
      return Array.from(o2);
    if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
      return _arrayLikeToArray3(o2, minLen);
  }
  function _iterableToArray3(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter))
      return Array.from(iter);
  }
  function _arrayWithoutHoles3(arr) {
    if (Array.isArray(arr))
      return _arrayLikeToArray3(arr);
  }
  function _arrayLikeToArray3(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++) {
      arr2[i2] = arr[i2];
    }
    return arr2;
  }
  function _objectWithoutProperties2(source, excluded) {
    if (source == null)
      return {};
    var target = _objectWithoutPropertiesLoose2(source, excluded);
    var key2, i2;
    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
      for (i2 = 0; i2 < sourceSymbolKeys.length; i2++) {
        key2 = sourceSymbolKeys[i2];
        if (excluded.indexOf(key2) >= 0)
          continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key2))
          continue;
        target[key2] = source[key2];
      }
    }
    return target;
  }
  function _objectWithoutPropertiesLoose2(source, excluded) {
    if (source == null)
      return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key2, i2;
    for (i2 = 0; i2 < sourceKeys.length; i2++) {
      key2 = sourceKeys[i2];
      if (excluded.indexOf(key2) >= 0)
        continue;
      target[key2] = source[key2];
    }
    return target;
  }
  var withUsage = createDocumentationMessageGenerator({
    name: "index-widget"
  });
  function isIndexWidget(widget) {
    return widget.$$type === "ais.index";
  }
  function privateHelperSetState(helper, _ref) {
    var state = _ref.state, isPageReset = _ref.isPageReset, _uiState = _ref._uiState;
    if (state !== helper.state) {
      helper.state = state;
      helper.emit("change", {
        state: helper.state,
        results: helper.lastResults,
        isPageReset,
        _uiState
      });
    }
  }
  function getLocalWidgetsUiState(widgets, widgetStateOptions) {
    var initialUiState = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return widgets.reduce(function(uiState, widget) {
      if (isIndexWidget(widget)) {
        return uiState;
      }
      if (!widget.getWidgetUiState && !widget.getWidgetState) {
        return uiState;
      }
      if (widget.getWidgetUiState) {
        return widget.getWidgetUiState(uiState, widgetStateOptions);
      }
      return widget.getWidgetState(uiState, widgetStateOptions);
    }, initialUiState);
  }
  function getLocalWidgetsSearchParameters(widgets, widgetSearchParametersOptions) {
    var initialSearchParameters = widgetSearchParametersOptions.initialSearchParameters, rest = _objectWithoutProperties2(widgetSearchParametersOptions, ["initialSearchParameters"]);
    return widgets.filter(function(widget) {
      return !isIndexWidget(widget);
    }).reduce(function(state, widget) {
      if (!widget.getWidgetSearchParameters) {
        return state;
      }
      return widget.getWidgetSearchParameters(state, rest);
    }, initialSearchParameters);
  }
  function resetPageFromWidgets(widgets) {
    var indexWidgets = widgets.filter(isIndexWidget);
    if (indexWidgets.length === 0) {
      return;
    }
    indexWidgets.forEach(function(widget) {
      var widgetHelper = widget.getHelper();
      privateHelperSetState(widgetHelper, {
        state: widgetHelper.state.resetPage(),
        isPageReset: true
      });
      resetPageFromWidgets(widget.getWidgets());
    });
  }
  function resolveScopedResultsFromWidgets(widgets) {
    var indexWidgets = widgets.filter(isIndexWidget);
    return indexWidgets.reduce(function(scopedResults, current) {
      return scopedResults.concat.apply(scopedResults, [{
        indexId: current.getIndexId(),
        results: current.getResults(),
        helper: current.getHelper()
      }].concat(_toConsumableArray3(resolveScopedResultsFromWidgets(current.getWidgets()))));
    }, []);
  }
  var index = function index2(widgetParams) {
    if (widgetParams === void 0 || widgetParams.indexName === void 0) {
      throw new Error(withUsage("The `indexName` option is required."));
    }
    var indexName = widgetParams.indexName, _widgetParams$indexId = widgetParams.indexId, indexId = _widgetParams$indexId === void 0 ? indexName : _widgetParams$indexId;
    var localWidgets = [];
    var localUiState = {};
    var localInstantSearchInstance = null;
    var localParent = null;
    var helper = null;
    var derivedHelper = null;
    return {
      $$type: "ais.index",
      $$widgetType: "ais.index",
      getIndexName: function getIndexName() {
        return indexName;
      },
      getIndexId: function getIndexId() {
        return indexId;
      },
      getHelper: function getHelper() {
        return helper;
      },
      getResults: function getResults() {
        return derivedHelper && derivedHelper.lastResults;
      },
      getScopedResults: function getScopedResults() {
        var widgetParent = this.getParent();
        var widgetSiblings = widgetParent ? widgetParent.getWidgets() : [this];
        return resolveScopedResultsFromWidgets(widgetSiblings);
      },
      getParent: function getParent() {
        return localParent;
      },
      createURL: function createURL(nextState) {
        return localInstantSearchInstance._createURL(_defineProperty8({}, indexId, getLocalWidgetsUiState(localWidgets, {
          searchParameters: nextState,
          helper
        })));
      },
      getWidgets: function getWidgets() {
        return localWidgets;
      },
      addWidgets: function addWidgets(widgets) {
        var _this = this;
        if (!Array.isArray(widgets)) {
          throw new Error(withUsage("The `addWidgets` method expects an array of widgets."));
        }
        if (widgets.some(function(widget) {
          return typeof widget.init !== "function" && typeof widget.render !== "function";
        })) {
          throw new Error(withUsage("The widget definition expects a `render` and/or an `init` method."));
        }
        localWidgets = localWidgets.concat(widgets);
        if (localInstantSearchInstance && Boolean(widgets.length)) {
          privateHelperSetState(helper, {
            state: getLocalWidgetsSearchParameters(localWidgets, {
              uiState: localUiState,
              initialSearchParameters: helper.state
            }),
            _uiState: localUiState
          });
          widgets.forEach(function(widget) {
            if (widget.getRenderState) {
              var renderState = widget.getRenderState(localInstantSearchInstance.renderState[_this.getIndexId()] || {}, {
                uiState: localInstantSearchInstance._initialUiState,
                helper: _this.getHelper(),
                parent: _this,
                instantSearchInstance: localInstantSearchInstance,
                state: helper.state,
                renderState: localInstantSearchInstance.renderState,
                templatesConfig: localInstantSearchInstance.templatesConfig,
                createURL: _this.createURL,
                scopedResults: [],
                searchMetadata: {
                  isSearchStalled: localInstantSearchInstance._isSearchStalled
                }
              });
              storeRenderState({
                renderState,
                instantSearchInstance: localInstantSearchInstance,
                parent: _this
              });
            }
          });
          widgets.forEach(function(widget) {
            if (widget.init) {
              widget.init({
                helper,
                parent: _this,
                uiState: localInstantSearchInstance._initialUiState,
                instantSearchInstance: localInstantSearchInstance,
                state: helper.state,
                renderState: localInstantSearchInstance.renderState,
                templatesConfig: localInstantSearchInstance.templatesConfig,
                createURL: _this.createURL,
                scopedResults: [],
                searchMetadata: {
                  isSearchStalled: localInstantSearchInstance._isSearchStalled
                }
              });
            }
          });
          localInstantSearchInstance.scheduleSearch();
        }
        return this;
      },
      removeWidgets: function removeWidgets(widgets) {
        var _this2 = this;
        if (!Array.isArray(widgets)) {
          throw new Error(withUsage("The `removeWidgets` method expects an array of widgets."));
        }
        if (widgets.some(function(widget) {
          return typeof widget.dispose !== "function";
        })) {
          throw new Error(withUsage("The widget definition expects a `dispose` method."));
        }
        localWidgets = localWidgets.filter(function(widget) {
          return widgets.indexOf(widget) === -1;
        });
        if (localInstantSearchInstance && Boolean(widgets.length)) {
          var nextState = widgets.reduce(function(state, widget) {
            var next = widget.dispose({
              helper,
              state,
              parent: _this2
            });
            return next || state;
          }, helper.state);
          localUiState = getLocalWidgetsUiState(localWidgets, {
            searchParameters: nextState,
            helper
          });
          helper.setState(getLocalWidgetsSearchParameters(localWidgets, {
            uiState: localUiState,
            initialSearchParameters: nextState
          }));
          if (localWidgets.length) {
            localInstantSearchInstance.scheduleSearch();
          }
        }
        return this;
      },
      init: function init(_ref2) {
        var _this3 = this, _instantSearchInstanc;
        var instantSearchInstance = _ref2.instantSearchInstance, parent = _ref2.parent, uiState = _ref2.uiState;
        if (helper !== null) {
          return;
        }
        localInstantSearchInstance = instantSearchInstance;
        localParent = parent;
        localUiState = uiState[indexId] || {};
        var mainHelper = instantSearchInstance.mainHelper;
        var parameters = getLocalWidgetsSearchParameters(localWidgets, {
          uiState: localUiState,
          initialSearchParameters: new import_algoliasearch_helper.default.SearchParameters({
            index: indexName
          })
        });
        helper = (0, import_algoliasearch_helper.default)({}, parameters.index, parameters);
        helper.search = function() {
          if (instantSearchInstance.onStateChange) {
            instantSearchInstance.onStateChange({
              uiState: instantSearchInstance.mainIndex.getWidgetUiState({}),
              setUiState: instantSearchInstance.setUiState.bind(instantSearchInstance)
            });
            return mainHelper;
          }
          return mainHelper.search();
        };
        helper.searchWithoutTriggeringOnStateChange = function() {
          return mainHelper.search();
        };
        helper.searchForFacetValues = function(facetName, facetValue, maxFacetHits, userState) {
          var state = helper.state.setQueryParameters(userState);
          return mainHelper.searchForFacetValues(facetName, facetValue, maxFacetHits, state);
        };
        derivedHelper = mainHelper.derive(function() {
          return mergeSearchParameters_default.apply(void 0, _toConsumableArray3(resolveSearchParameters_default(_this3)));
        });
        var indexInitialResults = (_instantSearchInstanc = instantSearchInstance._initialResults) === null || _instantSearchInstanc === void 0 ? void 0 : _instantSearchInstanc[this.getIndexId()];
        if (indexInitialResults) {
          var results = new import_algoliasearch_helper.default.SearchResults(new import_algoliasearch_helper.default.SearchParameters(indexInitialResults.state), indexInitialResults.results);
          derivedHelper.lastResults = results;
          helper.lastResults = results;
        }
        helper.on("change", function(_ref3) {
          var isPageReset = _ref3.isPageReset;
          if (isPageReset) {
            resetPageFromWidgets(localWidgets);
          }
        });
        derivedHelper.on("search", function() {
          instantSearchInstance.scheduleStalledRender();
          if (true) {
            checkIndexUiState({
              index: _this3,
              indexUiState: localUiState
            });
          }
        });
        derivedHelper.on("result", function(_ref4) {
          var results2 = _ref4.results;
          instantSearchInstance.scheduleRender();
          helper.lastResults = results2;
        });
        localWidgets.forEach(function(widget) {
          if (widget.getRenderState) {
            var renderState = widget.getRenderState(instantSearchInstance.renderState[_this3.getIndexId()] || {}, {
              uiState,
              helper,
              parent: _this3,
              instantSearchInstance,
              state: helper.state,
              renderState: instantSearchInstance.renderState,
              templatesConfig: instantSearchInstance.templatesConfig,
              createURL: _this3.createURL,
              scopedResults: [],
              searchMetadata: {
                isSearchStalled: instantSearchInstance._isSearchStalled
              }
            });
            storeRenderState({
              renderState,
              instantSearchInstance,
              parent: _this3
            });
          }
        });
        localWidgets.forEach(function(widget) {
          true ? _warning(!widget.getWidgetState || Boolean(widget.getWidgetUiState), "The `getWidgetState` method is renamed `getWidgetUiState` and will no longer exist under that name in InstantSearch.js 5.x. Please use `getWidgetUiState` instead.") : void 0;
          if (widget.init) {
            widget.init({
              uiState,
              helper,
              parent: _this3,
              instantSearchInstance,
              state: helper.state,
              renderState: instantSearchInstance.renderState,
              templatesConfig: instantSearchInstance.templatesConfig,
              createURL: _this3.createURL,
              scopedResults: [],
              searchMetadata: {
                isSearchStalled: instantSearchInstance._isSearchStalled
              }
            });
          }
        });
        helper.on("change", function(event) {
          var state = event.state;
          var _uiState = event._uiState;
          localUiState = getLocalWidgetsUiState(localWidgets, {
            searchParameters: state,
            helper
          }, _uiState || {});
          if (!instantSearchInstance.onStateChange) {
            instantSearchInstance.onInternalStateChange();
          }
        });
        if (indexInitialResults) {
          instantSearchInstance.scheduleRender();
        }
      },
      render: function render(_ref5) {
        var _this4 = this;
        var instantSearchInstance = _ref5.instantSearchInstance;
        if (!this.getResults()) {
          return;
        }
        localWidgets.forEach(function(widget) {
          if (widget.getRenderState) {
            var renderState = widget.getRenderState(instantSearchInstance.renderState[_this4.getIndexId()] || {}, {
              helper: _this4.getHelper(),
              parent: _this4,
              instantSearchInstance,
              results: _this4.getResults(),
              scopedResults: _this4.getScopedResults(),
              state: _this4.getResults()._state,
              renderState: instantSearchInstance.renderState,
              templatesConfig: instantSearchInstance.templatesConfig,
              createURL: _this4.createURL,
              searchMetadata: {
                isSearchStalled: instantSearchInstance._isSearchStalled
              }
            });
            storeRenderState({
              renderState,
              instantSearchInstance,
              parent: _this4
            });
          }
        });
        localWidgets.forEach(function(widget) {
          if (widget.render) {
            widget.render({
              helper,
              parent: _this4,
              instantSearchInstance,
              results: _this4.getResults(),
              scopedResults: _this4.getScopedResults(),
              state: _this4.getResults()._state,
              renderState: instantSearchInstance.renderState,
              templatesConfig: instantSearchInstance.templatesConfig,
              createURL: _this4.createURL,
              searchMetadata: {
                isSearchStalled: instantSearchInstance._isSearchStalled
              }
            });
          }
        });
      },
      dispose: function dispose() {
        var _this5 = this;
        localWidgets.forEach(function(widget) {
          if (widget.dispose) {
            widget.dispose({
              helper,
              state: helper.state,
              parent: _this5
            });
          }
        });
        localInstantSearchInstance = null;
        localParent = null;
        helper.removeAllListeners();
        helper = null;
        derivedHelper.detach();
        derivedHelper = null;
      },
      getWidgetUiState: function getWidgetUiState(uiState) {
        return localWidgets.filter(isIndexWidget).reduce(function(previousUiState, innerIndex) {
          return innerIndex.getWidgetUiState(previousUiState);
        }, _objectSpread8(_objectSpread8({}, uiState), {}, _defineProperty8({}, this.getIndexId(), localUiState)));
      },
      getWidgetState: function getWidgetState(uiState) {
        true ? _warning(false, "The `getWidgetState` method is renamed `getWidgetUiState` and will no longer exist under that name in InstantSearch.js 5.x. Please use `getWidgetUiState` instead.") : void 0;
        return this.getWidgetUiState(uiState);
      },
      getWidgetSearchParameters: function getWidgetSearchParameters(searchParameters, _ref6) {
        var uiState = _ref6.uiState;
        return getLocalWidgetsSearchParameters(localWidgets, {
          uiState,
          initialSearchParameters: searchParameters
        });
      },
      refreshUiState: function refreshUiState() {
        localUiState = getLocalWidgetsUiState(localWidgets, {
          searchParameters: this.getHelper().state,
          helper: this.getHelper()
        }, localUiState);
      }
    };
  };
  var index_default = index;
  function storeRenderState(_ref7) {
    var renderState = _ref7.renderState, instantSearchInstance = _ref7.instantSearchInstance, parent = _ref7.parent;
    var parentIndexName = parent ? parent.getIndexId() : instantSearchInstance.mainIndex.getIndexId();
    instantSearchInstance.renderState = _objectSpread8(_objectSpread8({}, instantSearchInstance.renderState), {}, _defineProperty8({}, parentIndexName, _objectSpread8(_objectSpread8({}, instantSearchInstance.renderState[parentIndexName]), renderState)));
  }

  // node_modules/instantsearch.js/es/lib/version.js
  var version_default = "4.43.1";

  // node_modules/instantsearch.js/es/lib/suit.js
  var NAMESPACE = "ais";
  var component = function component2(componentName) {
    return function() {
      var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, descendantName = _ref.descendantName, modifierName = _ref.modifierName;
      var descendent = descendantName ? "-".concat(descendantName) : "";
      var modifier = modifierName ? "--".concat(modifierName) : "";
      return "".concat(NAMESPACE, "-").concat(componentName).concat(descendent).concat(modifier);
    };
  };

  // node_modules/instantsearch.js/es/helpers/highlight.js
  var suit = component("Highlight");
  function highlight(_ref) {
    var attribute = _ref.attribute, _ref$highlightedTagNa = _ref.highlightedTagName, highlightedTagName = _ref$highlightedTagNa === void 0 ? "mark" : _ref$highlightedTagNa, hit = _ref.hit, _ref$cssClasses = _ref.cssClasses, cssClasses = _ref$cssClasses === void 0 ? {} : _ref$cssClasses;
    var highlightAttributeResult = getPropertyByPath_default(hit._highlightResult, attribute);
    true ? _warning(highlightAttributeResult, 'Could not enable highlight for "'.concat(attribute, '", will display an empty string.\nPlease check whether this attribute exists and is either searchable or specified in `attributesToHighlight`.\n\nSee: https://alg.li/highlighting\n')) : void 0;
    var _ref2 = highlightAttributeResult || {}, _ref2$value = _ref2.value, attributeValue = _ref2$value === void 0 ? "" : _ref2$value;
    var className = suit({
      descendantName: "highlighted"
    }) + (cssClasses.highlighted ? " ".concat(cssClasses.highlighted) : "");
    return attributeValue.replace(new RegExp(TAG_REPLACEMENT.highlightPreTag, "g"), "<".concat(highlightedTagName, ' class="').concat(className, '">')).replace(new RegExp(TAG_REPLACEMENT.highlightPostTag, "g"), "</".concat(highlightedTagName, ">"));
  }

  // node_modules/instantsearch.js/es/helpers/reverseHighlight.js
  var suit2 = component("ReverseHighlight");
  function reverseHighlight(_ref) {
    var attribute = _ref.attribute, _ref$highlightedTagNa = _ref.highlightedTagName, highlightedTagName = _ref$highlightedTagNa === void 0 ? "mark" : _ref$highlightedTagNa, hit = _ref.hit, _ref$cssClasses = _ref.cssClasses, cssClasses = _ref$cssClasses === void 0 ? {} : _ref$cssClasses;
    var highlightAttributeResult = getPropertyByPath_default(hit._highlightResult, attribute);
    true ? _warning(highlightAttributeResult, 'Could not enable reverse highlight for "'.concat(attribute, '", will display an empty string.\nPlease check whether this attribute exists and is either searchable or specified in `attributesToHighlight`.\n\nSee: https://alg.li/highlighting\n')) : void 0;
    var _ref2 = highlightAttributeResult || {}, _ref2$value = _ref2.value, attributeValue = _ref2$value === void 0 ? "" : _ref2$value;
    var className = suit2({
      descendantName: "highlighted"
    }) + (cssClasses.highlighted ? " ".concat(cssClasses.highlighted) : "");
    var reverseHighlightedValue = concatHighlightedParts(reverseHighlightedParts(getHighlightedParts(attributeValue)));
    return reverseHighlightedValue.replace(new RegExp(TAG_REPLACEMENT.highlightPreTag, "g"), "<".concat(highlightedTagName, ' class="').concat(className, '">')).replace(new RegExp(TAG_REPLACEMENT.highlightPostTag, "g"), "</".concat(highlightedTagName, ">"));
  }

  // node_modules/instantsearch.js/es/helpers/snippet.js
  var suit3 = component("Snippet");
  function snippet(_ref) {
    var attribute = _ref.attribute, _ref$highlightedTagNa = _ref.highlightedTagName, highlightedTagName = _ref$highlightedTagNa === void 0 ? "mark" : _ref$highlightedTagNa, hit = _ref.hit, _ref$cssClasses = _ref.cssClasses, cssClasses = _ref$cssClasses === void 0 ? {} : _ref$cssClasses;
    var snippetAttributeResult = getPropertyByPath_default(hit._snippetResult, attribute);
    true ? _warning(snippetAttributeResult, 'Could not enable snippet for "'.concat(attribute, '", will display an empty string.\nPlease check whether this attribute exists and is specified in `attributesToSnippet`.\n\nSee: https://alg.li/highlighting\n')) : void 0;
    var _ref2 = snippetAttributeResult || {}, _ref2$value = _ref2.value, attributeValue = _ref2$value === void 0 ? "" : _ref2$value;
    var className = suit3({
      descendantName: "highlighted"
    }) + (cssClasses.highlighted ? " ".concat(cssClasses.highlighted) : "");
    return attributeValue.replace(new RegExp(TAG_REPLACEMENT.highlightPreTag, "g"), "<".concat(highlightedTagName, ' class="').concat(className, '">')).replace(new RegExp(TAG_REPLACEMENT.highlightPostTag, "g"), "</".concat(highlightedTagName, ">"));
  }

  // node_modules/instantsearch.js/es/helpers/reverseSnippet.js
  var suit4 = component("ReverseSnippet");
  function reverseSnippet(_ref) {
    var attribute = _ref.attribute, _ref$highlightedTagNa = _ref.highlightedTagName, highlightedTagName = _ref$highlightedTagNa === void 0 ? "mark" : _ref$highlightedTagNa, hit = _ref.hit, _ref$cssClasses = _ref.cssClasses, cssClasses = _ref$cssClasses === void 0 ? {} : _ref$cssClasses;
    var snippetAttributeResult = getPropertyByPath_default(hit._snippetResult, attribute);
    true ? _warning(snippetAttributeResult, 'Could not enable reverse snippet for "'.concat(attribute, '", will display an empty string.\nPlease check whether this attribute exists and is specified in `attributesToSnippet`.\n\nSee: https://alg.li/highlighting\n')) : void 0;
    var _ref2 = snippetAttributeResult || {}, _ref2$value = _ref2.value, attributeValue = _ref2$value === void 0 ? "" : _ref2$value;
    var className = suit4({
      descendantName: "highlighted"
    }) + (cssClasses.highlighted ? " ".concat(cssClasses.highlighted) : "");
    var reverseHighlightedValue = concatHighlightedParts(reverseHighlightedParts(getHighlightedParts(attributeValue)));
    return reverseHighlightedValue.replace(new RegExp(TAG_REPLACEMENT.highlightPreTag, "g"), "<".concat(highlightedTagName, ' class="').concat(className, '">')).replace(new RegExp(TAG_REPLACEMENT.highlightPostTag, "g"), "</".concat(highlightedTagName, ">"));
  }

  // node_modules/instantsearch.js/es/helpers/insights.js
  function _typeof4(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof4 = function _typeof9(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof4 = function _typeof9(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof4(obj);
  }
  function readDataAttributes(domElement) {
    var method = domElement.getAttribute("data-insights-method");
    var serializedPayload = domElement.getAttribute("data-insights-payload");
    if (typeof serializedPayload !== "string") {
      throw new Error("The insights helper expects `data-insights-payload` to be a base64-encoded JSON string.");
    }
    try {
      var payload = deserializePayload(serializedPayload);
      return {
        method,
        payload
      };
    } catch (error) {
      throw new Error("The insights helper was unable to parse `data-insights-payload`.");
    }
  }
  function hasDataAttributes(domElement) {
    return domElement.hasAttribute("data-insights-method");
  }
  function writeDataAttributes(_ref) {
    var method = _ref.method, payload = _ref.payload;
    if (_typeof4(payload) !== "object") {
      throw new Error("The insights helper expects the payload to be an object.");
    }
    var serializedPayload;
    try {
      serializedPayload = serializePayload(payload);
    } catch (error) {
      throw new Error("Could not JSON serialize the payload object.");
    }
    return 'data-insights-method="'.concat(method, '" data-insights-payload="').concat(serializedPayload, '"');
  }
  function insights(method, payload) {
    true ? _warning(false, "`insights` function has been deprecated. It is still supported in 4.x releases, but not further. It is replaced by the `insights` middleware.\n\nFor more information, visit https://www.algolia.com/doc/guides/getting-insights-and-analytics/search-analytics/click-through-and-conversions/how-to/send-click-and-conversion-events-with-instantsearch/js/") : void 0;
    return writeDataAttributes({
      method,
      payload
    });
  }

  // node_modules/instantsearch.js/es/helpers/get-insights-anonymous-user-token.js
  var ANONYMOUS_TOKEN_COOKIE_KEY = "_ALGOLIA";
  function getCookie(name) {
    var prefix = "".concat(name, "=");
    var cookies = document.cookie.split(";");
    for (var i2 = 0; i2 < cookies.length; i2++) {
      var cookie = cookies[i2];
      while (cookie.charAt(0) === " ") {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(prefix) === 0) {
        return cookie.substring(prefix.length, cookie.length);
      }
    }
    return void 0;
  }
  function getInsightsAnonymousUserTokenInternal() {
    return getCookie(ANONYMOUS_TOKEN_COOKIE_KEY);
  }
  function getInsightsAnonymousUserToken() {
    true ? _warning(false, "`getInsightsAnonymousUserToken` function has been deprecated. It is still supported in 4.x releases, but not further. It is replaced by the `insights` middleware.\n\nFor more information, visit https://www.algolia.com/doc/guides/getting-insights-and-analytics/search-analytics/click-through-and-conversions/how-to/send-click-and-conversion-events-with-instantsearch/js/") : void 0;
    return getInsightsAnonymousUserTokenInternal();
  }

  // node_modules/instantsearch.js/es/lib/createHelpers.js
  function ownKeys9(object, enumerableOnly) {
    var keys2 = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys2.push.apply(keys2, symbols);
    }
    return keys2;
  }
  function _objectSpread9(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2] != null ? arguments[i2] : {};
      if (i2 % 2) {
        ownKeys9(Object(source), true).forEach(function(key2) {
          _defineProperty9(target, key2, source[key2]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys9(Object(source)).forEach(function(key2) {
          Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
        });
      }
    }
    return target;
  }
  function _defineProperty9(obj, key2, value) {
    if (key2 in obj) {
      Object.defineProperty(obj, key2, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key2] = value;
    }
    return obj;
  }
  function hoganHelpers(_ref) {
    var numberLocale = _ref.numberLocale;
    return {
      formatNumber: function formatNumber(value, render) {
        return Number(render(value)).toLocaleString(numberLocale);
      },
      highlight: function highlight2(options, render) {
        try {
          var highlightOptions = JSON.parse(options);
          return render(highlight(_objectSpread9(_objectSpread9({}, highlightOptions), {}, {
            hit: this
          })));
        } catch (error) {
          throw new Error('\nThe highlight helper expects a JSON object of the format:\n{ "attribute": "name", "highlightedTagName": "mark" }');
        }
      },
      reverseHighlight: function reverseHighlight2(options, render) {
        try {
          var reverseHighlightOptions = JSON.parse(options);
          return render(reverseHighlight(_objectSpread9(_objectSpread9({}, reverseHighlightOptions), {}, {
            hit: this
          })));
        } catch (error) {
          throw new Error('\n  The reverseHighlight helper expects a JSON object of the format:\n  { "attribute": "name", "highlightedTagName": "mark" }');
        }
      },
      snippet: function snippet2(options, render) {
        try {
          var snippetOptions = JSON.parse(options);
          return render(snippet(_objectSpread9(_objectSpread9({}, snippetOptions), {}, {
            hit: this
          })));
        } catch (error) {
          throw new Error('\nThe snippet helper expects a JSON object of the format:\n{ "attribute": "name", "highlightedTagName": "mark" }');
        }
      },
      reverseSnippet: function reverseSnippet2(options, render) {
        try {
          var reverseSnippetOptions = JSON.parse(options);
          return render(reverseSnippet(_objectSpread9(_objectSpread9({}, reverseSnippetOptions), {}, {
            hit: this
          })));
        } catch (error) {
          throw new Error('\n  The reverseSnippet helper expects a JSON object of the format:\n  { "attribute": "name", "highlightedTagName": "mark" }');
        }
      },
      insights: function insights2(options, render) {
        try {
          var _JSON$parse = JSON.parse(options), method = _JSON$parse.method, payload = _JSON$parse.payload;
          return render(insights(method, _objectSpread9({
            objectIDs: [this.objectID]
          }, payload)));
        } catch (error) {
          throw new Error('\nThe insights helper expects a JSON object of the format:\n{ "method": "method-name", "payload": { "eventName": "name of the event" } }');
        }
      }
    };
  }

  // node_modules/instantsearch.js/es/lib/stateMappings/simple.js
  function ownKeys10(object, enumerableOnly) {
    var keys2 = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys2.push.apply(keys2, symbols);
    }
    return keys2;
  }
  function _objectSpread10(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2] != null ? arguments[i2] : {};
      if (i2 % 2) {
        ownKeys10(Object(source), true).forEach(function(key2) {
          _defineProperty10(target, key2, source[key2]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys10(Object(source)).forEach(function(key2) {
          Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
        });
      }
    }
    return target;
  }
  function _defineProperty10(obj, key2, value) {
    if (key2 in obj) {
      Object.defineProperty(obj, key2, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key2] = value;
    }
    return obj;
  }
  function _objectWithoutProperties3(source, excluded) {
    if (source == null)
      return {};
    var target = _objectWithoutPropertiesLoose3(source, excluded);
    var key2, i2;
    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
      for (i2 = 0; i2 < sourceSymbolKeys.length; i2++) {
        key2 = sourceSymbolKeys[i2];
        if (excluded.indexOf(key2) >= 0)
          continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key2))
          continue;
        target[key2] = source[key2];
      }
    }
    return target;
  }
  function _objectWithoutPropertiesLoose3(source, excluded) {
    if (source == null)
      return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key2, i2;
    for (i2 = 0; i2 < sourceKeys.length; i2++) {
      key2 = sourceKeys[i2];
      if (excluded.indexOf(key2) >= 0)
        continue;
      target[key2] = source[key2];
    }
    return target;
  }
  function getIndexStateWithoutConfigure(uiState) {
    var configure3 = uiState.configure, trackedUiState = _objectWithoutProperties3(uiState, ["configure"]);
    return trackedUiState;
  }
  function simpleStateMapping() {
    return {
      stateToRoute: function stateToRoute(uiState) {
        return Object.keys(uiState).reduce(function(state, indexId) {
          return _objectSpread10(_objectSpread10({}, state), {}, _defineProperty10({}, indexId, getIndexStateWithoutConfigure(uiState[indexId])));
        }, {});
      },
      routeToState: function routeToState() {
        var routeState = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        return Object.keys(routeState).reduce(function(state, indexId) {
          return _objectSpread10(_objectSpread10({}, state), {}, _defineProperty10({}, indexId, getIndexStateWithoutConfigure(routeState[indexId])));
        }, {});
      }
    };
  }

  // node_modules/instantsearch.js/es/lib/routers/history.js
  var import_qs = __toESM(require_lib(), 1);
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i2 = 0; i2 < props.length; i2++) {
      var descriptor = props[i2];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  function _defineProperty11(obj, key2, value) {
    if (key2 in obj) {
      Object.defineProperty(obj, key2, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key2] = value;
    }
    return obj;
  }
  var setWindowTitle = function setWindowTitle2(title) {
    if (title) {
      window.document.title = title;
    }
  };
  var BrowserHistory = /* @__PURE__ */ function() {
    function BrowserHistory2(_ref) {
      var _this = this;
      var windowTitle = _ref.windowTitle, _ref$writeDelay = _ref.writeDelay, writeDelay = _ref$writeDelay === void 0 ? 400 : _ref$writeDelay, createURL = _ref.createURL, parseURL = _ref.parseURL, getLocation = _ref.getLocation;
      _classCallCheck(this, BrowserHistory2);
      _defineProperty11(this, "windowTitle", void 0);
      _defineProperty11(this, "writeDelay", void 0);
      _defineProperty11(this, "_createURL", void 0);
      _defineProperty11(this, "parseURL", void 0);
      _defineProperty11(this, "getLocation", void 0);
      _defineProperty11(this, "writeTimer", void 0);
      _defineProperty11(this, "inPopState", false);
      _defineProperty11(this, "isDisposed", false);
      _defineProperty11(this, "latestAcknowledgedHistory", 0);
      this.windowTitle = windowTitle;
      this.writeTimer = void 0;
      this.writeDelay = writeDelay;
      this._createURL = createURL;
      this.parseURL = parseURL;
      this.getLocation = getLocation;
      safelyRunOnBrowser(function(_ref2) {
        var window2 = _ref2.window;
        var title = _this.windowTitle && _this.windowTitle(_this.read());
        setWindowTitle(title);
        _this.latestAcknowledgedHistory = window2.history.length;
      });
    }
    _createClass(BrowserHistory2, [{
      key: "read",
      value: function read() {
        return this.parseURL({
          qsModule: import_qs.default,
          location: this.getLocation()
        });
      }
    }, {
      key: "write",
      value: function write(routeState) {
        var _this2 = this;
        safelyRunOnBrowser(function(_ref3) {
          var window2 = _ref3.window;
          var url = _this2.createURL(routeState);
          var title = _this2.windowTitle && _this2.windowTitle(routeState);
          if (_this2.writeTimer) {
            clearTimeout(_this2.writeTimer);
          }
          _this2.writeTimer = setTimeout(function() {
            setWindowTitle(title);
            if (_this2.shouldWrite(url)) {
              window2.history.pushState(routeState, title || "", url);
              _this2.latestAcknowledgedHistory = window2.history.length;
            }
            _this2.inPopState = false;
            _this2.writeTimer = void 0;
          }, _this2.writeDelay);
        });
      }
    }, {
      key: "onUpdate",
      value: function onUpdate(callback) {
        var _this3 = this;
        this._onPopState = function(event) {
          if (_this3.writeTimer) {
            clearTimeout(_this3.writeTimer);
            _this3.writeTimer = void 0;
          }
          _this3.inPopState = true;
          var routeState = event.state;
          if (!routeState) {
            callback(_this3.read());
          } else {
            callback(routeState);
          }
        };
        safelyRunOnBrowser(function(_ref4) {
          var window2 = _ref4.window;
          window2.addEventListener("popstate", _this3._onPopState);
        });
      }
    }, {
      key: "createURL",
      value: function createURL(routeState) {
        return this._createURL({
          qsModule: import_qs.default,
          routeState,
          location: this.getLocation()
        });
      }
    }, {
      key: "dispose",
      value: function dispose() {
        var _this4 = this;
        this.isDisposed = true;
        safelyRunOnBrowser(function(_ref5) {
          var window2 = _ref5.window;
          if (_this4._onPopState) {
            window2.removeEventListener("popstate", _this4._onPopState);
          }
        });
        if (this.writeTimer) {
          clearTimeout(this.writeTimer);
        }
        this.write({});
      }
    }, {
      key: "shouldWrite",
      value: function shouldWrite(url) {
        var _this5 = this;
        return safelyRunOnBrowser(function(_ref6) {
          var window2 = _ref6.window;
          var lastPushWasByISAfterDispose = !(_this5.isDisposed && _this5.latestAcknowledgedHistory !== window2.history.length);
          return !_this5.inPopState && lastPushWasByISAfterDispose && url !== window2.location.href;
        });
      }
    }]);
    return BrowserHistory2;
  }();
  function historyRouter() {
    var _ref7 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref7$createURL = _ref7.createURL, createURL = _ref7$createURL === void 0 ? function(_ref8) {
      var qsModule = _ref8.qsModule, routeState = _ref8.routeState, location = _ref8.location;
      var protocol = location.protocol, hostname = location.hostname, _location$port = location.port, port = _location$port === void 0 ? "" : _location$port, pathname = location.pathname, hash = location.hash;
      var queryString = qsModule.stringify(routeState);
      var portWithPrefix = port === "" ? "" : ":".concat(port);
      if (!queryString) {
        return "".concat(protocol, "//").concat(hostname).concat(portWithPrefix).concat(pathname).concat(hash);
      }
      return "".concat(protocol, "//").concat(hostname).concat(portWithPrefix).concat(pathname, "?").concat(queryString).concat(hash);
    } : _ref7$createURL, _ref7$parseURL = _ref7.parseURL, parseURL = _ref7$parseURL === void 0 ? function(_ref9) {
      var qsModule = _ref9.qsModule, location = _ref9.location;
      return qsModule.parse(location.search.slice(1), {
        arrayLimit: 99
      });
    } : _ref7$parseURL, _ref7$writeDelay = _ref7.writeDelay, writeDelay = _ref7$writeDelay === void 0 ? 400 : _ref7$writeDelay, windowTitle = _ref7.windowTitle, _ref7$getLocation = _ref7.getLocation, getLocation = _ref7$getLocation === void 0 ? function() {
      return safelyRunOnBrowser(function(_ref10) {
        var window2 = _ref10.window;
        return window2.location;
      }, {
        fallback: function fallback() {
          throw new Error("You need to provide `getLocation` to the `history` router in environments where `window` does not exist.");
        }
      });
    } : _ref7$getLocation;
    return new BrowserHistory({
      createURL,
      parseURL,
      writeDelay,
      windowTitle,
      getLocation
    });
  }

  // node_modules/instantsearch.js/es/middlewares/createRouterMiddleware.js
  function ownKeys11(object, enumerableOnly) {
    var keys2 = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys2.push.apply(keys2, symbols);
    }
    return keys2;
  }
  function _objectSpread11(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2] != null ? arguments[i2] : {};
      if (i2 % 2) {
        ownKeys11(Object(source), true).forEach(function(key2) {
          _defineProperty12(target, key2, source[key2]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys11(Object(source)).forEach(function(key2) {
          Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
        });
      }
    }
    return target;
  }
  function _defineProperty12(obj, key2, value) {
    if (key2 in obj) {
      Object.defineProperty(obj, key2, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key2] = value;
    }
    return obj;
  }
  var createRouterMiddleware = function createRouterMiddleware2() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _props$router = props.router, router = _props$router === void 0 ? historyRouter() : _props$router, _props$stateMapping = props.stateMapping, stateMapping = _props$stateMapping === void 0 ? simpleStateMapping() : _props$stateMapping;
    return function(_ref) {
      var instantSearchInstance = _ref.instantSearchInstance;
      function topLevelCreateURL(nextState) {
        var uiState = Object.keys(nextState).reduce(function(acc, indexId) {
          return _objectSpread11(_objectSpread11({}, acc), {}, _defineProperty12({}, indexId, nextState[indexId]));
        }, instantSearchInstance.mainIndex.getWidgetUiState({}));
        var route = stateMapping.stateToRoute(uiState);
        return router.createURL(route);
      }
      instantSearchInstance._createURL = topLevelCreateURL;
      var lastRouteState = void 0;
      var initialUiState = instantSearchInstance._initialUiState;
      return {
        onStateChange: function onStateChange(_ref2) {
          var uiState = _ref2.uiState;
          var routeState = stateMapping.stateToRoute(uiState);
          if (lastRouteState === void 0 || !isEqual_default(lastRouteState, routeState)) {
            router.write(routeState);
            lastRouteState = routeState;
          }
        },
        subscribe: function subscribe() {
          instantSearchInstance._initialUiState = _objectSpread11(_objectSpread11({}, initialUiState), stateMapping.routeToState(router.read()));
          router.onUpdate(function(route) {
            instantSearchInstance.setUiState(stateMapping.routeToState(route));
          });
        },
        unsubscribe: function unsubscribe() {
          router.dispose();
        }
      };
    };
  };

  // node_modules/instantsearch.js/es/middlewares/createMetadataMiddleware.js
  function extractPayload(widgets, instantSearchInstance, payload) {
    var parent = instantSearchInstance.mainIndex;
    var initOptions = {
      instantSearchInstance,
      parent,
      scopedResults: [],
      state: parent.getHelper().state,
      helper: parent.getHelper(),
      createURL: parent.createURL,
      uiState: instantSearchInstance._initialUiState,
      renderState: instantSearchInstance.renderState,
      templatesConfig: instantSearchInstance.templatesConfig,
      searchMetadata: {
        isSearchStalled: instantSearchInstance._isSearchStalled
      }
    };
    widgets.forEach(function(widget) {
      var widgetParams = {};
      if (widget.getWidgetRenderState) {
        var renderState = widget.getWidgetRenderState(initOptions);
        if (renderState && renderState.widgetParams) {
          widgetParams = renderState.widgetParams;
        }
      }
      var params = Object.keys(widgetParams).filter(function(key2) {
        return widgetParams[key2] !== void 0;
      });
      payload.widgets.push({
        type: widget.$$type,
        widgetType: widget.$$widgetType,
        params
      });
      if (widget.$$type === "ais.index") {
        extractPayload(widget.getWidgets(), instantSearchInstance, payload);
      }
    });
  }
  function isMetadataEnabled() {
    return safelyRunOnBrowser(function(_ref) {
      var _window$navigator, _window$navigator$use;
      var window2 = _ref.window;
      return ((_window$navigator = window2.navigator) === null || _window$navigator === void 0 ? void 0 : (_window$navigator$use = _window$navigator.userAgent) === null || _window$navigator$use === void 0 ? void 0 : _window$navigator$use.indexOf("Algolia Crawler")) > -1;
    }, {
      fallback: function fallback() {
        return false;
      }
    });
  }
  function createMetadataMiddleware() {
    return function(_ref2) {
      var instantSearchInstance = _ref2.instantSearchInstance;
      var payload = {
        widgets: []
      };
      var payloadContainer = document.createElement("meta");
      var refNode = document.querySelector("head");
      payloadContainer.name = "instantsearch:widgets";
      return {
        onStateChange: function onStateChange() {
        },
        subscribe: function subscribe() {
          setTimeout(function() {
            var client = instantSearchInstance.client;
            payload.ua = client.transporter && client.transporter.userAgent ? client.transporter.userAgent.value : client._ua;
            extractPayload(instantSearchInstance.mainIndex.getWidgets(), instantSearchInstance, payload);
            payloadContainer.content = JSON.stringify(payload);
            refNode.appendChild(payloadContainer);
          }, 0);
        },
        unsubscribe: function unsubscribe() {
          payloadContainer.remove();
        }
      };
    };
  }

  // node_modules/instantsearch.js/es/lib/InstantSearch.js
  function _typeof5(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof5 = function _typeof9(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof5 = function _typeof9(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof5(obj);
  }
  function ownKeys12(object, enumerableOnly) {
    var keys2 = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys2.push.apply(keys2, symbols);
    }
    return keys2;
  }
  function _objectSpread12(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2] != null ? arguments[i2] : {};
      if (i2 % 2) {
        ownKeys12(Object(source), true).forEach(function(key2) {
          _defineProperty13(target, key2, source[key2]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys12(Object(source)).forEach(function(key2) {
          Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
        });
      }
    }
    return target;
  }
  function _classCallCheck2(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties2(target, props) {
    for (var i2 = 0; i2 < props.length; i2++) {
      var descriptor = props[i2];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass2(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties2(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties2(Constructor, staticProps);
    return Constructor;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf(subClass, superClass);
  }
  function _setPrototypeOf(o2, p2) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf4(o3, p3) {
      o3.__proto__ = p3;
      return o3;
    };
    return _setPrototypeOf(o2, p2);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _possibleConstructorReturn(self2, call) {
    if (call && (_typeof5(call) === "object" || typeof call === "function")) {
      return call;
    }
    return _assertThisInitialized(self2);
  }
  function _assertThisInitialized(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function() {
      }));
      return true;
    } catch (e2) {
      return false;
    }
  }
  function _getPrototypeOf(o2) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf4(o3) {
      return o3.__proto__ || Object.getPrototypeOf(o3);
    };
    return _getPrototypeOf(o2);
  }
  function _defineProperty13(obj, key2, value) {
    if (key2 in obj) {
      Object.defineProperty(obj, key2, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key2] = value;
    }
    return obj;
  }
  var withUsage2 = createDocumentationMessageGenerator({
    name: "instantsearch"
  });
  function defaultCreateURL() {
    return "#";
  }
  var InstantSearch = /* @__PURE__ */ function(_EventEmitter) {
    _inherits(InstantSearch2, _EventEmitter);
    var _super = _createSuper(InstantSearch2);
    function InstantSearch2(options) {
      var _this;
      _classCallCheck2(this, InstantSearch2);
      _this = _super.call(this);
      _defineProperty13(_assertThisInitialized(_this), "client", void 0);
      _defineProperty13(_assertThisInitialized(_this), "indexName", void 0);
      _defineProperty13(_assertThisInitialized(_this), "insightsClient", void 0);
      _defineProperty13(_assertThisInitialized(_this), "onStateChange", null);
      _defineProperty13(_assertThisInitialized(_this), "helper", void 0);
      _defineProperty13(_assertThisInitialized(_this), "mainHelper", void 0);
      _defineProperty13(_assertThisInitialized(_this), "mainIndex", void 0);
      _defineProperty13(_assertThisInitialized(_this), "started", void 0);
      _defineProperty13(_assertThisInitialized(_this), "templatesConfig", void 0);
      _defineProperty13(_assertThisInitialized(_this), "renderState", {});
      _defineProperty13(_assertThisInitialized(_this), "_stalledSearchDelay", void 0);
      _defineProperty13(_assertThisInitialized(_this), "_searchStalledTimer", void 0);
      _defineProperty13(_assertThisInitialized(_this), "_isSearchStalled", void 0);
      _defineProperty13(_assertThisInitialized(_this), "_initialUiState", void 0);
      _defineProperty13(_assertThisInitialized(_this), "_initialResults", void 0);
      _defineProperty13(_assertThisInitialized(_this), "_createURL", void 0);
      _defineProperty13(_assertThisInitialized(_this), "_searchFunction", void 0);
      _defineProperty13(_assertThisInitialized(_this), "_mainHelperSearch", void 0);
      _defineProperty13(_assertThisInitialized(_this), "middleware", []);
      _defineProperty13(_assertThisInitialized(_this), "sendEventToInsights", void 0);
      _defineProperty13(_assertThisInitialized(_this), "scheduleSearch", defer_default(function() {
        if (_this.started) {
          _this.mainHelper.search();
        }
      }));
      _defineProperty13(_assertThisInitialized(_this), "scheduleRender", defer_default(function() {
        if (!_this.mainHelper.hasPendingRequests()) {
          clearTimeout(_this._searchStalledTimer);
          _this._searchStalledTimer = null;
          _this._isSearchStalled = false;
        }
        _this.mainIndex.render({
          instantSearchInstance: _assertThisInitialized(_this)
        });
        _this.emit("render");
      }));
      _defineProperty13(_assertThisInitialized(_this), "onInternalStateChange", defer_default(function() {
        var nextUiState = _this.mainIndex.getWidgetUiState({});
        _this.middleware.forEach(function(_ref) {
          var instance = _ref.instance;
          instance.onStateChange({
            uiState: nextUiState
          });
        });
      }));
      var _options$indexName = options.indexName, indexName = _options$indexName === void 0 ? null : _options$indexName, numberLocale = options.numberLocale, _options$initialUiSta = options.initialUiState, initialUiState = _options$initialUiSta === void 0 ? {} : _options$initialUiSta, _options$routing = options.routing, routing = _options$routing === void 0 ? null : _options$routing, searchFunction = options.searchFunction, _options$stalledSearc = options.stalledSearchDelay, stalledSearchDelay = _options$stalledSearc === void 0 ? 200 : _options$stalledSearc, _options$searchClient = options.searchClient, searchClient = _options$searchClient === void 0 ? null : _options$searchClient, _options$insightsClie = options.insightsClient, insightsClient = _options$insightsClie === void 0 ? null : _options$insightsClie, _options$onStateChang = options.onStateChange, onStateChange = _options$onStateChang === void 0 ? null : _options$onStateChang;
      if (indexName === null) {
        throw new Error(withUsage2("The `indexName` option is required."));
      }
      if (searchClient === null) {
        throw new Error(withUsage2("The `searchClient` option is required."));
      }
      if (typeof searchClient.search !== "function") {
        throw new Error("The `searchClient` must implement a `search` method.\n\nSee: https://www.algolia.com/doc/guides/building-search-ui/going-further/backend-search/in-depth/backend-instantsearch/js/");
      }
      if (typeof searchClient.addAlgoliaAgent === "function") {
        searchClient.addAlgoliaAgent("instantsearch.js (".concat(version_default, ")"));
      }
      true ? _warning(insightsClient === null, "`insightsClient` property has been deprecated. It is still supported in 4.x releases, but not further. It is replaced by the `insights` middleware.\n\nFor more information, visit https://www.algolia.com/doc/guides/getting-insights-and-analytics/search-analytics/click-through-and-conversions/how-to/send-click-and-conversion-events-with-instantsearch/js/") : void 0;
      if (insightsClient && typeof insightsClient !== "function") {
        throw new Error(withUsage2("The `insightsClient` option should be a function."));
      }
      true ? _warning(!options.searchParameters, "The `searchParameters` option is deprecated and will not be supported in InstantSearch.js 4.x.\n\nYou can replace it with the `configure` widget:\n\n```\nsearch.addWidgets([\n  configure(".concat(JSON.stringify(options.searchParameters, null, 2), ")\n]);\n```\n\nSee ").concat(createDocumentationLink({
        name: "configure"
      }))) : void 0;
      _this.client = searchClient;
      _this.insightsClient = insightsClient;
      _this.indexName = indexName;
      _this.helper = null;
      _this.mainHelper = null;
      _this.mainIndex = index_default({
        indexName
      });
      _this.onStateChange = onStateChange;
      _this.started = false;
      _this.templatesConfig = {
        helpers: hoganHelpers({
          numberLocale
        }),
        compileOptions: {}
      };
      _this._stalledSearchDelay = stalledSearchDelay;
      _this._searchStalledTimer = null;
      _this._isSearchStalled = false;
      _this._createURL = defaultCreateURL;
      _this._initialUiState = initialUiState;
      _this._initialResults = null;
      if (searchFunction) {
        _this._searchFunction = searchFunction;
      }
      _this.sendEventToInsights = noop_default;
      if (routing) {
        var routerOptions = typeof routing === "boolean" ? void 0 : routing;
        _this.use(createRouterMiddleware(routerOptions));
      }
      if (isMetadataEnabled()) {
        _this.use(createMetadataMiddleware());
      }
      return _this;
    }
    _createClass2(InstantSearch2, [{
      key: "use",
      value: function use() {
        var _this2 = this;
        for (var _len = arguments.length, middleware = new Array(_len), _key = 0; _key < _len; _key++) {
          middleware[_key] = arguments[_key];
        }
        var newMiddlewareList = middleware.map(function(fn) {
          var newMiddleware = _objectSpread12({
            subscribe: noop_default,
            unsubscribe: noop_default,
            onStateChange: noop_default
          }, fn({
            instantSearchInstance: _this2
          }));
          _this2.middleware.push({
            creator: fn,
            instance: newMiddleware
          });
          return newMiddleware;
        });
        if (this.started) {
          newMiddlewareList.forEach(function(m2) {
            m2.subscribe();
          });
        }
        return this;
      }
    }, {
      key: "unuse",
      value: function unuse() {
        for (var _len2 = arguments.length, middlewareToUnuse = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          middlewareToUnuse[_key2] = arguments[_key2];
        }
        this.middleware.filter(function(m2) {
          return middlewareToUnuse.includes(m2.creator);
        }).forEach(function(m2) {
          return m2.instance.unsubscribe();
        });
        this.middleware = this.middleware.filter(function(m2) {
          return !middlewareToUnuse.includes(m2.creator);
        });
        return this;
      }
    }, {
      key: "EXPERIMENTAL_use",
      value: function EXPERIMENTAL_use() {
        true ? _warning(false, "The middleware API is now considered stable, so we recommend replacing `EXPERIMENTAL_use` with `use` before upgrading to the next major version.") : void 0;
        return this.use.apply(this, arguments);
      }
    }, {
      key: "addWidget",
      value: function addWidget(widget) {
        true ? _warning(false, "addWidget will still be supported in 4.x releases, but not further. It is replaced by `addWidgets([widget])`") : void 0;
        return this.addWidgets([widget]);
      }
    }, {
      key: "addWidgets",
      value: function addWidgets(widgets) {
        if (!Array.isArray(widgets)) {
          throw new Error(withUsage2("The `addWidgets` method expects an array of widgets. Please use `addWidget`."));
        }
        if (widgets.some(function(widget) {
          return typeof widget.init !== "function" && typeof widget.render !== "function";
        })) {
          throw new Error(withUsage2("The widget definition expects a `render` and/or an `init` method."));
        }
        this.mainIndex.addWidgets(widgets);
        return this;
      }
    }, {
      key: "removeWidget",
      value: function removeWidget(widget) {
        true ? _warning(false, "removeWidget will still be supported in 4.x releases, but not further. It is replaced by `removeWidgets([widget])`") : void 0;
        return this.removeWidgets([widget]);
      }
    }, {
      key: "removeWidgets",
      value: function removeWidgets(widgets) {
        if (!Array.isArray(widgets)) {
          throw new Error(withUsage2("The `removeWidgets` method expects an array of widgets. Please use `removeWidget`."));
        }
        if (widgets.some(function(widget) {
          return typeof widget.dispose !== "function";
        })) {
          throw new Error(withUsage2("The widget definition expects a `dispose` method."));
        }
        this.mainIndex.removeWidgets(widgets);
        return this;
      }
    }, {
      key: "start",
      value: function start() {
        var _this3 = this;
        if (this.started) {
          throw new Error(withUsage2("The `start` method has already been called once."));
        }
        var mainHelper = this.mainHelper || (0, import_algoliasearch_helper2.default)(this.client, this.indexName);
        mainHelper.search = function() {
          return mainHelper.searchOnlyWithDerivedHelpers();
        };
        if (this._searchFunction) {
          var fakeClient = {
            search: function search2() {
              return new Promise(noop_default);
            }
          };
          this._mainHelperSearch = mainHelper.search.bind(mainHelper);
          mainHelper.search = function() {
            var mainIndexHelper = _this3.mainIndex.getHelper();
            var searchFunctionHelper = (0, import_algoliasearch_helper2.default)(fakeClient, mainIndexHelper.state.index, mainIndexHelper.state);
            searchFunctionHelper.once("search", function(_ref2) {
              var state = _ref2.state;
              mainIndexHelper.overrideStateWithoutTriggeringChangeEvent(state);
              _this3._mainHelperSearch();
            });
            searchFunctionHelper.on("change", function(_ref3) {
              var state = _ref3.state;
              mainIndexHelper.setState(state);
            });
            _this3._searchFunction(searchFunctionHelper);
            return mainHelper;
          };
        }
        mainHelper.on("error", function(_ref4) {
          var error = _ref4.error;
          if (!(error instanceof Error)) {
            var err = error;
            error = Object.keys(err).reduce(function(acc, key2) {
              acc[key2] = err[key2];
              return acc;
            }, new Error(err.message));
          }
          error.error = error;
          _this3.emit("error", error);
        });
        this.mainHelper = mainHelper;
        this.middleware.forEach(function(_ref5) {
          var instance = _ref5.instance;
          instance.subscribe();
        });
        this.mainIndex.init({
          instantSearchInstance: this,
          parent: null,
          uiState: this._initialUiState
        });
        if (this._initialResults) {
          var originalScheduleSearch = this.scheduleSearch;
          this.scheduleSearch = defer_default(noop_default);
          defer_default(function() {
            _this3.scheduleSearch = originalScheduleSearch;
          })();
        } else if (this.mainIndex.getWidgets().length > 0) {
          this.scheduleSearch();
        }
        this.helper = this.mainIndex.getHelper();
        this.started = true;
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this.scheduleSearch.cancel();
        this.scheduleRender.cancel();
        clearTimeout(this._searchStalledTimer);
        this.removeWidgets(this.mainIndex.getWidgets());
        this.mainIndex.dispose();
        this.started = false;
        this.removeAllListeners();
        this.mainHelper.removeAllListeners();
        this.mainHelper = null;
        this.helper = null;
        this.middleware.forEach(function(_ref6) {
          var instance = _ref6.instance;
          instance.unsubscribe();
        });
      }
    }, {
      key: "scheduleStalledRender",
      value: function scheduleStalledRender() {
        var _this4 = this;
        if (!this._searchStalledTimer) {
          this._searchStalledTimer = setTimeout(function() {
            _this4._isSearchStalled = true;
            _this4.scheduleRender();
          }, this._stalledSearchDelay);
        }
      }
    }, {
      key: "setUiState",
      value: function setUiState(uiState) {
        if (!this.mainHelper) {
          throw new Error(withUsage2("The `start` method needs to be called before `setUiState`."));
        }
        this.mainIndex.refreshUiState();
        var nextUiState = typeof uiState === "function" ? uiState(this.mainIndex.getWidgetUiState({})) : uiState;
        var setIndexHelperState = function setIndexHelperState2(indexWidget) {
          var nextIndexUiState = nextUiState[indexWidget.getIndexId()] || {};
          if (true) {
            checkIndexUiState({
              index: indexWidget,
              indexUiState: nextIndexUiState
            });
          }
          indexWidget.getHelper().setState(indexWidget.getWidgetSearchParameters(indexWidget.getHelper().state, {
            uiState: nextIndexUiState
          }));
          indexWidget.getWidgets().filter(isIndexWidget).forEach(setIndexHelperState2);
        };
        setIndexHelperState(this.mainIndex);
        this.scheduleSearch();
        this.onInternalStateChange();
      }
    }, {
      key: "getUiState",
      value: function getUiState() {
        if (this.started) {
          this.mainIndex.refreshUiState();
        }
        return this.mainIndex.getWidgetUiState({});
      }
    }, {
      key: "createURL",
      value: function createURL() {
        var nextState = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        if (!this.started) {
          throw new Error(withUsage2("The `start` method needs to be called before `createURL`."));
        }
        return this._createURL(nextState);
      }
    }, {
      key: "refresh",
      value: function refresh() {
        if (!this.mainHelper) {
          throw new Error(withUsage2("The `start` method needs to be called before `refresh`."));
        }
        this.mainHelper.clearCache().search();
      }
    }]);
    return InstantSearch2;
  }(import_events.default);
  var InstantSearch_default = InstantSearch;

  // node_modules/instantsearch.js/es/lib/infiniteHitsCache/sessionStorage.js
  function _objectWithoutProperties4(source, excluded) {
    if (source == null)
      return {};
    var target = _objectWithoutPropertiesLoose4(source, excluded);
    var key2, i2;
    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
      for (i2 = 0; i2 < sourceSymbolKeys.length; i2++) {
        key2 = sourceSymbolKeys[i2];
        if (excluded.indexOf(key2) >= 0)
          continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key2))
          continue;
        target[key2] = source[key2];
      }
    }
    return target;
  }
  function _objectWithoutPropertiesLoose4(source, excluded) {
    if (source == null)
      return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key2, i2;
    for (i2 = 0; i2 < sourceKeys.length; i2++) {
      key2 = sourceKeys[i2];
      if (excluded.indexOf(key2) >= 0)
        continue;
      target[key2] = source[key2];
    }
    return target;
  }
  function getStateWithoutPage(state) {
    var _ref = state || {}, page = _ref.page, rest = _objectWithoutProperties4(_ref, ["page"]);
    return rest;
  }
  var KEY = "ais.infiniteHits";
  function createInfiniteHitsSessionStorageCache() {
    return {
      read: function read(_ref2) {
        var state = _ref2.state;
        var sessionStorage = safelyRunOnBrowser(function(_ref3) {
          var window2 = _ref3.window;
          return window2.sessionStorage;
        });
        if (!sessionStorage) {
          return null;
        }
        try {
          var cache = JSON.parse(sessionStorage.getItem(KEY));
          return cache && isEqual_default(cache.state, getStateWithoutPage(state)) ? cache.hits : null;
        } catch (error) {
          if (error instanceof SyntaxError) {
            try {
              sessionStorage.removeItem(KEY);
            } catch (err) {
            }
          }
          return null;
        }
      },
      write: function write(_ref4) {
        var state = _ref4.state, hits3 = _ref4.hits;
        var sessionStorage = safelyRunOnBrowser(function(_ref5) {
          var window2 = _ref5.window;
          return window2.sessionStorage;
        });
        if (!sessionStorage) {
          return;
        }
        try {
          sessionStorage.setItem(KEY, JSON.stringify({
            state: getStateWithoutPage(state),
            hits: hits3
          }));
        } catch (error) {
        }
      }
    };
  }

  // node_modules/instantsearch.js/es/index.js
  var instantsearch = function instantsearch2(options) {
    return new InstantSearch_default(options);
  };
  instantsearch.version = version_default;
  instantsearch.createInfiniteHitsSessionStorageCache = deprecate(createInfiniteHitsSessionStorageCache, "import { createInfiniteHitsSessionStorageCache } from 'instantsearch.js/es/lib/infiniteHitsCache'");
  instantsearch.highlight = deprecate(highlight, "import { highlight } from 'instantsearch.js/es/helpers'");
  instantsearch.reverseHighlight = deprecate(reverseHighlight, "import { reverseHighlight } from 'instantsearch.js/es/helpers'");
  instantsearch.snippet = deprecate(snippet, "import { snippet } from 'instantsearch.js/es/helpers'");
  instantsearch.reverseSnippet = deprecate(reverseSnippet, "import { reverseSnippet } from 'instantsearch.js/es/helpers'");
  instantsearch.insights = insights;
  instantsearch.getInsightsAnonymousUserToken = getInsightsAnonymousUserToken;
  Object.defineProperty(instantsearch, "widgets", {
    get: function get() {
      throw new ReferenceError(`"instantsearch.widgets" are not available from the ES build.

To import the widgets:

import { searchBox } from 'instantsearch.js/es/widgets'`);
    }
  });
  Object.defineProperty(instantsearch, "connectors", {
    get: function get2() {
      throw new ReferenceError(`"instantsearch.connectors" are not available from the ES build.

To import the connectors:

import { connectSearchBox } from 'instantsearch.js/es/connectors'`);
    }
  });
  var es_default = instantsearch;

  // node_modules/preact/dist/preact.module.js
  var n;
  var l;
  var u;
  var i;
  var t;
  var o;
  var r;
  var f = {};
  var e = [];
  var c = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  function s(n2, l2) {
    for (var u2 in l2)
      n2[u2] = l2[u2];
    return n2;
  }
  function a(n2) {
    var l2 = n2.parentNode;
    l2 && l2.removeChild(n2);
  }
  function h(l2, u2, i2) {
    var t2, o2, r2, f2 = {};
    for (r2 in u2)
      "key" == r2 ? t2 = u2[r2] : "ref" == r2 ? o2 = u2[r2] : f2[r2] = u2[r2];
    if (arguments.length > 2 && (f2.children = arguments.length > 3 ? n.call(arguments, 2) : i2), "function" == typeof l2 && null != l2.defaultProps)
      for (r2 in l2.defaultProps)
        void 0 === f2[r2] && (f2[r2] = l2.defaultProps[r2]);
    return v(l2, f2, t2, o2, null);
  }
  function v(n2, i2, t2, o2, r2) {
    var f2 = { type: n2, props: i2, key: t2, ref: o2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == r2 ? ++u : r2 };
    return null == r2 && null != l.vnode && l.vnode(f2), f2;
  }
  function y() {
    return { current: null };
  }
  function p(n2) {
    return n2.children;
  }
  function d(n2, l2) {
    this.props = n2, this.context = l2;
  }
  function _(n2, l2) {
    if (null == l2)
      return n2.__ ? _(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
    for (var u2; l2 < n2.__k.length; l2++)
      if (null != (u2 = n2.__k[l2]) && null != u2.__e)
        return u2.__e;
    return "function" == typeof n2.type ? _(n2) : null;
  }
  function k(n2) {
    var l2, u2;
    if (null != (n2 = n2.__) && null != n2.__c) {
      for (n2.__e = n2.__c.base = null, l2 = 0; l2 < n2.__k.length; l2++)
        if (null != (u2 = n2.__k[l2]) && null != u2.__e) {
          n2.__e = n2.__c.base = u2.__e;
          break;
        }
      return k(n2);
    }
  }
  function b(n2) {
    (!n2.__d && (n2.__d = true) && t.push(n2) && !g.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || setTimeout)(g);
  }
  function g() {
    for (var n2; g.__r = t.length; )
      n2 = t.sort(function(n3, l2) {
        return n3.__v.__b - l2.__v.__b;
      }), t = [], n2.some(function(n3) {
        var l2, u2, i2, t2, o2, r2;
        n3.__d && (o2 = (t2 = (l2 = n3).__v).__e, (r2 = l2.__P) && (u2 = [], (i2 = s({}, t2)).__v = t2.__v + 1, j(r2, t2, i2, l2.__n, void 0 !== r2.ownerSVGElement, null != t2.__h ? [o2] : null, u2, null == o2 ? _(t2) : o2, t2.__h), z(u2, t2), t2.__e != o2 && k(t2)));
      });
  }
  function w(n2, l2, u2, i2, t2, o2, r2, c2, s2, a2) {
    var h2, y2, d2, k2, b2, g2, w2, x = i2 && i2.__k || e, C2 = x.length;
    for (u2.__k = [], h2 = 0; h2 < l2.length; h2++)
      if (null != (k2 = u2.__k[h2] = null == (k2 = l2[h2]) || "boolean" == typeof k2 ? null : "string" == typeof k2 || "number" == typeof k2 || "bigint" == typeof k2 ? v(null, k2, null, null, k2) : Array.isArray(k2) ? v(p, { children: k2 }, null, null, null) : k2.__b > 0 ? v(k2.type, k2.props, k2.key, null, k2.__v) : k2)) {
        if (k2.__ = u2, k2.__b = u2.__b + 1, null === (d2 = x[h2]) || d2 && k2.key == d2.key && k2.type === d2.type)
          x[h2] = void 0;
        else
          for (y2 = 0; y2 < C2; y2++) {
            if ((d2 = x[y2]) && k2.key == d2.key && k2.type === d2.type) {
              x[y2] = void 0;
              break;
            }
            d2 = null;
          }
        j(n2, k2, d2 = d2 || f, t2, o2, r2, c2, s2, a2), b2 = k2.__e, (y2 = k2.ref) && d2.ref != y2 && (w2 || (w2 = []), d2.ref && w2.push(d2.ref, null, k2), w2.push(y2, k2.__c || b2, k2)), null != b2 ? (null == g2 && (g2 = b2), "function" == typeof k2.type && k2.__k === d2.__k ? k2.__d = s2 = m(k2, s2, n2) : s2 = A(n2, k2, d2, x, b2, s2), "function" == typeof u2.type && (u2.__d = s2)) : s2 && d2.__e == s2 && s2.parentNode != n2 && (s2 = _(d2));
      }
    for (u2.__e = g2, h2 = C2; h2--; )
      null != x[h2] && ("function" == typeof u2.type && null != x[h2].__e && x[h2].__e == u2.__d && (u2.__d = _(i2, h2 + 1)), N(x[h2], x[h2]));
    if (w2)
      for (h2 = 0; h2 < w2.length; h2++)
        M(w2[h2], w2[++h2], w2[++h2]);
  }
  function m(n2, l2, u2) {
    for (var i2, t2 = n2.__k, o2 = 0; t2 && o2 < t2.length; o2++)
      (i2 = t2[o2]) && (i2.__ = n2, l2 = "function" == typeof i2.type ? m(i2, l2, u2) : A(u2, i2, i2, t2, i2.__e, l2));
    return l2;
  }
  function A(n2, l2, u2, i2, t2, o2) {
    var r2, f2, e2;
    if (void 0 !== l2.__d)
      r2 = l2.__d, l2.__d = void 0;
    else if (null == u2 || t2 != o2 || null == t2.parentNode)
      n:
        if (null == o2 || o2.parentNode !== n2)
          n2.appendChild(t2), r2 = null;
        else {
          for (f2 = o2, e2 = 0; (f2 = f2.nextSibling) && e2 < i2.length; e2 += 2)
            if (f2 == t2)
              break n;
          n2.insertBefore(t2, o2), r2 = o2;
        }
    return void 0 !== r2 ? r2 : t2.nextSibling;
  }
  function C(n2, l2, u2, i2, t2) {
    var o2;
    for (o2 in u2)
      "children" === o2 || "key" === o2 || o2 in l2 || H(n2, o2, null, u2[o2], i2);
    for (o2 in l2)
      t2 && "function" != typeof l2[o2] || "children" === o2 || "key" === o2 || "value" === o2 || "checked" === o2 || u2[o2] === l2[o2] || H(n2, o2, l2[o2], u2[o2], i2);
  }
  function $(n2, l2, u2) {
    "-" === l2[0] ? n2.setProperty(l2, u2) : n2[l2] = null == u2 ? "" : "number" != typeof u2 || c.test(l2) ? u2 : u2 + "px";
  }
  function H(n2, l2, u2, i2, t2) {
    var o2;
    n:
      if ("style" === l2)
        if ("string" == typeof u2)
          n2.style.cssText = u2;
        else {
          if ("string" == typeof i2 && (n2.style.cssText = i2 = ""), i2)
            for (l2 in i2)
              u2 && l2 in u2 || $(n2.style, l2, "");
          if (u2)
            for (l2 in u2)
              i2 && u2[l2] === i2[l2] || $(n2.style, l2, u2[l2]);
        }
      else if ("o" === l2[0] && "n" === l2[1])
        o2 = l2 !== (l2 = l2.replace(/Capture$/, "")), l2 = l2.toLowerCase() in n2 ? l2.toLowerCase().slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + o2] = u2, u2 ? i2 || n2.addEventListener(l2, o2 ? T : I, o2) : n2.removeEventListener(l2, o2 ? T : I, o2);
      else if ("dangerouslySetInnerHTML" !== l2) {
        if (t2)
          l2 = l2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("href" !== l2 && "list" !== l2 && "form" !== l2 && "tabIndex" !== l2 && "download" !== l2 && l2 in n2)
          try {
            n2[l2] = null == u2 ? "" : u2;
            break n;
          } catch (n3) {
          }
        "function" == typeof u2 || (null != u2 && (false !== u2 || "a" === l2[0] && "r" === l2[1]) ? n2.setAttribute(l2, u2) : n2.removeAttribute(l2));
      }
  }
  function I(n2) {
    this.l[n2.type + false](l.event ? l.event(n2) : n2);
  }
  function T(n2) {
    this.l[n2.type + true](l.event ? l.event(n2) : n2);
  }
  function j(n2, u2, i2, t2, o2, r2, f2, e2, c2) {
    var a2, h2, v2, y2, _2, k2, b2, g2, m2, x, A2, C2, $2, H2 = u2.type;
    if (void 0 !== u2.constructor)
      return null;
    null != i2.__h && (c2 = i2.__h, e2 = u2.__e = i2.__e, u2.__h = null, r2 = [e2]), (a2 = l.__b) && a2(u2);
    try {
      n:
        if ("function" == typeof H2) {
          if (g2 = u2.props, m2 = (a2 = H2.contextType) && t2[a2.__c], x = a2 ? m2 ? m2.props.value : a2.__ : t2, i2.__c ? b2 = (h2 = u2.__c = i2.__c).__ = h2.__E : ("prototype" in H2 && H2.prototype.render ? u2.__c = h2 = new H2(g2, x) : (u2.__c = h2 = new d(g2, x), h2.constructor = H2, h2.render = O), m2 && m2.sub(h2), h2.props = g2, h2.state || (h2.state = {}), h2.context = x, h2.__n = t2, v2 = h2.__d = true, h2.__h = []), null == h2.__s && (h2.__s = h2.state), null != H2.getDerivedStateFromProps && (h2.__s == h2.state && (h2.__s = s({}, h2.__s)), s(h2.__s, H2.getDerivedStateFromProps(g2, h2.__s))), y2 = h2.props, _2 = h2.state, v2)
            null == H2.getDerivedStateFromProps && null != h2.componentWillMount && h2.componentWillMount(), null != h2.componentDidMount && h2.__h.push(h2.componentDidMount);
          else {
            if (null == H2.getDerivedStateFromProps && g2 !== y2 && null != h2.componentWillReceiveProps && h2.componentWillReceiveProps(g2, x), !h2.__e && null != h2.shouldComponentUpdate && false === h2.shouldComponentUpdate(g2, h2.__s, x) || u2.__v === i2.__v) {
              h2.props = g2, h2.state = h2.__s, u2.__v !== i2.__v && (h2.__d = false), h2.__v = u2, u2.__e = i2.__e, u2.__k = i2.__k, u2.__k.forEach(function(n3) {
                n3 && (n3.__ = u2);
              }), h2.__h.length && f2.push(h2);
              break n;
            }
            null != h2.componentWillUpdate && h2.componentWillUpdate(g2, h2.__s, x), null != h2.componentDidUpdate && h2.__h.push(function() {
              h2.componentDidUpdate(y2, _2, k2);
            });
          }
          if (h2.context = x, h2.props = g2, h2.__v = u2, h2.__P = n2, A2 = l.__r, C2 = 0, "prototype" in H2 && H2.prototype.render)
            h2.state = h2.__s, h2.__d = false, A2 && A2(u2), a2 = h2.render(h2.props, h2.state, h2.context);
          else
            do {
              h2.__d = false, A2 && A2(u2), a2 = h2.render(h2.props, h2.state, h2.context), h2.state = h2.__s;
            } while (h2.__d && ++C2 < 25);
          h2.state = h2.__s, null != h2.getChildContext && (t2 = s(s({}, t2), h2.getChildContext())), v2 || null == h2.getSnapshotBeforeUpdate || (k2 = h2.getSnapshotBeforeUpdate(y2, _2)), $2 = null != a2 && a2.type === p && null == a2.key ? a2.props.children : a2, w(n2, Array.isArray($2) ? $2 : [$2], u2, i2, t2, o2, r2, f2, e2, c2), h2.base = u2.__e, u2.__h = null, h2.__h.length && f2.push(h2), b2 && (h2.__E = h2.__ = null), h2.__e = false;
        } else
          null == r2 && u2.__v === i2.__v ? (u2.__k = i2.__k, u2.__e = i2.__e) : u2.__e = L(i2.__e, u2, i2, t2, o2, r2, f2, c2);
      (a2 = l.diffed) && a2(u2);
    } catch (n3) {
      u2.__v = null, (c2 || null != r2) && (u2.__e = e2, u2.__h = !!c2, r2[r2.indexOf(e2)] = null), l.__e(n3, u2, i2);
    }
  }
  function z(n2, u2) {
    l.__c && l.__c(u2, n2), n2.some(function(u3) {
      try {
        n2 = u3.__h, u3.__h = [], n2.some(function(n3) {
          n3.call(u3);
        });
      } catch (n3) {
        l.__e(n3, u3.__v);
      }
    });
  }
  function L(l2, u2, i2, t2, o2, r2, e2, c2) {
    var s2, h2, v2, y2 = i2.props, p2 = u2.props, d2 = u2.type, k2 = 0;
    if ("svg" === d2 && (o2 = true), null != r2) {
      for (; k2 < r2.length; k2++)
        if ((s2 = r2[k2]) && "setAttribute" in s2 == !!d2 && (d2 ? s2.localName === d2 : 3 === s2.nodeType)) {
          l2 = s2, r2[k2] = null;
          break;
        }
    }
    if (null == l2) {
      if (null === d2)
        return document.createTextNode(p2);
      l2 = o2 ? document.createElementNS("http://www.w3.org/2000/svg", d2) : document.createElement(d2, p2.is && p2), r2 = null, c2 = false;
    }
    if (null === d2)
      y2 === p2 || c2 && l2.data === p2 || (l2.data = p2);
    else {
      if (r2 = r2 && n.call(l2.childNodes), h2 = (y2 = i2.props || f).dangerouslySetInnerHTML, v2 = p2.dangerouslySetInnerHTML, !c2) {
        if (null != r2)
          for (y2 = {}, k2 = 0; k2 < l2.attributes.length; k2++)
            y2[l2.attributes[k2].name] = l2.attributes[k2].value;
        (v2 || h2) && (v2 && (h2 && v2.__html == h2.__html || v2.__html === l2.innerHTML) || (l2.innerHTML = v2 && v2.__html || ""));
      }
      if (C(l2, p2, y2, o2, c2), v2)
        u2.__k = [];
      else if (k2 = u2.props.children, w(l2, Array.isArray(k2) ? k2 : [k2], u2, i2, t2, o2 && "foreignObject" !== d2, r2, e2, r2 ? r2[0] : i2.__k && _(i2, 0), c2), null != r2)
        for (k2 = r2.length; k2--; )
          null != r2[k2] && a(r2[k2]);
      c2 || ("value" in p2 && void 0 !== (k2 = p2.value) && (k2 !== l2.value || "progress" === d2 && !k2 || "option" === d2 && k2 !== y2.value) && H(l2, "value", k2, y2.value, false), "checked" in p2 && void 0 !== (k2 = p2.checked) && k2 !== l2.checked && H(l2, "checked", k2, y2.checked, false));
    }
    return l2;
  }
  function M(n2, u2, i2) {
    try {
      "function" == typeof n2 ? n2(u2) : n2.current = u2;
    } catch (n3) {
      l.__e(n3, i2);
    }
  }
  function N(n2, u2, i2) {
    var t2, o2;
    if (l.unmount && l.unmount(n2), (t2 = n2.ref) && (t2.current && t2.current !== n2.__e || M(t2, null, u2)), null != (t2 = n2.__c)) {
      if (t2.componentWillUnmount)
        try {
          t2.componentWillUnmount();
        } catch (n3) {
          l.__e(n3, u2);
        }
      t2.base = t2.__P = null;
    }
    if (t2 = n2.__k)
      for (o2 = 0; o2 < t2.length; o2++)
        t2[o2] && N(t2[o2], u2, "function" != typeof n2.type);
    i2 || null == n2.__e || a(n2.__e), n2.__e = n2.__d = void 0;
  }
  function O(n2, l2, u2) {
    return this.constructor(n2, u2);
  }
  function P(u2, i2, t2) {
    var o2, r2, e2;
    l.__ && l.__(u2, i2), r2 = (o2 = "function" == typeof t2) ? null : t2 && t2.__k || i2.__k, e2 = [], j(i2, u2 = (!o2 && t2 || i2).__k = h(p, null, [u2]), r2 || f, f, void 0 !== i2.ownerSVGElement, !o2 && t2 ? [t2] : r2 ? null : i2.firstChild ? n.call(i2.childNodes) : null, e2, !o2 && t2 ? t2 : r2 ? r2.__e : i2.firstChild, o2), z(e2, u2);
  }
  n = e.slice, l = { __e: function(n2, l2, u2, i2) {
    for (var t2, o2, r2; l2 = l2.__; )
      if ((t2 = l2.__c) && !t2.__)
        try {
          if ((o2 = t2.constructor) && null != o2.getDerivedStateFromError && (t2.setState(o2.getDerivedStateFromError(n2)), r2 = t2.__d), null != t2.componentDidCatch && (t2.componentDidCatch(n2, i2 || {}), r2 = t2.__d), r2)
            return t2.__E = t2;
        } catch (l3) {
          n2 = l3;
        }
    throw n2;
  } }, u = 0, i = function(n2) {
    return null != n2 && void 0 === n2.constructor;
  }, d.prototype.setState = function(n2, l2) {
    var u2;
    u2 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = s({}, this.state), "function" == typeof n2 && (n2 = n2(s({}, u2), this.props)), n2 && s(u2, n2), null != n2 && this.__v && (l2 && this.__h.push(l2), b(this));
  }, d.prototype.forceUpdate = function(n2) {
    this.__v && (this.__e = true, n2 && this.__h.push(n2), b(this));
  }, d.prototype.render = p, t = [], g.__r = 0, r = 0;

  // node_modules/instantsearch.js/es/components/Template/Template.js
  function _typeof6(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof6 = function _typeof9(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof6 = function _typeof9(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof6(obj);
  }
  function _extends2() {
    _extends2 = Object.assign || function(target) {
      for (var i2 = 1; i2 < arguments.length; i2++) {
        var source = arguments[i2];
        for (var key2 in source) {
          if (Object.prototype.hasOwnProperty.call(source, key2)) {
            target[key2] = source[key2];
          }
        }
      }
      return target;
    };
    return _extends2.apply(this, arguments);
  }
  function _classCallCheck3(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties3(target, props) {
    for (var i2 = 0; i2 < props.length; i2++) {
      var descriptor = props[i2];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass3(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties3(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties3(Constructor, staticProps);
    return Constructor;
  }
  function _inherits2(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf2(subClass, superClass);
  }
  function _setPrototypeOf2(o2, p2) {
    _setPrototypeOf2 = Object.setPrototypeOf || function _setPrototypeOf4(o3, p3) {
      o3.__proto__ = p3;
      return o3;
    };
    return _setPrototypeOf2(o2, p2);
  }
  function _createSuper2(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct2();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf2(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf2(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn2(this, result);
    };
  }
  function _possibleConstructorReturn2(self2, call) {
    if (call && (_typeof6(call) === "object" || typeof call === "function")) {
      return call;
    }
    return _assertThisInitialized2(self2);
  }
  function _assertThisInitialized2(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _isNativeReflectConstruct2() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function() {
      }));
      return true;
    } catch (e2) {
      return false;
    }
  }
  function _getPrototypeOf2(o2) {
    _getPrototypeOf2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf4(o3) {
      return o3.__proto__ || Object.getPrototypeOf(o3);
    };
    return _getPrototypeOf2(o2);
  }
  function _defineProperty14(obj, key2, value) {
    if (key2 in obj) {
      Object.defineProperty(obj, key2, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key2] = value;
    }
    return obj;
  }
  var defaultProps = {
    data: {},
    rootTagName: "div",
    useCustomCompileOptions: {},
    templates: {},
    templatesConfig: {}
  };
  var Template = /* @__PURE__ */ function(_Component) {
    _inherits2(Template2, _Component);
    var _super = _createSuper2(Template2);
    function Template2() {
      _classCallCheck3(this, Template2);
      return _super.apply(this, arguments);
    }
    _createClass3(Template2, [{
      key: "shouldComponentUpdate",
      value: function shouldComponentUpdate(nextProps) {
        return !isEqual_default(this.props.data, nextProps.data) || this.props.templateKey !== nextProps.templateKey || !isEqual_default(this.props.rootProps, nextProps.rootProps);
      }
    }, {
      key: "render",
      value: function render() {
        var RootTagName = this.props.rootTagName;
        var useCustomCompileOptions = this.props.useCustomCompileOptions[this.props.templateKey];
        var compileOptions = useCustomCompileOptions ? this.props.templatesConfig.compileOptions : {};
        var content = renderTemplate_default({
          templates: this.props.templates,
          templateKey: this.props.templateKey,
          compileOptions,
          helpers: this.props.templatesConfig.helpers,
          data: this.props.data,
          bindEvent: this.props.bindEvent
        });
        if (content === null) {
          return null;
        }
        return h(RootTagName, _extends2({}, this.props.rootProps, {
          dangerouslySetInnerHTML: {
            __html: content
          }
        }));
      }
    }]);
    return Template2;
  }(d);
  _defineProperty14(Template, "defaultProps", defaultProps);
  var Template_default = Template;

  // node_modules/instantsearch.js/es/connectors/configure/connectConfigure.js
  var import_algoliasearch_helper3 = __toESM(require_algoliasearch_helper2(), 1);
  function ownKeys13(object, enumerableOnly) {
    var keys2 = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys2.push.apply(keys2, symbols);
    }
    return keys2;
  }
  function _objectSpread13(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2] != null ? arguments[i2] : {};
      if (i2 % 2) {
        ownKeys13(Object(source), true).forEach(function(key2) {
          _defineProperty15(target, key2, source[key2]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys13(Object(source)).forEach(function(key2) {
          Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
        });
      }
    }
    return target;
  }
  function _defineProperty15(obj, key2, value) {
    if (key2 in obj) {
      Object.defineProperty(obj, key2, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key2] = value;
    }
    return obj;
  }
  var withUsage3 = createDocumentationMessageGenerator({
    name: "configure",
    connector: true
  });
  function getInitialSearchParameters(state, widgetParams) {
    return state.setQueryParameters(Object.keys(widgetParams.searchParameters).reduce(function(acc, key2) {
      return _objectSpread13(_objectSpread13({}, acc), {}, _defineProperty15({}, key2, void 0));
    }, {}));
  }
  var connectConfigure = function connectConfigure2() {
    var renderFn = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : noop_default;
    var unmountFn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : noop_default;
    return function(widgetParams) {
      if (!widgetParams || !isPlainObject_default(widgetParams.searchParameters)) {
        throw new Error(withUsage3("The `searchParameters` option expects an object."));
      }
      var connectorState = {};
      function refine(helper) {
        return function(searchParameters) {
          var actualState = getInitialSearchParameters(helper.state, widgetParams);
          var nextSearchParameters = mergeSearchParameters_default(actualState, new import_algoliasearch_helper3.default.SearchParameters(searchParameters));
          widgetParams.searchParameters = searchParameters;
          helper.setState(nextSearchParameters).search();
        };
      }
      return {
        $$type: "ais.configure",
        init: function init(initOptions) {
          var instantSearchInstance = initOptions.instantSearchInstance;
          renderFn(_objectSpread13(_objectSpread13({}, this.getWidgetRenderState(initOptions)), {}, {
            instantSearchInstance
          }), true);
        },
        render: function render(renderOptions) {
          var instantSearchInstance = renderOptions.instantSearchInstance;
          renderFn(_objectSpread13(_objectSpread13({}, this.getWidgetRenderState(renderOptions)), {}, {
            instantSearchInstance
          }), false);
        },
        dispose: function dispose(_ref) {
          var state = _ref.state;
          unmountFn();
          return getInitialSearchParameters(state, widgetParams);
        },
        getRenderState: function getRenderState(renderState, renderOptions) {
          var _renderState$configur;
          var widgetRenderState = this.getWidgetRenderState(renderOptions);
          return _objectSpread13(_objectSpread13({}, renderState), {}, {
            configure: _objectSpread13(_objectSpread13({}, widgetRenderState), {}, {
              widgetParams: _objectSpread13(_objectSpread13({}, widgetRenderState.widgetParams), {}, {
                searchParameters: mergeSearchParameters_default(new import_algoliasearch_helper3.default.SearchParameters((_renderState$configur = renderState.configure) === null || _renderState$configur === void 0 ? void 0 : _renderState$configur.widgetParams.searchParameters), new import_algoliasearch_helper3.default.SearchParameters(widgetRenderState.widgetParams.searchParameters)).getQueryParams()
              })
            })
          });
        },
        getWidgetRenderState: function getWidgetRenderState(_ref2) {
          var helper = _ref2.helper;
          if (!connectorState.refine) {
            connectorState.refine = refine(helper);
          }
          return {
            refine: connectorState.refine,
            widgetParams
          };
        },
        getWidgetSearchParameters: function getWidgetSearchParameters(state, _ref3) {
          var uiState = _ref3.uiState;
          return mergeSearchParameters_default(state, new import_algoliasearch_helper3.default.SearchParameters(_objectSpread13(_objectSpread13({}, uiState.configure), widgetParams.searchParameters)));
        },
        getWidgetUiState: function getWidgetUiState(uiState) {
          return _objectSpread13(_objectSpread13({}, uiState), {}, {
            configure: _objectSpread13(_objectSpread13({}, uiState.configure), widgetParams.searchParameters)
          });
        }
      };
    };
  };
  var connectConfigure_default = connectConfigure;

  // node_modules/instantsearch.js/es/widgets/configure/configure.js
  function ownKeys14(object, enumerableOnly) {
    var keys2 = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys2.push.apply(keys2, symbols);
    }
    return keys2;
  }
  function _objectSpread14(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2] != null ? arguments[i2] : {};
      if (i2 % 2) {
        ownKeys14(Object(source), true).forEach(function(key2) {
          _defineProperty16(target, key2, source[key2]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys14(Object(source)).forEach(function(key2) {
          Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
        });
      }
    }
    return target;
  }
  function _defineProperty16(obj, key2, value) {
    if (key2 in obj) {
      Object.defineProperty(obj, key2, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key2] = value;
    }
    return obj;
  }
  var configure = function configure2(widgetParams) {
    var makeWidget = connectConfigure_default(noop_default);
    return _objectSpread14(_objectSpread14({}, makeWidget({
      searchParameters: widgetParams
    })), {}, {
      $$widgetType: "ais.configure"
    });
  };
  var configure_default = configure;

  // node_modules/instantsearch.js/es/connectors/dynamic-widgets/connectDynamicWidgets.js
  function ownKeys15(object, enumerableOnly) {
    var keys2 = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys2.push.apply(keys2, symbols);
    }
    return keys2;
  }
  function _objectSpread15(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2] != null ? arguments[i2] : {};
      if (i2 % 2) {
        ownKeys15(Object(source), true).forEach(function(key2) {
          _defineProperty17(target, key2, source[key2]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys15(Object(source)).forEach(function(key2) {
          Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
        });
      }
    }
    return target;
  }
  function _defineProperty17(obj, key2, value) {
    if (key2 in obj) {
      Object.defineProperty(obj, key2, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key2] = value;
    }
    return obj;
  }
  function _typeof7(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof7 = function _typeof9(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof7 = function _typeof9(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof7(obj);
  }
  var withUsage4 = createDocumentationMessageGenerator({
    name: "dynamic-widgets",
    connector: true
  });
  var MAX_WILDCARD_FACETS = 20;
  var connectDynamicWidgets = function connectDynamicWidgets2(renderFn) {
    var unmountFn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : noop_default;
    checkRendering_default(renderFn, withUsage4());
    return function(widgetParams) {
      var widgets = widgetParams.widgets, _widgetParams$maxValu = widgetParams.maxValuesPerFacet, maxValuesPerFacet = _widgetParams$maxValu === void 0 ? 20 : _widgetParams$maxValu, _widgetParams$facets = widgetParams.facets, facets = _widgetParams$facets === void 0 ? ["*"] : _widgetParams$facets, _widgetParams$transfo = widgetParams.transformItems, transformItems = _widgetParams$transfo === void 0 ? function(items) {
        return items;
      } : _widgetParams$transfo, fallbackWidget = widgetParams.fallbackWidget;
      if (!(widgets && Array.isArray(widgets) && widgets.every(function(widget) {
        return _typeof7(widget) === "object";
      }))) {
        throw new Error(withUsage4("The `widgets` option expects an array of widgets."));
      }
      if (!(Array.isArray(facets) && facets.length <= 1 && (facets[0] === "*" || facets[0] === void 0))) {
        throw new Error(withUsage4('The `facets` option only accepts [] or ["*"], you passed '.concat(JSON.stringify(facets))));
      }
      var localWidgets = /* @__PURE__ */ new Map();
      return {
        $$type: "ais.dynamicWidgets",
        init: function init(initOptions) {
          widgets.forEach(function(widget) {
            var attribute = getWidgetAttribute(widget, initOptions);
            localWidgets.set(attribute, {
              widget,
              isMounted: false
            });
          });
          renderFn(_objectSpread15(_objectSpread15({}, this.getWidgetRenderState(initOptions)), {}, {
            instantSearchInstance: initOptions.instantSearchInstance
          }), true);
        },
        render: function render(renderOptions) {
          var parent = renderOptions.parent;
          var renderState = this.getWidgetRenderState(renderOptions);
          var widgetsToUnmount = [];
          var widgetsToMount = [];
          if (fallbackWidget) {
            renderState.attributesToRender.forEach(function(attribute) {
              if (!localWidgets.has(attribute)) {
                var widget = fallbackWidget({
                  attribute
                });
                localWidgets.set(attribute, {
                  widget,
                  isMounted: false
                });
              }
            });
          }
          localWidgets.forEach(function(_ref, attribute) {
            var widget = _ref.widget, isMounted = _ref.isMounted;
            var shouldMount = renderState.attributesToRender.indexOf(attribute) > -1;
            if (!isMounted && shouldMount) {
              widgetsToMount.push(widget);
              localWidgets.set(attribute, {
                widget,
                isMounted: true
              });
            } else if (isMounted && !shouldMount) {
              widgetsToUnmount.push(widget);
              localWidgets.set(attribute, {
                widget,
                isMounted: false
              });
            }
          });
          parent.addWidgets(widgetsToMount);
          setTimeout(function() {
            return parent.removeWidgets(widgetsToUnmount);
          }, 0);
          renderFn(_objectSpread15(_objectSpread15({}, renderState), {}, {
            instantSearchInstance: renderOptions.instantSearchInstance
          }), false);
        },
        dispose: function dispose(_ref2) {
          var parent = _ref2.parent;
          var toRemove = [];
          localWidgets.forEach(function(_ref3) {
            var widget = _ref3.widget, isMounted = _ref3.isMounted;
            if (isMounted) {
              toRemove.push(widget);
            }
          });
          parent.removeWidgets(toRemove);
          unmountFn();
        },
        getWidgetSearchParameters: function getWidgetSearchParameters(state) {
          return facets.reduce(function(acc, curr) {
            return acc.addFacet(curr);
          }, state.setQueryParameters({
            maxValuesPerFacet: Math.max(maxValuesPerFacet || 0, state.maxValuesPerFacet || 0)
          }));
        },
        getRenderState: function getRenderState(renderState, renderOptions) {
          return _objectSpread15(_objectSpread15({}, renderState), {}, {
            dynamicWidgets: this.getWidgetRenderState(renderOptions)
          });
        },
        getWidgetRenderState: function getWidgetRenderState(_ref4) {
          var _results$renderingCon, _results$renderingCon2, _results$renderingCon3, _results$renderingCon4;
          var results = _ref4.results, state = _ref4.state;
          if (!results) {
            return {
              attributesToRender: [],
              widgetParams
            };
          }
          var attributesToRender = transformItems((_results$renderingCon = (_results$renderingCon2 = results.renderingContent) === null || _results$renderingCon2 === void 0 ? void 0 : (_results$renderingCon3 = _results$renderingCon2.facetOrdering) === null || _results$renderingCon3 === void 0 ? void 0 : (_results$renderingCon4 = _results$renderingCon3.facets) === null || _results$renderingCon4 === void 0 ? void 0 : _results$renderingCon4.order) !== null && _results$renderingCon !== void 0 ? _results$renderingCon : [], {
            results
          });
          if (!Array.isArray(attributesToRender)) {
            throw new Error(withUsage4("The `transformItems` option expects a function that returns an Array."));
          }
          true ? _warning(maxValuesPerFacet >= (state.maxValuesPerFacet || 0), "The maxValuesPerFacet set by dynamic widgets (".concat(maxValuesPerFacet, ") is smaller than one of the limits set by a widget (").concat(state.maxValuesPerFacet, "). This causes a mismatch in query parameters and thus an extra network request when that widget is mounted.")) : void 0;
          true ? _warning(attributesToRender.length <= MAX_WILDCARD_FACETS || widgetParams.facets !== void 0, "More than ".concat(MAX_WILDCARD_FACETS, ` facets are requested to be displayed without explicitly setting which facets to retrieve. This could have a performance impact. Set "facets" to [] to do two smaller network requests, or explicitly to ['*'] to avoid this warning.`)) : void 0;
          return {
            attributesToRender,
            widgetParams
          };
        }
      };
    };
  };
  var connectDynamicWidgets_default = connectDynamicWidgets;

  // node_modules/instantsearch.js/es/widgets/dynamic-widgets/dynamic-widgets.js
  function ownKeys16(object, enumerableOnly) {
    var keys2 = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys2.push.apply(keys2, symbols);
    }
    return keys2;
  }
  function _objectSpread16(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2] != null ? arguments[i2] : {};
      if (i2 % 2) {
        ownKeys16(Object(source), true).forEach(function(key2) {
          _defineProperty18(target, key2, source[key2]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys16(Object(source)).forEach(function(key2) {
          Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
        });
      }
    }
    return target;
  }
  function _defineProperty18(obj, key2, value) {
    if (key2 in obj) {
      Object.defineProperty(obj, key2, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key2] = value;
    }
    return obj;
  }
  function _objectWithoutProperties5(source, excluded) {
    if (source == null)
      return {};
    var target = _objectWithoutPropertiesLoose5(source, excluded);
    var key2, i2;
    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
      for (i2 = 0; i2 < sourceSymbolKeys.length; i2++) {
        key2 = sourceSymbolKeys[i2];
        if (excluded.indexOf(key2) >= 0)
          continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key2))
          continue;
        target[key2] = source[key2];
      }
    }
    return target;
  }
  function _objectWithoutPropertiesLoose5(source, excluded) {
    if (source == null)
      return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key2, i2;
    for (i2 = 0; i2 < sourceKeys.length; i2++) {
      key2 = sourceKeys[i2];
      if (excluded.indexOf(key2) >= 0)
        continue;
      target[key2] = source[key2];
    }
    return target;
  }
  var withUsage5 = createDocumentationMessageGenerator({
    name: "dynamic-widgets"
  });
  var suit5 = component("DynamicWidgets");
  function createContainer(rootContainer) {
    var container = document.createElement("div");
    container.className = suit5({
      descendantName: "widget"
    });
    rootContainer.appendChild(container);
    return container;
  }
  var dynamicWidgets = function dynamicWidgets2(widgetParams) {
    var _ref = widgetParams || {}, containerSelector = _ref.container, widgets = _ref.widgets, fallbackWidget = _ref.fallbackWidget, otherWidgetParams = _objectWithoutProperties5(_ref, ["container", "widgets", "fallbackWidget"]);
    if (!containerSelector) {
      throw new Error(withUsage5("The `container` option is required."));
    }
    if (!(widgets && Array.isArray(widgets) && widgets.every(function(widget2) {
      return typeof widget2 === "function";
    }))) {
      throw new Error(withUsage5("The `widgets` option expects an array of callbacks."));
    }
    var userContainer = getContainerNode_default(containerSelector);
    var rootContainer = document.createElement("div");
    rootContainer.className = suit5();
    var containers = /* @__PURE__ */ new Map();
    var connectorWidgets = [];
    var makeWidget = connectDynamicWidgets_default(function(_ref2, isFirstRender) {
      var attributesToRender = _ref2.attributesToRender;
      if (isFirstRender) {
        userContainer.appendChild(rootContainer);
      }
      attributesToRender.forEach(function(attribute) {
        if (!containers.has(attribute)) {
          return;
        }
        var container = containers.get(attribute);
        rootContainer.appendChild(container);
      });
    }, function() {
      userContainer.removeChild(rootContainer);
    });
    var widget = makeWidget(_objectSpread16(_objectSpread16({}, otherWidgetParams), {}, {
      widgets: connectorWidgets,
      fallbackWidget: typeof fallbackWidget === "function" ? function(_ref3) {
        var attribute = _ref3.attribute;
        var container = createContainer(rootContainer);
        containers.set(attribute, container);
        return fallbackWidget({
          attribute,
          container
        });
      } : void 0
    }));
    return _objectSpread16(_objectSpread16({}, widget), {}, {
      init: function init(initOptions) {
        widgets.forEach(function(cb) {
          var container = createContainer(rootContainer);
          var childWidget = cb(container);
          var attribute = getWidgetAttribute(childWidget, initOptions);
          containers.set(attribute, container);
          connectorWidgets.push(childWidget);
        });
        widget.init(initOptions);
      },
      $$widgetType: "ais.dynamicWidgets"
    });
  };
  var dynamic_widgets_default = dynamicWidgets;

  // node_modules/instantsearch.js/es/components/SearchBox/SearchBox.js
  function _typeof8(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof8 = function _typeof9(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof8 = function _typeof9(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof8(obj);
  }
  function _classCallCheck4(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties4(target, props) {
    for (var i2 = 0; i2 < props.length; i2++) {
      var descriptor = props[i2];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass4(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties4(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties4(Constructor, staticProps);
    return Constructor;
  }
  function _inherits3(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf3(subClass, superClass);
  }
  function _setPrototypeOf3(o2, p2) {
    _setPrototypeOf3 = Object.setPrototypeOf || function _setPrototypeOf4(o3, p3) {
      o3.__proto__ = p3;
      return o3;
    };
    return _setPrototypeOf3(o2, p2);
  }
  function _createSuper3(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct3();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf3(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf3(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn3(this, result);
    };
  }
  function _possibleConstructorReturn3(self2, call) {
    if (call && (_typeof8(call) === "object" || typeof call === "function")) {
      return call;
    }
    return _assertThisInitialized3(self2);
  }
  function _assertThisInitialized3(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _isNativeReflectConstruct3() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function() {
      }));
      return true;
    } catch (e2) {
      return false;
    }
  }
  function _getPrototypeOf3(o2) {
    _getPrototypeOf3 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf4(o3) {
      return o3.__proto__ || Object.getPrototypeOf(o3);
    };
    return _getPrototypeOf3(o2);
  }
  function _defineProperty19(obj, key2, value) {
    if (key2 in obj) {
      Object.defineProperty(obj, key2, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key2] = value;
    }
    return obj;
  }
  var defaultProps2 = {
    query: "",
    showSubmit: true,
    showReset: true,
    showLoadingIndicator: true,
    autofocus: false,
    searchAsYouType: true,
    isSearchStalled: false,
    disabled: false,
    onChange: noop_default,
    onSubmit: noop_default,
    onReset: noop_default,
    refine: noop_default
  };
  var SearchBox = /* @__PURE__ */ function(_Component) {
    _inherits3(SearchBox2, _Component);
    var _super = _createSuper3(SearchBox2);
    function SearchBox2() {
      var _this;
      _classCallCheck4(this, SearchBox2);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      _defineProperty19(_assertThisInitialized3(_this), "state", {
        query: _this.props.query,
        focused: false
      });
      _defineProperty19(_assertThisInitialized3(_this), "input", y());
      _defineProperty19(_assertThisInitialized3(_this), "onInput", function(event) {
        var _this$props = _this.props, searchAsYouType = _this$props.searchAsYouType, refine = _this$props.refine, onChange = _this$props.onChange;
        var query = event.target.value;
        if (searchAsYouType) {
          refine(query);
        }
        _this.setState({
          query
        });
        onChange(event);
      });
      _defineProperty19(_assertThisInitialized3(_this), "onSubmit", function(event) {
        var _this$props2 = _this.props, searchAsYouType = _this$props2.searchAsYouType, refine = _this$props2.refine, onSubmit = _this$props2.onSubmit;
        event.preventDefault();
        event.stopPropagation();
        if (_this.input.current) {
          _this.input.current.blur();
        }
        if (!searchAsYouType) {
          refine(_this.state.query);
        }
        onSubmit(event);
        return false;
      });
      _defineProperty19(_assertThisInitialized3(_this), "onReset", function(event) {
        var _this$props3 = _this.props, refine = _this$props3.refine, onReset = _this$props3.onReset;
        var query = "";
        if (_this.input.current) {
          _this.input.current.focus();
        }
        refine(query);
        _this.setState({
          query
        });
        onReset(event);
      });
      _defineProperty19(_assertThisInitialized3(_this), "onBlur", function() {
        _this.setState({
          focused: false
        });
      });
      _defineProperty19(_assertThisInitialized3(_this), "onFocus", function() {
        _this.setState({
          focused: true
        });
      });
      return _this;
    }
    _createClass4(SearchBox2, [{
      key: "resetInput",
      value: function resetInput() {
        this.setState({
          query: ""
        });
      }
    }, {
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps) {
        if (!this.state.focused && nextProps.query !== this.state.query) {
          this.setState({
            query: nextProps.query
          });
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props4 = this.props, cssClasses = _this$props4.cssClasses, placeholder = _this$props4.placeholder, autofocus = _this$props4.autofocus, showSubmit = _this$props4.showSubmit, showReset = _this$props4.showReset, showLoadingIndicator = _this$props4.showLoadingIndicator, templates = _this$props4.templates, isSearchStalled = _this$props4.isSearchStalled;
        return h("div", {
          className: cssClasses.root
        }, h("form", {
          action: "",
          role: "search",
          className: cssClasses.form,
          noValidate: true,
          onSubmit: this.onSubmit,
          onReset: this.onReset
        }, h("input", {
          ref: this.input,
          value: this.state.query,
          disabled: this.props.disabled,
          className: cssClasses.input,
          type: "search",
          placeholder,
          autoFocus: autofocus,
          autoComplete: "off",
          autoCorrect: "off",
          autoCapitalize: "off",
          spellCheck: "false",
          maxLength: 512,
          onInput: this.onInput,
          onBlur: this.onBlur,
          onFocus: this.onFocus
        }), h(Template_default, {
          templateKey: "submit",
          rootTagName: "button",
          rootProps: {
            className: cssClasses.submit,
            type: "submit",
            title: "Submit the search query.",
            hidden: !showSubmit
          },
          templates,
          data: {
            cssClasses
          }
        }), h(Template_default, {
          templateKey: "reset",
          rootTagName: "button",
          rootProps: {
            className: cssClasses.reset,
            type: "reset",
            title: "Clear the search query.",
            hidden: !(showReset && this.state.query.trim() && !isSearchStalled)
          },
          templates,
          data: {
            cssClasses
          }
        }), showLoadingIndicator && h(Template_default, {
          templateKey: "loadingIndicator",
          rootTagName: "span",
          rootProps: {
            className: cssClasses.loadingIndicator,
            hidden: !isSearchStalled
          },
          templates,
          data: {
            cssClasses
          }
        })));
      }
    }]);
    return SearchBox2;
  }(d);
  _defineProperty19(SearchBox, "defaultProps", defaultProps2);
  var SearchBox_default = SearchBox;

  // node_modules/instantsearch.js/es/widgets/hits/hits.js
  var import_classnames2 = __toESM(require_classnames(), 1);

  // node_modules/instantsearch.js/es/connectors/hits/connectHits.js
  function ownKeys17(object, enumerableOnly) {
    var keys2 = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys2.push.apply(keys2, symbols);
    }
    return keys2;
  }
  function _objectSpread17(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2] != null ? arguments[i2] : {};
      if (i2 % 2) {
        ownKeys17(Object(source), true).forEach(function(key2) {
          _defineProperty20(target, key2, source[key2]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys17(Object(source)).forEach(function(key2) {
          Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
        });
      }
    }
    return target;
  }
  function _defineProperty20(obj, key2, value) {
    if (key2 in obj) {
      Object.defineProperty(obj, key2, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key2] = value;
    }
    return obj;
  }
  var withUsage6 = createDocumentationMessageGenerator({
    name: "hits",
    connector: true
  });
  var connectHits = function connectHits2(renderFn) {
    var unmountFn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : noop_default;
    checkRendering_default(renderFn, withUsage6());
    return function(widgetParams) {
      var _ref = widgetParams || {}, _ref$escapeHTML = _ref.escapeHTML, escapeHTML = _ref$escapeHTML === void 0 ? true : _ref$escapeHTML, _ref$transformItems = _ref.transformItems, transformItems = _ref$transformItems === void 0 ? function(items) {
        return items;
      } : _ref$transformItems;
      var sendEvent;
      var bindEvent;
      return {
        $$type: "ais.hits",
        init: function init(initOptions) {
          renderFn(_objectSpread17(_objectSpread17({}, this.getWidgetRenderState(initOptions)), {}, {
            instantSearchInstance: initOptions.instantSearchInstance
          }), true);
        },
        render: function render(renderOptions) {
          var renderState = this.getWidgetRenderState(renderOptions);
          renderFn(_objectSpread17(_objectSpread17({}, renderState), {}, {
            instantSearchInstance: renderOptions.instantSearchInstance
          }), false);
          renderState.sendEvent("view", renderState.hits);
        },
        getRenderState: function getRenderState(renderState, renderOptions) {
          return _objectSpread17(_objectSpread17({}, renderState), {}, {
            hits: this.getWidgetRenderState(renderOptions)
          });
        },
        getWidgetRenderState: function getWidgetRenderState(_ref2) {
          var results = _ref2.results, helper = _ref2.helper, instantSearchInstance = _ref2.instantSearchInstance;
          if (!sendEvent) {
            sendEvent = createSendEventForHits({
              instantSearchInstance,
              index: helper.getIndex(),
              widgetType: this.$$type
            });
          }
          if (!bindEvent) {
            bindEvent = createBindEventForHits({
              index: helper.getIndex(),
              widgetType: this.$$type
            });
          }
          if (!results) {
            return {
              hits: [],
              results: void 0,
              sendEvent,
              bindEvent,
              widgetParams
            };
          }
          if (escapeHTML && results.hits.length > 0) {
            results.hits = escapeHits(results.hits);
          }
          var hitsWithAbsolutePosition = addAbsolutePosition(results.hits, results.page, results.hitsPerPage);
          var hitsWithAbsolutePositionAndQueryID = addQueryID(hitsWithAbsolutePosition, results.queryID);
          var transformedHits = transformItems(hitsWithAbsolutePositionAndQueryID, {
            results
          });
          return {
            hits: transformedHits,
            results,
            sendEvent,
            bindEvent,
            widgetParams
          };
        },
        dispose: function dispose(_ref3) {
          var state = _ref3.state;
          unmountFn();
          if (!escapeHTML) {
            return state;
          }
          return state.setQueryParameters(Object.keys(TAG_PLACEHOLDER).reduce(function(acc, key2) {
            return _objectSpread17(_objectSpread17({}, acc), {}, _defineProperty20({}, key2, void 0));
          }, {}));
        },
        getWidgetSearchParameters: function getWidgetSearchParameters(state) {
          if (!escapeHTML) {
            return state;
          }
          return state.setQueryParameters(TAG_PLACEHOLDER);
        }
      };
    };
  };
  var connectHits_default = connectHits;

  // node_modules/instantsearch.js/es/components/Hits/Hits.js
  var import_classnames = __toESM(require_classnames(), 1);
  function ownKeys18(object, enumerableOnly) {
    var keys2 = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys2.push.apply(keys2, symbols);
    }
    return keys2;
  }
  function _objectSpread18(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2] != null ? arguments[i2] : {};
      if (i2 % 2) {
        ownKeys18(Object(source), true).forEach(function(key2) {
          _defineProperty21(target, key2, source[key2]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys18(Object(source)).forEach(function(key2) {
          Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
        });
      }
    }
    return target;
  }
  function _defineProperty21(obj, key2, value) {
    if (key2 in obj) {
      Object.defineProperty(obj, key2, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key2] = value;
    }
    return obj;
  }
  function _extends3() {
    _extends3 = Object.assign || function(target) {
      for (var i2 = 1; i2 < arguments.length; i2++) {
        var source = arguments[i2];
        for (var key2 in source) {
          if (Object.prototype.hasOwnProperty.call(source, key2)) {
            target[key2] = source[key2];
          }
        }
      }
      return target;
    };
    return _extends3.apply(this, arguments);
  }
  var Hits = function Hits2(_ref) {
    var results = _ref.results, hits3 = _ref.hits, bindEvent = _ref.bindEvent, cssClasses = _ref.cssClasses, templateProps = _ref.templateProps;
    if (results.hits.length === 0) {
      return h(Template_default, _extends3({}, templateProps, {
        templateKey: "empty",
        rootProps: {
          className: (0, import_classnames.default)(cssClasses.root, cssClasses.emptyRoot)
        },
        data: results
      }));
    }
    return h("div", {
      className: cssClasses.root
    }, h("ol", {
      className: cssClasses.list
    }, hits3.map(function(hit, index3) {
      return h(Template_default, _extends3({}, templateProps, {
        templateKey: "item",
        rootTagName: "li",
        rootProps: {
          className: cssClasses.item
        },
        key: hit.objectID,
        data: _objectSpread18(_objectSpread18({}, hit), {}, {
          __hitIndex: index3
        }),
        bindEvent
      }));
    })));
  };
  var Hits_default = Hits;

  // node_modules/instantsearch.js/es/widgets/hits/defaultTemplates.js
  var defaultTemplates = {
    empty: "No results",
    item: function item(data) {
      return JSON.stringify(data, null, 2);
    }
  };
  var defaultTemplates_default = defaultTemplates;

  // node_modules/instantsearch.js/es/lib/insights/client.js
  function ownKeys19(object, enumerableOnly) {
    var keys2 = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys2.push.apply(keys2, symbols);
    }
    return keys2;
  }
  function _objectSpread19(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2] != null ? arguments[i2] : {};
      if (i2 % 2) {
        ownKeys19(Object(source), true).forEach(function(key2) {
          _defineProperty22(target, key2, source[key2]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys19(Object(source)).forEach(function(key2) {
          Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
        });
      }
    }
    return target;
  }
  function _defineProperty22(obj, key2, value) {
    if (key2 in obj) {
      Object.defineProperty(obj, key2, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key2] = value;
    }
    return obj;
  }
  var getSelectedHits = function getSelectedHits2(hits3, selectedObjectIDs) {
    return selectedObjectIDs.map(function(objectID) {
      var hit = find_default(hits3, function(h2) {
        return h2.objectID === objectID;
      });
      if (typeof hit === "undefined") {
        throw new Error('Could not find objectID "'.concat(objectID, '" passed to `clickedObjectIDsAfterSearch` in the returned hits. This is necessary to infer the absolute position and the query ID.'));
      }
      return hit;
    });
  };
  var getQueryID = function getQueryID2(selectedHits) {
    var queryIDs = uniq_default(selectedHits.map(function(hit) {
      return hit.__queryID;
    }));
    if (queryIDs.length > 1) {
      throw new Error("Insights currently allows a single `queryID`. The `objectIDs` provided map to multiple `queryID`s.");
    }
    var queryID = queryIDs[0];
    if (typeof queryID !== "string") {
      throw new Error("Could not infer `queryID`. Ensure InstantSearch `clickAnalytics: true` was added with the Configure widget.\n\nSee: https://alg.li/lNiZZ7");
    }
    return queryID;
  };
  var getPositions = function getPositions2(selectedHits) {
    return selectedHits.map(function(hit) {
      return hit.__position;
    });
  };
  var inferPayload = function inferPayload2(_ref) {
    var method = _ref.method, results = _ref.results, hits3 = _ref.hits, objectIDs = _ref.objectIDs;
    var index3 = results.index;
    var selectedHits = getSelectedHits(hits3, objectIDs);
    var queryID = getQueryID(selectedHits);
    switch (method) {
      case "clickedObjectIDsAfterSearch": {
        var positions = getPositions(selectedHits);
        return {
          index: index3,
          queryID,
          objectIDs,
          positions
        };
      }
      case "convertedObjectIDsAfterSearch":
        return {
          index: index3,
          queryID,
          objectIDs
        };
      default:
        throw new Error('Unsupported method passed to insights: "'.concat(method, '".'));
    }
  };
  var wrapInsightsClient = function wrapInsightsClient2(aa, results, hits3) {
    return function(method) {
      for (var _len = arguments.length, payloads = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        payloads[_key - 1] = arguments[_key];
      }
      var payload = payloads[0];
      true ? _warning(false, "`insights` function has been deprecated. It is still supported in 4.x releases, but not further. It is replaced by the `insights` middleware.\n\nFor more information, visit https://www.algolia.com/doc/guides/getting-insights-and-analytics/search-analytics/click-through-and-conversions/how-to/send-click-and-conversion-events-with-instantsearch/js/") : void 0;
      if (!aa) {
        var withInstantSearchUsage = createDocumentationMessageGenerator({
          name: "instantsearch"
        });
        throw new Error(withInstantSearchUsage("The `insightsClient` option has not been provided to `instantsearch`."));
      }
      if (!Array.isArray(payload.objectIDs)) {
        throw new TypeError("Expected `objectIDs` to be an array.");
      }
      var inferredPayload = inferPayload({
        method,
        results,
        hits: hits3,
        objectIDs: payload.objectIDs
      });
      aa(method, _objectSpread19(_objectSpread19({}, inferredPayload), payload));
    };
  };
  function withInsights(connector) {
    return function(renderFn, unmountFn) {
      return connector(function(renderOptions, isFirstRender) {
        var results = renderOptions.results, hits3 = renderOptions.hits, instantSearchInstance = renderOptions.instantSearchInstance;
        if (results && hits3 && instantSearchInstance) {
          var insights2 = wrapInsightsClient(instantSearchInstance.insightsClient, results, hits3);
          return renderFn(_objectSpread19(_objectSpread19({}, renderOptions), {}, {
            insights: insights2
          }), isFirstRender);
        }
        return renderFn(renderOptions, isFirstRender);
      }, unmountFn);
    };
  }

  // node_modules/instantsearch.js/es/lib/insights/listener.js
  var findInsightsTarget = function findInsightsTarget2(startElement, endElement, validator) {
    var element = startElement;
    while (element && !validator(element)) {
      if (element === endElement) {
        return null;
      }
      element = element.parentElement;
    }
    return element;
  };
  var parseInsightsEvent = function parseInsightsEvent2(element) {
    var serializedPayload = element.getAttribute("data-insights-event");
    if (typeof serializedPayload !== "string") {
      throw new Error("The insights middleware expects `data-insights-event` to be a base64-encoded JSON string.");
    }
    try {
      return deserializePayload(serializedPayload);
    } catch (error) {
      throw new Error("The insights middleware was unable to parse `data-insights-event`.");
    }
  };
  var insightsListener = function insightsListener2(BaseComponent) {
    function WithInsightsListener(props) {
      var handleClick = function handleClick2(event) {
        if (props.sendEvent) {
          var targetWithEvent = findInsightsTarget(event.target, event.currentTarget, function(element) {
            return element.hasAttribute("data-insights-event");
          });
          if (targetWithEvent) {
            var payload = parseInsightsEvent(targetWithEvent);
            payload.forEach(function(single) {
              return props.sendEvent(single);
            });
          }
        }
        var insightsTarget = findInsightsTarget(event.target, event.currentTarget, function(element) {
          return hasDataAttributes(element);
        });
        if (insightsTarget) {
          var _readDataAttributes = readDataAttributes(insightsTarget), method = _readDataAttributes.method, _payload = _readDataAttributes.payload;
          props.insights(method, _payload);
        }
      };
      return h("div", {
        onClick: handleClick
      }, h(BaseComponent, props));
    }
    return WithInsightsListener;
  };
  var listener_default = insightsListener;

  // node_modules/instantsearch.js/es/widgets/hits/hits.js
  function ownKeys20(object, enumerableOnly) {
    var keys2 = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys2.push.apply(keys2, symbols);
    }
    return keys2;
  }
  function _objectSpread20(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2] != null ? arguments[i2] : {};
      if (i2 % 2) {
        ownKeys20(Object(source), true).forEach(function(key2) {
          _defineProperty23(target, key2, source[key2]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys20(Object(source)).forEach(function(key2) {
          Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
        });
      }
    }
    return target;
  }
  function _defineProperty23(obj, key2, value) {
    if (key2 in obj) {
      Object.defineProperty(obj, key2, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key2] = value;
    }
    return obj;
  }
  var withUsage7 = createDocumentationMessageGenerator({
    name: "hits"
  });
  var suit6 = component("Hits");
  var HitsWithInsightsListener = listener_default(Hits_default);
  var renderer = function renderer2(_ref) {
    var renderState = _ref.renderState, cssClasses = _ref.cssClasses, containerNode = _ref.containerNode, templates = _ref.templates;
    return function(_ref2, isFirstRendering) {
      var receivedHits = _ref2.hits, results = _ref2.results, instantSearchInstance = _ref2.instantSearchInstance, insights2 = _ref2.insights, bindEvent = _ref2.bindEvent;
      if (isFirstRendering) {
        renderState.templateProps = prepareTemplateProps_default({
          defaultTemplates: defaultTemplates_default,
          templatesConfig: instantSearchInstance.templatesConfig,
          templates
        });
        return;
      }
      P(h(HitsWithInsightsListener, {
        cssClasses,
        hits: receivedHits,
        results,
        templateProps: renderState.templateProps,
        insights: insights2,
        sendEvent: function sendEvent(event) {
          instantSearchInstance.sendEventToInsights(event);
        },
        bindEvent
      }), containerNode);
    };
  };
  var hits = function hits2(widgetParams) {
    var _ref3 = widgetParams || {}, container = _ref3.container, escapeHTML = _ref3.escapeHTML, transformItems = _ref3.transformItems, _ref3$templates = _ref3.templates, templates = _ref3$templates === void 0 ? {} : _ref3$templates, _ref3$cssClasses = _ref3.cssClasses, userCssClasses = _ref3$cssClasses === void 0 ? {} : _ref3$cssClasses;
    if (!container) {
      throw new Error(withUsage7("The `container` option is required."));
    }
    var containerNode = getContainerNode_default(container);
    var cssClasses = {
      root: (0, import_classnames2.default)(suit6(), userCssClasses.root),
      emptyRoot: (0, import_classnames2.default)(suit6({
        modifierName: "empty"
      }), userCssClasses.emptyRoot),
      list: (0, import_classnames2.default)(suit6({
        descendantName: "list"
      }), userCssClasses.list),
      item: (0, import_classnames2.default)(suit6({
        descendantName: "item"
      }), userCssClasses.item)
    };
    var specializedRenderer = renderer({
      containerNode,
      cssClasses,
      renderState: {},
      templates
    });
    var makeWidget = withInsights(connectHits_default)(specializedRenderer, function() {
      return P(null, containerNode);
    });
    return _objectSpread20(_objectSpread20({}, makeWidget({
      escapeHTML,
      transformItems
    })), {}, {
      $$widgetType: "ais.hits"
    });
  };
  var hits_default = hits;

  // node_modules/instantsearch.js/es/widgets/search-box/defaultTemplates.js
  var defaultTemplate = {
    reset: '\n<svg class="{{cssClasses.resetIcon}}" viewBox="0 0 20 20" width="10" height="10">\n  <path d="M8.114 10L.944 2.83 0 1.885 1.886 0l.943.943L10 8.113l7.17-7.17.944-.943L20 1.886l-.943.943-7.17 7.17 7.17 7.17.943.944L18.114 20l-.943-.943-7.17-7.17-7.17 7.17-.944.943L0 18.114l.943-.943L8.113 10z"></path>\n</svg>\n  ',
    submit: '\n<svg class="{{cssClasses.submitIcon}}" width="10" height="10" viewBox="0 0 40 40">\n  <path d="M26.804 29.01c-2.832 2.34-6.465 3.746-10.426 3.746C7.333 32.756 0 25.424 0 16.378 0 7.333 7.333 0 16.378 0c9.046 0 16.378 7.333 16.378 16.378 0 3.96-1.406 7.594-3.746 10.426l10.534 10.534c.607.607.61 1.59-.004 2.202-.61.61-1.597.61-2.202.004L26.804 29.01zm-10.426.627c7.323 0 13.26-5.936 13.26-13.26 0-7.32-5.937-13.257-13.26-13.257C9.056 3.12 3.12 9.056 3.12 16.378c0 7.323 5.936 13.26 13.258 13.26z"></path>\n</svg>\n  ',
    loadingIndicator: '\n<svg class="{{cssClasses.loadingIcon}}" width="16" height="16" viewBox="0 0 38 38" stroke="#444">\n  <g fill="none" fillRule="evenodd">\n    <g transform="translate(1 1)" strokeWidth="2">\n      <circle strokeOpacity=".5" cx="18" cy="18" r="18" />\n      <path d="M36 18c0-9.94-8.06-18-18-18">\n        <animateTransform\n          attributeName="transform"\n          type="rotate"\n          from="0 18 18"\n          to="360 18 18"\n          dur="1s"\n          repeatCount="indefinite"\n        />\n      </path>\n    </g>\n  </g>\n</svg>\n  '
  };
  var defaultTemplates_default2 = defaultTemplate;

  // node_modules/instantsearch.js/es/widgets/search-box/search-box.js
  var import_classnames3 = __toESM(require_classnames(), 1);

  // node_modules/instantsearch.js/es/connectors/search-box/connectSearchBox.js
  function ownKeys21(object, enumerableOnly) {
    var keys2 = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys2.push.apply(keys2, symbols);
    }
    return keys2;
  }
  function _objectSpread21(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2] != null ? arguments[i2] : {};
      if (i2 % 2) {
        ownKeys21(Object(source), true).forEach(function(key2) {
          _defineProperty24(target, key2, source[key2]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys21(Object(source)).forEach(function(key2) {
          Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
        });
      }
    }
    return target;
  }
  function _defineProperty24(obj, key2, value) {
    if (key2 in obj) {
      Object.defineProperty(obj, key2, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key2] = value;
    }
    return obj;
  }
  var withUsage8 = createDocumentationMessageGenerator({
    name: "search-box",
    connector: true
  });
  var defaultQueryHook = function defaultQueryHook2(query, hook) {
    return hook(query);
  };
  var connectSearchBox = function connectSearchBox2(renderFn) {
    var unmountFn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : noop_default;
    checkRendering_default(renderFn, withUsage8());
    return function(widgetParams) {
      var _ref = widgetParams || {}, _ref$queryHook = _ref.queryHook, queryHook = _ref$queryHook === void 0 ? defaultQueryHook : _ref$queryHook;
      var _refine;
      var _clear;
      return {
        $$type: "ais.searchBox",
        init: function init(initOptions) {
          var instantSearchInstance = initOptions.instantSearchInstance;
          renderFn(_objectSpread21(_objectSpread21({}, this.getWidgetRenderState(initOptions)), {}, {
            instantSearchInstance
          }), true);
        },
        render: function render(renderOptions) {
          var instantSearchInstance = renderOptions.instantSearchInstance;
          renderFn(_objectSpread21(_objectSpread21({}, this.getWidgetRenderState(renderOptions)), {}, {
            instantSearchInstance
          }), false);
        },
        dispose: function dispose(_ref2) {
          var state = _ref2.state;
          unmountFn();
          return state.setQueryParameter("query", void 0);
        },
        getRenderState: function getRenderState(renderState, renderOptions) {
          return _objectSpread21(_objectSpread21({}, renderState), {}, {
            searchBox: this.getWidgetRenderState(renderOptions)
          });
        },
        getWidgetRenderState: function getWidgetRenderState(_ref3) {
          var helper = _ref3.helper, searchMetadata = _ref3.searchMetadata, state = _ref3.state;
          if (!_refine) {
            _refine = function _refine2(query) {
              queryHook(query, function(q) {
                return helper.setQuery(q).search();
              });
            };
            _clear = function _clear2() {
              helper.setQuery("").search();
            };
          }
          return {
            query: state.query || "",
            refine: _refine,
            clear: _clear,
            widgetParams,
            isSearchStalled: searchMetadata.isSearchStalled
          };
        },
        getWidgetUiState: function getWidgetUiState(uiState, _ref4) {
          var searchParameters = _ref4.searchParameters;
          var query = searchParameters.query || "";
          if (query === "" || uiState && uiState.query === query) {
            return uiState;
          }
          return _objectSpread21(_objectSpread21({}, uiState), {}, {
            query
          });
        },
        getWidgetSearchParameters: function getWidgetSearchParameters(searchParameters, _ref5) {
          var uiState = _ref5.uiState;
          return searchParameters.setQueryParameter("query", uiState.query || "");
        }
      };
    };
  };
  var connectSearchBox_default = connectSearchBox;

  // node_modules/instantsearch.js/es/widgets/search-box/search-box.js
  function ownKeys22(object, enumerableOnly) {
    var keys2 = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys2.push.apply(keys2, symbols);
    }
    return keys2;
  }
  function _objectSpread22(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2] != null ? arguments[i2] : {};
      if (i2 % 2) {
        ownKeys22(Object(source), true).forEach(function(key2) {
          _defineProperty25(target, key2, source[key2]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys22(Object(source)).forEach(function(key2) {
          Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
        });
      }
    }
    return target;
  }
  function _defineProperty25(obj, key2, value) {
    if (key2 in obj) {
      Object.defineProperty(obj, key2, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key2] = value;
    }
    return obj;
  }
  var withUsage9 = createDocumentationMessageGenerator({
    name: "search-box"
  });
  var suit7 = component("SearchBox");
  var renderer3 = function renderer4(_ref) {
    var containerNode = _ref.containerNode, cssClasses = _ref.cssClasses, placeholder = _ref.placeholder, templates = _ref.templates, autofocus = _ref.autofocus, searchAsYouType = _ref.searchAsYouType, showReset = _ref.showReset, showSubmit = _ref.showSubmit, showLoadingIndicator = _ref.showLoadingIndicator;
    return function(_ref2) {
      var refine = _ref2.refine, query = _ref2.query, isSearchStalled = _ref2.isSearchStalled;
      P(h(SearchBox_default, {
        query,
        placeholder,
        autofocus,
        refine,
        searchAsYouType,
        templates,
        showSubmit,
        showReset,
        showLoadingIndicator,
        isSearchStalled,
        cssClasses
      }), containerNode);
    };
  };
  var searchBox = function searchBox2(widgetParams) {
    var _ref3 = widgetParams || {}, container = _ref3.container, _ref3$placeholder = _ref3.placeholder, placeholder = _ref3$placeholder === void 0 ? "" : _ref3$placeholder, _ref3$cssClasses = _ref3.cssClasses, userCssClasses = _ref3$cssClasses === void 0 ? {} : _ref3$cssClasses, _ref3$autofocus = _ref3.autofocus, autofocus = _ref3$autofocus === void 0 ? false : _ref3$autofocus, _ref3$searchAsYouType = _ref3.searchAsYouType, searchAsYouType = _ref3$searchAsYouType === void 0 ? true : _ref3$searchAsYouType, _ref3$showReset = _ref3.showReset, showReset = _ref3$showReset === void 0 ? true : _ref3$showReset, _ref3$showSubmit = _ref3.showSubmit, showSubmit = _ref3$showSubmit === void 0 ? true : _ref3$showSubmit, _ref3$showLoadingIndi = _ref3.showLoadingIndicator, showLoadingIndicator = _ref3$showLoadingIndi === void 0 ? true : _ref3$showLoadingIndi, queryHook = _ref3.queryHook, _ref3$templates = _ref3.templates, userTemplates = _ref3$templates === void 0 ? {} : _ref3$templates;
    if (!container) {
      throw new Error(withUsage9("The `container` option is required."));
    }
    var containerNode = getContainerNode_default(container);
    var cssClasses = {
      root: (0, import_classnames3.default)(suit7(), userCssClasses.root),
      form: (0, import_classnames3.default)(suit7({
        descendantName: "form"
      }), userCssClasses.form),
      input: (0, import_classnames3.default)(suit7({
        descendantName: "input"
      }), userCssClasses.input),
      submit: (0, import_classnames3.default)(suit7({
        descendantName: "submit"
      }), userCssClasses.submit),
      submitIcon: (0, import_classnames3.default)(suit7({
        descendantName: "submitIcon"
      }), userCssClasses.submitIcon),
      reset: (0, import_classnames3.default)(suit7({
        descendantName: "reset"
      }), userCssClasses.reset),
      resetIcon: (0, import_classnames3.default)(suit7({
        descendantName: "resetIcon"
      }), userCssClasses.resetIcon),
      loadingIndicator: (0, import_classnames3.default)(suit7({
        descendantName: "loadingIndicator"
      }), userCssClasses.loadingIndicator),
      loadingIcon: (0, import_classnames3.default)(suit7({
        descendantName: "loadingIcon"
      }), userCssClasses.loadingIcon)
    };
    var templates = _objectSpread22(_objectSpread22({}, defaultTemplates_default2), userTemplates);
    var specializedRenderer = renderer3({
      containerNode,
      cssClasses,
      placeholder,
      templates,
      autofocus,
      searchAsYouType,
      showReset,
      showSubmit,
      showLoadingIndicator
    });
    var makeWidget = connectSearchBox_default(specializedRenderer, function() {
      return P(null, containerNode);
    });
    return _objectSpread22(_objectSpread22({}, makeWidget({
      queryHook
    })), {}, {
      $$widgetType: "ais.searchBox"
    });
  };
  var search_box_default = searchBox;

  // node_modules/instantsearch.js/es/widgets/index.js
  var EXPERIMENTAL_dynamicWidgets = deprecate(dynamic_widgets_default, "use dynamicWidgets");

  // src/search-source.js
  var search = es_default({
    indexName: "patents",
    searchClient: (0, import_instant_meilisearch.instantMeiliSearch)("http://localhost:7700", "628d7d1c524e967c44c8c67c72db2ede011a93ab527e276cc4cee3dec5607c90")
  });
  search.addWidgets([
    search_box_default({
      container: "#search-box"
    }),
    configure_default({
      hitsPerPage: 4
    }),
    hits_default({
      container: "#hits",
      templates: {
        item(hit) {
          return `
                    <div>
                        <h3>IdL ${hit.patent_id}</h3>
                        <p> 
                            ${es_default.highlight({ attribute: "patent_text", hit })} 
                        </p>
                    </div>
                `;
        }
      }
    })
  ]);
  search.start();
})();
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.
  Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

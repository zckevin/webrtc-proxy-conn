function ab2str(ab) {
  if (ab.byteLength < 2) {
    return null;
  }
  let dv = new DataView(ab);
  let n = dv.getUint16(0, true);
  if (ab.byteLength < n + 2) {
    return [null, null];
  }
  let s = String.fromCharCode.apply(null, new Uint16Array(ab, 2, n / 2));
  return [s, ab.slice(n + 2)];
}

function str2ab(str) {
  var buf = new ArrayBuffer((str.length + 1) * 2); // 2 bytes for each char
  var bufView = new Uint16Array(buf);
  for (var i = 0, strLen = str.length; i < strLen; i++) {
    bufView[i + 1] = str.charCodeAt(i);
  }
  bufView[0] = str.length * 2;
  return buf;
}

export { ab2str, str2ab };

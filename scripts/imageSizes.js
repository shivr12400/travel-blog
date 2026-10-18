// Records the displayed width and height of every photo in public/images so the
// wall can pick a print shape that suits the photo before it has loaded.
// Runs before `dev` and `build`; writes imageSizes.json at the project root.
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const IMAGES = path.join(ROOT, 'public', 'images');
const OUT = path.join(ROOT, 'imageSizes.json');

// EXIF orientations 5–8 mean the camera stored the pixels sideways and the
// browser turns them upright, so width and height swap on screen.
const exifOrientation = (buf, start) => {
  if (buf.toString('ascii', start, start + 4) !== 'Exif') return 1;
  const tiff = start + 6;
  const le = buf.toString('ascii', tiff, tiff + 2) === 'II';
  const u16 = (o) => (le ? buf.readUInt16LE(o) : buf.readUInt16BE(o));
  const u32 = (o) => (le ? buf.readUInt32LE(o) : buf.readUInt32BE(o));
  const ifd = tiff + u32(tiff + 4);
  const count = u16(ifd);
  for (let i = 0; i < count; i++) {
    const entry = ifd + 2 + i * 12;
    if (u16(entry) === 0x0112) return u16(entry + 8);
  }
  return 1;
};

const jpegSize = (buf) => {
  let orientation = 1;
  let offset = 2;
  while (offset < buf.length) {
    if (buf[offset] !== 0xff) return null;
    const marker = buf[offset + 1];
    const length = buf.readUInt16BE(offset + 2);
    if (marker === 0xe1 && buf.toString('ascii', offset + 4, offset + 8) === 'Exif') {
      orientation = exifOrientation(buf, offset + 4);
    }
    const isFrame = marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker);
    if (isFrame) {
      const height = buf.readUInt16BE(offset + 5);
      const width = buf.readUInt16BE(offset + 7);
      return orientation >= 5 ? [height, width] : [width, height];
    }
    offset += 2 + length;
  }
  return null;
};

const pngSize = (buf) =>
  buf.toString('ascii', 1, 4) === 'PNG' ? [buf.readUInt32BE(16), buf.readUInt32BE(20)] : null;

const walk = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });

const sizes = {};
walk(IMAGES).forEach((file) => {
  const ext = path.extname(file).toLowerCase();
  const reader = ext === '.png' ? pngSize : ['.jpg', '.jpeg'].includes(ext) ? jpegSize : null;
  if (!reader) return;
  try {
    const size = reader(fs.readFileSync(file));
    if (size) sizes['/' + path.relative(path.join(ROOT, 'public'), file).split(path.sep).join('/')] = size;
  } catch {
    // An unreadable file just goes without a size; the wall treats it as landscape.
  }
});

fs.writeFileSync(OUT, JSON.stringify(sizes, null, 2) + '\n');
console.log(`imageSizes.json: ${Object.keys(sizes).length} photos`);

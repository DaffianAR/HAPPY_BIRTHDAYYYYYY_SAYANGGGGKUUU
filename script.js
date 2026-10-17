// =====================================================================
// >>>>>>>>>>>>>>>>>>>>>>>>>>  ISI DI SINI  <<<<<<<<<<<<<<<<<<<<<<<<<<<<
// =====================================================================
const CONFIG = {

  // ---------- 1. KE MANA DATA DIKIRIM (WAJIB DIISI) ----------
  kirim: {
    mode: "email",                 // pakai email → biarkan "email".  Pakai WhatsApp → ganti jadi "wa"

    email: "daffianakhdaan@gmail.com",                     // ← ISI EMAILMU DI SINI, contoh: "kamu@gmail.com"      (untuk mode "email")
    emailTambahan: "daffianakhdaan13@gmail.com",             // ← (opsional) email kedua untuk salinan, contoh: "cadangan@gmail.com"
    waNomor: "628986975427",                   // ← ISI NOMOR WA-MU DI SINI, contoh: "6281234567890"   (untuk mode "wa")
                                   //   format WA: tanpa +, tanpa 0 di depan (081234567890 → 6281234567890)

    minFoto: 6,                    // minimal foto yang harus diambil dari kamera tiap kali kirim
    maksFoto: 12,                   // maksimal foto tiap kali kirim (paling banyak 12)
    ingatSudahIsi: false,          // false = formulir muncul SETIAP link dibuka (berkali-kali)
                                   // true  = formulir awal hanya sekali per HP
    judul: "Sebelum mulai, isi dulu ya 💗",
    labelNama: "Nama kamu",
    labelPanggilan: "Panggilan favoritmu",
    labelPesan: "Kesan & pesan kamu untukku 💌",
    catatan: "Isianmu dan foto yang kamu ambil akan dikirim langsung ke aku 💌"
  },
  // =====================================================================

  // ---------- 2. PASSWORD (kode saat ini: 112820) ----------
  kodeHash: "eb0336dd1586f9d72136aabc20c729c8243998586e5cced7aa9755650b4f653e",
  petunjuk: "Petunjuk: angka spesial kita 💗",

  // ---------- 3. TEKS ----------
  nama: "SELI OKSTAVIA",
  quote: "jangan lupa dibuka... ada kejutan buat kamu 💗",
  surat:
`Selamat ulang tahun, sayang 🎂


Selamat ulang tahun yaa. Semoga di umur kamu yang sekarang, semakin banyak hal baik yang datang ke kamu. Semoga apa yang kamu semogakan satu-satu bisa tercapai, urusan kamu dimudahkan, dan kamu selalu dikelilingi orang-orang yang sayang sama kamu.

Aku juga mau bilang makasih karena selama ini kamu udah hadir di hidup aku. Makasih udah selalu berusaha ngerti aku, perhatian sama aku, dan nemenin aku di banyak hal. Mungkin aku nggak selalu bisa nunjukin semuanya dengan cara yang sempurna, tapi aku bener-bener bersyukur bisa kenal dan punya kamu.

Di hari ulang tahun kamu ini, aku cuma berharap kamu bisa selalu bahagia, bukan cuma hari ini, tapi juga di hari-hari berikutnya. Kalau nanti ada hari yang berat, semoga kamu selalu punya alasan buat bertahan dan tetap tersenyum.

Semoga kita juga bisa terus punya banyak cerita, banyak momen kecil yang nantinya bisa kita inget bareng-bareng. Aku seneng bisa jadi salah satu orang yang bisa nemenin kamu sampai sejauh ini.

Sekali lagi, happy birthday yaa, sayang. Semoga tahun ini jadi tahun yang baik buat kamu. I love you ❤️

I love you, today and always 💕`,

  // ---------- 4. TANDA TANGAN DI SURAT ----------
  tandaTangan: "foto/ttd.png",
  ttdTeks: "Dengan cinta,",

  // ---------- 5. LAGU ----------
  lagu: "lagu.mp3",
  judulLagu: "Best Part",
  artis: "Daniel Caesar & H.E.R",
  cover: "foto/cover.jpg",

  // ---------- 6. PUZZLE ----------
  fotoPuzzle: "foto/puzzle.jpg",

  // ---------- 7. BACKGROUND (satu file untuk tiap halaman) ----------
  latar: {
    default: "foto/bg.jpg",
    gate:   "foto/bg-kode.jpg",
    cerita: "foto/bg-cerita.jpg",
    intro:  "foto/bg-intro.jpg",
    menu:   "foto/bg-menu.jpg",
    surat:  "foto/bg-surat.jpg",
    bunga:  "foto/bg-bunga.jpg",
    foto:   "foto/bg-foto.jpg"
  },
  gelapLatar: 0.5,   // 0 = foto latar terang apa adanya, 1 = sangat gelap

  // ---------- 8. HALAMAN BUNGA ----------
  fotoBunga: ["foto/bunga1.jpg", "foto/bunga2.jpg", "foto/bunga3.jpg", "foto/bunga4.jpg"],
  buket: "foto/buket.png",
  ukuranBuket: 52,
  buketBingkai: true,
  bungaTransisi: [],

  // ---------- 9. HALAMAN FOTO ----------
  foto: ["foto/1.jpg", "foto/2.jpg","foto/3.jpg", "foto/4.jpg", "foto/5.jpg", "foto/6.jpg","foto/7.jpg", "foto/8.jpg", "foto/9.jpg", "foto/10.jpg", "foto/11.jpg", "foto/12.jpg","foto/13.jpg", "foto/14.jpg", "foto/15.jpg", "foto/16.jpg", "foto/17.jpg", "foto/18.jpg","foto/19.jpg", "foto/20.jpg", "foto/21.jpg"],
  video: "foto/video.mp4",
  videoPotret: "foto/video-potret.mp4",
  video2: "foto/video2.mp4",               // landscape ke-2 (BARU)
  videoPotret2: "foto/video-potret2.mp4",  // potret ke-2 (BARU)

  // ---------- 9B. VIDEO PEMBUKA (potret, paling depan sebelum formulir) ----------
  videoAwal: "foto/video-awal.mp4",
  judulVideoAwal: "Tonton ini dulu ya 🎬",

  // ---------- 9C. KATA-KATA YANG MENGORBIT DI UNIVERSE (ganti sesukamu) ----------
  kataUniverse: ["HAPPY BIRTHDAY", "I LOVE YOU", "MY LOVE", "FOREVER", "SELI", "SAYANG", "ALWAYS YOU", "MY EVERYTHING", "KAMU SPESIAL", "LOVE YOU 3000"],

  // ---------- 10. LAYAR CERITA SETELAH PASSWORD ----------
  cerita: [
    { emoji: "🐱", teks: "Hai, cantik 👋", tombol: "ketuk sini <3" },
    { emoji: "🧸", teks: "Kamu sudah siap buka ini?", pilihan: ["Iya", "Nggak"] },
    { emoji: "🎉", teks: "Hari ini adalah harinya cewek paling cantik sedunia!! Selamat ulang tahun, sayangku 🤍", tombol: "buka <3" },
    { emoji: "💐", teks: "Selamat ulang tahun untuk pacarku yang paling cantik, penyayang, dan perhatian. Aku sayang kamu banyak banget!!", tombol: "Aku punya sesuatu buat kamu 🎁" },
    { emoji: "💌", teks: "Oke, yang terakhir. Aku bikin sesuatu buat ulang tahunmu, bacanya pelan-pelan yaa", tombol: "<3" }
  ]
};
// =====================================================================
// SELESAI. Di bawah ini jangan diubah.
// =====================================================================

const $ = s => document.querySelector(s), $$ = s => document.querySelectorAll(s);
const fase = f => document.documentElement.dataset.fase = f;
const cekFoto = src => new Promise(r => { const i = new Image(); i.onload = () => r(true); i.onerror = () => r(false); i.src = src; });
const cache = {}, ada = s => s ? (cache[s] ??= cekFoto(s)) : Promise.resolve(false);

document.documentElement.style.setProperty('--gelap', CONFIG.gelapLatar);
document.documentElement.style.setProperty('--tb', CONFIG.ukuranBuket);

// pesan kecil "Terkirim"
let tmToast;
function toast(t) {
  const el = $('#toast'); el.textContent = t; el.classList.add('on');
  clearTimeout(tmToast); tmToast = setTimeout(() => el.classList.remove('on'), 3500);
}

// ---------- musik ----------
const lagu = $('#lagu');
let manualPause = false;
lagu.src = CONFIG.lagu; lagu.volume = 1;
const fmt = t => isFinite(t) ? `${t / 60 | 0}:${String(t % 60 | 0).padStart(2, '0')}` : '0:00';
function mulaiMusik() { if (lagu.paused && !manualPause) lagu.play().catch(() => {}); }
function bukaKunciAudio() {
  lagu.muted = true;
  lagu.play().then(() => { lagu.pause(); lagu.currentTime = 0; lagu.muted = false; }).catch(() => { lagu.muted = false; });
}
lagu.onerror = () => $('#art').textContent = '⚠ File lagu tidak ditemukan: ' + CONFIG.lagu;
lagu.onplay = () => $('#playBtn').textContent = '❚❚';
lagu.onpause = () => $('#playBtn').textContent = '▶';
lagu.onloadedmetadata = () => $('#t2').textContent = fmt(lagu.duration);
lagu.ontimeupdate = () => {
  $('#prog').style.width = (lagu.currentTime / (lagu.duration || 1) * 100) + '%';
  $('#t1').textContent = fmt(lagu.currentTime);
};
$('#playBtn').onclick = () => {
  if (lagu.paused) { manualPause = false; lagu.play().catch(() => { $('#art').textContent = '⚠ Lagu belum bisa diputar, cek file ' + CONFIG.lagu; }); }
  else { manualPause = true; lagu.pause(); }
};
$('#prev2').onclick = () => lagu.currentTime = 0;
$('#next').onclick = () => lagu.currentTime = Math.min(lagu.duration || 0, lagu.currentTime + 10);
$('#bar').onclick = e => {
  const r = e.currentTarget.getBoundingClientRect();
  if (lagu.duration) lagu.currentTime = (e.clientX - r.left) / r.width * lagu.duration;
};

// ---------- isi konten ----------
$('#nama').textContent = CONFIG.nama;
$('#quote').textContent = CONFIG.quote;
$('#petunjuk').textContent = CONFIG.petunjuk;
$('#jdl').textContent = CONFIG.judulLagu;
$('#art').textContent = CONFIG.artis;

$('#ttdTeks').textContent = CONFIG.ttdTeks;
const tt = $('#ttd'); tt.onerror = () => $('#ttdBox').style.display = 'none'; tt.src = CONFIG.tandaTangan;

$$('img[data-bunga]').forEach(img => {
  img.onerror = () => { img.removeAttribute('src'); img.parentElement.classList.add('kosong'); };
  img.src = CONFIG.fotoBunga[+img.dataset.bunga];
});
const bk = $('#buket');
bk.classList.toggle('polos', !CONFIG.buketBingkai);
bk.onerror = () => bk.removeAttribute('src');
bk.src = CONFIG.buket;
$('#cover').onerror = e => e.target.removeAttribute('src');
ada(CONFIG.cover).then(ok => $('#cover').src = ok ? CONFIG.cover : CONFIG.foto[0]);

$$('.tepi').forEach(t => t.innerHTML = '<svg viewBox="0 0 100 100"><use href="#rose"/></svg>'.repeat(14));

CONFIG.foto.forEach((src, i) => {
  const d = document.createElement('div'); d.className = 'pol';
  d.style.setProperty('--r', ((i % 2 ? 1 : -1) * (2 + Math.random() * 4)).toFixed(1) + 'deg');
  const im = new Image(); im.alt = '';
  im.onerror = () => { im.remove(); d.classList.add('kosong'); };
  im.src = src; d.appendChild(im); $('#sebar').appendChild(d);
});

[['#vidA', '#vwrapA', CONFIG.videoAwal], ['#vid', '#vwrap', CONFIG.video], ['#vid2', '#vwrap2', CONFIG.videoPotret], ['#vid3', '#vwrap3', CONFIG.video2], ['#vid4', '#vwrap4', CONFIG.videoPotret2]].forEach(([v, w, src]) => {
  const el = $(v);
  el.onerror = () => $(w).classList.add('kosong');
  el.src = src;
  el.onplay = () => { lagu.pause(); $$('video').forEach(o => { if (o !== el) o.pause(); }); };
});

document.addEventListener('click', e => {
  const im = e.target.closest('.pol img, .polaroid img, .buket-img');
  if (im && im.getAttribute('src')) { $('#lb img').src = im.src; $('#lb').classList.add('on'); }
});
$('#lb').onclick = () => $('#lb').classList.remove('on');

// ---------- latar foto per halaman ----------
async function setLatar(id) {
  const bg = $('#bg-foto');
  for (const s of [CONFIG.latar[id], CONFIG.latar.default]) {
    if (await ada(s)) { bg.style.backgroundImage = `url(${s})`; bg.classList.add('ada'); return; }
  }
  bg.style.backgroundImage = 'none'; bg.classList.remove('ada');
}

// ---------- pindah layar ----------
const TANPA_LATAR = ['universe', 'videoAwal', 'form', 'unggah', 'gift', 'puzzle'];
function go(id) {
  $$('.screen').forEach(s => s.classList.remove('active'));
  $('#' + id).classList.add('active');
  if (!TANPA_LATAR.includes(id)) setLatar(id);
  if (id !== 'foto' && id !== 'videoAwal') $$('video').forEach(v => v.pause());
  if (id !== 'videoAwal') $('#vidA').pause();
  if (id !== 'unggah') stopKamera();
  if (id === 'surat') ketik();
  if (id === 'universe') $('#uGate').hidden = false; else hentiUni();
  if (![...TANPA_LATAR, 'gate'].includes(id)) mulaiMusik();
}
$$('[data-go]').forEach(b => b.onclick = () => go(b.dataset.go));

// ================= FORMULIR, KAMERA & KIRIM DATA KE KAMU =================
const KR = CONFIG.kirim, MODE = KR.mode;
const siap = MODE === 'wa' ? !!KR.waNomor : !!KR.email;
let sudahKirim = 0;   // jumlah foto yang sudah terkirim (kalau gagal di tengah, tidak kirim ulang dari awal)
let dataForm = {}, fotos = [], waPesan = false, waFoto = false;
let stream = null, facing = 'user';
let alurAwal = true;   // true = pertama kali (selesai → kado) | false = "Kirim lagi" dari menu (selesai → menu)

$('#vaJudul').textContent = CONFIG.judulVideoAwal;
$('#btnVideoAwal').onclick = () => { $('#vidA').pause(); go('gift'); };
$('#fJudul').textContent = KR.judul;
$('#fLNama').textContent = KR.labelNama;
$('#fLPanggil').textContent = KR.labelPanggilan;
$('#fLPesan').textContent = KR.labelPesan;
$('#uInfo').textContent = `Ambil minimal ${KR.minFoto} foto langsung dari kamera, ya. Fotonya akan dikirim ke aku.`;
$('#fCatatan').textContent = siap ? KR.catatan : '⚠ MODE UJI: data BELUM terkirim (email / nomor WA belum diisi di script.js)';
if (!siap) $('#fCatatan').style.color = '#b0144a';
$('#emailForm').action = 'https://formsubmit.co/' + KR.email;
if (KR.emailTambahan) { $('#eCc').value = KR.emailTambahan; $('#eCc').disabled = false; }
$('#boxEmail').hidden = MODE === 'wa';
$('#boxWa').hidden = MODE !== 'wa';

// mulai (atau mulai ulang) satu putaran formulir + foto
function resetKirim() {
  fotos.forEach(f => URL.revokeObjectURL(f.url)); fotos = [];
  waPesan = false; waFoto = false;
  $('#fPesan').value = ''; $('#errForm').textContent = ''; $('#errFoto').textContent = '';
  gambarPreview();
}
function mulaiForm(awal) {
  alurAwal = awal; resetKirim();
  $('#stage').hidden = !awal; if (!awal) $('#form').classList.remove('kunci');
  $$('.batal').forEach(b => b.hidden = awal);
  $('#btnKirimFoto').textContent = awal ? 'Kirim & lanjut ➜' : 'Kirim ✉️';
  $('#btnWaLanjut').textContent = awal ? 'Lanjut ➜' : 'Selesai ✓';
  go('form');
}
$('#btnKirimLagi').onclick = () => mulaiForm(false);
$$('.batal').forEach(b => b.onclick = () => go('menu'));

// langkah 1: formulir
$('#btnForm').onclick = () => {
  if (alurAwal) bukaKunciAudio();
  const nama = $('#fNama').value.trim(), pgl = $('#fPanggil').value.trim(), psn = $('#fPesan').value.trim();
  if (!nama || !pgl || !psn) { $('#errForm').textContent = 'Lengkapi semua kolom dulu ya 💗'; return; }
  dataForm = { nama, pgl, psn }; $('#errForm').textContent = '';
  go('unggah'); gambarPreview(); bukaKamera();
};

// langkah 2: kamera langsung (tanpa galeri)
function kameraGagal(msg) {
  $('#kameraPesan').hidden = false; $('#kameraPesan').textContent = msg;
  $('#btnJepret').hidden = true; $('#btnGanti').hidden = true;
  $('#btnBukaKamera').hidden = false; $('#lblFallback').hidden = false;
}
function stopKamera() {
  if (stream) { stream.getTracks().forEach(t => t.stop()); stream = null; }
  $('#kamera').srcObject = null;
}
async function bukaKamera() {
  stopKamera();
  $('#errFoto').textContent = '';
  $('#kameraPesan').hidden = false; $('#kameraPesan').textContent = 'Menyalakan kamera...';
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    kameraGagal('Kamera langsung tidak didukung di sini. Pakai tombol "Buka kamera HP" di bawah.'); return;
  }
  try {
    stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: { ideal: facing }, width: { ideal: 1280 }, height: { ideal: 960 } }, audio: false
    });
    const v = $('#kamera'); v.srcObject = stream; await v.play().catch(() => {});
    v.classList.toggle('depan', facing === 'user');
    $('#kameraPesan').hidden = true;
    $('#btnJepret').hidden = false; $('#btnGanti').hidden = false;
    $('#btnBukaKamera').hidden = true; $('#lblFallback').hidden = true;
  } catch (e) {
    kameraGagal('Kamera belum diizinkan. Tekan "Izinkan" saat browser meminta akses kamera, lalu coba lagi.');
  }
}
function tambahFoto(b) {
  fotos.push({ b, url: URL.createObjectURL(b) }); gambarPreview();
}
function jepret() {
  if (fotos.length >= KR.maksFoto) { $('#errFoto').textContent = `Maksimal ${KR.maksFoto} foto ya.`; return; }
  const v = $('#kamera'); if (!v.videoWidth) return;
  const s = Math.min(1, 1280 / Math.max(v.videoWidth, v.videoHeight)), c = document.createElement('canvas');
  c.width = Math.round(v.videoWidth * s); c.height = Math.round(v.videoHeight * s);
  c.getContext('2d').drawImage(v, 0, 0, c.width, c.height);
  c.toBlob(b => { if (b) tambahFoto(b); }, 'image/jpeg', .75);
  const box = $('#kameraBox'); box.classList.remove('flash'); void box.offsetWidth; box.classList.add('flash');
  if (navigator.vibrate) navigator.vibrate(40);
}
$('#btnBukaKamera').onclick = bukaKamera;
$('#btnJepret').onclick = jepret;
$('#btnGanti').onclick = () => { facing = facing === 'user' ? 'environment' : 'user'; bukaKamera(); };

// cadangan: kalau kamera langsung gagal, buka aplikasi kamera HP (satu foto tiap ketukan)
function kompres(file, sisi = 1280, q = .75) {
  return new Promise(r => {
    const u = URL.createObjectURL(file), i = new Image();
    i.onload = () => {
      const s = Math.min(1, sisi / Math.max(i.width, i.height)), c = document.createElement('canvas');
      c.width = Math.round(i.width * s); c.height = Math.round(i.height * s);
      c.getContext('2d').drawImage(i, 0, 0, c.width, c.height);
      URL.revokeObjectURL(u);
      c.toBlob(b => r(b), 'image/jpeg', q);
    };
    i.onerror = () => { URL.revokeObjectURL(u); r(null); };
    i.src = u;
  });
}
$('#inputKamera').onchange = async e => {
  const f = e.target.files[0]; e.target.value = '';
  if (!f) return;
  if (fotos.length >= KR.maksFoto) { $('#errFoto').textContent = `Maksimal ${KR.maksFoto} foto ya.`; return; }
  const b = await kompres(f); if (b) tambahFoto(b);
};

function gambarPreview() {
  sudahKirim = 0;
  const p = $('#prev'); p.innerHTML = '';
  fotos.forEach((f, i) => {
    const d = document.createElement('div'); d.className = 'pv';
    d.innerHTML = `<img src="${f.url}" alt=""><button aria-label="Hapus">✕</button>`;
    d.querySelector('button').onclick = () => { URL.revokeObjectURL(f.url); fotos.splice(i, 1); gambarPreview(); };
    p.appendChild(d);
  });
  const cukup = fotos.length >= KR.minFoto;
  $('#hitung').textContent = `${fotos.length} foto diambil (minimal ${KR.minFoto}, maksimal ${KR.maksFoto})`;
  $('#btnKirimFoto').disabled = !cukup;
  $('#btnWaPesan').disabled = !cukup;
  $('#btnWaFoto').disabled = !cukup;
  cekLanjutWa();
}
function cekLanjutWa() { $('#btnWaLanjut').disabled = !(fotos.length >= KR.minFoto && waPesan && waFoto); }
const filesFoto = () => fotos.map((f, i) => new File([f.b], `foto${i + 1}.jpg`, { type: 'image/jpeg' }));

// selesai satu putaran kirim
function selesaiKirim() {
  stopKamera();
  if (alurAwal) {
    try { localStorage.setItem('sudahIsi', '1'); } catch (e) {}
    go('videoAwal');   // setelah kirim foto → video, lalu kado
  } else go('menu');
}

// --- mode EMAIL: satu email per foto (email foto pertama membawa pesan) ---
function kirimSatu(file, i, n, waktu) {
  $('#eNama').value = dataForm.nama; $('#ePgl').value = dataForm.pgl;
  $('#ePsn').value = i === 0 ? dataForm.psn : '(pesan lengkap ada di email foto 1)';
  $('#eWkt').value = waktu;
  $('#eSubj').value = `💌 Pesan baru dari ${dataForm.nama} — foto ${i + 1}/${n} (${waktu})`;
  const dt = new DataTransfer(); dt.items.add(file);
  $('#eFoto').files = dt.files;
  return new Promise(res => {
    let sel = false; const selesai = v => { if (!sel) { sel = true; res(v); } };
    $('#kirimFrame').onload = () => selesai(true);
    setTimeout(() => selesai(false), 25000);
    $('#emailForm').submit();
  });
}
$('#btnKirimFoto').onclick = async () => {
  const btn = $('#btnKirimFoto'), label = btn.textContent;
  const total = fotos.reduce((a, f) => a + f.b.size, 0);
  if (total > 9 * 1024 * 1024) { $('#errFoto').textContent = 'Total foto terlalu besar, hapus beberapa foto ya.'; return; }
  if (siap && !navigator.onLine) { $('#errFoto').textContent = 'Sepertinya tidak ada internet 😢 coba lagi ya.'; return; }
  btn.disabled = true; btn.textContent = 'Mengirim... 💌'; $('#errFoto').textContent = '';
  if (siap) {
    const waktu = new Date().toLocaleString('id-ID', { dateStyle: 'medium', timeStyle: 'short' });
    // FormSubmit hanya menerima 1 lampiran per kiriman → tiap foto dikirim sebagai 1 email sendiri
    const files = filesFoto(), n = files.length;
    for (let i = sudahKirim; i < n; i++) {
      btn.textContent = `Mengirim ${i + 1}/${n}... 💌`;
      const ok = await kirimSatu(files[i], i, n, waktu);
      if (!ok) {
        $('#errFoto').textContent = `Baru ${sudahKirim} dari ${n} foto terkirim 😢 Cek internet, lalu tekan kirim lagi ya (yang sudah terkirim tidak dikirim ulang).`;
        btn.textContent = label; btn.disabled = false; return;
      }
      sudahKirim = i + 1;
      if (i < n - 1) await new Promise(r => setTimeout(r, 1500));
    }
    toast('Terkirim ke aku 💌 Makasih ya!');
  } else console.warn('Mode uji: email belum diisi, data tidak dikirim.');
  btn.textContent = label; btn.disabled = false;
  selesaiKirim();
};

// --- mode WA: buka WhatsApp dengan pesan terisi, lalu bagikan foto ---
$('#btnWaPesan').onclick = () => {
  if (siap) {
    const t = `💌 Kesan & pesan baru\n\nNama: ${dataForm.nama}\nPanggilan favorit: ${dataForm.pgl}\n\nPesan:\n${dataForm.psn}`;
    window.open(`https://wa.me/${KR.waNomor}?text=${encodeURIComponent(t)}`, '_blank');
  }
  waPesan = true; cekLanjutWa();
};
$('#btnWaFoto').onclick = async () => {
  const files = filesFoto();
  if (navigator.canShare && navigator.canShare({ files })) {
    try { await navigator.share({ files, text: `Foto dari ${dataForm.nama}` }); waFoto = true; $('#errFoto').textContent = ''; }
    catch (e) { $('#errFoto').textContent = 'Pengiriman foto dibatalkan. Coba lagi ya.'; }
  } else {
    $('#errFoto').textContent = 'HP ini belum bisa membagikan foto langsung. Kirim fotonya manual ke WhatsApp-ku ya 💗';
    waFoto = true;
  }
  cekLanjutWa();
};
$('#btnWaLanjut').onclick = selesaiKirim;

// opsional: lewati formulir awal kalau dia sudah pernah mengisi (hanya bila ingatSudahIsi = true)
let sudah = false;
try { sudah = KR.ingatSudahIsi && localStorage.getItem('sudahIsi') && !location.search.includes('ulang'); } catch (e) {}

// ===============================================================

// ---------- transisi bunga ----------
let bungaOK = [];
Promise.all((CONFIG.bungaTransisi || []).map(s => ada(s).then(ok => ok && s))).then(r => bungaOK = r.filter(Boolean));

function transisiBunga(tengah) {
  const o = document.createElement('div'); o.className = 'mawar';
  const emoji = ['🌹', '🌷', '🌸', '🌺', '🪷', '🌹', '🌷'];
  const cols = 4, cw = innerWidth / cols, rows = Math.ceil(innerHeight / cw) + 1;
  const lapis = [{ k: 'l0', u: 1.4, lewati: 0 }, { k: 'l1', u: 1.8, lewati: 0 }, { k: 'l2', u: 2.6, lewati: .5 }];
  lapis.forEach(L => {
    const wadah = document.createElement('div'); wadah.className = 'lapis ' + L.k;
    for (let r = 0; r < rows; r++) for (let c = 0; c <= cols; c++) {
      if (Math.random() < L.lewati) continue;
      const u = cw * L.u * (.85 + Math.random() * .3);
      const x = c * cw + (Math.random() - .5) * cw * .6, y = r * cw - cw / 2 + (Math.random() - .5) * cw * .6;
      const e = document.createElement('span');
      if (bungaOK.length) e.innerHTML = `<img src="${bungaOK[Math.random() * bungaOK.length | 0]}" alt="">`;
      else e.textContent = emoji[Math.random() * emoji.length | 0];
      e.style.cssText = `left:${x}px;top:${y}px;width:${u}px;height:${u}px;font-size:${u * .85}px;--dx:${(x - innerWidth / 2) * 1.6}px;--dy:${(y - innerHeight / 2) * 1.6}px;--d2:${(Math.random() * .7).toFixed(2)}s;--r:${Math.random() * 80 - 40}deg`;
      wadah.appendChild(e);
    }
    o.appendChild(wadah);
  });
  for (let i = 0; i < 28; i++) {
    const p = document.createElement('i'); p.className = 'kelopak';
    p.textContent = ['🌸', '🌸', '🪷'][Math.random() * 3 | 0];
    p.style.cssText = `left:${Math.random() * 100}%;font-size:${14 + Math.random() * 16}px;--sw:${(Math.random() - .5) * 160}px;animation-duration:${2 + Math.random()}s;animation-delay:${(Math.random() * .8).toFixed(2)}s`;
    o.appendChild(p);
  }
  document.body.appendChild(o);
  setTimeout(() => { tengah(); o.classList.add('buka'); }, 1500);
  setTimeout(() => o.remove(), 3800);
}
let kadoDibuka = false;
$('#gift').onclick = () => {
  if (kadoDibuka) return; kadoDibuka = true;
  bukaKunciAudio();
  transisiBunga(() => { go('puzzle'); mulaiPuzzle(); });
};

// ---------- puzzle foto ----------
const N = 3; let urut = [], pilih = -1, fotoSrc = null;
function kotakkan(src) {
  return new Promise(r => {
    const i = new Image();
    i.onload = () => {
      try {
        const s = Math.min(i.width, i.height), c = document.createElement('canvas');
        c.width = c.height = Math.min(s, 900);
        c.getContext('2d').drawImage(i, (i.width - s) / 2, (i.height - s) / 2, s, s, 0, 0, c.width, c.height);
        r(c.toDataURL('image/jpeg', .9));
      } catch (e) { r(src); }
    };
    i.onerror = () => r(null);
    i.src = src;
  });
}
async function mulaiPuzzle() {
  fotoSrc = await kotakkan(CONFIG.fotoPuzzle);
  $('#papan').style.backgroundImage = fotoSrc ? `url(${fotoSrc})` : 'none';
  $('#intip').style.display = fotoSrc ? '' : 'none';
  do { urut = [...Array(N * N).keys()].sort(() => Math.random() - .5); } while (urut.every((v, i) => v === i));
  pilih = -1; gambarPapan();
}
function gambarPapan() {
  const p = $('#papan'); p.innerHTML = '';
  urut.forEach((t, pos) => {
    const d = document.createElement('button');
    d.className = 'tile' + (pos === pilih ? ' pilih' : '');
    if (fotoSrc) {
      d.style.backgroundImage = `url(${fotoSrc})`;
      d.style.backgroundSize = `${N * 100}% ${N * 100}%`;
      d.style.backgroundPosition = `${(t % N) * 100 / (N - 1)}% ${Math.floor(t / N) * 100 / (N - 1)}%`;
    } else d.textContent = t + 1;
    d.onclick = () => tap(pos);
    p.appendChild(d);
  });
}
function tap(pos) {
  if (pilih < 0) pilih = pos;
  else { if (pilih !== pos) [urut[pilih], urut[pos]] = [urut[pos], urut[pilih]]; pilih = -1; }
  gambarPapan();
  if (urut.every((v, i) => v === i)) {
    $('#info').textContent = 'Berhasil! ♥';
    setTimeout(() => { fase('foto'); go('gate'); }, 1400);
  }
}
$('#intip').onclick = () => { const p = $('#papan'); p.classList.add('lihat'); setTimeout(() => p.classList.remove('lihat'), 1500); };

// ---------- kode rahasia ----------
async function sha256(t) {
  const b = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(t));
  return [...new Uint8Array(b)].map(x => x.toString(16).padStart(2, '0')).join('');
}
async function cekKode() {
  const input = $('#kode'), masuk = input.value.trim().toLowerCase();
  if (!masuk) return;
  let hash = '';
  try { hash = await sha256(masuk); } catch (e) { $('#pesanSalah').textContent = 'Buka lewat https atau localhost ya 🙏'; return; }
  if (hash === CONFIG.kodeHash) {
    $('#pesanSalah').textContent = ''; input.value = '';
    mulaiMusik();
    go('cerita'); tampil(0);
  } else {
    $('#pesanSalah').textContent = 'Kodenya belum tepat, coba lagi ya 💔';
    const k = $('.glass'); k.classList.remove('goyang'); void k.offsetWidth; k.classList.add('goyang');
    if (navigator.vibrate) navigator.vibrate(200);
    input.value = '';
  }
}
$('#btnBuka').onclick = cekKode;
$('#kode').onkeydown = e => { if (e.key === 'Enter') cekKode(); };

// ---------- cerita ----------
function tombol(t, f, c) { const b = document.createElement('button'); b.className = c; b.textContent = t; b.onclick = f; return b; }
function tampil(i) {
  const s = CONFIG.cerita[i], box = $('#cerita'), aksi = $('#cAksi');
  $('#cEmoji').textContent = s.emoji; $('#cTeks').textContent = s.teks; aksi.innerHTML = '';
  box.classList.remove('ganti'); void box.offsetWidth; box.classList.add('ganti');
  const berikut = () => { mulaiMusik(); i + 1 < CONFIG.cerita.length ? tampil(i + 1) : go('intro'); };
  if (s.pilihan) {
    let n = 0;
    const ya = tombol(s.pilihan[0], () => { ya.remove(); berikut(); }, 'btn');
    const tdk = tombol(s.pilihan[1], null, 'btn ghost');
    tdk.onclick = () => {
      n++;
      tdk.textContent = ['yakin? 🥺', 'beneran? 😢', 'ayolah 🥹'][n - 1] || '😭';
      if (n >= 4) { ya.classList.add('penuhYa'); ya.textContent = s.pilihan[0] + ' 💗'; document.body.appendChild(ya); }
      else ya.style.transform = `scale(${1 + n * .45})`;
    };
    aksi.append(ya, tdk);
  } else aksi.append(tombol(s.tombol, berikut, 'btn'));
}

// ---------- surat: efek mengetik ----------
let typing;
function ketik() {
  const el = $('#isiSurat'); el.textContent = ''; clearInterval(typing); let i = 0;
  typing = setInterval(() => {
    el.textContent += CONFIG.surat[i++] ?? '';
    el.scrollTop = el.scrollHeight;
    if (i >= CONFIG.surat.length) clearInterval(typing);
  }, 40);
}

// ---------- hati melayang ----------
setInterval(() => {
  const h = document.createElement('div'); h.className = 'heart';
  h.textContent = ['💖', '💕', '💗', '🌸', '✨'][Math.random() * 5 | 0];
  h.style.cssText = `left:${Math.random() * 100}vw;font-size:${14 + Math.random() * 18}px;animation-duration:${6 + Math.random() * 5}s`;
  $('#hearts').appendChild(h); setTimeout(() => h.remove(), 11000);
}, 700);

// ---------- kanvas: bintang & bola cahaya ----------
const cv = $('#bg'), ctx = cv.getContext('2d'); let W, H, bintang = [], bola = [];
function ukuran() {
  const d = Math.min(devicePixelRatio || 1, 2); W = innerWidth; H = innerHeight;
  cv.width = W * d; cv.height = H * d; ctx.setTransform(d, 0, 0, d, 0, 0);
  bintang = Array.from({ length: 70 }, () => ({ x: Math.random() * W, y: Math.random() * H, r: Math.random() * 1.6 + .4, p: Math.random() * 6.28, v: Math.random() * .03 + .01 }));
  bola = Array.from({ length: 14 }, () => ({ x: Math.random() * W, y: Math.random() * H, r: Math.random() * 50 + 25, vy: -(Math.random() * .3 + .1), vx: (Math.random() - .5) * .2, a: Math.random() * .12 + .05 }));
}
ukuran(); addEventListener('resize', ukuran);
(function gambar() {
  ctx.clearRect(0, 0, W, H);
  for (const b of bola) {
    b.x += b.vx; b.y += b.vy; if (b.y < -b.r) { b.y = H + b.r; b.x = Math.random() * W; }
    const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
    g.addColorStop(0, `rgba(232,160,187,${b.a})`); g.addColorStop(1, 'rgba(232,160,187,0)');
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(b.x, b.y, b.r, 0, 6.28); ctx.fill();
  }
  for (const s of bintang) {
    s.p += s.v; ctx.fillStyle = `rgba(255,241,245,${.3 + Math.abs(Math.sin(s.p)) * .7})`;
    ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, 6.28); ctx.fill();
  }
  requestAnimationFrame(gambar);
})();

// ---------- PEMBUKAAN: panah → hati meledak → Happy Birthday → pohon hati ----------
const tunda = ms => new Promise(r => setTimeout(r, ms));
async function pembukaan() {
  const st = $('#stage'), hati = $('#stHati'), pn = $('#stPanah');
  await tunda(1200);
  const bu = $('#stBusur'), s = st.getBoundingClientRect(), a = bu.getBoundingClientRect(), h = hati.getBoundingClientRect();
  const x0 = a.left - s.left + a.width * .75, y0 = a.top - s.top + a.height * .5;
  const x1 = h.left - s.left + h.width / 2, y1 = h.top - s.top + h.height / 2, L = 70;
  const r0 = Math.atan2(y1 - y0, x1 - x0);
  const taruh = (px, py, r) => { pn.style.transform = `translate(${px}px,${py}px) rotate(${r}rad)`; bu.style.transform = `rotate(${r}rad)`; };
  pn.style.opacity = 1; taruh(x0, y0, r0);
  $('#stCap').textContent = 'tarik busurnya lalu lepas, atau ketuk saja 💗';
  st.style.touchAction = 'none';
  let miss = 0, tarik = null, bebas = true;
  const cegah = e => e.preventDefault(); st.addEventListener('touchmove', cegah, { passive: false });
  await new Promise(done => {
    // (vx,vy) = arah tarikan; panah melesat ke arah berlawanan, seperti menarik busur
    const luncur = (vx, vy) => {
      bebas = false;
      const n = Math.hypot(vx, vy), ux = -vx / n, uy = -vy / n, px = x0 + vx, py = y0 + vy;
      const dx = x1 - px, dy = y1 - py;
      const cek = (sx, sy) => dx * sx + dy * sy > 0 && Math.abs(dx * sy - dy * sx) < 55 + miss * 35;   // makin sering meleset, makin mudah kena
      const kena = cek(ux, uy) || cek(-ux, -uy);   // ditarik menjauh ATAU digeser ke arah hati, dua-duanya kena
      pn.style.transition = 'transform .6s cubic-bezier(.4,0,.9,1),opacity .6s';
      if (kena) { const r = Math.atan2(dy, dx); taruh(x1 - L * Math.cos(r), y1 - L * Math.sin(r), r); setTimeout(done, 650); }
      else {
        taruh(px + ux * 1000, py + uy * 1000, Math.atan2(uy, ux)); pn.style.opacity = 0; miss++;
        $('#stCap').textContent = miss > 1 ? 'hampir! arahkan ke hatinya 💗' : 'meleset, coba lagi 💗';
        setTimeout(() => { pn.style.transition = 'none'; taruh(x0, y0, r0); void pn.offsetWidth; pn.style.opacity = 1; bebas = true; }, 800);
      }
    };
    st.onpointerdown = e => { if (!bebas) return; tarik = { v: null, x: e.clientX, y: e.clientY }; st.setPointerCapture(e.pointerId); pn.style.transition = 'none'; };
    st.onpointermove = e => {
      if (!tarik) return;
      let vx = e.clientX - tarik.x, vy = e.clientY - tarik.y; const n = Math.hypot(vx, vy);
      if (n > 90) { vx *= 90 / n; vy *= 90 / n; }
      if (n > 4) { tarik.v = [vx, vy]; taruh(x0 + vx, y0 + vy, Math.atan2(-vy, -vx)); }
    };
    st.onpointerup = st.onpointercancel = () => {
      if (!tarik) return; const v = tarik.v; tarik = null;
      if (v && Math.hypot(v[0], v[1]) > 25) luncur(v[0], v[1]);
      else { const n = Math.hypot(x1 - x0, y1 - y0); luncur(-(x1 - x0) / n * 50, -(y1 - y0) / n * 50); }   // cukup diketuk = panah lurus ke hati
    };
    setTimeout(() => {   // kalau 30 detik diam saja, panah dilepas otomatis
      if (!bebas || tarik) return; const n = Math.hypot(x1 - x0, y1 - y0); luncur(-(x1 - x0) / n * 50, -(y1 - y0) / n * 50);
    }, 12000);
  });
  st.onpointerdown = st.onpointermove = st.onpointerup = st.onpointercancel = null;
  st.removeEventListener('touchmove', cegah); st.style.touchAction = ''; bu.style.transform = '';
  // hati meledak
  hati.style.visibility = 'hidden';
  for (let i = 0; i < 28; i++) {
    const e = document.createElement('i'), t = Math.random() * 6.28, d = 70 + Math.random() * 110;
    e.className = 'ledak'; e.textContent = ['💗', '💖', '🩷', '✨'][i % 4];
    e.style.cssText = `left:${x1}px;top:${y1}px;--dx:${Math.cos(t) * d}px;--dy:${Math.sin(t) * d}px`;
    st.appendChild(e); setTimeout(() => e.remove(), 1300);
  }
  await tunda(500);
  $('#hbFlash').classList.add('on'); await tunda(2600); $('#hbFlash').classList.remove('on');
  [pn, $('#stBusur'), $('#stCap')].forEach(e => e.style.display = 'none'); hati.style.display = 'none';
  // pohon tumbuh
  const T = [['M150 395C148 330 152 270 150 215', 7], ['M150 250C120 220 95 190 70 150', 4], ['M150 250C180 220 205 190 230 150', 4], ['M150 225C140 190 120 150 110 100', 3.5],
    ['M150 225C160 190 180 150 190 100', 3.5], ['M150 215C150 170 150 120 150 70', 3.5], ['M110 190C90 170 70 150 55 120', 3], ['M190 190C210 170 230 150 245 120', 3]];
  $('#batang').innerHTML = T.map(([d, w], i) => `<path pathLength="1" d="${d}" stroke-width="${w}" style="--dl:${(i * .18).toFixed(2)}s"/>`).join('');
  const P = $('#stPohon'); P.hidden = false; void P.offsetWidth; P.classList.add('on', 'tumbuh');
  await tunda(2200);
  // daun hati mekar membentuk hati
  const K = $('#kanopi'), W = K.clientWidth, em = ['💗', '💖', '🩷', '🧡', '💛', '💗'];
  for (let i = 0; i < 140; i++) {
    const t = Math.random() * 6.28, q = Math.sqrt(Math.random()) * .96;
    const x = 16 * Math.sin(t) ** 3, y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
    const e = document.createElement('i'); e.className = 'kn'; e.textContent = em[i % em.length];
    e.style.cssText = `left:${50 + x * q * 2.9}%;top:${48 - y * q * 2.6}%;font-size:${W * (.065 + Math.random() * .04)}px;animation-delay:${(i * .018).toFixed(2)}s`;
    K.appendChild(e);
  }
  await tunda(3000);
  $('#stHB').hidden = false; $('#stTurun').hidden = false;
  $('#form').classList.remove('kunci');   // sekarang formulir di bawah bisa di-scroll
}

// ---------- UNIVERSE HATI (layar paling akhir) ----------
const UN = { tilt: .42, jalan: false, raf: 0, last: 0, t: 0, putar: 0, pts: null, item: null, hit: [], w: 0, h: 0, R: 0, cx: 0, cy: 0 };
// warna partikel: dari inti (putih-pink) ke tepi (magenta gelap); tiap warna punya 4 tingkat terang
const UN_WARNA = [[255, 236, 246], [255, 175, 218], [255, 100, 190], [225, 55, 165], [165, 30, 130]]
  .map(c => [.35, .6, .8, 1].map(a => `rgba(${c[0]},${c[1]},${c[2]},${a})`));
function hentiUni() { cancelAnimationFrame(UN.raf); UN.jalan = false; }
function bangunUni() {
  const n = UN.w < 600 ? 4500 : 9000, LENGAN = 3;
  UN.pts = Array.from({ length: n }, () => {
    const rn = .05 + Math.pow(Math.random(), 1.5) * .95;                       // lebih padat di tengah
    const sebar = (.1 + rn * .3) * (Math.random() + Math.random() - 1);        // makin ke tepi makin menyebar
    return { rn, a: ((Math.random() * LENGAN) | 0) * 6.283 / LENGAN + rn * 6.5 + sebar, s: .9 + Math.random() * 1.5,
      b: Math.min(4, rn * 5 | 0), q: .3 + Math.random() * .7, sp: .0042 / (.25 + rn) };   // bagian dalam berputar lebih cepat
  });
  // kata & foto disebar merata (sudut emas) supaya tidak menumpuk
  const kata = CONFIG.kataUniverse || [], foto = CONFIG.foto || [], semua = [];
  for (let i = 0; i < Math.max(kata.length, foto.length); i++) {
    if (foto[i]) { const im = new Image(); im.src = foto[i]; semua.push({ im, src: foto[i] }); }
    if (kata[i]) semua.push({ k: kata[i] });
  }
  UN.item = semua.map((o, j) => Object.assign(o, { a: j * 2.399, rn: .3 + ((j * .618) % 1) * .5, sp: .0013 }));
}
function ukurUni() {
  const c = $('#uCanvas'), d = Math.min(devicePixelRatio || 1, 2);
  UN.w = innerWidth; UN.h = innerHeight; c.width = UN.w * d; c.height = UN.h * d;
  c.getContext('2d').setTransform(d, 0, 0, d, 0, 0);
  UN.tilt = UN.w < UN.h ? .72 : .42;   // layar HP (tegak) → galaksi lebih "berdiri" supaya mengisi layar
  UN.cx = UN.w / 2; UN.cy = UN.h / 2; UN.R = Math.min(UN.w * .5, UN.h * .62);
  if (!UN.pts) bangunUni();
}
function frameUni(now) {
  if (!UN.jalan) return;
  UN.t += Math.min(3, (now - UN.last) / 16.7 || 1); UN.last = now;
  const { w, h, cx, cy, R } = UN, g = $('#uCanvas').getContext('2d'), fade = Math.min(1, UN.t / 120);
  g.globalCompositeOperation = 'source-over'; g.globalAlpha = 1; g.fillStyle = '#12030b'; g.fillRect(0, 0, w, h);
  // kabut cahaya
  g.save(); g.translate(cx, cy); g.scale(1, UN.tilt);
  const gl = g.createRadialGradient(0, 0, 0, 0, 0, R * .85);
  gl.addColorStop(0, 'rgba(255,90,170,.65)'); gl.addColorStop(.4, 'rgba(200,40,130,.3)'); gl.addColorStop(1, 'rgba(120,10,80,0)');
  g.globalAlpha = fade; g.fillStyle = gl; g.fillRect(-R, -R, R * 2, R * 2); g.restore();
  // partikel galaksi
  g.globalCompositeOperation = 'lighter'; g.globalAlpha = fade;
  for (const p of UN.pts) {
    const a = p.a + UN.t * p.sp + UN.putar, sn = Math.sin(a), dp = (sn + 1) / 2, r = p.rn * R, z = p.s * (.55 + dp * .7);
    g.fillStyle = UN_WARNA[p.b][Math.min(3, (dp * .6 + p.q * .4) * 4 | 0)];
    g.fillRect(cx + Math.cos(a) * r, cy + sn * r * UN.tilt, z, z);
  }
  // lubang hitam + cincin terang di pusat
  g.globalCompositeOperation = 'source-over'; g.globalAlpha = fade;
  g.save(); g.translate(cx, cy); g.scale(1, UN.tilt);
  const cg = g.createRadialGradient(0, 0, 0, 0, 0, R * .17);
  cg.addColorStop(0, 'rgba(12,0,7,1)'); cg.addColorStop(.52, 'rgba(12,0,7,1)'); cg.addColorStop(.72, 'rgba(255,205,232,.95)'); cg.addColorStop(1, 'rgba(255,70,170,0)');
  g.fillStyle = cg; g.beginPath(); g.arc(0, 0, R * .17, 0, 6.283); g.fill(); g.restore();
  // kata & foto yang mengorbit
  const L = UN.item.map(o => {
    const a = o.a + UN.t * o.sp + UN.putar, r = o.rn * R, sn = Math.sin(a);
    return { o, x: cx + Math.cos(a) * r, y: cy + sn * r * UN.tilt - 8 + Math.sin(UN.t * .03 + o.a * 3) * 5, dp: (sn + 1) / 2 };
  }).sort((p, q) => p.dp - q.dp);
  const B = Math.max(38, Math.min(74, R * .15)); UN.hit = [];
  g.textAlign = 'center'; g.textBaseline = 'middle';
  for (const { o, x, y, dp } of L) {
    const sc = .7 + dp * .45; g.globalAlpha = fade * (.55 + dp * .45);
    if (o.k) {
      g.font = `bold ${Math.max(10, R * .04) * sc}px 'Playfair Display',serif`; g.shadowColor = '#ff4fa0'; g.shadowBlur = 12;
      g.fillStyle = '#ffe3f0'; g.fillText(o.k, x, y); g.shadowBlur = 0;
    } else if (o.im.complete && o.im.naturalWidth) {
      const S = B * sc, m = Math.min(o.im.naturalWidth, o.im.naturalHeight);
      g.save(); g.shadowColor = '#ff4fa0'; g.shadowBlur = 16; g.fillStyle = '#fff'; g.beginPath();
      (g.roundRect || g.rect).call(g, x - S / 2 - 3, y - S / 2 - 3, S + 6, S + 6, 9); g.fill(); g.shadowBlur = 0; g.clip();
      g.drawImage(o.im, (o.im.naturalWidth - m) / 2, (o.im.naturalHeight - m) / 2, m, m, x - S / 2, y - S / 2, S, S); g.restore();
      UN.hit.push({ x, y, S, src: o.src });
    }
  }
  g.globalAlpha = 1;
  UN.raf = requestAnimationFrame(frameUni);
}
function mulaiUni() {
  if (UN.jalan) return; UN.jalan = true; UN.t = 0; UN.last = performance.now();
  ukurUni(); UN.raf = requestAnimationFrame(frameUni);
}
$('#btnUni').onclick = () => { $('#uGate').hidden = true; mulaiUni(); };
addEventListener('resize', () => { if (UN.jalan) ukurUni(); });
// geser untuk memutar galaksi, ketuk foto untuk memperbesar
let seretUni = null;
const uc = $('#uCanvas');
uc.onpointerdown = e => { seretUni = { x: e.clientX, y: e.clientY, a: UN.putar, geser: false }; uc.setPointerCapture(e.pointerId); };
uc.onpointermove = e => {
  if (!seretUni) return; const dx = e.clientX - seretUni.x;
  if (Math.abs(dx) > 6) seretUni.geser = true;
  if (seretUni.geser) UN.putar = seretUni.a + dx * .006;
};
uc.onpointerup = e => {
  const s = seretUni; seretUni = null; if (!s || s.geser) return;
  for (let i = UN.hit.length - 1; i >= 0; i--) {
    const q = UN.hit[i];
    if (Math.abs(e.clientX - q.x) < q.S / 2 + 4 && Math.abs(e.clientY - q.y) < q.S / 2 + 4) { $('#lb img').src = q.src; $('#lb').classList.add('on'); return; }
  }
};
uc.onpointercancel = () => { seretUni = null; };

// ---------- mulai ----------
if (sudah) go('gift'); else pembukaan();

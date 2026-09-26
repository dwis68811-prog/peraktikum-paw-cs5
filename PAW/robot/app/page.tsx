"use client";

import { useState } from "react";

const constellations = [
  { name: "Orion", short: "OR", season: "Musim terbaik: Desember - Maret", direction: "Timur", time: "21:40", visibility: 96, color: "gold" },
  { name: "Scorpius", short: "SC", season: "Musim terbaik: Juni - Agustus", direction: "Tenggara", time: "22:15", visibility: 78, color: "coral" },
  { name: "Crux", short: "CR", season: "Musim terbaik: April - Juni", direction: "Selatan", time: "20:50", visibility: 65, color: "blue" },
];

export default function Home() {
  const [location, setLocation] = useState("Jakarta, Indonesia");
  const [date, setDate] = useState("2026-09-25");
  const [time, setTime] = useState("21:00");
  const [selected, setSelected] = useState(0);
  const [checked, setChecked] = useState(false);
  const constellation = constellations[selected];

  return (
    <div className="app-shell sky-shell">
      <aside className="sidebar sky-sidebar">
        <div className="brand-mark"><span>✦</span><strong>Langitku</strong></div>
        <div className="workspace-label">PENGAMATAN</div>
        <nav className="nav-list" aria-label="Navigasi pengamatan">
          <a className="nav-item active" href="#cek"><span className="nav-icon">✧</span> Cek langit</a>
          <a className="nav-item" href="#konstelasi"><span className="nav-icon">✦</span> Konstelasi</a>
          <a className="nav-item" href="#catatan"><span className="nav-icon">◷</span> Catatan saya</a>
        </nav>
        <div className="sidebar-bottom"><div className="tip-card"><span className="tip-icon">☾</span><div><strong>Langit malam ini</strong><p>Udara cerah. Waktu yang baik untuk mengamati bintang.</p></div></div><div className="profile"><div className="avatar">AM</div><div><strong>Alex Morgan</strong><span>Akun pengamat</span></div><span className="more">•••</span></div></div>
      </aside>

      <main className="main-content sky-main" id="cek">
        <header className="topbar"><div className="breadcrumb">Pengamatan <span>/</span> <strong>Cek langit</strong></div><button className="help-button" aria-label="Bantuan">?</button></header>
        <section className="intro sky-intro"><div><p className="eyebrow">PANDUAN LANGIT MALAM</p><h1>Temukan cerita<br /><em>di atas sana.</em></h1><p className="intro-copy">Pilih waktu dan lokasi pengamatanmu. Kami akan membantu menemukan konstelasi yang sedang terlihat.</p></div><div className="moon-mark">☾<span>✦</span></div></section>

        <section className="sky-check-panel panel">
          <div className="panel-heading"><div><span className="step-label">01 / PENGATURAN</span><h2>Kapan kamu mengamati?</h2></div><span className="format-badge">Waktu lokal</span></div>
          <div className="field-grid"><label>Lokasi<input value={location} onChange={(event) => setLocation(event.target.value)} placeholder="Kota atau lokasi" /></label><label>Tanggal<input type="date" value={date} onChange={(event) => setDate(event.target.value)} /></label><label>Waktu<input type="time" value={time} onChange={(event) => setTime(event.target.value)} /></label></div>
          <button className="analyze-button" onClick={() => setChecked(true)}>Cek langit sekarang <span>→</span></button>
        </section>

        <section className="constellation-section" id="konstelasi"><div className="section-heading"><div><span className="step-label">02 / KONSTELASI</span><h2>Apa yang terlihat?</h2></div><span className="checked-label">{checked ? "✓ Diperbarui sekarang" : "Rekomendasi malam ini"}</span></div><div className="constellation-grid">{constellations.map((item, index) => <button key={item.name} className={`constellation-card ${index === selected ? "selected" : ""}`} onClick={() => { setSelected(index); setChecked(false); }}><div className={`star-symbol ${item.color}`}>{item.short}</div><div className="constellation-info"><strong>{item.name}</strong><span>{item.season}</span><small><i /> {item.visibility}% terlihat</small></div><span className="arrow">↗</span></button>)}</div></section>

        <section className="visibility-panel panel" id="catatan"><div className="visibility-top"><div><span className="step-label">03 / HASIL PENGECEKAN</span><h2>{constellation.name} di {location || "lokasimu"}</h2><p className="result-copy">Pada {date || "tanggal pilihanmu"} pukul {time || "waktu pilihanmu"}, konstelasi ini <strong>kemungkinan besar terlihat.</strong></p></div><div className="visibility-score"><strong>{constellation.visibility}%</strong><span>VISIBILITAS</span></div></div><div className="visibility-details"><div><span>Arah</span><strong>{constellation.direction}</strong></div><div><span>Waktu terbaik</span><strong>{constellation.time} - 23:30</strong></div><div><span>Kondisi langit</span><strong className="clear"><i /> Cerah</strong></div></div><div className="star-map"><div className="map-label">PETA LANGIT <span>menghadap {constellation.direction.toLowerCase()}</span></div><div className="map-stars"><b className="s1">✦</b><b className="s2">·</b><b className="s3">✦</b><b className="s4">·</b><b className="s5">✦</b><b className="s6">·</b><b className="s7">✦</b><span className="constellation-line line-one" /><span className="constellation-line line-two" /><span className="map-orion">{constellation.name}</span></div></div></section>
        <footer>Langitku memberi panduan berdasarkan data waktu dan lokasi. Awan dan polusi cahaya dapat memengaruhi pengamatan.</footer>
      </main>
    </div>
  );
}

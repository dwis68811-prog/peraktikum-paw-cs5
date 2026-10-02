import Link from "next/link";

export default function Beranda() {
  return (
    <>
      <a href="#konten" className="sr-only focus:not-sr-only focus:p-2">
        Lewati ke konten utama
      </a>
      <header className="border-b">
        <nav aria-label="Navigasi utama">
          <Link href="/">NamaProduk</Link>
          <ul>
            <li><a href="#fitur">Fitur</a></li>
            <li><a href="#kontak">Kontak</a></li>
          </ul>
        </nav>
      </header>
      <main id="konten">
        <section aria-labelledby="judul-utama">
          <h1 id="judul-utama">Kalimat nilai utama produk</h1>
          <p>Penjelasan singkat permasalahan dan solusi produk.</p>
        </section>
        <section id="fitur" aria-labelledby="judul-fitur">
          <h2 id="judul-fitur">Fitur Utama</h2>
        </section>
        <section id="kontak" aria-labelledby="judul-kontak">
          <h2 id="judul-kontak">Hubungi Kami</h2>
        </section>
      </main>
      <footer className="border-t">
        <p>© 2026 Nama Produk</p>
      </footer>
    </>
  );
}
import Link from "next/link";

const fitur = [
  { judul: "Fitur pertama", deskripsi: "Manfaat fitur bagi pengguna." },
  { judul: "Fitur kedua", deskripsi: "Manfaat fitur bagi pengguna." },
  { judul: "Fitur ketiga", deskripsi: "Manfaat fitur bagi pengguna." },
];

export default function Beranda() {
  return (
    <>
      <a href="#konten" className="sr-only focus:not-sr-only focus:p-2">
        Lewati ke konten utama
      </a>
      <header className="border-b">
        <nav
          aria-label="Navigasi utama"
          className="mx-auto flex max-w-6xl items-center justify-between p-4"
        >
          <Link href="/">NamaProduk</Link>
          <ul>
            <li>
              <a href="#fitur">Fitur</a>
            </li>
            <li>
              <a href="#kontak">Kontak</a>
            </li>
          </ul>
        </nav>
      </header>
      <main id="konten" className="mx-auto max-w-6xl p-4">
        <section aria-labelledby="judul-utama">
          <h1 id="judul-utama">Kalimat nilai utama produk</h1>
          <p>Penjelasan singkat permasalahan dan solusi produk.</p>
        </section>
        <section id="fitur" aria-labelledby="judul-fitur">
          <h2 id="judul-fitur">Fitur Utama</h2>
          <ul className="mt-6 grid grid-cols-3 gap-6">
            {fitur.map((f) => (
              <li key={f.judul}>
                <article className="h-full rounded-lg border p-6">
                  <h3 className="text-lg font-semibold">{f.judul}</h3>
                  <p className="mt-2 text-gray-700">{f.deskripsi}</p>
                </article>
              </li>
            ))}
          </ul>
        </section>
        <section id="kontak" aria-labelledby="judul-kontak">
          <h2 id="judul-kontak">Hubungi Kami</h2>
          {/* formulir ditambahkan pada Bagian 4 */}
        </section>
        <div className="grid gap-8 grid-cols-[2fr_1fr]">
          <section aria-labelledby="judul-cara">
            <h2 id="judul-cara">Cara Kerja</h2>
            ...
          </section>
          <aside
            aria-label="Informasi tambahan"
            className="rounded-lg bg-gray-100 p-6"
          >
            ...
          </aside>
        </div>
      </main>
      <footer className="border-t">
        <p>© 2026 Nama Produk</p>
      </footer>
    </>
  );
}
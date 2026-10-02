import Link from "next/link";

const kolom =
  "rounded border border-gray-300 px-3 py-2 " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700";

const konstelasi = [
  { nama: "Orion", keterangan: "Memiliki tiga bintang tengah yang sangat mudah dikenali." },
  { nama: "Scorpius", keterangan: "Terlihat jelas di langit malam dengan ekor yang melengkung." },
  { nama: "Cassiopeia", keterangan: "Bentuknya seperti huruf W, cocok untuk pengamatan musim dingin." },
];

export default function Beranda() {
  return (
    <>
      <a href="#konten" className="sr-only focus:not-sr-only focus:p-2 focus:bg-blue-700 focus:text-white">
        Lewati ke konten utama
      </a>

      <header className="border-b bg-white">
        <nav
          aria-label="Navigasi utama"
          className="mx-auto flex max-w-6xl flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <Link href="/" className="text-lg font-bold">
            Langitku
          </Link>
          <ul className="flex flex-col gap-2 sm:flex-row sm:gap-6">
            <li>
              <a href="#pengamatan" className="hover:text-blue-700">
                Cek Langit
              </a>
            </li>
            <li>
              <a href="#konstelasi" className="hover:text-blue-700">
                Konstelasi
              </a>
            </li>
            <li>
              <a href="#catatan" className="hover:text-blue-700">
                Catatan saya
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main id="konten" className="mx-auto max-w-6xl space-y-12 p-4 sm:p-6">
        <section aria-labelledby="judul-utama" className="space-y-3 py-8">
          <h1 id="judul-utama" className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Temukan cerita <span className="italic font-normal">di atas sana.</span>
          </h1>
          <p className="max-w-2xl text-base text-gray-700 sm:text-lg">
            Pilih waktu dan lokasi pengamatanmu. Kami akan membantu menemukan konstelasi yang sedang terlihat.
          </p>
        </section>

        <section
          id="pengamatan"
          aria-labelledby="judul-pengaturan"
          className="space-y-6 rounded-xl border bg-white p-6 shadow-sm"
        >
          <h2 id="judul-pengaturan" className="text-lg font-bold text-gray-800">
            01 / PENGATURAN
          </h2>
          <h3 className="text-xl font-semibold">Kapan kamu mengamati?</h3>

          <form
            className="grid gap-6 sm:grid-cols-3"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="flex flex-col gap-1">
              <label htmlFor="lokasi" className="text-sm font-medium text-gray-700">
                Lokasi
              </label>
              <input
                id="lokasi"
                name="lokasi"
                type="text"
                defaultValue="Jakarta, Indonesia"
                className={kolom}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="tanggal" className="text-sm font-medium text-gray-700">
                Tanggal
              </label>
              <input
                id="tanggal"
                name="tanggal"
                type="date"
                defaultValue="2026-09-25"
                className={kolom}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="waktu" className="text-sm font-medium text-gray-700">
                Waktu
              </label>
              <input
                id="waktu"
                name="waktu"
                type="time"
                defaultValue="21:00"
                className={kolom}
              />
            </div>

            <div className="sm:col-span-3">
              <button
                type="submit"
                className={
                  kolom +
                  " w-full bg-[#2E6F5E] py-3 font-semibold text-white transition-colors hover:bg-[#235849]"
                }
              >
                Cek langit sekarang
              </button>
            </div>
          </form>
        </section>

        <section id="konstelasi" aria-labelledby="judul-konstelasi" className="space-y-4">
          <h2 id="judul-konstelasi" className="text-lg font-bold text-gray-800">
            02 / KONSTELASI
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {konstelasi.map((item) => (
              <article key={item.nama} className="rounded-xl border bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">{item.nama}</h3>
                <p className="mt-2 text-sm text-gray-600">{item.keterangan}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="catatan" aria-labelledby="judul-catatan" className="rounded-xl border bg-slate-50 p-6">
          <h2 id="judul-catatan" className="text-lg font-bold text-gray-800">
            03 / CATATAN SAYA
          </h2>
          <p className="mt-3 max-w-2xl text-gray-700">
            Cuaca cerah, kondisi langit cukup stabil, dan paling cocok untuk pengamatan saat malam mulai
            tenang. Jangan lupa membawa jaket hangat dan catatan kecil untuk mencatat posisi benda langit.
          </p>
        </section>
      </main>

      <footer className="mt-12 border-t py-6 text-center text-sm text-gray-600">
        <p>© 2026 Langitku</p>
      </footer>
    </>
  );
}
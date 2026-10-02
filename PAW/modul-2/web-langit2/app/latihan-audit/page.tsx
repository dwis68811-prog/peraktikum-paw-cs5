import Link from "next/link";

const daftarAudit = [
  { judul: "Tujuan Produk", isi: "Menjelaskan alasan produk dibuat dan manfaatnya bagi audiens." },
  { judul: "Target Pengguna", isi: "Mengidentifikasi siapa yang paling membutuhkan produk ini." },
  { judul: "Alur Penggunaan", isi: "Membantu pengguna memahami cara memakai produk dengan mudah." },
  { judul: "Evaluasi UX", isi: "Menilai pengalaman pengguna dari sisi kemudahan, kejelasan, dan keterbacaan." },
];

export default function LatihanAuditPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <Link href="/" className="inline-block text-sm font-medium text-gray-700 hover:text-blue-700">
        ← Kembali ke beranda
      </Link>

      <header className="mt-6 space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
          Latihan Audit
        </p>
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Audit Produk dan Pengalaman Pengguna
        </h1>
        <p className="max-w-2xl text-base text-gray-600">
          Halaman ini dibuat untuk menampung latihan audit agar route /latihan-audit dapat diakses tanpa mengubah struktur utama proyek.
        </p>
      </header>

      <section className="mt-10 grid gap-5 md:grid-cols-2">
        {daftarAudit.map((item) => (
          <article key={item.judul} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900">{item.judul}</h2>
            <p className="mt-3 text-sm leading-6 text-gray-600">{item.isi}</p>
          </article>
        ))}
      </section>
    </main>
  );
}

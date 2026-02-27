import { useState, useEffect } from "react";
import { createClient } from "contentful";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faSprayCan,
  faLeaf,
  faClock,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const client = createClient({
  space: "apZugth21Bp",
  accessToken: "ef6bAwUgZKzv85CX5Mqkekb@YZUYIlteuRwEnibg",
});

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .getEntries({ content_type: "parfumes" })
      .then((response) => {
        const items = response.items.map((item) => ({
          id: item.sys.id,
          name: item.fields.name,
          description: item.fields.description,
          price: item.fields.price,
          category: item.fields.category,
          image: item.fields.image?.fields?.file?.url,
          featured: item.fields.featured,
        }));
        setProducts(items);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const waLink = (text) =>
    `https://wa.me/6285772281309?text=${encodeURIComponent(text)}`;

  return (
    <div className="bg-background text-gray-800">
      {/* Navbar */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">Ren Parfume</h1>
          <a
            href={waLink("Halo, saya tertarik dengan produk Ren Parfume")}
            className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
            Hubungi Kami
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
            Wangi Bukan Sekadar Aroma,
            <br />
            Ini Identitas Anda
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Ren Parfume hadir dengan koleksi eksklusif yang mencerminkan
            kepribadian Anda. Setiap tetes adalah pernyataan, setiap aroma
            adalah cerita.
          </p>
          <a
            href={waLink(
              "Halo, saya ingin konsultasi parfum yang cocok untuk saya",
            )}
            className="inline-block bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-dark transition shadow-lg"
          >
            Temukan Wangi Anda
          </a>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-4xl font-bold text-center text-primary mb-16">
            Kenapa Ren Parfume Berbeda?
          </h3>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon
                  icon={faLeaf}
                  className="text-3xl text-accent"
                />
              </div>
              <h4 className="text-xl font-bold mb-3">
                100% Natural Ingredients
              </h4>
              <p className="text-gray-600">
                Dibuat dari bahan alami pilihan tanpa campuran kimia berbahaya.
                Aman untuk kulit sensitif sekalipun.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon
                  icon={faClock}
                  className="text-3xl text-accent"
                />
              </div>
              <h4 className="text-xl font-bold mb-3">Long-Lasting Scent</h4>
              <p className="text-gray-600">
                Ketahanan wangi hingga 12 jam. Sekali semprot, aroma tetap
                melekat sepanjang hari.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon
                  icon={faSprayCan}
                  className="text-3xl text-accent"
                />
              </div>
              <h4 className="text-xl font-bold mb-3">Exclusive Collection</h4>
              <p className="text-gray-600">
                Koleksi terbatas dengan aroma signature yang tidak akan Anda
                temukan di tempat lain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product List */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-4xl font-bold text-center text-primary mb-4">
            Koleksi Eksklusif Kami
          </h3>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Setiap parfum dirancang untuk momen spesial Anda. Pilih yang paling
            mewakili karakter Anda.
          </p>

          {loading ? (
            <div className="text-center text-gray-500">Memuat produk...</div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
                >
                  {product.image && (
                    <img
                      src={`https:${product.image}`}
                      alt={product.name}
                      className="w-full h-64 object-cover"
                    />
                  )}
                  <div className="p-6">
                    {product.featured && (
                      <span className="inline-block bg-accent text-white text-xs px-3 py-1 rounded-full mb-2">
                        Featured
                      </span>
                    )}
                    <h4 className="text-xl font-bold mb-2">{product.name}</h4>
                    <p className="text-sm text-gray-500 mb-3">
                      {product.category}
                    </p>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-primary">
                        Rp {product.price?.toLocaleString("id-ID")}
                      </span>
                      <a
                        href={waLink(`Halo, saya ingin order ${product.name}`)}
                        className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-dark transition text-sm"
                      >
                        Pesan Sekarang
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-4xl font-bold text-center text-primary mb-16">
            Apa Kata Mereka?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah M.",
                text: "Wanginya tahan seharian! Banyak yang nanya pakai parfum apa. Worth it banget!",
                rating: 5,
              },
              {
                name: "Dimas R.",
                text: "Packaging premium, wangi maskulin tapi nggak nyengat. Cocok buat daily use.",
                rating: 5,
              },
              {
                name: "Alya K.",
                text: "Jatuh cinta sama koleksi floral-nya. Aromanya soft tapi tetap memorable.",
                rating: 5,
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-background p-6 rounded-lg">
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FontAwesomeIcon
                      key={i}
                      icon={faStar}
                      className="text-accent"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <p className="font-bold text-primary">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-2xl font-bold mb-4">Ren Parfume</h4>
              <p className="text-white/80">
                Wangi yang menceritakan siapa Anda. Koleksi eksklusif untuk
                kepribadian unik Anda.
              </p>
            </div>
            <div>
              <h5 className="font-bold mb-4">Kontak</h5>
              <p className="text-white/80 mb-2">
                <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
                +62 857-7228-1309
              </p>
              <p className="text-white/80">
                <FontAwesomeIcon icon={faInstagram} className="mr-2" />
                @renparfume
              </p>
            </div>
            <div>
              <h5 className="font-bold mb-4">Siap Menemukan Wangi Anda?</h5>
              <a
                href={waLink(
                  "Halo, saya ingin tahu lebih lanjut tentang Ren Parfume",
                )}
                className="inline-block bg-white text-primary px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
              >
                Chat Sekarang
              </a>
            </div>
          </div>
          <div className="border-t border-white/20 pt-6 text-center text-white/60">
            <p>&copy; 2026 Ren Parfume. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

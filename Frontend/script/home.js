const getRow = document.getElementById("row");
const next = document.getElementById("button-next");
const prev = document.getElementById("button-prev");

let skip = 0;
let limit = 4;
let total;

function removeAllProducts() {
  while (getRow.firstChild) {
    getRow.removeChild(getRow.firstChild);
  }
}

function getAllDataProducts() {
  const product = [
    {
      id:1,
      name:"Anggur Hujau",
      price:"28.000",
      stock:"76",
      description: "Anggur hijau adalah sumber nutrisi yang kaya. Buah ini mengandung vitamin, mineral, dan senyawa bioaktif yang memberikan manfaat luar biasa bagi tubuh.",
      image: "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2021/11/03055031/Kenali-X-Manfaat-Buah-Anggur-Hijau-bagi-Tubuh-01-1.jpg.webp"
  },
  {
      id:2,
      name:"Anggur Merah",
      price:"25.000",
      stock:"57",
      description: "Anggur merah telah dikenal sebagai salah satu jenis buah yang kaya akan antioksidan alami. Kandungan antioksidan ini memberikan banyak manfaat positif bagi kesehatan tubuh.",
      image: "https://umsu.ac.id/health/wp-content/uploads/2023/08/Anggur-Merah-Kandungan-dan-Manfaat-Untuk-Kesehatan-Tubuh-750x375.jpg"
  },
  {
      id:3,
      name:"Mangga Harum Manis",
      price:"25.000",
      stock:"187",
      description:"Buah mangga harum manis mengandung banyaknya kandungan sehat di dalamnya seperti kalsium, fosfor, vitamin C, vitamin C, vitamin B, energi, seng, gula, beta- karoten, protein, lemak, karbohidrat, serta kandungan sehat lainnya.",
      image:"https://asset-2.tstatic.net/manado/foto/bank/images/ilustrasi-mangga-3_20180927_165118.jpg",
  },
  {
      id:4,
      name:"Durian Montong",
      price:"85.000",
      stock:"39",
      description:"Buah durian mengandung banyak gizi yang cukup lengkap, diantaranya vitamin B, vitamin C, karbohidrat, protein, lemak tak jenuh, magnesium, fosfor, kalium, thiamin, polyfenhol, omega 3 dan omega 6, dan antioksidan.",
      image:"https://kampoengilmu.com/wp-content/uploads/2016/03/Manfaat-Buah-Durian-768x512.jpg",
  },
  {
      id:5,
      name:"Naga Putih",
      price:"30.000",
      stock:"80",
      description:"Buah naga putih, dengan kulit putih atau kuning pucat, kaya akan vitamin C, serat, dan antioksidan. Konsumsinya dapat mendukung sistem kekebalan tubuh, kesehatan pencernaan, dan melindungi sel-sel tubuh dari kerusakan oksidatif. Dengan rendah kalori dan lemak, buah naga putih juga merupakan pilihan camilan sehat yang mendukung kesehatan jantung dan kulit. Fitokimia dalam buah ini memberikan manfaat tambahan, menjadikannya pilihan yang baik untuk mendukung pola makan seimbang dan gaya hidup sehat.",
      image:"https://res.cloudinary.com/dk0z4ums3/image/upload/v1616414946/attached_image/temukan-manfaat-buah-naga-yang-sarat-nutrisi-0-alodokter.jpg",
  },
  {
      id:6,
      name:"Naga Merah",
      price:"35.000",
      stock:"56",
      description:"Buah naga merah dinilai memiliki kandungan antioksidan yang lebih tinggi. Hal ini dapat dilihat berdasarkan warna merah pada buah naga, yang secara alami berasal dari senyawa antioksidan bernama antosianin. ",
      image:"https://res.cloudinary.com/dk0z4ums3/image/upload/v1592902250/attached_image/kandungan-buah-naga-merah-dan-manfaatnya-untuk-tubuh-0-alodokter.jpg",
  },
  {
      id:7,
      name:"Bengkuang",
      price:"22.000",
      stock:"143",
      description:"Buah bengkuang mengandung vitamin B, vitamin C, zat besi, kalsium, lemak, dan karbohidrat. Buah bengkoang baik untuk kulit karena itu sering dijadikan sebagai bahan utama untuk perwatan kecantikan.",
      image:"https://kampoengilmu.com/wp-content/uploads/2016/03/Manfaat-Buah-Bengkuang.jpg",
  },
  {
      id:8,
      name:"Alpukat",
      price:"23.000",
      stock:"127",
      description:"Buah alpukat mengandung lemak sehat oleat (omega-9), vitamin A, vitamin B, vitamin B6, vitamin C, vitamin E, zat besi, tembaga, kalium, serat, dan asam solfat. Buah alpukat kaya akan manfaat dan dapat melindungi tubuh dari berbagai penyakit.",
      image:"https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2022/01/10053526/Ini-Manfaat-Buah-Alpukat-untuk-Kesehatan-01.jpg.webp",
  },
  {
      id:9,
      name:"Belimbing",
      price:"25.000",
      stock:"145",
      description:"Buah belimbing mengandung vitamin A, vitamin C, vitamin E, vitamin K, folat, niacin, fosfor, zat besi, kalori, protein, lemak, karbohisrat, serat dan juga kalsium. Buah belimbing bersifat antioksidan dan juga seratnya berguna bagi kesehatan pembuluh darah.",
      image:"https://kampoengilmu.com/wp-content/uploads/2016/03/Manfaat-Buah-Belimbing-768x482.jpg",
  },
  {
      id:10,
      name:"Apel Merah",
      price:"25.000",
      stock:"167",
      description:"Apel Merah mempunyai kulit berwarna merah pekat dengan garis-garis tipis berwarna hitam. Rasanya cenderung manis dan mempunyai tekstur yang renyah. ",
      image:"https://www.astronauts.id/blog/wp-content/uploads/2022/12/Kenali-Jenis-jenis-Buah-Apel-dan-Manfaatnya-1024x683.jpg",
  },
  {
      id:11,
      name:"Jeruk",
      price:"20.000",
      stock:"180",
      description:"Buah jeruk kaya akan vitamin C, selain itu juga terdapat kandungan bermanfaat lainnya seperti folat, vitamin A, vitamin B1, antioksidan flavanoid, beta karoten, beta cryptoxanthin, zeaxanthin, dan lutein.",
      image:"https://kampoengilmu.com/wp-content/uploads/2016/03/Manfaat-Buah-Jeruk-768x480.jpg",
  },
  {
      id:12,
      name:"Kiwi",
      price:"43.000",
      stock:"120",
      description:"Buah kiwi kaya akan vitamin c, serta ada juga vitamin A, vitamin B kompleks, vitamin E, vitamin K, serat pangan yang baik, beta-karoten, lutein, zeaxanthin, folat, riboflavin, niacin, dan tiamin.",
      image:"https://kampoengilmu.com/wp-content/uploads/2016/03/Manfaat-Buah-Kiwi-768x518.jpg",
  },
  {
      id:13,
      name:"Manggis",
      price:"25.000",
      stock:"133",
      description:"Buah manggis banyak mengandung berbagai nutrisi, diantaranya vitamin A, vitamin B kompleks, vitamin C, xhanthones, alpha mangostin, gamma-mangostin, garcinone E, catechin, polisakarida, kuonin, stilbene, polifenol, zat besi, kalsium, magnesium, dan potassium.",
      image:"https://kampoengilmu.com/wp-content/uploads/2016/03/Manfaat-Buah-Manggis-768x510.jpg",
  },
  {
      id:14,
      name:"Melon",
      price:"30.000",
      stock:"30",
      description:"Buah melon mengandung vitamin A, vitamin C, karbohidrat, protein, lemak, dan potassium. Buah melon memiliki kandungan air yang cukup banyak seperti halnya buah semangka.",
      image:"https://kampoengilmu.com/wp-content/uploads/2016/03/Manfaat-Buah-Melon-768x512.jpg",
  },
  {
      id:15,
      name:"Pir",
      price:"28.000",
      stock:"196",
      description:"Buah pir mengandung mineral, vitamin C, vitamin K, vitamin B9, kalium, serat, tembaga, mangan, magnesium, dan juga vitamin B kompleks.",
      image:"https://api-lotte.hollacode.com/api/static/inspirasi/1686732484411-manfaat-buah-pir.png",
  },
  {
      id:16,
      name:"Leci",
      price:"34.000",
      stock:"179",
      description:"Buah leci kaya akan vitamin C, energi, karbohidrat, gula, protein, lemak, kalium, sikrosa, dan glukosa. Buah leci mengandung banyak nutrisi dan vitamin yang membantu melawan berbagai penyakit.",
      image:"https://kampoengilmu.com/wp-content/uploads/2016/03/Manfaat-Buah-Leci-768x471.jpg",
  },
  ];

  total = product.length;

  removeAllProducts(); 

  const getdata = product
  .slice(skip, skip + limit) 
  .map((product) => {
    const card = document.createElement("div");
    card.classList.add("col-md-3");
    card.innerHTML = `
      <div class="card">
        <a href="detail-product.html?id=${product.id}">
          <img src="${product.image}" class="card-img-top" id="img" alt="Product Image">
        </a>
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <h6 class="card-text">Rp. ${product.price}</h6>
          <h6 class="card-text">Stock : ${product.stock}</h6>
        </div>
      </div>
    `;

    getRow.appendChild(card);
  });
  return getdata;
}

next.addEventListener("click", () => {
  if (skip + limit < total) {
    skip += limit;
    getAllDataProducts();
  }
});

prev.addEventListener("click", () => {
  if (skip >= limit) {
    skip -= limit;
    getAllDataProducts();
  }
});

getAllDataProducts();


const cardImages = document.querySelectorAll(".img");
    cardImages.forEach((img, index) => {
      img.addEventListener('click', () => {
        // Redirect ke halaman baru dengan deskripsi produk
        window.location.href = `detail-product.html?id=${product[index].id}`;
      });
});


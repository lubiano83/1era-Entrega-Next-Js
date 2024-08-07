const mockData = [

    {
        id: 1,
        img: "https://firebasestorage.googleapis.com/v0/b/next-js-459e0.appspot.com/o/image%2Fhankook-K715.webp?alt=media&token=da0f9659-8a2a-48ba-841d-49bee0634653",
        category: "Neumaticos",
        brand: "Hankook",
        model: "155-65-R13",
        description: "K715 Optimo",
        quantity: 4,
        price: 59890,
        detail: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis aliquam dolorum voluptatem dicta incidunt similique blanditiis ducimus, possimus neque facilis totam corporis illo ipsum dolor odio nobis fugiat modi! Dolores. Atque magni quia rem optio id incidunt culpa voluptatibus. Ipsa, tenetur assumenda officiis sequi voluptas corporis quas obcaecati magni explicabo, earum illo in laborum, repellendus eos sit? Libero, et qui"
      },
      {
        id: 2,
        img: "https://firebasestorage.googleapis.com/v0/b/next-js-459e0.appspot.com/o/image%2Fhankook-MF54321.webp?alt=media&token=76f3f706-e708-493f-a35b-ebc335cb9d1b",
        category: "Baterias",
        brand: "Hankook",
        model: "MF54321",
        description: "45AH, 450CCA.",
        quantity: 4,
        price: 69890,
        detail: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis aliquam dolorum voluptatem dicta incidunt similique blanditiis ducimus, possimus neque facilis totam corporis illo ipsum dolor odio nobis fugiat modi! Dolores. Atque magni quia rem optio id incidunt culpa voluptatibus. Ipsa, tenetur assumenda officiis sequi voluptas corporis quas obcaecati magni explicabo, earum illo in laborum, repellendus eos sit? Libero, et qui"
      },
      {
        id: 3,
        img: "https://firebasestorage.googleapis.com/v0/b/next-js-459e0.appspot.com/o/image%2Fshell-5w30-hx8.webp?alt=media&token=407407b1-c8ec-4890-a7e9-1ef7639bb70e",
        category: "Aceites",
        brand: "Shell",
        model: "5W-30",
        description: "HX8, 4 Litros.",
        quantity: 6,
        price: 47290,
        detail: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis aliquam dolorum voluptatem dicta incidunt similique blanditiis ducimus, possimus neque facilis totam corporis illo ipsum dolor odio nobis fugiat modi! Dolores. Atque magni quia rem optio id incidunt culpa voluptatibus. Ipsa, tenetur assumenda officiis sequi voluptas corporis quas obcaecati magni explicabo, earum illo in laborum, repellendus eos sit? Libero, et qui"
      },
      {
        id: 4,
        img: "https://firebasestorage.googleapis.com/v0/b/next-js-459e0.appspot.com/o/image%2Fman-c30171.webp?alt=media&token=1582dcfa-c589-4480-a28f-9c3b4ec1498b",
        category: "Filtros",
        brand: "Mann",
        model: "C30171",
        description: "Aire",
        quantity: 3,
        price: 9900,
        detail: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis aliquam dolorum voluptatem dicta incidunt similique blanditiis ducimus, possimus neque facilis totam corporis illo ipsum dolor odio nobis fugiat modi! Dolores. Atque magni quia rem optio id incidunt culpa voluptatibus. Ipsa, tenetur assumenda officiis sequi voluptas corporis quas obcaecati magni explicabo, earum illo in laborum, repellendus eos sit? Libero, et qui"
      },
      {
        id: 5,
        img: "https://firebasestorage.googleapis.com/v0/b/next-js-459e0.appspot.com/o/image%2Fpaloma-parfum.webp?alt=media&token=bd4898c6-21d1-4d3c-a4f0-da6bfe63cb8d",
        category: "Aromatizantes",
        brand: "Paloma",
        model: "Parfum",
        description: "Vainilla",
        quantity: 10,
        price: 1800,
        detail: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis aliquam dolorum voluptatem dicta incidunt similique blanditiis ducimus, possimus neque facilis totam corporis illo ipsum dolor odio nobis fugiat modi! Dolores. Atque magni quia rem optio id incidunt culpa voluptatibus. Ipsa, tenetur assumenda officiis sequi voluptas corporis quas obcaecati magni explicabo, earum illo in laborum, repellendus eos sit? Libero, et qui"
      },
      {
        id: 6,
        img: "https://firebasestorage.googleapis.com/v0/b/next-js-459e0.appspot.com/o/image%2Fhankook-H724.webp?alt=media&token=3b0c21e1-c703-43cd-8770-556a0c095405",
        category: "Neumaticos",
        brand: "Hankook",
        model: "185-65-R14",
        description: "H724 Optimo",
        quantity: 4,
        price: 59890,
        detail: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis aliquam dolorum voluptatem dicta incidunt similique blanditiis ducimus, possimus neque facilis totam corporis illo ipsum dolor odio nobis fugiat modi! Dolores. Atque magni quia rem optio id incidunt culpa voluptatibus. Ipsa, tenetur assumenda officiis sequi voluptas corporis quas obcaecati magni explicabo, earum illo in laborum, repellendus eos sit? Libero, et qui"
      },
      {
        id: 7,
        img: "https://firebasestorage.googleapis.com/v0/b/next-js-459e0.appspot.com/o/image%2Fhankook-MF55457.webp?alt=media&token=6d14aebd-c174-4946-aafd-11aa385a3047",
        category: "Baterias",
        brand: "Hankook",
        model: "MF55457",
        description: "55AH, 480CCA",
        quantity: 5,
        price: 79890,
        detail: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis aliquam dolorum voluptatem dicta incidunt similique blanditiis ducimus, possimus neque facilis totam corporis illo ipsum dolor odio nobis fugiat modi! Dolores. Atque magni quia rem optio id incidunt culpa voluptatibus. Ipsa, tenetur assumenda officiis sequi voluptas corporis quas obcaecati magni explicabo, earum illo in laborum, repellendus eos sit? Libero, et qui"
      },
      {
        id: 8,
        img: "https://firebasestorage.googleapis.com/v0/b/next-js-459e0.appspot.com/o/image%2Fshell-15w40-hx5.webp?alt=media&token=27f96fd0-c5d8-4e69-9721-c93d11403a2a",
        category: "Aceites",
        brand: "Shell",
        model: "15W-40",
        description: "HX5, 4 Litros.",
        quantity: 6,
        price: 29690,
        detail: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis aliquam dolorum voluptatem dicta incidunt similique blanditiis ducimus, possimus neque facilis totam corporis illo ipsum dolor odio nobis fugiat modi! Dolores. Atque magni quia rem optio id incidunt culpa voluptatibus. Ipsa, tenetur assumenda officiis sequi voluptas corporis quas obcaecati magni explicabo, earum illo in laborum, repellendus eos sit? Libero, et qui"
      },
      {
        id: 9,
        img: "https://firebasestorage.googleapis.com/v0/b/next-js-459e0.appspot.com/o/image%2Fmann-hu-718_5X.webp?alt=media&token=d5004c0b-50c9-4652-a5f3-b3a591d2d6b8",
        category: "Filtros",
        brand: "Mann",
        model: "HU718-5X",
        description: "Elemento",
        quantity: 3,
        price: 9700,
        detail: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis aliquam dolorum voluptatem dicta incidunt similique blanditiis ducimus, possimus neque facilis totam corporis illo ipsum dolor odio nobis fugiat modi! Dolores. Atque magni quia rem optio id incidunt culpa voluptatibus. Ipsa, tenetur assumenda officiis sequi voluptas corporis quas obcaecati magni explicabo, earum illo in laborum, repellendus eos sit? Libero, et qui"
      },
      {
        id: 10,
        img: "https://firebasestorage.googleapis.com/v0/b/next-js-459e0.appspot.com/o/image%2Fpaloma-aqua-balls.webp?alt=media&token=cf8241da-c30c-4e14-bf31-6388c5223518",
        category: "Aromatizantes",
        brand: "Paloma",
        model: "Woody",
        description: "Floral",
        quantity: 3,
        price: 2400,
        detail: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis aliquam dolorum voluptatem dicta incidunt similique blanditiis ducimus, possimus neque facilis totam corporis illo ipsum dolor odio nobis fugiat modi! Dolores. Atque magni quia rem optio id incidunt culpa voluptatibus. Ipsa, tenetur assumenda officiis sequi voluptas corporis quas obcaecati magni explicabo, earum illo in laborum, repellendus eos sit? Libero, et qui"
      },
      {
        id: 11,
        img: "https://firebasestorage.googleapis.com/v0/b/next-js-459e0.appspot.com/o/image%2Fhankook-H308.webp?alt=media&token=c59e18cd-d4fc-4a80-92b6-ac53866fc66d",
        category: "Neumaticos",
        brand: "Hankook",
        model: "175-60-R15",
        description: "H308 Kinergy",
        quantity: 4,
        price: 49890,
        detail: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis aliquam dolorum voluptatem dicta incidunt similique blanditiis ducimus, possimus neque facilis totam corporis illo ipsum dolor odio nobis fugiat modi! Dolores. Atque magni quia rem optio id incidunt culpa voluptatibus. Ipsa, tenetur assumenda officiis sequi voluptas corporis quas obcaecati magni explicabo, earum illo in laborum, repellendus eos sit? Libero, et qui"
      },
      {
        id: 12,
        img: "https://firebasestorage.googleapis.com/v0/b/next-js-459e0.appspot.com/o/image%2Fhankook-MF47600.webp?alt=media&token=630b635c-e2af-495f-87d4-f85a629ed0f8",
        category: "Baterias",
        brand: "Hankook",
        model: "MF47600",
        description: "60AH, 600CCA.",
        quantity: 3,
        price: 98980,
        detail: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis aliquam dolorum voluptatem dicta incidunt similique blanditiis ducimus, possimus neque facilis totam corporis illo ipsum dolor odio nobis fugiat modi! Dolores. Atque magni quia rem optio id incidunt culpa voluptatibus. Ipsa, tenetur assumenda officiis sequi voluptas corporis quas obcaecati magni explicabo, earum illo in laborum, repellendus eos sit? Libero, et qui"
      },
      {
        id: 13,
        img: "https://firebasestorage.googleapis.com/v0/b/next-js-459e0.appspot.com/o/image%2F10w-40-petroleo-shell.webp?alt=media&token=4397a65a-33bb-4d95-b430-9893f156efcc",
        category: "Aceites",
        brand: "Shell",
        model: "10W-40",
        description: "R5, 4 Litros.",
        quantity: 3,
        price: 35990,
        detail: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis aliquam dolorum voluptatem dicta incidunt similique blanditiis ducimus, possimus neque facilis totam corporis illo ipsum dolor odio nobis fugiat modi! Dolores. Atque magni quia rem optio id incidunt culpa voluptatibus. Ipsa, tenetur assumenda officiis sequi voluptas corporis quas obcaecati magni explicabo, earum illo in laborum, repellendus eos sit? Libero, et qui"
      },
      {
        id: 14,
        img: "https://firebasestorage.googleapis.com/v0/b/next-js-459e0.appspot.com/o/image%2Fmann-w610_6.webp?alt=media&token=5ae063f4-e908-4f65-8d2b-3e4415fec38c",
        category: "Filtros",
        brand: "Mann",
        model: "W610-6",
        description: "Aceite",
        quantity: 3,
        price: 6280,
        detail: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis aliquam dolorum voluptatem dicta incidunt similique blanditiis ducimus, possimus neque facilis totam corporis illo ipsum dolor odio nobis fugiat modi! Dolores. Atque magni quia rem optio id incidunt culpa voluptatibus. Ipsa, tenetur assumenda officiis sequi voluptas corporis quas obcaecati magni explicabo, earum illo in laborum, repellendus eos sit? Libero, et qui"
      },
      {
        id: 15,
        img: "https://firebasestorage.googleapis.com/v0/b/next-js-459e0.appspot.com/o/image%2Fpaloma-happy-bag.webp?alt=media&token=a445405b-6a23-4ee0-9318-8f3b3912936f",
        category: "Aromatizantes",
        brand: "Paloma",
        model: "Happy-Bag",
        description: "Sports",
        quantity: 5,
        price: 1890,
        detail: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis aliquam dolorum voluptatem dicta incidunt similique blanditiis ducimus, possimus neque facilis totam corporis illo ipsum dolor odio nobis fugiat modi! Dolores. Atque magni quia rem optio id incidunt culpa voluptatibus. Ipsa, tenetur assumenda officiis sequi voluptas corporis quas obcaecati magni explicabo, earum illo in laborum, repellendus eos sit? Libero, et qui"
      }

  ]; export default mockData;
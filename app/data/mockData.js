const mockData = [

    {
        id: 1,
        img: "/image/hankook-K715.webp",
        category: "Neumaticos",
        brand: "Hankook",
        model: "K715 Optimo",
        description: "155/65R13",
        quantity: 4,
        price: 59890,
        detail: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis aliquam dolorum voluptatem dicta incidunt similique blanditiis ducimus, possimus neque facilis totam corporis illo ipsum dolor odio nobis fugiat modi! Dolores. Atque magni quia rem optio id incidunt culpa voluptatibus. Ipsa, tenetur assumenda officiis sequi voluptas corporis quas obcaecati magni explicabo, earum illo in laborum, repellendus eos sit? Libero, et qui"
      },
      {
        id: 2,
        img: "/image/hankook-MF54321.webp",
        category: "Baterias",
        brand: "Hankook",
        model: "MF54321",
        description: "45AH 450CCA.",
        quantity: 4,
        price: 69890,
        detail: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis aliquam dolorum voluptatem dicta incidunt similique blanditiis ducimus, possimus neque facilis totam corporis illo ipsum dolor odio nobis fugiat modi! Dolores. Atque magni quia rem optio id incidunt culpa voluptatibus. Ipsa, tenetur assumenda officiis sequi voluptas corporis quas obcaecati magni explicabo, earum illo in laborum, repellendus eos sit? Libero, et qui"
      },
      {
        id: 3,
        img: "/image/shell-5w30-hx8.webp",
        category: "Aceites",
        brand: "Shell",
        model: "HX8",
        description: "5W-30",
        quantity: 6,
        price: 47290,
        detail: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis aliquam dolorum voluptatem dicta incidunt similique blanditiis ducimus, possimus neque facilis totam corporis illo ipsum dolor odio nobis fugiat modi! Dolores. Atque magni quia rem optio id incidunt culpa voluptatibus. Ipsa, tenetur assumenda officiis sequi voluptas corporis quas obcaecati magni explicabo, earum illo in laborum, repellendus eos sit? Libero, et qui"
      },
      {
        id: 4,
        img: "/image/man-c30171.webp",
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
        img: "/image/paloma-parfum.webp",
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
        img: "/image/hankook-H724.webp",
        category: "Neumaticos",
        brand: "Hankook",
        model: "H724 Optimo",
        description: "185/65R14",
        quantity: 4,
        price: 59890,
        detail: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis aliquam dolorum voluptatem dicta incidunt similique blanditiis ducimus, possimus neque facilis totam corporis illo ipsum dolor odio nobis fugiat modi! Dolores. Atque magni quia rem optio id incidunt culpa voluptatibus. Ipsa, tenetur assumenda officiis sequi voluptas corporis quas obcaecati magni explicabo, earum illo in laborum, repellendus eos sit? Libero, et qui"
      },
      {
        id: 7,
        img: "/image/hankook-MF55457.webp",
        category: "Baterias",
        brand: "Hankook",
        model: "MF55457",
        description: "55AH 480CCA",
        quantity: 5,
        price: 79890,
        detail: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis aliquam dolorum voluptatem dicta incidunt similique blanditiis ducimus, possimus neque facilis totam corporis illo ipsum dolor odio nobis fugiat modi! Dolores. Atque magni quia rem optio id incidunt culpa voluptatibus. Ipsa, tenetur assumenda officiis sequi voluptas corporis quas obcaecati magni explicabo, earum illo in laborum, repellendus eos sit? Libero, et qui"
      },
      {
        id: 8,
        img: "/image/shell-15w40-hx5.webp",
        category: "Aceites",
        brand: "Shell",
        model: "HX5",
        description: "15W-40",
        quantity: 6,
        price: 29690,
        detail: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis aliquam dolorum voluptatem dicta incidunt similique blanditiis ducimus, possimus neque facilis totam corporis illo ipsum dolor odio nobis fugiat modi! Dolores. Atque magni quia rem optio id incidunt culpa voluptatibus. Ipsa, tenetur assumenda officiis sequi voluptas corporis quas obcaecati magni explicabo, earum illo in laborum, repellendus eos sit? Libero, et qui"
      },
      {
        id: 9,
        img: "/image/mann-hu-718_5X.webp",
        category: "Filtros",
        brand: "Mann",
        model: "HU718/5X",
        description: "Elemento",
        quantity: 3,
        price: 9700,
        detail: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis aliquam dolorum voluptatem dicta incidunt similique blanditiis ducimus, possimus neque facilis totam corporis illo ipsum dolor odio nobis fugiat modi! Dolores. Atque magni quia rem optio id incidunt culpa voluptatibus. Ipsa, tenetur assumenda officiis sequi voluptas corporis quas obcaecati magni explicabo, earum illo in laborum, repellendus eos sit? Libero, et qui"
      },
      {
        id: 10,
        img: "/image/paloma-aqua-balls.webp",
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
        img: "/image/hankook-H308.webp",
        category: "Neumaticos",
        brand: "Hankook",
        model: "H308 Kinergy",
        description: "175/60R15",
        quantity: 4,
        price: 49890,
        detail: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis aliquam dolorum voluptatem dicta incidunt similique blanditiis ducimus, possimus neque facilis totam corporis illo ipsum dolor odio nobis fugiat modi! Dolores. Atque magni quia rem optio id incidunt culpa voluptatibus. Ipsa, tenetur assumenda officiis sequi voluptas corporis quas obcaecati magni explicabo, earum illo in laborum, repellendus eos sit? Libero, et qui"
      },
      {
        id: 12,
        img: "/image/hankook-MF47600.webp",
        category: "Baterias",
        brand: "Hankook",
        model: "MF47600",
        description: "60AH 600CCA",
        quantity: 3,
        price: 98980,
        detail: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis aliquam dolorum voluptatem dicta incidunt similique blanditiis ducimus, possimus neque facilis totam corporis illo ipsum dolor odio nobis fugiat modi! Dolores. Atque magni quia rem optio id incidunt culpa voluptatibus. Ipsa, tenetur assumenda officiis sequi voluptas corporis quas obcaecati magni explicabo, earum illo in laborum, repellendus eos sit? Libero, et qui"
      },
      {
        id: 13,
        img: "/image/10w-40-petroleo-shell.webp",
        category: "Aceites",
        brand: "Shell",
        model: "R5",
        description: "10W-40",
        quantity: 3,
        price: 35990,
        detail: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis aliquam dolorum voluptatem dicta incidunt similique blanditiis ducimus, possimus neque facilis totam corporis illo ipsum dolor odio nobis fugiat modi! Dolores. Atque magni quia rem optio id incidunt culpa voluptatibus. Ipsa, tenetur assumenda officiis sequi voluptas corporis quas obcaecati magni explicabo, earum illo in laborum, repellendus eos sit? Libero, et qui"
      },
      {
        id: 14,
        img: "/image/mann-w610_6.webp",
        category: "Filtros",
        brand: "Mann",
        model: "W610/6",
        description: "Aceite",
        quantity: 3,
        price: 6280,
        detail: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis aliquam dolorum voluptatem dicta incidunt similique blanditiis ducimus, possimus neque facilis totam corporis illo ipsum dolor odio nobis fugiat modi! Dolores. Atque magni quia rem optio id incidunt culpa voluptatibus. Ipsa, tenetur assumenda officiis sequi voluptas corporis quas obcaecati magni explicabo, earum illo in laborum, repellendus eos sit? Libero, et qui"
      },
      {
        id: 15,
        img: "/image/paloma-happy-bag.webp",
        category: "Aromatizantes",
        brand: "Paloma",
        model: "Happy Bag",
        description: "SPORT",
        quantity: 5,
        price: 1890,
        detail: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis aliquam dolorum voluptatem dicta incidunt similique blanditiis ducimus, possimus neque facilis totam corporis illo ipsum dolor odio nobis fugiat modi! Dolores. Atque magni quia rem optio id incidunt culpa voluptatibus. Ipsa, tenetur assumenda officiis sequi voluptas corporis quas obcaecati magni explicabo, earum illo in laborum, repellendus eos sit? Libero, et qui"
      }

  ]; export default mockData;
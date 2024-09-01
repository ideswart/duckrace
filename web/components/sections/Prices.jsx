const prices = [
  {
    title: "Rondleiding PRONCK",
    image: "https://brouwerijpronck.nl/wp-content/uploads/2018/12/logo.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce viverra euismod sodales. Sed scelerisque vulputate nisi.",
    quantity: "3",
    value: "t.w.v. € 50,-",
  },
  {
    title: "Rondleiding PRONCK",
    image: "https://brouwerijpronck.nl/wp-content/uploads/2018/12/logo.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce viverra euismod sodales. Sed scelerisque vulputate nisi.",
    quantity: "3",
    value: "t.w.v. € 50,-",
  },
  {
    title: "Rondleiding PRONCK",
    image: "https://brouwerijpronck.nl/wp-content/uploads/2018/12/logo.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce viverra euismod sodales. Sed scelerisque vulputate nisi.",
    quantity: "3",
    value: "t.w.v. € 50,-",
  },
  {
    title: "Rondleiding PRONCK",
    image: "https://brouwerijpronck.nl/wp-content/uploads/2018/12/logo.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce viverra euismod sodales. Sed scelerisque vulputate nisi.",
    quantity: "3",
    value: "t.w.v. € 50,-",
  },
  {
    title: "Rondleiding PRONCK",
    image: "https://brouwerijpronck.nl/wp-content/uploads/2018/12/logo.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce viverra euismod sodales. Sed scelerisque vulputate nisi.",
    quantity: "3",
    value: "t.w.v. € 50,-",
  },
  {
    title: "Rondleiding PRONCK",
    image: "https://brouwerijpronck.nl/wp-content/uploads/2018/12/logo.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce viverra euismod sodales. Sed scelerisque vulputate nisi.",
    quantity: "3",
    value: "t.w.v. € 50,-",
  },
  ,
];

function Price(props) {
  const { image } = props.data;
  return (
    <div className="min-w-80 md:min-w-[300px] lg:min-w-[400px] shadow-xl">
      <div className="bg-gray-950/90 rounded-md shadow-md p-4 md:p-6">
        <div className="flex flex-row gap-4 md:gap-6 lg:gap-8">
          <div className="w-16 h-24 md:w-28 md:h-32">
            <img className="content-fit rounded-md" src={image} alt="" />
          </div>
          <div className="flex flex-col w-2/3 gap-2">
            <div className="font-bold uppercase text-gray-100">{props.data.title}</div>
            <div className="text-xs text-gray-100">{props.data.description}</div>
            <div className="text-xs text-gray-100">
              {props.data.quantity}x à {props.data.value}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PriceGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
      {prices.map((price, index) => (
        <Price key={index} data={price} />
      ))}
    </div>
  );
}

export default function Prices() {
  return (
    <div className="bg-amber-100 h-full w-screen pb-60 md:pb-0">
      <div className="container mx-auto max-w-7xl px-4 mt-2 md:md-0">
        <div className="flex flex-col items-center justify-center gap-4">
          <h2 className="uppercase text-2xl md:text-3xl font-bold text-center mt-12">
            Prijzen
          </h2>
          <p className="text-center max-w-3xl">
            Meedoen is belangrijker dan winnen geldt niet altijd als er
            prachtige Leise prijzen worden uitgereikt aan de snelste eenden. De
            6 snelste eenden vallen in de prijzen.
          </p>
          <PriceGrid />
        </div>
      </div>
      {/* <div className="mx-auto container max-w-7xl px-4 sm:px-0">
        
      </div> */}
    </div>
  );
}

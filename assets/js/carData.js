const cars = [
    {
        id: 1,
        name: "Toyota Camry",
        price: 25000,
        description: "A reliable and fuel-efficient sedan.",
        image: "./assets/images/booking/car-01.jpg",
        category: "Hybrid"
    },
    {
        id: 2,
        name: "Honda Civic",
        price: 22000,
        description: "A compact car known for its efficiency and style.",
        image: "./assets/images/booking/car-02.jpg",
        category: "Hybrid"
    },
    {
        id: 3,
        name: "Ford F-150",
        price: 35000,
        description: "A popular pickup truck with strong towing capabilities.",
        image: "./assets/images/booking/car-03.jpg",
        category: "Hybrid"
    },
    {
        id: 4,
        name: "Chevrolet Malibu",
        price: 23000,
        description: "A comfortable midsize sedan for everyday driving.",
        image: "./assets/images/booking/car-04.jpg",
        category: "Luxury"
    },
    {
        id: 5,
        name: "Nissan Altima",
        price: 24000,
        description: "A family-friendly sedan with modern features.",
        image: "./assets/images/booking/car-05.jpg",
        category: "luxury"
    },
    {
        id: 6,
        name: "Kia Sportage",
        price: 28000,
        description: "A compact SUV offering great value for money.",
        image: "./assets/images/booking/car-06.jpg",
        category: "Hybrid"
    },
    {
        id: 7,
        name: "Jeep Wrangler",
        price: 35000,
        description: "An iconic off-road vehicle known for its ruggedness.",
        image: "./assets/images/booking/car-07.jpg",
        category: "luxury"
    },
    {
        id: 8,
        name: "Hyundai Sonata",
        price: 24000,
        description: "A stylish and comfortable midsize sedan.",
        image: "./assets/images/booking/car-08.jpg",
        category: "Hybrid"
    },
    {
        id: 9,
        name: "BMW 3 Series",
        price: 45000,
        description: "A luxury compact car with a sporty feel.",
        image: "./assets/images/booking/car-09.jpg",
        category: "Luxury"
    },
    {
        id: 10,
        name: "Volkswagen Golf",
        price: 22000,
        description: "A versatile and fun-to-drive compact hatchback.",
        image: "./assets/images/booking/car-10.jpg",
        category: "Hybrid"
    },
    {
        id: 11,
        name: "Tesla Model 3",
        price: 48000,
        description: "An electric car known for its cutting-edge technology.",
        image: "./assets/images/booking/car-11.jpg",
        category: "Luxury"
    },
    {
        id: 12,
        name: "Subaru Outback",
        price: 32000,
        description: "A rugged and spacious crossover SUV.",
        image: "./assets/images/booking/car-12.jpg",
        category: "SUV"
    },
    {
        id: 13,
        name: "Audi A4",
        price: 43000,
        description: "A luxury sedan with a well-crafted interior.",
        image: "./assets/images/booking/car-13.jpg",
        category: "Luxury"
    },
    {
        id: 14,
        name: "Mazda CX-5",
        price: 29000,
        description: "A stylish and fun-to-drive compact SUV.",
        image: "./assets/images/booking/car-14.webp",
        category: "SUV"
    },
    {
        id: 15,
        name: "Lexus RX 350",
        price: 52000,
        description: "A premium midsize SUV with a smooth ride.",
        image: "./assets/images/booking/car-15.jpg",
        category: "Luxury"
    },
    {
        id: 16,
        name: "Mercedes-Benz C-Class",
        price: 47000,
        description: "A luxury sedan with a comfortable interior.",
        image: "./assets/images/booking/car-16.jpg",
        category: "Luxury"
    },
    {
        id: 17,
        name: "Jeep Grand Cherokee",
        price: 38000,
        description: "A popular midsize SUV for off-road enthusiasts.",
        image: "./assets/images/booking/car-17.jpg",
        category: "SUV"
    },
    {
        id: 18,
        name: "Ford Mustang",
        price: 32000,
        description: "A classic American sports car with iconic styling.",
        image: "./assets/images/booking/car-18.jpg",
        category: "Sports Car"
    },
    {
        id: 19,
        name: "Kia Seltos",
        price: 24000,
        description: "A compact SUV with modern technology features.",
        image: "./assets/images/booking/car-19.webp",
        category: "SUV"
    },
    {
        id: 20,
        name: "Porsche 911",
        price: 95000,
        description: "An iconic sports car known for its performance.",
        image: "./assets/images/booking/car-20.jpg",
        category: "Sports"
    },
    {
        id: 21,
        name: "Dima Koukab",
        price: 25000,
        description: "A reliable and fuel-efficient sedan.",
        image: "./assets/images/booking/car-01.jpg",
        category: "Classic"
    },
    {
        id: 22,
        name: "Dima Ocs",
        price: 22000,
        description: "A compact car known for its efficiency and style.",
        image: "./assets/images/booking/car-02.jpg",
        category: "Classic"
    }
];

localStorage.setItem("carsData", JSON.stringify(cars));

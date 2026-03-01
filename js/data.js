//Array de Planes / Catalogos

//Array de Planes de Suscripción
const planes = [
    {
        id: "genesis",
        nombre: "Plan Génesis (Básico)",
        precio: 1089.00,
        beneficios: ["1 Dispositivo", "Calidad HD", "Con anuncios"],
        recomendado: false
    },
    {
        id: "evolucion",
        nombre: "Plan Evolución (Estándar)",
        precio: 1815.00,
        beneficios: ["2 Dispositivos", "Calidad Full HD", "Sin anuncios"],
        recomendado: true
    },
    {
        id: "apocalipsis",
        nombre: "Plan Apocalipsis (Premium)",
        precio: 2662.00,
        beneficios: ["4 Dispositivos simultáneos", "Calidad 4K + HDR", "Descargas ilimitadas"],
        recomendado: false
    }
];

// Array de Catálogo de Animes
const catalogoAnime = [
    {
        id: 1,
        titulo: "One Piece",
        genero: "Shonen",
        descripcion: "Monkey D. Luffy busca el tesoro legendario One Piece para convertirse en el Rey de los Piratas.",
        imagen: "assets/img/one-piece.jpg",
        videoUrl: "https://www.youtube.com/embed/7gYGFiEjZqk",
        anio: 1999,
        rating: 8.9
    },
    {
        id: 2,
        titulo: "Attack on Titan",
        genero: "Seinen",
        descripcion: "La humanidad lucha por sobrevivir contra los titanes gigantes.",
        imagen: "assets/img/aoy.jpg",
        videoUrl: "https://www.youtube.com/embed/ECIr_Gz_FNA",
        anio: 2013,
        rating: 9.1
    },
    {
        id: 3,
        titulo: "Naruto Shippuden",
        genero: "Shonen",
        descripcion: "Naruto regresa para cumplir su sueño de convertirse en Hokage.",
        imagen: "assets/img/naruto.jpg",
        videoUrl: "https://www.youtube.com/embed/_sdXlY7Zs3I",
        anio: 2007,
        rating: 8.7
    },
    {
        id: 4,
        titulo: "Demon Slayer",
        genero: "Shonen",
        descripcion: "Tanjiro Kamado lucha contra demonios para salvar a su hermana.",
        imagen: "assets/img/demon-slayer.jpg",
        videoUrl: "https://www.youtube.com/embed/cXqJE-aIvUs",
        anio: 2019,
        rating: 8.8
    },
    {
        id: 5,
        titulo: "Death Note",
        genero: "Seinen",
        descripcion: "Light Yagami obtiene un cuaderno capaz de matar a cualquier persona.",
        imagen: "assets/img/death-note.jpg",
        videoUrl: "https://www.youtube.com/embed/EYhM0WDEv7k",
        anio: 2006,
        rating: 9.0
    },
    {
        id: 6,
        titulo: "Jujutsu Kaisen",
        genero: "Shonen",
        descripcion: "Yuji Itadori entra en el mundo de las maldiciones.",
        imagen: "assets/img/jujutsu.jpg",
        videoUrl: "https://www.youtube.com/embed/vrwfUpacu78",
        anio: 2020,
        rating: 8.7
    },
    {
        id: 7,
        titulo: "My Hero Academia",
        genero: "Shonen",
        descripcion: "Izuku Midoriya busca convertirse en el héroe número uno.",
        imagen: "assets/img/boku-no-hero.jpg",
        videoUrl: "https://www.youtube.com/embed/0o428b2xbPo",
        anio: 2016,
        rating: 8.5
    },
    {
        id: 8,
        titulo: "Black Clover",
        genero: "Shonen",
        descripcion: "Asta busca convertirse en el Rey Mago.",
        imagen: "assets/img/black-clover.jpg",
        videoUrl: "https://www.youtube.com/embed/DOyYcjQlUQ8",
        anio: 2017,
        rating: 8.3
    }
];
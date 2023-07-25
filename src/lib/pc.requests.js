const PCS = [
    {
      id: 1,
      title: "Notebook Dell Inspiron 3525",
      category: "notebooks",
      price: 550000,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum non voluptas eius earum. Reiciendis error a quod impedit ex!",
      img: "https://http2.mlstatic.com/D_NQ_NP_681864-MLA70544804329_072023-O.webp",
      stock: 10,
    },
    {
      id: 2,
      title: "Pc Armada Económica Alto Rendimiento Oficina Estudio 8gb 1tb",
      category: "computadoras",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum non voluptas eius earum. Reiciendis error a quod impedit ex!",
  
      price: 125000,
      img: "https://http2.mlstatic.com/D_NQ_NP_610689-MLA54865198580_042023-O.webp",
      stock: 10,
    },
    {
      id: 3,
      title: "Notebook Asus 15,6",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum non voluptas eius earum. Reiciendis error a quod impedit ex!",
  
      category: "notebooks",
      price: 490000,
      stock: 5,
      img: "https://http2.mlstatic.com/D_NQ_NP_671283-MLU69699538722_052023-O.webp",
    },
    {
      id: 4,
      title: "Lenovo Tab M10 FHD Plus 2nd Gen TB-X606F 10.3",
      category: "tablets",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum non voluptas eius earum. Reiciendis error a quod impedit ex!",
  
      price: 115000,
      img: "https://http2.mlstatic.com/D_NQ_NP_914216-MLA45629129539_042021-O.webp",
      stock: 6,
    },
    {
      id: 5,
      title: "Samsung Galaxy Tab A A8 SM-X200 - Dark gray - 4 GB - 64 GB - 10.5",
      category: "tablets",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum non voluptas eius earum. Reiciendis error a quod impedit ex!",
  
      price: 130000,
      img: "https://http2.mlstatic.com/D_NQ_NP_715518-MLA52231136904_112022-O.webp",
      stock: 6,
    },
    {
      id: 6,
      title: "Pc Armada Gamer Amd Ryzen 5 5600g 12 Nucleo Ram 16gb Ssd 480",
      category: "computadoras",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum non voluptas eius earum. Reiciendis error a quod impedit ex!",
  
      price: 258000,
      img: "https://http2.mlstatic.com/D_NQ_NP_884368-MLA53087339003_122022-O.webp",
      stock: 6,
    },
  ];
  //ESTO VA A CAMABIAR
  //Simulación de una petición de red que nunca falla
   export const getPcs = (id) => {
    const _pcs = id
       ? PCS.filter((pc) => pc.category.toLowerCase() === id)
       : PCS;
  
     return new Promise((res) => {
       setTimeout(() => {
         res(_pcs); //Se resuelve con el array de libros
       }, 1000);
     });
   };
  
   export const getPC = (id) => {
     const pc = PCS.filter((pc) => pc.id === id)[0];
  
     return new Promise((res) => {
       setTimeout(() => {
         res(pc);
       }, 1500);
     });
   };
  
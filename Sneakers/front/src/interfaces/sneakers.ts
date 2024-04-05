// V1
    interface Sneaker1 {
    name: string,
    category: string,
    brand: string,
    price: number,
    content: string,
    stock: number,
    online: boolean,
    size: number,
    avis: {
      stars: number,
      nb: number,
    },
    "picture": [{
      "pic1": "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/9fabb2ae-e433-45da-b75b-f67cca81f0f0/date-de-sortie-de-la-air-force%C2%A01%C2%A0-07-%C2%AB%C2%A0white-and-multicolor%C2%A0%C2%BB-fq0709-100.jpg",
      "pic2": "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/894eb3ff-9d8c-4958-bcbd-433e97c4d041/date-de-sortie-de-la-air-force%C2%A01%C2%A0-07-%C2%AB%C2%A0white-and-multicolor%C2%A0%C2%BB-fq0709-100.jpg",
      "pic3": "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/4c8cc2eb-4393-41e5-bf7f-8fa824102376/date-de-sortie-de-la-air-force%C2%A01%C2%A0-07-%C2%AB%C2%A0white-and-multicolor%C2%A0%C2%BB-fq0709-100.jpg",
      "pic4": "https://static.nike.com/a/images/t_prod_sc/w_640,c_limit,f_auto/d92e2eac-58d9-445f-8487-6a0b65f47be0/date-de-sortie-de-la-air-force%C2%A01%C2%A0-07-%C2%AB%C2%A0white-and-multicolor%C2%A0%C2%BB-fq0709-100.jpg",
      "pic5": "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/323ecccb-aee1-4cea-b588-154b4c28c8b8/date-de-sortie-de-la-air-force%C2%A01%C2%A0-07-%C2%AB%C2%A0white-and-multicolor%C2%A0%C2%BB-fq0709-100.jpg",
      "pic6": "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/1b4e33d6-25fd-4c51-9fd2-014cf72e6da8/date-de-sortie-de-la-air-force%C2%A01%C2%A0-07-%C2%AB%C2%A0white-and-multicolor%C2%A0%C2%BB-fq0709-100.jpg",
      "pic7": "https://static.nike.com/a/images/t_prod,f_auto/w_1920,c_limit/1ba74a93-f833-43aa-aa5f-36f8f92dd086/date-de-sortie-de-la-air-force%C2%A01%C2%A0-07-%C2%AB%C2%A0white-and-multicolor%C2%A0%C2%BB-fq0709-100.jpg"
    }]
  }

  // V2
  export interface Sneaker2 {
    name: string,
    category: string,
    brand: string,
    price: number,
    content: string,
    stock: number,
    online: boolean,
    size: string[],
    avis: Avis,
    picture: Picture[],
  }

  interface Picture {
    pic1: string,
    pic2: string,
    pic3: string,
    pic4: string,
    pic5: string,
    pic6: string,
    pic7: string,
  }

  interface Avis {
    stars: number,
    nb: number
  }

  export type RootState = {
    sneakers: {
        data: Sneaker1[]
    }
  }
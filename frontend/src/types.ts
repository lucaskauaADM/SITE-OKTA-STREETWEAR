export type Category = "camisetas" | "bermudas" | "calcas" | "acessorios";

export interface Slide {
  src: string;
  descricao?: string;
}

export interface Product {
  id: string;
  category: Category;
  image: string;   // use /img/... vindo de public/
  name: string;
  price: string;   // mantém formatação BR (ex.: "R$ 119,90")
}

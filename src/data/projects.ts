import AmarantoLogo from '../assets/projects/amaranto/logo-negativo.svg';
import packaging from '../assets/projects/amaranto/mockup-1.webp';
import cap from '../assets/projects/amaranto/mockup-2.webp';
import polo from '../assets/projects/amaranto/mockup-3.webp';
import aprons from '../assets/projects/amaranto/mockup-4.webp';

export const projects = [{
  slug: 'amaranto',
  logo: AmarantoLogo,
  color: '#7f1715',
  concept: 'La silueta del fundador conserva la memoria de la marca. Las abejas y la polinización inspiran un lenguaje visual que conecta el café con su origen natural.',
  name: 'Amaranto Company',
  category: 'Rediseño de identidad visual',
  title: 'Tradición, café y naturaleza.',
  cover: packaging,
  coverAlt: 'Empaque de café Amaranto con ilustraciones de abejas y flores en color burdeos',
  description: 'Amaranto Café es un proyecto de rediseño de identidad visual desarrollado para un emprendimiento de Mercados Campesinos de Medellín. La propuesta busca transformar su identidad original en una marca más limpia, legible y versátil, conservando la silueta de su fundador e incorporando elementos inspirados en las abejas y la polinización, que representan su historia y conexión con la naturaleza.',
  role: 'Investigación, desarrollo del concepto creativo, rediseño del logotipo, diseño de etiquetas y desarrollo de la identidad visual.',
  collaborators: 'Proyecto realizado en equipo con Sara y Santiago.',
  software: 'Procreate, Photoshop e Illustrator',
  gallery: [
    { image: aprons, alt: 'Delantales de Amaranto en tonos café y crema con el logotipo bordado', caption: 'La identidad en el día a día.', wide: true },
    { image: cap, alt: 'Gorra burdeos con el logotipo de Amaranto Company bordado en crema', caption: 'Gorra bordada.', wide: false },
    { image: polo, alt: 'Polo blanco con detalles burdeos y el logotipo de Amaranto en el pecho', caption: 'Aplicación en indumentaria.', wide: false },
  ],
}];

import headphone1 from '../images/Headphone-p1.png';
import headphone2 from '../images/headphone-2.png';
import headphone3 from '../images/headphone-3.png';

import speaker1 from '../images/productSpeaker-1.png';
import speaker2 from '../images/productSpeaker-2.png';

import earphones from '../images/Earphone-api.png'

// for headphone Componenets 
//headphone1
import head1 from '../images/HeadPhone/featurehaedphone-1.png'
import head2 from '../images/HeadPhone/featureheadhone-2.png'
import head3 from '../images/HeadPhone/featureheadphone-3.png'

//headphone2
import headpoduct1 from '../images/HeadPhone/headproduct-1.png'
import headpoduct2 from '../images/HeadPhone/headproduct-2.png'
import headpoduct3 from '../images/HeadPhone/headproduct-3.png'

//headphone3
import bitmap1 from '../images/HeadPhone/Bitmap.png';
import bitmap2 from '../images/HeadPhone/Bitmap-2.png';
import bitmap3 from '../images/HeadPhone/Bitmap-3.png';

// speaker 1
import speakes1 from '../images/SpearkerImage/Bitmap.png';
import speakes2 from '../images/SpearkerImage/Bitmap-2.png';
import speakes3 from '../images/SpearkerImage/Bitmap-3.png';

// Speaker 2
import boom1 from '../images/SpearkerImage/Speaker-1.png';
import boom2 from '../images/SpearkerImage/Speaker-2.png';
import boom3 from '../images/SpearkerImage/Speaker-3.png';

// EarPhone 1
import earbud1 from '../images/EarPhone/Bitmap.png';
import earbud2 from '../images/EarPhone/Bitmap-2.png';
import earbud3 from '../images/EarPhone/Bitmap-3.png';




export const headphones = [
  {
    id: 1,
    name: 'NEW PRODUCT',
    image: headphone2,
    product: 'XX99 Mark II',
    description: 'The new XX99 Mark II headphones is the pinnacle of pristine audio...',
    price: 2999,
    featureText: 'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
    link: 'SEE PRODUCT',
    href: '/product/1',
    sectionTtext1:"Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you'll never miss a beat.",
    sectionTtext2:"The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.",
    productIv: ['Headphone Unit', 'Replacement Earcups', 'User Manual', '3.5mm 5m Audio Cable', 'Travel Bag', ],
    images1:head1,
    images2:head2,
    images3:head3,
    images4:headphone1,
    images5:headphone3,
    images6: speaker1,
    
  },
  {
    id: 2,
    name: 'NEW PRODUCT',
    image: headphone1,
    product: 'XX99 Mark I',
    description: 'As the gold standard for headphones...',
    price: 1999,
    featureText: 'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go. ',
    link: 'SEE PRODUCT',
    href: '/product/2',
    sectionTtext1: "As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.",
    sectionTtext2: "From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.",
    productIv: ['Headphone Unit', 'Replacement Earcups', 'User Manual', '3.5mm 5m Audio Cable',],
    images1:headpoduct2,
    images2:headpoduct1,
    images3:headpoduct3,
    images4:headphone2,
    images5:headphone1,
    images6: speaker1 ,
  },
  {
    id: 3,
    name: 'NEW PRODUCT',
    image: headphone3,
    product: 'XX59',
    description: 'Enjoy your audio almost anywhere...',
    price: 999,
    featureText: 'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.',
    link: 'SEE PRODUCT',
    href: '/product/3',
    sectionTtext1: "These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.",
    sectionTtext2: "More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.",
    images1:bitmap1,
    images2:bitmap2,
    images3:bitmap3,
    productIv: ['Headphone Unit', 'Replacement Earcups', 'User Manual', '3.5mm 5m Audio Cable',],
    images4:headphone1,
    images5:headphone2,
    images6: speaker1,
  },
];



export const speaker = [
    {
      id:1,
      name: 'NEW PRODUCT',
      image: speaker1,
      product: 'ZX9SPEAKER',
      description: 'Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.',
      reverse:{},
      price: 4500,
      link: "SEE PRODUCT",
      href: '/speaker/1',
      sectionTtext1: "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).",
      sectionTtext2: "Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.",
      images1:speakes2,
      images2:speakes3,
      images3:speakes1,
      productIv: ['Speaker Unit','Speaker Cloth Panel', 'User Manual', '3.5mm 10m Audio Cable', '10m Optical Cable',],
      images4:speaker2,
      images5:headphone1,
      images6: headphone2 ,
    },
{
  id:2,
  name: 'NEW PRODUCT', 
  image: speaker2,
  product: 'ZX7SPEAKER', 
  price: 3500,
  description: 'Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.',
  reverse:{}, 
  link: "SEE PRODUCT", 
  href: '/speaker/2',
  sectionTtext1: "Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.",
  sectionTtext2: "The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.",
  images1:boom1,
  images2:boom2,
  images3:boom3,
  productIv:['Speaker Unit','Speaker Cloth Panel', 'User Manual', '3.5mm 7.5m Audio Cable', '7.5m Optical Cable',],
  images4:headphone2,
  images5:headphone1,
  images6: speaker1 ,
  },
]



export const earpohne = [
{
  id:1,
  name: 'NEW PRODUCT',
  image: earphones, 
  product: 'YX1 WIRELESSEARPHONES', 
  description: 'Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.', 
  href: '/earphone/1', 
  link:"SEE PRODUCT",
  price :599,
  sectionTtext1: "Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.",
  sectionTtext2: "The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.",
  images1:earbud1,
  images2:earbud2,
  images3:earbud3,
  productIv:['Earphone Unit','Multi-size Earplugs', 'User Manual', 'USB-C Charging Cable', 'Travel Pouch',]

}
]


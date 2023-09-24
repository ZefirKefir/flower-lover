import images from "./images";

const data = {
  flowers: [
    {
      name: 'Альстромерия',
      id: 34522,
    },
    {
      name: 'Ромашка',
      id: 56311,
    },
    {
      name: 'Гипсофила',
      id: 99274,
    },
    {
      name: 'Антуриум',
      id: 75314,
    },
    {
      name: 'Астильба',
      id: 84652,
    },
    {
      name: 'Диантус',
      id: 72552,
    },
    {
      name: 'Озомантус',
      id: 79812,
    },
    {
      name: 'Роза',
      id: 12457,
    },
    {
      name: 'Эустома',
      id: 99997,
    },
    {
      name: 'Аспарагус',
      id: 34812,
    },
    {
      name: 'Хризантема',
      id: 81956,
    },
    {
      name: 'Гвоздика',
      id: 10670,
    },
    {
      name: 'Астранция',
      id: 19553,
    },
    {
      name: 'Пион',
      id: 51922,
    },
    {
      name: 'Астрофитум',
      id: 12953,
    },
    {
      name: 'Ацидантера',
      id: 21122,
    },
    {
      name: 'Бакопа',
      id: 24625,
    },
    {
      name: 'Василёк',
      id: 39991,
    },
    {
      name: 'Вероника',
      id: 39993,
    },
    {
      name: 'Лизиантус',
      id: 39211,
    },
    {
      name: 'Бонсай',
      id: 39219,
    },
    {
      name: 'Гардения',
      id: 18528,
    },
    {
      name: 'Георгин',
      id: 26592,
    },
    {
      name: 'Гипоэстес',
      id: 18335,
    },
    {
      name: 'Гортензия',
      id: 35113,
    },
    {
      name: 'Гиморфотека',
      id: 28812,
    },
    {
      name: 'Хиперикум',
      id: 41311,
    },
    {
      name: 'Фрезия',
      id: 38564,
    },
    {
      name: 'Сильва Пинк',
      id: 41535,
    },
    {
      name: 'Озомантус',
      id: 12385,
    },
    {
      name: 'Жасмин',
      id: 21833,
    },
    {
      name: 'Ирис',
      id: 23411,
    },
    {
      name: 'Калибрахоа',
      id: 41231,
    },
    {
      name: 'Колеус',
      id: 21522,
    },
    {
      name: 'Лилия',
      id: 12991,
    },
    {
      name: 'Магнолия',
      id: 15666,
    },
    {
      name: 'Нарцисс',
      id: 12888,
    },
    {
      name: 'Нерине',
      id: 21882,
    },
    {
      name: 'Эквалипт',
      id: 22199,
    },
    {
      name: 'Сирень',
      id: 28555,
    },
    {
      name: 'Тюльпан',
      id: 28814,
    },
    {
      name: 'Подсолнух',
      id: 21413,
    },
    {
      name: 'Эрингиум',
      id: 12511,
    },
    {
      name: 'Вакс',
      id: 28128,
    },
    {
      name: 'Матиола',
      id: 28105,
    },
    {
      name: 'Калла',
      id: 12877,
    },
    {
      name: 'Статица',
      id: 23412,
    },
    {
      name: 'Гиперикум',
      id: 21182,
    },
    {
      name: 'Орхидея',
      id: 12177,
    },
    {
      name: 'Лаванда',
      id: 37667,
    },
  ],
  products: [
    {
      id: 'FMAA1S',
      name: 'Альстромерия',
      format: 'bouquet',
      categories: ['soft', 'pink', 'mono'],
      rating: 7.6,
      feature: '',
      price: 2000,
      src: images.products.product1,
      flowers_id: [34522],
      reviews: [
        {
          star: 5,
          text: 'Очень понравился букет, собран на уровне моей 10-илетней сестры, которая не брезгается лезть в самые дебри за цветками, чтобы собрать хороший букет. Впечатляет!',
          reviewer_name: 'Василий',
          review_date: new Date('October 10, 2021'),
        },
      ],
    },
    {
      id: 'BQZ9W8',
      name: 'Мерида',
      format: 'bouquet',
      categories: ['soft', 'light', 'mixed', 'chamomile', 'vase', 'collecto'],
      rating: 6.9,
      feature: '',
      price: 4500,
      src: images.products.product2,
      flowers_id: [34522, 56311],
      reviews: [],
    },
    {
      id: 'Y1JB95',
      name: 'Букет невесты Будапешт',
      format: 'bouquet',
      categories: ['soft', 'light', 'gypsophila', 'orange', 'pink', 'holiday', 'collecto'],
      rating: 8.5,
      feature: 'sale',
      price: 5500,
      actualPrice: 6000,
      src: images.products.product3,
      flowers_id: [34522, 12457, 99274],
      reviews: [
        {
          star: 5,
          text: 'Очаровал свою невесту этим букетом, аж отказалась приглашать своих пакостных родственников к себе на свадьбу. Спасибо!',
          reviewer_name: 'Дмитрий',
          review_date: new Date('March 5, 2022'),
        },
        {
          star: 4,
          text: 'Хотела купить маме, но цена слишком большая. Купила по скидке за накопленные карманные деньги. Теперь я на нуле, заебато',
          reviewer_name: 'Василиса',
          review_date: new Date('December 5, 2021')
        },
      ],
    },
    {
      id: 'HFVARV',
      name: 'Балерина',
      format: 'bouquet',
      categories: ['mixed', 'soft', 'light', 'gypsophila', 'vase', 'composition', 'collecto'],
      rating: 8.1,
      feature: '',
      price: 4000,
      src: images.products.product4,
      flowers_id: [99274, 75314, 84652, 12457, 79812, 72552],
      reviews: [],
    },
    {
      id: 'T13DST',
      name: 'Любовь',
      format: 'bouquet',
      categories: ['mixed', 'soft', 'light', 'pink', 'chrysanthemum', 'collecto', 'holiday', 'composition', 'popular'],
      rating: 8.7,
      feature: '',
      price: 7200,
      src: images.products.product5,
      flowers_id: [34812, 81956, 10670, 12457],
      reviews: [
        {
          star: 5,
          text: 'Купил девушке, за которой бегал 2 года пока её парень водил её вокруг да около. Итог: дала',
          reviewer_name: 'Владимир',
          review_date: new Date('April 20, 2023')
        },
      ],
    },
    {
      id: '063NYB',
      name: 'Ветерок в облаках',
      format: 'bouquet',
      categories: ['soft', 'light', 'pink', 'mono', 'popular'],
      rating: 8.7,
      feature: '',
      price: 15000,
      src: images.products.product6,
      flowers_id: [51922, 19553],
      reviews: [
        {
          star: 5,
          text: 'Женщина в чёрной маечке, которая держит цветок мне дала в тот же день. Отныне я не вёрджин. 5 звёзд из 5-и!',
          reviewer_name: 'Васёк',
          review_date: new Date('October 22, 2022'),
        },
        {
          star: 4,
          text: 'Не пожалел денег на дорогой букет, ибо у него были рейтинги хорошие. Результатом более-менее доволен, но 15к эта хрень не стоит. 4 звезды, и то с огроменной натяжкой...',
          reviewer_name: 'Дмитрий',
          review_date: new Date('March 11, 2023'),
        },
      ],
    },
    {
      id: 'P2YRDJ',
      name: 'Астрофитум в горшке',
      format: 'vase',
      categories: ['yellow', 'green', 'vase', 'dried'],
      rating: 6.7,
      feature: '',
      price: 450,
      src: images.products.product7,
      flowers_id: [12953],
      reviews: [],
    },
    {
      id: 'KIMC7C',
      name: 'Ацидантера',
      format: 'vase',
      categories: ['white', 'light',],
      rating: 6.9,
      feature: '',
      price: 350,
      src: images.products.product8,
      flowers_id: [21122],
      reviews: [],
    },
    {
      id: 'X65GJL',
      name: 'Бакопа',
      format: 'basket',
      categories: ['white', 'light', 'mono', 'popular'],
      rating: 7.7,
      feature: 'new',
      price: 1000,
      src: images.products.product9,
      flowers_id: [24625],
      reviews: [
        {
          star: 5,
          text: 'Оставил корзину с цветками рядом со своей консолью PlayStatiion 5, подходит по цвету и стилю',
          reviewer_name: 'Дмитрий',
          review_date: new Date('April 10, 2023'),
        },
      ],
    },
    {
      id: 'FW72RE',
      name: 'Корзина Васильков',
      format: 'basket',
      categories: ['soft', 'blue', 'mono'],
      rating: 6.4,
      feature: '',
      price: 300,
      src: images.products.product10,
      flowers_id: [39991],
      reviews: [],
    },
    {
      id: 'GUEHRY',
      name: 'Йеннифер',
      format: 'bouquet',
      categories: ['soft', 'mixed', 'pink', 'violet', 'yellow', 'collecto', 'composition'],
      rating: 7.9,
      feature: '',
      price: 8000,
      src: images.products.product11,
      flowers_id: [34522, 12457, 39993, 39211],
      reviews: [
        {
          star: 5,
          text: 'Восхитительный букет, меня не выкинули на море, а это о многом говорит)',
          reviewer_name: 'Геральт',
          review_date: new Date('April 2, 1272'),
        },
      ],
    },
    {
      id: 'CMD3M2',
      name: 'Мэнэбу',
      format: 'box',
      categories: ['green', 'vase', 'dried'],
      rating: 8.0,
      feature: '',
      price: 12500,
      src: images.products.product12,
      flowers_id: [39219],
      reviews: [
        {
          star: 3,
          text: 'Качество пососное, само деревцо приехало местами сломанное',
          reviewer_name: 'Джинн',
          review_date: new Date('April 12, 2019'),
        },
      ],
    },
    {
      id: '1K7JAC',
      name: 'Пинк Кьюти',
      format: 'bouquet',
      categories: ['soft', 'pink', 'mono', 'popular'],
      rating: 8.3,
      feature: '',
      price: 4300,
      src: images.products.product13,
      flowers_id: [18528],
      reviews: [
        {
          star: 5,
          text: 'Это самый красивый букет из всего ассортимента на сайте!',
          reviewer_name: 'Глеб',
          review_date: new Date('October 30, 2022'),
        },
        {
          star: 5,
          text: 'Моя сестра любит Хэллоу Китти и всё розовое, ей понравилось.',
          reviewer_name: 'Владислав',
          review_date: new Date('May 21, 2022'),
        },
      ],
    },
    {
      id: 'UDKGTR',
      name: 'Георгин',
      format: 'bouquet',
      categories: ['soft', 'light', 'white', 'pink', 'red', 'mixed', 'mono', 'composition', 'popular'],
      rating: 8.8,
      feature: '',
      price: 3500,
      src: images.products.product14,
      flowers_id: [26592],
      reviews: [
        {
          star: 5,
          text: 'Цвета выбраны классно',
          reviewer_name: 'Стас',
          review_date: new Date('August 3, 2023'),
        },
      ],
    },
    {
      id: '7M3XV3',
      name: 'Гипоэстес',
      format: 'vase',
      categories: ['pink', 'vase'],
      rating: 7.7,
      feature: '',
      price: 500,
      src: images.products.product15,
      flowers_id: [18335],
      reviews: [],
    },
    {
      id: 'EP3V1I',
      name: 'Письмо любви',
      format: 'envelope',
      categories: ['pink', 'yellow', 'soft', 'light', 'mixed', 'envelope', 'mono', 'holiday', 'popular'],
      rating: 8.2,
      feature: '',
      price: 3000,
      src: images.products.product16,
      flowers_id: [12457],
      reviews: [
        {
          star: 5,
          text: 'Название говорит за себя, призналась в любви к подруге. Она восприняла как шутку, 1 звезда!',
          reviewer_name: 'Ангелина',
          review_date: new Date('April 6, 2023'),
        },
      ],
    },
    {
      id: 'EZ0M04',
      name: 'День матери',
      format: 'bouquet',
      categories: ['pink', 'blue', 'soft', 'light', 'collecto', 'holiday', 'composition', 'popular'],
      rating: 8.1,
      feature: '',
      price: 2100,
      src: images.products.product17,
      flowers_id: [35113, 72552],
      reviews: [
        {
          star: 5,
          text: 'Причина оценки - улыбка матери. Спасибо!',
          reviewer_name: 'April',
          review_date: new Date('May 26, 2023'),
        },
      ],
    },
    {
      id: 'A2OVVU',
      name: 'Диморфотечный ящик счастья',
      format: 'box',
      categories: ['white'],
      rating: 7.3,
      feature: '',
      price: 1100,
      src: images.products.product18,
      flowers_id: [28812],
      reviews: [],
    },
    {
      id: 'XDIN8H',
      name: 'Женское сердце',
      format: 'bouquet',
      categories: ['soft', 'light', 'pink', 'mixed', 'collecto', 'holiday', 'composition', 'popular'],
      rating: 7.7,
      feature: 'sale',
      price: 4100,
      actualPrice: 4500,
      src: images.products.product19,
      flowers_id: [12385, 41535, 38564, 12457, 35113, 41311],
      reviews: [],
    },
    {
      id: 'HSUWQ8',
      name: 'Жасмин',
      format: 'box',
      categories: ['soft', 'white', 'vase', 'mono'],
      rating: 8.0,
      feature: '',
      price: 4000,
      src: images.products.product20,
      flowers_id: [21833],
      reviews: [],
    },
    {
      id: 'ID2QR5',
      name: 'Свадебный букет с ирисами',
      format: 'bouquet',
      categories: ['soft', 'violet', 'white', 'mixed', 'collecto', 'holiday'],
      rating: 7.0,
      feature: 'new',
      price: 3750,
      src: images.products.product21,
      flowers_id: [23411, 38564, 12457],
      reviews: [
        {
          star: 1,
          text: 'Жалею, что поженился, извиняюсь, но мне нужно где-то выплескнуть обиду',
          reviewer_name: 'Чёрт',
          review_date: new Date('Septemer 6, 2022'),
        },
      ],
    },
    {
      id: 'PS20OX',
      name: 'Калибрахоа',
      format: 'vase',
      categories: ['violet', 'vase'],
      rating: 6.0,
      feature: '',
      price: 250,
      src: images.products.product22,
      flowers_id: [41231],
      reviews: [],
    },
    {
      id: 'FFX3CW',
      name: 'Колеус',
      format: 'vase',
      categories: ['green', 'vase'],
      rating: 7.0,
      feature: '',
      price: 300,
      src: images.products.product23,
      flowers_id: [21522],
      reviews: [],
    },
    {
      id: '9VBO6O',
      name: 'Розы да лилии',
      format: 'bouquet',
      categories: ['soft', 'light', 'pink', 'mixed', 'holiday'],
      rating: 7.8,
      feature: 'sale',
      price: 2000,
      actualPrice: 2500,
      src: images.products.product24,
      flowers_id: [12991, 12457],
      reviews: [],
    },
    {
      id: 'WS4T8X',
      name: 'Повседневная радость',
      format: 'bouquet',
      categories: ['soft', 'mixed', 'red', 'pink', 'collecto', 'composition', 'popular'],
      rating: 8.1,
      feature: 'new',
      price: 3500,
      src: images.products.product25,
      flowers_id: [15666, 12457, 72552],
      reviews: [],
    },
    {
      id: '596EQ0',
      name: 'Нарциссова красота',
      format: 'bouquet',
      categories: ['soft', 'light', 'yellow', 'mono', 'popular'],
      rating: 8.1,
      feature: '',
      price: 4750,
      src: images.products.product26,
      flowers_id: [12888],
      reviews: [
        {
          star: 5,
          text: 'Обожаю видеть радость и улыбки близких. Благодарю вас от всей души!',
          reviewer_name: 'Максим',
          review_date: new Date('June 13, 2023'),
        },
        {
          star: 5,
          text: 'Рад пользоваться вашими услугами, ваши курьеры всегда добры и жизнерадостны. Наверное получают достаточно. Кстати, можно к вам устроиться на работу?',
          reviewer_name: 'Алексей',
          review_date: new Date('July 29, 2023'),
        },
      ],
    },
    {
      id: '56DTQA',
      name: 'Роуз Мизэри',
      format: 'bouquet',
      categories: ['soft', 'light', 'yellow', 'pink', 'mixed', 'collecto'],
      rating: 7.9,
      feature: '',
      price: 11000,
      src: images.products.product27,
      flowers_id: [12457, 28477, 22199, 21882],
      reviews: [],
    },
    {
      id: 'BY2GLE',
      name: 'На сиреневой луне',
      format: 'bouquet',
      categories: ['soft', 'light', 'violet', 'mono', 'popular'],
      rating: 7.9,
      feature: '',
      price: 750,
      src: images.products.product28,
      flowers_id: [28555],
      reviews: [],
    },
    {
      id: '0WXWZP',
      name: '11 тюльпанов',
      format: 'bouquet',
      categories: ['soft', 'light', 'violet', 'mono', 'popular'],
      rating: 8.0,
      feature: '',
      price: 3250,
      src: images.products.product29,
      flowers_id: [28814],
      reviews: [],
    },
    {
      id: 'TYASS3',
      name: 'Гармония',
      format: 'bouquet',
      categories: ['soft', 'light', 'yellow', 'blue', 'mixed', 'composition', 'collecto', 'holiday'],
      rating: 8.0,
      feature: '',
      price: 5000,
      src: images.products.product30,
      flowers_id: [28128, 22199, 12511, 21413],
      reviews: [
        {
          star: 4,
          text: 'Подсолнухи завяли к моменту получения букета. Но я не растерялся и просто убрал их. Без обид, но отнимаю звезду за проёб.',
          reviewer_name: 'Виталий',
          review_date: new Date('September 2, 2022'),
        },
      ],
    },
    {
      id: 'WYSAUF',
      name: 'Композиция «Angelique»',
      format: 'hatbox',
      categories: ['soft', 'light', 'composition', 'pink', 'mono', 'roses'],
      rating: 7.2,
      feature: '',
      price: 4000,
      src: images.products.product31,
      flowers_id: [12457],
      reviews: [],
    },
    {
      id: 'D1T71U',
      name: 'Букет «Хейли»',
      format: 'bouquet',
      categories: ['soft', 'light', 'orange', 'mono', 'roses'],
      rating: 8.9,
      feature: 'sale',
      price: 3000,
      actualPrice: 3500,
      src: images.products.product32,
      flowers_id: [12457, 22199],
      reviews: [
        {
          star: 5,
          text: 'Ляпота!',
          reviewer_name: 'Виктор',
          review_date: new Date('September 12, 2022'),
        },
        {
          star: 5,
          text: '',
          reviewer_name: 'Диана',
          review_date: new Date('July 11, 2023'),
        },
        {
          star: 5,
          text: 'Моё сердце наполнено счастьем, это лучшие моменты моей жизни. Оставлю ли я свой отзыв? Конечно!',
          reviewer_name: 'Антон',
          review_date: new Date('August 7, 2022'),
        },
      ],
    },
    {
      id: '4BZZQQ',
      name: 'Розовые альстромерии в коробке',
      format: 'hatbox',
      categories: ['soft', 'light', 'pink', 'mono', 'holiday', 'popular'],
      rating: 8.3,
      feature: '',
      price: 4250,
      src: images.products.product33,
      flowers_id: [34522],
      reviews: [],
    },
    {
      id: '9FN7L6',
      name: 'Послание с неба',
      format: 'bouquet',
      categories: ['soft', 'light', 'blue', 'chrysanthemum', 'mono', 'holiday', 'composition', 'popular'],
      rating: 8.3,
      feature: '',
      price: 2150,
      src: images.products.product34,
      flowers_id: [81956],
      reviews: [
        {
          star: 5,
          text: 'В жизни ничего красивее не видел..',
          reviewer_name: 'Андрей',
          review_date: new Date('May 17, 2023'),
        },
      ],
    },
    {
      id: 'NZ8ZYT',
      name: 'Композиция «Пандора»',
      format: 'basket',
      categories: ['composition', 'soft', 'light', 'mixed', 'pink', 'blue', 'collecto', 'holiday'],
      rating: 7.7,
      feature: '',
      price: 12500,
      src: images.products.product35,
      flowers_id: [12457, 28105, 22199, 10670, 39211, 35113],
      reviews: [],
    },
    {
      id: '64K8GK',
      name: 'Радуга',
      format: 'bouquet',
      categories: ['light', 'gypsophila', 'mixed', 'mono', 'holiday', 'popular'],
      rating: 8.7,
      feature: '',
      price: 4000,
      src: images.products.product36,
      flowers_id: [99274],
      reviews: [
        {
          star: 5,
          text: 'Подарила это своей девушке. Символично и красиво)',
          reviewer_name: 'Афродита',
          review_date: new Date('January 18, 2023'),
        },
        {
          star: 5,
          text: 'Отличный сервис, благодаря которому я сохранила свои отношения, подарила этой дуре на 8-ое марта. Привезли за 15 минут',
          reviewer_name: 'Ольга',
          review_date: new Date('March 9, 2023'),
        },
      ],
    },
    {
      id: 'HP12HI',
      name: 'Нежный комплимент',
      format: 'bouquet',
      categories: ['soft', 'mixed', 'pink', 'violet', 'mono', 'roses'],
      rating: 8.1,
      feature: '',
      price: 3500,
      src: images.products.product37,
      flowers_id: [12457, 22199],
      reviews: [],
    },
    {
      id: 'O5RCN9',
      name: 'Букет «Darling»',
      format: 'bouquet',
      categories: ['light', 'soft', 'pink', 'mono', 'popular'],
      rating: 8.1,
      feature: 'sale',
      price: 8500,
      actualPrice: 9000,
      src: images.products.product38,
      flowers_id: [51922, 22199],
      reviews: [],
    },
    {
      id: 'ERXPB8',
      name: 'Ласковый взгляд',
      format: 'bouquet',
      categories: ['light', 'soft', 'white', 'mono', 'composition'],
      rating: 8.1,
      feature: '',
      price: 4000,
      src: images.products.product39,
      flowers_id: [12877, 22199],
      reviews: [],
    },
    {
      id: '87B0V0',
      name: 'Послание от бабочек',
      format: 'envelope',
      categories: ['soft', 'envelope', 'pink', 'mixed', 'chrysanthemum', 'collecto', 'holiday'],
      rating: 6.8,
      feature: '',
      price: 3500,
      src: images.products.product40,
      flowers_id: [12457, 22199, 72552, 81956, 21182, 23412],
      reviews: [],
    },
    {
      id: 'L4U579',
      name: 'Норд Верона',
      format: 'bouquet',
      categories: ['soft', 'mixed', 'blue', 'white', 'pink', 'mono', 'composition', 'popular'],
      rating: 8.8,
      feature: '',
      price: 2850,
      src: images.products.product41,
      flowers_id: [35113],
      reviews: [
        {
          star: 5,
          text: 'Подарил своей единственной неповторимой матери, ибо она этого заслуживает. Благодарю вас за услугу!',
          reviewer_name: 'Эдуард',
          review_date: new Date('September 18, 2022'),
        },
        {
          star: 5,
          text: '',
          reviewer_name: 'Вадим',
          review_date: new Date('March 1, 2023'),
        },
      ],
    },
    {
      id: '4L5QFC',
      name: 'Норд Верона XL',
      format: 'bouquet',
      categories: ['soft', 'mixed', 'blue', 'white', 'pink', 'mono', 'composition'],
      rating: 8.2,
      feature: '',
      price: 7000,
      src: images.products.product42,
      flowers_id: [35113],
      reviews: [],
    },
    {
      id: '4JC6FM',
      name: 'Улыбка',
      format: 'bouquet',
      categories: ['soft', 'light', 'pink', 'mono', 'popular'],
      rating: 6.6,
      feature: '',
      price: 4000,
      src: images.products.product43,
      flowers_id: [10670],
      reviews: [],
    },
    {
      id: 'AA1SBQ',
      name: 'Вишнёвая магия',
      format: 'hatbox',
      categories: ['soft', 'light', 'pink', 'red', 'mixed', 'collecto', 'composition'],
      rating: 7.7,
      feature: '',
      price: 5250,
      src: images.products.product44,
      flowers_id: [12177, 99997, 12457],
      reviews: [],
    },
    {
      id: 'Z9W8Y1',
      name: 'Мия',
      format: 'bouquet',
      categories: ['soft', 'light', 'mixed', 'white', 'pink', 'collecto', 'composition'],
      rating: 8.5,
      feature: '',
      price: 5000,
      src: images.products.product45,
      flowers_id: [10670, 12177, 99997, 12457],
      reviews: [],
    },
    {
      id: 'JB95HF',
      name: 'Фиолетовая белизна',
      format: 'bouquet',
      categories: ['violet', 'white', 'mixed', 'soft', 'mono'],
      rating: 7.4,
      feature: '',
      price: 4750,
      src: images.products.product46,
      flowers_id: [23411, 28814],
      reviews: [],
    },
    {
      id: 'VARVT1',
      name: 'Лавандовая прохлада',
      format: 'bouquet',
      categories: ['violet', 'collecto', 'mono'],
      rating: 5.9,
      feature: '',
      price: 2100,
      src: images.products.product47,
      flowers_id: [37667],
      reviews: [],
    },
    {
      id: '3DST06',
      name: 'Тюльпаны с лавандой',
      format: 'bouquet',
      categories: ['violet', 'pink', 'mixed', 'light', 'mono'],
      rating: 7.0,
      feature: '',
      price: 5500,
      src: images.products.product48,
      flowers_id: [37667, 37667],
      reviews: [],
    },
    {
      id: '3NYBP2',
      name: 'Орхидеи Ультрамарин',
      format: 'bouquet',
      categories: ['violet', 'mono'],
      rating: 8.0,
      feature: '',
      price: 4500,
      src: images.products.product49,
      flowers_id: [12177],
      reviews: [],
    },
    {
      id: 'YRDJKI',
      name: 'Монобукет с 15-ю ирисами',
      format: 'bouquet',
      categories: ['violet', 'mono', 'popular'],
      rating: 7.1,
      feature: 'sale',
      price: 3250,
      actualPrice: 3500,
      src: images.products.product50,
      flowers_id: [23411],
      reviews: [],
    },

    // {
    //   id: 'MC7CX6',
    //   name: 'Carnation',
    //   price: 2000,
    //   src: images.flower1,
    //   feature: 'new',
    // },
    // {
    //   id: '5GJLFW',
    //   name: 'Orchid',
    //   price: 1500,
    //   src: images.flower2,
    //   feature: '',
    // },
    // {
    //   id: '72REGU',
    //   name: 'Lily',
    //   price: 3000,
    //   src: images.flower3,
    //   feature: '',
    // },
    // {
    //   id: 'EHRYCM',
    //   name: 'Rose',
    //   price: 1000,
    //   src: images.flower4,
    //   feature: 'sale',
    // },
  ],

  categories: [
    {
      name: 'gypsophila',
      displayName: 'Букеты из гипсофил',
    },
    {
      name: 'chamomile',
      displayName: 'Букеты из ромашек',
    },
    {
      name: 'chrysanthemum',
      displayName: 'Букеты из хризантем',
    },
    {
      name: 'vase',
      displayName: 'Комнатные цветы в горшках',
    },
    {
      name: 'mono',
      displayName: 'Монобукеты',
    },
    {
      name: 'collecto',
      displayName: 'Сборные букеты',
    },
    {
      name: 'holiday',
      displayName: 'Букет на праздник',
    },
    {
      name: 'composition',
      displayName: 'Композиции из цветов',
    },
    {
      name: 'envelope',
      displayName: 'Конверты',
    },
    {
      name: 'postcard',
      displayName: 'Открытки',
    },
    {
      name: 'present',
      displayName: 'Подарки',
    },
    {
      name: 'dried',
      displayName: 'Букеты из сухоцветов',
    },
    {
      name: 'balloons',
      displayName: 'Шары',
    },
    {
      name: 'popular',
      displayName: 'Популярное',
    },
    {
      name: 'roses',
      displayName: 'Букеты роз',
    },
    {
      name: 'funeral',
      displayName: 'Цветы на похороны',
    },
    {
      name: 'package',
      displayName: 'Упаковка подарков',
    },
  ],

  additional: [
    {
      name: 'fertilizer',
      title: 'Удобрения для срезанных цветов',
      descr: 'При указании об этом в пожеланиях к букету, мы приложим пакетик удобрения для вас',
      price: 500,
    },
    {
      name: 'signature',
      title: 'подпишем открытку',
      descr: 'В пожеланиях к букету укажите текст, какой хотите разместить и выберите на сайте саму открытку',
      price: 1,
    },
    {
      name: 'photo',
      title: 'Фото букета перед отправкой',
      descr: 'В примечании к заказу укажите об этом и мы отправим фото готового букета перед доставкой. В праздничные дни в связи с большой загруженностью такой возможности нет',
      price: 250,
    },
    {
      name: 'surprise',
      title: 'Букет-сюрприз',
      descr: 'Если хотите, чтобы получатель не знал, что ему вручат а также от кого, то укажите об этом в примечании к заказу',
      price: 750,
    },
  ],

  faq: [
    {
      title: 'БУДЕТ ЛИ ЗАКАЗАННЫЙ БУКЕТ В ТОЧНОСТИ СООТВЕТСТВОВАТЬ ЕГО ИЗОБРАЖЕНИЮ НА САЙТЕ?',
      descr: 'Букет собирается по индивидуальной матрице букета. Однако возможны случаи, когда нет необходимых цветов либо имеющиеся цветы отличаются от представленных на фото, и с согласования заказчика они могут быть заменены на аналогичные. Либо если флорист считает, что данные изменения не повлекут сильного изменения в образе букета, то самостоятельно может заменить некоторые цветы. И перед отправкой направляется фото заказчику, который утверждает получившийся букет. Каждый цветок отличается от другого, как и каждый букет будет индивидуальным, но в этом и есть его прелесть… в индивидуальности.',
    },
    {
      title: 'КАК ДОЛГО СТОЯТ БУКЕТЫ ИЗ СУХОЦВЕТОВ?',
      descr: 'Букеты из сухоцветов могут радовать глаз в течение продолжительного времени — от нескольких месяцев до нескольких лет.Длительность сохранения зависит от тщательности обращения, места хранения и качества самих сухоцветов.Соблюдение правильных условий может значительно продлить их привлекательность и свежесть.',
    },
    {
      title: 'ДЕЛАЕТЕ ЛИ ВЫ ФОТО ГОТОВОГО БУКЕТА ПЕРЕД ОТПРАВКОЙ?',
      descr: 'Да, конечно, мы готовы предоставить вам фотографию готового букета перед его отправкой. Мы понимаем, что важно иметь четкое представление о том, какой букет будет доставлен. Это дает вам возможность увидеть букет во всей его красе и удостовериться, что он соответствует вашим ожиданиям. Наша цель - обеспечить прозрачность и качество в каждом заказе.',
    },
    {
      title: 'А СКОЛЬКО ДОЛЖНЫ ПРОСТОЯТЬ ЦВЕТЫ В БУКЕТЕ?',
      descr: 'Срок, на который цветы в букете могут продержаться свою свежесть, зависит от нескольких факторов, таких как типы цветов, условия хранения и ухода. В среднем, свежесть букета может сохраняться от нескольких дней до двух недель. Однако, есть цветы, которые дольше сохраняют свою свежесть, например, хризантемы, герберы, альстромерии, лилии. Регулярное обрезание стеблей, смена воды и избегание прямого солнечного света могут помочь продлить срок службы букета.',
    },
    {
      title: 'ЕСТЬ ЛИ ДОСТАВКА ЗА ПРЕДЕЛЫ МКАД?',
      descr: 'Да, у нас предусмотрена услуга доставки за пределы МКАД. Мы рады предложить удобную и надежную доставку нашим клиентам в различные места, не ограничиваясь только Московской областью. Наша команда работает, чтобы ваш букет достиг вас в сохранности и свежести, независимо от расстояния.',
    },
    {
      title: 'КАК ОПРЕДЕЛИТЬ СВЕЖИЕ ЛИ ЦВЕТЫ?',
      descr: 'Чтобы определить свежесть цветов, взгляните на лепестки и бутоны - они должны быть яркими и без пожелтений. Листья должны быть зелеными и без пятен, а запах - приятным. Стебли должны быть прочными, вода в вазе - чистой, а стебли обрезаны под углом. Избегайте цветов с поврежденными лепестками или сломанными стеблями. Эти простые признаки помогут определить, насколько свежи цветы.',
    },
    {
      title: 'ЧЕМ ОТЛИЧАЕТСЯ БЕЛОРУССКАЯ РОЗА ОТ ИМПОРТНОЙ?',
      descr: 'Белорусская роза произрастает в Беларуси, что может влиять на её адаптацию к местным климатическим условиям. Импортные розы, с другой стороны, растут в разных странах с разнообразными климатами и почвами. Поэтому белорусские розы могут иметь определенную уникальность, а импортные розы могут быть разнообразными по цветам, размерам и ароматам в зависимости от их происхождения.',
    },
  ],
}


export default data;
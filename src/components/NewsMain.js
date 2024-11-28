import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class NewsMain extends Component {

    news = 
        [
            {
                "source": {
                    "id": null,
                    "name": "Cornucopia.se"
                },
                "author": "Lars Wilderang",
                "title": "Blandad börsondag i Asien – höjda räntor på CSN, men sänkt på skattekontot – skyhöga elpriser tillbaka i hela landet, reglerprismarknaden har kollapsat",
                "description": "Börserna går blandat i de asiatiska tidszonerna. Räntorna på CSN:s studielån höjs men räntorna på medel på skattkonto sänks, och då CSN-räntor inte är avdragsgilla är det nästan billigare att lösa dem med bolån, om än tillfälligt. De skyhöga elpriserna är til…",
                "url": "https://cornucopia.se/2024/11/blandad-borsondag-i-asien-hojda-rantor-pa-csn-men-sankt-pa-skattekontot-skyhoga-elpriser-tillbaka-i-hela-landet-reglerprismarknaden-har-kollapsat/",
                "urlToImage": "https://cornucopia.se/wp-content/uploads/2024/11/goteborg_statens_servicecenter.jpeg",
                "publishedAt": "2024-11-27T07:05:38Z",
                "content": "18Artikeln innehåller annonslänkar för Hemsol.\r\nBörserna går blandat i de asiatiska tidszonerna. Räntorna på CSN:s studielån höjs men räntorna på medel på skattkonto sänks, och då CSN-räntor inte är … [+7144 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Expresso.pt"
                },
                "author": "Margarida Cardoso",
                "title": "Marisa está entre os 350 desempregados da Coindu e sabe porquê: \"Não há mais projetos para nós, não podemos concorrer com o norte de África\"",
                "description": "<p>A Coindu, empresa especializada em assentos automóveis, até admite crescer no México. Mas em Portugal, onde ainda faz estofos para a Tesla, as coisas estão cada vez mais difíceis e isso é também válido para outras indústrias</p> <p> </p>",
                "url": "https://expresso.pt/economia/industria/2024-11-27-marisa-esta-entre-os-350-desempregados-da-coindu-e-sabe-porque-nao-ha-mais-projetos-para-nos-nao-podemos-concorrer-com-o-norte-de-africa-f2f931cb",
                "urlToImage": "https://images.impresa.pt/expresso/2018-09-28-industria-automovel-0968567c/1.91x1?wm=true&outputFormat=jpeg",
                "publishedAt": "2024-11-27T07:05:37Z",
                "content": "Dizem-nos que Portugal começa a ter dificuldades em atrair encomendas de clientes estrangeiros pelos ordenados, mas se formos ver os nossos salários nem são altos, rondam os 900 euros, diz ao Express… [+459 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Maclife.de"
                },
                "author": "Paul Schneider",
                "title": "Tesla plant Apple-Watch-App: Bald dein Elektroauto per Smartwatch öffnen?",
                "description": "Tesla arbeitet an einer Apple-Watch-App, die als digitaler Schlüssel für kompatible Elektroautos fungieren soll. Was bedeutet das für Besitzende? (Weiterlesen)",
                "url": "https://www.maclife.de/news/tesla-apple-watch-app-smartwatch-digitaler-autoschluessel-geplant-100125165.html",
                "urlToImage": "https://www.maclife.de/media/maclife/styles/tec_frontend_opengraph/public/images/editors/2024_48/image-125165--4615246.jpg?itok=9w0XJlS5",
                "publishedAt": "2024-11-27T07:03:21Z",
                "content": "Tesla, bekannt für seine innovativen Elektrofahrzeuge, plant offenbar einen weiteren Schritt in Richtung Digitalisierung und Benutzerfreundlichkeit. Wie kürzlich bekannt wurde, arbeitet der Elektroau… [+3817 chars]"
            },
            {
                "source": {
                    "id": "abc-news",
                    "name": "ABC News"
                },
                "author": "DAVID MCHUGH Associated Press, ALEXA ST. JOHN Associated Press, KEN MORITSUGU Associated Press",
                "title": "After fast start, electric cars need a recharge as range limits, cost leave some drivers skeptical",
                "description": "While sales of electric vehicles surge in China, the spread of more environmentally friendly vehicles is stumbling in the United States and Europe as carmakers and governments struggle to meet years-old promises about affordability and charging stations",
                "url": "https://abcnews.go.com/Business/wireStory/after-fast-start-electric-cars-recharge-range-limits-116263829",
                "urlToImage": "https://i.abcnewsfe.com/a/fc8621b7-6c93-43f2-b73a-a6629e806221/wirestory_b6a432557ac314d02654008bfbaa09fb_16x9.jpg?w=1600",
                "publishedAt": "2024-11-27T07:02:23Z",
                "content": "DETROIT -- While sales of electric vehicles surge in China, adoption of more environmentally friendly vehicles is stumbling in the United States and Europe as carmakers and governments struggle to me… [+7203 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Diariomotor.com"
                },
                "author": "Alejandro González",
                "title": "Europa se enfrenta al cierre de plantas y quiere frenar la llegada de coches chinos, pero este nuevo fabricante ha empezado en España su producción gracias a China",
                "description": "Luces y sombras son las que vive la industria del automóvil en el Viejo Continente actualmente debido a la combinación de varios factores que, parece que de manera irremediable, acabarán por desencadenar el cierre de varias plantas que hasta la fecha han teni…",
                "url": "https://www.diariomotor.com/noticia/fabricas-volskwagen-fabricante-esapanol-produccion-coches-chinos/",
                "urlToImage": "https://www.diariomotor.com/imagenes/2024/11/ebro-comienza-produccion-1125055.jpg?width=1200",
                "publishedAt": "2024-11-27T07:00:47Z",
                "content": "Luces y sombras son las que vive la industria del automóvil en el Viejo Continente actualmente debido a la combinación de varios factores que, parece que de manera irremediable, acabarán por desencad… [+4896 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Hibridosyelectricos.com"
                },
                "author": "Enrique Espinós",
                "title": "La razón por la que los coches eléctricos sufren más choques traseros que golpes en su parte frontal",
                "description": "Los coches eléctricos se diferencian de los coches térmicos por su modo de propulsión, por la presencia de una batería, por un menor mantenimiento y, también, por una distinta tipología en los accidentes que sufren. Sí, es así. Un estudio de Mitchell, una com…",
                "url": "https://www.hibridosyelectricos.com/coches/razon-por-coches-electricos-sufren-mas-choques-traseros-golpes-en-su-parte-frontal_77187_102.html",
                "urlToImage": "https://www.hibridosyelectricos.com/uploads/s1/87/26/81/choque-por-alcance-impacto-posterior-coche-electrico-tesla_17_2000x1126.jpeg",
                "publishedAt": "2024-11-27T07:00:00Z",
                "content": "Los coches eléctricos se diferencian de los coches térmicos por su modo de propulsión, por la presencia de una batería, por un menor mantenimiento y, también, por una distinta tipología en los accide… [+3872 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Europapress.es"
                },
                "author": null,
                "title": "Adigital y EsTech piden mejorar la inversión en las 'scaleups' y avanzar hacia un Ibex 35 \"más tecnológico\"",
                "description": "Adigital, la asociación de la economía digital, y la plataforma EsTech, que reúne a las principales tecnológicas españolas con altas perspectivas de crecimiento, han suscrito un manifiesto en el que plantean una serie de medidas dirigidas a mejorar las condic…",
                "url": "https://www.europapress.es/economia/noticia-adigital-estech-piden-mejorar-inversion-scaleups-avanzar-ibex-35-mas-tecnologico-20241127075954.html",
                "urlToImage": "https://img.europapress.es/fotoweb/fotonoticia_20241127075954_1200.jpg",
                "publishedAt": "2024-11-27T06:59:54Z",
                "content": "MADRID 27 Nov. (EUROPA PRESS) - \r\n Adigital, la asociación de la economía digital, y la plataforma EsTech, que reúne a las principales tecnológicas españolas con altas perspectivas de crecimiento, ha… [+5656 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Vz.ru"
                },
                "author": null,
                "title": "Маск заявил, что пилотируемая авиация не сможет выжить в будущих войнах",
                "description": "Американский бизнгесмен Илон Маск считает, что будущее войн заключается в использовании дронов и гиперзвуковых ракет, что оставляет пилотируемые истребители без шансов на выживание. Илон Маск, основатель компаний Tesla и SpaceX, сделал заявление в социальной …",
                "url": "https://vz.ru/news/2024/11/27/1300154.html",
                "urlToImage": "https://img.vz.ru/upimg/soc/soc_1300154.png",
                "publishedAt": "2024-11-27T06:59:49Z",
                "content": "« , , . , «», , , », . \r\n« , , , , . . . , », . \r\n« . , 4,5 . , 2,3 . . «». , 120 », . \r\n« . , , . , », . \r\n« , . , , , - . , », . \r\n« . . , . », . \r\n , , , . , , , , . , , , 1,5 . . « , « », . \r\n , … [+111 chars]"
            },
            {
                "source": {
                    "id": "financial-post",
                    "name": "Financial Post"
                },
                "author": "The Associated Press",
                "title": "After fast start, electric cars need a recharge as range limits, cost leave some drivers skeptical",
                "description": "DETROIT (AP) — While sales of electric vehicles surge in China, adoption of more environmentally friendly vehicles is stumbling in the United States and Europe as carmakers and governments struggle to meet years-old promises about affordability and charging s…",
                "url": "https://financialpost.com/pmn/after-fast-start-electric-cars-need-a-recharge-as-range-limits-cost-leave-some-drivers-skeptical",
                "urlToImage": null,
                "publishedAt": "2024-11-27T06:55:00Z",
                "content": "Author of the article:\r\nArticle content\r\nDETROIT (AP) While sales of electric vehicles surge in China, adoption of more environmentally friendly vehicles is stumbling in the United States and Europe … [+10308 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Frandroid"
                },
                "author": "Yann Lethuillier",
                "title": "Voici à quel point la taille des pneus et des jantes influe sur l’autonomie des voitures électriques",
                "description": "Une voiture avec de grandes jantes, c'est souvent plus jolie qu'avec de petites roues. Pourtant, la taille de ces mêmes jantes, mais aussi celles des pneus, peut grandement influer sur l'autonomie d'une voiture électrique, et beaucoup plus qu'on ne le pense p…",
                "url": "https://www.frandroid.com/survoltes/2411578_voici-a-quel-point-la-taille-des-pneus-et-des-jantes-influe-sur-lautonomie-des-voitures-electriques",
                "urlToImage": "https://images.frandroid.com/wp-content/uploads/2024/04/tesla-model-3-performances-2024-frandroid-capture-decran-2024-04-23-a-183833.jpg",
                "publishedAt": "2024-11-27T06:55:00Z",
                "content": "Une voiture avec de grandes jantes, c’est souvent plus jolie qu’avec de petites roues. Pourtant, la taille de ces mêmes jantes, mais aussi celles des pneus, peut grandement influer sur l’autonomie d’… [+9077 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "[Removed]"
                },
                "author": null,
                "title": "[Removed]",
                "description": "[Removed]",
                "url": "https://removed.com",
                "urlToImage": null,
                "publishedAt": "2024-11-27T06:53:08Z",
                "content": "[Removed]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Yahoo Entertainment"
                },
                "author": "DAVID McHUGH, ALEXA ST. JOHN and KEN MORITSUGU",
                "title": "After fast start, electric cars need a recharge as range limits, cost leave some drivers skeptical",
                "description": "While sales of electric vehicles surge in China, adoption of more environmentally friendly vehicles is stumbling in the United States and Europe as carmakers...",
                "url": "https://www.yahoo.com/news/fast-start-electric-cars-recharge-065307630.html",
                "urlToImage": "https://s.yimg.com/ny/api/res/1.2/a2c73iygZKWb87Vj7r7rrw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/ap.org/fefe83cfef35333bbc096e92044d5355",
                "publishedAt": "2024-11-27T06:53:07Z",
                "content": "Yahoo is using AI to generate takeaways from this article. This means the info may not always match what's in the article. Reporting mistakes helps us improve the experience.Generate Key Takeaways\r\nD… [+7613 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Overclockers.ru"
                },
                "author": "Zelikman",
                "title": "BYD призывает своих поставщиков снизить стоимость комплектующих",
                "description": "Компания намерена увеличить свою долю на китайском рынке в 2025 году",
                "url": "https://overclockers.ru/blog/Zelikman/show/193596/BYD-prizyvaet-svoih-postavschikov-snizit-stoimost-komplektujuschih",
                "urlToImage": "https://overclockers.ru/st/legacy/blog/413830/592097_O.jpg",
                "publishedAt": "2024-11-27T06:47:50Z",
                "content": "Bloomberg, BYD . .\r\n  , , 10% .   , . , , .\r\n  , Volkswagen AG Stellantis NV, , Xpeng Zhejiang Leapmotor Technology, . HiPhi WM Motor .\r\n  BYD , . , .\r\n  . Tesla, 21,9%, ."
            },
            {
                "source": {
                    "id": null,
                    "name": "Biztoc.com"
                },
                "author": "benzinga.com",
                "title": "Tesla Sweetens Referral Program, Allowing Customers To Earn Up To $10,000 As Elon Musk's EV Giant Races To 500K Q4 Delivery Target",
                "description": "Tesla Inc. (NASDAQ:TSLA) on Tuesday revamped its referral program across North America, as it looks to race to its delivery target of 515,000 vehicles in the fourth quarter.\nWhat Happened: Tesla's updated referral program includes enhanced discounts and rewar…",
                "url": "https://biztoc.com/x/c059ec6eec57bbaa",
                "urlToImage": "https://biztoc.com/cdn/c059ec6eec57bbaa_s.webp",
                "publishedAt": "2024-11-27T06:39:32Z",
                "content": "Tesla Inc. (NASDAQ:TSLA) on Tuesday revamped its referral program across North America, as it looks to race to its delivery target of 515,000 vehicles in the fourth quarter.What Happened: Tesla's upd… [+145 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Portfolio.hu"
                },
                "author": "Portfolio.hu",
                "title": "Kiszivárgott: felpöröghet az árháború",
                "description": "Kína vezető elektromos járműgyártója, a BYD további árcsökkentéseket kér a következő két évben a beszállítóitól. A vállalat lépése előrevetíti a kínai autópiacon már két éve zajló árháború további kiéleződését - tudósított a Bloomberg.",
                "url": "https://www.portfolio.hu/gazdasag/20241127/kiszivargott-felporoghet-az-arhaboru-725858",
                "urlToImage": "https://pcdn.hu/articles/images-md/k/i/n/kina-autoipar-elektromos-auto-beszallito-arverseny-arcsokkentes-717894.jpg",
                "publishedAt": "2024-11-27T06:36:00Z",
                "content": "A hír egy állítólagos vállalati e-mail kiszivárgásával került napvilágra, amely 10%-os árcsökkentést kért egy meg nem nevezett beszállítótól januártól kezdden.\r\nA kínai autópiacon dúló árverseny már … [+1631 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Digital Journal"
                },
                "author": "AFP",
                "title": "Vietnamese EV maker Vinfast reports $550 million Q3 loss",
                "description": "Vietnamese electric vehicle manufacturer VinFast reported a net loss of $550 million for the third quarter, less than the same period last year as the firm recorded an uptick in sales. The communist state’s first homegrown car manufacturer is aiming to compet…",
                "url": "https://www.digitaljournal.com/world/vietnamese-ev-maker-vinfast-reports-550-million-q3-loss/article",
                "urlToImage": "https://www.digitaljournal.com/wp-content/uploads/2024/11/c39c30eaf4a0e608792719b3b938c95b823f9551.jpg",
                "publishedAt": "2024-11-27T06:27:33Z",
                "content": "A Vinfast electric car travels down a street in Hanoi - Copyright AFP Nhac NGUYEN\r\nVietnamese electric vehicle manufacturer VinFast reported a net loss of $550 million for the third quarter, less tha… [+1532 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "DIE WELT"
                },
                "author": "Christian Dustmann, Jan Knuf",
                "title": "Mit dem Vorsprung durch Technik ist es vorbei",
                "description": "Die deutsche Autoindustrie ist in der Krise. China profitiert von den radikalen Umwälzungen durch Elektromobilität und krempelt den Weltmarkt um. Aber es gibt positive Entwicklungen aus Sicht heimischer Unternehmen. Und Deutschland hat einen großen Vorteil.",
                "url": "https://www.welt.de/debatte/kommentare/article254677898/Deutsche-Automobilindustrie-Kein-Vorsprung-durch-Technik-mehr.html",
                "urlToImage": "https://img.welt.de/img/debatte/kommentare/mobile254677896/6267936507-ci16x9-w1200/Umstieg-auf-Elektromobilitaet-Volkswagen-Werk-in-Emden.jpg",
                "publishedAt": "2024-11-27T06:22:26Z",
                "content": "Die deutsche Autoindustrie ist in der Krise. China profitiert von den radikalen Umwälzungen durch Elektromobilität und krempelt den Weltmarkt um. Aber es gibt positive Entwicklungen aus Sicht heimisc… [+5397 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Vz.ru"
                },
                "author": null,
                "title": "Маск обвинил Байдена в финансировании «вечной войны», указав на запрос помощи Украине",
                "description": "Американский предприниматель Илон Маск обвинил президента США Джо Байдена в том, что его администрация финансирует «вечную войну», в ответ на сообщения о запросе дополнительных 24 млрд долларов на помощь Украине. Илон Маск, американский предприниматель и осно…",
                "url": "https://vz.ru/news/2024/11/27/1300144.html",
                "urlToImage": "https://img.vz.ru/upimg/soc/soc_1300144.png",
                "publishedAt": "2024-11-27T06:15:48Z",
                "content": "« , , . , «», , , », . \r\n« , , , , . . . , », . \r\n« . , 4,5 . , 2,3 . . «». , 120 », . \r\n« . , , . , », . \r\n« , . , , , - . , », . \r\n« . . , . », . \r\n , , , . , , , , . , , , 1,5 . . « , « », . \r\n , … [+111 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Francetvinfo.fr"
                },
                "author": null,
                "title": "Elon Musk appelle à remplacer les avions de combat par des drones : \"On ne va pas faire la guerre qu'avec des robots\", estime le général Jean-Patrick Gaviard",
                "description": "Le bras droit de Donald Trump s'en est pris lundi aux avions de combat modernes, affirmant que les drones représentaient le futur des conflits dans les airs.",
                "url": "https://www.francetvinfo.fr/societe/armee-securite-defense/elon-musk-appelle-a-remplacer-les-avions-de-combat-par-des-drones-on-ne-va-pas-faire-la-guerre-qu-avec-des-robots-estime-le-general-jean-patrick-gaviard_6920591.html",
                "urlToImage": "https://www.francetvinfo.fr/pictures/vPE6YmW_JEiMqPZ-gerypGw8a8w/0x0:3883x2183/1500x843/2024/11/26/f-35-6745e22013ff3502721585.jpg",
                "publishedAt": "2024-11-27T06:10:24Z",
                "content": "Des avions de combat avec un pilote dépassé par les drones ? Le patron de SpaceX et Tesla, Elon Musk, a ciblé sur sa plateforme X \"les avions de combat avec pilotes\" qui \"sont obsolètes à l'ère des d… [+5303 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "The Diplomat"
                },
                "author": "Shannon",
                "title": "Listening to China’s Economic Whisperers",
                "description": "The voices shaping economic strategy extend beyond the Communist Party’s inner circle to include a select “brain trust” of prominent economists.",
                "url": "https://thediplomat.com/2024/11/listening-to-chinas-economic-whisperers/",
                "urlToImage": "https://thediplomat.com/wp-content/uploads/2024/09/sizes/td-story-s-2/thediplomat_2024-09-24-122125.jpg",
                "publishedAt": "2024-11-27T06:07:46Z",
                "content": "Who truly has Beijings ear when it comes to economic policymaking? As China navigates a period of profound economic challenges, this question has taken on new urgency.\r\nWhile outsiders often perceive… [+26164 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Investing.com"
                },
                "author": "Reuters",
                "title": "Exclusive-China's Hesai to halve lidar prices next year, sees wide adoption in electric cars",
                "description": "Exclusive-China's Hesai to halve lidar prices next year, sees wide adoption in electric cars",
                "url": "https://www.investing.com/news/stock-market-news/exclusivechinas-hesai-to-halve-lidar-prices-next-year-sees-wide-adoption-in-electric-cars-3743661",
                "urlToImage": "https://i-invdn-com.investing.com/news/LYNXNPEB9606Q_L.jpg",
                "publishedAt": "2024-11-27T06:06:31Z",
                "content": "SHANGHAI (Reuters) - China's Hesai Group, the world's largest maker of lidar sensors for autonomous driving, said it plans to slash the price of its key product by half next year which should lead to… [+2706 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Yahoo Entertainment"
                },
                "author": "Reuters",
                "title": "Exclusive-China's Hesai to halve lidar prices next year, sees wide adoption in electric cars",
                "description": "China's Hesai Group, the world's largest maker of lidar sensors for autonomous driving, said it plans to slash the price of its key product by half next year...",
                "url": "https://finance.yahoo.com/news/exclusive-chinas-hesai-halve-lidar-060141352.html",
                "urlToImage": "https://media.zenfs.com/en/reuters-finance.com/05f32a4206ada406de5cc4d338297b90",
                "publishedAt": "2024-11-27T06:01:41Z",
                "content": "Hesai Group plans to slash the price of its key product by half next year, which should lead to far wider adoption of the technology in electric cars. The next-generation lidar product ATX for advanc… [+4230 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Presse-citron"
                },
                "author": "Mathilde Rochefort",
                "title": "Quand les grands noms de la Silicon Valley s’invitent dans l’administration Trump",
                "description": "L’effet Elon Musk…",
                "url": "https://www.presse-citron.net/quand-les-grands-noms-de-la-silicon-valley-sinvitent-dans-ladministration-trump/",
                "urlToImage": "https://www.presse-citron.net/app/uploads/2024/11/donald-trump-2.jpg",
                "publishedAt": "2024-11-27T06:00:09Z",
                "content": "Plusieurs grands noms dans le secteur du capital-risque sont appelés pour aider les équipes de Donald Trump pendant leur transition. Une dynamique qui pose question, dautant plus lorsque lon prend en… [+2986 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Www.e15.cz"
                },
                "author": "Václav Kinský",
                "title": "Evropa a její kapitálový problém. Pomohla by jí jednotná burza dohnat Spojené státy?",
                "description": "Vítejte u nového vydání investičního newsletteru. Podzim je v plném proudu a ze všech rohů se na nás valí vánoční atmosféra. Finanční trhy zůstávají pořád v pozitivní náladě po amerických volbách a bitcoin stále klepe na stotisícové dveře. Doufám tedy, že jst…",
                "url": "https://www.e15.cz/investicni-newsletter/evropa-a-jeji-kapitalovy-problem-pomohla-by-ji-jednotna-burza-dohnat-spojene-staty-1420424",
                "urlToImage": "https://1884403144.rsc.cdn77.org/foto/akcie-burza-burzy/MTIwMHg2MzAvZmlsdGVyczpub191cHNjYWxlKDEpOndhdGVybWFyayhodHRwczovL2ltZy5jbmNlbnRlci5jei9kaXN0L2Fzc2V0cy9lMTUvd2F0ZXJtYXJrLWUxNS5wbmcsLTEwLDEwLDApL2ltZw/9280302.jpg?v=0&st=jbAEVWfIYn6fR4zLDrDPVlL7yGyn3iqzZvodHhqAA74&ts=1600812000&e=0",
                "publishedAt": "2024-11-27T06:00:00Z",
                "content": "Vítejte u nového vydání investiního newsletteru. Podzim je v plném proudu a ze vech roh se na nás valí vánoní atmosféra. Finanní trhy zstávají poád v pozitivní nálad po amerických volbách a bitcoin s… [+3076 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Hurriyet.com.tr"
                },
                "author": "Deniz SİPAHİ",
                "title": "Eski alışkanlıklar tarihe gömebilir miyiz",
                "description": "BAZEN bir haberi okurken zihninizde bir film canlanır. Bu kez karşımda bir Hollywood senaryosu duruyor. Başrolde Elon Musk, yanında Vivek Ramaswamy, arkalarında ise Donald Trump… Yeni yönetim, Amerikan hükümetini verimlilikle devrimleştirmek için kolları sıva…",
                "url": "https://www.hurriyet.com.tr/yazarlar/deniz-sipahi/eski-aliskanliklar-tarihe-gomebilir-miyiz-42606614",
                "urlToImage": "https://image.hurimg.com/i/hurriyet/75/0x0/58c64c7cc03c0e243c5a2afa.jpg",
                "publishedAt": "2024-11-27T05:53:00Z",
                "content": "p&gt; Muskn, SpaceXte uzaya roket gönderen, Tesla ile elektrikli otomobil devrimini balatan o kararl tavrn biliyoruz. imdi ayn Musk, ABDnin devasa bürokrasisini yeniden ekillendirecekmi. Hükümetin DO… [+5813 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Vz.ru"
                },
                "author": null,
                "title": "Экономика: Три сценария торговой войны Трампа с Китаем",
                "description": "Избранный президент США Дональд Трамп предпринял атаку на соседей - Мексику и Канаду, и, конечно, на своего основного экономического противника - Китай. Трамп пригрозил ввести пошлины на все товары из этих стран. Эксперты называют три варианта развития торгов…",
                "url": "https://vz.ru/economy/2024/11/27/1300055.html",
                "urlToImage": "https://img.vz.ru/upimg/soc/soc_1300055.png",
                "publishedAt": "2024-11-27T05:50:00Z",
                "content": ", . , 25% , , 2025 . , , .\r\n , 2022 . .\r\n . , , « , ».\r\n . , . : 60% , 20% . 10%. , . , . \r\n, , , . 800 , .\r\n , . , 25% . , , , . . , , , . \r\n . « . , . , », , Freedom Finance Global.\r\n , ( ) , , , ,… [+234 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Faz.net"
                },
                "author": "Holger Schmidt",
                "title": "Elon Musk will Nvidia-Chips für neun Milliarden Dollar bestellen",
                "description": "Der Tesla-Gründer läutet die nächste Investitionsrunde in der Künstlichen Intelligenz ein. Doch Nvidia hat schon die Weichen über die übernächste Wachstumswelle gestellt.",
                "url": "https://www.faz.net/pro/digitalwirtschaft/kuenstliche-intelligenz/elon-musk-will-nvidia-chips-fuer-neun-milliarden-dollar-bestellen-110135321.html",
                "urlToImage": "https://www.faz.net/faz-share-logo.jpg",
                "publishedAt": "2024-11-27T05:40:00Z",
                "content": "Elon Musk und Nvidia-Chef Jensen Huang können gut miteinander. Mal lobt der eine (Huang) den anderen (Musk), in nur 19 Tagen ein Rechenzentrum hochgezogen zu haben, für das normalerweise drei Jahre b… [+366 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "People.cn"
                },
                "author": "F_400991",
                "title": "California to provide rebates for zero-emission vehicles if federal tax credit eliminated by incoming Trump administration",
                "description": "LOS ANGELES, Nov. 26 (Xinhua) -- California Governor Gavin Newsom said on Monday the western U.S. st",
                "url": "http://en.people.cn/n3/2024/1127/c90000-20247359.html",
                "urlToImage": null,
                "publishedAt": "2024-11-27T05:34:14Z",
                "content": "(Xinhua) 13:14, November 27, 2024\r\nLOS ANGELES, Nov. 26 (Xinhua) -- California Governor Gavin Newsom said on Monday the western U.S. state will step in to provide rebates for zero-emission vehicle (Z… [+2750 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Businessinsider.com.pl"
                },
                "author": null,
                "title": "Spółki motoryzacyjne w dół po słowach Donalda Trumpa. Z jednym wyjątkiem",
                "description": "Kursy akcji producentów samochodów spadały we wtorek po zapowiedzi amerykańskiego prezydenta elekta Donalda Trumpa dotyczącej nałożenia 25-procentowych ceł na wszystkie towary z Kanady i Meksyku.",
                "url": "https://businessinsider.com.pl/gospodarka/spolki-motoryzacyjne-w-dol-po-slowach-donalda-trumpa-eksperci-komentuja/8tx0h6w",
                "urlToImage": "https://ocdn.eu/pulscms-transforms/1/pnlk9kpTURBXy8xYjliZDg3MGM1ZjI4ZGQ4MzA1MjE2OGQ4MmM4OTRhMS5qcGeSlQMAzH_NEADNCQCTBc0EsM0Cdt4AAaEwAQ",
                "publishedAt": "2024-11-27T05:33:00Z",
                "content": "\"20 stycznia, jako jedno z moich wielu pierwszych rozporzdze wykonawczych, podpisz wszystkie niezbdne dokumenty, aby naoy na Meksyk i Kanad 25-procentowe co na wszystkie produkty przywoone do Stanów … [+2424 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Phonandroid"
                },
                "author": "William Zimmer",
                "title": "La police municipale s’achète des Tesla Model 3 et Y, quelle bonne nouvelle pour Renault et Stellantis",
                "description": "Une nouvelle page s'écrit dans l'histoire des forces de l'ordre françaises avec l'arrivée des Tesla dans leurs rangs. Et c’est la police municipale qui va y avoir droit. Des camions transportant plusieurs Tesla Model 3 aux couleurs de la police...",
                "url": "https://www.phonandroid.com/la-police-municipale-sachete-des-tesla-model-3-et-y-quelle-bonne-nouvelle-pour-renault-et-stellantis.html",
                "urlToImage": "https://wp-pa.phonandroid.com/uploads/2024/11/Tesla-Model-Y-police.jpg",
                "publishedAt": "2024-11-27T05:01:30Z",
                "content": "Une nouvelle page s'écrit dans l'histoire des forces de l'ordre françaises avec l'arrivée des Tesla dans leurs rangs. Et cest la police municipale qui va y avoir droit.\r\nDes camions transportant plus… [+2320 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Autobild.de"
                },
                "author": "Matthias Brügge",
                "title": "Tesla gewährt 6000 Euro Rabatt aufs Model Y – aber nicht mehr lange",
                "description": "Der Tesla Model Y wird durch den Hersteller-Rabatt (\"Umweltprämie\") deutlich günstiger – aber nicht mehr lange. Wann die Aktion ausläuft – und wie sich auch beim Model 3 sparen lässt.",
                "url": "https://www.autobild.de/artikel/tesla-model-3-und-model-y-mit-rabatt-27695889.html",
                "urlToImage": "https://i.auto-bild.de/ir_img/3/8/5/9/4/3/9/Tesla-gewaehrt-6000-Euro-Rabatt-aufs-Model-Y-_-aber-nicht-mehr-lange-2869-1800x1012-6cee3e09645080b1.jpg?impolicy=og_images",
                "publishedAt": "2024-11-27T05:00:00Z",
                "content": "Unter den Befürwortern von E-Autos gelten die Teslafahrer als eingeschworene E-Auto-Käuferschaft, die sich von Fragen nach dem Akku-Recycling und angeblich löchriger Ladeinfrastruktur nicht beirren l… [+3035 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Horizont.net"
                },
                "author": "Catrin Bialek, Marco Saal",
                "title": "Social Media: Deutsche Werbungtreibende bleiben gegenüber X skeptisch",
                "description": "In den USA ziehen sich erste Werbungtreibende vom Rückzug zurück. In Deutschland bleibt die Skepsis der Werbekunden gegenüber der Plattform, die seit 2022 Elon Musk gehört, groß.",
                "url": "https://www.horizont.net/marketing/nachrichten/social-media-deutsche-werbungtreibende-bleiben-gegenueber-x-skeptisch-224287",
                "urlToImage": "https://www.horizont.net/news/media/46/X--Twitter-456126.jpeg",
                "publishedAt": "2024-11-27T05:00:00Z",
                "content": "In den USA kehren Werbungtreibende zurück zu X. Marken wie Disney, IBM und Warner Bros. finden sich auf der Plattform wieder ein, die seit 2022 dem Tesla-Gründer Elon Musk gehört. Mit der neuen Regie… [+435 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Americanthinker.com"
                },
                "author": null,
                "title": "The electric vehicle doom loop is almost closed",
                "description": "What a difference a few weeks make. As Barack Obama so dismissively said, elections have consequences. Since Nov. 5, a wide variety of individuals, media personalities, businesses, even nations have been trying to make nice with Donald Trump. Even&nb...",
                "url": "https://www.americanthinker.com/blog/2024/11/the_electric_vehicle_doom_loop_is_almost_closed.html",
                "urlToImage": "https://images.americanthinker.com/5x/5xpo7pg42ohl4kjthvrc_800.jpg",
                "publishedAt": "2024-11-27T05:00:00Z",
                "content": "What a difference a few weeks make. As Barack Obama so dismissively said, elections have consequences. Since Nov. 5, a wide variety of individuals, media personalities, businesses, even nations have … [+5058 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "CleanTechnica"
                },
                "author": "David Waterworth",
                "title": "Leapmotor C10 Catches Our Eye!",
                "description": "Want some attention? Deliver your new Leapmotor C10 SUV electric vehicle by Black Hawk Helicopter on national television! You can watch the video here. One lucky viewer of “Sunrise” got the surprise of her life. And Leapmotor got some national attention in Au…",
                "url": "https://cleantechnica.com/2024/11/26/leapmotor-c10-catches-our-eye/",
                "urlToImage": "https://cleantechnica.com/wp-content/uploads/2024/11/Leapmotor-C10.jpg",
                "publishedAt": "2024-11-27T04:39:00Z",
                "content": "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News!\r\nWant some attention? Deliver your new Leapmotor C10 SUV electric vehicle by Black Hawk Helicopter on national… [+7172 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "ZDNet France"
                },
                "author": "Guillaume Serries",
                "title": "Gagnants et perdants de la tech 2024, on fait l'bilan calmement en s'remémorant chaque instant",
                "description": "Cette année l'IA a prospéré, les puces Arm ont dominé le marché, et l'open source s'est encore et toujours développé. Pendant ce temps, Elon Musk est à l'origine de deux des plus grands fails, et Apple figure à la fois sur la liste des gentils et des méchants.",
                "url": "https://www.zdnet.fr/actualites/gagnants-et-perdants-de-la-tech-2024-on-fait-lbilan-calmement-en-srememorant-chaque-instant-402097.htm",
                "urlToImage": "https://www.zdnet.fr/wp-content/uploads/zdnet/2024/11/gagnant_perdant.jpg",
                "publishedAt": "2024-11-27T04:11:33Z",
                "content": "L'année 2024 a livré une dramaturgie que les fans de technologie pouvaient espérer.\r\nDomination de l'IA, guerre des puces, des appareils intelligents qui n'en sont pas, et une implosion des médias so… [+8910 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Yahoo Entertainment"
                },
                "author": "ShantiPutri",
                "title": "Rivian Catalysts Fluctuate the Stock Price Amid Expansion and Strategic Moves",
                "description": "Rivian is experiencing ups and downs in stock price amid multiple catalysts.",
                "url": "https://finance.yahoo.com/news/rivian-catalysts-fluctuate-stock-price-040918501.html",
                "urlToImage": "https://s.yimg.com/ny/api/res/1.2/kUF3CPzTWechnQJR4_JIMw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/us.finance.gurufocus/35b9096de0af6e70a5818f32a5562558",
                "publishedAt": "2024-11-27T04:09:18Z",
                "content": "Rivian (NASDAQ:RIVN), the EV startup that rivals Tesla, offers a bag of potential catalysts that drive the stock price higher. Here are a few key points:\r\nThe Conditional Loan up to $6.6 billion\r\nThe… [+2207 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Inside.com.tw"
                },
                "author": "Sherlock",
                "title": "接軌特斯拉充電規格，現代將推 5 款 NACS 車型",
                "description": "包括 2025 年式現代 Ioniq 5、2026 年式現代 Ioniq 9、2025 年式 Kia EV6、2026 年式 Kia EV9，以及 2026 年式 Genesis Electrified GV70 等現代集團旗下車款都將改採 NACS 接口。",
                "url": "https://www.inside.com.tw/article/36889-hyundai-kia-genesis-nacs-charging",
                "urlToImage": "https://bucket-image.inkmaginecms.com/version/social/1/image/2024/11/d7265b7e-8ea2-4f10-b25e-6538cc956626.jpg",
                "publishedAt": "2024-11-27T04:06:26Z",
                "content": "Tesla NACS  NACS Ford NACSHyundai 2025  NACS  5 \r\n NACS Kia  Genesis  Kia  InsideEVs \r\n Andre Ravinowich  InsideEVs \r\n NACS  2025  Ioniq 52026  Ioniq 92025  Kia EV62026  Kia EV9 2026  Genesis Electri… [+335 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Yahoo Entertainment"
                },
                "author": "法新社",
                "title": "川普選中鷹派貿易代表 亞股走勢分歧",
                "description": "（法新社香港27日電）    美國總統當選人川普提名1位談判立場強硬的鷹派人士擔任貿易代表，他前1天並表示將對中國、加拿大和墨西哥加徵沉重關稅，投資人依此評估經濟前景，亞洲股市今天收盤跌多漲少。投資人熱切等待今天稍晚將公布的聯準會偏好通貨膨脹指標，以及美國申請失業給付人數和經濟成長數據。",
                "url": "https://hk.news.yahoo.com/%E5%B7%9D%E6%99%AE%E9%81%B8%E4%B8%AD%E9%B7%B9%E6%B4%BE%E8%B2%BF%E6%98%93%E4%BB%A3%E8%A1%A8-%E4%BA%9E%E8%82%A1%E8%B5%B0%E5%8B%A2%E5%88%86%E6%AD%A7-120501614.html",
                "urlToImage": "https://media.zenfs.com/ko/afp.com.hk/5bf2817ec20aee2405f13f125985ba1e",
                "publishedAt": "2024-11-27T04:05:01Z",
                "content": "(The Magnificent Seven)ETF Nvidia(NVDA.US)(MSFT.US)Alphabet(GOOGL.US)Tesla(TSLA.US)(mn/k)~ : www.aastocks.com"
            },
            {
                "source": {
                    "id": null,
                    "name": "Lavozdegalicia.es"
                },
                "author": "ana abelenda",
                "title": "Teodor de Mas, economista: «Soy autónomo, vivo de alquiler, casi sin dinero en la cuenta corriente y podría vivir infinito sin trabajar»",
                "description": "EL PLAN INVENCIBLE DE TEODOR. Cuando otros jugábamos al Monopoly, él hacía sus pinitos financieros convirtiendo pesetas en marcos con ayuda de su abuelo. Su estrategia de ahorro puesta en marcha en el el 98 le hizo rico. «Ni la vivienda ni el oro te pagan el …",
                "url": "https://www.lavozdegalicia.es/noticia/yes/2024/11/23/autonomo-vivo-alquiler-dinero-cuenta-vivir-infinito-trabajar/0003_202411SY23P32991.htm",
                "urlToImage": "https://img.lavdg.com/sc/QZHQlSmKotiurz9uImwwLkZb6J4=/1280x/2024/11/21/00121732202193524194448/Foto/el.jpg",
                "publishedAt": "2024-11-27T04:00:00Z",
                "content": "Este rico no es un rico al uso. No es Jeff Bezos ni Elon Musk. Tiene abolengo, ocho ramas familiares, tiene tiempo que él se organiza sin jefe y un plan de ahorro a largo plazo que empezó a ejecutar,… [+7286 chars]"
            },
            {
                "source": {
                    "id": "the-times-of-india",
                    "name": "The Times of India"
                },
                "author": "PTI",
                "title": "Indian-American Jay Bhattacharya is Trump's pick to lead top US health institute",
                "description": "President-elect Donald Trump has nominated Dr. Jay Bhattacharya, a Stanford professor, to lead the National Institutes of Health (NIH).  Bhattacharya, the first Indian-American tapped for a top Trump administration post, will collaborate with Robert F. Kenned…",
                "url": "https://economictimes.indiatimes.com/news/international/global-trends/indian-american-jay-bhattacharya-is-trumps-pick-to-lead-top-us-health-institute/articleshow/115717140.cms",
                "urlToImage": "https://img.etimg.com/thumb/msid-115717177,width-1200,height-630,imgsize-10610,overlay-economictimes/articleshow.jpg",
                "publishedAt": "2024-11-27T03:56:38Z",
                "content": "Washington: US President-elect Donald Trump has picked Indian-American scientist Jay Bhattacharya as the director of the National Institutes of Health, the country's top health research and funding i… [+2498 chars]"
            },
            {
                "source": {
                    "id": "cnn",
                    "name": "CNN"
                },
                "author": "Luis Ernesto Quintana Barney",
                "title": "¿Qué son los DEI y por qué dividen opiniones en Estados Unidos?",
                "description": "Los programas de diversidad, equidad e inclusión (conocidos como DEI por sus iniciales) han sido objeto de ataques en las salas de juntas, las legislaturas estatales y los campus universitarios de todo el país.\nThe post ¿Qué son los DEI y por qué dividen opin…",
                "url": "https://cnnespanol.cnn.com/2024/11/26/que-es-dei-y-por-que-hay-division-en-estados-unidos-trax",
                "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/cnne-1787044-02-2023-06-29t174534z-1406998785-rc25t1apylr4-rtrmadp-3-usa-court-race.jpg?c=16x9&q=w_800,c_fill",
                "publishedAt": "2024-11-27T03:48:30Z",
                "content": "(CNN) Los programas de diversidad, equidad e inclusión (conocidos como DEI por sus iniciales) han sido objeto de ataques en las salas de juntas, las legislaturas estatales y los campus universitarios… [+13888 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Richmond.com"
                },
                "author": "FATIMA HUSSEIN, JOSH BOAK and ZEKE MILLER Associated Press",
                "title": "Trump nominates Jamieson Greer for trade representative, Kevin Hassett for National Economic Council",
                "description": "Trump also reached a required deal with the White House to allow his transition staff to coordinate with the existing federal workforce.",
                "url": "https://richmond.com/news/nation-world/government-politics/politics-washington-transition-administration/article_ab112b5d-17af-53a2-93b8-17237d02b987.html",
                "urlToImage": "https://bloximages.newyork1.vip.townnews.com/richmond.com/content/tncms/assets/v3/editorial/a/b1/ab112b5d-17af-53a2-93b8-17237d02b987/6746837ac316e.preview.jpg?crop=1304%2C686%2C204%2C243&resize=1200%2C631&order=crop%2Cresize",
                "publishedAt": "2024-11-27T03:42:00Z",
                "content": "WEST PALM BEACH, Fla. President-elect Donald Trump announced a slew of nominations Tuesday, including international trade attorney Jamieson Greer to be his U.S. trade representative, Kevin Hassett as… [+34716 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Richmond.com"
                },
                "author": "CARLA K. JOHNSON Associated Press",
                "title": "Trump picks Jay Bhattacharya, critic of COVID lockdowns, for National Institutes of Health",
                "description": "Bhattacharya was one of three authors an October 2020 open letter maintaining that lockdowns were causing irreparable harm.",
                "url": "https://richmond.com/news/nation-world/government-politics/politics-transition-administration-public-health/article_c58a3415-e0bd-5765-af49-6a87c748a05b.html",
                "urlToImage": "https://bloximages.newyork1.vip.townnews.com/richmond.com/content/tncms/assets/v3/editorial/c/58/c58a3415-e0bd-5765-af49-6a87c748a05b/674693017e08b.preview.jpg?crop=1698%2C891%2C4%2C57&resize=1200%2C630&order=crop%2Cresize",
                "publishedAt": "2024-11-27T03:35:00Z",
                "content": "President-elect Donald Trump chose health economist Dr. Jay Bhattacharya, a critic of COVID-19 pandemic lockdowns and vaccine mandates, to lead the National Institutes of Health, the nation's leading… [+31128 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Roanoke Times"
                },
                "author": "CARLA K. JOHNSON Associated Press",
                "title": "Trump picks Jay Bhattacharya, critic of COVID lockdowns, for National Institutes of Health",
                "description": "Bhattacharya was one of three authors an October 2020 open letter maintaining that lockdowns were causing irreparable harm.",
                "url": "https://roanoke.com/news/nation-world/government-politics/politics-transition-administration-public-health/article_80809ba9-b5ef-5a2d-90aa-509a63023326.html",
                "urlToImage": "https://bloximages.newyork1.vip.townnews.com/roanoke.com/content/tncms/assets/v3/editorial/8/08/80809ba9-b5ef-5a2d-90aa-509a63023326/67469301b8f32.preview.jpg?crop=1698%2C891%2C4%2C57&resize=1200%2C630&order=crop%2Cresize",
                "publishedAt": "2024-11-27T03:35:00Z",
                "content": "President-elect Donald Trump chose health economist Dr. Jay Bhattacharya, a critic of COVID-19 pandemic lockdowns and vaccine mandates, to lead the National Institutes of Health, the nation's leading… [+31542 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "BusinessLine"
                },
                "author": "PTI",
                "title": "Jay Bhattacharya makes history as first Indian-American NIH Director under Trump",
                "description": "Alongside Robert F. Kennedy Jr., Bhattacharya will lead efforts to tackle America’s major health challenges, focusing on chronic illnesses and promoting biomedical innovation",
                "url": "https://www.thehindubusinessline.com/news/world/jay-bhattacharya-makes-history-as-first-indian-american-nih-director-under-trump/article68917207.ece",
                "urlToImage": "https://bl-i.thgim.com/public/incoming/cx3mf0/article68917215.ece/alternates/LANDSCAPE_1200/Jay%20Bhattacharya.jpg",
                "publishedAt": "2024-11-27T03:34:48Z",
                "content": "US President-elect Donald Trump has picked Indian-American scientist Jay Bhattacharya as the director of the National Institutes of Health, the country's top health research and funding institutions.… [+2435 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "People.cn"
                },
                "author": "F_400983",
                "title": "To understand China's reform and opening up via two sets of data",
                "description": "Recently, two sets of data highlight the latest achievements of China's reform and opening up.\nThe f",
                "url": "http://en.people.cn/n3/2024/1127/c90000-20247341.html",
                "urlToImage": null,
                "publishedAt": "2024-11-27T03:24:01Z",
                "content": "Recently, two sets of data highlight the latest achievements of China's reform and opening up.\r\nThe first set of data is about China's new energy vehicles (NEVs). On November 14, China's annual produ… [+7629 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "TweakTown"
                },
                "author": "Anthony Garreffa",
                "title": "Elon Musk's Neuralink to conduct trial to see if its brain implact can control a robotic arm",
                "description": "Elon Musk's brain-computer interface (BCI) startup, Neuralink, announces it will test whether a person can contrrol a robotic arm with just their thoughts. Continue reading at TweakTown >",
                "url": "https://www.tweaktown.com/news/101869/elon-musks-neuralink-to-conduct-trial-see-if-its-brain-implact-can-control-robotic-arm/index.html",
                "urlToImage": "https://static.tweaktown.com/news/1/0/101869_807_elon-musks-neuralink-to-conduct-trial-see-if-its-brain-implact-can-control-robotic-arm_full.jpg",
                "publishedAt": "2024-11-27T03:09:02Z",
                "content": "TL;DR: Neuralink has received approval to test its wireless brain-computer interface (BCI) implant with an assistive robotic arm, marking a significant advancement in BCI technology. This trial aims … [+1302 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Ig.com.br"
                },
                "author": "ONEberto",
                "title": "Influenciador brasileiro cria réplica do Cybertruck e apresenta: Cyber Fusca",
                "description": "A inovação no mundo automotivo continua a surpreender, e um exemplo notável é a criação do Cyber Fusca, uma versão alternativa da icônica picape elétrica Cybertruck, da Tesla. Desenvolvido por um influenciador digital, esse projeto transforma o clássico Fusca…",
                "url": "https://obutecodanet.ig.com.br/influenciador-brasileiro-cria-replica-do-cybertruck-e-apresenta-cyber-fusca/",
                "urlToImage": "https://obutecodanet.ig.com.br/wp-content/uploads/2024/11/image-339.png",
                "publishedAt": "2024-11-27T03:01:00Z",
                "content": "A inovação no mundo automotivo continua a surpreender, e um exemplo notável é a criação do Cyber Fusca, uma versão alternativa da icônica picape elétrica Cybertruck, da Tesla. Desenvolvido por um inf… [+363 chars]"
            },
            {
                "source": {
                    "id": "the-times-of-india",
                    "name": "The Times of India"
                },
                "author": "Reuters",
                "title": "Elon Musk uses X to push his preferred political picks, Trump isn't always swayed",
                "description": "Musk, who owns X and rocket company SpaceX and is chief executive of the electric car company Tesla Inc., poured at least $119 million into getting Trump elected and has been a near-constant fixture at Trump's Florida residence, Mar-a-Lago, since his election…",
                "url": "https://economictimes.indiatimes.com/tech/technology/elon-musk-uses-x-to-push-his-preferred-political-picks-trump-isnt-always-swayed/articleshow/115715040.cms",
                "urlToImage": "https://img.etimg.com/thumb/msid-115715087,width-1200,height-630,imgsize-28154,overlay-ettech/articleshow.jpg",
                "publishedAt": "2024-11-27T02:53:53Z",
                "content": "Billionaire Elon Musk has been using his social media platform X to go to bat for President-elect Donald Trump's cabinet picks and promote his own preferred candidates, advocating for choices he view… [+5868 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Mother Jones"
                },
                "author": "Kiera Butler",
                "title": "He Rose to Fame as a Covid Contrarian, and Trump Wants Him to Be NIH Head",
                "description": "On Tuesday, President-elect Donald Trump announced that he would nominate Dr. Jay Bhattacharya to lead the National Institutes of Health, a government agency composed of more than 18,000 employees with an annual budget of $47 billion. Bhattacharya, a professo…",
                "url": "https://www.motherjones.com/politics/2024/11/bhattacharya-covid-trump-pick-nih-health-director/",
                "urlToImage": "https://www.motherjones.com/wp-content/uploads/2024/11/112024bhattacharya.jpg?w=1200&h=630&crop=1",
                "publishedAt": "2024-11-27T02:52:33Z",
                "content": "Tom Williams/CQ Roll Call/AP\r\nFight disinformation: Sign up for the free Mother Jones Daily newsletter and follow the news that matters.\r\nOn Tuesday, President-elect Donald Trump announced that he wo… [+8299 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Roanoke Times"
                },
                "author": "FATIMA HUSSEIN and JOSH BOAK Associated Press",
                "title": "Trump nominates Jamieson Greer for trade representative, Kevin Hassett for National Economic Council",
                "description": "Trump also reached a required deal with the White House to allow his transition staff to coordinate with the existing federal workforce.",
                "url": "https://roanoke.com/news/nation-world/government-politics/politics-washington-transition-administration/article_d215e0ba-9efd-5372-b670-044585934c01.html",
                "urlToImage": "https://bloximages.newyork1.vip.townnews.com/roanoke.com/content/tncms/assets/v3/editorial/d/21/d215e0ba-9efd-5372-b670-044585934c01/6746837b44880.preview.jpg?crop=1304%2C686%2C204%2C243&resize=1200%2C631&order=crop%2Cresize",
                "publishedAt": "2024-11-27T02:30:00Z",
                "content": "WEST PALM BEACH, Fla. President-elect Donald Trump announced a slew of nominations Tuesday, including international trade attorney Jamieson Greer to be his U.S. trade representative, Kevin Hassett as… [+35130 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "CleanTechnica"
                },
                "author": "Zachary Shahan",
                "title": "Tesla Doubles Referral Bonus",
                "description": "Tesla has tried offering several different types of incentives in the past year to stimulate more sales in the US. From Full Self Driving (FSD) transfer to 0.99% APR financing to free Supercharging to referral discounts, Tesla keeps offering more reasons to b…",
                "url": "https://cleantechnica.com/2024/11/26/tesla-doubles-referral-bonus/",
                "urlToImage": "https://cleantechnica.com/wp-content/uploads/2024/09/New-Tesla-Cybertruck-Tesla-Store-Opening-Florida-3.jpeg",
                "publishedAt": "2024-11-27T02:22:50Z",
                "content": "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News!\r\nTesla has tried offering several different types of incentives in the past year to stimulate more sales in th… [+3408 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Unwire.hk"
                },
                "author": "藍骨",
                "title": "Spotify 推出全新播放紀錄功能　整合不同媒體紀錄方便瀏覽",
                "description": "很多朋友都喜歡回顧之前聽過的音樂或 Podcast，Spotify 最近有見及此就推出全新的「最近播放」頁面，整合了用家過去 90 日內的所有收聽紀錄，包括音樂、Podcast 和有聲書等內容。\nThe post Spotify 推出全新播放紀錄功能　整合不同媒體紀錄方便瀏覽 appeared first on 香港 unwire.hk 玩生活．樂科技.",
                "url": "https://unwire.hk/2024/11/27/spotify-recents-listening-history/mobile-music/",
                "urlToImage": "https://cdn.unwire.hk/wp-content/uploads/2024/11/08-694x390.jpg",
                "publishedAt": "2024-11-27T02:00:48Z",
                "content": "PodcastSpotify 90 Podcast \r\n iOS Android Spotify Podcast\r\nTechopedia\r\n:<li>Spotify AI </li> <li>Spotify </li> <li>Tesla Spotify2019 7 </li> \r\n :"
            },
            {
                "source": {
                    "id": null,
                    "name": "Technews.tw"
                },
                "author": "Chen Kobe",
                "title": "Rivian 執行長：Tesla Model Y 是中價位最佳車款",
                "description": "特斯拉電動休旅車 Model Y 是目前全世界銷量最好的汽車，同為電動車新創的 Rivian 執行長毫不遮掩他對特斯拉的讚賞，認為 Model Y 是 5 萬美元以下最好的電動車。 當特斯拉開始交付 Model Y 時，馬斯克就曾經預言這將會是全世界銷量最好的汽車，這也是他少數沒有落空的大話。202...",
                "url": "https://technews.tw/2024/11/27/rivian-think-modely-the-best-ev-under-50k/",
                "urlToImage": "https://img.technews.tw/wp-content/uploads/2024/11/27095635/Tesla-Model-Y-Silver.jpeg",
                "publishedAt": "2024-11-27T01:59:09Z",
                "content": "Model Y Rivian Model Y 5 \r\n Model Y 2023 122 Model Y Toyota RAV4 107 20 Toyota Corolla \r\nRivian R.J. Scaringe 5 Model Y \r\nRivian Lucid Lucid Rivian Rivian Rivian Model Y \r\nReally enjoyed my chat with… [+166 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Overclockers.ru"
                },
                "author": "g1tarist",
                "title": "Глава компании Xiaomi Лэй Цзюнь лично провел тест-драйв нового кроссовера",
                "description": "Кроссовер внешне напоминает модель Ferrari Purosangue.",
                "url": "https://overclockers.ru/blog/letsplay/show/193524/Glava-kompanii-Xiaomi-Lej-Czjun-lichno-provel-test-drajv-novogo-krossovera",
                "urlToImage": "https://overclockers.ru/st/legacy/blog/422417/591973_O.png",
                "publishedAt": "2024-11-27T01:53:50Z",
                "content": ", , Tesla Model Y, - . Xiaomi Auto, SU7, 28 . , , . SU7, , , .\r\nWeibo , . , Xiaomi , SU7. , SU7 , Tesla Model 3, , Tesla Model Y.\r\n Xiaomi . 2 , SU7."
            },
            {
                "source": {
                    "id": null,
                    "name": "[Removed]"
                },
                "author": null,
                "title": "[Removed]",
                "description": "[Removed]",
                "url": "https://removed.com",
                "urlToImage": null,
                "publishedAt": "2024-11-27T01:51:14Z",
                "content": "[Removed]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Newsbreak.com"
                },
                "author": "Justin Baragona",
                "title": "Elon Musk’s mom says it’s ‘degrading’ to call her son ‘wealthy’: He’s ‘the genius of the world’",
                "description": "The mother of Elon Musk , the world’s richest man, stopped by Fox Business on Monday to scold those who call her son “wealthy,” claiming it was “degrading” and that she would prefer he be referred to as the “genius of the world.” With her son now president-el…",
                "url": "https://www.newsbreak.com/share/3691867977175-elon-musk-s-mom-says-it-s-degrading-to-call-her-son-wealthy-he-s-the-genius-of-the-world?_f=app_share&amp;pd=0DvgA7MP&amp;lang=en_US&amp;send_time=1732671704&amp;trans_data=%7B%22platform%22%3A0%2C%22cv%22%3A%2224.47.0.27%22%2C%22languages%22%3A%22en%22%7D&amp;sep=ns_foryou_model_exp_24q4-v8%2Cns_local_strategy_24q4_exp-v10%2Cns_foryou_rank_exp_24q4-v5%2Cns_foryou_recall_exp_24q4-v7%2Cns_summary_v1-v1%2Cns_push_exp_rt_bucketv12-v6%2Cns_foryou_blend_exp_24q4-v3&amp;s=i2",
                "urlToImage": "https://img.particlenews.com/img/id/25C6O2_0x30G9Bn00?type=thumbnail_1600x1200",
                "publishedAt": "2024-11-27T01:44:19Z",
                "content": "The mother of Elon Musk , the worlds richest man, stopped by Fox Business on Monday to scold those who call her son wealthy, claiming it was degrading and that she would prefer he be referred to as t… [+2845 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Electrek"
                },
                "author": "Jo Borrás",
                "title": "Gavin Newsom isn’t afraid of Elon, 650 hp Kia EV6, and Green Machine deals",
                "description": "On today’s fact-checking episode of Quick Charge, we’ve got a showdown brewing between California Governor Gavin Newsom and Tesla CEO Elon Musk, an updated 650 hp Kia EV6 GT that’s ready to take on the world, and some sweet deals on battery-powered goodies.\n\n…",
                "url": "http://electrek.co/2024/11/26/gavin-newsom-isnt-afraid-of-elon-650-hp-kia-ev6-and-green-machine-deals/",
                "urlToImage": "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2024/11/Elon-Musk-Game-of-Thrones.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
                "publishedAt": "2024-11-27T01:34:34Z",
                "content": "On today’s fact-checking episode of Quick Charge, we’ve got a showdown brewing between California Governor Gavin Newsom and Tesla CEO Elon Musk, an updated 650 hp Kia EV6 GT that’s ready to take on t… [+1423 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Www.dkn.tv"
                },
                "author": "Minh Sang",
                "title": "Hai người đàn ông giàu nhất thế giới lại ‘cãi nhau’ vì ông Trump",
                "description": "Nếu nói rằng trên thế giới có những người tài giỏi trong việc tạo ra các điểm nóng, thì CEO của Tesla và SpaceX, Elon Musk, cùng với người sáng lập Amazon, Jeff Bezos, chắc chắn là những cái tên nằm trong top đầu. Hai người đàn ông này không chỉ cạnh tranh nh…",
                "url": "https://www.dkn.tv/the-gioi/hai-nguoi-dan-ong-giau-nhat-the-gioi-lai-cai-nhau-vi-ong-trump.html",
                "urlToImage": "https://www.dkn.tv/wp-content/uploads/2024/11/hai-nguoi-dan-ong-giau-nhat-the-gioi-lai-cai-nhau-vi-ong-trump.jpg",
                "publishedAt": "2024-11-27T01:28:53Z",
                "content": "Nu nói rng trên th gii có nhng ngi tài gii trong vic to ra các im nóng, thì CEO ca Tesla và SpaceX, Elon Musk, cùng vi ngi sáng lp Amazon, Jeff Bezos, chc chn là nhng cái tên nm trong top u.\r\nHai ngi… [+6969 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Kevesko.vn"
                },
                "author": "Sputnik Việt Nam",
                "title": "Musk nói về vũ khí trong các cuộc chiến tương lai",
                "description": "Tỷ phú người Mỹ sáng lập Tesla, SpaceX và những công ty khác Elon Musk cho biết trên mạng xã hội X rằng máy bay có người lái sau này không thể sống sót trong các cuộc chiến tương lai.",
                "url": "https://kevesko.vn/20241127/musk-noi-ve-vu-khi-trong-cac-cuoc-chien-tuong-lai-33157460.html",
                "urlToImage": "https://cdn.img.kevesko.vn/images/sharing/article/vie/33157460.jpg?194705921732670689",
                "publishedAt": "2024-11-27T01:21:36Z",
                "content": "https://kevesko.vn/20241127/musk-noi-ve-vu-khi-trong-cac-cuoc-chien-tuong-lai-33157460.html\r\nMusk nói v v khí trong các cuc chin tng lai\r\nMusk nói v v khí trong các cuc chin tng lai\r\nT phú ngi M sáng… [+1411 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Yahoo Entertainment"
                },
                "author": "香港電台-國際",
                "title": "澳洲眾議院通過16歲以下禁用社交媒體法案",
                "description": "澳洲國會眾議院通過法案，禁止16歲以下未成年人士使用社交媒體，即使獲家長同意，也不能使用社交平台。持續違規的社交平台最高可被罰款4950萬澳元，折合約2億5千萬港元。 有關法案將於稍後在參議院審議，若果同樣獲通過，將簽署成為法律。較早前，有報道引述參議院一個委員會表示支持法案，但條件是社交平台不應該強迫用戶提交護照或其他身份證明號碼等個人資料，作為年齡證明。",
                "url": "https://hk.news.yahoo.com/%E6%BE%B3%E6%B4%B2%E7%9C%BE%E8%AD%B0%E9%99%A2%E9%80%9A%E9%81%8E16%E6%AD%B2%E4%BB%A5%E4%B8%8B%E7%A6%81%E7%94%A8%E7%A4%BE%E4%BA%A4%E5%AA%92%E9%AB%94%E6%B3%95%E6%A1%88-091216223.html",
                "urlToImage": "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo-1200x1200.png",
                "publishedAt": "2024-11-27T01:12:16Z",
                "content": "Gavin Newsom7,500Tesla(TSLA.US) Tesla(mn/k)~ : www.aastocks.com"
            },
            {
                "source": {
                    "id": null,
                    "name": "Digitimes"
                },
                "author": "Vyra Wu",
                "title": "South Korea races to revive humanoid robotics ambitions",
                "description": "Humanoid robots, widely considered the ultimate achievement in robotics, integrate advanced computing, sensors, motors, and AI to replicate human form and movement. Global tech giants including Tesla, Amazon, Nvidia, and Microsoft have intensified their R&D e…",
                "url": "https://www.digitimes.com/news/a20241122PD210/robotics-tesla-government-2024.html",
                "urlToImage": "https://img.digitimes.com/newsshow/20241122pd210_files/2_b.jpg",
                "publishedAt": "2024-11-27T01:05:01Z",
                "content": "Humanoid robots, widely considered the ultimate achievement in robotics, integrate advanced computing, sensors, motors, and AI to replicate human form and movement. Global tech giants including Tesla… [+56 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Investing.com"
                },
                "author": "Investing.com",
                "title": "Cathie Wood's ARK ETF shifts focus with major stock trades in AMD and TER",
                "description": "Cathie Wood's ARK ETF shifts focus with major stock trades in AMD and TER",
                "url": "https://www.investing.com/news/company-news/cathie-woods-ark-etf-shifts-focus-with-major-stock-trades-in-amd-and-ter-93CH-3743540",
                "urlToImage": "https://i-invdn-com.investing.com/redesign/images/seo/investing_300X300.png",
                "publishedAt": "2024-11-27T01:03:43Z",
                "content": "Cathie Wood's ARK ETF published their daily trades for Tuesday, November 26th, 2024, with a mix of strategic buys and sells across various sectors. The trades reflect ARK's ongoing investment strateg… [+2393 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "International Business Times"
                },
                "author": "Morgan Music",
                "title": "Vivek Ramaswamy Calls Biden's $6.6 Billion Deal With Tesla Rival 'Political Shot' at Elon Musk",
                "description": "Vivek Ramaswamy criticized Biden's administration for its $6.6 billion loan to electric automaker Rivian, calling it a \"political shot\" at Musk and Tesla.",
                "url": "https://www.ibtimes.com/vivek-ramaswamy-calls-bidens-66-billion-deal-tesla-rival-political-shot-elon-musk-3752811",
                "urlToImage": "https://d.ibtimes.com/en/full/4564715/vivek-ramaswamy-calls-bidens-66-billion-deal-tesla-rival.jpg",
                "publishedAt": "2024-11-27T00:51:47Z",
                "content": "Vivek Ramaswamy criticized President Joe Biden's administration for its $6.6 billion loan to electric automaker Rivian, calling it a \"political shot\" at Elon Musk and Tesla.\r\nThe loan, announced Tues… [+1226 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Biztoc.com"
                },
                "author": "benzinga.com",
                "title": "Our Number One Name: Tesla",
                "description": "Portfolio Armor's Top Ten Names\nPortfolio Armor's top ten names have, on average, outperformed the market significantly since December of 2022. Since then, we have full, 6-month performance data on 74 weekly top names cohorts. On average, our top names have r…",
                "url": "https://biztoc.com/x/bcacd2e958d7350c",
                "urlToImage": "https://biztoc.com/cdn/bcacd2e958d7350c_s.webp",
                "publishedAt": "2024-11-27T00:37:51Z",
                "content": "Portfolio Armor's Top Ten NamesPortfolio Armor's top ten names have, on average, outperformed the market significantly since December of 2022. Since then, we have full, 6-month performance data on 74… [+145 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Yahoo Entertainment"
                },
                "author": "香港電台-港聞",
                "title": "鄭泳舜冀違規劏房罰則比劏房租管更嚴　梁文廣倡訂最低量刑準則",
                "description": "房屋局向立法會提交有關規管簡樸房的文件，民建聯表示歡迎。立法會議員鄭泳舜說，最終罰則需要再探討，但根據劏房租金管制經驗，房屋局控告近400名違規劏房業主，罰款介乎數百至數千元，認為阻嚇作用有限，希望日後罰則比劏房租管更嚴。 鄭泳舜表示，政府要考慮制定時間表，決定哪些劏房優先取締，因為不可能同一時間處理約11萬劏房戶，如果當中地方很細、環境衛生很差、有即時住屋危險的最劣質劏房，要納入優先取締項目。 「A4聯盟」議員梁文廣就建議，當局訂立的最低量刑準則，要高於整個單位的劏房租金總收入，才能發揮阻嚇作用。他又說，執法權…",
                "url": "https://hk.news.yahoo.com/%E9%84%AD%E6%B3%B3%E8%88%9C%E5%86%80%E9%81%95%E8%A6%8F%E5%8A%8F%E6%88%BF%E7%BD%B0%E5%89%87%E6%AF%94%E5%8A%8F%E6%88%BF%E7%A7%9F%E7%AE%A1%E6%9B%B4%E5%9A%B4-%E6%A2%81%E6%96%87%E5%BB%A3%E5%80%A1%E8%A8%82%E6%9C%80%E4%BD%8E%E9%87%8F%E5%88%91%E6%BA%96%E5%89%87-081749637.html",
                "urlToImage": "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo-1200x1200.png",
                "publishedAt": "2024-11-27T00:17:49Z",
                "content": "Gavin Newsom7,500Tesla(TSLA.US) Tesla(mn/k)~ : www.aastocks.com"
            },
            {
                "source": {
                    "id": null,
                    "name": "Biztoc.com"
                },
                "author": "thestreet.com",
                "title": "Political fever over EVs has Tesla expert buzzing with confidence",
                "description": "In an act of politically charged defiance, California Governor Gavin Newsom announced on November 25 that if President-Elect Donald Trump follows through with his plans to eliminate the federal EV tax credit, the state of California will reintroduce a program…",
                "url": "https://biztoc.com/x/cbca4e6442c50758",
                "urlToImage": "https://biztoc.com/cdn/cbca4e6442c50758_s.webp",
                "publishedAt": "2024-11-27T00:15:37Z",
                "content": "In an act of politically charged defiance, California Governor Gavin Newsom announced on November 25 that if President-Elect Donald Trump follows through with his plans to eliminate the federal EV ta… [+146 chars]"
            },
            {
                "source": {
                    "id": "lenta",
                    "name": "Lenta"
                },
                "author": "Марина Совина",
                "title": "Илон Маск высказался о будущих методах ведения войны",
                "description": "Пилотируемая авиация не сможет выжить в войнах будущего, заявил американский миллиардер, основатель компаний Tesla и SpaceX Илон Маск в социальной сети X. Он высказался о будущих методах ведения войны",
                "url": "https://lenta.ru/news/2024/11/27/mask/",
                "urlToImage": "https://icdn.lenta.ru/images/2024/11/27/03/20241127031233539/share_fdb77d4848e466190190149bdc750f6b.jpg",
                "publishedAt": "2024-11-27T00:14:00Z",
                "content": ". : David Swanson / Reuters"
            },
            {
                "source": {
                    "id": null,
                    "name": "Mail.ru"
                },
                "author": "Леонид Монин",
                "title": "«Будут уничтожены». Маск сделал заявление о вооружении в будущих войнах",
                "description": "МОСКВА, 27 ноя — РИА Новости. Американский миллиардер, основатель компаний Tesla, SpaceX и других Илон Маск заявил в социальной сети X, что пилотируемая авиация не сможет выжить в войнах будущего.",
                "url": "https://news.mail.ru/society/63818081/",
                "urlToImage": "https://resizer.mail.ru/p/33982fc1-eda7-578c-ab00-551b1d19240d/op:15/logo:bottom:news.png/AQAGAMwTj1PjkVV1PnqxxckxdkcEteb_UZwrcBtW6iBTVW9l9LyrjyQnBrtHS8qDJQex5CzWx1IlsEfWLn7lti3AKPI.jpg",
                "publishedAt": "2024-11-27T00:01:49Z",
                "content": "F-35 Lightning.   ,   ,   .  F-35  ,     , ."
            },
            {
                "source": {
                    "id": "fox-news",
                    "name": "Fox News"
                },
                "author": "Joshua Nelson",
                "title": "‘Landman’ clip goes viral slamming renewable energy: ‘There is nothing clean about this’",
                "description": "Scene from new TV show from \"Yellowstone\" creator Tyler Sheridan goes viral on X on Sunday because it slams wind turbines and clean energy narrative associated with them.",
                "url": "https://www.foxnews.com/media/scene-from-billy-bob-thorntons-new-show-landman-slams-clean-energy-goes-viral-x",
                "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2024/11/landman_103_em_bts_0221_01130_rt-scaled.jpg",
                "publishedAt": "2024-11-27T00:00:37Z",
                "content": "A clip from Billy Bob Thorntons new show \"Landman\" went viral on X for slamming the use of renewable energy like wind turbines, that are intended to combat the effects of climate change.\r\n\"They use c… [+2550 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Yazaroku.com"
                },
                "author": "SM724.COM | SPECIAL MINDS 7 X 24",
                "title": "Deniz Sipahi : Eski alışkanlıklar tarihe gömebilir miyiz",
                "description": "class='medyanet-inline-adv'&gt;Musk'ın, SpaceX'te uzaya roket gönderen, Tesla ile elektrikli otomobil devrimini başlatan o kararlı tavrını biliyoruz. Şimdi aynı Musk, ABD'nin devasa bürokrasisini yeniden şekillendirecekmiş. Hükümetin \"DOGE\" isimli departmanın…",
                "url": "https://www.yazaroku.com/guncel/deniz-sipahi/27-11-2024/eski-aliskanliklar-tarihe-gomebilir-miyiz/1905458.aspx",
                "urlToImage": "http://www.sm724.com/wp-content/uploads/2014/04/yazaroku-mobil21.jpg",
                "publishedAt": "2024-11-27T00:00:00Z",
                "content": "Eski alkanlklar tarihe gömebilir miyiz\r\nWebsitelerimizde, Fikir ve Sanat Eserleri Kanunu 36. Maddesi uyarnca, sadece yazlarn sahibi olan köe yazarlarnn ad soyad bilgileri, yaz sahibi gazete bilgisi, … [+212 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "New York Post"
                },
                "author": "Rikki Schlott",
                "title": "Walmart ditches DEI, because, duh, dividing people doesn’t bring them closer together",
                "description": "DEI is dying, per an obvious revelation: dividing people divides people.",
                "url": "https://nypost.com/2024/11/26/opinion/walmart-ditches-dei-because-dividing-people-divides-people/",
                "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2024/11/DEI2.jpg?quality=75&strip=all&w=1024",
                "publishedAt": "2024-11-26T23:52:17Z",
                "content": "DEI is dying, as big companies wake up to an obvious truth: dividing people divides people.\r\nWalmart is just the latest company to hop on the trend of slashing Diversity, Equity, and Inclusion initia… [+5189 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Crikey"
                },
                "author": "Bernard Keane",
                "title": "Trump’s tariffs promise chaos — and Australia’s investments are in the firing line",
                "description": "Australia's Future Fund has more than 40% of its assets invested in the US economy, which means the damage Trump inflicts hurts us too.\nThe post Trump’s tariffs promise chaos — and Australia’s investments are in the firing line appeared first on Crikey.",
                "url": "https://www.crikey.com.au/2024/11/27/donald-trump-tariffs-australia-future-fund-economic-impact/",
                "urlToImage": "https://www.crikey.com.au/wp-content/uploads/2024/11/20241120113645385480-original-copy.jpg?quality=70",
                "publishedAt": "2024-11-26T23:50:44Z",
                "content": "Too bad if youre a US company, like an automobile manufacturer, reliant on imports from Mexico. Donald Trump just promised to impose a 25% tax on your supply chain, along with everything else importe… [+3645 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Robb Report"
                },
                "author": "Martin Lerma",
                "title": "L.A.’s Auto Show Spotlights Art Cars From Keith Haring, Virgil Abloh and More",
                "description": "Thanks to CART Department and West Coast Customs, a collection of cars designed by artists such as Keith Haring will be part of the LA Auto Show",
                "url": "http://robbreport.com/motors/cars/artist-designed-cars-la-auto-show-1236008001/",
                "urlToImage": "https://robbreport.com/wp-content/uploads/2024/11/cart-department-and-west-coast-customs.jpg?w=681&h=383&crop=1",
                "publishedAt": "2024-11-26T23:30:00Z",
                "content": "L.A.’s auto show is bringing art center stage. \r\nA collaboration between Cart Department and the renowned West Coast Customs, Art Car Series presents 10 artist-designed vehicles from leading creative… [+1896 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Forbes"
                },
                "author": "Richard Nieva, Forbes Staff, \n Richard Nieva, Forbes Staff\n https://www.forbes.com/sites/richardnieva/",
                "title": "The Prompt: A Trump AI Czar?",
                "description": "Plus: The DOJ could hobble Google’s AI ambitions",
                "url": "https://www.forbes.com/sites/richardnieva/2024/11/26/the-prompt-a-trump-ai-czar/",
                "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/67464662ca19c8793201c302/0x0.jpg?format=jpg&crop=2751,1547,x0,y0,safe&height=900&width=1600&fit=bounds",
                "publishedAt": "2024-11-26T23:14:43Z",
                "content": "Welcome back to The Prompt.\r\nPresident-elect Donald Trump\r\nGetty Images\r\nPresident-elect Donald Trump is considering appointing an AI czar to lead efforts in artificial intelligence policy, as well a… [+6860 chars]"
            },
            {
                "source": {
                    "id": "techcrunch",
                    "name": "TechCrunch"
                },
                "author": "Kyle Wiggers",
                "title": "Trump considers naming an 'AI czar' | TechCrunch",
                "description": "Incoming president Donald Trump is considering naming an 'AI czar' in the White House, according to a report.",
                "url": "https://techcrunch.com/2024/11/26/trump-considers-naming-an-ai-czar/",
                "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/07/GettyImages-1327493808.jpg?resize=1200,800",
                "publishedAt": "2024-11-26T23:11:38Z",
                "content": "Incoming president Donald Trump is considering naming an “AI czar” in the White House, Axios reports. \r\nShould Trump appoint such a policy person, they’d be charged with helping to coordinate federal… [+779 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Xataka.com"
                },
                "author": "Javier Marquez",
                "title": "Tesla tiene un equipo de teleoperación para sus robotaxis y robots humanoides. Y está buscando talento para ampliarlo",
                "description": "Tesla está ampliando su equipo de teleoperación para sus robotaxis y robots humanoides. La información proviene de una oferta de empleo donde la compañía señala que está buscando un ingeniero de software que lidere el desarrollo de la aplicación de realidad v…",
                "url": "https://www.xataka.com/robotica-e-ia/tesla-tiene-equipo-teleoperacion-para-sus-robotaxis-robots-humanoides-esta-buscando-talento-para-ampliarlo",
                "urlToImage": "https://i.blogs.es/860176/tesla-portada/840_560.jpeg",
                "publishedAt": "2024-11-26T23:01:34Z",
                "content": "Tesla está ampliando su equipo de teleoperación para sus robotaxis y robots humanoides. La información proviene de una oferta de empleo donde la compañía señala que está buscando un ingeniero de soft… [+2454 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "TweakTown"
                },
                "author": "Anthony Garreffa",
                "title": "Elon Musk at SpaceX launch: if he played League of Legends, it would damage the space program",
                "description": "Elon Musk was asked if he played Fortnite, to which he said no... when asked about League of Legends, he said if he did it would 'damage the space program' Continue reading at TweakTown >",
                "url": "https://www.tweaktown.com/news/101887/elon-musk-at-spacex-launch-if-he-played-league-of-legends-it-would-damage-the-space-program/index.html",
                "urlToImage": "https://static.tweaktown.com/news/1/0/101887_803_elon-musk-at-spacex-launch-if-he-played-league-of-legends-it-would-damage-the-space-program_full.jpg",
                "publishedAt": "2024-11-26T22:37:52Z",
                "content": "TL;DR: At a recent SpaceX launch, Elon Musk humorously stated that playing League of Legends would harm the space program. He mentioned enjoying first-person shooters like Quake but has not played Fo… [+1146 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Biztoc.com"
                },
                "author": "inc.com",
                "title": "A California EV Rebate That Could Exclude Tesla? Musk Says That’s ‘Insane’",
                "description": "Gov. Gavin Newsom is gearing up for a fight against the incoming Trump administration on electric vehicles. Tesla is on the frontlines.",
                "url": "https://biztoc.com/x/6925d311fbf6ff4f",
                "urlToImage": "https://biztoc.com/cdn/6925d311fbf6ff4f_s.webp",
                "publishedAt": "2024-11-26T22:36:59Z",
                "content": "Gov. Gavin Newsom is gearing up for a fight against the incoming Trump administration on electric vehicles. Tesla is on the frontlines.\r\nThis story appeared on inc.com, 2024-11-26 22:19:12."
            },
            {
                "source": {
                    "id": null,
                    "name": "Foreign Policy"
                },
                "author": "Lili Pike",
                "title": "Where Trump’s Cabinet Stands on China",
                "description": "China hawks dominate, but Elon Musk could soften the administration’s stance.",
                "url": "https://foreignpolicy.com/2024/11/26/trump-cabinet-picks-china-taiwan-policy-views-rubio-waltz-elon-musk/",
                "urlToImage": "https://foreignpolicy.com/wp-content/uploads/2024/11/elon-musk-china-GettyImages-1079499940.jpg?w=1000",
                "publishedAt": "2024-11-26T22:30:27Z",
                "content": "U.S. President-elect Donald Trump has now made nearly all of his key appointments. He has stacked his cabinet with China hawks, with one notable exception in Elon Musk. The incoming Trump teams track… [+9953 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Bright.nl"
                },
                "author": "info@bright.nl (Laura Jenny)",
                "title": "Rivian leent 6,6 miljard dollar om fabriek te bouwen",
                "description": "Het heeft ruzie met Tesla, stopt met het ondersteunen van CarPlay, maar werkt samen met Volkswagen en de Amerikaanse overheid. Automerk Rivian leent van de Amerikaanse regering 6,6 miljard dollar om een eigen fabriek te bouwen in Georgia.",
                "url": "https://www.bright.nl/nieuws/1240853/rivian-leent-6-6-miljard-dollar-voor-bouw-fabriek-in-georgia.html",
                "urlToImage": "https://webp.br.cdn.pxr.nl/news/2024/11/26/ffc220b6725e31264144056a159cb6c8cafae367.jpg?width=1200",
                "publishedAt": "2024-11-26T22:30:19Z",
                "content": "Het heeft ruzie met Tesla, stopt met het ondersteunen van CarPlay, maar werkt samen met Volkswagen en de Amerikaanse overheid. Automerk Rivian leent van de Amerikaanse regering 6,6 miljard dollar om … [+1522 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "[Removed]"
                },
                "author": null,
                "title": "[Removed]",
                "description": "[Removed]",
                "url": "https://removed.com",
                "urlToImage": null,
                "publishedAt": "2024-11-26T22:28:11Z",
                "content": "[Removed]"
            },
            {
                "source": {
                    "id": null,
                    "name": "[Removed]"
                },
                "author": null,
                "title": "[Removed]",
                "description": "[Removed]",
                "url": "https://removed.com",
                "urlToImage": null,
                "publishedAt": "2024-11-26T22:23:46Z",
                "content": "[Removed]"
            },
            {
                "source": {
                    "id": null,
                    "name": "[Removed]"
                },
                "author": null,
                "title": "[Removed]",
                "description": "[Removed]",
                "url": "https://removed.com",
                "urlToImage": null,
                "publishedAt": "2024-11-26T22:13:57Z",
                "content": "[Removed]"
            },
            {
                "source": {
                    "id": null,
                    "name": "[Removed]"
                },
                "author": null,
                "title": "[Removed]",
                "description": "[Removed]",
                "url": "https://removed.com",
                "urlToImage": null,
                "publishedAt": "2024-11-26T22:04:22Z",
                "content": "[Removed]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Biztoc.com"
                },
                "author": "electrek.co",
                "title": "Elon Musk fires back on excluding Tesla from California’s new EV incentive he wants to kill",
                "description": "Elon Musk fired back at California Governor Gavin Newsom who said the state might exclude Tesla from a new EV incentive meant to replace the federal one Musk is trying to kill.\nThe knives are out.\nAs we previously reported, Trump’s transition team has already…",
                "url": "https://biztoc.com/x/2528b4487b9624f4",
                "urlToImage": "https://biztoc.com/cdn/808/og.png",
                "publishedAt": "2024-11-26T21:52:47Z",
                "content": "Elon Musk fired back at California Governor Gavin Newsom who said the state might exclude Tesla from a new EV incentive meant to replace the federal one Musk is trying to kill.The knives are out.As w… [+149 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Japan Today"
                },
                "author": null,
                "title": "Auto industry's shift toward EVs is expected to go on despite Trump threat to kill tax credits",
                "description": "If President-elect Donald Trump makes good on his threat to kill federal tax credits for electric vehicle purchases, it's likely that fewer buyers will choose EVs. Yet tax credits or not, auto companies show no intention of retreating from a steady transition…",
                "url": "https://japantoday.com/category/business/auto-industry%27s-shift-toward-evs-is-expected-to-go-on-despite-trump-threat-to-kill-tax-credits",
                "urlToImage": null,
                "publishedAt": "2024-11-26T21:45:01Z",
                "content": "If President-elect Donald Trump makes good on his threat to kill federal tax credits for electric vehicle purchases, it's likely that fewer buyers will choose EVs.\r\nYet tax credits or not, auto compa… [+7370 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Securityaffairs.com"
                },
                "author": "Pierluigi Paganini",
                "title": "Software firm Blue Yonder providing services to US and UK stores, including Starbucks, hit by ransomware attack",
                "description": "Blue Yonder, a supply chain software provider, suffered a ransomware attack, impacting operations for clients like Starbucks and grocery stores. A ransomware attack on Blue Yonder disrupted operations for several customers, including Starbucks and U.K. grocer…",
                "url": "https://securityaffairs.com/171434/uncategorized/blue-yonder-ransomware-attack.html",
                "urlToImage": "https://securityaffairs.com/wp-content/uploads/2014/01/starbucks-iphone-app-customize-drink.png",
                "publishedAt": "2024-11-26T21:42:39Z",
                "content": "The source code of Banshee Stealer leaked online\r\n | U.S. CISA adds Array Networks AG and vxAG ArrayOS flaw to its Known Exploited Vulnerabilities catalog\r\n | Thai police arrested Chinese hackers inv… [+119166 chars]"
            },
            {
                "source": {
                    "id": "the-next-web",
                    "name": "The Next Web"
                },
                "author": "Siôn Geschwindt",
                "title": "Cambridge spinout Molyon bets on lithium-sulfur in race for better batteries",
                "description": "Lithium-ion batteries have served us well, powering much of the modern world. However, today’s tech — everything from drones and EVs to the wretched Tesla cyber truck — demands denser batteries that charge faster and take you further. This push is driving sci…",
                "url": "https://thenextweb.com/news/cambridge-spinout-molyon-lithium-sulfur-battery-startup",
                "urlToImage": "https://img-cdn.tnwcdn.com/image/tnw-blurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2024%2F11%2Flithium-sulfur-drones-battery-startup.jpg&signature=271420312a4ba6b2de219931eda71477",
                "publishedAt": "2024-11-26T21:29:19Z",
                "content": "Lithium-ion batteries have served us well, powering much of the modern world. However, todays tech everything from drones and EVs to the wretched Tesla cyber truck demands denser batteries that charg… [+3061 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Foreign Policy"
                },
                "author": "James Palmer",
                "title": "What Trump’s Tariffs Will Mean for China",
                "description": "As the U.S. president-elect issues new threats, Beijing is already bracing for a shift.",
                "url": "https://foreignpolicy.com/2024/11/26/china-trump-tariffs-economy-manufacturing/",
                "urlToImage": "https://foreignpolicy.com/wp-content/uploads/2024/11/china-factory-economy-GettyImages-2185326325.jpg?w=1000",
                "publishedAt": "2024-11-26T21:28:00Z",
                "content": "Welcome to Foreign Policys China Brief.\r\nThe highlights this week: U.S. President-elect Donald Trump again threatens new tariffs on China, Beijing helps strike a deal at the United Nations climate co… [+10886 chars]"
            },
            {
                "source": {
                    "id": "bild",
                    "name": "Bild"
                },
                "author": "Michael Sauerbier",
                "title": "Trotz BSW-Neinsager - Brandenburgs Koalitionsvertrag steht",
                "description": "SPD und BSW präsentieren in Potsdam ihren Koalitionsvertrag, nachdem BSW-Abgeordnete ihre Treue zum SPD-Chef Dietmar Woidke zusichern.",
                "url": "https://www.bild.de/regional/berlin/koalitionsvertrag-in-brandenburg-spd-und-bsw-stellen-einigkeit-her-6746363f5bd9a96c079c847a",
                "urlToImage": "https://images.bild.de/6746363f5bd9a96c079c847a/dca200471f5521fd2036acbcee0fd292,297dfc0a?w=1280",
                "publishedAt": "2024-11-26T21:10:41Z",
                "content": "Potsdam Brandenburgs Koalitionsvertrag zwischen SPD und BSW ist perfekt. \r\nAm Mittwochnachmittag wird er in Potsdam vorgestellt. Doch vorher mussten die BSW-ler den SPD-Chef Dietmar Woidke ihre Treue… [+2468 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Yahoo Entertainment"
                },
                "author": "The Central News Agency 中央通訊社",
                "title": "經部再延長三大方案3年 拚投資台灣6千億目標",
                "description": "（中央社記者劉千綾台北27日電）美國總統當選人川普揚言對加拿大、墨西哥、中國提高關稅，多位立委今天關切經濟部如何協助台商回台和投資台灣三大方案延長規劃。經濟部官員表示，投資台灣三大方案規劃延長3年至2027年，目標增加新台幣6000億元投資，開放台商、外商皆可申請。",
                "url": "https://tw.news.yahoo.com/%E7%B6%93%E9%83%A8%E5%86%8D%E5%BB%B6%E9%95%B7%E4%B8%89%E5%A4%A7%E6%96%B9%E6%A1%883%E5%B9%B4-%E6%8B%9A%E6%8A%95%E8%B3%87%E5%8F%B0%E7%81%A36%E5%8D%83%E5%84%84%E7%9B%AE%E6%A8%99-050807880.html",
                "urlToImage": "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo-1200x1200.png",
                "publishedAt": "2024-11-26T21:08:07Z",
                "content": "25%-KY(3665)Tesla-KY(5243) 2025%2018 -KY()/30-KY -KY 20243396.69111.0527.99%3.2945.7728.416.8810445.262.9% -KY"
            },
            {
                "source": {
                    "id": "abc-news",
                    "name": "ABC News"
                },
                "author": "Max Zahn",
                "title": "Dow closes at record high, defying fears of panic sparked by Trump's tariff threat",
                "description": "Dow closes at record high, defying fears of panic sparked by Trump's tariff threatgo.com",
                "url": "https://abcnews.go.com/Business/dow-closes-record-high-defying-fears-panic-sparked/story?id=116252904",
                "urlToImage": "https://i.abcnewsfe.com/a/48c449d6-1ae6-4355-8aaa-1e1e790b8b29/new-york-stock-exchange-gty-lv-241126-2_1732656062131_hpMain_16x9.jpg?w=1600",
                "publishedAt": "2024-11-26T21:08:03Z",
                "content": "The Dow Jones Industrial Average closed at a record high on Tuesday, achieving the milestone less than 24 hours after a tariff pledge from President-elect Donald Trump sparked fears of a panic in the… [+1733 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Raw Story"
                },
                "author": "Erik De La Garza",
                "title": "‘Smells like a political shot’: MAGA world freaks out over Biden plan for EV-maker",
                "description": "A Biden administration plan to extend a $6 billion loan for an electric vehicle manufacturer to build an E.V. factory in Georgia sent MAGA world into a tailspin Tuesday.The plan announced Monday is reportedly part of a push to lock in Democratic climate polic…",
                "url": "https://www.rawstory.com/biden-administration/",
                "urlToImage": "https://www.rawstory.com/media-library/u-s-president-joe-biden-looks-on-during-carpenters-local-445-gotv-event-in-scranton-pennsylvania-u-s-november-2-2024-reu.jpg?id=54168638&width=1200&height=600&coordinates=0%2C500%2C0%2C500",
                "publishedAt": "2024-11-26T21:06:29Z",
                "content": "A Biden administration plan to extend a $6 billion loan for an electric vehicle manufacturer to build an E.V. factory in Georgia sent MAGA world into a tailspin Tuesday.\r\nThe plan announced Monday is… [+1651 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Addicted2success.com"
                },
                "author": "Grant Chen",
                "title": "How to Market Your Startup on a Tight Budget",
                "description": "Here's how to put low-cost plans into action that connect with customers and grow your audience without overspending.\nThe post How to Market Your Startup on a Tight Budget appeared first on Addicted 2 Success.",
                "url": "https://addicted2success.com/startups/how-to-market-your-startup-on-a-tight-budget/",
                "urlToImage": "https://addicted2success.com/wp-content/uploads/2024/11/How-to-Market-Your-Startup-on-a-Tight-Budget.png",
                "publishedAt": "2024-11-26T21:00:16Z",
                "content": "Unleash your business potential by harnessing Napoleon’s strategic genius.\r\nFrom dreaming big and thinking bold to moving fast and staying agile, these time-tested tactics are your blueprint for succ… [+7609 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Hibridosyelectricos.com"
                },
                "author": "Javier Gómara",
                "title": "Tesla por fin está poniendo remedio a uno de los mayores problemas de sus supercargadores",
                "description": "Una de las mayores complicaciones y frustraciones a la hora de utilizar un coche eléctrico es la recarga. Si bien la infraestructura, según el país en el que nos encontremos, todavía no está lo suficientemente extendida, hay problemas adicionales para muchos …",
                "url": "https://www.hibridosyelectricos.com/coches/tesla-por-fin-esta-poniendo-remedio-mayores-problemas-sus-supercargadores_77171_102.html",
                "urlToImage": "https://www.hibridosyelectricos.com/uploads/s1/87/19/02/supercargador-tesla_17_2000x1126.jpeg",
                "publishedAt": "2024-11-26T20:53:52Z",
                "content": "Una de las mayores complicaciones y frustraciones a la hora de utilizar un coche eléctrico es la recarga. Si bien la infraestructura, según el país en el que nos encontremos, todavía no está lo sufic… [+3317 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "International Business Times"
                },
                "author": "Maryam Khanum",
                "title": "Elon Musk Rages After California Governor Excludes Tesla from Rebate Program for Electric Car Buyers: 'Insane'",
                "description": "Electric vehicles sold by Tesla Inc. would not be included in a consumer rebates proposal presented by California Gov. Gavin Newsom, prompting a response from Tesla CEO Elon Musk.",
                "url": "https://www.ibtimes.com/elon-musk-rages-after-california-governor-excludes-tesla-rebate-program-electric-car-buyers-3752792",
                "urlToImage": "https://d.ibtimes.com/en/full/4564686/gavin-newsom-elon-musk.jpg",
                "publishedAt": "2024-11-26T20:52:38Z",
                "content": "California Gov. Gavin Newsom is encouraging constituents to buy electric vehicles by offering partial refunds in a new proposal. However, buyers of vehicles sold by Tesla Inc. will not be included in… [+2355 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Pajiba.com"
                },
                "author": "Dustin Rowles",
                "title": "Taylor Sheridan's 'Landman' Is an Audaciously Tone-Deaf Love Letter to Fossil Fuels",
                "description": "The only thing on television this season more preposterous than Doctor Odyssey -- with its threesomes and quackers -- is Taylor Sheridan's latest on Paramount+, Landman. After all, what could be more bananas in 2024 than a show that unabashedly...\nRead more...",
                "url": "https://www.pajiba.com/tv_reviews/taylor-sheridans-landman-is-an-audaciously-tonedeaf-love-letter-to-fossil-fuels.php",
                "urlToImage": "https://www.pajiba.com/assets_c/2024/11/landman-thornton-thumb-700xauto-266882.jpg",
                "publishedAt": "2024-11-26T20:45:44Z",
                "content": "The only thing on television this season more preposterous than Doctor Odyssey — with its threesomes and quackers — is Taylor Sheridan’s latest on Paramount+, Landman. After all, what could be more b… [+5042 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Honolulu Star-Advertiser"
                },
                "author": "Reuters",
                "title": "Musk uses X to push his preferred political picks | Honolulu Star-Advertiser",
                "description": "Billionaire Elon Musk has been using his social media platform X to go to bat for President-elect Donald Trump’s cabinet picks and promote his own preferred candidates, advocating for choices he views as change agents who will help remake the U.S. government.",
                "url": "https://www.staradvertiser.com/2024/11/26/breaking-news/musk-uses-x-to-push-his-preferred-political-picks/",
                "urlToImage": "https://www.staradvertiser.com/wp-content/uploads/2024/11/web1_2024-11-26T172030Z_1_LYNXNPEKAP0RD_RTROPTP_3_USA-TRUMP-MUSK-X.JPG",
                "publishedAt": "2024-11-26T20:44:13Z",
                "content": "Billionaire Elon Musk has been using his social media platform X to go to bat for President-elect Donald Trump’s cabinet picks and promote his own preferred candidates, advocating for choices he view… [+6010 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "POLITICO.eu"
                },
                "author": "Nette Nöstlinger",
                "title": "Germany’s industrial woes stir anger ahead of key election",
                "description": "As layoffs threaten German auto and steel workers, unions are threatening large-scale strikes and politicians are fumbling for answers.",
                "url": "https://www.politico.eu/article/germanys-industrial-woes-key-election-volkswagen-plants-thorsten-groger-ig-metall-labor-union-profits/",
                "urlToImage": "https://www.politico.eu/cdn-cgi/image/width=1200,height=630,fit=crop,quality=80,onerror=redirect/wp-content/uploads/2024/11/26/GettyImages-2180848172-scaled.jpg",
                "publishedAt": "2024-11-26T20:40:30Z",
                "content": "Gröger said warning strikes will take place before Dec. 9, ahead of the next round of negotiations with management over cost cuts, and threatened much more sweeping action should talks go poorly. The… [+1815 chars]"
            }
        ]
    

    constructor() {
        super()
        this.state = {
            topNews: this.news
        }
    }
    render() {
        return (
            <div className='container my-4'>
                <h2>HeadLines</h2>
                <div className='row'>
                    {this.state.topNews.map((data) => {
                        return <div className='col-4'>
                            <NewsItem title={data.title.slice(0, 40)} desc={data.description.slice(0, 80)}
                                imageUrl={data.urlToImage} newsUrl={data.url} />
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

export default NewsMain
import { combineReducers } from "redux";
import {
  ADD_NODE,
  REMOVE_NODE,
  RESET_NODES,
  POP_NODE,
  EDIT_SEARCH
} from "./actions";

const node_reducer = (state = [], action) => {
  state = [...state];
  switch (action.type) {
    case ADD_NODE:
      state.push(action.payload);
      return state;
    case POP_NODE:
      state.pop();
      return state;
    case RESET_NODES:
      return [];
    case REMOVE_NODE:
      state = state.filter(node => node.index !== action.payload);
      return state;
    default:
      return state;
  }
};
const place_reducer = (state, action) => [
  {
    name: "TopkapıSarayı",
    renderName: "Topkapi Palace",
    desc:
      "The Topkapı Palace or the Seraglio, is a large museum in Istanbul, Turkey. In the 15th century, it served as the main residence and administrative headquarters of the Ottoman sultans ",
    latitude: 41.013,
    longitude: 28.984,
    index: 0,
    priority: 1
  },
  {
    name: "SultanahmetCamii",
    renderName: "Sultan Ahmed Mosque",
    desc:
      "Sultan Ahmed Mosque also known as the Blue Mosque is a historic mosque located in Istanbul, Turkey. It remains a functioning mosque, while also attracting large numbers of tourist visitors. Hand-painted blue tiles adorn the mosque’s interior walls, and at night the mosque is bathed in blue as lights frame the mosque’s five main domes, six minarets and eight secondary domes. It sits next to the Hagia Sophia, another popular tourist site.",
    latitude: 41.005441,
    longitude: 28.976795,
    index: 1,
    priority: 1
  },
  {
    name: "AyaSofya",
    renderName: "Hagia Sophia",
    desc:
      'Hagia Sophia is the former Greek Orthodox Christian patriarchal cathedral, later an Ottoman imperial mosque and now a museum (Ayasofya Müzesi) in Istanbul, Turkey. Built in AD 537 at the beginning of the Middle Ages, it was famous in particular for its massive dome. It was the world\'s largest building and an engineering marvel of its time. It is considered the epitome of Byzantine architecture and is said to have "changed the history of architecture".',
    latitude: 41.008609,
    longitude: 28.980184,
    index: 2,
    priority: 1
  },
  {
    name: "YerebatanSarnıcı",
    renderName: "Basilica Cistern",
    desc: `The Basilica Cistern, or Cisterna Basilica "Subterranean Cistern", is the largest of several hundred ancient cisterns that lie beneath the city of Istanbul (formerly Constantinople), Turkey. The cistern, located 150 meters (490 ft) southwest of the Hagia Sophia. Today it is kept with little water, for public access inside the space. `,
    latitude: 41.008384,
    longitude: 28.977878,
    index: 3,
    priority: 1
  },
  {
    name: "KapalıÇarşı",
    renderName: "Grand Bazaar",
    desc: `The Grand Bazaar (Turkish: Kapalıçarşı, meaning ‘Covered Market’; also Büyük Çarşı, meaning ‘Grand Market’) in Istanbul is one of the largest and oldest covered markets in the world, with 61 covered streets and over 4,000 shops on a total area of 30,700 m2, attracting between 250,000 and 400,000 visitors daily. In 2014, it was listed No.1 among the world's most-visited tourist attractions with 91,250,000 annual visitors. The Grand Bazar at Istanbul is often regarded as one of the first shopping malls of the world. `,
    latitude: 41.010685,
    longitude: 28.968057,
    index: 4,
    priority: 1
  },
  {
    name: "MısırÇarşısı",
    renderName: "Spice Bazaar",
    desc: `The Spice Bazaar (Turkish: Mısır Çarşısı, meaning Egyptian Bazaar) in Istanbul, Turkey is one of the largest bazaars in the city. Located in the Eminönü, it is the most famous covered shopping complex after the Grand Bazaar. `,
    latitude: 41.016532,
    longitude: 28.970519,
    index: 5,
    priority: 1
  },
  {
    name: "GalataKulesi",
    renderName: "Galata Tower",
    desc: `The Galata Tower called Christea Turris (the Tower of Christ in Latin) by the Genoese — is a medieval stone tower in the Galata/Karaköy quarter of Istanbul, Turkey, just to the north of the Golden Horn's junction with the Bosphorus. It is a high, cone-capped cylinder that dominates the skyline and offers a panoramic vista of Istanbul's historic peninsula and its environs. The Galata District is also famous among tourists for accommodation cause it contains a lot of art shops, vintage corners and coffee shops by the sides of hotel/s and airbnb homes.`,
    latitude: 41.025667,
    longitude: 28.974166,
    index: 6,
    priority: 1
  },
  {
    name: "İstiklalCaddesi",
    renderName: "Istiklal Avenue",
    desc: `İstiklal Avenue or Istiklal Street (French: Grande Rue de Péra; English: "Independence Avenue") is one of the most famous avenues in Istanbul, Turkey, visited by nearly 3 million people in a single day over the course of weekends. Located in the historic Beyoğlu (Pera) district and near Galata district, it is an elegant pedestrian street, 1.4 kilometres (0.87 mi) long, which houses boutiques, music stores, bookstores, art galleries, cinemas, theatres, libraries, cafés, pubs, nightclubs with live music, historical patisseries, chocolateries and restaurants. `,
    latitude: 41.036172,
    longitude: 28.984362,
    index: 7,
    priority: 1
  },
  {
    name: "TaksimMeydanı",
    renderName: "Taksim Square",
    desc: `Taksim Square situated in Beyoğlu in the European part of Istanbul, Turkey, is a major tourist and leisure district famed for its restaurants, shops, and hotels. It is considered the heart of modern Istanbul, with the central station of the Istanbul Metro network. Taksim Square is also the location of the Republic Monument (Turkish: Cumhuriyet Anıtı) which was crafted by Pietro Canonica and inaugurated in 1928. The monument commemorates the 5th anniversary of the foundation of the Republic of Turkey in 1923, following the Turkish War of Independence. `,
    latitude: 41.037013,
    longitude: 28.985127,
    index: 8,
    priority: 1
  },
  {
    name: "DolmabahçeSarayı",
    renderName: "Dolmabahce Palace",
    desc: `Dolmabahçe Palace (Turkish: Dolmabahçe Sarayı) located in the Beşiktaş district of Istanbul, Turkey, on the European coast of the Strait of Istanbul. It was built between the years 1843 and 1856 and served as the main administrative center of the Ottoman Empire from 1856 to 1887 and from 1909 to 1922 (Yıldız Palace was used in the interim period). `,
    latitude: 41.039172,
    longitude: 29.000459,
    index: 9,
    priority: 1
  },
  {
    name: "ArkeolojiMüzesi",
    renderName: "Istanbul Archaeological Museums",
    desc: `The Istanbul Archaeology Museums are a group of three archaeological museums located in the Eminönü district of Istanbul, Turkey, near Gülhane Park and Topkapı Palace.
    The Istanbul Archaeology Museums consists of three museums:
        1. Archaeological Museum (in the main building)
        2. Museum of the Ancient Orient
        3. Museum of Islamic Art (in the Tiled Kiosk).
    It houses over one million objects that represent almost all of the eras and civilizations in world history.
    `,
    latitude: 41.0116986,
    longitude: 28.9813227,
    index: 10,
    priority: 2
  },
  {
    name: "GülhaneParkı",
    renderName: "Gulhane Park",
    desc: `Gülhane Park (Turkish: Gülhane Parkı, "Rosehouse Park"; from Persian: گلخانه Gulkhāna, "house of flowers") is a historical urban park in the Eminönü district of Istanbul, Turkey; it is adjacent to and on the grounds of the Topkapı Palace. The south entrance of the park sports one of the larger gates of the palace. It is the oldest and one of the most expansive public parks in Istanbul. `,
    latitude: 41.013231,
    longitude: 28.981277,
    index: 11,
    priority: 2
  },
  {
    name: "SirkeciTrenGarı",
    renderName: "Sirkeci Railway Station",
    desc: `Sirkeci railway station (Turkish: Sirkeci garı), listed on maps as Istanbul railway station (Turkish: İstanbul garı), is a railway terminal in Istanbul. The terminal is located on the tip of Istanbul's historic peninsula right next to the Golden Horn and just northwest of Gülhane Park and the Topkapı Palace. Sirkeci Terminal, along with Haydarpaşa Terminal on the other side of the Bosphorus, are Istanbul's two intercity and commuter railway terminals. Built in 1890 by the Oriental Railway as the eastern terminus of the world-famous Orient Express, Sirkeci Terminal has become a symbol of the city. On 29 October 2013, a new underground station opened to the public and is currently serviced by Marmaray trains travelling across the Bosphorus underground. `,
    latitude: 41.01535,
    longitude: 28.976854,
    index: 12,
    priority: 2
  },
  {
    name: "HaydarpaşaTrenGarı",
    renderName: "Haydarpasa Railway Station",
    desc: `Haydarpaşa station (Turkish: Haydarpaşa Garı) is a railway station in Istanbul. Until 2012 the station was a major intercity, regional and commuter rail hub as well as the busiest railway station in Turkey. Haydarpaşa, along with Sirkeci station (on the other side of the Bosphorus), are Istanbul's two intercity and commuter railway terminals. As of 19 June 2013 all train service to the station has been indefinitely suspended due to the rehabilitation of the existing line for the new Marmaray commuter rail line.
    The station building, built in 1909 by the Anatolian Railway as the western terminus of the Baghdad and Hedjaz railways, has become a symbol of Istanbul and Turkey and is famous throughout the Middle East.`,
    latitude: 40.996833,
    longitude: 29.019315,
    index: 13,
    priority: 2
  },
  {
    name: "KızKulesi",
    renderName: "Maidens's Tower",
    desc: `The Maiden's Tower (Turkish: Kız Kulesi), also known as Leander's Tower (Tower of Leandros) since the medieval Byzantine period, is a tower lying on a small islet located at the southern entrance of the Bosphorus strait 200 m (220 yd) from the coast of Üsküdar in Istanbul, Turkey.

    There are many legends about the construction of the tower and its location. According to one legend, an emperor had a much beloved daughter and one day, an oracle prophesied that she would be killed by a venomous snake on her 18th birthday. The emperor, in an effort to thwart his daughter's early demise by placing her away from land so as to keep her away from any snakes, had the tower built in the middle of the Bosphorus to protect his daughter until her 18th birthday. The princess was placed in the tower, where she was frequently visited only by her father.
    On the 18th birthday of the princess, the emperor brought her a basket of exotic sumptuous fruits as a birthday gift, delighted that he was able to prevent the prophecy. Upon reaching into the basket, however, an asp that had been hiding among the fruit bit the young princess and she died in her father's arms, just as the oracle had predicted, hence the name Maiden's Tower. `,
    latitude: 41.021122,
    longitude: 29.004153,
    index: 14,
    priority: 2
  },
  {
    name: "SüleymaniyeCamii",
    renderName: "Süleymaniye Mosque",
    desc: `The Süleymaniye Mosque is an Ottoman imperial mosque located on the Third Hill of Istanbul, Turkey. The mosque was commissioned by Suleiman the Magnificent and designed by the imperial architect Mimar Sinan. An inscription specifies the foundation date as 1550 and the inauguration date as 1557. It is the second largest mosque in the city, the city's largest Ottoman-era mosque, and one of the best-known sights of Istanbul. `,
    latitude: 41.016285,
    longitude: 28.964132,
    index: 15,
    priority: 2
  },
  {
    name: "SaltGalata",
    renderName: "SALT Galata",
    desc: `SALT is a Turkish contemporary art institution. It was started by Vasif Kortun and Garanti Bank in 2011, and has exhibition and workshop spaces in Istanbul and Ankara, Turkey. It combines the previous activities of the Garanti Gallery, the Ottoman Bank Archives and Research Centre and the Platform Garanti Contemporary Art Center of the bank.`,
    latitude: 41.024101,
    longitude: 28.973897,
    index: 16,
    priority: 2
  },
  {
    name: "PeraMüzesi",
    renderName: "Pera Museum",
    desc: `Pera Museum is an art museum in the Tepebaşı quarter of the Beyoğlu (Pera) district in Istanbul, Turkey, located at Meşrutiyet Avenue No. 65 (adjacent to İstiklal Avenue and in close proximity to Taksim Square.) It has a particular focus on Orientalism in 19th-century art. `,
    latitude: 41.031832,
    longitude: 28.975179,
    index: 17,
    priority: 2
  },
  {
    name: "İstanbulModern",
    renderName: "Istanbul Modern Art Museum",
    desc: `İstanbul Modern, Istanbul Museum of Modern Art, is a museum of contemporary art in the Beyoğlu district of Istanbul, Turkey. Inaugurated on December 11, 2004, the museum focuses on artists from Turkey. Levent Çalıkoğlu is the Museum Director General, and Oya Eczacıbaşı serves as the Chair of the Board of Directors.`,
    latitude: 41.029996,
    longitude: 28.973464,
    index: 18,
    priority: 2
  },
  {
    name: "NuruosmaniyeCamii",
    renderName: "Nuruosmaniye Mosque",
    desc: `The Nuruosmaniye Mosque  is an 18th-century Ottoman mosque located in the Çemberlitaş neighbourhood of Fatih district in Istanbul, Turkey. In 2016 it was inscribed in the Tentative list of World Heritage Sites in Turkey.`,
    latitude: 41.0104,
    longitude: 28.97040000000004,
    index: 19,
    priority: 2
  },
  {
    name: "Çemberlitaş",
    renderName: "Cemberlitas",
    desc: `The Column of Constantine (Turkish: Çemberlitaş Sütunu, from çemberli 'hooped' and taş 'stone'), also known as the Burnt Stone or the Burnt Pillar, is a Roman monumental column constructed on the orders of the Roman emperor Constantine the Great in 330 AD. It commemorates the declaration of Byzantium (renamed by Constantine as Nova Roma) as the new capital city of the Roman Empire. The column is located in the neighborhood (named after the column) of Çemberlitaş, central Istanbul, along the old Road to the Imperial Council (Divan Yolu) between the Hippodrome of Constantinople (now Sultanahmet Square) and the Forum of Theodosius (now Beyazıt Square). `,
    latitude: 41.0085,
    longitude: 28.971599999999967,
    index: 20,
    priority: 2
  },
  {
    name: "YıldızSarayı",
    renderName: "Yildiz Palace",
    desc: `Yıldız Palace is a vast complex of former imperial Ottoman pavilions and villas in Istanbul, Turkey, built in the 19th and early 20th centuries. It was used as a residence by the Sultan and his court in the late 19th century. `,
    latitude: 41.049225,
    longitude: 29.011122,
    index: 21,
    priority: 3
  },
  {
    name: "ÇırağanSarayı",
    renderName: "Ciragan Palace",
    desc: `Çırağan Palace a former Ottoman palace, is now a five-star hotel in the Kempinski Hotels chain. It is located on the European shore of the Bosporus, between Beşiktaş and Ortaköy in Istanbul, Turkey.
    The Sultan’s Suite, billed at US$35,419.68 per night, is ranked number 14 on World's 15 most expensive hotel suites compiled by CNN Go in 2012. `,
    latitude: 41.043522,
    longitude: 29.01565,
    index: 22,
    priority: 3
  },
  {
    name: "RumeliHisarı",
    renderName: "Rumeli Fortress",
    desc: `Rumelihisarı (also known as Rumelian Castle and Roumeli Hissar Castle) or Boğazkesen Castle (literally meaning "Strait-Cutter Castle") is a medieval fortress located in Istanbul, Turkey, on a series of hills on the European banks of the Bosphorus. The fortress also lends its name to the immediate neighborhood around it in the city's Sarıyer district. `,
    latitude: 41.084855,
    longitude: 29.056687,
    index: 23,
    priority: 3
  },
  {
    name: "DenizMüzesi",
    renderName: "Naval Museum",
    desc: `The Istanbul Naval Museum is a national naval museum, located at Beşiktaş district of Istanbul in Turkey. It was established in 1897 by the Ottoman Minister of Navy Bozcaadalı Hasan Hüsnü Pasha.`,
    latitude: 41.041653,
    longitude: 29.005432,
    index: 24,
    priority: 3
  },
  {
    name: "FenerRumOrtodoksPatrikhanesi",
    renderName: "Patriarchal Church of St. George",
    desc: `The Ecumenical Patriarchate of Constantinople (Greek: Οἰκουμενικόν Πατριαρχεῖον Κωνσταντινουπόλεως, Oikoumenikón Patriarkhíon Konstantinoupóleos, Latin: Patriarchatus Oecumenicus Constantinopolitanus; Turkish: Rum Ortodoks Patrikhanesi] "Roman Orthodox Patriarchate") is one of the fourteen to sixteen autocephalous churches (or "jurisdictions") that together compose the Eastern Orthodox Church. It is headed by the Ecumenical Patriarch of Constantinople, currently Bartholomew I, Archbishop of Constantinople.`,
    latitude: 41.02901,
    longitude: 28.951761,
    index: 25,
    priority: 3
  },
  {
    name: "İstanbulAdaları",
    renderName: "Princes' Islands ",
    desc: `The Princes' Islands (Turkish: Prens Adaları, officially just Adalar ("Islands"), are an archipelago off the coast of Istanbul, Turkey, in the Sea of Marmara. The islands constitute the Adalar district of Istanbul Province. `,
    latitude: 40.872531079557255,
    longitude: 29.08918082325249,
    index: 26,
    priority: 3
  },
  {
    name: "GalataMevleviHanesi",
    renderName: "Galata Mevlevi Museum",
    desc: `The Galata Mevlevi Lodge (or Galata Mevlevihanesi) was built in 1491 and was the first Mawlawi house in Istanbul. It ceased to function as dervish tekke (lodge) in 1925 and opened as a museum in 1975 (after a brief spell as a school). It underwent a major refurbishment between 2005 and 2009 and now serves as a museum about the Mevlevi Sufi Islam sect. This Galata museum is low key affair, but offers an insight into a Turkey you won’t find elsewhere with information on the culture, music and traditions of the Mawlawi, and so is worth including on any Galata tour.`,
    latitude: 41.028036,
    longitude: 28.9751,
    index: 27,
    priority: 3
  },
  {
    name: "EyüpSultanCamii",
    renderName: "Eyup Sultan Mosque",
    desc: `The Eyüp Sultan Mosque is situated in the Eyüp district of Istanbul, outside the city walls near the Golden Horn. The present building dates from the beginning of the 19th century. The mosque complex includes a mausoleum marking the spot where Abu Ayub al-Ansari, the standard-bearer and friend of the Islamic prophet Muhammad, is said to have been buried.`,
    latitude: 41.047979,
    longitude: 28.933766,
    index: 28,
    priority: 3
  },
  {
    name: "SarayKoleksiyonlarıMüzesi",
    renderName: "Palace Collections Museum",
    desc: `National Palaces Painting Museum is an art museum in Istanbul, Turkey, opened at the Crown Prince Residence of Dolmabahçe Palace in 2014. The museum exhibits approximately 200 pieces from the palace's collection of paintings by both Turkish and international artists of the 19th century.`,
    latitude: 41.04126464548327,
    longitude: 29.004077911376953,
    index: 29,
    priority: 3
  },
  {
    name: "VefaKiliseCamii",
    renderName: "Vefa Kilise Mosque",
    desc: `Church-Mosque of Vefa (Turkish: Vefa Kilise Camii, meaning "the church mosque of Vefa" also known as Molla Gürani Camii after the name of his founder) is a former Eastern Orthodox church converted into a mosque by the Ottomans in Istanbul. The church was possibly dedicated to Hagios Theodoros (St. Theodore) but this dedication is far from certain. The complex represents one of the most important examples of Comnenian and Palaiologan architecture of Constantinople.`,
    latitude: 41.016329,
    longitude: 28.960421,
    index: 30,
    priority: 3
  },
  {
    name: "StAntoineKilisesi",
    renderName: "St. Antoine Church",
    desc: `St. Anthony of Padua Church, alternatively known as the Sent Antuan Bazilikası or Sant'Antonio di Padova Church, S. Antonio di Padova, St. Antoine, or locally as Sent Antuan, is a basilica and the largest church of the Roman Catholic Church in Istanbul, Turkey. It is located at İstiklal Avenue No. 171 in the Beyoğlu district. `,
    latitude: 41.03230812226611,
    longitude: 28.977132439613342,
    index: 31,
    priority: 3
  },
  {
    name: "BüyükMecidiyeCamii",
    renderName: "Grand Imperial Mosque",
    desc: `Ortaköy Mosque, officially the Büyük Mecidiye Camii (Grand Imperial Mosque of Sultan Abdülmecid) in Beşiktaş, Istanbul, Turkey, is situated at the waterside of the Ortaköy pier square, one of the most popular locations on the Bosphorus.`,
    latitude: 41.0472944,
    longitude: 29.0268268,
    index: 32,
    priority: 3
  },
  {
    name: "KariyeMüzesi",
    renderName: "Chore Church",
    desc: `The Church of the Holy Saviour in Chora is a medieval Byzantine Greek Orthodox church preserved as the Chora Museum in the Edirnekapı neighborhood of Istanbul. The neighborhood is situated in the western part of the municipality of the Fatih district. In the 16th century, during the Ottoman era, the church was converted into a mosque; it became a museum in 1948. The interior of the building is covered with some of the oldest and finest surviving Byzantine mosaics and frescoes; they were uncovered and restored after the building was secularized and turned into a museum. `,
    latitude: 41.032232,
    longitude: 28.939352,
    index: 33,
    priority: 4
  },
  {
    name: "FethiyeMüzesi",
    renderName: "Fethiye Museum",
    desc: `Fethiye Museum is in Çarşamba in İstanbul. It is the church of Pammakaristos Monastery which had been built in East-Roman period. The church consists of two buildings and had been built on the remnants of the old church after the end of Latin domination in 1261. The north church is dedicated to Mary. It had been built between 1292 and 1294 by Michael Doukas Tarchaneiotes who was the nephew of Emperor Michael Palaiologos VIII. After a while Maria, the wife of Michael Doukas had built a small additional church (Parecclesion) in 1315 dedicated to Christ at the right of the north church. This additional church is a grave chapel containing the graves of Maria and Michael.`,
    latitude: 41.02909,
    longitude: 28.946394,
    index: 34,
    priority: 4
  },
  {
    name: "SadberkHanımMüzesi",
    renderName: "Sadberk Hanim Museum",
    desc: `The Sadberk Hanım Museum is a private museum located at the Bosporus in Büyükdere quarter of Sarıyer district in Istanbul, Turkey. It was established by the Vehbi Koç Foundation in memory of Vehbi Koç’s deceased wife Sadberk. The museum is open every day except Wednesdays. `,
    latitude: 41.163059,
    longitude: 29.048158,
    index: 35,
    priority: 4
  },
  {
    name: "SabancıMüzesi",
    renderName: "Sabanci Museum",
    desc: `The Sabancı University Sakıp Sabancı Museum is a private fine arts museum in Istanbul, Turkey, dedicated to calligraphic art, religious and state documents, as well as paintings of the Ottoman era. The museum was founded by Sakıp Sabancı, and was opened in June 2002. Aside from permanent exhibitions, the museum also hosts national and foreign temporary exhibitions and, hosts cultural events on the weekends. `,
    latitude: 41.1060207,
    longitude: 29.0555191,
    index: 36,
    priority: 4
  },
  {
    name: "RahmiKoçMüzesi",
    renderName: "Rahmi Koc Museum",
    desc: `The Rahmi M. Koç Museum is a private industrial museum in Istanbul, Turkey dedicated to history of transport, industry and communications. Rahmi M. Koç, member of the wealthiest dynasty in Turkey and retired boss of the Koç Group, founded the museum in 1991, which was opened on December 13, 1994. The museum is located in the suburb of Hasköy on the north shore of the Golden Horn and situated in two historical buildings connected to each other. It is open to public every day except Monday.`,
    latitude: 41.0419735,
    longitude: 28.9485631,
    index: 37,
    priority: 4
  },
  {
    name: "RezanHasMüzesi",
    renderName: "Rezan Has Museum",
    desc: `The Rezan Has Museum is a private museum in Istanbul, Turkey dedicated to culture and arts. Rezan Has, spouse of the wealthy Turkish businessman Kadir Has, founded the museum in May 2007. The museum, situated in a historical building, is located in Cibali neighborhood of Fatih district on the southern shore of the Golden Horn. It is open to public every day between 9–18 local time.`,
    latitude: 41.02523632207417,
    longitude: 28.95874857902527,
    index: 38,
    priority: 4
  },
  {
    name: "KadiköyBoğaHeykeli",
    renderName: "Kadikoy Bull Statue",
    desc: `Bull Statue in Kadıköy is one of the symbols of the Asian side of Istanbul. It is located in Kadıköy Altıyol (Six roads in Turkish), in the middle of an intersection that connects six roads -Altıyol- and it makes the Kadıköy Bull Statue one of the busiest meeting points in Istanbul. `,
    latitude: 40.9904629,
    longitude: 29.0291571,
    index: 39,
    priority: 4
  },
  {
    name: "FatihCamii",
    renderName: "Fatih Mosque",
    desc: `The Fatih Mosque (Turkish: Fatih Camii, "Conqueror's Mosque" in English) is an Ottoman mosque in the Fatih district of Istanbul, Turkey. The original mosque on the site was constructed between 1463 and 1470 on the site of the Church of the Holy Apostles. It was seriously damaged in the 1766 earthquake and was rebuilt in 1771 to a different design. It is one of the largest examples of Turkish-Islamic architecture in Istanbul and represents an important stage in the development of classic Turkish architecture. It is named after Ottoman sultan Mehmed the Conqueror, known in Turkish as Fatih Sultan Mehmed, the Ottoman sultan who conquered Constantinople in 1453.`,
    latitude: 41.0197,
    longitude: 28.949799999999982,
    index: 40,
    priority: 4
  },
  {
    name: "BeylerbeyiSarayı",
    renderName: "Beylerbeyi Palace",
    desc: `The Beylerbeyi Palace, Beylerbeyi meaning "Lord of Lords", is located in the Beylerbeyi neighbourhood of Üsküdar district in Istanbul, Turkey at the Asian side of the Bosphorus. An Imperial Ottoman summer residence built in the 1860s, it is now situated immediately north of the 1973 Bosphorus Bridge. `,
    latitude: 41.0428,
    longitude: 29.040899999999965,
    index: 41,
    priority: 4
  },
  {
    name: "Miniatürk",
    renderName: "Miniatürk",
    desc: `Miniatürk is a miniature park situated at the north-eastern shore of Golden Horn in Istanbul, Turkey. It was opened May 2, 2003. Miniatürk covers a total area of 60,000 square metres (650,000 sq ft). It is one of the world's largest miniature parks with its 15,000 m2 (160,000 sq ft) model area. The park contains 122 models in 1:25 scale. It contains structures from in and around Turkey, as well as interpretations of historic structures.`,
    latitude: 41.05985762724478,
    longitude: 28.94869565963745,
    index: 42,
    priority: 4
  },
  {
    name: "BesYuzYılVakfıTürkMusevileriMüzesi",
    renderName: "Jewish Museum of Turkey",
    desc: `Jewish Museum of Turkey (officially Quincentennial Foundation Museum of Turkish Jews; Turkish: 500. Yıl Vakfı Türk Musevileri Müzesi) is a cultural center established by the Quincentennial Foundation to inform the society of the traditions and history of Turkish Jewry. It was inaugurated on November 25, 2001. The Quincentennial Foundation was established in 1989 by 113 Turkish citizens, Jews and Muslims alike, to celebrate the five hundredth anniversary of the arrival of Sephardim to the Ottoman Empire.[1] The idea of a museum was proposed by Naim Güleryüz who is now its curator and the foundation was financed by the prominent Jewish Kamhi family. `,
    latitude: 41.0267866,
    longitude: 28.9727283,
    index: 43,
    priority: 4
  },
  {
    name: "KırımKilisesi",
    renderName: "Christ Church",
    desc: `The Crimea Memorial Church, also known as Christ Church, is a Church of England church in the Beyoglu - Taksim district of Istanbul, Turkey. The current church was built on land donated by Sultan Abdulmecit and was constructed between 1858 and 1868 in memory of British soldiers who had participated in the Crimean War. `,
    latitude: 41.0276536,
    longitude: 28.9771216,
    index: 44,
    priority: 4
  },
  {
    name: "AirbnbEv",
    renderName: "Airbnb Home",
    latitude: 41.027789362007375,
    longitude: 28.977703679682463,
    index: 45,
    priority: 5
  }
];

const search_reducer = (state = "", action) => {
  if (action.type === EDIT_SEARCH) return action.payload;
  return state;
};

export default combineReducers({
  nodes: node_reducer,
  places: place_reducer,
  search: search_reducer
});

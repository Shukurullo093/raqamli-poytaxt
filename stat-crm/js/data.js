const data = [
    {
        "№": 1,
        "FISh": "Niyaxoʻdjayev Bekzod Ibraximovich",
        "Tugilgan yili": "3/3/08",
        "Tuman": "Bektemir ",
        "MFY": "Oltintopgan",
        "Toifasi": "Muntazam dars qoldiruvchi",
        "Biriktirilgan rahbarlar ": "Bektemir tumani IIO FMB boshlig`i podpolkovnik U.N.Xolmurodovich"
    },
    {
        "№": 2,
        "FISh": "Axmadov Sanjar Maxamadjon o`g`li",
        "Tugilgan yili": "2/16/95",
        "Tuman": "Bektemir ",
        "MFY": "Oltintopgan",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Bektemir tumani IIO FMB boshlig`i podpolkovnik U.N.Xolmurodovich"
    },
    {
        "№": 3,
        "FISh": "Mullajonova Zarifa Dilshod qizi",
        "Tugilgan yili": "5/24/08",
        "Tuman": "Bektemir ",
        "MFY": "Oltintopgan ",
        "Toifasi": "Notinch oila farzandi ",
        "Biriktirilgan rahbarlar ": "Bektemir tumani IIO FMB boshlig`i 1-o`rinbosari podpolkovnik K.B.Xalikov"
    },
    {
        "№": 4,
        "FISh": "Arslonbekova Karima Otabek qizi",
        "Tugilgan yili": "5/15/09",
        "Tuman": "Bektemir ",
        "MFY": "Oltintopgan ",
        "Toifasi": "Notinch oila farzandi ",
        "Biriktirilgan rahbarlar ": "Bektemir tumani IIO FMB boshlig`i 1-o`rinbosari podpolkovnik K.B.Xalikov"
    },
    {
        "№": 5,
        "FISh": "Sheraliyev Begzod Sherzod oʻgʻli",
        "Tugilgan yili": "10/26/10",
        "Tuman": "Bektemir ",
        "MFY": "Soxil",
        "Toifasi": "Notinch oila farzandi ",
        "Biriktirilgan rahbarlar ": "Bektemir tumani IIO FMB boshlig`i o`rinbosari podpolkovnik Z.Z.Turakulov"
    },
    {
        "№": 6,
        "FISh": "Rustamov Avaz Axmad  oʻgʻli",
        "Tugilgan yili": "7/21/10",
        "Tuman": "Bektemir ",
        "MFY": "Soxil",
        "Toifasi": "Notinch oila farzandi ",
        "Biriktirilgan rahbarlar ": "Bektemir tumani IIO FMB boshlig`i o`rinbosari podpolkovnik Z.Z.Turakulov"
    },
    {
        "№": 7,
        "FISh": "Islomqulov Erkin Javohir o`g`li ",
        "Tugilgan yili": "5/12/95",
        "Tuman": "Bektemir ",
        "MFY": "Soxil",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Bektemir tumani IIO FMB boshlig`i o`rinbosari podpolkovnik N.A.Axmadjanov"
    },
    {
        "№": 8,
        "FISh": "Kim Danil Viktorovich",
        "Tugilgan yili": "27.10.2007",
        "Tuman": "Bektemir ",
        "MFY": "Xusayn bayqaro",
        "Toifasi": "Muntazam dars qoldiruvchi",
        "Biriktirilgan rahbarlar ": "Bektemir tumani IIO FMB boshlig`i o`rinbosari podpolkovnik N.A.Axmadjanov"
    },
    {
        "№": 9,
        "FISh": "Bogdanov Azizbek Dmitriyevich ",
        "Tugilgan yili": "10/9/01",
        "Tuman": "Bektemir ",
        "MFY": "Xusayn bayqaro",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Bektemir tumani IIO FMB boshlig`i o`rinbosari podpolkovnik F.Sh.Akmalov"
    },
    {
        "№": 10,
        "FISh": "Bogdanov Asilbek Dmitrevich",
        "Tugilgan yili": "29.07.2009",
        "Tuman": "Bektemir ",
        "MFY": "Xusayn bayqaro",
        "Toifasi": "Agressiv xulq-atvor",
        "Biriktirilgan rahbarlar ": "Bektemir tumani IIO FMB boshlig`i o`rinbosari podpolkovnik X.S.Suinbayev"
    },
    {
        "№": 11,
        "FISh": "Axmedov Javoxir G`anijon o`g`li ",
        "Tugilgan yili": "8/19/96",
        "Tuman": "Bektemir ",
        "MFY": "Xusayn bayqaro",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Bektemir tumani QB boshlig`i mayor B.N.Sobirov"
    },
    {
        "№": 12,
        "FISh": "Baxtiyorov Ismoil Dilmurod o'g'li",
        "Tugilgan yili": "1/13/96",
        "Tuman": "Chilonzor ",
        "MFY": "Mevazor",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Сhilonzor tumani IIO FMB boshlig`i podpolkovnik N.I.Xaydarov"
    },
    {
        "№": 13,
        "FISh": "Abdulboriyev Rovshan Muxammadrashod o'g'li",
        "Tugilgan yili": "1/5/97",
        "Tuman": "Chilonzor ",
        "MFY": "Mevazor",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Сhilonzor tumani IIO FMB boshlig`i podpolkovnik N.I.Xaydarov"
    },
    {
        "№": 14,
        "FISh": "Kabirjonov Jamshidjon Kaxramon o'g'li",
        "Tugilgan yili": "9/17/97",
        "Tuman": "Chilonzor ",
        "MFY": "Mevazor",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Сhilonzor tumani IIO FMB boshlig`i podpolkovnik N.I.Xaydarov"
    },
    {
        "№": 15,
        "FISh": "Kamoldinov Kozimjon G‘Ulomjon o'g'li",
        "Tugilgan yili": "9/25/00",
        "Tuman": "Chilonzor ",
        "MFY": "Mexrjon",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Сhilonzor tumani IIO FMB boshlig`i podpolkovnik N.I.Xaydarov"
    },
    {
        "№": 16,
        "FISh": "Abdullayev Amir Odilovich",
        "Tugilgan yili": "8/11/96",
        "Tuman": "Chilonzor ",
        "MFY": "Mexrjon",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Сhilonzor tumani IIO FMB boshlig`i podpolkovnik N.I.Xaydarov"
    },
    {
        "№": 17,
        "FISh": "Kamolidinov Nozimjon G‘ulomjon o'g'li",
        "Tugilgan yili": "4/21/02",
        "Tuman": "Chilonzor ",
        "MFY": "Mexrjon",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Сhilonzor tumani IIO FMB boshlig`i podpolkovnik N.I.Xaydarov"
    },
    {
        "№": 18,
        "FISh": "Jahongirov Nabijon Akrom o'g'li",
        "Tugilgan yili": "6/2/99",
        "Tuman": "Chilonzor ",
        "MFY": "Mexrjon",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Сhilonzor tumani IIO FMB boshlig`i podpolkovnik N.I.Xaydarov"
    },
    {
        "№": 19,
        "FISh": "Axmatov Jasur Baxtiyor o'g'li",
        "Tugilgan yili": "8/22/98",
        "Tuman": "Chilonzor ",
        "MFY": "Nafosat",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Сhilonzor tumani IIO FMB boshlig`i 1-o`rinbosari podpolkovnik Z.N.Toshpulatov"
    },
    {
        "№": 20,
        "FISh": "Shomirzayev Xabibullox Xamidullo o'g'li",
        "Tugilgan yili": "5/31/03",
        "Tuman": "Chilonzor ",
        "MFY": "Nafosat",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Сhilonzor tumani IIO FMB boshlig`i 1-o`rinbosari podpolkovnik Z.N.Toshpulatov"
    },
    {
        "№": 21,
        "FISh": "Suleymanov Samir Anvarovich",
        "Tugilgan yili": "4/21/08",
        "Tuman": "Chilonzor ",
        "MFY": "Nafosat",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Сhilonzor tumani IIO FMB boshlig`i 1-o`rinbosari podpolkovnik Z.N.Toshpulatov"
    },
    {
        "№": 22,
        "FISh": "Pirov Dilshod Baxtiyarovich",
        "Tugilgan yili": "7/24/95",
        "Tuman": "Chilonzor ",
        "MFY": "Naqqoshlik",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Сhilonzor tumani IIO FMB boshlig`i 1-o`rinbosari podpolkovnik Z.N.Toshpulatov"
    },
    {
        "№": 23,
        "FISh": "Alimov Muxammad Ixtiyorjon o'g'li",
        "Tugilgan yili": "11/9/98",
        "Tuman": "Chilonzor ",
        "MFY": "Naqqoshlik",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Сhilonzor tumani IIO FMB boshlig`i 1-o`rinbosari podpolkovnik Z.N.Toshpulatov"
    },
    {
        "№": 24,
        "FISh": "Jumaniyozov Yodgor Ermat o'g'li",
        "Tugilgan yili": "6/9/01",
        "Tuman": "Chilonzor ",
        "MFY": "Naqqoshlik",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Сhilonzor tumani IIO FMB boshlig`i 1-o`rinbosari podpolkovnik Z.N.Toshpulatov"
    },
    {
        "№": 25,
        "FISh": "Danilchenko Mixail Andreyevich",
        "Tugilgan yili": "6/24/96",
        "Tuman": "Chilonzor ",
        "MFY": "Novza",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Сhilonzor tumani IIO FMB boshlig`i 1-o`rinbosari podpolkovnik Z.N.Toshpulatov"
    },
    {
        "№": 26,
        "FISh": "Norboboyev Shaxzod Nurali o'g'li",
        "Tugilgan yili": "1/1/01",
        "Tuman": "Chilonzor ",
        "MFY": "Novza",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Сhilonzor tumani IIO FMB boshlig`i o`rinbosari podpolkovnik K.K.Kuchimov"
    },
    {
        "№": 27,
        "FISh": "Obolonskiy Sergey Aleksandrovich",
        "Tugilgan yili": "7/9/02",
        "Tuman": "Chilonzor ",
        "MFY": "Novza",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Сhilonzor tumani IIO FMB boshlig`i o`rinbosari podpolkovnik K.K.Kuchimov"
    },
    {
        "№": 28,
        "FISh": "Baxtiyorov Axmaddiyor Alisher o'g'li",
        "Tugilgan yili": "2/14/07",
        "Tuman": "Chilonzor ",
        "MFY": "Novza",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Сhilonzor tumani IIO FMB boshlig`i o`rinbosari podpolkovnik K.K.Kuchimov"
    },
    {
        "№": 29,
        "FISh": "Alijonov Sherzodjon Adhamjon o'g'li",
        "Tugilgan yili": "9/8/03",
        "Tuman": "Chilonzor ",
        "MFY": "Novza",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Сhilonzor tumani IIO FMB boshlig`i o`rinbosari podpolkovnik K.K.Kuchimov"
    },
    {
        "№": 30,
        "FISh": "Mansurov Niyaz Asifovich",
        "Tugilgan yili": "1/27/97",
        "Tuman": "Chilonzor ",
        "MFY": "Novza",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Сhilonzor tumani IIO FMB boshlig`i o`rinbosari podpolkovnik K.K.Kuchimov"
    },
    {
        "№": 31,
        "FISh": "Nishonboyev Yoqubjon Jumaboy o'g'li",
        "Tugilgan yili": "6/15/96",
        "Tuman": "Chilonzor ",
        "MFY": "Novza ",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Сhilonzor tumani IIO FMB boshlig`i o`rinbosari podpolkovnik K.K.Kuchimov"
    },
    {
        "№": 32,
        "FISh": "Ahmadov Akmalxo‘ja Nazirxo‘ja o'g'li",
        "Tugilgan yili": "10/13/97",
        "Tuman": "Chilonzor ",
        "MFY": "Oq-tepa",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Сhilonzor tumani IIO FMB boshlig`i o`rinbosari podpolkovnik K.K.Kuchimov"
    },
    {
        "№": 33,
        "FISh": "Usmonov Temurbek O‘ktam o'g'li",
        "Tugilgan yili": "3/2/97",
        "Tuman": "Chilonzor ",
        "MFY": "Oq-tepa",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Сhilonzor tumani IIO FMB boshlig`i o`rinbosari podpolkovnik M.T.Raxmatullayev"
    },
    {
        "№": 34,
        "FISh": "G‘Iyosov Azimjon Obidjon o'g'li",
        "Tugilgan yili": "3/29/98",
        "Tuman": "Chilonzor ",
        "MFY": "Qatortol",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Сhilonzor tumani IIO FMB boshlig`i o`rinbosari podpolkovnik M.T.Raxmatullayev"
    },
    {
        "№": 35,
        "FISh": "Lopachev Maksim Viktorovich",
        "Tugilgan yili": "4/18/04",
        "Tuman": "Chilonzor ",
        "MFY": "Qatortol",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Сhilonzor tumani IIO FMB boshlig`i o`rinbosari podpolkovnik M.T.Raxmatullayev"
    },
    {
        "№": 36,
        "FISh": "Pardayev Jasur Maxsud o'g'li",
        "Tugilgan yili": "10/24/02",
        "Tuman": "Chilonzor ",
        "MFY": "Qatortol",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Сhilonzor tumani IIO FMB boshlig`i o`rinbosari podpolkovnik M.T.Raxmatullayev"
    },
    {
        "№": 37,
        "FISh": "Alisherov Doniyor Dilmurod o'g'li",
        "Tugilgan yili": "9/29/01",
        "Tuman": "Chilonzor ",
        "MFY": "Qatortol",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Сhilonzor tumani IIO FMB boshlig`i o`rinbosari podpolkovnik M.T.Raxmatullayev"
    },
    {
        "№": 38,
        "FISh": "Abdullayev Obidxon Ubaydulla o'g'li",
        "Tugilgan yili": "2/20/98",
        "Tuman": "Chilonzor ",
        "MFY": "Qatortol",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Сhilonzor tumani IIO FMB boshlig`i o`rinbosari podpolkovnik M.T.Raxmatullayev"
    },
    {
        "№": 39,
        "FISh": "Shamsutdinova Madina Shukuritdinovna",
        "Tugilgan yili": "9/5/96",
        "Tuman": "Chilonzor ",
        "MFY": "Qozirabod",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Сhilonzor tumani IIO FMB boshlig`i o`rinbosari podpolkovnik M.T.Raxmatullayev"
    },
    {
        "№": 40,
        "FISh": "Amirxanov Marat Vladimirovich",
        "Tugilgan yili": "3/13/07",
        "Tuman": "Chilonzor ",
        "MFY": "Qozirabod",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Сhilonzor tumani IIO FMB boshlig`i o`rinbosari podpolkovnik N.M.Yunusov"
    },
    {
        "№": 41,
        "FISh": "Botirov Yormuhammad Marat o'g'li",
        "Tugilgan yili": "10/16/06",
        "Tuman": "Chilonzor ",
        "MFY": "Qozirabod",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Сhilonzor tumani IIO FMB boshlig`i o`rinbosari podpolkovnik N.M.Yunusov"
    },
    {
        "№": 42,
        "FISh": "Axmadiyev Maksim Nikolayevich",
        "Tugilgan yili": "4/1/06",
        "Tuman": "Chilonzor ",
        "MFY": "Qozirobod  ",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Сhilonzor tumani IIO FMB boshlig`i o`rinbosari podpolkovnik N.M.Yunusov"
    },
    {
        "№": 43,
        "FISh": "Xalilova Sevaraxon Baxtiyor qizi",
        "Tugilgan yili": "5/14/99",
        "Tuman": "Chilonzor ",
        "MFY": "Sharaf",
        "Toifasi": "Notinch oila farzandi ",
        "Biriktirilgan rahbarlar ": "Сhilonzor tumani IIO FMB boshlig`i o`rinbosari podpolkovnik N.M.Yunusov"
    },
    {
        "№": 44,
        "FISh": "O'razmatov Dilshod Muzaffar o'g'li",
        "Tugilgan yili": "7/19/05",
        "Tuman": "Chilonzor ",
        "MFY": "Sharaf",
        "Toifasi": "Notinch oila farzandi ",
        "Biriktirilgan rahbarlar ": "Сhilonzor tumani IIO FMB boshlig`i o`rinbosari podpolkovnik N.M.Yunusov"
    },
    {
        "№": 45,
        "FISh": "Yusupova Nodiraxon Axror qizi",
        "Tugilgan yili": "2/18/98",
        "Tuman": "Chilonzor ",
        "MFY": "Sharaf",
        "Toifasi": "Notinch oila farzandi ",
        "Biriktirilgan rahbarlar ": "Сhilonzor tumani IIO FMB boshlig`i o`rinbosari podpolkovnik N.M.Yunusov"
    },
    {
        "№": 46,
        "FISh": "A'zamova Ruqiya Mirali qizi",
        "Tugilgan yili": "2/14/98",
        "Tuman": "Chilonzor ",
        "MFY": "Sharaf",
        "Toifasi": "oilaviy ajrim yoqasidagi yosh oila ",
        "Biriktirilgan rahbarlar ": "Сhilonzor tumani IIO FMB boshlig`i o`rinbosari podpolkovnik N.M.Yunusov"
    },
    {
        "№": 47,
        "FISh": "Mirilyosov Abdullox Furqat o'g'li",
        "Tugilgan yili": "9/9/05",
        "Tuman": "Chilonzor ",
        "MFY": "Sharaf",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Сhilonzor tumani IIO FMB boshlig`i o`rinbosari podpolkovnik M.G`.Asqarov"
    },
    {
        "№": 48,
        "FISh": "Qobiljonov Maxamadjon Murodjon o'g'li",
        "Tugilgan yili": "3/11/96",
        "Tuman": "Chilonzor ",
        "MFY": "Sharaf",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Сhilonzor tumani IIO FMB boshlig`i o`rinbosari podpolkovnik M.G`.Asqarov"
    },
    {
        "№": 49,
        "FISh": "Turapov Asadbek Abduraxmonovich",
        "Tugilgan yili": "6/12/02",
        "Tuman": "Chilonzor ",
        "MFY": "Sharq",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Сhilonzor tumani IIO FMB boshlig`i o`rinbosari podpolkovnik M.G`.Asqarov"
    },
    {
        "№": 50,
        "FISh": "Sobirjonov Toxirjon Shokirjon o'g'li",
        "Tugilgan yili": "6/9/04",
        "Tuman": "Chilonzor ",
        "MFY": "Sharq",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Сhilonzor tumani IIO FMB boshlig`i o`rinbosari podpolkovnik M.G`.Asqarov"
    },
    {
        "№": 51,
        "FISh": "Erpo‘Latov Abdulaziz Sherpo‘Lat o'g'li",
        "Tugilgan yili": "6/30/05",
        "Tuman": "Chilonzor ",
        "MFY": "Sharq",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Сhilonzor tumani IIO FMB boshlig`i o`rinbosari podpolkovnik M.G`.Asqarov"
    },
    {
        "№": 52,
        "FISh": "Azimov Ilyosjon Zoxidjon o'g'li",
        "Tugilgan yili": "10/3/06",
        "Tuman": "Chilonzor ",
        "MFY": "Sharq",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Сhilonzor tumani IIO FMB boshlig`i o`rinbosari podpolkovnik M.G`.Asqarov"
    },
    {
        "№": 53,
        "FISh": "Xusanov Rixsitilla Zafar o'g'li",
        "Tugilgan yili": "7/25/02",
        "Tuman": "Chilonzor ",
        "MFY": "Sharq",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Сhilonzor tumani IIO FMB boshlig`i o`rinbosari podpolkovnik M.G`.Asqarov"
    },
    {
        "№": 54,
        "FISh": "Eshmatov Jamoliddin Javdatovich",
        "Tugilgan yili": "11/9/98",
        "Tuman": "Chilonzor ",
        "MFY": "Sharq",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Сhilonzor tumani QB boshlig`i podpolkovnik B.S.Yuldashev"
    },
    {
        "№": 55,
        "FISh": "Toyirov Murod Yusufjon o'g'li",
        "Tugilgan yili": "10/10/95",
        "Tuman": "Chilonzor ",
        "MFY": "Sharq",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Сhilonzor tumani QB boshlig`i podpolkovnik B.S.Yuldashev"
    },
    {
        "№": 56,
        "FISh": "Adashov Tohirjon Hasan o'g'li",
        "Tugilgan yili": "12/28/00",
        "Tuman": "Chilonzor ",
        "MFY": "Sharq",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Сhilonzor tumani QB boshlig`i podpolkovnik B.S.Yuldashev"
    },
    {
        "№": 57,
        "FISh": "Fatullayev Elyor Erali o'g'li",
        "Tugilgan yili": "4/9/96",
        "Tuman": "Chilonzor ",
        "MFY": "Shuxrat",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Сhilonzor tumani QB boshlig`i podpolkovnik B.S.Yuldashev"
    },
    {
        "№": 58,
        "FISh": "Xusanov Muxiddin Xusniddin o'g'li",
        "Tugilgan yili": "2/13/03",
        "Tuman": "Chilonzor ",
        "MFY": "Shuxrat",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Сhilonzor tumani QB boshlig`i podpolkovnik B.S.Yuldashev"
    },
    {
        "№": 59,
        "FISh": "Xasanov Nuriddin Kamaliddinovich",
        "Tugilgan yili": "6/13/97",
        "Tuman": "Chilonzor ",
        "MFY": "Shuxrat",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Сhilonzor tumani QB boshlig`i podpolkovnik B.S.Yuldashev"
    },
    {
        "№": 60,
        "FISh": "Ahrorov Хusan Adham o’g’li",
        "Tugilgan yili": "03.04.2002",
        "Tuman": "Mirobod ",
        "MFY": "Temiryoʻlchilar",
        "Toifasi": "Giyohvandlikka va spirtlik ichimlikka ruju qoʻygan",
        "Biriktirilgan rahbarlar ": "Mirobod tumani IIO FMB boshlig`i podpolkovnik O.V.Xadjayev"
    },
    {
        "№": 61,
        "FISh": "Ziyayeva Asalхon Umidjon qizi",
        "Tugilgan yili": "07.11.2007",
        "Tuman": "Mirobod ",
        "MFY": "Temiryoʻlchilar",
        "Toifasi": "Notinch oila farzandi ",
        "Biriktirilgan rahbarlar ": "Mirobod tumani IIO FMB boshlig`i podpolkovnik O.V.Xadjayev"
    },
    {
        "№": 62,
        "FISh": "Prokudina Darya Vyacheslavovna",
        "Tugilgan yili": "11.04.2009",
        "Tuman": "Mirobod ",
        "MFY": "Temiryoʻlchilar",
        "Toifasi": "Notinch oila farzandi ",
        "Biriktirilgan rahbarlar ": "Mirobod tumani IIO FMB boshlig`i podpolkovnik O.V.Xadjayev"
    },
    {
        "№": 63,
        "FISh": "Хolmirzaev Sherzod Isomiddinovich",
        "Tugilgan yili": "18.04.2008",
        "Tuman": "Mirobod ",
        "MFY": "Temiryoʻlchilar",
        "Toifasi": "Agressiv xulq-atvor",
        "Biriktirilgan rahbarlar ": "Mirobod tumani IIO FMB boshlig`i 1-o`rinbosari podpolkovnik B.K.Rustamov"
    },
    {
        "№": 64,
        "FISh": "Abdullayev Sherzod Maхmudjon  o’g’li",
        "Tugilgan yili": "27.12.2002",
        "Tuman": "Mirobod ",
        "MFY": "Tolariq  ",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Mirobod tumani IIO FMB boshlig`i 1-o`rinbosari podpolkovnik B.K.Rustamov"
    },
    {
        "№": 65,
        "FISh": "Anisimov Shavkat Хusniddinovich",
        "Tugilgan yili": "07.06.2006",
        "Tuman": "Mirobod ",
        "MFY": "Tong Yulduzi  ",
        "Toifasi": "Profilaktik hisobda turgan yoshlar",
        "Biriktirilgan rahbarlar ": "Mirobod tumani IIO FMB boshlig`i 1-o`rinbosari podpolkovnik B.K.Rustamov"
    },
    {
        "№": 66,
        "FISh": "Anpilogov Yuriy Yurevich",
        "Tugilgan yili": "29.09.2001",
        "Tuman": "Mirobod ",
        "MFY": "Tong Yulduzi  ",
        "Toifasi": "Giyohvandlikka va spirtlik ichimlikka ruju qoʻygan",
        "Biriktirilgan rahbarlar ": "Mirobod tumani IIO FMB boshlig`i o`rinbosari podpolkovnik O.L.Xasanov"
    },
    {
        "№": 67,
        "FISh": "Turg‘Unov Sherzod Davlat  o’g’li",
        "Tugilgan yili": "20.04.1998",
        "Tuman": "Mirobod ",
        "MFY": "Yangi Qoʻyliq  ",
        "Toifasi": "Profilaktik hisobda turgan yoshlar",
        "Biriktirilgan rahbarlar ": "Mirobod tumani IIO FMB boshlig`i o`rinbosari podpolkovnik O.L.Xasanov"
    },
    {
        "№": 68,
        "FISh": "Aхmedov Kamoliddin Gofurjon  o’g’li",
        "Tugilgan yili": "27.05.1995",
        "Tuman": "Mirobod ",
        "MFY": "Yangi Qoʻyliq  ",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Mirobod tumani IIO FMB boshlig`i o`rinbosari mayor A.M.Turg`unov "
    },
    {
        "№": 69,
        "FISh": "Yusupov Samandar Umarovich",
        "Tugilgan yili": "14.05.2005",
        "Tuman": "Mirobod ",
        "MFY": "Yangi Qoʻyliq  ",
        "Toifasi": "Agressiv xulq-atvor",
        "Biriktirilgan rahbarlar ": "Mirobod tumani IIO FMB boshlig`i o`rinbosari mayor A.M.Turg`unov "
    },
    {
        "№": 70,
        "FISh": "Хuturidi Spartak Irakliyevich",
        "Tugilgan yili": "26.07.2006",
        "Tuman": "Mirobod ",
        "MFY": "Yangi Qoʻyliq  ",
        "Toifasi": "Agressiv xulq-atvor",
        "Biriktirilgan rahbarlar ": "Mirobod tumani IIO FMB boshlig`i o`rinbosari mayor X.O.Rasulov"
    },
    {
        "№": 71,
        "FISh": "Ivashenko Oksana Sergeevna",
        "Tugilgan yili": "22.07.2006",
        "Tuman": "Mirobod ",
        "MFY": "Yangi Qoʻyliq  ",
        "Toifasi": "Agressiv xulq-atvor",
        "Biriktirilgan rahbarlar ": "Mirobod tumani IIO FMB boshlig`i o`rinbosari mayor X.O.Rasulov"
    },
    {
        "№": 72,
        "FISh": "Turginova Dilshoda Davlat qizi",
        "Tugilgan yili": "25.06.2010",
        "Tuman": "Mirobod ",
        "MFY": "Yangi Qoʻyliq  ",
        "Toifasi": "Agressiv xulq-atvor",
        "Biriktirilgan rahbarlar ": "Mirobod tumani IIO FMB boshlig`i o`rinbosari mayor B.Kutumov"
    },
    {
        "№": 73,
        "FISh": "Kuzaхmedov Radion Ramilevich",
        "Tugilgan yili": "20.12.1995",
        "Tuman": "Mirobod ",
        "MFY": "Yangi Qoʻyliq  ",
        "Toifasi": "Agressiv xulq-atvor",
        "Biriktirilgan rahbarlar ": "Mirobod tumani IIO FMB boshlig`i o`rinbosari mayor B.Kutumov"
    },
    {
        "№": 74,
        "FISh": "Mashrapova Shaхlo Shavkat qizi",
        "Tugilgan yili": "05.12.1998",
        "Tuman": "Mirobod ",
        "MFY": "Yangi Qoʻyliq  ",
        "Toifasi": "oilaviy ajrim yoqasidagi yosh oila ",
        "Biriktirilgan rahbarlar ": "Mirobod tumani QB boshlig`i podpolkovnik R.A.Islomov"
    },
    {
        "№": 75,
        "FISh": "Davronov Ozodjon Хayotjon o'g'li",
        "Tugilgan yili": "6/3/99",
        "Tuman": "Mirobod ",
        "MFY": "Yangi Qoʻyliq  ",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Mirobod tumani QB boshlig`i podpolkovnik R.A.Islomov"
    },
    {
        "№": 76,
        "FISh": "Usanova Pokiza Alimardon Qizi",
        "Tugilgan yili": "10.03.2007",
        "Tuman": "Mirzo Ulug'bek",
        "MFY": "Xabib Abdullaev",
        "Toifasi": "Muntazam dars qoldiruvchi",
        "Biriktirilgan rahbarlar ": "Mirzo Ulug`bek tumani IIO FMB boshlig`i podpolkovnik S.T.Mirzaraimov"
    },
    {
        "№": 77,
        "FISh": "Novikova Aleksandrovna Alisa",
        "Tugilgan yili": "20.01.2003",
        "Tuman": "Mirzo Ulug'bek",
        "MFY": "Xabib Abdullaev",
        "Toifasi": "Giyohvandlikka va spirtlik ichimlikka ruju qoʻygan",
        "Biriktirilgan rahbarlar ": "Mirzo Ulug`bek tumani IIO FMB boshlig`i podpolkovnik S.T.Mirzaraimov"
    },
    {
        "№": 78,
        "FISh": "Mullaxonova Ildarovna Diana",
        "Tugilgan yili": "15.08.1997",
        "Tuman": "Mirzo Ulug'bek",
        "MFY": "Xabib Abdullaev",
        "Toifasi": "Giyohvandlikka va spirtlik ichimlikka ruju qoʻygan",
        "Biriktirilgan rahbarlar ": "Mirzo Ulug`bek tumani IIO FMB 1-o`rinbosari boshlig`i podpolkovnik T.M.Murotaliyev"
    },
    {
        "№": 79,
        "FISh": "Nishonova Abduraxmon Qizi Moxinur",
        "Tugilgan yili": "25.03.2003",
        "Tuman": "Mirzo Ulug'bek",
        "MFY": "Xabib Abdullaev",
        "Toifasi": "Notinch oila farzandi ",
        "Biriktirilgan rahbarlar ": "Mirzo Ulug`bek tumani IIO FMB 1-o`rinbosari boshlig`i podpolkovnik T.M.Murotaliyev"
    },
    {
        "№": 80,
        "FISh": "Zafarjon Gulmatov Zokirjon o‘g‘li ",
        "Tugilgan yili": "15.10.1996",
        "Tuman": "Mirzo Ulug'bek",
        "MFY": "Xabib Abdullaev",
        "Toifasi": "oilaviy ajrim yoqasidagi yosh oila ",
        "Biriktirilgan rahbarlar ": "Mirzo Ulug`bek tumani IIO FMB o`rinbosari boshlig`i podpolkovnik F.A.Jabarov"
    },
    {
        "№": 81,
        "FISh": "Egamberdiyev Dilhayot Jaxongir  o‘g‘li ",
        "Tugilgan yili": "22.12.1999",
        "Tuman": "Mirzo Ulug'bek",
        "MFY": "Yalongʻoch",
        "Toifasi": "Agressiv xulq-atvor",
        "Biriktirilgan rahbarlar ": "Mirzo Ulug`bek tumani IIO FMB o`rinbosari boshlig`i podpolkovnik F.A.Jabarov"
    },
    {
        "№": 82,
        "FISh": "Nurullina Asal Rashidovna",
        "Tugilgan yili": "24.06.1998",
        "Tuman": "Mirzo Ulug'bek",
        "MFY": "Yalongʻoch",
        "Toifasi": "Agressiv xulq-atvor",
        "Biriktirilgan rahbarlar ": "Mirzo Ulug`bek tumani IIO FMB o`rinbosari boshlig`i podpolkovnik Z.R.Jurayev"
    },
    {
        "№": 83,
        "FISh": "Palvonov Furqat   Shohruh o‘g‘li ",
        "Tugilgan yili": "03.12.1998",
        "Tuman": "Mirzo Ulug'bek",
        "MFY": "Yangi Avayxon",
        "Toifasi": "Giyohvandlikka va spirtlik ichimlikka ruju qoʻygan",
        "Biriktirilgan rahbarlar ": "Mirzo Ulug`bek tumani IIO FMB o`rinbosari boshlig`i podpolkovnik Z.R.Jurayev"
    },
    {
        "№": 84,
        "FISh": "BAXRANOV JAVOXIR JAXONGIROVICh ",
        "Tugilgan yili": "05.08.1996",
        "Tuman": "Mirzo Ulug'bek",
        "MFY": "Yangi Avayxon",
        "Toifasi": "JIEM dan chiqqan sudlanganlik muddati tugamagan yoshlar \n(probasiya nazoratiga olinmagan",
        "Biriktirilgan rahbarlar ": "Mirzo Ulug`bek tumani IIO FMB o`rinbosari boshlig`i podpolkovnik D.T.Ismailbekov"
    },
    {
        "№": 85,
        "FISh": "Ziyovuddinov Sadriddin Zuxriddin Oʻgʻli",
        "Tugilgan yili": "06.05.2007",
        "Tuman": "Mirzo Ulug'bek",
        "MFY": "Yangi Kamolot",
        "Toifasi": "Muntazam dars qoldiruvchi",
        "Biriktirilgan rahbarlar ": "Mirzo Ulug`bek tumani IIO FMB o`rinbosari boshlig`i podpolkovnik D.T.Ismailbekov"
    },
    {
        "№": 86,
        "FISh": "Yuldasheva Ezozaxon Elyor Qizi",
        "Tugilgan yili": "12.02.2008",
        "Tuman": "Mirzo Ulug'bek",
        "MFY": "Yangi Kamolot",
        "Toifasi": "Muntazam dars qoldiruvchi",
        "Biriktirilgan rahbarlar ": "Mirzo Ulug`bek tumani IIO FMB o`rinbosari boshlig`i podpolkovnik Sh.Mirzayev"
    },
    {
        "№": 87,
        "FISh": "Togʻaybekov Xoldor Oʻgʻli Sanjar",
        "Tugilgan yili": "28.07.2006",
        "Tuman": "Mirzo Ulug'bek",
        "MFY": "Yangi Kamolot",
        "Toifasi": "Notinch oila farzandi ",
        "Biriktirilgan rahbarlar ": "Mirzo Ulug`bek tumani QB boshlig`i podpolkovnik Z.I.Mo`minov"
    },
    {
        "№": 88,
        "FISh": "Хayrullayev Asadbek Baxrom o`g`li",
        "Tugilgan yili": "9/10/99",
        "Tuman": "Olmazor",
        "MFY": "Yangi Sebzor",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Olmazor tumani IIO FMB boshlig`i polkovnik M.M.Vafoyev"
    },
    {
        "№": 89,
        "FISh": "Muxammadzokirov Baxodir Baxtiyor o`g`li",
        "Tugilgan yili": "4/24/96",
        "Tuman": "Olmazor",
        "MFY": "Yangi Sebzor",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Olmazor tumani IIO FMB boshlig`i polkovnik M.M.Vafoyev"
    },
    {
        "№": 90,
        "FISh": "Saidov Muhammadjon Baxodir o`g`li",
        "Tugilgan yili": "1/11/03",
        "Tuman": "Olmazor",
        "MFY": "Yangi Sebzor",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Olmazor tumani IIO FMB boshlig`i polkovnik M.M.Vafoyev"
    },
    {
        "№": 91,
        "FISh": "Sulaymoniy Zikrillo ",
        "Tugilgan yili": "5/4/09",
        "Tuman": "Olmazor",
        "MFY": "Yangi Sebzor",
        "Toifasi": "Muntazam dars qoldiruvchi",
        "Biriktirilgan rahbarlar ": "Olmazor tumani IIO FMB boshlig`i polkovnik M.M.Vafoyev"
    },
    {
        "№": 92,
        "FISh": "Rustamov Odiljon Doniyorjon o`g`li",
        "Tugilgan yili": "5/7/08",
        "Tuman": "Olmazor",
        "MFY": "Yangi Toshkent",
        "Toifasi": "Muntazam dars qoldiruvchi",
        "Biriktirilgan rahbarlar ": "Olmazor tumani IIO FMB boshlig`i 1-o`rinbosari podpolkovnik A.A.Valiyev"
    },
    {
        "№": 93,
        "FISh": "Yaminov Abdulloh Anvarjon o`g`li",
        "Tugilgan yili": "8/28/02",
        "Tuman": "Olmazor",
        "MFY": "Zamondosh",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Olmazor tumani IIO FMB boshlig`i 1-o`rinbosari podpolkovnik A.A.Valiyev"
    },
    {
        "№": 94,
        "FISh": "Nabiev Bekzod Abduqodir o`g`li",
        "Tugilgan yili": "4/20/02",
        "Tuman": "Olmazor",
        "MFY": "Ziyokor",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Olmazor tumani IIO FMB boshlig`i 1-o`rinbosari podpolkovnik A.A.Valiyev"
    },
    {
        "№": 95,
        "FISh": "Toirov Diyor Umidjon o`g`li",
        "Tugilgan yili": "2/1/00",
        "Tuman": "Olmazor",
        "MFY": "Ziyokor",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Olmazor tumani IIO FMB boshlig`i 1-o`rinbosari podpolkovnik A.A.Valiyev"
    },
    {
        "№": 96,
        "FISh": "Azimov Bekjon Ibroximjon o`g`li",
        "Tugilgan yili": "6/4/94",
        "Tuman": "Olmazor",
        "MFY": "Ziyokor",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Olmazor tumani IIO FMB boshlig`i o`rinbosari podpolkovnik O.A.Gaipov"
    },
    {
        "№": 97,
        "FISh": " Qo'Chqorboev Sardorbek Erkin o`g`li",
        "Tugilgan yili": "7/2/01",
        "Tuman": "Olmazor",
        "MFY": "Ziyokor",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Olmazor tumani IIO FMB boshlig`i o`rinbosari podpolkovnik O.A.Gaipov"
    },
    {
        "№": 98,
        "FISh": "Maxkamov Хusan Baxtiyor o`g`li",
        "Tugilgan yili": "10/24/98",
        "Tuman": "Olmazor",
        "MFY": "Хastimom",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Olmazor tumani IIO FMB boshlig`i o`rinbosari podpolkovnik O.A.Gaipov"
    },
    {
        "№": 99,
        "FISh": "Ismatov Qudratulla To'Хtamurod o`g`li",
        "Tugilgan yili": "10/13/94",
        "Tuman": "Olmazor",
        "MFY": "Хastimom",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Olmazor tumani IIO FMB boshlig`i o`rinbosari podpolkovnik O.A.Gaipov"
    },
    {
        "№": 100,
        "FISh": "Usmonov Abduvoris Mirkamol o`g`li",
        "Tugilgan yili": "1/5/08",
        "Tuman": "Olmazor",
        "MFY": "Хastimom",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Olmazor tumani IIO FMB boshlig`i o`rinbosari podpolkovnik A.B.Itolmasov"
    },
    {
        "№": 101,
        "FISh": "Sharipov Sardor Marufjon o`g`li",
        "Tugilgan yili": "12/2/95",
        "Tuman": "Olmazor",
        "MFY": "Хastimom",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Olmazor tumani IIO FMB boshlig`i o`rinbosari podpolkovnik A.B.Itolmasov"
    },
    {
        "№": 102,
        "FISh": "Valiev Abdurasul Alijon o`g`li",
        "Tugilgan yili": "7/26/98",
        "Tuman": "Olmazor",
        "MFY": "Хastimom",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Olmazor tumani IIO FMB boshlig`i o`rinbosari podpolkovnik A.B.Itolmasov"
    },
    {
        "№": 103,
        "FISh": "Хurramov Хumoyon Baxrom o`g`li",
        "Tugilgan yili": "1/28/97",
        "Tuman": "Olmazor",
        "MFY": "Хastimom",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Olmazor tumani IIO FMB boshlig`i o`rinbosari podpolkovnik A.B.Itolmasov"
    },
    {
        "№": 104,
        "FISh": "Shayunusxodjaev Sardor Anvarovich",
        "Tugilgan yili": "5/3/97",
        "Tuman": "Olmazor",
        "MFY": "Хastimom",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Olmazor tumani IIO FMB boshlig`i o`rinbosari podpolkovnik U.J.Karimov"
    },
    {
        "№": 105,
        "FISh": "Alimuxumedov Хusan Toxir o`g`li",
        "Tugilgan yili": "6/20/07",
        "Tuman": "Olmazor",
        "MFY": "Хastimom",
        "Toifasi": "Muntazam dars qoldiruvchi",
        "Biriktirilgan rahbarlar ": "Olmazor tumani IIO FMB boshlig`i o`rinbosari podpolkovnik U.J.Karimov"
    },
    {
        "№": 106,
        "FISh": "Alimuxumedov Хasan Toxir o`g`li",
        "Tugilgan yili": "6/20/07",
        "Tuman": "Olmazor",
        "MFY": "Хastimom",
        "Toifasi": "Muntazam dars qoldiruvchi",
        "Biriktirilgan rahbarlar ": "Olmazor tumani IIO FMB boshlig`i o`rinbosari podpolkovnik U.J.Karimov"
    },
    {
        "№": 107,
        "FISh": "Azimovaa Fazilat Abdug'affar qizi",
        "Tugilgan yili": "11/9/97",
        "Tuman": "Olmazor",
        "MFY": "Хastimom",
        "Toifasi": "oilaviy ajrim yoqasidagi yosh oila ",
        "Biriktirilgan rahbarlar ": "Olmazor tumani IIO FMB boshlig`i o`rinbosari podpolkovnik U.J.Karimov"
    },
    {
        "№": 108,
        "FISh": "Ismatillaev Shukurullo Shuxratbek o`g`li",
        "Tugilgan yili": "3/17/01",
        "Tuman": "Olmazor",
        "MFY": "Хislat",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Olmazor tumani IIO FMB boshlig`i o`rinbosari podpolkovnik X.X.Xolmatov"
    },
    {
        "№": 109,
        "FISh": "Ulug'Berdiev Sunnatbek Chorshanbi o`g`li",
        "Tugilgan yili": "7/21/03",
        "Tuman": "Olmazor",
        "MFY": "Хislat",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Olmazor tumani IIO FMB boshlig`i o`rinbosari podpolkovnik X.X.Xolmatov"
    },
    {
        "№": 110,
        "FISh": "G'Ulomov Saidaxrorxon Sherzod o`g`li",
        "Tugilgan yili": "11/16/07",
        "Tuman": "Olmazor",
        "MFY": "Хislat",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Olmazor tumani IIO FMB boshlig`i o`rinbosari podpolkovnik X.X.Xolmatov"
    },
    {
        "№": 111,
        "FISh": "Yuldoshev Bilol Хusanovich",
        "Tugilgan yili": "11/15/04",
        "Tuman": "Olmazor",
        "MFY": "Хislat",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Olmazor tumani IIO FMB boshlig`i o`rinbosari podpolkovnik X.X.Xolmatov"
    },
    {
        "№": 112,
        "FISh": "Mirzayev Murot G'Ofur o`g`li ",
        "Tugilgan yili": "3/30/03",
        "Tuman": "Olmazor",
        "MFY": "Хonchorbog'",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Olmazor tumani QB boshlig`i mayor A.I.Ismoilov"
    },
    {
        "№": 113,
        "FISh": "Shameliyeva Moxira Ulug'Bek qizi",
        "Tugilgan yili": "1/26/98",
        "Tuman": "Olmazor",
        "MFY": "Хonchorbog'",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Olmazor tumani QB boshlig`i mayor A.I.Ismoilov"
    },
    {
        "№": 114,
        "FISh": "Saburova Zilola Jamshid qizi",
        "Tugilgan yili": "1/15/09",
        "Tuman": "Olmazor",
        "MFY": "Хonchorbog'",
        "Toifasi": "Muntazam dars qoldiruvchi",
        "Biriktirilgan rahbarlar ": "Olmazor tumani QB boshlig`i mayor A.I.Ismoilov"
    },
    {
        "№": 115,
        "FISh": "Хikmatilayev Ismoil Raxmatilla o`g`li",
        "Tugilgan yili": "5/19/11",
        "Tuman": "Olmazor",
        "MFY": "Хonchorbog'",
        "Toifasi": "Muntazam dars qoldiruvchi",
        "Biriktirilgan rahbarlar ": "Olmazor tumani QB boshlig`i mayor A.I.Ismoilov"
    },
    {
        "№": 116,
        "FISh": "Umarov Mardon Ma’murjon o‘g‘li",
        "Tugilgan yili": "16.04.1997 ",
        "Tuman": "Sergeli ",
        "MFY": "Qo'shqo'rg'on",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Sergeli tumani IIO FMB boshlig`i podpolkovnik E.U.Ergashev"
    },
    {
        "№": 117,
        "FISh": "Xatamov Alibek Avazbek o‘g‘li",
        "Tugilgan yili": "13.01.1997 ",
        "Tuman": "Sergeli ",
        "MFY": "Qo'shqo'rg'on",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Sergeli tumani IIO FMB boshlig`i podpolkovnik E.U.Ergashev"
    },
    {
        "№": 118,
        "FISh": "Xikmatov Doniyor Xaydarali o‘g‘li",
        "Tugilgan yili": "21.09.1996 ",
        "Tuman": "Sergeli ",
        "MFY": "Qo'shqo'rg'on",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Sergeli tumani IIO FMB boshlig`i podpolkovnik E.U.Ergashev"
    },
    {
        "№": 119,
        "FISh": "Muhamedov Jasur Maxmud o‘g‘li",
        "Tugilgan yili": "26.04.2002 ",
        "Tuman": "Sergeli ",
        "MFY": "Qo'shqo'rg'on",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Sergeli tumani IIO FMB boshlig`i podpolkovnik E.U.Ergashev"
    },
    {
        "№": 120,
        "FISh": "Raximjonov Baxodir Nig‘matovich",
        "Tugilgan yili": "27.07.2002 ",
        "Tuman": "Sergeli ",
        "MFY": "Qo'shqo'rg'on",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Sergeli tumani IIO FMB boshlig`i podpolkovnik E.U.Ergashev"
    },
    {
        "№": 121,
        "FISh": "Jo‘rayev Kamronbek Yusufjon o‘g‘li",
        "Tugilgan yili": "01.11.1995 ",
        "Tuman": "Sergeli ",
        "MFY": "Qo'shqo'rg'on",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Sergeli tumani IIO FMB boshlig`i podpolkovnik E.U.Ergashev"
    },
    {
        "№": 122,
        "FISh": "Maxmudjonov Faxriddin Jaloliddinovich",
        "Tugilgan yili": "27.03.2004 ",
        "Tuman": "Sergeli ",
        "MFY": "Qo'shqo'rg'on",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Sergeli tumani IIO FMB boshlig`i podpolkovnik E.U.Ergashev"
    },
    {
        "№": 123,
        "FISh": "Mirzayev Bobur Kenaxasjon o‘g‘li",
        "Tugilgan yili": "09.04.2004 ",
        "Tuman": "Sergeli ",
        "MFY": "Qo'shqo'rg'on",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Sergeli tumani IIO FMB boshlig`i podpolkovnik E.U.Ergashev"
    },
    {
        "№": 124,
        "FISh": "Erkinov Samandar Zoir o‘g‘li",
        "Tugilgan yili": "11.09.2006 ",
        "Tuman": "Sergeli ",
        "MFY": "Qo'shqo'rg'on",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Sergeli tumani IIO FMB boshlig`i podpolkovnik E.U.Ergashev"
    },
    {
        "№": 125,
        "FISh": "Bozorov Muxammad Ali Mels o‘g‘li",
        "Tugilgan yili": "22.02.1999 ",
        "Tuman": "Sergeli ",
        "MFY": "Qo'shqo'rg'on",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Sergeli tumani IIO FMB boshlig`i podpolkovnik E.U.Ergashev"
    },
    {
        "№": 126,
        "FISh": "Saydaliyev Sarvar Saydimurod o‘g‘li",
        "Tugilgan yili": "06.08.1996 ",
        "Tuman": "Sergeli ",
        "MFY": "Qo'shqo'rg'on",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Sergeli tumani IIO FMB boshlig`i podpolkovnik E.U.Ergashev"
    },
    {
        "№": 127,
        "FISh": "Ibroximova Mushtariy Mo'min qizi",
        "Tugilgan yili": "27.04.2008",
        "Tuman": "Sergeli ",
        "MFY": "Qo'shqo'rg'on",
        "Toifasi": "Agressiv xulq-atvor",
        "Biriktirilgan rahbarlar ": "Sergeli tumani IIO FMB boshlig`i 1-o`rinbosari podpolkovnik K.R.Xasanov"
    },
    {
        "№": 128,
        "FISh": "Raxmonova Mushtariy Shavkat qizi",
        "Tugilgan yili": "12.10.2003",
        "Tuman": "Sergeli ",
        "MFY": "Qo'shqo'rg'on",
        "Toifasi": "Agressiv xulq-atvor",
        "Biriktirilgan rahbarlar ": "Sergeli tumani IIO FMB boshlig`i 1-o`rinbosari podpolkovnik K.R.Xasanov"
    },
    {
        "№": 129,
        "FISh": "Jamoliddinova Robiya Jaloliddin qizi",
        "Tugilgan yili": "07.09.2006",
        "Tuman": "Sergeli ",
        "MFY": "Qo'shqo'rg'on",
        "Toifasi": "Agressiv xulq-atvor",
        "Biriktirilgan rahbarlar ": "Sergeli tumani IIO FMB boshlig`i 1-o`rinbosari podpolkovnik K.R.Xasanov"
    },
    {
        "№": 130,
        "FISh": "Xabibullayev Ibrohim Jamshid o'g'li",
        "Tugilgan yili": "01.02.2011",
        "Tuman": "Sergeli ",
        "MFY": "Qo'shqo'rg'on",
        "Toifasi": "Muntazam dars qoldiruvchi",
        "Biriktirilgan rahbarlar ": "Sergeli tumani IIO FMB boshlig`i 1-o`rinbosari podpolkovnik K.R.Xasanov"
    },
    {
        "№": 131,
        "FISh": "Sobirov Doniyor Ozod o'g'li",
        "Tugilgan yili": "3/9/96",
        "Tuman": "Sergeli ",
        "MFY": "Qubay-tepa",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Sergeli tumani IIO FMB boshlig`i 1-o`rinbosari podpolkovnik K.R.Xasanov"
    },
    {
        "№": 132,
        "FISh": "Abduxafizov Abdurahim Ravshanjon o'g'li",
        "Tugilgan yili": "9/26/09",
        "Tuman": "Sergeli ",
        "MFY": "Qubay-tepa",
        "Toifasi": "Muntazam dars qoldiruvchi",
        "Biriktirilgan rahbarlar ": "Sergeli tumani IIO FMB boshlig`i 1-o`rinbosari podpolkovnik K.R.Xasanov"
    },
    {
        "№": 133,
        "FISh": "Valiyeva Nargiza Maxamadjon qizi",
        "Tugilgan yili": "1/12/09",
        "Tuman": "Sergeli ",
        "MFY": "Qubay-tepa",
        "Toifasi": "Muntazam dars qoldiruvchi",
        "Biriktirilgan rahbarlar ": "Sergeli tumani IIO FMB boshlig`i 1-o`rinbosari podpolkovnik K.R.Xasanov"
    },
    {
        "№": 134,
        "FISh": "Abdurazzoqov Abdulla Abdurashid o'g'li",
        "Tugilgan yili": "6/7/08",
        "Tuman": "Sergeli ",
        "MFY": "Qubay-tepa",
        "Toifasi": "Muntazam dars qoldiruvchi",
        "Biriktirilgan rahbarlar ": "Sergeli tumani IIO FMB boshlig`i 1-o`rinbosari podpolkovnik K.R.Xasanov"
    },
    {
        "№": 135,
        "FISh": "Xudoyberdiyev Ibrohim Xudoyberdi o'g'li",
        "Tugilgan yili": "11/29/04",
        "Tuman": "Sergeli ",
        "MFY": "Qubay-tepa",
        "Toifasi": "Giyohvandlikka va spirtlik ichimlikka ruju qoʻygan",
        "Biriktirilgan rahbarlar ": "Sergeli tumani IIO FMB boshlig`i 1-o`rinbosari podpolkovnik K.R.Xasanov"
    },
    {
        "№": 136,
        "FISh": "Usmanjonova Zilola Doniyor qizi",
        "Tugilgan yili": "6/28/02",
        "Tuman": "Sergeli ",
        "MFY": "Qubay-tepa",
        "Toifasi": "oilaviy ajrim yoqasidagi yosh oila ",
        "Biriktirilgan rahbarlar ": "Sergeli tumani IIO FMB boshlig`i 1-o`rinbosari podpolkovnik K.R.Xasanov"
    },
    {
        "№": 137,
        "FISh": "Axrorova Gulnoza Bahrom qizi",
        "Tugilgan yili": "3/1/96",
        "Tuman": "Sergeli ",
        "MFY": "Qubay-tepa",
        "Toifasi": "oilaviy ajrim yoqasidagi yosh oila ",
        "Biriktirilgan rahbarlar ": "Sergeli tumani IIO FMB boshlig`i 1-o`rinbosari podpolkovnik K.R.Xasanov"
    },
    {
        "№": 138,
        "FISh": "Giyasov Azamat Avasovich",
        "Tugilgan yili": "11/19/95",
        "Tuman": "Sergeli ",
        "MFY": "Qumariq",
        "Toifasi": "Giyohvandlikka va spirtlik ichimlikka ruju qoʻygan",
        "Biriktirilgan rahbarlar ": "Sergeli tumani IIO FMB boshlig`i o`rinbosari podpolkovnik M.Sh.Tuychiyev"
    },
    {
        "№": 139,
        "FISh": "Nig'matov Ibrohim G'ayratjon o'g'li",
        "Tugilgan yili": "5/12/97",
        "Tuman": "Sergeli ",
        "MFY": "Qumariq",
        "Toifasi": "Giyohvandlikka va spirtlik ichimlikka ruju qoʻygan",
        "Biriktirilgan rahbarlar ": "Sergeli tumani IIO FMB boshlig`i o`rinbosari podpolkovnik M.Sh.Tuychiyev"
    },
    {
        "№": 140,
        "FISh": "Xaltursunova Nigora Serikboy qizi",
        "Tugilgan yili": "13.06.2000",
        "Tuman": "Sergeli ",
        "MFY": "Qumariq",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Sergeli tumani IIO FMB boshlig`i o`rinbosari podpolkovnik M.Sh.Tuychiyev"
    },
    {
        "№": 141,
        "FISh": "Asadullayev Asad Davron o'g'li",
        "Tugilgan yili": "8/27/03",
        "Tuman": "Sergeli ",
        "MFY": "Qut-Baraka",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Sergeli tumani IIO FMB boshlig`i o`rinbosari podpolkovnik M.Sh.Tuychiyev"
    },
    {
        "№": 142,
        "FISh": "Amonov Dilshod Esonaliyevich",
        "Tugilgan yili": "6/8/95",
        "Tuman": "Sergeli ",
        "MFY": "Qut-Baraka",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Sergeli tumani IIO FMB boshlig`i o`rinbosari podpolkovnik M.Sh.Tuychiyev"
    },
    {
        "№": 143,
        "FISh": "Toirov Ilhom Zokir o'g'li",
        "Tugilgan yili": "7/9/96",
        "Tuman": "Sergeli ",
        "MFY": "Qut-Baraka",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Sergeli tumani IIO FMB boshlig`i o`rinbosari podpolkovnik M.Sh.Tuychiyev"
    },
    {
        "№": 144,
        "FISh": "Soliqjonov Akromjon Adhamjon o'g'li",
        "Tugilgan yili": "2/9/98",
        "Tuman": "Sergeli ",
        "MFY": "Qut-Baraka",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Sergeli tumani IIO FMB boshlig`i o`rinbosari podpolkovnik M.Sh.Tuychiyev"
    },
    {
        "№": 145,
        "FISh": "Soliqjonov Islomjon Adhamjon o'g'li",
        "Tugilgan yili": "3/22/01",
        "Tuman": "Sergeli ",
        "MFY": "Qut-Baraka",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Sergeli tumani IIO FMB boshlig`i o`rinbosari podpolkovnik M.Sh.Tuychiyev"
    },
    {
        "№": 146,
        "FISh": "Ortiqov Asad Dilmurod o'g'li",
        "Tugilgan yili": "6/25/00",
        "Tuman": "Sergeli ",
        "MFY": "Qut-Baraka",
        "Toifasi": "Giyohvandlikka va spirtlik ichimlikka ruju qoʻygan",
        "Biriktirilgan rahbarlar ": "Sergeli tumani IIO FMB boshlig`i o`rinbosari podpolkovnik M.Sh.Tuychiyev"
    },
    {
        "№": 147,
        "FISh": "Qayumjonov Shohruz Doniyor o'g'li",
        "Tugilgan yili": "1/11/06",
        "Tuman": "Sergeli ",
        "MFY": "Qut-Baraka",
        "Toifasi": "Profilaktik hisobda turgan yoshlar",
        "Biriktirilgan rahbarlar ": "Sergeli tumani IIO FMB boshlig`i o`rinbosari podpolkovnik M.Sh.Tuychiyev"
    },
    {
        "№": 148,
        "FISh": "Abdurayimov Azizbek Abdurahmon o'g'li",
        "Tugilgan yili": "12/11/07",
        "Tuman": "Sergeli ",
        "MFY": "Qut-Baraka",
        "Toifasi": "Agressiv xulq-atvor",
        "Biriktirilgan rahbarlar ": "Sergeli tumani IIO FMB boshlig`i o`rinbosari podpolkovnik M.Sh.Tuychiyev"
    },
    {
        "№": 149,
        "FISh": "Djalolova O'g'iloy Ma'murjon qizi",
        "Tugilgan yili": "11/1/95",
        "Tuman": "Sergeli ",
        "MFY": "Qut-Baraka",
        "Toifasi": "Notinch oila farzandi ",
        "Biriktirilgan rahbarlar ": "Sergeli tumani IIO FMB boshlig`i o`rinbosari kapitan Sh.N.Musayev"
    },
    {
        "№": 150,
        "FISh": "Mirpo'latova Fazilat Mirziyod qizi",
        "Tugilgan yili": "10/24/95",
        "Tuman": "Sergeli ",
        "MFY": "Qut-Baraka",
        "Toifasi": "oilaviy ajrim yoqasidagi yosh oila ",
        "Biriktirilgan rahbarlar ": "Sergeli tumani IIO FMB boshlig`i o`rinbosari kapitan Sh.N.Musayev"
    },
    {
        "№": 151,
        "FISh": "Botirov Ibrohim Muhtor o'g'li",
        "Tugilgan yili": "6/1/08",
        "Tuman": "Sergeli ",
        "MFY": "Qut-Baraka",
        "Toifasi": "Muntazam dars qoldiruvchi",
        "Biriktirilgan rahbarlar ": "Sergeli tumani IIO FMB boshlig`i o`rinbosari kapitan Sh.N.Musayev"
    },
    {
        "№": 152,
        "FISh": "Bahriddinov Jamshid Baxodir o'g'li",
        "Tugilgan yili": "2/13/07",
        "Tuman": "Sergeli ",
        "MFY": "Qut-Baraka",
        "Toifasi": "Muntazam dars qoldiruvchi",
        "Biriktirilgan rahbarlar ": "Sergeli tumani IIO FMB boshlig`i o`rinbosari kapitan Sh.N.Musayev"
    },
    {
        "№": 153,
        "FISh": "Tohirova Madina Ma'murjon qizi",
        "Tugilgan yili": "9/19/03",
        "Tuman": "Sergeli ",
        "MFY": "Qut-Baraka",
        "Toifasi": "oilaviy ajrim yoqasidagi yosh oila ",
        "Biriktirilgan rahbarlar ": "Sergeli tumani IIO FMB boshlig`i o`rinbosari kapitan Sh.N.Musayev"
    },
    {
        "№": 154,
        "FISh": "Muhammadzohidova Munibaxon Ma'rufjon qizi",
        "Tugilgan yili": "5/2/01",
        "Tuman": "Sergeli ",
        "MFY": "Qut-Baraka",
        "Toifasi": "Yot gʻoyalar tasiriga tushib qolgan yoshlar",
        "Biriktirilgan rahbarlar ": "Sergeli tumani IIO FMB boshlig`i o`rinbosari kapitan Sh.N.Musayev"
    },
    {
        "№": 155,
        "FISh": "Litvinov Semyon Artyomovich",
        "Tugilgan yili": "08.10.2008",
        "Tuman": "Sergeli ",
        "MFY": "Sofdil",
        "Toifasi": "Profilaktik hisobda turgan yoshlar",
        "Biriktirilgan rahbarlar ": "Sergeli tumani IIO FMB boshlig`i o`rinbosari kapitan Sh.N.Musayev"
    },
    {
        "№": 156,
        "FISh": "Amirova E'zoza Bunyod qizi",
        "Tugilgan yili": "12/6/04",
        "Tuman": "Sergeli ",
        "MFY": "Sofdil",
        "Toifasi": "Profilaktik hisobda turgan yoshlar",
        "Biriktirilgan rahbarlar ": "Sergeli tumani IIO FMB boshlig`i o`rinbosari kapitan Sh.N.Musayev"
    },
    {
        "№": 157,
        "FISh": "Komiljonov Sanjar Alijon o'g'li",
        "Tugilgan yili": "10/3/02",
        "Tuman": "Sergeli ",
        "MFY": "Sofdil",
        "Toifasi": "Profilaktik hisobda turgan yoshlar",
        "Biriktirilgan rahbarlar ": "Sergeli tumani IIO FMB boshlig`i o`rinbosari kapitan Sh.N.Musayev"
    },
    {
        "№": 158,
        "FISh": "G'ofurjonov Hamidulla Ravshan o'g'li",
        "Tugilgan yili": "01.09.1995",
        "Tuman": "Sergeli ",
        "MFY": "Sofdil",
        "Toifasi": "Giyohvandlikka va spirtlik ichimlikka ruju qoʻygan",
        "Biriktirilgan rahbarlar ": "Sergeli tumani IIO FMB boshlig`i o`rinbosari kapitan Sh.N.Musayev"
    },
    {
        "№": 159,
        "FISh": "Tursunov Nodirshoh Alisher o'g'li",
        "Tugilgan yili": "12.06.1995",
        "Tuman": "Sergeli ",
        "MFY": "Sofdil",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Sergeli tumani IIO FMB boshlig`i o`rinbosari kapitan Sh.N.Musayev"
    },
    {
        "№": 160,
        "FISh": "Sultonov Ravshan Shamsiddin o'g'li",
        "Tugilgan yili": "21.02.2007",
        "Tuman": "Sergeli ",
        "MFY": "Sofdil",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Sergeli tumani IIO FMB boshlig`i MMIB o`rinbosari "
    },
    {
        "№": 161,
        "FISh": "Ziyodullayev Kamronbek Saydaliyevich",
        "Tugilgan yili": "06.07.2001",
        "Tuman": "Sergeli ",
        "MFY": "Sofdil",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Sergeli tumani IIO FMB boshlig`i MMIB o`rinbosari "
    },
    {
        "№": 162,
        "FISh": "Rasulov Muxriddin Bobir o'g'li",
        "Tugilgan yili": "12/26/00",
        "Tuman": "Sergeli ",
        "MFY": "Uchuvchilar",
        "Toifasi": "Profilaktik hisobda turgan yoshlar",
        "Biriktirilgan rahbarlar ": "Sergeli tumani IIO FMB boshlig`i MMIB o`rinbosari "
    },
    {
        "№": 163,
        "FISh": "Kadanov Yuriy Aleksandrovich",
        "Tugilgan yili": "5/6/99",
        "Tuman": "Sergeli ",
        "MFY": "Uchuvchilar",
        "Toifasi": "Agressiv xulq-atvor",
        "Biriktirilgan rahbarlar ": "Sergeli tumani IIO FMB boshlig`i MMIB o`rinbosari "
    },
    {
        "№": 164,
        "FISh": "Balux Vitaly Olegovich",
        "Tugilgan yili": "9/11/95",
        "Tuman": "Sergeli ",
        "MFY": "Uchuvchilar",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Sergeli tumani IIO FMB boshlig`i MMIB o`rinbosari "
    },
    {
        "№": 165,
        "FISh": "Sharipov Mirodil Murodovich",
        "Tugilgan yili": "8/27/07",
        "Tuman": "Sergeli ",
        "MFY": "Uchuvchilar",
        "Toifasi": "Muntazam dars qoldiruvchi",
        "Biriktirilgan rahbarlar ": "Sergeli tumani IIO FMB boshlig`i MMIB o`rinbosari "
    },
    {
        "№": 166,
        "FISh": "Zagidulin Andrey Beybudovich",
        "Tugilgan yili": "5/23/08",
        "Tuman": "Sergeli ",
        "MFY": "Uchuvchilar",
        "Toifasi": "Muntazam dars qoldiruvchi",
        "Biriktirilgan rahbarlar ": "Sergeli tumani IIO FMB boshlig`i MMIB o`rinbosari "
    },
    {
        "№": 167,
        "FISh": "Komilov Begzod Shuhrat o'gli",
        "Tugilgan yili": "27.01.2000",
        "Tuman": "Sergeli ",
        "MFY": "Yangi Bunyodobod",
        "Toifasi": "Agressiv xulq-atvor",
        "Biriktirilgan rahbarlar ": "Sergeli tumani IIO FMB boshlig`i MMIB o`rinbosari "
    },
    {
        "№": 168,
        "FISh": "Mirzakalanova Jannatoy Gulamjonovna ",
        "Tugilgan yili": "30.10.2009",
        "Tuman": "Sergeli ",
        "MFY": "Yangi Bunyodobod",
        "Toifasi": "Agressiv xulq-atvor",
        "Biriktirilgan rahbarlar ": "Sergeli tumani IIO FMB boshlig`i MMIB o`rinbosari "
    },
    {
        "№": 169,
        "FISh": "Isroilov Ibrohim Ismoil o'gli",
        "Tugilgan yili": "16.11.2006",
        "Tuman": "Sergeli ",
        "MFY": "Yangi Bunyodobod",
        "Toifasi": "Agressiv xulq-atvor",
        "Biriktirilgan rahbarlar ": "Sergeli tumani IIO FMB boshlig`i MMIB o`rinbosari "
    },
    {
        "№": 170,
        "FISh": "Qodirov Furqat Farux o'gli",
        "Tugilgan yili": "16.10.2008",
        "Tuman": "Sergeli ",
        "MFY": "Yangi Bunyodobod",
        "Toifasi": "Muntazam dars qoldiruvchi",
        "Biriktirilgan rahbarlar ": "Sergeli tumani IIO FMB boshlig`i MMIB o`rinbosari "
    },
    {
        "№": 171,
        "FISh": "Sabdvohidov Saidaskar Saidvali o'gli",
        "Tugilgan yili": "1/3/96",
        "Tuman": "Sergeli ",
        "MFY": "Yangi Bunyodobod",
        "Toifasi": "JIEM dan chiqqan sudlanganlik muddati tugamagan yoshlar \n(probasiya nazoratiga olinmagan",
        "Biriktirilgan rahbarlar ": "Sergeli tumani IIO FMB boshlig`i HPMB o`rinbosari "
    },
    {
        "№": 172,
        "FISh": "Nasrullayev Aslbek Xusniddinovich",
        "Tugilgan yili": "05.08.2000",
        "Tuman": "Sergeli ",
        "MFY": "Yangi Sergeli",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Sergeli tumani IIO FMB boshlig`i HPMB o`rinbosari "
    },
    {
        "№": 173,
        "FISh": "Bo‘riyev Shaxzod Orol O‘g‘li",
        "Tugilgan yili": "22.10.1996",
        "Tuman": "Sergeli ",
        "MFY": "Yangi Sergeli",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Sergeli tumani IIO FMB boshlig`i HPMB o`rinbosari "
    },
    {
        "№": 174,
        "FISh": "Jahongirov Asadbek Jahongir O‘g‘li",
        "Tugilgan yili": "07.04.2003",
        "Tuman": "Sergeli ",
        "MFY": "Yangi Sergeli ",
        "Toifasi": "Agressiv xulq-atvor",
        "Biriktirilgan rahbarlar ": "Sergeli tumani IIO FMB boshlig`i HPMB o`rinbosari "
    },
    {
        "№": 175,
        "FISh": "Butayev Ruslan Aybek O‘g‘li ",
        "Tugilgan yili": "19.09.2001",
        "Tuman": "Sergeli ",
        "MFY": "Yangi Sergeli ",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Sergeli tumani IIO FMB boshlig`i HPMB o`rinbosari "
    },
    {
        "№": 176,
        "FISh": "Shin Vladislav Alekseyevich",
        "Tugilgan yili": "03.11.1997",
        "Tuman": "Sergeli ",
        "MFY": "Yangi Sergeli ",
        "Toifasi": "Giyohvandlikka va spirtlik ichimlikka ruju qoʻygan",
        "Biriktirilgan rahbarlar ": "Sergeli tumani IIO FMB boshlig`i HPMB o`rinbosari "
    },
    {
        "№": 177,
        "FISh": "Abdullayev Aziz Zafar o'g'li ",
        "Tugilgan yili": "6/1/00",
        "Tuman": "Sergeli ",
        "MFY": "Yuqori darxon",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Sergeli tumani IIO FMB boshlig`i HPMB o`rinbosari "
    },
    {
        "№": 178,
        "FISh": "Eshmatov Ulug'bek Rahimberdi o'g'li",
        "Tugilgan yili": "5/18/95",
        "Tuman": "Sergeli ",
        "MFY": "Yuqori darxon",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Sergeli tumani IIO FMB boshlig`i HPMB o`rinbosari "
    },
    {
        "№": 179,
        "FISh": "Nuriddinov Nurmuhammadjon Bahodir o'g'li",
        "Tugilgan yili": "5/27/00",
        "Tuman": "Sergeli ",
        "MFY": "Yuqori darxon",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Sergeli tumani IIO FMB boshlig`i HPMB o`rinbosari "
    },
    {
        "№": 180,
        "FISh": "Yunusov Rustam Mirvali o'g'li",
        "Tugilgan yili": "4/14/00",
        "Tuman": "Sergeli ",
        "MFY": "Yuqori darxon",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Sergeli tumani IIO FMB boshlig`i HPMB o`rinbosari "
    },
    {
        "№": 181,
        "FISh": "Axmadjonov Abdulloh Axadjon o'g'li",
        "Tugilgan yili": "11/18/97",
        "Tuman": "Sergeli ",
        "MFY": "Yuqori darxon",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Sergeli tumani IIO FMB boshlig`i HPMB o`rinbosari "
    },
    {
        "№": 182,
        "FISh": "Azizov Ibratjon Rahimjon o'g'li",
        "Tugilgan yili": "10/26/96",
        "Tuman": "Sergeli ",
        "MFY": "Yuqori darxon",
        "Toifasi": "Profilaktik hisobda turgan yoshlar",
        "Biriktirilgan rahbarlar ": "Sergeli tumani QB boshlig`i mayor B.A.Aytenov"
    },
    {
        "№": 183,
        "FISh": "Valiyev Abduvosit Abdurasul o'g'li",
        "Tugilgan yili": "5/2/97",
        "Tuman": "Sergeli ",
        "MFY": "Yuqori darxon",
        "Toifasi": "Profilaktik hisobda turgan yoshlar",
        "Biriktirilgan rahbarlar ": "Sergeli tumani QB boshlig`i mayor B.A.Aytenov"
    },
    {
        "№": 184,
        "FISh": "Sultonova Saida Olim qizi",
        "Tugilgan yili": "12/3/95",
        "Tuman": "Sergeli ",
        "MFY": "Yuqori darxon",
        "Toifasi": "Profilaktik hisobda turgan yoshlar",
        "Biriktirilgan rahbarlar ": "Sergeli tumani QB boshlig`i mayor B.A.Aytenov"
    },
    {
        "№": 185,
        "FISh": "Teshaboyev Muxammadsodiq Maxmudbek o'g'li",
        "Tugilgan yili": "12/27/07",
        "Tuman": "Sergeli ",
        "MFY": "Ziynat",
        "Toifasi": "Agressiv xulq-atvor",
        "Biriktirilgan rahbarlar ": "Sergeli tumani QB boshlig`i mayor B.A.Aytenov"
    },
    {
        "№": 186,
        "FISh": "Karimova Zarnigor Davronbek qizi",
        "Tugilgan yili": "8/22/04",
        "Tuman": "Sergeli ",
        "MFY": "Ziynat",
        "Toifasi": "Agressiv xulq-atvor",
        "Biriktirilgan rahbarlar ": "Sergeli tumani QB boshlig`i mayor B.A.Aytenov"
    },
    {
        "№": 187,
        "FISh": "Japarova Gulnozaxon Akmal qizi",
        "Tugilgan yili": "9/2/95",
        "Tuman": "Sergeli ",
        "MFY": "Ziynat",
        "Toifasi": "Agressiv xulq-atvor",
        "Biriktirilgan rahbarlar ": "Sergeli tumani QB boshlig`i mayor B.A.Aytenov"
    },
    {
        "№": 188,
        "FISh": "Ibragimova Guzala Sobitovna",
        "Tugilgan yili": "11/2/95",
        "Tuman": "Sergeli ",
        "MFY": "Ziynat",
        "Toifasi": "Notinch oila farzandi ",
        "Biriktirilgan rahbarlar ": "Sergeli tumani QB boshlig`i mayor B.A.Aytenov"
    },
    {
        "№": 189,
        "FISh": "Nizomov Komiljon Toir o'g'li",
        "Tugilgan yili": "9/2/03",
        "Tuman": "Sergeli ",
        "MFY": "Ziynat",
        "Toifasi": "Notinch oila farzandi ",
        "Biriktirilgan rahbarlar ": "Sergeli tumani QB boshlig`i mayor B.A.Aytenov"
    },
    {
        "№": 190,
        "FISh": "Shaxismailova Marjonabonu Shaxriyor qizi",
        "Tugilgan yili": "11/19/04",
        "Tuman": "Sergeli ",
        "MFY": "Ziynat",
        "Toifasi": "Notinch oila farzandi ",
        "Biriktirilgan rahbarlar ": "Sergeli tumani QB boshlig`i mayor B.A.Aytenov"
    },
    {
        "№": 191,
        "FISh": "Xoliqov Husniddin Musurmon o'g'li",
        "Tugilgan yili": "1/27/99",
        "Tuman": "Sergeli ",
        "MFY": "Ziynat",
        "Toifasi": "oilaviy ajrim yoqasidagi yosh oila ",
        "Biriktirilgan rahbarlar ": "Sergeli tumani QB boshlig`i mayor B.A.Aytenov"
    },
    {
        "№": 192,
        "FISh": "Qosimov Saidbek Izzatullao'g'li",
        "Tugilgan yili": "16.06.2004 \n ",
        "Tuman": "Shayxontohur",
        "MFY": "Sarxumdon",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Shayxontohur tumani IIO FMB boshlig`i polkovnik O.A.Jamolov"
    },
    {
        "№": 193,
        "FISh": "O‘Ktambek Ismoil Anvaro'g'li",
        "Tugilgan yili": "23.01.1996 \n ",
        "Tuman": "Shayxontohur",
        "MFY": "Sarxumdon",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Shayxontohur tumani IIO FMB boshlig`i polkovnik O.A.Jamolov"
    },
    {
        "№": 194,
        "FISh": "Ziyaev Isfandiyor Jaxongir o'g'li",
        "Tugilgan yili": "7/27/97",
        "Tuman": "Shayxontohur",
        "MFY": "Sarxumdon ",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Shayxontohur tumani IIO FMB boshlig`i polkovnik O.A.Jamolov"
    },
    {
        "№": 195,
        "FISh": "Shoiriy Umarbek Ulug'bek o'g'li",
        "Tugilgan yili": "9/20/04",
        "Tuman": "Shayxontohur",
        "MFY": "Sarxumdon ",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Shayxontohur tumani IIO FMB boshlig`i polkovnik O.A.Jamolov"
    },
    {
        "№": 196,
        "FISh": "Abdullajonov Sherzod Baxtiyor o'g'li",
        "Tugilgan yili": "12/15/95",
        "Tuman": "Shayxontohur",
        "MFY": "Sarxumdon ",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Shayxontohur tumani IIO FMB boshlig`i polkovnik O.A.Jamolov"
    },
    {
        "№": 197,
        "FISh": "Furqatov Qudratulla Ilxomo'g'li",
        "Tugilgan yili": "1/25/08",
        "Tuman": "Shayxontohur",
        "MFY": "Shayxontohur",
        "Toifasi": "Muntazam dars qoldiruvchi",
        "Biriktirilgan rahbarlar ": "Shayxontohur tumani IIO FMB boshlig`i polkovnik O.A.Jamolov"
    },
    {
        "№": 198,
        "FISh": "Zakirov Shavkat Ilxomovich",
        "Tugilgan yili": "9/13/06",
        "Tuman": "Shayxontohur",
        "MFY": "Shayxontohur",
        "Toifasi": "Muntazam dars qoldiruvchi",
        "Biriktirilgan rahbarlar ": "Shayxontohur tumani IIO FMB boshlig`i polkovnik O.A.Jamolov"
    },
    {
        "№": 199,
        "FISh": "Tohirjonov Abdulvoris Bahodiro'g'li",
        "Tugilgan yili": "12.01.2004 \n ",
        "Tuman": "Shayxontohur",
        "MFY": "Shodlik",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Shayxontohur tumani IIO FMB boshlig`i polkovnik O.A.Jamolov"
    },
    {
        "№": 200,
        "FISh": "Axmadov Adxamjon Raxmatjon o'g'li",
        "Tugilgan yili": "24.08.2002",
        "Tuman": "Shayxontohur",
        "MFY": "Shofayzi",
        "Toifasi": "Yot gʻoyalar tasiriga tushib qolgan yoshlar",
        "Biriktirilgan rahbarlar ": "Shayxontohur tumani IIO FMB boshlig`i 1-o`rinbosari podpolkovnik A.K.Tursunov"
    },
    {
        "№": 201,
        "FISh": "G'aniyev Qodirxon Anvaro'g'li",
        "Tugilgan yili": "21.07.1997 \n",
        "Tuman": "Shayxontohur",
        "MFY": "Shofayzi",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Shayxontohur tumani IIO FMB boshlig`i 1-o`rinbosari podpolkovnik A.K.Tursunov"
    },
    {
        "№": 202,
        "FISh": "Irisbaev Ubaydulla Nasrullao'g'li",
        "Tugilgan yili": "11/10/05",
        "Tuman": "Shayxontohur",
        "MFY": "Shofayzi",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Shayxontohur tumani IIO FMB boshlig`i 1-o`rinbosari podpolkovnik A.K.Tursunov"
    },
    {
        "№": 203,
        "FISh": "Abduvaliev Zayniddin Avazo'g'li",
        "Tugilgan yili": "9/8/00",
        "Tuman": "Shayxontohur",
        "MFY": "Shofayzi",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Shayxontohur tumani IIO FMB boshlig`i 1-o`rinbosari podpolkovnik A.K.Tursunov"
    },
    {
        "№": 204,
        "FISh": "Turabekov Xamidullo Ulugʻbeko'g'li",
        "Tugilgan yili": "6/20/03",
        "Tuman": "Shayxontohur",
        "MFY": "Suzok ota",
        "Toifasi": "Agressiv xulq-atvor",
        "Biriktirilgan rahbarlar ": "Shayxontohur tumani IIO FMB boshlig`i 1-o`rinbosari podpolkovnik A.K.Tursunov"
    },
    {
        "№": 205,
        "FISh": "Ibroximov Saidakbar Xasano'g'li",
        "Tugilgan yili": "11/27/99",
        "Tuman": "Shayxontohur",
        "MFY": "Taxtapul",
        "Toifasi": "Giyohvandlikka va spirtlik ichimlikka ruju qoʻygan",
        "Biriktirilgan rahbarlar ": "Shayxontohur tumani IIO FMB boshlig`i 1-o`rinbosari podpolkovnik A.K.Tursunov"
    },
    {
        "№": 206,
        "FISh": "Muazzamov Botirjon Nodirjono'g'li",
        "Tugilgan yili": "2/10/07",
        "Tuman": "Shayxontohur",
        "MFY": "Taxtapul",
        "Toifasi": "Agressiv xulq-atvor",
        "Biriktirilgan rahbarlar ": "Shayxontohur tumani IIO FMB boshlig`i 1-o`rinbosari podpolkovnik A.K.Tursunov"
    },
    {
        "№": 207,
        "FISh": "Matyakubov Al-Samir Elmurodo'g'li",
        "Tugilgan yili": "10/14/06",
        "Tuman": "Shayxontohur",
        "MFY": "Taxtapul",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Shayxontohur tumani IIO FMB boshlig`i 1-o`rinbosari podpolkovnik A.K.Tursunov"
    },
    {
        "№": 208,
        "FISh": "Ashurov Umidjon Anvaro'g'li",
        "Tugilgan yili": "3/27/04",
        "Tuman": "Shayxontohur",
        "MFY": "Taxtapul",
        "Toifasi": "Notinch oila farzandi ",
        "Biriktirilgan rahbarlar ": "Shayxontohur tumani IIO FMB boshlig`i o`rinbosari podpolkovnik T.I.Rixsiyev"
    },
    {
        "№": 209,
        "FISh": "Raxmatullaeva Dilafruz Fayzullo qizi",
        "Tugilgan yili": "1/27/96",
        "Tuman": "Shayxontohur",
        "MFY": "Taxtapul",
        "Toifasi": "Notinch oila farzandi ",
        "Biriktirilgan rahbarlar ": "Shayxontohur tumani IIO FMB boshlig`i o`rinbosari podpolkovnik T.I.Rixsiyev"
    },
    {
        "№": 210,
        "FISh": "Rasulova Feruza Rasul qizi",
        "Tugilgan yili": "8/31/08",
        "Tuman": "Shayxontohur",
        "MFY": "Taxtapul",
        "Toifasi": "Notinch oila farzandi ",
        "Biriktirilgan rahbarlar ": "Shayxontohur tumani IIO FMB boshlig`i o`rinbosari podpolkovnik T.I.Rixsiyev"
    },
    {
        "№": 211,
        "FISh": "Zayniddinov Sunnatilla Zuxriddino'g'li",
        "Tugilgan yili": "9/15/95",
        "Tuman": "Shayxontohur",
        "MFY": "Taxtapul",
        "Toifasi": "oilaviy ajrim yoqasidagi yosh oila ",
        "Biriktirilgan rahbarlar ": "Shayxontohur tumani IIO FMB boshlig`i o`rinbosari podpolkovnik T.I.Rixsiyev"
    },
    {
        "№": 212,
        "FISh": "Xudoyberdiyev Nig‘matilla Husniddino'g'li",
        "Tugilgan yili": "13.10.2000 \n ",
        "Tuman": "Shayxontohur",
        "MFY": "Tinchlik",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Shayxontohur tumani IIO FMB boshlig`i o`rinbosari podpolkovnik T.I.Rixsiyev"
    },
    {
        "№": 213,
        "FISh": "Asqarxujayev Saidnosir Mubashiro'g'li",
        "Tugilgan yili": "03.05.1999 \n",
        "Tuman": "Shayxontohur",
        "MFY": "Tinchlik",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Shayxontohur tumani IIO FMB boshlig`i o`rinbosari podpolkovnik T.I.Rixsiyev"
    },
    {
        "№": 214,
        "FISh": "Safarova Diana Ruslanovna",
        "Tugilgan yili": "1/16/07",
        "Tuman": "Shayxontohur",
        "MFY": "Tinchlik",
        "Toifasi": "Notinch oila farzandi ",
        "Biriktirilgan rahbarlar ": "Shayxontohur tumani IIO FMB boshlig`i o`rinbosari podpolkovnik T.I.Rixsiyev"
    },
    {
        "№": 215,
        "FISh": "Zabixullaev Abdubosit Abduraxmono'g'li ",
        "Tugilgan yili": "7/21/08",
        "Tuman": "Shayxontohur",
        "MFY": "Tinchlik",
        "Toifasi": "Qimor va tavakkalchilikka asoslangan o'yinlarga ruju qo'ygan yosh",
        "Biriktirilgan rahbarlar ": "Shayxontohur tumani IIO FMB boshlig`i o`rinbosari podpolkovnik T.I.Rixsiyev"
    },
    {
        "№": 216,
        "FISh": "Kodirov Shoxruxxon Nodir  o'g'li",
        "Tugilgan yili": "26.02.1997",
        "Tuman": "Shayxontohur",
        "MFY": "Xuvaydo",
        "Toifasi": "Profilaktik hisobda turgan yoshlar",
        "Biriktirilgan rahbarlar ": "Shayxontohur tumani IIO FMB boshlig`i o`rinbosari mayor J.J.Shonazarov"
    },
    {
        "№": 217,
        "FISh": "Abduraximov Jamoliddin Muxiddin o'g'li",
        "Tugilgan yili": "26.04.2000",
        "Tuman": "Shayxontohur",
        "MFY": "Xuvaydo",
        "Toifasi": "Profilaktik hisobda turgan yoshlar",
        "Biriktirilgan rahbarlar ": "Shayxontohur tumani IIO FMB boshlig`i o`rinbosari mayor J.J.Shonazarov"
    },
    {
        "№": 218,
        "FISh": "Xamzayev Jahongir G‘ayrato'g'li",
        "Tugilgan yili": "21.02.1997 \n ",
        "Tuman": "Shayxontohur",
        "MFY": "Xuvaydo",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Shayxontohur tumani IIO FMB boshlig`i o`rinbosari mayor J.J.Shonazarov"
    },
    {
        "№": 219,
        "FISh": "Erkinov Xurshid Xusano'g'li",
        "Tugilgan yili": "02.12.1998 \n",
        "Tuman": "Shayxontohur",
        "MFY": "Xuvaydo",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Shayxontohur tumani IIO FMB boshlig`i o`rinbosari mayor J.J.Shonazarov"
    },
    {
        "№": 220,
        "FISh": "Tuxtamurodov Muzaffar Abdumovlon o'g'li",
        "Tugilgan yili": "18.09.1999",
        "Tuman": "Shayxontohur",
        "MFY": "Yangi Beltepa",
        "Toifasi": "Profilaktik hisobda turgan yoshlar",
        "Biriktirilgan rahbarlar ": "Shayxontohur tumani IIO FMB boshlig`i o`rinbosari mayor J.J.Shonazarov"
    },
    {
        "№": 221,
        "FISh": "Toshmurodov Samandar Kuchkor o'g'li",
        "Tugilgan yili": "30.10.2002",
        "Tuman": "Shayxontohur",
        "MFY": "Yangi Beltepa",
        "Toifasi": "Profilaktik hisobda turgan yoshlar",
        "Biriktirilgan rahbarlar ": "Shayxontohur tumani IIO FMB boshlig`i o`rinbosari mayor J.J.Shonazarov"
    },
    {
        "№": 222,
        "FISh": "Gulomov Asilbek Bexzod o'g'li",
        "Tugilgan yili": "03.09.1999",
        "Tuman": "Shayxontohur",
        "MFY": "Yangi Beltepa",
        "Toifasi": "Yot gʻoyalar tasiriga tushib qolgan yoshlar",
        "Biriktirilgan rahbarlar ": "Shayxontohur tumani IIO FMB boshlig`i o`rinbosari mayor J.J.Shonazarov"
    },
    {
        "№": 223,
        "FISh": "Qodirov Abdulloh Ikromjono'g'li",
        "Tugilgan yili": "11.11.1999 \n ",
        "Tuman": "Shayxontohur",
        "MFY": "Yangi Beltepa",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Shayxontohur tumani IIO FMB boshlig`i o`rinbosari mayor J.J.Shonazarov"
    },
    {
        "№": 224,
        "FISh": "Ikromov Shahzod Umidjono'g'li",
        "Tugilgan yili": "10.04.2000 \n",
        "Tuman": "Shayxontohur",
        "MFY": "Yangi Beltepa",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Sergeli tumani IIO FMB boshlig`i o`rinbosari podpolkovnik A.S.Tadjiyev"
    },
    {
        "№": 225,
        "FISh": "Xoldorov Axror Sirojiddino'g'li",
        "Tugilgan yili": "19,01,2007",
        "Tuman": "Shayxontohur",
        "MFY": "Yangi Beltepa",
        "Toifasi": "Muntazam dars qoldiruvchi",
        "Biriktirilgan rahbarlar ": "Sergeli tumani IIO FMB boshlig`i o`rinbosari podpolkovnik A.S.Tadjiyev"
    },
    {
        "№": 226,
        "FISh": "Galeyev Elyor Ruslanovich",
        "Tugilgan yili": "7/3/02",
        "Tuman": "Shayxontohur",
        "MFY": "Yangi Beltepa",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Sergeli tumani IIO FMB boshlig`i o`rinbosari podpolkovnik A.S.Tadjiyev"
    },
    {
        "№": 227,
        "FISh": "Kamilov Asadbek Dilshodbek o'g'li",
        "Tugilgan yili": "3/13/03",
        "Tuman": "Shayxontohur",
        "MFY": "Yangi Beltepa",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Sergeli tumani IIO FMB boshlig`i o`rinbosari podpolkovnik A.S.Tadjiyev"
    },
    {
        "№": 228,
        "FISh": "Galeyev Elnur Ruslanovich",
        "Tugilgan yili": "12/22/96",
        "Tuman": "Shayxontohur",
        "MFY": "Yangi Beltepa",
        "Toifasi": "Giyohvandlikka va spirtlik ichimlikka ruju qoʻygan",
        "Biriktirilgan rahbarlar ": "Sergeli tumani IIO FMB boshlig`i o`rinbosari podpolkovnik A.S.Tadjiyev"
    },
    {
        "№": 229,
        "FISh": "Nigmatjonov Shoxrux Otabek o'g'li",
        "Tugilgan yili": "06.08.2001",
        "Tuman": "Shayxontohur",
        "MFY": "Yangi Kamolon",
        "Toifasi": "Giyohvandlikka va spirtlik ichimlikka ruju qoʻygan",
        "Biriktirilgan rahbarlar ": "Sergeli tumani IIO FMB boshlig`i o`rinbosari podpolkovnik A.S.Tadjiyev"
    },
    {
        "№": 230,
        "FISh": "Mullaxonov Jasur Firuzovich",
        "Tugilgan yili": "12.04.2004",
        "Tuman": "Shayxontohur",
        "MFY": "Yangi Kamolon",
        "Toifasi": "Giyohvandlikka va spirtlik ichimlikka ruju qoʻygan",
        "Biriktirilgan rahbarlar ": "Sergeli tumani IIO FMB boshlig`i o`rinbosari podpolkovnik A.S.Tadjiyev"
    },
    {
        "№": 231,
        "FISh": "Botirov Nodirbek Sherkul o'g'li",
        "Tugilgan yili": "06.01.2000",
        "Tuman": "Shayxontohur",
        "MFY": "Yangi Kamolon",
        "Toifasi": "Giyohvandlikka va spirtlik ichimlikka ruju qoʻygan",
        "Biriktirilgan rahbarlar ": "Sergeli tumani IIO FMB boshlig`i o`rinbosari podpolkovnik A.S.Tadjiyev"
    },
    {
        "№": 232,
        "FISh": "Muxtorov Abdulloh Doniyor o'g'li",
        "Tugilgan yili": "7/14/07",
        "Tuman": "Shayxontohur",
        "MFY": "Yangi Kamolon",
        "Toifasi": "Profilaktik hisobda turgan yoshlar",
        "Biriktirilgan rahbarlar ": "Shayxontohur tumani IIO FMB boshlig`i o`rinbosari podpolkovnik Sh.N.Matanov"
    },
    {
        "№": 233,
        "FISh": "To‘xtamurodov Mirjalol Saidg‘afforo'g'li",
        "Tugilgan yili": "26.05.1996 \n ",
        "Tuman": "Shayxontohur",
        "MFY": "Yangiobod\n",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Shayxontohur tumani IIO FMB boshlig`i o`rinbosari podpolkovnik Sh.N.Matanov"
    },
    {
        "№": 234,
        "FISh": "Sultonmurodov Alisher Qaxramon o'g'li",
        "Tugilgan yili": "6/19/98",
        "Tuman": "Shayxontohur",
        "MFY": "Yangiobod\n",
        "Toifasi": "Profilaktik hisobda turgan yoshlar",
        "Biriktirilgan rahbarlar ": "Shayxontohur tumani IIO FMB boshlig`i o`rinbosari podpolkovnik Sh.N.Matanov"
    },
    {
        "№": 235,
        "FISh": "Ibragimov Ilxombek Ulug'bek o'g'li",
        "Tugilgan yili": "7/2/99",
        "Tuman": "Shayxontohur",
        "MFY": "Yangiobod\n",
        "Toifasi": "Profilaktik hisobda turgan yoshlar",
        "Biriktirilgan rahbarlar ": "Shayxontohur tumani IIO FMB boshlig`i o`rinbosari podpolkovnik Sh.N.Matanov"
    },
    {
        "№": 236,
        "FISh": "Irmatov Umidjon Hakim o'g'li",
        "Tugilgan yili": "6/10/00",
        "Tuman": "Shayxontohur",
        "MFY": "Yangiobod\n",
        "Toifasi": "Profilaktik hisobda turgan yoshlar",
        "Biriktirilgan rahbarlar ": "Shayxontohur tumani IIO FMB boshlig`i o`rinbosari podpolkovnik Sh.N.Matanov"
    },
    {
        "№": 237,
        "FISh": "Karimov Fayzullo Jimshido'g'li",
        "Tugilgan yili": "9/9/08",
        "Tuman": "Shayxontohur",
        "MFY": "Yangishahar",
        "Toifasi": "Muntazam dars qoldiruvchi",
        "Biriktirilgan rahbarlar ": "Shayxontohur tumani IIO FMB boshlig`i o`rinbosari podpolkovnik Sh.N.Matanov"
    },
    {
        "№": 238,
        "FISh": "Rahimjonov Farhod Abdushukuro'g'li",
        "Tugilgan yili": "26.09.1994 \n ",
        "Tuman": "Shayxontohur",
        "MFY": "Zafarobod ",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Shayxontohur tumani IIO FMB boshlig`i o`rinbosari podpolkovnik Sh.N.Matanov"
    },
    {
        "№": 239,
        "FISh": "Omongeldiyev Mirali Miralimo'g'li",
        "Tugilgan yili": "05.08.2003 \n ",
        "Tuman": "Shayxontohur",
        "MFY": "Zafarobod ",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Shayxontohur tumani QB boshlig`i podpolkovnik A.A.Madjidov"
    },
    {
        "№": 240,
        "FISh": "Abdujabbarov Saida’lo Abduvalio'g'li",
        "Tugilgan yili": "25.03.1997 \n ",
        "Tuman": "Shayxontohur",
        "MFY": "Zafarobod ",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Shayxontohur tumani QB boshlig`i podpolkovnik A.A.Madjidov"
    },
    {
        "№": 241,
        "FISh": "Azimov Azizbek Botirbeko'g'li",
        "Tugilgan yili": "03.09.2003 \n ",
        "Tuman": "Shayxontohur",
        "MFY": "Zafarobod ",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Shayxontohur tumani QB boshlig`i podpolkovnik A.A.Madjidov"
    },
    {
        "№": 242,
        "FISh": "Karimov Axmadjon Olimjono'g'li",
        "Tugilgan yili": "8/4/98",
        "Tuman": "Shayxontohur",
        "MFY": "Zangiota",
        "Toifasi": "Agressiv xulq-atvor",
        "Biriktirilgan rahbarlar ": "Shayxontohur tumani QB boshlig`i podpolkovnik A.A.Madjidov"
    },
    {
        "№": 243,
        "FISh": "Samigʻjonov Karimberdi Abdusamato'g'li",
        "Tugilgan yili": "12/12/02",
        "Tuman": "Shayxontohur",
        "MFY": "Zangiota",
        "Toifasi": "Agressiv xulq-atvor",
        "Biriktirilgan rahbarlar ": "Shayxontohur tumani QB boshlig`i podpolkovnik A.A.Madjidov"
    },
    {
        "№": 244,
        "FISh": "Erkinov Abdubakr Abduqaxxoro'g'li",
        "Tugilgan yili": "6/3/03",
        "Tuman": "Shayxontohur",
        "MFY": "Zangiota",
        "Toifasi": "Agressiv xulq-atvor",
        "Biriktirilgan rahbarlar ": "Shayxontohur tumani QB boshlig`i podpolkovnik A.A.Madjidov"
    },
    {
        "№": 245,
        "FISh": "Murodov Muxriddin Muzaffaro'g'li",
        "Tugilgan yili": "28.08.1996 \n",
        "Tuman": "Shayxontohur",
        "MFY": "Zangiota",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Shayxontohur tumani QB boshlig`i podpolkovnik A.A.Madjidov"
    },
    {
        "№": 246,
        "FISh": "Rasulova Qunduzoy Odilsher qizi",
        "Tugilgan yili": "12/23/09",
        "Tuman": "Uchtepa ",
        "MFY": "Xondamir",
        "Toifasi": "Notinch oila farzandi ",
        "Biriktirilgan rahbarlar ": "Uchtepa tumani IIO FMB boshlig`i polkovnik D.M.Mirsadikov"
    },
    {
        "№": 247,
        "FISh": "Erkinov Komronbek Komiljon o‘g‘li",
        "Tugilgan yili": "9/10/02",
        "Tuman": "Uchtepa ",
        "MFY": "Xondamir",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Uchtepa tumani IIO FMB boshlig`i polkovnik D.M.Mirsadikov"
    },
    {
        "№": 248,
        "FISh": "Ubaydullaeva Umida Аlisherovna",
        "Tugilgan yili": "3/7/09",
        "Tuman": "Uchtepa ",
        "MFY": "Xuroson",
        "Toifasi": "Agressiv xulq-atvor",
        "Biriktirilgan rahbarlar ": "Uchtepa tumani IIO FMB boshlig`i 1-o`rinbosari podpolkovnik B.B.Haqnazarov"
    },
    {
        "№": 249,
        "FISh": "Ravshanov Najmiddin G‘ayratovich",
        "Tugilgan yili": "7/12/00",
        "Tuman": "Uchtepa ",
        "MFY": "Xuroson",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Uchtepa tumani IIO FMB boshlig`i 1-o`rinbosari podpolkovnik B.B.Haqnazarov"
    },
    {
        "№": 250,
        "FISh": "Komilov Abdulbosit Axror o‘g‘li ",
        "Tugilgan yili": "10/1/01",
        "Tuman": "Uchtepa ",
        "MFY": "Xuroson",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Uchtepa tumani IIO FMB boshlig`i o`rinbosari podpolkovnik M.U.Umurzakov"
    },
    {
        "№": 251,
        "FISh": "Mirzamuhammedov Bahtiyor Tohir o‘g‘li ",
        "Tugilgan yili": "11/13/04",
        "Tuman": "Uchtepa ",
        "MFY": "Xuroson",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Uchtepa tumani IIO FMB boshlig`i o`rinbosari podpolkovnik M.U.Umurzakov"
    },
    {
        "№": 252,
        "FISh": "Baxtiyorov Muxammadali Qahramon oʼgʼli",
        "Tugilgan yili": "5/22/09",
        "Tuman": "Uchtepa ",
        "MFY": "Xurshid",
        "Toifasi": "Agressiv xulq-atvor",
        "Biriktirilgan rahbarlar ": "Uchtepa tumani IIO FMB boshlig`i o`rinbosari mayor O.I.Karimov"
    },
    {
        "№": 253,
        "FISh": "Maxkamov Muxammadamin Baxodir oʼgʼli",
        "Tugilgan yili": "6/6/09",
        "Tuman": "Uchtepa ",
        "MFY": "Xurshid",
        "Toifasi": "Muntazam dars qoldiruvchi",
        "Biriktirilgan rahbarlar ": "Uchtepa tumani IIO FMB boshlig`i o`rinbosari mayor O.I.Karimov"
    },
    {
        "№": 254,
        "FISh": "Shavkatov Umar Qudratillo",
        "Tugilgan yili": "1/1/04",
        "Tuman": "Uchtepa ",
        "MFY": "Yu.Sakkokiy",
        "Toifasi": "Agressiv xulq-atvor",
        "Biriktirilgan rahbarlar ": "Uchtepa tumani IIO FMB boshlig`i o`rinbosari podpolkovnik Sh.S.Kudiyarov"
    },
    {
        "№": 255,
        "FISh": "Щupkin Boris",
        "Tugilgan yili": "6/23/08",
        "Tuman": "Uchtepa ",
        "MFY": "Zargarlik",
        "Toifasi": "Agressiv xulq-atvor",
        "Biriktirilgan rahbarlar ": "Uchtepa tumani IIO FMB boshlig`i o`rinbosari podpolkovnik A.A.Ochilov"
    },
    {
        "№": 256,
        "FISh": "Eshmoʼminov Аzizbek Аlievich ",
        "Tugilgan yili": "7/27/07",
        "Tuman": "Uchtepa ",
        "MFY": "Zargarlik",
        "Toifasi": "Muntazam dars qoldiruvchi",
        "Biriktirilgan rahbarlar ": "Uchtepa tumani QB boshlig`i kapitan O.S.Saidov"
    },
    {
        "№": 257,
        "FISh": "Mastalieva Yana Ravshanovna",
        "Tugilgan yili": "4/6/10",
        "Tuman": "Yakkasaroy",
        "MFY": "Qushbegi",
        "Toifasi": "Muntazam dars qoldiruvchi",
        "Biriktirilgan rahbarlar ": "Yakkasaroy tumani IIO FMB boshlig`i podpolkovnik A.X.Murodov"
    },
    {
        "№": 258,
        "FISh": "Yuldasheva Madina Zoirjon qizi",
        "Tugilgan yili": "2/12/02",
        "Tuman": "Yakkasaroy",
        "MFY": "Qushbegi",
        "Toifasi": "oilaviy ajrim yoqasidagi yosh oila ",
        "Biriktirilgan rahbarlar ": "Yakkasaroy tumani IIO FMB boshlig`i podpolkovnik A.X.Murodov"
    },
    {
        "№": 259,
        "FISh": "Vedat Deberdeyev Vedat o'g'li",
        "Tugilgan yili": "11.05.1999",
        "Tuman": "Yakkasaroy",
        "MFY": "Qushbegi",
        "Toifasi": "Agressiv xulq-atvor",
        "Biriktirilgan rahbarlar ": "Yakkasaroy tumani IIO FMB boshlig`i podpolkovnik A.X.Murodov"
    },
    {
        "№": 260,
        "FISh": "Vladimir Mastaliyev Vadimovich",
        "Tugilgan yili": "26.07.2000",
        "Tuman": "Yakkasaroy",
        "MFY": "Qushbegi",
        "Toifasi": "Agressiv xulq-atvor",
        "Biriktirilgan rahbarlar ": "Yakkasaroy tumani IIO FMB boshlig`i podpolkovnik A.X.Murodov"
    },
    {
        "№": 261,
        "FISh": "Davronbek Xurramov Baxtiyor o'g'li",
        "Tugilgan yili": "27.04.1998",
        "Tuman": "Yakkasaroy",
        "MFY": "Qushbegi",
        "Toifasi": "Agressiv xulq-atvor",
        "Biriktirilgan rahbarlar ": "Yakkasaroy tumani IIO FMB boshlig`i podpolkovnik A.X.Murodov"
    },
    {
        "№": 262,
        "FISh": "Ja’far Ubaydullayev Shuhratilla o'g'li",
        "Tugilgan yili": "04.07.2000",
        "Tuman": "Yakkasaroy",
        "MFY": "Qushbegi",
        "Toifasi": "Agressiv xulq-atvor",
        "Biriktirilgan rahbarlar ": "Yakkasaroy tumani IIO FMB boshlig`i 1-o`rinbosari podpolkovnik N.A.Yusupov"
    },
    {
        "№": 263,
        "FISh": "Timur Murseyev Zoxidovich",
        "Tugilgan yili": "03.12.1998",
        "Tuman": "Yakkasaroy",
        "MFY": "Qushbegi",
        "Toifasi": "Agressiv xulq-atvor",
        "Biriktirilgan rahbarlar ": "Yakkasaroy tumani IIO FMB boshlig`i 1-o`rinbosari podpolkovnik N.A.Yusupov"
    },
    {
        "№": 264,
        "FISh": "Islomjon Ubaydullayev Fayzullla o'g'li",
        "Tugilgan yili": "02.01.2004",
        "Tuman": "Yakkasaroy",
        "MFY": "Qushbegi ",
        "Toifasi": "Giyohvandlikka va spirtlik ichimlikka ruju qoʻygan",
        "Biriktirilgan rahbarlar ": "Yakkasaroy tumani IIO FMB boshlig`i 1-o`rinbosari podpolkovnik N.A.Yusupov"
    },
    {
        "№": 265,
        "FISh": "Shoxrux Raximov Farxod o'g'li",
        "Tugilgan yili": "14.05.1999",
        "Tuman": "Yakkasaroy",
        "MFY": "Qushbegi ",
        "Toifasi": "Giyohvandlikka va spirtlik ichimlikka ruju qoʻygan",
        "Biriktirilgan rahbarlar ": "Yakkasaroy tumani IIO FMB boshlig`i 1-o`rinbosari podpolkovnik N.A.Yusupov"
    },
    {
        "№": 266,
        "FISh": "Norimmatova Marjona Ilxomboevna",
        "Tugilgan yili": "6/28/09",
        "Tuman": "Yakkasaroy",
        "MFY": "Shoxjahon ",
        "Toifasi": "Notinch oila farzandi ",
        "Biriktirilgan rahbarlar ": "Yakkasaroy tumani IIO FMB boshlig`i 1-o`rinbosari podpolkovnik N.A.Yusupov"
    },
    {
        "№": 267,
        "FISh": "Yoriev Ramziddin Baxramovich",
        "Tugilgan yili": "11/10/04",
        "Tuman": "Yakkasaroy",
        "MFY": "Shoxjahon ",
        "Toifasi": "Notinch oila farzandi ",
        "Biriktirilgan rahbarlar ": "Yakkasaroy tumani IIO FMB boshlig`i o`rinbosari podpolkovnik Sh.R.Shakirov"
    },
    {
        "№": 268,
        "FISh": "Аllashukurova Sultonposhsha Rasulbek qizi",
        "Tugilgan yili": "3/5/08",
        "Tuman": "Yakkasaroy",
        "MFY": "Shoxjahon ",
        "Toifasi": "Notinch oila farzandi ",
        "Biriktirilgan rahbarlar ": "Yakkasaroy tumani IIO FMB boshlig`i o`rinbosari podpolkovnik Sh.R.Shakirov"
    },
    {
        "№": 269,
        "FISh": "Indira Yunusova Baxodirovna",
        "Tugilgan yili": "22.08.1998",
        "Tuman": "Yakkasaroy",
        "MFY": "Shoxjahon ",
        "Toifasi": "Agressiv xulq-atvor",
        "Biriktirilgan rahbarlar ": "Yakkasaroy tumani IIO FMB boshlig`i o`rinbosari podpolkovnik Sh.R.Shakirov"
    },
    {
        "№": 270,
        "FISh": "Doston Turg‘Unov Rustam o'g'li",
        "Tugilgan yili": "07.06.1997",
        "Tuman": "Yakkasaroy",
        "MFY": "Shoxjahon ",
        "Toifasi": "Agressiv xulq-atvor",
        "Biriktirilgan rahbarlar ": "Yakkasaroy tumani IIO FMB boshlig`i o`rinbosari podpolkovnik Sh.R.Shakirov"
    },
    {
        "№": 271,
        "FISh": "Mustafa Irnazarov Shavkat o'g'li",
        "Tugilgan yili": "21.05.2003",
        "Tuman": "Yakkasaroy",
        "MFY": "Shoxjahon ",
        "Toifasi": "Giyohvandlikka va spirtlik ichimlikka ruju qoʻygan",
        "Biriktirilgan rahbarlar ": "Yakkasaroy tumani IIO FMB boshlig`i o`rinbosari podpolkovnik Sh.R.Shakirov"
    },
    {
        "№": 272,
        "FISh": "Og'abek Xamroqulov Yazdon o'g'li",
        "Tugilgan yili": "28.02.1995",
        "Tuman": "Yakkasaroy",
        "MFY": "Shoxjahon ",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Yakkasaroy tumani IIO FMB boshlig`i o`rinbosari podpolkovnik Z.T.Toxirov"
    },
    {
        "№": 273,
        "FISh": "Shohruh Rasulov Аbduqahhor o'g'li",
        "Tugilgan yili": "23.03.1996",
        "Tuman": "Yakkasaroy",
        "MFY": "Tepa ",
        "Toifasi": "Profilaktik hisobda turgan yoshlar",
        "Biriktirilgan rahbarlar ": "Yakkasaroy tumani IIO FMB boshlig`i o`rinbosari podpolkovnik Z.T.Toxirov"
    },
    {
        "№": 274,
        "FISh": "Rustamov Islomjon Umid o'g'li",
        "Tugilgan yili": "12/9/07",
        "Tuman": "Yakkasaroy",
        "MFY": "Yakkasaroy",
        "Toifasi": "Muntazam dars qoldiruvchi",
        "Biriktirilgan rahbarlar ": "Yakkasaroy tumani IIO FMB boshlig`i o`rinbosari podpolkovnik Z.T.Toxirov"
    },
    {
        "№": 275,
        "FISh": "Xudoyorova Samira Bekpulatovna ",
        "Tugilgan yili": "1/2/07",
        "Tuman": "Yakkasaroy",
        "MFY": "Yakkasaroy",
        "Toifasi": "Muntazam dars qoldiruvchi",
        "Biriktirilgan rahbarlar ": "Yakkasaroy tumani IIO FMB boshlig`i o`rinbosari podpolkovnik Z.T.Toxirov"
    },
    {
        "№": 276,
        "FISh": "O'razboeva Maftuna baxrom qizi ",
        "Tugilgan yili": "10/15/04",
        "Tuman": "Yakkasaroy",
        "MFY": "Yakkasaroy",
        "Toifasi": "Notinch oila farzandi ",
        "Biriktirilgan rahbarlar ": "Yakkasaroy tumani IIO FMB boshlig`i o`rinbosari podpolkovnik Z.T.Toxirov"
    },
    {
        "№": 277,
        "FISh": "Аbdulxakimov Ibroxim Аbraxm oʼgʼli ",
        "Tugilgan yili": "8/26/07",
        "Tuman": "Yakkasaroy",
        "MFY": "Yakkasaroy",
        "Toifasi": "Notinch oila farzandi ",
        "Biriktirilgan rahbarlar ": "Yakkasaroy tumani IIO FMB boshlig`i o`rinbosari podpolkovnik R.R.Masharipov"
    },
    {
        "№": 278,
        "FISh": "Umarova Kamila Аkromovna ",
        "Tugilgan yili": "7/16/07",
        "Tuman": "Yakkasaroy",
        "MFY": "Yakkasaroy",
        "Toifasi": "Notinch oila farzandi ",
        "Biriktirilgan rahbarlar ": "Yakkasaroy tumani IIO FMB boshlig`i o`rinbosari podpolkovnik R.R.Masharipov"
    },
    {
        "№": 279,
        "FISh": "Nizomiddinjon Karimberdiyev Jaxongirjon o'g'li",
        "Tugilgan yili": "23.03.2006",
        "Tuman": "Yakkasaroy",
        "MFY": "Yakkasaroy",
        "Toifasi": "Agressiv xulq-atvor",
        "Biriktirilgan rahbarlar ": "Yakkasaroy tumani IIO FMB boshlig`i o`rinbosari podpolkovnik R.R.Masharipov"
    },
    {
        "№": 280,
        "FISh": "Zabixullo Irgashev Nasrullo o'g'li",
        "Tugilgan yili": "06.03.1996",
        "Tuman": "Yakkasaroy",
        "MFY": "Yakkasaroy",
        "Toifasi": "Agressiv xulq-atvor",
        "Biriktirilgan rahbarlar ": "Yakkasaroy tumani IIO FMB boshlig`i o`rinbosari podpolkovnik R.R.Masharipov"
    },
    {
        "№": 281,
        "FISh": "Olmosbek Avalov Fayozjon o'g'li",
        "Tugilgan yili": "22.07.2006",
        "Tuman": "Yakkasaroy",
        "MFY": "Yakkasaroy",
        "Toifasi": "Agressiv xulq-atvor",
        "Biriktirilgan rahbarlar ": "Yakkasaroy tumani IIO FMB boshlig`i o`rinbosari podpolkovnik R.R.Masharipov"
    },
    {
        "№": 282,
        "FISh": "Sanjar Xudoyorov Bekpulatovich",
        "Tugilgan yili": "19.05.2008",
        "Tuman": "Yakkasaroy",
        "MFY": "Yakkasaroy",
        "Toifasi": "Agressiv xulq-atvor",
        "Biriktirilgan rahbarlar ": "Yakkasaroy tumani IIO FMB boshlig`i o`rinbosari mayor M.M.Mirag`zamov"
    },
    {
        "№": 283,
        "FISh": "Xabibullayeva Marxamat Bohodir qizi",
        "Tugilgan yili": "25.05.1996",
        "Tuman": "Yakkasaroy",
        "MFY": "Yakkasaroy",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Yakkasaroy tumani IIO FMB boshlig`i o`rinbosari mayor M.M.Mirag`zamov"
    },
    {
        "№": 284,
        "FISh": "Mixel David Denisovich",
        "Tugilgan yili": "16.12.1998",
        "Tuman": "Yakkasaroy",
        "MFY": "Yakkasaroy",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Yakkasaroy tumani IIO FMB boshlig`i o`rinbosari mayor M.M.Mirag`zamov"
    },
    {
        "№": 285,
        "FISh": "Asadbek Abdusalomov Akramjon o'g'li",
        "Tugilgan yili": "16.06.2000",
        "Tuman": "Yakkasaroy",
        "MFY": "Yakkasaroy ",
        "Toifasi": "Giyohvandlikka va spirtlik ichimlikka ruju qoʻygan",
        "Biriktirilgan rahbarlar ": "Yakkasaroy tumani IIO FMB boshlig`i o`rinbosari mayor M.M.Mirag`zamov"
    },
    {
        "№": 286,
        "FISh": "Xasan Shamaxsudov Sharaxmat o'g'li",
        "Tugilgan yili": "31.05.1996",
        "Tuman": "Yakkasaroy",
        "MFY": "Yakkasaroy ",
        "Toifasi": "Giyohvandlikka va spirtlik ichimlikka ruju qoʻygan",
        "Biriktirilgan rahbarlar ": "Yakkasaroy tumani IIO FMB boshlig`i o`rinbosari mayor M.M.Mirag`zamov"
    },
    {
        "№": 287,
        "FISh": "Saxaddinov Nurmuxammad Innatilla o'g'li",
        "Tugilgan yili": "10/13/02",
        "Tuman": "Yakkasaroy",
        "MFY": "Аrmug'on",
        "Toifasi": "oilaviy ajrim yoqasidagi yosh oila ",
        "Biriktirilgan rahbarlar ": "Yakkasaroy tumani QB boshlig`i kapitan Sh.A.Nurmatov"
    },
    {
        "№": 288,
        "FISh": "Matjanova Gulnozaxon Utkirbek qizi",
        "Tugilgan yili": "5/8/08",
        "Tuman": "Yakkasaroy",
        "MFY": "Аrmug'on",
        "Toifasi": "Notinch oila farzandi ",
        "Biriktirilgan rahbarlar ": "Yakkasaroy tumani QB boshlig`i kapitan Sh.A.Nurmatov"
    },
    {
        "№": 289,
        "FISh": "Ximoyiddin To‘Rayev Baxriddin o'g'li",
        "Tugilgan yili": "12.07.2000",
        "Tuman": "Yakkasaroy",
        "MFY": "Аrmug'on",
        "Toifasi": "Agressiv xulq-atvor",
        "Biriktirilgan rahbarlar ": "Yakkasaroy tumani QB boshlig`i kapitan Sh.A.Nurmatov"
    },
    {
        "№": 290,
        "FISh": "Davronbek Temirov Nuraliyevich",
        "Tugilgan yili": "01.06.2004",
        "Tuman": "Yakkasaroy",
        "MFY": "Аrmug'on",
        "Toifasi": "Agressiv xulq-atvor",
        "Biriktirilgan rahbarlar ": "Yakkasaroy tumani QB boshlig`i kapitan Sh.A.Nurmatov"
    },
    {
        "№": 291,
        "FISh": "Raxmatjon Nosirov Qodirjon o'g'li",
        "Tugilgan yili": "17.08.1996",
        "Tuman": "Yakkasaroy",
        "MFY": "Аrmug'on",
        "Toifasi": "Agressiv xulq-atvor",
        "Biriktirilgan rahbarlar ": "Yakkasaroy tumani QB boshlig`i kapitan Sh.A.Nurmatov"
    },
    {
        "№": 292,
        "FISh": "Salimova Soliha Dilshod Qizi ",
        "Tugilgan yili": "5/21/09",
        "Tuman": "Yangihayot ",
        "MFY": "Yangi turmush ",
        "Toifasi": "Notinch oila farzandi ",
        "Biriktirilgan rahbarlar ": "Yangihayot tumani IIO FMB boshlig`i podpolkovnik S.A.Jurayev"
    },
    {
        "№": 293,
        "FISh": "Salimova Hadichabonu Dilshod Qizi ",
        "Tugilgan yili": "6/27/10",
        "Tuman": "Yangihayot ",
        "MFY": "Yangi turmush ",
        "Toifasi": "Notinch oila farzandi ",
        "Biriktirilgan rahbarlar ": "Yangihayot tumani IIO FMB boshlig`i podpolkovnik S.A.Jurayev"
    },
    {
        "№": 294,
        "FISh": "Soy Alisher Aleksandrovich ",
        "Tugilgan yili": "6/20/02",
        "Tuman": "Yangihayot ",
        "MFY": "Yangi turmush ",
        "Toifasi": "Qimor va tavakkalchilikka asoslangan o'yinlarga ruju qo'ygan yosh",
        "Biriktirilgan rahbarlar ": "Yangihayot tumani IIO FMB boshlig`i 1-o`rinbosari podpolkovnik F.O.Kasimov"
    },
    {
        "№": 295,
        "FISh": "Umarov Annas Xojiakbar Oʻgʻli ",
        "Tugilgan yili": "11/2/09",
        "Tuman": "Yangihayot ",
        "MFY": "Yangi umid",
        "Toifasi": "Muntazam dars qoldiruvchi",
        "Biriktirilgan rahbarlar ": "Yangihayot tumani IIO FMB boshlig`i 1-o`rinbosari podpolkovnik F.O.Kasimov"
    },
    {
        "№": 296,
        "FISh": "Voxobov Davronbek Dilshod Oʻgʻli ",
        "Tugilgan yili": "1/20/99",
        "Tuman": "Yangihayot ",
        "MFY": "Yangi umid",
        "Toifasi": "Qimor va tavakkalchilikka asoslangan o'yinlarga ruju qo'ygan yosh",
        "Biriktirilgan rahbarlar ": "Yangihayot tumani IIO FMB boshlig`i o`rinbosari podpolkovnik J.K.Abdullayev"
    },
    {
        "№": 297,
        "FISh": "Jumaboyev Xojiakbar Toʻliboy Oʻgʻli",
        "Tugilgan yili": "4/17/97",
        "Tuman": "Yangihayot ",
        "MFY": "Yangi umid ",
        "Toifasi": "Qimor va tavakkalchilikka asoslangan o'yinlarga ruju qo'ygan yosh",
        "Biriktirilgan rahbarlar ": "Yangihayot tumani IIO FMB boshlig`i o`rinbosari podpolkovnik J.K.Abdullayev"
    },
    {
        "№": 298,
        "FISh": "Mutalov Ulugʻbek Abdunosir Oʻgʻli",
        "Tugilgan yili": "27.03.2003",
        "Tuman": "Yangihayot ",
        "MFY": "Yangi umid ",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Yangihayot tumani IIO FMB boshlig`i o`rinbosari podpolkovnik N.X.Muminov"
    },
    {
        "№": 299,
        "FISh": "Xamidullayeva Nasiba Nazarboy Qizi",
        "Tugilgan yili": "30.06.1994",
        "Tuman": "Yangihayot ",
        "MFY": "Yangi umid  ",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Yangihayot tumani IIO FMB boshlig`i o`rinbosari podpolkovnik M.M.Rajabov"
    },
    {
        "№": 300,
        "FISh": "Abdurahmonov Ahmadjon Abdulla Oʻgʻli",
        "Tugilgan yili": "12.07.1995",
        "Tuman": "Yangihayot ",
        "MFY": "Yangihayot",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Yangihayot tumani IIO FMB boshlig`i o`rinbosari podpolkovnik A.K.Turg`inov"
    },
    {
        "№": 301,
        "FISh": "Gaskarov Artur Rustamovich",
        "Tugilgan yili": "9/9/02",
        "Tuman": "Yangihayot ",
        "MFY": "Yorqinhayot",
        "Toifasi": "Notinch oila farzandi ",
        "Biriktirilgan rahbarlar ": "Yangihayot tumani QB boshlig`i mayor S.S.Tillaboyev"
    },
    {
        "№": 302,
        "FISh": "Kiderbaev Baurjan Batir oʻgʻli",
        "Tugilgan yili": "12/14/96",
        "Tuman": "Yashnobod",
        "MFY": "Tovkentepa",
        "Toifasi": "Profilaktik hisobda turgan yoshlar",
        "Biriktirilgan rahbarlar ": "Yashnobod tumani IIO FMB boshlig`i podpolkovnik O.A.Kaymxodjayev"
    },
    {
        "№": 303,
        "FISh": "Raximov Orazbek Muxan oʻgʻli",
        "Tugilgan yili": "11/19/01",
        "Tuman": "Yashnobod",
        "MFY": "Tovkentepa",
        "Toifasi": "oilaviy ajrim yoqasidagi yosh oila ",
        "Biriktirilgan rahbarlar ": "Yashnobod tumani IIO FMB boshlig`i podpolkovnik O.A.Kaymxodjayev"
    },
    {
        "№": 304,
        "FISh": "Lepetyux Pavel Dmitriyevich",
        "Tugilgan yili": "7/18/08",
        "Tuman": "Yashnobod",
        "MFY": "Toʻy tepa",
        "Toifasi": "Agressiv xulq-atvor",
        "Biriktirilgan rahbarlar ": "Yashnobod tumani IIO FMB boshlig`i podpolkovnik O.A.Kaymxodjayev"
    },
    {
        "№": 305,
        "FISh": "Olivas Amaliya Ubaldo",
        "Tugilgan yili": "12/3/07",
        "Tuman": "Yashnobod",
        "MFY": "Toʻy tepa",
        "Toifasi": "Notinch oila farzandi ",
        "Biriktirilgan rahbarlar ": "Yashnobod tumani IIO FMB boshlig`i podpolkovnik O.A.Kaymxodjayev"
    },
    {
        "№": 306,
        "FISh": "Adizov Azizbek Abdumalik oʻgʻli",
        "Tugilgan yili": "4/2/07",
        "Tuman": "Yashnobod",
        "MFY": "Tuzel",
        "Toifasi": "Muntazam dars qoldiruvchi",
        "Biriktirilgan rahbarlar ": "Yashnobod tumani IIO FMB boshlig`i 1-o`rinbosari podpolkovnik Q.N.Ismatov"
    },
    {
        "№": 307,
        "FISh": "Avazmuratova Malika Furqat qizi",
        "Tugilgan yili": "7/10/00",
        "Tuman": "Yashnobod",
        "MFY": "Tuzel",
        "Toifasi": "Notinch oila farzandi ",
        "Biriktirilgan rahbarlar ": "Yashnobod tumani IIO FMB boshlig`i 1-o`rinbosari podpolkovnik Q.N.Ismatov"
    },
    {
        "№": 308,
        "FISh": "Avazmuratova Muxlisa Furqat qizi",
        "Tugilgan yili": "11/9/05",
        "Tuman": "Yashnobod",
        "MFY": "Tuzel",
        "Toifasi": "Notinch oila farzandi ",
        "Biriktirilgan rahbarlar ": "Yashnobod tumani IIO FMB boshlig`i 1-o`rinbosari podpolkovnik Q.N.Ismatov"
    },
    {
        "№": 309,
        "FISh": "Djurayev Ibroxim Baxtiyor oʻgʻli",
        "Tugilgan yili": "7/11/05",
        "Tuman": "Yashnobod",
        "MFY": "Tuzel",
        "Toifasi": "Notinch oila farzandi ",
        "Biriktirilgan rahbarlar ": "Yashnobod tumani IIO FMB boshlig`i 1-o`rinbosari podpolkovnik Q.N.Ismatov"
    },
    {
        "№": 310,
        "FISh": "Eshmurzayev Sherzod Qodir oʻgʻli",
        "Tugilgan yili": "11/4/06",
        "Tuman": "Yashnobod",
        "MFY": "Tuzel",
        "Toifasi": "Muntazam dars qoldiruvchi",
        "Biriktirilgan rahbarlar ": "Yashnobod tumani IIO FMB boshlig`i o`rinbosari podpolkovnik A.A.Nurmatov"
    },
    {
        "№": 311,
        "FISh": "Kudratov Ziyodilla Fatxulla oʻgʻli",
        "Tugilgan yili": "12/10/97",
        "Tuman": "Yashnobod",
        "MFY": "Tuzel",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Yashnobod tumani IIO FMB boshlig`i o`rinbosari podpolkovnik A.A.Nurmatov"
    },
    {
        "№": 312,
        "FISh": "Mansurov Zubayr Ma'rufjon oʻgʻli",
        "Tugilgan yili": "1/31/07",
        "Tuman": "Yashnobod",
        "MFY": "Tuzel",
        "Toifasi": "Agressiv xulq-atvor",
        "Biriktirilgan rahbarlar ": "Yashnobod tumani IIO FMB boshlig`i o`rinbosari podpolkovnik A.A.Nurmatov"
    },
    {
        "№": 313,
        "FISh": "Musaqulova Aziza Kudrat qizi",
        "Tugilgan yili": "10/24/02",
        "Tuman": "Yashnobod",
        "MFY": "Tuzel",
        "Toifasi": "Muntazam dars qoldiruvchi",
        "Biriktirilgan rahbarlar ": "Yashnobod tumani IIO FMB boshlig`i o`rinbosari podpolkovnik A.A.Nurmatov"
    },
    {
        "№": 314,
        "FISh": "Ne'matov Azizbek Zafar oʻgʻli",
        "Tugilgan yili": "5/21/07",
        "Tuman": "Yashnobod",
        "MFY": "Tuzel",
        "Toifasi": "Muntazam dars qoldiruvchi",
        "Biriktirilgan rahbarlar ": "Yashnobod tumani IIO FMB boshlig`I TB o`rinbosari"
    },
    {
        "№": 315,
        "FISh": "Olimjonov Oybek Moʻminjon oʻgʻli",
        "Tugilgan yili": "7/30/09",
        "Tuman": "Yashnobod",
        "MFY": "Tuzel",
        "Toifasi": "Muntazam dars qoldiruvchi",
        "Biriktirilgan rahbarlar ": "Yashnobod tumani IIO FMB boshlig`I TB o`rinbosari"
    },
    {
        "№": 316,
        "FISh": "Sharafutdinov Ilyas Rafikovich",
        "Tugilgan yili": "6/6/99",
        "Tuman": "Yashnobod",
        "MFY": "Tuzel",
        "Toifasi": "Profilaktik hisobda turgan yoshlar",
        "Biriktirilgan rahbarlar ": "Yashnobod tumani IIO FMB boshlig`I TB o`rinbosari"
    },
    {
        "№": 317,
        "FISh": "Shermatova Farida Ergashevna",
        "Tugilgan yili": "1/1/97",
        "Tuman": "Yashnobod",
        "MFY": "Tuzel",
        "Toifasi": "Notinch oila farzandi ",
        "Biriktirilgan rahbarlar ": "Yashnobod tumani IIO FMB boshlig`i o`rinbosari mayor M.I.Xaydarov"
    },
    {
        "№": 318,
        "FISh": "Xegay Valentin Eduardovich",
        "Tugilgan yili": "9/19/97",
        "Tuman": "Yashnobod",
        "MFY": "Tuzel",
        "Toifasi": "Profilaktik hisobda turgan yoshlar",
        "Biriktirilgan rahbarlar ": "Yashnobod tumani IIO FMB boshlig`i o`rinbosari mayor M.I.Xaydarov"
    },
    {
        "№": 319,
        "FISh": "Yaxshibayev Rovshan Nurmamat oʻgʻli",
        "Tugilgan yili": "6/23/97",
        "Tuman": "Yashnobod",
        "MFY": "Tuzel",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Yashnobod tumani IIO FMB boshlig`i o`rinbosari mayor M.I.Xaydarov"
    },
    {
        "№": 320,
        "FISh": "Yunusova Linoza Nizomiddin qizi",
        "Tugilgan yili": "9/23/02",
        "Tuman": "Yashnobod",
        "MFY": "Tuzel",
        "Toifasi": "Notinch oila farzandi ",
        "Biriktirilgan rahbarlar ": "Yashnobod tumani IIO FMB boshlig`i o`rinbosari podpolkovnik I.A.Zaxidov"
    },
    {
        "№": 321,
        "FISh": "Abduvaxabov Komoliddin Shoxobiddin oʻgʻli",
        "Tugilgan yili": "8/14/02",
        "Tuman": "Yashnobod",
        "MFY": "Xosiyatli",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Yashnobod tumani IIO FMB boshlig`i o`rinbosari podpolkovnik I.A.Zaxidov"
    },
    {
        "№": 322,
        "FISh": "Bessonova Anastasiya Dmitriyevna",
        "Tugilgan yili": "11/15/06",
        "Tuman": "Yashnobod",
        "MFY": "Xosiyatli",
        "Toifasi": "Muntazam dars qoldiruvchi",
        "Biriktirilgan rahbarlar ": "Yashnobod tumani IIO FMB boshlig`i o`rinbosari podpolkovnik I.A.Zaxidov"
    },
    {
        "№": 323,
        "FISh": "Boromenskiy Artyom Igorevich",
        "Tugilgan yili": "1/5/95",
        "Tuman": "Yashnobod",
        "MFY": "Xosiyatli",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Yashnobod tumani QB boshlig`i mayor J.M.Abdurasulov"
    },
    {
        "№": 324,
        "FISh": "Gafarov Ozodbek Akromovich",
        "Tugilgan yili": "3/12/00",
        "Tuman": "Yashnobod",
        "MFY": "Xosiyatli",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Yashnobod tumani QB boshlig`i mayor J.M.Abdurasulov"
    },
    {
        "№": 325,
        "FISh": "Kulaxmedova Dinara Raimovna",
        "Tugilgan yili": "8/15/97",
        "Tuman": "Yashnobod",
        "MFY": "Xosiyatli",
        "Toifasi": "Profilaktik hisobda turgan yoshlar",
        "Biriktirilgan rahbarlar ": "Yashnobod tumani QB boshlig`i mayor J.M.Abdurasulov"
    },
    {
        "№": 326,
        "FISh": "Abidov Boburbek Shavkatovich",
        "Tugilgan yili": "01.11.1996 \n",
        "Tuman": "Yunusobod ",
        "MFY": "Tiklanish",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Yunusobod tumani IIO FMB boshlig`i v.v.b podpolkovnik M.M.Saydazimov"
    },
    {
        "№": 327,
        "FISh": "Shokirov Bekzod Shavkatovich",
        "Tugilgan yili": "14.02.2002 \n",
        "Tuman": "Yunusobod ",
        "MFY": "Tiklanish",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Yunusobod tumani IIO FMB boshlig`i v.v.b podpolkovnik M.M.Saydazimov"
    },
    {
        "№": 328,
        "FISh": "Muhsinova Muhayyoxon Muhammadamin Qizi",
        "Tugilgan yili": "5/13/06",
        "Tuman": "Yunusobod ",
        "MFY": "Tiklanish",
        "Toifasi": "Muntazam dars qoldiruvchi",
        "Biriktirilgan rahbarlar ": "Yunusobod tumani IIO FMB boshlig`i 1-o`rinbosari podpolkovnik A.Z.Jagbarov"
    },
    {
        "№": 329,
        "FISh": "Maxmudova Maftuna Komil qizi",
        "Tugilgan yili": "12/26/07",
        "Tuman": "Yunusobod ",
        "MFY": "Uch qahramon",
        "Toifasi": "Muntazam dars qoldiruvchi",
        "Biriktirilgan rahbarlar ": "Yunusobod tumani IIO FMB boshlig`i 1-o`rinbosari podpolkovnik A.Z.Jagbarov"
    },
    {
        "№": 330,
        "FISh": "Alijonov Bekzod Alijon o'g'li",
        "Tugilgan yili": "03.02.1996 \n",
        "Tuman": "Yunusobod ",
        "MFY": "Uch Kaxramon",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Yunusobod tumani IIO FMB boshlig`i o`rinbosari podpolkovnik G`.D.Tashbekov"
    },
    {
        "№": 331,
        "FISh": "Mo‘Minxo‘Jayev Abdullox Mavlon o'g'li",
        "Tugilgan yili": "12.06.2003 \n",
        "Tuman": "Yunusobod ",
        "MFY": "Xasanboy",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Yunusobod tumani IIO FMB boshlig`i o`rinbosari podpolkovnik G`.D.Tashbekov"
    },
    {
        "№": 332,
        "FISh": "Abdullayev Ibroxim Sherzodovich",
        "Tugilgan yili": "3/18/08",
        "Tuman": "Yunusobod ",
        "MFY": "Xiyobontepa",
        "Toifasi": "Muntazam dars qoldiruvchi",
        "Biriktirilgan rahbarlar ": "Yunusobod tumani IIO FMB boshlig`i o`rinbosari podpolkovnik N.N.Ikramov"
    },
    {
        "№": 333,
        "FISh": "Mamadjanov Javoxir Kamiljan o'g'li",
        "Tugilgan yili": "22.01.2005 \n",
        "Tuman": "Yunusobod ",
        "MFY": "Xusniobod",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Yunusobod tumani IIO FMB boshlig`i o`rinbosari podpolkovnik N.N.Ikramov"
    },
    {
        "№": 334,
        "FISh": "Safarova Robiya Omonilla Qizi",
        "Tugilgan yili": "03.04.1997 \n",
        "Tuman": "Yunusobod ",
        "MFY": "Xusniobod",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Yunusobod tumani IIO FMB boshlig`i o`rinbosari podpolkovnik O.M.Atabayev"
    },
    {
        "№": 335,
        "FISh": "Vanina Lola Ikromovna",
        "Tugilgan yili": "2/22/07",
        "Tuman": "Yunusobod ",
        "MFY": "Xusniobod",
        "Toifasi": "Muntazam dars qoldiruvchi",
        "Biriktirilgan rahbarlar ": "Yunusobod tumani IIO FMB boshlig`i o`rinbosari podpolkovnik O.M.Atabayev"
    },
    {
        "№": 336,
        "FISh": "Azimov Umirzoq Abdimo‘min",
        "Tugilgan yili": "28.10.1997 \n",
        "Tuman": "Yunusobod ",
        "MFY": "Yangibog",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Yunusobod tumani IIO FMB boshlig`i o`rinbosari podpolkovnik Sh.T.Kutumov"
    },
    {
        "№": 337,
        "FISh": "Ostanin Sergey Vladimirovich",
        "Tugilgan yili": "5/15/05",
        "Tuman": "Yunusobod ",
        "MFY": "Yangibog",
        "Toifasi": "Probatsiya hisobda turgan",
        "Biriktirilgan rahbarlar ": "Yunusobod tumani QB boshlig`i podpolkovnik S.A.Abduqodirov"
    }
]

function standardizeDate(dateStr) {
    let year;
    dateStr = dateStr.trim();

    if (dateStr.includes('.')) {
        year = dateStr.split('.').pop();
    } else if (dateStr.includes(',')) {
        year = dateStr.split(',').pop();
    } else if (dateStr.includes('/')) {
        year = dateStr.split('/').pop();
    } else if (dateStr.includes('-')) {
        year = dateStr.split('-').pop();
    } 

    if (year.length === 2 && parseInt(year) > 20) {
        year = `19${year}`;
    } else if (year.length === 2 && parseInt(year) <= 20) {
        year = `20${year}`;
    }

    return year;
}

// loader
setTimeout(function () {
  $(".loader_bg").fadeToggle();
}, 2500);
var loader = document.querySelector(".loader");

window.addEventListener("load", vanish);
function vanish() {
  loader.classList.add("dissapear");
}
// loader-end
var arrLang = {
    'en':{
      'atrium': 'atrium',
      'studia': 'studia',
      'project': 'Project',
      'about': 'About',
      'contact':'Contact',
      'architecture':'Architecture',
      'design':'Interer Design',
      'product':'Product',
      'footer':'We Discover comfort and beauty',
      'contact': 'Contact Us',
      'fname':'FirstName',
      'sname':'LastName',
      'phone':'Phone',
      'send':'SEND',
      "our":"Atrium studia",
      "archtext1":"This contemporary family home was designed to create direct views from the master bedroom and roof terrace onto the beautiful garden and pool. The client's brief was for a family home for a young couple with a young child. On the first floor, privacy wasn’t so important, because of the garden view so we can use glass door and windows more openly. On the second floor, to control incoming views from neighbors looking into the master bedroom, we used matte glass windows. We designed exterior with matte colors like different shades of grey and beige to look warmer and more fashionable.",
      "archtext2":"This villa is for movie lover and designed in Spanish style. It is located in mountains with the view of reservoir and mountains. It is in slope of the mountain so it is designed like big stairs. For example, the entrance is from second floor and from the first floor you can step on the beautiful garden and pool with barbeque area. And at the next down step is open space movie theatre with round couch fireplace. Every material is eco-friendly such as wood, brick and stone.",
      "archtext3":"The project located area is characterized by high villas with varied materials, irregularity, and multiple types of architecture, including other villas. The project's diagram is a critique of the organization of the plan among domino structures, which has influenced other types of architecture, such as other villas, and the urban structure as well. The project design process started with a diagram instead of a physical site due to the circumstances, and the initial idea of its formation was to get rid of spatial concepts. Hence, the spaces defined per the program were independent and wholly free. So, we used different heights, material and from small to large details. Traditional brick walls mixed with concrete and metal barriers helped to look modern and unique.",
      "archtext4":"Natural materials, combined with a robust and modern design, form the perfect combination in this villa, located in the mountain village. At first glance, the inner facade contains a large number of windows that create a pleasant connection between the outside and inside. This experience is enhanced the moment you enter the house. The view becomes an extension of the rooms and this gives a breathtaking effect, especially at sunset.  An oasis of peace and relaxation, combined with luxury and design",
      "archtext5":"This villa is for movie lover and designed in Spanish style. It is located in mountains with the view of reservoir and mountains. It is in slope of the mountain so it is designed like big stairs. For example, the entrance is from second floor and from the first floor you can step on the beautiful garden and pool with barbeque area. And at the next down step is open space movie theatre with round couch fireplace. Every material is eco-friendly such as wood, brick and stone. ",
      "mainTitle1":"Architecture",
      "mainTitle2":"Interior",
      "mainTitle3":"Product",
      "view":"View",
      
    },
    'ru':{
      'atrium':'atrium',
      'studia': 'студия',
      'project': 'Проект',
      'about': 'Про нас',
      'contact':'Контакты',
      'architecture':'Архитектура',
      'design':'Интерьер Дизайн',
      'product':'Продукты',
      'footer':'Мы открываем для себя комфорт и красоту',
      'contact': 'Cвязаться с нами',
      'fname':'Имя',
      'sname':'Фаимлия',
      'phone':'Телефон',
      'send':'ОТПРАВИТЬ',
      "our":"Атриум студия",
      "archtext1":"Этот современный семейный дом был спроектирован таким образом, чтобы из главной спальни и террасы на крыше открывался прямой вид на прекрасный сад и бассейн. Запрос клиента касался семейного дома для молодой пары с маленьким ребенком. На втором этаже уединение было не так важно из-за вида на сад, поэтому мы могли использовать стеклянные двери и окна более открыто. На втором этаже, чтобы контролировать входящие взгляды соседей, заглядывающих в главную спальню, мы использовали окна из матового стекла. Мы спроектировали экстерьер в матовых тонах, таких как различные оттенки серого и бежевого, чтобы он выглядел теплее и моднее.",
      "archtext2":"Эта вилла предназначена для любителей кино и оформлена в испанском стиле. Он расположен в горах с видом на водохранилище и горы. Он находится на склоне горы, поэтому спроектирован в виде большой лестницы. Например, вход находится со второго этажа, а с первого этажа вы можете попасть в прекрасный сад и бассейн с площадкой для барбекю. А на следующей ступеньке находится кинотеатр open space с круглым диваном-камином. Все материалы, такие как дерево, кирпич и камень, являются экологически чистыми.",
      "archtext3":"Район, расположенный в проекте, характеризуется высокими виллами с разнообразными материалами, неправильной планировкой и множеством типов архитектуры, включая другие виллы. Схема проекта представляет собой критический анализ организации плана среди структур domino, которая повлияла на другие типы архитектуры, такие как другие виллы, а также на городскую структуру. В силу сложившихся обстоятельств процесс разработки проекта начался со схемы вместо физического объекта, и первоначальная идея его формирования состояла в том, чтобы избавиться от пространственных концепций. Следовательно, пространства, определенные в программе, были независимыми и полностью свободными. Итак, мы использовали разную высоту, материал и от мелких до крупных деталей. Традиционные кирпичные стены в сочетании с бетонными и металлическими ограждениями помогали выглядеть современно и уникально.",
      "archtext4":"Натуральные материалы в сочетании с прочным и современным дизайном образуют идеальное сочетание в этой вилле, расположенной в горной деревне. На первый взгляд, внутренний фасад содержит большое количество окон, которые создают приятную связь между внешним и внутренним пространством. Это впечатление усиливается в тот момент, когда вы входите в дом. Вид становится продолжением комнат, и это создает захватывающий дух эффект, особенно на закате.  Оазис покоя и релаксации в сочетании с роскошью и дизайном",
      "archtext5":"Эта вилла предназначена для любителей кино и оформлена в испанском стиле. Он расположен в горах с видом на водохранилище и горы. Он находится на склоне горы, поэтому спроектирован в виде большой лестницы. Например, вход находится со второго этажа, а с первого этажа вы можете попасть в прекрасный сад и бассейн с площадкой для барбекю. А на следующей ступеньке находится кинотеатр open space с круглым диваном-камином. Все материалы, такие как дерево, кирпич и камень, являются экологически чистыми.",
      "mainTitle1":"Архитектура",
      "mainTitle2":"Интерьер",
      "mainTitle3":"Продукт",
      "view":"Смотреть",
    },      
    'uz':{
      'atrium': 'atrium',
      'studia': 'studia',
      'project': 'Loyiha',
      'about': 'Biz haqimizda',
      'contact':'Kontaktlar',
      'architecture':'Arxitektura',
      'design':'Interyer Dizayn',
      'product':'Produktlar',
      'footer':"Biz qulaylik va go'zallikni kashf etamiz",
      'contact': 'Aloqa',
      'fname':'Ism',
      'sname':'Familiya',
      'phone':'Telefon',
      'send':'YUBORISH',
      "our":"Atrium studia",
      "archtext1":"Ushbu zamonaviy oilaviy uy asosiy yotoqxona va tomning terasidan go'zal bog ' va hovuzga to'g'ridan-to'g'ri ko'rinishni yaratish uchun mo'ljallangan. Mijozning qisqacha mazmuni yosh bolali yosh er-xotin uchun oilaviy uy uchun edi. Birinchi qavatda maxfiylik unchalik muhim emas edi, chunki bog ' ko'rinishi tufayli biz shisha eshik va derazalardan ochiqroq foydalanishimiz mumkin. Ikkinchi qavatda, asosiy yotoqxonaga qaragan qo'shnilarning kiruvchi ko'rinishini boshqarish uchun biz mat oynali oynalardan foydalandik. Biz issiqroq va zamonaviyroq ko'rinish uchun kulrang va bej ranglarning turli xil soyalari kabi mot ranglar bilan tashqi ko'rinishni yaratdik.",
      "archtext2":"Ushbu villa kino ixlosmandlari uchun mo'ljallangan va ispan uslubida yaratilgan. U suv ombori va tog'lar ko'rinishidagi tog'larda joylashgan. U tog ' yonbag'rida, shuning uchun u katta zinapoyalar kabi yaratilgan. Masalan, kirish ikkinchi qavatdan va birinchi qavatdan barbekyu maydoni bo'lgan go'zal bog ' va hovuzga qadam qo'yishingiz mumkin. Va keyingi pastga qadamda davra bizdagi kamin bilan ochiq kosmik kino teatr hisoblanadi. Har bir material yog'och, g'isht va tosh kabi ekologik toza.",
      "archtext3":"Loyiha joylashgan hududda turli xil materiallar, tartibsizliklar va boshqa villalar, shu jumladan boshqa villalar bilan ajralib turadi. Loyihaning diagrammasi domino tuzilmalari orasida rejani tashkil etishni tanqid qiladi, bu boshqa arxitektura turlariga, masalan, boshqa villalarga va shahar tuzilishiga ham ta'sir ko'rsatdi. Loyihani loyihalash jarayoni sharoitlar tufayli jismoniy sayt o'rniga diagramma bilan boshlandi va uning shakllanishining dastlabki g'oyasi fazoviy tushunchalardan xalos bo'lish edi. Demak, dastur bo'yicha belgilangan bo'shliqlar mustaqil va to'liq bepul edi. Shunday qilib, biz turli balandliklar, materiallar va kichikdan katta detallargacha foydalandik. Beton va metall to'siqlar bilan aralashtirilgan an'anaviy g'isht devorlari zamonaviy va o'ziga xos ko'rinishga yordam berdi.",
      "archtext4":"Tabiiy materiallar mustahkam va zamonaviy dizayni bilan birgalikda tog ' qishlog'ida joylashgan ushbu villada mukammal kombinatsiyani hosil qiladi. Bir qarashda, ichki jabhada tashqi va ichki o'rtasida yoqimli aloqa yaratadigan ko'plab derazalar mavjud. Bu tajriba uyga kirganingizda kuchayadi. Ko'rinish xonalarning kengaytmasiga aylanadi va bu, ayniqsa, quyosh botganda hayratlanarli effekt beradi.  Tinchlik va dam olish vohasi, hashamat va dizayn bilan birlashtirilgan",
      "archtext5":"Ushbu villa kino ixlosmandlari uchun mo'ljallangan va ispan uslubida yaratilgan. U suv ombori va tog'lar ko'rinishidagi tog'larda joylashgan. U tog ' yonbag'rida, shuning uchun u katta zinapoyalar kabi yaratilgan. Masalan, kirish ikkinchi qavatdan va birinchi qavatdan barbekyu maydoni bo'lgan go'zal bog ' va hovuzga qadam qo'yishingiz mumkin. Va keyingi pastga qadamda davra bizdagi kamin bilan ochiq kosmik kino teatr hisoblanadi. Har bir material yog'och, g'isht va tosh kabi ekologik toza.",
      "mainTitle1":"Arxitektura",
      "mainTitle2":"Ichki",
      "mainTitle3":"Mahsulot",
      "view":"Ko'rish",
    }      
  }


  const myfirstLang =localStorage.getItem("lang")
  console.log("myfirstLang" ,myfirstLang);
  //language-active
const elLangBox =document.querySelector(".language-container")
const elUz =document.getElementById("uz")
const elRu =document.getElementById("ru")
const elEng =document.getElementById("en")

if(myfirstLang =="uz"){
    elUz.classList.add("active");
  }else if(myfirstLang =="ru"){
  elRu.classList.add("active");
  }else if(myfirstLang =="en"){
    elEng.classList.add("active");
  }else{
    elEng.classList.add("active");
    elUz.classList.remove("active");
    elRu.classList.remove("active");

  }

elLangBox.addEventListener("click" ,(evt)=>{
  evt.preventDefault()
if(evt.target.matches("#uz" )){
  elUz.classList.add("active");
}else{
  elUz.classList.remove("active")
}
if(evt.target.matches("#ru")){
elRu.classList.add("active");
}else{
elRu.classList.remove("active")
}

if(evt.target.matches("#en")){
  elEng.classList.add("active");
}else{
  elEng.classList.remove("active")
}

})



//language-active-end
  if(myfirstLang){
      $('.lang').each(function(index, item) {
          $(this).text(arrLang[myfirstLang][$(this).attr('key')]);
        });
    }else{
        $('.lang').each(function(index, item) {
          $(this).text(arrLang["en"][$(this).attr('key')]);
        });
    }

    $(function() {
        $('.translate').click(function() {
          var lang = $(this).attr('id');
          localStorage.setItem("lang" ,lang||"en" )
          const myLang =localStorage.getItem("lang")
          $('.lang').each(function(index, item) {
            $(this).text(arrLang[myLang][$(this).attr('key')]);
          });
        });
      }); 
  
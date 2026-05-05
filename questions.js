const QUESTION_BANK = {

easy: [
{
q:{lv:"Cik kāju ir vardei?",en:"How many legs does a frog have?",ru:"Сколько ног у лягушки?"},
type:"single",
a:{
lv:["2","4","6","8"],
en:["2","4","6","8"],
ru:["2","4","6","8"]
},
c:[1],p:10
},
{
q:{lv:"Vai vardes var peldēt?",en:"Can frogs swim?",ru:"Могут ли лягушки плавать?"},
type:"yn",
a:{lv:["Jā","Nē"],en:["Yes","No"],ru:["Да","Нет"]},
c:[0],p:10
},
{
q:{lv:"Ko ēd vardes?",en:"What do frogs eat?",ru:"Что едят лягушки?"},
type:"single",
a:{
lv:["Kukaiņus","Zāli","Akmeņus","Sniegu"],
en:["Insects","Grass","Rocks","Snow"],
ru:["Насекомых","Траву","Камни","Снег"]
},
c:[0],p:10
},
{
q:{lv:"Vai vardēm ir mitra āda?",en:"Do frogs have moist skin?",ru:"У лягушек влажная кожа?"},
type:"yn",
a:{lv:["Jā","Nē"],en:["Yes","No"],ru:["Да","Нет"]},
c:[0],p:10
},
{
q:{lv:"Kur dzīvo vardes?",en:"Where do frogs live?",ru:"Где живут лягушки?"},
type:"single",
a:{
lv:["Mitrās vietās","Tuksnesī","Kosmosā","Ledājos"],
en:["Wet places","Desert","Space","Glaciers"],
ru:["Во влажных местах","В пустыне","В космосе","На ледниках"]
},
c:[0],p:10
},
{
q:{lv:"Vai vardes dzīvo Latvijā?",en:"Do frogs live in Latvia?",ru:"Живут ли лягушки в Латвии?"},
type:"yn",
a:{lv:["Jā","Nē"],en:["Yes","No"],ru:["Да","Нет"]},
c:[0],p:10
},
{
q:{lv:"Kas ir varde?",en:"What is a frog?",ru:"Кто такая лягушка?"},
type:"single",
a:{
lv:["Abinieks","Putns","Zivs","Kukaiņš"],
en:["Amphibian","Bird","Fish","Insect"],
ru:["Земноводное","Птица","Рыба","Насекомое"]
},
c:[0],p:10
},
{
q:{lv:"Kā vardes pārvietojas?",en:"How do frogs move?",ru:"Как передвигаются лягушки?"},
type:"single",
a:{
lv:["Lecot","Lidojot","Rāpojot","Ritinoties"],
en:["Jumping","Flying","Crawling","Rolling"],
ru:["Прыгают","Летают","Ползают","Катаются"]
},
c:[0],p:10
},
{
q:{lv:"Vai vardēm ir plaušas?",en:"Do frogs have lungs?",ru:"Есть ли у лягушек лёгкие?"},
type:"yn",
a:{lv:["Jā","Nē"],en:["Yes","No"],ru:["Да","Нет"]},
c:[0],p:10
},
{
q:{lv:"Vai vardes ir plēsēji?",en:"Are frogs predators?",ru:"Являются ли лягушки хищниками?"},
type:"yn",
a:{lv:["Jā","Nē"],en:["Yes","No"],ru:["Да","Нет"]},
c:[0],p:10
},
{
q:{lv:"Kas palīdz vardēm slēpties?",en:"What helps frogs hide?",ru:"Что помогает лягушкам прятаться?"},
type:"single",
a:{
lv:["Krāsa","Spārni","Zobi","Spalvas"],
en:["Color","Wings","Teeth","Feathers"],
ru:["Цвет","Крылья","Зубы","Перья"]
},
c:[0],p:10
},
{
q:{lv:"Vai vardes var dzīvot bez ūdens?",en:"Can frogs live without water?",ru:"Могут ли лягушки жить без воды?"},
type:"yn",
a:{lv:["Nē","Jā"],en:["No","Yes"],ru:["Нет","Да"]},
c:[0],p:10
}
],

medium: [
{
q:{lv:"Kas ir kurkulis?",en:"What is a tadpole?",ru:"Что такое головастик?"},
type:"single",
a:{
lv:["Attīstības stadija","Putns","Zivs","Koks"],
en:["Development stage","Bird","Fish","Tree"],
ru:["Стадия развития","Птица","Рыба","Дерево"]
},
c:[0],p:20
},
{
q:{lv:"Kas raksturo vardes?",en:"What describes frogs?",ru:"Что характеризует лягушек?"},
type:"multi",
a:{
lv:["Mitra āda","Dzīvo ūdenī","Spalvas","Elpo caur ādu","Sausa āda","Lido"],
en:["Moist skin","Live in water","Feathers","Breathe through skin","Dry skin","Fly"],
ru:["Влажная кожа","Живут в воде","Перья","Дышат через кожу","Сухая кожа","Летают"]
},
c:[0,1,3],p:20
},
{
q:{lv:"Kas ir abinieki?",en:"What are amphibians?",ru:"Что такое земноводные?"},
type:"single",
a:{
lv:["Dzīvo ūdenī un uz sauszemes","Tikai gaisā","Tikai kokā","Tikai smiltīs"],
en:["Live in water and land","Only air","Only trees","Only sand"],
ru:["Живут в воде и на суше","Только в воздухе","Только на деревьях","Только в песке"]
},
c:[0],p:20
},
{
q:{lv:"Vai kurkuļi dzīvo ūdenī?",en:"Do tadpoles live in water?",ru:"Живут ли головастики в воде?"},
type:"yn",
a:{lv:["Jā","Nē"],en:["Yes","No"],ru:["Да","Нет"]},
c:[0],p:20
},
{
q:{lv:"Vai vardes mainās dzīves laikā?",en:"Do frogs change during life?",ru:"Меняются ли лягушки в течение жизни?"},
type:"yn",
a:{lv:["Jā","Nē"],en:["Yes","No"],ru:["Да","Нет"]},
c:[0],p:20
},
{
q:{lv:"Kas ir metamorfoze?",en:"What is metamorphosis?",ru:"Что такое метаморфоз?"},
type:"single",
a:{
lv:["Pārvērtība","Skriešana","Lidošana","Guļošana"],
en:["Transformation","Running","Flying","Sleeping"],
ru:["Превращение","Бег","Полёт","Сон"]
},
c:[0],p:20
},
{
q:{lv:"Kas nepieciešams vardēm?",en:"What do frogs need?",ru:"Что нужно лягушкам?"},
type:"multi",
a:{
lv:["Ūdens","Mitrums","Sausums","Barība","Uguns","Sniegs"],
en:["Water","Moisture","Dryness","Food","Fire","Snow"],
ru:["Вода","Влажность","Сухость","Еда","Огонь","Снег"]
},
c:[0,1,3],p:20
},
{
q:{lv:"Vai vardes elpo caur ādu?",en:"Do frogs breathe through skin?",ru:"Дышат ли лягушки кожей?"},
type:"yn",
a:{lv:["Jā","Nē"],en:["Yes","No"],ru:["Да","Нет"]},
c:[0],p:20
},
{
q:{lv:"Vai vardes ir svarīgas dabā?",en:"Are frogs important in nature?",ru:"Важны ли лягушки в природе?"},
type:"yn",
a:{lv:["Jā","Nē"],en:["Yes","No"],ru:["Да","Нет"]},
c:[0],p:20
},
{
q:{lv:"Kas notiek metamorfozē?",en:"What happens in metamorphosis?",ru:"Что происходит в метаморфозе?"},
type:"single",
a:{
lv:["Kurkulis kļūst par vardi","Lidošana","Aizaugšana","Sasalšana"],
en:["Tadpole becomes frog","Flying","Overgrowth","Freezing"],
ru:["Головастик становится лягушкой","Полёт","Зарастание","Замерзание"]
},
c:[0],p:20
},
{
q:{lv:"Vai vardes dzīvo tikai ūdenī?",en:"Do frogs live only in water?",ru:"Живут ли лягушки только в воде?"},
type:"yn",
a:{lv:["Nē","Jā"],en:["No","Yes"],ru:["Нет","Да"]},
c:[0],p:20
},
{
q:{lv:"Kas palīdz vardēm izdzīvot?",en:"What helps frogs survive?",ru:"Что помогает лягушкам выжить?"},
type:"single",
a:{
lv:["Vide","Troksnis","Krāsa","Sniegs"],
en:["Environment","Noise","Color","Snow"],
ru:["Среда","Шум","Цвет","Снег"]
},
c:[0],p:20
}
],

hard: [
{
q:{lv:"Kas apdraud vardes?",en:"What threatens frogs?",ru:"Что угрожает лягушкам?"},
type:"single",
a:{
lv:["Piesārņojums","Ziedi","Putni","Mākoņi"],
en:["Pollution","Flowers","Birds","Clouds"],
ru:["Загрязнение","Цветы","Птицы","Облака"]
},
c:[0],p:30
},
{
q:{lv:"Vai klimats ietekmē vardes?",en:"Does climate affect frogs?",ru:"Влияет ли климат на лягушек?"},
type:"yn",
a:{lv:["Jā","Nē"],en:["Yes","No"],ru:["Да","Нет"]},
c:[0],p:30
},
{
q:{lv:"Kas raksturo abiniekus?",en:"What describes amphibians?",ru:"Что характеризует земноводных?"},
type:"multi",
a:{
lv:["Dzīvo ūdenī","Mitra āda","Spalvas","Elpo caur ādu","Lido","Sausa āda"],
en:["Live in water","Moist skin","Feathers","Breathe through skin","Fly","Dry skin"],
ru:["Живут в воде","Влажная кожа","Перья","Дышат через кожу","Летают","Сухая кожа"]
},
c:[0,1,3],p:30
},
{
q:{lv:"Kas notiek, ja pazūd vardes?",en:"What happens if frogs disappear?",ru:"Что будет, если лягушки исчезнут?"},
type:"single",
a:{
lv:["Palielinās kukaiņi","Nekas","Sniegs pazūd","Koki lido"],
en:["Insects increase","Nothing","Snow disappears","Trees fly"],
ru:["Насекомых станет больше","Ничего","Снег исчезнет","Деревья летают"]
},
c:[0],p:30
},
{
q:{lv:"Vai vardes var dzīvot ekstremāli?",en:"Can frogs survive extreme conditions?",ru:"Могут ли лягушки выживать в экстремальных условиях?"},
type:"yn",
a:{lv:["Nē","Jā"],en:["No","Yes"],ru:["Нет","Да"]},
c:[0],p:30
},
{
q:{lv:"Kas ietekmē izdzīvošanu?",en:"What affects survival?",ru:"Что влияет на выживание?"},
type:"multi",
a:{
lv:["Vide","Barība","Krāsa","Ūdens","Troksnis","Sausums"],
en:["Environment","Food","Color","Water","Noise","Dryness"],
ru:["Среда","Еда","Цвет","Вода","Шум","Сухость"]
},
c:[0,1,3],p:30
},
{
q:{lv:"Kas ir ekosistēma?",en:"What is an ecosystem?",ru:"Что такое экосистема?"},
type:"single",
a:{
lv:["Dzīvās un nedzīvās vides mijiedarbība","Tikai ūdens","Tikai koki","Tikai gaiss"],
en:["Interaction of living and non-living things","Only water","Only trees","Only air"],
ru:["Взаимодействие живой и неживой среды","Только вода","Только деревья","Только воздух"]
},
c:[0],p:30
},
{
q:{lv:"Vai vardes ir ekosistēmas daļa?",en:"Are frogs part of ecosystems?",ru:"Являются ли лягушки частью экосистем?"},
type:"yn",
a:{lv:["Jā","Nē"],en:["Yes","No"],ru:["Да","Нет"]},
c:[0],p:30
},
{
q:{lv:"Kas palīdz aizsardzībā?",en:"What helps protection?",ru:"Что помогает защите?"},
type:"single",
a:{
lv:["Maskēšanās","Lidošana","Skriešana","Kāpšana"],
en:["Camouflage","Flying","Running","Climbing"],
ru:["Маскировка","Полёт","Бег","Лазание"]
},
c:[0],p:30
},
{
q:{lv:"Vai visas vardes ir vienādas?",en:"Are all frogs the same?",ru:"Все ли лягушки одинаковые?"},
type:"yn",
a:{lv:["Nē","Jā"],en:["No","Yes"],ru:["Нет","Да"]},
c:[0],p:30
},
{
q:{lv:"Kas ir populācija?",en:"What is a population?",ru:"Что такое популяция?"},
type:"single",
a:{
lv:["Vienas sugas grupa","Dažādas sugas","Ūdens","Gaiss"],
en:["Group of same species","Different species","Water","Air"],
ru:["Группа одного вида","Разные виды","Вода","Воздух"]
},
c:[0],p:30
},
{
q:{lv:"Kas samazina populāciju?",en:"What reduces population?",ru:"Что уменьшает популяцию?"},
type:"multi",
a:{
lv:["Piesārņojums","Dzīvotņu zudums","Krāsa","Klimats","Mūzika","Sniegs"],
en:["Pollution","Habitat loss","Color","Climate","Music","Snow"],
ru:["Загрязнение","Потеря среды","Цвет","Климат","Музыка","Снег"]
},
c:[0,1,3],p:30
}
],

expert: [
{
q:{lv:"Kas ietekmē populāciju visvairāk?",en:"What affects populations most?",ru:"Что больше всего влияет на популяции?"},
type:"multi",
a:{
lv:["Vide","Ūdens","Krāsa","Temperatūra","Mūzika","Skaņa"],
en:["Environment","Water","Color","Temperature","Music","Sound"],
ru:["Среда","Вода","Цвет","Температура","Музыка","Звук"]
},
c:[0,1,3],p:50
},
{
q:{lv:"Kas ir nepieciešams līdzsvaram?",en:"What is needed for balance?",ru:"Что нужно для баланса?"},
type:"multi",
a:{
lv:["Barības ķēde","Dzīvotne","Krāsa","Mijiedarbība","Skaņa","Forma"],
en:["Food chain","Habitat","Color","Interaction","Sound","Shape"],
ru:["Пищевая цепь","Среда","Цвет","Взаимодействие","Звук","Форма"]
},
c:[0,1,3],p:50
},
{
q:{lv:"Kas var iznīcināt dzīvotni?",en:"What can destroy habitats?",ru:"Что может разрушить среду обитания?"},
type:"multi",
a:{
lv:["Mežizstrāde","Piesārņojums","Krāsa","Būvniecība","Mūzika","Uguns"],
en:["Deforestation","Pollution","Color","Construction","Music","Fire"],
ru:["Вырубка лесов","Загрязнение","Цвет","Строительство","Музыка","Огонь"]
},
c:[0,1,3],p:50
},
{
q:{lv:"Kas nodrošina izdzīvošanu?",en:"What ensures survival?",ru:"Что обеспечивает выживание?"},
type:"multi",
a:{
lv:["Barība","Ūdens","Krāsa","Vide","Skaņa","Sausums"],
en:["Food","Water","Color","Environment","Sound","Dryness"],
ru:["Еда","Вода","Цвет","Среда","Звук","Сухость"]
},
c:[0,1,3],p:50
},
{
q:{
lv:"Kādas izmaiņas vidē visvairāk ietekmē vardes?",
en:"What environmental changes affect frogs the most?",
ru:"Какие изменения среды сильнее всего влияют на лягушек?"
},
type:"multi",
a:{
lv:["Temperatūras maiņa","Piesārņojums","Krāsa","Dzīvotņu zudums","Mūzika","Sniegs"],
en:["Temperature change","Pollution","Color","Habitat loss","Music","Snow"],
ru:["Изменение температуры","Загрязнение","Цвет","Потеря среды","Музыка","Снег"]
},
c:[0,1,3],p:50
},
{
q:{
lv:"Kas notiek, ja pazūd kukaiņi?",
en:"What happens if insects disappear?",
ru:"Что произойдет, если исчезнут насекомые?"
},
type:"single",
a:{
lv:["Vardes zaudē barību","Nekas","Ūdens pazūd","Koki lido"],
en:["Frogs lose food","Nothing","Water disappears","Trees fly"],
ru:["Лягушки теряют пищу","Ничего","Вода исчезает","Деревья летают"]
},
c:[0],p:50
},
{
q:{
lv:"Kura sistēma visvairāk atkarīga no vardēm?",
en:"Which system depends most on frogs?",
ru:"Какая система больше всего зависит от лягушек?"
},
type:"single",
a:{
lv:["Ekosistēma","Tehnoloģijas","Transporta sistēma","Pilsētas"],
en:["Ecosystem","Technology","Transport system","Cities"],
ru:["Экосистема","Технологии","Транспорт","Города"]
},
c:[0],p:50
},
{
q:{
lv:"Kas notiek, ja trūkst līdzsvara dabā?",
en:"What happens if nature loses balance?",
ru:"Что происходит при нарушении баланса природы?"
},
type:"multi",
a:{
lv:["Sugu samazināšanās","Pārtikas ķēdes traucējumi","Krāsu maiņa","Ekosistēmas sabrukums","Mūzikas izmaiņas","Ūdens cikla traucējumi"],
en:["Species decline","Food chain disruption","Color change","Ecosystem collapse","Music changes","Water cycle disruption"],
ru:["Снижение видов","Нарушение пищевой цепи","Изменение цвета","Коллапс экосистемы","Изменение музыки","Нарушение водного цикла"]
},
c:[0,1,3],p:50
}
]

};

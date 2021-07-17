function mockParams(params) {
	return params ? Object.assign(Object.assign({}, searchParamsMock), params)
		: Object.assign({}, searchParamsMock)
}

function mockData (){
	return Object.assign({}, responseMockData)
}

const searchParamsMock = {
	text: 'cat',
	sort: 'date-posted-desc',
	per_page: 20,
	page: 1
}

const responseMockData = {
	"photos": {
		"page": 1,
		"pages": 12,
		"perpage": 20,
		"total": "234",
		"photo": [
			{
				"id": "2448337677",
				"owner": "58722587@N00",
				"secret": "592a1a3238",
				"server": "2082",
				"farm": 3,
				"title": "Agriscruteur",
				"ispublic": 1,
				"isfriend": 0,
				"isfamily": 0,
				"description": {
					"_content": "C'est ça aussi, la photo. Tout le temps de la prise de vue, j'ai prié pour que ce ballon remonte juste un peu pour ne pas être légèrement caché par la cime des bois. Et quand la photo est apparue à l'écran, j'ai vu ce que je n'avais pas vu : si l'homme du tracteur a l'air de s'en foutre comme de l'an quarante, un second agriculteur est au fond du champs. Il est dans la position de quelqu'un qui contemple, les mains derrière le dos. Travaillez, travaillez, donnez vous de la peine...\nDuring all the view, I was saying : my god, let this balloon go just a little bit higher on the top of the trees. But when I saw the picture on my screen, all the interest was somewhere else! In the tractor, the farmer is not interested by the ballon, but, in the end of the field, another one is looking carefully in a special position; \n<a href=\"http://www.flickr.com/photos/mmarsupilami/2448337677/sizes/l/\">Large</a>."
				},
				"dateupload": "1209388984",
				"datetaken": "2008-04-26 21:06:26",
				"datetakengranularity": "0",
				"datetakenunknown": 0,
				"ownername": "mmarsupilami",
				"tags": "10faves",
				"url_l": "https://live.staticflickr.com/2082/2448337677_592a1a3238_b.jpg",
				"height_l": "899",
				"width_l": "1024"
			},
			{
				"id": "444055874",
				"owner": "10653408@N00",
				"secret": "621f53ef4d",
				"server": "195",
				"farm": 1,
				"title": "Ciel profond / Deep Sky",
				"ispublic": 1,
				"isfriend": 0,
				"isfamily": 0,
				"description": {
					"_content": "<b>La photo la plus repérée chaque jour par les moteurs de recherche... </b>\nCette image reste un mystère pour moi à cause de sa longévité et de la régularité de ses visites. Elle a été mise en ligne la première fois en septembre 2006. Et aujourd'hui encore, elle bat tous les jours le nombre d'affichage. \n\n<a href=\"http://bighugelabs.com/flickr/onblack.php?id=444055874&amp;size=Large\" rel=\"nofollow\">'Ciel profond' en large sur fond noir</a>\nMontage par superposition d'une photo de la région de la <a href=\"http://fr.wikipedia.org/wiki/N%c3%a9buleuse_d'Orion\" rel=\"nofollow\">constellation d'Orion </a>et de la pleine Lune. L'intérêt de cette image c'est qu'elle a été faite avec aucun instrument d'astronomie mais avec un objetif de 50 mm sur un D100 pour le ciel étoilé et un télé de 200 mm sur un D200 pour la Lune.\nLa pose courte d'une dizaine de secondes sur le ciel  étoilé a suffit pour révéler les milliards d'étoiles invisibles à l'oeil nu et la nébuleuse d'Orion visible sur le cliché original. Sur cette vue j'ai diminué la lumière et les détails du fond pour le rendre plus noir en enlevant 90 % des étoiles visibles à l'origine. Ce genre de cliché n'est possible qu'avec un environnement dénué de la moindre lumière. Ici, j'étais dans le grand Erg oriental au Sud de Zaafraane en Tunisie.\n\nAssembly by superposition of a photograph of the area of the constellation of Orion and Full moon. The interest of this image it is that it was made with any instrument of astronomy but with lens of 50 mm on D100 for the starry sky and a lens of 200 mm on D200 for the Moon. The short installation of ten seconds on starry sky  is enough to reveal the billion stars invisible to the naked eye and the visible nebula of Orion on the original stereotype. On this sight I decreased the light and the details of the bottom to make it blacker while removing 90% of stars visible at the origin. This kind of stereotype is not possible that with an environment stripped of the least light. Here, I was in the great Eastern Erg in the South of Zaafraane in Tunisia."
				},
				"dateupload": "1224223991",
				"datetaken": "2005-04-06 21:25:53",
				"datetakengranularity": "0",
				"datetakenunknown": 0,
				"ownername": "Alain Bachellier",
				"tags": "sky moon night lune stars space orion nuit espace constellation etoiles astronomie",
				"url_l": "https://live.staticflickr.com/195/444055874_621f53ef4d_b.jpg",
				"height_l": "722",
				"width_l": "1024"
			},
			{
				"id": "4389584250",
				"owner": "32409799@N04",
				"secret": "837d3861b0",
				"server": "4039",
				"farm": 5,
				"title": "La Seine retrouve enfin son bleu d'antan...",
				"ispublic": 1,
				"isfriend": 0,
				"isfamily": 0,
				"description": {
					"_content": "<a href=\"http://bighugelabs.com/onblack.php?id=4389584250&amp;size=large\" rel=\"nofollow\">View On Black</a>\n\nIl est des soirs particuliers à Paris. Cette ville réputée grise et froide dévoila ce soir là un tout autre visage. Tous les passants circulant sur le Pont au Change d'ou cette image fut prise étaient comme éblouis par le tableau offert ce soir! Les gens semblaient comme revivre. Tout au long de ces prises de vue, j'ai fait des rencontres auxquelles je n'étais pas habitué.\nDes passionnés de photos scruptant mon matériel, un papy me conseillant de prendre la  lune, magnifique ce soir là ( snif...je n'ai pas réussi à tout concilier sans un grand angle que je ne peux m'offrir!), un genre de cadre quinquagénère m'encourageant...il ya des soirs comme ca ...magiques.\n\n<i>This picture is not HDR processed</i>\n\n<b>Camera</b>: Pentax K200D\n<b>Lens</b>: Pentax 18-55mm F4-5,6 \n<b>Filters</b>: \n-GND Cokin Filter P121S\n-HOYA Filtre Polarisant 52mm\n\n<b>Tripod</b>: VELBON CX 440\n<b>Tripod Head</b>:--\n\n<b>Focal Length</b>:18mm\n<b>Shutter Speed</b>: 30 sec\n<b>Aperture</b>: f11\n<b>ISO</b>: 100"
				},
				"dateupload": "1267176050",
				"datetaken": "2010-02-18 18:50:18",
				"datetakengranularity": "0",
				"datetakenunknown": 0,
				"ownername": "Mickael LOICHON",
				"tags": "superaplus aplusphoto",
				"url_l": "https://live.staticflickr.com/4039/4389584250_837d3861b0_b.jpg",
				"height_l": "693",
				"width_l": "1024"
			},
			{
				"id": "127628430",
				"owner": "91247384@N00",
				"secret": "6b665843a1",
				"server": "1",
				"farm": 1,
				"title": "Magma",
				"ispublic": 1,
				"isfriend": 0,
				"isfamily": 0,
				"description": {
					"_content": "First go at camera tossing in front of my Mathmos lava lamp. For this shot I made a rotation while pressing the shutter (1sec shot). I kept the aperture closed (f/8)  in order to avoid over-exposure. The bubbles did the rest! ;)\n------\nMa première tentative à la technique du &quot;tossing&quot;. J'ai utilisé ma lampe à bulles en éxécutant une rotation pendant la prise de vue. J'ai choisi une exposition de 1sec et une ouverture de f/8 afin d'éviter toute sur-exposition. Les bulles ont fait le reste! ;)\n\nReplaced with denoised version...\n"
				},
				"dateupload": "1144878159",
				"datetaken": "2006-04-13 11:41:29",
				"datetakengranularity": "0",
				"datetakenunknown": 0,
				"ownername": "OllieD",
				"tags": "red abstract interestingness explore tossing magma mathmos",
				"url_l": "https://live.staticflickr.com/1/127628430_6b665843a1_b.jpg",
				"height_l": "768",
				"width_l": "1024"
			},
			{
				"id": "199038548",
				"owner": "53529651@N00",
				"secret": "57839ddaa2",
				"server": "57",
				"farm": 1,
				"title": "une belle fraicheur",
				"ispublic": 1,
				"isfriend": 0,
				"isfamily": 0,
				"description": {
					"_content": "et surtout une belle vue,j'ai penser a toi toute la journee et j'ai pris des photos un peu pour toi,j'avais hate de te l'ais envoyer."
				},
				"dateupload": "1153944798",
				"datetaken": "2006-07-26 05:10:47",
				"datetakengranularity": "0",
				"datetakenunknown": 0,
				"ownername": "kamatt",
				"tags": "",
				"url_l": "https://live.staticflickr.com/57/199038548_57839ddaa2_b.jpg",
				"height_l": "768",
				"width_l": "1024"
			},
			{
				"id": "328353320",
				"owner": "64118749@N00",
				"secret": "be24d102af",
				"server": "127",
				"farm": 1,
				"title": "Palace",
				"ispublic": 1,
				"isfriend": 0,
				"isfamily": 0,
				"description": {
					"_content": "We c palaaaace ! Merci la jolie brune qui shoote au canon 350D pour l'angle de vue, j'espere te recroiser..."
				},
				"dateupload": "1166641649",
				"datetaken": "2006-12-20 19:50:16",
				"datetakengranularity": "0",
				"datetakenunknown": 0,
				"ownername": "Yozine",
				"tags": "digital eos rebel d 300",
				"url_l": "https://live.staticflickr.com/127/328353320_be24d102af_b.jpg",
				"height_l": "683",
				"width_l": "1024"
			},
			{
				"id": "440826492",
				"owner": "71744374@N00",
				"secret": "0f6d4d40cb",
				"server": "169",
				"farm": 1,
				"title": "Sans âge...",
				"ispublic": 1,
				"isfriend": 0,
				"isfamily": 0,
				"description": {
					"_content": "Artiste: Beau Dommage \nChanson: J'ai oublié le jour \nJ'ai oublié le jour et le nom de la rue\nJ'ai oublié mes bagues sur ton piano\nMais jamais j'oublierai\nComment c'était bon comment c'était chaud\nM'as toujours me rappeler\nQue t'as pas essayé de m'impressionner\nT'étais pas le plus beau ni le plus doux\nMais on a ri ensemble des autres fous\nQui font l'amour comme on apprend\nDans 'livres ou dans les vues\nJ'ai oublié le jour et le nom de la rue\nJ'ai oublié le jour mais jamais j'oublierai\nQue t'étais là quand j'ai eu besoin de toi\nT'étais pas là pour me consoler\nT'étais pas là pour me rassurer\nMais m'écouter comme j'en avais besoin.\n"
				},
				"dateupload": "1175355722",
				"datetaken": "2007-03-30 15:20:29",
				"datetakengranularity": "0",
				"datetakenunknown": 0,
				"ownername": "Sue Cloutier",
				"tags": "rose",
				"url_l": "https://live.staticflickr.com/169/440826492_0f6d4d40cb_b.jpg",
				"height_l": "768",
				"width_l": "1024"
			},
			{
				"id": "2696998732",
				"owner": "14256098@N06",
				"secret": "90be7e24de",
				"server": "3226",
				"farm": 4,
				"title": "dress by ibiza",
				"ispublic": 1,
				"isfriend": 0,
				"isfamily": 0,
				"description": {
					"_content": "je l'ai vue, j'ai craqué sur cette petite robe imaginée par une scrappeuse (je pense !! hihih)\nMon chéri me disait qu'elle allait rester dans l'armoire, parce qu'en Suisse, j'oserai jamais la remettre...!!!\nEt bien... je l'ai déjà re-mise plusieurs fois et tant pis si je passe pour une follette aux manches bouffantes... je l'aime cette robette à fleurs.... NA!!"
				},
				"dateupload": "1216847785",
				"datetaken": "2008-07-23 23:07:20",
				"datetakengranularity": "0",
				"datetakenunknown": 0,
				"ownername": "bibine 75",
				"tags": "girl shopping dress ibiza bikini"
			},
			{
				"id": "3328334310",
				"owner": "21318269@N05",
				"secret": "088bab37db",
				"server": "3346",
				"farm": 4,
				"title": "Amiens-Mégacité",
				"ispublic": 1,
				"isfriend": 0,
				"isfamily": 0,
				"description": {
					"_content": "Pentax K100D, 3expos HDR.\nJ'étais à Mégacité pour accompagner ma fille à Mégapark et j'en ai profité pour faire des photos personnelles (familiales) , toutefois, très attiré par cet angle de vue, j'ai photographié trop vite( mauvais réglages) sans trépied pour mes trois expositions...C'est tout juste correct ."
				},
				"dateupload": "1236167094",
				"datetaken": "2009-03-02 13:41:00",
				"datetakengranularity": "0",
				"datetakenunknown": 0,
				"ownername": "Fœtal ( Eric M. )",
				"tags": "france art architecture amiens hdr picardie somme photofiltre photomatix pentaxk100d uleadphotoimpact paintshopprox2",
				"url_l": "https://live.staticflickr.com/3346/3328334310_088bab37db_b.jpg",
				"height_l": "1024",
				"width_l": "739"
			},
			{
				"id": "3734565083",
				"owner": "26610042@N04",
				"secret": "557843fdbc",
				"server": "2473",
				"farm": 3,
				"title": "Boseong Tea Plantations (2 sur 3)",
				"ispublic": 1,
				"isfriend": 0,
				"isfamily": 0,
				"description": {
					"_content": "Boseong, Corée du Sud, 2009\n\nA few weeks ago, I went for a day in Boseong to visit the green tea plantations. The place itself is quite small, but the geometric patterns formed by the tea fields are very beautiful to watch. I am also fond of green tea ice cream.\n\nIl y a quelques semaines, je suis allé visiter les plantations de thé vert à Boseong. L'endroit en lui-même est assez petit mais les formes géométriques des champs de thé valent la peine d'être vue. J'avoue que je suis aussi un grand amateur de glace au thé vert."
				},
				"dateupload": "1248012876",
				"datetaken": "2009-07-04 06:30:06",
				"datetakengranularity": "0",
				"datetakenunknown": 0,
				"ownername": "<==Manji==>",
				"tags": "mountain tree green field montagne tea vert line plantation southkorea arbre champ ligne thé boseong d80 coréedusud",
				"url_l": "https://live.staticflickr.com/2473/3734565083_557843fdbc_b.jpg",
				"height_l": "685",
				"width_l": "1024"
			},
			{
				"id": "3734563555",
				"owner": "26610042@N04",
				"secret": "b3d42584f2",
				"server": "3436",
				"farm": 4,
				"title": "Boseong Tea Plantations (1 sur 3)",
				"ispublic": 1,
				"isfriend": 0,
				"isfamily": 0,
				"description": {
					"_content": "Boseong, Corée du Sud, 2009\n\nA few weeks ago, I went for a day in Boseong to visit the green tea plantations. The place itself is quite small, but the geometric patterns formed by the tea fields are very beautiful to watch. I am also fond of green tea ice cream.\n\nIl y a quelques semaines, je suis allé visiter les plantations de thé vert à Boseong. L'endroit en lui-même est assez petit mais les formes géométriques des champs de thé valent la peine d'être vue. J'avoue que je suis aussi un grand amateur de glace au thé vert."
				},
				"dateupload": "1248012842",
				"datetaken": "2009-07-04 05:53:27",
				"datetakengranularity": "0",
				"datetakenunknown": 0,
				"ownername": "<==Manji==>",
				"tags": "mountain tree green field montagne tea vert line plantation southkorea arbre champ ligne thé boseong d80 coréedusud",
				"url_l": "https://live.staticflickr.com/3436/3734563555_b3d42584f2_b.jpg",
				"height_l": "685",
				"width_l": "1024"
			},
			{
				"id": "3830007068",
				"owner": "22437135@N07",
				"secret": "198eae9d67",
				"server": "3450",
				"farm": 4,
				"title": "Bretagne - Quiberon - L'arche de Port blanc",
				"ispublic": 1,
				"isfriend": 0,
				"isfamily": 0,
				"description": {
					"_content": "J'ai été surpris par cette image (bien sous ex à la prise de vue ....)\nj'ai trouvé assez sympa la différence énorme des couleurs d'une part et d'autre de l'arche ...\nNO PHOTOSHOP .....juste un petit éclaircissement des zones les plus sombres ....et le miracle de la lumière"
				},
				"dateupload": "1250508812",
				"datetaken": "2009-08-17 13:28:53",
				"datetakengranularity": "0",
				"datetakenunknown": 0,
				"ownername": "philippe MANGUIN photographies",
				"tags": "sunset france port sunrise french landscape soleil brittany rocks coucher bretagne côte paysage morbihan blanc rochers arche sauvage quiberon côtesauvage presquîle pointedupercho",
				"url_l": "https://live.staticflickr.com/3450/3830007068_198eae9d67_b.jpg",
				"height_l": "684",
				"width_l": "1024"
			},
			{
				"id": "3950742987",
				"owner": "42296823@N04",
				"secret": "451d65448b",
				"server": "2482",
				"farm": 3,
				"title": "parcours nocture",
				"ispublic": 1,
				"isfriend": 0,
				"isfamily": 0,
				"description": {
					"_content": "Une photo depuis Montmartre durant une sortie avec un copain pour quelques prises de vue.\nj'ai pas mal joué sur la balance des blanc pour me rapprocher au plus justes des couleurs observées."
				},
				"dateupload": "1253821543",
				"datetaken": "2009-08-18 21:55:57",
				"datetakengranularity": "0",
				"datetakenunknown": 0,
				"ownername": "Alexandre DYMON",
				"tags": "black night town noir nuit ville nocture parismontmartre abesse 18èmearrondissement",
				"url_l": "https://live.staticflickr.com/2482/3950742987_451d65448b_b.jpg",
				"height_l": "1024",
				"width_l": "683"
			},
			{
				"id": "3982173740",
				"owner": "10785432@N03",
				"secret": "1f24823400",
				"server": "3455",
				"farm": 4,
				"title": "Gas Killer",
				"ispublic": 1,
				"isfriend": 0,
				"isfamily": 0,
				"description": {
					"_content": "&quot;Gas Killer&quot;, de Malachi Farrell, au centre culturel irlandais : des têtes de chiens recouvertes de masques à gaz s'agittent sur des supports en métal, dans une lumière rouge, permettant un &quot;face à face ambigu, tout à la fois séduisant et menaçant&quot; (c'est le dossier de presse qui le dit, donc c'est vrai). En tout cas, c'était fun.\n\nC'est la première attraction de la Nuit Blanche 2009 que j'ai vue (j'aime utiliser &quot;attraction&quot; pour ça, ça donne un côté Disneyland à l'ensemble et ça me permet de faire de la provoc' à deux balles). J'étais passé devant la Mosquée de Paris juste avant, mais la queue dépassait les 500 m de long. Ici, dans cette œuvre du festival &quot;off&quot;, pas de queue, beaucoup d'enfants intrigués, des gens qui se photographient devant et une bonne ambiance. Une chouette entrée en matière."
				},
				"dateupload": "1254700818",
				"datetaken": "2009-10-03 21:45:02",
				"datetakengranularity": "0",
				"datetakenunknown": 0,
				"ownername": "Groume",
				"tags": "paris art night nuit artcontemporain nuitblanche farrell artmoderne malachifarrell nuitblancheparis nuitblanche2009 centreculturelirlandais gaskiller",
				"url_l": "https://live.staticflickr.com/3455/3982173740_1f24823400_b.jpg",
				"height_l": "1024",
				"width_l": "1024"
			},
			{
				"id": "4084674753",
				"owner": "39469011@N07",
				"secret": "9177b0ebf7",
				"server": "2701",
				"farm": 3,
				"title": "Mésange à tête noire",
				"ispublic": 1,
				"isfriend": 0,
				"isfamily": 0,
				"description": {
					"_content": "Je ne sais pas qui a eu l'excellente idée de suspendre ce petit filet...c'est une bonne chose pour moi.\nPar contre l'image est prise avec ISO 80 et seulement  1 / 20 ième en vitesse, focale 444 mm.\nJe ne suis quand même pas trop mécontent de cette image vu les conditions de prises de vue.\nJ'ai revu hier mon ami l'écureuil, mais comme j'avais déjà pris une photo avant hier, il m' a dit qu'il ne fallait pas abuser de lui et de sa gentillesse et il est parti !! :-))"
				},
				"dateupload": "1257666727",
				"datetaken": "2009-11-07 15:48:26",
				"datetakengranularity": "0",
				"datetakenunknown": 0,
				"ownername": "Dogeed",
				"tags": "bird lumix panasonic chickadee oiseau fz30 mésange dogeed",
				"url_l": "https://live.staticflickr.com/2701/4084674753_9177b0ebf7_b.jpg",
				"height_l": "711",
				"width_l": "1024"
			},
			{
				"id": "4142526922",
				"owner": "39196918@N08",
				"secret": "b3a958867a",
				"server": "2616",
				"farm": 3,
				"title": "Québec - chaussée dans la ville \\ roadway into the city",
				"ispublic": 1,
				"isfriend": 0,
				"isfamily": 0,
				"description": {
					"_content": "Belle vue. J'ai aussi une envie soudaine de me gratter &quot;boules&quot; ici.\n\nTaken just north of the Citadel and practically over the cliff. Btw don't do this at home, I was holding onto a tree branch when I was snapping this picture."
				},
				"dateupload": "1259459105",
				"datetaken": "2009-06-02 12:22:38",
				"datetakengranularity": "0",
				"datetakenunknown": 0,
				"ownername": "Chinatownchef",
				"tags": "city downtown quebec citadel",
				"url_l": "https://live.staticflickr.com/2616/4142526922_b3a958867a_b.jpg",
				"height_l": "1024",
				"width_l": "683"
			},
			{
				"id": "4709117687",
				"owner": "23117403@N06",
				"secret": "a3d7a922c6",
				"server": "4029",
				"farm": 5,
				"title": "Blue weekend festival - Festival bleu du week-end - Festival azul de fin de semana",
				"ispublic": 1,
				"isfriend": 0,
				"isfamily": 0,
				"description": {
					"_content": "<b> Eastern Bluebird - Merlebleu de l'Est - Azulejo gorjicanelo</b>\n\n<b><u>Blue weekend festival</u></b>\nStarting today I will present to all my fellows’ friends a blue festival of this beauty in flight. This is my first picture of hundreds and hundreds of shots I have made to this bird in flight as most of them went to the garbage and only a few passed the test, too many hours and days of patience and shooting, I hope you will like them.\n\n<b><u>Festival Bleu du week-end</u></b>\nA partir d'aujourd'hui je vais vous présenter à tous les amis Flickeriens un festival de bleus de cette beauté en vol. Je vous  présente ici la première photo entre des centaines et des centaines des photos que j'ai faits à cet oiseau en vol, dont la plupart d'entre elles sont allées directement à la poubelle, et seules quelques ont  réussies  le test, trop d'heures et des jours de patience et de prises de vue, J'espère qu'ils vous plairont.\n\n<b><u>Festival azul de fin de semana</u></b>\nA partir de hoy y por el resto del fin de semana, voy a presentar a todos mis amigos Flickerianos un festival azul de esta belleza en vuelo. Esta es mi primera imagen de cientos y cientos de fotos que he  hecho a esta ave en vuelo, y donde  la grandísima mayoría de ellos fueron directos a la basura y sólo unos pocos pasaron el examen, después de muchas horas y días de paciencia y de tiros….  espero que sean de su agrado.\n\n======================= <b> PHOTOS </b> ======================\nOrdre: <a href=\"https://www.flickr.com/search/?text=Passeriformes&amp;user_id=23117403@N06&amp;sort=date-posted-desc\"> <b>Passeriformes</b> </a>\nFamille: <a href=\"https://www.flickr.com/search/?user_id=23117403@N06&amp;sort=date-posted-desc&amp;text=Turdidae\"> <b>Turdidae</b> </a>\nNom en latin: <a href=\"https://www.flickr.com/search/?text=Sialia sialis&amp;user_id=23117403@N06&amp;sort=date-posted-desc\"> <b>Sialia sialis</b> </a>\nLieu de capture: <a href=\"https://www.flickr.com/search/?sort=date-posted-desc&amp;user_id=23117403@N06&amp;text=Saint-Bruno\"><b>Parc Saint Bruno de Montarville, Québec</b></a>\n======================== <b> INFO </b>=======================\n▶ <a href=\"http://www.oiseaux.net/oiseaux/merlebleu.de.l.est.html\" rel=\"nofollow\">  <b>  En Français</b></a>\n▶ <a href=\"https://www.allaboutbirds.org/guide/Eastern_Bluebird/id\" rel=\"nofollow\"> <b> In English</b></a>\n▶ <a href=\"https://es.wikipedia.org/wiki/Sialia_sialis\" rel=\"nofollow\"> <b>  En Español</b></a>\n▶ 🎼 🎵 <a href=\"http://www.xeno-canto.org/species/Sialia-sialis\" rel=\"nofollow\"> <b>Xeno-canto web</b></a>\n"
				},
				"dateupload": "1276797229",
				"datetaken": "2010-06-09 16:41:03",
				"datetakengranularity": "0",
				"datetakenunknown": 0,
				"ownername": "Rafael G. Sanchez",
				"tags": "eastern bluebird merlebleu lest azulejo gorjicanelo easternbluebird merlebleudelest azulejogorjicanelo elgalopino nikon d3s pajaros oiseaux birds nature naturaleza wildlife fauna faune libertad freedom libertee blue azul vuelo volando flying vol sialiasialis thewonderfulworldofbirds turdidae passeriformes quebec parcsanbruno aves saintbruno parc saint bruno montarville québec",
				"url_l": "https://live.staticflickr.com/4029/4709117687_a3d7a922c6_b.jpg",
				"height_l": "692",
				"width_l": "1024"
			},
			{
				"id": "4726432749",
				"owner": "87204754@N00",
				"secret": "fdf44ae2ec",
				"server": "1147",
				"farm": 2,
				"title": "WhaIron Man",
				"ispublic": 1,
				"isfriend": 0,
				"isfamily": 0,
				"description": {
					"_content": "Ah ah ! Walron Man ... A personal mix between Iron Man and Andy Warhol !\n\nThe story behind this picture is important (at least to me !) ...\nThe 4 parts of this picture are not the same ... it's not the same photo colored in photoshop and stitched together ... these are 4 different pictures ... and NO photoshop filter was involved ...\n\nI took each picture with my Canon 7D, on which was mounted a Canon 18-135mm IS. It was therefore mounted on a Manfrotto tripod (oh my god they are stable these things ;) ).\n\nThe shutter was set to be opened for 5 seconds and ISO was 100.\n\nNo flashed connected to the camera directly or wirelessly.\n\nWhat I did is to open the shutter and I had (of course) 5&quot; to do the rest.\nThe rest was to put colored filter in front of my 580EX Canon Flash and fire it manually from angles.\n\nI find the result quite stunning ;)\nWhat about you ?\n\n_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-\nAh ah ! Walron Man ... Un mix personnel entre Iron Man et Andy Warhol !\n\nL'histoire derrière cette photo est importante (au moins à mes yeux !) ...\nLes 4 parties de cette image ne sont pas les même ... ce n'est pas la même photo colorées dans photoshop et collées ensemble ... ce sont 4 photos différentes ... et AUCUN passage sous un filtre photoshop ...\n\nJ'ai pris chaque photo avec mon Canon 7D, sur lequel se trouvait un objo Canon 18-135mm IS. Le tout monté sur un trépied Manfrotto (Mon Dieu que ces trépieds sont stables ;) ).\n\nLe temps de pose était réglé à 5 secondes et à 100 ISO.\n\nAucun flash n'était connecté à l'appareil, directement ou sans fil.\n\nCe que j'ai donc fait est de lancer la prise de vue , j'avais donc (bien sûr) 5&quot; pour faire le reste.\nLe reste était de placer des filres colorés devant mon flash 580 EX Canon et flasher à la main sous différents angles.\nEt vous ?\nJe trouve le résultat vraiment sympa ;)"
				},
				"dateupload": "1277281766",
				"datetaken": "2010-06-23 10:02:03",
				"datetakengranularity": "0",
				"datetakenunknown": 0,
				"ownername": "Arthur40A",
				"tags": "blue red man color green film andy yellow statue movie iron mosaic flash ironman andywarhol warhol gel mosaique couleur mosaïque",
				"url_l": "https://live.staticflickr.com/1147/4726432749_fdf44ae2ec_b.jpg",
				"height_l": "1024",
				"width_l": "687"
			},
			{
				"id": "4968605513",
				"owner": "10851846@N03",
				"secret": "48e43c15b8",
				"server": "4084",
				"farm": 5,
				"title": "Saint-Bernard",
				"ispublic": 1,
				"isfriend": 0,
				"isfamily": 0,
				"description": {
					"_content": "Il y avait aussi des pompiers militants dans le cortège. Ces deux-là m'ont proposé fort élégamment de me hisser dans un arbre pour que je profite d'un meilleur point de vue. J'ai décliné en riant."
				},
				"dateupload": "1283897533",
				"datetaken": "2010-09-07 14:29:55",
				"datetakengranularity": "0",
				"datetakenunknown": 0,
				"ownername": "Le Monolecte",
				"tags": "france toulouse manifestation 7sept",
				"url_l": "https://live.staticflickr.com/4084/4968605513_48e43c15b8_b.jpg",
				"height_l": "685",
				"width_l": "1024"
			},
			{
				"id": "4993730348",
				"owner": "45795053@N00",
				"secret": "d61d891bc9",
				"server": "4106",
				"farm": 5,
				"title": "Ridicule photo de la Vénus de Milo",
				"ispublic": 1,
				"isfriend": 0,
				"isfamily": 0,
				"description": {
					"_content": "Il y avait foule, spécialement devant les &quot;oeuvres maitresses&quot;, ce qui fait qu'en touristes un peu cons, on essaie de se précipiter pour la prendre en photo et dire &quot;je l'ai vue, je l'ai vue, j'ai une PREUVE!&quot;. Mes amis, ce temps est révolu. "
				},
				"dateupload": "1284571341",
				"datetaken": "2007-08-08 08:41:26",
				"datetakengranularity": "0",
				"datetakenunknown": 0,
				"ownername": "LMDNY",
				"tags": "davidaparisvoxcom",
				"url_l": "https://live.staticflickr.com/4106/4993730348_d61d891bc9_b.jpg",
				"height_l": "666",
				"width_l": "500"
			}
		]
	},
	"stat": "ok"
}

export { mockParams, mockData }
// Feito com amor e carinho por Bruno Bonavigo em 2022.
// Viva Cristo Rei! Viva Maria Rainha!

const ROSARIO = {
	audio: null,
	startup() {
		const toastInfo = document.getElementById('toastInfo');
		const toast = new bootstrap.Toast(toastInfo, {
			animation: true,
			autohide: true,
			delay: 8000,
		});
		toast.show();
	},
	infoRosario() {
		Swal.fire('O que é o Rosário?', 'O Santo Rosário é uma prática religiosa de devoção mariana muito difundida entre os católicos. Ele consiste no uso de uma corrente com contas ou nós e a contemplação de determinadas passagens da vida de Jesus e de sua mãe, Nossa Senhora. São rezadas várias orações, principalmente a Ave-Maria, que no Rosário completo é rezada cento e cinquenta vezes, contemplando os quinze mistérios. Você também pode seguir os dias dos mistérios e rezar cinco mistérios e cinquenta Ave-Marias.');
	},
	infoDiasTerco() {
		Swal.fire('Dias do Terço', 'Mistérios Gozosos - segundas e quintas-feiras.<br>Mistérios Dolorosos - terças e sextas-feiras.<br>Mistérios Gloriosos - quartas-feiras, sábados e domingos.');
	},
	infoComoRezar() {
		Swal.fire({
			title: 'Como rezar?',
			text: "O ideal para rezar o Rosário é ter um terço, mas caso não tenha um, é possível rezar usando os dedos. Tendo-o, inicia-se fazendo o sinal da cruz, depois, segurando a cruz do terço, é rezado o Credo (as orações estarão em outra seção), e depois, na primeira cota, é rezado um Pai-Nosso, depois, nas três cotas que a sucedem, é rezado uma Ave-Maria, e enfim, na última cota antes da medalha, é rezado um Glória ao Pai e um Ó Meu Jesus.",
			showCancelButton: false,
			confirmButtonColor: '#3085d6',
			confirmButtonText: 'Prosseguir'
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire({
					title: 'Como rezar?',
					text: "Agora, iniciando da direita para esquerda, é anunciado o primeiro mistério e é dada uma pausa para reflexão do mesmo, seguida por um Pai-Nosso, uma Ave-Maria para cada uma das 10 cotas e um Glória ao Pai e um Ó Meu Jesus ao fim. Repita esse processo para os próximos mistérios, e quando chegares na medalha, recite um Salve Rainha.",
					showCancelButton: false,
					confirmButtonColor: '#d33',
					confirmButtonText: 'Fechar'
				})
			}
		});
	},
	infoMisGozosos() {
		Swal.fire({
			title: 'Annuntiatio Beatæ Virgini Mariæ (Anunciação a Bem Aventurada Virgem Maria)',
			html: '«Estando Isabel no sexto mês, foi enviado por Deus o anjo Gabriel a uma cidade da Galileia, chamada Nazaré, a uma virgem desposada com um varão, chamado José, da casa de David; o nome da virgem era Maria.» (Lc 1, 26-27).',
			showCancelButton: false,
			confirmButtonColor: '#3085d6',
			confirmButtonText: 'Prosseguir'
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire({
					title: 'Visitatio Beatæ Virginis Mariæ (Visitação da Bem Aventurada Virgem Maria)',
					html: '«Naqueles dias, levantando-se Maria, foi com pressa às montanhas, a uma cidade de Judá. Entrou em casa de Zacarias, e saudou Isabel. Aconteceu que, apenas Isabel ouviu a saudação de Maria, o menino saltou no seu ventre, e Isabel ficou cheia do Espírito Santo; e exclamou em alta voz: "Bendita és tu entre todas as mulheres, e bendito é o fruto do teu ventre."» (Lc 1, 39-42).',
					showCancelButton: false,
					confirmButtonColor: '#3085d6',
					confirmButtonText: 'Prosseguir'
				}).then((result) => {
					if (result.isConfirmed) {
						Swal.fire({
							title: 'Nativitas Domini Nostri Jesu Christi (Nascimento de Nosso Senhor Jesus Cristo)',
							html: '«Naqueles dias, saiu um édito de César Augusto, prescrevendo o recenseamento de todo o mundo. Este recenseamento foi anterior ao que se realizou quando Quirino era governador da Síria. Iam todos recensear-se, cada um à sua cidade. José foi também da Galileia, da cidade de Nazaré, à Judeia, à cidade de David, que se chamava Belém, porque era da casa e família de David, para se recensear juntamente com Maria, sua esposa, que estava grávida. Ora, estando ali, aconteceu completarem-se os dias em que devia dar à luz, e deu à luz o seu filho primogénito, e o enfaixou, e o reclinou numa manjedoura, porque não havia lugar para eles na estalagem.» (Lc 2,1-7).',
							showCancelButton: false,
							confirmButtonColor: '#3085d6',
							confirmButtonText: 'Prosseguir'
						}).then((result) => {
							if (result.isConfirmed) {
								Swal.fire({
									title: 'Præsentatio Jesu et Purificatio Mariæ (Apresentação de Jesus e Purificação de Maria)',
									html: '«Depois que se completaram os oito dias para ser circuncidado o Menino, foi-lhe posto o nome de Jesus, como lhe tinha chamado o anjo, antes que fosse concebido no ventre materno. Depois que se completaram os dias da purificação de Maria, segundo a lei de Moisés, levaram-no a Jerusalém para o apresentar ao Senhor, segundo o que está escrito na lei do Senhor : Todo o varão primogênito será consagrado ao Senhor, e para oferecerem em sacrifício, conforme o que também está escrito na lei do Senhor, um par de rolas ou dois pombinhos.» (Lc 2, 21-24).',
									showCancelButton: false,
									confirmButtonColor: '#3085d6',
									confirmButtonText: 'Prosseguir'
								}).then((result) => {
									if (result.isConfirmed) {
										Swal.fire({
											title: 'Inventio Pueri Jesu (Encontro do Menino Jesus)',
											html: '«Seus pais iam todos os anos a Jerusalém, pela festa da Páscoa. Quando chegou aos doze anos, indo eles a Jerusalém segundo o costume daquela festa, acabados os dias que ela durava, quando voltaram, ficou o Menino Jesus em Jerusalém, sem que seus país o advertissem. Julgando que ele fosse na comitiva, caminharam uma jornada, e depois procuraram-no entre os parentes e conhecidos. Não o encontrando, voltaram a Jerusalém em busca dele. Aconteceu que, três dias depois, o encontraram no templo sentado no meio dos doutores, ouvindo-os e interrogando-os. E todos os que ouviam, estavam maravilhados da sua sabedoria e das suas respostas.» (Lc 2, 41-47)',
											showCancelButton: false,
											confirmButtonColor: '#d33',
											confirmButtonText: 'Fechar'
										})
									}
								});
							}
						});
					}
				});
			}
		});
	},
	infoMisDolorosos() {
		Swal.fire({
			title: 'Jesu in agonia factus (Jesus em agonia)',
			html: 'Então foi Jesus com eles a um lugar chamado Getsemani, e disse-lhes: "Sentai-vos aqui, enquanto eu vou acolá orar." E, tendo tomado consigo Pedro e os dois filhos de Zebedeu, começou a entristecer-se e angustiar-se. Disse-lhes então: "A minha alma está numa tristeza mortal; ficai aqui e vigiai comigo." Adiantando-se um pouco, prostrou-se com o rosto em terra, e fez esta oração: "Meu Pai, se é possível, passe de mim este cálice! Todavia não se faça como eu quero, mas sim como tu queres."» (Mt 26, 36-39).',
			showCancelButton: false,
			confirmButtonColor: '#3085d6',
			confirmButtonText: 'Prosseguir'
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire({
					title: 'Jesu flagellatio (Jesus flagelado)',
					html: '«Então soltou-lhes Barrabás. Quanto a Jesus, depois de o ter mandado flagelar, entregou-lho para ser crucificado.» (Mt 27,26).',
					showCancelButton: false,
					confirmButtonColor: '#3085d6',
					confirmButtonText: 'Prosseguir'
				}).then((result) => {
					if (result.isConfirmed) {
						Swal.fire({
							title: 'Jesu coronatio spinis (Jesus coroado de espinhos)',
							html: '«Então os soldados do governador, conduzindo Jesus ao Pretório, juntaram em volta dele toda a coorte. Depois de o terem despido, lançaram sobre ele um manto carmezim. Em seguida, tecendo uma coroa de espinhos, puseram-lha sobre a cabeça, e na mão direita uma cana. E, dobrando o joelho diante dele, o escarneciam, dizendo: "Salve, ó rei dos Judeus."» (Mt 27, 27-29).',
							showCancelButton: false,
							confirmButtonColor: '#3085d6',
							confirmButtonText: 'Prosseguir'
						}).then((result) => {
							if (result.isConfirmed) {
								Swal.fire({
									title: 'Jesus baiulat sibi crucem (Jesus carrega sua cruz)',
									html: '«Obrigarem um certo homem que a a passar, Simão de Cirene, que vinha do campo, pai de Alexandre e de Rufo, a levar a cruz. Conduziram-no ao lugar do Gólgota, que quer dizer lugar do Crânio.» (Mc 15, 21-22).',
									showCancelButton: false,
									confirmButtonColor: '#3085d6',
									confirmButtonText: 'Prosseguir'
								}).then((result) => {
									if (result.isConfirmed) {
										Swal.fire({
											title: 'Domini Nostri Jesu Christi crucifixio et mors (Nosso Senhor Jesus Cristo é crucificado e morre)',
											html: '«Quando chegaram ao lugar que se chama Calvário, ali o crucificaram a ele e aos ladrões, um à direita e outro à esquerda. Jesus dizia: "Pai, perdoa-lhes, porque não sabem o que fazem ." Dividindo os seus vestidos, sortearam-nos (S. 21,19). O povo estava observando. Os príncipes dos sacerdotes ( com o povo ) o escarneciam, dizendo: "Salvou os outros, salve-se a si mesmo, se é o Cristo, o escolhido de Deus." Insultavam-no também os soldados, os quais, aproximando-se dele e oferecendo-lhe vinagre, diziam : "Se és o rei dos Judeus, salva-te a ti mesmo." Estava também por cima da sua cabeça uma inscrição : Este é o rei dos Judeus. Um daqueles ladrões, que estavam pendurados, blasfemava contra ele, dizendo: "Se és o Cristo, salva-te a ti mesmo e a nós." O outro, porém, tomando a palavra, repreendia-o, dizendo: "Nem tu temes a Deus, estando no mesmo suplício?" O outro, porém, tomando a palavra, repreendia-o, dizendo: "Nem tu temes a Deus, estando no mesmo suplício?" Nós estamos na verdade justamente, porque recebemos o castigo que merecem as nossas acções, mas este não fez nenhum mal. E dizia a Jesus: "Senhor, lembra-te de mim, quando entrares no teu reino." Jesus disse-lhe: "Em verdade te digo: Hoje estarás comigo no paraíso." Era então quase a hora, sexta, e toda a terra ficou coberta de trevas até à hora nona; escureceu-se o sol, e rasgou-se pelo meio o véu do templo. Jesus, exclamando em alta voz, disse: "Pai, nas tuas mãos encomendo o meu espírito (S. 30,6)." Dizendo isto, expirou.» (Lc  23, 33-46).',
											showCancelButton: false,
											confirmButtonColor: '#d33',
											confirmButtonText: 'Fechar'
										})
									}
								});
							}
						});
					}
				});
			}
		});
	},
	infoMisGloriosos() {
		Swal.fire({
			title: 'Resurrectio Jesu Christi (Ressurreição de Jesus Cristo)',
			html: '«No primeiro dia da semana, foram muito cedo ao sepulcro, levando os aromas que tinham preparado. Encontraram revolvida a pedra do sepulcro, Entrando, não encontraram o corpo do Senhor Jesus. Aconteceu que, estando consternadas por isso, eis que apareceram junto delas dois homens com vestidos resplandecentes. Estando elas medrosas e com os olhos no chão, disseram-lhes: "Porque buscais entre os mortos o que está vivo? Ele não está aqui, ressuscitou. Lembrai-vos do que ele vos disse, quando estava na Galileia: Importa que o Filho do homem seja entregue nas mãos de homens pecadores, seja crucificado, ressuscite ao terceiro dia."» (Lc 24, 1-7).',
			showCancelButton: false,
			confirmButtonColor: '#3085d6',
			confirmButtonText: 'Prosseguir'
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire({
					title: 'Ascensio Jesu Christi (Ascensão de Jesus Cristo)',
					html: '«O Senhor, depois que assim lhes falou, elevou-se ao céu, e foi sentar-se à direita de Deus.» (Mc 16, 19).',
					showCancelButton: false,
					confirmButtonColor: '#3085d6',
					confirmButtonText: 'Prosseguir'
				}).then((result) => {
					if (result.isConfirmed) {
						Swal.fire({
							title: 'Descensio Spiritus Sancti (Descida do Espírito Santo)',
							html: '«Quando se completaram os dias do Pentecostes, estavam todos juntos no mesmo lugar. De repente, veio do céu um estrondo, como de vento que soprava impetuoso, que encheu toda a casa onde estavam sentados. E apareceram-lhes repartidas umas como línguas de fogo, das quais pousou uma sobre cada um deles. Ficaram todos cheios do Espirito Santo e começaram a falar várias línguas, conforme o Espírito Santo lhes concedia que falassem.» (At 2, 1-4).',
							showCancelButton: false,
							confirmButtonColor: '#3085d6',
							confirmButtonText: 'Prosseguir'
						}).then((result) => {
							if (result.isConfirmed) {
								Swal.fire({
									title: 'Assumptio Mariæ (Assunção de Maria)',
									html: '«Porque lançou os olhos para a baixeza da sua serva. Portanto, eis que, de hoje em diante, todas as gerações me chamarão bem-aventurada.	Porque o Todo-poderoso fez em mim grandes coisas, o seu nome é santo.» (Lc 1, 48-49).',
									showCancelButton: false,
									confirmButtonColor: '#3085d6',
									confirmButtonText: 'Prosseguir'
								}).then((result) => {
									if (result.isConfirmed) {
										Swal.fire({
											title: 'Coronatio Dominæ Nostræ Beatæ Virginis Mariæ (Coroação de Nossa Senhora Bem Aventurada Virgem Maria)',
											html: '«Depois apareceu no céu um grande sinal: uma Mulher vestida de sol, com a lua debaixo de seus pés, e uma coroa de doze estrelas sobre a sua cabeça.» (Ap 12, 1).',
											showCancelButton: false,
											confirmButtonColor: '#d33',
											confirmButtonText: 'Fechar'
										})
									}
								});
							}
						});
					}
				});
			}
		});
	},
	buttonPronuncia(oracao) {
		base = `<br><button type="button" class="btn btn-outline-secondary button-play" onclick="ROSARIO.tocarOracao('${oracao}.mp3')"><i class="bi bi-play-fill"></i></button>`;
		return base;
	},
	tocarOracao(oracao) {
		if (this.audio) {
			this.audio.pause();
		}
		this.audio = new Audio(`assets/audio/${oracao}`);
		this.audio.play();
	},
	pronunciaLatim() {
		string = "A pronúncia do latim eclesiástico é, basicamente, uma pronúncia italiana.<br>Quando o C é seguido de um I ou um E, ele é pronunciado como se houvesse um H. Exemplo: Crucifíxus é pronunciado Cruchifíxus.<br>Os ditongos æ e oe são pronunciados somente como um e aberto. Exemplo: Cáelum é pronunciado Chelum.<br>O G é pronunciado como dj. Exemplo: Regina é pronunciada como Redjina.<br> O ditongo ti é pronunciado como ci (sem o h). Exemplo: Tentatiónem é pronunciada como tentaciónem.";
		Swal.fire('Como pronunciar o latim', string);
	},
	oferecimentoTerco() {
		string = "Uno-me a todos os santos que estão no Céu, a todos os justos que estão sobre a Terra, a todas as almas fiéis que estão neste lugar. Uno-me a Vós, meu Jesus, para louvar dignamente Vossa Santa Mãe, e louvar-Vos a Vós, nela e por Ela. Renuncio a todas as distrações que me vierem durante este Rosário, que quero recitar com modéstia, atenção e devoção, como se fosse o último da minha vida.<br>Nós Vos oferecemos, Trindade Santíssima, este Credo, para honrar os mistérios todos de nossa Fé; este Pater (Pai Nosso) e estas três Ave-Marias, para honrar a unidade de vossa essência e a trindade de vossas pessoas. Pedimo-Vos uma fé viva, uma esperança firme e uma caridade ardente. Assim seja.";
		Swal.fire('Oferecimento do terço', string);
	},
	oferecimentoTercoDominicano(lingua) {
		if (lingua === 'latim') {
			string = "<i class=\"text-danger\">Fazendo o sinal da cruz:</i><br>In nómine Pátris, <span class=\"text-danger\">+</span> et Fílii, et Spíritus Sáncti. Amen.<br><br><span class=\"text-danger\">V:</span> Ave Maria, grátia plena: Dóminus tecum.<br><span class=\"text-danger\">R:</span> Benedicta tu in mulieribus, et benedictus fructus ventris tui, lesus.<br><br><i class=\"text-danger\">Depois, traçando uma cruz sob seus lábios com o polegar direito:</i><br><span class=\"text-danger\">V:</span> Dómine, <span class=\"text-danger\">+</span> lábia mea apéries.<br><span class=\"text-danger\">R:</span> Et os meum annuntiabit laudem tuam.<br><br><i class=\"text-danger\">Fazendo o sinal da cruz:</i><br><span class=\"text-danger\">V:</span> Deus, <span class=\"text-danger\">+</span> in adiutorium meum inténde.<br><span class=\"text-danger\">R:</span> Dómine, ad adiuvándum me festína.<br><br><i class=\"text-danger\">Curvando-se profundamente:</i><br><span class=\"text-danger\">V:</span> Glória Patri, et Filio, et Spirítui Sancto.<br><span class=\"text-danger\">R:</span> Sicut erat in princípio, et nunc, et semper, et in sæcula sæculórum.<br>Amen. (Alleluia.<span class=\"text-danger\">*</span>)<br><br><i class=\"text-danger\">*Da Septuagésima até a Páscoa, ao invés de \"Alleluia\", diga:</i><br>Laus tibi, Dómine, Rex ætérnæ glóriæ.";
		} else {
			string = "<i class=\"text-danger\">Fazendo o sinal da cruz:</i><br>Em nome do Pai, <span class=\"text-danger\">+</span> e do Filho, e do Espírito Santo. Amém.<br><br><span class=\"text-danger\">V:</span> Ave Maria, cheia de graça: o Senhor é convosco.<br><span class=\"text-danger\">R:</span> Bendita sois vós entre as mulheres, e bendito é o fruto do vosso ventre, Jesus.<br><br><i class=\"text-danger\">Depois, traçando uma cruz sob seus lábios com o polegar direito:</i><br><span class=\"text-danger\">V:</span> Abri, Senhor, <span class=\"text-danger\">+</span> os meus lábios.<br><span class=\"text-danger\">R:</span> E a minha boca anunciará o vosso louvor.<br><br><i class=\"text-danger\">Fazendo o sinal da cruz:</i><br><span class=\"text-danger\">V:</span> Deus, <span class=\"text-danger\">+</span> vinde em meu auxílio.<br><span class=\"text-danger\">R:</span> Senhor, apressai-Vos em socorrer-me.<br><br><i class=\"text-danger\">Curvando-se profundamente:</i><br><span class=\"text-danger\">V:</span> Glória ao Pai, e ao Filho e ao Espírito Santo.<br><span class=\"text-danger\">R:</span> Assim como era no princípio, agora e sempre, e por todos os séculos dos séculos. Amém.<br> Amém. (Alleluia.<span class=\"text-danger\">*</span>)<br><br><i class=\"text-danger\">*Da Septuagésima até a Páscoa, ao invés de \"Alleluia\", diga:</i><br>Louvado sejais, ó Senhor, Rei da glória eterna.";
		}
		Swal.fire('Oferecimento do terço (dominicano)', string);
	},
	primeirasAveMarias() {
		string = "Louvemos a Maria, Filha bem amada do Pai Eterno. <a href=\"javascript:void(0)\" onclick=\"ROSARIO.aveMaria('latim')\">Ave Maria</a>...<br>Louvemos a Maria, Mãe admirável de Deus Filho. <a href=\"javascript:void(0)\" onclick=\"ROSARIO.aveMaria('latim')\">Ave Maria</a>...<br>Esposa fidelíssima de Deus Espírito Santo. <a href=\"javascript:void(0)\" onclick=\"ROSARIO.aveMaria('latim')\">Ave Maria</a>...";
		Swal.fire('Três primeiras Ave-Marias', string);
	},
	oferecimentoMisteriosGozosos() {
		string = "Nós vos oferecemos, Senhor Jesus, esta primeira dezena, em honra a vossa Encarnação no seio de Maria; e vos pedimos, por esse mistério, e por sua intercessão uma profunda humildade. Assim seja.<br>Nós vos oferecemos, Senhor Jesus, esta segunda dezena, em honra da visitação de vossa santa Mãe à sua prima santa Isabel e da santificação de São João Batista; e vos pedimos, por esse mistério e pela intercessão de vossa Mãe Santíssima, a caridade para com o nosso próximo. Assim seja.<br>Nós vos oferecemos, Senhor Jesus, esta terceira dezena, em honra ao vosso nascimento no estábulo de Belém; e vos pedimos, por este mistério e pela intercessão de vossa Mãe Santíssima, o desapego dos bens terrenos e ao amor a pobreza. Assim seja.<br>Nós vos oferecemos, Senhor Jesus, esta quarta dezena, em honra a vossa apresentação ao templo, e da purificação de Maria; e vos pedimos, por este mistério e por sua intercessão, uma grande pureza de corpo de alma. Assim seja.<br>Nós vos oferecemos, Senhor Jesus, esta quinta dezena, em honra ao vosso reencontro por Maria; e vos pedimos, por este mistério; e por sua intercessão, a verdadeira sabedoria.";
		Swal.fire('Oferecimento dos Mistérios Gozosos', string);
	},
	oferecimentoMisteriosDolorosos() {
		string = "Nós vos oferecemos, Senhor Jesus, esta primeira/sexta dezena, em honra a vossa agonia mortal no Jardim das Oliveiras; e vos pedimos, por este mistério e pela intercessão de vossa Mãe Santíssima, a contrição de nossos pecados. Assim seja.<br>Nós vos oferecemos, Senhor Jesus, esta segunda/sétima dezena, em honra a vossa sangrenta flagelação; e vos pedimos, por este mistério e pela intercessão de vossa Mãe santíssima, a mortificação de nossos sentidos. Assim seja.<br>Nós vos oferecemos, Senhor Jesus, esta terceira/oitava dezena, em honra de vossa coroação de espinhos; e vos pedimos por este mistério e pela intercessão de vossa Mãe Santíssima, o desprezo do mundo. Assim seja.<br>Nós vos oferecemos, Senhor Jesus, esta quarto/nona dezena, em honra do carregamento da Cruz; e vos pedimos, por este mistério e pela intercessão de vossa Mãe Santíssima, a paciência em todas as nossas cruzes. Assim seja.<br>Nós vos oferecemos, Senhor Jesus, esta quinto/décima dezena, em honra a vossa crucificação e morte ignominiosa sobre o calvário; e vos pedimos por este mistério e pela intercessão de vossa Mãe Santíssima, a conversão dos pecadores, a perseverança dos justos e o alívio das almas do purgatório. Assim seja.";
		Swal.fire('Oferecimento dos Mistérios Dolorosos', string);
	},
	oferecimentoMisteriosGloriosos() {
		string = "Nós vos oferecemos, Senhor Jesus, esta primeira/undécima dezena, em honra a vossa ressurreição gloriosa; e vos pedimos, por este mistério e pela intercessão de vossa Mãe Santíssima, o amor a Deus e o fervor ao vosso serviço. Assim seja.<br>Nós vos oferecemos, Senhor Jesus, esta segunda/duodécima dezena, em honra a vossa triunfante ascensão; e vos pedimos, por este mistério e pela intercessão de vossa Mãe Santíssima, um ardente desejo do céu, nossa cara pátria. Assim seja.<br>Nós vos oferecemos, Senhor Jesus, esta terceira/décima terceira dezena, em honra do mistério de Pentecostes; e vos pedimos, por este mistério e pela intercessão de vossa Mãe Santíssima, a descida do Espírito Santo em nossas almas. Assim seja.<br>Nós vos oferecemos, Senhor Jesus, esta quarta/décima quarta dezena, em honra da ressurreição e triunfal assunção de vossa Mãe ao céu; e vos pedimos, por este mistério e por sua intercessão, uma terna devoção a tão boa mãe. Assim seja.<br>Nós vos oferecemos, Senhor Jesus esta quinta/décima quinta dezena, em honra da coroação gloriosa de vossa Mãe Santíssima no céu; e vos pedimos, por este mistério e por sua intercessão, a perseverança na graça e a coroa da glória. Assim seja.";
		Swal.fire('Oferecimento dos Mistérios Gloriosos', string);
	},
	sinalDaCruz(lingua) {
		if (lingua === 'latim') {
			string = "In nómine Pátris <span class=\"text-danger\">+</span>, et Fílii, et Spíritus Sáncti. Amen." + this.buttonPronuncia('signum_crucis');
		} else {
			string = "Em nome do Pai <span class=\"text-danger\">+</span>, do Filho e do Espírito Santo. Amém.";
		}
		Swal.fire('Sinal da cruz', string);
	},
	credo(lingua) {
		if (lingua === 'latim') {
			string = "Credo in Déum Patrem omnipoténtem,<br>Creatórem cáeli et térræ.<br>Et in Iésum Chrístum, Fílium éius unícum, Dóminum nóstrum:<br>qui concéptus est de Spíritu Sáncto,<br>nátus ex María Vírgine,<br>pássus sub Póntio Piláto,<br>crucifíxus, mórtuus, et sepúltus:<br>descéndit ad ínfernos:<br>tértia die resurréxit a mórtuis:<br>ascéndit ad cáelos:<br>sédet ad déxteram Déi Pátris omnipoténtis:<br>índe ventúrus est iudicáre vívos et mórtuos.<br>Crédo in Spíritum Sánctum,<br>sánctam Ecclésiam Cathólicam,<br>Sanctórum Communiónem,<br>remissiónem peccatórum,<br>cárnis resurrectiónem,<br>vítam ætérnam.<br>Amen." + this.buttonPronuncia('credo');
		} else {
			string = "Creio em Deus Pai Todo-Poderoso,<br>criador do céu e da terra.<br>E em Jesus Cristo, seu único Filho Nosso Senhor,<br>o qual foi concebido pelo poder do Espírito Santo,<br>nasceu de Maria Virgem,<br>padeceu sob Pôncio Pilatus,<br>foi crucificado, morto e sepultado,<br>desceu aos infernos,<br>ao terceiro dia ressurgiu dos mortos,<br>subiu ao Céu, está sentado à direita de Deus Pai todo-poderoso,<br>de onde há de vir a julgar os vivos e mortos.<br>Creio no Espírito Santo.<br>Na Santa Igreja Católica,<br>na comunhão dos santos,<br>na remissão dos pecados,<br>na ressurreição da carne,<br>na vida eterna.<br>Amém.";
		}
		Swal.fire('Credo', string);
	},
	paiNosso(lingua) {
		if (lingua === 'latim') {
			string = "Pater Nóster,<br>Qui es in cælis,<br>sanctificetur nómen ttum.<br>Advéniat regnum tuum,<br>fiat volúntus tua,<br>sicut in cælo et in terra.<br>Panem nostrum quotidianum da nobis hodie,<br>et dimitte nobis debita nostra,<br>sicut et nos dimittimus debitoribus nostris.<br>Et ne nos indúcas in tentationem:<br>sed libera nos a malo.<br>Amen." + this.buttonPronuncia('pater_noster');
		} else {
			string = "Pai Nosso que estais no céu,<br>Santificado seja o vosso nome.<br>Venha a nós o vosso reino.<br>Seja feita a vossa vontade, assim na terra como no Céu.<br>O pão nosso de cada dia nos dai hoje.<br>Perdoai-nos as nossas dívidas assim como nós perdoamos aos nossos devedores.<br>E não nos deixeis cair em tentação.<br>Mas livrai-nos do mal.<br>Amém.";
		}
		Swal.fire('Pai Nosso', string);
	},
	gloria(lingua) {
		if (lingua === 'latim') {
			string = "Glória Pátri, et Fílio, et Spirítui Sáncto. Sícut érat in princípio, et nunc, et sémper, et in sáecula sæculórum. Amen.<br>O (mi) Bóne Iésu, líbera nos a peccatís nóstris; líbera nos ab ígnibus gehénnæ; perdúc in paradísum ómnes animás præsértim eas quæ plus misericórdia tua indígent!" + this.buttonPronuncia('gloria');
		} else {
			string = "Gloria ao Pai, ao Filho e ao Espírito Santo, assim como era no princípio, agora e sempre e por todos os séculos dos séculos, Amém.<br>Ó Meu Jesus perdoai-nos, livrai-nos do fogo do inferno, levai as almas todas para o céu, principalmente as que mais precisarem.";
		}
		Swal.fire('Glória ao Pai e Ó Meu Jesus', string);
	},
	aveMaria(lingua) {
		if (lingua === 'latim') {
			string = "Ave Maria, grátia pléna, Dóminus técum.<br>Benedícta tu in muliéribus, et benedíctus frúctus véntris túi, Iésus.<br>Sáncta María, Máter Déi, óra pro nóbis peccatóribus, nunc, et in hóra mórtis nóstræ.<br>Amen." + this.buttonPronuncia('ave_maria');
		} else {
			string = "Ave Maria, cheia de graça, o Senhor é convosco, bendita sois vós entre as mulheres e bendito é o fruto do vosso ventre, Jesus. <br>Santa Maria, Mãe de Deus, rogai por nós pecadores, agora e na hora da nossa morte.<br>Ámen.";
		}
		Swal.fire('Ave Maria', string);
	},
	ladainha(lingua) {
		if (lingua === 'latim') {
			string = "Kyrie, eleison.<br>Christe, eleison.<br>Kyrie, eleison.<br><br>Christe, audi nos.<br>Christe, exaudi nos.<br>Pater de coelis Deus,<br>miserere nobis.<br>Fili, redentor mundi Deus,<br>miserere nobis.<br>Spiritus sancte, Deus,<br>miserere nobis.<br>Sancta Trinitas, unus Deus,<br>miserere nobis.<br><br>Sancta Maria,<br>ora pro nobis.<br>Sancta Dei Genetrix,<br>ora pro nobis.<br>Sancta Virgo Virginum,<br>ora pro nobis.<br>Mater Christi,<br>ora pro nobis.<br>Mater divinæ gratiæ,<br>ora pro nobis.<br>Mater purissima,<br>ora pro nobis.<br>Mater castissima,<br>ora pro nobis.<br>Mater inviolata,<br>ora pro nobis.<br>Mater intemerata,<br>ora pro nobis.<br>Mater amabilis,<br>ora pro nobis.<br>Mater admirabilis,<br>ora pro nobis.<br>Mater boni consilii,<br>ora pro nobis.<br>Mater Creatoris,<br>ora pro nobis.<br>Mater Salvatoris,<br>ora pro nobis.<br>Virgo prudentissima,<br>ora pro nobis.<br>Virgo veneranda,<br>ora pro nobis.<br>Virgo prædicanda,<br>ora pro nobis.<br>Virgo potens,<br>ora pro nobis.<br>Virgo clemens,<br>ora pro nobis.<br>Virgo fidelis,<br>ora pro nobis.<br>Speculum justitiæ,<br>ora pro nobis.<br>Sedes sapientiæ,<br>ora pro nobis.<br>Causa nostræ lætitiæ,<br>ora pro nobis.<br>Vas spirituale,<br>ora pro nobis.<br>Vas honorabile,<br>ora pro nobis.<br>Vas insigne devotionis,<br>ora pro nobis.<br>Rosa mistica,<br>ora pro nobis.<br>Turris Davidica,<br>ora pro nobis.<br>Turris eburnea,<br>ora pro nobis.<br>Domus aurea,<br>ora pro nobis.<br>Foederis arca,<br>ora pro nobis.<br>Janua coeli,<br>ora pro nobis.<br>Stella matutina,<br>ora pro nobis.<br>Salus infirmorum,<br>ora pro nobis.<br>Refugium peccatorum,<br>ora pro nobis.<br>Consolatrix afflictorum,<br>ora pro nobis.<br>Auxilium Christianorum,<br>ora pro nobis.<br>Regina Angelorum,<br>ora pro nobis.<br>Regina Patriarcharum,<br>ora pro nobis.<br>Regina Prophetarum,<br>ora pro nobis.<br>Regina Apostolorum,<br>ora pro nobis.<br>Regina Martyrum,<br>ora pro nobis.<br>Regina Confessorum,<br>ora pro nobis.<br>Regina Virginum,<br>ora pro nobis.<br>Regina Sanctorum ominum,<br>ora pro nobis.<br>Regina sine labia originali concepta,<br>ora pro nobis.<br>Regina in cælum assumpta,<br>ora pro nobis.<br>Regina sacratissimi Rosarii,<br>ora pro nobis.<br>Regina pacis,<br>ora pro nobis.<br><br>Agnus Dei, qui tollis peccata mundi,<br>parce nobis, Domine.<br>Agnus Dei, qui tollis peccata mundi,<br>exaudi nobis, Domine.<br>Agnus Dei, qui tollis peccata mundi,<br>miserere nobis, Domine.<br><br>℣. Ora pro nobis, Sancta Dei Genetrix.<br>℟. Ut digni efficiamur promissionibus Christi.<br><br>Oremus: Concede nos famulos tuos, quæsumus, Domine Deus, perpetua mentis et corporis sanitate gaudere: et gloriosa beatæ Mariæ semper Virginis intercessione, a presenti liberari tristitia, et æterna lætitia. Per Christum Dominum Nostrum. Amen.";
		} else {
			string = "Senhor, tende piedade de nós.<br>Jesus Cristo, tende piedade de nós.<br>Senhor, tende piedade de nós.<br><br>Cristo, escutai-nos.<br>Cristo, atendei-nos.<br>Pai celeste, que sois Deus,<br>tende piedade de nós.<br>Filho, redentor do mundo, que sois Deus,<br>tende piedade de nós.<br>Espírito Santo, que sois Deus,<br>tende piedade de nós.<br>Santíssima Trindade, que sois um só Deus,<br>tende piedade de nós.<br><br>Santa Maria,<br>rogai por nós.<br>Santa Virgem das virgens,<br>rogai por nós.<br>Mãe do Cristo,<br>rogai por nós.<br>Mãe da divina graça,<br>rogai por nós.<br>Mãe puríssima,<br>rogai por nós.<br>Mãe castíssima,<br>rogai por nós.<br>Mãe imaculada,<br>rogai por nós.<br>Mãe intemerata,<br>rogai por nós.<br>Mãe amável,<br>rogai por nós.<br>Mãe admirável,<br>rogai por nós.<br>Mãe do bom conselho,<br>rogai por nós.<br>Mãe do Criador,<br>rogai por nós.<br>Mãe do Salvador,<br>rogai por nós.<br>Virgem prudentíssima,<br>rogai por nós.<br>Virgem venerável,<br>rogai por nós.<br>Virgem louvável,<br>rogai por nós.<br>Virgem poderosa,<br>rogai por nós.<br>Virgem clemente,<br>rogai por nós.<br>Virgem fiel,<br>rogai por nós.<br>Espelho de justiça,<br>rogai por nós.<br>Sede da sabedoria,<br>rogai por nós.<br>Causa da nossa alegria,<br>rogai por nós.<br>Vaso espiritual,<br>rogai por nós.<br>Vaso digno de honra,<br>rogai por nós.<br>Vaso insigne de devoção,<br>rogai por nós.<br>Rosa mística,<br>rogai por nós.<br>Torre de Davi,<br>rogai por nós.<br>Torre de marfim,<br>rogai por nós.<br>Casa de ouro,<br>rogai por nós.<br>Arca de aliança,<br>rogai por nós.<br>Porta do Céu,<br>rogai por nós.<br>Estrela da manhã,<br>rogai por nós.<br>Saúde dos enfermos,<br>rogai por nós.<br>Refúgio dos pecadores,<br>rogai por nós.<br>Consoladora dos aflitos,<br>rogai por nós.<br>Consoladora dos aflitos,<br>rogai por nós.<br>Auxílio dos cristãos,<br>rogai por nós.<br>Rainha dos anjos,<br>rogai por nós.<br>Rainha dos patriarcas,<br>rogai por nós.<br>Rainha dos profetas,<br>rogai por nós.<br>Rainha dos apóstolos,<br>rogai por nós.<br>Rainha dos mártires,<br>rogai por nós.<br>Rainha dos confessores,<br>rogai por nós.<br>Rainha das virgens,<br>rogai por nós.<br>Rainha de todos os santos,<br>rogai por nós.<br>Rainha concebida sem pecado original,<br>rogai por nós.<br>Rainha do Sacratíssimo Rosário,<br>rogai por nós.<br>Rainha assunta ao céu,<br>rogai por nós.<br>Rainha do Sacratíssimo Rosário,<br>rogai por nós.<br>Rainha da paz,<br>rogai por nós.<br><br>Cordeiro de Deus, que tirais os pecados do mundo,<br>perdoai-nos Senhor.<br>Cordeiro de Deus, que tirais os pecados do mundo,<br>ouvi-nos Senhor.<br>Cordeiro de Deus, que tirais os pecados do mundo,<br>tende piedade de nós.<br><br>℣. Rogai por nós, santa Mãe de Deus.<br>℟. Para que sejamos dignos das promessas de Cristo.<br><br>Oremos: Senhor Deus, nós vos suplicamos que concedais aos vossos servos perpétua saúde de alma e de corpo: e que, pela gloriosa intercessão da bem-aventurada sempre Virgem Maria, sejamos livres da tristeza do século e gozemos das eternas alegrias. Por Cristo Nosso Senhor. Amém.";
		}
		Swal.fire('Ladainha de Nossa Senhora', string);
	},
	salveRainha(lingua) {
		if (lingua === 'latim') {
			string = "Salve Regina, Máter misericórdiæ!<br>Víta, dulcédo, et spes nóstra, sálve.<br>Ad te clamámus, éxsules filii Hévæ.<br>Ad te suspirámus,<br>geméntes et fléntes in hac lacrimárum válle.<br>Éia érgo, Advocáta nóstra,<br>íllos túos misericórdes óculos ad nos convérte.<br>Et Iésum, benedíctum frúctum véntris túi,<br>nóbis post hoc exsílium osténde.<br>O clémens, O pía, O dúlcis Vírgo María!<br>℣. Óra pro nóbis, Sáncta Déi Génetrix.<br>℟. Ut dígni efficiámur promissiónibus Chrísti.<br>Amen." + this.buttonPronuncia('salve_regina');
		} else {
			string = "Salve Rainha, Mãe de misericórdia,<br>vida, doçura e esperança nossa, Salve!<br>A vós bradamos os degredados filhos de Eva.<br>A vós suspiramos, gemendo e chorando neste vale de lágrimas.<br>Eia pois advogada nossa, esses vossos olhos misericordiosos a nós volvei.<br>E depois deste desterro, mostrai-nos Jesus, bendito fruto de vosso ventre.<br>Ó clemente! Ó piedosa! Ó doce sempre Virgem Maria!<br>℣. Rogai por nós Santa Mãe de Deus.<br>℟. Para que sejamos dignos das promessas de Cristo.<br>Amém.";
		}
		Swal.fire('Salve Rainha', string);
	},
	coletaFinalDominicana(lingua) {
		if (lingua === 'latim') {
			string = "Orémus. Deus, cuius Unigénitus per vitam, mortem et resurrectiónem suam nobis salútis ætérnæ præmia comparávit: concéde, quæsumus; ut, hæc mystéria sacratíssimo beátæ Mariæ Virginis Rosário recoléntes, et imitémur quod cóntinent, et quod promittunt assequámur. Per eúndem Christum Dóminum nostrum. Amen.<br><i class=\"text-danger\">Faça o sinal da cruz.</i>";
		} else {
			string = "Oremos. Deus, cujo Filho Unigênito, por sua vida, morte e ressurreição, nos obteve o prêmio da salvação eterna, concedei-nos, nós Vô-lo pedimos que, meditando estes mistérios do Sacratíssimo Rosário da Bem-Aventurada Virgem Maria, imitemos o que contém e consigamos o que prometem. Pelo mesmo Cristo, Senhor Nosso.<br><i class=\"text-danger\">Faça o sinal da cruz.</i>";
		}
		Swal.fire('Coleta final (dominicana)', string);
	}
}

ROSARIO.startup();
Waves.attach('.btn-wave');
Waves.init();

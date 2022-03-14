// Feito com amor e carinho por Bruno Bonavigo em 2022.
// Viva Cristo Rei! Viva Maria Rainha!

const ROSARIO = {
	infoRos() {
		Swal.fire('O que é o Rosário?', 'O Santo Rosário é uma prática religiosa de devoção mariana muito difundida entre os católicos. Ele consiste no uso de uma corrente com contas ou nós e a contemplação de determinadas passagens da vida de Jesus e de sua mãe, Nossa Senhora. São rezadas várias orações, principalmente a Ave-Maria, que no Rosário completo é rezada cento e cinquenta vezes, contemplando os quinze mistérios. Você também pode seguir os dias dos mistérios e rezar cinco mistérios e cinquenta Ave-Marias.');
	},
	infoDiasTer() {
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
			title: 'Prímum mystérium gaudiósum: Annuntiatiónem Beátæ Maríæ Vírginis (Primeiro Mistério Gozoso: Anunciação a Maria)',
			html: '«No sexto mês, o anjo Gabriel foi enviado por Deus a uma cidade da Galiléia, chamada Nazaré,  a uma virgem desposada com um homem que se chamava José, da casa de Davi e o nome da virgem era Maria» (Lc 1, 26-27).',
			showCancelButton: false,
			confirmButtonColor: '#3085d6',
			confirmButtonText: 'Prosseguir'
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire({
					title: 'Secúndum mystérium gaudiósum: Visitatiónem Beátæ Maríæ Vírginis (Segundo Mistério Gozoso: Visitação de Nossa Senhora a sua prima Isabel)',
					html: '«Naqueles dias, Maria se levantou e foi às pressas às montanhas, a uma cidade de Judá. Entrou em casa de Zacarias e saudou Isabel. Ora, apenas Isabel ouviu a saudação de Maria, a criança estremeceu no seu seio; e Isabel ficou cheia do Espírito Santo. E exclamou em alta voz: "Bendita és tu entre as mulheres e bendito é o fruto do teu ventre"» (Lc 1, 39-42).',
					showCancelButton: false,
					confirmButtonColor: '#3085d6',
					confirmButtonText: 'Prosseguir'
				}).then((result) => {
					if (result.isConfirmed) {
						Swal.fire({
							title: 'Tértium mystérium gaudiósum: Nativitátem Dómini nostri Iesu Christi (Terceiro Mistério Gozoso: Nascimento de Jesus)',
							html: '«Naqueles tempos apareceu um decreto de César Augusto, ordenando o recenseamento de toda a terra. Este recenseamento foi feito antes do governo de Quirino, na Síria. Todos iam alistar-se, cada um na sua cidade.<br>Também José subiu da Galiléia, da cidade de Nazaré, à Judéia, à Cidade de Davi, chamada Belém, porque era da casa e família de Davi, para se alistar com a sua esposa Maria, que estava grávida. Estando eles ali, completaram-se os dias dela.<br>E deu à luz seu filho primogênito, e, envolvendo-o em faixas, reclinou-o num presépio; porque não havia lugar para eles na hospedaria» (Lc 2,1-7).',
							showCancelButton: false,
							confirmButtonColor: '#3085d6',
							confirmButtonText: 'Prosseguir'
						}).then((result) => {
							if (result.isConfirmed) {
								Swal.fire({
									title: 'Quartum mystérium gaudiósum Oblatiónem Dómini nostri Iesu Christi (Quarto Mistério Gozoso: Apresentação do Menino Jesus no Templo)',
									html: '«Completados que foram os oito dias para ser circuncidado o menino, foi-lhe posto o nome de Jesus, como lhe tinha chamado o anjo, antes de ser concebido no seio materno. Concluídos os dias da sua purificação segundo a Lei de Moisés, levaram-no a Jerusalém para o apresentar ao Senhor, conforme o que está escrito na lei do Senhor: Todo primogênito do sexo masculino será consagrado ao Senhor; e para oferecerem o sacrifício prescrito pela lei do Senhor, um par de rolas ou dois pombinhos.» (Lc 2, 21-24).',
									showCancelButton: false,
									confirmButtonColor: '#3085d6',
									confirmButtonText: 'Prosseguir'
								}).then((result) => {
									if (result.isConfirmed) {
										Swal.fire({
											title: 'Quintum mystérium gaudiósum: Inventiónem Dómini nostri Iesu Christi in templo (Quinto Mistério Gozoso: Perda e encontro do Menino Jesus no Templo)',
											html: '«Naqueles tempos apareceu um decreto de César Augusto, ordenando o recenseamento de toda a terra. Este recenseamento foi feito antes do governo de Quirino, na Síria. Todos iam alistar-se, cada um na sua cidade.<br>Também José subiu da Galiléia, da cidade de Nazaré, à Judéia, à Cidade de Davi, chamada Belém, porque era da casa e família de Davi, para se alistar com a sua esposa Maria, que estava grávida. Estando eles ali, completaram-se os dias dela.<br>E deu à luz seu filho primogênito, e, envolvendo-o em faixas, reclinou-o num presépio; porque não havia lugar para eles na hospedaria» (Lc 2,1-7).',
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
			title: 'Prímum mystérium dolorósum: Agóniam Dómini nostri Iesu Christi in horto (Primeiro Mistério Doloroso: Agonia de Jesus no Horto)',
			html: '«No sexto mês, o anjo Gabriel foi enviado por Deus a uma cidade da Galiléia, chamada Nazaré,  a uma virgem desposada com um homem que se chamava José, da casa de Davi e o nome da virgem era Maria» (Lc 1, 26-27).',
			showCancelButton: false,
			confirmButtonColor: '#3085d6',
			confirmButtonText: 'Prosseguir'
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire({
					title: 'Secúndum mystérium dolorósum: Flagellatiónem Dómini nostri Iesu Christi (Segundo Mistério Doloroso: Flagelação de Jesus)',
					html: '«Naqueles dias, Maria se levantou e foi às pressas às montanhas, a uma cidade de Judá. Entrou em casa de Zacarias e saudou Isabel. Ora, apenas Isabel ouviu a saudação de Maria, a criança estremeceu no seu seio; e Isabel ficou cheia do Espírito Santo. E exclamou em alta voz: "Bendita és tu entre as mulheres e bendito é o fruto do teu ventre"» (Lc 1, 39-42).',
					showCancelButton: false,
					confirmButtonColor: '#3085d6',
					confirmButtonText: 'Prosseguir'
				}).then((result) => {
					if (result.isConfirmed) {
						Swal.fire({
							title: 'Tertium mystérium dolorósum: Coronatiónem spinis Dómini nostri Iesu Christi (Terceiro Mistério Doloroso: Coroação de Espinhos)',
							html: '«Naqueles tempos apareceu um decreto de César Augusto, ordenando o recenseamento de toda a terra. Este recenseamento foi feito antes do governo de Quirino, na Síria. Todos iam alistar-se, cada um na sua cidade.<br>Também José subiu da Galiléia, da cidade de Nazaré, à Judéia, à Cidade de Davi, chamada Belém, porque era da casa e família de Davi, para se alistar com a sua esposa Maria, que estava grávida. Estando eles ali, completaram-se os dias dela.<br>E deu à luz seu filho primogênito, e, envolvendo-o em faixas, reclinou-o num presépio; porque não havia lugar para eles na hospedaria» (Lc 2,1-7).',
							showCancelButton: false,
							confirmButtonColor: '#3085d6',
							confirmButtonText: 'Prosseguir'
						}).then((result) => {
							if (result.isConfirmed) {
								Swal.fire({
									title: 'Quartum mystérium dolorósum: Bajulatiónem Crucis (Terceiro Mistério Doloroso: Coroação de Espinhos)',
									html: '«Completados que foram os oito dias para ser circuncidado o menino, foi-lhe posto o nome de Jesus, como lhe tinha chamado o anjo, antes de ser concebido no seio materno. Concluídos os dias da sua purificação segundo a Lei de Moisés, levaram-no a Jerusalém para o apresentar ao Senhor, conforme o que está escrito na lei do Senhor: Todo primogênito do sexo masculino será consagrado ao Senhor; e para oferecerem o sacrifício prescrito pela lei do Senhor, um par de rolas ou dois pombinhos.» (Lc 2, 21-24).',
									showCancelButton: false,
									confirmButtonColor: '#3085d6',
									confirmButtonText: 'Prosseguir'
								}).then((result) => {
									if (result.isConfirmed) {
										Swal.fire({
											title: 'Quintum mystérium dolorósum: Crucifixiónem Dómini nostri Iesu Christi (Quinto Mistério Doloroso: Crucifixão e morte de Jesus)',
											html: '«Naqueles tempos apareceu um decreto de César Augusto, ordenando o recenseamento de toda a terra. Este recenseamento foi feito antes do governo de Quirino, na Síria. Todos iam alistar-se, cada um na sua cidade.<br>Também José subiu da Galiléia, da cidade de Nazaré, à Judéia, à Cidade de Davi, chamada Belém, porque era da casa e família de Davi, para se alistar com a sua esposa Maria, que estava grávida. Estando eles ali, completaram-se os dias dela.<br>E deu à luz seu filho primogênito, e, envolvendo-o em faixas, reclinou-o num presépio; porque não havia lugar para eles na hospedaria» (Lc 2,1-7).',
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
			title: 'Prímum mystérium gloriósum: Resurrectiónem Dómini nostri Iesu Christi a mórtuis (Primeiro Mistério Glorioso: Ressurreição de Jesus)',
			html: '«No primeiro dia da semana, muito cedo, dirigiram-se ao sepulcro com os aromas que haviam preparado. Acharam a pedra removida longe da abertura do sepulcro. Entraram, mas não encontraram o corpo do Senhor Jesus. Não sabiam elas o que pensar, quando apareceram em frente delas dois personagens com vestes resplandecentes. Como estivessem amedrontadas e voltassem o rosto para o chão, disseram-lhes eles: "Por que buscais entre os mortos aquele que está vivo? Não está aqui, mas ressuscitou"» (Lc 24, 1-6).',
			showCancelButton: false,
			confirmButtonColor: '#3085d6',
			confirmButtonText: 'Prosseguir'
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire({
					title: 'Secúndum mystérium gloriósum: Ascensiónem Dómini nostri Iesu Christi in cáelum (Segundo Mistério Glorioso: Ascensão de Jesus ao Céu)',
					html: '«Depois que o Senhor Jesus lhes falou, foi levado ao céu e está sentado à direita de Deus» (Mc 16, 19).',
					showCancelButton: false,
					confirmButtonColor: '#3085d6',
					confirmButtonText: 'Prosseguir'
				}).then((result) => {
					if (result.isConfirmed) {
						Swal.fire({
							title: 'Tértium mystérium gloriósum: Missiónem Spíritus Sancti in discípulos (Terceiro Mistério Glorioso: Vinda do Espírito Santo sobre os Apóstolos)',
							html: '«Chegando o dia de Pentecostes, estavam todos reunidos no mesmo lugar. De repente, veio do céu um ruído, como se soprasse um vento impetuoso, e encheu toda a casa onde estavam sentados. Apareceu-lhes então uma espécie de línguas de fogo que se repartiram e pousaram sobre cada um deles. Ficaram todos cheios do Espírito Santo e começaram a falar em línguas, conforme o Espírito Santo lhes concedia que falassem» (At 2, 1-4).',
							showCancelButton: false,
							confirmButtonColor: '#3085d6',
							confirmButtonText: 'Prosseguir'
						}).then((result) => {
							if (result.isConfirmed) {
								Swal.fire({
									title: 'Quartum mystérium gloriósum: Assumptiónem Beátæ Maríæ Vírginis in cáelum (Quarto Mistério Glorioso: Assunção de Maria)',
									html: '«Por isto, desde agora, me proclamarão bem-aventurada todas as gerações, porque realizou em mim maravilhas aquele que é poderoso e cujo nome é Santo» (Lc 1, 48-49).',
									showCancelButton: false,
									confirmButtonColor: '#3085d6',
									confirmButtonText: 'Prosseguir'
								}).then((result) => {
									if (result.isConfirmed) {
										Swal.fire({
											title: 'Quintum mystérium gloriósum: Coronatiónem Beátæ Maríæ Vírginis in cáelum (Quinto Mistério Glorioso: Coroação de Maria no Céu)',
											html: '«Apareceu em seguida um grande sinal no céu: uma Mulher revestida do sol, a lua debaixo dos seus pés e na cabeça uma coroa de doze estrelas» (Ap 12, 1).',
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
	sinalDaCruz(lingua) {
		if (lingua === 'latim') {
			string = 'In nómine Pátris, et Fílii, et Spíritus Sáncti. Amen.';
		} else {
			string = "Em nome do Pai, do Filho e do Espírito Santo. Amém.";
		}
		Swal.fire('Sinal da cruz', string);
	},
	credo(lingua) {
		if (lingua === 'latim') {
			string = "Crédo in Déum Pátrem omnipoténtem,<br>Creatórem cáeli et térræ.<br>Et in Iésum Chrístum, Fílium éius unícum, Dóminum nóstrum:<br>qui concéptus est de Spíritu Sáncto,<br>nátus ex María Vírgine,<br>pássus sub Póntio Piláto,<br>crucifíxus, mórtuus, et sepúltus:<br>descéndit ad ínfernos:<br>tértia die resurréxit a mórtuis:<br>ascéndit ad cáelos:<br>sédet ad déxteram Déi Pátris omnipoténtis:<br>índe ventúrus est iudicáre vívos et mórtuos.<br>Crédo in Spíritum Sánctum,<br>sánctam Ecclésiam Cathólicam,<br>Sanctórum Communiónem,<br>remissiónem peccatórum,<br>cárnis resurrectiónem,<br>vítam ætérnam.<br>Amen.";
		} else {
			string = 'Creio em Deus Pai Todo-Poderoso,<br>criador do céu e da terra.<br>E em Jesus Cristo, seu único Filho Nosso Senhor,<br>o qual foi concebido pelo poder do Espírito Santo,<br>nasceu de Maria Virgem,<br>padeceu sob Pôncio Pilatus,<br>foi crucificado, morto e sepultado,<br>desceu aos infernos,<br>ao terceiro dia ressurgiu dos mortos,<br>subiu ao Céu, está sentado à direita de Deus Pai todo-poderoso,<br>de onde há de vir a julgar os vivos e mortos.<br>Creio no Espírito Santo.<br>Na Santa Igreja Católica,<br>na comunhão dos santos,<br>na remissão dos pecados,<br>na ressurreição da carne,<br>na vida eterna.<br>Amém.';
		}
		Swal.fire('Credo', string);
	},
	paiNosso(lingua) {
		if (lingua === 'latim') {
			string = 'Páter Nóster,<br>Qui es in cáelis,<br>sanctificétur nómen túum.<br>Advéniat régnum túum,<br>fíat volúntus túa,<br>sícut in cáelo et in térra.<br>Pánem nóstrum quotidiánum da nóbis hódie,<br>et dimítte nóbis débita nóstra,<br>sícut et nos dimíttimus debitóribus nóstris.<br>Et ne nos indúcas in tentatiónem:<br>sed líbera nos a málo.<br>Amen.';
		} else {
			string = "Pai Nosso que estais no céu,<br>Santificado seja o vosso nome.<br>Venha a nós o vosso reino.<br>Seja feita a vossa vontade, assim na terra como no Céu.<br>O pão nosso de cada dia nos dai hoje.<br>Perdoai-nos as nossas dívidas assim como nós perdoamos aos nossos devedores.<br>E não nos deixeis cair em tentação.<br>Mas livrai-nos do mal.<br>Amém.";
		}
		Swal.fire('Pai Nosso', string);
	},
	gloria(lingua) {
		if (lingua === 'latim') {
			string = 'Glória Pátri, et Fílio, et Spirítui Sáncto. Sícut érat in princípio, et nunc, et sémper, et in sáecula sæculórum. Amen.<br>O (mi) Bóne Iésu, líbera nos a peccatís nóstris; líbera nos ab ígnibus gehénnae; perdúc in paradísum ómnes animás præsértim eas quae plus misericórdia tua indígent!';
		} else {
			string = "Gloria ao Pai, ao Filho e ao Espírito Santo, assim como era no princípio, agora e sempre e por todos os séculos dos séculos, Amém.<br>Ó Meu Jesus perdoai-nos, livrai-nos do fogo do inferno, levai as almas todas para o céu, principalmente as que mais precisarem.";
		}
		Swal.fire('Glória ao Pai e Ó Meu Jesus', string);
	},
	aveMaria(lingua) {
		if (lingua === 'latim') {
			string = 'Áve María, grátia pléna, Dóminus técum.<br>Benedícta tu in muliéribus, et benedíctus frúctus véntris túi, Iésus.<br>Sáncta María, Máter Déi, óra pro nóbis peccatóribus, nunc, et in hóra mórtis nóstræ.<br>Amen.';
		} else {
			string = "Ave Maria, cheia de graça, o Senhor é convosco, bendita sois vós entre as mulheres e bendito é o fruto do vosso ventre, Jesus. <br>Santa Maria, Mãe de Deus, rogai por nós pecadores, agora e na hora da nossa morte.<br>Ámen.";
		}
		Swal.fire('Ave Maria', string);
	},
	salveRainha(lingua) {
		if (lingua === 'latim') {
			string = 'Sálve Regína, Máter misericórdiæ!<br>Víta, dulcédo, et spes nóstra, sálve.<br>Ad te clamámus, éxsules filii Hévæ.<br>Ad te suspirámus,<br>geméntes et fléntes in hac lacrimárum válle.<br>Éia érgo, Advocáta nóstra,<br>íllos túos misericórdes óculos ad nos convérte.<br>Et Iésum, benedíctum frúctum véntris túi,<br>nóbis post hoc exsílium osténde.<br>O clémens, O pía, O dúlcis Vírgo María!<br>V/. Óra pro nóbis, Sáncta Déi Génetrix.<br>R/. Ut dígni efficiámur promissiónibus Chrísti.<br>Amen.';
		} else {
			string = "Salve Rainha, Mãe de misericórdia,<br>vida, doçura e esperança nossa, Salve!<br>A vós bradamos os degredados filhos de Eva.<br>A vós suspiramos, gemendo e chorando neste vale de lágrimas.<br>Eia pois advogada nossa, esses vossos olhos misericordiosos a nós volvei.<br>E depois deste desterro, mostrai-nos Jesus, bendito fruto de vosso ventre.<br>Ó clemente! Ó piedosa! Ó doce sempre Virgem Maria!<br>V. Rogai por nós Santa Mãe de Deus.<br>R. Para que sejamos dignos das promessas de Cristo.<br>Amém.";
		}
		Swal.fire('Salve Rainha', string);
	},
	doar() {
		Swal.fire('Doação', 'Caso queria doar-me, meu PicPay é @bruno.bonavigo<br>Fiz este site sem este propósito, mas se quiser ajudar-me, seria útil, estou pensando em comprar um domínio/hospedagem para hospedar esta página e outras relacionadas ao catolicismo.');
	}
}

Waves.attach('.btn-wave');
Waves.init();
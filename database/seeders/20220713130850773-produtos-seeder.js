'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Produtos', [
                {
                        id: "1",
                        titulo: "Coleção Harry Potter - 7 volumes",
                        preco: "279.00",
                        avaliacao: "8.5",
                        descricao: "Maior fenômeno editorial de todos os tempos, com mais de 450 milhões de exemplares vendidos em 70 idiomas, a série Harry Potter chega às prateleiras em mais essa edição de colecionador. Os sete livros da saga criada por J. K. Rowling - que acompanha a jornada do adorado aprendiz de bruxo contra o maléfico Voldemort, - ganham novas capas e novas ilustrações e vêm num box exclusivo. Uma novidade capaz de conquistar os mais exigentes fãs, ávidos por novidades ligadas ao universo da saga, e também os novos leitores.",
                        img: "upload_imagem_1656369023654.png",
                        autores_id: "1",
                        tipo_id: "2",
                        generos_id: "1",
                },
                {
                        id: "2",
                        titulo: "Box Obras De George Orwell",
                        preco: "85.00",
                        avaliacao: "8.7",
                        descricao: "Considerado um dos maiores escritores do séc. XX, de forte relevância até os dias de hoje, o que pode ser comprovado pelo fato de nunca sair da lista de livros mais vendidos pelo mundo, George Orwell é autor das duas obras-primas que compõem esse box. A revolução dos bichos e 1984 foram escritos entre os últimos anos da Segunda Guerra Mundial e pouco após seu fim, e parecem ficar assustadoramente cada vez mais atual. Ao apontar os males do totalitarismo, Orwell foi tão preciso e eloquente que dessa discussão podemos extrair situações semelhantes aos dias de hoje.",
                        img: "upload_imagem_1656528344664.png",
                        autores_id: "2",
                        tipo_id: "2",
                        generos_id: "5",
                },
                {
                        id: "3",
                        titulo: "Capitães da Areia",
                        preco: "30.00",
                        avaliacao: "7",
                        descricao: "Desde o seu lançamento, em 1937, Capitães da Areia causou escândalo: inúmeros exemplares do livro foram queimados em praça pública, por determinação do Estado Novo. Ao longo de sete décadas a narrativa não perdeu viço nem atualidade, pelo contrário: a vida urbana dos meninos pobres e infratores ganhou contornos trágicos e urgentes. Várias gerações de brasileiros sofreram o impacto e a sedução desses meninos que moram num trapiche abandonado no areal do cais de Salvador, vivendo à margem das convenções sociais. Verdadeiro romance de formação, o livro nos torna íntimos de suas pequenas criaturas, cada uma delas com suas carências e suas ambições: do líder Pedro Bala ao religioso Pirulito, do ressentido e cruel Sem-Pernas ao aprendiz de cafetão Gato, do sensato Professor ao rústico sertanejo Volta Seca. Com a força envolvente da sua prosa, Jorge Amado nos aproxima desses garotos e nos contagia com seu intenso desejo de liberdade.",
                        img: "upload_imagem_1656550681379.webp",
                        autores_id: "3",
                        tipo_id: "1",
                        generos_id: "5",
                },
                {
                        id: "4",
                        titulo: "Cortiço",
                        preco: "38.00",
                        avaliacao: "7.5",
                        descricao: "Aluísio Azevedo retrata as péssimas condições de vida dos moradores dos cortiços cariocas neste romance estrelado por dois imigrantes portugueses. A linguagem rebuscada do autor naturalista do século XIX é traduzida para os dias de hoje por meio das notas comentadas de Fátima Mesquita.",
                        img: "upload_imagem_1656550784791.webp",
                        autores_id: "4",
                        tipo_id: "1",
                        generos_id: "5",
                },
                {
                        id: "5",
                        titulo: "A Menina que Roubava Livros",
                        preco: "33.00",
                        avaliacao: "8.2",
                        descricao: "Traços de uma sobrevivente: a mãe comunista, perseguida pelo nazismo, envia Liesel e o irmão para o subúrbio pobre de uma cidade alemã, onde um casal se dispõe a adotá-los por dinheiro. O garoto morre no trajeto e é enterrado por um coveiro que deixa cair um livro na neve. É o primeiro de uma série que a menina vai surrupiar ao longo dos anos. O único vínculo com a família é esta obra, que ela ainda não sabe ler.",
                        img: "upload_imagem_1656550912853.webp",
                        autores_id: "5",
                        tipo_id: "3",
                        generos_id: "2",
                },
                {
                        id: "6",
                        titulo: "E não sobrou nenhum",
                        preco: "37.25",
                        avaliacao: "9.1",
                        descricao: "Uma ilha misteriosa, um poema infantil, dez soldadinhos de porcelana e muito suspense são os ingredientes com que Agatha Christie constrói seu romance mais importante. Na ilha do Soldado, antiga propriedade de um milionário norte-americano, dez pessoas sem nenhuma ligação aparente são confrontadas por uma voz misteriosa com fatos marcantes de seus passados.",
                        img: "upload_imagem_1656551051378.webp",
                        autores_id: "6",
                        tipo_id: "3",
                        generos_id: "2",
                },
                {
                        id: "9",
                        titulo: "Essa gente",
                        preco: "27.80",
                        avaliacao: "8.6",
                        descricao: "Há alguns pontos de contato entre Chico Buarque e o protagonista de Essa gente, seu primeiro livro após a consagração do prêmio Camões. O escritor Manuel Duarte tem esse sobrenome de perfil vocálico idêntico, e gosta de bater perna nos arredores do Leblon. Contudo, o leitor logo descobre que isso conduz a um dos muitos becos sem saída da trama. Autor de um romance histórico que se tornou best-seller nos anos 1990, Duarte passa por um deserto criativo e emocional, tendo por pano de fundo um Rio de Janeiro que sangra e estrebucha sob o flagelo de feridas sociais finalmente supuradas, ostensivas. Com estrutura de diário, a reflexão sobre a linguagem ― marca da ficção buarquiana ― parte agora do apontamento rápido, artimanha para auxiliar a memória quando for possível dar sentido ao tumulto do presente. Ao seu melhor estilo, Chico Buarque borra as fronteiras entre vida, imaginação, sonho e delírio, e constrói uma narrativa engenhosa, em cujas entrelinhas se descortinam as contradições de um país fraturado.",
                        img: "upload_imagem_1657371462071.webp",
                        autores_id: "7",
                        tipo_id: "1",
                        generos_id: "9",
                },
                {
                        id: "10",
                        titulo: "Macunaíma",
                        preco: "25.20",
                        avaliacao: "7.4",
                        descricao: "Macunaíma é um título consagrado da Literatura Brasileira e ícone do Modernismo do século XX. Escrito em pouquíssimos dias por seu autor, Mário de Andrade, o livro conta a história do famoso “herói sem caráter” que nasceu na floresta e percorre o país atrás de seu amuleto, a muiraquitã. Conduzidos por uma narrativa repleta de oralidade, o autor nos revela as mil e uma peripécias do protagonista num Brasil mitológico e folclórico.",
                        img: "upload_imagem_1657371562293.webp",
                        autores_id: "9",
                        tipo_id: "1",
                        generos_id: "5",
                },
                {
                        id: "11",
                        titulo: "O sol na cabeça: Contos",
                        preco: "30.00",
                        avaliacao: "8.1",
                        descricao: "Em O sol na cabeça, Geovani Martins narra a infância e a adolescência de garotos para quem às angústias e dificuldades inerentes à idade soma-se a violência de crescer no lado menos favorecido da &#34;Cidade partida&#34;, o Rio de Janeiro das primeiras décadas do século XXI.",
                        img: "upload_imagem_1657371630008.webp",
                        autores_id: "10",
                        tipo_id: "1",
                        generos_id: "12",
                },
                {
                        id: "12",
                        titulo: "Rita Lee: uma autobiografia",
                        preco: "41.90",
                        avaliacao: "7.6",
                        descricao: "“Do primeiro disco voador ao último porre, Rita é consistente. Corajosa. Sem culpa nenhuma. Tanto que, ao ler o livro, várias vezes temos a sensação de estar diante de uma bio não autorizada, tamanha a honestidade nas histórias. A infância e os primeiros passos na vida artística; sua prisão em 1976; o encontro de almas com Roberto de Carvalho; o nascimento dos filhos, das músicas e dos discos clássicos; os tropeços e as glórias. Está tudo lá. E você pode ter certeza: essa é a obra mais pessoal que ela poderia entregar de presente para nós. Rita cuidou de tudo. Escreveu, escolheu as fotos e criou as legendas e até decidiu a ordem das imagens , fez a capa, pensou na contracapa, nas orelhas... Entregou o livro assim: prontinho. Sua essência está nessas páginas. E é exatamente desse modo que a Globo Livros coloca a autobiografia da nossa estrela maior no mercado.” Guilherme Samora é jornalista e estudioso do legado cultural de Rita Lee.",
                        img: "upload_imagem_1657371691726.webp",
                        autores_id: "11",
                        tipo_id: "1",
                        generos_id: "13",
                },
                {
                        id: "13",
                        titulo: "Sertões",
                        preco: "15.99",
                        avaliacao: "7.9",
                        descricao: "Os sertões é dividido em seções. A primeira parte, &#39;&#39;A terra&#39;&#39;, são considerações técnicas e científicas a respeito do solo, do clima e do espaço geográfico do sertão baiano.A segunda parte, &#39;&#39;O homem&#39;&#39;, traz características antropológicas a respeito do sertanejo, com todos os seus conflitos sociais, políticos e psicológicos. A última parte, &#39;&#39;A luta&#39;&#39; narra a Guerra de Canudos desde o início. A verossimilhança da obra é marcada pela rica apresentação de características do espaço, tempo, personagens, como Antônio Conselheiro, e contexto histórico pelo narrador-observador.",
                        img: "upload_imagem_1657371760016.jpg",
                        autores_id: "12",
                        tipo_id: "1",
                        generos_id: "5",
                },
                {
                        id: "14",
                        titulo: "Textos cruéis demais para serem lidos rapidamente",
                        preco: "25.98",
                        avaliacao: "9.2",
                        descricao: "Indo contra a tendência dos textos curtos e superficiais que são postados nas redes sociais, o coletivo literário Textos cruéis demais para serem lidos rapidamente (TCD) passou a produzir e compartilhar um conteúdo extenso, profundo e extremamente poético em suas páginas no Facebook e no Instagram. Com seus escritos e ilustrações, eles acabaram atingindo um público muito maior do que o esperado, nos mostrando como, apesar da crescente agilidade que nossa comunicação exige, ainda precisamos de tempo para digerir e entender nossas complexas relações humanas.",
                        img: "upload_imagem_1657371870688.webp",
                        autores_id: "13",
                        tipo_id: "1",
                        generos_id: "9",
                },
                {
                        id: "15",
                        titulo: "Triste fim de Policarpo Quaresma",
                        preco: "29.31",
                        avaliacao: "7.3",
                        descricao: "A coleção Leitura Literária traz ao leitor mais uma consagrada obra da Literatura Brasileira: Triste fim de Policarpo Quaresma, de Lima Barreto. Considerado um dos mais importantes romances brasileiros do século XX, a obra apresenta a história do sofrido nacionalista durante o início da República brasileira. A presente edição, organizada e comentada por Letícia Malard, facilita a leitura e contextualiza o leitor à época da República Velha brasileira. Vidas Secas - Graciliano Ramos - Vidas secas pertence à segunda fase modernista da literatura brasileira, conhecida como “regionalista” ou “romance de 30”. Denuncia fortemente as mazelas do povo brasileiro, principalmente a situação de miséria do sertão nordestino. É o romance em que Graciliano alcança o máximo da expressão que vinha buscando em sua prosa: o que impulsiona os personagens é a seca, áspera e cruel, e paradoxalmente a ligação telúrica, afetiva, que expõe naqueles seres em retirada, à procura de meios de sobrevivência e um futuro.",
                        img: "upload_imagem_1657371954554.webp",
                        autores_id: "14",
                        tipo_id: "1",
                        generos_id: "5",
                },
                {
                        id: "16",
                        titulo: "Memórias Póstumas de Brás Cubas",
                        preco: "17.90",
                        avaliacao: "9.3",
                        descricao: "Ao mesmo tempo em que marca a fase mais madura do autor, o livro é considerado a transição do romantismo para o realismo. Num primeiro momento, a prosa fragmentária e livre de Memórias póstumas, misturando elegância e abuso, refinamento e humor negro, causou estranheza, inclusive entre a crítica. Com o tempo, no entanto, o defunto autor que dedica sua obra ao verme que primeiro roeu as frias carnes de seu cadáver tornou-se um dos personagens mais populares da nossa literatura. ",
                        img: "upload_imagem_1657372042465.webp",
                        autores_id: "16",
                        tipo_id: "1",
                        generos_id: "5",
                },
                {
                        id: "17",
                        titulo: "Um milhão de finais felizes",
                        preco: "39.42",
                        avaliacao: "8.3",
                        descricao: "Jonas não sabe muito bem o que fazer da vida. Entre suas leituras e ideias para livros anotadas em um caderninho de bolso, ele precisa dar conta de seus turnos no Rocket Café e ainda lidar com o conservadorismo de seus pais. Sua mãe alimenta a esperança de que ele volte a frequentar a igreja, e seu pai não faz muito por ele além de trazer problemas. Mas é quando conhece Arthur, um belo garoto de barba ruiva, que Jonas passa a questionar por quanto tempo conseguirá viver sob as expectativas de seus pais, fingindo ser uma pessoa diferente de quem é de verdade. Buscando conforto em seus amigos (e na sua história sobre dois piratas bonitões que se parecem muito com ele e Arthur), Jonas entenderá o verdadeiro significado de família e amizade, e descobrirá o poder de uma boa história.",
                        img: "upload_imagem_1657372106613.webp",
                        autores_id: "17",
                        tipo_id: "1",
                        generos_id: "10",
                },
                {
                        id: "18",
                        titulo: "A garota do lago",
                        preco: "15.00",
                        avaliacao: "6.5",
                        descricao: "Summit Lake, uma pequena cidade entre montanhas, é esse tipo de lugar, bucólico e com encantadoras casas dispostas à beira de um longo trecho de água intocada.Duas semanas atrás, a estudante de direito Becca Eckersley foi brutalmente assassinada em uma dessas casas. Filha de um poderoso advogado, Becca estava no auge de sua vida. Atraída instintivamente pela notícia, a repórter Kelsey Castle vai até a cidade para investigar o caso. ...E LOGO SE ESTABELECE UMA CONEXÃO ÍNTIMA QUANDO UM VIVO CAMINHA NAS MESMAS PEGADAS DOS MORTOS...E enquanto descobre sobre as amizades de Becca, sua vida amorosa e os segredos que ela guardava, a repórter fica cada vez mais convencida de que a verdade sobre o que aconteceu com Becca pode ser a chave para superar as marcas sombrias de seu próprio passado.",
                        img: "upload_imagem_1657372224564.webp",
                        autores_id: "18",
                        tipo_id: "3",
                        generos_id: "6",
                },
                {
                        id: "19",
                        titulo: "Crime e castigo",
                        preco: "20.28",
                        avaliacao: "9.1",
                        descricao: "&#34;Crime e castigo&#34; é um daqueles romances universais que, concebidos no decorrer do romântico século XIX, abriram caminhos ao trágico realismo literário dos tempos modernos. Contando nele a soturna história de um assassino em busca de redenção e ressurreição espiritual, Dostoiévski chegou a explorar, como nenhum outro escritor de sua época, as mais diversas facetas da psicologia humana sujeita a abalos e distorções e, desse modo, criou uma obra de imenso valor artístico, merecidamente cultuada em todas as partes do mundo. O fascinante efeito que produz a leitura de &#34;Crime e castigo&#34; - angústia, revolta e compaixão renovadas a cada página com um desenlace aliviador - poderia ser comparado à catarse dos monumentais dramas gregos.",
                        img: "upload_imagem_1657372280499.webp",
                        autores_id: "19",
                        tipo_id: "3",
                        generos_id: "11",
                },
                {
                        id: "20",
                        titulo: "Drácula",
                        preco: "33.20",
                        avaliacao: "9",
                        descricao: "Drácula é um clássico da literatura de terror e apresenta por meio de cartas, diários e notícias os ataques do vampiro Conde Drácula a moradores de Londres e da Transilvânia. O romance epistolar marcou o gênero e, mesmo não sendo a primeira obra a retratar esse mito literário, definiu o que conhecemos hoje como vampiro, influenciando a literatura, cinema e teatro. E não sobrou nenhum - Agatha Christie - Suspense - Uma ilha misteriosa, um poema infantil, dez soldadinhos de porcelana e muito suspense são os ingredientes com que Agatha Christie constrói seu romance mais importante. Na ilha do Soldado, antiga propriedade de um milionário norte-americano, dez pessoas sem nenhuma ligação aparente são confrontadas por uma voz misteriosa com fatos marcantes de seus passados.",
                        img: "upload_imagem_1657372361777.webp",
                        autores_id: "20",
                        tipo_id: "3",
                        generos_id: "8",
                },
                {
                        id: "21",
                        titulo: "Mitologia Nórdica",
                        preco: "25.10",
                        avaliacao: "7.3",
                        descricao: "Fascinado por essa mitologia desde a infância, o autor compôs uma coletânea de quinze contos que começa com a narração da origem do mundo e mostra a relação conturbada entre deuses, gigantes e anões, indo até o Ragnarök, o assustador cenário do apocalipse que vai levar ao fim no mundo. Às vezes intensos e sombrios, outras vezes divertidos e heroicos, os contos retratam tempos longínquos em que os feitos dos deuses eram contados ao redor da fogueira em noites frias e estreladas.",
                        img: "upload_imagem_1657372402995.webp",
                        autores_id: "21",
                        tipo_id: "3",
                        generos_id: "15",
                },
                {
                        id: "22",
                        titulo: "O guia definitivo do mochileiro das galáxias",
                        preco: "28.80",
                        avaliacao: "6.9",
                        descricao: "O Guia do Mochileiro das Galáxias – Segundos antes de a Terra ser destruída, Arthur Dent é salvo por Ford Prefect, um E.T. que fazia pesquisa para a nova edição de O Guia do Mochileiro das Galáxias. Pegando carona numa nave alienígena, os dois dão início a uma alucinante viagem pelo tempo e pelo espaço.",
                        img: "upload_imagem_1657372452682.webp",
                        autores_id: "22",
                        tipo_id: "3",
                        generos_id: "4",
                },
                {
                        id: "23",
                        titulo: "O instituto",
                        preco: "26.70",
                        avaliacao: "6.8",
                        descricao: "No meio da noite, em uma casa no subúrbio de Minneapolis, um grupo de invasores assassina os pais de Luke e sequestra silenciosamente o menino de doze anos. A operação leva menos de dois minutos. Quando Luke acorda, ele está no Instituto, em um quarto que parece muito o dele, exceto pelo fato de que não tem janela. E do lado de fora tem outras portas, e atrás delas, outras crianças com talentos especiais, que chegaram àquele lugar do mesmo jeito que Luke. O grupo formado por ele, Kalisha, Nick, George, Iris e o caçula, Avery Dixon, de apenas dez anos, está na Parte da Frente. Outros jovens, Luke descobre, foram levados para a Parte de Trás e nunca mais vistos.Nessa instituição sinistra, a equipe se dedica impiedosamente a extrair dessas crianças toda a força de seus poderes paranormais. Não existem escrúpulos. Conforme cada nova vítima vai desaparecendo para a Parte de Trás, Luke fica mais e mais desesperado para escapar e procurar ajuda. Mas até hoje ninguém nunca conseguiu fugir do Instituto.",
                        img: "upload_imagem_1657372510104.webp",
                        autores_id: "23",
                        tipo_id: "3",
                        generos_id: "6",
                },
                {
                        id: "24",
                        titulo: "O médico e o monstro",
                        preco: "16.75",
                        avaliacao: "7.4",
                        descricao: "Gabriel John Utterson é um advogado que investiga um caso estranho envolvendo Henry Jekyll e Edward Hyde, repentino beneficiário do testamento de Henry. O advogado descobre acontecimentos que resultam na reclusão repentina de Jekyll. O romance que envolve ficção científica, transtornos psicológicos e terror é um grande clássico do gênero.",
                        img: "upload_imagem_1657372569482.webp",
                        autores_id: "24",
                        tipo_id: "3",
                        generos_id: "8",
                },
                {
                        id: "25",
                        titulo: "O perigo de uma história única",
                        preco: "36.56",
                        avaliacao: "8.9",
                        descricao: "O que sabemos sobre outras pessoas? Como criamos a imagem que temos de cada povo? Nosso conhecimento é construído pelas histórias que escutamos, e quanto maior for o número de narrativas diversas, mais completa será nossa compreensão sobre determinado assunto.",
                        img: "upload_imagem_1657372655351.webp",
                        autores_id: "25",
                        tipo_id: "3",
                        generos_id: "12",
                },
                {
                        id: "26",
                        titulo: "O retorno: Existe uma hora certa para o amor?",
                        preco: "41.20",
                        avaliacao: "6.2",
                        descricao: "Trevor Benson não estava planejando voltar para New Bern, uma cidadezinha na Carolina do Norte. Porém, após ouvir as últimas e enigmáticas palavras do avô no leito de morte, ele decide passar um tempo na velha casa que herdou. Decidido a cuidar das colmeias da propriedade, Trevor nem pensa em se apaixonar. Porém, assim que vê Natalie Masterson, sente uma atração impossível de ignorar. Ela parece corresponder, mas se mantém distante, como se escondesse algo. Em New Bern, ele também conhece Callie, uma adolescente reservada que era amiga de seu avô. Trevor acha que pode conseguir respostas sobre as circunstâncias misteriosas da morte dele, mas ela oferece poucas pistas – até que uma reviravolta lhe dá uma nova perspectiva.",
                        img: "upload_imagem_1657372703995.webp",
                        autores_id: "26",
                        tipo_id: "3",
                        generos_id: "9",
                },
                {
                        id: "27",
                        titulo: "Mundo de Sofia",
                        preco: "51.20",
                        avaliacao: "7.7",
                        descricao: "Às vésperas de seu aniversário de quinze anos, Sofia Amundsen começa a receber bilhetes e cartões-postais bastante estranhos. Os bilhetes são anônimos e perguntam a Sofia quem é ela e de onde vem o mundo. Os postais são enviados do Líbano, por um major desconhecido, para uma certa Hilde Møller Knag, garota a quem Sofia também não conhece. O mistério dos bilhetes e dos postais é o ponto de partida deste romance fascinante, que vem conquistando milhões de leitores em todos os países e já vendeu mais de 1 milhão de exemplares só no Brasil. De capítulo em capítulo, de “lição” em “lição”, o leitor é convidado a percorrer toda a história da filosofia ocidental, ao mesmo tempo que se vê envolvido por um thriller que toma um rumo surpreendente.",
                        img: "upload_imagem_1657372753306.webp",
                        autores_id: "27",
                        tipo_id: "3",
                        generos_id: "9",
                },
                {
                        id: "28",
                        titulo: "Box HP Lovecraft",
                        preco: "249.90",
                        avaliacao: "7.8",
                        descricao: "H. P. Lovecraft - Com enredos marcados pelo simbolismo e muitas vezes inspirado por seus constantes pesadelos, Lovecraft envolve o leitor em uma atmosfera tenebrosa, cujo desfecho é sempre surpreendente. Nessa coleção, reunimos alguns dos contos clássicos do autor em uma caixa feita especialmente para colecionadores e amantes do gênero. Nessa coleção, composta por três livros, reunimos alguns dos contos clássicos do autor em uma caixa feita especialmente para colecionadores e amantes do Gênero.",
                        img: "upload_imagem_1657715661910.png",
                        autores_id: "28",
                        tipo_id: "2",
                        generos_id: "8",
                },
                {
                        id: "29",
                        titulo: "Box Jane Austen",
                        preco: "150.00",
                        avaliacao: "7.2",
                        descricao: " Box especial contendo três dos romances mais importantes de Jane Austen,&#34;Razão e sensibilidade&#34;, &#34;Orgulho e preconceito&#34; e &#34;Persuasão&#34;.",
                        img: "upload_imagem_1657715714098.png",
                        autores_id: "29",
                        tipo_id: "2",
                        generos_id: "9",
                },
                {
                        id: "30",
                        titulo: "Box obras Mário de Andrade",
                        preco: "315.15",
                        avaliacao: "8.3",
                        descricao: "Mário Raul Moraes De Andrade nasceu em São Paulo, em 9 de outubro de 1893 e faleceu em 25 de fevereiro de 1945. Foi poeta, escritor, crítico literário, musicólogo, folclorista, cronista ensaísta e um dos pioneiros da poesia moderna brasileira, com a publicação de seu livro Pauliceia Desvairada, em 1922. Durante sua infância foi considerado um pianista prodígio, tendo sido matriculado no Conservatório Dramático e Musical de São Paulo em 1911. Recebeu educação formal apenas em música, mas foi autodidata em história, arte e, especialmente, poesia. Em 1922, ao mesmo tempo em que preparava a publicação de Pauliceia Desvairada, trabalhou com Malfatti e Oswald de Andrade na organização de um evento que se destinava a divulgar as obras deles a um público mais vasto, a Semana de Arte Moderna, que ocorreu no Teatro Municipal de São Paulo entre os dias 11 e 18 de fevereiro. Depois de trabalhar como professor de música e colunista de jornal, ele publicou seu maior romance, Macunaíma, em 1928. No fim de sua vida, tornou-se o diretor-fundador do Departamento Municipal de Cultura de São Paulo, formalizando o papel que ele havia desempenhado durante muito tempo como catalisador da modernidade artística na cidade e no país. Andrade morreu em sua residência, em São Paulo, devido a um enfarte do miocárdio, quando tinha 51 anos. Dadas as suas divergências com a ditadura, não houve qualquer reação.",
                        img: "upload_imagem_1657715793976.png",
                        autores_id: "30",
                        tipo_id: "2",
                        generos_id: "5",
                },
                {
                        id: "31",
                        titulo: "Box o elementar de Sherlock Holmes",
                        preco: "335.24",
                        avaliacao: "8.8",
                        descricao: "Há mais de cem anos, Sherlock Holmes fascina o mundo. Muito peculiar, esguio, arrogante e extremamente erudito, Holmes apareceu pela primeira vez em 1887, com sucesso absoluto, e desde então não saiu de cena, dando origem a séries e filmes e modificando a literatura e o romance policial. Nesta coletânea, você encontra todos os romances escritos por Sir Arthur Conan Doyle estrelando o detetive e seu fiel amigo, o Dr. John Watson:- Um estudo em vermelho.- O signo dos quatro.- O cão dos Baskerville.- O vale do medo.Cada livro conta com acabamento em relevo – presente também no box – e marcador de páginas inspirado nas histórias.Divirta-se com os mistérios e a incrível capacidade dedutiva desse clássico personagem, capaz de resolver os mais intrigantes casos, às vezes sem nem mesmo deixar o seu apartamento, no 221b da Baker Street, em Londres.",
                        img: "upload_imagem_1657715834545.png",
                        autores_id: "31",
                        tipo_id: "2",
                        generos_id: "2",
                },
                {
                        id: "32",
                        titulo: "Box Virginia Woolf",
                        preco: "220.20",
                        avaliacao: "7.1",
                        descricao: "UM BOX ESPECIAL DE UMA DAS MAIORES VOZES DA LITERATURA MUNDIAL. REÚNE OS ROMANCES “A VIAGEM”, “NOITE E DIA”, “O QUARTO DE JACOB” E “A SRA. DALLOWAY”. Virginia Woolf é uma das escritoras mais celebradas do mundo. Dona de um estilo único, navegando com liberdade entre tempos e pontos de vista diversos, soube como ninguém dar voz a seus personagens. Uma voz que não se restringia apenas ao que diziam, mas sobretudo ao que não diziam; aquilo que estava abrigado no mais profundo de suas almas – e também na de Virginia. Este box exclusivo reúne os primeiros quatro romances da autora, publicados entre 1915 e 1925. Com as traduções consagradas de Lya Luft (“A viagem”, “O quarto de Jacob”) e Raul de Sá Barbosa (“Noite e dia”), bem como com novíssima tradução de José Rubens Siqueira (“A Sra. Dalloway”), a coleção apresenta ainda rico suplemento de leitura assinado pela Dra. Maria Aparecida de Oliveira, professora especialista em Virginia Woolf, e um trabalho incrível do artista plástico Bruno Novelli na composição das capas e do pôster. Que a agudeza estética e política de Woolf possa inspirar cada vez mais novas vozes. E que essas vozes sejam cada vez mais livres. ",
                        img: "upload_imagem_1657715881525.png",
                        autores_id: "32",
                        tipo_id: "2",
                        generos_id: "9",
                }, 
                {
                        id: "33",
                        titulo: "Série House of Night",
                        preco: "133.15",
                        avaliacao: "6.7",
                        descricao: "ATREVA-SE A ENTRAR NO MUNDO DE HOUSE OF NIGHT, A FENOMENAL SÉRIE BEST-SELLER DO NEW YORK TIMES, COM ESTA COLEÇÃO COMPLETA EM DOIS VOLUMES ",
                        img: "upload_imagem_1657715923495.png",
                        autores_id: "1",
                        tipo_id: "2",
                        generos_id: "1",
                },
            ]);
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Produtos', null, {});
  }
};
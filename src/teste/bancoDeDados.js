

/* IMPLEMENTAÇÃO DE TIPOS ABSTRATOS DE DADOS */

function imagens(posicao, grupo, dificuldade) {
  const frutas = [
    { url: "https://image.freepik.com/vetores-gratis/bando-de-banana-amarela-madura-de-vetor-isolado-no-fundo-branco_1284-45456.jpg", significado: "banana" },
    { url: "https://image.freepik.com/fotos-gratis/macas-vermelhas-isoladas-no-fundo-branco_147493-894.jpg", significado: "maçã" },
    { url: "https://image.freepik.com/fotos-gratis/melancias-frescas-em-fundo-branco_106006-3491.jpg", significado: "melancia" },
    { url: "https://image.freepik.com/fotos-gratis/fruta-de-uvas-isolada-no-fundo-branco_74190-4053.jpg", significado: "uva" },
    { url: "https://image.freepik.com/fotos-gratis/fruta-madura-madura-suculenta-meio-corte-pera-em-branco_179666-487.jpg", significado: "pera" },
    { url: "https://image.freepik.com/fotos-gratis/caju-vermelho-isolado_62678-473.jpg", significado: "caju" },
    { url: "https://image.freepik.com/fotos-gratis/abacate-maduro-com-folha-verde-isolada-no-branco_80510-409.jpg", significado: "abacate" },
    { url: "https://image.freepik.com/fotos-gratis/abacaxi-fresco-em-branco_1339-78497.jpg", significado: "abacaxi" },
    { url: 'https://image.freepik.com/fotos-gratis/frutos-de-cereja-de-acerola-com-folhas-verdes-em-branco_252965-686.jpg', significado: 'acerola' },
    { url: 'https://image.freepik.com/fotos-gratis/vista-lateral-de-amora-preta-com-framboesas-em-uma-tigela-sobre-uma-superficie-branca_141793-17871.jpg', significado: 'amora' },
    { url: 'https://image.freepik.com/fotos-gratis/cocos-frescos-na-superficie-branca_144627-16036.jpg', significado: 'cocô' },
    { url: 'https://image.freepik.com/fotos-gratis/maca-estrela-isolada-no-fundo-branco_403166-365.jpg', significado: 'carambola' },
    { url: 'https://image.freepik.com/fotos-gratis/goiaba-do-close-up-rosa-fresco-organico-com-as-folhas-inteiras-e-cortadas-isoladas-no-fundo-branco-vista-frontal_59529-250.jpg', significado: 'goiaba' },
    { url: 'https://image.freepik.com/fotos-gratis/laranjas-fatiadas-e-inteiras_144627-3981.jpg', significado: 'laranja' },
    { url: 'https://image.freepik.com/fotos-gratis/fatia-de-verde-limao-citrinos-carrinho-isolado-no-branco_34936-2333.jpg', significado: 'limão' },
    { url: 'https://image.freepik.com/fotos-gratis/mamao-fresco_144627-34232.jpg', significado: 'mamão' },
    { url: 'https://image.freepik.com/fotos-gratis/frutos-maduros-de-manga-com-fatias-isoladas-no-branco_80510-383.jpg', significado: 'manga' },
    { url: 'https://image.freepik.com/fotos-gratis/maracuja-amarelo-com-folhas-na-superficie-branca_55883-3411.jpg', significado: 'maracujá' },
    { url: 'https://image.freepik.com/fotos-gratis/vista-frontal-melao-maduro-fatiado-e-todo-doce-em-cinza-frutas-doce-verao-fresco_140725-18839.jpg', significado: 'melão' },
    { url: 'https://image.freepik.com/fotos-gratis/morangos-maduros-com-folhas-isoladas-em-um-branco_80510-607.jpg', significado: 'morango' },
    { url: 'https://image.freepik.com/fotos-gratis/mandarim-delicioso_144627-27555.jpg', significado: 'tangerina' },
    { url: 'https://image.freepik.com/fotos-gratis/pessego-em-cima-da-mesa_144627-17515.jpg', significado: 'pêssego' },
    { url: 'https://image.freepik.com/fotos-gratis/kiwis-frescos-isolados_144627-30034.jpg', significado: 'kiwi' },
    { url: 'https://image.freepik.com/fotos-gratis/a-jaca-nas-arvores-de-jaca-esta-pendurada-em-um-galho-no-jardim-de-frutas-tropicais-no-verao_73523-5300.jpg', significado: 'jaca' },
    { url: 'https://image.freepik.com/fotos-gratis/fruta-exotico-mao-de-uma-mulher-colhendo-jabuticaba-madura-na-arvore-jabuticaba-e-a-uva-brasileira-nativa-plinia-cauliflora-da-especie_146714-24.jpg', significado: 'jabuticaba' },
    { url: 'https://image.freepik.com/fotos-gratis/amora-preta-fresca-com-folhas_144627-34494.jpg', significado: 'amora' },
    { url: 'https://image.freepik.com/fotos-gratis/sobremesa-de-frescura-fresca-natureza-fruta_1417-433.jpg', significado: 'cereja' },
    { url: 'https://image.freepik.com/fotos-gratis/figueira_144627-17292.jpg', significado: 'figo' },
    { url: 'https://image.freepik.com/fotos-gratis/fruta-fresca-do-dragao-pitaya-ou-pitahaya-em-chapa-branca-comida-saudavel_131480-219.jpg', significado: 'pitaya' },
    { url: 'https://image.freepik.com/fotos-gratis/frutos-de-tamarindo-com-folhas-verdes-isoladas-no-fundo-branco_252965-669.jpg', significado: 'tamarindo' },
    { url: 'https://image.freepik.com/fotos-gratis/avelas_144627-16139.jpg', significado: 'avelã' }

  ]




  const objetos = [
    { url: 'https://image.freepik.com/vetores-gratis/facas-de-cozinha-isoladas_1284-42423.jpg', significado: 'faca' },
    { url: 'https://image.freepik.com/fotos-gratis/bola-de-futebol-detalhada-icone-do-futebol-isolado_268835-1351.jpg', significado: 'bola' },
    { url: 'https://image.freepik.com/fotos-gratis/foto-aproximada-de-um-relogio-de-ouro-isolado_181624-28492.jpg', significado: 'relógio' },
    { url: 'https://image.freepik.com/fotos-gratis/isqueiro-a-gas-azul-queimando-com-fogo-sobre-um-fundo-claro_115838-622.jpg', significado: 'isqueiro' },
    { url: 'https://image.freepik.com/fotos-gratis/mao-segurando-um-smartphone-com-tela-em-branco_1232-1091.jpg', significado: 'celular' },
    { url: 'https://image.freepik.com/fotos-gratis/oculos-desgaste_1203-2605.jpg', significado: 'óculos' },
    { url: 'https://image.freepik.com/fotos-gratis/bela-cadeira-de-madeira-de-luxo_74190-4142.jpg', significado: 'cadeira' },
    { url: 'https://image.freepik.com/fotos-gratis/liquidificador-maquina-de-suco_74190-4902.jpg', significado: 'liquidificador' },
    { url: 'https://image.freepik.com/vetores-gratis/ventilador-de-suporte-em-ilustracao-3d-com-fundo-interior-aconchegante_317396-351.jpg', significado: 'ventilador' },
    { url: 'https://image.freepik.com/fotos-gratis/moderno-refrigerador-branco-aberto-no-estudio-azul_241146-510.jpg', significado: 'geladeira' },
    { url: 'https://image.freepik.com/vetores-gratis/colheres-de-aco-realistas-isoladas_1284-41752.jpg', significado: 'colher' },
    { url: 'https://image.freepik.com/vetores-gratis/projeto-de-televisao-realista_1053-473.jpg', significado: 'televisão' },
    { url: 'https://image.freepik.com/fotos-gratis/bumerangue-na-mao-feminina-sobre-fundo-amarelo_295303-1147.jpg', significado: 'boomerang' },
    { url: 'https://image.freepik.com/vetores-gratis/forno-eletrodomesticos-de-cozinha-fogao-aberto-ou-fechado-de-cor-branca-vista-frontal_107791-4544.jpg', significado: 'fogão' },
    { url: 'https://image.freepik.com/vetores-gratis/portas-de-madeira-brancas-abertas-e-fechadas_1441-4168.jpg', significado: 'porta' },
    { url: 'https://image.freepik.com/vetores-gratis/mesas-de-madeira_23-2147516076.jpg', significado: 'mesa' },
    { url: 'https://image.freepik.com/fotos-gratis/rato-vermelho-do-computador_1260-13.jpg?1', significado: 'mouse' },
    { url: 'https://image.freepik.com/vetores-gratis/conjunto-de-pacote-de-escova-de-dente_107791-4384.jpg', significado: 'escova' },
    { url: 'https://image.freepik.com/vetores-gratis/tesoura-dourada-isolada_1284-41795.jpg', significado: 'tesoura' },
    { url: 'https://image.freepik.com/fotos-gratis/um-cabo-eletrico-conectado-a-uma-tomada_6529-440.jpg', significado: 'tomada' },
    { url: 'https://image.freepik.com/vetores-gratis/colecao-de-lampadas-decorativas-lampadas_1441-2695.jpg', significado: 'lâmpada' },
    { url: 'https://image.freepik.com/vetores-gratis/conjunto-criativo-de-escadas-de-metal-e-madeira_74855-15387.jpg', significado: 'escada' },
    { url: 'https://image.freepik.com/fotos-gratis/close-up-de-chuveiro-cromado-torneira-no-banheiro_116407-1489.jpg', significado: 'chuveiro' },
    { url: 'https://image.freepik.com/fotos-gratis/sistema-de-prevencao-de-detalhe-de-incendio-de-hidrante-vermelho_418500-99.jpg', significado: 'hidrante' },
    { url: 'https://image.freepik.com/fotos-gratis/binoculos-pretos-isolados-com-fundo-branco_231208-8376.jpg', significado: 'binóculos' },
    { url: 'https://image.freepik.com/fotos-gratis/amarela-de-plastico-rigido-capacete-da-construcao-no-fundo-branco_1232-3121.jpg', significado: 'capacete' },
    { url: 'https://image.freepik.com/vetores-gratis/regua-pictograma-icone-isolado-no-branco_194782-12.jpg', significado: 'régua' },
    { url: 'https://image.freepik.com/vetores-gratis/conjunto-completo-realista-de-rodas-de-carro_1284-29765.jpg', significado: 'pneu' },
    { url: 'https://image.freepik.com/fotos-gratis/console-de-tv-na-mao-da-mulher_144627-2356.jpg', significado: 'controle' },
    { url: 'https://image.freepik.com/vetores-gratis/conjunto-real-de-banheiras_1284-14406.jpg', significado: 'banheira' },

  ]
  const animais = [
    { url: 'https://image.freepik.com/fotos-gratis/o-gato-em-fundo-branco_155003-15381.jpg', significado: 'gato' },
    { url: 'https://image.freepik.com/fotos-gratis/golfinho-com-uma-esfera_1160-93.jpg', significado: 'golfinho' },
    { url: 'https://image.freepik.com/fotos-gratis/caranguejo-terrestre-em-pe-no-chao-e-espalhar-suas-garras_265142-7072.jpg', significado: 'carangueijo' },
    { url: 'https://image.freepik.com/fotos-gratis/foto-aproximada-de-formigas-em-uma-pedra_181624-20108.jpg', significado: 'formiga' },
    { url: 'https://image.freepik.com/fotos-gratis/leao-panthera-leo-em-um-branco-isolado_191971-10385.jpg', significado: 'leão' },
    { url: 'https://image.freepik.com/fotos-gratis/cobra-rato-cobre-preta-em-fundo-branco_262958-2417.jpg', significado: 'cobra' },
    { url: 'https://image.freepik.com/fotos-gratis/zebra-em-um-prado-cercado-por-vegetacao-sob-a-luz-do-sol-com-um-fundo-desfocado_181624-17237.jpg', significado: 'zebra' },
    { url: 'https://image.freepik.com/fotos-gratis/elefante-magnifico-em-um-campo-no-meio-da-selva-em-ol-pejeta-quenia_181624-27599.jpg', significado: 'elefante' },
    { url: 'https://image.freepik.com/fotos-gratis/girafa-somaliana-vulgarmente-conhecida-como-girafa-reticulada-giraffa-camelopardalis-reticulata-de-pe-contra-a-parede-branca-isolada_191971-11299.jpg', significado: 'girafa' },
    { url: 'https://image.freepik.com/fotos-gratis/labrador-retriever_95678-27.jpg', significado: 'cachorro' },
    { url: 'https://image.freepik.com/fotos-gratis/vaca-linda-na-grama-verde-com-ceu-azul_268835-3018.jpg', significado: 'vaca' },
    { url: 'https://image.freepik.com/vetores-gratis/marrom-realista-isolado_1284-3881.jpg', significado: 'borboleta' },
    { url: 'https://image.freepik.com/fotos-gratis/leitao-adoravel-em-gaiola_23-2147758829.jpg', significado: 'porco' },
    { url: 'https://image.freepik.com/fotos-gratis/rato-isolado_87394-242.jpg', significado: 'rato' },
    { url: 'https://image.freepik.com/fotos-gratis/coelho-de-orelhas-vermelhas-em-um-espaco-em-branco_78450-1741.jpg', significado: 'coelho' },
    { url: 'https://image.freepik.com/fotos-gratis/flora-fundo-da-mola-closeup-petala_1172-437.jpg', significado: 'abelha' },
    { url: 'https://image.freepik.com/fotos-gratis/foto-incrivel-de-uma-bela-coruja-isolada-em-um-fundo-preto_181624-27989.jpg', significado: 'coruja' },
    { url: 'https://image.freepik.com/fotos-gratis/camaleao-esta-sentado-em-um-galho-madagascar_265142-7668.jpg', significado: 'camaleão' },
    { url: 'https://image.freepik.com/fotos-gratis/galinha-marrom-isolada-com-ovo-no-estudio_33755-2138.jpg', significado: 'galinha' },
    { url: 'https://image.freepik.com/fotos-gratis/tartaruga-de-espora-africana-na-grama_167946-113.jpg', significado: 'tartaruga' },
    { url: 'https://image.freepik.com/fotos-gratis/closeup-tiro-de-um-urso-deitado-em-uma-arvore_181624-6971.jpg', significado: 'urso' },
    { url: 'https://image.freepik.com/fotos-gratis/raposa-vermelha-sentada-em-um-prado-no-outono_158217-1706.jpg', significado: 'raposa' },
    { url: 'https://image.freepik.com/fotos-gratis/cavalo-branco_191971-9686.jpg', significado: 'cavalo' },
    { url: 'https://image.freepik.com/fotos-gratis/toco-toucan-ramphastos-toco_1398-4039.jpg', significado: 'tucano' },
    { url: 'https://image.freepik.com/fotos-gratis/ara-ararauna-em-estudio_87557-2714.jpg', significado: 'papagaio' },
    { url: 'https://image.freepik.com/vetores-gratis/avestruz-comum-struthio-camelus-ilustrado_53876-35012.jpg', significado: 'avestruz' },
    { url: 'https://image.freepik.com/vetores-gratis/camelo-no-estilo-vintage_53876-80932.jpg', significado: 'camelo' },
    { url: 'https://image.freepik.com/fotos-gratis/close-up-de-um-canguru-em-um-campo-gramado-seco-com-um-fundo-desfocado_181624-1706.jpg', significado: 'canguru' },
    { url: 'https://image.freepik.com/fotos-gratis/close-vertical-de-um-besouro-joaninha-em-uma-folha_181624-26465.jpg', significado: 'joaninha' },
    { url: 'https://image.freepik.com/fotos-gratis/bela-foto-de-um-enorme-rinoceronte-com-um-fundo-desfocado_181624-17633.jpg', significado: 'rinoceronte' },
  ]

  // ORDENAÇÃO CASO O USUÁRIO TENHA ESCOLHIDO A DIFICULDADE NÍVEL FÁCIL 
  if (dificuldade) {
    frutas.sort((a, b) => {
      if (a.significado.length > b.significado.length) {
        return 1;
      }
      if (a.significado.length < b.significado.length) {
        return -1;
      }
      // a must be equal to b
      return 0;
    })
    objetos.sort((a, b) => {
      if (a.significado.length > b.significado.length) {
        return 1;
      }
      if (a.significado.length < b.significado.length) {
        return -1;
      }
      // a must be equal to b
      return 0;
    })
    animais.sort((a, b) => {
      if (a.significado.length > b.significado.length) {
        return 1;
      }
      if (a.significado.length < b.significado.length) {
        return -1;
      }
      // a must be equal to b
      return 0;
    })
  }

  if (dificuldade===false) {
    frutas.sort((a, b) => {
      if (a.significado.length < b.significado.length) {
        return 1;
      }
      if (a.significado.length > b.significado.length) {
        return -1;
      }
      // a must be equal to b
      return 0;
    })
    objetos.sort((a, b) => {
      if (a.significado.length < b.significado.length) {
        return 1;
      }
      if (a.significado.length > b.significado.length) {
        return -1;
      }
      // a must be equal to b
      return 0;
    })
    animais.sort((a, b) => {
      if (a.significado.length < b.significado.length) {
        return 1;
      }
      if (a.significado.length > b.significado.length) {
        return -1;
      }
      // a must be equal to b
      return 0;
    })
  }
  /******************************************************/
  if (grupo === "FRUTAS") {
    return frutas[posicao]
  } else if (grupo === "ANIMAIS") {
    return animais[posicao]
  } else if (grupo === "OBJETOS") {
    return objetos[posicao]
  }
}
module.exports = imagens
 
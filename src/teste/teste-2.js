const frutas=[
    {url:"https://image.freepik.com/vetores-gratis/bando-de-banana-amarela-madura-de-vetor-isolado-no-fundo-branco_1284-45456.jpg",significado:"banana"},
    {url:"https://image.freepik.com/fotos-gratis/macas-vermelhas-isoladas-no-fundo-branco_147493-894.jpg",significado:"maçã"},
    {url:"https://image.freepik.com/fotos-gratis/melancias-frescas-em-fundo-branco_106006-3491.jpg",significado:"melancia"},
    {url:"https://image.freepik.com/fotos-gratis/fruta-de-uvas-isolada-no-fundo-branco_74190-4053.jpg",significado:"uva"},
    {url:"https://image.freepik.com/fotos-gratis/fruta-madura-madura-suculenta-meio-corte-pera-em-branco_179666-487.jpg",significado:"pera"},
    {url:"https://image.freepik.com/fotos-gratis/caju-vermelho-isolado_62678-473.jpg",significado:"caju"},
    {url:"https://image.freepik.com/fotos-gratis/abacate-maduro-com-folha-verde-isolada-no-branco_80510-409.jpg",significado:"abacate"},
    {url:"https://image.freepik.com/fotos-gratis/abacaxi-fresco-em-branco_1339-78497.jpg",significado:"abacaxi"},
    {url:'https://image.freepik.com/fotos-gratis/frutos-de-cereja-de-acerola-com-folhas-verdes-em-branco_252965-686.jpg',significado:'acerola'},
    {url:'https://image.freepik.com/fotos-gratis/vista-lateral-de-amora-preta-com-framboesas-em-uma-tigela-sobre-uma-superficie-branca_141793-17871.jpg',significado:'amora'},
    {url:'https://image.freepik.com/fotos-gratis/cocos-frescos-na-superficie-branca_144627-16036.jpg',significado:'cocô'},
    {url:'https://image.freepik.com/fotos-gratis/maca-estrela-isolada-no-fundo-branco_403166-365.jpg',significado:'carambola'},
    {url:'https://image.freepik.com/fotos-gratis/goiaba-do-close-up-rosa-fresco-organico-com-as-folhas-inteiras-e-cortadas-isoladas-no-fundo-branco-vista-frontal_59529-250.jpg',significado:'goiaba'},
    {url:'https://image.freepik.com/fotos-gratis/laranjas-fatiadas-e-inteiras_144627-3981.jpg',significado:'laranja'},
    {url:'https://image.freepik.com/fotos-gratis/fatia-de-verde-limao-citrinos-carrinho-isolado-no-branco_34936-2333.jpg',significado:'limão'},
    {url:'https://image.freepik.com/fotos-gratis/mamao-fresco_144627-34232.jpg',significado:'mamão'},
    {url:'https://image.freepik.com/fotos-gratis/frutos-maduros-de-manga-com-fatias-isoladas-no-branco_80510-383.jpg',significado:'manga'},
    {url:'https://image.freepik.com/fotos-gratis/maracuja-amarelo-com-folhas-na-superficie-branca_55883-3411.jpg',significado:'maracujá'},
    {url:'https://image.freepik.com/fotos-gratis/vista-frontal-melao-maduro-fatiado-e-todo-doce-em-cinza-frutas-doce-verao-fresco_140725-18839.jpg',significado:'melão'},
    {url:'https://image.freepik.com/fotos-gratis/morangos-maduros-com-folhas-isoladas-em-um-branco_80510-607.jpg',significado:'morango'},
    {url:'https://image.freepik.com/fotos-gratis/mandarim-delicioso_144627-27555.jpg',significado:'tangerina'},
    {url:'https://image.freepik.com/fotos-gratis/pessego-em-cima-da-mesa_144627-17515.jpg',significado:'pêssego'},
    {url:'https://image.freepik.com/fotos-gratis/kiwis-frescos-isolados_144627-30034.jpg',significado:'kiwi'},
    {url:'https://image.freepik.com/fotos-gratis/a-jaca-nas-arvores-de-jaca-esta-pendurada-em-um-galho-no-jardim-de-frutas-tropicais-no-verao_73523-5300.jpg',significado:'jaca'},
    {url:'https://image.freepik.com/fotos-gratis/fruta-exotico-mao-de-uma-mulher-colhendo-jabuticaba-madura-na-arvore-jabuticaba-e-a-uva-brasileira-nativa-plinia-cauliflora-da-especie_146714-24.jpg',significado:'jabuticaba'},
    {url:'https://image.freepik.com/fotos-gratis/amora-preta-fresca-com-folhas_144627-34494.jpg',significado:'amora'},
    {url:'https://image.freepik.com/fotos-gratis/sobremesa-de-frescura-fresca-natureza-fruta_1417-433.jpg',significado:'cereja'},
    {url:'https://image.freepik.com/fotos-gratis/figueira_144627-17292.jpg',significado:'figo'},
    {url:'https://image.freepik.com/fotos-gratis/fruta-fresca-do-dragao-pitaya-ou-pitahaya-em-chapa-branca-comida-saudavel_131480-219.jpg',significado:'pitaya'},
    {url:'https://image.freepik.com/fotos-gratis/frutos-de-tamarindo-com-folhas-verdes-isoladas-no-fundo-branco_252965-669.jpg',significado:'tamarindo'},
    {url:'https://image.freepik.com/fotos-gratis/avelas_144627-16139.jpg',significado:'avelã'}

]

frutas.sort((a,b)=>{
    if (a.significado.length > b.significado.length) {
        return 1;
      }
      if (a.significado.length < b.significado.length) {
        return -1;
      }
      // a must be equal to b
      return 0;
} )
console.log(frutas)
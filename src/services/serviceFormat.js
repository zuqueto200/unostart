const FormatObj = {
  
    setProjeto: (obj) => {
        let projeto = obj
        return projeto
    },

    setNewProduto: (tipoProduto, ambienteId, projetoId, material) => {
        let produto = {
            "tipoProdutoId": tipoProduto,
            "codigo": material.Id.toString(),
            "descricao": material.Descricao,
            "largura": material.Largura,
            "espessura": material.Comprimento,
            "veio": material.Veio,
            "projetoId": projetoId,
            "quantidade": 0,
            "caminhoImagem": material.UrlImagem,
            "ambienteId": ambienteId,
            "altura": material.Altura,
            //"id": 0,
            //"tipo": "string",
            //"centroVenda": "string",
            //"centroSaida": "string",
            //"pecaId": 0
        }
        return produto
    },

    setNewPeca: (materialId, ambienteId) => {
        let peca = {
            "descricao": "",
            "largura": 0,
            "quantidade": 0,
            "veio": false,
            "altura": 0,
            "materialId": materialId,
            "superiorMaterialId": 0,
            "inferiorMaterialId": 0,
            "esquerdaMaterialId": 0,
            "direitaMaterialId": 0,
            "ambienteId": ambienteId
        }
        return peca
    }

}

export default FormatObj;
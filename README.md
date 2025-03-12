# serverLess

# Node.js com serverless framework

> Este é o projeto de exemplo para o curso [Node.js com serverless framework](tbd) na Alura.

Este projeto tem como objetivo guiar seu aprendizado durante o curso, e para isso, ele está dividido em branches, cada um com um objetivo diferente. Cada branch representa um passo do curso, e você pode navegar entre elas para ver o código de cada etapa.

Além disso, existem dois branches: `completo-vm` e `completo-serverless`, cada um com sua própria documentação, que contém os códigos completos do projeto em cada um dos ambientes que ele está rodando.

## Executando localmente

O projeto foi feito da forma mais simples possível para facilitar o uso. Não foram usados nenhum framework ou biblioteca para o front-end.

Todo o projeto roda a partir do arquivo `index.mjs`, que é o arquivo principal do projeto. Para executá-lo, basta rodar o comando:

```bash
node index.mjs
```

Ou se preferir, você pode usar o [nodemon](https://www.npmjs.com/package/nodemon) para executar o projeto:

````bash
npm run dev# ServerLess Project

Este repositório foi desenvolvido como parte do meu aprendizado sobre **arquitetura serverless** utilizando **AWS** e o **Serverless Framework**. Durante esse processo, explorei conceitos fundamentais e implementei uma aplicação funcional.

## Aprendizados

Ao longo do projeto, aprendi a:
- Configurar e utilizar o **Serverless Framework** para gerenciar implantações na AWS.
- Escrever e organizar o arquivo `serverless.yml` para definir recursos, permissões e integrações.
- Criar e gerenciar **funções AWS Lambda** para execução sem servidor.
- Integrar as funções Lambda com **API Gateway**, **DynamoDB** e outros serviços da AWS.
- Implantar e monitorar aplicações serverless de forma eficiente.

## Estrutura do Projeto

O repositório está organizado em diferentes branches, refletindo cada etapa do aprendizado:
- `completo-vm`: Implementação baseada em uma arquitetura tradicional.
- `completo-serverless`: Versão final utilizando **Serverless Framework**.

## Como Executar o Projeto

1. Clone este repositório:
   ```sh
   git clone https://github.com/lmoraesdev/serverLess.git
   cd serverLess
````

2. Instale as dependências do projeto:

   ```sh
   npm install
   ```

3. Configure suas credenciais AWS (caso ainda não tenha feito):

   ```sh
   aws configure
   ```

4. Implante o projeto na AWS:
   ```sh
   serverless deploy
   ```

## Tecnologias Utilizadas

- **Node.js**
- **MongoDB**
- **AWS Lambda**
- **API Gateway**
- **Serverless Framework**

## Contribuição

Contribuições são bem-vindas! Se tiver sugestões ou melhorias, fique à vontade para abrir uma **issue** ou enviar um **pull request**.

---

Este projeto foi uma experiência enriquecedora, me proporcionando conhecimentos essenciais sobre desenvolvimento serverless e melhores práticas na AWS.

```

Isso vai garantir que você não precise ficar reiniciando o servidor a cada alteração que fizer. Todo o front-end da aplicação está na pasta `interface`, toda a API da aplicação está dentro do arquivo `index.mjs`.

Depois de executar o projeto, você pode acessar a aplicação em `http://localhost:3000`.
```

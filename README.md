# ServerLess Project

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
   ```

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

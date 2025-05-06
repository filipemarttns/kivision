const servicos = [
    {
      titulo: "Sites Institucionais Profissionais",
      descricao: "Apresente sua empresa com autoridade. Layouts modernos, textos estratégicos e botão direto pro WhatsApp. Mais confiança, mais orçamentos, mais vendas.",
      ideal: "Empresas que querem profissionalizar sua imagem online.",
      resultado: "Mais confiança, mais orçamentos, mais vendas."
    },
    {
      titulo: "Sites com Agendamento e Pagamento Online",
      descricao: "Clientes agendam e pagam direto pelo site — você só recebe e atende. Menos ligações, menos esquecimentos, mais controle e lucro.",
      ideal: "Clínicas, salões, psicólogos, consultores e prestadores de serviço.",
      resultado: "Menos ligações, menos esquecimentos, mais controle e lucro."
    },
    {
      titulo: "Loja Virtual (E-commerce Simples)",
      descricao: "Loja completa com carrinho, checkout e pagamento integrado. Tudo que você precisa para vender 24h. Vendas automatizadas e expansão do faturamento.",
      ideal: "Negócios que querem vender produtos online sem complicação.",
      resultado: "Vendas automatizadas e expansão do faturamento."
    },
    {
      titulo: "E-commerce com Painel de Dados",
      descricao: "Além da loja, você recebe um painel com relatórios de vendas, produtos mais vendidos e desempenho da loja. Decisões mais inteligentes e mais lucro no fim do mês.",
      ideal: "Empresas que querem crescer com base em dados.",
      resultado: "Decisões mais inteligentes e mais lucro no fim do mês."
    },
    {
      titulo: "Chatbots de Atendimento no WhatsApp",
      descricao: "Respostas automáticas para agilizar seu atendimento e captar contatos. Menos esforço, mais conversões e mais tempo livre.",
      ideal: "Empresas que recebem muitas mensagens e perdem vendas por demora.",
      resultado: "Menos esforço, mais conversões e mais tempo livre."
    },
    {
      titulo: "Chatbots com Inteligência Artificial",
      descricao: "Conversas mais naturais, respostas inteligentes e suporte mais eficiente com IA integrada. Atendimento profissional sem precisar contratar ninguém.",
      ideal: "Empresas que querem parecer grandes — mesmo com time pequeno.",
      resultado: "Atendimento profissional sem precisar contratar ninguém."
    },
    {
      titulo: "Automação de Tarefas no Computador",
      descricao: "Programas que fazem tarefas repetitivas pra você: planilhas, cliques, organização de dados. Produtividade dobrada com metade do esforço.",
      ideal: "Quem perde horas com trabalhos manuais.",
      resultado: "Produtividade dobrada com metade do esforço."
    },
    {
      titulo: "Sistemas Sob Medida para Empresas",
      descricao: "Soluções 100% personalizadas para necessidades específicas do seu negócio. Mais controle, mais agilidade, mais resultado.",
      ideal: "Empresas que não encontram um sistema que resolva tudo.",
      resultado: "Mais controle, mais agilidade, mais resultado."
    },
    {
      titulo: "Integrações com Sistemas e APIs",
      descricao: "Conectamos seu site ou sistema com plataformas externas (ERP, CRM, gateways de pagamento, etc). Tudo funciona de forma automática.",
      ideal: "Empresas que usam vários sistemas e querem tudo conectado.",
      resultado: "Mais automação, menos retrabalho, operação fluida."
    }
  ];
  
  const container = document.getElementById('popupContainer');
  
  servicos.forEach((servico, index) => {
    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.innerHTML = `
      <h2>${servico.titulo}</h2>
      <p>${servico.descricao}</p>
    `;
    popup.addEventListener('click', () => abrirDetalhes(servico));
    container.appendChild(popup);
  
    setTimeout(() => {
      popup.classList.add('show');
    }, 300 * index);
  });
  
  function abrirDetalhes(servico) {
    const modal = document.createElement('div');
    modal.className = 'modal-detalhe';
    modal.innerHTML = `
      <div class="modal-conteudo">
        <h2>${servico.titulo}</h2>
        <p><strong>Ideal para:</strong> ${servico.ideal}</p>
        <p><strong>Resultado:</strong> ${servico.resultado}</p>
        <button class="btn-fechar" onclick="this.parentElement.parentElement.remove()">Fechar</button>
      </div>
    `;
    document.body.appendChild(modal);
  }
  function voltarPagina() {
    // Isso forçará a recarga da página para garantir que o conteúdo seja atualizado corretamente
    window.location.href = "inicio.html"; // Navega para index.html
  }
  
  
import phLogo from '../assets/logos/LOGO PHJOIAS.jpg';
import techLogo from '../assets/logos/TECHPLAST LOGO BRANCA.png';
import tampLogo from '../assets/logos/1.png';

export const projectsData = {
    'tech-plast': {
        id: 'tech-plast',
        title: 'Soluções em Moldes de Precisão',
        subtitle: 'Tech Plast',
        heroImage: techLogo,
        context: "Indústria especializada no desenvolvimento de moldes de alta complexidade. O desafio era transparecer a precisão técnica e a robustez da engenharia através de um posicionamento digital que atraísse grandes indústrias e acelerasse o ciclo de vendas B2B.",
        resultsDescription: "Performance Industrial em 6 meses",
        strategy: [
            "Arquitetura de Branding para Engenharia Pesada",
            "Desenvolvimento de Ecossistema Digital de Alta Performance",
            "Estratégia de Captação de Leads B2B (MQL)",
            "Produção de Conteúdo Técnico Especializado",
            "SEO Tático para Termos de Fabricação de Moldes"
        ],
        metrics: [
            {
                value: 'Lead K',
                label: 'Captação Qualificada',
                highlight: 'Foco em grandes indústrias',
                sub: 'Conversão B2B ativa'
            },
            {
                value: 'Autoridade',
                label: 'Reconhecimento',
                highlight: 'Branding Industrial',
                featured: true
            }
        ],
        highlight: 'A Tech Plast consolidou-se como referência em moldaria técnica, utilizando o marketing para encurtar a distância entre a engenharia da fábrica e o departamento de compras de grandes players.'
    },
    'tamp-plast': {
        id: 'tamp-plast',
        title: 'Inovação em Fechamentos Plásticos',
        subtitle: 'Tamp Plast',
        heroImage: tampLogo,
        context: "Líder no setor de fechamentos plásticos, a Tamp Plast precisava expandir sua presença geográfica. A estratégia focou em transformar a marca em uma vitrine digital de seus produtos, facilitando o acesso ao catálogo para distribuidores em todo o país.",
        resultsDescription: "Resultados de Expansão Nacional",
        strategy: [
            "Modernização de Identidade e Digital Assets",
            "Lançamento de Catálogo Digital Interativo",
            "Expansão Geográfica via Tráfego Segmentado",
            "Posicionamento de Liderança em Fechamentos Plásticos",
            "Automação de Atendimento de Primeiro Nível"
        ],
        metrics: [
            {
                value: 'Escala',
                label: 'Visibilidade de Produto',
                highlight: 'Catálogo digital ativo',
                sub: 'Alcance setorial ampliado'
            },
            {
                value: '100%',
                label: 'Digitally Native',
                highlight: 'Marca modernizada',
                featured: true
            }
        ],
        highlight: 'Com a Tamp Plast, o marketing serviu como motor de expansão, levando o catálogo de tampas a novas regiões e garantindo que a marca fosse a primeira opção em fechamentos plásticos no digital.'
    },
    'ph-joias': {
        id: 'ph-joias',
        title: 'Case de Crescimento Digital',
        subtitle: 'PH Joias',
        heroImage: phLogo,
        context: 'A marca buscava fortalecer presença digital, aumentar alcance e interações através de um posicionamento premium e estratégias agressivas de crescimento e vendas online.',
        resultsDescription: 'Resultados em ~90 dias',
        strategy: [
            'Posicionamento de marca e tom de voz exclusivo',
            'Planejamento de conteúdo voltado ao desejo e luxo',
            'Identidade visual estratégica para redes sociais',
            'Gestão de tráfego pago (Meta Ads e Google Ads)',
            'Análise de métricas em tempo real para tomada de decisão',
            'Promoções e eventos digitais sazonais sincronizados'
        ],
        metrics: [
            {
                value: '661k',
                label: 'Visualizações Totais',
                highlight: 'Alcance massivo de público',
                sub: '75,6% Orgânico / 24,4% Anúncios'
            },
            {
                value: '116k',
                label: 'Contas Alcançadas',
                highlight: '+414,9% de variação positiva',
                sub: 'Crescimento exponencial de base'
            },
            {
                value: '+11,2%',
                label: 'Crescimento de Seguidores',
                highlight: '+1.123 seguidores',
                sub: 'Variação total positiva no perfil'
            },
            {
                value: '135k',
                label: 'Visualizações',
                highlight: 'Melhor post – Tráfego Pago',
                featured: true
            },
            {
                value: '18,6k',
                label: 'Ações no Perfil',
                highlight: 'Interação e Visibilidade',
                sub: '13k Visitas / 5,5k Cliques'
            },
            {
                value: '3,7k',
                label: 'Interações Totais',
                highlight: 'Engajamento da Comunidade',
                sub: 'Curtidas, Comentários e Compartilhamentos'
            }
        ],
        comparison: {
            reach: {
                before: 22600,
                during: 116469,
                beforeString: '22,6k',
                duringString: '116,4k',
                gainText: '+93,8k Alcance',
                gainPercent: '+414,9%'
            },
            actions: {
                before: 3100,
                during: 18672,
                beforeString: '3,1k',
                duringString: '18,6k',
                gainText: '+15,5k Ações',
                gainPercent: '+502,3%'
            }
        },
        highlight: 'A força criativa do design e copywriting somada a constância fez com que publicações impulsionadas atingissem até 135.000 visualizações, demonstrando a relevância real da estratégia aplicada nas redes sociais com o tráfego pago.'
    }
};

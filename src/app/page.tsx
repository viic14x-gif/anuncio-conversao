"use client"

import { useState } from "react"
import { Copy, Check, Sparkles, Zap, Target, TrendingUp, CreditCard, Lock } from "lucide-react"

export default function Home() {
  const [formData, setFormData] = useState({
    produto: "",
    publicoAlvo: "",
    problema: "",
    diferencial: ""
  })
  
  const [anuncios, setAnuncios] = useState<{
    longo: string
    curto: string
    ultracurto: string
  } | null>(null)
  
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const [showPaywall, setShowPaywall] = useState(false)
  const [hasSubscription, setHasSubscription] = useState(false)

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  const gerarAnuncios = () => {
    // Verifica se tem assinatura
    if (!hasSubscription) {
      setShowPaywall(true)
      return
    }

    setIsGenerating(true)
    
    // Simula processamento (em produção, aqui seria uma chamada à API)
    setTimeout(() => {
      const produto = formData.produto || "Solução Inovadora"
      const publico = formData.publicoAlvo || "empreendedores e profissionais"
      const problema = formData.problema || "perda de tempo com tarefas repetitivas"
      const diferencial = formData.diferencial || "automação inteligente e fácil de usar"

      // VERSÃO LONGA
      const longo = `🚀 ${produto}: A Solução Que Você Estava Esperando

Pare de perder tempo e energia com ${problema}. Chegou a hora de transformar sua rotina com ${diferencial}.

✨ Por Que Escolher ${produto}?

• Transformação Real: Resultados visíveis desde o primeiro dia
• Simplicidade Total: Interface intuitiva, sem complicação
• Segurança Garantida: Seus dados protegidos com tecnologia de ponta
• Rapidez Incomparável: Economize horas do seu dia
• Exclusividade: Método único desenvolvido para ${publico}
• Solução Completa: Tudo que você precisa em um só lugar

💎 Método aprovado por milhares de usuários satisfeitos.

👉 Clique agora e descubra como ${produto} pode revolucionar sua vida!`

      // VERSÃO CURTA
      const curto = `🎯 ${produto}: ${diferencial}

Ideal para ${publico} que querem eliminar ${problema}.

✅ Resultados desde o 1º dia
✅ Fácil de usar
✅ 100% seguro
✅ Economize tempo e dinheiro

Milhares de pessoas já transformaram suas vidas.

👉 Experimente agora!`

      // VERSÃO ULTRACURTA
      const ultracurto = `⚡ ${produto}
${diferencial} para ${publico}.
Elimine ${problema} hoje mesmo.
👉 Clique e transforme sua vida!`

      setAnuncios({ longo, curto, ultracurto })
      setIsGenerating(false)
    }, 1500)
  }

  const handleSubscribe = () => {
    // Redireciona para o link de pagamento do PagSeguro
    window.open('https://pag.ae/81fNuKnB4', '_blank')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="border-b bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Gerador de Anúncios Pro
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Crie anúncios persuasivos em segundos
                </p>
              </div>
            </div>
            
            {!hasSubscription && (
              <button
                onClick={() => setShowPaywall(true)}
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2"
              >
                <CreditCard className="w-4 h-4" />
                Assinar Agora
              </button>
            )}
            
            {hasSubscription && (
              <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-4 py-2 rounded-lg font-semibold flex items-center gap-2">
                <Check className="w-4 h-4" />
                Assinante Ativo
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Paywall Modal */}
      {showPaywall && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-in fade-in zoom-in duration-300">
            <button
              onClick={() => setShowPaywall(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              ✕
            </button>

            <div className="text-center mb-6">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                Desbloqueie o Poder Total
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Gere anúncios profissionais ilimitados
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 mb-6 border-2 border-green-200 dark:border-green-800">
              <div className="text-center mb-4">
                <div className="text-4xl font-bold text-gray-900 dark:text-gray-100">
                  R$ 14,99
                  <span className="text-lg font-normal text-gray-600 dark:text-gray-400">/mês</span>
                </div>
              </div>

              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">Anúncios ilimitados por mês</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">3 versões otimizadas (longa, curta, ultracurta)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">Copywriting profissional aplicado</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">Suporte prioritário</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">Atualizações constantes</span>
                </li>
              </ul>
            </div>

            <button
              onClick={handleSubscribe}
              className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 mb-4"
            >
              <Lock className="w-5 h-5" />
              Assinar por R$ 14,99/mês
            </button>

            <div className="flex items-center justify-center gap-2 text-xs text-gray-500 dark:text-gray-400">
              <Lock className="w-3 h-3" />
              <span>Pagamento seguro via PagSeguro</span>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Formulário */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 mb-6">
                <Target className="w-5 h-5 text-blue-600" />
                <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Informações do Produto/Serviço
                </h2>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    O que é o produto/serviço?
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Curso de Marketing Digital"
                    value={formData.produto}
                    onChange={(e) => setFormData({ ...formData, produto: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Para quem é?
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Empreendedores iniciantes"
                    value={formData.publicoAlvo}
                    onChange={(e) => setFormData({ ...formData, publicoAlvo: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Qual problema resolve?
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Falta de clientes e vendas baixas"
                    value={formData.problema}
                    onChange={(e) => setFormData({ ...formData, problema: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Qual o principal diferencial?
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Método validado com resultados em 30 dias"
                    value={formData.diferencial}
                    onChange={(e) => setFormData({ ...formData, diferencial: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>

                <button
                  onClick={gerarAnuncios}
                  disabled={isGenerating}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 shadow-lg"
                >
                  {isGenerating ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Gerando...
                    </>
                  ) : (
                    <>
                      <Zap className="w-5 h-5" />
                      Gerar Anúncios Profissionais
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Features */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-xl p-6 text-white">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5" />
                <h3 className="font-bold text-lg">O Que Você Recebe</h3>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>3 versões otimizadas (longa, curta e ultracurta)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Copywriting profissional aplicado (AIDA, PAS, 4Ps)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Linguagem persuasiva e otimizada para conversão</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Pronto para usar em qualquer plataforma</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Resultados */}
          <div className="space-y-6">
            {!anuncios ? (
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-12 border border-gray-200 dark:border-gray-700 text-center">
                <div className="bg-gray-100 dark:bg-gray-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-10 h-10 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                  Seus Anúncios Aparecerão Aqui
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Preencha as informações ao lado e clique em "Gerar Anúncios" para criar suas versões profissionais.
                </p>
              </div>
            ) : (
              <>
                {/* Versão Longa */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">
                      📄 Versão Longa (Completa)
                    </h3>
                    <button
                      onClick={() => handleCopy(anuncios.longo, 0)}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-all"
                    >
                      {copiedIndex === 0 ? (
                        <>
                          <Check className="w-4 h-4 text-green-600" />
                          <span className="text-sm text-green-600">Copiado!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">Copiar</span>
                        </>
                      )}
                    </button>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 whitespace-pre-wrap text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
                    {anuncios.longo}
                  </div>
                </div>

                {/* Versão Curta */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">
                      ⚡ Versão Curta (Tráfego Pago)
                    </h3>
                    <button
                      onClick={() => handleCopy(anuncios.curto, 1)}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-all"
                    >
                      {copiedIndex === 1 ? (
                        <>
                          <Check className="w-4 h-4 text-green-600" />
                          <span className="text-sm text-green-600">Copiado!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">Copiar</span>
                        </>
                      )}
                    </button>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 whitespace-pre-wrap text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
                    {anuncios.curto}
                  </div>
                </div>

                {/* Versão Ultracurta */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">
                      🎯 Versão Ultracurta (Criativos)
                    </h3>
                    <button
                      onClick={() => handleCopy(anuncios.ultracurto, 2)}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-all"
                    >
                      {copiedIndex === 2 ? (
                        <>
                          <Check className="w-4 h-4 text-green-600" />
                          <span className="text-sm text-green-600">Copiado!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">Copiar</span>
                        </>
                      )}
                    </button>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 whitespace-pre-wrap text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
                    {anuncios.ultracurto}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>✨ Gerador de Anúncios Pro - Crie anúncios persuasivos e otimizados para conversão</p>
        </div>
      </footer>
    </div>
  )
}

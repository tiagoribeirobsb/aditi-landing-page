
export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 font-poppins">
          Termos de Uso
        </h1>
        
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              <strong>Última atualização:</strong> 30 de agosto de 2025
            </p>
            
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Aceitação dos Termos</h2>
              <p>
                Ao acessar e utilizar o site da Aditi Digital Experts, você concorda com estes termos de uso.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Serviços Oferecidos</h2>
              <p>
                Oferecemos consultoria em transformação digital, automação com IA, estratégias de vendas e marketing digital 
                através de nosso ecossistema integrado de empresas especializadas.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Propriedade Intelectual</h2>
              <p>
                Todo o conteúdo deste site, incluindo a metodologia ADITI™, são propriedade da Aditi Digital Experts 
                e estão protegidos por direitos autorais.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Limitação de Responsabilidade</h2>
              <p>
                A Aditi Digital Experts não se responsabiliza por danos indiretos decorrentes do uso das informações 
                disponibilizadas neste site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Informações da Empresa</h2>
              <p>
                <strong>Razão Social:</strong> Aditi Digital Experts Ltda.
                <br />
                <strong>CNPJ:</strong> 59.390.921/0001-50
                <br />
                <strong>Contato:</strong> contato@aditidigital.com.br | +55 11 5286-8424
              </p>
            </section>
          </div>
        </div>

        <div className="text-center mt-8">
          <a
            href="/"
            className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors duration-300"
          >
            Voltar ao Site
          </a>
        </div>
      </div>
    </div>
  )
}

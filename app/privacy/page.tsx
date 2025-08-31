
export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 font-poppins">
          Política de Privacidade
        </h1>
        
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              <strong>Última atualização:</strong> 30 de agosto de 2025
            </p>
            
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Informações Coletadas</h2>
              <p>
                A Aditi Digital Experts coleta informações fornecidas voluntariamente através de nossos formulários de contato, 
                incluindo nome, e-mail, telefone e informações sobre sua empresa.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Uso das Informações</h2>
              <p>
                Utilizamos suas informações para entrar em contato, fornecer consultoria personalizada e 
                apresentar nossas soluções de transformação digital.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Proteção de Dados (LGPD)</h2>
              <p>
                Respeitamos a Lei Geral de Proteção de Dados (LGPD). Seus dados são tratados com segurança 
                e não são compartilhados com terceiros sem sua autorização.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Contato</h2>
              <p>
                Para dúvidas sobre esta política, entre em contato conosco:
                <br />
                E-mail: contato@aditidigital.com.br
                <br />
                WhatsApp: +55 11 5286-8424
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

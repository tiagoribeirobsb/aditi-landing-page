import { supabase } from '@/lib/supabase'

export default async function TestSupabase() {
  let connectionStatus = {
    success: false,
    message: '',
    data: null as any,
    error: null as any
  }

  try {
    // Test basic connection
    console.log('SUPABASE_URL:', process.env.NEXT_PUBLIC_SUPABASE_URL)
    console.log('SUPABASE_ANON_KEY exists:', !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
    
    // Try to fetch a simple count from leads table
    const { data, error, count } = await supabase
      .from('leads')
      .select('*', { count: 'exact', head: true })
      .limit(1)

    if (error) {
      connectionStatus = {
        success: false,
        message: `Erro na conexão: ${error.message}`,
        data: null,
        error: error
      }
    } else {
      connectionStatus = {
        success: true,
        message: `✅ Conexão OK! Tabela 'leads' encontrada com ${count || 0} registros.`,
        data: { count },
        error: null
      }
    }
  } catch (err: any) {
    connectionStatus = {
      success: false,
      message: `Erro inesperado: ${err.message}`,
      data: null,
      error: err
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Teste de Conexão Supabase
          </h1>
          
          <div className="space-y-6">
            {/* Status da Conexão */}
            <div className={`p-6 rounded-lg border-2 ${
              connectionStatus.success 
                ? 'bg-green-50 border-green-200' 
                : 'bg-red-50 border-red-200'
            }`}>
              <h2 className="text-xl font-semibold mb-4">
                Status da Conexão
              </h2>
              <p className={`text-lg font-medium ${
                connectionStatus.success ? 'text-green-700' : 'text-red-700'
              }`}>
                {connectionStatus.message}
              </p>
            </div>

            {/* Variáveis de Ambiente */}
            <div className="bg-blue-50 border-2 border-blue-200 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4 text-blue-900">
                Variáveis de Ambiente
              </h2>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="font-medium">SUPABASE_URL:</span>
                  <span className={process.env.NEXT_PUBLIC_SUPABASE_URL ? 'text-green-600' : 'text-red-600'}>
                    {process.env.NEXT_PUBLIC_SUPABASE_URL ? '✅ Configurada' : '❌ Não encontrada'}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-medium">SUPABASE_ANON_KEY:</span>
                  <span className={process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'text-green-600' : 'text-red-600'}>
                    {process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? '✅ Configurada' : '❌ Não encontrada'}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-medium">SERVICE_ROLE_KEY:</span>
                  <span className={process.env.SUPABASE_SERVICE_ROLE_KEY ? 'text-green-600' : 'text-red-600'}>
                    {process.env.SUPABASE_SERVICE_ROLE_KEY ? '✅ Configurada' : '❌ Não encontrada'}
                  </span>
                </div>
              </div>
            </div>

            {/* Detalhes do Erro (se houver) */}
            {connectionStatus.error && (
              <div className="bg-red-50 border-2 border-red-200 p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-4 text-red-900">
                  Detalhes do Erro
                </h2>
                <pre className="text-sm text-red-700 bg-red-100 p-4 rounded overflow-x-auto">
                  {JSON.stringify(connectionStatus.error, null, 2)}
                </pre>
              </div>
            )}

            {/* Dados de Sucesso (se houver) */}
            {connectionStatus.success && connectionStatus.data && (
              <div className="bg-green-50 border-2 border-green-200 p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-4 text-green-900">
                  Dados da Conexão
                </h2>
                <pre className="text-sm text-green-700 bg-green-100 p-4 rounded overflow-x-auto">
                  {JSON.stringify(connectionStatus.data, null, 2)}
                </pre>
              </div>
            )}

            {/* Próximos Passos */}
            <div className="bg-gray-50 border-2 border-gray-200 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">
                Próximos Passos
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Se a conexão estiver OK, você pode começar a usar o Supabase</li>
                <li>Verifique se todas as tabelas necessárias existem no banco</li>
                <li>Configure as políticas RLS (Row Level Security) se necessário</li>
                <li>Implemente as funcionalidades de CRUD nos componentes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
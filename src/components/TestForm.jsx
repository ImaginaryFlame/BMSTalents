import React from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { client } from '../lib/sanity';



const TestForm = () => {
  const queryClient = useQueryClient();

  const { data: contacts, isLoading, error } = useQuery({
    queryKey: ['contacts'],
    queryFn: async () => {
      const query = `*[_type == "contact" && status == "replied"] | order(date desc) {
        _id,
        nom,
        email,
        message,
        date,
        status
      }`;
      return await client.fetch(query);
    },
    refetchInterval: 30000, // Revalidation toutes les 30 secondes
    staleTime: 0, // Considère les données comme périmées immédiatement
  });

  // Fonction pour forcer la revalidation
  const handleRefresh = () => {
    queryClient.invalidateQueries({ queryKey: ['contacts'] });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-blue-600 font-medium">
            Chargement...
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500 bg-red-50 px-6 py-4 rounded-lg">
          Une erreur est survenue lors du chargement des messages
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Messages de contact répondu</h1>
        <button
          onClick={handleRefresh}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center space-x-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          <span>Actualiser</span>
        </button>
      </div>
      
      <div className="grid gap-6">
        {contacts?.map((contact) => (
          <div 
            key={contact._id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">{contact.nom}</h2>
                <p className="text-gray-600">{contact.email}</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  Répondu
                </span>
                <span className="text-sm text-gray-500">
                  {new Date(contact.date).toLocaleDateString('fr-FR', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </span>
              </div>
            </div>
            
            <div className="mt-4">
              <p className="text-gray-700 whitespace-pre-wrap">{contact.message}</p>
            </div>
          </div>
        ))}

        {contacts?.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              Aucun message de contact répondu pour le moment
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TestForm;
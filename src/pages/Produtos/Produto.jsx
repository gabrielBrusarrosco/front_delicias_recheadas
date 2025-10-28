import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";

export default function Produto() {
  return (
    <div className="produtos-page">
      <PageHeader
        title="Produtos"
        subtitle="Gerencie o catálogo de produtos da cantina"
        buttonText="+ Novo Produto"
        buttonTo="/dashboard/produtos/novo"
      />
      
      {/* Aqui você pode construir a tabela de produtos 
        igual ao seu screenshot 'image_9a4455.png' 
      */}
      <div style={{ 
        padding: '2rem', 
        backgroundColor: 'var(--background-secondary)', 
        borderRadius: '0.5rem', 
        color: 'var(--muted-foreground)' 
      }}>
        A tabela de listagem de produtos (como no screenshot) irá aqui.
      </div>
    </div>
  );
}
import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";

export default function Cliente() {
  return (
    <div className="clientes-page">
      <PageHeader
        title="Clientes"
        subtitle="Gerencie os clientes cadastrados na cantina"
        buttonText="+ Novo Cliente"
        buttonTo="/dashboard/clientes/novo"
      />

      {/* Aqui você pode construir a tabela de clientes 
        igual ao seu screenshot 'image_9a445a.png' 
      */}
      <div style={{ 
        padding: '2rem', 
        backgroundColor: 'var(--background-secondary)', 
        borderRadius: '0.5rem', 
        color: 'var(--muted-foreground)' 
      }}>
        A tabela de listagem de clientes (como no screenshot) irá aqui.
      </div>
    </div>
  );
}
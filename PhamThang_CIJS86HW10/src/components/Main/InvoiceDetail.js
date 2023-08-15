import React from 'react';
import { useParams } from 'react-router-dom';

function InvoiceDetail() {
  const { id } = useParams();

  return (
    <div>
      <h2>Invoice Detail Page</h2>
      <p>Invoice ID: {id}</p>

    </div>
  );
}

export default InvoiceDetail;

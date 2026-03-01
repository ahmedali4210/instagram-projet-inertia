import React from 'react'
import { usePage } from "@inertiajs/react";

export default function FlashMessage() {
  const { flash } = usePage().props;

  return (
    <>
      {flash.success && (
        <div className="alert alert-success">{flash.success}</div>
      )}
      {flash.error && (
        <div className="alert alert-danger">{flash.error}</div>
      )}
    </>
  );
}

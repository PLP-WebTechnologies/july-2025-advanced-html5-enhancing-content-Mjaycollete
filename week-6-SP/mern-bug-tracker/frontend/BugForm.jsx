import React, { useState } from 'react';
import { createBug } from '../services/api';

export default function BugForm({ onAdded }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    if (!title || title.length < 3) { setError('Title too short'); return; }
    try {
      const created = await createBug({ title, description });
      setTitle(''); setDescription(''); setError(null);
      onAdded(created);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={submit}>
      {error && <div role="alert">{error}</div>}
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
      <textarea value={description} onChange={e => setDescription(e.target.value)} />
      <button type="submit">Report Bug</button>
    </form>
  );
}

const API_BASE = process.env.REACT_APP_API || 'http://localhost:5000/api';

export async function fetchBugs() {
  const res = await fetch(`${API_BASE}/bugs`);
  if (!res.ok) throw new Error('Network error');
  return res.json();
}

export async function createBug(data) {
  const res = await fetch(`${API_BASE}/bugs`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  if (!res.ok) throw new Error('Failed to create');
  return res.json();
}

// updateBug, deleteBug similarly...

self.onmessage = async (event) => {
  try {
    const res = await fetch('/.netlify/functions/tx', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ xdr: event.data.xdr })
    });
    const result = await res.json();
    self.postMessage(result);
  } catch (e) {
    self.postMessage(`Transaction Failed: ${e.message}`);
  }
};

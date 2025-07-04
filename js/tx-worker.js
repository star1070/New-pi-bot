self.onmessage = async (event) => {
  const { xdr } = event.data;

  try {
    const response = await fetch('/.netlify/functions/submit-transaction', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ xdr })
    });

    const result = await response.json();
    self.postMessage(result);
  } catch (err) {
    self.postMessage({ error: err.message });
  }
};

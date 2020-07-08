export default async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const response = await fetch(
      `https://us10.api.mailchimp.com/3.0/lists/7c8759de1d/members/`,
      {
        body: JSON.stringify({ email_address: email, status: 'subscribed' }),
        headers: {
          Authorization: `Token ${API_KEY}`,
          'Content-Type': 'application/json',
        },
        method: 'POST',
      },
    );

    if (response.status >= 400) {
      return res.status(400).json({
        error: await response.text(),
      });
    }
    return res.status(201).json({ error: '' });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
};

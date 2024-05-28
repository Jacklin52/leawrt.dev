import fetch from 'isomorphic-unfetch';

export default async function MyRepos(req, res) {
  try {
    const authToken = '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'; // GitHub Kişisel Erişim Anahtarınız
    const response = await fetch('https://api.github.com/users/leawty/repos', {
      headers: {
        'Authorization': `token ${authToken}`
      }
    });
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Bir hata oluştu.');
    }
    
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Sunucu hatası' });
  }
}

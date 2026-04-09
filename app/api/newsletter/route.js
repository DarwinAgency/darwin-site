// ─────────────────────────────────────────────────────────────────────────────
// API Route — Inscription newsletter via Brevo API v3
//
// Variable d'environnement requise : BREVO_API_KEY
// Liste cible : #8
// ─────────────────────────────────────────────────────────────────────────────

const BREVO_API_URL = 'https://api.brevo.com/v3/contacts'
const BREVO_LIST_ID = 8

export async function POST(request) {
  try {
    const body = await request.json()
    const { email, prenom } = body

    if (!email) {
      return Response.json({ error: 'Email requis.' }, { status: 400 })
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return Response.json({ error: 'Email invalide.' }, { status: 400 })
    }

    const apiKey = process.env.BREVO_API_KEY
    if (!apiKey) {
      console.error('BREVO_API_KEY manquante')
      return Response.json({ error: 'Configuration serveur manquante.' }, { status: 500 })
    }

    const payload = {
      email: email.trim(),
      listIds: [BREVO_LIST_ID],
      updateEnabled: true,
      ...(prenom ? { attributes: { PRENOM: prenom.trim() } } : {}),
    }

    const res = await fetch(BREVO_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': apiKey,
      },
      body: JSON.stringify(payload),
    })

    // 201 = nouveau contact, 204 = contact existant mis à jour
    if (res.status === 201 || res.status === 204) {
      return Response.json({ success: true }, { status: 200 })
    }

    const error = await res.json().catch(() => ({}))
    console.error('Erreur Brevo :', res.status, error)
    return Response.json({ error: 'Inscription impossible. Réessayez.' }, { status: 500 })

  } catch (err) {
    console.error('Erreur API newsletter :', err)
    return Response.json({ error: 'Erreur serveur. Réessayez.' }, { status: 500 })
  }
}

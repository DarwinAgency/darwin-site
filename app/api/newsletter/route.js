// ─────────────────────────────────────────────────────────────────────────────
// API Route — Inscription newsletter via Brevo (form action directe)
//
// Aucune variable d'environnement requise.
// La route soumet le formulaire côté serveur vers l'endpoint Brevo
// pour éviter les problèmes CORS en soumission directe depuis le navigateur.
// ─────────────────────────────────────────────────────────────────────────────

const BREVO_FORM_URL =
  'https://53e9d84d.sibforms.com/serve/MUIFAJYWLwzH3yyxpDu4lx0c1kOIS8x1Y4BOJ7rwjnhNI_UjEjRqJd4JVtvEec3e6KjWaFlACCvDeyq84TORM7N983M7MAMX74lwj4r-3wY_GWQuqWena3YAPZeeh6xhsthE8jQ8CjEVvjwTI6KSIvZABAZoL_3zO-rypFhmApr5rLalDlxa-LM8Jlvy8khs4_wTiSsr4To8iSsH-w=='

export async function POST(request) {
  try {
    const body = await request.json()
    const { email, prenom } = body

    // Validation serveur
    if (!email) {
      return Response.json({ error: 'Email requis.' }, { status: 400 })
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return Response.json({ error: 'Email invalide.' }, { status: 400 })
    }

    // Soumission vers Brevo via FormData (même format que le formulaire natif)
    const formData = new URLSearchParams()
    formData.append('EMAIL', email.trim())
    if (prenom) formData.append('PRENOM', prenom.trim())
    formData.append('email_address_check', '') // honeypot anti-spam Brevo
    formData.append('locale', 'fr')

    const res = await fetch(BREVO_FORM_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formData.toString(),
    })

    // Brevo renvoie du HTML (sa page de confirmation) — pas de JSON.
    // Un statut 2xx suffit à confirmer l'inscription.
    if (res.ok) {
      return Response.json({ success: true }, { status: 200 })
    }

    console.error('Erreur Brevo — statut :', res.status)
    return Response.json({ error: 'Inscription impossible. Réessayez.' }, { status: 500 })

  } catch (err) {
    console.error('Erreur API newsletter :', err)
    return Response.json({ error: 'Erreur serveur. Réessayez.' }, { status: 500 })
  }
}

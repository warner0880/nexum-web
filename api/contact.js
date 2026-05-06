import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { nombre, correo, negocio, tipo_sistema, mensaje } = req.body;

  if (!nombre || !correo || !negocio || !tipo_sistema) {
    return res.status(400).json({ error: 'Faltan campos requeridos' });
  }

  try {
    await resend.emails.send({
      from: 'Nexum Analytics <onboarding@resend.dev>',
      to: ['frangjb00@gmail.com'],
      replyTo: correo,
      subject: `Nueva solicitud de ${negocio} — ${tipo_sistema}`,
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #F9FAFB;">
          <div style="background: #0D1F3C; padding: 24px 32px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 20px;">Nueva solicitud de cotización</h1>
            <p style="color: #93C5FD; margin: 4px 0 0; font-size: 14px;">Nexum Analytics · nexumanalytics.com</p>
          </div>
          <div style="background: white; padding: 32px; border-radius: 0 0 12px 12px; border: 1px solid #E5E7EB; border-top: none;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; color: #6B7280; font-size: 14px; width: 140px;">Nombre</td>
                <td style="padding: 10px 0; color: #0D1F3C; font-weight: 600;">${nombre}</td>
              </tr>
              <tr style="border-top: 1px solid #F3F4F6;">
                <td style="padding: 10px 0; color: #6B7280; font-size: 14px;">Correo</td>
                <td style="padding: 10px 0;"><a href="mailto:${correo}" style="color: #2563EB;">${correo}</a></td>
              </tr>
              <tr style="border-top: 1px solid #F3F4F6;">
                <td style="padding: 10px 0; color: #6B7280; font-size: 14px;">Negocio</td>
                <td style="padding: 10px 0; color: #0D1F3C; font-weight: 600;">${negocio}</td>
              </tr>
              <tr style="border-top: 1px solid #F3F4F6;">
                <td style="padding: 10px 0; color: #6B7280; font-size: 14px;">Tipo de sistema</td>
                <td style="padding: 10px 0;">
                  <span style="background: #EFF6FF; color: #2563EB; padding: 4px 12px; border-radius: 999px; font-size: 13px; font-weight: 600;">${tipo_sistema}</span>
                </td>
              </tr>
              ${mensaje ? `
              <tr style="border-top: 1px solid #F3F4F6;">
                <td style="padding: 10px 0; color: #6B7280; font-size: 14px; vertical-align: top;">Mensaje</td>
                <td style="padding: 10px 0; color: #374151; line-height: 1.6;">${mensaje}</td>
              </tr>` : ''}
            </table>
            <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid #F3F4F6;">
              <a href="mailto:${correo}" style="display: inline-block; background: #2563EB; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px;">
                Responder a ${nombre}
              </a>
            </div>
          </div>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Resend error:', error);
    return res.status(500).json({ error: 'Error al enviar el correo' });
  }
}

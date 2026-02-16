import type { APIRoute } from 'astro';
import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(import.meta.env.SENDGRID_API_KEY ?? '');

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { firstName, lastName, email, message } = body as {
      firstName: string;
      lastName: string;
      email: string;
      message: string;
    };

    const msg = `${message} \r\n
${firstName} ${lastName} \r\n
${email}`;

    const emailMsg = `${message}<br>${firstName} ${lastName}<br>${email}`;

    await sendgrid.send({
      to: 'elizabeth.w.bingham@gmail.com',
      from: 'webform@binghamdentistry.com',
      subject: `Web Message from ${firstName} ${lastName}`,
      text: msg,
      html: emailMsg,
    });

    return new Response(JSON.stringify({ error: '' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: unknown) {
    const err = error as { statusCode?: number; message?: string };
    return new Response(
      JSON.stringify({ error: err.message ?? 'Server error' }),
      {
        status: err.statusCode ?? 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};

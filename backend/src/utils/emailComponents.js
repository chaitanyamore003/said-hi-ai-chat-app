/**
 * Generates the HTML email template for password reset.
 */
const resetPasswordHTML = (resetUrl) => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="color-scheme" content="light dark">
  <meta name="supported-color-schemes" content="light dark">
  <title>Reset your Said Hi password</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;">
  
  <!-- Background Wrapper -->
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f8fafc; padding: 40px 20px;">
    <tr>
      <td align="center">
        
        <!-- Main Card Container -->
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width: 500px; background-color: #ffffff; border-radius: 12px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);">
          
          <!-- Top Accent Bar -->
          <tr>
            <td style="background-color: #2563eb; height: 4px; line-height: 4px; font-size: 0;">&nbsp;</td>
          </tr>

          <!-- Header / Logo -->
          <tr>
            <td align="center" style="padding: 32px 32px 16px 32px;">
              <img 
                src="https://res.cloudinary.com/ddivlvrkv/image/upload/v1795674408/said_hi_logo_rjr2h1.png" 
                alt="Said Hi" 
                width="120" 
                style="display: block; border: none; max-width: 100%; height: auto; margin: 0 auto;" 
              />
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td align="center" style="padding: 0 32px 24px 32px;">
              <h1 style="margin: 0; color: #0f172a; font-size: 22px; font-weight: 700; letter-spacing: -0.5px; line-height: 1.3;">
                Reset your password
              </h1>
              <p style="margin: 12px 0 0 0; color: #475569; font-size: 15px; line-height: 1.6; text-align: center;">
                We received a request to reset the password for your Said Hi account. Click the button below to choose a new password.
              </p>
            </td>
          </tr>

          <!-- CTA Button -->
          <tr>
            <td align="center" style="padding: 8px 32px 32px 32px;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td align="center" style="background-color: #2563eb; border-radius: 8px; box-shadow: 0 2px 4px rgba(37, 99, 235, 0.2);">
                    <a href="${resetUrl}" target="_blank" style="display: inline-block; padding: 12px 32px; font-size: 15px; font-weight: 600; color: #ffffff; text-decoration: none; border-radius: 8px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
                      Reset Password
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Security Note -->
          <tr>
            <td align="center" style="padding: 0 32px 32px 32px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px;">
                <tr>
                  <td style="padding: 16px;">
                    <p style="margin: 0; color: #64748b; font-size: 13px; line-height: 1.5; text-align: left;">
                      <strong>Security Note:</strong> This link will expire in 30 minutes. If you didn't request a password reset, you can safely ignore this email.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Fallback Link -->
          <tr>
            <td align="center" style="padding: 0 32px 32px 32px;">
              <p style="margin: 0; color: #94a3b8; font-size: 12px; line-height: 1.5; text-align: center;">
                If the button doesn't work, copy and paste this link into your browser:
              </p>
              <p style="margin: 6px 0 0 0; word-break: break-all; text-align: center;">
                <a href="${resetUrl}" target="_blank" style="color: #2563eb; font-size: 12px; text-decoration: underline; font-family: monospace;">
                  ${resetUrl}
                </a>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td align="center" style="padding: 20px 32px; background-color: #f8fafc; border-top: 1px solid #e2e8f0;">
              <p style="margin: 0; color: #94a3b8; font-size: 12px; line-height: 1.5; text-align: center;">
                © ${new Date().getFullYear()} Said Hi. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
        <!-- End Main Card Container -->

      </td>
    </tr>
  </table>
  <!-- End Background Wrapper -->

</body>
</html>
  `;
};

export default resetPasswordHTML;

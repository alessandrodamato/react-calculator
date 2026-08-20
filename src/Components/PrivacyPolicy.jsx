function PrivacyPolicy() {
  const style = {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "24px",
    fontFamily: "Arial, sans-serif",
    lineHeight: 1.6,
    color: "#222",
  };

  return (
    <div style={style}>
      <h1>Privacy Policy</h1>
      <p>
        <strong>Effective date:</strong> August 2026
      </p>
      <p>
        This Privacy Policy describes how DASHDRIVE (the "App"), developed by
        Alessandro D'Amato ("we", "us", "our"), handles information when you use
        the App on your Android device.
      </p>

      <h2>1. Information we collect</h2>
      <p>
        The App itself does not collect, store, or transmit any personal data.
        All game progress (high score, gems, settings) is saved locally on your
        device only.
      </p>

      <h2>2. Advertising</h2>
      <p>
        The App displays advertisements provided by Google AdMob. AdMob may
        collect and process certain information automatically, such as your
        advertising ID, device information, IP address, and usage data, in
        order to serve and measure ads. This processing is performed by Google
        in accordance with the{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noreferrer"
        >
          Google Privacy Policy
        </a>
        . AdMob's practices are governed by the{" "}
        <a
          href="https://support.google.com/admob/answer/6128543"
          target="_blank"
          rel="noreferrer"
        >
          AdMob Policy
        </a>
        . You can learn about how Google uses data at{" "}
        <a
          href="https://policies.google.com/technologies/partner-sites"
          target="_blank"
          rel="noreferrer"
        >
          How Google uses information
        </a>
        .
      </p>

      <h2>3. Advertising ID and personalized ads</h2>
      <p>
        AdMob may use your advertising ID to serve personalized ads. You can
        opt out of personalized advertising at any time from your device
        settings (Google Settings &gt; Ads &gt; Opt out of Ads
        Personalization) or by resetting your advertising ID.
      </p>

      <h2>4. Children</h2>
      <p>
        The App is not directed at children under the age of 13 and we do not
        knowingly collect personal data from children.
      </p>

      <h2>5. Your rights</h2>
      <p>
        Depending on your region (e.g., GDPR in the EU, CCPA in California),
        you may have the right to access, correct, or delete personal data
        concerning you. Since we do not collect personal data ourselves,
        please refer to Google's privacy practices for data processed by the
        advertising SDKs.
      </p>

      <h2>6. Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will
        be posted on this page with a new effective date.
      </p>

      <h2>7. Contact</h2>
      <p>
        If you have any questions about this Privacy Policy, contact us at:{" "}
        <a href="mailto:alessandro.damato.dev@gmail.com">
          alessandro.damato.dev@gmail.com
        </a>
      </p>
    </div>
  );
}

export default PrivacyPolicy;
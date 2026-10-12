
const sections = [
  {
    title: '1. Introduction',
    paragraphs: [
      'Welcome to Emplora ("the Platform", "we", "our", or "us").',
      'We are committed to protecting your privacy and ensuring that your personal information is handled responsibly. This Privacy Policy explains what information we collect, how we use it, and the choices available to you regarding your information.',
      'By accessing or using the Platform, you agree to the collection and use of information in accordance with this Privacy Policy.',
    ],
  },
  {
    title: '2. Information We Collect',
    subsections: [
      {
        title: 'Information You Provide',
        paragraphs: [
          'We may collect information that you voluntarily provide, including:',
        ],
        bullets: [
          'Name',
          'Email address',
          'Profile information',
          'Employment-related information you choose to share',
          'Reviews, ratings, comments, and other content you submit',
          'Communications sent to us through contact forms or support channels',
        ],
      },
      {
        title: 'Information Collected Automatically',
        paragraphs: [
          'When you use the Platform, we may automatically collect:',
        ],
        bullets: [
          'IP address',
          'Browser type and version',
          'Device information',
          'Pages visited',
          'Time and date of visits',
          'Usage and interaction data',
        ],
      },
      {
        title: 'Third-Party Authentication',
        paragraphs: [
          'If you sign in using a third-party service such as LinkedIn, Google, or similar providers, we may receive certain profile information made available by that provider in accordance with your privacy settings.',
        ],
      },
    ],
  },
  {
    title: '3. How We Use Your Information',
    paragraphs: ['We may use your information to:'],
    bullets: [
      'Create and manage user accounts',
      'Operate and improve the Platform',
      'Display reviews and ratings submitted by users',
      'Verify user identity where necessary',
      'Respond to inquiries and support requests',
      'Monitor and prevent abuse, fraud, or misuse of the Platform',
      'Enforce our Terms of Service and Community Guidelines',
      'Analyze usage trends and improve user experience',
    ],
  },
  {
    title: '4. User-Generated Content',
    paragraphs: [
      'The Platform allows users to submit reviews, ratings, comments, and other content.',
      'Please note that information you voluntarily make public through reviews or comments may be visible to other users and visitors of the Platform.',
      'Users are solely responsible for the content they submit.',
    ],
  },
  {
    title: '5. Information Sharing',
    paragraphs: [
      'We do not sell personal information to third parties.',
      'We may share information:',
    ],
    bullets: [
      'When required by law',
      'To comply with legal obligations',
      'To protect the rights, safety, and security of the Platform, its users, or the public',
      'With service providers that assist us in operating the Platform',
    ],
  },
  {
    title: '6. Data Security',
    paragraphs: [
      'We implement reasonable technical and organizational measures to protect user information from unauthorized access, disclosure, alteration, or destruction.',
      'However, no method of electronic transmission or storage is completely secure, and we cannot guarantee absolute security.',
    ],
  },
  {
    title: '7. Data Retention',
    paragraphs: ['We retain personal information for as long as necessary to:'],
    bullets: [
      'Provide services through the Platform',
      'Comply with legal obligations',
      'Resolve disputes',
      'Enforce our policies',
    ],
    ending:
      'We may retain certain records even after an account is deleted where required by law or for legitimate business purposes.',
  },
  {
    title: '8. User Rights',
    paragraphs: ['Subject to applicable laws, users may have the right to:'],
    bullets: [
      'Access their personal information',
      'Request corrections to inaccurate information',
      'Request deletion of personal information',
      'Withdraw consent where applicable',
    ],
    ending:
      'Requests may be submitted through the contact information provided below.',
  },
  {
    title: "9. Children's Privacy",
    paragraphs: [
      'The Platform is intended for individuals who are at least 18 years old.',
      'We do not knowingly collect personal information from children.',
    ],
  },
  {
    title: '10. Changes to This Privacy Policy',
    paragraphs: [
      'We may update this Privacy Policy from time to time.',
      'Any changes will be posted on this page with an updated revision date. Continued use of the Platform after changes become effective constitutes acceptance of the revised Privacy Policy.',
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white px-5 py-12 text-gray-800 sm:px-8 md:py-16">
      <article className="mx-auto max-w-4xl">
        <header className="mb-10 border-b border-gray-200 pb-8">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-blue-600">
            Emplora Legal
          </p>
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-[#121B3C] sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500">
            Last Updated: 02-06-2026
          </p>
        </header>

        <div className="space-y-10 text-base leading-7">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="mb-4 text-xl font-semibold text-[#121B3C] sm:text-2xl">
                {section.title}
              </h2>

              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph} className="mb-4">
                  {paragraph}
                </p>
              ))}

              {section.subsections?.map((subsection) => (
                <div key={subsection.title} className="mb-6">
                  <h3 className="mb-3 text-lg font-semibold text-gray-900">
                    {subsection.title}
                  </h3>

                  {subsection.paragraphs?.map((paragraph) => (
                    <p key={paragraph} className="mb-3">
                      {paragraph}
                    </p>
                  ))}

                  {subsection.bullets && (
                    <ul className="mb-4 list-disc space-y-2 pl-6">
                      {subsection.bullets.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              {section.bullets && (
                <ul className="mb-4 list-disc space-y-2 pl-6">
                  {section.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}

              {section.ending && <p>{section.ending}</p>}
            </section>
          ))}

          <section>
            <h2 className="mb-4 text-xl font-semibold text-[#121B3C] sm:text-2xl">
              11. Contact Us
            </h2>
            <p className="mb-4">
              If you have questions regarding this Privacy Policy, please
              contact us at:
            </p>
            <p className="mb-2">
              <strong>Email:</strong>{' '}
              <a
                href="mailto:contact@loeth.ng"
                className="text-blue-600 underline underline-offset-4"
              >
                contact@loeth.ng
              </a>
            </p>
            <p>
              <strong>Organization:</strong> Loeth Technology
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}

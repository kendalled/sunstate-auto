<template>
  <main>
    <Head>
      <Title>SunState Auto Glass | Orlando Windshield Replacement & Repair</Title>
      <Meta name="description" content="Orlando windshield replacement and auto glass repair experts since 2007. SunState Auto Glass offers mobile windshield replacement near me with same-day service in Orlando and Tampa. Free insurance claims and professional auto glass repair." />
      <Script type="application/ld+json">
        {
          "@context": "https://schema.org",
          "@type": "AutoRepair",
          "name": "SunState Auto Glass",
          "image": "https://sunstateautoglass.com/logo.png",
          "description": "Professional windshield replacement and auto glass repair services in Orlando and Tampa, Florida",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "6566 University Blvd",
            "addressLocality": "Winter Park",
            "addressRegion": "FL",
            "postalCode": "32792",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "28.5989",
            "longitude": "-81.3486"
          },
          "telephone": "+14072652855",
          "email": "info@sunstateautoglass.com",
          "url": "https://sunstateautoglass.com",
          "sameAs": [],
          "openingHours": "Mo-Fr 08:00-18:00",
          "priceRange": "$$",
          "areaServed": [
            {
              "@type": "City",
              "name": "Orlando",
              "addressRegion": "FL"
            },
            {
              "@type": "City",
              "name": "Tampa",
              "addressRegion": "FL"
            }
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Auto Glass Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Windshield Replacement",
                  "description": "Professional windshield replacement services for all vehicle types"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Auto Glass Repair",
                  "description": "Expert auto glass repair for chips, cracks, and damaged windows"
                }
              }
            ]
          }
        }
      </Script>
    </Head>
    <PictureHero />
		<TimelineFeat />
    <Testimonial flavor="Same-day service" heading="Mobile service you can trust." copy="Our team of experts are here to provide you with the windshield repairs and replacements you need. With our fast and reliable mobile service, getting back on the road couldn't be easier." test="I recently got my windshield replaced by Sunstate Autoglass. The service was quick and professional, with easy scheduling. Overall, a great experience — would highly recommend them for anyone needing a windshield replacement." reviewer="Maria Hill" img="/broken-optim.png" imgAlt="Broken Audi Windshield"/>
		<Test2 />
    <Testimonial flavor="Expert customer support" heading="Where customers are family." copy="Our team of auto glass experts has been servicing the Orlando area for decades. From lightning fast response time to technical support, we've got you covered in any situation." test="They were lightning quick throughout the entire process. My Kia Soul had a completely smashed windshield, and they had it back to new in just a few hours. They're my go to for any windshield problems in the future." reviewer="John Sikes" img="/split.jpg" imgAlt="Slightly Cracked Windshield" />
    <BrandCta />
	</main>
</template>

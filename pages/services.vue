<template>
  <div>
    <PictureHeader heading="Our Services" copy="Where precision meets vision. From flawlessly executed windshield replacements to chip and crack repairs, seamless side window replacements, and tailored solutions for commercial vehicles, we redefine clarity on the road." image="/smashed.png" />
    <ImageRight :flavor="block1.flavor" :heading="block1.heading" :subheading="block1.subheading" :image="block1.image" :points="block1.points" />
    <DoubleTest />
    <ImageLeft :flavor="block2.flavor" :heading="block2.heading" :subheading="block2.subheading" :image="block2.image" :points="block2.points" />
    <DarkStats />
    <ImageRight :flavor="block3.flavor" :heading="block3.heading" :subheading="block3.subheading" :image="block3.image" :points="block3.points" />
    <BrandCta />
    <ImageLeft :flavor="block4.flavor" :heading="block4.heading" :subheading="block4.subheading" :points="block4.points" :image="block4.image"/>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        block1: {
          flavor: 'Get back on the road easily',
          heading: 'Windshield Replacements',
          subheading: 'Driving with a cracked or smashed windshield is not only illegal in Florida, but is free to fix with your insurance. Don\'t let a little crack become a big problem.',
          image: '/hondacropped.png',
          imgAlt: 'Honda windshield getting replaced',
          points: [
              {
                title: 'Precision Craftsmanship',
                subtext: 'Our premium windshield replacement service is the best Central Florida has to offer. Providing you fast and quality work is our team\'s top priority.'
              },
              {
                title: 'Quick Turnarounds',
                subtext: 'Within 2 hours of your service, your windshield will be ready to go, so you can get back on the road. We have some of the fastest techs in the country.'
              },
              {
                title: 'Customer-Centric Approach',
                subtext: 'Our team of experts are ready on call to assist you. With our lightning-fast response time, our mobile team can get to you wherever you need.'
              }
          ]
        },
        block2: {
          flavor: 'More than just windshields',
          heading: 'Side & Rear Window Repairs',
          subheading: 'Chips and cracks can turn into a big problem if not dealt with. Our experts at SunState AutoGlass make sure that those big problems disappear.',
          image: '/windowreplace.png',
          imgAlt: 'Honda windshield getting repaired',
          points: [
              {
                title: 'Precision Restoration',
                subtext: 'Our skilled technicians employ advanced techniques to ensure precise and seamless repairs, leaving your windshield looking as good as new.'
              },
              {
                title: 'Quick Turnarounds',
                subtext: 'Experience efficient service with our streamlined process, guaranteeing a quick turnaround for chip and crack repairs, minimizing downtime.'
              },
              {
                title: 'Crystal-Clear Results',
                subtext: 'Our state-of-the-art repair methods not only address the visible damage but also enhance visibility, providing you with a crystal-clear windshield for a safer driving experience.'
              }
          ]
        },
        block3: {
          flavor: 'Take care of your company\'s needs',
          heading: 'Trucks & Commercial Vehicles',
          subheading: 'Chips and cracks can turn into a big problem if not dealt with. Our experts at SunState AutoGlass make sure that those big problems disappear.',
          image: '/semireplacement.png',
          imgAlt: 'Honda windshield getting repaired',
          points: [
              {
                title: 'Precision Restoration',
                subtext: 'Our skilled technicians employ advanced techniques to ensure precise and seamless repairs, leaving your windshield looking as good as new.'
              },
              {
                title: 'Quick Turnarounds',
                subtext: 'Experience efficient service with our streamlined process, guaranteeing a quick turnaround for chip and crack repairs, minimizing downtime.'
              },
              {
                title: 'Crystal-Clear Results',
                subtext: 'Our state-of-the-art repair methods not only address the visible damage but also enhance visibility, providing you with a crystal-clear windshield for a safer driving experience.'
              }
          ]
        },
        block4: {
          flavor: 'One stop shop for quick fixes',
          heading: 'Chip & Crack Repairs',
          subheading: 'Chips and cracks can turn into a big problem if not dealt with. Our experts at SunState AutoGlass make sure that those big problems disappear.',
          image: '/repaircropped.png',
          imgAlt: 'Honda windshield getting repaired',
          points: [
              {
                title: 'Precision Restoration',
                subtext: 'Our skilled technicians employ advanced techniques to ensure precise and seamless repairs, leaving your windshield looking as good as new.'
              },
              {
                title: 'Quick Turnarounds',
                subtext: 'Experience efficient service with our streamlined process, guaranteeing a quick turnaround for chip and crack repairs, minimizing downtime.'
              },
              {
                title: 'Crystal-Clear Results',
                subtext: 'Our state-of-the-art repair methods not only address the visible damage but also enhance visibility, providing you with a crystal-clear windshield for a safer driving experience.'
              }
          ]
        }
      }
    }
  }
</script>
#!/bin/bash

create_page() {
    local path="$1"
    local title="$2"
    local locale="$3"
    
    cat > "$path" << TEMPLATE
'use client'

import Navigation from '@/components/sections/Navigation'
import Footer from '@/components/sections/Footer'
import { useState } from 'react'

export default function ${title}Page() {
  const [locale, setLocale] = useState<'en' | 'mm'>('${locale}')

  return (
    <main className="min-h-screen">
      <Navigation locale={locale} onLocaleChange={setLocale} />
      
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              <span className="gradient-text">${title}</span>
            </h1>
            <p className="text-xl text-slate-300">
              NexoraSIM ${title} - Premium IoT eSIM Platform
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
TEMPLATE
}

# Additional English pages
create_page "app/en/carriers/page.tsx" "Carriers" "en"
create_page "app/en/devices/page.tsx" "Devices" "en"
create_page "app/en/integrations/page.tsx" "Integrations" "en"
create_page "app/en/security/page.tsx" "Security" "en"
create_page "app/en/analytics/page.tsx" "Analytics" "en"
create_page "app/en/documentation/page.tsx" "Documentation" "en"
create_page "app/en/api/page.tsx" "API" "en"
create_page "app/en/pricing/page.tsx" "Pricing" "en"
create_page "app/en/enterprise/page.tsx" "Enterprise" "en"
create_page "app/en/partners/page.tsx" "Partners" "en"

# Additional Myanmar pages
create_page "app/mm/carriers/page.tsx" "Carriers" "mm"
create_page "app/mm/devices/page.tsx" "Devices" "mm"
create_page "app/mm/integrations/page.tsx" "Integrations" "mm"
create_page "app/mm/security/page.tsx" "Security" "mm"
create_page "app/mm/analytics/page.tsx" "Analytics" "mm"
create_page "app/mm/documentation/page.tsx" "Documentation" "mm"
create_page "app/mm/api/page.tsx" "API" "mm"
create_page "app/mm/pricing/page.tsx" "Pricing" "mm"
create_page "app/mm/enterprise/page.tsx" "Enterprise" "mm"
create_page "app/mm/partners/page.tsx" "Partners" "mm"

# Create sub-pages for comprehensive coverage
for section in features architecture compliance iot products solutions; do
  for subsection in overview technical specifications implementation; do
    mkdir -p "app/en/$section/$subsection" "app/mm/$section/$subsection"
    create_page "app/en/$section/$subsection/page.tsx" "${section^}${subsection^}" "en"
    create_page "app/mm/$section/$subsection/page.tsx" "${section^}${subsection^}" "mm"
  done
done

# Create carrier-specific pages
for carrier in mpt atom mytel; do
  mkdir -p "app/en/carriers/$carrier" "app/mm/carriers/$carrier"
  create_page "app/en/carriers/$carrier/page.tsx" "${carrier^^}" "en"
  create_page "app/mm/carriers/$carrier/page.tsx" "${carrier^^}" "mm"
done

# Create device-specific pages
for device in android ios ipad watch wearables; do
  mkdir -p "app/en/devices/$device" "app/mm/devices/$device"
  create_page "app/en/devices/$device/page.tsx" "${device^}" "en"
  create_page "app/mm/devices/$device/page.tsx" "${device^}" "mm"
done


#!/bin/bash

# Create basic page template
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

# English pages
create_page "app/en/compliance/page.tsx" "Compliance" "en"
create_page "app/en/iot/page.tsx" "IoT Platform" "en"
create_page "app/en/contact/page.tsx" "Contact" "en"
create_page "app/en/products/page.tsx" "Products" "en"
create_page "app/en/solutions/page.tsx" "Solutions" "en"
create_page "app/en/resources/page.tsx" "Resources" "en"
create_page "app/en/company/page.tsx" "Company" "en"
create_page "app/en/support/page.tsx" "Support" "en"

# Myanmar pages
create_page "app/mm/features/page.tsx" "Features" "mm"
create_page "app/mm/architecture/page.tsx" "Architecture" "mm"
create_page "app/mm/compliance/page.tsx" "Compliance" "mm"
create_page "app/mm/iot/page.tsx" "IoT Platform" "mm"
create_page "app/mm/contact/page.tsx" "Contact" "mm"
create_page "app/mm/products/page.tsx" "Products" "mm"
create_page "app/mm/solutions/page.tsx" "Solutions" "mm"
create_page "app/mm/resources/page.tsx" "Resources" "mm"
create_page "app/mm/company/page.tsx" "Company" "mm"
create_page "app/mm/support/page.tsx" "Support" "mm"


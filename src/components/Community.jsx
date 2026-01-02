import React from 'react'
import Container from './Container'
import Card from './Card'
import { Users, Building2, Network } from 'lucide-react'

const Community = () => {
  return (
    <section className="py-24 bg-white">
      <Container>
        {/* Heading */}
        <div className="text-center max-w-[720px] mx-auto">
          <h2 className="text-[36px] font-semibold leading-[44px] text-gray-800">
            Manage your entire community <br /> in a single system
          </h2>
          <p className="mt-4 text-[16px] text-gray-500">
            Who is Nexcent suitable for?
          </p>
        </div>

        {/* Cards */}
        <div className="mt-20 flex justify-center gap-16">
          <Card
            icon={<Users size={22} />}
            heading="Membership Organisations"
            text="Our membership management software provides full automation of membership renewals and payments."
          />

          <Card
            icon={<Building2 size={22} />}
            heading="National Associations"
            text="Our membership management software provides full automation of membership renewals and payments."
          />

          <Card
            icon={<Network size={22} />}
            heading="Clubs And Groups"
            text="Our membership management software provides full automation of membership renewals and payments."
          />
        </div>
      </Container>
    </section>
  )
}

export default Community

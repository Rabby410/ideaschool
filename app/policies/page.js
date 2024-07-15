import React from 'react';
import Breadcrumbs from '../components/common/breadcrumb';

const PoliciesPage = () => {
  return (
    <>
    <Breadcrumbs pageTitle="Policies" parentPage="Home" parentPageUrl="/"/>
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Our Policies</h1>

      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">1. Privacy Policy</h2>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero ac nunc accumsan, vitae
          consectetur enim ultrices. Nunc ac metus et leo laoreet molestie. Aenean nec ultricies odio. Nulla vitae lorem
          id orci pharetra aliquet vel nec purus.
        </p>

        <h2 className="text-2xl font-semibold mb-4">2. Refund Policy</h2>
        <p className="mb-4">
          Vestibulum commodo odio eu justo fermentum, ut rutrum odio lacinia. Morbi sit amet libero nec libero molestie
          mollis. Nullam tristique placerat mauris, sed vehicula velit. Mauris vitae luctus felis.
        </p>

        <h2 className="text-2xl font-semibold mb-4">3. Terms of Service</h2>
        <p className="mb-4">
          Phasellus tincidunt, leo sit amet eleifend lacinia, dui nisi tincidunt enim, vitae ullamcorper dui lacus vel
          ipsum. Integer auctor nisi ut justo lacinia dignissim. Sed et posuere magna.
        </p>

        <h2 className="text-2xl font-semibold mb-4">4. Cookie Policy</h2>
        <p className="mb-4">
          Duis ut nunc at turpis maximus mattis non a urna. Curabitur quis augue quis lacus ultrices rutrum. Integer
          hendrerit, velit sit amet cursus vestibulum, augue ex consequat libero, sed elementum libero dui et ex.
        </p>
      </div>
    </div>
    </>
  );
};

export default PoliciesPage;

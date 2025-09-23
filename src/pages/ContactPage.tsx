
import ContactForm from '@/components/modules/contact/ContactForm';
import ContactHero from '@/components/modules/contact/ContactHero';
import ContactInfo from '@/components/modules/contact/ContactInfo';
import ContactWithMap from '@/components/modules/contact/ContactWithMap';
import OfficeLocations from '@/components/modules/contact/OfficeLocations';

const ContactPage = () => {
  return (
    <div className='bg-background space-y-16'>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <OfficeLocations />
      <ContactWithMap></ContactWithMap>
      
    </div>
  );
};
export default ContactPage;

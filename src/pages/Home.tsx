import SelfIntroduction from '../components/self-introduction/SelfIntroduction';
import SocialMediaLinks from '../components/social-media-links/SocialMediaLinks';

export default function Home() {
  return (
    <>
      <SelfIntroduction />
      <section className="my-social-links">
        Find me on:
        <SocialMediaLinks />
      </section>
    </>
  );
}

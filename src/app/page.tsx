import Nav from '@/components/Nav';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <>
      <Nav />
      <main className="min-h-screen mx-auto w-full px-4 sm:px-6 md:px-8 max-w-3xl lg:max-w-4xl">
        <Hero />
      </main>
    </>
  );
}

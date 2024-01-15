import { Arrivals } from './components/arrivals/Arrivals';
import { Banner } from './components/banner/Banner';
import { Brands } from './components/brands/Brands';
import { Community } from './components/community/Community';
import { Favourite } from './components/favourite/Favourite';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { Hero } from './components/hero/Hero';
import { Vouchers } from './components/vouchers/Vouchers';

export function App() {
  return (
    <>
      <Header />
      <Hero />
      <Brands />
      <Arrivals />
      <Banner />
      <Favourite />
      <Vouchers />
      <Community />
      <Footer />
    </>
  );
};